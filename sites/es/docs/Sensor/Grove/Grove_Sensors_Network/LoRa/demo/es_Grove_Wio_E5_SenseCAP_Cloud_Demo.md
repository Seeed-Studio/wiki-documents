---
description: Cómo usar Arduino Uno R4 con módulo LoRa
title: Grove - Wio-E5 usado con Arduino Uno R4 Demo
keywords:
- LoRaWAN
- Home Assistant
- Arduino UNO R4
- Wio E5
slug: /es/Grove_Wio_E5_SenseCAP_Cloud_Demo
last_update:
  date: 2/02/2024
  author: JoJang
---

# Cómo usar Arduino Uno R4 con módulo LoRa en Home Assistant

### Introducción


El **Arduino UNO R4** es una herramienta integrada con capacidades de procesamiento mejoradas y periféricos adicionales, lo que lo convierte en una excelente herramienta de prototipado y aprendizaje tanto para principiantes como para entusiastas de la electrónica experimentados. Sin embargo, si posees un Arduino UNO R4 y deseas capacidades de transmisión de mensajes de ultra bajo consumo y largo alcance, recomiendo incorporar el Grove Wio-E5.

El **Grove Wio-E5** es un módulo LoRa fácil de usar. LoRa es muy adecuado para aplicaciones que requieren transmitir pequeñas cantidades de datos a bajas velocidades de bits, ofreciendo distancias de transmisión más largas en comparación con tecnologías como WiFi, Bluetooth o ZigBee. Estas características hacen que LoRa sea particularmente adecuado para operar en modos de bajo consumo.

A continuación, te guiaré sobre cómo usar el **Arduino UNO R4, Grove-Wio-E5 y el sensor de temperatura y humedad Grove** para comunicación LoRa. Este tutorial está diseñado para proporcionar instrucciones completas para principiantes y entusiastas intermedios sobre la configuración e implementación de comunicación inalámbrica basada en LoRa. Su objetivo es ayudarte a dominar las habilidades de usar Arduino UNO R4 para comunicación LoRa. Finalmente, a través de **ChirpStack**, mostraremos los datos en **Home Assistant**.


### Implementación

#### Código del programa Arduino

* **Hardware**

En este tutorial, usaremos la placa de desarrollo Arduino UNO R4 WiFi y el Grove - Wio-E5. Como se muestra en la imagen a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_1.jpeg" alt="pir" width={700} height="auto" /></p>


<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino UNO R4</th>
        <th>Grove-Wio-E5</th>
        <th>Sensor de temperatura y humedad Grove</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_2.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_3.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_4.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


Necesitamos conectar los pines del Grove Wio-E5 a sus contrapartes en la placa R4. La tabla a continuación.
<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">Arduino Uno R4</th>
            <th align="center">Grove Wio-E5</th>
        </tr>
        <tr>
            <td align="center">Pin 2</td>
            <td align="center">TX</td>
        </tr>
        <tr>
            <td align="center">Pin 7</td>
            <td align="center">RX</td>
        </tr>
        <tr>
            <td align="center">3.3V</td>
            <td align="center">VCC</td>
        </tr>
        <tr>
            <td align="center">GND</td>
            <td align="center">GND</td>
        </tr>
    </table>
</div>

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">Arduino Uno R4</th>
            <th align="center">Grove-Sensor de Temperatura y Humedad</th>
        </tr>
        <tr>
            <td align="center">A5</td>
            <td align="center">SCL</td>
        </tr>
        <tr>
            <td align="center">A4</td>
            <td align="center">SDA</td>
        </tr>
        <tr>
            <td align="center">5V</td>
            <td align="center">VCC</td>
        </tr>
        <tr>
            <td align="center">GND</td>
            <td align="center">GND</td>
        </tr>
    </table>


</div>

El hardware requerido para el proyecto está completo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_5.png" alt="pir" width={700} height="auto" /></p>

* **Software**

El siguiente código está escrito basado en Arduino Uno R4, con sensores personalizados añadidos a la placa R4. Lee los valores del sensor y los asigna directamente.

```cpp
# include <Arduino.h>
# include <SoftwareSerial.h>
#include "Wire.h"
#include "DHT.h"

#define DHTTYPE DHT20   // DHT 20
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

int temp = 1;
int humi = 56;

SoftwareSerial mySerial(2, 7); // Rx, Tx


static int at_send_check_response(char *p_ack, int timeout_ms, char*p_cmd, ...)
{
    int ch;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    char cmd_buffer[256];  // Adjust the buffer size as needed
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    vsprintf(cmd_buffer, p_cmd, args);  // Format the command string
    mySerial.print(cmd_buffer);
    Serial.print(cmd_buffer);
    va_end(args);
    delay(50);
    startMillis = millis();


    if (p_ack == NULL)
    {
        Serial.println("p_ack none");
        return 0;
    }

    do
    {
        while (mySerial.available() > 0)
        {
            ch = mySerial.read();
            recv_buf[index++] = ch;
            Serial.print((char)ch);
            delay(2);
        }

        if (strstr(recv_buf, p_ack) != NULL)
        {
            return 1;
        }

    } while (millis() - startMillis < timeout_ms);
    return 0;
}

static void recv_prase(char *p_msg)
{
    if (p_msg == NULL)
    {
        return;
    }
char*p_start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;

    p_start = strstr(p_msg, "RX");
    if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data)))
    {
        Serial.println(data);
        Serial.print("led :");
        led = !!data;
        Serial.print(led);
        if (led)
        {
            digitalWrite(LED_BUILTIN, LOW);
        }
        else
        {
            digitalWrite(LED_BUILTIN, HIGH);
        }
    }

    p_start = strstr(p_msg, "RSSI");
    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))
    {
        Serial.print("rssi:");
        Serial.print(rssi);
    }
    p_start = strstr(p_msg, "SNR");
    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))
    {
        Serial.print("snr :");
        Serial.print(snr);
    }
}

void setup() {
  Serial.begin(115200); // 初始化串口通信
  Wire.begin();
  dht.begin();
  if (!mySerial.begin(9600, SERIAL_8N1)) {
        Serial.println("Failed to init soft serial");
        while (1);
    }

  if (at_send_check_response("+AT: OK", 200, "AT\r\n"))
{
    is_exist = true;
    
    // 发送 AT+ID 命令
    if (at_send_check_response("+ID:", 1000, "AT+ID\r\n")) {
        // 命令成功发送并且收到响应
        // 可以在 recv_buf 中找到返回的数据
        Serial.print("Received ID data: ");
        Serial.println(recv_buf);
    } else {
        // 命令发送失败或者没有收到响应
        Serial.println("Failed to get ID data.");
    }

    // 其他设置命令
    at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
    at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
    at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
    at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"2B7E151628AED2A6ABF7158809CF4F3D\"\r\n");
    at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
    at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
    
    delay(200);
    is_join = true;
}
else
{
    is_exist = false;
    Serial.print("No E5 module found.\r\n");
}
}


void loop() {
    float temp_hum_val[2] = {0};
    if(is_exist)
    {
        Serial.println("success");
        delay(1000);
    }

    if (is_exist)
        {
            int ret = 0;
            if (is_join)
            {

                ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
                if (ret)
                {
                    is_join = false;
                }
                else
                {
                    at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
                    Serial.print("JOIN failed!\r\n\r\n");
                    delay(5000);
                }
            }
            else
            {
              if (!dht.readTempAndHumidity(temp_hum_val)) {
                char cmd[128];
                sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", int(temp_hum_val[1]*100), int(temp_hum_val[0]*100));
                Serial.print(temp_hum_val[0]);
                Serial.println(temp_hum_val[1]);
                ret = at_send_check_response("Done", 5000, cmd);
                if (ret)
                {
                    recv_prase(recv_buf);
                }
                else
                {
                    Serial.print("Send failed!\r\n\r\n");
                }
              }
                delay(30000);
            }
        }
        else
        {
            delay(1000);
        }
}
```


#### Configuración de ChirpStack

**ChirpStack** es una solución de Internet de las Cosas (IoT) de código abierto diseñada para construir y gestionar redes LoRaWAN. Proporciona un conjunto integral de herramientas y servicios para ayudar a los usuarios a desplegar, gestionar y monitorear redes LoRaWAN, incluyendo gateways, servidores de red, servidores de aplicaciones y dispositivos. Para obtener información sobre cómo conectarse a ChirpStack, consulte el siguiente enlace: [Chirpstack-Configuration](https://wiki.seeedstudio.com/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#chirpstack-configuration)


Después de crear un nuevo perfil de dispositivo en ChirpStack, complete el códec de carga útil con el siguiente código:

```javascript
function decodeUplink(input) {
    var decoded = {
        temp: 0,
        humi: 0
    };
    var bytes = input['bytes'];
    bytes = bytes2HexString(bytes);

    decoded.temp = parseInt(bytes.slice(0, 4), 16) / 100;
    decoded.humi = parseInt(bytes.slice(-4), 16) / 100;

    let messages = [
        {
            type: 'temp',
            measurementId: 4097,
            measurementValue: decoded.temp
        },
        {
            type: 'humi',
            measurementId: 4098,
            measurementValue: decoded.humi
        }
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
  function toBinary (arr) {
    let binaryData = arr.map((item) => {
      let data = parseInt(item, 16)
        .toString(2)
      let dataLength = data.length
      if (data.length !== 8) {
        for (let i = 0; i < 8 - dataLength; i++) {
          data = `0` + data
        }
      }
      return data
    })
    let ret = binaryData.toString()
      .replace(/,/g, '')
    return ret
  }
  
  
  function bytes2HexString (arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
      var tmp
      var num = arrBytes[i]
      if (num < 0) {
        tmp = (255 + num + 1).toString(16)
      } else {
        tmp = num.toString(16)
      }
      if (tmp.length === 1) {
        tmp = '0' + tmp
      }
      str += tmp
    }
    return str
  }
```


Luego haz clic en `Submit`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_6.png" alt="pir" width={700} height="auto" /></p>


Como se muestra en la siguiente figura, se reciben los datos relevantes, indicando que los datos se envían exitosamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_7.png" alt="pir" width={700} height="auto" /></p>

La decodificación por sí sola puede no proporcionar una representación visualmente intuitiva de los datos del sensor. En tales casos, podemos utilizar plataformas fáciles de usar, siendo Home Assistant un ejemplo principal.


### Aplicación: Integrar con Home Assistant

Home Assistant es una plataforma de automatización del hogar inteligente de código abierto diseñada para permitir a los usuarios integrar, controlar y automatizar varios dispositivos y servicios inteligentes. Soporta interoperabilidad con una amplia gama de dispositivos domésticos inteligentes, permitiendo a los usuarios crear escenarios de automatización personalizados y sistemas de control del hogar inteligente. Si podemos integrar Arduino UNO R4 con Home Assistant, diversificará las posibilidades de desarrollo para Arduino UNO R4.

Tanto ChirpStack como Home Assistant tienen integración de plugin MQTT incorporada. Esto les permite comunicar datos a través del protocolo MQTT, facilitando la transmisión de datos del sensor desde el gateway (equipado con un plugin MQTT) hacia Home Assistant.

También puedes integrar Arduino Uno R4 en Home Assistant. Por favor consulta este tutorial: [home_assistant_sensecap](https://wiki.seeedstudio.com/es/home_assistant_sensecap/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_8.png" alt="pir" width={700} height="auto" /></p>
