---
description: Motor_Shield_V2.0
title: モーターシールド V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Motor_Shield_V2.0
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/500px-Motorshield_01.jpg" alt="pir" width={600} height="auto" /></p>

:::note
このドキュメントは Motor Shield V2.0/2.1/2.2 に対応しています。
:::

モーターシールドは、モーターの動作速度と方向をArduinoで制御できるドライバーモジュールです。デュアルフルブリッジドライブチップL298をベースにしており、2つのDCモーターまたはステップモーターを駆動することができます。モーターシールドは、Arduinoから直接電力を供給するか、端子入力を介して外部6V〜15Vの電源で動作させることができます。このモジュールは、マイクロロボットやインテリジェントビークルの開発などに使用できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Motor-Shield-V2-0.html?queryID=4a07292b83eeca2fc091c32620ff0c76&objectID=1498&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<table align="center">
 <caption> <h2>バージョン</h2> </caption>
  <tbody>
  <tr>
    <td><h3>リビジョン</h3></td>
    <td><h3>説明</h3></td>
    <td><h3>リリース</h3></td>
  </tr>
  <tr>
    <td><h4>v1.0</h4></td>
    <td><h4>初回公開リリース</h4></td>
    <td><h4>NA</h4></td>
  </tr>
  <tr>
    <td><h4>v2.0</h4></td>
    <td><h4>Arduino/Seeeduinoの+5Vピンでモーターを駆動可能に</h4></td>
    <td><h4>2013-2</h4></td>
  </tr>  
  </tbody></table>

## 特徴

-------------------

- 標準Arduino UNOシールドピンアウト
- L298フルブリッジICをベース
- 2つのDCモーターまたは1つのステップモーターを駆動
- 外部電源入力対応
- LEDインジケーター
- パフォーマンス向上のためのヒートシンク
- Arduinoライブラリ

## 仕様

-------------------

<table align="center">
  <tbody>
  <tr>
    <td><h3>仕様</h3></td>
    <td><h3>値</h3></td>
  </tr>
  <tr>
    <td><h4>動作電圧</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>外部電源</h4></td>
    <td><h4>6-15V</h4></td>
  </tr>  
  <tr>
    <td><h4>出力電流</h4></td>
    <td><h4>各チャンネル最大2.0A</h4></td>
  </tr>
    <tr>
    <td><h4>PWM範囲</h4></td>
    <td><h4>0-100%</h4></td>
  </tr>
    <tr>
    <td><h4>出力</h4></td>
    <td><h4>2チャンネル、4ポート</h4></td>
  </tr>
  </tbody></table>

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/700px-MotorShieldHardware.png" alt="pir" width={600} height="auto" /></p>

**1**. チャンネル1インジケーター、3つのLEDを含む

- EB - チャンネル1有効、高アクティブ
- IN3 - OUT3の状態
- IN4 - OUT4の状態

**2**. チャンネル1センス - 通常使用時には左側の2ピンを接続してください。

**注意**：これは電流を検知するための高度なアプリケーションです。詳細についてはデータシートと回路図を参照してください。

**3**. 出力 - 2つのチャンネルがあり、各チャンネルには2つの出力があります

- チャンネル0 - OUT1, OUT2
- チャンネル1 - OUT3, OUT4

**4**. チャンネル0センス

**5**. チャンネル0インジケーター、3つのLEDを含む

- EB - チャンネル0有効、高アクティブ
- IN1 - OUT1の状態
- IN2 - OUT2の状態

**6**. 外部電源入力、範囲6-15V

**7**. リセットインジケーター - リセットボタンが押されると赤く点灯

**8**. リセットボタン - シールドとArduinoをリセットするために押します

**9**. 電源インジケーター - 内部または外部の電源が供給されると緑色に点灯

**A.** 電源スイッチ

- 接続 - Arduinoから電源を取得
- 切断 - 外部ソースから電源を取得

**B.** 標準Arduinoシールドピンアウト

### 使用されるデジタルピン

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduinoピン</h3></td>
    <td><h3>機能</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>OUT1</h4></td>
  </tr>  
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>チャンネル0の有効化</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>チャンネル1の有効化</h4></td>
  </tr>  
  <tr>
    <td><h4>D11</h4></td>
    <td><h4>OUT2</h4></td>
  </tr>
  <tr>
    <td><h4>D12</h4></td>
    <td><h4>OUT3</h4></td>
  </tr>
  <tr>
    <td><h4>D13</h4></td>
    <td><h4>OUT4</h4></td>
  </tr>
  </tbody></table>

:::note
D8〜D13はモーターシールドで使用されます。競合を避けるため、これらのピンを使用しないでください。
:::

### 使用されるアナログピン

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduinoピン</h3></td>
    <td><h3>機能</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  </tbody></table>

:::note
未使用とは、これらのピンを自由に使用できることを意味します。
:::

## はじめに

-------------------

### DCモーターを駆動する

#### 接続

ここでは、このモーターシールドがどのように動作するかを簡単なデモを通じて説明します。まず、以下のものを準備してください：

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>DCモーター</h3></td>
    <td><h3>モーターシールド</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/130%20DC%20Motor_s.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
  </tr>  
  </tbody></table>

- **SEN_A**と**SEN_B**を設定し、左側の2つのピンをジャンパーで接続します。
- **MB_EN**をジャンパーで接続します（外部電源は使用しません）。
- DCモーターをチャンネル0（OUT1とOUT2）に接続します。
- モーターシールドをArduinoに差し込みます。
- USBケーブルを使用してArduinoをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/DC%20connection.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- 以下のボタンをクリックしてモーターシールドライブラリをダウンロードしてください。
- [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)に従ってライブラリをインストールしてください。

<p style={{textAlign: 'center'}}><a href="https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/400px-Motor_shield_v2_library.png" /></a></p>

- 以下のコードをSeeeduino V4にアップロードします。

```cpp
//  デモ関数: DCモーターを駆動するためのアプリケーション方法。
//  作成者: Loovee (luweicong@seeed.cc)
//  2016-3-11

#include "MotorDriver.h"

MotorDriver motor;

void setup()
{
    // 初期化
    motor.begin();
}

void loop()
{
    motor.speed(0, 100);            // モーター0を速度100に設定
    delay(1000);
    motor.brake(0);                 // ブレーキ
    delay(1000);
    motor.speed(0, -100);           // モーター0を速度-100に設定
    delay(1000);
    motor.stop(0);                  // 停止
    delay(1000);
}
// END FILE
```

- これで、モーターが動作（1秒）、停止（1秒）、逆方向に動作（1秒）、停止（1秒）を繰り返すことが確認できます。

何も起こらない場合は、以下を確認してください：

- コードが正常にアップロードされているか
- モーターが正しく接続されているか
- LEDインジケーターが正しく点滅しているか

### ステッパーモーターを駆動する

#### 接続

ここでは、このモーターシールドがどのように動作するかを簡単なデモを通じて説明します。まず、以下のものを準備してください：

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>ステッパーモーター</h3></td>
    <td><h3>モーターシールド</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/Motor%2024BYJ48_s.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html" target="_blank"><span>今すぐ購入</span></a></h4></td>
  </tr>  
  </tbody></table>

- **SEN_A**と**SEN_B**を設定し、左側の2つのピンをジャンパーで接続します。
- **MB_EN**をジャンパーで接続します（外部電源は使用しません）。
- ステッパーモーターのピン定義を確認し、シールドのOUTPUTに接続します。以下のように接続してください：

<table align="center">
  <tbody>
  <tr>
    <td><h3>ステッパー</h3></td>
    <td><h3>OUT1</h3></td>
  </tr>
  <tr>
    <td><h4>A+</h4></td>
    <td><h4>OUT2</h4></td>
  </tr>
  <tr>
    <td><h4>A-</h4></td>
    <td><h4>OUT3</h4></td>
  </tr>
  <tr>
    <td><h4>B+</h4></td>
    <td><h4>OUT4</h4></td>
  </tr>
  <tr>
    <td><h4>B-</h4></td>
    <td><h4>使用しない</h4></td>
  </tr>
  </tbody></table>

- モーターシールドをArduinoに差し込みます。
- USBケーブルを使用してArduinoをPCに接続します。

#### ソフトウェア

以下のコードをArduino IDEにコピーしてSeeeduino V4にアップロードしてください。これでステッパーモーターが動作することが確認できます。

```cpp
/*
 * Seeed Motor Shield V2用ステッパーテスト
 * loovee @ 2016年3月15日
 */

#include <Stepper.h>

// モーターのステップ数を変更してください
#define STEPS 200

// ステッパークラスのインスタンスを作成し、
// モーターのステップ数と接続されているピンを指定します
Stepper stepper(STEPS, 8, 11, 12, 13);

// アナログ入力からの前回の読み取り値
int previous = 0;

void step(int steps)
{
    digitalWrite(9, HIGH);
    digitalWrite(10, HIGH);
    stepper.step(steps);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
}

void setup()
{
    // モーターの速度を30RPMに設定
    pinMode(9, OUTPUT);
    pinMode(10, OUTPUT);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    stepper.setSpeed(30);
}

void loop()
{
    step(1000);
    step(-1000);
}

// END FILE
```

何も起こらない場合は、配線が正しく接続されているかを再確認してください。

## ライブラリ API

---------

### DC モーター API

#### 開始

**説明**

```Javascript
void begin();
```

#### 速度

**説明**

```Javascript
void move(int motor_id, int speed);
```

- motor_id
  - 0 - チャンネル 0
  - 1 - チャンネル 1
- speed: -100~100、大きいほど速くなる、0は停止

**stop**

```Javascript
void stop(unsigned char motor_id);
```

**brake**

```Javascript
void brake(unsigned char motor_id);
```

#### ステッパー

**注意** Arduino IDE によって提供されるライブラリを使用してステッパーを駆動します。

いくつか修正が必要です。例を参照してください。

## FAQs

**Q1: ジャンパー MB_EN の目的**

A1: モーターシールド上に電源ジャンパー(MB_EN)があるのがわかります。このジャンパーを移動すると、Arduino がシールドに電力を供給できますが、シールド（シールドが外部電源に接続されている場合）は Arduino に電力を供給することはできません。

ジャンパーが存在する場合、以下の2つの状況で一方が他方に電力を供給できます：

- USB から Arduino: シールドに外部電源が個別に接続されていない場合、Arduino は VCC ピンを介してシールドに電力を供給します。

- シールドに外部電源が接続されている場合：シールドが個別の電源を持っている場合、電圧はまず整流器（78M05）を通過し、その後 Arduino に電力を供給します。この状況では、Arduino の電流は 78M05 を介して Arduino からシールドに流れることはありません。

したがって、このジャンパーの目的は、シールドを使用して Arduino に電力を供給するかどうかを選択することです。

**Q2: Arduino UNO 上で SD カードシールド (103030005) とモーターシールド (105030001) の間にピンの競合はありますか？それらを一緒に使用する方法は？**

A2: Arduino Uno のデジタルピン D11、D12、D13 においてモーターシールドと SD カードシールドの間にピンの競合があります。そのため、Arduino Uno ボードと一緒にそれらを積み重ねて使用することはできません。以下はそれらを一緒に使用するための解決策です。

- ステップ 1: SD カードシールドを Arduino に積み重ねます。
- ステップ 2: Motordriver.h ライブラリを以下のように修正します。

```cpp
/******ピン定義*************/
#define MOTORSHIELD_IN1    8
#define MOTORSHIELD_IN2    7
#define MOTORSHIELD_IN3    6
#define MOTORSHIELD_IN4    5
#define SPEEDPIN_A        9
#define SPEEDPIN_B        10
```

**Q3: モーターシールドを積み重ねず、ジャンパーワイヤーを使用して Arduino から個別に接続する方法**

A3: 以下は接続方法です。

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduino</h3></td>
    <td><h3>モーターシールド</h3></td>
  </tr>
  <tr>
    <td><h4>5V</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>GND</h4></td>
    <td><h4>GND</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>D13</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>D12</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>D11</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>D8</h4></td>
  </tr>
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>D9</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>D10</h4></td>
  </tr>
  </tbody></table>

## モーターシールド V2.0 Eagle ファイル回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Motor shield V2.1 Eagle ファイル回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

-------------------

- **[Eagle]** [Motor Shield V2.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip)
- **[Eagle]** [Motor shield V2.1 Eagle ファイル](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar)
- **[PDF]** [Motor Shield 2.0 回路図](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.0.pdf)
- **[PDF]** [Motor Shield 2.1 回路図](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.pdf)
- **[PDF]** [Motor Shield 2.2 回路図](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor%20Shield%20v2.2.pdf)
- **[Library]** [Motor Shield ライブラリ](https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip)
- **[Datasheet]** [L298 データシート](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/L298.pdf)
- **[Datasheet]** [78M05 データシート](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/78M05_datasheet.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>