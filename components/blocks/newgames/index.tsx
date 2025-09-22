'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface NewGameProps {
  gameType?: string;
}

export default function NewGameComponent({ gameType }: NewGameProps) {
  const t = useTranslations();

  // 获取最新发布的游戏（按发布日期排序）
  const getNewGames = () => {
    // 这里可以从 API 或其他数据源获取新游戏
    // 暂时返回示例数据
    return [
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
      }
    ];
  };

  const newGames = getNewGames();

  return (
    <div className="space-y-6">
      {/* 标题区域 */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {t('newGames.title', { default: '最新游戏' })}
        </h2>
        <p className="text-gray-600">
          {t('newGames.subtitle', { default: '体验最新发布的精彩游戏' })}
        </p>
      </div>

      {/* 游戏展示区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newGames.map((game) => (
          <Card key={game.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-2 right-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  NEW
                </span>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {game.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 capitalize">
                {game.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {new Date(game.releaseDate).toLocaleDateString()}
                </span>
                <Link href={game.path}>
                  <Button size="sm" className="hover:bg-primary/90">
                    {t('common.playNow', { default: '立即游戏' })}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 查看更多按钮 */}
      <div className="text-center">
        <Link href="/gamelist/new-games">
          <Button variant="outline" size="lg">
            {t('newGames.viewMore', { default: '查看更多新游戏' })}
          </Button>
        </Link>
      </div>
    </div>
  );
}