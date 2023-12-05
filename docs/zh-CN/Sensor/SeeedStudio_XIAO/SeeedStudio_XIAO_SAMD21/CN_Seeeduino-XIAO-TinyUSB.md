---
description: Seeed Studio XIAO SAMD21 with TinyUSB
title: 将 XIAO SAMD21 变成 USB 设备（TinyUSB）
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-TinyUSB
last_update:
  date: 10/11/2023
  author: 赵桂莹
---
# 将 XIAO SAMD21 变成 USB 设备（TinyUSB）

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-TinyUSB/XIAO-USB.png" /></div>

本 wiki 介绍如何在 TinyUSB 库的帮助下使用 Seeed Studio XIAO SAMD21 作为 USB 客户端。它允许 Seeed Studio XIAO SAMD21 用于 HID 设备，如键盘、鼠标等。

此功能依赖于 [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino). 该库已使用 [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) 和 [**Wio Terminal(SAMD51)**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 并且正常工作

## 安装适用于 Arduino 的 Adafruit TinyUSB 库

:::提示
 由于“Adafruit TinyUSB Library for Arduino”库的重大更新，V1.0.0及以上版本不能与Seeed Studio XIAO SAMD21一起使用，如果您需要使用此库，请使用V0.10.5版本的库。
:::

1. 访问[Adafruit TinyUSB库for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)存储库并将整个存储库下载到您的本地驱动器。 

2. 现在，该库可以安装到Arduino IDE中。打开Arduino IDE，并单击`sketch` -> `Include Library` -> `Add . zip Library`，并选择您刚刚下载的`Adafruit_TinyUSB_Arduino`文件。

<!-- ![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" alt="pir" width={600} height="auto" /></p>

## 简单示例代码

TinyUSB 库提供了很多示例，这里我们可以导航到`Files`-> `Examples`-> `Adafruit TinyUSB Library`-> `HID`->`hid_mouse`来查看简单的鼠标示例。将按钮连接到Seeed Studio XIAO SAMD21 的**D0**引脚，并在代码（#28）中进行配置，如下所示：

:::笔记
      Make sure you have updated the `ArduinoCore-samd` to the latest versions to avoid compile error.
:::

```cpp
/*********************************************************************
 Adafruit invests time and resources providing this open source code,
 please support Adafruit and open-source hardware by purchasing
 products from Adafruit!

 MIT license, check LICENSE for more information
 Copyright (c) 2019 Ha Thach for Adafruit Industries
 All text above, and the splash screen below must be included in
 any redistribution
*********************************************************************/

#include "Adafruit_TinyUSB.h"

/* This sketch demonstrates USB HID mouse
 * Press button pin will move
 * - mouse toward bottom right of monitor
 * 
 * Depending on the board, the button pin
 * and its active state (when pressed) are different
 */
#if defined ARDUINO_SAMD_CIRCUITPLAYGROUND_EXPRESS
  const int pin = 4; // Left Button
  bool activeState = true;
#elif defined ARDUINO_NRF52840_FEATHER
  const int pin = 7; // UserSw
  bool activeState = false;
#else
  const int pin = 0;
  bool activeState = true;
#endif
  

// HID report descriptor using TinyUSB's template
// Single Report (no ID) descriptor
uint8_t const desc_hid_report[] =
{
  TUD_HID_REPORT_DESC_MOUSE()
};

// USB HID object
Adafruit_USBD_HID usb_hid;

// the setup function runs once when you press reset or power the board
void setup()
{
  // Set up button, pullup opposite to active state
  pinMode(pin, activeState ? INPUT_PULLDOWN : INPUT_PULLUP);

  usb_hid.setPollInterval(2);
  usb_hid.setReportDescriptor(desc_hid_report, sizeof(desc_hid_report));

  usb_hid.begin();

  Serial.begin(115200);

  // wait until device mounted
  while( !USBDevice.mounted() ) delay(1);

  Serial.println("Adafruit TinyUSB HID Mouse example");
}

void loop()
{
  // poll gpio once each 10 ms
  delay(10);

  // Whether button is pressed
  bool btn_pressed = (digitalRead(pin) == activeState);

  // nothing to do if button is not pressed
  if (!btn_pressed) return;

  // Remote wakeup
  if ( USBDevice.suspended() )
  {
    // Wake up host if we are in suspend mode
    // and REMOTE_WAKEUP feature is enabled by host
    USBDevice.remoteWakeup();
  }

  if ( usb_hid.ready() )
  {
    int8_t const delta = 5;
    usb_hid.mouseMove(0, delta, delta); // no ID: right + down
  }
}
```

## 技术支持和产品讨论

感谢您选择我们的产品！我们随时为您提供不同的支持，以确保您尽可能顺利地使用我们的产品。我们提供多种沟通渠道来满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
