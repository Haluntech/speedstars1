import PlayGamePage from '@/components/blocks/playgame';

export default function VexTryToFlyPage() {
  return (
    <PlayGamePage
      title="Vex Try To Fly"
      slug="vex-try-to-fly"
      category="skill"
      description="Vex Try To Fly is a reflex platform challenge for players who want quick restarts, tight timing, and airborne movement. It adds a strong skill-game layer to the SpeedStars1 navigation."
      controls={["Use keyboard or touch controls shown in game", "Time jumps carefully", "Restart quickly after mistakes"]}
      tips={["Watch obstacle timing before rushing", "Use short attempts to learn each section", "Stay calm when the game speeds up"]}
    />
  );
}
