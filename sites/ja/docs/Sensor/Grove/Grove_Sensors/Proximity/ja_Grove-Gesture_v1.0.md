---
title: Grove - Gesture V1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Gesture_v1.0/
slug: /ja/Grove-Gesture_v1.0
sku: 101020083
last_update:
  date: 05/15/2025
  author: gunengyu
---


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/400px-Gesture_sensor_3.png" 
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} 
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Gesture-p-2463.html" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
  </a>
</div><br></br>

Grove - Gesture のセンサーは PAJ7620U2 で、ジェスチャー認識機能を一般的な I2C インターフェースと統合した単一チップです。このセンサーは9種類の基本的なジェスチャーを認識でき、これらのジェスチャー情報は I2C バスを介して簡単にアクセスできます。

用途: Gesture を入力デバイスとして使用し、他の Grove モジュール、コンピュータ、携帯電話、スマートカー、ロボットなどを手の簡単なスワイプで制御できます。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/i9hnRPuCx-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## 特徴

- 内蔵の近接検出機能
- 様々なメインボードに対応: Arduino UNO/Seeeduino/Arduino Mega2560
- 9種類の基本ジェスチャー
  - 上
  - 下
  - 左
  - 右
  - 前
  - 後ろ
  - 時計回り
  - 反時計回り
  - ウェーブ

:::tip
    Grove モジュールの詳細については [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 仕様

|仕様名|値|
|---|---|
|センサー|PAJ7620U2|
|電源供給  |5V|
|周囲光耐性  |< 100k Lux|
|通常モードでのジェスチャー速度|  60°/s ～ 600°/s|
|ゲームモードでのジェスチャー速度|  60°/s ～ 1200°/s|
|インターフェースタイプ  IICインターフェース |最大 400 kbit/s|
|動作温度 | -40°C ～ +85°C|
|寸法| 20 * 20mm|
|検出範囲 |5-10cm|
|I2C アドレス|0x73|

:::note
    複数の I2C デバイスを使用したい場合は、[Software I2C](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/) を参照してください。
:::

## はじめに

### Arduino で遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください:

| Seeeduino V4.2 | ベースシールド| Grove-Gesture v1.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/45d_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Gesture-p-2463.html)|

- **ステップ 2.** Grove-Gesture_v1.0 を Grove-Base Shield の I2C ポートに接続します。
- **ステップ 3.** Grove - Base Shield を Seeeduino に差し込みます。
- **ステップ 4.** USB ケーブルを使用して Seeeduino を PC に接続します。

:::note
 Grove Base Shield がない場合は、以下のように Grove-Gesture v1.0 を Seeeduino に直接接続することもできます。
:::

| Seeeduino   |   Grove-Gesture v1.0     |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

INT：ジェスチャー検出割り込みフラグマスク。ジャンパーワイヤーを使用して INT パッドを Arduino のデジタル 2 に接続できます。

以下の画像は Grove - Gesture を Base Shield の I2C ポートに差し込む方法を示しています。

![](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/700px-Gesture_install_1.png)

次に Base Shield を Seeeduino に差し込みます。

![](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/seeeduino_connection.jpg)

#### ソフトウェア

- **ステップ 1.** [ライブラリ](https://github.com/Seeed-Studio/Grove_Gesture) を Github からダウンロードします。
- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して Arduino 用ライブラリをインストールします。
- **ステップ 3.** コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。
- **ステップ 4.** Arduino IDE を起動し、上下デモを試してみましょう。
- **ステップ 5.** 以下のコードをコピーして Arduino IDE に貼り付けます。

```cpp showLineNumbers
/*
以下の簡単なデモでは、非常に簡単なアプリケーションを示します: 上に動かすと赤い LED が点灯し、それ以外の場合は赤い LED が消灯します。
*/
#include <Wire.h>
#include "paj7620.h"

void setup()
{
  paj7620Init();
}

void loop()
{
 uint8_t data = 0;  // ジェスチャー結果を読み取るために Bank_0_Reg_0x43/0x44 を読み取ります。

 paj7620ReadReg(0x43, 1, &data);  // 異なるジェスチャーが検出されると、変数 'data' は paj7620ReadReg(0x43, 1, &data) によって異なる値に設定されます。

 if (data == GES_UP_FLAG)      // 上のジェスチャーが検出されると、変数 'data' は GES_UP_FLAG に設定されます。
  digitalWrite(4, HIGH);      // LED を点灯させます (HIGH は電圧レベルです)
 if (data == GES_DOWN_FLAG)      // 下のジェスチャーが検出されると、変数 'data' は GES_DOWN_FLAG に設定されます。
        digitalWrite(4, LOW);       // 電圧を LOW にして LED を消灯させます
}
```

- **ステップ 6.** ボードマネージャで Seeeduino V4 を選択し、COM ポートを選択します。
- **ステップ 7.** アップロードをクリックし、Gesture センサーの上で手を上下に動かします。以下のように LED が点灯したり消灯したりするのが見えます。

![](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/IMG_0029.gif)

- **ステップ 8.** **File->Example->Grove_Gesture->paj7620_9gestures** を選択して9種類のジェスチャーを試してみましょう。その後、ボードマネージャで Seeeduino v4 を選択し、正しい COM ポートを選択します。

```cpp title="paj7620_9gestures" showLineNumbers
#include <Wire.h>
#include "paj7620.h"

/* 
注意: Forward/Backward ジェスチャーを認識したい場合、ジェスチャーの反応時間は GES_ENTRY_TIME(0.8秒) 未満でなければなりません。
      実際の状況に応じて反応時間を調整することもできます。
*/
#define GES_REACTION_TIME  500    // 実際の状況に応じて反応時間を調整できます。
#define GES_ENTRY_TIME   800    // Forward/Backward ジェスチャーを認識したい場合、ジェスチャーの反応時間は GES_ENTRY_TIME(0.8秒) 未満でなければなりません。
#define GES_QUIT_TIME   1000

void setup()
{
 uint8_t error = 0;

 Serial.begin(9600);
 Serial.println("\nPAJ7620U2 テストデモ: 9種類のジェスチャーを認識します。");

 error = paj7620Init();   // Paj7620 レジスタを初期化します
 if (error) 
 {
  Serial.print("初期化エラー, コード:");
  Serial.println(error);
 }
 else
 {
  Serial.println("初期化成功");
 }
 Serial.println("ジェスチャーを入力してください:\n");
}

void loop()
{
 uint8_t data = 0, data1 = 0, error;
 
 error = paj7620ReadReg(0x43, 1, &data);    // ジェスチャー結果を読み取るために Bank_0_Reg_0x43/0x44 を読み取ります。
 if (!error) 
 {
  switch (data)          // 異なるジェスチャーが検出されると、変数 'data' は paj7620ReadReg(0x43, 1, &data) によって異なる値に設定されます。
  {
   case GES_RIGHT_FLAG:
    delay(GES_ENTRY_TIME);
    paj7620ReadReg(0x43, 1, &data);
    if(data == GES_FORWARD_FLAG) 
    {
     Serial.println("前");
     delay(GES_QUIT_TIME);
    }
    else if(data == GES_BACKWARD_FLAG) 
    {
     Serial.println("後ろ");
     delay(GES_QUIT_TIME);
    }
    else
    {
     Serial.println("右");
    }          
    break;
   case GES_LEFT_FLAG: 
    delay(GES_ENTRY_TIME);
    paj7620ReadReg(0x43, 1, &data);
    if(data == GES_FORWARD_FLAG) 
    {
     Serial.println("前");
     delay(GES_QUIT_TIME);
    }
    else if(data == GES_BACKWARD_FLAG) 
    {
     Serial.println("後ろ");
     delay(GES_QUIT_TIME);
    }
    else
    {
     Serial.println("左");
    }          
    break;
   case GES_UP_FLAG:
    delay(GES_ENTRY_TIME);
    paj7620ReadReg(0x43, 1, &data);
    if(data == GES_FORWARD_FLAG) 
    {
     Serial.println("前");
     delay(GES_QUIT_TIME);
    }
    else if(data == GES_BACKWARD_FLAG) 
    {
     Serial.println("後ろ");
     delay(GES_QUIT_TIME);
    }
    else
    {
     Serial.println("上");
    }          
    break;
   case GES_DOWN_FLAG:
    delay(GES_ENTRY_TIME);
    paj7620ReadReg(0x43, 1, &data);
    if(data == GES_FORWARD_FLAG) 
    {
     Serial.println("前");
     delay(GES_QUIT_TIME);
    }
    else if(data == GES_BACKWARD_FLAG) 
    {
     Serial.println("後ろ");
     delay(GES_QUIT_TIME);
    }
    else
    {
     Serial.println("下");
    }          
    break;
   case GES_FORWARD_FLAG:
    Serial.println("前");
    delay(GES_QUIT_TIME);
    break;
   case GES_BACKWARD_FLAG:    
    Serial.println("後ろ");
    delay(GES_QUIT_TIME);
    break;
   case GES_CLOCKWISE_FLAG:
    Serial.println("時計回り");
    break;
   case GES_COUNT_CLOCKWISE_FLAG:
    Serial.println("反時計回り");
    break;  
   default:
    paj7620ReadReg(0x44, 1, &data1);
    if (data1 == GES_WAVE_FLAG) 
    {
     Serial.println("ウェーブ");
    }
    break;
  }
 }
 delay(100);
}
```

- **ステップ 9.** アップロードをクリックし、シリアルモニターポートを開きます。
- **ステップ 10.** この例では、9つのジェスチャーを認識し、結果を出力できます。認識可能なジェスチャーには、上に移動、下に移動、左に移動、右に移動、前進、後退、時計回りの円、反時計回りの円、そして波があります。試してみて、以下のようにCOMポートの出力を確認してください。

```shell
PAJ7620U2 TEST DEMO: Recognize 9 gestures.
INIT SENSOR...
Addr0 =20,  Addr1 =76
wake-up finish.
Set up gaming mode.
Paj7620 initialize register finished.
INIT OK
Please input your gestures:

Left
Left
Up
Right
Up
Up
Down
Up
Down
Down
Up
Right
Left
```

:::note
    前進/後退ジェスチャーを認識したい場合、ジェスチャーの反応時間はGES_ENTRY_TIME（0.8秒）未満である必要があります。また、実際の状況に応じて反応時間を調整することもできます。
:::

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - GestureをI2Cポートに接続し、Grove - Red LEDをBase ShieldのD4ポートに接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[CodecraftをArduinoで使用するためのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/cc_Gesture.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、上向きのジェスチャーを行うとLEDが点灯し、下向きのジェスチャーを行うとLEDが消灯します。
:::

### Raspberry Piで遊ぶ（Grove Base Hat for Raspberry Piを使用）

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Gesture Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/45d_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Gesture-p-2463.html)|

- **ステップ 2.** Grove Base HatをRaspberryに差し込みます。
- **ステップ 3.** ジェスチャーセンサーをBase Hatの**I^2^C**ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/Gesture_Hat.jpg)

#### ソフトウェア

- **ステップ 1.** [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ 2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```shell
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```shell
cd grove.py/grove
python3 grove_gesture_sensor.py 
```

以下はgrove_gesture_sensor.pyのコードです。

```python title="grove_gesture_sensor.py" showLineNumbers
import time,sys
import RPi.GPIO as GPIO
from grove.i2c import Bus

# 使用するバスはRaspberry Piのバージョンに合わせて選択
rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
    bus = Bus(1)
else:
    bus = Bus(0)

class gesture:
 # ジェスチャーセンサーのレジスタと変数
 GES_REACTION_TIME  =.500    # 実際の状況に応じて反応時間を調整できます。
 GES_ENTRY_TIME   =.800    # 前進/後退ジェスチャーを認識したい場合、ジェスチャーの反応時間はGES_ENTRY_TIME（0.8秒）未満である必要があります。
 GES_QUIT_TIME   =1.000
 
 BANK0 = 0
 BANK1 = 1
 
 PAJ7620_ADDR_BASE =0x00

 # レジスタバンク選択
 PAJ7620_REGITER_BANK_SEL  =(PAJ7620_ADDR_BASE + 0xEF) #W

 # デバイスID
 PAJ7620_ID  =0x73

 # レジスタバンク0
 PAJ7620_ADDR_SUSPEND_CMD  =(PAJ7620_ADDR_BASE + 0x3) #W
 PAJ7620_ADDR_GES_PS_DET_MASK_0 =(PAJ7620_ADDR_BASE + 0x41) #RW
 PAJ7620_ADDR_GES_PS_DET_MASK_1 =(PAJ7620_ADDR_BASE + 0x42) #RW
 PAJ7620_ADDR_GES_PS_DET_FLAG_0 =(PAJ7620_ADDR_BASE + 0x43) #R
 PAJ7620_ADDR_GES_PS_DET_FLAG_1 =(PAJ7620_ADDR_BASE + 0x44) #R
 PAJ7620_ADDR_STATE_INDICATOR =(PAJ7620_ADDR_BASE + 0x45) #R
 PAJ7620_ADDR_PS_HIGH_THRESHOLD =(PAJ7620_ADDR_BASE + 0x69) #RW
 PAJ7620_ADDR_PS_LOW_THRESHOLD =(PAJ7620_ADDR_BASE + 0x6A) #RW
 PAJ7620_ADDR_PS_APPROACH_STATE =(PAJ7620_ADDR_BASE + 0x6B) #R
 PAJ7620_ADDR_PS_RAW_DATA  =(PAJ7620_ADDR_BASE + 0x6C) #R
                                    
 # レジスタバンク1                
 PAJ7620_ADDR_PS_GAIN   =(PAJ7620_ADDR_BASE + 0x44) #RW
 PAJ7620_ADDR_IDLE_S1_STEP_0  =(PAJ7620_ADDR_BASE + 0x67) #RW
 PAJ7620_ADDR_IDLE_S1_STEP_1  =(PAJ7620_ADDR_BASE + 0x68) #RW
 PAJ7620_ADDR_IDLE_S2_STEP_0  =(PAJ7620_ADDR_BASE + 0x69) #RW
 PAJ7620_ADDR_IDLE_S2_STEP_1  =(PAJ7620_ADDR_BASE + 0x6A) #RW
 PAJ7620_ADDR_OP_TO_S1_STEP_0 =(PAJ7620_ADDR_BASE + 0x6B) #RW
 PAJ7620_ADDR_OP_TO_S1_STEP_1 =(PAJ7620_ADDR_BASE + 0x6C) #RW
 PAJ7620_ADDR_OP_TO_S2_STEP_0 =(PAJ7620_ADDR_BASE + 0x6D) #RW
 PAJ7620_ADDR_OP_TO_S2_STEP_1 =(PAJ7620_ADDR_BASE + 0x6E) #RW
 PAJ7620_ADDR_OPERATION_ENABLE =(PAJ7620_ADDR_BASE + 0x72) #RW

 # PAJ7620_REGITER_BANK_SEL
 PAJ7620_BANK0=0
 PAJ7620_BANK1=1
 
 # PAJ7620_ADDR_SUSPEND_CMD
 PAJ7620_I2C_WAKEUP =1
 PAJ7620_I2C_SUSPEND =0
 
 # PAJ7620_ADDR_OPERATION_ENABLE
 PAJ7620_ENABLE=1
 PAJ7620_DISABLE=0
 
 # ADC, 削除
 REG_ADDR_RESULT = 0x00
 REG_ADDR_ALERT  = 0x01
 REG_ADDR_CONFIG = 0x02
 REG_ADDR_LIMITL = 0x03
 REG_ADDR_LIMITH = 0x04
 REG_ADDR_HYST   = 0x05
 REG_ADDR_CONVL  = 0x06
 REG_ADDR_CONVH  = 0x07

 GES_RIGHT_FLAG    =1<<0
 GES_LEFT_FLAG    =1<<1
 GES_UP_FLAG     =1<<2
 GES_DOWN_FLAG    =1<<3
 GES_FORWARD_FLAG   =1<<4
 GES_BACKWARD_FLAG   =1<<5
 GES_CLOCKWISE_FLAG   =1<<6
 GES_COUNT_CLOCKWISE_FLAG =1<<7
 GES_WAVE_FLAG    =1<<0
 
 # ジェスチャー出力
 FORWARD   = 1
 BACKWARD   = 2
 RIGHT   = 3
 LEFT   = 4
 UP    = 5
 DOWN   = 6
 CLOCKWISE  = 7
 ANTI_CLOCKWISE = 8
 WAVE   = 9
 
 # 初期レジスタ状態
 initRegisterArray=( [0xEF,0x00],
      [0x32,0x29],
      [0x33,0x01],
      [0x34,0x00],
      [0x35,0x01],
      [0x36,0x00],
      [0x37,0x07],
      [0x38,0x17],
      [0x39,0x06],
      [0x3A,0x12],
      [0x3F,0x00],
      [0x40,0x02],
      [0x41,0xFF],
      [0x42,0x01],
      [0x46,0x2D],
      [0x47,0x0F],
      [0x48,0x3C],
      [0x49,0x00],
      [0x4A,0x1E],
      [0x4B,0x00],
      [0x4C,0x20],
      [0x4D,0x00],
      [0x4E,0x1A],
      [0x4F,0x14],
      [0x50,0x00],
      [0x51,0x10],
      [0x52,0x00],
      [0x5C,0x02],
      [0x5D,0x00],
      [0x5E,0x10],
      [0x5F,0x3F],
      [0x60,0x27],
      [0x61,0x28],
      [0x62,0x00],
      [0x63,0x03],
      [0x64,0xF7],
      [0x65,0x03],
      [0x66,0xD9],
      [0x67,0x03],
      [0x68,0x01],
      [0x69,0xC8],
      [0x6A,0x40],
      [0x6D,0x04],
      [0x6E,0x00],
      [0x6F,0x00],
      [0x70,0x80],
      [0x71,0x00],
      [0x72,0x00],
      [0x73,0x00],
      [0x74,0xF0],
      [0x75,0x00],
      [0x80,0x42],
      [0x81,0x44],
      [0x82,0x04],
      [0x83,0x20],
      [0x84,0x20],
      [0x85,0x00],
      [0x86,0x10],
      [0x87,0x00],
      [0x88,0x05],
      [0x89,0x18],
      [0x8A,0x10],
      [0x8B,0x01],
      [0x8C,0x37],
      [0x8D,0x00],
      [0x8E,0xF0],
      [0x8F,0x81],
      [0x90,0x06],
      [0x91,0x06],
      [0x92,0x1E],
      [0x93,0x0D],
      [0x94,0x0A],
      [0x95,0x0A],
      [0x96,0x0C],
      [0x97,0x05],
      [0x98,0x0A],
      [0x99,0x41],
      [0x9A,0x14],
      [0x9B,0x0A],
      [0x9C,0x3F],
      [0x9D,0x33],
      [0x9E,0xAE],
      [0x9F,0xF9],
      [0xA0,0x48],
      [0xA1,0x13],
      [0xA2,0x10],
      [0xA3,0x08],
      [0xA4,0x30],
      [0xA5,0x19],
      [0xA6,0x10],
      [0xA7,0x08],
      [0xA8,0x24],
      [0xA9,0x04],
      [0xAA,0x1E],
      [0xAB,0x1E],
      [0xCC,0x19],
      [0xCD,0x0B],
      [0xCE,0x13],
      [0xCF,0x64],
      [0xD0,0x21],
      [0xD1,0x0F],
      [0xD2,0x88],
      [0xE0,0x01],
      [0xE1,0x04],
      [0xE2,0x41],
      [0xE3,0xD6],
      [0xE4,0x00],
      [0xE5,0x0C],
      [0xE6,0x0A],
      [0xE7,0x00],
      [0xE8,0x00],
      [0xE9,0x00],
      [0xEE,0x07],
      [0xEF,0x01],
      [0x00,0x1E],
      [0x01,0x1E],
      [0x02,0x0F],
      [0x03,0x10],
      [0x04,0x02],
      [0x05,0x00],
      [0x06,0xB0],
      [0x07,0x04],
      [0x08,0x0D],
      [0x09,0x0E],
      [0x0A,0x9C],
      [0x0B,0x04],
      [0x0C,0x05],
      [0x0D,0x0F],
      [0x0E,0x02],
      [0x0F,0x12],
      [0x10,0x02],
      [0x11,0x02],
      [0x12,0x00],
      [0x13,0x01],
      [0x14,0x05],
      [0x15,0x07],
      [0x16,0x05],
      [0x17,0x07],
      [0x18,0x01],
      [0x19,0x04],
      [0x1A,0x05],
      [0x1B,0x0C],
      [0x1C,0x2A],
      [0x1D,0x01],
      [0x1E,0x00],
      [0x21,0x00],
      [0x22,0x00],
      [0x23,0x00],
      [0x25,0x01],
      [0x26,0x00],
      [0x27,0x39],
      [0x28,0x7F],
      [0x29,0x08],
      [0x30,0x03],
      [0x31,0x00],
      [0x32,0x1A],
      [0x33,0x1A],
      [0x34,0x07],
      [0x35,0x07],
      [0x36,0x01],
      [0x37,0xFF],
      [0x38,0x36],
      [0x39,0x07],
      [0x3A,0x00],
      [0x3E,0xFF],
      [0x3F,0x00],
      [0x40,0x77],
      [0x41,0x40],
      [0x42,0x00],
      [0x43,0x30],
      [0x44,0xA0],
      [0x45,0x5C],
      [0x46,0x00],
      [0x47,0x00],
      [0x48,0x58],
      [0x4A,0x1E],
      [0x4B,0x1E],
      [0x4C,0x00],
      [0x4D,0x00],
      [0x4E,0xA0],
      [0x4F,0x80],
      [0x50,0x00],
      [0x51,0x00],
      [0x52,0x00],
      [0x53,0x00],
      [0x54,0x00],
      [0x57,0x80],
      [0x59,0x10],
      [0x5A,0x08],
      [0x5B,0x94],
      [0x5C,0xE8],
      [0x5D,0x08],
      [0x5E,0x3D],
      [0x5F,0x99],
      [0x60,0x45],
      [0x61,0x40],
      [0x63,0x2D],
      [0x64,0x02],
      [0x65,0x96],
      [0x66,0x00],
      [0x67,0x97],
      [0x68,0x01],
      [0x69,0xCD],
      [0x6A,0x01],
      [0x6B,0xB0],
      [0x6C,0x04],
      [0x6D,0x2C],
      [0x6E,0x01],
      [0x6F,0x32],
      [0x71,0x00],
      [0x72,0x01],
      [0x73,0x35],
      [0x74,0x00],
      [0x75,0x33],
      [0x76,0x31],
      [0x77,0x01],
      [0x7C,0x84],
      [0x7D,0x03],
      [0x7E,0x01])

 # デバッグメッセージを有効化
 debug=0
 
 # センサーの初期化
 def init(self):
  time.sleep(.001)
  self.paj7620SelectBank(self.BANK0)
  self.paj7620SelectBank(self.BANK0)
  
  data0 = self.paj7620ReadReg(0, 1)[0]
  data1 = self.paj7620ReadReg(1, 1)[0]
  if self.debug:
   print("data0:",data0,"data1:",data1)
  if data0 != 0x20  :#or data1 <> 0x76:
   print("Error with sensor")
   #return 0xff
  if data0 == 0x20:
   print("wake-up finish.")
   
  for i in range(len(self.initRegisterArray)):
   self.paj7620WriteReg(self.initRegisterArray[i][0],self.initRegisterArray[i][1])
  
  self.paj7620SelectBank(self.BANK0)
  
  print("Paj7620 initialize register finished.")
  
 # ジェスチャーセンサーのレジスタにバイトを書き込む
 def paj7620WriteReg(self,addr,cmd):
  bus.write_word_data(self.PAJ7620_ID, addr, cmd)
  
 # ジェスチャーセンサーのレジスタバンクを選択
 def paj7620SelectBank(self,bank):
  if bank==self.BANK0:
   self.paj7620WriteReg(self.PAJ7620_REGITER_BANK_SEL, self.PAJ7620_BANK0)
   
 # ジェスチャーセンサーからアドレス"addr"から始まる長さ"qty"のバイトブロックを読み取る
 def paj7620ReadReg(self,addr,qty):
  return bus.read_i2c_block_data(self.PAJ7620_ID, addr,qty)
 
 # ジェスチャーセンサーの値を出力
 def print_gesture(self):
  data=self.paj7620ReadReg(0x43,1)[0]
  if data==self.GES_RIGHT_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    print("Forward")
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    print("Backward")
    time.sleep(self.GES_QUIT_TIME)
   else:
    print("Right")
    
  elif data==self.GES_LEFT_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    print("Forward")
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    print("Backward")
    time.sleep(self.GES_QUIT_TIME)
   else:
    print("Left")  
  
  elif data==self.GES_UP_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    print("Forward")
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    print("Backward")
    time.sleep(self.GES_QUIT_TIME)
   else:
    print("Up")  
    
  elif data==self.GES_DOWN_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    print("Forward")
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    print("Backward")
    time.sleep(self.GES_QUIT_TIME)
   else:
    print("Down")
  
  elif data==self.GES_FORWARD_FLAG:
   print("Forward")
   time.sleep(self.GES_QUIT_TIME)
   
  elif data==self.GES_BACKWARD_FLAG:
   print("Backward")
   time.sleep(self.GES_QUIT_TIME)
   
  elif data==self.GES_CLOCKWISE_FLAG:
   print("Clockwise")
 
  elif data==self.GES_COUNT_CLOCKWISE_FLAG:
   print("anti-clockwise")
   
  else:
   data1=self.paj7620ReadReg(0x44, 1)[0]
   if (data1 == self.GES_WAVE_FLAG):
    print("wave")
 
 # プログラムで使用できるジェスチャーセンサーからの値を返す
 #  0:なし
 #  1:前進
 #  2:後退
 #  3:右
 #  4:左
 #  5:上
 #  6:下
 #  7:時計回り
 #  8:反時計回り
 #  9:波
 def return_gesture(self):

  data=self.paj7620ReadReg(0x43,1)[0]
  if data==self.GES_RIGHT_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    return 1
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    return 2
    time.sleep(self.GES_QUIT_TIME)
   else:
    return 3
    
  elif data==self.GES_LEFT_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    return 1
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    return 2
    time.sleep(self.GES_QUIT_TIME)
   else:
    return 4 
  
  elif data==self.GES_UP_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    return 1
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    return 2
    time.sleep(self.GES_QUIT_TIME)
   else:
    return 5  
    
  elif data==self.GES_DOWN_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    return 1
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    return 2
    time.sleep(self.GES_QUIT_TIME)
   else:
    return 6
  
  elif data==self.GES_FORWARD_FLAG:
   return 1
   time.sleep(self.GES_QUIT_TIME)
   
  elif data==self.GES_BACKWARD_FLAG:
   return 2
   time.sleep(self.GES_QUIT_TIME)
   
  elif data==self.GES_CLOCKWISE_FLAG:
   return 7

  elif data==self.GES_COUNT_CLOCKWISE_FLAG:
   return 8
   
  else:
   data1=self.paj7620ReadReg(0x44, 1)[0]
   if (data1 == self.GES_WAVE_FLAG):
    return 9
  return 0
  
if __name__ == "__main__":
 g=gesture()
 g.init()
 while True:
  g.print_gesture()
  time.sleep(.1)
  # print g.return_gesture()
  # time.sleep(.1)

```

:::success
    すべてが正常に動作すれば、以下の結果が表示されるはずです。
:::
 
```shell
pi@raspberrypi:~/grove.py/grove $ python3 grove_gesture_sensor.py 
wake-up finish.
Paj7620 initialize register finished.
左
前
左
後ろ
右
上
下
```

このプログラムを終了するには、++ctrl+c++ を押すだけです。

:::note
        GroveモジュールのI2CアドレスをスキャンするためにI2Cツールを使用すると、2つ以上のアドレスが見つかる場合があります。0x04は*Raspberry Pi用Grove Base Hat*のアドレスです。
:::

### Raspberry Piで遊ぶ (GrovePi_Plusを使用)

#### ハードウェア

- **ステップ 1.** 以下のアイテムを準備してください：

| Raspberry pi | GrovePi_Plus |Grove-Gesture_v1.0|
|--------------|-------------|-----------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/45d_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Gesture-p-2463.html)|

- **ステップ 2.** GrovePi_PlusをRaspberryに接続します。
- **ステップ 3.** Grove-Gesture_v1.0をGrovePi_Plusの**I2C**ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberryをPCに接続します。

![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/rasp_connection.jpg)

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構築します。
- **ステップ 2.** Githubリポジトリをクローンします。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行してセンサーを使用します。

```bash
cd ~/GrovePi/Software/Python/grove_gesture_sensor
python3 gesture_value.py  
```

以下はgesture_value.pyのコードです。

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove - Gesture Sensor v1.0(https://www.seeedstudio.com/depot/Grove-Gesture-p-2463.html)
#  
# この例では、ユーザーがセンサーの上で動作を行った際に値を返します。
#
# GrovePiはRaspberry PiとGroveセンサーを接続します。GrovePiの詳細はこちらをご覧ください：http://www.dexterindustries.com/GrovePi
#
# この例について質問がありますか？フォーラムで質問してください：http://forum.dexterindustries.com/c/grovepi
#
'''
## ライセンス
MITライセンス (MIT)
Raspberry Pi用GrovePi: GroveセンサーをRaspberry Piに接続するためのオープンプラットフォーム。
Copyright (C) 2017  Dexter Industries
本ソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）のコピーを取得した者に対し、以下の条件に従い、ソフトウェアを制限なく使用、コピー、変更、公開、配布、サブライセンス、または販売する権利を許可します。
上記の著作権表示およびこの許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。
本ソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。商品性、特定目的への適合性、および非侵害性の保証を含みますが、これらに限定されません。いかなる場合も、著者または著作権者は、契約、不法行為、またはその他の行為に起因する請求、損害、またはその他の責任について責任を負いません。
'''

import grove_gesture_sensor
import time

g=grove_gesture_sensor.gesture()
g.init()
while True:
 gest=g.return_gesture()
 # ジェスチャーを一致させる
 if gest==g.FORWARD:
  print("前")
 elif gest==g.BACKWARD:
  print("後ろ")
 elif gest==g.RIGHT:
  print("右")
 elif gest==g.LEFT:
  print("左")
 elif gest==g.UP:
  print("上")
 elif gest==g.DOWN:
  print("下")
 elif gest==g.CLOCKWISE:
  print("時計回り")
 elif gest==g.ANTI_CLOCKWISE:
  print("反時計回り")
 elif gest==g.WAVE:
  print("波")
 elif gest==0:
  print("-")
 else:
  print("エラー")
 time.sleep(.1)
```

- **ステップ 4.** 以下は画面出力です。

```cpp showLineNumbers
pi@raspberrypi:~/Dexter/GrovePi/Software/Python/grove_gesture_sensor $ python3 gesture_value.py 
wake-up finish.
Paj7620 initialize register finished.

-
-
下
-
-
左
-
-
-
-
上
-
-
-
-
右
-
-
上
-
-
時計回り
-
-
時計回り

```

## 参考資料

ジェスチャーのレジスタデータを以下の表に定義します。

|ジェスチャー| レジスタデータ| レジスタアドレス| 検出された場合| 検出されない場合|
|----|---|---|---|---|
|上 |data==GES_UP_FLAG| 0x43 |ジェスチャー検出 |ジェスチャー未検出|
|下| data==GES_DOWN_FLAG|0x43 |ジェスチャー検出 |ジェスチャー未検出|
|左| data==GES_LEFT_FLAG|0x43 |ジェスチャー検出 |ジェスチャー未検出|
|右| data==GES_RIGHT_FLAG|0x43 |ジェスチャー検出 |ジェスチャー未検出|
|前 |data==GES_FORWARD_FLAG|0x43 |ジェスチャー検出 |ジェスチャー未検出|
|後ろ| data==GES_BACKWARD_FLAG|0x43 |ジェスチャー検出 |ジェスチャー未検出|
|時計回り| data==GES_CLOCKWISE_FLAG|0x43 |ジェスチャー検出 |ジェスチャー未検出|
|反時計回り |data==GES_COUNT_CLOCKWISE_FLAG|0x43 |ジェスチャー検出 |ジェスチャー未検出|
|波| data==GES_WAVE_FLAG| 0x44|ジェスチャー検出 |ジェスチャー未検出|

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/Grove_-_Gesture_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - Gesture_v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/Grove_-_Gesture_v1.0_sch_pcb.zip)
- **[データシート]** [PAJ7620U2_Datasheet_V0.8_20140611.pdf](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/PAJ7620U2_Datasheet_V0.8_20140611.pdf)
- **[データシート]** [PAJ7620U2_DS_v1.5_05012022_Confidential.pdf](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/PAJ7620U2_DS_v1.5_05012022_Confidential.pdf)
- **[ライブラリ]** [Library Grove - Guesture](https://github.com/Seeed-Studio/Grove_Gesture)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/Grove_Gesture_CDC_File.zip)

## プロジェクト

**Seeed x.factoryでのアップサイクリングワークショップ [エピソード1]**: 先週末、コミュニティから20人のメーカー、デザイナー、エンジニアがx.factoryに集まり、素晴らしいアップサイクリングハッキングワークショップを開催しました。（私自身もお気に入りのワークショップとして挙げています！）

[![](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/hacker.io.gif)](https://blog.hackster.io/upcycling-workshop-at-seeed-x-factory-episode-1-4f2d5a61f5ad)

**Jesty - ジェスチャーでPCを操作**: ジェスチャーセンサーを使用してPCを操作し、各ジェスチャーにキーやマウスクリックを関連付けます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/Momy93/jesty-control-your-pc-with-gestures-5d4a3e/embed' width='350'></iframe>

**PHPoC - 手のジェスチャーでパン・チルトを操作**: 手のジェスチャーを使ってロボットを操作する興味深い方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/Homer/phpoc-control-pan-tilt-via-hand-gesture-1daacc/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>