---
description: このチュートリアルでは、XIAO ESP32C6開発ボードを使用してZigbeeアプリケーション開発を探求する旅に出ます。XIAO ESP32C6は、統合Wi-FiとBluetooth Low Energy（BLE）接続を提供するESP32-C6チップを搭載したコンパクトでありながら強力なボードです。ESP Zigbee SDKを活用することで、XIAO ESP32C6の全ポテンシャルを活用し、Zigbee機能を含むようにその機能を拡張できます。
title: XIAO ESP32C6 Zigbee クイックスタートガイド（ESP-IDF）
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.jpg
slug: /ja/xiao_esp32c6_zigbee
last_update:
  date: 05/30/2024
  author: Citric
---

Zigbeeは、ホームオートメーション、スマートエネルギー管理、およびモノのインターネット（IoT）アプリケーションで広く採用されている無線通信プロトコルです。低消費電力、信頼性の高いデータ伝送、およびメッシュネットワーク機能で知られるZigbeeは、スケーラブルで効率的な無線ネットワークを構築するための優れた選択肢です。

このチュートリアルでは、XIAO ESP32C6開発ボードを使用してZigbeeアプリケーション開発を探求する旅に出ます。XIAO ESP32C6は、統合Wi-FiとBluetooth Low Energy（BLE）接続を提供するESP32-C6チップを搭載したコンパクトでありながら強力なボードです。ESP Zigbee SDKを活用することで、XIAO ESP32C6の全ポテンシャルを活用し、Zigbee機能を含むようにその機能を拡張できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png" style={{width:800, height:'auto'}}/></div>

Zigbee開発を深く掘り下げるために、ESP Zigbee SDKが提供する2つのサンプルプログラムに焦点を当てます：HA_on_off_lightとHA_on_off_switch。これらの例は、それぞれZigbeeライトデバイスとZigbeeスイッチデバイスの実装を示しています。これらの例の背後にあるコード構造、データモデル、および動作原理を徹底的に調べることで、Zigbeeデバイス開発の包括的な理解を得ることができます。

このチュートリアル全体を通して、以下の主要な側面をカバーします：

1. XIAO ESP32C6およびESP Zigbee SDKの開発環境のセットアップ。
2. HA_on_off_lightおよびHA_on_off_switchの例のコード構造と構成の分析。
3. Zigbeeデバイスデータモデルとコード内での定義方法の理解。
4. Zigbeeデバイスの初期化プロセスとイベント処理メカニズムの探求。
5. Zigbeeデバイス間の通信パターンとメッセージ交換の調査。

このチュートリアルの終わりまでに、XIAO ESP32C6とESP Zigbee SDKを使用したZigbee開発の確固たる基盤を得ることができます。この知識と実践的なスキルを身に着けることで、独自のZigbeeベースのプロジェクトを作成し、絶えず成長するZigbeeデバイスのエコシステムに貢献する準備が整います。

それでは、XIAO ESP32C6を使用したZigbee開発のこのエキサイティングな旅に出発し、この強力な無線通信プロトコルの全ポテンシャルを解き放ちましょう！

## ハードウェアの準備

このチュートリアルでは、Zigbeeを説明する例として**2つの**XIAO ESP32C6を使用します。以下のリンクから購入できます。1つをZigbee End Deviceとして、もう1つをZigbee Coordinatorとして使用します。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 環境準備とデモンストレーション

このセクションでは、開発環境の設定と例の2つのプログラムのアップロードについてガイドします。

### ステップ1. ESP-IDF環境の準備

Zigbee SDKを使用するには、EspressifのESP-IDF開発フレームワークを使用することを推奨します。ESP-IDFのインストールと環境設定については、Espressifの公式ウェブサイトで異なるシステム向けの詳細なインストールプロセスが提供されており、下のボタンからジャンプして読むことができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.espressif.com/projects/esp-idf/en/v5.1.3/esp32h2/get-started/index.html#installation" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ページに移動 🖱️</font></span></strong>
    </a>
</div>

たまたまUbuntuシステムを使用している場合、ターミナルで実行する必要があるコマンドは大まかに以下の通りです：

```
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
git checkout v5.1.3
git submodule update --init --recursive
./install.sh
source ./export.sh
cd ..
```

:::tip
EspressifはZigbee開発に**ESP-IDF v5.1.3**の使用を推奨しています。これはこのチュートリアルで検証されたバージョンです。
:::

### ステップ2. Zigbee SDKをダウンロード

esp-zigbee-sdkのクローン：

```
git clone https://github.com/espressif/esp-zigbee-sdk.git
cd esp-zigbee-sdk/examples/esp_zigbee_HA_sample
```

### ステップ3. HA_on_off_lightの手順を書く

最初のXIAO ESP32C6を準備しましょう。エンドデバイス用のコードを書いてフラッシュします。

```
cd HA_on_off_light/main
```

提供されたサンプルプログラムではGPIO8をLEDとして使用していますが、XIAOのLEDはGPIO15であるため、効果を示すためにサンプルプログラムに簡単な修正を加える必要があります。

修正するプログラムはメインファイルの`esp_zb_light.c`にあります。修正後の完全なコードは以下の通りです。

```cpp
#include "esp_zb_light.h"
#include "esp_check.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"
#include "driver/gpio.h"

#if !defined ZB_ED_ROLE
#error Define ZB_ED_ROLE in idf.py menuconfig to compile light (End Device) source code.
#endif

static const char *TAG = "ESP_ZB_ON_OFF_LIGHT";
#define BLINK_GPIO 15
/********************* Define functions **************************/
static esp_err_t deferred_driver_init(void)
{
    light_driver_init(LIGHT_DEFAULT_OFF);
    return ESP_OK;
}

static void configure_led(void)
{
    ESP_LOGI(TAG, "Example configured to blink GPIO LED!");
    gpio_reset_pin(BLINK_GPIO);
    /* Set the GPIO as a push/pull output */
    gpio_set_direction(BLINK_GPIO, GPIO_MODE_OUTPUT);
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
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            /* commissioning failed */
            ESP_LOGW(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
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
                gpio_set_level(BLINK_GPIO, light_state);
                // light_driver_set_power(light_state);
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
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}

void app_main(void)
{
    configure_led();
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };
    ESP_ERROR_CHECK(nvs_flash_init());
    ESP_ERROR_CHECK(esp_zb_platform_config(&config));
    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}
```

保存してください。

### ステップ 4. HA_on_off_light フラッシュ手順

XIAO ESP32C6 ボードをコンピュータに接続し、ボードがどのシリアルポートで認識されているかを確認してください。

シリアルポートは次の命名パターンを持ちます：`/dev/tty`。一般的に、コンピュータには `tty` で始まる多くのポートがある場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

ポートの特定も簡単です。XIAOを接続していない時にデフォルトで存在するポートを確認するために、クエリコマンドを使用できます。

```
ls /dev/tty*
```

その後、XIAOをコンピュータに接続して再度確認すると、追加されたシリアルポート名がXIAOのポート番号になります。

ターゲットデバイスを設定します。

```
idf.py set-target esp32c6
```

以下を実行してプロジェクトをビルドします：

```
idf.py build
```

前のステップでESP32用にビルドしたバイナリをフラッシュするには、以下のコマンドを実行する必要があります：

```
idf.py -p PORT flash
```

`PORT` を XIAO ESP32C6 の USB ポート名に置き換えてください。**PORT** が定義されていない場合、`idf.py` は利用可能な USB ポートを使用して自動的に接続を試行します。最初のステップで確認したデバイスポート番号に従って、私の場合は以下のコマンドを入力してプログラムをフラッシュする必要があります。

```
idf.py -p /dev/ttyACM0 flash
```

フラッシュプロセスの最後に問題がなければ、XIAO ESP32C6 が再起動し、Zigbee ライトアプリケーションが開始されます。

### ステップ 5. HA_on_off_switch フラッシュ手順

同様に、別の XIAO ESP32C6 を取り出し、スイッチプログラムをアップロードします。手順は似ています。

```
cd ../HA_on_off_switch
idf.py set-target esp32c6
idf.py build
idf.py -p PORT flash
```

すべてがうまくいけば、次にSWITCHプログラムのXIAOの**BOOT**ボタンを使用して、LIGHTプログラムのXIAOのLEDをオン/オフ制御できます。

<div class="table-center">
<iframe width="800" height="350" src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/2.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## HA_on_off_lightとHA_on_off_switchのプログラム構造

このフォルダにはZigbee HA標準デバイスを実演するサンプルが含まれています

- `HA_on_off_light`はZigbeeエンドデバイスを実演する標準HAオン/オフ電球のサンプルです。

- `HA_on_off_switch`はZigbeeコーディネーター役割を実演する標準HAオン/オフスイッチのサンプルです。Zigbee HAオン/オフライトを制御するオン/オフトグルを提供します。

このチュートリアルでは、ESP Zigbee SDKが提供する2つのサンプルプログラム：`HA_on_off_light`と`HA_on_off_switch`を詳しく掘り下げます。これらのサンプルのコード構造と構成を分析することで、Zigbeeデバイスアプリケーションの開発方法について包括的な理解を得ることができます。

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

1. esp_zigbee_HA_sample/: このディレクトリには、ESP Zigbee SDKによって提供されるHome Automation (HA) サンプルプロジェクトが含まれています。

2. HA_on_off_light/: このサブディレクトリは「On/Off Light」サンプルプロジェクトを表しています。
   - main/: このディレクトリには「On/Off Light」サンプルのメインソースファイルが含まれています。
     - CMakeLists.txt: このファイルは、CMakeビルドシステムによって使用され、「On/Off Light」サンプルのソースファイルと依存関係を指定します。
     - esp_zb_light.c: このファイルには、初期化、イベント処理、他のZigbeeデバイスとの通信を含む、Zigbeeライトデバイスのメイン実装コードが含まれています。
     - esp_zb_light.h: このヘッダーファイルには、Zigbeeライトデバイスに必要な関数宣言、定数、データ構造が含まれています。
     - idf_component.yml: このファイルはESP-IDFコンポーネント設定ファイルで、「On/Off Light」サンプルのコンポーネント依存関係とビルド設定を指定します。
   - CMakeLists.txt: このファイルは「On/Off Light」サンプルプロジェクトのトップレベルCMakeListsファイルで、必要な設定とビルドターゲットを含みます。
   - partitions.csv: このファイルは「On/Off Light」サンプルのパーティションテーブルを定義し、ブートローダー、アプリケーション、ストレージなどの様々なパーティションのメモリレイアウトとサイズを指定します。
   - sdkconfig.defaults: このファイルには「On/Off Light」サンプルプロジェクトのデフォルト設定が含まれており、ユーザーによって上書きできます。

3. HA_on_off_switch/: このサブディレクトリは「On/Off Switch」サンプルプロジェクトを表しています。
   - main/: このディレクトリには「On/Off Switch」サンプルのメインソースファイルが含まれています。
     - CMakeLists.txt: 「On/Off Light」サンプルと同様に、このファイルはCMakeビルドシステムによって使用され、「On/Off Switch」サンプルのソースファイルと依存関係を指定します。
     - esp_zb_switch.c: このファイルには、初期化、イベント処理、他のZigbeeデバイスとの通信を含む、Zigbeeスイッチデバイスのメイン実装コードが含まれています。
     - esp_zb_switch.h: このヘッダーファイルには、Zigbeeスイッチデバイスに必要な関数宣言、定数、データ構造が含まれています。
     - idf_component.yml: このファイルは「On/Off Switch」サンプルのESP-IDFコンポーネント設定ファイルです。
   - CMakeLists.txt: これは「On/Off Switch」サンプルプロジェクトのトップレベルCMakeListsファイルです。
   - partitions.csv: このファイルは「On/Off Switch」サンプルのパーティションテーブルを定義します。
   - sdkconfig.defaults: このファイルには「On/Off Switch」サンプルプロジェクトのデフォルト設定が含まれています。

これらのファイルは連携して、ESP Zigbee SDKを使用したZigbeeデバイスの完全なサンプル実装を提供します。.cファイルと.hファイルには実際のコード実装が含まれ、CMakeLists.txt、partitions.csv、sdkconfig.defaultsファイルはビルド設定とメモリパーティショニングに使用されます。

## Zigbee End DeviceとZigbee Data Model

このチュートリアルでは、Zigbee HA On/Off Lightサンプルコードが、Zigbeeデータモデルに基づいてどのように構造化されているかを探ります。コードとデータモデルの関係を理解することで、特定の要件に応じてコードを解釈し、変更する方法についての洞察を得ることができます。

コードに入る前に、Zigbeeデータモデルの主要概念を理解することが重要です：

- **Node**: ノードは単一のESP32-H2ベースの製品と、Zigbeeネットワーク内のネットワークノードを表します。ノードは複数のエンドポイントを持つことができます。

- **Endpoint**: エンドポイントは1から240の番号で識別され、Zigbeeノード上で実行されるアプリケーションを定義します。ノードは複数のエンドポイントを持つことができ、それぞれが異なる目的を果たしたり、別々のデバイスを表したりします。

- **Cluster**: クラスターは16ビット番号で識別され、エンドポイントに関連する機能とデータを定義するアプリケーションオブジェクトです。クラスターには属性とコマンドが含まれます。

- **Attribute**: 属性は16ビット番号で識別され、クラスター内の現在の状態または物理量を表します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

それでは、HA On/Off Lightサンプルコードを調べて、それがZigbeeデータモデルにどのようにマッピングされるかを見てみましょう。

1. エンドポイントの作成

サンプルコードでは、`esp_zb_on_off_light_ep_create()`関数がHA on/off lightエンドポイントを作成するために使用されます。この関数はエンドポイントID、デバイスID、および関連するクラスターを定義します。

```cpp
static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}
```

2. デバイスの登録

エンドポイントを作成した後、`esp_zb_device_register()` 関数を呼び出して、作成されたエンドポイントで Zigbee デバイスを登録します。

```cpp
esp_zb_device_register(esp_zb_on_off_light_ep);
```

3. 属性コールバック

サンプルコードは、`esp_zb_core_action_handler_register()` を使用して属性変更コールバックを登録します。このコールバックは、特定の属性が変更されたときに呼び出され、アプリケーションロジックに基づいて属性変更を処理することができます。

```cpp
esp_zb_core_action_handler_register(zb_action_handler);
```

`zb_action_handler` 関数では、LEDライトの制御など、on/off属性が変更されたときの望ましい動作を実装できます。

4. Zigbee スタック設定と開始

サンプルコードは `ESP_ZB_ZED_CONFIG()` を使用して Zigbee エンドデバイスを設定し、`esp_zb_init()` を使用して Zigbee スタックを初期化します。その後、`esp_zb_start()` でスタックを開始し、メインループは `esp_zb_main_loop_iteration()` によって処理されます。

```cpp
esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
esp_zb_init(&zb_nwk_cfg);
...
ESP_ERROR_CHECK(esp_zb_start(false));
esp_zb_main_loop_iteration();
```

`esp_zb_app_signal_handler` 関数は、Zigbee アプリケーション層からの様々なシグナルを処理する責任があります。

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
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            /* commissioning failed */
            ESP_LOGW(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
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

1. まず、関数は渡された `esp_zb_app_signal_t` 構造体からシグナルタイプ `sig_type` とエラーステータス `err_status` を取得します。

2. 次に、switch文を使用してシグナルタイプに基づいて異なるアクションを実行します：

   - `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`: このシグナルはZigbeeスタックの起動をスキップすることを示します。この場合、Zigbeeスタックを初期化し、その後 `esp_zb_bdb_start_top_level_commissioning` 関数を呼び出して、モードを `ESP_ZB_BDB_MODE_INITIALIZATION` に設定してトップレベルコミッショニングプロセスを開始します。

   - `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` と `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`: これらのシグナルはデバイスの初回起動または再起動を示します。エラーステータスが `ESP_OK` の場合、遅延ドライバー初期化などの初期化タスクを実行します。その後、デバイスがファクトリー新品状態かどうかを確認します。そうであれば、ネットワークステアリングプロセスを開始します。そうでなければ、デバイスが再起動したことを示すメッセージを出力します。エラーステータスが `ESP_OK` でない場合、Zigbeeスタックの初期化が失敗したことを示すメッセージを出力します。

   - `ESP_ZB_BDB_SIGNAL_STEERING`: このシグナルはネットワークステアリングプロセスの結果を示します。エラーステータスが `ESP_OK` の場合、デバイスがネットワークへの参加に成功したことを意味します。この場合、PAN ID、チャンネル番号、ショートアドレスなどのネットワーク情報を出力します。エラーステータスが `ESP_OK` でない場合、ネットワークステアリングが失敗したことを意味し、エラーメッセージを出力します。その後、`esp_zb_scheduler_alarm` 関数を使用して、1秒の遅延後にネットワークステアリングプロセスを再開するタイマーを設定します。

   - その他のシグナル: シグナル名、タイプ、エラーステータスを単純に出力します。

この関数の目的は、異なるZigbeeアプリケーション層シグナルに基づいて適切なアクションを実行することです。これはZigbeeアプリケーションの中核部分の一つです。デバイスの起動、初期化、ネットワーク参加などの重要なプロセスを処理します。

## Zigbee Coordinator

Zigbee Coordinatorデバイスの場合、その初期化とRTOSタスクはEnd Deviceと似ていますが、RTOSタスクにおいて、コールバック関数を登録するステップが少ないという違いがあります。

そのためZigbee Coordinatorにとって、最も重要な部分は対応するデバイスを検索・マッチングし、デバイスに制御コマンドを発行することです。

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    esp_zb_zdo_signal_device_annce_params_t *dev_annce_params = NULL;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network formation");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_FORMATION);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGE(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_FORMATION:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Formed network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
        } else {
            ESP_LOGI(TAG, "Restart network formation (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_FORMATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Network steering started");
        }
        break;
    case ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE:
        dev_annce_params = (esp_zb_zdo_signal_device_annce_params_t *)esp_zb_app_signal_get_params(p_sg_p);
        ESP_LOGI(TAG, "New device commissioned or rejoined (short: 0x%04hx)", dev_annce_params->device_short_addr);
        esp_zb_zdo_match_desc_req_param_t  cmd_req;
        cmd_req.dst_nwk_addr = dev_annce_params->device_short_addr;
        cmd_req.addr_of_interest = dev_annce_params->device_short_addr;
        /* find color dimmable light once device joining the network */
        esp_zb_zdo_find_color_dimmable_light(&cmd_req, user_find_cb, NULL);
        break;
    case ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS:
        if (err_status == ESP_OK) {
            if (*(uint8_t *)esp_zb_app_signal_get_params(p_sg_p)) {
                ESP_LOGI(TAG, "Network(0x%04hx) is open for %d seconds", esp_zb_get_pan_id(), *(uint8_t *)esp_zb_app_signal_get_params(p_sg_p));
            } else {
                ESP_LOGW(TAG, "Network(0x%04hx) closed, devices joining not allowed.", esp_zb_get_pan_id());
            }
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

1. `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`:
   - このシグナルは、Zigbeeスタックの初期化をスキップすべきことを示します。
   - Zigbeeスタックの初期化を示すメッセージをログに記録します。
   - モードを`ESP_ZB_BDB_MODE_INITIALIZATION`に設定して、トップレベルコミッショニングプロセスを開始します。

2. `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START`と`ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`:
   - これらのシグナルは、デバイスが初回起動したか、再起動したことを示します。
   - エラーステータスが`ESP_OK`の場合、遅延ドライバ初期化ステータスと、デバイスがファクトリーリセットモードで起動したかどうかについてのメッセージをログに記録します。
   - デバイスがファクトリーニューモードの場合、モードを`ESP_ZB_BDB_MODE_NETWORK_FORMATION`に設定して`esp_zb_bdb_start_top_level_commissioning`を呼び出し、ネットワーク形成プロセスを開始します。
   - デバイスがファクトリーニューモードでない場合、デバイスが再起動したことを示すメッセージをログに記録します。
   - エラーステータスが`ESP_OK`でない場合、エラーメッセージをログに記録します。

3. `ESP_ZB_BDB_SIGNAL_FORMATION`:
   - このシグナルは、ネットワーク形成プロセスのステータスを示します。
   - エラーステータスが`ESP_OK`の場合、拡張PAN IDを取得し、形成されたネットワークに関する情報（PAN ID、チャンネル、ショートアドレス）をログに記録し、モードを`ESP_ZB_BDB_MODE_NETWORK_STEERING`に設定して`esp_zb_bdb_start_top_level_commissioning`を呼び出し、ネットワークステアリングプロセスを開始します。
   - エラーステータスが`ESP_OK`でない場合、ネットワーク形成を再開するメッセージをログに記録し、1000ミリ秒の遅延後に`bdb_start_top_level_commissioning_cb`を呼び出すアラームをスケジュールします。

4. `ESP_ZB_BDB_SIGNAL_STEERING`:
   - このシグナルは、ネットワークステアリングプロセスのステータスを示します。
   - エラーステータスが`ESP_OK`の場合、ネットワークステアリングが開始されたことを示すメッセージをログに記録します。

5. `ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE`:
   - このシグナルは、新しいデバイスがコミッションされたか、ネットワークに再参加したときにトリガーされます。
   - デバイスアナウンスパラメータを取得し、新しいデバイスのショートアドレスを含むメッセージをログに記録します。
   - マッチディスクリプタリクエスト（`esp_zb_zdo_match_desc_req_param_t`）を準備し、宛先と関心のあるアドレスを新しいデバイスのショートアドレスに設定します。
   - `esp_zb_zdo_find_color_dimmable_light`を呼び出してカラー調光可能ライトデバイスを見つけ、コールバック関数として`user_find_cb`を指定します。

6. `ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS`:
   - このシグナルは、ネットワークの参加許可状態のステータスを示します。
   - エラーステータスが`ESP_OK`の場合、ネットワークが参加に開放されているかどうかと、開放されている期間についてのメッセージをログに記録します。ネットワークが閉じている場合は、警告メッセージをログに記録します。

7. デフォルトケース:
   - その他のシグナルタイプについては、シグナルタイプとエラーステータスを含む一般的なメッセージをログに記録します。

全体的に、このコードは様々なZigbee関連イベントを処理し、Zigbeeスタックの初期化、ネットワークの形成、ネットワークのステアリング、デバイスアナウンスの処理、カラー調光可能ライトデバイスの検索などのアクションを実行します。

例の残りの部分は、キーストローク安定化とキーストローク割り込みのロジックに対処しています。興味がある場合は、自分で読んで理解することができます。

## トラブルシューティング

### Q1: ESP_ZB_ON_OFF_LIGHT で問題が続く：ネットワークステアリングが他のXIAOとのマッチングに成功しない

まず、使用しているESP-IDFのバージョンをトラブルシューティングしてください。Zigbeeサンプルアプリケーションのコンパイルには**ESP-IDF v5.1.3**を使用していることを確認し、そうでない場合はIDFバージョンを変更してください。

次に、デバイスの再接続を試してください。**HA_on_off_switch**プログラムがアップロードされたデバイスを最初に電源投入し、その後**HA_on_off_light**プログラムがアップロードされたデバイスを電源投入してみてください。

それでも動作しない場合は、すべてのフラッシュを消去してプログラムを再度アップロードしてください。

```
idf.py erase_flash flash monitor
```

上記のいずれも機能しない場合は、Espressifに問題を報告してください。

### Q2: マッチングが成功した後、新しいデバイスをマッチングしたい場合はどうすればよいですか？

flashコマンドアップローダーを直接使用しても、flashに保存された過去のペアリング記録は消去されません。新しいデバイスをマッチングするには、以下のコマンドを使用してプログラムを再アップロードしてください。

```
idf.py erase_flash flash monitor
```

## リソース

- **[Espressif公式ドキュメント]** [ESP Zigbee SDKでの開発](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32/developing.html)
- **[GITHUB]** [Zigbee SDKリポジトリ](https://github.com/espressif/esp-zigbee-sdk)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
