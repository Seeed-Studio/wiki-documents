---
description: Control the playback volume of the reSpeaker XVF3800 44mm from the XIAO ESP32-S3 Plus by writing the AIC3104 DAC and analog output registers over I2C, with a 440 Hz test tone to hear the change.
title: Volume Controlling reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - AIC3104
  - volume control
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
url: https://wiki.seeedstudio.com/respeaker_44mm_xiao_volume_control/
---
# Volume Controlling reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus

This sketch makes the XIAO ESP32-S3 Plus play a generated **440 Hz** tone through the onboard **AIC3104** codec over I2S, then adjusts the volume by typing `+` or `-` in the Serial Monitor. Typing `m` switches the output between headphones (`HPLOUT`/`HPROUT`) and line out (`LOP`), and the codec is configured entirely over I2C. The tone is synthesised in code, so no audio file is needed.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Prerequisites

- The array must be running the **I2S firmware**, because the XVF3800 provides the I2S clocks. See [Update Firmware](https://wiki.seeedstudio.com/respeaker_44mm_introduction/#update-firmware).
- Arduino IDE with the ESP32 board package and the **Arduino Audio Tools** library. See [Software Preparation](https://wiki.seeedstudio.com/respeaker_44mm_xiao_getting_started/#software-preparation).
- Board selected as **XIAO_ESP32S3_Plus**, Port number need to be selected.
- A speaker on the JST connector or headphones on the 3.5 mm jack.



:::note
The AIC3104 shares the I2C bus with the XVF3800. The XMOS firmware and the onboard volume buttons can write the same registers, so a level set from the XIAO may be overridden later.
:::

## Volume Mapping

The sketch exposes a 0–17 volume scale, split between digital attenuation and analog gain:

| Volume | Result |
|--------|--------|
| `0` | −8 dB (DAC attenuation) |
| `8` | 0 dB (reference, DAC at full scale) |
| `9` … `17` | +1 dB … +9 dB analog output gain |

From 0 to 8 the DAC is attenuated in **0.5 dB steps** (`(8 − volume) × 2`). From 9 to 17 the DAC stays at 0 dB and the analog output stage is boosted by `volume − 8` dB.

## Register Map

| Register | Address | Purpose |
|----------|---------|---------|
| Page control | `0x00` | Selects register page 0 |
| Left DAC volume | `0x2B` | Digital attenuation, 0.5 dB per step |
| Right DAC volume | `0x2C` | Digital attenuation, 0.5 dB per step |
| HPLOUT level | `0x33` | Headphone left output |
| HPROUT level | `0x41` | Headphone right output |
| LEFT_LOP level | `0x56` | Line-out left |
| RIGHT_LOP level | `0x5D` | Line-out right |

Output register bits: **D7–D4** = analog gain (`0`–`9` dB), **D3** = unmute, **D0** = power up. The headphone registers also set **D2** (high impedance when powered down), which is why they use `0x0D` as the fixed low nibble and the line-out registers use `0x09`.

## How It Works

1. `setup()` starts I2C at 100 kHz and writes the AIC3104 page-control register, then sets both DAC channels to 0 dB and unmutes/powers the headphone and line outputs at 0 dB.
2. `setVolume()` splits the requested level into a DAC attenuation value and an analog gain value, writes all four output registers, and reads the left DAC register back for confirmation.
3. I2S is started in `TX_MODE` at 48 kHz, stereo, 32-bit, with the XIAO as slave so the XVF3800 drives BCLK and LRCLK.
4. A `SineWaveGenerator` produces the 440 Hz tone at 25 % of 32-bit full scale, wrapped in a `GeneratedSoundStream` and copied to I2S by `StreamCopy`.
5. `loop()` keeps the tone playing and services single-character commands from the Serial Monitor.

## Serial Commands

| Key | Action |
|-----|--------|
| `+` | Increase volume (up to 17) |
| `-` | Decrease volume (down to 0) |
| `m` | Switch between headphone and line output |
| `v` | Print the current volume |
| `h` | Show the command list |

## Code

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

## Expected Output

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

## Troubleshooting

### `I2C WRITE ERROR: Register 0x.., Error 2`

The AIC3104 is not acknowledging at `0x18`. Check SDA on D4 (GPIO5) and SCL on D5 (GPIO6), confirm the I2S firmware is running, and power-cycle the board.

### `AIC3104 initialization FAILED!`

The codec did not accept the page-select write. Usually the I2C bus is held by another master or the board is still booting — add a short delay before `setupAIC3104()` and retry.

### No tone, but the serial log looks correct

- Confirm a speaker or headphones are connected to the JST / 3.5 mm output.
- The 440 Hz tone is generated at 25 % of full scale, so it is intentionally quiet at level 8.
- Press `m` to try the other output path (headphone vs line out).

### Volume keeps jumping back after a few seconds

The XVF3800 firmware or the onboard `+`/`-` buttons write the same AIC3104 registers. Set the level from the XIAO without touching the buttons, or keep the codec under XIAO control only.

### A click or pop when switching with `m`

Both output stages are re-written on every change. This is expected on the AIC3104; lower the volume before switching to reduce it.

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
