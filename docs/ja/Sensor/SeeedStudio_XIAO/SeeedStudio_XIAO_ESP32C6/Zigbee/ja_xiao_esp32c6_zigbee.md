---
description: このチュートリアルでは、XIAO ESP32C6開発ボードを使用してZigbeeアプリケーション開発を探求する旅に出ます。XIAO ESP32C6は、Wi-FiとBluetooth Low Energy（BLE）接続を統合したESP32-C6チップを搭載したコンパクトで強力なボードです。ESP Zigbee SDKを活用することで、XIAO ESP32C6の可能性を最大限に引き出し、Zigbee機能を拡張することができます。
title: XIAO ESP32C6 Zigbee クイックスタートガイド (ESP-IDF)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.jpg
slug: /ja/xiao_esp32c6_zigbee
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

Zigbeeは広く採用されている無線通信プロトコルであり、家庭の自動化、スマートエネルギー管理、そしてIoT（モノのインターネット）アプリケーションで広く利用されています。低消費電力、信頼性の高いデータ伝送、メッシュネットワーク機能で知られるZigbeeは、スケーラブルで効率的な無線ネットワークを構築するための優れた選択肢です。

このチュートリアルでは、XIAO ESP32C6開発ボードを使用してZigbeeアプリケーション開発を探求する旅に出ます。XIAO ESP32C6は、Wi-FiとBluetooth Low Energy（BLE）接続を統合したESP32-C6チップを搭載したコンパクトで強力なボードです。ESP Zigbee SDKを活用することで、XIAO ESP32C6の可能性を最大限に引き出し、Zigbee機能を拡張することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png" style={{width:800, height:'auto'}}/></div>

Zigbee開発を深く掘り下げるために、ESP Zigbee SDKが提供する2つのサンプルプログラム、HA_on_off_lightとHA_on_off_switchに焦点を当てます。これらの例は、それぞれZigbeeライトデバイスとZigbeeスイッチデバイスの実装を示しています。これらの例のコード構造、データモデル、および動作原理を徹底的に検討することで、Zigbeeデバイス開発に関する包括的な理解を得ることができます。

このチュートリアルでは、以下の重要な側面をカバーします：

1. XIAO ESP32C6とESP Zigbee SDKの開発環境のセットアップ。
2. HA_on_off_lightとHA_on_off_switch例のコード構造と組織の分析。
3. Zigbeeデバイスデータモデルの理解とコード内での定義方法。
4. Zigbeeデバイスの初期化プロセスとイベント処理メカニズムの探求。
5. Zigbeeデバイス間の通信パターンとメッセージ交換の検討。

このチュートリアルを終える頃には、XIAO ESP32C6とESP Zigbee SDKを使用したZigbee開発に関する確固たる基礎を習得できます。この知識と実践的なスキルを活用して、独自のZigbeeベースのプロジェクトを作成し、Zigbeeデバイスの成長するエコシステムに貢献する準備が整います。

それでは、XIAO ESP32C6を使用したZigbee開発のこのエキサイティングな旅に出発し、この強力な無線通信プロトコルの可能性を最大限に引き出しましょう！

## ハードウェア準備

このチュートリアルでは、Zigbeeを説明するために**2つ**のXIAO ESP32C6を使用します。以下のリンクから購入できます。一つはZigbeeエンドデバイスとして、もう一つはZigbeeコーディネーターとして使用します。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 環境準備とデモンストレーション

このセクションでは、開発環境の設定方法と、例にある2つのプログラムをアップロードする手順を説明します。

### ステップ 1. ESP-IDF 環境を準備する

Zigbee SDK を使用するには、Espressif の ESP-IDF 開発フレームワークを使用することをお勧めします。Espressif の公式ウェブサイトでは、さまざまなシステム向けの詳細なインストール手順が提供されています。以下のボタンをクリックしてページに移動してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.espressif.com/projects/esp-idf/en/v5.1.3/esp32h2/get-started/index.html#installation" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ページに移動 🖱️</font></span></strong>
    </a>
</div>

Ubuntu システムを使用している場合、ターミナルで実行する必要があるコマンドは以下の通りです：

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
Espressif は Zigbee 開発に **ESP-IDF v5.1.3** を使用することを推奨しています。このバージョンは本チュートリアルで検証済みです。
:::

### ステップ 2. Zigbee SDK をダウンロードする

esp-zigbee-sdk をクローンします：

```
git clone https://github.com/espressif/esp-zigbee-sdk.git
cd esp-zigbee-sdk/examples/esp_zigbee_HA_sample
```

### ステップ 3. HA_on_off_light プロシージャを作成する

最初の XIAO ESP32C6 を準備します。これに対してエンドデバイスを作成し、フラッシュします。

```
cd HA_on_off_light/main
```

提供されているサンプルプログラムでは GPIO8 を LED として使用していますが、XIAO の LED は GPIO15 であるため、効果を確認するためにサンプルプログラムを少し修正する必要があります。

修正後の完全なコードは以下の通りです。`esp_zb_light.c` ファイルの main ディレクトリ内にあります。

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
/********************* 関数の定義 **************************/
static esp_err_t deferred_driver_init(void)
{
    light_driver_init(LIGHT_DEFAULT_OFF);
    return ESP_OK;
}

static void configure_led(void)
{
    ESP_LOGI(TAG, "GPIO LED を点滅するように設定しました！");
    gpio_reset_pin(BLINK_GPIO);
    /* GPIO をプッシュプル出力として設定 */
    gpio_set_direction(BLINK_GPIO, GPIO_MODE_OUTPUT);
}

static void bdb_start_top_level_commissioning_cb(uint8_t mode_mask)
{
    ESP_RETURN_ON_FALSE(esp_zb_bdb_start_top_level_commissioning(mode_mask) == ESP_OK, , TAG, "Zigbee コミッショニングの開始に失敗しました");
}

void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Zigbee スタックを初期化します");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "遅延ドライバ初期化 %s", deferred_driver_init() ? "失敗" : "成功");
            ESP_LOGI(TAG, "デバイスは %s 工場出荷時リセットモードで起動しました", esp_zb_bdb_is_factory_new() ? "" : "非");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "ネットワークステアリングを開始します");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "デバイスが再起動しました");
            }
        } else {
            /* コミッショニング失敗 */
            ESP_LOGW(TAG, "Zigbee スタックの初期化に失敗しました (ステータス: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "ネットワークに正常に参加しました (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, チャンネル:%d, ショートアドレス: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "ネットワークステアリングが成功しませんでした (ステータス: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO シグナル: %s (0x%x), ステータス: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}

static esp_err_t zb_attribute_handler(const esp_zb_zcl_set_attr_value_message_t *message)
{
    esp_err_t ret = ESP_OK;
    bool light_state = 0;

    ESP_RETURN_ON_FALSE(message, ESP_FAIL, TAG, "空のメッセージ");
    ESP_RETURN_ON_FALSE(message->info.status == ESP_ZB_ZCL_STATUS_SUCCESS, ESP_ERR_INVALID_ARG, TAG, "受信メッセージ: エラーステータス(%d)",
                        message->info.status);
    ESP_LOGI(TAG, "受信メッセージ: エンドポイント(%d), クラスター(0x%x), 属性(0x%x), データサイズ(%d)", message->info.dst_endpoint, message->info.cluster,
             message->attribute.id, message->attribute.data.size);
    if (message->info.dst_endpoint == HA_ESP_LIGHT_ENDPOINT) {
        if (message->info.cluster == ESP_ZB_ZCL_CLUSTER_ID_ON_OFF) {
            if (message->attribute.id == ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID && message->attribute.data.type == ESP_ZB_ZCL_ATTR_TYPE_BOOL) {
                light_state = message->attribute.data.value ? *(bool *)message->attribute.data.value : light_state;
                ESP_LOGI(TAG, "ライトを %s に設定", light_state ? "オン" : "オフ");
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
        ESP_LOGW(TAG, "Zigbee アクション(0x%x)コールバックを受信", callback_id);
        break;
    }
    return ret;
}

static void esp_zb_task(void *pvParameters)
{
    /* Zigbee スタックを初期化 */
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

### ステップ 4. HA_on_off_light プログラムのフラッシュ手順

まず、XIAO ESP32C6 ボードをコンピュータに接続し、ボードがどのシリアルポートで認識されているかを確認します。

シリアルポートは `/dev/tty` のような命名パターンを持っています。通常、コンピュータには `tty` で始まる多くのポートが存在する可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

ポートを特定するのは簡単です。XIAO を接続していない状態で、以下のコマンドを使用してデフォルトで存在するポートを確認できます。

```
ls /dev/tty*
```

次に、XIAO をコンピュータに接続し、再度クエリを実行すると、追加されたシリアルポート名が XIAO のポート番号になります。

ターゲットデバイスを設定します。

```
idf.py set-target esp32c6
```

以下のコマンドを実行してプロジェクトをビルドします。

```
idf.py build
```

前のステップで ESP32 用にビルドしたバイナリをフラッシュするには、次のコマンドを実行します。

```
idf.py -p PORT flash
```

`PORT` を XIAO ESP32C6 の USB ポート名に置き換えてください。**PORT** が定義されていない場合、`idf.py` は利用可能な USB ポートを自動的に使用して接続を試みます。最初のステップでクエリしたデバイスポート番号に基づいて、私の場合は次のコマンドを入力してプログラムをフラッシュします。

```
idf.py -p /dev/ttyACM0 flash
```

フラッシュプロセスの最後に問題がなければ、XIAO ESP32C6 は再起動し、Zigbee ライトアプリケーションを起動します。

### ステップ 5. HA_on_off_switch プログラムのフラッシュ手順

同様に、別の XIAO ESP32C6 を取り出し、スイッチプログラムをアップロードします。手順は同じです。

```
cd ../HA_on_off_switch
idf.py set-target esp32c6
idf.py build
idf.py -p PORT flash
```

すべてが正常に進めば、次にスイッチプログラムの XIAO 上の **BOOT** ボタンを使用して、ライトプログラムの XIAO の LED をオンまたはオフに制御できます。

<div class="table-center">
<iframe width="800" height="350" src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/2.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## HA_on_off_light と HA_on_off_switch のプログラム構造

このフォルダには、Zigbee HA 標準デバイスを示す例が含まれています。

* `HA_on_off_light` は、Zigbee エンドデバイスを示す標準的な HA オンオフライトバルブの例です。

* `HA_on_off_switch` は、Zigbee コーディネータの役割を示す標準的な HA オンオフスイッチの例です。Zigbee HA オンオフライトを制御するオン/オフトグルを提供します。

このチュートリアルでは、ESP Zigbee SDK によって提供される 2 つのサンプルプログラム、`HA_on_off_light` と `HA_on_off_switch` を詳しく掘り下げます。これらの例のコード構造と組織を分析することで、Zigbee デバイスアプリケーションの開発方法を包括的に理解します。

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

1. esp_zigbee_HA_sample/: このディレクトリには、ESP Zigbee SDK によって提供されるホームオートメーション (HA) サンプルプロジェクトが含まれています。

2. HA_on_off_light/: このサブディレクトリは「オン/オフライト」サンプルプロジェクトを表します。
   - main/: このディレクトリには「オン/オフライト」サンプルのメインソースファイルが含まれています。
     - CMakeLists.txt: このファイルは CMake ビルドシステムによって使用され、「オン/オフライト」サンプルのソースファイルと依存関係を指定します。
     - esp_zb_light.c: このファイルには、Zigbee ライトデバイスのメイン実装コードが含まれており、初期化、イベント処理、他の Zigbee デバイスとの通信が含まれます。
     - esp_zb_light.h: このヘッダーファイルには、Zigbee ライトデバイスの必要な関数宣言、定数、およびデータ構造が含まれています。
     - idf_component.yml: このファイルは ESP-IDF コンポーネント設定ファイルで、「オン/オフライト」サンプルのコンポーネント依存関係とビルド設定を指定します。
   - CMakeLists.txt: このファイルは「オン/オフライト」サンプルプロジェクトのトップレベル CMakeLists ファイルで、必要な設定とビルドターゲットを含みます。
   - partitions.csv: このファイルは「オン/オフライト」サンプルのパーティションテーブルを定義し、ブートローダー、アプリケーション、ストレージなどのさまざまなパーティションのメモリレイアウトとサイズを指定します。
   - sdkconfig.defaults: このファイルには「オン/オフライト」サンプルプロジェクトのデフォルト設定が含まれており、ユーザーによって上書き可能です。

3. HA_on_off_switch/: このサブディレクトリは「オン/オフスイッチ」サンプルプロジェクトを表します。
   - main/: このディレクトリには「オン/オフスイッチ」サンプルのメインソースファイルが含まれています。
     - CMakeLists.txt: 「オン/オフライト」サンプルと同様に、このファイルは「オン/オフスイッチ」サンプルのソースファイルと依存関係を指定するために CMake ビルドシステムによって使用されます。
     - esp_zb_switch.c: このファイルには、Zigbee スイッチデバイスのメイン実装コードが含まれており、初期化、イベント処理、他の Zigbee デバイスとの通信が含まれます。
     - esp_zb_switch.h: このヘッダーファイルには、Zigbee スイッチデバイスの必要な関数宣言、定数、およびデータ構造が含まれています。
     - idf_component.yml: このファイルは「オン/オフスイッチ」サンプルの ESP-IDF コンポーネント設定ファイルです。
   - CMakeLists.txt: これは「オン/オフスイッチ」サンプルプロジェクトのトップレベル CMakeLists ファイルです。
   - partitions.csv: このファイルは「オン/オフスイッチ」サンプルのパーティションテーブルを定義します。
   - sdkconfig.defaults: このファイルには「オン/オフスイッチ」サンプルプロジェクトのデフォルト設定が含まれています。

これらのファイルは、ESP Zigbee SDK を使用した Zigbee デバイスの完全な実装例を提供するために連携しています。.c および .h ファイルには実際のコード実装が含まれており、CMakeLists.txt、partitions.csv、および sdkconfig.defaults ファイルはビルド構成とメモリパーティショニングに使用されます。

## Zigbee エンドデバイスと Zigbee データモデル

このチュートリアルでは、Zigbee HA On/Off Light のサンプルコードが Zigbee データモデルに基づいてどのように構成されているかを探ります。コードとデータモデルの関係を理解することで、特定の要件に応じてコードを解釈し、変更する方法についての洞察を得ることができます。

コードを詳しく見る前に、Zigbee データモデルの主要な概念を理解することが重要です：

- **ノード (Node)**: ノードは、ESP32-H2 ベースの製品および Zigbee ネットワーク内のネットワークノードを表します。1つのノードには複数のエンドポイントを持つことができます。

- **エンドポイント (Endpoint)**: エンドポイントは、1から240の間の番号で識別され、Zigbee ノード上で動作するアプリケーションを定義します。1つのノードには複数のエンドポイントがあり、それぞれが異なる目的を果たしたり、別々のデバイスを表したりします。

- **クラスター (Cluster)**: クラスターは16ビットの番号で識別され、エンドポイントに関連付けられた機能とデータを定義するアプリケーションオブジェクトです。クラスターには属性とコマンドが含まれます。

- **属性 (Attribute)**: 属性は16ビットの番号で識別され、クラスター内の現在の状態や物理量を表します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

それでは、HA On/Off Light のサンプルコードを調べ、Zigbee データモデルにどのようにマッピングされているかを見てみましょう。

1. エンドポイントの作成

サンプルコードでは、`esp_zb_on_off_light_ep_create()` 関数を使用して HA On/Off Light エンドポイントを作成します。この関数はエンドポイント ID、デバイス ID、および関連するクラスターを定義します。

```cpp
static void esp_zb_task(void *pvParameters)
{
    /* Zigbee スタックの初期化 */
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

エンドポイントを作成した後、`esp_zb_device_register()` 関数を呼び出して、作成したエンドポイントを持つ Zigbee デバイスを登録します。

```cpp
esp_zb_device_register(esp_zb_on_off_light_ep);
```

3. 属性コールバック

サンプルコードでは、`esp_zb_core_action_handler_register()` を使用して属性変更コールバックを登録します。このコールバックは特定の属性が変更されたときに呼び出され、アプリケーションロジックに基づいて属性変更を処理できます。

```cpp
esp_zb_core_action_handler_register(zb_action_handler);
```

`zb_action_handler` 関数内で、LED ライトを制御するなど、オン/オフ属性が変更されたときの動作を実装できます。

4. Zigbee スタックの構成と起動

サンプルコードでは、`ESP_ZB_ZED_CONFIG()` を使用して Zigbee エンドデバイスを構成し、`esp_zb_init()` を使用して Zigbee スタックを初期化します。その後、`esp_zb_start()` を使用してスタックを起動し、`esp_zb_main_loop_iteration()` によってメインループを処理します。

```cpp
esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
esp_zb_init(&zb_nwk_cfg);
...
ESP_ERROR_CHECK(esp_zb_start(false));
esp_zb_main_loop_iteration();
```

`esp_zb_app_signal_handler` 関数は、Zigbee アプリケーション層からのさまざまなシグナルを処理する役割を担います。

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Zigbee スタックを初期化");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "遅延ドライバ初期化 %s", deferred_driver_init() ? "失敗" : "成功");
            ESP_LOGI(TAG, "デバイスは %s 工場出荷時リセットモードで起動しました", esp_zb_bdb_is_factory_new() ? "" : "非");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "ネットワークステアリングを開始");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "デバイスが再起動しました");
            }
        } else {
            /* コミッショニング失敗 */
            ESP_LOGW(TAG, "Zigbee スタックの初期化に失敗しました (ステータス: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "ネットワークに正常に参加しました (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, チャンネル:%d, ショートアドレス: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "ネットワークステアリングが成功しませんでした (ステータス: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO シグナル: %s (0x%x), ステータス: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}
```

1. まず、この関数は渡された `esp_zb_app_signal_t` 構造体からシグナルタイプ `sig_type` とエラーステータス `err_status` を取得します。

2. 次に、switch文を使用してシグナルタイプに基づいて異なるアクションを実行します：

   - `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`: このシグナルはZigbeeスタックの起動をスキップすることを示します。この場合、Zigbeeスタックを初期化し、`esp_zb_bdb_start_top_level_commissioning` 関数を呼び出して、モードを `ESP_ZB_BDB_MODE_INITIALIZATION` に設定してトップレベルのコミッショニングプロセスを開始します。

   - `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` および `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`: これらのシグナルはデバイスの初回起動または再起動を示します。エラーステータスが `ESP_OK` の場合、遅延ドライバ初期化などの初期化タスクを実行します。その後、デバイスがファクトリーニュー状態にあるかどうかを確認します。ファクトリーニュー状態であれば、ネットワークステアリングプロセスを開始します。それ以外の場合は、デバイスが再起動したことを示すメッセージを出力します。エラーステータスが `ESP_OK` でない場合は、Zigbeeスタックの初期化に失敗したことを示すメッセージを出力します。

   - `ESP_ZB_BDB_SIGNAL_STEERING`: このシグナルはネットワークステアリングプロセスの結果を示します。エラーステータスが `ESP_OK` の場合、デバイスがネットワークに正常に参加したことを意味します。この場合、PAN ID、チャネル番号、ショートアドレスなどのネットワーク情報を出力します。エラーステータスが `ESP_OK` でない場合、ネットワークステアリングが失敗したことを意味し、エラーメッセージを出力します。その後、`esp_zb_scheduler_alarm` 関数を使用して、1秒後にネットワークステアリングプロセスを再起動するタイマーを設定します。

   - その他のシグナル: シグナル名、タイプ、エラーステータスを単に出力します。

この関数の目的は、異なるZigbeeアプリケーション層のシグナルに基づいて適切なアクションを実行することです。これはZigbeeアプリケーションの中核部分の1つであり、デバイスの起動、初期化、ネットワーク参加などの重要なプロセスを処理します。

## Zigbeeコーディネータ

Zigbeeコーディネータデバイスの場合、その初期化およびRTOSタスクはエンドデバイスと似ていますが、RTOSタスクではコールバック関数の登録ステップが少なくなります。

したがって、Zigbeeコーディネータにとって最も重要な部分は、対応するデバイスを検索して一致させ、デバイスに制御コマンドを発行することです。

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    esp_zb_zdo_signal_device_annce_params_t *dev_annce_params = NULL;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Zigbeeスタックを初期化します");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "遅延ドライバ初期化 %s", deferred_driver_init() ? "失敗" : "成功");
            ESP_LOGI(TAG, "デバイスは%sファクトリリセットモードで起動しました", esp_zb_bdb_is_factory_new() ? "" : "非");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "ネットワーク形成を開始します");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_FORMATION);
            } else {
                ESP_LOGI(TAG, "デバイスが再起動しました");
            }
        } else {
            ESP_LOGE(TAG, "Zigbeeスタックの初期化に失敗しました (ステータス: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_FORMATION:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "ネットワークを正常に形成しました (拡張PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, チャネル:%d, ショートアドレス: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
        } else {
            ESP_LOGI(TAG, "ネットワーク形成を再起動します (ステータス: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_FORMATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "ネットワークステアリングが開始されました");
        }
        break;
    case ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE:
        dev_annce_params = (esp_zb_zdo_signal_device_annce_params_t *)esp_zb_app_signal_get_params(p_sg_p);
        ESP_LOGI(TAG, "新しいデバイスがコミッショニングまたは再参加しました (ショート: 0x%04hx)", dev_annce_params->device_short_addr);
        esp_zb_zdo_match_desc_req_param_t  cmd_req;
        cmd_req.dst_nwk_addr = dev_annce_params->device_short_addr;
        cmd_req.addr_of_interest = dev_annce_params->device_short_addr;
        /* デバイスがネットワークに参加したら、カラーディマブルライトを検索します */
        esp_zb_zdo_find_color_dimmable_light(&cmd_req, user_find_cb, NULL);
        break;
    case ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS:
        if (err_status == ESP_OK) {
            if (*(uint8_t *)esp_zb_app_signal_get_params(p_sg_p)) {
                ESP_LOGI(TAG, "ネットワーク(0x%04hx)は%d秒間オープンです", esp_zb_get_pan_id(), *(uint8_t *)esp_zb_app_signal_get_params(p_sg_p));
            } else {
                ESP_LOGW(TAG, "ネットワーク(0x%04hx)は閉じられました。デバイスの参加は許可されていません。", esp_zb_get_pan_id());
            }
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDOシグナル: %s (0x%x), ステータス: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}
```

さまざまなケースとその機能について説明します：

1. `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`:
   - このシグナルは、Zigbeeスタックの初期化をスキップすることを示します。
   - Zigbeeスタックの初期化を示すメッセージをログに記録します。
   - モードを `ESP_ZB_BDB_MODE_INITIALIZATION` に設定して、トップレベルのコミッショニングプロセスを開始します。

2. `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` および `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`:
   - これらのシグナルは、デバイスが初めて起動したか、再起動したことを示します。
   - エラーステータスが `ESP_OK` の場合、遅延ドライバー初期化の状態やデバイスがファクトリーリセットモードで起動したかどうかについてのメッセージをログに記録します。
   - デバイスがファクトリーニューモードの場合、`esp_zb_bdb_start_top_level_commissioning` を呼び出して、モードを `ESP_ZB_BDB_MODE_NETWORK_FORMATION` に設定してネットワーク形成プロセスを開始します。
   - デバイスがファクトリーニューモードでない場合、デバイスが再起動したことを示すメッセージをログに記録します。
   - エラーステータスが `ESP_OK` でない場合、エラーメッセージをログに記録します。

3. `ESP_ZB_BDB_SIGNAL_FORMATION`:
   - このシグナルは、ネットワーク形成プロセスの状態を示します。
   - エラーステータスが `ESP_OK` の場合、拡張PAN IDを取得し、形成されたネットワーク（PAN ID、チャネル、ショートアドレス）に関する情報をログに記録し、`esp_zb_bdb_start_top_level_commissioning` を呼び出してモードを `ESP_ZB_BDB_MODE_NETWORK_STEERING` に設定してネットワークステアリングプロセスを開始します。
   - エラーステータスが `ESP_OK` でない場合、ネットワーク形成を再起動するメッセージをログに記録し、1000ミリ秒の遅延後に `bdb_start_top_level_commissioning_cb` を呼び出すアラームをスケジュールします。

4. `ESP_ZB_BDB_SIGNAL_STEERING`:
   - このシグナルは、ネットワークステアリングプロセスの状態を示します。
   - エラーステータスが `ESP_OK` の場合、ネットワークステアリングが開始されたことを示すメッセージをログに記録します。

5. `ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE`:
   - このシグナルは、新しいデバイスがコミッショニングされたか、ネットワークに再参加したときにトリガーされます。
   - デバイスアナウンスメントのパラメータを取得し、新しいデバイスのショートアドレスを含むメッセージをログに記録します。
   - マッチディスクリプタリクエスト（`esp_zb_zdo_match_desc_req_param_t`）を準備し、宛先と関心のあるアドレスを新しいデバイスのショートアドレスに設定します。
   - `esp_zb_zdo_find_color_dimmable_light` を呼び出してカラーディマブルライトデバイスを検索し、コールバック関数として `user_find_cb` を指定します。

6. `ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS`:
   - このシグナルは、ネットワークの参加許可状態を示します。
   - エラーステータスが `ESP_OK` の場合、ネットワークが参加可能であるかどうか、およびその期間を示すメッセージをログに記録します。ネットワークが閉じている場合、警告メッセージをログに記録します。

7. デフォルトケース:
   - 他のシグナルタイプの場合、シグナルタイプとエラーステータスを含む一般的なメッセージをログに記録します。

全体として、このコードはさまざまなZigbee関連のイベントを処理し、Zigbeeスタックの初期化、ネットワーク形成、ネットワークステアリング、デバイスアナウンスメントの処理、カラーディマブルライトデバイスの検索などのアクションを実行します。

残りの例では、キーストロークの安定化とキーストローク割り込みのロジックに関する内容が記載されています。興味があれば、自分で読んで理解してください。

## トラブルシューティング

### Q1: ESP_ZB_ON_OFF_LIGHTで問題が続いています：ネットワークステアリングが別のXIAOと一致しませんでした。

まず、使用しているESP-IDFのバージョンを確認してください。**ESP-IDF v5.1.3**を使用してZigbeeサンプルアプリケーションをコンパイルしていることを確認してください。そうでない場合は、IDFのバージョンを変更してください。

次に、デバイスを再接続してみてください。**HA_on_off_switch**プログラムをアップロードしたデバイスを最初に電源オンし、その後に**HA_on_off_light**プログラムをアップロードしたデバイスを電源オンしてみてください。

それでも動作しない場合は、すべてのフラッシュを消去してプログラムを再アップロードしてください。

```
idf.py erase_flash flash monitor
```

上記のいずれも解決しない場合は、Espressifに問題を報告してください。


### Q2: 成功したマッチング後に新しいデバイスをマッチングしたい場合はどうすればよいですか？

フラッシュコマンドアップローダーを直接使用しても、フラッシュに保存された過去のペアリング記録は消去されません。以下のコマンドを使用してプログラムを再アップロードし、新しいデバイスをマッチングしてください。

```
idf.py erase_flash flash monitor
```

## リソース

- **[Espressif公式ドキュメント]** [ESP Zigbee SDKを使用した開発](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32/developing.html)
- **[GITHUB]** [Zigbee SDKリポジトリ](https://github.com/espressif/esp-zigbee-sdk)


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>