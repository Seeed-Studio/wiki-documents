---
description: オーディオシステム設計ツール
title: オーディオシステム設計ツール
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Audio-GUI
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# オーディオシステム設計ツール

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/GUI.gif"/></div>

このWikiでは、[**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)と[**ReSpeaker 2-Mit Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)を使用して、オーディオライブラリ用のオーディオシステムを設計するための**オーディオシステム設計ツール**の使用方法を紹介します。このツールを使用すると、入力と出力がどこに向かっているかを視覚的に確認できるため、オーディオシステムの設計が非常に簡単になります。

> **これは、[Teensy Audio Library用オーディオシステム設計ツール](https://www.pjrc.com/teensy/gui/)のSeeedによるフォーク版です。**

## はじめに

- [**オーディオシステム設計ツール**](https://seeed-studio.github.io/Seeed_Arduino_Audio/)にアクセスしてください。このツールに関する詳細情報は、[teensy](https://www.pjrc.com/teensy/)もご覧ください。

- サイトにアクセスすると、左側の列に**オーディオライブラリの利用可能な機能**がすべて表示されます。

- 各クラスをクリックすると、そのクラス内で利用可能な関数とその使用方法を確認できます。

### オーディオシステムの設計

#### SDカードから音楽ファイルを再生する

オーディオ設計システムの基本を理解するために、例を使って説明します。例えば、ReSpeaker 2-Mic Hatを介してスピーカーからSDカードの曲を再生したい場合：

- **`INPUT`** はSDカードからの再生です。

- **`OUTPUT`** はI2S出力です。

- **`wm8960`** はReSpeaker 2-Micsの制御ユニットです。

設計は以下のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/simple-play.png"/></div>

- 上部の**Export**をクリックして、システムのマクロ定義をArduino IDEに貼り付けるためにエクスポートします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/pasting.png"/></div>

#### サンプルコード

以下のサンプルコードは、先ほど設計したシステムのマクロ定義を使用して、SDカードから音楽ファイルを再生します。

:::note
MicroSDカードに`SDTEST1.wav`、`SDTEST2.wav`、`SDTEST3.wav`、`SDTEST4.wav`という音楽ファイルがWio Terminalに入っていることを確認してください。
:::

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioPlaySdWav           playSdWav1;     //xy=376,277
AudioOutputI2S           i2s1;           //xy=611,277
AudioConnection          patchCord1(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord2(playSdWav1, 1, i2s1, 1);
AudioControlWM8960       wm8960_1;       //xy=496,363
// GUItool: end automatically generated code

void setup() {
  Serial.begin(9600);
  while(!Serial);

  // オーディオ接続にはメモリが必要です。詳細については、MemoryAndCpuUsageの例を参照してください。
  AudioMemory(8);

  wm8960_1.enable();
  wm8960_1.volume(0.7);

  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
    Serial.println("カードのマウントに失敗しました");
    return;
  }
}

void playFile(const char *filename)
{
  Serial.print("再生中のファイル: ");
  Serial.println(filename);
  // ファイルの再生を開始します。このスケッチはファイルが再生されている間も続行します。
  playSdWav1.play(filename);
  // ライブラリがWAV情報を読み取るための短い遅延
  delay(5);
  // ファイルの再生が終了するまで単純に待機します。
  while (playSdWav1.isPlaying()) {
  }
}

void loop() {
  playFile("SDTEST1.WAV");  // ファイル名は常に大文字の8.3形式です
  delay(500);
  playFile("SDTEST2.WAV");
  delay(500);
  playFile("SDTEST3.WAV");
  delay(500);
  playFile("SDTEST4.WAV");
  delay(1500);
}
```

### ピーク検出

次に、SDカードから音楽を再生しながらピーク検出を行うシステムを設計してみましょう。

- **`INPUT`** はSDカードからの再生です。

- **`OUTPUT`** はI2S出力と2つのピークです！1つは左チャンネル用、もう1つは右チャンネル用です。

- **`wm8960`** はReSpeaker 2-Micsの制御ユニットです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detection-gui.png"/></div>

#### サンプルコード

[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Audio-Play-Record/#peak-detection)をご確認ください。

### オーディオスペクトラムビジュアライザー

これは、SDカードから音楽を再生しながらFFTを実行して周波数データを取得し、オーディオスペクトラムビジュアライザーを実装する例です。

- **`INPUT`** はSDカードからの再生です。

- **`OUTPUT`** はI2S出力とFFT計算です。

- **`wm8960`** はReSpeaker 2-Micsの制御ユニットです。

ここでは、もう1つの便利な機能である**Mixer**を紹介します。これにより、最大**4つ**のオーディオチャンネルを1つにまとめることができます。FFTを実行する際にチャンネル（左と右）を組み合わせる方が、単一チャンネルよりも正確です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio-spc-gui.png"/></div>

#### サンプルコード

[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Audio-Play-Record/#audio-spectrum-visualizer)をご確認ください。

### リアルタイムで録音と再生

今回は、リアルタイムで録音と再生を行うシステムを設計してみましょう！

- **`INPUT`** はマイクからの録音です：**Input I2S** -> **RecordQueue**

- **`OUTPUT`** はI2S出力です：**PlayQueue** -> **Output I2S**

- **`wm8960`** はReSpeaker 2-Micsの制御ユニットです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play-realtime.png"/></div>

#### サンプルコード

[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Audio-Play-Record/#record-and-play-at-real-time)をご確認ください。