---
description: Xadow - 3軸加速度センサー
title: Xadow - 3軸加速度センサー
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_3_Aixs_Accelerometer
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow_Accelerometer_01.jpg)

これは高解像度のデジタル加速度センサーで、I2Cインターフェースを介して±16gの広い測定範囲を持ち、動作状態を監視するのに適しています。このモジュールを使用すると、腕や脚の振動などの動きの監視機能を簡単に設計に追加できます。例えば、腕を振ることでiPhoneの曲を切り替えたい場合、このモジュールが役立ちます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-3-Axis-Accelerometer-p-1521.html)

## 仕様
---
- 寸法: 25.43mm x 20.35mm
- 動作電圧：3.3V
- 解像度: 3.9mg/LSB
- 測定範囲: ±16g
- 制御モード: I2C

## デモンストレーション
---
他のXadowモジュールと同様に、Xadow 3軸加速度センサーをXadowメインボードに接続し、テストコードをアップロードして加速度センサー情報を取得する必要があります。

ハードウェアのインストール:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow3AxisAcce.jpg)

:::note
    Xadow 3軸加速度センサーをXadowメインボードに接続する際には、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填の角を別のモジュールの直角に接続する必要があります（各Xadowモジュールの4つの角を参照）。
:::
テストコードは以下の通りです:

```
#include <Wire.h>

#define ADXL345_DEVICE 0x00
#define ADXL345_POWER_CTL 0x2D
#define ADXL345_DATAX0 0x32
#define ADXL345_DATAX1 0x33
#define ADXL345_DATAY0 0x34
#define ADXL345_DATAY1 0x35
#define ADXL345_DATAZ0 0x36
#define ADXL345_DATAZ1 0x37

#define ADXL345_ADDRESS  0x53
int X_Read,Y_Read,Z_Read;
double ax,ay,az;

 void setup()
{
  Wire.begin();
  Serial.begin(19200);
  delay(100);
  // ADXL345をオンにする
  Wire.beginTransmission(ADXL345_DEVICE); // デバイスへの送信開始
  Wire.write(ADXL345_POWER_CTL);
  Wire.write(8);                          // 測定を有効化
  Wire.endTransmission();                 // 送信終了

 }

void loop()
{

X_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAX0,ADXL345_DATAX1);
Y_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAY0,ADXL345_DATAY1);
Z_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAZ0,ADXL345_DATAZ1);


 /*Serial.print("X, Y, Zの値は:");
 Serial.print(X_Read);
 Serial.print(" , ");
 Serial.print(Y_Read);
 Serial.print(" , ");
 Serial.println(Z_Read); */

  getAcceleration();
  Serial.print("X=");
  Serial.print(ax);
  Serial.println(" g");
  Serial.print("Y=");
  Serial.print(ay);
  Serial.println(" g");
  Serial.print("Z=");
  Serial.print(az);
  Serial.println(" g");
  Serial.println("**********************");
 delay(500);
}

int readRegister(int deviceAddress,int address1,int address2)
{
    long int value;
    int readValue1,readValue2;
    Wire.beginTransmission(deviceAddress);
     Wire.write(address1); // 読み取るレジスタ
     Wire.write(address2); // 読み取るレジスタ
     Wire.endTransmission();
     Wire.requestFrom(deviceAddress,2); // 2バイトを読み取る
     if(Wire.available()<=2)
     {
       readValue1 = Wire.read();
       readValue2 = Wire.read();
     }
     //Wire.endTransmission();
     readValue2 = readValue2<<8;
     value= readValue1 + readValue2;
     delay(100);
     return value;
}

void getAcceleration()
{
  double gains;
  // 加速度センサーの計算
  gains = 0.00390625;
  ax=X_Read * gains;
  ay=Y_Read * gains;
  az=Z_Read * gains;

}
```

コードをアップロードした後、シリアルモニターを開いてテスト結果を観察します。このセンサーの出力は、重力単位「g」に変換された3軸加速度情報です。

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow_3-Axis_Accelemeter_Result.jpg)

## 参考資料
---
以下の2つの図は、結果の物理的な意味を理解するのに役立ちます。
最初の図は各軸の方向についてです:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/ADXL345_Axes_of_Acceleration_Sensivity.jpg)

2番目の図はいくつかの例を示しています:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Sensing_Diraction_2.jpg)


## オンライン回路図ビューア
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/3-Axis_Accelerometer_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
- [Xadow 3軸加速度センサー Eagleファイル](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/3-Axis_Accelerometer_Eagle_File.zip)
- [ADXL345 データシート](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/ADXL345_datasheet.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>