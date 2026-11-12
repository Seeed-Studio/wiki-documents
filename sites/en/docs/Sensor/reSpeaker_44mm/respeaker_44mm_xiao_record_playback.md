---
description: Record 5 seconds of 48 kHz stereo audio from the reSpeaker XVF3800 44mm into PSRAM on the XIAO ESP32-S3 Plus, then play it back over the same I2S link.
title: Record and Playback with reSpeaker XVF3800 44mm and XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - I2S record playback
  - xvf3800
  - PSRAM
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_record_playback
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/respeaker_44mm_xiao_record_playback/
---
# Record and Playback with reSpeaker XVF3800 44mm and XIAO ESP32-S3 Plus

This example captures five seconds of stereo audio from the XVF3800 over I2S into the XIAO's PSRAM, then plays the same buffer back through the I2S transmit path. It is the quickest way to prove the full audio round trip works without a PC, and a good starting point for voice-record applications.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Prerequisites

- The array must be running the **I2S firmware**. See [Update Firmware](https://wiki.seeedstudio.com/respeaker_44mm_introduction/#update-firmware).
- Arduino IDE with the ESP32 board package and the **Arduino Audio Tools** library. See [Software Preparation](https://wiki.seeedstudio.com/respeaker_44mm_xiao_getting_started/#software-preparation).
- Board selected as **XIAO_ESP32S3_Plus**, Port number need to be selected.
- **PSRAM enabled**: `Tools > PSRAM > OPI PSRAM`. The recording buffer does not fit in internal RAM.

:::note
Five seconds at 48 kHz, stereo, 32-bit needs **1,920,000 bytes** (48,000 × 2 channels × 4 bytes × 5 s). Without PSRAM the sketch stops with `PSRAM allocation failed!`.
:::


The sketch runs the XIAO as I2S **slave** (`config.is_master = false`) because the XVF3800 generates BCLK, LRCLK, and MCLK.

## How It Works

1. At boot the sketch reports total and free PSRAM, then allocates `RECORD_BYTES` (five seconds) with `heap_caps_malloc(..., MALLOC_CAP_SPIRAM)`.
2. **Record**: I2S is restarted in `RX_MODE` and bytes are pulled into the buffer in 8 KB chunks until the buffer is full or a one-second read timeout fires.
3. The byte count is trimmed to a whole number of stereo frames so playback stays aligned.
4. **Playback**: I2S is restarted in `TX_MODE` and the buffer is written out in 8 KB chunks, followed by `flush()` and a short delay so the last frames drain before the stream is stopped.
5. The loop repeats, recording again after a one-second pause.

## Arduino Sketch

```c
#include "AudioTools.h"
#include "esp_heap_caps.h"

// Audio configuration
constexpr uint32_t SAMPLE_RATE = 48000;
constexpr uint16_t CHANNELS = 2;
constexpr uint16_t BITS_PER_SAMPLE = 32;

// Recording configuration
constexpr uint32_t RECORD_SECONDS = 5;

constexpr size_t FRAME_BYTES =
    CHANNELS * (BITS_PER_SAMPLE / 8);

constexpr size_t BYTES_PER_SECOND =
    SAMPLE_RATE * FRAME_BYTES;

constexpr size_t RECORD_BYTES =
    BYTES_PER_SECOND * RECORD_SECONDS;

// Process audio in smaller blocks
constexpr size_t CHUNK_BYTES = 8192;

AudioInfo info(SAMPLE_RATE, CHANNELS, BITS_PER_SAMPLE);

I2SStream out;
I2SConfig config;

// PSRAM recording buffer
uint8_t *audioBuffer = nullptr;

size_t bytes_read = 0;
size_t bytes_write = 0;

// Start I2S
bool startI2S() {
    if (!out.begin(config)) {
        Serial.println("I2S initialization failed!");
        return false;
    }
    return true;
}

// Arduino Setup
void setup() {

    Serial.begin(115200);
    while (!Serial);

    AudioLogger::instance().begin(
        Serial,
        AudioLogger::Info
    );

    Serial.println("\nI2S Record / Playback Test");

    // Check PSRAM availability
    size_t psramTotal =
        heap_caps_get_total_size(MALLOC_CAP_SPIRAM);

    size_t psramFree =
        heap_caps_get_free_size(MALLOC_CAP_SPIRAM);

    Serial.printf(
        "PSRAM total: %lu bytes\n",
        (unsigned long)psramTotal
    );

    Serial.printf(
        "PSRAM free: %lu bytes\n",
        (unsigned long)psramFree
    );

    Serial.printf(
        "Recording buffer required: %lu bytes\n",
        (unsigned long)RECORD_BYTES
    );

    // Allocate audio buffer in PSRAM
    audioBuffer = (uint8_t *)heap_caps_malloc(
        RECORD_BYTES,
        MALLOC_CAP_SPIRAM | MALLOC_CAP_8BIT
    );

    if (audioBuffer == nullptr) {
        Serial.println("PSRAM allocation failed!");
        Serial.println(
            "Enable Tools -> PSRAM -> OPI PSRAM"
        );

        while (true) {
            delay(1000);
        }
    }

    Serial.println("PSRAM buffer allocated successfully");

    // Configure I2S
    config = out.defaultConfig(TX_MODE);
    config.copyFrom(info);

    // XIAO ESP32-S3 Plus pins
    config.pin_bck = 8;       // D9 - GPIO8
    config.pin_ws = 7;        // D8 - GPIO7
    config.pin_data = 44;     // D7 - GPIO44 - TX
    config.pin_data_rx = 43;  // D6 - GPIO43 - RX

    // XVF3800 is I2S master
    config.is_master = false;

    if (!startI2S()) {
        while (true) delay(1000);
    }

    Serial.println("I2S initialized successfully");
}

// Arduino Loop
void loop() {

    // =========================================
    // STEP 1: RECORD AUDIO
    // =========================================

    Serial.println("\n========== RECORDING ==========");

    out.end();

    config.rx_tx_mode = RX_MODE;

    if (!startI2S()) {
        delay(1000);
        return;
    }

    bytes_read = 0;

    uint32_t lastReadTime = millis();

    Serial.println("Recording started...");

    while (bytes_read < RECORD_BYTES) {

        size_t remaining = RECORD_BYTES - bytes_read;

        size_t request =
            (remaining > CHUNK_BYTES)
            ? CHUNK_BYTES
            : remaining;

        size_t received = out.readBytes(
            audioBuffer + bytes_read,
            request
        );

        if (received == 0) {

            if (millis() - lastReadTime > 1000) {
                Serial.println("RX timeout!");
                break;
            }

            delay(1);
            continue;
        }

        bytes_read += received;
        lastReadTime = millis();
    }

    // Stop receiving
    out.end();

    // Keep complete stereo frames only
    bytes_read -= bytes_read % FRAME_BYTES;

    Serial.println("Recording finished");

    Serial.printf(
        "Captured bytes: %lu / %lu\n",
        (unsigned long)bytes_read,
        (unsigned long)RECORD_BYTES
    );

    Serial.print("Recorded duration: ");
    Serial.print(
        (float)bytes_read / BYTES_PER_SECOND,
        2
    );
    Serial.println(" seconds");

    if (bytes_read == 0) {

        Serial.println("No audio captured!");
        delay(1000);
        return;
    }

    // =========================================
    // STEP 2: PLAYBACK AUDIO
    // =========================================

    Serial.println("\n========== PLAYBACK ==========");

    config.rx_tx_mode = TX_MODE;

    if (!startI2S()) {
        delay(1000);
        return;
    }

    bytes_write = 0;

    Serial.println("Playback started...");

    while (bytes_write < bytes_read) {

        size_t remaining = bytes_read - bytes_write;

        size_t request =
            (remaining > CHUNK_BYTES)
            ? CHUNK_BYTES
            : remaining;

        size_t written = out.write(
            audioBuffer + bytes_write,
            request
        );

        if (written == 0) {
            Serial.println("TX write failed!");
            break;
        }

        bytes_write += written;
    }

    // Allow queued audio to finish playing
    out.flush();
    delay(150);

    // Stop transmitting
    out.end();

    Serial.println("Playback finished");

    Serial.printf(
        "Transmitted bytes: %lu / %lu\n",
        (unsigned long)bytes_write,
        (unsigned long)bytes_read
    );

    Serial.println("\n========== TEST COMPLETE ==========");

    // Wait before next recording
    delay(1000);
}
```

## Expected Output

```text
I2S Record / Playback Test
PSRAM total: 8388608 bytes
PSRAM free: 8386804 bytes
Recording buffer required: 1920000 bytes
PSRAM buffer allocated successfully
I2S initialized successfully

========== RECORDING ==========
Recording started...
Recording finished
Captured bytes: 1920000 / 1920000
Recorded duration: 5.00 seconds

========== PLAYBACK ==========
Playback started...
Playback finished
Transmitted bytes: 1920000 / 1920000

========== TEST COMPLETE ==========
```

The PSRAM totals depend on the module. What matters is `Recording buffer required` being smaller than `PSRAM free`, a full `1920000 / 1920000` capture, and a matching transmit count.

Connect a speaker or headphones to the array to hear the recording during the playback phase.

## Troubleshooting

### `PSRAM allocation failed!`

`Tools > PSRAM > OPI PSRAM` is not enabled, or the board selected is not `XIAO_ESP32S3_Plus`. Re-select the board, enable PSRAM, and re-upload.


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
