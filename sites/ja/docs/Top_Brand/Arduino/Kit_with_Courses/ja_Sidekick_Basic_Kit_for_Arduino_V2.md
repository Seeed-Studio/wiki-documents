---
description: Arduino V2 用 Sidekick ベーシックキット
title: Arduino V2 用 Sidekick ベーシックキット
keywords:
  - コース付きキット
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sidekick_Basic_Kit_for_Arduino_V2
sku: 110060025
last_update:
  date: 2/17/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/ja/Sidekick_Basic_Kit_for_Arduino_V2/
---

<!-- ---
name: Sidekick Basic Kit for Arduino V2
category: Arduino
bzurl: https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html
oldwikiname:   Sidekick Basic Kit for Arduino V2
prodimagename:  BasicKit.jpg
surveyurl: https://www.research.net/r/Sidekick_Basic_Kit_for_Arduino_V2
sku:  110060025
--- -->
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/BasicKit.jpg)

Arduino Sidekick Basic Kit は、Arduino / Seeeduino / Seeeduino ADK / Maple Lilypad もしくは任意の MCU ボードと一緒に使用するために設計されたキットです。初めてのユーザーが自分のコンピュータを Arduino に接続するために必要なものがすべて含まれています。ブレッドボード、ジャンパワイヤ、カラー LED、抵抗、ブザーなど、DIY プロジェクトで最もよく使われるアクセサリが多数含まれています。
これらはすべて専用の便利なボックスに収められており、持ち運びが容易で散らかりを最小限に抑えられます。

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## キット内容

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Basic_Kit_for_Arduino_Photo_11.jpg)

| アイテム                  | 数量                           |
|-------------------------|--------------------------------|
| ブレッドボード          | 1                              |
| 緑色 LED                | 5                              |
| 赤色 LED                | 5                              |
| RGB コモンアノード LED | 1                              |
| セラミックコンデンサ    | 10nF x 10 + 100nF x 10         |
| アルミ電解コンデンサ    | 100uF x 5                      |
| 抵抗                    | 330R x 10 + 1k x 10 + 10k x 10 |
| 傾斜スイッチ            | 1                              |
| サーミスタ              | 1                              |
| 周囲光センサ            | 1                              |
| ダイオード              | 1                              |
| ブザー                  | 1                              |
| ボタン                  | 1                              |
| スイッチ                | 5                              |
| ミニサーボ              | 1                              |
| ノブ付き可変抵抗        | 1                              |
| ブレッドボード用ジャンパワイヤ | 5 本（長）、20 本（短）      |
| ボックス                | 4                              |

## 基礎電子回路の復習

**電流と電圧**

電流とは、導体内を流れる電荷の流れる速さのことです。電圧とは、電流を流すために 2 点間に加えられる電位差（電気的な駆動力）のことです。電流はアンペア（A）、電圧はボルト（V）で表されます。

**抵抗**

抵抗は、導体内を流れる電流の障害物です。ランプのような電子デバイスに流れる電流を制限するために使用されます。電流の流れに対する抵抗はオーム（Ω）で表されます。抵抗は **固定抵抗** と **可変抵抗（POT）** に分類されます。

- **抵抗の接続**

    抵抗は、互いに並列または直列の 2 種類の方法で接続できます。

- **直列接続された抵抗**

    抵抗が直列に接続されている場合、合成抵抗値は直列につながれたすべての抵抗値の合計に等しくなります。

- **並列接続された抵抗**

    並列接続では、合成抵抗の逆数は、それぞれの抵抗値の逆数の和に等しくなります。

**オームの法則**

電流、電圧、抵抗の関係はオームの法則により定められています。これは「2 点間の導体を流れる電流（I アンペア）は、その 2 点間にかかる電位差または電圧（V ボルト）に比例し、その間の抵抗（R オーム）に反比例する」と述べています。
すなわち I = V / R です。したがって V = IR または R = V / I となります。以下のオームの法則の三角形は、V、I、R の関係を覚えるために使うことができます。縦線は掛け算、横線は割り算を表します。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Ohm-s_law_triange.jpg)

例：電流 I を求めるには、V を R で割ります。

**ブレッドボード**

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Breadboard_.jpg)

**ブレッドボード** は電子回路用の試作デバイスです。電子部品を接続して、はんだ付けなしで回路を作るのに非常に便利です。ブレッドボードは、部品を挿入するための金属コンタクト付きの穴が行と列に並んで構成されています。Arduino Sidekick Basic Kit に付属するブレッドボードは、**2 × 30 の 5 穴列** と **4 × 25 穴行** に配置されています。これらの穴は、下図に示すような方法で内部的に接続されています。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Breadboard_Internal_Connections.jpg)

**固定抵抗**

Basic Kit に付属する抵抗はカーボン製で、固定値タイプです。抵抗値はカラーバンドで示されています。抵抗のカラーコード表から値を読み取ることができます。

- _最初のバンド_ は抵抗値の **1 桁目** を示します。

- _2 番目のバンド_ は **2 桁目** を示します。

- _3 番目のバンド_ は抵抗の **乗数** を示します。

- _4 番目のバンド_ は **許容誤差** を示します。

**ポテンショメータ（POT）**

POT は、ノブを回すことで抵抗値を変えられる可変抵抗です。端子は 3 本あり、抵抗体の両端には両側の端子が接続されています。中央の端子は、抵抗体上を移動するスライダに接続されています。抵抗値はノブの位置に比例して変化します。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_POT.png)

**サーミスタ**

サーミスタは、周囲の温度によって抵抗値が変化する特殊な抵抗です。温度差を検知するための非常に有用で便利な方法を提供します。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Thermistor.JPG)

**光センサ**

光センサは周囲光の強さを検出し、受けた光の量に応じて変化する信号を出力します。光の検出や明るさに関連したプロジェクトに使用できます。
従来の CdS セルのようなフォトレジスタとは異なり、このセンサは極性を持つ半導体デバイスです。回路を組む際は、必ず正しい極性で接続してください。

**発光ダイオード**

LED は順方向にバイアスされると点灯します。透明なケースに封入されており、赤、緑、青などさまざまな色があります。LED はリン化ガリウムヒ素で作られており、ヒ素とリンの割合を変えることで異なる色を得ることができます。単色 LED には 2 本のリードがあり、アノード（+）とカソード（−）があります。3 色 LED には 4 本のリードがあり、1 本がアノード、残り 3 本が各色用のカソードです。LED は表示ボードなどに使用できます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_RGB_LED_.JPG)

**スイッチ**

スイッチは回路を開閉するために使用されます。Basic Kit に付属するスイッチには、押しボタンスイッチとスライドスイッチの 2 種類があります。

- **押しボタンスイッチ**

    押しボタンスイッチを押している間だけ、回路は閉じます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Push_Button_Switch_.JPG)

- **スライドスイッチ**

    スライドスイッチは 2 位置のシンプルなスイッチです。適切な位置に切り替えることで、回路を開いたり閉じたりできます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Slide_Switch_.JPG)

- **傾斜スイッチ**

    傾斜スイッチには回路に接続される 2 本の端子があり、_水平に傾ける_と回路を _閉じ_、_垂直に傾ける_と回路を_開き_ます。

**コンデンサ**

コンデンサは電荷を蓄えるために使用されます。電解コンデンサとセラミックディスクコンデンサの 2 種類に分類されます。コンデンサはマイクロファラド（uF）で表されます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Capacitor.JPG)

- **コンデンサの接続**

    コンデンサは、下図のように 2 種類の配置で回路に接続できます。

- **直列接続されたコンデンサ**

    2 個以上のコンデンサが互いに直列に接続されている場合、合成容量の逆数は、それぞれの容量値の逆数の和に等しくなります。

- **並列接続されたコンデンサ**

    2 個以上のコンデンサが並列に接続されている場合、合成容量はそれぞれの容量の合計に等しくなります。

- **電解コンデンサ**

    電解コンデンサは、一般に小さな体積で大きな容量を持ちます。極性あり電解コンデンサと無極性電解コンデンサに分類されます。
    アルミニウム、タンタル、バナジウム、ビスマスなどの金属が、陽極および陰極の箔を形成するために使用されます。

- **セラミックディスクコンデンサ**

    セラミックコンデンサは、電極として薄い金属膜を用いたセラミック誘電体を使用します。ディスクタイプでは、セラミックの両面に銀を固定して導体板を形成します。ディスクコンデンサは小容量の用途にのみ使用されます。

**ブザー**

ブザーは音響信号を出すデバイスで、機械式、電磁式、または圧電式のものがあります。内部で使用される材料の振動に基づいてさまざまな音声信号を生成します。一般的にアラームやタイマーに使用されます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Buzzer.png)

長いピンを正電圧に、短いピンを GND に接続してください。

ブザーはデジタル出力に接続でき、出力がHighのときに音を発します。あるいは、アナログのパルス幅変調出力に接続して、さまざまな音色や効果を生成することもできます。

**ダイオード**

ダイオードは、一方向にのみ電流を流す半導体材料です。電源電圧が_障壁電位_より大きくなったときにのみ導通を開始します。順方向バイアス状態では閉スイッチのように動作し、逆方向バイアス状態では開スイッチのように動作します。ダイオードは半導体材料に基づいて分類され、PN接合ダイオード、ツェナーダイオード、発光ダイオードなどの素子を作るために使用できます。

- **ダイオードのバイアス**

    ダイオードに電圧を印加することをダイオードのバイアスと呼びます。端子間に**正の電源**電圧が印加されるとダイオードは**順方向バイアス**され、_シリコンダイオードでは0.7v_、_ゲルマニウムダイオードでは0.3v_を超えると導通を開始します。ダイオードの端子間に**負の電圧**が印加されると、**_逆方向バイアス_**されていると言います。逆方向バイアス電圧がブレークダウン電圧を超えると、ダイオードは損傷します_。_

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Diode.JPG)

**ミニサーボ**

サーボは、ギアとフィードバックシステムを備えたDCモーターです。ロボットの駆動機構などに使用されます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Mini_Servo_Photo.jpg)

## レッスン

**1. Hello World! : 点滅するLED**

- **ハードウェア**
  - 下図のようにLEDをデジタルピン8に接続します。330オームの抵抗はLEDに流れる電流を制限します。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_1LED_Blink.jpg)

- **ソフトウェア**

  - 次のスケッチをコンパイルしてアップロードします：

```cpp
//Blink a LED connected to Digital Pin 8 via a 330 Ohm resitors.

void setup()   {
    pinMode(8, OUTPUT);       // Initialize Arduino Digital Pin 8 as output
}


void loop()
{
    digitalWrite(8, HIGH);   // Switch On LED
    delay(500);              // Wait for half a second
    digitalWrite(8, LOW);    // Switch Off LED
    delay(500);              // Wait for half a second
}
```

**2. 流れるLEDディスプレイ**

- **ハードウェア**

  - 3つのLEDを、それぞれ330オームの抵抗を介してデジタルピン9、10、11に接続します。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_3LEDs_Display.jpg)

- **ソフトウェア**

  - 次のスケッチをコンパイルしてアップロードします：

```cpp
//Running LED display: Three LEDs connected to Digital Pin 9, 10 and 11.

void setup()
{
    pinMode(9, OUTPUT);        // Initialize Arduino Digital Pins 9 as output
    pinMode(10, OUTPUT);       // Initialize Arduino Digital Pins 10 as output
    pinMode(11, OUTPUT);       // Initialize Arduino Digital Pins 11 as output
}


void loop()
{

    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    digitalWrite(11, HIGH);
    delay(250);              // Wait for quarter of a second
    digitalWrite(9, LOW);
    digitalWrite(10, HIGH);
    digitalWrite(11, LOW);
    delay(250);              // Wait for quarter of a second
    digitalWrite(9, HIGH);
    digitalWrite(10, LOW);
    digitalWrite(11, LOW);
    delay(250);              // Wait for quarter of a second

}
```

**3. Arduinoと対話する：プッシュボタンスイッチの接続**

- **ハードウェア**

  - 下図のようにLEDをデジタルピン8に接続します。330オームの抵抗はLEDに流れる電流を制限します。

  - プッシュボタンスイッチの一方をデジタルピン12に、もう一方を10K抵抗を介してGNDに接続します。

  - プッシュボタンのもう一端を+5Vに接続します。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Pushbutton_LED.jpg)

- **ソフトウェア**

- 次のスケッチをコンパイルしてアップロードします：

```cpp
//Pushbutton switch demo: LED is connected to digital pin 8 and Pushbutton is connected to digital pin 12.
//The LED glows when the button is pressed.

char inputButtonState;

void setup()
{
    pinMode(8, OUTPUT);        // Initialize Arduino Digital Pins 8 as output for connecting LED
    pinMode(12,INPUT);         // Initialize Arduino Digital Pins 12 as input for connecting Pushbutton
}


void loop()
{
    inputButtonState = digitalRead(12); //Read the Pushbutton state.

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, HIGH);  //Switch on LED
    }
    else
    {
        digitalWrite(8, LOW);   //Switch off LED
    }

}
```

- 上記はArduinoに信号を送る方法を示しています。実際には、Arduinoを使わなくても同じ目的を達成できます。ボタンを押して回路を閉じるだけです。それでは、次のようにHIGH/LOWの値を反転してみましょう：

```cpp
void loop()
{
    inputButtonState = digitalRead(12); //Read the Pushbutton state.

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, LOW);  //Switch on LED
    }
    else
    {
        digitalWrite(8, HIGH);   //Switch off LED
    }
```

- これで、回路が開いているときにLEDが点灯し、回路が閉じているときに消灯するようになります。

**4 アナログ：POT**

- **ハードウェア**

  - LEDのアノードを、220オームの抵抗を介して**PWM**ピンに接続します。

  - LEDのカソードをGNDピンに接続します。

  - ポテンショメータをブレッドボードに取り付けます。

  - ポテンショメータの右側の端子を+5vに接続します。

  - ポテンショメータの中央の端子を、いずれかのアナログ入力ピン（0〜5）に接続します。

  - ポテンショメータの左側の端子をグランド端子に接続します。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_potled1.jpg)

- **ソフトウェア**

  - LEDのアノードを（5Vではなく）デジタルピン5に接続します。
  - 次のスケッチをコンパイルしてアップロードします：

```cpp
//Varying the brightness of the LED using a Pot
int value=0;
int mval;
void setup()
{
    pinMode(5, OUTPUT);
}
void loop()
{
    value=analogRead(A1); //read analog value from input A1
    // PWM output given to the LED
    mval = map(value, 0, 1023, 0, 100);
    analogWrite(5,mval);

}
```

**5. 机の上の虹：3色LED**

- **ハードウェア**

    ベーシックキットに付属のRGB LEDはコモンアノードタイプです。最も長いリードがアノードです。他の3本のリードは、それぞれ赤、緑、青のカソードです。

  - RGB LEDのカソードを、それぞれ330オームの抵抗を介してデジタルピン9、10、11に接続します。
  - アノードを+5vに接続します
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_RGB_LED_Display.jpg)

**ソフトウェア**

- 次のスケッチをコンパイルしてアップロードします：

```cpp
void setup()  {

}

void loop()  {


    for(int b = 0 ; b <= 255; b=b+5)
    {
        for(int g = 0 ; g <= 255; g=g+5)
        {
            for(int r= 0 ; r <= 255; r=r+5)
            {
                analogWrite(9, b);
                analogWrite(10, g);
                analogWrite(11, r);
                delay(10);

            }
        }
    }

}
```

**6. 音楽**

- **ハードウェア**

  - ブザーのアノードをデジタルピン11に接続します。

  - ブザーのマイナス側をGNDに接続します
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Music.jpg)

- **ソフトウェア**

  - 次のスケッチをコンパイルしてアップロードします：

```cpp
#define NOTE_D0 98
#define NOTE_D1 294
#define NOTE_D2 330
#define NOTE_D3 350
#define NOTE_D4 393
#define NOTE_D5 441
#define NOTE_D6 495
#define NOTE_D7 556
#define NOTE_DL1 147
#define NOTE_DL2 165
#define NOTE_DL3 175
#define NOTE_DL4 196
#define NOTE_DL5 221
#define NOTE_DL6 248
#define NOTE_DL7 278
#define NOTE_DH1 589
#define NOTE_DH2 661
#define NOTE_DH3 700
#define NOTE_DH4 786
#define NOTE_DH5 882
#define NOTE_DH6 990
#define NOTE_DH7 112

#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.125
#define SIXTEENTH 0.625

// notes in the melody:
int tune[] =
{
    NOTE_D0,NOTE_D1,NOTE_D2,NOTE_D3,NOTE_D4,NOTE_D5,NOTE_D6,NOTE_D7,
    NOTE_DL1,NOTE_DL2,NOTE_DL3,NOTE_DL4,NOTE_DL5,NOTE_DL6,NOTE_DL7,
    NOTE_DH1,NOTE_DH2,NOTE_DH3,NOTE_DH4,NOTE_DH5,NOTE_DH6,NOTE_DH7,
};
/* note durations: 1 = one note*/

float duration[]=
{1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,};
int length;
int tonePin=11;                // buzzer pin
void setup()
{ Serial.begin(9600);
    pinMode(tonePin,OUTPUT);   //  initialize the digital pin as an output
    length = sizeof(tune)/sizeof(tune[0]);
}
void loop()
{
    for(int x=1;x<length;x++)
    {tone(tonePin,tune[x]);
        delay(400*duration[(x%100)]);    // to distinguish the notes, set a minimum time between them.

        noTone(tonePin); // stop the tone playing:
    }
}
```

**7. ミニサーボ**

- **ハードウェア**

  - サーボモーターの赤いワイヤーを+5v電源に接続します。
  - サーボの黒いワイヤーをグランドに接続します。

  - サーボの黄色いワイヤーをArduinoの任意のPWMピンに接続します。

  - ポテンショメータの右側の端子を+5vに接続します。

  - ポテンショメータの中央の端子を、いずれかのアナログ入力ピン（0〜5）に接続します。

  - ポテンショメータの左側の端子をグランド端子に接続します。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Mini_Servo.jpg)

- **ソフトウェア**

  - 次のスケッチをコンパイルしてアップロードします：

```
// Controlling a servo position using a potentiometer (variable resistor)
// by Michal Rinott <http://people.interaction-ivrea.it/m.rinott>

#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int potpin = 1;  // analog pin used to connect the potentiometer
int val;    // variable to read the value from the analog pin

void setup()
{
    myservo.attach(5);  // attaches the servo on pin 5 to the servo object
    Serial.begin(19200); // some servos doesn't work without Serial
}

void loop()
{
    val = analogRead(potpin);            // reads the value of the potentiometer (value between 0 and 1023)
    val = map(val, 0, 1023, 0, 179);     // scale it to use it with the servo (value between 0 and 180)
    myservo.write(val);                  // sets the servo position according to the scaled value
    delay(15);                           // waits for the servo to get there
}
```

## 機能

- はんだ付け不要のブレッドボードがあるため、はんだごてを購入したり、はんだ付けの方法を学んだりする必要はありません。

- 先端が硬く、長くて柔軟なジャンパーワイヤーがたくさん入っています。これらのジャンパーワイヤーは、以前の固定長の単線ジャンパーよりもはるかに優れています。

- 最初のプロジェクト用に多数のLEDと抵抗が用意されており、その中にはRGB LEDも含まれています。RGB LEDは、3つの原色LEDが1つのパッケージに収められたLEDです。異なる原色LEDの明るさを調整することで、色が混ざり合い、虹のすべての色を作り出すことができます。
- 抵抗値の読み方を学べる教育用のハウツーカードまで付属しています。
- 傾斜スイッチは、内部に小さな金属球が入った非常にシンプルなデバイスです。デバイスが一方に傾くと、金属球が電気接点に触れます。このセンサーは、自作の防犯アラームなど、さまざまなプロジェクトに役立ちます。
- サーミスタは、温度を検出したいプロジェクトに便利です。
- フォトレジスタは光を検出でき、電球や日光とともに動作します。フォトレジスタは、暗くなったことを検出して夜に照明を点灯させる用途で一般的に使用されます。
- キットに含まれるブザーは、特にマリオブラザーズのテーマ曲を演奏するのに適しています。
- ミニサーボモーターが入っています。これを使ってデッドボルト、照明スイッチ、バルブを開閉できます。ミニカタパルトを作ることもできます。
- ポテンショメータは優れた入力デバイスです。これを使ってサーボアームの角度やLEDの明るさを制御できます。

## リソース

- [Jeremy Blum による Arduino ビデオチュートリアルシリーズ](https://www.youtube.com/playlist?list=PLA567CE235D39FA84)

## プロジェクト

**Georgia Tech Getting Started with TI LaunchPad Workshop 2015**：TI マイコンを使った基本的なブレッドボード回路を試してみましょう

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/launchpad/gtech2015-aa131c/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
