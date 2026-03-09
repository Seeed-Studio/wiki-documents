---
description: Reachy Mini 用のダンス、感情、またはカスタムデータセットを含むデータセットから、記録された動きを再生する方法を示すサンプルです。
title: 記録された動き
slug: /reachymini_examples_recorded_moves
keywords:
  - recorded moves
  - dataset
  - dances
  - emotions
  - motion playback
  - library
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_recorded_moves/
---

# 記録された動き

このサンプルでは、Reachy Mini 用のデータセットから利用可能なすべての動きを再生する方法を示します。ダンスや感情のためのあらかじめ用意されたライブラリを使用することも、自分で用意したカスタムデータセットを使用することもできます。

次のコマンドで実行します：
```bash
python recorded_moves.py -l [dance, emotions]
```

カスタムデータセットを使用する場合：
```bash
python recorded_moves.py --dataset path/to/your/dataset
```

完全なサンプルはこちらを参照してください： [recorded_moves.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/recorded_moves.py)
