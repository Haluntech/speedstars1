


export default function BalancePage() {
    return (
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          <iframe
            src="https://tinyfishing.co/1.embed"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
  
        {/* 结构化内容区域 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
          {/* 游戏介绍 */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-sky-400">Tiny Fishing is a fun fishing game developed by Mad Buffer.</h2>
            <p className="mb-4">Drag your mouse to catch the fish, and remember to upgrade your gear to get more and bigger fish.</p>
            <p className="mb-4">Are you a fan of the fishing game? This game is ideal for you to participate in fishing with only your mobile or desktop. After starting the game, let's drop and hold your fishing line and click and swipe your mouse from left to right. Move your hook across the screen as you reel in your line to catch up fish.</p>
            <p className="mb-4">You'll get paid for all the fish you catch when your line hits the surface! The deeper you go, the rarer the fish become, and you can earn more cash.</p>
            <p className="mb-4">You can use the money from selling fish to upgrade your fishing gear. You can enhance the number of fish your pole can handle and the distance your line can travel. You'll gain a small amount of gold for each catch, and you might even discover some hidden treasure while fishing.</p>
          </section>
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">⊞ Control Guide</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Basic Controls</h3>
                <p>Click and drag to slide the hook left and right and catch as many fish as you can.</p>
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
  