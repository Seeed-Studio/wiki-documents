---
description: ReSpeaker Lite RGB 测试
title: RGB 测试
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_rgb_test
last_update:
  date: 9/27/2024
  author: Jessie
---


### 功能


ReSpeaker Lite 板上的 RGB 灯使用 WS2812 芯片，通过 `GPIO1` 引脚控制。该项目循环显示不同的颜色（红色、绿色、蓝色和白色），以确保 RGB 灯正常工作。


### 代码

```cpp
#include <Adafruit_NeoPixel.h>

// Define parameters for the LED strip
#define PIN 1            // Pin connected to the RGB LED
#define NUMPIXELS 1      // Number of LEDs

Adafruit_NeoPixel strip(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);  // Initialize the LED strip object

void setup() {
  // Initialize the serial monitor for debugging
  Serial.begin(115200);
  
  // Initialize the RGB LED strip
  strip.begin();
  strip.show();  // Initialize all pixels to the off state
}

void loop() {
  // Red color test
  Serial.println("Red color test");
  strip.setPixelColor(0, strip.Color(255, 0, 0));  // Set the first pixel to red
  strip.show();  // Update the strip display
  delay(1000);   // Delay for 1 second

  // Green color test
  Serial.println("Green color test");
  strip.setPixelColor(0, strip.Color(0, 255, 0));  // Set the first pixel to green
  strip.show();
  delay(1000);

  // Blue color test
  Serial.println("Blue color test");
  strip.setPixelColor(0, strip.Color(0, 0, 255));  // Set the first pixel to blue
  strip.show();
  delay(1000);

  // White color test
  Serial.println("White color test");
  strip.setPixelColor(0, strip.Color(255, 255, 255));  // Set the first pixel to white
  strip.show();
  delay(1000);

  // Turn off the LED
  Serial.println("Turn off the LED");
  strip.setPixelColor(0, strip.Color(0, 0, 0));  // Turn off the first pixel
  strip.show();
  delay(1000);
}
```


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/rgb_led.gif" alt="pir" width={400} height="auto" /></p>


### 配置

`strip.setPixelColor`：设置灯带中 LED 的颜色。

`strip.show`：将颜色变化应用到 LED。