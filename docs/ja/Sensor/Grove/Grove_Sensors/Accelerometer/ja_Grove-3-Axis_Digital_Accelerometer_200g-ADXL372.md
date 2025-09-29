---
description: Grove - 3軸デジタル加速度計 200g (ADXL372)
title: Grove - 3軸デジタル加速度計 200g (ADXL372)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/101020632-preview.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/101020632-preview.png" alt="pir" width={600} height="auto" /></p>



当社のウェブサイトでは、さまざまなシナリオやニーズに対応する[3軸加速度計](https://www.seeedstudio.com/tag/accelerometer.html)を見つけることができます。今回は、産業用グレード、高い安定性、高精度、低消費電力を備えたADI ADXLシリーズの3軸加速度計をご紹介します。

Grove - 3軸デジタル加速度計 ±200g (ADXL372) は、超低消費電力のデジタル出力型 [MEMS](https://www.seeedstudio.com/tag/MEMS.html) 加速度計であり、100 mg/LSB のスケールファクターで12ビットの出力を提供します。このセンサーの最も注目すべき特徴は、超低消費電力（測定モードでわずか22μA）と広い測定範囲（±200g）です。すべてのデータはGrove I2Cポートを介して出力され、I2Cアドレスは変更可能です。より広範な測定ニーズに対応するため、サンプリングレートは400Hz/800Hz/1600Hz/3200Hz/6400Hzから選択可能で、帯域幅は200Hz/400Hz/800Hz/1600Hz/3200Hzから選択できます。加速度測定として使用するだけでなく、このモジュールを衝撃やショック検出にも使用することができます。

ADI ADXLシリーズ加速度計には、異なる測定範囲と出力ニーズに対応する4つの製品があります：

製品|測定範囲|出力ポート|消費電力
-----|-----|----|----
[Grove - 3軸アナログ加速度計 ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10 / ±20g|アナログ|測定モード:150 μA / 待機モード:21 μA
[Grove - 3軸アナログ加速度計 ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g / ±40g|アナログ|測定モード:150 μA / 待機モード:21 μA
[Grove - 3軸デジタル加速度計 ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g|デジタル I2C|測定モード:200μA
[Grove - 3軸デジタル加速度計 ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|デジタル I2C|測定モード:22μA

 
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)

## 特徴

- 広い測定範囲: ±200g
- 超低消費電力: 3200 Hz ODRで22 μA
- 選択可能なオーバーサンプリング比と帯域幅
- ホストプロセッサの負荷を最小化する深い埋め込みFIFO
- 内蔵12ビットアナログ-デジタルコンバーター（ADC）

## 応用例

- ポータブルなIoTエッジノード
- 脳震盪および頭部外傷の検出
- 衝撃およびショック検出
- 資産の健康評価

## ピン配置

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>

## 仕様

|パラメータ|値|
|---|---|
|供給電圧|3.3V / 5V|
|動作環境温度| -40 – 125℃|
|X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub>の感度 / (V<sub>1P8ANA</sub>に比例)|±50mg/°C（通常動作） / ±35mg/°C（低ノイズモード）|
|温度による感度変化|±0.01%/°C  (TA = −40°C ～ +125°C)|
|0gオフセット|±1g（典型値）|
|出力インターフェース|デジタル|

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove 3軸加速度計 ADXL372 |
|----------------|-------------|---------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|

>さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

#### ハードウェア接続

- **ステップ1.** Grove - 3軸アナログ加速度計 ±200g (ADXL372) をBase Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/_DAS3075.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/_DAS3075.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** [Seeed_ADXL_372ライブラリ](https://github.com/Seeed-Studio/Accelerometer_ADXL372)をGithubからダウンロードします。

- **ステップ2.** Arduino用のライブラリをインストールする方法については、[ライブラリのインストール方法](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library)を参照してください。

- **ステップ3.** `example/ADXL_372/continuous_reading` を開きます。
<!-- ![Alt text](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/1555913126073.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/1555913126073.png" alt="pir" width={600} height="auto" /></p>

```cpp
//continuous_reading.ino

#include "Wire.h"
#include "adxl372.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SERIALUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif


float cali_data[3];

#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250

float cali_buf[3][CALI_BUF_LEN];


ADXL372 acc;
xyz_t xyz;

float deal_cali_buf(float *buf)
{
	float cali_val = 0;
	
	for(int i = 0;i < CALI_BUF_LEN;i++)
	{
		cali_val += buf[i];
	}
	cali_val = cali_val/CALI_BUF_LEN;
	return (float)cali_val;
}


void calibration(void)
{
	SERIAL.println("モジュールを水平に置いてください！");
	delay(1000);
	SERIAL.println("キャリブレーションを開始します........");
	
  
	for(int i=0;i<CALI_BUF_LEN;i++)
	{
		while (!(acc.status() & DATA_READY)); 
		acc.read(&xyz);
		cali_buf[0][i] = xyz.x;
		cali_buf[1][i] = xyz.y;
		cali_buf[2][i] = xyz.z;
		delay(CALI_INTERVAL_TIME);
		SERIAL.print('.');
	}
	SERIAL.println('.');
	for(int i=0;i<3;i++)
	{
		cali_data[i] =  deal_cali_buf(cali_buf[i]);
		if(2 == i){
      
			cali_data[i] -= 10;
		}
		SERIAL.println(cali_data[i]);
	}
	SERIAL.println("キャリブレーション完了！！");
}


void setup() {
  SERIAL.begin(115200);

  acc.begin();
  
  SERIAL.println(acc.id(), HEX);
  acc.timing_ctrl(RATE_400);
  acc.measurement_ctrl(BW_200, true);
  acc.power_ctrl(MEASUREMENT_MODE);
  acc.setActiveTime(10);

  calibration();
}

void loop() {
  if (acc.status() & DATA_READY) {
    acc.read(&xyz);
    SERIAL.print("X軸加速度 = ");
    SERIAL.print((xyz.x - cali_data[0]) / 10.0);
    SERIAL.println(" g ");
    SERIAL.print("Y軸加速度 = ");
    SERIAL.print((xyz.y - cali_data[1]) / 10.0);
    SERIAL.println(" g ");
    SERIAL.print("Z軸加速度 = ");
    SERIAL.print((xyz.z - cali_data[2]) / 10.0);
    SERIAL.println(" mg ");
  }
  SERIAL.println("   ");
  SERIAL.println("   ");
  delay(1000);
}
```

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ5.** Arduino IDEの**シリアルモニタ**を開きます。**ツール -> シリアルモニタ**をクリックするか、++ctrl+shift+m++キーを同時に押します。ボーレートを**115200**に設定します。

- **ステップ6. キャリブレーション** キャリブレーションが完了するまで数秒待ちます。

- **ステップ7.** これでセンサーを使用できるようになり、出力は以下のようになります：

```cpp
モジュールを水平に置いてください！
キャリブレーションを開始します........
................
18.07
-10.73
-40.13
キャリブレーション完了！！
X軸加速度 = 0.09 g 
Y軸加速度 = 0.17 g 
Z軸加速度 = 1.31 mg 
   
   
X軸加速度 = -0.11 g 
Y軸加速度 = -0.03 g 
Z軸加速度 = 1.31 mg 
```


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove-3-Axis_Digital_Accelerometer-200g-ADXL372 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip)
- **[PDF]** [ADXL 372 データシート](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip)

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