// Corrections to the migrated catalog, checked against the linked English Wiki
// specifications and product pages. Do not treat an optional extension as installed.
import { enrichConfiguration } from "./catalogEvidence.js";
const corrections = {
  C: {
    storage: "16GB eMMC",
    jetpackFactory: "4.6.1",
  },
  D: {
    storage: "16GB eMMC; NVMe SSD is a separate expansion option",
    jetpackFactory: "4.6.1",
  },
  CBC: {
    ports: {
      usb3_count: 1,
      usb2_count: 2,
      usb_count: 3,
      mipi_count: 2,
      hdmi_count: 1,
      m2_keye_count: 1,
      eth_1g_count: 1,
      has_rtc: true,
    },
  },
  CBD: {
    ports: {
      usb3_count: 4,
      usb_count: 4,
      can_count: 1,
      mipi_count: 2,
      hdmi_count: 1,
      dp_count: 1,
      m2_keym_count: 1,
      m2_keye_count: 1,
      eth_1g_count: 1,
      has_rtc: true,
    },
  },
  CBE: {
    ports: {
      usb3_count: 2,
      usb_count: 2,
      can_count: 1,
      mipi_count: 1,
      hdmi_count: 1,
      uart_count: 1,
      i2c_count: 2,
      spi_count: 2,
      m2_keye_count: 1,
      eth_1g_count: 1,
      has_gpio: true,
      has_rtc: true,
    },
    sku: "103110043",
    notes:
      "A203 V2; optional SSD and radio modules are not included. Consult its pin description for connector wiring.",
  },
  CBH: {
    ports: {
      usb3_count: 4,
      usb_count: 4,
      can_count: 1,
      mipi_count: 2,
      hdmi_count: 1,
      uart_count: 1,
      m2_keym_count: 1,
      m2_keye_count: 1,
      eth_1g_count: 1,
      has_rtc: true,
    },
    image:
      "https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/recomputer-j401.png",
    power: "9–19V DC",
  },
  CBI: {
    ports: {
      usb3_count: 3,
      usb2_count: 1,
      usb_count: 4,
      uart_count: 1,
      dp_count: 1,
      m2_keym_count: 1,
      m2_keye_count: 1,
      has_rtc: true,
    },
    notes:
      "Carrier board only. Ethernet and additional USB/CAN connections require the separate extension board. DisplayPort uses the USB-C host connector.",
  },
  CBJ: {
    ports: {
      usb3_count: 4,
      usb_count: 4,
      can_count: 2,
      eth_1g_count: 1,
      i2c_count: 2,
    },
    power: "12–54V DC",
    temperature: null,
    image: "https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B4.png",
  },
  CBK: {
    ports: {
      usb3_count: 7,
      usb_count: 7,
      can_count: 5,
      dp_count: 1,
      uart_count: 1,
      i2c_count: 2,
      m2_keym_count: 1,
      m2_keye_count: 1,
      m2_keyb_count: 1,
      eth_1g_count: 2,
      has_rtc: true,
    },
    notes:
      "GMSL requires a separate extension board. Counts include USB-C host/DisplayPort, not the debug connector.",
  },
  CBL: {
    ports: {
      usb_count: 4,
      eth_1g_count: 1,
      m2_keym_count: 1,
      m2_keye_count: 1,
      mipi_count: 1,
      hdmi_count: 1,
      has_rtc: true,
    },
    power: "9–20V DC",
    jetpackVersions: [
      "5.1",
      "5.1.1",
      "5.1.2",
      "5.1.4",
      "6.0",
      "6.1",
      "6.2",
      "7.2",
    ],
    sku: "102110840",
  },
  CBM: {
    ports: {
      usb_count: 6,
      eth_1g_count: 2,
      m2_keym_count: 1,
      can_count: 1,
      rs_count: 1,
      i2c_count: 1,
      spi_count: 1,
      uart_count: 1,
      has_rtc: true,
      installed_wifi: true,
    },
    power: "12–36V DC",
    sku: "102110841",
    wireless:
      "Pre-installed SMD Wi-Fi / Bluetooth. Cellular module not documented as included.",
    jetpackByModule: { orin_nano: ["5.1.1"], orin_nx: ["5.1.1", "6.0", "6.1"] },
    jetpackVersions: ["5.1.1", "6.0", "6.1"],
  },
  CBN: {
    ports: { eth_1g_count: 2, m2_keym_count: 1 },
    sku: "105110001",
    jetpackByModule: { orin_nx: ["5.1.1", "5.1.2", "6.0", "6.1", "6.2"] },
    jetpackVersions: ["5.1.1", "5.1.2", "6.0", "6.1", "6.2"],
  },
  CBO: {
    ports: {
      usb3_count: 4,
      usb_count: 4,
      can_count: 1,
      rs_count: 1,
      hdmi_count: 1,
      m2_keym_count: 1,
      m2_keye_count: 1,
      m2_keyb_count: 1,
      sata_count: 2,
      eth_1g_count: 1,
      eth_10g_count: 1,
      has_gpio: true,
      has_rtc: true,
    },
    notes:
      "GMSL requires the separate J501 GMSL extension board; Jetson module not included.",
    jetpackVersions: ["5.1.3", "6.0", "6.2"],
    purchaseUrl:
      "https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-Board-Add-on.html",
  },
  CBP: {
    ports: { gmsl_count: 8 },
    power: null,
    temperature: null,
    deserializer: "MAX96724",
    image: "https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl.png",
    purchaseUrl:
      "https://www.seeedstudio.com/reServer-Industrial-J501-GMSL-extension-board-p-5949.html",
  },
  CBQ: {
    name: "reComputer mini J501 Carrier Board with GMSL Bundle",
    ports: {
      usb3_count: 2,
      usb_count: 2,
      can_count: 2,
      gmsl_count: 8,
      rs_count: 1,
      uart_count: 1,
      hdmi_count: 1,
      m2_keym_count: 1,
      m2_keye_count: 1,
      eth_1g_count: 1,
      eth_10g_count: 1,
      has_gpio: true,
      has_rtc: true,
    },
    jetpackVersions: ["6.2.1", "7.2"],
    temperature:
      "-20°C to 60°C (25W); -20°C to 55°C (MAXN), with a compatible heat sink and fan",
  },
  X2: { purchaseUrl: null }, // Base-system URL does not identify the GMSL bundle.
  CBG: {
    purchaseUrl:
      "https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html",
    sku: "102110774",
    ports: { usb_count: 4, rs_count: 2, eth_1g_count: 2, hdmi_count: 2 },
  },
};
const moduleSources = {
  nano: "https://www.nvidia.com/en-gb/autonomous-machines/embedded-systems/jetson-nano/product-development/",
  xavier_nx:
    "https://www.nvidia.com/en-in/autonomous-machines/embedded-systems/jetson-xavier-nx/",
  agx_orin:
    "https://www.nvidia.com/content/dam/en-zz/Solutions/gtcf21/jetson-orin/nvidia-jetson-agx-orin-technical-brief.pdf",
};
// These guides document a particular board + module + JetPack combination.
// A version recorded for Xavier NX must not imply support on Nano or TX2 NX.
const boardJetpack = {
  CBC: { nano: ["4.6.1", "4.6.6"] },
  CBD: { nano: ["4.6.1", "4.6.6"], xavier_nx: ["4.6.1", "5.0.2"] },
  CBE: {
    nano: ["4.6", "4.6.1", "4.6.2"],
    tx2_nx: ["4.6"],
    xavier_nx: ["4.6", "4.6.1", "4.6.2", "5.1.4"],
  },
  CBF: { nano: ["4.6"], tx2_nx: ["4.6"], xavier_nx: ["4.6", "5.0.2"] },
  CBG: { xavier_nx: ["5.0.2"] },
  CBI: { orin_nano: ["5.1.3", "6.0", "6.2"], orin_nx: ["5.1.3", "6.0", "6.2"] },
  CBK: { orin_nano: ["6.2", "7.2"], orin_nx: ["6.2", "7.2"] },
};
export function normalizeConfiguration(record) {
  const p = {
    ...record,
    ...corrections[record.id],
    guides: record.guides.map((g) => ({ ...g })),
    sources: [...record.sources],
    moduleSpec: record.moduleSpec ? { ...record.moduleSpec } : null,
  };
  p.supportedModules = [
    ...new Set(
      p.supportedModules.map((k) => k.replace("xavier_nx_16", "xavier_nx")),
    ),
  ];
  if (p.type !== "system") {
    p.storage = null;
    p.cooling = null;
    p.lifetime = null;
    p.jetpackFactory = null;
  }
  if (p.type === "carrier" && boardJetpack[p.id]) {
    p.jetpackByModule = boardJetpack[p.id];
    p.jetpackVersions = [...new Set(Object.values(p.jetpackByModule).flat())];
  }
  if (p.purchaseUrl && !p.sources.includes(p.purchaseUrl))
    p.sources.push(p.purchaseUrl);
  if (p.type === "system" && moduleSources[p.moduleKey])
    p.sources[1] = moduleSources[p.moduleKey];
  p.guides = p.guides.map((g) =>
    g.url === "/flash/jetpack_to_selected_product/"
      ? { ...g, label: "Flash JetPack selector" }
      : g,
  );
  if (["H", "AB", "I", "I2"].includes(p.id)) {
    p.guides[0].url = "/recomputer_j401b_getting_start/";
    p.sources[0] = p.guides[0].url;
    p.image =
      "https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/recomputer-j401b_1.webp";
  }
  if (p.id === "D") {
    p.guides[0].url = "/reComputer_J1020v2_with_Jetson_getting_start/";
    p.sources[0] = p.guides[0].url;
    p.image =
      "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110061441.jpg";
  }
  if (["C", "D"].includes(p.id)) {
    const url =
      p.id === "C"
        ? "https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"
        : "https://www.seeedstudio.com/reComputer-J1020-v2-p-5498.html";
    p.sources.push(url);
    p.guides.push({ label: "Original product specifications", url });
  }
  if (p.familyId === "super") {
    p.jetpackFactory = "6.2";
    p.jetpackVersions = [...new Set([...p.jetpackVersions, "6.2"])];
  }
  if (["AS", "AT"].includes(p.id)) {
    p.ports = { ...corrections.CBQ.ports };
    p.jetpackFactory = "6.2.1";
    p.jetpackVersions = ["6.2.1", "7.2"];
    p.temperature = corrections.CBQ.temperature;
  }
  if (p.moduleKey === "orin_nano")
    p.moduleSpec.power =
      p.familyId === "super"
        ? "25W reference mode / MAXN SUPER (Super flashing configuration)"
        : `7W / ${p.memoryGb === 4 ? 10 : 15}W (original configuration)`;
  if (p.moduleKey === "orin_nx") {
    p.moduleSpec.cpu = `${p.memoryGb === 8 ? 6 : 8}-core Arm Cortex-A78AE v8.2 64-bit`;
    if (p.familyId !== "super")
      p.moduleSpec.aiPerformance = `${p.memoryGb === 8 ? 70 : 100} TOPS (sparse INT8; original mode; not a system benchmark)`;
    p.moduleSpec.power =
      p.familyId === "super"
        ? `10W / 15W / ${p.memoryGb === 8 ? 20 : 25}W / 40W / MAXN SUPER (Super flashing configuration)`
        : `10W / 15W / ${p.memoryGb === 8 ? 20 : 25}W / MAXN (original configuration)`;
    p.moduleSpec.video =
      "Encode: 1× 4K60 (H.265); Decode: 1× 8K30 or 2× 4K60 (H.265)";
  }
  if (p.moduleKey === "agx_orin" && p.memoryGb === 32) {
    p.moduleSpec.cpu = "8-core Arm Cortex-A78AE v8.2 64-bit";
    p.moduleSpec.gpu = "1792-core NVIDIA Ampere, 56 Tensor Cores";
    p.moduleSpec.power = "15–40W (module power modes)";
    p.moduleSpec.video =
      "Encode: 1× 4K60 (H.265); Decode: 1× 8K30 or 2× 4K60 (H.265)";
  }
  if (p.moduleKey === "xavier_nx" && p.memoryGb === 16)
    p.moduleSpec.memory = "16GB 128-bit LPDDR4x";
  return enrichConfiguration(p);
}
