---
description: FM受信機
title: FM受信機
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/FM_Receiver
last_update:
  date: 05/15/2025
  author: shuxu hu
---


## ハードウェアのインストール

### パーツリスト

* [Seeeduino Lotus v1.0](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)
* [Grove - LCD RGBバックライト](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)
* [Grove - I2C FM受信機](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html)
* [Grove - ボタン](https://www.seeedstudio.com/Grove-Button-p-766.html)
* [Grove - 回転角センサー](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)

### ハードウェアの接続

ハードウェアの接続は非常に簡単です。Grove - LCD RGBバックライトとGrove - I2C FM受信機はI2C通信を使用し、Grove - ボタンはデジタル入力、Grove - 回転角センサーはアナログ入力です。以下の図のように接続できます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Seeeduino_Lotus_usage.jpg)

## ソフトウェア部分

* GitHubからデモコードをダウンロードするには、[こちら](https://github.com/Seeed-Studio/Seeeduino_lotus_Usage)をクリックしてください。
* I2C_FM_RGB_LCDの例スケッチを開き、コンパイルしてボードにアップロードします。
* ボタンを押してFMの探索を開始し、回転角センサーを回して音量を調整します。

## 技術サポートと製品ディスカッション

<br />
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>