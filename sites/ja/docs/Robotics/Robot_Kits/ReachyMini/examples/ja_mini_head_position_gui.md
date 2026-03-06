---
description: Tkinter を使用して Reachy Mini の頭部の位置と姿勢をスライダーでロール、ピッチ、ヨー、X、Y、Z、およびボディヨーを制御するインタラクティブな GUI のサンプルです。
title: Head Position GUI
slug: /reachymini_examples_mini_head_position_gui
keywords:
  - gui
  - tkinter
  - head position
  - orientation
  - sliders
  - real-time control
  - interactive
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_mini_head_position_gui/
---

# Head Position GUI

このサンプルでは、Tkinter を使用したグラフィカルユーザーインターフェース (GUI) により、Reachy Mini の頭部の位置と姿勢をインタラクティブに制御できます。スライダーを使って頭部のロール、ピッチ、ヨー角度と X、Y、Z 位置を調整できるほか、ボディヨーを制御し、アンテナのアニメーション動作も確認できます。

**機能:**
- 頭部姿勢（ロール、ピッチ、ヨー）のリアルタイム制御
- 頭部位置（X、Y、Z）のリアルタイム制御
- ボディヨーの制御
- アンテナのアニメーション動作（正弦波振動）
- 50Hz でライブ更新されるインタラクティブなスライダー

**使用方法:**
```bash
python mini_head_position_gui.py
```

すべての制御可能なパラメータ用のスライダーを備えた GUI ウィンドウが開きます。スライダーを調整すると、ロボットがリアルタイムで応答する様子が確認できます。

完全なサンプルはこちら: [mini_head_position_gui.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/mini_head_position_gui.py)
