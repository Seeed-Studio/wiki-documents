import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '/src/css/jetson-product-wiki-style.css';

function localize(value, locale) {
  if (value && typeof value === 'object') {
    return value[locale] || value.en || '';
  }
  return value;
}

function normalizePath(path = '') {
  return path.split('#')[0].replace(/\/+$/, '');
}

function targetHash(target = '') {
  const hashIndex = target.indexOf('#');
  return hashIndex === -1 ? '' : target.slice(hashIndex);
}

export default function JetsonProductDocNav({
  items = [],
  application,
  ariaLabel = 'Jetson product documentation',
}) {
  const {pathname, hash} = useLocation();
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale || 'en';
  const currentPath = normalizePath(pathname);

  const pathMatches = (target) => currentPath.endsWith(normalizePath(target));
  const targetMatches = (target) => {
    const expectedHash = targetHash(target);
    return pathMatches(target) && (!expectedHash || hash === expectedHash);
  };

  const applicationActive = Boolean(
    application &&
      (targetMatches(application.to) ||
        application.activePaths?.some((path) => pathMatches(path))),
  );

  useEffect(() => {
    if (!hash) return undefined;

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
  }, [pathname, hash]);

  return (
    <nav className="jetson-product-doc-nav" aria-label={localize(ariaLabel, locale) || 'Jetson product documentation'}>
      {items.map((item) => {
        const sharesApplicationTarget =
          application && normalizePath(item.to) === normalizePath(application.to);
        const active = pathMatches(item.to) && !(applicationActive && sharesApplicationTarget);

        return (
          <Link
            key={item.to}
            to={item.to}
            className={`jetson-product-doc-nav-item${active ? ' active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className="jetson-product-doc-nav-label">{localize(item.label, locale)}</span>
            <small>{localize(item.hint, locale)}</small>
          </Link>
        );
      })}

      {application && (
        <Link
          to={application.to}
          className={`jetson-product-doc-nav-item jetson-product-doc-nav-application${applicationActive ? ' active' : ''}`}
          aria-current={applicationActive ? 'page' : undefined}
        >
          <span className="jetson-product-doc-nav-label">{localize(application.label, locale)}</span>
          <small>{localize(application.hint, locale)}</small>
        </Link>
      )}
    </nav>
  );
}
