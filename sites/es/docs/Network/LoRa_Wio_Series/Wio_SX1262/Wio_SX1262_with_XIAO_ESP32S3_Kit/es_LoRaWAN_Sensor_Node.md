---
description: Nodo sensor Lorawan basado en Wio-SX1262 con módulo XIAO esp32s3
title: Nodo Sensor LoRaWAN
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67_1.webp
slug: /wio_sx1262_xiao_esp32s3_for_lora_sensor_node
sku: 102010611
sidebar_position: 4
last_update:
  date: 10/23/2024
  author: Evelyn Chen
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/wio_sx1262_xiao_esp32s3_for_lora_sensor_node/
---

# Configuración del Kit XIAO ESP32S3 & Wio-SX1262 como Nodo Sensor LoRaWAN

## Introducción

Esta wiki proporciona una guía paso a paso sobre la configuración del Kit XIAO ESP32S3 & Wio-SX1262 para actuar como un nodo sensor LoRaWAN, conectando un sensor de temperatura y humedad DHT20, agregando una puerta de enlace M2 LoRaWAN, y enviando datos a la plataforma LNS de The Things Network. También cubre la configuración de un decodificador de formato.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67.png" style={{width:900, height:'auto'}}/></div>

## Prerrequisitos

- Kit XIAO ESP32S3 & Wio-SX1262
- Sensor de temperatura y humedad DHT20
- Placa de Expansión XIAO
- Puerta de enlace interior M2 LoRaWAN
- Acceso a cuenta de The Things Network

<div class="table-center">
  <table align="center">
    <tr>
      <th>Kit XIAO ESP32S3 & Wio-SX1262</th>
      <th>Placa de Expansión XIAO</th>
      <th>Sensor de temperatura y humedad DHT20</th>
      <th>Puerta de enlace interior M2 LoRaWAN</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Configuración del Hardware

1. Conecta el módulo Wio-SX1262 al XIAO ESP32S3.
2. Conecta el sensor DHT20 (conector grove I2C) y el Kit XIAO ESP32S3 & Wio-SX1262 a la placa de expansión XIAO.
3. Conecta el kit a tu PC.
4. Conecta el gateway M2 a la alimentación y al puerto Ethernet.

## Instrucciones en Video

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/7NptcHkVcpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Registro y Configuración en TTN

Ve a https://www.thethingsnetwork.org/get-started y regístrate - como en cualquier otro sitio web. Estas instrucciones son para TTS Sandbox.

Ve a [las instrucciones de TTS Sandbox](https://www.thethingsnetwork.org/get-started) y regístrate.
Una vez que hayas confirmado tu dirección de correo electrónico, puedes iniciar sesión en la [consola](https://console.cloud.thethings.network/). Si tienes alguna duda, puedes preguntar en [el foro de the things network](https://www.thethingsnetwork.org/forum/). Inicias sesión con exactamente los mismos datos.

### Registrar gateway en TTN

Es más simple registrar tu gateway primero. Obtuve el [SenseCAP M2 LoRaWAN Indoor Gateway(SX1302)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html) como ejemplo.

Para tu Gateway LoRaWAN personal, puedes leer sobre conceptos clave y solución de problemas [aquí](https://www.thethingsindustries.com/docs/gateways/).

### Crear una nueva aplicación en TTN

Una aplicación es como una caja para mantener algunos dispositivos - normalmente haciendo lo mismo - en despliegues más grandes esto puede ser miles de dispositivos similares. Al comenzar es probable que sean solo unos pocos, así que no hay necesidad de preocuparse sobre cómo dividir tu uso por ahora.

Una vez que hayas iniciado sesión en la consola puedes ir a Aplicaciones para crear tu primera aplicación. El ID debe estar todo en minúsculas o números, sin espacios, los guiones están bien y tiene que ser único para toda la comunidad de TTN - así que first-app será rechazado - podrías usar tu-nombre-de-usuario-first-app ya que es probable que sea único. El nombre y la descripción son para tu propio uso y son opcionales.

### Registrar dispositivo final en TTN

**Paso 1**. Ve a la aplicación que creaste en el paso anterior.

**Paso 2**. Haz clic para crear nuevo dispositivo final

En el lado derecho aproximadamente a la mitad hacia abajo en el resumen de tu aplicación hay un gran botón azul **+ Register end device**. Haz clic en esto para crear la configuración para tu primer dispositivo.

**Paso 3**. Ingresa las especificaciones del dispositivo final

Estás creando tu propio dispositivo usando un stack LoRaWAN de terceros, así que no habrá una entrada en el repositorio de dispositivos, por lo que elige '**Enter end device specifics manually**'.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/61.png" style={{width:400, height:'auto'}}/></div>

**Paso 4**. Ingresa las especificaciones del dispositivo

Elige el **Frequency plan** apropiado para tu región. Considera que casi todos los países tienen leyes relacionadas con qué frecuencias usas, así que no seas creativo. Para Europa por favor usa la opción recomendada. Para otras regiones usa la entrada marcada como 'used by TTN'. Para este caso, selecciona **868 MHz**.

Elige **LoRaWAN 1.1.0** - la última en la lista - la especificación más reciente. **RadioLib usa RP001 Regional Parameters 1.1 revision A**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/62.png" style={{width:400, height:'auto'}}/></div>

En este punto se te pedirá tu **JoinEUI**. Como este es un dispositivo DIY y estamos usando RadioLib, puedes usar **todos ceros** como lo recomienda el documento de Recomendaciones Técnicas TR007 de The LoRa Alliance. Una vez que hayas puesto todos ceros y hagas clic en confirmar, se te pedirá un **DevEUI**, **AppKey** y **NwkKey**. Es preferible que la consola los **genere** para que estén formateados correctamente.

Tu End device ID puede cambiarse para hacer el dispositivo más identificable. Algo relacionado con tu hardware ayuda - como **test-device**. Entonces puedes hacer clic en el azul '**Register device**'.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/63.png" style={{width:400, height:'auto'}}/></div>

**Paso 5**. Copiar detalles del dispositivo al archivo de configuración en Arduino

Entonces necesitas copiar los detalles del dispositivo al **archivo de configuración** para RadioLib. Hay botones para copiar elementos al portapapeles para que no tengas que escribirlos a mano.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/64.png" style={{width:400, height:'auto'}}/></div>

## Configurar XIAO ESP32S3 y Kit Wio-SX1262 como Nodo Sensor LoRaWAN

El código está escrito en Arduino y está diseñado para configurar un módulo Wio-SX1262 junto con una placa XIAO ESP32S3 para actuar como un nodo sensor LoRaWAN. Conecta un sensor DHT20 para leer datos de temperatura y humedad y envía estos datos vía LoRaWAN a The Things Network.

### Instalar las librerías necesarias para XIAO ESP32S3 y sensor DHT20

- Instalar el Entorno Arduino para XIAO ESP32S3

Consulta https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/#software-preparation.

- Instalar la librería del sensor `DHT20`
paquete:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/DHT.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descargar ⬇️</font></span></strong>
    </a>
</div>

- Instalar la librería `RadioLib`
Nota. Instala la **versión 6.6.0**, de lo contrario el código no compilará.

### Configuración

**Paso 1**. Completar los parámetros de autenticación del dispositivo LoRaWAN y acceso a la red

`RADIOLIB_LORAWAN_JOIN_EUI` y `RADIOLIB_LORAWAN_DEV_EUI` se utilizan para la identificación del dispositivo cuando un dispositivo se une a la red LoRaWAN. Al igual que en una gran comunidad en línea, estos dos parámetros son la "cédula de identidad" del dispositivo, permitiendo que la red sepa qué dispositivo está solicitando unirse.

`RADIOLIB_LORAWAN_APP_KEY` y `RADIOLIB_LORAWAN_NWK_KEY` se utilizan para autenticación de seguridad y control de acceso a la red. Son similares a la "contraseña" para ingresar a la comunidad de red, asegurando que solo los dispositivos con las claves correctas puedan comunicarse de forma segura con la red. Además, pueden restringir la operación del dispositivo según los permisos de la aplicación (distinguida por APP_KEY) y la red (distinguida por NWK_KEY).

Simplemente **copia** el parámetro de TTN al archivo de configuración.

1. Aquí, se define una macro llamada `RADIOLIB_LORAWAN_JOIN_EUI`. Si esta macro no está definida en otro lugar, se establecerá a un valor hexadecimal de `todos-ceros`.
  
```cpp
#ifndef RADIOLIB_LORAWAN_JOIN_EUI
#define RADIOLIB_LORAWAN_JOIN_EUI  0x0000000000000000
#endif
```

2. De manera similar, se define la macro `RADIOLIB_LORAWAN_DEV_EUI`, que representa el `DevEUI` (Identificador Único del Dispositivo), con un valor hexadecimal específico establecido aquí, que se utiliza para la identificación del dispositivo cuando un dispositivo se une a la red LoRaWAN.

```cpp
#ifndef RADIOLIB_LORAWAN_DEV_EUI
#define RADIOLIB_LORAWAN_DEV_EUI   0x****************
#endif
```

1. Las macros `RADIOLIB_LORAWAN_APP_KEY` y `RADIOLIB_LORAWAN_NWK_KEY` están definidas, representando la AppKey y NwkKey, respectivamente, utilizadas para la autenticación de seguridad y el control de acceso a la red.

```cpp
#ifndef RADIOLIB_LORAWAN_APP_KEY
#define RADIOLIB_LORAWAN_APP_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif

#ifndef RADIOLIB_LORAWAN_NWK_KEY   // Put your Nwk Key here
#define RADIOLIB_LORAWAN_NWK_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif
```

4. Se definen las siguientes macros, que representan los `parámetros de uplink de LoRaWAN`. Estos parámetros se utilizan para configurar la carga útil de uplink enviada a la red LoRaWAN.

```cpp
#define LORAWAN_UPLINK_USER_PORT  2
#define LORAWAN_UPLINK_DATA_RATE  3

#define LORAWAN_UPLINK_PERIOD     10000 // ms

#define LORAWAN_UPLINK_DATA_MAX   115 // byte
```

**Paso 2**. Seleccionar los parámetros regionales de LoRaWAN

Hay varias opciones regionales disponibles para la comunicación LoRaWAN, incluyendo `EU868` (banda europea de 868 MHz), `US915` (banda estadounidense de 915 MHz), `AU915` (banda australiana de 915 MHz), `AS923` (banda asiática de 923 MHz), `IN865` (banda india de 865 MHz), `KR920` (banda surcoreana de 920 MHz), `CN780` (banda china de 780 MHz), y `CN500`.

La línea const `LoRaWANBand_t Region = EU868;` establece la región para la comunicación LoRaWAN a EU868. Esto significa que el dispositivo será configurado para operar en la banda de frecuencia europea de 868 MHz.

Para US915 y AU915 define una variable de sub-banda. En este caso, está establecida en 0. El comentario sugiere que esta variable de sub-banda es específicamente para las regiones US915 y AU915, aunque no se está utilizando para la región EU868 en este fragmento de código.

```cpp
const LoRaWANBand_t Region = EU868;
const uint8_t subBand = 0; // For US915 and AU915
```

### Leer datos del sensor y enviar carga útil de enlace ascendente LoRa

Leer y enviar datos del sensor a través de comunicación LoRa. La conversión a bytes con precisión decimal permite una representación más precisa de los valores de temperatura y humedad en la carga útil del enlace ascendente.

```cpp
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) {
    uplinkPayloadLen = 0;
    memset(uplinkPayload, sizeof(uplinkPayload), 0);

    // Convert temperature and humidity to bytes with decimal precision
    uint16_t tempDecimal = (temp_hum_val[1] * 100);
    uint16_t humDecimal = (temp_hum_val[0] * 100);
    uplinkPayload[uplinkPayloadLen++] = (tempDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = tempDecimal & 0xFF;
    uplinkPayload[uplinkPayloadLen++] = (humDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = humDecimal & 0xFF;

    for (int i = 0; i < uplinkPayloadLen; i++) {
      Serial.print(uplinkPayload[i], HEX);
      Serial.print(" ");
    }
```

## Flashear Firmware

El paquete de firmware completo aquí:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descargar ⬇️</font></span></strong>
    </a>
</div>

Por favor descarga y flashéalo al XIAO ESP32S3. Para el primer uso del XIAO ESP32S3, consulta [el tutorial de flasheo](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/#software-preparation) aquí.

## Configurar Formateador de Payload

El formateador de payload se utiliza para convertir los datos en bruto recibidos del sensor en un formato legible para humanos. En este caso, el formateador de payload se utiliza para convertir los datos en bruto recibidos del sensor DHT20 en un formato JSON.

Tipo de formateador: `Formateador Javascript personalizado`

```js
function decodeUplink(input) {
  var bytes = input.bytes;
  var temperatureDecimal = (bytes[0] << 8) | bytes[1];
  var humidityDecimal = (bytes[2] << 8) | bytes[3];

  var temperature = temperatureDecimal / 100;
  var humidity = humidityDecimal / 100;

  return {
    data: {
      temperature: temperature,
      humidity: humidity
    }
  };
}
```

## Monitorear datos LoRaWAN

Para actividad específica del dispositivo, haz clic en el dispositivo en la lista del medio. El menú principal de un dispositivo tiene opciones como Resumen del Dispositivo, Datos en Vivo, etc. Haz clic en **Datos en Vivo** o en el enlace sobre la caja de actividad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/65.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/66.png" style={{width:800, height:'auto'}}/></div>

## Recursos

- [Paquete de Código](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip)

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
