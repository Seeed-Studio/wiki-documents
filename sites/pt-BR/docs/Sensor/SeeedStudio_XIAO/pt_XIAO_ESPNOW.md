---
description: Usando XIAO ESP32S3/XIAO ESP32C3/XIAO ESP32C6 para realizar comunicação com o protocolo ESP-NOW
title: ESP-NOW na Série XIAO ESP32
keywords:
  - ESPNOW
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png
slug: /xiao_espnow
last_update:
  date: 07/24/2024
  author: Jason
createdAt: '2024-08-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_espnow/
---

# Comece a usar o protocolo ESP-NOW na Série XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png" style={{width:1100, height:'auto'}}/></div>
<br />

Este Wiki vai explicar o que é o protocolo ESP-NOW e ensinar você a usar a Série XIAO ESP32 para se comunicar usando esse protocolo. O processo será muito simples. Para que todos possam utilizar o protocolo ESP-NOW na série XIAO ESP32, preparamos três tipos de XIAO ESP32, C6/C3/S3, para se comunicarem, então vamos começar esta jornada!

Aliás, se você acabou de adquirir esta placa, clique neste link; ele mostrará como começar.

- [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/)
- [Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/pt-br/xiao_esp32c3_getting_started/)
- [Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/)

## O que é o protocolo ESP-NOW?

A definição oficial fornecida: ESP-NOW é um protocolo de comunicação sem fio definido pela Espressif que permite o controle direto, rápido e de baixo consumo de energia de dispositivos inteligentes sem a necessidade de um roteador. Ele pode coexistir com Wi‑Fi e Bluetooth LE, suportando várias séries de SoCs como Lexin ESP8266, ESP32, ESP32-S e ESP32-C. ESP-NOW é amplamente utilizado em áreas como eletrodomésticos inteligentes, controle remoto e sensores.

Possui as seguintes características

- De acordo com o método de conexão pelo endereço MAC, o pareamento pode ser feito rapidamente sem condições de rede, e os dispositivos podem ser conectados em modos um‑para‑muitos, um‑para‑um, muitos‑para‑um e muitos‑para‑muitos
- ESP-NOW é um protocolo de comunicação sem fio baseado na camada de enlace de dados, que simplifica o protocolo das cinco camadas OSI superiores em uma única camada, sem necessidade de adicionar cabeçalhos de pacotes nem desempacotar camada por camada. Isso alivia bastante a lentidão e o atraso causados por perda de pacotes durante a congestão da rede e possui uma velocidade de resposta mais alta

Comparado com Wi‑Fi e Bluetooth

- Wi‑Fi: o ESP-NOW suporta comunicação ponto a ponto entre dispositivos, portanto tem menor consumo de energia e maior velocidade de transmissão, além de um alcance de comunicação maior.
- Bluetooth: o ESP-NOW não requer um processo de pareamento, tornando o uso do ESP-NOW mais simples e fácil; assim, ele tem menor consumo de energia e maior velocidade de transmissão.

Mas o ESP-NOW é adequado para cenários de aplicação que exigem comunicação rápida, confiável, de baixo consumo de energia e ponto a ponto, enquanto Bluetooth e Wi‑Fi são mais adequados para ambientes de rede complexos e cenários com um grande número de dispositivos.

## Preparação de hardware

Neste projeto, para considerar que algumas pessoas podem ter apenas XIAO ESP32S3, XIAO ESP32C3 ou XIAO ESP32C6, e para que você possa aprender melhor a comunicação com ESP-NOW, este exemplo usa três modelos XIAO ESP32, XIAO ESP32S3, XIAO ESP32C3 e XIAO ESP32C6, para se comunicarem entre si. Você só precisa mover o código ligeiramente para usar quaisquer dois ou três dos três modelos acima na prática. Sem mais explicações, vamos dar uma olhada em como o código a seguir é implementado. Vamos fazer isso!

Se você ainda não tem nenhuma das duas peças da série XIAO ESP32, aqui estão os links de compra.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C3</th>
   <th>XIAO ESP32S3</th>
            <th>XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Implementação da função

Vamos primeiro entender a estrutura geral do código. Este exemplo usa XIAO ESP32S3, XIAO ESP32C3 e XIAO ESP32C6. Existem três placas ESP32, XIAO ESP32S3 como transmissor e XIAO ESP32C6 e XIAO ESP32C3 como receptores. Claro, isso é apenas a atribuição de função neste código. Depois da explicação abaixo, se você quiser alterar, adicionar ou remover o papel do receptor e do transmissor, será muito simples. Vamos nos envolver!

### Parte 1. Código do transmissor XIAO ESP32S3

```c
#include <Arduino.h>
#include "WiFi.h"
#include "esp_now.h" 

#define ESPNOW_WIFI_CHANNEL 0
#define MAX_ESP_NOW_MAC_LEN 6
#define BAUD 115200
#define MAX_CHARACTERS_NUMBER 20
#define NO_PMK_KEY false

typedef uint8_t XIAO;
typedef int XIAO_status;

//You need input your XIAO ESP32 Series MAC,Cannot copy directly!!!!
static uint8_t Receiver_XIAOC3_MAC_Address[MAX_ESP_NOW_MAC_LEN] = {0x64, 0xe8, 0x33, 0x89, 0x80, 0xb8};
static uint8_t Receiver_XIAOC6_MAC_Address[MAX_ESP_NOW_MAC_LEN] = {0xf0, 0xf5, 0xbd, 0x1a, 0x97, 0x20};

esp_now_peer_info_t peerInfo;
esp_now_peer_info_t peerInfo1;

typedef struct receiver_meesage_types{
  char Reveiver_device[MAX_CHARACTERS_NUMBER];
  char Reveiver_Trag[MAX_CHARACTERS_NUMBER];
}receiver_meesage_types;

receiver_meesage_types XIAOC3_RECEIVER_INFORATION;
receiver_meesage_types XIAOC6_RECEIVER_INFORATION;

typedef struct message_types{
  char device[MAX_CHARACTERS_NUMBER];
  char Trag[MAX_CHARACTERS_NUMBER];
}message_types;

message_types Personal_XIAOC3_Information;
message_types Personal_XIAOC6_Information;

void espnow_init();
void espnow_deinit();
void SenderXIAOS3_MACAddress_Requir();
void SenderXIAOS3_Send_Data();
void SenderXIAOS3_Send_Data_cb(const XIAO *mac_addr,esp_now_send_status_t status);
void Association_ReceiverXIAOC3_peer();
void Association_ReceiverXIAOC6_peer();
void ReceiverXIAOC3_Recive_Data_cb(const esp_now_recv_info *info, const uint8_t *incomingData, int len);
void ReceiverXIAOC6_Recive_Data_cb(const esp_now_recv_info *info, const uint8_t *incomingData, int len);

void setup(){
    Serial.begin(BAUD);
    while(!Serial);
    SenderXIAOS3_MACAddress_Requir();
    SenderXIAOS3_MACAddress_Requir();
    espnow_init();

    esp_now_register_send_cb(SenderXIAOS3_Send_Data_cb);

    Association_ReceiverXIAOC6_peer();
    Association_ReceiverXIAOC3_peer();

    esp_now_register_recv_cb(ReceiverXIAOC3_Recive_Data_cb);
    esp_now_register_recv_cb(ReceiverXIAOC6_Recive_Data_cb);
}

void loop(){
  SenderXIAOS3_Send_Data();
  delay(100);
}

void SenderXIAOS3_Send_Data_cb(const XIAO *mac_addr,esp_now_send_status_t status){
  char macStr[18];
  Serial.print("Packet to: ");
  snprintf(macStr, sizeof(macStr), "%02x:%02x:%02x:%02x:%02x:%02x",
           mac_addr[0], mac_addr[1], mac_addr[2], mac_addr[3], mac_addr[4], mac_addr[5]);
  Serial.println(macStr);
  delay(500);
  Serial.print(" send status:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Delivery Success" : "Delivery Fail");
  Serial.println("");
}

void Association_ReceiverXIAOC3_peer(){
  Serial.println("Attempting to associate peer for XIAOC3...");
  peerInfo.channel = ESPNOW_WIFI_CHANNEL;
  peerInfo.encrypt = NO_PMK_KEY;

  memcpy(peerInfo.peer_addr, Receiver_XIAOC3_MAC_Address, 6);
  esp_err_t addPressStatus = esp_now_add_peer(&peerInfo);
  if (addPressStatus != ESP_OK)
  {
    Serial.print("Failed to add peer");
    Serial.println(addPressStatus);
  }else
  {
    Serial.println("Successful to add peer");
  }
}

void Association_ReceiverXIAOC6_peer(){
  Serial.println("Attempting to associate peer for XIAOC6...");
  peerInfo1.channel = ESPNOW_WIFI_CHANNEL;
  peerInfo1.encrypt = NO_PMK_KEY;

  memcpy(peerInfo1.peer_addr, Receiver_XIAOC6_MAC_Address, 6);
  esp_err_t addPressStatus = esp_now_add_peer(&peerInfo1);
  if (addPressStatus != ESP_OK)
  {
    Serial.print("Failed to add peer");
    Serial.println(addPressStatus);
  }else
  {
    Serial.println("Successful to add peer");
  }
}

void SenderXIAOS3_Send_Data(){

  strcpy(Personal_XIAOC3_Information.device, "XIAOS3"); 
  strcpy(Personal_XIAOC3_Information.Trag, "Hello,i'm sender"); 

  strcpy(Personal_XIAOC6_Information.device, "XIAOS3"); 
  strcpy(Personal_XIAOC6_Information.Trag, "Hello,i'm sender"); 

  esp_err_t XIAOS3_RECEIVER_INFORATION_data1 = esp_now_send(Receiver_XIAOC3_MAC_Address, (uint8_t *)&Personal_XIAOC3_Information, sizeof(message_types));
  esp_err_t XIAOS3_RECEIVER_INFORATION_data2 = esp_now_send(Receiver_XIAOC6_MAC_Address, (uint8_t *)&Personal_XIAOC6_Information, sizeof(message_types));

  if (XIAOS3_RECEIVER_INFORATION_data1 == ESP_OK || XIAOS3_RECEIVER_INFORATION_data2 == ESP_OK)
  {
    Serial.println("Sent with success: XIAOS3_RECEIVER_INFORATION_data1 and XIAOS3_RECEIVER_INFORATION_data2");
  }
  delay(4000);
}

void ReceiverXIAOC3_Recive_Data_cb(const esp_now_recv_info *info, const uint8_t *incomingData, int len) {
  memcpy(&XIAOC3_RECEIVER_INFORATION, incomingData, sizeof(XIAOC3_RECEIVER_INFORATION));
  Serial.print("Bytes received: ");
  Serial.println(len);
  Serial.print("Reveiver_device: ");
  Serial.println(XIAOC3_RECEIVER_INFORATION.Reveiver_device);
  Serial.print("Reveiver_Trag: ");
  Serial.println(XIAOC3_RECEIVER_INFORATION.Reveiver_Trag);
  Serial.println();
}

void ReceiverXIAOC6_Recive_Data_cb(const esp_now_recv_info *info, const uint8_t *incomingData, int len) {
  memcpy(&XIAOC6_RECEIVER_INFORATION, incomingData, sizeof(XIAOC6_RECEIVER_INFORATION));
  Serial.print("Bytes received: ");
  Serial.println(len);
  Serial.print("Reveiver_device: ");
  Serial.println(XIAOC6_RECEIVER_INFORATION.Reveiver_device);
  Serial.print("Reveiver_Trag: ");
  Serial.println(XIAOC6_RECEIVER_INFORATION.Reveiver_Trag);
  Serial.println();
}

void SenderXIAOS3_MACAddress_Requir(){
    WiFi.mode(WIFI_STA);
    WiFi.setChannel(ESPNOW_WIFI_CHANNEL);
    XIAO mac[MAX_ESP_NOW_MAC_LEN];
    while(!WiFi.STA.started()){
      Serial.print(".");
      delay(100);
    }
      WiFi.macAddress(mac);
      Serial.println();
      Serial.printf("const uint8_t mac_self[6] = {0x%02x, 0x%02x, 0x%02x, 0x%02x, 0x%02x, 0x%02x};", mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);
      Serial.println();
}

void espnow_init(){
  XIAO_status espnow_sign = esp_now_init();
  if(espnow_sign == ESP_OK)
  {
    Serial.println("the esp now is successful init!");
  }else
  {
    Serial.println("the esp now is failed init");
  }
}

void espnow_deinit(){
  XIAO_status espnow_sign = esp_now_deinit();
  if(espnow_sign == ESP_OK){
    Serial.println("the esp now is successful deinit!");
  }else
  {
    Serial.println("the esp now is failed deinit!");
  }
}
```

#### Código da Resolução Parte 1

As bibliotecas incluídas

- `#include "WiFi.h"`
- `#include "esp_now.h"`

As Funções Principais

- `espnow_init()`  
  - Função : Inicializar a função ESPNOW
  - Valor de retorno : inicialização bem-sucedida : [ESP_OK] Falha : [ESP_FAIL]
- `espnow_deinit()`
  - Função : Desinicializar a função ESPNOW, todas as informações relacionadas a dispositivos pareados serão excluídas
  - Valor de retorno : inicialização bem-sucedida : [ESP_OK]
- `SenderXIAOS3_MACAddress_Requir()`  
  - Função : Definir o modo WiFi para STA e obter o endereço MAC para imprimir na porta serial
- `SenderXIAOS3_Send_Data()`
  - Função : Enviar mensagem específica
- `SenderXIAOS3_Send_Data_cb()`
  - Função : Esta é uma função de callback; quando for executada, imprimirá se a mensagem foi entregue com sucesso e para qual endereço MAC
- `Association_ReceiverXIAOC3_peer() and Association_ReceiverXIAOC6_peer`
  - Função : Adicionar nós pares; se precisar de mais receptores, você pode criar nós e escrever uma mensagem que corresponda para o emissor e o receptor
- `esp_now_register_send_cb()`
  - Função : Registrar uma função de callback para verificar se foi enviada para a camada MAC
  - Valor de retorno : a camada MAC recebeu os dados com sucesso:[ESP_NOW_SEND_SUCCESS] caso contrário [ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Recive_Data_cb()`
- Função : Aceitar funções de callback de envio e dados enviados
- `ReceiverXIAOC6_Recive_Data_cb()`
- Função : Aceitar funções de callback de envio e dados enviados
- `esp_now_register_recv_cb()`
  - Função : Registrar uma função de callback para verificar se foi enviada para a camada MAC
  - Valor de retorno : a camada MAC recebeu os dados com sucesso:[ESP_NOW_SEND_SUCCESS] caso contrário [ESP_NOW_SEND_FAIL]

Variáveis Padrão

- `#define ESPNOW_WIFI_CHANNE`
  - Função : canal em que o emissor e o receptor estão localizados
- `#define MAX_ESP_NOW_MAC_LEN`
  - Função : tamanho do endereço MAC
- `#define MAX_CHARACTERS_NUMBER`
  - Função : número máximo de caracteres aceitos ou enviados
- `#define BAUD 115200`
  - Função : Configurar a taxa de baud da porta serial
- `static uint8_t Receiver_XIAOC3_MAC_Address[MAX_ESP_NOW_MAC_LEN] and static uint8_t Receiver_XIAOC6_MAC_Address`
  - Função : Armazenei os endereços MAC do meu XIAO ESP32C3 e XIAO ESP32C6. Eles atuam como receptores.
  - Complemento : Observe que estes são meus endereços MAC e não podem ser escritos aí.
- `NO_PMK_KEY`
  - Função : Escolher parear dispositivos sem criptografia

### Parte 2. Código do Receptor XIAO ESP32C3

```c
#include<Arduino.h>
#include "WiFi.h"
#include "esp_now.h"

#define ESPNOW_WIFI_CHANNEL 0
#define MAX_ESP_NOW_MAC_LEN 6
#define BAUD 115200
#define MAX_CHARACTERS_NUMBER 20
#define NO_PMK_KEY false

typedef uint8_t XIAO;
typedef int status;

//You need input your XIAO ESP32 Series MAC,Cannot copy directly!!!!
static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN] = {0xcc, 0x8d, 0xa2, 0x0c, 0x57, 0x5c};

esp_now_peer_info_t peerInfo_sender;

typedef struct receiver_meesage_types{
  char Reveiver_device[MAX_CHARACTERS_NUMBER];
  char Reveiver_Trag[MAX_CHARACTERS_NUMBER];
}receiver_meesage_types;

receiver_meesage_types XIAOC3_RECEIVER_INFORATION;

typedef struct message_types{
  char Sender_device[MAX_CHARACTERS_NUMBER];
  char Sender_Trag[MAX_CHARACTERS_NUMBER];
}message_types;

message_types XIAOS3_SENDER_INFORATION;

void Receiver_MACAddress_requir();
void espnow_init();
void espnow_deinit();
void ReceiverXIAOC3_Recive_Data_cb(const uint8_t * mac, const uint8_t *incomingData, int len);
void ReceiverXIAOC3_Send_Data();
void ReceiverXIAOC3_Send_Data_cb(const XIAO *mac_addr,esp_now_send_status_t status);
void Association_SenderXIAOS3_peer();

void setup() {
  Serial.begin(BAUD);
  while(!Serial);
  Receiver_MACAddress_requir();
  espnow_init();

  esp_now_register_recv_cb(ReceiverXIAOC3_Recive_Data_cb);

  esp_now_register_send_cb(ReceiverXIAOC3_Send_Data_cb);
  Association_SenderXIAOS3_peer();  
}

void loop() {
  ReceiverXIAOC3_Send_Data();
  delay(1000);
}

void espnow_init(){
  status espnow_sign = esp_now_init();
  if(espnow_sign == ESP_OK)
  {
    Serial.println("the esp now is successful init!");
  }else
  {
    Serial.println("the esp now is failed init");
  }
}

void espnow_deinit(){
  status espnow_sign = esp_now_deinit();
  if(espnow_sign == ESP_OK){
    Serial.println("the esp now is successful deinit!");
  }else
  {
    Serial.println("the esp now is failed deinit!");
  }
}

void Receiver_MACAddress_requir(){
    WiFi.mode(WIFI_STA);
    WiFi.setChannel(ESPNOW_WIFI_CHANNEL);
    XIAO mac[MAX_ESP_NOW_MAC_LEN];
    while(!WiFi.STA.started()){
      Serial.print(".");
      delay(100);
    }
      WiFi.macAddress(mac);
      Serial.println();
      Serial.printf("const uint8_t mac_self[6] = {0x%02x, 0x%02x, 0x%02x, 0x%02x, 0x%02x, 0x%02x};", mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);
      Serial.println();
}

void ReceiverXIAOC3_Recive_Data_cb(const esp_now_recv_info *info, const uint8_t *incomingData, int len) {
  memcpy(&XIAOS3_SENDER_INFORATION, incomingData, sizeof(XIAOS3_SENDER_INFORATION));
  Serial.print("Bytes received: ");
  Serial.println(len);
  Serial.print("Sender_device: ");
  Serial.println(XIAOS3_SENDER_INFORATION.Sender_device);
  Serial.print("Sender_Trag: ");
  Serial.println(XIAOS3_SENDER_INFORATION.Sender_Trag);
  Serial.println();
}

void ReceiverXIAOC3_Send_Data_cb(const XIAO *mac_addr,esp_now_send_status_t status){
  char macStr[18];
  Serial.print("Packet to: ");
  snprintf(macStr, sizeof(macStr), "%02x:%02x:%02x:%02x:%02x:%02x",
           mac_addr[0], mac_addr[1], mac_addr[2], mac_addr[3], mac_addr[4], mac_addr[5]);
  Serial.println(macStr);
  delay(500);
  Serial.print(" send status:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Delivery Success" : "Delivery Fail");
    Serial.println("");
}

void ReceiverXIAOC3_Send_Data(){

  strcpy(XIAOC3_RECEIVER_INFORATION.Reveiver_device, "XIAOC3"); 
  strcpy(XIAOC3_RECEIVER_INFORATION.Reveiver_Trag, "I'm get it"); 

  esp_err_t XIAOC3_RECEIVER_INFORATION_data1 = esp_now_send(XIAOS3_Sender_MAC_Address, (uint8_t *)&XIAOC3_RECEIVER_INFORATION, sizeof(receiver_meesage_types));

  if (XIAOC3_RECEIVER_INFORATION_data1 == ESP_OK)
  {
    Serial.println("Sent with success: XIAOC3_RECEIVER_INFORATION_data1");
  }
  delay(4000);
}

void Association_SenderXIAOS3_peer(){
  Serial.println("Attempting to associate peer for XIAOC6...");
  peerInfo_sender.channel = ESPNOW_WIFI_CHANNEL;
  peerInfo_sender.encrypt = NO_PMK_KEY;

  memcpy(peerInfo_sender.peer_addr, XIAOS3_Sender_MAC_Address, 6);
  esp_err_t addPressStatus = esp_now_add_peer(&peerInfo_sender);
  if (addPressStatus != ESP_OK)
  {
    Serial.print("Failed to add peer");
    Serial.println(addPressStatus);
  }else
  {
    Serial.println("Successful to add peer");
  }
}
```

#### Código da Resolução Parte 2

As bibliotecas incluídas

- `#include "WiFi.h"`
- `#include "esp_now.h"`

As Funções Principais

- `espnow_init()`  
  - Função : Inicializar a função ESPNOW
  - Valor de retorno : inicialização bem-sucedida : [ESP_OK] Falha : [ESP_FAIL]
- `espnow_deinit()`
  - Função : Desinicializar a função ESPNOW, todas as informações relacionadas a dispositivos pareados serão excluídas
  - Valor de retorno : inicialização bem-sucedida : [ESP_OK]
- `Receiver_MACAddress_requir()`  
  - Função : Definir o modo WiFi para STA e obter o endereço MAC para imprimir na porta serial
- `ReceiverXIAOC3_Send_Data()`
  - Função : Enviar mensagem específica
- `ReceiverXIAOC3_Recive_Data_cb()`
  - Função : Esta é uma função de callback; quando for executada, imprimirá se a mensagem foi entregue com sucesso e para qual endereço MAC
- `Association_SenderXIAOS3_peer()`
  - Função : Adicionar um nó de canal para que o XIAO ESP32S3 envie mensagens para ele
- `esp_now_register_send_cb()`
  - Função : Registrar uma função de callback para verificar se foi enviada para a camada MAC
  - Valor de retorno : a camada MAC recebeu os dados com sucesso:[ESP_NOW_SEND_SUCCESS] caso contrário [ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Send_Data_cb`
  - Função : Esta é uma função de callback; quando for executada, imprimirá se a mensagem foi entregue com sucesso e para qual endereço MAC
- `esp_now_register_recv_cb()`
  - Função : Registrar uma função de callback para verificar se foi enviada para a camada MAC
  - Valor de retorno : a camada MAC recebeu os dados com sucesso:[ESP_NOW_SEND_SUCCESS] caso contrário [ESP_NOW_SEND_FAIL]

Variáveis Padrão

- `#define ESPNOW_WIFI_CHANNE`
  - Função : canal em que o emissor e o receptor estão localizados
- `#define MAX_ESP_NOW_MAC_LEN`
  - Função : tamanho do endereço MAC
- `#define MAX_CHARACTERS_NUMBER`
  - Função : número máximo de caracteres aceitos ou enviados
- `#define BAUD 115200`
  - Função : Configurar a taxa de baud da porta serial
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - Função : Armazenei o endereço MAC do meu XIAO ESP32S3
  - Complemento : Observe que este é o meu endereço MAC e não pode ser escrito aí！
- `NO_PMK_KEY`
  - Função : Escolher parear dispositivos sem criptografia

### Parte 3. Código do Receptor XIAO ESP32C6

```c
#include<Arduino.h>
#include "WiFi.h"
#include "esp_now.h"

#define ESPNOW_WIFI_CHANNEL 0
#define MAX_ESP_NOW_MAC_LEN 6
#define BAUD 115200
#define MAX_CHARACTERS_NUMBER 20
#define NO_PMK_KEY false

typedef uint8_t XIAO;
typedef int status;

//You need input your XIAO ESP32 Series MAC,Cannot copy directly!!!!
static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN] = {0xcc, 0x8d, 0xa2, 0x0c, 0x57, 0x5c};

esp_now_peer_info_t peerInfo_sender;

typedef struct receiver_meesage_types{
  char Reveiver_device[MAX_CHARACTERS_NUMBER];
  char Reveiver_Trag[MAX_CHARACTERS_NUMBER];
}receiver_meesage_types;

receiver_meesage_types XIAOC6_RECEIVER_INFORATION;

typedef struct message_types{
  char Sender_device[MAX_CHARACTERS_NUMBER];
  char Sender_Trag[MAX_CHARACTERS_NUMBER];
}message_types;

message_types XIAOS3_SENDER_INFORATION;

void Receiver_MACAddress_requir();
void espnow_init();
void espnow_deinit();
void ReceiverXIAOC6_Recive_Data_cb(const uint8_t * mac, const uint8_t *incomingData, int len);
void ReceiverXIAOC6_Send_Data();
void ReceiverXIAOC6_Send_Data_cb(const XIAO *mac_addr,esp_now_send_status_t status);
void Association_SenderXIAOS3_peer();

void setup() {
  Serial.begin(BAUD);
  while(!Serial);
  Receiver_MACAddress_requir();
  espnow_init();

  esp_now_register_recv_cb(ReceiverXIAOC6_Recive_Data_cb);

  esp_now_register_send_cb(ReceiverXIAOC6_Send_Data_cb);
  Association_SenderXIAOS3_peer();  
}

void loop() {
  ReceiverXIAOC6_Send_Data();
  delay(1000);
}

void espnow_init(){
  status espnow_sign = esp_now_init();
  if(espnow_sign == ESP_OK)
  {
    Serial.println("the esp now is successful init!");
  }else
  {
    Serial.println("the esp now is failed init");
  }
}

void espnow_deinit(){
  status espnow_sign = esp_now_deinit();
  if(espnow_sign == ESP_OK){
    Serial.println("the esp now is successful deinit!");
  }else
  {
    Serial.println("the esp now is failed deinit!");
  }
}

void Receiver_MACAddress_requir(){
    WiFi.mode(WIFI_STA);
    WiFi.setChannel(ESPNOW_WIFI_CHANNEL);
    XIAO mac[MAX_ESP_NOW_MAC_LEN];
    while(!WiFi.STA.started()){
      Serial.print(".");
      delay(100);
    }
      WiFi.macAddress(mac);
      Serial.println();
      Serial.printf("const uint8_t mac_self[6] = {0x%02x, 0x%02x, 0x%02x, 0x%02x, 0x%02x, 0x%02x};", mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);
      Serial.println();
}

void ReceiverXIAOC6_Recive_Data_cb(const esp_now_recv_info *info, const uint8_t *incomingData, int len) {
  memcpy(&XIAOS3_SENDER_INFORATION, incomingData, sizeof(XIAOS3_SENDER_INFORATION));
  Serial.print("Bytes received: ");
  Serial.println(len);
  Serial.print("Sender_device: ");
  Serial.println(XIAOS3_SENDER_INFORATION.Sender_device);
  Serial.print("Sender_Trag: ");
  Serial.println(XIAOS3_SENDER_INFORATION.Sender_Trag);
  Serial.println();
}
void ReceiverXIAOC6_Send_Data_cb(const XIAO *mac_addr,esp_now_send_status_t status){
  char macStr[18];
  Serial.print("Packet to: ");
  snprintf(macStr, sizeof(macStr), "%02x:%02x:%02x:%02x:%02x:%02x",
           mac_addr[0], mac_addr[1], mac_addr[2], mac_addr[3], mac_addr[4], mac_addr[5]);
  Serial.println(macStr);
  delay(500);
  Serial.print(" send status:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Delivery Success" : "Delivery Fail");
  Serial.println("");
}

void ReceiverXIAOC6_Send_Data(){

  strcpy(XIAOC6_RECEIVER_INFORATION.Reveiver_device, "XIAOC6"); 
  strcpy(XIAOC6_RECEIVER_INFORATION.Reveiver_Trag, "I'm get it"); 

  esp_err_t XIAOC6_RECEIVER_INFORATION_data1 = esp_now_send(XIAOS3_Sender_MAC_Address, (uint8_t *)&XIAOC6_RECEIVER_INFORATION, sizeof(receiver_meesage_types));

  if (XIAOC6_RECEIVER_INFORATION_data1 == ESP_OK)
  {
    Serial.println("Sent with success: XIAOC6_RECEIVER_INFORATION_data1");
  }
  delay(4000);
}

void Association_SenderXIAOS3_peer(){
  Serial.println("Attempting to associate peer for XIAOC6...");
  peerInfo_sender.channel = ESPNOW_WIFI_CHANNEL;
  peerInfo_sender.encrypt = NO_PMK_KEY;

  memcpy(peerInfo_sender.peer_addr, XIAOS3_Sender_MAC_Address, 6);
  esp_err_t addPressStatus = esp_now_add_peer(&peerInfo_sender);
  if (addPressStatus != ESP_OK)
  {
    Serial.print("Failed to add peer");
    Serial.println(addPressStatus);
  }else
  {
    Serial.println("Successful to add peer");
  }
}
```

#### Código da Parte 3 da Resolução

As bibliotecas incluídas

- `#include "WiFi.h"`
- `#include "esp_now.h"`

As Funções Principais

- `espnow_init()`  
  - Função: Inicializar a função ESPNOW
  - Valor de retorno: inicialização bem-sucedida: [ESP_OK] falha: [ESP_FAIL]
- `espnow_deinit()`
  - Função: Desinicializar a função ESPNOW, todas as informações relacionadas aos dispositivos pareados serão excluídas
  - Valor de retorno: inicialização bem-sucedida: [ESP_OK]
- `Receiver_MACAddress_requir()`  
  - Função: Definir o modo WiFi para STA e obter o endereço MAC para imprimir na porta serial
- `ReceiverXIAOC6_Send_Data()`
  - Função: Enviar mensagem específica
- `ReceiverXIAOC6_Recive_Data_cb()`
  - Função: Esta é uma função de callback; quando executada, imprime se a mensagem foi enviada com sucesso e para qual endereço MAC
- `Association_SenderXIAOS3_peer()`
  - Função: Adicionar um nó de canal para que o XIAO ESP32S3 envie mensagens para ele
- `ReceiverXIAOC6_Send_Data_cb()`
  - Função: Esta é uma função de callback; quando executada, imprime se a mensagem foi enviada com sucesso e para qual endereço MAC
- `esp_now_register_send_cb()`
  - Função: Registrar uma função de callback para verificar se foi enviado para a camada MAC
  - Valor de retorno: a camada MAC recebeu os dados com sucesso: [ESP_NOW_SEND_SUCCESS], caso contrário [ESP_NOW_SEND_FAIL]
- `esp_now_register_recv_cb()`
  - Função: Registrar uma função de callback para verificar se foi enviado para a camada MAC
  - Valor de retorno: a camada MAC recebeu os dados com sucesso: [ESP_NOW_SEND_SUCCESS], caso contrário [ESP_NOW_SEND_FAIL]
- `NO_PMK_KEY`
  - Função: Escolher parear dispositivos sem criptografia

Variáveis Padrão

- `#define ESPNOW_WIFI_CHANNE`
  - Função: canal em que o emissor e o receptor estão localizados
- `#define MAX_ESP_NOW_MAC_LEN`
  - Função: comprimento do endereço MAC do destinatário
- `#define MAX_CHARACTERS_NUMBER`
  - Função: número máximo de caracteres aceitos ou enviados
- `#define BAUD 115200`
  - Função: Configuração da taxa de baud da porta serial
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - Função: Armazenei os endereços MAC do meu XIAO ESP32S3
  - Complemento: Observe que estes são os meus endereços MAC e não podem ser escritos aí!
- `NO_PMK_KEY`
  - Função: Escolher parear dispositivos sem criptografia

## Renderização da Demo

A seguir estão os resultados das comunicações IXAO ESP32 usando ESPNOW

#### Resultado do XIAO ESP32S3 Emissor

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/121.png" style={{width:600, height:'auto'}}/></div>

#### Resultado do XIAO ESP32C3 Receptor

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/122.png" style={{width:600, height:'auto'}}/></div>

#### Resultado do XIAO ESP32C6 Receptor

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/123.png" style={{width:600, height:'auto'}}/></div>

## Resumo do ESPNOW

Baixo consumo de energia:

- Adequado para dispositivos alimentados por bateria que podem se comunicar sem se conectar ao Wi‑Fi.

Conexão rápida:

- Os dispositivos podem estabelecer conexões rapidamente sem a necessidade de processos complexos de pareamento.

Comunicação muitos‑para‑muitos:

- Suporta comunicação entre vários dispositivos, permitindo que um dispositivo envie dados para vários dispositivos.

Segurança:

- Suporta função de criptografia para garantir a segurança da transmissão de dados.

Comunicação de curta distância:

- Geralmente usada para comunicação sem fio de curto alcance (dezenas de metros).

## Solução de Problemas

### Pergunta 1: Não foi possível conectar, o programa não relatou nenhum erro

- Verifique se o endereço MAC do seu XIAO ESP32 está correto ou não
- Verifique se o canal Wi‑Fi do XIAO ESP32 conectado está ou não no mesmo
- Redefina o seu XIAO ESP32, reabra o monitor serial

### Pergunta 2: Mensagem recebida, mas incompleta

- Ao detectar tanto o emissor quanto o receptor, existe uma similaridade nos membros da estrutura

## Recursos

- **[Espressif Official Documents]** [ESPRESSIF ESP-IDF ESP-NOW](https://docs.espressif.com/projects/esp-idf/zh_CN/stable/esp32/api-reference/network/esp_now.html?highlight=espnow#esp-now)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
