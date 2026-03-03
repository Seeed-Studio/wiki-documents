---
description: Grove - Wio-E5 con XIAO-ESP32-S3 vía Arduino
title: Grove - Wio-E5 Usado con XIAO ESP32S3 Demo
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3
last_update:
  date: 2/2/2024
  author: Yvonne
---

# Cómo Usar XIAO ESP32S3 con Módulo LoRa vía Arduino

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image1.png"/></div>


La integración de Wio-E5 con XIAO-ESP32-S3 a través de Arduino presenta una plataforma robusta para el desarrollo de proyectos IoT. Esta guía está diseñada para ayudarte a establecer una conexión perfecta entre Wio-E5 y XIAO-ESP32-S3, habilitando una amplia gama de aplicaciones y funcionalidades.

Te guiaré a través del proceso de utilizar **XIAO-ESP32-S3, Grove-Wio-E5, y Grove-Sensor de Temperatura y Humedad** para comunicación LoRa. Adaptado tanto para principiantes como para entusiastas intermedios, este tutorial ofrece instrucciones paso a paso para la configuración e implementación de comunicación inalámbrica usando tecnología LoRa. El objetivo es empoderarte con las habilidades para emplear efectivamente XIAO-ESP32-S3 para comunicación LoRa. En las etapas finales, utilizaremos **ChirpStack** para mostrar los datos recolectados en **Home Assistant**.

## Implementación

### Código del Programa Arduino

### Software

Realiza ciertas modificaciones al siguiente código, como modificar el AppKEY y otra información esencial del módulo de comunicación LoRa, para poder acceder a LoRaWAN, y luego modifica los datos que queremos enviar mediante el comando: AT+CMSGHEX. Por ejemplo, envío datos simulando temp y humi aquí.

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <DHT.h>

// Buffer to receive data
static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

int sensorPin = A1;          // Define the sensor pin
#define DHTTYPE DHT20        // Use DHT 20 type
DHT dht(DHTTYPE);            // Initialize DHT sensor for temperature and humidity

// Function to send AT commands and check for expected response within a timeout
static int at_send_check_response(char *expected_ack, int timeout_ms, char *command_format, ...) {
    int character;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, command_format);
    Serial1.printf(command_format, args);
    Serial.printf(command_format, args);
    va_end(args);
    delay(200);
    startMillis = millis();

    if (expected_ack == NULL) {
        return 0;
    }

    do {
        while (Serial1.available() > 0) {
            character = Serial1.read();
            recv_buf[index++] = character;
            Serial.print((char)character);
            delay(2);
        }

        if (strstr(recv_buf, expected_ack) != NULL) {
            return 1;
        }
    } while (millis() - startMillis < timeout_ms);
    return 0;
}

// Function to parse received messages
static void recv_parse(char *message) {
    if (message == NULL) {
        return;
    }
    char *start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;

    start = strstr(message, "RX");
    if (start && (1 == sscanf(start, "RX: \"%d\"\r\n", &data))) {
        Serial.println(data);
        Serial.print("led :");
        led = !!data;
        Serial.println(led);
        digitalWrite(LED_BUILTIN, led ? LOW : HIGH);
    }

    start = strstr(message, "RSSI");
    if (start && (1 == sscanf(start, "RSSI %d,", &rssi))) {
        Serial.print("RSSI:");
        Serial.println(rssi);
    }
    
    start = strstr(message, "SNR");
    if (start && (1 == sscanf(start, "SNR %d", &snr))) {
        Serial.print("SNR :");
        Serial.println(snr);
    }
}

void setup() {
    Serial.begin(115200); // Initialize serial communication
    Serial1.begin(9600, SERIAL_8N1, 44, 43);
    Wire.begin();
    dht.begin();

    // Basic AT command to check module presence
    if (at_send_check_response("+AT: OK", 100, "AT\r\n")) {
        is_exist = true;

        // Send AT+ID command to get the device ID
        if (at_send_check_response("+ID:", 1000, "AT+ID\r\n")) {
            Serial.print("Received ID data: ");
            Serial.println(recv_buf);
        } else {
            Serial.println("Failed to get ID data.");
        }

        // Other configuration commands
        at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
        at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
        at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
        at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"2B7E151628AED2A6ABF7158809CF4F3D\"\r\n");
        at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
        at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
        
        delay(200);
        is_join = true;
    } else {
        is_exist = false;
        Serial.println("No E5 module found.");
    }
}

void loop() {
    float temp_hum_val[2] = {0};
    if (is_exist) {
        int ret = 0;
        if (is_join) {
            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret) {
                is_join = false;
            } else {
                at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
                Serial.println("JOIN failed!");
                delay(5000);
            }
        } else {
            if (!dht.readTempAndHumidity(temp_hum_val)) {
                char cmd[128];
                sprintf(cmd, "AT+CMSGHEX=\"%04X%04X%04X\"\r\n", int(temp_hum_val[1] * 100), int(temp_hum_val[0] * 100), analogRead(sensorPin));
                ret = at_send_check_response("Done", 5000, cmd);
                if (ret) {
                    recv_parse(recv_buf);
                } else {
                    Serial.println("Send failed!");
                }
            }
            delay(30000);
        }
    } else {
        delay(1000);
    }
}
```


### Configuración de ChirpStack

ChirpStack es una solución de Internet de las Cosas (IoT) de código abierto diseñada para construir y gestionar redes LoRaWAN. Proporciona un conjunto integral de herramientas y servicios para ayudar a los usuarios a desplegar, gestionar y monitorear redes LoRaWAN, incluyendo gateways, servidores de red, servidores de aplicaciones y dispositivos. Para información sobre cómo conectarse a ChirpStack, consulte este [enlace](https://wiki.seeedstudio.com/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#chirpstack-configuration).

Después de crear un nuevo perfil de dispositivo en ChirpStack, complete el códec de carga útil con el siguiente código:

```js
function decodeUplink(input) {
  var decoded = {
    temp: 0,
    humi: 0,
    moisture: 0,
  };
  var bytes = input["bytes"];
  bytes = bytes2HexString(bytes);

  // Assuming the data is encoded at a ratio of 100 times
  decoded.temp = parseInt(bytes.slice(0, 4), 16) / 100;
  decoded.humi = parseInt(bytes.slice(4, 8), 16) / 100;
  decoded.moisture = parseInt(bytes.slice(-4), 16);

  let messages = [
    {
      type: "temp",
      measurementId: 4097,
      measurementValue: decoded.temp,
    },
    {
      type: "humi",
      measurementId: 4098,
      measurementValue: decoded.humi,
    },
    {
      type: "moisture",
      measurementId: 4103,
      measurementValue: decoded.moisture,
    },
  ];

  var result = {};
  result.messages = messages;
  return { data: result };
}

/**
 * Convert to an 8-digit binary number with 0s in front of the number
 * @param arr
 * @returns {string}
 */
function toBinary(arr) {
  let binaryData = arr.map((item) => {
    let data = parseInt(item, 16).toString(2);
    let dataLength = data.length;
    if (data.length !== 8) {
      for (let i = 0; i < 8 - dataLength; i++) {
        data = `0` + data;
      }
    }
    return data;
  });
  let ret = binaryData.toString().replace(/,/g, "");
  return ret;
}

function bytes2HexString(arrBytes) {
  var str = "";
  for (var i = 0; i < arrBytes.length; i++) {
    var tmp;
    var num = arrBytes[i];
    if (num < 0) {
      tmp = (255 + num + 1).toString(16);
    } else {
      tmp = num.toString(16);
    }
    if (tmp.length === 1) {
      tmp = "0" + tmp;
    }
    str += tmp;
  }
  return str;
}
```


#### Haz clic en **Submit**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image4.png"/></div>

Como se muestra en la siguiente figura, se reciben los datos relevantes, indicando que los datos se envían exitosamente.


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image6.png"/></div>


La decodificación por sí sola puede no proporcionar una representación visualmente intuitiva de los datos del sensor. En tales casos, podemos utilizar plataformas fáciles de usar, siendo Home Assistant un ejemplo principal.


### Aplicación: Integrar con Home Assistant

**Home Assistant** es una plataforma de automatización del hogar inteligente de código abierto diseñada para permitir a los usuarios integrar, controlar y automatizar varios dispositivos y servicios inteligentes. Soporta interoperabilidad con una amplia gama de dispositivos domésticos inteligentes, permitiendo a los usuarios crear escenarios de automatización personalizados y sistemas de control del hogar inteligente. Si podemos integrar XIAO-ESP32-S3 con Home Assistant, diversificará las posibilidades de desarrollo para XIAO-ESP32-S3.

Tanto ChirpStack como Home Assistant tienen integración de plugin MQTT incorporada. Esto les permite comunicar datos a través del protocolo MQTT, facilitando la transmisión de datos del sensor desde el gateway (equipado con un plugin MQTT) hacia Home Assistant.

También puedes integrar Wio-E5 con XIAO-ESP32-S3 en Home Assistant. Por favor consulta este [tutorial](https://wiki.seeedstudio.com/es/home_assistant_sensecap/).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **Paso 3:** Haz clic en Send y prueba el sensor haciendo clic en **Measure**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image7.png"/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
