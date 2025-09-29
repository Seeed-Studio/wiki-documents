---
description: 再生と録音
title: 再生と録音
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Audio-Play-Record
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# オーディオ機能

この Wiki では、Wio Terminal を ReSpeaker 2-Mic Hats と組み合わせて使用する際のオーディオ設定方法を紹介します。

:::note
**ハードウェア接続**については、[**Audio Overview**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Audio-Overview/) をご覧ください。
:::

## SDカードからオーディオを再生する

この例では、ReSpeaker 2-Mic Hat を使用して MicroSD カードから音楽ファイルを再生します。

- Wio Terminal 用に MicroSD カードが必要です。

- 音楽ファイルを **`.wav`** 形式で保存し、MicroSD カードに保存してください。この例では、音楽ファイルを `SDTEST2.WAV` という名前にする必要があります。

- MicroSD カードを Wio Terminal に挿入し、以下のコードを Wio Terminal にアップロードします。

- ReSpeaker 2-Mic が Wio Terminal に正しく接続されていることを確認し、**スピーカーが ReSpeaker 2-Mic の JST2.0 スピーカーピンに接続されている**ことを確認してください。

この例は [github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_1_03_Playing_Music/Part_1_03_Playing_Music.ino) ページでも確認できます。

:::note
`wm8960.volume(0.7)` を設定してスピーカーの音量を調整できます！さらに、`wm8960.outputSelect(HEADPHONE)` をコメント解除すると、オーディオジャックを出力として使用できます！
:::

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

AudioPlaySdWav           playSdWav1;
AudioOutputI2S           i2s1;
AudioConnection          patchCord1(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord2(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;

void setup() {
  Serial.begin(9600);
  AudioMemory(8);
  while (!Serial) {};
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("カードのマウントに失敗しました");
      return;
  }
  delay(1000);
}

void loop() {
  if (playSdWav1.isPlaying() == false) {
    Serial.println("再生を開始します");
    playSdWav1.play("SDTEST2.WAV");
    delay(10); // ライブラリが WAV 情報を解析するのを待つ
  }
  // 再生中は何もしない...
}
```

## 音声の録音と再生

この例では、ReSpeaker 2-Mic Hat のマイクを使用して音声を録音し、MicroSD カードに生データとして保存し、スピーカーを通じて再生します。

- Wio Terminal 用に MicroSD カードが必要です。

- コードを Wio Terminal にアップロードします。

- Wio Terminal の上部にある **右ボタン** (`WIO_KEY_A`) を押すと録音が開始されます。ReSpeaker 2-Mic Hat のマイクに向かって話してください。録音は `RECORD.WAV` として MicroSD カードに保存されます。

:::note
録音中に他の2つのボタンのいずれかを押すと録音が停止します。
:::

- Wio Terminal の上部にある **左ボタン** (`WIO_KEY_C`) を押すと、録音した `RECORD.WAV` を再生します。

- Wio Terminal の上部にある **中央ボタン** (`WIO_KEY_B`) を押すと、録音の再生が停止します。

この例は [github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Recorder/Recorder.ino) ページでも確認できます。

```cpp
// 音声を生データとしてSDカードに録音し、再生します。
#include <Bounce.h>
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: 自動生成コードの開始
AudioInputI2S            i2s2;           //xy=105,63
AudioAnalyzePeak         peak1;          //xy=278,108
AudioRecordQueue         queue1;         //xy=281,63
AudioPlaySdRaw           playRaw1;       //xy=302,157
AudioOutputI2S           i2s1;           //xy=470,120
AudioConnection          patchCord1(i2s2, 0, queue1, 0);
AudioConnection          patchCord2(i2s2, 0, peak1, 0);
AudioConnection          patchCord3(playRaw1, 0, i2s1, 0);
AudioConnection          patchCord4(playRaw1, 0, i2s1, 1);

AudioControlWM8960 wm8960;

// GUItool: 自動生成コードの終了
Bounce buttonRecord = Bounce(WIO_KEY_A, 8);
Bounce buttonStop =   Bounce(WIO_KEY_B, 8);  // 8 = 8 ms デバウンス時間
Bounce buttonPlay =   Bounce(WIO_KEY_C, 8);

// オーディオシールドで使用する入力
const int myInput = AUDIO_INPUT_MIC;

// 実行中のモードを記憶
int mode = 0;  // 0=停止, 1=録音中, 2=再生中

// データを録音するファイル
File frec;

void setup() {
  Serial.begin(9600);
  // プッシュボタンピンを設定
  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_B, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);

  // オーディオ接続にはメモリが必要で、録音キューは
  // このメモリを使用して受信オーディオをバッファリングします。
  AudioMemory(60);

  // オーディオシールドを有効化し、入力を選択し、出力を有効化
  wm8960.enable();
  wm8960.inputSelect(myInput);
  wm8960.volume(1);

  // SDカードを初期化
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("カードのマウントに失敗しました");
      return;
  }
}

void loop() {
  // まず、ボタンを読み取る
  buttonRecord.update();
  buttonStop.update();
  buttonPlay.update();

  // ボタン押下に応答
  if (buttonRecord.fallingEdge()) {
    Serial.println("録音ボタンが押されました");
    if (mode == 2) stopPlaying();
    if (mode == 0) startRecording();
  }
  if (buttonStop.fallingEdge()) {
    Serial.println("停止ボタンが押されました");
    if (mode == 1) stopRecording();
    if (mode == 2) stopPlaying();
  }
  if (buttonPlay.fallingEdge()) {
    Serial.println("再生ボタンが押されました");
    if (mode == 1) stopRecording();
    if (mode == 0) startPlaying();
  }

  // 再生または録音中の場合、続行...
  if (mode == 1) {
    continueRecording();
  }
  if (mode == 2) {
    continuePlaying();
  }

  // マイクを使用している場合、ゲインを継続的に調整
  if (myInput == AUDIO_INPUT_MIC) adjustMicLevel();
  
}

void startRecording() {
  Serial.println("録音開始");
  if (SD.exists("RECORD.RAW")) {
    // SDライブラリは新しいデータをファイルの末尾に書き込むため、
    // 新しい録音を開始するには、古いファイルを削除する必要があります。
    SD.remove("RECORD.RAW");
  }
  frec = SD.open("RECORD.RAW", FILE_WRITE);
  if (frec) {
    queue1.begin();
    mode = 1;
  }
}

void continueRecording() {
  if (queue1.available() >= 2) {
    byte buffer[512];
    // オーディオライブラリから2ブロックを取得し、
    // 512バイトのバッファにコピーします。
    memcpy(buffer, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    memcpy(buffer+256, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    // SDカードに512バイトすべてを書き込む
    elapsedMicros usec = 0;
    frec.write(buffer, 512);
    // SD書き込み時間を確認するためにこれらの行をコメント解除してください。
    Serial.print("SD書き込み時間, us=");
    Serial.println(usec);
  }
}

void stopRecording() {
  Serial.println("録音停止");
  queue1.end();
  if (mode == 1) {
    while (queue1.available() > 0) {
      frec.write((byte*)queue1.readBuffer(), 256);
      queue1.freeBuffer();
    }
    frec.close();
  }
  mode = 0;
}

void startPlaying() {
  Serial.println("再生開始");
  playRaw1.play("RECORD.RAW");
  mode = 2;
}

void continuePlaying() {
  if (!playRaw1.isPlaying()) {
    playRaw1.stop();
    mode = 0;
  }
}

void stopPlaying() {
  Serial.println("再生停止");
  if (mode == 2) playRaw1.stop();
  mode = 0;
}

void adjustMicLevel() {
  // TODO: peak1オブジェクトを読み取り、sgtl5000_1.micGain()を調整します。
  // これが動作する場合、ぜひgithubプルリクエストを送信してください :-)
}
```

## ピーク検出

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detect.gif"/></div>

この例では、MicroSDカードから音楽ファイルを再生し、両チャンネルのピーク値を検出してシリアルモニターに表示します。

- 上記の「SDカードからオーディオを再生する」と同じ設定を使用します。

- コードをアップロードすると、音楽がスピーカーで再生される間、シリアルモニターに両チャンネルのピーク値が表示されるはずです。

```cpp
#include <Audio.h>
#include <Wire.h>
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioPlaySdWav           playSdWav1;     //xy=422,359
AudioAnalyzePeak         peak1;          //xy=611,306
AudioAnalyzePeak         peak2;          //xy=612,396
AudioOutputI2S           i2s1;           //xy=792,365
AudioConnection          patchCord1(playSdWav1, 0, peak1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord3(playSdWav1, 1, peak2, 0);
AudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;
// GUItool: end automatically generated code

void setup() {
  Serial.begin(9600);
  AudioMemory(10);
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("カードのマウントに失敗しました");
      return;
  }
  delay(1000);
}

// 最適な効果を得るために、ターミナル/モニターの幅を最低62文字以上、高さを可能な限り広くしてください。
elapsedMillis msecs;

void loop() {
  if (playSdWav1.isPlaying() == false) {
    Serial.println("再生開始");
    //playSdWav1.play("SDTEST1.WAV");
    playSdWav1.play("SDTEST2.WAV");
    //playSdWav1.play("SDTEST3.WAV");
    //playSdWav1.play("SDTEST4.WAV");
    delay(10); // ライブラリがWAV情報を解析するのを待つ
  }
  
  if (msecs > 40) {
    if (peak1.available() && peak2.available()) {
      msecs = 0;
      float leftNumber = peak1.read();
      float rightNumber = peak2.read();
      int leftPeak = leftNumber * 30.0;
      int rightPeak = rightNumber * 30.0;
      int count;
      for (count=0; count < 30-leftPeak; count++) {
        Serial.print(" ");
      }
      while (count++ < 30) {
        Serial.print("<");
      }
      Serial.print("||");
      for (count=0; count < rightPeak; count++) {
        Serial.print(">");
      }
      while (count++ < 30) {
        Serial.print(" ");
      }
      Serial.print(leftNumber);
      Serial.print(", ");
      Serial.print(rightNumber);
      Serial.println();
    }
  }
}
```

## LCDディスプレイでオーディオを再生する

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio.mp4" type="video/mp4" />
  </video></div>

この例では、MicroSDカードから音楽ファイルを再生し、両チャンネルのピーク値をWio Terminalの画面に表示します。

- 上記の「SDカードからオーディオを再生する」と同じ設定を使用します。

- コードをアップロードすると、音楽がスピーカーで再生される間、画面に両チャンネルのピーク値が表示されるはずです。

**注意:** この例ではオーディオライブラリとLCDグラフィックスを使用しているため、負荷が大きくなります。この例では**SAMD51をオーバークロック**することを推奨します。Arduino IDEで、**ツール** -> **CPU速度** -> **200MHz**を選択してください。これにより、グラフィックスのパフォーマンスが向上します。

この例は[github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_3_03_TFT_Display/Part_3_03_TFT_Display.ino)ページでも確認できます。

```cpp
#include <TFT_eSPI.h> // ハードウェア固有のライブラリ
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioPlaySdWav           playSdWav1;     //xy=512,375
AudioAnalyzePeak         peak2;          //xy=787,543
AudioAnalyzePeak         peak1;          //xy=790,488
AudioOutputI2S           i2s1;           //xy=827,334
AudioConnection          patchCord1(playSdWav1, 0, peak1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord3(playSdWav1, 1, peak2, 0);
AudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;

// GUItool: end automatically generated code
TFT_eSPI tft_e = TFT_eSPI();
TFT_eSprite tft = TFT_eSprite(&tft_e);

void setup() {
  Serial.begin(9600);
  delay(500);

  tft_e.begin();
  tft_e.fillScreen(ILI9341_BLACK);
  tft.createSprite(240, 320);
  tft.fillSprite(TFT_BLACK);
  tft.setTextColor(ILI9341_YELLOW);
  //tft.setTextSize(3);
  tft.setCursor(40, 8);
  tft.println("ピークメーター");
  
  AudioMemory(10);
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);

  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("カードのマウントに失敗しました");
      return;
  }
  delay(1000);
}

elapsedMillis msecs;

void loop() {
  if (playSdWav1.isPlaying() == false) {
    Serial.println("再生開始");
    playSdWav1.play("SDTEST2.WAV");
    delay(10); // ライブラリがWAV情報を解析するのを待つ
  }
  
  if (msecs > 15) {
    if (peak1.available() && peak2.available()) {
      msecs = 0;
      float leftNumber = peak1.read();
      float rightNumber = peak2.read();
      Serial.print(leftNumber);
      Serial.print(", ");
      Serial.print(rightNumber);
      Serial.println();

      // 垂直バーを描画
      int height = leftNumber * 240;
      tft.fillRect(60, 280 - height, 40, height, ILI9341_GREEN);
      tft.fillRect(60, 280 - 240, 40, 240 - height, ILI9341_BLACK);
      height = rightNumber * 240;
      tft.fillRect(140, 280 - height, 40, height, ILI9341_GREEN);
      tft.fillRect(140, 280 - 240, 40, 240 - height, ILI9341_BLACK);
      // よりスマートなアプローチは変更された部分のみを再描画することです...

      // 各バーの下に数値を描画
      tft.fillRect(60, 284, 40, 16, ILI9341_BLACK);
      tft.setCursor(67, 284);
      tft.print(leftNumber);
      tft.fillRect(140, 284, 40, 16, ILI9341_BLACK);
      tft.setCursor(147, 284);
      tft.print(rightNumber);
      tft.pushSprite(0, 0);
    }
  }
}
```

## サンプルデモ

### オーディオスペクトラムビジュアライザー

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/Audio-Spectrum.mp4" type="video/mp4" />
  </video></div>

これは、オーディオライブラリのFFT機能を使用してオーディオスペクトラムを計算および視覚化する例です。

#### 特徴

- 音楽のオーディオスペクトラム

- ボタンを押して音量を増減

#### 完全なコード

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include <TFT_eSPI.h> // ハードウェア固有のライブラリ
#include <Bounce.h>

// 表示サイズと使用する色
const unsigned int matrix_width = 19;
const unsigned int matrix_height = 12;

// 垂直しきい値を調整するためのパラメータ
const float maxLevel = 0.5;      // 1.0 = 最大値、低いほど「感度が高い」
const float dynamicRange = 10.0; // 表示する範囲の合計（デシベル単位）
const float linearBlend = 0.4;   // 有効範囲は0から0.7

// GUItool: 自動生成コード開始
AudioPlaySdWav           playSdWav1;     //xy=260,184
AudioMixer4              mixer1;         //xy=505,238
AudioOutputI2S           i2s2;           //xy=701,139
AudioAnalyzeFFT1024      fft1024_1;      //xy=761,235
AudioConnection          patchCord1(playSdWav1, 0, mixer1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s2, 0);
AudioConnection          patchCord3(playSdWav1, 1, mixer1, 1);
AudioConnection          patchCord4(playSdWav1, 1, i2s2, 1);
AudioConnection          patchCord5(mixer1, fft1024_1);
AudioControlWM8960 wm8960;
// GUItool: 自動生成コード終了

const int lowerFFTBins[] = {0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 32, 38, 45, 53, 63, 74, 87, 102, 119, 138, 160, 186, 216, 250, 289, 334, 385, 444};
const int upperFFTBins[] = {0, 1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 21, 26, 31, 37, 44, 52, 62, 73, 86, 101, 118, 137, 159, 185, 215, 249, 288, 333, 384, 443, 511};
float thresholdVertical[matrix_height];
float thresholdVert[matrix_height];

float level;
unsigned int x, y;
const uint8_t gridSize = 10;
float val = 0.7;

Bounce buttonUp = Bounce(WIO_KEY_A, 8);
Bounce buttonDown =   Bounce(WIO_KEY_C, 8);

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  Serial.begin(115200);
//  while (!Serial);

  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);

  tft.begin();
  tft.fillScreen(TFT_BLACK);
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.drawString("Audio Spectrum Visualiser", 10, 10);

  AudioMemory(20);
  computeVerticalLevels();

  for (int i = 0; i < 8; i++) {
    Serial.print("thresholdVertical ");
    Serial.print(i);
    Serial.print(" = ");
    Serial.println(thresholdVertical[i]);
  }
  for (unsigned int j = 0; j < matrix_height; j++) {
    thresholdVert[j] = thresholdVertical[matrix_height - j - 1];
  }
  wm8960.enable();
//  wm8960.outputSelect(HEADPHONE);
  wm8960.volume(val);
  while (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI, 16000000UL)) {
    Serial.println("Card Mount Failed");
    return;
  }
  playSdWav1.play("SDTEST2.WAV");
  delay(20);
  
  fft1024_1.windowFunction(AudioWindowHanning1024);
  
  spr.createSprite(180, 320);
  spr.fillSprite(TFT_BLACK);
  tft.setRotation(2);
}

void loop() {
    buttonUp.update();
    buttonDown.update();
    if (buttonUp.fallingEdge() && val < 1.0) {
        val += 0.1;
    }
    if(buttonDown.fallingEdge() && val >= 0.1) {
        val -= 0.1;
    }
    wm8960.volume(val);
  
    if (fft1024_1.available()) {
        colorRainbow();
        spr.pushSprite(0, 10);
    }
}

void colorRainbow() {
  for (x = 0; x < matrix_width; x++) {
    level = fft1024_1.read(lowerFFTBins[x], upperFFTBins[x]);
    for (y = 0; y < 12; y++) {
      if (level >= thresholdVert[y]) {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, Wheel(y * 24));
        // Serial.println(xy(x, y));
      }
      else {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, TFT_BLACK);
      }
    }
  }
}

// 0から255の値を入力して色値を取得します。
// 色はr - g - b - rに戻る遷移です。
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if (WheelPos < 85) {
    return color2color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else if (WheelPos < 170) {
    WheelPos -= 85;
    return color2color(0, WheelPos * 3, 255 - WheelPos * 3);
  } else {
    WheelPos -= 170;
    return color2color(WheelPos * 3, 255 - WheelPos * 3, 0);
  }
}

uint32_t color2color(uint8_t r, uint8_t g, uint8_t b) {
  return ((uint32_t)r << 16) | ((uint32_t)g <<  8) | b;
}

unsigned int xy(unsigned int x, unsigned int y) {
  return x * 8;
}

void computeVerticalLevels() {
  unsigned int y;
  float n, logLevel, linearLevel;

  for (y = 0; y < matrix_height; y++) {
    n = (float)y / (float)(matrix_height - 1);
    logLevel = pow(n * -1.0 * (dynamicRange / 20.0), 10);
    linearLevel = 1.0 - n;
    linearLevel = linearLevel * linearBlend;
    logLevel = logLevel * (1.0 - linearBlend);
    thresholdVertical[y] = (logLevel + linearLevel) * maxLevel;
  }
}
```

### マイクスペクトラムビジュアライザー

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/mic-spec.mp4" type="video/mp4" />
  </video></div>

これは、ReSpeaker 2-Mic HatsのマイクとFFT計算を使用した例です。

#### 特徴

- マイクのオーディオスペクトラム

#### 完全なコード

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include <TFT_eSPI.h> // ハードウェア固有のライブラリ

// 表示サイズと使用する色
const unsigned int matrix_width = 19;
const unsigned int matrix_height = 12;

// 垂直しきい値を調整するためのパラメータ
const float maxLevel = 0.6;      // 1.0 = 最大値、低いほど「感度が高い」
const float dynamicRange = 10.0; // 表示する範囲の合計（デシベル単位）
const float linearBlend = 0.6;   // 有効範囲は0から0.7

// GUItool: 自動生成コード開始
AudioInputI2S            i2s1;           //xy=376,203
AudioMixer4              mixer1;         //xy=608,235
AudioAnalyzeFFT1024      fft1024_1;      //xy=770,200
AudioConnection          patchCord1(i2s1, 0, mixer1, 0);
AudioConnection          patchCord2(i2s1, 1, mixer1, 1);
AudioConnection          patchCord3(mixer1, fft1024_1);
AudioControlWM8960 wm8960;
// GUItool: 自動生成コード終了

const int lowerFFTBins[] = {0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 32, 38, 45, 53, 63, 74, 87, 102, 119, 138, 160, 186, 216, 250, 289, 334, 385, 444};
const int upperFFTBins[] = {0, 1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 21, 26, 31, 37, 44, 52, 62, 73, 86, 101, 118, 137, 159, 185, 215, 249, 288, 333, 384, 443, 511};
float thresholdVertical[matrix_height];
float thresholdVert[matrix_height];

float level;
unsigned int x, y;
const uint8_t gridSize = 10;

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  Serial.begin(115200);
  //  while (!Serial);

  tft.begin();
  tft.fillScreen(TFT_BLACK);
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.drawString("Mic Spectrum Visualiser", 20, 10);

  AudioMemory(20);
  computeVerticalLevels();

  for (int i = 0; i < 8; i++) {
    Serial.print("thresholdVertical ");
    Serial.print(i);
    Serial.print(" = ");
    Serial.println(thresholdVertical[i]);
  }
  for (unsigned int j = 0; j < matrix_height; j++) {
    thresholdVert[j] = thresholdVertical[matrix_height - j - 1];
  }
  wm8960.enable();
  while (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI, 16000000UL)) {
    Serial.println("Card Mount Failed");
    return;
  }
  delay(20);

  fft1024_1.windowFunction(AudioWindowHanning1024);

  spr.createSprite(180, 320);
  spr.fillSprite(TFT_BLACK);
  tft.setRotation(2);
}

void loop() {
  if (fft1024_1.available()) {
    colorRainbow();
    spr.pushSprite(0, 10);
  }
}

void colorRainbow() {
  for (x = 0; x < matrix_width; x++) {
    level = fft1024_1.read(lowerFFTBins[x], upperFFTBins[x]);
    for (y = 0; y < 12; y++) {
      if (level >= thresholdVert[y]) {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, Wheel(y * 24));
        // Serial.println(xy(x, y));
      }
      else {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, TFT_BLACK);
      }
    }
  }
}

// 0から255の値を入力して色値を取得します。
// 色はr - g - b - rに戻る遷移です。
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if (WheelPos < 85) {
    return color2color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else if (WheelPos < 170) {
    WheelPos -= 85;
    return color2color(0, WheelPos * 3, 255 - WheelPos * 3);
  } else {
    WheelPos -= 170;
    return color2color(WheelPos * 3, 255 - WheelPos * 3, 0);
  }
}

uint32_t color2color(uint8_t r, uint8_t g, uint8_t b) {
  return ((uint32_t)r << 16) | ((uint32_t)g <<  8) | b;
}

unsigned int xy(unsigned int x, unsigned int y) {
  return x * 8;
}

void computeVerticalLevels() {
  unsigned int y;
  float n, logLevel, linearLevel;

  for (y = 0; y < matrix_height; y++) {
    n = (float)y / (float)(matrix_height - 1);
    logLevel = pow(n * -1.0 * (dynamicRange / 20.0), 10);
    linearLevel = 1.0 - n;
    linearLevel = linearLevel * linearBlend;
    logLevel = logLevel * (1.0 - linearBlend);
    thresholdVertical[y] = (logLevel + linearLevel) * maxLevel;
  }
}
```

### リアルタイムでの録音と再生

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play.mp4" type="video/mp4" />
  </video></div>

これはリアルタイムで録音と再生を行う例です。

#### 特徴

- リアルタイムでの録音と再生

#### 完全なコード

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: 自動生成されたコードの開始
AudioInputI2S            i2s1;           //xy=274,186
AudioRecordQueue         queue1;         //xy=550,172
AudioPlayQueue           queue2;         //xy=550,220
AudioOutputI2S           i2s2;           //xy=769,208
AudioConnection          patchCord1(i2s1, 0, queue1, 0);
AudioConnection          patchCord2(queue2, 0, i2s2, 0);
AudioConnection          patchCord3(queue2, 0, i2s2, 1);
AudioControlWM8960 wm8960;
// GUItool: 自動生成されたコードの終了

const int myInput = AUDIO_INPUT_MIC;

void setup() {
  Serial.begin(9600);
//  while (!Serial);
  AudioMemory(20);
  wm8960.enable();
  wm8960.inputSelect(myInput);
  wm8960.volume(0.9);
  //  wm8960.outputSelect(HEADPHONE);
  queue1.begin();
}

void loop() {
  if (queue1.available() >= 2)
  {
    // 録音バッファ
    byte buffer[256];
    memcpy(buffer, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    // 再生バッファ
    queue2.getBuffer();
    queue2.playBuffer();
  }
}
```