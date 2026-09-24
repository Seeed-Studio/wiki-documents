---
title: Data Collection Configuration Recommendations
description: Recommended SenseCraft Robotics training scenarios, camera layouts, collection parameters, training steps, and deployment checks.
keywords:
  - SenseCraft Robotics
  - data collection
  - robot training
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/device-model-selection.webp
slug: /sensecraft_robotics_data_collection_configuration
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

**A selection reference for data collection, vision layout, and training parameters.**

| Item | Content |
| --- | --- |
| Applicable scenarios | Robotic arm teaching and training, pick-and-place / transfer demonstrations, dataset collection, and model training plan review |
| Core conclusion | Prefer a dual-view setup. Use 480p camera resolution and 60 fps collection by default (corresponds to High). Plan collection episodes and training steps by task difficulty. |
| Priority | Ensure complete camera coverage and stable data first, then increase resolution or add more complex scenarios. |
| Output use | Can serve as a baseline for purchase configuration, training plans, and on-site deployment checklists. |

For basic training, prefer the "top view + gripper" setup. Use the "top view + side view" setup when the task requires height judgment, occlusion handling, or target pose recognition.

Start collection at 480p and 60 fps (collection frame rate: High). If frame drops occur, first close the preview on the right side of the collection page, then evaluate whether to lower the resolution or upgrade computer performance. Training quality depends first on data stability and scenario coverage, then on higher resolution or a more complex camera count.

## Quick Recommendations

- Camera layout: Place the top camera at about 45° from the target object. The frame should cover the target object, robotic arm end effector, and key motion area.
- Resolution: 480p is recommended by default. It balances clarity, transmission load, and video file size. Increase resolution only when computer performance is sufficient.
- Collection frame rate: 60 fps is recommended by default (corresponds to High). It is smooth enough for most robotic arm actions. Too high a frame rate may cause performance bottlenecks, frame drops, or dataset errors.
- Performance checks: If frame drops still occur at 60 fps, first close the right-side collection preview, then check camera bandwidth, USB ports, disk writes, and background programs.

## Camera Configuration Options

| Option | Suitable tasks | Installation notes | Notes |
| --- | --- | --- | --- |
| Top view + gripper | Fixed-point transfer, pick-and-place, and basic teaching training. Suitable for observing the grasp contact process. | Place the top camera about 45° from the target and capture the complete target and robotic arm as much as possible. Aim the gripper camera at the end effector and grasping area. | The gripper view can shake or become occluded. Secure the cable and verify image stability. |
| Top view + side view | Random-position grasping, pose changes, occlusion, or tasks that require height judgment. | The top camera covers the global view. The side camera should clearly capture the target outline, gripper approach, and placement position. | Keep the side camera out of the robotic arm motion interference area and avoid long-term occlusion by fixtures or workpieces. |

## Camera Selection Notes

| Computer | Recommended combination | Notes |
| --- | --- | --- |
| Mac | 2 Hikvision USB cameras | Keep the robotic arm frame rate at no more than 60 fps. 120 fps collection is not available, and compatibility issues may occur in some cases. |
| Mac | 1 Hikvision USB camera + 1 Logitech C270 HD Webcam | Currently the most stable combination. It can also be used for robotic arm collection at 120 fps. |
| Mac | 2 Logitech C270 HD Webcams | Also a stable combination and supports all robotic arm collection frame rates. |
| Windows | All combinations above are available | The combinations currently work on Windows. Connect cameras directly to USB ports and avoid hubs. |

Reference models:

- Logitech C270 HD Webcam: [https://www.logitech.com/en-sg/shop/p/c270-hd-webcam](https://www.logitech.com/en-sg/shop/p/c270-hd-webcam)
- Hikvision USB camera: basic fixed-focus model, 1080p is sufficient

## Data Collection Parameters

| Parameter | Recommended value | Reason | Adjustment |
| --- | --- | --- | --- |
| Video resolution | 480p | Clear enough to see the target and action process while keeping file size and transmission pressure manageable. | Increase resolution if the computer, camera, and storage performance are sufficient. If frames drop, return to 480p first. |
| Collection frame rate | 60 fps (corresponds to High in SenseCraft software) | Smooth enough for robotic arm motion recording and usually does not miss key actions. | Higher frame rates increase performance load. If 60 fps still drops frames, close the right-side preview first. |
| Preview window | Enabled by default; disable when frames drop | Preview helps on-site checks but consumes compute resources. | Collection stability has higher priority than preview experience. Disable unnecessary previews for formal collection. |
| Data integrity | Spot-check after each collection round | Helps detect missing views, frame drops, lighting changes, or failed actions in time. | Use consistent naming by date, task, difficulty, and episode number for traceability. |

## Task Difficulty, Episodes, and Training Steps

| Difficulty | Task description | Episodes | Suggested training steps | Acceptance focus |
| --- | --- | --- | --- | --- |
| Beginner | Move from fixed position A to position B | 20 episodes | 10k-15k steps | Stable motion path, controllable final-position error, and no obvious repeated execution failures. |
| Intermediate | Pick from random positions and move to specified position B | 50 episodes | 30k-40k steps | Covers different initial positions, stable grasp success rate, and consistent placement position. |
| Advanced | Long-duration, multi-step, or continuous tasks | 100 episodes | 80k-100k steps | Focus on long-duration stability, exception recovery, accumulated error, and dataset distribution coverage. |

## On-Site Deployment Checklist

- View coverage: The frame should show the target object, key gripper actions, and placement area at the same time. The target should not remain near the image edge for long periods.
- Target clarity: The side camera should clearly capture the target outline. The top camera should show the relative position between the target and robotic arm.
- Stable frame rate: Run a short test before formal collection and confirm there are no continuous frame drops at 60 fps.
- Consistent environment: Keep lighting stable, background simple, and the target placement range clear to reduce irrelevant variables.
- Data traceability: Record task difficulty, camera option, resolution, frame rate, episode count, and exceptions for each collection session.

## Suggested Implementation Path

1. Start with a beginner task to verify camera coverage and collection stability. Confirm that 480p and 60 fps can collect continuously.
2. Move to an intermediate task, add random initial positions, and focus on grasp success rate and frame drops.
3. Expand to advanced long-duration tasks, add more episodes, and record abnormal samples for later optimization.
4. Before increasing task difficulty, keep camera positions and parameters fixed to avoid changing too many variables at once.
