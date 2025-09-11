---
description: デフォルトでサポートされているモデル
title: デバイス上のモデル
keywords:
  - Edge
  - reCamera
  - モデル
  - コンピュータビジョン
image: https://files.seeedstudio.com/wiki/reCamera/013.jpg
slug: /ja/recamera_on_device_models
last_update:
  date: 05/15/2025
  author: Dawn Yao
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

他のモデルを置き換えることができます：

| モデル                              | 説明                                                         | ダウンロードリンク                                           |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| yolo11n_cv181x_int8.cvimodel       | [Ultralytics](https://www.ultralytics.com/) [YOLO11](https://github.com/ultralytics/ultralytics) | [Yolo11n ダウンロード](https://files.seeedstudio.com/wiki/reCamera/models/yolo11n_cv181x_int8.cvimodel) |
| yolov8n_cv181x_int8.cvimodel       | Ultralytics YOLOv8                                           | [Yolov8n ダウンロード](https://files.seeedstudio.com/wiki/reCamera/models/yolov8n_cv181x_int8.cvimodel) |
| person_cv181x_int8.cvimodel        | 人物認識モデル                                               | [Person Detect ダウンロード](https://files.seeedstudio.com/wiki/reCamera/models/person_cv181x_int8.cvimodel) |
| gender_cv181x_int8.cvimodel        | 人間の性別識別モデル                                         | [Gender Detect ダウンロード](https://files.seeedstudio.com/wiki/reCamera/models/gender_cv181x_int8.cvimodel) |
| gesture_cv181x_int8.cvimodel       | 手のジェスチャー認識                                         | [Gesture Detect ダウンロード](https://files.seeedstudio.com/wiki/reCamera/models/gesture_cv181x_int8.cvimodel) |
| digital_meter_cv181x_int8.cvimodel | 数字認識モデル                                               | [Digital Detect ダウンロード](https://files.seeedstudio.com/wiki/reCamera/models/digital_meter_cv181x_int8.cvimodel) |

Yolo11n モデルクラス：

```json
person, bicycle, car, motorcycle, airplane, bus, train, truck, boat, traffic light, fire hydrant, stop sign, parking meter, bench, bird, cat, dog, horse, sheep, cow, elephant, bear, zebra, giraffe, backpack, umbrella, handbag, tie, suitcase, frisbee, skis, snowboard, sports ball, kite, baseball bat, baseball glove, skateboard, surfboard, tennis racket, bottle, wine glass, cup, fork, knife, spoon, bowl, banana, apple, sandwich, orange, broccoli, carrot, hot dog, pizza, donut, cake, chair, couch, potted plant, bed, dining table, toilet, tv, laptop, mouse, remote, keyboard, cell phone, microwave, oven, toaster, sink, refrigerator, book, clock, vase, scissors, teddy bear, hair drier, toothbrush
```

また、ビデオストリームをプレビューし、希望するモデルを変更できる組み込みのダッシュボードUI例を提供しています。これを自由に調整して、独自のアプリケーションに統合することができます。[さらなる作業が進行中...]

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>