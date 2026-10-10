import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import * as wheelHelpers from '../../../src/components/robotics/carouselWheel.mjs';
import {
  createWheelGestureState,
  handleCarouselWheel,
} from '../../../src/components/robotics/carouselWheel.mjs';

const require = createRequire(import.meta.url);

// Render the actual component with minimal hook/element doubles, then exercise
// its native listener. This verifies the wiring without pretending to reproduce
// browser hit-testing or physical trackpad input.
function componentHarness(pathname = '/cn/robotics_page/') {
  class Element {
    constructor(onCard = true) { this.onCard = onCard; }
    closest(selector) { return selector === '.rotating-product-card' && this.onCard ? this : null; }
  }
  const effects = [];
  const refs = [];
  const react = {
    Children: {toArray: (value) => value == null ? [] : [].concat(value)},
    isValidElement: (value) => Boolean(value?.props),
    cloneElement: (element, props, ...children) => ({
      ...element,
      props: {...element.props, ...props, ...(children.length ? {children} : {})},
    }),
    createElement: (type, props, ...children) => ({type, props: {...props, children}}),
    useRef: (current) => { const ref = {current}; refs.push(ref); return ref; },
    useCallback: (callback) => callback,
    useMemo: (callback) => callback(),
    useState: (initial) => [initial, () => {}],
    useEffect: (effect) => effects.push(effect),
    useLayoutEffect: () => {},
  };
  const source = readFileSync(new URL(
    '../../../src/components/robotics/RotatingProductShowcase.jsx', import.meta.url,
  ), 'utf8');
  const {code} = require('@babel/core').transformSync(source, {
    babelrc: false,
    configFile: false,
    plugins: ['@babel/plugin-transform-react-jsx', '@babel/plugin-transform-modules-commonjs'],
  });
  const exports = {};
  let now = 0;
  runInNewContext(code, {
    exports,
    require: (name) => {
      if (name === 'react') return react;
      if (name === '@docusaurus/router') return {useLocation: () => ({pathname})};
      if (name === 'react-icons/fa') return {};
      if (name === './carouselWheel.mjs') return wheelHelpers;
      throw new Error(`Unexpected dependency: ${name}`);
    },
    performance: {now: () => now},
    Element,
    window: {matchMedia: () => ({matches: true})},
  });
  const tree = exports.default({children: Array.from({length: 4}, () => ({props: {children: []}}))});
  return {
    effects, refs, tree,
    cardTarget: new Element(),
    gapTarget: new Element(false),
    setTime: (value) => { now = value; },
  };
}

function testComponentLocales(name, callback) {
  for (const pathname of ['/cn/robotics_page/', '/robotics_page/']) {
    test(`${name} at ${pathname}`, () => callback(componentHarness(pathname), pathname));
  }
}

function harness(options = {}) {
  const gesture = createWheelGestureState();
  const moves = [];
  const dispatch = (now, deltas = {}, overrides = {}) => {
    const event = {
      deltaX: 0,
      deltaY: 0,
      deltaMode: 0,
      shiftKey: false,
      ctrlKey: false,
      defaultPrevented: false,
      propagationStopped: false,
      preventDefault() { this.defaultPrevented = true; },
      stopPropagation() { this.propagationStopped = true; },
      ...deltas,
    };
    handleCarouselWheel(event, {
      gesture,
      now,
      move: (direction) => moves.push(direction),
      ...options,
      ...overrides,
    });
    return event;
  };
  return {dispatch, moves, gesture};
}

test('repeated swipes rotate without changing the event target or moving the pointer', () => {
  const {dispatch, moves} = harness();
  const target = {};
  for (const start of [0, 500, 1000]) {
    for (const [offset, deltaY] of [[0, 18], [16, 24], [32, 20]]) {
      dispatch(start + offset, {deltaY, target});
    }
  }
  assert.deepEqual(moves, [1, 1, 1]);
});

test('long inertia tail stays captured, rotates once, and does not extend cooldown', () => {
  const {dispatch, moves, gesture} = harness();
  dispatch(0, {deltaY: 80});
  const deadline = gesture.lockedUntil;
  for (let now = 16; now < 1500; now += 16) {
    const event = dispatch(now, {deltaY: Math.max(1, 50 * Math.exp(-now / 100))});
    assert.equal(event.defaultPrevented, true);
    assert.equal(event.propagationStopped, true);
  }
  assert.equal(gesture.lockedUntil, deadline);
  assert.deepEqual(moves, [1]);
});

test('new same-direction burst interrupts continuous inertia after cooldown', () => {
  const {dispatch, moves} = harness();
  dispatch(0, {deltaY: 80});
  for (let now = 20; now < 500; now += 20) dispatch(now, {deltaY: 2});
  // No idle gap: the next physical swipe starts while momentum is still arriving.
  for (const [now, deltaY] of [[500, 4], [516, 7], [532, 12], [548, 28], [564, 30]]) {
    dispatch(now, {deltaY});
  }
  assert.deepEqual(moves, [1, 1]);
});

test('a deliberate reverse swipe works during the previous inertia tail', () => {
  const {dispatch, moves} = harness();
  dispatch(0, {deltaX: 70});
  for (let now = 20; now < 400; now += 20) dispatch(now, {deltaX: 2});
  dispatch(400, {deltaX: -24});
  dispatch(416, {deltaX: -24});
  assert.deepEqual(moves, [1, -1]);
});

test('consumed wheel gestures cancel page scrolling, even below threshold', () => {
  const {dispatch, moves} = harness();
  for (const [now, target] of [[0, {kind: 'side-card'}], [16, {kind: 'stage-gap'}]]) {
    const event = dispatch(now, {deltaY: 3, target});
    assert.equal(event.defaultPrevented, true);
    assert.equal(event.propagationStopped, true);
  }
  assert.deepEqual(moves, []);
});

test('expanded mode releases page scrolling and closing starts with a fresh gesture', () => {
  const {dispatch, moves} = harness();
  dispatch(0, {deltaY: 70});
  for (const now of [20, 40, 60]) {
    const event = dispatch(now, {deltaY: 100}, {disabled: true});
    assert.equal(event.defaultPrevented, false);
    assert.equal(event.propagationStopped, false);
  }
  assert.deepEqual(moves, [1]);
  dispatch(80, {deltaY: 70});
  assert.deepEqual(moves, [1, 1]);
});

test('grid mode and pinch zoom leave native scrolling and zooming untouched', () => {
  const {dispatch, moves} = harness();
  assert.equal(dispatch(0, {deltaY: 100}, {disabled: true}).defaultPrevented, false);
  assert.equal(dispatch(20, {deltaY: 100, ctrlKey: true}).defaultPrevented, false);
  assert.deepEqual(moves, []);
});

test('horizontal, vertical, shifted and non-pixel wheel deltas keep their direction', () => {
  for (const deltas of [
    {deltaX: -50},
    {deltaY: -60},
    {deltaY: -50, shiftKey: true},
    {deltaX: -50, shiftKey: true},
    {deltaY: -4, deltaMode: 1},
    {deltaY: -1, deltaMode: 2},
  ]) {
    const {dispatch, moves} = harness();
    dispatch(0, deltas);
    assert.deepEqual(moves, [-1], JSON.stringify(deltas));
  }
});

testComponentLocales('component captures and cleans up stage wheel events', ({effects, refs, setTime, cardTarget}) => {
  let registration;
  let removal;
  refs[1].current = {
    addEventListener: (...args) => { registration = args; },
    removeEventListener: (...args) => { removal = args; },
  };
  const effect = effects.find((candidate) => candidate.toString().includes('stage.addEventListener'));
  const cleanup = effect();
  const [type, listener, options] = registration;
  assert.equal(type, 'wheel');
  assert.equal(options.passive, false);
  assert.equal(options.capture, true);
  let cancelled = 0;
  const target = cardTarget;
  for (const time of [0, 500, 1000]) {
    setTime(time);
    listener({
      target, deltaX: 0, deltaY: 70, deltaMode: 0,
      preventDefault: () => { cancelled++; }, stopPropagation() {},
    });
  }
  assert.equal(refs[2].current, 3);
  assert.equal(cancelled, 3);
  cleanup();
  assert.equal(removal[0], 'wheel');
  assert.equal(removal[1], listener);
  assert.equal(removal[2].capture, true);
});

testComponentLocales('stage gaps scroll the page without switching products or accumulating motion', ({effects, refs, setTime, cardTarget, gapTarget}) => {
  let listener;
  refs[1].current = {
    addEventListener: (_, callback) => { listener = callback; },
    removeEventListener() {},
  };
  effects.find((effect) => effect.toString().includes('stage.addEventListener'))();
  const dispatch = (time, target, deltaY) => {
    setTime(time);
    const event = {
      target, deltaX: 0, deltaY, deltaMode: 0,
      defaultPrevented: false, propagationStopped: false,
      preventDefault() { this.defaultPrevented = true; },
      stopPropagation() { this.propagationStopped = true; },
    };
    listener(event);
    return event;
  };

  dispatch(0, cardTarget, 30);
  for (const time of [16, 32, 48]) {
    const event = dispatch(time, gapTarget, 100);
    assert.equal(event.defaultPrevented, false);
    assert.equal(event.propagationStopped, false);
    assert.equal(refs[2].current, 0);
  }
  dispatch(64, cardTarget, 30);
  assert.equal(refs[2].current, 0);
  assert.equal(dispatch(80, cardTarget, 30).defaultPrevented, true);
  assert.equal(refs[2].current, 1);
});

testComponentLocales('moving cards preserve wheel delivery and keyboard navigation', ({effects, refs}) => {
  const summaries = Array.from({length: 4}, () => ({tabIndex: 0}));
  const cards = summaries.map((summary) => ({inert: true, querySelector: () => summary}));
  refs[0].current = {querySelectorAll: () => cards};
  effects.find((candidate) => candidate.toString().includes('card.inert'))();
  assert.deepEqual(cards.map((card) => card.inert), [false, false, false, false]);
  assert.deepEqual(summaries.map((summary) => summary.tabIndex), [0, 0, -1, 0]);
});

testComponentLocales('opening and closing the active card toggles page scrolling', ({effects, refs, tree, setTime, cardTarget}, pathname) => {
  assert.equal(tree.props['aria-label'], pathname.startsWith('/cn/')
    ? '机器人套件选择器'
    : 'Robot kit selector');
  let listener;
  refs[1].current = {
    addEventListener: (_, callback) => { listener = callback; },
    removeEventListener() {},
  };
  effects.find((effect) => effect.toString().includes('stage.addEventListener'))();
  const stage = tree.props.children[1];
  const activeCard = stage.props.children[0][0];
  const button = activeCard.props.children[0].props.children[0];
  const event = () => ({
    target: cardTarget,
    deltaX: 0, deltaY: 100, deltaMode: 0,
    defaultPrevented: false,
    preventDefault() { this.defaultPrevented = true; }, stopPropagation() {},
  });

  // Opening must also discard partially accumulated motion from before the click.
  listener({...event(), deltaY: 30});
  button.props.onClick({preventDefault() {}});
  assert.equal(refs[3].current, 0);
  setTime(20);
  const pageScroll = event();
  listener(pageScroll);
  assert.equal(pageScroll.defaultPrevented, false);
  assert.equal(refs[2].current, 0);

  button.props.onClick({preventDefault() {}});
  assert.equal(refs[3].current, null);
  setTime(40);
  listener({...event(), deltaY: 30});
  assert.equal(refs[2].current, 0);
  setTime(60);
  const carouselScroll = {...event(), deltaY: 30};
  listener(carouselScroll);
  assert.equal(carouselScroll.defaultPrevented, true);
  assert.equal(refs[2].current, 1);
});
