export default function BalancePage() {
    return (
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          <iframe
            src="https://html-classic.itch.zone/html/13488635/dist/index.html"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
  
        {/* 结构化内容区域 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
          {/* 游戏介绍 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-sky-400">Diet-balancing</h2>
            <p className="mb-4">You have to coordinate with your movement & eating skill while keeping your eye on the diet scale, otherwise if you get all the junk food, becomes harder to jump!</p>
            
          </section>
  
          {/* 玩法指南 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">⊞ Control Guide</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Basic Controls</h3>
                <p>←→ Move character<br/>Space to push boxes</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Balance Tips</h3>
                <p>Strategically distribute weight between platforms...</p>
              </div>
            </div>
          </section>
  
          {/* FAQ */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-rose-400">❗ Display Settings</h2>
            <dl className="space-y-4">
              <dt className="font-semibold">Q: How to adjust game size?</dt>
              <dd className="text-sm text-gray-300 ml-4">Use browser zoom (Ctrl +/-) or Ctrl+Scroll to scale</dd>
              <dt className="font-semibold">Q: Game not loading properly?</dt>
              <dd className="text-sm text-gray-300 ml-4">Clear cache and refresh page (Ctrl+F5)</dd>
            </dl>
          </section>
        </div>
      </div>
    );
  }
  