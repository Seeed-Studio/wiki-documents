---
description: SenseCAP_T1000_tracker_and_InfluxDB_Integrated
title: Integración con InfluxDB (vía TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_InfluxDB_TTS
last_update:
  date: 8/18/2023
  author: Jessie
---


[InfluxDB](https://docs.influxdata.com/influxdb/v2.0/get-started/) es una base de datos de series temporales de código abierto, enfocada en lectura de alto rendimiento, escritura de alto rendimiento, almacenamiento eficiente y análisis en tiempo real de datos masivos de series temporales. Además de protocolos nativos como HTTP y UDP, también es compatible con protocolos de comunicación de componentes como CollectD, Graphite, OpenTSDB y Prometheus. Ampliamente utilizada en monitoreo DevOps, monitoreo IoT, análisis en tiempo real y otros escenarios.

El contenido de este capítulo guiará a los usuarios sobre cómo conectar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a InfluxDB a través de TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_sense.png" alt="pir" width={800} height="auto" /></p>

Antes de comenzar la configuración, por favor consulte [Conectar SenseCAP T1000 a TTS](https://wiki.seeedstudio.com/es/SenseCAP_T1000_tracker_TTN) para conectar primero su SenseCAP T1000 Tracker a TTS.

## Preparación

Antes de configurar InfluxDB, necesitamos instalar el agente Telegraf (versión 1.9.2 o superior).

[Configuración de Telegraf](https://docs.influxdata.com/influxdb/v2.0/telegraf-configs/)

## Configurar InfluxDB Cloud

Inicie sesión en su [InfluxDB Cloud](https://us-east-1-1.aws.cloud2.influxdata.com/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

### Crear Bucket

En la pestaña **Buckets**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

Haga clic en el botón **Create Bucket** para crear un nuevo bucket.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createbucket.png" alt="pir" width={800} height="auto" /></p>

Nombre su bucket, elija cuánto tiempo permanecerán los datos en la base de datos y luego haga clic en **Create**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

### Generar Tokens

Navegue a la pestaña **API TOKENS** y haga clic en el botón **GENERATE API TOKEN** para crear un token.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

## Configurar Telegraf

### Integración MQTT

Esta sección le muestra cómo configurar su agente Telegraf con el plugin MQTT Consumer utilizado para conectarse al servidor MQTT de TTS.

Navegue a la pestaña **TELEGRAF** y haga clic en **CREATE CONFIGURATION**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telegraf.png" alt="pir" width={800} height="auto" /></p>

Seleccione su bucket que creamos anteriormente, y seleccione system.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_telegraf.png" alt="pir" width={800} height="auto" /></p>

Nombre su configuración, seleccione Create and Verify y luego Finish.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/download_config.png" alt="pir" width={800} height="auto" /></p>

Una vez que haya descargado el archivo de configuración de Telegraf como se describe en la configuración de InfluxDB Cloud 2.0, actualícelo agregando las siguientes líneas y modificándolas según la información de su servidor MQTT:

```cpp
[[inputs.mqtt_consumer]]
#
#MQTT broker URLs to be used. The format is scheme://host:port, schema can be tcp, ssl, or ws.
  servers = ["tcp://localhost:1883"]
#
#Topics to subscribe to
  topics = ["#"]
#
#Username and password
  username = "example"
  password = "NNSXS.JNSBLIV34VXYXS7D4ZWV2IKPTGJM3DFRGO.........."
#
#Needed only if your payload type is string, since Telegraf does not forward data of this type by default
  json_string_fields = ["uplink_message_frm_payload"]
#
#Define the message format
  data_format = "json"
```

:::info
Puedes verificar la información de TTS en la siguiente pestaña.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_info.png" alt="pir" width={800} height="auto" /></p>

A continuación, necesitas copiar el token generado previamente desde la pestaña Tokens y exportarlo a una variable de entorno para ser utilizado por el plugin de salida de InfluxDB, o puedes simplemente pasarlo directamente como valor de token en el archivo de configuración. Puedes establecer la variable de entorno usando el siguiente comando en tu terminal:

```cpp
INFLUX_TOKEN="paste your token here"
```

Ejecuta el agente Telegraf en tu terminal con el siguiente comando:

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/connected_MQTT.png" alt="pir" width={800} height="auto" /></p>

### Integración HTTP

Esta sección te muestra cómo configurar el agente Telegraf con el plugin HTTP Listener v2 y cómo crear una integración Webhook correspondiente en The Things Stack.

Actualiza la configuración de Telegraf que descargaste previamente como se describe en la Configuración de InfluxDB Cloud 2.0 agregando las siguientes líneas y modificándolas según tu configuración:

```cpp
[[inputs.http_listener_v2]]
#
# Address and port to host HTTP listener on
  service_address = ":8080"
#
# Path to listen to
  path = "/telegraf"
#
# HTTP methods to accept
  methods = ["POST"]
#
# Needed only if your payload type is string, since Telegraf does not forward data of this type by default
  json_string_fields = ["uplink_message_frm_payload"]
#
# Define the message format
  data_format = "json"
```

Copia el token generado desde la pestaña Tokens y úsalo como valor de token para el plugin de salida en tu archivo de configuración de Telegraf, o expórtalo a una variable de entorno con el siguiente comando en tu terminal:

```cpp
INFLUX_TOKEN="paste your token here"
```

Inicia el agente Telegraf ejecutando el siguiente comando en la terminal:

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

## Explorador de Datos

Selecciona tu tipo de explorador, selecciona **_measurement** en el menú desplegable en la ventana de Filtro y marca la casilla **mqtt_consumer**. Luego puedes elegir el tema y parámetro que deseas monitorear.

**Datos de Ubicación**

FROM: Tu bucket <br />
MEASUREMENT: matt_sonsumer <br />
_field: uplink_message_decoded_payload <br />
topic: v3/...

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map-done.png" alt="pir" width={800} height="auto" /></p>

También puedes hacer clic en **SAVE AS** en la esquina superior derecha para guardar este explorador como una celda de Dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/saveas.png" alt="pir" width={800} height="auto" /></p>

## Dashboards (Opcional)

Un dashboard es donde visualizas e interactúas con datos en tiempo real. Puedes personalizar el dashboard según tus necesidades.

Navega a la pestaña **Dashboard** y haz clic en **Create Dashbaord**.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashboard.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_dashbaord.png" alt="pir" width={800} height="auto" /></p>
