import PlayGamePage from '@/components/blocks/playgame';

export default function QwopPage() {
  return (
    <PlayGamePage
      title="QWOP"
      slug="qwop"
      category="running"
      description="QWOP is a classic awkward running challenge where every key press matters. It is a strong fit for SpeedStars1 because it targets the same running-game audience while adding comedy, difficulty, and shareable failure moments."
      controls={["Use Q and W to control the thighs", "Use O and P to control the calves", "Keep the runner balanced instead of mashing keys"]}
      tips={["Move slowly at first", "Create a repeatable rhythm", "Small corrections beat wild key presses"]}
    />
  );
}
