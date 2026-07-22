---
description: Reachy Mini をコンプライアンスモードにし、重力補償を行うことで、ロボットが軽く押した動きに追従し、手を離すとその場に留まるデモです。
title: コンプライアンスモード デモ
slug: /reachymini_examples_reachy_compliant_demo
keywords:
  - コンプライアンスモード
  - 重力補償
  - placo
  - 運動学
  - 人とロボットのインタラクション
  - ソフトモード
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_reachy_compliant_demo/
---

# コンプライアンスモード デモ

このデモでは、Reachy Mini をコンプライアンスモードにし、ロボットプラットフォームの重力を補償して、倒れないようにします。

ロボットを優しく押すと、その動きに追従します。押すのをやめると、その場に留まります。これは、人とロボットのインタラクションのように、ロボットをコンプライアントにしてユーザーの動きに追従させたいアプリケーションに有用です。

注意：このデモは現在、運動学エンジンとして Placo を使用している場合にのみ動作します。

完全なサンプルはこちらを参照してください: [reachy_compliant_demo.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/reachy_compliant_demo.py)