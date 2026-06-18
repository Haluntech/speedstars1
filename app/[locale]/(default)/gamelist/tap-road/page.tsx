import PlayGamePage from '@/components/blocks/playgame';

export default function TapRoadPage() {
  return (
    <PlayGamePage
      title="Tap Road"
      slug="tap-road"
      category="skill"
      description="Tap Road is a one-input reflex game that matches the SpeedStars1 audience: simple controls, quick restarts, and a clear reason to try again for a better score."
      controls={["Tap or click to change direction", "Avoid obstacles and edges", "Keep a steady rhythm"]}
      tips={["Tap early instead of late", "Focus on rhythm", "Ignore risky collectibles when survival matters"]}
    />
  );
}
