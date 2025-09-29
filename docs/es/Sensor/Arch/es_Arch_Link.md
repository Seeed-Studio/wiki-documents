---
description: Arch Link
title: Arch Link
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arch_Link
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Arch_Link/img/1020800061.jpg)

**Arch Link** es una placa de desarrollo habilitada para mbed basada en Nordic nRF51822 e interfaz ethernet WIZnet W5500. Con factor de forma Arduino, conectores Grove e interfaz micro SD, es extremadamente fácil crear un dispositivo bluetooth de baja energía.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-Link-p-2511.html)

Características
--------

- Habilitado para mbed
  - IDE en línea
  - SDK C/C++ fácil de usar
  - Librerías útiles
- CMSIS DAP basado en LPC11U35
  - Programación por arrastrar y soltar
  - Depuración usando estándar CMSIS DAP
  - Serie virtual USB para comunicación
- Factor de forma Arduino con conectores Grove
  - Conector I2C y UART en la placa
- Nordic nRF51822 Multi-protocolo Bluetooth® 4.0 baja energía/2.4GHz RF SoC
  - Procesador ARM Cortex M0
  - 256kB flash/16kB RAM
  - Mapeo de E/S configurable para E/S digital
- WIZnet W5500 Ethernet
  - Soporta los siguientes Protocolos TCP/IP por Hardware : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
  - Soporta modo de apagado
  - Soporta Wake on LAN sobre UDP
  - Soporta Interfaz Periférica Serie de Alta Velocidad(SPI MODO 0, 3)
  - Memoria interna de 32Kbytes para Buffers Tx/Rx
  - 10BaseT/100BaseTX Ethernet PHY integrado
  - con conector RJ45
- Conector USB Micro B
- Conector de tarjeta Micro SD

Descripción del Hardware
------

![](https://files.seeedstudio.com/wiki/Arch_Link/img/Arch_link_pinout.png)

Primeros Pasos
-----------

![](https://files.seeedstudio.com/wiki/Arch_Link/img/Get_started_with_mbed.png)

1. Haz clic en [este enlace](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-BLE) para **iniciar sesión o registrarte en mbed**
2. Importa el programa mbed_blinky
3. Haz clic en el icono **Compile** de la barra de herramientas superior para compilar el programa, luego descarga un archivo hex compilado.
4. Arrastra y suelta el archivo hex descargado en el disco MBED

Puedes abrir **main.cpp** para cambiar el programa. Por ejemplo, usa el siguiente código para hacer parpadear el LED cada 0.1s

```cpp
#include "mbed.h"

DigitalOut led(p30);           // on-board led is connected to p30

int main()
{
    while (true) {
        led = !led;
        wait(0.1);
    }
}
```

<div class="admonition note">
<p class="admonition-title">Nota</p>
<p>Si obtienes un error de compilación que indica que 'device.h' no se encuentra, intenta actualizar la biblioteca mbed a la última revisión en tu programa.</p>
</div>

Aplicaciones
------------

1. Color Pixels, una tira LED colorida, puede ser controlada por teléfono móvil.

- Hardware
  - Arch Link
  - [Tira LED RGB Digital](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-30-LED-1-Meter-p-1665.html)
  - Dispositivo Android con BLE

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Ble_color_pixels_bb.png)

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Color_pixels_app.png)

  - Hazlo funcionar

        1. Descarga [BLE_Color_Pixels_Arch_BLE.hex](http://tangram.qiniudn.com/BLE_Color_Pixels_ARCH_BLE.hex)
        2. Copia el archivo hex al disco MBED de tu Arch BLE
        3. Descarga [la aplicación Android Color Pixels](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)

Si quieres cambiar el programa, haz clic en [este enlace](https://mbed.org/compiler/#import:/teams/Seeed/code/BLE_Color_Pixels/;platform:Seeed-Arch-BLE) para importar el programa Color Pixels al IDE en línea de mbed.

Si el dispositivo BLE se desconecta frecuentemente, podemos mejorar la estabilidad cambiando los parámetros BLE - Duración de Publicidad (main.cpp), Intervalo Mínimo e Intervalo Máximo (nRF51822/projectconfig.h)

```cpp
#define CFG_GAP_CONNECTION_MIN_INTERVAL_MS           20                     /**< Minimum acceptable connection interval */
#define CFG_GAP_CONNECTION_MAX_INTERVAL_MS          200                     /**< Maximum acceptable connection interval */
```

2. Puedes usar el Arch Link como un panel web.

    - Hardware
        - Arch Link
        - [Grove - Sensor de Temperatura y Humedad Pro](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-Pro-p-838.html)

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Web_dashboard_bb.png)

    - Hazlo funcionar

        1. Descarga [Web_Dashboard_Arch_Link.hex](http://tangram.qiniudn.com/Web_Dashboard_Arch_Link.hex)
        2. Copia el archivo hex al disco MBED de tu Arch Link
        3. Conecta el Grove - Sensor de Temperatura y Humedad Pro al conector Grove I2C
        4. Conecta el Arch Link a tu PC a través del cable USB
        5. Abre un navegador web y visita [http://mbed.org/media/uploads/yihui/web_dashboard.html](http://mbed.org/media/uploads/yihui/web_dashboard.html)

Si quieres cambiar el programa, haz clic en [este enlace](https://mbed.org/compiler/#import:/teams/Seeed/code/Web_Dashboard/;platform:Seeed-Arch-Link) para importar el programa Web Dashboard al IDE en línea de mbed.

## Visor de Esquemas en Línea

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Página de la plataforma de desarrollador mbed de Arch Link](https://developer.mbed.org/platforms/Seeed-Arch-Link/)
- [Esquema en formato PDF](https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_pdf.pdf)
- [Archivos de esquema y placa en formato EAGLE](https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_Eagle.zip)
- [Firmware LPC11U35](https://files.seeedstudio.com/wiki/Arch_Link/res/Lpc11u35_nrf51822_if_mbed.bin.zip)
- [App Seeed BLE Color Pixels para Android](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)
- [Código fuente de la App BLE Color Pixels](https://github.com/Seeed-Studio/ble_color_pixels)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Arch_Link -->

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
