---
description: ReSpeaker Lite 音量调节
title: 音量调节
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_volume
last_update:
  date: 9/27/2024
  author: Jessie
---


### 功能


此示例项目演示了如何通过 I2C 命令调节 ReSpeaker Lite 的音量。

`AIC3204` I2C 地址：`0x18`


### 代码


```cpp
#include "AudioTools.h"
#include "Wire.h"

#define AIC3204_ADDR  0x18

AudioInfo info_16k(16000, 2, 32);
SineWaveGenerator<int16_t> sineWave(1000);                // SoundGenerator 的子类，最大振幅为 32000
GeneratedSoundStream<int16_t> sound(sineWave);             // 从正弦波生成的流

I2SStream out; 
I2SConfig config_i2s1;

//FormatConverterStream converter(in);
//StreamCopy copier(out, converter);
StreamCopy copier(out, sound);

uint32_t now_time = 0;
uint8_t level_index = 0;
int8_t level[10] = {0x3A, 0x3B, 0x3C, 0x3D, 0x3E, 0x3F, 0x00, 0x01, 0x02, 0x03};

void aic3204_write_reg(uint8_t reg, uint8_t value)
{
  Wire.beginTransmission(AIC3204_ADDR);
  Wire.write(reg);
  Wire.write(value);
  Wire.endTransmission();
}


void setup(void) {  
  // 打开串口
  Serial.begin(115200);
  Wire.begin(5,6);
  // while(!Serial);
//  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // 启动 I2S
  Serial.println("starting I2S...");
  config_i2s1 = out.defaultConfig(TX_MODE);
  config_i2s1.copyFrom(info_16k); 
  // 自定义 I2S 输出引脚
  config_i2s1.pin_bck = 8;
  config_i2s1.pin_ws = 7;
  config_i2s1.pin_data = 43;
  config_i2s1.pin_data_rx = 44;
  config_i2s1.is_master = false;
  out.begin(config_i2s1);

//  converter.begin(info_16k, info_48k);
  sineWave.begin(info_16k, N_B4);

  Serial.println("started...");
  
}

// Arduino 循环 - 将声音复制到输出
void loop() {
   copier.copy();
   if (millis() - now_time > 1000) {
    now_time = millis();
    aic3204_write_reg(0x00, 0x01);
    aic3204_write_reg(0x12, level[level_index]);
    aic3204_write_reg(0x13, level[level_index]);
    Serial.print("level: ");
    Serial.println(level_index);
    level_index = level_index + 2;
    if (level_index >= 10) level_index = 0;
   }
}
```