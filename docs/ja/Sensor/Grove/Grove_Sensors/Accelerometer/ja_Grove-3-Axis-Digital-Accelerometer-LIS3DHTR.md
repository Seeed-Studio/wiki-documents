---
description: Grove - 3軸デジタル加速度センサー (LIS3DHTR)
title: Grove - 3軸デジタル加速度センサー (LIS3DHTR)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/products/114020121/img/114020121wiki.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/114020121wiki.png" alt="pir" width={600} height="auto" /></p>

Grove - 3軸デジタル加速度センサー（LIS3DHTR）は、Grove製品群の中で低コストの3軸加速度センサーです。このセンサーはLIS3DHTRチップをベースにしており、複数の測定範囲とインターフェース選択を提供します。この小型の3軸加速度センサーがI2C、SPI、ADC GPIOインターフェースをサポートしているとは信じられないかもしれません。これにより、開発ボードとの接続方法を自由に選択できます。さらに、この加速度センサーは周囲温度を監視し、それによる誤差を調整することも可能です。

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)

## 特徴

- 測定範囲: ±2g, ±4g, ±8g, ±16g、複数の範囲選択が可能。
- 複数のインターフェースオプション: Grove I2Cインターフェース、SPIインターフェース、ADCインターフェース。
- 温度調整可能: 温度による誤差を調整・補正可能。
- 3/5V電源供給。

## 仕様

|項目|値|
|---|---|
|電源供給|3/5V|
|インターフェース|I2C/SPI/GPIO ADC|
|I2Cアドレス|デフォルト0x19、SDOピンをGNDに接続すると0x18に変更可能|
|ADC GPIO電源入力|0-3.3V|
|割り込み|割り込みピンが予約済み|
|SPIモード設定|CSピンをGNDに接続|

## 対応プラットフォーム
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

### Grove I2C インターフェースを使用した Seeeduino XIAO の操作

#### 必要な材料

|Seeeduino XIAO|Grove ブレッドボード|Grove - 3軸デジタル加速度センサー (LIS3DHTR)|
|--------|-----------------------|------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/114020121/img/114020121wikithumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)|

#### ハードウェア接続

<!-- ![](https://files.seeedstudio.com/products/114020121/img/wiki_hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/wiki_hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 3軸デジタル加速度センサー (LIS3DHTR) を Seeeduino XIAO の I2C インターフェースに接続します。

#### ソフトウェアコード

```cpp
// この例では I2C を使用します。
#include "LIS3DHTR.h"
#include <Wire.h>
LIS3DHTR<TwoWire> LIS; //IIC
#define WIRE Wire

void setup()
{
  Serial.begin(115200);
  while (!Serial)
  {
  };
  LIS.begin(WIRE,0x19); //IIC 初期化
  //LIS.begin(0x19);
  LIS.openTemp();  //ADC3 を使用する場合、温度検出をオフにする必要があります。
  //  LIS.closeTemp();//デフォルト
  delay(100);
    LIS.setFullScaleRange(LIS3DHTR_RANGE_2G);
  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_4G);
  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_8G);
  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_16G);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_1HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_10HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);
  LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_100HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_200HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_1_6KHZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_5KHZ);
}
void loop()
{
  if (!LIS)
  {
    Serial.println("LIS3DHTR が接続されていません。");
    while (1)
      ;
    return;
  }
  //3軸
    Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
    Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
    Serial.print("z:"); Serial.println(LIS.getAccelerationZ());
  //ADC
  //    Serial.print("adc1:"); Serial.println(LIS.readbitADC1());
  //    Serial.print("adc2:"); Serial.println(LIS.readbitADC2());
  //    Serial.print("adc3:"); Serial.println(LIS.readbitADC3());

  //温度
  Serial.print("temp:");
  Serial.println(LIS.getTemperature());
  delay(500); 
}
```

- **ステップ 1** [ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/archive/master.zip) を Github からダウンロードし、Arduino IDE に「zip」ライブラリを追加します。[Arduino ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/) を参照してください。

- **ステップ 2** 「LIS3DHTR_IIC」のサンプルコードを見つけて、ボードにアップロードします。[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を参照してください。

- **ステップ 3** コードをアップロードした後、シリアルモニターから各軸の加速度と周囲の温度を確認できます。

<!-- ![](https://files.seeedstudio.com/products/114020121/img/wiki_result.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/wiki_result.png" alt="pir" width={600} height="auto" /></p>

### Raspberry Pi を使用した操作

#### 必要な材料

|Raspberry Pi 4B(4GB)|Raspberry Pi 用 Grove ベースハット|Grove - 3軸デジタル加速度センサー (LIS3DHTR)|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/114020121/img/114020121wikithumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)|

#### ハードウェア接続

<!-- ![](https://files.seeedstudio.com/products/114020121/img/Hardware_connection_raspberry_pi_demo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/Hardware_connection_raspberry_pi_demo.jpg" alt="pir" width={600} height="auto" /></p>

LIS3DHTR センサーを Raspberry Pi 用 Grove ベースハットの任意の I2C インターフェースに接続します。

#### コード

- **ステップ 1** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を構成し、grove.py を Raspberry Pi にインストールします。
- **ステップ 2** 以下のコマンドを実行してコードを実行します。

```
virtualenv -p python3 env
source env/bin/activate
# コマンドを入力
grove_3_axis_digital_accelerometer
```
以下は grove_3_axis_digital_accelerometer.py のコードです：

```python
from __future__ import print_function
from grove.i2c import Bus
import time

# デバイスの I2C アドレス
H3LIS331DL_DEFAULT_ADDRESS			= 0x19

# H3LIS331DL レジスタマップ
H3LIS331DL_REG_WHOAMI					= 0x0F # Who Am I レジスタ
H3LIS331DL_REG_CTRL1					= 0x20 # コントロールレジスタ-1
H3LIS331DL_REG_CTRL2					= 0x21 # コントロールレジスタ-2
H3LIS331DL_REG_CTRL3					= 0x22 # コントロールレジスタ-3
H3LIS331DL_REG_CTRL4					= 0x23 # コントロールレジスタ-4
H3LIS331DL_REG_CTRL5					= 0x24 # コントロールレジスタ-5
H3LIS331DL_REG_REFERENCE				= 0x26 # リファレンス
H3LIS331DL_REG_STATUS					= 0x27 # ステータスレジスタ
H3LIS331DL_REG_OUT_X_L					= 0x28 # X軸 LSB
H3LIS331DL_REG_OUT_X_H					= 0x29 # X軸 MSB
H3LIS331DL_REG_OUT_Y_L					= 0x2A # Y軸 LSB
H3LIS331DL_REG_OUT_Y_H					= 0x2B # Y軸 MSB
H3LIS331DL_REG_OUT_Z_L					= 0x2C # Z軸 LSB
H3LIS331DL_REG_OUT_Z_H					= 0x2D # Z軸 MSB

# 加速度データレート設定
H3LIS331DL_ACCL_PM_PD					= 0x00 # パワーダウンモード
H3LIS331DL_ACCL_PM_NRMl					= 0x20 # ノーマルモード
H3LIS331DL_ACCL_PM_0_5					= 0x40 # 低電力モード、ODR = 0.5Hz
H3LIS331DL_ACCL_PM_1					= 0x60 # 低電力モード、ODR = 1Hz
H3LIS331DL_ACCL_PM_2					= 0x80 # 低電力モード、ODR = 2Hz
H3LIS331DL_ACCL_PM_5					= 0xA0 # 低電力モード、ODR = 5Hz
H3LIS331DL_ACCL_PM_10					= 0xC0 # 低電力モード、ODR = 10Hz
H3LIS331DL_ACCL_DR_50					= 0x00 # ODR = 50Hz
H3LIS331DL_ACCL_DR_100					= 0x08 # ODR = 100Hz
H3LIS331DL_ACCL_DR_400					= 0x10 # ODR = 400Hz
H3LIS331DL_ACCL_DR_1000					= 0x18 # ODR = 1000Hz

# 加速度データ更新と軸設定
H3LIS331DL_ACCL_LPEN					= 0x00 # ノーマルモード、軸無効
H3LIS331DL_ACCL_XAXIS					= 0x04 # X軸有効
H3LIS331DL_ACCL_YAXIS					= 0x02 # Y軸有効
H3LIS331DL_ACCL_ZAXIS					= 0x01 # Z軸有効

# 加速度フルスケール選択
H3LIS331DL_ACCL_BDU_CONT				= 0x00 # 連続更新、ノーマルモード、4線インターフェース、LSB優先
H3LIS331DL_ACCL_BDU_NOT_CONT			= 0x80 # MSBとLSB読み取りまで出力レジスタ更新なし
H3LIS331DL_ACCL_BLE_MSB					= 0x40 # MSB優先
H3LIS331DL_ACCL_RANGE_400G				= 0x30 # フルスケール = +/-400g
H3LIS331DL_ACCL_RANGE_200G				= 0x10 # フルスケール = +/-200g
H3LIS331DL_ACCL_RANGE_100G				= 0x00 # フルスケール = +/-100g
H3LIS331DL_ACCL_SIM_3					= 0x01 # 3線インターフェース
H3LIS331DL_RAW_DATA_MAX					= 65536

H3LIS331DL_DEFAULT_RANGE = H3LIS331DL_ACCL_RANGE_100G
H3LIS331DL_SCALE_FS = H3LIS331DL_RAW_DATA_MAX / 4 / ((H3LIS331DL_DEFAULT_RANGE >> 4) + 1)

class H3LIS331DL(object):
	def __init__ (self, address=H3LIS331DL_DEFAULT_ADDRESS):
		self._addr = address
		self._bus  = Bus()
		self.select_datarate()
		self.select_data_config()
	
	def select_datarate(self):
		"""加速度センサーのデータレートを選択"""
		DATARATE_CONFIG = (H3LIS331DL_ACCL_PM_NRMl | H3LIS331DL_ACCL_DR_50 | H3LIS331DL_ACCL_XAXIS | H3LIS331DL_ACCL_YAXIS | H3LIS331DL_ACCL_ZAXIS)
		self._bus.write_byte_data(self._addr, H3LIS331DL_REG_CTRL1, DATARATE_CONFIG)
	
	def select_data_config(self):
		"""加速度センサーのデータ設定を選択"""
		DATA_CONFIG = (H3LIS331DL_DEFAULT_RANGE | H3LIS331DL_ACCL_BDU_CONT)
		self._bus.write_byte_data(self._addr, H3LIS331DL_REG_CTRL4, DATA_CONFIG)
	
	def read_accl(self):
		"""H3LIS331DL_REG_OUT_X_L(0x28) からデータを読み取る、2バイト
		X軸加速度 LSB, X軸加速度 MSB"""
		data0 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_X_L)
		data1 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_X_H)
		
		xAccl = data1 * 256 + data0
		if xAccl > H3LIS331DL_RAW_DATA_MAX / 2:
			xAccl -= H3LIS331DL_RAW_DATA_MAX
		
		"""H3LIS331DL_REG_OUT_Y_L(0x2A) からデータを読み取る、2バイト
		Y軸加速度 LSB, Y軸加速度 MSB"""
		data0 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Y_L)
		data1 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Y_H)
		
		yAccl = data1 * 256 + data0
		if yAccl > H3LIS331DL_RAW_DATA_MAX / 2 :
			yAccl -= H3LIS331DL_RAW_DATA_MAX
		
		"""H3LIS331DL_REG_OUT_Z_L(0x2C) からデータを読み取る、2バイト
		Z軸加速度 LSB, Z軸加速度 MSB"""
		data0 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Z_L)
		data1 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Z_H)
		
		zAccl = data1 * 256 + data0
		if zAccl > H3LIS331DL_RAW_DATA_MAX / 2 :
			zAccl -= H3LIS331DL_RAW_DATA_MAX
		
		return {'x' : xAccl, 'y' : yAccl, 'z' : zAccl}

def main():
	h3lis331dl = H3LIS331DL()
	while True:
		h3lis331dl.select_datarate()
		h3lis331dl.select_data_config()
		time.sleep(0.2)
		accl = h3lis331dl.read_accl()
		print("Raw:    X = {0:6}   Y = {1:6}   Z = {2:6}"
			.format(accl['x'], accl['y'], accl['z']))
		print("Accel: AX = {0:6.3}g AY = {1:6.3}g AZ = {2:6.3}g"
			.format(accl['x'] / H3LIS331DL_SCALE_FS, accl['y'] / H3LIS331DL_SCALE_FS, accl['z'] / H3LIS331DL_SCALE_FS))
		time.sleep(.5)

if __name__ == '__main__':
    main()
```
:::tip
すべてが正常に動作すれば、以下の結果が表示されます。
:::

<!-- ![](https://files.seeedstudio.com/products/114020121/img/python_result.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/python_result.png" alt="pir" width={600} height="auto" /></p>

このプログラムを終了するには、**ctrl+c** を押すだけです。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_190910.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [LIS3DHTR_DATASHEET](https://files.seeedstudio.com/products/114020121/document/lis3dh.pdf)
- **[PDF]** [ハードウェア回路図](https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_SCH_190910.pdf)
- **[ZiP]** [Grove - 3軸デジタル加速度センサー (LIS3DHTR) ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/archive/master.zip)

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