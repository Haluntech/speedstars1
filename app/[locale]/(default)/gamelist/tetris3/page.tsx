export default function BalancePage() {
  return (
    <>
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          <iframe
            src="https://tetris5-65p.pages.dev/"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* 结构化内容区域 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
          {/* 游戏介绍 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-sky-400">Tetris</h2>
            <p className="mb-4">tetris  <strong className="text-purple-300">tetris</strong></p>
            <h3 className="text-xl font-bold mt-6 mb-3 text-cyan-300">【How to play】</h3>
            <ul className="space-y-2 mb-6">
              <li>Move right・・・・・・・➡</li>
              <li>Move left・・・・・・・ ⬅</li>
              <li>Hard drop・・・・・・・ ⬆</li>
              <li>Soft drop・・・・・・・ ⬇</li>
              <li>Rotate clockwise・・・・ X key</li>
              <li>Rotate counterclockwise・Z key</li>
              <li>Hold・・・・・・・・・ C key</li>
              <li>Reset・・・・・・・・・ V key</li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-3 text-cyan-300">【Game Modes】</h3>
            <ul className="space-y-3 mb-6">
              <li><strong>Infinity</strong>: No clear conditions - play indefinitely.</li>
              <li><strong>40Line</strong>: Clear 40 lines to complete - compete for fastest time.</li>
              <li><strong>20Line</strong>: Clear 20 lines to complete - compete for fastest time.</li>
              <li><strong>Ultra</strong>: Compete for highest score within 3 minutes.</li>
              <li><strong>Match Practice</strong>: Periodic interruptions occur - compete for score.</li>
              <li><strong>Edit</strong>: Place pieces freely as you like.</li>
              <li><strong>Replay</strong>: Play back the recording of your last game.</li>
              <li><strong>Option</strong>: Adjust sensitivity, effects, and other settings.</li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-3 text-cyan-300">【Terms】</h3>
            <ul className="space-y-3 mb-6">
              <li><strong>ARR</strong>: Horizontal movement speed</li>
              <li><strong>DAS</strong>: Delay before automatic movement starts when holding left/right buttons</li>
              <li><strong>SDF</strong>: Soft drop speed</li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-3 text-cyan-300">【Other】</h3>
            <p>With the settings menu open, press the / key to change key configurations. Press keys in the following order to set: Hard Drop, Soft Drop, Move Right, Move Left, Rotate Right, Rotate Left, Hold.</p>
            <ul className="space-y-2 text-sm mt-4">
              <li>• 15+ special energy modules</li>
              <li>• 100+ dynamic background combinations</li>
              <li>• Infinite level generation algorithm</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-rose-400">⊗ Quantum FAQ</h2>
            <dl className="space-y-4">
              <dt className="font-semibold">Q: How to unlock hidden dimensions?</dt>
              <dd className="text-sm text-gray-300 ml-4">Maintain equilibrium over 60 seconds...</dd>
              <dt className="font-semibold">Q: How do energy modules inherit?</dt>
              <dd className="text-sm text-gray-300 ml-4">Through quantum entanglement protocols...</dd>
            </dl>
          </section>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": "Tetris 1",
        "url": "/gamelist/tetris1",
        "image": "/images/tetris1-cover.jpg",
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
