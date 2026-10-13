import {applicationSceneOptions} from './applicationScenes.js';
import {wikiResources} from './cameraResources.js';

// Model-specific examples for reading, never a camera-selection whitelist.
const example = (application, cameraIds, url, reason) => {
  const resource = wikiResources.find((item) => item.url === url);
  if (!resource) throw new Error(`Missing application reference: ${url}`);
  return {application, cameraIds, url, reason, title: resource.title, source: resource.source, kind: 'Wiki example'};
};
const manufacturer = (application, cameraIds, url, reason) => ({application, cameraIds, url, reason, title: 'Manufacturer application notes', kind: 'Manufacturer guidance'});

export const applicationEvidence = [
  example('manipulation', ['gemini-2', 'd435i', 'd405'], '/rebot_arm_b601_dm_grasping_demo/', 'RGB-D object localization and hand–eye calibration in the reBot grasping tutorial.'),
  manufacturer('manipulation', ['gemini-336'], 'https://www.orbbec.com/news/orbbec-showcases-3d-vision-solutions-for-logistics-and-industrial-automation-at-modex-2026/', 'Gemini 336 is used in the cited palletizing-robot demonstration.'),
  manufacturer('manipulation', ['gemini-335lg'], 'https://www.orbbec.com/news/axiomtek-and-orbbec-partner-to-deliver-ready-to-use-robotics-development-solutions-for-amr-and-robotic-arm-applications/', 'The manufacturer describes a Gemini 335Lg integration for robotic-arm applications.'),
  manufacturer('manipulation', ['zed-x-mini'], 'https://www.stereolabs.com/products/zed-x', 'ZED X Mini is intended for short-range manipulation and picking.'),
  example('manipulation', ['sg3s-f'], '/jetson_fisheye_surround_view_demo/', 'Four-camera YOLO target localization for grasp assistance; requires the calibrated demo pipeline, not a native depth stream.'),
  example('recognition', ['gemini-2'], '/yolov11_with_depth_camera/', 'YOLO object detection with RGB images; this example is not a surface-defect inspection test.'),
  example('recognition', ['sg3s-f'], '/jetson_fisheye_surround_view_demo/', 'Object detection from four calibrated fisheye cameras in the surround-view demo.'),
  example('measurement', ['gemini-2'], '/yolov11_with_depth_camera/', 'Depth-based distance measurement for detected objects in the tutorial pipeline.'),
  manufacturer('measurement', ['d405'], 'https://www.realsenseai.com/product-family/d405-series/', 'Close-range inspection, scanning and dimensional checks within the configured working range.'),
  // Mapping and mobile-robot examples are not evidence of road-driving certification.
  example('driving', ['gemini-2'], '/orb_slam3_orbbec_gemini2/', 'RGB-D tracking and mapping with ORB-SLAM3 on Jetson; not a road-driving validation.'),
  manufacturer('driving', ['gemini-336'], 'https://store.orbbec.com/products/gemini-336', 'The manufacturer identifies AMRs and delivery robots as target applications.'),
  manufacturer('driving', ['gemini-335lg'], 'https://www.orbbec.com/news/orbbec-partners-with-advantech-to-bring-out-of-the-box-ai-vision-solutions-to-amr-developers/', 'Gemini 335Lg is used in the cited Jetson-based AMR integration.'),
  manufacturer('driving', ['d435i'], 'https://www.realsenseai.com/products/depth-camera-d435i/', 'Depth and time-aligned IMU data for visual tracking and robotic navigation.'),
  manufacturer('driving', ['zed-x', 'zed-x-mini'], 'https://docs.stereolabs.com/docs/development/zed-sdk/modules/spatial-mapping', 'Both models support ZED SDK spatial mapping for environment and obstacle sensing.'),
  example('driving', ['sg3s-f'], '/jetson_fisheye_surround_view_demo/', 'Four calibrated fisheye cameras provide a bird’s-eye view and occupancy cues for chassis motion.'),
];

export const applicationUses = (camera) => applicationSceneOptions.filter(({id}) => id !== 'all').map((scene) => ({
  ...scene, evidence: applicationEvidence.filter((item) => item.application === scene.id && item.cameraIds.includes(camera.id)),
})).filter(({evidence}) => evidence.length);
