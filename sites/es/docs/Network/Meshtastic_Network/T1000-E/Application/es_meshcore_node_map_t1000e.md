---
description: Esta guía explica cómo mostrar las ubicaciones de los dispositivos MeshCore en los Mapas de Nodos MeshCore.
title: Mapa de Nodos MeshCore
keywords:
  - MeshCore
  - MeshMap
  - MeshCore Node Map
  - SenseCAP T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg
slug: /meshcore_node_map_t1000e
sku: 114993369,114993649
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: 2026-04-3
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/es/meshcore_node_map_t1000e/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Por qué usar el Mapa de Nodos MeshCore

El Mapa de Nodos puede proporcionar visibilidad en tiempo real de la red [MeshCore](https://meshcore.io/#hardware) al trazar las ubicaciones de los nodos, lo que permite a los usuarios comprender la topología de la red y la distribución de los nodos. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

El Mapa de Nodos MeshCore depende de que los nodos informen periódicamente su posición geográfica a la red. Es especialmente útil para:

- **Descubrir repetidores cercanos**: Identificar repetidores disponibles para ampliar la conectividad
- **Supervisar tu propia red**: Rastrear el estado y la ubicación de los nodos
- **Depuración y optimización**: Optimizar la ubicación de repetidores y gateways


## Tutorial sobre el Mapa Oficial de MeshCore

El Mapa de Nodos MeshCore más popular es el `MeshCore Node Map` oficial. [Haz clic aquí](https://map.meshcore.io/) para entrar en el sitio web.

### Configuración del compañero

Para que un nodo compañero aparezca en el Mapa de Nodos MeshCore, el dispositivo debe estar correctamente configurado para informar su ubicación. Configura de la siguiente manera:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### Configuración del repetidor o servidor de sala

Para que un repetidor o servidor de sala aparezca en el Mapa de Nodos MeshCore, el dispositivo debe estar correctamente configurado para informar su ubicación. 

Primero inicia sesión en el repetidor. La contraseña de administrador predeterminada de un repetidor es `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

Habilita el GPS y obtén la ubicación (algunos firmware de repetidores no admiten la actualización de la ubicación en tiempo real, es posible que tengas que elegir tu ubicación manualmente).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### Busca tu nodo

Después de la configuración, espera unos minutos y luego podrás ver tus nodos en el mapa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

Puedes ver el nombre del dispositivo, el rol y la información de configuración. Así que, usando este mapa, puedes averiguar fácilmente dónde están esos nodos activos.

## (Avanzado) Crear tu propio frontend de Mapa de Nodos

Para usuarios avanzados, es posible crear un frontend de Mapa de Nodos personalizado. Se recomienda utilizar el siguiente flujo de trabajo: 

[Nodo MeshCore normal] → [Nodos Mesh configurados con MQTT] → [Backend API / Base de datos] → [Interfaz de mapa de frontend]

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

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