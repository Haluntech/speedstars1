import PlayGamePage from '@/components/blocks/playgame';

export default function StuntBikeExtremePage() {
  return (
    <PlayGamePage
      title="Stunt Bike Extreme"
      slug="stunt-bike-extreme"
      category="racing"
      description="Stunt Bike Extreme is a bike stunt and racing game that fits SpeedStars1's speed-focused positioning. It adds ramps, balance, and bike control to the site's racing catalog."
      controls={["Accelerate and brake carefully", "Balance the bike in the air", "Land smoothly after ramps"]}
      tips={["Do not hold full speed everywhere", "Level the bike before landing", "Use small corrections on steep ramps"]}
    />
  );
}
