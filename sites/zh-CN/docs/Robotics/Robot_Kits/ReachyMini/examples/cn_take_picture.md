---
description: 示例演示如何从Reachy Mini的摄像头捕获单帧并将其保存为图像文件。
title: 拍照
slug: /reachymini_examples_take_picture
keywords:
  - camera
  - capture
  - image
  - picture
  - frame
  - save image
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_examples_take_picture/
---

# 拍照

此示例演示如何从Reachy Mini的摄像头捕获单帧并将其保存为图像文件。

运行：
```bash
python take_picture.py --backend [default|local|webrtc]
```

捕获的图像将保存在当前目录中，文件名为`reachy_mini_picture.jpg`。

请参阅完整示例：[take_picture.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/take_picture.py)