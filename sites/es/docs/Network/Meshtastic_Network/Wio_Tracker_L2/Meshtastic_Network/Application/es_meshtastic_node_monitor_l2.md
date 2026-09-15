---
description: Meshtastic Network Monitor es una herramienta que te permite visualizar, gestionar y monitorizar nodos en una red mallada Meshtastic.
title: Meshtastic Network Monitor
keywords:
  - Meshtastic
  - Source Code
  - Wio Tracker L2 Pro
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png
slug: /meshtastic_node_monitor_l2
sku: 100029766
sidebar_position: 5
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/es/meshtastic_node_monitor_l2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introducción a Meshtastic Network Monitor

[Meshtastic](https://meshtastic.org/docs/introduction/) Network Monitor es una herramienta que te permite visualizar, gestionar y monitorizar nodos en una red mallada Meshtastic. Proporciona información en tiempo real sobre el estado, el enrutamiento y la comunicación entre dispositivos. El monitor es el analizador Meshtastic que recopila datos a través de un gateway conectado o de un servidor MQTT, visualiza la topología de la red y muestra información de los nodos como estado de la batería, intensidad de la señal y ubicación GPS. También puede funcionar como un mapa de nodos Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:900, height:'auto'}}/></div>

**Casos de uso**

* Mapa de nodos Meshtastic. Seguimiento y visualización de nodos exteriores en áreas remotas.
* Analizador Meshtastic. Monitorización del rendimiento de la comunicación y del enrutamiento en redes malladas.
* Monitor Meshtastic. Depuración y prueba de la conectividad de red para dispositivos Meshtastic.

**Monitores Meshtastic comunes**

* Meshsense: [click here](https://affirmatech.com/meshsense) para obtener más información
* Meshmonitor: [click here](https://meshmonitor.org/) para obtener más información

**Cómo conectarse a un monitor Meshtastic**

1. Configura tus nodos Meshtastic y asegúrate de que formen una malla funcional.
2. Configura al menos un nodo como gateway (por ejemplo, MQTT Gateway).
3. Conecta la aplicación de monitorización al gateway o al servidor MQTT.
4. Verifica que los nodos sean visibles y estén informando su estado en la interfaz del monitor.

## Comienza con Meshsense

### Configuración

#### Preparación de la aplicación

Descarga e instala la aplicación **Meshsense** para tu plataforma: [Meshsense App Download](https://affirmatech.com/meshsense)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPDownload.png" style={{width:900, height:'auto'}}/></div>

#### Preparación del dispositivo

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>
</a>
</div>

#### Configuración del gateway MQTT

Sigue el tutorial de configuración oficial para configurar mqtt: [Wio Trcker L2 MQTT Gateway Setup](https://wiki.seeedstudio.com/es/set_up_mqtt_gateway_l2/)

:::tip
Para mostrar la ubicación GPS en tiempo real, asegúrate de que el GPS esté habilitado en tu nodo. Y mientras configuras MQTT, asegúrate de que se permita el reporte de ubicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>

:::

#### Conexión de red

Conecta tu ordenador a la misma red Wi‑Fi que el kit Xiao ESP32S3. Asegúrate de que sea una red wifi de 2,4G.

Abre un terminal serie (por ejemplo, Arduino Serial Monitor o PuTTY) para encontrar la dirección IP de tu dispositivo Xiao. Puedes usar el [Meshtastic web serial monitor](https://flasher.meshtastic.org/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPAdress.png" style={{width:500, height:'auto'}}/></div>

Introduce esta dirección IP en el campo de conexión de dispositivo de Meshsense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPInput.png" style={{width:500, height:'auto'}}/></div>

Una vez conectado, tu nodo Meshtastic debería aparecer en Meshsense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/Connected.png" style={{width:500, height:'auto'}}/></div>

### Visualización de posición

Necesitas habilitar el GPS para obtener la posición. Esto se puede configurar directamente en el dispositivo `long pressing the position icon`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

También puedes configurarlo en la APP de tu teléfono.

* En la aplicación Meshsense, asegúrate de que el reporte de GPS esté habilitado.
* Una vez conectado, la aplicación mostrará la ubicación en tiempo real de cada nodo en el mapa. Puedes ver la posición de tu nodo directamente en la APP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPPPosition.png" style={{width:500, height:'auto'}}/></div>

También en el mapa del sitio web de Meshsense puedes ver tu posición en tiempo real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>


Con esta configuración, puedes gestionar tu red privada Meshtastic de forma eficiente y visualizar el comportamiento de los nodos directamente en Meshsense.
