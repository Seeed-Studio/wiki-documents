---
title: RS-232 To TTL コンバーター (MAX3232IDR)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/RS-232_To_TTL_Conveter-MAX3232IDR/
slug: /ja/RS-232_To_TTL_Conveter-MAX3232IDR
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/img/main.jpg)

ほとんどのMCUはTTLレベルを使用し、コンピュータのシリアルポートは一般的に232レベルを使用します。コンピュータとMCUを通信させたい場合、この**RS-232 To TTL コンバーター (MAX3232IDR)**が必要です。

このモジュールはMax3232をベースとしており、複数のボーレート通信をサポートし、理論的には最大230400bpsのボーレートで通信をサポートします。

<p style={{}}><a href="https://www.seeedstudio.com/RS-232-To-TTL-Conveter-MAX3232IDR-p-2851.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| RS-232 To TTL コンバーター (MAX3232IDR) | 初期リリース                                                                                               | 2018年9月      |

## 特徴

- 簡単に使用可能
- 安定性が高く、高速
- 高いコストパフォーマンス
- ±15-kV ESD保護
- 低消費電力
- 2つのドライバーと2つのレシーバー

## 仕様

|項目|値|
|---|---|
|供給電圧|3.3V / 5V|
|ドライバー入力電圧|0V ~ 5.5V|
|レシーバー入力電圧|-25V ~ +25V|
|供給電流（無負荷）|0.3mA|
|動作周囲温度|-40℃ ~ 85℃|
|保管温度範囲|-65℃ ~ 150℃|
|最大データレート|250 Kbit/s|
|サポートボーレート|300bps ~ 230400bps|
|サイズ|長さ: 35mm 幅: 30mm 高さ: 15mm| 
|重量|10.9g|
|パッケージサイズ|長さ: 150mm 幅: 100mm 高さ: 15mm|
|総重量|14g|

:::tip
高いボーレートを使用する場合、接続されるMCUがそれをサポートしているかどうかに注意してください。
:::

## 主な用途

- 携帯型機器
- パームトップPC

## 初めての使用方法

このモジュールは非常にシンプルで、対応するインターフェースを対応するデバイスに接続するだけで、シリアルポートツールを使用してデータを転送できます。TTLデバイスを接続する際には、モジュールのRXピンをデバイスのTXピンに接続し、逆にモジュールのTXピンをデバイスのRXピンに接続する必要があることに注意してください。

![](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/img/connect.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/RS232%20to%20TTL%20Converter%20(MAX3232IDR).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [RS-232 To TTL コンバーター (MAX3232IDR) Eagleファイル](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/RS232%20to%20TTL%20Converter%20(MAX3232IDR).zip)

- **[PDF]** [MAX3232 データシート](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/Max3232.pdf)

- **[PDF]** [PDF形式のWiki](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/RS-232_To_TTL_Conveter-MAX3232IDR.pdf)

## 技術サポートと製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>