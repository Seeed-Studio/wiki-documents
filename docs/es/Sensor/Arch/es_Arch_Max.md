---
description: Arch Max
title: Arch Max
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arch_Max
last_update:
  date: 2/1/2023
  author: hushuxu
---


El Arch Max es una placa de desarrollo habilitada para mbed para prototipado rápido.
Está basada en un microcontrolador STM32F407VET6 con un núcleo ARM Cortex-M4F funcionando a 168MHz. Incluye un enlace abierto para proporcionar depuración SWD, programación de arrastrar y soltar y comunicación serie USB.

##   Características  

*   Habilitado para mbed

    *   Herramientas de desarrollo en línea

        *   SDK de C/C++ fácil de usar

        *   Muchas librerías y proyectos publicados

*   STM32F407VET6 de alto rendimiento

    *   MCU ARM Cortex-M4 con FPU a 168MHz

        *   512 KB Flash, 192 KB RAM

*   Enlace abierto integrado para depuración y programación

    *   Programación de arrastrar y soltar

        *   Comunicación serie USB

        *   Depuración SWD con GDB+ pyOCD/OpenOCD, Keil o IAR

*   Factor de forma Arduino, compatible con muchos shields

*   Ethernet integrado, USB y ranura para tarjeta SD para conectividad e intercambio de datos

##   Especificación  

<table cellspacing="0" width="80%">
<tr>
<th scope="col">Elemento</th>
<th scope="col">Típico</th>
</tr>
<tr>
<th scope="row">Voltaje de Trabajo</th>
<td>5V</td>
</tr>
<tr>
<th scope="row">Microcontrolador</th>
<td>STM32F407VET6</td>
</tr>
<tr>
<th scope="row">Memoria Flash</th>
<td>512kB</td>
</tr>
<tr>
<th scope="row">RAM</th>
<td>192kB</td>
</tr>
<tr>
<th scope="row">UART</th>
<td>4</td>
</tr>
<tr>
<th scope="row">I2C</th>
<td>3</td>
</tr>
<tr>
<th scope="row">SPI</th>
<td>3</td>
</tr>
<tr>
<th scope="row">CAN</th>
<td>2</td>
</tr>
<tr>
<th scope="row">SDIO</th>
<td>1</td>
</tr>
<tr>
<th scope="row">Interfaz de cámara</th>
<td>1</td>
</tr>
<tr>
<th scope="row">Eth</th>
<td>1</td>
</tr>
<tr>
<th scope="row">Canales ADC</th>
<td>8</td>
</tr>
<tr>
<th scope="row">Pines I/O</th>
<td>40</td>
</tr>
<tr>
<th scope="row">Voltaje Máximo de Entrada I/O Digital</th>
<td>5.0V</td>
</tr>
<tr>
<th scope="row">Diámetro</th>
<td>90mm x 44mm</td>
</tr>
</table>

##   Definición de pines

![](https://files.seeedstudio.com/wiki/Arch_Max/img/Arch_Max_Pinout.png)

##   Uso

![](https://files.seeedstudio.com/wiki/Arch_Max/img/Get_started_with_mbed.png)

1.  Haz clic en [este enlace](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX) para **iniciar sesión o registrarte en mbed**

2.  Importa el programa mbed_blinky

3.  Haz clic en el icono **Compile** de la barra de herramientas superior para compilar el programa, luego descarga un archivo hex compilado.

4.  Arrastra y suelta el archivo bin descargado en el disco MBED

Puedes abrir **main.cpp** para cambiar el programa. Por ejemplo, usa el siguiente código para hacer parpadear el LED cada 0.1s

```c
#include "mbed.h"

DigitalOut led(LED1);           // on-board led is connected to D13

int main()
{
    while (true) {
        led = !led;
        wait(0.1);
    }
}
```

##   Depuración

Para habilitar la depuración SWD o para obtener mensajes de depuración a través del puerto serie virtual USB, por favor instala [el controlador de mbed](https://developer.mbed.org/handbook/Windows-serial-configuration).

##   Actualizar o Restaurar Firmware

La última versión de firmware para el Arch Max es v0203 construida el 8 de octubre de 2014. Para verificar tu versión de firmware y fecha de construcción, abre el archivo MBED.HTM de tu disco MBED en un editor de texto.

[El firmware v0203 2014-10-08 para Arch Max](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin)

*   Mantén presionado el botón del Arch Max y enciéndelo

*   Aparecerá un disco CRP DISABLD

    *   En Windows, reemplaza firmware.bin con el firmware anterior

        *   En Linux/Mac, usa el comando: **dd if=new_firmware.bin of=firmware.bin conv=notrunc**

##   Versión

<table>
<tr>
<th>Nombre</th>
<th>Versión</th>
<th>Nota</th>
</tr>
<tr>
<td>Arch Max v1.0</td>
<td>v1.0</td>
<td>La fuente de alimentación de 5V no se conectó a la alimentación USB, el usuario debe conectar a alimentación externa</td>
</tr>
<tr>
<td>Arch Max v1.1</td>
<td>v1.1</td>
<td>La fuente de alimentación de 5V puede conectarse a la alimentación USB</td>
</tr>
</table>


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos

- **[Eagle]**  [Archivo Eagle de esquemas para ARCH Max](https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip)
- **[PDF]**[PCB Arch Max](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.pdf)
- **[EAGLE]**[Esquema Arch Max](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.sch)
- **[Eagle]**  [Placa ARCH Max](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.brd)
- **[Datasheet]**  [Hoja de datos STM32F407](https://files.seeedstudio.com/wiki/Arch_Max/res/STM32F407.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>