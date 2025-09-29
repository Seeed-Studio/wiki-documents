---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated
title: Integración con Ubidots (vía TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_Ubidots_TTS
last_update:
  date: 8/16/2023
  author: Jessie
---


[Ubidots](https://ubidots.com/?_gl=1%2a89g1t2%2a_ga%2aMzUzMzM3MDY5LjE2NjE5MzcyMTI.%2a_ga_VEME7QQ5EZ%2aMTY2MzY0Mzc4NS44LjEuMTY2MzY0NTI3MC4wLjAuMA..) es una plataforma de desarrollo de aplicaciones IoT de bajo código que permite ensamblar y lanzar rápidamente aplicaciones IoT sin tener que escribir código o contratar un equipo de desarrollo de software. Hoy en día, más de 40,000+ aplicaciones ya conectan los puntos con Ubidots.

Para satisfacer la creciente necesidad de construir aplicaciones IoT, hemos estado cooperando con Ubidots y apoyando a la comunidad para agregar fácilmente el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a Ubidots a través de The Things Network.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/09/%E5%8D%9A%E5%AE%A2%E6%8F%92%E5%9B%BE.jpg" alt="pir" width={800} height="auto" /></p>

Antes de comenzar la configuración, por favor revisa [Conectar SenseCAP T1000 a TTS](https://wiki.seeedstudio.com/es/SenseCAP_T1000_tracker_TTN) para conectar primero tu SenseCAP T1000 Tracker a TTS.

## Configurar Ubidots

Para comenzar, crea una cuenta con [Ubidots](https://stem.ubidots.com/accounts/signin/).

Inicia sesión en tu cuenta de Ubidots y encuentra la pestaña Devices en la parte superior de tu panel de control. En su lista desplegable, elige Plugins.

### Plugins de Ubidots

Haz clic en el **+** o en el botón **Create Data Plugin** para crear un nuevo plugin.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/plugins.png" alt="pir" width={800} height="auto" /></p>

Cuando se te presenten los plugins disponibles, selecciona el plugin **The Things Stack**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/addtts.png" alt="pir" width={800} height="auto" /></p>

A continuación, necesitas seleccionar un token de Ubidots. Puedes usar el **Default token**, también puedes crear un nuevo token.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/default_token.png" alt="pir" width={800} height="auto" /></p>

Para crear un nuevo token, primero haz clic en tu avatar en la esquina superior derecha y selecciona **API Credentials**. Luego selecciona **More** debajo del Default token y agrega un nuevo token dentro de la página API Credentials.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_toekn.png" alt="pir" width={800} height="auto" /></p>

Selecciona **>** para continuar y luego presiona la marca de verificación para finalizar.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/name-description.png" alt="pir" width={800} height="auto" /></p>

### Configurar el Decodificador

Una vez creado el plugin, ve a la sección del decodificador, elimina todo el código y reemplázalo por el siguiente:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decoding_function.png" alt="pir" width={800} height="auto" /></p>

```cpp
const HOTSPOT_INFO = false;

function handleErrorIfExists(data){
 const error = 'error' in data;
 if (error) {
        const errorMsg = { "error": { "value": data.errorCode, "context" : { "reason": data.error } } };
  return errorMsg;
 }
 return false;
}

function addLat(lat, ubidotsPayload){
 ubidotsPayload.position.context.lat = lat;
}

function addLng(lng, ubidotsPayload){
 ubidotsPayload.position.context.lng = lng;
}

const coordinateActions = {
 "Longitude": addLng,
 "Latitude": addLat,
}

const assignPayloadKeys = (data, ubidotsPayload) => {
 const { type, measurementValue } = data;

 if (type === "Longitude" || type === "Latitude") {
  if (!ubidotsPayload.position) {
   ubidotsPayload.position = { "value": 1, "context": { "lat": undefined, "lng": undefined } };
  }
  coordinateActions[type](measurementValue, ubidotsPayload);
 }
 else if (data.type === "Timestamp") {
  ubidotsPayload.timestamp = data.measurementValue;
 }
 else {
  ubidotsPayload[type] = measurementValue;
 }
};

function buildUbidotsPayload(data){
 const ubidotsPayload = {};
 data.forEach(innerData => {
  innerData.forEach(innerInnerData => {
   assignPayloadKeys(innerInnerData, ubidotsPayload);
  });
 });
 return ubidotsPayload;
}

async function formatPayload(args){

 const data = args.uplink_message.decoded_payload.messages;
 let ubidotsPayload = {};

 const error = handleErrorIfExists(data[0][0]);
 if (error) return error;

 if (HOTSPOT_INFO) {
  const { hotspots, port, fcnt } = args;
  const { snr, rssi } = hotspots[0];
  Object.assign(ubidotsPayload, { SNR: snr, RSSI: rssi, port, 'Frame Counter': fcnt });
 }
 ubidotsPayload = buildUbidotsPayload(data);
 console.log(ubidotsPayload);
 return ubidotsPayload;
};

module.exports = { formatPayload };
```

## Configurar The Things Stack

Cuando hayas preparado la configuración en Ubidots, entonces necesitas crear una integración Webhook en The Things Stack usando la plantilla Webhook de Ubidots.

En The Things Stack, navega a **Integrations** → **Webhooks**, y haz clic en **Add Webhook**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Elige la plantilla Webhook de Ubidots.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-ubidots.png" alt="pir" width={800} height="auto" /></p>

Nombra tu integración completando el Webhook ID, y pega los valores del Plugin ID y el token de Ubidots.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ubi_web.png" alt="pir" width={800} height="auto" /></p>

:::info
Para encontrar el plugin ID, haz clic en tu plugin recién creado y navega a la pestaña Decoder en la izquierda. El plugin ID está disponible como parte de la URL del HTTPs Endpoint (como se resalta en la imagen a continuación).
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ids.png" alt="pir" width={800} height="auto" /></p>

## Monitorear Tus Datos

Después de que hayas completado la integración, navega al menú **Devices**. Verás tu dispositivo final apareciendo en la lista de dispositivos finales tan pronto como envíe un mensaje uplink.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check_data_ubi.png" alt="pir" width={800} height="auto" /></p>
