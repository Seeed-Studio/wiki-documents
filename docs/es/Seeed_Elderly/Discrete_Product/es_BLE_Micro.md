---
description: BLE Micro
title: BLE Micro
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BLE_Micro
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE%20Micro_03.jpg)

El BLE Micro es un módulo de bajo costo basado en ARM cortex-m0 para diseños Bluetooth® Smart con el SoC nRF51822. El módulo proporciona acceso a un máximo de 23 pines GPIO a través de pads de pines e incorpora una antena PCB integrada para minimizar el costo del material pero también con un buen rendimiento. Los ingenieros de aplicaciones pueden aplicar fácilmente el módulo para sus aplicaciones sin preocuparse por la coincidencia de impedancia específica o los problemas de diseño de radio relacionados con la soldadura de paso fino.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-Micro-BLE-Module-w%26-Cortex-M0-Based-nRF51822-SoC-p-1975.html)

## Características
---
*   Radio multi-protocolo de 2.4GHz

*   Procesador ARM Cortex M0 de 32 bits

*   256kB flash/16kB RAM

*   Potencia de salida programable desde +4dBm hasta -20dBm

*   23 pines GPIO flexibles y configurables

*   Amplio rango de voltaje de alimentación (1.8 V a 3.6 V)

*   RSSI


## Especificaciones
---
Especificación|Valor
--|--
Microprocesador|nRF51822 basado en ARM Cortex M0 de 32 bits
Dimensiones externas|13.0mm x 18.5mm x 2.3mm
Alimentación|3.3V
Velocidad de datos en el aire|250 kbps, 1 Mbps o 2 Mbps
Modulación|GFSK
Potencia de salida|Programable: +4 a -20dBm en pasos de 4dB
Sensibilidad|-92.5dBm Bluetooth low energy /96dBm a 250kb/-90dBm a 1Mbs/-85dBm a 2Mbs
Consumo de corriente de radio LDO a 1.8V|16mA – TX a +4dBM potencia de salida/10.5mA – TX a 0dBm potencia de salida/13mA – RX a 1Mbs
Consumo de corriente de radio DC-DC a 3V|10.5mA – TX a +4dBm potencia de salida/8.1mA – TX a 0dBm potencia de salida/9.5mA – RX a 1Mbs
Consumo de corriente del sistema|420nA – Sin retención de RAM/530nA - retención de RAM de 8k/2μA – Todos los periféricos en modo IDLE
Seguridad de hardware|Coprocesador AES ECB/CCM/AAR de 128 bits
GPIO|23
Periféricos|ADC de 10 bits/Sensor de temperatura/RTC/RNG

## Distribución de pines
---

Vista inferior del BLE Micro:

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE_Micro_Pinout.png)

Nota: el pin SWDIO también es nRESET.


## Dimensiones
---

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE_Micro_Dimension.jpeg)

## Over-The-Air
---
Hay dos lotes de módulos BLE Micro, uno con Nordic S110 SoftDevice 6.0 y nombre de dispositivo BLE "DfuTarg", uno con S110 SoftDevice 7.0 y nombre de dispositivo BLE "SD7DFU".
El BLE Micro tiene un bootloader OTA pre-flasheado. Para entrar en modo OTA:

1.  conectar p18 del BLE Micro a GND

2.  encender el BLE Micro

3.  se puede escanear un dispositivo BLE llamado DfuTarg (con SoftDevice 6.0) o SD7DFU (con SoftDevice 7.0)

4.  usar [nRF Master Control Panel](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) para actualizar la aplicación BLE

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/Ota-ui.png)

## Descarga y depuración a través de la interfaz SWD
---
Podemos descargar y depurar una nueva aplicación del BLE Micro con un [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html) o un J-Link a través de la interfaz SWD. El Arch BLE es un BLE Micro + una interfaz CMSIS DAP que proporciona características como programación de arrastrar y soltar, depuración y comunicación por puerto serie virtual USB.

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/Using_arch_ble_to_flash_ble_micro.png)

## Desarrollar Aplicaciones
---
Ve al [proyecto mbed BLE de Seeedstudio](https://github.com/Seeed-Studio/mbed_ble) (o [rama SoftDevice 6.0](https://github.com/Seeed-Studio/mbed_ble/tree/softdevice_v6) para comenzar a desarrollar. Después de obtener tu archivo hex de aplicación personalizada, usa OTA para actualizar tu BLE Micro.

Si estás familiarizado con Docker, hay [un contenedor Docker](https://registry.hub.docker.com/u/skyplabs/ble-micro/) creado por Paul para que configures la cadena de herramientas rápidamente. Puedes usar [el Dockerfile](https://github.com/SkypLabs/ble_micro_dockerfile) para comenzar.

<!-- Si tienes un [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html), también puedes usar [IDE basado en la nube ARM mbed](https://developer.mbed.org/compiler/). Ver también [wiki de Arch BLE](/es/Arch_BLE) -->

## BLE UART
---
Por defecto, el BLE Micro actúa como un dispositivo BLE a UART. Puede conectarse a Android o iOS.

*   Nombre del Dispositivo BLE: nRF UART

*   UART RX: p7

*   UART TX: p8

*   Baud UART: 38400

*   App Android: [nRF UART en Google Play](https://play.google.com/store/apps/details?id=com.nordicsemi.nrfUARTv2&amp;hl=en)

*   App iOS: [nRF UART en iTunes](https://itunes.apple.com/us/app/nrf-uart/id614594903?mt=8)


## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
*   [Esquemático pdf](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro.pdf)

*   [Archivo Eagle](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_v1.0.zip)

*   [Librería Eagle](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_Eagle_Library.zip)

*   [Firmware](https://files.seeedstudio.com/wiki/BLE_Micro/res/Ble_micro_firmware.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
