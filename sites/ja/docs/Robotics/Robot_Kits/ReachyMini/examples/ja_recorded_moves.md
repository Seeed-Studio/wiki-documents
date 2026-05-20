---
description: Reachy Mini 用のダンス、感情、またはカスタムデータセットを含むデータセットから記録された動きを再生する方法を示す例です。
title: 記録された動き
slug: /reachymini_examples_recorded_moves
keywords:
  - 記録された動き
  - データセット
  - ダンス
  - 感情
  - モーション再生
  - ライブラリ
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_recorded_moves/
---

# 記録された動き

この例では、Reachy Mini 用のデータセットから利用可能なすべての動きを再生する方法を示します。ダンスや感情のためにあらかじめ用意されたライブラリを使用することも、自分で作成したカスタムデータセットを使用することもできます。

次のコマンドで実行します：
```bash
python recorded_moves.py -l [dance, emotions]
```

またはカスタムデータセットを使用する場合：
```bash
python recorded_moves.py --dataset path/to/your/dataset
```

完全なサンプルはこちらを参照してください: [recorded_moves.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/recorded_moves.py)