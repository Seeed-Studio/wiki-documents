---
description: 示例演示如何从数据集播放Reachy Mini的录制移动，包括舞蹈、情绪或自定义数据集。
title: 录制移动
slug: /reachymini_examples_recorded_moves
keywords:
  - recorded moves
  - dataset
  - dances
  - emotions
  - motion playback
  - library
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_examples_recorded_moves/
---

# 录制移动

此示例演示如何播放Reachy Mini数据集的所有可用移动。您可以使用舞蹈和情绪的预构建库，或提供您自己的自定义数据集。

运行：
```bash
python recorded_moves.py -l [dance, emotions]
```

或使用自定义数据集：
```bash
python recorded_moves.py --dataset path/to/your/dataset
```

请参阅完整示例：[recorded_moves.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/recorded_moves.py)