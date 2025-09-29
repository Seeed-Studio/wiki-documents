---
title: Grove - Mini I2C Motor Driver v1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Mini_I2C_Motor_Driver_v1.0/
slug: /ja/Grove-Mini_I2C_Motor_Driver_v1.0
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_2.png)

この Grove - Mini I2C モータードライバーには 2 つの DRV8830 が含まれています。DRV8830 は、バッテリー駆動のおもちゃ、プリンター、その他の低電圧またはバッテリー駆動のモーション制御アプリケーション向けに統合されたモータードライバーソリューションを提供します。このモジュールには 2 つの H ブリッジドライバーがあり、2 つの DC モーターまたはステッピングモーターの 2 つの巻線、さらにはソレノイドなどの他の負荷を駆動することができます。オンボードの 5V 電圧レギュレーターが必要で、これにより I2C バスに電力を供給できます。すべてのドライバーラインはバック EMF からダイオードで保護されています。故障インジケーター用の 2 つの LED と、各モーターがどの方向に動作しているかを示す 4 つの LED を備えています。GROVE システムプラグと I2C インターフェースにより、ドライバーを他の多くのデバイスとデイジーチェーン接続することが可能です。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove%C2%A0-%C2%A0I2C%C2%A0Mini%C2%A0Motor%C2%A0Driver-p-2508.html)

特徴
--------

- 外部電源不要
- 故障インジケーター用の 2 つの LED
- デフォルトの最大駆動電流 200 mA
- Grove 互換
- I2C インターフェース
- モーターの速度と方向を制御可能
- チャンネル数: 2
- 簡単に使用可能

:::tip
    Grove モジュールの詳細については [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

用途のアイデア
-----------------

このモータードライバーは、5V で 1A を超えない消費電力のブラシ付き電子モーターを駆動するために使用できます。
2 つのモーターを同時に異なる速度と方向に設定して駆動することができます。
速度は完全に比例して設定でき、I2C コマンドで制御されます。

- バッテリー駆動:
  - プリンター
  - おもちゃ
  - ロボティクス
  - カメラ
  - 携帯電話

- 小型アクチュエーター、ポンプなど

以下は参考になるプロジェクトです。

| **ミニトイカーを作る**                                              | **スチームパンクスタイルの賞を作る**                                       |
|----------------------------------------------------------------------|------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_toy_car.jpg)   | ![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Seeed_award2015.jpg)  |

仕様
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小値
</th>
<th scope="col">
標準値
</th>
<th scope="col">
最大値
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
動作電圧
</th>
<td>
2.75
</td>
<td>
5
</td>
<td>
6.8
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
チャンネルごとの最大出力電流
</th>
<td>
0.2(デフォルト)
</td>
<td>
-
</td>
<td>
1
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
I2C バスの入力/出力電圧
</th>
<td colspan="3">
3.3/5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
通信プロトコル
</th>
<td colspan="3">
I2C
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
デフォルト I2C アドレス
</th>
<td colspan="3">
0xC0, 0xC4
</td>
<td>
/
</td>
</tr>
</table>

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver.jpg)

- **Grove インターフェース** - Grove 製品はエコシステムを持ち、すべて同じコネクタを備えており、**Base Shield** に接続できます。このモジュールを Base Shield の I<sup>2</sup>C ポートに接続すると、Arduino と正常に動作します。ただし、ジャンパーワイヤーを使用して Base Shield を介さずに Grove - Mini I2C Motor Driver を Arduino に接続することも可能です。

<table>
<tr>
<th width="150">
Arduino UNO
</th>
<th width="150">
Base Shield
</th>
<th width="150">
Grove - Mini I2C Motor Driver
</th>
</tr>
<tr align="center">
<td>
5V
</td>
<td rowspan="4">
I2C ポート
</td>
<td>
VCC
</td>
</tr>
<tr align="center">
<td>
GND
</td>
<td>
GND
</td>
</tr>
<tr align="center">
<td>
SDA
</td>
<td>
SDA
</td>
</tr>
<tr align="center">
<td>
SCL
</td>
<td>
SCL
</td>
</tr>
</table>

- **CH1 故障インジケーター** - チャンネル 1 の故障インジケーター。
- **CH2 故障インジケーター** - チャンネル 2 の故障インジケーター。
- **方向インジケーター** - モーターの方向インジケーター。
- **CH1 出力コネクタ** - モーター 1 のコネクタ。
- **CH2 出力コネクタ** - モーター 2 のコネクタ。

ハードウェア機能
-----------------

### デフォルトの最大駆動電流を変更する

各チャンネルのデフォルトの最大駆動電流は200mAです。以下のボードの正面図をご覧ください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/QQ20150817-3.png" alt="pir" width={600} height="auto" /></p>

各チャンネル（CH1、CH2）には抵抗が追加されており、各抵抗（R5、R12）の値は1Ωです。そのため、以下の式に基づいて最大駆動電流は200mAとなります。

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_7.png" alt="pir" width={600} height="auto" /></p>
</center>

また、各チャンネルには予備のはんだ付け可能なパッド（CH1用はR6、CH2用はR13）が用意されています。そのため、ボードに抵抗をはんだ付けして各チャンネルの抵抗値を変更することができます。以下はボードに抵抗を追加した場合の新しい式です。

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_8.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_9.png" alt="pir" width={600} height="auto" /></p>
</center>

:::caution
各チャンネルの最大動作電流は1A未満である必要があります。そのため、予備パッドに取り付ける抵抗の最小値は0.2Ω以上でなければなりません。
:::

### デフォルトのI<sup>2</sup>Cアドレスを変更する

各チャンネルのI<sup>2</sup>Cアドレスは変更可能です。ボードの裏面をご覧ください。4つのジャンパーパッドがあります。A0_CH1とA1_CH1はチャンネル1用、A0_CH2とA1_CH2はチャンネル2用です。以下の図をご覧ください。

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Address_mini_i2c_motor_driver.png" alt="pir" width={600} height="auto" /></p>
</center>

各ジャンパーをはんだ付けまたははんだ除去することでI<sup>2</sup>Cアドレスを変更できます：

- 1 - はんだごてを使用してジャンパーの両側を接続します。
- 0 - はんだごてを使用してジャンパーの両側を切り離します。

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_12.png" alt="pir" width={600} height="auto" /></p>
</center>

:::note
Grove - Mini I2C Motor Driverのライブラリはデフォルトアドレスに依存しています。
:::

使い始める
---------------

それでは、Grove - Mini I2C Motor Driverの使用を開始しましょう。

### 準備

Grove - Mini I2C Motor Driver v1.0のデモを作成するために以下のモジュールが必要です。

- 2 * DCモーター 2V-6V
- Seeeduino Lite

**Seeeduino LiteはArduinoと互換性があります。**

Arduino UNOまたはGroveコネクタがない他のArduino互換ボードを使用している場合は、Grove Base Shieldが必要です。これによりGroveを簡単に接続できます。

ArduinoまたはSeeeduinoを初めて使用する場合は、「Getting_Started_with_Seeeduino」を参照してArduinoの旅を始めてください。

### ハードウェアのインストール

Grove - Mini I2C Motor Driverには、上記の2つのモジュールを接続するためのGroveソケットがあります。
以下のモジュールを接続します：

- 2 * DCモーター 2V-6V - CH1 & CH2出力コネクタに接続します。
- Seeeduino Lite

SeeeduinoのGrove I2CインターフェースをMini Motor DriverのGroveインターフェースに接続します。以下の図をご覧ください：

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver_demo.jpg)

### ソフトウェアの作業

[![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Arduino_mini_i2c_motor_driver.jpg)](https://www.arduino.cc/)

Grove - Mini I2C Motor DriverはDRV8830チップを基にしたモーターを制御できます。DRV8830は単なるデュアルモータードライバーではなく、デュアルHブリッジです。Hブリッジは、電流の方向を切り替えるための特定のトランジスタ構成です。Arduinoを使用して任意の速度で回転させることができます。

モジュールには2つのHブリッジがあるため、ロボットを前進・後退させるだけでなく、各ホイールを異なる方向に回転させることで回転させることもできます。

SeeeduinoをマイクロUSBケーブルを使用してコンピュータに接続します。

それでは、Grove - Mini I2C Motor Driverを使用して、2つのDCモーターを正方向または逆方向に回転させてみましょう。

以下はArduinoで使用する例のプログラムです。このコードは非常に基本的なものですが、変更して独自の方法で使用することもできます。

```
/****************************************************************
Example code demonstrating the use of the Arduino Library for
the SparkFun MiniMoto board, which uses the TI DRV8830 IC for I2C
low-voltage DC motor control.
 
This code is beerware; if you use it, please buy me (or any other
SparkFun employee) a cold beverage next time you run into one of
us at the local.
 
17 Sep 2013- Mike Hord, SparkFun Electronics
 
Code developed in Arduino 1.0.5, on a Fio classic board.
 
**Updated for Arduino 1.6.4 5/2015**
****************************************************************/
 
#include <SparkFunMiniMoto.h>  // MiniMotoライブラリをインクルード
 
// 異なるアドレス設定で2つのMiniMotoインスタンスを作成
MiniMoto motor0(0xC4); // A1 = 1, A0 = clear
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (デフォルト)
 
#define FAULTn  16     // フォルト検出に使用するピン
 
// setup()関数では特に特別なことはありません。シリアルポートを準備し、簡単な挨拶を表示し、フォルトピンを入力として設定します。
void setup()
{
    Serial.begin(9600);
    Serial.println("Hello, world!");
    pinMode(FAULTn, INPUT);
}
 
// loop()関数では、モーターを一方向に回転させ、その後逆方向に回転させながら、常にフォルト条件が発生するかどうかを監視します。フォルトが発生した場合は、シリアルポートで報告され、その後操作が続行されます。
void loop()
{
    Serial.println("Forward!");
    motor0.drive(100);
    motor1.drive(100);
    delayUntil(1000);
    Serial.println("Stop!");
    motor0.stop();
    motor1.stop();
    delay(1000);
    Serial.println("Reverse!");
    motor0.drive(-100);
    motor1.drive(-100);
    delayUntil(1000);
    Serial.println("Brake!");
    motor0.brake();
    motor1.brake();
    delay(1000);
}
 
// delayUntil()は、指定された時間またはフォルトが発生するまでモーターを動作させる小さな関数です。このデモは非常にシンプルで、理想的には割り込みを使用してフォルトを処理し、動作中にアプリケーションをブロックせずにフォルトをポーリングするべきです。
void delayUntil(unsigned long elapsedTime)
{
    // "BlinkWithoutDelay"の例を参照して、このループがどのように機能するかを詳しく確認してください。
    unsigned long startTime = millis();
    while (startTime + elapsedTime > millis())
    {
        // FAULTnが低くなると、フォルト条件が存在する可能性があります。確認するには、FAULTビットをチェックする必要があります。
        if (digitalRead(FAULTn) == LOW)
        {
            // 両方のモーターをチェックします。ロジックはそれぞれ同じです...
            byte result = motor0.getFault();
            // FAULTでマスクされた結果がゼロでない場合、フォルト条件が存在し、報告する必要があります。
            if (result & FAULT)
            {
                Serial.print("Motor 0 fault: ");
                if (result & OCP) Serial.println("チップ過電流！");
                if (result & ILIMIT) Serial.println("負荷電流制限！");
                if (result & UVLO) Serial.println("低電圧！");
                if (result & OTS) Serial.println("過熱！");
                break; // フォルトに応じて動作を直ちに停止するため、モーションを中断します。
            }
            result = motor1.getFault();
            if (result & FAULT)
            {
                Serial.print("Motor 1 fault: ");
                if (result & OCP) Serial.println("チップ過電流！");
                if (result & ILIMIT) Serial.println("負荷電流制限！");
                if (result & UVLO) Serial.println("低電圧！");
                if (result & OTS) Serial.println("過熱！");
                break;
            }
        }
    }
}
```

次に、Upload（CTRL+U）をクリックしてテストコードを書き込みます。エラープロンプトについては「Getting_Started_with_Seeeduino」を参照してください。また、コミュニティでコメントを追加することもできます。

### 結果の確認

アップロードが完了すると、モーターは正方向または逆方向に交互に回転します。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [DRV8830 データシート](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/DRV8830.pdf)
- [Grove - Mini I2C Motor Driver_Eagle_File](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip)
- [Grove - Mini I2C Motor Driver 回路図ドキュメント](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH.pdf)
- [Grove - Mini I2C Motor Driver ソースライブラリ](https://github.com/Seeed-Studio/Drv8830_Motor_Driver)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Mini_I2C_Motor_Driver_v1.0 から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>