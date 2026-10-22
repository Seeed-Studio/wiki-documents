/**
 * Accessories data for Jetson Accessories Selection Guide.
 * All items have been tested (✅) by Seeed Studio.
 *
 * Factory functions: ssd(), wifi(), lte() create records with
 * common properties for each accessory category.
 *
 * Localized text uses the historical Chinese base field plus
 * En / Ja / Es / Pt. The selector falls back to English, not Chinese.
 */

const IMG_BASE = 'https://aka.doubaocdn.com';

function loc(field, zh, en, ja, es, pt) {
  return {
    [field]: zh,
    [`${field}En`]: en,
    [`${field}Ja`]: ja,
    [`${field}Es`]: es,
    [`${field}Pt`]: pt,
  };
}

const tested = loc(
  'evidence',
  '✅ 已测试',
  '✅ Tested',
  '✅ テスト済み',
  '✅ Probado',
  '✅ Testado',
);

const seeedSource = loc(
  'sourceLabel',
  'Seeed Bazaar',
  'Seeed Bazaar',
  'Seeed Bazaar',
  'Seeed Bazaar',
  'Seeed Bazaar',
);

const ssdKeyFact = loc(
  'keyFact',
  'NVMe PCIe Gen3x4 高速固态硬盘',
  'NVMe PCIe Gen3x4 high-speed solid state drive',
  'NVMe PCIe Gen3x4 高速ソリッドステートドライブ',
  'Unidad de estado sólido NVMe PCIe Gen3x4 de alta velocidad',
  'Unidade de estado sólido NVMe PCIe Gen3x4 de alta velocidade',
);

const ssd = (item) => ({
  category: 'ssd',
  categoryLabel: 'SSD',
  interface: 'm2m',
  interfaceLabel: 'M.2 Key M',
  source: 'seeed',
  ...seeedSource,
  ...tested,
  ...item,
});

const wifi = (item) => ({
  category: 'wifi',
  categoryLabel: 'WiFi',
  source: 'seeed',
  ...seeedSource,
  ...tested,
  ...item,
});

const lte = (item) => ({
  category: '4g',
  categoryLabel: '4G',
  source: 'seeed',
  ...seeedSource,
  ...tested,
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
    ...ssdKeyFact,
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
    ...ssdKeyFact,
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
    ...ssdKeyFact,
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
    ...ssdKeyFact,
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
    ...ssdKeyFact,
    devices: ['classic', 'super', 'industrial', 'reserver', 'robotics'],
  }),

  // ── SSD (2242, Taobao) ──
  ssd({
    id: 'ssd-fanxiang',
    ...loc(
      'name',
      '梵想 S542PRO 2242 SSD',
      'Fanxiang S542PRO 2242 SSD',
      'Fanxiang S542PRO 2242 SSD',
      'Fanxiang S542PRO 2242 SSD',
      'Fanxiang S542PRO 2242 SSD',
    ),
    image: `${IMG_BASE}/s/i8b8FH215e`,
    capacity: '—',
    formFactor: '2242',
    sku: '—',
    buyUrl: 'https://item.taobao.com/item.htm?id=733620420853',
    ...loc(
      'keyFact',
      '2242 短规格 SSD，适用于空间受限设备',
      '2242 short-form SSD for space-constrained devices',
      'スペースが限られた機器向けの 2242 ショートフォーム SSD',
      'SSD 2242 de formato corto para dispositivos con espacio limitado',
      'SSD 2242 de formato curto para dispositivos com espaço limitado',
    ),
    source: 'taobao',
    ...loc('sourceLabel', '淘宝', 'Taobao', 'Taobao', 'Taobao', 'Taobao'),
    devices: ['mini', 'robotics'],
  }),

  // ── WiFi ──
  wifi({
    id: 'wifi-rtl8822ce',
    name: 'RTL8822CE Wireless NIC Kits',
    image: `${IMG_BASE}/s/WUjeg7yGyS`,
    ...loc(
      'function',
      'WiFi + 蓝牙',
      'WiFi + Bluetooth',
      'WiFi + Bluetooth',
      'WiFi + Bluetooth',
      'WiFi + Bluetooth',
    ),
    interface: 'm2e',
    interfaceLabel: 'M.2 Key E',
    sku: 'E24121001',
    buyUrl: 'https://www.seeedstudio.com/RTL8822CE-Wireless-NIC-Kits-for-Nvidia-Jetson-Orin.html',
    ...loc(
      'keyFact',
      '专为 NVIDIA Jetson Orin 平台设计 · 需要搭配天线使用',
      'Designed for NVIDIA Jetson Orin platform · Requires antenna',
      'NVIDIA Jetson Orin プラットフォーム向け · アンテナが必要',
      'Diseñado para la plataforma NVIDIA Jetson Orin · Requiere antena',
      'Projetado para a plataforma NVIDIA Jetson Orin · Requer antena',
    ),
    devices: ['super', 'mini', 'robotics'],
  }),
  wifi({
    id: 'wifi-bl-m8723du1',
    name: 'BL-M8723DU1',
    image: `${IMG_BASE}/s/Tu3MRwCqRK`,
    ...loc(
      'function',
      'WiFi + 蓝牙',
      'WiFi + Bluetooth',
      'WiFi + Bluetooth',
      'WiFi + Bluetooth',
      'WiFi + Bluetooth',
    ),
    interface: 'm2e',
    interfaceLabel: 'WiFi/BT',
    sku: '—',
    buyUrl: null,
    ...loc(
      'keyFact',
      '需要定制 · 无公开购买链接',
      'Custom order · No public purchase link',
      'カスタム注文 · 公開の購入リンクなし',
      'Pedido personalizado · Sin enlace de compra público',
      'Pedido personalizado · Sem link público de compra',
    ),
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
    ...loc(
      'keyFact',
      '需要搭配天线 · 欧洲版本模组，其他区域也适用',
      'Requires antenna · European variant module, also suitable for other regions',
      'アンテナが必要 · 欧州向けモジュール。他の地域でも使用できます',
      'Requiere antena · Módulo de variante europea, también apto para otras regiones',
      'Requer antena · Módulo da variante europeia, também adequado para outras regiões',
    ),
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
    ...loc(
      'keyFact',
      '参考 Getting Started 文档',
      'Refer to the Getting Started documentation',
      'Getting Started ドキュメントを参照',
      'Consulta la documentación de Getting Started',
      'Consulte a documentação de Getting Started',
    ),
    devices: ['super', 'industrial', 'reserver'],
  }),
];

function option(value, zh, en, ja, es, pt) {
  return { value, ...loc('label', zh, en, ja, es, pt) };
}

// ── Filter option lists ──
export const categoryOptions = [
  option('all', '全部配件', 'All Accessories', 'すべてのアクセサリ', 'Todos los accesorios', 'Todos os acessórios'),
  option('ssd', 'SSD 固态硬盘', 'SSD Storage', 'SSD ストレージ', 'Almacenamiento SSD', 'Armazenamento SSD'),
  option('wifi', 'WiFi 无线网卡', 'WiFi Modules', 'WiFi モジュール', 'Módulos WiFi', 'Módulos WiFi'),
  option('4g', '4G 蜂窝模组', '4G Cellular Modules', '4G セルラーモジュール', 'Módulos celulares 4G', 'Módulos celulares 4G'),
];

export const interfaceOptions = [
  option('all', '任意接口', 'Any Interface', 'すべてのインターフェース', 'Cualquier interfaz', 'Qualquer interface'),
  option('m2m', 'M.2 Key M', 'M.2 Key M', 'M.2 Key M', 'M.2 Key M', 'M.2 Key M'),
  option('m2e', 'M.2 Key E', 'M.2 Key E', 'M.2 Key E', 'M.2 Key E', 'M.2 Key E'),
  option('m2b', 'M.2 Key B', 'M.2 Key B', 'M.2 Key B', 'M.2 Key B', 'M.2 Key B'),
  option('minipcie', 'Mini PCIe', 'Mini PCIe', 'Mini PCIe', 'Mini PCIe', 'Mini PCIe'),
];

export const sourceOptions = [
  option('all', '全部来源', 'All Sources', 'すべての入手元', 'Todas las fuentes', 'Todas as fontes'),
  option('seeed', 'Seeed Bazaar', 'Seeed Bazaar', 'Seeed Bazaar', 'Seeed Bazaar', 'Seeed Bazaar'),
  option('taobao', '淘宝', 'Taobao', 'Taobao', 'Taobao', 'Taobao'),
];

export const deviceOptions = [
  option('all', '未选择 · 浏览全部系列', 'None · Browse all series', '未選択 · すべてのシリーズを表示', 'Ninguno · Ver todas las series', 'Nenhum · Ver todas as séries'),
  option('classic', 'reComputer Classic', 'reComputer Classic', 'reComputer Classic', 'reComputer Classic', 'reComputer Classic'),
  option('super', 'reComputer Super', 'reComputer Super', 'reComputer Super', 'reComputer Super', 'reComputer Super'),
  option('mini', 'reComputer Mini', 'reComputer Mini', 'reComputer Mini', 'reComputer Mini', 'reComputer Mini'),
  option('robotics', 'reComputer Robotics', 'reComputer Robotics', 'reComputer Robotics', 'reComputer Robotics', 'reComputer Robotics'),
  option('industrial', 'reComputer Industrial', 'reComputer Industrial', 'reComputer Industrial', 'reComputer Industrial', 'reComputer Industrial'),
  option('reserver', 'reServer Industrial', 'reServer Industrial', 'reServer Industrial', 'reServer Industrial', 'reServer Industrial'),
];

export default accessories;
