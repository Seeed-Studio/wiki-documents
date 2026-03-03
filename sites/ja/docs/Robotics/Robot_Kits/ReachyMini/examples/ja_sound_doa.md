---
description: Reachy Mini のマイクアレイを使用して到来方向 (DoA) を検出し、自動的に話者の方向を見る例。
title: 音の到来方向
slug: /ja/reachymini_examples_sound_doa
keywords:
- doa
- direction of arrival
- microphone array
- speech detection
- sound localization
- look at
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# 音の到来方向 (DoA)

この例では、マイクアレイを使用して音声の到来方向 (DoA) を検出する方法を示します。ロボットは FastAPI エンドポイントを使用して DoA 情報を取得し、音源の位置を計算してワールド座標に変換し、自動的に話者の方向を見ます。

**動作概要：**
1. `/api/state/doa` エンドポイントを継続的にポーリングして音声の方向を取得する
2. 音声が検出されると、音源の 3D 位置を計算する
3. 位置を頭部座標からワールド座標へ変換する
4. `look_at_world()` を使用してロボットに話者の方向を見るよう指令する

**特徴：**
- ロボット IP（ローカルまたは無線）の自動検出
- 過度な頭部動作を避けるためのしきい値ベースのフィルタリング
- 頭部座標からワールド座標へのリアルタイム変換


完全なサンプルはこちら: [sound_doa.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/sound_doa.py)
