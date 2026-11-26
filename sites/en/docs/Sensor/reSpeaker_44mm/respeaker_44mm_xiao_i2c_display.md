---
description: Drive a 128x64 SSD1306 OLED from the XIAO ESP32-S3 Plus on the reSpeaker XVF3800 44mm using U8g2 software I2C on the free D13 and D3 pads, so the XVF3800 bus on D4/D5 is left untouched.
title: I2C OLED Display for reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - I2C display
  - SSD1306
  - U8g2
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_i2c_display
sku: 100066841,100065276
last_update:
  date: 11/25/2026
  author: Kasun Thushara
createdAt: '2026-11-25'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/respeaker_44mm_xiao_i2c_display/
---
# I2C OLED Display for reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus

This sketch drives a 128×64 SSD1306 OLED from the XIAO ESP32-S3 Plus and prints **HELLO!** on it. The display is connected to the free **D13** and **D3** pads, and U8g2 talks to it with a software (bit-banged) I2C driver, so the I2C bus that the XIAO shares with the XVF3800 on D4/D5 is never touched. Use it to confirm the display wiring and the U8g2 library before adding status output to a larger audio sketch.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Prerequisites

- Arduino IDE with the ESP32 board package installed. See [Software Preparation](https://wiki.seeedstudio.com/respeaker_44mm_xiao_getting_started/#software-preparation).
- The **U8g2** library by oliver installed from **Sketch > Include Library > Manage Libraries**.
- A 128×64 SSD1306 I2C OLED module, address `0x3C` by default.
- Four jumper wires for 3V3, GND, SDA, and SCL.
- Board selected as **XIAO_ESP32S3_Plus**, Port number need to be selected.

:::note
This sketch does not communicate with the XVF3800, so any firmware image works — the I2S image is fine. D4/D5 carry the I2C bus to the XVF3800 and D12 carries its interrupt, which is why the display uses the free D13/D3 pads instead.
:::

## Wiring

| OLED Pin | XIAO Pad | ESP32-S3 GPIO |
|----------|----------|---------------|
| `VCC` | `3V3` | — |
| `GND` | `GND` | — |
| `SDA` | `D13` | GPIO40 |
| `SCL` | `D3` | GPIO4 |

Keep the jumper wires short. The software I2C driver toggles the lines from the CPU, so long or loose leads are the usual cause of a blank or garbled display.



## Arduino Sketch

```c
#include <U8g2lib.h>

#define SDA_PIN D13
#define SCL_PIN D3

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(
  U8G2_R0,
  SCL_PIN,
  SDA_PIN,
  U8X8_PIN_NONE
);

void setup() {
  u8g2.setI2CAddress(0x3C << 1);
  u8g2.begin();

  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB14_tr);
  u8g2.drawStr(10, 30, "HELLO!");
  u8g2.sendBuffer();
}

void loop() {
}
```

## Expected Output

The OLED lights up and shows **HELLO!** in the upper half of the panel:

```text
HELLO!
```




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
