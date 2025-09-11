import { getLandingPage } from "@/services/page";
import GameComponent from "@/components/blocks/mathgame";
import GameNavComponent from "@/components/blocks/gamevalley";
import GameList from "@/components/blocks/listgame";

export default function MathGamesPage() {
  return (
    <div className="max-w-30xl mx-auto p-6 space-y-8">
      <GameNavComponent currentCategory="math" />
      
      <GameComponent gameType="math" />

      <div className="bg-white-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">All Math Games</h2>
        <GameList gameType="math" />
      </div>
    </div>
  );
}