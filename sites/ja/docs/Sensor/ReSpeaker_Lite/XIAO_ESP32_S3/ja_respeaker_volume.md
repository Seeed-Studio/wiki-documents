---
description: ReSpeaker Liteの音量調整
title: 音量調整
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_volume
last_update:
  date: 05/15/2025
  author: Jessie
---


### 機能

このサンプルプロジェクトは、I2Cコマンドを使用してReSpeaker Liteの音量を調整する方法を示しています。

`AIC3204`のI2Cアドレス: `0x18`


### コード

```cpp
#include "AudioTools.h"
#include "Wire.h"

#define AIC3204_ADDR  0x18

AudioInfo info_16k(16000, 2, 32);
SineWaveGenerator<int16_t> sineWave(1000);                // 最大振幅32000のSoundGeneratorのサブクラス
GeneratedSoundStream<int16_t> sound(sineWave);             // サイン波から生成されたストリーム

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
  // シリアルを開く
  Serial.begin(115200);
  Wire.begin(5,6);
  // while(!Serial);
//  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // I2Sを開始
  Serial.println("I2Sを開始しています...");
  config_i2s1 = out.defaultConfig(TX_MODE);
  config_i2s1.copyFrom(info_16k); 
  // カスタムI2S出力ピン
  config_i2s1.pin_bck = 8;
  config_i2s1.pin_ws = 7;
  config_i2s1.pin_data = 43;
  config_i2s1.pin_data_rx = 44;
  config_i2s1.is_master = false;
  out.begin(config_i2s1);

//  converter.begin(info_16k, info_48k);
  sineWave.begin(info_16k, N_B4);

  Serial.println("開始しました...");
  
}

// Arduinoループ - 音を出力にコピー
void loop() {
   copier.copy();
   if (millis() - now_time > 1000) {
    now_time = millis();
    aic3204_write_reg(0x00, 0x01);
    aic3204_write_reg(0x12, level[level_index]);
    aic3204_write_reg(0x13, level[level_index]);
    Serial.print("レベル: ");
    Serial.println(level_index);
    level_index = level_index + 2;
    if (level_index >= 10) level_index = 0;
   }
}
```