---
description: ReSpeaker XVF3800 USB 4-Mic Arrayは、AEC、ビームフォーミング、ノイズ抑制、360°音声キャプチャを備えたプロフェッショナルな円形マイクロフォンアレイです。XIAO ESP32S3と組み合わせることで、スマートデバイス、ロボティクス、IoTアプリケーション向けの高度な音声制御を実現します。シームレスな統合とデュアルモードの柔軟性をご体験ください。

title: reSpeaker XVF3800 I2Sを使用した音声録音・再生

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /ja/respeaker_xvf3800_xiao_record_playback
last_update:
  date: 7/16/2025
  author: Kasun Thushara
---

# reSpeaker XVF3800 I2Sを使用した音声録音・再生

## 目的

このスケッチの目標は、ESP32-S3のI2Sインターフェースを使用して**XVF3800音声プロセッサから音声データを録音**し、**メモリに一時的に保存**してから、同じ音声パスを通じて**再生**することです。この種のループバックテストは、特にI2C経由で制御される場合に、XVF3800の入力チャンネルと出力チャンネルの両方が正しく初期化され、動作しているかを確認するのに役立ちます。

## コード概要

冒頭では、**16kHzサンプルレート、2音声チャンネル、サンプルあたり32ビット深度**を指定するAudioInfoオブジェクトを設定しており、これは典型的なXVF3800音声設定と一致します。outという名前のI2SStreamオブジェクトは、録音（RXモード）と再生（TXモード）の両方に使用されます。
setup()関数は、デバッグ用のシリアルコンソールを初期化し、カスタムピン**（BCK = ピン8、WS = ピン7、DATA OUT = ピン44、DATA IN = ピン43）**でI2Sペリフェラルを設定し、ESP32をI2Sマスターデバイスとして構成します。この設定は、ESP32とXVF3800モジュール間のハードウェア配線を反映しています。
loop()関数では、まずout.end()でI2S出力を停止し、次にXVF3800の出力からの入力音声データを録音するために**RX**モードに再構成します。out.readBytes()を使用してbuffer[]に生の音声サンプルを充填します。録音後、**TXモード**に切り替え、I2Sを再初期化し、out.write()を使用して音声を送り返します。これにより、各ループ反復で完全な**録音–保存–再生サイクル**が作成されます。

```bash
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
  config.is_master = true;
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

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>