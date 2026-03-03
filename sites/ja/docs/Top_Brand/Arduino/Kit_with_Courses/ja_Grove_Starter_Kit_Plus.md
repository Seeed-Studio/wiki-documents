---
description: Grove - スターターキットプラス
title: Grove - スターターキットプラス
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Starter_Kit_Plus
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Starter_Kit_Plus.jpeg)

Groveの世界へようこそ！Groveは、電子の世界をスムーズに楽しむためのさまざまなモジュール型センサーとアクチュエータのコレクションです。これらのGroveモジュールについて一つ一つ説明する前に、準備を整えておく必要があります。

**1. Arduinoとは？**

Arduinoは、柔軟で学びやすいオープンソースの開発プラットフォームであり、メーカー、ギーク、インタラクティブアーティストの間で非常に有名です。Arduinoは現在進行中のメーカームーブメントの繁栄を引き起こしました。Arduinoとその協力的なコミュニティを中心に、多くの創造的なプロジェクトが実現されており、Groveシステムもその一部です。Arduinoを始めるには、まずArduinoを手に入れる必要があります。Arduinoやそのクローンは、無数のウェブサイトや小売店で入手可能です。Google検索をすれば簡単に見つけることができます。

**2. Arduino IDEのインストール**

Arduinoは、C/C++に基づいたプログラミングIDEの名前でもあります。Arduinoを手に入れたら、IDEをインストールする必要があります。OSのバージョンによって具体的なインストール方法は異なりますが、幸いにもArduinoチームはほとんどのOSシステム向けに詳細なインストールガイドを提供しています：

[https://arduino.cc/en/Guide/HomePage](https://arduino.cc/en/Guide/HomePage)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Arduino_1.jpg)

**3. 言語リファレンス**

プログラミング言語について全く知らない場合はどうすればいいでしょうか？Arduinoチームは学習のための良質で包括的なウェブサイトも提供しています：

[https://arduino.cc/en/Reference/HomePage](https://arduino.cc/en/Reference/HomePage)

これでGroveの探索の準備が整いました。

### 1. Groveベースシールドの紹介

GroveベースシールドはArduinoに接続され、Groveシステムの基盤となります。ArduinoのすべてのI/Oポートが露出し、22個のGroveコネクタに適応されます。これにはデジタルI/O、アナログI/O、そして特殊ポート（I2C、SPI、UART）が含まれます。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-base_shield_v1.3.jpeg)

中央の黄色い線で囲まれた部分には13個のデジタルI/Oポートがあります。これらは、光センサーやLEDなどのデジタルGroveモジュールを読み取ったり制御したりするために使用できます。一部のデジタルI/OポートはPWM（パルス幅変調）出力としても使用できます。PWM波を生成することで、Arduinoはステッピングモーターの動きを制御したり、LEDをフェードさせたりすることができます。左側の緑の線で囲まれた部分には5つのアナログ入力ポートがあります。アナログ入力は通常、ポテンショメータや温度センサーなどのアナログセンサーを読み取るために使用されますが、これらのポートはデジタルI/Oポートとしても使用できます。最後に、赤で囲まれた特殊ポートがあります：2つのI2Cポート、1つのSPIポート、1つのUARTポート。これらの特殊ポートは、3軸加速度センサーやシリアルBluetoothモジュールなど、より高度なGroveモジュールで使用します。

このパックに含まれるGrove互換センサーは、デジタルポート、アナログポート、またはI2Cポートのいずれかを使用します。各Groveセンサーの配線指示とサンプルコードを以下に参照してください。このパックには10本のGroveケーブルが含まれています。Groveケーブルをセンサーとベースシールドに接続するだけで、はんだ付けなしでプラグアンドプレイ操作が可能になります。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/GroveCable.jpg)

### 2. Grove – ボタン(P)**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Bgpushb1.jpg)

**説明**

汎用的なボタンとして機能するこのボタンは、怠け者の手にぴったりの基本的な部品です。ベースシールドに接続するだけで、配線のないすっきりとしたボタンが完成します。

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/ButtonPicture.jpg)

この例では、このボタンを使用してLEDをオンまたはオフにする方法を示します。
```
<pre>int button = 3;   // デジタルピン3にボタンを接続
int LED = 7;      // デジタルピン7にLEDを接続

void setup()
{
    pinMode(button, INPUT);  // ボタンを入力デバイスとして定義
    pinMode(LED, OUTPUT);    // LEDを出力デバイスとして定義
}

void loop()
{
    int buttonState = digitalRead(button);  // ボタンの状態を読み取る
    if(buttonState == 1)
    digitalWrite(LED,1);
    else
    digitalWrite(LED,0);
}</pre>
```
**ヒント**

このボタンはモーメンタリボタンです。つまり、押されている間だけHIGHを出力します。押されていない場合は、HIGHではなくLOWを出力します。この機能はモールス符号のようなプロジェクトに適していますが、安定したプッシュボタンが必要な場合は、以下のGrove – スイッチ(P)に進んでください。

###  3. Grove – スイッチ(P)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/SwitchP.jpg)

**説明**

このスイッチはミニSPDTスライドスイッチです。これを使用して信号をLOWまたはHIGHに切り替えることができます。上記のGrove – ボタン(P)とは異なり、このスイッチは安定した状態を出力します。

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Switch1.jpg)

Grove – ボタン(P)をこのスイッチに完全に置き換えることができ、例のコードを変更する必要はありません。

**ヒント**

「P」は「パネルマウント」を意味します。名前に「P」が含まれるGroveモジュールの設計目標は、すっきりとした配線のないHIDです。

###  4. Grove – タッチセンサー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/TouchSensor.jpg)

**説明**

このタッチセンサーは一般的なボタンの代替品です。このパッドの円形部分に触れると、HIGHを出力します。ボタンよりも優れており、タッチセンサーには摩耗の問題がありません。

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Touch1.jpg)

Grove – ボタン(P)をこのスイッチに完全に置き換えることができ、例のコードを変更する必要はありません。

**ヒント**

このタッチセンサーは、感度エリアの静電容量の変化を測定して出力を決定します。そのため、前面または背面のパッドに触れても、結果は同じです。「P」バージョンが必要な場合は、単に裏返すだけで完了です！

###  5. Grove – 磁気スイッチ

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Magnetic_Switch.jpg)

**説明**

Grove磁気スイッチは磁石の存在を検出します。CT10という単極単投スイッチを使用しています。磁気スイッチ（リードスイッチとも呼ばれる）は、防犯アラームシステムのドアや窓センサー、ノートパソコンの蓋が閉じたことを検出するセンサー、自転車の車輪の速度センサーなどに使用されます。周囲の磁場がしきい値に達すると、信号ピンでHIGHを出力します。

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/MagneticSwitch1.jpg)

このスイッチは、Grove – Button(P)を完全に置き換えることができ、サンプルコードを変更する必要はありません。

**ヒント**

一部のアプリケーションでは、磁気スイッチが従来の機械式スイッチに取って代わり、摩耗が少なくなっています。

###  6. Grove – 赤色LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-LED.jpg)

**説明**

LEDは初心者にとって最も馴染みのある部品の一つです。表示や光の演出などに使用されます。このキットには、基本的な表示ニーズを満たすために3色のLEDが含まれています。

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/LEDKit.jpg)

上記の例では、インジケーターとしてLEDを使用しました。ここでは、単純なオン/オフ操作を超えて、LEDをフェードさせる光の演出を作成します。
```
/* これはArduinoのサンプルコードです。Arduino IDEで以下のパスから開くことができます：
   File --> Example --> 1.Basic --> Fade */

int brightness = 0;    // LEDの明るさ
int fadeAmount = 5;    // LEDをフェードさせる量

void setup()
{
    // ピン9を出力として宣言
    pinMode(9, OUTPUT);
}

void loop()
{
    // ピン9の明るさを設定
    analogWrite(9, brightness);
    // 次回ループ時の明るさを変更
    brightness = brightness + fadeAmount;
    // フェードの端で方向を反転
    if (brightness == 0 || brightness == 255)
    {
        fadeAmount = -fadeAmount;
    }
    // 暗くなる効果を見るために30ミリ秒待つ
    delay(30);
}
```
**ヒント**

このLEDシリーズには6色があり、異なる好みに対応しています。すべて「パネルマウント」が可能で、このキットに含まれていない他のLEDは以下の通りです：

1. Grove – 紫色LED(3mm);
2. Grove – 白色LED(5mm);
3. Grove – マルチカラー点滅LED(5mm)。

###  7. Grove – ブザー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grovebuzzer.jpg)

**説明**

ブザー、または圧電スピーカーは、おそらく最初に音を出す電子部品です。アラームやインジケーターとして使用されるだけでなく、ボタンを使って曲を演奏することもできます。試して楽しんでみてください！

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/BuzzerKit1.jpg)

以下はOomlout.comからの簡単な例で、家庭でおなじみの童謡「きらきら星」を演奏します。
```
/* メロディ
 * (c) 2005 D. Cuartielles for K3
 *
 * この例では圧電スピーカーを使用してメロディを演奏します。
 * 適切な周波数の方形波を圧電スピーカーに送信し、対応する音を生成します。
 *
 * 音の計算は以下の数学的操作に基づいています：
 *
 *       timeHigh = period / 2 = 1 / (2 * toneFrequency)
 *
 * 以下の表に示されるように、異なる音が記述されています：
 *
 * 音符  周波数  周期  timeHigh
 * c          261 Hz          3830  1915
 * d          294 Hz          3400  1700
 * e          329 Hz          3038  1519
 * f          349 Hz          2864  1432
 * g          392 Hz          2550  1275
 * a          440 Hz          2272  1136
 * b          493 Hz          2028 1014
 * C         523 Hz         1912  956
 *
 * https://arduino.cc/en/Tutorial/Melody
 */

int speakerPin = 9;

int length = 15; // 音符の数
char notes[] = "ccggaagffeeddc "; // 空白は休符を表します
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(speakerPin, HIGH);
        delayMicroseconds(tone);
        digitalWrite(speakerPin, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // 音符名に対応する音を再生
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}

void setup()
{
    pinMode(speakerPin, OUTPUT);
}

void loop() {
    for (int i = 0; i < length; i++) {
        if (notes[i] == ' ')
        {
            delay(beats[i] * tempo); // 休符
        }
        else
        {
            playNote(notes[i], beats[i] * tempo);
        }

        // 音符間の間隔
        delay(tempo / 2);
    }
}
```
**ヒント**

圧電ブザーはどのように動作するのでしょうか？通常、各圧電ブザーには2枚のセラミックウェハがあります。電圧が加えられると、これらのウェハは互いに引き寄せたり反発したりします。これらのウェハの振動によって空気が振動し、音が発生します。振動の周波数が変わると、音の周波数も変化します。

###  8. Grove – バイブレーター

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Gvib.jpg)

**説明**

これは非可聴インジケーターに適した小型振動モーターです。Highに設定すると、このモーターは携帯電話の振動モードのような振動効果を生み出します。

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Vibrator1.jpg)

完全な日本語翻訳は以下の通りです：

---

LEDとして使用することもできますが、ビートを作成することも可能です。このバイブレーターにブザーの例をアップロードして、「きらきら星」の振動バージョンを試してみてください。

**ヒント**

1つのユニットのパワーはかなり限られています。もっと大きなものが欲しいですか？バイブレーターマトリックスを試す価値があります。

### 9. Grove – ロータリー角度センサー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Rotary_Angle_Sensor.jpg)

**説明**

これは10Kオームのリニアロータリーポテンショメータです。300度の有効範囲を持っています。また、HIDデバイスとして設計されており、「パネルマウント」機能が追加されています。しかし、素敵でフレンドリーなHIDになる前に、これにロータリーキャップをDIYしてください！

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Rotaty1.jpg)

この例では、ロータリー角度センサーを読み取る方法を示します。
```
<pre>int potentiometer = 0;

void setup()
{
    Serial.begin(9600); // シリアル通信の周波数を9600ビット/秒に設定
    pinMode(potentiometer, INPUT);
}

void loop()
{
    int value = analogRead(potentiometer);
    Serial.println(value); // シリアルモニター画面に値を表示
    delay(1000); // 次の値を表示する前に1000ms待機
}</pre>
```
**ヒント**

ロータリーポテンショメータはロータリーエンコーダと非常に似ていますが、実際には全く異なります。  
機能的には、ロータリーポテンショメータは基本的にスライドポテンショメータを円形にしたものです。スライドポテンショメータと同様に、アナログ方式で位置を反映します。しかし、ロータリーエンコーダは回転した角度をクリックなどで記録し、ボード上のチップで処理されたデータをアナログまたはデジタル方式で出力します。

外観でも違いを見分けることができます。ロータリーポテンショメータには有効範囲（例：300度）がありますが、ロータリーエンコーダは一方向に何度でも回転できます。

### 10. Grove - サウンドセンサー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Sound_Sensor.jpg)

**説明**

Groveサウンドセンサーは、環境音に反応するプロジェクトを可能にする電気マイクです。このボードには、音入力レベルを制御するポテンショメータが含まれています。

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Sound1.jpg)

この例では、LEDに閾値を設定します。環境音の強度が設定した閾値に達すると、LEDが点灯します。
```
<pre>int ledPin = 9;                       // デジタル12にLEDを接続
int thresholdValue = 0;                 // LEDをオンまたはオフにする閾値

void setup()
{
    pinMode(ledPin, OUTPUT);          // デジタル12のLEDをOUTPUTとして設定
}

void loop()
{
    int sensorValue = analogRead(A0); // アナログ0のセンサー値を読み取る
    if(sensorValue>thresholdValue)
    digitalWrite(ledPin,HIGH);
    delay(200);
    digitalWrite(ledPin,LOW);
}</pre>
```
**ヒント**

電気マイクはすべての周波数の音強度を収集します。そしてポテンショメータは門番の役割を果たします。完全に時計回りに回すとすべてを通過させ、完全に反時計回りに回すと何も通過させません。

### 11. Grove – 光センサー (P)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Light_SensorP1.jpg)

**説明**

光センサー、または光依存抵抗（LDR）は、DIYプロジェクトから産業オートメーションまで幅広い用途で使用される一般的なセンサーです。通常、光センサーの抵抗は周囲の光強度が増加すると減少します。

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Light1.jpg)

この例では、光強度が設定した閾値を下回るとLEDが点灯します。光センサーはArduinoのアナログピン0（左下のアナログGroveコネクタ）に接続され、LEDはベースシールドのGroveデジタルコネクタ12に接続されています。
```
<pre>int ledPin=12;                  // デジタル12にLEDを接続
int thresholdvalue=400;       // LEDをオンまたはオフにする閾値

void setup()
{
    pinMode(ledPin,OUTPUT);           // デジタル12のLEDをOUTPUTとして設定
}

void loop()
{
    int sensorValue = analogRead(0); // 光センサーはアナログ0に接続
    if(sensorValue<thresholdvalue)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}</pre>
```
**ヒント**

アナログ光センサーの出力は0から1023の範囲ですが、出力は周囲の光強度と線形ではありません。以下の表は、出力が実際に何を意味するのかを理解するのに役立ちます。

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> センサー値 </th>
<th scope="col"> 照度 (LUX) </th>
<th scope="col"> 説明 (Wikipediaより適応) </th>
</tr>
<tr>
<td> 100 </td>
<td> &lt;1 </td>
<td> </td>
</tr>
<tr>
<td> 200 </td>
<td> ~1 </td>
<td> 熱帯地方での満月 </td>
</tr>
<tr>
<td> 300 </td>
<td> ~3 </td>
<td> 都市の薄明かり </td>
</tr>
<tr>
<td> 400 </td>
<td> ~6 </td>
<td> </td>
</tr>
<tr>
<td> 500 </td>
<td> ~10 </td>
<td> </td>
</tr>
<tr>
<td> 600 </td>
<td> ~15 </td>
<td> </td>
</tr>
<tr>
<td> 700 </td>
<td> ~35 </td>
<td> 家族のリビングルーム </td>
</tr>
<tr>
<td> 800 </td>
<td> ~80 </td>
<td> オフィスビルの廊下の照明 </td>
</tr>
<tr>
<td> 900 </td>
<td> &gt;100 </td>
<td> 非常に暗い曇りの日 </td>
</tr>
</table>

### 12. Grove – 温度センサー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Bgtemp1.jpg)

**説明**

Grove温度センサーは、サーミスタを使用して周囲温度を測定します。このセンサーの検出範囲は-40〜125℃で、精度は±1.5℃です。ただし、温度値を直接出力するわけではありません。特定の温度値を取得するには、以下のコードにある式を使用します。

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/TemperatureKit1.jpg)

この例では、センサーの生の出力を特定の温度値に変換する方法を示します。シリアルモニターで摂氏の出力データを確認できます。
```
<pre>int a;
int del=1000;                // 温度読み取り間隔
float temperature;
int B=3975;                  // サーミスタのB値
float resistance;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    a=analogRead(0);
    resistance=(float)(1023-a)*10000/a;
    temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
    delay(del);
    Serial.println(temperature);
}</pre>
```
**ヒント**

温度を求めるための組み込み関数はどこから来ているのでしょうか？これは、Steinhart-Hart 方程式の変形版であり、温度 (T) をサーミスタの抵抗 (R) の関数として表す広く使用されている近似式です。元の方程式は以下の通りです：

上記の方程式における3つのパラメータは、1つのパラメータ B によって記述することができます。業界では、サーミスタを B 値で特徴付けるのが一般的であり、これは私たちの例で定義されています。そのため、組み込み関数は実際には B パラメータ方程式に基づいた変形版です。

### 13. Grove – リレー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Twig-Relay1.jpg)

**説明**

リレーは、Arduino の制御能力を拡張するための便利なツールです！Grove インターフェースを介して制御信号を入力すると、リレーがネジ端子に接続された外部回路の開閉を制御します。外部回路の電圧は最大 220V まで対応可能です！このリレーを使って、本格的なプロジェクトを始めましょう！

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/RelayKit1.jpg)

以下は、ボタンを使用してリレーを制御する例です。
```
<pre>const int buttonPin = 3;     // ボタンはデジタルピン3に接続
const int relayPin =  9;     // リレーはデジタルピン9に接続
int buttonState = 0;

void setup()
{
    pinMode(relayPin, OUTPUT);
    pinMode(tiltPin, INPUT);
}

void loop()
{
    // ボタンの状態を読み取る
    buttonState = digitalRead(buttonPin);
    if (buttonState == 1)   digitalWrite(relayPin, HIGH);
    else   digitalWrite(relayPin, LOW);
    delay(10);
}</pre>
```
**ヒント**

リレーは電子制御された機械式スイッチです。そのサイズは、電流を運ぶ能力に応じて異なります。リレー（基本的にはプラスチックの箱部分）が大きいほど、運べる電流も大きくなります。

### 14. Grove – スクリュー端子

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-screw_terminal.jpg)

**説明**

これは、Grove システムによる迅速なプロトタイピングを他のプロトタイピング回路と統合する必要がある場合に便利なツールです。必要な信号線をスクリュー端子に締め付けます。その後、外部回路を一般的な Grove モジュールとして使用できます。

### 15. Grove – サーボ

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Servo.jpg)

**説明**

サーボは、遊び心のあるモーション制御デバイスです！Arduino IDE に組み込まれたサーボライブラリを使用して、0 度から 180 度の間で任意の位置に設定できます。4 種類の異なる形状のシャフトが付属しており、このサーボは小さなファンを駆動したり、物を持ち上げたり、時計の針を模倣したりする準備ができています。

**例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Servo1.jpg)

サーボはアナログアクチュエータの一種です。しかし、Arduino はアナログ信号を出力できません。アナログアクチュエータが必要とするアナログ信号を近似するために、Arduino は PWM（パルス幅変調）を採用しています。すべての Grove ポートがアナログ出力として使用できるわけではありません。使用可能なポートは D3、D5、D6、D9、D10、D11 です。以下は、ポテンショメータを使用してサーボの位置を制御する方法の例です。
```
<pre>#include <Servo.h>
Servo groveServo; // オブジェクトを作成

int potentiometer = 0;
int shaft;

void setup()
{
    groveServo.attach(3); // サーボは D3 に接続
    pinMode(potentiometer, INPUT);
}

void loop()
{
    shaft = analogRead(potentiometer);
    shaft = map(shaft, 0, 1023, 0, 179);
    // アナログ入力データの範囲は 1~1023 ですが、サーボ
    groveServo.write(shaft);             // は 1~179 のデータにのみ反応します。
    delay(15);
}</pre>
```
**ヒント**

ギアボックスの内部には一連のギアがあります。サーボが動作しているときに、手で無理に方向を逆転させようとしないでください。これはギアに永久的な損傷を与える可能性があります。

## デモプロジェクト
---
### 1. 花のカップ

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/A_Cup_of_Flower.jpg)

**説明**

疲れた心を癒すために、花のカップはいかがですか？このプロジェクトは、Grove – LED と Grove – タッチセンサーで構成されています。センサーに触れると、かわいらしいLEDが暖かく心地よい光を放ちます。

**材料リスト**

<dl><dd>1. Arduino x 1;</dd><dd>2. Grove – ベースシールド x 1;</dd><dd>3. Grove – LED x 6;</dd><dd>4. Grove – タッチセンサー x 1;</dd><dd>5. 6 x 6cm の色紙 x 6;</dd><dd>6. 9Vバッテリー &amp; 9Vバッテリークリップ x 1.</dd></dl>

!!!注意
     LEDの数は任意です。基本キットには3つ含まれていますが、カップの容量に応じて増減できます。私は大きなカップを使用したので、ウェブサイトからさらに3つ追加しました。

**手順**

**1. つぼみを折る**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Fold_the_buds.jpg)

好きな花のパターンを選び、それに従っていくつか作成してください。Google検索を利用すると、多くの情報が見つかるでしょう。インターネット上には、折り紙の趣味やアートを共有したい人々がたくさんいます。

私はチューリップを選びましたが、ひまわり、バラ、ユリも素敵です！

つぼみを折る際には、Groveケーブルを通すために底に小さな穴を開けておく必要があります。

**2. セットアップ**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Set_up.jpg)

つぼみとタッチセンサーを10cmのGroveケーブルでGrove – ベースシールドに接続します。その後、コードをコントローラーにアップロードします。
```
<pre>void setup()
{
    pinMode(2, OUTPUT);
    pinMode(4, OUTPUT);
    pinMode(6, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(11, OUTPUT);
    pinMode(13, OUTPUT);
    pinMode(9, INPUT); // タッチセンサーのピン
}

void loop()
{
    int switchState = digitalRead(9);
    if(switchState == HIGH)
    {
        digitalWrite(2, HIGH);
        digitalWrite(4, HIGH);
        digitalWrite(6, HIGH);
        digitalWrite(7, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(13, HIGH);
    }
    else
    {
        digitalWrite(2, LOW);
        digitalWrite(4, LOW);
        digitalWrite(6, LOW);
        digitalWrite(7, LOW);
        digitalWrite(11, LOW);
        digitalWrite(13, LOW);
    }
    delay(100);
}</pre>
```
**3. 電源を入れて配置する**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Battery.jpg)

ポータブル9Vバッテリーを使用して花に電力を供給し、カップの中に配置します。完成です！花のカップをお楽しみください！

### 2. 元気ですか！

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/How_you_doing.jpg)

(think.bigchief.itからダウンロード)

**説明**

友達にどうやって挨拶しますか？Big Chiefなら「握手より良いものはない」と言うでしょう！これらのBig Chiefペーパートイの1つが他の1つに背中を寄せると、揺れて挨拶します！

**材料リスト**

<dl><dd>1. Arduino x 1;</dd><dd>2. Grove – ベースシールド x 1;</dd><dd>3. Grove – 磁気スイッチ x 1;</dd><dd>4. Grove – バイブレーター x 1;</dd><dd>5. ペーパートイ x 2;</dd><dd>6. 磁石 x 1;</dd><dd>7. 9Vバッテリー &amp; 9Vバッテリークリップ x 1.</dd></dl>

:::注意
    LEDの数は任意です。基本キットには3つ含まれていますが、カップの容量に応じて増減できます。私は大きなカップを使用したので、ウェブサイトからさらに3つ追加しました。
:::
**手順**

**1. 印刷する！**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Print_it_out.jpg)

インターネット上で好きなパターンを選びます。磁石や磁気スイッチ、バイブレーターを配置するための十分なスペースがあることを確認してください。上記の折り紙の花と同様に、インターネット上でたくさん見つけることができます。

**2. 内部を埋める**

ペーパートイを切る際は集中してください。それによってきれいな仕上がりが得られます。その後、内部を埋める作業に移ります。
私はBig Chief A（この名前にしましょう！）の背中に磁石を貼り付けました。両面テープで固定しました。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck1.jpg)

Big Chief Bには、背中の同じ位置に磁気スイッチを貼り付け、足元にバイブレーターを取り付けました。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck2.jpg)

**3. 接着する**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck3.jpg)

印刷されたシートの指示に従って慎重に作業します。GroveケーブルをBig Chief Bで使用する2つのGroveモジュールに接続します。これで上記のようなかわいいペーパートイが2つ完成します。

**4. プログラムをアップロードする**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck4.jpg)

以下のコードをArduinoにアップロードします。これにより、彼らに命を吹き込みます。

```
<pre>void setup()
{
    pinMode(11, INPUT);
    pinMode(9, OUTPUT);
}

void loop()
{
    int sensorState = digitalRead(11);
    if (sensorState == 1) digitalWrite(9, HIGH);
    else digitalWrite(9, LOW);
    delay(100);
}</pre>
```

## 関連プロジェクト

Grove - Starter Kit Plus を使用して素晴らしいプロジェクトを作りたい場合は、以下のプロジェクトを参考にしてください。

この部品は [geppetto](https://geppetto.seeedstudio.com/) で利用可能です。Seeed と Geppetto を使った簡単なモジュール式電子設計が可能です。今すぐ作成しましょう。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

### Intel Edison ライブ温度表示

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Intel_Edison_Live_Temperature_Display.jpg)

これは Intel Edison と Grove - Starter Kit Plus を使用して作成された IoT デモです。  
Intel は、開発者や技術者が簡単なキットを手に入れ、日常生活で使用できるアプリケーションを開発するための Intel IoT Developer Kit をリリースしています。

[<font color="#FF0000">**作ってみたい！**</font>](https://www.seeedstudio.com/recipe/94-intel-edison-live-temperature-display.html)

### あなたの素晴らしいプロジェクトを私たちと共有してください

作ることと共有することの精神を持って生まれた、それが私たちが信じる「メイカー」の本質です。

この精神があるからこそ、オープンソースコミュニティは今日のように繁栄しています。

あなたが何者であるか、何を作ったかは関係ありません。ハッカー、メイカー、アーティスト、エンジニアであろうと、

他の人とあなたの作品を共有し始める限り、

あなたはオープンソースコミュニティの一員となり、貢献をしているのです。

今すぐ [Recipe](https://www.seeedstudio.com/recipe/) であなたの素晴らしいプロジェクトを共有し、Seeed のコアユーザーになるチャンスをつかみましょう。

* コアユーザーとは、Seeed 製品に高い関心を持ち、重要な貢献をしている人々を指します。
* 私たちはコアユーザーと協力して新製品の開発を行います。つまり、コアユーザーは Seeed の新製品を公式発売前に体験する機会を得ることができ、その代わりに製品性能やユーザー体験を向上させるための貴重なフィードバックを期待しています。ほとんどの場合、コアユーザーが何か良いアイデアを持っている場合、私たちはハードウェア部品、PCBA サービス、技術サポートを提供します。さらに、コアユーザーとの商業的な協力が進む可能性も高いです。

<font color="#FF0000">コアユーザーに関する詳細情報は recipe@seeed.cc までメールでお問い合わせください。</font>

## 技術サポート & 製品ディスカッション

私たちの製品を選んでいただきありがとうございます！  
私たちは、製品の使用体験がスムーズになるように、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>