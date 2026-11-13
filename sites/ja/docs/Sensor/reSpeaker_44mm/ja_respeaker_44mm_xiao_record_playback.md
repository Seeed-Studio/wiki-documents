---
description: reSpeaker XVF3800 44mm から 48 kHz ステレオ音声を 5 秒間 XIAO ESP32-S3 Plus の PSRAM に I2S 経由で録音し、その後同じ I2S リンクを使って再生します。
title: reSpeaker XVF3800 44mm と XIAO ESP32-S3 Plus による録音と再生
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
url: https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_record_playback/
---
# reSpeaker XVF3800 44mm と XIAO ESP32-S3 Plus による録音と再生

このサンプルでは、XVF3800 からのステレオ音声を I2S 経由で XIAO の PSRAM に 5 秒間キャプチャし、その後同じバッファを I2S 送信経路で再生します。PC を使わずにフルのオーディオ往復が動作することを確認する最も手早い方法であり、音声録音アプリケーションの良い出発点となります。

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 前提条件

- アレイは **I2S ファームウェア** を実行している必要があります。 [Update Firmware](https://wiki.seeedstudio.com/ja/respeaker_44mm_introduction/#ファームウェアを更新) を参照してください。
- ESP32 ボードパッケージと **Arduino Audio Tools** ライブラリをインストールした Arduino IDE。 [Software Preparation](https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_getting_started/#ソフトウェア準備) を参照してください。
- ボードに **XIAO_ESP32S3_Plus** を選択し、ポート番号を選択していること。
- **PSRAM を有効化**：`Tools > PSRAM > OPI PSRAM`。録音バッファは内部 RAM には収まりません。

:::note
48 kHz、ステレオ、32 ビットで 5 秒間には **1,920,000 バイト** が必要です（48,000 × 2 チャンネル × 4 バイト × 5 秒）。PSRAM がない場合、スケッチは `PSRAM allocation failed!` で停止します。
:::


このスケッチでは、XVF3800 が BCLK、LRCLK、MCLK を生成するため、XIAO を I2S の **スレーブ**（`config.is_master = false`）として動作させます。

## 動作概要

1. 起動時にスケッチは PSRAM の合計と空き容量を表示し、その後 `heap_caps_malloc(..., MALLOC_CAP_SPIRAM)` を使って `RECORD_BYTES`（5 秒分）を確保します。
2. **録音**：I2S を `RX_MODE` で再起動し、バッファがいっぱいになるか 1 秒の読み取りタイムアウトが発生するまで、8 KB チャンクでバッファにバイトを読み込みます。
3. 再生時の整合性を保つため、バイト数をステレオフレームの整数個分に切り詰めます。
4. **再生**：I2S を `TX_MODE` で再起動し、バッファを 8 KB チャンクで書き出します。その後 `flush()` と短いディレイを入れて、ストリームを停止する前に最後のフレームが吐き出されるようにします。
5. ループは繰り返され、1 秒の待機の後に再度録音を行います。

## Arduino スケッチ

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

## 期待される出力

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

PSRAM の合計値はモジュールによって異なります。重要なのは、`Recording buffer required` が `PSRAM free` より小さいこと、`1920000 / 1920000` のフルキャプチャができていること、そして送信カウントが一致していることです。

再生フェーズの間、録音を聞くためにスピーカーまたはヘッドホンをアレイに接続してください。

## トラブルシューティング

### `PSRAM allocation failed!`

`Tools > PSRAM > OPI PSRAM` が有効になっていないか、選択されているボードが `XIAO_ESP32S3_Plus` ではありません。ボードを再選択し、PSRAM を有効にしてから再度アップロードしてください。


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
