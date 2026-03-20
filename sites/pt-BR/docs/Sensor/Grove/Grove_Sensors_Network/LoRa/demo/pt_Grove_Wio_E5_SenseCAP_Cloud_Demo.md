---
description: Como usar Arduino Uno R4 com módulo LoRa
title: Grove - Demonstração do Wio-E5 usado com Arduino Uno R4
keywords:
  - LoRaWAN
  - Home Assistant
  - Arduino UNO R4
  - Wio E5
slug: /Grove_Wio_E5_SenseCAP_Cloud_Demo
last_update:
  date: 2/02/2024
  author: JoJang
createdAt: '2024-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Wio_E5_SenseCAP_Cloud_Demo/
---

# Como usar Arduino Uno R4 com módulo LoRa no Home Assistant

### Introdução


O **Arduino UNO R4** é uma ferramenta integrada com capacidades de processamento aprimoradas e periféricos adicionais, o que o torna uma excelente ferramenta de prototipagem e aprendizado tanto para iniciantes quanto para entusiastas de eletrônica experientes. No entanto, se você possui um Arduino UNO R4 e deseja capacidades de transmissão de mensagens de ultra baixo consumo de energia e longo alcance, recomendo incorporar o Grove Wio-E5.

O **Grove Wio-E5** é um módulo LoRa fácil de usar. LoRa é bem adequado para aplicações que exigem a transmissão de pequenas quantidades de dados em baixas taxas de bits, oferecendo distâncias de transmissão maiores em comparação com tecnologias como WiFi, Bluetooth ou ZigBee. Essas características tornam o LoRa particularmente adequado para operar em modos de baixo consumo de energia.

Em seguida, vou guiá-lo sobre como usar o **Arduino UNO R4, Grove-Wio-E5 e Grove-Temperature & Humidity Sensor** para comunicação LoRa. Este tutorial foi elaborado para fornecer instruções abrangentes para iniciantes e entusiastas de nível intermediário sobre como configurar e implementar comunicação sem fio baseada em LoRa. Ele tem como objetivo ajudá-lo a dominar as habilidades de usar o Arduino UNO R4 para comunicação LoRa. Por fim, por meio do **ChirpStack**, exibiremos os dados no **Home Assistant**.



### Implementação

#### Código do programa Arduino

* **Hardware**

Neste tutorial, usaremos a placa de desenvolvimento Arduino UNO R4 WiFi e o Grove - Wio-E5. Como mostrado na imagem abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_1.jpeg" alt="pir" width={700} height="auto" /></p>



<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino UNO R4</th>
        <th>Grove-Wio-E5</th>
        <th>Grove-Temperature & Humidity Sensor</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_2.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_3.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_4.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>



Precisamos conectar os pinos no Grove Wio-E5 aos seus correspondentes na placa R4. A tabela abaixo.
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
            <th align="center">Grove-Temperature & Humidity Sensor</th>
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

O hardware necessário para o projeto está completo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_5.png" alt="pir" width={700} height="auto" /></p>

* **Software**

O código a seguir foi escrito com base no Arduino Uno R4, com sensores personalizados adicionados à placa R4. Ele lê os valores dos sensores e os atribui diretamente.

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


#### Configuração do ChirpStack

**ChirpStack** é uma solução de Internet das Coisas (IoT) de código aberto projetada para criar e gerenciar redes LoRaWAN. Ela fornece um conjunto abrangente de ferramentas e serviços para ajudar os usuários a implantar, gerenciar e monitorar redes LoRaWAN, incluindo gateways, servidores de rede, servidores de aplicação e dispositivos. Para obter informações sobre como se conectar ao ChirpStack, consulte o seguinte link: [Chirpstack-Configuration](https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#Configuração-do-ChirpStack)


Após criar um novo perfil de dispositivo no ChirpStack, preencha o codec de payload com o seguinte código:

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


Em seguida, clique em `Submit`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_6.png" alt="pir" width={700} height="auto" /></p>



Como mostrado na figura a seguir, os dados relevantes são recebidos, indicando que os dados foram enviados com êxito.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_7.png" alt="pir" width={700} height="auto" /></p>

A decodificação por si só pode não fornecer uma representação visualmente intuitiva dos dados do sensor. Nesses casos, podemos utilizar plataformas amigáveis ao usuário, sendo o Home Assistant um exemplo típico.


### Aplicação: Integrar com Home Assistant

Home Assistant é uma plataforma de automação residencial inteligente de código aberto projetada para permitir que os usuários integrem, controlem e automatizem vários dispositivos e serviços inteligentes. Ele oferece interoperabilidade com uma ampla gama de dispositivos de casa inteligente, permitindo que os usuários criem cenários de automação personalizados e sistemas de controle residencial inteligente. Se conseguirmos integrar o Arduino UNO R4 com o Home Assistant, ampliaremos as possibilidades de desenvolvimento para o Arduino UNO R4.

Tanto o ChirpStack quanto o Home Assistant possuem integração embutida com plugin MQTT. Isso permite que eles comuniquem dados por meio do protocolo MQTT, facilitando a transmissão de dados de sensores do gateway (equipado com um plugin MQTT) para o Home Assistant.

Você também pode integrar o Arduino Uno R4 ao Home Assistant. Consulte este tutorial: [home_assistant_sensecap](https://wiki.seeedstudio.com/pt-br/home_assistant_sensecap/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_8.png" alt="pir" width={700} height="auto" /></p>
