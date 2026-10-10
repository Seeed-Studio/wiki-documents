import {gmslGuideLinks} from './cameraGuideLinks.js';

// Curated from English Wiki article bodies, not keyword/front-matter matches.
// Keep explicit camera IDs: a shared sensor or connector alone is not evidence
// that an application, driver or board-specific procedure covers another model.
const sensor = 'Robotics/Robot_Sensor/Camera/';
const jetson = 'Edge/NVIDIA_Jetson/';
const vision = `${jetson}Application/Computer_Vision/`;
const physical = `${jetson}Application/Physical_AI/`;
const generative = `${jetson}Application/Generative_AI/`;
const boards = `${jetson}Carrier_Boards/`;
const computers = `${jetson}reComputer_Jetson_Series/`;
const arms = 'Robotics/Robot_Kits/reBot_Arm/';
const lerobot = 'Robotics/Robot_Kits/Lerobot/';
const imx219 = ['imx219-77', 'imx219-77ir', 'imx219-130', 'imx219-160', 'imx219-160ir', 'imx219-200', 'camera-v2', 'imx219-mount', 'imx219-83'];
const imx477 = ['pi-hq', 'pi-hq-m12', 'hq-cm-jetson'];
const csi = [...imx219, ...imx477];
// The J401/J401B and Industrial J30/J40 articles comment out some variants.
const j401Csi = csi.filter((id) => !['imx219-130', 'imx219-160', 'imx219-200'].includes(id));
const sensing = ['sg3s-f', 'sg3s-h', 'sg2-ar0233', 'sg2-imx390', 'sg8s-ar0820'];
const sensingBoardList = sensing.filter((id) => id !== 'sg3s-h');
const realsense = ['d435i', 'd405'];
const graspCameras = ['gemini-2', ...realsense];
const lerobotCameras = ['gemini-2', 'gemini-336', ...realsense];

const wiki = (group, cameraIds, source, url, title, note) => ({group, cameraIds, source, url, title, note});

// source is relative to sites/en/docs; tests validate each file and public slug.
export const wikiResources = [
  wiki('setup', imx219, `${jetson}FAQs/How_to_use_Camera_IMX219.md`, '/how_to_use_camera_imx219/', 'IMX219 setup and ISP tuning', 'Jetson-IO and image colour correction; includes a separate warning for Pi Camera V2.'),
  wiki('setup', imx477, `${jetson}FAQs/Use_IMX477_Camera_with_A603.md`, '/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board/', 'IMX477 on the A603 carrier', 'Board-specific BSP instructions for JetPack 5.1.2, 6.0 and 6.2.'),
  wiki('setup', j401Csi, `${boards}J401/J401_carrierboard_Hardware_Interfaces_Usage.md`, '/J401_carrierboard_Hardware_Interfaces_Usage/#csi-cameras', 'CSI setup on J401', 'Ribbon connection, Jetson-IO and capture test.'),
  wiki('setup', j401Csi, `${computers}reComputer_J401B/recomputer_j401b_interfaces_usage.md`, '/recomputer_j401b_interfaces_usage/#csi-cameras', 'CSI setup on J401B', 'J401B camera connector and capture instructions.'),
  wiki('setup', csi, `${computers}reComputer_Industrial/reComputer_Industrial_J20_Hardware_Interfaces_Usage.md`, '/reComputer_Industrial_J20_Hardware_Interfaces_Usage/#csi-cameras', 'CSI setup on reComputer Industrial J20', 'Industrial J20 wiring and driver configuration.'),
  wiki('setup', j401Csi.filter((id) => id !== 'imx219-160ir'), `${computers}reComputer_Industrial/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage.md`, '/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/#csi-cameras', 'CSI setup on reComputer Industrial J30/J40', 'Industrial Orin carrier wiring and driver configuration.'),
  wiki('setup', imx219, `${jetson}FAQs/Make_DIY_BSP_from_Orin_Nano_DevKit_to_reComputer_Classic_And_Super.md`, '/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super/', 'Custom BSP camera overlays for Classic / Super', 'Advanced integration: build and select the carrier-specific IMX219 overlay.'),
  wiki('setup', ['gemini-2'], `${sensor}Getting_Start_with_Orbbec_Gemini2_3D_Camera.md`, '/orbbec_gemini2/', 'Gemini 2 getting started', 'Camera specifications, SDK installation and stream preview.'),
  wiki('setup', ['gemini-336'], `${sensor}Getting_Start_with_Orbbec_Gemini_336.md`, '/orbbec_gemini336/', 'Gemini 336 getting started', 'Camera specifications and Orbbec SDK setup.'),
  wiki('setup', ['gemini-335lg'], `${sensor}Orbbec_Gemini_335Lg.mdx`, gmslGuideLinks.gemini335lg, 'Gemini 335LG on reComputer Robotics J4012', 'GMSL wiring, JetPack 6.2 overlay and Orbbec SDK.'),
  wiki('setup', ['gemini-2'], `${sensor}Orbbec_Depth_Camera.md`, '/orbbec_depth_camera_on_ros/', 'Orbbec depth and point clouds in ROS', 'Gemini 2 example on reComputer J30/J40 with RViz.'),
  wiki('setup', sensing, `${sensor}Sensing_GMSL_Camera.mdx`, gmslGuideLinks.sensing, 'Sensing GMSL camera setup', 'Separate 3G F-variant and 6G H-variant overlays.'),
  wiki('setup', [...sensingBoardList, 'gemini-335lg'], `${boards}Robotics_J401/Robotics_J401_carrierboard_Hardware_Interfaces_Usage.md`, gmslGuideLinks.roboticsJ401, 'GMSL setup on Robotics J401', 'SG-series and Gemini 335LG connections and overlays.'),
  wiki('setup', [...sensingBoardList, 'gemini-335lg'], `${computers}reComputer_Robotics_J50/reComputer_Robotics_J501_Getting_Started.md`, gmslGuideLinks.roboticsJ501, 'GMSL setup on Robotics J501', 'SG-series and Gemini 335LG carrier configuration.'),
  wiki('setup', [...sensingBoardList, 'gemini-335lg'], `${boards}Robotics_J601/Robotics_J601_carrierboard_Hardware_Interfaces_Usage.md`, gmslGuideLinks.roboticsJ601, 'GMSL setup on Robotics J601', 'SG-series and Gemini 335LG camera instructions.'),
  wiki('setup', sensingBoardList, `${boards}J501_Mini/Robotics_J501_Mini_Hardware_Interfaces_Usage.md`, gmslGuideLinks.roboticsJ501Mini, 'SG-series setup on Robotics J501 Mini', 'Mini carrier extension port and SG-series overlays.'),
  wiki('setup', ['sg3s-f'], `${boards}J501/Hardware_Interfaces_Usage.md`, gmslGuideLinks.industrialJ501, 'SG3S-F on reServer Industrial J501', 'GMSL extension-board wiring and capture configuration.'),
  wiki('setup', ['zed-x', 'zed-x-mini', 'zed-x-one-gs'], `${vision}ZED_X_GMSL_Cameras_on_reComputer_Robotics.mdx`, gmslGuideLinks.zed, 'ZED X-series setup on reComputer Robotics', 'Series-level guide; full walkthrough uses J50 Mini. A single One GS does not produce stereo depth.'),
  wiki('setup', [...graspCameras, 'et-s231-90'], `${arms}Courses/reBot_Arm_Tutorial/Arm_Tutorial_03.md`, '/rebot_physical_ai_course_chapter_3/', 'reBot course: camera and hardware selection', 'Equipment list for the Physical AI course, not a camera-driver tutorial.'),

  wiki('applications', csi, `${sensor}CSI_Camera.md`, '/csi_camera_on_ros/', 'Multiple CSI cameras with ROS', 'reComputer J30/J40, JetPack 5.x and ROS Noetic.'),
  wiki('applications', ['camera-v2', 'imx219-130', 'hq-cm-jetson'], `${vision}DashCamNet-with-Jetson-Xavier-NX-Multicamera.md`, '/DashCamNet-with-Jetson-Xavier-NX-Multicamera/', 'Multi-camera object detection with DashCamNet', 'Jetson Xavier NX example using the listed CSI cameras.'),
  wiki('applications', ['x10-usb'], `${generative}Deploy_Live_VLM_WebUI_on_reComputer_Jetson.md`, '/deploy_live_vlm_webui_on_jetson/', 'Live VLM WebUI on reComputer Jetson', 'Live USB-camera interpretation on Super J4012.'),
  wiki('applications', ['x10-usb'], `${jetson}Application/Developer_Tools/Develop_reComputer_Jetson_using_Clawdbot.md`, '/develop_recomputer_jetson_using_clawdbot/', 'Camera development with Clawdbot', 'Super J4012 example with the X10 USB camera.'),
  wiki('applications', ['x10-usb'], `${generative}Deploy_JoyAI_VL_Interaction_on_Jetson_Thor.md`, '/deploy_joyai_vl_interaction_on_jetson_thor/', 'JoyAI-VL video interaction on Jetson Thor', 'USB-camera input for the vision-language demo.'),
  wiki('applications', ['gemini-2'], `${vision}YOLOv11_With_Depth_Camera_For_Distance_Measurement.md`, '/yolov11_with_depth_camera/', 'YOLOv11 detection and distance measurement', 'Gemini 2 with reComputer J4012.'),
  wiki('applications', ['gemini-2'], `${sensor}ORB_SLAM3_with_Orbbec_Gemini2.md`, '/orb_slam3_orbbec_gemini2/', 'ORB-SLAM3 with Gemini 2', 'RGB-D tracking, calibration and mapping on Jetson.'),
  wiki('applications', ['gemini-2'], `${sensor}Pycuvslam_On_reComputer.md`, '/pycuvslam_recomputer_robotics/', 'PyCuVSLAM with reComputer', 'Gemini 2 RGB-D visual odometry example.'),
  wiki('applications', ['gemini-2'], `${vision}Deploy_NVBLOX_ON_Jetson_AGX_Orin.md`, '/deploy_nvblox_jetson_agx_orin/', 'NVBlox 3D mapping on Jetson AGX Orin', 'Orbbec ROS 2 workflow; includes the Gemini 2 launch configuration.'),
  wiki('applications', ['gemini-2'], 'Robotics/Robot_Software/PX4/Object_Tracking_with_reComputer_Jetson_and_PX4.md', '/object_tracking_with_reComputer_jetson_and_pX4/', 'Object tracking with Jetson and PX4', 'Gemini 2, reComputer mini, ROS 2 and YOLO tracking.'),
  wiki('applications', ['gemini-2'], `${physical}reBot_Arm_B601_DM_GraspNet_Visual_Grasping.md`, '/rebot_arm_b601_dm_graspnet_visual_grasping/', 'GraspNet visual grasping with reBot-DM', 'Gemini 2 calibration and 6-DoF grasp generation on Jetson.'),
  wiki('applications', ['gemini-2'], `${physical}Voice_Control_reBot_Arm_B601_by_Nvidia_Jetson_Thor.md`, '/voice_control_rebot_arm/', 'Voice-controlled reBot on Jetson Thor', 'Gemini 2 RGB-D input for the robot-arm demo.'),
  wiki('applications', graspCameras, `${arms}B601_DM/reBot_Arm_B601_DM_Grasping_Demo.md`, '/rebot_arm_b601_dm_grasping_demo/', 'reBot B601-DM visual grasping', 'Camera SDK setup, calibration and YOLO-based grasping.'),
  wiki('applications', graspCameras, `${arms}B601_RS/reBot_Arm_B601_RS_Grasping_Demo.md`, '/rebot_arm_b601_rs_grasping_demo/', 'reBot B601-RS visual grasping', 'Camera SDK setup and the RS-arm grasping workflow.'),
  wiki('applications', graspCameras, `${arms}B601_RS/reBot_Arm_B601_RS_Agent.md`, '/wrc_demo_tutorial/', 'reBot B601-RS with Agent Claw', 'RGB-D camera setup for agent-controlled manipulation.'),
  wiki('applications', lerobotCameras, `${arms}B601_DM/reBot_Arm_B601_DM_Lerobot.md`, '/rebot_arm_b601_dm_lerobot/#add-cameras', 'reBot B601-DM with LeRobot', 'RealSense and Orbbec camera setup for dataset recording.'),
  wiki('applications', lerobotCameras, `${arms}B601_RS/reBot_Arm_B601_RS_Lerobot.md`, '/rebot_arm_b601_rs_lerobot/#add-cameras', 'reBot B601-RS with LeRobot', 'RealSense and Orbbec camera setup for dataset recording.'),
  wiki('applications', lerobotCameras, `${lerobot}Lerobot_SO100Arm_New.md`, '/lerobot_so100m_new/#add-cameras', 'SO-Arm LeRobot tutorial', 'Camera configuration, stream checks and dataset recording.'),
  wiki('applications', ['gemini-2'], `${lerobot}Lerobot_SO100Arm.md`, '/lerobot_so100m/', 'SO10xArm with LeRobot (earlier workflow)', 'Includes a Gemini 2 camera configuration section.'),
  wiki('applications', ['gemini-2'], `${lerobot}Lerobot_Starai_Arm.md`, '/lerobot_starai_arm/', 'StarAI Arm with LeRobot', 'Gemini 2 image capture for imitation-learning datasets.'),
  wiki('applications', ['gemini-2'], 'Robotics/Robot_Software/VLA/control_robotic_arm_via_gr00t.md', '/control_robotic_arm_via_gr00t/', 'Robot-arm control with Isaac GR00T N1.5', 'The demonstrated setup uses StarAI Arm and Gemini 2.'),
  wiki('applications', realsense, `${sensor}realsense_3D_seg.md`, '/realsense_3d_seg/', 'RealSense 3D segmentation', 'D405 / D435i setup, point clouds and close-range parameters.'),
  wiki('applications', ['sg3s-f'], `${vision}YOLOv26_Dual_USB_Camera_Image_Processing_System_on_Jetson.md`, '/ai_roboticsyolov26_dual_camera_system/', 'Dual GMSL cameras with YOLOv26', 'Uses two SG3S-F cameras and TensorRT on Jetson.'),
  wiki('applications', ['sg3s-f'], `${vision}Build_a_Four_Camera_Fisheye_Surround_View_Demo_on_Jetson_AGX_Thor.md`, '/jetson_fisheye_surround_view_demo/', 'Four-camera fisheye surround view', 'Four SG3S-F cameras on Jetson AGX Thor.'),
  wiki('applications', ['sg3s-f'], `${vision}Efficient_Multi-Task_Vision_Inference_Engine_Deployment_on_Jetson.md`, '/deploy_visual_perception_engine_recomputer/', 'Multi-task vision inference on Jetson', 'The hardware list uses the SG3S-F GMSL2 camera.'),
  wiki('applications', ['sg3s-f'], `${vision}Multi-GMSL_Cameras_for_Real-Time_Object_Detection_and_3D_Reconstruction_on_Jetson_AGX_Orin.md`, '/multiple_cameras_with_jetson/', 'Multi-GMSL detection and 3D reconstruction', 'reServer Industrial J501 and the linked SG3S-F camera.'),
];

const groups = [{id: 'setup', label: 'Hardware & setup'}, {id: 'applications', label: 'Application examples'}];
const resourceKey = (url) => {
  const parsed = new URL(url, 'https://wiki.seeedstudio.com');
  return `${parsed.origin}${parsed.pathname.replace(/\/$/, '')}${parsed.search}`;
};

export function wikiResourceGroups(camera) {
  return groups.map((group) => ({...group, links: wikiResources.filter((resource) => resource.group === group.id && resource.cameraIds.includes(camera.id))})).filter(({links}) => links.length);
}

export function specificationResources(camera) {
  const seen = new Set(wikiResourceGroups(camera).flatMap(({links}) => links.map(({url}) => resourceKey(url))));
  return [
    {url: camera.specUrl, title: 'Specifications'},
    {url: camera.specs?.range?.idealSource, title: 'Ideal range source'},
  ].filter(({url}) => {
    if (!url || seen.has(resourceKey(url))) return false;
    seen.add(resourceKey(url));
    return true;
  });
}
