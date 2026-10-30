---
description: Chapter 12 of the SO-ARM Physical AI Beginner's Course — connect and verify front and side cameras, understand image/action synchronization, then record your first LeRobot dataset with lerobot-record and manage episodes with the keyboard controls.
title: Chapter 12 - Camera Configuration and LeRobot Data Collection
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Camera
  - Dataset
  - Recording
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_12
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_12/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 12 · Practice</span>
    <h2>12. Camera Configuration and LeRobot Data Collection</h2>
    <p>
      Chapter 12 of the SO-ARM Physical AI Beginner's Course — connect and verify front and side
      cameras, understand image/action synchronization, then record your first LeRobot dataset
      with lerobot-record and manage episodes with the keyboard controls.
    </p>
    <div className="hero-actions">
      <a href="#cameras">Cameras</a>
      <a href="#sync">Sync</a>
      <a href="#record">Record</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ No-code · No environment setup</span>
    <p className="sensecraft-banner__title">Skip the setup — run the reBot Arm and LeRobot from one app</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics is Seeed's no-code platform for the SO-ARM101, reBot Arm 102 + B601-RS and B601-DM. Connect the arms, calibrate, collect demonstrations, train and run inference from a guided interface — no Python environment, no terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6-step guided workflow</li>
      <li>✅ Cloud training — no local GPU</li>
      <li>✅ Windows / macOS client</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Go to SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/sensecraft_robotics/">Software guide</a>
  </div>
</div>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety check before running</strong>
    <p>
      Clear valuable items and unrelated people within 1 meter of the robotic arm workspace.
      Make sure the arm is firmly mounted and that power and cables are connected properly before running this chapter.
    </p>
  </div>
</div>

## 12.1 Single-Camera vs. Dual-Camera Setup

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>Layout</span>
    <h2>12.1 Single-Camera vs. Dual-Camera Setup</h2>
  </div>

Two cameras and two views are required for data collection and model training in this course. Depending on the mounting position, the common layouts are:

| Layout | Installation and purpose | Suitable scenarios |
|:---|:---|:---|
| **Gripper view** | Top-view camera mounted above the front of the workbench to cover the work area; gripper camera mounted near the gripper to observe grasping details | Fine operations that require observing contact between the gripper and the object |
| **Side-view assistance** | Top-view camera mounted above the front of the workbench; side-view camera mounted at the front side of the workbench to observe arm height and gripper motion | Tasks such as grasping, handling, and placing |

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-eye-to-hand-soarm-en.webp" alt="Side-view assistance camera layout" />
</div>

This course uses the **side-view assistance layout** (a front camera plus a side camera), which is also the layout used by the Chapter 22 no-code workflow.

</section>

## 12.2 Finding Camera Device Names

<section id="find-cameras" className="section-card">
  <div className="section-title">
    <span>Detect</span>
    <h2>12.2 Finding Camera Device Names</h2>
  </div>

A camera's index can change if you reboot or re-plug — a behavior mostly dependent on your operating system. Before every recording session, detect the cameras plugged into your system:

```bash
lerobot-find-cameras opencv
```

The terminal prints something like:

```text
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

You can find the pictures taken by each camera in the `outputs/captured_images` directory — open them to confirm which index is your front camera and which is the side camera.

:::tip
Avoid connecting USB cameras through a hub. Connect them directly, preferably to USB 3.0 ports, to ensure sufficient image transmission bandwidth.
:::

</section>

## 12.3 Verify Cameras While Teleoperating

<section id="teleop-cameras" className="section-card">
  <div className="section-title">
    <span>Preview</span>
    <h2>12.3 Verify Cameras While Teleoperating</h2>
  </div>

Before recording, confirm both views are live and framed correctly by teleoperating with camera display enabled:

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

The `index_or_path` values come from the last digit of each camera ID reported by `lerobot-find-cameras opencv`.

:::tip
`fourcc: "MJPG"` requests compressed frames. Under MJPG this setup supports 3 cameras at 1920×1080 @ 30FPS. `YUYV` is uncompressed — it lowers usable resolution and FPS and can lag the arm. Do not connect two cameras through the same USB hub.
:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## 12.4 Optional: Depth Cameras (RealSense / Orbbec)

<section id="depth-cameras" className="section-card">
  <div className="section-title">
    <span>Optional</span>
    <h2>12.4 Optional: Depth Cameras (RealSense / Orbbec)</h2>
  </div>

<Tabs defaultValue="realsense">

<TabItem value="realsense" label="RealSense D435i / D405">

RealSense depth cameras provide RGB-D perception for tasks such as object recognition and close-range manipulation. The recommended models are **D405** (short-range stereo depth, 7-50 cm working range, ideal for tabletop manipulation) and **D435i** (depth + RGB + IMU).

**1. Switch to the camera branch** — depth camera support lives on `DepthCameraSupport`:

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
git branch --show-current   # expect: DepthCameraSupport
```

**2. Install the RealSense extra** in editable mode:

```bash
pip install -e ".[realsense]"
```

**3. Grant camera permissions and detect:**

```bash
chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense
```

**4. Example:** teleoperate with a D435i color+depth pair (use the serial number from the detection output in `serial_number_or_name`):

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640, height: 480, fps: 30,
      color_mode: rgb, color_stream_format: rgb8,
      rotation: 0, warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640, height: 480, fps: 30,
      max_depth_m: 2.0, depth_alpha: 0.2,
      rotation: 0, warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

**Parameter notes:** `depth_alpha` scales the depth image (start at 0.2); with 3+ depth cameras reduce `fps` to 15; keep 640×480 for stability.

</TabItem>

<TabItem value="orbbec" label="Orbbec Gemini 2 / Gemini 336">

[Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html) is a high-performance RGB-D camera providing synchronized RGB and depth streams, and Gemini 336 improves depth imaging in reflective and dark indoor areas.

**1. Switch to the camera branch:**

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

**2. Install the Orbbec extra:**

```bash
pip install -e ".[orbbec]"
```

**3. Permissions and USBFS cache** (the default 16MB is too small for depth streams):

```bash
chmod a+rw /dev/bus/usb/*/*
cat /sys/module/usbcore/parameters/usbfs_memory_mb                 # check
sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'  # raise to 128MB
```

**4. Detect cameras** and copy the serial number:

```bash
lerobot-find-cameras orbbec
```

**5. Example:** teleoperate with one Orbbec color+depth pair:

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640, height: 480, fps: 30,
      color_mode: rgb, rotation: 0, warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640, height: 400, fps: 30,
      depth_alpha: 0.2, rotation: 0, warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

:::tip
An Orbbec camera occupies 3 consecutive `/dev/video` numbers. When mixing one Orbbec with regular USB cameras, plug the Orbbec in first and the regular cameras last, so their indices land at the end. If frames time out (`Timed out waiting for frame ...`), unplug and reconnect the camera.
:::

</TabItem>

</Tabs>

</section>

## 12.5 Image and Action Synchronization

<section id="sync" className="section-card">
  <div className="section-title">
    <span>Sync</span>
    <h2>12.5 Image and Action Synchronization</h2>
  </div>

During recording, LeRobot runs one control loop per frame:

- read both cameras (front, side);
- read leader joints → actions;
- read follower joints → state;
- timestamp everything and append one row.

Because cameras deliver frames on their own schedule, the loop **aligns by timestamp**, not by wish: each dataset row pairs the freshest camera images with the joint data from the same instant. This is why `--dataset.fps` should not exceed what your cameras can stably deliver (30 fps at 640×480 MJPG is the safe choice).

</section>

## 12.6 Recording Your First Dataset

<section id="record" className="section-card">
  <div className="section-title">
    <span>Record</span>
    <h2>12.6 Recording Your First Dataset</h2>
  </div>

Record the Chapter 11 task (pick-and-place A to B) locally — the dataset stays on your machine:

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

`repo_id` can be customized; with `push_to_hub=false` the dataset lands in `~/.cache/huggingface/lerobot/seeedstudio123/test/`.

### Recording Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `--dataset.episode_time_s` | Duration per data episode (seconds) | 60 |
| `--dataset.reset_time_s` | Environment reset time after each episode (seconds) | 60 |
| `--dataset.num_episodes` | Total episodes to record | 50 |

### Keyboard Controls During Recording

| Key | Action |
|-----|--------|
| → (Right Arrow) | Early-stop current episode/reset; move to next |
| ← (Left Arrow) | Cancel current episode; re-record it |
| ESC | Stop session immediately, encode videos, and save the dataset |

:::tip
If the keyboard shortcuts do not respond, first check that `$DISPLAY` is set, or downgrade pynput: `pip install pynput==1.6.8`
:::

While recording you will see streaming stats like:

```text
INFO ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

`dt` near 33 ms means the loop holds 30 Hz — that's a healthy session.

### Checkpointing and Resuming

- Checkpoints are created automatically during recording.
- To resume after an interruption, re-run the same command with `--resume=true`.
- **`--dataset.num_episodes` then counts the episodes to record THIS session**, not the grand total — 15 recorded of a 50 target → set 35.
- To start over from scratch, delete the dataset directory manually.

### Recording on the Hugging Face Hub (Optional)

Log in once with a write-access token from [HF settings](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
```

Then set `--dataset.repo_id=${HF_USER}/record-test` and `--dataset.push_to_hub=true` to publish the dataset.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## 12.7 Tips for Gathering Good Data

<section id="tips" className="section-card">
  <div className="section-title">
    <span>Quality</span>
    <h2>12.7 Tips for Gathering Good Data</h2>
  </div>

- **Task:** grasp objects at different marked points and place them at Point B (Chapter 11's cross pattern).
- **Scale:** record ≥50 episodes (10 episodes per point).
- **Consistency:**
  - Keep cameras fixed;
  - Maintain identical grasping behavior;
  - Ensure the manipulated object is visible in both camera feeds.
- **Progression:** start with reliable grasping before adding variations (new positions, techniques, camera adjustments). Avoid rapid complexity increases.
- **Environment:** keep camera positions, angles, and ambient lighting stable; avoid unstable backgrounds or people walking through the camera view — large differences between recording and deployment environments cause policies to fail.

💡 **Rule of thumb:** you should be able to do the task yourself by only looking at the camera images. If you can't, the model can't either.

Set `--dataset.num_episodes` high enough before starting, and don't stop midway unless necessary — dataset statistics (mean and variance) are computed after collection finishes and are required for training.

</section>

</div>
