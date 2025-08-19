---
description: Overview of SenseCAP S2110 Sensor Builder
title: SenseCAP S2110 Sensor Builder
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger
last_update:
  date: 07/24/2025
  author: Guillermo
---

<!-- This wiki has been devided into 3 parts. -->

# SenseCAP S2110 Sensor Builder

SenseCAP S2110 Sensor Builder es una solución revolucionaria que permite la fusión de módulos de grado industrial con módulos de nivel maker. Es una herramienta de código abierto con la capacidad de construir módulos funcionales RS485 con más de 500 módulos Grove.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg"/></div>

## Descripción General

### Objeto pequeño, funcionalidad industrial

Está equipado con Seeed Studio XIAO RP2040 como procesador dual-core ARM Cortex M0+, e incluye un conector Grove y un conector RS485, permitiendo a los desarrolladores conectar más de 500 sensores Grove y varios sensores MODBUS RS485 para desarrollar sensores personalizados de grado industrial MODBUS RS485 para aplicaciones IoT.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/107.jpg"/></div>

### Comunicación inalámbrica de largo alcance con LoRaWAN®

Para aplicaciones inalámbricas de largo alcance (LoRaWAN®), los desarrolladores pueden conectarlo fácilmente con un [SenseCAP LoRaWAN Data Logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) para transmitir los datos a SenseCAP Cloud, con una simple configuración BLE de 5 minutos mediante la app SenseCAP Mate. Resultados de datos claros y análisis pueden obtenerse fácilmente desde el Dashboard de SenseCAP y la app SenseCAP Mate. También se soportan otras plataformas IoT como Helium, TTN, LORIOT, etc.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-106.jpg"/></div>

## Características

- **Construye fácilmente sensores Modbus RS485 de grado industrial:** Con código fuente abierto y carcasa IP66, convierte fácilmente más de 500 sensores Grove existentes en sensores Modbus RS485 industriales. 6 sensores Grove ambientales ya son compatibles con el firmware nativo y se añadirán más.
- **Compatible con SenseCAP Data Logger y plataformas IoT:** Convierte en sensor LoRaWAN® con SenseCAP Data Logger y realiza configuración rápida en solo 5 minutos usando la app SenseCAP Mate.
- **Soporta registradores de datos y plataformas IoT de terceros:** Además de SenseCAP Data Logger, los desarrolladores pueden conectarlo con otros registradores que soporten Modbus RS485 y plataformas IoT de terceros.
- **Carcasa exterior industrial lista para desplegar:** Carcasa impermeable IP66 con ventana y orificio de ventilación para sensores de luz y gas, con panel de montaje personalizado, ideal para instalación en postes o paredes.
- **Impulsado por Seeed Studio XIAO RP2040:** Aprovecha el potente procesador dual-core ARM M0+ y los recursos open-source para personalizar tu propio sensor. Carga de código fácil mediante puerto USB-C.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/108.png"/></div>

El producto incluye una carcasa IP66 de grado industrial, además de pads y tornillos de montaje para un despliegue fácil y seguro en exteriores.

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong></a> <a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-outdoor-lorawan-sensor-kit-based-on-grove-p-5503.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Kit LoRaWAN 🖱️</font></span></strong></a> </div>

## Primeros Pasos con el Builder de diferentes maneras

Siendo una solución innovadora que fusiona módulos industriales y de nivel maker, hay múltiples formas de activar el Builder.

### Activar el Builder para construir sensores LoRaWAN con SenseCAP Data Logger

<div align="center"><img width={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"/></div>

Puedes construir un sensor LoRaWAN personalizado, rentable y de grado industrial usando sensores Grove, conectarlo a SenseCAP Cloud con SenseCAP Data Logger, y habilitar la transmisión de datos inalámbrica de largo alcance.

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Consíguelo ahora </font></span></strong></a> </div>

### Añadir más sensores Grove industriales LoRaWAN

Estamos buscando añadir más módulos Grove al Builder. ¡Nos encantaría que te unas! Consulta la información abajo y contribuye con tu trabajo (esto es parte del [Programa de Contribuidores de Seeed Studio](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=34120904)).

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/list_of_supported_grove_n_adding_more" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Primeros Pasos </font></span></strong></a> <a class="get_one_now_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_S2110" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Código Fuente </font></span></strong></a> <a class="get_one_now_item" href="https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 🙋 Contribuye </font></span></strong></a> </div>

### Desarrollo con la placa XIAO RP2040 usando RS485

Como está impulsado por Seeed Studio XIAO RP2040 y cuenta con un conector Grove a bordo, puedes usarlo directamente como un dispositivo de desarrollo normal. Junto con conectividad RS485, puedes añadir más sensores RS485 a XIAO y expandir tus ideas de proyecto.

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Arduino </font></span></strong></a> <a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040-with-MicroPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 MicroPython </font></span></strong></a> <a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040-with-CircuitPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 CircuitPython </font></span></strong></a></div>

## Flasheo del Firmware de Fábrica

Ahora repasaremos los pasos para flashear el firmware en el SenseCAP S2110 Sensor Builder. Aquí flashearemos el firmware de fábrica. Descarga [el firmware uf2 más reciente](https://github.com/Seeed-Studio/Seeed_Arduino_S2110/releases) antes de comenzar.

- **Paso 1:** Desatornilla los cuatro tornillos de la tapa del S2110 Sensor Builder y retira el conector PG (puedes usar una moneda).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/92.jpg"/></div>

- **Paso 2:** Si ya hiciste la conexión entre el Sensor Builder y el Data Logger con los 4 cables, se recomienda quitar el cable rojo que va al pin de 5V del Sensor Builder.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/97.jpg"/></div>

- **Paso 3:** Conecta un extremo del cable USB-C al Sensor Builder. Mientras mantienes presionado el botón **B**, conecta el otro extremo a la PC para entrar en modo de almacenamiento masivo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/98.jpg"/></div>

- **Paso 4:** Si el disco **RPI-RP2** aparece en la PC y el LED de encendido en el XIAO está encendido, la conexión está completa.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/91.png"/></div>

- **Paso 5:** Copia el archivo de firmware `sensorBuilder.ino.uf2` al disco **RPI-RP2**.

El disco desaparecerá automáticamente una vez que el flasheo haya sido exitoso.

## Recursos

- **[GitHub]** [Código fuente de SenseCAP S2110 Sensor Builder](https://github.com/Seeed-Studio/Seeed_Arduino_S2110)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte para asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación según tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
