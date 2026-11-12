---
description: Verify full-duplex I2S between the XIAO ESP32-S3 Plus and the reSpeaker XVF3800 44mm array by transmitting a 440 Hz test tone and checking the received microphone samples.
title: I2S Test for reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - I2S test
  - xvf3800
  - arduino audio tools
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_i2s_test
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/respeaker_44mm_xiao_i2s_test/
---
# I2S Test for reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus

This sketch verifies the I2S link between the XIAO ESP32-S3 Plus and the XVF3800 on the 44 mm array. It generates a 440 Hz square wave, writes it to the I2S transmit line, and at the same time reads stereo frames coming back from the microphone array. Received samples that are neither `0` nor `-1` are counted as valid, and the sketch reports PASS or FAIL based on how many valid samples came back.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Prerequisites

- The array must be running the **I2S firmware**. See [Update Firmware](https://wiki.seeedstudio.com/respeaker_44mm_introduction/#update-firmware) if it is still on the USB image.
- Arduino IDE with the ESP32 board package and the **Arduino Audio Tools** library installed. See [Software Preparation](https://wiki.seeedstudio.com/respeaker_44mm_xiao_getting_started/#software-preparation).
- Board selected as **XIAO_ESP32S3_Plus**, Port number need to be selected.
- A USB-C data cable (not charge-only).



:::note
This test configures the XIAO as the I2S **master** (`cfg.is_master = true`). The record and playback examples run the XIAO as **slave**, because the XVF3800 drives the clocks. If you switch between sketches, keep this difference in mind.
:::

## How It Works

1. The sketch sets up a full-duplex I2S stream (`RXTX_MODE`) at 48 kHz, stereo, 32-bit.
2. For each of 32,000 frames it computes a 440 Hz square wave from a 32-bit phase accumulator, writes the same sample to both channels, then reads one stereo frame back.
3. Every received sample that is not `0` or `-1` increments `nonZero`; the first 100 frames are printed so you can eyeball the data.
4. After the run, `nonZero` is compared against `frameCount` (32,000 of 64,000 samples). If it is below the threshold the test runs once more before reporting `I2S RX FAIL!`.

## Arduino Sketch

```c
#include "AudioTools.h"

const int sampleRate = 48000;
const int frequency = 440;
const int32_t amplitude = 500;

const int frameCount = 32000;  // 32000 stereo frames

AudioInfo info(sampleRate, 2, 32);
I2SStream i2s;
I2SConfig cfg;

uint32_t phase = 0;
const uint32_t phaseStep =
    (uint64_t)frequency * 0x100000000ULL / sampleRate;

// Generate TX frames and check RX samples simultaneously
void runI2STest(int &nonZero) {

  nonZero = 0;
  bool truncated = false;

  int32_t txFrame[2];
  int32_t rxFrame[2];

  phase = 0;

  for (int i = 0; i < frameCount; i++) {

    // Generate 440 Hz square wave
    phase += phaseStep;

    int32_t sample =
        (phase & 0x80000000UL) ? -amplitude : amplitude;

    // Same signal on left and right channels
    txFrame[0] = sample;
    txFrame[1] = sample;

    // Write one stereo frame (2 x 32-bit)
    i2s.write((uint8_t *)txFrame, sizeof(txFrame));

    // Read one stereo frame (2 x 32-bit)
    size_t n = i2s.readBytes(
        (uint8_t *)rxFrame,
        sizeof(rxFrame)
    );

    if (n == sizeof(rxFrame)) {

      for (int ch = 0; ch < 2; ch++) {

        if (rxFrame[ch] != 0 && rxFrame[ch] != -1) {
          nonZero++;
        }
      }

      // Print first 100 stereo frames
      if (i < 100) {
        Serial.printf(
            "L: %ld  R: %ld\n",
            (long)rxFrame[0],
            (long)rxFrame[1]
        );
      }
      else if (!truncated) {
        Serial.println("... (truncated)");
        truncated = true;
      }
    }
  }

  Serial.println();
}

void setup() {

  Serial.begin(115200);
  while (!Serial);

  AudioLogger::instance().begin(
      Serial,
      AudioLogger::Info
  );

  cfg = i2s.defaultConfig(RXTX_MODE);
  cfg.copyFrom(info);

  cfg.pin_bck = 8;
  cfg.pin_ws = 7;

  cfg.pin_data = 44;     // TX
  cfg.pin_data_rx = 43;  // RX

  cfg.is_master = true;

  i2s.begin(cfg);

  Serial.println("I2S full-duplex test started");
  Serial.println("Sample rate: 48000 Hz");
  Serial.println("Channels: 2");
  Serial.println("Bit depth: 32-bit");
}

void loop() {

  int nonZero = 0;

  Serial.println("First I2S RX test:");

  runI2STest(nonZero);

  Serial.printf(
      "Valid samples: %d / %d\n",
      nonZero,
      frameCount * 2
  );

  if (nonZero > frameCount) {

    Serial.println("I2S RX PASS!");

  } else {

    Serial.println(
        "Valid samples below threshold. Trying again..."
    );

    nonZero = 0;

    runI2STest(nonZero);

    Serial.printf(
        "Valid samples: %d / %d\n",
        nonZero,
        frameCount * 2
    );

    if (nonZero > frameCount) {
      Serial.println("I2S RX PASS!");
    } else {
      Serial.println("I2S RX FAIL!");
    }
  }

  Serial.println("Test complete");

  while (true);
}
```

## Expected Output

Open the Serial Monitor at **115200 baud**. A healthy link looks like this:

```text
I2S full-duplex test started
Sample rate: 48000 Hz
Channels: 2
Bit depth: 32-bit
First I2S RX test:
L: -500  R: -500
L: -500  R: -500
L: 500  R: 500
... (truncated)
Valid samples: 63500 / 64000
I2S RX PASS!
Test complete
```

The exact values in the first frames depend on what the microphones pick up. The important line is `I2S RX PASS!`.

## Troubleshooting

### `I2S RX FAIL!`

- Confirm the array is running the **I2S** firmware — the USB image produces no I2S data.
- Check that the board package is `XIAO_ESP32S3_Plus` and that no other sketch has redefined the I2S pins.
- Verify the sketch uses GPIO 8 / 7 / 44 / 43, matching the table above.

### All received samples are `0` or `-1`

The microphone stream is not reaching the XIAO. Re-flash the I2S firmware, then power-cycle the board. If the array is muted, the processed channels can be silent — press the mute button once.

### Serial Monitor stays empty

Select the correct port in `Tools > Port` after the board re-enumerates.

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
