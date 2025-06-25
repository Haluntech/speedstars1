import { getLandingPage } from "@/services/page";
import NewGameComponent from "@/components/blocks/newgames";
import GameNavComponent from "@/components/blocks/gamevalley";
import NewGameList from "@/components/blocks/newgamelist"

// 2025年5月以降の新着ゲームデータ
const newGamesSinceMay2025 = [
  { id: 'cosmic-tetris', name: 'Cosmic Tetris', releaseDate: '2025-05-10', category: 'puzzle', image: '/images/games/cosmic-tetris.jpg', description: 'A space-themed Tetris variant with stunning cosmic visuals and physics-based gameplay' },
  { id: 'neon-racing', name: 'Neon Racing', releaseDate: '2025-06-15', category: 'racing', image: '/images/games/neon-racing.jpg', description: 'Futuristic racing game with neon visuals and responsive controls' },
  { id: 'quantum-chess', name: 'Quantum Chess', releaseDate: '2025-07-22', category: 'strategy', image: '/images/games/quantum-chess.jpg', description: 'Revolutionary chess variant with quantum mechanics and parallel universe gameplay' },
  { id: 'galactic-defense', name: 'Galactic Defense', releaseDate: '2025-08-30', category: 'shooter', image: '/images/games/galactic-defense.jpg', description: 'Space-themed tower defense with real-time strategy elements' },
  { id: 'rhythm-master', name: 'Rhythm Master', releaseDate: '2025-09-18', category: 'music', image: '/images/games/rhythm-master.jpg', description: 'Music rhythm game featuring AI-generated soundtracks based on player preferences' }
];

export default function NewGamesPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <GameNavComponent currentCategory="new-releases" />
      
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 rounded-2xl p-8 mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">2025 New Releases</h1>
        <p className="text-gray-300 mb-6">Discover our latest gaming experiences launched since May 2025, featuring cutting-edge graphics and innovative gameplay mechanics.</p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newGamesSinceMay2025.map(game => (
          <div key={game.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-1">{game.name}</h3>
              <p className="text-gray-400 text-sm mb-2">Released: {game.releaseDate}</p>
              <p className="text-gray-300 text-sm mb-4">{game.description}</p>
              <span className="inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{game.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}