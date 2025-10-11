---
description: Seeeduino Arch
title: Seeeduino Arch
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Arch
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Arch_01.jpg)

**Seeeduino Arch** es una placa de desarrollo habilitada para [mbed](http://mbed.org/handbook/mbed-SDK) que combina las ventajas del SDK de mbed y el factor de forma de Arduino. Con Seeeduino Arch, puedes usar el SDK de mbed C/C++, bibliotecas y herramientas de desarrollo en línea optimizadas para construir rápidamente un prototipo.
Seeeduino Arch tiene la apariencia estándar de Arduino y conectores Grove. Es conveniente conectar Shields existentes y productos Grove a Seeeduino Arch.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/seeeduino-arch-p-1561.html)  

## Características

- Habilitado para mbed

       1.herramientas de desarrollo en línea

       2.SDK de C/C++ fácil de usar

       3.muchas bibliotecas y proyectos publicados

- Apariencia estándar de Arduino, dos conectores Grove

    1.disponible con shields compatibles con 3.3V

    2.un gran número de módulos grove

- Programación de arrastrar y soltar

- MCU NXP LPC11U24

     1.Núcleo ARM Cortex-M0 de bajo consumo

     2.48MHz, 32KB Flash, 8KB RAM, 4KB EEPROM

     3.Dispositivo USB, 2xSPI, UART, I2C

## Especificaciones

<table  cellspacing="0" width="100%">
<tr>
<th scope="col">Elemento</th>
<th scope="col">Típico</th>
</tr>
<tr>
<th scope="row">Voltaje de Trabajo</th>
<td>7 ~ 12V</td>
</tr>
<tr>
<th scope="row">Microcontrolador</th>
<td>LPC11U24</td>
</tr>
<tr>
<th scope="row">Memoria Flash</th>
<td>32kB</td>
</tr>
<tr>
<th scope="row">EEPROM</th>
<td>4kB</td>
</tr>
<tr>
<th scope="row">RAM</th>
<td>8kB</td>
</tr>
<tr>
<th scope="row">UART</th>
<td>1</td>
</tr>
<tr>
<th scope="row">I2C</th>
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
</tr></table>

## Diagrama de pines

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Arch_Pinout.png)

Hay **una versión monocromática** para que puedas imprimir.

## Comparar Seeeduino Arch con Arduino

Tanto Seeedduino como Arduino son plataformas utilizadas para crear prototipos rápidos. Sin embargo, todavía existen diferencias entre ellos. Podemos obtener más información sobre ellos comparando desde la siguiente tabla.
<center>
<table  cellspacing="0" width="100%">
<tr>
<th scope="col">Elemento</th>
<th scope="col">Seeeduino Arch</th>
<th scope="col">Arduino</th>
</tr>
<tr>
<th scope="row">Microcontrolador</th>
<td>MCU de la serie ARM Cortex-M</td>
<td>Principalmente MCU AVR de 8 bits, utilizando la nueva familia de MCU Due Cortex-M3.</td>
</tr>
<tr>
<th scope="row">Especificación de hardware</th>
<td>Tamaño y pin estandarizados para construir fácilmente prototipos modulares</td>
<td>Tamaño y pin estandarizados para construir fácilmente prototipos modulares</td>
</tr>
<tr>
<th scope="row">Entorno de desarrollo</th>
<td>Herramienta de desarrollo en línea para colaborar y compartir fácilmente, puede exportar proyecto a local para desarrollo y depuración. Potente, pero también simple.</td>
<td>Arduino IDE, fácil de usar, simple pero funcional.</td>
</tr>
<tr>
<th scope="row">Desarrollar y depurar</th>
<td>Soporta importación de bibliotecas, exportación de proyectos, control de versiones, depuración y otras funciones.</td>
<td>Las bibliotecas y el código de aplicación están separados, adecuado para escribir código simple, sin función de depuración.</td>
</tr>
</table>
</center>
El Seeeduino Arch es compatible con Arduino en hardware. Ahora compartimos su distribución de pines.
<center>
<table cellspacing="0" width="100%">
<tr>
<th scope="col">Arduino</th>
<th scope="col">Seeeduino Arch</th>
<th scope="col">Descripción</th>
</tr>
<tr>
<th scope="row">D0</th>
<td>P0_18</td>
<td rowspan="14">E/S Digital</td>
</tr>
<tr>
<th scope="row">D1</th>
<td>P0_19</td>
</tr>
<tr>
<th scope="row">D2</th>
<td>P0_17</td>
</tr>
<tr>
<th scope="row">D3</th>
<td>P1_17</td>
</tr>
<tr>
<th scope="row">D4</th>
<td>P1_18</td>
</tr>
<tr>
<th scope="row">D5</th>
<td>P1_24</td>
</tr>
<tr>
<th scope="row">D6</th>
<td>P1_25</td>
</tr>
<tr>
<th scope="row">D7</th>
<td>P1_5</td>
</tr>
<tr>
<th scope="row">D8</th>
<td>P1_26</td>
</tr>
<tr>
<th scope="row">D9</th>
<td>P1_27</td>
</tr>
<tr>
<th scope="row">D10</th>
<td>P0_2</td>
</tr>
<tr>
<th scope="row">D11</th>
<td>P1_29</td>
</tr>
<tr>
<th scope="row">D12</th>
<td>P0_8</td>
</tr>
<tr>
<th scope="row">D13</th>
<td>P0_9</td>
</tr>
<tr>
<th scope="row">SDA</th>
<td>P0_5</td>
<td rowspan="2">I2C</td>
</tr>
<tr>
<th scope="row">SCL</th>
<td>P0_4</td>
</tr>
<tr>
<th scope="row">A0</th>
<td>P0_11</td>
<td rowspan="7">Analógico</td>
</tr>
<tr>
<th scope="row">A1</th>
<td>P0_12</td>
</tr>
<tr>
<th scope="row">A2</th>
<td>P0_13</td>
</tr>
<tr>
<th scope="row">A3</th>
<td>P0_14</td>
</tr>
<tr>
<th scope="row">A4</th>
<td>P0_16</td>
</tr>
<tr>
<th scope="row">A5</th>
<td>P0_22</td>
</tr>
<tr>
<th scope="row">A6</th>
<td>P0_23</td>
</tr>
<tr>
<th scope="row">1-MISO1</th>
<td>P1_21</td>
<td rowspan="6">SPI1</td>
</tr>
<tr>
<th scope="row">2-SCK</th>
<td>P1_20</td>
</tr>
<tr>
<th scope="row">3-RESET</th>
<td>P1_23</td>
</tr>
<tr>
<th scope="row">4-GND</th>
<td>/</td>
</tr>
<tr>
<th scope="row">5-MOSI</th>
<td>P1_22</td>
</tr>
<tr>
<th scope="row">6-VCC</th>
<td>/</td>
</tr>
<tr>
<th scope="row">1-SWDIO</th>
<td>P0_15</td>
<td rowspan="6">Interfaz SWD 2X3</td>
</tr>
<tr>
<th scope="row">2-VCC</th>
<td>/</td>
</tr>
<tr>
<th scope="row">3-SWCLK</th>
<td>P0_10</td>
</tr>
<tr>
<th scope="row">4-</th>
<td>P1_4</td>
</tr>
<tr>
<th scope="row">5-nRET</th>
<td>P0_0</td>
</tr>
<tr>
<th scope="row">6-GND</th>
<td>/</td>
</tr>
<tr>
<th scope="row">D+</th>
<td>USB_DP</td>
<td rowspan="5">USB&amp;ISP</td>
</tr>
<tr>
<th scope="row">D-</th>
<td>USB_DM</td>
</tr>
<tr>
<th scope="row">VBUS</th>
<td>P0_3</td>
</tr>
<tr>
<th scope="row">CONNECT</th>
<td>P0_6</td>
</tr>
<tr>
<th scope="row">ISP</th>
<td>P0_1</td>
</tr>
<tr>
<th scope="row">RX</th>
<td>P1_14</td>
<td rowspan="2">UART Grove</td>
</tr>
<tr>
<th scope="row">TX</th>
<td>P1_13</td>
</tr>
<tr>
<th scope="row">AREF</th>
<td>P0_7</td>
<td>/</td>
</tr>
</table>
</center>

## Comenzando

**Seeeduino Arch** es compatible con **mbed** en software. Puedes usar la biblioteca de firmware integral y abundante código de ejemplo que ofrece el SDK de mbed. Si no estás familiarizado con la plataforma **mbed** y el **SDK de mbed**, por favor haz clic [aquí](https://mbed.org/handbook/mbed-NXP-LPC11U24-Getting-Started) para tener una buena comprensión.

El **Seeeduino Arch** puede usar el IDE en línea gratuito y el compilador de C++ de mbed. Este compilador está construido sobre el motor de compilador ARMCC optimizador. Esto te ayuda a poner tu programa en funcionamiento rápidamente, y no se requiere instalación de software. Descargar programas es tan simple como usar una unidad flash USB (no es necesario un programador externo).

Además del IDE y compilador en línea, los usuarios pueden hacer uso de muchos compiladores/IDE fuera de línea disponibles para microcontroladores ARM Cortex M: ARM Embedded GCC, Keil MDK ARM IAR Embedded Workbench, etc.

Además, escribir una biblioteca no es una tarea difícil para principiantes. Puedes hacer clic [aquí](http://mbed.org/cookbook/Writing-a-Library) para aprender cómo escribir una biblioteca de mbed.

Aquí te mostramos una demostración fácil: **luces de agua** usando Seeeduino Arch para comenzar.

### Demostración: Luces de Agua

- Haz clic en el logo "mbed Enabled" para registrar una cuenta para Seeeduino Arch.
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Mbedenabled.jpg)](https://mbed.org/account/login/?next=/start?auth=104000000000000000000002F7F0F640e640d504b45e111da24094a9d300da46&amp;firmware=999999)

- Abre [https://mbed.org/compiler/](https://mbed.org/compiler/) y obtendrás el IDE en línea de mbed. Antes de programar, es mejor que leas la guía de inicio del compilador de mbed.
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Open_Compiler.jpg)

- Haz clic en "New" para crear un nuevo programa y selecciona el dispositivo "mbed NXP LPC11U24". Creo que esta imagen lo explica mejor.
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Compiler.jpg)

El siguiente es mi código para controlar los cuatro leds del seeeduino arch.

```c
#include "mbed.h"
DigitalOut  led1(LED1);
DigitalOut  led2(LED2);
DigitalOut  led3(LED3);
DigitalOut  led4(LED4);


int main() {
while(1) {
led1 = !led1;
wait(0.5);
led2 = !led2;
wait(0.5);
led3 = !led3;
wait(0.5);
led4 = !led4;
wait(0.5);


```

- Ahora puedes compilar el código. Si el código tiene errores, te lo indicará y te dará ayuda. Y podrás encontrar que las ayudas son justo lo que necesitas.
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Error_prompt.jpg)

- Después de compilar exitosamente el código, guarda el archivo bin.

- Ahora necesitas mantener presionado el botón de reset, aparecerá automáticamente como un controlador USB llamado CRP DISABLD.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/A_usb_device.jpg)

- Ve a CRP DISABLD. Ahora necesitas eliminar el archivo de firmware y agregar el archivo bin waterLights_LPC11U24 a CRP DISABLD. Recuerda resetear el Microcontrolador para que comience a ejecutarse después de descargar un nuevo programa, ahora el seeeduino arch ejecutará el programa waterLight. Puedes probarlo.

El SDK de mbed C/C++ proporciona la plataforma de software y [bibliotecas](http://mbed.org/cookbook/Homepage) que también se pueden aplicar al seeeduino Arch. Así que puedes usar este recurso disponible para construir tus aplicaciones. Y esperamos compartir más de tus programas combinando Seeeduino arch, Shield y módulos Grove.

**Nota:**

Si usas Seeeduino Arch en MAC o Linux, por favor lee la nota de aplicación --- [programación USB ISP](http://www.lpcware.com/content/nxpfile/an11305-usb-system-programming-lpc11u3xlpc11u2x).

## Programando Seeeduino Arch en Windows, Linux o Mac

Seeeduino Arch no tiene una interfaz mbed. Usa Programación USB In-System (ISP) para actualizar el firmware.

Para entrar al modo USB ISP, conecta el Arch con tu computadora y mantén presionado su botón, y entonces aparecerá un disco llamado "CRP DISABLD".

- en windows

1. elimina firmware.bin en el disco "CRP DISABLD".

2. copia un nuevo firmware al disco.

- en linux

1. si el disco no está montado, monta el disco en **\{mnt_dir\}**

2. **dd if=\{new_firmware.bin\} of=\{mnt_dir\}/firmware.bin conv=notrunc**

- en mac necesitarás usar Terminal para ejecutar el siguiente script para copiar tu archivo .bin a tu Arch

1. **dd if=\{new_firmare.bin\} of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

     Si te inclinas por ello, también puedes crear una aplicación **Automator** para soportar arrastrar y soltar el archivo a tu placa. Solo crea un "_Run Shell Script_" con el siguiente comando:

    if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

     También necesitarás cambiar la opción `"Pass Input"` de `"to stdin"` a `"as arguments"`--sin esto obtendrás un error `"The action 'Run Shell Script' encountered an error"` o `"dd: no value specified for if (1)"` en el log.

    También, una forma mejorada del script es:

    **`dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc`**

    Que debería manejar espacios en la ruta del archivo y solo usa el primer archivo suministrado.

Presiona _muy_ rápidamente el botón para ejecutar el nuevo firmware.

## Multifunción para el botón integrado

Por defecto, el botón integrado tiene dos funciones: presión rápida para resetear, presión larga para entrar al modo ISP. ¡Podemos agregar más funciones!

Por ejemplo, usa [multifunction_for_reset_button](http://developer.mbed.org/users/yihui/code/multifunction_for_reset_button/) para obtener:

1. clic simple - encender LED1

2. doble clic - encender LED2

3. clic largo   - reset

4. clic y luego encender - entrar al modo ISP

## Aplicaciones

- [Usar Seeeduino Arch como adaptador de depuración para depurar otro Seeeduino Arch](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)

- [Detectar el entorno](https://mbed.org/users/yihui/notebook/sense-environment/)

- [Jugar con Grove RTC](https://mbed.org/cookbook/seeed-grove-RTC)

- [Jugar con Grove - Sensor ultrasónico de distancia](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]**   [Archivos Eagle de Seeeduino Arch](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_Eagle_files.zip)

- **[PDF]**[Seeeduino_Arch_V1.0 pdf](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_V1.0.pdf)

- **[Hoja de datos]**  [Hoja de datos LPC11U2x](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/LPC11U2x_datasheet.pdf)

- **[PDF]**   [Manual de usuario LPC11Uxx](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/LPC11UxxUserManual.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
