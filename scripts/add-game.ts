#!/usr/bin/env ts-node

import { mkdirSync, existsSync, writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function formatDate(d = new Date()) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function genPageTsx({ title, slug, iframeUrl, gameType }: { title: string; slug: string; iframeUrl: string; gameType: string; }) {
  return `export default function ${title.replace(/[^A-Za-z0-9]/g, '')}Page() {
  return (
    <>
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          <iframe
            src="${iframeUrl}"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* 结构化内容区域 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
          {/* 游戏介绍 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-sky-400">⊗ ${title}</h2>
            <p className="mb-4">This is a ${gameType} game embedded via iframe. Enjoy the gameplay and challenge yourself!</p>
          </section>

          {/* 玩法指南 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">⊞ Control Matrix</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Basic Controls</h3>
                <p>Use keyboard or touch controls provided by the game iframe.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-rose-400">⊗ Quantum FAQ</h2>
            <dl className="space-y-4">
              <dt className="font-semibold">Q: What category is this game?</dt>
              <dd className="text-sm text-gray-300 ml-4">This game belongs to the ${gameType} category.</dd>
            </dl>
          </section>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": "${title}",
        "url": "/gamelist/${slug}",
        "image": "/images/${slug}-cover.jpg",
        "description": "A ${gameType} game: ${title}.",
        "gamePlatform": ["Web", "Mobile"],
        "genre": ["${gameType.charAt(0).toUpperCase() + gameType.slice(1)}"],
        "applicationCategory": "Game",
        "author": { "@type": "Organization", "name": "Speedstars1" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      })}} />
    </>
  );
}
`;
}

function updateListGame({ title, slug, gameType }: { title: string; slug: string; gameType: string }) {
  const listPath = join(process.cwd(), 'components', 'blocks', 'listgame', 'index.tsx');
  if (!existsSync(listPath)) {
    console.warn(`[WARN] listgame file not found: ${listPath}`);
    return;
  }

  const src = readFileSync(listPath, 'utf8');
  const arrStart = src.indexOf('const games = [');
  if (arrStart === -1) {
    console.warn('[WARN] Could not locate "const games = [" in listgame file.');
    return;
  }
  const arrEnd = src.indexOf('];', arrStart);
  if (arrEnd === -1) {
    console.warn('[WARN] Could not locate closing "];" for games array.');
    return;
  }

  // Determine next id
  const arrayBlock = src.slice(arrStart, arrEnd);
  const idMatches = Array.from(arrayBlock.matchAll(/id:\s*(\d+)/g));
  const ids = idMatches.map((m) => parseInt(m[1], 10)).filter((n) => !Number.isNaN(n));
  const nextId = ids.length ? Math.max(...ids) + 1 : 1;

  const newEntry = `\n      {\n        id: ${nextId},\n        title: '${title}',\n        desc: '${gameType}',\n        releaseDate: '${formatDate()}',\n        popularity: 95,\n        image: '/imgs/games/${slug}.png',\n        path: '/gamelist/${slug}'\n      },\n`;

  const updated = src.slice(0, arrEnd) + newEntry + src.slice(arrEnd);
  writeFileSync(listPath, updated, 'utf8');
  console.log(`Updated GameList: + { id: ${nextId}, title: '${title}' }`);
}

function main() {
  const [,, rawTitle, iframeUrl, gameType] = process.argv;
  if (!rawTitle || !iframeUrl || !gameType) {
    console.error('Usage: pnpm add:game "Game Title" "<iframe_url>" "<game_type>"');
    process.exit(1);
  }
  const title = rawTitle.trim();
  const slug = slugify(title);
  const baseDir = join(process.cwd(), 'app', '[locale]', '(default)', 'gamelist', slug);

  if (!existsSync(baseDir)) {
    mkdirSync(baseDir, { recursive: true });
  }

  const pagePath = join(baseDir, 'page.tsx');
  if (existsSync(pagePath)) {
    console.error(`page.tsx already exists at ${pagePath}`);
    process.exit(1);
  }

  const content = genPageTsx({ title, slug, iframeUrl, gameType });
  writeFileSync(pagePath, content, 'utf8');
  console.log(`Created: ${pagePath}`);

  // Append a game item into components/blocks/listgame/index.tsx
  updateListGame({ title, slug, gameType });
}

main();