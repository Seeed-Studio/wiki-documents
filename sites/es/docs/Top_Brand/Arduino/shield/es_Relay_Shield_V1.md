---
description: Relay Shield V1.0
title: Relay Shield V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Relay_Shield_V1
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---

name: Relay Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Relay-Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: <https://www.research.net/r/Relay-Shield_V1-0>
sku: 103030015
tags:
--- -->

El Relay Shield es un módulo inteligente compatible con Arduino que cuenta con 4 relés mecánicos que proporcionan una forma fácil de controlar alto voltaje. La potencia máxima de conmutación es de 35VDC 70W para cada canal. Puede ser controlado directamente por Arduino/Seeeduino a través de IOs digitales con alimentación externa de 9V DC. Con el socket de formato XBee y la interfaz de módulo RF de 315/433MHz, el Relay shield puede ser controlado remotamente, haciéndolo fácil de usar en robótica, control industrial, casas inteligentes, etc.
**Nota:** Ten cuidado de que los pines del Shield no deben tocar el conector USB del Arduino UNO cuando estén conectados.
![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg)

## Características ##

- Compatible con Arduino/Seeeduino, Arduino Mega y Seeeduino Mega

- 4 relés mecánicos con circuito foto-acoplado

- Equipado con orificios de tornillo para instalación fácil

- Peso ligero

- Factor de forma pequeño

- Compatibilidad nativa con Arduino/Seeeduino

- Extensible

## Especificaciones ##

|  Elemento|Mín|Típico|Máx|Unidad   |
|---|---|---|---|---|
|  **Voltaje**|7|9|12|VDC     |
|  **Corriente**|8|/|250|mA    |
|   **Voltaje de Conmutación**|/|/|35|VDC   |
| **Corriente de Conmutación**|/|/|2|A  |  
|   **Respuesta de Frecuencia**|-1|/|1|dB |  
|  **Potencia de Conmutación**|/|/|70|W |
|  **Vida del Relé**|100,000|/|/|Ciclo  |
| **Descarga de contacto ESD**| ±4|||KV|
|**Descarga de aire ESD**|±8  |  ||/|
|   **Dimensión** |   80.0x58.0x21.2 |   |   | mm  |
|   **Peso Neto** |  31±2 |   |   |  g |

## Precauciones ##

**
Coloca 2 capas de cinta aislante en la parte superior del conector usb del [Arduino](/es/Arduino) (title=undefined). Esto evitará que el relay shield haga contacto.
No operes con voltaje superior a 35V DC.
**

## Función de la Interfaz ##

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/Relayshield_schematic.jpg)

**4 grupos de canales para conexión de Alto voltaje**

Terminal 1:

COM1- Pin común

NC1- Normalmente Cerrado, en cuyo caso NC1 está conectado con COM1 cuando D0 está en bajo y desconectado cuando D0 está en alto;

NO1- Normalmente Abierto, en cuyo caso NO1 está desconectado de COM1 cuando D0 está en bajo y conectado cuando D0 está en alto.

Los terminales 2-4 son similares al terminal 1, excepto que los puertos de control son D1-D3.

**Conexión de alimentación de 9V DC**

La función del Terminal y el Jack es la misma ya que están conectados internamente, y puedes elegir cualquiera de ellos según las necesidades.

**Control IO de 4 relés a bordo**

Los 4 pines D0-D3 pueden conectarse directamente con los pines número 7-4 de Arduino, de modo que cuatro relés pueden ser fácilmente controlados por el Arduino.

**Interfaz de control RF de 315/433MHz**

Junto con los pines de GND y 5V, son la interfaz para RF de 315/433MHz con módulo codificador (se puede comprar por separado en Seeed Studio) para controlar los 4 relés remotamente.

**Socket de formato XBee para control directo por Seeed RFBee**

Los 4 relés pueden ser controlados directamente por el RFBee a través de los 4 puertos DIO del RFBee (se puede comprar por separado en Seeed Studio).

**Interfaz de control en cascada RFBee**

Como el RFBee tiene 12 puertos DIO, 2 Relay Shield más (8 relés más) pueden ser controlados a través de un RFBee. HUB1 y HUB2 son los puertos extraídos del RFBee (4 como grupo), que están conectados a la interfaz RF de 315/433MHz del Relay Shield en cascada.

## Uso ##

### Con Arduino/Seeeduino ###

El Relay Shield puede ser controlado directamente por **Arduino**

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithArduino.jpg)

Paso1. Conecta el Relay Shield a la placa **Arduino** Duemilanove (o compatible);
Paso2. Suministra alimentación de 9v DC a **Arduino** ;
Paso3. Descarga el [código de ejemplo](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip) y ejecútalo en el [IDE de Arduino](https://arduino.cc/en/Main/Software).

Si usas Arduino a través de su conexión USB para alimentación, también debes proporcionar alimentación de 9v DC al Relay Shield o los relés no conmutarán.

Los relés 1-4 pueden activarse configurando los puertos 4-7 de Arduino como salida, y haciendo un digitalWrite(portNumber,HIGH).

Usa las conexiones COMx y NCx (normalmente cerrado) o NOx (normalmente abierto) para conmutar la alimentación hacia el dispositivo controlado.

### Con [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) ###

#### Un RFBee controla un [Relay Shield](https://seeeddoc.github.io/Relay_Shield/) ####

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg)

Paso1. Descarga el [código de Arduino](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip) para el RFBee esclavo y maestro.

Paso2. Conecta el RFBee esclavo al Relay Shield.

Paso3. Suministra alimentación de 9VDC al Relay Shield.

Paso4. Alimenta el RFBee maestro con 3.3V mediante [UartSBee](https://seeeddoc.github.io/UartSBee/) u otro adaptador.

#### Un RFBee controla 3 Relay Shields ####

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/MutiRelay.jpg)

Paso1. Descarga el [código de Arduino](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip) para el RFBee esclavo y maestro.

Paso2. Conecta el RFBee esclavo al Relay Shield.

Paso3. Conecta el segundo y tercer Relay Shield al shield madre conectando los pines RF de 315/433MHz a hub1 y hub2. (Nota: 5VDC y GND también necesitan estar conectados).

Paso4. Suministra alimentación de 9VDC al Relay Shield. (Nota: los Relay Shields extendidos NO necesitan fuente de alimentación adicional).

Paso5. Alimenta el RFBee maestro con 3.3V mediante [UartSBee](https://seeeddoc.github.io/UartSBee/) u otro adaptador.

###  Con [Módulo RF de 315/433MHz](https://www.seeedstudio.com/depot/315mhz-rf-link-kits-with-encoder-and-decoder-p-151.html?cPath=139_140) ###

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithRF.jpg)

Paso1. Conecta y suelda el Receptor al Relay Shield.

Paso2: Suministra al Relay Shield alimentación de 9VDC.

Paso3: [Controla el Transmisor](https://seeeddoc.github.io/315Mhz_RF_link_kits-with_encoder_and_decoder/#Using_with_Arduino_without_Encoding_and_Decoding).

## Seguimiento de Versiones ##

<table>
  <thead>
    <tr>
      <th>Revisión</th>
      <th>Descripciones</th>
      <th>Fecha de Lanzamiento</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Relay shield V1.0</td>
      <td>Lanzamiento público inicial</td>
      <td>03/31/2010</td>
    </tr>
    <tr>
      <td>Relay shield V1.1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Relay shield V1.2</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Relay shield V1.3</td>
      <td>
        1. Cambiar el encapsulado del 7805<br/>
        2. Hacer que los terminales no toquen el conector USB de Arduino<br/>
        3. Añadir la protección para la fuente de alimentación múltiple cuando se usa con Arduino<br/>
        4. Añadir el grosor de los cables conectados a los Relés<br/>
        5. Cambiar la serigrafía al lado inferior de la placa<br/>
        6. Añadir el logo de hardware de código abierto
      </td>
      <td>12/01/2011</td>
    </tr>
  </tbody>
</table>

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[EAGLE]**  [Archivos Eagle del Relay Shield](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip)

- **[PDF]**  [Esquemático del Relay Shield](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay_shield_Schematic.pdf)

- **[PDF]**[PCB del Relay Shield](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay%20shield.pdf)

- **[CÓDIGO]**  [Código de demostración del Relay Shield para Arduino](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip)

- **[CÓDIGO]**  [Código Arduino para control RFBee del RelayShield](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip)

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
