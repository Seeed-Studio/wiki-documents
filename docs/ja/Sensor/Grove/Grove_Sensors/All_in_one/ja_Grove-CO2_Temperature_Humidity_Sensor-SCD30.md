---
description: Grove - CO2 & 温度 & 湿度センサー (SCD30)
title: Grove - CO2 & 温度 & 湿度センサー (SCD30)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-CO2_Temperature_Humidity_Sensor-SCD30
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/main.jpg" /></div>

Grove - CO2 & 温度 & 湿度センサー (SCD30) は、高精度の二酸化炭素センサーであり、Sensirion SCD30 に基づいています。このセンサーの測定範囲は 0 ppm から 40,000 ppm で、測定精度は 400ppm から 10,000ppm の間で ±(30 ppm + 3%) に達します。

このセンサーは、二酸化炭素検出のための非分散型赤外線 (NDIR) 測定技術に加え、Sensirion の湿度および温度センサーを同じセンサーモジュールに統合しています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>


## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210x シリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのために、より高性能で堅牢な S2103 ワイヤレス CO2、温度、湿度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td align="center"><font size="{4}"><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2103 空気温度 &amp; 湿度 &amp; CO2</strong></a></td>
    </tr>
  </tbody></table>

## バージョン

| 製品バージョン  | 変更内容                                                                                               | リリース日       |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - CO2 & Temperature & Humidity Sensor (SCD30) V1.0 | 初版                                                                                               | 2018年12月      |

## 応用アイデア

- 空気清浄機
- 環境モニタリング
- 植物環境モニタリング

## 特徴

- NDIR CO2センサー技術
- 温度および湿度センサーを統合
- 最高のコストパフォーマンス
- 優れた安定性を実現するデュアルチャンネル検出
- デジタルインターフェース I2C
- 低消費電力
- 超長寿命センサー（15年）

## 仕様

|パラメータ|値|
|---|---|
|供給電圧|3.3V / 5V|
|動作温度| 0 – 50℃|
|保管温度|- 40°C – 70°C|
|湿度動作条件|0 – 95 %RH|
|センサー寿命|15年|
|インターフェース|I2C|
|I2Cアドレス|0x61|
|サイズ|長さ: 61mm 幅: 42mm 高さ: 19mm|
|重量|19.7g|
|パッケージサイズ|長さ: 110mm 幅: 70mm 高さ: 40mm|
|総重量| 27g|

<div align="center"><b>表1.</b><i>一般仕様</i></div>

|パラメータ|条件|値|
|---|---|----|
|CO2測定範囲||0 – 40’000 ppm|
|精度| 400ppm – 10'000ppm| ± (30 ppm + 3%)|
|再現性|400ppm – 10'000ppm|10ppm|
|応答時間|τ63%|20秒|

<div align="center"><b>表2.</b><i>CO2センサー仕様</i></div>

|パラメータ|条件|値|
|---|---|----|
|湿度測定範囲||0 %RH – 100 %RH|
|精度| 0 – 50°C, 0 – 100%RH| ±2 %RH|
|再現性||0.1 %RH|
|応答時間|τ63%|8秒|

<div align="center"><b>表3.</b><i>湿度センサー仕様</i></div>

|パラメータ|条件|値|
|---|---|----|
|温度測定範囲||-40°C – 120°C|
|精度| 0 – 50°C| ±0.5°C|
|再現性||0.1°C|
|応答時間|τ63%|> 2秒|

<div align="center"><b>表4.</b><i>温度センサー仕様</i></div>

|パラメータ|条件|値|
|---|---|----|
|平均電流|更新間隔 2秒|19 mA|
|最大電流| 測定中| 75 mA|
|エネルギー消費|1回の測定|120 mJ|

<div align="center"><b>表5.</b><i>電気仕様</i></div>

## ハードウェア概要

<div align="center">
<figure>
  <p style={{textAlign: 'center' }}><a href="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" /></a></p>
</figure>
</div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove-CO2 & T&H SCD30 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

>さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

:::note
  **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)から購入できます。

  **2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)から購入できます。
:::

**ハードウェア接続**

- **ステップ1.** Grove - CO2 & 温度・湿度センサー（SCD30）をBase Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/connect.png" /></div>

#### ソフトウェア

:::caution
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** [Seeed SCD30ライブラリ](https://github.com/Seeed-Studio/Seeed_SCD30)をGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。以下の3つの方法のいずれかでサンプルを開くことができます：
    a. Arduino IDEで直接開く：**File --> Examples --> Grove_scd30_co2_sensor --> SCD30_Example**のパスをたどります。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c1.jpg" /></div>

    b. コンピュータ上で開く：**XXXX\Arduino\libraries\Seeed_SCD30-master\examples\SCD30_Example**フォルダ内の**SCD30_Example.ino**をクリックします（**XXXX**はArduino IDEをインストールした場所です）。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c3.jpg" /></div>

    c. または、コードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

```cpp
#include "SCD30.h"

#if defined(ARDUINO_ARCH_AVR)
 #pragma message("Defined architecture for ARDUINO_ARCH_AVR.")
 #define SERIAL Serial
#elif defined(ARDUINO_ARCH_SAM)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAM.")
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_SAMD)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAMD.") 
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_STM32F4)
 #pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")
 #define SERIAL SerialUSB
#else
 #pragma message("Not found any architecture.")
 #define SERIAL Serial
#endif



void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    SERIAL.println("SCD30 Raw Data");
    scd30.initialize();
}

void loop()
{
    float result[3] = {0};
    
    if(scd30.isAvailable())
    {
        scd30.getCarbonDioxideConcentration(result);
        SERIAL.print("Carbon Dioxide Concentration is: ");
        SERIAL.print(result[0]);
        SERIAL.println(" ppm");
        SERIAL.println(" ");
        SERIAL.print("Temperature = ");
        SERIAL.print(result[1]);
        SERIAL.println(" ℃");
        SERIAL.println(" ");
        SERIAL.print("Humidity = ");
        SERIAL.print(result[2]);
        SERIAL.println(" %");
        SERIAL.println(" ");
        SERIAL.println(" ");
        SERIAL.println(" ");
    }
    
    delay(2000);
}

```

:::caution
        ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::tip
  すべてが正常に動作すれば、Grove - CO2 & 温度・湿度センサー（SCD30）の生データをシリアルモニタから読み取ることができます。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c2.jpg" /></div>

## キャリブレーションと設置

実際のシナリオでより正確な結果を得るためには、以下の2点に注意する必要があります：

- 1. 正しい設置  
- 2. キャリブレーション

### 設置

正しい設置方法については、[SCD30 Design-In Guidelines](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf) を参照してください。

### キャリブレーション

初めてセンサーを使用する際には、ASC（自動校正）アルゴリズムが初期パラメータセットを見つけるために、最低7日間の期間が必要です。この期間中、センサーは毎日少なくとも1時間、新鮮な空気にさらされる必要があります。また、この期間中にセンサーの電源が切断されると、キャリブレーションパラメータの取得手順が中断され、最初からやり直す必要があります。成功した場合、計算されたパラメータはSCD30の不揮発性メモリに保存され、再起動後も以前に取得したASCパラメータが保持されます。キャリブレーションの詳細については、[Interface Description Sensirion SCD30 Sensor Module](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf) を参照してください。

SCD30ライブラリフォルダには2つのサンプルコードが含まれており、`SCD30_auto_calibration.ino` を実行してキャリブレーションを開始できます。

### Wio Terminal（ArduPy）での使用

#### ハードウェア

- **ステップ 1.** 以下のアイテムを準備してください：

| Wio Terminal | Grove-CO2 & T&H SCD30 |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

- **ステップ 2.** Grove-CO2 & T&H SCD30をWio Terminalの**I2C** Groveポートに接続します。

- **ステップ 3.** USB Type-Cケーブルを使用してWio TerminalをPCに接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/WT-SCD30.png"/></div>

#### ソフトウェア

- **ステップ 1.** [**ArduPy Getting Started**](https://wiki.seeedstudio.com/ja/ArduPy/) に従って、Wio TerminalでArduPy開発環境を構成します。

- **ステップ 2.** ArduPyファームウェアがWio Terminalにフラッシュされていることを確認してください。詳細については[こちら](https://wiki.seeedstudio.com/ja/ArduPy/#ardupy-aip-cli-getting-started)を参照してください。

```sh
aip install Seeed-Studio/seeed-ardupy-scd30
aip build
aip flash
```

- **ステップ 3.** 以下のコードをコピーして、`ArduPy-scd30.py`として保存します：

```python
from arduino import grove_scd30
from machine import LCD
from machine import Sprite
import time

scd30 = grove_scd30()
lcd = LCD()
spr = Sprite(lcd) # バッファを作成

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("SCD30 Reading", 90, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- CO2 Level: ", 20, 50)
        spr.drawString("- Temperature: ", 20, 80)
        spr.drawString("- Humidity: ", 20, 110)

        if(scd30.isAvailable()):
            data = scd30.getCarbonDioxideConcentration()
            spr.drawFloat(data[0], 2,220,50) # CO2
            spr.drawFloat(data[1], 2, 220,80)
            spr.drawFloat(data[2], 2, 220,110)
            spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("\nCarbon Dioxide Concentration:", data[0])
        print("Temperature:", data[1])
        print("Humidity:", data[2])

if __name__ == "__main__":
    main()
```

- **ステップ 4.** `ArduPy-scd30.py`をわかりやすい場所に保存します。以下のコマンドを実行し、`<YourPythonFilePath>`を`ArduPy-scd30.py`の保存場所に置き換えます。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"
```

- **ステップ 5.** 以下のように3つのデータ値がターミナルに表示され、Wio TerminalのLCD画面にも表示されます。

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy
Carbon Dioxide Concentration: 2360.639
Temperature: 29.18707
Humidity: 66.88538

Carbon Dioxide Concentration: 2360.639
Temperature: 29.18707
Humidity: 66.88538

Carbon Dioxide Concentration: 2500.573
Temperature: 29.17372
Humidity: 66.61072
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/Ardupy-SCD30.png"/></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - CO2 & 温度 & 湿度センサー (SCD30) 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip)
- **[PDF]** [SCD30 デザインインガイドライン](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf)
- **[PDF]** [SCD30 データシート](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Datasheet.pdf)
- **[PDF]** [SCD30 インターフェース説明](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>