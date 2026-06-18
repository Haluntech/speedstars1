import PlayGamePage from '@/components/blocks/playgame';

export default function TrafficRoadPage() {
  return (
    <PlayGamePage
      title="Traffic Road"
      slug="traffic-road"
      category="racing"
      description="Traffic Road is a traffic racing game for players who enjoy high-speed dodging and quick lane choices. It strengthens the racing section without drifting away from SpeedStars1's speed theme."
      controls={["Steer between lanes", "Avoid traffic", "Keep speed while staying safe"]}
      tips={["Plan two lanes ahead", "Avoid last-second swerves", "Choose open space over risky gaps"]}
    />
  );
}
