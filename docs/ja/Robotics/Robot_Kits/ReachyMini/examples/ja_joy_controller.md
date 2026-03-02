---
description: ジョイスティック（PS4 または Xbox コントローラ）を使用して Reachy Mini の頭部ヨー角を直感的かつリアルタイムに制御する方法を示すサンプルです。
title: ジョイスティックコントローラ
slug: /ja/reachymini_examples_joy_controller
keywords:
- joystick
- controller
- ps4
- xbox
- pygame
- real-time control
- head yaw
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# ジョイスティックコントローラ

このサンプルでは、ジョイスティック（PS4 または Xbox コントローラ）を使用して Reachy Mini の頭部ヨー角を制御する方法を示します。左スティックで頭部の左右回転を操作し、ロボットを直感的にリアルタイム制御できます。

**操作方法：**
- **LEFT JOYSTICK (Left/Right)**: 頭部のヨー角を制御
- **CIRCLE / B BUTTON**: アプリケーションを安全に終了
- **CTRL-C**: アプリケーションを終了

**必要環境：**
- pygame をインストール：`pip install pygame`
- PS4 または Xbox コントローラをコンピュータに接続

**コントローラのマッピング：**
- PS4: Button 1 = Circle (O)、Axis 0 = Left Stick Horizontal
- Xbox: Button 1 = B、Axis 0 = Left Stick Horizontal

完全なサンプルはこちら： [joy_controller.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/joy_controller.py)
