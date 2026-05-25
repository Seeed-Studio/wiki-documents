---
description: Google Cloud IoT
title: Uso do Google
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Connect-Wio-Terminal-to-Google-Cloud
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Connect-Wio-Terminal-to-Google-Cloud/
---
# Conectar o Wio Terminal ao Google Cloud IoT Core

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" alt="pir" width={600} height="auto" /></p>

## Atualizável para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte de APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}>
          <strong>Sensor Industrial SenseCAP</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Dados</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. do Ar &amp; Umidade</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. do Ar &amp; Umidade &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade &amp; Temp. do Solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade &amp; Temp. do Solo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody></table>

## Introdução

Neste tutorial, vamos guiá-lo pelo processo de conexão do Wio Terminal ao Google Cloud IoT Core e envio de dados de telemetria do Wio Terminal para o Google Cloud IoT Core. Isso será dividido em duas seções, onde a primeira seção explicará como usar as bibliotecas existentes para enviar dados de telemetria pré-configurados no código, enquanto a segunda seção explicará como adicionar seus próprios sensores ao Wio Terminal para enviar os dados de telemetria para o Google Cloud IoT Core. O Google Cloud IoT Core oferece suporte aos protocolos HTTP e MQTT para comunicação, porém usaremos o protocolo MQTT neste tutorial.

### O que é o Google Cloud?

[Google Cloud](https://cloud.google.com/) consiste em um conjunto de recursos físicos, como computadores e discos rígidos, e recursos virtuais, como máquinas virtuais (VMs), que estão contidos nos data centers do Google ao redor do mundo. Essa distribuição de recursos oferece vários benefícios, incluindo redundância em caso de falha e redução de latência ao localizar recursos mais próximos dos clientes.

Na computação em nuvem, aquilo que você talvez esteja acostumado a considerar como produtos de software e hardware torna-se serviços. Esses serviços fornecem acesso aos recursos subjacentes. A [lista de serviços disponíveis do Google Cloud](https://cloud.google.com/products) é longa e continua crescendo. Quando você desenvolve seu site ou aplicativo no Google Cloud, você combina esses serviços em configurações que fornecem a infraestrutura de que você precisa e, em seguida, adiciona seu código para viabilizar os cenários que deseja construir.

### O que é o Google Cloud Platform?

[Google Cloud Platform (GCP)](https://console.cloud.google.com/) é um conjunto de serviços de computação em nuvem. Com um conjunto de ferramentas de gerenciamento, ele oferece uma série de serviços de nuvem modulares, incluindo computação, armazenamento de dados, análise de dados e aprendizado de máquina. Ele fornece infraestrutura como serviço, plataforma como serviço e ambientes de computação sem servidor.

### O que é o Google Cloud IoT Core?

[Google Cloud Internet of Things (IoT) Core](https://cloud.google.com/iot/docs) é um serviço totalmente gerenciado para conectar e gerenciar dispositivos IoT com segurança, de alguns até milhões. Ele recebe dados de dispositivos conectados e permite criar aplicações avançadas que se integram a outros serviços de big data do Google Cloud Platform.

### O que é o Google Cloud Console?

[Google Cloud Console](https://console.cloud.google.com/) fornece uma interface gráfica baseada na web que você pode usar para gerenciar os recursos do Google Cloud Platform. Ao usar o Cloud Console, você cria um novo projeto, ou escolhe um projeto existente, e usa os recursos que cria no contexto desse projeto. Você pode criar vários projetos, de modo que possa usar os projetos para separar seu trabalho da maneira que fizer mais sentido para você. Por exemplo, você pode iniciar um novo projeto se quiser ter certeza de que apenas determinados membros da equipe possam acessar os recursos desse projeto, enquanto todos os membros da equipe continuam a acessar recursos em outro projeto.

## Conectando o Wio Terminal ao Google Cloud IoT Core via MQTT

Conforme explicado anteriormente, usaremos a ponte MQTT disponível para a comunicação entre o Wio Terminal e o Google Cloud IoT Core. No entanto, você também pode usar a ponte HTTP, se esse for o seu requisito.

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png" alt="pir" width={600} height="auto" /></p>

### Configuração do Google Cloud Console

Primeiro precisamos visitar o Google Cloud Console, criar um registro de dispositivo do Cloud IoT Core e registrar um dispositivo.

#### Configuração inicial

- **ETAPA 1:** Visite [aqui](https://console.cloud.google.com/) para criar um novo projeto

**Observação:** Faça login na sua conta Google se for solicitado

- **ETAPA 2:** Clique no menu **Select a project**

- **ETAPA 3:** Clique em **NEW PROJECT** e insira um **project name**

- **ETAPA 4:** Clique em **CREATE**

- **ETAPA 5:** Ative o faturamento para o seu projeto Cloud. Isso é necessário para garantir que você não é um robô e você não será cobrado. Escolha "Billing" no menu de navegação e siga a configuração.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/1111111.png" alt="pir" width={500} height="auto" /></p>

- **ETAPA 6:** Visite [aqui](https://console.cloud.google.com/flows/enableapi?apiid=cloudiot.googleapis.com%2Cpubsub&authuser=3&_ga=2.254170561.853675115.1607885458-878786893.1606048800) para ativar as APIs Cloud IoT Core e Cloud Pub/Sub

**Observação:** Escolha o projeto que você criou antes no menu suspenso

#### Criar um Registro de Dispositivo

- **ETAPA 1:** Visite a [página do Google Cloud IoT Core](https://console.cloud.google.com/iot/registries) no Cloud Console

- **ETAPA 2:** Clique em **Create Registry**

- **ETAPA 3:** Insira um **registry ID**

**Observação:** Este é o nome do seu registro

- **ETAPA 4:** Selecione uma **Region**

**Observação:** Se você estiver nos EUA, selecione us-central1 para a Region. Se você estiver fora dos EUA, selecione sua região preferida.

- **ETAPA 5:** Na lista suspensa **Select a Cloud Pub/Sub topic**, selecione **Create a topic** e digite o **Topic ID** de sua preferência

- **ETAPA 6:** Clique em **CREATE TOPIC**

- **ETAPA 7:** Clique em **SHOW ADVANCED OPTIONS**

- **ETAPA 8:** Os campos **Device state topic** e **Certificate value** são opcionais, então deixe-os em branco

- **ETAPA 9:** Selecione **MQTT** para o **Protocol**

- **ETAPA 10:** Clique em **Create** na página do Cloud IoT Core

Agora criamos um registro de dispositivo com um tópico Cloud Pub/Sub para publicar eventos de telemetria do dispositivo

#### Gerar um Par de Chaves de Dispositivo (Chaves EC)

O Cloud IoT Core usa autenticação de chave pública (ou assimétrica)

- O dispositivo usa uma chave privada para assinar um [JSON Web Token (JWT)](https://cloud.google.com/iot/docs/how-tos/credentials/jwts). O token é enviado ao Cloud IoT Core como prova da identidade do dispositivo.
- O serviço usa a chave pública do dispositivo (carregada antes de o JWT ser enviado) para verificar a identidade do dispositivo.

O Cloud IoT Core oferece suporte aos algoritmos RSA e Elliptic Curve, e usaremos chaves Elliptic Curve neste tutorial.

- **ETAPA 1:** Crie uma nova pasta no seu PC

- **ETAPA 2:** Navegue até a pasta a partir de uma janela de terminal e digite o seguinte para gerar um par de chaves Elliptic Curve P-256

```sh
openssl ecparam -genkey -name prime256v1 -noout -out ec_private.pem
openssl ec -in ec_private.pem -pubout -out ec_public.pem
```

**Observação:** Certifique-se de instalar **openssl** seguindo [este link](https://slproweb.com/products/Win32OpenSSL.html) e adicionando o local do diretório ao PATH.

Os comandos acima criam o seguinte par de chaves pública/privada:

- **ec_private.pem**: A chave privada que deve ser armazenada com segurança no dispositivo e usada para assinar o JWT de autenticação.
- **ec_public.pem**: A chave pública que deve ser armazenada no Cloud IoT Core e usada para verificar a assinatura do JWT de autenticação.

#### Extrair a Chave Privada

Precisamos extrair os bytes da chave privada e copiá-los para a string da chave privada no projeto Arduino que criaremos mais tarde neste tutorial. Salve essas chaves por enquanto para usar depois.

- **ETAPA 1:** Abra uma janela de terminal e navegue até a pasta que contém o par de chaves Elliptic Curve que geramos anteriormente.

- **ETAPA 2:** Digite o seguinte comando

```sh
openssl ec -in ec_private.pem -noout -text
```

- **ETAPA 3:** Copie e cole os bytes da chave privada gerados em **priv:** em um bloco de notas e salve para uso posterior.

#### Adicionar um Dispositivo ao Registro

- **ETAPA 1:** Visite a [página Registries](https://console.cloud.google.com/iot/registries) e selecione o registro que você criou antes

- **ETAPA 2:** Selecione a aba **Devices** e clique em **CREATE A DEVICE**

- **ETAPA 3:** Insira um **Device ID**

- **ETAPA 4:** O campo **Device metadata** é opcional, então deixe-o em branco

- **ETAPA 5:** Clique no menu suspenso **COMMUNICATION, CLOUD LOGGING, AUTHENTICATION**

- **ETAPA 6:** Selecione **Allow** para **Device communication**

- **ETAPA 7:** Dentro do campo **Authentication**, em **Input method**, selecione **Upload**

- **ETAPA 8:** Selecione **ES256** no menu suspenso **Public key format**

- **ETAPA 9:** Em **Public key value**, pressione o botão **BROWSE**, navegue até a pasta **Elliptic Curve key pair** que criamos antes e selecione **ec_public.pem**

- **ETAPA 10:** Clique em **Create**

Agora você adicionou um dispositivo ao seu registro. A chave ES256 aparece na página de detalhes do dispositivo para o seu dispositivo.

#### Configurar um Assinante

Agora que criamos um registro de dispositivo, criamos um tópico e adicionamos um dispositivo a esse registro, vamos prosseguir para criar um assinante para assinar o tópico que criamos, a fim de obter os dados de telemetria do Wio Terminal.

- **ETAPA 1:** Digite **Pub** na barra de pesquisa do Google Cloud Console e selecione **Pub/Sub** nos resultados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/333333.png" alt="pir" width={700} height="auto" /></p>

- **ETAPA 2:** Clique em **Subscriptions** no menu de navegação

- **ETAPA 3:** Clique em **CREATE SUBSCRIPTION**

- **ETAPA 4:** Insira um **Subscription ID** de sua escolha

- **ETAPA 5:** Selecione o **Pub/Sub topic** que criamos anteriormente no menu suspenso **Select a Cloud Pub/Sub topic**

- **ETAPA 6:** Selecione **Pull** como o tipo de entrega

- **ETAPA 7:** Clique em **Create**

Agora terminamos a configuração do Google Cloud IoT Core. Em seguida, passaremos para a configuração do Wio Terminal juntamente com a Arduino IDE.

### Configuração do Arduino com o Wio Terminal

#### Bibliotecas Necessárias

Precisamos de duas bibliotecas para este tutorial.

1. lwMQTT MQTT Arduino Library
2. Google Cloud IoT Arduino Library

Para baixar essas bibliotecas:

- **ETAPA 1:** Abra o Arduino IDE
- **ETAPA 2:** Navegue até `Sketch > Include Library > Manage Libraries`
- **ETAPA 3:** Digite **lwMQTT** e **Google Cloud IoT** na caixa de pesquisa e instale as bibliotecas

#### Configuração de Credenciais e Informações da Conta

Agora precisamos definir as credenciais de Wi-Fi e as informações do Google Cloud IoT Core no arquivo **ciotc_config.h**.

- **ETAPA 1:** Dentro do Arduino IDE, `File > Examples > Google Cloud IoT JWT > Esp32-lwmqtt`

- **ETAPA 2:** Navegue até **ciotc_config.h**

- **ETAPA 3:** Altere os **Wifi network details**

```cpp
const char *ssid = "Enter_SSID";
const char *password = "Enter_Password";
```

- **ETAPA 4:** Altere os **Google Cloud IoT details**

```cpp
const char *project_id = "Enter_Project_ID";
const char *location = "Enter_location";
const char *registry_id = "Enter_Registry_ID";
const char *device_id = "Enter_Device_ID";
```

- **ETAPA 5:** Copie os bytes da chave privada que obtivemos de **ec_private.pem** e salvamos no bloco de notas anteriormente

```cpp
const char *private_key_str =
    "6e:b8:17:35:c7:fc:6b:d7:a9:cb:cb:49:7f:a0:67:"
    "63:38:b0:90:57:57:e0:c0:9a:e8:6f:06:0c:d9:ee:"
    "31:41";
```

**Observação:** O comprimento da chave deve ser de 32 pares de dígitos hexadecimais

#### Alterar Métodos de Tempo NTP

Abra **esp32-mqtt.h** e substitua todo o arquivo pelos seguintes códigos. Aqui substituímos a função configTime pela implementação de obtenção de tempo NTP via UDP.

```cpp
#include <Client.h>
#include <rpcWiFi.h>
#include <WiFiClientSecure.h>

#include <MQTT.h>

#include <CloudIoTCore.h>
#include <CloudIoTCoreMqtt.h>
#include "ciotc_config.h" // Update this file with your configuration

// !!REPLACEME!!
// The MQTT callback function for commands and configuration updates
// Place your message handler code here.
void messageReceived(String &topic, String &payload){
  Serial.println("incoming: " + topic + " - " + payload);
}
///////////////////////////////

// Initialize WiFi and MQTT for this board
//Client *netClient;
CloudIoTCoreDevice *device;
CloudIoTCoreMqtt *mqtt;
MQTTClient *mqttClient;
unsigned long iat = 0;
String jwt;
WiFiUDP udp;

unsigned int localPort = 2390;
unsigned long devicetime;
const int NTP_PACKET_SIZE = 48; // NTP time stamp is in the first 48 bytes of the message
byte packetBuffer[NTP_PACKET_SIZE]; //buffer to hold incoming and outgoing packets

// send an NTP request to the time server at the given address
unsigned long sendNTPpacket(const char* address) {
    // set all bytes in the buffer to 0
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // Initialize values needed to form NTP request
    // (see URL above for details on the packets)
    packetBuffer[0] = 0b11100011;   // LI, Version, Mode
    packetBuffer[1] = 0;     // Stratum, or type of clock
    packetBuffer[2] = 6;     // Polling Interval
    packetBuffer[3] = 0xEC;  // Peer Clock Precision
    // 8 bytes of zero for Root Delay & Root Dispersion
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // all NTP fields have been given values, now
    // you can send a packet requesting a timestamp:
    udp.beginPacket(address, 123); //NTP requests are to port 123
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

unsigned long getNTPtime() {

    // module returns a unsigned long time valus as secs since Jan 1, 1970 
    // unix time or 0 if a problem encounted

    //only send data when connected
    if (WiFi.status() == WL_CONNECTED) {
        //initializes the UDP state
        //This initializes the transfer buffer
        udp.begin(WiFi.localIP(), localPort);
        sendNTPpacket(ntp_primary); // send an NTP packet to a time server
        // wait to see if a reply is available
        delay(1000);
        if (udp.parsePacket()) {
//            Serial.println("udp packet received");
//            Serial.println("");
            // We've received a packet, read the data from it
            udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer

            //the timestamp starts at byte 40 of the received packet and is four bytes,
            // or two words, long. First, extract the two words:

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            // combine the four bytes (two words) into a long integer
            // this is NTP time (seconds since Jan 1 1900):
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            // Unix time starts on Jan 1 1970. In seconds, that's 2208988800:
            const unsigned long seventyYears = 2208988800UL;
            // subtract seventy years:
            unsigned long epoch = secsSince1900 - seventyYears;

            // adjust time for timezone offset in secs +/- from UTC
            // WA time offset from UTC is +8 hours (28,800 secs)
            // + East of GMT
            // - West of GMT
//            long tzOffset = 28800UL;
            long tzOffset = 0UL;

            // WA local time 
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            // were not able to parse the udp packet successfully
            // clear down the udp connection
            udp.stop();
            return 0; // zero indicates a failure
        }
        // not calling ntp time frequently, stop releases resources
        udp.stop();
    }
    else {
        // network not connected
        return 0;
    }

}

///////////////////////////////
// Helpers specific to this board
///////////////////////////////
String getDefaultSensor(){
  return "Wifi: " + String(WiFi.RSSI()) + "db";
}

String getJwt(){
  Serial.println("Refreshing JWT");
  iat = getNTPtime();
  Serial.println(iat);
  jwt = device->createJWT(iat, jwt_exp_secs);

  Serial.println(jwt);
  return jwt;
}

void setupWifi(){
  Serial.println("Starting wifi");

  WiFi.mode(WIFI_STA);
  // WiFi.setSleep(false); // May help with disconnect? Seems to have been removed from WiFi
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED){
    delay(100);
  }

//  configTime(0, 0, ntp_primary, ntp_secondary);
  Serial.println("Waiting on time sync...");
//  Serial.println(getNTPtime());

  while (getNTPtime() < 1510644967){
    delay(10);
  }
}

void connectWifi(){
  Serial.print("checking wifi...");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(1000);
  }
}

///////////////////////////////
// Orchestrates various methods from preceeding code.
///////////////////////////////
bool publishTelemetry(String data){
  return mqtt->publishTelemetry(data);
}

bool publishTelemetry(const char *data, int length){
  return mqtt->publishTelemetry(data, length);
}

bool publishTelemetry(String subfolder, String data){
  return mqtt->publishTelemetry(subfolder, data);
}

bool publishTelemetry(String subfolder, const char *data, int length){
  return mqtt->publishTelemetry(subfolder, data, length);
}

void connect(){
  connectWifi();
  mqtt->mqttConnect();
}


WiFiClientSecure netClient;
void setupCloudIoT(){
  device = new CloudIoTCoreDevice(
      project_id, location, registry_id, device_id,
      private_key_str);

  setupWifi();
//  netClient = new WiFiClientSecure();
  mqttClient = new MQTTClient(512);
  mqttClient->setOptions(180, true, 1000); // keepAlive, cleanSession, timeout
  mqtt = new CloudIoTCoreMqtt(mqttClient, &netClient, device);
  mqtt->setUseLts(true);
  mqtt->startMQTT();
}
```

#### Adicionar Definição de Macro em Esp32-lwmqtt.ino

Adicione a placa Wio Terminal às definições de macro dentro de **Esp32-lwmqtt.ino**

```cpp
#if defined(ESP32) || defined(WIO_TERMINAL)
#define __ESP32_MQTT_H__
#endif
```

Agora terminamos a configuração da Arduino IDE. Por fim, você precisa fazer o upload deste código para o Wio Terminal. Abra o Serial Monitor e você verá o seguinte exibido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/4444444.png" alt="pir" width={700} height="auto" /></p>

### Exibir Dados de Telemetria

Agora precisamos exibir os dados de telemetria recebidos do Wio Terminal. Aqui neste código de exemplo, a intensidade do sinal Wi‑Fi será enviada como dados de telemetria.

- **PASSO 1:** Acesse **Pub/Sub** no Google Cloud Console

**Nota:** Você pode pesquisar **Pub** na barra de pesquisa dentro do Google Cloud Console

- **PASSO 2:** Navegue até **Subscriptions** dentro do Menu de Navegação

- **PASSO 3:** Selecione o ID de assinatura que criamos antes

- **PASSO 4:** Clique em **VIEW MESSAGES**

- **PASSO 5:** Clique em **PULL** e você verá os dados de telemetria recebidos como a seguir.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/6666666.png" alt="pir" width={950} height="auto" /></p>

### Como Adicionar Outros Sensores?

Você pode adicionar qualquer sensor ao Wio Terminal e enviar dados de telemetria para o Google Cloud IoT Core. Para simplificar, usaremos o sensor de luz integrado no Wio Terminal para enviar níveis de intensidade de luz para o Google Cloud IoT Core.

#### Configuração do Google Cloud IoT

- **PASSO 1:** Acesse **IoT Core** no Google Cloud Console

**Nota:** Você pode pesquisar **IoT Core** na barra de pesquisa dentro do Google Cloud Console

- **PASSO 2:** Selecione o registro que criamos antes

- **PASSO 3:** Em **Cloud Pub/Sub topics** selecione **Add or edit topics**

- **PASSO 4:** Clique em **ADD ADDITIONAL TOPIC**

- **PASSO 5:** Clique em **CREATE A TOPIC** no menu suspenso de **Select a Cloud Pub/Sub topic**

- **PASSO 6:** Insira um **Topic ID** e clique em **CREATE TOPIC**

- **PASSO 7:** Insira um **Subfolder name** dentro da coluna **Subfolder**

**Nota:** O nome da subpasta será usado para relacionar ao tópico no código Arduino

- **PASSO 8:** Clique em **UPDATE**

- **PASSO 9:** Crie uma **new subscription** conforme explicado antes

#### Configuração do Arduino

Navegue até **Esp32-lwmqtt.ino** e adicione o seguinte

- **PASSO 1:**  Após o loop, adicione o seguinte para o sensor de luz integrado

```cpp
void loop() {
  int light = analogRead(WIO_LIGHT); //assign variable to store light sensor values 
  light = map(light,0,1023,0,100); //Map sensor values  
```

- **PASSO 2:**  Adicione o tópico com o nome da Subfolder

```cpp
    publishTelemetry(getDefaultSensor());
    publishTelemetry("/light",String(light));
```

**Nota:** Se um nome de subpasta não for adicionado, os dados de telemetria serão enviados para o tópico padrão. Neste caso, os dados de telemetria para a intensidade do sinal Wi‑Fi, conforme explicado antes, serão enviados para o primeiro tópico que criamos, que é o tópico padrão.

Depois de fazer o upload do código para o Wio Terminal, faça o pull a partir do tópico recém-criado como assinante e você verá o seguinte resultado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/222222.png" alt="pir" width={950} height="auto" /></p>

### Como Adicionar Outros Sensores e Visualizar Dados em Dashboards?

Embora o Google Cloud IoT Core não ofereça um dashboard pronto para uso para visualizar os dados dos sensores, explicaremos como conseguir isso usando InfluxDB e Grafana.

[InfluxDB](https://www.influxdata.com/) é um banco de dados de séries temporais, ou seja, cada dado no InfluxDB está associado a um timestamp específico que mostra a data e a hora associadas a um determinado dado. Já o [Grafana](https://grafana.com/) é uma solução open source para realizar análise de dados, obter métricas que dão sentido à enorme quantidade de dados e monitorar aplicativos com a ajuda de dashboards personalizáveis.

Basicamente, conectaremos um sensor de temperatura/umidade ao Wio Terminal, usaremos uma Google Cloud Function para transmitir dados de um Pub/Sub para um InfluxDB localizado em um cluster GKE (Google Kubernetes Engine) e exibiremos os dados do InfluxDB no Grafana usando dashboards interativos.

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" alt="pir" width={600} height="auto" /></p>

#### Configuração de Hardware para Arduino

Conecte o Grove - Temperature and Humudity Sensor (DHT11) à porta Grove - Digital/Analog Port (D0) do Wio Terminal.

#### Configuração de Software para Arduino

- **PASSO 1:** Acesse o repositório [Grove - Temperature and Humidity Sensor](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) e faça o download como um arquivo zip

- **PASSO 2:** Abra o Arduino, navegue até `Sketch > Include Library > Add .ZIP Library` e selecione a biblioteca baixada para instalá-la

Navegue até o **Esp32-lwmqtt.ino** usado anteriormente e adicione o seguinte:

- **PASSO 1:** Adicione o seguinte depois de **#include "esp32-mqtt.h"**

```cpp
#include "DHT.h" //DHT library

#define DHTPIN 0 //Define Signal Pin of DHT
#define DHTTYPE DHT11 //Define DHT Sensor Type
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor  
```

- **PASSO 2:** Adicione o seguinte dentro do **setup** para iniciar o sensor DHT

```cpp
dht.begin(); 
```

- **PASSO 3:** Adicione o seguinte dentro do **if loop** em **void loop()**

```cpp
int temperature = dht.readTemperature(); //Assign variable to store temperature
int humidity = dht.readHumidity(); //Assign variable to store humidity

String payload = String("{\"timestamp\":") + getNTPtime() +
                  String(",\"temperature\":") temperature +
                  String(",\"humidity\":") + humidity +
                  String("}");
publishTelemetry(payload); 
```

**Nota:** Aqui analisamos todos os dados como uma string em influxDB. Fazer o parsing do **time** é importante porque influxDB é um banco de dados de séries temporais. Além disso, a função **pushTelemetry** enviará os dados para o tópico padrão que criamos no início deste tutorial.

- **PASSO 4:** Faça o upload do código para o Wio Terminal

#### Configuração do Google Cloud IoT

- **PASSO 1:** Acesse este repositório [this](https://github.com/lakshanthad/esp32-cloud-iot-core-k8s) e faça o download como um arquivo zip

- **PASSO 2:** Extraia o arquivo zip baixado

- **PASSO 3:** Abra o Google Cloud Console e navegue até o [Google Kubernetes Engine](https://console.cloud.google.com/kubernetes/list) e aguarde o sistema inicializar

- **PASSO 4:** Inicie o Cloud Shell pressionando o botão no canto superior direito

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/cloud_shell_1.png" alt="pir" width={700} height="auto" /></p>

- **PASSO 5:** Digite os seguintes comandos para definir os padrões para a ferramenta de linha de comando gcloud

```sh
export ZONE=<enter_zone> # e.g. us-central1-a, see https://cloud.google.com/compute/docs/regions-zones/#available
export PROJECT_ID=<enter_project-id> # project ID name 
gcloud config set project $PROJECT_ID
gcloud config set compute/zone $ZONE
```

- **PASSO 6:** Digite os seguintes comandos para criar um cluster GKE com um nó n1-standard-1

```sh
gcloud container clusters create influxdb-grafana \
                --num-nodes 1 \
                --machine-type n1-standard-1 \
                --zone $ZONE
```

- **PASSO 7:** Digite os seguintes comandos para criar um segredo para armazenar as informações de autenticação do InfluxDB e Grafana

```sh
kubectl create secret generic influxdb-grafana \
  --from-literal=influxdb-user=admin \
  --from-literal=influxdb-password=passw0rd \
  --from-literal=grafana-user=admin \
  --from-literal=grafana-password=passw0rd
```

**Nota:** Você pode alterar os nomes de usuário e senhas do influxdb/grafana de acordo com sua preferência

- **PASSO 8:** Clique em **Open Editor** dentro do Google Shell

- **PASSO 9:** Arraste e solte a pasta baixada e extraída anteriormente em **Cloud Shell Editor**

- **PASSO 10:** Clique em **Open Terminal** para voltar ao terminal. Navegue até o diretório **05-influxdb_grafana_k8s** digitando o seguinte

```sh
cd esp32-cloud-iot-core-k8s-master/05-influxdb_grafana_k8s
```

- **PASSO 11:** Digite os seguintes comandos para fazer o deploy do InfluxDB e do Grafana no Kubernetes

```sh
kubectl create -f k8s/
```

#### Configuração do Grafana

- **PASSO 1:** Digite o seguinte para verificar os IPs externos/ports dos serviços

```sh
kubectl get services
```

- **PASSO 2:** Copie o IP externo do Grafana

- **PASSO 3:** Acesse `http://<grafana service external ip>:3000`

**Nota:** Cole o IP externo do Grafana copiado anteriormente em `<grafana service external ip>`

- **PASSO 4:** Faça login no Grafana com as credenciais definidas anteriormente

- **PASSO 5:** Clique no ícone de engrenagem e navegue até `Configuration > Data Sources`

- **PASSO 6:** Clique em **Add data source** e selecione **influxDB**

- **PASSO 7:** Insira o seguinte no campo **URL**

```sh
http://influxdb:8086
```

- **PASSO 8:** Insira o seguinte no campo **Database** e clique em **Save & Test**

```sh
iot
```

**Nota:** Você deverá ver a mensagem **Data source is working**, se tiver configurado com sucesso a fonte de dados **InfluxDB** no Grafana

#### Criar uma Google Cloud Function

Agora precisamos criar uma Google Cloud Function para transmitir dados de um tópico no Pub/Sub para o InfluxDB e exibir os dados do InfluxDB no Grafana usando dashboards interativos.

- **PASSO 1:** Volte para o **Google Cloud Console** e abra o **Cloud Shell**

- **PASSO 2:** Digite o seguinte para ativar a **Cloud Functions API**

```sh
gcloud services enable cloudfunctions.googleapis.com
```

- **PASSO 3:** Navegue até o diretório **06-cloud_function** digitando o seguinte

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **PASSO 4:** Abra **main.py** em um **editor de texto vim**

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **PASSO 5:** Pressione **i** no teclado para entrar no **modo de edição**

- **PASSO 6:** modifique as **variáveis do InfluxDB** (host, port, username, password) na função **_get_influxdb_client**

**Nota:** Obtenha o host do InfluxDB digitando o seguinte no Cloud Shell e copiando o IP externo

```sh
kubectl get services
```

- **PASSO 7:** Salve o arquivo digitando **:wq**

- **PASSO 8:** Implemente a **Cloud Function** digitando o seguinte

```sh
export PUBSUB_TOPIC="enter_topic-name>"
export REGION="enter_region" # https://cloud.google.com/functions/docs/locations
gcloud functions deploy iotcore_pubsub_to_influxdb --runtime python37 --trigger-topic $PUBSUB_TOPIC --region $REGION
```

#### De volta à configuração do Grafana

- **PASSO 1:** Abra o Grafana e navegue até `Dashboards > Manage`

- **PASSO 2:** Clique em **New Dashboard** e clique em **Add new panel**

- **PASSO 3:** Navegue até **Visualization** e clique em **Graph**

- **PASSO 4:** Em **Query**, na aba **FROM**, clique em **select measurement** e selecione **temperature** no menu suspenso

- **PASSO 5:** Clique em **+ Query** e repita o mesmo passo que o **passo 12** para **humidity**

- **PASSO 6:** Altere as outras configurações de acordo com a sua preferência

- **PASSO 7:** Clique em **Apply**

- **PASSO 8:** Clique em **Add panel** e **Add new panel**

- **PASSO 9:** Navegue até **Visualization** e clique em **Gauge**

- **PASSO 10:** Em **Query**, na aba **FROM**, clique em **select measurement** e selecione **temperature** no menu suspenso

- **PASSO 11:** Na aba **Field**, em **Unit**, selecione `Temperature > Celcius` no menu suspenso

- **PASSO 12:** Defina um valor mínimo e máximo para o medidor digitando em **Min** e **Max**

- **PASSO 13:** Em **Display name**, digite `Temperature`

- **PASSO 14:** Repita o mesmo para **humidity** seguindo a partir do **passo 15**.

- **PASSO 15:** Clique em **Apply**

Agora você verá o dashboard criado no Grafana

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/grafana_dash_1.png" alt="pir" width={900} height="auto" /></p>

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
