---
description: Reachy Mini のマイクアレイを使用して到来方向 (DoA) を検出し、自動的に話者の方向を見る例です。
title: 音の到来方向
slug: /reachymini_examples_sound_doa
keywords:
  - doa
  - 到来方向
  - マイクアレイ
  - 音声検出
  - 音源定位
  - 見つめる
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_sound_doa/
---

# 音の到来方向 (DoA)

この例では、マイクアレイを使用して音声の到来方向 (DoA) を検出する方法を示します。ロボットは FastAPI エンドポイントを使って DoA 情報を取得し、音源の位置を計算してワールド座標に変換し、自動的に話者の方向を見ます。

**動作の流れ：**
1. `/api/state/doa` エンドポイントを継続的にポーリングして音声の方向を取得する
2. 音声が検出されると、音源の 3D 位置を計算する
3. 位置を頭部座標からワールド座標へ変換する
4. `look_at_world()` を使用してロボットに話者の方向を見るよう指令する

**特徴：**
- ロボット IP（ローカルまたは無線）の自動検出
- 閾値ベースのフィルタリングによる過度な頭部運動の抑制
- 頭部座標からワールド座標へのリアルタイム変換


完全なサンプルはこちら: [sound_doa.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/sound_doa.py)