---
description: Ethernet Shield V1.0
title: Ethernet Shield V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Ethernet_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name:  Ethernet Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Ethernet_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Ethernet_Shield_V1-0
sku:
tags:

--- -->
![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_Shield_Pic.jpg)

El Ethernet Shield habilita instantáneamente la conectividad a internet para proyectos de Arduino. Un controlador ethernet Wiz5100 integrado maneja hasta cuatro conexiones TCP y UDP, simplemente apílalo sobre un Arduino para crear tus propios dispositivos en red. Verifica fácilmente el estado de la conexión con las luces indicadoras integradas. Extiende tu diseño aún más con dos filas adicionales de pines de cabecera que se conectan a shields y placas de prototipado.

**Modelo:** [ARD124B2P](https://www.seeedstudio.com/depot/wiznet-ethernet-shield-w5100-p-518.html?cPath=102)

## Características ##

- Compatible con Arduino estándar y Arduino Mega

- Compatible con la librería Arduino Ethernet

- Conector ethernet RJ45 estándar

- Buffer interno de 16K bytes

- LEDs indicadores para todas las funciones

- Botón de reset de fácil acceso

- Pines de cabecera estándar para placas de prototipado de cuadrícula de 0.1"

- Hasta 4 conexiones de red TCP/UDP

## Especificaciones ##

 |Elemento| Mín| Típico| Máx| Unidad
 |---|---|---|---|---|
 |**Voltaje**|3.5|5|5.5|V|
 |**Corriente**| 120| 210| 350| mA|
|**Dimensiones**| 72.6x58.4x23.2||| mm|
 |**Conexión Soportada**| TCP/UDP||| /|
 |**Peso Neto**|24.2|||g|

## Función de la Interfaz ##

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet-hard1.png)
**RJ45** - Puerto Ethernet

**LED de Alimentación** - Alimentación

**LED RST(rojo)** - Rojo cuando se reinicia

**LED LINK** - Siempre encendido cuando el enlace está bien y parpadea durante el estado TX o RX

**LED SPD** - La luz indica que la velocidad del enlace es 100Mbps

**LED FDX** - La luz indica el estado del modo full-duplex.

**LED Coll** - La luz indica la presencia de actividad de colisión

**LED Rx** - La luz indica la presencia de actividad de recepción

**LED Tx** - La luz indica la presencia de actividad de transmisión

**Botón Reset** - Reinicia el shield Ethernet y Arduino cuando se presiona

### Uso de pines en Arduino ###

**D0** - Sin usar

**D1** - Sin usar

**D2** - Conecta el pin INT del W5100

**D3** - Controla el reset del W5100

**D4** - Sin usar

**D5** - Sin usar

**D6** - Sin usar

**D7** - Sin usar

**D8** - Sin usar

**D9** - Sin usar

**D10** - Usado para SPI Chip Select

**D11** - Usado para SPI MOSI

**D12** - Usado para SPI MISO

**D13** - Usado para SPI SCK

**D14(A0)** - Sin usar

**D15(A1)** - Sin usar

**D16(A2)** - Sin usar

**D17(A3)** - Sin usar

**D18(A4)** - Sin usar

**D19(A5)** - Sin usar

## Uso ##

### Instalación de Hardware ###

Conecta el shield ethernet con internet vía conector RJ45, y Arduino con PC vía cable USB. Inserta el shield ethernet en la placa Arduino:
![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield_hard.jpg)

### Software ###

- Abre el IDE de Arduino(1.0), abre el ejemplo **WebServer** en la librería Ethernet:

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield1.jpg) ![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield3.jpg)

- Selecciona la placa Arduino correspondiente, como Arduino UNO o Duemilanove u otras, en: **Tools- Board**; Selecciona el puerto COM que estés usando en: **Tools- Serial port**.

- Abre tu navegador web e ingresa la dirección web:192.168.1.177, verás el resultado de operación de la placa arduino como servidor web:

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield2.jpg)

## Seguimiento de Versiones ##

|Revisión| Descripciones|Lanzamiento|
|---|---|---|
|v1.0|Lanzamiento V1.0|2012/3/29|

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Primeros pasos]**[Primeros pasos con Ethernet Shield](https://arduino.cc/en/Guide/ArduinoEthernetShield)
- **[Eagle]**[Archivos Eagle del Ethernet Shield](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip)
- **[PDF]**[PCB del W5100_ethernet_shield](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield.pdf)
- **[PDF]**[Esquema del W5100_ethernet_shield](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield%20SCH.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>