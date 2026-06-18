"use client";

import { Card } from "@/components/ui/card";
import Icon from "@/components/icon";
import { useEffect } from 'react';

export default function GameComponent() {
  useEffect(() => {
    let progress = 0;
    const progressDiv = document.querySelector('.progress') as HTMLElement | null;
    const progressContainer = document.querySelector('.progress-container') as HTMLElement | null;
    const interval = setInterval(() => {
      if (progress < 90 && progressDiv) {
        progress += Math.random() * 10;
        progressDiv.style.width = `${progress}%`;
      }
    }, 200);

    const iframe = document.getElementById('game-frame') as HTMLIFrameElement | null;
    if (iframe) {
      iframe.onload = function () {
        if (progressDiv) {
          clearInterval(interval);
          progressDiv.style.width = '100%';
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
    <Card className="p-4 sm:p-6 shadow-xl border border-slate-200">
      <div className="mb-6 relative">
        <div className="progress-container absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-[300px] max-w-[80%]">
          <div className="site-url text-center mb-2 text-white font-bold drop-shadow">speedstars1.com</div>
          <div className="progress-bar w-full h-5 bg-gray-800 rounded-full overflow-hidden">
            <div className="progress w-0 h-full bg-green-500 transition-all duration-500"></div>
          </div>
        </div>

        <iframe
          id="game-frame"
          src="https://1games.io/embed/speed-stars"
          title="Play Speed Stars Online"
          className="mx-auto max-w-5xl w-full aspect-video rounded-xl border border-slate-300 bg-black"
          allowFullScreen
          loading="lazy"
        />

        <button
          aria-label="Play Speed Stars in fullscreen"
          className="absolute bottom-4 right-4 bg-primary/80 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-all"
          onClick={() => {
            const iframe = document.querySelector('iframe') as any;
            if (iframe?.requestFullscreen) {
              iframe.requestFullscreen();
            } else if (iframe?.webkitRequestFullscreen) {
              iframe.webkitRequestFullscreen();
            } else if (iframe?.msRequestFullscreen) {
              iframe.msRequestFullscreen();
            }
          }}
        >
          <Icon name="maximize" className="w-6 h-6" />
        </button>
      </div>

      <section className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700 p-6 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-200">Play Speed Stars Online</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Speed Stars</h1>
          <p className="mt-4 leading-7 text-blue-50">
            Speed Stars is a fast sprinting game built around rhythm, timing, and tiny improvements. The goal is simple: get off the line, keep your stride under control, and push for a cleaner finish every run. SpeedStars1 keeps the main game at the top of the page and connects it to running games, sports games, racing games, and skill games so players can keep exploring after one race.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-900">Speed Stars Controls</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Focus on alternating inputs with a steady rhythm. The best runs usually come from clean timing instead of button mashing.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-900">Tips to Win</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Start smoothly, avoid panic taps, and restart quickly when your rhythm breaks. Treat every race as practice for a better split.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <a href="/gamelist/running-games" className="rounded-xl bg-emerald-50 p-5 font-bold text-emerald-800 hover:bg-emerald-100">More Running Games</a>
        <a href="/gamelist/sports-games" className="rounded-xl bg-blue-50 p-5 font-bold text-blue-800 hover:bg-blue-100">Sports Arcade Games</a>
        <a href="/gamelist/skill-games" className="rounded-xl bg-cyan-50 p-5 font-bold text-cyan-800 hover:bg-cyan-100">Skill and Reflex Games</a>
      </section>
    </Card>
  );
}
