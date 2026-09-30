import React, {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
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
    gridInstructions: 'Choose a product from the two-column overview to focus it and open its learning paths.',
    showGrid: 'Show all products',
    showCarousel: 'Return to carousel',
    of: 'of',
  },
  cn: {
    label: '机器人套件选择器',
    previous: '上一个产品',
    next: '下一个产品',
    instructions: '在卡片区域滚动、拖动或使用方向键切换；点击卡片展开，按空格键展开或收回。',
    gridInstructions: '从双列总览中选择产品，卡片会聚焦到中央并展开两侧学习路径。',
    showGrid: '展开双列',
    showCarousel: '返回轮播',
    of: '共',
  },
};

const COLLAPSE_DELAY = 560;
const OPEN_AFTER_ROTATION_DELAY = 620;
const GRID_SELECTION_DURATION = 620;
const WHEEL_GESTURE_TIMEOUT = 150;
const WHEEL_COOLDOWN = 360;
const WHEEL_AXIS_THRESHOLD = 8;
const WHEEL_HORIZONTAL_THRESHOLD = 44;
const WHEEL_VERTICAL_THRESHOLD = 56;

function getWheelDeltaScale(deltaMode) {
  if (deltaMode === 1) return 16;
  if (deltaMode === 2) return 400;
  return 1;
}

function createWheelGestureState() {
  return {
    amount: 0,
    axis: null,
    axisX: 0,
    axisY: 0,
    direction: 0,
    lastEventAt: 0,
    lockedUntil: 0,
  };
}

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
        key="rotating-product-title"
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
  const gridViewRef = useRef(false);
  const gridSelectionRef = useRef(null);
  const gridReturnRef = useRef(false);
  const gridScrollFrameRef = useRef(0);
  const pendingShowcaseScrollRef = useRef(false);
  const dragRef = useRef({active: false, startX: 0, currentX: 0});
  const suppressClickRef = useRef(false);
  const wheelRef = useRef(createWheelGestureState());
  const transitionTimersRef = useRef(new Set());
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [isGridView, setIsGridView] = useState(false);
  const [gridSelectionIndex, setGridSelectionIndex] = useState(null);
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

  const updateGridView = useCallback((nextValue) => {
    gridViewRef.current = nextValue;
    setIsGridView(nextValue);
  }, []);

  const scrollShowcaseIntoView = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;

    const stage = stageRef.current || root;
    const stageRect = stage.getBoundingClientRect();
    const inlineHeight = Number.parseFloat(stage.style.height);
    const stageHeight = Number.isFinite(inlineHeight) && inlineHeight > 0
      ? inlineHeight
      : stageRect.height;
    const anchorValue = getComputedStyle(root)
      .getPropertyValue('--rp-anchor-offset')
      .trim();
    const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    let anchorOffset = 112;
    if (anchorValue.endsWith('rem')) {
      anchorOffset = Number.parseFloat(anchorValue) * rootFontSize;
    } else if (anchorValue.endsWith('px')) {
      anchorOffset = Number.parseFloat(anchorValue);
    }
    anchorOffset = Number.isFinite(anchorOffset) ? Math.max(0, anchorOffset) : 112;

    const stageCenter = stageRect.top + window.scrollY + stageHeight / 2;
    const visibleCenter = anchorOffset + (window.innerHeight - anchorOffset) / 2;
    const fitsViewport = stageHeight <= window.innerHeight - anchorOffset;
    const nextTop = fitsViewport
      ? stageCenter - visibleCenter
      : stageRect.top + window.scrollY - anchorOffset;
    const maxScrollTop = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );

    window.scrollTo({
      top: clamp(nextTop, 0, maxScrollTop),
      behavior: 'auto',
    });
  }, []);

  const scheduleShowcaseScroll = useCallback(() => {
    pendingShowcaseScrollRef.current = true;
    cancelAnimationFrame(gridScrollFrameRef.current);
    gridScrollFrameRef.current = requestAnimationFrame(() => {
      gridScrollFrameRef.current = 0;
      pendingShowcaseScrollRef.current = false;
      scrollShowcaseIntoView();
    });
  }, [scrollShowcaseIntoView]);

  const switchToCard = useCallback((requestedIndex, openAfter = false) => {
    if (!count) return;
    if (gridSelectionRef.current) return;
    gridReturnRef.current = false;
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

  const selectGridCard = useCallback((index, cardElement) => {
    if (gridSelectionRef.current) return;
    clearTransitionTimers();

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const applySelection = () => {
      gridReturnRef.current = true;
      activeIndexRef.current = index;
      setActiveIndex(index);
      updateGridView(false);
      updateOpenIndex(index);
    };

    if (reduceMotion) {
      applySelection();
      scheduleShowcaseScroll();
      return;
    }

    const inner = cardElement?.querySelector('.rotating-product-card-inner');
    if (!inner) {
      applySelection();
      scheduleShowcaseScroll();
      return;
    }

    gridSelectionRef.current = {
      index,
      firstRect: inner.getBoundingClientRect(),
    };
    applySelection();
    setGridSelectionIndex(index);
  }, [clearTransitionTimers, scheduleShowcaseScroll, updateGridView, updateOpenIndex]);

  const finishGridSelection = useCallback((index) => {
    if (gridSelectionRef.current?.index !== index) return;
    gridSelectionRef.current = null;
    setGridSelectionIndex(null);
  }, []);

  useLayoutEffect(() => {
    if (gridSelectionIndex === null) return undefined;

    const selection = gridSelectionRef.current;
    const card = rootRef.current?.querySelector(
      `.rotating-product-card[data-carousel-index="${gridSelectionIndex}"]`,
    );
    const inner = card?.querySelector('.rotating-product-card-inner');
    if (selection && card && inner) {
      const firstRect = selection.firstRect;
      const finalRect = inner.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      const firstCenterX = firstRect.left + firstRect.width / 2 + scrollX;
      const firstCenterY = firstRect.top + firstRect.height / 2 + scrollY;
      const finalCenterX = finalRect.left + finalRect.width / 2 + scrollX;
      const finalCenterY = finalRect.top + finalRect.height / 2 + scrollY;
      const translateX = firstCenterX - finalCenterX;
      const translateY = firstCenterY - finalCenterY;
      const scale = firstRect.width / finalRect.width;
      inner.style.setProperty('--rp-grid-select-x', `${translateX.toFixed(2)}px`);
      inner.style.setProperty('--rp-grid-select-y', `${translateY.toFixed(2)}px`);
      inner.style.setProperty('--rp-grid-select-scale', `${scale.toFixed(4)}`);
      scheduleShowcaseScroll();
    } else {
      scheduleShowcaseScroll();
    }

    const fallbackTimer = window.setTimeout(
      () => finishGridSelection(gridSelectionIndex),
      GRID_SELECTION_DURATION + 120,
    );
    transitionTimersRef.current.add(fallbackTimer);
    return () => {
      window.clearTimeout(fallbackTimer);
      transitionTimersRef.current.delete(fallbackTimer);
      inner?.style.removeProperty('--rp-grid-select-x');
      inner?.style.removeProperty('--rp-grid-select-y');
      inner?.style.removeProperty('--rp-grid-select-scale');
    };
  }, [gridSelectionIndex, finishGridSelection, scheduleShowcaseScroll]);

  const toggleGridView = useCallback(() => {
    if (gridSelectionRef.current) return;
    clearTransitionTimers();

    if (gridViewRef.current) {
      gridReturnRef.current = false;
      updateGridView(false);
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const showGrid = () => {
      gridReturnRef.current = false;
      updateGridView(true);
    };
    if (openIndexRef.current !== null) {
      updateOpenIndex(null);
      if (!reduceMotion) {
        scheduleTransition(showGrid, COLLAPSE_DELAY);
        return;
      }
    }
    showGrid();
  }, [clearTransitionTimers, scheduleTransition, updateGridView, updateOpenIndex]);

  const returnToGrid = useCallback(() => {
    clearTransitionTimers();
    if (gridSelectionRef.current) {
      gridSelectionRef.current = null;
      setGridSelectionIndex(null);
    }
    gridReturnRef.current = false;
    updateOpenIndex(null);
    updateGridView(true);
  }, [clearTransitionTimers, updateGridView, updateOpenIndex]);

  useEffect(() => () => {
    clearTransitionTimers();
    cancelAnimationFrame(gridScrollFrameRef.current);
  }, [clearTransitionTimers]);

  useEffect(() => {
    if (!count || activeIndex < count) return;
    activeIndexRef.current = 0;
    setActiveIndex(0);
    updateOpenIndex(null);
  }, [activeIndex, count, updateOpenIndex]);

  useLayoutEffect(() => {
    if (isGridView) {
      setStageHeight(null);
      return undefined;
    }
    const activeCard = rootRef.current?.querySelector(
      '.rotating-product-card[data-active="true"]',
    );
    if (!activeCard) return undefined;

    let frameId;
    const measureHeight = () => {
      const sideHeights = [...activeCard.querySelectorAll('.rotating-product-side')]
        .map((side) => side.offsetHeight);
      setStageHeight(Math.ceil(Math.max(activeCard.offsetHeight, ...sideHeights) + 36));
    };

    const updateHeight = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(measureHeight);
    };

    measureHeight();
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
  }, [activeIndex, isGridView, openIndex]);

  useLayoutEffect(() => {
    if (!pendingShowcaseScrollRef.current) return undefined;
    scheduleShowcaseScroll();
    return undefined;
  }, [gridSelectionIndex, stageHeight, scheduleShowcaseScroll]);

  useEffect(() => {
    rootRef.current?.querySelectorAll('.rotating-product-card').forEach((card, index) => {
      const distance = Math.abs(getCircularOffset(index, activeIndex, count));
      const isUnavailable = !isGridView && distance > 1;
      card.inert = isUnavailable;
      const summary = card.querySelector(':scope > .rotating-product-card-inner > .product-head');
      if (summary) summary.tabIndex = isUnavailable ? -1 : 0;
    });
  }, [activeIndex, count, isGridView, openIndex]);

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
    if (gridSelectionRef.current) return;
    if (gridViewRef.current && (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === ' ' || event.code === 'Space')) {
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    } else if (event.key === 'Escape' && openIndex !== null) {
      event.preventDefault();
      if (gridReturnRef.current) {
        returnToGrid();
      } else {
        clearTransitionTimers();
        updateOpenIndex(null);
      }
    } else if (event.key === ' ' || event.code === 'Space') {
      if (event.target !== rootRef.current) return;
      event.preventDefault();
      if (gridReturnRef.current && openIndexRef.current !== null) {
        returnToGrid();
        return;
      }
      selectCard(activeIndexRef.current);
    }
  };

  const handleWheel = useCallback((event) => {
    if (
      openIndexRef.current !== null
      || gridViewRef.current
      || gridSelectionRef.current
      || event.ctrlKey
    ) {
      wheelRef.current = createWheelGestureState();
      return;
    }
    const target = event.target instanceof Element ? event.target : null;

    if (!target?.closest('.rotating-product-card')) {
      wheelRef.current = createWheelGestureState();
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const now = performance.now();
    const gesture = wheelRef.current;
    const scale = getWheelDeltaScale(event.deltaMode);
    const deltaX = event.deltaX * scale;
    const deltaY = event.deltaY * scale;

    if (now < gesture.lockedUntil) {
      gesture.lastEventAt = now;
      gesture.lockedUntil = Math.max(gesture.lockedUntil, now + WHEEL_GESTURE_TIMEOUT);
      return;
    }

    if (now - gesture.lastEventAt > WHEEL_GESTURE_TIMEOUT) {
      gesture.amount = 0;
      gesture.axis = null;
      gesture.axisX = 0;
      gesture.axisY = 0;
      gesture.direction = 0;
    }

    gesture.axisX += deltaX;
    gesture.axisY += deltaY;
    if (!gesture.axis) {
      if (
        Math.abs(gesture.axisX) < WHEEL_AXIS_THRESHOLD
        && Math.abs(gesture.axisY) < WHEEL_AXIS_THRESHOLD
      ) {
        gesture.lastEventAt = now;
        return;
      }
      gesture.axis = event.shiftKey
        || Math.abs(gesture.axisX) > Math.abs(gesture.axisY)
        ? 'horizontal'
        : 'vertical';
    }

    const delta = gesture.axis === 'horizontal'
      ? (event.shiftKey ? deltaY : deltaX)
      : deltaY;
    if (!delta) {
      gesture.lastEventAt = now;
      return;
    }

    const direction = Math.sign(delta);
    if (direction !== gesture.direction) {
      gesture.amount = 0;
      gesture.direction = direction;
    }
    gesture.amount += delta;

    const threshold = gesture.axis === 'horizontal'
      ? WHEEL_HORIZONTAL_THRESHOLD
      : WHEEL_VERTICAL_THRESHOLD;
    if (Math.abs(gesture.amount) < threshold) {
      gesture.lastEventAt = now;
      return;
    }

    move(direction);
    wheelRef.current = {
      ...createWheelGestureState(),
      lastEventAt: now,
      lockedUntil: now + WHEEL_COOLDOWN,
    };
  }, [move]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    stage.addEventListener('wheel', handleWheel, {passive: false});
    return () => stage.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  const handlePointerDown = (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (
      event.button !== 0
      || gridViewRef.current
      || !target?.closest('.rotating-product-card')
      || target?.closest('a, .rotating-showcase-controls button, .rotating-showcase-view-toggle')
    ) return;
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
      className={`rotating-showcase${openIndex !== null ? ' is-expanded' : ''}${isGridView ? ' is-grid-view' : ''}${gridSelectionIndex !== null ? ' is-grid-selecting' : ''}${isDragging ? ' is-dragging' : ''}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.label}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="rotating-showcase-toolbar">
        <p className="rotating-showcase-instructions">
          {isGridView ? copy.gridInstructions : copy.instructions}
        </p>
        <button
          type="button"
          className="rotating-showcase-view-toggle"
          aria-pressed={isGridView}
          onClick={toggleGridView}
        >
          <span aria-hidden="true">{isGridView ? '↶' : '▦'}</span>
          {isGridView ? copy.showCarousel : copy.showGrid}
        </button>
      </div>
      <div
        ref={stageRef}
        className="product-stack rotating-showcase-stage"
        style={stageHeight ? {height: `${stageHeight}px`} : undefined}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointerGesture}
        onPointerCancel={finishPointerGesture}
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
            '--rp-grid-delay': `${index * 55}ms`,
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
              data-grid-selected={gridSelectionIndex === index ? 'true' : 'false'}
              aria-hidden={!isGridView && distance > 1 ? 'true' : undefined}
            >
              <div
                className="rotating-product-card-inner"
                onAnimationEnd={(event) => {
                  if (event.animationName === 'rpGridSelectionFocus') {
                    finishGridSelection(index);
                  }
                }}
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
                    if (isGridView) {
                      selectGridCard(index, event.currentTarget.closest('.rotating-product-card'));
                    } else {
                      if (gridReturnRef.current && openIndex === index) {
                        returnToGrid();
                        return;
                      }
                      selectCard(index);
                    }
                  }}
                >
                  {summaryChildren}
                </button>
                <aside
                  className="rotating-product-side rotating-product-side--left"
                  aria-hidden={!isOpen || gridSelectionIndex !== null}
                >
                  {renderPanelContent(leftContent, 'left')}
                </aside>
                <aside
                  className="rotating-product-side rotating-product-side--right"
                  aria-hidden={!isOpen || gridSelectionIndex !== null}
                >
                  {renderPanelContent(rightContent, 'right')}
                </aside>
              </div>
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
