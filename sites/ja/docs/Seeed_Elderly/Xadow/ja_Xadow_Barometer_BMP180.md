---
description: Xadow - 気圧計 BMP180
title: Xadow - 気圧計 BMP180
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Barometer_BMP180
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Xadow-bmp180.JPG)

このモジュールは現在の環境の気圧と温度を測定することができ、その信号を高度情報に変換することができます。BMP180はBMP085の機能互換後継機であり、消費者向けアプリケーション向けの新世代の高精度デジタル圧力センサーです。BMP180の超低消費電力、低電圧電子機器、優れた性能は、ウェアラブルデバイス、携帯電話、PDA、GPSナビゲーションデバイス、屋外機器での使用に最適化されています。I2Cインターフェースにより、マイクロコントローラーとのシステム統合が容易になります。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Barometer-BMP180-v1.0-p-2412.html)


## 仕様
---
動作電圧: 3.3v  
圧力範囲: 300 ~ 1100hPa(+9000m ~ -500m 海抜に関連)  
低消費電力  
制御モード: I2C (アドレス 0x77)  
動作温度: -40 ~ +85 °C  
寸法: 25.43mm x 20.35mm  


## デモンストレーション
---
**Xadow メインボードと使用する場合**

このデモでは、現在の環境の気圧と温度を取得する方法を示します。

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/IMG_2379.JPG)

!!!注意
    Xadow - 気圧計 BMP180をXadow - メインボードに接続する際には、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填の角を別のモジュールの直角に接続する必要があります（各Xadowモジュールの4つの角を参照してください）。

## ライブラリのダウンロード
---
- Xadow 気圧計 BMP180はGrove - 気圧センサーとライブラリを共有しています。GitHubから直接[ライブラリ](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)をダウンロードできます。
- コードを開いてXadowメインボードにアップロードできます。Xadowドライバーをインストールしていない場合は、Wikiメインページの[Getting Started](https://wiki.seeedstudio.com/ja/Getting_Started_with_Seeeduino/)を参照して操作手順を学ぶことができます。

```
/*
* BMP180から気圧、高度、温度を取得します。
* シリアルモニターに9600ボーで出力します。
*/
#include "Barometer.h"
#include "Wire.h";
float temperature;
float pressure;
float atm;
float altitude;
Barometer myBarometer;
void setup(){
  Serial.begin(9600);
  myBarometer.init();
}

void loop()
{
   temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //温度を取得します。bmp085ReadUTは最初に呼び出す必要があります。
   pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//気圧を取得します。
   altitude = myBarometer.calcAltitude(pressure); //補正なしの計算 - メートル単位
   atm = pressure / 101325;

  Serial.print("Temperature: ");
  Serial.print(temperature, 2); //小数点以下2桁を表示
  Serial.println("deg C");

  Serial.print("Pressure: ");
  Serial.print(pressure, 0); //整数のみを表示
  Serial.println(" Pa");

  Serial.print("Ralated Atmosphere: ");
  Serial.println(atm, 4); //小数点以下4桁を表示

  Serial.print("Altitude: ");
  Serial.print(altitude, 2); //小数点以下2桁を表示
  Serial.println(" m");

  Serial.println();

  delay(1000); //1秒待って再度値を取得します。
}
```

- シリアルモニターを開いて、センサーのデータ（温度、気圧値、相対気圧、そして高度）を受信します。

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Barometer_Sensor.jpg)

- 以下は、海抜高度と気圧の関係をプロットした参考グラフです。

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Pressure_and_Altitude.jpg)


## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
- [Xadow - 気圧計 BMP180 Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip)
- [気圧センサーライブラリ](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
- [BMP180 データシート](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/BMP180.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>