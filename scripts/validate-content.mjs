import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const ignoredDirs = new Set(['.git', '.next', 'node_modules', 'out']);
const scannedExtensions = new Set(['.css', '.js', '.json', '.md', '.mjs', '.sh', '.ts', '.tsx', '.yml', '.yaml']);
const forbidden = [
  /api[_-]?key\s*[:=]/i,
  /secret\s*[:=]/i,
  /password\s*[:=]/i,
  /BEGIN (RSA|OPENSSH|PRIVATE) KEY/
];

function extensionOf(path) {
  const index = path.lastIndexOf('.');
  return index === -1 ? '' : path.slice(index);
}

function collectFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    if (ignoredDirs.has(name)) return [];
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) return collectFiles(path);
    return scannedExtensions.has(extensionOf(path)) ? [path] : [];
  });
}

const hits = [];

for (const file of collectFiles(root)) {
  const content = readFileSync(file, 'utf8');
  const pattern = forbidden.find((item) => item.test(content));
  if (pattern) hits.push(`${file.replace(root, '')}: ${pattern}`);
}

if (hits.length > 0) {
  console.error('Sensitive-looking pattern found:');
  for (const hit of hits) console.error(`- ${hit}`);
  process.exit(1);
}

console.log('Content validation passed.');
