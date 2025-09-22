export default function BalancePage() {
    return (
      // 修正后的根节点结构
      <div className="bg-black min-h-screen p-8 space-y-8">
        {/* 游戏画布区域 */}
        <div className="mx-auto max-w-7xl h-[70vh] bg-gray-900 rounded-xl overflow-hidden">
          {/* iframe 内容 */}
        </div>

        {/* 结构化内容区域 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-gray-100">
          {/* 所有内容区块 */}
        </div>
      </div>
    );
}
  