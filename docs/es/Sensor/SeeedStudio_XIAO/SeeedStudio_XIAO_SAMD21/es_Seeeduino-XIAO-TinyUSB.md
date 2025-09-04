---
description: Seeed Studio XIAO SAMD21 con TinyUSB
title: Seeed Studio XIAO SAMD21 con TinyUSB
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO-TinyUSB
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# Seeed Studio XIAO SAMD21 como dispositivo USB (TinyUSB)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-TinyUSB/XIAO-USB.png" /></div>

Esta wiki introduce cómo usar Seeed Studio XIAO SAMD21 como cliente USB con la ayuda de la biblioteca TinyUSB. Permite que Seeed Studio XIAO SAMD21 se use para dispositivos HID como teclado, ratón y otros.

Esta funcionalidad depende de la [Biblioteca Adafruit TinyUSB para Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino). La biblioteca ha sido probada con [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) y [**Wio Terminal(SAMD51)**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) y funciona correctamente.

## Instalación de la Biblioteca Adafruit TinyUSB para Arduino

:::note
  Debido a una actualización importante de la biblioteca "Adafruit TinyUSB Library for Arduino", las versiones V1.0.0 y superiores no se pueden usar con Seeed Studio XIAO SAMD21, por favor use la versión V0.10.5 de la biblioteca si necesita usar esta biblioteca.
:::
1. Visite los repositorios de la [Biblioteca Adafruit TinyUSB para Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) y descargue todo el repositorio a su unidad local.

2. Ahora, la biblioteca se puede instalar en el IDE de Arduino. Abra el IDE de Arduino, y haga clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elija el archivo `Adafruit_TinyUSB_Arduino` que acaba de descargar.

<!-- ![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" alt="pir" width={600} height="auto" /></p>

## Código de Ejemplo Simple

Hay muchos ejemplos proporcionados por la biblioteca TinyUSB, aquí podemos navegar a `Files` -> `Examples` -> `Adafruit TinyUSB Library` -> `HID` -> `hid_mouse` para un ejemplo simple de ratón. Conecte un botón al pin **D0** de Seeed Studio XIAO SAMD21 y también configure en el código (#28), como sigue:

:::note
      Asegúrese de haber actualizado el `ArduinoCore-samd` a las últimas versiones para evitar errores de compilación.
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

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>