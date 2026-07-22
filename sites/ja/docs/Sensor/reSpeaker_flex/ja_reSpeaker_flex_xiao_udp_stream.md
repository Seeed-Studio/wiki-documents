---
description: reSpeaker Flex は XMOS XVF3800 を搭載した強力なモジュラー音声システムで、交換可能な円形および直線型の 4 マイクアレイにより、ロボット工学やスマートデバイスに最適な、高精度な 360° または指向性オーディオキャプチャを実現します。
title: UDP を使って reSpeaker Flex を Xiao ESP32S3 でストリーミングする
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_udp_streaming
sku: 100070894,100026178
last_update:
  date: 05/28/2026
  author: Kasun Thushara
createdAt: '2026-05-28'
updatedAt: '2026-05-28'
url: https://wiki.seeedstudio.com/ja/respeaker_flex_xiao_udp_streaming/
---

## 概要

このプロジェクトでは、**ReSpeaker Flex XVF3800** マイクアレイと **XIAO ESP32S3** ボードを使用したリアルタイムオーディオストリーミングを実演します。オーディオは I2S 経由で取得され、UDP を介してローカルマシン上で動作するサーバーに送信され、そこで .wav ファイルとして保存および処理することができます。

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 直線型（XIAO ESP32S3 搭載）</th>
    <th>reSpeaker Flex XVF3800 円形（XIAO ESP32S3 搭載）</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## 機能概要

このスケッチは次のタスクを実行します：

- 指定した Wi-Fi ネットワークに接続します。
- UDP サーバー（例：ホスト PC 上で動作する Python スクリプト）に接続します。
- XIAO ESP32S3 を使用して ReSpeaker XVF3800 から I2S 経由でリアルタイムオーディオを取得します。
- 取得したオーディオを生データとして送信します。

:::note
この例で使用しているファームウェアは I2S 16 kHz バージョンです。XIAO ESP32S3 のファームウェアが 16 kHz の I2S オーディオ用に設定されていることを確認してください。
:::

## Arduino コード

アップロードする前に次の項目を更新してください：

```cpp
// WiFi credentials
const char* ssid     = "Your-SSID";
const char* password = "WIFI-PASSWORD";
// UDP target
const char* udpAddress = "192.168.X.X";  // Change to PC/server IP
const int udpPort      = 12345;            // Port to send audio

```

### フルコード（約 5 秒分のオーディオをストリーミング）

```cpp
#include "WiFi.h"
#include "WiFiUdp.h"
#include "AudioTools.h"

// WiFi credentials
const char* ssid = "Your-SSID";
const char* password = "WIFI-PASSWORD";

// UDP target
const char* udpAddress = "192.168.x.x";
const int udpPort = 12345;

WiFiUDP udp;

// Audio: 16kHz, stereo, 32-bit
AudioInfo info(16000, 2, 32);
I2SStream i2s_in;
I2SConfig i2s_config;

// Buffer for reading audio
#define BUFFER_SIZE 1024
uint8_t buffer[BUFFER_SIZE];

// 5 seconds of audio = 16000 Hz × 2 channels × 4 bytes = 128,000 bytes/sec
// 5 seconds = 640,000 bytes
#define TOTAL_BYTES 640000

void connectWiFi() {
  Serial.printf("Connecting to WiFi: %s\n", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\nConnected!");
  Serial.printf("IP Address: %s\n", WiFi.localIP().toString().c_str());
}

void setupI2SInput() {
  i2s_config = i2s_in.defaultConfig(RX_MODE);
  i2s_config.copyFrom(info);

  // XVF3800 pins
  i2s_config.pin_bck = 8;
  i2s_config.pin_ws = 7;
  i2s_config.pin_data = 44;
  i2s_config.pin_data_rx = 43;
  i2s_config.is_master = false;

  i2s_in.begin(i2s_config);
  Serial.println("I2S input started.");
}

void setup() {
  Serial.begin(115200);
  while(!Serial);

  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  connectWiFi();
  setupI2SInput();

  // Wait a bit for I2S to stabilize
  delay(500);

  Serial.printf("Sending 5 seconds of audio via UDP to %s:%d\n", udpAddress, udpPort);

  size_t total_sent = 0;
  size_t bytes_read = 0;

  // Send audio in chunks
  while (total_sent < TOTAL_BYTES) {
    // Read audio data
    bytes_read = i2s_in.readBytes(buffer, BUFFER_SIZE);

    if (bytes_read > 0) {
      // Send via UDP
      udp.beginPacket(udpAddress, udpPort);
      udp.write(buffer, bytes_read);
      udp.endPacket();

      total_sent += bytes_read;

      // Progress indicator
      if (total_sent % 64000 == 0) {
        Serial.printf("Sent %d bytes (%.1f seconds)\n", total_sent, total_sent / 128000.0);
      }
    } else {
      Serial.println("Warning: No data read from I2S");
      delay(10);
    }
  }

  Serial.printf("Finished! Sent %d bytes total\n", total_sent);
}

void loop() {
  // Nothing - runs once
}
```

接続状況とストリーミング状況を確認するには、Serial Monitor（115200 ボー）を使用してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/udp.png" alt="pir" width={600} height="auto" /></p>

## Python スクリプト（オーディオの受信と保存用）

```python
import socket
import wave
import time

# UDP settings
udp_ip = "0.0.0.0"
udp_port = 12345

# Audio settings (must match ESP32)
SAMPLE_RATE = 16000
CHANNELS = 2
SAMPLE_WIDTH = 4  # 32-bit = 4 bytes

# Expected data size (5 seconds)
EXPECTED_BYTES = 640000

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind((udp_ip, udp_port))
sock.settimeout(2.0)  # 2 second timeout

print(f"Listening for audio on {udp_ip}:{udp_port}...")

audio_data = bytearray()
last_packet_time = time.time()

try:
    while True:
        try:
            data, addr = sock.recvfrom(4096)
            if data:
                audio_data.extend(data)
                last_packet_time = time.time()

                # Progress
                if len(audio_data) % 64000 < 4096:
                    print(f"Received {len(audio_data)} bytes ({len(audio_data) / 128000:.1f} seconds)")

        except socket.timeout:
            # No data for 2 seconds - assume transmission complete
            if len(audio_data) > 0:
                print("Timeout - assuming transmission complete")
                break
            else:
                print("Waiting for data...")
                continue

except KeyboardInterrupt:
    print("\nStopped by user")

# Save as WAV file
if len(audio_data) > 0:
    print(f"\nTotal received: {len(audio_data)} bytes")
    print("Saving to output.wav...")

    with wave.open("output.wav", "wb") as wav_file:
        wav_file.setnchannels(CHANNELS)
        wav_file.setsampwidth(SAMPLE_WIDTH)
        wav_file.setframerate(SAMPLE_RATE)
        wav_file.writeframes(bytes(audio_data))

    print("Done! Audio saved to output.wav")
else:
    print("No data received!")

sock.close()

```

## オーディオを再生する

ファイル（output.wav）が保存されたら、次のような任意のオーディオプレーヤーで開くだけです：

- VLC
- Windows Media Player
- Audacity（解析用）

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
