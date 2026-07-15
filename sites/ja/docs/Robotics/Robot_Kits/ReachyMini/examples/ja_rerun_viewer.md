---
description: Rerun ユーティリティを使用して、重力補償付きコンプライアントモードにおける Reachy Mini の状態をリアルタイムで可視化およびログ取得する例です。
title: Rerun ビューア
slug: /reachymini_examples_rerun_viewer
keywords:
  - rerun
  - visualization
  - logging
  - real-time
  - compliant mode
  - gravity compensation
  - placo
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_rerun_viewer/
---

# Rerun ビューア

この例では、Rerun ユーティリティを使用して Reachy Mini の状態をリアルタイムでログ取得および可視化する方法を示します。ロボットは重力補償付きのコンプライアントモードで動作し、その構成を可視化しながら簡単に動かすことができます。

必要条件：
- 次でインストールします: `pip install reachy-mini[rerun,placo_kinematics]`
- 次でデーモンを起動します: `reachy-mini-daemon --kinematics-engine Placo`

完全なサンプルはこちら: [rerun_viewer.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/rerun_viewer.py)