import { readFileSync } from 'node:fs';

const content = readFileSync(new URL('../src/lib/data.ts', import.meta.url), 'utf8');
const forbidden = [/api[_-]?key\s*[:=]/i, /secret\s*[:=]/i, /password\s*[:=]/i, /BEGIN (RSA|OPENSSH|PRIVATE) KEY/];
const hit = forbidden.find((pattern) => pattern.test(content));

if (hit) {
  console.error(`Sensitive-looking pattern found: ${hit}`);
  process.exit(1);
}

console.log('Content validation passed.');
