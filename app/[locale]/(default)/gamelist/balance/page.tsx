

export default function BalancePage() {
    return (
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          <iframe
            src="https://html-classic.itch.zone/html/13382148-1251765/index.html"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
  
        {/* 结构化内容区域 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
          {/* 游戏介绍 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-sky-400">Balance Your Dual Roles!</h2>
            <p className="mb-4">For 4 days, you must juggle two roles—Accountant and Editor—while handling daily life tasks: Dancing Class and Lawn Mowing. Each day, complete one work and one life task simultaneously within 60 seconds.</p>
            <ul className="space-y-2 text-sm">
              <li>• Life tasks earn you points</li>
              <li>• Work tasks apply multiplier to points</li>
              <li>• Balance focus to maximize both!</li>
            </ul>
          </section>

          {/* 玩法指南 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">🎯 Tasks Detail</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Work Tasks</h3>
                <p>Accountant: Calculate total assets from cash & inventory</p>
                <p>Editor: Spot typos among four words</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Life Tasks</h3>
                <p>Dancing: Mirror teacher's hand movements</p>
                <p>Lawn Mowing: Steer mower through backyard</p>
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
  