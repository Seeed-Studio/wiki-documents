---
description: Grove - 3軸アナログ加速度センサー 40g (ADXL356C)
title: Grove - 3軸アナログ加速度センサー 40g (ADXL356C)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis_Analog_Accelerometer_40g-ADXL356C
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/101020638-preview.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/101020638-preview.png" alt="pir" width={600} height="auto" /></p>


当社のウェブサイトでは、さまざまなシナリオやニーズに対応する[3軸加速度センサー](https://www.seeedstudio.com/tag/accelerometer.html)を見つけることができます。今回は、産業用グレードで高い安定性、高精度、低消費電力を備えたADI ADXLシリーズの3軸加速度センサーをご紹介します。

Grove - 3軸アナログ加速度センサー ±40g (ADXL356C) は、アナログ出力の[MEMS](https://www.seeedstudio.com/tag/MEMS.html)加速度センサーです。このセンサーは、±10gと±40gの2つの測定範囲を選択できます。少しのキャリブレーション作業を行うだけで、比較的正確な結果を得ることができます。オンボードのGroveポートは、2チャンネルのアナログデータを出力できます：1つはZ軸用、もう1つはX/Y軸用です。オンボードスイッチを使用して、X軸またはY軸の信号を選択して出力できます。また、4ピンのはんだ付け穴を使用して、X/Y/Z軸を同時に出力することも可能です。このセンサーの消費電力は非常に低く、通常動作モードでは150 μA、スタンバイモードではわずか21 μAです。背面のパッド接続を変更することで動作モードを切り替えることができます。

ADI ADXLシリーズ加速度センサーには、異なる測定範囲と出力ニーズに対応する4つの製品があります：

製品|測定範囲|出力ポート|消費電力
-----|-----|----|----
[Grove - 3軸アナログ加速度センサー ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10 / ±20g|アナログ|測定モード:150 μA / スタンバイモード:21 μA
[Grove - 3軸アナログ加速度センサー ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g / ±40g|アナログ|測定モード:150 μA / スタンバイモード:21 μA
[Grove - 3軸デジタル加速度センサー ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g|デジタル I2C|測定モード:200μA
[Grove - 3軸デジタル加速度センサー ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|デジタル I2C|測定モード:22μA

 
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)

## 特徴

- 業界トップクラスの低ノイズ、温度によるオフセットドリフトの最小化、長期安定性を実現し、最小限のキャリブレーションで精密なアプリケーションを可能にします。
- 気密パッケージにより、長期的な安定性が優れています。温度による 0 g オフセット（全軸）：最大 0.75 mg/°C。
- ADXL356 の高周波数における低ノイズは、ワイヤレス状態監視に最適です。
- 低ドリフト、低ノイズ。
- 超低消費電力：通常動作モード 150 μA、スタンバイモード 21 μA。

## アプリケーション

- 慣性計測ユニット（IMU）/高度および方位基準システム（AHRS）
- プラットフォーム安定化システム
- 構造健全性モニタリング
- 状態監視
- 地震イメージング
- 傾斜センサー
- ロボティクス

## 仕様

| パラメータ | 値 |
|---|---|
| 電源電圧 | 3.3V / 5V |
| 動作周囲温度 | -40 – 125℃ |
| 出力フルスケール範囲 (FSR) | ±10g / ±40g |
| X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub> の感度 / (V<sub>1P8ANA</sub> に比例) | ±10 g@80 mv/g (Typ.) / ±40 g@20 mv/g (Typ.) |
| 温度による感度変化 | ±0.01%/°C (TA = −40°C ～ +125°C) |
| 0g オフセット / (V1P8ANA/2 に基づく) | ±125 mg (Typ.) |
| 出力インターフェース | アナログ |

## ピン配置

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
| Arduino | Raspberry Pi |
|---|---|
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p> |

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove 3軸加速度計 ADXL356C |
|----------------|-------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|

> さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。  
**2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

#### ハードウェア接続

- **ステップ1.** Grove - 3軸アナログ加速度計 ±20g (ADXL356B) をBase Shieldの**A0**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/_DAS3071.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/_DAS3071.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ1.** Githubから[Seeed_ADXL_356.ino](https://github.com/linux-downey/Seeed_ADXL356/blob/master/Seeed_ADXL_356/Seeed_ADXL_356.ino)をダウンロードします。

または、以下のコードをコピーすることもできます。

:::note
このコードはADXL_356BとADXL_356Cの両方に対応しています。356Cで使用する場合は、`#define MODUEL_RANGE  20`を`#define MODUEL_RANGE  40`に切り替えてください。そうしないと動作しません。
:::

```cpp
#include <Arduino.h>

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif

float cali_data_xy;
float cali_data_z;
int16_t scale;

#define MODUEL_RANGE           20

#define MODULE_VOL             1.8

#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250

float cali_buf_xy[CALI_BUF_LEN];
float cali_buf_z[CALI_BUF_LEN];

#define XY_PIN   A0
#define Z_PIN    A1

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
		cali_buf_xy[i] = analogRead(XY_PIN);;
		cali_buf_z[i] = analogRead(Z_PIN);
		delay(CALI_INTERVAL_TIME);
	}
	cali_data_xy =  deal_cali_buf(cali_buf_xy);
	cali_data_z =  (float)deal_cali_buf(cali_buf_z);
	SERIAL.println("キャリブレーション完了！！");
	scale = (float)1000 / (cali_data_z - cali_data_xy);
	cali_data_z -= (float)980 / scale;
	SERIAL.println(cali_data_xy);
	SERIAL.println(cali_data_z);
	SERIAL.println(scale);
}

void AccMeasurement(void)
{
	int16_t val_xy = 0;
	int16_t val_z = 0;
	val_xy = analogRead(XY_PIN);
	val_z = analogRead(Z_PIN);
	
	SERIAL.print("生データ xy  = ");
	SERIAL.println(val_xy);
	SERIAL.print("生データ z  = ");
	SERIAL.println(val_z);
	SERIAL.println(" ");
	
	val_xy -= cali_data_xy;
	val_z -= cali_data_z;
	SERIAL.print("x または y 方向の加速度は ");
	SERIAL.print(val_xy * scale / 1000.0);
	SERIAL.println(" g ");
	SERIAL.print("z 方向の加速度は ");
	SERIAL.print(val_z * scale / 1000.0);
	SERIAL.println(" g ");
	SERIAL.println(" ");
	SERIAL.println(" ");
	SERIAL.println(" ");
	delay(1000);
}

void setup()
{
	SERIAL.begin(115200);
	#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    analogReadResolution(12);
    #endif
	calibration();
	SERIAL.print("スケール = ");
	SERIAL.println(scale);
}

void loop()
{
	AccMeasurement();
}
```

- **ステップ2.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ3.** Arduino IDEの**シリアルモニタ**を開きます。**ツール->シリアルモニタ**をクリックするか、++ctrl+shift+m++キーを同時に押します。ボーレートを**115200**に設定します。

- **ステップ4. キャリブレーション** シリアルモニタのキャリブレーション手順に従ってください。数ステップでキャリブレーションが完了します。

- **ステップ5.** これでセンサーを使用できるようになり、出力は以下のようになります：

```cpp
モジュールを水平に置いてください！
キャリブレーションを開始します........
キャリブレーション完了！！
184.93
185.03
121
スケール = 121
生データ xy  = 185
生データ z  = 193
 
x または y 方向の加速度は 0.00 g 
z 方向の加速度は 0.85 g 
 
 
 
生データ xy  = 188
生データ z  = 196
 
x または y 方向の加速度は 0.36 g 
z 方向の加速度は 1.21 g
```

:::note
Groveポートを使用してデータを出力する場合、X軸とY軸を同時に出力することはできません。オンボードスイッチを使用して出力チャンネルを選択できます。X/Y/Zを同時に出力したい場合は、4ピンのはんだ付け穴を使用してください。
:::

## FAQ

**Q1: ±10gの測定範囲を選択する方法は？**  

A1: 測定範囲を変更するには、ハードウェアとソフトウェアの両方を修正する必要があります。まず、±40gに接続されている背面パッドを切断し、±10gに再はんだ付けします。その後、コードブロックの12行目を以下のように変更してください。

```
#define MODUEL_RANGE           40
```

⬇⬇

```
#define MODUEL_RANGE           10
```



## 回路図オンラインビューア



<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/res/Grove%20-%203-Axis%20Analog%20Accelerometer%20%C2%B140g%20(ADXL356C).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[ZIP]** [Grove - 3-Axis Analog Accelerometer ±20g (ADXL356C) 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/res/Grove%20-%203-Axis%20Analog%20Accelerometer%20%C2%B140g%20(ADXL356C).zip)
- **[PDF]** [ADXL 356 データシート](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/res/ADXL356B.pdf)



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