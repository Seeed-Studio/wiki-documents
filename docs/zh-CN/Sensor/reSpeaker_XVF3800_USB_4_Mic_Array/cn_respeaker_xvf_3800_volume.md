---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款专业的圆形麦克风阵列，具有 AEC、波束成形、噪声抑制和 360° 语音捕获功能。与 XIAO ESP32S3 配对使用，可为智能设备、机器人和物联网应用提供先进的语音控制。探索无缝集成和双模式灵活性。

title: reSpeaker XVF3800 通过 I2C 进行音频播放和音量控制

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /cn/respeaker_xvf3800_xiao_volume
last_update:
  date: 7/16/2025
  author: Kasun Thushara
---

此代码使 **XIAO ESP32S3** 通过 I2S 接口使用 **外部 AIC3104 音频编解码器芯片** 播放 **440Hz** 音调。它将音频输出发送到 **耳机 (HPLOUT) 或线路输出 (LOP)**，并允许您通过在串行监视器中输入 `+` 或 `-` 来调节音量。音调是在代码中生成的（不是从文件中），使用正弦波。它还允许您通过输入 m 来切换输出模式（耳机或线路输出）。AIC3104 通过 **I2C** 控制，用于设置音量和输出功率的寄存器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 工作原理

代码首先通过 I2C 接口初始化 **AIC3104 音频编解码器**，配置关键输出参数，如 DAC 音量和耳机/线路输出电平。接下来，它使用 AudioTools 库的 SineWaveGenerator 组件生成 **正弦波信号**（特别是 440 Hz 音调）。然后通过 **I2S 接口** 流式传输此音频信号，该接口配置为将数字音频数据从 ESP32S3 发送到 AIC3104 芯片。使用 StreamCopy 对象将正弦波连续馈送到编解码器，该对象处理音频数据到 I2S 流的实时传输。同时，用户可以通过 **串行监视器** 与系统交互，允许实时控制 **音量级别** 和 **输出模式（耳机或线路输出）**。

## 串行命令

系统响应输入到串行监视器中的简单串行命令。按 `+` 键将音量增加一级，而按 `-` 键将降低音量。如果您按 `m` 键，输出模式将 **在耳机输出 (HPLOUT) 和线路输出 (LOP) 之间切换**。这些命令允许实时测试和调整音频输出，无需修改或重新上传代码。

## 代码

```bash
#include <Wire.h>
#include "AudioTools.h"

// AIC3104 I2C 地址
#define AIC3104_ADDR 0x18

// 寄存器地址
#define AIC3104_PAGE_CTRL        0x00
#define AIC3104_LEFT_DAC_VOLUME  0x2B
#define AIC3104_RIGHT_DAC_VOLUME 0x2C
#define AIC3104_HPLOUT_LEVEL     0x33
#define AIC3104_HPROUT_LEVEL     0x41
#define AIC3104_LEFT_LOP_LEVEL   0x56
#define AIC3104_RIGHT_LOP_LEVEL  0x5D

// 音频：16kHz，立体声，16位
AudioInfo info(16000, 2, 16);
SineWaveGenerator<int16_t> sineWave(32000);
GeneratedSoundStream<int16_t> sound(sineWave);
I2SStream out;
StreamCopy copier(out, sound);

// 音量：范围 0–17（0–8 = DAC，9–17 = 模拟增益）
int volume = 8;
bool useHPOUT = true; // true = 使用 HPLOUT，false = 使用 LOP

void aic3104_reg_write(uint8_t reg, uint8_t val) {
  Wire.beginTransmission(AIC3104_ADDR);
  Wire.write(reg);
  Wire.write(val);
  Wire.endTransmission();
}

void setupAIC3104() {
  Wire.begin();
  aic3104_reg_write(AIC3104_PAGE_CTRL, 0x00);

  // 设置默认 0dB DAC 音量
  aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00);
  aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

  // 设置输出为 0dB，未静音，已上电
  aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D);
  aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D);
  aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x0B);
  aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
}

void setVolume(int vol) {
  vol = constrain(vol, 0, 17);
  volume = vol;

  if (vol <= 8) {
    // DAC 衰减
    uint8_t dacVal = vol * 9; // 0dB 到 -72dB
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, dacVal);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, dacVal);

    // 输出电平固定为 0dB
    aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D);
    aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D);
    aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x0B);
    aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
  } else {
    // DAC 设为 0dB
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

    // 通过 HPLOUT 或 LOP 增强输出增益
    uint8_t gain = (vol - 8); // 从 +1 到 +9 dB
    uint8_t outVal = (gain << 4) | 0x0B; // 设置增益和电源/静音位

    if (useHPOUT) {
      aic3104_reg_write(AIC3104_HPLOUT_LEVEL, outVal);
      aic3104_reg_write(AIC3104_HPROUT_LEVEL, outVal);
    } else {
      aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, outVal);
      aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, outVal);
    }
  }

  // 调试信息
  Serial.print("音量设置为 ");
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
  sineWave.begin(info, N_A4); // 440Hz 音调
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
      Serial.print("切换到 ");
      Serial.println(useHPOUT ? "HPLOUT (耳机)" : "LOP (线路输出)");
    }
  }
}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/volumecontrol.PNG" alt="pir" width={600} height="auto" /></p>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>