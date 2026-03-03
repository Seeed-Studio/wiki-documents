---
description: Xadow - M0
title: Xadow - M0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_M0
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Xadowm0.jpg)

<!-- Xadow - M0 es una placa de desarrollo habilitada para mbed con factor de forma [Xadow](). [Xadow]() es una serie de módulos electrónicos flexibles que incluyen sensores, pantallas y otros. Varios módulos Xadow pueden conectarse en cascada para crear objetos interactivos. -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-M0-mbed-enabled-ARM-Cortex-M0-board-for-Rapid-Prototyping-p-1880.html)

## Características
---
- Habilitado para mbed
 - herramientas de desarrollo en línea
 - SDK de C/C++ fácil de usar
 - muchas librerías y proyectos publicados
- Factor de forma Xadow
 - extremadamente pequeño y flexible
 - conexión en cascada
- Programación de arrastrar y soltar
- MCU NXP LPC11U35
 - Núcleo ARM Cortex-M0 de bajo consumo
 - 48MHz, 64KB Flash, 10KB RAM, 4KB EEPROM
 - Dispositivo USB, 2xSPI, UART, I2C
- Integrado con acelerómetro: ADXL345

## Especificaciones
---
- Voltaje de trabajo: 3.3V
- Corriente DC por pin de E/S: 20mA
- Pines de E/S digitales: 16
- Canales de entrada analógica: 2
- Temperatura de funcionamiento: -20~70 ℃
- Dimensiones: 25.43mm x 20.35mm


## Diagrama de pines
---
![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Xadow_M0_Pinout.png)

## Primeros pasos
---
1.Haz clic en este enlace para registrarte o iniciar sesión en mbed, luego importa el programa xadow_m0_blinky al compilador en línea de mbed.

![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Import_xadow_m0_blinky.png)

2.En el IDE en línea de mbed, haz clic en "Compile" (o usa CTRL + D) para compilar el código y descargar un archivo binario.

![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Compile_mbed_program.png)

3.Conecta la placa a la computadora y **mantén presionado el botón**, aparecerá una unidad USB llamada **CRP DISABLD**.

4.Elimina el archivo **firmware.bin** en la unidad CRP DISABLD, luego copia el archivo descargado a la unidad.

5.**Presiona rápidamente el botón**, el programa se ejecutará y un LED comenzará a parpadear.

Puedes abrir **main.cpp** para cambiar el código. Por ejemplo, usa el siguiente código para hacer parpadear el LED cada 0.1 segundos.
```
#include "mbed.h"

DigitalOut blue(P0_20);

int main() {
    while(1) {
        blue = 1;         // Switch ON the LED.
        wait(0.1);        // Wait for 0.1 Seconds.
        blue = 0;         // Switch OFF the LED.
        wait(0.1);        // Wait for 0.1 Seconds.
    }
}
```

## Multifunción para el botón integrado
---
Por defecto, el botón integrado tiene dos funciones: presión rápida para reiniciar, presión larga para entrar al modo ISP. ¡Podemos agregar más funciones!

Por ejemplo, usa [multifunction_for_reset_button](https://developer.mbed.org/users/yihui/code/multifunction_for_reset_button/) para obtener:
- clic simple - encender LED1
- doble clic - encender LED2
- clic largo - reiniciar
- clic y luego encender - entrar al modo ISP

## Programando Arch en Windows, Linux o Mac
---
Arch no tiene una interfaz mbed. Utiliza Programación In-Sistema USB (ISP) para actualizar el firmware.

Para entrar al modo USB ISP, conecta el Arch con tu computadora y mantén presionado su botón, y luego aparecerá un disco llamado "CRP DISABLD".
- en windows
  1. elimina firmware.bin en el disco "CRP DISABLD".
  2. copia un nuevo firmware al disco.
- en linux
  1. si el disco no está montado, monta el disco en \{mnt_dir\}
  2. **dd if=\{new_firmware.bin\} of=\{mnt_dir\}/firmware.bin conv=notrunc**
- en mac necesitarás usar Terminal para ejecutar el siguiente script para copiar tu archivo .bin a tu Arch
  1. **dd if=\{new_firmare.bin\} of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

Si te sientes inclinado, también puedes crear una aplicación **Automator** para soportar arrastrar y soltar el archivo a tu placa. Solo crea un "Run Shell Script" con el siguiente comando:
dd if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

También necesitarás cambiar la opción "Pass Input" de "to stdin" a "as arguments"--sin esto obtendrás un error "The action 'Run Shell Script' encountered an error" o "dd: no value specified for if (1)" en el registro.

Además, una forma mejorada del script es:
- **dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

Que debería manejar espacios en la ruta del archivo y solo usa el primer archivo suministrado.


## Visor de esquemas en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_M0/res/Xadow_M0_Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [File:Xadow M0 Schematic.zip](https://files.seeedstudio.com/wiki/Xadow_M0/res/Xadow_M0_Schematic.zip)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>