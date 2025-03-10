---
description: XIAO SAMD21 de Seeed Studio con TinyUSB
title: XIAO SAMD21 de Seeed Studio con TinyUSB
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO-TinyUSB
last_update:
  date: 02/19/2025
  author: Guillermo
---
# XIAO SAMD21 de Seeed Studio como Dispositivo USB (TinyUSB)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-TinyUSB/XIAO-USB.png" /></div>

Esta wiki explica cómo usar Seeed Studio XIAO SAMD21 como un cliente USB con la ayuda de la biblioteca TinyUSB. Esto permite que Seeed Studio XIAO SAMD21 funcione como un dispositivo HID, como un teclado, un mouse, entre otros.  

Esta funcionalidad depende de la [biblioteca Adafruit TinyUSB para Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino). La biblioteca ha sido probada con [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) y [**Wio Terminal (SAMD51)**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html), funcionando correctamente.  

## Instalación de la biblioteca Adafruit TinyUSB para Arduino

:::note
  Debido a una actualización importante en la biblioteca **"Adafruit TinyUSB Library for Arduino"**, las versiones **V1.0.0 y superiores** no pueden usarse con **Seeed Studio XIAO SAMD21**. Si necesitas utilizar esta biblioteca, usa la versión **V0.10.5**.
:::
1. Visita el repositorio de [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) y descarga el repositorio completo en tu computadora.  

2. Ahora, la biblioteca puede instalarse en el Arduino IDE. Abre Arduino IDE y haz clic en `Sketch` -> `Include Library` -> `Add .ZIP Library`, luego selecciona el archivo `Adafruit_TinyUSB_Arduino` que acabas de descargar.

<!-- ![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" alt="pir" width={600} height="auto" /></p>

## Código de Ejemplo Simple  

La biblioteca TinyUSB proporciona muchos ejemplos. Para un ejemplo sencillo de mouse, navega a:  
`Files` -> `Examples` -> `Adafruit TinyUSB Library` -> `HID` -> `hid_mouse`.  

Conecta un botón al pin **D0** de **Seeed Studio XIAO SAMD21** y configúralo en el código (línea #28), como se muestra a continuación:

:::note
      Asegúrate de haber actualizado **`ArduinoCore-samd`** a la última versión para evitar errores de compilación.
:::
```cpp
/*********************************************************************
 Adafruit invierte tiempo y recursos proporcionando este código fuente abierto,
 ¡por favor apoya a Adafruit y al hardware de código abierto comprando
 productos de Adafruit!

 Licencia MIT, consulta el archivo LICENSE para más información
 Copyright (c) 2019 Ha Thach para Adafruit Industries
 Todo el texto arriba, y la pantalla de inicio abajo, deben ser incluidos en
 cualquier redistribución
*********************************************************************/

#include "Adafruit_TinyUSB.h"

/* Este sketch demuestra el uso del mouse USB HID
 * Al presionar el pin del botón se moverá
 * - el mouse hacia la esquina inferior derecha de la pantalla
 * 
 * Dependiendo de la placa, el pin del botón
 * y su estado activo (cuando se presiona) son diferentes
 */
#if defined ARDUINO_SAMD_CIRCUITPLAYGROUND_EXPRESS
  const int pin = 4; // Botón izquierdo
  bool activeState = true;
#elif defined ARDUINO_NRF52840_FEATHER
  const int pin = 7; // UserSw
  bool activeState = false;
#else
  const int pin = 0;
  bool activeState = true;
#endif
  

// Descriptor del informe HID utilizando la plantilla de TinyUSB
// Descriptor de informe único (sin ID)
uint8_t const desc_hid_report[] =
{
  TUD_HID_REPORT_DESC_MOUSE()
};

// Objeto USB HID
Adafruit_USBD_HID usb_hid;

// La función de configuración se ejecuta una vez cuando presionas el reset o enciendes la placa
void setup()
{
  // Configura el botón, pullup opuesto al estado activo
  pinMode(pin, activeState ? INPUT_PULLDOWN : INPUT_PULLUP);

  usb_hid.setPollInterval(2);
  usb_hid.setReportDescriptor(desc_hid_report, sizeof(desc_hid_report));

  usb_hid.begin();

  Serial.begin(115200);

  // espera hasta que el dispositivo esté montado
  while( !USBDevice.mounted() ) delay(1);

  Serial.println("Ejemplo de Mouse HID con Adafruit TinyUSB");
}

void loop()
{
  // sondea el GPIO cada 10 ms
  delay(10);

  // Si el botón está presionado
  bool btn_pressed = (digitalRead(pin) == activeState);

  // no hacer nada si el botón no está presionado
  if (!btn_pressed) return;

  // Despertar remoto
  if ( USBDevice.suspended() )
  {
    // Despertar al host si estamos en modo suspendido
    // y la función REMOTE_WAKEUP está habilitada por el host
    USBDevice.remoteWakeup();
  }

  if ( usb_hid.ready() )
  {
    int8_t const delta = 5;
    usb_hid.mouseMove(0, delta, delta); // sin ID: derecha + abajo
  }
}
```

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
