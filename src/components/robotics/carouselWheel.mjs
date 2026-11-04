const GESTURE_TIMEOUT = 150;
export const WHEEL_COOLDOWN = 360;
const AXIS_THRESHOLD = 8;

export function createWheelGestureState() {
  return {
    amount: 0,
    axis: null,
    axisX: 0,
    axisY: 0,
    direction: 0,
    lastEventAt: null,
    tailMagnitude: 0,
    rotated: false,
    lockedUntil: 0,
  };
}

// Keep one rotation per swipe, but allow a fresh burst after an inertia tail
// without requiring the pointer to leave and re-enter a moving card.
export function consumeWheelGesture(gesture, event, now) {
  const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? 400 : 1;
  const deltaX = event.deltaX * scale;
  const deltaY = event.deltaY * scale;
  const magnitude = Math.max(Math.abs(deltaX), Math.abs(deltaY));
  const idle = gesture.lastEventAt === null
    || now - gesture.lastEventAt > GESTURE_TIMEOUT;
  const previousDelta = gesture.axis === 'horizontal'
    ? (event.shiftKey ? (deltaX || deltaY) : deltaX)
    : deltaY;
  const freshBurst = gesture.rotated
    && now >= gesture.lockedUntil
    && magnitude >= AXIS_THRESHOLD
    && (
      magnitude > gesture.tailMagnitude * 1.8
      || (previousDelta !== 0 && Math.sign(previousDelta) !== gesture.direction)
    );

  if (idle || freshBurst) {
    const lockedUntil = gesture.lockedUntil;
    Object.assign(gesture, createWheelGestureState(), {lockedUntil});
  }

  gesture.lastEventAt = now;
  gesture.tailMagnitude = gesture.rotated
    ? Math.min(gesture.tailMagnitude, magnitude)
    : magnitude;

  // Inertia must never push the deadline forward indefinitely.
  if (gesture.rotated || now < gesture.lockedUntil) return 0;

  gesture.axisX += deltaX;
  gesture.axisY += deltaY;
  if (!gesture.axis) {
    if (Math.max(Math.abs(gesture.axisX), Math.abs(gesture.axisY)) < AXIS_THRESHOLD) {
      return 0;
    }
    gesture.axis = event.shiftKey || Math.abs(gesture.axisX) > Math.abs(gesture.axisY)
      ? 'horizontal'
      : 'vertical';
  }

  const delta = gesture.axis === 'horizontal'
    ? (event.shiftKey ? (deltaX || deltaY) : deltaX)
    : deltaY;
  if (!delta) return 0;

  const direction = Math.sign(delta);
  if (direction !== gesture.direction) {
    gesture.amount = 0;
    gesture.direction = direction;
  }
  gesture.amount += delta;
  const threshold = gesture.axis === 'horizontal' ? 44 : 56;
  if (Math.abs(gesture.amount) < threshold) return 0;

  gesture.rotated = true;
  gesture.lockedUntil = now + WHEEL_COOLDOWN;
  return direction;
}

export function handleCarouselWheel(event, {
  gesture,
  now,
  disabled = false,
  move,
}) {
  if (disabled || event.ctrlKey) {
    Object.assign(gesture, createWheelGestureState());
    return;
  }

  // The component checks card ownership before consuming a wheel gesture.
  event.preventDefault();
  event.stopPropagation();
  const direction = consumeWheelGesture(gesture, event, now);
  if (!direction) return;

  move(direction);
}
