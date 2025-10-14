---
description: Arch BLE
title: Arch BLE
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arch_BLE
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Arch_BLE.jpg)

Arch BLE es una placa de desarrollo habilitada para mbed basada en el Nordic nRF51822. Con factor de forma Arduino y conectores Grove, es extremadamente fácil crear un dispositivo Bluetooth de Baja Energía (BLE).

El nRF51822 es una potente solución de chip único multi-protocolo para aplicaciones inalámbricas ULP. Incorpora el transceptor de radio de última generación con el mejor rendimiento de su clase de Nordic, un MCU ARM Cortex M0 y memoria flash de 256kB + RAM de 16kB. El nRF51822 soporta Bluetooth® de baja energía y pilas de protocolos de 2.4 GHz.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-BLE-p-1998.html)

Características
--------

- Habilitado para mbed
  - IDE en línea
  - SDK de C/C++ fácil de usar
  - Librerías útiles
- CMSIS DAP basado en LPC11U35
  - Programación por arrastrar y soltar
  - Depuración usando el estándar CMSIS DAP
  - Serie virtual USB para comunicación
- Factor de forma Arduino con conectores Grove
- Nordic nRF51822 SoC RF Multi-protocolo Bluetooth® 4.0 de baja energía/2.4GHz
  - Procesador ARM Cortex M0
  - Flash de 256kB/RAM de 16kB
  - Mapeo de E/S configurable para E/S digital
- Conector USB Micro B

Descripción General del Hardware
------

![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Arch_BLE_Pinout.png)

Primeros Pasos
-----------

![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Get_started_with_mbed.png)

1. Haz clic en [este enlace](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-BLE) para **iniciar sesión o registrarte en mbed**
2. Importa el programa mbed_blinky
3. Haz clic en el icono **Compile** de la barra de herramientas superior para compilar el programa, luego descarga el archivo hex compilado.
4. Arrastra y suelta el archivo hex descargado en el disco MBED

Puedes abrir **main.cpp** para cambiar el programa. Por ejemplo, usa el siguiente código para hacer parpadear el LED cada 0.1s

```
    #include "mbed.h"

    DigitalOut led(p30);           // on-board led is connected to p30

    int main()
    {
        while (true) {
            led = !led;
            wait(0.1);
        }
    }
```

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  <p>Si obtienes un error de compilación que indica que 'device.h' no se encuentra, intenta actualizar la biblioteca mbed a la última revisión en tu programa.</p>
</div>

Aplicaciones
------------

- Color Pixels, una tira LED colorida, puede ser controlada por teléfono móvil.

- Hardware
  - [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html?cPath=19_21)
  - [Tira Digital RGB LED](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-30-LED-1-Meter-p-1665.html)
  - Dispositivo Android con BLE

    ![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Ble_color_pixels_bb.png)
    ![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Color_pixels_app.png)

  - Hazlo funcionar

        1. Descarga [BLE_Color_Pixels_Arch_BLE.hex](http://tangram.qiniudn.com/BLE_Color_Pixels_ARCH_BLE.hex)
        2. Copia el archivo hex al disco MBED de tu Arch BLE
        3. Descarga [la aplicación Android Color Pixels](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)

Si quieres cambiar el programa, haz clic en [este enlace](https://mbed.org/compiler/#import:/teams/Seeed/code/BLE_Color_Pixels/;platform:Seeed-Arch-BLE) para importar el programa Color Pixels al IDE en línea de mbed.

Si el dispositivo BLE se desconecta frecuentemente, podemos mejorar la estabilidad cambiando los parámetros BLE - Duración de Publicidad (en main.cpp), Intervalo Mínimo e Intervalo Máximo (en nRF51822/projectconfig.h)

```
#define CFG_GAP_CONNECTION_MIN_INTERVAL_MS           20                     /**< Minimum acceptable connection interval */
#define CFG_GAP_CONNECTION_MAX_INTERVAL_MS          200                     /**< Maximum acceptable connection interval */
```

- Un coche de juguete controlado por teléfono móvil.

  - Hardware
    - [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html?cPath=19_21)
    - [Shield Bot](https://www.seeedstudio.com/Shield-Bot-p-1380.html)

Actualizar o Restaurar Firmware
--------------------------

La última versión de firmware para el Arch BLE es v0221 construida el 02 de marzo de 2015. Para verificar tu versión de firmware y fecha de construcción, abre el archivo MBED.HTM de tu disco MBED en un editor de texto.

Registro de cambios:

- 2014-06-26: Primera versión
- 2014-08-25: Soporte para arrastrar y soltar archivo hex generado por la cadena de herramientas gcc y sin softdevice
- 2014-10-08: Usar USB EJECT INSET en lugar de reconectar USB, aumentar el búfer de línea de datos intel hex (de 64 bytes a 128 bytes)
- 2015-02-03: Corregir el error del sistema de archivos de solo lectura de Mac OS X 10.10 Yosemite

Problemas conocidos:

- Problemas al descargar *directamente* el archivo hex al disco MBED con el navegador Chrome. La razón es que Chrome crea un archivo temporal mientras descarga. Si estás usando Chrome, por favor guarda el archivo hex en una ubicación diferente y *luego* cópialo al disco MBED.

Firmware:

- [El firmware v0221 2015-02-03 para Arch BLE](https://developer.mbed.org/media/uploads/yihui/arch_ble_interface_v221_20150203_2.bin)
- [El firmware v0203 2014-10-08 para Arch BLE](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin)
- [El firmware v0203 2014-08-25 para Arch BLE](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20140825.bin)

Para flashear un nuevo firmware:

- Mantén presionado el botón del Arch BLE y enciéndelo.
- Aparecerá un disco CRP DISABLD.
  - En Windows, reemplaza firmware.bin con el firmware anterior.
  - En Linux/Mac, usa el comando: **dd if=\{new_firmware.bin\} of=\{firmware.bin\} conv=notrunc**

## Visor de Esquemático en Línea

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Página de la plataforma de desarrollador mbed de Arch BLE](https://developer.mbed.org/platforms/Seeed-Arch-BLE/)
- [Esquemático en formato PDF](https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_pdf.pdf)
- [Archivos de esquemático y placa en formato EAGLE](https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_Eagle.zip)
- [Firmware LPC11U35](https://files.seeedstudio.com/wiki/Arch_BLE/res/Lpc11u35_nrf51822_if_mbed.bin.zip)
- [Aplicación Seeed BLE Color Pixels para Android](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)
- [Código fuente de la aplicación BLE Color Pixels](https://github.com/Seeed-Studio/ble_color_pixels)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Arch_BLE -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
