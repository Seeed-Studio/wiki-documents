import test from 'node:test';
import assert from 'node:assert/strict';
import {cameras, platformOptions} from './cameraData.js';
import {applicationSceneOptions, matchesApplication} from './applicationScenes.js';
import {defaultFilters, outputOptionsFor, activeFilterEntries, parseDistanceDraft, distanceMatch, distanceExplanation, formatDistance, selectCameras, changeFilter, depthCameraFilters, filterHints, capabilityOptions, coverageOptions, connectionOptionsFor, isCameraAvailable, facetCount, compareDisabledReason, comparisonCandidates, comparisonInsights, formatImage, formatFov, formatFrameRate, keyFact, outputLabel, outputOptions, COMPARISON_LIMIT} from './cameraModel.js';

const find = (id) => cameras.find((camera) => camera.id === id);
const list = (changes) => selectCameras(cameras, {...defaultFilters, ...changes});

test('hardware transitions preserve independent requirements and series never changes implicitly', () => {
  const initial = {...defaultFilters, platform: 'classic', connection: 'csi', resolution: '1080p', coverage: 'wide', search: 'Gemini'};
  assert.deepEqual(changeFilter(initial, 'search', 'IMX219'), {...initial, search: 'IMX219'});
  assert.deepEqual(outputOptionsFor(), outputOptions);
  assert.deepEqual(connectionOptionsFor('all').map(({id}) => id), ['all', 'csi', 'usb', 'gmsl']);
  assert.deepEqual(connectionOptionsFor('classic').map(({id}) => id), ['all', 'csi', 'usb']);
  const gmsl = {...defaultFilters, platform: 'j50', connection: 'gmsl', link: '6'};
  assert.deepEqual(changeFilter(gmsl, 'search', 'Sensing'), {...gmsl, search: 'Sensing'});
  const impossible = {...gmsl, night: true};
  assert.equal(selectCameras(cameras, impossible).length, 0);
  const ranged = {...initial, output: 'depth', distance: {minM: 0.3, maxM: 5}};
  assert.deepEqual(changeFilter(ranged, 'platform', 'industrial-j501').distance, ranged.distance);
  assert.deepEqual(changeFilter(ranged, 'connection', 'usb').distance, ranged.distance);
  assert.equal(changeFilter(ranged, 'output', 'all').distance, null);
});

test('application is included in filter chips, counts and recovery', () => {
  assert.equal(defaultFilters.application, 'all');
  assert.deepEqual(activeFilterEntries({...defaultFilters, application: 'manipulation'}), [['application', 'manipulation']]);
  assert.deepEqual(activeFilterEntries({...defaultFilters, output: 'depth'}), [['output', 'depth']]);
  const distance = {minM: 0.3, maxM: 5};
  assert.deepEqual(activeFilterEntries({...defaultFilters, application: 'manipulation', output: 'depth', distance}), [['application', 'manipulation'], ['output', 'depth'], ['distance', distance]]);
  const empty = {...defaultFilters, application: 'measurement', output: 'image'};
  assert.equal(selectCameras(cameras, empty).length, 0);
  assert.equal(facetCount(cameras, empty, 'application', 'all'), 22);
  assert.equal(facetCount(cameras, empty, 'output', 'all'), 7);
});

test('ideal range fully covers the request, inclusive, with no maximum-distance or alternate-lens borrowing', () => {
  const ids = (minM, maxM) => list({output: 'depth', distance: {minM, maxM}}).map(({id}) => id);
  assert.deepEqual(ids(0.1, 0.5), ['d405', 'zed-x-mini']);
  assert.deepEqual(ids(0.3, 5), ['gemini-2', 'gemini-335lg', 'zed-x']);
  assert.deepEqual(ids(8, 15), []);
  assert.deepEqual(ids(0.07, 0.5), ['d405']);
  assert.deepEqual(ids(0.26, 3), ['gemini-2', 'gemini-336', 'gemini-335lg', 'zed-x-mini']);
  assert.deepEqual(ids(0.1, null), ['d405', 'zed-x-mini']);
  assert.deepEqual(ids(null, 5), ['gemini-2', 'gemini-335lg', 'zed-x']);
  assert.deepEqual(ids(null, 0.05), []); // A single far bound still must exceed ideal minimum.
  assert.deepEqual(ids(15, null), []); // A single near bound still must be below ideal maximum.
  assert.deepEqual(ids(0.5, 0.5), ids(null, 0.5));
  assert.equal(distanceMatch(find('zed-x-mini'), {minM: 0.3, maxM: 5}), 'outside'); // narrow lens reaches 6 m, displayed wide lens does not
  assert.equal(distanceMatch(find('gemini-336'), {minM: 0.1, maxM: 20}), 'outside');
  assert.equal(distanceMatch(find('gemini-2'), {minM: 0.15, maxM: 2}), 'outside'); // no binned-mode borrowing
  assert.equal(list({output: 'depth', distance: null}).length, 7);
});

test('missing, estimated and open ideal ranges never satisfy a distance requirement', () => {
  const camera = find('gemini-336');
  const requirement = {minM: 0.3, maxM: 2};
  for (const range of [undefined, {}, {workingMinM: 0.1, workingMaxM: 20, openMax: true},
    {...camera.specs.range, idealSource: undefined}, {...camera.specs.range, idealOpenMax: true},
    {...camera.specs.range, estimated: true}, {...camera.specs.range, idealMaxM: null},
    {...camera.specs.range, idealMinM: 4}]) {
    assert.equal(distanceMatch({...camera, specs: {...camera.specs, range}}, requirement), 'unknown');
  }
  for (const item of list({output: 'depth'})) {
    assert.match(item.specs.range.idealSource, /^https:\/\//);
    assert.ok(item.specs.range.idealBasis);
  }
});

test('draft parser accepts positive decimals and optional ends without silently fixing invalid input', () => {
  assert.deepEqual(parseDistanceDraft({minM: '', maxM: ' '}).distance, null);
  assert.deepEqual(parseDistanceDraft({minM: ' .1 ', maxM: '0.50'}).distance, {minM: 0.1, maxM: 0.5});
  assert.deepEqual(parseDistanceDraft({minM: '1.', maxM: '1.0'}).distance, {minM: 1, maxM: 1});
  for (const raw of ['0', '-1', 'NaN', 'Infinity', '1e2', '1,2', 'abc', '.', '9'.repeat(400)]) {
    const result = parseDistanceDraft({minM: raw, maxM: ''});
    assert.ok(result.error);
    assert.equal(result.distance, undefined);
    assert.deepEqual(result.invalidFields, ['minM']);
  }
  const reversed = parseDistanceDraft({minM: '5', maxM: '0.3'});
  assert.match(reversed.error, /Nearest/);
  assert.deepEqual(reversed.invalidFields, ['minM', 'maxM']);
  let applied = null;
  for (const draft of [{minM: '0.1', maxM: '0.5'}, {minM: '0.', maxM: '0.5'}, {minM: '0.3', maxM: '0.5'}, {minM: '0.3', maxM: '5'}]) {
    const result = parseDistanceDraft(draft);
    if (!result.error) applied = result.distance;
    else assert.deepEqual(applied, {minM: 0.1, maxM: 0.5});
  }
  assert.deepEqual(applied, {minM: 0.3, maxM: 5});
});

test('distance explanation, recovery and comparison discovery use the same requirement without pruning selection', () => {
  const distance = {minM: 0.3, maxM: 5};
  assert.equal(formatDistance(distance), '0.3–5 m');
  assert.equal(distanceExplanation(find('gemini-2'), distance), 'Ideal range covers your 0.3–5 m requirement');
  assert.match(distanceExplanation(find('d405'), distance), /^Outside ideal range/);
  const filters = {...defaultFilters, output: 'depth', distance: {minM: 8, maxM: 15}};
  assert.equal(selectCameras(cameras, filters).length, 0);
  assert.equal(facetCount(cameras, filters, 'distance', null), 7);
  const selected = [find('d405'), find('zed-x')];
  assert.deepEqual(selected.map((camera) => distanceMatch(camera, distance)), ['outside', 'match']);
  assert.ok(comparisonCandidates(cameras, 'all', 'depth').includes(selected[0]));
  assert.ok(selected.every((camera) => isCameraAvailable(camera, 'j50')));
});

test('in-dialog comparison discovery spans connections but respects device exclusions and output', () => {
  const depth = comparisonCandidates(cameras, 'j50', 'depth');
  assert.equal(depth.length, 7);
  assert.deepEqual([...new Set(depth.map(({connection}) => connection))].sort(), ['gmsl', 'usb']);
  assert.ok(depth.every(({output}) => output === 'depth'));
  assert.equal(comparisonCandidates(cameras, 'industrial-j501', 'depth').length, 5);
  assert.deepEqual(comparisonCandidates(cameras, 'industrial-j501', 'depth', 'zed'), []);
  assert.deepEqual(comparisonCandidates(cameras, 'j50', 'depth', '335').map(({id}) => id), ['gemini-335lg']);
  assert.ok(comparisonCandidates(cameras, 'classic', 'image').some(({id}) => id === 'imx219-83'));
});

test('GMSL2 includes image and depth cameras; output is an independent filter', () => {
  assert.equal(list({connection: 'gmsl'}).length, 9);
  assert.deepEqual(list({connection: 'gmsl', output: 'depth'}).map(({id}) => id), ['gemini-335lg', 'zed-x', 'zed-x-mini']);
  assert.equal(list({connection: 'gmsl', output: 'image'}).length, 6);
});

test('carrier connection limits apply to both filtering and facet counts', () => {
  for (const platform of ['j50', 'j50mini', 'industrial-j501', 'robotics-j40', 'j601']) {
    assert.equal(list({platform}).length, platform === 'industrial-j501' ? 14 : 17);
    assert.ok(list({platform}).every(({connection}) => connection !== 'csi'));
    assert.equal(list({platform, connection: 'csi'}).length, 0);
  }
  assert.equal(list({platform: 'classic'}).length, 20);
  assert.equal(facetCount(cameras, {...defaultFilters, platform: 'j50', connection: 'csi'}, 'connection', 'usb'), 8);
});

test('four application categories restrict candidates by the requested types without ranking', () => {
  assert.equal(list({}).length, 29);
  assert.equal(list({application: 'manipulation'}).length, 8);
  assert.equal(list({application: 'recognition'}).length, 20);
  assert.equal(list({application: 'measurement'}).length, 7);
  assert.equal(list({application: 'driving'}).length, 15);
  assert.ok(list({application: 'manipulation'}).every(({connection}) => connection === 'usb'));
  assert.ok(list({application: 'recognition'}).every(({connection}) => ['csi', 'usb'].includes(connection)));
  assert.ok(list({application: 'measurement'}).every(({output}) => output === 'depth'));
  assert.deepEqual(list({application: 'driving', connection: 'csi'}).map(({id}) => id), ['imx219-77ir', 'imx219-160ir']);
  assert.ok(!list({application: 'measurement'}).includes(find('imx219-83')));
  assert.ok(list({application: 'manipulation', output: 'depth'}).every(({connection}) => connection === 'usb'));
  const base = {platform: 'j50', connection: 'usb', resolution: '1080p', search: 'Gemini'};
  for (const {id: application} of applicationSceneOptions) {
    assert.deepEqual(list({application}), cameras.filter((camera) => matchesApplication(camera, application)));
    assert.deepEqual(list({...base, application}), list(base).filter((camera) => matchesApplication(camera, application)));
  }
  assert.ok(cameras.every((camera) => !('scenarios' in camera)));
});

test('application and series jointly constrain interfaces, preserving other valid requirements', () => {
  assert.deepEqual(connectionOptionsFor('all', 'manipulation').map(({id}) => id), ['all', 'usb']);
  assert.deepEqual(connectionOptionsFor('all', 'recognition').map(({id}) => id), ['all', 'csi', 'usb']);
  assert.deepEqual(connectionOptionsFor('all', 'measurement').map(({id}) => id), ['all', 'usb', 'gmsl']);
  assert.deepEqual(connectionOptionsFor('classic', 'driving').map(({id}) => id), ['all', 'csi', 'usb']);
  assert.deepEqual(connectionOptionsFor('j50', 'recognition').map(({id}) => id), ['all', 'usb']);
  const initial = {...defaultFilters, connection: 'gmsl', link: '6', output: 'depth', distance: {minM: .3, maxM: 5}, search: 'Gemini', resolution: '1080p'};
  assert.deepEqual(changeFilter(initial, 'application', 'manipulation'), {...initial, application: 'manipulation', connection: 'all', link: 'all'});
  assert.equal(list({application: 'driving', platform: 'industrial-j501'}).length, 10);
  assert.deepEqual(list({application: 'measurement', platform: 'industrial-j501', connection: 'gmsl'}).map(({id}) => id), ['gemini-335lg']);
  assert.deepEqual(list({application: 'measurement', distance: {minM: .3, maxM: 5}}).map(({id}) => id), ['gemini-2', 'gemini-335lg', 'zed-x']);
  const measured = {...defaultFilters, application: 'measurement', distance: {minM: .3, maxM: 5}};
  assert.deepEqual(changeFilter(measured, 'platform', 'j50').distance, measured.distance);
  assert.equal(changeFilter(measured, 'application', 'all').distance, null);
});

test('platform choices hide unavailable connections and clear only a conflicting connection', () => {
  for (const platform of ['j50', 'j50mini', 'industrial-j501', 'robotics-j40', 'j601']) {
    assert.deepEqual(connectionOptionsFor(platform).map(({id}) => id), ['all', 'usb', 'gmsl']);
    const initial = {...defaultFilters, connection: 'csi', resolution: '1080p', coverage: 'wide'};
    assert.deepEqual(changeFilter(initial, 'platform', platform), {...initial, platform, connection: 'all'});
    assert.equal(facetCount(cameras, {...defaultFilters, connection: 'csi'}, 'platform', platform), platform === 'industrial-j501' ? 14 : 17);
  }
  assert.deepEqual(connectionOptionsFor('classic').map(({id}) => id), ['all', 'csi', 'usb']);
  assert.deepEqual(connectionOptionsFor('all').map(({id}) => id), ['all', 'csi', 'usb', 'gmsl']);
  const gmsl = {...defaultFilters, connection: 'gmsl', link: '6', output: 'depth'};
  assert.deepEqual(changeFilter(gmsl, 'platform', 'classic'), {...gmsl, platform: 'classic', connection: 'all', link: 'all'});
  assert.equal(changeFilter({...defaultFilters, connection: 'usb'}, 'platform', 'j50').connection, 'usb');
});

test('Industrial J501 model exclusions apply to results, counts, search and comparison pruning', () => {
  const filters = {...defaultFilters, platform: 'industrial-j501'};
  assert.equal(selectCameras(cameras, filters).length, 14);
  assert.equal(facetCount(cameras, filters, 'connection', 'gmsl'), 6);
  assert.deepEqual(list({platform: 'industrial-j501', connection: 'gmsl', output: 'depth'}).map(({id}) => id), ['gemini-335lg']);
  assert.equal(list({platform: 'industrial-j501', search: 'ZED'}).length, 0);
  const selected = ['zed-x', 'zed-x-mini', 'gemini-335lg'].map(find);
  assert.deepEqual(selected.filter((camera) => isCameraAvailable(camera, 'industrial-j501')).map(({id}) => id), ['gemini-335lg']);
  for (const id of ['zed-x', 'zed-x-mini', 'zed-x-one-gs']) {
    assert.equal(isCameraAvailable(find(id), 'industrial-j501'), false);
    for (const platform of ['all', 'j50', 'j50mini', 'robotics-j40', 'j601']) assert.equal(isCameraAvailable(find(id), platform), true);
  }
  assert.equal(list({}).length, 29);
});

test('the image picker covers all 12 series and every camera has a product image', () => {
  assert.equal(platformOptions.filter(({imageUrl}) => imageUrl).length, 12);
  assert.equal(platformOptions.find(({id}) => id === 'all').imageUrl, undefined);
  for (const camera of cameras) {
    assert.match(camera.imageUrl, /^https:\/\//);
    assert.ok(['contain', 'cover'].includes(camera.cardImageFit));
  }
  for (const id of ['sg2-ar0233', 'sg2-imx390', 'sg8s-ar0820', 'd435i', 'zed-x']) assert.equal(find(id).cardImageFit, 'contain');
});

test('RGB/per-eye resolution is used for both filtering and display', () => {
  assert.equal(formatImage(find('gemini-336').specs.image), '1920 × 1080');
  assert.ok(list({connection: 'usb', resolution: '1080p'}).some(({id}) => id === 'gemini-336'));
  assert.ok(!list({resolution: '1080p'}).some(({id}) => id === 'gemini-335lg'));
  assert.ok(!list({resolution: '8mp'}).some(({id}) => id === 'zed-x'));
  assert.ok(!list({resolution: '12mp'}).some(({id}) => id === 'imx219-83'));
});

test('IR lighting, stereo images and ready depth output have distinct semantics', () => {
  assert.deepEqual(list({night: true}).map(({id}) => id), ['imx219-77ir', 'imx219-160ir']);
  assert.equal(find('gemini-2').irNightVision, undefined);
  assert.ok(find('gemini-2').features.includes('ir'));
  // Night-vision capability is explicit, not inferred from CSI vs USB.
  const nightVisionOnUsb = {...find('imx219-77ir'), connection: 'usb'};
  assert.equal(selectCameras([nightVisionOnUsb], {...defaultFilters, night: true}).length, 1);
  assert.equal(selectCameras([{...nightVisionOnUsb, irNightVision: false}], {...defaultFilters, night: true}).length, 0);
  assert.ok(list({stereo: true, output: 'image'}).some(({id}) => id === 'imx219-83'));
  assert.equal(list({output: 'depth'}).length, 7);
  assert.ok(!list({output: 'depth'}).some(({id}) => id === 'zed-x-one-gs'));
});

test('only documented GMSL link rates match', () => {
  assert.equal(list({connection: 'gmsl', link: '3'}).length, 1);
  assert.equal(list({connection: 'gmsl', link: '6'}).length, 4);
});

test('only irrelevant contextual filters are cleared', () => {
  const filters = {...defaultFilters, connection: 'gmsl', link: '6', resolution: '1080p', distance: {minM: 0.3, maxM: 5}, output: 'depth'};
  assert.deepEqual(changeFilter(filters, 'connection', 'usb'), {...filters, connection: 'usb', link: 'all'});
  assert.deepEqual(changeFilter(filters, 'output', 'image'), {...filters, output: 'image', distance: null});
});

test('model, sensor and SKU search combine with existing requirements', () => {
  assert.deepEqual(list({search: '100000774'}).map(({id}) => id), ['gemini-336']);
  assert.equal(list({search: 'imx219', output: 'depth'}).length, 0);
  assert.deepEqual(list({search: 'ZED mini'}).map(({id}) => id), ['zed-x-mini']);
});

test('comparison admits same-output cameras across interfaces and enforces two slots', () => {
  assert.equal(COMPARISON_LIMIT, 2);
  const selected = [find('gemini-336')];
  assert.equal(compareDisabledReason(find('gemini-335lg'), selected), '');
  assert.ok(compareDisabledReason(find('imx219-77'), selected));
  const pair = [...selected, find('gemini-335lg')];
  assert.match(compareDisabledReason(find('zed-x'), pair), /maximum 2/);
  assert.equal(compareDisabledReason(pair[0], pair), '');
  assert.equal(compareDisabledReason(find('d405'), pair.slice(1)), '');
});

test('comparison preserves crossed advantages without ranking different axes or missing modes', () => {
  const {badges, notes} = comparisonInsights([find('gemini-335lg'), find('zed-x')]);
  assert.deepEqual(badges['gemini-335lg'].workingRange, ['Closer minimum']);
  assert.deepEqual(badges['zed-x'].depthFov, ['Wider view']);
  assert.deepEqual(badges['zed-x'].idealRange, ['Longer ideal range']);
  assert.ok(notes.imageFps);
  assert.equal(formatFov(find('camera-v2').specs.imageFov), '62.2° H × 48.8° V');
  const mixed = comparisonInsights([find('camera-v2'), find('imx219-77')]);
  assert.equal(mixed.notes.imageFov, 'Different FOV axes or image streams');
  assert.equal(mixed.badges['imx219-77'].imageFov, undefined);
  const ties = comparisonInsights([find('zed-x'), find('zed-x-mini')]);
  assert.equal(ties.badges['zed-x'].image, undefined);
  const unknown = comparisonInsights([find('d435i'), find('gemini-335lg'), find('zed-x')]);
  assert.equal(unknown.badges['gemini-335lg'].workingRange, undefined);
});

test('output labels consistently distinguish RGB from RGB plus depth', () => {
  assert.deepEqual(outputLabel, {image: 'RGB image', depth: 'RGB + Depth image'});
  assert.deepEqual(outputOptions.slice(1).map(({id, label}) => [id, label]), Object.entries(outputLabel));
  assert.equal(list({output: 'image'}).length, 22);
  assert.equal(list({output: 'depth'}).length, 7);
});

test('night vision remains a hardware filter, separate from task categories', () => {
  assert.deepEqual(capabilityOptions.map(({id}) => id), ['stereo', 'lens', 'night']);
  assert.equal(keyFact(find('imx219-77ir')), 'IR night-vision lighting');
  assert.equal(coverageOptions.find(({id}) => id === 'lens').label, formatFov({axis: 'lens'}));
  assert.equal(coverageOptions.find(({id}) => id === 'unlisted').label, 'FOV not fully specified');
  assert.match(filterHints.resolution, /not depth-map resolution/);
  assert.equal(formatFrameRate(undefined), 'Not specified for this mode');
  assert.equal(formatFrameRate({width: 1920, height: 1080, fps: 30}), '30 fps at 1920 × 1080');
});

test('depth shortcut clears night lighting, preserving independent requirements', () => {
  const initial = {...defaultFilters, night: true, output: 'image', search: 'Gemini 2', platform: 'mini', resolution: '1080p'};
  assert.equal(selectCameras(cameras, initial).length, 0);
  const next = depthCameraFilters(initial);
  assert.deepEqual(next, {...initial, night: false, output: 'depth'});
  assert.deepEqual(selectCameras(cameras, next).map(({id}) => id), ['gemini-2']);
  assert.equal(initial.night, true);
  assert.deepEqual(depthCameraFilters(next), next);
  assert.equal(changeFilter(initial, 'output', 'depth').output, 'depth');
});

test('highlights follow values, never column position; ties and open limits are explained', () => {
  const first = find('gemini-2');
  const second = find('gemini-336');
  const forward = comparisonInsights([first, second]);
  const reverse = comparisonInsights([second, first]);
  assert.deepEqual(forward.badges, reverse.badges);
  assert.deepEqual(forward.badges['gemini-336'].workingRange, ['Closer minimum']);
  assert.deepEqual(forward.badges['gemini-2'].idealRange, ['Longer ideal range']);
  assert.match(forward.notes.workingRange, /open-ended/);
  const tied = comparisonInsights([find('zed-x-mini'), second]);
  assert.equal(tied.badges['gemini-336'].workingRange, undefined);
  assert.equal(tied.badges['zed-x-mini'].workingRange, undefined);
  assert.match(tied.notes.workingRange, /Tied closest minimum: 0.1 m/);
  // Regression for the former three-column view: the third item was evaluated,
  // but its minimum tied with ZED X Mini and its 20 m+ maximum is not ranked.
  const previous = comparisonInsights([first, find('zed-x-mini'), second]);
  assert.deepEqual(previous.badges['gemini-336'], {});
  assert.match(previous.notes.workingRange, /Tied closest minimum/);
});

test('all catalogue records have distinct ids and structured specs', () => {
  assert.equal(cameras.length, 29);
  assert.equal(new Set(cameras.map(({id}) => id)).size, 29);
  for (const camera of cameras) {
    assert.ok(camera.specs.image.width > 0 && camera.specs.image.height > 0);
    assert.ok(camera.coverage && camera.specs.lens && camera.imageUrl && camera.specUrl);
    assert.equal(camera.resolution, undefined);
  }
  assert.equal(list({coverage: 'unlisted'}).length, 2);
  assert.equal(list({coverage: 'lens'}).length, 8);
});
