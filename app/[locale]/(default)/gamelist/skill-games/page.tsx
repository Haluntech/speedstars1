import GameNavComponent from '@/components/blocks/gamevalley';
import GameList from '@/components/blocks/listgame';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Skill Games on SpeedStars1',
  itemListElement: ['Slope', 'Tunnel Rush', 'Geometry Dash', 'Curve Rush', 'Vex', 'Split Push', 'Balance'].map((name, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
  })),
};

export default function SkillGamesPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GameNavComponent currentCategory="skill" />

      <section className="rounded-2xl bg-gradient-to-br from-indigo-950 via-sky-700 to-cyan-400 p-8 text-white shadow-xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-100">Timing and Reflex</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">Skill Games</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-cyan-50">
          Skill games are the best bridge between Speed Stars and the wider arcade catalog. They are not slow puzzle pages and they are not heavy downloads. They are games where one small mistake matters: jump too late, turn too hard, react too slowly, or lose focus for a second and the run ends. That makes them perfect for players who came to SpeedStars1 because they like precision, rhythm, and visible improvement. This page groups reflex games, obstacle games, balance games, and rhythm-style challenges into one useful destination. It gives visitors a clear next step after playing Speed Stars and helps the site build stronger internal navigation around fast gameplay.
        </p>
      </section>

      <GameList gameType="skill" />

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ['What are skill games?', 'Skill games test timing, reflexes, balance, rhythm, and quick decisions.'],
          ['Why add skill games to SpeedStars1?', 'They match the same replay loop as Speed Stars: quick attempts, visible mistakes, and steady improvement.'],
          ['Which skill game is best after Speed Stars?', 'Slope, Tunnel Rush, Geometry Dash, Curve Rush, and Vex are strong choices.'],
          ['Are skill games good for short sessions?', 'Yes. Most skill games are easy to start and rewarding even when you only have a few minutes.'],
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
        <a href="/gamelist/racing-games">Racing Games</a>
        <a href="/gamelist/hotgames">Hot Games</a>
        <a href="/gamelist/new-games">New Games</a>
      </nav>
    </div>
  );
}
