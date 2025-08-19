---
description: Seeed Studio XIAO MG24 の Bluetooth 使用方法。
title: Seeed Studio XIAO MG24 Bluetooth 使用方法
keywords:
- MG24
- xiao
- ble
- bluetooth
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/ble-cover.webp
slug: /ja/xiao_mg24_bluetooth
last_update:
  date: 05/15/2025
  author: Hugo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO MG24 の Bluetooth 使用方法

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Seeed Studio XIAO MG24 は、Bluetooth LE 5.3 および Bluetooth メッシュをサポートする堅牢な開発ボードであり、ワイヤレス接続を必要とする幅広い IoT アプリケーションに最適です。その優れた RF パフォーマンスを活用することで、XIAO MG24 はさまざまな距離で信頼性が高く高速なワイヤレス通信を提供し、短距離および長距離の両方のアプリケーションに対応する汎用的なソリューションとなります。このチュートリアルでは、XIAO MG24 の Bluetooth 機能の基本的な特徴を探り、近くの Bluetooth デバイスをスキャンする方法、Bluetooth 接続を確立する方法、およびその接続を介してデータを送受信する方法について説明します。

## アンテナ切り替え方法

Seeed Studio XIAO MG24 には、内部アンテナと外部アンテナの 2 つのアンテナオプションがあります。利便性を重視する場合は内部アンテナを使用し、信号強度を向上させたい場合は外部アンテナを選択できます。以下に、2 つのアンテナを切り替える方法を示します。

PB04 は内蔵アンテナと外部アンテナの選択に使用されます。その前に、PB05 を高レベルに設定してこの機能を有効にする必要があります。PB04 を低レベルに設定すると内蔵アンテナが使用され、高レベルに設定すると外部アンテナが使用されます。デフォルトは低レベルです。高レベルに設定する場合は、以下のコードを参照してください。
```cpp
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup() {
  // アンテナ機能を有効化
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> 外部アンテナを使用 / LOW -> 内蔵アンテナを使用
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, HIGH);
```


## Bluetooth Low Energy (BLE) の使用

Bluetooth Low Energy（略して BLE）は、Bluetooth の省電力バージョンです。BLE の主な用途は、少量のデータ（低帯域幅）を短距離で送信することです。常にオンの状態である通常の Bluetooth とは異なり、BLE は接続が開始されるとき以外は常にスリープモードのままです。

この特性により、BLE はコイン電池で動作し、定期的に少量のデータを交換する必要があるアプリケーションに適しています。たとえば、BLE は医療、フィットネス、トラッキング、ビーコン、セキュリティ、ホームオートメーション業界で非常に役立ちます。

これにより、非常に低い電力消費を実現します。BLE は Bluetooth に比べて約 100 倍少ない電力を消費します（使用ケースによります）。

XIAO MG24 の BLE 部分については、以下のセクションでその使用方法を紹介します。

- [いくつかの基本概念](#some-fundamental-concepts) -- BLE プログラムの実行プロセスや考え方を理解するために、BLE で頻繁に使用される可能性のあるいくつかの概念を最初に学びます。
- [BLE スキャナー](#ble-scanner) -- 近くの Bluetooth デバイスを検索し、それらをシリアルモニターに出力する方法を説明します。
- [BLE サーバー/クライアント](#ble-serverclient) -- XIAO MG24 をサーバーおよびクライアントとして使用し、指定されたデータメッセージを送受信する方法を説明します。また、スマートフォンから XIAO にメッセージを送受信する方法も含まれます。
<!-- - [BLE センサー データ交換](#ble-sensor-data-exchange) -- チュートリアルの最後のセクションでは、センサーの例を通じて BLE を使用してセンサーデータを送信する方法を説明します。 -->

### いくつかの基本概念

#### サーバーとクライアント

Bluetooth Low Energy では、デバイスにはサーバーとクライアントの 2 種類があります。XIAO MG24 はクライアントまたはサーバーのいずれかとして動作できます。

サーバーは自分の存在を広告し、他のデバイスに見つけられるようにし、クライアントが読み取れるデータを保持します。クライアントは近くのデバイスをスキャンし、目的のサーバーを見つけると接続を確立し、受信データを待ちます。これをポイントツーポイント通信と呼びます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/ble.png" style={{width:800, height:'auto'}}/></div>

#### アトリビュート（属性）

アトリビュートとは、実際にはデータの一部です。各 Bluetooth デバイスはサービスを提供するために使用され、サービスはデータの集合体です。この集合体はデータベースと呼ぶことができ、データベース内の各エントリがアトリビュートです。Bluetooth デバイスをテーブルに例えると、テーブル内の各行がアトリビュートに相当します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

2 つの Bluetooth デバイスが接続を確立するとき、通信方法を決定するためのプロトコルが必要です。GATT（Generic Attribute Profile）は、Bluetooth デバイス間でデータを送信する方法を定義するプロトコルです。

GATT プロトコルでは、デバイスの機能とプロパティがサービス、キャラクタリスティック、ディスクリプタと呼ばれる構造に整理されます。サービスは、デバイスが提供する関連機能と特徴のセットを表します。各サービスには複数のキャラクタリスティックを含めることができ、これらはサービスの特定のプロパティや動作（例：センサーデータや制御コマンド）を定義します。各キャラクタリスティックには一意の識別子と値があり、これを読み取ったり書き込んだりして通信を行います。ディスクリプタは、キャラクタリスティックのメタデータ（例：値の形式やアクセス許可）を記述するために使用されます。

GATT プロトコルを使用することで、Bluetooth デバイスはセンサーデータの送信やリモートデバイスの制御など、さまざまなアプリケーションシナリオで通信できます。

#### BLE キャラクタリスティック

ATT（Attribute Protocol）は、最終的には一連の ATT コマンド（リクエストおよびレスポンスコマンド）で構成されています。ATT は Bluetooth の最上位層であり、Bluetooth パケットを解析する際に最も使用される部分です。

ATT コマンドは正式には ATT PDU（Protocol Data Unit）と呼ばれます。これには 4 つのカテゴリがあります：読み取り、書き込み、通知、および指示。これらのコマンドは 2 種類に分けられます：応答が必要な場合はリクエストが続きますが、ACK（確認応答）のみが必要で応答が不要な場合はリクエストが続きません。

サービスとキャラクタリスティックは GATT 層で定義されます。サービス側はサービスを提供し、サービスはデータであり、データはアトリビュートです。サービスとキャラクタリスティックはデータの論理的な表現であり、ユーザーが見ることのできるデータは最終的にサービスとキャラクタリスティックに変換されます。

モバイル視点からサービスとキャラクタリスティックがどのように見えるかを見てみましょう。nRF Connect は、各パケットがどのように見えるべきかを非常に視覚的に示してくれるアプリケーションです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

ご覧のとおり、Bluetooth 仕様では、各特定の Bluetooth アプリケーションは複数のサービスで構成され、各サービスは複数のキャラクタリスティックで構成されています。キャラクタリスティックは UUID、プロパティ、および値で構成されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

プロパティは、キャラクタリスティックに対する操作の種類や許可（例：読み取り、書き込み、通知のサポートの有無）を記述するために使用されます。これは ATT PDU に含まれる 4 つのカテゴリに似ています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

各サービス、キャラクタリスティック、およびディスクリプタには UUID（Universally Unique Identifier）が付与されています。UUID は一意の 128 ビット（16 バイト）の番号です。例：

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

すべてのタイプ、サービス、およびプロファイルに対して、[SIG (Bluetooth Special Interest Group)](https://www.bluetooth.com/specifications/gatt/services) によって指定された短縮UUIDがあります。ただし、アプリケーションが独自のUUIDを必要とする場合は、この[UUID生成ウェブサイト](https://www.uuidgenerator.net/)を使用して生成できます。

### BLEスキャナー

XIAO MG24 BLEスキャナーを作成するのは簡単です。以下はスキャナーを作成するためのサンプルプログラムです。

```cpp
/*
   BLEスキャンの例

   この例では、他のBLEデバイスをスキャンし、見つかったデバイスごとにアドレス、RSSI、チャネル、および名前を出力します。

   Silabs BLE APIの使用方法については、以下を参照してください: https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   この例は「BLE (Silabs)」プロトコルスタックバリアントでのみ動作します。

   対応ボード:
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   作成者: Tamas Jozsi (Silicon Labs)
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
 * Bluetoothスタックイベントハンドラー
 * BLEスタックでイベントが発生したときに呼び出されます
 *
 * @param[in] evt Bluetoothスタックからのイベント
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt) {
  static uint32_t scan_report_num = 0u;
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // このイベントはBLEデバイスが正常に起動したときに受信されます
    case sl_bt_evt_system_boot_id:
      // ウェルカムメッセージを出力
      Serial.begin(115200);

      // アンテナ機能を有効化
      pinMode(RF_SW_PW_PIN, OUTPUT); 
      digitalWrite(RF_SW_PW_PIN, HIGH);

      delay(100);
      // HIGH -> 外部アンテナを使用 / LOW -> 内蔵アンテナを使用
      pinMode(RF_SW_PIN, OUTPUT); 
      digitalWrite(RF_SW_PIN, HIGH);

      Serial.println();
      Serial.println("Silicon Labs BLEスキャン例");
      Serial.println("BLEスタックが起動しました");
      // 他のBLEデバイスをスキャン開始
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active,  // モード
                                        16,                              // インターバル (値 * 0.625 ms)
                                        16);                             // ウィンドウ (値 * 0.625 ms)
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("スキャンを開始しました...");
      break;

    // 他のBLEデバイスの広告をスキャンしたときにこのイベントを受信
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      scan_report_num++;
      Serial.print(" -> #");
      Serial.print(scan_report_num);
      Serial.print(" | アドレス: ");
      for (int i = 5; i >= 0; i--) {
        Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
        if (i > 0) {
          Serial.print(":");
        }
      }
      Serial.print(" | RSSI: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.rssi);
      Serial.print(" dBm");
      Serial.print(" | チャネル: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.channel);
      Serial.print(" | 名前: ");
      Serial.println(get_complete_local_name_from_ble_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report)));
      break;

    // デフォルトのイベントハンドラー
    default:
      Serial.print("BLEイベント: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************/ /**
 * BLE広告から完全なローカル名を取得
 *
 * @param[in] response スキャンから受信したBLE応答イベント
 *
 * @return 見つかった場合は完全なローカル名、見つからない場合は "N/A"
 *****************************************************************************/
static String get_complete_local_name_from_ble_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response) {
  int i = 0;
  // 応答データを確認
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // 長さがデバイス名の最大長を超える場合
    if (advertisement_length > 29) {
      continue;
    }

    // タイプ0x09 = 完全なローカル名, 0x08 = 短縮名
    // フィールドタイプが完全なローカル名に一致する場合
    if (advertisement_type == 0x09) {
      // デバイス名をコピー
      char device_name[advertisement_length + 1];
      memcpy(device_name, response->data.data + i + 2, advertisement_length);
      device_name[advertisement_length] = '\0';
      return String(device_name);
    }
    // 次の広告レコードに移動
    i = i + advertisement_length + 1;
  }
  return "N/A";
}

#ifndef BLE_STACK_SILABS
#error "この例はSilicon Labs BLEスタックと互換性があります。'Tools > Protocol stack'で 'BLE (Silabs)' を選択してください。"
#endif
```

:::tip
コンパイル前に「'Tools > Protocol stack'」で「'BLE (Silabs)'」を選択する必要があることに注意してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/tool_select.png" style={{width:800, height:'auto'}}/></div>
:::

次に、XIAO MG24マザーボードを選択してプログラムをアップロードします。プログラムが正常に動作すれば、シリアルモニターを開いてボーレートを115200に設定すると、以下の結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/scan_result.png" style={{width:700, height:'auto'}}/></div>

このプログラムは、スキャンしたBluetoothデバイスの名前、MACアドレス、チャネル、および信号を出力します。

#### プログラム注釈

この例では、Silicon Labs BLEスタックを使用して近くのBluetooth Low Energy（BLE）デバイスをスキャンし、各発見されたデバイスのアドレス、RSSI（受信信号強度インジケータ）、チャネル、および名前を出力する方法を示します。

コードは、BLEスタックによって生成されるさまざまなBluetooth Low Energy（BLE）イベントを処理するイベントハンドラ関数`sl_bt_on_event`を定義することから始まります。この関数は、BLEデバイスが起動したときや近くのデバイスから広告レポートを受信したときなど、イベントタイプを区別するためにswitch文を使用します。起動イベントを受信すると、シリアル通信を初期化し、アンテナ制御用のGPIOピンを設定し、指定されたパラメータでBLEデバイスのスキャンを開始します。

スキャンプロセスがBLEデバイスからの広告レポートを検出すると、`sl_bt_evt_scanner_legacy_advertisement_report_id`ケースがトリガーされます。この場合、検出されたデバイスごとにカウンタをインクリメントし、デバイスのアドレス、RSSI、チャネル、ローカル名などの主要な情報を抽出します。広告データからデバイスの完全な名前を取得するために、ヘルパー関数`get_complete_local_name_from_ble_advertisement`を使用し、その名前をシリアル出力に出力します。

ヘルパー関数`get_complete_local_name_from_ble_advertisement`は、完全なローカル名フィールドを見つけるために広告データを反復処理します。各広告レコードをチェックして、完全なローカル名に対応するタイプを探し、それを文字列として返します。完全な名前が見つからない場合、この関数は"N/A"を返します。この体系的なアプローチにより、アプリケーションは近くのBLEデバイスを効果的に発見し、スキャンプロセス中に貴重な情報を提供します。

### BLEサーバー/クライアント

前述のように、XIAO MG24はサーバーとクライアントの両方として動作できます。次に、サーバーとしてのプログラムとその使用方法を見てみましょう。以下のプログラムをXIAOにアップロードすると、サーバーとして動作し、接続されたすべてのBluetoothデバイスに「Hello World」メッセージを送信します。

```cpp
// サーバーコード
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

bool notification_enabled = false;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.begin(115200);
  Serial.println("Silicon Labs BLE send hello world example");

  // アンテナ機能をオンにする
  pinMode(RF_SW_PW_PIN, OUTPUT);
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> 外部アンテナを使用 / LOW -> 内蔵アンテナを使用
  pinMode(RF_SW_PIN, OUTPUT);
  digitalWrite(RF_SW_PIN, LOW);
}

void loop() {
  if (notification_enabled) {
    // 2秒ごとに「hello world」というメッセージを通知として送信
    send_helloworld_notification();
  }
  delay(2000);
}

static void ble_initialize_gatt_db();
static void ble_start_advertising();

static const uint8_t advertised_name[] = "XIAO_MG24 Server";  // BLEデバイスの名前
static uint16_t gattdb_session_id;
static uint16_t generic_access_service_handle;
static uint16_t name_characteristic_handle;
static uint16_t my_service_handle;
static uint16_t led_control_characteristic_handle;
static uint16_t notify_characteristic_handle;

/**************************************************************************/ /**
 * Bluetoothスタックイベントハンドラ
 * BLEスタックでイベントが発生したときに呼び出される
 *
 * @param[in] evt Bluetoothスタックからのイベント
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt) {
  switch (SL_BT_MSG_ID(evt->header)) {
    // -------------------------------
    // このイベントはデバイスが起動し、無線が準備完了であることを示します。
    // この起動イベントを受信する前にスタックコマンドを呼び出さないでください！
    case sl_bt_evt_system_boot_id:
      {
        Serial.println("BLE stack booted");

        // アプリケーション固有のGATTテーブルを初期化
        ble_initialize_gatt_db();

        // 広告を開始
        ble_start_advertising();
        Serial.println("BLE advertisement started");
      }
      break;

    // -------------------------------
    // このイベントは新しい接続が開かれたことを示します
    case sl_bt_evt_connection_opened_id:
      Serial.println("BLE connection opened");
      break;

    // -------------------------------
    // このイベントは接続が閉じられたことを示します
    case sl_bt_evt_connection_closed_id:
      Serial.println("BLE connection closed");
      // 広告を再開
      ble_start_advertising();
      Serial.println("BLE advertisement restarted");
      break;

    // -------------------------------
    // このイベントは、リモートGATTクライアントによってローカルGATTデータベース内の属性値が変更されたことを示します
    case sl_bt_evt_gatt_server_attribute_value_id:
      // 変更された特性がLED制御であるか確認
      if (led_control_characteristic_handle == evt->data.evt_gatt_server_attribute_value.attribute) {
        Serial.println("LED control characteristic data received");
        // 受信データの長さを確認
        if (evt->data.evt_gatt_server_attribute_value.value.len == 0) {
          break;
        }
        // 受信したバイトを取得
        uint8_t received_data = evt->data.evt_gatt_server_attribute_value.value.data[0];
        // 受信データに応じてLEDをオン/オフ
        // '0'を受信した場合 - LEDをオフ
        // '1'を受信した場合 - LEDをオン
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
    // このイベントはGATT特性のステータスが変更されたときに受信されます
    case sl_bt_evt_gatt_server_characteristic_status_id:
      // 'Notify'特性が変更された場合
      if (evt->data.evt_gatt_server_characteristic_status.characteristic == notify_characteristic_handle) {
        // クライアントが通知を有効にした場合 - 現在の状態の通知を送信
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
    // デフォルトのイベントハンドラ
    default:
      break;
  }
}

/**************************************************************************/ /**
 * 通知が有効な場合、クライアントにBLE通知を送信
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
 * BLE広告を開始
 * 初回呼び出し時に広告を初期化
 *****************************************************************************/
static void ble_start_advertising() {
  static uint8_t advertising_set_handle = 0xff;
  static bool init = true;
  sl_status_t sc;

  if (init) {
    // 広告セットを作成
    sc = sl_bt_advertiser_create_set(&advertising_set_handle);
    app_assert_status(sc);

    // 広告間隔を100msに設定
    sc = sl_bt_advertiser_set_timing(
      advertising_set_handle,
      160,  // 最小広告間隔（ミリ秒 * 1.6）
      160,  // 最大広告間隔（ミリ秒 * 1.6）
      0,    // 広告期間
      0);   // 最大広告イベント数
    app_assert_status(sc);

    init = false;
  }

  // 広告データを生成
  sc = sl_bt_legacy_advertiser_generate_data(advertising_set_handle, sl_bt_advertiser_general_discoverable);
  app_assert_status(sc);

  // 広告を開始し、接続を有効化
  sc = sl_bt_legacy_advertiser_start(advertising_set_handle, sl_bt_advertiser_connectable_scannable);
  app_assert_status(sc);
}

/**************************************************************************/ /**
 * GATTデータベースを初期化
 * 新しいGATTセッションを作成し、特定のサービスと特性を追加
 *****************************************************************************/
static void ble_initialize_gatt_db() {
  sl_status_t sc;
  // 新しいGATTデータベースを作成
  sc = sl_bt_gattdb_new_session(&gattdb_session_id);
  app_assert_status(sc);

  // Generic AccessサービスをGATT DBに追加
  const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(generic_access_service_uuid),
                                generic_access_service_uuid,
                                &generic_access_service_handle);
  app_assert_status(sc);

  // Generic AccessサービスにDevice Name特性を追加
  // Device Name特性の値は広告される
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

  // Generic Accessサービスを開始
  sc = sl_bt_gattdb_start_service(gattdb_session_id, generic_access_service_handle);
  app_assert_status(sc);

  // GATT DBに独自のBLEサービスを追加
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

  // Blinkyサービスに'LED Control'特性を追加
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
                                               1,                            // 最大長
                                               sizeof(led_char_init_value),  // 初期値の長さ
                                               &led_char_init_value,         // 初期値
                                               &led_control_characteristic_handle);

  // Blinkyサービスを開始
  sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
  app_assert_status(sc);

  // 独自のBLEサービスに'Notify'特性を追加
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
                                               1,                               // 最大長
                                               sizeof(notify_char_init_value),  // 初期値の長さ
                                               &notify_char_init_value,         // 初期値
                                               &notify_characteristic_handle);

  // 独自のBLEサービスを開始
  sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
  app_assert_status(sc);

  // GATT DBの変更をコミット
  sc = sl_bt_gattdb_commit(gattdb_session_id);
  app_assert_status(sc);
}

#ifndef BLE_STACK_SILABS
#error "この例はSilicon Labs BLEスタックと互換性があります。'Tools > Protocol stack'で'BLE (Silabs)'を選択してください。"
#endif
```

一方で、主要なモバイルアプリストアで **nRF Connect** アプリを検索してダウンロードすることができます。このアプリを使用すると、スマートフォンでBluetoothデバイスを検索して接続することができます。

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

ソフトウェアをダウンロードした後、以下の手順に従ってXIAO_MG24を検索して接続してください。接続後、広告された「Hello World」を確認することができます。

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-1.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-2.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-3.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-4.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
</table>

別の XIAO MG24 をクライアントとして使用し、サーバーからメッセージを受信したい場合は、以下の手順をクライアント XIAO に使用してください。

```cpp
// クライアントコード
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

// 接続状態
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

// 内蔵ボタンがない場合、ボタンが接続されているピンを設定
#ifndef BTN_BUILTIN
#define BTN_BUILTIN D0
#endif

void setup() {
  // 内蔵LEDを出力として設定
  pinMode(LED_BUILTIN, OUTPUT);
  // 内蔵LEDをオフにする
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  // 内蔵ボタンを入力として設定
  pinMode(BTN_BUILTIN, INPUT);
  // シリアル通信を開始
  Serial.begin(115200);

  // アンテナ機能をオンにする
  pinMode(RF_SW_PW_PIN, OUTPUT);
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> 外部アンテナ使用 / LOW -> 内蔵アンテナ使用
  pinMode(RF_SW_PIN, OUTPUT);
  digitalWrite(RF_SW_PIN, LOW);
}

void loop() {
  // ボタンの前回の状態を記憶するための静的変数
  static uint8_t btn_state_prev = LOW;
  // 接続が完全に確立され、進行中のGATT手続きがない場合
  if (connection_state == ST_READY && !gatt_procedure_in_progress) {
    // ボタンの現在の状態を読み取る
    uint8_t btn_state = digitalRead(BTN_BUILTIN);
    // 現在の状態が前回の状態と異なる場合
    if (btn_state_prev != btn_state) {
      // 前回の状態を更新
      btn_state_prev = btn_state;
      // 状態を反転（SLボードのボタンは押されると0、離されると1を返す）
      uint8_t btn_state_inv = !btn_state;
      // 状態変更をログに記録
      Serial.print("ボタン状態を送信: ");
      Serial.println(btn_state_inv);
      // BLEを介して他のデバイスのLED制御特性に新しい状態を送信
      sl_status_t sc = sl_bt_gatt_write_characteristic_value(connection_handle, led_control_char_handle, sizeof(uint8_t), &btn_state_inv);
      app_assert_status(sc);
      gatt_procedure_in_progress = true;
    }
  }
}

// Blinkyサービス
// UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
const uuid_128 blinky_service_uuid = {
  .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
};

// LED制御特性
// UUID: 5b026510-4088-c297-46d8-be6c736a087a
const uuid_128 led_control_characteristic_uuid = {
  .data = { 0x7a, 0x08, 0x6a, 0x73, 0x6c, 0xbe, 0xd8, 0x46, 0x97, 0xc2, 0x88, 0x40, 0x10, 0x65, 0x02, 0x5b }
};
const uint8_t advertised_name[] = "XIAO_MG24 Server";

static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response);

/**************************************************************************/ /**
 * Bluetoothスタックイベントハンドラ
 * BLEスタックでイベントが発生したときに呼び出される
 *
 * @param[in] evt Bluetoothスタックからのイベント
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt) {
  static uint32_t scan_report_num = 0u;
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // BLEデバイスが正常に起動したときに受信されるイベント
    case sl_bt_evt_system_boot_id:
      // ウェルカムメッセージを表示
      Serial.println();
      Serial.println("Silicon Labs BLEライトスイッチクライアント例");
      Serial.println("BLEスタックが起動しました");
      // 他のBLEデバイスをスキャン開始
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active, 16, 16);
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("スキャンを開始しました...");
      connection_state = ST_SCAN;
      break;

    // 他のBLEデバイスの広告をスキャンしたときに受信されるイベント
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      scan_report_num++;
      Serial.print(" -> #");
      Serial.print(scan_report_num);
      Serial.print(" | アドレス: ");
      for (int i = 5; i >= 0; i--) {
        Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
        if (i > 0) {
          Serial.print(":");
        }
      }
      Serial.print(" | RSSI: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.rssi);
      Serial.print(" dBm");
      Serial.print(" | チャンネル: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.channel);
      Serial.print(" | 名前: ");
      Serial.println(find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report)));

      // 他のデバイスの名前を見つけた場合
      if (find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report))) {
        Serial.println("ターゲットデバイスが見つかりました！");
        Serial.print("接続を形成中 ");
        for (int i = 5; i >= 0; i--) {
          Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
          if (i > 0) {
            Serial.print(":");
          }
        }
        Serial.println(" ");

        // スキャンを停止
        sc = sl_bt_scanner_stop();
        app_assert_status(sc);
        // デバイスに接続
        sc = sl_bt_connection_open(evt->data.evt_scanner_legacy_advertisement_report.address,
                                   evt->data.evt_scanner_legacy_advertisement_report.address_type,
                                   sl_bt_gap_phy_1m,
                                   NULL);
        // app_assert_status(sc);
        connection_state = ST_CONNECT;

        Serial.println("BLEサーバーに接続しました");
      }
      break;

    // BLE接続が開かれたときに受信されるイベント
    case sl_bt_evt_connection_opened_id:
      Serial.println("接続が開かれました");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      connection_handle = evt->data.evt_connection_opened.connection;
      // 接続されたデバイスでHealth Thermometerサービスを発見
      sc = sl_bt_gatt_discover_primary_services_by_uuid(connection_handle,
                                                        sizeof(blinky_service_uuid),
                                                        blinky_service_uuid.data);
      app_assert_status(sc);
      gatt_procedure_in_progress = true;
      connection_state = ST_SERVICE_DISCOVER;
      break;

    // BLE接続が閉じられたときに受信されるイベント
    case sl_bt_evt_connection_closed_id:
      Serial.println("接続が閉じられました");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      connection_handle = __UINT8_MAX__;
      // スキャンを再開
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("スキャンを再開しました...");
      connection_state = ST_SCAN;
      break;

    // 新しいサービスが発見されたときに生成されるイベント
    case sl_bt_evt_gatt_service_id:
      Serial.println("GATTサービスが発見されました");
      // 発見されたThermometer Serviceのハンドルを保存
      blinky_service_handle = evt->data.evt_gatt_service.service;
      break;

    // 新しい特性が発見されたときに生成されるイベント
    case sl_bt_evt_gatt_characteristic_id:
      Serial.println("GATT特性が発見されました");
      // 発見されたTemperature Measurement特性のハンドルを保存
      led_control_char_handle = evt->data.evt_gatt_characteristic.characteristic;
      break;

    // GATT手続きが完了したときに受信されるイベント
    case sl_bt_evt_gatt_procedure_completed_id:
      Serial.println("GATT手続きが完了しました");
      gatt_procedure_in_progress = false;

      if (connection_state == ST_SERVICE_DISCOVER) {
        Serial.println("GATTサービス発見が終了しました");
        // 接続されたデバイスでthermometer特性を発見
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
        Serial.println("GATT特性発見が終了しました");
        connection_state = ST_READY;
        break;
      }
      break;

    // デフォルトイベントハンドラ
    default:
      Serial.print("BLEイベント: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************/ /**
 * BLE広告で設定された名前を検索
 *
 * @param[in] response スキャンから受信したBLE応答イベント
 *
 * @return 見つかった場合はtrue、そうでない場合はfalse
 *****************************************************************************/
static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response) {
  int i = 0;
  bool found = false;

  // 応答データを確認
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // タイプ0x09 = 完全なローカル名、0x08 = 短縮名
    // フィールドタイプが完全なローカル名と一致する場合
    if (advertisement_type == 0x09) {
      // デバイス名が一致するか確認
      if (memcmp(response->data.data + i + 2, advertised_name, strlen((const char*)advertised_name)) == 0) {
        found = true;
        break;
      }
    }
    // 次の広告レコードにジャンプ
    i = i + advertisement_length + 1;
  }
  return found;
}

#ifndef BLE_STACK_SILABS
#error "この例はSilicon Labs BLEスタックと互換性があります。'Tools > Protocol stack'で'BLE (Silabs)'を選択してください。"
#endif
```

上記のプログラムは、XIAO をクライアントとして動作させ、近くのBluetoothデバイスを検索します。BluetoothデバイスのUUIDが指定したUUIDと一致すると、そのデバイスに接続し、その特性値を取得します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEClient_result.png" style={{width:800, height:'auto'}}/></div>

#### プログラムの注釈

BLEサーバーのサンプルコードがどのように動作するかを簡単に見てみましょう。まず、BLE機能に必要なライブラリをインポートすることから始まります。その後、サービスと特性のUUIDを定義する必要があります。

```c
// GATTデータベースにBLEサービスを追加
// UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
const uuid_128 my_service_uuid = {
  .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
};

// BLEサービスに「通知」特性を追加
// UUID: 61a885a4-41c3-60d0-9a53-6d652a70d29c
const uuid_128 btn_report_characteristic_uuid = {
  .data = { 0x9c, 0xd2, 0x70, 0x2a, 0x65, 0x6d, 0x53, 0x9a, 0xd0, 0x60, 0xc3, 0x41, 0xa4, 0x85, 0xa8, 0x61 }
};
```

デフォルトのUUIDをそのまま使用することもできますし、[uuidgenerator.net](https://www.uuidgenerator.net/) にアクセスして、サービスや特性用のランダムなUUIDを生成することもできます。

次に、「XIAO_MG24 Server」という名前のBLEデバイスを作成します。この名前は自由に変更可能です。その後、BLEデバイスをサーバーとして設定します。その後、先ほど定義したUUIDを使用してBLEサーバーのサービスを作成します。

```c
sl_status_t sc;
// 新しいGATTデータベースを作成
sc = sl_bt_gattdb_new_session(&gattdb_session_id);
app_assert_status(sc);

// GATTデータベースにGeneric Accessサービスを追加
const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
sc = sl_bt_gattdb_add_service(gattdb_session_id,
                              sl_bt_gattdb_primary_service,
                              SL_BT_GATTDB_ADVERTISED_SERVICE,
                              sizeof(generic_access_service_uuid),
                              generic_access_service_uuid,
                              &generic_access_service_handle);
app_assert_status(sc);

// Generic Accessサービスにデバイス名特性を追加
// デバイス名特性の値はアドバタイズされます
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

// Generic Accessサービスを開始
sc = sl_bt_gattdb_start_service(gattdb_session_id, generic_access_service_handle);
app_assert_status(sc);

// GATTデータベースにBLEサービスを追加
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

次に、そのサービスの特性を設定します。ご覧の通り、先ほど定義したUUIDを使用し、特性のプロパティを引数として渡す必要があります。この場合、プロパティは「READ」と「NOTIFY」です。

```c
// BLEサービスに「通知」特性を追加
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
                                              1,                               // 最大長
                                              sizeof(notify_char_init_value),  // 初期値の長さ
                                              &notify_char_init_value,         // 初期値
                                              &notify_characteristic_handle);

// BLEサービスを開始
sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
app_assert_status(sc);

// GATTデータベースの変更をコミット
sc = sl_bt_gattdb_commit(gattdb_session_id);
app_assert_status(sc);
```

特性を作成した後、`sl_bt_gatt_server_notify_all()` メソッドを使用してその値を設定できます。この例では、値を「Hello World」というテキストに設定しています。このテキストは自由に変更可能です。将来のプロジェクトでは、このテキストをセンサーの読み取り値やランプの状態などに置き換えることができます。

最後に、サービスとアドバタイズを開始し、他のBLEデバイスがこのBLEデバイスをスキャンして見つけられるようにします。

```c
// アドバタイズを開始
ble_start_advertising();
```

これは、BLEサーバーを作成するための簡単な例です。このプログラムの機能は、2秒ごとに通知を送信することで、その内容は「Hello World」です。

### BLEセンサーデータ交換

次に、実際のケースを完成させるために現実世界に移ります。このケースでは、XIAO MG24の`getCPUTemp()`関数を使用して現在のMCUの温度を測定し、そのMCUの温度値をBluetoothを介して別のXIAO MG24に送信して、健康用温度計をシミュレートします。

2つのXIAOを準備する必要があります。一方はサーバーとして、もう一方はクライアントとして使用します。以下はサーバーとしてのサンプルプログラムです。サーバーとしてのXIAOは以下の主要なタスクを持っています。
- 最初に、`getCPUTemp()`関数を使用してMCUの現在の温度を取得します。
- 次に、Bluetoothサーバーを作成します。
- その後、Bluetoothを介して温度値を広告します。
- 最後に、リアルタイムの温度を表示します。

```c
// サーバー

/*
   BLE健康温度計の例

   この例は、BLEを介して温度測定を提供する最小限のBLE健康温度計プロファイルを実装します。

   スケッチの起動時に、設定された名前でBLE広告を開始し、その後、任意の接続を受け入れます。
   デバイスが接続され、健康温度計特性の通知を有効にすると、デバイスはCPU温度の読み取り値を温度計データとして送信します。
   EFR Connectアプリを使用して、この機能をテストするには、「デモ」タブに移動し、「健康温度計」を選択します。
   または、別のBLEボードに「ble_health_thermometer_client」デモをフラッシュして、2つのボードがBLEを介して温度測定値を交換するようにテストすることもできます。

   APIの使用方法について詳しくは、以下をご覧ください: https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   この例は「BLE (Silabs)」プロトコルスタックバリアントでのみ動作します。

   温度計デバイスをEFR Connectアプリでテストできます:
    - https://play.google.com/store/apps/details?id=com.siliconlabs.bledemo
    - https://apps.apple.com/us/app/efr-connect-ble-mobile-app/id1030932759

   対応ボード:
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   著者: Tamas Jozsi (Silicon Labs)
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
  
  // アンテナ機能をオンにする
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> 外部アンテナ使用 / LOW -> 内蔵アンテナ使用
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, LOW);
}

void loop()
{
  handle_temperature_indication();
}

/**************************************************************************//**
 * BLE通知を現在の温度で送信し、接続されたデバイスに通知が有効な場合は1秒待機します
 *****************************************************************************/
static void handle_temperature_indication()
{
  // 通知が有効でない場合は即座に終了
  if (!indication_enabled) {
    return;
  }

  // 現在のCPU温度を取得
  float temperature = getCPUTemp();

  // 温度をIEEE 11073浮動小数点値に変換
  int32_t millicelsius = (int32_t)(temperature * 1000);
  uint8_t buffer[5];
  uint32_t tmp_value = ((uint32_t)millicelsius & 0x00ffffffu) | ((uint32_t)(-3) << 24);
  buffer[0] = 0;
  buffer[1] = tmp_value & 0xff;
  buffer[2] = (tmp_value >> 8) & 0xff;
  buffer[3] = (tmp_value >> 16) & 0xff;
  buffer[4] = (tmp_value >> 24) & 0xff;

  // 通知を送信
  sl_bt_gatt_server_send_indication(connection_handle, temp_measurement_characteristic_handle, sizeof(buffer), buffer);

  // 温度をログに記録
  Serial.print("通知送信 - 現在の温度: ");
  Serial.print(temperature);
  Serial.println(" C");

  // 1秒待機
  delay(1000);
}

/**************************************************************************//**
 * Bluetoothスタックイベントハンドラー
 * BLEスタックでイベントが発生したときに呼び出されます
 *
 * @param[in] evt Bluetoothスタックからのイベント
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  switch (SL_BT_MSG_ID(evt->header)) {
    // BLEデバイスが正常に起動したときに受信されるイベント
    case sl_bt_evt_system_boot_id:
    {
      // ウェルカムメッセージを表示
      Serial.begin(115200);
      Serial.println();
      Serial.println("Silicon Labs BLE健康温度計の例");
      Serial.println("BLEスタック起動完了");
      // アプリケーション固有のGATT DBを初期化
      ble_initialize_gatt_db();
      // 広告を開始
      ble_start_advertising();
    }
    break;

    // BLE接続が開かれたときに受信されるイベント
    case sl_bt_evt_connection_opened_id:
      // 通知送信に必要な接続ハンドルを保存
      connection_handle = evt->data.evt_connection_opened.connection;
      Serial.println("接続が開かれました");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      break;

    // BLE接続が閉じられたときに受信されるイベント
    case sl_bt_evt_connection_closed_id:
      // 保存された値をリセット
      connection_handle = 0u;
      indication_enabled = false;
      Serial.println("接続が閉じられました");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      // 広告を再開
      ble_start_advertising();
      break;

    // GATT特性のステータスが変更されたときに受信されるイベント
    case sl_bt_evt_gatt_server_characteristic_status_id:
    {
      // 温度測定特性が変更された場合
      if (evt->data.evt_gatt_server_characteristic_status.characteristic == temp_measurement_characteristic_handle) {
        uint16_t client_config_flags = evt->data.evt_gatt_server_characteristic_status.client_config_flags;
        uint8_t status_flags = evt->data.evt_gatt_server_characteristic_status.status_flags;
        if ((client_config_flags == 0x02) && (status_flags == 0x01)) {
          // クライアント設定フラグで通知が有効（0x02）になり、ステータスフラグが変更を示している場合
          Serial.println("温度通知が有効になりました");
          indication_enabled = true;
        } else if ((client_config_flags == 0x00) && (status_flags == 0x01)) {
          // クライアント設定フラグで通知が無効（0x00）になり、ステータスフラグが変更を示している場合
          Serial.println("温度通知が無効になりました");
          indication_enabled = false;
        }
      }
    }
    break;

    // デフォルトイベントハンドラー
    default:
      Serial.print("BLEイベント: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************//**
 * BLE広告を開始
 * 初回呼び出し時に広告を初期化
 *****************************************************************************/
static void ble_start_advertising()
{
  static uint8_t advertising_set_handle = 0xff;
  static bool init = true;
  sl_status_t sc;

  if (init) {
    // 広告セットを作成
    sc = sl_bt_advertiser_create_set(&advertising_set_handle);
    app_assert_status(sc);

    // 広告間隔を100msに設定
    sc = sl_bt_advertiser_set_timing(
      advertising_set_handle,
      160,   // 最小広告間隔（ミリ秒 * 1.6）
      160,   // 最大広告間隔（ミリ秒 * 1.6）
      0,     // 広告期間
      0);    // 最大広告イベント数
    app_assert_status(sc);

    init = false;
  }

  // 広告データを生成
  sc = sl_bt_legacy_advertiser_generate_data(advertising_set_handle, sl_bt_advertiser_general_discoverable);
  app_assert_status(sc);

  // 広告を開始し、接続を有効化
  sc = sl_bt_legacy_advertiser_start(advertising_set_handle, sl_bt_advertiser_connectable_scannable);
  app_assert_status(sc);

  Serial.print("広告を開始しました: '");
  Serial.print((const char*)advertised_name);
  Serial.println("'...");
}

/**************************************************************************//**
 * GATTデータベースを初期化
 * 新しいGATTセッションを作成し、特定のサービスと特性を追加
 *****************************************************************************/
static void ble_initialize_gatt_db()
{
  sl_status_t sc;
  uint16_t gattdb_session_id;
  uint16_t service_handle;
  uint16_t device_name_characteristic_handle;
  uint16_t temp_type_characteristic_handle;

  // 新しいGATTデータベースを作成
  sc = sl_bt_gattdb_new_session(&gattdb_session_id);
  app_assert_status(sc);

  // Generic Accessサービス
  const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(generic_access_service_uuid),
                                generic_access_service_uuid,
                                &service_handle);
  app_assert_status(sc);

  // デバイス名特性
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

  // 健康温度計サービス
  const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(thermometer_service_uuid),
                                thermometer_service_uuid,
                                &service_handle);
  app_assert_status(sc);

  // 温度測定特性
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

  // 温度タイプ特性
  const sl_bt_uuid_16_t temp_type_characteristic_uuid = { .data = { 0x1D, 0x2A } };
  // 温度タイプ: 体温 (2)
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

  // 健康温度計サービスを開始
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service_handle);
  app_assert_status(sc);

  // GATT DBの変更をコミット
  sc = sl_bt_gattdb_commit(gattdb_session_id);
  app_assert_status(sc);
}

#ifndef BLE_STACK_SILABS
  #error "この例はSilicon Labs BLEスタックと互換性があります。'Tools > Protocol stack'で'BLE (Silabs)'を選択してください。"
#endif
```

プログラムを1つのXIAOにアップロードした後、プログラムが正常に動作する場合は、スマートフォンを取り出してnRF Connectアプリを使用し、**XIAOMG24_BLE**という名前のBluetoothデバイスを検索して接続します。そして、以下に示すボタンをクリックすると、温度データ情報を受信できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-5.jpg" style={{width:300, height:'auto'}}/></div>

次に、データを収集して表示するクライアントとして機能するもう1つのXIAOを取り出します。

```c
// クライアント

/*
   BLE ヘルスサーモメータークライアントの例

   この例では、'BLE Health Thermometer'の例を実行している別のボードに接続し、BLEを介して温度を読み取ります。

   起動時に、このスケッチは'ble_health_thermometer'の例を実行し、
   "Thermometer Example"として広告している別のボードをスキャンします。
   ボードが見つかると、接続を確立し、サービスと特性を発見し、
   温度測定の購読を開始します。
   購読後、この例は定期的に別のボードから温度データを受信し、
   シリアルに出力します。

   APIの使用方法については以下を参照してください: https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   この例は'Silabs BLE'プロトコルスタックバリアントでのみ動作します。

   対応ボード:
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   著者: Tamas Jozsi (Silicon Labs)
 */

#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.begin(115200);

  // アンテナ機能をオンにする
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> 外部アンテナ使用 / LOW -> 内蔵アンテナ使用
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, LOW);
}

void loop()
{
}

// 接続状態
enum conn_state_t {
  ST_BOOT,
  ST_SCAN,
  ST_CONNECT,
  ST_SERVICE_DISCOVER,
  ST_CHAR_DISCOVER,
  ST_REQUEST_INDICATION,
  ST_RECEIVE_DATA
};

// IEEE 11073 浮動小数点構造体
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
 * Bluetoothスタックイベントハンドラ
 * BLEスタックでイベントが発生したときに呼び出される
 *
 * @param[in] evt Bluetoothスタックからのイベント
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // BLEデバイスが正常に起動したときに受信されるイベント
    case sl_bt_evt_system_boot_id:
      // ウェルカムメッセージを表示
      Serial.println();
      Serial.println("Silicon Labs BLE ヘルスサーモメータークライアントの例");
      Serial.println("BLEスタックが起動しました");
      // 他のBLEデバイスをスキャン開始
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active, 16, 16);
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("スキャンを開始しました...");
      connection_state = ST_SCAN;
      break;

    // 他のBLEデバイスの広告をスキャンしたときに受信されるイベント
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      Serial.println("BLEスキャンレポートを受信しました");
      // 他のデバイスの名前を見つけた場合
      if (find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report))) {
        Serial.println("ターゲットデバイスが見つかりました");
        // スキャンを停止
        sc = sl_bt_scanner_stop();
        app_assert_status(sc);
        // デバイスに接続
        sc = sl_bt_connection_open(evt->data.evt_scanner_legacy_advertisement_report.address,
                                   evt->data.evt_scanner_legacy_advertisement_report.address_type,
                                   sl_bt_gap_phy_1m,
                                   NULL);
        app_assert_status(sc);
        connection_state = ST_CONNECT;
      }
      break;

    // BLE接続が開かれたときに受信されるイベント
    case sl_bt_evt_connection_opened_id:
      Serial.println("接続が開かれました");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      // 接続されたデバイスでヘルスサーモメーターサービスを発見
      sc = sl_bt_gatt_discover_primary_services_by_uuid(evt->data.evt_connection_opened.connection,
                                                        sizeof(thermometer_service_uuid),
                                                        thermometer_service_uuid);
      app_assert_status(sc);
      connection_state = ST_SERVICE_DISCOVER;
      break;

    // BLE接続が閉じられたときに受信されるイベント
    case sl_bt_evt_connection_closed_id:
      Serial.println("接続が閉じられました");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      // スキャンを再開
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("スキャンを再開しました...");
      connection_state = ST_SCAN;
      break;

    // 新しいサービスが発見されたときに生成されるイベント
    case sl_bt_evt_gatt_service_id:
      Serial.println("GATTサービスが発見されました");
      // 発見されたサーモメーターサービスのハンドルを保存
      thermometer_service_handle = evt->data.evt_gatt_service.service;
      break;

    // 新しい特性が発見されたときに生成されるイベント
    case sl_bt_evt_gatt_characteristic_id:
      Serial.println("GATT特性が発見されました");
      // 発見された温度測定特性のハンドルを保存
      temp_measurement_char_handle = evt->data.evt_gatt_characteristic.characteristic;
      break;

    // GATTプロシージャが完了したときに受信されるイベント
    case sl_bt_evt_gatt_procedure_completed_id:
      Serial.println("GATTプロシージャが完了しました");

      if (connection_state == ST_SERVICE_DISCOVER) {
        Serial.println("GATTサービスの発見が終了しました");
        // 接続されたデバイスでサーモメーター特性を発見
        sc = sl_bt_gatt_discover_characteristics_by_uuid(evt->data.evt_gatt_procedure_completed.connection,
                                                         thermometer_service_handle,
                                                         sizeof(temp_measurement_characteristic_uuid.data),
                                                         temp_measurement_characteristic_uuid.data);
        app_assert_status(sc);
        connection_state = ST_CHAR_DISCOVER;
        break;
      }

      if (connection_state == ST_CHAR_DISCOVER) {
        Serial.println("GATT特性の発見が終了しました");
        // 温度測定通知を有効化
        sc = sl_bt_gatt_set_characteristic_notification(evt->data.evt_gatt_procedure_completed.connection,
                                                        temp_measurement_char_handle,
                                                        sl_bt_gatt_indication);
        app_assert_status(sc);
        connection_state = ST_REQUEST_INDICATION;
        break;
      }

      if (connection_state == ST_REQUEST_INDICATION) {
        Serial.println("温度測定通知が有効化されました");
        connection_state = ST_RECEIVE_DATA;
      }
      break;

    // 特性値が受信されたときに受信されるイベント（通知など）
    case sl_bt_evt_gatt_characteristic_value_id:
    {
      Serial.println("GATTデータを受信しました");
      // イベントから受信データを取得
      uint8_t* char_value = &(evt->data.evt_gatt_characteristic_value.value.data[0]);
      // 浮動小数点に変換
      float temperature = translate_IEEE_11073_temperature_to_float((IEEE_11073_float *)(char_value + 1));
      // シリアルに出力
      Serial.print("受信した温度: ");
      Serial.print(temperature);
      Serial.println(" C");

      sc = sl_bt_gatt_send_characteristic_confirmation(evt->data.evt_gatt_characteristic_value.connection);
      app_assert_status(sc);
    }
    break;

    // デフォルトイベントハンドラ
    default:
      Serial.print("BLEイベント: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************//**
 * BLE広告で設定された名前を検索
 *
 * @param[in] response スキャンから受信したBLE応答イベント
 *
 * @return 見つかった場合はtrue、そうでない場合はfalse
 *****************************************************************************/
static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t *response)
{
  int i = 0;
  bool found = false;

  // 応答データを確認
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // タイプ0x09 = 完全なローカル名、0x08 = 短縮名
    // フィールドタイプが完全なローカル名と一致する場合
    if (advertisement_type == 0x09) {
      // デバイス名が一致するか確認
      if (memcmp(response->data.data + i + 2, advertised_name, strlen((const char*)advertised_name)) == 0) {
        found = true;
        break;
      }
    }
    // 次の広告レコードに移動
    i = i + advertisement_length + 1;
  }
  return found;
}

/**************************************************************************//**
 * IEEE-11073温度値を浮動小数点に変換
 *
 * @param[in] IEEE_11073_value 変換するIEEE 11073浮動小数点値
 *
 * @return 浮動小数点値、失敗時はNAN
 *****************************************************************************/
static float translate_IEEE_11073_temperature_to_float(IEEE_11073_float const *IEEE_11073_value)
{
  int32_t mantissa = 0;
  uint8_t mantissa_l;
  uint8_t mantissa_m;
  int8_t mantissa_h;
  int8_t exponent;

  // 不正な引数: NULLポインタが渡された場合
  if (!IEEE_11073_value) {
    return NAN;
  }

  // フィールドをキャッシュ
  mantissa_l = IEEE_11073_value->mantissa_l;
  mantissa_m = IEEE_11073_value->mantissa_m;
  mantissa_h = IEEE_11073_value->mantissa_h;
  exponent =  IEEE_11073_value->exponent;

  // IEEE-11073標準のNaN値が渡された場合
  if ((mantissa_l == 0xFF) && (mantissa_m == 0xFF) && (mantissa_h == 0x7F) && (exponent == 0x00)) {
    return NAN;
  }

  // 24ビット符号付き値を32ビット符号付き値に変換
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
  #error "この例はSilicon Labs BLEスタックと互換性があります。'Tools > Protocol stack'で'BLE (Silabs)'を選択してください。"
#endif
```

最後に、サーバーとクライアントプログラムが正常に動作すると、クライアントがシリアルポートを通じて以下の情報を出力するのを見ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEClient_result-1.png" style={{width:700, height:'auto'}}/></div>

#### プログラムの注釈

上記のプログラムについて、重要な部分を選んで説明します。まずはサーバープログラムから始めます。

プログラムの冒頭で、Bluetoothサーバーの名前を定義します。この名前は任意に設定できますが、後でこの名前を使ってBluetoothデバイスを検索する必要があるため、覚えておく必要があります。

```c
const uint8_t advertised_name[] = "XIAOMG24_BLE";
```

チュートリアルの前のセクションで説明したように、サーバーにはCharacteristicがあり、Characteristicには値やその他の内容が含まれます。そのため、広告を作成する際にはこの原則に従う必要があります。

```c
// 健康温度計サービス
const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
sc = sl_bt_gattdb_add_service(gattdb_session_id,
                              sl_bt_gattdb_primary_service,
                              SL_BT_GATTDB_ADVERTISED_SERVICE,
                              sizeof(thermometer_service_uuid),
                              thermometer_service_uuid,
                              &service_handle);
app_assert_status(sc);

// 温度測定Characteristic
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

上記のプログラムでは、`sl_bt_gattdb_add_service()`を使用してサーバーを作成していることがわかります。このパラメータは特定のUUID: **0x1809** です。GATTの規則では、**0x1809** は温度計タイプのデータを示し、同じCharacteristicのUUID: **0x2A1C** も特別な意味を持っています。GATTでは、これが温度測定を示します。これは温度値のケースに適しているため、ここではこのように定義しています。GATTが準備している特定のUUIDの意味については[こちら](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/GATT.pdf)を参照してください。

もちろん、GATT標準に従わずにUUIDを設定することも可能です。ただし、これらの値が一意であり、クライアントがこれらのUUIDを認識して値を見つける能力に影響を与えないことを確認する必要があります。[uuidgenerator.net](https://www.uuidgenerator.net/)にアクセスして、サービスやCharacteristic用のランダムなUUIDを生成することができます。

最後に、MCUの温度値を1秒ごとに測定して広告します。

次のステップはクライアントプログラムで、こちらの方がはるかに複雑に見えるでしょう。

プログラムの冒頭では、サーバー側で設定した内容と一致していることを確認する必要があります。

```c
const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
const uint8_t advertised_name[] = "XIAOMG24_BLE";
```

次に、Bluetoothスタックイベントハンドラ関数を書きます。この関数は、Bluetoothデバイスの初期化、Bluetoothの接続と切断、近くのBluetoothデバイスの検索など、さまざまなBluetoothイベントによってトリガーされるコールバックタスクを主に処理します。

```c
/**************************************************************************//**
 * Bluetoothスタックイベントハンドラ
 * BLEスタックでイベントが発生したときに呼び出されます
 *
 * @param[in] evt Bluetoothスタックからのイベント
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
```

以下のプロセスは、サーバー内の温度値を見つけるための鍵となります。まず、サーバーUUIDを正常に特定し、サーバー内のCharacteristic UUIDを見つけた後、取得したデータを処理します。以下のコードスニペットに示すように、最終的に処理されたデータをシリアルポートを通じて出力します。この解析方法は、Bluetoothのデータ構造と一対一で対応しています。

```c
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    
    ...

    // Characteristic値が受信されたときにこのイベントが発生します（例: インディケーション）
    case sl_bt_evt_gatt_characteristic_value_id:
    {
      Serial.println("GATTデータを受信しました");
      // イベントから受信したデータを取得
      uint8_t* char_value = &(evt->data.evt_gatt_characteristic_value.value.data[0]);
      // データをfloatに変換
      float temperature = translate_IEEE_11073_temperature_to_float((IEEE_11073_float *)(char_value + 1));
      // シリアルに出力
      Serial.print("受信した温度: ");
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
上記の例は、単一センサーの単一値の最も簡単な例を示しており、Silicon Labsから提供されています。SiliconLabs BLE APIの使用方法をより深く理解したい場合は、こちらのチュートリアルを読むことをお勧めします。


- [SiliconLabs Bluetooth Stack API リファレンス](https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/)
:::



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>