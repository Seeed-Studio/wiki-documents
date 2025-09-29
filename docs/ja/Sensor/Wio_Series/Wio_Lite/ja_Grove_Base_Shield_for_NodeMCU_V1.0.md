---
description: NodeMCU V1.0用 Grove Base Shield
title: NodeMCU V1.0用 Grove Base Shield
keywords:
- Wio_Series 
- Wio_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Base_Shield_for_NodeMCU_V1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: NodeMCU V1.0用 Grove Base Shield
category: その他
bzurl: https://www.seeedstudio.com/Grove-Base-BoosterPack-p-2177.html
oldwikiname:  NodeMCU V1.0用 Grove Base Shield
prodimagename: Base_Shield_for_NodeMCU1.jpg
surveyurl: https://www.research.net/r/Grove_Base_Shield_for_NodeMCU_V1
sku:  105020008
--- -->
![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_NodeMCU_V1.0/img/Base_Shield_for_NodeMCU1.jpg)

NodeMCU用Grove Base Shieldは、NodeMCUと呼ばれるESP8266 WIFI開発キットでGroveセンサーを使用するための拡張ボードです。NodeMCUファームウェア内でLuaスクリプト言語を使用してGroveセンサーを動作させることができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Base-BoosterPack-p-2177.html)

## 特徴

---

* すべてのGroveモジュールに対応

* 5つのデジタルコネクタ（D3-D8）

* 1つのアナログコネクタ（A0）

* 2つのI2Cソケット

* SPIソケットなし

* UART/D9-D10コネクタ

* 電源インジケータLED

## インターフェース機能

---
Base Shieldの目的は、任意のマイクロプロセッサの入力および出力ピンをGroveユニットに簡単に接続できるようにすることです。Base Boardの詳細な検討については、以下の図を参照してください。

![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_NodeMCU_V1.0/img/Base_Shield_for_NodeMCU2.jpg)

:::note

1. ピンのずれた配置について – D3ソケットはD3とD5を処理し、D5ソケットはD5とD6を処理し、次にD6とD7というように進みます。<br />
2. D4ソケットはありません。<br />
3. UARTソケットはD9、D10ポートとI2CソケットはD1、D2ポートと多重化できます。<br />
4. すべてのI2Cソケットを同時に使用しても競合しません。各I2Cデバイスには独自のアドレスがあります。<br />
5. SPIソケットはありません。GroveモジュールのどれもSPIソケットを使用していないためです。
:::

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_NodeMCU_V1.0/res/Grove_Base_Shield_for_NodeMCU_sch_pcb.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---
* [NodeMCU用Grove Base ShieldのEagleファイル](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_NodeMCU_V1.0/res/Grove_Base_Shield_for_NodeMCU_sch_pcb.rar)

* [NodeMCU用Grove Base Shield v1.0.pdf](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_NodeMCU_V1.0/res/Grove_Base_Shield_for_NodeMCU_pdf_v1.0.rar)

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