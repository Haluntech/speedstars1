import GameNavComponent from '@/components/blocks/gamevalley';
import GameList from '@/components/blocks/listgame';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Running Games on SpeedStars1',
  itemListElement: ['Speed Stars', 'Speed Legends', 'Sprinter', 'Athletics Hero', 'Hurdles', 'Run 3', 'Running Fred'].map((name, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
  })),
};

export default function RunningGamesPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GameNavComponent currentCategory="running" />

      <section className="rounded-2xl bg-gradient-to-br from-blue-950 via-blue-800 to-emerald-600 p-8 text-white shadow-xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-200">SpeedStars1 Collection</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">Running Games</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-blue-50">
          Running games are the core of SpeedStars1. This category is built for players who like short races, clean controls, fast retries, and the feeling of improving by a tiny margin every run. Start with Speed Stars, then explore sprint games, hurdle challenges, endless runners, obstacle courses, and timing-based platform games. These games work especially well for school breaks, quick sessions, and competitive players who want a simple goal: run faster, react earlier, and beat the previous score. We keep this page focused on running-first games instead of mixing every random arcade title together, so visitors who arrive for Speed Stars can easily find the next game that matches the same energy.
        </p>
      </section>

      <GameList gameType="running" />

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ['What are running games?', 'Running games are arcade games built around sprinting, jumping, dodging, timing, and chasing better scores.'],
          ['Is Speed Stars a running game?', 'Yes. Speed Stars is the main running game on SpeedStars1 and the anchor for this category.'],
          ['Are these games free?', 'The games listed on SpeedStars1 are intended to be playable online from the browser.'],
          ['What should I play after Speed Stars?', 'Try Speed Legends, Sprinter, Hurdles, Run 3, or Running Fred for similar speed and timing gameplay.'],
        ].map(([question, answer]) => (
          <div key={question} className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-900">{question}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
          </div>
        ))}
      </section>

      <nav className="flex flex-wrap gap-3 text-sm font-semibold text-blue-700">
        <a href="/">Speed Stars</a>
        <a href="/gamelist/sports-games">Sports Games</a>
        <a href="/gamelist/racing-games">Racing Games</a>
        <a href="/gamelist/skill-games">Skill Games</a>
        <a href="/gamelist/hotgames">Hot Games</a>
        <a href="/gamelist/new-games">New Games</a>
      </nav>
    </div>
  );
}
