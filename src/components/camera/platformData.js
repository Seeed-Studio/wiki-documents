// Exact device records retain Flash_Jetpack.mdx names, IDs, images and ordering.
// Series labels are normalized for this picker; J601 and Rugged are Wiki additions.
// platformData.test.mjs checks the sources without importing MDX into the runtime.
// Profiles describe candidates in this camera catalogue, not board-level validation.
export const platformProfiles = {
  'csi-usb': {connections: ['csi', 'usb']},
  usb: {connections: ['usb']},
  'gmsl-usb': {connections: ['usb', 'gmsl']},
  'industrial-gmsl': {
    connections: ['usb', 'gmsl'],
    excludedCameras: ['zed-x', 'zed-x-mini', 'zed-x-one-gs'],
  },
};

export const platformFamilies = [
  {
    "id": "super",
    "name": "reComputer Super",
    "series": "J30/J40",
    "profile": "csi-usb",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010_1.jpg"
  },
  {
    "id": "mini",
    "name": "reComputer mini",
    "series": "J30/J40",
    "profile": "usb",
    "imageUrl": "https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"
  },
  {
    "id": "robotics-j40",
    "name": "reComputer Robotics",
    "series": "J30/J40",
    "profile": "gmsl-usb",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg"
  },
  {
    "id": "classic",
    "name": "reComputer",
    "series": "J30/J40",
    "profile": "csi-usb",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg"
  },
  {
    "id": "classic-j501",
    "name": "reComputer Classic",
    "series": "J501",
    "profile": "usb",
    "imageUrl": "https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/100006184-gallery_img_1.jpg"
  },
  {
    "id": "industrial",
    "name": "reComputer Industrial",
    "series": "J30/J40",
    "profile": "csi-usb",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg"
  },
  {
    "id": "reserver",
    "name": "reServer Industrial",
    "series": "J30/J40",
    "profile": "usb",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110247-reserver-industrial-j4012-first.jpg"
  },
  {
    "id": "industrial-j501",
    "name": "reServer Industrial",
    "series": "J501",
    "profile": "industrial-gmsl",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_2.jpg"
  },
  {
    "id": "j50mini",
    "name": "reComputer Robotics",
    "series": "J501 Mini",
    "profile": "gmsl-usb",
    "imageUrl": "https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg"
  },
  {
    "id": "j50",
    "name": "reComputer Robotics",
    "series": "J501",
    "profile": "gmsl-usb",
    "imageUrl": "https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"
  },
  {
    "id": "j601",
    "name": "reComputer Robotics",
    "series": "J601",
    "profile": "gmsl-usb",
    "imageUrl": "https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg"
  },
  {
    "id": "rugged",
    "name": "reComputer Rugged",
    "series": "J30/J40",
    "profile": "usb",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg"
  }
].map((family) => ({...family, label: `${family.name} ${family.series}`}));

// USB-only here does not mean no CSI signals exist on the board:
// Classic J501 needs a 120-pin BTB camera adapter; mini expansion and
// reServer J30/J40 PoE do not establish support for this CSI/GMSL catalogue.
// Rugged J4012/J3011 list waterproof USB connectors, not this catalogue's
// 15-pin CSI/GMSL connections: /ai_robotics_recomputer_rugged_j40_getting_started/
export const platformDevices = [
  {
    "id": "j4012s",
    "label": "reComputer Super J4012",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010_1.jpg",
    "familyId": "super"
  },
  {
    "id": "j4011s",
    "label": "reComputer Super J4011",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010-8g.jpg",
    "familyId": "super"
  },
  {
    "id": "j3011s",
    "label": "reComputer Super J3011",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010-nano-8g.jpg",
    "familyId": "super"
  },
  {
    "id": "j3010s",
    "label": "reComputer Super J3010",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010-nano-4g.jpg",
    "familyId": "super"
  },
  {
    "id": "j4012mini",
    "label": "reComputer mini J4012",
    "imageUrl": "https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg",
    "familyId": "mini"
  },
  {
    "id": "j4011mini",
    "label": "reComputer mini J4011",
    "imageUrl": "https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg",
    "familyId": "mini"
  },
  {
    "id": "j3011mini",
    "label": "reComputer mini J3011",
    "imageUrl": "https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg",
    "familyId": "mini"
  },
  {
    "id": "j3010mini",
    "label": "reComputer mini J3010",
    "imageUrl": "https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg",
    "familyId": "mini"
  },
  {
    "id": "j4012robotics",
    "label": "reComputer robotics J4012",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg",
    "familyId": "robotics-j40"
  },
  {
    "id": "j4011robotics",
    "label": "reComputer robotics J4011",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg",
    "familyId": "robotics-j40"
  },
  {
    "id": "j3011robotics",
    "label": "reComputer robotics J3011",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg",
    "familyId": "robotics-j40"
  },
  {
    "id": "j3010robotics",
    "label": "reComputer robotics J3010",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg",
    "familyId": "robotics-j40"
  },
  {
    "id": "j4012classic",
    "label": "reComputer J4012 / reComputer J4012B",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg",
    "familyId": "classic"
  },
  {
    "id": "j4011classic",
    "label": "reComputer J4011 / reComputer J4011B",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg",
    "familyId": "classic"
  },
  {
    "id": "j3011classic",
    "label": "reComputer J3011 / reComputer J3011B",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg",
    "familyId": "classic"
  },
  {
    "id": "j3010classic",
    "label": "reComputer J3010 / reComputer J3010B",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg",
    "familyId": "classic"
  },
  {
    "id": "j5012classic",
    "label": "reComputer Classic J5012",
    "imageUrl": "https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/100006184-gallery_img_1.jpg",
    "familyId": "classic-j501"
  },
  {
    "id": "j5011classic",
    "label": "reComputer Classic J5011",
    "imageUrl": "https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/100006184-gallery_img_1.jpg",
    "familyId": "classic-j501"
  },
  {
    "id": "j4012industrial",
    "label": "reComputer industrial J4012",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg",
    "familyId": "industrial"
  },
  {
    "id": "j4011industrial",
    "label": "reComputer industrial J4011",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg",
    "familyId": "industrial"
  },
  {
    "id": "j3011industrial",
    "label": "reComputer industrial J3011",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg",
    "familyId": "industrial"
  },
  {
    "id": "j3010industrial",
    "label": "reComputer industrial J3010",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg",
    "familyId": "industrial"
  },
  {
    "id": "j2012industrial",
    "label": "reComputer industrial J2012",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg",
    "familyId": "industrial"
  },
  {
    "id": "j2011industrial",
    "label": "reComputer industrial J2011",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg",
    "familyId": "industrial"
  },
  {
    "id": "j4012reserver",
    "label": "reServer industrial J4012",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110247-reserver-industrial-j4012-first.jpg",
    "familyId": "reserver"
  },
  {
    "id": "j4011reserver",
    "label": "reServer industrial J4011",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110248-reserver-industrial-j4011-first.jpg",
    "familyId": "reserver"
  },
  {
    "id": "j3011reserver",
    "label": "reServer industrial J3011",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110249-reserver-industrial-j3011-first_1.jpg",
    "familyId": "reserver"
  },
  {
    "id": "j3010reserver",
    "label": "reServer industrial J3010",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110250-reserver-industrial-j3010-first.jpg",
    "familyId": "reserver"
  },
  {
    "id": "j501-carrier AGX-Orin 64g",
    "label": "reServer industrial J501 AGX-Orin 64g",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_2.jpg",
    "familyId": "industrial-j501"
  },
  {
    "id": "j501-carrier AGX-Orin 32g",
    "label": "reServer industrial J501 AGX-Orin 32g",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_2.jpg",
    "familyId": "industrial-j501"
  },
  {
    "id": "j501mini-agx-orin-64g",
    "label": "reComputer Robotics J501 Mini AGX-Orin 64GB",
    "imageUrl": "https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg",
    "familyId": "j50mini"
  },
  {
    "id": "j501mini-agx-orin-32g",
    "label": "reComputer Robotics J501 Mini AGX-Orin 32GB",
    "imageUrl": "https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg",
    "familyId": "j50mini"
  },
  {
    "id": "j501-agx-orin-64g",
    "label": "reComputer Robotics J501 AGX-Orin 64GB",
    "imageUrl": "https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg",
    "familyId": "j50"
  },
  {
    "id": "j501-agx-orin-32g",
    "label": "reComputer Robotics J501 AGX-Orin 32GB",
    "imageUrl": "https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg",
    "familyId": "j50"
  },
  {
    "id": "j601",
    "label": "reComputer Robotics J601",
    "imageUrl": "https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg",
    "familyId": "j601"
  },
  {
    "id": "rugged-j4012",
    "label": "reComputer Rugged J4012",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg",
    "familyId": "rugged"
  },
  {
    "id": "rugged-j3011",
    "label": "reComputer Rugged J3011",
    "imageUrl": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg",
    "familyId": "rugged"
  }
];

// The picker selects a series; exact models above are retained only to audit
// coverage against the flash page, not as a second selection step.
export const platformOptions = [{id: 'all', label: 'Not selected'}, ...platformFamilies];

const familyProfiles = Object.fromEntries(platformFamilies.map((family) =>
  [family.id, platformProfiles[family.profile]]));

export const platformInterfaces = Object.fromEntries(platformFamilies.map((family) =>
  [family.id, familyProfiles[family.id].connections]));

export const platformExcludedCameras = Object.fromEntries(platformFamilies.map((family) =>
  [family.id, familyProfiles[family.id].excludedCameras || []]));

export function devicesForFamily(familyId) {
  return platformDevices.filter((device) => device.familyId === familyId);
}
