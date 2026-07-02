// 共享产品数据 - 用于 Flash_Jetpack.mdx 和 index.tsx
// 数据来源: docs/Edge/NVIDIA_Jetson/Flash_Jetpack.mdx

export type SupportedLang = 'en' | 'zh' | 'ja' | 'es' | 'pt';

export interface LocalizedUrl {
  en: string;
  zh: string;
  ja: string;
  es: string;
  pt: string;
}

export interface ProductOption {
  value: string;
  label: string;
  l4t: string[];
  img: string;
  interfaceUsage: LocalizedUrl;
  flashUrl?: LocalizedUrl;
}

const createLocalizedWikiUrl = (enUrl: string): LocalizedUrl => {
  const base = 'https://wiki.seeedstudio.com';
  const normalized = enUrl.replace(/^https:\/\/wiki\.seeedstudio\.com/, '').replace(/^\/(cn|ja|es|pt-br)(\/|$)/, '/');

  return {
    en: `${base}${normalized}`,
    zh: `${base}/cn${normalized}`,
    ja: `${base}/ja${normalized}`,
    es: `${base}/es${normalized}`,
    pt: `${base}/pt-br${normalized}`
  };
};

export const productOptions: ProductOption[] = [
  {
    value: 'j4012s',
    label: 'reComputer Super J4012',
    l4t: ["39.2.0", "36.4.3"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010_1.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_super_hardware_interfaces_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j4011s',
    label: 'reComputer Super J4011',
    l4t: ["39.2.0", "36.4.3"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010-8g.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_super_hardware_interfaces_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j3011s',
    label: 'reComputer Super J3011',
    l4t: ["39.2.0", "36.4.3"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010-nano-8g.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_super_hardware_interfaces_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j3010s',
    label: 'reComputer Super J3010',
    l4t: ["39.2.0", "36.4.3"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010-nano-4g.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_super_hardware_interfaces_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j4012mini',
    label: 'reComputer mini J4012',
    l4t: ["36.3.0", "35.5.0"],
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_mini_hardware_interfaces_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j4011mini',
    label: 'reComputer mini J4011',
    l4t: ["36.3.0", "35.5.0"],
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_mini_hardware_interfaces_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j3011mini',
    label: 'reComputer mini J3011',
    l4t: ["36.4.3", "36.3.0", "35.5.0"],
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_mini_hardware_interfaces_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j3010mini',
    label: 'reComputer mini J3010',
    l4t: ["36.4.3", "36.3.0", "35.5.0"],
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_mini_hardware_interfaces_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j4012robotics',
    label: 'reComputer robotics J4012',
    l4t: ["39.2.0", "36.4.3"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_robotics_j401_getting_started/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j4011robotics',
    label: 'reComputer robotics J4011',
    l4t: ["39.2.0", "36.4.3"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_robotics_j401_getting_started/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j3011robotics',
    label: 'reComputer robotics J3011',
    l4t: ["39.2.0", "36.4.3"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_robotics_j401_getting_started/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j3010robotics',
    label: 'reComputer robotics J3010',
    l4t: ["39.2.0", "36.4.3"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_robotics_j401_getting_started/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j4012classic',
    label: 'reComputer J4012 / reComputer J4012B',
    l4t: ["39.2.0", "36.4.3", "36.4.0", "36.3.0", "35.5.0"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/J401_carrierboard_Hardware_Interfaces_Usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j4011classic',
    label: 'reComputer J4011 / reComputer J4011B',
    l4t: ["39.2.0", "36.4.3", "36.4.0", "36.3.0", "35.5.0"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/J401_carrierboard_Hardware_Interfaces_Usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j3011classic',
    label: 'reComputer J3011 / reComputer J3011B',
    l4t: ["39.2.0", "36.4.3", "36.4.0", "36.3.0", "35.5.0"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/J401_carrierboard_Hardware_Interfaces_Usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j3010classic',
    label: 'reComputer J3010 / reComputer J3010B',
    l4t: ["39.2.0", "36.4.3", "36.4.0", "36.3.0", "35.5.0"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/J401_carrierboard_Hardware_Interfaces_Usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j4012industrial',
    label: 'reComputer industrial J4012',
    l4t: ["39.2.0", "36.4.0", "36.3.0", "35.5.0", "35.3.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Flash_Jetpack/')
  },
  {
    value: 'j4011industrial',
    label: 'reComputer industrial J4011',
    l4t: ["39.2.0", "36.4.0", "36.3.0", "35.5.0", "35.3.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Flash_Jetpack/')
  },
  {
    value: 'j3011industrial',
    label: 'reComputer industrial J3011',
    l4t: ["39.2.0", "36.4.3", "36.4.0", "36.3.0", "35.5.0", "35.3.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Flash_Jetpack/')
  },
  {
    value: 'j3010industrial',
    label: 'reComputer industrial J3010',
    l4t: ["39.2.0", "36.4.3", "36.4.0", "36.3.0", "35.5.0", "35.3.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Flash_Jetpack/')
  },
  {
    value: 'j2012industrial',
    label: 'reComputer industrial J2012',
    l4t: ["35.5.0", "35.3.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J20_Hardware_Interfaces_Usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J20_Flash_Jetpack/')
  },
  {
    value: 'j2011industrial',
    label: 'reComputer industrial J2011',
    l4t: ["35.5.0", "35.3.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J20_Hardware_Interfaces_Usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Industrial_J20_Flash_Jetpack/')
  },
  {
    value: 'j4012reserver',
    label: 'reServer industrial J4012',
    l4t: ["39.2.0", "36.4.3", "36.4.0", "36.3.0", "35.5.0", "35.3.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110247-reserver-industrial-j4012-first.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reserver_industrial_hardware_interface_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reServer_Industrial_Getting_Started/')
  },
  {
    value: 'j4011reserver',
    label: 'reServer industrial J4011',
    l4t: ["39.2.0", "36.4.3", "36.4.0", "36.3.0", "35.5.0", "35.3.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110248-reserver-industrial-j4011-first.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reserver_industrial_hardware_interface_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reServer_Industrial_Getting_Started/')
  },
  {
    value: 'j3011reserver',
    label: 'reServer industrial J3011',
    l4t: ["39.2.0", "36.4.3", "36.4.0", "36.3.0", "35.5.0", "35.3.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110249-reserver-industrial-j3011-first_1.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reserver_industrial_hardware_interface_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reServer_Industrial_Getting_Started/')
  },
  {
    value: 'j3010reserver',
    label: 'reServer industrial J3010',
    l4t: ["39.2.0", "36.4.3", "36.4.0", "36.3.0", "35.5.0", "35.3.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110250-reserver-industrial-j3010-first.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reserver_industrial_hardware_interface_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reServer_Industrial_Getting_Started/')
  },
  {
    value: 'j501-carrier',
    label: 'reServer industrial J501 Carrier Board',
    l4t: ["36.4.3 (GMSL❌)", "36.4.3 (GMSL✅)", "36.3.0 (GMSL❌)", "36.3.0 (GMSL✅)", "35.5.0 (GMSL❌)", "35.5.0 (GMSL✅)"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_2.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/j501_carrier_board_interfaces_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reServer_Industrial_J501_Getting_Started/')
  },
  {
    value: 'j501mini',
    label: 'reComputer Robotics J501 Mini',
    l4t: ["39.2.0", "36.4.4 (GMSL✅)"],
    img: 'https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_j501_mini_getting_started/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J501_Mini_Flash_Jetpack/')
  },
  {
    value: 'j5012robotics',
    label: 'reComputer robotics J5012',
    l4t: ["39.2.0", "36.4.4 (GMSL✅)"],
    img: 'https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/ai_robotics_recomputer_j501_robotics_getting_started/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J501_Flash_Jetpack/')
  },
  {
    value: 'j5011robotics',
    label: 'reComputer robotics J5011',
    l4t: ["39.2.0", "36.4.4 (GMSL✅)"],
    img: 'https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/ai_robotics_recomputer_j501_robotics_getting_started/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J501_Flash_Jetpack/')
  },
  // ==================== Carrier Boards ====================
  {
    value: 'a203',
    label: 'A203 Carrier Board',
    l4t: ["32.6.1", "32.5.1"],
    img: 'https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A203/Flash_A203.jpeg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A203_Flash_System/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A203_Flash_System/')
  },
  {
    value: 'a205',
    label: 'A205 Carrier Board',
    l4t: ["32.6.1", "32.5.1"],
    img: 'https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A205.png',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A205_Flash_System/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A205_Flash_System/')
  },
  {
    value: 'a603',
    label: 'A603 Carrier Board',
    l4t: ["35.2.1", "35.3.1", "36.3.0"],
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/A603_Carrier_Board.png',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A603_Flash_System/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A603_Flash_System/')
  },
  {
    value: 'a607',
    label: 'A607 Carrier Board',
    l4t: ["35.2.1", "35.3.1", "36.3.0"],
    img: 'https://files.seeedstudio.com/wiki/A607/1.png',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A607_Flash_System/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A607_Flash_System/')
  },
  {
    value: 'a608',
    label: 'A608 Carrier Board',
    l4t: ["35.2.1", "35.3.1", "36.3.0", "36.4.0"],
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A608_Flash_System/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A608_Flash_System/')
  },
  {
    value: 'j101',
    label: 'J101 Carrier Board',
    l4t: ["32.6.1", "32.5.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/102991694_-_45font_1.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/')
  },
  {
    value: 'j202',
    label: 'J202 Carrier Board',
    l4t: ["32.6.1", "32.5.1"],
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/carrier_board-Photoroom.png',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack/')
  },
  {
    value: 'j401',
    label: 'J401 Carrier Board',
    l4t: ["35.2.1", "35.3.1", "36.3.0", "36.4.0"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110769-recomputer-j401-45font.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/J401_carrierboard_Hardware_Interfaces_Usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  {
    value: 'j401-mini',
    label: 'J401-Mini Carrier Board',
    l4t: ["35.2.1", "35.3.1", "36.3.0", "36.4.0"],
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/recomputer-mini-1.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/j401_mini_carrierboard_hardware_interfaces_usage/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_Mini_J4012_Flash_Jetpack/')
  },
  {
    value: 'j501-mini',
    label: 'J501-Mini Carrier Board',
    l4t: ["36.4.4"],
    img: 'https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_j501_mini_getting_started/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J501_Mini_Flash_Jetpack/')
  },
  {
    value: 'j401-robotics',
    label: 'J401-Robotics Carrier Board',
    l4t: ["36.4.3", "36.3.0", "35.5.0"],
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics-carrier-board.png',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/recomputer_jetson_robotics_j401_getting_started/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/')
  },
  // ==================== Other Devices ====================
  {
    value: 'a203e',
    label: 'A203E Mini PC',
    l4t: ["32.6.1", "32.5.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/2/a203_mini_pc_-1.png',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A203E_Flash_System/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A203E_Flash_System/')
  },
  {
    value: 'a205e',
    label: 'A205E Mini PC',
    l4t: ["32.6.1", "32.5.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110148-a205e-mini-pc-45font.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A205E_Flash_System/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/reComputer_A205E_Flash_System/')
  },
  {
    value: 'jetson-mate',
    label: 'Jetson Mate',
    l4t: ["32.6.1", "32.5.1"],
    img: 'https://files.seeedstudio.com/wiki/Jetson-Mate/banner-2.png',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/Jetson-Mate/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/Jetson-Mate/')
  },
  {
    value: 't906',
    label: 'Mini AI Computer T906',
    l4t: ["35.1.0", "35.2.1", "35.3.1"],
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/4/-/4-114110168_-mini-ai-computer-t906-45back.jpg',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/Mini_AI_Computer_T906/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/Mini_AI_Computer_T906/')
  },
  {
    value: 'agx-orin-h01',
    label: 'Jetson AGX Orin 32GB H01 Kit',
    l4t: ["35.1.0", "35.2.1", "35.3.1", "35.4.1", "36.3.0"],
    img: 'https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/')
  },
  {
    value: 'xavier-agx-h01',
    label: 'Jetson Xavier AGX H01 Kit',
    l4t: ["32.6.1", "32.5.1"],
    img: 'https://files.seeedstudio.com/wiki/recomputerzhongwen/first_1.png',
    interfaceUsage: createLocalizedWikiUrl('https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation/'),
    flashUrl: createLocalizedWikiUrl('https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation/')
  }
];

// 转换为对象格式供 index.tsx 使用
export const PRODUCT_DATA = Object.fromEntries(
  productOptions.map(p => [p.value, {
    name: p.label,
    image: p.img,
    flashUrl: p.flashUrl || { en: '', zh: '', ja: '', es: '', pt: '' },
    interfaceUrl: p.interfaceUsage
  }])
);

// 产品分类映射 - 用于 index.tsx 的 tab 分类
// 注意：filter 顺序很重要，更具体的匹配应该在前
export const PRODUCT_CATEGORIES = {
  carrier: { key: 'carrier', label: 'Carrier Board', filter: (p: ProductOption) => ['a203', 'a203v2', 'a205', 'a603', 'a607', 'a608', 'j101', 'j202', 'j401', 'j501-carrier-board', 'j401-mini', 'j501-mini', 'j401-robotics', 'j501-carrier'].includes(p.value) },
  super: { key: 'super', label: 'Super', filter: (p: ProductOption) => p.value.endsWith('s') && !p.value.includes('robotics') },
  mini: { key: 'mini', label: 'Mini', filter: (p: ProductOption) => p.value.includes('mini') && !p.value.includes('j501') && !['j401-mini', 'j501-mini'].includes(p.value) },
  robotics: { key: 'robotics', label: 'Robotics', filter: (p: ProductOption) => (p.value.includes('robotics') && p.value !== 'j401-robotics') || (p.value === 'j501') },
  classic: { key: 'classic', label: 'Classic', filter: (p: ProductOption) => p.value.includes('classic') },
  industrial: { key: 'industrial', label: 'Industrial', filter: (p: ProductOption) => p.value.includes('industrial') || p.value.includes('reserver') || p.value.includes('j501-carrier') },
  other: { key: 'other', label: 'Other', filter: (p: ProductOption) => ['jetson-mate', 't906', 'agx-orin-h01', 'xavier-agx-h01', 'a203e', 'a205e'].includes(p.value) }
};
