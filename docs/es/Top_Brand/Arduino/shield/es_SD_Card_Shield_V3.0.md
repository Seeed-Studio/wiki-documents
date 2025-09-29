---
description: SD Card Shield V3.0
title: SD Card Shield V3.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SD_Card_Shield_V3.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: SD Card Shield V3.0
category: Discontinued
bzurl:
oldwikiname: SD_Card_Shield_V3.0
prodimagename:
surveyurl: https://www.research.net/r/SD_Card_Shield_V3-0
sku:   
--- -->
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_card_shield.jpg)

El shield de tarjeta SD v3.0 añade almacenamiento a tu proyecto Arduino. Soporta tarjetas SD, SDHC o MicroSD TF. Usa el interruptor de palanca integrado para seleccionar el tipo de tarjeta SD. La tarjeta soporta el uso de uno y solo un formato de tarjeta SD, ya sea SD/SDHC, o MicroSD. Antes de usar una tarjeta SD o MicroSD, por favor configura el interruptor "SELECT" del shield en la posición adecuada: hacia la ranura SD/SDHC, o la ranura MicroSD.

El shield de tarjeta SD v3.0 usa únicamente los puertos SPI de Arduino. El shield también es apilable, por lo que shields adicionales pueden ir encima. Hay conectores compatibles con Grove para los puertos I2C y UART en la placa.

El shield de tarjeta SD v3.0 hace uso del pin 10 como chip select. Por favor asegúrate de que otros shields apilados no hagan uso de ese mismo pin. Ve la v4.0 de este shield para una versión que usa el pin 4.

Estas siguientes líneas fueron añadidas por el usuario: Este shield funciona bien para el Arduino Mega 2560, solo tienes que hacer las conexiones apropiadas. 4or10 →53, 11→51, 12 →50, y 13 →52. Esta configuración funciona bien siempre y cuando te asegures de no asignar nada más a esos pines.

**Modelo: [INT106D1P](https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109)**

## Características  

* Compatible con Arduino/Seeeduino<font color="red">( No compatible con Mega)</font>

* Compatible con Grove
* Soporta tarjetas SD, Micro SD y SDHC
* Compatible con voltaje lógico de 3.3v y 5v
* Fuente de alimentación DC de 2.6~3.6v

## Especificaciones  

| Elemento | Mín | Típico | Máx | Unidad |
|----------|-----|--------|-----|--------|
| Voltaje | 2.7 | 3.3 | 3.6 | V |
| Corriente | 0.159 | 40 | 200 | mA |
| Tipo de Tarjeta Soportada | Tarjeta SD(≤2G); Tarjeta Micro SD(≤2G); Tarjeta SDHC(≤16G) | | | / |
| Dimensión | 57.15x44.70x19.00 | | | mm |
| Peso Neto | 16.6 | | | g |

## Función de la Interfaz  

![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_Card_interface.png)
 **D10** – Usado para CS de SPI
 **D11** – Usado para MOSI de SPI
 **D12** – Usado para MISO de SPI
 **D13** – Usado para SCK de SPI
 **Conectores Grove** - Uno para puerto serie Uart, y el otro para puerto I2C.

## Uso  

### Instalación de Hardware  

Conecta el SD Card Shield al Arduino; Inserta tu tarjeta SD en el socket y asegúrate de que el selector de tarjeta apunte hacia la dirección correcta (tarjeta estándar o micro). Y luego conecta el Arduino a la PC con cable USB.
 **<font color="red">Advertencia: No insertes tarjeta SD y tarjeta microSD en el shield al mismo tiempo.</font>**
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_shield_hardware.jpg)

### Software  

Primero tienes que conseguir una [tarjeta SD o tarjeta micro SD](https://www.seeedstudio.com/depot/sandisk-microsd%C3%82%E2%84%A2-card-2gb-p-546.html?cPath=178_182), y luego formatear la tarjeta SD como FAT16 o FAT32 si es necesario.
Formatea la tarjeta SD como se muestra en las capturas de pantalla a continuación:
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/Format.jpg) ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/Format2.jpg)

1. Descarga la última versión de **SdFat for Arduino**.

2. Descomprime este paquete y ponlo en el programa Arduino-1.0: ..\arduino-1.0\libraries.

3. Selecciona la placa Arduino correspondiente, como Arduino UNO o Duemilanove u otras, y el puerto COM que estés usando.

4. Sube el sketch _**Sdinfo**_. La siguiente imagen es el resultado del monitor serie. Por supuesto puedes subir otros sketches.
![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_card_software.jpg)
5. Si ocurre un error, por favor revisa todos los pasos, y asegúrate de que la tarjeta SD esté funcionando. Si nada de eso soluciona el problema, intenta reemplazar la tarjeta SD.
Con eso hecho, puedes echar un vistazo a los otros ejemplos de la librería para leer, escribir, y registro de muestras con un GPS o reloj de tiempo real. ¡Disfruta!

## FAQ  

1. La tarjeta SD no puede ser inicializada.

2. Por favor reformatea la tarjeta SD a FAT/FTA32. Si aún no puede funcionar, se sugiere descargar el [SD Formatter](https://www.sdcard.org/downloads/formatter_3/) y reformatear la tarjeta SD con este software.

## Seguimiento de Versiones  

| Revisión | Descripciones | Lanzamiento |
|----------|---------------|-------------|
| v3.0 | Lanzamiento V3.0 | 2012/3/29 |
| v3.1 | Regulador de voltaje actualizado a MIC5205 | 2012/5/10 |

## Visor en Línea del Esquemático del SD Card Shield v3.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/Eagle_file_for_SD_card_shiled.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visor en Línea del Esquemático del SD Card Shield v3.0

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/es/images/0/09/Eagle_file_of_SD_Card_Shield_v3.0.ZIP" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos  

* **[Eagle]**  [Archivo Eagle del SD Card Shield v3.1](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/Eagle_file_for_SD_card_shiled.zip)

* **[PDF]**[PDF del SD Card Shield](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/SD%20Card%20Shield.pdf)

* **[PDF]**   [Archivo PDF del SD Card Shield v3.1](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/SD_Card_Shield.pdf)

* **[Eagle]**   [Archivo Eagle del SD Card Shield v3.0](https://wiki.seeedstudio.com/es/images/0/09/Eagle_file_of_SD_Card_Shield_v3.0.ZIP).

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
