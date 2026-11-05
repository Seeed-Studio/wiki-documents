---
description: Read Direction of Arrival and the speech-detected flag from the reSpeaker XVF3800 44mm over I2C, while streaming I2S audio into the XIAO ESP32-S3 Plus and computing per-channel RMS.
title: DoA and VAD with reSpeaker XVF3800 44mm and XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - DoA
  - VAD
  - xvf3800
  - I2C
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_doa_vad
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/respeaker_44mm_xiao_doa_vad/
---
# DoA and VAD with reSpeaker XVF3800 44mm and XIAO ESP32-S3 Plus

The XVF3800 computes Direction of Arrival (DoA) and Voice Activity Detection (VAD) inside the chip. A host MCU can read both results over I2C using resource-based commands — no raw audio processing needed on the host. This sketch polls the DoA angle and the speech flag every 250 ms, streams I2S audio at the same time, and prints the RMS level of each channel so you can see when sound is present.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Prerequisites

- The array must be running the **I2S firmware** — I2C control is available in this mode.
- Arduino IDE with the ESP32 board package and the **Arduino Audio Tools** library. See [Software Preparation](https://wiki.seeedstudio.com/respeaker_44mm_xiao_getting_started/#software-preparation).
- Board selected as **XIAO_ESP32S3_Plus**, Port number need to be selected.

## How It Works

The XVF3800 exposes controls through *servicers*. A read is a two-step I2C transaction:

1. Write `resid`, `cmd | 0x80`, and the expected payload length plus one.
2. Read `status` followed by the payload bytes.

| Service | RESID | Command | Payload |
|---------|-------|---------|---------|
| Application servicer — firmware version | `48` | `0` | 3 bytes: major, minor, patch |
| GPO servicer — DoA | `20` | `18` | 4 bytes: angle (little-endian), speech flag (little-endian) |

The loop reads 256 stereo frames at a time from I2S, computes RMS for left and right, and polls DoA/VAD on a 250 ms interval. A DoA value above 359 is printed as `N/A` with the raw hex value, and any non-zero XMOS status byte is reported instead of being decoded.

## Arduino Sketch

```c
#include <Wire.h>
#include <math.h>
#include "AudioTools.h"

// =====================================================
// I2C CONFIGURATION
// =====================================================

#define XMOS_ADDR             0x2C

#define I2C_SDA_PIN           5
#define I2C_SCL_PIN           6

#define GPO_SERVICER_RESID    20
#define GPO_SERVICER_RESID_DOA 18

#define DOA_READ_NUM_BYTES    4
#define DOA_RESPONSE_BYTES    5  // Status + 4-byte payload

// =====================================================
// I2S CONFIGURATION
// =====================================================

#define I2S_BCK_PIN           8
#define I2S_WS_PIN            7
#define I2S_DATA_TX_PIN       44
#define I2S_DATA_RX_PIN       43

#define SAMPLE_RATE           48000
#define CHANNELS              2
#define BITS                  32

// 256 stereo frames per block
#define BLOCK_FRAMES          256

#define FRAME_BYTES           (CHANNELS * (BITS / 8))
#define BLOCK_BYTES           (BLOCK_FRAMES * FRAME_BYTES)

// =====================================================
// DOA POLLING
// =====================================================

#define DOA_INTERVAL_MS       250

unsigned long lastDoaMs = 0;

// =====================================================
// AUDIO OBJECTS
// =====================================================

AudioInfo audioInfo(SAMPLE_RATE, CHANNELS, BITS);

I2SStream i2s;
I2SConfig cfg;

int32_t audioBuf[BLOCK_FRAMES * CHANNELS];

float rmsLeft = 0.0f;
float rmsRight = 0.0f;

// =====================================================
// GENERIC XMOS I2C READ
// =====================================================

// Returns true if the complete I2C response was received.
// The XMOS status byte is checked separately.

bool xmosReadBytes(
    uint8_t resid,
    uint8_t cmd,
    uint8_t *payload,
    uint8_t payloadLen,
    uint8_t &status,
    uint8_t &txError,
    size_t &bytesReceived
) {

    status = 0xFF;
    txError = 0xFF;
    bytesReceived = 0;

    // Step 1: Send read command

    Wire.beginTransmission(XMOS_ADDR);

    Wire.write(resid);
    Wire.write(cmd | 0x80);
    Wire.write(payloadLen + 1);

    txError = Wire.endTransmission();

    if (txError != 0) {
        return false;
    }

    // Step 2: Read status + payload

    bytesReceived = Wire.requestFrom(
        (uint8_t)XMOS_ADDR,
        (uint8_t)(payloadLen + 1)
    );

    if (bytesReceived != (size_t)(payloadLen + 1)) {

        while (Wire.available()) {
            Wire.read();
        }

        return false;
    }

    // First byte is XMOS status

    status = Wire.read();

    // Remaining bytes are payload

    for (uint8_t i = 0; i < payloadLen; i++) {
        payload[i] = Wire.read();
    }

    return true;
}

// =====================================================
// READ FIRMWARE VERSION
// =====================================================

void readFirmwareVersion() {

    uint8_t version[3] = {0};

    uint8_t status;
    uint8_t txError;
    size_t received;

    bool success = xmosReadBytes(
        48,       // Application Servicer
        0,        // VERSION command
        version,
        3,
        status,
        txError,
        received
    );

    Serial.println("\nXMOS Firmware:");

    if (!success) {

        Serial.printf(
            "I2C transport error: TX=%u, RX=%u/4\n",
            txError,
            (unsigned int)received
        );

        return;
    }

    if (status != 0) {

        Serial.printf(
            "Firmware version read failed. Status: 0x%02X\n",
            status
        );

        return;
    }

    Serial.printf(
        "Version: %u.%u.%u\n",
        version[0],
        version[1],
        version[2]
    );
}

// =====================================================
// READ DOA + SPEECH DETECTION
// =====================================================

bool readDOA(
    uint16_t &doaAngle,
    uint16_t &speech,
    uint8_t &status,
    uint8_t &txError,
    size_t &bytesReceived,
    uint8_t rawData[4]
) {

    bool transportOK = xmosReadBytes(
        GPO_SERVICER_RESID,
        GPO_SERVICER_RESID_DOA,
        rawData,
        DOA_READ_NUM_BYTES,
        status,
        txError,
        bytesReceived
    );

    if (!transportOK) {
        return false;
    }

    // Do not decode payload if XMOS reports an error.
    if (status != 0) {
        return false;
    }

    // Little-endian payload

    doaAngle =
        (uint16_t)rawData[0] |
        ((uint16_t)rawData[1] << 8);

    speech =
        (uint16_t)rawData[2] |
        ((uint16_t)rawData[3] << 8);

    return true;
}

// =====================================================
// AUDIO RMS CALCULATION
// =====================================================

// Channel 0 = Left
// Channel 1 = Right

float computeRMS(
    const int32_t *samples,
    size_t frames,
    uint8_t channel
) {

    if (frames == 0) {
        return 0.0f;
    }

    double sum = 0.0;

    for (size_t i = 0; i < frames; i++) {

        double sample =
            (double)samples[i * CHANNELS + channel]
            / 2147483648.0;

        sum += sample * sample;
    }

    return (float)sqrt(sum / frames);
}

// =====================================================
// PRINT DOA ERROR INFORMATION
// =====================================================

void printDOAError(
    uint8_t status,
    uint8_t txError,
    size_t bytesReceived,
    const uint8_t rawData[4]
) {

    if (txError != 0) {

        Serial.printf(
            "I2C write error: %u\n",
            txError
        );

        return;
    }

    if (bytesReceived != DOA_RESPONSE_BYTES) {

        Serial.printf(
            "I2C response incomplete: %u / %u bytes\n",
            (unsigned int)bytesReceived,
            DOA_RESPONSE_BYTES
        );

        return;
    }

    Serial.printf(
        "XMOS returned status: 0x%02X\n",
        status
    );

    Serial.printf(
        "Raw payload: %02X %02X %02X %02X\n",
        rawData[0],
        rawData[1],
        rawData[2],
        rawData[3]
    );
}

// =====================================================
// SETUP
// =====================================================

void setup() {

    Serial.begin(115200);

    while (!Serial) {
        delay(10);
    }

    AudioLogger::instance().begin(
        Serial,
        AudioLogger::Info
    );

    Serial.println("\n================================");
    Serial.println("ReSpeaker 44mm I2S + DOA TEST");
    Serial.println("================================");

    // -----------------------------------------------
    // Initialize I2C
    // -----------------------------------------------

    Wire.begin(
        I2C_SDA_PIN,
        I2C_SCL_PIN
    );

    Wire.setClock(100000);

    delay(500);

    Serial.println("I2C initialized");

    // Read XMOS firmware version
    readFirmwareVersion();

    // -----------------------------------------------
    // Initialize I2S
    // -----------------------------------------------

    Serial.println("\nStarting I2S...");

    cfg = i2s.defaultConfig(RX_MODE);

    cfg.copyFrom(audioInfo);

    cfg.pin_bck = I2S_BCK_PIN;
    cfg.pin_ws = I2S_WS_PIN;

    // Retain both data pin assignments
    cfg.pin_data = I2S_DATA_TX_PIN;
    cfg.pin_data_rx = I2S_DATA_RX_PIN;

    // XIAO = I2S slave
    cfg.is_master = false;

    if (!i2s.begin(cfg)) {

        Serial.println("ERROR: I2S initialization failed!");

        while (true) {
            delay(1000);
        }
    }

    Serial.println("I2S initialized successfully");

    Serial.println("Sample rate : 48000 Hz");
    Serial.println("Channels    : Stereo");
    Serial.println("Bit depth   : 32-bit");

    Serial.println("BCLK        : GPIO8");
    Serial.println("LRCLK       : GPIO7");
    Serial.println("TX          : GPIO44");
    Serial.println("RX          : GPIO43");

    Serial.println("\nDOA polling started");
    Serial.println("Ready!");

    lastDoaMs = millis();
}

// =====================================================
// MAIN LOOP
// =====================================================

void loop() {

    // -----------------------------------------------
    // STEP 1: Receive I2S audio
    // -----------------------------------------------

    size_t bytesRead = i2s.readBytes(
        (uint8_t *)audioBuf,
        BLOCK_BYTES
    );

    size_t framesRead =
        bytesRead / FRAME_BYTES;

    // -----------------------------------------------
    // STEP 2: Calculate audio RMS
    // -----------------------------------------------

    if (framesRead > 0) {

        rmsLeft = computeRMS(
            audioBuf,
            framesRead,
            0
        );

        rmsRight = computeRMS(
            audioBuf,
            framesRead,
            1
        );
    }

    // -----------------------------------------------
    // STEP 3: Poll DOA every 250 ms
    // -----------------------------------------------

    unsigned long now = millis();

    if (now - lastDoaMs >= DOA_INTERVAL_MS) {

        lastDoaMs = now;

        uint16_t doaAngle = 0;
        uint16_t speech = 0;

        uint8_t status = 0xFF;
        uint8_t txError = 0xFF;

        size_t bytesReceived = 0;

        uint8_t rawData[4] = {0};

        bool success = readDOA(
            doaAngle,
            speech,
            status,
            txError,
            bytesReceived,
            rawData
        );

        // -------------------------------------------
        // STEP 4: Print results
        // -------------------------------------------

        if (success) {

            Serial.print("DOA: ");

            if (doaAngle <= 359) {
                Serial.printf(
                    "%3u deg",
                    doaAngle
                );
            } else {
                Serial.printf(
                    "N/A (0x%04X)",
                    doaAngle
                );
            }

            Serial.printf(
                " | Speech: %s",
                speech == 1 ? "DETECTED" :
                speech == 0 ? "SILENT" : "UNKNOWN"
            );

            Serial.printf(
                " | RMS L: %.5f | RMS R: %.5f\n",
                rmsLeft,
                rmsRight
            );

        } else {

            Serial.print("DOA read failed: ");

            printDOAError(
                status,
                txError,
                bytesReceived,
                rawData
            );
        }
    }

    if (bytesRead == 0) {
        delay(1);
    }
}
```

## Expected Output

```text
================================
ReSpeaker 44mm I2S + DOA TEST
================================

XMOS Firmware:
Version: 1.0.0

Starting I2S...
I2S initialized successfully
Sample rate : 48000 Hz
Channels    : Stereo
Bit depth   : 32-bit
BCLK        : GPIO8
LRCLK       : GPIO7
TX          : GPIO44
RX          : GPIO43

DOA polling started
Ready!

DOA: 135 deg | Speech: DETECTED | RMS L: 0.00321 | RMS R: 0.00298
DOA: 136 deg | Speech: DETECTED | RMS L: 0.00344 | RMS R: 0.00301
DOA: N/A (0xFFFF) | Speech: SILENT | RMS L: 0.00002 | RMS R: 0.00002
```

When nobody is speaking, `Speech: SILENT` and the reported angle is not meaningful — the XVF3800 reports an out-of-range value.


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
