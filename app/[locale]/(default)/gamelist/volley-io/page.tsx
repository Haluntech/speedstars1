import PlayGamePage from '@/components/blocks/playgame';

export default function VolleyIoPage() {
  return (
    <PlayGamePage
      title="Volley.io"
      slug="volley-io"
      category="sports"
      description="Volley.io is a lightweight sports game that works well as a quick follow-up to Speed Stars. It keeps the site focused on simple, competitive arcade play."
      controls={["Move into position", "Jump to hit the ball", "Time your contact point"]}
      tips={["Stay under the ball early", "Do not jump too soon", "Aim for awkward angles"]}
    />
  );
}
