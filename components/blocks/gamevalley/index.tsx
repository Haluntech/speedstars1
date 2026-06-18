'use client';

import { Card } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGamepad, faTrophy, faStar, faBolt, faRocket, faFootballBall, faRunning, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';

library.add(faGamepad, faTrophy, faStar, faBolt, faRocket, faFootballBall, faRunning, faFlagCheckered);

interface GameNavItem {
  id: number;
  name: string;
  icon: string;
  description: string;
  route: string;
  key: string;
}

const gameNavItems: GameNavItem[] = [
  { id: 1, name: 'Speed Stars', icon: 'fas fa-bolt text-yellow-300', description: 'Play the main Speed Stars game', route: '/', key: 'speed-stars' },
  { id: 2, name: 'Running Games', icon: 'fas fa-running text-lime-300', description: 'Sprint, jump, dodge, and chase records', route: '/gamelist/running-games', key: 'running' },
  { id: 3, name: 'Sports Games', icon: 'fas fa-football-ball text-emerald-300', description: 'Fast sports arcade games', route: '/gamelist/sports-games', key: 'sports' },
  { id: 4, name: 'Racing Games', icon: 'fas fa-flag-checkered text-orange-300', description: 'Race, drift, and react fast', route: '/gamelist/racing-games', key: 'racing' },
  { id: 5, name: 'Skill Games', icon: 'fas fa-rocket text-sky-300', description: 'Timing and reflex challenges', route: '/gamelist/skill-games', key: 'skill' },
  { id: 6, name: 'New Games', icon: 'fas fa-star text-pink-300', description: 'Newest games on SpeedStars1', route: '/gamelist/new-games', key: 'new' },
  { id: 7, name: 'Hot Games', icon: 'fas fa-trophy text-amber-300', description: 'Most popular games', route: '/gamelist/hotgames', key: 'hot' },
];

interface GameNavProps {
  currentCategory?: string;
}

export default function GameNavComponent({ currentCategory }: GameNavProps) {
  const getValidIconName = (iconName: string | undefined): IconName => {
    const processed = (iconName || '').replace(/^fa/i, '').toLowerCase().trim();
    const validIcons = ['gamepad', 'trophy', 'star', 'bolt', 'rocket', 'football-ball', 'running', 'flag-checkered'];
    return validIcons.includes(processed) ? (processed as IconName) : 'gamepad';
  };

  return (
    <Card className="w-full mx-auto my-6 p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-blue-800 to-emerald-600 border border-white/10 shadow-xl overflow-hidden">
      <div className="flex gap-3 overflow-x-auto pb-1 justify-start lg:justify-center scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
        {gameNavItems.map((item) => {
          const iconParts = item.icon.split(' ');
          const iconName = iconParts[1].replace('fa-', '');
          const isActive = currentCategory === item.key || currentCategory === item.name.toLowerCase();
          return (
            <a
              key={item.id}
              href={item.route}
              aria-label={item.description}
              className={`group shrink-0 flex items-center gap-3 rounded-full border px-5 py-3 transition-all duration-200 ${
                isActive
                  ? 'bg-white text-blue-900 border-white shadow-lg scale-[1.02]'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40'
              }`}
            >
              <FontAwesomeIcon
                icon={['fas' as IconPrefix, getValidIconName(iconName)] as [IconPrefix, IconName]}
                className={`text-lg ${isActive ? 'text-blue-700' : iconParts[2]}`}
              />
              <span className="text-sm sm:text-base font-bold whitespace-nowrap tracking-tight">{item.name}</span>
            </a>
          );
        })}
      </div>
    </Card>
  );
}
