---
description: Configuración LNS del Gateway Multi-Plataforma SenseCAP M2
title: Configuración LNS del Gateway Multi-Plataforma SenseCAP M2
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration
last_update:
  date: 08/29/2023
  author: Jessie
---


## Configuración del Gateway

Configure el gateway a través de la interfaz web, por favor consulte la [Guía de Inicio Rápido](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) para iniciar sesión en Luci.

### Configuración del Plan de Canales

Navegue a `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

Seleccione la Región y el plan de frecuencias.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

Después de configurar, haga clic en `Save&Apply`

### Configuración del Servidor de Red Local

Navegue a `LoRa` > `LoRa Network`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP1.png" alt="pir" width={800} height="auto" /></p>

Configure el Modo a `Local Network Server`, agregue su información de MQTT (Broker Host/Port/User/Password), otros parámetros pueden mantener el valor predeterminado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP2.png" alt="pir" width={800} height="auto" /></p>

Haga clic en `Save&Apply` para aplicar su configuración.

:::tip Nota
Tomará aproximadamente 1 minuto iniciar el proceso, luego podrá acceder a la configuración de la interfaz gráfica.
:::

## Configuración de la Interfaz Gráfica ChirpStack

Inicie sesión en la interfaz gráfica ChirpStack a través de `http://localhost:8080`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP.png" alt="pir" width={800} height="auto" /></p>

La cuenta y contraseña predeterminadas: `admin`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP5.png" alt="pir" width={800} height="auto" /></p>

Luego verá la página del panel de control.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP6.png" alt="pir" width={800} height="auto" /></p>

### Verificar las Regiones

Navegue a `Network Server` > `Regions`.

Debería haber un ID de Región, haga clic en él y confirme la información, debería ser igual a su configuración en el paso anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP7.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP8.png" alt="pir" width={800} height="auto" /></p>

### Agregar Perfil de Dispositivo

Navegue a `Tenant` > `Device Profiles`, y haga clic en `Add Profile`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP9.png" alt="pir" width={800} height="auto" /></p>

**Versión MAC**: LoRaWAN 1.0.3

**Revisión de parámetros regionales**: A

**Algoritmo ADR**: Algoritmo ADR predeterminado (solo LoRa)

**Intervalo de uplink esperado**: Personalizar, predeterminado 3600s

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP10.png" alt="pir" width={800} height="auto" /></p>

Navegue a `Codec`, y seleccione `JavaScript functions`, copie el [Decodificador SenseCAP para TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder) y envíelo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/decode.png" alt="pir" width={800} height="auto" /></p>

### Agregar Gateway

Navegue a `Gateway`, y haga clic en `Add Gateway`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP11.png" alt="pir" width={800} height="auto" /></p>

Defina el Nombre y el ID del Gateway (puede hacer clic para generar aleatoriamente el ID), luego envíelo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP13.png" alt="pir" width={800} height="auto" /></p>

### Agregar Dispositivo

Navegue a `Tenant` > `Application`, y haga clic en `Add Application`.

Nombre su aplicación y envíela.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-applications.png" alt="pir" width={800} height="auto" /></p>

Navegue a su aplicación, y haga clic en `Add device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP14.png" alt="pir" width={800} height="auto" /></p>

Pegue su EUI del dispositivo y seleccione el perfil de dispositivo que agregamos antes, luego envíelo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP15.png" alt="pir" width={800} height="auto" /></p>

Pegue la clave de aplicación y haga clic en enviar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP16.png" alt="pir" width={800} height="auto" /></p>

### Verificar el estado del dispositivo

Verifique los `Events` de su dispositivo, obtendrá el paquete de unión cuando el dispositivo se una a la red.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP17.png" alt="pir" width={800} height="auto" /></p>

También puede verificar los detalles del paquete.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP18.png" alt="pir" width={800} height="auto" /></p>

## Integraciones

Este capítulo es para el desarrollo de servicios en la nube, la siguiente guía es de referencia.

### MQTT

#### Tema

La integración MQTT expone todos los eventos como se documenta en los tipos de eventos.

El tema de evento predeterminado es:

```cpp
application/APPLICATION_ID/device/DEV_EUI/event/EVENT
```

Consulta [Tipos de Eventos](https://www.chirpstack.io/docs/chirpstack/integrations/events.html) para más detalles.

Puedes encontrar el ID de la aplicación en la pestaña de tu aplicación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP19.png" alt="pir" width={800} height="auto" /></p>

- **Tipos de eventos**

|up|Evento de enlace ascendente|
| - | - |
|status|Estado de margen y batería|
|join|Evento de unión del dispositivo|
|ack|Confirmación (n)ack de enlace descendente confirmado|
|txack|Confirmación de transmisión de enlace descendente|
|log|Evento de registro (o error)|
|location|Evento de ubicación|
|integration|Evento de integración|

:::info Nota
`+` significa recibir todos los mensajes
:::

**Ejemplo**:

- Para recibir mensajes de enlace ascendente de todos los dispositivos bajo una puerta de enlace determinada:

```cpp
gateway/<GATEWAY_EUI>/device/+/event/up
```

- Para recibir todos los mensajes de todos los dispositivos bajo la aplicación:

```cpp
application/+/device/+/event/+
```

- Para recibir todos los mensajes de dispositivos de todas las puertas de enlace:

```cpp
gateway/+/device/+/event/+
```

Puedes verificar el `gatewayid` para distinguir los gateways.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/gateway-id.png" alt="pir" width={800} height="auto" /></p>

#### Payload

Cuando object.valid es true, significa que el análisis de datos fue exitoso, entonces puedes recorrer object.messages y extraer el tipo de datos que necesites.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP20.png" alt="pir" width={800} height="auto" /></p>

1) Ejemplo de descripción del payload del evento Up para sensores SenseCAP LoRaWAN S210X:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP21.png" alt="pir" width={800} height="auto" /></p>

- `upload_battery`: Batería
- `upload_interval`: intervalo de carga, unidad: Segundo
- `upload_version`: Versión de Hardware/Firmware
- `report_telemetry`: Valor de medición

El `measurementId` en el mensaje 'report_telemetry' por favor consulta [SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP22.png" alt="pir" width={800} height="auto" /></p>

1) Ejemplo de descripción del payload del evento Up para SenseCAP Data logger:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP23.png" alt="pir" width={600} height="auto" /></p>

El `measurementId` en el mensaje 'report_telemetry' por favor consulta [SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) para más detalles.

### HTTP

Haz clic en `+` en la pestaña HTTP para agregar una nueva integración HTTP.

LNS enviará mensajes como POST a la URL configurada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP24.png" alt="pir" width={800} height="auto" /></p>

Envía la información de tu URL.

:::info Nota
Solo soporta http, no https.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP25.png" alt="pir" width={800} height="auto" /></p>

La integración HTTP realizará solicitudes POST al endpoint de evento configurado o endpoints (se pueden configurar múltiples URLs, separadas por comas). El parámetro de consulta de URL del evento indica el tipo del evento.

La integración HTTP expone todos los eventos como se documenta en [Event Type](https://www.chirpstack.io/docs/chirpstack/integrations/events.html).

**Ejemplo**:

<details>
<summary>main.py</summary>

```cpp
from http.server import HTTPServer, BaseHTTPRequestHandler 

from urllib.parse import urlparse, parse_qs 

from chirpstack_api import integration 

from google.protobuf.json_format import Parse 

class Handler(BaseHTTPRequestHandler): 

\# True - JSON marshaler 

\# False - Protobuf marshaler (binary) 

json = False 

def do_POST(self): 

self.send_response(200) 

self.end_headers() 

query_args = parse_qs(urlparse(self.path).query) 

content_len = int(self.headers.get('Content-Length', 0)) 

body = self.rfile.read(content_len) 

if query_args["event"][0] == "up": 

self.up(body) 

elif query_args["event"][0] == "join": 

self.join(body) 

else:

print("handler for event %s is not implemented" % query_args["event"][0]) 

def up(self, body): 

up = self.unmarshal(body, integration.UplinkEvent()) 

print("Uplink received from: %s with payload: %s" % (up.device_info.dev_eui, up.data.hex())) 

def join(self, body): 

join = self.unmarshal(body, integration.JoinEvent()) 

print("Device: %s joined with DevAddr: %s" % (join.device_info.dev_eui, join.dev_addr)) 

def unmarshal(self, body, pl): 

if self.json: 

return Parse(body, pl) 

pl.ParseFromString(body) 

return pl 

httpd = HTTPServer(('', 8090), Handler) 

httpd.serve_forever() 
```

</details>

### Enlace descendente

Mensaje de enlace descendente:

:::info
Se recomienda marcar el enlace descendente como retenido. Entonces el comando no se ejecutará repetidamente.
:::

El Tema predeterminado es: `application/APPLICATION_ID/device/DEV_EUI/command/down`

`command`: Por favor consulte el comando de enlace descendente en el **Manual de Usuario del Dispositivo** para más detalles.

|Tema|application/APPLICATION_ID/device/DEV_EUI/command/down|
| - | :- |
|devEUI|EUI del Dispositivo|
|confirmed|true/false(si la carga útil debe enviarse como datos confirmados descendentes o no)|
|fPort|FPort a usar (debe ser > 0)|
|data|datos codificados en base64 (texto plano, será encriptado por ChirpStack)|

**Ejemplo**:

1) Reiniciar Sensores LoRaWAN SenseCAP S210x:

**Tema**:

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`

**Json：**

```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AMgAAAAAACsm" 

} 
```

2) Configura el intervalo de carga de los Sensores LoRaWAN SenseCAP S210x a 1min :

**Tema**：

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`

**Json**：

```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AIkAESIBAJBQ" 

} 
```
