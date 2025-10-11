---
description: Grove - RGB LEDリング (20 - WS2813 Mini)
title: Grove - RGB LEDリング (20 - WS2813 Mini)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-LED_ring
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - RGB LEDリング (20 - WS2813 Mini) は、[WS2813デジタルRGB LEDリング](https://www.seeedstudio.com/WS2813-Digital-RGB-LED-Ring-p-2871.html) のミニバージョンです。このRGB LEDリングは、LED内部にマイクロコントローラーを組み込んだ3535サイズのLEDです。WS2813は、ドライバーチップがLED内部にあるため、各LEDがアドレス指定可能です。  
各LEDは一定電流駆動を持っているため、電圧が変化しても色が非常に安定しています。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/zQj8RRJcZsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Min-p-3227.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Min-p-3227.html)

## 特徴

- 制御回路とRGBチップが3535コンポーネントに統合され、外部制御ピクセルを形成。
- インテリジェントな逆接続保護。
- 内蔵信号整形回路。
- 256階調と1677万色のフルカラーディスプレイ。
- シリアルカスケードインターフェース、データ受信とデコードは1本の信号線で実現。
- 最大800Kbpsのデータ伝送速度。
- デュアル信号線バージョン、信号断点連続伝送。

### 信号断点連続伝送

<!-- ![](https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg" alt="pir" width={600} height="auto" /></p>

隣接する2つ以上のLEDが壊れていない限り、残りのLEDは正常に動作します。

## 仕様

|項目|値|
|---|---|
|電源|3.3V/5V|
|静止電流|0.7mA/LED|
|RGBチャンネル定電流|16mA/LED|
|リフレッシュ周波数|2KHz|
|リセット時間|>280μs|
|動作温度|-25～85℃|
|保存温度|-40～105℃|

## 典型的な用途

- ガードレールチューブシリーズ、点光源ディスプレイシリーズ、柔軟/硬質ストリップシリーズ、モジュールシリーズのアプリケーション。
- 照明ステージ衣装、革新的なガジェット、またはその他の電子製品。

## ハードウェア概要

### ピンアウト

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/pinout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

### ハードウェア詳細

___
**WS2813B-Mini**

WS2813-Miniは、制御回路とRGBチップが3535コンポーネントのパッケージに統合されたインテリジェント制御LED光源です。その内部には、インテリジェントデジタルポートデータラッチと信号整形増幅駆動回路が含まれています。また、精密な内部オシレーターと12V電圧プログラム可能な定電流制御部分も含まれており、一貫性の高い色効果を実現します。

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    	上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

| Seeeduino V4.2 | Base Shield| Grove - RGB LED Ring| Grove - Button|
|--------------|-------------|-----------------|---------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg" alt="pir" width={600} height="auto" /></p>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Min-p-3227.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Button-p-766.html)


:::note
    	**1.** USBケーブルを優しく差し込んでください。そうしないとポートが破損する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。
    
    	**2.** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::


- **ステップ 1.** Grove - ButtonをGrove - Base ShieldのポートD2に接続します。

- **ステップ 2.** Grove - RGB LED RingをGrove - Base ShieldのポートD6に接続します。

- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。

:::caution
 		**1.** Arduino UNOを使用している場合、最大Vcc電圧のリップルが100mVを超えないようにするためにDC電源を接続することを推奨します。

 		**2.** Seeeduino V4.2を使用している場合、DC電源を接続する必要はありません。ただし、Groveに3V3を供給するように変更すると、電源オン時にマザーボードが再起動します。これは使用には影響しませんのでご注意ください。
:::

- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/with_ard.jpg" alt="pir" width={600} height="auto" /></p>



:::warning
    	ホットスワップはサポートされていません。交換や変更を行う前にArduinoを電源から切断することをお勧めします。
:::

次に、コード「buttoncycler」を実行する方法を説明します。これは、追加の入力デバイス（ボタン）を使用してLEDリングの変更をトリガーするデモンストレーションです。他のプログラムを実行する場合も同様の手順ですが、使用しない場合はBase ShieldのポートD2からボタンを取り外す必要があります。


#### ソフトウェア

:::note
		Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::
- **ステップ 1.** [Grove-RGB_LED_Ring-20-WS2813Mini](https://github.com/Seeed-Studio/Seeed_LED_Ring.git)ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開きます。以下の3つの方法で開くことができます：
    1. Arduino IDEで直接開きます。パスは次の通りです：**File --> Examples --> Adafruit NeoPixel --> buttoncycler**。
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/ard1.jpg" alt="pir" width={600} height="auto" /></p>

2. コンピュータで開くには、**XXXX\Arduino\libraries\Seeed_LED_Ring\examples\⁨buttoncycler⁩\⁨buttoncycler⁩.ino** フォルダ内にある **basic_demo.ino** をクリックしてください。**XXXX** は Arduino IDE をインストールした場所です。  
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/ard2.jpg) -->
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/ard2.jpg" alt="pir" width={600} height="auto" /></p>

3. または、コードブロックの右上にあるアイコンをクリックして  
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>
    以下のコードをコピーし、Arduino IDE の新しいスケッチに貼り付けることもできます。

:::note
現在の制限により、プログラム内で LED の明るさが制限されています。明るさの制限を調整したい場合は、`setBrightness()` 関数を変更することができます。ただし、これによりライトが正常に動作しなくなる可能性があります。
:::

#### buttoncycler
このコードを実行すると、ボタンを押すたびに新しいピクセルアニメーションに切り替わります。最初のアニメーションを開始するには、ボタンを一度押す必要があることに注意してください！

```cpp

#include "Adafruit_NeoPixel.h"

#define BUTTON_PIN   2    // ボタンに接続されたデジタル IO ピン。
                          // プルアップ抵抗で駆動されるため、スイッチは一時的にピンをグラウンドに引き下げます。
                          // 高 -> 低 の遷移でボタン押下ロジックが実行されます。

#define PIXEL_PIN    6    // NeoPixels に接続されたデジタル IO ピン。

#define PIXEL_COUNT 20

// パラメータ 1 = ストリップ内のピクセル数、neopixel stick は 8
// パラメータ 2 = ピン番号（ほとんどが有効）
// パラメータ 3 = ピクセルタイプフラグ、必要に応じて加算:
//   NEO_RGB     ピクセルが RGB ビットストリーム用に配線されている
//   NEO_GRB     ピクセルが GRB ビットストリーム用に配線されている（neopixel stick に適している）
//   NEO_KHZ400  400 KHz ビットストリーム（例: FLORA ピクセル）
//   NEO_KHZ800  800 KHz ビットストリーム（例: 高密度 LED ストリップ）、neopixel stick に適している
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

bool oldState = HIGH;
int showType = 0;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  strip.setBrightness(255);
  strip.begin();
  strip.show(); // すべてのピクセルを「オフ」に初期化
}

void loop() {
  // 現在のボタン状態を取得
  bool newState = digitalRead(BUTTON_PIN);

  // 状態が高から低（ボタン押下）に変化したか確認
  if (newState == LOW && oldState == HIGH) {
    // ボタンのデバウンスのための短い遅延
    delay(20);
    // デバウンス後にボタンがまだ低いか確認
    newState = digitalRead(BUTTON_PIN);
    if (newState == LOW) {
      showType++;
      if (showType > 9)
        showType=0;
      startShow(showType);
    }
  }

  // 最後のボタン状態を古い状態に設定
  oldState = newState;
}

void startShow(int i) {
  switch(i){
    case 0: colorWipe(strip.Color(0, 0, 0), 50);    // 黒/オフ
            break;
    case 1: colorWipe(strip.Color(255, 0, 0), 50);  // 赤
            break;
    case 2: colorWipe(strip.Color(0, 255, 0), 50);  // 緑
            break;
    case 3: colorWipe(strip.Color(0, 0, 255), 50);  // 青
            break;
    case 4: theaterChase(strip.Color(127, 127, 127), 50); // 白
            break;
    case 5: theaterChase(strip.Color(127,   0,   0), 50); // 赤
            break;
    case 6: theaterChase(strip.Color(  0,   0, 127), 50); // 青
            break;
    case 7: rainbow(20);
            break;
    case 8: rainbowCycle(20);
            break;
    case 9: theaterChaseRainbow(50);
            break;
  }
}

// 色を一つずつ塗りつぶす
void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(wait);
  }
}

void rainbow(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256; j++) {
    for(i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel((i+j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// わずかに異なる方法で、虹を均等に分布させる
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256*5; j++) { // ホイール上のすべての色を 5 サイクル
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// 劇場風のクロールライト
void theaterChase(uint32_t c, uint8_t wait) {
  for (int j=0; j<10; j++) {  // 10 サイクルの追跡
    for (int q=0; q < 3; q++) {
      for (int i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, c);    // 3 番目ごとのピクセルをオンにする
      }
      strip.show();

      delay(wait);

      for (int i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, 0);        // 3 番目ごとのピクセルをオフにする
      }
    }
  }
}

// 虹効果付きの劇場風クロールライト
void theaterChaseRainbow(uint8_t wait) {
  for (int j=0; j < 256; j++) {     // ホイール上の 256 色すべてをサイクル
    for (int q=0; q < 3; q++) {
      for (int i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, Wheel( (i+j) % 255));    // 3 番目ごとのピクセルをオンにする
      }
      strip.show();

      delay(wait);

      for (int i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, 0);        // 3 番目ごとのピクセルをオフにする
      }
    }
  }
}

// 0 から 255 の値を入力して色を取得
// 色は r - g - b - r に戻る遷移
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

```

!!! 注意 
		ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合があるため、最初の 2 つの方法を使用することをお勧めします。

:::success
		すべてが正常に動作すれば、LEDリングの最初のアニメーションが表示され、ボタンを押すと新しいアニメーションをトリガーできるようになります。
:::

**その他の例:**

**RGBWストランドテスト**

```cpp

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

#define PIN 6

#define NUM_LEDS 20

#define BRIGHTNESS 255

Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUM_LEDS, PIN, NEO_GRBW + NEO_KHZ800);

byte neopix_gamma[] = {
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,
    1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  2,  2,  2,  2,  2,  2,
    2,  3,  3,  3,  3,  3,  3,  3,  4,  4,  4,  4,  4,  5,  5,  5,
    5,  6,  6,  6,  6,  7,  7,  7,  7,  8,  8,  8,  9,  9,  9, 10,
   10, 10, 11, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16,
   17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 24, 24, 25,
   25, 26, 27, 27, 28, 29, 29, 30, 31, 32, 32, 33, 34, 35, 35, 36,
   37, 38, 39, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50,
   51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68,
   69, 70, 72, 73, 74, 75, 77, 78, 79, 81, 82, 83, 85, 86, 87, 89,
   90, 92, 93, 95, 96, 98, 99,101,102,104,105,107,109,110,112,114,
  115,117,119,120,122,124,126,127,129,131,133,135,137,138,140,142,
  144,146,148,150,152,154,156,158,160,162,164,167,169,171,173,175,
  177,180,182,184,186,189,191,193,196,198,200,203,205,208,210,213,
  215,218,220,223,225,228,231,233,236,239,241,244,247,249,252,255 };


void setup() {
  // Trinket 5V 16MHz用のコードです。Trinketを使用していない場合は、以下の3行を削除してください。
  #if defined (__AVR_ATtiny85__)
    if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
  #endif
  // Trinket専用コード終了
  strip.setBrightness(BRIGHTNESS);
  strip.begin();
  strip.show(); // すべてのピクセルを「オフ」に初期化
}

void loop() {
  // ピクセルに表示する例の手順:
  colorWipe(strip.Color(255, 0, 0), 50); // 赤
  colorWipe(strip.Color(0, 255, 0), 50); // 緑
  colorWipe(strip.Color(0, 0, 255), 50); // 青
  colorWipe(strip.Color(0, 0, 0, 255), 50); // 白

  whiteOverRainbow(20,75,5);  

  pulseWhite(5); 

  // fullWhite();
  // delay(2000);

  rainbowFade2White(3,3,1);


}

// ドットを1つずつ指定した色で塗りつぶす
void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(wait);
  }
}

void pulseWhite(uint8_t wait) {
  for(int j = 0; j < 256 ; j++){
      for(uint16_t i=0; i < strip.numPixels(); i++) {
          strip.setPixelColor(i, strip.Color(0,0,0, neopix_gamma[j] ) );
        }
        delay(wait);
        strip.show();
      }

  for(int j = 255; j >= 0 ; j--){
      for(uint16_t i=0; i<strip.numPixels(); i++) {
          strip.setPixelColor(i, strip.Color(0,0,0, neopix_gamma[j] ) );
        }
        delay(wait);
        strip.show();
      }
}


void rainbowFade2White(uint8_t wait, int rainbowLoops, int whiteLoops) {
  float fadeMax = 100.0;
  int fadeVal = 0;
  uint32_t wheelVal;
  int redVal, greenVal, blueVal;

  for(int k = 0 ; k < rainbowLoops ; k ++){
    
    for(int j=0; j<256; j++) { // ホイール上のすべての色を5サイクル

      for(int i=0; i< strip.numPixels(); i++) {

        wheelVal = Wheel(((i * 256 / strip.numPixels()) + j) & 255);

        redVal = red(wheelVal) * float(fadeVal/fadeMax);
        greenVal = green(wheelVal) * float(fadeVal/fadeMax);
        blueVal = blue(wheelVal) * float(fadeVal/fadeMax);

        strip.setPixelColor( i, strip.Color( redVal, greenVal, blueVal ) );

      }

      // 最初のループではフェードイン
      if(k == 0 && fadeVal < fadeMax-1) {
          fadeVal++;
      }

      // 最後のループではフェードアウト
      else if(k == rainbowLoops - 1 && j > 255 - fadeMax ){
          fadeVal--;
      }

        strip.show();
        delay(wait);
    }
  
  }



  delay(500);


  for(int k = 0 ; k < whiteLoops ; k ++){

    for(int j = 0; j < 256 ; j++){

        for(uint16_t i=0; i < strip.numPixels(); i++) {
            strip.setPixelColor(i, strip.Color(0,0,0, neopix_gamma[j] ) );
          }
          strip.show();
        }

        delay(2000);
    for(int j = 255; j >= 0 ; j--){

        for(uint16_t i=0; i < strip.numPixels(); i++) {
            strip.setPixelColor(i, strip.Color(0,0,0, neopix_gamma[j] ) );
          }
          strip.show();
        }
  }

  delay(500);


}

void whiteOverRainbow(uint8_t wait, uint8_t whiteSpeed, uint8_t whiteLength ) {
  
  if(whiteLength >= strip.numPixels()) whiteLength = strip.numPixels() - 1;

  int head = whiteLength - 1;
  int tail = 0;

  int loops = 3;
  int loopNum = 0;

  static unsigned long lastTime = 0;


  while(true){
    for(int j=0; j<256; j++) {
      for(uint16_t i=0; i<strip.numPixels(); i++) {
        if((i >= tail && i <= head) || (tail > head && i >= tail) || (tail > head && i <= head) ){
          strip.setPixelColor(i, strip.Color(0,0,0, 255 ) );
        }
        else{
          strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
        }
        
      }

      if(millis() - lastTime > whiteSpeed) {
        head++;
        tail++;
        if(head == strip.numPixels()){
          loopNum++;
        }
        lastTime = millis();
      }

      if(loopNum == loops) return;
    
      head%=strip.numPixels();
      tail%=strip.numPixels();
        strip.show();
        delay(wait);
    }
  }
  
}
void fullWhite() {
  
    for(uint16_t i=0; i<strip.numPixels(); i++) {
        strip.setPixelColor(i, strip.Color(0,0,0, 255 ) );
    }
      strip.show();
}


// わずかに異なり、虹を均等に分布させる
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256 * 5; j++) { // ホイール上のすべての色を5サイクル
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

void rainbow(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256; j++) {
    for(i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel((i+j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// 0から255の値を入力して色を取得します。
// 色はr - g - b - rに戻る遷移です。
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3,0);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3,0);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0,0);
}

uint8_t red(uint32_t c) {
  return (c >> 16);
}
uint8_t green(uint32_t c) {
  return (c >> 8);
}
uint8_t blue(uint32_t c) {
  return (c);
}

```


**シンプル**

```cpp

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

// ArduinoのどのピンがNeoPixelに接続されていますか？
// TrinketまたはGemmaを使用する場合はこれを1に変更することをお勧めします
#define PIN            6

// Arduinoに接続されているNeoPixelの数は？
#define NUMPIXELS      20

// NeoPixelライブラリをセットアップする際に、ピクセル数と信号を送信するピンを指定します。
// 古いNeoPixelストリップの場合、3番目のパラメータを変更する必要があるかもしれません。
// 詳細はstrandtestの例を参照してください。
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

int delayval = 500; // 半秒の遅延

void setup() {
  // これはTrinket 5V 16MHz用です。Trinketを使用していない場合は、これらの3行を削除できます。
#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif
  // Trinket特別コードの終了
  pixels.setBrightness(255);
  pixels.begin(); // NeoPixelライブラリを初期化します。
}

void loop() {

  // NeoPixelのセットでは、最初のNeoPixelは0、2番目は1、ピクセル数-1まで続きます。

  for(int i=0;i<NUMPIXELS;i++){

    // pixels.ColorはRGB値を取り、0,0,0から255,255,255までの範囲です。
    pixels.setPixelColor(i, pixels.Color(0,150,0)); // 適度に明るい緑色。

    pixels.show(); // 更新されたピクセルカラーをハードウェアに送信します。

    delay(delayval); // 一定時間（ミリ秒単位）遅延します。

  }
}

```


**シンプルなNew演算子**

```cpp

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

// ArduinoのどのピンがNeoPixelに接続されていますか？
// TrinketまたはGemmaを使用する場合はこれを1に変更することをお勧めします
#define PIN            6

// Arduinoに接続されているNeoPixelの数
int numPixel = 20;

// カラー順序、詳細は https://github.com/adafruit/Adafruit_NeoPixel/blob/master/Adafruit_NeoPixel.h を参照してください
uint8_t colorOrder = 0x52; // または単にNEO_GBRを使用

// NeoPixel用の新しいポインタを定義
Adafruit_NeoPixel *pixels;


int delayval = 500; // 半秒の遅延

void setup() {
  // これはTrinket 5V 16MHz用です。Trinketを使用していない場合は、これらの3行を削除できます。
#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif
  // Trinket特別コードの終了
  
  // ここでnumPixelとcolorOrderをEEPROMなどから読み取るのが良いでしょう。
  // 新しい値でNeoPixelインスタンスを作成
  pixels = new Adafruit_NeoPixel(numPixel, PIN, colorOrder);
  pixels->setBrightness(255);
  pixels->begin(); // NeoPixelライブラリを初期化します。
}

void loop() {

  // NeoPixelのセットでは、最初のNeoPixelは0、2番目は1、ピクセル数-1まで続きます。

  for(int i=0;i<numPixel;i++){

    // pixels.ColorはRGB値を取り、0,0,0から255,255,255までの範囲です。
    pixels->setPixelColor(i, pixels->Color(0,150,0)); // 適度に明るい緑色。

    pixels->show(); // 更新されたピクセルカラーをハードウェアに送信します。

    delay(delayval); // 一定時間（ミリ秒単位）遅延します。

  }
}

```


**ストランドテスト**

```cpp

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

#define PIN 6

// パラメータ1 = ストリップ内のピクセル数
// パラメータ2 = Arduinoピン番号（ほとんどが有効）
// パラメータ3 = ピクセルタイプフラグ、必要に応じて加算:
//   NEO_KHZ800  800 KHzビットストリーム（WS2812 LEDを使用したほとんどのNeoPixel製品）
//   NEO_KHZ400  400 KHz（クラシック 'v1'（v2ではない）FLORAピクセル、WS2811ドライバ）
//   NEO_GRB     ピクセルはGRBビットストリーム用に配線されています（ほとんどのNeoPixel製品）
//   NEO_RGB     ピクセルはRGBビットストリーム用に配線されています（v1 FLORAピクセル、v2ではない）
//   NEO_RGBW    ピクセルはRGBWビットストリーム用に配線されています（NeoPixel RGBW製品）
Adafruit_NeoPixel strip = Adafruit_NeoPixel(20, PIN, NEO_GRB + NEO_KHZ800);

// 重要: NeoPixelの焼損リスクを減らすため、ピクセル電源リードに1000 uFコンデンサを追加し、
// 最初のピクセルのデータ入力に300〜500オームの抵抗を追加し、Arduinoと最初のピクセル間の距離を最小限に抑えます。
// ライブ回路に接続しないでください...接続する場合は、最初にGNDを接続してください。

void setup() {
  // これはTrinket 5V 16MHz用です。Trinketを使用していない場合は、これらの3行を削除できます。
  #if defined (__AVR_ATtiny85__)
    if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
  #endif
  // Trinket特別コードの終了

  strip.begin();
  strip.setBrightness(255);
  strip.show(); // すべてのピクセルを「オフ」に初期化
}

void loop() {
  // ピクセルに表示する方法を示すいくつかの例:
  colorWipe(strip.Color(255, 0, 0), 50); // 赤
  colorWipe(strip.Color(0, 255, 0), 50); // 緑
  colorWipe(strip.Color(0, 0, 255), 50); // 青
//colorWipe(strip.Color(0, 0, 0, 255), 50); // 白 RGBW
  // シアターピクセルチェイスを送信...
  theaterChase(strip.Color(127, 127, 127), 50); // 白
  theaterChase(strip.Color(127, 0, 0), 50); // 赤
  theaterChase(strip.Color(0, 0, 127), 50); // 青

  rainbow(20);
  rainbowCycle(20);
  theaterChaseRainbow(50);
}

// ドットを1つずつ色で埋める
void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(wait);
  }
}

void rainbow(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256; j++) {
    for(i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel((i+j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// わずかに異なり、虹が均等に分布するようにします
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256*5; j++) { // ホイール上のすべての色を5サイクル
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// シアタースタイルのクロールライト
void theaterChase(uint32_t c, uint8_t wait) {
  for (int j=0; j<10; j++) {  // 10サイクルのチェイスを実行
    for (int q=0; q < 3; q++) {
      for (uint16_t i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, c);    // 3番目ごとのピクセルをオンにする
      }
      strip.show();

      delay(wait);

      for (uint16_t i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, 0);        // 3番目ごとのピクセルをオフにする
      }
    }
  }
}

// 虹効果を伴うシアタースタイルのクロールライト
void theaterChaseRainbow(uint8_t wait) {
  for (int j=0; j < 256; j++) {     // ホイール上の256色すべてをサイクル
    for (int q=0; q < 3; q++) {
      for (uint16_t i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, Wheel( (i+j) % 255));    // 3番目ごとのピクセルをオンにする
      }
      strip.show();

      delay(wait);

      for (uint16_t i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, 0);        // 3番目ごとのピクセルをオフにする
      }
    }
  }
}

// 値0から255を入力して色の値を取得します。
// 色はr - g - b - rに戻る遷移です。
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}
```

## 回路図オンラインビューア


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/res/Grove%20-%20RGB%20LED%20Ring%20(20%20-%20WS2813%20Mini).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[Zip]** [Grove - RGB LED Ring(20 WS2813 Mini) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/res/Grove%20-%20RGB%20LED%20Ring%20(20%20-%20WS2813%20Mini).zip)

- **[Zip]** [Grove - RGB LED Ring(20 WS2813 Mini) ソフトウェアライブラリ](https://github.com/Seeed-Studio/Seeed_LED_Ring/archive/master.zip)

- **[PDF]** [データシート WS2813- Mini](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/res/WS2813-Mini.pdf)




## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
