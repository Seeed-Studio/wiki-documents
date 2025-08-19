---
description: Nodo Sensor Lorawan basado en Wio-SX1262 con módulo XIAO esp32s3
title: Nodo Sensor LoRaWAN
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67_1.webp
slug: /es/wio_sx1262_xiao_esp32s3_for_lora_sensor_node
sidebar_position: 4
last_update:
  date: 05/20/2025
  author: Guillermo
---

# Configuración del Kit XIAO ESP32S3 & Wio-SX1262 como Nodo Sensor LoRaWAN

## Introducción

Esta guía proporciona instrucciones paso a paso para configurar el Kit XIAO ESP32S3 & Wio-SX1262 como un nodo sensor LoRaWAN, conectando un sensor de temperatura y humedad DHT20, añadiendo un gateway LoRaWAN M2 y enviando datos a la plataforma LNS de The Things Network. También se incluye la configuración de un decodificador de formato.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67.png" style={{width:900, height:'auto'}}/></div>

## Prerequisitos

* Kit XIAO ESP32S3 y Wio-SX1262  
* Sensor de temperatura y humedad DHT20  
* Placa de expansión XIAO  
* Gateway LoRaWAN de interior M2  
* Acceso a una cuenta de The Things Network  

<div class="table-center">
  <table align="center">
    <tr>
      <th>Kit XIAO ESP32S3 & Wio-SX1262</th>
      <th>Placa de Expansión XIAO</th>
      <th>Sensor de temperatura y humedad DHT20</th>
      <th>Gateway LoRaWAN de interior M2</th>
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
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Configuración del Hardware

1. Conecta el módulo Wio-SX1262 al XIAO ESP32S3.
2. Conecta el sensor DHT20 (conector Grove I2C) y el Kit XIAO ESP32S3 & Wio-SX1262 a la placa de expansión XIAO.
3. Conecta el kit a tu PC.
4. Conecta el gateway M2 a la corriente y al puerto Ethernet.

## Video

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/7NptcHkVcpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Registro y Configuración en TTN

Ve a [https://www.thethingsnetwork.org/get-started](https://www.thethingsnetwork.org/get-started) y regístrate, como en cualquier otro sitio web. Estas instrucciones son para el entorno de pruebas TTS Sandbox.

Ve a [las instrucciones del TTS Sandbox](https://www.thethingsnetwork.org/get-started) y regístrate.  
Una vez que hayas confirmado tu dirección de correo electrónico, puedes iniciar sesión en la [consola](https://console.cloud.thethings.network/). Si tienes dudas, puedes preguntar en el [foro de The Things Network](https://www.thethingsnetwork.org/forum/). Inicias sesión con los mismos datos de registro.

### Registrar un gateway en TTN

Es más sencillo registrar primero tu gateway. Usaremos como ejemplo el [SenseCAP M2 LoRaWAN Indoor Gateway (SX1302)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html).

Para tu gateway LoRaWAN personal, puedes leer conceptos clave y solución de problemas [aquí](https://www.thethingsindustries.com/docs/gateways/).

### Crear una nueva aplicación en TTN

Una aplicación es como una caja donde agrupas varios dispositivos – normalmente con la misma función. En despliegues grandes puede haber miles de dispositivos similares. Al comenzar, probablemente solo tengas unos pocos, así que no te preocupes aún por cómo organizar tu uso.

Una vez que hayas iniciado sesión en la consola, ve a la sección de **Applications** para crear tu primera aplicación.  
El ID debe estar en minúsculas o números, sin espacios; se permiten guiones, y debe ser único dentro de toda la comunidad de TTN – por ejemplo, `first-app` será rechazado. Puedes usar algo como `tu-usuario-first-app`, que probablemente sea único.  
El nombre y la descripción son opcionales y solo para tu uso personal.

### Registrar un dispositivo final en TTN

**Paso 1**. Ve a la aplicación que creaste en el paso anterior.

**Paso 2**. Haz clic para crear un nuevo dispositivo final

En el lado derecho, más o menos a la mitad de la página de resumen de tu aplicación, hay un gran botón azul **+ Register end device**. Haz clic para crear la configuración de tu primer dispositivo.

**Paso 3**. Ingresa los detalles del dispositivo final

Como estás creando tu propio dispositivo usando una pila LoRaWAN de terceros, no habrá una entrada en el repositorio de dispositivos, así que elige la opción '**Enter end device specifics manually**'.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/61.png" style={{width:400, height:'auto'}}/></div>

**Paso 4**. Ingresa los detalles del dispositivo

Elige el **plan de frecuencias** apropiado para tu región. Ten en cuenta que casi todos los países tienen leyes sobre qué frecuencias puedes usar, así que no improvises.  
Para Europa, utiliza la opción recomendada. Para otras regiones, selecciona la opción marcada como 'used by TTN'.  
En este caso, selecciona **868 MHz**.

Selecciona **LoRaWAN 1.1.0** – la última opción en la lista – que corresponde a la especificación más reciente. **RadioLib usa los Parámetros Regionales RP001 versión 1.1 revisión A**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/62.png" style={{width:400, height:'auto'}}/></div>

En este punto, se te pedirá el **JoinEUI**. Como este es un dispositivo hecho por ti (DIY) y estamos usando RadioLib, puedes usar **todos ceros**, como lo recomienda el documento de Recomendaciones Técnicas TR007 de la LoRa Alliance.  
Una vez que ingreses todos ceros y confirmes, se te pedirá el **DevEUI**, **AppKey** y **NwkKey**. Es preferible que la consola los **genere automáticamente** para asegurar el formato correcto.

Puedes cambiar el ID del dispositivo final para que sea más identificable. Algo relacionado con tu hardware es útil – como por ejemplo **test-device**. Luego puedes hacer clic en el botón azul '**Register device**'.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/63.png" style={{width:400, height:'auto'}}/></div>

**Paso 5**. Copia los datos del dispositivo al archivo de configuración en Arduino

Después, necesitas copiar los datos del dispositivo en el **archivo de configuración** para RadioLib. Hay botones para copiar al portapapeles, así que no es necesario que los escribas manualmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/64.png" style={{width:400, height:'auto'}}/></div>


## Configurar XIAO ESP32S3 y Wio-SX1262 como Nodo Sensor LoRaWAN

El código está escrito en Arduino y está diseñado para configurar un módulo Wio-SX1262 junto con una placa XIAO ESP32S3 para funcionar como un nodo sensor LoRaWAN.  
Conecta un sensor DHT20 para leer datos de temperatura y humedad, y envía esta información por LoRaWAN a The Things Network.

### Instalar las bibliotecas necesarias para XIAO ESP32S3 y el sensor DHT20

* Instalar el entorno de desarrollo Arduino para XIAO ESP32S3

Consulta [https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation).

* Instalar la biblioteca del sensor `DHT20`  
paquete:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/DHT.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descarga ⬇️</font></span></strong>
    </a>
</div>

* Instalar la biblioteca `RadioLib`  
Nota: Instala la **versión 6.6.0**, de lo contrario el código no se compilará correctamente.

### Configuración

**Paso 1**. Rellenar los parámetros de autenticación y acceso a la red LoRaWAN

`RADIOLIB_LORAWAN_JOIN_EUI` y `RADIOLIB_LORAWAN_DEV_EUI` se utilizan para identificar el dispositivo cuando se une a la red LoRaWAN. Al igual que en una gran comunidad en línea, estos dos parámetros actúan como la "tarjeta de identidad" del dispositivo, permitiendo que la red sepa qué dispositivo está solicitando unirse.

`RADIOLIB_LORAWAN_APP_KEY` y `RADIOLIB_LORAWAN_NWK_KEY` se utilizan para la autenticación de seguridad y el control de acceso a la red. Son similares a una "contraseña" para ingresar a la comunidad de red, asegurando que solo los dispositivos con las claves correctas puedan comunicarse de forma segura. Además, pueden restringir la operación del dispositivo según los permisos de la aplicación (diferenciados por APP_KEY) y de la red (diferenciados por NWK_KEY).

Solo tienes que **copiar** los parámetros desde TTN al archivo de configuración.

1. Aquí se define una macro llamada `RADIOLIB_LORAWAN_JOIN_EUI`.  
   Si esta macro no está definida en otro lugar, se establecerá con un valor hexadecimal de **todos ceros**. 
  
```cpp
#ifndef RADIOLIB_LORAWAN_JOIN_EUI
#define RADIOLIB_LORAWAN_JOIN_EUI  0x0000000000000000
#endif
```

2. De manera similar, se define la macro `RADIOLIB_LORAWAN_DEV_EUI`, que representa el `DevEUI` (Identificador Único del Dispositivo), con un valor hexadecimal específico establecido aquí, el cual se utiliza para identificar al dispositivo cuando se une a la red LoRaWAN.

```cpp
#ifndef RADIOLIB_LORAWAN_DEV_EUI
#define RADIOLIB_LORAWAN_DEV_EUI   0x****************
#endif
```

3. Se definen las macros `RADIOLIB_LORAWAN_APP_KEY` y `RADIOLIB_LORAWAN_NWK_KEY`, que representan la AppKey y la NwkKey, respectivamente, y se utilizan para la autenticación de seguridad y el control de acceso a la red.

```cpp
#ifndef RADIOLIB_LORAWAN_APP_KEY
#define RADIOLIB_LORAWAN_APP_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif

#ifndef RADIOLIB_LORAWAN_NWK_KEY   // Put your Nwk Key here
#define RADIOLIB_LORAWAN_NWK_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif
```

4. Se definen las siguientes macros, que representan los `parámetros de uplink LoRaWAN`. Estos parámetros se usan para configurar la carga útil (payload) que se envía a la red LoRaWAN.

```cpp
#define LORAWAN_UPLINK_USER_PORT  2
#define LORAWAN_UPLINK_DATA_RATE  3

#define LORAWAN_UPLINK_PERIOD     10000 // ms

#define LORAWAN_UPLINK_DATA_MAX   115 // byte
```

**Paso 2**. Seleccionar los parámetros regionales de LoRaWAN

Existen varias opciones regionales disponibles para la comunicación LoRaWAN, incluyendo:  
`EU868` (banda europea de 868 MHz),  
`US915` (banda de Estados Unidos de 915 MHz),  
`AU915` (banda australiana de 915 MHz),  
`AS923` (banda asiática de 923 MHz),  
`IN865` (banda india de 865 MHz),  
`KR920` (banda surcoreana de 920 MHz),  
`CN780` (banda china de 780 MHz) y  
`CN500`.

La línea `const LoRaWANBand_t Region = EU868;` establece la región para la comunicación LoRaWAN como EU868. Esto significa que el dispositivo será configurado para operar en la banda de frecuencia europea de 868 MHz.

Para US915 y AU915 se define una variable de sub-banda. En este caso, está configurada en 0. El comentario indica que esta variable de sub-banda es específicamente para las regiones US915 y AU915, aunque en este fragmento de código no se utiliza para la región EU868.

```cpp
const LoRaWANBand_t Region = EU868;
const uint8_t subBand = 0; // Para US915 y AU915
```

### Leer datos del sensor y enviar la carga útil (uplink) LoRa

Leer y enviar datos del sensor mediante comunicación LoRa.  
La conversión a bytes con precisión decimal permite una representación más precisa de los valores de temperatura y humedad en la carga útil uplink.

```cpp
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) {
    uplinkPayloadLen = 0;
    memset(uplinkPayload, sizeof(uplinkPayload), 0);

    // Convierte temperatura y humedad a bytes con precisión decimal
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

## Flashea Firmware

El paquete completo de firmware aquí:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descarga ⬇️</font></span></strong>
    </a>
</div>

Por favor, descarga y flashea el firmware al XIAO ESP32S3. Para el primer uso del XIAO ESP32S3, consulta [el tutorial de flasheo](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation).

## Configurar el Formateador de Payload

El formateador de payload se utiliza para convertir los datos en bruto recibidos desde el sensor a un formato legible para humanos.  
En este caso, el formateador convierte los datos en bruto recibidos del sensor DHT20 a formato JSON.

Tipo de formateador: `Custom Javascript formatter`

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

Para ver la actividad específica de un dispositivo, haz clic en el dispositivo en la lista central. El menú principal del dispositivo tiene opciones como Resumen del Dispositivo, Datos en Vivo, etc. Haz clic en **Datos en Vivo** o en el enlace que está encima del recuadro de actividad.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/65.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/66.png" style={{width:800, height:'auto'}}/></div>

## Recursos

* [Code Package](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip)


## Soporte Técnico y Discusión sobre el Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte con el fin de asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

