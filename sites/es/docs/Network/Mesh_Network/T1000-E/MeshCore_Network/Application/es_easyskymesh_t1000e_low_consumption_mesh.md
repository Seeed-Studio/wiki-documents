---
description: Esta guía explica cómo usar EasySkyMesh con SenseCAP T1000-E para construir redes de sensores IoT de bajo consumo basadas en MeshCore.
title: Ahorro de energía
keywords:
  - EasySkyMesh
  - MeshCore
  - SenseCAP T1000-E
  - LoRa Mesh
  - MeshCore Sensor
  - PowerSaving
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymesht1000e.png
slug: /easyskymesh_t1000e
sku: 114993369
sidebar_position: 1
last_update:
  date: 11/13/2026
  author: Michelle Huang
createdAt: 2026-11-13T00:00:00.000Z
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/es/easyskymesh_t1000e/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Firmware IoT EasySkyMesh para SenseCAP T1000-E

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) es un proyecto de la comunidad basado en [MeshCore](https://meshcore.io/) que se centra en crear firmware de bajo consumo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymesht1000e.png" style={{width:600, height:'auto'}}/></div>

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

* SenseCAP T1000-E. [Haz clic aquí](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) para conseguir uno.
* Cable USB
* Ordenador

Conecta el T1000-E a tu ordenador usando el puerto USB Type-C.

### Descargar el firmware EasySkyMesh

Ve a la página de [EasySkyMesh Releases](https://github.com/IoTThinks/EasySkyMesh/releases). Selecciona una versión que sea compatible con tu placa.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymesht1000efirmware.png"style={{width:600, height:'auto'}}/></div>


Las versiones de EasySkyMesh pueden proporcionar diferentes archivos de firmware para distinto hardware y diferentes escenarios de actualización. Para una instalación nueva, el proyecto generalmente proporciona una imagen de firmware de instalación limpia. Para una instalación existente, usa el firmware de actualización cuando quieras conservar la configuración existente.


### Flashear el firmware

El proyecto EasySkyMesh recomienda usar el MeshCore Web Flasher para los dispositivos compatibles.

**Paso 1:** Abre [MeshCore Web Flasher](https://meshcore.io/flasher)

**Paso 2:** Selecciona **Custom Firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**Paso 3:** Selecciona el archivo de firmware EasySkyMesh.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/t1000-efolder.png" style={{width:600, height:'auto'}}/></div>

**Paso 4:** Entra en modo DFU si es necesario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/t1000enter.png" style={{width:900, height:'auto'}}/></div>

**Paso 5:** Inicia el flasheo. Espera hasta que el proceso de flasheo se complete. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/t1000flash.png" style={{width:900, height:'auto'}}/></div>

**Paso 6:** Reinicia el dispositivo.

## Ahorro de energía

El proyecto proporciona versiones de firmware PowerSaving con optimizaciones para diferentes placas MeshCore. Las versiones de EasySkyMesh han introducido funciones de ahorro de energía para dispositivos basados en ESP32 y nRF52, así como funciones adicionales de gestión de energía para diferentes roles de MeshCore.

### Firmware Companion

Todas las funciones de PowerSaving están habilitadas de forma predeterminada. El ahorro de energía de RX está configurado como "balanced".

### Firmware de repetidor y servidor de sala

El ahorro de energía está desactivado de forma predeterminada. Puedes habilitar PowerSaving a través de la CLI de MeshCore.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Powersaving_On.png" style={{width:900, height:'auto'}}/></div>

Activa el ahorro de energía mediante:

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
2. Vuelve a conectar el T1000-E.
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