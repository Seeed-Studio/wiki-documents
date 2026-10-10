// English selector only. Facts are tied to the configuration/board, not inferred
// from the module or a connector count. Rechecked against primary sources below.
import { configurationComparisonFacts } from "./comparisonFacts.js";
export const checkedOn = "2026-10-09";
const wiki = (slug) => `https://wiki.seeedstudio.com/${slug}/`;
const j501Sheet =
  "https://files.seeedstudio.com/wiki/recomputer_robotic_j501/reComputer_robotics_J501_datasheet.pdf";
const a205Sheet =
  "https://files.seeedstudio.com/wiki/reComputer/A205-Carrier-Board-Specification.pdf";
const a205eSheet =
  "https://files.seeedstudio.com/products/114110148_A205E%20mini%20pc/A205E_Mini_PC_Datasheet.pdf";
const a608Sheet =
  "https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608_Carrier_Board_Datasheet.pdf";

// Labels have explicit evidence, rather than treating a legacy scenario tag as
// proof. Unverified legacy associations are deliberately not migrated.
const positioning = {
  "classic-j10": {
    applications: ["learning", "edge_ai"],
    basis:
      "Getting-started introduction: embedded AI development and deployment.",
  },
  "classic-j20": {
    applications: ["edge_ai", "industrial", "robotics"],
    basis:
      "Introduction names object detection, robotics and industrial automation.",
  },
  "classic-j40": {
    applications: ["edge_ai", "industrial", "robotics"],
    basis:
      "Introduction names video analytics, robotics and industrial automation.",
  },
  "industrial-j20": {
    applications: ["industrial", "edge_ai", "robotics"],
    basis: "Introduction names video analytics, robots and smart factories.",
  },
  "industrial-j40": {
    applications: ["industrial", "edge_ai", "robotics"],
    basis: "Introduction names video analytics, robots and smart factories.",
  },
  "reserver-j40": {
    applications: ["industrial", "edge_ai"],
    basis:
      "Introduction identifies an AI NVR/VMS for smart factories and security.",
  },
  mini: {
    applications: ["robotics", "autonomous"],
    basis:
      "Introduction identifies autonomous drones, patrol and delivery robots.",
  },
  super: {
    applications: ["learning", "edge_ai", "industrial", "robotics"],
    basis:
      "Features describe development, real-time inference, robotics and industrial automation.",
  },
  "robotics-j40": {
    applications: ["robotics", "autonomous"],
    basis: "Features identify advanced and autonomous robotics.",
  },
  rugged: {
    applications: ["outdoor", "robotics", "industrial"],
    basis:
      "Introduction identifies AMR, agriculture, maritime and industrial automation.",
  },
  "robotics-j501": {
    applications: ["robotics", "autonomous"],
    basis:
      "Exact-SKU product description identifies mobile robots and autonomous vehicles.",
  },
  "classic-j501": {
    applications: ["learning", "robotics", "autonomous"],
    basis:
      "Introduction/features describe development, physical AI, Isaac ROS and robotic systems.",
  },
  a205: {
    applications: ["industrial", "edge_ai", "robotics", "autonomous"],
    basis:
      "Datasheet application panel names industrial automation, robot control, drones and video analysis.",
    source: a205Sheet,
  },
  a205e: {
    applications: ["robotics", "edge_ai"],
    basis: "Manufacturer catalog positions A205E for robotics and edge AI.",
    source:
      "https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf",
  },
  "board-mini": {
    applications: ["robotics", "autonomous"],
    basis:
      "Mini system introduction documents the embedded board in autonomous robots.",
    source: wiki("recomputer_jetson_mini_getting_started"),
  },
  "board-robotics": {
    applications: ["robotics", "autonomous"],
    basis: "Introduction identifies advanced robotics and autonomous machines.",
  },
  a608: {
    applications: ["robotics", "autonomous"],
    basis:
      "Datasheet introduction explicitly identifies integration on drones/robots.",
    source: a608Sheet,
  },
  a603: {
    applications: ["edge_ai"],
    basis:
      "Exact-SKU description identifies integration into edge computing applications.",
    source:
      "https://www.seeedstudio.com/A603-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5635.html",
  },
  "board-mini-j501": {
    applications: ["robotics", "edge_ai"],
    basis:
      "Introduction identifies edge AI and robotics, including motion planning and sensor fusion.",
  },
  "mini-j501": {
    applications: ["robotics", "edge_ai"],
    basis:
      "Introduction identifies edge AI and robotics, including motion planning and sensor fusion.",
  },
  "board-j601": {
    applications: ["robotics", "autonomous", "edge_ai"],
    basis:
      "Introduction identifies humanoids, physical AI and multimodal vision models.",
  },
};

// Only explicitly identified Type-A host ports. In particular Mini's Type-C
// and JST host ports and Robotics' Type-C Host/DP are not counted here.
const usbA = {
  "classic-j10": [3, "1 × USB 3.0 (5Gbps); 2 × USB 2.0"],
  "classic-j20": [4, "4 × USB 3.1 Type-A (J201x); USB 3.0 Type-A (J202x)"],
  "classic-j40": [4, "4 × USB 3.2 Type-A (10Gbps)"],
  "industrial-j20": [3, "3 × USB 3.2 Gen 1 Type-A"],
  "industrial-j40": [3, "3 × USB 3.2 Gen 1 Type-A"],
  "reserver-j40": [4, "4 × USB 3.1 Type-A"],
  mini: [2, "2 × USB 3.2 Type-A (10Gbps)"],
  super: [4, "4 × USB 3.2 Type-A (5Gbps)"],
  "robotics-j40": [6, "6 × USB 3.2 Type-A (5Gbps)"],
  rugged: [
    4,
    "4 × USB 3.2 via waterproof M12 connectors; matching breakout cables required",
  ],
  "robotics-j501": [
    3,
    "3 × USB 3.0 Type-A (5Gbps); exact-SKU product specification",
  ],
  "classic-j501": [4, "4 × USB 3.2 Type-A"],
  "board-j101": [3, "1 × USB 3.0 Type-A; 2 × USB 2.0 Type-A"],
  "board-j202": [4, "4 × USB 3.0 Type-A"],
  a203: [2, "2 × USB 3.0 Type-A"],
  a205: [4, "4 × USB 3.0 Type-A"],
  a205e: [4, "4 × USB 3.0 Type-A"],
  "board-j401": [4, "4 × USB 3.2 Type-A (10Gbps)"],
  "board-mini": [2, "2 × USB 3.2 Type-A (10Gbps)"],
  "extension-mini": [4, "4 × USB 3.2 Type-A (5Gbps) added by the extension"],
  "board-robotics": [6, "6 × USB 3.2 Type-A (5Gbps)"],
  "board-j501": [4, "4 × USB 3.2 Type-A"],
  "board-mini-j501": [2, "2 × USB 3.2 Type-A (10Gbps)"],
  "mini-j501": [2, "2 × USB 3.2 Type-A (10Gbps)"],
  "board-j601": [4, "4 × USB 3.2 Type-A (10Gbps)"],
  "reserver-j2032": [2, "2 × USB 3.2 Gen 2 Type-A"],
  a608: [4, "4 × USB 3.2 Type-A; integrated USB 2.0"],
  a603: [2, "2 × USB 3.0 Type-A; ZIF host and Micro-AB excluded"],
  a607: [4, "4 × USB 3.0 Type-A; Type-C and ZIF host excluded"],
};

// A preinstallation statement is required; no default is derived from support.
const factory = {
  "classic-j10": "4.6.1",
  "classic-j20":
    "4.6 (getting-started introduction; patch version not specified)",
  "classic-j40": "5.1.3",
  "industrial-j20": "5.1.3",
  "industrial-j40": "5.1.3",
  "reserver-j40": "5.1.1",
  mini: "6.0",
  super: "6.2",
  "robotics-j40": "6.2",
  "robotics-j501":
    "6.2.1 (current Wiki preinstallation statement). Datasheet lists 6.2; shipping revision is not specified.",
  "classic-j501": "7.2",
  "mini-j501": "6.2.1",
  "reserver-j2032": "4.6.1",
};

const wifiFamilies = new Set([
  "a603",
  "a607",
  "classic-j10",
  "classic-j20",
  "classic-j40",
  "industrial-j20",
  "industrial-j40",
  "reserver-j40",
  "mini",
  "super",
  "robotics-j40",
  "rugged",
  "robotics-j501",
  "classic-j501",
  "board-j101",
  "board-j202",
  "a203",
  "a205",
  "a205e",
  "board-j401",
  "board-mini",
  "board-robotics",
  "board-j501",
  "board-mini-j501",
  "mini-j501",
  "board-j601",
  "a608",
]);
const lteFamilies = new Set([
  "industrial-j20",
  "industrial-j40",
  "reserver-j40",
  "super",
  "robotics-j40",
  "robotics-j501",
  "board-robotics",
  "board-j501",
  "board-j601",
  "reserver-j2032",
  "a608",
]);
const fivegFamilies = new Set([
  "industrial-j20",
  "industrial-j40",
  "reserver-j40",
  "robotics-j40",
  "rugged",
  "robotics-j501",
  "board-robotics",
  "board-j501",
  "board-j601",
  "reserver-j2032",
  "a608",
]);
const Bids = new Set(["H", "AB", "I", "I2"]);

export function enrichConfiguration(p) {
  p.ports = { ...p.ports };
  const source = p.guides[0]?.url;
  const positioningRecord = positioning[p.familyId];
  p.applicationEvidence = (positioningRecord?.applications || []).map(
    (value) => ({
      value,
      source: positioningRecord.source || source,
      basis: positioningRecord.basis,
      checkedOn,
    }),
  );
  p.applications = p.applicationEvidence.map((e) => e.value);
  p.fieldSources = {};
  // Existing migrated values retain their primary specification source. New
  // overrides below carry the more specific source when it differs.
  for (const key of Object.keys(p)) p.fieldSources[key] = { source, checkedOn };
  const usbs = usbA[p.familyId];
  if (usbs) {
    p.ports.usb_a_count = usbs[0];
    p.usbASpec = usbs[1];
    p.fieldSources.usb_a = { source, checkedOn };
  }
  if (p.id === "D") {
    p.ports.usb_a_count = 4;
    p.usbASpec = "4 × USB 3.0 Type-A (5Gbps)";
  }
  if (p.familyId === "classic-j20")
    p.usbASpec = p.name.includes("J201")
      ? "4 × USB 3.1 Type-A"
      : "4 × USB 3.0 Type-A";
  if (["Q", "R"].includes(p.id)) {
    p.ports.usb_a_count = 6;
    p.usbASpec =
      "2 × USB 3.2 Type-A (10Gbps) + 4 × USB 3.2 Type-A (5Gbps) on included extension";
  }
  p.ports.wifi_expansion = wifiFamilies.has(p.familyId);
  p.ports.lte_expansion = lteFamilies.has(p.familyId) || Bids.has(p.id);
  p.ports.fiveg_expansion = fivegFamilies.has(p.familyId);
  p.wifiExpansion = p.ports.wifi_expansion
    ? "Optional Wi-Fi/Bluetooth module; not included unless listed under Installed wireless"
    : null;
  p.lteExpansion = p.ports.lte_expansion
    ? "Optional 4G/LTE module; compatible modem, SIM and antennas required"
    : null;
  p.fivegExpansion = p.ports.fiveg_expansion
    ? "Optional 5G module; compatible modem, SIM and antennas required"
    : null;
  p.installedWireless = p.ports.installed_wifi
    ? p.wireless
    : "Not documented; expansion capability does not mean a radio is supplied";
  if (p.familyId === "classic-j40") {
    p.csiSpec = "2 × 2-lane 15-pin CSI";
    p.lteExpansion = Bids.has(p.id)
      ? "Supported via onboard mini-PCIe; LTE module, SIM and antennas sold separately"
      : "No onboard LTE expansion connector documented; external USB networking is separate";
    p.miniPcie = Bids.has(p.id)
      ? "1 × mini-PCIe for LTE module (optional)"
      : "Not present in the documented onboard interface list";
    p.usbCSpec = "1 × USB 2.0 Type-C (device/recovery; not a host port)";
    if (Bids.has(p.id)) {
      p.applicationEvidence = ["learning", "edge_ai"].map((value) => ({
        value,
        source,
        basis:
          "J401B Features: development and production of embedded edge AI.",
        checkedOn,
      }));
      p.applications = p.applicationEvidence.map((e) => e.value);
      p.ports.usb_a_count = 2;
      p.usbASpec = "2 × USB 3.2 Type-A (10Gbps)";
      p.ports.mini_pcie_count = 1;
      p.jetpackVersions = ["5.1.1", "5.1.2", "5.1.3", "6.0", "6.1", "6.2"];
      p.installedWireless =
        "Not documented; the LTE modem is an optional expansion";
    } else {
      p.jetpackVersions = [
        "5.1.1",
        "5.1.2",
        "5.1.3",
        "6.0",
        "6.1",
        "6.2",
        "7.2",
      ];
      p.fieldSources.jetpackVersions = {
        source: "/reComputer_J4012_Flash_Jetpack/",
        checkedOn,
      };
      p.jetpackNotes =
        "For JetPack 6.2 or 7.2 with Orin NX on the J401 carrier, do not enable MAXN SUPER: the flashing guide states that cooling is insufficient for that mode.";
      p.installedWireless =
        "Wi-Fi/Bluetooth combo module and antennas included (getting-started Features)";
    }
  }
  if (p.familyId === "board-j401") {
    p.jetpackVersions = ["5.1.1", "5.1.2", "5.1.3", "6.0", "6.1", "6.2", "7.2"];
    p.jetpackByModule = {
      orin_nano: [...p.jetpackVersions],
      orin_nx: [...p.jetpackVersions],
    };
    p.fieldSources.jetpackVersions = {
      source: "/reComputer_J4012_Flash_Jetpack/",
      checkedOn,
    };
    p.jetpackNotes =
      "For JetPack 6.2 or 7.2 with Orin NX on the J401 carrier, do not enable MAXN SUPER: the flashing guide states that cooling is insufficient for that mode.";
  }
  if (["mini", "board-mini"].includes(p.familyId)) {
    p.usbCSpec = "1 × USB 3.0 Type-C host; Micro-B device/recovery is separate";
    p.internalUsb = "1 × USB 2.0 JST 5-pin host; excluded from USB-A count";
  }
  if (["robotics-j40", "board-robotics"].includes(p.familyId)) {
    p.usbCSpec =
      "1 × USB 3.0 Type-C host / DP 1.4; 1 × USB 2.0 Type-C device/debug";
    p.canSpec =
      "2 CAN channels: 2 × XT30 CAN0 connectors and 3 × JST-GH CAN1 connectors";
    p.fieldSources.can = { source, checkedOn: "2026-10-10" };
    p.jetpackVersions = ["6.2", "7.2"];
    if (p.jetpackByModule)
      p.jetpackByModule = {
        orin_nano: [...p.jetpackVersions],
        orin_nx: [...p.jetpackVersions],
      };
  }
  if (p.familyId === "super") {
    p.canSpec =
      "1 CAN channel (can0), 4-pin TTL/CMOS header; external CAN transceiver required";
    p.fieldSources.can = {
      source:
        wiki("recomputer_jetson_super_hardware_interfaces_usage") + "#can",
      checkedOn: "2026-10-10",
    };
  }
  if (p.familyId === "robotics-j501") {
    p.usbCSpec = "1 × USB 3.0 Type-C recovery; 1 × USB 2.0 Type-C debug";
    p.jetpackVersions = ["6.2", "6.2.1", "7.2"];
    p.fieldSources.usb_a = { source: p.purchaseUrl || j501Sheet, checkedOn };
    p.firmwareEvidence = [
      {
        version: "6.2",
        status:
          "Datasheet software version (not a batch-specific shipping guarantee)",
        source: j501Sheet,
        checkedOn,
      },
      {
        version: "6.2.1",
        status: "Current Wiki explicitly states pre-installed",
        source,
        checkedOn,
      },
    ];
  }
  if (p.familyId === "classic-j501")
    p.installedWireless =
      "Wi-Fi/Bluetooth module included in M.2 Key E (getting-started specification)";
  if (["a205", "a205e", "a608"].includes(p.familyId)) {
    const specific =
      p.familyId === "a205"
        ? a205Sheet
        : p.familyId === "a205e"
          ? a205eSheet
          : a608Sheet;
    p.fieldSources.usb_a = { source: specific, checkedOn };
    p.fieldSources.ports = { source: specific, checkedOn };
    p.sources = [...new Set([...p.sources, specific])];
  }
  if (p.familyId === "a608") {
    p.ports = {
      ...p.ports,
      usb3_count: 4,
      mipi_count: 1,
      can_count: 1,
      uart_count: 2,
      i2c_count: 2,
      spi_count: 1,
      has_gpio: true,
      hdmi_count: 1,
      m2_keye_count: 1,
      m2_keyb_count: 1,
    };
    p.csiSpec = "1 × 15-pin CSI";
    p.power = "9–20V DC";
    p.wifiExpansion = "M.2 Key E Wi-Fi module expansion";
    p.fieldSources.ports = {
      source: "https://files.seeedstudio.com/Bazaar/product_pdf/105110001.pdf",
      checkedOn,
    };
    p.fieldSources.power = p.fieldSources.ports;
  }
  if (["a603", "a607"].includes(p.familyId)) {
    const specific = `https://www.seeedstudio.com/${p.familyId.toUpperCase()}-Carrier-Board-for-Jetson-Orin-NX-Nano-p-${p.familyId === "a603" ? "5635" : "5634"}.html`;
    p.fieldSources.usb_a = { source: specific, checkedOn };
    p.fieldSources.ports = { source: specific, checkedOn };
    p.fieldSources.installedWireless = { source: specific, checkedOn };
    p.wifiExpansion = "M.2 Key E for an optional Wi-Fi/Bluetooth module";
    p.usbCSpec =
      p.familyId === "a607"
        ? "1 × USB 2.0 / 3.0 Type-C; excluded from Type-A count"
        : null;
    p.internalUsb = "1 × USB 3.0 ZIF 20-pin host; excluded from USB-A count";
    p.sources = [...new Set([...p.sources, specific])];
  }
  if (p.familyId === "board-j601") {
    p.moduleCompatibility =
      "Jetson AGX Thor T4000 / T5000; module purchased separately";
    p.canSpec = "T4000: 2 × isolated CAN; T5000: 4 × isolated CAN";
    p.ethernet10Spec = "T4000: 3 × 10Gb Ethernet; T5000: 4 × 10Gb Ethernet";
    p.usbCSpec = "1 × USB 2.0 Type-C debug; 1 × USB 3.0 Type-C recovery";
    p.ports.m2_keyb_count = 1;
    p.gmslExpansion =
      "8 camera channels via an optional GMSL extension; not included on the bare carrier";
  }
  if (p.familyId === "industrial-j20") p.jetpackVersions = ["5.1.1", "5.1.3"];
  if (["industrial-j40", "super", "reserver-j40"].includes(p.familyId))
    p.jetpackVersions = [...new Set([...p.jetpackVersions, "7.2"])];
  if (p.familyId === "reserver-j2032") {
    p.jetpackVersions = ["4.6.1"];
    p.ports.eth_1g_count = 1;
    p.ethernetOther = "1 × 2.5Gb Ethernet";
    p.miniPcie = "1 × mini-PCIe for optional cellular/LoRaWAN module";
  }
  p.jetpackFactory = p.type === "system" ? factory[p.familyId] || null : null;
  if (p.type === "system" && p.jetpackFactory && !p.firmwareEvidence)
    p.firmwareEvidence = [
      {
        version: p.jetpackFactory,
        status: "Explicit preinstallation statement",
        source,
        checkedOn,
      },
    ];
  p.expansionIds = ["mini", "board-mini"].includes(p.familyId)
    ? ["CBJ"]
    : p.familyId === "board-j501"
      ? ["CBP"]
      : [];
  p.includedExpansionIds = ["Q", "R"].includes(p.id) ? ["CBJ"] : [];
  p.comparisonFacts = configurationComparisonFacts(p, "2026-10-10");
  return p;
}
