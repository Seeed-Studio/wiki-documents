---
description: reSpeaker Flex は XMOS XVF3800 を搭載した強力なモジュラー音声システムで、円形および直線状の交換可能な 4 マイクアレイにより、精密な 360° または指向性オーディオキャプチャを実現し、ロボット工学やスマートデバイスに最適です。
title: Xiao ESP32S3 を使用して reSpeaker Flex で録音と再生を行う
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_record_playback
sku: 100070894,100026178
last_update:
  date: 05/28/2026
  author: Kasun Thushara
createdAt: '2026-05-28'
updatedAt: '2026-05-28'
url: https://wiki.seeedstudio.com/ja/respeaker_flex_xiao_playback_record/
---

# reSpeaker Flex で I2S を使用してオーディオを録音および再生する

## 目的

このスケッチの目的は、ESP32-S3 上の I2S インターフェースを使用して **reSpeaker Flex XVF3800 ボイスプロセッサからオーディオデータを録音し**、それを**一時的にメモリに保存**してから、**同じオーディオ経路で再生する**ことです。この種のループバックテストにより、特に I2C 経由で制御される場合に、XVF3800 の入力および出力チャネルの両方が正しく初期化され動作しているかどうかを確認できます。

## コード概要

冒頭では、AudioInfo オブジェクトを設定し、**16kHz サンプリングレート、2 チャンネル、サンプルあたり 32 ビット深度**を指定します。これは一般的な XVF3800 のオーディオ設定に一致します。`I2SStream` オブジェクト `out` は、録音（RX モード）と再生（TX モード）の両方に使用されます。
`setup()` 関数では、デバッグ用にシリアルコンソールを初期化し、カスタムピン **(BCK = pin 8, WS = pin 7, DATA OUT = pin 44, DATA IN = pin 43)** で I2S ペリフェラルを設定し、ESP32 を I2S マスターデバイスとして構成します。このセットアップは、ESP32 と reSpeaker Flex XVF3800 モジュール間のハードウェア配線を反映しています。
`loop()` 関数では、まず `out.end()` で I2S 出力を停止し、その後 **RX** モードに再設定して XVF3800 の出力から入力されるオーディオデータを録音します。`out.readBytes()` を使用して `buffer[]` を生のオーディオサンプルで埋めます。録音後、**TX モード**に戻して I2S を再初期化し、`out.write()` を使用してオーディオを再送出します。これにより、ループの各反復で完全な **録音–保存–再生サイクル**が作成されます。

:::note
この例で使用しているファームウェアは I2S 16 kHz バージョンです。お使いの XIAO ESP32S3 のファームウェアが 16 kHz の I2S オーディオ用に設定されていることを確認してください。
:::

```c

#include "AudioTools.h"

AudioInfo info(16000, 2, 32);

I2SStream out; 
I2SConfig config;


uint8_t buffer[128000];
size_t bytes_read = 0;
size_t bytes_write = 0;

// Arduino Setup
void setup(void) {  
  // Open Serial 
  Serial.begin(115200);
  while(!Serial);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // start I2S
  Serial.println("starting I2S...");
  config = out.defaultConfig(TX_MODE);
  config.copyFrom(info); 
  // Custom I2S output pins
  config.pin_bck = 8;
  config.pin_ws = 7;
  config.pin_data = 44;
  config.pin_data_rx = 43;
  config.is_master = false;
  out.begin(config);
  Serial.println("started...");
}

// Arduino loop - copy sound to out 
void loop() {
  // copier.copy();
  out.end();
  config.rx_tx_mode = RX_MODE;
  out.begin(config);
  bytes_read = out.readBytes(buffer, 128000);
  out.end();
  config.rx_tx_mode = TX_MODE;
  out.begin(config);
  bytes_write= out.write(buffer, 128000);
}

```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
