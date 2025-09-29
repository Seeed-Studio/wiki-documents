---
description: Grove - CO2 & 温度 & 湿度センサー (SCD41)
title: Grove - CO2 & 温度 & 湿度センサー (SCD41)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-CO2_&_Temperature_&_Humidity_Sensor-SCD41
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/101020952_Preview-07.png" /></div>

Grove - CO2 & 温度 & 湿度センサー - SCD41 は、Sensirion によって製造された小型で高性能なモジュールです。このセンサーは、温度、圧力、湿度、CO2 を同時に測定できる多機能センサーです。SCD41 モジュールをベースにしており、GPS、IoT デバイス、またはこれら4つのパラメータを必要とする他のデバイスで使用することができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 複数測定のための3-in-1
- 低消費電力
- 広い測定範囲
- I2C インターフェース
- 広い電源電圧範囲

## 仕様

|項目|値|
|---|---|
|動作電圧|2.4V~5V|
|動作範囲|-10~+60℃; 0-100% r.H.; 0-40,000ppm|
| I2C アドレス | 0x62 |

## ハードウェア概要

### ピンマップ

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/1111.jpg" /></div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | ベースシールド | CO2 & 温度 & 湿度センサー - SCD41 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/thumbnail.png" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680)をGrove-Base Shieldのポート**I2C**に接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/2222.jpg" /></div>

:::note
Grove Base Shieldがない場合でも、以下のようにこのモジュールをSeeeduinoに直接接続することができます。
:::

| Seeeduino     |  Grove-BME680           |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| SDA           | 白                     |
| SCL           | 黄                     |

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ 1.** [arduino-i2c-scd4x](https://github.com/Sensirion/arduino-i2c-scd4x)ライブラリと[arduino-core](https://github.com/Sensirion/arduino-core)依存関係をGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。**File --> Examples --> Sensirion I2c SCD4x --> exampleUsage**のパスを通じて**Sensirion I2c SCD4x**の例を開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/6267778524616.png" /></div>

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDEの**シリアルモニタ**を開きます。**Tool-> Serial Monitor**をクリックするか、++ctrl+shift+m++キーを同時に押します。すべてが正常に動作していれば、結果が表示されます。

結果は以下のようになります：

```c
Serial: 0x6A565F073B88
Waiting for first measurement... (5 sec)
Co2:868 Temperature:33.08 Humidity:49.40
Co2:845 Temperature:32.72 Humidity:50.13
Co2:852 Temperature:32.28 Humidity:51.54
```

:::note
- 安定して正確な値を得るには、Arduinoを約2時間コードを実行させる必要があります。その後の結果はより信頼性が高くなります。
:::

## RaspberryPiでの使用

**必要な材料**

| Raspberry Pi | Grove Base Hat for Raspberry Pi | Grove - OLED Display 1.12" V3.0 |
|--------------|---------------------------------|----------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/thumbnail.png" /></div>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|

### RaspberryPiの準備

#### I2C接続

- **ステップ1.** Grove - CO2 & Temperature & Humidity Sensor - SCD41をGrove - Base Hatの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base HatをRaspberryPiに接続します。

- **ステップ3.** RaspberryPiをシリアルまたはSSHを使用してPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/9dfb870f961902feae92f4bde5bdeaf.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/GPIO-Pinout-Diagram.png" /></div>

#### ソフトウェア

- **ステップ1.** RaspberryPiでI2Cを有効化する

```shell
sudo apt-get install -y i2c-tools
sudo raspi-config
```

以下の画像に従って、RaspberryPiでI2CとSPIを有効化してください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" /></div>

その後、RaspberryPiを再起動します。

```shell
sudo reboot
```

- **ステップ2.** 必要なライブラリをインストールする

```shell
sudo apt-get install wget gcc make unzip -y
```

WiringPiライブラリをインストールする

*WiringPiを使用する場合、バージョン2.52に更新する必要があります。このライブラリは更新されない可能性があります。他のライブラリを推奨します。*

```shell
cd
sudo apt-get install wiringpi
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
gpio -v
```

bcm2835をインストールする

```shell
cd
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.60.tar.gz
tar zxvf bcm2835-1.60.tar.gz 
cd bcm2835-1.60/
sudo ./configure
sudo make && sudo make check && sudo make install
```

最新のライブラリや詳細情報については、以下のウェブサイトを参照してください：[bcm2835](http://www.airspayce.com/mikem/bcm2835/)

- **ステップ3.** [Sensirion GitHubページ](https://github.com/Sensirion/raspberry-pi-i2c-scd4x/tags)からドライバをダウンロードし、RaspberryPi上で`.zip`を解凍します。

- **ステップ4.** ドライバをコンパイルする

**1**. ターミナルを開く

**2**. ドライバディレクトリに移動する（例: `cd ~/raspberry-pi-i2c-scd4x`）

**3**. `make`コマンドを実行してドライバをコンパイルする

出力:

```shell
rm -f scd4x_i2c_example_usage
cc -Os -Wall -fstrict-aliasing -Wstrict-aliasing=1 -Wsign-conversion -fPIC -I. -o scd4x_i2c_example_usage  scd4x_i2c.h scd4x_i2c.c sensirion_i2c_hal.h sensirion_i2c.h sensirion_i2c.c \
sensirion_i2c_hal.c sensirion_config.h sensirion_common.h sensirion_common.c scd4x_i2c_example_usage.c
```

- **ステップ5.** 接続されたセンサーをテストする

ドライバをコンパイルした同じディレクトリで`./scd4x_i2c_example_usage`を実行します。

出力:

```c
serial: 0xbff79f073b51
CO2: 799
Temperature: 20.92
Humidity: 35.95
CO2: 900
Temperature: 20.92
Humidity: 36.47
CO2: 926
Temperature: 20.81
Humidity: 36.85
...
```

詳細情報については、[Sensirion/raspberry-pi-i2c-scd4x on GitHub](https://github.com/Sensirion/raspberry-pi-i2c-scd4x)を参照してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Sensirion CO2センサー SCD4x データシート](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/Sensirion_CO2_Sensors_SCD4x_Datasheet.pdf)
- **[STEP]** [Sensirion CO2センサー SCD4x のSTEPファイル](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/Sensirion_CO2_Sensors_SCD4x_STEP_file.step)
- **[ZIP]** [Grove - CO2 & 温度 & 湿度センサー - SCD41 ボードファイル](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/SCH&PCB.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なるニーズや好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>