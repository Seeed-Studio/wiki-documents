---
description: Grove - 3軸デジタル加速度計 40g (ADXL357)
title: Grove - 3軸デジタル加速度計 40g (ADXL357)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/101020639-preview.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/101020639-preview.png" alt="pir" width={600} height="auto" /></p>



当社のウェブサイトでは、さまざまなシナリオやニーズに対応する[3軸加速度計](https://www.seeedstudio.com/tag/accelerometer.html)を見つけることができます。今回は、産業用グレードで高い安定性、高精度、低消費電力を備えたADI ADXLシリーズの3軸加速度計をご紹介します。

Grove - 3軸デジタル加速度計 ±40g (ADXL357) は、デジタル出力の[MEMS](https://www.seeedstudio.com/tag/MEMS.html)加速度計です。このセンサーは、±10g@51200 LSB/g、±20g@25600 LSB/g、±40g@12800 LSB/g の3つの異なる測定範囲と精度を選択できます。わずかなキャリブレーション作業を行うだけで、比較的正確な結果を得ることができます。すべてのデータはGrove I2Cポートを介して出力され、I2Cアドレスも選択可能です。さらに、4つのモードに設定可能な2つの割り込み出力ピンも提供しています。

ADI ADXLシリーズ加速度計は、異なる測定範囲と出力ニーズに対応する4つの製品を含んでいます：

製品|測定範囲|出力ポート
-----|-----|----
[Grove - 3軸アナログ加速度計 ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10 / ±20g|アナログ
[Grove - 3軸アナログ加速度計 ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g / ±40g|アナログ
[Grove - 3軸デジタル加速度計 ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g|デジタル I2C
[Grove - 3軸デジタル加速度計 ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|デジタル I2C

 
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)

## 特徴

- 業界をリードする低ノイズ、温度によるオフセットドリフトの最小化、長期安定性により、最小限のキャリブレーションで精密なアプリケーションを実現
- 密閉パッケージにより優れた長期安定性を提供：0 g オフセット vs. 温度（全軸）：最大 0.75 mg/°C
- 超低ノイズ密度（全軸）：80 μg/√Hz
- 内蔵20ビットアナログ-デジタルコンバータ（ADC）
- 低ドリフト、低ノイズ、低消費電力
- 2チャンネル割り込み出力をサポート
- FIFO（96*21ビット）をサポート

## アプリケーション

- 慣性計測装置 (IMUs) / 高度および方位基準システム (AHRSs)
- プラットフォーム安定化システム
- 構造健全性モニタリング
- 状態監視
- 地震イメージング
- 傾斜センサー
- ロボティクス

## 仕様

|パラメータ|値|
|---|---|
|供給電圧|3.3V / 5V|
|動作周囲温度| -40 – 125℃|
|X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub> の感度 / (V<sub>1P8ANA</sub> に比例)|±10 g@80 mv/g (Typ.) / ±20 g@40 mv/g (Typ.) / ±40 g@20 mv/g (Typ.)|
|温度による感度変化|±0.01%/°C  (TA = −40°C to +125°C)|
|0g オフセット / (V1P8ANA/2 に基づく)|±125 mg(Typ.)|
|出力インターフェース|デジタル|

## ピン配置

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>


## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove 3軸加速度計 ADXL357 |
|----------------|-------------|---------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|

> さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)から購入できます。

**2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)から購入できます。
:::

#### ハードウェア接続

- **ステップ1.** Grove - 3軸アナログ加速度計 ±20g (ADXL357) をBase Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/_DAS3077.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** [Seeed_ADXL_357ライブラリ](https://github.com/Seeed-Studio/Seeed_ADXL357B)をGithubからダウンロードします。

- **ステップ2.** Arduino用のライブラリをインストールする方法については、[ライブラリのインストール方法](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library)を参照してください。

- **ステップ3.** `example/ADXL_357/basic_demo` を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/1555916779373.png" alt="pir" width={600} height="auto" /></p>

```cpp
//basic_demo.ino
#include "Seeed_adxl357b.h"


#if defined(ARDUINO_ARCH_AVR)
	#pragma message("Defined architecture for ARDUINO_ARCH_AVR.")
	#define SERIAL Serial
#elif defined(ARDUINO_ARCH_SAM)
	#pragma message("Defined architecture for ARDUINO_ARCH_SAM.")
	#define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_SAMD)
	#pragma message("Defined architecture for ARDUINO_ARCH_SAMD.")	
	#define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_STM32F4)
	#pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")
	#define SERIAL SerialUSB
#else
	#pragma message("Not found any architecture.")
	#define SERIAL Serial
#endif


#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250
int32_t cali_buf[3][CALI_BUF_LEN];
int32_t cali_data[3];

float factory;

Adxl357b  adxl357b;


int32_t deal_cali_buf(int32_t *buf)
{
	int32_t cali_val = 0;
	
	for(int i = 0;i < CALI_BUF_LEN;i++)
	{
		cali_val += buf[i];
	}
	cali_val = cali_val/CALI_BUF_LEN;
	return (int32_t)cali_val;
}


void calibration(void)
{
	int32_t x;
	SERIAL.println("Please Place the module horizontally!");
	delay(1000);
	SERIAL.println("Start calibration........");
	
	for(int i=0;i<CALI_BUF_LEN;i++)
	{
		if(adxl357b.checkDataReady())
		{
			if(adxl357b.readXYZAxisResultData(cali_buf[0][i],cali_buf[1][i],cali_buf[2][i]))
			{
			}
		}
		delay(CALI_INTERVAL_TIME);
		// SERIAL.print('.');
	}
	// SERIAL.println('.');
	for(int i=0;i<3;i++)
	{
		cali_data[i] =  deal_cali_buf(cali_buf[i]);
		SERIAL.println(cali_data[i]);
	}
	x = (((cali_data[2] - cali_data[0]) + (cali_data[2] - cali_data[1]))/2);
	factory = 1.0 / (float)x;
	// SERIAL.println(x);
	SERIAL.println("Calibration OK!!");
}






void setup(void)
{
	uint8_t value = 0;
	float t;
	
	SERIAL.begin(115200);
	if(adxl357b.begin())
	{
		SERIAL.println("Can't detect ADXL357B device .");
		while(1);
	}
	SERIAL.println("Init OK!");
	/*Set full scale range to ±40g*/
	adxl357b.setAdxlRange(FOURTY_G);
	/*Switch standby mode to measurement mode.*/
	adxl357b.setPowerCtr(0);
	delay(100);
	/*Read Uncalibration temperature.*/
	adxl357b.readTemperature(t);
	
	SERIAL.print("Uncalibration  temp = ");
	SERIAL.println(t);
	/**/
	calibration();

}


void loop(void)
{
	int32_t x,y,z;
	uint8_t entry = 0;
	if(adxl357b.checkDataReady())
	{
		if(adxl357b.readXYZAxisResultData(x,y,z))
		{
			SERIAL.println("Get data failed!");
		}
		SERIAL.print("X axis = ");
		SERIAL.print(x*factory);
		SERIAL.println('g');
		SERIAL.print("Y axis = ");
		SERIAL.print(y*factory);
		SERIAL.println('g');
		SERIAL.print("Z axis = ");
		SERIAL.print(z*factory);
		SERIAL.println('g');
		
	}
	delay(100);
}




```

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ5.** Arduino IDEの**シリアルモニタ**を開きます。**ツール -> シリアルモニタ**をクリックするか、++ctrl+shift+m++キーを同時に押します。ボーレートを**115200**に設定します。

- **ステップ6. キャリブレーション** キャリブレーションが完了するまで数秒待ちます。

- **ステップ7.** これでセンサーを使用できるようになり、出力は以下のようになります：

```cpp
Start calibration.......Init OK!
Uncalibration  temp = 29.20
Please Place the module horizontally!
Start calibration........
-1652
11143
6063
Calibration OK!!
X axis = -1.24g
Y axis = 8.50g
Z axis = 4.55g
X axis = -1.21g
Y axis = 8.43g

```


## 回路図オンラインビューア


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>






## リソース

- **[ZIP]** [Grove-3-Axis_Digital_Accelerometer-40g-ADXL357 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip)
- **[PDF]** [ADXL 357 データシート](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/ADXL357.pdf)



## 技術サポートと製品ディスカッション




弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
