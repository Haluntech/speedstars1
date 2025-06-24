export default function BalancePage() {
  return (
    <div className="bg-black min-h-screen p-8 space-y-8">
      {/* 游戏画布区域 */}
      <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
        <iframe
          src="https://tetris1-e8v.pages.dev/"
          className="w-full h-full"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin"
        />
      </div>

      {/* 结构化内容区域 */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
        {/* 游戏介绍 */}
        <section className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-sky-400">⟠ Cosmic Equilibrium Protocol</h2>
          <p className="mb-4">In SplintaBrix's quantum universe, cosmic order is maintained through <strong className="text-purple-300">dynamic equilibrium mechanisms</strong>...</p>
          <ul className="space-y-2 text-sm">
            <li>• 15+ special energy modules</li>
            <li>• 100+ dynamic background combinations</li>
            <li>• Infinite level generation algorithm</li>
          </ul>
        </section>

        {/* 玩法指南 */}
        <section className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">⊞ Control Matrix</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic Controls</h3>
              <p>←→ Adjust balance fulcrum<br/>Space for quantum lock</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Advanced Strategies</h3>
              <p>Utilize gravity disturbance to create chain reactions...</p>
            </div>
          </div>
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
  );
}
