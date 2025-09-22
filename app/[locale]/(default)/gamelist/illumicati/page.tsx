


export default function BalancePage() {
    return (
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          <iframe
            src="https://html-classic.itch.zone/html/13494773/dist/index.html"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
  
        {/* 结构化内容区域 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
          {/* 游戏介绍 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-sky-400">Welcome to illumicati</h2>
            <p className="mb-4">you will make a decision on who to support to keep the balance of power between the two factions.</p>
            <ul className="space-y-2 text-sm">
              <li>• Do not let either faction to gain too much or too little resources, lest the other side might dominate the war and end the war.</li>
              <li>• Don’t forget to keep the trust between us and the two factions high, the more they trust us, the more influence we gain from them, but should we lose those trust, they will flee from our control.</li>
              <li>• That is all you need to know for now initiate. Deliver good result and the grand catster might grant you a seat in the inner circle. Deliver bad result, and by the great Tuna, you won’t have time to regret it.</li>
            </ul>
          </section>

          {/* 玩法指南 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">🎮 Control Panel</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Bindings</h3>
                <p>
                Hold down the left mouse button on the file in the middle and drag it to the left or right camps
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Pro Tips</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>keep Balance</li>
                  
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-rose-400">⚠️ Known Issues</h2>
            <dl className="space-y-4">
              <dt className="font-semibold">Score Reset Bug:</dt>
              <dd className="text-sm text-gray-300 ml-4">Refresh page after game over</dd>
              
              <dt className="font-semibold mt-4">Roadmap:</dt>
              <dd className="text-sm text-gray-300 ml-4">
                • Visual feedback indicators<br/>
                • New obstacle types<br/>
                • On-screen tutorial
              </dd>
            </dl>
          </section>
        </div>
      </div>
    );
  }
  