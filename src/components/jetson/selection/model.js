import { products, productFamilies } from "./catalog.js";
import { comparisonInsight, publishedTops } from "./comparisonFacts.js";

export const types = [
  { value: "all", label: "All" },
  { value: "system", label: "Systems" },
  { value: "carrier", label: "Carrier boards" },
];
export const isInView = (p, type) =>
  type === "all"
    ? p.type === "system" || p.type === "carrier"
    : p.type === type;
export const computeOptions = (catalog = products) =>
  [...new Set(catalog.map(publishedTops).filter((v) => v != null))]
    .sort((a, b) => a - b)
    .map((value) => ({ value: String(value), label: `${value} TOPS or more` }));
export const modules = [
  ["nano", "Jetson Nano"],
  ["tx2_nx", "Jetson TX2 NX"],
  ["xavier_nx", "Jetson Xavier NX"],
  ["orin_nano", "Jetson Orin Nano"],
  ["orin_nx", "Jetson Orin NX"],
  ["agx_orin", "Jetson AGX Orin"],
  ["agx_thor", "Jetson AGX Thor"],
].map(([value, label]) => ({ value, label }));

export const interfaces = [
  ["usb_a", "USB-A", "usb_a_count"],
  ["can", "CAN", "can_count"],
  ["csi", "MIPI CSI", "mipi_count"],
  ["gmsl", "GMSL", "gmsl_count"],
  ["ethernet", "1Gb Ethernet", "eth_1g_count"],
  ["ethernet10", "10Gb Ethernet", "eth_10g_count"],
  ["poe", "PoE Ethernet", "poe_count"],
  ["serial", "RS-232/422/485", "rs_count"],
  ["uart", "UART", "uart_count"],
  ["i2c", "I²C", "i2c_count"],
  ["spi", "SPI", "spi_count"],
  ["gpio", "GPIO / DI / DO", "has_gpio"],
  ["wifi_expansion", "Wi-Fi module expansion", "wifi_expansion"],
  ["lte_expansion", "4G/LTE module expansion", "lte_expansion"],
  ["fiveg_expansion", "5G module expansion", "fiveg_expansion"],
].map(([value, label, field]) => ({ value, label, field }));
export const applications = [
  ["learning", "Learning & prototyping", "Develop and test Jetson projects"],
  [
    "edge_ai",
    "Edge AI & video analytics",
    "Process camera streams at the edge",
  ],
  [
    "industrial",
    "Industrial control",
    "Connect industrial equipment and control I/O",
  ],
  ["robotics", "Robotics & AMR", "Integrate sensors and mobile robot control"],
  [
    "outdoor",
    "In-vehicle & outdoor",
    "Deploy systems in vehicles and outdoor settings",
  ],
  [
    "autonomous",
    "Autonomous systems & advanced R&D",
    "Explore multi-sensor autonomous systems",
  ],
].map(([value, label, description]) => ({
  value,
  label,
  description,
  illustration: value,
}));
export const moduleOptionsForType = (type, catalog = products) =>
  modules
    .filter(
      (m) =>
        m.value === "agx_thor" ||
        catalog.some(
          (p) =>
            isInView(p, type) &&
            (p.type === "system"
              ? p.moduleKey === m.value
              : p.supportedModules.includes(m.value)),
        ),
    )
    .map((m) => ({
      ...m,
      disabled: type === "system" && m.value === "agx_thor",
      description:
        type === "system" && m.value === "agx_thor"
          ? "Carrier boards only in this catalog"
          : undefined,
    }));
export const usbAOptions = (type, catalog = products) =>
  Array.from(
    {
      length: Math.max(
        1,
        ...catalog
          .filter((p) => isInView(p, type))
          .map((p) => p.ports?.usb_a_count || 0),
      ),
    },
    (_, i) => i + 1,
  );
export const storageOptions = [
  { value: "m2_keym_count", label: "M.2 Key M (NVMe)" },
  { value: "sata_count", label: "SATA" },
  { value: "sd", label: "SD card" },
  { value: "m2_keye_count", label: "M.2 Key E slot" },
  { value: "m2_keyb_count", label: "M.2 Key B slot" },
];
export const emptyFilters = () => ({
  application: "",
  module: "",
  memory: "",
  computeMin: "",
  interfaces: [],
  usbAMin: "",
  jetpack: "",
  search: "",
  storage: "",
  ip: "",
  voltage: "",
  temperature: "",
});
export const createTypeState = () =>
  Object.fromEntries(
    types.map(({ value }) => [
      value,
      { filters: emptyFilters(), selected: [], configurations: {} },
    ]),
  );
export const valueText = (value) =>
  value == null || value === "" || value === "-"
    ? "Not documented"
    : String(value);
export const familyName = (id) =>
  productFamilies.find((f) => f.id === id)?.name || id;
export const hasInterface = (product, key) => {
  const field = interfaces.find((i) => i.value === key)?.field;
  return (
    field != null &&
    (product.ports?.[field] === true || product.ports?.[field] > 0)
  );
};

// Evaluate each published temperature mode separately, never join different modes.
export function temperatureRanges(text) {
  return [
    ...(text || "").matchAll(
      /(-?\d+(?:\.\d+)?)\s*(?:°C|℃|C)?\s*(?:to|~|–|-)\s*\+?(\d+(?:\.\d+)?)/g,
    ),
  ].map((m) => [Number(m[1]), Number(m[2])]);
}
export function voltageRange(text) {
  const range = (text || "").match(
    /(\d+(?:\.\d+)?)\s*(?:V)?\s*[-–]\s*(\d+(?:\.\d+)?)\s*V/i,
  );
  if (range) return [Number(range[1]), Number(range[2])];
  const fixed = (text || "").match(/(\d+(?:\.\d+)?)\s*V/i);
  return fixed ? [Number(fixed[1]), Number(fixed[1])] : null;
}
export function matchesProduct(product, filters, type = product.type) {
  if (!isInView(product, type)) return false;
  if (
    filters.application &&
    !product.applications?.includes(filters.application)
  )
    return false;
  if (
    filters.module &&
    (product.type === "system"
      ? product.moduleKey !== filters.module
      : !(product.supportedModules || []).includes(filters.module))
  )
    return false;
  if (
    filters.memory &&
    (product.type !== "system" ||
      product.memoryGb == null ||
      product.memoryGb < Number(filters.memory))
  )
    return false;
  if (filters.computeMin) {
    const required = Number(filters.computeMin),
      value = publishedTops(product);
    if (
      !Number.isFinite(required) ||
      required <= 0 ||
      value == null ||
      value < required
    )
      return false;
  }
  if (!filters.interfaces.every((key) => hasInterface(product, key)))
    return false;
  if (
    filters.interfaces.includes("usb_a") &&
    (product.ports?.usb_a_count || 0) < Number(filters.usbAMin || 1)
  )
    return false;
  const versions =
    filters.module && product.jetpackByModule
      ? product.jetpackByModule[filters.module] || []
      : product.jetpackVersions || [];
  if (filters.jetpack && !versions.includes(filters.jetpack)) return false;
  if (
    filters.storage &&
    (filters.storage === "sd"
      ? !product.sdCard
      : !(product.ports?.[filters.storage] > 0))
  )
    return false;
  if (filters.ip && product.ip !== filters.ip) return false;
  if (filters.voltage) {
    const range = voltageRange(product.power),
      required = Number(filters.voltage);
    if (
      !Number.isFinite(required) ||
      !range ||
      required < range[0] ||
      required > range[1]
    )
      return false;
  }
  if (filters.temperature) {
    const required = Number(filters.temperature);
    if (
      !Number.isFinite(required) ||
      !temperatureRanges(product.temperature).some(
        ([lo, hi]) => required >= lo && required <= hi,
      )
    )
      return false;
  }
  const search = filters.search.trim().toLowerCase();
  if (search) {
    const haystack = [
      product.name,
      product.sku,
      familyName(product.familyId),
      product.module,
      ...(product.supportedModules || []).map(
        (k) => modules.find((m) => m.value === k)?.label,
      ),
      ...interfaces
        .filter((i) => hasInterface(product, i.value))
        .map((i) => i.label),
      ...storageOptions
        .filter((i) =>
          i.value === "sd" ? product.sdCard : product.ports?.[i.value] > 0,
        )
        .map((i) => i.label),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (!search.split(/\s+/).every((term) => haystack.includes(term)))
      return false;
  }
  return true;
}
export const filteredProducts = (filters, type, catalog = products) =>
  catalog.filter((p) => matchesProduct(p, filters, type));
// Presentation order within a series; keep the legacy catalogue order intact.
const configurationRanks = new Map(
  productFamilies.flatMap((family) =>
    (family.configurationOrder || []).map((id, rank) => [id, rank]),
  ),
);
export const sortConfigurations = (list) =>
  [...list].sort(
    (a, b) =>
      (configurationRanks.get(a.id) ?? Number.MAX_SAFE_INTEGER) -
      (configurationRanks.get(b.id) ?? Number.MAX_SAFE_INTEGER),
  );
export function groupProducts(list) {
  const groups = new Map();
  for (const p of list) {
    if (!groups.has(p.familyId))
      groups.set(p.familyId, {
        id: p.familyId,
        name: familyName(p.familyId),
        products: [],
      });
    groups.get(p.familyId).products.push(p);
  }
  return [...groups.values()].map((group) => ({
    ...group,
    products: sortConfigurations(group.products),
  }));
}
export const cardConfiguration = (group, configurations) =>
  group.products.find((p) => p.id === configurations[group.id]) ||
  group.products[0];
export function toggleComparison(selected, product, type, catalog = products) {
  if (
    !isInView(product, type) ||
    selected.some(
      (id) => catalog.find((p) => p.id === id)?.type !== product.type,
    )
  )
    return { selected, message: "Compare products of the same type." };
  if (selected.includes(product.id))
    return {
      selected: selected.filter((id) => id !== product.id),
      message: `${product.name} removed from comparison.`,
    };
  if (selected.length >= 2)
    return {
      selected,
      message:
        "Two configurations are already selected. Remove one before adding another.",
    };
  return {
    selected: [...selected, product.id],
    message: `${product.name} added to comparison.`,
  };
}
export function filterTags(filters) {
  return [
    filters.application && {
      key: "application",
      label: `Application: ${applications.find((a) => a.value === filters.application)?.label}`,
    },
    filters.module && {
      key: "module",
      label: modules.find((m) => m.value === filters.module)?.label,
    },
    filters.memory && { key: "memory", label: `Memory ≥ ${filters.memory}GB` },
    filters.computeMin && {
      key: "computeMin",
      label: `AI compute ≥ ${filters.computeMin} TOPS`,
    },
    ...filters.interfaces.map((key) => ({
      key: "interfaces",
      value: key,
      label:
        key === "usb_a"
          ? `USB-A ≥ ${filters.usbAMin || 1}`
          : interfaces.find((i) => i.value === key)?.label,
    })),
    filters.jetpack && { key: "jetpack", label: `JetPack ${filters.jetpack}` },
    filters.search && { key: "search", label: `Search: ${filters.search}` },
    filters.storage && {
      key: "storage",
      label: storageOptions.find((i) => i.value === filters.storage)?.label,
    },
    filters.ip && { key: "ip", label: filters.ip },
    filters.voltage && {
      key: "voltage",
      label: `DC input: ${filters.voltage}V`,
    },
    filters.temperature && {
      key: "temperature",
      label: `Operating at ${filters.temperature}°C`,
    },
  ].filter(Boolean);
}
export const portSummary = (p) =>
  interfaces
    .filter((i) => hasInterface(p, i.value))
    .map((i) =>
      p.familyId === "board-j601" && i.value === "can"
        ? "CAN: T4000 × 2 / T5000 × 4"
        : p.familyId === "board-j601" && i.value === "ethernet10"
          ? "10Gb Ethernet: T4000 × 3 / T5000 × 4"
          : i.value === "can" && p.canSpec?.startsWith("2 CAN channels")
            ? "2 CAN channels"
            : `${p.ports[i.field] === true ? "" : p.ports[i.field] + " × "}${i.label}`,
    )
    .join(" · ") || "Not documented";
export function specificationGroups(p) {
  const compute =
    p.type === "system"
      ? [
          ["Jetson module", p.module],
          [
            "Memory",
            p.moduleSpec?.memory ||
              (p.memoryGb != null ? `${p.memoryGb}GB` : null),
          ],
          ["AI compute", p.moduleSpec?.aiPerformance],
          ["GPU", p.moduleSpec?.gpu],
          ["CPU", p.moduleSpec?.cpu],
          ["Module power modes", p.moduleSpec?.power],
          ["Video capabilities", p.moduleSpec?.video],
        ]
      : p.type === "carrier"
        ? [
            [
              "Supported modules",
              p.moduleCompatibility ||
                p.supportedModules
                  ?.map((k) => modules.find((m) => m.value === k)?.label || k)
                  .join(" · "),
            ],
            [
              "Module included",
              "No; select a compatible Jetson module separately.",
            ],
          ]
        : [
            ["Compatible host", p.host],
            ["Jetson module", "Not included; expansion board only."],
          ];
  return [
    {
      title: p.type === "system" ? "Module & memory" : "Compatibility",
      rows: [...compute, ["SKU", p.sku]],
    },
    {
      title: "Interfaces, network & storage",
      rows: [
        ["USB-A host ports", p.usbASpec || null, "usb_a"],
        [
          "USB-C / recovery & debug",
          p.usbCSpec ||
            (p.ports?.has_usb_c
              ? "Connector documented; host/device role not specified here"
              : null),
          "usb_c",
        ],
        ["Internal USB", p.internalUsb, "internal_usb"],
        ...interfaces
          .filter(
            (i) =>
              ![
                "usb_a",
                "wifi_expansion",
                "lte_expansion",
                "fiveg_expansion",
              ].includes(i.value),
          )
          .map((i) => [
            i.label,
            (i.value === "can" && p.canSpec) ||
              (i.value === "csi" && p.csiSpec) ||
              (i.value === "ethernet10" && p.ethernet10Spec) ||
              (p.ports?.[i.field] === true
                ? "Connector available"
                : p.ports?.[i.field] != null
                  ? `${p.ports[i.field]} connection(s)`
                  : null),
            i.value,
          ]),
        ...storageOptions
          .filter((i) => i.value !== "sd")
          .map((i) => [
            i.label,
            p.ports?.[i.value] != null ? `${p.ports[i.value]} slot(s)` : null,
            i.value,
          ]),
        ["Storage supplied", p.storage],
        ["SD card", p.sdCard],
        ["Mini-PCIe", p.miniPcie, "mini_pcie"],
        ["Wi-Fi module expansion", p.wifiExpansion, "wifi_expansion"],
        ["4G/LTE module expansion", p.lteExpansion, "lte_expansion"],
        ["5G module expansion", p.fivegExpansion, "fiveg_expansion"],
        ["Installed wireless", p.installedWireless, "installed_wireless"],
        ["Other Ethernet", p.ethernetOther, "ethernet_other"],
        ["GMSL expansion", p.gmslExpansion, "gmsl_expansion"],
        ["Display output", p.display],
        [
          "HDMI",
          p.ports?.hdmi_count != null
            ? `${p.ports.hdmi_count} connection(s)`
            : null,
          "hdmi",
        ],
        [
          "DisplayPort",
          p.ports?.dp_count != null
            ? `${p.ports.dp_count} connection(s)`
            : null,
          "dp",
        ],
        ["RTC", p.ports?.has_rtc ? "RTC connector available" : null, "rtc"],
        ["GMSL deserializer", p.deserializer],
      ],
    },
    {
      title: "Power & environment",
      rows: [
        ["DC input", p.power],
        ["Power connector", p.powerConnector],
        ["Cooling", p.cooling],
        ["Operating temperature", p.temperature],
        ["Protection rating", p.ip],
        ["Mounting", p.mounting],
        ["Dimensions", p.dimensions],
        ["Weight", p.weight],
        ["Warranty", p.warranty],
        ["Certifications", p.certifications],
        ["Module lifecycle", p.type === "system" ? p.lifetime : null],
        ["Configuration notes", p.notes],
      ],
    },
    {
      title: "JetPack",
      rows: [
        [
          "Supported JetPack versions",
          p.jetpackByModule
            ? Object.entries(p.jetpackByModule)
                .map(
                  ([key, versions]) =>
                    `${modules.find((m) => m.value === key)?.label || key}: ${versions.join(" · ")}`,
                )
                .join("\n")
            : p.jetpackVersions?.join(" · "),
        ],
        [
          "Default JetPack",
          p.type === "carrier"
            ? "Not applicable — carrier board supplied without a Jetson module"
            : p.jetpackFactory,
          "default_jetpack",
        ],
      ],
    },
  ].map((group) => ({
    ...group,
    id: group.title.toLowerCase().replace(/[^a-z0-9]+/g, "_"),
    rows: group.rows.map(([label, value, field]) => {
      const id = field || label.toLowerCase().replace(/[^a-z0-9]+/g, "_");
      const fieldKey =
        {
          default_jetpack: "jetpackFactory",
          supported_jetpack_versions: "jetpackVersions",
          installed_wireless: "installedWireless",
          dc_input: "power",
          operating_temperature: "temperature",
          protection_rating: "ip",
          storage_supplied: "storage",
        }[id] || id;
      const source = p.fieldSources?.[fieldKey] ||
        p.fieldSources?.ports || { source: p.sources?.[0] };
      const moduleRow = [
        "memory",
        "ai_compute",
        "gpu",
        "cpu",
        "module_power_modes",
        "video_capabilities",
      ].includes(id);
      return [
        label,
        value,
        id,
        p.comparisonFacts?.[id]?.source
          ? p.comparisonFacts[id]
          : moduleRow
            ? { source: p.sources?.[1] }
            : source,
      ];
    }),
  }));
}

// Semantic union: either configuration may have an independently documented
// field or group. Never drop a field that exists only in the second product.
export function comparisonGroups(items) {
  const groups = new Map();
  items.forEach((p, column) => {
    specificationGroups(p).forEach((group) => {
      if (!groups.has(group.id))
        groups.set(group.id, {
          id: group.id,
          title: group.title,
          rows: new Map(),
        });
      const target = groups.get(group.id);
      group.rows.forEach(([label, value, id, evidence]) => {
        if (!target.rows.has(id))
          target.rows.set(id, {
            id,
            label,
            values: items.map(() => null),
            sources: [],
          });
        const row = target.rows.get(id);
        row.values[column] = value;
        row.sources[column] = evidence;
      });
    });
  });
  return [...groups.values()].map((g) => ({
    ...g,
    rows: [...g.rows.values()]
      .filter((r) => r.values.some((v) => v != null))
      .map((row) => ({ ...row, ...comparisonInsight(row, items) })),
  }));
}
export const compatibleExpansions = (p, catalog = products) =>
  (p.expansionIds || [])
    .map((id) => ({
      product: catalog.find((e) => e.id === id),
      included: p.includedExpansionIds?.includes(id) || false,
    }))
    .filter((e) => e.product?.type === "expansion");
