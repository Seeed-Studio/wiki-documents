---
title: SDLogger - Registrador de Datos de Hardware Abierto
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/SDLogger-Open_Hardware_Data_Logger/
slug: /es/SDLogger-Open_Hardware_Data_Logger
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](http://bz.seeedstudio.com/depot/images/product/sdlogger1.jpg)

SDLogger es un registrador serie simple basado en [SparkFun](http://www.sparkfun.com/)/[OpenLog de Nathan Seidle](https://github.com/sparkfun/OpenLog/wiki/). Utiliza un procesador ATmega644P funcionando a 14.7456MHz y registra en tarjetas SD de tamaño completo. Soporta tanto tarjetas SD estándar (FAT16) como tarjetas SDHC (FAT32). SDLogger se envía con el firmware OpenLog 1.61 instalado (compilado con soporte SDHC/FAT32 y un gran búfer de entrada de 2048 caracteres) junto con un bootloader compatible con Arduino para facilitar la actualización del programa.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/sdlogger-open-hardware-data-logger-p-723.html?cPath=132_136)


##   Características

*   Simple de configurar y usar

*   Registra automáticamente los datos recibidos en el puerto de entrada serie

*   Puede configurarse usando un archivo de configuración en la tarjeta SD

*   Soporta velocidades de transmisión serie de 2400, 4800, 9600, 19200, 38400, 57600, 115200 y 230400 a 8-N-1.

*   Soporta tanto tarjetas SD estándar hasta 2GB (FAT16) como tarjetas SDHC hasta 16GB (FAT32)

*   Gran búfer de entrada (2048 caracteres)

*   Factor de forma de tarjeta SD de tamaño completo

*   Oscilador de cristal de 14.7456 MHz para generación precisa de velocidad de transmisión

*   Rango de voltaje de entrada: 3.3 a 12V

*   Bootloader compatible con Arduino instalado para facilitar la actualización del programa

*   Soporte completo del entorno Arduino - puede usarse como una placa Arduino económica para desarrollo de programas

*   Puertos de E/S soportados en el entorno Arduino (además del puerto serie principal): 4 entradas analógicas, segundo puerto serie, puerto I2C

*   Procedimiento simple de restauración del firmware original SDLogger usando el entorno Arduino

*   Hardware/firmware SDLogger diseñado por Saanlima/Magnus Karlsson y liberado bajo licencia CC BY-SA v3

*   Archivos de diseño, código Arduino y otro código portado disponible en [GitHub](http://github.com/magnuskarlsson/SDLogger)

##   Recursos

1.  Páginas wiki de SDLogger

1.  *   [Operación básica](https://github.com/magnuskarlsson/SDLogger/wiki/Basic-operation)

1.  *   [Guía de cable FTDI para SDLogger](https://github.com/magnuskarlsson/SDLogger/wiki/FTDI-cable-Howto)

1.  *   [Guía de SDLogger como placa Arduino](https://github.com/magnuskarlsson/SDLogger/wiki/Arduino-howto)

1.  *   [Cómo restaurar el firmware original usando el entorno Arduino](https://github.com/magnuskarlsson/SDLogger/wiki/SDLogger-firmware-restore)

1.  Páginas wiki de OpenLog (Mucha de la información aquí también es relevante para SDLogger)

1.  *   [Enlace al wiki de la hoja de datos de OpenLog](https://github.com/sparkfun/OpenLog/wiki/datasheet)

1.  *   [Enlace al wiki del conjunto de comandos del firmware OpenLog](https://github.com/sparkfun/OpenLog/wiki/command-set)


###   Créditos

1.  El firmware FAT16/FAT32 fue originalmente diseñado por Roland Riegel y se libera bajo GPL v2.

2.  Hardware y firmware OpenLog desarrollado por [SparkFun](http://www.sparkfun.com/)/OpenLog de Nathan Seidle y liberado bajo licencia CC-SA v3

3.  Biblioteca Arduino SdFat escrita por Bill Greiman y liberada bajo GPL v3

## Soporte Técnico y Discusión del Producto
 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>