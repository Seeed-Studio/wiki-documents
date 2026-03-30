---
description: Reachy Mini をコンプライアンスモードにし、重力補償を有効にして、ロボットが軽い押しに追従し、手を離すとその場に留まるデモです。
title: コンプライアンスモード デモ
slug: /reachymini_examples_reachy_compliant_demo
keywords:
  - compliant mode
  - gravity compensation
  - placo
  - kinematics
  - human-robot interaction
  - soft mode
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_reachy_compliant_demo/
---

# コンプライアンスモード デモ

このデモでは、Reachy Mini をコンプライアンスモードにし、ロボットプラットフォームの重力を補償して、倒れないようにします。

ロボットを軽く押すと、その動きに追従します。押すのをやめると、その場に留まります。これは、人とロボットのインタラクションのように、ロボットに柔軟性を持たせてユーザーの動きに追従させたい用途に有用です。

注意：このデモは現在、運動学エンジンとして Placo を使用している場合にのみ動作します。

完全なサンプルはこちらを参照してください: [reachy_compliant_demo.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/reachy_compliant_demo.py)
