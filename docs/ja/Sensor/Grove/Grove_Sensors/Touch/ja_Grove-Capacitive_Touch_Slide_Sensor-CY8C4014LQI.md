---
description: Grove - 静電容量式タッチスライドセンサー(CY8C4014LQI)
title: Grove - 静電容量式タッチスライドセンサー(CY8C4014LQI)
category: センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - 静電容量式タッチスライドセンサー(CY8C4014LQI)
category: センサー
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020552
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/main.jpg)

Grove - 静電容量式タッチスライドセンサー(CY8C4014LQI)は多機能タッチセンサーです。2つのボタンに触れるか、5セグメントのスライダーをスライドすることができます。各タッチパッドには対応するLEDがあり、タッチ状態を示します。また、デフォルトで高い割り込みピンを提供しており、ボタンに触れるかスライダーをスライドすると低状態になります。

このモジュールをゲームコントローラーとして使用したり、その他のタッチアプリケーションに適用することで、多くの楽しみを得ることができます。

:::note
製品にはアクリルケースが付属しており、ケースを外して使用しないことを強くお勧めします。裏面のトレースやパッドに指が触れると誤作動する可能性があります。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Touch-Slide-Sensor%28CY8C4014LQI%29-p-3183.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 静電容量式タッチスライドセンサー(CY8C4014LQI) | 初期リリース                                                                                               | 2018年7月      |

## 特徴

- 32ビットMCUサブシステム
- 16MHz ARM Cortex-M0 CPU
- 最大16KBのフラッシュメモリ（リードアクセラレータ付き）
- 最大2KBのSRAM
- センサー範囲5pFから45pFにわたる自動ハードウェア調整（SmartSense™）
- I2Cインターフェース

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|動作周囲温度|-40°C ～ +85°C|
|動作接合温度|-40°C ～ +100°C|
|インターフェース|I2C|
|デフォルトI2Cアドレス|0x08|
|サイズ|長さ: 60mm 幅: 20mm 高さ: 6mm|
|重量|8g|
|パッケージサイズ|長さ: 140mm 幅: 90mm 高さ: 10mm|
|総重量|15g|

## 応用例

- ゲームコントローラー
- タッチアプリケーション

## ハードウェア概要

### ピンアウト

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/pin_out_back.jpg)

### 回路図

**電源**

このモジュールは**CY8C4014LQI**をベースにしており、このチップの入力電圧範囲は1.71V～5.5Vです。そのため、Arduinoの3.3Vおよび5Vピンの両方を使用してこのモジュールに電力を供給することができます。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Capacitive Touch Slide Sensor |
|--------------|-------------|-----------------|
|![画像をここに入力](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像をここに入力](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像をここに入力](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Touch-Slide-Sensor%28CY8C4014LQI%29-p-3183.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールを購入すると、Groveケーブルが付属しています。万が一Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - Capacitive Touch Slide SensorをGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/connect.jpg)

:::note
Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino      |  Groveケーブル       | Grove - Capacitive Touch Slide Sensor |
|--------------- |--------------------|-----|
| GND            | 黒                 | GND |
| 5Vまたは3.3V   | 赤                 | VCC |
| SDA            | 白                 | SDA |
| SCL            | 黄色               | SCL |

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** Githubから[Grove_touch_sensor_CY8C40XX](https://github.com/Seeed-Studio/Grove_touch_sensor_CY8C40XX)ライブラリをダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。以下の3つの方法で例を開くことができます：
    1. Arduino IDEで直接開く：**File --> Examples --> Grove_touch_sensor_CY8C40XX --> basic_demo**のパスをたどります。
    ![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/path.png)

    2. コンピュータで開く：**XXXX\Arduino\libraries\Grove_touch_sensor_CY8C40XX-master\examples\basic_demo**フォルダ内の**basic_demo.ino**をクリックします。**XXXX**はArduino IDEをインストールした場所です。
    ![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/path_1.jpg)

    3. または、コードブロックの右上隅にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

```cpp

#include "Seeed_CY8C401XX.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

CY8C sensor;
void setup()
{
    SERIAL.begin(115200);
    
    sensor.init();
}


void loop()
{
    u8 value=0;
    sensor.get_touch_button_value(&value);
    SERIAL.print("ボタンの値は");
    SERIAL.println(value,HEX);
    if(value&0x01)
        SERIAL.println("ボタン1が押されています");
    if(value&0x2)
        SERIAL.println("ボタン2が押されています");

    sensor.get_touch_slider_value(&value);
    SERIAL.print("スライダーの値は");
    SERIAL.println(value,HEX);
    SERIAL.println(" ");


    delay(1000);
}
```

:::caution
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDEの**シリアルモニター**を開きます。**Tool-> Serial Monitor**をクリックするか、++ctrl+shift+m++キーを同時に押します。ボーレートを**115200**に設定します。

:::tip
すべてが正常に動作していれば、シリアルモニターを開いてスライドタッチセンサーに触れると、LEDが点灯し、シリアルモニターに以下のように表示されます：
:::

```cpp
ボタンの値は1
ボタン1が押されています
スライダーの値は0
 
ボタンの値は3
ボタン1が押されています
ボタン2が押されています
スライダーの値は9
```

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/result.gif)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/Grove-Capacitive_Touch_Slider_Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - 静電容量式タッチスライドセンサー (CY8C4014LQI) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/Grove-Capacitive_Touch_Slider_Sensor.zip)

- **[Zip]** [Grove タッチセンサー CY8C40XX ライブラリ](https://github.com/Seeed-Studio/Grove_touch_sensor_CY8C40XX/archive/master.zip)

- **[PDF]** [CY8C4014LQI のデータシート](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/CY8C4014LQI_Datasheet.pdf)

## 技術サポートと製品ディスカッション

<br />弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>