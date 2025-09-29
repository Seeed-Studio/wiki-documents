---
description: SeeedStudio GD32 RISC-V Dev Board
title: SeeedStudio GD32 RISC-V Dev Board
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SeeedStudio-GD32-RISC-V-Dev-Board
last_update:
  date: 1/31/2023
  author: shuxu hu
---


![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-all.jpg)

La Placa de Desarrollo SeeedStudio GD32 RISC-V está basada en el MCU GD32VF103VBT6 que puede funcionar hasta 108MHz. El dispositivo GD32VF103 es un microcontrolador de propósito general de 32 bits basado en el núcleo RISC-V, proporciona 128 KB de memoria Flash en chip y 32 KB de memoria SRAM. Mientras tanto, proporciona una gran cantidad de recursos de interfaz: 5x U(S)ART, 2 x I2C, 3 x SPI, 2 x I2S, 2 x CAN2.0, 1 x USBFS.

Exponemos todos los pines de E/S (80 GPIOs en total) del GD32VF103, lo que satisfará sus diversas necesidades de desarrollo. Con la flash de 8MB integrada y 256 bytes de EEPROM, puede implementar aplicaciones más complejas. Además, proporcionamos una gran cantidad de recursos periféricos en la placa de desarrollo, incluyendo una LCD, un puerto USB tipo C, una ranura para tarjeta TF, dos botones de usuario y tres LEDs de usuario.

## Características

+ MCU GD32VF103VBT6 RISC-V @108MHz
+ 128KB Flash en chip + 8MB Flash en placa
+ Interfaz LCD: interfaz 8080 de 16 bits e interfaz de control de pantalla táctil SPI
+ USB Tipo C
+ Soporte GUI
+ Pantalla LCD

## Descripción General del Hardware

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-pin.jpg)

### Distribución de Pines

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-c.jpg)

## Plataformas Soportadas

| IDE PlatformIO                                                                                            |
|-----------------------------------------------------------------------------------------------------|
| ![enter image description here](https://files.seeedstudio.com/wiki/Bazaar_Document/platformio-logo.17fdc3bc.png)  |

## Comenzando

### Usar el IDE platformIO para una Demo de Prueba

#### Hardware

**Materiales requeridos**

Placa de Desarrollo SeeedStudio GD32 RISC-V, pantalla LCD resistiva de 2.8 pulgadas 240x320 píxeles, y un cable FPC que puedes comprar junto con el producto [Kit SeeedStudio GD32 RISC-V con LCD](https://www.seeedstudio.com/SeeedStudio-GD32-RISC-V-kit-with-LCD-p-4303.html).

![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/g/d/gd32vf-103vbt6-connect-2.jpg) <!-- 图片链接有问题-->

[Cable USB 3.1 Tipo C a A](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

+ **Paso1**
Conecta el cable FPC con la pantalla LCD y la Placa de Desarrollo SeeedStudio GD32 RISC-V. Cuando conectes el cable FPC, por favor deja el lado "azul" en la parte superior como muestra la imagen de arriba.

+ **Paso2**
Conecta el cable USB Tipo C en la PC y tu placa GD32.

Ahora has terminado la configuración del hardware.

#### Software

:::note
Según que la placa GD32 puede soportar el framework Arduino, pero no es perfectamente compatible con el IDE Arduino, aquí usamos el IDE platformIO para crear una demo fácil. La versión del IDE Arduino será actualizada pronto después.
:::

+ **Paso1**
Configura el IDE platformIO, el IDE platformIO está basado en Visual Studio Code.
Descarga [Visual Studio Code](https://code.visualstudio.com/).
Haz clic en el ícono "Extensions", puedes encontrarlo en el lado izquierdo de Visual Studio Code.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki1.png)

Escribe "platformIO" en el motor de búsqueda para instalarlo.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki2.png)

+ **Paso2**
Haz clic en "Open Project" y encuentra tu archivo de proyecto. Aquí usa ["TFT_GD32"](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/TFT_GD32.zip) como ejemplo.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki3.png)

Elige el framework Arduino y la placa GD32.

+ **Paso3**
Añade la [librería "LCD"](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/master.zip) en el IDE platformIO. Usualmente el archivo de librería está en /C:/user/admin/.platformio/lib/, comprime la librería "LCD" y añádela a la ruta objetivo. Git clone [framework Arduino](https://github.com/LynnL4/framework-arduino-gd32v), y añádelo a /.platformio/packages/... .

+ **Paso4**
Puedes ver que la columna de trabajo está colocada en el lado izquierdo.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki4.png)

Haz clic en "main.cpp" y compila el código. El botón de compilar está en la parte inferior de Visual Studio Code.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki5.png)

+ **Paso5**
El código es compilado a un archivo binario. Puedes usar la [herramienta DFU](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar) para descargar el archivo binario a la placa. Además necesitas instalar el firmware DFU para permitir que la placa descargue el código de la manera DFU. El firmware DFU está en el mismo documento de la [herramienta DFU](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar).
+ **Paso6**
Verifica tu placa y conéctala a la PC a través de la interfaz USB tipo-C. Asegúrate de que el método de arranque de la placa sea correcto, que es boot0 conectado al nivel alto y boot1 conectado a tierra. Ambos están en el lado izquierdo de la placa GD32, puedes ajustarlos con un par de cables.
+ **Paso7**
Abre la herramienta DFU, después de que configures la placa con los pasos de arriba, la herramienta DFU reconocerá tu placa automáticamente como se muestra en la imagen.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki6.png)

Entonces debes añadir tu archivo binario a la columna de archivo de programa APP. El archivo binario está en la ruta \TFT_GD32.pio\build\gd32vf103v-eval.
Elige el Índice 4 y haz clic en "ok" para descargar el código a la placa, después de descargar, haz clic en "Leave DFU" para permitir que la placa se desconecte de la herramienta DFU. Entonces verás una demo de contar el tiempo de procesamiento gráfico en tu LCD. Casi contiene toda la API en la librería "TFT_eSPI".

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/gd32.gif)

:::note
Si quieres descargar otro código, solo presiona el botón de reset en la placa, abre la [herramienta DFU](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar), y la herramienta DFU reconocerá la placa de nuevo. También puedes conectar el boot0 a tierra en caso de que presiones el botón de reset y borres el código en tu placa.
:::

## Recursos

+ **[PDF]** [GD32VF103_Datasheet_Rev1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_Datasheet_Rev1.0.pdf)
+ **[PDF]** [GD32VF103_User_Manual_EN_V1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_User_Manual_EN_V1.0.pdf)
+ **[Zip]** Librería ["LCD"](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/master.zip)
+ **[Zip]** Archivo de proyecto ["TFT_GD32"](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/TFT_GD32.zip)
+ **[Zip]** [Herramienta DFU](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)

## Soporte Técnico y Discusión de Productos


<br />¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
