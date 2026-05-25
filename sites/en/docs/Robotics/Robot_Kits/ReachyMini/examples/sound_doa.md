---
description: Example demonstrating Direction of Arrival (DoA) detection using Reachy Mini's microphone array to automatically look toward the speaker.
title: Sound Direction of Arrival
slug: /reachymini_examples_sound_doa
keywords:
  - doa
  - direction of arrival
  - microphone array
  - speech detection
  - sound localization
  - look at
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_examples_sound_doa/
---

# Sound Direction of Arrival (DoA)

This example demonstrates how to use the microphone array to detect the Direction of Arrival (DoA) of speech. The robot uses the FastAPI endpoint to get DoA information, calculates the position of the sound source, transforms it into world coordinates, and automatically looks towards the speaker.

**How it works:**
1. Continuously polls the `/api/state/doa` endpoint to get speech direction
2. When speech is detected, calculates the 3D position of the sound source
3. Transforms the position from head coordinates to world coordinates
4. Commands the robot to look at the speaker using `look_at_world()`

**Features:**
- Automatic detection of robot IP (local or wireless)
- Threshold-based filtering to avoid excessive head movements
- Real-time transformation from head to world coordinates


See the full example at: [sound_doa.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/sound_doa.py)