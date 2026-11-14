---
description: Esta guía explica cómo usar EasySkyMesh con MeshTracker X1 para construir redes de sensores IoT de bajo consumo basadas en MeshCore.
title: Ahorro de energía
keywords:
  - EasySkyMesh
  - MeshCore
  - MeshTracker X1
  - LoRa Mesh
  - MeshCore Sensor
  - PowerSaving
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1.png
slug: /easyskymesh_x1
sku: 114993369
sidebar_position: 1
last_update:
  date: 11/13/2026
  author: Michelle Huang
createdAt: 2026-11-13T00:00:00.000Z
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/es/easyskymesh_x1/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Firmware IoT EasySkyMesh para MeshTracker X1

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) es un proyecto comunitario basado en [MeshCore](https://meshcore.io/) que se centra en crear firmware de bajo consumo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1.png" style={{width:600, height:'auto'}}/></div>

EasySkyMesh añade funciones para **ahorro de energía y recopilación de datos de sensores**. Los datos de los sensores pueden ser recopilados por nodos MeshCore y transmitidos a través de una red MeshCore existente. Es especialmente útil para:

* Redes de sensores de bajo consumo
* Monitorización remota
* Despliegues alimentados por energía solar
* Monitorización ambiental
* Monitorización de infraestructuras
* Prototipado de IoT

## Flasheo del firmware

### Preparación de hardware

Antes de flashear el firmware, prepara:

* MeshTracker X1. [Haz clic aquí](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html) para conseguir uno.
* Cable USB
* Ordenador

Conecta el X1 a tu ordenador usando el puerto USB Type-C.

### Descargar el firmware EasySkyMesh

Ve a la página de [EasySkyMesh Releases](https://github.com/IoTThinks/EasySkyMesh/releases). Selecciona una versión que sea compatible con tu placa.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1firmware.png"style={{width:600, height:'auto'}}/></div>


Las versiones de EasySkyMesh pueden proporcionar diferentes archivos de firmware para distintos hardware y diferentes escenarios de actualización. Para una instalación nueva, el proyecto generalmente proporciona una imagen de firmware de instalación limpia. Para una instalación existente, usa el firmware de actualización cuando quieras conservar la configuración existente.


### Flashear el firmware

El proyecto EasySkyMesh recomienda usar MeshCore Web Flasher para los dispositivos compatibles.

**Paso 1:** Abre [MeshCore Web Flasher](https://meshcore.io/flasher)

**Paso 2:** Selecciona **Custom Firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**Paso 3:** Selecciona el archivo de firmware EasySkyMesh.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/x1folder.png" style={{width:600, height:'auto'}}/></div>

**Paso 4:** Entra en modo DFU si es necesario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/X1Enter.png" style={{width:900, height:'auto'}}/></div>

**Paso 5:** Inicia el flasheo. Espera hasta que el proceso de flasheo se complete. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/X1Flash.png" style={{width:900, height:'auto'}}/></div>

**Paso 6:** Reinicia el dispositivo.

## Ahorro de energía

El proyecto proporciona versiones de firmware PowerSaving con optimizaciones para diferentes placas MeshCore. Las versiones de EasySkyMesh han introducido funciones de ahorro de energía para dispositivos basados en ESP32 y nRF52, así como funciones adicionales de gestión de energía para diferentes roles de MeshCore.

### Firmware Companion

Todas las funciones de PowerSaving están habilitadas por defecto. El RX PowerSaving está configurado como "balanced".

### Firmware de repetidor y servidor de sala

PowerSaving está desactivado por defecto. Puedes habilitar PowerSaving a través de la CLI de MeshCore.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Powersaving_On.png" style={{width:900, height:'auto'}}/></div>

Activa PowerSaving mediante:

```text
powersaving on
```

Para comprobar el estado actual de PowerSaving:

```text
powersaving
```

[Haz clic aquí](https://github.com/IoTThinks/EasySkyMesh/wiki/PowerSaving#11-repeaters-and-room-servers) para usar más comandos.

## Solución de problemas

### El dispositivo no aparece en el Flasher

1. Asegúrate de que el cable USB admite transferencia de datos.
2. Vuelve a conectar el X1.
3. Entra de nuevo en modo DFU.
4. Actualiza el Web Flasher.
5. Prueba con otro puerto o cable USB.


Si el problema persiste, consulta el [repositorio de GitHub de EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) para ver la documentación e incidencias más recientes.

## Recursos

* [Repositorio de GitHub de EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh)
* [Instrucciones de flasheo de EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Instruction-to-flash-firmware.md)
* [Instrucciones de sensores EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Add-sensors-to-repeaters.md)

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

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>