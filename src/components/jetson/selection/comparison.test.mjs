import test from "node:test";
import assert from "node:assert/strict";
import { products } from "./catalog.js";
import { comparisonGroups, specificationGroups } from "./model.js";
import { comparisonInsight } from "./comparisonFacts.js";
import { detailValue } from "./detailPresentation.js";

const p = (id) => products.find((item) => item.id === id);
const rows = (items) => comparisonGroups(items).flatMap((group) => group.rows);
const row = (id, items = [p("U"), p("S")]) =>
  rows(items).find((r) => r.id === id);
const changedFact = (product, id, changes) => ({
  ...product,
  comparisonFacts: {
    ...product.comparisonFacts,
    [id]: { ...product.comparisonFacts[id], ...changes },
  },
});

test("comparison cells use the same compact values and notes as details for every selectable product", () => {
  const selectable = products.filter((p) =>
    ["system", "carrier"].includes(p.type),
  );
  for (const product of selectable) {
    const partner = selectable.find(
      (p) => p.type === product.type && p.id !== product.id,
    );
    const pair = [product, partner];
    for (const row of rows(pair)) {
      const display = detailValue(product, [row.label, row.values[0], row.id]);
      const original = specificationGroups(product)
        .flatMap((g) => g.rows)
        .find((r) => r[2] === row.id);
      if (original) assert.deepEqual(display, detailValue(product, original));
      else assert.equal(display.primary, "Not documented");
      assert.doesNotMatch(display.primary, /connection\(s\)|slot\(s\)/);
    }
  }
});

test("compact comparison preserves count semantics, conditional notes and one-sided advantages", () => {
  const pair = [p("U"), p("S")];
  const before = JSON.stringify(rows(pair));
  const display = (id, items = pair) => {
    const spec = row(id, items);
    return spec.values.map((value, i) =>
      detailValue(items[i], [spec.label, value, id]),
    );
  };
  assert.deepEqual(
    display("usb_a").map((d) => d.primary),
    ["× 6 · USB 3.2", "× 4 · USB 3.2"],
  );
  assert.deepEqual(
    display("can").map((d) => d.primary),
    ["× 2", "× 1"],
  );
  assert.match(display("can")[0].note, /2 × XT30.*3 × JST-GH/);
  assert.match(display("can")[1].note, /external CAN transceiver required/);
  assert.deepEqual(
    display("can", [p("CBR"), p("CBK")])[0].primary,
    "T4000 × 2 / T5000 × 4",
  );
  assert.equal(
    display("ethernet10", [p("CBR"), p("CBK")])[0].primary,
    "T4000 × 3 / T5000 × 4",
  );
  for (const spec of rows(pair)) {
    const normal = spec.values.map((value, i) =>
      detailValue(pair[i], [spec.label, value, spec.id]),
    );
    const reversedPair = [...pair].reverse(),
      reversedSpec = row(spec.id, reversedPair);
    const reversed = reversedSpec.values.map((value, i) =>
      detailValue(reversedPair[i], [spec.label, value, spec.id]),
    );
    assert.deepEqual(reversed, [...normal].reverse());
  }
  assert.equal(JSON.stringify(rows(pair)), before);
  assert.equal(row("usb_a").advantageIndex, 0);
  assert.equal(row("ai_compute").advantageIndex, 1);
});

test("example highlights one side only: published TOPS, Type-A hosts, independent CAN channels", () => {
  assert.equal(row("ai_compute").advantageIndex, 1);
  assert.equal(row("ai_compute").reason, "Higher published TOPS");
  assert.deepEqual(row("ai_compute").notes, ["Different power modes"]);
  assert.equal(row("usb_a").advantageIndex, 0);
  assert.equal(row("usb_a").reason, "More USB-A ports");
  assert.equal(p("U").ports.can_count, 5); // physical plugs, not channels
  assert.equal(p("U").comparisonFacts.can.value, 2);
  assert.equal(p("S").comparisonFacts.can.value, 1);
  assert.equal(row("can").advantageIndex, 0);
  assert.match(row("can").values[1], /external CAN transceiver required/);
  assert.match(
    row("can").sources[1].source,
    /hardware_interfaces_usage\/#can$/,
  );
});

test("swapping products moves the same advantage; differences-only retains neutral rows", () => {
  const pair = [p("U"), p("S")];
  for (const original of rows(pair)) {
    const reversed = row(original.id, [...pair].reverse());
    assert.equal(reversed.different, original.different);
    assert.equal(reversed.reason, original.reason);
    assert.equal(
      reversed.advantageIndex,
      original.advantageIndex == null ? null : 1 - original.advantageIndex,
    );
  }
  const differences = rows(pair).filter((r) => r.different);
  for (const id of ["sku", "module_power_modes", "usb_c", "csi"])
    assert.ok(
      differences.some((r) => r.id === id && r.advantageIndex == null),
      id,
    );
  for (const id of ["gpu", "cpu", "memory", "ethernet"])
    assert.equal(row(id).different, false, id);
});

test("actual system memory has a numeric comparison; carriers never borrow module capacity", () => {
  assert.equal(row("memory", [p("S"), p("AG")]).advantageIndex, 1);
  assert.equal(row("memory", [p("S"), p("AG")]).reason, "More memory");
  const carriers = products.filter((item) => item.type !== "system");
  for (const item of carriers) {
    assert.equal(item.comparisonFacts.memory, undefined);
    assert.equal(item.comparisonFacts.ai_compute, undefined);
  }
  assert.ok(
    !rows([p("CBK"), p("CBR")]).some((r) =>
      ["memory", "ai_compute"].includes(r.id),
    ),
  );
  assert.equal(
    comparisonInsight(row("memory", [p("S"), p("AG")]), [
      { ...p("S"), type: "carrier" },
      { ...p("AG"), type: "carrier" },
    ]).advantageIndex,
    null,
  );
});

test("TOPS requires matching precision, sparsity and units; missing or conflicting evidence stays neutral", () => {
  for (const changes of [
    { precision: "FP16" },
    { precision: null },
    { sparsity: "dense" },
    { sparsity: null },
    { unit: "GFLOPS" },
    { source: null },
    { checkedOn: null },
    { conflict: true },
    { value: null },
    { value: NaN },
    { value: -1 },
    { value: "34" },
    { display: "stale specification" },
  ]) {
    assert.equal(
      row("ai_compute", [p("U"), changedFact(p("S"), "ai_compute", changes)])
        .advantageIndex,
      null,
      JSON.stringify(changes),
    );
  }
  for (const id of ["C", "AN"])
    assert.equal(row("ai_compute", [p(id), p("S")]).advantageIndex, null); // FP16 GFLOPS / undocumented sparsity
  assert.equal(
    row("ai_compute", [
      p("S"),
      changedFact(p("U"), "ai_compute", { value: 34 }),
    ]).advantageIndex,
    null,
  );
});

test("USB count is independent of speed; equal counts with different speeds have no winner", () => {
  const differentSpeeds = row("usb_a", [p("P"), p("S")]);
  assert.equal(differentSpeeds.advantageIndex, 1);
  assert.deepEqual(differentSpeeds.notes, ["Different USB-A speeds"]);
  const equalCounts = row("usb_a", [p("G2"), p("S")]);
  assert.equal(equalCounts.different, true);
  assert.equal(equalCounts.advantageIndex, null);
  assert.deepEqual(equalCounts.notes, ["Different USB-A speeds"]);
  assert.equal(p("U").comparisonFacts.usb_a.value, 6);
  assert.equal(p("U").ports.usb3_count, 7); // Type-C host is excluded
});

test("missing counts and unverified CAN connectors do not become zero channels", () => {
  const missing = {
    ...p("S"),
    canSpec: null,
    ports: { ...p("S").ports, can_count: null },
    comparisonFacts: {},
  };
  assert.equal(row("can", [p("U"), missing]).advantageIndex, null);
  assert.equal(row("usb_c").advantageIndex, null);
  assert.equal(row("can", [p("U"), p("G2")]).advantageIndex, null);
  assert.equal(
    row("usb_a", [
      changedFact(p("U"), "usb_a", { unit: null }),
      changedFact(p("S"), "usb_a", { unit: null }),
    ]).advantageIndex,
    null,
  );
});

test("Thor's conditional interfaces are neutral, never a maximum across module variants", () => {
  for (const id of ["can", "ethernet10"]) {
    const conditional = row(id, [p("CBR"), p("CBO")]);
    assert.equal(conditional.advantageIndex, null);
    assert.deepEqual(conditional.notes, ["Counts depend on T4000 / T5000"]);
    assert.match(conditional.values[0], /T4000.*T5000/);
    assert.equal(p("CBR").comparisonFacts[id].value, undefined);
  }
});

test("Ethernet speeds and storage Key types compare independently", () => {
  assert.equal(row("ethernet", [p("S"), p("G2")]).advantageIndex, 0);
  assert.equal(row("ethernet10", [p("S"), p("CBO")]).advantageIndex, null);
  assert.equal(row("ethernet", [p("AR"), p("G2")]).advantageIndex, null); // 2.5Gb is not added to 1Gb
  assert.equal(row("m2_keyb_count", [p("U"), p("S")]).advantageIndex, null); // unknown, not zero
  const base = p("S");
  const higher = changedFact(
    { ...base, ports: { ...base.ports, m2_keym_count: 2 } },
    "m2_keym_count",
    { value: 2, display: "2 slot(s)" },
  );
  assert.equal(row("m2_keym_count", [base, higher]).advantageIndex, 1);
  assert.equal(row("m2_keye_count", [base, higher]).advantageIndex, null);
});

test("B LTE expansion has explicit onboard absence on the other side, not a supplied modem", () => {
  const lte = row("lte_expansion", [p("G2"), p("I2")]);
  assert.equal(lte.advantageIndex, 1);
  assert.equal(lte.reason, "Onboard LTE expansion");
  assert.deepEqual(lte.notes, [
    "Module expansion only; not an installed radio",
  ]);
  assert.match(lte.values[1], /sold separately/);
  assert.equal(
    row("installed_wireless", [p("G2"), p("I2")]).advantageIndex,
    null,
  );
  assert.equal(row("lte_expansion", [p("C"), p("I2")]).advantageIndex, null); // false legacy flag is unknown
  assert.equal(
    row("lte_expansion", [
      changedFact(p("G2"), "lte_expansion", { basis: null }),
      p("I2"),
    ]).advantageIndex,
    null,
  );
});

test("rankable facts share display and primary evidence with specifications; unlisted fields stay neutral", () => {
  for (const item of products) {
    const specs = specificationGroups(item).flatMap((g) => g.rows);
    for (const [id, fact] of Object.entries(item.comparisonFacts)) {
      const spec = specs.find((r) => r[2] === id);
      assert.ok(spec, `${item.id}:${id}`);
      assert.equal(spec[1], fact.display, `${item.id}:${id}`);
      assert.equal(spec[3].source, fact.source, `${item.id}:${id}`);
      assert.ok(fact.checkedOn, `${item.id}:${id}`);
    }
  }
  for (const id of [
    "module_power_modes",
    "sku",
    "gpu",
    "cpu",
    "default_jetpack",
    "dc_input",
    "operating_temperature",
    "protection_rating",
  ])
    assert.equal(row(id).advantageIndex, null, id);
});
