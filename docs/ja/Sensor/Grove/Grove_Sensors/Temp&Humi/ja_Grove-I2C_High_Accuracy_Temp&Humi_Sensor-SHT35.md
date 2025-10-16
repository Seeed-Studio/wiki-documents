---
description: Grove - I2C 高精度温湿度センサー(SHT35)
title: Grove - I2C 高精度温湿度センサー(SHT35)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-I2C_High_Accuracy_Temp%26Humi_Sensor-SHT35
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/main.jpg" /></div>

Grove - I2C 高精度温湿度センサー(SHT35)は、Sensirion社の次世代温湿度センサーであるSHT3x-DISをベースにしています。このセンサーは、Sensirion社の新しい湿度および温度プラットフォームの中核をなす新しいCMOSens®センサーチップを採用しています。SHT3x-DISは、前世代と比較してインテリジェンス、信頼性、精度仕様が向上しています。その機能には、強化された信号処理、2つの異なるユーザー選択可能なI2Cアドレス、および最大1 MHzの通信速度が含まれます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのための高性能で堅牢なS2101ワイヤレス温湿度センサーをご参照ください。このシリーズには、土壌水分、空気温湿度、光強度、CO2、EC、8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

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
          <strong>S2101 空気温湿度</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特徴

- ±1.5 %RH および ±0.1 °C の高精度
- 完全に校正済み、線形化済み、温度補償されたデジタル出力
- 最大1MHzの通信速度と2つのユーザー選択可能なアドレスを備えたI2Cインターフェース
- 非常に高速な起動および測定時間

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|指定温度範囲|-40°C ～ +125°C|
|温度分解能|0.01°C|
|温度精度許容差|±0.1 °C|
|指定湿度範囲|0%RH ～ +100%RH|
|湿度分解能|0.01%RH|
|湿度精度許容差|±1.5 %RH|
|インターフェース|I2C|
|I2Cアドレス|0x45（デフォルト） / 0x44（オプション）|

## 応用例

- 産業用冷凍庫および冷蔵庫
- 食品加工
- パーソナルコンピュータおよびサーバー
- PC周辺機器
- 家電製品
- ハンドヘルド/ポータブルデバイス

## ハードウェア概要

### ピン配置

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/pin_out.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/pin_out_back.jpg" /></div>

### 回路図

**電源**

このモジュールは **SHT35** をベースにしており、このチップの入力電圧範囲は2.15V～5.5Vです。そのため、Arduinoの3.3Vピンまたは5Vピンのどちらでもこのモジュールに電源を供給できます。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove-SHT35 センサー |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが破損する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)から購入できます。

**2** Groveモジュールを購入すると、Groveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)から購入できます。
:::

- **ステップ1.** Grove - I2C 高精度温湿度センサー(SHT35)をGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/connect.jpg" /></div>

:::note
Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino      |  Groveケーブル       | Grove - I2C 高精度温湿度センサー(SHT35) |
|--------------- |--------------------|-----|
| GND            | 黒                 | GND |
| 5Vまたは3.3V   | 赤                 | VCC |
| SDA            | 白                 | SDA |
| SCL            | 黄                 | SCL |

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ1.** [Grove-SHT35 センサー](https://github.com/Seeed-Studio/Seeed_SHT35)ライブラリをGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。以下の3つの方法のいずれかでサンプルを開きます：
    1. Arduino IDEで直接開く：**File --> Examples --> Grove Temperature sensor SHT35 --> basic_demo**のパスをたどります。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/path.jpg" /></div>

    2. コンピュータ上で開く：**XXXX\Arduino\libraries\Seeed_SHT35-master\examples\basic_demo**フォルダ内の**basic_demo.ino**をクリックします（**XXXX**はArduino IDEをインストールした場所です）。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/path_1.jpg" /></div>

    3. または、以下のコードブロックの右上にあるアイコン<div><img width="{1000}" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" /></div>をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーします。

```cpp
#include "Seeed_SHT35.h"


/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SDAPIN  20
  #define SCLPIN  21
  #define RSTPIN  7
  #define SERIAL SerialUSB
#else
  #define SDAPIN  A4
  #define SCLPIN  A5
  #define RSTPIN  2
  #define SERIAL Serial
#endif

SHT35 sensor(SCLPIN);


void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("シリアル開始!!");
    if(sensor.init())
    {
      SERIAL.println("センサーの初期化に失敗しました!!!");
    }
    delay(1000);
}


void loop()
{
     u16 value=0;
    u8 data[6]={0};
    float temp,hum;
    if(NO_ERROR!=sensor.read_meas_data_single_shot(HIGH_REP_WITH_STRCH,&temp,&hum))
    {
      SERIAL.println("温度の読み取りに失敗しました!!");
      SERIAL.println("   ");
      SERIAL.println("   ");
      SERIAL.println("   ");
    }
    else
    {
      SERIAL.println("結果======>");
      SERIAL.print("温度 =");
      SERIAL.println(temp);

      SERIAL.print("湿度 =");
      SERIAL.println(hum);

      SERIAL.println("   ");
      SERIAL.println("   ");
      SERIAL.println("   ");
    }
    delay(1000);
}
```

:::caution
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルに適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ5.** Arduino IDEの**シリアルモニタ**を開きます。**Tool-> Serial Monitor**をクリックするか、++ctrl+shift+m++キーを同時に押します。ボーレートを**115200**に設定します。

:::tip
すべてが正常に動作している場合、シリアルモニタを開くと以下のように表示される可能性があります：
:::

```cpp
シリアル開始!!
=>
温度 =24.10
湿度 =51.09


結果======>
温度 =24.10
湿度 =50.96
   
      
結果======>
温度 =24.10
湿度 =51.04
   
   
結果======>
温度 =24.11
湿度 =51.09
```

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi| Grove - SHT35 センサー |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html)|

- **ステップ 2**. Grove Base Hat を Raspberry Pi に接続します。
- **ステップ 3**. Grove - I2C 高精度温湿度センサー (SHT35) を Base Hat の **I2C** ポートに接続します。
- **ステップ 4**. Raspberry Pi を USB ケーブルを使って PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/img/With_Hat.jpg" /></div>

#### ソフトウェア

- **ステップ 1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を構成します。
- **ステップ 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **ステップ 3**. 以下のコマンドを実行してコードを動かします。

```
cd grove.py/grove
python grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py 

```

以下は `grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py` のコードです。

```python

import time
from grove.i2c import Bus

def CRC(data):
  crc = 0xff
  for s in data:
    crc ^= s
    for i in range(8):
      if crc & 0x80:
        crc <<= 1
        crc ^= 0x131
      else:
        crc <<= 1
  return crc

class GroveTemperatureHumiditySensorSHT3x(object):

    def __init__(self, address=0x45, bus=None):
        self.address = address

        # I2C バス
        self.bus = Bus(bus)

    def read(self):
        # 高精度、クロックストレッチング無効
        self.bus.write_i2c_block_data(self.address, 0x24, [0x00])

        # 測定時間 < 16 ms
        time.sleep(0.016)

        # 6 バイトを読み取る
        # 温度 MSB、温度 LSB、温度 CRC、湿度 MSB、湿度 LSB、湿度 CRC
        data = self.bus.read_i2c_block_data(0x45, 0x00, 6)
        temperature = data[0] * 256 + data[1]
        celsius = -45 + (175 * temperature / 65535.0)
        humidity = 100 * (data[3] * 256 + data[4]) / 65535.0
        if data[2] != CRC(data[:2]):
            raise RuntimeError("温度 CRC 不一致")
        if data[5] != CRC(data[3:5]):
            raise RuntimeError("湿度 CRC 不一致")
        return celsius, humidity

def main():
    sensor = GroveTemperatureHumiditySensorSHT3x()
    while True:
        temperature, humidity = sensor.read()

        print('温度 (摂氏): {:.2f} C'.format(temperature))
        print('相対湿度: {:.2f} %'.format(humidity))

        time.sleep(1)

if __name__ == "__main__":
  main()

```

:::tip
    すべてが正常に動作すれば、以下のような結果が表示されます。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py 
温度 (摂氏): 20.47 C
相対湿度: 40.28 %
温度 (摂氏): 20.47 C
相対湿度: 40.47 %
温度 (摂氏): 20.47 C
相対湿度: 40.70 %
温度 (摂氏): 20.43 C
相対湿度: 40.70 %
温度 (摂氏): 20.41 C
相対湿度: 40.60 %
^CTraceback (most recent call last):
  File "grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py", line 89, in <module>
    main()
  File "grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py", line 86, in main
    time.sleep(1)
KeyboardInterrupt

```

このプログラムを終了するには、++ctrl+c++ を押すだけです。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/res/Grove%20-%20I2C%20High%20Accuracy%20Temp%26Humi%20Sensor%20(SHT35).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - I2C 高精度温湿度センサー (SHT35) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/res/Grove%20-%20I2C%20High%20Accuracy%20Temp%26Humi%20Sensor%20(SHT35).zip)

- **[Zip]** [Seeed SHT35 ライブラリ](https://github.com/Seeed-Studio/Seeed_SHT35/archive/master.zip)

- **[PDF]** [SHT3x-DIS データシート](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/res/Datasheet%20SHT3x-DIS.pdf)

## プロジェクト

**Google Map を使用した輸送データの可視化**：Wio LTE cat.1 を使用して輸送 GPS およびその他の情報を監視します。コールドチェーンの場合、GPS 位置情報と温度・湿度を一緒に監視できます。自転車の場合、GPS 位置情報と心拍数を一緒に監視できます。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/SeeedStudio/transportation-data-visualization-with-google-map-517ce4/embed" width={350} />

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>