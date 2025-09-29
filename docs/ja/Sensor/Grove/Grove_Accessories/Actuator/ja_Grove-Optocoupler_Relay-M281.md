---
title: Grove - オプトカプラリレー (M281)
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Optocoupler_Relay-M281/
slug: /ja/Grove-Optocoupler_Relay-M281
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/preview.png)

このモジュールは双方向のSPSD（単極単投）、通常開のソリッドステートリレー（SSR）です。Grove オプトカプラリレー (M281) は非常に低いオン抵抗を提供し、高い負荷電流定格を可能にします。

当ウェブサイトに掲載されている他のTRIAC SSRとは異なり、このリレーはMOSFETに基づいているため、AC負荷とDC負荷の両方を扱うことができます。DC負荷で使用するSSRが必要な場合、これが最適です！

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-オプトカプラリレー (M281) | 初版                                                                                               | 2018年12月      |

## 特徴

- 低オン抵抗（0.5Ω MAX.）
- 1Aの連続負荷電流
- 60Vの負荷電圧定格
- 低入力制御電流（3mA TYP.）
- 高い入力-出力間絶縁（1.5kV MIN.）

## 応用例

- 自動試験装置
- メーター読み取りシステム
- 医療機器
- バッテリーモニタリング
- マルチプレクサ

## 仕様

  |パラメータ|値|
  |---|---|
  |供給電圧|3.3V / 5V|
  |動作温度| -40 – 85℃|
  |保存温度|- 55°C – 125°C|
  |遮断電圧|60 V|
  |連続負荷電流|1A|
  |漏れ電流|0.2 uA(TYP.)<br />1 uA(Max.)|
  |オン抵抗|0.5 Ω(TYP.)<br />0.7 Ω(Max.)|
  |絶縁抵抗|100 GΩ|
  |ターンオン時間|1.4 ms(TYP.)<br />5 ms(Max.)|
  |ターンオフ時間|0.2 ms(TYP.)<br />2 ms(Max.)|
  |インターフェース|デジタル|
  |サイズ|L: 40mm W: 20mm H: 13mm|
  |重量|10.6g|
  |パッケージサイズ|L: 135mm W: 85mm H: 13mm|
  |総重量|11g|
  <div align="center"><b>表 1.</b><i>一般仕様</i></div>

## ハードウェア概要

### ピン配置

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" /></a></p>
    <figcaption><b>図 1</b>. <i>ピン配置</i></figcaption>
  </figure>
</div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Optocoupler Relay (M281)|赤色LED|
|--------------|-------------|-----------------|-----|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/led.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html)|[今すぐ購入](https://www.seeedstudio.com/3mm-LED-Red-25-PCs-p-1588.html)|

>さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

:::note
    **1** USBケーブルを慎重に差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本の線しかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

**ハードウェア接続**

- **ステップ1.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ2.** Grove - Optocoupler Relay (M281)をBase Shieldの**D5**ポートに接続します。

- **ステップ3.** LEDとGrove - Optocoupler Relay (M281)をGrove - Base Shieldの**3.3V**および**GND**ピンに接続します。（以下の図を参照してください）

- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" /></a></p>
    <figcaption><b>図2</b>. <i>ピン配置。必ず3.3Vピンに接続してください。5Vに接続するとこのLEDが損傷します。</i></figcaption>
  </figure>
</div>

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を強くお勧めします。
:::

- **ステップ1.** 以下のコードをArduino IDEの新しいスケッチにコピーします。

```cpp
const int Pinout = 5;      

void setup() {
 pinMode(Pinout, OUTPUT);
 Serial.begin(9600);
}

void loop() {

  digitalWrite(Pinout, HIGH); 
  delay(500);
  digitalWrite(Pinout, LOW); 
  delay(500);
}
```

- **ステップ2.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::tip
  すべてが正常に動作すれば、LEDが点滅するのが確認できます。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - Optocoupler Relay (M281) 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip)
- **[PDF]** [M281 データシート](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/M281_Datasheet.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>