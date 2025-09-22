export default function BalancePage() {
  return (
    <>
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          <iframe
            src="https://tetris7.pages.dev/"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* 结构化内容区域 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
          {/* 游戏介绍 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-sky-400">⊗ Herry Tetris</h2>
            <p className="mb-4">The goal is to maneuver the falling block pieces to create filled rows. This gets you points. If blocks stack all the way to the top of the screen,  <strong className="text-purple-300">you lose.</strong>...</p>
           
          </section>

          {/* 玩法指南 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">⊞ Control Matrix</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2"></h3>
                <p>Arrow keys to move the blocks. Down makes the block fall more. <br/>A/D to rotrate the blocks.</p>
              </div>
              
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-rose-400">⊗ Quantum FAQ</h2>
            <dl className="space-y-4">
              <dt className="font-semibold">Q: Why does someone have a high score of 55610?</dt>
              <dd className="text-sm text-gray-300 ml-4">This impressive score likely reflects advanced gameplay techniques, optimal piece placement strategies, and consistent performance over multiple game sessions.</dd>
              <dt className="font-semibold">Q: Why can't I stop playing the game?</dt>
              <dd className="text-sm text-gray-300 ml-4">The game's dynamic difficulty curve and achievement system trigger dopamine release, creating a compelling feedback loop that encourages continued play.</dd>
            </dl>
          </section>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": "Herry Tetris",
        "url": "/gamelist/herrytetris",
        "image": "/images/herrytetris-cover.jpg",
        "description": "The goal is to maneuver the falling block pieces to create filled rows. This gets you points. If blocks stack all the way to the top of the screen, you lose. Arrow keys to move the blocks. Down makes the block fall more. A/D to rotate the blocks. Have fun!",
        "gamePlatform": ["Web", "Mobile"],
        "genre": ["Puzzle", "Strategy"],
        "applicationCategory": "Game",
        "author": {
          "@type": "Organization",
          "name": "Speedstars1"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      })}} />
    </>
  );
}
