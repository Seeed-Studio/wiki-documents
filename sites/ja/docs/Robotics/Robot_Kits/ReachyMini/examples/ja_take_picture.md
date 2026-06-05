---
description: Reachy Mini のカメラから単一フレームを取得し、画像ファイルとして保存する方法を示すサンプルです。
title: 写真を撮る
slug: /reachymini_examples_take_picture
keywords:
  - カメラ
  - キャプチャ
  - 画像
  - 写真
  - フレーム
  - 画像を保存
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_take_picture/
---

# 写真を撮る

このサンプルでは、Reachy Mini のカメラから単一フレームを取得し、画像ファイルとして保存する方法を説明します。

次のコマンドで実行します：
```bash
python take_picture.py --backend [default|local|webrtc]
```

取得された画像は、現在のディレクトリに `reachy_mini_picture.jpg` という名前で保存されます。

完全なサンプルはこちらを参照してください: [take_picture.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/take_picture.py)