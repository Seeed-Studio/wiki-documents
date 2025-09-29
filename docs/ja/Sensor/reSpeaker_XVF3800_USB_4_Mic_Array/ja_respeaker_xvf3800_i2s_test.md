---
description: ReSpeaker XVF3800 USB 4-Mic Arrayは、AEC、ビームフォーミング、ノイズ抑制、360°音声キャプチャを備えたプロフェッショナルな円形マイクロフォンアレイです。XIAO ESP32S3と組み合わせることで、スマートデバイス、ロボティクス、IoTアプリケーション向けの高度な音声制御を実現します。シームレスな統合とデュアルモードの柔軟性をご確認ください。

title: reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3 I2Sテスト
keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /ja/respeaker_xvf3800_xiao_i2s
last_update:
  date: 8/11/2025
  author: Kasun Thushara
---

# reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3 I2Sテスト

このプロジェクトは、**XIAO ESP32S3**と**ReSpeaker XVF3800 USB 4-Mic Array**間のI2Sインターフェースの機能を検証するためのテストスケッチとして機能します。目標は、I2Sバスを通じたデータ送信と受信が正しく動作していることを確認することです。これを実現するために、スケッチは合成方形波オーディオ信号を生成し、I2Sインターフェースに書き込みます。その後、XVF3800マイクロフォンアレイからオーディオデータを読み取り、受信したサンプルの整合性を検証します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## 目的

このプロジェクトの主な目的は、I2S送信（TX）と受信（RX）の両方の動作をテストし、検証することです。ReSpeaker XVF3800マイクロフォンアレイがI2Sを介してESP32S3にオーディオデータを正常に送信できることを確認することを目指しています。これにより、2つのデバイス間のI2S通信の信頼性のあるベースラインを確立し、より高度なオーディオおよび音声処理アプリケーションへの道を開きます。

## 動作原理

セットアップフェーズでは、スケッチはシリアル通信を初期化し、32ビットサンプル幅のステレオ構成を使用してI2Sインターフェースを開始します。I2Sピンは、ESP32S3のハードウェアマッピングに従って構成されます。送信（TX）フェーズでは、オーディオ信号の振幅値を切り替えることで440Hzの方形波が生成されます。**合計32,000サンプルがI2Sバスに書き込まれます。受信（RX）フェーズでは、スケッチはXVF3800マイクロフォンアレイから32,000サンプルを読み取ります。その後、これらのサンプルのうち非ゼロで有効なサンプルの数をカウントします。16,000以上の有効なサンプルが受信された場合、テストは合格となります**。そうでない場合は、2回目の読み取り試行が行われます。結果がまだ閾値を下回る場合、テストは失敗としてマークされます。

## コード

```c
#include "AudioTools.h"

const int sampleRate = 16000;  // Hz
const int frequency = 440;     // Hz square wave
const int amplitude = 500;     // peak value
const int halfWavelength = sampleRate / frequency;

AudioInfo info(sampleRate, 2, 32); // stereo, 32-bit
I2SStream i2s;
I2SConfig cfg;

int32_t sample = amplitude;
int count = 0;

void printSamplesAndCount(int &nonZero) {
  nonZero = 0;
  bool truncated = false;
  for (int i = 0; i < 32000; i++) {
    int32_t rxSample;
    size_t n = i2s.readBytes((uint8_t*)&rxSample, sizeof(rxSample));
    if (n == sizeof(rxSample)) {
      if (rxSample != 0 && rxSample != 0xFFFFFFFF) {
        nonZero++;
      }
      if (i < 200) {
        Serial.printf("%d ", rxSample);
      } else if (!truncated) {
        Serial.print("... (truncated)");
        truncated = true;
      }
    }
  }
  Serial.println();
}


void setup() {
  Serial.begin(115200);
  while (!Serial);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  cfg = i2s.defaultConfig(RXTX_MODE); // full duplex
  cfg.copyFrom(info);
  cfg.pin_bck = 8;
  cfg.pin_ws = 7;
  cfg.pin_data = 44;     // TX data pin
  cfg.pin_data_rx = 43;  // RX data pin
  cfg.is_master = true;
  i2s.begin(cfg);

  Serial.println("I2S full-duplex test start");
}

void loop() {
  // 1) Generate and write 32k samples of square wave
  for (int i = 0; i < 32000; i++) {
    if (count % halfWavelength == 0) {
      sample = -sample; // toggle polarity for square wave
    }
    i2s.write((uint8_t*)&sample, sizeof(sample)); 
    count++;
  }

  // 2) First read attempt
  int nonZero = 0;
  Serial.println("First read attempt:");
  printSamplesAndCount(nonZero);
  Serial.printf("Valid samples: %d\n", nonZero);

  // 3) Check pass/fail or do second attempt
  if (nonZero > 16000) {
    Serial.println("I2S RX PASS!");
  } else {
    Serial.println("Valid samples below threshold, trying second read...");
    nonZero = 0;
    Serial.println("Second read attempt:");
    printSamplesAndCount(nonZero);
    Serial.printf("Valid samples: %d\n", nonZero);
    if (nonZero > 16000) {
      Serial.println("I2S RX PASS!");
    } else {
      Serial.println("I2S RX FAIL!");
    }
  }

  Serial.println("Test complete");
  while (true); // stop here
}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/i2s.PNG" alt="pir" width={900} height="auto" /></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
