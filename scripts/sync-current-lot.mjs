#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const execute = process.argv.includes('--execute');
const configPath = path.resolve('src', 'config', 'imersao-5ed.ts');
const pagePaths = [
  'imersao-5ed.astro', 'imersao-5ed-v1-02.astro', 'imersao-5ed-v2.astro',
  'imersao-5ed-v3.astro', 'imersao-5ed-v4.astro', 'imersao-5ed-v5.astro',
  'imersao-5ed-v6.astro', 'imersao-5ed-v7.astro', 'imersao-5ed-v8.astro',
  '5ed-lote-zero.astro', 'imersao-5ed-pre-venda.astro',
].map((file) => path.resolve('src', 'pages', file));

const switches = [
  { id: 'lote-zero', startsAt: '2026-06-01T03:00:00.000Z' },
  { id: 'lote-01', startsAt: '2026-07-15T03:00:00.000Z' },
  { id: 'lote-02', startsAt: '2026-07-22T03:00:00.000Z' },
  { id: 'lote-03', startsAt: '2026-07-31T03:00:00.000Z' },
];

const nowArg = process.env.T9_NOW;
const now = nowArg ? new Date(nowArg) : new Date();
if (Number.isNaN(now.getTime())) throw new Error(`T9_NOW inválido: ${nowArg}`);
const expected = switches.filter((lot) => new Date(lot.startsAt) <= now).at(-1);
if (!expected) throw new Error(`Nenhum lote configurado para ${now.toISOString()}`);

const source = fs.readFileSync(configPath, 'utf8');
const match = source.match(/IMERSAO_5ED_CURRENT_LOT_ID: Imersao5edLotId = '([^']+)'/);
if (!match) throw new Error('Não foi possível localizar IMERSAO_5ED_CURRENT_LOT_ID');
const current = match[1];
const updated = source.replace(
  /IMERSAO_5ED_CURRENT_LOT_ID: Imersao5edLotId = '[^']+'/,
  `IMERSAO_5ED_CURRENT_LOT_ID: Imersao5edLotId = '${expected.id}'`,
);

const forbidden = [
  { pattern: /lote zero ativo/i, label: 'texto de lote zero expirado' },
  { pattern: /R\$\s*19,90/i, label: 'preço de lote zero expirado' },
  { pattern: /urgencyLotId=["']lote-zero["']/i, label: 'contador fixo no lote zero' },
  { pattern: /href=["']https:\/\/pay\.hotmart\.com/i, label: 'bypass direto do pré-checkout' },
];
const violations = [];
for (const pagePath of pagePaths) {
  if (!fs.existsSync(pagePath)) {
    violations.push({ page: path.basename(pagePath), issue: 'página ausente' });
    continue;
  }
  const text = fs.readFileSync(pagePath, 'utf8');
  for (const rule of forbidden) if (rule.pattern.test(text)) violations.push({ page: path.basename(pagePath), issue: rule.label });
}
if (violations.length) {
  console.error(JSON.stringify({ status: 'BLOCKED_BY_PAGE_QA', now: now.toISOString(), current, expected: expected.id, violations }, null, 2));
  process.exit(2);
}

const changed = current !== expected.id;
if (execute && changed) fs.writeFileSync(configPath, updated, 'utf8');
console.log(JSON.stringify({ status: changed ? execute ? 'UPDATED' : 'READY_TO_UPDATE' : 'ALREADY_CURRENT', execute, now: now.toISOString(), current, expected: expected.id, changed, pages_checked: pagePaths.length }, null, 2));

