---
description: reSpeaker Flex 是一款强大的模块化语音系统，搭载 XMOS XVF3800，配备可互换的环形和线性 4 麦阵列，可实现精确的 360° 或定向音频采集——非常适合机器人和智能设备。
title: 使用 Xiao ESP32S3 控制 reSpeaker Flex 音量
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
url: https://wiki.seeedstudio.com/cn/respeaker_flex_xiao_volume_control/
---


这段代码让 **XIAO ESP32S3** 通过 I2S 接口使用**外部 AIC3104 音频编解码芯片**播放 **440Hz** 音调。它将音频输出到**耳机（HPLOUT）或线路输出（LOP）**，并允许你在串口监视器中输入 `+ `或` - `来调节音量。音调是通过代码中的正弦波生成的（而不是来自文件）。你还可以通过输入 m 来切换输出模式（耳机或线路输出）。通过 **I2C** 控制 AIC3104，设置用于音量和输出功率的寄存器。

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 线性阵列搭配 XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 环形阵列搭配 XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>


## 工作原理

代码首先通过 I2C 接口初始化 **AIC3104 音频编解码器**，配置 DAC 音量和耳机/线路输出电平等关键输出参数。接着，使用 AudioTools 库中的 SineWaveGenerator 组件生成一个**正弦波信号**（具体为 440 Hz 音调）。然后，这个音频信号通过配置好的 **I2S 接口**从 ESP32S3 发送到 AIC3104 芯片。利用 StreamCopy 对象将正弦波持续送入编解码器，实现音频数据到 I2S 流的实时传输。同时，用户可以通过**串口监视器**与系统交互，实时控制**音量级别**和**输出模式（耳机或线路输出）**。

## 串口指令

系统会响应在串口监视器中输入的简单串口命令。按下 `+` 键会将音量提高一级，而按下 `-` 键会将音量降低一级。如果按下 `m` 键，输出模式会在**耳机输出（HPLOUT）和线路输出（LOP）之间切换**。这些命令允许你在无需修改或重新上传代码的情况下，对音频输出进行实时测试和调节。

## 代码

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


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>