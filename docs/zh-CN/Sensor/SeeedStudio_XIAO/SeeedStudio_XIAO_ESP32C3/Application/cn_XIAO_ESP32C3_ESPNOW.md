---
description: 使用 XIAO ESP32S3/XIAO ESP32C3/XIAO ESP32C6 进行 ESP-NOW 协议通信
title: XIAO ESP32 系列上的 ESP-NOW 协议
keywords:
- ESPNOW
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png
slug: /cn/xiao_esp32c3_espnow
last_update:
  date: 07/24/2024
  author: Jason
---

# 在 XIAO 系列上开始使用 ESP-NOW 协议

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png" style={{width:1100, height:'auto'}}/></div>
<br />

本 Wiki 将告诉您什么是 ESP-NOW 协议，并教您如何使用 XIAO ESP32 系列进行此协议通信，过程将非常简单。为了让每个人都能在 XIAO ESP32 系列中使用 ESP-NOW 协议，我们准备了三种 XIAO ESP32 类型 C6/C3/S3 进行通信，让我们开始这个旅程吧！

顺便说一下，如果您刚拿到这块板子，请点击此链接，它将告诉您如何开始使用。

- [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/)
- [Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/cn/xiao_esp32c3_getting_started/)
- [Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/cn/xiao_esp32c6_getting_started/)

## 什么是 ESP-NOW 协议？

官方定义：ESP-NOW 是由乐鑫定义的无线通信协议，可实现智能设备的直接、快速、低功耗控制，无需路由器。它可以与 Wi-Fi 和蓝牙 LE 共存，支持多个系列的 SoC，如乐鑫 ESP8266、ESP32、ESP32-S 和 ESP32-C。ESP-NOW 广泛应用于智能家电、遥控和传感器等领域。

具有以下特点：

- 根据 MAC 地址连接方式，可在无网络条件下快速配对，设备可以一对多、一对一、多对一和多对多方式连接
- ESP-NOW 是基于数据链路层的无线通信协议，将五层 OSI 上层协议简化为一层，无需添加数据包头和逐层解包。它大大缓解了网络拥塞期间丢包造成的延迟和延时，具有更高的响应速度

与 Wi-Fi 和蓝牙相比：

- Wi-Fi：ESP-NOW 支持设备间点对点通信，因此功耗更低，传输速度更快，通信距离也更远。
- 蓝牙：ESP-NOW 不需要配对过程，使用更简单方便，ESP-NOW 功耗更低，传输速度更快。

但 ESP-NOW 适用于需要快速、可靠、低功耗和点对点通信的应用场景，而蓝牙和 Wi-Fi 更适合复杂的网络环境和大量设备的场景。

## 硬件准备

在这个项目中，为了考虑到有些人可能只有 XIAO ESP32S3、XIAO ESP32C3 或 XIAO ESP32C6，让您能更好地学习 ESPNOW 通信，本示例使用三种 XIAO ESP32 型号：XIAO ESP32S3、XIAO ESP32C3 和 XIAO ESP32C6 进行相互通信。您只需要稍微修改代码就可以使用上述三种型号中的任意两种或三种进行实际操作。不再多说，让我们看看以下代码是如何实现的，开始动手吧！

如果您还没有任意两块 XIAO ESP32 系列板子，这里是购买链接。
  
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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 功能实现

让我们首先了解代码的总体框架。这个实例使用了 XIAO ESP32S3、XIAO ESP32C3、XIAO ESP32C6，共三块 ESP32 开发板，XIAO ESP32S3 作为发送方，XIAO ESP32C6 和 XIAO ESP32C3 作为接收方。当然，这只是在这个代码中的角色分配。通过我下面的解释，如果你想要更改、添加或删除接收方和发送方的角色，将会非常简单，让我们开始吧！

### 第一部分. XIAO ESP32S3 发送方代码

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

#### 解决方案第一部分代码

包含的库文件

- `#include "WiFi.h"`
- `#include "esp_now.h"`

核心函数

- `espnow_init()`  
  - 作用：初始化 ESPNOW 功能
  - 返回值：初始化成功：[ESP_OK] 失败：[ESP_FAIL]
- `espnow_deinit()`
  - 作用：去初始化 ESPNOW 功能，所有与配对设备相关的信息将被删除
  - 返回值：初始化成功：[ESP_OK]
- `SenderXIAOS3_MACAddress_Requir()`  
  - 作用：将WiFi模式设置为STA并获取MAC地址以在串口上打印
- `SenderXIAOS3_Send_Data()`
  - 作用：发送特定消息
- `SenderXIAOS3_Send_Data_cb()`
  - 作用：这是一个回调函数，当它被执行时会打印消息是否成功传递以及对应的MAC地址
- `Association_ReceiverXIAOC3_peer() 和 Association_ReceiverXIAOC6_peer`
  - 作用：添加对等节点，如果需要更多接收器，您可以创建节点，并编写与发送器和接收器匹配的消息
- `esp_now_register_send_cb()`
  - 作用：注册回调函数以验证是否已发送到MAC层
  - 返回值：MAC层成功接收数据：[ESP_NOW_SEND_SUCCESS] 否则 [ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Recive_Data_cb()`
- 作用：接受来自发送和发送数据的回调函数
- `ReceiverXIAOC6_Recive_Data_cb()`
- 作用：接受来自发送和发送数据的回调函数
- `esp_now_register_recv_cb()`
  - 作用：注册回调函数以验证是否已发送到MAC层
  - 返回值：MAC层成功接收数据：[ESP_NOW_SEND_SUCCESS] 否则 [ESP_NOW_SEND_FAIL]

默认变量

- `#define ESPNOW_WIFI_CHANNE`
  - 作用：发送器和接收器所在的通道
- `#define MAX_ESP_NOW_MAC_LEN`
  - 作用：MAC地址长度
- `#define MAX_CHARACTERS_NUMBER`
  - 作用：接受或发送的最大字符数
- `#define BAUD 115200`
  - 作用：设置串口波特率
- `static uint8_t Receiver_XIAOC3_MAC_Address[MAX_ESP_NOW_MAC_LEN] 和 static uint8_t Receiver_XIAOC6_MAC_Address`
  - 作用：我已经存储了我的XIAO ESP32C3 和 XIAO ESP32C6 的MAC地址。它们作为接收器。
  - 补充：请注意这些是我的MAC地址，不能写入。
- `NO_PMK_KEY`
  - 作用：选择不加密配对设备

### 第二部分. XIAO ESP32C3 接收器代码

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

#### 解决方案第二部分代码

包含的库文件

- `#include "WiFi.h"`
- `#include "esp_now.h"`

核心函数

- `espnow_init()`  
  - 作用：初始化 ESPNOW 功能
  - 返回值：初始化成功：[ESP_OK] 失败：[ESP_FAIL]
- `espnow_deinit()`
  - 作用：去初始化 ESPNOW 功能，所有与配对设备相关的信息将被删除
  - 返回值：初始化成功：[ESP_OK]
- `Receiver_MACAddress_requir()`  
  - 作用：将WiFi模式设置为STA并获取MAC地址以在串口上打印
- `ReceiverXIAOC3_Send_Data()`
  - 作用：发送特定消息
- `ReceiverXIAOC3_Recive_Data_cb()`
  - 作用：这是一个回调函数，当它被执行时会打印消息是否成功传递以及针对哪个MAC地址
- `Association_SenderXIAOS3_peer()`
  - 作用：为XIAO ESP32S3 添加一个通道节点以向其发送消息
- `esp_now_register_send_cb()`
  - 作用：注册一个回调函数来验证是否已发送到MAC层
  - 返回值：MAC层成功接收数据：[ESP_NOW_SEND_SUCCESS] 否则 [ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Send_Data_cb`
  - 作用：这是一个回调函数，当它被执行时会打印消息是否成功传递以及针对哪个MAC地址
- `esp_now_register_recv_cb()`
  - 作用：注册一个回调函数来验证是否已发送到MAC层
  - 返回值：MAC层成功接收数据：[ESP_NOW_SEND_SUCCESS] 否则 [ESP_NOW_SEND_FAIL]

默认变量

- `#define ESPNOW_WIFI_CHANNE`
  - 作用：发送方和接收方所在的通道
- `#define MAX_ESP_NOW_MAC_LEN`
  - 作用：MAC地址长度
- `#define MAX_CHARACTERS_NUMBER`
  - 作用：接受或发送的最大字符数
- `#define BAUD 115200`
  - 作用：设置串口波特率
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - 作用：我已经存储了我的XIAO ESP32S3 的MAC地址
  - 补充：请注意这些是我的MAC地址，不能直接写入！
- `NO_PMK_KEY`
  - 作用：选择不加密配对设备

### 第三部分. XIAO ESP32C6 接收器代码

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

#### 解决方案第3部分代码

包含的库文件

- `#include "WiFi.h"`
- `#include "esp_now.h"`

核心函数

- `espnow_init()`  
  - 作用：初始化 ESPNOW 功能
  - 返回值：初始化成功：[ESP_OK] 失败：[ESP_FAIL]
- `espnow_deinit()`
  - 作用：去初始化 ESPNOW 功能，所有与配对设备相关的信息将被删除
  - 返回值：初始化成功：[ESP_OK]
- `Receiver_MACAddress_requir()`  
  - 作用：将WiFi模式设置为STA并获取MAC地址以在串口上打印
- `ReceiverXIAOC6_Send_Data()`
  - 作用：发送特定消息
- `ReceiverXIAOC6_Recive_Data_cb()`
  - 作用：这是一个回调函数，当它被执行时会打印消息是否成功传递以及针对哪个MAC地址
- `Association_SenderXIAOS3_peer()`
  - 作用：为XIAO ESP32S3 添加一个通道节点以向其发送消息
- `ReceiverXIAOC6_Send_Data_cb()`
  - 作用：这是一个回调函数，当它被执行时会打印消息是否成功传递以及针对哪个MAC地址
- `esp_now_register_send_cb()`
  - 作用：注册一个回调函数来验证是否已发送到MAC层
  - 返回值：MAC层成功接收数据：[ESP_NOW_SEND_SUCCESS] 否则 [ESP_NOW_SEND_FAIL]
- `esp_now_register_recv_cb()`
  - 作用：注册一个回调函数来验证是否已发送到MAC层
  - 返回值：MAC层成功接收数据：[ESP_NOW_SEND_SUCCESS] 否则 [ESP_NOW_SEND_FAIL]
- `NO_PMK_KEY`
  - 作用：选择不加密配对设备

默认变量

- `#define ESPNOW_WIFI_CHANNE`
  - 作用：发送方和接收方所在的通道
- `#define MAX_ESP_NOW_MAC_LEN`
  - 作用：接收方mac地址长度
- `#define MAX_CHARACTERS_NUMBER`
  - 作用：接受或发送的最大字符数
- `#define BAUD 115200`
  - 作用：设置串口波特率
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - 作用：我已存储了我的XIAO ESP32S3 的MAC地址
  - 补充：请注意这些是我的MAC地址，不能直接写入！
- `NO_PMK_KEY`
  - 作用：选择不加密配对设备

## 演示效果

以下是使用 ESPNOW 进行XIAO ESP32通信的结果

#### 发送方XIAO ESP32S3 结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/121.png" style={{width:600, height:'auto'}}/></div>

#### 接收方XIAO ESP32C3 结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/122.png" style={{width:600, height:'auto'}}/></div>

#### 接收方XIAO ESP32C6 结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/123.png" style={{width:600, height:'auto'}}/></div>

## ESPNOW 总结

低功耗：

- 适用于电池供电的设备，可以在不连接Wi-Fi的情况下进行通信。

快速连接：

- 设备可以快速建立连接，无需复杂的配对过程。

多对多通信：

- 支持多个设备之间的通信，允许一个设备向多个设备发送数据。

安全性：

- 支持加密功能，确保数据传输的安全性。

短距离通信：

- 通常用于短距离（几十米）无线通信。

## 故障排除

### 问题 1：无法连接，程序未报告任何错误

- 检查您的 XIAO ESP32 MAC 地址是否正确
- 检查您连接的 XIAO ESP32 Wi-Fi 信道是否相同
- 重置您的 XIAO ESP32，重新打开串口监视器

### 问题 2：收到消息，但不完整

- 当同时检测发送方和接收方时，结构成员存在相似性

## 资源

- **[Espressif 官方文档]** [ESPRESSIF ESP-IDF ESP-NOW](https://docs.espressif.com/projects/esp-idf/zh_CN/stable/esp32/api-reference/network/esp_now.html?highlight=espnow#esp-now)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
