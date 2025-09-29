---
description: Grove - 人体存在センサー (AK9753)
title: Grove - 人体存在センサー (AK9753)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Human_Presence_Sensor-AK9753
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - 人体存在センサー (AK9753)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020554
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/main.jpg)

Grove - 人体存在センサーは、人間の体やその他の赤外線物体の存在を検出するために使用できます。さらに、4つの量子型赤外線センサーと特性補償用の集積回路（IC）で構成されているため、赤外線物体の動きや赤外線物体が移動する相対位置を検出することができます。統合されたアナログ-デジタルコンバーターは16ビットのデータ出力を提供します。このモジュールは数フィートの距離での人体検出に適しています。

当社のウェブサイトでは多くの赤外線センサーを見つけることができますが、このセンサーは最も興味深いものの1つです。特定のアルゴリズムを使用することで、ジェスチャー認識を実現することも可能です。ぜひお楽しみください。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Human-Presence-Sensor-%28AK9753%29-p-3224.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 4つの赤外線要素を備えた量子型赤外線センサー
- I2Cバスへの16ビットデジタル出力
- 統合された温度センサー
- 割り込み機能
- 低消費電力

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|動作温度|-30℃ ~ 85℃|
|人体存在検出範囲| < 3m|
|赤外線出力解像度|16ビット|
|温度測定範囲|-10℃ ~ 60 ℃|
|インターフェース|I2C|
|I2Cアドレス|0x64(デフォルト)<br />0x65 / 0x66(設定可能)|

## 典型的な用途

- 人体検出
- 近接センサー
- 動作検出

## ハードウェア概要

### ピンアウト

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout1.png)

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout_back.jpg)

### 回路図

**電源**

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/schematic.jpg)

AK9763は低動作電圧（1.71~3.63V）で動作するため、安定した3.3Vを提供するために[XC6206P332MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)チップを使用しています。XC6206P33の入力範囲は1.8Vから6.0Vまでなので、このモジュールはArduinoで3.3Vと5Vの両方で使用することができます。

**双方向レベルシフター回路**

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/schematic1.jpg)

これは、I2Cバスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。このセンサーのI<sup>2</sup>Cバスは3.3Vを使用しますが、ArduinoのI<sup>2</sup>Cバスが5Vを使用する場合、この回路が必要になります。上記の回路図では、**Q1**と**Q2**はNチャネルMOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)で、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照することができます。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Human Presence Sensor (AK9753) |
|--------------|-------------|-----------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Human-Presence-Sensor-%28AK9753%29-p-3224.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - Human Presence Sensor (AK9753) を Grove-Base Shield の **I2C** ポートに接続します。

- **ステップ 2.** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ 3.** USBケーブルを使用して Seeeduino をPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/connect.jpg)

:::note
Grove Base Shield がない場合は、以下のようにこのモジュールを直接 Seeeduino に接続することもできます。
:::

| Seeeduino      |  Groveケーブル       | Grove - Human Presence Sensor (AK9753) |
|--------------- |--------------------|-----|
| GND            | 黒                | GND |
| 5V または 3.3V | 赤                | VCC |
| SDA            | 白                | SDA |
| SCL            | 黄色              | SCL |

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

- **ステップ 1.** [Grove_Human_Presence_Sensor](https://github.com/Seeed-Studio/Grove_Human_Presence_Sensor) ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEで **File --> Examples --> Grove Human Presence Sensor Library** をクリックすると、4つのデモを見つけることができます。

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/path1.jpg)

>**Example1-BasicReading**: この例では、4つのIRセンサーの生データ（uint16_t）を読み取り、これらの生データをシリアルに表示します。  
>**Example2-PlotDiff**: 生データを読み取り、シリアルプロッターにプロットします。  
>**Example3-DetectPresence**: IRオブジェクトの存在を検出します。  
>**Example4-PlotMovement**: 動きを検出し、シリアルプロッターにプロットします。

または、コンピュータ上のフォルダ **C:XXXX\Arduino\libraries\Grove_Human_Presence_Sensor-master\examples** にあるデモを見つけることができます。**XXXX** はArduino IDEをインストールした場所です。

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/path2.jpg)

- **ステップ 4.** デモを1つ選び、コードをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

次に何が起こるか確認してみましょう：

---

**Example1-BasicReading:**

Example1コードをアップロードしたら、Arduino IDEの **Serial Monitor** を開きます。**Tool-> Serial Monitor** をクリックするか、++ctrl+shift+m++ キーを同時に押します。ボーレートを **9600** に設定してください。  
以下の結果が表示されます：

```cpp
Grove - Human Presence Sensor example
1:[432], 2:[288], 3[248], 4:[384], temp[20.87], millis[109]
1:[424], 2:[296], 3[232], 4:[400], temp[20.87], millis[215]
1:[448], 2:[280], 3[224], 4:[360], temp[20.87], millis[319]
1:[424], 2:[280], 3[224], 4:[368], temp[20.87], millis[424]
1:[440], 2:[256], 3[248], 4:[376], temp[20.87], millis[530]
1:[440], 2:[280], 3[224], 4:[384], temp[20.75], millis[634]
1:[464], 2:[296], 3[216], 4:[392], temp[20.75], millis[740]
1:[416], 2:[288], 3[240], 4:[376], temp[20.75], millis[844]
1:[432], 2:[288], 3[216], 4:[392], temp[20.75], millis[950]
1:[440], 2:[296], 3[208], 4:[384], temp[20.75], millis[1055]
1:[424], 2:[248], 3[192], 4:[376], temp[20.75], millis[1160]
1:[432], 2:[264], 3[200], 4:[384], temp[20.75], millis[1265]
1:[440], 2:[248], 3[208], 4:[352], temp[20.75], millis[1371]
1:[400], 2:[256], 3[192], 4:[320], temp[20.75], millis[1475]
1:[368], 2:[208], 3[152], 4:[296], temp[20.75], millis[1581]
1:[608], 2:[384], 3[368], 4:[560], temp[20.75], millis[1686]
1:[1320], 2:[912], 3[736], 4:[960], temp[20.75], millis[1790]
1:[2168], 2:[1664], 3[1336], 4:[1752], temp[20.75], millis[1896]
1:[2544], 2:[2192], 3[2112], 4:[2376], temp[20.75], millis[2001]
1:[2536], 2:[2256], 3[2280], 4:[2520], temp[20.75], millis[2107]
1:[2144], 2:[2064], 3[2168], 4:[2328], temp[20.75], millis[2212]
```

`1:[]` は IR センサー1の測定データを意味し、`2:[]` は IR センサー2の測定データ、`3:[]` は IR センサー3の測定データ、`4:[]` は IR センサー4の測定データを意味します。これらのパラメータ値の範囲は -32767 から 32767 です。このパラメータは検出された赤外線の強度を反映します。赤外線の強度が強いほど、パラメータ値は大きくなります。

`temp[]` は統合温度センサーの測定データを意味し、範囲は -10℃ から +60℃ です。

`millis[109]` は、このプログラムが開始されてからのシステム時間を意味し、Arduino によって提供されます。

---

**Example2-PlotDiff**

例2のコードをアップロードした後、Arduino IDE の **Serial Plotter** を開きます。**Tool-> Serial Plotter** をクリックするか、++ctrl+shift+l++ キーを同時に押します。ボーレートを **9600** に設定してください。  
以下の結果が表示されます：

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/result1.png)

この例では、4つのIRセンサーのデータを読み取り、それを電流（pA）に変換し、**diff13** と **diff24** を Arduino IDE の Serial Plotter にプロットします。

>diff13 = IR1 - IR3  // <font color="blue">青い線</font>  
>diff24 = IR2 - IR4  // <font color="red">赤い線</font>

---

**Example3-DetectPresence**

例1のコードをアップロードした後、Arduino IDE の **Serial Monitor** を開きます。**Tool-> Serial Monitor** をクリックするか、++ctrl+shift+m++ キーを同時に押します。ボーレートを **9600** に設定してください。  
以下の結果が表示されます：

```cpp
Grove - Human Presence Sensor example
o o x o  millis: 16949
o x x o  millis: 17050
x x x x  millis: 17153
x x x x  millis: 17254
x x x x  millis: 17355
x x x x  millis: 17457
```

この例では、IRオブジェクトの存在を検出します。検出はセンサー値の微分に基づいています。微分がしきい値を超える場合、センサーの視野内にIRオブジェクトが入ったと判断します。各チャンネルの微分は以下の式で計算されます：

```
derivativeIR1 = ΔIR1 / Δt
```

Δt は時間間隔を表し、ΔIR1 はその時間間隔中のIRセンサー1の出力値の変化を表します。

出力では、**O** は検出なし、**X** は検出ありを意味します。出力の順序はIRセンサーの物理的な配置に対応しています。  
例：

```
o o x o
```

これは、3番目のIRセンサーがIRオブジェクトを検出し、他のセンサーは検出しなかったことを意味します（IRオブジェクトは上部から来た可能性があります）。IRセンサーの物理的な配置は <a href="#pin-out" target="_self">Pin Out</a> で確認できます。

---

**Example4-PlotMovement**

例4のコードをアップロードした後、Arduino IDE の **Serial Plotter** を開きます。**Tool-> Serial Plotter** をクリックするか、++ctrl+shift+l++ キーを同時に押します。ボーレートを **9600** に設定してください。  
以下の結果が表示されます：

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/result2.png)

検出は、IR1_IR3 または IR2_IR4 の差分値の微分に基づいています。IR1_IR3 または IR2_IR4 の微分は以下の式で計算されます：

```
derivativeIR1_IR3 = Δ(IR1-IR3)/Δt
```

図中の各曲線の意味は以下の通りです：（順番に）

- diff13  // <font color="blue">IR1-IR3、青い線</font>
- 方向1-3の動き  // <font color="red">derivativeIR1_IR3、赤い線</font>  
（パルス、正のパルスは1から3への動きを意味し、負のパルスは3から1への動きを意味します）
- diff24  // <font color="green">IR2-IR4、緑の線</font>
- 方向2-4の動き  // <font color="orange">derivativeIR1_IR3、オレンジの線</font>  
（パルス、正のパルスは2から4への動きを意味し、負のパルスは4から2への動きを意味します）

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/Grove%20-%20Human%20Presence%20Sensor%20(AK9753).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Human Presence Sensor (AK9753) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/Grove%20-%20Human%20Presence%20Sensor%20(AK9753).zip)

- **[Zip]** [Seeed Human Presence Sensor ライブラリ](https://github.com/Seeed-Studio/Grove_Human_Presence_Sensor/archive/master.zip)

- **[PDF]** [AK9753 データシート](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/AK9753.pdf)

- **[PDF]** [XC6206 データシート](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## 技術サポートと製品ディスカッション

 <br />
弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>