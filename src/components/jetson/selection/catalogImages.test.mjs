import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { products } from "./catalog.js";

test("Robotics J401 uses the carrier board photo documented in its hardware guide", () => {
  const board = products.find((product) => product.id === "CBK");
  const image =
    "https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics-carrier-board.png";
  assert.equal(board.type, "carrier");
  assert.equal(board.image, image);
  const guide = readFileSync(
    new URL(
      "../../../../sites/en/docs/Edge/NVIDIA_Jetson/Carrier_Boards/Robotics_J401/Robotics_J401_carrierboard_Hardware_Interfaces_Usage.md",
      import.meta.url,
    ),
    "utf8",
  );
  // Check the actual guide illustration, not its complete-system frontmatter hero.
  assert.ok(guide.includes(`src="${image}"`));
});

test("none of the 14 audited carrier configurations uses the Robotics complete-system hero", () => {
  const carriers = products.filter((product) => product.type === "carrier");
  assert.equal(carriers.length, 14);
  for (const board of carriers) {
    assert.ok(board.image, board.id);
    assert.notEqual(
      board.image,
      "https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer_robotics1.webp",
      board.id,
    );
  }
});
