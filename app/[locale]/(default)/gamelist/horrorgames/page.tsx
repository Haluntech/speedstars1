import { getLandingPage } from "@/services/page";
import GameComponent from "@/components/blocks/horrorgame";
import GameNavComponent from "@/components/blocks/gamevalley";
import GameList from "@/components/blocks/listgame"

export default function HorrorGamesPage() {
  return (
    <div className="max-w-30xl mx-auto p-6 space-y-8">
      <GameNavComponent currentCategory="horror" />
      
      <GameComponent gameType="horror" />

      <div className="bg-white-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">All Horror Games</h2>
        <GameList gameType="horror" />
      </div>
    </div>
  );
}