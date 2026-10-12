import React, {useEffect, useRef, useState} from 'react';
import styles from './ApplicationIllustration.module.css';

function Camera({x = 50, y = 12}) {
  return <g transform={`translate(${x} ${y})`}><rect width="16" height="11" rx="3" /><circle cx="8" cy="5.5" r="3" /><path d="M8 11v5m-5 0h10" /></g>;
}

function Arm() {
  return <>
    <path className={styles.floor} d="M8 78h80" />
    <path d="M13 77v-9h18v9M18 68v-6h8v6" />
    <g className={styles.arm}>
      <path className={styles.link} d="M22 62 32 39 54 42" />
      <circle className={styles.joint} cx="22" cy="62" r="5" />
      <circle className={styles.joint} cx="32" cy="39" r="4" />
      <circle className={styles.joint} cx="54" cy="42" r="3" />
      <path d="M54 45v6m-6 0h12" />
      <path className={styles.gripperLeft} d="M48 51v8l3 2" />
      <path className={styles.gripperRight} d="M60 51v8l-3 2" />
    </g>
  </>;
}

function Manipulation() {
  return <>
    <Camera x={67} y={12} />
    <path className={styles.sight} d="m72 31-26 33m32-33-14 33" />
    <path className={styles.floor} d="M45 77v-2h19v2" />
    <Arm />
    <rect className={styles.workpiece} x="49" y="64" width="10" height="12" rx="2" />
  </>;
}

function Driving() {
  return <>
    <path className={styles.floor} d="M12 16h72v68H12z" />
    <path className={styles.route} d="M25 70V40q0-9 10-9h26q10 0 10-10v-5" />
    <rect className={styles.obstacle} x="46" y="48" width="24" height="22" rx="3" />
    <path d="m46 48 5-5h24v22l-5 5m0-22 5-5" />
    <g className={styles.rover}>
      <path className={styles.field} d="M25 58 13 38h24z" />
      <rect x="16" y="60" width="18" height="21" rx="5" />
      <path d="M13 64v9m24-9v9M22 77h6" />
      <rect className={styles.accentFill} x="21" y="57" width="8" height="6" rx="2" />
      <circle cx="25" cy="60" r="1" />
    </g>
  </>;
}

function Inspection({measuring = false}) {
  return <>
    <Camera x={40} y={11} />
    <path className={styles.sight} d="M43 29 33 55m20-26 11 26" />
    <rect x="10" y="65" width="76" height="12" rx="6" />
    {[18, 33, 48, 63, 78].map((x) => <circle key={x} cx={x} cy="71" r="2" />)}
    <path d="M19 77v7m58-7v7" />
    <g className={styles.inspectedPart}><rect x="20" y="46" width="20" height="18" rx="2" /><path d="M26 46v7h8v-7" /></g>
    <g className={styles.measurement}>
      <path className={styles.accent} d="M34 50v-8h8m12 0h8v8m0 9v8h-8m-12 0h-8v-8" />
      {measuring && <path className={styles.accent} d="M37 35h22m-22-3v6m22-6v6M69 46v17m-3-17h6m-6 17h6" />}
    </g>
  </>;
}

function Recognition() { return <Inspection />; }
function Measurement() { return <Inspection measuring />; }

function Overview() {
  return <>
    <rect x="13" y="13" width="29" height="29" rx="6" /><path d="M20 35h15m-11 0 3-13 8 6" />
    <rect x="54" y="13" width="29" height="29" rx="6" /><rect x="62" y="22" width="13" height="11" rx="3" /><path d="M60 25v6m17-6v6" />
    <rect x="13" y="54" width="29" height="29" rx="6" /><path d="M19 75h17m-15-5V60h12v10z" />
    <rect x="54" y="54" width="29" height="29" rx="6" /><path className={styles.accent} d="M62 65h10v11H62zM60 59h14m-14-2v4m14-4v4" />
  </>;
}

const scenes = {all: Overview, manipulation: Manipulation, recognition: Recognition, measurement: Measurement, driving: Driving};

// Each illustration owns a single mobile-play allowance for this menu opening.
// No timer, media request or animation survives the option's unmount.
export default function ApplicationIllustration({scene, hovered, environment, inputMode, scrollRoot, ready}) {
  const ref = useRef(null);
  const seen = useRef(false);
  const [visible, setVisible] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const Scene = scenes[scene] || Overview;

  useEffect(() => {
    const root = scrollRoot.current;
    if (!ready || scene === 'all' || !root) return undefined;
    // Check the scroll container directly as well: observer delivery can lag
    // during touch scrolling. A newly revealed scene must not miss its turn.
    const measure = () => {
      const bounds = root.getBoundingClientRect();
      const rect = ref.current.getBoundingClientRect();
      const width = Math.max(0, Math.min(rect.right, bounds.right, window.innerWidth) - Math.max(rect.left, bounds.left, 0));
      const height = Math.max(0, Math.min(rect.bottom, bounds.bottom, window.innerHeight) - Math.max(rect.top, bounds.top, 0));
      setVisible(rect.width * rect.height > 0 && width * height / (rect.width * rect.height) >= .6);
    };
    const observer = window.IntersectionObserver ? new IntersectionObserver(measure, {root, threshold: [0, .6]}) : null;
    observer?.observe(ref.current);
    measure();
    root.addEventListener('scroll', measure, {passive: true});
    window.addEventListener('resize', measure);
    return () => {
      observer?.disconnect();
      root.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [ready, scene, scrollRoot]);

  const allowed = visible && !environment.hidden && !environment.reduced && inputMode !== 'keyboard';
  useEffect(() => {
    if (!allowed || !environment.touch) {setAutoplay(false); return;}
    if (!seen.current) {seen.current = true; setAutoplay(true);}
  }, [allowed, environment.touch]);
  const playing = scene !== 'all' && allowed && (environment.touch ? autoplay : hovered);

  return <span ref={ref} className={styles.preview} data-scene={scene} data-playing={playing} aria-hidden="true">
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false"><Scene /></svg>
  </span>;
}
