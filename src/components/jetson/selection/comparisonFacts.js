// Explicit comparison metadata for the English selector. Never parse arbitrary
// specification text or interpret an undocumented capability as unsupported.
const computeValues = {
  "20 TOPS (sparse INT8; original mode; not a system benchmark)": [
    20,
    "original",
  ],
  "40 TOPS (sparse INT8; original mode; not a system benchmark)": [
    40,
    "original",
  ],
  "70 TOPS (sparse INT8; original mode; not a system benchmark)": [
    70,
    "original",
  ],
  "100 TOPS (sparse INT8; original mode; not a system benchmark)": [
    100,
    "original",
  ],
  "34 TOPS (sparse INT8, Super mode)": [34, "super"],
  "67 TOPS (sparse INT8, Super mode)": [67, "super"],
  "117 TOPS (sparse INT8, Super mode)": [117, "super"],
  "157 TOPS (sparse INT8, Super mode)": [157, "super"],
  "200 TOPS (sparse INT8; module maximum, power-mode dependent)": [
    200,
    "module maximum",
  ],
  "275 TOPS (sparse INT8; module maximum, power-mode dependent)": [
    275,
    "module maximum",
  ],
};

// Only documented speeds; "USB 3.2" alone is not assumed to mean 10Gbps.
const usbSpeeds = {
  "classic-j10": [0.48, 5],
  "board-j101": [0.48, 5],
  "classic-j40": [10],
  "board-j401": [10],
  "industrial-j20": [5],
  "industrial-j40": [5],
  mini: [10],
  "board-mini": [10],
  super: [5],
  "robotics-j40": [5],
  "board-robotics": [5],
  "robotics-j501": [5],
  "board-j202": [5],
  a203: [5],
  a205: [5],
  a205e: [5],
  a603: [5],
  a607: [5],
  "board-mini-j501": [10],
  "mini-j501": [10],
  "board-j601": [10],
  "reserver-j2032": [10],
};

export function configurationComparisonFacts(p, checkedOn) {
  const facts = {};
  const evidence = (id) => p.fieldSources?.[id] || p.fieldSources?.ports;
  const record = (id, value, unit, display, source, extra = {}) => {
    if (value == null || !display || !source?.source) return;
    facts[id] = { value, unit, display, ...source, checkedOn, ...extra };
  };
  if (p.type === "system") {
    const source = { source: p.sources?.[1] };
    record(
      "memory",
      p.memoryGb,
      "GB",
      p.moduleSpec?.memory || `${p.memoryGb}GB`,
      source,
    );
    const display = p.moduleSpec?.aiPerformance;
    const compute = computeValues[display];
    if (compute)
      record("ai_compute", compute[0], "TOPS", display, source, {
        precision: "INT8",
        sparsity: "sparse",
        mode: compute[1],
      });
    if (display === "21 TOPS (INT8; module maximum)")
      record("ai_compute", 21, "TOPS", display, source, {
        precision: "INT8",
        sparsity: null,
        mode: "module maximum",
      });
  }
  let speeds = usbSpeeds[p.familyId];
  if (p.id === "D") speeds = [5];
  if (["Q", "R"].includes(p.id)) speeds = [5, 10];
  record(
    "usb_a",
    p.ports?.usb_a_count,
    "Type-A host ports",
    p.usbASpec,
    evidence("usb_a"),
    { speeds },
  );

  // CAN's legacy port count can mean physical connectors, not channels. Only
  // explicitly verified channels enter the comparison (Robotics: five plugs,
  // CAN0 + CAN1). Super's interface guide documents can0 and a transceiver.
  if (["robotics-j40", "board-robotics"].includes(p.familyId))
    record("can", 2, "CAN channels", p.canSpec, evidence("can"));
  if (p.familyId === "super")
    record("can", 1, "CAN channels", p.canSpec, evidence("can"));

  for (const [id, key, unit] of [
    ["ethernet", "eth_1g_count", "1Gb ports"],
    ["ethernet10", "eth_10g_count", "10Gb ports"],
    ["m2_keym_count", "m2_keym_count", "M.2 Key M slots"],
    ["m2_keye_count", "m2_keye_count", "M.2 Key E slots"],
    ["m2_keyb_count", "m2_keyb_count", "M.2 Key B slots"],
    ["sata_count", "sata_count", "SATA slots"],
  ]) {
    const value = p.ports?.[key];
    record(
      id,
      value,
      unit,
      id === "ethernet10" && p.ethernet10Spec
        ? p.ethernet10Spec
        : `${value} ${id.startsWith("ethernet") ? "connection(s)" : "slot(s)"}`,
      evidence("ports"),
    );
  }
  if (p.familyId === "board-j601") {
    // No module selection exists for this carrier. Do not rank T4000 counts
    // against another board or substitute the larger T5000 configuration.
    for (const [id, display] of [
      ["can", p.canSpec],
      ["ethernet10", p.ethernet10Spec],
    ])
      facts[id] = {
        ...evidence("ports"),
        display,
        checkedOn,
        conditional: true,
      };
  }
  for (const [id, display] of [
    ["wifi_expansion", p.wifiExpansion],
    ["lte_expansion", p.lteExpansion],
    ["fiveg_expansion", p.fivegExpansion],
  ]) {
    if (p.ports?.[id] === true)
      record(id, true, "onboard expansion", display, evidence(id), {
        optional: true,
      });
  }
  if (p.familyId === "classic-j40" && p.ports?.lte_expansion === false)
    record(
      "lte_expansion",
      false,
      "onboard expansion",
      p.lteExpansion,
      evidence("ports"),
      {
        basis:
          "The documented onboard interface list has no LTE expansion connector; this does not exclude USB networking.",
      },
    );
  return facts;
}

// Filtering is a published-value shortlist, not a cross-architecture benchmark.
// Keep its source/display guard shared with the detail view; unknown precision
// does not authorize an advantage in comparisonInsight below.
export function publishedTops(p) {
  const fact = p.comparisonFacts?.ai_compute;
  return p.type === "system" &&
    fact?.unit === "TOPS" &&
    fact.source &&
    fact.checkedOn &&
    !fact.conflict &&
    !fact.conditional &&
    fact.display === p.moduleSpec?.aiPerformance &&
    Number.isFinite(fact.value) &&
    fact.value > 0
    ? fact.value
    : null;
}

const reasons = {
  memory: "More memory",
  ai_compute: "Higher published TOPS",
  usb_a: "More USB-A ports",
  can: "More CAN channels",
  ethernet: "More 1Gb Ethernet ports",
  ethernet10: "More 10Gb Ethernet ports",
  m2_keym_count: "More M.2 Key M slots",
  m2_keye_count: "More M.2 Key E slots",
  m2_keyb_count: "More M.2 Key B slots",
  sata_count: "More SATA slots",
  wifi_expansion: "Onboard Wi-Fi expansion",
  lte_expansion: "Onboard LTE expansion",
  fiveg_expansion: "Onboard 5G expansion",
};
const text = (v) => (v == null || v === "" ? "Not documented" : String(v));

export function comparisonInsight(row, items) {
  const different = text(row.values[0]) !== text(row.values[1]);
  const result = { different, advantageIndex: null, reason: null, notes: [] };
  if (!different || items.length !== 2 || !reasons[row.id]) return result;
  const facts = items.map((p) => p.comparisonFacts?.[row.id]);
  const [a, b] = facts;
  if (facts.some((fact) => fact?.conditional)) {
    result.notes.push("Counts depend on T4000 / T5000");
    return result;
  }
  if (
    facts.some(
      (fact, i) =>
        !fact?.source ||
        !fact.checkedOn ||
        fact.conflict ||
        fact.display !== text(row.values[i]) ||
        fact.value == null,
    )
  )
    return result;
  if (
    !a.unit ||
    !b.unit ||
    a.unit !== b.unit ||
    items[0].type !== items[1].type
  )
    return result;
  if (
    ["memory", "ai_compute"].includes(row.id) &&
    items.some((p) => p.type !== "system")
  )
    return result;
  if (row.id === "ai_compute") {
    if (
      a.unit !== "TOPS" ||
      !a.precision ||
      !a.sparsity ||
      a.precision !== b.precision ||
      a.sparsity !== b.sparsity
    )
      return result;
    if (a.mode && b.mode && a.mode !== b.mode)
      result.notes.push("Different power modes");
  }
  if (
    row.id === "usb_a" &&
    a.speeds?.length &&
    b.speeds?.length &&
    a.speeds.join(",") !== b.speeds.join(",")
  )
    result.notes.push("Different USB-A speeds");
  if (row.id.endsWith("_expansion")) {
    if (
      typeof a.value !== "boolean" ||
      typeof b.value !== "boolean" ||
      a.value === b.value
    )
      return result;
    // Explicit absence requires its own evidence, not a false legacy flag.
    if (!(a.value === false ? a : b).basis) return result;
    result.advantageIndex = a.value ? 0 : 1;
    result.notes.push("Module expansion only; not an installed radio");
  } else {
    if (
      ![a.value, b.value].every((v) => Number.isFinite(v) && v >= 0) ||
      a.value === b.value
    )
      return result;
    result.advantageIndex = a.value > b.value ? 0 : 1;
  }
  result.reason = reasons[row.id];
  return result;
}
