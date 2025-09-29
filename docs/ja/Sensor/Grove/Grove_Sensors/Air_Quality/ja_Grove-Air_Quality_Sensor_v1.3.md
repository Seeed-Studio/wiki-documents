---
description: Grove - Air Quality Sensor v1.3
title: Grove - Air Quality Sensor v1.3
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove-Air_Quality_Sensor_v1.3.webp
slug: /ja/Grove-Air_Quality_Sensor_v1.3
last_update:
  date: 05/15/2025
  author: Priyanshu Roy
---


---
<!-- ![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" width={600} height="auto" /></p>

このセンサーは、室内の空気状態を包括的に監視するために設計されています。炭素モノオキシド、アルコール、アセトン、シンナー、ホルムアルデヒドなど、幅広い有害ガスに反応します。測定メカニズムの性質上、このセンサーは特定のガス濃度を定量的に記述する具体的なデータを出力することはできません。しかし、オートリフレッシャースプレーやオート空気循環システムなど、定性的な結果のみを必要とするアプリケーションには十分に適しています。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)

:::tip
    [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しました。このガイドは、あなたのニーズに最適なガスセンサーを選ぶのに役立ちます。
:::

## バージョン

| 製品バージョン | 変更点 | リリース日 |
|-----------------|---------|---------------|
| Grove - Air Quality Sensor v1.3 | 初版 | 2016年5月 |

## 特徴

- 幅広いターゲットガスに反応
- コスト効率が高い
- 耐久性がある
- 5Vおよび3.3Vに対応

:::caution
    1. 初期条件として比較的きれいな空気が必要です。
    2. 長時間、高度に汚染された空気にさらされると感度が著しく低下する可能性があります。
    3. Coffre-fort et armoire forte:
:::

## 対応プラットフォーム

|Arduino|Raspberry Pi|ESP-IDF|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/esp_idf.png" alt="esp-idf" width={200} height="auto" /></p>|

:::caution
    上記の対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### デモンストレーション

イントロダクションで説明したように、このセンサーは広範囲の対象ガスに対して定性的な結果を提供するのに優れています。このデモでは、`.cpp`ファイル内で参照用に4つの状態を定義します。それらは以下の通りです：

- a. 空気が新鮮 -- 良好な空気状態を示します。
- b. 低汚染 -- 比較的低濃度の対象ガスが存在することを示します。
- c. 高汚染（シリアルモニターに「Force signal active」のメッセージが表示されない場合） -- 汚染レベルに注意し、何らかの対策を検討する必要があるかもしれません。
- d. 高汚染（シリアルモニターに「Force signal active」のメッセージが表示される場合） -- 空気の質を改善するために即時の対策を講じる必要があります。

意思決定構造を`.cpp`ファイルにカプセル化しました。しきい値を変更する方法については、そちらをご覧ください。

さあ、試してみましょう！

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove - Air Quality Sensor |
|----------------|-------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)|

- **ステップ2.** Grove - Air Quality SensorをGrove-Base Shieldのポート**A0**に接続します。
- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Grove Base Shieldがない場合でも、以下のようにGrove - Air Quality SensorをSeeeduinoに直接接続することができます。
:::
| Seeeduino       | Grove - Air Quality Sensor |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| 接続なし      | 白                   |
| A0            | 黄                  |

#### ソフトウェア

- **ステップ1.** [AirQuality_Sensorライブラリ](https://github.com/Seeed-Studio/Grove_Air_quality_Sensor)をダウンロードします。
- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。
- **ステップ3.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

```c
/*
    Grove_Air_Quality_Sensor.ino
    Grove - Air Quality Sensorのデモ。

    Copyright (c) 2019 seeed technology inc.
    Author    : Lets Blu
    作成日時 : 2019年1月
    修正日時:

    MITライセンス (MIT)

    このソフトウェアおよび関連ドキュメントファイル（以下「ソフトウェア」）のコピーを取得するすべての人に対し、以下の条件に従って、ソフトウェアを制限なく使用、コピー、変更、結合、公開、配布、サブライセンス、および/または販売する権利を無償で許可します。

    上記の著作権表示および本許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。

    ソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。
    商品性、特定目的への適合性、および非侵害性に関する保証を含むがこれに限定されないものとします。
    著者または著作権者は、ソフトウェアまたはその使用またはその他の取引に関連して生じるいかなる請求、損害、またはその他の責任についても責任を負いません。
*/
#include "Air_Quality_Sensor.h"

AirQualitySensor sensor(A0);

void setup(void) {
    Serial.begin(9600);
    while (!Serial);

    Serial.println("センサーの初期化を待っています...");
    delay(20000);

    if (sensor.init()) {
        Serial.println("センサー準備完了。");
    } else {
        Serial.println("センサーエラー！");
    }
}

void loop(void) {
    int quality = sensor.slope();

    Serial.print("センサー値: ");
    Serial.println(sensor.getValue());

    if (quality == AirQualitySensor::FORCE_SIGNAL) {
        Serial.println("高汚染！強制信号がアクティブです。");
    } else if (quality == AirQualitySensor::HIGH_POLLUTION) {
        Serial.println("高汚染！");
    } else if (quality == AirQualitySensor::LOW_POLLUTION) {
        Serial.println("低汚染！");
    } else if (quality == AirQualitySensor::FRESH_AIR) {
        Serial.println("新鮮な空気。");
    }

    delay(1000);
}
```

- **ステップ4.** ターミナルに以下のような距離が表示されます。

```
センサーの初期化を待っています...
センサー準備完了。
センサー値: 48
新鮮な空気。
センサー値: 51
新鮮な空気。
センサー値: 49
新鮮な空気。
センサー値: 48
新鮮な空気。
センサー値: 48
新鮮な空気。
センサー値: 48
新鮮な空気。
```

しきい値や表示メッセージを調整するには、以下の`.cpp`ファイル内の意思決定構造を参照してください。

```c
int AirQualitySensor::slope(void) {
    _lastVoltage = _currentVoltage;
    _currentVoltage = analogRead(_pin);

    _voltageSum += _currentVoltage;
    _volSumCount += 1;

    updateStandardVoltage();
    if (_currentVoltage - _lastVoltage > 400 || _currentVoltage > 700) {
        return AirQualitySensor::FORCE_SIGNAL;
    }
    else if ((_currentVoltage - _lastVoltage > 400 && _currentVoltage < 700)
             || _currentVoltage - _standardVoltage > 150) {
        return AirQualitySensor::HIGH_POLLUTION;
    }
    else if ((_currentVoltage - _lastVoltage > 200 && _currentVoltage < 700)
             || _currentVoltage - _standardVoltage > 50) {
        return AirQualitySensor::LOW_POLLUTION;
    }
    else {
        return AirQualitySensor::FRESH_AIR;
    }

    return -1;
}
```

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Air Quality SensorをBase ShieldのポートA0に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[Codecraftを使用したArduinoのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/cc_Air_Quality_Sensor.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/cc_Air_Quality_Sensor.png" alt="pir" width={600} height="auto" /></p>

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、シリアルモニターで空気品質が表示されます。
:::

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Air Quality Sensor |
|--------------|--------------------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html)|

- **ステップ 2.** Grove Base HatをRaspberry Piに接続します。
- **ステップ 3.** Grove - Air Quality SensorをBase HatのA0ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。
![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

#### ソフトウェア

:::caution
     **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**でのみこのコマンドラインを使用する必要があります。
:::

- **ステップ 1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ 2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_air_quality_sensor_v1_3.py 0
```

以下はgrove_air_quality_sensor_v1_3.pyのコードです。

```python
import math
import sys
import time
from grove.adc import ADC


class GroveAirQualitySensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveAirQualitySensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveAirQualitySensor(int(sys.argv[1]))

    print('Detecting ...') 
    while True:
        value = sensor.value        
        if value > 100:
            print("{}, High Pollution.".format(value))
        else:
            print("{}, Air Quality OK.".format(value))

        time.sleep(.1)

if __name__ == '__main__':
    main()
```

:::tip
    すべてが正常に動作すれば、以下の結果が表示されます：
:::

```python
pi@raspberrypi:~/grove.py/grove $ python3 grove_air_quality_sensor_v1_3.py 0 
Detecting ...
138, High Pollution.
139, High Pollution.
140, High Pollution.
141, High Pollution.
139, High Pollution.
140, High Pollution.
140, High Pollution.
140, High Pollution.
139, High Pollution.
138, High Pollution.
139, High Pollution.
138, High Pollution.
138, High Pollution.
^CTraceback (most recent call last):
  File "grove_air_quality_sensor_v1_3.py", line 71, in <module>
    main()
  File "grove_air_quality_sensor_v1_3.py", line 68, in main
    time.sleep(.1)
KeyboardInterrupt
```

このセンサーを使用して空気品質を検出できます。++ctrl+c++を押して終了します。

:::note
        アナログポートの場合、シルクスクリーンのピン番号は**A1, A0**のようになっていますが、コマンドでは**0**や**1**というパラメータを使用します。デジタルポートと同じです。そのため、モジュールを正しいポートに接続してください。そうしないとピンの競合が発生する可能性があります。
:::

### Raspberry Piで遊ぶ (GrovePi_Plusを使用)

#### ハードウェア

- **ステップ 1.** 以下のものを準備します：

| Raspberry Pi | GrovePi_Plus | Grove - Air Quality Sensor |
|--------------|--------------|-----------------------------|
|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html)|

- **ステップ 2.** GrovePi_PlusをRaspberryに接続します。
- **ステップ 3.** Grove-MOSFET rangerをGrovePi_Plusの**A0**ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberryをPCに接続します。

#### ソフトウェア

- **ステップ 1.** デモのディレクトリに移動します：

```
cd yourpath/GrovePi/Software/Python/
```

- **ステップ 2.** コードを確認します

```
nano grove_air_quality_sensor.py   # "Ctrl+x"で終了 #
```

```python
import time
import grovepi

# Grove Air Quality SensorをアナログポートA0に接続
# SIG,NC,VCC,GND
air_sensor = 0

grovepi.pinMode(air_sensor,"INPUT")

while True:
    try:
        # センサー値を取得
        sensor_value = grovepi.analogRead(air_sensor)

        if sensor_value > 700:
            print "高い汚染"
        elif sensor_value > 300:
            print "低い汚染"
        else:
            print "空気が新鮮"

        print "sensor_value =", sensor_value
        time.sleep(.5)

    except IOError:
        print "エラー"
```

- **ステップ 3.** デモを実行します。

```
sudo python grove_air_quality_sensor.py
```

- **ステップ 4.** ターミナルに以下のような出力が表示されます。

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/pi_result.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/pi_result.png" alt="pir" width={600} height="auto" /></p>


### ESP-IDFで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のアイテムを準備します：

<table align="center">
<tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove Air Quality Sensor v1.3</th>
</tr>
<tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
</tr>
<tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
</tr>
</table>

- **ステップ 2.** Grove - Air Quality SensorをESP32ボードに接続します：
  - センサーのVCCを3.3Vに接続
  - センサーのGNDをGNDに接続
  - センサーのSIGをADC対応のGPIOピン（例：GPIO34）に接続
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/ESP32_Grove_AirQuality.png" alt="pir" width={600} height="auto" /></p>


#### ソフトウェア

- **ステップ 1.** [公式ガイド](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html)に従ってESP-IDFをインストールします。

- **ステップ 2.** Grove Analog Air Quality Sensorコンポーネントをクローンします：

```bash
cd your_project/components
git clone https://github.com/Priyanshu0901/grove_analog_aqs.git
```

- **ステップ 3.** menuconfigを使用してコンポーネントを設定します：

```bash
idf.py menuconfig
```

"Component config → Grove Analog Air Quality Sensor"に移動して設定します：
- ADCユニット番号（ADC1の場合は0、ADC2の場合は1）
- ADCチャンネル（GPIO接続に対応）
- ADC減衰（デフォルト：ADC_ATTEN_DB_12 for 3.3V）
- 空気品質の閾値
- 電源管理オプション（オプション）

- **ステップ 4.** 新しいプロジェクトを作成し、コンポーネントを使用します：

```c
#include "grove_analog_aqs.h"

void app_main(void)
{
    // デフォルト設定で初期化
    grove_aqs_config_t config = GROVE_AQS_DEFAULT_CONFIG();
    esp_err_t ret = grove_aqs_init(&config);
    if (ret != ESP_OK) {
        ESP_LOGE(TAG, "センサーの初期化に失敗しました: %d", ret);
        return;
    }
    
    // センサーデータを読み取る
    grove_aqs_data_t data;
    ret = grove_aqs_read_data(&data);
    if (ret == ESP_OK) {
        ESP_LOGI(TAG, "生のADC値: %d", data.raw_value);
        ESP_LOGI(TAG, "電圧: %d mV", data.voltage_mv);
        ESP_LOGI(TAG, "空気品質: %s", grove_aqs_quality_to_string(data.quality));
    }
    
    // 使用終了時にクリーンアップ
    grove_aqs_deinit();
}
```

- **ステップ 5.** プロジェクトをビルドしてフラッシュします：

```bash
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
```

:::note
    /dev/ttyUSB0をESP32のシリアルポートに置き換えてください。
:::

#### 期待される出力

```
I (242) sleep_gpio: GPIOスリープ設定の自動切り替えを有効化
I (249) main_task: CPU0で開始
I (249) main_task: app_main()を呼び出し
I (249) grove_aqs_example: Grove Analog Air Quality Sensorを初期化中
I (259) grove_aqs_example: ADCユニット: 0, ADCチャンネル: 2を使用
I (259) grove_aqs: ADCユニット: 0, ADCチャンネル: 2で初期化中
I (269) grove_aqs: ADCキャリブレーションが有効
I (269) grove_aqs: Grove Analog Air Quality Sensorが正常に初期化されました
I (279) grove_aqs_example: センサーの安定化を待機中...
I (3279) grove_aqs: 空気品質の読み取り: Raw=300, Voltage=218mV, Quality=Fresh
I (3279) grove_aqs_example: 読み取り #1:
I (3279) grove_aqs_example:   生のADC値: 300
I (3279) grove_aqs_example:   電圧: 218 mV
I (3279) grove_aqs_example:   空気品質: Fresh
I (3289) grove_aqs_example:   アドバイス: 空気は新鮮で清潔です！
I (4289) grove_aqs: 空気品質の読み取り: Raw=298, Voltage=216mV, Quality=Fresh
I (4289) grove_aqs_example: 読み取り #2:
I (4289) grove_aqs_example:   生のADC値: 298
I (4289) grove_aqs_example:   電圧: 216 mV
I (4289) grove_aqs_example:   空気品質: Fresh
I (4299) grove_aqs_example:   アドバイス: 空気は新鮮で清潔です！
I (5299) grove_aqs: 空気品質の読み取り: Raw=286, Voltage=208mV, Quality=Fresh
I (5299) grove_aqs_example: 読み取り #3:
I (5299) grove_aqs_example:   生のADC値: 286
I (5299) grove_aqs_example:   電圧: 208 mV
I (5299) grove_aqs_example:   空気品質: Fresh
I (5309) grove_aqs_example:   アドバイス: 空気は新鮮で清潔です！
I (6309) grove_aqs: 空気品質の読み取り: Raw=283, Voltage=206mV, Quality=Fresh
```

:::tip
    このコンポーネントは以下の機能を提供します：
    - 自動ADCキャリブレーション
    - 空気品質の閾値設定可能
    - オプションのGPIO電源制御
    - エラーハンドリングとログ記録
    - ADC1およびADC2の両方をサポート
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ライブラリ]** [AirQuality Sensor Library](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/AirQuality_Sensor.zip)
- **[Eagle]** [Grove_-_Air_quality_sensor_v1.3_sch_pcb](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip)
- **[PDF]** [Grove_-_Air_quality_sensor_v1.3_sch](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch.pdf)
- **[PDF]** [Air_quality_sensor_MP503_Chinese](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Air_quality_sensor_MP503%20Chinese.pdf)
- **[PDF]** [Air_quality sensor_MP503_English](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Mp503%20English.pdf)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_Air_Quality_Sensor_CDC_File.zip)
- **[ESP-IDF]** [Grove Analog Air Quality Sensor Component](https://github.com/Priyanshu0901/grove_analog_aqs.git) - Grove Air Quality Sensor用ESP-IDFコンポーネント
- **[ESP-IDF]** [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) - 公式ESP-IDFプログラミングガイド

## プロジェクト

**SPCPM (Solar Powered City Pollution Monitor)**: 低メンテナンス、高出力の空気汚染および騒音汚染モニターを都市全体に設置し、配線不要。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/100181/spcpm-solar-powered-city-pollution-monitor-ca4072/embed' width='350'></iframe>

**周囲の環境データを確認できるウェブサイト**:

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/a-website-to-see-the-environment-data-around-you-1aea66/embed' width='350'></iframe>

<!-- **BeagleBone Green Wirelessを使用したホームコントロールセンター**:

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/kevin-lee2/home-control-center-using-beaglebone-green-wireless-107a0d/embed" width={350} /> -->

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66の筐体、Bluetoothによる設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには、最新のSenseCAP S210xをぜひお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>