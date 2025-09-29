---
description: Grove-6-Axis_Accelerometer&Gyroscope(BMI088)
title: Grove - 6軸加速度計＆ジャイロスコープ(BMI088)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-6-Axis_Accelerometer&Gyroscope_BMI088
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/main.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 6軸加速度計＆ジャイロスコープ(BMI088)は、6自由度(DoF)の高性能慣性計測ユニット(IMU)です。このセンサーはBOSCH BMI088をベースにしており、高振動抑制を備えた高性能IMUです。この6軸センサーは、16ビットの3軸ジャイロスコープと16ビットの3軸加速度計を組み合わせています。特に、このセンサーはドローンやロボットのアプリケーションで、要求の厳しい環境で使用することができます。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html)

## 特徴

- BM1088は、ドローン、ロボット、産業用途での厳しい性能要件に対応するよう設計されています。
- 広い加速度測定範囲（最大24g）
- 加速度計は、±24gの最広測定範囲で0.2 mg/Kの低TCOと230 pg/sqrt(Hz)の低スペクトルノイズを特徴としています。

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|測定範囲と感度|**加速度計** : ±3g @10920 LSB/g / ±6g @5460 LSB/g / ±12g @2730 LSB/g / ±24g @1365 LSB/g / **ジャイロスコープ** : ±125°/s @262.1 LSB/°/s / ±250°/s @131.1 LSB/°/s / ±500°/s @65.5 LSB/°/s / ±1000°/s @32.8 LSB/°/s / ±2000°/s @16.4 LSB/°/s|
|動作温度範囲|-40℃ ~ +85℃|
|ゼロオフセット|**加速度計** : ±30 mg **ジャイロスコープ**: ±1°/s|
|TCO|**加速度計** :±0.2 mg/K **ジャイロスコープ**: ±0.015°/s/K|
|外部インターフェース| I^2^C|
|I^2^Cアドレス|              **加速度計**: 0x19 (デフォルト) \\   0x18(オプション)   **ジャイロスコープ**: 0x69(デフォルト) \\  0x68(オプション)|

## 主な用途

- ドローンや飛行玩具
- 産業用ロボット、ホバーボード
- 家庭用アプリケーション（例：掃除機、ソーシャルロボットなど）

## ハードウェア概要

### ピン配置

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>

### 回路図

**電源**

<!-- ![](https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

BMI088の動作電圧範囲は2.4-3.6Vです。そのため、[XC6206P30](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)チップを使用して安定した3.0Vを供給します。XC6206P30の入力範囲は1.8Vから6.0Vなので、3.3Vと5Vの両方でArduinoと一緒にこのモジュールを使用できます。

**双方向レベルシフター回路**
<!-- ![](https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_2.jpg" alt="pir" width={600} height="auto" /></p>

これは、I^2^Cバスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。このセンサーのI<sup>2</sup>Cバスは3.3Vを使用しますが、ArduinoのI<sup>2</sup>Cバスが5Vを使用する場合、この回路が必要になります。上記の回路図では、**Q1**と**Q2**はNチャネルMOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/CJ2102.pdf)で、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照してください。

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove (BMI088) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - 6-Axis Accelerometer&Gyroscope(BMI088)をGrove-Base Shieldのポート **I^2^C** に接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- 
![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino      |  Groveケーブル       | Grove (BMI088) |
|--------------- |--------------------|-----|
| GND            | 黒                 | GND |
| 5Vまたは3.3V   | 赤                 | VCC |
| SDA            | 白                 | SDA |
| SCL            | 黄色               | SCL |

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [Seeed_BMI088](https://github.com/Seeed-Studio/Grove_6Axis_Accelerometer_And_Gyroscope_BMI088)ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開きます。以下の3つの方法で開くことができます：
    1. Arduino IDEで直接開きます。パスは次の通りです： **File --> Examples --> Grove 6-Axis Accelerometer&Gyroscope --> BM1088_Example**。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>
    2. コンピュータで開きます。**BM1088_Example.ino**をクリックします。このファイルはフォルダ **XXXX\Arduino\libraries\Grove_6Axis_Accelerometer_And_Gyroscope_BMI088-master\examples\BMI088_Example** にあります。**XXXX**はArduino IDEをインストールした場所です。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

3. または、アイコンをクリックするだけで、
<!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)   -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>
コードブロックの右上隅にあるアイコンをクリックして、以下のコードを Arduino IDE の新しいスケッチにコピーできます。

```cpp

#include "BMI088.h"

float ax = 0, ay = 0, az = 0;
float gx = 0, gy = 0, gz = 0;
int16_t temp = 0;

void setup(void)
{
    Wire.begin();
    Serial.begin(115200);
    
    while(!Serial);
    Serial.println("BMI088 生データ");
    
    while(1)
    {
        if(bmi088.isConnection())
        {
            bmi088.initialize();
            Serial.println("BMI088 が接続されています");
            break;
        }
        else Serial.println("BMI088 が接続されていません");
        
        delay(2000);
    }
}

void loop(void)
{    
    bmi088.getAcceleration(&ax, &ay, &az);
    bmi088.getGyroscope(&gx, &gy, &gz);
    temp = bmi088.getTemperature();
    
    Serial.print(ax);
    Serial.print(",");
    Serial.print(ay);
    Serial.print(",");
    Serial.print(az);
    Serial.print(",");
    
    Serial.print(gx);
    Serial.print(",");
    Serial.print(gy);
    Serial.print(",");
    Serial.print(gz);
    Serial.print(",");
    
    Serial.print(temp);
    
    Serial.println();
    
    delay(50);
}
```

:::note
        ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDE の **シリアルモニター** を開くには、**ツール->シリアルモニター** をクリックします。または ++ctrl+shift+m++ キーを同時に押します。ボーレートを **115200** に設定してください。

:::success
     すべてが正常に動作している場合、シリアルモニターを開くと以下のように表示される可能性があります：
:::

```cpp
BMI088 生データ
BMI088 が接続されています
394.41,-383.06,818.66,1.71,-4.88,-2.93,27
390.20,-385.25,830.38,5.49,0.24,1.83,27
388.37,-380.31,826.54,0.73,2.93,7.57,27
395.51,-384.16,823.79,-0.85,-5.74,5.98,27
385.80,-386.72,824.52,3.78,-5.00,1.59,27
395.51,-384.52,824.71,1.46,3.17,10.86,27
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - 6-Axis Accelerometer&Gyroscope(BMI088) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip)

- **[Zip]** [Seeed BMI088 ライブラリ](https://github.com/Seeed-Studio/Grove_6Axis_Accelerometer_And_Gyroscope_BMI088/archive/master.zip)

- **[PDF]** [BMI088 データシート](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/BMI088.pdf)

- **[PDF]** [XC6206 データシート](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## プロジェクト

これはこの製品の紹介ビデオです。簡単なデモが含まれており、ぜひお試しください。

<iframe width={560} height={315} src="https://www.youtube.com/embed/gPi4EWuAGtg?rel=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>