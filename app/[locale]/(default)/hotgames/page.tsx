import { getLandingPage } from "@/services/page";
import GameNavComponent from "@/components/blocks/gamevalley";
import HotGameCard from "@/components/blocks/hotgamecard"

// Hot games data with comprehensive SEO optimization
const hotGames = [
  { id: 'cosmic-tetris', name: 'Cosmic Tetris', releaseDate: '2025-05-10', category: 'puzzle', image: '/images/games/cosmic-tetris.jpg', description: 'Top-rated space-themed Tetris game with stunning cosmic visuals and multiplayer battles', rating: 4.8, players: '100K+', trending: true },
  { id: 'neon-racer', name: 'Neon Racer', releaseDate: '2025-06-15', category: 'racing', image: '/images/games/neon-racer.jpg', description: 'Fast-paced neon racing game with global leaderboards and competitive gameplay', rating: 4.7, players: '85K+', trending: true },
  { id: 'battle-royale-pro', name: 'Battle Royale Masters', releaseDate: '2025-07-22', category: 'shooter', image: '/images/games/battle-royale-pro.jpg', description: 'Elite battle royale experience with 100-player matches and advanced mechanics', rating: 4.9, players: '300K+', trending: true },
  { id: 'galactic-odyssey', name: 'Galactic Odyssey', releaseDate: '2025-08-30', category: 'rpg', image: '/images/games/galactic-odyssey.jpg', description: 'Open-world space RPG with millions of active players and immersive storytelling', rating: 4.6, players: '150K+' },
  { id: 'beat-master', name: 'Beat Master', releaseDate: '2025-09-18', category: 'music', image: '/images/games/beat-master.jpg', description: 'Music rhythm game with chart-topping songs and competitive gameplay modes', rating: 4.5, players: '120K+' }
];

export default function HotGamesPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <GameNavComponent currentCategory="hot-games" />
      
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl p-8 mb-8 shadow-xl">
        <h1 className="text-4xl font-bold text-white mb-4">Trending Games</h1>
        <p className="text-gray-100 mb-6">Discover our most popular games based on player ratings, active players, and community engagement. These titles represent the pinnacle of gaming excellence.</p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotGames.map(game => (
          <div key={game.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative">
              <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
              {game.trending && (
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">TRENDING</div>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{game.name}</h3>
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full flex items-center">{game.rating}★</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">Released: {game.releaseDate}</p>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">{game.description}</p>
              <div className="flex justify-between items-center">
                <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{game.category}</span>
                <span className="text-gray-400 text-xs">{game.players} players</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}