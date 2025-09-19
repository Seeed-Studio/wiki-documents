---
description: Seeed Studio XIAO MG24でのBluetooth使用方法。
title: Seeed Studio XIAO MG24 Bluetooth使用方法
keywords:
- MG24
- xiao
- ble
- bluetooth
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/ble-cover.webp
slug: /ja/xiao_mg24_bluetooth
last_update:
  date: 02/8/2025
  author: Hugo
---

# Seeed Studio XIAO MG24でのBluetooth使用方法

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO MG24</th>
			<th>Seeed Studio XIAO MG24 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop0.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>

</div>

Seeed Studio XIAO MG24は、Bluetooth LE 5.3とBluetooth meshをサポートする堅牢な開発ボードで、ワイヤレス接続を必要とする幅広いIoTアプリケーションに理想的な選択肢です。優れたRF性能を活用して、XIAO MG24は様々な距離で信頼性の高い高速ワイヤレス通信を提供し、短距離および長距離アプリケーションの両方に対応する汎用的なソリューションとなっています。このチュートリアルでは、近くのBluetoothデバイスのスキャン方法、Bluetooth接続の確立方法、その接続を介したデータの送受信方法など、XIAO MG24のBluetooth機能の基本的な特徴を探求します。

## アンテナ切り替えの方法

Seeed Studio XIAO MG24には2つのアンテナオプションがあります：内蔵アンテナと外部アンテナです。利便性のために内蔵アンテナを使用することを選択でき、信号強度を向上させるために外部アンテナを選択することもできます。以下は2つのアンテナ間の切り替え方法です。

PB04は内蔵アンテナまたは外部アンテナの使用を選択するために使用されます。その前に、この機能をオンにするためにPB05をハイレベルに設定する必要があります。PB04がローレベルに設定されている場合は内蔵アンテナを使用し、ハイレベルに設定されている場合は外部アンテナを使用します。デフォルトはローレベルです。ハイレベルに設定したい場合は、以下のコードを参照してください。
```cpp
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup() {
  // turn on this antenna function
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> Use external antenna / LOW -> Use built-in antenna
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, HIGH);
```

## Bluetooth Low Energy (BLE) 使用方法

Bluetooth Low Energy（略称BLE）は、Bluetoothの省電力版です。BLEの主な用途は、少量のデータ（低帯域幅）の短距離伝送です。常時オンのBluetoothとは異なり、BLEは接続が開始される場合を除いて、常にスリープモードを維持します。

この特性により、BLEはコイン電池で動作し、定期的に少量のデータを交換する必要があるアプリケーションに適しています。例えば、BLEはヘルスケア、フィットネス、トラッキング、ビーコン、セキュリティ、ホームオートメーション業界で非常に有用です。

これにより、非常に低い電力消費を実現します。BLEはBluetooth（使用ケースによる）と比較して約100倍少ない電力を消費します。

XIAO MG24のBLE部分について、以下のセクションでその使用方法を紹介します。

- [基本的な概念](#some-fundamental-concepts) -- BLEプログラムの実行プロセスと思考を理解するために、BLEで頻繁に使用される可能性のある概念をまず理解します。
- [BLEスキャナー](#ble-scanner) -- このセクションでは、近くのBluetoothデバイスを検索し、シリアルモニターに出力する方法を説明します。
- [BLEサーバー/クライアント](#ble-serverclient) -- このセクションでは、XIAO MG24をサーバーおよびクライアントとして使用して、指定されたデータメッセージを送受信する方法を説明します。また、電話からXIAOへのメッセージの受信または送信にも使用します。
<!-- - [BLE Sensor Data Exchange](#ble-sensor-data-exchange) -- This is the last section of the full tutorial where we will go through a sensor example to explain how to send the sensor data through BLE. -->

### 基本的な概念

#### サーバーとクライアント

Bluetooth Low Energyには、サーバーとクライアントの2種類のデバイスがあります。XIAO MG24はクライアントまたはサーバーのいずれかとして動作できます。

サーバーはその存在をアドバタイズするため、他のデバイスによって発見でき、クライアントが読み取ることができるデータを含んでいます。クライアントは近くのデバイスをスキャンし、探しているサーバーを見つけると、接続を確立して受信データを待機します。これはポイントツーポイント通信と呼ばれます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/ble.png" style={{width:800, height:'auto'}}/></div>

#### 属性

属性は実際にはデータの一部です。各Bluetoothデバイスはサービスを提供するために使用され、サービスはデータの集合であり、この集合はデータベースと呼ぶことができます。データベース内の各エントリは属性です。そのため、ここでは属性をデータエントリと翻訳します。Bluetoothデバイスをテーブルとして想像でき、テーブル内の各行が属性です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

2つのBluetoothデバイスが接続を確立する際、通信方法を決定するプロトコルが必要です。GATT（Generic Attribute Profile）は、Bluetoothデバイス間でデータを送信する方法を定義するプロトコルです。

GATTプロトコルでは、デバイスの機能と特性は、サービス、キャラクタリスティック、ディスクリプターと呼ばれる構造に整理されます。サービスは、デバイスが提供する関連する機能と特徴のセットを表します。各サービスには複数のキャラクタリスティックを含めることができ、これらはセンサーデータや制御コマンドなど、サービスの特定の特性や動作を定義します。各キャラクタリスティックには一意の識別子と値があり、通信のために読み取りまたは書き込みが可能です。ディスクリプターは、キャラクタリスティック値の形式やアクセス権限など、キャラクタリスティックのメタデータを記述するために使用されます。

GATTプロトコルを使用することで、Bluetoothデバイスはセンサーデータの送信やリモートデバイスの制御など、さまざまなアプリケーションシナリオで通信できます。

#### BLEキャラクタリスティック

ATTは、属性プロトコルの正式名称です。最終的に、ATTはATTコマンドのグループ、つまりリクエストとレスポンスコマンドで構成されます。ATTはBluetoothヌルパケットの最上位層でもあり、つまりATTはBluetoothパケットを最も分析する場所です。

ATTコマンドは、正式にはATT PDU（Protocol Data Unit）として知られています。これには4つのカテゴリが含まれます：読み取り、書き込み、通知、指示。これらのコマンドは2つのタイプに分けることができます：レスポンスが必要な場合はリクエストが続き、逆にACKのみが必要でレスポンスが不要な場合はリクエストが続きません。

サービスとキャラクタリスティックはGATT層で定義されます。サービス側がサービスを提供し、サービスはデータであり、データは属性です。サービスとキャラクタリスティックはデータの論理的表現、またはユーザーが見ることができるデータが最終的にサービスとキャラクタリスティックに変換されます。

モバイルの観点から、サービスとキャラクタリスティックがどのように見えるかを見てみましょう。nRF Connectは、各パケットがどのように見えるべきかを非常に視覚的に示すアプリケーションです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

ご覧のように、Bluetooth仕様では、各特定のBluetoothアプリケーションは複数のサービスで構成され、各サービスは複数のキャラクタリスティックで構成されます。キャラクタリスティックは、UUID、プロパティ、値で構成されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

プロパティは、読み取り、書き込み、通知などをサポートするかどうかなど、キャラクタリスティックに対する操作のタイプと権限を記述するために使用されます。これはATT PDUに含まれる4つのカテゴリに似ています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

各サービス、キャラクタリスティック、ディスクリプターにはUUID（Universally Unique Identifier）があります。UUIDは一意の128ビット（16バイト）番号です。例えば：

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

[SIG (Bluetooth Special Interest Group)](https://www.bluetooth.com/specifications/gatt/services) で指定されているすべてのタイプ、サービス、プロファイルには短縮UUIDがあります。しかし、アプリケーションが独自のUUIDを必要とする場合は、この [UUID生成ウェブサイト](https://www.uuidgenerator.net/) を使用して生成できます。

### BLEスキャナー

XIAO MG24 BLEスキャナーの作成は簡単です。以下はスキャナーを作成するサンプルプログラムです。

```cpp
/*
   BLE scan example

   The example scans for other BLE devices and prints out the address, RSSI, channel and name for each found device.

   Find out more on the Silabs BLE API usage at: https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   This example only works with the 'BLE (Silabs)' protocol stack variant.

   Compatible boards:
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   Author: Tamas Jozsi (Silicon Labs)
 */
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup() {
  Serial.begin(115200);
}

void loop() {
  
}

static String get_complete_local_name_from_ble_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response);

/**************************************************************************/ /**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt) {
  static uint32_t scan_report_num = 0u;
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // This event is received when the BLE device has successfully booted
    case sl_bt_evt_system_boot_id:
      // Print a welcome message
      Serial.begin(115200);

      // turn on this antenna function
      pinMode(RF_SW_PW_PIN, OUTPUT); 
      digitalWrite(RF_SW_PW_PIN, HIGH);

      delay(100);
      // HIGH -> Use external antenna / LOW -> Use built-in antenna
      pinMode(RF_SW_PIN, OUTPUT); 
      digitalWrite(RF_SW_PIN, HIGH);

      Serial.println();
      Serial.println("Silicon Labs BLE scan example");
      Serial.println("BLE stack booted");
      // Start scanning for other BLE devices
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active,  // mode
                                        16,                              // interval (value * 0.625 ms)
                                        16);                             // window (value * 0.625 ms)
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("Started scanning...");
      break;

    // This event is received when we scan the advertisement of another BLE device
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      scan_report_num++;
      Serial.print(" -> #");
      Serial.print(scan_report_num);
      Serial.print(" | Address: ");
      for (int i = 5; i >= 0; i--) {
        Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
        if (i > 0) {
          Serial.print(":");
        }
      }
      Serial.print(" | RSSI: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.rssi);
      Serial.print(" dBm");
      Serial.print(" | Channel: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.channel);
      Serial.print(" | Name: ");
      Serial.println(get_complete_local_name_from_ble_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report)));
      break;

    // Default event handler
    default:
      Serial.print("BLE event: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************/ /**
 * Finds the complete local name in BLE advertisements
 *
 * @param[in] response BLE response event received from scanning
 *
 * @return The complete local name if found, "N/A" otherwise
 *****************************************************************************/
static String get_complete_local_name_from_ble_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response) {
  int i = 0;
  // Go through the response data
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // If the length exceeds the maximum possible device name length
    if (advertisement_length > 29) {
      continue;
    }

    // Type 0x09 = Complete Local Name, 0x08 Shortened Name
    // If the field type matches the Complete Local Name
    if (advertisement_type == 0x09) {
      // Copy the device name
      char device_name[advertisement_length + 1];
      memcpy(device_name, response->data.data + i + 2, advertisement_length);
      device_name[advertisement_length] = '\0';
      return String(device_name);
    }
    // Jump to next advertisement record
    i = i + advertisement_length + 1;
  }
  return "N/A";
}

#ifndef BLE_STACK_SILABS
#error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

:::tip
コンパイル前に「Tools > Protocol stack」で「BLE (Silabs)」を選択する必要があることに注意してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/tool_select.png" style={{width:800, height:'auto'}}/></div>
:::

これで XIAO MG24 マザーボードを選択してプログラムをアップロードできます。プログラムが正常に動作する場合は、シリアルモニターを開いてボーレートを 115200 に設定すると、以下の結果を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/scan_result.png" style={{width:700, height:'auto'}}/></div>

このプログラムは、スキャンされた Bluetooth デバイスの名前、MAC アドレス、チャンネル、信号を出力します。

#### プログラムの注釈

この例では、Silicon Labs BLE スタックを使用して近くの Bluetooth Low Energy (BLE) デバイスをスキャンし、発見された各デバイスのアドレス、RSSI（受信信号強度インジケーター）、チャンネル、名前を出力する方法を示しています。

コードは、BLE スタックによって生成されるさまざまな Bluetooth Low Energy (BLE) イベントを処理するイベントハンドラー関数 `sl_bt_on_event` を定義することから始まります。この関数は switch 文を使用して、BLE デバイスが起動したときや近くのデバイスからアドバタイズメントレポートを受信したときなど、イベントタイプを区別します。ブートイベントを受信すると、シリアル通信を初期化し、アンテナ制御用の GPIO ピンを設定し、指定されたパラメーターで BLE デバイスのスキャンを開始します。

スキャンプロセスが BLE デバイスからのアドバタイズメントレポートを検出すると、`sl_bt_evt_scanner_legacy_advertisement_report_id` ケースがトリガーされます。このケースでは、関数は検出された各デバイスのカウンターをインクリメントし、デバイスのアドレス、RSSI、チャンネル、ローカル名などの重要な情報を抽出します。ヘルパー関数 `get_complete_local_name_from_ble_advertisement` を利用してアドバタイズメントデータからデバイスの完全な名前を取得し、シリアル出力に出力します。

ヘルパー関数 `get_complete_local_name_from_ble_advertisement` は、アドバタイズメントデータを反復処理して完全なローカル名フィールドを見つけます。完全なローカル名に対応するタイプの各アドバタイズメントレコードをチェックし、文字列として返します。完全な名前が見つからない場合、関数は「N/A」を返します。この体系的なアプローチにより、アプリケーションは近くの BLE デバイスを効果的に発見して識別し、スキャンプロセス中に貴重な情報を提供できます。

### BLE サーバー/クライアント

前述のように、XIAO MG24 はサーバーとクライアントの両方として動作できます。サーバーとしてのプログラムとその使用方法を見てみましょう。以下のプログラムを XIAO にアップロードすると、サーバーとして動作し、XIAO に接続されたすべての Bluetooth デバイスに「Hello World」メッセージを送信します。

```cpp
//Server Code
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

bool notification_enabled = false;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.begin(115200);
  Serial.println("Silicon Labs BLE send hello world example");

  // turn on the antenna function
  pinMode(RF_SW_PW_PIN, OUTPUT);
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> Use external antenna / LOW -> Use built-in antenna
  pinMode(RF_SW_PIN, OUTPUT);
  digitalWrite(RF_SW_PIN, LOW);
}

void loop() {
  if (notification_enabled) {
    // Send a notification every two seconds with the message 'hello world'
    send_helloworld_notification();
  }
  delay(2000);
}

static void ble_initialize_gatt_db();
static void ble_start_advertising();

static const uint8_t advertised_name[] = "XIAO_MG24 Server";  // Name of your BLE device
static uint16_t gattdb_session_id;
static uint16_t generic_access_service_handle;
static uint16_t name_characteristic_handle;
static uint16_t my_service_handle;
static uint16_t led_control_characteristic_handle;
static uint16_t notify_characteristic_handle;

/**************************************************************************/ /**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt) {
  switch (SL_BT_MSG_ID(evt->header)) {
    // -------------------------------
    // This event indicates the device has started and the radio is ready.
    // Do not call any stack command before receiving this boot event!
    case sl_bt_evt_system_boot_id:
      {
        Serial.println("BLE stack booted");

        // Initialize the application specific GATT table
        ble_initialize_gatt_db();

        // Start advertising
        ble_start_advertising();
        Serial.println("BLE advertisement started");
      }
      break;

    // -------------------------------
    // This event indicates that a new connection was opened
    case sl_bt_evt_connection_opened_id:
      Serial.println("BLE connection opened");
      break;

    // -------------------------------
    // This event indicates that a connection was closed
    case sl_bt_evt_connection_closed_id:
      Serial.println("BLE connection closed");
      // Restart the advertisement
      ble_start_advertising();
      Serial.println("BLE advertisement restarted");
      break;

    // -------------------------------
    // This event indicates that the value of an attribute in the local GATT
    // database was changed by a remote GATT client
    case sl_bt_evt_gatt_server_attribute_value_id:
      // Check if the changed characteristic is the LED control
      if (led_control_characteristic_handle == evt->data.evt_gatt_server_attribute_value.attribute) {
        Serial.println("LED control characteristic data received");
        // Check the length of the received data
        if (evt->data.evt_gatt_server_attribute_value.value.len == 0) {
          break;
        }
        // Get the received byte
        uint8_t received_data = evt->data.evt_gatt_server_attribute_value.value.data[0];
        // Turn the LED on/off according to the received data
        // If we receive a '0' - turn the LED off
        // If we receive a '1' - turn the LED on
        if (received_data == 0x00) {
          digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
          Serial.println("LED off");
        } else if (received_data == 0x01) {
          Serial.println("LED on");
          digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
        }
      }
      break;

    // -------------------------------
    // This event is received when a GATT characteristic status changes
    case sl_bt_evt_gatt_server_characteristic_status_id:
      // If the 'Notify' characteristic has been changed
      if (evt->data.evt_gatt_server_characteristic_status.characteristic == notify_characteristic_handle) {
        // The client just enabled the notification - send notification of the current state
        if (evt->data.evt_gatt_server_characteristic_status.client_config_flags & sl_bt_gatt_notification) {
          Serial.println("change notification enabled");
          notification_enabled = true;
        } else {
          Serial.println("change notification disabled");
          notification_enabled = false;
        }
      }
      break;

    // -------------------------------
    // Default event handler
    default:
      break;
  }
}

/**************************************************************************/ /**
 * Sends a BLE notification the the client if notifications are enabled 
 *****************************************************************************/
static void send_helloworld_notification() {
  uint8_t str[12] = "Hello World";
  sl_status_t sc = sl_bt_gatt_server_notify_all(notify_characteristic_handle,
                                                sizeof(str),
                                                (const uint8_t *)&str);
  if (sc == SL_STATUS_OK) {
    Serial.println("Send notification!");
  }
}

/**************************************************************************/ /**
 * Starts BLE advertisement
 * Initializes advertising if it's called for the first time
 *****************************************************************************/
static void ble_start_advertising() {
  static uint8_t advertising_set_handle = 0xff;
  static bool init = true;
  sl_status_t sc;

  if (init) {
    // Create an advertising set
    sc = sl_bt_advertiser_create_set(&advertising_set_handle);
    app_assert_status(sc);

    // Set advertising interval to 100ms
    sc = sl_bt_advertiser_set_timing(
      advertising_set_handle,
      160,  // minimum advertisement interval (milliseconds * 1.6)
      160,  // maximum advertisement interval (milliseconds * 1.6)
      0,    // advertisement duration
      0);   // maximum number of advertisement events
    app_assert_status(sc);

    init = false;
  }

  // Generate data for advertising
  sc = sl_bt_legacy_advertiser_generate_data(advertising_set_handle, sl_bt_advertiser_general_discoverable);
  app_assert_status(sc);

  // Start advertising and enable connections
  sc = sl_bt_legacy_advertiser_start(advertising_set_handle, sl_bt_advertiser_connectable_scannable);
  app_assert_status(sc);
}

/**************************************************************************/ /**
 * Initializes the GATT database
 * Creates a new GATT session and adds certain services and characteristics
 *****************************************************************************/
static void ble_initialize_gatt_db() {
  sl_status_t sc;
  // Create a new GATT database
  sc = sl_bt_gattdb_new_session(&gattdb_session_id);
  app_assert_status(sc);

  // Add the Generic Access service to the GATT DB
  const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(generic_access_service_uuid),
                                generic_access_service_uuid,
                                &generic_access_service_handle);
  app_assert_status(sc);

  // Add the Device Name characteristic to the Generic Access service
  // The value of the Device Name characteristic will be advertised
  const sl_bt_uuid_16_t device_name_characteristic_uuid = { .data = { 0x00, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              generic_access_service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0x00,
                                              0x00,
                                              device_name_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(advertised_name) - 1,
                                              sizeof(advertised_name) - 1,
                                              advertised_name,
                                              &name_characteristic_handle);
  app_assert_status(sc);

  // Start the Generic Access service
  sc = sl_bt_gattdb_start_service(gattdb_session_id, generic_access_service_handle);
  app_assert_status(sc);

  // Add my BLE service to the GATT DB
  // UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
  const uuid_128 my_service_uuid = {
    .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
  };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(my_service_uuid),
                                my_service_uuid.data,
                                &my_service_handle);
  app_assert_status(sc);

  // Add the 'LED Control' characteristic to the Blinky service
  // UUID: 5b026510-4088-c297-46d8-be6c736a087a
  const uuid_128 led_control_characteristic_uuid = {
    .data = { 0x7a, 0x08, 0x6a, 0x73, 0x6c, 0xbe, 0xd8, 0x46, 0x97, 0xc2, 0x88, 0x40, 0x10, 0x65, 0x02, 0x5b }
  };
  uint8_t led_char_init_value = 0;
  sc = sl_bt_gattdb_add_uuid128_characteristic(gattdb_session_id,
                                               my_service_handle,
                                               SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE,
                                               0x00,
                                               0x00,
                                               led_control_characteristic_uuid,
                                               sl_bt_gattdb_fixed_length_value,
                                               1,                            // max length
                                               sizeof(led_char_init_value),  // initial value length
                                               &led_char_init_value,         // initial value
                                               &led_control_characteristic_handle);

  // Start the Blinky service
  sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
  app_assert_status(sc);

  // Add the 'Notify' characteristic to my BLE service
  // UUID: 61a885a4-41c3-60d0-9a53-6d652a70d29c
  const uuid_128 btn_report_characteristic_uuid = {
    .data = { 0x9c, 0xd2, 0x70, 0x2a, 0x65, 0x6d, 0x53, 0x9a, 0xd0, 0x60, 0xc3, 0x41, 0xa4, 0x85, 0xa8, 0x61 }
  };
  uint8_t notify_char_init_value = 0;
  sc = sl_bt_gattdb_add_uuid128_characteristic(gattdb_session_id,
                                               my_service_handle,
                                               SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_NOTIFY,
                                               0x00,
                                               0x00,
                                               btn_report_characteristic_uuid,
                                               sl_bt_gattdb_fixed_length_value,
                                               1,                               // max length
                                               sizeof(notify_char_init_value),  // initial value length
                                               &notify_char_init_value,         // initial value
                                               &notify_characteristic_handle);

  // Start my BLE service
  sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
  app_assert_status(sc);

  // Commit the GATT DB changes
  sc = sl_bt_gattdb_commit(gattdb_session_id);
  app_assert_status(sc);
}

#ifndef BLE_STACK_SILABS
#error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

一方で、主要なモバイルアプリストアで **nRF Connect** アプリを検索してダウンロードできます。このアプリを使用すると、スマートフォンでBluetoothデバイスを検索して接続できます。

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

ソフトウェアをダウンロードした後、以下に示す手順に従ってXIAO_MG24を検索して接続すると、アドバタイズされた「Hello World」が表示されます。

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-1.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-2.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-3.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-4.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
</table>


別のXIAO MG24をクライアントとして使用してサーバーからメッセージを受信したい場合は、クライアント用XIAOに対して以下の手順を使用できます。

```cpp
// Client Code
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

// Connection states
enum conn_state_t {
  ST_BOOT,
  ST_SCAN,
  ST_CONNECT,
  ST_SERVICE_DISCOVER,
  ST_CHAR_DISCOVER,
  ST_READY
};

conn_state_t connection_state = ST_BOOT;
uint8_t connection_handle = __UINT8_MAX__;
uint32_t blinky_service_handle = __UINT32_MAX__;
uint16_t led_control_char_handle = __UINT16_MAX__;
bool gatt_procedure_in_progress = false;

// If there's no built-in button set a pin where a button is connected
#ifndef BTN_BUILTIN
#define BTN_BUILTIN D0
#endif

void setup() {
  // Set the built-in LED as output
  pinMode(LED_BUILTIN, OUTPUT);
  // Turn the built-in LED off
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  // Set the built-in button as input
  pinMode(BTN_BUILTIN, INPUT);
  // Start Serial
  Serial.begin(115200);

  // turn on the antenna function
  pinMode(RF_SW_PW_PIN, OUTPUT);
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> Use external antenna / LOW -> Use built-in antenna
  pinMode(RF_SW_PIN, OUTPUT);
  digitalWrite(RF_SW_PIN, LOW);
}

void loop() {
  // Static variable for remembering the previous state of the button
  static uint8_t btn_state_prev = LOW;
  // If the connection is fully established and we don't have any ongoing GATT procedures
  if (connection_state == ST_READY && !gatt_procedure_in_progress) {
    // Read the current state of the button
    uint8_t btn_state = digitalRead(BTN_BUILTIN);
    // If the current state is different than the previous state
    if (btn_state_prev != btn_state) {
      // Update the previous state
      btn_state_prev = btn_state;
      // Invert the state (the SL board buttons give a 0 when pressed and 1 when released)
      uint8_t btn_state_inv = !btn_state;
      // Log the state change
      Serial.print("Sending button state: ");
      Serial.println(btn_state_inv);
      // Send the new state over BLE by writing the other device's LED Control characteristic
      sl_status_t sc = sl_bt_gatt_write_characteristic_value(connection_handle, led_control_char_handle, sizeof(uint8_t), &btn_state_inv);
      app_assert_status(sc);
      gatt_procedure_in_progress = true;
    }
  }
}

// Blinky service
// UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
const uuid_128 blinky_service_uuid = {
  .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
};

// LED Control characteristic
// UUID: 5b026510-4088-c297-46d8-be6c736a087a
const uuid_128 led_control_characteristic_uuid = {
  .data = { 0x7a, 0x08, 0x6a, 0x73, 0x6c, 0xbe, 0xd8, 0x46, 0x97, 0xc2, 0x88, 0x40, 0x10, 0x65, 0x02, 0x5b }
};
const uint8_t advertised_name[] = "XIAO_MG24 Server";

static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response);

/**************************************************************************/ /**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt) {
  static uint32_t scan_report_num = 0u;
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // This event is received when the BLE device has successfully booted
    case sl_bt_evt_system_boot_id:
      // Print a welcome message
      Serial.println();
      Serial.println("Silicon Labs BLE light switch client example");
      Serial.println("BLE stack booted");
      // Start scanning for other BLE devices
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active, 16, 16);
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("Started scanning...");
      connection_state = ST_SCAN;
      break;

    // This event is received when we scan the advertisement of another BLE device
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      scan_report_num++;
      Serial.print(" -> #");
      Serial.print(scan_report_num);
      Serial.print(" | Address: ");
      for (int i = 5; i >= 0; i--) {
        Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
        if (i > 0) {
          Serial.print(":");
        }
      }
      Serial.print(" | RSSI: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.rssi);
      Serial.print(" dBm");
      Serial.print(" | Channel: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.channel);
      Serial.print(" | Name: ");
      Serial.println(find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report)));

      // If we find the other devices's name
      if (find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report))) {
        Serial.println("Target device found!");
        Serial.print("Forming a connection to ");
        for (int i = 5; i >= 0; i--) {
          Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
          if (i > 0) {
            Serial.print(":");
          }
        }
        Serial.println(" ");

        // Stop scanning
        sc = sl_bt_scanner_stop();
        app_assert_status(sc);
        // Connect to the device
        sc = sl_bt_connection_open(evt->data.evt_scanner_legacy_advertisement_report.address,
                                   evt->data.evt_scanner_legacy_advertisement_report.address_type,
                                   sl_bt_gap_phy_1m,
                                   NULL);
        // app_assert_status(sc);
        connection_state = ST_CONNECT;

        Serial.println("We are now connected to the BLE Server");
      }
      break;

    // This event is received when a BLE connection has been opened
    case sl_bt_evt_connection_opened_id:
      Serial.println("Connection opened");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      connection_handle = evt->data.evt_connection_opened.connection;
      // Discover Health Thermometer service on the connected device
      sc = sl_bt_gatt_discover_primary_services_by_uuid(connection_handle,
                                                        sizeof(blinky_service_uuid),
                                                        blinky_service_uuid.data);
      app_assert_status(sc);
      gatt_procedure_in_progress = true;
      connection_state = ST_SERVICE_DISCOVER;
      break;

    // This event is received when a BLE connection has been closed
    case sl_bt_evt_connection_closed_id:
      Serial.println("Connection closed");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      connection_handle = __UINT8_MAX__;
      // Restart scanning
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("Restarted scanning...");
      connection_state = ST_SCAN;
      break;

    // This event is generated when a new service is discovered
    case sl_bt_evt_gatt_service_id:
      Serial.println("GATT service discovered");
      // Store the handle of the discovered Thermometer Service
      blinky_service_handle = evt->data.evt_gatt_service.service;
      break;

    // This event is generated when a new characteristic is discovered
    case sl_bt_evt_gatt_characteristic_id:
      Serial.println("GATT charactersitic discovered");
      // Store the handle of the discovered Temperature Measurement characteristic
      led_control_char_handle = evt->data.evt_gatt_characteristic.characteristic;
      break;

    // This event is received when a GATT procedure completes
    case sl_bt_evt_gatt_procedure_completed_id:
      Serial.println("GATT procedure completed");
      gatt_procedure_in_progress = false;

      if (connection_state == ST_SERVICE_DISCOVER) {
        Serial.println("GATT service discovery finished");
        // Discover thermometer characteristic on the connected device
        sc = sl_bt_gatt_discover_characteristics_by_uuid(evt->data.evt_gatt_procedure_completed.connection,
                                                         blinky_service_handle,
                                                         sizeof(led_control_characteristic_uuid.data),
                                                         led_control_characteristic_uuid.data);
        app_assert_status(sc);
        gatt_procedure_in_progress = true;
        connection_state = ST_CHAR_DISCOVER;
        break;
      }

      if (connection_state == ST_CHAR_DISCOVER) {
        Serial.println("GATT characteristic discovery finished");
        connection_state = ST_READY;
        break;
      }
      break;

    // Default event handler
    default:
      Serial.print("BLE event: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************/ /**
 * Finds a configured name in BLE advertisements
 *
 * @param[in] response BLE response event received from scanning
 *
 * @return true if found, false otherwise
 *****************************************************************************/
static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response) {
  int i = 0;
  bool found = false;

  // Go through the response data
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // Type 0x09 = Complete Local Name, 0x08 Shortened Name
    // If the field type matches the Complete Local Name
    if (advertisement_type == 0x09) {
      // Check if device name matches
      if (memcmp(response->data.data + i + 2, advertised_name, strlen((const char*)advertised_name)) == 0) {
        found = true;
        break;
      }
    }
    // Jump to next advertisement record
    i = i + advertisement_length + 1;
  }
  return found;
}

#ifndef BLE_STACK_SILABS
#error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

上記のプログラムはXIAOをクライアントにして、近くのBluetoothデバイスを検索します。BluetoothデバイスのUUIDが提供したUUIDと一致すると、そのデバイスに接続してその特性値を取得します。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEClient_result.png" style={{width:800, height:'auto'}}/></div>


#### プログラムの注釈

BLEサーバーのサンプルコードがどのように動作するかを簡単に見てみましょう。まず、BLE機能に必要なライブラリをインポートすることから始まります。次に、サービスと特性のUUIDを定義する必要があります。

```c
// Add my BLE service to the GATT DB
// UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
const uuid_128 my_service_uuid = {
  .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
};

// Add the 'Notify' characteristic to my BLE service
// UUID: 61a885a4-41c3-60d0-9a53-6d652a70d29c
const uuid_128 btn_report_characteristic_uuid = {
  .data = { 0x9c, 0xd2, 0x70, 0x2a, 0x65, 0x6d, 0x53, 0x9a, 0xd0, 0x60, 0xc3, 0x41, 0xa4, 0x85, 0xa8, 0x61 }
};
```

デフォルトのUUIDをそのまま使用することもできますし、[uuidgenerator.net](https://www.uuidgenerator.net/)にアクセスして、サービスと特性用のランダムなUUIDを作成することもできます。

次に、「XIAO_MG24 Server」という名前のBLEデバイスを作成します。この名前はお好みに変更できます。続く行では、BLEデバイスをサーバーとして設定します。その後、先ほど定義したUUIDを使用してBLEサーバー用のサービスを作成します。

```c
sl_status_t sc;
// Create a new GATT database
sc = sl_bt_gattdb_new_session(&gattdb_session_id);
app_assert_status(sc);

// Add the Generic Access service to the GATT DB
const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
sc = sl_bt_gattdb_add_service(gattdb_session_id,
                              sl_bt_gattdb_primary_service,
                              SL_BT_GATTDB_ADVERTISED_SERVICE,
                              sizeof(generic_access_service_uuid),
                              generic_access_service_uuid,
                              &generic_access_service_handle);
app_assert_status(sc);

// Add the Device Name characteristic to the Generic Access service
// The value of the Device Name characteristic will be advertised
const sl_bt_uuid_16_t device_name_characteristic_uuid = { .data = { 0x00, 0x2A } };
sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                            generic_access_service_handle,
                                            SL_BT_GATTDB_CHARACTERISTIC_READ,
                                            0x00,
                                            0x00,
                                            device_name_characteristic_uuid,
                                            sl_bt_gattdb_fixed_length_value,
                                            sizeof(advertised_name) - 1,
                                            sizeof(advertised_name) - 1,
                                            advertised_name,
                                            &name_characteristic_handle);
app_assert_status(sc);

// Start the Generic Access service
sc = sl_bt_gattdb_start_service(gattdb_session_id, generic_access_service_handle);
app_assert_status(sc);

// Add my BLE service to the GATT DB
// UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
const uuid_128 my_service_uuid = {
  .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
};
sc = sl_bt_gattdb_add_service(gattdb_session_id,
                              sl_bt_gattdb_primary_service,
                              SL_BT_GATTDB_ADVERTISED_SERVICE,
                              sizeof(my_service_uuid),
                              my_service_uuid.data,
                              &my_service_handle);
app_assert_status(sc);
```

その後、そのサービスの特性を設定します。ご覧のように、先ほど定義したUUIDも使用し、特性のプロパティを引数として渡す必要があります。この場合は、READとNOTIFYです。

```c
// Add the 'Notify' characteristic to my BLE service
// UUID: 61a885a4-41c3-60d0-9a53-6d652a70d29c
const uuid_128 btn_report_characteristic_uuid = {
  .data = { 0x9c, 0xd2, 0x70, 0x2a, 0x65, 0x6d, 0x53, 0x9a, 0xd0, 0x60, 0xc3, 0x41, 0xa4, 0x85, 0xa8, 0x61 }
};
uint8_t notify_char_init_value = 0;
sc = sl_bt_gattdb_add_uuid128_characteristic(gattdb_session_id,
                                              my_service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_NOTIFY,
                                              0x00,
                                              0x00,
                                              btn_report_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              1,                               // max length
                                              sizeof(notify_char_init_value),  // initial value length
                                              &notify_char_init_value,         // initial value
                                              &notify_characteristic_handle);

// Start my BLE service
sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
app_assert_status(sc);

// Commit the GATT DB changes
sc = sl_bt_gattdb_commit(gattdb_session_id);
app_assert_status(sc);
```

特性を作成した後、`sl_bt_gatt_server_notify_all()` メソッドでその値を設定できます。この場合、値を「Hello World」というテキストに設定しています。このテキストは好きなものに変更できます。将来のプロジェクトでは、このテキストはセンサーの読み取り値やランプの状態などにすることができます。

最後に、サービスとアドバタイジングを開始して、他のBLEデバイスがこのBLEデバイスをスキャンして見つけられるようにします。

```c
// Start advertising
ble_start_advertising();
```

これは、BLEサーバーを作成する方法の簡単な例です。このプログラムの機能は、2秒ごとに「Hello World」という内容で通知を送信することです。


### BLEセンサーデータ交換

次に、実際の世界でケースを完成させます。このケースでは、XIAO MG24の`getCPUTemp()`関数を使用して現在のMCUの温度を測定し、その後BluetoothでMCUの温度値を別のXIAO MG24に送信して、健康体温計をシミュレートします。

2つのXIAOを準備する必要があります。1つはサーバーとして、もう1つはクライアントとして使用します。以下はサーバーとしてのサンプルプログラムです。サーバーとしてのXIAOには以下の主なタスクがあります。
- 第一に、`getCPUTemp()`関数を使用してMCUの現在の温度を取得する
- 第二に、Bluetoothサーバーを作成する
- 第三に、Bluetoothを通じて温度値をアドバタイズする
- 第四に、リアルタイムの温度を表示する

```c
// server

/*
   BLE health thermometer example

   The example implements a minimal BLE Health Thermometer profile to provide temperature measurements over BLE

   On startup the sketch will start a BLE advertisement with the configured name, then
   it will accept any incoming connection. When a device is connected and enables indications for the
   health thermometer characteristic, then the device will send it's CPU temperature readings as thermometer data.
   With the EFR Connect app you can test this functionality by going to the "Demo" tab and selecting "Health Thermometer".
   Alternatively, you can test this example by flashing an other BLE board with the 'ble_health_thermometer_client' demo
   and have the two boards exchange the temperature measurements over BLE.

   Find out more on the API usage at: https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   This example only works with the 'BLE (Silabs)' protocol stack variant.

   You can test the thermometer device with the EFR Connect app:
    - https://play.google.com/store/apps/details?id=com.siliconlabs.bledemo
    - https://apps.apple.com/us/app/efr-connect-ble-mobile-app/id1030932759

   Compatible boards:
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   Author: Tamas Jozsi (Silicon Labs)
 */
 
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

static void handle_temperature_indication();
static void ble_initialize_gatt_db();
static void ble_start_advertising();

const uint8_t advertised_name[] = "XIAOMG24_BLE";
uint8_t connection_handle = 0u;
uint16_t temp_measurement_characteristic_handle = 0u;
bool indication_enabled = false;

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.begin(115200);
  
  // turn on this antenna function
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> Use external antenna / LOW -> Use built-in antenna
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, LOW);
}

void loop()
{
  handle_temperature_indication();
}

/**************************************************************************//**
 * Sends a BLE indication with the current temperature to the connected device
 * if enabled, then waits for a second
 *****************************************************************************/
static void handle_temperature_indication()
{
  // Return immediately if indications are not enabled
  if (!indication_enabled) {
    return;
  }

  // Get the current CPU temperature
  float temperature = getCPUTemp();

  // Convert the temperature to an IEEE 11073 float value
  int32_t millicelsius = (int32_t)(temperature * 1000);
  uint8_t buffer[5];
  uint32_t tmp_value = ((uint32_t)millicelsius & 0x00ffffffu) | ((uint32_t)(-3) << 24);
  buffer[0] = 0;
  buffer[1] = tmp_value & 0xff;
  buffer[2] = (tmp_value >> 8) & 0xff;
  buffer[3] = (tmp_value >> 16) & 0xff;
  buffer[4] = (tmp_value >> 24) & 0xff;

  // Send the indication
  sl_bt_gatt_server_send_indication(connection_handle, temp_measurement_characteristic_handle, sizeof(buffer), buffer);

  // Log the temperature
  Serial.print("Temperature indication sent - current temperature: ");
  Serial.print(temperature);
  Serial.println(" C");

  // Wait for a second
  delay(1000);
}

/**************************************************************************//**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  switch (SL_BT_MSG_ID(evt->header)) {
    // This event is received when the BLE device has successfully booted
    case sl_bt_evt_system_boot_id:
    {
      // Print a welcome message
      Serial.begin(115200);
      Serial.println();
      Serial.println("Silicon Labs BLE health thermometer example");
      Serial.println("BLE stack booted");
      // Initialize the application specific GATT DB
      ble_initialize_gatt_db();
      // Start advertising
      ble_start_advertising();
    }
    break;

    // This event is received when a BLE connection has been opened
    case sl_bt_evt_connection_opened_id:
      // Store the connection handle which will be needed for sending indications
      connection_handle = evt->data.evt_connection_opened.connection;
      Serial.println("Connection opened");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      break;

    // This event is received when a BLE connection has been closed
    case sl_bt_evt_connection_closed_id:
      // Reset stored values
      connection_handle = 0u;
      indication_enabled = false;
      Serial.println("Connection closed");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      // Restart the advertisement
      ble_start_advertising();
      break;

    // This event is received when a GATT characteristic status changes
    case sl_bt_evt_gatt_server_characteristic_status_id:
    {
      // If the temperature measurement characteristic has been changed
      if (evt->data.evt_gatt_server_characteristic_status.characteristic == temp_measurement_characteristic_handle) {
        uint16_t client_config_flags = evt->data.evt_gatt_server_characteristic_status.client_config_flags;
        uint8_t status_flags = evt->data.evt_gatt_server_characteristic_status.status_flags;
        if ((client_config_flags == 0x02) && (status_flags == 0x01)) {
          // If indication was enabled (0x02) in the client config flags, and the status flag shows that it's a change
          Serial.println("Temperature indication enabled");
          indication_enabled = true;
        } else if ((client_config_flags == 0x00) && (status_flags == 0x01)) {
          // If indication was disabled (0x00) in the client config flags, and the status flag shows that it's a change
          Serial.println("Temperature indication disabled");
          indication_enabled = false;
        }
      }
    }
    break;

    // Default event handler
    default:
      Serial.print("BLE event: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************//**
 * Starts BLE advertisement
 * Initializes advertising if it's called for the first time
 *****************************************************************************/
static void ble_start_advertising()
{
  static uint8_t advertising_set_handle = 0xff;
  static bool init = true;
  sl_status_t sc;

  if (init) {
    // Create an advertising set
    sc = sl_bt_advertiser_create_set(&advertising_set_handle);
    app_assert_status(sc);

    // Set advertising interval to 100ms
    sc = sl_bt_advertiser_set_timing(
      advertising_set_handle,
      160,   // minimum advertisement interval (milliseconds * 1.6)
      160,   // maximum advertisement interval (milliseconds * 1.6)
      0,     // advertisement duration
      0);    // maximum number of advertisement events
    app_assert_status(sc);

    init = false;
  }

  // Generate data for advertising
  sc = sl_bt_legacy_advertiser_generate_data(advertising_set_handle, sl_bt_advertiser_general_discoverable);
  app_assert_status(sc);

  // Start advertising and enable connections
  sc = sl_bt_legacy_advertiser_start(advertising_set_handle, sl_bt_advertiser_connectable_scannable);
  app_assert_status(sc);

  Serial.print("Started advertising as '");
  Serial.print((const char*)advertised_name);
  Serial.println("'...");
}

/**************************************************************************//**
 * Initializes the GATT database
 * Creates a new GATT session and adds certain services and characteristics
 *****************************************************************************/
static void ble_initialize_gatt_db()
{
  sl_status_t sc;
  uint16_t gattdb_session_id;
  uint16_t service_handle;
  uint16_t device_name_characteristic_handle;
  uint16_t temp_type_characteristic_handle;

  // Create a new GATT database
  sc = sl_bt_gattdb_new_session(&gattdb_session_id);
  app_assert_status(sc);

  // Generic Access service
  const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(generic_access_service_uuid),
                                generic_access_service_uuid,
                                &service_handle);
  app_assert_status(sc);

  // Device Name characteristic
  const sl_bt_uuid_16_t device_name_characteristic_uuid = { .data = { 0x00, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0x00,
                                              0x00,
                                              device_name_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(advertised_name) - 1,
                                              sizeof(advertised_name) - 1,
                                              advertised_name,
                                              &device_name_characteristic_handle);
  app_assert_status(sc);

  sc = sl_bt_gattdb_start_service(gattdb_session_id, service_handle);
  app_assert_status(sc);

  // Health Thermometer service
  const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(thermometer_service_uuid),
                                thermometer_service_uuid,
                                &service_handle);
  app_assert_status(sc);

  // Temperature Measurement characteristic
  const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
  uint8_t temp_initial_value[5] = { 0, 0, 0, 0, 0 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_INDICATE,
                                              0x00,
                                              0x00,
                                              temp_measurement_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              5,
                                              5,
                                              temp_initial_value,
                                              &temp_measurement_characteristic_handle);
  app_assert_status(sc);

  // Temperature Type characteristic
  const sl_bt_uuid_16_t temp_type_characteristic_uuid = { .data = { 0x1D, 0x2A } };
  // Temperature type: body (2)
  uint8_t temp_type_initial_value = 2;
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0x00,
                                              0x00,
                                              temp_type_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              1,
                                              1,
                                              &temp_type_initial_value,
                                              &temp_type_characteristic_handle);
  app_assert_status(sc);

  // Start the Health Thermometer service
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service_handle);
  app_assert_status(sc);

  // Commit the GATT DB changes
  sc = sl_bt_gattdb_commit(gattdb_session_id);
  app_assert_status(sc);
}

#ifndef BLE_STACK_SILABS
  #error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

アップロードしたプログラムがXIAOの一つで正常に動作している場合、スマートフォンを取り出してnRF Connect APPを使用し、**XIAOMG24_BLE**という名前のBluetoothデバイスを検索して接続し、下図に示すボタンをクリックすると、温度データ情報を受信できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-5.jpg" style={{width:300, height:'auto'}}/></div>

次に、データを収集して表示するクライアントとして機能する、もう一つのXIAOを取り出す必要があります。

```c
// client

/*
   BLE health thermometer client example

   The example connects to another board running the 'BLE Health Thermometer' example and reads the temperature through BLE

   On startup the sketch will start a scanning for the other board running the 'ble_health_thermometer' example and
   advertising as "Thermometer Example". Once the other board is found, it establishes a connection,
   discovers it's services and characteristics, then subscribes to the temperature measurements.
   After the subscription the example starts receiving the temperature data from the other board periodically,
   and prints it to Serial.

   Find out more on the API usage at: https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   This example only works with the 'BLE (Silabs)' protocol stack variant.

   Compatible boards:
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   Author: Tamas Jozsi (Silicon Labs)
 */

#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.begin(115200);

  // turn on this antenna function
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> Use external antenna / LOW -> Use built-in antenna
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, LOW);
}

void loop()
{
}

// Connection states
enum conn_state_t {
  ST_BOOT,
  ST_SCAN,
  ST_CONNECT,
  ST_SERVICE_DISCOVER,
  ST_CHAR_DISCOVER,
  ST_REQUEST_INDICATION,
  ST_RECEIVE_DATA
};

// IEEE 11073 float structure
typedef struct {
  uint8_t mantissa_l;
  uint8_t mantissa_m;
  int8_t mantissa_h;
  int8_t exponent;
} IEEE_11073_float;

static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t *response);
static float translate_IEEE_11073_temperature_to_float(IEEE_11073_float const *IEEE_11073_value);

const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
const uint8_t advertised_name[] = "XIAOMG24_BLE";

uint32_t thermometer_service_handle = __UINT32_MAX__;
uint16_t temp_measurement_char_handle = __UINT16_MAX__;
conn_state_t connection_state = ST_BOOT;

/**************************************************************************//**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // This event is received when the BLE device has successfully booted
    case sl_bt_evt_system_boot_id:
      // Print a welcome message
      Serial.println();
      Serial.println("Silicon Labs BLE health thermometer client example");
      Serial.println("BLE stack booted");
      // Start scanning for other BLE devices
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active, 16, 16);
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("Started scanning...");
      connection_state = ST_SCAN;
      break;

    // This event is received when we scan the advertisement of another BLE device
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      Serial.println("BLE scan report received");
      // If we find the other devices's name
      if (find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report))) {
        Serial.println("Target device found");
        // Stop scanning
        sc = sl_bt_scanner_stop();
        app_assert_status(sc);
        // Connect to the device
        sc = sl_bt_connection_open(evt->data.evt_scanner_legacy_advertisement_report.address,
                                   evt->data.evt_scanner_legacy_advertisement_report.address_type,
                                   sl_bt_gap_phy_1m,
                                   NULL);
        app_assert_status(sc);
        connection_state = ST_CONNECT;
      }
      break;

    // This event is received when a BLE connection has been opened
    case sl_bt_evt_connection_opened_id:
      Serial.println("Connection opened");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      // Discover Health Thermometer service on the connected device
      sc = sl_bt_gatt_discover_primary_services_by_uuid(evt->data.evt_connection_opened.connection,
                                                        sizeof(thermometer_service_uuid),
                                                        thermometer_service_uuid);
      app_assert_status(sc);
      connection_state = ST_SERVICE_DISCOVER;
      break;

    // This event is received when a BLE connection has been closed
    case sl_bt_evt_connection_closed_id:
      Serial.println("Connection closed");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      // Restart scanning
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("Restarted scanning...");
      connection_state = ST_SCAN;
      break;

    // This event is generated when a new service is discovered
    case sl_bt_evt_gatt_service_id:
      Serial.println("GATT service discovered");
      // Store the handle of the discovered Thermometer Service
      thermometer_service_handle = evt->data.evt_gatt_service.service;
      break;

    // This event is generated when a new characteristic is discovered
    case sl_bt_evt_gatt_characteristic_id:
      Serial.println("GATT charactersitic discovered");
      // Store the handle of the discovered Temperature Measurement characteristic
      temp_measurement_char_handle = evt->data.evt_gatt_characteristic.characteristic;
      break;

    // This event is received when a GATT procedure completes
    case sl_bt_evt_gatt_procedure_completed_id:
      Serial.println("GATT procedure completed");

      if (connection_state == ST_SERVICE_DISCOVER) {
        Serial.println("GATT service discovery finished");
        // Discover thermometer characteristic on the connected device
        sc = sl_bt_gatt_discover_characteristics_by_uuid(evt->data.evt_gatt_procedure_completed.connection,
                                                         thermometer_service_handle,
                                                         sizeof(temp_measurement_characteristic_uuid.data),
                                                         temp_measurement_characteristic_uuid.data);
        app_assert_status(sc);
        connection_state = ST_CHAR_DISCOVER;
        break;
      }

      if (connection_state == ST_CHAR_DISCOVER) {
        Serial.println("GATT characteristic discovery finished");
        // Enable temperature measurement indications
        sc = sl_bt_gatt_set_characteristic_notification(evt->data.evt_gatt_procedure_completed.connection,
                                                        temp_measurement_char_handle,
                                                        sl_bt_gatt_indication);
        app_assert_status(sc);
        connection_state = ST_REQUEST_INDICATION;
        break;
      }

      if (connection_state == ST_REQUEST_INDICATION) {
        Serial.println("Temperature measurement indications enabled");
        connection_state = ST_RECEIVE_DATA;
      }
      break;

    // This event is received when a characteristic value was received (like an indication)
    case sl_bt_evt_gatt_characteristic_value_id:
    {
      Serial.println("GATT data received");
      // Get the received data from the event
      uint8_t* char_value = &(evt->data.evt_gatt_characteristic_value.value.data[0]);
      // Convert it back to float
      float temperature = translate_IEEE_11073_temperature_to_float((IEEE_11073_float *)(char_value + 1));
      // Print to Serial
      Serial.print("Received temperature: ");
      Serial.print(temperature);
      Serial.println(" C");

      sc = sl_bt_gatt_send_characteristic_confirmation(evt->data.evt_gatt_characteristic_value.connection);
      app_assert_status(sc);
    }
    break;

    // Default event handler
    default:
      Serial.print("BLE event: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************//**
 * Finds a configured name in BLE advertisements
 *
 * @param[in] response BLE response event received from scanning
 *
 * @return true if found, false otherwise
 *****************************************************************************/
static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t *response)
{
  int i = 0;
  bool found = false;

  // Go through the response data
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // Type 0x09 = Complete Local Name, 0x08 Shortened Name
    // If the field type matches the Complete Local Name
    if (advertisement_type == 0x09) {
      // Check if device name matches
      if (memcmp(response->data.data + i + 2, advertised_name, strlen((const char*)advertised_name)) == 0) {
        found = true;
        break;
      }
    }
    // Jump to next advertisement record
    i = i + advertisement_length + 1;
  }
  return found;
}

/**************************************************************************//**
 * Translates a IEEE-11073 temperature value to float
 *
 * @param[in] IEEE_11073_value the IEEE 11073 float value to convert
 *
 * @return the converted value in float, NAN on failure
 *****************************************************************************/
static float translate_IEEE_11073_temperature_to_float(IEEE_11073_float const *IEEE_11073_value)
{
  int32_t mantissa = 0;
  uint8_t mantissa_l;
  uint8_t mantissa_m;
  int8_t mantissa_h;
  int8_t exponent;

  // Wrong Argument: NULL pointer is passed
  if (!IEEE_11073_value) {
    return NAN;
  }

  // Caching Fields
  mantissa_l = IEEE_11073_value->mantissa_l;
  mantissa_m = IEEE_11073_value->mantissa_m;
  mantissa_h = IEEE_11073_value->mantissa_h;
  exponent =  IEEE_11073_value->exponent;

  // IEEE-11073 Standard NaN Value Passed
  if ((mantissa_l == 0xFF) && (mantissa_m == 0xFF) && (mantissa_h == 0x7F) && (exponent == 0x00)) {
    return NAN;
  }

  // Converting a 24bit Signed Value to a 32bit Signed Value
  mantissa |= mantissa_h;
  mantissa <<= 8;
  mantissa |= mantissa_m;
  mantissa <<= 8;
  mantissa |= mantissa_l;
  mantissa <<= 8;
  mantissa >>= 8;

  return ((float)mantissa) * pow(10.0f, (float)exponent);
}

#ifndef BLE_STACK_SILABS
  #error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

最後に、サーバーとクライアントプログラムが正常に動作すると、シリアルポートを通じてクライアントによって印刷される以下の情報を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEClient_result-1.png" style={{width:700, height:'auto'}}/></div>

#### プログラムの注釈

上記のプログラムについて、より重要な部分を選んで説明します。まずサーバープログラムから始めます。

プログラムの冒頭で、Bluetoothサーバーの名前を定義します。この名前は設定した名前にすることができますが、このBluetoothデバイスを検索するためにこの名前に依存する必要があるため、覚えておく必要があります。

```c
const uint8_t advertised_name[] = "XIAOMG24_BLE";
```

チュートリアルの前のセクションでは、サーバーの下にCharacteristicがあり、Characteristicの下に値とその他のコンテンツがあることについて説明しました。そのため、広告を作成する際にはこの原則に従う必要があります。

```c
// Health Thermometer service
const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
sc = sl_bt_gattdb_add_service(gattdb_session_id,
                              sl_bt_gattdb_primary_service,
                              SL_BT_GATTDB_ADVERTISED_SERVICE,
                              sizeof(thermometer_service_uuid),
                              thermometer_service_uuid,
                              &service_handle);
app_assert_status(sc);

// Temperature Measurement characteristic
const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
uint8_t temp_initial_value[5] = { 0, 0, 0, 0, 0 };
sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                            service_handle,
                                            SL_BT_GATTDB_CHARACTERISTIC_INDICATE,
                                            0x00,
                                            0x00,
                                            temp_measurement_characteristic_uuid,
                                            sl_bt_gattdb_fixed_length_value,
                                            5,
                                            5,
                                            temp_initial_value,
                                            &temp_measurement_characteristic_handle);
app_assert_status(sc);
```

上記のプログラムでは、`sl_bt_gattdb_add_service()` がサーバーを作成するために使用されていることがわかります。パラメータは特定のUUID: **0x1809** です。GATTのルールでは、**0x1809** は温度計タイプのデータを示し、同じCharacteristicのUUID: **0x2A1C** も特別な意味を持ちます。GATTでは、これは温度測定を示します。これは私たちの温度値のケースに適合するので、ここではそのように定義しています。GATTが私たちのために準備した特定のUUIDの意味については、[こちら](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/GATT.pdf)で読むことができます。

もちろん、GATTスタンダードに従わずにUUIDを設定することもできます。これらの2つの値が一意であり、クライアントがこれらのUUIDを認識して値を見つける能力に影響しないことを確認するだけです。サービスとCharacteristicのためのランダムなUUIDを作成するには、[uuidgenerator.net](https://www.uuidgenerator.net/)にアクセスできます。

最後に、`loop`でMCUの温度値を1秒に1回測定して送信します。

次のステップはClientプログラムで、これははるかに複雑に見えるでしょう。

プログラムの開始時は、まだ非常に馴染みのある内容です。この内容がサーバー側で設定したものと一致していることを確認する必要があります。

```c
const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
const uint8_t advertised_name[] = "XIAOMG24_BLE";
```

次に、Bluetoothスタックイベントハンドラー関数を作成します。この関数は主に、Bluetoothデバイスの初期化、Bluetoothの接続と切断、近くのBluetoothデバイスの検索など、さまざまなBluetoothイベントによってトリガーされるコールバックタスクを処理します。

```c
/**************************************************************************//**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
```

以下のプロセスは、サーバーで温度値を見つけるための鍵となります。まず、サーバーUUIDの特定に成功し、サーバー下でキャラクタリスティックUUIDを見つけた後、取得したデータを処理します。これは以下のコードスニペットに示されています。最後に、シリアルポートを通じて処理されたデータを出力します。この解析方法は、Bluetoothのデータ構造と一対一で対応しています。

```c
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    
    ...

    // This event is received when a characteristic value was received (like an indication)
    case sl_bt_evt_gatt_characteristic_value_id:
    {
      Serial.println("GATT data received");
      // Get the received data from the event
      uint8_t* char_value = &(evt->data.evt_gatt_characteristic_value.value.data[0]);
      // Convert it back to float
      float temperature = translate_IEEE_11073_temperature_to_float((IEEE_11073_float *)(char_value + 1));
      // Print to Serial
      Serial.print("Received temperature: ");
      Serial.print(temperature);
      Serial.println(" C");

      sc = sl_bt_gatt_send_characteristic_confirmation(evt->data.evt_gatt_characteristic_value.connection);
      app_assert_status(sc);
    }
    break;

    ...
  
  }
}
```


:::tip
上記の例は、Silicon Labsから提供された単一センサーの単一値の最もシンプルな例です。SiliconLabs BLE APIの使用方法についてより深く理解したい場合は、こちらのチュートリアルを読むことをお勧めします。

- [SiliconLabs Bluetooth Stack API Reference](https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/)
:::


## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
