---
description: Extender Home Assistant con dispositivo LoRaWAN (XIAO-ESP32-S3)
title: Extender Home Assistant con dispositivo LoRaWAN (XIAO-ESP32-S3)
keywords:
- LoRaWAN
- Home Assistant
- XIAO ESP32
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ha_xiao_esp32
last_update:
  date: 1/10/2023
  author: Jessie
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao1.png" alt="pir" width={1000} height="auto" /></p>

### Introducción

Home Assistant es un sistema de plataforma de hogar inteligente de código abierto, y el usuario puede conectar fácilmente sus propios dispositivos de Internet de las Cosas al sistema para una gestión unificada. Sin embargo, el punto especial principal de Home Assistant no es solo realizar la visualización de varios dispositivos de detección, sino realizar la vinculación automática de dispositivos multiplataforma, solo una plataforma de hogar inteligente así es suficiente para tener vitalidad.

### Agregar Sensores LoRaWAN a Home Assistant

#### Código del Programa Arduino

- **Hardware**

Como se muestra a continuación, instale XIAO en la placa de expansión mientras conecta el módulo E5 a los pines GND, 3V3, SDA-4 y SL-5 de la placa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao-hardware.png" alt="pir" width={700} height="auto" /></p>

- **Software**

Realice ciertas modificaciones al siguiente código, como modificar el AppKEY y otra información esencial del módulo de comunicación LoRa, para poder acceder a LoRaWAN, y luego modifique los datos que queremos enviar mediante el comando: AT+CMSGHEX. Por ejemplo, envío datos simulando temp y humi aquí

```cpp
# include <Arduino.h>

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

int temp = 25;
int humi = 56;


static int at_send_check_response(char *p_ack, int timeout_ms, char*p_cmd, ...)
{
    int ch;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    Serial1.printf(p_cmd, args);
    Serial.printf(p_cmd, args);
    va_end(args);
    delay(200);
    startMillis = millis();

    if (p_ack == NULL)
    {
        return 0;
    }

    do
    {
        while (Serial1.available() > 0)
        {
            ch = Serial1.read();
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
  Serial.begin(115200); // Initialize serial communication
  Serial1.begin(9600, SERIAL_8N1, 44, 43);

  if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
{
    is_exist = true;
    
    // Send AT+ID Command
    if (at_send_check_response("+ID:", 1000, "AT+ID\r\n")) {
        // Command sent successfully and response received
        // The returned data can be found in recv_buf
        Serial.print("Received ID data: ");
        Serial.println(recv_buf);
    } else {
        // The command failed to be sent or no response was received.
        Serial.println("Failed to get ID data.");
    }

    // Other Commands
    at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
    at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
    at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
    at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"\r\n");
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
                char cmd[128];
                sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", (int)temp, (int)humi);
                ret = at_send_check_response("Done", 5000, cmd);
                if (ret)
                {
                    recv_prase(recv_buf);
                }
                else
                {
                    Serial.print("Send failed!\r\n\r\n");
                }
                delay(30000);
            }
        }
        else
        {
            delay(1000);
        }
    temp++;
    humi++;
}
```

#### Configuración de ChirpStack

Crea un nuevo perfil de dispositivo en ChirpStack, y completa el códec de carga útil con el siguiente código:

```cpp
function decodeUplink(input, port) {
    var decoded = {
        temp: 0,
        humi: 0
    };
    var bytes = input['bytes']
   bytes = bytes2HexString(bytes)
  
    decoded.temp = parseInt(bytes.slice(0, 4), 16);
 decoded.humi = parseInt(bytes.slice(-4), 16);

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao3.png" alt="pir" width={800} height="auto" /></p>

Como se muestra en la siguiente figura, se reciben los datos relevantes, indicando que los datos se envían exitosamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao4.png" alt="pir" width={700} height="auto" /></p>

#### Configuración de Home Assistant

Completa la instalación de la integración de Home Assistant con el siguiente tutorial: [Integración SenseCAP para Home Assistant](https://wiki.seeedstudio.com/es/home_assistant_sensecap/). Espera unos minutos, podemos ver que el dispositivo XIAO-ESP32-S3 ha sido reconocido, y hay dos entidades en este dispositivo, a saber Temperatura y Humedad, que son los dos datos que acabamos de enviar. Y han sido identificados como las entidades de sensor correspondientes en Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao6.png" alt="pir" width={700} height="auto" /></p>

Después de agregar el dispositivo a la vista general, hemos completado todo el proceso de agregar XIAO a Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao5.png" alt="pir" width={700} height="auto" /></p>

### Discusión

Home Assistant es un sistema de código abierto para hogar inteligente muy poderoso, podemos conectar una variedad de dispositivos a esta plataforma, la ecología del hogar inteligente se vuelve cada vez más grande, ¿puedes imaginar usar XIAO para controlar Apple HomePod? A través de este tutorial, hemos conectado XIAO a Home Assistant, y esto es solo el comienzo. De manera similar, podemos conectar el sensor clave a Home Assistant para lograr funciones más interesantes, y toda la ecología del hogar inteligente se volverá cada vez más grande.

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
