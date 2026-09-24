---
description: 'Chapter 13 of the Seeed Embodied Intelligence Beginner''s Course — camera configuration and LeRobot data collection: single vs dual camera setup, finding camera device names, image/action synchronization, creating a dataset, recording and re-recording, visualization, and supplementing or deleting data.'
title: Chapter 13 - Camera Configuration and LeRobot Data Collection
keywords:
  - reBot
  - LeRobot
  - Camera
  - Data Collection
  - Dataset
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_13
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-21'
url: https://wiki.seeedstudio.com/rebot_embodied_ai_course_chapter_13/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 13 · Practice</span>
    <h2>13. Camera Configuration and LeRobot Data Collection</h2>
    <p>
      Chapter 13 of the Seeed Embodied Intelligence Beginner's Course — single vs dual camera setup,
      finding camera device names, image/action synchronization, creating a dataset, recording and
      re-recording, visualization, and supplementing or deleting data.
    </p>
    <div className="hero-actions">
      <a href="#camera-setup">Cameras</a>
      <a href="#sync">Sync</a>
      <a href="#create-dataset">Dataset</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>In this chapter</strong>
    <span>13.1 Single-Camera vs. Dual-Camera Setup</span>
    <span>13.2 Overhead and Wrist Cameras</span>
    <span>13.3 Finding Camera Device Names</span>
    <span>13.4 Image and Action Synchronization</span>
    <span>13.5 Create LeRobot Dataset</span>
    <span>13.6 Recording, Pausing, and Re-recording Episodes</span>
    <span>13.7 Visualizing and Playing Back a Dataset</span>
    <span>13.8 Supplementing and Deleting Data</span>
  </div>
</section>

<RebotCourseNav />

## 13.1 Single-Camera vs. Dual-Camera Setup

<section id="camera-setup" className="section-card">
  <div className="section-title">
    <span>Setup</span>
    <h2>13.1 Single-Camera vs. Dual-Camera Setup</h2>
  </div>

- **Single-camera setup:** only the overhead camera connected. Good for a first pipeline run and environment verification — one fewer camera means one fewer variable when debugging.
- **Dual-camera setup** (main course path, for formal collection): overhead + wrist; the ACT model also defaults to two input streams. You can also choose overhead + side view.

Three or four cameras can also be used for training and collection. ACT itself has no hard limit on camera count: each image stream passes through a shared ResNet18 backbone to produce a feature token sequence, which is concatenated into the Transformer encoder. The original ACT paper (ALOHA dual-arm) used 4 cameras (2 overhead + 2 wrist).

- **Cost:** each additional camera roughly linearly increases VRAM and compute, and also increases data requirements (more viewpoints mean more to learn); each stream must maintain synchronization and fixed positioning.

</section>

## 13.2 Overhead and Wrist Cameras

<section id="camera-roles" className="section-card">
  <div className="section-title">
    <span>Cameras</span>
    <h2>13.2 Overhead and Wrist Cameras</h2>
  </div>

- **Overhead camera (front):** fixed on a mount overlooking the entire workspace; tells the model "where the target is and the arm's overall state."
- **Wrist camera (wrist):** mounted at the arm end, follows the gripper; tells the model "the relative position between gripper and target, and whether to close."

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-01.png" alt="Overhead and wrist cameras" />
</div>

</section>

## 13.3 Finding Camera Device Names

<section id="camera-names" className="section-card">
  <div className="section-title">
    <span>Devices</span>
    <h2>13.3 Finding Camera Device Names</h2>
  </div>

To check camera indices, first run:

```bash
lerobot-find-cameras opencv
```

You'll see `Id: 0`, where 0 is the camera index.

```text
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

It lists each camera's name, ID, and default resolution. You can find `~/rebot_lerobot/outputs/captured_images/` in the directory to view images captured by each camera, verifying whether camera positioning is correct and appropriate.

Also note: if using a laptop, the built-in camera will be scanned; you'll need to unplug/replug to find the correct overhead and wrist camera indices. The laptop's built-in camera is usually index 0.

- **Plug order changes indices.** Today overhead is 0; tomorrow after replugging it might change. Spend 10 seconds re-running `lerobot-find-cameras` before each recording session to confirm.
- **USB cameras must be plugged directly into the computer, not through a dock.** Bandwidth contention on passive hubs directly manifests as unreadable images or dropped frames; ideally, the two cameras should plug into different USB controllers.

</section>

## 13.4 Image and Action Synchronization

<section id="sync" className="section-card">
  <div className="section-title">
    <span>Sync</span>
    <h2>13.4 Image and Action Synchronization</h2>
  </div>

### Single Camera

**RS version:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**DM version:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

If you have more cameras, you can add them by changing the `--robot.cameras` parameter. Note the `index_or_path` format, which is determined by the last digit of the camera ID output by the `python -m lerobot.find_cameras opencv` command.

### Dual Cameras

**RS version:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**DM version:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

You can see this is the image from inside the data collection box:

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-02.png" alt="Camera feed from inside the collection box" />
</div>

Recommended parameters: **640 × 480 @ 30 fps, `fourcc: "MJPG"`**. The three parameters each matter:

- **Resolution 640×480:** a balance between clarity and real-time performance. Doubling resolution quadruples USB bandwidth and storage overhead, while the model input already resizes images anyway — limited benefit.
- **FPS 30:** matches collection FPS. If camera FPS is lower, recording will repeatedly reuse old frames.
- **`fourcc: "MJPG"`:** image is compressed before transmission, reducing USB bandwidth pressure by an order of magnitude. You can of course try `YUYV` format images, but this will reduce resolution and FPS, causing arm stuttering. Currently `MJPG` format supports 3 cameras at 1920×1080 resolution while maintaining 30 FPS.

</section>

## 13.5 Create LeRobot Dataset

<section id="create-dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>13.5 Create LeRobot Dataset</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-03.png" alt="Create LeRobot dataset" />
</div>

Before running the command below, be ready to record data; there will be an audio cue entering the recording phase. If not, check the terminal prompts to see if it started.

**RS version:**

```bash
lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the crayfish into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20
```

**DM version:**

```bash
lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the crayfish into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20
```

There are several parameters related to the dataset itself:

| Parameter | Meaning | Recommendation |
| :--- | :--- | :--- |
| `--dataset.repo_id` | Dataset name (also the local folder name) | Separate names for test and formal sets, e.g., `rebot_b601/grab_cube_test` / `rebot_b601/grab_cube_v1` |
| `--dataset.single_task` | Task description (stored in the dataset) | English, matching the task description |
| `--dataset.num_episodes` | How many Episodes to record | Test: 5; formal: 50 (default is 50) |
| `--dataset.push_to_hub` | Whether to upload to Hub after recording | `false` = don't upload |
| `--dataset.episode_time_s=30` | Recording time per Episode | Adjust based on task complexity |
| `--dataset.reset_time_s=20` | Time to reset the scene for next recording | Adjust based on scene reset time |
| `--display_data=true` | Show camera feed in real time | - |

Afterward, the dataset will be saved in the home directory under `~/.cache/huggingface/lerobot`. The above folder will be created under `seeed_rebot_b601_rs/test`.

</section>

## 13.6 Recording, Pausing, and Re-recording Episodes

<section id="recording" className="section-card">
  <div className="section-title">
    <span>Recording</span>
    <h2>13.6 Recording, Pausing, and Re-recording Episodes</h2>
  </div>

### Recording

Keyboard controls during recording:

| Key | Action |
| :--- | :--- |
| → (Right arrow) | End current Episode early, proceed to reset/next |
| ← (Left arrow) | Discard current Episode, re-record this one |
| ESC | End entire collection session: encode videos, compute statistics, save dataset |

:::warning
If keys don't respond, it's a `pynput` version issue; downgrade: `pip install pynput==1.6.8`.
:::

### Re-recording

After recording 5 Episodes and verifying playback, for formal collection: change `repo_id` to the formal name, `num_episodes=50` to the formal value, and follow the pencil-five-point method from Chapter 12 — 1 Episode per point, 5 points per round, 10 rounds total.

### Pausing Recording

:::danger
Don't press Ctrl+C to pause recording — press <kbd>Esc</kbd>, otherwise it will exit abnormally.
:::

</section>

## 13.7 Visualizing and Playing Back a Dataset

<section id="viz-replay" className="section-card">
  <div className="section-title">
    <span>Playback</span>
    <h2>13.7 Visualizing and Playing Back a Dataset</h2>
  </div>

### Visualizing a Dataset

If you uploaded data, you can also visualize it locally with:

```bash
echo ${HF_USER}/rebot_test
```

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

If you used `--dataset.push_to_hub=false` and didn't upload data, you can also visualize locally with:

**RS version:**

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false
```

**DM version:**

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false
```

Here, `seeed_rebot_b601_rs/test` is the custom dataset name from collection (`repo_id`).

### Playing Back a Dataset

Now, try playing back the first dataset on your robot: `--dataset.episode=0` means play back the first collected dataset, and so on.

**RS version:**

```bash
lerobot-replay \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.can_adapter=socketcan \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.episode=0
```

**DM version:**

```bash
lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0
```

The robot should now perform the same actions you recorded during teleoperation.

</section>

## 13.8 Supplementing and Deleting Data

<section id="edit-dataset" className="section-card">
  <div className="section-title">
    <span>Editing</span>
    <h2>13.8 Supplementing and Deleting Data</h2>
  </div>

- Checkpoints are automatically created during recording.
- Add `--resume=true` to the original command to continue supplementing data.
- When resuming, set `--dataset.num_episodes` to the number of additional Episodes to record (not the target total in the dataset).
- To start over from scratch, **manually delete** the dataset directory.

Use the following command to delete Episodes: `--operation.episode_indices "[0]"` deletes the first Episode, and so on. Be patient during deletion, and modify the dataset name accordingly.

```bash
lerobot-edit-dataset \
  --repo_id rebot_b601/grab_cube_v1 \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

</section>

</div>
