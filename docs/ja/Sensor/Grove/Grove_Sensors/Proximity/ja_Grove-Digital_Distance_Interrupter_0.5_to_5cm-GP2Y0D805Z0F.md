---
title: Grove - デジタル距離センサー 0.5～5cm(GP2Y0D805Z0F)
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F_P/
slug: /ja/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/main.JPG)

Grove - デジタル距離センサー 0.5～5cmは、GP2Y0D805Z0Fをベースとした赤外線距離測定モジュールです。このセンサーの通常の出力は1（HIGH）ですが、対象物がセンサーの測定範囲に入るとトリガーされ、出力が0（LOW）になります。同時に、オンボードLEDが点灯します。その名前が示す通り、測定範囲は0.5cmから5cmです。

Grove - デジタル距離センサー 0.5～5cmには2種類があります：Grove - デジタル距離センサー 0.5～5cm(GP2Y0D805Z0F)と[Grove - デジタル距離センサー 0.5～5cm(GP2Y0D805Z0F)(P)](https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29%28P%29-p-3085.html)。Pの文字がないバージョンでは、レンズとGroveインターフェースが同じ側にあります。一方、Pの文字があるバージョンでは、レンズとGroveインターフェースが異なる側にあります。

GP2Y0D805Z0Fは距離測定センサーで、PD（フォトダイオード）、IRED（赤外線発光ダイオード）、信号処理回路の統合ユニットで構成されています。三角測量法を採用しているため、対象物の反射率、環境温度、動作時間の影響を受けにくく、距離検出が安定しています。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29-p-3084.html" target="_blank"><img src=https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

## 特徴

- 簡単に使用可能
- 統合されたインジケーターLED
- デジタル出力

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3v/5v|
|トリガー範囲|0.5cm - 5cm |
|動作温度|-10℃ -- 60℃|

## 応用例

- 非接触スイッチ（衛生設備、照明制御など）
- ロボットクリーナー

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove - Digital Distance Interrupter 0.5 to 5cm |
|--------------|-------------|-----------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/thumnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29-p-3084.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - Digital Distance Interrupter 0.5 to 5cmをGrove-Base Shieldのポート**D2**に接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに接続します。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/connect.jpg)

:::note
 Grove Base Shieldがない場合は、以下のようにGrove-Mech keycapをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     | Grove - Digital Distance Interrupter 0.5 to 5cm|
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                   |
| 接続なし      | 白                   |
| D2            | 黄色                  |

#### ソフトウェア

- **ステップ 1.** Arduino IDEを開き、新しいファイルを作成して、以下のコードを新しいファイルにコピーします。

```cpp
/*
 *  
 * Copyright (c) 2018 Seeed Technology Co., Ltd.
 * Website    : www.seeed.cc
 * Author     : downey
 * Create Time: May 2018
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

#define SENSOR  2

void setup()
{
 Serial.begin(115200);
 pinMode(SENSOR,INPUT);
}


void loop()
{
 short val=0;
 val=digitalRead(SENSOR);
 Serial.print("val=");
 Serial.println((int)val);
 if(0==val)
 {
  Serial.println("センサーがトリガーされました!!");
 }
 delay(100);
}

```

- **ステップ 2.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

- **ステップ 3.** Arduino IDEの**シリアルモニター**を開くには、**ツール->シリアルモニター**をクリックします。または++ctrl+shift+m++キーを同時に押します。ボーレートを**115200**に変更してください。
すべてが正常に動作すれば、このモジュールの出力を確認できます。

結果は以下のようになります：

```
val=1
val=1
val=1
val=1
val=1
val=1
val=0
センサーがトリガーされました!!
val=0
センサーがトリガーされました!!
val=0
センサーがトリガーされました!!
val=1
val=1
val=1
val=1
```

通常、このセンサーの出力は1（High）です。センサーの測定範囲内に物体が入ると、トリガーされて0（LOW）を出力します。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Digital Distance Interrupter 0.5 to 5cm eagleファイル](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F.zip)
- **[PDF]** [GP2Y0D805Z0F データシート](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/GP2Y0D805Z0F.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>