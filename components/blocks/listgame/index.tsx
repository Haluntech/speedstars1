'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';

type Game = {
  id: number;
  title: string;
  desc: string;
  releaseDate?: string;
  popularity?: number;
  image: string;
  path: string;
};

const speedStarsGames: Game[] = [
  { id: 1, title: 'Speed Stars', desc: 'running', releaseDate: '2026-06-01', popularity: 100, image: '/imgs/games/speed-stars.png', path: '/' },
  { id: 2, title: 'Speed Legends', desc: 'running', releaseDate: '2026-06-18', popularity: 98, image: '/imgs/games/speed-legends.png', path: '/gamelist/speed-legends' },
  { id: 3, title: 'Sprinter', desc: 'running', releaseDate: '2026-06-18', popularity: 96, image: '/imgs/games/sprinter.png', path: '/gamelist/sprinter' },
  { id: 4, title: 'Athletics Hero', desc: 'running', releaseDate: '2026-06-18', popularity: 94, image: '/imgs/games/athletics-hero.png', path: '/gamelist/athletics-hero' },
  { id: 5, title: 'Hurdles', desc: 'running', releaseDate: '2026-06-18', popularity: 93, image: '/imgs/games/hurdles.png', path: '/gamelist/hurdles' },
  { id: 6, title: 'Run 3', desc: 'running', releaseDate: '2026-06-18', popularity: 92, image: '/imgs/games/run-3.png', path: '/gamelist/run-3' },
  { id: 7, title: 'Running Fred', desc: 'running', releaseDate: '2026-06-18', popularity: 91, image: '/imgs/games/running-fred.png', path: '/gamelist/running-fred' },
  { id: 8, title: 'Vex', desc: 'skill', releaseDate: '2026-06-18', popularity: 90, image: '/imgs/games/vex.png', path: '/gamelist/vex' },
  { id: 9, title: 'Slope', desc: 'skill', releaseDate: '2026-06-18', popularity: 97, image: '/imgs/games/slope.png', path: '/gamelist/slope' },
  { id: 10, title: 'Tunnel Rush', desc: 'skill', releaseDate: '2026-06-18', popularity: 95, image: '/imgs/games/tunnel-rush.png', path: '/gamelist/tunnel-rush' },
  { id: 11, title: 'Drive Mad', desc: 'racing', releaseDate: '2026-06-18', popularity: 94, image: '/imgs/games/drive-mad.png', path: '/gamelist/drive-mad' },
  { id: 12, title: 'Drift Boss', desc: 'racing', releaseDate: '2026-06-18', popularity: 93, image: '/imgs/games/drift-boss.png', path: '/gamelist/drift-boss' },
  { id: 13, title: 'Moto X3M', desc: 'racing', releaseDate: '2026-06-18', popularity: 92, image: '/imgs/games/moto-x3m.png', path: '/gamelist/moto-x3m' },
  { id: 14, title: 'Traffic Rider', desc: 'racing', releaseDate: '2026-06-18', popularity: 90, image: '/imgs/games/traffic-rider.png', path: '/gamelist/traffic-rider' },
  { id: 15, title: 'Geometry Dash', desc: 'skill', releaseDate: '2025-06-14', popularity: 95, image: '/imgs/games/geometrydash.png', path: '/gamelist/geometry-dash' },
  { id: 16, title: 'Curve Rush', desc: 'skill', releaseDate: '2026-06-18', popularity: 91, image: '/imgs/games/curve-rush.png', path: '/gamelist/curve-rush' },
  { id: 17, title: 'Soccer Random', desc: 'sports', releaseDate: '2026-06-18', popularity: 94, image: '/imgs/games/soccer-random.png', path: '/gamelist/soccer-random' },
  { id: 18, title: 'Basket Random', desc: 'sports', releaseDate: '2026-06-18', popularity: 93, image: '/imgs/games/basket-random.png', path: '/gamelist/basket-random' },
  { id: 19, title: 'Volley Random', desc: 'sports', releaseDate: '2026-06-18', popularity: 91, image: '/imgs/games/volley-random.png', path: '/gamelist/volley-random' },
  { id: 20, title: 'Football Legends', desc: 'sports', releaseDate: '2026-06-18', popularity: 90, image: '/imgs/games/football-legends.png', path: '/gamelist/football-legends' },
  { id: 21, title: 'Basketball Stars', desc: 'sports', releaseDate: '2026-06-18', popularity: 89, image: '/imgs/games/basketball-stars.png', path: '/gamelist/basketball-stars' },
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
      {filteredGames.map((game) => (
        <Card key={game.id} className="group relative overflow-hidden hover:shadow-xl transition-all rounded-xl border border-slate-200">
          <div className="aspect-video relative bg-slate-200">
            <a href={game.path} aria-label={`Play ${game.title}`}>
              <Image
                src={game.image}
                alt={`${game.title} online game`}
                fill
                className="object-cover transition-transform group-hover:scale-105 cursor-pointer"
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
      ))}
    </div>
  );
}
