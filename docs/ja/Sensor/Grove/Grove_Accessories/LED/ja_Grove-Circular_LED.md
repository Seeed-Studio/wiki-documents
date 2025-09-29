---
description: Grove - Circular LED
title: Grove - Circular LED
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Circular_LED
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED.jpg" alt="pir" width={600} height="auto" /></p>

これはユニークなリングです。24個の制御可能なLEDを備えた華やかなデザインが特徴です。これを使えば、輝く魔法のリングを作るインスピレーションが湧くかもしれません！このモジュールの中央には1×1の正方形のくり抜きがあり、そこにGrove Encoderを配置して回転式のビジュアルエンコーダーとして使用することができます。

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)

## 特徴
---
* 円形デザイン
* 24個のLED、各チャンネルの駆動電流は約5.5mA
* 華やかなエフェクトを持つ制御可能なLED
* Groveインターフェース

## 回路図
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_schmatic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_schmatic.jpg" alt="pir" width={600} height="auto" /></p>

## 仕様
---
<table cellspacing="0" width="80%">
<tr>
<th scope="col">項目</th>
<th scope="col">最小</th>
<th scope="col">標準</th>
<th scope="col">最大</th>
<th scope="col">単位</th>
</tr>
<tr>
<th scope="row">電圧</th>
<td>4.5</td>
<td>5</td>
<td>5.5</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">電流</th>
<td>/</td>
<td>各LEDあたり5.5</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<th scope="row">寸法</th>
<td colspan="3">リング形状：直径4.5</td>
<td>cm</td>
</tr>
<tr>
<th scope="row">正味重量</th>
<td colspan="3">12</td>
<td>g</td>
</tr>
</table>

## インターフェース
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_Interface.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_Interface.jpg" alt="pir" width={600} height="auto" /></p>

## はじめに

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Circular LED |
|----------------|-------------|-----------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_S.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)|

> さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルはデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)から購入できます。

**2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)から購入できます。
:::

### ハードウェア接続

- **ステップ1.** Grove - Circular LEDをBase Shieldの**D6**ポートに接続します。
- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

:::note
Grove Base Shieldがない場合でも、以下のようにGrove - Circular LEDをSeeeduinoに直接接続することができます。
:::

| Seeeduino       | Grove - Circular LED |
|-----------------|-----------------------|
| 5V             | 赤                   |
| GND            | 黒                   |
| D7             | 白                   |
| D6             | 黄                   |

### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** [Grove - LED Bar Library](https://github.com/Seeed-Studio/Grove_LED_Bar)をGithubからダウンロードします。
- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。
- **ステップ3.** **Arduino IDE -> File -> Examples -> Grove_LED_Bar -> BasicControl**を開きます。
- **ステップ4.** 以下のように**define MY9221_LED_NUM 24**をアンコメントし、**#define MY9221_LED_NUM 10**をコメントアウトします。

```
//#define MY9221_LED_NUM 10
#define MY9221_LED_NUM 24
```

- **ステップ5.** サンプルコードをArduinoにアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。
- **ステップ6.** LEDがC、23、ABを繰り返し点灯するのが確認できます。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - Circular LEDをBase ShieldのD5ポートに接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[Arduino用Codecraftガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/cc_Circular_LED.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/cc_Circular_LED.png" alt="pir" width={600} height="auto" /></p>

プログラムを Arduino/Seeeduino にアップロードしてください。

:::success
    コードのアップロードが完了すると、LEDが円形に点灯する様子が確認できます。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove-circular_LED_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## ソース
---
- [CircularLED ライブラリ](https://github.com/Seeed-Studio/Grove_LED_Bar)

- [Grove Circular LED 回路図 PDF ファイル](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Circular_LED_v0.9b.pdf)

- [Grove Circular LED Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove-circular_LED_eagle_files.zip)

- [Codecraft CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove_Circular_LED_CDC_File.zip)

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>