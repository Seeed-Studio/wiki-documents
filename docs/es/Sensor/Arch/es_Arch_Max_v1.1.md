---
description:  Arch Max v1.1
title:  Arch Max v1.1
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arch_Max_v1.1
last_update:
  date: 2/1/2023
  author: hushuxu
---


![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_v1.1_product_view.jpg)

El Arch Max es una placa de desarrollo habilitada para mbed para prototipado rápido. Está basada en un microcontrolador STM32F407VET6 con un núcleo ARM Cortex-M4F funcionando a 168MHz. Proporciona depuración [Serial Wire Debug](https://en.wikipedia.org/wiki/Joint_Test_Action_Group#Serial_Wire_Debug)(SWD), programación de arrastrar y soltar y comunicación serie USB.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Arch-Max-v11-p-2632.html)


Seguimiento de Versiones
-------

| Nombre                     | Versión | Nota                                                                            |
|----------------------------|---------|---------------------------------------------------------------------------------|
| Arch Max v1.0              | v1.0    | 5V no puede ser alimentado por USB, el usuario debe conectar a alimentación externa |
| Arch Max v1.1              | v1.1    | 5V no puede ser alimentado por USB                                   |


Características
--------

-   Habilitado para mbed
    -   Herramientas de desarrollo en línea (incluye IDE)
    -   SDK completo y directo de C/C++
    -   Ejemplos y tutoriales masivos
-   STM32F407VET6 de alto rendimiento
    -   MCU ARM Cortex-M4 con FPU de 168MHz
    -   512 KB de memoria Flash, 192 KB de RAM
-   Programación y depuración integradas
    -   Programación de arrastrar y soltar
    -   Comunicación serie USB
    -   Depuración SWD con GDB+ pyOCD/OpenOCD, Keil o IAR
-   Factor de forma Arduino, compatible con muchos shields
-   Puerto Ethernet integrado, USB y ranura para tarjeta SD para conectividad a Internet e intercambio de datos

Especificaciones
--------------

| Parámetro/Elemento               | Valor         |
|----------------------------------|---------------|
| Voltaje de Trabajo               | 5V            |
| Microcontrolador                 | STM32F407VET6 |
| Memoria Flash                    | 512KB         |
| RAM                              | 192KB         |
| UART                             | 4             |
| I2C                              | 3             |
| SPI                          | 3             |
| CAN                              | 2             |
| SDIO                             | 1             |
| Interfaz de cámara               | 1             |
| Eth                              | 1             |
| Canales ADC                      | 8             |
| Pines I/O                        | 40            |
| Voltaje Máximo de Entrada I/O Digital | 5.0V    |
| Diámetro                         | 90mm x 44mm   |

Descripción General del Hardware
--------------

![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_Pinout.png)

Uso
-----

![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Get_started_with_mbed.png)

1.  Haz clic [aquí](<https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX>) para iniciar sesión o registrarte en mbed
2.  Importa el programa mbed_blinky
3.  Haz clic en el icono **Compile** de la barra de herramientas superior para compilar el programa, luego descarga un archivo hex compilado.
4.  Arrastra y suelta el archivo bin descargado en el disco mbed

Puedes abrir **main.cpp** para cambiar el programa. Por ejemplo, usa el siguiente código para hacer parpadear el LED cada 0.1 segundos

```cpp
#include "mbed.h"

DigitalOut led(LED1);          // on-board led is connected to D13

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
<p>Si obtienes un error de compilación que 'device.h' no se encuentra, intenta actualizar la biblioteca mbed a la última revisión en tu programa.</p>
</div>

## Visor de Esquemas en Línea

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

-   [Página de la plataforma de desarrollador mbed de Arch Max v1.1](https://developer.mbed.org/platforms/Seeed-Arch-Max/)
-   [Esquema en formato PDF](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_pdf.pdf)
-   [Archivos de esquema y placa en formato EAGLE](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_Eagle.zip)
-   [Firmware LPC11U35](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Lpc11u35_stm32f4xx_if_mbed.bin.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arch_Max_v1.1 -->

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