---
description: SenseCAP T1000 tracker y Thingsboard Integrado
title: ThingsBoard Integrado(vía TTS)
keywords:
- ThingsBoard
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/thingsboard_integrated
last_update:
  date: 8/20/2024
  author: Jessie
---


[ThingsBoard](https://thingsboard.io/) es una plataforma IoT de código abierto que permite el desarrollo rápido, gestión y escalado de proyectos IoT. Nuestro objetivo es proporcionar la solución IoT en la nube o local lista para usar que habilitará la infraestructura del lado del servidor para sus aplicaciones IoT.

El contenido de este capítulo guiará a los usuarios sobre cómo conectar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a ThingsBoard a través de TTN.

## Comenzar

Antes de iniciar la configuración, por favor consulte [Conectar SenseCAP T1000 a TTS](https://wiki.seeedstudio.com/es/SenseCAP_T1000_tracker_TTN) para conectar su SenseCAP T1000 Tracker a TTS primero.

## Configurar el ThingsBoard

Para comenzar, cree una cuenta con [ThingsBoard](https://thingsboard.cloud/).

### Crear Convertidor

Primero, necesitamos crear un Convertidor de Datos de Enlace Ascendente que se utilizará para recibir mensajes del TTS.

Navegue a `Data converters`, haga clic en `Create new converter`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter.png" alt="pir" width={800} height="auto" /></p>

Nombre el convertidor, habilite `Debug mode`, copie el siguiente código y haga clic en `Add`.

```cpp
var data = decodeToJson(payload);
var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

var telemetry = {};

var messages = data.uplink_message.decoded_payload.messages[0];
for (var i = 0; i < messages.length; i++) {
    var measurement = messages[i];
    
    var type = measurement.type.toLowerCase();
    var typeKey = '';
    for (var j = 0; j < type.length; j++) {
        if (type[j] === ' ') {
            typeKey += '_';
        } else {
            typeKey += type[j];
        }
    }

    telemetry[typeKey] = measurement.measurementValue;
}

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: telemetry
};

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
    var str = decodeToString(payload);
    var data = JSON.parse(str);
    return data;
}

return result;
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter2.png" alt="pir" width={800} height="auto" /></p>

### Agregar integración

Navega a `Integration`, haz clic en `Add Integration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/integrate1.png" alt="pir" width={800} height="auto" /></p>

**Type**: `The Things Stack Community`<br/>
**Enable**: `Enable integration`  `Debug mode`  `Allow create devices or assets`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-inte.png" alt="pir" width={800} height="auto" /></p>

Elige `Select existing`, y selecciona el que creamos anteriormente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-converter.png" alt="pir" width={800} height="auto" /></p>

Omite el `Downlink data converter`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/skip-down.png" alt="pir" width={800} height="auto" /></p>

**Region**: Región donde tu aplicación fue registrada dentro de TTS<br/>
**Username**: Nombre de usuario de TTS<br/>
**Password**: Contraseña de TTS<br/>
**Use API v3**: Establece `Enable`

:::tip
La información se puede encontrar en la integración MQTT de TTS.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createNEW.png" alt="pir" width={800} height="auto" /></p>
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-inte2.png" alt="pir" width={800} height="auto" /></p>

### Vista de datos

Navega a `Entities` -> `Devices`, aquí puedes ver que:

- un nuevo dispositivo fue registrado en Thingsboard
- en la sección `Latest Telemetry` verás los datos actualizados del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telemetry.png" alt="pir" width={800} height="auto" /></p>

### Agregar Dashboard

Navega a `Dashboards`, haz clic en `Create new dashboard`.

Ingresa el título del dashboard, y luego haz clic en `Next`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-dash.png" alt="pir" width={800} height="auto" /></p>

Agrega `widget`, selecciona el widget a agregar.

### Mapa de ubicación

Selecciona un widget de `map`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map1.png" alt="pir" width={800} height="auto" /></p>

**Type**: `Device`<br/>
**Device**: El dispositivo que creamos.<br/>
**Data key**: `latitude`, `longitude`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-map.png" alt="pir" width={800} height="auto" /></p>

### Otros parámetros

Consulta los pasos anteriores para agregar otros widgets.

#### Temperatura

**Device**: El dispositivo que creamos.<br/>
**Data key**: `air_temperature`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-temp.png" alt="pir" width={800} height="auto" /></p>

#### Batería

**Device**: El dispositivo que creamos.<br/>
**Data key**: `battery`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-battery.png" alt="pir" width={800} height="auto" /></p>

Aquí tienes un ejemplo básico, puedes personalizar tu propio dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard3.png" alt="pir" width={800} height="auto" /></p>
