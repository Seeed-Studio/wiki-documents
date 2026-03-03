---
description: Arch V1.1
title: Arch V1.1
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arch_V1.1
last_update:
  date: 2/1/2023
  author: hushuxu
---


![enter image description here](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Arch.jpg)

Arch V1.1 es una placa de desarrollo habilitada para mbed con factor de forma Arduino y conectores Grove para prototipado rápido. Con una variedad de módulos Shield y Grove, SDK de mbed y muchas librerías de software, puedes construir rápidamente un prototipo.

[![enter image description here](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/seeeduino-arch-p-1561.html)

Seguimiento de Versiones
-------

<table>
<colgroup>
<col width="25%" />
<col width="50%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th>Revisión</th>
<th>Descripción</th>
<th>Fecha de Lanzamiento</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Seeeduino Arch V1.0</td>
<td><ul>
<li>Lanzamiento público inicial</li>
</ul></td>
<td>2013-6-17</td>
</tr>
<tr class="even">
<td>Arch V1.1</td>
<td><ul>
<li>Cambio de nombre de Seeeduino Arch a Arch</li>
<li>Intercambio de D13 y D11</li>
<li>Agregar un conector Grove</li>
<li>Remover diodo dual</li>
</ul></td>
<td></td>
</tr>
</tbody>
</table>

Características
-----------

- habilitado para mbed
  - herramientas de desarrollo en línea
  - SDK de C/C++ fácil de usar
  - muchas bibliotecas y proyectos publicados

- Factor de forma Arduino, tres conectores Grove
  - disponible con shields compatibles con 3.3V
  - un gran número de módulos grove
- Programación de arrastrar y soltar
- MCU NXP LPC11U24
  - Núcleo ARM Cortex-M0 de bajo consumo
  - 48MHz, 32KB Flash, 8KB RAM, 4KB EEPROM
  - Dispositivo USB, 2xSPI, UART, I2C

Especificaciones
---------------

| Elemento                           | Típico   |
|------------------------------------|----------|
| Voltaje de Trabajo                 | 7 ~ 12V  |
| Microcontrolador                   | LPC11U24 |
| Memoria Flash                      | 32KB     |
| EEPROM                             | 4KB      |
| RAM                                | 8KB      |
| UART                               | 1        |
| I2C                                | 1        |
| Canales ADC                        | 8        |
| Pines I/O                          | 40       |
| Voltaje máximo de entrada I/O Digital | 5.0V     |

Descripción General del Hardware
------

![enter image description here](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Arch_V1.1_Pinout.png)

Hay [una versión monocromática](https://seeed-studio.github.io/Artwork/images/arch_v1.1_pinout_mono.png) para que puedas imprimir.

Comenzar
-----------

![enter image description here](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Get_started_with_arch.png)

1. Haz clic en [este enlace](https://mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeeduino-Arch) para iniciar sesión o registrarte en mbed
2. Importa el programa mbed_blinky
3. ¡Programa! Luego puedes compilar el código y descargar el binario de salida.
4. Ahora conecta tu placa Arch a tu pc y mantén presionado el botón de reset, aparecerá automáticamente como un controlador USB llamado CRP DISABLD. Ve a CRP DISABLD, elimina el archivo de firmware y copia el archivo binario descargado a CRP DISABLD. Presiona rápidamente el botón de reset para ejecutar el nuevo binario.

Puedes cambiar el código como se muestra a continuación e intentar de nuevo.

```
    #include "mbed.h"

    BusOut leds(LED1, LED2, LED3, LED4);

    int main() {
        uint8_t count = 0;
        while(1) {
            leds = count++;
            wait(1);
        }
    }
```

Programando Arch en Windows, Linux o Mac
-----------------------------------------

Arch no tiene una interfaz mbed. Utiliza Programación USB En-Sistema (ISP) para actualizar el firmware.

Para entrar al modo USB ISP, conecta el Arch con tu computadora y mantén presionado su botón, y entonces aparecerá un disco llamado "CRP DISABLD".

- En Windows
    1. elimina firmware.bin en el disco "CRP DISABLD".
    2. copia un nuevo firmware al disco.

- En Linux
    1. si el disco no está montado, monta el disco en /path/to/mount
    2. **dd if=new_firmware.bin of=/path/to/mount/firmware.bin conv=notrunc**

- En Mac necesitarás usar Terminal para ejecutar el siguiente script para copiar tu archivo .bin a tu Arch

    1. **dd if=new_firmware.bin of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc**

Si te sientes inclinado, también puedes crear una aplicación **Automator** para soportar arrastrar y soltar el archivo a tu placa. Solo crea un "*Run Shell Script*" con el siguiente comando:

dd if=$\* of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc

También necesitarás cambiar la opción `"Pass Input"` de `"to stdin"` a `"as arguments"`--sin esto obtendrás un error `"The action 'Run Shell Script' encountered an error"` o `"dd: no value specified for if (1)"` en el registro.

Además, una forma mejorada del script es:

**`dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc`**

Lo cual debería manejar espacios en la ruta del archivo y solo usa el primer archivo suministrado.

Presiona rápidamente el botón para ejecutar el nuevo firmware.

Aplicaciones
------------

- [Usar Seeeduino Arch como un adaptador de depuración para depurar otro Seeeduino Arch](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)
- [Detectar el ambiente](https://mbed.org/users/yihui/notebook/sense-environment/)
- [Jugar con Grove RTC](https://mbed.org/cookbook/seeed-grove-RTC)
- [Jugar con Grove - Medidor ultrasónico de distancia](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

Recursos
---------

- [Esquemáticos de Arch V1.1](https://upverter.com/yihui/35f45e266de84e9c/Arch/)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arch_V1.1 -->

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
