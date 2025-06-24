import { getLandingPage } from "@/services/page";
import GameComponent from "@/components/blocks/puzzlegame";
import GameNavComponent from "@/components/blocks/gamevalley";
import GameList from "@/components/blocks/listgame"



export default function NewGamesPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <GameNavComponent currentCategory="new" />

      <div className="bg-white-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">
          🆕 New Releases
          <span className="text-sm text-gray-500 ml-2">Sorted by release date</span>
        </h2>
        <GameList gameType="new" />
      </div>
    </div>
  );
}