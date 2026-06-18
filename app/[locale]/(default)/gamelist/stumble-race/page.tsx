import PlayGamePage from '@/components/blocks/playgame';

export default function StumbleRacePage() {
  return (
    <PlayGamePage
      title="Stumble Race"
      slug="stumble-race"
      category="running"
      description="Stumble Race brings obstacle-course running to SpeedStars1. It gives visitors another fast, restart-friendly game after they finish a Speed Stars run."
      controls={["Move with the keyboard or touch controls", "Jump and dodge obstacles", "Keep moving toward the finish line"]}
      tips={["Do not overcorrect after collisions", "Learn obstacle patterns", "Take safer paths when the course gets crowded"]}
    />
  );
}
