import GameNavComponent from '@/components/blocks/gamevalley';
import GameList from '@/components/blocks/listgame';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Racing Games on SpeedStars1',
  itemListElement: ['Drive Mad', 'Drift Boss', 'Moto X3M', 'Traffic Rider', 'Ride The Line', 'Zombie Derby 2'].map((name, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
  })),
};

export default function RacingGamesPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GameNavComponent currentCategory="racing" />

      <section className="rounded-2xl bg-gradient-to-br from-slate-950 via-orange-700 to-yellow-500 p-8 text-white shadow-xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-100">Fast Reflex Games</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">Racing Games</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-orange-50">
          Racing games give SpeedStars1 a second strong traffic lane next to running games. The same user who enjoys Speed Stars often enjoys reaction-based driving, drifting, bike jumps, traffic dodging, and physics tracks because the loop is familiar: start fast, fail quickly, retry immediately, and improve through timing. This page collects racing and driving games that are easy to understand from the first click. It also helps the site feel like a complete speed arcade instead of a single-game page. Use this section to explore cars, bikes, slopes, and road challenges while keeping the experience lightweight and browser friendly.
        </p>
      </section>

      <GameList gameType="racing" />

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ['What are racing games?', 'Racing games focus on speed, steering, drifting, traffic, bike jumps, and fast reaction challenges.'],
          ['Are racing games similar to Speed Stars?', 'They are different sports, but both reward timing, rhythm, and fast retries.'],
          ['Which racing game should I try first?', 'Drive Mad, Drift Boss, Moto X3M, and Traffic Rider are strong first choices.'],
          ['Do these games need downloads?', 'SpeedStars1 is built around browser play and simple access from game pages.'],
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
        <a href="/gamelist/sports-games">Sports Games</a>
        <a href="/gamelist/skill-games">Skill Games</a>
        <a href="/gamelist/hotgames">Hot Games</a>
        <a href="/gamelist/new-games">New Games</a>
      </nav>
    </div>
  );
}
