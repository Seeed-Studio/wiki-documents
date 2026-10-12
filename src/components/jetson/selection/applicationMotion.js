// One touch-play allowance per mounted option (one menu opening). Cancellation
// consumes the allowance too, so scrolling or returning from the background
// never restarts a previously seen scene.
export function canPlayScene({ visible, environment, inputMode }) {
  return (
    visible &&
    !environment.hidden &&
    !environment.suspended &&
    !environment.reduced &&
    inputMode !== "keyboard"
  );
}

export function nextScenePlayback(
  previous,
  { scene, allowed, touch, hovered },
) {
  if (scene === "all")
    return previous.playing ? { seen: false, playing: false } : previous;
  const playing = touch
    ? allowed && (previous.seen ? previous.playing : true)
    : allowed && hovered;
  const seen = previous.seen || (touch && playing);
  return previous.playing === playing && previous.seen === seen
    ? previous
    : { seen, playing };
}
