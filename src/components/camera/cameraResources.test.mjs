import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {cameras} from './cameraData.js';
import {gmslGuideLinks} from './cameraGuideLinks.js';
import {wikiResources, wikiResourceGroups, specificationResources} from './cameraResources.js';

const camera = (id) => cameras.find((item) => item.id === id);
const linksFor = (id) => wikiResourceGroups(camera(id)).flatMap(({links}) => links);
const has = (id, slug) => linksFor(id).some(({url}) => url.split('#')[0] === `${slug}/`);
const key = (url) => new URL(url, 'https://wiki.seeedstudio.com').pathname.replace(/\/$/, '');

test('all GMSL setup links share verified section destinations, including legacy evidence', () => {
  const sections = {
    sensing: ['getting-started', 'Getting Started'],
    gemini335lg: ['gmsl2-connection', 'GMSL2 Connection'],
    roboticsJ401: ['extension-port', 'Extension Port'],
    roboticsJ501: ['extension-port', 'Extension Port'],
    roboticsJ601: ['gmsl', 'GMSL'],
    roboticsJ501Mini: ['extension-port---gmsl', 'Extension Port - GMSL'],
    industrialJ501: ['gmsl-camera', 'GMSL Camera'],
    zed: ['device-specific-setup', 'Device-Specific Setup'],
  };
  assert.deepEqual(Object.keys(gmslGuideLinks).sort(), Object.keys(sections).sort());
  const destinations = new Map();
  for (const [id, [anchor, heading]] of Object.entries(sections)) {
    const url = gmslGuideLinks[id];
    assert.equal(url.split('#')[1], anchor, id);
    const resources = wikiResources.filter((resource) => key(resource.url) === key(url));
    assert.equal(resources.length, 1, `Missing/duplicate GMSL guide: ${id}`);
    assert.equal(resources[0].url, url, id);
    assert.equal(resources[0].group, 'setup');
    const source = readFileSync(new URL(`../../../sites/en/docs/${resources[0].source}`, import.meta.url), 'utf8');
    assert.ok(source.split(/\r?\n/).some((line) => line.replace(/^#{2,3} /, '').trim() === heading), `Missing heading for ${url}`);
    destinations.set(key(url), url);
  }
  // Catch stale bare URLs and old numbered anchors anywhere in camera records,
  // not only in the currently rendered resources. Leave external specs alone.
  const check = (value) => {
    if (typeof value === 'string' && value.startsWith('/')) {
      const destination = destinations.get(key(value));
      if (destination) assert.equal(value, destination);
    } else if (value && typeof value === 'object') {
      Object.values(value).forEach(check);
    }
  };
  check(cameras);
  check(wikiResources);
  for (const item of cameras.filter(({connection}) => connection === 'gmsl')) {
    assert.equal(item.guideUrl, destinations.get(key(item.guideUrl)), item.id);
    assert.ok(linksFor(item.id).some(({url}) => url === item.guideUrl), item.id);
  }
});

test('Wiki entries resolve to real English articles and use their exact public slugs', () => {
  const sources = new Set();
  const ids = new Set(cameras.map(({id}) => id));
  for (const resource of wikiResources) {
    assert.ok(['setup', 'applications'].includes(resource.group));
    assert.ok(resource.title.trim() && resource.note.trim());
    assert.ok(!sources.has(resource.source), `Duplicate article: ${resource.source}`);
    sources.add(resource.source);
    const text = readFileSync(new URL(`../../../sites/en/docs/${resource.source}`, import.meta.url), 'utf8');
    const slug = text.match(/^slug:\s*([^\r\n]+)/m)?.[1].replace(/^['"]|['"]$/g, '');
    assert.ok(slug, `Missing slug: ${resource.source}`);
    assert.equal(key(resource.url), key(slug), resource.source);
    assert.ok(resource.cameraIds.length);
    assert.equal(new Set(resource.cameraIds).size, resource.cameraIds.length);
    for (const id of resource.cameraIds) assert.ok(ids.has(id), `Unknown camera: ${id}`);
  }
});

test('each camera retains all existing guide/spec links without duplicate resources', () => {
  for (const item of cameras) {
    const groups = wikiResourceGroups(item);
    assert.ok(groups.every(({links}) => links.length));
    const urls = [...groups.flatMap(({links}) => links.map(({url}) => url)), ...specificationResources(item).map(({url}) => url)];
    const unique = new Set(urls.map(key));
    assert.equal(urls.length, unique.size, `Duplicate links for ${item.id}`);
    for (const url of [item.guideUrl, item.specUrl, item.specs.range?.idealSource].filter(Boolean)) {
      assert.ok(unique.has(key(url)), `Lost resource for ${item.id}: ${url}`);
    }
  }
});

test('Gemini 2 has setup, ROS, SLAM, distance measurement and robot-arm examples', () => {
  for (const slug of ['/orbbec_gemini2', '/orbbec_depth_camera_on_ros', '/orb_slam3_orbbec_gemini2', '/pycuvslam_recomputer_robotics', '/yolov11_with_depth_camera', '/rebot_arm_b601_dm_graspnet_visual_grasping', '/object_tracking_with_reComputer_jetson_and_pX4']) {
    assert.ok(has('gemini-2', slug), slug);
  }
  assert.ok(wikiResourceGroups(camera('gemini-2')).find(({id}) => id === 'applications').links.some(({url}) => url === '/yolov11_with_depth_camera/'));
  assert.ok(has('gemini-336', '/lerobot_so100m_new'));
  assert.ok(!has('gemini-336', '/orb_slam3_orbbec_gemini2'));
  assert.ok(!has('gemini-335lg', '/orbbec_gemini2'));
});

test('RealSense examples are associated with both documented models, not every depth camera', () => {
  for (const id of ['d405', 'd435i']) {
    for (const slug of ['/realsense_3d_seg', '/rebot_arm_b601_rs_grasping_demo', '/rebot_arm_b601_dm_lerobot', '/lerobot_so100m_new']) assert.ok(has(id, slug));
    assert.equal(specificationResources(camera(id)).length, 1, 'Same specification / ideal-range source is listed once');
    assert.ok(!has(id, '/orb_slam3_orbbec_gemini2'), 'A sample build target is not a D435i tutorial');
  }
});

test('camera-specific and commented-out variant boundaries are preserved', () => {
  assert.ok(has('sg3s-f', '/ai_roboticsyolov26_dual_camera_system'));
  assert.ok(has('sg3s-f', '/multiple_cameras_with_jetson'));
  assert.ok(!has('sg3s-h', '/ai_roboticsyolov26_dual_camera_system'));
  assert.ok(!has('sg2-imx390', '/jetson_fisheye_surround_view_demo'));
  assert.ok(has('imx219-130', '/csi_camera_on_ros'));
  assert.ok(!has('imx219-130', '/J401_carrierboard_Hardware_Interfaces_Usage'));
  assert.ok(!has('imx219-160ir', '/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage'));
  assert.ok(has('pi-hq', '/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board'));
  assert.ok(!has('imx219-77', '/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board'));
  assert.match(linksFor('zed-x-one-gs')[0].note, /single One GS does not produce stereo depth/);
});

test('no Wiki means no placeholder section; application-only cameras have no empty setup group', () => {
  for (const id of ['et-s231-120', 'ov9732-usb']) assert.deepEqual(wikiResourceGroups(camera(id)), []);
  assert.deepEqual(wikiResourceGroups(camera('x10-usb')).map(({id}) => id), ['applications']);
  assert.equal(linksFor('x10-usb').length, 3);
  assert.equal(linksFor('et-s231-90').length, 1);
  assert.equal(cameras.length, 29);
});

test('built Wiki routes and section anchors exist', {skip: !process.env.CAMERA_DOCS_BUILD_DIR}, () => {
  for (const {url} of wikiResources) {
    const [path, anchor] = url.split('#');
    const html = readFileSync(join(process.env.CAMERA_DOCS_BUILD_DIR, path, 'index.html'), 'utf8');
    if (!anchor) continue;
    // Production HTML may omit attribute quotes after minification.
    const ids = [...html.matchAll(/\bid=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map((match) => match[1] || match[2] || match[3]);
    assert.ok(ids.includes(anchor), `Missing section: ${url}`);
  }
});
