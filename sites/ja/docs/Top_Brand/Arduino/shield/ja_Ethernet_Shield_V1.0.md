---
description: Ethernet Shield V1.0
title: Ethernet Shield V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Ethernet_Shield_V1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Ethernet Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Ethernet_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Ethernet_Shield_V1-0
sku:
tags:

--- -->
![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_Shield_Pic.jpg)

Ethernet Shieldは、Arduinoプロジェクトにインターネット接続を即座に可能にします。オンボードのWiz5100イーサネットコントローラーは、最大4つのTCPおよびUDP接続を処理します。Arduinoにスタックするだけで、自分のネットワークデバイスを作成できます。オンボードのインジケーターライトで接続状況を簡単に確認できます。また、シールドやプロトタイピングボードに接続するための2列の追加ピンヘッダーで設計をさらに拡張できます。

**モデル:** [ARD124B2P](https://www.seeedstudio.com/depot/wiznet-ethernet-shield-w5100-p-518.html?cPath=102)

## 特徴 ##

- 標準ArduinoおよびArduino Mega互換

- Arduino Ethernetライブラリ互換

- 標準RJ45イーサネットジャック

- 16Kバイトの内部バッファ

- すべての機能に対応したインジケーターLED

- アクセスしやすいリセットボタン

- 0.1インチグリッドのプロトタイピングボード用の標準ピンヘッダー

- 最大4つのTCP/UDPネットワーク接続

## 仕様 ##

 |項目| 最小| 標準| 最大| 単位
 |---|---|---|---|---|
 |**電圧**|3.5|5|5.5|V|
 |**電流**| 120| 210| 350| mA|
|**寸法**| 72.6x58.4x23.2||| mm|
 |**対応接続**| TCP/UDP||| /|
 |**正味重量**|24.2|||g|

## インターフェース機能 ##

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet-hard1.png)
**RJ45** - イーサネットポート

**Power LED** - 電源

**RST LED（赤）** - リセット時に赤点灯

**LINK LED** - リンクが正常な場合は常時点灯、TXまたはRX状態では点滅

**SPD LED** - リンク速度が100Mbpsの場合に点灯

**FDX LED** - フルデュプレックスモードの状態を示す点灯

**Coll LED** - 衝突活動の存在を示す点灯

**Rx LED** - 受信活動の存在を示す点灯

**Tx LED** - 送信活動の存在を示す点灯

**Reset KEY** - 押すとEthernet ShieldとArduinoをリセット

### Arduinoで使用されるピン ###

**D0** - 未使用

**D1** - 未使用

**D2** - W5100のINTピンに接続

**D3** - W5100のリセットを制御

**D4** - 未使用

**D5** - 未使用

**D6** - 未使用

**D7** - 未使用

**D8** - 未使用

**D9** - 未使用

**D10** - SPIチップセレクトに使用

**D11** - SPI MOSIに使用

**D12** - SPI MISOに使用

**D13** - SPI SCKに使用

**D14(A0)** - 未使用

**D15(A1)** - 未使用

**D16(A2)** - 未使用

**D17(A3)** - 未使用

**D18(A4)** - 未使用

**D19(A5)** - 未使用

## 使用方法 ##

### ハードウェアのインストール ###

RJ45コネクタを介してイーサネットシールドをインターネットに接続し、USBケーブルを介してArduinoをPCに接続します。イーサネットシールドをArduinoボードに挿入します：
![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield_hard.jpg)

### ソフトウェア ###

- Arduino IDE（1.0）を開き、Ethernetライブラリの**WebServer**例を開きます：

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield1.jpg) ![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield3.jpg)

- **Tools- Board**で対応するArduinoボード（Arduino UNOやDuemilanoveなど）を選択します。**Tools- Serial port**で使用しているCOMポートを選択します。

- Webブラウザを開き、ウェブアドレス「192.168.1.177」を入力すると、Arduinoボードがウェブサーバーとして動作する結果が表示されます：

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield2.jpg)

## バージョントラッカー ##

|リビジョン| 説明|リリース|
|---|---|---|
|v1.0|V1.0リリース|2012/3/29|

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[Getting started]**[Ethernet Shield Getting started](https://arduino.cc/en/Guide/ArduinoEthernetShield)
- **[Eagle]**[Ethernet Shield Eagle Files](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip)
- **[PDF]**[W5100_ethernet_shield PCB](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield.pdf)
- **[PDF]**[W5100_ethernet_shield SCH](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield%20SCH.pdf)

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>