// Shared detail/comparison presentation only: original rows and comparison facts
// stay intact. Display counts never filter or award comparison advantages.
import { specificationGroups, valueText } from "./model.js";
import { publishedTops } from "./comparisonFacts.js";

export function detailValue(p, [label, value, id]) {
  const result = { label, primary: valueText(value), note: null };
  if (id === "usb_a") result.label = "USB-A";
  if (value == null) return result;
  if (id === "ai_compute" && publishedTops(p) != null) {
    result.primary = `${publishedTops(p)} TOPS`;
    const qualifier = value.indexOf(" (");
    result.note =
      qualifier >= 0 ? value.slice(qualifier + 2).replace(/\)$/, "") : null;
  } else if (id === "usb_c") {
    result.primary = "Available";
    result.note = value;
  } else if (id === "usb_a") {
    const count = p.ports?.usb_a_count;
    if (Number.isFinite(count)) {
      const versions = [
        ...new Set(value.match(/USB \d(?:\.\d)?(?: Gen \d)?/g) || []),
      ];
      result.primary = `× ${count}${versions.length === 1 ? ` · ${versions[0]}` : ""}`;
      // Keep mixed speeds, included-extension details and connector conditions.
      const rate = value.match(/\(([^)]*Gbps)\)/)?.[1];
      result.note =
        /[;+]| on | via | added| excluded|integrated|exact-SKU/.test(value)
          ? value
          : rate || null;
    }
  } else if (id === "can" && p.canSpec) {
    const fact = p.comparisonFacts?.can;
    if (fact?.conditional) {
      result.primary = "T4000 × 2 / T5000 × 4";
      result.note = "Isolated CAN; count depends on the installed module.";
    } else if (Number.isFinite(fact?.value)) {
      result.primary = `× ${fact.value}`;
      result.note = p.canSpec.replace(/^\d+ CAN channels?[: ,]*/, "");
    }
  } else if (
    id === "ethernet10" &&
    p.comparisonFacts?.ethernet10?.conditional
  ) {
    result.primary = "T4000 × 3 / T5000 × 4";
    result.note = "Port count depends on the installed module.";
  } else if (id === "csi" && p.csiSpec) {
    const parts = p.csiSpec.match(/^(\d+) × (.+)$/);
    if (parts) {
      result.primary = `× ${parts[1]}`;
      result.note = parts[2].replace(/ CSI$/, "");
    }
  } else if (/^\d+ (?:connection|slot)\(s\)$/.test(value)) {
    result.primary = `× ${value.split(" ")[0]}`;
  } else if (
    value === "Connector available" ||
    value === "RTC connector available"
  ) {
    result.primary = "Available";
  }
  return result;
}

const documentKey = (url) => {
  try {
    const parsed = new URL(url, "https://wiki.seeedstudio.com");
    return `${parsed.origin}${parsed.pathname.replace(/\/$/, "")}`;
  } catch {
    return url;
  }
};
function referenceLabel(url) {
  if (/datasheet/i.test(url)) return "Product datasheet";
  if (/Hardware_Interfaces|interfaces/i.test(url))
    return "Hardware interface guide";
  if (/flash|jetpack/i.test(url)) return "JetPack flashing guide";
  if (/seeedstudio\.com\/.*-p-\d+/i.test(url)) return "Product specifications";
  if (/nvidia\./i.test(url)) return "NVIDIA module specifications";
  // Document-level labels, not a repeated link after every parameter.
  const name = url.split(/[?#]/)[0].split("/").filter(Boolean).at(-1);
  return (
    name?.replace(/\.(pdf|html?)$/i, "").replace(/[_-]+/g, " ") ||
    "Hardware specifications"
  );
}
export function detailReferences(p) {
  const covered = new Set(
    [
      ...(p.guides || []).map((g) => g.url),
      p.purchaseUrl,
      p.moduleSpec && p.sources?.[1],
    ]
      .filter(Boolean)
      .map(documentKey),
  );
  const links = [
    ...(p.sources || []),
    ...specificationGroups(p).flatMap((g) => g.rows.map((r) => r[3]?.source)),
    ...(p.firmwareEvidence || []).map((e) => e.source),
  ];
  const references = [];
  for (const url of links.filter(Boolean)) {
    const key = documentKey(url);
    if (covered.has(key)) continue;
    covered.add(key);
    references.push({ url, label: referenceLabel(url) });
  }
  return references;
}
