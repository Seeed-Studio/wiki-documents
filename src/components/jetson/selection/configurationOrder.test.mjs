import test from "node:test";
import assert from "node:assert/strict";
import { products, productFamilies } from "./catalog.js";
import {
  sortConfigurations,
  groupProducts,
  filteredProducts,
  emptyFilters,
  cardConfiguration,
  createTypeState,
  toggleComparison,
} from "./model.js";

const ids = (list) => list.map((p) => p.id);
const familyProducts = (id) => products.filter((p) => p.familyId === id);

test("every multi-configuration series has a complete, unique, local explicit order", () => {
  for (const family of productFamilies) {
    const configurations = familyProducts(family.id);
    if (configurations.length < 2) continue;
    assert.ok(family.configurationOrder, family.id);
    assert.equal(
      new Set(family.configurationOrder).size,
      configurations.length,
    );
    assert.deepEqual(
      [...family.configurationOrder].sort(),
      ids(configurations).sort(),
      family.id,
    );
    assert.deepEqual(
      ids(sortConfigurations([...configurations].reverse())),
      family.configurationOrder,
      family.id,
    );
  }
});

test("ordinary configurations precede B revisions and extension bundles", () => {
  const expected = {
    "classic-j40": ["F", "AA", "G", "G2", "H", "AB", "I", "I2"],
    "robotics-j40": ["U", "AH", "V", "V2", "W", "AI", "X", "X2"],
    mini: ["AL", "O", "AM", "P", "Q", "R"],
  };
  for (const [family, order] of Object.entries(expected)) {
    assert.deepEqual(ids(sortConfigurations(familyProducts(family))), order);
    assert.deepEqual(
      groupProducts(familyProducts(family))[0].products.map((p) => p.id),
      order,
    );
  }
});

test("filter subsets retain series order without changing catalogue or series positions", () => {
  const originalIds = ids(products);
  const originalFamilyIds = [
    ...new Set(
      products.filter((p) => p.type !== "expansion").map((p) => p.familyId),
    ),
  ];
  assert.deepEqual(
    groupProducts(filteredProducts(emptyFilters(), "all")).map((g) => g.id),
    originalFamilyIds,
  );
  for (const changes of [
    {},
    { memory: "16" },
    { interfaces: ["usb_a"], usbAMin: "6" },
    { interfaces: ["lte_expansion"] },
    { search: "J4012" },
    { search: "GMSL" },
  ]) {
    for (const type of ["all", "system", "carrier"]) {
      const list = filteredProducts({ ...emptyFilters(), ...changes }, type);
      for (const group of groupProducts(list)) {
        const order = productFamilies.find(
          (f) => f.id === group.id,
        ).configurationOrder;
        if (!order) continue;
        assert.deepEqual(
          ids(group.products),
          order.filter((id) => list.some((p) => p.id === id)),
        );
      }
    }
  }
  assert.deepEqual(ids(products), originalIds);
});

test("ordering preserves selected configurations and comparisons, falling back only when filtered out", () => {
  const states = createTypeState();
  const selectedProduct = products.find((p) => p.id === "I2");
  for (const type of ["all", "system"]) {
    states[type].configurations = { "classic-j40": "I2" };
    states[type].selected = toggleComparison(
      [],
      selectedProduct,
      type,
    ).selected;
    const group = groupProducts(familyProducts("classic-j40"))[0];
    assert.equal(
      cardConfiguration(group, states[type].configurations).id,
      "I2",
    );
    const remaining = groupProducts(
      group.products.filter((p) => p.id !== "I2"),
    )[0];
    assert.equal(
      cardConfiguration(remaining, states[type].configurations).id,
      "F",
    );
    assert.deepEqual(states[type].selected, ["I2"]);
    assert.equal(
      cardConfiguration(group, states[type].configurations).id,
      "I2",
    );
  }
});

test("sorting creates a new array and leaves singletons and empty lists intact", () => {
  const list = familyProducts("classic-j40");
  const before = ids(list);
  assert.notEqual(sortConfigurations(list), list);
  assert.deepEqual(ids(list), before);
  assert.deepEqual(sortConfigurations([]), []);
  const carrier = familyProducts("board-robotics");
  assert.deepEqual(sortConfigurations(carrier), carrier);
});
