---
description: Configure_the_Parameters_of_Wio_Tracker_1110 
title: Configuración de Parámetros
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/configure_param_for_wio_tracker
sidebar_position: 9
sidebar_class_name: hidden
last_update:
  date: 9/14/2023
  author: Jessie
---


Antes de comenzar, por favor revisa primero [Configurar tu cadena de herramientas](https://wiki.seeedstudio.com/es/setup_toolchain_for_wio_tracker).

### Configuración de región

La región predeterminada del firmware de fábrica es EU868, para configurar la región, para cumplir con los requisitos de frecuencia de diferentes regiones, puedes seguir los pasos a continuación para cambiar la región.

Reemplaza la parte 'Region' en el ejemplo de LoRaWAN.

```cpp
REGION = SMTC_MODEM_REGION_'Region'
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/set-region.png" alt="pir" width={800} height="auto" /></p>

Luego haz clic en `Upload` para cargar el programa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/program.png" alt="pir" width={800} height="auto" /></p>

También puedes usar el botón `Serial Monitor` en la esquina superior derecha para verificar los registros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port-monitor.png" alt="pir" width={800} height="auto" /></p>

### Configuración de información de tríada

La placa de desarrollo Wio Tracker 1110 permite a los usuarios configurar el DevEUI, AppEUI y AppKey, esto es requerido al registrarse en otros servidores de red.

Abre el `LoRaWAN/TTN Example`, define la información de tríada y haz clic en `Upload`.

```cpp
static const uint8_t DEV_EUI[8]  = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t JOIN_EUI[8] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t APP_KEY[16] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/change-3-codes.png" alt="pir" width={800} height="auto" /></p>

<details>
<summary>Información</summary>

O simplemente puedes obtener la información de tríada generada por el servidor de red, luego completarla en la parte `Constants` y ejecutarla en tu placa.

ejemplo: desde TTS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

</details>
