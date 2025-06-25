'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function GameList({ gameType }: { gameType?: string }) {
  const games = [
    {
      id: 1,
      title: 'Castle crashers breast',
      desc: 'beard',
      releaseDate: '2024-05-20',
      popularity: 95,
      image: '/imgs/games/castlecrashing.png',
      path: '/gamelist/castlecrashing/'
    },
    {
        id: 2,
        title: 'Splinta Brix',
        desc: 'Action',
        releaseDate: '2025-05-20',
        popularity: 95,
        image: '/imgs/games/Splinta Brix.png',
        path: '/gamelist/SplintaBrix/',
      },
      {
        id: 3,
        title: 'Split push',
        desc: 'Balance',
        releaseDate: '2025-05-20',
        popularity: 95,
        image: '/imgs/games/splitpush.png',
        path: '/gamelist/splitpush'
      },
      {
        id: 4,
        title: 'Tiny Fishing',
        desc: 'Fishing',
        releaseDate: '2025-05-20',
        popularity: 95,
        image: '/imgs/games/tinyfishing.png',
        path: '/gamelist/tinyfishing'
      },
      {
        id: 5,
        title: 'Zombie Derby 2',
        desc: 'zombie',
        releaseDate: '2025-05-20',
        popularity: 95,
        image: '/imgs/games/zombiederby2.png',
        path: '/gamelist/zombiederby2'
      },{
        id: 6,
        title: 'Trials of the crescent moon',
        desc: 'battles',
        releaseDate: '2024-05-20',
        popularity: 95,
        image: '/imgs/games/trails-of-the-crescent-moon.png',
        path: '/gamelist/trials-of-the-crescent-moon'
      },
      {
        id: 7,
        title: 'from_the_depth',
        desc: 'puzzle',
        releaseDate: '2024-05-20',
        popularity: 95,
        image: '/imgs/games/from-the-depth.png',
        path: '/gamelist/fromthedepth'
      },
      {
        id: 8,
        title: 'Ammo Flow',
        desc: 'shooting',
        image: '/imgs/games/ammo-flow.png',
        path: '/gamelist/ammo-flow'
      },
      {
        id: 9,
        title: 'Diet Hard',
        desc: 'Puzzle',
        releaseDate: '2024-05-20',
        popularity: 95,
        image: '/imgs/games/diet-hard.png',
        path: '/gamelist/diet-hard'
      },
      {
        id: 10,
        title: 'log-legend',
        desc: 'puzzle',
        releaseDate: '2024-05-20',
        popularity: 95,
        image: '/imgs/games/log-legend.png',
        path: '/gamelist/log-legend'
      },
      {
        id: 11,
        title: 'ride-the-line',
        desc: 'ride',
        image: '/imgs/games/ride-the-line.png',
        path: '/gamelist/ride-the-line'
      },
      {
        id: 12,
        title: 'illumicati',
        desc: 'puzzel',
        image: '/imgs/games/illumicati.png',
        path: '/gamelist/illumicati'
      },
      {
        id: 13,
        title: 'balance',
        desc: 'puzzel',
        releaseDate: '2024-05-20',
        popularity: 95,
        image: '/imgs/games/balance.png',
        path: '/gamelist/balance'
      }, {
        id: 14,
        title: 'my castle',
        desc: 'battle',
        releaseDate: '2024-05-20',
        popularity: 95,
        image: '/imgs/games/my-castle.png',
        path: '/gamelist/my-castle'
      },
      {
        id: 15,
        title: 'geometrydash',
        desc: 'puzzel',
        releaseDate: '2025-06-14',
        popularity: 95,
        image: '/imgs/games/geometrydash.png',
        path: '/gamelist/geometry-dash'
      },
      {
        id: 16,
        title: 'Ninja3',
        desc: 'puzzel',
        releaseDate: '2025-06-14',
        popularity: 95,
        image: '/imgs/games/ninja3.png',
        path: '/gamelist/ninja3'
      },
      {
        id: 17,
        title: 'colorcrusade',
        desc: 'puzzel',
        releaseDate: '2025-06-14',
        popularity: 95,
        image: '/imgs/games/colorcrusade.png',
        path: '/gamelist/colorcrusade'
      },
      {
        id: 18,
        title: 'Solitaire 2048',
        desc: 'solitaire',
        releaseDate: '2025-06-14',
        popularity: 95,
        image: '/imgs/games/solitaire2048.png',
        path: '/gamelist/solitaire2048'
      },
      {
        id: 19,
        title: 'Tetris',
        desc: 'tetris',
        releaseDate: '2024-06-20',
        popularity: 95,
        image: '/imgs/games/tetris1.png',
        path: '/gamelist/tetris1'
      },
      {
        id: 20,
        title: 'Treemino',
        desc: 'puzzel',
        releaseDate: '2024-06-20',
        popularity: 95,
        image: '/imgs/games/treemino.png',
        path: '/gamelist/treemino'
      },
      {
        id: 21,
        title: 'Tetris 2',
        desc: 'tetris',
        releaseDate: '2024-06-20',
        popularity: 95,
        image: '/imgs/games/tetris2.png',
        path: '/gamelist/tetris2'
      },
      

  ];
  
  const filteredGames = (() => {
    if (!gameType) return games;
    
    switch(gameType.toLowerCase()) {
      case 'new':
        return [...games].sort((a,b) => 
          new Date(b.releaseDate ?? '1970-01-01').getTime() - new Date(a.releaseDate ?? '1970-01-01').getTime()
        );
      case 'hot':
        return [...games].sort((a,b) => 
          (b.popularity ?? 0) - (a.popularity ?? 0)
        );
      default:
        return games.filter(game => 
          game.desc.toLowerCase() === gameType.toLowerCase()
        );
    }
  })();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2 bg-slate-50">
      {filteredGames.map((game) => (
        <Card 
          key={game.id}
          className="group relative overflow-hidden hover:shadow-xl transition-all rounded-none"
        >
          <div className="aspect-video relative">
            <a href={game.path}>
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover transition-transform group-hover:scale-105 cursor-pointer"
              />
            </a>
          </div>
          
          <div className="p-4 bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-gray-800">{game.title}</h3>
            <p className="text-gray-600 mt-2">{game.desc}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}