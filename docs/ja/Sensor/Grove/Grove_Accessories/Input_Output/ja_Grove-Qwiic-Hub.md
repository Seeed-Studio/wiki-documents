---
title: Grove - Qwiic Hub
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Qwiic-Hub/
slug: /ja/Grove-Qwiic-Hub
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/products/103020292/img/103020292wiki.png)

Grove - Qwiic Hubは、GroveコントローラーでQwiic（STEMMA QT）モジュールを使用するか、Qwiic（STEMMA QT）コントローラーでGroveモジュールを使用することを可能にします。Grove - Qwiic Hubを使用すると、1つのI2Cバスで複数のQwiic（STEMMA QT）およびGroveモジュールをカスケード接続することができます。また、3.3V/5Vの供給電圧を可能にする内蔵レベルシフト機能を備えています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Qwiic-Hub-p-4531.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## 特徴

- GroveインターフェースとQwiic（STEMMA QT）インターフェースの相互接続コネクター
- 1つのI2Cバスで複数のQwiic（STEMMA QT）およびGroveモジュールをカスケード接続可能
- 3.3V/5Vの供給電圧に対応

## 仕様

|項目|値|
|---|---|
|インターフェース|2 JST SH I2Cインターフェース、Groveインターフェース|
|電源供給|3.3V, 5V|
|外観サイズ|25.4x17.8mm|

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## アプリケーションアイデア

### シナリオ 1

![](https://files.seeedstudio.com/products/103020292/img/Scenario1.png)

このシナリオでは、[Seeeduino Lotus cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)のようなGroveボードがSparkfun Qwiicインターフェースを持つ複数のI2Cデバイスを制御します。

### シナリオ 2

![](https://files.seeedstudio.com/products/103020292/img/Scenario2.png)

このシナリオでは、[Seeeduino Lotus cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)のようなGroveボードがAdafruit STEMMA QTインターフェースを持つ複数のI2Cデバイスを制御します。

### シナリオ 3

![](https://files.seeedstudio.com/products/103020292/img/Scenario3.png)

このシナリオでは、[Seeeduino Lotus cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)のようなGroveボードがSparkfun QwiicインターフェースとAdafruit STEMMA QTインターフェースの両方を持つ複数のI2Cデバイスを制御します。

### シナリオ 4

![](https://files.seeedstudio.com/products/103020292/img/Scenario4.png)

このシナリオでは、Sparkfun Qwiicボードが多数の[I2C Grove製品](https://www.seeedstudio.com/catalogsearch/result/?q=Grove+I2C)と接続します。

### シナリオ 5

![](https://files.seeedstudio.com/products/103020292/img/Scenario5.png)

このシナリオでは、Adafruit STEMMA QTボードが多数の[I2C Grove製品](https://www.seeedstudio.com/catalogsearch/result/?q=Grove+I2C)と接続します。

## 回路図オンラインビューアー

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103020292/doc/Grove-Qwiic_Hub_Hardware.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

**[PDF]** [ハードウェア回路図](https://files.seeedstudio.com/products/103020292/doc/Grove-Qwiic-Hub_v1.0_SCH_190808.pdf)

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