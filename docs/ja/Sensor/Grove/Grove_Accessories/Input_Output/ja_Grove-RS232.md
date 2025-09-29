---
description: Grove - RS232
title: Grove - RS232
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-RS232
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - RS232
category: Grove
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 103020192
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-RS232/img/mian.jpg)

ほとんどのMCUはTTLレベルを使用し、コンピュータのシリアルポートは一般的に232レベルを使用します。コンピュータとMCUを通信させるには、この**Grove - 232**が必要です。Groveインターフェースが統合されているため、Arduinoとコンピュータ間の通信が非常に便利になります。

このモジュールはMax3232をベースとしており、複数のボーレート通信をサポートし、理論的には230400bpsのボーレートまで通信をサポートします。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-RS232-P-2852.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RS232 | 初期リリース                                                                                               | 2018年10月      |

## 特徴

- 簡単に使用可能
- 安定性が高く、高速
- 高コストパフォーマンス
- ±15-kV ESD保護
- 低消費電力
- 2つのドライバと2つのレシーバ

## 仕様

|項目|値|
|---|---|
|供給電圧|3.3V / 5V|
|ドライバ入力電圧|0V ~ 5.5V|
|レシーバ入力電圧|-25V ~ +25V|
|供給電流（無負荷時）|0.3mA|
|動作周囲温度|-40℃ ~ 85℃|
|保管温度範囲|-65℃ ~ 150℃|
|最大データレート|250 Kbit/s|
|サポートボーレート|300bps ~ 230400bps|
|長さ|46mm|
|幅|42mm|
|高さ|16.5mm|
|サイズ|L: 40mm W: 40mm H: 15mm|
|重量|13.3g|
|パッケージサイズ|L: 140mm W: 90mm H: 15mm|
|総重量|20g|

## 主な用途

- ハンドヘルド機器
- パームトップPC

## ハードウェア概要

### ピン配置

![](https://files.seeedstudio.com/wiki/Grove-RS232/img/pin_out/pin_out.jpg)

## はじめに

このモジュールはシンプルで、対応するインターフェースを対応するデバイスに接続するだけで、シリアルポートツールを使用してデータを転送できます。TTLデバイスを接続する際には、モジュールのRXピンをデバイスのTXピンに接続し、逆にモジュールのTXピンをデバイスのRXピンに接続する必要があることに注意してください。

![](https://files.seeedstudio.com/wiki/Grove-RS232/img/connect.jpg)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RS232/res/Grove-RS232.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove-RS232 Eagleファイル](https://files.seeedstudio.com/wiki/Grove-RS232/res/Grove-RS232.zip)

- **[PDF]** [MAX3232データシート](https://files.seeedstudio.com/wiki/Grove-RS232/res/Max3232.pdf)

- **[PDF]** [PDF形式のWiki](https://github.com/SeeedDocument/Grove-RS232/tree/master/res/Grove-RS232.pdf)

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