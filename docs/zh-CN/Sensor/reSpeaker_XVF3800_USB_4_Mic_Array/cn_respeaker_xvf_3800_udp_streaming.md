---
description: ReSpeaker XVF3800 USB 4麦克风阵列是一款专业的圆形麦克风阵列，具有AEC、波束成形、噪声抑制和360°语音捕获功能。与XIAO ESP32S3配对，可为智能设备、机器人和物联网应用提供先进的语音控制。探索无缝集成和双模式灵活性。

title: reSpeaker XVF3800 USB麦克风阵列与XIAO ESP32S3 UDP音频流传输

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /cn/respeaker_xvf3800_xiao_udp_audio_stream
last_update:
  date: 8/20/2025
  author: Kasun Thushara
---

## 概述

本项目演示了使用**ReSpeaker XVF3800**麦克风阵列与**XIAO ESP32S3**开发板进行实时音频流传输。音频通过I2S捕获，并通过UDP传输到本地机器上运行的服务器，在那里可以存储和处理为.wav文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 功能概述

此代码执行以下任务：

- 连接到指定的Wi-Fi网络。
- 连接到UDP服务器（例如，在主机PC上运行的Python脚本）。
- 使用XIAO ESP32S3通过I2S从ReSpeaker XVF3800捕获实时音频。
- 将捕获的音频作为原始数据传输。

## Arduino代码

上传前请更新这些字段：

```cpp
// WiFi凭据
const char* ssid     = "Your-SSID";
const char* password = "WIFI-PASSWORD";
// UDP目标
const char* udpAddress = "192.168.X.X";  // 更改为PC/服务器IP
const int udpPort      = 12345;            // 发送音频的端口

```

### 完整代码（流传输约5秒音频）

```cpp
#include "WiFi.h"
#include "WiFiUdp.h"
#include "AudioTools.h"

// WiFi凭据
const char* ssid     = "Your-SSID";
const char* password = "WIFI-PASSWORD";

// UDP目标
const char* udpAddress = "192.168.X.X";  // 更改为PC/服务器IP
const int udpPort      = 12345;            // 发送音频的端口

WiFiUDP udp;

// 音频：16kHz，立体声，32位
AudioInfo info(16000, 2, 32);
I2SStream i2s_in;
I2SConfig i2s_config;

// 5秒音频 = 128kB/s × 5 = 640 kB
#define PACKET_SIZE 1024
#define NUM_PACKETS 625  // 5秒的数据量

// 编码WAV输出到UDP
EncodedAudioStream out_stream(&udp, new WAVEncoder());
StreamCopy copier(out_stream, i2s_in, PACKET_SIZE);

void connectWiFi() {
  Serial.printf("连接到WiFi: %s\n", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\n已连接！");
}

void setupI2SInput() {
  i2s_config = i2s_in.defaultConfig(RX_MODE);
  i2s_config.copyFrom(info);

  // XVF3800引脚
  i2s_config.pin_bck = 8;     
  i2s_config.pin_ws = 7;      
  i2s_config.pin_data = 44;   
  i2s_config.pin_data_rx = 43;  
  i2s_config.is_master = true;  

  i2s_in.begin(i2s_config);
  Serial.println("I2S输入已启动。");
}

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  connectWiFi();
  setupI2SInput();

  // 开始UDP
  udp.begin(WiFi.localIP(), udpPort);
  out_stream.begin(info);

  // 开始UDP传输
  Serial.printf("通过UDP向%s:%d发送5秒音频\n", udpAddress, udpPort);

  udp.beginPacket(udpAddress, udpPort);
  copier.copyN(NUM_PACKETS);   // 复制正好5秒的音频
  udp.endPacket();

  Serial.println("完成发送5秒音频！");
}

void loop() {
  // 无其他操作，只运行一次
}

```

使用串口监视器（115200波特率）确认连接和流传输状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/udp.png" alt="pir" width={600} height="auto" /></p>

## Python脚本（接收和保存音频）

```python
import socket

udp_ip = "0.0.0.0"
udp_port = 12345
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind((udp_ip, udp_port))

with open("output.wav", "wb") as f:
    print("正在监听音频...")
    while True:
        data, addr = sock.recvfrom(4096)
        f.write(data)

```

## 播放音频

文件保存完成后（output.wav），只需使用任何音频播放器打开它，例如：

- VLC
- Windows Media Player
- Audacity（用于检查）

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
