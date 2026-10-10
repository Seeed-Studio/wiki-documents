import React, { useEffect, useRef, useState } from "react";
import { canPlayScene, nextScenePlayback } from "./applicationMotion.js";
import styles from "./ApplicationIllustration.module.css";

function Board({ x = 60, y = 47 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="25" height="24" rx="4" />
      <rect
        className={styles.accentFill}
        x="7"
        y="6"
        width="11"
        height="11"
        rx="2"
      />
      <path d="M4 24v4m6-4v4m6-4v4m5-4v4M25 5h4m-4 7h4m-4 7h4" />
    </g>
  );
}
function Camera({ x = 10, y = 15 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="18" height="13" rx="3" />
      <circle cx="9" cy="6.5" r="3" />
      <path d="M9 13v5m-5 0h10" />
    </g>
  );
}
function Rover() {
  return (
    <>
      <rect
        className={styles.solid}
        x="15"
        y="61"
        width="18"
        height="21"
        rx="5"
      />
      <path d="M12 65v10m24-10v10M21 78h6" />
      <rect
        className={styles.accentFill}
        x="20"
        y="57"
        width="8"
        height="6"
        rx="2"
      />
      <path className={styles.signal} d="m24 55-11-15h22z" />
    </>
  );
}
function Learning() {
  return (
    <>
      <rect x="9" y="22" width="37" height="29" rx="3" />
      <path d="m6 57 3-6h37l3 6zM22 58h11" />
      <path
        className={styles.accent}
        d="m21 31-5 5 5 5m13-10 5 5-5 5m-5-12-4 14"
      />
      <path className={styles.signal} d="M49 54h6v5h5" />
      <Board />
      <g className={styles.transfer}>
        <circle className={styles.dot} cx="49" cy="54" r="2" />
      </g>
      <g className={styles.output}>
        <path className={styles.accent} d="M66 32h16m-16 5h10" />
        <circle className={styles.dot} cx="80" cy="53" r="2" />
      </g>
    </>
  );
}
function EdgeAI() {
  return (
    <>
      <Camera />
      <path className={styles.signal} d="M19 35v10h34v15h7" />
      <rect
        className={styles.floor}
        x="7"
        y="53"
        width="39"
        height="21"
        rx="3"
      />
      <g className={styles.target}>
        <rect x="15" y="58" width="9" height="10" rx="2" />
      </g>
      <g className={styles.tracking}>
        <path
          className={styles.accent}
          d="M25 57v-4h5m9 0h5v4m0 11v5h-5m-9 0h-5v-5"
        />
      </g>
      <Board />
      <g className={styles.frameFlow}>
        <rect
          className={styles.accentFill}
          x="46"
          y="40"
          width="8"
          height="7"
          rx="1"
        />
      </g>
    </>
  );
}
function Industrial() {
  return (
    <>
      <rect x="9" y="15" width="27" height="58" rx="4" />
      <rect x="15" y="23" width="15" height="12" rx="2" />
      <path d="M15 42h15m-15 6h15m-15 6h9" />
      <path className={styles.signal} d="M36 33h25v14m0 26v9H22v-9" />
      <circle className={styles.dot} cx="61" cy="33" r="2" />
      <rect x="52" y="47" width="28" height="28" rx="4" />
      <g className={styles.actuator}>
        <path className={styles.accent} d="M66 47V31m-7 0h14" />
        <rect
          className={styles.accentFill}
          x="56"
          y="54"
          width="20"
          height="9"
          rx="2"
        />
      </g>
      <g className={styles.feedback}>
        <path className={styles.accent} d="m44 79-4 3 4 3" />
        <circle className={styles.dot} cx="22" cy="64" r="2" />
      </g>
    </>
  );
}
function Robotics() {
  return (
    <>
      <path className={styles.floor} d="M9 12h78v74H9z" />
      <path className={styles.signal} d="M24 69V33h42V17" />
      <rect
        className={styles.solid}
        x="44"
        y="47"
        width="23"
        height="24"
        rx="3"
      />
      <path d="m44 47 5-5h23v24l-5 5m0-24 5-5" />
      <g className={styles.robot}>
        <Rover />
      </g>
    </>
  );
}
function Outdoor() {
  return (
    <>
      <circle className={styles.accent} cx="18" cy="19" r="6" />
      <path
        className={styles.accent}
        d="M18 7V4m0 30v-3M6 19H3m30 0h-3M9 10l-2-2m20 20 2 2"
      />
      <path
        className={styles.floor}
        d="M11 75h74M12 87h72M20 81h11m12 0h11m12 0h11"
      />
      <path d="M53 19q0-8 8-8 5-9 12-1 11-1 11 9z" />
      <g className={styles.rain}>
        <path className={styles.signal} d="m59 26-3 6m12-6-3 6m12-6-3 6" />
      </g>
      <g className={styles.vehicle}>
        <path className={styles.solid} d="M14 65v-9h9l8-13h20l10 13h10v9z" />
        <path d="m29 55 6-8h12l6 8z" />
        <circle className={styles.solid} cx="28" cy="66" r="5" />
        <circle className={styles.solid} cx="59" cy="66" r="5" />
        <rect
          className={styles.accentFill}
          x="34"
          y="37"
          width="13"
          height="7"
          rx="2"
        />
      </g>
    </>
  );
}
function Autonomous() {
  return (
    <>
      <Camera x={8} y={12} />
      <circle cx="48" cy="18" r="7" />
      <path d="M43 18h10m-5-5v10" />
      <rect x="72" y="11" width="13" height="15" rx="3" />
      <path className={styles.signal} d="M17 32v5h31m0-12v18m30-17v11H48" />
      <g className={styles.fusion}>
        <circle className={styles.dot} cx="17" cy="37" r="2" />
        <circle className={styles.dot} cx="48" cy="29" r="2" />
        <circle className={styles.dot} cx="78" cy="37" r="2" />
      </g>
      <Board x={36} y={43} />
      <path className={styles.floor} d="M8 79h78M16 87h70" />
      <g className={styles.planning}>
        <path className={styles.accent} d="M16 83h16l8-7h22l8 7h10" />
        <circle className={styles.dot} cx="80" cy="83" r="2" />
      </g>
    </>
  );
}
function Overview() {
  return (
    <>
      <rect x="12" y="12" width="29" height="29" rx="6" />
      <path d="m20 22 5 5-5 5m9 0h6" />
      <rect x="55" y="12" width="29" height="29" rx="6" />
      <circle cx="69" cy="26" r="7" />
      <path className={styles.accent} d="M69 15v5m0 12v5m-11-11h5m12 0h5" />
      <rect x="12" y="55" width="29" height="29" rx="6" />
      <path d="M19 76V63h14v13m-7-13v13" />
      <rect x="55" y="55" width="29" height="29" rx="6" />
      <path d="m62 73 7-11 8 11z" />
      <circle className={styles.dot} cx="69" cy="69" r="2" />
    </>
  );
}
const scenes = {
  all: Overview,
  learning: Learning,
  edge_ai: EdgeAI,
  industrial: Industrial,
  robotics: Robotics,
  outdoor: Outdoor,
  autonomous: Autonomous,
};

export default function ApplicationIllustration({
  scene,
  hovered,
  environment,
  inputMode,
  scrollRoot,
  ready,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [playback, setPlayback] = useState({ seen: false, playing: false });
  const Scene = scenes[scene] || Overview;
  useEffect(() => {
    const root = scrollRoot.current;
    if (!ready || scene === "all" || !root) return undefined;
    const measure = () => {
      if (!ref.current) return;
      const bounds = root.getBoundingClientRect(),
        rect = ref.current.getBoundingClientRect();
      const width = Math.max(
        0,
        Math.min(rect.right, bounds.right, window.innerWidth) -
          Math.max(rect.left, bounds.left, 0),
      );
      const height = Math.max(
        0,
        Math.min(rect.bottom, bounds.bottom, window.innerHeight) -
          Math.max(rect.top, bounds.top, 0),
      );
      setVisible(
        rect.width * rect.height > 0 &&
          (width * height) / (rect.width * rect.height) >= 0.6,
      );
    };
    const observer = window.IntersectionObserver
      ? new IntersectionObserver(measure, { root, threshold: [0, 0.6] })
      : null;
    observer?.observe(ref.current);
    measure();
    root.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      observer?.disconnect();
      root.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [ready, scene, scrollRoot]);
  const allowed = canPlayScene({ visible, environment, inputMode });
  useEffect(() => {
    setPlayback((previous) =>
      nextScenePlayback(previous, {
        scene,
        allowed,
        touch: environment.touch,
        hovered,
      }),
    );
  }, [scene, allowed, environment.touch, hovered]);
  return (
    <span
      ref={ref}
      className={styles.preview}
      data-scene={scene}
      data-playing={allowed && playback.playing && scene !== "all"}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 96 96"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        <Scene />
      </svg>
    </span>
  );
}
