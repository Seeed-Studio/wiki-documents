---
description: XBee Shield V2.0
title: XBee Shield V2.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XBee_Shield_V2.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/Xbeeshield_01.jpg)

新バージョンのXBee Shieldは、Arduinoと互換性のある標準化されたスタッカブルシールドです。このシールドにBeeシリーズのモジュールを簡単にスタックして、プロジェクト用のワイヤレスネットワークを構築できます。それに加えて、レベル変換機能も備えており、高・低IOレベル間の双方向変換を可能にします。予約されたデジタルピンにより、ジャンパーキャップを使用してTX/RXポートを選択することができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/XBee-Shield-V2.0-p-1375.html)

## 特徴
---
- 標準化された形状デザイン
- UartSBeeモジュールをUSBに接続して設定可能
- DINおよびDOUTピンはUARTおよび他のデジタルピン（D2～D12）に接続可能
- 独自の開発のための拡張スペース
- LEDインジケーター付き

## ハードウェア概要
---
![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee_Shield_Interface%202.jpg)

- U2：[CJT1117 IC](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/CJT1117_datasheet.pdf)、XBeeモジュールに3.3V電圧を供給します。
- U3：[SN74LVC1G125 IC](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/SN74LVC1G125DCKR.pdf)、ロジックレベル変換機能を実現します。

## はじめに
---

ここでは、XBee Shield V2.0がRF Beeとどのように動作するかを示します。また、Bluetooth Beeや他のモジュールも使用可能です。

| XBee Shield V2.0 | RF Bee |
|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee%20Shield%20V2.0_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/rfbee1_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/XBee-Shield-V2.0-p-1375.html)|[今すぐ購入](https://www.seeedstudio.com/RFbee-V1.1-Wireless-arduino-compatible-node-p-614.html)|

- RF BeeをXBee Shield V2.0に差し込みます。

 ![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee_Shield_connect_RF_XBee.jpg)

- ジャンパーキャップを使用して**XB_TXとデジタル4**を接続します。また、ジャンパーキャップを使用して**XB_RXとデジタル5**を接続します。もちろん、デジタルポートを自由に変更できますが、デモコードの定義でポート番号を同時に変更することを忘れないでください。

:::note
        以下は既知の制限事項です：
        1. 複数のソフトウェアシリアルポートを使用している場合、一度にデータを受信できるのは1つだけです。
        2. MegaおよびMega 2560のすべてのピンが変更割り込みをサポートしているわけではないため、RXに使用できるのは次のピンのみです：10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69
        3. Leonardoのすべてのピンが変更割り込みをサポートしているわけではないため、RXに使用できるのは次のピンのみです：8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI)。
:::
通信方法についてさらに詳しい情報が必要な場合は、関連モジュールのWIKIページを参照してください。

## 回路図オンラインビューア

<!-- <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_Eagle_file.zip" style={borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}
</div> -->

## リソース
---
- **[Eagle]** [XBee Shield V2.0 Eagleファイル](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_Eagle_file.zip)
- **[PDF]** [XBee Shield V2.0b回路図ファイル](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_v2.0b.pdf)
- **[PDF]** [XBee Shield V2.0b PCBファイル](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee%20Shield%20v2.0b%20PCB.pdf)
- **[データシート]** [CJT1117データシート](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/CJT1117_datasheet.pdf)
- **[データシート]** [SN74LVC1G125データシート](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/SN74LVC1G125DCKR.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>