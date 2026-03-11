---
description: Nodo Solar SenseCAP para Meshtastic y LoRa
title: Nodo Solar SenseCAP
keywords:
  - Meshtastic
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /meshtastic_solar_node
sidebar_position: 1
last_update:
  date: 3/10/2026
  author: Michelle Huang
createdAt: '2025-04-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/meshtastic_solar_node/
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="pir" width={800} height="auto" /></p>

Es un nodo de comunicaciones o repetidor económico alimentado por energía solar basado en [Meshtastic®](https://meshtastic.org/), que integra el controlador principal XIAO nRF52840 Plus y el módulo LoRa Wio-SX1262. Está diseñado específicamente para zonas sin cobertura de red. Admite comunicación de larga distancia, posicionamiento preciso y funcionamiento de bajo consumo. Es adecuado para ampliar la cobertura de red en áreas exteriores.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
    </a>
</div>

## Comparación de versiones

El Nodo Solar está disponible en dos variantes: [SenseCAP Solar Node P1](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html) y [SenseCAP Solar Node P1-Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html).

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-1_1.jpeg" alt="pir" width={800} height="auto" /></p>

## Descripción general

### Características

- Integrado con un panel solar de 5W y admite baterías externas (que deben ser proporcionadas por los propios usuarios).
- El dispositivo viene con el firmware Meshtastic preinstalado de fábrica. Puede integrarse perfectamente en el ecosistema Meshtastic.
- Compatible con el ecosistema Grove y admite la conexión plug-and-play de sensores como sensores de temperatura y humedad, sensores de luz, etc.
- Es adecuado para uso prolongado en exteriores.
- Admite transmisión de 8 a 9 KM en áreas abiertas. Puede utilizarse como nodo o repetidor exterior, ampliando fácilmente la red Mesh y mejorando la cobertura de la red.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-3.png" alt="pir" width={800} height="auto" /></p>

### Especificación

<table>
  <tr>
    <td><b>Controlador principal</b></td>
    <th>
      <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">XIAO nRF52840 Plus</a><br />
      (Nordic nRF52840, procesador ARM® Cortex®-M4 de 32 bits con FPU, 64 MHz, 256KB RAM, 1MB Flash, 2MB Flash integrada)
    </th>
  </tr>
  <tr>
    <td><b>Chip de gestión de carga</b></td>
    <td>CN3165 (0.99A)</td>
  </tr>
  <tr>
    <td><b>Módulo LoRa</b></td>
    <td>
      <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">Módulo Wio-SX1262</a><br />
      (Semtech SX1262, TXOP=22dBm@862-930MHz)
    </td>
  </tr>
  <tr>
    <td><b>Módulo GPS (para versión P1-Pro)</b></td>
    <td>
      <a href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">XIAO L76K</a><br />
      (Compatible con GPS/GLONASS/Galileo)
    </td>
  </tr>
  <tr>
    <td rowSpan="3"><b>Antena</b></td>
    <td>
      <p>LoRa:</p>
      <p>Tipo: antena de goma en forma de varilla</p>
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
    <td><b>Panel solar</b></td>
    <td>5W</td>
  </tr>
  <tr>
    <td rowSpan="2"><b>Interfaz</b></td>
    <td>Grove *1: IIC/GPIO/UART</td>
  </tr>
  <tr>
    <td>Depuración por USB-C</td>
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
    <td>Luz de latido de la malla *1</td>
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
    <td>Alimentación solar: 5V 1A</td>
  </tr>
  <tr>
    <td><b>Grado de impermeabilidad</b></td>
    <td>IPX5</td>
  </tr>
  <tr>
    <td><b>Batería (para versión P1-Pro)</b></td>
    <td>
      <p>- 4 baterías de litio 18650 (3350mAh cada una)</p>
      <p>- Compatible con carga por Type-C y solar.</p>
      <p>- Entorno de descarga: -40～60°C</p>
      <p>- Entorno de carga: 0-50°C</p>
    </td>
  </tr>
  <tr>
    <td><b>Certificación</b></td>
    <td>FCC, CE</td>
  </tr>
  <tr>
    <td><b>Dimensiones</b></td>
    <td>191.2 x 201.2 x 42.1 mm</td>
  </tr>
</table>



### Descripción del hardware

**Elementos interactivos**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

**Accesorios**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/accessory.png" alt="pir" width={800} height="auto" /></p>

**Diagrama**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>
