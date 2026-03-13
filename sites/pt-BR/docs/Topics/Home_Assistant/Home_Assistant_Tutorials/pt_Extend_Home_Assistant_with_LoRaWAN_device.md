---
description: Estenda o Home Assistant com dispositivo LoRaWAN (XIAO-ESP32-S3)
title: Estenda o Home Assistant com dispositivo LoRaWAN (XIAO-ESP32-S3)
keywords:
  - LoRaWAN
  - Home Assistant
  - XIAO ESP32
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ha_xiao_esp32
last_update:
  date: 1/10/2023
  author: Jessie
createdAt: '2024-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ha_xiao_esp32/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao1.png" alt="pir" width={1000} height="auto" /></p>

### Introdução

Home Assistant é um sistema de plataforma de casa inteligente de código aberto, e o usuário pode facilmente conectar seus próprios dispositivos de Internet das Coisas ao sistema para gerenciamento unificado. No entanto, o principal diferencial do Home Assistant não é apenas permitir a visualização de vários dispositivos de detecção, mas sim realizar a vinculação automática de dispositivos entre plataformas; só uma plataforma de casa inteligente assim é suficientemente dinâmica.

### Adicionar sensores LoRaWAN ao Home Assistant

#### Código de programa Arduino

- **Hardware**

Conforme mostrado abaixo, instale o XIAO na placa de expansão enquanto conecta o módulo E5 aos pinos GND, 3V3, SDA-4 e SL-5 da placa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao-hardware.png" alt="pir" width={700} height="auto" /></p>

- **Software**

Faça algumas modificações no código a seguir, como alterar o AppKEY e outras informações essenciais do módulo de comunicação LoRa, para que seja possível acessar a LoRaWAN, e então modifique os dados que queremos enviar pelo comando: AT+CMSGHEX. Por exemplo, aqui envio dados simulando temperatura e umidade

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

#### Configuração do ChirpStack

Crie um novo perfil de dispositivo no ChirpStack e preencha o codec de Payload com o seguinte código:

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

Em seguida, clique em `Submit`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao3.png" alt="pir" width={800} height="auto" /></p>

Conforme mostrado na figura a seguir, os dados relevantes foram recebidos, indicando que os dados foram enviados com sucesso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao4.png" alt="pir" width={700} height="auto" /></p>

#### Configuração do Home Assistant

Conclua a instalação da integração do Home Assistant com o seguinte tutorial: [SenseCAP Integration for Home Assistant](https://wiki.seeedstudio.com/pt-br/home_assistant_sensecap/). Aguarde alguns minutos; podemos ver que o dispositivo XIAO-ESP32-S3 foi reconhecido, e há duas entidades neste dispositivo, a saber, temperatura e umidade, que são os dois dados que acabamos de enviar. E foram identificados como as entidades de sensor correspondentes no Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao6.png" alt="pir" width={700} height="auto" /></p>

Depois de adicionar o dispositivo à visão geral, concluímos todo o processo de adicionar o XIAO ao Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao5.png" alt="pir" width={700} height="auto" /></p>

### Discussão

Home Assistant é um sistema de casa inteligente de código aberto muito poderoso; podemos conectar uma variedade de dispositivos a essa plataforma, a ecologia de casa inteligente torna-se cada vez maior; você consegue imaginar usar o XIAO para controlar o Apple HomePod? Através deste tutorial, conectamos o XIAO ao Home Assistant, e isso é apenas o começo. Da mesma forma, podemos conectar o sensor de chave ao Home Assistant para alcançar funções mais interessantes, e toda a ecologia de casa inteligente ficará cada vez maior.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
