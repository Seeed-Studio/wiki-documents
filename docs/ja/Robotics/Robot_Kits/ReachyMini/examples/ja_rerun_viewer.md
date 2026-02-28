---
description: Reachy Mini の状態を、重力補償付きのコンプライアントモードでリアルタイムに可視化およびログ取得するための Rerun ユーティリティを示す例です。
title: Rerun ビューア
slug: /ja/reachymini_examples_rerun_viewer
keywords:
- rerun
- visualization
- logging
- real-time
- compliant mode
- gravity compensation
- placo
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Rerun ビューア

このサンプルでは、Rerun ユーティリティを使用して Reachy Mini の状態をリアルタイムにログ取得および可視化する方法を示します。ロボットは重力補償付きのコンプライアントモードで動作し、構成を可視化しながら簡単に動かすことができます。

前提条件：
- 次でインストールします: `pip install reachy-mini[rerun,placo_kinematics]`
- 次でデーモンを起動します: `reachy-mini-daemon --kinematics-engine Placo`

完全なサンプルはこちら: [rerun_viewer.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/rerun_viewer.py)
