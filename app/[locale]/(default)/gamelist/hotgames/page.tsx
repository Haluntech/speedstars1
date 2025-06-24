import { getLandingPage } from "@/services/page";
import GameComponent from "@/components/blocks/puzzlegame";
import GameNavComponent from "@/components/blocks/gamevalley";
import GameList from "@/components/blocks/listgame"




export default function HotGamesPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <GameNavComponent currentCategory="hot" />

      <div className="bg-white-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          🔥 Hot Games
          <span className="text-sm text-gray-500 ml-2">Sorted by popularity score</span>
        </h2>
        <GameList gameType="hot" />
      </div>
    </div>
  );
}