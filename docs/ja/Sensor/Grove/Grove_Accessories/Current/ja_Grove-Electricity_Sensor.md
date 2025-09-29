---
description: Grove - 電流センサー
title: Grove - 電流センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Electricity_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/Twig-Electricity-Sensor.jpg" /></div>

電流センサーモジュールはGroveシリーズの一員です。このモジュールはTA12-200電流変換器を基にしており、大きな交流電流を小さな振幅に変換することができます。このモジュールを使用して最大5Aの交流電流を測定することが可能です。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## 特徴

- Grove互換インターフェース
- 最大5A入力
- 高精度
- 小型サイズ

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 応用例

- 交流電流測定
- デバイス状態監視

## 仕様

### 主な仕様

| **項目**    | **最小値**              |
|-------------|-------------------------|
| PCBサイズ   | 2.0cm\*4.0cm           |
| インターフェース | 2.0mmピッチピンヘッダー |
| IO構造      | SIG,NC,NC,GND          |
| RoHS        | YES                    |

### 電子特性

| **項目**             | **最小値** | **標準値** | **最大値** | **単位**  |
|----------------------|------------|------------|------------|-----------|
| 変換比率            | -          | 2000:1     | -          | -         |
| 入力電流            | 0          | -          | 5          | A         |
| 出力電流            | 0          | -          | 2.5        | mA        |
| サンプリング抵抗    | -          | 800        | -          | Ω         |
| サンプリング電圧    | 0          | -          | 2          | V         |
| 動作周波数          | 20         | -          | 20K        | HZ        |
| 非線形スケール      | -          | -          | 0.2%       | -         |
| 位相シフト          | -          | -          | 5'         | -         |
| 動作温度            | -55        | -          | 85         | ℃         |
| 耐電圧              | -          | 6          | -          | KVAC/1分  |

## ハードウェア概要

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/dimensions.jpg" /></div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで試す

以下のスケッチは、交流電圧の振幅を測定する簡単なアプリケーションを示しています。SIGピンは測定される交流電流に基づいて交流電圧を出力します。この値をADCを使用して測定できます。

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove-Electricity_Sensor |
|----------------|-------------|---------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/45d_small.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html)|

- **ステップ 2.** Grove-Electricity_SensorをGrove-Base Shieldのポート**A0**に接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!--リンク-->
![with_ardu](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/with_ardu.jpg)

:::note
Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove-Electricity_Sensor |
|-----------------|---------------------------|
| 5V              | 赤                        |
| GND             | 黒                        |
| 接続なし        | 白                        |
| A0              | 黄色                      |

#### ソフトウェア

**ステップ 1.** 以下のコードをコピーしてコントローラーボードに書き込み、アップロードしてください。

```c
/****************************************************************************/  
//  機能: 交流電流の振幅電流と正弦波交流電流の実効電流を測定します。
//  ハードウェア: Grove - Electricity Sensor        
//  日付: 2013年1月19日
//  作成者: www.seeedstudio.com
#define ELECTRICITY_SENSOR A0 // センサーが接続されているアナログ入力ピン

float amplitude_current;               // 振幅電流
float effective_value;                 // 実効電流

void setup()
{
    Serial.begin(9600);
    pins_init();
}
void loop()
{
    int sensor_max;
    sensor_max = getMaxValue();
    Serial.print("sensor_max = ");
    Serial.println(sensor_max);
    // センサーのGroveインターフェースのVCCは5Vです
    amplitude_current = (float)sensor_max / 1024 * 5 / 800 * 2000000;
    effective_value = amplitude_current / 1.414; // 最小電流 = 1 / 1024 * 5 / 800 * 2000000 / 1.414 = 8.6(mA)
                                                 // 正弦波交流電流の場合のみ
    Serial.println("電流の振幅は (mA)");
    Serial.println(amplitude_current, 1); // 小数点以下1桁のみ表示
    Serial.println("電流の実効値は (mA)");
    Serial.println(effective_value, 1);
}
void pins_init()
{
    pinMode(ELECTRICITY_SENSOR, INPUT);
}
/* 機能: 1000ms間サンプリングし、SIGピンから最大値を取得します */
int getMaxValue()
{
    int sensorValue;             // センサーから読み取った値
    int sensorMax = 0;
    uint32_t start_time = millis();
    while ((millis() - start_time) < 1000) // 1000ms間サンプリング
    {
        sensorValue = analogRead(ELECTRICITY_SENSOR);
        if (sensorValue > sensorMax)
        {
            /* 最大センサー値を記録 */
            sensorMax = sensorValue;
        }
    }
    return sensorMax;
}
```

:::note
コードで検知可能な最小実効電流は以下の式で計算できます。  
最小電流 = 1 / 1024 * 5 / 800 * 2000000 / 1.414 = 8.6(mA)
:::

- **ステップ 2.** シリアルモニターを開き、結果は以下のようになります：

![](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/ardu_result.jpg)

### Raspberry Piで試す

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove-Electricity_Sensor |
|--------------|--------------|---------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/45d_small.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html)|

- **ステップ 2.** GrovePi_PlusをRaspberryに差し込みます。
- **ステップ 3.** Grove-Electricity_SensorをGrovePi_Plusの**A0**ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberryをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/with_rpi.jpg" /></div>

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構成します。
- **ステップ 2.** GitHubリポジトリをクローンします。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行してこのセンサーを使用します。

```bash
cd ~/GrovePi/Software/Python
python grove_electricity_sensor.py
```

以下は例のコードです：

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove Electricity Sensor (https://www.seeedstudio.com/wiki/Grove_-_Electricity_Sensor)
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## ライセンス
MITライセンス (MIT)
Raspberry Pi用GrovePi: GroveセンサーをRaspberry Piに接続するためのオープンプラットフォーム。
Copyright (C) 2017  Dexter Industries
本ソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）のコピーを取得した者は、以下の条件に従い、ソフトウェアを使用、コピー、変更、公開、配布、サブライセンス、販売する権利を無償で許可されます。
上記の著作権表示およびこの許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。
本ソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。これには、商品性、特定目的への適合性、および権利非侵害の保証が含まれますが、これに限定されません。
著者または著作権者は、契約、不法行為、またはその他の理由により発生するいかなる請求、損害、またはその他の責任についても責任を負いません。
'''

import time
import grovepi

# Grove Electricity SensorをアナログポートA0に接続
# SIG,NC,NC,GND
sensor = 0

grovepi.pinMode(sensor,"INPUT")

# GroveインターフェースのVccは通常5V
grove_vcc = 5

while True:
  try:
      # センサー値を取得
      sensor_value = grovepi.analogRead(sensor)

      # 振幅電流を計算 (mA)
      amplitude_current = (float)(sensor_value / 1024 * grove_vcc / 800 * 2000000)

      # 実効値を計算 (mA)
      effective_value = amplitude_current / 1.414

      # 最小電流 = 1 / 1024 * grove_vcc / 800 * 2000000 / 1.414 = 8.6(mA)
      # 正弦波交流電流の場合のみ

      print("sensor_value", sensor_value)
      print("電流の振幅は", amplitude_current, "mA")
      print("電流の実効値は", effective_value, "mA")
      time.sleep(1)

  except IOError:
      print ("エラー")
```

以下は翻訳結果です：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/rpi_result.jpg" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_v1.0_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove - Electricity Sensor Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_v1.0_eagle_files.zip)
- **[PDF]** [PDF形式の回路図](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_sch.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>