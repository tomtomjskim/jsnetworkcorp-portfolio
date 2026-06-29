import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const ignoredDirs = new Set(['.git', '.next', 'node_modules', 'out']);
const ignoredFiles = new Set(['scripts/validate-content.mjs']);
const scannedExtensions = new Set(['.css', '.js', '.json', '.md', '.mjs', '.sh', '.ts', '.tsx', '.yml', '.yaml']);
const allowedPortfolioVersions = new Set(['PF-v0.6.0', 'PF-v0.7.0', 'PF-v0.8.0', 'PF-v0.9.0', 'PF-v1.0.0']);

const privateTerms = ['tomtomjskim/burstexpress', 'Burst' + 'Express', 'Fr' + 'ecto', 'my' + 'kitchen'];
const metricTerms = ['15%', '50%', '95%'];

const sensitivePatterns = [
  { label: 'api key assignment', pattern: /api[_-]?key\s*[:=]/i },
  { label: 'secret assignment', pattern: /secret\s*[:=]/i },
  { label: 'password assignment', pattern: /password\s*[:=]/i },
  { label: 'private key block', pattern: /BEGIN (RSA|OPENSSH|PRIVATE) KEY/ },
  ...privateTerms.map((term) => ({ label: 'private or excluded project identifier', pattern: new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') })),
  ...metricTerms.map((term) => ({ label: 'raw metric claim', pattern: new RegExp(term.replace('%', '\\%')) }))
];

function extensionOf(path) {
  return extname(path);
}

function toRepoPath(path) {
  return relative(root, path).replaceAll('\\\\', '/');
}

function collectFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    if (ignoredDirs.has(name)) return [];
    const path = join(dir, name);
    const repoPath = toRepoPath(path);
    if (ignoredFiles.has(repoPath)) return [];
    const stat = statSync(path);
    if (stat.isDirectory()) return collectFiles(path);
    return scannedExtensions.has(extensionOf(path)) ? [path] : [];
  });
}

function readJson(path) {
  return JSON.parse(readFileSync(join(root, path), 'utf8'));
}

const hits = [];

for (const file of collectFiles(root)) {
  const content = readFileSync(file, 'utf8');
  for (const item of sensitivePatterns) {
    if (item.pattern.test(content)) {
      hits.push(`${toRepoPath(file)}: ${item.label}`);
    }
  }
}

function assert(condition, message) {
  if (!condition) hits.push(message);
}

function validateProjectIndex() {
  const indexPath = 'content/projects/index.json';
  assert(existsSync(join(root, indexPath)), `${indexPath}: missing`);
  if (!existsSync(join(root, indexPath))) return;

  const index = readJson(indexPath);
  assert(allowedPortfolioVersions.has(index.version), `${indexPath}: unsupported version ${index.version}`);
  assert(Array.isArray(index.projects), `${indexPath}: projects must be an array`);

  const slugs = new Set();
  for (const project of index.projects ?? []) {
    assert(typeof project.slug === 'string' && project.slug.length > 0, `${indexPath}: project slug required`);
    assert(!slugs.has(project.slug), `${indexPath}: duplicate slug ${project.slug}`);
    slugs.add(project.slug);
    assert(typeof project.title === 'string' && project.title.length > 0, `${indexPath}: title required for ${project.slug}`);
    assert(['PUBLIC_SAFE', 'ROLE_CONFIRM'].includes(project.redactionLevel), `${indexPath}: invalid redactionLevel for ${project.slug}`);
    if (project.contentPath !== null) {
      assert(existsSync(join(root, project.contentPath)), `${indexPath}: contentPath missing for ${project.slug}: ${project.contentPath}`);
    }
  }
}

function validateResumeIndex() {
  const indexPath = 'content/resume/index.json';
  assert(existsSync(join(root, indexPath)), `${indexPath}: missing`);
  if (!existsSync(join(root, indexPath))) return;

  const index = readJson(indexPath);
  assert(allowedPortfolioVersions.has(index.version), `${indexPath}: unsupported version ${index.version}`);
  assert(Array.isArray(index.resumes), `${indexPath}: resumes must be an array`);

  const ids = new Set();
  for (const resume of index.resumes ?? []) {
    assert(typeof resume.id === 'string' && resume.id.length > 0, `${indexPath}: resume id required`);
    assert(!ids.has(resume.id), `${indexPath}: duplicate resume id ${resume.id}`);
    ids.add(resume.id);
    assert(existsSync(join(root, resume.contentPath)), `${indexPath}: contentPath missing for ${resume.id}: ${resume.contentPath}`);
    assert(existsSync(join(root, resume.claimBank)), `${indexPath}: claimBank missing for ${resume.id}: ${resume.claimBank}`);
    assert(['PUBLIC_SAFE', 'ROLE_CONFIRM'].includes(resume.redactionLevel), `${indexPath}: invalid redactionLevel for ${resume.id}`);
  }

  const indexedPaths = new Set((index.resumes ?? []).map((resume) => resume.contentPath));
  const variantDir = join(root, 'content/resume/variants');
  if (existsSync(variantDir)) {
    for (const name of readdirSync(variantDir)) {
      if (extname(name) !== '.md') continue;
      const path = `content/resume/variants/${name}`;
      assert(indexedPaths.has(path), `${indexPath}: variant file is not indexed: ${path}`);
    }
  }
}

validateProjectIndex();
validateResumeIndex();

function validateVersionMetadata() {
  const version = readFileSync(join(root, 'VERSION'), 'utf8').trim();
  const packageJson = readJson('package.json');
  assert(version === packageJson.version, `VERSION and package.json version differ: ${version} != ${packageJson.version}`);
}

function validateReleaseTimeline() {
  const releaseDir = join(root, 'content/releases');
  if (!existsSync(releaseDir)) return;

  const dataSource = readFileSync(join(root, 'src/lib/data.ts'), 'utf8');
  for (const name of readdirSync(releaseDir)) {
    if (extname(name) !== '.md') continue;
    const markdown = readFileSync(join(releaseDir, name), 'utf8');
    const version = markdown.match(/^#\s+([A-Za-z0-9.-]+)/)?.[1];
    assert(Boolean(version), `content/releases/${name}: release heading version required`);
    if (version) {
      assert(dataSource.includes(`version: '${version}'`), `src/lib/data.ts: release timeline missing ${version}`);
    }
  }
}

validateVersionMetadata();
validateReleaseTimeline();

if (hits.length > 0) {
  console.error('Content validation failed:');
  for (const hit of hits) console.error(`- ${hit}`);
  process.exit(1);
}

console.log('Content validation passed.');
