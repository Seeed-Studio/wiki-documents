---
title: Grove-Shield-for-Wio-Lite
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Shield-for-Wio-Lite/
slug: /ja/Grove-Shield-for-Wio-Lite
last_update:
  date: 05/15/2025
  author: gunengyu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-wiki.jpg)

Grove Shield for Wio Liteは、Seeed Studio Wio Liteシリーズ向けに作られています。現在、Wio Lite W600が利用可能であり、今後さらに多くのWioボードをリリースする予定です。また、このGrove ShieldはAdafruit Feather Boardsとも互換性があります。これにより、200以上のGroveモジュールをWio LiteおよびFeatherコミュニティに提供します。

このシールドは、Wio Liteのプロセッサピン（例えば、Wio Lite W600の場合はSAM D21）をヘッダーおよびGroveコネクタの形で分岐させることができます。4つのGroveデジタルコネクタ、4つのGroveアナログコネクタ、1つのGrove UARTポート、および1つのGrove I2Cポートがあります。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 仕様

| パラメータ             | 値/範囲        |
|-----------------------|----------------|
| 動作電圧             | 3.3 / 5V       |
| 動作温度             | -25℃ ～ +85℃ |
| アナログポート       | 4              |
| デジタルポート       | 4              |
| UARTポート           | 1              |
| I2Cポート            | 1              |
| サイズ               | 60mm x 52mm    |

## 対応ボード

Base Shieldは以下のボードでテストされ、完全に互換性があります：

- [Wio Lite - W600](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
- [Wio Lite - MG126](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- Adafruit SAMD21ベースのFeather Board

また、このボードは他のAdafruit Feather Boardsともフォームファクター互換性があります。このシールドを使用する際は、ピン番号を一致させてください。

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0.jpg)

- **アナログポート**: 4つのアナログポート、5つのアナログピンを含む

>A0ポートはA0およびA1ピンを含む  
>A1ポートはA1およびA2ピンを含む  
>A2ポートはA2およびA3ピンを含む  
>A3ポートはA3およびA4ピンを含む  

- **デジタルポート**: 4つのデジタルポート、5つのデジタルピンを含む

>D5ポートはD5およびD6ピンを含む  
>D6ポートはD6およびD9ピンを含む  
>D9ポートはD9およびD10ピンを含む  
>D10ポートはD10およびD11ピンを含む  

:::caution
隣接するポートには同じピンが含まれているため、例えばA0ポートとA1ポートの両方にA1ピンがある場合、隣接するポートを同時に使用する際にはピンの競合に注意してください。例えば、モジュールXがA0ポートのA1ピンを使用している場合、別のモジュールでA1ポートのA1ピンを使用することは避けてください。
:::

- **UARTポート**: 1つのUARTポート。

- **I2Cポート**: 1つのI2Cポート。

- **電源スイッチ**: Wio LiteボードをUSB Type-Cで電源供給する場合は5Vモードを選択し、リポバッテリーを使用する場合は3.3Vモードを選択してください。

### ピン配置

ピン配置については、このシールドの裏面にあるシルクスクリーンを参照してください。

![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/wiki-pinout.jpg)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/res/Grove%20Shield%20for%20Wio%20Lite_v1.0_190716.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove Shield for Wio Lite回路図ファイル](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/res/Grove%20Shield%20for%20Wio%20Lite_v1.0_190716.zip)

## 技術サポートと製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を提出してください。  
弊社製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>