---
title: Seeed Studio XIAO MG24 Sense 内蔵センサー
description: 本記事では、XIAO MG24 Sense のマイクの使用方法について説明します。
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /ja/xiao_mg24_sense_built_in_sensor
keywords:
  - XIAO
  - MG24
last_update:
  date: 05/15/2025
  author: Jason
sidebar_position: 3
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO MG24 Sense 内蔵センサーの使用方法

## XIAO MG24 Sense IMU

### 内蔵センサーの概要

**6軸IMU（慣性計測ユニット）** センサーである **LSM6DS3TR-C** は、加速度計とジャイロスコープを統合しており、物体の三次元空間での動きや姿勢を測定します。特に、LSM6DS3TR-C には以下の機能があります：

**加速度計の機能:**
- X、Y、Z軸に沿った物体の加速度を測定します。物体の動き（例：静止、加速、減速）や傾きの変化（例：物体の角度）を感知できます。
- 歩行、位置変化、振動などを検出するために使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**ジャイロスコープの機能（ジャイロスコープ）:**
- X、Y、Z軸周りの物体の角速度、つまり物体の回転を測定します。
- 回転、回転速度、方向の変化を検出するために使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- **X軸角度（ロール）** は、X軸周りの回転方向の角度です。
- **Y軸角度（ピッチ）** は、Y軸周りの回転方向の角度です。
- **Z軸角度（ヨー）** は、Z軸周りの回転方向の角度です。

### ソフトウェア準備

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

GitHub のダウンロードリンクをクリックして、6軸センサー用のドライバを取得してください。

### コード実装
```cpp

#include <LSM6DS3.h>
#include <Wire.h>

// LSM6DS3クラスのインスタンスを作成
LSM6DS3 myIMU(I2C_MODE, 0x6A);    // I2Cデバイスアドレス 0x6A
float aX, aY, aZ, gX, gY, gZ;
const float accelerationThreshold = 2.5; // 重要な加速度の閾値（単位：G）
const int numSamples = 119;
int samplesRead = numSamples;

void setup() {
  // 初期設定
  Serial.begin(9600);
  while (!Serial);

  pinMode(PD5,OUTPUT);
  digitalWrite(PD5,HIGH);
  // IMUを設定するために.begin()を呼び出す
  if (myIMU.begin() != 0) {
    Serial.println("デバイスエラー");
  } else {
    Serial.println("aX,aY,aZ,gX,gY,gZ");
  }
}

void loop() {
  // 重要な動きを待機
  while (samplesRead == numSamples) {
    // 加速度データを読み取る
    aX = myIMU.readFloatAccelX();
    aY = myIMU.readFloatAccelY();
    aZ = myIMU.readFloatAccelZ();

    // 絶対値を合計
    float aSum = fabs(aX) + fabs(aY) + fabs(aZ);

    // 閾値を超えているか確認
    if (aSum >= accelerationThreshold) {
      // サンプル読み取りカウントをリセット
      samplesRead = 0;
      break;
    }
  }

  // 前回の重要な動き検出以降、必要なサンプルがすべて読み取られたか確認
  while (samplesRead < numSamples) {
    // 新しい加速度とジャイロスコープデータが利用可能か確認
    // 加速度とジャイロスコープデータを読み取る

    samplesRead++;

    // データをCSV形式で出力
    Serial.print(myIMU.readFloatAccelX(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatAccelY(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatAccelZ(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroX(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroY(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroZ(), 3);
    Serial.println();

    if (samplesRead == numSamples) {
      // 最後のサンプルの場合、空行を追加
      Serial.println();
    }
  }
}
```
:::tip

LSM6DS3ライブラリの更新に伴い、以前にこのライブラリを追加している場合は、バージョン2.0.4以上を再ダウンロードし、ZIPファイルをArduinoに追加する必要があります。

:::
### 機能概要
- **ライブラリのインクルード**
  ```cpp
    #include <LSM6DS3.h> 
    #include <Wire.h>
  ```
  - LSM6DS3センサーとの通信用ライブラリを含みます。
  - I2C通信用ライブラリを含みます。
    
- **センサーインスタンスの作成**
    - `LSM6DS3 myIMU(I2C_MODE, 0x6A)` は、IMUセンサー用のLSM6DS3クラスのインスタンスを作成し、I2C通信モードとデバイスアドレス0x6Aを指定します。

- **変数と定数**
    - `float aX, aY, aZ, gX, gY, gZ`: 加速度計とジャイロスコープデータを格納する変数。
    - `const float accelerationThreshold = 2.5`: 重要な動きを検出するための閾値（単位：G）。
    - `const int numSamples = 119`: 重要な動きを検出した後に収集するサンプル数。
    - `int samplesRead = numSamples`: サンプルカウンタを初期化し、データがまだ収集されていないことを示します。

- **基本設定**
  ```cpp
    pinMode(PD5,OUTPUT);
    digitalWrite(PD5,HIGH);
  ```

- ジャイロ有効ピンをオンにします。

- **データ処理**
    ```cpp
    aX = myIMU.readFloatAccelX();
    aY = myIMU.readFloatAccelY();
    aZ = myIMU.readFloatAccelZ();
    float aSum = fabs(aX) + fabs(aY) + fabs(aZ);
    ``` 

  - X軸方向の加速度を読み取ります。
  - Y軸方向の加速度を読み取ります。
  - Z軸方向の加速度を読み取ります。
  - 加速度データの絶対値の合計を計算します。`fabs()`は絶対値を返します。

  ```cpp
    // 閾値を超えているか確認
    if (aSum >= accelerationThreshold) {
      // サンプル読み取り回数をリセット
      samplesRead = 0;
      break;
    }
  ```
  - 絶対加速度値の合計が設定された閾値以上の場合、サンプルカウント`samplesRead`を0にリセットし、ループを終了します。

- **データ確認**
  ```cpp
  while (samplesRead < numSamples) {
    samplesRead++;
    .
    .
    .
    .
    .
    if (samplesRead == numSamples) {
      // 最後のサンプルの場合は空行を追加
      Serial.println();
    }
  }
  ```

  - 別のループに移動し、必要なサンプル数が読み取られたか確認します。
  - `samplesRead`のカウントを増加させます。
  - すべてのサンプルが読み取られた場合、データ出力を区切るために空行を出力します。

### 結果チャート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/six_resutl.png" style={{width:700, height:'auto'}}/></div>

### さらに詳しく

より多くのサンプルコードが必要な場合は、次をクリックしてください：**"File" -> Example -> Seeed Arduino LSM6DS3"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/33.png" style={{width:500, height:'auto'}}/></div>

## IMU 高度なデモ

### ハードウェア準備

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino-XIAO-拡張ボード</th>
			<th>Seeed Studio XIAO MG24 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
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

### ソフトウェア準備

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/arduino_mouse.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
ツールバーで対応するスタックを選択してプログラムを焼き込む必要があります。
:::

<details>

<summary>プログラムコード</summary>

```cpp
#include <LSM6DS3.h>
#include "Wire.h"

#define DEVICE_NAME "XIAO MG24 Mouse"

#define IMU_ACC_X_THRESHOLD 10
#define IMU_ACC_Y_THRESHOLD 10

// マウスボタンイベント
#define LMB_PRESSED 1

// HIDレポートデータ
struct mouse_data {
  int8_t delta_x;
  int8_t delta_y;
  uint8_t buttons;
};
static mouse_data report;

// HIDレポートデータバッファ
static uint8_t report_array[] = { 0x00, 0x00, 0x00 };

static uint8_t connection_handle = SL_BT_INVALID_CONNECTION_HANDLE;
static uint32_t bonding_handle = SL_BT_INVALID_BONDING_HANDLE;
static uint16_t hid_report;

// デバイス情報サービス
const uint8_t manufacturer[] = "Silicon Labs";
const uint8_t model_no[] = "1";
const uint8_t serial_no[] = "1";
const uint8_t hw_rev[] = "1";
const uint8_t fw_rev[] = "1";
const uint8_t sw_rev[] = "1";

static bd_addr ble_address = { 0x00u, 0x00u, 0x00u, 0x00u, 0x00u, 0x00u };
static bool button_press = false;
static bool button_press_prev = false;
static int32_t acc_x = 0, acc_y = 0;
static sl_status_t sc = SL_STATUS_OK;

static void ble_initialize_gatt_db();
static void ble_start_advertising();
static void mouse_button_callback();

// 左クリック用にボタンをオプションで接続
#define MOUSE_BUTTON D1

LSM6DS3 myIMU(I2C_MODE, 0x6A);

void setup()
{
  // レポートデータを初期化
  memset(&report, 0, sizeof(report));

  // IMU電源を有効化
  pinMode(PD5, OUTPUT);
  digitalWrite(PD5, HIGH);
  delay(300);

  pinMode(MOUSE_BUTTON, INPUT_PULLUP);
  attachInterrupt(MOUSE_BUTTON, mouse_button_callback, CHANGE);

  Serial.begin(115200);

  Serial.println("XIAO MG24 BLE mouse");

  myIMU.begin();
  Serial.println("---");
  Serial.println("IMU initialized");
}

void loop()
{
  // '左マウスボタン'ビットを更新
  if (button_press) {
    report.buttons |= LMB_PRESSED;
    if (!button_press_prev) {
      button_press_prev = true;
      Serial.println("Button pressed");
    }
  } else {
    button_press_prev = false;
    report.buttons &= ~LMB_PRESSED;
  }

  // ボードの正しい向きに合わせてxとyを変更
  acc_y = (int32_t)(myIMU.readFloatAccelX() * 10.0f);
  acc_x = (int32_t)(myIMU.readFloatAccelY() * 10.0f * -1.0f);

  // 加速度値が閾値を超えた場合、閾値を割り当てる
  if (acc_x > IMU_ACC_X_THRESHOLD) {
    report.delta_x = IMU_ACC_X_THRESHOLD;
  } else if (acc_x < (-1 * IMU_ACC_X_THRESHOLD)) {
    report.delta_x = (-1 * IMU_ACC_X_THRESHOLD);
  } else {
    report.delta_x = acc_x;
  }

  if (acc_y > IMU_ACC_Y_THRESHOLD) {
    report.delta_y = IMU_ACC_Y_THRESHOLD;
  } else if (acc_y < (-1 * IMU_ACC_Y_THRESHOLD)) {
    report.delta_y = (-1 * IMU_ACC_Y_THRESHOLD);
  } else {
    report.delta_y = acc_y;
  }

  memcpy(report_array, &report, sizeof(report));
  if (connection_handle != SL_BT_INVALID_CONNECTION_HANDLE && bonding_handle != SL_BT_INVALID_BONDING_HANDLE) {
    // GATT通知でレポートデータの変更を示す
    sc = sl_bt_gatt_server_notify_all(hid_report, sizeof(report_array), report_array);
    if (sc != SL_STATUS_OK) {
      Serial.print("sl_bt_gatt_server_notify_all() returned with error code 0x");
      Serial.println(sc, HEX);
    } else {
      Serial.print("cursor [delta-X: ");
      Serial.print(report.delta_x, DEC);
      Serial.print(" delta-Y: ");
      Serial.print(report.delta_y, DEC);
      Serial.print(" ] LMB: ");
      Serial.println(report.buttons, HEX);
    }
  }
}

/******************************************************************************
 * マウスボタンコールバック
 *****************************************************************************/
void mouse_button_callback()
{
  if (digitalRead(MOUSE_BUTTON) == LOW) {
    button_press = true;
  } else {
    button_press = false;
  }
}

/******************************************************************************
 * Bluetoothスタックイベントハンドラ
 * BLEスタックでイベントが発生したときに呼び出される
 *
 * @param[in] evt Bluetoothスタックからのイベント
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt)
{
  sl_status_t sc = SL_STATUS_OK;
  uint8_t ble_address_type;

  switch (SL_BT_MSG_ID(evt->header)) {
    // -------------------------------
    // デバイスが起動し、ラジオが準備完了したことを示すイベント
    case sl_bt_evt_system_boot_id:
    {
      // BLEアドレスとアドレスタイプを取得
      sc = sl_bt_system_get_identity_address(&ble_address, &ble_address_type);
      app_assert_status(sc);

      // ウェルカムメッセージを出力
      Serial.begin(115200);
      Serial.println();
      Serial.println("BLE stack booted");

      // アプリケーション固有のGATT DBを初期化
      ble_initialize_gatt_db();

      // HID入力デバイスには必須のセキュリティレベルとボンディングが必要
      sc = sl_bt_sm_configure(0, sl_bt_sm_io_capability_noinputnooutput);
      app_assert_status(sc);

      // ボンディングを許可
      sc = sl_bt_sm_set_bondable_mode(1);
      app_assert_status(sc);

      ble_start_advertising();
    }
    break;

    // -------------------------------
    // BLE接続が開かれたことを示すイベント
    case sl_bt_evt_connection_opened_id:
    {
      // インディケーション送信に必要な接続ハンドルを保存
      connection_handle = evt->data.evt_connection_opened.connection;
      bonding_handle = evt->data.evt_connection_opened.bonding;
      Serial.print("Connection opened - handle 0x");
      Serial.println(connection_handle, HEX);

      if (bonding_handle == SL_BT_INVALID_BONDING_HANDLE) {
        Serial.println("Connection not bonded yet");
      } else {
        Serial.println("Connection bonded");
      }

      Serial.println("Increase security");
      sc = sl_bt_sm_increase_security(evt->data.evt_connection_opened.connection);
      app_assert_status(sc);
    }
    break;

    // -------------------------------
    // ボンディングが成功したことを示すイベント
    case sl_bt_evt_sm_bonded_id:
    {
      Serial.print("Bonded - handle: 0x");
      Serial.print(evt->data.evt_sm_bonded.connection, HEX);
      bonding_handle = evt->data.evt_sm_bonded.bonding;
      connection_handle = evt->data.evt_sm_bonded.connection;

      Serial.print(" - security mode: 0x");
      Serial.println(evt->data.evt_sm_bonded.security_mode, HEX);
    }
    break;

    // -------------------------------
    // BLE接続が閉じられたことを示すイベント
    case sl_bt_evt_connection_closed_id:
    {
      Serial.print("Connection closed - handle: 0x");
      Serial.print(connection_handle, HEX);
      Serial.print(" reason: 0x");
      Serial.println(evt->data.evt_connection_closed.reason, HEX);

      connection_handle = SL_BT_INVALID_CONNECTION_HANDLE;
      bonding_handle = SL_BT_INVALID_BONDING_HANDLE;

      sc = sl_bt_sm_delete_bondings();
      Serial.println("Deleted bondings");
      app_assert_status(sc);

      ble_start_advertising();
    }
    break;

    // -------------------------------
    // 接続パラメータが変更されたことを示すイベント
    case sl_bt_evt_connection_parameters_id:
    {
      Serial.print("Set connection parameters, security_mode: ");
      Serial.println(evt->data.evt_connection_parameters.security_mode, HEX);
    }
    break;

    // -------------------------------
    // ボンディングが失敗したことを示すイベント
    case sl_bt_evt_sm_bonding_failed_id:
    {
      Serial.print("Bonding failed, reason: 0x");
      Serial.println(evt->data.evt_sm_bonding_failed.reason, HEX);
      Serial.println("Delete bondings.");

      sc = sl_bt_sm_delete_bondings();
      app_assert_status(sc);

      Serial.println("Bondings deleted");
      Serial.print("Close connection - handle: 0x");
      Serial.println(evt->data.evt_sm_bonding_failed.connection, HEX);
    }
    break;

    // -------------------------------
    // デフォルトイベントハンドラ
    default:
      break;
  }
}

/******************************************************************************
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

  Serial.print("Started advertising as '");
  Serial.print(DEVICE_NAME);
  Serial.print("' address: ");
  // アドレスを'FF:FF:FF:FF:FF:FF'形式で出力
  for (uint8_t i = (sizeof(bd_addr) - 1); i > 0; i--) {
    Serial.print(ble_address.addr[i], HEX);
    Serial.print(":");
  }
  Serial.println(ble_address.addr[0], HEX);
}

/******************************************************************************
 * GATTデータベースを初期化
 * 新しいGATTセッションを作成し、特定のサービスと特性を追加
 *****************************************************************************/
static void ble_initialize_gatt_db()
{
  sl_status_t sc;
  uint16_t gattdb_session_id;
  uint16_t service;
  uint16_t characteristic;
  uint16_t descriptor;

  // 新しいGATTデータベースを作成
  sc = sl_bt_gattdb_new_session(&gattdb_session_id);
  app_assert_status(sc);

  // Generic Accessサービス
  uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                2,
                                generic_access_service_uuid,
                                &service);
  app_assert_status(sc);

  // デバイス名特性
  sl_bt_uuid_16_t device_name_uuid = { .data = { 0x00, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              (SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE),
                                              0,
                                              0,
                                              device_name_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              strlen(DEVICE_NAME),
                                              strlen(DEVICE_NAME),
                                              (uint8_t *)DEVICE_NAME,
                                              &characteristic);
  app_assert_status(sc);

  // 外観特性
  sl_bt_uuid_16_t appearence_uuid = { .data = { 0x01, 0x2A } };
  const uint8_t appearance_value[] = { 0xC2, 0x03 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              appearence_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              2,
                                              sizeof(appearance_value),
                                              appearance_value,
                                              &characteristic);
  app_assert_status(sc);

  // Generic Accessサービス開始
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // バッテリーサービス
  const uint8_t battery_service_uuid[] = { 0x0F, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                0,
                                sizeof(battery_service_uuid),
                                battery_service_uuid,
                                &service);
  app_assert_status(sc);

  // バッテリーレベル特性
  const sl_bt_uuid_16_t battery_level_uuid = { .data = { 0x19, 0x2A } };
  const uint8_t battery_level_init_value = 100;
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              battery_level_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(battery_level_init_value),
                                              sizeof(battery_level_init_value),
                                              &battery_level_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // 特性プレゼンテーションフォーマット記述子
  const sl_bt_uuid_16_t chara_presentation_format_descriptor_uuid = { .data = { 0x04, 0x29 } };
  const uint8_t chara_presentation_format_value[] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          SL_BT_GATTDB_DESCRIPTOR_READ,
                                          0,
                                          chara_presentation_format_descriptor_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(chara_presentation_format_value),
                                          sizeof(chara_presentation_format_value),
                                          chara_presentation_format_value,
                                          &descriptor);
  app_assert_status(sc);

  // クライアント特性構成記述子
  const sl_bt_uuid_16_t client_configuration_descriptor_uuid = { .data = { 0x02, 0x29 } };
  const uint8_t client_configuration_value[] = { 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          (SL_BT_GATTDB_DESCRIPTOR_READ | SL_BT_GATTDB_DESCRIPTOR_WRITE),
                                          0,
                                          client_configuration_descriptor_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(client_configuration_value),
                                          sizeof(client_configuration_value),
                                          client_configuration_value,
                                          &descriptor);
  app_assert_status(sc);

  // バッテリーサービス開始
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // デバイス情報サービス
  const uint8_t device_info_service_uuid[] = { 0x0A, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                0,
                                sizeof(device_info_service_uuid),
                                device_info_service_uuid,
                                &service);
  app_assert_status(sc);

  // メーカー名文字列特性
  const sl_bt_uuid_16_t manufacturer_uuid = { .data = { 0x29, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              manufacturer_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(manufacturer) - 1),
                                              (sizeof(manufacturer) - 1),
                                              manufacturer,
                                              &characteristic);
  app_assert_status(sc);

  // モデル番号文字列特性
  const sl_bt_uuid_16_t model_no_uuid = { .data = { 0x24, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              model_no_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(model_no) - 1),
                                              (sizeof(model_no) - 1),
                                              model_no,
                                              &characteristic);
  app_assert_status(sc);

  // シリアル番号文字列特性
  const sl_bt_uuid_16_t serial_no_uuid = { .data = { 0x25, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              serial_no_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(serial_no) - 1),
                                              (sizeof(serial_no) - 1),
                                              serial_no,
                                              &characteristic);
  app_assert_status(sc);

  // ハードウェアリビジョン文字列特性
  const sl_bt_uuid_16_t hw_rev_uuid = { .data = { 0x27, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              hw_rev_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(hw_rev) - 1),
                                              (sizeof(hw_rev) - 1),
                                              hw_rev,
                                              &characteristic);
  app_assert_status(sc);

  // ファームウェアリビジョン文字列特性
  const sl_bt_uuid_16_t fw_rev_uuid = { .data = { 0x26, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              fw_rev_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(fw_rev) - 1),
                                              (sizeof(fw_rev) - 1),
                                              fw_rev,
                                              &characteristic);
  app_assert_status(sc);

  // ソフトウェアリビジョン文字列特性
  const sl_bt_uuid_16_t sw_rev_uuid = { .data = { 0x28, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              sw_rev_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(sw_rev) - 1),
                                              (sizeof(sw_rev) - 1),
                                              sw_rev,
                                              &characteristic);
  app_assert_status(sc);

  // システムID特性
  const sl_bt_uuid_16_t sys_id_uuid = { .data = { 0x23, 0x2A } };
  const uint8_t sys_id_initial_value[] = { 0x12, 0x34, 0x56, 0xFF, 0xFE, 0x9A, 0xBC, 0xDE };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              sys_id_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(sys_id_initial_value),
                                              sizeof(sys_id_initial_value),
                                              sys_id_initial_value,
                                              &characteristic);
  app_assert_status(sc);

  // PnP ID特性
  const sl_bt_uuid_16_t pnp_id_uuid = { .data = { 0x50, 0x2A } };
  const uint8_t pnp_id_initial_value[] = { 0x02, 0x10, 0xC4, 0x00, 0x01, 0x00, 0x01 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              pnp_id_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(pnp_id_initial_value),
                                              sizeof(pnp_id_initial_value),
                                              pnp_id_initial_value,
                                              &characteristic);
  app_assert_status(sc);

  // デバイス情報サービス開始
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // HIDサービス
  uint8_t hid_service_uuid[] = { 0x12, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                2,
                                hid_service_uuid,
                                &service);
  app_assert_status(sc);

  // プロトコルモード特性
  sl_bt_uuid_16_t hid_protocol_mode_uuid = { .data = { 0x4E, 0x2A } };
  const uint8_t hid_protocol_mode_init_value[] = { 1 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              (SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE_NO_RESPONSE),
                                              0,
                                              0,
                                              hid_protocol_mode_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_protocol_mode_init_value),
                                              sizeof(hid_protocol_mode_init_value),
                                              hid_protocol_mode_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HIDレポート特性
  const sl_bt_uuid_16_t hid_report_uuid = { .data = { 0x4D, 0x2A } };
  const uint8_t hid_report_init_value[] = { 0x00, 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              (SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE | SL_BT_GATTDB_CHARACTERISTIC_NOTIFY),
                                              0,
                                              0,
                                              hid_report_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_report_init_value),
                                              sizeof(hid_report_init_value),
                                              hid_report_init_value,
                                              &characteristic);
  app_assert_status(sc);
  hid_report = characteristic;

  // HIDレポート参照記述子
  const sl_bt_uuid_16_t hid_report_reference_desc_uuid = { .data = { 0x08, 0x29 } };
  const uint8_t hid_report_reference_desc_init_val[] = { 0x00, 0x01 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          SL_BT_GATTDB_DESCRIPTOR_READ,
                                          SL_BT_GATTDB_ENCRYPTED_READ,
                                          hid_report_reference_desc_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(hid_report_reference_desc_init_val),
                                          sizeof(hid_report_reference_desc_init_val),
                                          hid_report_reference_desc_init_val,
                                          &descriptor);
  app_assert_status(sc);

  // HIDレポートマップ特性
  const sl_bt_uuid_16_t hid_report_map_uuid = { .data = { 0x4B, 0x2A } };
  const uint8_t hid_report_map_init_value[] = { 0x05, 0x01, // Usage page (Generic Desktop)
                                                0x09, 0x02, // Usage (Mouse)
                                                0xA1, 0x01, // Collection (Application)
                                                0x09, 0x01, //   UsageId (Pointer)
                                                0xA1, 0x00, //   Collection (Physical)
                                                0x09, 0x30, //     UsageId (x)
                                                0x09, 0x31, //     UsageId (y)
                                                0x15, 0x80, //     LogicalMinimum(-128)
                                                0x25, 0x7F, //     LogicalMaximum(127)
                                                0x95, 0x02, //     ReportCount(2)
                                                0x75, 0x08, //     ReportSize(8)
                                                0x81, 0x06, //     Input(Data, Variable, Relative, NoWrap, Linear, PreferredState, NoNullPosition, BitField)
                                                0x05, 0x09, //     UsagePage(Button)
                                                0x19, 0x01, //     UsageIdMin(Button 1)
                                                0x29, 0x03, //     UsageIdMax(Button 3)
                                                0x15, 0x00, //     LogicalMinimum(0)
                                                0x25, 0x01, //     LogicalMaximum(1)
                                                0x95, 0x03, //     ReportCount(3)
                                                0x75, 0x01, //     ReportSize(1)
                                                0x81, 0x02, //     Input(Data, Variable, Absolute, NoWrap, Linear, PreferredState, NoNullPosition, BitField)
                                                0x95, 0x01, //     ReportCount(1)
                                                0x75, 0x05, //     ReportSize(5)
                                                0x81, 0x03, //     Input(Constant, Variable, Absolute, NoWrap, Linear, PreferredState, NoNullPosition, BitField)
                                                0xC0,       //   EndCollection()
                                                0xC0 };     // EndCollection()
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              SL_BT_GATTDB_ENCRYPTED_READ,
                                              0,
                                              hid_report_map_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_report_map_init_value),
                                              sizeof(hid_report_map_init_value),
                                              hid_report_map_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HID外部レポート参照記述子
  const sl_bt_uuid_16_t hid_external_report_reference_descriptor_uuid = { .data = { 0x07, 0x29 } };
  const uint8_t hid_external_report_reference_value[] = { 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          SL_BT_GATTDB_DESCRIPTOR_READ,
                                          0,
                                          hid_external_report_reference_descriptor_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(hid_external_report_reference_value),
                                          sizeof(hid_external_report_reference_value),
                                          hid_external_report_reference_value,
                                          &descriptor);
  app_assert_status(sc);

  // HID情報特性
  const sl_bt_uuid_16_t hid_info_uuid = { .data = { 0x4A, 0x2A } };
  const uint8_t hid_info_init_value[] = { 0x01, 0x11, 0x00, 0x02 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              hid_info_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_info_init_value),
                                              sizeof(hid_info_init_value),
                                              hid_info_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HIDコントロールポイント特性
  const sl_bt_uuid_16_t hid_control_point_uuid = { .data = { 0x4C, 0x2A } };
  const uint8_t hid_control_point_init_value[] = { 0x00 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_WRITE_NO_RESPONSE,
                                              0,
                                              0,
                                              hid_control_point_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_control_point_init_value),
                                              sizeof(hid_control_point_init_value),
                                              hid_control_point_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HIDサービス開始
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // GATT DBの変更をコミット
  sc = sl_bt_gattdb_commit(gattdb_session_id);
  app_assert_status(sc);
}

#ifndef BLE_STACK_SILABS
  #error "この例はSilicon Labs BLEスタックと互換性があります。'Tools > Protocol stack'で'BLE (Silabs)'を選択してください。"
#endif
```
</details>

### 結果チャート

拡張ボードのボタンを押すと、マウスイベントがトリガーされることを確認できます！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/hid_mouse.gif" style={{width:500, height:'auto'}}/></div>

## XIAO MG24 センスマイクロフォン(Seeed Studio デモ)

### 内蔵センサーの概要

**マイクロフォンセンサー**である **MSM381ACT001** は、**高感度かつ低ノイズ**で音声信号をキャプチャするために設計された MEMS (Micro-Electro-Mechanical Systems) マイクロフォンです。特に、MSM381ACT001 には以下の特徴があります：

**マイクロフォン機能:**

- 音波をキャプチャして電気信号に変換し、さまざまな環境での音声入力を検出可能。
- 通常 20 Hz から 20 kHz の広い周波数応答範囲を持ち、音声認識や音楽再生などのさまざまなオーディオアプリケーションに適しています。

**主な特徴**

- 高感度: 微弱な音を検出可能で、正確な音声キャプチャが必要なアプリケーションに最適。
- 低ノイズ: 高い信号対雑音比 (SNR) を提供するよう設計されており、騒がしい環境でもクリアな音声出力を実現。
- コンパクトサイズ: MEMS 技術により小型化されており、スマートフォンやウェアラブルデバイスなどの携帯機器への統合が容易。
- デジタル出力: デジタル信号出力オプション (例: I2S) を提供し、デジタル信号プロセッサ (DSP) やマイクロコントローラーとのインターフェースを簡素化。

### ソフトウェア準備

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_Mic" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

GitHub のダウンロードリンクをクリックして、マイクロフォンセンサーを駆動します。

:::tip
現在、手動で置換ファイルを変更する必要があります。後続では直接ダウンロード可能なライブラリが使用できるようになりますので、Wiki の更新をお待ちください。
:::

- **[置換ファイル]** [gsdk.a](https://files.seeedstudio.com/wiki/mg24_mic/gsdk_v2.a)

**ファイルパスの変更**
  - __/Users/yourname/Library/Arduino15/packages/SiliconLabs/hardware/silabs/2.2.0/variants/xiao_mg24/ble_silabs/__

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/file.png" style={{width:350, height:'auto'}}/></div>

### コード実装

```cpp
#include <mic.h>
#if defined(WIO_TERMINAL)
#include "processing/filters.h"
#endif

// 設定
#if defined(WIO_TERMINAL)
#define DEBUG 1                 // ISR 中のピンパルスを有効化  
#define SAMPLES 16000*3
#elif defined(ARDUINO_ARCH_NRF52840)
#define DEBUG 1                 // ISR 中のピンパルスを有効化  
#define SAMPLES 800
#elif defined(ARDUINO_SILABS)
#define DEBUG 1                 // ISR 中のピンパルスを有効化  
#define SAMPLES 800
#endif

mic_config_t mic_config{
  .channel_cnt = 1,
  .sampling_rate = 16000,
  .buf_size = 1600,
#if defined(WIO_TERMINAL)
  .debug_pin = 1                // 各 DAC ISR をトグル (DEBUG が 1 に設定されている場合)
#elif defined(ARDUINO_ARCH_NRF52840)
  .debug_pin = LED_BUILTIN                // 各 DAC ISR をトグル (DEBUG が 1 に設定されている場合)
#elif defined(ARDUINO_SILABS)
  .debug_pin = LED_BUILTIN                // 各 DAC ISR をトグル (DEBUG が 1 に設定されている場合)  
#endif
};

#if defined(WIO_TERMINAL)
DMA_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_ARCH_NRF52840)
NRF52840_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_SILABS)
MG24_ADC_Class Mic(&mic_config);
#endif

int16_t recording_buf[SAMPLES];
volatile uint8_t recording = 0;
volatile static bool record_ready = false;

#if defined(WIO_TERMINAL)
FilterBuHp filter;
#endif

void setup() {

  Serial.begin(115200);
  while (!Serial) {delay(10);}
  
#if defined(WIO_TERMINAL)  
  pinMode(WIO_KEY_A, INPUT_PULLUP);
#endif

  Mic.set_callback(audio_rec_callback);

  if (!Mic.begin()) {
    Serial.println("マイクの初期化に失敗しました");
    while (1);
  }

  Serial.println("マイクの初期化が完了しました。");

}

void loop() { 

#if defined(WIO_TERMINAL)  
if (digitalRead(WIO_KEY_A) == LOW && !recording) {

    Serial.println("サンプリングを開始します");
    recording = 1;
    record_ready = false;  
}
#endif

#if defined(WIO_TERMINAL)  
  if (!recording && record_ready)
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
  if (record_ready)
#endif  
  {
  Serial.println("サンプリングが完了しました");
  
  for (int i = 0; i < SAMPLES; i++) {
    
  //int16_t sample = filter.step(recording_buf[i]);
  int16_t sample = recording_buf[i];
  Serial.println(sample);
  }
  
  record_ready = false; 
  }
}

static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {
  
  static uint32_t idx = 0;
  // DMA バッファから推論バッファへのサンプルコピー
#if defined(WIO_TERMINAL)
  if (recording) 
#endif
  {
    for (uint32_t i = 0; i < buf_len; i++) {
  
      // 12 ビットの符号なし ADC 値を 16 ビット PCM (符号付き) オーディオ値に変換
#if defined(WIO_TERMINAL)
      recording_buf[idx++] = filter.step((int16_t)(buf[i] - 1024) * 16);
      //recording_buf[idx++] = (int16_t)(buf[i] - 1024) * 16;  
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
      recording_buf[idx++] = buf[i];
#endif

      if (idx >= SAMPLES){ 
      idx = 0;
      recording = 0;
      record_ready = true;
      break;
     } 
    }
  }

}
```

### 機能概要

**マイク設定**

```cpp
mic_config_t mic_config{
.channel_cnt = 1,
.sampling_rate = 16000,
.buf_size = 1600,
#if defined(WIO_TERMINAL)
.debug_pin = 1
#elif defined(ARDUINO_ARCH_NRF52840)
.debug_pin = LED_BUILTIN
#elif defined(ARDUINO_SILABS)
.debug_pin = LED_BUILTIN
#endif
};
```

- mic_config_t: マイク設定構造体を定義します。
- channel_cnt: モノラル用に1に設定します。
- sampling_rate: サンプリング周波数を16000 Hzに設定します。
- buf_size: バッファサイズを1600に設定します。
- debug_pin: プラットフォームに応じてデバッグピンを設定し、デバッグ中の信号表示に使用します。

**マイクのインスタンス化**

```cpp
#if defined(WIO_TERMINAL)
DMA_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_ARCH_NRF52840)
NRF52840_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_SILABS)
MG24_ADC_Class Mic(&mic_config);
#endif
```

- 条件付きコンパイル: 事前に定義された設定を使用して、異なるプラットフォームに適したマイククラスのインスタンスを作成します。

**録音バッファとフラグ**

```cpp
int16_t recording_buf[SAMPLES];
volatile uint8_t recording = 0;
volatile static bool record_ready = false;
```

- recording_buf: 録音サンプルを保存するためのSAMPLESサイズの配列を定義します。
- recording: 録音中であることを示すvolatile変数で、コンパイラの最適化を防ぎます。
- record_ready: 録音が完了し、次の処理が可能であることを示すvolatile静的変数です。

**フィルタの例（WIO Terminal用）**

```cpp
#if defined(WIO_TERMINAL)
FilterBuHp filter;
#endif
```

- WIO Terminalの場合、高域通過フィルタのインスタンスを作成してフィルタ処理を行います。

**setup**

```cpp
void setup() {
Serial.begin(115200);
while (!Serial) {delay(10);}

#if defined(WIO_TERMINAL)  
pinMode(WIO_KEY_A, INPUT_PULLUP);
#endif

Mic.set_callback(audio_rec_callback);

if (!Mic.begin()) {
  Serial.println("Mic initialization failed");
  while (1);
}

Serial.println("Mic initialization done.");
}
```

- シリアルポートの初期化: シリアル通信を115200ボーレートで開始し、シリアルポートが準備完了するまで待機します。
- ピンモードの設定: WIO Terminalでは、キーのピンを入力プルアップモードに設定します。
- コールバック関数の設定: `Mic.set_callback(audio_rec_callback)`を呼び出して、録音時に呼び出されるコールバック関数を指定します。
- マイクの初期化: `Mic.begin()`を呼び出し、初期化に失敗した場合はエラーメッセージを出力して無限ループに入ります。

**loop**

```cpp
void loop() { 
#if defined(WIO_TERMINAL)  
if (digitalRead(WIO_KEY_A) == LOW && !recording) {
  Serial.println("Starting sampling");
  recording = 1;
  record_ready = false;  
}
#endif

#if defined(WIO_TERMINAL)  
if (!recording && record_ready)
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
if (record_ready)
#endif  
{
  Serial.println("Finished sampling");
  
  for (int i = 0; i < SAMPLES; i++) {
    int16_t sample = recording_buf[i];
    Serial.println(sample);
  }
  
  record_ready = false; 
}
}
```

- キーの検出: WIO Terminalでは、キーが押されており録音中でない場合に録音を開始します。
- 録音終了: 録音中でなく、`record_ready`がtrueに設定されている場合に「Finished sampling」と出力します。
- 録音バッファを反復処理し、各サンプル値を出力します。

**オーディオ録音コールバック関数**

```cpp
static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {
static uint32_t idx = 0;
#if defined(WIO_TERMINAL)
if (recording) 
#endif
{
  for (uint32_t i = 0; i < buf_len; i++) {
    #if defined(WIO_TERMINAL)
    recording_buf[idx++] = filter.step((int16_t)(buf[i] - 1024) * 16);
    #elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
    recording_buf[idx++] = buf[i];
    #endif

    if (idx >= SAMPLES){ 
      idx = 0;
      recording = 0;
      record_ready = true;
      break;
    } 
  }
}
}
```

- コールバック関数: オーディオ録音中に呼び出され、DMAバッファから録音バッファにサンプルをコピーします。
- 条件付きコンパイル: WIO Terminalの場合、フィルタを使用して入力を処理します。
- 12ビットの符号なしADC値を16ビットPCM（符号付き）オーディオ値に変換します。
- サンプルのコピー: サンプルを`recording_buf`にコピーし、インデックス`idx`を更新します。
- 録音終了: サンプル数がSAMPLESに達した場合、インデックスをリセットし、録音終了をマークして`record_ready`をtrueに設定します。

### 結果チャート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result1.png" style={{width:680, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result.png" style={{width:680, height:'auto'}}/></div>

これは認識された音の波形です。息を吹きかけると、波形の振幅が明らかに大きくなるのがわかります。

### さらなる情報

より多くのサンプルコードが必要な場合は、以下をクリックしてください: -> **"Example -> Seeed Arduino Mic"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/34.png" style={{width:500, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/35.png" style={{width:500, height:'auto'}}/></div>

## XIAO MG24 Sense Microphone(Silicon Labs Demo)

:::tip
最新のオンボードパッケージ（2.3.0）をダウンロードする必要があります。これにより、例の中で最新の公式コードを見つけることができます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mg24download.jpg" style={{width:400, height:'auto'}}/></div>

### ソフトウェア準備

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mg24mic.jpg" style={{width:500, height:'auto'}}/></div>

### コード実装

```cpp
/*
   アナログマイク音量の例

   この例はアナログMEMSマイクの使用方法を示し、マイクの入力音量に基づいて
   オンボードLEDの明るさを調整します。
   この例はすべてのSilicon Labs Arduinoボードと互換性がありますが、
   指定されたピンに接続されたアナログマイクが必要です。

   作成者: Áron Gyapjas (Silicon Labs)
 */

#include <SilabsMicrophoneAnalog.h>

// この設定はSeeed Studio XIAO MG24のMSM381ACT001マイク用です。
// ハードウェアに応じて変更してください。
#define MIC_DATA_PIN  PC9
#define MIC_PWR_PIN   PC8
#define NUM_SAMPLES   128
#define MIC_VALUE_MIN 735
#define MIC_VALUE_MAX 900

// サンプルを保存するためのバッファ
uint32_t mic_buffer[NUM_SAMPLES];
uint32_t mic_buffer_local[NUM_SAMPLES];

volatile bool data_ready_flag = false;
MicrophoneAnalog micAnalog(MIC_DATA_PIN, MIC_PWR_PIN);
void mic_samples_ready_cb();
void calculate_and_display_voice_level();

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);

  micAnalog.begin(mic_buffer, NUM_SAMPLES);
  Serial.println("マイクが初期化されました...");

  micAnalog.startSampling(mic_samples_ready_cb);
  Serial.println("サンプリングが開始されました...");
}

void loop()
{
  if (data_ready_flag) {
    data_ready_flag = false;
    calculate_and_display_voice_level();
  }
}

// マイクから要求された量のサンプルが利用可能になったときに呼び出される
void mic_samples_ready_cb()
{
  // データが上書きされないようにローカルバッファにコピー
  memcpy(mic_buffer_local, mic_buffer, NUM_SAMPLES * sizeof(uint32_t));
  data_ready_flag = true;
}

void calculate_and_display_voice_level() {
  // 音量をスムーズにするためのローリング平均
  static uint32_t rolling_average = 0u;

  // 現在のデータが上書きされないようにサンプリングを停止
  micAnalog.stopSampling();

  // サンプル値の平均を取得
  uint32_t voice_level = (uint32_t)micAnalog.getAverage(mic_buffer_local, NUM_SAMPLES);
  // マイクの出力の最小値/最大値に基づいて音量を調整
  voice_level = constrain(voice_level, MIC_VALUE_MIN, MIC_VALUE_MAX);
  // ローリング平均を計算
  rolling_average = (voice_level + rolling_average) / 2;

  // 現在の平均レベルを明るさにマッピング
  int brightness = map(rolling_average, MIC_VALUE_MIN, MIC_VALUE_MAX, 0, 255);
  if (LED_BUILTIN_ACTIVE == LOW) {
    analogWrite(LED_BUILTIN, 255 - brightness);
  } else {
    analogWrite(LED_BUILTIN, brightness);
  }
  // 平均音量を出力（シリアルプロッタを使用してグラフでこの値を表示可能）
  Serial.println(rolling_average);

  // サンプリングを再開
  micAnalog.startSampling(mic_samples_ready_cb);
}

```

### 関数概要

***ヘッダーファイルの紹介***

```cpp
#include <SilabsMicrophoneAnalog.h>
```

- `SilabsMicrophoneAnalog.h`ヘッダーファイルをインクルードし、アナログマイクを使用するための必要なライブラリ関数と定義を含みます。

***ハードウェア設定***

```cpp
#define MIC_DATA_PIN  PC9
#define MIC_PWR_PIN   PC8
#define NUM_SAMPLES   128
#define MIC_VALUE_MIN 735
#define MIC_VALUE_MAX 900
```

- `MIC_DATA_PIN`: マイクデータピンを`PC9`として定義します。

- `MIC_PWR_PIN`: マイク電源ピンを`PC8`として定義します。

- `NUM_SAMPLES`: サンプリングごとのサンプル数を128として定義します。

- `MIC_VALUE_MIN`と`MIC_VALUE_MAX`: マイク出力の最小値と最大値の範囲を定義します。

***バッファ定義***

```cpp
uint32_t mic_buffer[NUM_SAMPLES];
uint32_t mic_buffer_local[NUM_SAMPLES];
```

- `mic_buffer`: マイクから収集された生のサンプルデータを保存するために使用されます。

- `mic_buffer_local`: サンプルデータを一時的に保存し、上書きを防ぐために使用されます。

***フラグとオブジェクト定義***

```cpp
volatile bool data_ready_flag = false;
MicrophoneAnalog micAnalog(MIC_DATA_PIN, MIC_PWR_PIN);
```

- `data_ready_flag`: 新しいサンプルデータが準備完了かどうかを示すフラグ。

- `micAnalog`: マイクを制御するためのMicrophoneAnalogオブジェクトを作成します。

***コールバック関数の宣言***

```cpp
void mic_samples_ready_cb();
void calculate_and_display_voice_level();
```

- `mic_samples_ready_cb()`: サンプリングが完了したときに呼び出されるコールバック関数。

- `calculate_and_display_voice_level()`: 音量を計算し、LEDの明るさを制御する関数。

***setup()関数***

```cpp
void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);

  micAnalog.begin(mic_buffer, NUM_SAMPLES);
  Serial.println("マイクが初期化されました...");

  micAnalog.startSampling(mic_samples_ready_cb);
  Serial.println("サンプリングが開始されました...");
}
```

- ボーレート115200でシリアル通信を初期化します。

- オンボードLEDピンを出力モードに設定します。

- マイクを初期化し、サンプルバッファを指定します。

- サンプリングを開始し、サンプリング完了時のコールバック関数を設定します。

***loop()関数***

```cpp
void loop()
{
  if (data_ready_flag) {
    data_ready_flag = false;
    calculate_and_display_voice_level();
  }
}
```

- `data_ready_flag`が`true`の場合、新しいデータが準備完了であることを示します。

- 新しいデータが利用可能な場合、`calculate_and_display_voice_level()`関数を呼び出してデータを処理します。

```cpp

void mic_samples_ready_cb()
{
  memcpy(mic_buffer_local, mic_buffer, NUM_SAMPLES * sizeof(uint32_t));
  data_ready_flag = true;
}
```

- サンプルデータを`mic_buffer`から`mic_buffer_local`にコピーして上書きを防ぎます。

- `data_ready_flag`を`true`に設定して新しいデータが準備完了であることを示します。

```cpp

void calculate_and_display_voice_level() {
  static uint32_t rolling_average = 0u;

  micAnalog.stopSampling();

  uint32_t voice_level = (uint32_t)micAnalog.getAverage(mic_buffer_local, NUM_SAMPLES);
  voice_level = constrain(voice_level, MIC_VALUE_MIN, MIC_VALUE_MAX);
  rolling_average = (voice_level + rolling_average) / 2;

  int brightness = map(rolling_average, MIC_VALUE_MIN, MIC_VALUE_MAX, 0, 255);
  if (LED_BUILTIN_ACTIVE == LOW) {
    analogWrite(LED_BUILTIN, 255 - brightness);
  } else {
    analogWrite(LED_BUILTIN, brightness);
  }
  Serial.println(rolling_average);

  micAnalog.startSampling(mic_samples_ready_cb);
}
```

- サンプリングを停止してデータの上書きを防ぎます。

- サンプルデータの平均値を計算し、それを `MIC_VALUE_MIN` と `MIC_VALUE_MAX` の範囲内に制約します。

- 音量変化を平滑化するためにローリング平均を計算します。

- ローリング平均を LED の明るさ範囲（0 から 255）にマッピングし、LED の明るさを調整します。

- 音量変化を観察するためにローリング平均をシリアル出力します。

- 新しい音声データを収集するためにサンプリングを再開します。


### 結果チャート

マイクに息を吹きかけると、上部の LED が音に応じて明るくなったり暗くなったりするのがわかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic.gif" style={{width:500, height:'auto'}}/></div>


### さらに詳しく

より多くのサンプルコードが必要な場合は、こちらをクリックしてください： -> **"Example -> SilabsMicrophoneAnalog -> MicrophoneVolume"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_arduino.jpg" style={{width:500, height:'auto'}}/></div>

## リソース

### Seeed Studio XIAO MG24 Sense 用

- 📄 **[PDF]** [Seeed Studio 6軸IMU(LSM6DS3TR-C) データシート](https://statics3.seeedstudio.com/fusion/opl/sheets/314040211.pdf)
- 📄 **[PDF]** [Seeed Studio アナログマイク(MSM381ACT001) データシート](https://files.seeedstudio.com/wiki/mg24_mic/312030602_MEMSensing_MSM381ACT001_Datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>