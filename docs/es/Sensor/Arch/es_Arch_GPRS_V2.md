---
description: Arch GPRS V2
title: Arch GPRS V2
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arch_GPRS_V2
last_update:
  date: 2/1/2023
  author: hushuxu
---


![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Arch_GPRS_V2.jpg)

**Arch GPRS V2** es la nueva y mejorada versión de la placa de desarrollo Arch GPRS de [Seeed Studio](https://www.seeedstudio.com). Al igual que el Arch GPRS original, también es una placa de desarrollo habilitada para [mbed](http://mbed.org/handbook/mbed-SDK) que aloja un módulo de red celular junto con un microcontrolador. Arch GPRS V2 utiliza el Microcontrolador LPC11U37 en lugar del LPC11U24 usado en el Arch GPRS. Puedes usar el SDK de mbed C/C++, bibliotecas y herramientas de desarrollo en línea optimizadas para construir rápidamente tu prototipo basado en Arch GPRS V2. El módulo de red celular en el Arch GPRS está basado en el motor SIM900 Quad-band GSM/GRPS de SIMCom. Con esto, las funciones de recolección de datos se pueden realizar fácilmente usando la red celular basada en 2G GSM/GPRS.
Arch GPRS V2 tiene una interfaz estándar de Arduino así como conectores [Grove](https://wiki.seeedstudio.com/es/Grove_System/ "Grove") a bordo. Es conveniente conectar Shields existentes y productos [Grove](https://wiki.seeedstudio.com/es/Grove_System/ "Grove") al Arch GPRS V2. Incluso puedes conectar un panel solar directamente a la placa para permitir que la batería se cargue desde él. ¡Un diseño de bajo consumo garantiza carga fácil y operaciones de larga duración cuando estás al aire libre!

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-GPRS-V2-p-2026.html)

<div class="admonition note">
<p class="admonition-title">Nota</p>
<p>Arch GPRS V2 no viene con <a href="https://mbed.org/handbook/mbed-HDK" >una interfaz mbed</a>. Para mostrar mensajes de depuración, por favor intenta <a href="https://mbed.org/handbook/USBSerial">USBSerial</a>.</p>
</div>

Características
---------------

- Habilitado para mbed
  - Herramientas de desarrollo en línea
  - SDK de C/C++ fácil de usar
  - Muchas bibliotecas y proyectos publicados

- Controlador NXP LPC11U37
  - Núcleo ARM Cortex-M0 de bajo consumo
  - Flash de 128KB en chip, 12KB SRAM, 4KB EEPROM
  - Dispositivo USB, UART, I2C

- Módulo SIM900
  - Soporte GSM/GPRS de cuatro bandas (850/900/1800/1900MHz)
  - Soporta tarjeta SIM externa: 1.8V/3V
  - Control con comandos AT estándar

- Selecciona automáticamente USB5V o panel solar para cargar una batería

Arch GPRS V2 vs Arch GPRS
--------------------------

| Parámetro       | **Arch GPRS V2**| **Arch GPRS**|
|-----------------|-----------------|--------------|
| MCU             | LPC11U27        | LPC11U24     |
| Módulo GSM/GPRS | SIM900          | EG-10        |
| Tarjeta MicroSD | Sí              | No           |

Descripción General del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Arch_GPRS_V2_Pinout.png)

Primeros Pasos
---------------

![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Get_started_with_arch.png)

1. Inicia sesión en el entorno mbed desde [aquí](http://www.mbed.org)
2. Importa el programa [mbed_blinky](https://mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-GPRS)
3. Verifica que el código importado en main.cpp en la carpeta mbed_blinky en el entorno del Compilador en línea de mbed sea como se indica en la figura anterior bajo el Paso 3. Asegúrate de que la plataforma seleccionada para compilar el código sea el Seeeduino-Arch. Ahora procede a compilar el código. Cuando se te pida guardar el archivo binario resultante (.bin), guárdalo en una carpeta designada en tu PC.
4. Ahora conecta tu placa Arch a tu PC y mantén presionado el botón de reset. Una unidad USB extraíble llamada CRP DISABLD debería aparecer automáticamente en tu PC. Ve a la unidad CRP DISABLD, elimina el archivo de firmware existente que ves en la carpeta y copia el archivo binario descargado a CRP DISABLD. Presiona rápidamente el botón de reset para ejecutar el nuevo binario.
5. Verifica que tu código se esté ejecutando exitosamente observando la placa Arch GPRS V2. Si el LED más a la derecha del Pinout mostrado arriba está parpadeando y los otros 3 LEDs junto a él están todos ENCENDIDOS, esto implica que tu código está funcionando.

Puedes cambiar el código al siguiente y ver qué sucede:

```

    #include "mbed.h"

    DigitalOut myled1(LED2); //left most LED if board is held as shown in Pinout diagram above
    DigitalOut myled2(LED3); //2nd from left
    DigitalOut myled3(LED4); //3rd from left
    DigitalOut myled4(LED1); //4th from left (right most)

    int main() {
        while(1) {
                    
            myled1 = 1; //left most LED turns ON, rest off
            myled2 = 0;
            myled3 = 0;
            myled4 = 0;
            
            wait(1); //1 sec wait time
            myled1 = 0;
            myled2 = 1; //2nd from left LED turns ON, rest off
            myled3 = 0;
            myled4 = 0;

            wait(1);
            myled1 = 0;
            myled2 = 0;
            myled3 = 1; //3rd from left LED turns ON, rest off
            myled4 = 0;
            
            wait(1);
            myled1 = 0;
            myled2 = 0;
            myled3 = 0;
            myled4 = 1; //4th from left (right most) LED turns ON, rest off
            
            wait(1);
        }
    }
```

Cuando compiles y ejecutes el código anterior en la placa Arch GPRS V2, deberías ver que los LEDs parpadean en secuencia.

Si completas los pasos anteriores con éxito, esto significa que:

1. Tu Arch GPRS V2 se está encendiendo correctamente.
2. Tu código se está descargando y ejecutando correctamente en el módulo Arch GPRS V2.
3. ¡Ahora estás listo para abordar proyectos más complejos!

Programando Arch en Windows, Linux o Mac
-----------------------------------------

Arch no tiene una interfaz mbed. Utiliza Programación In-Sistema USB (ISP) para actualizar el firmware.

Para entrar al modo USB ISP, conecta el Arch con tu computadora y mantén presionado su botón, y luego aparecerá un disco llamado "CRP DISABLD".

- En windows

    1. elimina firmware.bin en el disco "CRP DISABLD".
    2. copia un nuevo firmware al disco.

- En linux

    1. si el disco no está montado, monta el disco en **`{mnt_dir}`**
    2. **`dd if={new_firmware.bin} of={mnt_dir}/firmware.bin conv=notrunc`**

- En mac necesitarás usar Terminal para ejecutar el siguiente script para copiar tu archivo .bin a tu Arch

    1. **`dd if={new_firmare.bin} of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc`**

Si te sientes inclinado, también puedes crear una aplicación **Automator** para soportar arrastrar y soltar el archivo a tu placa. Solo crea un "*Run Shell Script*" con el siguiente comando:

dd if=$\* of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc

También necesitarás cambiar la opción `"Pass Input"` de `"to stdin"` a `"as arguments"`--sin esto obtendrás un error `"The action 'Run Shell Script' encountered an error"` o `"dd: no value specified for if (1)"` en el log.

Además, una forma mejorada del script es:
**dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

Que debería manejar espacios en la ruta del archivo y solo usa el primer archivo suministrado.
Presiona rápidamente el botón para ejecutar el nuevo firmware.

Recursos
------------------------

- [Página de la plataforma de desarrollador mbed de Arch GPRS V2.0](https://developer.mbed.org/platforms/Seeed-Arch-GPRS/)

**Archivos de Diseño**

- [Archivos de esquemático y placa en formato EAGLE](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/res/Arch_GPRS_v2.0_sch_pcb.zip)
- [Esquemático en formato PDF](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/res/Arch_GPRS_v2.0_SCH_PDF.pdf)

**Aplicaciones y Biblioteca**

- [Biblioteca GPRS](http://developer.mbed.org/teams/Seeed/code/GPRSInterface/)
- [Usar Seeeduino Arch como adaptador de depuración para depurar otro Seeeduino Arch](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)
- [Detectar ambiente](https://mbed.org/users/yihui/notebook/sense-environment/)
- [Jugar con Grove RTC](https://mbed.org/cookbook/seeed-grove-RTC)
- [Jugar con Grove - Sensor ultrasónico de distancia](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

**Ver también**

- [Información del Módulo SIM900 GPRS](/es/GPRS_Shield_V2.0)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Arch_GPRS_V2 -->

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
