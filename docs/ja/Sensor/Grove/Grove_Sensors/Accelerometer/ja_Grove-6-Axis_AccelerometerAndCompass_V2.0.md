---
description: Grove - 6軸加速度計＆コンパス V2.0
title: Grove - 6軸加速度計＆コンパス V2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-6-Axis_AccelerometerAndCompass_V2.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Accelerometer_And_Compass_v2.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Accelerometer_And_Compass_v2.JPG" alt="pir" width={600} height="auto" /></p>

Grove –6軸加速度計＆コンパス V2.0は、3軸加速度計と3軸磁気センサーを組み合わせたモジュールです。これはGrove - 6軸加速度計＆コンパス V1.0のアップグレード版であり、センサーモジュールLSM303Dに基づいています。このモジュールは、±2g / ±4g / ±8g / ±16gの選択可能な線形加速度フルスケール範囲と、±2 / ±4 / ±8 / ±12ガウスの選択可能な磁場フルスケール範囲を備えています。磁気センサー部分と加速度計部分は個別に電源をオフにすることができ、消費電力を削減できます。Arduinoは、このモジュール用に提供されているライブラリを使用して、I2Cインターフェースを介してこれらのデータを取得できます。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Compass-v2.0-p-2476.html)

## 仕様

-   入力電圧: 5V
-   I2Cインターフェースおよび選択可能なSPIインターフェース
-   測定スケール選択可能
-   6D方向検出
-   2つの独立したプログラム可能な割り込みジェネレーター
-   パワーダウンモード
-   I2Cアドレス: 0x1E（デフォルト）、または0x1D

:::note
    複数のI2Cデバイスを使用したい場合は、[ソフトウェアI2C](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/)を参照してください。
:::
:::tip
    Groveモジュールの詳細については、[Groveシステム](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Grove-6-Axis_AccelerometerAndCompass_V2.0_inter.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Grove-6-Axis_AccelerometerAndCompass_V2.0_inter.jpg" alt="pir" width={600} height="auto" /></p>

-   ① Groveインターフェース、I2Cに接続
-   ② SPIインターフェース
-   ③ I2CまたはSPI選択パッド（デフォルトはI2C）。SPIを使用する場合、このパッドを切断してください。
-   ④ 割り込みデジタル出力
-   ⑤ アドレス選択パッド。デフォルトではbとaが接続され、アドレスは0x1Eです。bとcを接続するとアドレスは0x1Dになります。SPIを使用する場合、このパッドをどちらか一方に切断してください。

## はじめに

LSM303Dは、3D加速度計と3D磁気センサーを含む6Dセンサーモジュールです。I2Cデジタルインターフェースを備えているため、アナログ-デジタル変換器が不要です。

MCUはI2Cインターフェースを介して直接6Dセンサーのデータを収集できます。それでは、このLSM303D 6Dセンサーモジュールの使用を始めましょう。

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のアイテムを準備してください：

| Seeeduino V4.2 | Base Shield | Grove-6-Axis_AccelerometerAndCompass_V2.0 |
|----------------|-------------|-------------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/45d_small.JPG" alt="pir" width={200} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Compass-v2.0-p-2476.html)|

- **ステップ2.** Grove-6-Axis_AccelerometerAndCompass_V2をGrove-Base Shieldの**I2C**ポートに接続します。
- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!--link-->

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Grove Base Shieldがない場合、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::
<!--I2C-->

| Seeeduino_v4 | Grove-6-Axis_AccelerometerAndCompass_V2  |
|--------------|------------------------------------------|
| 5V           | VCC                                      |
| GND          | GND                                      |
| SDA          | SDA                                      |
| SCL          | SCL                                      |

#### ソフトウェア
**ステップ1.** [ライブラリ](https://github.com/Seeed-Studio/6Axis_Accelerometer_And_Compass_v2)をGithubからダウンロードします。

**ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

**ステップ3.** 新しいArduinoスケッチを作成し、以下のコードを貼り付けるか、次のパスからコードを直接開きます：File -> Example -> Accelerometer_Compass -> Accelerometer_Compass。

**ステップ4.** コードをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

以下はコードです：
```c
/* LSM303DLM Example Code base on LSM303DLH example code by Jim Lindblom SparkFun Electronics

   date: 9/6/11
   license: Creative commons share-alike v3.0

   Modified by:Frankie.Chu
   Modified by:Jacky.Zhang 2014-12-11: Ported to 6-Axis Accelerometer&Compass of Seeed Studio
   Modified by:Jacky.Zhang 2015-1-6: added SPI driver

   Summary:
   Show how to calculate level and tilt-compensated heading using
   the snazzy LSM303DLH 3-axis magnetometer/3-axis accelerometer.

   Firmware:
   You can set the accelerometer's full-scale range by setting
   the SCALE constant to either 2, 4, or 8. This value is used
   in the initLSM303() function. For the most part, all other
   registers in the LSM303 will be at their default value.

   Use the write() and read() functions to write
   to and read from the LSM303's internal registers.

   Use getLSM303_accel() and getLSM303_mag() to get the acceleration
   and magneto values from the LSM303. You'll need to pass each of
   those functions an array, where the data will be stored upon
   return from the void.

   getHeading() calculates a heading assuming the sensor is level.
   A float between 0 and 360 is returned. You need to pass it a
   array with magneto values.

   getTiltHeading() calculates a tilt-compensated heading.
   A float between 0 and 360 degrees is returned. You need
   to pass this function both a magneto and acceleration array.

   Headings are calculated as specified in AN3192:
   http://www.sparkfun.com/datasheets/Sensors/Magneto/Tilt%20Compensated%20Compass.pdf
*/

/*
ハードウェアとソフトウェアのコメント
I2Cモード：
1. ジャンパー "I2C EN" と ADDRジャンパーを0x1Eに接続する
2. Lsm303d.initI2C() 関数を使用してI2CでGroveを初期化する
SPIモード：
1. ジャンパー "I2C_EN" を切断し、ADDRジャンパーを任意の側に切断する
2. SPIプロトコル用にピンをチップセレクトとして定義する
3. Lsm303d.initSPI(SPI_CS) 関数を使用してSPIでGroveを初期化する
SPI.hはArduinoでこれらを設定します
const int SDI = 11;
const int SDO = 12;
const int SCL = 13;
*/

#include <LSM303D.h>
#include <Wire.h>
#include <SPI.h>

/* グローバル変数 */
int accel[3];  // 生の加速度値をここに格納します
int mag[3];  // 生の磁気センサー値をここに格納します
float realAccel[3];  // 計算された加速度値をここに格納します
float heading, titleHeading;

#define SPI_CS 10

void setup()
{
	char rtn = 0;
    Serial.begin(9600);  // デバッグ用にシリアルを使用します
    Serial.println("\r\n電源オン");
    rtn = Lsm303d.initI2C();
    //rtn = Lsm303d.initSPI(SPI_CS);
    if(rtn != 0)  // SCALEフルスケール範囲を使用してLSM303を初期化します
	{
		Serial.println("\r\nLSM303Dが見つかりません");
		while(1);
	}
	else
	{
		Serial.println("\r\nLSM303Dが見つかりました");
	}
}

void loop()
{
	Serial.println("\r\n**************");
	//getLSM303_accel(accel);  // 加速度値を取得し、accel配列に格納します
	Lsm303d.getAccel(accel);
	while(!Lsm303d.isMagReady());// 磁気センサーの読み取り準備が整うまで待機します
	Lsm303d.getMag(mag);  // 磁気センサー値を取得し、magに格納します

	for (int i=0; i<3; i++)
	{
		realAccel[i] = accel[i] / pow(2, 15) * ACCELE_SCALE;  // 実際の加速度値を計算し、単位はgです
	}
	heading = Lsm303d.getHeading(mag);
	titleHeading = Lsm303d.getTiltHeading(mag, realAccel);

	printValues();

	delay(200);  // シリアルの読みやすさのために遅延
}

void printValues()
{  
	Serial.println("X, Y, Zの加速度は以下の通りです");
	for (int i=0; i<3; i++)
	{
		Serial.print(realAccel[i]);
		Serial.println("g");
	}
	//以下にレベルと傾き補正されたヘディングを比較して表示します
	Serial.println("磁北とx軸の間の時計回りの角度：");
	Serial.print(heading, 3); // センサーが水平である場合のみ機能します
	Serial.println(" 度");
	Serial.print("磁北と水平面内の正のx軸の投影の間の時計回りの角度：");
	Serial.print(titleHeading, 3);  // 傾き補正がどれほど素晴らしいかを確認してください！
	Serial.println(" 度");
}
```

**ステップ 5.** シリアルモニターを開くと、以下のようにカラ―センサーの出力結果が表示されます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/6-Axis_AccelerometerAndCompass_V2.0_demo.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/6-Axis_AccelerometerAndCompass_V2.0_demo.jpg" alt="pir" width={600} height="auto" /></p>

**ステップ 6.** 加速度値と磁北と x 軸の間の時計回りの角度が確認できます。

X/Y/Z は 3 軸の加速度を示します。そして、磁北と x 軸の間の角度が計算されます。

さらに、磁北と正の x 軸の投影との間の角度も計算されます。

### Raspberry Pi で遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove-6-Axis_AccelerometerAndCompass_V2.0 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/45d_small.JPG" alt="pir" width={200} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Compass-v2.0-p-2476.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry Pi に接続します。
- **ステップ 3.** Grove-6-Axis_AccelerometerAndCompass_V2.0 を GrovePi_Plus の **I2C** ポートに接続します。
- **ステップ 4.** USB ケーブルを使用して Raspberry Pi を PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/with_rpi.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を構築します。
- **ステップ 2.** GitHub リポジトリをクローンします。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行してセンサーを使用します。

```bash
cd ~/GrovePi/Software/Python/grove_6axis_acc_compass
python grove_6axis_accel_compass_example.py
```

以下はサンプルコードです：
```python
#!/usr/bin/env python
#
# GrovePi example for using the Grove - 6-Axis Accelerometer&Compass v2.0(https://www.seeedstudio.com/depot/Grove-6Axis-AccelerometerCompass-v20-p-2476.html)
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this library?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## ライセンス
MIT ライセンス (MIT)
Raspberry Pi 用 GrovePi: Grove センサーを Raspberry Pi に接続するためのオープンプラットフォーム。
Copyright (C) 2017  Dexter Industries
本ソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）のコピーを取得したすべての人に対し、以下の条件に従い、ソフトウェアを制限なく使用、コピー、変更、公開、配布、サブライセンス、または販売する権利を無償で許可します。
上記の著作権表示およびこの許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。
本ソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。これには、商品性、特定目的への適合性、および非侵害性の保証が含まれますが、これに限定されません。いかなる場合も、著者または著作権者は、契約、不法行為、またはその他の行為に起因する損害、またはソフトウェアの使用またはその他の取引に関連する損害について責任を負いません。
'''
import lsm303d

try:
	acc_mag=lsm303d.lsm303d()

	while True:

		# 加速度値を取得
		acc=acc_mag.getRealAccel()

		# コンパスが準備完了するまで待機
		while True:
			if acc_mag.isMagReady():
				break

		# 方位を読み取る
		heading= acc_mag.getHeading()

		print("X, Y, Z の加速度は %.3fg, %.3fg, %.3fg" %(acc[0],acc[1],acc[2]))
		print("方位 %.3f 度\n" %(heading))

except IOError:
	print("加速度計から読み取れません。センサーを確認して再試行してください")
```

以下は結果です：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/rpi_result.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/rpi_result.jpg" alt="pir" width={600} height="auto" /></p>

## 参考資料

このパラメータについてさらに詳しく知りたい場合は、[こちら](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/res/LSM303_application_note.pdf)をクリックしてください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Airplane.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Airplane.jpg" alt="pir" width={600} height="auto" /></p>

<!-- 
![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Airplane_calculated.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Airplane_calculated.jpg" alt="pir" width={600} height="auto" /></p>

<div class="admonition note">
<p class="admonition-title">注意事項</p>
<p>1.  すべてのST MEMS加速度計は工場で校正されており、ほとんどのアプリケーションでは追加の校正を行う必要はありません。ただし、2°未満の方位精度を達成するには、簡単な校正手順が必要です。</p>
<p>2.  磁北とx軸の間の時計回りの角度をテストする際には、デバイスのXa軸を任意の方向に合わせることができますが、デバイスを下向きにしないでください。以下の画像を参照してください：</p>
</div>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Testing.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/Testing.jpg" alt="pir" width={600} height="auto" /></p>



## リソース


-  **[ライブラリ]** [6-Axis Accelerometer&Compass v2.0 Library for Arduino](https://github.com/Seeed-Studio/6Axis_Accelerometer_And_Compass_v2)

- **[ライブラリ]** [6-Axis Accelerometer&Compass v2.0 Library for Raspberry Pi](https://github.com/DexterInd/GrovePi/blob/master/Software/Python/grove_6axis_acc_compass)
-  **[データシート]** [LSM303D_データシート](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/res/LSM303D_datasheet.pdf)
-  **[Eagleファイル]** [6-Axis Accelerometer&Compass v2.0 Eagleファイル](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/res/Grove-6-Axis_AccelerometerAndCompass_v2.0_sch_pcb.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_6-Axis_Accelerometer&Compass_V2.0 から作成されました -->


## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>