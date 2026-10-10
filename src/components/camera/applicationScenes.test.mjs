import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {transformSync} from '@babel/core';
import {applicationSceneOptions, matchesApplication} from './applicationScenes.js';

// Render the local SVG component without a browser or a new test dependency.
const require = createRequire(import.meta.url);
const source = readFileSync(new URL('./ApplicationIllustration.jsx', import.meta.url), 'utf8');
const {code} = transformSync(source, {
  filename: 'ApplicationIllustration.jsx', configFile: false, babelrc: false,
  presets: [require.resolve('@babel/preset-react')],
  plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
});
const module = {exports: {}};
runInNewContext(code, {module, exports: module.exports, require: (id) => id.endsWith('.css') ? {} : require(id)});
const Illustration = module.exports.default;

test('scene metadata has four distinct, descriptive task options and one static overview', () => {
  assert.deepEqual(applicationSceneOptions.map(({id}) => id), ['all', 'manipulation', 'recognition', 'measurement', 'driving']);
  assert.deepEqual(applicationSceneOptions.slice(1).map(({label}) => label), ['Robot-arm control', 'Visual detection & recognition', 'Visual measurement', 'Intelligent driving']);
  assert.equal(new Set(applicationSceneOptions.map(({illustration}) => illustration)).size, 5);
  for (const option of applicationSceneOptions.slice(1)) {
    assert.ok(option.label.length > 10);
    assert.ok(option.description.length > 25);
    assert.equal(option.illustration, option.id);
  }
});

test('category rules use connections, depth output and explicit night vision, not case-study tags', () => {
  for (const connection of ['usb', 'csi', 'gmsl']) {
    for (const output of ['image', 'depth']) {
      for (const irNightVision of [false, true]) {
        const camera = {connection, output, irNightVision, features: ['ir']};
        assert.equal(matchesApplication(camera, 'all'), true);
        assert.equal(matchesApplication(camera, 'manipulation'), connection === 'usb');
        assert.equal(matchesApplication(camera, 'recognition'), connection !== 'gmsl');
        assert.equal(matchesApplication(camera, 'measurement'), output === 'depth');
        assert.equal(matchesApplication(camera, 'driving'), connection === 'gmsl' || output === 'depth' || irNightVision);
      }
    }
  }
  assert.equal(matchesApplication({connection: 'usb', output: 'image', features: ['ir']}, 'driving'), false);
  assert.equal(matchesApplication({}, 'unknown'), false);
});

test('recognition and measurement have different static diagrams', () => {
  const render = (scene) => renderToStaticMarkup(React.createElement(Illustration, {
    scene, hovered: false, inputMode: 'keyboard', ready: false,
    environment: {reduced: true, hidden: false, touch: false}, scrollRoot: {current: null},
  }));
  const dimensions = 'M37 35h22m-22-3v6m22-6v6M69 46v17m-3-17h6m-6 17h6';
  assert.ok(!render('recognition').includes(dimensions));
  assert.ok(render('measurement').includes(dimensions));
});

test('all illustrations render statically on the server, without adding accessible noise or focus', () => {
  for (const {illustration} of applicationSceneOptions) {
    const html = renderToStaticMarkup(React.createElement(Illustration, {
      scene: illustration, hovered: false, inputMode: 'keyboard', ready: false,
      environment: {reduced: true, hidden: false, touch: false}, scrollRoot: {current: null},
    }));
    assert.match(html, /data-playing="false"/);
    assert.match(html, /aria-hidden="true"/);
    assert.match(html, /focusable="false"/);
    assert.match(html, /viewBox="0 0 96 96"/);
    assert.doesNotMatch(html, /<(?:img|video|image|animate|script)\b|tabindex/i);
  }
});

test('animations are local, finite and reduced-motion safe; only transforms and opacity move', () => {
  const css = readFileSync(new URL('./ApplicationIllustration.module.css', import.meta.url), 'utf8');
  assert.match(css, /animation-duration: 2\.5s/);
  assert.match(css, /animation-iteration-count: 1/);
  assert.match(css, /animation-fill-mode: both/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /animation: none/);
  assert.doesNotMatch(css, /infinite|url\(|transition:\s*all/);
  for (const keyframe of css.matchAll(/@keyframes[^\n]+/g)) {
    const declarations = [...keyframe[0].matchAll(/([a-z-]+):/g)].map((match) => match[1]);
    assert.ok(declarations.every((name) => ['transform', 'opacity'].includes(name)));
  }
});
