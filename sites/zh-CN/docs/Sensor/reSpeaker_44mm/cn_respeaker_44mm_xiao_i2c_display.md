---
description: 使用 XIAO ESP32-S3 Plus，在 reSpeaker XVF3800 44mm 的空闲 D13 与 D3 焊盘上通过 U8g2 软件 I2C 驱动 128x64 SSD1306 OLED，从而不占用 D4/D5 上的 XVF3800 总线。
title: 使用 XIAO ESP32-S3 Plus 驱动 reSpeaker XVF3800 44mm 的 I2C OLED 显示屏
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - I2C 显示屏
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
url: https://wiki.seeedstudio.com/cn/respeaker_44mm_xiao_i2c_display/
---
# 使用 XIAO ESP32-S3 Plus 驱动 reSpeaker XVF3800 44mm 的 I2C OLED 显示屏

本示例程序使用 XIAO ESP32-S3 Plus 驱动一块 128×64 的 SSD1306 OLED，并在上面显示 **HELLO!**。显示屏连接到空闲的 **D13** 和 **D3** 焊盘，U8g2 通过软件（位翻转）I2C 与它通信，因此 XIAO 与 XVF3800 在 D4/D5 上共用的 I2C 总线不会被占用。可先用它确认显示屏接线和 U8g2 库，再把状态输出加入更大的音频示例程序。

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="搭载 XIAO ESP32-S3 Plus 的 reSpeaker XVF3800 44mm" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 前置准备

- 已安装 ESP32 开发板包的 Arduino IDE。请参阅 [软件准备](https://wiki.seeedstudio.com/cn/respeaker_44mm_xiao_getting_started/#软件准备)。
- 通过 **Sketch > Include Library > Manage Libraries** 安装 oliver 的 **U8g2** 库。
- 一块 128×64 的 SSD1306 I2C OLED 模块，默认地址为 `0x3C`。
- 四根跳线，用于连接 3V3、GND、SDA 和 SCL。
- 开发板选择为 **XIAO_ESP32S3_Plus**，并需要选择端口号。

:::note
本示例程序不与 XVF3800 通信，因此任意固件镜像都可以，I2S 镜像即可。D4/D5 连接通往 XVF3800 的 I2C 总线，D12 连接其中断信号，所以显示屏改用空闲的 D13/D3 焊盘。
:::

## 接线

| OLED 引脚 | XIAO 焊盘 | ESP32-S3 GPIO |
|----------|----------|---------------|
| `VCC` | `3V3` | — |
| `GND` | `GND` | — |
| `SDA` | `D13` | GPIO40 |
| `SCL` | `D3` | GPIO4 |

跳线尽量短。软件 I2C 由 CPU 翻转信号线，过长或接触不良的导线通常会导致屏幕空白或显示错乱。

## Arduino 示例程序

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

## 预期输出

OLED 点亮，并在屏幕上半部分显示 **HELLO!**：

```text
HELLO!
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
