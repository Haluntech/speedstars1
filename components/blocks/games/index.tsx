"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Icon from "@/components/icon";
import { useEffect } from 'react';

interface GameItem {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export default function GameComponent() {
  const t = useTranslations();
  
  const games: GameItem[] = [];

  useEffect(() => {
    // 模拟进度条
    let progress = 0;
    const progressDiv = document.querySelector('.progress') as HTMLElement | null;
    const progressContainer = document.querySelector('.progress-container') as HTMLElement | null;
    const interval = setInterval(() => {
      if (progress < 90 && progressDiv) {
        progress += Math.random() * 10;
        progressDiv.style.width = `${progress}%`;
      }
    }, 200);
  
    // 监听 iframe 加载完成
    const iframe = document.getElementById('game-frame') as HTMLIFrameElement | null;
    if (iframe) {
      iframe.onload = function () {
        if (progressDiv) {
          clearInterval(interval);
          progressDiv.style.width = '100%';
          // 1秒后隐藏进度条
          setTimeout(() => {
            if (progressContainer) {
              progressContainer.style.display = 'none';
            }
          }, 1000);
        }
      };
    }
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Card className="p-6">
      {/* 游戏展示区域 */}
      <div className="mb-4 relative">
        {/* 进度条和网址显示 */}
        <div className="progress-container absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-[300px]">
          <div className="site-url text-center mb-2 text-white">speedstars1.com</div>
          <div className="progress-bar w-full h-5 bg-gray-800 rounded-full overflow-hidden">
            <div className="progress w-0 h-full bg-green-500 transition-all duration-500"></div>
          </div>
        </div>
        
        <iframe
          id="game-frame"
          src="https://1games.io/embed/speed-stars"
          className="mx-auto max-w-4xl w-full aspect-video rounded-lg"
          allowFullScreen
          loading="lazy"
        />
        
        <button 
          className="absolute bottom-4 right-4 bg-primary/80 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-all"
          onClick={() => {
            const iframe = document.querySelector('iframe') as any;
            if (iframe?.requestFullscreen) {
              iframe.requestFullscreen();
            } else if (iframe?.webkitRequestFullscreen) { /* Safari */
              iframe.webkitRequestFullscreen();
            } else if (iframe?.msRequestFullscreen) { /* IE11 */
              iframe.msRequestFullscreen();
            }
          }}
        >
          <Icon name="maximize" className="w-6 h-6" />
        </button>
      </div>
      
      {/* 游戏选择区域 */}
      <div className="grid grid-cols-3 gap-4">
        {games.map((game) => (
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
    </Card>
  );
}