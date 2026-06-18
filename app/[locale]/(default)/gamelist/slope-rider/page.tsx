import PlayGamePage from '@/components/blocks/playgame';

export default function SlopeRiderPage() {
  return (
    <PlayGamePage
      title="Slope Rider"
      slug="slope-rider"
      category="racing"
      description="Slope Rider is a downhill speed game about quick reactions and clean steering. It extends SpeedStars1 from sprinting into slope and racing traffic-style gameplay."
      controls={["Steer left and right", "Avoid obstacles", "Stay centered when the speed increases"]}
      tips={["Look ahead instead of watching the player only", "Make small steering movements", "Prioritize survival over risky shortcuts"]}
    />
  );
}
