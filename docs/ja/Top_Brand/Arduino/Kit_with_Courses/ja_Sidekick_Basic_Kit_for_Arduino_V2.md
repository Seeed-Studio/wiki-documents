---
description: Arduino V2 用 Sidekick Basic Kit
title: Arduino V2 用 Sidekick Basic Kit
keywords:
- コース付きキット
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sidekick_Basic_Kit_for_Arduino_V2
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Arduino V2 用 Sidekick Basic Kit
category: Arduino
bzurl: https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html
oldwikiname:   Sidekick Basic Kit for Arduino V2
prodimagename:  BasicKit.jpg
surveyurl: https://www.research.net/r/Sidekick_Basic_Kit_for_Arduino_V2
sku:  110060025
--- -->
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/BasicKit.jpg)

Arduino Sidekick Basic Kit は、Arduino / Seeeduino / Seeeduino ADK / Maple Lilypad またはその他の MCU ボードと一緒に使用するように設計されています。このキットには、初めてのユーザーがコンピュータを Arduino に接続するために必要なすべてが含まれています。ブレッドボード、ジャンパーワイヤー、カラフルな LED、抵抗器、ブザーなど、DIY プロジェクトで最も人気のあるアクセサリが多数含まれています。これらはすべて便利なボックスに収められており、持ち運びが簡単で、散らかりを最小限に抑えられます。

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## キット内容

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Basic_Kit_for_Arduino_Photo_11.jpg)

| アイテム                | 数量                           |
|-------------------------|--------------------------------|
| ブレッドボード          | 1                              |
| 緑色 LED               | 5                              |
| 赤色 LED               | 5                              |
| RGB 共通アノード LED    | 1                              |
| セラミックコンデンサ    | 10nF x 10 + 100nF x 10         |
| アルミコンデンサ        | 100uF x 5                      |
| 抵抗器                  | 330R x 10 + 1k x 10 + 10k x 10 |
| チルトスイッチ          | 1                              |
| サーミスタ              | 1                              |
| フォトレジスタ          | 1                              |
| ダイオード              | 1                              |
| ブザー                  | 1                              |
| ボタン                  | 1                              |
| スイッチ                | 5                              |
| ミニサーボ             | 1                              |
| ノブ付きポテンショメータ | 1                              |
| ブレッドボードジャンパーワイヤー | 長いもの x 5、短いもの x 20 |
| ボックス                | 4                              |

## 基本的な電子工学の復習

**電流と電圧**

電流は導体内を流れる電荷の流れる速度を指します。電圧は、電流を流すために2点間に加えられる電位差（電気駆動力）です。電流はアンペア（A）、電圧はボルト（V）で表されます。

**抵抗器**

抵抗器は、導体内を流れる電流の障害物です。ランプのような電子デバイスへの電流の流れを制限するために使用されます。電流の流れに対する抵抗はオーム（Ω）で表されます。抵抗器は、**固定抵抗器**と**可変抵抗器（POT）**に分けられます。

- **抵抗器の接続**

    抵抗器は、並列または直列の2つの異なる方法で接続できます。

- **直列接続の抵抗器**

    抵抗器が直列に接続されている場合、合成抵抗の合計は直列に接続されたすべての抵抗器の値の合計に等しくなります。

- **並列接続の抵抗器**

    並列接続では、合成抵抗の逆数は各抵抗器の逆数の合計に等しくなります。

**オームの法則**

電流、電圧、抵抗の関係はオームの法則によって支配されます。この法則は、「2点間の導体を流れる電流（I アンペア）は、その2点間の電位差または電圧（V ボルト）に比例し、抵抗（R オーム）に反比例する」と述べています。
つまり、I = V / R。したがって、V = IR または R = V / I。以下のオームの法則の三角形を使用して、V、I、R の関係を覚えることができます。垂直線は乗算操作を示し、水平線は除算操作を示します。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Ohm-s_law_triange.jpg)

例: 電流 I を知るには、V を R で割ります。

**ブレッドボード**

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Breadboard_.jpg)

**ブレッドボード**は、電子回路の試作デバイスです。電子部品を接続し、はんだ付けなしで回路を作成するのに非常に便利です。ブレッドボードは、部品を挿入するための金属接点を備えた行と列の穴で構成されています。Arduino Sidekick Basic Kit に付属するブレッドボードは、**2 X 30 の5穴列**と**4 X 25穴行**で構成されています。これらの穴は、以下に示すように内部で接続されています。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Breadboard_Internal_Connections.jpg)

**固定抵抗器**

Basic Kit に付属する抵抗器は炭素製で、固定値タイプです。抵抗値はカラーバンドで示されています。抵抗値は、抵抗器のカラーコードシートから取得できます。

- _第1バンド_ は抵抗値の**最初の桁**を示します。

- _第2バンド_ は**2桁目**を示します。

- _第3バンド_ は抵抗器の**乗数**値を示します。

- _第4バンド_ は**許容値**を示します。

**ポテンショメータ（POT）**

**POT（ポテンショメータ）**

POTは可変抵抗器であり、ノブを回すことで抵抗値を変更できます。3つの端子を持ち、抵抗器の両側の端子は抵抗性材料で作られた導体の端に接続されています。中央の端子はスライダーに接続されており、このスライダーが抵抗性材料の上を移動します。抵抗値はノブの位置に比例して変化します。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_POT.png)

**サーミスタ**

サーミスタは、周囲の温度によって抵抗値が変化する特殊な抵抗器です。温度差を感知するための非常に便利で有用な方法を提供します。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Thermistor.JPG)

**光依存抵抗（LDR）**

LDRは、光が当たる強度が変化すると抵抗値が変化します。フォトセルとも呼ばれます。光が当たらない場合に最大の抵抗を示し、明るい光にさらされると最小の抵抗を示します。硫化カドミウムなどの光感応材料で作られており、回路に接続できます。光感知要素として使用できます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_LDR.JPG)

**発光ダイオード（LED）**

LEDは順方向バイアスがかかると点灯します。透明なケースに封入されており、赤、緑、青などさまざまな色があります。LEDはリン化ガリウムヒ素で作られており、ヒ素とリンの割合を変えることで異なる色を得ることができます。単色LEDは2つのリード（アノード（+）とカソード（-））を持ちます。三色LEDは4つのリードを持ち、1つのアノードと各色に対応する3つのカソードがあります。LEDは表示板に使用できます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_RGB_LED_.JPG)

**スイッチ**

スイッチは回路を閉じたり開いたりするために使用されます。Basic Kitに付属するスイッチには、押しボタンスイッチとスライドスイッチの2種類があります。

- **押しボタンスイッチ**

    押しボタンスイッチを押している間だけ回路が閉じます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Push_Button_Switch_.JPG)

- **スライドスイッチ**

    スライドスイッチはシンプルな2位置スイッチです。適切な位置に設定することで回路を開閉できます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Slide_Switch_.JPG)

- **チルトスイッチ**

    チルトスイッチは2つの端子を持ち、回路に接続されます。水平に傾けると回路を閉じ、垂直に傾けると回路を開きます。

**コンデンサ**

コンデンサは電荷を蓄えるために使用されます。電解コンデンサとセラミックディスクコンデンサの2種類に分類されます。コンデンサの容量はマイクロファラッド（uF）で表されます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Capacitor.JPG)

- **コンデンサの接続**

    コンデンサは以下のように回路内で2種類の配置で接続できます。

- **コンデンサの直列接続**

    2つ以上のコンデンサを直列に接続した場合、総合容量は各コンデンサの容量の逆数の合計に等しくなります。

- **コンデンサの並列接続**

    2つ以上のコンデンサを並列に接続した場合、総合容量は各コンデンサの容量の合計に等しくなります。

- **電解コンデンサ**

    電解コンデンサは通常、小型で大容量のものがあります。極性ありと極性なしの電解コンデンサに分類されます。アルミニウム、タンタル、バナジウム、ビスマスなどの金属がアノードとカソードの箔を形成するために使用されます。

- **セラミックディスクコンデンサ**

    セラミックコンデンサはセラミック誘電体と薄い金属膜を電極として使用します。ディスクタイプでは、セラミックの両側に銀が固定され、導体プレートを形成します。ディスクコンデンサは小容量の用途にのみ使用されます。

**ブザー**

ブザーは音声信号装置であり、機械式、電気機械式、または圧電式のものがあります。使用される材料の振動に基づいてさまざまな音声信号を生成します。アラームやタイマーによく使用されます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Buzzer.png)

長いピンを正電圧に接続し、短いピンをグランドに接続します。

ブザーはデジタル出力に接続でき、出力が高い場合に音を発します。また、アナログのパルス幅変調出力に接続して、さまざまな音や効果を生成することもできます。

**ダイオード**

ダイオードは半導体材料で作られており、電流を一方向にのみ流します。供給電圧が障壁電位を超えた場合にのみ導通を開始します。順方向バイアス状態では閉じたスイッチのように動作し、逆方向バイアス状態では開いたスイッチのように動作します。ダイオードは半導体材料に基づいて分類され、PN接合ダイオード、ツェナーダイオード、発光ダイオードなどの製造に使用されます。

- **ダイオードのバイアス**

    ダイオードに電圧を加えることをダイオードのバイアスと呼びます。ダイオードは端子間に**正電圧**が加えられると**順方向バイアス**となり、_シリコンダイオードでは0.7V以上_、_ゲルマニウムダイオードでは0.3V以上_で導通を開始します。端子間に**負電圧**が加えられると**逆方向バイアス**となります。逆方向バイアス電圧が破壊電圧を超えるとダイオードが損傷します。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Diode.JPG)

**ミニサーボ**

サーボはギアとフィードバックシステムを備えたDCモーターです。ロボットの駆動機構に使用されます。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Mini_Servo_Photo.jpg)

## レッスン

**1. Hello World! : 点滅するLED**

- **ハードウェア**
  - 以下のようにデジタルピン8にLEDを接続します。330オームの抵抗はLEDに流れる電流を制限します。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_1LED_Blink.jpg)

- **ソフトウェア**

  - 以下のスケッチをコンパイルしてアップロードします：

```cpp
//デジタルピン8に330オームの抵抗を介して接続されたLEDを点滅させます。

void setup()   {
    pinMode(8, OUTPUT);       // Arduinoのデジタルピン8を出力として初期化
}


void loop()
{
    digitalWrite(8, HIGH);   // LEDをオンにする
    delay(500);              // 0.5秒待つ
    digitalWrite(8, LOW);    // LEDをオフにする
    delay(500);              // 0.5秒待つ
}
```

**2. 流れるLEDディスプレイ**

- **ハードウェア**

  - 3つのLEDをデジタルピン9、10、11にそれぞれ330オームの抵抗を介して接続します。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_3LEDs_Display.jpg)

- **ソフトウェア**

  - 以下のスケッチをコンパイルしてアップロードします：

```cpp
//流れるLEDディスプレイ：3つのLEDをデジタルピン9、10、11に接続

void setup()
{
    pinMode(9, OUTPUT);        // デジタルピン9を出力として初期化
    pinMode(10, OUTPUT);       // デジタルピン10を出力として初期化
    pinMode(11, OUTPUT);       // デジタルピン11を出力として初期化
}


void loop()
{

    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    digitalWrite(11, HIGH);
    delay(250);              // 0.25秒待つ
    digitalWrite(9, LOW);
    digitalWrite(10, HIGH);
    digitalWrite(11, LOW);
    delay(250);              // 0.25秒待つ
    digitalWrite(9, HIGH);
    digitalWrite(10, LOW);
    digitalWrite(11, LOW);
    delay(250);              // 0.25秒待つ

}
```

**3. Arduinoと対話する：プッシュボタンスイッチの接続**

- **ハードウェア**

  - デジタルピン8にLEDを接続します。330オームの抵抗はLEDに流れる電流を制限します。

  - プッシュボタンスイッチの一端をデジタルピン12に接続し、もう一端を10K抵抗を介してGNDに接続します。

  - プッシュボタンのもう一端を+5Vに接続します。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Pushbutton_LED.jpg)

- **ソフトウェア**

- 以下のスケッチをコンパイルしてアップロードします：

```cpp
//プッシュボタンスイッチのデモ：LEDはデジタルピン8に接続され、プッシュボタンはデジタルピン12に接続されています。
//ボタンが押されるとLEDが点灯します。

char inputButtonState;

void setup()
{
    pinMode(8, OUTPUT);        // LED接続用にデジタルピン8を出力として初期化
    pinMode(12,INPUT);         // プッシュボタン接続用にデジタルピン12を入力として初期化
}


void loop()
{
    inputButtonState = digitalRead(12); //プッシュボタンの状態を読み取る

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, HIGH);  // LEDをオンにする
    }
    else
    {
        digitalWrite(8, LOW);   // LEDをオフにする
    }

}
```

- 上記のコードはArduinoに信号を送る方法を示しています。実際には、Arduinoを使わずに同じ目的を達成することも可能です。ただし、ボタンを押して回路を閉じるだけで、次のようにHIGH/LOWの値を反転させます：

```cpp
void loop()
{
    inputButtonState = digitalRead(12); //プッシュボタンの状態を読み取る

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, LOW);  // LEDをオンにする
    }
    else
    {
        digitalWrite(8, HIGH);   // LEDをオフにする
    }
```

- この場合、回路が開いているときにLEDが点灯し、回路が閉じているときにLEDが消灯します。

**4. アナログ：ポテンショメータ（POT）**

- **ハードウェア**

  - LEDのアノードを**PWM**ピンに220オームの抵抗を介して接続します。

  - LEDのカソードをGNDピンに接続します。

  - ブレッドボードにポテンショメータを取り付けます。

  - ポテンショメータの右端を+5Vに接続します。

  - ポテンショメータの中央端子をアナログ入力ピン（0-5のいずれか）に接続します。

  - ポテンショメータの左端をGND端子に接続します。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_potled1.jpg)

- **ソフトウェア**

  - LEDのアノードをデジタルピン5（5Vの代わりに）に接続します。
  - 以下のスケッチをコンパイルしてアップロードします：

```cpp
//ポテンショメータを使用してLEDの明るさを調整
int value=0;
int mval;
void setup()
{
    pinMode(5, OUTPUT);
}
void loop()
{
    value=analogRead(A1); //入力A1からアナログ値を読み取る
    // LEDに与えるPWM出力
    mval = map(value, 0, 1023, 0, 100);
    analogWrite(5,mval);

}
```

**5. デスク上の虹：三色LED**

- **ハードウェア**

    基本キットに付属するRGB LEDは共通アノード型です。最も長いリードがアノードです。他の3本のリードはそれぞれ赤、緑、青のカソードです。

  - RGB LEDのカソードをデジタルピン9、10、11にそれぞれ330オームの抵抗を介して接続します。
  - アノードを+5Vに接続します。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_RGB_LED_Display.jpg)

**ソフトウェア**

- 以下のスケッチをコンパイルしてアップロードします：

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

  - ブザーの負極をGNDに接続します。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Music.jpg)

- **ソフトウェア**

  - 以下のスケッチをコンパイルしてアップロードします：

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

// メロディの音符：
int tune[] =
{
    NOTE_D0,NOTE_D1,NOTE_D2,NOTE_D3,NOTE_D4,NOTE_D5,NOTE_D6,NOTE_D7,
    NOTE_DL1,NOTE_DL2,NOTE_DL3,NOTE_DL4,NOTE_DL5,NOTE_DL6,NOTE_DL7,
    NOTE_DH1,NOTE_DH2,NOTE_DH3,NOTE_DH4,NOTE_DH5,NOTE_DH6,NOTE_DH7,
};
/* 音符の長さ：1 = 1音符*/

float duration[]=
{1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,};
int length;
int tonePin=11;                // ブザーピン
void setup()
{ Serial.begin(9600);
    pinMode(tonePin,OUTPUT);   // デジタルピンを出力として初期化
    length = sizeof(tune)/sizeof(tune[0]);
}
void loop()
{
    for(int x=1;x<length;x++)
    {tone(tonePin,tune[x]);
        delay(400*duration[(x%100)]);    // 音符を区別するために、最小時間を設定

        noTone(tonePin); // 音を停止
    }
}
```

**7. ミニサーボ**

- **ハードウェア**

  - サーボモーターの赤いワイヤーを+5V電源に接続します。
  - サーボモーターの黒いワイヤーをグラウンドに接続します。
  - サーボモーターの黄色いワイヤーをArduinoの任意のPWMピンに接続します。
  - ポテンショメータの右脚を+5Vに接続します。
  - ポテンショメータの中央脚を任意のアナログ入力ピン（0-5）に接続します。
  - ポテンショメータの左脚をグラウンド端子に接続します。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Mini_Servo.jpg)

- **ソフトウェア**

  - 以下のスケッチをコンパイルしてアップロードしてください：

```
// ポテンショメータ（可変抵抗器）を使用してサーボの位置を制御する
// Michal Rinott <http://people.interaction-ivrea.it/m.rinott> による

#include <Servo.h>

Servo myservo;  // サーボを制御するためのサーボオブジェクトを作成

int potpin = 1;  // ポテンショメータを接続するために使用されるアナログピン
int val;    // アナログピンから値を読み取るための変数

void setup()
{
    myservo.attach(5);  // ピン5にサーボを接続し、サーボオブジェクトに関連付ける
    Serial.begin(19200); // 一部のサーボはSerial通信がないと動作しない
}

void loop()
{
    val = analogRead(potpin);            // ポテンショメータの値を読み取る（0から1023の値）
    val = map(val, 0, 1023, 0, 179);     // サーボで使用するために値をスケール変換（0から180の値）
    myservo.write(val);                  // スケール変換された値に基づいてサーボの位置を設定
    delay(15);                           // サーボが指定位置に到達するまで待機
}
```

## 機能

- はんだ付け不要のブレッドボードが付属しているため、はんだごてを購入したり、はんだ付けを学ぶ必要はありません。
- 長く柔軟性があり、先端が硬いジャンパーワイヤーが多数付属しています。このジャンパーワイヤーは、過去の固定長の固体ワイヤージャンパーよりもはるかに優れています。
- 初めてのプロジェクトに必要なLEDや抵抗が豊富に含まれており、RGB LEDも含まれています。このRGB LEDは、3つの原色LEDが1つのパッケージに収められており、異なる原色LEDの強度を調整することで、色が混ざり合い虹のすべての色を生成できます。
- 抵抗値を読み取るための教育用カードも付属しています。
- チルトスイッチは非常にシンプルなデバイスで、小さな金属球が内部に入っています。このデバイスが片側に傾くと、金属球が電気接点に触れます。このセンサーはDIY防犯アラームなどのさまざまなプロジェクトに役立ちます。
- サーミスタは温度を検出したい場合に役立ちます。
- フォトレジスタは光を検出でき、電球や日光と連動します。フォトレジスタは通常、暗くなったときにライトを点灯させる用途で使用されます。
- キット内のブザーは、特にマリオブラザーズのテーマ曲を演奏するのに適しています。
- ミニサーボモーターが含まれています。これを使用してデッドボルト、ライトスイッチ、バルブを開閉することができます。さらにはミニカタパルトを作ることも可能です。
- ポテンショメータは優れた入力デバイスです。これを使用してサーボアームの角度やLEDの強度を制御できます。

## リソース

- [Jeremy BlumによるArduinoビデオチュートリアルシリーズ](https://www.youtube.com/playlist?list=PLA567CE235D39FA84)

## プロジェクト

**ジョージア工科大学 TI LaunchPad ワークショップ 2015**: TIマイクロコントローラーを使用して、いくつかの基本的なブレッドボード回路を試してみましょう。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/launchpad/gtech2015-aa131c/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>