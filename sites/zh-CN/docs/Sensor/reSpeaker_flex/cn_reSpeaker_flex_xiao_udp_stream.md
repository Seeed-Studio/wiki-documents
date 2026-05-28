---
description: reSpeaker Flex 是一款强大的模块化语音系统，采用 XMOS XVF3800，配备可互换的环形和线性 4 麦克风阵列，可实现精确的 360° 或定向音频采集——非常适合机器人和智能设备。
title: 使用 Xiao ESP32S3 对 reSpeaker Flex 进行 UDP 流式传输
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
url: https://wiki.seeedstudio.com/cn/respeaker_flex_xiao_playback_record/
---

## 概述

本项目演示如何使用 **ReSpeaker Flex XVF3800** 麦克风阵列与 **XIAO ESP32S3** 开发板实现实时音频流传输。音频通过 I2S 采集，并通过 UDP 传输到本地计算机上运行的服务器，在那里可以将其保存并作为 .wav 文件进行处理。

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 线性阵列搭配 XIAO ESP32S3</th>
    <th>reSpeaker Flex XVF3800 环形阵列搭配 XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## 功能概览

此示例程序执行以下任务：

- 连接到指定的 Wi-Fi 网络。
- 连接到 UDP 服务器（例如在主机 PC 上运行的 Python 脚本）。
- 使用 XIAO ESP32S3 通过 I2S 从 ReSpeaker XVF3800 采集实时音频。
- 将采集到的音频作为原始数据进行传输。

:::note
本示例使用的固件为 I2S 16 kHz 版本。请确保你的 XIAO ESP32S3 固件已配置为 16 kHz 的 I2S 音频。
:::

## Arduino 代码

在上传之前更新以下字段：

```cpp
// WiFi credentials
const char* ssid     = "Your-SSID";
const char* password = "WIFI-PASSWORD";
// UDP target
const char* udpAddress = "192.168.X.X";  // Change to PC/server IP
const int udpPort      = 12345;            // Port to send audio

```

### 完整代码（流式传输约 5 秒音频）

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

使用串口监视器（115200 波特率）确认连接和流式传输状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/udp.png" alt="pir" width={600} height="auto" /></p>

## Python 脚本（用于接收并保存音频）

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

## 收听音频

文件保存完成后（output.wav），只需使用任意音频播放器打开，例如：

- VLC
- Windows Media Player
- Audacity（用于检查）

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
