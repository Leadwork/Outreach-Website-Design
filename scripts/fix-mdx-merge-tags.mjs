#!/usr/bin/env node
// Normalize all `{{merge_tags}}` in blog MDX to `[merge_tags]` bracket syntax —
// universally MDX-safe (brackets aren't special in MDX expressions) and a common
// template-placeholder convention. Also unwraps any `\`{{x}}\`` we previously
// added around merge tags so we don't leave clutter behind.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.resolve(__dirname, '..', 'content', 'blog');

let totalChanges = 0;
let totalFilesChanged = 0;

for (const file of fs.readdirSync(BLOG_DIR)) {
  if (!file.endsWith('.mdx')) continue;
  const filePath = path.join(BLOG_DIR, file);
  const original = fs.readFileSync(filePath, 'utf8');

  // First, unwrap `\`{{x}}\`` → `{{x}}` so we don't leave dangling backticks.
  let updated = original.replace(/`\{\{([^{}`]+)\}\}`/g, '{{$1}}');
  // Then, replace every {{x}} (whether or not previously wrapped) → [x].
  updated = updated.replace(/\{\{([^{}]+)\}\}/g, '[$1]');

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, 'utf8');
    totalFilesChanged++;
    const changes = (original.match(/\{\{[^{}]+\}\}/g) || []).length;
    totalChanges += changes;
    console.log(`  ${file}: ${changes} merge tag(s) converted`);
  }
}

console.log(`\nDone: ${totalChanges} merge tag(s) converted across ${totalFilesChanged} file(s).`);
