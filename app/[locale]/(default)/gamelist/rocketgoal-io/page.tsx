import PlayGamePage from '@/components/blocks/playgame';

export default function RocketGoalIoPage() {
  return (
    <PlayGamePage
      title="RocketGoal.io"
      slug="rocketgoal-io"
      category="sports"
      description="RocketGoal.io is a sports arcade game with vehicle-like movement and quick goals. It gives SpeedStars1 a strong bridge between sports and racing audiences."
      controls={["Move toward the ball", "Boost or jump when available", "Aim shots toward open space"]}
      tips={["Rotate back after attacks", "Hit the ball from the side for better angles", "Do not chase every ball blindly"]}
    />
  );
}
