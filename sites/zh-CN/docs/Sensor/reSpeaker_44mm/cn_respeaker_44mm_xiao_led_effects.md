---
description: 通过 I2C 使用 XIAO ESP32-S3 Plus 控制 reSpeaker XVF3800 44mm 上的 24 颗 WS2812 LED 灯环，包括电源、效果模式、亮度、速度和颜色，并带有回读校验。
title: 使用 XIAO ESP32-S3 Plus 控制 reSpeaker XVF3800 44mm 的 LED 效果
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - LED 效果
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
url: https://wiki.seeedstudio.com/cn/respeaker_44mm_xiao_led_effects/
---
# 使用 XIAO ESP32-S3 Plus 控制 reSpeaker XVF3800 44mm 的 LED 效果

44 mm 阵列上的 24 颗 WS2812 LED 由 XVF3800 驱动。主控 MCU 可以通过 I2C 接管它们——给 LED 供电、选择效果、设置亮度和速度，并推送一个 RGB 颜色。这个示例程序每两秒循环七种颜色，并将每种颜色读回，以确认命令已生效。

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 前置条件

- 阵列必须运行 **I2S 固件**——I2C 控制在此模式下可用。
- 已安装带 ESP32 开发板包的 Arduino IDE。本示例程序不需要 **Arduino Audio Tools** 库。请参阅 [软件准备](https://wiki.seeedstudio.com/cn/respeaker_44mm_xiao_getting_started/#软件准备)。
- 在 Arduino 中选择开发板为 **XIAO_ESP32S3_Plus**，并选择对应的端口号。


## LED 控制命令

所有命令都发送到 GPO 服务端（`RESID 20`）。写命令使用 `[resid, cmd, len, payload...]` 形式；读命令使用 `[resid, cmd | 0x80, len + 1]`，并首先返回一个状态字节。

| 命令 | ID | 载荷 | 说明 |
|---------|----|---------|-------|
| GPO 写入数值 | `1` | 引脚, 数值 | 用于切换 LED 供电电源轨（`X0D33` = 33） |
| LED 效果 | `12` | 1 字节 | 参见下方效果表 |
| LED 亮度 | `13` | 1 字节 | `0`–`255` |
| LED 速度 | `15` | 1 字节 | 效果动画速度 |
| LED 颜色 | `16` | 4 字节 | 蓝、绿、红、`0x00` |

| 效果 | 数值 | 描述 |
|--------|-------|-------------|
| `LED_EFFECT_OFF` | `0` | LED 关闭 |
| `LED_EFFECT_BREATHING` | `1` | 呼吸渐变 |
| `LED_EFFECT_RAINBOW` | `2` | 彩虹循环 |
| `LED_EFFECT_SOLID` | `3` | 单一纯色 |
| `LED_EFFECT_DOA` | `4` | DoA 方向指示 |
| `LED_EFFECT_RING` | `5` | 环形动画 |

:::note
在示例程序中，颜色值以 `0xRRGGBB` 存储，但在传输时为小端序，因此载荷字节顺序为 **蓝、绿、红、0x00**。
:::

## 工作原理

1. `setup()` 以 100 kHz 启动 I2C，并等待 2.5 秒，让 XVF3800 自身的启动动画完成。
2. 通过向引脚 `33` 发送 GPO 写命令使 LED 供电电源轨上电，将亮度设置为 `150`，并选择 `LED_EFFECT_SOLID`。
3. `applyColor()` 发送颜色，等待 30 ms，然后将颜色读回，并将低 24 位与发送值比较，打印 `Color readback PASS` 或 `MISMATCH`。
4. `loop()` 每两秒切换到下一个颜色。

如果按键和 LED 被切换到 XIAO 而不是 XVF3800（路由开关拨到 `D11`），则可以从 D15 上的 `WS2812_DIN_XIAO` 作为普通 WS2812 灯串来驱动灯环。下面的示例程序使用的是 XVF3800 路径。

## Arduino 示例程序

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

## 预期输出

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

灯环应每两秒依次显示红色、绿色、蓝色、橙色、紫色、白色和黄色。

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
