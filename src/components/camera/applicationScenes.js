// Catalogue categories requested for this page, not a claim of tested task performance.
export const applicationSceneOptions = [
  {id: 'all', label: 'All applications', illustration: 'all'},
  {id: 'manipulation', label: 'Robot-arm control', illustration: 'manipulation', description: 'USB RGB cameras and USB depth cameras'},
  {id: 'recognition', label: 'Visual detection & recognition', illustration: 'recognition', description: 'CSI and USB cameras, including depth models'},
  {id: 'measurement', label: 'Visual measurement', illustration: 'measurement', description: 'Cameras with a driver or SDK depth stream'},
  {id: 'driving', label: 'Intelligent driving', illustration: 'driving', description: 'GMSL, depth or built-in IR night-vision cameras'},
];

// Multiple categories can match one camera; Wiki example availability is irrelevant.
export function matchesApplication(camera, application = 'all') {
  switch (application) {
    case 'all': return true;
    case 'manipulation': return camera.connection === 'usb';
    case 'recognition': return ['csi', 'usb'].includes(camera.connection);
    case 'measurement': return camera.output === 'depth';
    case 'driving': return camera.connection === 'gmsl' || camera.output === 'depth' || Boolean(camera.irNightVision);
    default: return false;
  }
}
