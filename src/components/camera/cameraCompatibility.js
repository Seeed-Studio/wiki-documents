import {platformFamilies} from './platformData.js';
import {isCameraAvailable} from './cameraModel.js';
import {wikiResources} from './cameraResources.js';
import {gmslGuideLinks} from './cameraGuideLinks.js';

// Bind an article to its actual carrier family, not every board sharing a
// connector. Camera IDs remain those explicitly covered by that article.
export const familyGuideReferences = [
  {url: '/J401_carrierboard_Hardware_Interfaces_Usage/#csi-cameras', familyIds: ['classic']},
  {url: '/recomputer_j401b_interfaces_usage/#csi-cameras', familyIds: ['classic']},
  {url: '/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/#csi-cameras', familyIds: ['industrial']},
  {url: '/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super/', familyIds: ['classic', 'super']},
  {url: '/orbbec_depth_camera_on_ros/', familyIds: ['classic']},
  {url: '/deploy_live_vlm_webui_on_jetson/', familyIds: ['super']},
  {url: '/object_tracking_with_reComputer_jetson_and_pX4/', familyIds: ['mini']},
  {url: gmslGuideLinks.gemini335lg, familyIds: ['robotics-j40']},
  {url: gmslGuideLinks.sensing, familyIds: ['robotics-j40']},
  {url: gmslGuideLinks.roboticsJ401, familyIds: ['robotics-j40']},
  {url: gmslGuideLinks.roboticsJ501, familyIds: ['j50']},
  {url: gmslGuideLinks.roboticsJ601, familyIds: ['j601']},
  {url: gmslGuideLinks.roboticsJ501Mini, familyIds: ['j50mini']},
  {url: gmslGuideLinks.industrialJ501, familyIds: ['industrial-j501']},
  {url: gmslGuideLinks.zed, familyIds: ['robotics-j40', 'j50mini', 'j50', 'j601']},
  {url: '/jetson_fisheye_surround_view_demo/', familyIds: ['j601']},
];

export function cameraCompatibility(camera, selected = 'all') {
  return platformFamilies.filter(({id}) => isCameraAvailable(camera, id)).map((family) => ({
    ...family,
    selected: family.id === selected,
    guides: familyGuideReferences.filter(({familyIds}) => familyIds.includes(family.id)).map(({url}) =>
      wikiResources.find((resource) => resource.url === url && resource.cameraIds.includes(camera.id))).filter(Boolean),
  })).sort((a, b) => Number(b.selected) - Number(a.selected));
}
