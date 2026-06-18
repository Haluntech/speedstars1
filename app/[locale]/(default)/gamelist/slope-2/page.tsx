import PlayGamePage from '@/components/blocks/playgame';

export default function Slope2Page() {
  return (
    <PlayGamePage
      title="Slope 2"
      slug="slope-2"
      category="skill"
      description="Slope 2 is a classic speed-and-reflex game. It gives SpeedStars1 another high-intent page for players searching for fast browser games with instant restarts."
      controls={["Steer left and right", "Avoid red blocks and gaps", "Stay alive as speed increases"]}
      tips={["Keep your movement smooth", "Watch the next platform early", "Survive first, score later"]}
    />
  );
}
