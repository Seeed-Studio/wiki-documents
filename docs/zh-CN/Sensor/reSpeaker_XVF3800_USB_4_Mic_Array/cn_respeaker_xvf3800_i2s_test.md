---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款专业的圆形麦克风阵列，具有 AEC、波束成形、噪声抑制和 360° 语音捕获功能。与 XIAO ESP32S3 配对使用，可为智能设备、机器人和物联网应用提供先进的语音控制功能。探索无缝集成和双模式灵活性。

title: reSpeaker XVF3800 USB 麦克风阵列与 XIAO ESP32S3 I2S 测试
keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /cn/respeaker_xvf3800_xiao_i2s
last_update:
  date: 7/16/2025
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

在设置阶段，代码初始化串行通信并使用立体声配置和 32 位采样宽度启动 I2S 接口。I2S 引脚根据 ESP32S3 的硬件映射进行配置。在传输（TX）阶段，通过切换音频信号的幅度值生成 440 Hz 方波。**总共将 32,000 个样本写入 I2S 总线。在接收（RX）阶段，代码从 XVF3800 麦克风阵列读取 32,000 个样本。然后计算这些样本中有多少是非零且有效的。如果接收到超过 16,000 个有效样本，测试通过**。如果没有，则进行第二次读取尝试。如果结果仍然低于阈值，则测试标记为失败。

## 代码

```bash
#include <ESP_I2S.h>
#include <wav_header.h>

I2SClass I2S;

const int sampleRate = 16000;                         // 采样率（Hz）
const int frequency = 440;                            // 方波频率（Hz）
const int amplitude = 500;                            // 方波幅度
int32_t sample = amplitude;                           // 当前采样值
const int halfWavelength = sampleRate / frequency;    // 方波半波长

int count = 0;
int i2s_read = 0;
bool i2s_test = true;

void setup() {
  Serial.begin(115200);
  while(!Serial);             // 等待串口连接

  I2S.setPins(8, 7, 44, 43);  // 配置 I2S 引脚
  if (!I2S.begin(I2S_MODE_STD, sampleRate, I2S_DATA_BIT_WIDTH_32BIT, I2S_SLOT_MODE_STEREO)){
    Serial.println("Failed to initialize I2S!");
    while(1);                 // 如果初始化失败则停止
  }
}

void loop() {
  if(i2s_test){
    Serial.println("I2S test!");

    // 生成并写入方波样本
    for(int i = 0; i < 32000; i++){
      if(count % halfWavelength == 0){
        sample = -sample;    // 切换采样值以创建方波
      }
      I2S.write(sample);     // 将样本写入右声道
      count++;
    }

    // 从 I2S 读取样本并计算非零样本
    i2s_read=0;
    for(int i = 0; i < 32000; i++){
      int sample_read = I2S.read();
      Serial.print(sample_read);
      Serial.print(" ");
      if(sample_read != 0 && sample_read != 0xFFFF){
        i2s_read++;
      }
    }
    Serial.println();

    // 检查有效样本数量是否超过阈值
    if(i2s_read > 16000){
      Serial.println("I2S RX pass!");
    } else{
      i2s_read = 0;
      for(int i = 0; i < 32000; i++){
        int sample_read = I2S.read();
        if (sample_read != 0 && sample_read != 0xFFFF){
          i2s_read++;
        }
      }
      if(i2s_read > 16000)
        Serial.println("I2S RX pass!");
      else
        Serial.println("I2S RX fail!");
    }

    Serial.println("OVER");
    i2s_test = false;
  }
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