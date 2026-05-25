---
description: XIAO ESP32S3/XIAO ESP32C3/XIAO ESP32C6を使用してESP-NOWプロトコルで通信を行う
title: XIAO ESP32シリーズでのESP-NOWプロトコル
keywords:
  - ESPNOW
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png
slug: /xiao_esp32c6_espnow
last_update:
  date: 07/24/2024
  author: Jason
createdAt: '2024-08-12'
updatedAt: '2025-09-25'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c6_espnow/
---

# XIAOシリーズでESP-NOWプロトコルを使い始める

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png" style={{width:1100, height:'auto'}}/></div>
<br />

このWikiでは、ESP-NOWプロトコルとは何かを説明し、XIAO ESP32シリーズを使用してこのプロトコルで通信する方法を教えます。プロセスは非常にシンプルです。XIAO ESP32シリーズでESP-NOWプロトコルを活用できるように、3つのXIAO ESP32タイプ（C6/C3/S3）を用意して通信を行います。それでは、この旅を始めましょう！

ちなみに、このボードを初めて手に入れた場合は、こちらのリンクをクリックしてください。開始方法を説明しています。

- [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/)
- [Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/ja/xiao_esp32c3_getting_started/)
- [Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/)

## ESP-NOWプロトコルとは？

公式定義によると：ESP-NOWは、Espressifが定義した無線通信プロトコルで、ルーターを必要とせずにスマートデバイスの直接的で高速かつ低消費電力の制御を可能にします。Wi-FiやBluetooth LEと共存でき、Lexin ESP8266、ESP32、ESP32-S、ESP32-Cなどの複数シリーズのSoCをサポートしています。ESP-NOWは、スマートホーム家電、リモートコントロール、センサーなどの分野で広く使用されています。

以下の特徴があります：

- MACアドレス接続方式により、ネットワーク条件なしで迅速にペアリングでき、デバイスを1対多、1対1、多対1、多対多の方法で接続できます
- ESP-NOWはデータリンク層に基づく無線通信プロトコルで、5層のOSI上位層プロトコルを1層に簡素化し、パケットヘッダーの追加や層ごとのアンパックが不要です。ネットワーク輻輳時のパケット損失による遅延や遅れを大幅に軽減し、より高い応答速度を持ちます

Wi-FiやBluetoothとの比較：

- Wi-Fi：ESP-NOWはデバイス間のポイントツーポイント通信をサポートするため、消費電力が低く、伝送速度が高く、通信距離も長くなります。
- Bluetooth：ESP-NOWはペアリングプロセスが不要で、よりシンプルで使いやすく、消費電力が低く、伝送速度が高くなります。

ただし、ESP-NOWは高速で信頼性があり、低消費電力でポイントツーポイント通信が必要なアプリケーションシナリオに適していますが、BluetoothやWi-Fiは複雑なネットワーク環境や多数のデバイスがあるシナリオにより適しています。

## ハードウェア準備

このプロジェクトでは、XIAO ESP32S3、XIAO ESP32C3、またはXIAO ESP32C6のいずれか1つしか持っていない人もいることを考慮し、ESPNOW通信をより良く学習できるように、この例では3つのXIAO ESP32モデル（XIAO ESP32S3、XIAO ESP32C3、XIAO ESP32C6）を使用して相互通信を行います。コードを少し移動するだけで、上記3つのモデルのうち任意の2つまたは3つを実際の操作に使用できます。詳しい説明は省略して、以下のコードがどのように実装されているかを見てみましょう。やってみましょう！

まだXIAO ESP32シリーズを2つお持ちでない場合は、こちらが購入リンクです。
  
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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 機能実現

まず、コードの一般的なフレームワークを理解しましょう。このインスタンスでは、XIAO ESP32S3、XIAO ESP32C3、XIAO ESP32C6の3つのESP32ボードを使用します。XIAO ESP32S3を送信者として、XIAO ESP32C6とXIAO ESP32C3を受信者として使用します。もちろん、これはこのコードでの役割の割り当てに過ぎません。以下の説明を通じて、受信者と送信者の役割を変更、追加、削除したい場合は、非常に簡単になります。さあ、始めましょう！

### パート1. XIAO ESP32S3 送信者コード

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

#### 解決 Part1 コード

インクルードライブラリ

- `#include "WiFi.h"`
- `#include "esp_now.h"`

コア関数

- `espnow_init()`  
  - 役割 : ESPNOW 機能を初期化する
  - 戻り値 : 初期化成功 : [ESP_OK] 失敗 : [ESP_FAIL]
- `espnow_deinit()`
  - 役割 : ESPNOW 機能を非初期化し、ペアリングされたデバイスに関連するすべての情報が削除される
  - 戻り値 : 初期化成功 : [ESP_OK]
- `SenderXIAOS3_MACAddress_Requir()`  
  - 役割 : WiFiモードをSTAに設定し、MACアドレスを取得してシリアルポートに出力する
- `SenderXIAOS3_Send_Data()`
  - 役割 : 特定のメッセージを送信する
- `SenderXIAOS3_Send_Data_cb()`
  - 役割 : これはコールバック関数で、実行時に印刷されたメッセージが正常に配信されたかどうかと、どのMACアドレス宛かを確認する
- `Association_ReceiverXIAOC3_peer() and Association_ReceiverXIAOC6_peer`
  - 役割 : ピアノードを追加する。より多くの受信機が必要な場合は、ノードを作成し、送信機と受信機に対応するメッセージを記述できる
- `esp_now_register_send_cb()`
  - 役割 : MACレイヤーに送信されたかどうかを確認するコールバック関数を登録する
  - 戻り値 : MACレイヤーがデータを正常に受信:[ESP_NOW_SEND_SUCCESS] そうでなければ [ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Recive_Data_cb()`
- 役割 : 送信からの送信およびデータ送信のコールバック関数を受け入れる
- `ReceiverXIAOC6_Recive_Data_cb()`
- 役割 : 送信からの送信およびデータ送信のコールバック関数を受け入れる
- `esp_now_register_recv_cb()`
  - 役割 : MACレイヤーに送信されたかどうかを確認するコールバック関数を登録する
  - 戻り値 : MACレイヤーがデータを正常に受信:[ESP_NOW_SEND_SUCCESS] そうでなければ [ESP_NOW_SEND_FAIL]

デフォルト変数

- `#define ESPNOW_WIFI_CHANNE`
  - 役割 : 送信機と受信機が位置するチャンネル
- `#define MAX_ESP_NOW_MAC_LEN`
  - 役割 : MACアドレスの長さ
- `#define MAX_CHARACTERS_NUMBER`
  - 役割 : 受信または送信する最大文字数
- `#define BAUD 115200`
  - 役割 : シリアルポートのボーレートを設定する
- `static uint8_t Receiver_XIAOC3_MAC_Address[MAX_ESP_NOW_MAC_LEN] and static uint8_t Receiver_XIAOC6_MAC_Address`
  - 役割 : 私のXIAO ESP32C3 とXIAO ESP32C6 のMACアドレスを保存している。これらは受信機として機能する。
  - 補足 : これらは私のMACアドレスであり、書き込むことはできないことに注意してください。
- `NO_PMK_KEY`
  - 役割 : 暗号化なしでデバイスをペアリングすることを選択する

### パート2. XIAO ESP32C3 受信機コード

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

#### 解決 Part2 コード

インクルードライブラリ

- `#include "WiFi.h"`
- `#include "esp_now.h"`

コア関数

- `espnow_init()`  
  - 役割：ESPNOW機能を初期化する
  - 戻り値：初期化成功：[ESP_OK] 失敗：[ESP_FAIL]
- `espnow_deinit()`
  - 役割：ESPNOW機能を非初期化し、ペアリングされたデバイスに関連するすべての情報が削除される
  - 戻り値：初期化成功：[ESP_OK]
- `Receiver_MACAddress_requir()`  
  - 役割：WiFiモードをSTAに設定し、MACアドレスを取得してシリアルポートに出力する
- `ReceiverXIAOC3_Send_Data()`
  - 役割：特定のメッセージを送信する
- `ReceiverXIAOC3_Recive_Data_cb()`
  - 役割：これはコールバック関数で、実行時に印刷されたメッセージが正常に配信されたかどうか、およびどのMACアドレス宛かを確認する
- `Association_SenderXIAOS3_peer()`
  - 役割：XIAO ESP32S3がメッセージを送信するためのチャンネルノードを追加する
- `esp_now_register_send_cb()`
  - 役割：MAC層に送信されたかどうかを確認するコールバック関数を登録する
  - 戻り値：MAC層がデータを正常に受信：[ESP_NOW_SEND_SUCCESS] それ以外：[ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Send_Data_cb`
  - 役割：これはコールバック関数で、実行時に印刷されたメッセージが正常に配信されたかどうか、およびどのMACアドレス宛かを確認する
- `esp_now_register_recv_cb()`
  - 役割：MAC層に送信されたかどうかを確認するコールバック関数を登録する
  - 戻り値：MAC層がデータを正常に受信：[ESP_NOW_SEND_SUCCESS] それ以外：[ESP_NOW_SEND_FAIL]

デフォルト変数

- `#define ESPNOW_WIFI_CHANNE`
  - 役割：送信者と受信者が位置するチャンネル
- `#define MAX_ESP_NOW_MAC_LEN`
  - 役割：MACアドレスの長さ
- `#define MAX_CHARACTERS_NUMBER`
  - 役割：受信または送信する最大文字数
- `#define BAUD 115200`
  - 役割：シリアルポートのボーレートを設定する
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - 役割：私のXIAO ESP32S3のMACアドレスを保存している
  - 補足：これらは私のMACアドレスであり、書き込むことはできないことに注意してください！
- `NO_PMK_KEY`
  - 役割：暗号化なしでデバイスをペアリングすることを選択する

### パート3. XIAO ESP32C6 受信機コード

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

#### 解決 Part3 コード

インクルードライブラリ

- `#include "WiFi.h"`
- `#include "esp_now.h"`

コア関数

- `espnow_init()`  
  - 役割：ESPNOW機能を初期化する
  - 戻り値：初期化成功：[ESP_OK] 失敗：[ESP_FAIL]
- `espnow_deinit()`
  - 役割：ESPNOW機能を非初期化し、ペアリングされたデバイスに関連するすべての情報が削除される
  - 戻り値：初期化成功：[ESP_OK]
- `Receiver_MACAddress_requir()`  
  - 役割：WiFiモードをSTAに設定し、MACアドレスを取得してシリアルポートに出力する
- `ReceiverXIAOC6_Send_Data()`
  - 役割：特定のメッセージを送信する
- `ReceiverXIAOC6_Recive_Data_cb()`
  - 役割：これはコールバック関数で、実行時に印刷されたメッセージが正常に配信されたかどうかと、どのMACアドレス宛かを確認する
- `Association_SenderXIAOS3_peer()`
  - 役割：XIAO ESP32S3がメッセージを送信するためのチャンネルノードを追加する
- `ReceiverXIAOC6_Send_Data_cb()`
  - 役割：これはコールバック関数で、実行時に印刷されたメッセージが正常に配信されたかどうかと、どのMACアドレス宛かを確認する
- `esp_now_register_send_cb()`
  - 役割：MACレイヤーに送信されたかどうかを確認するコールバック関数を登録する
  - 戻り値：MACレイヤーがデータを正常に受信：[ESP_NOW_SEND_SUCCESS] それ以外：[ESP_NOW_SEND_FAIL]
- `esp_now_register_recv_cb()`
  - 役割：MACレイヤーに送信されたかどうかを確認するコールバック関数を登録する
  - 戻り値：MACレイヤーがデータを正常に受信：[ESP_NOW_SEND_SUCCESS] それ以外：[ESP_NOW_SEND_FAIL]
- `NO_PMK_KEY`
  - 役割：暗号化なしでデバイスをペアリングすることを選択する

デフォルト変数

- `#define ESPNOW_WIFI_CHANNE`
  - 役割：送信者と受信者が位置するチャンネル
- `#define MAX_ESP_NOW_MAC_LEN`
  - 役割：受信者MACアドレスの長さ
- `#define MAX_CHARACTERS_NUMBER`
  - 役割：受信または送信する最大文字数
- `#define BAUD 115200`
  - 役割：シリアルポートのボーレートを設定する
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - 役割：私のXIAO ESP32S3のMACアドレスを保存している
  - 補足：これらは私のMACアドレスであり、書き込むことはできないことに注意してください！
- `NO_PMK_KEY`
  - 役割：暗号化なしでデバイスをペアリングすることを選択する

## デモレンダリング

以下はESPNOWを使用したIXAO ESP32通信の結果です

#### 送信者 XIAO ESP32S3 結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/121.png" style={{width:600, height:'auto'}}/></div>

#### 受信者 XIAO ESP32C3 結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/122.png" style={{width:600, height:'auto'}}/></div>

#### 受信者 XIAO ESP32C6 結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/123.png" style={{width:600, height:'auto'}}/></div>

## ESPNOWの概要

低消費電力：

- Wi-Fiに接続することなく通信できるバッテリー駆動デバイスに適している。

高速接続：

- デバイスは複雑なペアリングプロセスを必要とせずに迅速に接続を確立できる。

多対多通信：

- 複数のデバイス間の通信をサポートし、1つのデバイスが複数のデバイスにデータを送信できる。

セキュリティ：

- 暗号化機能をサポートし、データ伝送のセキュリティを確保する。

短距離通信：

- 通常、短距離（数十メートル）のワイヤレス通信に使用される。

## トラブルシューティング

### 質問 1 : 接続できない、プログラムはエラーを報告しない

- XIAO ESP32 の MAC アドレスが正しいかどうか確認してください
- 接続している XIAO ESP32 の Wi-Fi チャンネルが同じかどうか確認してください
- XIAO ESP32 をリセットし、シリアルモニターを再度開いてください

### 質問 2 : メッセージを受信したが、不完全

- 送信者と受信者の両方を検出する際、構造体メンバーに類似性があります

## リソース

- **[Espressif 公式ドキュメント]** [ESPRESSIF ESP-IDF ESP-NOW](https://docs.espressif.com/projects/esp-idf/zh_CN/stable/esp32/api-reference/network/esp_now.html?highlight=espnow#esp-now)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
