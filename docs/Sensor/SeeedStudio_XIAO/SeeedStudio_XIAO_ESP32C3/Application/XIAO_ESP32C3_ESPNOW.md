---
description: Using XIAO ESP32S3/XIAO ESP32C3/XIAO ESP32C6 conduct communcation on ESP-NOW protocol
title: ESP-NOW protocol on XIAO ESP32 Series
keywords:
- ESPNOW
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png
slug: /xiao_esp32c3_espnow
last_update:
  date: 07/24/2024
  author: Jason
---

# Start running with ESP-NOW protocol on XIAO Series

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png" style={{width:1100, height:'auto'}}/></div>
<br />

This Wiki will tell you what the ESP-NOW protocol is,and tech you how to use XIAO ESP32 Series to communicate using this protocol,the process will be very simple,In order to enable everyone to utilize the ESP-NOW protocol in the XIAO ESP32 series,we prepare thress XIAO ESP32 types C6/C3/S3 to comuncate,so let's start this journey!

By the way,if you just go this board,Please click on this link,it will tell you how to get started.

- [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)
- [Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/xiao_esp32c3_getting_started/)
- [Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/)

## What is ESP-NOW protocol?

The official definiton provided : ESP-NOW is a wireless communication protocol defined by espressif that enables direct, fast, and low-power control of smart devices without the need for a router.It can coexist with Wi Fi and Bluetooth LE, supporting multiple series of SoCs such as Lexin ESP8266, ESP32, ESP32-S, and ESP32-C. ESP-NOW is widely used in fields such as smart home appliances, remote control, and sensors.

Following characteristics

- According to the MAC address connection method, pairing can be done quickly without network conditions, and devices can be connected in single to many, single to single, many to single, and many to many ways
- ESP-NOW is a wireless communication protocol based on the data link layer, which simplifies the five layer OSI upper layer protocol into one layer without the need to add packet headers and unpacks layer by layer. It greatly alleviates the lag and delay caused by packet loss during network congestion and has a higher response speed

Compared to Wi-Fi and Bluetooth

- Wi-Fi : ESP-NOW supports point-to-point communication between devices,so it has lower power consumption and higher transmission speed, and also has a longer communication distance.
- Bluetooth : ESP-NOW does not require a pairing process, making it simpler and easier to useESP-NOW so it has lower power consumption and higher transmission speed.

But ESP-NOW is suitable for application scenarios that require fast, reliable, low-power, and point-to-point communication, while Bluetooth and Wi Fi are more suitable for complex network environments and scenarios with a large number of devices.

## Hadware Preparetion

In this project, in order to consider that some people may only have XIAO ESP32S3, XIAO ESP32C3, or XIAO ESP32C6, so that you can better learn ESPNOW communication, this example uses three XIAO ESP32 models, XIAO ESP32S3, XIAO ESP32C3, and XIAO ESP32C6, to communicate with each other. You only need to move the code slightly to use any two or three of the above three models for practical operation. Without further explanation, let's take a look at how the following code is implemented,Let's do it!

If you don't have any two XIAO ESP32 series pieces yet, here are the purchased links.
  
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Function Realization

Let's first understand the general framework of the code. This instance uses XIAO ESP32S3 XIAO ESP32C3、XIAO ESP32C6， There are three ESP32 boards, XIAO ESP32S3 as the sender, and XIAO ESP32C6 and XIAO ESP32C3 as the receiver. Of course, this is just the assignment role in this code. Then through my explanation below, if you want to change or add or delete the role of the receiver and the sender, it will be very simple,Let's get involved!

### Part 1. XIAO ESP32S3 Sender Code

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

#### Resolution Part1 Code

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
- `SenderXIAOS3_MACAddress_Requir()`  
  - Role : Set the WiFi mode to STA and obtain the MAC address to print on the serial port
- `SenderXIAOS3_Send_Data()`
  - Role : Send specific message
- `SenderXIAOS3_Send_Data_cb()`
  - Role : This is a callback function,when it be executed whether the printed message was successfully delivered and for which MAC address
- `Association_ReceiverXIAOC3_peer() and Association_ReceiverXIAOC6_peer`
  - Role : Add peer nodes,if need more receiver,you can created nodes,and write a message that matches for sender and receiver
- `esp_now_register_send_cb()`
  - Role : Register a callback function to verify whether it has been sent to the MAC layer
  - Return Value : MAC layer successfully received data:[ESP_NOW_SEND_SUCCESS] otherwise [ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Recive_Data_cb()`
- Role : Accept callback functions from sending and sending data
- `ReceiverXIAOC6_Recive_Data_cb()`
- Role : Accept callback functions from sending and sending data
- `esp_now_register_recv_cb()`
  - Role : Register a callback function to verify whether it has been sent to the MAC layer
  - Return Value : MAC layer successfully received data:[ESP_NOW_SEND_SUCCESS] otherwise [ESP_NOW_SEND_FAIL]

Default Variables

- `#define ESPNOW_WIFI_CHANNE`
  - Role : sender and receiver the channel in which it is lcoated
- `#define MAX_ESP_NOW_MAC_LEN`
  - Role : MAC address len
- `#define MAX_CHARACTERS_NUMBER`
  - Role : accepted or send max characters numbers
- `#define BAUD 115200`
  - Role : Setting the serial port baud rate
- `static uint8_t Receiver_XIAOC3_MAC_Address[MAX_ESP_NOW_MAC_LEN] and static uint8_t Receiver_XIAOC6_MAC_Address`
  - Role : I have stored the MAC addresses of my XIAO ESP32C3 and XIAO ESP32C6.They serve as recipients.
  - Supplement : Please note that these are my MAC addresses and cannot be written in.
- `NO_PMK_KEY`
  - Role : Choose to pair devices without encryption

### Part 2. XIAO ESP32C3 Receiver Code

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

#### Resolution Part2 Code

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
- `ReceiverXIAOC3_Send_Data()`
  - Role : Send specific message
- `ReceiverXIAOC3_Recive_Data_cb()`
  - Role : This is a callback function,when it be executed whether the printed message was successfully delivered and for which MAC address
- `Association_SenderXIAOS3_peer()`
  - Role : Add a channel node for XIAO ESP32S3 to send messages to it
- `esp_now_register_send_cb()`
  - Role : Register a callback function to verify whether it has been sent to the MAC layer
  - Return Value : MAC layer successfully received data:[ESP_NOW_SEND_SUCCESS] otherwise [ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Send_Data_cb`
  - Role : This is a callback function,when it be executed whether the printed message was successfully delivered and for which MAC address
- `esp_now_register_recv_cb()`
  - Role : Register a callback function to verify whether it has been sent to the MAC layer
  - Return Value : MAC layer successfully received data:[ESP_NOW_SEND_SUCCESS] otherwise [ESP_NOW_SEND_FAIL]

Default Variables

- `#define ESPNOW_WIFI_CHANNE`
  - Role : sender and receiver the channel in which it is lcoated
- `#define MAX_ESP_NOW_MAC_LEN`
  - Role : MAC address len
- `#define MAX_CHARACTERS_NUMBER`
  - Role : accepted or send max characters numbers
- `#define BAUD 115200`
  - Role : Setting the serial port baud rate
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - Role : I have stored the MAC addresses of my XIAO ESP32S3
  - Supplement : Please note that these are my MAC addresses and cannot be written in！
- `NO_PMK_KEY`
  - Role : Choose to pair devices without encryption

### Part 3. XIAO ESP32C6 Receiver Code

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

## Demo Rendering

The following are the results of IXAO ESP32 communications using ESPNOW

#### Sender XIAO ESP32S3 Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/121.png" style={{width:600, height:'auto'}}/></div>

#### Receiver XIAO ESP32C3 Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/122.png" style={{width:600, height:'auto'}}/></div>

#### Receiver XIAO ESP32C6 Result

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

## Troubleshooting

### Questin 1 : Unable to connect, the program did not report any errors

- Check your XIAO ESP32 MAC Address whether or not correct
- Your connect XIAO ESP32 Wi-Fi channel whether or nor on the same
- Reset your XIAO ESP32,reopen serial monitor

### Question 2 : Received message, but incomplete

- When detecting both the sender and receiver, there is a similarity in the structure members

## Resources

- **[Espressif Official Documents]** [ESPRESSIF ESP-IDF ESP-NOW](https://docs.espressif.com/projects/esp-idf/zh_CN/stable/esp32/api-reference/network/esp_now.html?highlight=espnow#esp-now)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
