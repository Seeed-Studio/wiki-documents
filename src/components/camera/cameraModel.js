import {cameras, interfaceOptions, platformExcludedCameras, platformInterfaces} from './cameraData.js';
import {matchesApplication} from './applicationScenes.js';

export const defaultFilters = {
  platform: 'all', application: 'all', connection: 'all', output: 'all', resolution: 'all', coverage: 'all',
  search: '', stereo: false, lens: false, night: false, distance: null, link: 'all',
};
export const effectiveOutput = (filters) => filters.output === 'all' && filters.application === 'measurement' ? 'depth' : filters.output;
export const outputOptionsFor = () => outputOptions;
export const resolutionOptions = [
  {id: 'all', label: 'Any resolution'}, {id: '720p', label: '720p+'},
  {id: '1080p', label: '1080p+'}, {id: '8mp', label: '8MP+'}, {id: '12mp', label: '12MP+'},
];
export const outputLabel = {image: 'RGB image', depth: 'RGB + Depth image'};
export const outputOptions = [
  {id: 'all', label: 'Any output'}, ...Object.entries(outputLabel).map(([id, label]) => ({id, label})),
];
export const COMPARISON_LIMIT = 2;
export const filterHints = {
  application: 'Filter by the camera types shown below. Your series and other filters still apply; categories are not a guarantee of task performance.',
  connection: 'Camera connections available for the selected series and application in this guide. Check the cable and expansion board in Details.',
  output: 'RGB image has no ready-made depth stream. RGB + Depth image includes depth with the required driver or SDK. RGB images can also be used by depth-estimation software. Those estimates are not included in this guide’s depth-range filter.',
  resolution: 'RGB resolution, per camera eye—not depth-map resolution. More pixels do not necessarily mean better image quality.',
  coverage: 'Broad viewing categories, not shared angle thresholds. Exact angles and H/V/diagonal axes are shown on the cards.',
};
export const coverageOptions = [
  {id: 'all', label: 'Any view'}, {id: 'standard', label: 'Standard view'},
  {id: 'wide', label: 'Wide view'}, {id: 'ultra', label: 'Ultra-wide / fisheye'},
  {id: 'lens', label: 'Depends on lens'}, {id: 'unlisted', label: 'FOV not fully specified'},
];
export const capabilityOptions = [
  {id: 'stereo', label: 'Stereo cameras', description: 'Two views (RGB or IR). Select RGB + Depth image if you need depth output.'},
  {id: 'lens', label: 'Interchangeable lens', description: 'A replaceable lens mount. Field of view depends on the fitted lens.'},
  {id: 'night', label: 'IR night-vision lighting', description: 'Built-in illumination for night-vision images, not an IR depth projector.'},
];
export const linkOptions = [
  {id: 'all', label: 'Any link rate'}, {id: '3', label: '3 Gbps'}, {id: '6', label: '6 Gbps'},
];
export const connectionLabel = {csi: 'CSI', usb: 'USB', gmsl: 'GMSL2'};

export function changeFilter(filters, key, value) {
  const next = {...filters, [key]: value};
  if (!connectionOptionsFor(next.platform, next.application).some(({id}) => id === next.connection)) next.connection = 'all';
  if (next.connection !== 'gmsl') next.link = 'all';
  if (effectiveOutput(next) !== 'depth') next.distance = null;
  return next;
}

export function connectionOptionsFor(platform, application = 'all') {
  const available = platformInterfaces[platform];
  return interfaceOptions.filter(({id}) => id === 'all' || ((!available || available.includes(id))
    && (application === 'all' || cameras.some((camera) => camera.connection === id && isCameraAvailable(camera, platform) && matchesApplication(camera, application)))));
}

export function supportsConnection(camera, platform) {
  return !platformInterfaces[platform] || platformInterfaces[platform].includes(camera.connection);
}

export function isCameraAvailable(camera, platform) {
  return supportsConnection(camera, platform) && !platformExcludedCameras[platform]?.includes(camera.id);
}

function matchesResolution(image, value) {
  if (value === 'all') return true;
  if (!image) return false;
  if (value === '720p') return image.width >= 1280 && image.height >= 720;
  if (value === '1080p') return image.width >= 1920 && image.height >= 1080;
  return image.width * image.height >= (value === '8mp' ? 8_000_000 : 12_000_000);
}

export function matchesCamera(camera, filters) {
  const {specs, features} = camera;
  if (!isCameraAvailable(camera, filters.platform)) return false;
  if (!matchesApplication(camera, filters.application)) return false;
  if (filters.connection !== 'all' && camera.connection !== filters.connection) return false;
  if (effectiveOutput(filters) !== 'all' && camera.output !== effectiveOutput(filters)) return false;
  if (!matchesResolution(specs.image, filters.resolution)) return false;
  if (filters.coverage !== 'all' && filters.coverage !== camera.coverage) return false;
  const terms = filters.search.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const searchable = `${camera.name} ${camera.sensor} ${camera.sku}`.toLowerCase();
  if (terms.some((term) => !searchable.includes(term))) return false;
  if (filters.stereo && !features.includes('stereo')) return false;
  if (filters.lens && !features.includes('lens')) return false;
  if (filters.night && !camera.irNightVision) return false;
  if (filters.distance && distanceMatch(camera, filters.distance) !== 'match') return false;
  if (filters.link !== 'all' && specs.linkGbps !== Number(filters.link)) return false;
  return true;
}

export function selectCameras(cameras, filters) {
  return cameras.filter((camera) => matchesCamera(camera, filters));
}

// This explicit shortcut changes purpose from night-vision images to depth.
// Normal output-filter changes still preserve the user's other requirements.
export const depthCameraFilters = (filters) => changeFilter({...filters, night: false}, 'output', 'depth');

// Keep editable strings separate from the last valid, applied requirement.
export function parseDistanceDraft(draft) {
  const distance = {minM: null, maxM: null};
  for (const key of ['minM', 'maxM']) {
    const raw = draft[key].trim();
    if (!raw) continue;
    if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(raw) || !Number.isFinite(Number(raw)) || Number(raw) <= 0) {
      return {error: 'Enter a positive distance in metres, for example 0.3.', invalidFields: [key]};
    }
    distance[key] = Number(raw);
  }
  if (distance.minM !== null && distance.maxM !== null && distance.minM > distance.maxM) {
    return {error: 'Nearest target must not be farther than farthest target.', invalidFields: ['minM', 'maxM']};
  }
  return {distance: distance.minM === null && distance.maxM === null ? null : distance, error: '', invalidFields: []};
}

export function distanceMatch(camera, distance) {
  if (!distance) return 'inactive';
  const range = camera.specs.range;
  if (camera.output !== 'depth' || !range?.idealSource || range.idealOpenMax || range.estimated
    || !Number.isFinite(range.idealMinM) || !Number.isFinite(range.idealMaxM)
    || range.idealMinM <= 0 || range.idealMinM > range.idealMaxM) return 'unknown';
  const points = [distance.minM, distance.maxM].filter((value) => value !== null);
  return points.length && points.every((value) => Number.isFinite(value) && value >= range.idealMinM && value <= range.idealMaxM)
    && (distance.minM === null || distance.maxM === null || distance.minM <= distance.maxM) ? 'match' : 'outside';
}

export function formatDistance(distance) {
  if (!distance) return '';
  if (distance.minM === null) return `${distance.maxM} m target (farthest)`;
  if (distance.maxM === null) return `${distance.minM} m target (nearest)`;
  return `${distance.minM === distance.maxM ? distance.minM : `${distance.minM}–${distance.maxM}`} m`;
}

export function distanceExplanation(camera, distance, compact = false) {
  const status = distanceMatch(camera, distance);
  if (status === 'inactive') return '';
  if (status === 'unknown') return 'Ideal range not documented for this configuration.';
  if (compact && status === 'match') {
    const target = distance.minM === null || distance.maxM === null || distance.minM === distance.maxM
      ? `${distance.minM ?? distance.maxM} m` : `${distance.minM}–${distance.maxM} m`;
    return `Ideal range covers ${target}`;
  }
  return status === 'match' ? `Ideal range covers your ${formatDistance(distance)} requirement`
    : `Outside ideal range for your ${formatDistance(distance)} requirement`;
}

export const activeFilterEntries = (filters) => Object.entries(defaultFilters).filter(([key, value]) => filters[key] !== value).map(([key]) => [key, filters[key]]);

export function facetCount(cameras, filters, key, value) {
  return selectCameras(cameras, changeFilter(filters, key, value)).length;
}

export function compareDisabledReason(camera, selected) {
  if (selected.some(({id}) => id === camera.id)) return '';
  if (selected.length && selected[0].output !== camera.output) {
    return `Clear the selection to compare ${outputLabel[camera.output]} cameras.`;
  }
  return selected.length >= COMPARISON_LIMIT ? 'Remove one camera to compare a different pair (maximum 2).' : '';
}

// In-dialog discovery keeps the device, application and output group, not filters
// such as connection or resolution that would hide useful comparisons.
export function comparisonCandidates(cameras, platform, output, search = '', application = 'all') {
  return selectCameras(cameras, {...defaultFilters, platform, application, output, search});
}

export function formatImage(stream) {
  return stream ? `${stream.width} × ${stream.height}${stream.perEye ? ' / eye' : ''}` : 'Not specified';
}

export function formatFov(view) {
  if (!view) return 'Not specified';
  if (view.axis === 'lens') return 'Depends on lens';
  if (view.axis === 'diagonal') return `${view.degrees}° diagonal`;
  if (view.axis === 'hv') return `${view.horizontal}° H × ${view.vertical}° V${view.uncertainty ? ` ±${view.uncertainty}°` : ''}`;
  return view.degrees ? `${view.degrees}° · axis unspecified` : 'Not specified';
}

export function formatIdealRange(range) {
  return Number.isFinite(range?.idealMinM) && Number.isFinite(range?.idealMaxM)
    ? `${range.idealMinM}–${range.idealMaxM} m` : 'Not specified';
}

export function formatWorkingRange(range) {
  if (!Number.isFinite(range?.workingMinM)) return 'Not specified';
  if (Number.isFinite(range.workingMaxM)) return `${range.workingMinM}–${range.workingMaxM} m${range.openMax ? '+' : ''}`;
  return `Minimum ${range.workingMinM} m${range.minimumNote ? ` (${range.minimumNote})` : ''}`;
}

export function formatFrameRate(stream) {
  return Number.isFinite(stream?.fps) ? `${stream.fps} fps at ${formatImage(stream)}` : 'Not specified for this mode';
}

export function keyFact(camera) {
  if (camera.output === 'depth') return `Ideal range ${formatIdealRange(camera.specs.range)}`;
  if (camera.irNightVision) return 'IR night-vision lighting';
  if (camera.features.includes('stereo')) return 'Stereo pair · depth processing required';
  if (camera.features.includes('lens')) return `${camera.specs.lens} lens mount`;
  if (camera.id === 'zed-x-one-gs') return 'Monocular · global shutter';
  if (camera.specs.linkGbps) return `${camera.specs.linkGbps} Gbps GMSL2 link`;
  return camera.coverage === 'ultra' ? 'Fisheye coverage' : 'Fixed-lens imaging';
}

// A leader is highlighted only if every selected camera has comparable data.
// FPS additionally requires an explicitly documented shared capture mode.
export function comparisonInsights(selected) {
  const badges = Object.fromEntries(selected.map(({id}) => [id, {}]));
  const notes = {};
  const award = (key, read, direction, label, threshold = () => true) => {
    const rows = selected.map((camera) => ({id: camera.id, value: read(camera.specs)}));
    if (rows.length < 2 || rows.some(({value}) => !Number.isFinite(value))) return;
    rows.sort((a, b) => direction * (b.value - a.value));
    if (rows[0].value === rows[1].value || !threshold(rows[0].value, rows[1].value)) return;
    badges[rows[0].id][key] = [label];
  };
  for (const stream of ['image', 'depth']) {
    award(stream, (specs) => specs[stream] && specs[stream].width * specs[stream].height, 1,
      stream === 'image' ? 'More image pixels' : 'Denser depth map');
    const modes = selected.map(({specs}) => specs[stream]);
    const modeKey = (mode) => `${mode.width}:${mode.height}:${mode.captureMode}`;
    if (modes.some((mode) => !mode?.captureMode || !Number.isFinite(mode.fps))) {
      notes[`${stream}Fps`] = 'Capture mode not fully specified';
    } else if (new Set(modes.map(modeKey)).size !== 1) {
      notes[`${stream}Fps`] = 'Different capture modes';
    } else {
      award(`${stream}Fps`, (specs) => specs[stream]?.fps, 1, 'Higher frame rate');
    }
  }
  for (const key of ['imageFov', 'depthFov']) {
    const views = selected.map(({id, specs}) => ({id, view: specs[key]}));
    if (views.some(({view}) => !view || !['hv', 'diagonal'].includes(view.axis))) {
      notes[key] = 'Angle or axis not specified for every camera';
      continue;
    }
    if (new Set(views.map(({view}) => `${view.axis}:${view.stream}`)).size !== 1) {
      notes[key] = 'Different FOV axes or image streams';
      continue;
    }
    const dominates = (a, b) => {
      const uncertainty = (a.uncertainty || 0) + (b.uncertainty || 0);
      if (a.axis === 'diagonal') return a.degrees - b.degrees > uncertainty;
      const h = a.horizontal - b.horizontal;
      const v = a.vertical - b.vertical;
      return h >= uncertainty && v >= uncertainty && (h > uncertainty || v > uncertainty);
    };
    const winner = views.find(({id, view}) => views.every((other) => id === other.id || dominates(view, other.view)));
    if (winner && views.length >= 2) badges[winner.id][key] = ['Wider view'];
  }
  award('workingRange', (specs) => specs.range?.workingMinM, -1, 'Closer minimum');
  award('idealRange', (specs) => specs.range?.idealMaxM, 1, 'Longer ideal range');
  if (selected.some(({specs}) => specs.range?.openMax)) {
    notes.workingRange = 'Only minimum distance is ranked; open-ended (+) maxima are not compared.';
  }
  const minima = selected.map(({specs}) => specs.range?.workingMinM);
  if (minima.length >= 2 && minima.every(Number.isFinite)) {
    const closest = Math.min(...minima);
    if (minima.filter((value) => value === closest).length > 1) {
      notes.workingRange = [notes.workingRange, `Tied closest minimum: ${closest} m.`].filter(Boolean).join(' ');
    }
  }
  return {badges, notes};
}
