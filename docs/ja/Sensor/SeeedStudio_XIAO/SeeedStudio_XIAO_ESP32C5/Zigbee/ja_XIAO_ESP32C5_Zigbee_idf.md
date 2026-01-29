---
title: Seeed Studio XIAO ESP32C5 Zigbee クイックスタートガイド (ESP-IDF)
description: |
keywords:
  - xiao
  - esp32c5
  - zigbee
  - idf
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /ja/xiao_esp32c5_zigbee_idf
sku: 100010048
last_update:
  date: 1/9/2026
  author: Zeller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO ESP32-C5 Zigbee クイックスタートガイド (ESP-IDF)

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_1_1.png" style={{width:800, height:'auto'}}/></div>

Zigbee は、ホームオートメーション、スマートエネルギー管理、モノのインターネット（IoT）アプリケーションで広く採用されている無線通信プロトコルです。低消費電力、信頼性の高いデータ伝送、メッシュネットワーク機能で知られる Zigbee は、スケーラブルで効率的な無線ネットワークを構築するための優れた選択肢です。

このチュートリアルでは、XIAO ESP32-C5 開発ボードを使用した Zigbee アプリケーション開発の探求の旅に出ます。XIAO ESP32-C5 は、Wi-Fi と Bluetooth Low Energy（BLE）接続を統合した ESP32-C5 チップを搭載したコンパクトながら強力なボードです。ESP Zigbee SDK を活用することで、XIAO ESP32-C5 の全ポテンシャルを活用し、Zigbee 機能を含むようにその機能を拡張できます。

Zigbee 開発を深く掘り下げるために、ESP Zigbee SDK が提供する 2 つのサンプルプログラム、HA_on_off_light と HA_on_off_switch に焦点を当てます。これらの例は、それぞれ Zigbee ライトデバイスと Zigbee スイッチデバイスの実装を示しています。これらの例の背後にあるコード構造、データモデル、動作原理を徹底的に調べることで、Zigbee デバイス開発の包括的な理解を得ることができます。

このチュートリアル全体を通して、以下の主要な側面をカバーします：

1. XIAO ESP32-C5 と ESP Zigbee SDK の開発環境のセットアップ。
2. HA_on_off_light と HA_on_off_switch の例のコード構造と構成の分析。
3. Zigbee デバイスのデータモデルとコード内での定義方法の理解。
4. Zigbee デバイスの初期化プロセスとイベント処理メカニズムの探求。
5. Zigbee デバイス間の通信パターンとメッセージ交換の検証。

このチュートリアルの終わりまでに、XIAO ESP32-C5 と ESP Zigbee SDK を使用した Zigbee 開発の確固たる基盤を得ることができます。この知識と実践的なスキルを身に着けることで、独自の Zigbee ベースのプロジェクトを作成し、絶えず成長する Zigbee デバイスのエコシステムに貢献する準備が整います。

それでは、XIAO ESP32-C5 を使った Zigbee 開発のエキサイティングな旅に出発し、この強力な無線通信プロトコルの全ポテンシャルを解き放ちましょう！

## ハードウェアの準備

2 つの XIAO ESP32-C5 ボードといくつかのアクセサリを準備する必要があります。

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

## 環境セットアップ

このチュートリアルでは、Seeed Studio XIAO ESP32C5 で Zigbee 機能を実装する方法をガイドします。事前に ESP-IDF フレームワークと ESP-Zigbee SDK をインストールする必要があります。

:::tip
この例は Ubuntu（Linux）システムに基づいています。異なるシステムを使用している場合は、調整について公式の Espressif ドキュメントを参照してください。[ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/index.html)
:::

### ESP-IDF SDK のインストール

Zigbee SDK を使用するには、まず ESP-IDF 開発環境をセットアップする必要があります。Ubuntu システムターミナルで以下のコマンドを入力してください。

```bash
mkdir esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
git checkout v5.5.1
git submodule update --init --recursive
./install.sh
source ./export.sh
cd ..
```

異なるシステムを使用している場合は、以下のボタンをクリックして Espressif ウェブサイトにアクセスし、詳細情報を確認してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/index.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ページに移動 🖱️</font></span></strong>
    </a>
</div><br/>

:::tip
**開発には ESP-IDF v5.3.2 以降の使用を推奨します**。このチュートリアルでは **v5.5.1** を使用しており、テスト済みで動作することが確認されています。
:::

### Zigbee SDK のインストール

`esp-zigbee-sdk` をクローンします：

```bash
cd ~/esp
git clone https://github.com/espressif/esp-zigbee-sdk.git
```

## ソフトウェアプログラミング

esp-zigbee-sdk から 2 つの例、`HA_on_off_light` と `HA_on_off_switch` を修正して使用します。どちらも `esp-zigbee-sdk/examples/esp_zigbee_HA_sample` ディレクトリにあります。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_2.png" style={{width:800, height:'auto'}}/></div>

### HA_on_off_light の修正

**ステップ 1.** `HA_on_off_light` 例のディレクトリにある `main` フォルダを開きます。

```bash
cd ~/esp/esp-zigbee-sdk/examples/esp_zigbee_HA_sample/HA_on_off_light/main
```

**ステップ 2.** `main` フォルダ下の `esp_zb_light.c` の内容を修正します

`HA_on_off_light` 例では、ライトを制御するデフォルトの GPIO ピンは **GPIO27** で、これは XIAO ESP32-C5 の USER LED を制御するために使用されるピンと同じです。より直感的な表示効果のために、これを **GPIO1** に変更し、それに応じて他の簡単な修正を行います。

<details>

<summary>esp_zb_light.c</summary>

```cpp
#include "esp_zb_light.h"
#include "esp_check.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"

#if !defined ZB_ED_ROLE
#error Define ZB_ED_ROLE in idf.py menuconfig to compile light (End Device) source code.
#endif

static const char *TAG = "ESP_ZB_ON_OFF_LIGHT";
#define MY_LED_GPIO  GPIO_NUM_1

// modify start
#include "driver/gpio.h"  // Include the GPIO driver header file(Modify)

// Define the default state of the light (off)  (Modify)
void light_driver_init(bool power);
void light_driver_set_power(bool power);

void light_driver_init(bool power)
{
    // Configure GPIO as output mode
    gpio_reset_pin(MY_LED_GPIO);
    gpio_set_direction(MY_LED_GPIO, GPIO_MODE_OUTPUT);
    // Initialization state
    light_driver_set_power(power);
}

// Rewrite the switch control function
void light_driver_set_power(bool power)
{
    // If your LED is on when it receives a high voltage, use: gpio_set_level(MY_LED_GPIO, power);
    // If your LED is on when it receives a low voltage 
    //(a common onboard LED), use: gpio_set_level(MY_LED_GPIO, ! power);

    gpio_set_level(MY_LED_GPIO, power); 

    ESP_LOGI("USER_DRIVER", "Light physical state changed to: %d", power);
}
// modify end

/********************* Define functions **************************/
static esp_err_t deferred_driver_init(void)
{
    static bool is_inited = false;
    if (!is_inited) {
        light_driver_init(LIGHT_DEFAULT_OFF);
        is_inited = true;
    }
    return is_inited ? ESP_OK : ESP_FAIL;
}

static void bdb_start_top_level_commissioning_cb(uint8_t mode_mask)
{
    ESP_RETURN_ON_FALSE(esp_zb_bdb_start_top_level_commissioning(mode_mask) == ESP_OK, , TAG, "Failed to start Zigbee commissioning");
}

void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Joined network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "Network steering was not successful (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}

static esp_err_t zb_attribute_handler(const esp_zb_zcl_set_attr_value_message_t *message)
{
    esp_err_t ret = ESP_OK;
    bool light_state = 0;

    ESP_RETURN_ON_FALSE(message, ESP_FAIL, TAG, "Empty message");
    ESP_RETURN_ON_FALSE(message->info.status == ESP_ZB_ZCL_STATUS_SUCCESS, ESP_ERR_INVALID_ARG, TAG, "Received message: error status(%d)",
                        message->info.status);
    ESP_LOGI(TAG, "Received message: endpoint(%d), cluster(0x%x), attribute(0x%x), data size(%d)", message->info.dst_endpoint, message->info.cluster,
             message->attribute.id, message->attribute.data.size);
    if (message->info.dst_endpoint == HA_ESP_LIGHT_ENDPOINT) {
        if (message->info.cluster == ESP_ZB_ZCL_CLUSTER_ID_ON_OFF) {
            if (message->attribute.id == ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID && message->attribute.data.type == ESP_ZB_ZCL_ATTR_TYPE_BOOL) {
                light_state = message->attribute.data.value ? *(bool *)message->attribute.data.value : light_state;
                ESP_LOGI(TAG, "Light sets to %s", light_state ? "On" : "Off");
                light_driver_set_power(light_state);
            }
        }
    }
    return ret;
}

static esp_err_t zb_action_handler(esp_zb_core_action_callback_id_t callback_id, const void *message)
{
    esp_err_t ret = ESP_OK;
    switch (callback_id) {
    case ESP_ZB_CORE_SET_ATTR_VALUE_CB_ID:
        ret = zb_attribute_handler((esp_zb_zcl_set_attr_value_message_t *)message);
        break;
    default:
        ESP_LOGW(TAG, "Receive Zigbee action(0x%x) callback", callback_id);
        break;
    }
    return ret;
}

static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    zcl_basic_manufacturer_info_t info = {
        .manufacturer_name = ESP_MANUFACTURER_NAME,
        .model_identifier = ESP_MODEL_IDENTIFIER,
    };

    esp_zcl_utility_add_ep_basic_manufacturer_info(esp_zb_on_off_light_ep, HA_ESP_LIGHT_ENDPOINT, &info);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_stack_main_loop();
}

void app_main(void)
{
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };
    ESP_ERROR_CHECK(nvs_flash_init());
    ESP_ERROR_CHECK(esp_zb_platform_config(&config));
    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}
```

</details>

**ステップ 3.** `HA_on_off_light` プログラムの書き込み

`HA_on_off_light` ディレクトリに戻り、ターゲットチップを `esp32c5` に設定します：

```bash
cd ../
idf.py set-target esp32c5
```
<br/>

以下のコマンドを実行してプロジェクトをビルドします：

```bash
idf.py build
```

ビルドが成功すると、以下の図のようになります：

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_4.png" style={{width:800, height:'auto'}}/></div>

XIAO ESP32-C5 ボードの1つをUbuntuホストに接続します。デフォルトのシリアルポートは通常 /`dev/ttyACM0` です。

:::tip
XIAOが接続されていない時にデフォルトで存在するポートを確認するために、クエリコマンドを使用できます。

```bash
ls /dev/tty*
```

:::

ESP-IDFでは、書き込みコマンドは以下の通りです：

```bash
idf.py -p PORT flash
```

PORTをXIAO ESP32-C5のUSBポート名に置き換えてください。PORTが定義されていない場合、idf.pyは利用可能なUSBポートを使用して自動的に接続を試みます。このチュートリアルでは、書き込みポートは `/dev/ttyACM0` です：

```bash
idf.py -p /dev/ttyACM0
```

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_5.png" style={{width:800, height:'auto'}}/></div>

書き込みプロセスの最後に問題がなければ、XIAO ESP32-C5は再起動してZigbee Lightアプリケーションを起動します。

### HA_on_off_switchの書き込み

同様に、もう一つのXIAO ESP32-C5を取り、スイッチプログラムを書き込みます。手順は `HA_on_off_light` の書き込みと同様です。
`HA_on_off_switch` の例では、スイッチピンは **GPIO28** で、これはXIAO ESP32-C5のBOOTボタンを制御するために使用されるピンと同じです。

```bash
cd ../HA_on_off_switch
idf.py set-target esp32c5
idf.py build
idf.py -p PORT flash
```

書き込みが成功すると、BOOTボタンを使用してもう一つのXIAO ESP32-C5のLEDをオン/オフ制御できます。

### 結果

プログラムの変更が成功し、2つのXIAO ESP32-C5ボードにHA_on_off_switchとHA_on_off_lightプログラムを書き込んだ場合、シリアルモニターを開いてZigbeeデバイスのネットワーク化と制御コマンドに関する情報を表示できます。

- シリアルポートは設定情報を出力します。Zigbeeネットワークの形成に成功すると、設定情報、制御コマンド、受信コマンドが出力されます。左側はHA_on_off_switchデバイス、右側はHA_on_off_lightデバイスを示しています。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_6.png" style={{width:1000, height:'auto'}}/></div>

- BOOTボタンを長押しすると、もう一つのXIAO ESP32-C5のLEDを切り替えることができます。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_result.gif" style={{width:600, height:'auto'}}/></div>
## HA_on_off_lightとHA_on_off_switchのプログラム構造

フォルダにはZigbee HA標準デバイスを実演する例が含まれています

- `HA_on_off_light` はZigbee End-deviceを実演する標準HAオン/オフ電球の例です。

- `HA_on_off_switch` はZigbee Coordinatorの役割を実演する標準HAオン/オフスイッチの例です。Zigbee HAオン/オフライトを制御するためのオン/オフトグルを提供します。

このチュートリアルでは、ESP Zigbee SDKが提供する2つのサンプルプログラム：`HA_on_off_light` と `HA_on_off_switch` を詳しく調べます。これらの例のコード構造と組織を分析することで、Zigbeeデバイスアプリケーションの開発方法を包括的に理解できます。

```
- esp_zigbee_HA_sample/
    - HA_on_off_light/
        - main/
          - CMakeLists.txt
          - esp_zb_light.c
          - esp_zb_light.h
          - idf_component.yml
        - CMakeLists.txt
        - partitions.csv
        - sdkconfig.defaults
        ...
    - HA_on_off_switch/
        - main/
          - CMakeLists.txt
          - esp_zb_switch.c
          - esp_zb_switch.h
          - idf_component.yml
        - CMakeLists.txt
        - partitions.csv
        - sdkconfig.defaults
        ...
```

1. esp_zigbee_HA_sample/: このディレクトリには、ESP Zigbee SDKが提供するHome Automation（HA）サンプルプロジェクトが含まれています。

2. HA_on_off_light/: このサブディレクトリは「On/Off Light」サンプルプロジェクトを表します。
   - main/: このディレクトリには「On/Off Light」サンプルのメインソースファイルが含まれています。
     - CMakeLists.txt: このファイルはCMakeビルドシステムで使用され、「On/Off Light」サンプルのソースファイルと依存関係を指定します。
     - esp_zb_light.c: このファイルには、初期化、イベント処理、他のZigbeeデバイスとの通信を含む、Zigbeeライトデバイスのメイン実装コードが含まれています。
     - esp_zb_light.h: このヘッダーファイルには、Zigbeeライトデバイスに必要な関数宣言、定数、データ構造が含まれています。
     - idf_component.yml: このファイルはESP-IDFコンポーネント設定ファイルで、「On/Off Light」サンプルのコンポーネント依存関係とビルド設定を指定します。
   - CMakeLists.txt: このファイルは「On/Off Light」サンプルプロジェクトのトップレベルCMakeListsファイルで、必要な設定とビルドターゲットが含まれています。
   - partitions.csv: このファイルは「On/Off Light」サンプルのパーティションテーブルを定義し、ブートローダー、アプリケーション、ストレージなどの様々なパーティションのメモリレイアウトとサイズを指定します。
   - sdkconfig.defaults: このファイルには「On/Off Light」サンプルプロジェクトのデフォルト設定が含まれており、ユーザーによって上書きできます。

3. HA_on_off_switch/: このサブディレクトリは「On/Off Switch」サンプルプロジェクトを表します。
   - main/: このディレクトリには「On/Off Switch」サンプルのメインソースファイルが含まれています。
     - CMakeLists.txt: 「On/Off Light」サンプルと同様に、このファイルはCMakeビルドシステムで使用され、「On/Off Switch」サンプルのソースファイルと依存関係を指定します。
     - esp_zb_switch.c: このファイルには、初期化、イベント処理、他のZigbeeデバイスとの通信を含む、Zigbeeスイッチデバイスのメイン実装コードが含まれています。
     - esp_zb_switch.h: このヘッダーファイルには、Zigbeeスイッチデバイスに必要な関数宣言、定数、データ構造が含まれています。
     - idf_component.yml: このファイルは「On/Off Switch」サンプルのESP-IDFコンポーネント設定ファイルです。
   - CMakeLists.txt: これは「On/Off Switch」サンプルプロジェクトのトップレベルCMakeListsファイルです。
   - partitions.csv: このファイルは「On/Off Switch」サンプルのパーティションテーブルを定義します。
   - sdkconfig.defaults: このファイルには「On/Off Switch」サンプルプロジェクトのデフォルト設定が含まれています。

これらのファイルは連携して、ESP Zigbee SDKを使用したZigbeeデバイスの完全なサンプル実装を提供します。.cと.hファイルには実際のコード実装が含まれ、CMakeLists.txt、partitions.csv、sdkconfig.defaultsファイルはビルド設定とメモリパーティション分割に使用されます。

## Zigbee End DeviceとZigbeeデータモデル

このチュートリアルでは、Zigbee HA On/Off LightサンプルコードがZigbeeデータモデルに基づいてどのように構造化されているかを探ります。コードとデータモデルの関係を理解することで、特定の要件に応じてコードを解釈し変更する方法についての洞察を得ることができます。

コードに入る前に、Zigbeeデータモデルの主要概念を理解することが重要です：

- **ノード**: ノードは単一のESP32-H2ベースの製品とZigbeeネットワーク内のネットワークノードを表します。ノードは複数のエンドポイントを持つことができます。

- **エンドポイント**: エンドポイントは1から240の番号で識別され、Zigbeeノード上で実行されるアプリケーションを定義します。ノードは複数のエンドポイントを持つことができ、それぞれが異なる目的を果たしたり、別々のデバイスを表したりします。

- **クラスタ**: クラスタは16ビット番号で識別され、エンドポイントに関連する機能とデータを定義するアプリケーションオブジェクトです。クラスタには属性とコマンドが含まれます。

- **属性**: 属性は16ビット番号で識別され、クラスタ内の現在の状態または物理量を表します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

それでは、HA On/Off Lightサンプルコードを調べて、それがZigbeeデータモデルにどのようにマッピングされるかを見てみましょう。

1. エンドポイントの作成

サンプルコードでは、`esp_zb_on_off_light_ep_create()` 関数を使用してHA on/offライトエンドポイントを作成します。この関数はエンドポイントID、デバイスID、および関連するクラスタを定義します。

```cpp
static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    zcl_basic_manufacturer_info_t info = {
        .manufacturer_name = ESP_MANUFACTURER_NAME,
        .model_identifier = ESP_MODEL_IDENTIFIER,
    };

    esp_zcl_utility_add_ep_basic_manufacturer_info(esp_zb_on_off_light_ep, HA_ESP_LIGHT_ENDPOINT, &info);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_stack_main_loop();
}
```

2. デバイスの登録

エンドポイントを作成した後、`esp_zb_device_register()` 関数を呼び出して、作成されたエンドポイントでZigbeeデバイスを登録します。

```cpp
esp_zb_device_register(esp_zb_on_off_light_ep);
```

3. 属性コールバック

サンプルコードは `esp_zb_core_action_handler_register()` を使用して属性変更コールバックを登録します。このコールバックは特定の属性が変更されたときに呼び出され、アプリケーションロジックに基づいて属性変更を処理できます。

```cpp
esp_zb_core_action_handler_register(zb_action_handler);
```

`zb_action_handler`関数では、on/off属性が変更されたときの望ましい動作を実装できます。例えば、LEDライトの制御などです。

4. Zigbeeスタック設定と開始

サンプルコードは`ESP_ZB_ZED_CONFIG()`を使用してZigbeeエンドデバイスを設定し、`esp_zb_init()`を使用してZigbeeスタックを初期化します。その後、`esp_zb_start()`でスタックを開始し、メインループは`esp_zb_main_loop_iteration()`で処理されます。

```cpp
esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
esp_zb_init(&zb_nwk_cfg);
...
ESP_ERROR_CHECK(esp_zb_start(false));
esp_zb_main_loop_iteration();
```

`esp_zb_app_signal_handler`関数は、Zigbeeアプリケーション層からの様々なシグナルを処理する責任があります。

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Joined network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "Network steering was not successful (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}
```

1. まず、関数は渡された`esp_zb_app_signal_t`構造体からシグナルタイプ`sig_type`とエラーステータス`err_status`を取得します。

2. 次に、switch文を使用してシグナルタイプに基づいて異なるアクションを実行します：

   - `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`：このシグナルはZigbeeスタックの起動をスキップすることを示します。この場合、Zigbeeスタックを初期化し、`esp_zb_bdb_start_top_level_commissioning`関数を呼び出して、モードを`ESP_ZB_BDB_MODE_INITIALIZATION`に設定してトップレベルコミッショニングプロセスを開始します。

   - `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START`と`ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`：これらのシグナルはデバイスの初回起動または再起動を示します。エラーステータスが`ESP_OK`の場合、遅延ドライバ初期化などの初期化タスクを実行します。次に、デバイスがファクトリー新品状態かどうかを確認します。そうであれば、ネットワークステアリングプロセスを開始します。そうでなければ、デバイスが再起動したことを示すメッセージを出力します。エラーステータスが`ESP_OK`でない場合、Zigbeeスタック初期化が失敗したことを示すメッセージを出力します。

   - `ESP_ZB_BDB_SIGNAL_STEERING`：このシグナルはネットワークステアリングプロセスの結果を示します。エラーステータスが`ESP_OK`の場合、デバイスがネットワークに正常に参加したことを意味します。この場合、PAN ID、チャンネル番号、ショートアドレスなどのネットワーク情報を出力します。エラーステータスが`ESP_OK`でない場合、ネットワークステアリングが失敗したことを意味し、エラーメッセージを出力します。その後、`esp_zb_scheduler_alarm`関数を使用して1秒の遅延後にネットワークステアリングプロセスを再開するタイマーを設定します。

   - その他のシグナル：シグナル名、タイプ、エラーステータスを単純に出力します。

この関数の目的は、異なるZigbeeアプリケーション層シグナルに基づいて適切なアクションを実行することです。これはZigbeeアプリケーションの中核部分の一つです。デバイス起動、初期化、ネットワーク参加などの重要なプロセスを処理します。

## Zigbeeコーディネータ

Zigbeeコーディネータデバイスの場合、その初期化とRTOSタスクはエンドデバイスと似ていますが、RTOSタスクでは、コールバック関数の登録ステップが少ないという違いがあります。

そのため、Zigbeeコーディネータにとって最も重要な部分は、対応するデバイスを検索・マッチングし、デバイスに制御コマンドを発行することです。

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Joined network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "Network steering was not successful (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}
```

異なるケースとその機能について見ていきましょう：

1. `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`：
   - このシグナルはZigbeeスタック初期化ステップが処理されていることを示します。
   - Zigbeeスタックの初期化を示すメッセージをログに記録します。
   - モードを`ESP_ZB_BDB_MODE_INITIALIZATION`に設定してトップレベルコミッショニングプロセスを手動で開始します。

2. `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START`と`ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`：
   - これらのシグナルはデバイスがBDB初期化を完了した（初回起動または再起動）ことを示します。
   - エラーステータスが`ESP_OK`の場合：
     - 遅延ドライバ初期化ステータスについてメッセージをログに記録し、デバイスがファクトリーリセットモードかどうかを確認します。
     - デバイスがファクトリー新品の場合：**ネットワークステアリング開始**をログに記録し、`esp_zb_bdb_start_top_level_commissioning`を`ESP_ZB_BDB_MODE_NETWORK_STEERING`で呼び出して**ネットワークステアリング**プロセス（既存ネットワークへの参加試行）を開始します。
     - デバイスがファクトリー新品でない場合：デバイスが再起動したことをログに記録します（以前のネットワーク認証情報を保持していることを意味します）。
   - エラーステータスが`ESP_OK`でない場合：
     - 警告メッセージをログに記録し、1000ミリ秒後にBDB初期化の再試行をスケジュールします。

3. `ESP_ZB_BDB_SIGNAL_STEERING`：
   - このシグナルはネットワークステアリングプロセスの**結果**を示します。
   - エラーステータスが`ESP_OK`の場合：
     - デバイスが**ネットワークに正常に参加した**ことを示します。
     - 拡張PAN IDを取得し、詳細なネットワーク情報をログに記録します：「ネットワークに正常に参加しました」（PAN ID、チャンネル、ショートアドレスを含む）。
   - エラーステータスが`ESP_OK`でない場合：
     - ネットワークステアリングが成功しなかったことをログに記録します。
     - 1000ミリ秒後にステアリングプロセス（`ESP_ZB_BDB_MODE_NETWORK_STEERING`）の再試行をスケジュールします。

4. `デフォルトケース`:
   - 上記で明示的に処理されていない他の信号タイプについては、デバッグ用に信号名とエラーステータスを含む一般的なメッセージをログに記録します。

全体的に、このコードは様々なZigbee関連イベントを処理し、Zigbeeスタックの初期化、ネットワークの形成、ネットワークのステアリング、デバイスアナウンスの処理、カラー調光可能ライトデバイスの検索などのアクションを実行します。

例の残りの部分は、キーストローク安定化とキーストローク割り込みのロジックに対処しています。興味がある場合は、自分で読んで理解することができます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、様々なサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
