import PlayGamePage from '@/components/blocks/playgame';

export default function GolfHitPage() {
  return (
    <PlayGamePage
      title="Golf Hit"
      slug="golf-hit"
      category="sports"
      description="Golf Hit is a quick sports arcade game built around timing and power. It broadens SpeedStars1 beyond running while keeping the same simple, replayable loop."
      controls={["Click or tap to set power", "Time the shot carefully", "Watch distance and landing angle"]}
      tips={["Do not always use maximum power", "Aim for clean timing", "Use repeated attempts to learn the shot curve"]}
    />
  );
}
