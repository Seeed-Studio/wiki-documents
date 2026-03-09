---
description: Grove - CO2 & Temperature & Humidity Sensor (SCD30)
title: Grove - CO2 & Temperature & Humidity Sensor (SCD30)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-CO2_Temperature_Humidity_Sensor-SCD30
sku: 101020634
last_update:
  date: 12/29/2025
  author: Brandy
createdAt: '2025-05-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/Grove-CO2_Temperature_Humidity_Sensor-SCD30/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/main.jpg" /></div>

Grove - CO2 & Temperature & Humidity Sensor (SCD30) は、Sensirion SCD30 をベースとした高精度二酸化炭素センサーです。このセンサーの測定範囲は 0 ppm-40'000 ppm で、400ppm から 10'000ppm の間で測定精度は ±(30 ppm + 3%) に達することができます。

CO2 検出のための非分散赤外線（NDIR）測定技術に加えて、SCD30 は同じセンサーモジュール上に Sensirion の湿度および温度センサーを統合しています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>


## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を LoRaWAN® センサーに簡単に変換できます。Seeed はプロトタイピングをサポートするだけでなく、堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) の SenseCAP シリーズでプロジェクトを拡張する可能性も提供します。

SenseCAP S210x シリーズの産業用センサーは、環境センシングのためのすぐに使える体験を提供します。大気質監視のためのより高い性能と堅牢性を持つ S2103 ワイヤレス CO2、温度、湿度センサーを参照してください。このシリーズには、土壌水分、気温と湿度、光強度、CO2、EC、および 8-in-1 気象ステーションのセンサーが含まれています。次の成功する産業プロジェクトのために最新の [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>SenseCAP 産業用センサー</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2103 気温・湿度・CO2</strong></a></td>
    </tr>
  </tbody>
</table>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - CO2 & Temperature & Humidity Sensor (SCD30) V1.0 | 初期版                                                                                               | 2018年12月      |

## アプリケーションアイデア

- 空気清浄機
- 環境監視
- 植物環境監視

## 特徴

- NDIR CO2 センサー技術
- 統合された温度・湿度センサー
- 最高のコストパフォーマンス
- 優れた安定性のためのデュアルチャンネル検出
- デジタルインターフェース I2C
- 低消費電力
- 超長寿命センサー（15年）

## 仕様

|パラメータ|値|
|---|---|
|供給電圧|3.3V / 5V|
|動作温度| 0 – 50℃|
|保存温度|- 40°C – 70°C|
|湿度動作条件|0 – 95 %RH|
|センサー寿命|15年|
|インターフェース|I2C|
|I2Cアドレス|0x61|
|サイズ|L: 61mm W: 42mm H: 19mm|
|重量|19.7g|
|パッケージサイズ|L: 110mm W: 70mm H: 40mm|
|総重量| 27g|

<div align="center"><b>表 1.</b><i>一般仕様</i></div>

|パラメータ|条件|値|
|---|---|----|
|CO2測定範囲||0 – 40'000 ppm|
|精度| 400ppm – 10'000ppm| ± (30 ppm + 3%)|
|再現性|400ppm – 10'000ppm|10ppm|
|応答時間|τ63%|20 s|

<div align="center"><b>表 2.</b><i>CO2 センサー仕様</i></div>

|パラメータ|条件|値|
|---|---|----|
|湿度測定範囲||0 %RH – 100 %RH|
|精度| 0 – 50°C, 0 – 100%RH| ±2 %RH|
|再現性||0.1 %RH|
|応答時間|τ63%|8 s|

<div align="center"><b>表 3.</b><i>湿度センサー仕様</i></div>

|パラメータ|条件|値|
|---|---|----|
|温度測定範囲||-40°C – 120°C|
|精度| 0 – 50°C| ±0.5°C|
|再現性||0.1°C|
|応答時間|τ63%|> 2 s|

<div align="center"><b>表 4.</b><i>温度センサー仕様</i></div>

|パラメータ|条件|値|
|---|---|----|
|平均電流|更新間隔 2 s|19 mA|
|最大電流| 測定中| 75 mA|
|エネルギー消費|1回の測定|120 mJ|

<div align="center"><b>表 5.</b><i>電気的仕様</i></div>

## ハードウェア概要

<div align="center">
<figure>
  <p style={{textAlign: 'center' }}><a href="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" /></a></p>
</figure>
</div>

## サポートされているプラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## 入門ガイド

### Arduino で遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove-CO2 & T&H SCD30|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>
|[今すぐ入手](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ入手](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

>さらに、Seeeduino V4.2 と Baseshield の組み合わせに相当する新しい [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html) もご検討ください。

:::note
  **1** USB ケーブルは優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に 4 本の線があるUSB ケーブルを使用してください。2 本の線のケーブルではデータを転送できません。お持ちの線について確信がない場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) をクリックして購入できます

  **2** 各 Grove モジュールには購入時に Grove ケーブルが付属しています。Grove ケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) をクリックして購入できます。
:::

**ハードウェア接続**

- **ステップ 1.** Grove - CO2 & Temperature & Humidity Sensor (SCD30) を Base Shield の **I2C** ポートに接続します。

- **ステップ 2.** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ 3.** USB ケーブルで Seeeduino を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/connect.png" /></div>

#### ソフトウェア

:::caution
        Arduino を初めて使用する場合は、開始前に [Arduino 入門ガイド](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

- **ステップ 1.** Github から [Seeed SCD30 ライブラリ](https://github.com/Seeed-Studio/Seeed_SCD30) をダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して Arduino 用ライブラリをインストールします。

- **ステップ 3.** Arduino IDE を再起動します。サンプルを開きます。以下の3つの方法で開くことができます：
    a. Arduino IDE で直接開く場合は、パス：**File --> Examples -->Grove_scd30_co2_sensor-->SCD30_Example** から開いてください。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c1.jpg" /></div>

    b. コンピュータで開く場合は、**XXXX\Arduino\libraries\Seeed_SCD30-master\examples\SCD30_Example** フォルダにある **SCD30_Example.ino** をクリックしてください。**XXXX** は Arduino IDE をインストールした場所です。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c3.jpg" /></div>

    c. または、コードブロックの右上角にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードを Arduino IDE の新しいスケッチにコピーすることもできます。

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
        ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルに適用できない場合があるため、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::tip
  すべてがうまくいけば、Grove - CO2 & Temperature & Humidity Sensor (SCD30) の生データをシリアルモニターから読み取ることができるはずです。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c2.jpg" /></div>

## キャリブレーションと設置

実際のシナリオでより正確な結果を得るために、以下の2つの点に注意する必要があります：  

- 1. 正しい設置  
- 2. キャリブレーション

### 設置

正しい設置については、[SCD30 Design-In Guidelines](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf)を参照してください。

### キャリブレーション

初回起動時には、アルゴリズムがASCの初期パラメータセットを見つけるために最低7日間の期間が必要です。センサーは毎日少なくとも1時間は新鮮な空気にさらされる必要があります。また、その期間中、センサーは電源から切断してはいけません。そうしないと、キャリブレーションパラメータを見つける手順が中止され、最初からやり直す必要があります。正常に計算されたパラメータはSCD30の不揮発性メモリに保存され、再起動後も以前に見つけたASCのパラメータが保持されます。キャリブレーションの詳細については、[Interface Description Sensirion SCD30 Sensor Module](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)を参照してください。

SCD30ライブラリフォルダには2つのinoサンプルがあり、`SCD30_auto_calibration.ino`を実行してキャリブレーションを開始できます。

### Raspberry Pi で使用する 

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove-CO2 & T&H SCD30 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" alt="pir" width={600} height="auto" /></p>|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

- **ステップ 2**. Grove Base Hat を Raspberry に接続します。
- **ステップ 3**. Grove-CO2 を Base Hat の **I2C** ポートに接続します。
- **ステップ 4**. Raspberry Pi を USB ケーブルで PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/C02.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note
     **Raspberrypi OS >= Bullseye を搭載した Raspberry Pi** を使用している場合は、このコマンドラインを **Python3 でのみ** 使用する必要があります。
:::

- **ステップ 1**. [Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を設定します。
- **ステップ 2**. 関連する仮想環境に入ります。

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

- 以下は grove_co2_scd30.py コードを確認するためのものです。

```
less grove_co2_scd30.py
```

```python

from typing import NoReturn
from grove.i2c import Bus
import struct
import time


class GroveCo2Scd30(object):
    __COMMAND_TRIGGER_CONTINUOUS_MEASUREMENT = 0x0010
    __COMMAND_STOP_CONTINUOUS_MEASUREMENT = 0x0104
    __COMMAND_SET_MEASUREMENT_INTERVAL = 0x4600
    __COMMAND_GET_DATA_READY_STATUS = 0x0202
    __COMMAND_READ_MEASUREMENT = 0x0300
    __COMMAND_ACTIVATE_ASC = 0x5306
    __COMMAND_SET_FRC = 0x5204
    __COMMAND_SET_TEMPRATURE_OFFSET = 0x5403
    __COMMAND_ALTITUDE_COMPENSATION = 0x5102
    __COMMAND_READ_FIRMWARE_VERSION = 0xd100
    __COMMAND_SOFT_RESET = 0xd304

    def __init__(self, address=0x61, bus=1):
        self.address = address
        self.bus = Bus(bus)

        self.set_measurement_interval(2)
        self.trigger_continuous_measurement()

    @staticmethod
    def _calc_crc(data: list) -> int:
        crc = 0xff

        for d in data:
            crc ^= d

            for _ in range(8):
                if crc & 0x80:
                    crc = ((crc << 1) ^ 0x31) & 0xff
                else:
                    crc = (crc << 1) & 0xff

        return crc

    def _write(self, cmd: int, data: list):
        write_data = list(struct.pack(">H", cmd))
        if data is not None:
            for d in data:
                write_data.extend(struct.pack(">H", d))
                write_data.append(GroveCo2Scd30._calc_crc(struct.pack(">H", d)))

        write_msg = self.bus.msg.write(self.address, write_data)
        self.bus.i2c_rdwr(write_msg)

    def _read(self, address: int, data_number: int) -> list:
        write_data = list(struct.pack(">H", address))

        write_msg = self.bus.msg.write(self.address, write_data)
        self.bus.i2c_rdwr(write_msg)

        read_msg = self.bus.msg.read(self.address, 3 * data_number)
        self.bus.i2c_rdwr(read_msg)

        result = []
        for i in range(data_number):
            d = read_msg.buf[i*3:i*3+2]
            if GroveCo2Scd30._calc_crc(d) != read_msg.buf[i*3+2][0]:
                raise ValueError("CRC mismatch")

            result.append(struct.unpack(">H", d)[0])

        return result

    def trigger_continuous_measurement(self, pressure: int = 0):
        self._write(self.__COMMAND_TRIGGER_CONTINUOUS_MEASUREMENT, [pressure])

    def stop_continuous_measurement(self):
        self._write(self.__COMMAND_STOP_CONTINUOUS_MEASUREMENT, None)

    def set_measurement_interval(self, interval: int):
        self._write(self.__COMMAND_SET_MEASUREMENT_INTERVAL, [interval])

    def get_measurement_interval(self) -> int:
        data = self._read(self.__COMMAND_SET_MEASUREMENT_INTERVAL, 1)

        return data[0]

    def get_data_ready_status(self) -> bool:
        data = self._read(self.__COMMAND_GET_DATA_READY_STATUS, 1)

        return True if data[0] == 1 else False

    def read_measurement(self) -> tuple:
        data = self._read(self.__COMMAND_READ_MEASUREMENT, 6)

        data_bytes = struct.pack(">HHHHHH", data[0], data[1], data[2], data[3], data[4], data[5])
        data_floats = struct.unpack(">fff", data_bytes)
        co2 = data_floats[0]
        temp = data_floats[1]
        humi = data_floats[2]

        return co2, temp, humi

    def set_forced_recalibration(self, co2: float):
        self._write(self.__COMMAND_SET_FRC, [int(co2)])

    def set_automatic_self_calibration(self, activate: bool):
        self._write(self.__COMMAND_ACTIVATE_ASC, [1 if activate else 0])

    def get_automatic_self_calibration(self) -> bool:
        data = self._read(self.__COMMAND_ACTIVATE_ASC, 1)

        return True if data[0] == 1 else False

    def set_temperature_offset(self, offset: float):
        self._write(self.__COMMAND_SET_TEMPRATURE_OFFSET, [int(offset * 100)])

    def get_temperature_offset(self) -> float:
        data = self._read(self.__COMMAND_SET_TEMPRATURE_OFFSET, 1)

        return float(data[0]) / 100

    def set_altitude_compensation(self, altitude: int):
        self._write(self.__COMMAND_ALTITUDE_COMPENSATION, [altitude])

    def get_altitude_compensation(self) -> int:
        data = self._read(self.__COMMAND_ALTITUDE_COMPENSATION, 1)

        return data[0]

    def read(self) -> tuple:
        if not self.get_data_ready_status():
            return None

        return self.read_measurement()


def main() -> NoReturn:
    sensor = GroveCo2Scd30()

    while True:
        if sensor.get_data_ready_status():
            co2, temperature, humidity = sensor.read()
            print(f"CO2 concentration is {co2:.1f} ppm")
            print(f"Temperature in Celsius is {temperature:.2f} C")
            print(f"Relative Humidity is {humidity:.2f} %")

        time.sleep(1)


if __name__ == "__main__":
    main()
```
- このコードを実行します
```
python grove_co2_scd30.py

```

すべてが順調に進めば、以下の現象が見られます。😄

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/co2_result.png" alt="pir" width={600} height="auto" /></p>






### Wio Terminal で遊ぶ（ArduPy）

#### ハードウェア

- **ステップ 1.** 以下のものを準備します：

| Wio Terminal | Grove-CO2 & T&H SCD30 |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

- **ステップ 2.** Grove-CO2 & T&H SCD30 を Wio Terminal の **I2C** Grove ポートに接続します。

- **ステップ 3.** USB Type-C ケーブルで Wio Terminal を PC に接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/WT-SCD30.png"/></div>

#### ソフトウェア

- **ステップ 1.** [**ArduPy 入門ガイド**](https://wiki.seeedstudio.com/ja/ArduPy/) に従って、Wio Terminal で ArduPy 開発環境を設定します。

- **ステップ 2.** ArduPy ファームウェアが Wio Terminal にフラッシュされていることを確認します。詳細については、[**こちら**](https://wiki.seeedstudio.com/ja/ArduPy/#ardupy-aip-cli-getting-started) を参照してください。

```sh
aip install Seeed-Studio/seeed-ardupy-scd30
aip build
aip flash
```

- **ステップ 3.** 以下のコードをコピーして `ArduPy-scd30.py` として保存します：

```python
from arduino import grove_scd30
from machine import LCD
from machine import Sprite
import time

scd30 = grove_scd30()
lcd = LCD()
spr = Sprite(lcd) # Create a buff

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

- **ステップ 4.** `ArduPy-scd30.py` を分かる場所に保存します。以下のコマンドを実行し、`<YourPythonFilePath>` を `ArduPy-scd30.py` の場所に**置き換えて**ください。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"
```

- **ステップ 5.** 以下のように、ターミナルに 3 つのデータ値が表示され、Wio Terminal の LCD 画面にも表示されます。

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

- **[ZIP]** [Grove - CO2 & Temperature & Humidity Sensor (SCD30) 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip)
- **[PDF]** [SCD30 設計ガイドライン](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf)
- **[PDF]** [SCD30 データシート](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Datasheet.pdf)
- **[PDF]** [SCD30 インターフェース説明書](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

