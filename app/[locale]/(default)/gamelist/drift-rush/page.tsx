import PlayGamePage from '@/components/blocks/playgame';

export default function DriftRushPage() {
  return (
    <PlayGamePage
      title="Drift Rush"
      slug="drift-rush"
      category="racing"
      description="Drift Rush adds a clean racing and drifting option to SpeedStars1. It is useful for users who like speed games but want vehicle control instead of sprint timing."
      controls={["Steer through corners", "Control drift timing", "Avoid crashing into the edge"]}
      tips={["Start turns early", "Use controlled drifts", "Do not oversteer after a long corner"]}
    />
  );
}
