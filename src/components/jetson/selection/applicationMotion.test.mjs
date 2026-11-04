import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { runInNewContext } from "node:vm";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { transformSync } from "@babel/core";
import { applications, emptyFilters, filteredProducts } from "./model.js";
import { products } from "./catalog.js";
import { canPlayScene, nextScenePlayback } from "./applicationMotion.js";

const require = createRequire(import.meta.url);
const source = readFileSync(
  new URL("./ApplicationIllustration.jsx", import.meta.url),
  "utf8",
);
const { code } = transformSync(source, {
  filename: "ApplicationIllustration.jsx",
  configFile: false,
  babelrc: false,
  presets: [require.resolve("@babel/preset-react")],
  plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
});
const module = { exports: {} };
runInNewContext(code, {
  module,
  exports: module.exports,
  require: (id) =>
    id.endsWith(".css")
      ? new Proxy({}, { get: (_, name) => String(name) })
      : id === "./applicationMotion.js"
        ? { canPlayScene, nextScenePlayback }
        : require(id),
});
const Illustration = module.exports.default;
const idle = () => ({ seen: false, playing: false });
const step = (state, overrides = {}) =>
  nextScenePlayback(state, {
    scene: "robotics",
    allowed: true,
    touch: false,
    hovered: false,
    ...overrides,
  });

test("motion is static for keyboard, reduced motion, offscreen and background states", () => {
  const environment = { hidden: false, suspended: false, reduced: false };
  const context = { visible: true, environment, inputMode: "pointer" };
  assert.equal(canPlayScene(context), true);
  assert.equal(canPlayScene({ ...context, visible: false }), false);
  assert.equal(canPlayScene({ ...context, inputMode: "keyboard" }), false);
  for (const flag of ["hidden", "suspended", "reduced"]) {
    assert.equal(
      canPlayScene({
        ...context,
        environment: { ...environment, [flag]: true },
      }),
      false,
      flag,
    );
  }
  // Returning from the background keeps this opening suspended, even on hover.
  assert.equal(
    step(idle(), {
      hovered: true,
      allowed: canPlayScene({
        ...context,
        environment: { ...environment, suspended: true },
      }),
    }).playing,
    false,
  );
});

test("six existing application identities have unique illustrations and concise descriptions", () => {
  assert.deepEqual(
    applications.map((o) => o.value),
    ["learning", "edge_ai", "industrial", "robotics", "outdoor", "autonomous"],
  );
  assert.equal(new Set(applications.map((o) => o.illustration)).size, 6);
  for (const option of applications) {
    assert.equal(option.value, option.illustration);
    assert.ok(option.description.length > 20 && option.description.length < 65);
  }
});
test("illustration metadata does not alter product membership or directory order", () => {
  assert.equal(filteredProducts(emptyFilters(), "all").length, 65);
  for (const { value } of applications) {
    assert.deepEqual(
      filteredProducts({ ...emptyFilters(), application: value }, "all").map(
        (p) => p.id,
      ),
      products
        .filter(
          (p) =>
            ["system", "carrier"].includes(p.type) &&
            p.applications.includes(value),
        )
        .map((p) => p.id),
    );
  }
});
test("desktop hover plays only the active row and leaving resets it immediately", () => {
  const playing = step(idle(), { hovered: true });
  assert.equal(playing.playing, true);
  assert.equal(step(playing).playing, false);
  assert.equal(step(playing, { allowed: false, hovered: true }).playing, false);
  assert.equal(step(idle(), { hovered: true, scene: "all" }).playing, false);
  assert.equal(step(step(playing), { hovered: true }).playing, true);
});
test("touch gets one play per opening, including cancellation while scrolling or in the background", () => {
  const hidden = step(idle(), { touch: true, allowed: false });
  assert.deepEqual(hidden, idle());
  const first = step(hidden, { touch: true });
  assert.deepEqual(first, { seen: true, playing: true });
  assert.equal(step(first, { touch: true }), first); // No restart from repeated observer delivery.
  const stopped = step(first, { touch: true, allowed: false });
  assert.deepEqual(stopped, { seen: true, playing: false });
  assert.equal(step(stopped, { touch: true }).playing, false);
  assert.equal(step(idle(), { touch: true }).playing, true); // New mounted option / opening.
});
test("all seven SVGs render distinct, readable static states without focus or network assets", () => {
  const renders = ["all", ...applications.map((o) => o.illustration)].map(
    (scene) => {
      const html = renderToStaticMarkup(
        React.createElement(Illustration, {
          scene,
          hovered: false,
          inputMode: "keyboard",
          ready: false,
          environment: {
            reduced: true,
            hidden: false,
            touch: false,
            suspended: false,
          },
          scrollRoot: { current: null },
        }),
      );
      assert.match(html, /data-playing="false"/);
      assert.match(html, /aria-hidden="true"/);
      assert.match(html, /focusable="false"/);
      assert.match(html, /viewBox="0 0 96 96"/);
      assert.doesNotMatch(
        html,
        /<(?:img|video|image|animate|script)\b|tabindex/i,
      );
      return html.replace(/data-scene="[^"]+"/, "");
    },
  );
  assert.equal(new Set(renders).size, 7);
});
test("authored timelines run once for 2.5 seconds, animate only transform/opacity and respect reduced motion", () => {
  const css = readFileSync(
    new URL("./ApplicationIllustration.module.css", import.meta.url),
    "utf8",
  );
  const postcss = require("postcss");
  assert.match(css, /animation-duration: 2\.5s/);
  assert.match(css, /animation-iteration-count: 1/);
  assert.match(css, /animation-fill-mode: both/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /animation: none/);
  assert.doesNotMatch(css, /infinite|url\(|transition:\s*all/);
  let timelines = 0;
  postcss.parse(css).walkAtRules("keyframes", (rule) => {
    timelines++;
    rule.walkDecls(({ prop }) =>
      assert.ok(["transform", "opacity"].includes(prop), prop),
    );
  });
  assert.ok(timelines >= 6);
});

test("collapsed scene names stay on one line without truncating expanded options", () => {
  const css = readFileSync(
    new URL("./Selector.module.css", import.meta.url),
    "utf8",
  );
  const postcss = require("postcss");
  const rules = new Map();
  postcss.parse(css).walkRules((rule) => {
    if (!rule.selector.startsWith(".illustrated")) return;
    const declarations = {};
    rule.walkDecls(({ prop, value }) => {
      declarations[prop] = value;
    });
    rules.set(rule.selector, declarations);
  });
  assert.equal(
    rules.get(".illustratedControl .controlValue")["white-space"],
    "nowrap",
  );
  assert.equal(
    rules.get(".illustratedControl .controlValue")["text-overflow"],
    "ellipsis",
  );
  assert.equal(rules.get(".illustratedText")["min-width"], "0");
  assert.equal(rules.get(".illustratedText")["white-space"], undefined);
  assert.equal(rules.get(".illustratedText")["text-overflow"], undefined);
});
