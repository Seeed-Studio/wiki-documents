---
description: Xadow - モータードライバー
title: Xadow - モータードライバー
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Motor_Driver
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/img/x%20motor.jpg)

Xadow MotorはDCモーターを制御するために使用できます。その中心には、低飽和度の2チャンネル双方向モータードライブチップLB1836Mがあり、Xadow Main BoardとのI2C通信を処理するATmega168によって制御されています。Xadow Motorは変更可能なI2Cアドレスを備えています。また、モーターを駆動するために別途低電力が必要です。

## 仕様
---
- モータードライバー: LB1836M
- バッテリー電圧: 2.5V ~ 9V
- チャンネルごとの出力電流（最大）: 300mA
- 通信モード: I2C
- I2Cアドレスは変更可能
- 寸法: 25.43mm x 20.35mm

## 製品ビュー
---
![](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/img/Xadow_Motor_Black_View.png)

- ①: LB1836 IC、低飽和度の2チャンネル双方向モータードライバー。
- ②: モーター電源接続。
- ③,④: DCモーター接続。
- ⑤,⑥: IICアドレスを設定するために使用。A0とA1は出荷時にHに接続されています。基板上で少し改造することで"L"に変更できます。詳細はリファレンスを参照してください。
- ⑦: SPIインターフェース、Atmega168のファームウェアをアップロードするために使用。
- ⑧: マイクロコントローラーAtmega168。
- ⑨: Atmega168 ICの電源供給を選択するために使用。デフォルトモードでは、DVCCはVOUTに接続されており、電源はモーター電源から供給されます。DVCCが3.3Vに接続されると、Xadow Main BoardがAtmega168に電力を供給します。

## デモンストレーション
---
Xadow Motorは2つのDCモーターを同時に駆動することができます。利用可能なライブラリに基づいて、モーターを簡単に動作させることができます。それでは始めましょう。

:::note
    ライブラリはステッピングモーターを制御するためには利用できません。
:::
**ハードウェアのインストール:**

1. DCモーターをJ5、J6インターフェースに接続します。接続を固定するためにハンダゴテを使用することをお勧めします。3.7Vリチウムバッテリーを構成していますので、このバッテリーを使用して高出力モーターを駆動することはできません。

2. バッテリーをXadow Motorのバッテリーインターフェースに接続します。バッテリーがない場合、モーターは回転しません。

3. Xadow MotorをXadow Main Boardに接続します。Xadow Driverをインストールすることを忘れないでください。

:::note
    Xadow 3-Axis AccelerometerをXadow Main Boardに接続する際は、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填コーナーを別のモジュールの直角に接続する必要があります（各Xadowモジュールの4つのコーナーを参照）。
:::
コードのアップロード:

4. [Xadow Motor Library](https://github.com/Seeed-Studio/Xadow_Motor_Driver)をダウンロードしてArduinoライブラリにインストールします。

5. 次のパスでコードを直接開きます: File -> Example -> xadow_motor -> motorCtrl。

```
/*
使用可能な4つのモーター状態:

-MSTOP                -> 停止
-MFOR                        -> 前進
-MREV                        -> 後退
-MHOLD                -> 最近の状態を保持
**注意:
選択可能な4つのアドレスがあります。これはハードウェアによります。
詳細はwww.seeedstudio.comを参照してください。
-MOTORADDRESS0 0x40 // A0 LOW, A1 LOW
-MOTORADDRESS1 0x41 // A0 HIGH, A1 LOW
-MOTORADDRESS2 0x42 // A0 LOW, A1 HIGH
-MOTORADDRESS3 0x43 // A0 HIGH, A1 HIGH
この関数を使用します: setMotorRun(unsigned char sMotorA, unsigned char sMotorB);
両方のモーターを制御できます。
*/

#include <Wire.h>

#include "XadowMotor.h"

void setup()
{
    Serial.begin(38400);
    xadowMotor.begin(MOTORADDRESS3);
}

void loop()
{

    Serial.print("バッテリー電圧 :");
    Serial.println(xadowMotor.getBatVol());

    xadowMotor.setMotorRun(MFOR, MFOR);

    delay(2000);

    xadowMotor.setMotorRun(MSTOP, MSTOP);

    delay(500);

    xadowMotor.setMotorRun(MREV, MREV);

    delay(2000);

    xadowMotor.setPwrDown();
    delay(1000);
    xadowMotor.setWakeUp();

}
```

このコードでは、関数xadowMotor.begin(MOTORADDRESS3)を使用してXadow MotorのI2Cアドレスを設定します。A0ピンとA1ピンの接続を変更した場合は、パラメータ"MOTORADDRESS3"を変更する必要があります。詳細はリファレンスを参照してください。

6. コードをアップロードします。Arduino環境のTools | BoardメニューからSeeeduino Xadowを選択し、Xadow Main Boardが使用している正しいシリアルポートを選択することを忘れないでください。

これで、モーターが一定間隔で前進または後退する様子を見ることができます。シリアルモニターを開くことで、バッテリー電圧を観察することができます。

## 参考
---
Xadow Motor には、A0 ピンと A1 ピンによって決定される 4 つの I2C アドレスがあります。A0 と A1 はデフォルトで基板内部で H に接続されていますが、これを変更することが可能です。例えば、ハンダごてを使用して H と A0 の接続を切断し、ADR0 と L を接続することで、A0 の値を L に設定できます。以下の表に、ハードウェア I2C アドレスと A0 および A1 の値の関係を示します。

| I2C アドレス | A0 入力状態 | A1 入力状態 | コード内の対応するパラメータ |
|---|:---:|:---:|---|
| 0x40 | L | L | MOTORADDRESS0 |
| 0x41 | L | H | MOTORADDRESS1 |
| 0x42 | H | L | MOTORADDRESS2 |
| 0x43 | H | H | MOTORADDRESS3 |

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [Xadow Motor Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Eagle_File.zip)
- [Xadow Motor 回路図 (PDF)](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Schematic_in_PDF.pdf)
- [Xadow Motor ライブラリ](https://github.com/Seeed-Studio/Xadow_Motor_Driver)
- [LB1836 データシート](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/LB1836M.PDF)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>