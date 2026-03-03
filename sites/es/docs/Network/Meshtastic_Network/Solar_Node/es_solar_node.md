---
description: SenseCAP Solar Node para Meshtastic & LoRa
title:  SenseCAP Solar Node
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /es/meshtastic_solar_node
sidebar_position: 1
last_update:
  date: 12/16/2025
  author: Michelle Huang
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="pir" width={800} height="auto" /></p>

Es un nodo de comunicaciones o repetidor solar económico basado en [Meshtastic®](https://meshtastic.org/), que integra el controlador principal XIAO nRF52840 Plus y el módulo LoRa Wio-SX1262. Está específicamente diseñado para áreas sin cobertura de red. Soporta comunicación de larga distancia, posicionamiento preciso y operación de bajo consumo. Es adecuado para expandir la cobertura de red en áreas exteriores.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora </font></span></strong>
    </a>
</div>

## Comparación de Versiones

El Solar Node está disponible en dos variantes: [SenseCAP Solar Node P1](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html) y [SenseCAP Solar Node P1-Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html).

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-1_1.jpeg" alt="pir" width={800} height="auto" /></p>

## Descripción General

### Características

- Integrado con un panel solar de 5W, y soporta baterías externas (que deben ser proporcionadas por los usuarios).
- El dispositivo viene preinstalado con firmware Meshtastic de fábrica. Puede integrarse perfectamente en el ecosistema Meshtastic.
- Compatible con el ecosistema Grove, y soporta plug-and-play de sensores como sensores de temperatura y humedad, sensores de luz, etc.
- Es adecuado para uso exterior a largo plazo.
- Soporta transmisión de 8 a 9KM en áreas abiertas. Puede usarse como nodo exterior o repetidor, expandiendo fácilmente la red Mesh y mejorando la cobertura de red.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-3.png" alt="pir" width={800} height="auto" /></p>

### Especificaciones

<table>
  <tr>
    <th><b>Controlador principal</b></th>
    <th>
      <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">XIAO nRF52840 Plus</a><br />
      (Nordic nRF52840, procesador ARM® Cortex®-M4 de 32 bits con FPU, 64 MHz, 256KB RAM, 1MB Flash, 2MB Flash integrado)
    </th>
  </tr>
  <tr>
    <td><b>Módulo LoRa</b></td>
    <td>
      <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">Módulo Wio-SX1262</a><br />
      (Semtech SX1262, TXOP=22dBm@862-930MHz)
    </td>
  </tr>
  <tr>
    <td><b>Módulo GPS(para versión P1-Pro)</b></td>
    <td>
      <a href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">XIAO L76K</a><br />
      (Soporta GPS/GLONASS/Galileo)
    </td>
  </tr>
  <tr>
    <td rowSpan="3"><b>Antena</b></td>
    <td>
      <p>LoRa:</p>
      <p>Tipo: Antena de goma en forma de varilla</p>
      <p>Rango de frecuencia: 868-915MHz</p>
      <p>Ganancia: 2dBi</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>GNSS:</p>
      <p>GPS L1 C/A: 1575.42MHz</p>
      <p>GLONASS L1: 1602MHz</p>
      <p>BeiDou B1: 1561.098MHz</p>
    </td>
  </tr>
  <tr>
    <td>Bluetooth 5.0</td>
  </tr>
  <tr>
    <td><b>Panel Solar</b></td>
    <td>5W</td>
  </tr>
  <tr>
    <td rowSpan="2"><b>Interfaz</b></td>
    <td>Grove *1: IIC/GPIO/UART</td>
  </tr>
  <tr>
    <td>Depuración USB-C</td>
  </tr>
  <tr>
    <td rowSpan="3"><b>Botón</b></td>
    <td>Encendido/apagado</td>
  </tr>
  <tr>
    <td>Reinicio</td>
  </tr>
  <tr>
    <td>Definido por el usuario</td>
  </tr>
  <tr>
    <td rowSpan="4"><b>LED</b></td>
    <td>Luces indicadoras de estado de carga *2</td>
  </tr>
  <tr>
    <td>Luz indicadora de estado del panel solar *1</td>
  </tr>
  <tr>
    <td>Luz de latido Mesh *1</td>
  </tr>
  <tr>
    <td>Definido por el usuario *1</td>
  </tr>
  <tr>
    <td><b>Fuente de alimentación</b></td>
    <td>Type-C: 5V 1A</td>
  </tr>
  <tr>
    <td></td>
    <td>Fuente de alimentación solar: 5V 1A</td>
  </tr>
  <tr>
    <td><b>Clasificación de resistencia al agua</b></td>
    <td>IPX5</td>
  </tr>
  <tr>
    <td><b>Batería(para versión P1-Pro)</b></td>
    <td>
      <p>- 4 x baterías de litio 18650 (3350mAh cada una)</p>
      <p>- Soporta carga Type-C y solar.</p>
      <p>- Ambiente de descarga: -40～60°C</p>
      <p>- Ambiente de carga: 0-50°C</p>
    </td>
  </tr>
  <tr>
    <td><b>Certificación</b></td>
    <td>FCC、CE</td>
  </tr>
  <tr>
    <td><b>Dimensión</b></td>
    <td>191.2 x 201.2 x 42.1 mm</td>
  </tr>
</table>



### Descripción General del Hardware

**Elementos interactivos**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

**Accesorios**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/accessory.png" alt="pir" width={800} height="auto" /></p>

**Diagrama**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>
