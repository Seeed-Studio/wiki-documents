---
description: Esta guía explica cómo mostrar las ubicaciones de los dispositivos Meshtastic en los Mapas de Nodos Meshtastic.
title: Mapa de Nodos Meshtastic
keywords:
  - Meshtastic
  - MeshMap
  - Meshtastic Node Map
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png
slug: /meshtastic_node_map_t1000_e
sku: 114993369,114993649
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/es/meshtastic_node_map_t1000_e/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Esta guía explica cómo mostrar las ubicaciones de los dispositivos [Meshtastic](https://meshtastic.org/docs/introduction/) en los Mapas de Nodos Meshtastic utilizando los dispositivos [Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html) y [T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html), suponiendo que los dispositivos ya han sido flasheados con el firmware de Meshtastic.

## Introducción a los monitores de red Meshtastic

El Mapa de Nodos Meshtastic es una interfaz en línea que visualiza las ubicaciones de los dispositivos Meshtastic en un mapa. Ayuda a los usuarios a supervisar las posiciones en tiempo real de los dispositivos en una red mallada, proporcionando información sobre la cobertura y la conectividad de la red.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:900, height:'auto'}}/></div>

Los dispositivos Meshtastic informan periódicamente de su ubicación a un servidor Meshtastic mediante MQTT. El Mapa de Nodos recupera estos informes y muestra la posición, la ruta y el alcance de la señal de cada nodo. Los dispositivos pueden informar de su ubicación:

- **Directamente mediante MapReport:** El dispositivo envía los datos de ubicación directamente al servidor.
- **Indirectamente a través de otros nodos:** La ubicación se reenvía a través de nodos vecinos.

**Casos de uso adecuados**

Los Mapas de Nodos Meshtastic son ideales para:

- Actividades al aire libre como senderismo, ciclismo o expediciones.
- Supervisión remota de dispositivos IoT distribuidos.
- Seguimiento de activos o miembros del equipo sin depender de redes celulares.

### Mapas de Nodos Meshtastic comunes

| Mapa de nodos | Funciones | Ideal para | Notas |
|----------|----------|-----------|-------|
| [MeshMap](https://meshmap.net/) | Seguimiento de nodos en tiempo real, visualización de rutas Mesh, visualización del alcance de la señal | Usuarios ocasionales, principiantes | Interfaz sencilla, servidor Meshtastic predeterminado |
| [Mapa Meshtastic de Liam Cottle](https://meshtastic.liamcottle.net/) | Seguimiento en tiempo real, vista de rutas históricas, visualización del alcance de la señal | Usuarios avanzados, análisis de datos | Utiliza un servidor MQTT personalizado |

## Comenzar con MeshMap

### Configuración

**Ajustes de LoRa**
   - Configura tu dispositivo en la banda de frecuencia LoRa correcta para tu región.
   - Activa **OK to MQTT** para permitir los reportes.

**Ajustes de MQTT**
   - Habilita MQTT en tu dispositivo.
   - Utiliza el servidor, nombre de usuario y contraseña predeterminados de Meshtastic.
   - Activa **MapReport** y marca **I agree**. Selecciona el intervalo de reporte según tus necesidades.

### Ver las ubicaciones de los dispositivos

Abre **MeshMap** en tu navegador web: [MeshMap Link](https://meshmap.net/). 

Verás todos los nodos en el mapa. Los nodos reportados **via MapReport** son actualizaciones directas del dispositivo. Los nodos reportados **via other nodes** son actualizaciones reenviadas.

Haz clic en cualquier nodo para ver información detallada (ID del dispositivo, nivel de batería, etc.), la ruta de la red mallada y la cobertura de la señal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMapPositionDisplay.png" style={{width:900, height:'auto'}}/></div>

## Comenzar con el Mapa Meshtastic de Liam Cottle

### Configuración

**Ajustes de LoRa**
   - Configura tu dispositivo en la banda de frecuencia LoRa correcta.
   - Activa **OK to MQTT**.

**Ajustes de MQTT**
   - Habilita MQTT
   - Configura los parámetros siguientes:
     - Address: `mqtt.meshtastic.liamcottle.net`
     - Username: `uplink`
     - Password: `uplink`
     - Encryption Enabled: Yes
     - JSON Output: No
     - TLS Enabled: No
   - Activa `MapReport` y marca `I agree`. Selecciona tu intervalo de reporte preferido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamMQTT.png" style={{width:600, height:'auto'}}/></div>

### Ver las ubicaciones de los dispositivos

Abre **Liam Cottle's Meshtastic Map** en tu navegador web: [Liam Cottle's Map Link](https://meshtastic.liamcottle.net/). Verás todos los nodos mostrados en el mapa.

Haz clic en cualquier nodo para ver: información detallada sobre el dispositivo, alcance de la señal, rutas históricas y actualizaciones de ubicación anteriores

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamPosition.png" style={{width:600, height:'auto'}}/></div>
