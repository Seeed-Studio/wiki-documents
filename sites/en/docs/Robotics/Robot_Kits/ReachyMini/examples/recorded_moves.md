---
description: Example demonstrating how to play recorded moves from datasets including dances, emotions, or custom datasets for Reachy Mini.
title: Recorded Moves
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
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/reachymini_examples_recorded_moves/
---

# Recorded Moves

This example demonstrates how to play all available moves from a dataset for Reachy Mini. You can use pre-built libraries for dances and emotions, or provide your own custom dataset.

Run with:
```bash
python recorded_moves.py -l [dance, emotions]
```

Or with a custom dataset:
```bash
python recorded_moves.py --dataset path/to/your/dataset
```

See the full example at: [recorded_moves.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/recorded_moves.py)