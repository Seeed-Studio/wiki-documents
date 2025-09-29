---
description: Arch Pro
title: Arch Pro
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arch_Pro
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro.jpg)

Arch Pro es una placa de desarrollo habilitada para mbed para prototipado rápido. Es una variante del mbed LPC1768 con Ethernet integrado, USB Host/Device, conectores Grove y factor de forma Arduino. Con una variedad de módulos Shield y Grove y muchas bibliotecas de software para Arch Pro, puedes implementar aplicaciones Ethernet, USB Host/Device y NFC de manera rápida y fácil.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Arch-Pro-p-1677.html)

Características
---------------

-   Habilitado para mbed
    -   Herramientas de desarrollo en línea
    -   SDK de C/C++ fácil de usar
    -   Bibliotecas útiles

-   Factor de forma Arduino con dos conectores Grove
-   Programación de arrastrar y soltar
-   Depuración usando CMSIS-DAP
-   Serie virtual USB para comunicación

Especificaciones
----------------

| Parámetro       | Valor/Disponibilidad                          |
|-----------------|-----------------------------------------------|
| MCU             | Variante NXP LPC1768 (con núcleo ARM Cortex-M3) |
| Velocidad de Reloj | 100 MHz                                    |
| Flash           | 512 KB                                        |
| RAM             | 64KB                                          |
| UART            | 4 No.s                                        |
| I2C             | 3 No.s                                        |
| SPI         | 2 No.s                                        |
| Ethernet        | Sí                                            |
| USB Host/Device | Sí                                            |

Plataformas Compatibles
-----------------

-   mbed.

Ideas de Aplicación
-----------------

-   [Ethernet](https://mbed.org/handbook/Ethernet-Interface)
-   [USB Host](https://mbed.org/handbook/USBHost) o [Device](https://mbed.org/handbook/USBDevice)
-   [NFC](https://mbed.org/users/yihui/notebook/rapid-prototyping-with-nfc/)
-   [RTOS](https://mbed.org/handbook/RTOS)
-   [Lua](http://mbed.org/users/jsnyder/notebook/elua-preliminary-port/)

Descripción General del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro_v1_pinout.png)

Hay [una versión monocromática](https://seeed-studio.github.io/Artwork/images/arch_pro_v1_pinout_mono.png) para que puedas imprimir.

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  <p>La serigrafía del Arch Pro para los conectores Grove está etiquetada como 3V3 en la parte superior de la PCB y 5V en la parte inferior. El Vcc de Grove es por defecto 3V3, pero puede cambiarse a 5V moviendo R50 a R51. El pin Vcc de SPI puede configurarse poblando R52 (3V3) o R53 (5V) con 0R - ninguno poblado por defecto.</p>
</div>


Primeros Pasos
---------------

Como el Arch Pro es compatible con mbed LPC1768, uno puede usar el SDK de mbed C/C++, bibliotecas y herramientas de desarrollo en línea para construir rápidamente un prototipo.
Aquí mostramos cómo encender un LED. Esto se puede hacer en menos de 10 minutos.

Paso uno: Registrarse para una cuenta de mbed.

-   Abrir [mbed.org](https://developer.mbed.org/), hacer clic en Login o signup. Si ya te has registrado, por favor haz clic en login directamente.

Paso dos: Entrar a las herramientas de desarrollo en línea.

-   Hacer clic en Compiler, esto abre el IDE de mbed en línea. Antes de programar, es mejor leer la [Guía de inicio](https://developer.mbed.org/getting-started/) del Compilador de mbed.

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Open_Compiler.jpg)

Paso tres: Editar código.

-   Hacer clic en "New" en la esquina superior izquierda para crear un Programa y editar un programa de parpadeo en el archivo main.cpp.

```
#include "mbed.h"
 
DigitalOut  led1(LED1);
 
int main() {
    while(1) {
        led1 = !led1; 
        wait(0.5); 
    }
}
```

Paso cuatro: Agregar un dispositivo.

-   Haz clic en "No device selected" en la esquina superior derecha, luego haz clic en el botón "Add a device" en la esquina inferior izquierda como se ve en la imagen a continuación.

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  Si ya has usado un dispositivo mbed, se verá en la esquina superior derecha en lugar de "No device selected".
</div>


![](https://files.seeedstudio.com/wiki/Arch_Pro/img/选择设备.jpg)

-   Aparece una página emergente con una lista de dispositivos como se muestra a continuación. Selecciona "mbed LPC1768".

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/选择设备1.jpg)

-   Ingresa a la página mbed LPC1768 y haz clic en "Add to mbed Compiler". Ahora has agregado exitosamente Mbed LPU1768. Regresa a la página del compilador mbed y haz clic en "No device selected". Después de hacer clic en "LPC1768" en la esquina inferior izquierda, aparece una pantalla como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro_add_platform.png)

-   Puedes ver la placa seleccionada en el compilador en línea mbed después de hacer clic en "Select Platform".

Paso cinco: Compilar, descargar.

-   Haz clic en "Compile". En una compilación exitosa, el IDE mbed genera un archivo bin. Guarda el archivo bin en tu PC.

Paso seis: Actualizar firmware.

-   Conecta la interfaz USB (junto a 'BUTTON') del Arch Pro a tu PC usando un cable USB Micro B; Aparece automáticamente como un dispositivo USB llamado MBED.
-   Copia el archivo bin generado al dispositivo MBED (en tu PC). Ahora el dispositivo USB desaparece y reaparece.
-   Presiona BUTTON del Arch Pro, verás un LED parpadeando.

Depuración
----------

Para habilitar la depuración SWD o para obtener mensajes de depuración a través del puerto serie virtual USB, por favor instala [el controlador de mbed](https://developer.mbed.org/handbook/Windows-serial-configuration).

Actualizar o Restaurar Firmware
--------------------------------

La versión de firmware más reciente para el Arch Pro es v0221 construida el 28 de enero de 2015. Para verificar tu versión de firmware y fecha de construcción, abre el MBED.HTM o DETAILS.TXT de tu disco MBED en un editor de texto.

-   [Firmware v221 2015-01-28 para Arch Pro](https://developer.mbed.org/media/uploads/yihui/lpc11u35_lpc1768_if_mbed_20150128.bin) Corrige el error del sistema de archivos de solo lectura de Mac OS X 10.10 Yosemite
-   [Firmware v0203 2014-09-02 para Arch Pro](https://github.com/xiongyihui/CMSIS-DAP/raw/arch_pro/interface/mdk/lpc11u35/lpc11u35_lpc1768_if_mbed_bootloader.bin)

Para actualizar:

-   Se necesita una computadora Windows o Linux.
-   Descarga el firmware más reciente.
-   Mantén presionado el BUTTON del Arch Pro y enciéndelo.
-   Aparecerá un disco llamado MBED LOADER.
-   Arrastra y suelta el firmware descargado en el disco.

<div class="admonition note">
<p class="admonition-title">Notas</p>
<p>LocalFileSystem no funciona: Como el Arch Pro no tiene flash externa para almacenar archivos, el LocalFileSystem no está disponible para esta placa.</p>
<p>P0_27 y P0_28 no funcionan con DigitalOut: P0_28 y P0_27 son E/S digitales de drenaje abierto para compatibilidad con I2C. Se necesitan resistencias pull-up externas para proporcionar funcionalidad de salida.</p>
<p>Comunicación Serie USB: En Windows, instala el controlador del puerto serie de Windows mbed para usar la Comunicación Serie USB. Echa un vistazo a <a href="https://developer.mbed.org/handbook/Windows-serial-configuration">Configuración Serie de Windows</a></p>
</div>

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Recursos
--------

-   [Esquemático PDF Arch Pro V1.0](https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0_Schematic.pdf)
-   [Archivos EAGLE Arch Pro V1.0](https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0.zip)
-   [Hoja de datos LPC1768](https://files.seeedstudio.com/wiki/Arch_Pro/res/LPC1769_68_67_66_65_64_63.pdf)
-   [Manual del Usuario LPC17xx](https://files.seeedstudio.com/wiki/Arch_Pro/res/LPC17xxUserManual.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arch_Pro -->


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
