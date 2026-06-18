import PlayGamePage from '@/components/blocks/playgame';

export default function SpeedSlopePage() {
  return (
    <PlayGamePage
      title="Speed Slope"
      slug="speed-slope"
      category="skill"
      description="Speed Slope is a reflex-heavy slope game for players who like fast decisions and short, repeatable runs. It is useful for keeping Speed Stars users inside the same speed-game loop."
      controls={["Use left and right movement", "Avoid falling off the track", "React early to turns and gaps"]}
      tips={["Stay near the center", "Do not chase every risky line", "Practice one clean run before pushing speed"]}
    />
  );
}
