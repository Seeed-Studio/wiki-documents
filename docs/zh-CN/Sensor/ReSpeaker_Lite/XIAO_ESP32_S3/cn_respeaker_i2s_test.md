---
description: 使用 XIAO ESP32S3 进行 I2S 测试
title: I2S 测试
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_i2s_test
last_update:
  date: 7/1/2024
  author: Jessie
---


这个项目是一个测试程序，用于验证 ReSpeaker Lite 板上 I2S 接口的功能，该板集成了 [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) 微控制器和麦克风阵列。该程序生成方波音频信号，将其写入 I2S 接口，然后从板载麦克风阵列读取采样数据，以检查 I2S 传输和接收的完整性。


### 功能

程序首先初始化串行通信并配置 I2S 引脚，然后根据指定的频率和幅度生成方波音频信号。生成的音频采样使用 `I2S.write()` 函数写入 I2S 接口。

程序然后通过 I2S 接口使用 `I2S.read()` 函数从麦克风阵列读取采样数据，并统计接收到的非零采样数量。

### 代码

```cpp
#include <ESP_I2S.h>
#include <wav_header.h>

I2SClass I2S;

const int sampleRate = 16000;                         // 采样率，单位 Hz
const int frequency = 440;                            // 方波频率，单位 Hz
const int amplitude = 500;                            // 方波幅度
int32_t sample = amplitude;                           // 当前采样值
const int halfWavelength = sampleRate / frequency;    // 方波半波长

int count = 0;
int i2s_read = 0;
bool i2s_test = true;

void setup() {
  Serial.begin(115200);
  while(!Serial);             // 等待串口连接

  I2S.setPins(8, 7, 43, 44);  // 配置 I2S 引脚
  if (!I2S.begin(I2S_MODE_STD, sampleRate, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO)){
    Serial.println("Failed to initialize I2S!");
    while(1);                 // 如果初始化失败则停止
  }
}

void loop() {
  if(i2s_test){
    Serial.println("I2S test!");

    // 生成并写入方波采样
    for(int i = 0; i < 32000; i++){
      if(count % halfWavelength == 0){
        sample = -sample;    // 切换采样值以创建方波
      }
      I2S.write(sample);     // 将采样写入右声道
      count++;
    }

    // 从 I2S 读取采样并统计非零采样
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

    // 检查有效采样数量是否超过阈值
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


如果接收到的非零采样数量超过阈值（在这种情况下为 16000），则认为 I2S 接收通过。否则，认为失败。

测试结果，包括 I2S 采样值和通过/失败状态，会打印到串行监视器。

打开 `串行监视器` 查看测试结果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-test-pass.png" alt="pir" width={800} height="auto" /></p>