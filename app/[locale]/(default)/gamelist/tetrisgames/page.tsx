import { getLandingPage } from "@/services/page";
import GameComponent from "@/components/blocks/tetrisgames";
import GameNavComponent from "@/components/blocks/gamevalley";
import GameList from "@/components/blocks/listgame"

export default function TetrisGamesPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <GameNavComponent currentCategory="tetris" />
      
      <GameComponent gameType="tetris" />

      <div className="bg-white-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">All Tetris Games</h2>
        <GameList gameType="tetris" />
      </div>
    </div>
  );
}