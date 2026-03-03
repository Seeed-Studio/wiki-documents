---
description: Xadow - IMU 6DOF
title: Xadow - IMU 6DOF
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_IMU_6DOF
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Imu_6dof_01.jpg)

Xadow - IMU 6DOF はモーショントラッキングモジュールです。このモジュールは、世界初の統合6軸モーショントラッキングデバイスであるセンサー MPU6050 をベースに設計されています。このデバイスは、3軸ジャイロスコープ、3軸加速度計、およびデジタルモーションプロセッサ™（DMP）を組み合わせています。MPU6050 は、ジャイロスコープ出力をデジタル化するための3つの16ビットアナログ-デジタルコンバータ（ADC）と、加速度計出力をデジタル化するための3つの16ビットADCを備えており、Xadow - IMU 6DOF は高い変換精度を実現しています。高速および低速の動きを正確に追跡するために、部品にはユーザーがプログラム可能なジャイロスコープのフルスケール範囲と加速度計のフルスケール範囲が備わっています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-6DOF-p-1670.html)

## 仕様
---
- 動作電圧: 3.3V
- 測定範囲:
  - ジャイロスコープのフルスケール範囲: ±250, ±500, ±1000, ±2000°/秒
  - 加速度計のフルスケール範囲: ±2g, ±4g, ±8g, ±16g
- 制御モード: I2C
- 寸法: 25.43mm x 20.35mm

## デモンストレーション
---
利用可能なライブラリを基に、加速度とジャイロの値を簡単に取得できます。次に、このモジュールの使用方法を示します。

**ハードウェア接続：**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Xadow-IMU_6DOF_installation.png)

注意: Xadow IMU 6DOF を Xadow メインボードに接続する際、接続方向に注意してください。接続方法は、1つの Xadow モジュールの未充填コーナーを別のモジュールの直角に接続することです（各 Xadow モジュールの4つのコーナーを参照）。

**テストコード：**
  
- [Xadow - IMU 6DOF MPU6050 ライブラリ](https://github.com/Seeed-Studio/Xadow_IMU_6DOF) を Github からダウンロードし、I2Cdev ファイルと MPU6050 ファイルを Arduino ライブラリにインストールします。ライブラリのインストールについては、Wiki ページの[こちら](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してください。
- 次のパスで例を開きます：**MPU6050_DMP6 File -> Examples -> MPU6050 -> Examples -> MPU6050_DMP6**。

```
#include <I2Cdev.h>//必要なヘッダファイルを追加
#include <MPU6050.h>//必要なヘッダファイルを追加
#include <Wire.h>
//====ジャイロのオフセット===========
#define Gx_offset  -1.50
#define Gy_offset  0
#define Gz_offset  0.80
//====加速度計のオフセット===========
#define Ax_offset -0.07
#define Ay_offset 0.02
#define Az_offset 0.14
//====================
MPU6050 accelgyro;

int16_t ax,ay,az;//元データ
int16_t gx,gy,gz;//元データ
float Ax,Ay,Az;//単位 g(9.8m/s^2)
float Gx,Gy,Gz;//単位 deg/s


void setup()
{
  Wire.begin();
  Serial.begin(9600);

  Serial.println("I2C デバイスを初期化中.....");
  accelgyro.initialize();

  Serial.println("デバイス接続をテスト中...");
  Serial.println(accelgyro.testConnection() ? "MPU6050 接続成功":"MPU6050 接続失敗");
}
void loop()
{

  accelgyro.getMotion6(&ax,&ay,&az,&gx,&gy,&gz);//ジャイロと加速度計のデータを取得
   //==========加速度計================================
   Ax=ax/16384.00;//単位(g)のデータを取得
   Ay=ay/16384.00;//単位(g)のデータを取得
   Az=az/16384.00;//単位(g)のデータを取得
   Serial.println("加速度データ.....");
   Serial.print(Ax+Ax_offset);
   Serial.print("   ");
   Serial.print(Ay+Ay_offset);
   Serial.print("   ");
   Serial.println(Az+Az_offset);
   //===============ジャイロ================================
   Gx=gx/131.00;
   Gy=gy/131.00;
   Gz=gz/131.00;
   Serial.println("ジャイロデータ.....");
   Serial.print(Gx+Gx_offset);
   Serial.print("   ");
   Serial.print(Gy+Gy_offset);
   Serial.print("   ");
   Serial.println(Gz+Gz_offset);
  //blinkState=!blinkState;
  //digitalWrite(LED_PIN,blinkState);
  delay(1000);//サンプリング時間を制御
}
```

- コードを Xadow メインボードにアップロードします。Tools -> Board から「Seeeduino Xadow」を選択することを忘れないでください。シリアルモニターを開いて、MPU6050 センサーの出力値を観察します。

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Xadow_IMU_6DOF_result.jpg)

静止状態では、z軸の出力値は約0.98gです。これを基準にしてセンサーが正常に動作するかどうかをテストできます。

**軸の方向**
以下の図は、感度軸の方向と回転の極性を示しています。

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/MPU6050_%E8%BD%B4%E5%90%91%E5%AE%9A%E4%BD%8D.png)


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/Xadow_IMU_6DOF_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
- [Xadow - IMU 6DOF Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/Xadow_IMU_6DOF_Eagle_File.zip)
- [MPU6050 データシート](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/MPU6050.pdf)
- [ライブラリファイル](https://github.com/Seeed-Studio/Xadow_IMU_6DOF)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>