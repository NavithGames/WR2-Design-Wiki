#!/usr/bin/env node
/**
 * Extract base64 images from Google Docs HTML export
 * and save them as separate files.
 *
 * Usage: node extract-images.js <html-file> <output-dir>
 */

const fs = require('fs');
const path = require('path');

const htmlFile = process.argv[2];
const outputDir = process.argv[3];

if (!htmlFile || !outputDir) {
  console.error('Usage: node extract-images.js <html-file> <output-dir>');
  process.exit(1);
}

const html = fs.readFileSync(htmlFile, 'utf-8');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Find all base64 image sources
const imgRegex = /src="data:image\/(png|jpeg|gif|webp);base64,([^"]+)"/g;
let match;
let index = 0;
const images = [];

while ((match = imgRegex.exec(html)) !== null) {
  index++;
  const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
  const base64Data = match[2];
  const filename = `img${String(index).padStart(2, '0')}.${ext}`;
  const filepath = path.join(outputDir, filename);

  // Decode and save
  const buffer = Buffer.from(base64Data, 'base64');
  fs.writeFileSync(filepath, buffer);

  console.log(`  ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
  images.push({ index, filename, size: buffer.length });
}

console.log(`\nExtracted ${images.length} images to ${outputDir}/`);

// Output markdown references for easy copy-paste
console.log('\nMarkdown references:');
images.forEach(img => {
  console.log(`![${img.filename}](img/${img.filename})`);
});
