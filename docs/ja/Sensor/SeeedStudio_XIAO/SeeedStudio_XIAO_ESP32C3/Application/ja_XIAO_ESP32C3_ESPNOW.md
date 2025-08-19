---
description: XIAO ESP32S3/XIAO ESP32C3/XIAO ESP32C6 を使用して ESP-NOW プロトコルで通信を行う
title: XIAO ESP32 シリーズでの ESP-NOW プロトコル
keywords:
- ESPNOW
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png
slug: /ja/xiao_esp32c3_espnow
last_update:
  date: 05/15/2025
  author: Jason
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO シリーズで ESP-NOW プロトコルを開始する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/126.png" style={{width:1100, height:'auto'}}/></div>
<br />

この Wiki では、ESP-NOW プロトコルとは何かを説明し、XIAO ESP32 シリーズを使用してこのプロトコルで通信する方法を学びます。このプロセスは非常に簡単です。XIAO ESP32 シリーズで ESP-NOW プロトコルを利用できるようにするために、C6/C3/S3 の 3 種類の XIAO ESP32 を用意して通信を行います。それでは、この旅を始めましょう！

ちなみに、このボードを手に入れたばかりの場合は、以下のリンクをクリックしてください。使い始める方法が記載されています。
- [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/)
- [Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/ja/xiao_esp32c3_getting_started/)
- [Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/)

## ESP-NOW プロトコルとは？

公式の定義によると、ESP-NOW は espressif によって定義されたワイヤレス通信プロトコルであり、ルーターを必要とせずにスマートデバイスを直接、高速、低消費電力で制御することを可能にします。Wi-Fi や Bluetooth LE と共存でき、Lexin ESP8266、ESP32、ESP32-S、ESP32-C などの複数の SoC シリーズをサポートしています。ESP-NOW は、スマート家電、リモートコントロール、センサーなどの分野で広く使用されています。

以下の特徴があります：
- MAC アドレス接続方式により、ネットワーク条件なしで迅速にペアリングが可能で、デバイスを 1 対多、1 対 1、多対 1、多対多の方法で接続できます。
- ESP-NOW はデータリンク層に基づくワイヤレス通信プロトコルであり、5 層 OSI 上位プロトコルを 1 層に簡略化し、パケットヘッダーを追加したり、層ごとに分解する必要がありません。これにより、ネットワーク混雑時のパケットロスによる遅延やラグを大幅に軽減し、応答速度が向上します。

Wi-Fi や Bluetooth と比較して：
- Wi-Fi：ESP-NOW はデバイス間のポイントツーポイント通信をサポートしているため、消費電力が低く、伝送速度が速く、通信距離も長いです。
- Bluetooth：ESP-NOW はペアリングプロセスを必要としないため、よりシンプルで使いやすく、消費電力が低く、伝送速度が速いです。

ただし、ESP-NOW は高速、信頼性、低消費電力、ポイントツーポイント通信が必要なアプリケーションシナリオに適しており、Bluetooth や Wi-Fi は複雑なネットワーク環境や多数のデバイスが存在するシナリオに適しています。

## ハードウェア準備

このプロジェクトでは、一部の人が XIAO ESP32S3、XIAO ESP32C3、または XIAO ESP32C6 のいずれかしか持っていない可能性を考慮して、ESP-NOW 通信をよりよく学べるように、3 種類の XIAO ESP32 モデル（XIAO ESP32S3、XIAO ESP32C3、XIAO ESP32C6）を使用して相互に通信します。以下のコードを少し変更するだけで、上記の 2 つまたは 3 つのモデルを使用して実際に操作することができます。それでは、以下のコードがどのように実装されているかを見てみましょう。始めましょう！

まだ XIAO ESP32 シリーズのいずれか 2 つをお持ちでない場合は、以下の購入リンクをご覧ください。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 機能の実現

まず、コードの一般的なフレームワークを理解しましょう。この例では、XIAO ESP32S3、XIAO ESP32C3、XIAO ESP32C6 の3つのESP32ボードを使用しています。XIAO ESP32S3は送信機として、XIAO ESP32C6とXIAO ESP32C3は受信機として機能します。もちろん、これはこのコード内での役割の割り当てに過ぎません。以下の説明を通じて、受信機や送信機の役割を変更、追加、または削除するのは非常に簡単になります。それでは始めましょう！

### パート1. XIAO ESP32S3 送信機コード

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

// XIAO ESP32シリーズのMACアドレスを入力する必要があります。直接コピーはできません!!!!
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
  Serial.print("送信ステータス:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "送信成功" : "送信失敗");
  Serial.println("");
}

void Association_ReceiverXIAOC3_peer(){
  Serial.println("XIAOC3のピアを関連付けようとしています...");
  peerInfo.channel = ESPNOW_WIFI_CHANNEL;
  peerInfo.encrypt = NO_PMK_KEY;

  memcpy(peerInfo.peer_addr, Receiver_XIAOC3_MAC_Address, 6);
  esp_err_t addPressStatus = esp_now_add_peer(&peerInfo);
  if (addPressStatus != ESP_OK)
  {
    Serial.print("ピアの追加に失敗しました");
    Serial.println(addPressStatus);
  }else
  {
    Serial.println("ピアの追加に成功しました");
  }
}

void Association_ReceiverXIAOC6_peer(){
  Serial.println("XIAOC6のピアを関連付けようとしています...");
  peerInfo1.channel = ESPNOW_WIFI_CHANNEL;
  peerInfo1.encrypt = NO_PMK_KEY;

  memcpy(peerInfo1.peer_addr, Receiver_XIAOC6_MAC_Address, 6);
  esp_err_t addPressStatus = esp_now_add_peer(&peerInfo1);
  if (addPressStatus != ESP_OK)
  {
    Serial.print("ピアの追加に失敗しました");
    Serial.println(addPressStatus);
  }else
  {
    Serial.println("ピアの追加に成功しました");
  }
}

void SenderXIAOS3_Send_Data(){
  
  strcpy(Personal_XIAOC3_Information.device, "XIAOS3"); 
  strcpy(Personal_XIAOC3_Information.Trag, "こんにちは、私は送信者です"); 

  strcpy(Personal_XIAOC6_Information.device, "XIAOS3"); 
  strcpy(Personal_XIAOC6_Information.Trag, "こんにちは、私は送信者です"); 

  esp_err_t XIAOS3_RECEIVER_INFORATION_data1 = esp_now_send(Receiver_XIAOC3_MAC_Address, (uint8_t *)&Personal_XIAOC3_Information, sizeof(message_types));
  esp_err_t XIAOS3_RECEIVER_INFORATION_data2 = esp_now_send(Receiver_XIAOC6_MAC_Address, (uint8_t *)&Personal_XIAOC6_Information, sizeof(message_types));

  if (XIAOS3_RECEIVER_INFORATION_data1 == ESP_OK || XIAOS3_RECEIVER_INFORATION_data2 == ESP_OK)
  {
    Serial.println("送信成功: XIAOS3_RECEIVER_INFORATION_data1 と XIAOS3_RECEIVER_INFORATION_data2");
  }
  delay(4000);
}

void ReceiverXIAOC3_Recive_Data_cb(const esp_now_recv_info *info, const uint8_t *incomingData, int len) {
  memcpy(&XIAOC3_RECEIVER_INFORATION, incomingData, sizeof(XIAOC3_RECEIVER_INFORATION));
  Serial.print("受信バイト数: ");
  Serial.println(len);
  Serial.print("受信デバイス: ");
  Serial.println(XIAOC3_RECEIVER_INFORATION.Reveiver_device);
  Serial.print("受信メッセージ: ");
  Serial.println(XIAOC3_RECEIVER_INFORATION.Reveiver_Trag);
  Serial.println();
}

void ReceiverXIAOC6_Recive_Data_cb(const esp_now_recv_info *info, const uint8_t *incomingData, int len) {
  memcpy(&XIAOC6_RECEIVER_INFORATION, incomingData, sizeof(XIAOC6_RECEIVER_INFORATION));
  Serial.print("受信バイト数: ");
  Serial.println(len);
  Serial.print("受信デバイス: ");
  Serial.println(XIAOC6_RECEIVER_INFORATION.Reveiver_device);
  Serial.print("受信メッセージ: ");
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
    Serial.println("ESP-NOWの初期化に成功しました！");
  }else
  {
    Serial.println("ESP-NOWの初期化に失敗しました");
  }
}

void espnow_deinit(){
  XIAO_status espnow_sign = esp_now_deinit();
  if(espnow_sign == ESP_OK){
    Serial.println("ESP-NOWの終了に成功しました！");
  }else
  {
    Serial.println("ESP-NOWの終了に失敗しました！");
  }
}
```

#### 解像度 Part1 コード

インクルードするライブラリ
 - `#include "WiFi.h"`
 - `#include "esp_now.h"`

コア関数
- `espnow_init()`  
  - 役割 : ESPNOW機能を初期化する
  - 戻り値 : 初期化成功 : [ESP_OK] 失敗 : [ESP_FAIL]
- `espnow_deinit()`
  - 役割 : ESPNOW機能を非初期化する。ペアリングされたデバイスに関連するすべての情報が削除される
  - 戻り値 : 初期化成功 : [ESP_OK]
- `SenderXIAOS3_MACAddress_Requir()`  
  - 役割 : WiFiモードをSTAに設定し、MACアドレスを取得してシリアルポートに出力する
- `SenderXIAOS3_Send_Data()` 
  - 役割 : 特定のメッセージを送信する
- `SenderXIAOS3_Send_Data_cb()` 
  - 役割 : コールバック関数であり、メッセージが正常に送信されたか、どのMACアドレスに送信されたかを確認する
- `Association_ReceiverXIAOC3_peer() and Association_ReceiverXIAOC6_peer` 
  - 役割 : ピアノードを追加する。受信者が増える場合はノードを作成し、送信者と受信者に一致するメッセージを書く
- `esp_now_register_send_cb()` 
  - 役割 : コールバック関数を登録し、MAC層に送信されたかどうかを確認する
  - 戻り値 : MAC層がデータを正常に受信 : [ESP_NOW_SEND_SUCCESS] それ以外 : [ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Recive_Data_cb()`
 - 役割 : 送信および受信データからのコールバック関数を受け入れる
- `ReceiverXIAOC6_Recive_Data_cb()`
 - 役割 : 送信および受信データからのコールバック関数を受け入れる
- `esp_now_register_recv_cb()` 
  - 役割 : コールバック関数を登録し、MAC層に送信されたかどうかを確認する
  - 戻り値 : MAC層がデータを正常に受信 : [ESP_NOW_SEND_SUCCESS] それ以外 : [ESP_NOW_SEND_FAIL]

デフォルト変数
- `#define ESPNOW_WIFI_CHANNE` 
  - 役割 : 送信者と受信者が位置するチャンネル
- `#define MAX_ESP_NOW_MAC_LEN` 
  - 役割 : MACアドレスの長さ
- `#define MAX_CHARACTERS_NUMBER` 
  - 役割 : 受信または送信可能な最大文字数
- `#define BAUD 115200`
  - 役割 : シリアルポートのボーレートを設定する
- `static uint8_t Receiver_XIAOC3_MAC_Address[MAX_ESP_NOW_MAC_LEN] and static uint8_t Receiver_XIAOC6_MAC_Address`
  - 役割 : XIAO ESP32C3とXIAO ESP32C6のMACアドレスを保存する。これらは受信者として機能する。
  - 補足 : これらは私のMACアドレスであり、書き換えることはできない。
- `NO_PMK_KEY`
  - 役割 : 暗号化なしでデバイスをペアリングすることを選択する

### Part 2. XIAO ESP32C3 受信者コード

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

// あなたのXIAO ESP32シリーズのMACアドレスを入力する必要があります。直接コピーはできません!!!!
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
    Serial.println("ESP-NOWの初期化に成功しました！");
  }else
  {
    Serial.println("ESP-NOWの初期化に失敗しました");
  }
}

void espnow_deinit(){
  status espnow_sign = esp_now_deinit();
  if(espnow_sign == ESP_OK){
    Serial.println("ESP-NOWの非初期化に成功しました！");
  }else
  {
    Serial.println("ESP-NOWの非初期化に失敗しました！");
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
  Serial.print("受信したバイト数: ");
  Serial.println(len);
  Serial.print("送信者デバイス: ");
  Serial.println(XIAOS3_SENDER_INFORATION.Sender_device);
  Serial.print("送信者ターゲット: ");
  Serial.println(XIAOS3_SENDER_INFORATION.Sender_Trag);
  Serial.println();
}

void ReceiverXIAOC3_Send_Data_cb(const XIAO *mac_addr,esp_now_send_status_t status){
  char macStr[18];
  Serial.print("パケット送信先: ");
  snprintf(macStr, sizeof(macStr), "%02x:%02x:%02x:%02x:%02x:%02x",
           mac_addr[0], mac_addr[1], mac_addr[2], mac_addr[3], mac_addr[4], mac_addr[5]);
  Serial.println(macStr);
  delay(500);
  Serial.print("送信ステータス:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "送信成功" : "送信失敗");
    Serial.println("");
}

void ReceiverXIAOC3_Send_Data(){
  
  strcpy(XIAOC3_RECEIVER_INFORATION.Reveiver_device, "XIAOC3"); 
  strcpy(XIAOC3_RECEIVER_INFORATION.Reveiver_Trag, "受信しました"); 

  esp_err_t XIAOC3_RECEIVER_INFORATION_data1 = esp_now_send(XIAOS3_Sender_MAC_Address, (uint8_t *)&XIAOC3_RECEIVER_INFORATION, sizeof(receiver_meesage_types));

  if (XIAOC3_RECEIVER_INFORATION_data1 == ESP_OK)
  {
    Serial.println("送信成功: XIAOC3_RECEIVER_INFORATION_data1");
  }
  delay(4000);
}

void Association_SenderXIAOS3_peer(){
  Serial.println("XIAOC6のピアを関連付け中...");
  peerInfo_sender.channel = ESPNOW_WIFI_CHANNEL;
  peerInfo_sender.encrypt = NO_PMK_KEY;

  memcpy(peerInfo_sender.peer_addr, XIAOS3_Sender_MAC_Address, 6);
  esp_err_t addPressStatus = esp_now_add_peer(&peerInfo_sender);
  if (addPressStatus != ESP_OK)
  {
    Serial.print("ピアの追加に失敗しました");
    Serial.println(addPressStatus);
  }else
  {
    Serial.println("ピアの追加に成功しました");
  }
}
```

#### 解像度 Part2 コード

インクルードするライブラリ
- `#include "WiFi.h"`
- `#include "esp_now.h"`

コア関数
- `espnow_init()`  
  - 役割 : ESPNOW 機能を初期化する
  - 戻り値 : 初期化成功 : [ESP_OK] 失敗 : [ESP_FAIL]
- `espnow_deinit()`
  - 役割 : ESPNOW 機能を非初期化する。ペアリングされたデバイスに関連するすべての情報が削除される
  - 戻り値 : 初期化成功 : [ESP_OK]
- `Receiver_MACAddress_requir()`  
  - 役割 : WiFi モードを STA に設定し、MAC アドレスを取得してシリアルポートに出力する
- `ReceiverXIAOC3_Send_Data()` 
  - 役割 : 特定のメッセージを送信する
- `ReceiverXIAOC3_Recive_Data_cb()` 
  - 役割 : コールバック関数。メッセージが正常に送信されたか、どの MAC アドレスに送信されたかを確認する
- `Association_SenderXIAOS3_peer()` 
  - 役割 : XIAO ESP32S3 にメッセージを送信するためのチャネルノードを追加する
- `esp_now_register_send_cb()` 
  - 役割 : コールバック関数を登録し、MAC レイヤーに送信されたかどうかを確認する
  - 戻り値 : MAC レイヤーがデータを正常に受信 : [ESP_NOW_SEND_SUCCESS] それ以外 : [ESP_NOW_SEND_FAIL]
- `ReceiverXIAOC3_Send_Data_cb`
  - 役割 : コールバック関数。メッセージが正常に送信されたか、どの MAC アドレスに送信されたかを確認する
- `esp_now_register_recv_cb()` 
  - 役割 : コールバック関数を登録し、MAC レイヤーに送信されたかどうかを確認する
  - 戻り値 : MAC レイヤーがデータを正常に受信 : [ESP_NOW_SEND_SUCCESS] それ以外 : [ESP_NOW_SEND_FAIL]

デフォルト変数
- `#define ESPNOW_WIFI_CHANNE` 
  - 役割 : 送信者と受信者が存在するチャネル
- `#define MAX_ESP_NOW_MAC_LEN` 
  - 役割 : MAC アドレスの長さ
- `#define MAX_CHARACTERS_NUMBER` 
  - 役割 : 受信または送信可能な最大文字数
- `#define BAUD 115200`
  - 役割 : シリアルポートのボーレートを設定する
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - 役割 : XIAO ESP32S3 の MAC アドレスを格納する
  - 補足 : これらは私の MAC アドレスであり、書き換えはできません！
- `NO_PMK_KEY`
  - 役割 : 暗号化なしでデバイスをペアリングするオプション

### Part 3. XIAO ESP32C6 受信コード

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

// XIAO ESP32 シリーズの MAC を入力する必要があります。直接コピーはできません!!!!
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
    Serial.println("ESP-NOW の初期化に成功しました！");
  }else
  {
    Serial.println("ESP-NOW の初期化に失敗しました");
  }
}

void espnow_deinit(){
  status espnow_sign = esp_now_deinit();
  if(espnow_sign == ESP_OK){
    Serial.println("ESP-NOW の非初期化に成功しました！");
  }else
  {
    Serial.println("ESP-NOW の非初期化に失敗しました！");
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
  Serial.print("受信したバイト数: ");
  Serial.println(len);
  Serial.print("Sender_device: ");
  Serial.println(XIAOS3_SENDER_INFORATION.Sender_device);
  Serial.print("Sender_Trag: ");
  Serial.println(XIAOS3_SENDER_INFORATION.Sender_Trag);
  Serial.println();
}
void ReceiverXIAOC6_Send_Data_cb(const XIAO *mac_addr,esp_now_send_status_t status){
  char macStr[18];
  Serial.print("送信先: ");
  snprintf(macStr, sizeof(macStr), "%02x:%02x:%02x:%02x:%02x:%02x",
           mac_addr[0], mac_addr[1], mac_addr[2], mac_addr[3], mac_addr[4], mac_addr[5]);
  Serial.println(macStr);
  delay(500);
  Serial.print("送信ステータス:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "送信成功" : "送信失敗");
  Serial.println("");
}

void ReceiverXIAOC6_Send_Data(){
  
  strcpy(XIAOC6_RECEIVER_INFORATION.Reveiver_device, "XIAOC6"); 
  strcpy(XIAOC6_RECEIVER_INFORATION.Reveiver_Trag, "受信しました"); 

  esp_err_t XIAOC6_RECEIVER_INFORATION_data1 = esp_now_send(XIAOS3_Sender_MAC_Address, (uint8_t *)&XIAOC6_RECEIVER_INFORATION, sizeof(receiver_meesage_types));

  if (XIAOC6_RECEIVER_INFORATION_data1 == ESP_OK)
  {
    Serial.println("送信成功: XIAOC6_RECEIVER_INFORATION_data1");
  }
  delay(4000);
}

void Association_SenderXIAOS3_peer(){
  Serial.println("XIAOC6 のピアを関連付け中...");
  peerInfo_sender.channel = ESPNOW_WIFI_CHANNEL;
  peerInfo_sender.encrypt = NO_PMK_KEY;

  memcpy(peerInfo_sender.peer_addr, XIAOS3_Sender_MAC_Address, 6);
  esp_err_t addPressStatus = esp_now_add_peer(&peerInfo_sender);
  if (addPressStatus != ESP_OK)
  {
    Serial.print("ピアの追加に失敗しました");
    Serial.println(addPressStatus);
  }else
  {
    Serial.println("ピアの追加に成功しました");
  }
}
```

#### 解像度 Part3 コード

ライブラリのインクルード
- `#include "WiFi.h"`
- `#include "esp_now.h"`

コア関数
- `espnow_init()`  
  - 役割 : ESPNOW機能を初期化する
  - 戻り値 : 初期化成功 : [ESP_OK] 失敗 : [ESP_FAIL]
- `espnow_deinit()`
  - 役割 : ESPNOW機能を非初期化し、ペアリングされたデバイスに関連するすべての情報を削除する
  - 戻り値 : 初期化成功 : [ESP_OK]
- `Receiver_MACAddress_requir()`  
  - 役割 : WiFiモードをSTAに設定し、MACアドレスを取得してシリアルポートに出力する
- `ReceiverXIAOC6_Send_Data()` 
  - 役割 : 特定のメッセージを送信する
- `ReceiverXIAOC6_Recive_Data_cb()` 
  - 役割 : コールバック関数であり、実行時にメッセージが正常に送信されたか、どのMACアドレスに送信されたかを出力する
- `Association_SenderXIAOS3_peer()` 
  - 役割 : XIAO ESP32S3がメッセージを送信するためのチャネルノードを追加する
- `ReceiverXIAOC6_Send_Data_cb()`
  - 役割 : コールバック関数であり、実行時にメッセージが正常に送信されたか、どのMACアドレスに送信されたかを出力する
- `esp_now_register_send_cb()` 
  - 役割 : MAC層に送信されたかどうかを確認するコールバック関数を登録する
  - 戻り値 : MAC層がデータを正常に受信した場合:[ESP_NOW_SEND_SUCCESS] それ以外の場合:[ESP_NOW_SEND_FAIL]
- `esp_now_register_recv_cb()` 
  - 役割 : MAC層に送信されたかどうかを確認するコールバック関数を登録する
  - 戻り値 : MAC層がデータを正常に受信した場合:[ESP_NOW_SEND_SUCCESS] それ以外の場合:[ESP_NOW_SEND_FAIL]
- `NO_PMK_KEY`
  - 役割 : 暗号化なしでデバイスをペアリングすることを選択する

デフォルト変数
- `#define ESPNOW_WIFI_CHANNE` 
  - 役割 : 送信者と受信者が位置するチャネル
- `#define MAX_ESP_NOW_MAC_LEN` 
  - 役割 : 受信者のMACアドレスの長さ
- `#define MAX_CHARACTERS_NUMBER` 
  - 役割 : 受信または送信可能な最大文字数
- `#define BAUD 115200`
  - 役割 : シリアルポートのボーレートを設定する
- `static uint8_t XIAOS3_Sender_MAC_Address[MAX_ESP_NOW_MAC_LEN]`
  - 役割 : XIAO ESP32S3のMACアドレスを保存する
  - 補足 : これらは私のMACアドレスであり、書き換えはできません！
- `NO_PMK_KEY`
  - 役割 : 暗号化なしでデバイスをペアリングすることを選択する

## デモレンダリング

以下はESPNOWを使用したIXAO ESP32通信の結果です。

#### 送信者 XIAO ESP32S3 の結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/121.png" style={{width:600, height:'auto'}}/></div>

#### 受信者 XIAO ESP32C3 の結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/122.png" style={{width:600, height:'auto'}}/></div>

#### 受信者 XIAO ESP32C6 の結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/123.png" style={{width:600, height:'auto'}}/></div>

## ESPNOWの概要

低消費電力:
- Wi-Fiに接続せずに通信できるバッテリー駆動デバイスに適している。

迅速な接続:
- 複雑なペアリングプロセスを必要とせずにデバイスが迅速に接続を確立できる。

多対多通信:
- 複数のデバイス間の通信をサポートし、1つのデバイスが複数のデバイスにデータを送信できる。

セキュリティ:
- 暗号化機能をサポートし、データ送信のセキュリティを確保する。

短距離通信:
- 通常、短距離（数十メートル）の無線通信に使用される。

## トラブルシューティング

### 質問 1 : 接続できないが、プログラムはエラーを報告しない

- XIAO ESP32 の MAC アドレスが正しいかどうか確認してください。
- 接続している XIAO ESP32 の Wi-Fi チャンネルが同じかどうか確認してください。
- XIAO ESP32 をリセットし、シリアルモニターを再度開いてください。

### 質問 2 : メッセージを受信したが、不完全

- 送信側と受信側の両方を確認する際に、構造体メンバーに類似性がある場合があります。

## リソース

- **[Espressif 公式ドキュメント]** [ESPRESSIF ESP-IDF ESP-NOW](https://docs.espressif.com/projects/esp-idf/zh_CN/stable/esp32/api-reference/network/esp_now.html?highlight=espnow#esp-now)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>