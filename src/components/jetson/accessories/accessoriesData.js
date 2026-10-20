/**
 * Accessories data for Jetson Accessories Selection Guide.
 * All items have been tested (✅) by Seeed Studio.
 *
 * Factory functions: ssd(), wifi(), lte() create records with
 * common properties for each accessory category.
 *
 * Bilingual: every Chinese field has an English counterpart (xxxEn).
 * The component selects the appropriate field based on the URL path.
 */

const IMG_BASE = 'https://aka.doubaocdn.com';

const ssd = (item) => ({
  category: 'ssd',
  categoryLabel: 'SSD',
  interface: 'm2m',
  interfaceLabel: 'M.2 Key M',
  source: 'seeed',
  sourceLabel: 'Seeed Bazaar',
  sourceLabelEn: 'Seeed Bazaar',
  evidence: '✅ 已测试',
  evidenceEn: '✅ Tested',
  ...item,
});

const wifi = (item) => ({
  category: 'wifi',
  categoryLabel: 'WiFi',
  source: 'seeed',
  sourceLabel: 'Seeed Bazaar',
  sourceLabelEn: 'Seeed Bazaar',
  evidence: '✅ 已测试',
  evidenceEn: '✅ Tested',
  ...item,
});

const lte = (item) => ({
  category: '4g',
  categoryLabel: '4G',
  source: 'seeed',
  sourceLabel: 'Seeed Bazaar',
  sourceLabelEn: 'Seeed Bazaar',
  evidence: '✅ 已测试',
  evidenceEn: '✅ Tested',
  ...item,
});

/** @type {Record<string, {label:string; devices:string[]}>} */
const deviceSeries = {
  classic:    { label: 'reComputer Classic',    devices: ['classic'] },
  super:      { label: 'reComputer Super',      devices: ['super'] },
  mini:       { label: 'reComputer Mini',       devices: ['mini'] },
  robotics:   { label: 'reComputer Robotics',   devices: ['robotics'] },
  industrial: { label: 'reComputer Industrial', devices: ['industrial'] },
  reserver:   { label: 'reServer Industrial',   devices: ['reserver'] },
};

const accessories = [
  // ── SSD (2280) ──
  ssd({
    id: 'ssd-128',
    name: 'NVMe M.2 PCIe Gen3x4 2280 Internal SSD — 128GB',
    image: `${IMG_BASE}/s/zqfi9UzZVW`,
    capacity: '128GB',
    formFactor: '2280',
    sku: '112990226',
    buyUrl: 'https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html',
    keyFact: 'NVMe PCIe Gen3x4 高速固态硬盘',
    keyFactEn: 'NVMe PCIe Gen3x4 high-speed solid state drive',
    devices: ['classic', 'super', 'industrial', 'reserver', 'robotics'],
  }),
  ssd({
    id: 'ssd-256',
    name: 'NVMe M.2 PCIe Gen3x4 2280 Internal SSD — 256GB',
    image: `${IMG_BASE}/s/exM9c2MVs1`,
    capacity: '256GB',
    formFactor: '2280',
    sku: '112990246',
    buyUrl: 'https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html',
    keyFact: 'NVMe PCIe Gen3x4 高速固态硬盘',
    keyFactEn: 'NVMe PCIe Gen3x4 high-speed solid state drive',
    devices: ['classic', 'super', 'industrial', 'reserver', 'robotics'],
  }),
  ssd({
    id: 'ssd-512',
    name: 'NVMe M.2 PCIe Gen3x4 2280 Internal SSD — 512GB',
    image: `${IMG_BASE}/s/CWEVV6wReJ`,
    capacity: '512GB',
    formFactor: '2280',
    sku: '112990247',
    buyUrl: 'https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html',
    keyFact: 'NVMe PCIe Gen3x4 高速固态硬盘',
    keyFactEn: 'NVMe PCIe Gen3x4 high-speed solid state drive',
    devices: ['classic', 'super', 'industrial', 'reserver', 'robotics'],
  }),
  ssd({
    id: 'ssd-1tb',
    name: 'NVMe M.2 PCIe Gen3x4 2280 Internal SSD — 1TB',
    image: `${IMG_BASE}/s/yJWCVkFMMM`,
    capacity: '1TB',
    formFactor: '2280',
    sku: '112990267',
    buyUrl: 'https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html',
    keyFact: 'NVMe PCIe Gen3x4 高速固态硬盘',
    keyFactEn: 'NVMe PCIe Gen3x4 high-speed solid state drive',
    devices: ['classic', 'super', 'industrial', 'reserver', 'robotics'],
  }),
  ssd({
    id: 'ssd-2tb',
    name: 'NVMe M.2 PCIe Gen3x4 2280 Internal SSD — 2TB',
    image: `${IMG_BASE}/s/enDoLW7xkh`,
    capacity: '2TB',
    formFactor: '2280',
    sku: '114993467',
    buyUrl: 'https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html',
    keyFact: 'NVMe PCIe Gen3x4 高速固态硬盘',
    keyFactEn: 'NVMe PCIe Gen3x4 high-speed solid state drive',
    devices: ['classic', 'super', 'industrial', 'reserver', 'robotics'],
  }),

  // ── SSD (2242, Taobao) ──
  ssd({
    id: 'ssd-fanxiang',
    name: '梵想 S542PRO 2242 SSD',
    nameEn: 'Fanxiang S542PRO 2242 SSD',
    image: `${IMG_BASE}/s/i8b8FH215e`,
    capacity: '—',
    formFactor: '2242',
    sku: '—',
    buyUrl: 'https://item.taobao.com/item.htm?id=733620420853',
    keyFact: '2242 短规格 SSD，适用于空间受限设备',
    keyFactEn: '2242 short-form SSD for space-constrained devices',
    source: 'taobao',
    sourceLabel: '淘宝',
    sourceLabelEn: 'Taobao',
    devices: ['mini', 'robotics'],
  }),

  // ── WiFi ──
  wifi({
    id: 'wifi-rtl8822ce',
    name: 'RTL8822CE Wireless NIC Kits',
    image: `${IMG_BASE}/s/WUjeg7yGyS`,
    function: 'WiFi + 蓝牙',
    functionEn: 'WiFi + Bluetooth',
    interface: 'm2e',
    interfaceLabel: 'M.2 Key E',
    sku: 'E24121001',
    buyUrl: 'https://www.seeedstudio.com/RTL8822CE-Wireless-NIC-Kits-for-Nvidia-Jetson-Orin.html',
    keyFact: '专为 NVIDIA Jetson Orin 平台设计 · 需要搭配天线使用',
    keyFactEn: 'Designed for NVIDIA Jetson Orin platform · Requires antenna',
    devices: ['super', 'mini', 'robotics'],
  }),
  wifi({
    id: 'wifi-bl-m8723du1',
    name: 'BL-M8723DU1',
    image: `${IMG_BASE}/s/Tu3MRwCqRK`,
    function: 'WiFi + 蓝牙',
    functionEn: 'WiFi + Bluetooth',
    interface: 'm2e',
    interfaceLabel: 'WiFi/BT',
    sku: '—',
    buyUrl: null,
    keyFact: '需要定制 · 无公开购买链接',
    keyFactEn: 'Custom order · No public purchase link',
    devices: ['super', 'mini', 'robotics'],
  }),

  // ── 4G ──
  lte({
    id: '4g-ec25',
    name: 'LTE Cat 4 EC25',
    image: `${IMG_BASE}/s/zNXt5eKnSH`,
    network: 'LTE Cat 4',
    interface: 'minipcie',
    interfaceLabel: 'Mini PCIe',
    sku: '113991134',
    buyUrl: 'https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html',
    keyFact: '需要搭配天线 · 欧洲版本模组，其他区域也适用',
    keyFactEn: 'Requires antenna · European variant module, also suitable for other regions',
    devices: ['classic', 'industrial', 'reserver'],
  }),
  lte({
    id: '4g-em12g',
    name: 'EM12-G',
    image: `${IMG_BASE}/s/NxW78K1Vop`,
    network: 'LTE',
    interface: 'm2b',
    interfaceLabel: 'M.2 Key B',
    sku: '—',
    buyUrl: null,
    keyFact: '参考 Getting Started 文档',
    keyFactEn: 'Refer to the Getting Started documentation',
    devices: ['super', 'industrial', 'reserver'],
  }),
];

// ── Filter option lists (bilingual) ──
export const categoryOptions = [
  { value: 'all',  label: '全部配件',    labelEn: 'All Accessories' },
  { value: 'ssd',  label: 'SSD 固态硬盘', labelEn: 'SSD Storage' },
  { value: 'wifi', label: 'WiFi 无线网卡', labelEn: 'WiFi Modules' },
  { value: '4g',   label: '4G 蜂窝模组',  labelEn: '4G Cellular Modules' },
];

export const interfaceOptions = [
  { value: 'all',       label: '任意接口',   labelEn: 'Any Interface' },
  { value: 'm2m',        label: 'M.2 Key M',  labelEn: 'M.2 Key M' },
  { value: 'm2e',        label: 'M.2 Key E',  labelEn: 'M.2 Key E' },
  { value: 'm2b',        label: 'M.2 Key B',  labelEn: 'M.2 Key B' },
  { value: 'minipcie',   label: 'Mini PCIe',  labelEn: 'Mini PCIe' },
];

export const sourceOptions = [
  { value: 'all',    label: '全部来源',       labelEn: 'All Sources' },
  { value: 'seeed',  label: 'Seeed Bazaar',   labelEn: 'Seeed Bazaar' },
  { value: 'taobao', label: '淘宝',           labelEn: 'Taobao' },
];

export const deviceOptions = [
  { value: 'all',        label: '未选择 · 浏览全部系列',  labelEn: 'None · Browse all series' },
  { value: 'classic',    label: 'reComputer Classic',    labelEn: 'reComputer Classic' },
  { value: 'super',      label: 'reComputer Super',      labelEn: 'reComputer Super' },
  { value: 'mini',       label: 'reComputer Mini',       labelEn: 'reComputer Mini' },
  { value: 'robotics',   label: 'reComputer Robotics',   labelEn: 'reComputer Robotics' },
  { value: 'industrial', label: 'reComputer Industrial', labelEn: 'reComputer Industrial' },
  { value: 'reserver',   label: 'reServer Industrial',    labelEn: 'reServer Industrial' },
];

export default accessories;
