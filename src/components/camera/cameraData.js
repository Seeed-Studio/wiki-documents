import {gmslGuideLinks} from './cameraGuideLinks.js';

// Product images are the first gallery images on the corresponding Bazaar pages.
const seeedImage = (path) =>
  `https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/${path}`;

export const csiEvidence = 'Seeed Orin NX / Orin Nano CSI camera comparison (reComputer and reComputer Industrial J30/J40)';
export const zedEvidence = 'Seeed ZED X integration guide (Robotics J50 Mini, J50, J40, and J601)';
const {sensing: sensingGuide, roboticsJ401, roboticsJ501, roboticsJ601, roboticsJ501Mini} = gmslGuideLinks;

const gmslBoardEvidence = {
  'robotics-j40': {level: 'board', text: 'Listed in the Robotics J401 camera support list; use the matching 3G/6G overlay.', url: roboticsJ401},
  j50: {level: 'board', text: 'Listed in the Robotics J501 camera support list; check the extension board and BSP.', url: roboticsJ501},
  j50mini: {level: 'board', text: 'Listed in the J501 Mini camera support list; check the exact camera variant and overlay.', url: roboticsJ501Mini},
  j601: {level: 'board', text: 'Listed in the Robotics J601 camera support list; check the extension board and BSP.', url: roboticsJ601},
};
const gmslFamilyEvidence = Object.fromEntries(
  Object.entries(gmslBoardEvidence).map(([platform, record]) => [platform, {
    ...record,
    level: 'family',
    text: 'The sensor family is in this board support list; confirm the ordered lens/serializer suffix and matching BSP overlay.',
  }]),
);

const csi = (camera) => ({
  interface: 'csi',
  connector: 'MIPI CSI-2; check the camera and host ribbon connectors',
  platforms: ['j30j40'],
  platformLabel: 'J30/J40 · Orin Nano/NX',
  evidence: csiEvidence,
  platformEvidence: {
    j30j40: {level: 'board', text: csiEvidence, url: 'https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Orin-NX-Orin-Nano-Compatible-CSI-Camera-Comparison.pdf'},
  },
  dataStatus: 'Camera listed in the Seeed CSI comparison; confirm your carrier and cable.',
  fovBasis: 'Diagonal for fixed-lens modules; lens-dependent where noted',
  depthRange: '—',
  specUrl: 'https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Orin-NX-Orin-Nano-Compatible-CSI-Camera-Comparison.pdf',
  software: 'Confirm the Seeed BSP, sensor driver, JetPack, and capture mode',
  fps: 'Confirm for the selected mode',
  bandwidth: 'Confirm with the host and capture mode',
  imageCredit: 'Seeed Studio Bazaar',
  ...camera,
});

const usb = (camera) => ({
  interface: 'usb', connector: 'USB; verify host port, cable, and power budget',
  platforms: [], platformLabel: 'No board-level adaptation claimed',
  platformEvidence: {}, evidence: 'Seeed Bazaar product record',
  dataStatus: 'Product listed; exact reComputer combination to verify',
  features: [], fovGroup: null, lens: 'Fixed', depthRange: '—',
  fps: 'Confirm selected stream/mode', bandwidth: 'Confirm USB speed and simultaneous streams',
  software: 'Confirm UVC or vendor SDK on your JetPack/L4T release',
  imageCredit: 'Seeed Studio Bazaar', fovBasis: 'See individual product specification',
  ...camera,
});

const gmsl = (camera) => ({
  interface: 'gmsl', connector: 'GMSL2 camera Fakra; matching coax harness and reComputer GMSL extension board',
  platforms: ['robotics-j40', 'j50', 'j50mini', 'j601'],
  platformLabel: 'Sensor family: Robotics J401 / J501 / J501 Mini / J601; exact suffix to verify',
  platformEvidence: gmslFamilyEvidence,
  evidence: 'Seeed Robotics camera support lists and Sensing GMSL setup guide',
  dataStatus: 'Sensor family in board support list; exact lens/serializer suffix, BSP and overlay to verify',
  features: [], fovGroup: null, lens: 'Factory-fixed; angle depends on ordered lens',
  fov: 'Lens variant-dependent', fovBasis: 'Horizontal FOV varies by ordered lens', depthRange: '—',
  software: 'Seeed GMSL BSP/driver and matching 3G or 6G device-tree overlay',
  fps: '30 fps at listed resolution (Sensing specification)',
  imageCredit: 'Sensing product-family photo', guideUrl: sensingGuide,
  ...camera,
});

const cameraRecords = [
  csi({
    id: 'imx219-77', name: 'IMX219-77', sku: '114992260', sensor: 'Sony IMX219', resolution: '8MP · 3280 × 2464',
    fov: '77°', fovGroup: 'standard', lens: 'Fixed', features: [],
    bestFor: 'A general-purpose view when the target should occupy more of the image than it would with a wide lens.',
    imageUrl: seeedImage('1/1/114992260_-preview-19.png'),
    bazaarUrl: 'https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html',
  }),
  csi({
    id: 'imx219-77ir', name: 'IMX219-77IR', sku: '114992261', sensor: 'Sony IMX219', resolution: '8MP · 3280 × 2464',
    fov: '77°', fovGroup: 'standard', lens: 'Fixed', features: ['ir'], irNightVision: true,
    bestFor: 'A focused scene in low light. Check whether its two IR LEDs cover the actual working distance.',
    imageUrl: seeedImage('7/7/77_ir_1_1.png'),
    bazaarUrl: 'https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html',
  }),
  csi({
    id: 'imx219-130', name: 'IMX219-130', sku: '114992262', sensor: 'Sony IMX219', resolution: '8MP · 3280 × 2464',
    fov: '130°', fovGroup: 'wide', lens: 'Fixed', features: [],
    bestFor: 'Robot or drone scene awareness when a standard lens misses the edges of the route.',
    imageUrl: seeedImage('1/1/114992262_-preview-19.png'),
    bazaarUrl: 'https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html',
  }),
  csi({
    id: 'imx219-160', name: 'IMX219-160', sku: '114992263', sensor: 'Sony IMX219', resolution: '8MP · 3280 × 2464',
    fov: '160°', fovGroup: 'wide', lens: 'Fixed', features: [],
    bestFor: 'Broad coverage from one mounting point; small or distant targets receive fewer pixels.',
    imageUrl: seeedImage('1/1/114992263_-preview-19.png'),
    bazaarUrl: 'https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html',
  }),
  csi({
    id: 'imx219-160ir', name: 'IMX219-160IR', sku: '114992264', sensor: 'Sony IMX219', resolution: '8MP · 3280 × 2464',
    fov: '160°', fovGroup: 'wide', lens: 'Fixed', features: ['ir'], irNightVision: true,
    bestFor: 'Wide night-time coverage; test IR reach at the image edges as well as in the center.',
    imageUrl: seeedImage('1/6/160_ir_1.png'),
    bazaarUrl: 'https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html',
  }),
  csi({
    id: 'imx219-200', name: 'IMX219-200', sku: '114992265', sensor: 'Sony IMX219', resolution: '8MP · 3280 × 2464',
    fov: '200°', fovGroup: 'fisheye', lens: 'Fixed fisheye', features: [],
    bestFor: 'Near-panoramic coverage. Budget for fisheye correction if geometry or measurement matters.',
    imageUrl: seeedImage('1/1/114992265_-preview-19.png'),
    bazaarUrl: 'https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html',
  }),
  csi({
    id: 'camera-v2', name: 'Raspberry Pi Camera Module V2', sku: '113990214', sensor: 'Sony IMX219', resolution: '8MP · 3280 × 2464',
    fov: '62.2° H × 48.8° V', fovBasis: 'Horizontal × vertical (Raspberry Pi specification)', fovGroup: 'standard', lens: 'Fixed', features: [],
    bestFor: 'A familiar standard-view module for prototyping and fixed-position imaging.',
    imageUrl: seeedImage('1/1/113990214_feature_.jpg'),
    bazaarUrl: 'https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html',
  }),
  csi({
    id: 'imx219-mount', name: 'IMX219 M12/CS Mount', sku: '102110719', sensor: 'Sony IMX219', resolution: '8MP · 3280 × 2464',
    fov: 'Lens-dependent', fovGroup: 'lens', lens: 'M12 / CS options', features: ['lens'],
    bestFor: 'A custom working distance or angle of view. Confirm the supplied mount and lens before ordering.',
    imageUrl: seeedImage('1/0/102110719_feature-11.jpg'),
    bazaarUrl: 'https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html',
  }),
  csi({
    id: 'imx219-83', name: 'IMX219-83 Stereo Camera', sku: '114992270', sensor: 'Dual Sony IMX219', resolution: '8MP per sensor · 3280 × 2464',
    fov: '83°', fovGroup: 'standard', lens: 'Fixed', features: ['stereo'],
    bestFor: 'Two views for stereo experiments; usable depth still needs calibration and a processing pipeline.',
    imageUrl: seeedImage('s/t/stereo_1.png'),
    bazaarUrl: 'https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html',
  }),
  csi({
    id: 'pi-hq', name: 'Raspberry Pi High Quality Camera', sku: '101990642', sensor: 'Sony IMX477', resolution: '12.3MP · 4056 × 3040',
    fov: 'Lens-dependent', fovGroup: 'lens', lens: 'C / CS', features: ['lens', 'highres'],
    bestFor: 'Higher-resolution stills with a selectable lens; match the lens to the target size and distance.',
    imageUrl: seeedImage('r/p/rpi_cam_1.png'),
    bazaarUrl: 'https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html',
  }),
  csi({
    id: 'pi-hq-m12', name: 'Raspberry Pi HQ Camera (M12)', sku: '114993032', sensor: 'Sony IMX477R', resolution: '12.3MP · 4056 × 3040',
    fov: 'Lens-dependent', fovGroup: 'lens', lens: 'M12', features: ['lens', 'highres'],
    bestFor: 'High-resolution capture where an M12 lens and a compact lens assembly suit the enclosure.',
    imageUrl: seeedImage('1/-/1-114993032-raspberry-pi-hq-camera-45font.jpg'),
    bazaarUrl: 'https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html',
  }),
  csi({
    id: 'hq-cm-jetson', name: 'High Quality Camera for CM/Jetson', sku: '114992442', sensor: 'Sony IMX477 family', resolution: '12.3MP · 4056 × 3040',
    fov: 'Lens-dependent', fovGroup: 'lens', lens: 'CS; C adapter', features: ['lens', 'highres'],
    bestFor: 'A high-resolution Jetson build with a replaceable lens and C-mount adapter option.',
    imageUrl: seeedImage('1/-/1-114992442-high-quality-camera-for-raspberry-pi-compute-module--jetson-nano-45font_1.jpg'),
    bazaarUrl: 'https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html',
  }),
  usb({
    id: 'x10-usb', name: 'X10 USB Camera 1080p', sku: '114090066', sensor: 'Not stated on Bazaar', resolution: '1920 × 1080', fov: 'Not stated',
    bestFor: 'Simple RGB input for capture or model-training demos. Confirm the actual UVC mode, FOV, and USB power on your host.',
    imageUrl: seeedImage('0/-/0-114090066--x10-usb-camera.jpg'),
    bazaarUrl: 'https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html',
    guideUrl: '/deploy_live_vlm_webui_on_jetson/',
    platformEvidence: {j30j40: {level: 'workflow', text: 'Used with reComputer Super J4012 in the Seeed Live VLM guide; other boards need confirmation.', url: '/deploy_live_vlm_webui_on_jetson/'}},
    platformLabel: 'reComputer Super J4012 application example',
    evidence: 'Seeed Live VLM WebUI application guide',
  }),
  usb({
    id: 'et-s231-90', name: 'ET-S231 USB Camera · 90°', sku: '100035502', sensor: '1/2.7-inch color CMOS (model not stated)', resolution: '2MP · 1920 × 1080', fov: '90°', fovBasis: 'Diagonal',
    bestFor: 'A 1080p UVC module with a 90° diagonal view for fixed-position imaging.',
    imageUrl: seeedImage('s/h/shoutu2.6.1_1.jpg'),
    bazaarUrl: 'https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html',
    fps: '1920 × 1080 @ 30 fps (product specification)',
    software: 'UVC camera; confirm host USB bandwidth and capture mode',
  }),
  usb({
    id: 'et-s231-120', name: 'ET-S231 USB Camera · 120°', sku: '100062162', sensor: '1/2.7-inch color CMOS (model not stated)', resolution: '2MP · 1920 × 1080', fov: '120°', fovBasis: 'Diagonal',
    bestFor: 'The wider ET-S231 option for nearby scene coverage; a distant target occupies fewer pixels than with the 90° variant.',
    imageUrl: seeedImage('s/2/s231.1.jpg'),
    bazaarUrl: 'https://www.seeedstudio.com/ET-S231-120-USB-Camera-p-6683.html',
    fps: '1920 × 1080 @ 30 fps (product specification)',
    software: 'UVC camera; confirm host USB bandwidth and capture mode',
  }),
  usb({
    id: 'ov9732-usb', name: 'OV9732 USB Camera · 100°', sku: '100079619', sensor: 'OmniVision OV9732', resolution: '1MP · 1280 × 720', fov: '100°', fovBasis: 'Product-listed angle; axis not specified',
    bestFor: 'Compact USB 2.0 RGB input for close-up training views and small robot builds.',
    imageUrl: seeedImage('1/0/100079619-gallery_img_1_1.png'),
    bazaarUrl: 'https://www.seeedstudio.com/Camera-Module-OV9732-1MP-100-USB2-0-USB2-0-L38-W38-H16-05mm-p-6982.html',
    connector: 'USB 2.0; confirm camera cable and host connector',
    software: 'USB plug-and-play per Bazaar; verify UVC capture on the target JetPack',
  }),
  usb({
    id: 'gemini-2', name: 'Orbbec Gemini 2', sku: '101090144', sensor: 'Active stereo IR; RGB and IMU', resolution: 'Depth up to 1280 × 800 @ 30 fps · RGB up to 1920 × 1080 @ 30 fps', fov: '91° × 66°', fovBasis: 'Depth, H × V', depthRange: '0.15–10 m; ideal 0.2–5 m',
    connector: 'USB 3.0 Type-C; data and power', features: ['depth', 'stereo', 'ir'],
    bestFor: 'Uses infrared stereo to measure depth for navigation and inspection. RGB, IR and depth streams are available through the Orbbec SDK; the IR projector is for depth sensing, not night-vision lighting.',
    imageUrl: seeedImage('0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg'),
    bazaarUrl: 'https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html',
    guideUrl: '/yolov11_with_depth_camera/', specUrl: '/orbbec_gemini2/',
    platformEvidence: {j30j40: {level: 'workflow', text: 'Seeed demonstrates Gemini 2 with reComputer J4012 over USB; check JetPack/SDK versions.', url: '/yolov11_with_depth_camera/'}},
    platformLabel: 'reComputer J4012 / J30-J40 workflow', evidence: 'Seeed Gemini 2 and YOLOv11 depth-camera guides',
    software: 'Orbbec SDK/pyorbbecsdk matching JetPack and ROS environment',
    fps: 'Depth and RGB each up to 30 fps at their listed resolutions; verify simultaneous modes',
  }),
  usb({
    id: 'gemini-336', name: 'Orbbec Gemini 336', sku: '100000774', sensor: 'Active stereo IR; RGB and IMU', resolution: 'Depth 1280 × 800 @ 30 fps · RGB 1920 × 1080 @ 30 fps', fov: '90° × 65°', fovBasis: 'Depth, H × V; RGB is 86° × 55°', depthRange: 'Recommended 0.26–3 m; max 0.10–20 m+',
    connector: 'USB 3.0 Type-C; data and power', features: ['depth', 'stereo', 'ir'],
    bestFor: 'Depth sensing for robot navigation and inspection in variable lighting.',
    imageUrl: seeedImage('1/0/1000000774.png'),
    bazaarUrl: 'https://www.seeedstudio.com/Orbbec-Gemini-336-3D-Camera-3D-p-6662.html',
    guideUrl: '/orbbec_gemini336/', specUrl: '/orbbec_gemini336/',
    evidence: 'Seeed Gemini 336 model guide; reComputer board combination not demonstrated',
    software: 'Orbbec SDK; confirm ARM64 release, USB power and depth modes',
    fps: 'Depth 1280 × 800 @ 30 fps; RGB 1920 × 1080 @ 30 fps',
  }),
  usb({
    id: 'd435i', name: 'Intel RealSense D435i', sku: '113990795', sensor: 'Active stereo depth + RGB + IMU', resolution: 'Depth up to 1280 × 720 · RGB up to 1920 × 1080', fov: '87° × 58°', fovBasis: 'Depth, H × V; RGB 69° × 42°', depthRange: 'Ideal 0.3–3 m',
    connector: 'USB 3; confirm supplied cable and host connector', features: ['depth', 'stereo', 'ir'],
    bestFor: 'RGB-D SLAM and near-to-mid-range robot perception with an onboard IMU.',
    imageUrl: seeedImage('i/n/intel_realsense_d435i_34_1_1.jpg'),
    bazaarUrl: 'https://www.seeedstudio.com/Intel-RealSense-Depth-Camera-D435i-p-4423.html',
    guideUrl: '/realsense_3d_seg/', specUrl: 'https://www.realsenseai.com/products/depth-camera-d435i/',
    documentationLevel: 'application',
    evidence: 'Seeed RealSense 3D segmentation and reBot application guides',
    software: 'librealsense/ROS driver; check ARM64 and JetPack version',
    fps: 'Depth up to 90 fps (mode-dependent); RGB 1920 × 1080 @ 30 fps',
  }),
  usb({
    id: 'd405', name: 'RealSense D405', sku: '100000540', sensor: 'Stereo global-shutter depth sensors', resolution: 'Depth up to 1280 × 720 · RGB 1280 × 720', fov: '87° × 58°', fovBasis: 'Depth and RGB, H × V', depthRange: 'Ideal 0.07–0.5 m; Min-Z 0.07 m at 480p',
    connector: 'USB; confirm speed, cable and host connector', features: ['depth', 'stereo'],
    bestFor: 'Close-range manipulation and tabletop inspection at 7–50 cm, not distant navigation.',
    imageUrl: seeedImage('1/-/1-100000540-realsense-d405-3d-camera.jpg'),
    bazaarUrl: 'https://www.seeedstudio.com/RealSense-D405-3D-Camera-p-6758.html',
    guideUrl: '/realsense_3d_seg/', specUrl: 'https://www.realsenseai.com/product-family/d405-series/',
    documentationLevel: 'application',
    evidence: 'Seeed RealSense 3D segmentation and reBot application guides',
    software: 'librealsense/ROS driver; check ARM64 and JetPack version',
    fps: 'Depth up to 90 fps (mode-dependent); RGB 1280 × 720 @ 30 fps',
  }),
  gmsl({
    id: 'sg3s-f', name: 'Sensing SG3S-ISX031C-GMSL2F', sku: '101090101', sensor: 'Sony ISX031', resolution: '2.95MP · 1920 × 1536', fov: '196° H × 154° V (Bazaar variant)', fovBasis: 'H × V; confirm the ordered lens',
    bestFor: 'Wide-area robotic vision through a 3Gbps GMSL2 link. Use the Seeed 3G overlay; this is not the 6G H variant.',
    imageUrl: seeedImage('0/-/0-101090101-3mp-gmsl2-camera-module-190-degree.jpg'), imageCredit: 'Seeed Studio Bazaar',
    bazaarUrl: 'https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html',
    connector: 'GMSL2 3Gbps; Fakra camera, Mini-Fakra extension-board harness',
    bandwidth: 'GMSL2 3Gbps link (not image payload throughput)',
    specUrl: 'https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Sensing_GMSL_Cameras/datasheet/SG3S-ISX031C-GMSL2F_Datasheet.pdf',
    platformLabel: 'Robotics J401 / J501 / J501 Mini / J601; Industrial J501 carrier',
    platformEvidence: {...gmslBoardEvidence, 'industrial-j501': {level: 'board', text: 'The reServer Industrial J501 carrier guide explicitly lists this camera.', url: gmslGuideLinks.industrialJ501}},
  }),
  gmsl({
    id: 'sg3s-h', name: 'Sensing SG3S-ISX031C-GMSL2-H', sku: 'Not listed on Bazaar', sensor: 'Sony ISX031', resolution: '2.95MP · 1920 × 1536',
    bestFor: 'The 6Gbps SG3S option. Seeed documents its 6G overlay, but this H variant has no matching Bazaar SKU or purchase listing.',
    imageUrl: seeedImage('0/-/0-101090101-3mp-gmsl2-camera-module-190-degree.jpg'),
    imageNote: 'SG3S family photo (F variant); H appearance not independently verified',
    imageCredit: 'Seeed Studio · SG3S family',
    bandwidth: 'GMSL2 6Gbps link (not image payload throughput)',
    specUrl: 'https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Sensing_GMSL_Cameras/datasheet/SG3S-ISX031C-GMSL2-Hxxx_cn_Datasheet.pdf',
    platformEvidence: {'robotics-j40': {level: 'workflow', text: 'Seeed Sensing guide lists this exact H variant for the 6G overlay; verify the board BSP.', url: sensingGuide}},
    platformLabel: 'Seeed Sensing 6G overlay guide; board list uses the SG3S family name',
    dataStatus: 'H variant in Seeed setup guide; no Bazaar listing',
  }),
  gmsl({
    id: 'sg2-ar0233', name: 'Sensing SG2-AR0233C-5200-G2A-H', sku: 'Not listed on Bazaar', sensor: 'onsemi AR0233', resolution: '2MP · 1920 × 1080',
    bestFor: '1080p automotive-style capture with HDR and a 6Gbps GMSL2 link; order the desired horizontal-FOV lens variant.',
    imageUrl: 'https://50002352.s21i.huaweicloudsite.cn/2/ABUIABACGAAgibORqwYokLqhhgEw4g444g4.jpg',
    imageNote: 'Sensing product-page image; external shell shared across variants',
    bandwidth: 'GMSL2 6Gbps link (not image payload throughput)',
    specUrl: 'https://sensing-world.com/en/h-pd-18.html',
  }),
  gmsl({
    id: 'sg2-imx390', name: 'Sensing SG2-IMX390C-5200-G2A-H', sku: 'Not listed on Bazaar', sensor: 'Sony IMX390', resolution: '2.12MP · 1920 × 1080',
    bestFor: '1080p HDR scene capture with a 6Gbps GMSL2 link; select the ordered lens angle and matching Seeed overlay.',
    imageUrl: 'https://50002352.s21i.huaweicloudsite.cn/2/ABUIABACGAAgibORqwYokLqhhgEw4g444g4.jpg',
    imageNote: 'Sensing product-page image; external shell shared across variants',
    bandwidth: 'GMSL2 6Gbps link (not image payload throughput)',
    specUrl: 'https://sensing-world.com/en/h-pd-156.html',
  }),
  gmsl({
    id: 'sg8s-ar0820', name: 'Sensing SG8S-AR0820C-5300-G2A-H', sku: 'Not listed on Bazaar', sensor: 'onsemi AR0820', resolution: '8.3MP · 3840 × 2160',
    bestFor: '4K multi-camera capture when inspection detail matters. Confirm aggregate link bandwidth and the exact 6G driver mode.',
    imageUrl: 'https://50002352.s21i.huaweicloudsite.cn/2/ABUIABACGAAgibORqwYokLqhhgEw4g444g4.jpg',
    imageNote: 'Sensing product-page image; external shell shared across variants',
    bandwidth: 'GMSL2 6Gbps link (not image payload throughput)',
    specUrl: 'https://sensing-world.com/en/h-pd-26.html',
  }),
  {
    id: 'gemini-335lg', name: 'Orbbec Gemini 335LG', sku: '100010971', sensor: 'Active stereo depth + RGB', resolution: 'Depth up to 1280 × 800 @ 30 fps · RGB up to 1280 × 800 @ 60 fps', fov: '90° × 65° ±3°', fovGroup: null, lens: 'Fixed', fovBasis: 'Depth H × V at 2 m; RGB 94° × 68° ±3°', depthRange: '0.17–20 m+; ideal 0.25–6 m',
    interface: 'gmsl-depth', connector: 'GMSL2 Fakra camera; matching Mini-Fakra harness and extension board',
    features: ['depth', 'stereo', 'ir'],
    platforms: ['robotics-j40', 'j50', 'j601'], platformLabel: 'Robotics J401 / J501 / J601; J501 Mini announced separately',
    platformEvidence: {
      'robotics-j40': {level: 'workflow', text: 'Seeed demonstrates Gemini 335LG on Robotics J4012 + GMSL at JetPack 6.2.', url: gmslGuideLinks.gemini335lg},
      j50: {level: 'board', text: 'Listed in the Robotics J501 support list.', url: roboticsJ501},
      j601: {level: 'board', text: 'Listed in the Robotics J601 support list.', url: roboticsJ601},
      j50mini: {level: 'announcement', text: 'Seeed product announcement mentions J501 Mini, but its board setup steps are not yet published.', url: 'https://www.seeedstudio.com/blog/2025/12/25/recomputer-mini-j501-ultra-compact-open-source-robotics-controller-powered-by-nvidias-most-advanced-ai/'},
    },
    evidence: 'Seeed Gemini 335LG integration guide and Robotics board support lists',
    dataStatus: 'Bazaar SKU 100010971; the Seeed Wiki front matter uses a different SKU (100071398)',
    software: 'Seeed GMSL BSP/overlay and Orbbec SDK; J4012 guide uses JetPack 6.2',
    fps: 'Depth up to 1280 × 800 @ 30 fps; RGB up to 1280 × 800 @ 60 fps; confirm simultaneous modes', bandwidth: 'Confirm GMSL2 serializer and board driver',
    bestFor: 'Depth over a locked GMSL2 connection for AMRs. Confirm power, harness, overlay and Orbbec SDK together.',
    imageUrl: seeedImage('1/-/1-100010971-orbbec-gemini-335-lg.jpg'), imageCredit: 'Seeed Studio Bazaar',
    bazaarUrl: 'https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html',
    guideUrl: gmslGuideLinks.gemini335lg, specUrl: 'https://www.orbbec.com/gemini-335lg/',
  },
  {
    id: 'zed-x', name: 'Stereolabs ZED X', sku: 'ZED-311110', skuSource: 'Stereolabs', sensor: 'Dual 1/2.6-inch 2.3MP RGB global-shutter sensors',
    resolution: 'Stereo: 2 × 1920 × 1200 @ 60 fps; depth via ZED SDK', fov: '110° H × 80° V', fovGroup: null, lens: 'Wide 2.2 mm; narrow 4.6 mm option',
    fovBasis: 'Wide lens; narrow 73° H × 45° V', depthRange: 'Wide 0.3–20 m (ideal 0.3–12 m); narrow 1–35 m (ideal 1–20 m)',
    interface: 'gmsl-depth', connector: 'GMSL2 Fakra Z; confirm Mini-Fakra harness and extension board',
    features: ['stereo', 'depth'],
    platforms: ['j50mini', 'j50', 'robotics-j40', 'j601'], platformLabel: 'ZED X family: Robotics J50 Mini / J50 / J40 / J601; exact model to verify',
    evidence: zedEvidence, software: 'Seeed BSP/driver and ZED SDK v4.0 or later; match JetPack/L4T',
    platformEvidence: {
      j50mini: {level: 'family', text: 'Seeed shows a J50 Mini ZED X-series depth workflow; confirm this exact camera and lens variant in the installed BSP/SDK.', url: gmslGuideLinks.zed},
      j50: {level: 'family', text: 'Seeed lists the ZED X family for Robotics J50; exact camera/driver combination needs confirmation.', url: gmslGuideLinks.zed},
      'robotics-j40': {level: 'family', text: 'Seeed lists the ZED X family for Robotics J40; exact camera/driver combination needs confirmation.', url: gmslGuideLinks.zed},
      j601: {level: 'family', text: 'Seeed lists the ZED X family for Robotics J601; exact camera/driver combination needs confirmation.', url: gmslGuideLinks.zed},
    },
    dataStatus: 'Wide-lens manufacturer SKU shown; narrow ZED-312110. Seeed documents the family, not separate model-level test results.',
    specUrl: 'https://docs.stereolabs.com/docs/products/cameras/zedx/specifications',
    fps: '2 × 1920 × 1200 at 15/30/60 fps; confirm simultaneous depth mode', bandwidth: 'GMSL2; confirm board/link mode',
    bestFor: 'Longer-range stereo navigation. The 12 cm baseline favors more distant targets than ZED X Mini.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0699/6927/files/ZED_X-2.2mm-Tilted-side.jpg?width=856',
    imageCredit: 'Stereolabs', guideUrl: gmslGuideLinks.zed,
  },
  {
    id: 'zed-x-mini', name: 'Stereolabs ZED X Mini', sku: 'ZED-311210', skuSource: 'Stereolabs', sensor: 'Dual 1/2.6-inch 2.3MP RGB global-shutter sensors',
    resolution: 'Stereo: 2 × 1920 × 1200 @ 60 fps; depth via ZED SDK', fov: '110° H × 80° V', fovGroup: null, lens: 'Wide 2.2 mm; narrow 4.6 mm option',
    fovBasis: 'Wide lens; narrow 73° H × 45° V', depthRange: 'Wide 0.1–8 m (ideal 0.1–4 m); narrow 0.15–12 m (ideal 0.15–6 m)',
    interface: 'gmsl-depth', connector: 'GMSL2 Fakra Z; confirm Mini-Fakra harness and extension board',
    features: ['stereo', 'depth'],
    platforms: ['j50mini', 'j50', 'robotics-j40', 'j601'], platformLabel: 'ZED X family: Robotics J50 Mini / J50 / J40 / J601; exact model to verify',
    evidence: zedEvidence, software: 'Seeed BSP/driver and ZED SDK v4.0 or later; match JetPack/L4T',
    platformEvidence: {
      j50mini: {level: 'family', text: 'Seeed shows a J50 Mini ZED X-series depth workflow; confirm Mini-specific BSP/SDK support.', url: gmslGuideLinks.zed},
      j50: {level: 'family', text: 'Seeed lists the ZED X family for Robotics J50; Mini-specific setup remains to verify.', url: gmslGuideLinks.zed},
      'robotics-j40': {level: 'family', text: 'Seeed lists the ZED X family for Robotics J40; Mini-specific setup remains to verify.', url: gmslGuideLinks.zed},
      j601: {level: 'family', text: 'Seeed lists the ZED X family for Robotics J601; Mini-specific setup remains to verify.', url: gmslGuideLinks.zed},
    },
    dataStatus: 'Wide-lens manufacturer SKU shown; narrow ZED-312210. Seeed documents the family, not separate Mini test results.',
    specUrl: 'https://docs.stereolabs.com/docs/products/cameras/zedx/specifications',
    fps: '2 × 1920 × 1200 at 15/30/60 fps; confirm simultaneous depth mode', bandwidth: 'GMSL2; confirm board/link mode',
    bestFor: 'Close-range stereo on compact robots. The 5 cm baseline supports a shorter minimum distance than ZED X.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0699/6927/files/ZED-X-Mini-2.2mm-Side.jpg?width=856',
    imageCredit: 'Stereolabs', guideUrl: gmslGuideLinks.zed,
  },
  {
    id: 'zed-x-one-gs', name: 'Stereolabs ZED X One GS', sku: 'ZED-412010', skuSource: 'Stereolabs', sensor: 'onsemi AR0234 · 2.3MP RGB global shutter',
    resolution: 'RGB: 1920 × 1200 @ 60 fps', fov: '110° H × 80° V', fovGroup: null, lens: 'Wide 2.2 mm; narrow 4.6 mm option',
    fovBasis: 'Wide lens; narrow 73° H × 45° V', depthRange: '—',
    interface: 'gmsl', connector: 'GMSL2 Fakra Z; confirm Mini-Fakra harness and extension board',
    features: [],
    platforms: [], platformLabel: 'Exact reComputer model-level support not documented',
    evidence: 'Stereolabs model specification; Seeed ZED X-series guide does not identify One GS separately',
    platformEvidence: {}, software: 'ZED SDK v4.2 or later for One GS; confirm Seeed BSP/driver for the exact host',
    dataStatus: 'Wide-lens manufacturer SKU shown; narrow ZED-413010. One camera is monocular; stereo depth requires a second matched camera and calibration.',
    specUrl: 'https://docs.stereolabs.com/docs/products/cameras/zedxone/specifications',
    fps: '1920 × 1200 at 15/30/60 fps', bandwidth: 'GMSL2; confirm board/link mode',
    bestFor: 'Single-camera RGB capture. A calibrated pair of One GS units can form a custom stereo rig; one unit does not output stereo depth.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0699/6927/files/ZEDOne-Front45-2.2mmWideLens.webp',
    imageCredit: 'Stereolabs', guideUrl: gmslGuideLinks.zed,
  },
];

// Published image modes. A missing value is deliberately not inferred
// from the prose above. Resolution is per image/per eye, never a stereo pixel sum.
const rgb = (width, height, fps) => ({width, height, ...(fps ? {fps} : {})});
const diag = (degrees) => ({stream: 'rgb', axis: 'diagonal', degrees});
const hv = (stream, horizontal, vertical, uncertainty = 0) =>
  ({stream, axis: 'hv', horizontal, vertical, uncertainty});

const imageSpecifications = {
  'imx219-77': {rgb: rgb(3280, 2464), fov: diag(77)},
  'imx219-77ir': {rgb: rgb(3280, 2464), fov: diag(77)},
  'imx219-130': {rgb: rgb(3280, 2464), fov: diag(130)},
  'imx219-160': {rgb: rgb(3280, 2464), fov: diag(160)},
  'imx219-160ir': {rgb: rgb(3280, 2464), fov: diag(160)},
  'imx219-200': {rgb: rgb(3280, 2464), fov: diag(200)},
  'camera-v2': {rgb: rgb(3280, 2464), fov: hv('rgb', 62.2, 48.8)},
  'imx219-mount': {rgb: rgb(3280, 2464)},
  'imx219-83': {rgb: {...rgb(3280, 2464), perEye: true}, fov: diag(83)},
  'pi-hq': {rgb: rgb(4056, 3040)},
  'pi-hq-m12': {rgb: rgb(4056, 3040)},
  'hq-cm-jetson': {rgb: rgb(4056, 3040)},
  'x10-usb': {rgb: rgb(1920, 1080)},
  'et-s231-90': {rgb: rgb(1920, 1080, 30), fov: diag(90)},
  'et-s231-120': {rgb: rgb(1920, 1080, 30), fov: diag(120)},
  'ov9732-usb': {rgb: rgb(1280, 720)},
  'gemini-2': {rgb: rgb(1920, 1080, 30), depth: rgb(1280, 800, 30), fov: hv('depth', 91, 66)},
  'gemini-336': {rgb: rgb(1920, 1080, 30), depth: rgb(1280, 800, 30), fov: hv('depth', 90, 65)},
  d435i: {rgb: rgb(1920, 1080, 30), depth: rgb(1280, 720), fov: hv('depth', 87, 58)},
  d405: {rgb: rgb(1280, 720, 30), depth: rgb(1280, 720), fov: hv('depth', 87, 58)},
  'sg3s-f': {rgb: rgb(1920, 1536, 30), fov: hv('rgb', 196, 154)},
  'sg3s-h': {rgb: rgb(1920, 1536, 30)},
  'sg2-ar0233': {rgb: rgb(1920, 1080, 30)},
  'sg2-imx390': {rgb: rgb(1920, 1080, 30)},
  'sg8s-ar0820': {rgb: rgb(3840, 2160, 30)},
  'gemini-335lg': {rgb: rgb(1280, 800, 60), depth: rgb(1280, 800, 30), fov: hv('depth', 90, 65, 3)},
  'zed-x': {rgb: {...rgb(1920, 1200, 60), perEye: true}, depth: rgb(1920, 1200), fov: hv('depth', 110, 80)},
  'zed-x-mini': {rgb: {...rgb(1920, 1200, 60), perEye: true}, depth: rgb(1920, 1200), fov: hv('depth', 110, 80)},
  'zed-x-one-gs': {rgb: rgb(1920, 1200, 60), fov: hv('rgb', 110, 80)},
};

// Coverage is a qualitative choice, not a cross-axis comparison of FOV numbers.
// Lens selection and missing angle information are separate choices.
const coverageGroups = {
  'imx219-77': 'standard', 'imx219-77ir': 'standard', 'imx219-130': 'wide',
  'imx219-160': 'wide', 'imx219-160ir': 'wide', 'imx219-200': 'ultra',
  'camera-v2': 'standard', 'imx219-mount': 'lens', 'imx219-83': 'standard',
  'pi-hq': 'lens', 'pi-hq-m12': 'lens', 'hq-cm-jetson': 'lens',
  'x10-usb': 'unlisted', 'et-s231-90': 'standard', 'et-s231-120': 'wide',
  'ov9732-usb': 'unlisted', 'gemini-2': 'standard', 'gemini-336': 'standard',
  d435i: 'standard', d405: 'standard', 'sg3s-f': 'ultra', 'sg3s-h': 'lens',
  'sg2-ar0233': 'lens', 'sg2-imx390': 'lens', 'sg8s-ar0820': 'lens',
  'gemini-335lg': 'standard', 'zed-x': 'wide', 'zed-x-mini': 'wide', 'zed-x-one-gs': 'wide',
};

// Link rate is only a filter for Sensing GMSL2 RGB variants with a stated mode.
const gmslLinkGbps = {
  'sg3s-f': 3,
  'sg3s-h': 6,
  'sg2-ar0233': 6,
  'sg2-imx390': 6,
  'sg8s-ar0820': 6,
};

export {platformOptions, platformInterfaces, platformExcludedCameras} from './platformData.js';

export const interfaceOptions = [
  { id: 'all', label: 'Any connection' },
  { id: 'csi', label: 'CSI' },
  { id: 'usb', label: 'USB' },
  { id: 'gmsl', label: 'GMSL2' },
];

// These studio photos have room on both sides of the complete product in a
// square frame. Keep all other images contained, without zooming the subject.
const squarePhotoIds = new Set(['x10-usb', 'gemini-2', 'gemini-336', 'd405', 'sg3s-f', 'sg3s-h', 'gemini-335lg']);

// Numeric ranges refer to the displayed lens variant. Open maxima are never ranked.
const depthRanges = {
  'gemini-2': {workingMinM: 0.15, workingMaxM: 10, idealMinM: 0.2, idealMaxM: 5,
    idealBasis: 'Unbinned Dense / Sparse Default modes (not binned mode).',
    idealSource: 'https://www.orbbec.com/wp-content/uploads/2023/04/ORBBEC_Datasheet_Gemini-2.pdf'},
  'gemini-336': {workingMinM: 0.1, workingMaxM: 20, openMax: true, idealMinM: 0.26, idealMaxM: 3,
    idealBasis: 'Gemini 336 model specification; published optimal range.',
    idealSource: 'https://www.orbbec.com/products/stereo-vision-camera/gemini-336/'},
  d435i: {idealMinM: 0.3, idealMaxM: 3,
    idealBasis: 'D435i model specification; published ideal range.',
    idealSource: 'https://www.realsenseai.com/products/depth-camera-d435i/'},
  d405: {workingMinM: 0.07, minimumNote: 'at 480p', idealMinM: 0.07, idealMaxM: 0.5,
    idealBasis: 'Standard D405 ideal range: 7–50 cm. No extended software mode assumed.',
    idealSource: 'https://www.realsenseai.com/product-family/d405-series/'},
  'gemini-335lg': {workingMinM: 0.17, workingMaxM: 20, openMax: true, idealMinM: 0.25, idealMaxM: 6,
    idealBasis: 'Gemini 335Lg model specification; published optimal range.',
    idealSource: 'https://www.orbbec.com/gemini-335lg/'},
  'zed-x': {workingMinM: 0.3, workingMaxM: 20, idealMinM: 0.3, idealMaxM: 12,
    idealBasis: 'Wide 2.2 mm lens, ZED-311110; depth via ZED SDK. Not the narrow-lens variant.',
    idealSource: 'https://docs.stereolabs.com/docs/products/cameras/zedx/specifications'},
  'zed-x-mini': {workingMinM: 0.1, workingMaxM: 8, idealMinM: 0.1, idealMaxM: 4,
    idealBasis: 'Wide 2.2 mm lens, ZED-311210; depth via ZED SDK. Not the narrow-lens variant.',
    idealSource: 'https://docs.stereolabs.com/docs/products/cameras/zedx/specifications'},
};

const imageViews = {
  'gemini-336': hv('rgb', 86, 55),
  d435i: hv('rgb', 69, 42),
  d405: hv('rgb', 87, 58),
  'gemini-335lg': hv('rgb', 94, 68, 3),
  'zed-x': hv('rgb', 110, 80),
  'zed-x-mini': hv('rgb', 110, 80),
};

const variantNotes = {
  'zed-x': 'Shown: wide 2.2 mm, ZED-311110. Narrow 4.6 mm (ZED-312110): 73° H × 45° V; working depth 1–35 m, ideal 1–20 m.',
  'zed-x-mini': 'Shown: wide 2.2 mm, ZED-311210. Narrow 4.6 mm (ZED-312210): 73° H × 45° V; working depth 0.15–12 m, ideal 0.15–6 m.',
  'zed-x-one-gs': 'Shown: wide 2.2 mm, ZED-412010. Narrow 4.6 mm (ZED-413010): 73° H × 45° V. One camera provides monocular images.',
};

// All rendered views use specs; the original catalogue prose above is not parsed
// for numbers. Image resolution is RGB/per eye, separate from a depth-map mode.
export const cameras = cameraRecords.map((record) => {
  const {resolution, fov, fovBasis, depthRange, lens, interface: legacyInterface, ...camera} = record;
  const published = imageSpecifications[camera.id];
  const output = camera.features.includes('depth') ? 'depth' : 'image';
  const view = published.fov || (camera.id === 'ov9732-usb'
    ? {stream: 'rgb', axis: 'unspecified', degrees: 100}
    : {stream: 'rgb', axis: coverageGroups[camera.id] === 'lens' ? 'lens' : 'unspecified'});
  return {
    ...camera,
    connection: legacyInterface === 'gmsl-depth' ? 'gmsl' : legacyInterface,
    output,
    coverage: coverageGroups[camera.id],
    cardImageFit: squarePhotoIds.has(camera.id) ? 'cover' : 'contain',
    specUrl: camera.id === 'camera-v2'
      ? 'https://www.raspberrypi.com/documentation/accessories/camera.html#technical-information'
      : camera.specUrl || camera.bazaarUrl,
    specs: {
      image: published.rgb,
      depth: published.depth,
      imageFov: view.stream === 'rgb' ? view : imageViews[camera.id],
      depthFov: view.stream === 'depth' ? view : undefined,
      range: depthRanges[camera.id],
      lens,
      linkGbps: gmslLinkGbps[camera.id],
      variantNote: variantNotes[camera.id],
    },
  };
});
