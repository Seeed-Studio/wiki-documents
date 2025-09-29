---
description: RFIDでLEDを制御
title: RFIDでLEDを制御
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RFID_Control_LED
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: RFIDでLEDを制御
category: チュートリアル
oldwikiname: RFIDでLEDを制御
prodimagename:
surveyurl: https://www.research.net/r/RFID_Control_LED
--- -->

125KHz RFIDリーダーはRFIDタグからデータを読み取ることができます。これは、いくつかのIoTやインテリジェント制御システムに使用することができます。

このデモでは、RFIDタグからデータを読み取り、LEDを制御する方法を紹介します。

**必要なハードウェア：**

* Arduino

* 125KHz RFIDリーダー

* RFIDタグ

**回路：**

RFIDリーダーをD2、D3に接続します。

![](https://files.seeedstudio.com/wiki/RFID_Control_LED/img/Sidekick_39_1.png)

**コード：**

RFIDリーダーモジュールには内部制御ICが搭載されており、制御が簡単です。RFIDタグがリーダーに近づくと、タグのIDをUART経由で出力します。

異なるIDに対してコード内で処理を行うことができます。

以下のコードではIDを判別していません。どのタグがリーダーに近づいても、LEDの状態を変更することができます。

Arduino IDEを開き、[ファイル] -> [スケッチブック] -> [RFIDリーダー]をクリックしてください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>