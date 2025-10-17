---
description: Grove - デジタル光センサー
title: Grove - デジタル光センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Digital_Light_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" /></div>

このモジュールは、光強度をデジタル信号に変換するためのI2C光-デジタルコンバーターTSL2561をベースにしています。従来のアナログ光センサー（例：[Grove - Light Sensor](https://www.seeedstudio.com/depot/grove-light-sensorp-p-1253.html?cPath=144_148)）とは異なり、このデジタルモジュールは赤外線と全スペクトルの2つの光感知ダイオードを備えているため、選択可能な光スペクトル範囲を特徴としています。

3つの検出モードを切り替えて測定を行うことができます。それらは赤外線モード、全スペクトルモード、人間の目に見えるモードです。人間の目に見えるモードで動作している場合、このセンサーは目で感じるのに近い測定値を提供します。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## バージョン

| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - Digital Light Sensor V1.1 | 初期版                                                                                                                                                                                    | 2015年10月      |

## 産業用センサーへのアップグレード可能性

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変換できます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センサーとしての即時使用体験を提供します。光強度検出において高性能かつ堅牢なS2102ワイヤレス光強度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
          <strong>S2102 Light</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特徴

- 選択可能な検出モード
- 400 kHz I2C ファストモードでの高解像度16ビットデジタル出力
- 広いダイナミックレンジ：0.1 - 40,000 LUX
- 広い動作温度範囲：-40°C ～ 85°C
- ユーザー定義の上限および下限しきい値設定が可能なプログラム可能な割り込み機能
- I2C アドレス：0x29

:::note
複数の I2C デバイスを使用したい場合は、[ソフトウェア I2C](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/)を参照してください。
:::

:::tip
Grove モジュールの詳細については、[Grove システム](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

## 仕様

| 項目                       | 最小値 | 典型値   | 最大値 | 単位  |
|----------------------------|--------|----------|--------|-------|
| 電源電圧, VDD             | 3.3    | 5        | 5.1    | V     |  
| 動作温度                  | -30    | \        | 70     | ℃     |
| SCL,SDA 入力低電圧        | -0.5   | \        | 0.8    | V     |
| SCL,SDA 入力高電圧        | 2.3    | \        | 5.1    | V     |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

**U1:** TSL2561 IC、光-デジタル変換器。以下は機能ブロック図です。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Functional_Block_Diagram_2.jpg" /></div>

- **レジスタマップ**

  TSL2561は、シリアルインターフェースを介してアクセスされる16個のレジスタ（うち3つは予約済み）とコマンドレジスタによって制御および監視されます。これらのレジスタはさまざまな制御機能を提供し、ADC変換の結果を確認するために読み取ることができます。レジスタセットの概要は以下の通りです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Register.jpg" /></div>

- **スペクトル応答曲線**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Spectral_responsivity.jpg" /></div>

  デジタル光センサーの2つのチャンネルは異なる応答特性を持っています。そのため、両方をオンにするか、片方をオフにすることで動作モードを選択できます。

**U3:** XC6206MR332 IC、正電圧レギュレータ。

**Q1,Q2:** BSN20 IC、Nチャネルエンハンスメントモード垂直D-MOSトランジスタ。

**SCL,SDA:** I2C信号インターフェース

## はじめに

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4 | ベースシールド | Grove - デジタル光センサー |
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/digital%20light%20sensor_small.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

- **ステップ2.** Grove - デジタル光センサーをベースシールドの**I2C**ポートに接続します。
- **ステップ3.** ベースシールドをArduinoに差し込みます。
- **ステップ4.** USBケーブルを使用してArduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/arduino%20connection.jpg" /></div>

#### ソフトウェア

- **ステップ1.** こちらからライブラリをダウンロードしてください：[Digital Light Sensor Library](https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor/archive/master.zip);
- **ステップ2.** [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)の手順に従ってライブラリをインストールしてください。
- **ステップ3.** 以下のパスからコードを直接開きます：**File -> Example ->Digital_Light_Sensor->Digital_Light_Sensor**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/library%20example.jpg" /></div>

- または、以下のコードをIDEにコピーしてArduinoにアップロードしてください。

```c  
/*
    Digital_Light_Sensor.ino
    TSL2561用ライブラリ

    著作権 (c) 2012 seeed technology inc.
    作成者: zhangkun
    作成日時:
    変更履歴:

    MITライセンス (MIT)

    このソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）のコピーを取得するすべての人に対し、
    無償で使用、コピー、変更、結合、公開、配布、サブライセンス、または販売する権利を許可します。
    ただし、以下の条件を満たす必要があります：

    上記の著作権表示および本許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。

    ソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。
    商品性、特定目的への適合性、および非侵害性を含むがこれに限定されない保証も含まれません。
    著者または著作権者は、ソフトウェアまたはその使用またはその他の取引に関連して発生する
    いかなる請求、損害、またはその他の責任についても責任を負いません。
*/

#include <Wire.h>
#include <Digital_Light_TSL2561.h>
void setup()
{
  Wire.begin();
  Serial.begin(9600);
  TSL2561.init();
}

void loop()
{
  Serial.print("光の値は: ");
  Serial.println(TSL2561.readVisibleLux());
  delay(1000);
}
```

- **ステップ4.** シリアルモニターを開いて結果を確認します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Digital_Light_Sensor_Score_Picture.jpg" /></div>

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove - デジタル光センサー |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/digital%20light%20sensor_small.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

- [手順](https://wiki.seeedstudio.com/ja/GrovePi_Plus/)に従って開発環境を構成してください。
- Groveケーブルを使用してセンサーをGrovePi+の**I2C**ソケットに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/pi%20connection.jpg" /></div>

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::

- **ステップ 1.** [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を構成します。

- **ステップ 1.** デモのディレクトリに移動します：

```
cd yourpath/GrovePi/Software/Python/grove_i2c_digital_light_sensor/
```

- **ステップ 2.** コードを確認する：

```
nano grove_i2c_digital_light_sensor.py  # "Ctrl+x" で終了 #
```

```py
#!/usr/bin/python
# TSL2561 I2C Light-To-Digital converter library for the Raspberry Pi.
# データシート: https://www.adafruit.com/datasheets/TSL2561.pdf
#
# このライブラリは Cedric Maion の作業に基づいています https://github.com/cmaion/TSL2561
#
# センサーに関するフォーラムディスカッションは http://www.dexterindustries.com/topic/greehouse-project/ を参照してください

from time import sleep
import smbus
from Adafruit_I2C import Adafruit_I2C
import RPi.GPIO as GPIO
from smbus import SMBus

TSL2561_Control = 0x80
TSL2561_Timing = 0x81
TSL2561_Interrupt = 0x86
TSL2561_Channel0L = 0x8C
TSL2561_Channel0H = 0x8D
TSL2561_Channel1L = 0x8E
TSL2561_Channel1H = 0x8F

TSL2561_Address = 0x29 # デバイスアドレス

LUX_SCALE = 14 # 2^14 でスケール
RATIO_SCALE = 9 # 2^9 でスケール比
CH_SCALE = 10 # 2^10 でチャネル値をスケール
CHSCALE_TINT0 = 0x7517 # 322/11 * 2^CH_SCALE
CHSCALE_TINT1 = 0x0fe7 # 322/81 * 2^CH_SCALE

K1T = 0x0040 # 0.125 * 2^RATIO_SCALE
B1T = 0x01f2 # 0.0304 * 2^LUX_SCALE
M1T = 0x01be # 0.0272 * 2^LUX_SCALE
K2T = 0x0080 # 0.250 * 2^RATIO_SCALE
B2T = 0x0214 # 0.0325 * 2^LUX_SCALE
M2T = 0x02d1 # 0.0440 * 2^LUX_SCALE
K3T = 0x00c0 # 0.375 * 2^RATIO_SCALE
B3T = 0x023f # 0.0351 * 2^LUX_SCALE
M3T = 0x037b # 0.0544 * 2^LUX_SCALE
K4T = 0x0100 # 0.50 * 2^RATIO_SCALE
B4T = 0x0270 # 0.0381 * 2^LUX_SCALE
M4T = 0x03fe # 0.0624 * 2^LUX_SCALE
K5T = 0x0138 # 0.61 * 2^RATIO_SCALE
B5T = 0x016f # 0.0224 * 2^LUX_SCALE
M5T = 0x01fc # 0.0310 * 2^LUX_SCALE
K6T = 0x019a # 0.80 * 2^RATIO_SCALE
B6T = 0x00d2 # 0.0128 * 2^LUX_SCALE
M6T = 0x00fb # 0.0153 * 2^LUX_SCALE
K7T = 0x029a # 1.3 * 2^RATIO_SCALE
B7T = 0x0018 # 0.00146 * 2^LUX_SCALE
M7T = 0x0012 # 0.00112 * 2^LUX_SCALE
K8T = 0x029a # 1.3 * 2^RATIO_SCALE
B8T = 0x0000 # 0.000 * 2^LUX_SCALE
M8T = 0x0000 # 0.000 * 2^LUX_SCALE

K1C = 0x0043 # 0.130 * 2^RATIO_SCALE
B1C = 0x0204 # 0.0315 * 2^LUX_SCALE
M1C = 0x01ad # 0.0262 * 2^LUX_SCALE
K2C = 0x0085 # 0.260 * 2^RATIO_SCALE
B2C = 0x0228 # 0.0337 * 2^LUX_SCALE
M2C = 0x02c1 # 0.0430 * 2^LUX_SCALE
K3C = 0x00c8 # 0.390 * 2^RATIO_SCALE
B3C = 0x0253 # 0.0363 * 2^LUX_SCALE
M3C = 0x0363 # 0.0529 * 2^LUX_SCALE
K4C = 0x010a # 0.520 * 2^RATIO_SCALE
B4C = 0x0282 # 0.0392 * 2^LUX_SCALE
M4C = 0x03df # 0.0605 * 2^LUX_SCALE
K5C = 0x014d # 0.65 * 2^RATIO_SCALE
B5C = 0x0177 # 0.0229 * 2^LUX_SCALE
M5C = 0x01dd # 0.0291 * 2^LUX_SCALE
K6C = 0x019a # 0.80 * 2^RATIO_SCALE
B6C = 0x0101 # 0.0157 * 2^LUX_SCALE
M6C = 0x0127 # 0.0180 * 2^LUX_SCALE
K7C = 0x029a # 1.3 * 2^RATIO_SCALE
B7C = 0x0037 # 0.00338 * 2^LUX_SCALE
M7C = 0x002b # 0.00260 * 2^LUX_SCALE
K8C = 0x029a # 1.3 * 2^RATIO_SCALE
B8C = 0x0000 # 0.000 * 2^LUX_SCALE
M8C = 0x0000 # 0.000 * 2^LUX_SCALE

# バスパラメータ
rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
 bus = smbus.SMBus(1)
else:
 bus = smbus.SMBus(0)
i2c = Adafruit_I2C(TSL2561_Address)

debug = False
cooldown_time = 0.005 # 秒単位で測定
packageType = 0 # 0=T パッケージ, 1=CS パッケージ
gain = 0        # 現在のゲイン: 0=1x, 1=16x [動的に選択]
gain_m = 1      # 現在のゲイン（倍率として）
timing = 2      # 現在の積分時間: 0=13.7ms, 1=101ms, 2=402ms [動的に選択]
timing_ms = 0   # 現在の積分時間（ms単位）
channel0 = 0    # 可視+赤外センサーの現在の生値
channel1 = 0    # 赤外センサーの現在の生値
schannel0 = 0   # 可視+赤外センサーの正規化された現在値
schannel1 = 0   # 赤外センサーの正規化された現在値

def readRegister(address):
 try:
  byteval = i2c.readU8(address)

  sleep(cooldown_time)
  if (debug):
   print("TSL2561.readRegister: returned 0x%02X from reg 0x%02X" % (byteval, address))
  return byteval
 except IOError:
  print("TSL2561.readRegister: error reading byte from reg 0x%02X" % address)
  return -1


def writeRegister(address, val):
 try:
  i2c.write8(address, val)

  sleep(cooldown_time)
  if (debug):
   print("TSL2561.writeRegister: wrote 0x%02X to reg 0x%02X" % (val, address))
 except IOError:

  sleep(cooldown_time)
  print("TSL2561.writeRegister: error writing byte to reg 0x%02X" % address)
  return -1

def powerUp():
 writeRegister(TSL2561_Control, 0x03)

def powerDown():
 writeRegister(TSL2561_Control, 0x00)

def setTintAndGain():
 global gain_m, timing_ms

 if gain == 0:
  gain_m = 1
 else:
  gain_m = 16

 if timing == 0:
  timing_ms = 13.7
 elif timing == 1:
  timing_ms = 101
 else:
  timing_ms = 402
 writeRegister(TSL2561_Timing, timing | gain << 4)

def readLux():
 sleep(float(timing_ms + 1) / 1000)

 ch0_low  = readRegister(TSL2561_Channel0L)
 ch0_high = readRegister(TSL2561_Channel0H)
 ch1_low  = readRegister(TSL2561_Channel1L)
 ch1_high = readRegister(TSL2561_Channel1H)

 global channel0, channel1
 channel0 = (ch0_high<<8) | ch0_low
 channel1 = (ch1_high<<8) | ch1_low

 sleep(cooldown_time)
 if debug:
  print("TSL2561.readVisibleLux: channel 0 = %i, channel 1 = %i [gain=%ix, timing=%ims]" % (channel0, channel1, gain_m, timing_ms))

def readVisibleLux():
 global timing, gain

 powerUp()
 readLux()

 if channel0 < 500 and timing == 0:
  timing = 1
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: too dark. Increasing integration time from 13.7ms to 101ms")
  setTintAndGain()
  readLux()

 if channel0 < 500 and timing == 1:
  timing = 2
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: too dark. Increasing integration time from 101ms to 402ms")
  setTintAndGain()
  readLux()

 if channel0 < 500 and timing == 2 and gain == 0:
  gain = 1
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: too dark. Setting high gain")
  setTintAndGain()
  readLux()

 if (channel0 > 20000 or channel1 > 20000) and timing == 2 and gain == 1:
  gain = 0
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: enough light. Setting low gain")
  setTintAndGain()
  readLux()

 if (channel0 > 20000 or channel1 > 20000) and timing == 2:
  timing = 1
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: enough light. Reducing integration time from 402ms to 101ms")
  setTintAndGain()
  readLux()

 if (channel0 > 10000 or channel1 > 10000) and timing == 1:
  timing = 0
  sleep(cooldown_time)
  if debug:
   print("TSL2561.readVisibleLux: enough light. Reducing integration time from 101ms to 13.7ms")
  setTintAndGain()
  readLux()

 powerDown()

 if (timing == 0 and (channel0 > 5000 or channel1 > 5000)) or (timing == 1 and (channel0 > 37000 or channel1 > 37000)) or (timing == 2 and (channel0 > 65000 or channel1 > 65000)):
  # overflow
  return -1

 return calculateLux(channel0, channel1)

def calculateLux(ch0, ch1):
 chScale = 0
 if timing == 0:   # 13.7 msec
  chScale = CHSCALE_TINT0
 elif timing == 1: # 101 msec
  chScale = CHSCALE_TINT1;
 else:           # assume no scaling
  chScale = (1 << CH_SCALE)

 if gain == 0:
  chScale = chScale << 4 # scale 1X to 16X

 # scale the channel values
 global schannel0, schannel1
 schannel0 = (ch0 * chScale) >> CH_SCALE
 schannel1 = (ch1 * chScale) >> CH_SCALE

 ratio = 0
 if schannel0 != 0:
  ratio = (schannel1 << (RATIO_SCALE+1)) / schannel0
 ratio = (ratio + 1) >> 1

 if packageType == 0: # T package
  if ((ratio >= 0) and (ratio <= K1T)):
   b=B1T; m=M1T;
  elif (ratio <= K2T):
   b=B2T; m=M2T;
  elif (ratio <= K3T):
   b=B3T; m=M3T;
  elif (ratio <= K4T):
   b=B4T; m=M4T;
  elif (ratio <= K5T):
   b=B5T; m=M5T;
  elif (ratio <= K6T):
   b=B6T; m=M6T;
  elif (ratio <= K7T):
   b=B7T; m=M7T;
  elif (ratio > K8T):
   b=B8T; m=M8T;
 elif packageType == 1: # CS package
  if ((ratio >= 0) and (ratio <= K1C)):
   b=B1C; m=M1C;
  elif (ratio <= K2C):
   b=B2C; m=M2C;
  elif (ratio <= K3C):
   b=B3C; m=M3C;
  elif (ratio <= K4C):
   b=B4C; m=M4C;
  elif (ratio <= K5C):
   b=B5C; m=M5C;
  elif (ratio <= K6C):
   b=B6C; m=M6C;
  elif (ratio <= K7C):
   b=B7C; m=M7C;

 temp = ((schannel0*b)-(schannel1*m))
 if temp < 0:
  temp = 0;
 temp += (1<<(LUX_SCALE-1))
 # strip off fractional portion
 lux = temp>>LUX_SCALE
 sleep(cooldown_time)
 if debug:
  print("TSL2561.calculateLux: %i" % lux)

 return lux

def init():
 powerUp()
 setTintAndGain()
 writeRegister(TSL2561_Interrupt, 0x00)
 powerDown()

def main():
 init()
 while (True):
  print("Lux: %i [Vis+IR=%i, IR=%i @ Gain=%ix, Timing=%.1fms]" % (readVisibleLux(), channel0, channel1, gain_m, timing_ms))
  sleep(1)

if __name__ == "__main__":
        main()
```

- **ステップ 3.** デモを実行します。

```
sudo python3 grove_i2c_digital_light_sensor.py
```

- **ステップ 4.** 結果は以下の通りです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Grovepi_digital_light_sensor_00.png" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Grove-Digital%20%20light%20%20sensor%20v1.0%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove - デジタル光センサー回路図](https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Grove-Digital%20%20light%20%20sensor%20v1.0%20eagle%20file.zip)
- **[PDF]** [Grove - デジタル光センサー回路図 PDF ファイル](https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Digital%20light%20sensor%20v1.0%20Sch.pdf)
- **[PDF]** [Grove - デジタル光センサー PCB PDF ファイル](https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Digital%20light%20sensor%20v1.0%20PCB.pdf)
- **[ライブラリ]** [ライブラリ Github Grove-Digital Light](https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor/archive/master.zip)
- **[データシート]** [TSL2561 データシート](https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/TSL2561T.pdf)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_Digital_Light_Sensor から作成されました -->

## プロジェクト

**Seeed LoRa IoTea ソリューション**: 茶畑に適用される自動情報収集システムです。これは、インテリジェント農業情報収集の一部です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**Intel Edison IoT ハイドロポニックコントローラー**: ボストン IoT ハッカソンで Intel Edison を使用して作成された IoT 対応のハイドロポニックコントローラーです。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/bltrobotics/intel-edison-iot-hydroponic-controller-d7132d/embed' width='350'></iframe>

**COI - 光透過率計**: Grove スターターキットプラスに含まれる光センサーを使用して光強度の変化を測定する完成品です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/DigitalFabber/coi-light-transmission-meter-8044fd/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>