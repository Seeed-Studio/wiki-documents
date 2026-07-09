---
description: Usando XIAO ESP32S3/XIAO ESP32C3/XIAO ESP32C6 para realizar comunicación con el protocolo ESP-NOW
title: ESP-NOW en la Serie XIAO ESP32
keywords:
  - ESPNOW
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png
slug: /xiao_espnow
last_update:
  date: 07/24/2024
  author: Jason
createdAt: '2024-08-12'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/xiao_espnow/
---

# Comenzar a ejecutar con el protocolo ESP-NOW en la Serie XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png" style={{width:1100, height:'auto'}}/></div>
<br />

Este Wiki te dirá qué es el protocolo ESP-NOW, y te enseñará cómo usar la Serie XIAO ESP32 para comunicarse usando este protocolo, el proceso será muy simple. Para permitir que todos utilicen el protocolo ESP-NOW en la serie XIAO ESP32, preparamos tres tipos de XIAO ESP32 C6/C3/S3 para comunicarse, ¡así que comencemos este viaje!

Por cierto, si acabas de obtener esta placa, por favor haz clic en este enlace, te dirá cómo comenzar.
- [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/)
- [Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/es/xiao_esp32c3_getting_started/)
- [Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/)

## ¿Qué es el protocolo ESP-NOW?

La definición oficial proporcionada: ESP-NOW es un protocolo de comunicación inalámbrica definido por espressif que permite el control directo, rápido y de bajo consumo de dispositivos inteligentes sin necesidad de un router. Puede coexistir con Wi-Fi y Bluetooth LE, soportando múltiples series de SoCs como Lexin ESP8266, ESP32, ESP32-S y ESP32-C. ESP-NOW es ampliamente utilizado en campos como electrodomésticos inteligentes, control remoto y sensores.

Siguientes características
- Según el método de conexión por dirección MAC, el emparejamiento se puede hacer rápidamente sin condiciones de red, y los dispositivos se pueden conectar de uno a muchos, uno a uno, muchos a uno, y muchos a muchos
- ESP-NOW es un protocolo de comunicación inalámbrica basado en la capa de enlace de datos, que simplifica el protocolo de cinco capas OSI de capa superior en una capa sin necesidad de agregar encabezados de paquetes y desempaquetar capa por capa. Alivia enormemente el retraso y la demora causados por la pérdida de paquetes durante la congestión de la red y tiene una velocidad de respuesta más alta

Comparado con Wi-Fi y Bluetooth
- Wi-Fi: ESP-NOW soporta comunicación punto a punto entre dispositivos, por lo que tiene menor consumo de energía y mayor velocidad de transmisión, y también tiene una distancia de comunicación más larga.
- Bluetooth: ESP-NOW no requiere un proceso de emparejamiento, haciéndolo más simple y fácil de usar ESP-NOW por lo que tiene menor consumo de energía y mayor velocidad de transmisión.

Pero ESP-NOW es adecuado para escenarios de aplicación que requieren comunicación rápida, confiable, de bajo consumo y punto a punto, mientras que Bluetooth y Wi-Fi son más adecuados para entornos de red complejos y escenarios con una gran cantidad de dispositivos.

## Preparación de Hardware

En este proyecto, para considerar que algunas personas pueden tener solo XIAO ESP32S3, XIAO ESP32C3, o XIAO ESP32C6, para que puedas aprender mejor la comunicación ESPNOW, este ejemplo usa tres modelos XIAO ESP32, XIAO ESP32S3, XIAO ESP32C3, y XIAO ESP32C6, para comunicarse entre sí. Solo necesitas mover el código ligeramente para usar cualquiera de los dos o tres de los tres modelos anteriores para operación práctica. Sin más explicación, echemos un vistazo a cómo se implementa el siguiente código, ¡Hagámoslo!

Si aún no tienes dos piezas de la serie XIAO ESP32, aquí están los enlaces de compra.
  
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
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Realización de la Función

Primero entendamos el marco general del código. Esta instancia utiliza XIAO ESP32S3 XIAO ESP32C3、XIAO ESP32C6， Hay tres placas ESP32, XIAO ESP32S3 como emisor, y XIAO ESP32C6 y XIAO ESP32C3 como receptores. Por supuesto, esta es solo la asignación de roles en este código. Luego, a través de mi explicación a continuación, si quieres cambiar o agregar o eliminar el rol del receptor y el emisor, será muy simple, ¡Vamos a involucrarnos!

### Parte 1. Código del Emisor XIAO ESP32S3

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

#### Código de Resolución Parte 1

Las librerías incluidas
 - `#include "WiFi.h"`
 - `#include "esp_now.h"`

Las Funciones Principales
- `espnow_init()`  
  - Función : Inicializar la función ESPNOW 
  - Valor de retorno : inicialización exitosa : [ESP_OK] Fallida : [ESP_FAIL]
- `espnow_deinit()`
  - Función : Des-inicializar la función ESPNOW, toda la información relacionada con dispositivos emparejados será eliminada 
  - Valor de retorno : inicialización exitosa : [ESP_OK]
- `SenderXIAOS3_MACAddress_Requir()`  
  - Función : Establecer el modo WiFi a STA y obtener la dirección MAC para imprimir en el puerto serie
- `SenderXIAOS3_Send_Data()` 
  - Función : Enviar mensaje específico
- `SenderXIAOS3_Send_Data_cb()` 
  - Función : Esta es una función de callback, cuando se ejecuta imprime si el mensaje fue entregado exitosamente y para qué dirección MAC
- `Association_ReceiverXIAOC3_peer() and Association_ReceiverXIAOC6_peer` 
  - Función : Agregar nodos pares, si necesitas más receptores, puedes crear nodos y escribir un mensaje que coincida para emisor y receptor
- `esp_now_register_send_cb()` 
  - Función : Registrar una función de callback para verificar si ha sido enviado a la capa MAC
  - Valor de Retorno : Capa MAC recibió datos exitosamente:[ESP_NOW_SEND_SUCCESS] de lo contrario [ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Recive_Data_cb()`
 - Función : Aceptar funciones de callback del envío y envío de datos
- `ReceiverXIAOC6_Recive_Data_cb()`
 - Función : Aceptar funciones de callback del envío y envío de datos
- `esp_now_register_recv_cb()` 
  - Función : Registrar una función de callback para verificar si ha sido enviado a la capa MAC
  - Valor de Retorno : Capa MAC recibió datos exitosamente:[ESP_NOW_SEND_SUCCESS] de lo contrario [ESP_NOW_SEND_FAIL]

Variables Predeterminadas
- `#define ESPNOW_WIFI_CHANNE` 
  - Función : emisor y receptor el canal en el que está ubicado
- `#define MAX_ESP_NOW_MAC_LEN` 
  - Función : longitud de dirección MAC
- `#define MAX_CHARACTERS_NUMBER` 
  - Función : números máximos de caracteres aceptados o enviados
- `#define BAUD 115200`
  - Función : Configurar la velocidad de baudios del puerto serie
- `static uint8_t Receiver_XIAOC3_MAC_Address[MAX_ESP_NOW_MAC_LEN] and static uint8_t Receiver_XIAOC6_MAC_Address`
  - Función : He almacenado las direcciones MAC de mi XIAO ESP32C3 y XIAO ESP32C6. Sirven como receptores.
  - Suplemento : Por favor nota que estas son mis direcciones MAC y no pueden ser escritas.
- `NO_PMK_KEY`
  - Función : Elegir emparejar dispositivos sin encriptación

### Parte 2. Código Receptor XIAO ESP32C3

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

#### Código de Resolución Parte 2

Las librerías incluidas
- `#include "WiFi.h"`
- `#include "esp_now.h"`

Las Funciones Principales
- `espnow_init()`  
  - Función : Inicializar la función ESPNOW 
  - Valor de retorno : inicialización exitosa : [ESP_OK] Fallida : [ESP_FAIL]
- `espnow_deinit()`
  - Función : Des-inicializar la función ESPNOW, toda la información relacionada con dispositivos emparejados será eliminada 
  - Valor de retorno : inicialización exitosa : [ESP_OK]
- `Receiver_MACAddress_requir()`  
  - Función : Establecer el modo WiFi a STA y obtener la dirección MAC para imprimir en el puerto serie
- `ReceiverXIAOC3_Send_Data()` 
  - Función : Enviar mensaje específico
- `ReceiverXIAOC3_Recive_Data_cb()` 
  - Función : Esta es una función de callback, cuando se ejecuta imprime si el mensaje fue entregado exitosamente y para qué dirección MAC
- `Association_SenderXIAOS3_peer()` 
  - Función : Agregar un nodo de canal para que XIAO ESP32S3 le envíe mensajes
- `esp_now_register_send_cb()` 
  - Función : Registrar una función de callback para verificar si ha sido enviado a la capa MAC
  - Valor de Retorno : Capa MAC recibió datos exitosamente:[ESP_NOW_SEND_SUCCESS] de lo contrario [ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Send_Data_cb`
  - Función : Esta es una función de callback, cuando se ejecuta imprime si el mensaje fue entregado exitosamente y para qué dirección MAC
- `esp_now_register_recv_cb()` 
  - Función : Registrar una función de callback para verificar si ha sido enviado a la capa MAC
  - Valor de Retorno : Capa MAC recibió datos exitosamente:[ESP_NOW_SEND_SUCCESS] de lo contrario [ESP_NOW_SEND_FAIL]

Variables Predeterminadas
- `#define ESPNOW_WIFI_CHANNE` 
  - Función : canal en el que se encuentran el emisor y receptor
- `#define MAX_ESP_NOW_MAC_LEN` 
  - Función : longitud de dirección MAC
- `#define MAX_CHARACTERS_NUMBER` 
  - Función : número máximo de caracteres aceptados o enviados
- `#define BAUD 115200`
  - Función : Configurar la velocidad de baudios del puerto serie
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - Función : He almacenado las direcciones MAC de mi XIAO ESP32S3
  - Complemento : ¡Por favor nota que estas son mis direcciones MAC y no pueden ser escritas!
- `NO_PMK_KEY`
  - Función : Elegir emparejar dispositivos sin encriptación

### Parte 3. Código Receptor XIAO ESP32C6

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

#### Código de la Parte 3 de la Resolución

Las librerías incluidas
- `#include "WiFi.h"`
- `#include "esp_now.h"`

Las Funciones Principales
- `espnow_init()`  
  - Función : Inicializar la función ESPNOW 
  - Valor de retorno : inicialización exitosa : [ESP_OK] Fallida : [ESP_FAIL]
- `espnow_deinit()`
  - Función : Des-inicializar la función ESPNOW, toda la información relacionada con dispositivos emparejados será eliminada 
  - Valor de retorno : inicialización exitosa : [ESP_OK]
- `Receiver_MACAddress_requir()`  
  - Función : Establecer el modo WiFi a STA y obtener la dirección MAC para imprimir en el puerto serie
- `ReceiverXIAOC6_Send_Data()` 
  - Función : Enviar mensaje específico
- `ReceiverXIAOC6_Recive_Data_cb()` 
  - Función : Esta es una función de callback, cuando se ejecuta imprime si el mensaje fue entregado exitosamente y para qué dirección MAC
- `Association_SenderXIAOS3_peer()` 
  - Función : Agregar un nodo de canal para que XIAO ESP32S3 le envíe mensajes
- `ReceiverXIAOC6_Send_Data_cb()`
  - Función : Esta es una función de callback, cuando se ejecuta imprime si el mensaje fue entregado exitosamente y para qué dirección MAC
- `esp_now_register_send_cb()` 
  - Función : Registrar una función de callback para verificar si ha sido enviado a la capa MAC
  - Valor de Retorno : La capa MAC recibió exitosamente los datos:[ESP_NOW_SEND_SUCCESS] de lo contrario [ESP_NOW_SEND_FAIL]
- `esp_now_register_recv_cb()` 
  - Función : Registrar una función de callback para verificar si ha sido enviado a la capa MAC
  - Valor de Retorno : La capa MAC recibió exitosamente los datos:[ESP_NOW_SEND_SUCCESS] de lo contrario [ESP_NOW_SEND_FAIL]
- `NO_PMK_KEY`
  - Función : Elegir emparejar dispositivos sin encriptación

Variables Predeterminadas
- `#define ESPNOW_WIFI_CHANNE` 
  - Función : el canal en el que se encuentran el emisor y el receptor
- `#define MAX_ESP_NOW_MAC_LEN` 
  - Función : longitud de la dirección mac del destinatario
- `#define MAX_CHARACTERS_NUMBER` 
  - Función : número máximo de caracteres aceptados o enviados
- `#define BAUD 115200`
  - Función : Configurar la velocidad de baudios del puerto serie
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - Función : He almacenado las direcciones MAC de mi XIAO ESP32S3
  - Suplemento : ¡Por favor note que estas son mis direcciones MAC y no pueden ser escritas!
- `NO_PMK_KEY`
  - Función : Elegir emparejar dispositivos sin encriptación


## Renderizado de la Demostración

Los siguientes son los resultados de las comunicaciones XIAO ESP32 usando ESPNOW

#### Resultado del Emisor XIAO ESP32S3 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/121.png" style={{width:600, height:'auto'}}/></div>

#### Resultado del Receptor XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/122.png" style={{width:600, height:'auto'}}/></div>

#### Resultado del Receptor XIAO ESP32C6

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/123.png" style={{width:600, height:'auto'}}/></div>

## Resumen de ESPNOW

Bajo consumo de energía:
- Adecuado para dispositivos alimentados por batería que pueden comunicarse sin conectarse a Wi Fi.

Conexión rápida:
- Los dispositivos pueden establecer conexiones rápidamente sin necesidad de procesos de emparejamiento complejos.

Comunicación de muchos a muchos:
- Soporta comunicación entre múltiples dispositivos, permitiendo que un dispositivo envíe datos a múltiples dispositivos.

Seguridad:
- Soporta función de encriptación para asegurar la seguridad de la transmisión de datos.

Comunicación de corta distancia:
- Usualmente utilizado para comunicación inalámbrica de corto alcance (decenas de metros).

## Solución de problemas

### Pregunta 1: No se puede conectar, el programa no reportó ningún error

- Verifica si la dirección MAC de tu XIAO ESP32 es correcta
- Verifica si el canal Wi-Fi de tu XIAO ESP32 conectado está en el mismo
- Reinicia tu XIAO ESP32, vuelve a abrir el monitor serie

### Pregunta 2: Mensaje recibido, pero incompleto

- Al detectar tanto el emisor como el receptor, hay una similitud en los miembros de la estructura

## Recursos

- **[Documentos Oficiales de Espressif]** [ESPRESSIF ESP-IDF ESP-NOW ](https://docs.espressif.com/projects/esp-idf/zh_CN/stable/esp32/api-reference/network/esp_now.html?highlight=espnow#esp-now)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>