---
description: ReSpeaker XVF3800 USB 4-Mic Arrayは、AEC、ビームフォーミング、ノイズ抑制、360°音声キャプチャを備えたプロフェッショナルな円形マイクロフォンアレイです。XIAO ESP32S3と組み合わせることで、スマートデバイス、ロボティクス、IoTアプリケーション向けの高度な音声制御を実現します。シームレスな統合とデュアルモードの柔軟性をご確認ください。

title: reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3 UDP Audio Streaming 

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /ja/respeaker_xvf3800_xiao_udp_audio_stream
last_update:
  date: 8/20/2025
  author: Kasun Thushara
---

## 概要

このプロジェクトでは、**ReSpeaker XVF3800**マイクロフォンアレイと**XIAO ESP32S3**ボードを使用したリアルタイム音声ストリーミングを実演します。音声はI2S経由でキャプチャされ、UDP経由でローカルマシン上で動作するサーバーに送信され、そこで.wavファイルとして保存・処理されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## 機能概要

このスケッチは以下のタスクを実行します：

- 指定されたWi-Fiネットワークに接続します。
- UDPサーバー（例：ホストPC上で動作するPythonスクリプト）に接続します。
- XIAO ESP32S3を使用してReSpeaker XVF3800からI2S経由でリアルタイム音声をキャプチャします。
- キャプチャした音声を生データとして送信します。

## Arduinoコード

アップロード前に以下のフィールドを更新してください：

```cpp
// WiFi credentials
const char* ssid     = "Your-SSID";
const char* password = "WIFI-PASSWORD";
// UDP target
const char* udpAddress = "192.168.X.X";  // Change to PC/server IP
const int udpPort      = 12345;            // Port to send audio

```

### 完全なコード（約5秒間の音声をストリーミング）

```cpp
#include "WiFi.h"
#include "WiFiUdp.h"
#include "AudioTools.h"

// WiFi credentials
const char* ssid     = "Your-SSID";
const char* password = "WIFI-PASSWORD";

// UDP target
const char* udpAddress = "192.168.X.X";  // Change to PC/server IP
const int udpPort      = 12345;            // Port to send audio

WiFiUDP udp;

// Audio: 16kHz, stereo, 32-bit
AudioInfo info(16000, 2, 32);
I2SStream i2s_in;
I2SConfig i2s_config;

// 5 sec of audio = 128kB/s × 5 = 640 kB
#define PACKET_SIZE 1024
#define NUM_PACKETS 625  // 5 seconds worth

// Encoded WAV output to UDP
EncodedAudioStream out_stream(&udp, new WAVEncoder());
StreamCopy copier(out_stream, i2s_in, PACKET_SIZE);

void connectWiFi() {
  Serial.printf("Connecting to WiFi: %s\n", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\nConnected!");
}

void setupI2SInput() {
  i2s_config = i2s_in.defaultConfig(RX_MODE);
  i2s_config.copyFrom(info);

  // XVF3800 pins
  i2s_config.pin_bck = 8;     
  i2s_config.pin_ws = 7;      
  i2s_config.pin_data = 44;   
  i2s_config.pin_data_rx = 43;  
  i2s_config.is_master = true;  

  i2s_in.begin(i2s_config);
  Serial.println("I2S input started.");
}

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  connectWiFi();
  setupI2SInput();

  // Begin UDP
  udp.begin(WiFi.localIP(), udpPort);
  out_stream.begin(info);

  // Start UDP transmission
  Serial.printf("Sending 5 seconds of audio via UDP to %s:%d\n", udpAddress, udpPort);

  udp.beginPacket(udpAddress, udpPort);
  copier.copyN(NUM_PACKETS);   // Copy exactly 5 sec of audio
  udp.endPacket();

  Serial.println("Finished sending 5 seconds of audio!");
}

void loop() {
  // Nothing else, only runs once
}

```

シリアルモニター（115200ボー）を使用して接続とストリーミングの状態を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/udp.png" alt="pir" width={600} height="auto" /></p>

## Pythonスクリプト（音声の受信と保存用）

```python
import socket

udp_ip = "0.0.0.0"
udp_port = 12345
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind((udp_ip, udp_port))

with open("output.wav", "wb") as f:
    print("Listening for audio...")
    while True:
        data, addr = sock.recvfrom(4096)
        f.write(data)

```

## 音声の再生

ファイルが保存されたら（output.wav）、以下のような任意の音声プレーヤーで開くだけです：

- VLC
- Windows Media Player
- Audacity（検査用）

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>