---
description: Grove - 赤外線温度センサーアレイ(AMG8833)
title: Grove - 赤外線温度センサーアレイ(AMG8833)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Infrared_Temperature_Sensor_Array-AMG8833
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/main.jpg" /></div>

Grove - 赤外線温度センサーアレイ (AMG8833) は、先進的なMEMS技術に基づいた高精度赤外線アレイセンサーです。このセンサーは、2次元エリアの温度検出をサポートし、8 × 8 (64ピクセル) の検出が可能で、最大検出距離は7メートルです。

このセンサーには、ArduinoおよびRaspberry Pi向けのデモを提供しています。これにより、独自のサーマルカメラを作成するのに最適なモジュールとなります。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 2次元エリアの温度検出: 8 × 8 (64ピクセル)
- I2C出力 (温度値出力の能力)
- 高精度
- 長距離検出

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|測定対象の温度範囲|0 °C ～ 80 °C +32 °F ～ +176 °F|
|動作温度範囲|0 °C ～ 80 °C +32 °F ～ +176 °F|
|保存温度範囲|−20 °C ～ 80 °C –4 °F ～ +176 °F|
|温度精度|標準 ±2.5 °C ±4.5 °F|
|視野角|標準 60 °|
|光軸ギャップ|標準 ±5.6 °以内|
|ピクセル数|64 (縦8 × 横8 マトリックス)|
|外部インターフェース| I2C|
|I2Cアドレス|0x68(デフォルト) \\  0x69(オプション)|

## 主な用途

- 高機能家庭用電化製品 (電子レンジやエアコン)
- オフィスでの省エネ (空調/照明制御)
- デジタルサイネージ
- 自動ドア/エレベーター

## ハードウェア概要

### ピンアウト

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pin_out.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pin_out_back.jpg" /></div>

### 回路図

**電源**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/schematic_1.jpg" /></div>

AMG8833の標準電圧は3.3Vであるため、安定した3.3Vを供給するために[XC6206P33](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf)チップを使用しています。XC6206P33の入力範囲は1.8Vから6.0Vであるため、このモジュールはArduinoで3.3Vおよび5Vの両方で使用できます。

**双方向レベルシフター回路**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/schematic_2.jpg" /></div>

これは、I2Cバスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。このセンサーのI<sup>2</sup>Cバスは3.3Vを使用しますが、ArduinoのI<sup>2</sup>Cバスが5Vを使用する場合、この回路が必要になります。上記の回路図では、**Q6**および**Q5**はNチャネルMOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)であり、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照してください。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield |赤外線温度センサーアレイ |2.8 TFT タッチシールド V2.0|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/2.8touch%20shieldv2.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - 赤外線温度センサーアレイ (AMG8833) をGrove-Base Shieldのポート **I2C** に接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** 2.8 TFT タッチシールド V2.0をGrove - Base Shieldに差し込みます。

- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/connect_1.jpg" /></div>

:::note
        Grove Base Shieldがない場合でも、以下のようにこのモジュールをSeeeduinoに直接接続することができます。
:::

| Seeeduino      |  Groveケーブル       | Grove - 赤外線温度センサーアレイ (AMG8833) |
|--------------- |--------------------|-----|
| GND            | 黒                | GND |
| 5Vまたは3.3V   | 赤                | VCC |
| SDA            | 白                | SDA |
| SCL            | 黄                | SCL |

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [Seeed_AMG8833](https://github.com/Seeed-Studio/Seeed_AMG8833) ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。以下の3つの方法で例を開くことができます：
    1. Arduino IDEで直接開く：**File --> Examples --> Grove IR Matrix Temperature sensor AMG8833 --> TFT_screen_demo** のパスをたどります。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/path_1.jpg" /></div>

    2. コンピュータ上で開く：**TFT_screen_demo.ino** をクリックします。このファイルは **XXXXArduino\libraries\Seeed_AMG8833-master\examples\TFT_screen_demo** フォルダ内にあります。**XXXX** はArduino IDEをインストールした場所です。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/path_2.jpg" /></div>

3. または、コードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードを Arduino IDE の新しいスケッチにコピーすることもできます。

```cpp
#include <stdint.h>
#include <TFTv2.h>
#include <SPI.h>

#include "Seeed_AMG8833_driver.h"


AMG8833 sensor;

#define TFT_PIXELS_NUM   30

void parse_int_status(u8* status)
{
    u8 val=0;
    for(u32 i=0;i<8;i++)
    {
        if(status[i])
        {
            for(u32 j=0;j<8;j++)
            {
                if(status[i]&((1<<j)))
                {
                    Serial.print("ピクセル ");
                    Serial.print(8*i+j+1);
                    Serial.println(" の割り込みが発生しました!!!");
                }
            }
        }
    }
}

void print_status(u8* status)
{
    for(u32 i=0;i<8;i++)
    {
        Serial.print(status[i],HEX);
        Serial.print("  ");

    }
    Serial.println("  ");
}




void setup()
{
    Serial.begin(115200);
    sensor.init();
    TFT_BL_ON;
    /*2.8インチ TFTスクリーン。URL: https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html*/
    Tft.TFTinit();
}



void loop()
{
    u8 val=0;
    float pixels_temp[PIXEL_NUM]={0};
    u16 color[PIXEL_NUM]={0};
    /*温度を読み取る*/
    sensor.read_pixel_temperature(pixels_temp);
    /*異なる温度に応じて異なる色を設定する*/
    for(u32 i=0;i<PIXEL_NUM;i++)
    {
        if(pixels_temp[i]<29)
        {
            color[i]=BLUE;
        }
        else if((pixels_temp[i]>=29)&&(pixels_temp[i]<30))
        {
            color[i]=GREEN;
        }
        else if((pixels_temp[i]>=30)&&(pixels_temp[i]<31))
        {
            color[i]=YELLOW;
        }
        else if((pixels_temp[i]>=31)&&(pixels_temp[i]<33))
        {
            color[i]=0xfd00;
        }
        else
        {
            color[i]=RED;
        }
    }
    /*TFTスクリーンを使用して表示する*/
    for(u32 i=0;i<PIXEL_NUM;i++)
    {
        Tft.fillScreen(TFT_PIXELS_NUM*(i%8),TFT_PIXELS_NUM*(i%8+1),TFT_PIXELS_NUM*(8-i/8),TFT_PIXELS_NUM*(7-i/8),color[i]);
    }
}

```

:::caution
        ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::tip
    すべてが正常に動作すれば、TFTスクリーンに温度マップが表示されます。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/result_arduino.gif" /></div>

### Raspberry Piで遊ぶ

:::note
        初めてRaspberry Piを使用する場合は、[Raspberry Piの始め方](https://www.raspberrypi.org/documentation/)を参照してください。
:::

#### ハードウェア

**必要な材料**

| Raspberry Pi |Grove Base Hat for Raspberry Pi|赤外線温度センサーアレイ |5インチ 800x480 静電容量式タッチスクリーン|
|--------------|-------------|-----------------|-------|
|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grove_Pi_hat.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/thumbnail.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pi_display.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3184.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/5-inch-800x480-Capacitive-TouchScreen-p-2923.html" target="_blank">今すぐ購入</a>|

:::tip
Piスクリーンがない場合はPCモニターを使用するか、[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)を使用してリモートで結果を表示することができます。
:::

- **ステップ1.** Grove - 赤外線温度センサーアレイ (AMG8833) を Grove Base Hat for Raspberry Pi の **I2C** ポートに接続します。

- **ステップ2.** Grove Base Hat for Raspberry Pi を Raspberry Pi に差し込みます。

- **ステップ3.** 5インチ 800x480 静電容量式タッチスクリーンをHDMIケーブルでRaspberry Piに接続します。

- **ステップ4.** Raspberry PiをマイクロUSBケーブルでPCに接続し、別のマイクロUSBケーブルで5インチ 800x480 静電容量式タッチスクリーンに電源を供給します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/connect_2.jpg" /></div>

#### ソフトウェア

- **ステップ1.** Raspberry PiのI2Cインターフェースを開きます。ターミナルを開き、以下のコマンドを入力します。

```python
sudo raspi-config
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_1.png" /></div>

- **ステップ2.** 上記の画像が表示されたら、**Interfacing Options** を選択し、次に **I2C** を選択してI2Cインターフェースを有効にします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_2.jpg" /></div>

- **ステップ3.** 完了したら、以下のコマンドを使用して確認できます。

```python
sudo i2cdetect -y 1
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_3.jpg" /></div>

I2Cアドレスが表示されます。これはRaspberry Piがセンサーを検出したことを意味します。表示されない場合は、ステップ1〜3を再度実行してください。では、次に進みましょう。

- **ステップ4.** ターミナルで以下のコマンドを入力して関連する依存関係をインストールします。

```python
sudo apt-get update
sudo apt-get install -y build-essential python-pip python-dev python-smbus git
sudo apt-get install -y python-scipy python-pygame
sudo pip install colour
```

- **ステップ 5.** Seeed AMG8833 Pythonライブラリをダウンロードします。

```python
git clone https://github.com/Seeed-Studio/Seeed_AMG8833_Raspberry_Python.git
```

- **ステップ 6.** AMG8833フォルダに移動し、デモを実行します。

```python
pi@raspberrypi:~ $ cd Seeed_AMG8833_Raspberry_Python/
pi@raspberrypi:~/Seeed_AMG8833_Raspberry_Python $ ls
driver.py   README.md         Seeed_AMG8833.pyc
driver.pyc  Seeed_AMG8833.py  thermal_cam.py
pi@raspberrypi:~/Seeed_AMG8833_Raspberry_Python $ python thermal_cam.py
```

:::tip
すべてが正常に動作していれば、以下のような結果が表示されます。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/result_pi.gif" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - 赤外線温度センサーアレイ (AMG8833) Eagleファイル](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip)

- **[Zip]** [Seeed AMG8833 Arduinoライブラリ](https://github.com/Seeed-Studio/Seeed_AMG8833/archive/master.zip)

- **[Zip]** [Seeed AMG8833 Pythonライブラリ](https://github.com/Seeed-Studio/Seeed_AMG8833_Raspberry_Python/archive/master.zip)

- **[PDF]** [AMG8833 データシート](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/AMG88.pdf)

- **[PDF]** [XC6206 データシート](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## プロジェクト

この製品の紹介動画と簡単なデモです。ぜひ試してみてください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NG0E-qs8zgQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>