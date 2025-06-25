import { getLandingPage } from "@/services/page";
import GameComponent from "@/components/blocks/puzzlegame";
import GameNavComponent from "@/components/blocks/gamevalley";
import GameList from "@/components/blocks/listgame"

export default function PuzzleGamesPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <GameNavComponent currentCategory="puzzle" />
      
      <GameComponent gameType="puzzle" />

      <div className="bg-white-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">All Puzzle Games</h2>
        <GameList gameType="puzzle" />
      </div>
      <section className="bg-gray-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-sky-400">Cosmic Puzzle Collection</h2>
        <p className="mb-4">In SplintaBrix's quantum universe, cosmic order is maintained through <strong className="text-purple-300">dynamic equilibrium mechanisms</strong>. This puzzle collection features mind-bending challenges that will test your spatial reasoning and strategic thinking abilities.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-3 text-cyan-300">【How to Play】</h3>
        <ul className="space-y-2 mb-6">
          <li>Move right・・・・・・・➡</li>
          <li>Move left・・・・・・・ ⬅</li>
          <li>Hard drop・・・・・・・ ⬆</li>
          <li>Soft drop・・・・・・・ ⬇</li>
          <li>Rotate clockwise・・・・ X key</li>
          <li>Rotate counterclockwise・Z key</li>
          <li>Hold・・・・・・・・・ C key</li>
          <li>Reset・・・・・・・・・ V key</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-6 mb-3 text-cyan-300">【Game Modes】</h3>
        <ul className="space-y-3 mb-6">
          <li><strong>Infinity</strong>: No clear conditions - play indefinitely.</li>
          <li><strong>40Line</strong>: Clear 40 lines to complete - time attack mode.</li>
          <li><strong>20Line</strong>: Clear 20 lines to complete - time attack mode.</li>
          <li><strong>Ultra</strong>: Compete for highest score within 3 minutes.</li>
          <li><strong>Match Practice</strong>: Periodic garbage blocks - score competition.</li>
          <li><strong>Edit</strong>: Freely place pieces as you like.</li>
          <li><strong>Replay</strong>: Watch recording of your last game.</li>
          <li><strong>Option</strong>: Adjust sensitivity, effects and other settings.</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-6 mb-3 text-cyan-300">【Terms】</h3>
        <ul className="space-y-2 mb-6">
          <li><strong>ARR</strong>: Horizontal movement speed</li>
          <li><strong>DAS</strong>: Delay before automatic movement starts when holding left/right</li>
          <li><strong>SDF</strong>: Soft drop speed</li>
        </ul>
      </section>
    </div>
  );
}