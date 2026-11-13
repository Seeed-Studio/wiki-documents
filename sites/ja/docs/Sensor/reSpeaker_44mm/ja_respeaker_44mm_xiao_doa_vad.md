---
description: I2C 経由で reSpeaker XVF3800 44mm から到来方向 (DoA) と音声検出フラグを読み取りつつ、I2S オーディオを XIAO ESP32-S3 Plus にストリーミングし、チャネルごとの RMS を計算します。
title: reSpeaker XVF3800 44mm と XIAO ESP32-S3 Plus を用いた DoA と VAD
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
url: https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_doa_vad/
---
# reSpeaker XVF3800 44mm と XIAO ESP32-S3 Plus を用いた DoA と VAD

XVF3800 はチップ内部で到来方向 (DoA) と音声活動検出 (VAD) を計算します。ホスト MCU は I2C を介してリソースベースのコマンドを使い、両方の結果を読み取ることができます — ホスト側で生オーディオを処理する必要はありません。このスケッチは 250 ms ごとに DoA 角度と音声フラグをポーリングし、同時に I2S オーディオをストリーミングして各チャネルの RMS レベルを出力することで、音が存在するときが分かるようにします。

{/* TODO: href="#" の値は、Seeed Studio の製品ページ URL が公開されたら置き換えてください。 */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 前提条件

- アレイは **I2S ファームウェア** を実行している必要があります — このモードでは I2C 制御が利用可能です。
- Arduino IDE（ESP32 ボードパッケージおよび **Arduino Audio Tools** ライブラリを含む）。[Software Preparation](https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_getting_started/#software-preparation) を参照してください。
- ボードに **XIAO_ESP32S3_Plus** を選択し、ポート番号を選択する必要があります。

## 動作概要

XVF3800 は *servicers* を通じて制御を公開します。読み出しは 2 段階の I2C トランザクションです：

1. `resid`、`cmd | 0x80`、および想定されるペイロード長に 1 を加えた値を書き込みます。
2. `status` に続いてペイロードバイトを読み出します。

| サービス | RESID | コマンド | ペイロード |
|---------|-------|---------|---------|
| アプリケーション servicer — ファームウェアバージョン | `48` | `0` | 3 バイト：major、minor、patch |
| GPO servicer — DoA | `20` | `18` | 4 バイト：角度（リトルエンディアン）、音声フラグ（リトルエンディアン） |

ループでは I2S から一度に 256 フレームのステレオデータを読み出し、左・右の RMS を計算し、250 ms 間隔で DoA/VAD をポーリングします。DoA の値が 359 を超える場合は、生の 16 進値とともに `N/A` として出力され、また、ゼロ以外の XMOS ステータスバイトはデコードせずにそのまま報告されます。

## Arduino スケッチ

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

## 期待される出力

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

誰も話していないとき、`Speech: SILENT` となり、報告される角度には意味がありません — XVF3800 は範囲外の値を報告します。


## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
