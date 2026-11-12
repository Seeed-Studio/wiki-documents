---
description: 通过在 I2C 总线上写入 AIC3104 DAC 和模拟输出寄存器，并使用 440 Hz 测试音来听到变化，从 XIAO ESP32-S3 Plus 控制 reSpeaker XVF3800 44mm 的播放音量。
title: 使用 XIAO ESP32-S3 Plus 控制 reSpeaker XVF3800 44mm 音量
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - AIC3104
  - 音量控制
  - xvf3800
  - I2C
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_volume_control
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/cn/respeaker_44mm_xiao_volume_control/
---
# 使用 XIAO ESP32-S3 Plus 控制 reSpeaker XVF3800 44mm 音量

该示例让 XIAO ESP32-S3 Plus 通过 I2S 使用板载 **AIC3104** 编解码器播放生成的 **440 Hz** 音调，然后通过在串口监视器中输入 `+` 或 `-` 来调节音量。输入 `m` 可以在耳机输出（`HPLOUT`/`HPROUT`）和线路输出（`LOP`）之间切换，且编解码器完全通过 I2C 配置。该音调在代码中合成，因此不需要音频文件。

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 前置条件

- 阵列必须运行 **I2S 固件**，因为 XVF3800 提供 I2S 时钟。请参阅 [Update Firmware](https://wiki.seeedstudio.com/cn/respeaker_44mm_introduction/#update-firmware)。
- 已安装带有 ESP32 开发板包和 **Arduino Audio Tools** 库的 Arduino IDE。请参阅 [Software Preparation](https://wiki.seeedstudio.com/cn/respeaker_44mm_xiao_getting_started/#software-preparation)。
- 在开发板中选择 **XIAO_ESP32S3_Plus**，并选择对应的端口号。
- 在 JST 接插件上连接扬声器，或在 3.5 mm 插孔上连接耳机。



:::note
AIC3104 与 XVF3800 共享 I2C 总线。XMOS 固件和板载音量按键也可以写入相同的寄存器，因此由 XIAO 设置的电平可能会在之后被覆盖。
:::

## 音量映射

该示例提供了一个 0–17 的音量刻度，在数字衰减和模拟增益之间进行分配：

| 音量 | 结果 |
|--------|--------|
| `0` | −8 dB（DAC 衰减） |
| `8` | 0 dB（参考值，DAC 满量程） |
| `9` … `17` | +1 dB … +9 dB 模拟输出增益 |

从 0 到 8，DAC 以 **0.5 dB 步进** 进行衰减（`(8 − volume) × 2`）。从 9 到 17，DAC 保持在 0 dB，模拟输出级则提升 `volume − 8` dB。

## 寄存器映射

| 寄存器 | 地址 | 作用 |
|----------|---------|---------|
| 页面控制 | `0x00` | 选择寄存器页 0 |
| 左声道 DAC 音量 | `0x2B` | 数字衰减，每步 0.5 dB |
| 右声道 DAC 音量 | `0x2C` | 数字衰减，每步 0.5 dB |
| HPLOUT 电平 | `0x33` | 左声道耳机输出 |
| HPROUT 电平 | `0x41` | 右声道耳机输出 |
| LEFT_LOP 电平 | `0x56` | 左声道线路输出 |
| RIGHT_LOP 电平 | `0x5D` | 右声道线路输出 |

输出寄存器位：**D7–D4** = 模拟增益（`0`–`9` dB），**D3** = 取消静音，**D0** = 上电。耳机寄存器还会设置 **D2**（掉电时为高阻抗），这就是它们使用 `0x0D` 作为固定低 4 位的原因，而线路输出寄存器使用 `0x09`。

## 工作原理

1. `setup()` 以 100 kHz 启动 I2C 并写入 AIC3104 页面控制寄存器，然后将两个 DAC 通道设置为 0 dB，并以 0 dB 取消静音/上电耳机和线路输出。
2. `setVolume()` 将请求的音量级别拆分为 DAC 衰减值和模拟增益值，写入全部四个输出寄存器，并回读左声道 DAC 寄存器以进行确认。
3. 在 `TX_MODE` 下启动 I2S，48 kHz、立体声、32 位，XIAO 作为从机，由 XVF3800 驱动 BCLK 和 LRCLK。
4. `SineWaveGenerator` 以 32 位满量程的 25 % 生成 440 Hz 音调，封装在 `GeneratedSoundStream` 中，并由 `StreamCopy` 复制到 I2S。
5. `loop()` 保持音调持续播放，并处理来自串口监视器的单字符命令。

## 串口命令

| 按键 | 动作 |
|-----|--------|
| `+` | 增大音量（最高到 17） |
| `-` | 减小音量（最低到 0） |
| `m` | 在耳机输出和线路输出之间切换 |
| `v` | 打印当前音量 |
| `h` | 显示命令列表 |

## 代码

```c
#include <Wire.h>
#include "AudioTools.h"

// =====================================================
// AIC3104 I2C CONFIGURATION
// =====================================================

#define AIC3104_ADDR 0x18

#define I2C_SDA_PIN 5
#define I2C_SCL_PIN 6

// Register addresses
#define AIC3104_PAGE_CTRL         0x00

#define AIC3104_LEFT_DAC_VOLUME   0x2B
#define AIC3104_RIGHT_DAC_VOLUME  0x2C

#define AIC3104_HPLOUT_LEVEL      0x33
#define AIC3104_HPROUT_LEVEL      0x41

#define AIC3104_LEFT_LOP_LEVEL    0x56
#define AIC3104_RIGHT_LOP_LEVEL   0x5D


// =====================================================
// I2S CONFIGURATION
// =====================================================

#define SAMPLE_RATE 48000
#define CHANNELS    2
#define BITS        32

AudioInfo info(SAMPLE_RATE, CHANNELS, BITS);

// 440Hz sine wave, 25% of 32-bit full scale
SineWaveGenerator<int32_t> sineWave(0x20000000);

GeneratedSoundStream<int32_t> sound(sineWave);

I2SStream out;
StreamCopy copier(out, sound);


// =====================================================
// VOLUME CONFIGURATION
// =====================================================

// Volume: 0 to 17
// 0  = -8dB
// 8  =  0dB
// 17 = +9dB

int volume = 8;

// true  = HPLOUT / HPROUT
// false = LEFT_LOP / RIGHT_LOP

bool useHPOUT = true;


// =====================================================
// AIC3104 REGISTER WRITE
// =====================================================

bool aic3104_reg_write(uint8_t reg, uint8_t val) {

    Wire.beginTransmission(AIC3104_ADDR);

    Wire.write(reg);
    Wire.write(val);

    uint8_t error = Wire.endTransmission();

    if (error != 0) {

        Serial.printf(
            "I2C WRITE ERROR: Register 0x%02X, Error %u\n",
            reg,
            error
        );

        return false;
    }

    return true;
}


// =====================================================
// AIC3104 REGISTER READ
// =====================================================

bool aic3104_reg_read(uint8_t reg, uint8_t &value) {

    Wire.beginTransmission(AIC3104_ADDR);

    Wire.write(reg);

    if (Wire.endTransmission(false) != 0) {
        return false;
    }

    if (Wire.requestFrom(
            (uint8_t)AIC3104_ADDR,
            (uint8_t)1
        ) != 1) {

        return false;
    }

    value = Wire.read();

    return true;
}


// =====================================================
// INITIALIZE AIC3104
// =====================================================

bool setupAIC3104() {

    Serial.println("\nInitializing AIC3104...");

    // Select register page 0
    if (!aic3104_reg_write(AIC3104_PAGE_CTRL, 0x00)) {
        return false;
    }

    // DAC digital volume: 0dB, unmuted
    if (!aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00))
        return false;

    if (!aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00))
        return false;

    // HPLOUT / HPROUT:
    // 0dB, unmuted, powered up
    if (!aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D))
        return false;

    if (!aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D))
        return false;

    // LEFT_LOP / RIGHT_LOP:
    // 0dB, unmuted, powered up
    // Bit 2 is reserved; write it as zero.
    if (!aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x09))
        return false;

    if (!aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x09))
        return false;

    Serial.println("AIC3104 initialized successfully");

    return true;
}


// =====================================================
// SET OUTPUT ANALOG GAIN
// =====================================================

bool setOutputGain(uint8_t gain) {

    gain = constrain(gain, 0, 9);

    // Reset inactive output to 0dB.
    // Keep active output at requested gain.

    uint8_t hpGain =
        useHPOUT ? gain : 0;

    uint8_t lopGain =
        useHPOUT ? 0 : gain;

    // HP registers:
    // D7-D4 = 0 to +9dB
    // D3 = 1 (unmuted)
    // D2 = 1 (high impedance when powered down)
    // D0 = 1 (powered up)

    uint8_t hpValue =
        (hpGain << 4) | 0x0D;

    // LOP registers:
    // D7-D4 = 0 to +9dB
    // D3 = 1 (unmuted)
    // D2 = 0 (reserved)
    // D0 = 1 (powered up)

    uint8_t lopValue =
        (lopGain << 4) | 0x09;

    bool ok = true;

    ok &= aic3104_reg_write(
        AIC3104_HPLOUT_LEVEL,
        hpValue
    );

    ok &= aic3104_reg_write(
        AIC3104_HPROUT_LEVEL,
        hpValue
    );

    ok &= aic3104_reg_write(
        AIC3104_LEFT_LOP_LEVEL,
        lopValue
    );

    ok &= aic3104_reg_write(
        AIC3104_RIGHT_LOP_LEVEL,
        lopValue
    );

    return ok;
}


// =====================================================
// SET VOLUME
// =====================================================

void setVolume(int vol) {

    vol = constrain(vol, 0, 17);

    volume = vol;

    uint8_t dacValue;
    uint8_t analogGain;

    if (vol <= 8) {

        // DAC attenuation:
        // Volume 0 = -8dB
        // Volume 8 =  0dB

        int attenuationDB = 8 - vol;

        // AIC3104 DAC step = 0.5dB
        dacValue = attenuationDB * 2;

        analogGain = 0;

    } else {

        // DAC at 0dB
        dacValue = 0;

        // Analog boost: +1dB to +9dB
        analogGain = vol - 8;
    }

    // Update left and right DAC
    bool ok = true;

    ok &= aic3104_reg_write(
        AIC3104_LEFT_DAC_VOLUME,
        dacValue
    );

    ok &= aic3104_reg_write(
        AIC3104_RIGHT_DAC_VOLUME,
        dacValue
    );

    // Update analog output gain
    ok &= setOutputGain(analogGain);

    if (!ok) {

        Serial.println("Volume update failed!");
        return;
    }

    // Debug output

    Serial.println("\n------------------------------");

    Serial.printf(
        "Volume level: %d / 17\n",
        volume
    );

    if (vol <= 8) {

        Serial.printf(
            "DAC attenuation: -%d dB\n",
            8 - vol
        );

    } else {

        Serial.printf(
            "Analog output gain: +%d dB\n",
            analogGain
        );
    }

    Serial.printf(
        "Output mode: %s\n",
        useHPOUT ? "HPLOUT" : "LINE OUT"
    );

    Serial.printf(
        "DAC register: 0x%02X\n",
        dacValue
    );

    uint8_t readValue;

    if (aic3104_reg_read(
            AIC3104_LEFT_DAC_VOLUME,
            readValue
        )) {

        Serial.printf(
            "DAC readback: 0x%02X\n",
            readValue
        );
    }

    Serial.println("------------------------------");
}


// =====================================================
// SERIAL CONTROL
// =====================================================

void handleSerial() {

    while (Serial.available()) {

        char c = Serial.read();

        if (c == '+') {

            if (volume < 17) {
                setVolume(volume + 1);
            } else {
                Serial.println("Maximum volume reached");
            }

        } else if (c == '-') {

            if (volume > 0) {
                setVolume(volume - 1);
            } else {
                Serial.println("Minimum volume reached");
            }

        } else if (c == 'm' || c == 'M') {

            useHPOUT = !useHPOUT;

            setVolume(volume);

        } else if (c == 'v' || c == 'V') {

            Serial.printf(
                "Current volume: %d / 17\n",
                volume
            );

        } else if (c == 'h' || c == 'H') {

            Serial.println("\nCommands:");
            Serial.println("+ : Increase volume");
            Serial.println("- : Decrease volume");
            Serial.println("m : Switch HP / LINE output");
            Serial.println("v : Show current volume");
            Serial.println("h : Show help");
        }
    }
}


// =====================================================
// SETUP
// =====================================================

void setup() {

    Serial.begin(115200);

    while (!Serial);

    Serial.println("\n================================");
    Serial.println("ReSpeaker 44mm Volume Test");
    Serial.println("XVF3800 + AIC3104");
    Serial.println("================================");

    // Initialize I2C
    Wire.begin(
        I2C_SDA_PIN,
        I2C_SCL_PIN
    );

    Wire.setClock(100000);

    delay(100);

    Serial.println("I2C initialized");

    // Initialize AIC3104
    if (!setupAIC3104()) {

        Serial.println("AIC3104 initialization FAILED!");

        while (true) {
            delay(1000);
        }
    }

    // Set starting volume
    setVolume(volume);

    // Initialize I2S output
    auto config = out.defaultConfig(TX_MODE);

    config.copyFrom(info);

    config.pin_bck = 8;     // D9 / GPIO8
    config.pin_ws = 7;      // D8 / GPIO7
    config.pin_data = 44;   // D7 / GPIO44

    // XVF3800 provides I2S clocks
    config.is_master = false;

    if (!out.begin(config)) {

        Serial.println("I2S initialization FAILED!");

        while (true) {
            delay(1000);
        }
    }

    // Start 440Hz sine wave
    sineWave.begin(info, N_A4);

    Serial.println("\nI2S started");
    Serial.println("440Hz test tone playing");

    Serial.println("\nVolume control ready:");
    Serial.println("+ : Increase volume");
    Serial.println("- : Decrease volume");
    Serial.println("m : Switch HP / LINE output");
    Serial.println("v : Show current volume");
    Serial.println("h : Show help");
}


// =====================================================
// LOOP
// =====================================================

void loop() {

    // Continuously transmit 440Hz test tone
    copier.copy();

    // Check serial commands
    handleSerial();
}
```

## 预期输出

```text
================================
ReSpeaker 44mm Volume Test
XVF3800 + AIC3104
================================
I2C initialized

Initializing AIC3104...
AIC3104 initialized successfully

------------------------------
Volume level: 8 / 17
Output mode: HPLOUT
DAC register: 0x00
DAC readback: 0x00
------------------------------

I2S started
440Hz test tone playing

Volume control ready:
+ : Increase volume
- : Decrease volume
m : Switch HP / LINE output
v : Show current volume
h : Show help
```

Send `+` to step up. Above level 8 the log switches to `Analog output gain: +N dB`:

```text
------------------------------
Volume level: 10 / 17
Analog output gain: +2 dB
Output mode: HPLOUT
DAC register: 0x00
DAC readback: 0x00
------------------------------
```

## 故障排查

### `I2C WRITE ERROR: Register 0x.., Error 2`

AIC3104 在 `0x18` 地址没有应答。检查 D4（GPIO5）上的 SDA 和 D5（GPIO6）上的 SCL，确认 I2S 固件正在运行，并对板卡断电重启。

### `AIC3104 initialization FAILED!`

编解码器未接受页选择写入。通常是 I2C 总线被其他主控占用，或者板卡仍在启动中——在 `setupAIC3104()` 之前增加一个短暂延时，然后重试。

### 没有音调，但串口日志看起来正常

- 确认扬声器或耳机已连接到 JST / 3.5 mm 输出端口。
- 440 Hz 音调以满量程的 25% 生成，因此在 8 级时声音刻意偏小。
- 按 `m` 以尝试另一条输出路径（耳机输出 vs 线路输出）。

### 音量在几秒后不断跳回

XVF3800 固件或板载的 `+`/`-` 按钮会写入同一组 AIC3104 寄存器。请在不触碰按钮的情况下从 XIAO 设置音量级别，或者仅让 XIAO 控制编解码器。

### 使用 `m` 切换时出现咔嗒声或爆音

每次切换时两个输出级都会被重新写入。这在 AIC3104 上是预期行为；在切换前降低音量可以减小这种现象。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
