---
description: Grove - IMU 9DOF(lcm20600+AK09918)
title: Grove - IMU 9DOF(lcm20600+AK09918)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-IMU_9DOF-lcm20600+AK09918
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - IMU 9DOF (lcm20600+AK09918) は、ジャイロスコープ、加速度計、電子コンパスを組み合わせた9自由度の[IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit)（慣性計測装置）です。これら3つの機能を実現するために、LCM20600とAK09918の2つのチップを使用しています。

LCM20600は、3軸ジャイロスコープと3軸加速度計を組み合わせた6軸モーショントラッキングデバイスです。[ジャイロスコープ](https://en.wikipedia.org/wiki/Gyroscope)は、方向や角速度を測定または維持するための装置で、通常は回転やねじれを測定するために使用されます。[加速度計](https://en.wikipedia.org/wiki/Accelerometer)は、固有加速度を測定する装置です。

AK09918は、高感度ホールセンサー技術を備えた3軸[電子コンパス](https://en.wikipedia.org/wiki/Magnetometer)ICです。電子コンパスを使用して磁力を測定し、方向情報を提供します。

その名の通り、この小さなモジュール1つで、x/y/z軸の角回転、x/y/z軸の加速度、x/y/z軸の磁力を測定する9自由度を計測できます。

なんて素晴らしいモジュールでしょう！このモジュールを使って、自分だけのモーションおよび方向システムを構築してみてください😄



<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html)


## 特徴

- プログラム可能なFSR（フルスケールレンジ）を持つ3軸ジャイロスコープ：±250 dps、±500 dps、±1000 dps、±2000 dps
- プログラム可能なFSRを持つ3軸加速度計：±2g、±4g、±8g、±16g
- 0.15 μT/LSB（標準）感度を持つ3軸電子コンパス
- ユーザーがプログラム可能な割り込み機能
- 加速度測定用の16ビットADC解像度とプログラム可能なフィルター
- 磁気測定用の16ビットADC解像度
- アプリケーションプロセッサがデータをバーストで読み取ることを可能にする1 KBのFIFOバッファ（LCM20600）
- 組み込み温度センサー
- 磁気センサーのオーバーフローモニタ機能
- 内部クロックソース用の内蔵オシレーター



## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|動作温度|-30°C ～ +85°C|
|ジャイロスコープ フルスケールレンジ|±250 dps、±500 dps、±1000 dps、±2000 dps|
|ジャイロスコープ 感度スケールファクター|131 LSB/(dps)@±250 dps 65.5 LSB/(dps)@±500 dps 32.8 LSB/(dps)@±1000 dps 16.4 LSB/(dps)@±2000 dps|
|加速度計 フルスケールレンジ|±2g、±4g、±8g、±16g|
|加速度計 感度スケールファクター|16384 LSB/g@±2g / 8192 LSB/g@±4g / 4096 LSB/g@±8g  /  2048 LSB/g@±16g|
|磁気センサー測定範囲|±4912μT（標準）|
|磁気センサー感度|0.15μT（標準）|
|インターフェース|I^2^C|
|I^2^C アドレス|**LCM20600** /  0x69（デフォルト） /  0x68（オプション） /  **AK09918**  /  0x0C|

## アプリケーション

- スマートフォンとタブレット
- ウェアラブルセンサー

## ハードウェア概要

### ピン配置

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg" alt="pir" width={600} height="auto" /></p>

:::danger
LCM20600 のデフォルトの I2C アドレスは 0x69 ですが、0x68 に変更することができます。中央のパッドはアドレス線に接続されており、線を切断して再溶接することで I2C アドレスを変更できます。自分や他人の安全のため、ナイフや溶接ガンを使用する際は十分注意してください。
:::

### 回路図

**電源**
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg" alt="pir" width={600} height="auto" /></p>

LCM20600 の動作電圧範囲は 1.71V から 3.45V、AK09918 の動作電圧範囲は 1.65V から 1.95V です。そのため、電源変換チップ **XC6206P182MR** を使用して両方のチップに安定した 1.8V を供給します。

**双方向レベルシフター回路**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

これは、異なる電圧セクションを持つ I<sup>2</sup>C バスを接続するための典型的な双方向レベルシフター回路です。2つのチップの I<sup>2</sup>C バスは 1.8V を使用しますが、Arduino の I<sup>2</sup>C バスが 5V または 3.3V を使用する場合、この回路が必要になります。上記の回路図では、**Q1** と **Q2** は N チャネル MOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf) であり、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf) を参照することができます。

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - IMU 9DOF |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく接続してください。そうしないとポートが損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本の線しかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。
    
    **2** Groveモジュールを購入すると、Groveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - IMU 9DOF (lcm20600+AK09918) を Grove-Base Shield のポート **I^2^C** に接続します。

- **ステップ 2.** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ 3.** USBケーブルを使用して Seeeduino をPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Grove Base Shieldがない場合は、以下のようにこのモジュールを直接Seeeduinoに接続することもできます。
:::

| Seeeduino     |  Grove - IMU 9DOF       |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| SDA           | 白                     |
| SCL           | 黄色                   |

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [Grove - IMU 9DOF (lcm20600+AK09918)](https://github.com/Seeed-Studio/Seeed_ICM20600_AK09918) ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開くには、以下の3つの方法があります：
    1. Arduino IDEで直接開く：**File --> Examples --> Grove IMU 9DOF ICM20600 AK09918 --> compass** のパスをたどります。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path.jpg" alt="pir" width={600} height="auto" /></p>

    2. コンピュータで開く：**XXXX\Arduino\libraries\Seeed_ICM20600_AK09918-master\examples\compass** フォルダ内の **compass.ino** をクリックします。**XXXX** はArduino IDEをインストールした場所です。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path_1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

    3. または、コードブロックの右上にあるアイコンをクリックして
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>以下のコードをArduino IDEの新しいスケッチにコピーします。

```cpp
#include "AK09918.h"
#include "ICM20600.h"
#include <Wire.h>

AK09918_err_type_t err;
int32_t x, y, z;
AK09918 ak09918;
ICM20600 icm20600(true);
int16_t acc_x, acc_y, acc_z;
int32_t offset_x, offset_y, offset_z;
double roll, pitch;
// あなたの場所の磁気偏角を見つけてください
// http://www.magnetic-declination.com/
double declination_shenzhen = -2.2;

void setup()
{
    // I2Cバスに参加する (I2Cdevライブラリはこれを自動的に行いません)
    Wire.begin();

    err = ak09918.initialize();
    icm20600.initialize();
    ak09918.switchMode(AK09918_POWER_DOWN);
    ak09918.switchMode(AK09918_CONTINUOUS_100HZ);
    Serial.begin(9600);

    err = ak09918.isDataReady();
    while (err != AK09918_ERR_OK) 
    {
        Serial.println("センサー待機中");
        delay(100);
        err = ak09918.isDataReady();
    }

    Serial.println("2秒後に8の字キャリブレーションを開始します。");
    delay(2000);
    calibrate(10000, &offset_x, &offset_y, &offset_z);
    Serial.println("");
}

void loop()
{
    // 加速度を取得
    acc_x = icm20600.getAccelerationX();
    acc_y = icm20600.getAccelerationY();
    acc_z = icm20600.getAccelerationZ();

    Serial.print("A:  ");
    Serial.print(acc_x);
    Serial.print(",  ");
    Serial.print(acc_y);
    Serial.print(",  ");
    Serial.print(acc_z);
    Serial.println(" mg");

    Serial.print("G:  ");
    Serial.print(icm20600.getGyroscopeX());
    Serial.print(",  ");
    Serial.print(icm20600.getGyroscopeY());
    Serial.print(",  ");
    Serial.print(icm20600.getGyroscopeZ());
    Serial.println(" dps");

    ak09918.getData(&x, &y, &z);
    x = x - offset_x;
    y = y - offset_y;
    z = z - offset_z;

    Serial.print("M:  ");
    Serial.print(x);
    Serial.print(",  ");
    Serial.print(y);
    Serial.print(",  ");
    Serial.print(z);
    Serial.println(" uT");

    // ロール/ピッチ (ラジアン)
    roll = atan2((float)acc_y, (float)acc_z);
    pitch = atan2(-(float)acc_x, sqrt((float)acc_y*acc_y+(float)acc_z*acc_z));
    Serial.print("Roll: ");
    Serial.println(roll*57.3);
    Serial.print("Pitch: ");
    Serial.println(pitch*57.3);

    double Xheading = x * cos(pitch) + y * sin(roll) * sin(pitch) + z * cos(roll) * sin(pitch);
    double Yheading = y * cos(roll) - z * sin(pitch);
    

    double heading = 180 + 57.3*atan2(Yheading, Xheading) + declination_shenzhen;

    Serial.print("Heading: ");
    Serial.println(heading);
    Serial.println("--------------------------------");
  
    delay(500);
    
}

void calibrate(uint32_t timeout, int32_t *offsetx, int32_t *offsety, int32_t*offsetz)
{
  int32_t value_x_min = 0;
  int32_t value_x_max = 0;
  int32_t value_y_min = 0;
  int32_t value_y_max = 0;
  int32_t value_z_min = 0;
  int32_t value_z_max = 0;
  uint32_t timeStart = 0;

  ak09918.getData(&x, &y, &z);

  value_x_min = x;
  value_x_max = x;
  value_y_min = y;
  value_y_max = y;
  value_z_min = z;
  value_z_max = z;
  delay(100);

  timeStart = millis();
  
  while((millis() - timeStart) < timeout)
  {
    ak09918.getData(&x, &y, &z);
    
    /* x軸の最大/最小値を更新 */
    if(value_x_min > x)
    {
      value_x_min = x;
      // Serial.print("value_x_minを更新: ");
      // Serial.println(value_x_min);

    } 
    else if(value_x_max < x)
    {
      value_x_max = x;
      // Serial.print("value_x_maxを更新: ");
      // Serial.println(value_x_max);
    }

    /* y軸の最大/最小値を更新 */
    if(value_y_min > y)
    {
      value_y_min = y;
      // Serial.print("value_y_minを更新: ");
      // Serial.println(value_y_min);

    } 
    else if(value_y_max < y)
    {
      value_y_max = y;
      // Serial.print("value_y_maxを更新: ");
      // Serial.println(value_y_max);
    }

    /* z軸の最大/最小値を更新 */
    if(value_z_min > z)
    {
      value_z_min = z;
      // Serial.print("value_z_minを更新: ");
      // Serial.println(value_z_min);

    } 
    else if(value_z_max < z)
    {
      value_z_max = z;
      // Serial.print("value_z_maxを更新: ");
      // Serial.println(value_z_max);
    }
    
    Serial.print(".");
    delay(100);

  }

  *offsetx = value_x_min + (value_x_max - value_x_min)/2;
  *offsety = value_y_min + (value_y_max - value_y_min)/2;
  *offsetz = value_z_min + (value_z_max - value_z_min)/2;
}
```

:::note
        ライブラリには3つのデモがあります:  
        **test_6axis**  
        >この例では、ICM20600からジャイロスコープと加速度データを取得する方法を示します。  
        
        **test_magnet**  
        >この例では、AK09918から磁気データを取得する方法を示します。  
        
        **compass**  
        >この例では、磁気データと加速度データを取得し、ピッチとロールを計算してコンパスアプリケーションを作成します。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDEの**シリアルモニタ**を開きます。**ツール->シリアルモニタ**をクリックするか、++ctrl+shift+m++キーを同時に押します。ボーレートを**9600**に設定してください。

:::success
     すべてが正常に動作している場合、シリアルモニタを開くと通知が表示されます--*2秒後に8の字キャリブレーションを開始します。* これは、このモジュールをキャリブレーションするために、空中で数字の8の軌跡を描くように動かす必要があることを意味します。"......."が表示されたら、キャリブレーションを開始できます。
:::

```cpp
2秒後に8の字キャリブレーションを開始します。
.......................................................................
A:  -362,  -205,  738 mg
G:  -45,  12,  -1 dps
M:  -6,  -23,  -33 uT
Roll: -15.53
Pitch: 25.30
Heading: 23.99
--------------------------------
A:  -269,  583,  61 mg
G:  102,  377,  -2 dps
M:  18,  -21,  -18 uT
Roll: 84.03
Pitch: 24.65
Heading: 215.58
--------------------------------
A:  -495,  229,  37 mg
G:  -43,  -231,  201 dps
M:  7,  -30,  6 uT
Roll: 80.83
Pitch: 64.90
Heading: 21.76
--------------------------------

```

:::note
        ご覧の通り、コンパス例の結果には3つのパラメータが含まれています: Roll（ロール）、Pitch（ピッチ）、Heading（ヘディング）。これらは**[オイラー角](https://en.wikipedia.org/wiki/Euler_angles)**の用語です（詳細情報を確認するにはクリックしてください）。
:::

#### 関数テーブル

|関数|説明|
|---|---|
|**ICM20600**|| 
|initialize()|ICM20600チップを初期化します。デフォルトでは、ジャイロスコープの測定範囲は±2000 dps、加速度計の測定範囲は±16gです。|
|setGyroScaleRange(gyro_scale_type_t range)|初期化後、ジャイロスコープの範囲をニーズに合わせて設定できます。パラメータgyro_scale_type_t rangeのリスト: **RANGE_250_DPS** / **RANGE_500_DPS** / **RANGE_1K_DPS** / **RANGE_2K_DPS**  / 例: **icm20600.setGyroScaleRange(RANGE_1K_DPS);** / このコード行はジャイロスコープの測定範囲を±1000dpsに変更します。|
|setAccScaleRange(acc_scale_type_t range)|初期化後、加速度計の範囲をニーズに合わせて設定できます。パラメータacc_scale_type_t rangeのリスト: **RANGE_2G** / **RANGE_4G** / **RANGE_8G** / **RANGE_16G**  / 例: **icm20600.setAccScaleRange(RANGE_8G);** / このコード行は加速度計の測定範囲を±8gに変更します。|
|getGyroscope(int16_t* x, int16_t* y, int16_t* z))|この関数を使用して、ジャイロスコープのX/Y/Z 3軸データを同時に取得できます。データの単位は**dps**です。|
|getGyroscopeX(void)  getGyroscopeY(void)  getGyroscopeZ(void)|または、これら3つの関数を使用してジャイロスコープのX/Y/Z 3軸データを個別に取得できます。データの単位は**dps**です。|
|getRawGyroscopeX(void)  getRawGyroscopeY(void)  getRawGyroscopeZ(void)|これら3つの関数は、ICM20600のレジスタから直接生データを取得し、データ単位を**dps**に変換しません。|
|getAcceleration(int16_t* x, int16_t* y, int16_t* z)|この関数を使用して、X/Y/Z 3軸の加速度を同時に取得できます。データの単位は**mg**です。|
|getAccelerationX(void)  getAccelerationY(void)  getAccelerationZ(void)|または、これら3つの関数を使用してX/Y/Z 3軸の加速度を個別に取得できます。データの単位は**mg**です。|
|getRawAccelerationX(void)  getRawAccelerationY(void)  getRawAccelerationZ(void)|これら3つの関数は、ICM20600のレジスタから直接生データを取得し、データ単位を**mg**に変換しません。|
|getTemperature(void)|この関数を使用して温度を取得できます。|
|**AK09918**||
|getData(int32_t *axis_x, int32_t *axis_y, int32_t *axis_z)|この関数を使用して3軸の磁力を取得できます。|

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/Grove%20-%20IMU%209DOF%20(ICM20600%20%26%20AK09918).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[Zip]** [Grove - IMU 9DOF (lcm20600+AK09918) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/Grove%20-%20IMU%209DOF%20(ICM20600%20%26%20AK09918).zip)

- **[Zip]** [Seeed ICM20600+AK09918 ライブラリ](https://github.com/Seeed-Studio/Seeed_ICM20600_AK09918/archive/master.zip)

- **[PDF]** [ICM-20600 のデータシート](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/ICM-20600.pdf)

- **[PDF]** [AK09918 のデータシート](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/AK09918.pdf)

- **[PDF]** [CJ2102 のデータシート](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf)



## プロジェクト

この製品の紹介動画です。簡単なデモが含まれており、試してみることができます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/oFmvKxoZIuw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>