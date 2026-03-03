---
description: XIAO ESP32C3-FAQ
title: ファクトリーファームウェアでブートローダーを再フラッシュする方法
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reflash_the_bootloader
last_update:
  date: 6/30/2023
  author: cheng.tang
---
**USB Type-C**経由でボードをPCに接続し、**ESP RF Test Tool**を使用してファクトリーファームウェアでブートローダーを再フラッシュすることができます。

- **ステップ 1.** **BOOTボタン**を押し続けながらXIAO ESP32C3をPCに接続して**ブートローダーモード**に入ります

- **ステップ 2.** 接続後、BOOTボタンを離します

- **ステップ 3.** [このページ](https://www.espressif.com/en/support/download/other-tools)にアクセスして**ESP RF Test Tool and Test Guide**をダウンロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ 4.** **.zip**を展開し、`ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual`に移動して**EspRFTestTool_v2.8_Manual.exe**を開きます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **ステップ 5.** ChipTypeとして**ESP32C3**、あなたのCOMポート、BaudRateとして**115200**を選択し、**open**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **ステップ 6.** **Flash**を選択し、**Select Bin**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **ステップ 7.** [XIAO ESP32C3のファクトリーファームウェア](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)をダウンロードして選択します。

- **ステップ 8.** 最後に**Load Bin**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

フラッシュが成功すると以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>