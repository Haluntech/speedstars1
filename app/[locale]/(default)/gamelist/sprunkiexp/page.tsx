export default function sprunkiexpPage() {
  return (
    <>
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          <iframe
            src="https://incrediboxexpress.eratogame.com/"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* 结构化内容区域 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
          {/* 游戏介绍 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-sky-400">⊗ sprunkiexp</h2>
            <p className="mb-4">This is a sprunki game embedded via iframe. Enjoy the gameplay and challenge yourself!</p>
          </section>

          {/* 玩法指南 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">⊞ Control Matrix</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Basic Controls</h3>
                <p>Use keyboard or touch controls provided by the game iframe.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-rose-400">⊗ Quantum FAQ</h2>
            <dl className="space-y-4">
              <dt className="font-semibold">Q: What category is this game?</dt>
              <dd className="text-sm text-gray-300 ml-4">This game belongs to the sprunki category.</dd>
            </dl>
          </section>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": "sprunkiexp",
        "url": "/gamelist/sprunkiexp",
        "image": "/images/sprunkiexp-cover.jpg",
        "description": "A sprunki game: sprunkiexp.",
        "gamePlatform": ["Web", "Mobile"],
        "genre": ["Sprunki"],
        "applicationCategory": "Game",
        "author": { "@type": "Organization", "name": "Speedstars1" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      })}} />
    </>
  );
}
