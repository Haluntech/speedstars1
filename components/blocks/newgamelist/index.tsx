'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface Game {
  id: number;
  title: string;
  desc: string;
  releaseDate: string;
  popularity: number;
  image: string;
  path: string;
}

interface NewGameListProps {
  games?: Game[];
  gameType?: string;
}

export default function NewGameList({ games = [], gameType }: NewGameListProps) {
  const t = useTranslations();

  // 默认新游戏数据（如果没有传入games）
  const defaultNewGames: Game[] = [
    {
      id: 26,
      title: 'Geometry Dash 2',
      desc: 'puzzle',
      releaseDate: '2025-01-20',
      popularity: 95,
      image: '/imgs/games/geometry-dash-2.png',
      path: '/gamelist/geometry-dash-2'
    },
    {
      id: 25,
      title: 'New Adventure',
      desc: 'adventure',
      releaseDate: '2025-01-19',
      popularity: 90,
      image: '/imgs/games/new-adventure.png',
      path: '/gamelist/new-adventure'
    },
    {
      id: 24,
      title: 'Space Explorer',
      desc: 'action',
      releaseDate: '2025-01-18',
      popularity: 88,
      image: '/imgs/games/space-explorer.png',
      path: '/gamelist/space-explorer'
    }
  ];

  const gameList = games.length > 0 ? games : defaultNewGames;

  // 根据发布日期排序（最新的在前）
  const sortedGames = gameList.sort((a, b) => 
    new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
  );

  return (
    <div className="space-y-6">
      {/* 游戏网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {sortedGames.map((game) => (
          <Card key={game.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute top-2 left-2">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                  NEW
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={game.path}>
                  <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white shadow-lg">
                    {t('common.play', { default: '游戏' })}
                  </Button>
                </Link>
              </div>
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium text-sm mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                {game.title}
              </h3>
              <p className="text-gray-500 text-xs capitalize mb-2">
                {game.desc}
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">
                  {new Date(game.releaseDate).toLocaleDateString('zh-CN', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-500">{game.popularity}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 空状态 */}
      {gameList.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {t('newGames.noGames', { default: '暂无新游戏' })}
          </h3>
          <p className="text-gray-500">
            {t('newGames.checkLater', { default: '请稍后再来查看最新游戏' })}
          </p>
        </div>
      )}
    </div>
  );
}