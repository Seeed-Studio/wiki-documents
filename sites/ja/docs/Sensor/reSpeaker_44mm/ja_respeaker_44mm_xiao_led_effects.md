---
description: XIAO ESP32-S3 Plus から I2C 経由で reSpeaker XVF3800 44mm 上の 24 個の WS2812 LED リングを制御し、電源、エフェクトモード、明るさ、速度、色を読み出し検証付きで操作します。
title: XIAO ESP32-S3 Plus を用いた reSpeaker XVF3800 44mm の LED エフェクト
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - LED エフェクト
  - WS2812
  - xvf3800
  - I2C
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_led_effects
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_led_effects/
---
# XIAO ESP32-S3 Plus を用いた reSpeaker XVF3800 44mm の LED エフェクト

44 mm アレイ上の 24 個の WS2812 LED は XVF3800 によって駆動されています。ホスト MCU は I2C 経由でそれらを制御でき、LED 電源レールをオンにし、エフェクトを選択し、明るさと速度を設定し、RGB カラーを送信できます。このスケッチは 7 色を 2 秒ごとに切り替え、各色を読み戻してコマンドが反映されたことを確認します。

{/* TODO: href="#" の値は Seeed Studio の製品ページ URL が公開されたら置き換えてください。 */}

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 前提条件

- アレイは **I2S ファームウェア** を実行している必要があります — このモードで I2C 制御が利用可能です。
- Arduino IDE と ESP32 ボードパッケージ。**Arduino Audio Tools** ライブラリはこのスケッチには不要です。[Software Preparation](https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_getting_started/#ソフトウェア準備) を参照してください。
- ボードは **XIAO_ESP32S3_Plus** を選択し、ポート番号も選択する必要があります。


## LED 制御コマンド

すべてのコマンドは GPO サービサー（`RESID 20`）に送られます。書き込みは `[resid, cmd, len, payload...]` の形式を使用し、読み出しは `[resid, cmd | 0x80, len + 1]` を使用し、最初にステータスバイトが返されます。

| コマンド | ID | ペイロード | 備考 |
|---------|----|---------|-------|
| GPO 書き込み値 | `1` | pin, value | LED 電源レールの切り替えに使用（`X0D33` = 33） |
| LED エフェクト | `12` | 1 バイト | 下のエフェクト表を参照 |
| LED 輝度 | `13` | 1 バイト | `0`–`255` |
| LED 速度 | `15` | 1 バイト | エフェクトアニメーションの速度 |
| LED カラー | `16` | 4 バイト | Blue, Green, Red, `0x00` |

| エフェクト | 値 | 説明 |
|--------|-------|-------------|
| `LED_EFFECT_OFF` | `0` | LED オフ |
| `LED_EFFECT_BREATHING` | `1` | ブリージングフェード |
| `LED_EFFECT_RAINBOW` | `2` | レインボーサイクル |
| `LED_EFFECT_SOLID` | `3` | 単色のソリッドカラー |
| `LED_EFFECT_DOA` | `4` | DoA 方向インジケータ |
| `LED_EFFECT_RING` | `5` | リングアニメーション |

:::note
カラー値はスケッチ内では `0xRRGGBB` として保存されますが、送信時はリトルエンディアンになるため、ペイロードバイトは **Blue, Green, Red, 0x00** の順になります。
:::

## 動作概要

1. `setup()` は I2C を 100 kHz で開始し、XVF3800 自身のブートアニメーションが終了するまで 2.5 秒待機します。
2. GPO 書き込みでピン `33` の LED 電源レールを有効にし、輝度を `150` に設定し、`LED_EFFECT_SOLID` を選択します。
3. `applyColor()` はカラーを送信し、30 ms 待ってからカラーを読み戻し、下位 24 ビットを送信した値と比較し、`Color readback PASS` または `MISMATCH` を出力します。
4. `loop()` は 2 秒ごとに次のカラーへ進みます。

ボタンと LED が XVF3800 ではなく XIAO にルーティングされている場合（`D11` 上のルーティングスイッチ）、リングは D15 上の `WS2812_DIN_XIAO` から通常の WS2812 チェーンとして駆動することもできます。以下のスケッチは XVF3800 経路を使用します。

## Arduino スケッチ

```c
#include <Wire.h>

// =====================================================
// I2C CONFIGURATION
// =====================================================

#define XMOS_ADDR                 0x2C

#define I2C_SDA_PIN               5
#define I2C_SCL_PIN               6

#define GPO_SERVICER_RESID        20

#define CMD_GPO_WRITE_VALUE       1

#define CMD_LED_EFFECT            12
#define CMD_LED_BRIGHTNESS        13
#define CMD_LED_SPEED             15
#define CMD_LED_COLOR             16

#define LED_POWER_PIN             33

// LED effect modes
#define LED_EFFECT_OFF            0
#define LED_EFFECT_BREATHING      1
#define LED_EFFECT_RAINBOW        2
#define LED_EFFECT_SOLID          3
#define LED_EFFECT_DOA            4
#define LED_EFFECT_RING           5

// =====================================================
// LED CONFIGURATION
// =====================================================

#define LED_BRIGHTNESS            150

// Change LED color every 2 seconds
#define COLOR_INTERVAL_MS         2000

// =====================================================
// COLOR DEFINITIONS
// Format: 0xRRGGBB
// =====================================================

struct LEDColor {
    const char *name;
    uint32_t value;
};

LEDColor colors[] = {
    {"RED",     0xFF0000},
    {"GREEN",   0x00FF00},
    {"BLUE",    0x0000FF},
    {"ORANGE",  0xFF8800},
    {"PURPLE",  0x8000FF},
    {"WHITE",   0xFFFFFF},
    {"YELLOW",  0xFFFF00}
};

const uint8_t COLOR_COUNT =
    sizeof(colors) / sizeof(colors[0]);

uint8_t currentColor = 0;

unsigned long lastColorChange = 0;

// =====================================================
// XMOS I2C WRITE
// =====================================================

bool xmos_write_bytes(
    uint8_t resid,
    uint8_t cmd,
    const uint8_t *value,
    uint8_t write_byte_num
) {

    Wire.beginTransmission(XMOS_ADDR);

    Wire.write(resid);
    Wire.write(cmd);
    Wire.write(write_byte_num);

    for (uint8_t i = 0; i < write_byte_num; i++) {
        Wire.write(value[i]);
    }

    uint8_t error = Wire.endTransmission();

    if (error != 0) {

        Serial.printf(
            "I2C write failed! RESID=%u CMD=%u ERROR=%u\n",
            resid,
            cmd,
            error
        );

        return false;
    }

    return true;
}

// =====================================================
// ENABLE LED POWER
// GPIO X0D33 HIGH = WS2812 LED POWER ENABLE
// =====================================================

bool setLEDPower(bool enable) {

    uint8_t payload[2] = {
        LED_POWER_PIN,
        enable ? 1 : 0
    };

    bool result = xmos_write_bytes(
        GPO_SERVICER_RESID,
        CMD_GPO_WRITE_VALUE,
        payload,
        2
    );

    if (result) {
        Serial.printf(
            "LED power: %s\n",
            enable ? "ON" : "OFF"
        );
    }

    return result;
}

// =====================================================
// SET LED EFFECT
// =====================================================

bool setLEDEffect(uint8_t effect) {

    uint8_t payload[1] = {effect};

    bool result = xmos_write_bytes(
        GPO_SERVICER_RESID,
        CMD_LED_EFFECT,
        payload,
        1
    );

    if (result) {
        Serial.printf("LED effect set: %u\n", effect);
    }

    return result;
}

// =====================================================
// SET LED BRIGHTNESS
// =====================================================

bool setLEDBrightness(uint8_t brightness) {

    uint8_t payload[1] = {brightness};

    bool result = xmos_write_bytes(
        GPO_SERVICER_RESID,
        CMD_LED_BRIGHTNESS,
        payload,
        1
    );

    if (result) {
        Serial.printf("LED brightness: %u\n", brightness);
    }

    return result;
}

// =====================================================
// SET LED SPEED
// =====================================================

bool setLEDSpeed(uint8_t speed) {

    uint8_t payload[1] = {speed};

    return xmos_write_bytes(
        GPO_SERVICER_RESID,
        CMD_LED_SPEED,
        payload,
        1
    );
}

// =====================================================
// SET LED COLOR
// Color format: 0xRRGGBB
// =====================================================

bool setLEDColor(uint32_t color) {

    // Serialize uint32_t in little-endian order.
    // Byte 0 = Blue
    // Byte 1 = Green
    // Byte 2 = Red
    // Byte 3 = Reserved

    uint8_t payload[4] = {
        (uint8_t)(color & 0xFF),
        (uint8_t)((color >> 8) & 0xFF),
        (uint8_t)((color >> 16) & 0xFF),
        0x00
    };

    bool result = xmos_write_bytes(
        GPO_SERVICER_RESID,
        CMD_LED_COLOR,
        payload,
        4
    );

    if (result) {

        Serial.printf(
            "LED color command sent: 0x%06lX\n",
            (unsigned long)(color & 0xFFFFFF)
        );

        Serial.printf(
            "Payload: %02X %02X %02X %02X\n",
            payload[0],
            payload[1],
            payload[2],
            payload[3]
        );
    }

    return result;
}

// =====================================================
// READ BACK LED COLOR
// =====================================================

bool readLEDColor(uint32_t &color) {

    Wire.beginTransmission(XMOS_ADDR);

    Wire.write(GPO_SERVICER_RESID);
    Wire.write(CMD_LED_COLOR | 0x80);
    Wire.write(5);  // Status + 4-byte payload

    if (Wire.endTransmission() != 0) {
        Serial.println("LED color read command failed");
        return false;
    }

    uint8_t received = Wire.requestFrom(
        (uint8_t)XMOS_ADDR,
        (uint8_t)5
    );

    if (received != 5) {

        Serial.printf(
            "LED read response incomplete: %u/5\n",
            received
        );

        while (Wire.available()) {
            Wire.read();
        }

        return false;
    }

    uint8_t status = Wire.read();

    uint8_t b0 = Wire.read();
    uint8_t b1 = Wire.read();
    uint8_t b2 = Wire.read();
    uint8_t b3 = Wire.read();

    if (status != 0) {
        Serial.printf(
            "LED read status error: 0x%02X\n",
            status
        );

        return false;
    }

    color =
        ((uint32_t)b3 << 24) |
        ((uint32_t)b2 << 16) |
        ((uint32_t)b1 << 8) |
        b0;

    Serial.printf(
        "LED readback: 0x%06lX\n",
        (unsigned long)(color & 0xFFFFFF)
    );

    return true;
}

// =====================================================
// APPLY COLOR
// =====================================================

void applyColor(uint8_t index) {

    if (index >= COLOR_COUNT) {
        return;
    }

    Serial.println("\n----------------------------");

    Serial.printf(
        "Changing LED color to: %s\n",
        colors[index].name
    );

    if (!setLEDColor(colors[index].value)) {
        Serial.println("Color update failed!");
        return;
    }

    delay(30);

    uint32_t readback = 0;

    if (readLEDColor(readback)) {

        if ((readback & 0xFFFFFF) ==
            (colors[index].value & 0xFFFFFF)) {

            Serial.println("Color readback PASS");

        } else {

            Serial.println("Color readback MISMATCH");
        }
    }

    Serial.println("----------------------------");
}

// =====================================================
// SETUP
// =====================================================

void setup() {

    Serial.begin(115200);
    delay(1000);

    Serial.println("\n================================");
    Serial.println("ReSpeaker 44mm LED COLOR TEST");
    Serial.println("================================");

    // Initialize I2C
    Wire.begin(
        I2C_SDA_PIN,
        I2C_SCL_PIN
    );

    Wire.setClock(100000);

    Serial.println("I2C initialized");

    // Allow XMOS startup LED initialization to finish
    delay(2500);

    // Enable LED hardware power
    setLEDPower(true);

    delay(100);

    // Configure LED brightness
    setLEDBrightness(LED_BRIGHTNESS);

    // Configure solid color mode
    setLEDEffect(LED_EFFECT_SOLID);

    delay(100);

    // Start with RED
    applyColor(currentColor);

    lastColorChange = millis();

    Serial.println("\nAutomatic LED color changing started");
}

// =====================================================
// LOOP
// =====================================================

void loop() {

    unsigned long now = millis();

    if (now - lastColorChange >= COLOR_INTERVAL_MS) {

        lastColorChange = now;

        currentColor++;

        if (currentColor >= COLOR_COUNT) {
            currentColor = 0;
        }

        applyColor(currentColor);
    }
}
```

## 期待される出力

```text
================================
ReSpeaker 44mm LED COLOR TEST
================================
I2C initialized
LED power: ON
LED brightness: 150
LED effect set: 3

----------------------------
Changing LED color to: RED
LED color command sent: 0xFF0000
Payload: 00 00 FF 00
LED readback: 0xFF0000
Color readback PASS
----------------------------

Automatic LED color changing started

----------------------------
Changing LED color to: GREEN
LED color command sent: 0x00FF00
Payload: 00 FF 00 00
LED readback: 0x00FF00
Color readback PASS
----------------------------
```

リングは 2 秒ごとに、赤、緑、青、オレンジ、紫、白、黄色の順に切り替わるはずです。

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
