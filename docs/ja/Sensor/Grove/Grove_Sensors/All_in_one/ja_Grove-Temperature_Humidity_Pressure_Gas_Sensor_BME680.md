---
description: Grove - 温度・湿度・気圧・ガスセンサー(BME680)
title: Grove - 温度・湿度・気圧・ガスセンサー(BME680)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.webp
slug: /ja/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680
last_update:
  date: 05/15/2025
  author: Priyanshu Roy
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" /></div>

Grove-温度・湿度・気圧・ガスセンサー(BME680)は、温度、気圧、湿度、ガスを同時に測定できる多機能センサーです。このセンサーはBME680モジュールをベースにしており、GPS、IoTデバイス、またはこれら4つのパラメータを必要とする他のデバイスで使用することができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

:::note
  「ガス」とは主に[VOCs](https://en.wikipedia.org/wiki/Volatile_organic_compound)（揮発性有機化合物）ガスによって影響を受ける空気質を意味します。2018年8月8日時点では、このモジュールは一部のArduinoボードでガス測定をサポートしていません。ATMEGA2560のような大容量メモリを持つArduinoプラットフォームでのみ利用可能です。他のArduinoプラットフォーム（例：Arduino Uno、Seeeduino v4.2など）を使用する場合、取得されるガス値は正確ではありません。
:::

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのための高性能で堅牢なS2101ワイヤレス温度・湿度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 空気温度＆湿度</strong></a></td>
    </tr>
  </tbody></table>

## 特徴

- 複数の測定が可能な4-in-1
- 低消費電力
- 広い測定範囲
- オプション出力:

    個別の湿度、圧力、ガスセンサーを独立して有効化/無効化可能

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V/5V|
|動作範囲|-40~+85℃; 0-100% r.H.; 300-1100hPa|
|デジタルインターフェース|I2C(最大3.4MHz)/ SPI(3線および4線、最大10MHz)|
|I2Cアドレス|0x76(デフォルト)/ 0x77(オプション)|

## ハードウェア概要

### ピンマップ

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map_back.jpg" /></div>

:::caution
デフォルト設定を変更したい場合は、パッドを切断して自分でハンダ付けする必要があります。上記の画像に従い、ナイフやハンダゴテを使用する際は注意してください。
:::

## 対応プラットフォーム

|Arduino|Raspberry Pi|ESP-IDF|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/esp_idf.png" alt="esp-idf" width={200} height="auto" /></p>|

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove-BME680 |
|--------------|-------------|-----------------|
|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが破損する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルはデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680)をGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/7.jpg" /></div>

:::note
Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     |  Grove-BME680           |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| SDA           | 白                     |
| SCL           | 黄色                   |

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** [Grove BME680](https://github.com/Seeed-Studio/Seeed_BME680)ライブラリをGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。パス**File --> Examples --> Seeed BME680 --> seeed_bme680_test**を通じて「BME680」例を開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/demo_path.jpg" /></div>

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ5.** Arduino IDEの**シリアルモニター**を開くには、**Tool-> Serial Monitor**をクリックします。または++ctrl+shift+m++キーを同時に押します。すべてが正常に動作していれば、結果が表示されます。

結果は以下のようになります：

```c
Serial start!!!
temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.51 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.64 Kohms


temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.77 %
gas ===>> 101.64 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.80 %
gas ===>> 101.76 Kohms

```

:::note
        1 - 安定した正確な値を得るには、Arduinoを約2時間コードを実行させる必要があります。その結果はより信頼性があります。

        2 - ガス部分は可変抵抗であり、VOCガスの値を反映するため、単位はKohmsです。

        3 - ガス部分の信頼性の高い結果を得たい場合は、Arduino Megaを使用し、[こちら](https://github.com/Seeed-Studio/Seeed_BME680_V1)を確認してください。
:::

### ESP-IDFで遊ぶ

#### ハードウェア

**必要な材料**

<table align="center">
  <tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove BME680 環境センサー</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
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
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::note
**1** USBケーブルを慎重に接続してください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Groveケーブルを使用して、Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680)をGrove Base for XIAOに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/XIAO_Grove_BME680.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** XIAO ESP32C3をUSBケーブルでPCに接続します。

#### ソフトウェア

:::note
ESP-IDFを初めて使用する場合は、開始前に[ESP-IDFの使い方](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html)をご覧になることを強くお勧めします。
:::

- **ステップ 1.** [公式ガイド](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html)に従ってESP-IDFをインストールします。

- **ステップ 2.** ESP-IDFテンプレートを使用して新しいプロジェクトを作成します。

- **ステップ 3.** BME680コンポーネントリポジトリをクローンします：
```bash
cd <your_project>/components
git clone --recursive https://github.com/Priyanshu0901/grove_bme680.git
```

- **ステップ 4.** プロジェクトの`sdkconfig`ファイルまたはmenuconfigを使用してI2Cピンを設定します：
```bash
idf.py menuconfig
```
`Component config -> BME680 Sensor Configuration`に移動し、以下を設定します：
- I2C SDAピン: 6
- I2C SCLピン: 7

- **ステップ 5.** コンポーネントの`examples`ディレクトリからプロジェクトの`main`ディレクトリにサンプルコードをコピーします。

- **ステップ 6.** プロジェクトをビルドしてフラッシュします：
```bash
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
```

出力は以下のようになります：

```
I (251) main_task: Started on CPU0
I (251) main_task: Calling app_main()
I (251) BME680_EXAMPLE: BME680 sensor example started
I (261) BME680_EXAMPLE: Initializing BME680 sensor...
I (261) BME680_IF: I2C interface initialized with address: 0x76
I (271) BME680_IF: BME680 interface initialized successfully
I (281) BME680: BME680 configured successfully
I (281) BME680: BME680 initialized successfully
I (281) BME680_EXAMPLE: BME680 initialized, waiting for sensor to stabilize...
I (1291) BME680_EXAMPLE: Performing first sensor reading...
I (1411) BME680_EXAMPLE: First sensor reading successful on attempt 1
I (1411) BME680_EXAMPLE: Sensor Data:
I (1411) BME680_EXAMPLE:   Temperature: 30.46 °C
I (1411) BME680_EXAMPLE:   Pressure: 910.34 hPa
I (1411) BME680_EXAMPLE:   Humidity: 51.17 %
I (1421) BME680_EXAMPLE:   Gas Resistance: 12561.98 kOhm
I (1421) BME680_EXAMPLE:   Gas Valid: Yes
I (1431) BME680_EXAMPLE:   Data Valid: Yes
I (1561) BME680_EXAMPLE: Sensor Data:
I (1561) BME680_EXAMPLE:   Temperature: 30.50 °C
I (1561) BME680_EXAMPLE:   Pressure: 910.33 hPa
I (1561) BME680_EXAMPLE:   Humidity: 51.20 %
I (1561) BME680_EXAMPLE:   Gas Resistance: 136.83 kOhm
I (1571) BME680_EXAMPLE:   Gas Valid: Yes
I (1571) BME680_EXAMPLE:   Data Valid: Yes
I (3691) BME680_EXAMPLE: Sensor Data:
I (3691) BME680_EXAMPLE:   Temperature: 30.50 °C
I (3691) BME680_EXAMPLE:   Pressure: 910.33 hPa
I (3691) BME680_EXAMPLE:   Humidity: 51.04 %
I (3691) BME680_EXAMPLE:   Gas Resistance: 96.77 kOhm
I (3701) BME680_EXAMPLE:   Gas Valid: Yes
I (3701) BME680_EXAMPLE:   Data Valid: Yes
```

:::note
1. サンプルコードには、センサー読み取り失敗時のエラーハンドリングと回復機構が含まれています。
2. センサーは初期化後に安定するまで時間が必要です。そのため、最初の数回の読み取りは正確でない場合があります。
3. ガス抵抗値はkOhm単位で表示され、空気の質を表します。
4. センサーはI2CとSPIの両方のインターフェースをサポートしていますが、サンプルではデフォルトでI2Cを使用しています。
5. XIAO ESP32C3を使用する場合は、正しいI2Cピン（GPIO6をSDA、GPIO7をSCLとして）を使用してください。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove-BME680 Eagleファイル](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip)
- **[Library]** [Seeed BME680ライブラリ](https://github.com/Seeed-Studio/Seeed_BME680)
- **[PDF]** [BME680のデータシート](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/BME680.pdf)

## プロジェクト

この製品の紹介動画です。簡単なデモも含まれており、ぜひお試しください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/O3oHtW2TlXY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>