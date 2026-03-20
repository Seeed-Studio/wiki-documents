---
description: Tutorial de configuración de puerta de enlace MQTT de Meshtastic basado en XIAO ESP32S3 y kit Wio-SX1262. Permite mensajería global, proporciona un respaldo cuando las señales de malla son débiles y garantiza una entrega de mensajes más rápida a través de Internet. 
title: Monitor de Red Meshtastic
keywords:
  - Meshtastic
  - Source Code
  - PlatformIO
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png
slug: /xiao_esp32s3_&_wio_sx1262_kit_meshmonitor
sku: 102010611,113110064
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/xiao_esp32s3_&_wio_sx1262_kit_mqtt/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Introducción al Monitor de Red Meshtastic

El Monitor de Red [Meshtastic](https://meshtastic.org/docs/introduction/) es una herramienta que te permite visualizar, gestionar y monitorizar nodos en una red de malla Meshtastic. Proporciona información en tiempo real sobre el estado, el enrutamiento y la comunicación entre dispositivos. El monitor es el analizador Meshtastic que recopila datos a través de una puerta de enlace conectada o un servidor MQTT, visualiza la topología de la red y muestra información de los nodos como estado de la batería, intensidad de la señal y ubicación GPS. También puede funcionar como un mapa de nodos Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:900, height:'auto'}}/></div>

**Casos de uso**

* Mapa de nodos Meshtastic. Seguimiento y visualización de nodos exteriores en áreas remotas.
* Analizador Meshtastic. Monitorización del rendimiento de la comunicación y del enrutamiento en redes de malla.
* Monitor Meshtastic. Depuración y prueba de la conectividad de red para dispositivos Meshtastic.

**Monitores Meshtastic comunes**

* Meshsense: [haz clic aquí](https://affirmatech.com/meshsense) para saber más
* Meshmonitor: [haz clic aquí](https://meshmonitor.org/) para saber más

**Cómo conectarse a un monitor Meshtastic**

1. Configura tus nodos Meshtastic y asegúrate de que formen una malla funcional.
2. Configura al menos un nodo como puerta de enlace (por ejemplo, puerta de enlace MQTT).
3. Conecta la aplicación de monitorización a la puerta de enlace o al servidor MQTT.
4. Verifica que los nodos sean visibles y estén informando su estado en la interfaz del monitor.

## Comienza con Meshsense

### Configuración

#### Preparación de la aplicación

Descarga e instala la aplicación **Meshsense** para tu plataforma: [Descarga de la App Meshsense](https://affirmatech.com/meshsense)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPDownload.png" style={{width:900, height:'auto'}}/></div>

#### Preparación del dispositivo

Necesitarás un **Kit Seeed Xiao ESP32S3 & SX1262 Meshtastic** configurado como puerta de enlace MQTT. Esto permite la comunicación en tiempo real entre tu red Meshtastic y Meshsense. Si también quieres monitorizar y mostrar la posición, añade un módulo GPS.

<table align="center">
<tbody><tr>
<th>Kit XIAO ESP32S3 & Wio-SX1262 para Meshtastic y LoRa</th>
<th>Módulo L76K GNSS (opcional)</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver más🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

#### Configuración de la puerta de enlace MQTT

Sigue el tutorial de configuración oficial para configurar mqtt: [Configuración de la puerta de enlace MQTT de Xiao ESP32S3 & SX1262](https://wiki.seeedstudio.com/es/xiao_esp32s3_&_wio_sx1262_kit_mqtt/)

:::tip
Para mostrar la ubicación GPS en tiempo real, asegúrate de que el GPS esté habilitado en tu nodo. Y mientras configuras MQTT, asegúrate de que se permita el reporte de ubicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>

:::

#### Conexión de red

Conecta tu ordenador a la misma red Wi-Fi que el kit Xiao ESP32S3. Asegúrate de que sea una red wifi de 2,4G.

Abre un terminal serie (por ejemplo, Arduino Serial Monitor o PuTTY) para encontrar la dirección IP de tu dispositivo Xiao. Puedes usar el [monitor serie web de Meshtastic](https://flasher.meshtastic.org/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPAdress.png" style={{width:500, height:'auto'}}/></div>

Introduce esta dirección IP en el campo de conexión de dispositivo de Meshsense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPInput.png" style={{width:500, height:'auto'}}/></div>

Una vez conectado, tu nodo Meshtastic debería aparecer en Meshsense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/Connected.png" style={{width:500, height:'auto'}}/></div>

### Visualización de posición

#### Configuración de hardware

Para mostrar las posiciones de los nodos, conecta un **módulo GPS L76K** al kit Xiao ESP32S3. [Haz clic aquí](https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html) para conseguir uno ahora.

#### Configuración de software

* En la aplicación Meshsense, asegúrate de que el reporte de GPS esté habilitado.
* Una vez conectado, la aplicación mostrará la ubicación en tiempo real de cada nodo en el mapa. Puedes ver la posición de tu nodo directamente en la APP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPPPosition.png" style={{width:500, height:'auto'}}/></div>

También en el mapa del sitio web de Meshsense puedes ver tu posición en tiempo real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>


Con esta configuración, puedes gestionar tu red privada Meshtastic de forma eficiente y visualizar el comportamiento de los nodos directamente en Meshsense.
