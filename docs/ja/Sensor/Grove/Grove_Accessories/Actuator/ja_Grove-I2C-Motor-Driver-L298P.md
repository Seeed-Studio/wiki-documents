---
title: Grove - I2C モータードライバー (L298P)
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-I2C-Motor-Driver-L298P/
slug: /ja/Grove-I2C-Motor-Driver-L298P
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/products/105020093/img/105020093_wiki.png)

Grove - I2C モータードライバー (L298P) は、ステッピングモーターやサーボモーター用の汎用モータードライバーです。STM32 チップを内蔵しており、コードを焼き込んでモータードライバーを制御することができます。このモータードライバーは2チャンネル仕様で、各チャンネルは最大1Aの電流をサポートします。また、I2Cインターフェースを使用して周辺マイクロコントローラーからデータを送信することができます。デフォルトのI2Cアドレスは0x0fであり、I2Cワイヤーハットを接続することでモータードライバーのアドレスを変更することが可能です。I2Cアドレスは0x00から0x0fまで選択可能です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a>
</div>

## 特徴

- MCU: STM32f030f4P6 マイクロコントローラーを使用してコードを焼き込み、モータードライバーを制御。
- L298P モータードライバーチップ: 汎用モータードライバーで、ステッピングモーターやサーボモーターを駆動可能。
- 選択可能なI2Cアドレス: ワイヤーハットの接続を変更することで、I2Cアドレスを0x00から0x0fまで設定可能。デフォルトのI2Cアドレスは0x0f。
- 2チャンネル出力: 各チャンネルで最大1Aの電流をサポート、合計最大2Aの電流。6V-12VのDC電圧入力が必要。
- ユーザーLED: 各チャンネルで、時計回り方向は緑色LED、反時計回り方向は赤色LEDが点灯。

## 仕様

|項目|値|
|---|---|
|MCU|STM32f030f4P6|
|電源供給|6-12V DC|
|インターフェース|Grove I2C|
|I2Cアドレス|デフォルト 0x0f、ワイヤーハット接続で変更可能|
|チャンネル|2|
|出力電流|最大2A、各チャンネル1A|
|出力電圧|5V|

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### Arduino プラットフォームを使用する

#### 必要な材料

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (L298P) |
|----------------|-------------|-----------------------------------|
|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像をここに挿入](https://files.seeedstudio.com/products/105020093/img/105020093_thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html)|

#### ハードウェア接続

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg" style={{width:'auto', height:400}}/></div>

- **ステップ 1** Grove - I2C Motor Driver (L298P) を Grove-Base Shield の I2C ポートに接続します。

- **ステップ 2** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ 3** USB ケーブルを使用して Seeeduino を PC に接続します。

#### ソフトウェアコード 1 - DC モーター

```cpp
#include "Grove_I2C_Motor_Driver.h"

#define I2C_ADDRESS 0x0f // デフォルトの I2C アドレスは 0x0f

void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
}

void loop() {
    // MOTOR1 の速度を設定、時計回り、速度: -100~100
    Motor.speed(MOTOR1, 50);
    // MOTOR2 の速度を設定、反時計回り
    Motor.speed(MOTOR2, -70);
    delay(2000);
    // MOTOR1 の速度と方向を変更
    Motor.speed(MOTOR1, -100);
    // MOTOR2 の速度と方向を変更
    Motor.speed(MOTOR2, 100);
    delay(2000);
    // MOTOR1 と MOTOR2 を停止
    Motor.stop(MOTOR1);
    Motor.stop(MOTOR2);
    delay(2000);
}
```

- **ステップ 1** [Grove_I2C_Motor_Driver_v1_3 ライブラリ](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip) を Github からダウンロードします。

- **ステップ 2** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して、Arduino 用のライブラリをインストールします。

- **ステップ 3** コードを Arduino IDE にコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

`speed()` 関数を使用すると、任意の速度でモーターを駆動できます。

- **motor_id** は使用するモーターを表します。MOTOR1 または MOTOR2 を指定できます。

- **_speed** はモーターに設定する速度を表します。-100~100 の範囲で指定できます。_speed > 0 の場合、DC モーターは時計回りに回転し、_speed < 0 の場合は反時計回りに回転します。また、_speed の絶対値が大きいほど、DC モーターの速度は速くなります。

`stop()` 関数を使用すると、動作中の DC モーターを停止できます。

- **motor_id** は使用するモーターを表します。MOTOR1 または MOTOR2 を指定できます。

#### ソフトウェアコード 2 - ステッピングモーター

```cpp
#include <Grove_I2C_Motor_Driver.h>

#define I2C_ADDRESS 0x0f // デフォルトの I2C アドレスは 0x0f

void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
    // ステッピングモーターを駆動
    // _step: -1024~1024, _step > 0 の場合、ステッピングモーターは時計回りに回転;
    // _step < 0 の場合、反時計回りに回転; _step が 512 の場合、ステッピングモーターは
    // 1 回転する; _step が 1024 の場合、ステッピングモーターは 2 回転する。
    Motor.StepperRun(-1024);
    Motor.StepperRun(512);
}

void loop() {
    // ここにコードを記述
}
```

[24BYJ48 ステッピングモーター](https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html) を例に取ると、ハードウェアの接続は以下のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg" style={{width:600, height:'auto'}}/></div>

**24BYJ48 ステッピングモーター** と I2C Motor Driver の接続は以下のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg" style={{width:'auto', height:'auto'}}/></div>

- **_step** はステッピングモーターに設定するステップ数を表します。-1024~1024 の範囲で指定できます。_step > 0 の場合、ステッピングモーターは時計回りに回転し、_step < 0 の場合は反時計回りに回転します。_step が 512/-512 の場合、ステッピングモーターは 1 回転し、_step が 1024/-1024 の場合は 2 回転します。ステッピングモーターは設定したステップ数を完了すると自動的に停止します。

:::note

PWM 周波数が変更できず、24Hz に固定されている場合は、Jlink または ST-link を使用してファームウェアを更新する必要があります。新しいファームウェアは以下から入手できます：

[https://github.com/Seeed-Studio/grove_stm32f030/blob/master/firmware/grove_i2c_motor_driver_stm32f030.ino.bin](https://github.com/Seeed-Studio/grove_stm32f030/blob/master/firmware/grove_i2c_motor_driver_stm32f030.ino.bin)

PWM 周波数を変更するには、`Motor.frequence(50)` を使用します。この値は最大 255Hz まで設定可能です。

:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/105020093/doc/Grove-I2C-Motor-Driver-L298P.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [STM32f030f4P6 データシート](https://files.seeedstudio.com/products/105020093/doc/STM32F030F4;TSSOP-20_%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [L298P データシート](https://files.seeedstudio.com/products/105020093/doc/L298P;PowerSO-20_%E7%89%A9%E6%96%99%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [ハードウェア回路図](https://files.seeedstudio.com/products/105020093/doc/Grove%20-%20I2C%20Motor%20Driver%20(L298P)_v1.0_SCH_191210.pdf)

- **[Zip]** [モータードライバライブラリ](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、スムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>