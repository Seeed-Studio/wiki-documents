---
description: Seeed Studio Round Display for XIAO-FAQ
title: Seeed Studio XIAO ESP32S3 Senseをこの拡張画面に接続したい場合、2つのTFカードスロットで競合が発生しますか？
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/two_TF_card
last_update:
  date: 6/30/2023
  author: cheng.tang
---
A: これは競合を引き起こしません。異なるSDカードスロットはチップセレクトによって制御されます。Sense上のmicroSDカードスロットを使用したい場合、チップセレクトピンは**21**にする必要があります。Round Display上のmicroSDカードスロットを使用したい場合、チップセレクトピンは**D2**にする必要があります。

S3 Senseカメラチュートリアルでは、ハードウェアとmicroSDカードの両方を使用する[例](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera)があります。