---
description: Desenvolver com Ubidots
title: Uso do Ubidots
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Getting_started_with_Ubidots
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Getting_started_with_Ubidots/
---
# Desenvolver com Ubidots

**Ubidots** é uma plataforma que permite a integradores de sistemas, Empreendedores de IoT e OEMs construírem com facilidade aplicações de Internet das Coisas (IoT) e serviços conectados com as ferramentas de coleta, análise e visualização de dados da Ubidots. No planejamento do kit, escolhemos a plataforma Ubidots como alternativa sem LoRaWAN®; você pode usar a função WiFi que vem com o Wio Terminal para obter a apresentação dos dados no dashboard da Ubidots com os dados de sensor de que você precisa por meio do protocolo MQTT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/1.png" /></div>

Neste capítulo mostraremos como enviar dados de sensores para o Ubidots por meio de programação em Arduino.

## Preparação preliminar

### Conexão

Os sensores dentro do Kit SeseCAP - K1100 podem ser todos conectados ao conector Grove sob o Wio Terminal via cabo Grove. A tabela a seguir descreve a localização do conector Grove ao qual cada sensor está conectado.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_ubidots/2.png" /></div>

<table align="center">
  <tbody><tr>
      <th align="center">Tipo de sensor</th>
      <th align="center">Protocolo de comunicação</th>
      <th align="center">Interface Grove conectada</th>
    </tr>
    <tr>
      <td align="center">Grove Temp&amp;Humi Sensor (SHT40)</td>
      <td align="center">I2C</td>
      <td align="center">Interface Grove <strong>esquerda</strong> do Wio Terminal</td>
    </tr>
    <tr>
      <td align="center">Grove VOC and eCO2 Gas Sensor (SGP30)</td>
      <td align="center">I2C</td>
      <td align="center">Interface Grove <strong>esquerda</strong> do Wio Terminal</td>
    </tr>
    <tr>
      <td align="center">Grove Vision AI Module</td>
      <td align="center">I2C</td>
      <td align="center">Interface Grove <strong>esquerda</strong> do Wio Terminal</td>
    </tr>
    <tr>
      <td align="center">Grove Soil Moisture Sensor
      </td><td align="center">ADC</td>
      <td align="center">Interface Grove <strong>direita</strong> do Wio Terminal</td>
    </tr>
  </tbody></table>

### Preparação de software

**Passo 1.** Você precisa instalar o software Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Passo 2.** Inicie o aplicativo Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Passo 3.** Adicione o Wio Terminal à IDE do Arduino.

Abra sua IDE Arduino, clique em `File > Preferences` e copie a URL abaixo em Additional Boards Manager URLs:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Clique em `Tools > Board > Board Manager` e pesquise **Wio Terminal** no Boards Manager.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Passo 4.** Selecione sua placa e porta

Você precisará selecionar a entrada no menu `Tools > Board` que corresponde ao seu Arduino. Selecione o **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecione o dispositivo serial da placa Wio Terminal no menu `Tools -> Port`. Provavelmente será COM3 ou superior (COM1 e COM2 normalmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Wio Terminal e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

:::tip
Para usuários de Mac, será algo como `/dev/cu.usbmodem141401`.
:::
 Se você não conseguir enviar o sketch, na maioria das vezes é porque a IDE do Arduino não conseguiu colocar o Wio Terminal no modo bootloader. (Porque o MCU foi interrompido ou seu programa está manipulando o USB) A solução é colocar seu Wio Terminal manualmente no modo bootloader.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Passo 5.** Instale a biblioteca necessária para o sensor de sua escolha

<table align="center">
  <tbody><tr>
      <th align="center">Tipo de sensor</th>
      <th align="center">Link 1</th>
      <th align="center">Link 2</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal IMU Sensor</td>
      <td align="center"><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank">Download</a></td>
      <td align="center">-</td>
    </tr>
    <tr>
      <td align="center">Grove Temp&amp;Humi Sensor (SHT40)</td>
      <td align="center"><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank">Download</a></td>
      <td align="center"><a href="https://github.com/Sensirion/arduino-core" target="_blank">Download</a></td>
    </tr>
    <tr>
      <td align="center">Grove VOC and eCO2 Gas Sensor (SGP30)</td>
      <td align="center"><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank">Download</a></td>
      <td align="center">-</td>
    </tr>
    <tr>
      <td align="center">Grove Vision AI Module</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle" target="_blank">Download</a></td>
      <td align="center">-</td>
    </tr>
  </tbody></table>

:::note
 Sensores não listados na tabela acima indicam que não é necessário baixar uma biblioteca separada.
:::
**Passo 6.** Bibliotecas necessárias para Wi-Fi

Precisamos das seguintes bibliotecas para começar a trabalhar com Wi-Fi no Wio Terminal. Você pode pesquisar essas bibliotecas digitando o nome da biblioteca na caixa de pesquisa do Arduino Library Manager.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/20.png" /></div>

- [**Seeed_Arduino_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) - pesquise por `seeed rpcwifi`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/21.png" /></div>

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - pesquise por `seeed rpcunified`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/23.png" /></div>

- [**Seeed_Arduino_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) - pesquise por `seeed mbedtls`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/24.png" /></div>

- [**Seeed_Arduino_FS**](https://github.com/Seeed-Studio/Seeed_Arduino_FS) - pesquise por `seeed fs`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/25.png" /></div>

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) - pesquise por `seeed sfud`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/26.png" /></div>

- [**PubSubClinet**](https://github.com/knolleary/pubsubclient) - pesquise por `PubSubClient`

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_ubidots/22.png" /></div>

## Etapas de operação

**Passo 1.** Registre-se e faça login no Ubidots

Se esta for a sua primeira vez usando o Ubidots, acesse o [site do Ubidots](https://ubidots.com/) e registre uma conta própria.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/3.png" /></div>

Depois de se registrar, faça login no Ubidots usando a conta registrada.

**Passo 2.** Atribua seu **TOKEN do Ubidots** exclusivo

Toda requisição ao Ubidots requer um TOKEN. A maneira mais fácil de obter o seu é clicando em “API Credentials” no menu suspenso do usuário.

Vá até o menu suspenso do usuário e clique em API credentials:

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/k1100_ubidots/4.png" /></div>

**Tokens**: chaves temporárias e revogáveis a serem usadas em suas requisições de API. Salve o TOKEN por enquanto, nós o usaremos mais tarde.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/5.png" /></div>

:::note
 Todas as chamadas de API aceitam apenas o seu **TOKEN**. Não tente usar sua API Key, pois não vai funcionar! Você também pode acessar todas as suas API Keys da Ubidots na seção My Profile nas configurações do seu menu de usuário. Selecione **My Profile** –> **API Credentials** para revisar a lista de API TOKENS relacionadas à sua conta específica do Ubidots.
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/6.png" /></div>

**Passo 3.** Prepare-se com as informações necessárias

Para estabelecer uma conexão MQTT, precisaremos preparar as seguintes informações com antecedência.

- **SSID do WiFi**
  - Preencha o SSID do WiFi ao qual o Wio Terminal pode se conectar. O Wio Terminal irá procurar redes WiFi ao seu redor e tentará se conectar a elas.
- **Senha do SSID do WiFi**
  - Preencha a senha do SSID do WiFi ao qual o Wio Terminal pode se conectar.
- **Ubidots TOKEN**
  - Este é o TOKEN gerado no **passo 2**.
- **Rótulo da variável**
  - Este é o nome do valor do sensor fornecido pelo usuário ao Ubidots. O Ubidots faz a correspondência com diferentes dados com base nesse nome fornecido pelo usuário. Se o rótulo da variável não existir antes que o primeiro ponto seja enviado, o Ubidots irá criá-lo automaticamente.
- **Rótulo do dispositivo**
  - Este é o nome do dispositivo e o nome do dispositivo fornecido pelo usuário será usado pelo Ubidots para identificar o dispositivo. Se o rótulo do dispositivo não existir antes que o primeiro ponto seja enviado, o Ubidots irá criá-lo automaticamente.
- **Nome do cliente MQTT**
  - Isso é especial porque é o ID com o qual seu dispositivo será identificado pelo broker, portanto ele **DEVE** ser exclusivo. Se o seu dispositivo tentar se conectar com o mesmo ID que já foi usado por outro dispositivo, a conexão será recusada. Crie seu próprio nome de cliente MQTT totalmente alfanumérico com 8–12+ caracteres e insira-o no código de acordo.
 Precisa de ajuda para criar um nome de cliente MQTT exclusivo? Dê uma olhada neste [random ascii builder](https://www.random.org/strings/), ou simplesmente use o endereço MAC do seu dispositivo, já que todo endereço MAC é globalmente exclusivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/7.png" /></div>

No início do programa abaixo, vamos definir esses requisitos no topo do código; preencha com suas próprias informações conforme apropriado.

```cpp
//examples
#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL "light" // Assign the variable label
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name
```

### Enviar dados dos sensores integrados para o Ubidots

Se você quiser enviar dados de detecção dos sensores integrados do Wio Terminal para o Ubidots, cole o código completo abaixo no Arduino e faça o upload para o Wio Terminal.

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include"LIS3DHTR.h"

LIS3DHTR<TwoWire> lis;

//Required Information
#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL1 "light" // Assign the variable label
#define VARIABLE_LABEL2 "IMUx"
#define VARIABLE_LABEL3 "IMUy"
#define VARIABLE_LABEL4 "IMUz"
#define VARIABLE_LABEL5 "sound"
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name

const long interval = 100;
unsigned long previousMillis = 0;

TFT_eSPI tft;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

//sensor values
static int lightValue = 0;
static float imuxValue = 0;
static float imuyValue = 0;
static float imuzValue = 0;
static int soundValue = 0;

// Space to store values to send
static char str_light[6];
static char str_imux[6];
static char str_imuy[6];
static char str_imuz[6];
static char str_sound[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");

  // Attempt to connect
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("connected");
  }
  else {
    Serial.print("failed, rc=");
    Serial.print(client.state());
    Serial.println(" try again in 2 seconds");
    // Wait 2 seconds before retrying
    delay(2000);
    }
  }
}

//Reading built-in sensor values
void read_builtin()
{
  lightValue = analogRead(WIO_LIGHT);
  Serial.print("Light = ");
  Serial.println(lightValue);

  imuxValue = lis.getAccelerationX();
  Serial.print("IMU_x = ");
  Serial.println(imuxValue);
  imuyValue = lis.getAccelerationY();
  Serial.print("IMU_y = ");
  Serial.println(imuyValue);
  imuzValue = lis.getAccelerationZ();
  Serial.print("IMU_z = ");
  Serial.println(imuzValue);

  soundValue = analogRead(WIO_MIC);
  Serial.print("Sound = ");
  Serial.println(soundValue);
}

//Sending data to Ubidots
void send_data()
{
  dtostrf(lightValue, 4, 0, str_light);
  dtostrf(imuxValue, 4, 3, str_imux);
  dtostrf(imuyValue, 4, 3, str_imuy);
  dtostrf(imuzValue, 4, 3, str_imuz);
  dtostrf(soundValue, 4, 0, str_sound);

  if (!client.connected()) {
    reconnect();
  }

  // Builds the topic
  sprintf(topic, "%s", ""); // Cleans the topic content
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  //Builds the payload
  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_light); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_imux); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL3); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_imuy); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL4); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_imuz); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL5); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_sound); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);
  pinMode(WIO_MIC, INPUT);
  pinMode(WIO_LIGHT, INPUT);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);

  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G);

//  while(!Serial);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();

  tft.drawString("Connecting to WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }

  tft.fillScreen(TFT_BLACK);
  tft.drawString("Connected to the WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);

}

void loop() {
  read_builtin();   //Reading buile-in sensor values
  send_data();   //Sending data to Ubidots
  delay(5000);
}
```

### Enviar dados do Grove Soil Moisture Sensor para o Ubidots

Se você quiser enviar dados do Grove Soil Moisture Sensor para o Ubidots, cole o código completo abaixo no Arduino e faça o upload para o Wio Terminal.

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>

//Required Information
#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL "light" // Assign the variable label
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name

const long interval = 100;
unsigned long previousMillis = 0;

TFT_eSPI tft;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

//Soil moisture pins and sensor values
int sensorPin = A0;
static int soilValue = 0;

// Space to store values to send
char str_soil[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");

  // Attempt to connect
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("connected");
  }
  else {
    Serial.print("failed, rc=");
    Serial.print(client.state());
    Serial.println(" try again in 2 seconds");
    // Wait 2 seconds before retrying
    delay(2000);
    }
  }
}

//Reading soil moisture sensor values
void read_soil()
{
  soilValue = analogRead(sensorPin);
  Serial.print("Moisture = ");
  Serial.println(soilValue);
}

//Sending data to Ubidots
void send_data()
{
  dtostrf(soilValue, 4, 0, str_soil);

  if (!client.connected()) {
    reconnect();
  }

  // Builds the topic
  sprintf(topic, "%s", ""); // Cleans the topic content
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  //Builds the payload
  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_soil); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets

  client.publish(topic, payload);
  delay(500);

  client.loop();
}


void setup() {
  Serial.begin(115200);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();

  tft.drawString("Connecting to WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }

  tft.fillScreen(TFT_BLACK);
  tft.drawString("Connected to the WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_soil();   //Reading soil moisture sensor values
  send_data();   //Sending data to Ubidots
  delay(5000);
}
```

### Enviar Dados do Sensor de Gás Grove VOC e eCO2 para o Ubidots

Se você quiser enviar os dados do Sensor de Gás Grove VOC e eCO2 para o Ubidots, cole o código completo abaixo no Arduino e faça o upload para o Wio Terminal.

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include "sensirion_common.h"
#include "sgp30.h"

#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL1 "voc" // Assign the variable label
#define VARIABLE_LABEL2 "co2"
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

TFT_eSPI tft = TFT_eSPI();

static unsigned short int VOC = 0;
static unsigned short int CO2 = 0;

// Space to store values to send
char str_voc[6];
char str_co2[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");

  // Attempt to connect
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("connected");
  }
  else {
    Serial.print("failed, rc=");
    Serial.print(client.state());
    Serial.println(" try again in 2 seconds");
    // Wait 2 seconds before retrying
    delay(2000);
    }
  }
}

void read_sgp30()
{
  s16 err = 0;
  sgp_measure_iaq_blocking_read(&VOC, &CO2);
  if (err == STATUS_OK) {
      Serial.print("tVOC  Concentration:");
      Serial.print(VOC);
      Serial.println("ppb");

      Serial.print("CO2eq Concentration:");
      Serial.print(CO2);
      Serial.println("ppm");
  } else {
      Serial.println("error reading IAQ values\n");
  }
}

void send_data()
{
  dtostrf(VOC, 4, 0, str_voc);
  dtostrf(CO2, 4, 0, str_co2);

  if (!client.connected()) {
    reconnect();
  }

  // Builds the topic
  sprintf(topic, "%s", ""); // Cleans the topic content
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  //Builds the payload
  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_voc); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  Serial.println(payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_co2); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  Serial.println(payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  while (sgp_probe() != STATUS_OK) {
      Serial.println("SGP failed");
  }
  sgp_set_absolute_humidity(13000);
  sgp_iaq_init();

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);

//  while(!Serial);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();

  tft.drawString("Connecting to WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }

  tft.fillScreen(TFT_BLACK);
  tft.drawString("Connected to the WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_sgp30();    //Reading sgp30 sensor values
  send_data();     //Sending data to Ubidots
  delay(5000);
}
```

### Enviar Dados do Sensor de Temperatura e Umidade Grove para o Ubidots

Se você quiser enviar os dados do Sensor de Temperatura e Umidade Grove para o Ubidots, cole o código completo abaixo no Arduino e faça o upload para o Wio Terminal.

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL1 "temperature" // Assign the variable label
#define VARIABLE_LABEL2 "humidity"
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

TFT_eSPI tft = TFT_eSPI();
SensirionI2CSht4x sht4x;

static float temp = 0;
static float humi = 0;

// Space to store values to send
char str_temp[6];
char str_humi[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");

  // Attempt to connect
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("connected");
  }
  else {
    Serial.print("failed, rc=");
    Serial.print(client.state());
    Serial.println(" try again in 2 seconds");
    // Wait 2 seconds before retrying
    delay(2000);
    }
  }
}

void read_sht40()
{
  uint16_t error;
  char errorMessage[256];
  error = sht4x.measureHighPrecision(temp, humi);
  if (error) {
      Serial.print("Error trying to execute measureHighPrecision(): ");
      errorToString(error, errorMessage, 256);
      Serial.println(errorMessage);
  } else {
      Serial.print("Temperature:");
      Serial.print(temp);
      Serial.print("\t");
      Serial.print("Humidity:");
      Serial.println(humi);
  }
}

void send_data()
{
  dtostrf(temp, 4, 2, str_temp);
  dtostrf(humi, 4, 2, str_humi);

  if (!client.connected()) {
    reconnect();
  }

  // Builds the topic
  sprintf(topic, "%s", ""); // Cleans the topic content
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  //Builds the payload
  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_temp); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_humi); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  Wire.begin();
  sht4x.begin(Wire);

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);

//  while(!Serial);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();

  tft.drawString("Connecting to WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }

  tft.fillScreen(TFT_BLACK);
  tft.drawString("Connected to the WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_sht40();    //Reading sht40 sensor values
  send_data();     //Sending data to Ubidots
  delay(5000);
}
```

### Enviar Dados do Módulo Grove Vision Ai para o Ubidots

Se você quiser enviar os dados do Módulo Grove Vision Ai para o Ubidots, cole o código completo abaixo no Arduino e faça o upload para o Wio Terminal.

```cpp
#include <PubSubClient.h>
#include <rpcWiFi.h>
#include <TFT_eSPI.h>
#include"LIS3DHTR.h"
#include "Seeed_Arduino_GroveAI.h"

//Required Information
#define WIFISSID "<YOUR-WIFISSD>" // Put your WifiSSID here
#define PASSWORD "<YOUR-WIFI-PASSWORD" // Put your wifi password here
#define TOKEN "<YOUR-UBIDOTS-TOKEN>" // Put your Ubidots' TOKEN
#define VARIABLE_LABEL1 "num" // Assign the variable label
#define VARIABLE_LABEL2 "confidence"
#define DEVICE_LABEL "wio-terminal" // Assign the device label
#define MQTT_CLIENT_NAME "r6y1ax7mq8" // MQTT client Name

const long interval = 100;
unsigned long previousMillis = 0;

char mqttBroker[] = "industrial.api.ubidots.com";

WiFiClient wifiClient;
PubSubClient client(wifiClient);

GroveAI ai(Wire);
uint8_t state = 0;
TFT_eSPI tft = TFT_eSPI();

static int num = 0;
static int conf = 0;

// Space to store values to send
char str_num[6];
char str_conf[6];
char payload[700];
char topic[150];

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
  }
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");

  // Attempt to connect
  if (client.connect(MQTT_CLIENT_NAME, TOKEN,"")) {
    Serial.println("connected");
  }
  else {
    Serial.print("failed, rc=");
    Serial.print(client.state());
    Serial.println(" try again in 2 seconds");
    // Wait 2 seconds before retrying
    delay(2000);
    }
  }
}

//Vision AI init
void VisionAI_Init()
{
  Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // Object detection and pre-trained model 1
  {
    state = 1;
  }
  else
  {
    Serial.println("Algo begin failed.");
  }
}

//Read VisionAI values: number of characters recognized, confidence level for each person
void read_VisionAI()  
{
  if (state == 1)
  {
    uint32_t tick = millis();
    if (ai.invoke()) // begin invoke
    {
      while (1) // wait for invoking finished
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }
      uint8_t len = ai.get_result_len(); // receive how many people detect
      if(len)
      {
         Serial.print("Number of people: ");

         num = len;
         Serial.println(num);

         object_detection_t data;       //get data
         for (int i = 0; i < len; i++)
         {
            ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result
            Serial.print("confidence:");

            conf = data.confidence;
            Serial.println(conf);
          }
      }
     else
     {
       Serial.println("No identification");
       num = 0;
       conf = 0;
     }
   }
    else
    {
      Serial.println("Invoke Failed.");
      num = 0;
      conf = 0;
      delay(1000);
    }
  }
}

void send_data()
{
  dtostrf(num, 4, 0, str_num);
  dtostrf(conf, 4, 0, str_conf);

  if (!client.connected()) {
    reconnect();
  }

  // Builds the topic
  sprintf(topic, "%s", ""); // Cleans the topic content
  sprintf(topic, "%s%s", "/v2.0/devices/", DEVICE_LABEL);

  //Builds the payload
  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL1); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_num); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  sprintf(payload, "%s", ""); // Cleans the payload
  sprintf(payload, "{\"%s\":", VARIABLE_LABEL2); // Adds the variable label
  sprintf(payload, "%s%s", payload, str_conf); // Adds the value
  sprintf(payload, "%s}", payload); // Closes the dictionary brackets
  client.publish(topic, payload);
  delay(500);

  client.loop();
}

void setup() {
  Serial.begin(115200);
  Wire.begin();

  tft.begin();
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);
  VisionAI_Init();

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();

  tft.drawString("Connecting to WiFi...",20,120);
  WiFi.begin(WIFISSID, PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    WiFi.begin(WIFISSID, PASSWORD);
  }

  tft.fillScreen(TFT_BLACK);
  tft.drawString("Connected to the WiFi",20,120);

  delay(1000);
  client.setServer(mqttBroker, 1883);
  client.setCallback(callback);
}

void loop() {
  read_VisionAI(); //Reading visionai sensor values
  send_data();     //Sending data to Ubidots
  delay(5000);
}
```

### Painéis Ubidots

Depois que o código for carregado, podemos nos preparar para configurar o dashboard para ver como os dados foram enviados.

O Ubidots tem uma interface muito simples e, se você quiser ver informações sobre o seu dispositivo, pode selecionar **Devices** bem na parte superior do dashboard.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/16.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/11.png" /></div>

Clique no nome do seu dispositivo aqui para poder ver todas as abas de histórico. Isto é determinado pelo **VARIABLE_LABEL** no código.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/19.png" /></div>

:::note
A versão gratuita do Ubidots suporta apenas a criação de **um TOKEN** e **dez labels**. Quando você tiver mais de dez labels, as labels que você enviou, bem como os dados, serão descartados.
:::
Se você quiser ver as informações de dados do seu dispositivo, pode selecionar **Data**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/17.png" /></div>

Você também pode selecionar uma tela de dashboard diferente no canto superior esquerdo da página principal. Por padrão, para começar, o Ubidots criará automaticamente um dashboard para você chamado **Demo Dashboard**. Quando o Wio Terminal estiver em rede e enviando dados, você verá um dashboard chamado **wio terminal dashboard**. Isto é definido no código em **DEVICE_LABEL**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/18.png" /></div>

Você pode adicionar diferentes painéis no dashboard atual, o que exige que você clique no sinal de **+** no canto superior direito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/13.png" /></div>

Abaixo está uma lista dos painéis suportados pelo Ubidots.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/15.png" /></div>

Vamos usar como exemplo a criação de um gráfico de linhas. Se você quiser desenhar um gráfico de linhas dos valores do sensor IMU, então você precisa criar três labels e os **nomes das labels precisam corresponder ao VARIABLE_LABEL no seu código**, depois é só deixar tudo com o Ubidots e ele será gerado automaticamente para você.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/14.png" /></div>

O Ubidots também possui recursos de personalização muito poderosos, como se deve exibir valores, o nome do eixo Y e quanto dado exibir, tudo isso você pode ajustar livremente.

## Recursos

Para todos os códigos usados neste tutorial, clique no ícone para acessá-los.

<div>
  <p style={{}}><a href="https://github.com/limengdu/K1100_Ubidots" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/K1100_Ubidots" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaração

- A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
