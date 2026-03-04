---
sidebar_position: 2
description: Usando XIAO ESP32C3 para conectarse a SenseCraft Data Platform AI Advisor para consejos de plantación
title: Consejos de Plantación
keywords:
- sensecraft data platform
- xiao
- AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-data-platform/applications/planting-advice
aliases:
  - /xiao_esp32c3_sensecapai
last_update:
  date: 06/06/2025
  author: Jancee
---

:::tip note
¡La Plataforma SenseCAP ha sido oficialmente renombrada como `SenseCraft Data Platform`!
:::

# Usando XIAO ESP32C3 para conectarse a SenseCraft Data Platform para consejos de plantación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/1.png" style={{width:1000, height:'auto'}}/></div>

Durante este tiempo, la plataforma SenseCraft Data de Seeed Studio desarrolló y lanzó nuevas características de IA. Actualmente las características principales del AI Advisor en SenseCraft Data Platform se enfocan en proporcionar consejos constructivos de plantación a los cultivadores, ¡y se actualizará con características de IA más ricas en el futuro cercano!

Este tutorial, entonces, conectará la serie XIAO ESP32 con la `plataforma SenseCraft Data`, detallando cómo usar el XIAO y los sensores de la serie Grove para subir datos a la plataforma y obtener sugerencias constructivas de la IA basadas en estos valores de sensores.

## Primeros Pasos

### Preparación de Hardware

Las tres piezas de hardware que se usarán en este tutorial son el XIAO ESP32C3, la Base Grove para XIAO, y el sensor de temperatura y humedad Grove SHT40. Para la conveniencia del cableado, usamos la placa de expansión XIAO, que puedes comprar según tus necesidades reales.

<table align="center">
  <tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Base Grove para XIAO</th>
          <th>Grove - Sensor de Temperatura y Humedad(SHT40)</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/SHT40.jpg" style={{width:200, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
    </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

### Preparación de Software

Si esta es tu primera vez usando el XIAO ESP32C3, entonces necesitas leer primero este Wiki para aprender a configurar un buen entorno de desarrollo en Arduino.

- [Primeros Pasos con Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/#software-setup)

Además, este tutorial es compatible con [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html), también puedes usar XIAO ESP32S3 para completar el contenido de este tutorial.

- [Primeros Pasos con Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/#software-preparation)

Dado que se usa el sensor SHT40, también necesitas agregar las siguientes dos librerías en Arduino para asegurar que el programa pueda ejecutarse sin problemas.

- [arduino-i2c-sht4x](https://github.com/Sensirion/arduino-i2c-sht4x)

- [Sensirion Arduino Core Library](https://github.com/Sensirion/arduino-core)

## XIAO ESP32C3 Obteniendo Datos de Temperatura y Humedad

Como se muestra en la figura a continuación, por favor conecta el sensor de temperatura y humedad Grove SHT40 a la interfaz IIC del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/2.jpg" style={{width:700, height:'auto'}}/></div>

Luego sube el siguiente programa para el XIAO ESP32C3 para hacer funcionar el sensor SHT40 y comenzar a obtener los valores de temperatura y humedad en el aire.

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }
}
```

Abre el monitor serie del IDE de Arduino y selecciona la velocidad de baudios como 115200 y observa el resultado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/166.png" style={{width:700, height:'auto'}}/></div>

## Introducción a la API HTTPS de SenseCraft Data Platform -- Subir Datos de Sensores

Ahora que sabemos cómo obtener datos del sensor SHT40, comencemos aprendiendo las siguientes reglas de llamada de API para `SenseCraft Data Platform`. Puedes leer sobre el uso de la API de `SenseCraft Data Platform` haciendo clic en el botón de abajo para saltar directamente al Centro de Documentación de SenseCraft.

- [Centro de Documentación SenseCraft](https://sensecap-docs.seeed.cc/httpapi_quickstart.html)

El principio básico de la Plataforma de Datos SenseCraft para recibir datos de sensores es usar EUI, Key como información de autenticación y reportar los datos del dispositivo por POST.

Dirección del Servidor HTTPS:

```
https://sensecap.seeed.cc/deviceapi
```

### Acerca del Header

En POST, necesitas agregar la información de autenticación en el Header, que son los datos encriptados en base64 del **EUI** y **Key** del dispositivo en el siguiente formato básico.

```
authorization = Device base64(EUI:Key)
```

### Acerca de la Interfaz

La ruta del servidor que debe usar el dispositivo para reportar datos del sensor es: `/kit/message_uplink`, el modo es **POST**, y los siguientes parámetros de solicitud están disponibles y permitidos.

<table align="center">
 <tr>
     <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
 </tr>
 <tr>
     <td align="center">- requestId</td>
     <td align="center">string</td>
     <td align="center">El uuidv4 se genera en el lado del dispositivo cada vez que se reportan datos, asegurando que el valor sea diferente para cada mensaje.</td>
 </tr>
 <tr>
     <td align="center">- timestamp</td>
     <td align="center">string</td>
     <td align="center">Marca de tiempo en milisegundos cuando se envió el mensaje.</td>
 </tr>
 <tr>
     <td align="center">- intent</td>
     <td align="center">string</td>
     <td align="center">Actualmente fijo a "event".</td>
 </tr>
 <tr>
     <td align="center">- deviceEui</td>
     <td align="center">string</td>
     <td align="center">EUI del Dispositivo.</td>
 </tr>
 <tr>
     <td align="center">- deviceKey</td>
     <td align="center">string</td>
     <td align="center">Key del Dispositivo.</td>
 </tr>
    <tr>
     <td align="center">- events</td>
     <td align="center">[object]</td>
     <td align="center">Un arreglo de eventos donde se reporta la recolección de datos y el estado del dispositivo.</td>
 </tr>
    <tr>
     <td align="center">-- name</td>
     <td align="center">string</td>
     <td align="center">Nombre del Evento.</td>
 </tr>
    <tr>
     <td align="center">-- value</td>
     <td align="center">[object]</td>
     <td align="center">Valor del Evento.</td>
 </tr>
    <tr>
     <td align="center">-- timestamp</td>
     <td align="center">string</td>
     <td align="center">Marca de tiempo en milisegundos al momento de la recolección de datos.</td>
 </tr>
</table>

El siguiente es un ejemplo de envío de datos de carga del sensor.

```json
{
    "requestId": "aaaa-aaaa-aaaa-aaaa",
    "timestamp": "1691026791405",
    "intent": "event",
    "deviceEui": "2CF7xxxxxxx00002",
    "deviceKey": "38xxxxxxxxxxxxxxxxxxxxC0EE76C3CD",
    "events": [
        {
            "name": "measure-sensor",
            "value": [
                {
                    "channel": "1",
                    "measurements": {
                        "4097": "31.38",
                        "4098": "59.60"
                    },
                    "measureTime": "1691026791405"
                }
            ]
        },
        {
            "name": "update-channel-info",
            "value": [
                {
                    "channel": "1",
                    "sensorType": "1001",
                    "status": "normal"
                }
            ],
            "timestamp": "1691026791405"
        }
    ]
}
```

## Subir datos de temperatura y humedad a la Plataforma de Datos SenseCraft

Una vez que entendemos las reglas anteriores, podemos comenzar a escribir el programa HTTPS para subir los datos de temperatura y humedad de nuestro SHT40 para la Plataforma de Datos SenseCraft.

### Paso 1. Registrarse e iniciar sesión en la Plataforma de Datos SenseCraft

Puedes hacer clic en el enlace de abajo para ir directamente al sitio internacional de la Plataforma de Datos SenseCraft. Si es la primera vez que usas los servicios de SenseCraft, puede que necesites registrar una cuenta.

- [Sitio Web de la Plataforma de Datos SenseCraft](https://sensecap.seeed.cc)

Iniciar sesión en la Plataforma de Datos SenseCraft te lleva a la pantalla de la consola. Necesitamos agregar un kit propio, por favor haz clic en **DevelopKit** en la barra de menú izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/3.png" style={{width:1000, height:'auto'}}/></div>

Luego haz clic en **Create DevelopKit** en la parte superior izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/4.png" style={{width:1000, height:'auto'}}/></div>

Luego simplemente selecciona el **MIG Develop Kit** y haz clic en el botón **Confirm**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/5.png" style={{width:500, height:'auto'}}/></div>

A continuación, podrás ver el dispositivo que creaste en el panel de control, usualmente el primero. Hacer clic en el botón "Connect" para ese dispositivo mostrará la información **EUI** y **KEY** para ese dispositivo. Por favor guárdalos, los usaremos en los siguientes pasos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/6.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Obtener Información de Autenticación

La interfaz de SenseCraft para información de autenticación requiere encriptación **EUI:KEY** basada en Base64.

Por ejemplo, tu EUI es `2CF7F11003900000` y Key es `06C42483D7155E7006C42483D7155E70`. entonces puedes obtener la información de autenticación encriptada en Base64 con los siguientes comandos en la terminal.

```
echo -n 2CF7F11003900000:06C42483D7155E7006C42483D7155E70 |base64

>>> MkNGN0YxMTAwMzkwMDAwMDowNkM0MjQ4M0Q3MTU1RTcwMDZDNDI0ODNENzE1NUU3MA==
```

Por favor guarda la información de autenticación, la usaremos como el **apiKey** en el programa más tarde.

### Paso 3. Obtener el número del tipo de sensor

Incluido en la carga está el número del tipo de sensor y nombre del sensor que estamos reportando. Esto es para que SenseCraft sepa de qué sensor estamos subiendo datos y en qué unidades están los datos.

Para esta sección, por favor consulta la tabla de referencia cruzada numerada de sensores y valores proporcionada en el Centro de Documentación SenseCraft.

- [Lista de IDs de Medición](https://sensecap-docs.seeed.cc/measurement_list.html)

- [Lista de Tipos de Sensores](https://sensecap-docs.seeed.cc/sensor_types_list.html)

Cómo usar estos dos documentos, usaremos el sensor SHT40 usado en este artículo como ejemplo, para darte una introducción explicativa. El sensor SHT40 es un sensor que puede medir tanto datos de temperatura como de humedad. Así que tiene un código para el tipo de sensor y dos códigos para los valores (temperatura, humedad).

El código para un tipo de sensor que necesitamos buscar en [Lista de Tipos de Sensores](https://sensecap-docs.seeed.cc/sensor_types_list.html). Encontramos un sensor de temperatura y humedad con el código **1001**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/7.png" style={{width:700, height:'auto'}}/></div>

Los códigos para los valores del sensor de los que estamos hablando son en realidad los IDs de Medición en el diagrama, **4097** y **4098**. también puedes encontrarlos en la [Lista de IDs de Medición](https://sensecap-docs.seeed.cc/measurement_list.html) y verificar si las unidades de estos valores coinciden con tu sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/8.png" style={{width:700, height:'auto'}}/></div>

:::note
Si no puedes encontrar el tipo correcto de sensor para ti en la tabla. Puede que necesites usar un tipo personalizado con un número de sensor de **4165** a **4174**. el valor del sensor puede ser sin unidades.
:::

### Paso 4. Instalar las librerías necesarias

Primero está la librería **NTPClient**, que puede usar la red XIAO para obtener la marca de tiempo actual.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/9.png" style={{width:1000, height:'auto'}}/></div>

Siguiente está la librería **ArduinoJson**, que hace más fácil ayudarnos a analizar lo que SenseCraft nos devuelve.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/10.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5. Subir datos del sensor a través del programa

El siguiente es el procedimiento para subir datos del SHT40. Ten en cuenta que las siguientes definiciones de macro solo deben usarse si se modifican para adaptarse a tu situación.

```cpp
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* apiKey = "YOUR-DEVICE-EUI&KEY-BASE64";
const char* deviceEUI = "YOUR-DEVICE-EUI";
const char* deviceKey = "YOUR-DEVICE-KEY";
const char* dataNum_1 = "4097";  // Air temperature
const char* dataNum_2 = "4098";  // Air humidity
const char* sensorType = "1001"; // Air temperature and humidity sensors
```

Donde ssid y password se refieren al nombre de tu red y contraseña. apiKey se refiere a la información forense que obtuvimos en el **Paso 2**. deviceEUI y deviceKey son tu EUI de dispositivo y Clave, que también se obtuvieron en el **Paso 2**.

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>
#include "WiFi.h"
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <WiFiUdp.h>
#include <NTPClient.h>

// Replace with your devive content
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* apiKey = "YOUR-DEVICE-EUI&KEY-BASE64";
const char* deviceEUI = "YOUR-DEVICE-EUI";
const char* deviceKey = "YOUR-DEVICE-KEY";
const char* dataNum_1 = "4097";  // Air temperature
const char* dataNum_2 = "4098";  // Air humidity
const char* sensorType = "1001"; // Air temperature and humidity sensors

const char* ntpServer = "pool.ntp.org";

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, ntpServer);

char sensecapServer[] = "https://sensecap.seeed.cc/deviceapi/kit/message_uplink";

SensirionI2CSht4x sht4x;

void wifiConnect(){
  WiFi.begin(ssid, password);
  Serial.print("Connecting to ");
  Serial.println(ssid);
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi connected!");
  Serial.println(WiFi.localIP());
}

void setup() {
    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }

    wifiConnect();

    timeClient.begin();  // Initialize the NTP client
    timeClient.update(); // update timestamp
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }

    HTTPClient https;
    if (https.begin(sensecapServer)) {  // HTTPS
      https.addHeader("Content-Type", "application/json"); 
      String author = String("Device ") + apiKey;
      https.addHeader("authorization", author);
      String payload = String("{\"requestId\": \"aaaa-aaaa-aaaa-aaaa\", \"timestamp\": \"");
      timeClient.update(); // update timestamp
      uint64_t timestamp = timeClient.getEpochTime() * 1000ULL; // GET timestamp
      payload += String(timestamp);
      payload += String("\", \"intent\": \"event\", \"deviceEui\": \"");
      payload += deviceEUI;
      payload += String("\", \"deviceKey\": \"");
      payload += deviceKey;
      payload += String("\", \"events\": [{\"name\": \"measure-sensor\", \"value\": [{\"channel\": \"1\", \"measurements\": {\"");
      payload += dataNum_1;
      payload += String("\": \"");
      payload += String(temperature);
      payload += String("\", \"");
      payload += dataNum_2;
      payload += String("\": \"");
      payload += String(humidity);
      payload += String("\"}, \"measureTime\": \"");
      payload += String(timestamp);
      payload += String("\"}]}, {\"name\": \"update-channel-info\", \"value\": [{\"channel\": \"1\", \"sensorType\": \"");
      payload += sensorType;
      payload += String("\", \"status\": \"normal\"}], \"timestamp\": \"");
      payload += String(timestamp);
      payload += String("\"}]}");
      Serial.println(payload);
      int httpCode = https.POST(payload);   // start connection and send HTTP header
      if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
        String payload = https.getString();
        Serial.println(payload);
      }
      else{
        Serial.print("[HTTP] ERROR: ");
        Serial.println(httpCode);
      }
    }
    else{
      Serial.println("[HTTPS] Unable to connect");
      delay(1000);
    }
    delay(300000);
}
```

Enciende el monitor serie, cuando lo enciendas, el programa comenzará a ejecutarse, cuando recibas la respuesta como se muestra en la figura, significa que SenseCraft ha recibido exitosamente una de tus cargas de datos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip
El intervalo de tiempo mínimo para que SenseCraft reciba cargas de datos es de cinco minutos.
:::

## Introducción a la API HTTP de `SenseCraft Data Platform` -- Obteniendo Consejos de IA

A continuación, aprendamos cómo usar la API de `SenseCraft Data Platform` a continuación. Usa nuestros datos de sensores a lo largo del tiempo como referencia para obtener sugerencias de la IA.

El proceso de llamada de interfaz para SenseCraft AI es aproximadamente el siguiente.

- Obtener los IDs del dispositivo y valores de medición bajo la cuenta que son compatibles para uso en AIGC a través de la interfaz I.
- Usando el resultado obtenido por la interfaz I como uno de los parámetros, se llama a la interfaz II para obtener el resultado AIGC.
  - Dado que el tiempo de generación AIGC puede ser largo, la interfaz I devolverá un **resource_id** cuando se llame por primera vez, y luego el front-end usará el **resource_id** para sondear el resultado de la respuesta. Cuando el código de la respuesta es **11338**, significa que el AIGC aún está en proceso de inferencia, y la interfaz II necesita ser llamada nuevamente con el **resource_id** hasta que se devuelva el resultado final.
  - La interfaz II tiene un límite de flujo de hasta diez solicitudes dentro de cinco minutos para la misma cuenta.

Dirección del Servidor HTTPS:

```
https://sensecap.seeed.cc/openapi
```

### Acerca de la Interfaz I

La ruta del servidor que debe usar el dispositivo para reportar datos del sensor es: `/ai/view_suggestion_by_measurements`, el modo es **POST**, y los siguientes parámetros de solicitud están disponibles y permitidos.

<table align="center">
 <tr>
     <th>Nombre</th>
        <th>Descripción</th>
        <th>Nota</th>
 </tr>
 <tr>
     <td align="center">- lang</td>
     <td align="center">Seleccionar idioma</td>
     <td align="center">1:Chino, 2:Inglés. Por defecto Chino.</td>
 </tr>
 <tr>
     <td align="center">- location</td>
     <td align="center">Ubicación</td>
     <td align="center">Ubicación, ej. "Shenzhen".</td>
 </tr>
 <tr>
     <td align="center">- crop</td>
     <td align="center">Cultivo o animal</td>
     <td align="center">Cultivo o animal a consultar, ej. "manzana".</td>
 </tr>
 <tr>
     <td align="center">- time_range</td>
     <td align="center">Tiempo de consulta de datos del dispositivo</td>
     <td align="center">1: 30 días 2: 180 días 3: 360 días. Por defecto 30 días</td>
 </tr>
 <tr>
     <td align="center">- measurements</td>
     <td align="center">Tipos de medición del dispositivo</td>
     <td align="center">Hasta seis</td>
 </tr>
    <tr>
     <td align="center">-- dev_eui</td>
     <td align="center">EUI del Dispositivo</td>
     <td align="center"></td>
 </tr>
    <tr>
     <td align="center">-- channel_measurement</td>
     <td align="center"></td>
     <td align="center"></td>
 </tr>
    <tr>
     <td align="center">--- channel_index</td>
     <td align="center">Número de canal</td>
     <td align="center">Este valor está actualmente fijo en 1.</td>
 </tr>
    <tr>
     <td align="center">--- measurement_ids</td>
     <td align="center">Número de valor de medición</td>
     <td align="center"></td>
 </tr>
</table>

El siguiente es un ejemplo de llamada a la Interfaz I.

```json
{
  "lang": "2",
  "crop": "apple",
  "location": "Shenzhen",
  "time_range": "1",
  "measurements": [
  {
      "dev_eui": "2CF7F18215100010",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097",
            "4098"
          ]
        }
      ]
    },
    {
      "dev_eui": "2CF7F1C043400103",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097"
          ]
        }
      ]
    }
  ]
}
```

### Acerca de la Interfaz II

La estructura y marco de la Interfaz I es en gran medida la misma que la Interfaz II, con la única diferencia siendo la adición de un **resource_id** extra al final. Los siguientes parámetros de solicitud están disponibles y permitidos.

<table align="center">
 <tr>
     <th>Nombre</th>
        <th>Descripción</th>
        <th>Nota</th>
 </tr>
 <tr>
     <td align="center">- lang</td>
     <td align="center">Seleccionar idioma</td>
     <td align="center">1:Chino, 2:Inglés. Por defecto Chino.</td>
 </tr>
 <tr>
     <td align="center">- location</td>
     <td align="center">Ubicación</td>
     <td align="center">Ubicación, ej. "Shenzhen".</td>
 </tr>
 <tr>
     <td align="center">- crop</td>
     <td align="center">Cultivo o animal</td>
     <td align="center">Cultivo o animal a consultar, ej. "manzana".</td>
 </tr>
 <tr>
     <td align="center">- time_range</td>
     <td align="center">Tiempo de consulta de datos del dispositivo</td>
     <td align="center">1: 30 días 2: 180 días 3: 360 días. Por defecto 30 días</td>
 </tr>
 <tr>
     <td align="center">- measurements</td>
     <td align="center">Tipos de medición del dispositivo</td>
     <td align="center">Hasta seis</td>
 </tr>
  <tr>
     <td align="center">-- dev_eui</td>
     <td align="center">EUI del Dispositivo</td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">-- channel_measurement</td>
     <td align="center"></td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">--- channel_index</td>
     <td align="center">Número de canal</td>
     <td align="center">Este valor está actualmente fijo en 1.</td>
 </tr>
  <tr>
     <td align="center">--- measurement_ids</td>
     <td align="center">Número de valor de medición</td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">- resource_id</td>
     <td align="center">Credenciales en Caché</td>
     <td align="center">En el caso donde se ha hecho una pregunta y se obtiene el resultado devuelto, llevar este parámetro para sondear el backend hasta que se devuelva el resultado de la IA.</td>
 </tr>
</table>

El siguiente es un ejemplo de obtener consejos de IA.

```json
{
  "lang": "2",
  "crop": "apple",
  "location": "Shenzhen",
  "time_range": "1",
  "measurements": [
  {
      "dev_eui": "2CF7F18215100010",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097",
            "4098"
          ]
        }
      ]
    },
    {
      "dev_eui": "2CF7F1C043400103",
      "channel_measurement": [
        {
          "channel_index": "1",
          "measurement_ids": [
            "4097"
          ]
        }
      ]
    }
  ],
  "resource_id": "openAi:ask:424326279298784:1691053698953"
}
```

## XIAO ESP32C3 Obteniendo SenseCraft AI Advisor

### Paso 6. Crear Acceso API

Si deseas llamar a la interfaz AIGC de SenseCraft, entonces necesitas preparar el API ID y la API Access Key en SenseCraft. Selecciona **Access API keys** en la barra de menú izquierda del panel de control. Luego haz clic en **Create Access Key** en la parte superior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/12.png" style={{width:1000, height:'auto'}}/></div>

Copia el **Access Key ID** y **Access API Key** creados. Por favor manténlos seguros ya que los usaremos en los siguientes pasos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/13.png" style={{width:1000, height:'auto'}}/></div>

### Paso 7. Escribir y cargar programas

Siguiendo las pautas de interfaz anteriores, podemos entonces escribir un programa que permita a SenseCraft usar los datos de temperatura y humedad de nuestro SHT40 para devolvernos recomendaciones de plantación.

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "WiFi.h"
#include <HTTPClient.h>
#include <base64.h>
#include <ArduinoJson.h>

//#define DEBUG 1

// Replace with your devive content
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* username = "YOUR-API-ID";
const char* accesskey = "YOUR-ACCESS-API-KEY";
const char* deviceEUI = "YOUR-DEVICE-EUI";

const char* crop = "apple";
const char* location = "Shenzhen";
const char* timerange = "1";
const char* dataNum_1 = "4097";  //Air temperature
const char* dataNum_2 = "4098";  //Air humidity

char sensecapAIServer[] = "https://sensecap.seeed.cc/openapi/ai/view_suggestion_by_measurements";

void wifiConnect(){
  WiFi.begin(ssid, password);
  Serial.print("Connecting to ");
  Serial.println(ssid);
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi connected!");
  Serial.println(WiFi.localIP());
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while (!Serial) {
      delay(100);
  }
  wifiConnect();
}

String splicePayload(int mode, String resource_id = ""){
  String payload = String("{\"lang\": \"2\", \"crop\": \"");  // 1:Chinese 2:English
  payload += crop;
  payload += String("\", \"location\": \"");
  payload += location;
  payload += String("\", \"time_range\": \"");                    // 1:30 days, 2:180 days, 3:360 days
  payload += timerange;
  payload += String("\", \"measurements\": [{\"dev_eui\": \"");
  payload += deviceEUI;
  payload += String("\", \"channel_measurement\": [{\"channel_index\": \"1\", \"measurement_ids\": [\"");
  payload += dataNum_1;
  payload += String("\", \"");
  payload += dataNum_2;
  payload += String("\"]}]}");

  //If you need values for other sensors
//    payload += String(", {\"dev_eui\": \"");
//    payload += deviceEUI_2;
//    payload += String("\", \"channel_measurement\": [{\"channel_index\": \"1\", \"measurement_ids\": [\"");
//    payload += dataNum_3;
//    payload += String("\"]}]}");

  if(mode == 1){
    payload += String("]}");
  }
  else if(mode == 2){
    // If a query code has been obtained. mode = 2
    payload += String("], \"resource_id\": \"");
    payload += resource_id;
    payload += String("\"}");
  }

  Serial.println(payload);
  return payload;
}

void loop() {
  // put your main code here, to run repeatedly:
  HTTPClient https;
  if (https.begin(sensecapAIServer)) {  // HTTPS
    https.addHeader("Content-Type", "application/json");
    String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
    https.addHeader("Authorization", "Basic " + base64Credentials);

    String payload = splicePayload(1);

    int httpCode = https.POST(payload);   // start connection and send HTTP header
    if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
      String response = https.getString();
#ifdef DEBUG
      Serial.println(response);
#endif

      // get resource_id
      DynamicJsonDocument doc(1024);
      deserializeJson(doc, response);
      String resource_id = doc["data"]["resource_id"].as<String>();
      Serial.println("resource_id: " + resource_id);

      String payload = splicePayload(2, resource_id);

      do{
        delay(2000);
        https.addHeader("Content-Type", "application/json");
        String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
        https.addHeader("Authorization", "Basic " + base64Credentials);

        int httpCode = https.POST(payload);   // start connection and send HTTP header
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          String response = https.getString();
#ifdef DEBUG
          Serial.println(response);
#endif

          // Parsing JSON Responses
          DynamicJsonDocument doc(1024);
          deserializeJson(doc, response);
          String code = doc["code"].as<String>();
          Serial.println("status: " + code);
          if(code == "0"){
            DynamicJsonDocument doc(1024);
            deserializeJson(doc, response);
            String suggest = doc["data"].as<String>();
            Serial.println("SenseCraft AI gives the following planting advice: ");
            Serial.println(suggest);
            break;
          }
          else if(code == "11396"){
            Serial.println("Timeout. Please wait five minutes.");
            break;
          }
          else Serial.println("Waiting for a reply...");
        }
      }while(1);
    }
    else{
      Serial.print("[HTTP] ERROR: ");
      Serial.println(httpCode);
    }
  }
  else{
    Serial.println("[HTTPS] Unable to connect");
    delay(1000);
  }
  Serial.println("The next query will be in five minutes, so please do not query too often to avoid having your account restricted from use!");
  delay(300000);
}
```

Aquí, hay algunos parámetros a los que hay que prestar atención. Al principio del código, una definición de macro `DEBUG` está comentada. Si esta línea se descomenta, entonces el programa puede ejecutarse para imprimir el mensaje devuelto cada vez que SenseCraft responde.

A continuación `DEBUG` es la información que necesita ser cambiada dependiendo de tu cuenta y dispositivo. Por ejemplo, si no estás cultivando manzanas y la ubicación no es Shenzhen, entonces necesitas cambiarlo para que se adapte a tu situación.

```cpp
// Replace with your devive content
const char* ssid = "YOUR-WIFI-NAME";
const char* password = "YOUR-WIFI-PASSWORD";
const char* deviceEUI = "YOUR-DEVICE-EUI";

const char* crop = "apple";
const char* location = "Shenzhen";
const char* timerange = "1";
const char* dataNum_1 = "4097";  //Air temperature
const char* dataNum_2 = "4098";  //Air humidity
```

Además de esto, hay dos líneas en el código que analizan la API de Acceso.

```cpp
String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
```

Por ejemplo, el ID de API y la Clave de API que obtuviste en el **paso 6** son `N0AV094KBPH1J9PX` y `5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219`, respectivamente. Entonces esta línea de código deberías cambiarla a:

```cpp
String base64Credentials = base64::encode("N0AV094KBPH1J9PX:5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219");
```

Sube este programa y verás la carga del mensaje y mantendrás el bucle a través de los resultados de las respuestas devueltas por la IA hasta que se devuelvan los resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/14.png" style={{width:700, height:'auto'}}/></div>

En este punto, felicitaciones has dominado todo el conocimiento y contenido de acceso de XIAO a SenseCraft, ¡te damos la bienvenida para que uses nuestro XIAO y SenseCraft para utilizar más tu creatividad!

## Solución de Problemas

### P1: ¿Por qué obtengo resultados nulos después de obtener respuestas de IA?

Esto puede deberse a un tiempo de espera de la interfaz, puedes esperar hasta que se envíe la siguiente consulta antes de verificar los resultados. Ten en cuenta que este resultado solo se puede obtener una vez, después de eso el resultado se borra inmediatamente y ya no se puede consultar.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
