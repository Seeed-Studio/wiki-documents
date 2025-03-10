---
description: Using XIAO ESP32S3/XIAO ESP32C3/XIAO ESP32C6 conduct communcation on ESP-NOW protocol
title: Protocolo ESP-NOW en la Serie XIAO ESP32
keywords:
- ESPNOW
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png
slug: /es/xiao_esp32s3_espnow
last_update:
  date: 02/10/2025
  author: Guillermo
---

# Guía para comenzar con el protocolo ESP-NOW en la serie XIAO ESP32

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png" style={{width:1100, height:'auto'}}/></div>
<br />

Esta wiki te explicará qué es el protocolo ESP-NOW y te enseñará cómo utilizar la serie XIAO ESP32 para comunicar dispositivos mediante este protocolo. El proceso será muy sencillo. Para que todos puedan aprovechar el protocolo ESP-NOW en la serie XIAO ESP32, hemos preparado tres versiones del XIAO ESP32: C6, C3 y S3, que utilizaremos para la comunicación. ¡Así que comencemos este viaje!

Por cierto, si acabas de adquirir esta placa, haz click en estos enlaces. Te mostrarán cómo empezar.
- [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)
- [Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/xiao_esp32c3_getting_started/)
- [Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/)

## Qué es el protocolo ESPNOW?

La definición oficial proporcionada: ESP-NOW es un protocolo de comunicación inalámbrica definido por Espressif que permite el control directo, rápido y de bajo consumo de dispositivos inteligentes sin necesidad de un router. Puede coexistir con Wi-Fi y Bluetooth LE, y es compatible con varias series de SoC, como Lexin ESP8266, ESP32, ESP32-S y ESP32-C. ESP-NOW se utiliza ampliamente en campos como electrodomésticos inteligentes, control remoto y sensores.  

### Características:  
- Según el método de conexión basado en la dirección MAC, el emparejamiento se puede realizar rápidamente sin necesidad de conexión a la red. Los dispositivos pueden conectarse en configuraciones de uno a muchos, uno a uno, muchos a uno y muchos a muchos.  
- ESP-NOW es un protocolo de comunicación inalámbrica basado en la capa de enlace de datos, lo que simplifica el protocolo de las capas superiores del modelo OSI de cinco capas en una sola, sin necesidad de agregar cabeceras de paquetes ni desempaquetar capa por capa. Esto reduce significativamente la latencia y el retraso causados por la pérdida de paquetes en caso de congestión de la red, proporcionando una mayor velocidad de respuesta.  

### Comparación con Wi-Fi y Bluetooth:  
- Wi-Fi: ESP-NOW admite comunicación punto a punto entre dispositivos, por lo que tiene un menor consumo de energía, mayor velocidad de transmisión y un mayor alcance de comunicación.  
- Bluetooth: ESP-NOW no requiere un proceso de emparejamiento, lo que lo hace más simple y fácil de usar. Además, tiene un menor consumo de energía y una mayor velocidad de transmisión.  

Sin embargo, ESP-NOW es más adecuado para escenarios de aplicación que requieren comunicación rápida, confiable, de bajo consumo y punto a punto, mientras que Bluetooth y Wi-Fi son más apropiados para entornos de red complejos y escenarios con un gran número de dispositivos.

## Preparación del Hardware  

En este proyecto, considerando que algunas personas pueden tener únicamente un XIAO ESP32S3, XIAO ESP32C3 o XIAO ESP32C6, y para facilitar el aprendizaje de la comunicación con ESP-NOW, este ejemplo utiliza tres modelos de XIAO ESP32: XIAO ESP32S3, XIAO ESP32C3 y XIAO ESP32C6, para comunicarse entre sí. Solo necesitas hacer pequeños ajustes en el código para usar cualquiera de estos dos o los tres modelos en la práctica. Sin más explicaciones, veamos cómo se implementa el siguiente código. ¡Manos a la obra!

Si aún no tienes al menos dos placas de la serie XIAO ESP32, aquí están los enlaces de compra.
  
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
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Realización de la Función  

Primero, comprendamos el marco general del código. En este ejemplo se utilizan tres placas ESP32: XIAO ESP32S3, XIAO ESP32C3 y XIAO ESP32C6. El XIAO ESP32S3 actúa como el emisor, mientras que el XIAO ESP32C6 y el XIAO ESP32C3 funcionan como receptores. Por supuesto, esta asignación de roles es solo para este código en particular. Con la explicación a continuación, podrás cambiar, agregar o eliminar fácilmente los roles de emisor y receptor según sea necesario. ¡Vamos a poner manos a la obra!  

### Parte 1. Código del Emisor (XIAO ESP32S3)

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

//Debes ingresar la dirección MAC de tu serie XIAO ESP32. ¡No puedes usar estos números ya que no corresponen a la tuya!
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

#### Resolución Parte 1: Código del Emisor

Incluir librerías
 - `#include "WiFi.h"`
 - `#include "esp_now.h"`

Funciones principales

- `espnow_init()`
  - Rol: Inicializar la función ESPNOW
  - Valor de retorno: Inicialización exitosa: [ESP_OK], Fallo: [ESP_FAIL]
  
- `espnow_deinit()`
  - Rol: Desinicializar la función ESPNOW, toda la información relacionada con los dispositivos emparejados será eliminada
  - Valor de retorno: Inicialización exitosa: [ESP_OK]

- `SenderXIAOS3_MACAddress_Requir()`
  - Rol: Establecer el modo WiFi a STA y obtener la dirección MAC para imprimirla en el puerto serial

- `SenderXIAOS3_Send_Data()`
  - Rol: Enviar un mensaje específico

- `SenderXIAOS3_Send_Data_cb()`
  - Rol: Esta es una función de retorno (callback), que se ejecuta cuando el mensaje impreso ha sido entregado correctamente y para qué dirección MAC

- `Association_ReceiverXIAOC3_peer() y Association_ReceiverXIAOC6_peer`
  - Rol: Agregar nodos de pares, si necesitas más receptores, puedes crear nodos, y escribir un mensaje que coincida para el emisor y el receptor

- `esp_now_register_send_cb()`
  - Rol: Registrar una función de retorno (callback) para verificar si los datos han sido enviados a la capa MAC
  - Valor de retorno: Datos recibidos correctamente por la capa MAC: [ESP_NOW_SEND_SUCCESS], de lo contrario [ESP_NOW_SEND_FAIL]

- `ReceiverXIAOC3_Recive_Data_cb()`
  - Rol: Aceptar funciones de retorno de envío y recibir datos

- `ReceiverXIAOC6_Recive_Data_cb()`
  - Rol: Aceptar funciones de retorno de envío y recibir datos

- `esp_now_register_recv_cb()`
  - Rol: Registrar una función de retorno (callback) para verificar si los datos han sido enviados a la capa MAC
  - Valor de retorno: Datos recibidos correctamente por la capa MAC: [ESP_NOW_SEND_SUCCESS], de lo contrario [ESP_NOW_SEND_FAIL]

Variables predeterminadas:

- `#define ESPNOW_WIFI_CHANNE`
  - Rol: Canal en el que el emisor y el receptor están ubicados
  
- `#define MAX_ESP_NOW_MAC_LEN`
  - Rol: Longitud de la dirección MAC
  
- `#define MAX_CHARACTERS_NUMBER`
  - Rol: Número máximo de caracteres aceptados o enviados
  
- `#define BAUD 115200`
  - Rol: Establecer la tasa de baudios del puerto serial
  
- `static uint8_t Receiver_XIAOC3_MAC_Address[MAX_ESP_NOW_MAC_LEN] y static uint8_t Receiver_XIAOC6_MAC_Address`
  - Rol: He almacenado las direcciones MAC de mis XIAO ESP32C3 y XIAO ESP32C6. Ellas sirven como receptores.
  - Suplemento: Ten en cuenta que estas son mis direcciones MAC y no pueden ser escritas.
  
- `NO_PMK_KEY`
  - Rol: Elegir emparejar dispositivos sin cifrado

### Parte 2. Código del Receptor (XIAO ESP32C3)

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

//Debes ingresar la dirección MAC de tu serie XIAO ESP32. ¡No puedes usar estos números ya que no corresponen a la tuya!
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

**Resolución Parte 2: Código de Receptor**:

Inclusión de Bibliotecas
- `#include "WiFi.h"`
- `#include "esp_now.h"`

Funciones Principales
- `espnow_init()`  
  - Rol: Inicializar la función ESPNOW  
  - Valor de retorno: Inicialización exitosa: [ESP_OK], Fallo: [ESP_FAIL]

- `espnow_deinit()`  
  - Rol: Desinicializar la función ESPNOW, toda la información relacionada con los dispositivos emparejados será eliminada  
  - Valor de retorno: Inicialización exitosa: [ESP_OK]

- `Receiver_MACAddress_requir()`  
  - Rol: Establecer el modo WiFi a STA y obtener la dirección MAC para imprimirla en el puerto serial

- `ReceiverXIAOC3_Send_Data()`  
  - Rol: Enviar un mensaje específico

- `ReceiverXIAOC3_Recive_Data_cb()`  
  - Rol: Esta es una función de retorno (callback), que se ejecuta cuando el mensaje impreso ha sido entregado correctamente y para qué dirección MAC

- `Association_SenderXIAOS3_peer()`  
  - Rol: Agregar un nodo de canal para que la XIAO ESP32S3 envíe mensajes a él

- `esp_now_register_send_cb()`  
  - Rol: Registrar una función de retorno (callback) para verificar si los datos han sido enviados a la capa MAC  
  - Valor de retorno: Datos recibidos correctamente por la capa MAC: [ESP_NOW_SEND_SUCCESS], de lo contrario [ESP_NOW_SEND_FAIL]

- `ReceiverXIAOC3_Send_Data_cb`  
  - Rol: Esta es una función de retorno (callback), que se ejecuta cuando el mensaje impreso ha sido entregado correctamente y para qué dirección MAC

- `esp_now_register_recv_cb()`  
  - Rol: Registrar una función de retorno (callback) para verificar si los datos han sido enviados a la capa MAC  
  - Valor de retorno: Datos recibidos correctamente por la capa MAC: [ESP_NOW_SEND_SUCCESS], de lo contrario [ESP_NOW_SEND_FAIL]

Variables Predeterminadas
- `#define ESPNOW_WIFI_CHANNE`  
  - Rol: Canal en el que el emisor y el receptor están ubicados

- `#define MAX_ESP_NOW_MAC_LEN`  
  - Rol: Longitud de la dirección MAC

- `#define MAX_CHARACTERS_NUMBER`  
  - Rol: Número máximo de caracteres aceptados o enviados

- `#define BAUD 115200`  
  - Rol: Establecer la tasa de baudios del puerto serial

- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`  
  - Rol: He almacenado las direcciones MAC de mi XIAO ESP32S3  
  - Suplemento: Ten en cuenta que estas son mis direcciones MAC y no pueden ser escritas.

- `NO_PMK_KEY`  
  - Rol: Elegir emparejar dispositivos sin cifrado

### Parte 3. Xódigo del Receptor (XIAO ESP32C6)

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

//Debes ingresar la dirección MAC de tu serie XIAO ESP32. ¡No puedes usar estos números ya que no corresponen a la tuya!
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

#### Resolution Part3 Code

The include librarise
- `#include "WiFi.h"`
- `#include "esp_now.h"`

The Core Functions
- `espnow_init()`  
  - Role : Initialize ESPNOW function 
  - Return value : initialize successful : [ESP_OK] Failed : [ESP_FAIL]
- `espnow_deinit()`
  - Role : De-initialize ESPNOW function,all information related to paired devices will be deleted 
  - Return value : initialize successful : [ESP_OK]
- `Receiver_MACAddress_requir()`  
  - Role : Set the WiFi mode to STA and obtain the MAC address to print on the serial port
- `ReceiverXIAOC6_Send_Data()` 
  - Role : Send specific message
- `ReceiverXIAOC6_Recive_Data_cb()` 
  - Role : This is a callback function,when it be executed whether the printed message was successfully delivered and for which MAC address
- `Association_SenderXIAOS3_peer()` 
  - Role : Add a channel node for XIAO ESP32S3 to send messages to it
- `ReceiverXIAOC6_Send_Data_cb()`
  - Role : This is a callback function,when it be executed whether the printed message was successfully delivered and for which MAC address
- `esp_now_register_send_cb()` 
  - Role : Register a callback function to verify whether it has been sent to the MAC layer
  - Return Value : MAC layer successfully received data:[ESP_NOW_SEND_SUCCESS] otherwise [ESP_NOW_SEND_FAIL]
- `esp_now_register_recv_cb()` 
  - Role : Register a callback function to verify whether it has been sent to the MAC layer
  - Return Value : MAC layer successfully received data:[ESP_NOW_SEND_SUCCESS] otherwise [ESP_NOW_SEND_FAIL]
- `NO_PMK_KEY`
  - Role : Choose to pair devices without encryption

Default Variables
- `#define ESPNOW_WIFI_CHANNE` 
  - Role : sender and receiver the channel in which it is lcoated
- `#define MAX_ESP_NOW_MAC_LEN` 
  - Role : recipient mac address len
- `#define MAX_CHARACTERS_NUMBER` 
  - Role : accepted or send max characters numbers
- `#define BAUD 115200`
  - Role : Setting the serial port baud rate
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - Role : I have stored the MAC addresses of my XIAO ESP32S3
  - Supplement : Please note that these are my MAC addresses and cannot be written in！
- `NO_PMK_KEY`
  - Role : Choose to pair devices without encryption

### Demo de Renderizado

Los siguientes son los resultados de las comunicaciones entre XIAO ESP32 utilizando ESPNOW.

#### Resultado del Emisor XIAO ESP32S3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/121.png" style={{width:600, height:'auto'}}/></div>

#### Resultado del Receptor XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/122.png" style={{width:600, height:'auto'}}/></div>

#### Resultado del Receptor XIAO ESP32C6

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/123.png" style={{width:600, height:'auto'}}/></div>

## Summary of ESPNOW

Low power consumption:
- Suitable for battery powered devices that can communicate without connecting to Wi Fi.

Quick connection:
- Devices can quickly establish connections without the need for complex pairing processes.

Many to many communication:
- Support communication between multiple devices, allowing one device to send data to multiple devices.

Security:
- Support encryption function to ensure the security of data transmission.

Short distance communication:
- Usually used for short-range (tens of meters) wireless communication.

## Resumen de ESPNOW  

Bajo consumo de energía:
- Adecuado para dispositivos alimentados por batería que pueden comunicarse sin necesidad de conectarse a Wi-Fi.  

Conexión rápida:
- Los dispositivos pueden establecer conexiones rápidamente sin necesidad de procesos de emparejamiento complejos.  

Comunicación muchos a muchos:
- Soporta la comunicación entre múltiples dispositivos, permitiendo que un dispositivo envíe datos a varios dispositivos.  

Seguridad:
- Soporta funciones de cifrado para garantizar la seguridad en la transmisión de datos.  

Comunicación de corta distancia:
- Generalmente utilizado para comunicaciones inalámbricas de corto alcance (decenas de metros).

## Solución de Problemas  

### Pregunta 1: No se puede conectar, pero el programa no muestra errores  

- Verifica si la dirección MAC de tu XIAO ESP32 es correcta.  
- Asegúrate de que el canal Wi-Fi en el que está conectado tu XIAO ESP32 sea el mismo.  
- Reinicia tu XIAO ESP32 y vuelve a abrir el monitor serial.  

### Pregunta 2: Se recibe el mensaje, pero está incompleto  

- Al detectar tanto el emisor como el receptor, verifica si hay similitudes en los miembros de la estructura.

## Recursos  

- **[Documentación Oficial de Espressif]** [ESPRESSIF ESP-IDF ESP-NOW](https://docs.espressif.com/projects/esp-idf/zh_CN/stable/esp32/api-reference/network/esp_now.html?highlight=espnow#esp-now)  

## Soporte Técnico y Discusión de Productos  

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>