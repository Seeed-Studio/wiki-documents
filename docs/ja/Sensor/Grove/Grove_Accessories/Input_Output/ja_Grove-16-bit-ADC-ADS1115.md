---
description: Grove - 4チャンネル16ビットADC(ADS1115)
title: Grove - 4チャンネル16ビットADC(ADS1115)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-16-bit-ADC-ADS1115
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - 4-Channel 16-bit ADC(ADS1115)
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 109020041
--- -->

![](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-45.png)

アナログ-デジタルコンバータを持たないマイクロコントローラや、より高精度なADCが必要な場合に対応するために、Grove - 4チャンネル16ビットADC(ADS1115)を提供します。このモジュールは、テキサス・インスツルメンツのADS1115に基づいた4チャンネルADCで、高精度・低消費電力の16ビットADCチップです。4つの単一エンド入力または2つの差動入力をサポートします。さらに、内部プログラマブルゲイン（最大x16）を備え、小信号に対応するプログラマブルデータレート範囲（8 SPSから860 SPS）を持っています。

このモジュールには、Groveポートも含まれており、内部的にチャンネル0とチャンネル1に接続されています。これにより、Groveエコシステムとの連携が容易になります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 広い電源範囲：2.0V ～ 5.5V、3.3Vまたは5Vシステムをサポート
- 16ビット高解像度ADC
- プログラマブルデータレート：8 SPSから860 SPS
- 内部プログラマブルゲイン：x16、内部低ドリフト電圧リファレンスとオシレータを搭載
- 内蔵PGAはゲイン調整可能で、ソフトウェアで制御可能
- 4つの単一エンド入力または2つの差動入力

## 仕様

| パラメータ | 値 |
|---|---|
| 入力電圧 | 3.3V / 5V |
| ADC解像度 | 16ビット |
| プログラマブルデータレート | 8 SPS - 860 SPS |
| チャンネル | 4チャンネル単一エンド入力または2チャンネル差動入力 |
| インターフェース | I2C、デフォルトアドレス：0x48 |

## ハードウェア概要

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-HW.png"/></div>

## 対応プラットフォーム

| Arduino | Raspberry | ArduPy |
|---|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png)|

:::caution
上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリ/デモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | ベースシールド | Grove - 16Bit ADC (ADS1115) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

>さらに、新しい[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とベースシールドの組み合わせに相当します。

#### ハードウェア接続

- **ステップ1.** Grove - 16 Bit ADC(ADS1115)をGrove - ベースシールドの**I2C**ポートに接続します。

- **ステップ2.** Grove - ベースシールドをSeeeduinoに接続します。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-connect.png"/></div>

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** Githubから[Seeed Arduino ADS1115](https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115)ライブラリをダウンロードします。

:::note
Arduino用ライブラリの[インストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)を参照してください。
:::

- **ステップ2.** Arduino IDEを再起動します。**Seeed_Arduino_ADS1115**の例を次のパスから開きます：**File** → **Examples** → **Grove - ADS1115** → **single_ended**。

`single_ended`の例コードは以下の通りです：

```Cpp
#include "ADS1115.h"

#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    ADS1115<SoftwareWire> ads(myWire);//IIC
#else
    #include <Wire.h>
    ADS1115<TwoWire> ads(Wire);//IIC
#endif

void setup(void)
{
    Serial.begin(115200);
    while(!ads.begin(0x48)){
        Serial.print("ads1115 初期化失敗!!!");
        delay(1000);
    }
    //ads.begin(0x49)
    //ads.begin(0x4A)
    //ads.begin(0x4B)

    ads.setOperateMode(ADS1115_OS_SINGLE);
    ads.setOperateStaus(ADS1115_MODE_SINGLE);

    ads.setPGAGain(ADS1115_PGA_6_144);    // 2/3x ゲイン +/- 6.144V  1ビット =  0.1875mV (デフォルト)
    // ads.setPGAGain(ADS1115_PGA_4_096); // 1x ゲイン   +/- 4.096V  1ビット =  0.125mV
    // ads.setPGAGain(ADS1115_PGA_2_048); // 2x ゲイン   +/- 2.048V  1ビット =  0.0625mV
    // ads.setPGAGain(ADS1115_PGA_1_024); // 4x ゲイン   +/- 1.024V  1ビット =  0.03125mV
    // ads.setPGAGain(ADS1115_PGA_0_512); // 8x ゲイン   +/- 0.512V  1ビット =  0.015625mV
    // ads.setPGAGain(ADS1115_PGA_0_256); // 16x ゲイン  +/- 0.256V  1ビット =  0.0078125mV

    ads.setSampleRate(ADS1115_DR_8); //8 SPS
    // ads.setSampleRate(ADS1115_DR_16); //16 SPS
    // ads.setSampleRate(ADS1115_DR_32); //32 SPS
    // ads.setSampleRate(ADS1115_DR_64); //64 SPS
    // ads.setSampleRate(ADS1115_DR_128); //128 SPS
    // ads.setSampleRate(ADS1115_DR_250); //250 SPS
    // ads.setSampleRate(ADS1115_DR_475); //475 SPS
    // ads.setSampleRate(ADS1115_DR_860); //860 SPS
}
void loop(void)
{
    int16_t adc0,adc1,adc2,adc3;
    adc0 = ads.getConversionResults(channel0); //P = AIN0, N = GND
    adc1 = ads.getConversionResults(channel1); //P = AIN1, N = GND
    adc2 = ads.getConversionResults(channel2); //P = AIN2, N = GND
    adc3 = ads.getConversionResults(channel3); //P = AIN3, N = GND
    Serial.print("AIN0: "); Serial.println(adc0);
    Serial.print("AIN1: "); Serial.println(adc1);
    Serial.print("AIN2: "); Serial.println(adc2);
    Serial.print("AIN3: "); Serial.println(adc3);
    Serial.println(" ");
    delay(1000);
}
```

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 4.** Arduino IDE の **シリアルモニタ** を開きます。**ツール -> シリアルモニタ** をクリックするか、++ctrl+shift+m++ キーを同時に押します。ボーレートを **115200** に設定してください。

- **ステップ 5.** 4 チャンネルの場合、結果は以下のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/result.gif"/></div>

:::note
この例では、2/3x のゲインが設定されているため、値に 0.1875mV を掛ける必要があります。例えば、10201 x 0.1875mV = 1.91V となります。
:::

### Raspberry Pi での使用

### ハードウェア

| Raspberry Pi | Grove Base Hat for RasPi | Grove - 16 Bit ADC(ADS1115)|
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](#)|

### ソフトウェア

Grove - 16-bit ADC(ADS1115) は Raspberry Pi 用の 4 チャンネル 16 ビット ADC (ADS1115) と同じ使用方法です。そのため、[**こちら**](https://wiki.seeedstudio.com/ja/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/#getting-started)のチュートリアルに従ってください。

### Wio Terminal での使用

**必要な材料**

| Wio Terminal | Grove - 16Bit ADC (ADS1115) | Grove - Rotary Angle Sensor|
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](#)|[今すぐ購入](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html)|

- **ステップ 1.** Grove - 16 Bit ADC(ADS1115) を Wio Terminal の **I2C** ポートに接続します。

- **ステップ 2.** Wio Terminal を USB ケーブルで PC に接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-wt.png"/></div>

#### ソフトウェア

- **ステップ 1.** [Seeed Arduino ADS1115](https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115) ライブラリを Github からダウンロードします。

:::note
以下の手順を進める前に、[Wio Terminal のスタートガイド](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)に従ってください。
:::

- **ステップ 2.** [**サンプルコード**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal-ADS1115) をこちらからダウンロードします。

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 4.** ロータリーセンサーを調整すると、対応する電圧が Wio Terminal の LCD 画面に表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/WT-ADS1115.gif"/></div>

### Wio Terminal (ArduPy) での使用

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Wio Terminal | Grove - 16 Bit ADC(ADS1115) |
|--------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](#)|

- **ステップ 2.** Grove - 16 Bit ADC(ADS1115) を Wio Terminal の **I2C** ポートに接続します。

- **ステップ 3.** USB Type-C ケーブルを使用して Wio Terminal を PC に接続します。

#### ソフトウェア

- **ステップ 1.** [**ArduPy スタートガイド**](https://wiki.seeedstudio.com/ja/ArduPy/) に従って、Wio Terminal 上で ArduPy 開発環境を構成します。

- **ステップ 2.** ADS1115 ライブラリを含む ArduPy ファームウェアが Wio Terminal にフラッシュされていることを確認してください。詳細については、[**こちら**](https://wiki.seeedstudio.com/ja/ArduPy/#ardupy-aip-cli-getting-started)を参照してください。

```sh
aip install Seeed-Studio/seeed-ardupy-ads1115
aip build
aip flash
```

- **ステップ 3.** 以下のコードをコピーして `ArduPy-ads1115.py` として保存します：

注意：その他の API については、[こちら](https://github.com/Seeed-Studio/seeed-ardupy-ads1115)を確認してください。

```python
from arduino import grove_ads1115
import time

ads = grove_ads1115()
ads.setPGAGain(0x0000)

while True:
    print ("チャンネル0の値は：", ads.channel0)
    print ("チャンネル1の値は：", ads.channel1)
    print ("チャンネル2の値は：", ads.channel2)
    print ("チャンネル3の値は：", ads.channel3)
    time.sleep(1)
```

- **ステップ 4.** `ArduPy-ads1115.py` をわかりやすい場所に保存します。以下のコマンドを実行し、`<YourPythonFilePath>` を `ArduPy-ads1115.py` の保存場所に置き換えてください。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"
```

- **ステップ 5.** 以下のようにターミナルに ADC 値が表示されます：

```sh
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
チャンネル0の値は： 17487.0
チャンネル1の値は： 3790.0
チャンネル2の値は： 3170.0
チャンネル3の値は： 3122.0
チャンネル0の値は： 17486.0
チャンネル1の値は： 3272.0
チャンネル2の値は： 3064.0
チャンネル3の値は： 3063.0
チャンネル0の値は： 17486.0
チャンネル1の値は： 3482.0
チャンネル2の値は： 3201.0
チャンネル3の値は： 3185.0
チャンネル0の値は： 17487.0
チャンネル1の値は： 17261.0
チャンネル2の値は： 5055.0
チャンネル3の値は： 4480.0
チャンネル0の値は： 11839.0
チャンネル1の値は： 3540.0
チャンネル2の値は： 1690.0
チャンネル3の値は： 1562.0
```

## 注意事項

:::caution
スクリュ端子の**A0**および**A1**でマルチチャンネルを使用する場合、GroveインターフェースにもA0およびA1が使用されているため、Groveインターフェースに何も接続しないようにしてください。バッテリーを扱う際には、これが危険になる可能性があります。
:::

1. 使用時、最大電圧は**5.5Vを超えない**ようにしてください。

2. マルチチャンネル取得を使用する場合、サンプリング周波数を250SPS以上に設定する必要があります。そうしないと、サンプリング周波数が遅すぎて、前のチャンネルが変換されないうちに次のチャンネルが開始され、動作が失敗する可能性があります。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - 16 Bit ADC(ADS1115 回路図ファイル)](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip)

- **[PDF]** [Texas Instruments ADS1115 データシート](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>