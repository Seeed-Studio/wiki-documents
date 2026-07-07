---
name: seeed-robotics-wiki-writer
description: use this skill when rewriting, polishing, restructuring, or validating seeed studio robotics wiki markdown or mdx pages, especially rebot arm, lerobot, pinocchio, meshcat, ros2, moveit, isaac sim, isaac lab, groot, vla, jetson, recomputer, visual grasping, graspnet, yolo, or robot hardware tutorials. trigger when the user asks to preserve tutorial content while converting a wiki to the unified seeed robotics wiki card style, fixing docusaurus mdx risks, adding codeblock, safety alerts, toc-friendly headings, bilibili iframe fixes, get-one-now buttons, faq, or course navigation.
---

# Seeed Robotics Wiki Writer

## Goal
Rewrite Seeed Studio Robotics Wiki drafts into the unified MDX style while preserving all tutorial content and technical meaning.

Use the full rules in `references/wiki-writing-guide.md` for every rewrite. For reBot B601-DM pages, also consult the reference examples:

- `\sites\zh-CN\docs\Robotics\Robot_Kits\reBot_Arm\B601_DM\cn_reBot_Arm_B601_DM_Getting_Started.md`
- `\sites\zh-CN\docs\Robotics\Robot_Kits\reBot_Arm\B601_DM\rebot-arm-b601-dm-lerobot-reference.mdx`

## Required workflow
1. Read the source MDX/Markdown completely before editing.
2. Identify every original step, command, image, video, table, link, note, warning, FAQ, and TODO comment.
3. Preserve all of them unless the user explicitly requests deletion.
4. Keep existing frontmatter fields such as `slug`, `createdAt`, `updatedAt`, `url`, `sku`, and `translation`; only polish title/description/date when appropriate.
5. Add these imports after frontmatter:

```mdx
import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';
```

6. Use `<div className="rebot-page">` as the page wrapper.
7. Add or polish `doc-hero`, global `safety-alert`, `doc-nav`, Step Overview, section cards, FAQ, references, support, and course path when appropriate.
8. Keep Markdown `##` headings before visual `<section>` cards so the Docusaurus right-side TOC works.
9. Convert every command, script, log, config, and output block to Docusaurus `CodeBlock`.
10. Sanitize all images, iframes, details blocks, and buttons according to the guide.
11. Run a final static check before returning the full replacement MDX.

## Reference-page matching rules
When rewriting reBot B601-DM series pages, model the layout on the bundled references:

- Use the Getting Started reference for hardware-first pages: purchase options, power checks, assembly, motor ID, MotorBridge, calibration, FAQ, and learning path.
- Use the LeRobot reference for software workflow pages: environment setup, calibration, teleoperation, camera setup, dataset recording, visualization, replay, training, evaluation, and advanced deployment.
- For Pinocchio/MeshCat, ROS2, visual grasping, or Isaac pages, combine the Getting Started hardware safety structure with the LeRobot step-card workflow structure.
- Do not copy unrelated commands from references into the source page. References guide style and structure only unless the user explicitly requests content reuse.

## Non-negotiable MDX rules
- Never use `<pre><code>`.
- Never use indented code blocks.
- Never leave raw fenced code blocks in the final MDX.
- Never use `class=`, lowercase `frameborder`, lowercase `allowfullscreen`, lowercase `referrerpolicy`, `<center>`, `<font>`, or page-level `<style>{`...`}</style>`.
- Never leave unescaped `${...}` inside MDX template literals. Use `\${VAR}` for shell variables shown inside CodeBlock.
- Use `className`, `frameBorder`, `allowFullScreen`, and `referrerPolicy`.
- Use `image-frame` for centered images outside tables.
- Use the standardized `get-one-now-panel` and `get-one-now-button` without inline styles.
- Bilibili iframe `src` must include `autoplay=0&muted=1&mute=1&danmaku=0`; `allow` must not include `autoplay`; add `loading="lazy"`.
- Safety text may mention `1 米范围内` or `1 meter`, but do not wrap that phrase in `<strong>`.

## Final response
Return a complete replacement MDX file or a downloadable artifact. Also summarize what was changed and explicitly mention that the result was statically checked. If you cannot run a full Docusaurus build, say that only static checks were performed.
