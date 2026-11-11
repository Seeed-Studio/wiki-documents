---
description: "Chapter 8 of the SO-ARM101 Sim-to-Real VLA Course — building the workspace: the studio hardware list, lightbox, camera brackets, vial rack and prop positions, and both cameras."
title: Chapter 8 - Building the Workspace
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Workspace
  - Lightbox
  - Camera Mount
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_8
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_8/
---

import '/src/css/rebot-wiki-style.css';

<div class="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 2 · Chapter 8 · Build Your Robot Lab</span>
    <h2>8. Building the Workspace</h2>
    <p>
      The task is always the same: put three vials into the vial rack. This
      chapter builds the studio that makes the task recordable and
      repeatable — hardware list, lightbox, brackets, prop positions, and
      cameras.
    </p>
    <div className="hero-actions">
      <a href="#hardware">Hardware</a>
      <a href="#lightbox">Lightbox</a>
      <a href="#brackets">Brackets</a>
      <a href="#props">Prop positions</a>
      <a href="#cameras">Cameras</a>
      <a href="#checklist">Checklist</a>
    </div>
  </div>
</section>

## 8.1 Hardware List

<section id="hardware" className="section-card">
  <div className="section-title">
    <span>Bill of materials</span>
    <h2>8.1 Hardware List</h2>
  </div>

| Item | Description | Quantity |
|---|---|---|
| SO-ARM101 Pro kit (Leader + Follower) | [SO-ARM101 Low-Cost AI Arm Kit Pro](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 |
| USB cameras ×2 | One for the wrist mount, one external; any UVC camera at 640×480 and 30 FPS | 2 |
| Camera mounts | Workshop wrist bracket + a rigid external stand | 2 |
| Vial rack and three vials | Task props — same geometry as the digital twin | 1 set |
| Lightbox or foam-board box + diffuse light | Uniform background and stable lighting | 1 |
| Non-reflective mat | Table surface the props sit on | 1 |
| Powered USB hub | If the PC or Jetson cannot supply enough ports | 1 |

Policies learn whatever the cameras see. A plain desk with a window behind
it produces a dataset full of lighting changes; the studio removes that
noise. The approach follows the beginner course's dataset chapters
([Beginner Chapter 11 — Task Design](https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_11/)
and [Chapter 12 — Camera Configuration](https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_12/)).

</section>

## 8.2 The Lightbox

<section id="lightbox" className="section-card">
  <div className="section-title">
    <span>摄影棚</span>
    <h2>8.2 The Lightbox</h2>
  </div>

The minimum studio:

| Item | Purpose |
| --- | --- |
| Foam-board box or plain mat | Uniform background behind the props |
| Diffuse white light (a lamp with a shade, or two LEDs at 45°) | Soft, stable lighting without hard shadows |
| Non-reflective table surface | Vials and rack stay visible from both cameras |
| Fixed robot position | The follower bolted or taped in place, base facing the props |

:::tip One light source beats three
Multiple uneven light sources create moving highlights on glossy vials.
One diffuse overhead light plus the room's ambient light is easier to
replicate on a different day — which matters when you record more episodes
later.
:::

</section>

## 8.3 Brackets and Mounts

<section id="brackets" className="section-card">
  <div className="section-title">
    <span>支架</span>
    <h2>8.3 Brackets and Mounts</h2>
  </div>

Two mounts carry the cameras; both must be rigid enough to survive a week
of recording without drifting.

**Wrist camera bracket.** Mounted on the follower's gripper, following the
official SO-101 workshop camera bracket: the camera sits above the jaws,
tilted down about 45°, so the gripper tips and the grasped object both stay
in frame through the whole reach. Print or buy the workshop bracket and
tighten the screws firmly — a wrist camera that rotates mid-episode
invalidates every episode after it.

**External camera stand.** Any rigid stand works: a small tripod, a 2020
extrusion post, or an articulated arm clamped to the table. Position it
above and in front of the workspace so one frame covers the rack, all three
vial positions, and most of the follower's reach. Do not hand-hold it and
do not clamp it to the same board the follower pushes against.

Cable routing: leave slack at the wrist so the loop does not snag, and
route both camera cables away from the follower's workspace.

</section>

## 8.4 Prop Positions

<section id="props" className="section-card">
  <div className="section-title">
    <span>物料位置</span>
    <h2>8.4 Prop Positions</h2>
  </div>

The task definition is part of the dataset. Keep it consistent:

- **Vial rack**: to the right of the follower's base, inside comfortable
  reach — the same side and distance as the digital twin;
- **Three vials**: scattered in the work area in front of the arm, roughly
  10–20 cm out; re-place them by hand between episodes;
- **Task sentence**: `Put the three vials into the vial rack` — the exact
  string used in Chapter 9 recording and in the digital twin's dataset. Do
  not paraphrase it between episodes.

:::tip Measure once, then build a fixture
Tape the rack position and mark the vial area on the mat. Reproducible
positions matter more than millimeter accuracy.
:::

If you also plan to collect simulated episodes (Chapter 12), match the
bench to the twin's scene — the twin defines the specification:

| Check | Sim reference | Real bench |
| --- | --- | --- |
| Rack position | Fixed in `SO101_RACK_POSITION` | Same side and distance relative to the base |
| Vial start area | `SO101_VIAL_POSITIONS` | Same 10–20 cm region in front of the arm |
| Camera views | Wrist + external | Same framing, 640×480, 30 FPS |
| Lighting | Dome + key light | Diffuse, no strong shadow across the rack |

A 1–2 cm mismatch is tolerable. A rack on the opposite side, a camera at a
different height, or a hand-held camera is not.

</section>

## 8.5 Cameras

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>Two views</span>
    <h2>8.5 Cameras</h2>
  </div>

List the cameras and capture a preview of each:

```bash
lerobot-find-cameras opencv
```

Preview images are written to `outputs/captured_images/`; the file name
contains the device index, for example `opencv__dev_video4.png` means
index 4. Export the indices:

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

Indices can change after a reboot or a replug, so repeat this check before
every recording session. Lock the focus and exposure if the camera supports
it — autofocus hunting during an episode shows up as blurry training
frames.

Verify both views during teleoperation:

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID \
  --display_data=true \
  --robot.cameras="{
    front: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    external: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }"
```

:::note Camera names are part of the dataset schema
This course records with the keys `front` (wrist camera) and `external`
(overhead camera) so the real dataset has exactly the same feature names as
the simulated dataset in Chapter 12. That is what makes sim-plus-real
co-training possible without renaming features. Chapter 10 maps these two
streams to GR00T's `wrist` and `front` inputs.
:::

</section>

## 8.6 Studio Checklist

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Before Chapter 9</span>
    <h2>8.6 Studio Checklist</h2>
  </div>

- Lightbox or mat in place, one diffuse light, no hard shadows on the rack;
- Follower fixed in position; leader within comfortable reach;
- Wrist bracket rigid, camera tilted about 45°, sees the jaws;
- External camera on a rigid stand, sees the rack and all three vial slots;
- Both cameras preview at 640×480 and 30 FPS, focus locked;
- `CAMERA_GRIPPER` and `CAMERA_EXTERNAL` exported;
- Rack taped in place, vial area marked, task sentence fixed.

Next: [Chapter 9 — Collect Data from the Real Environment](Sim2Real_VLA_09.md).

</section>

</div>