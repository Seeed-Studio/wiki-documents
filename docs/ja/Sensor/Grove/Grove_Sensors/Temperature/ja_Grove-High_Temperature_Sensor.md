---
description: Grove - 高温センサー
title: Grove - 高温センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-High_Temperature_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_01.jpg" /></div>

熱電対は非常に感度の高いデバイスです。そのため、冷接点補償を備えた優れたアンプが必要です。Grove - 高温センサーは、K型熱電対と、冷接点補償のためにサーミスタを使用して周囲温度を測定する熱電対アンプを使用しています。このセンサーの検出範囲は-50〜600°Cで、精度は±(2.0% + 2°C)です。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-High-Temperature-Sensor.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのための高性能で堅牢なS2101ワイヤレス温湿度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 空気温度 &amp; 湿度</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## バージョン

| 製品バージョン                          | 変更内容 | リリース日       |
|----------------------------------------|---------|-----------------|
| Grove - 高温センサー V1.0              | 初版    | 2014年2月25日   |

## 仕様

| パラメータ                                     | 値/範囲                              |
|-----------------------------------------------|-------------------------------------|
| 動作電圧                                      | 3.3-5V                              |
| 25℃での最大定格電力                           | 300mW                               |
| 動作温度範囲                                  | -40 ~ +125 ℃                        |
| 温度測定範囲                                  | -50 ~ +600 ℃                        |
| アンプ出力電圧範囲                            | 0 ~ 3.3 V                           |
| 熱電対材料                                    | ガラスファイバー                     |
| 冷接点補償                                    | 環境温度測定                         |
| 熱電対温度測定精度                            | +/-2.0% (+ 2 ℃)                     |
| 熱電対温度センサーケーブル長                  | 100cm                               |
| 寸法                                         | 20mm x 40mm                         |

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

- ステップ1. 以下のものを準備します：

| Seeeduino V4.2 | Base Shield | Grove-高温センサー |
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html)|

- ステップ2. Grove-高温センサーをBase Shieldの**A0**に接続します。
- ステップ3. Base ShieldをSeeeduino-V4.2に差し込みます。
- ステップ4. USBケーブルを使用してSeeeduino-V4.2をPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/arduino_connection.jpg" /></div>

:::note
    Base Shieldを持っていない場合でも心配ありません。センサーを直接Arduinoに接続することができます。以下の表に従って接続してください。
:::

| Seeeduino | Grove-高温センサー |
|------------------|------- --|
| GND              | 黒  |
| 5V               | 赤   |
| A1               | 白  |
| A0               | 黄 |

#### ソフトウェア

- ステップ1. [Grove-高温センサーライブラリ](https://github.com/Seeed-Studio/Grove_HighTemp_Sensor/archive/master.zip)をGithubからダウンロードします。
- ステップ2. [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。
- ステップ3. 以下のコードをArduino IDEにコピーしてアップロードします。

```cpp
#include "High_Temp.h"

HighTemp ht(A1, A0);

void setup()
{
    Serial.begin(115200);
    Serial.println("grove - hight temperature sensor test demo");
    ht.begin();
}

void loop()
{
    Serial.println(ht.getThmc());
    delay(100);
}
```

- ステップ4. シリアルモニタを開き、ボーレートを115200に設定します。ここで摂氏温度が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/Htsdata.jpg" /></div>

### Raspberry Piで遊ぶ

#### ハードウェア

- ステップ1. 以下のものを準備します：

| Raspberry Pi | GrovePi_Plus | Grove - 超音波レンジャー |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html)|

- ステップ2. GrovePi_PlusをRaspberryに差し込みます。
- ステップ3. Grove-超音波レンジャーをGrovePi_Plusの**A0**ポートに接続します。
- ステップ4. USBケーブルを使用してRaspberryをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/raspberry_connection.jpg" /></div>

#### ソフトウェア

- ステップ1. [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構成します。
- ステップ2. [ファームウェアの更新](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)に従ってGrovePiの最新ファームウェアを更新します。

:::tip
このWikiでは、**~/GrovePi/**のパスを使用しています。**/home/pi/Desktop/GrovePi**ではありません。ステップ2とステップ3で同じパスを使用する必要があります。
:::

:::note
ファームウェアを更新することを強くお勧めします。一部のセンサーではエラーが発生する可能性があります。
:::

:::caution
**Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3のみ**でこのコマンドラインを使用する必要があります。
:::

- ステップ3. Githubリポジトリをクローンします。

```txt
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- ステップ4. 以下のコマンドを実行して、超音波レンジャーを使用して距離を測定します。

```txt
cd ~/GrovePi/Software/Python/grove_hightemperature_sensor
python3 high_temperature_example.py
```

以下は`grove_ultrasonic.py`のコードです。

```python
import grove_hightemperature_sensor as grovepi # ライブラリのインポート
from time import sleep # sleep関数のため
import sys # 例外処理のために必要

# Python 3で実行することを忘れないでください！！
# Python 3で実行することを忘れないでください！！
# Python 3で実行することを忘れないでください！！

def Main():
    room_temperature_pin = 15 # これはA1に相当
    probe_temperature_pin = 14 # これはA0に相当
    # センサーをA0ポートに接続する必要があります

    # HighTemperatureSensorオブジェクトをインスタンス化
    sensor = grovepi.HighTemperatureSensor(room_temperature_pin, probe_temperature_pin)

    # 無限ループ
    while True:
        # 室温を読み取る
        room_temperature = sensor.getRoomTemperature()
        # K型センサーの先端の温度も取得
        probe_temperature = sensor.getProbeTemperature()

        # フォーマットして出力
        print('[室温: {:5.2f}°C][プローブ温度: {:5.2f}°C]'.format(room_temperature, probe_temperature))
        # 次の測定まで250ms待機 - ターミナルのオーバーフローを防ぐため
        sleep(0.25)


if __name__ == "__main__":
    try:
        Main()

    # CTRL-C / CTRL-Dキーが押された場合（またはその他の中断）
    except KeyboardInterrupt:
        print('[キーボード割り込み]')
        sys.exit(0)

    # IOエラー（例：I2Cエラー）の場合
    except IOError:
        print('[IOエラー]')
        sys.exit(0)

    # 数学エラー（例：ゼロ除算 - 読み取り値によって発生する可能性あり）や
    # 値が特定の閾値を超えた場合
    # 実験してみてください
    except ValueError as e:
        print('[{}]'.format(str(e)))
        sys.exit(0)
```

- ステップ 4. ターミナル上で以下のように温度が表示されます。

```txt
pi@raspberrypi:~/GrovePi/Software/Python/grove_hightemperature_sensor $ python3 high_temperature_example.py
[室温: 20.47°C][プローブ温度: 32.19°C]
[室温: 20.47°C][プローブ温度: 32.19°C]
[室温: 20.47°C][プローブ温度: 32.19°C]
[室温: 20.47°C][プローブ温度: 32.19°C]
[室温: 20.60°C][プローブ温度: 32.19°C]
[室温: 20.60°C][プローブ温度: 32.19°C]
[室温: 20.60°C][プローブ温度: 32.19°C]
```

## FAQs

**Q1: Grove-高温センサーのキャリブレーション方法は？**

**A1:** 以下の手順に従ってください。まず、[ライブラリ](https://files.seeedstudio.com/wiki/Grove_High_Temperature_Sensor/resource/Grove_HighTemp_Sensor-master_cal.zip)をダウンロードしてください。

- ステップ 1. `getTemperature-calibration-measurement.ino` を実行して以下の情報を取得します。

```txt
10:02:17.792 -> "サンプルデータの記録に成功しました。以下のコード行をクリップボードにコピーし、関数 loop() の最初の行を置き換えてください。
10:02:17.935 ->       double TMP[]={10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29};
10:02:18.038 ->       double Real_temperature[]={10.00,20.00,30.00,40.00,50.00,60.00,70.00,80.00,90.00,100.00};
```

- ステップ 2. `getTemperature-calibration_demo.ino` に貼り付けてキャリブレーションを実行します。

- ステップ 3. `getTemperature.ino` を実行して温度を読み取ります。

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Wiki PDF をダウンロード](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove-High_Temperature_Sensor.pdf)
- **[Eagle]** [Grove - 高温センサー Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip)
- **[ライブラリ]** [高温センサーライブラリ](https://github.com/Seeed-Studio/Grove_HighTemp_Sensor)
- **[データシート]** [OPA333 PDF](http://www.ti.com/lit/ds/symlink/opa333.pdf)
- **[データシート]** [LMV358 PDF](https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Lmv358.pdf)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_High_Temperature_Sensor から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>