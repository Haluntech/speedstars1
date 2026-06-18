import GameNavComponent from '@/components/blocks/gamevalley';
import GameList from '@/components/blocks/listgame';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sports Games on SpeedStars1',
  itemListElement: ['Soccer Random', 'Basket Random', 'Volley Random', 'Football Legends', 'Basketball Stars'].map((name, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
  })),
};

export default function SportsGamesPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GameNavComponent currentCategory="sports" />

      <section className="rounded-2xl bg-gradient-to-br from-emerald-700 via-blue-800 to-slate-950 p-8 text-white shadow-xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-200">Arcade Sports</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">Sports Games</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-blue-50">
          Sports games on SpeedStars1 are selected for quick play, simple controls, and instant competition. Instead of long simulations, this category focuses on arcade sports games that match the fast rhythm of Speed Stars: short rounds, funny physics, clear goals, and easy restarts. Players can move from sprinting to soccer, basketball, volleyball, and football without leaving the same lightweight game hub. This makes the page useful for visitors who enjoy athletic themes but want a casual browser experience. The goal is not to list every sports title online. The goal is to build a compact sports arcade shelf around games that feel active, competitive, and replayable.
        </p>
      </section>

      <GameList gameType="sports" />

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ['What sports games are on SpeedStars1?', 'The category includes soccer, basketball, volleyball, football, and other fast arcade sports games.'],
          ['Are these simulation games?', 'No. This page focuses on quick arcade sports games rather than deep realistic simulations.'],
          ['Why are sports games connected to Speed Stars?', 'Speed Stars attracts players who like athletic timing and competition, so sports games are a natural next click.'],
          ['Which sports game should I try first?', 'Start with Soccer Random or Basket Random if you want short and funny competitive rounds.'],
        ].map(([question, answer]) => (
          <div key={question} className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-900">{question}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
          </div>
        ))}
      </section>

      <nav className="flex flex-wrap gap-3 text-sm font-semibold text-blue-700">
        <a href="/">Speed Stars</a>
        <a href="/gamelist/running-games">Running Games</a>
        <a href="/gamelist/racing-games">Racing Games</a>
        <a href="/gamelist/skill-games">Skill Games</a>
        <a href="/gamelist/hotgames">Hot Games</a>
        <a href="/gamelist/new-games">New Games</a>
      </nav>
    </div>
  );
}
