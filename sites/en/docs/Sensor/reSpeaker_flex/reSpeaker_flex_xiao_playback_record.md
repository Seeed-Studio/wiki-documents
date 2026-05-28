---
description: reSpeaker Flex is a powerful modular voice system featuring XMOS XVF3800, with interchangeable circular and linear 4-mic arrays for precise 360° or directional audio capture—perfect for robotics and smart devices.
title: Record and Playback reSpeaker Flex with Xiao ESP32S3
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
url: https://wiki.seeedstudio.com/respeaker_flex_xiao_playback_record/
---

# reSpeaker Flex Record and Playback Audio Using I2S

## Objective

The goal of this sketch is to **record audio data from the reSpeaker Flex XVF3800 voice processor** using the I2S interface on an ESP32-S3, **store it temporarily in memory**, and then **play it back** through the same audio path. This kind of loopback test helps verify whether both input and output channels of the XVF3800 are correctly initialized and working, especially when controlled via I2C.

## Code Overview

At the top, we configure an AudioInfo object specifying **16kHz sample rate, 2 audio channels, and 32-bit depth** per sample, which matches typical XVF3800 audio settings. The I2SStream object named out is used for both recording (RX mode) and playback (TX mode).
The setup() function initializes the serial console for debugging, sets up the I2S peripheral with custom pins **(BCK = pin 8, WS = pin 7, DATA OUT = pin 44, DATA IN = pin 43)**, and configures the ESP32 as the I2S master device. This setup reflects the hardware wiring between the ESP32 and reSpeaker Flex XVF3800 module.
In the loop() function, the I2S output is first stopped with out.end(), then reconfigured into **RX** mode to record incoming audio data from XVF3800’s output. It uses out.readBytes() to fill the buffer[] with raw audio samples. After recording, it switches back to **TX mode**, re-initializes I2S, and sends the audio back out using out.write(). This creates a full **record–store–playback cycle** every loop iteration.

:::note
The firmware used in this example is the I2S 16 kHz version. Make sure your XIAO ESP32S3 firmware is configured for I2S audio at 16 kHz.
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
