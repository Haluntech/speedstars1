


export default function AmmoFlowPage() {
    return (
      <div className="bg-black min-h-screen p-8 space-y-8 text-gray-100">
        {/* Game Canvas */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden relative">
          <iframe
            src="https://html-classic.itch.zone/html/13706006/dist/index.html"
            className="w-full h-full"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* Structured Content Area */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
          {/* Game Introduction */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">🎮 Ammo Flow: Strategic Ammo Management</h2>
            <p className="mb-4">We have a base and we need to defend it. The turrets are already placed - your mission is to control the ammo production and distribution to protect the base from incoming enemies.</p>
            <p className="text-sm text-gray-400 italic"></p>
          </section>

          {/* Gameplay Mechanics */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">🎯 Gameplay Mechanics</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Your Role</h3>
                <p>Turrets are pre-placed and cannot be modified. Your strategic ammo management is the key to victory.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Ammo Production</h3>
                <p>Manage four factories to produce different ammo types:</p>
                <ul className="list-disc ml-6 space-y-1 mt-2 text-sm">
                  <li>Select ammo type for each factory</li>
                  <li>Assign workers to start production</li>
                  <li>More workers = faster production</li>
                  <li>Produced ammo is stored in the Warehouse</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Turret Operations</h3>
                <ul className="list-disc ml-6 space-y-1 text-sm">
                  <li>Click on turrets to load/unload ammo</li>
                  <li>Select ammo type from available inventory</li>
                  <li>Enable auto-load for automatic resupply</li>
                  <li>Monitor ammo levels and enemy approaching</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Turret Types */}
          <section className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">🔧 Turret Types</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">Machine Gun</h3>
                <p className="text-sm">Versatile turret effective against all enemy types with appropriate ammo.</p>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">AA (Anti-Air)</h3>
                <p className="text-sm">Specialized for aerial targets with high accuracy against flying enemies.</p>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">Artillery</h3>
                <p className="text-sm">Long-range explosive damage with splash effect. Cannot target air units.</p>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">Railgun</h3>
                <p className="text-sm">Slow-firing but extremely high damage against armored units.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  