---
description: Example demonstrating how to use the microphone array to detect the Direction of Arrival (DoA) of speech for sound localization.
title: Sound Direction of Arrival (DoA)
keywords:
- Reachy Mini
- Example
- DoA
- Sound Localization
- Direction of Arrival
- Microphone Array
- Speech Detection
slug: /reachymini/examples/sound_doa
last_update:
  date: 02/11/2026
  author: Tienjui Wong
translation:
  skip: [zh-CN]
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


```python title="sound_doa.py"
# See ../../../examples/sound_doa.py for the full code
# This example demonstrates Direction of Arrival (DoA) detection for sound localization
```
