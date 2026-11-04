import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {platformDevices, platformFamilies, platformProfiles, platformOptions, devicesForFamily} from './platformData.js';
import {cameras} from './cameraData.js';
import {defaultFilters, selectCameras, connectionOptionsFor, changeFilter, isCameraAvailable, comparisonCandidates} from './cameraModel.js';

const require = createRequire(import.meta.url);
const {parseExpression} = require('@babel/parser');
const list = (platform, filters = {}) => selectCameras(cameras, {...defaultFilters, platform, ...filters});

test('34 device IDs, names, images and order match the actual English flash page', () => {
  const source = readFileSync(new URL('../../../sites/en/docs/Edge/NVIDIA_Jetson/Flash_Jetpack.mdx', import.meta.url), 'utf8');
  const match = source.match(/export const productOptions\s*=\s*(\[[\s\S]*?\n\])\s*;?/);
  assert.ok(match, 'Locate the literal productOptions array in Flash_Jetpack.mdx');
  const records = parseExpression(match[1]).elements.map((element) => {
    const fields = Object.fromEntries(element.properties.map(({key, value}) => [key.name || key.value, value]));
    for (const key of ['value', 'label', 'img']) assert.equal(fields[key].type, 'StringLiteral');
    return {id: fields.value.value, label: fields.label.value.trim(), imageUrl: fields.img.value};
  });
  assert.equal(records.length, 34, 'Review the camera catalogue whenever the flash device list changes');
  assert.deepEqual(platformDevices.filter(({familyId}) => !['j601', 'rugged'].includes(familyId)).map(({id, label, imageUrl}) => ({id, label, imageUrl})), records);
});

test('37 devices belong to exactly one of the 12 complete, illustrated families', () => {
  assert.equal(platformDevices.length, 37);
  assert.equal(platformFamilies.length, 12);
  assert.deepEqual(platformOptions.map(({id}) => id), ['all', ...platformFamilies.map(({id}) => id)]);
  assert.equal(new Set(platformDevices.map(({id}) => id)).size, 37);
  assert.equal(new Set(platformFamilies.map(({id}) => id)).size, 12);
  const expectedSizes = [4, 4, 4, 4, 2, 6, 4, 2, 2, 2, 1, 2];
  platformFamilies.forEach((family, index) => {
    const devices = devicesForFamily(family.id);
    assert.equal(devices.length, expectedSizes[index]);
    assert.ok(platformProfiles[family.profile]);
    assert.equal(family.imageUrl, devices[0].imageUrl);
  });
  for (const device of platformDevices) {
    assert.equal(platformFamilies.filter(({id}) => id === device.familyId).length, 1);
    assert.match(device.imageUrl, /^https:\/\//);
    assert.equal(device.label, device.label.trim());
  }
  assert.equal(platformDevices.find(({id}) => id === 'j601').label, 'reComputer Robotics J601');
});

test('series names, picker titles and selected labels use one consistent naming scheme', () => {
  for (const family of platformFamilies) {
    assert.equal(family.label, `${family.name} ${family.series}`);
    assert.ok(!/[\r\n]/.test(family.label));
    assert.ok(!/\b(robotics|industrial)\b/.test(family.name));
    assert.match(family.series, /^(J30\/J40|J501(?: Mini)?|J601)$/);
    assert.equal(platformOptions.find(({id}) => id === family.id).label, family.label);
  }
  for (const id of ['super', 'mini', 'robotics-j40', 'classic', 'industrial', 'reserver', 'rugged']) {
    assert.equal(platformFamilies.find((family) => family.id === id).series, 'J30/J40');
  }
});

test('Rugged models and image match the Wiki; USB candidates do not imply CSI or GMSL support', () => {
  const source = readFileSync(new URL('../../../sites/en/docs/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Rugged_J40/reComputer_Rugged_J40_Getting_Started.md', import.meta.url), 'utf8');
  const family = platformFamilies.find(({id}) => id === 'rugged');
  assert.equal(family.label, 'reComputer Rugged J30/J40');
  assert.equal(family.profile, 'usb');
  assert.equal(family.imageUrl, source.match(/^image:\s*(\S+)/m)[1]);
  for (const device of devicesForFamily('rugged')) assert.ok(source.includes(device.label));
  assert.deepEqual(connectionOptionsFor('rugged').map(({id}) => id), ['all', 'usb']);
  assert.equal(list('rugged').length, 8);
  assert.deepEqual(list('rugged', {connection: 'csi'}), []);
  assert.deepEqual(list('rugged', {connection: 'gmsl'}), []);
  assert.deepEqual(list('rugged', {search: 'ZED'}), []);
});

test('every series has the planned candidate count and only its available connections', () => {
  const counts = {super: 20, mini: 8, 'robotics-j40': 17, classic: 20, 'classic-j501': 8,
    industrial: 20, reserver: 8, 'industrial-j501': 14, j50mini: 17, j50: 17, j601: 17, rugged: 8};
  for (const device of platformFamilies) {
    assert.equal(list(device.id).length, counts[device.id], device.label);
    const family = device;
    const connections = platformProfiles[family.profile].connections;
    assert.deepEqual(connectionOptionsFor(device.id).map(({id}) => id), ['all', ...connections]);
    assert.ok(list(device.id).every(({connection}) => connections.includes(connection)));
    assert.deepEqual(comparisonCandidates(cameras, device.id, 'depth'), list(device.id, {output: 'depth'}));
    assert.deepEqual(comparisonCandidates(cameras, device.id, 'image'), list(device.id, {output: 'image'}));
  }
  assert.equal(list('all').length, 29);
});

test('reServer industrial J501 series excludes ZED through every selection path', () => {
  for (const {id} of platformFamilies.filter(({id}) => id === 'industrial-j501')) {
    assert.equal(list(id, {connection: 'gmsl'}).length, 6);
    assert.deepEqual(list(id, {connection: 'gmsl', output: 'depth'}).map(({id}) => id), ['gemini-335lg']);
    assert.deepEqual(list(id, {search: 'ZED'}), []);
    for (const output of ['image', 'depth']) assert.deepEqual(comparisonCandidates(cameras, id, output, 'ZED'), []);
    const selected = cameras.filter(({id}) => ['zed-x', 'zed-x-mini', 'gemini-335lg'].includes(id));
    assert.deepEqual(selected.filter((camera) => isCameraAvailable(camera, id)).map(({id}) => id), ['gemini-335lg']);
  }
});

test('switching all series combinations keeps general filters and prunes only incompatible comparison items', () => {
  const selected = cameras.filter(({id}) => ['imx219-77', 'x10-usb', 'zed-x-one-gs'].includes(id));
  for (const device of platformFamilies) {
    const options = connectionOptionsFor(device.id).map(({id}) => id);
    for (const connection of ['csi', 'usb', 'gmsl']) {
      const before = {...defaultFilters, connection, link: connection === 'gmsl' ? '6' : 'all',
        resolution: '1080p', coverage: 'wide', search: 'sony', output: 'depth', distance: {minM: 0.3, maxM: 5}};
      const after = changeFilter(before, 'platform', device.id);
      const keepsConnection = options.includes(connection);
      assert.deepEqual(after, {...before, platform: device.id,
        connection: keepsConnection ? connection : 'all', link: keepsConnection ? before.link : 'all'});
    }
    const remaining = selected.filter((camera) => isCameraAvailable(camera, device.id));
    assert.ok(remaining.some(({id}) => id === 'x10-usb'));
    assert.ok(remaining.every((camera) => list(device.id).includes(camera)));
  }
});
