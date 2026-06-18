import PlayGamePage from '@/components/blocks/playgame';

export default function SkateDashPage() {
  return (
    <PlayGamePage
      title="Skate Dash"
      slug="skate-dash"
      category="racing"
      description="Skate Dash brings speed, movement, and quick obstacle reading into the racing section. It is a good internal-link target from Speed Stars and other momentum games."
      controls={["Move and dodge obstacles", "Time jumps or turns", "Keep momentum without losing control"]}
      tips={["Look ahead on the route", "Choose safe lines", "Keep inputs short and controlled"]}
    />
  );
}
