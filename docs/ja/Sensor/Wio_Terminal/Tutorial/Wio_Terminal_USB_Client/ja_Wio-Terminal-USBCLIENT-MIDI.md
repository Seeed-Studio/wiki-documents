---
description: MIDI
title: MIDI
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-USBCLIENT-MIDI
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal を USB MIDI デバイスとして使用する

このリポジトリでは、Wio Terminal を USB MIDI (Musical Instrument Digital Interface) デバイスとして使用する方法を紹介します。このデバイスを使用して楽器を制御することができます！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200110105918.gif"/></div>

## ライブラリのインストール

この例では、追加の Arduino MIDI ライブラリが必要です：

1. [Arduino MIDI Library](https://github.com/FortySevenEffects/arduino_midi_library) のリポジトリを訪問し、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、このライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_Arduino_LCD` ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 結果の取得

この例では、Wio Terminal を Macbook に接続し、macOS に付属している `Audio MIDI Setup` アプリを使用してテストします。また、`Arduino IDE` のシリアルモニタでシリアルデータを確認することもできます。MIDI デバイスが利用可能な場合は、より現実的なシナリオのためにそれを使用してください！

## 完全なコード

より多くの機能については、TinyUSB ライブラリを参照してください。

```cpp
#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <MIDI.h>

// USB MIDI オブジェクト
Adafruit_USBD_MIDI usb_midi;

// Arduino MIDI ライブラリの新しいインスタンスを作成し、usb_midi をトランスポートとしてアタッチします。
MIDI_CREATE_INSTANCE(Adafruit_USBD_MIDI, usb_midi, MIDI);

// シーケンス内の現在の位置を保持する変数
uint32_t position = 0;

// ノート値の配列として例のメロディを保存
byte note_sequence[] = {
  74,78,81,86,90,93,98,102,57,61,66,69,73,78,81,85,88,92,97,100,97,92,88,85,81,78,
  74,69,66,62,57,62,66,69,74,78,81,86,90,93,97,102,97,93,90,85,81,78,73,68,64,61,
  56,61,64,68,74,78,81,86,90,93,98,102
};

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  
  // MIDI を初期化し、すべての MIDI チャンネルをリッスン
  // これにより usb_midi の begin() も呼び出されます
  MIDI.begin(MIDI_CHANNEL_OMNI);

  // MIDI ライブラリに handleNoteOn 関数をアタッチします。
  // Bluefruit が MIDI Note On メッセージを受信すると、この関数が呼び出されます。
  MIDI.setHandleNoteOn(handleNoteOn);

  // MIDI Note Off メッセージについても同様にします。
  MIDI.setHandleNoteOff(handleNoteOff);

  Serial.begin(115200);

  // デバイスがマウントされるまで待機
  while( !USBDevice.mounted() ) delay(1);
}

void loop()
{
  static uint32_t start_ms = 0;
  if ( millis() - start_ms > 266 )
  {
    start_ms += 266;
    
    // 現在および前のシーケンス位置の変数を設定
    int previous = position - 1;
  
    // 現在の位置が 0 の場合、前の位置をシーケンスの最後のノートに設定
    if (previous < 0) {
      previous = sizeof(note_sequence) - 1;
    }
  
    // 現在の位置でチャンネル 1 のフルベロシティ (127) で Note On を送信
    MIDI.sendNoteOn(note_sequence[position], 127, 1);
  
    // 前のノートの Note Off を送信
    MIDI.sendNoteOff(note_sequence[previous], 0, 1);
  
    // 位置をインクリメント
    position++;
  
    // シーケンスの最後に達した場合、最初からやり直す
    if (position >= sizeof(note_sequence)) {
      position = 0;
    }
  }

  // 新しい MIDI メッセージを読み取る
  MIDI.read();  
}

void handleNoteOn(byte channel, byte pitch, byte velocity)
{
  // ノートが押されたときにログを記録
  Serial.printf("Note on: channel = %d, pitch = %d, velocity - %d", channel, pitch, velocity);
  Serial.println();
}

void handleNoteOff(byte channel, byte pitch, byte velocity)
{
  // ノートが離されたときにログを記録
  Serial.printf("Note off: channel = %d, pitch = %d, velocity - %d", channel, pitch, velocity);
  Serial.println();
}
```