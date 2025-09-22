export default function Tetris3Page() {
  return (
    <>
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          <iframe
            src="https://tetris6.pages.dev"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoGame",
          "name": "Tetris",
          "url": "/gamelist/tetris3",
          "image": "/images/tetris-cover.jpg",
          "description": "Tetris is a classic puzzle game where players rotate falling blocks to complete lines.",
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
            <h2 className="text-2xl font-bold mb-4 text-sky-400">⊗ Tetris 3</h2>
            
            <p className="mb-4">The blocks are made up of 4 cells. You can move them left and right, rotate them, and speed them up.</p>
            <p className="mb-4">Each block locks in place when it can't move further down. Locked blocks become part of the playfield.</p>
            <p className="mb-4">When a row is completely filled with blocks, it clears and you earn points. Multiple lines cleared simultaneously earn more points.</p>
            <p className="mb-4">The goal is to keep clearing lines to prevent blocks from stacking to the top of the playfield. If blocks reach the top, <strong className="text-purple-300">game over</strong>.</p>
          </section>

          {/* 玩法指南 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">⊞ Control Matrix</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <ul className="space-y-2 mb-6">
                  <li>Move right・・・・・・・➡</li>
                  <li>Move left・・・・・・・⬅</li>
                  <li>Hard drop・・・・・・・⬆</li>
                  <li>Soft drop・・・・・・・⬇</li>
                  <li>Rotate clockwise・・・・X key</li>
                  <li>Rotate counterclockwise・Z key</li>
                  <li>Hold・・・・・・・・・C key</li>
                  <li>Reset・・・・・・・・・V key</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 游戏模式 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-rose-400">⊗ Game Modes</h2>
            <dl className="space-y-4">
              <ul className="space-y-2 mb-6">
                <li><strong>Infinity</strong>: No clear conditions - play indefinitely.</li>
                <li><strong>40Line</strong>: Clear 40 lines to complete - compete for fastest time.</li>
                <li><strong>20Line</strong>: Clear 20 lines to complete - compete for fastest time.</li>
                <li><strong>Ultra</strong>: Compete for highest score within 3 minutes.</li>
                <li><strong>Match Practice</strong>: Periodic interruptions occur - compete for score.</li>
                <li><strong>Edit</strong>: Place pieces freely as you like.</li>
                <li><strong>Replay</strong>: Play back recording of your last game.</li>
                <li><strong>Option</strong>: Adjust sensitivity, effects, and other settings.</li>
              </ul>
            </dl>
          </section>
        </div>
      </div>
    </>
  );
}
