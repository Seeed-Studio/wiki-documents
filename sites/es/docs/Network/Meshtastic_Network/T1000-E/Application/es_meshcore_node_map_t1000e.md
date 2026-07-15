---
description: Esta guía explica cómo mostrar las ubicaciones de los dispositivos MeshCore en los mapas de nodos MeshCore.
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
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/es/meshcore_node_map_t1000e/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Por qué usar Mapa de Nodos MeshCore

Node Map puede proporcionar visibilidad en tiempo real de la red [MeshCore](https://meshcore.io/#hardware) trazando las ubicaciones de los nodos, lo que permite a los usuarios comprender la topología de la red y la distribución de los nodos. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

MeshCore Node Map depende de que los nodos informen periódicamente su posición geográfica a la red. Es especialmente útil para:

- **Descubrir repetidores cercanos**: Identifica repetidores disponibles para ampliar la conectividad
- **Supervisar tu propia red**: Realiza un seguimiento del estado y la ubicación de los nodos
- **Depuración y optimización**: Optimiza la ubicación de repetidores y gateways


## Tutorial sobre el Mapa Oficial de MeshCore

El Mapa de Nodos MeshCore más popular es el `MeshCore Node Map` oficial. [Click here](https://map.meshcore.io/) para entrar en el sitio web.

### Configuración del compañero

Para que un nodo compañero aparezca en el Mapa de Nodos MeshCore, el dispositivo debe estar correctamente configurado para informar su ubicación. Configura de la siguiente manera:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### Configuración de Repeater o Room Server

Para que un repeater o room server aparezca en el Mapa de Nodos MeshCore, el dispositivo debe estar correctamente configurado para informar su ubicación. 

Primero inicia sesión en el repeater. La contraseña de administrador predeterminada de un repeater es `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

Habilita el GPS y obtén la ubicación (algunos firmware de repeater no admiten actualizar la ubicación en tiempo real, puede que necesites elegir tu ubicación manualmente).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### Busca tu nodo

Después de la configuración, espera unos minutos y entonces podrás ver tus nodos en el mapa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

Puedes ver el nombre del dispositivo, el rol y la información de configuración. Así, utilizando este mapa, puedes averiguar fácilmente dónde están esos nodos activos.

## (Avanzado) Crear tu propio frontend de Mapa de Nodos

Para usuarios avanzados, es posible crear un frontend de Mapa de Nodos personalizado. Se recomienda utilizar el siguiente flujo de trabajo: 

[Normal MeshCore Node] → [Mesh Nodes set with MQTT] → [Backend API / Database] → [Frontend Map UI]