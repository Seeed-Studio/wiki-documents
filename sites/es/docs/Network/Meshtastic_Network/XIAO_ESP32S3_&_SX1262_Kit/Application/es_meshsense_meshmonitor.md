---
description: Meshtastic Network Monitor es una herramienta que te permite visualizar, gestionar y monitorizar nodos en una red mallada Meshtastic.
title: Meshtastic Network Monitor
keywords:
  - Meshtastic
  - Source Code
  - Xiao ESP32s3
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png
slug: /xiao_esp32s3_&_wio_sx1262_kit_meshmonitor
sku: 102010611,113110064
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/es/xiao_esp32s3_&_wio_sx1262_kit_meshmonitor/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Introducción a Meshtastic Network Monitor

[Meshtastic](https://meshtastic.org/docs/introduction/) Network Monitor es una herramienta que te permite visualizar, gestionar y monitorizar nodos en una red mallada Meshtastic. Proporciona información en tiempo real sobre el estado, el enrutamiento y la comunicación entre dispositivos. El monitor es el analizador Meshtastic que recopila datos a través de un gateway conectado o de un servidor MQTT, visualiza la topología de la red y muestra información de los nodos como el estado de la batería, la intensidad de la señal y la ubicación GPS. También puede funcionar como un mapa de nodos Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:900, height:'auto'}}/></div>

**Casos de uso**

* Mapa de nodos Meshtastic. Seguimiento y visualización de nodos exteriores en áreas remotas.
* Analizador Meshtastic. Monitorización del rendimiento de la comunicación y del enrutamiento en redes malladas.
* Monitor Meshtastic. Depuración y prueba de la conectividad de red para dispositivos Meshtastic.

**Monitores Meshtastic comunes**

* Meshsense: [click here](https://affirmatech.com/meshsense) to learn more
* Meshmonitor: [click here](https://meshmonitor.org/) to learn more

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

Necesitarás un **Seeed Xiao ESP32S3 & SX1262 Meshtastic Kit** configurado como gateway MQTT. Esto permite la comunicación en tiempo real entre tu red Meshtastic y Meshsense. Si también quieres monitorizar y mostrar la posición, añade un módulo GPS.

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

#### Configuración del gateway MQTT

Sigue el tutorial de configuración oficial para configurar mqtt: [Xiao ESP32S3 & SX1262 MQTT Gateway Setup](https://wiki.seeedstudio.com/es/xiao_esp32s3_&_wio_sx1262_kit_mqtt/)

:::tip
Para mostrar la ubicación GPS en tiempo real, asegúrate de que el GPS esté habilitado en tu nodo. Y mientras configuras MQTT, asegúrate de que se permita el reporte de ubicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>

:::

#### Conexión de red

Conecta tu ordenador a la misma red Wi‑Fi que el kit Xiao ESP32S3. Asegúrate de que sea una red Wi‑Fi de 2,4 GHz.

Abre un terminal serie (por ejemplo, Arduino Serial Monitor o PuTTY) para encontrar la dirección IP de tu dispositivo Xiao. Puedes usar el [Meshtastic web serial monitor](https://flasher.meshtastic.org/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPAdress.png" style={{width:500, height:'auto'}}/></div>

Introduce esta dirección IP en el campo de conexión de dispositivo de Meshsense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPInput.png" style={{width:500, height:'auto'}}/></div>

Una vez conectado, tu nodo Meshtastic debería aparecer en Meshsense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/Connected.png" style={{width:500, height:'auto'}}/></div>

### Visualización de posición

#### Configuración de hardware

Para mostrar las posiciones de los nodos, conecta un **módulo L76K GPS** al kit Xiao ESP32S3. [Click here](https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html) to get one now.

#### Configuración de software

* En la aplicación Meshsense, asegúrate de que el reporte de GPS esté habilitado.
* Una vez conectado, la aplicación mostrará la ubicación en tiempo real de cada nodo en el mapa. Puedes ver la posición de tu nodo directamente en la APP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPPPosition.png" style={{width:500, height:'auto'}}/></div>

También en el mapa del sitio web de Meshsense, puedes ver tu posición en tiempo real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>


Con esta configuración, puedes gestionar tu red privada Meshtastic de forma eficiente y visualizar el comportamiento de los nodos directamente en Meshsense.

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>