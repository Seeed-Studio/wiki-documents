---
description: Grove - Wio-E5 com XIAO-ESP32-S3 via Arduino
title: Grove - Wio-E5 Usado com XIAO ESP32S3 Demo
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Wio_E5_SenseCAP_XIAO_ESP32S3
last_update:
  date: 2/2/2024
  author: Yvonne
createdAt: '2024-02-02'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3/
---

# Como Usar o XIAO ESP32S3 com Módulo LoRa via Arduino

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image1.png"/></div>


A integração do Wio-E5 com o XIAO-ESP32-S3 por meio do Arduino apresenta uma plataforma robusta para o desenvolvimento de projetos de IoT. Este guia foi elaborado para ajudá-lo a estabelecer uma conexão perfeita entre o Wio-E5 e o XIAO-ESP32-S3, possibilitando uma ampla gama de aplicações e funcionalidades.

Eu o guiarei pelo processo de utilização do **XIAO-ESP32-S3, Grove-Wio-E5 e Grove-Temperature & Humidity Sensor** para comunicação LoRa. Voltado tanto para iniciantes quanto para entusiastas de nível intermediário, este tutorial oferece instruções passo a passo para a configuração e implementação da comunicação sem fio usando a tecnologia LoRa. O objetivo é capacitá-lo com as habilidades necessárias para empregar o XIAO-ESP32-S3 de forma eficaz na comunicação LoRa. Nas etapas finais, utilizaremos o **ChirpStack** para exibir os dados coletados no **Home Assistant**.

## Implementação

### Código do Programa Arduino

### Software

Faça determinadas modificações no código a seguir, como alterar a AppKEY e outras informações essenciais do módulo de comunicação LoRa, para que ele possa acessar a LoRaWAN e, em seguida, modifique os dados que desejamos enviar por meio do comando: AT+CMSGHEX. Por exemplo, aqui eu envio dados simulando temperatura e umidade.

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


### Configuração do ChirpStack

ChirpStack é uma solução de Internet das Coisas (IoT) de código aberto desenvolvida para a criação e gestão de redes LoRaWAN. Ela fornece um conjunto abrangente de ferramentas e serviços para ajudar os usuários a implantar, gerenciar e monitorar redes LoRaWAN, incluindo gateways, servidores de rede, servidores de aplicação e dispositivos. Para obter informações sobre como se conectar ao ChirpStack, consulte este [link](https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#chirpstack-configuration).

Após criar um novo perfil de dispositivo no ChirpStack, preencha o codec de payload com o seguinte código:

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


#### Clique em **Submit**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image4.png"/></div>

Conforme mostrado na figura a seguir, os dados relevantes são recebidos, indicando que os dados foram enviados com sucesso.


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image6.png"/></div>


A decodificação isolada pode não fornecer uma representação visualmente intuitiva dos dados do sensor. Nesses casos, podemos utilizar plataformas fáceis de usar, sendo o Home Assistant um excelente exemplo.


### Aplicação: Integração com o Home Assistant

O **Home Assistant** é uma plataforma de automação residencial inteligente de código aberto projetada para permitir que os usuários integrem, controlem e automatizem diversos dispositivos e serviços inteligentes. Ele oferece interoperabilidade com uma ampla variedade de dispositivos de casa inteligente, permitindo que os usuários criem cenários de automação personalizados e sistemas de controle residencial inteligente. Se conseguirmos integrar o XIAO-ESP32-S3 ao Home Assistant, isso diversificará as possibilidades de desenvolvimento para o XIAO-ESP32-S3.

Tanto o ChirpStack quanto o Home Assistant possuem integração de plugin MQTT integrada. Isso lhes permite comunicar dados por meio do protocolo MQTT, facilitando a transmissão de dados de sensores do gateway (equipado com um plugin MQTT) para o Home Assistant.

Você também pode integrar o Wio-E5 com o XIAO-ESP32-S3 ao Home Assistant. Consulte este [tutorial](https://wiki.seeedstudio.com/pt-br/home_assistant_sensecap/).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **Passo 3:** Clique em Send e teste o sensor clicando em **Measure**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove-Wio-E5_with_XIAO-ESP32-S3_via_Arduino/image7.png"/></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
