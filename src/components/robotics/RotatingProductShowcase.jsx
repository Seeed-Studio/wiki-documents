import React, {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const COPY = {
  en: {
    label: 'Robot kit selector',
    previous: 'Previous product',
    next: 'Next product',
    instructions: 'Scroll, drag, or use the arrow keys to rotate. Click a card to open it, or press Space to open and close.',
    of: 'of',
  },
  cn: {
    label: '机器人套件选择器',
    previous: '上一个产品',
    next: '下一个产品',
    instructions: '在卡片区域滚动、拖动或使用方向键切换；点击卡片展开，按空格键展开或收回。',
    of: '共',
  },
};

const COLLAPSE_DELAY = 560;
const OPEN_AFTER_ROTATION_DELAY = 620;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getTextContent(node) {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join('');
  if (!isValidElement(node)) return '';
  return getTextContent(node.props.children);
}

function getCardTitle(card, fallback) {
  const summary = Children.toArray(card.props.children).find(
    (child) => isValidElement(child) && child.type === 'summary',
  );
  const heading = summary
    ? Children.toArray(summary.props.children).find(
        (child) => isValidElement(child) && child.type === 'h3',
      )
    : null;
  return heading ? getTextContent(heading.props.children).trim() : fallback;
}

function getCircularOffset(index, activeIndex, count) {
  let offset = (index - activeIndex + count) % count;
  if (offset > count / 2) offset -= count;
  return offset;
}

const PANEL_LIST_CLASSES = ['learning-steps', 'rebot-resource-list', 'reachy-path-grid'];

function hasPanelClass(node, className) {
  return isValidElement(node) && String(node.props.className || '').split(/\s+/).includes(className);
}

function isPanelList(node) {
  return PANEL_LIST_CLASSES.some((className) => hasPanelClass(node, className));
}

function getPanelWeight(node) {
  if (!isValidElement(node)) return 0;
  if (isPanelList(node)) {
    return Math.max(1, Children.toArray(node.props.children).filter(isValidElement).length);
  }
  if (hasPanelClass(node, 'learning-group')) {
    const list = Children.toArray(node.props.children).find(isPanelList);
    return list ? getPanelWeight(list) : 1;
  }
  return 1;
}

function splitBodyContent(body) {
  const bodyChildren = Children.toArray(body?.props.children).filter(isValidElement);
  if (bodyChildren.length === 1 && isPanelList(bodyChildren[0])) {
    const list = bodyChildren[0];
    const items = Children.toArray(list.props.children).filter(isValidElement);
    const midpoint = Math.ceil(items.length / 2);
    return [
      [cloneElement(list, {key: 'left-list'}, items.slice(0, midpoint))],
      [cloneElement(list, {key: 'right-list'}, items.slice(midpoint))],
    ];
  }

  const totalWeight = bodyChildren.reduce((sum, child) => sum + getPanelWeight(child), 0);
  const targetWeight = Math.ceil(totalWeight / 2);
  const left = [];
  const right = [];
  let leftWeight = 0;

  bodyChildren.forEach((child) => {
    const weight = getPanelWeight(child);
    if (!left.length || leftWeight + weight <= targetWeight) {
      left.push(child);
      leftWeight += weight;
    } else {
      right.push(child);
    }
  });

  return [left, right];
}

function getLeafStyle(side, index, originalStyle) {
  const direction = side === 'left' ? -1 : 1;
  const tier = Math.min(index, 8);
  const angle = direction * (1.55 - Math.min(tier, 6) * 0.16);
  return {
    ...originalStyle,
    '--rp-leaf-x': `${direction * tier * 4}px`,
    '--rp-leaf-y': `${tier * 3}px`,
    '--rp-leaf-rotate': `${angle.toFixed(2)}deg`,
    '--rp-leaf-delay': `${index * 70}ms`,
  };
}

function decoratePanelNode(node, side, counter) {
  if (!isValidElement(node)) return node;
  const className = String(node.props.className || '');

  if (isPanelList(node)) {
    const children = Children.toArray(node.props.children).map((child) => {
      if (!isValidElement(child)) return child;
      const index = counter.value++;
      return cloneElement(child, {
        className: `${child.props.className || ''} rotating-product-leaf`.trim(),
        style: getLeafStyle(side, index, child.props.style),
      });
    });
    return cloneElement(node, {}, children);
  }

  if (hasPanelClass(node, 'learning-group')) {
    const children = Children.toArray(node.props.children).map((child) => {
      if (!isValidElement(child)) return child;
      if (child.type === 'h4') {
        const index = counter.value++;
        return cloneElement(child, {
          className: `${child.props.className || ''} rotating-product-leaf`.trim(),
          style: getLeafStyle(side, index, child.props.style),
        });
      }
      return decoratePanelNode(child, side, counter);
    });
    return cloneElement(node, {}, children);
  }

  const index = counter.value++;
  return cloneElement(node, {
    className: `${className} rotating-product-leaf`.trim(),
    style: getLeafStyle(side, index, node.props.style),
  });
}

function renderPanelContent(nodes, side) {
  const counter = {value: 0};
  return nodes.map((node, index) => (
    <div className="rotating-product-step" key={node.key || `${side}-${index}`}>
      {decoratePanelNode(node, side, counter)}
    </div>
  ));
}

function getCardLayout(card, isActive) {
  const cardChildren = Children.toArray(card.props.children).filter(isValidElement);
  const summary = cardChildren.find((child) => child.type === 'summary');
  const body = cardChildren.find((child) => child.props.className === 'product-body');
  const summaryChildren = Children.toArray(summary?.props.children).map((summaryChild) => {
    if (!isValidElement(summaryChild) || summaryChild.type !== 'h3') return summaryChild;
    return cloneElement(
      summaryChild,
      {},
      <span
        key={isActive ? 'active-title' : 'idle-title'}
        className="rotating-product-title-text"
      >
        {summaryChild.props.children}
      </span>,
    );
  });
  const [leftContent, rightContent] = splitBodyContent(body);
  return {summary, summaryChildren, leftContent, rightContent};
}

export default function RotatingProductShowcase({children, locale = 'en'}) {
  const copy = COPY[locale] || COPY.en;
  const cards = useMemo(
    () => Children.toArray(children).filter((child) => isValidElement(child)),
    [children],
  );
  const count = cards.length;
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const activeIndexRef = useRef(0);
  const openIndexRef = useRef(null);
  const dragRef = useRef({active: false, startX: 0, currentX: 0});
  const suppressClickRef = useRef(false);
  const wheelRef = useRef({amount: 0, lastMove: 0});
  const transitionTimersRef = useRef(new Set());
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [stageHeight, setStageHeight] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const titles = useMemo(
    () => cards.map((card, index) => getCardTitle(card, `Product ${index + 1}`)),
    [cards],
  );

  const clearTransitionTimers = useCallback(() => {
    transitionTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    transitionTimersRef.current.clear();
  }, []);

  const scheduleTransition = useCallback((callback, delay) => {
    const timer = window.setTimeout(() => {
      transitionTimersRef.current.delete(timer);
      callback();
    }, delay);
    transitionTimersRef.current.add(timer);
  }, []);

  const updateOpenIndex = useCallback((index) => {
    openIndexRef.current = index;
    setOpenIndex(index);
  }, []);

  const switchToCard = useCallback((requestedIndex, openAfter = false) => {
    if (!count) return;
    const nextIndex = (requestedIndex + count) % count;
    const currentIndex = activeIndexRef.current;

    clearTransitionTimers();
    if (nextIndex === currentIndex) {
      if (openAfter) {
        updateOpenIndex(openIndexRef.current === currentIndex ? null : currentIndex);
      }
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const needsCollapse = openIndexRef.current !== null;
    if (needsCollapse) updateOpenIndex(null);

    const rotate = () => {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      if (!openAfter) return;
      if (reduceMotion) {
        updateOpenIndex(nextIndex);
      } else {
        scheduleTransition(() => updateOpenIndex(nextIndex), OPEN_AFTER_ROTATION_DELAY);
      }
    };

    if (needsCollapse && !reduceMotion) {
      scheduleTransition(rotate, COLLAPSE_DELAY);
    } else {
      rotate();
    }
  }, [clearTransitionTimers, count, scheduleTransition, updateOpenIndex]);

  const move = useCallback((direction) => {
    switchToCard(activeIndexRef.current + direction);
  }, [switchToCard]);

  const selectCard = useCallback((index) => {
    switchToCard(index, true);
  }, [switchToCard]);

  useEffect(() => () => clearTransitionTimers(), [clearTransitionTimers]);

  useEffect(() => {
    if (!count || activeIndex < count) return;
    activeIndexRef.current = 0;
    setActiveIndex(0);
    updateOpenIndex(null);
  }, [activeIndex, count, updateOpenIndex]);

  useEffect(() => {
    const activeCard = rootRef.current?.querySelector(
      '.rotating-product-card[data-active="true"]',
    );
    if (!activeCard) return undefined;

    let frameId;
    const updateHeight = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const sideHeights = [...activeCard.querySelectorAll('.rotating-product-side')]
          .map((side) => side.offsetHeight);
        setStageHeight(Math.ceil(Math.max(activeCard.offsetHeight, ...sideHeights) + 36));
      });
    };

    updateHeight();
    if (typeof ResizeObserver === 'undefined') {
      return () => cancelAnimationFrame(frameId);
    }
    const observer = new ResizeObserver(updateHeight);
    observer.observe(activeCard);
    activeCard.querySelectorAll('.rotating-product-side').forEach((side) => observer.observe(side));
    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [activeIndex, openIndex]);

  useEffect(() => {
    rootRef.current?.querySelectorAll('.rotating-product-card').forEach((card, index) => {
      const distance = Math.abs(getCircularOffset(index, activeIndex, count));
      const isUnavailable = distance > 1;
      card.inert = isUnavailable;
      const summary = card.querySelector(':scope > .product-head');
      if (summary) summary.tabIndex = isUnavailable ? -1 : 0;
    });
  }, [activeIndex, count, openIndex]);

  useEffect(() => {
    const page = rootRef.current?.closest('.robotics-page');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!page || reduceMotion.matches) return undefined;

    let position = 0;
    let velocity = 0;
    let frameId = 0;
    let lastScrollY = window.scrollY;

    const animate = () => {
      velocity += -position * 0.2;
      velocity *= 0.62;
      position = clamp(position + velocity, -3, 3);
      page.style.setProperty('--rp-scroll-spring-y', `${position.toFixed(2)}px`);

      if (Math.abs(position) < 0.04 && Math.abs(velocity) < 0.04) {
        page.style.removeProperty('--rp-scroll-spring-y');
        page.classList.remove('is-scroll-springing');
        frameId = 0;
        return;
      }
      frameId = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      const delta = nextScrollY - lastScrollY;
      lastScrollY = nextScrollY;
      if (!delta) return;

      velocity = clamp(velocity + delta * 0.014, -1.4, 1.4);
      page.classList.add('is-scroll-springing');
      if (!frameId) frameId = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameId);
      page.style.removeProperty('--rp-scroll-spring-y');
      page.classList.remove('is-scroll-springing');
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    } else if (event.key === 'Escape' && openIndex !== null) {
      event.preventDefault();
      clearTransitionTimers();
      updateOpenIndex(null);
    } else if (event.key === ' ' || event.code === 'Space') {
      if (event.target !== rootRef.current) return;
      event.preventDefault();
      selectCard(activeIndexRef.current);
    }
  };

  const handleWheel = useCallback((event) => {
    if (openIndexRef.current !== null) {
      wheelRef.current.amount = 0;
      return;
    }
    const isHorizontal = event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY);
    const delta = event.shiftKey ? event.deltaY : isHorizontal ? event.deltaX : event.deltaY;
    if (Math.abs(delta) < 2) return;
    event.preventDefault();
    event.stopPropagation();

    const now = performance.now();
    if (Math.sign(wheelRef.current.amount) !== Math.sign(delta)) wheelRef.current.amount = 0;
    wheelRef.current.amount += delta;
    const threshold = isHorizontal ? 34 : 72;
    if (Math.abs(wheelRef.current.amount) < threshold || now - wheelRef.current.lastMove < 420) return;

    move(wheelRef.current.amount > 0 ? 1 : -1);
    wheelRef.current = {amount: 0, lastMove: now};
  }, [move]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    root.addEventListener('wheel', handleWheel, {passive: false});
    return () => root.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  const handlePointerDown = (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (event.button !== 0 || target?.closest('a, .rotating-showcase-controls button')) return;
    dragRef.current = {active: true, startX: event.clientX, currentX: event.clientX};
    suppressClickRef.current = false;
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current.active) return;
    dragRef.current.currentX = event.clientX;
    const delta = event.clientX - dragRef.current.startX;
    if (Math.abs(delta) > 7) {
      suppressClickRef.current = true;
      setIsDragging(true);
      if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.setPointerCapture(event.pointerId);
      }
    }
    stageRef.current?.style.setProperty('--rp-carousel-drag-x', `${clamp(delta * 0.22, -34, 34)}px`);
  };

  const finishPointerGesture = (event) => {
    if (!dragRef.current.active) return;
    const delta = dragRef.current.currentX - dragRef.current.startX;
    dragRef.current.active = false;
    setIsDragging(false);
    stageRef.current?.style.removeProperty('--rp-carousel-drag-x');
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (Math.abs(delta) > 46) move(delta < 0 ? 1 : -1);
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  };

  return (
    <div
      ref={rootRef}
      className={`rotating-showcase${openIndex !== null ? ' is-expanded' : ''}${isDragging ? ' is-dragging' : ''}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.label}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishPointerGesture}
      onPointerCancel={finishPointerGesture}
    >
      <p className="rotating-showcase-instructions">{copy.instructions}</p>
      <div
        ref={stageRef}
        className="product-stack rotating-showcase-stage"
        style={stageHeight ? {height: `${stageHeight}px`} : undefined}
      >
        {cards.map((card, index) => {
          const offset = getCircularOffset(index, activeIndex, count);
          const distance = Math.abs(offset);
          const isActive = index === activeIndex;
          const isOpen = openIndex === index;
          const {summary, summaryChildren, leftContent, rightContent} = getCardLayout(card, isActive);
          const scale = [1, 0.84, 0.7, 0.6, 0.54][Math.min(distance, 4)];
          const opacity = [1, 0.72, 0.34, 0.08, 0][Math.min(distance, 4)];
          const style = {
            ...card.props.style,
            '--rp-carousel-x': `${offset * 72}%`,
            '--rp-carousel-x-mobile': `${offset * 88}%`,
            '--rp-carousel-scale': scale,
            '--rp-carousel-opacity': opacity,
            '--rp-carousel-z-index': 20 - distance,
          };

          return (
            <article
              key={card.key || card.props.id || index}
              id={card.props.id}
              className={`${card.props.className || ''} rotating-product-card`.trim()}
              style={style}
              data-active={isActive ? 'true' : 'false'}
              data-expanded={isOpen ? 'true' : 'false'}
              data-carousel-index={index}
              data-carousel-distance={distance}
              aria-hidden={distance > 1 ? 'true' : undefined}
            >
              <button
                type="button"
                className={summary?.props.className || 'product-head'}
                aria-expanded={isOpen}
                onClick={(event) => {
                  if (suppressClickRef.current) {
                    event.preventDefault();
                    return;
                  }
                  selectCard(index);
                }}
              >
                {summaryChildren}
              </button>
              <aside className="rotating-product-side rotating-product-side--left" aria-hidden={!isOpen}>
                {renderPanelContent(leftContent, 'left')}
              </aside>
              <aside className="rotating-product-side rotating-product-side--right" aria-hidden={!isOpen}>
                {renderPanelContent(rightContent, 'right')}
              </aside>
            </article>
          );
        })}
      </div>

      <div className="rotating-showcase-controls">
        <button type="button" onClick={() => move(-1)} aria-label={copy.previous}>
          <span className="rotating-showcase-arrow" aria-hidden="true">
            <FaChevronLeft />
          </span>
        </button>
        <div className="rotating-showcase-status" aria-live="polite" aria-atomic="true">
          <strong>{titles[activeIndex]}</strong>
          <span>{activeIndex + 1} {copy.of} {count}</span>
        </div>
        <button type="button" onClick={() => move(1)} aria-label={copy.next}>
          <span className="rotating-showcase-arrow" aria-hidden="true">
            <FaChevronRight />
          </span>
        </button>
      </div>

      <div className="rotating-showcase-dots" aria-hidden="true">
        {cards.map((card, index) => (
          <span key={card.key || card.props.id || index} className={index === activeIndex ? 'is-active' : undefined} />
        ))}
      </div>
    </div>
  );
}
