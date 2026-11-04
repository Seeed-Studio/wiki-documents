import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { products } from "./catalog.js";
import {
  emptyFilters,
  filteredProducts,
  matchesProduct,
  computeOptions,
  moduleOptionsForType,
  usbAOptions,
  toggleComparison,
  createTypeState,
  filterTags,
  specificationGroups,
  comparisonGroups,
  groupProducts,
} from "./model.js";
import { publishedTops } from "./comparisonFacts.js";
import { detailValue, detailReferences } from "./detailPresentation.js";

const p = (id) => products.find((item) => item.id === id);
const f = (changes) => ({ ...emptyFilters(), ...changes });
const detail = (product, id) =>
  detailValue(
    product,
    specificationGroups(product)
      .flatMap((g) => g.rows)
      .find((r) => r[2] === id),
  );

test("All preserves catalogue order, excludes extensions and applies actual-type module semantics", () => {
  assert.deepEqual(
    filteredProducts(f(), "all"),
    products.filter((p) => p.type !== "expansion"),
  );
  assert.equal(
    moduleOptionsForType("all").find((m) => m.value === "agx_thor").disabled,
    false,
  );
  assert.deepEqual(
    filteredProducts(f({ module: "agx_thor" }), "all").map((p) => p.id),
    ["CBR"],
  );
  assert.ok(
    filteredProducts(f({ module: "orin_nx" }), "all").some(
      (p) => p.type === "system",
    ),
  );
  assert.ok(
    filteredProducts(f({ module: "orin_nx" }), "all").some(
      (p) => p.type === "carrier",
    ),
  );
  assert.ok(
    filteredProducts(f({ memory: "4" }), "all").every(
      (p) => p.type === "system",
    ),
  );
  assert.deepEqual(usbAOptions("all"), [1, 2, 3, 4, 5, 6]);
  for (const group of groupProducts(filteredProducts(f(), "all")))
    assert.equal(new Set(group.products.map((p) => p.type)).size, 1);
  assert.equal(
    matchesProduct(p("CBD"), f({ module: "nano", jetpack: "5.0.2" }), "all"),
    false,
  );
});

test("published TOPS thresholds include boundaries and stay independent of other filters", () => {
  assert.deepEqual(
    computeOptions().map((o) => Number(o.value)),
    [20, 21, 34, 40, 67, 70, 100, 117, 157, 200, 275],
  );
  for (const [computeMin, count] of [
    ["20", 49],
    ["100", 17],
    ["275", 3],
  ]) {
    const list = filteredProducts(f({ computeMin }), "all");
    assert.equal(list.length, count);
    assert.ok(
      list.every(
        (p) => p.type === "system" && publishedTops(p) >= Number(computeMin),
      ),
    );
    assert.deepEqual(list, filteredProducts(f({ computeMin }), "system"));
  }
  for (const { value } of computeOptions()) {
    assert.ok(
      filteredProducts(f({ computeMin: value }), "all").some(
        (p) => publishedTops(p) === Number(value),
      ),
    );
  }
  const constrained = f({
    computeMin: "100",
    module: "orin_nx",
    memory: "16",
    application: "robotics",
    interfaces: ["usb_a"],
    usbAMin: "6",
    search: "robotics",
  });
  assert.ok(filteredProducts(constrained, "all").length > 0);
  assert.ok(
    filteredProducts(constrained, "all").every(
      (p) =>
        p.memoryGb >= 16 && p.ports.usb_a_count >= 6 && publishedTops(p) >= 100,
    ),
  );
  assert.equal(
    filteredProducts(f({ computeMin: "275", module: "agx_thor" }), "all")
      .length,
    0,
  );
});

test("GFLOPS, carriers and undocumented or conflicting compute cannot satisfy TOPS", () => {
  assert.equal(publishedTops(p("C")), null);
  assert.equal(matchesProduct(p("C"), f({ computeMin: "20" }), "all"), false);
  assert.equal(publishedTops(p("CBR")), null);
  for (const change of [
    undefined,
    { conflict: true },
    { value: NaN },
    { unit: "GFLOPS" },
    { source: null },
    { display: "other mode" },
    { conditional: true },
    { checkedOn: null },
  ]) {
    const item = {
      ...p("S"),
      comparisonFacts: {
        ...p("S").comparisonFacts,
        ai_compute:
          change === undefined
            ? undefined
            : { ...p("S").comparisonFacts.ai_compute, ...change },
      },
    };
    assert.equal(matchesProduct(item, f({ computeMin: "20" }), "all"), false);
  }
  for (const computeMin of ["bad", "0", "-1", "Infinity"])
    assert.equal(filteredProducts(f({ computeMin }), "all").length, 0);
  assert.equal(publishedTops(p("U")), 20);
  assert.equal(
    matchesProduct(p("U"), f({ computeMin: "34", jetpack: "6.2" }), "all"),
    false,
  );
  assert.equal(publishedTops(p("AN")), 21);
  assert.equal(p("AN").comparisonFacts.ai_compute.sparsity, null);
  const row = comparisonGroups([p("AN"), p("S")])
    .flatMap((g) => g.rows)
    .find((r) => r.id === "ai_compute");
  assert.equal(row.advantageIndex, null);
});

test("All comparison stays same-type and three views retain independent conditions and identity", () => {
  const one = toggleComparison([], p("U"), "all");
  const mixed = toggleComparison(one.selected, p("CBK"), "all");
  assert.equal(mixed.selected, one.selected);
  assert.match(mixed.message, /same type/);
  const two = toggleComparison(one.selected, p("S"), "all");
  assert.deepEqual(two.selected, ["U", "S"]);
  assert.deepEqual(toggleComparison(two.selected, p("U"), "all").selected, [
    "S",
  ]);
  assert.deepEqual(toggleComparison(["CBK"], p("CBR"), "all").selected, [
    "CBK",
    "CBR",
  ]);
  assert.equal(toggleComparison([], p("CBP"), "all").selected.length, 0);
  const states = createTypeState();
  states.all.filters.computeMin = "100";
  states.all.selected = two.selected;
  states.all.configurations.super = "S";
  states.system.filters.computeMin = "275";
  states.carrier.filters.search = "Thor";
  assert.equal(matchesProduct(p("U"), states.all.filters, "all"), false);
  assert.deepEqual(filterTags(states.all.filters), [
    { key: "computeMin", label: "AI compute ≥ 100 TOPS" },
  ]);
  states.all.filters = emptyFilters();
  assert.deepEqual(states.all.selected, ["U", "S"]);
  assert.equal(states.all.configurations.super, "S");
  assert.equal(states.system.filters.computeMin, "275");
  assert.equal(states.carrier.filters.search, "Thor");
});

test("shared presentation simplifies counts without changing comparison facts or conditions", () => {
  const before = JSON.stringify(comparisonGroups([p("U"), p("S")]));
  assert.equal(detail(p("M"), "can").primary, "× 1");
  assert.equal(detail(p("M"), "usb_a").primary, "× 4 · USB 3.1");
  assert.equal(detail(p("U"), "can").primary, "× 2");
  assert.equal(detail(p("U"), "usb_c").primary, "Available");
  assert.match(detail(p("U"), "usb_c").note, /host.*device\/debug/);
  assert.match(detail(p("U"), "can").note, /2 × XT30.*3 × JST-GH/);
  assert.equal(detail(p("S"), "can").primary, "× 1");
  assert.match(detail(p("S"), "can").note, /external CAN transceiver required/);
  assert.equal(detail(p("CBR"), "can").primary, "T4000 × 2 / T5000 × 4");
  assert.equal(detail(p("CBR"), "ethernet10").primary, "T4000 × 3 / T5000 × 4");
  assert.equal(detail(p("S"), "ai_compute").primary, "34 TOPS");
  assert.match(detail(p("S"), "ai_compute").note, /sparse INT8.*Super/);
  assert.equal(detail(p("G2"), "csi").primary, "× 2");
  assert.match(detail(p("G2"), "csi").note, /2-lane 15-pin/);
  assert.equal(
    detailValue(p("S"), ["USB-A", null, "usb_a"]).primary,
    "Not documented",
  );
  for (const product of products)
    for (const row of specificationGroups(product).flatMap((g) => g.rows)) {
      const display = detailValue(product, row);
      assert.doesNotMatch(display.primary, /connection\(s\)|slot\(s\)/);
    }
  assert.equal(JSON.stringify(comparisonGroups([p("U"), p("S")])), before);
});

test("references consolidate per document; existing guides and batch firmware evidence stay available", () => {
  for (const product of products) {
    const references = detailReferences(product);
    const keys = references.map((l) =>
      new URL(l.url, "https://wiki.seeedstudio.com").pathname.replace(
        /\/$/,
        "",
      ),
    );
    assert.equal(keys.length, new Set(keys).size);
    for (const reference of references)
      assert.ok(
        !product.guides.some(
          (g) =>
            new URL(g.url, "https://wiki.seeedstudio.com").pathname.replace(
              /\/$/,
              "",
            ) ===
            new URL(
              reference.url,
              "https://wiki.seeedstudio.com",
            ).pathname.replace(/\/$/, ""),
        ),
      );
  }
  assert.ok(
    detailReferences(p("AF")).some((l) => /datasheet\.pdf$/.test(l.url)),
  );
  assert.match(detail(p("AF"), "default_jetpack").primary, /6\.2\.1.*6\.2;/);
  const component = readFileSync(
    new URL("./JetsonSelector.jsx", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(component, /Source ↗|specSource/);
  assert.match(component, /useState\("all"\)/);
});
