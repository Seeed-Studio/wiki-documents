---
description: Reachy Mini のカメラから単一フレームをキャプチャし、画像ファイルとして保存する方法を示すサンプルです。
title: 写真を撮る
slug: /reachymini_examples_take_picture
keywords:
  - camera
  - capture
  - image
  - picture
  - frame
  - save image
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reachymini_examples_take_picture/
---

# 写真を撮る

このサンプルでは、Reachy Mini のカメラから単一フレームをキャプチャし、画像ファイルとして保存する方法を説明します。

次のコマンドで実行します：
```bash
python take_picture.py --backend [default|gstreamer|webrtc]
```

キャプチャされた画像は、現在のディレクトリに `reachy_mini_picture.jpg` として保存されます。

完全なサンプルはこちらを参照してください: [take_picture.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/take_picture.py)
