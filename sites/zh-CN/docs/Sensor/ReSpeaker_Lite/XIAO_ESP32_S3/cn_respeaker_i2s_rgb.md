---
description: I2S RGB 与 XIAO ESP32S3
title: I2S RGB 使用方法
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_i2s_rgb
last_update:
  date: 7/1/2024
  author: Jessie
---

本项目演示如何使用 reSpeaker 开发板根据通过 I2S 接口接收的音频输入强度来控制 NeoPixel LED 灯带。LED 灯带会根据音频样本的平均强度调整其亮度和颜色来响应音频。

### 硬件要求

* ReSpeaker Lite 开发板（集成 XIAO ESP32S3 微控制器）

* [Grove - RGB LED 灯条](https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html)

* 跳线


### 接线

将 NeoPixel LED 灯带连接到 reSpeaker 开发板：

* LED 灯带的数据引脚连接到 reSpeaker 的 D2 引脚

* LED 灯带的电源和地线引脚连接到适当的电源

I2S 麦克风已集成在 reSpeaker 开发板上，因此音频输入无需额外接线。


如需要，请修改代码中的以下常量：

`PIN`：连接到 NeoPixel 灯带数据引脚的引脚号（默认：D2）
`NUMPIXELS`：NeoPixel 灯带中的像素数量（默认：10）
`sampleRate`：I2S 音频输入的采样率（默认：16000 Hz）


打开`串口监视器`查看平均音频强度值。

### 功能

代码执行以下任务：

初始化 NeoPixel LED 灯带并设置其亮度。

配置 I2S 接口。

以 1024 个样本为一组，持续从 I2S 接口读取音频样本。

计算非零音频样本的绝对值总和并确定平均强度。

将平均强度映射到 NeoPixel 灯带上的活跃 LED 数量。

根据每个 LED 的位置和映射的强度值更新其颜色和亮度。

颜色沿灯带长度从蓝色过渡到绿色。
非活跃的 LED 被关闭。
在 NeoPixel 灯带上显示更新的 LED 颜色。

将平均音频强度值打印到串口监视器用于调试。

每次迭代之间延迟 100 毫秒后重复该过程。


### 代码

```cpp
/**
 * @file i2s_rgb.ino
 * @author Seeed Studio
 * @brief Making a music spectrometer
 * @version 1.0
 * @date 2024-06-28
 *
 * @copyright Copyright (c) 2024
 */

#include <ESP_I2S.h>
#include <wav_header.h>
#include <Adafruit_NeoPixel.h>

I2SClass I2S;

#define PIN        D2
#define NUMPIXELS  10
Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
#define DELAYVAL   500                                // Time (in milliseconds) to pause between pixels

const int sampleRate = 16000;                         // sample rate in Hz
const int frequency = 440;                            // frequency of square wave in Hz
const int amplitude = 500;                            // amplitude of square wave
int32_t sample = amplitude;                           // current sample value
const int halfWavelength = sampleRate / frequency;    // half wavelength of square wave

bool i2s_rgb = true;


void setup() {
  Serial.begin(115200);
//  while(!Serial);             // Wait for the serial port to connect

  strip.begin();
  strip.show();
  strip.setBrightness(20);

  I2S.setPins(8, 7, 43, 44);  // Configure I2S pins
  if (!I2S.begin(I2S_MODE_STD, sampleRate, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO)){
    Serial.println("Failed to initialize I2S!");
    while(1);                 // Halt if failed to initialize
  }
}

void loop() {
  int32_t sample_read;
  uint32_t sum = 0;
  int count = 0;

  // Reading audio data from I2S
  for (int i = 0; i < 1024; i++) {
    sample_read = I2S.read();
    if (sample_read != 0 && sample_read != 0xFFFF){
      sum += abs(sample_read);  // Calculating Absolute Value Sums
      count++;
    }
  }

  int average = sum / count;    // Calculation of average intensity
  Serial.println(average);

  int activeLEDs = map(average, 30000, 36000, 0, NUMPIXELS);  // Mapping average to LED quantity, value to map, value current range, value target range after mapping

  // Update LED strip brightness and colour
  for (int i = 0; i < NUMPIXELS; i++) {
    if (i < activeLEDs) {
      // Setting the colour according to the LED position
      int colorIntensity = map(i, 0, NUMPIXELS - 1, 0, 255);
      strip.setPixelColor(i, strip.Color(0, colorIntensity, 255 - colorIntensity));  // Transition from blue to green
    } else {
      strip.setPixelColor(i, strip.Color(0, 0, 0));  // Switching off inactive LEDs
    }
  }
  strip.show();

  delay(100);
}
```

### 自定义

您可以通过修改以下参数来自定义音频响应式 NeoPixel 灯带的行为：

`DELAYVAL`：每次像素更新之间的延迟时间（毫秒）（默认：500）
`activeLEDs 的映射范围`：调整平均强度值的范围以映射到活跃 LED 的数量（默认：30000 到 36000）
`颜色方案`：修改 strip.setPixelColor() 函数以更改颜色过渡或为 LED 使用不同的颜色