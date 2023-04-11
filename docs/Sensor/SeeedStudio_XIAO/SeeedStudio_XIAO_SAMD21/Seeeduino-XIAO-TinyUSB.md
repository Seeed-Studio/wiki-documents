---
description: Seeed Studio XIAO SAMD21 with TinyUSB
title: Seeed Studio XIAO SAMD21 with TinyUSB
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO-TinyUSB
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# Seeed Studio XIAO SAMD21 as USB device (TinyUSB)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-TinyUSB/XIAO-USB.png" /></div>

This wiki introduces how to use Seeed Studio XIAO SAMD21 as USB-Client with the help of TinyUSB library. It allows Seeed Studio XIAO SAMD21  to be used for HID devices such as keyboard, mouse and etc.

This functionality is dependent on [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino). The library has been tested with [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) and [**Wio Terminal(SAMD51)**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) and working properly.

## Installing the Adafruit TinyUSB Library for Arduino

:::note
  Due to a major update to the "Adafruit TinyUSB Library for Arduino" library, versions V1.0.0 and above cannot be used with Seeed Studio XIAO SAMD21 , please use the V0.10.5 version of the library if you need use this library.
:::
1. Visit the [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) repositories and download the entire repo to your local drive.

2. Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Adafruit_TinyUSB_Arduino` file that you've have just downloaded.

<!-- ![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" alt="pir" width={600} height="auto" /></p>

## Simple Example Code

There are many examples provided by the TinyUSB library, here we can navigate to `Files` -> `Examples` -> `Adafruit TinyUSB Library` -> `HID` -> `hid_mouse` for a simple mouse example. Connect a button to **D0** pin of Seeed Studio XIAO SAMD21  and also configure in the code(#28), as followed:

:::note
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