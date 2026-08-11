---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款专业的环形麦克风阵列，具备 AEC、波束成形、噪声抑制和 360° 语音采集功能。与 XIAO ESP32S3 搭配使用，可为智能设备、机器人和物联网应用提供高级语音控制能力。探索无缝集成与双模式的灵活性。
title: reSpeaker XVF3800 USB Mic Array 搭配 XIAO ESP32S3 的 DoA 和 VAD
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf3800_xiao_doa_vad
sku: 114993702,114993700
last_update:
  date: 1/23/2025
  author: Kasun Thushara
createdAt: '2026-01-23'
updatedAt: '2026-01-23'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf3800_xiao_doa_vad/
---

## 介绍 

ReSpeaker XVF3800 是一款基于 XMOS XVF3800 的多麦克风语音处理解决方案，专为需要实时音频智能的嵌入式应用而设计。XVF3800 在内部计算语音活动检测（VAD）和到达方向（DoA），用于指示何时存在语音以及语音来自哪个方向。主控 MCU 可以通过 I2C 使用基于资源的命令直接访问这些推理结果，从而在无需在主控上处理原始音频的情况下，实现语音唤醒、声源定位和方向感知反馈等功能。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>


:::note
支持此代码的固件为 `respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.x_48k_test5.bin` 和 `respeaker_xvf3800_i2s_dfu_firmware_v1.0.7.bin`。因此请务必先烧录固件
:::

## Arduino 代码 

```cpp
#include <Wire.h>

#define XMOS_ADDR 0x2C  // I2C 7-bit address

#define GPO_SERVICER_RESID            20
#define GPO_SERVICER_RESID_LED_EFFECT 12
#define GPO_SERVICER_RESID_DOA        19
#define GPO_DOA_READ_NUM_BYTES        4

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(2000);
  Serial.println("XVF3800 DoA Read Test Starting...");
  write_led_effect(4);
}

void loop() {
  uint16_t doa_values[2] = {0};
  uint8_t status = 0xFF;

  bool success = read_doa_values((uint8_t *)doa_values, &status);

  if (success) {
    Serial.print("I2C Communication SUCCESS. Status byte: 0x");
    Serial.print(status, HEX);
    Serial.print(" | DOA_VALUE: ");
    Serial.print(doa_values[0]);
    Serial.print(" | SPEECH_DETECTED: ");
    Serial.println(doa_values[1]);
  } else {
    Serial.println("Failed to read DoA values.");
  }

  delay(1000);
}

bool read_versions(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = 48;
  const uint8_t cmd = 0 | 0x80;
  const uint8_t read_len = 3;

  // Step 1: Write command
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(read_len + 1);
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  // Step 2: Read response (status + payload)
  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

bool read_doa_values(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = GPO_SERVICER_RESID;
  const uint8_t cmd = GPO_SERVICER_RESID_DOA | 0x80;
  const uint8_t read_len = GPO_DOA_READ_NUM_BYTES;

  // Step 1: Write command
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(read_len + 1);
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  // Step 2: Read response (status + payload)
  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

void write_led_effect(uint8_t effect) {
  Wire.beginTransmission(XMOS_ADDR); // Begin I2C transmission to XVF3800
  Wire.write(GPO_SERVICER_RESID);                 // Write the resource ID
  Wire.write(GPO_SERVICER_RESID_LED_EFFECT);                   // Write the command ID
  Wire.write(1);       // Write number of payload bytes
  Wire.write(effect);           // Write each payload byte
  Wire.endTransmission();           // End the I2C transmission
}

```

**预期输出**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/doa_vad_i2c.png" alt="pir" width={800} height="auto" /></p>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将通过多种支持方式，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

