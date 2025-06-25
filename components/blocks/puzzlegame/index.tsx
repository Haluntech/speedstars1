"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Icon from "@/components/icon";

interface GameProps {
  gameType?: string;
}

export default function GameComponent({ gameType }: GameProps) {
  const t = useTranslations();

  return (
    <Card className="p-6">
{/* 游戏展示区域 */}
      <div className="mb-4">
        <iframe
          src={gameType === 'puzzle' 
            ? "https://colorwood.xyz/suikagame/index.html" 
            : "https://colorwood.xyz/default-game.html"}
          className="mx-auto max-w-4xl w-full aspect-video rounded-lg"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {/* 游戏选择区域 */}
      <div className="grid grid-cols-3 gap-4">
        {[
       
        ].map((game) => (
          <Card key={game.id} className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Icon name={game.icon} className="text-xl text-primary" />
              <div>
                <h3 className="font-medium">{game.name}</h3>
                <p className="text-sm text-gray-500">{game.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* 游戏状态显示 */}
      
    </Card>
  );
}