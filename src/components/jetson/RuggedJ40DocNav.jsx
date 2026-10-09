import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import '/src/css/rugged-j40-wiki-style.css';

const ITEMS = [
  {
    slug: '/jetson/recomputer_rugged_j401/getting_started/',
    label: 'Quick Start',
    hint: 'Overview & flash',
  },
  {
    slug: '/jetson/recomputer_rugged_j401/hardware_and_interface_usage/',
    label: 'Hardware & I/O',
    hint: 'M12 interfaces',
  },
];

const GETTING_STARTED_PATH = '/jetson/recomputer_rugged_j401/getting_started/';
const APPLICATION_PATH = '/jetson/recomputer_rugged_j401/industrial_vision/';
const APPLICATION_HUB = `${GETTING_STARTED_PATH}#applications`;

export default function RuggedJ40DocNav() {
  const {pathname, hash} = useLocation();
  const current = pathname.replace(/\/+$/, '');
  const onGettingStarted = current.endsWith(GETTING_STARTED_PATH.replace(/\/+$/, ''));
  const applicationHubActive = onGettingStarted && hash === '#applications';
  const applicationActive =
    current.endsWith(APPLICATION_PATH.replace(/\/+$/, '')) || applicationHubActive;

  useEffect(() => {
    if (!applicationActive || !hash) return undefined;

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return undefined;

    let pendingImages = 0;
    let cancelled = false;

    const alignTarget = () => {
      if (!cancelled) {
        window.requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
      }
    };

    const handleImageSettled = () => {
      pendingImages -= 1;
      if (pendingImages === 0) alignTarget();
    };

    const precedingImages = Array.from(document.images).filter(
      (image) =>
        !image.complete &&
        Boolean(image.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING),
    );

    pendingImages = precedingImages.length;
    precedingImages.forEach((image) => {
      image.addEventListener('load', handleImageSettled, {once: true});
      image.addEventListener('error', handleImageSettled, {once: true});
    });

    alignTarget();
    const fallbackTimer = window.setTimeout(alignTarget, 1800);

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);
      precedingImages.forEach((image) => {
        image.removeEventListener('load', handleImageSettled);
        image.removeEventListener('error', handleImageSettled);
      });
    };
  }, [applicationActive, hash]);

  return (
    <nav className="rugged-doc-nav" aria-label="reComputer Rugged J40 documentation">
      {ITEMS.map((item) => {
        const itemPath = item.slug.replace(/\/+$/, '');
        const active = current.endsWith(itemPath) && !(item.slug === GETTING_STARTED_PATH && applicationHubActive);

        return (
          <Link
            key={item.slug}
            to={item.slug}
            className={`rugged-doc-nav-item${active ? ' active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className="rugged-doc-nav-label">{item.label}</span>
            <small>{item.hint}</small>
          </Link>
        );
      })}

      <Link
        to={APPLICATION_HUB}
        className={`rugged-doc-nav-item rugged-doc-nav-application${applicationActive ? ' active' : ''}`}
        aria-current={applicationActive ? 'page' : undefined}
      >
        <span className="rugged-doc-nav-label">Application</span>
        <small>Use cases &amp; benchmarks</small>
      </Link>
    </nav>
  );
}
