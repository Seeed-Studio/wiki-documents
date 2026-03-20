---
sidebar_position: 2
description: Usando o XIAO ESP32C3 para se conectar à SenseCraft Data Platform AI Advisor para obter conselhos de plantio
title: Conselhos de Plantio
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
createdAt: '2023-08-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-data-platform/applications/planting-advice/
---

:::tip note
SenseCAP Platform foi oficialmente renomeada como `SenseCraft Data Platform`!
:::

# Usando XIAO ESP32C3 para se conectar à SenseCraft Data Platform para conselhos de plantio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/1.png" style={{width:1000, height:'auto'}}/></div>

Durante esse período, a SenseCraft Data platform da Seeed Studio desenvolveu e lançou novos recursos de IA. Atualmente, as principais funções do AI Advisor na SenseCraft Data Platform estão focadas em fornecer conselhos construtivos de plantio para produtores, e serão atualizadas com recursos de IA mais ricos em um futuro próximo!

Este tutorial, então, fará a ponte entre a série XIAO ESP32 e a `SenseCraft Data platform`, detalhando como usar os sensores Grove e XIAO para enviar dados para a plataforma e obter sugestões construtivas da IA com base nesses valores de sensores.

## Primeiros Passos

### Preparação de Hardware

As três peças de hardware que serão usadas neste tutorial são o XIAO ESP32C3, o Grove Base para XIAO e o sensor de temperatura e umidade Grove SHT40. Para a conveniência da fiação, usamos a placa de expansão XIAO, que você pode adquirir de acordo com suas necessidades reais.

<table align="center">
  <tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Grove Base for XIAO</th>
          <th>Grove - Temperature & Humidity Sensor(SHT40)</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/SHT40.jpg" style={{width:200, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

### Preparação de Software

Se esta é a sua primeira vez usando o XIAO ESP32C3, então você precisa ler este Wiki primeiro para aprender a configurar um bom ambiente de desenvolvimento no Arduino.

- [Primeiros Passos com o Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/#software-setup)

Além disso, este tutorial é compatível com o [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html), você também pode usar o XIAO ESP32S3 para concluir o conteúdo deste tutorial.

- [Primeiros Passos com o Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/#software-preparation)

Como o sensor SHT40 é usado, você também precisa adicionar bem as duas bibliotecas a seguir no Arduino para garantir que o programa possa ser executado sem problemas.

- [arduino-i2c-sht4x](https://github.com/Sensirion/arduino-i2c-sht4x)

- [Sensirion Arduino Core Library](https://github.com/Sensirion/arduino-core)

## XIAO ESP32C3 Obtendo Dados de Temperatura e Umidade

Como mostrado na figura abaixo, conecte o sensor de temperatura e umidade Grove SHT40 à interface IIC do XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/2.jpg" style={{width:700, height:'auto'}}/></div>

Em seguida, faça o upload do seguinte programa para o XIAO ESP32C3 para acionar o sensor SHT40 a funcionar e começar a obter os valores de temperatura e umidade do ar.

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

Abra o monitor serial da Arduino IDE, selecione a taxa de transmissão como 115200 e observe o resultado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/166.png" style={{width:700, height:'auto'}}/></div>

## Introdução à HTTPS API da SenseCraft Data Platform -- Enviar Dados de Sensor

Agora que sabemos como obter dados do sensor SHT40, vamos começar aprendendo as seguintes regras de chamada de API para a `SenseCraft Data Platform`. Você pode ler sobre o uso da API da `SenseCraft Data Platform` clicando no botão abaixo para ir diretamente ao SenseCraft Documentation Center.

- [SenseCraft Document Center](https://sensecap-docs.seeed.cc/httpapi_quickstart.html)

O princípio básico da SenseCraft Data Platform para receber dados de sensores é usar EUI e Key como informações de autenticação e relatar os dados do dispositivo por meio de POST.

Endereço do Servidor HTTPS:

```
https://sensecap.seeed.cc/deviceapi
```

### Sobre o Header

No POST, você precisa adicionar as informações de autenticação no Header, que são os dados criptografados em base64 do **EUI** e **Key** do dispositivo no seguinte formato básico.

```
authorization = Device base64(EUI:Key)
```

### Sobre a Interface

O caminho do servidor a ser usado pelo dispositivo para relatar dados de sensores é: `/kit/message_uplink`, o modo é **POST**, e os seguintes parâmetros de requisição estão disponíveis e são permitidos.

<table align="center">
 <tr>
     <th>Name</th>
        <th>Type</th>
        <th>Description</th>
 </tr>
 <tr>
     <td align="center">- requestId</td>
     <td align="center">string</td>
     <td align="center">O uuidv4 é gerado no lado do dispositivo cada vez que os dados são relatados, garantindo que o valor seja diferente para cada mensagem.</td>
 </tr>
 <tr>
     <td align="center">- timestamp</td>
     <td align="center">string</td>
     <td align="center">Timestamp em milissegundos quando a mensagem foi enviada.</td>
 </tr>
 <tr>
     <td align="center">- intent</td>
     <td align="center">string</td>
     <td align="center">Atualmente fixado em "event".</td>
 </tr>
 <tr>
     <td align="center">- deviceEui</td>
     <td align="center">string</td>
     <td align="center">EUI do dispositivo.</td>
 </tr>
 <tr>
     <td align="center">- deviceKey</td>
     <td align="center">string</td>
     <td align="center">Key do dispositivo.</td>
 </tr>
    <tr>
     <td align="center">- events</td>
     <td align="center">[object]</td>
     <td align="center">Um array de eventos onde a coleta de dados e o status do dispositivo são relatados.</td>
 </tr>
    <tr>
     <td align="center">-- name</td>
     <td align="center">string</td>
     <td align="center">Nome do Evento.</td>
 </tr>
    <tr>
     <td align="center">-- value</td>
     <td align="center">[object]</td>
     <td align="center">Valor do Evento.</td>
 </tr>
    <tr>
     <td align="center">-- timestamp</td>
     <td align="center">string</td>
     <td align="center">Timestamp em milissegundos no momento da coleta de dados.</td>
 </tr>
</table>

A seguir está um exemplo de envio de dados de upload de sensor.

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

## Enviar dados de temperatura e umidade para a SenseCraft Data Platform

Depois que entendermos as regras acima, podemos começar a escrever o programa HTTPS para enviar os dados de temperatura e umidade do nosso SHT40 para a SenseCraft Data Platform.

### Passo 1. Registrar e fazer login na SenseCraft Data Platform

Você pode clicar no link abaixo para ir diretamente ao site internacional da SenseCraft Data Platform. Se esta é a sua primeira vez usando os serviços da SenseCraft, talvez seja necessário registrar uma conta.

- [Site da SenseCraft Data Platform](https://sensecap.seeed.cc)

Ao fazer login na SenseCraft Data Platform, você será levado para a tela do console. Precisamos adicionar um kit próprio, clique em **DevelopKit** na barra de menu à esquerda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/3.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, clique em **Create DevelopKit** no canto superior esquerdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/4.png" style={{width:1000, height:'auto'}}/></div>

Depois, basta selecionar o **MIG Develop Kit** e clicar no botão **Confirm**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/5.png" style={{width:500, height:'auto'}}/></div>

Em seguida, você poderá ver o dispositivo que criou no painel, geralmente o primeiro. Clicar no botão "Connect" para esse dispositivo exibirá as informações de **EUI** e **KEY** desse dispositivo. Salve-as, pois iremos usá‑las nas próximas etapas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/6.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 2. Obter as informações de autenticação

A interface da SenseCraft para informações de autenticação requer criptografia **EUI:KEY** baseada em Base64.

Por exemplo, seu EUI é `2CF7F11003900000` e a Key é `06C42483D7155E7006C42483D7155E70`. então você pode obter as informações de autenticação criptografadas em Base64 com os seguintes comandos no terminal.

```
echo -n 2CF7F11003900000:06C42483D7155E7006C42483D7155E70 |base64

>>> MkNGN0YxMTAwMzkwMDAwMDowNkM0MjQ4M0Q3MTU1RTcwMDZDNDI0ODNENzE1NUU3MA==
```

Por favor, mantenha as informações de autenticação, iremos usá‑las como **apiKey** no programa mais tarde.

### Etapa 3. Obter o número do tipo de sensor

Na carga enviada está incluído o número do tipo de sensor e o nome do sensor que estamos reportando. Isso é para que a SenseCraft saiba de qual sensor estamos enviando dados e em quais unidades os dados estão.

Para esta seção, consulte a tabela numerada de referência cruzada de sensores e valores fornecida no SenseCraft Documentation Center.

- [List of Measurement IDs](https://sensecap-docs.seeed.cc/measurement_list.html)

- [List of Sensor Types](https://sensecap-docs.seeed.cc/sensor_types_list.html)

Para explicar como usar esses dois documentos, vamos usar o sensor SHT40 utilizado neste artigo como exemplo, para fazer uma breve introdução. O sensor SHT40 é um sensor que pode medir dados de temperatura e umidade. Portanto, ele possui um código para o tipo de sensor e dois códigos para os valores (temperatura, umidade).

O código para um tipo de sensor precisamos buscar em [List of Sensor Types](https://sensecap-docs.seeed.cc/sensor_types_list.html). Encontramos um sensor de temperatura e umidade com o código **1001**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/7.png" style={{width:700, height:'auto'}}/></div>

Os códigos para os valores do sensor de que estamos falando são na verdade os Measurement IDs no diagrama, **4097** e **4098**. você também pode encontrá‑los em [List of Measurement IDs](https://sensecap-docs.seeed.cc/measurement_list.html) e verificar se as unidades desses valores correspondem ao seu sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/8.png" style={{width:700, height:'auto'}}/></div>

:::note
Se você não conseguir encontrar na tabela o tipo de sensor adequado para você, talvez precise usar um tipo personalizado com um número de sensor de **4165** a **4174**. o valor do sensor pode não ter unidade.
:::

### Etapa 4. Instalar as bibliotecas necessárias

Primeiro está a biblioteca **NTPClient**, que pode usar a rede do XIAO para obter o carimbo de data e hora atual.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/9.png" style={{width:1000, height:'auto'}}/></div>

Em seguida vem a biblioteca **ArduinoJson**, que facilita para nos ajudar a analisar o que a SenseCraft nos retorna.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/10.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 5. Enviar dados do sensor por meio do programa

A seguir está o procedimento para enviar os dados do SHT40. Observe que as seguintes definições de macro só devem ser usadas se forem modificadas para se adequarem à sua situação.

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

Onde ssid e password se referem ao nome e à senha da sua rede. apiKey se refere às informações de autenticação que obtivemos na **Etapa 2**. deviceEUI e deviceKey são o EUI e a Key do seu dispositivo, que também foram obtidos na **Etapa 2**.

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

Ligue o monitor serial, quando você o ligar, o programa começará a ser executado; quando receber a resposta como mostrado na figura, isso significa que a SenseCraft recebeu com sucesso um dos seus envios de dados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip
O intervalo mínimo de tempo para a SenseCraft receber envios de dados é de cinco minutos.
:::

## Introdução à API HTTP da `SenseCraft Data Platform` -- Obtendo recomendações de IA

Em seguida, vamos aprender como usar a API da `SenseCraft Data Platform` abaixo. Use nossos dados de sensores ao longo do tempo como referência para obter sugestões da IA.

O processo de chamada de interface para a SenseCraft AI é aproximadamente o seguinte.

- Obtenha os IDs de dispositivo e de valor de medição da conta que são suportados para uso em AIGC por meio da Interface I.
- Usando o resultado obtido pela Interface I como um dos parâmetros, a Interface II é chamada para obter o resultado de AIGC.
  - Como o tempo de geração do AIGC pode ser longo, a Interface I retornará um **resource_id** quando for chamada pela primeira vez, e então o front-end usará o **resource_id** para consultar em polling o resultado da resposta. Quando o código da resposta for **11338**, isso significa que o AIGC ainda está em processo de inferência, e a Interface II precisa ser chamada novamente com o **resource_id** até que o resultado final seja retornado.
  - A Interface II tem um limite de fluxo de até dez requisições em cinco minutos para a mesma conta.

Endereço do servidor HTTPS:

```
https://sensecap.seeed.cc/openapi
```

### Sobre a Interface I

O caminho do servidor a ser usado pelo dispositivo para reportar dados do sensor é: `/ai/view_suggestion_by_measurements`, o modo é **POST**, e os seguintes parâmetros de requisição estão disponíveis e são permitidos.

<table align="center">
 <tr>
     <th>Name</th>
        <th>Description</th>
        <th>Note</th>
 </tr>
 <tr>
     <td align="center">- lang</td>
     <td align="center">Selecionar idioma</td>
     <td align="center">1:Chinese, 2:English. Padrão: Chinese.</td>
 </tr>
 <tr>
     <td align="center">- location</td>
     <td align="center">Localização</td>
     <td align="center">Localização, por exemplo, "Shenzhen".</td>
 </tr>
 <tr>
     <td align="center">- crop</td>
     <td align="center">Cultura ou animal</td>
     <td align="center">Cultura ou animal a ser consultado, por exemplo, "apple".</td>
 </tr>
 <tr>
     <td align="center">- time_range</td>
     <td align="center">Tempo de consulta dos dados do dispositivo</td>
     <td align="center">1: 30 dias 2: 180 dias 3: 360 dias. Padrão: 30 dias</td>
 </tr>
 <tr>
     <td align="center">- measurements</td>
     <td align="center">Tipos de medições do dispositivo</td>
     <td align="center">Até seis</td>
 </tr>
    <tr>
     <td align="center">-- dev_eui</td>
     <td align="center">EUI do dispositivo</td>
     <td align="center"></td>
 </tr>
    <tr>
     <td align="center">-- channel_measurement</td>
     <td align="center"></td>
     <td align="center"></td>
 </tr>
    <tr>
     <td align="center">--- channel_index</td>
     <td align="center">Número do canal</td>
     <td align="center">Esse valor está atualmente fixo em 1.</td>
 </tr>
    <tr>
     <td align="center">--- measurement_ids</td>
     <td align="center">Número do valor de medição</td>
     <td align="center"></td>
 </tr>
</table>

A seguir está um exemplo de chamada da Interface I.

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

### Sobre a Interface II

A estrutura e o framework da Interface I são em grande parte iguais aos da Interface II, com a única diferença sendo a adição de um **resource_id** extra no final. Os seguintes parâmetros de requisição estão disponíveis e são permitidos.

<table align="center">
 <tr>
     <th>Name</th>
        <th>Description</th>
        <th>Note</th>
 </tr>
 <tr>
     <td align="center">- lang</td>
     <td align="center">Selecionar idioma</td>
     <td align="center">1:Chinese, 2:English. Padrão: Chinese.</td>
 </tr>
 <tr>
     <td align="center">- location</td>
     <td align="center">Localização</td>
     <td align="center">Localização, por exemplo, "Shenzhen".</td>
 </tr>
 <tr>
     <td align="center">- crop</td>
     <td align="center">Cultura ou animal</td>
     <td align="center">Cultura ou animal a ser consultado, por exemplo, "apple".</td>
 </tr>
 <tr>
     <td align="center">- time_range</td>
     <td align="center">Tempo de consulta dos dados do dispositivo</td>
     <td align="center">1: 30 dias 2: 180 dias 3: 360 dias. Padrão: 30 dias</td>
 </tr>
 <tr>
     <td align="center">- measurements</td>
     <td align="center">Tipos de medições do dispositivo</td>
     <td align="center">Até seis</td>
 </tr>
  <tr>
     <td align="center">-- dev_eui</td>
     <td align="center">EUI do dispositivo</td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">-- channel_measurement</td>
     <td align="center"></td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">--- channel_index</td>
     <td align="center">Número do canal</td>
     <td align="center">Esse valor está atualmente fixo em 1.</td>
 </tr>
  <tr>
     <td align="center">--- measurement_ids</td>
     <td align="center">Número do valor de medição</td>
     <td align="center"></td>
 </tr>
  <tr>
     <td align="center">- resource_id</td>
     <td align="center">Credenciais em cache</td>
     <td align="center">No caso em que uma pergunta já foi feita e o resultado retornado é obtido, leve esse parâmetro para fazer polling no backend até que o resultado da IA seja retornado.</td>
 </tr>
</table>

A seguir está um exemplo de obtenção de conselhos da IA.

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

## XIAO ESP32C3 Obtendo o SenseCraft AI Advisor

### Etapa 6. Criar acesso à API

Se você quiser chamar a interface AIGC do SenseCraft, então precisa preparar o API ID e o API Access Key no SenseCraft. Selecione **Access API keys** na barra de menu esquerda do painel. Em seguida, clique em **Create Access Key** na parte superior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/12.png" style={{width:1000, height:'auto'}}/></div>

Copie o **Access Key ID** e o **Access API Key** criados. Por favor, mantenha-os em segurança e iremos usá-los nas etapas a seguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/13.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 7. Escrever e enviar programas

Seguindo as diretrizes de interface acima, podemos então escrever um programa que permita ao SenseCraft usar os dados de temperatura e umidade do nosso SHT40 para nos retornar recomendações de plantio.

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

Aqui, há alguns parâmetros para ficar de olho. No início do código, uma definição de macro `DEBUG` está comentada. Se essa linha for descomentada, então o programa pode ser executado para imprimir a mensagem retornada cada vez que o SenseCraft retornar.

Abaixo de `DEBUG` estão as informações que precisam ser alteradas dependendo da sua conta e do seu dispositivo. Por exemplo, se você não estiver cultivando maçãs e o local não for Shenzhen, então você precisa alterá-las para se adequarem à sua situação.

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

Além disso, há duas linhas no código que fazem o parse da Access API.

```cpp
String base64Credentials = base64::encode("YOUR-API-ID:YOUR-ACCESS-API-KEY");
```

Por exemplo, o API ID e a API Key que você obteve na **etapa 6** são, respectivamente, `N0AV094KBPH1J9PX` e `5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219`. Então esta linha de código você deve alterar para:

```cpp
String base64Credentials = base64::encode("N0AV094KBPH1J9PX:5DFA8167D23C499C86F61BDEFB901D4995B896A267054D7DAD590BF67FB9A219");
```

Envie (upload) este programa e você verá a mensagem ser enviada e continuar em loop pelos resultados das respostas retornadas pela IA até que os resultados sejam retornados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-connect-sensecap/14.png" style={{width:700, height:'auto'}}/></div>

Neste ponto, parabéns, você dominou todo o conhecimento e conteúdo de acesso do XIAO ao SenseCraft, damos as boas-vindas para que você use nosso XIAO e SenseCraft para aproveitar ainda mais a sua criatividade!

## Solução de Problemas

### P1: Por que estou obtendo resultados nulos depois de receber respostas da IA?

Isso pode ser devido a um tempo limite (timeout) da interface. Você pode esperar até que a próxima consulta seja enviada antes de verificar os resultados. Observe que esse resultado só pode ser buscado uma vez; depois disso, o resultado é imediatamente apagado e não pode mais ser consultado.

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
