---
description: Xadow - マルチチャンネルガスセンサー
title: Xadow - マルチチャンネルガスセンサー
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Multichannel_Gas_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Multichannel_Gas_Sensor_photo.jpg)

Xadow – マルチチャンネルガスセンサーは、コンパクトなMOSセンサーであるMiCS-6814を搭載した非常に小型のセンサーボードです。MiCS-6814は、自動車排気ガスや農業/工業の臭気による汚染を検出するための堅牢なMEMSセンサーです。このセンサーボードには2つの標準的なXadowインターフェースがあり、[Xadow - メインボード](https://wiki.seeedstudio.com/ja/Xadow_Main_Board)と非常に簡単に使用できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Multichannel-Gas-Sensor-p-2459.html)

## 特徴
---
- 1つのパッケージに3つの完全に独立したセンサー要素を搭載
- ATmega168PAを搭載
- プログラム可能なアドレスを持つI2Cインターフェース
- 低消費電力のためにヒーティングパワーをオフに可能
- 標準的なXadowの形状

## ブロック図

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Multichannel_Gas_Sensor_block_diagram.jpg)

## 電気的特性
---
|項目 |条件	|最小値	|典型値	|最大値	|単位|
|---|---|---|---|---|---|
|電圧|	-	|3.1	|3.3|	3.5|	V|
|リップル	|@最大電力|	-	|80	|100|	mV|
|ヒーティングパワー|	-	|-	|-	|88|	mW|
|最大電力|	-|	-|	-|	150|	mW|
|ADC精度|	-|	-|	10|	-	|ビット|
|ADC電圧	|-	|0|	-	|3.3	|V|
|I2Cレート|	-|	-	|100	|400	|kHz|
|VIL|	@I2C|	-0.5	|-|	0.99	|V|
|VIH|	@I2C|	2.31|	-|	3.8	|V|

**REDセンサーの性能**

|REDセンサーの特性	|記号	|典型値|	最小値	|最大値	|単位|
|---|---|---|---|---|---|
|空気中の感知抵抗	|R0|	-	|100	|1500|	kΩ|
|典型的なCO検出範囲	|FS|	-	|1|	1000|	ppm|
|感度係数	|SR|	-|	1.2|	50|	-|

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Red_sensor.jpg)

**OXセンサーの性能**
|OXセンサーの特性	|記号|	典型値	|最小値	|最大値	|単位|
|---|---|---|---|---|---|
|空気中の感知抵抗	|R0	|-	|0.8|	20|	kΩ|
|典型的なNO2検出範囲|	FS|	-	|0.05|	10|	ppm|
|感度係数	|SR	|-|	2	|-	|-|

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/OX_sensor.jpg)

**NH3センサーの性能**
|NH3センサーの特性|	記号	|典型値|	最小値|	最大値|	単位|
|---|---|---|---|---|---|
|空気中の感知抵抗	|R0|	-	|10	|1500|	kΩ|
|典型的なNH3検出範囲|	FS	|-	|1	|300|	ppm|
|感度係数|	SR|-	|1.5|	15|	-|

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/NH3_sensor.jpg)

## ピン定義
---
![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_Pins.jpg)

## デモンストレーション

[Xadow - メインボード](https://wiki.seeedstudio.com/ja/Xadow_Main_Board)を使用して開始できます。

**ハードウェアのインストール:**

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Mutichannel_Gas_Sensor_connect_to_Xadow.JPG)

1) Xadow - マルチチャンネルガスセンサーを[Xadow - メインボード](https://wiki.seeedstudio.com/ja/Xadow_Main_Board)に接続します。Xadowドライバーをインストールすることを忘れないでください。注意: Xadow - マルチチャンネルガスセンサーを[Xadow - メインボード](https://wiki.seeedstudio.com/ja/Xadow_Main_Board)に接続する際には、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填の角を別のモジュールの直角に接続する必要があります（各Xadowモジュールの4つの角を参照）。

コードのアップロード:

2) [Arduinoライブラリ & Grove/Xadowファームウェア](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)をダウンロードしてArduinoライブラリにインストールします。

3) 次のパスでコードを直接開きます: File -> Example -> Mutichannel_Gas_Sensor -> ReadSensorValue_Xadow。

ReadSensorValue_Xadow.inoの内容は以下を参照してください。

```
/*
    これはMutichannelGasSensorライブラリをテストするデモです。
    このコードはXadowメインボード上で動作し、I2CスレーブはXadow-MutichannelGasSensorです。
    Xadow-MutichannelGasSensorにはATmega168PAが搭載されており、センサーの出力を取得してマスターにフィードバックします。
    データは生のADC値であり、アルゴリズムはマスター側で実現する必要があります。

    質問があればお気軽にメールしてください。

    Jacky Zhang, 組み込みソフトウェアエンジニア
    qi.zhang@seeed.cc
    2015年3月17日
*/

#include "xadow.h"
#include <Wire.h>
#include "MutichannelGasSensor.h"

void setup()
{
    Xadow.init();

    Serial.begin(9600);  // 出力用のシリアルを開始
    Serial.println("電源オン!");

    mutichannelGasSensor.begin(0x04);//スレーブのデフォルトI2Cアドレスは0x04
    //mutichannelGasSensor.changeI2cAddr(0x10);
    //mutichannelGasSensor.doCalibrate();
    //delay(8000);
    while(mutichannelGasSensor.readR0() < 0)
    {
        Serial.println("センサー初期化エラー!!");
        delay(1000);
    }
    Serial.print("Res0[0]: ");
    Serial.println(mutichannelGasSensor.res0[0]);
    Serial.print("Res0[1]: ");
    Serial.println(mutichannelGasSensor.res0[1]);
    Serial.print("Res0[2]: ");
    Serial.println(mutichannelGasSensor.res0[2]);
    mutichannelGasSensor.powerOn();
}

void loop()
{
    mutichannelGasSensor.readR();
    Serial.print("Res[0]: ");
    Serial.println(mutichannelGasSensor.res[0]);
    Serial.print("Res[1]: ");
    Serial.println(mutichannelGasSensor.res[1]);
    Serial.print("Res[2]: ");
    Serial.println(mutichannelGasSensor.res[2]);

    mutichannelGasSensor.calcGas();
    Serial.print("NH3: ");
    Serial.print(mutichannelGasSensor.density_nh3);
    Serial.println("ppm");
    Serial.print("CO: ");
    Serial.print(mutichannelGasSensor.density_co);
    Serial.println("ppm");
    Serial.print("NO2: ");
    Serial.print(mutichannelGasSensor.density_no2);
    Serial.println("ppm");

    Xadow.greenLed(LEDON);
    delay(500);
    Xadow.greenLed(LEDOFF);
    delay(500);
    Serial.println("...");
}
```

4) コードをアップロードします。Arduino環境の[ツール | ボード]メニューからSeeeduino Xadowを選択し、[Xadow - メインボード](https://wiki.seeedstudio.com/ja/Xadow_Main_Board)が使用している正しいシリアルポートを選択してください。または、代わりにArduino Leonardoを選択することもできます。

シリアルモニターを開くことで、センサーから読み取った生データを確認することができます。

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_XadowPrint.jpg)


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
- [Xadow - Multichannel Gas Sensor v1.0 回路図](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_v1.0_sch.pdf)
- [Xadow - Multichannel Gas Sensor Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_eagle_files.zip)
- [MiCS-6814 データシート](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/MiCS-6814_Datasheet.pdf)
- [Arduino ライブラリ & Grove/Xadow ファームウェア](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>