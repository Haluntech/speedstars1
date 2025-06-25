'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import Icon from '@/components/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

interface GameNavItem {
  id: number;
  name: string;
  icon: string;
  description: string;
  route: string;
}

const gameNavItems: GameNavItem[] = [
  { id: 1, name: 'Puzzle Games', icon: 'fas fa-palette text-purple-500', description: 'Puzzle games', route: '/gamelist/puzzlegames' },
  { id: 2, name: 'Color Games', icon: 'fas fa-palette text-purple-500', description: 'Color Games', route: '/gamelist/colorgames' },
  { id: 3, name: 'Math Games', icon: 'fas fa-calculator text-green-500', description: 'Math Games', route: '/gamelist/mathgames' },
  { id: 4, name: 'Block Games', icon: 'fas fa-cube text-red-500', description: 'Block Games', route: '/gamelist/blockgames' },
  { id: 5, name: 'Horror Games', icon: 'fas fa-ghost text-orange-500', description: 'Horror Games', route: '/gamelist/horrorgames' },
  { id: 6, name: 'Armor Games', icon: 'fas fa-ghost text-orange-500', description: 'Armor Games', route: '/gamelist/Armorgames' },
  { id: 7, name: 'Tetris', icon: 'fas fa-gamepad text-pink-500', description: 'Classic Puzzle', route: '/gamelist/tetrisgames' }
];

interface GameNavProps {
  currentCategory?: string;
}

export default function GameNavComponent({ currentCategory }: GameNavProps) {
  return (
    <Card className="min-h-fit w-full mx-auto my-6 p-6 bg-gradient-to-b from-sky-400 to-blue-600 backdrop-blur-lg">
      <div className="flex flex-row gap-4 justify-center">
        {gameNavItems.map((item) => {
          const iconParts = item.icon.split(' ');
          const iconName = iconParts[1].replace('fa-', '');
          return (
            <a
              key={item.id}
              href={item.route}
              className={`group flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-colors ${currentCategory === item.name.toLowerCase() ? 'bg-gray-800' : ''}`}
            >
              <FontAwesomeIcon 
                icon={['fas' as IconPrefix, iconName as IconName]} 
                className={`text-xl ${iconParts[2]} mr-3 text-white`}
              />
              <span className="text-base font-semibold text-white group-hover:text-blue-300">{item.name}</span>
            </a>
          );
        })}
      </div>
    </Card>
  );
}