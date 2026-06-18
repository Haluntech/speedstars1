import PlayGamePage from '@/components/blocks/playgame';

export default function TrackDashPage() {
  return (
    <PlayGamePage
      title="Track Dash"
      slug="track-dash"
      category="running"
      description="Track Dash is a fast physics runner built around momentum, timing, and clean launches. It fits SpeedStars1 because players who like Speed Stars usually enjoy short, repeatable attempts that reward precision."
      controls={["Hold the mouse or touch to build momentum", "Release at ramps and gaps", "Retry quickly to learn the track rhythm"]}
      tips={["Build speed on downhill sections", "Release slightly before the ramp peak", "Protect your final car by choosing safer landings"]}
    />
  );
}
