import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { products, productFamilies } from "./catalog.js";
import {
  emptyFilters,
  createTypeState,
  filteredProducts,
  groupProducts,
  cardConfiguration,
  hasInterface,
  matchesProduct,
  toggleComparison,
  temperatureRanges,
  voltageRange,
  specificationGroups,
  interfaces,
  storageOptions,
  modules,
  filterTags,
  types,
  applications,
  comparisonGroups,
  compatibleExpansions,
  usbAOptions,
  moduleOptionsForType,
  portSummary,
} from "./model.js";

const p = (id) => products.find((p) => p.id === id);
const f = (change) => ({ ...emptyFilters(), ...change });
test("only systems and carrier boards are selectable; extensions are host resources", () => {
  assert.deepEqual(
    types.map((t) => t.value),
    ["all", "system", "carrier"],
  );
  assert.deepEqual(Object.keys(createTypeState()), [
    "all",
    "system",
    "carrier",
  ]);
  assert.equal(filteredProducts(emptyFilters(), "all").length, 65);
  assert.equal(filteredProducts(emptyFilters(), "system").length, 51);
  assert.equal(filteredProducts(emptyFilters(), "carrier").length, 14);
  assert.deepEqual(
    compatibleExpansions(p("P")).map((e) => [e.product.id, e.included]),
    [["CBJ", false]],
  );
  assert.deepEqual(
    compatibleExpansions(p("R")).map((e) => [e.product.id, e.included]),
    [["CBJ", true]],
  );
  assert.deepEqual(
    compatibleExpansions(p("CBO")).map((e) => e.product.id),
    ["CBP"],
  );
  assert.equal(compatibleExpansions(p("S")).length, 0);
  assert.equal(hasInterface(p("P"), "can"), false);
  assert.equal(hasInterface(p("R"), "can"), true);
});
test("all six applications are real AND filters with traceable multi-use associations", () => {
  assert.equal(applications.length, 6);
  for (const { value } of applications) {
    const list = filteredProducts(f({ application: value }), "system");
    assert.ok(list.length > 0 && list.length < 51, value);
    assert.ok(list.every((item) => item.applications.includes(value)));
    assert.deepEqual(
      list.map((item) => item.id),
      products
        .filter(
          (item) => item.type === "system" && item.applications.includes(value),
        )
        .map((item) => item.id),
    );
    for (const item of list)
      assert.ok(
        item.applicationEvidence.some(
          (e) => e.value === value && e.source && e.basis && e.checkedOn,
        ),
      );
  }
  const constraints = f({
    application: "robotics",
    module: "orin_nx",
    memory: "16",
    interfaces: ["usb_a", "can"],
    usbAMin: "6",
  });
  assert.ok(filteredProducts(constraints, "system").length > 0);
  assert.ok(
    filteredProducts(constraints, "system").every(
      (item) =>
        item.applications.includes("robotics") &&
        item.memoryGb >= 16 &&
        item.ports.usb_a_count >= 6 &&
        hasInterface(item, "can"),
    ),
  );
  assert.ok(p("S").applications.length > 1);
  assert.deepEqual(p("CBM").applications, []); // No positioning claim in its flashing guide.
  assert.equal(
    filterTags(f({ application: "robotics" }))[0].key,
    "application",
  );
});
test("USB-A quantities count physical Type-A host ports only, including bundles", () => {
  assert.equal(p("U").ports.usb_a_count, 6);
  assert.equal(p("CBK").ports.usb_a_count, 6);
  assert.equal(p("CBL").ports.usb_a_count, 2);
  assert.equal(p("CBM").ports.usb_a_count, 4);
  assert.equal(p("P").ports.usb_a_count, 2);
  assert.equal(p("R").ports.usb_a_count, 6);
  assert.equal(p("AF").ports.usb_a_count, 3);
  assert.deepEqual(usbAOptions("system"), [1, 2, 3, 4, 5, 6]);
  for (const n of usbAOptions("system"))
    assert.ok(
      filteredProducts(
        f({ interfaces: ["usb_a"], usbAMin: String(n) }),
        "system",
      ).every((item) => item.ports.usb_a_count >= n),
    );
  assert.equal(
    filteredProducts(f({ interfaces: ["usb_a"], usbAMin: "7" }), "system")
      .length,
    0,
  );
  assert.equal(
    filterTags(f({ interfaces: ["usb_a"], usbAMin: "6" }))[0].label,
    "USB-A ≥ 6",
  );
  assert.equal(matchesProduct(p("C"), f({ usbAMin: "6" })), true); // Count only applies when the interface is selected.
  for (const id of ["hdmi", "dp", "rtc", "usb3", "usb", "usb_c"])
    assert.ok(!interfaces.some((i) => i.value === id));
});
test("Thor is named consistently, disabled for systems, and conditional carrier ports stay explicit", () => {
  const systemOption = moduleOptionsForType("system").find(
    (m) => m.value === "agx_thor",
  );
  assert.equal(systemOption.label, "Jetson AGX Thor");
  assert.equal(systemOption.disabled, true);
  assert.equal(
    moduleOptionsForType("carrier").find((m) => m.value === "agx_thor")
      .disabled,
    false,
  );
  assert.deepEqual(
    filteredProducts(f({ module: "agx_thor" }), "carrier").map(
      (item) => item.id,
    ),
    ["CBR"],
  );
  assert.equal(filteredProducts(f({ module: "agx_thor" }), "system").length, 0);
  const specs = specificationGroups(p("CBR")).flatMap((g) => g.rows);
  assert.match(
    specs.find((r) => r[2] === "supported_modules")[1],
    /T4000.*T5000/,
  );
  assert.match(
    specs.find((r) => r[2] === "ethernet10")[1],
    /T4000: 3.*T5000: 4/,
  );
  assert.match(specs.find((r) => r[2] === "can")[1], /T4000: 2.*T5000: 4/);
  assert.match(portSummary(p("CBR")), /T4000 × 2 \/ T5000 × 4/);
  assert.match(portSummary(p("CBK")), /2 CAN channels/);
});
test("comparison merges semantic IDs and exposes B-only LTE alongside USB and radio status", () => {
  const rows = comparisonGroups([p("G2"), p("I2")]).flatMap((g) => g.rows);
  assert.match(rows.find((r) => r.id === "usb_a").values[0], /4 ×/);
  assert.match(rows.find((r) => r.id === "usb_a").values[1], /2 ×/);
  assert.match(
    rows.find((r) => r.id === "lte_expansion").values[0],
    /No onboard/,
  );
  assert.match(
    rows.find((r) => r.id === "lte_expansion").values[1],
    /mini-PCIe.*sold separately/,
  );
  assert.notEqual(...rows.find((r) => r.id === "installed_wireless").values);
  const secondOnly = comparisonGroups([{ ...p("C"), miniPcie: null }, p("I2")])
    .flatMap((g) => g.rows)
    .find((r) => r.id === "mini_pcie");
  assert.equal(secondOnly.values[0], null);
  assert.ok(secondOnly.values[1]);
  assert.doesNotThrow(() =>
    comparisonGroups([
      { ...p("C"), ports: {}, moduleSpec: null },
      { ...p("I2"), moduleSpec: null },
    ]),
  );
});
test("firmware defaults have independent dated evidence and conflicts are preserved", () => {
  for (const item of products.filter(
    (item) => item.type === "system" && item.jetpackFactory,
  )) {
    assert.ok(item.firmwareEvidence.length > 0);
    assert.ok(item.firmwareEvidence.every((e) => e.source && e.checkedOn));
  }
  assert.deepEqual(
    p("AF").firmwareEvidence.map((e) => e.version),
    ["6.2", "6.2.1"],
  );
  assert.match(p("AF").jetpackFactory, /shipping revision is not specified/);
  assert.equal(p("P").jetpackFactory, "6.0");
  assert.equal(p("M").jetpackFactory, "5.1.1");
  assert.equal(p("Y").jetpackFactory, null);
  assert.ok(p("G2").jetpackVersions.includes("7.2"));
  assert.ok(!p("I2").jetpackVersions.includes("7.2"));
  assert.ok(p("CBH").jetpackByModule.orin_nx.includes("6.2"));
  assert.match(p("G2").jetpackNotes, /6\.2 or 7\.2.*do not enable MAXN SUPER/);
  for (const item of products.filter((item) => item.type === "carrier")) {
    assert.equal(item.jetpackFactory, null);
    const group = specificationGroups(item).find((g) => g.title === "JetPack");
    assert.match(
      group.rows.find((r) => r[2] === "default_jetpack")[1],
      /Not applicable/,
    );
  }
});
test("all 67 original IDs migrate exactly once, in original order", () => {
  const legacy = readFileSync(
    new URL("../JetsonProductSelector.jsx", import.meta.url),
    "utf8",
  );
  const records = JSON.parse(
    legacy.match(/const PRODUCTS = (\[[\s\S]*?\]);/)[1].replace(/,\s*]/g, "]"),
  );
  assert.equal(products.length, 67);
  assert.equal(new Set(products.map((p) => p.id)).size, 67);
  assert.deepEqual(
    products.map((p) => p.legacyId),
    records.map((p) => p.id),
  );
  assert.ok(
    products.every((p) => productFamilies.some((g) => g.id === p.familyId)),
  );
  assert.deepEqual(
    ["system", "carrier", "expansion"].map(
      (type) => products.filter((p) => p.type === type).length,
    ),
    [51, 14, 2],
  );
});
test("carrier and expansion boards do not borrow module memory or compute", () => {
  for (const board of products.filter((p) => p.type !== "system")) {
    assert.equal(board.memoryGb, null);
    assert.equal(board.moduleSpec, null);
    assert.equal(board.module, null);
    assert.ok(
      !specificationGroups(board)
        .flatMap((g) => g.rows)
        .some(([key]) => key === "AI compute" || key === "Memory"),
    );
  }
  assert.equal(p("CBQ").type, "carrier");
  assert.ok(p("CBQ").name.includes("Carrier Board"));
  assert.equal(p("CBP").ports.gmsl_count, 8);
});
test("concrete memory matches the listed module rather than a shared maximum", () => {
  for (const system of products.filter((p) => p.type === "system")) {
    assert.match(system.module, new RegExp(`${system.memoryGb}GB`));
    assert.ok(
      system.moduleSpec.memory.startsWith(`${system.memoryGb}GB`),
      system.id,
    );
  }
  assert.match(p("F").moduleSpec.gpu, /512-core/);
  assert.match(p("F").moduleSpec.power, /^7W \/ 10W/);
  assert.match(p("AA").moduleSpec.power, /^7W \/ 15W/);
  assert.match(p("S").moduleSpec.aiPerformance, /34 TOPS.*INT8.*Super/);
  assert.match(p("G").moduleSpec.cpu, /^6-core/);
  assert.match(p("G2").moduleSpec.cpu, /^8-core/);
  assert.match(p("G").moduleSpec.aiPerformance, /^70 TOPS/);
  assert.match(p("AS").moduleSpec.cpu, /^8-core/);
  assert.match(p("AS").moduleSpec.gpu, /^1792-core/);
  assert.match(p("AT").moduleSpec.cpu, /^12-core/);
});
test("minimum RAM and module requirements constrain configurations before series aggregation", () => {
  const list = filteredProducts(
    f({ memory: "16", module: "orin_nx" }),
    "system",
  );
  assert.ok(list.length > 0);
  assert.ok(list.every((p) => p.memoryGb >= 16 && p.moduleKey === "orin_nx"));
  const groups = groupProducts(list);
  assert.deepEqual(
    groups
      .flatMap((g) => g.products)
      .map((p) => p.id)
      .sort(),
    list.map((p) => p.id).sort(),
  );
  assert.ok(groups.every((g) => g.products.length > 0));
  assert.equal(
    cardConfiguration(groups[0], { [groups[0].id]: "F" }),
    groups[0].products[0],
  );
});
test("default series order follows first occurrence, not compute", () => {
  assert.deepEqual(
    groupProducts(filteredProducts(emptyFilters(), "system"))
      .slice(0, 3)
      .map((g) => g.id),
    ["classic-j10", "classic-j20", "classic-j40"],
  );
});
test("every interface requirement is a hard intersection", () => {
  for (const iface of interfaces) {
    for (const type of ["system", "carrier", "expansion"]) {
      const result = filteredProducts(f({ interfaces: [iface.value] }), type);
      assert.ok(result.every((p) => hasInterface(p, iface.value)));
    }
  }
  const result = filteredProducts(f({ interfaces: ["can", "gmsl"] }), "system");
  assert.ok(result.length > 0);
  assert.ok(
    result.every((p) => hasInterface(p, "can") && hasInterface(p, "gmsl")),
  );
  assert.equal(hasInterface(p("CBK"), "gmsl"), false);
  assert.equal(hasInterface(p("CBO"), "gmsl"), false);
});
test("expansion slots never imply installed wireless", () => {
  assert.equal(p("S").ports.installed_wifi, undefined);
  assert.equal(p("Y").ports.installed_cellular, undefined);
  assert.equal(p("CBM").ports.installed_wifi, true);
  assert.equal(hasInterface(p("S"), "lte_expansion"), true);
  assert.equal(hasInterface(p("G2"), "lte_expansion"), false);
  assert.equal(hasInterface(p("I2"), "lte_expansion"), true);
  assert.ok(
    filteredProducts(f({ interfaces: ["wifi_expansion"] }), "carrier").every(
      (p) => p.ports.wifi_expansion,
    ),
  );
});
test("IP66 excludes IP40 and unknown ratings", () => {
  assert.deepEqual(
    filteredProducts(f({ ip: "IP66" }), "system").map((p) => p.id),
    ["Y", "Z"],
  );
  assert.equal(
    matchesProduct({ ...p("Y"), ip: null }, f({ ip: "IP66" })),
    false,
  );
});
test("input voltage and operating temperature include boundaries and reject missing data", () => {
  assert.deepEqual(voltageRange("12V-36V"), [12, 36]);
  assert.deepEqual(voltageRange("5V/3A"), [5, 5]);
  assert.deepEqual(
    temperatureRanges("-20°C to 60°C (25W); -20°C to 50°C (MAXN)"),
    [
      [-20, 60],
      [-20, 50],
    ],
  );
  for (const required of ["19", "48"])
    assert.equal(matchesProduct(p("Y"), f({ voltage: required })), true);
  assert.equal(matchesProduct(p("Y"), f({ voltage: "49" })), false);
  assert.equal(
    matchesProduct({ ...p("Y"), power: null }, f({ voltage: "24" })),
    false,
  );
  assert.equal(matchesProduct(p("Y"), f({ temperature: "-20" })), true);
  assert.equal(matchesProduct(p("Y"), f({ temperature: "61" })), false);
  assert.equal(
    matchesProduct({ ...p("Y"), temperature: null }, f({ temperature: "0" })),
    false,
  );
});
test("JetPack matches documented versions separately from factory version", () => {
  const list = filteredProducts(f({ jetpack: "6.2" }), "system");
  assert.ok(list.length > 0);
  assert.ok(list.every((p) => p.jetpackVersions.includes("6.2")));
  assert.equal(
    matchesProduct(
      { ...p("S"), jetpackVersions: [], jetpackFactory: "6.2" },
      f({ jetpack: "6.2" }),
    ),
    false,
  );
});
test("carrier JetPack support is checked with the selected module, not a different module", () => {
  assert.equal(
    matchesProduct(p("CBD"), f({ module: "nano", jetpack: "5.0.2" })),
    false,
  );
  assert.equal(
    matchesProduct(p("CBD"), f({ module: "xavier_nx", jetpack: "5.0.2" })),
    true,
  );
  assert.equal(
    matchesProduct(p("CBM"), f({ module: "orin_nano", jetpack: "6.1" })),
    false,
  );
  assert.equal(
    matchesProduct(p("CBM"), f({ module: "orin_nx", jetpack: "6.1" })),
    true,
  );
  assert.equal(matchesProduct(p("CBM"), f({ jetpack: "6.1" })), true);
});
test("unknown interface counts are not zero or an inferred capability", () => {
  assert.equal(hasInterface({ ...p("CBN"), ports: {} }, "usb_a"), false);
  assert.equal(hasInterface(p("CBL"), "usb_a"), true);
  assert.equal(p("CBL").ports.usb_a_count, 2);
  assert.equal(
    matchesProduct({ ...p("Y"), ports: {} }, f({ interfaces: ["usb_a"] })),
    false,
  );
});
test("storage and module compatibility use recorded capabilities", () => {
  for (const storage of storageOptions) {
    assert.ok(
      filteredProducts(f({ storage: storage.value }), "carrier").every((p) =>
        storage.value === "sd" ? p.sdCard : p.ports[storage.value] > 0,
      ),
    );
  }
  assert.ok(
    filteredProducts(f({ module: "agx_orin" }), "carrier").every((p) =>
      p.supportedModules.includes("agx_orin"),
    ),
  );
  assert.ok(
    products.every((p) =>
      p.supportedModules.every((k) => modules.some((m) => m.value === k)),
    ),
  );
});
test("search covers model, SKU and actual interfaces; filters are removable", () => {
  assert.deepEqual(
    filteredProducts(f({ search: "110061362" }), "system").map((p) => p.id),
    ["C"],
  );
  assert.ok(
    filteredProducts(f({ search: "GMSL" }), "system").every(
      (p) => /gmsl/i.test(p.name) || hasInterface(p, "gmsl"),
    ),
  );
  const tags = filterTags(
    f({ memory: "16", interfaces: ["can", "gmsl"], search: "robotics" }),
  );
  assert.equal(tags.length, 4);
  assert.equal(filterTags(emptyFilters()).length, 0);
});
test("two exact configurations, including same series, may be compared; a third is refused", () => {
  const one = toggleComparison([], p("F"), "system");
  const two = toggleComparison(one.selected, p("G2"), "system");
  assert.deepEqual(two.selected, ["F", "G2"]);
  const third = toggleComparison(two.selected, p("Y"), "system");
  assert.equal(third.selected, two.selected);
  assert.match(third.message, /Remove one/);
  assert.equal(
    toggleComparison(two.selected, p("CBH"), "system").selected,
    two.selected,
  );
  assert.deepEqual(toggleComparison(two.selected, p("F"), "system").selected, [
    "G2",
  ]);
});
test("ordinary filters and card configuration do not change exact comparison identity", () => {
  const states = createTypeState();
  states.system.selected = ["F", "G2"];
  states.system.filters.memory = "16";
  assert.equal(matchesProduct(p("F"), states.system.filters), false);
  assert.deepEqual(states.system.selected, ["F", "G2"]);
  const group = groupProducts(
    filteredProducts(states.system.filters, "system"),
  ).find((g) => g.id === "classic-j40");
  assert.equal(cardConfiguration(group, { "classic-j40": "F" }).memoryGb, 16);
  states.carrier.filters.search = "A603";
  states.carrier.selected = ["CBL"];
  assert.equal(states.system.filters.search, "");
  assert.deepEqual(states.system.selected, ["F", "G2"]);
});
test("null fields never crash specification or comparison generation", () => {
  for (const product of products)
    assert.ok(
      specificationGroups(product).every((group) =>
        group.rows.every(
          (row) => row.length === 4 && typeof row[2] === "string",
        ),
      ),
    );
  assert.doesNotThrow(() =>
    specificationGroups({
      ...p("AQ"),
      moduleSpec: null,
      jetpackVersions: [],
      notes: null,
    }),
  );
});
test("catalog guides resolve to real English routes and page remains isolated from other locales", () => {
  const docsRoot = new URL("../../../../sites/en/docs/", import.meta.url);
  const slugs = new Set(
    readdirSync(docsRoot, { recursive: true })
      .filter((f) => /\.(md|mdx)$/.test(f))
      .flatMap((f) => {
        const text = readFileSync(new URL(f, docsRoot), "utf8");
        return [
          text
            .match(/^slug:\s*(.*)$/m)?.[1]
            ?.replace(/^['"]|['"]$/g, "")
            .replace(/\/$/, ""),
        ];
      }),
  );
  for (const product of products)
    for (const guide of product.guides)
      if (!/^https?:/.test(guide.url))
        assert.ok(slugs.has(guide.url.replace(/\/$/, "")), guide.url);
  const mdx = readFileSync(
    new URL(
      "../../../../sites/en/docs/Edge/NVIDIA_Jetson/Jetson_Product_Selection_Guide.mdx",
      import.meta.url,
    ),
    "utf8",
  );
  assert.match(mdx, /hide_table_of_contents: true/);
  assert.match(mdx, /hide_title: true/);
  assert.match(mdx, /selection\/JetsonSelector/);
  assert.doesNotMatch(
    mdx,
    /## Interactive Selector|## Product Overview|## Scenario Recommendations|:::tip/,
  );
  for (const id of [
    "interactive-selector",
    "quick-selection-map",
    "product-overview",
    "scenario-recommendations",
    "1-learning--prototyping",
    "2-edge-ai-inference--video-analytics",
    "3-industrial-control--automation",
    "4-robotics--amr",
    "5-in-vehicle-outdoor--harsh-environments",
    "6-high-end-autonomy--large-compute-rd",
  ])
    assert.ok(mdx.includes(`id="${id}"`));
});
