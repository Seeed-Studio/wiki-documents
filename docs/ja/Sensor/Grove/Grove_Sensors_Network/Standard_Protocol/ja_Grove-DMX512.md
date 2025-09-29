---
title: Grove - DMX512
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Sensor_communication/
slug: /ja/Grove-DMX512
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-DMX512/img/DMX512_01.jpg)

Grove – DMX512は、GroveインターフェースからDMX512インターフェース（業界標準のEIA-485インターフェース）へのアダプターです。このモジュールはSN75176チップを基盤としており、伝送ラインをバランスさせ、ANSI標準EIA-485インターフェースに準拠しています。これにより、Arduinoでステージ照明やDMX512コンソールを簡単に制御できるようになります。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-DMX512-p-1447.html)

## 特徴

---

* Groveインターフェースと標準EIA-485インターフェース

* 簡単に使用可能

* 高い実用性

## 使用方法

---
ArduinoはGrove - DMX512モジュールを使用してDMX512デバイスを簡単に制御できます。LEDクリスタルマジックボールライトを例に取ると、具体的な操作は以下の通りです：

* Grove - DMX512のGroveインターフェースをGrove - Base ShieldのD3ポートに接続し、Grove - Base ShieldをArduinoに接続します。

* Grove - DMX512のDMX512インターフェースをDMXケーブルを使用してLEDクリスタルマジックボールライトのDMXINインターフェースに接続します。そして、LEDクリスタルマジックボールライトに電源を供給します。

* LEDクリスタルマジックボールライトをDMX512制御モードに設定します。この時、コントロールパネルには「A001」と表示されます。

![](https://files.seeedstudio.com/wiki/Grove-DMX512/img/DMX512_Usage.jpg)

* [DmxSimpleライブラリ](https://files.seeedstudio.com/wiki/Grove-DMX512/res/DmxSimple.zip)をダウンロードし、Arduino IDEのライブラリフォルダに解凍します。パスは以下の通りです：..\arduino-1.0.1\libraries。

* パス：File -> Example -> DmxSimple -> Fadup1からコードを直接開きます。

* 興味深いシーンを見ることができます。コードを変更して楽しんでみてください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-DMX512/res/Grove-DMX512_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---
* [SN75176データシート](https://files.seeedstudio.com/wiki/Grove-DMX512/res/Sn75176a.pdf)

* [Grove - DMX512 Eagleファイル](https://files.seeedstudio.com/wiki/Grove-DMX512/res/Grove-DMX512_Eagle_File.zip)

* [DmxSimpleライブラリ](https://files.seeedstudio.com/wiki/Grove-DMX512/res/DmxSimple.zip)

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