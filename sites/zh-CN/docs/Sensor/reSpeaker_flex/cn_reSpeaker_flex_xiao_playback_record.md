---
description: reSpeaker Flex 是一款强大的模块化语音系统，采用 XMOS XVF3800，配备可互换的环形和线性 4 麦克风阵列，可实现精确的 360° 或定向音频采集——非常适合机器人和智能设备。
title: 使用 Xiao ESP32S3 在 reSpeaker Flex 上录音与回放
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
url: https://wiki.seeedstudio.com/cn/respeaker_flex_xiao_record_playback/
---

# 使用 I2S 在 reSpeaker Flex 上录音与回放音频

## 目标

本示例的目标是使用 ESP32-S3 上的 I2S 接口，从 **reSpeaker Flex XVF3800 语音处理器录制音频数据**，**将其临时存储在内存中**，然后通过同一音频通路**回放**。这种环回测试有助于验证 XVF3800 的输入和输出通道在通过 I2C 控制时，是否都已正确初始化并正常工作。

## 代码概览

在开头，我们配置了一个 AudioInfo 对象，指定每个采样的**16kHz 采样率、2 个音频通道和 32 位深度**，这与典型的 XVF3800 音频设置相匹配。名为 out 的 I2SStream 对象同时用于录音（RX 模式）和回放（TX 模式）。
`setup()` 函数初始化串口控制台用于调试，使用自定义引脚 **(BCK = 引脚 8，WS = 引脚 7，DATA OUT = 引脚 44，DATA IN = 引脚 43)** 配置 I2S 外设，并将 ESP32 配置为 I2S 主设备。该设置反映了 ESP32 与 reSpeaker Flex XVF3800 模块之间的硬件连线。
在 `loop()` 函数中，首先通过 `out.end()` 停止 I2S 输出，然后将其重新配置为 **RX** 模式，以从 XVF3800 的输出端录制输入音频数据。它使用 `out.readBytes()` 将原始音频采样填充到 `buffer[]` 中。录制完成后，再切换回 **TX 模式**，重新初始化 I2S，并使用 `out.write()` 将音频发送回去。这样在每次循环迭代中就形成了一个完整的**录制–存储–回放周期**。

:::note
本示例中使用的固件为 I2S 16 kHz 版本。请确保你的 XIAO ESP32S3 固件已配置为 16 kHz 的 I2S 音频。
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

## 技术支持与产品讨论

感谢你选择我们的产品！我们将通过多种支持方式，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
