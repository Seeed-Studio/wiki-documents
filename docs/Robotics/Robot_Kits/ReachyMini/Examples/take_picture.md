---
description: Example demonstrating how to capture a single frame from Reachy Mini's camera and save it as an image file.
title: Take Picture
keywords:
- Reachy Mini
- Example
- Camera
- Picture
- Capture
- Image
- Frame
slug: /reachymini/examples/take_picture
last_update:
  date: 02/11/2026
  author: Tienjui Wong
translation:
  skip: [zh-CN]
---

# Take Picture

This example demonstrates how to capture a single frame from Reachy Mini's camera and save it as an image file.

Run with:
```bash
python take_picture.py --backend [default|gstreamer|webrtc]
```

The captured image will be saved as `reachy_mini_picture.jpg` in the current directory.

```python title="take_picture.py"
# See ../../../examples/take_picture.py for the full code
# This example demonstrates capturing frames from the camera
```
