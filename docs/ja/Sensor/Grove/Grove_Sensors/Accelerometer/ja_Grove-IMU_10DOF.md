---
description: Grove - IMU 10DOF
title: Grove - IMU 10DOF
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-IMU_10DOF
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - IMU 10DOF は、Grove - IMU 9DOF と [Grove - Barometer Sensor (BMP180)](/ja/Grove-Barometer_Sensor-BMP180/ "Grove - Barometer Sensor (BMP180)") を組み合わせたモジュールです。このモジュールは MPU-9250 と BMP180 を基盤としており、MPU-9250 は 3 軸ジャイロスコープ、3 軸加速度計、3 軸磁力計、デジタルモーションプロセッサ (DMP) を組み合わせた 9 軸モーショントラッキングデバイスです。一方、BMP180 は高精度で超低消費電力のデジタル圧力センサーで、消費者向けアプリケーションに適しています。このモジュールは、スマートフォン、タブレット、ウェアラブルデバイスのアプリケーションに非常に適しています。


[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)

仕様


-   I2C インターフェース
-   MPU-9250 の I2C アドレス選択可能
-   低消費電力
-   すべてのレジスタとの通信のための 400kHz 高速モード I2C
-   ユーザーがプログラム可能なフルスケール範囲（±250、±500、±1000、±2000°/秒）を持つデジタル出力 X、Y、Z 軸角速度センサー（ジャイロスコープ）
-   プログラム可能なフルスケール範囲（±2g、±4g、±8g、±16g）を持つデジタル出力 3 軸加速度計
-   フルスケール範囲（±4800uT）を持つデジタル出力磁力計
-   範囲 300 ~ 1100hPa（海抜に関連して +9000m ~ -500m）のデジタル出力気圧計
-   寸法: 25.43mm x 20.35mm
-   I2C アドレス: デフォルト 0x68、ハードウェア概要を参照して 0x69 に変更可能

:::note
    複数の I2C デバイスを使用したい場合は、[Software I2C](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/) を参照してください。
:::
:::tip
    Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::
## 対応プラットフォーム


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|


:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/dimensions.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Grove-imu10dof-layout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Grove-imu10dof-layout.jpg" alt="pir" width={600} height="auto" /></p>

-   1：MPU-9250 I2C アドレス選択パッド。デフォルトでは **a** と **b** が接続されており、アドレスは 0x68 です。**b** と **c** を接続するとアドレスは 0x69 になります。
-   2：MPU-9250 割り込みピン。割り込みは設定する必要があります。利用可能な割り込みソースは以下の通りです：モーション検出、FIFO オーバーフロー、データ準備完了、I2C マスターエラー。

## はじめに

ここでは、このセンサーの使用方法を示す例を提供します。

### Arduino を使ってみる

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | ベースシールド | Grove-IMU_10DOF |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|

- **ステップ 2.** Grove-IMU_10DOF を Grove-Base Shield の **I2C** ポートに接続します。
- **ステップ 3.** Grove - Base Shield を Seeeduino に差し込みます。
- **ステップ 4.** USB ケーブルを使用して Seeeduino を PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Grove Base Shield がない場合は、以下のようにこのモジュールを直接 Seeeduino に接続することもできます。
:::
<!--I2C-->
| seeeduino_v4 | Grove-IMU_10DOF  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### ソフトウェア

**ステップ 1.** [ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF) を Github からダウンロードします。

**ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して、Arduino 用のライブラリをインストールします。

**ステップ 3.** 次のパスからコードを直接開きます：File -> Example -> IMU_10DOF_Test。

以下はコードの一部です：
```cpp

void setup()
{
    // I2C バスに参加 (I2Cdev ライブラリはこれを自動的に行いません)
    Wire.begin();

    // シリアル通信を初期化
    // (38400 は 8MHz と 16MHz の両方で動作するため選択されていますが、
    // プロジェクトに応じて変更可能です)
    Serial.begin(38400);

    // デバイスを初期化
    Serial.println("I2C デバイスを初期化中...");
    accelgyro.initialize();
    Barometer.init();

    // 接続を確認
    Serial.println("デバイス接続をテスト中...");
    Serial.println(accelgyro.testConnection() ? "MPU9250 接続成功" : "MPU9250 接続失敗");

    delay(1000);
    Serial.println("     ");

    //  Mxyz_init_calibrated ();

}

void loop()
{

    getAccel_Data();
    getGyro_Data();
    getCompassDate_calibrated(); // コンパスデータはここでキャリブレーションされています
    getHeading();               // この関数を使用する前に 'getCompassDate_calibrated()' を実行する必要があります。これによりキャリブレーションされたデータを取得し、正しい角度を得ることができます。
    getTiltHeading();

    Serial.println("キャリブレーションパラメータ: ");
    Serial.print(mx_centre);
    Serial.print("         ");
    Serial.print(my_centre);
    Serial.print("         ");
    Serial.println(mz_centre);
    Serial.println("     ");


    Serial.println("X, Y, Z の加速度 (g):");
    Serial.print(Axyz[0]);
    Serial.print(",");
    Serial.print(Axyz[1]);
    Serial.print(",");
    Serial.println(Axyz[2]);
    Serial.println("X, Y, Z のジャイロ (度/秒):");
    Serial.print(Gxyz[0]);
    Serial.print(",");
    Serial.print(Gxyz[1]);
    Serial.print(",");
    Serial.println(Gxyz[2]);
    Serial.println("X, Y, Z のコンパス値:");
    Serial.print(Mxyz[0]);
    Serial.print(",");
    Serial.print(Mxyz[1]);
    Serial.print(",");
    Serial.println(Mxyz[2]);
    Serial.println("磁北と X 軸の間の時計回りの角度:");
    Serial.print(heading);
    Serial.println(" ");
    Serial.println("磁北と水平面上の正の X 軸の投影との間の時計回りの角度:");
    Serial.println(tiltheading);
    Serial.println("   ");

    temperature = Barometer.bmp180GetTemperature(Barometer.bmp180ReadUT()); // 温度を取得します。bmp180ReadUT を最初に呼び出す必要があります
    pressure = Barometer.bmp180GetPressure(Barometer.bmp180ReadUP());// 温度を取得します
    altitude = Barometer.calcAltitude(pressure); // 補正されていない計算 - メートル単位
    atm = pressure / 101325;

    Serial.print("温度: ");
    Serial.print(temperature, 2); // 小数点以下 2 桁を表示
    Serial.println("度 C");

    Serial.print("圧力: ");
    Serial.print(pressure, 0); // 整数のみを表示
    Serial.println(" Pa");

    Serial.print("相対大気圧: ");
    Serial.println(atm, 4); // 小数点以下 4 桁を表示

    Serial.print("高度: ");
    Serial.print(altitude, 2); // 小数点以下 2 桁を表示
    Serial.println(" m");

    Serial.println();
    delay(1000);

}

```

**ステップ 4.** コードをアップロードします。正しいボードタイプと COM ポートを選択してください。

以下のように表示されます：
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-test.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-test.png" alt="pir" width={600} height="auto" /></p>

## 参考資料
 - 軸の方向
以下の図は、感度軸の方向と回転の極性を示しています。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png" alt="pir" width={600} height="auto" /></p>

# Grove - IMU 10DOF v1.0
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - IMU 10DOF v1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_V1.1_Eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース


-  **[ZIP]** [Grove - IMU 10DOF v1.0 eagle ファイル](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0_sch_pcb.zip)
-  **[Eagle]** [Grove - IMU 10DOF v1.1 eagle ファイル](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_V1.1_Eagle_file.zip)
-  **[PDF]** [Grove - IMU 10DOF v1.0 回路図 PDF ファイル](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0.pdf)
-  **[PDF]** [Grove - IMU 10DOF v1.1 回路図 PDF ファイル](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove%20-%20IMU%2010DOF%20v1.1.pdf)
-  **[Library]** [Grove-IMU_10DOF ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF)
-  **[PDF]** [BMP180 データシート](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/BMP180.pdf)
-  **[PDF]** [MPU-9250 データシート](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>