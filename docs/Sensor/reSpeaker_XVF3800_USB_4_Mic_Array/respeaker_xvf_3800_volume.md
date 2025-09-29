---
description: The ReSpeaker XVF3800 USB 4-Mic Array is a professional circular microphone array with AEC, beamforming, noise suppression, and 360° voice capture. Paired with the XIAO ESP32S3, it enables advanced voice control for smart devices, robotics, and IoT applications. Discover seamless integration and dual-mode flexibility.

title: reSpeaker XVF3800 Audio Playback and Volume Control via I2C

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /respeaker_xvf3800_xiao_volume
last_update:
  date: 7/16/2025
  author: Kasun Thushara
---

This code makes the **XIAO ESP32S3** play a **440Hz** tone using an **external AIC3104 audio codec chip** through the I2S interface. It sends audio output to **either headphones (HPLOUT) or line out (LOP)** and lets you adjust the volume by typing `+ `or` - `in the serial monitor. The tone is generated in code (not from a file) using a sine wave. It also allows you to switch the output mode (headphones or line out) by typing m. The AIC3104 is controlled using **I2C** to set registers for volume and output power.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## How It Works

The code begins by initializing the **AIC3104 audio codec** via the I2C interface, configuring key output parameters like DAC volume and headphone/line-out levels. Next, it generates a **sine wave signal** (specifically a 440 Hz tone) using the AudioTools library's SineWaveGenerator component. This audio signal is then streamed over the **I2S interface**, which is configured to send digital audio data from the ESP32S3 to the AIC3104 chip. The sine wave is continuously fed to the codec using a StreamCopy object, which handles real-time transfer of audio data to the I2S stream. Meanwhile, the user can interact with the system via the **serial monitor**, allowing on-the-fly control of the **volume level** and **output mode (headphone or line-out)**.

## Serial Commands

The system responds to simple serial commands typed into the Serial Monitor. Pressing the `+` key will increase the volume by one level, while pressing the `-` key will decrease it. If you press the `m` key, the output mode will **toggle between headphone output (HPLOUT) and line output (LOP)**. These commands allow real-time testing and tuning of the audio output without modifying or re-uploading the code.

## Code

```bash
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
AudioInfo info(16000, 2, 16);
SineWaveGenerator<int16_t> sineWave(32000);
GeneratedSoundStream<int16_t> sound(sineWave);
I2SStream out;
StreamCopy copier(out, sound);

// Volume: range 0–17 (0–8 = DAC, 9–17 = analog boost)
int volume = 8;
bool useHPOUT = true; // true = use HPLOUT, false = use LOP

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
  aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00);
  aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

  // Set output to 0dB, unmuted, powered up
  aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D);
  aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D);
  aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x0B);
  aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
}

void setVolume(int vol) {
  vol = constrain(vol, 0, 17);
  volume = vol;

  if (vol <= 8) {
    // DAC attenuation
    uint8_t dacVal = vol * 9; // 0dB to -72dB
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, dacVal);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, dacVal);

    // Output level fixed to 0dB
    aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D);
    aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D);
    aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x0B);
    aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
  } else {
    // DAC at 0dB
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

    // Boost output gain via HPLOUT or LOP
    uint8_t gain = (vol - 8); // from +1 to +9 dB
    uint8_t outVal = (gain << 4) | 0x0B; // Set gain and power/mute bits

    if (useHPOUT) {
      aic3104_reg_write(AIC3104_HPLOUT_LEVEL, outVal);
      aic3104_reg_write(AIC3104_HPROUT_LEVEL, outVal);
    } else {
      aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, outVal);
      aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, outVal);
    }
  }

  // Debug info
  Serial.print("Volume set to ");
  Serial.print(volume);
  Serial.print(" (");
  if (vol <= 8) Serial.print("-" + String(volume * 1) + " dB)");
  else Serial.print("+" + String((vol - 8)) + " dB)");
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  while (!Serial);

  setupAIC3104();
  setVolume(volume);

  auto config = out.defaultConfig(TX_MODE);
  config.copyFrom(info);
  config.pin_bck = 8;
  config.pin_ws = 7;
  config.pin_data = 44;
  config.is_master = true;

  out.begin(config);
  sineWave.begin(info, N_A4); // 440Hz tone
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
      Serial.print("Switched to ");
      Serial.println(useHPOUT ? "HPLOUT (headphone)" : "LOP (line out)");
    }
  }
}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/volumecontrol.PNG" alt="pir" width={600} height="auto" /></p>

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