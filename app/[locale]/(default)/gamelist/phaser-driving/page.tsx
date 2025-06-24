


export default function BalancePage() {
    return (
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          <iframe
            src="https://html-classic.itch.zone/html/1394059/index.html?v=1574335661"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
  
        {/* 结构化内容区域 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
          {/* 游戏介绍 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-sky-400">Log Balancing Challenge</h2>
            <p className="mb-4">Control a strongman carrying a huge log. Earn points with each step while maintaining balance. Current version features infinite mode.</p>
            <ul className="space-y-2 text-sm">
              <li>• Dynamic physics-based balancing</li>
              <li>• Score multiplier system</li>
              <li>• Progressive difficulty</li>
            </ul>
          </section>

          {/* 玩法指南 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">🎮 Control Panel</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Bindings</h3>
                <p>
                  ←/A: Tilt left<br/>
                  →/D: Tilt right<br/>
                  ↑/W: Move forward<br/>
                  ↓/S: Move backward
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Pro Tips</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Maintain 15° max tilt angle</li>
                  <li>3+ items carried = 2x multiplier</li>
                  <li>Avoid sudden direction changes</li>
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
  