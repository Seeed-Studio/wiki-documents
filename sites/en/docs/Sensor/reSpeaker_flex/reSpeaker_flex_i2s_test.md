---
description: reSpeaker Flex is a powerful modular voice system featuring XMOS XVF3800, with interchangeable circular and linear 4-mic arrays for precise 360° or directional audio capture—perfect for robotics and smart devices.
title: reSpeaker Flex with XIAO ESP32S3 I2S Test
keywords:
  - reSpeaker Flex
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_flex_xiao_i2s
last_update:
  date: 4/16/2025
  author: Kasun Thushara
createdAt: '2026-04-16'
updatedAt: '2025-04-16'
url: https://wiki.seeedstudio.com/respeaker_flex_xiao_i2s/
---

This project serves as a test sketch to verify the functionality of the I2S interface between the **XIAO ESP32S3** and the **ReSpeaker Flex**. The goal is to confirm that data transmission and reception through the I2S bus are working correctly. To achieve this, the sketch generates a synthetic square wave audio signal and writes it to the I2S interface. It then reads audio data from the ReSpeaker Flex microphone array and verifies the integrity of the received samples.



<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear with XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular with XIAO ESP32S3</th>
    
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>


## How It Works

This sketch tests full-duplex I2S communication between the XIAO ESP32S3 and the ReSpeaker Flex. It generates a 440 Hz square wave signal and continuously writes it to the I2S transmit line while simultaneously reading incoming audio samples from the microphone array. The received data is analyzed to count valid (non-zero) samples as a basic integrity check. Based on the number of valid samples, the program determines whether the I2S receive path is functioning correctly.

```c
#include "AudioTools.h"

const int sampleRate = 16000;  // Hz
const int frequency = 440;     // Hz square wave
const int amplitude = 500;     // peak value
const int halfWavelength = sampleRate / frequency;

AudioInfo info(sampleRate, 2, 32); // stereo, 16-bit
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


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
