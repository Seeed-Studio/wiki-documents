/**
 * Accessories data for Jetson Accessories Selection Guide.
 * Items marked ✅ are tested by Seeed Studio.
 * Items marked ⏳ are pending verification.
 *
 * Factory functions create records with common properties for each category.
 * Localized text uses Chinese base field plus En / Ja / Es / Pt.
 */

// Images are served from files.seeedstudio.com CDN
const IMG_BASE = 'https://files.seeedstudio.com/wiki/Jetson%20Accessories%20Selection%20Guide';

function loc(field, zh, en, ja, es, pt) {
  return {
    [field]: zh,
    [`${field}En`]: en,
    [`${field}Ja`]: ja,
    [`${field}Es`]: es,
    [`${field}Pt`]: pt,
  };
}

const tested = loc('evidence', '✅ 已测试', '✅ Tested', '✅ テスト済み', '✅ Probado', '✅ Testado');
const pending = loc('evidence', '⏳ 待验证', '⏳ Pending', '⏳ 検証中', '⏳ Pendiente', '⏳ Pendente');
const seeedSource = loc('sourceLabel', 'Seeed Bazaar', 'Seeed Bazaar', 'Seeed Bazaar', 'Seeed Bazaar', 'Seeed Bazaar');

// ── Factory functions ──
const ssd = (item) => ({ category: 'ssd', categoryLabel: 'SSD', source: 'seeed', ...seeedSource, ...tested, ...item });
const wifi = (item) => ({ category: 'wifi', categoryLabel: 'WiFi', source: 'seeed', ...seeedSource, ...tested, ...item });
const lte = (item) => ({ category: '4g', categoryLabel: '4G', source: 'seeed', ...seeedSource, ...tested, ...item });
const fiveg = (item) => ({ category: '5g', categoryLabel: '5G', source: 'seeed', ...seeedSource, ...tested, ...item });
const power = (item) => ({ category: 'power', ...loc('categoryLabel', '电源', 'Power', '電源', 'Energía', 'Energia'), interface: 'other', interfaceLabel: '—', source: 'seeed', ...seeedSource, ...tested, ...item });
const antenna = (item) => ({ category: 'antenna', ...loc('categoryLabel', '天线', 'Antenna', 'アンテナ', 'Antena', 'Antena'), interface: 'other', interfaceLabel: '—', source: 'seeed', ...seeedSource, ...tested, ...item });
const cooling = (item) => ({ category: 'cooling', ...loc('categoryLabel', '散热', 'Cooling', '冷却', 'Refrigeración', 'Refrigeração'), interface: 'other', interfaceLabel: '—', source: 'seeed', ...seeedSource, ...tested, ...item });
const caseBracket = (item) => ({ category: 'case', ...loc('categoryLabel', '外壳/支架', 'Case & Bracket', 'ケース/ブラケット', 'Carcasa/Soporte', 'Caixa/Suporte'), interface: 'other', interfaceLabel: '—', source: 'seeed', ...seeedSource, ...tested, ...item });
const cable = (item) => ({ category: 'cable', ...loc('categoryLabel', '转接/线缆', 'Adapter & Cable', 'アダプター/ケーブル', 'Adaptador/Cable', 'Adaptador/Cabo'), interface: 'other', interfaceLabel: '—', source: 'seeed', ...seeedSource, ...tested, ...item });
const extension = (item) => ({ category: 'extension', ...loc('categoryLabel', '扩展板', 'Extension Board', '拡張ボード', 'Placa de extensión', 'Placa de extensão'), interface: 'other', interfaceLabel: '—', source: 'seeed', ...seeedSource, ...tested, ...item });

/** @type {Record<string, {label:string; devices:string[]}>} */
const deviceSeries = {
  classic:    { label: 'reComputer Classic',    devices: ['classic'] },
  super:      { label: 'reComputer Super',      devices: ['super'] },
  mini:       { label: 'reComputer Mini',       devices: ['mini'] },
  robotics:   { label: 'reComputer Robotics',   devices: ['robotics'] },
  industrial: { label: 'reComputer Industrial', devices: ['industrial'] },
  reserver:   { label: 'reServer Industrial',   devices: ['reserver'] },
  rugged:     { label: 'reComputer Rugged',     devices: ['rugged'] },
};

// ── Existing tested accessories (kept from original) ──
const accessories = [
  // ── SSD (2280) ──
  ssd({ id: 'ssd-128', name: 'NVMe M.2 PCIe Gen3x4 2280 Internal SSD — 128GB', image: `${IMG_BASE}/ssd-128.jpg`, capacity: '128GB', formFactor: '2280', sku: '112990226', buyUrl: 'https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html', interface: 'm2m', interfaceLabel: 'M.2 Key M', devices: ['classic', 'super', 'industrial', 'reserver', 'robotics'] }),
  ssd({ id: 'ssd-256', name: 'NVMe M.2 PCIe Gen3x4 2280 Internal SSD — 256GB', image: `${IMG_BASE}/ssd-256.jpg`, capacity: '256GB', formFactor: '2280', sku: '112990246', buyUrl: 'https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html', interface: 'm2m', interfaceLabel: 'M.2 Key M', devices: ['classic', 'super', 'industrial', 'reserver', 'robotics'] }),
  ssd({ id: 'ssd-512', name: 'NVMe M.2 PCIe Gen3x4 2280 Internal SSD — 512GB', image: `${IMG_BASE}/ssd-512.jpg`, capacity: '512GB', formFactor: '2280', sku: '112990247', buyUrl: 'https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html', interface: 'm2m', interfaceLabel: 'M.2 Key M', devices: ['classic', 'super', 'industrial', 'reserver', 'robotics'] }),
  ssd({ id: 'ssd-1tb', name: 'NVMe M.2 PCIe Gen3x4 2280 Internal SSD — 1TB', image: `${IMG_BASE}/ssd-1tb.jpg`, capacity: '1TB', formFactor: '2280', sku: '112990267', buyUrl: 'https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html', interface: 'm2m', interfaceLabel: 'M.2 Key M', devices: ['classic', 'super', 'industrial', 'reserver', 'robotics'] }),
  ssd({ id: 'ssd-2tb', name: 'NVMe M.2 PCIe Gen3x4 2280 Internal SSD — 2TB', image: `${IMG_BASE}/ssd-2tb.jpg`, capacity: '2TB', formFactor: '2280', sku: '114993467', buyUrl: 'https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html', interface: 'm2m', interfaceLabel: 'M.2 Key M', devices: ['classic', 'super', 'industrial', 'reserver', 'robotics'] }),

  // ── SSD (2242, Taobao) ──
  ssd({ id: 'ssd-fanxiang', ...loc('name', '梵想 S542PRO 2242 SSD', 'Fanxiang S542PRO 2242 SSD', 'Fanxiang S542PRO 2242 SSD', 'Fanxiang S542PRO 2242 SSD', 'Fanxiang S542PRO 2242 SSD'), image: `${IMG_BASE}/ssd-fanxiang.jpg`, capacity: '—', formFactor: '2242', sku: '—', buyUrl: 'https://item.taobao.com/item.htm?id=733620420853', ...loc('keyFact', '2242 短规格 SSD，适用于空间受限设备', '2242 short-form SSD for space-constrained devices', 'スペースが限られた機器向けの 2242 ショートフォーム SSD', 'SSD 2242 de formato corto para dispositivos con espacio limitado', 'SSD 2242 de formato curto para dispositivos com espaço limitado'), source: 'taobao', ...loc('sourceLabel', '淘宝', 'Taobao', 'Taobao', 'Taobao', 'Taobao'), interface: 'm2m', interfaceLabel: 'M.2 Key M', devices: ['mini', 'robotics'] }),

  // ── WiFi ──
  wifi({ id: 'wifi-rtl8822ce', name: 'RTL8822CE Wireless NIC Kits', image: `${IMG_BASE}/wifi-rtl8822ce.jpg`, ...loc('function', 'WiFi + 蓝牙', 'WiFi + Bluetooth', 'WiFi + Bluetooth', 'WiFi + Bluetooth', 'WiFi + Bluetooth'), interface: 'm2e', interfaceLabel: 'M.2 Key E', sku: 'E24121001', buyUrl: 'https://www.seeedstudio.com/RTL8822CE-Wireless-NIC-Kits-for-Nvidia-Jetson-Orin.html', ...loc('keyFact', '专为 NVIDIA Jetson Orin 平台设计 · 需要搭配天线使用', 'Designed for NVIDIA Jetson Orin platform · Requires antenna', 'NVIDIA Jetson Orin プラットフォーム向け · アンテナが必要', 'Diseñado para la plataforma NVIDIA Jetson Orin · Requiere antena', 'Projetado para a plataforma NVIDIA Jetson Orin · Requer antena'), devices: ['super', 'mini', 'robotics'] }),
  wifi({ id: 'wifi-bl-m8723du1', name: 'BL-M8723DU1', image: `${IMG_BASE}/wifi-bl-m8723du1.jpg`, ...loc('function', 'WiFi + 蓝牙', 'WiFi + Bluetooth', 'WiFi + Bluetooth', 'WiFi + Bluetooth', 'WiFi + Bluetooth'), interface: 'm2e', interfaceLabel: 'WiFi/BT', sku: '—', buyUrl: null, ...loc('keyFact', '需要定制 · 无公开购买链接', 'Custom order · No public purchase link', 'カスタム注文 · 公開の購入リンクなし', 'Pedido personalizado · Sin enlace de compra público', 'Pedido personalizado · Sem link público de compra'), devices: ['super', 'mini', 'robotics'] }),

  // ── 4G ──
  lte({ id: '4g-ec25', name: 'LTE Cat 4 EC25', image: `${IMG_BASE}/4g-ec25.jpg`, network: 'LTE Cat 4', interface: 'minipcie', interfaceLabel: 'Mini PCIe', sku: '113991134', buyUrl: 'https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html', ...loc('keyFact', '需要搭配天线 · 欧洲版本模组，其他区域也适用', 'Requires antenna · European variant module, also suitable for other regions', 'アンテナが必要 · 欧州向けモジュール。他の地域でも使用できます', 'Requiere antena · Módulo de variante europea, también apto para otras regiones', 'Requer antena · Módulo da variante europeia, também adequado para outras regiões'), devices: ['classic', 'industrial', 'reserver'] }),
  lte({ id: '4g-em12g', name: 'EM12-G', image: `${IMG_BASE}/4g-em12g.png`, network: 'LTE', interface: 'm2b', interfaceLabel: 'M.2 Key B', sku: '—', buyUrl: null, ...loc('keyFact', '参考 Getting Started 文档', 'Refer to the Getting Started documentation', 'Getting Started ドキュメントを参照', 'Consulta la documentación de Getting Started', 'Consulte a documentação de Getting Started'), devices: ['super', 'industrial', 'reserver'] }),

  // ── New accessories from compatibility table ──

  // ── Power ──
  power({
    id: 'power-ha-1231-24l1-24v-230w-power-ad',
    name: "HA-1231-24L1 24V 230W Power Adapter (w/o cord For reComputer J601)",
    image: `${IMG_BASE}/power-ha-1231-24l1-24v-230w-power-adapter-w-o-.jpg`,
    sku: '100044524',
    buyUrl: "https://www.seeedstudio.com/HA-1231-24L1-24V-230W-Power-Adapter-p-6940.html",
    devices: [],
  }),
  power({
    id: 'power-xt30-2-2-power-separation-boar',
    name: "XT30 2+2 Power Separation Board",
    image: `${IMG_BASE}/power-xt30-2-2-power-separation-board.jpg`,
    sku: '100045091',
    buyUrl: "https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html",
    devices: [],
  }),
  power({
    id: 'power-ac-cloverleaf-power-cord-cn',
    name: "AC Cloverleaf Power Cord - CN",
    image: `${IMG_BASE}/power-ac-cloverleaf-power-cord-cn.jpg`,
    sku: '106990470',
    buyUrl: "https://www.seeedstudio.com/Power-Cord-CN-0-5m-p-6387.html",
    devices: ['classic', 'industrial', 'mini', 'robotics', 'super', 'reserver'],
  }),
  power({
    id: 'power-ac-cloverleaf-power-cord-jp',
    name: "AC Cloverleaf Power Cord - JP",
    image: `${IMG_BASE}/power-ac-cloverleaf-power-cord-jp.jpg`,
    sku: '106990469',
    buyUrl: "https://www.seeedstudio.com/Power-Cord-JP-0-5m-p-6386.html",
    devices: ['classic', 'industrial', 'mini', 'robotics', 'super', 'reserver'],
  }),
  power({
    id: 'power-ac-cloverleaf-power-cord-eu',
    name: "AC Cloverleaf Power Cord - EU",
    image: `${IMG_BASE}/power-ac-cloverleaf-power-cord-eu.jpg`,
    sku: '106990468',
    buyUrl: "https://www.seeedstudio.com/Power-Cord-EU-0-5m-p-6385.html",
    devices: ['classic', 'industrial', 'mini', 'robotics', 'super', 'reserver'],
  }),
  power({
    id: 'power-power-adapter-3p-black-19v-4-7',
    name: "Power Adapter 3P-Black-19V-4.74A/5.5*2.5mm（without Power Cord)",
    image: `${IMG_BASE}/power-power-adapter-3p-black-19v-4-74a-5-5-2-5.jpg`,
    sku: '313080684',
    buyUrl: "https://www.seeedstudio.com/Power-Adapter-3P-Black-19V-4-74A-AC-p-6377.html",
    devices: ['classic', 'industrial', 'mini', 'robotics', 'super', 'reserver'],
  }),
  power({
    id: 'power-ac-cloverleaf-power-cord-uk',
    name: "AC Cloverleaf Power Cord - UK",
    image: `${IMG_BASE}/power-ac-cloverleaf-power-cord-uk.jpg`,
    sku: '313990328',
    buyUrl: "https://www.seeedstudio.com/AC-UK-p-5124.html",
    devices: ['classic', 'industrial', 'mini', 'robotics', 'super', 'reserver'],
  }),
  power({
    id: 'power-ac-cloverleaf-power-cord-us',
    name: "AC Cloverleaf Power Cord - US",
    image: `${IMG_BASE}/power-ac-cloverleaf-power-cord-us.jpg`,
    sku: '313990332',
    buyUrl: "https://www.seeedstudio.com/AC-US-p-5122.html",
    devices: ['classic', 'industrial', 'mini', 'robotics', 'super', 'reserver'],
  }),
  power({
    id: 'power-power-adapter-3p-black-12v-5a-',
    name: "Power Adapter 3P-Black-12V-5A/5.5*2.5mm（without Power Cord)",
    image: `${IMG_BASE}/power-power-adapter-3p-black-12v-5a-5-5-2-5mm-.jpg`,
    sku: '313080482',
    buyUrl: "https://www.seeedstudio.com/Power-Adapter-3P-Black-12V-5-0A-AC-p-5079.html",
    devices: ['robotics', 'super'],
  }),
  power({
    id: 'power-ac-power-cord-us',
    name: "AC Power Cord - US",
    image: `${IMG_BASE}/power-ac-power-cord-us.jpg`,
    sku: '313990324',
    buyUrl: "https://www.seeedstudio.com/reServer-AC-US-p-5052.html",
    devices: [],
  }),
  power({
    id: 'power-ac-power-cord-eu',
    name: "AC Power Cord - EU",
    image: `${IMG_BASE}/power-ac-power-cord-eu.jpg`,
    sku: '313990326',
    buyUrl: "https://www.seeedstudio.com/reServer-AC-EU-p-5051.html",
    devices: [],
  }),

  // ── SSD ──
  ssd({
    id: 'ssd-256gb-nvme-m-2-ssd-jetpack-6-2',
    name: "256GB NVMe M.2 SSD (JetPack 6.2 Full Image & Source Code) - Fully Compatible ...",
    image: `${IMG_BASE}/ssd-256gb-nvme-m-2-ssd-jetpack-6-2-full-imag.jpg`,
    sku: '100044853',
    buyUrl: "https://www.seeedstudio.com/M-2-NVME-2280-SSD-256GB-Jetson-ORINtm-Nano-Super-Developer-Kit-p-6727.html",
    interface: 'm2m',
    interfaceLabel: 'M.2 Key M',
    devices: ['classic', 'industrial', 'mini', 'robotics', 'rugged', 'super', 'reserver'],
  }),
  ssd({
    id: 'ssd-256gb-nvme-ssd-jetpack-6-2-base',
    name: "256GB NVMe M.2 SSD (JetPack 6.2 Base Image) - Fully Compatible with Jetson Or...",
    image: `${IMG_BASE}/ssd-256gb-nvme-jetpack-6-2-base.jpg`,
    sku: '100014960',
    buyUrl: "https://www.seeedstudio.com/M-2-NVME-2280-SSD-256GB-Jetson-ORINtm-Nano-Super-Developer-Kit-p-6690.html",
    interface: 'm2m',
    interfaceLabel: 'M.2 Key M',
    devices: ['classic', 'industrial', 'mini', 'robotics', 'rugged', 'super', 'reserver'],
  }),

  // ── 5G ──
  fiveg({
    id: '5g-rtl8852be-wireless-nic-2-4g-5g',
    name: "RTL8852BE Wireless NIC, 2.4G/5GHz Dual-Band WiFi 6, Bluetooth 5.2, Compatible...",
    image: `${IMG_BASE}/net-rtl8852be-wireless-nic-2-4g-5ghz-dual-ba.jpg`,
    sku: '100042928',
    buyUrl: "https://www.seeedstudio.com/RTL8852BE-WIFI-Module-M-2-Key-E-p-6835.html?___store=retailer",
    interface: 'm2b',
    interfaceLabel: 'M.2 Key B',
    devices: ['rugged'],
  }),
  fiveg({
    id: '5g-quectel-rm520n-gl-5g-sub-6-ghz',
    name: "Quectel RM520N-GL 5G Sub-6 GHz M.2 Module - for reComputer Robotics J4012",
    image: `${IMG_BASE}/net-quectel-rm520n-gl-5g-sub-6-ghz-m-2-module.jpg`,
    sku: '100035145',
    buyUrl: "https://www.seeedstudio.com/Quectel-RM520N-Gobal-5G-M-2-Module-p-6834.html",
    interface: 'm2b',
    interfaceLabel: 'M.2 Key B',
    devices: ['robotics'],
  }),
  fiveg({
    id: '5g-rtl8822ce-wireless-nic-2-4g-5g',
    name: "RTL8822CE Wireless NIC, 2.4G/5GHz Dual-Band WiFi 5, Bluetooth 5.0, Compatible...",
    image: `${IMG_BASE}/net-rtl8822ce-wireless-nic-2-4g-5ghz-dual-ba.jpg`,
    sku: '114993556',
    buyUrl: "https://www.seeedstudio.com/RTL8822CE-WIFI-Module-p-6313.html",
    interface: 'm2b',
    interfaceLabel: 'M.2 Key B',
    devices: ['classic', 'industrial', 'mini', 'robotics', 'rugged', 'super'],
  }),

  // ── 4G ──
  lte({
    id: '4g-sim7600g-h-4g-lte-module-hat-f',
    name: "SIM7600G-H 4G LTE Module HAT for Jetson Nano",
    image: `${IMG_BASE}/net-sim7600g-h-4g-lte-module-hat-for-jetson-.jpg`,
    sku: '113990838',
    buyUrl: "https://www.seeedstudio.com/SIM7600G-H-4G-LTE-Module-HAT-for-Jetson-Nano-p-4495.html",
    interface: 'm2b',
    interfaceLabel: 'M.2 Key B',
    devices: [],
  }),

  // ── Antenna ──
  antenna({
    id: 'antenna-4g-antenna-kit-for-cellular-mo',
    name: "4G Antenna Kit for Cellular Modules (M.2 Form Factor & MHF4)",
    image: `${IMG_BASE}/antenna-4g-antenna-kit-for-cellular-modules-m-2-.jpg`,
    sku: '100021657',
    buyUrl: "https://www.seeedstudio.com/4G-Antenna-Kit-for-M-2-Module-MHF4-IPEX-4-p-6836.html",
    devices: [],
  }),
  antenna({
    id: 'antenna-2-4g-5g-external-antenna-with-',
    name: "2.4G/5G External Antenna with RP-SMA Male Connector and 1.13 Coaxial Cable 13...",
    image: `${IMG_BASE}/antenna-2-4g-5g-external-antenna-with-rp-sma-mal.jpg`,
    sku: '114993587',
    buyUrl: "https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html",
    devices: [],
  }),

  // ── Cooling ──
  cooling({
    id: 'cooling-recomputer-j601-heatsink-with-',
    name: "reComputer J601 heatsink with fan",
    image: `${IMG_BASE}/cooling-recomputer-j601-heatsink-with-fan.jpg`,
    sku: '100007973',
    buyUrl: "https://www.seeedstudio.com/reComputer-J601-heatsink-with-fan-p-6936.html",
    devices: [],
  }),
  cooling({
    id: 'cooling-aluminum-heatsink-with-fan-for',
    name: "Aluminum Heatsink with Fan for Jetson Orin Module Super Mode",
    image: `${IMG_BASE}/cooling-aluminum-heatsink-with-fan-for-jetson-or.jpg`,
    sku: '100021109',
    buyUrl: "https://www.seeedstudio.com/Aluminum-Heatsink-with-Fan-for-Jetson-Orintm-NX-Orintm-Nano-Module-in-MAXN-SUPER-p-6636.html",
    devices: [],
  }),
  cooling({
    id: 'cooling-recomputer-mini-j501-heatsink-',
    name: "reComputer mini J501 heatsink with fan",
    image: `${IMG_BASE}/cooling-recomputer-mini-j501-heatsink-with-fan.jpg`,
    sku: '100099421',
    buyUrl: "https://www.seeedstudio.com/reComputer-Mini-J501-heatsink-with-fan-p-6605.html?___store=retailer",
    devices: [],
  }),
  cooling({
    id: 'cooling-heatsink-fan-reserver-j501',
    name: "Aluminum heatsink with Fan for reServer J501",
    image: `${IMG_BASE}/cooling-aluminum-heatsink-with-fan-for-reserver-.jpg`,
    sku: '114993389',
    buyUrl: "https://www.seeedstudio.com/Aluminum-heatsink-with-Fan-for-Jetson-AGX-Orin-p-5970.html?___store=retailer",
    devices: [],
  }),
  cooling({
    id: 'cooling-heatsink-fan-orin-nx-nano',
    name: "Aluminum Heatsink with Fan for Jetson Orin NX/Orin Nano/Xavier NX Module（reCo...",
    image: `${IMG_BASE}/cooling-aluminum-heatsink-with-fan-for-jetson-or.jpg`,
    sku: '110991904',
    buyUrl: "https://www.seeedstudio.com/Aluminum-Heatsink-with-Fan-for-Jetson-Orin-NX-Orin-Nano-Xavier-NX-Module-p-5633.html",
    devices: [],
  }),
  cooling({
    id: 'cooling-nvidia-jetson-nano-active-heat',
    name: "NVIDIA® Jetson Nano™ Active Heat Sink",
    image: `${IMG_BASE}/cooling-nvidia-jetson-nano-active-heat-sink.jpg`,
    sku: '101110061',
    buyUrl: "https://www.seeedstudio.com/Jetson-Nano-Module-heatsink-p-5395.html?___store=retailer",
    devices: [],
  }),
  cooling({
    id: 'cooling-heatsink-fan-jetson-tx2-nx',
    name: "Aluminum Heatsink with Fan for Jetson TX2 NX Module",
    image: `${IMG_BASE}/cooling-aluminum-heatsink-with-fan-for-jetson-tx.jpg`,
    sku: '114992731',
    buyUrl: "https://www.seeedstudio.com/Heat-Sink-for-Jetson-TX2-NX-Module-p-5094.html",
    devices: [],
  }),
  cooling({
    id: 'cooling-aluminum-heatsink-for-jetson-n',
    name: "Aluminum Heatsink for Jetson Nano Module",
    image: `${IMG_BASE}/cooling-aluminum-heatsink-for-jetson-nano-module.jpg`,
    sku: '114992686',
    buyUrl: "https://www.seeedstudio.com/Jetson-Nano-Module-Heatsink-p-4968.html",
    devices: [],
  }),

  // ── Case & Bracket ──
  caseBracket({
    id: 'case-panel-metal-rack-mount-holder-',
    name: "Panel Metal Rack Mount Holder for reComputer Jetson",
    image: `${IMG_BASE}/case-panel-metal-rack-mount-holder-for-recomp.jpg`,
    sku: '114110347',
    buyUrl: "https://www.seeedstudio.com/Panel-Metal-Rack-Mount-Holder-for-reComputer-Jetson-p-6465.html",
    devices: ['classic', 'industrial', 'mini', 'robotics', 'rugged', 'super'],
  }),
  caseBracket({
    id: 'case-re-computer-case-silver-metal-',
    name: "re_computer case (Silver Metal Edition): Most Compatible Enclosure for popula...",
    image: `${IMG_BASE}/case-re-computer-case-silver-metal-edition-mo.jpg`,
    sku: '110991484',
    buyUrl: "https://www.seeedstudio.com/re-computer-case-silver-Metal-p-4750.html",
    devices: [],
  }),
  caseBracket({
    id: 'case-re-computer-case-vesa-mounting',
    name: "re_computer case: Vesa Mounting Bracket",
    image: `${IMG_BASE}/case-re-computer-case-vesa-mounting-bracket.jpg`,
    sku: '110991464',
    buyUrl: "https://www.seeedstudio.com/VESA-Mounting-Plate-for-re-computer-Case-p-4731.html",
    devices: [],
  }),
  caseBracket({
    id: 'case-re-computer-case-stackable-mid',
    name: "re_computer case: Stackable Middle Frame",
    image: `${IMG_BASE}/case-re-computer-case-stackable-middle-frame.jpg`,
    sku: '110991404',
    buyUrl: "https://www.seeedstudio.com/re-computer-stackable-case-p-4679.html",
    devices: [],
  }),
  caseBracket({
    id: 'case-re-computer-case-most-compatib',
    name: "re_computer case: Most Compatible Enclosure for popular SBCs including ODYSSE...",
    image: `${IMG_BASE}/case-re-computer-case-most-compatible-enclosu.jpg`,
    sku: '114992152',
    buyUrl: "https://www.seeedstudio.com/re-computer-case-p-4465.html",
    devices: [],
  }),
  caseBracket({
    id: 'case-aluminum-case-for-nvidia-jetso',
    name: "Aluminum Case for Nvidia Jetson Nano",
    image: `${IMG_BASE}/case-aluminum-case-for-nvidia-jetson-nano.jpg`,
    sku: '114992052',
    buyUrl: "https://www.seeedstudio.com/Aluminum-Case-for-Nvidia-Jetson-Nano-p-4218.html",
    devices: [],
  }),

  // ── Adapter & Cable ──
  cable({
    id: 'cable-leetop-a603-usb-to-zif-adapter',
    name: "Leetop A603 USB-to-Zif Adapter Board",
    image: `${IMG_BASE}/cable-leetop-a603-usb-to-zif-adapter-board.jpg`,
    sku: '100012322',
    buyUrl: "https://www.seeedstudio.com/Leetop-USB-to-Zif-Adapter-Board-p-6944.html",
    devices: [],
  }),
  cable({
    id: 'cable-utc-t01-industrial-usb-to-can-',
    name: "UTC-T01 Industrial USB-to-CAN Adapter (PCAN/CANable Compatible)",
    image: `${IMG_BASE}/cable-utc-t01-industrial-usb-to-can-adapter-pc.jpg`,
    sku: '100030768',
    buyUrl: "https://www.seeedstudio.com/CANABLE-p-6709.html?___store=retailer",
    devices: ['robotics'],
  }),
  cable({
    id: 'cable-robstride-usb-to-can-adapter-m',
    name: "RobStride USB-to-CAN Adapter Module (Type-C, Offical GUI debug Tool Support)",
    image: `${IMG_BASE}/cable-robstride-usb-to-can-adapter-module-type.jpg`,
    sku: '100012096',
    buyUrl: "https://www.seeedstudio.com/Robostride-CAN-USB-Driver-Board-p-6708.html",
    devices: ['robotics'],
  }),
  cable({
    id: 'cable-feetech-fe-urt-1-usb-to-ttl-48',
    name: "Feetech FE-URT-1 USB to TTL, 485 bus programmer",
    image: `${IMG_BASE}/cable-feetech-fe-urt-1-usb-to-ttl-485-bus-prog.jpg`,
    sku: '100036057',
    buyUrl: "https://www.seeedstudio.com/Feetech-FE-URT-1-p-6705.html",
    devices: [],
  }),
  cable({
    id: 'cable-hightorque-usb-canfd-debugger-',
    name: "HighTorque USB-CANFD Debugger (Type-C)",
    image: `${IMG_BASE}/cable-hightorque-usb-canfd-debugger-type-c.jpg`,
    sku: '100010153',
    buyUrl: "https://www.seeedstudio.com/Hightorque-USB-to-CANFD-Board-p-6703.html?___store=retailer",
    devices: ['robotics'],
  }),
  cable({
    id: 'cable-servo-driver-board-for-lerobot',
    name: "Servo Driver Board for LeRobot",
    image: `${IMG_BASE}/cable-servo-driver-board-for-lerobot.jpg`,
    sku: '100011625',
    buyUrl: "https://www.seeedstudio.com/Servo-Driver-Board-for-LeRobot-p-6685.html",
    devices: [],
  }),
  cable({
    id: 'cable-mini-fakra-4-in-1-cable-0-5m-f',
    name: "Mini-Fakra 4-in-1 Cable 0.5m Female-to-Female",
    image: `${IMG_BASE}/cable-mini-fakra-4-in-1-cable-0-5m-female-to-f.jpg`,
    sku: '114993704',
    buyUrl: "https://www.seeedstudio.com/Mini-fakra-Coaxial-Cable-4-in-1-0-5m-Female-to-Female-p-6484.html",
    devices: [],
  }),
  cable({
    id: 'cable-ch340g-usb-to-serial-ttl-modul',
    name: "CH340G USB to Serial (TTL) Module&Adapter",
    image: `${IMG_BASE}/cable-ch340g-usb-to-serial-ttl-module-adapter.jpg`,
    sku: '317990026',
    buyUrl: "https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html",
    devices: [],
  }),

  // ── Extension Board ──
  extension({
    id: 'extension-recomputer-robotics-gmsl-board',
    name: "reComputer Robotics GMSL Board",
    image: `${IMG_BASE}/ext-recomputer-robotics-gmsl-board.jpg`,
    sku: '100071398',
    buyUrl: "https://www.seeedstudio.com/reComputer-Robotics-GMSL-board-p-6511.html",
    devices: ['robotics'],
  }),
  extension({
    id: 'extension-recomputer-mini-extension-boar',
    name: "reComputer Mini Extension Board for Jetson Orin™ Nano/Orin™ NX",
    image: `${IMG_BASE}/ext-recomputer-mini-extension-board-for-jets.jpg`,
    sku: '114993593',
    buyUrl: "https://www.seeedstudio.com/reComputer-Mini-Extension-Board-p-6421.html",
    devices: ['mini'],
  }),
  extension({
    id: 'extension-reserver-industrial-j501-gmsl-',
    name: "reServer Industrial J501-GMSL extension board",
    image: `${IMG_BASE}/ext-reserver-industrial-j501-gmsl-extension-.jpg`,
    sku: '102991855',
    buyUrl: "https://www.seeedstudio.com/reServer-Industrial-J501-GMSL-extension-board-p-5949.html",
    devices: [],
  })
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
  option('5g', '5G 蜂窝模组', '5G Cellular Modules', '5G セルラーモジュール', 'Módulos celulares 5G', 'Módulos celulares 5G'),
  option('power', '电源适配器', 'Power Adapters', '電源アダプター', 'Adaptadores de energía', 'Adaptadores de energia'),
  option('antenna', '天线', 'Antennas', 'アンテナ', 'Antenas', 'Antenas'),
  option('cooling', '散热器', 'Cooling', '冷却', 'Refrigeración', 'Refrigeração'),
  option('case', '外壳/支架', 'Case & Bracket', 'ケース/ブラケット', 'Caja/Soporte', 'Caixa/Suporte'),
  option('cable', '转接/线缆', 'Adapter & Cable', 'アダプター/ケーブル', 'Adaptador/Cable', 'Adaptador/Cabo'),
  option('extension', '扩展板', 'Extension Board', '拡張ボード', 'Placa de extensión', 'Placa de extensão'),
];

export const interfaceOptions = [
  option('all', '任意接口', 'Any Interface', 'すべてのインターフェース', 'Cualquier interfaz', 'Qualquer interface'),
  option('m2m', 'M.2 Key M', 'M.2 Key M', 'M.2 Key M', 'M.2 Key M', 'M.2 Key M'),
  option('m2e', 'M.2 Key E', 'M.2 Key E', 'M.2 Key E', 'M.2 Key E', 'M.2 Key E'),
  option('m2b', 'M.2 Key B', 'M.2 Key B', 'M.2 Key B', 'M.2 Key B', 'M.2 Key B'),
  option('minipcie', 'Mini PCIe', 'Mini PCIe', 'Mini PCIe', 'Mini PCIe', 'Mini PCIe'),
  option('other', '其他', 'Other', 'その他', 'Otro', 'Outro'),
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
  option('rugged', 'reComputer Rugged', 'reComputer Rugged', 'reComputer Rugged', 'reComputer Rugged', 'reComputer Rugged'),
];

export default accessories;
