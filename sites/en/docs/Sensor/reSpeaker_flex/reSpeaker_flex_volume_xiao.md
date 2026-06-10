---
description: reSpeaker Flex is a powerful modular voice system featuring XMOS XVF3800, with interchangeable circular and linear 4-mic arrays for precise 360° or directional audio capture—perfect for robotics and smart devices.
title: Volume controlling reSpeaker Flex with Xiao ESP32S3
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_volume_control
sku: 100070894,100026178
last_update:
  date: 05/29/2026
  author: Kasun Thushara
createdAt: '2026-05-29'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/respeaker_flex_xiao_volume_control/
---


This code makes the **XIAO ESP32S3** play a **440Hz** tone using an **external AIC3104 audio codec chip** through the I2S interface. It sends audio output to **either headphones (HPLOUT) or line out (LOP)** and lets you adjust the volume by typing `+ `or` - `in the serial monitor. The tone is generated in code (not from a file) using a sine wave. It also allows you to switch the output mode (headphones or line out) by typing m. The AIC3104 is controlled using **I2C** to set registers for volume and output power.

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

The code begins by initializing the **AIC3104 audio codec** via the I2C interface, configuring key output parameters like DAC volume and headphone/line-out levels. Next, it generates a **sine wave signal** (specifically a 440 Hz tone) using the AudioTools library's SineWaveGenerator component. This audio signal is then streamed over the **I2S interface**, which is configured to send digital audio data from the ESP32S3 to the AIC3104 chip. The sine wave is continuously fed to the codec using a StreamCopy object, which handles real-time transfer of audio data to the I2S stream. Meanwhile, the user can interact with the system via the **serial monitor**, allowing on-the-fly control of the **volume level** and **output mode (headphone or line-out)**.

## Serial Commands

The system responds to simple serial commands typed into the Serial Monitor. Pressing the `+` key will increase the volume by one level, while pressing the `-` key will decrease it. If you press the `m` key, the output mode will **toggle between headphone output (HPLOUT) and line output (LOP)**. These commands allow real-time testing and tuning of the audio output without modifying or re-uploading the code.

## Code

```c
#include <Wire.h>
#include "AudioTools.h"

// AIC3104 I2C address
#define AIC3104_ADDR 0x18

// Register addresses
#define AIC3104_PAGE_CTRL        0x00
#define AIC3104_LEFT_DAC_VOLUME  0x2B
#define AIC3104_RIGHT_DAC_VOLUME 0x2C
#define AIC3104_HPLOUT_LEVEL     0x33
#define AIC3104_HPROUT_LEVEL     0x41
#define AIC3104_LEFT_LOP_LEVEL   0x56
#define AIC3104_RIGHT_LOP_LEVEL  0x5D

// Audio: 16kHz, stereo, 16-bit
AudioInfo info(16000, 2, 32);
SineWaveGenerator<int16_t> sineWave(32000);
GeneratedSoundStream<int16_t> sound(sineWave);
I2SStream out;
StreamCopy copier(out, sound);

// Volume: range 0–17 (0–8 = DAC range, 9–17 = analog boost)
int volume = 3;  // Changed from 8 to 3 for quieter start
bool useHPOUT = true; // true = HPLOUT (headphone), false = LOP (line out)

void aic3104_reg_write(uint8_t reg, uint8_t val) {
  Wire.beginTransmission(AIC3104_ADDR);
  Wire.write(reg);
  Wire.write(val);
  Wire.endTransmission();
}

void setupAIC3104() {
  Wire.begin();
  aic3104_reg_write(AIC3104_PAGE_CTRL, 0x00);

  // Set default 0dB DAC volume
  aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME,  0x00);
  aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

  // Set output to 0dB, unmuted, powered up
  aic3104_reg_write(AIC3104_HPLOUT_LEVEL,   0x0D);
  aic3104_reg_write(AIC3104_HPROUT_LEVEL,   0x0D);
  aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL,  0x0B);
  aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
}

void setVolume(int vol) {
  vol = constrain(vol, 0, 17);
  volume = vol;

  if (vol <= 8) {
    // ✅ FIX: DAC register is attenuation — invert so higher vol = less attenuation
    // vol=8 → dacVal=0  (0 dB, loudest)
    // vol=0 → dacVal=72 (−72 dB, quietest)
    uint8_t dacVal = (8 - vol) * 9;
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME,  dacVal);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, dacVal);

    // Output level fixed at 0dB
    aic3104_reg_write(AIC3104_HPLOUT_LEVEL,   0x0D);
    aic3104_reg_write(AIC3104_HPROUT_LEVEL,   0x0D);
    aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL,  0x0B);
    aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
  } else {
    // DAC at max (0 dB), boost via analog output stage
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME,  0x00);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

    uint8_t gain   = vol - 8;          // +1 to +9 dB above unity
    uint8_t outVal = (gain << 4) | 0x0B;

    if (useHPOUT) {
      aic3104_reg_write(AIC3104_HPLOUT_LEVEL, outVal);
      aic3104_reg_write(AIC3104_HPROUT_LEVEL, outVal);
    } else {
      aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL,  outVal);
      aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, outVal);
    }
  }

  // ✅ FIX: corrected dB label (attenuation = how far below max, not vol*1)
  Serial.print("Volume: step ");
  Serial.print(volume);
  Serial.print("/17  (");
  if (vol <= 8) {
    int dbAtten = (8 - vol) * 9;
    Serial.print("-");
    Serial.print(dbAtten);
    Serial.print(" dB DAC attenuation)");
  } else {
    Serial.print("+");
    Serial.print(vol - 8);
    Serial.print(" dB analog boost)");
  }
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  while (!Serial);

  setupAIC3104();
  setVolume(volume);  // This will now start at 3/17

  auto config = out.defaultConfig(TX_MODE);
  config.copyFrom(info);
  config.pin_bck  = 8;
  config.pin_ws   = 7;
  config.pin_data = 44;
  config.is_master = false;

  out.begin(config);
  sineWave.begin(info, N_A4); // 440 Hz tone
}

void loop() {
  copier.copy();

  if (Serial.available()) {
    char c = Serial.read();

    if (c == '+' && volume < 17) {
      setVolume(volume + 1);
    } else if (c == '-' && volume > 0) {
      setVolume(volume - 1);
    } else if (c == 'm') {
      useHPOUT = !useHPOUT;
      setVolume(volume);
      Serial.print("Output switched to: ");
      Serial.println(useHPOUT ? "HPLOUT (headphone)" : "LOP (line out)");
    }
  }
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