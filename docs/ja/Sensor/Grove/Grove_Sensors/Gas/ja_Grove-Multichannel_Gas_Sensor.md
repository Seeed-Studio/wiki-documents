---
description: Grove - マルチチャンネルガスセンサー
title: Grove - マルチチャンネルガスセンサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Multichannel_Gas_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<table>
  <tbody><tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png" />
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor2.png" />
      </td>
    </tr>
  </tbody></table>



Grove – マルチチャンネルガスセンサーは、環境検知センサーであり、内蔵されたMiCS-6814により多くの有害なガスを検知することができます。また、マルチチャンネルにより3種類のガスを同時に測定することが可能で、複数のガス濃度を監視するのに役立ちます。

このセンサーは**Groveシステム**に属しており、**Base Shield**に接続してジャンパーワイヤなしでArduinoと直接動作させることができます。インターフェースはI2Cであるため、Base ShieldのI2Cポートに接続するだけで使用を開始できます。

<div class="admonition caution">
<p class="admonition-title">注意</p>
センサー値は許容誤差範囲内でガス濃度の概略的な傾向を反映するものであり、正確なガス濃度を示すものではありません。空気中の特定成分の検出には、通常、より精密で高価な機器が必要であり、単一のガスセンサーでは実現できません。プロジェクトが非常に正確なレベルでガス濃度を取得することを目的としている場合、このガスセンサーは推奨されません。
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html)

:::tip
     製品を[マルチチャンネルガスセンサーv2](https://wiki.seeedstudio.com/ja/Grove-Multichannel-Gas-Sensor-V2/)に更新しました。より詳細なドキュメントとオンボードセンサーモジュールが追加されています。また、[Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しました。これにより、ニーズに最適なガスセンサーを選択するのに役立ちます。
:::

## 使用前に

### 関連読書

ガスセンサーを使用する前に以下の知識を読むことをお勧めします。これによりArduinoや弊社製品についてさらに理解を深めることができ、オープンソースハードウェアをより簡単に使用できるようになります。

-   Arduinoの始め方
-   Groveシステムとは
-   なぜBase Shieldが必要なのか？

これらを読んだ後、Base Shieldを使用してGrove製品をArduinoと連携させる方法が分かります。それでは始めましょう！

### 準備するもの

このチュートリアルでは以下の必要な製品を含みます：

-   Arduino UNO R3またはSeeeduino v4
-   Base Shield
-   Grove - マルチチャンネルガスセンサー

ハードウェア概要
-----------------

<!-- <center>
![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png)
</center> -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png" alt="pir" width={600} height="auto" /></p>


上記の図から4つのピンが示されています。

| ピンラベル | 説明                     |
|-----------|-------------------------|
| GND       | グランドに接続           |
| VCC       | 電源供給: 3.3V - 5V      |
| SDA       | I2Cデータ                |
| SCL       | I2Cクロック              |

電源供給は3.3Vから5Vの間であるため、出力電圧が3.3Vのマイクロコントローラーと互換性があります。

特徴
-------

-   1つのパッケージに完全に独立した3つのセンサー素子を搭載
-   ATmega168PAを搭載
-   プログラム可能なアドレスを持つI2Cインターフェース
-   低消費電力のために加熱電力をシャットダウン可能
-   検知可能なガス
    -   一酸化炭素 CO 1 – 1000ppm
    -   二酸化窒素 NO2 0.05 – 10ppm
    -   エタノール C2H6OH 10 – 500ppm
    -   水素 H2 1 – 1000ppm
    -   アンモニア NH3 1 – 500ppm
    -   メタン CH4 &gt;1000ppm
    -   プロパン C3H8 &gt;1000ppm
    -   イソブタン C4H10 &gt;1000ppm

ブロック図
-------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_block_diagram.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_block_diagram.jpg" alt="pir" width={600} height="auto" /></p>


対応プラットフォーム
<!-- -------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記でサポートされているとされるプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

電気的特性
--------------------------

| 項目           | 条件         | 最小値 | 標準値 | 最大値 | 単位 |
|----------------|--------------|--------|--------|--------|------|
| 電圧           | -            | 3.1    | 3.3    | 5.25   | V    |
| リップル       | @最大電力    | -      | 80     | 100    | mV   |
| 加熱電力       | -            | -      | -      | 88     | mW   |
| 最大電力       | -            | -      | -      | 150    | mW   |
| ADC精度        | -            | -      | 10     | -      | ビット |
| I2C速度        | -            | -      | 100    | 400    | kHz  |
| VIL            | @I2C         | -0.5   | -      | 0.99   | V    |
| VIH            | @I2C         | 2.31   | -      | 5.25   | V    |

### REDセンサーの性能

| REDセンサーの特性            | 記号   | 標準値 | 最小値 | 最大値 | 単位 |
|-----------------------------|--------|--------|--------|--------|------|
| 空気中の感知抵抗            | R0     | -      | 100    | 1500   | kΩ   |
| 一般的なCO検出範囲          | FS     | -      | 1      | 1000   | ppm  |
| 感度係数                   | SR     | -      | 1.2    | 50     | -    |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Red_sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Red_sensor.jpg" alt="pir" width={600} height="auto" /></p>

### OXセンサーの性能

| OXセンサーの特性             | 記号   | 標準値 | 最小値 | 最大値 | 単位 |
|-----------------------------|--------|--------|--------|--------|------|
| 空気中の感知抵抗            | R0     | -      | 0.8    | 20     | kΩ   |
| 一般的なNO2検出範囲         | FS     | -      | 0.05   | 10     | ppm  |
| 感度係数                   | SR     | -      | 2      | -      | -    |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/OX_sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/OX_sensor.jpg" alt="pir" width={600} height="auto" /></p>

### NH3センサーの性能

| NH3センサーの特性            | 記号   | 標準値 | 最小値 | 最大値 | 単位 |
|-----------------------------|--------|--------|--------|--------|------|
| 空気中の感知抵抗            | R0     | -      | 10     | 1500   | kΩ   |
| 一般的なNH3検出範囲         | FS     | -      | 1      | 300    | ppm  |
| 感度係数                   | SR     | -      | 1.5    | 15     | -    |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/NH3_sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/NH3_sensor.jpg" alt="pir" width={600} height="auto" /></p>

はじめに
-------------

:::warning
    センサーは安定したデータを得るために、少なくとも10分間の予熱が必要です。
:::

**ハードウェアのインストール:**

1. Grove - Multichannel Gas SensorをSeeeduinoに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-MultiChannelGasSensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-MultiChannelGasSensor.jpg" alt="pir" width={600} height="auto" /></p>

**コードのアップロード:**

2. [Arduinoライブラリ & Grove/Xadowファームウェア](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor/archive/master.zip)をダウンロードし、[インストール](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)してArduinoライブラリに追加します。

3. 次のパスからコードを直接開きます: File -> Example -> Mutichannel_Gas_Sensor -> ReadSensorValue_Grove。

以下はReadSensorValue_Groveのコードです。

```c
// Grove - Multichannel Gas Sensorからデータを読み取る
#include <Wire.h>
#include "MutichannelGasSensor.h"

void setup()
{
    Serial.begin(115200);  // 出力用シリアルを開始
    Serial.println("電源オン！");
    gas.begin(0x04); // スレーブのデフォルトI2Cアドレスは0x04です。マルチチャンネルガスセンサーのバージョン2ではI2Cアドレスは0x08です。
    gas.powerOn();
    Serial.print("ファームウェアバージョン = ");
    Serial.println(gas.getVersion());
}

void loop()
{
    float c;

    c = gas.measure_NH3();
    Serial.print("NH3の濃度は ");
    if(c>=0) Serial.print(c);
    else Serial.print("無効");
    Serial.println(" ppm");

    c = gas.measure_CO();
    Serial.print("COの濃度は ");
    if(c>=0) Serial.print(c);
    else Serial.print("無効");
    Serial.println(" ppm");

    c = gas.measure_NO2();
    Serial.print("NO2の濃度は ");
    if(c>=0) Serial.print(c);
    else Serial.print("無効");
    Serial.println(" ppm");

    c = gas.measure_C3H8();
    Serial.print("C3H8の濃度は ");
    if(c>=0) Serial.print(c);
    else Serial.print("無効");
    Serial.println(" ppm");

    c = gas.measure_C4H10();
    Serial.print("C4H10の濃度は ");
    if(c>=0) Serial.print(c);
    else Serial.print("無効");
    Serial.println(" ppm");

    c = gas.measure_CH4();
    Serial.print("CH4の濃度は ");
    if(c>=0) Serial.print(c);
    else Serial.print("無効");
    Serial.println(" ppm");

    c = gas.measure_H2();
    Serial.print("H2の濃度は ");
    if(c>=0) Serial.print(c);
    else Serial.print("無効");
    Serial.println(" ppm");

    c = gas.measure_C2H5OH();
    Serial.print("C2H5OHの濃度は ");
    if(c>=0) Serial.print(c);
    else Serial.print("無効");
    Serial.println(" ppm");

    delay(1000);
}
```

4. コードをアップロードします。Arduino環境のツール | ボードメニューからSeeeduino Unoを選択し、Arduinoが使用している正しいシリアルポートを選択してください。

シリアルモニターを開くことで、センサーから読み取った生データを確認できます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_Grove_Print.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_Grove_Print.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

ファームウェアの更新
-----------------

このGroveモジュールにはATmega168 MCUが搭載されており、工場出荷時のファームウェアが書き込まれています。バージョンは2016年11月11日にV2に更新されました。
以下のコードをアップロードして、センサーのバージョンを検出してください。

```c
// Groveマルチチャンネルガスセンサーのファームウェアバージョンを取得
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define SENSOR_ADDR     0X04        // デフォルトは0x04

void setup()
{
    Serial.begin(115200);
    gas.begin(SENSOR_ADDR);
    
    unsigned char version = gas.getVersion();
    Serial.print("Version = ");
    Serial.println(version);    
}

void loop()
{
    // 何もする必要はありません
}
```

センサーのバージョンがV1の場合、性能向上のためにV2にアップグレードすることをお勧めします。

ファームウェアを更新するには、以下が必要です：

* Arduino UNO/Seeeduino V3/
* 6本のデュポンワイヤ
* はんだごて

基板の裏側にICSPパッドがあります。このパッドをArduinoボードに接続する必要があります。

| センサー | Arduino |
|----------|---------|
| MISO     | D12     |
| SCK      | D13     |
| NRST     | D10     |
| GND      | GND     |
| MOSI     | D11     |
| VCC      | 5V      |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_connect.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_connect.jpeg" alt="pir" width={600} height="auto" /></p>

次に、Arduinoに**UpdateFrimware**の例を開き、シリアルモニターを開くと情報が表示されます。
'g'を入力して開始します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_done.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_done.png" alt="pir" width={600} height="auto" /></p>

キャリブレーション
--------------

常に不正確な値が得られる場合は、センサーをキャリブレーションしてみてください。
**calibration**の例を開いてArduinoにアップロードし、シリアルモニターを開いてキャリブレーション中の情報を確認してください。

:::note
    モジュールは工場出荷前にキャリブレーションされています。再キャリブレーションを行う場合は、空気の状態が新鮮であることを確認してください。キャリブレーションには数分から30分程度かかる場合があります。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

-   [Grove - Multichannel Gas Sensor v1.0 sch](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_sch.pdf)
-   [Grove - Multichannel Gas Sensor eagleファイル](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_eagle_files.zip)
-   [Arduinoライブラリ & Grove/Xadowファームウェア](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)
-   [MiCS-6814 データシート](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/MiCS-6814_Datasheet.pdf)

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/Grove_-_Multichannel_Gas_Sensorから作成されました -->

FAQ
---------
* **Q1. モジュールのI2Cアドレスを変更する方法**

    * *A1. I2C_Addressの例を開いて実行してください。*

* **Q2. I2Cアドレスを変更した後、運悪く忘れてしまいました。**

    * *A2. 心配しないでください。factory_settingの例を実行してデフォルトに戻してください。なお、キャリブレーションデータも工場出荷時設定に戻りますのでご注意ください。*

* **Q3. マルチチャンネルガスセンサーはWio GPSやWio LTEで動作しますか？**

    * *A3. はい、以下のコードを参照してください。

Wio GPS:

```c
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define WIOLTE_GROVE_PIN (12)
#define SENSOR_ADDR     0X04        // デフォルトは0x04

void setup()
{
    SerialUSB.begin(115200);
    pinMode(WIOLTE_GROVE_PIN, OUTPUT);
    digitalWrite(WIOLTE_GROVE_PIN, HIGH);
    delay(2000);
    gas.begin(SENSOR_ADDR);     // 
}

void loop()
{
    float R0_NH3, R0_CO, R0_NO2;
    float Rs_NH3, Rs_CO, Rs_NO2;
    float ratio_NH3, ratio_CO, ratio_NO2;
    
    R0_NH3 = gas.getR0(0);
    R0_CO  = gas.getR0(1);
    R0_NO2 = gas.getR0(2);
    
    Rs_NH3 = gas.getRs(0);
    Rs_CO  = gas.getRs(1);
    Rs_NO2 = gas.getRs(2);
    
    ratio_NH3 = Rs_NH3/R0_NH3;
    ratio_CO  = Rs_CO/R0_CO;
    ratio_NO2 = Rs_NH3/R0_NO2;
    
    SerialUSB.println("R0:");
    SerialUSB.print(R0_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(R0_CO);
    SerialUSB.print('\t');
    SerialUSB.println(R0_NO2);
    
    SerialUSB.println("Rs:");
    SerialUSB.print(Rs_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(Rs_CO);
    SerialUSB.print('\t');
    SerialUSB.println(Rs_NO2);
    
    SerialUSB.println("ratio:");
    SerialUSB.print(ratio_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(ratio_CO);
    SerialUSB.print('\t');
    SerialUSB.println(ratio_NO2);

    SerialUSB.println("------------------------");
    delay(1000);
}
```

Wio LTE:

```c
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define WIOLTE_GROVE_PIN (26)
#define SENSOR_ADDR     0X04        // デフォルトは0x04

void setup()
{
    // SerialUSB.begin(115200);
    pinMode(WIOLTE_GROVE_PIN, OUTPUT);
    digitalWrite(WIOLTE_GROVE_PIN, HIGH);
    delay(2000);
    gas.begin(SENSOR_ADDR);     // 
}

void loop()
{
    float R0_NH3, R0_CO, R0_NO2;
    float Rs_NH3, Rs_CO, Rs_NO2;
    float ratio_NH3, ratio_CO, ratio_NO2;
    
    R0_NH3 = gas.getR0(0);
    R0_CO  = gas.getR0(1);
    R0_NO2 = gas.getR0(2);
    
    Rs_NH3 = gas.getRs(0);
    Rs_CO  = gas.getRs(1);
    Rs_NO2 = gas.getRs(2);
    
    ratio_NH3 = Rs_NH3/R0_NH3;
    ratio_CO  = Rs_CO/R0_CO;
    ratio_NO2 = Rs_NH3/R0_NO2;
    
    SerialUSB.println("R0:");
    SerialUSB.print(R0_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(R0_CO);
    SerialUSB.print('\t');
    SerialUSB.println(R0_NO2);
    
    SerialUSB.println("Rs:");
    SerialUSB.print(Rs_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(Rs_CO);
    SerialUSB.print('\t');
    SerialUSB.println(Rs_NO2);
    
    SerialUSB.println("ratio:");
    SerialUSB.print(ratio_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(ratio_CO);
    SerialUSB.print('\t');
    SerialUSB.println(ratio_NO2);

    SerialUSB.println("------------------------");
    delay(1000);
}
```

## プロジェクト

**スマート作物: 従来の農業にIoTを導入！**: 私たちの自然との使命はそれを保護することです。IoTを活用したHeliumを通じて、技術と監視方法を設計・実装します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

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

IP66の筐体、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>