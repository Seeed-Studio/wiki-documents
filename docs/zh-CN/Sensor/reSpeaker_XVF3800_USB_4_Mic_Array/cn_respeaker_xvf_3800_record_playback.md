---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款专业的圆形麦克风阵列，具有 AEC、波束成形、噪声抑制和 360° 语音捕获功能。与 XIAO ESP32S3 配对使用，可为智能设备、机器人和物联网应用提供先进的语音控制功能。探索无缝集成和双模式灵活性。

title: reSpeaker XVF3800 使用 I2S 录制和播放音频

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /cn/respeaker_xvf3800_xiao_record_playback
last_update:
  date: 7/16/2025
  author: Kasun Thushara
---

# reSpeaker XVF3800 使用 I2S 录制和播放音频

## 目标

本示例的目标是**使用 ESP32-S3 上的 I2S 接口从 XVF3800 语音处理器录制音频数据**，**将其临时存储在内存中**，然后**通过相同的音频路径播放**。这种环回测试有助于验证 XVF3800 的输入和输出通道是否都正确初始化并正常工作，特别是在通过 I2C 控制时。

## 代码概述

在顶部，我们配置了一个 AudioInfo 对象，指定**16kHz 采样率、2 个音频通道和每个采样 32 位深度**，这与典型的 XVF3800 音频设置相匹配。名为 out 的 I2SStream 对象用于录制（RX 模式）和播放（TX 模式）。
setup() 函数初始化用于调试的串行控制台，使用自定义引脚设置 I2S 外设**（BCK = 引脚 8，WS = 引脚 7，DATA OUT = 引脚 44，DATA IN = 引脚 43）**，并将 ESP32 配置为 I2S 主设备。此设置反映了 ESP32 和 XVF3800 模块之间的硬件连接。
在 loop() 函数中，首先使用 out.end() 停止 I2S 输出，然后重新配置为 **RX** 模式以录制来自 XVF3800 输出的传入音频数据。它使用 out.readBytes() 将原始音频采样填充到 buffer[] 中。录制后，它切换回 **TX 模式**，重新初始化 I2S，并使用 out.write() 将音频发送回去。这在每次循环迭代中创建了一个完整的**录制–存储–播放循环**。

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
