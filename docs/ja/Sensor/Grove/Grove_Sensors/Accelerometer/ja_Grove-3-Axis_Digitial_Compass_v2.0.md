---
description: Grove - 3軸デジタルコンパス v2.0
title: Grove - 3軸デジタルコンパス v2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis_Digitial_Compass_v2.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Bazaar_doc/101020492/main_page.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_doc/101020492/main_page.jpg" alt="pir" width="600" height="auto" /></p>


Grove - 3軸デジタルコンパスは、Bosch BMM150をベースにしたデジタルコンパスセンサーです。3つの直交する軸で磁場を測定でき、出力はI2CおよびSPIインターフェースを介して読み取ることができます。3軸モバイルアプリケーションに最適です。

これはGrove - 3軸デジタルコンパスの第2世代であり、初代バージョンと比較して、すべての3軸アプリケーションの厳しい要件を完全に満たすことができ、価格は初代バージョンのほぼ半分と非常にコストパフォーマンスに優れています。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width="600" height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)

## 特徴

- 高解像度
- 高い方位精度
- 簡単に使用可能

## 仕様


| 項目                         | 値                                   |
|------------------------------|---------------------------------------|
| 動作電圧                     | 3.3V / 5V                             |
| 磁場範囲（典型値）           | ±1300μT(x, y軸),  ±2500μT(z軸)        |
| 磁場分解能                   | 0.3μT                                 |
| 出力角度                     | 0º ~ 360º                             |
| インターフェース             | I2C                                   |
| 動作温度                     | -40℃ ～ +85 ℃                        |
| 寸法                         | 20mm x 20mm x 15mm                    |
|I2Cアドレス|0x13|

:::note
    複数のI2Cデバイスを使用したい場合は、[ソフトウェアI2C](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/)を参照してください。
:::
:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::
## 対応プラットフォーム


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width="200" height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width="200" height="auto" /></p>|

:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ
#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove-3-Axis_Digitial_Compass_v2.0 |
|----------------|-------------|------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width="600" height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width="600" height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" alt="pir" width="600" height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **ステップ 2.** Grove-3-Axis_Digitial_Compass_v2.0をGrove-Base Shieldの**I2C**ポートに接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使ってSeeeduinoをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/with_ardu.jpg" alt="pir" width="600" height="auto" /></p>

:::note
Grove Base Shieldがない場合でも、以下のように直接このモジュールをSeeeduinoに接続することができます。
:::

| Seeeduino_v4 | Grove-3-Axis_Digitial_Compass_v2.0 |
|--------------|-----------------------------------|
| 5V           | VCC                               |
| GND          | GND                               |
| SDA          | SDA                               |
| SCL          | SCL                               |

<div class="admonition warning">
<p class="admonition-title">注意</p>
USBケーブルを優しく差し込んでください。そうしないとインターフェースを損傷する可能性があります。また、内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、<a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><b>こちら</b></a>から購入できます。
</div>

#### ソフトウェア
**ステップ 1.** [ライブラリ](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150)をGithubからダウンロードします。

**ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

**ステップ 3.** 新しいArduinoスケッチを作成し、以下のコードを貼り付けるか、**File->Examples->Grove_3_Axis_Compass_V2.0_BMM150-master->compass**のパスから直接コードを開きます。

以下はコードです：
```c
/**
 * この例
*/

#include <Arduino.h>
#include <Wire.h>
// ライブラリ
#include "bmm150.h"
#include "bmm150_defs.h"

BMM150 bmm = BMM150();

void setup()
{
  Serial.begin(9600);

  if(bmm.initialize() == BMM150_E_ID_NOT_CONFORM) {
    Serial.println("チップIDを読み取れません！");
    while(1);
  } else {
    Serial.println("初期化完了！");
  }

}

void loop()
{
  bmm150_mag_data value;
  bmm.read_mag_data();

  value.x = bmm.raw_mag_data.raw_datax;
  value.y = bmm.raw_mag_data.raw_datay;
  value.z = bmm.raw_mag_data.raw_dataz;

  float xyHeading = atan2(value.x, value.y);
  float zxHeading = atan2(value.z, value.x);
  float heading = xyHeading;

  if(heading < 0)
    heading += 2*PI;
  if(heading > 2*PI)
    heading -= 2*PI;
  float headingDegrees = heading * 180/M_PI;
  float xyHeadingDegrees = xyHeading * 180 / M_PI;
  float zxHeadingDegrees = zxHeading * 180 / M_PI;

  Serial.print("方位: ");
  Serial.println(headingDegrees);

  delay(100);
}
```

**ステップ 4.** コードをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

**ステップ 5.** シリアルモニターを開いてセンサーのデータを受信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial.jpg" alt="pir" width="600" height="auto" /></p>

**ステップ 6.** この3秒間の間に、以下の画像のようにコンパスを各軸で前後に傾けて回転させてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/calibrate.jpg" alt="pir" width="600" height="auto" /></p>

キャリブレーションの時間は、関数**calibrate(uint16_t timeout)**のパラメータtimeoutを変更することで調整できます。

:::note
コンパスはキャリブレーションが必要です。そうしないと正確なデータを取得できません！必ずステップ5を実行してください。
:::

**ステップ 7.** 最後に、以下の画像のような結果が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial2.jpg" alt="pir" width="600" height="auto" /></p>

:::tip
方位値は0º〜360ºの範囲で、これはY軸に対応します。0ºはY軸が北を指していることを意味し、90ºはY軸が西を指していることを意味します。180ºはY軸が南を指し、270ºはY軸が東を指します。
:::
コンパスを楽しんでください！

### Raspberry Piで遊ぶ（Grove Base Hat for Raspberry Piを使用）

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - 3-axis compass |
|--------------|---------------------------|-------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width="600" height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width="600" height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" alt="pir" width="600" height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **ステップ 2**. Grove Base Hat を Raspberry に接続します。
- **ステップ 3**. 3軸コンパスを Base Hat の I2C ポートに接続します。
- **ステップ 4**. Raspberry Pi を USB ケーブルを介して PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Compass_Hat.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Compass_Hat.jpg" alt="pir" width="600" height="auto" /></p>

#### ソフトウェア

- **ステップ 1**. [Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従い、開発環境を構築し、grove.py を Raspberry Pi にインストールします。

- **ステップ 2**. 以下のコマンドを実行してコードを動かします。

```
virtualenv -p python3 env
source env/bin/activate
# コマンドを入力
grove_3_axis_compass_bmm150
```

以下は grove_3_axis_compass_bmm150.py のコードです。

```python
from __future__ import print_function
import time
import bmm150
import math


def main():
    device = bmm150.BMM150()  # バス番号はデフォルトで 1 になります
    while (1):
        x, y, z = device.read_mag_data()

        heading_rads = math.atan2(x, y)

        heading_degrees = math.degrees(heading_rads)

        print("磁力計 x: {0:.2f}".format(x), end=' ')
        print(" y: {0:.2f}".format(y), end=' ')
        print(" z: {0:.2f}".format(z), end=' ')
        print(" uT")

        print('方位（軸_Y が指す方向）: {0:.2f} 度'.format(heading_degrees))
        time.sleep(.250)

if __name__ == '__main__':
    main()
```

:::success
    すべてが正常に動作すれば、以下の結果が表示されます。
:::
```python

pi@raspberrypi:~/grove.py/grove $ grove_3_axis_compass_bmm150
磁力計 x: -34.12  y: 36.71  z: -21.25  uT
方位（軸_Y が指す方向）: 317.10 度
磁力計 x: -34.49  y: 38.20  z: -16.32  uT
方位（軸_Y が指す方向）: 317.92 度
磁力計 x: -34.12  y: 38.20  z: -9.87  uT
方位（軸_Y が指す方向）: 318.23 度
磁力計 x: -32.64  y: 38.94  z: -5.69  uT
方位（軸_Y が指す方向）: 320.03 度
磁力計 x: -31.52  y: 38.20  z: -2.28  uT
方位（軸_Y が指す方向）: 320.47 度
磁力計 x: -29.67  y: 38.20  z: 0.38  uT
方位（軸_Y が指す方向）: 322.16 度
磁力計 x: -26.33  y: 38.20  z: 4.55  uT
方位（軸_Y が指す方向）: 325.42 度
^C終了


```

このプログラムを終了するには、++ctrl+c++ を押すだけです。

## 回路図オンラインビューア

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip" style={{borderRadius: '0px 0px 4px 4px', height: '500px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: '1280px', maxHeight: '700px', boxSizing: 'border-box'}}>
</div>

## リソース

- **[ライブラリ]** [Grove-3_Axis_Compass_V2.0 lib](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150)
- **[PDF]** [BST-BMM150-Datasheet](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Datasheet.pdf)

- **[Zip]** [Grove-3-Axis Digital Compass v2_Eagle File](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip)

## 技術サポートと製品ディスカッション
私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>