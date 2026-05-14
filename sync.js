#!/usr/bin/env node
/**
 * WR2 Design Wiki — Sync Script
 *
 * Google Docs 원문을 다시 다운로드하고 변경사항을 감지합니다.
 *
 * Usage:
 *   node sync.js              # 다운로드 + 변경 감지 리포트
 *   node sync.js --dry-run    # 다운로드만 하고 diff만 표시 (커밋 안 함)
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const WIKI_ROOT = __dirname;
const RAW_DIR = path.join(WIKI_ROOT, 'raw');
const META_FILE = path.join(RAW_DIR, 'sync-meta.json');

// Load or initialize sync metadata
function loadMeta() {
  if (fs.existsSync(META_FILE)) {
    return JSON.parse(fs.readFileSync(META_FILE, 'utf-8'));
  }
  return {};
}

function saveMeta(meta) {
  fs.writeFileSync(META_FILE, JSON.stringify(meta, null, 2), 'utf-8');
}

// Source document mapping: filename → Google Doc ID
const SOURCES = [
  { file: '01-identity.txt', docId: '1l8euBcwBHet-UxURzFggJQdYC1TcOOnwA7TDhSlTpHU', name: '정체성' },
  { file: '02-differentiation.txt', docId: '1Siufwzz3att5qd7n5D5vYj736kDsGiwmeCi6vp207mQ', name: '핵심 차별화' },
  { file: '03-core-loop.txt', docId: '1PGFAL7Ed7CuaE8p2f7724ZcRHYiVal0eRpFDqtuNAw4', name: '코어 루프' },
  { file: '04-delta-force-ref.txt', docId: '1Hs_kXteAPyhKKcuqyHIrClYqGstYBPRXjIqev0ykGzU', name: '델타포스 레퍼런스' },
  { file: '05-vehicle-types.txt', docId: '1KdIzUU4usW1fkAOYc4j5Q1nawV8Yds1Lp0tp4oP8kg8', name: '등장 차종' },
  { file: '06-gun-animation.txt', docId: '1bbmpaT8WUzJxlIfw33sKNBVCq3BlhpELV62d0RRL-eA', name: '총기 애니메이션' },
  { file: '07-gun-categories.txt', docId: '1bT5zkPh0apBMBXgR6OSRLEXf17w2S6UBpsaJQF5qhCo', name: '총기 계열' },
  { file: '08-ammo-types.txt', docId: '1oWE-blJJt-2Hh07PAL_S0arS_abw5XLVWuumFfGd5GM', name: '탄종' },
  { file: '09-ammo-specs.txt', docId: '1nRUCSPJM4k56lAkKGPZpaPkT6dhzr_xEHAhe0WytADY', name: '탄종별 제원' },
  { file: '10-gun-customization.txt', docId: '1nw2PSwf8eM-2x4W0DLDjtYqMmQtHsNNLy_ngtN9RtPA', name: '총기 커스터마이징' },
  { file: '11-tuning.txt', docId: '1S5lb1M8NcMZkNn6ec_1uyJvVMXqC39eKV5Y7agoBAgw', name: '튜닝' },
  { file: '12-skin.txt', docId: '1kumkhaSAk4_Wesd6XYMxys8oqFbaBBDIEiS-DCmplg8', name: '스킨' },
  { file: '13-gun-specs.txt', docId: '1agil5iEOV1jqetm4S5jhM4HDmuzP7zYuIKBtEf6XJyo', name: '총기 기본 스펙' },
  { file: '14-stance-movement.txt', docId: '1_sgiJk9Iqd0HGYndeL7yAcKh_ialGfQCPMryczw9njY', name: '자세 및 기동' },
  { file: '15-object-interaction.txt', docId: '12-FG9ZOrg5qNkGdeJ2KDQWXHQKHKuq8vNSEoRwATGSY', name: '사물 상호작용' },
  { file: '16-interaction-object-data.txt', docId: '1IPMoEdnmcFqUK-kofVDsM4uEvFVEpE1yRI1cXNxXPOc', name: '상호작용 오브젝트 데이터' },
  { file: '17-terrain-interaction.txt', docId: '1s7642ylEWu7NQVOD-qK1kNCjPKvNRO-5gJXLMACYjvg', name: '지형 상호작용' },
];

// Follow redirects and download content
function downloadDoc(docId) {
  return new Promise((resolve, reject) => {
    const url = `https://docs.google.com/document/d/${docId}/export?format=txt`;

    function fetch(fetchUrl, redirectCount = 0) {
      if (redirectCount > 5) return reject(new Error('Too many redirects'));

      const mod = fetchUrl.startsWith('https') ? https : http;
      mod.get(fetchUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetch(res.headers.location, redirectCount + 1);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for doc ${docId}`));
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
        res.on('error', reject);
      }).on('error', reject);
    }

    fetch(url);
  });
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');

  console.log('=== WR2 Design Wiki Sync ===\n');
  console.log(`Mode: ${dryRun ? 'DRY RUN (diff only)' : 'SYNC'}`);
  console.log(`Time: ${new Date().toISOString()}\n`);

  // Step 1: Download all docs
  console.log('--- Downloading Google Docs ---\n');

  const meta = loadMeta();
  const results = [];

  for (const src of SOURCES) {
    process.stdout.write(`  ${src.file} (${src.name})... `);
    try {
      const content = await downloadDoc(src.docId);
      const filePath = path.join(RAW_DIR, src.file);

      // Read old content for comparison
      let oldContent = '';
      if (fs.existsSync(filePath)) {
        oldContent = fs.readFileSync(filePath, 'utf-8');
      }

      const changed = content !== oldContent;

      // Write new content
      fs.writeFileSync(filePath, content, 'utf-8');

      const status = changed ? 'CHANGED' : 'unchanged';
      console.log(`${content.length} bytes [${status}]`);

      // Update sync metadata
      const now = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
      if (!meta[src.file]) meta[src.file] = {};
      meta[src.file].lastSynced = now;
      meta[src.file].name = src.name;
      if (changed) meta[src.file].lastChanged = now;

      results.push({ ...src, changed, oldSize: oldContent.length, newSize: content.length });
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      results.push({ ...src, changed: false, error: err.message });
    }
  }

  // Save sync metadata
  saveMeta(meta);

  // Step 2: Show diff summary
  const changed = results.filter(r => r.changed);
  const errors = results.filter(r => r.error);

  console.log('\n--- Sync Report ---\n');
  console.log(`  Total documents: ${SOURCES.length}`);
  console.log(`  Changed:         ${changed.length}`);
  console.log(`  Unchanged:       ${results.length - changed.length - errors.length}`);
  console.log(`  Errors:          ${errors.length}`);

  if (changed.length === 0) {
    console.log('\n  No changes detected. Wiki is up to date.\n');
    return;
  }

  console.log('\n--- Changed Documents ---\n');
  for (const c of changed) {
    console.log(`  [CHANGED] ${c.file} (${c.name})`);
    console.log(`            ${c.oldSize} → ${c.newSize} bytes (${c.newSize > c.oldSize ? '+' : ''}${c.newSize - c.oldSize})`);

    // Show git diff stats
    try {
      const diff = execSync(`git diff --stat -- "raw/${c.file}"`, { cwd: WIKI_ROOT, encoding: 'utf-8' });
      if (diff.trim()) {
        console.log(`            ${diff.trim()}`);
      }
    } catch (e) { /* ignore */ }

    // Show first few changed lines
    try {
      const diffLines = execSync(`git diff -U0 -- "raw/${c.file}"`, { cwd: WIKI_ROOT, encoding: 'utf-8' });
      const additions = diffLines.split('\n').filter(l => l.startsWith('+') && !l.startsWith('+++'));
      const deletions = diffLines.split('\n').filter(l => l.startsWith('-') && !l.startsWith('---'));
      if (additions.length > 0 || deletions.length > 0) {
        console.log(`            +${additions.length} lines added, -${deletions.length} lines removed`);
        // Show up to 3 sample changes
        const samples = additions.slice(0, 3);
        for (const s of samples) {
          const preview = s.substring(1, 80);
          console.log(`            + ${preview}${s.length > 81 ? '...' : ''}`);
        }
      }
    } catch (e) { /* ignore */ }

    console.log('');
  }

  if (errors.length > 0) {
    console.log('--- Errors ---\n');
    for (const e of errors) {
      console.log(`  [ERROR] ${e.file} (${e.name}): ${e.error}`);
    }
    console.log('');
  }

  // Step 3: Action summary
  console.log('--- Next Steps ---\n');
  console.log('  Changed raw/ files have been updated.');
  console.log('  To update wiki pages, run ingest on changed documents.');
  console.log('  Changed files:');
  for (const c of changed) {
    console.log(`    - raw/${c.file}`);
  }

  if (dryRun) {
    console.log('\n  [DRY RUN] No commits made. Run without --dry-run to apply.\n');
  } else {
    console.log('\n  Run `git diff raw/` to see detailed changes.');
    console.log('  Then re-ingest changed wiki pages and commit.\n');
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
