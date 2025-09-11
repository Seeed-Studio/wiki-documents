---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款专业的圆形麦克风阵列，具有 AEC、波束成形、噪声抑制和 360° 语音捕获功能。与 XIAO ESP32S3 配对使用，可为智能设备、机器人和物联网应用提供先进的语音控制功能。探索无缝集成和双模式灵活性。

title: reSpeaker XVF3800 USB 麦克风阵列与 XIAO ESP32S3 I2S 测试
keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /cn/respeaker_xvf3800_xiao_i2s
last_update:
  date: 8/11/2025
  author: Kasun Thushara
---

# reSpeaker XVF3800 USB 麦克风阵列与 XIAO ESP32S3 I2S 测试

本项目作为测试代码，用于验证 **XIAO ESP32S3** 与 **ReSpeaker XVF3800 USB 4-Mic Array** 之间 I2S 接口的功能。目标是确认通过 I2S 总线进行的数据传输和接收工作正常。为了实现这一目标，代码生成合成方波音频信号并将其写入 I2S 接口。然后从 XVF3800 麦克风阵列读取音频数据并验证接收样本的完整性。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 目标

本项目的主要目标是测试和验证 I2S 传输（TX）和接收（RX）操作。它旨在确保 ReSpeaker XVF3800 麦克风阵列能够成功通过 I2S 将音频数据发送回 ESP32S3。通过这样做，它为两个设备之间的 I2S 通信建立了可靠的基线，为更高级的音频和语音处理应用铺平了道路。

## 工作原理

在设置阶段，代码初始化串行通信并使用立体声配置和 32 位采样宽度启动 I2S 接口。I2S 引脚根据 ESP32S3 的硬件映射进行配置。在传输（TX）阶段，通过切换音频信号的幅度值生成 440 Hz 方波。**总共将 32,000 个样本写入 I2S 总线。在接收（RX）阶段，代码从 XVF3800 麦克风阵列读取 32,000 个样本。然后计算这些样本中有多少是非零且有效的。如果接收到超过 16,000 个有效样本，测试通过**。如果没有，则进行第二次读取尝试。如果结果仍然低于阈值，测试标记为失败。

## 代码

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

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
