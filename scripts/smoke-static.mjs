import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const outDir = join(root, 'out');
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function readOut(path) {
  const file = join(outDir, path);
  assert(existsSync(file), `missing static output: out/${path}`);
  return existsSync(file) ? readFileSync(file, 'utf8') : '';
}

function assertNoFallback(path) {
  const html = readOut(path);
  assert(!/NEXT_HTTP_ERROR_FALLBACK;404|__next_error__/.test(html), `404 fallback marker in out/${path}`);
  return html;
}

assert(existsSync(outDir), 'out directory missing; run npm run build first');

for (const path of [
  'index.html',
  'projects/index.html',
  'resume/index.html',
  'releases/index.html',
  'screens/index.html',
  'ai-agents/index.html'
]) {
  assertNoFallback(path);
}

const projectRoot = join(outDir, 'projects');
const projectSlugs = existsSync(projectRoot)
  ? readdirSync(projectRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith('_'))
  : [];

assert(projectSlugs.length > 0, 'no exported project detail routes found');
for (const slug of projectSlugs) {
  const html = assertNoFallback(`projects/${slug}/index.html`);
  assert(/Case study/.test(html), `project detail missing case-study marker: ${slug}`);
}

const resumeHtml = assertNoFallback('resume/index.html');
for (const id of [
  'backend-ko',
  'fullstack-ko',
  'commerce-backend-ko',
  'manufacturing-systems-ko',
  'ai-assisted-workflow-ko',
  'backend-en'
]) {
  assert(resumeHtml.includes(id), `resume route missing variant id: ${id}`);
}

const releasesHtml = assertNoFallback('releases/index.html');
for (const version of ['PF-v1.0.0', 'PF-v0.9.0', 'PF-v0.8.0', 'PF-v0.7.0', 'PF-v0.6.0']) {
  assert(releasesHtml.includes(version), `release route missing version: ${version}`);
}

if (failures.length > 0) {
  console.error('Static smoke failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Static smoke passed.');
