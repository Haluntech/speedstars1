import GameNavComponent from '@/components/blocks/gamevalley';
import GameList from '@/components/blocks/listgame';

type RelatedCategory = 'running' | 'sports' | 'racing' | 'skill';

type PlayGamePageProps = {
  title: string;
  slug: string;
  category: RelatedCategory;
  description: string;
  controls: string[];
  tips: string[];
};

const categoryRoutes: Record<RelatedCategory, string> = {
  running: '/gamelist/running-games',
  sports: '/gamelist/sports-games',
  racing: '/gamelist/racing-games',
  skill: '/gamelist/skill-games',
};

export default function PlayGamePage({ title, slug, category, description, controls, tips }: PlayGamePageProps) {
  const embedUrl = `https://1games.io/embed/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: title,
    url: `https://speedstars1.com/gamelist/${slug}`,
    gamePlatform: 'Web browser',
    applicationCategory: 'Game',
    genre: category,
    description,
    playMode: 'SinglePlayer',
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-7xl px-4 py-6 space-y-8">
        <GameNavComponent currentCategory={category} />

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950 p-4 sm:p-6 shadow-2xl">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">Play online</p>
              <h1 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight">{title}</h1>
              <p className="mt-3 max-w-3xl text-slate-200">{description}</p>
            </div>
            <a
              href={categoryRoutes[category]}
              className="rounded-full bg-white px-5 py-3 text-sm font-bold text-blue-950 transition hover:bg-emerald-200"
            >
              More {category} games
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-xl">
            <iframe
              src={embedUrl}
              title={`${title} online game`}
              className="h-[68vh] min-h-[420px] w-full"
              allowFullScreen
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms allow-popups"
            />
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 text-slate-900 shadow-lg md:col-span-1">
            <h2 className="text-2xl font-black">How to play {title}</h2>
            <p className="mt-3 text-slate-700">Start the game in the browser, stay focused on timing, and use short attempts to learn the rhythm before chasing a better score.</p>
          </article>

          <article className="rounded-2xl bg-white p-6 text-slate-900 shadow-lg">
            <h2 className="text-2xl font-black">Controls</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {controls.map((control) => (
                <li key={control}>• {control}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-6 text-slate-900 shadow-lg">
            <h2 className="text-2xl font-black">Tips</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {tips.map((tip) => (
                <li key={tip}>• {tip}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-3xl bg-white p-5 text-slate-900 shadow-xl">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-black">More games like {title}</h2>
              <p className="text-slate-600">Keep users moving through SpeedStars1 with related games from the same category.</p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm font-bold">
              <a className="rounded-full bg-blue-50 px-3 py-2 text-blue-700" href="/gamelist/running-games">Running</a>
              <a className="rounded-full bg-emerald-50 px-3 py-2 text-emerald-700" href="/gamelist/sports-games">Sports</a>
              <a className="rounded-full bg-orange-50 px-3 py-2 text-orange-700" href="/gamelist/racing-games">Racing</a>
              <a className="rounded-full bg-sky-50 px-3 py-2 text-sky-700" href="/gamelist/skill-games">Skill</a>
            </div>
          </div>
          <GameList gameType={category} />
        </section>
      </div>
    </main>
  );
}
