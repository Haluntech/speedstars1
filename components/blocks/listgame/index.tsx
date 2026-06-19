'use client';

import { Card } from '@/components/ui/card';

type Game = {
  id: number;
  title: string;
  desc: string;
  releaseDate?: string;
  popularity?: number;
  image: string;
  path: string;
};

const categoryGradients: Record<string, [string, string, string]> = {
  running: ['#0f172a', '#2563eb', '#22c55e'],
  racing: ['#111827', '#ef4444', '#f97316'],
  sports: ['#052e16', '#16a34a', '#facc15'],
  skill: ['#1e1b4b', '#7c3aed', '#06b6d4'],
  puzzle: ['#312e81', '#9333ea', '#f472b6'],
  action: ['#111827', '#dc2626', '#f59e0b'],
  tetris: ['#172554', '#0891b2', '#a3e635'],
  sprunki: ['#3b0764', '#db2777', '#f97316'],
  math: ['#064e3b', '#0d9488', '#facc15'],
  fishing: ['#083344', '#0284c7', '#7dd3fc'],
};

const escapeSvgText = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const createGameThumbnail = (game: Game) => {
  const [start, middle, end] = categoryGradients[game.desc.toLowerCase()] ?? categoryGradients.skill;
  const title = escapeSvgText(game.title);
  const category = escapeSvgText(game.desc.toUpperCase());
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${start}"/>
          <stop offset="0.55" stop-color="${middle}"/>
          <stop offset="1" stop-color="${end}"/>
        </linearGradient>
        <linearGradient id="track" x1="0" y1="0" x2="1" y2="0">
          <stop stop-color="#ffffff" stop-opacity="0.15"/>
          <stop offset="1" stop-color="#ffffff" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" rx="0" fill="url(#bg)"/>
      <circle cx="690" cy="90" r="70" fill="#ffffff" opacity="0.14"/>
      <circle cx="120" cy="340" r="100" fill="#ffffff" opacity="0.08"/>
      <path d="M-20 315 C130 250 215 385 360 300 S600 160 840 245" stroke="url(#track)" stroke-width="26" fill="none" stroke-linecap="round"/>
      <path d="M70 332 L240 240 L315 290 L445 180 L735 315" stroke="#ffffff" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.62"/>
      <g transform="translate(94 86)">
        <rect x="0" y="0" width="164" height="42" rx="21" fill="#ffffff" opacity="0.18"/>
        <text x="82" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="800" fill="#ffffff" letter-spacing="2">${category}</text>
      </g>
      <text x="400" y="222" text-anchor="middle" font-family="Arial, sans-serif" font-size="56" font-weight="900" fill="#ffffff">${title}</text>
      <text x="400" y="278" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#ffffff" opacity="0.86">Play Online on SpeedStars1</text>
      <text x="400" y="388" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="800" fill="#ffffff" opacity="0.72">SPEED • SKILL • ARCADE</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const getCardImage = (game: Game) => {
  // The new SpeedStars-focused cards do not have real PNG assets in the repo yet.
  // Use generated SVG thumbnails immediately instead of showing missing image icons.
  if (game.id < 100) {
    return createGameThumbnail(game);
  }

  return game.image;
};

const speedStarsGames: Game[] = [
  { id: 1, title: 'Speed Stars', desc: 'running', releaseDate: '2026-06-01', popularity: 100, image: '', path: '/' },
  { id: 2, title: 'Track Dash', desc: 'running', releaseDate: '2026-05-01', popularity: 99, image: '', path: '/gamelist/track-dash' },
  { id: 3, title: 'QWOP', desc: 'running', releaseDate: '2026-06-19', popularity: 98, image: '', path: '/gamelist/qwop' },
  { id: 4, title: 'Vex Try To Fly', desc: 'skill', releaseDate: '2026-06-19', popularity: 97, image: '', path: '/gamelist/vex-try-to-fly' },
  { id: 5, title: 'Stumble Race', desc: 'running', releaseDate: '2026-06-19', popularity: 96, image: '', path: '/gamelist/stumble-race' },
  { id: 6, title: 'Slope Rider', desc: 'racing', releaseDate: '2026-06-19', popularity: 96, image: '', path: '/gamelist/slope-rider' },
  { id: 7, title: 'Speed Slope', desc: 'skill', releaseDate: '2026-06-19', popularity: 95, image: '', path: '/gamelist/speed-slope' },
  { id: 8, title: 'Soccer Bros 2', desc: 'sports', releaseDate: '2026-06-19', popularity: 95, image: '', path: '/gamelist/soccer-bros-2' },
  { id: 9, title: 'Volley.io', desc: 'sports', releaseDate: '2026-06-19', popularity: 94, image: '', path: '/gamelist/volley-io' },
  { id: 10, title: 'Drift Rush', desc: 'racing', releaseDate: '2026-06-19', popularity: 94, image: '', path: '/gamelist/drift-rush' },
  { id: 11, title: 'Traffic Road', desc: 'racing', releaseDate: '2026-06-19', popularity: 93, image: '', path: '/gamelist/traffic-road' },
  { id: 12, title: 'Tap Road', desc: 'skill', releaseDate: '2026-06-19', popularity: 93, image: '', path: '/gamelist/tap-road' },
  { id: 13, title: 'Golf Hit', desc: 'sports', releaseDate: '2026-06-19', popularity: 92, image: '', path: '/gamelist/golf-hit' },
  { id: 14, title: 'RocketGoal.io', desc: 'sports', releaseDate: '2026-06-19', popularity: 92, image: '', path: '/gamelist/rocketgoal-io' },
  { id: 15, title: 'Skate Dash', desc: 'racing', releaseDate: '2026-06-19', popularity: 91, image: '', path: '/gamelist/skate-dash' },
  { id: 16, title: 'Stunt Bike Extreme', desc: 'racing', releaseDate: '2026-06-19', popularity: 91, image: '', path: '/gamelist/stunt-bike-extreme' },
  { id: 17, title: 'Slope 2', desc: 'skill', releaseDate: '2026-06-19', popularity: 90, image: '', path: '/gamelist/slope-2' },
  { id: 18, title: 'Speed Legends', desc: 'running', releaseDate: '2026-06-18', popularity: 89, image: '', path: '/gamelist/speed-legends' },
  { id: 19, title: 'Sprinter', desc: 'running', releaseDate: '2026-06-18', popularity: 88, image: '', path: '/gamelist/sprinter' },
  { id: 20, title: 'Athletics Hero', desc: 'running', releaseDate: '2026-06-18', popularity: 87, image: '', path: '/gamelist/athletics-hero' },
  { id: 21, title: 'Hurdles', desc: 'running', releaseDate: '2026-06-18', popularity: 86, image: '', path: '/gamelist/hurdles' },
  { id: 22, title: 'Run 3', desc: 'running', releaseDate: '2026-06-18', popularity: 85, image: '', path: '/gamelist/run-3' },
  { id: 23, title: 'Running Fred', desc: 'running', releaseDate: '2026-06-18', popularity: 84, image: '', path: '/gamelist/running-fred' },
  { id: 24, title: 'Vex', desc: 'skill', releaseDate: '2026-06-18', popularity: 83, image: '', path: '/gamelist/vex' },
  { id: 25, title: 'Slope', desc: 'skill', releaseDate: '2026-06-18', popularity: 82, image: '', path: '/gamelist/slope' },
  { id: 26, title: 'Tunnel Rush', desc: 'skill', releaseDate: '2026-06-18', popularity: 81, image: '', path: '/gamelist/tunnel-rush' },
  { id: 27, title: 'Drive Mad', desc: 'racing', releaseDate: '2026-06-18', popularity: 80, image: '', path: '/gamelist/drive-mad' },
  { id: 28, title: 'Drift Boss', desc: 'racing', releaseDate: '2026-06-18', popularity: 79, image: '', path: '/gamelist/drift-boss' },
  { id: 29, title: 'Moto X3M', desc: 'racing', releaseDate: '2026-06-18', popularity: 78, image: '', path: '/gamelist/moto-x3m' },
  { id: 30, title: 'Traffic Rider', desc: 'racing', releaseDate: '2026-06-18', popularity: 77, image: '', path: '/gamelist/traffic-rider' },
  { id: 31, title: 'Geometry Dash', desc: 'skill', releaseDate: '2025-06-14', popularity: 76, image: '', path: '/gamelist/geometry-dash' },
  { id: 32, title: 'Curve Rush', desc: 'skill', releaseDate: '2026-06-18', popularity: 75, image: '', path: '/gamelist/curve-rush' },
  { id: 33, title: 'Soccer Random', desc: 'sports', releaseDate: '2026-06-18', popularity: 74, image: '', path: '/gamelist/soccer-random' },
  { id: 34, title: 'Basket Random', desc: 'sports', releaseDate: '2026-06-18', popularity: 73, image: '', path: '/gamelist/basket-random' },
  { id: 35, title: 'Volley Random', desc: 'sports', releaseDate: '2026-06-18', popularity: 72, image: '', path: '/gamelist/volley-random' },
  { id: 36, title: 'Football Legends', desc: 'sports', releaseDate: '2026-06-18', popularity: 71, image: '', path: '/gamelist/football-legends' },
  { id: 37, title: 'Basketball Stars', desc: 'sports', releaseDate: '2026-06-18', popularity: 70, image: '', path: '/gamelist/basketball-stars' },
];

const legacyGames: Game[] = [
  { id: 102, title: 'Splinta Brix', desc: 'skill', releaseDate: '2025-05-20', popularity: 88, image: '/imgs/games/Splinta Brix.png', path: '/gamelist/SplintaBrix/' },
  { id: 103, title: 'Split Push', desc: 'skill', releaseDate: '2025-05-20', popularity: 87, image: '/imgs/games/splitpush.png', path: '/gamelist/splitpush' },
  { id: 104, title: 'Tiny Fishing', desc: 'fishing', releaseDate: '2025-05-20', popularity: 84, image: '/imgs/games/tinyfishing.png', path: '/gamelist/tinyfishing' },
  { id: 105, title: 'Zombie Derby 2', desc: 'racing', releaseDate: '2025-05-20', popularity: 86, image: '/imgs/games/zombiederby2.png', path: '/gamelist/zombiederby2' },
  { id: 106, title: 'Trials of the Crescent Moon', desc: 'action', releaseDate: '2024-05-20', popularity: 80, image: '/imgs/games/trails-of-the-crescent-moon.png', path: '/gamelist/trials-of-the-crescent-moon' },
  { id: 107, title: 'From The Depth', desc: 'puzzle', releaseDate: '2024-05-20', popularity: 79, image: '/imgs/games/from-the-depth.png', path: '/gamelist/fromthedepth' },
  { id: 108, title: 'Ammo Flow', desc: 'action', popularity: 79, image: '/imgs/games/ammo-flow.png', path: '/gamelist/ammo-flow' },
  { id: 109, title: 'Diet Hard', desc: 'puzzle', releaseDate: '2024-05-20', popularity: 78, image: '/imgs/games/diet-hard.png', path: '/gamelist/diet-hard' },
  { id: 110, title: 'Log Legend', desc: 'skill', releaseDate: '2024-05-20', popularity: 82, image: '/imgs/games/log-legend.png', path: '/gamelist/log-legend' },
  { id: 111, title: 'Ride The Line', desc: 'racing', popularity: 83, image: '/imgs/games/ride-the-line.png', path: '/gamelist/ride-the-line' },
  { id: 112, title: 'Illumicati', desc: 'puzzle', popularity: 78, image: '/imgs/games/illumicati.png', path: '/gamelist/illumicati' },
  { id: 113, title: 'Balance', desc: 'skill', releaseDate: '2024-05-20', popularity: 82, image: '/imgs/games/balance.png', path: '/gamelist/balance' },
  { id: 114, title: 'My Castle', desc: 'action', releaseDate: '2024-05-20', popularity: 76, image: '/imgs/games/my-castle.png', path: '/gamelist/my-castle' },
  { id: 116, title: 'Ninja3', desc: 'skill', releaseDate: '2025-06-14', popularity: 84, image: '/imgs/games/ninja3.png', path: '/gamelist/ninja3' },
  { id: 117, title: 'Color Crusade', desc: 'puzzle', releaseDate: '2025-06-14', popularity: 75, image: '/imgs/games/colorcrusade.png', path: '/gamelist/colorcrusade' },
  { id: 118, title: 'Solitaire 2048', desc: 'puzzle', releaseDate: '2025-06-14', popularity: 76, image: '/imgs/games/solitaire2048.png', path: '/gamelist/solitaire2048' },
  { id: 119, title: 'Tetris', desc: 'tetris', releaseDate: '2024-06-20', popularity: 81, image: '/imgs/games/tetris1.png', path: '/gamelist/tetris1' },
  { id: 120, title: 'Treemino', desc: 'puzzle', releaseDate: '2024-06-20', popularity: 74, image: '/imgs/games/treemino.png', path: '/gamelist/treemino' },
  { id: 121, title: 'Tetris 2', desc: 'tetris', releaseDate: '2024-06-20', popularity: 78, image: '/imgs/games/tetris2.png', path: '/gamelist/tetris2' },
  { id: 122, title: 'Tetris 3', desc: 'tetris', releaseDate: '2024-06-20', popularity: 77, image: '/imgs/games/tetris3.png', path: '/gamelist/tetris3' },
  { id: 123, title: 'Herry Tetris', desc: 'tetris', releaseDate: '2025-06-20', popularity: 77, image: '/imgs/games/herrytetris.png', path: '/gamelist/herrytetris' },
  { id: 124, title: 'Wordle', desc: 'math', releaseDate: '2025-06-20', popularity: 79, image: '/imgs/games/wordle1.png', path: '/gamelist/wordle1' },
  { id: 125, title: 'Wordle 2', desc: 'math', releaseDate: '2025-06-20', popularity: 78, image: '/imgs/games/wordle2.png', path: '/gamelist/wordle2' },
  { id: 126, title: 'Sprunki Remix', desc: 'sprunki', releaseDate: '2025-09-11', popularity: 83, image: '/imgs/games/sprunki2.png', path: '/gamelist/sprunki2' },
  { id: 127, title: 'Sprunki3', desc: 'sprunki', releaseDate: '2025-09-11', popularity: 82, image: '/imgs/games/sprunki3.png', path: '/gamelist/sprunki3' },
  { id: 128, title: 'Spacedout', desc: 'sprunki', releaseDate: '2025-09-22', popularity: 81, image: '/imgs/games/spacedout.png', path: '/gamelist/spacedout' },
  { id: 129, title: 'Cool As Ice Cream', desc: 'sprunki', releaseDate: '2025-09-22', popularity: 80, image: '/imgs/games/coolasicecream.png', path: '/gamelist/coolasicecream' },
  { id: 130, title: 'Sprunki EXP', desc: 'sprunki', releaseDate: '2025-09-22', popularity: 80, image: '/imgs/games/sprunkiexp.png', path: '/gamelist/sprunkiexp' },
  { id: 131, title: 'Sprunky', desc: 'sprunki', releaseDate: '2025-09-22', popularity: 79, image: '/imgs/games/sprunky.png', path: '/gamelist/sprunky' },
  { id: 132, title: 'Sprunk Fruity', desc: 'sprunki', releaseDate: '2025-09-23', popularity: 79, image: '/imgs/games/sprunkfruity.png', path: '/gamelist/sprunkfruity' },
  { id: 133, title: 'Sprunki1', desc: 'sprunki', releaseDate: '2025-09-23', popularity: 78, image: '/imgs/games/sprunki1.png', path: '/gamelist/sprunki1' },
];

const games = [...speedStarsGames, ...legacyGames];

export default function GameList({ gameType }: { gameType?: string }) {
  const filteredGames = (() => {
    if (!gameType) return games;

    switch (gameType.toLowerCase()) {
      case 'new':
        return [...games].sort((a, b) =>
          new Date(b.releaseDate ?? '1970-01-01').getTime() - new Date(a.releaseDate ?? '1970-01-01').getTime()
        );
      case 'hot':
        return [...games].sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
      default:
        return games.filter((game) => game.desc.toLowerCase() === gameType.toLowerCase());
    }
  })();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2 bg-slate-50">
      {filteredGames.map((game) => {
        const generatedThumbnail = createGameThumbnail(game);
        return (
          <Card key={game.id} className="group relative overflow-hidden hover:shadow-xl transition-all rounded-xl border border-slate-200">
            <div className="aspect-video relative bg-slate-200 overflow-hidden">
              <a href={game.path} aria-label={`Play ${game.title}`}>
                <img
                  src={getCardImage(game)}
                  alt={`${game.title} online game`}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105 cursor-pointer"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = generatedThumbnail;
                  }}
                />
              </a>
            </div>
            <div className="p-4 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-gray-900">{game.title}</h3>
                <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold uppercase text-blue-700">{game.desc}</span>
              </div>
              <p className="text-gray-600 mt-2 text-sm">Play {game.title} online on SpeedStars1.</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
