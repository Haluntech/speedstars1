import PlayGamePage from '@/components/blocks/playgame';

export default function SoccerBros2Page() {
  return (
    <PlayGamePage
      title="Soccer Bros 2"
      slug="soccer-bros-2"
      category="sports"
      description="Soccer Bros 2 gives SpeedStars1 a stronger sports arcade section. It is fast, simple to understand, and a good next click for visitors who arrive through athletic or running game searches."
      controls={["Move with keyboard or touch controls", "Jump, tackle, and shoot", "React quickly to rebounds"]}
      tips={["Stay between the ball and your goal", "Shoot after rebounds", "Use movement to force mistakes"]}
    />
  );
}
