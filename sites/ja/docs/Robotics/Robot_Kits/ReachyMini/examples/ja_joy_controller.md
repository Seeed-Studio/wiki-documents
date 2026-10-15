---
description: ジョイスティック（PS4 または Xbox コントローラ）を使用して Reachy Mini の頭部ヨー角を直感的かつリアルタイムに制御する方法を示すサンプルです。
title: ジョイスティックコントローラ
slug: /reachymini_examples_joy_controller
keywords:
  - joystick
  - controller
  - ps4
  - xbox
  - pygame
  - real-time control
  - head yaw
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_joy_controller/
---

# ジョイスティックコントローラ

このサンプルでは、ジョイスティック（PS4 または Xbox コントローラ）を使用して Reachy Mini の頭部ヨー角を制御する方法を示します。左スティックで頭部の左右回転を操作し、ロボットを直感的にリアルタイム制御できます。

**操作方法：**
- **左スティック（左右）**：頭部ヨー角を制御
- **CIRCLE / B ボタン**：アプリケーションを安全に終了
- **CTRL-C**：アプリケーションを終了

**必要条件：**
- pygame をインストール：`pip install pygame`
- PS4 または Xbox コントローラをコンピュータに接続

**コントローラのマッピング：**
- PS4：ボタン 1 = Circle (O)、軸 0 = 左スティック水平
- Xbox：ボタン 1 = B、軸 0 = 左スティック水平

完全なサンプルはこちら： [joy_controller.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/joy_controller.py)