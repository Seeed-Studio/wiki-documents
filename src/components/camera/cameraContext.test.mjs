import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {transformSync} from '@babel/core';
import {cameras} from './cameraData.js';
import {platformFamilies} from './platformData.js';
import {applicationSceneOptions, matchesApplication} from './applicationScenes.js';
import {applicationEvidence, applicationUses} from './cameraApplications.js';
import {cameraCompatibility, familyGuideReferences} from './cameraCompatibility.js';
import {wikiResources} from './cameraResources.js';
import {defaultFilters, selectCameras, isCameraAvailable, changeFilter, comparisonCandidates, activeFilterEntries} from './cameraModel.js';

const camera = (id) => cameras.find((item) => item.id === id);
const require = createRequire(import.meta.url);
const {code} = transformSync(readFileSync(new URL('./CameraContext.jsx', import.meta.url), 'utf8'), {
  filename: 'CameraContext.jsx', configFile: false, babelrc: false,
  presets: [require.resolve('@babel/preset-react')], plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
});
const module = {exports: {}};
runInNewContext(code, {module, exports: module.exports, require: (id) => ({
  './cameraApplications': {applicationUses}, './cameraCompatibility': {cameraCompatibility}, './platformData': {platformFamilies},
  './applicationScenes': {applicationSceneOptions},
}[id] || (id.endsWith('.css') ? {} : require(id)))});
const {CompatibilityJetson, ApplicationUses} = module.exports;

test('the recommendation banner is removed while Application is a real filter control', () => {
  assert.equal(module.exports.ApplicationGuide, undefined);
  const selector = readFileSync(new URL('./CameraSelector.jsx', import.meta.url), 'utf8');
  assert.match(selector, /label="Application" filterKey="application"/);
  assert.doesNotMatch(selector, /ApplicationGuide|Application guide|setApplication|camera-application-guide-title|Selection tips/);
  const css = readFileSync(new URL('./CameraSelector.module.css', import.meta.url), 'utf8');
  assert.doesNotMatch(css, /applicationGuide|applicationFocus/);
});

test('comparison instructions name the card action and explain the matching output requirement', () => {
  const selector = readFileSync(new URL('./CameraSelector.jsx', import.meta.url), 'utf8');
  assert.ok(selector.includes('Select Compare on two camera cards to view their specifications side by side. Choose either two RGB cameras or two RGB + Depth cameras.'));
  assert.doesNotMatch(selector, /Connections can differ\./);
});

test('details expose named compatibility, evidence and sources without animation', () => {
  const html = renderToStaticMarkup(React.createElement(CompatibilityJetson, {camera: camera('gemini-2'), platform: 'classic'}));
  assert.match(html, /Compatibility Jetson/);
  assert.match(html, /not every configuration has been tested/);
  assert.match(html, /Selected series/);
  assert.equal((html.match(/data-current=/g) || []).length, 12);
  assert.match(html, /Series-specific guides &amp; examples/);
  assert.doesNotMatch(html, /data-scene=|<svg|<img/);
  const uses = renderToStaticMarkup(React.createElement(ApplicationUses, {camera: camera('gemini-2')}));
  assert.match(uses, /Related application examples/);
  assert.match(uses, /Other cameras may support the same task/);
  assert.doesNotMatch(uses, /Application filter|Documented applications/);
  assert.equal((uses.match(/<strong>/g) || []).length, 4);
  assert.match(uses, /orb_slam3_orbbec_gemini2/);
  assert.equal(renderToStaticMarkup(React.createElement(ApplicationUses, {camera: camera('ov9732-usb')})), '');
  const excluded = renderToStaticMarkup(React.createElement(CompatibilityJetson, {camera: camera('zed-x'), platform: 'industrial-j501'}));
  assert.match(excluded, /outside this camera/);
  assert.doesNotMatch(excluded, /Selected series/);
});

test('every task association has a model-specific, inspectable reference', () => {
  const ids = new Set(cameras.map(({id}) => id));
  for (const item of applicationEvidence) {
    assert.ok(applicationSceneOptions.some(({id}) => id === item.application && id !== 'all'));
    assert.ok(item.reason && item.title && item.kind);
    assert.equal(new Set(item.cameraIds).size, item.cameraIds.length);
    assert.ok(item.cameraIds.every((id) => ids.has(id)));
    if (item.source) {
      const wiki = wikiResources.find(({source, url}) => source === item.source && url === item.url);
      assert.ok(wiki);
      assert.ok(item.cameraIds.every((id) => wiki.cameraIds.includes(id)), item.url);
    } else {
      assert.ok(['www.orbbec.com', 'store.orbbec.com', 'www.realsenseai.com', 'www.stereolabs.com', 'docs.stereolabs.com'].includes(new URL(item.url).hostname));
    }
  }
});

test('examples remain model-specific without becoming catalogue restrictions', () => {
  assert.deepEqual(applicationUses(camera('gemini-2')).map(({id}) => id), ['manipulation', 'recognition', 'measurement', 'driving']);
  assert.deepEqual(applicationUses(camera('imx219-83')), []);
  // Capability-based filtering does not depend on whether a camera has an example.
  for (const {id: application} of applicationSceneOptions) {
    assert.deepEqual(selectCameras(cameras, {...defaultFilters, application}), cameras.filter((item) => matchesApplication(item, application)));
    assert.deepEqual(activeFilterEntries({...defaultFilters, application}), application === 'all' ? [] : [['application', application]]);
  }
  assert.equal(cameras.length, 29);
  assert.ok(selectCameras(cameras, {...defaultFilters, application: 'recognition'}).includes(camera('imx219-83')));
  assert.ok(selectCameras(cameras, {...defaultFilters, application: 'manipulation'}).includes(camera('ov9732-usb')));
});

test('hardware requirements and comparison discovery do not depend on scene evidence', () => {
  const original = {...defaultFilters, platform: 'j50', output: 'depth', distance: {minM: .3, maxM: 5}, search: 'Gemini'};
  assert.deepEqual(selectCameras(cameras, original).map(({id}) => id), ['gemini-2', 'gemini-335lg']);
  for (const {id: application} of applicationSceneOptions) {
    assert.deepEqual(selectCameras(cameras, {...original, application}), selectCameras(cameras, original).filter((item) => matchesApplication(item, application)));
    assert.deepEqual(comparisonCandidates(cameras, original.platform, 'depth', '', application),
      comparisonCandidates(cameras, original.platform, 'depth').filter((item) => matchesApplication(item, application)));
  }
  assert.ok(comparisonCandidates(cameras, original.platform, 'depth').some(({id}) => id === 'd405'));
  const empty = changeFilter(original, 'output', 'image');
  assert.equal(empty.distance, null);
  assert.equal(selectCameras(cameras, empty).length, 0);
});

test('compatibility lists use the same series rules as catalogue and comparison', () => {
  for (const item of cameras) {
    const rows = cameraCompatibility(item);
    assert.deepEqual(rows.map(({id}) => id), platformFamilies.filter(({id}) => isCameraAvailable(item, id)).map(({id}) => id));
    for (const family of platformFamilies) {
      assert.equal(rows.some(({id}) => id === family.id), comparisonCandidates(cameras, family.id, item.output).some(({id}) => id === item.id));
    }
  }
  assert.equal(cameraCompatibility(camera('gemini-2')).length, 12);
  assert.equal(cameraCompatibility(camera('imx219-77')).length, 3);
  assert.equal(cameraCompatibility(camera('gemini-335lg')).length, 5);
  for (const id of ['zed-x', 'zed-x-mini', 'zed-x-one-gs']) {
    assert.equal(cameraCompatibility(camera(id)).length, 4);
    assert.ok(!cameraCompatibility(camera(id)).some(({id}) => id === 'industrial-j501'));
  }
});

test('series references do not leak between shared connectors or similarly named boards', () => {
  for (const {url, familyIds} of familyGuideReferences) {
    assert.ok(wikiResources.some((resource) => resource.url === url));
    assert.ok(familyIds.every((id) => platformFamilies.some((family) => family.id === id)));
  }
  const csi = cameraCompatibility(camera('imx219-77'));
  assert.ok(csi.find(({id}) => id === 'industrial').guides.every(({title}) => !title.includes('J20')));
  assert.ok(!cameraCompatibility(camera('gemini-2')).find(({id}) => id === 'industrial').guides.length);
  const zed = cameraCompatibility(camera('zed-x'), 'j50mini');
  assert.equal(zed[0].id, 'j50mini');
  assert.equal(zed[0].selected, true);
  assert.ok(zed.every(({guides}) => guides.every(({note}) => note.includes('full walkthrough uses J50 Mini'))));
  assert.ok(!cameraCompatibility(camera('zed-x'), 'industrial-j501').some(({selected}) => selected));
});
