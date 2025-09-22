export default function BalancePage() {
  return (
    <>
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          <iframe
            src="https://tetris4-btd.pages.dev/"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": "Tetris",
        "url": "/gamelist/tetris2",
        "image": "/images/tetris-cover.jpg",
        "description": "Tetris is a classic puzzle game where players rotate and move blocks to fill lines and score points.",
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

      {/* 结构化内容区域 */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
        {/* 游戏介绍 */}
        <section className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-sky-400">⊗ Tetris 2</h2>
            
            <p className="mb-4">The blocks are made up of 4 cells. You can move them left and right, rotate them, and speed them up.</p>
            <p className="mb-4">Each time you move a block, it locks in place. If it locks in place, it will be part of the grid.</p>
            <p className="mb-4">When a row is filled, it is cleared, and you get points. The more rows you clear, the more points you get.</p>
            <p className="mb-4">The goal is to maneuver the falling block pieces to create filled rows. This gets you points. If blocks stack all the way to the top of the screen,  <strong className="text-purple-300">you lose.</strong>...</p>
          
        </section>

        {/* 玩法指南 */}
        <section className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">⊞ Control Matrix</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2"></h3>
              <p>Left and right arrows to move, <br/>Up arrow to rotate (or A & S), down arrow to speed up.<br/>To play again press the green flag<br/>Space for quantum lock</p>
            </div>
            
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-rose-400">⊗ Quantum FAQ</h2>
          <dl className="space-y-4">
            <dt className="font-semibold">Q: How to play?</dt>
            <dd className="text-sm text-gray-300 ml-4">Left and right arrows to move, <br/>Up arrow to rotate (or A & S), down arrow to speed up.<br/>To play again press the green flag<br/></dd>
            <dt className="font-semibold">Q: What is quantum lock?</dt>
            <dd className="text-sm text-gray-300 ml-4">To pause, press the pause button in the upper right corner. To resume, press the pause button again.</dd>
          
          </dl>
        </section>
      </div>
    </>
  );
}
