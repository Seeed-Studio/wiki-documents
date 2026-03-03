---
description: Matterの開発フレームワークを紹介するために、ライトのコードを例として使用します。
title: Matter開発フレームワーク概要
keywords:
- matter
- XIAO
- light
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/matter_development_framework
last_update:
  date: 05/15/2024
  author: Citric
---

# Matter開発フレームワーク概要

:::tip
この記事は、Seeed Studio XIAO ESP32開発Matterシリーズの4番目のチュートリアルです。前のチュートリアルを読んでいない場合は、まず読んで、デバイスが要求通りに設定されていることを確認することをお勧めします。

- **[Espressif ESP-IDFを使用したXIAOでの開発](https://wiki.seeedstudio.com/ja/xiao_idf)**
- **[XIAO ESP32シリーズでMatterを素早く始める](https://wiki.seeedstudio.com/ja/getting_started_with_matter)**
- **[XIAO ESP32シリーズでのMatter開発](https://wiki.seeedstudio.com/ja/xiao_esp32_matter_env/)**

:::

包括的なチュートリアルでMatter開発の世界への啓発的な旅に出発しましょう。典型的なライトの例を通して、Matter開発の基盤を形成する基本概念と知識に光を当てます。クラスターと属性からコマンドまで、このチュートリアルはMatterフレームワークを自信を持ってナビゲートするためのツールを提供します。Matter開発スキルのスイッチを入れる準備をして、接続されたデバイスの素晴らしい世界に飛び込みましょう！

## チュートリアル概要

1. **[ライトの例を理解する](#understanding-the-light-example)**
2. **[デバイスの初期化](#device-initialisation)**
3. **[Matterノードの作成](#create-matter-node)**
4. **[エンドポイントの属性を設定する](#sets-the-attribute-of-the-endpoint)**
5. **[エンドポイントの作成と自動クラスターマッチング](#create-endpoint--auto-match-cluster)**
6. **[デフォルト値でMatterデバイスを初回設定する](#setting-up-the-matter-device-for-the-first-time-with-default-values)**
7. **[データ更新と遅延永続化](#data-updates-and-deferred-persistence)**

このセクションでは、ESP-Matterで提供される[light](https://github.com/espressif/esp-matter/tree/main/examples/light)の例に焦点を当て、Matter開発フレームワークにおけるクラスター、属性、コマンドの基本概念を詳しく説明します。この記事を読むことで、Matter開発フレームワークの構造と認識をより良く理解できるようになります。

## ライトの例を理解する

まず、ESP-Matter環境のファイルディレクトリとその機能を見てみましょう。

```
- esp-matter/
   - components/
      - esp_matter
      - esp_matter_bridge
      - esp_matter_console
      - esp_matter_controller
      - esp_matter_rainmaker
      - esp_matter_thread_br
   - connectedhomeip/
   - device_hal/
      - button_driver
      - device
      - led_driver
   - docs/
   - examples/
   - tools/
      - mfg_tool
   CMakeLists.txt
   RELEASE_NOTES.md
   export.sh
   install.sh
   requirements.txt
   ...
```

**esp-matter**: これはMatter開発フレームワーク全体のルートディレクトリです。

**components**: このディレクトリには様々なコンポーネントが含まれており、Matterフレームワークの中核です。

- esp_matter: これはESP32上でのMatterプロトコルスタックの実装で、データモデル、アプリケーション層ロジックなどが含まれています。
- esp_matter_bridge: このコンポーネントはESPデバイスを他の非ESPデバイスにブリッジする役割を担い、相互運用性を実現します。
- esp_matter_console: これはREPLベースのインタラクティブコンソールで、Matterデバイスのデバッグと制御に使用されます。
- esp_matter_controller: このコンポーネントはMatterコントローラーの機能を実装し、他のMatterデバイスを制御することができます。
- esp_matter_rainmaker: このコンポーネントはEspressifのRainMakerクラウドプラットフォームと統合し、クラウド制御を可能にします。
- esp_matter_thread_br: このコンポーネントはThread Border Routerの機能を実装し、Threadネットワークの作成に使用されます。

**connectedhomeip**: これはMatterプロトコルスタックの上流オープンソースプロジェクトで、ESP Matterはここからコードを同期しています。

**device_hal**: このディレクトリにはハードウェア抽象化層ドライバが含まれています。

- button_driver: ボタンドライバ。
- device: デバイス抽象化、汎用デバイスインターフェースを定義。
- led_driver: LEDドライバ。

**docs**: ここにはESP-Matter開発ドキュメントとAPIリファレンスマニュアルが保存されています。

**examples**: Matterフレームワークを使用した開発方法を示す様々なサンプルコード。

**tools**: 様々な開発ツールスクリプトが含まれています。

- mfg_tool: メーカー証明書を生成するためのツール。

**CMakeLists.txt**: CMakeビルドスクリプト、プロジェクトのコンパイル規則を定義。

**RELEASE_NOTES.md**: リリースノート、各バージョンの変更点を記録。

**export.sh**: エクスポートスクリプト、Matter関連の環境変数をエクスポートするために使用。

**install.sh**: インストールスクリプト、Matter開発に必要な依存関係とツールチェーンをインストールするために使用。

**requirements.txt**: Python依存関係リスト、Matter開発フレームワークの実行に必要なPythonライブラリを指定。

このディレクトリ構造はMatter開発フレームワークのモジュラー設計思想を反映しています。コアプロトコルスタック、ハードウェア抽象化、アプリケーションコンポーネント、補助ツールなどの各部分がそれぞれの責任を持ちながら有機的に結合され、開発者に完全なMatter開発環境を提供しています。

**examples/light**を例に取ると、ESP-Matterが提供するサンプルの構造は以下のようになります：

```
- light/
   - main/
      - CMakeLists.txt
      - app_driver.cpp
      - app_main.cpp
      - app_priv.h
      - idf_components.yml
   CMakeLists.txt
   README.md
   partitions.csv
   sdkconfig.defaults
   ...
```

- **main**: このサブディレクトリには、メインアプリケーションのコードと設定ファイルが含まれています。
  - CMakeLists.txt: メインアプリケーション用のCMakeビルドスクリプト。
  - app_driver.cpp: ライトアプリケーション用のドライバーコード。
  - app_main.cpp: ライトアプリケーションのメインエントリーポイント。
  - app_priv.h: ライトアプリケーション用のプライベート宣言を含むヘッダーファイル。
  - idf_components.yml: ライトアプリケーションで使用されるESP-IDFコンポーネント用の設定ファイル。

- **CMakeLists.txt**: ライトサンプル用のトップレベルCMakeビルドスクリプト。

- **README.md**: ライトサンプルの情報と手順を提供するreadmeファイル。

- **partitions.csv**: ライトサンプル用のパーティションテーブルを定義するファイル。

- **sdkconfig.defaults**: ライトサンプル用のデフォルト設定。

## デバイス初期化

次に、ライトのコードに入り、コード分析と理論の組み合わせを通じてMatterの開発プロセスの理解を深めます。以下のコードは[manin/app_main.cpp](https://github.com/espressif/esp-matter/blob/main/examples/light/main/app_main.cpp)にあります。

```cpp
app_driver_handle_t light_handle = app_driver_light_init();
app_driver_handle_t button_handle = app_driver_button_init();
app_reset_button_register(button_handle);
```

`app_driver_handle_t light_handle = app_driver_light_init();`: この行はライトドライバーを初期化し、ライトドライバーインスタンスへのハンドルを返します。

`app_driver_handle_t button_handle = app_driver_button_init();`: ライトの初期化と同様に、この行はボタンドライバーを初期化します。

`app_reset_button_register(button_handle);`: この行は、リセット操作を処理するための特定の機能にボタンを登録します。

`app_driver_light_init()` 関数を例に取ると、以下のプログラムはすべての電球を初期化しますが、最初の電球のみを使用します（デフォルトの色と明度値に設定）。これが、サンプルプログラムで1つの電球しか使用できない理由でもあります。

```cpp
// app_driver.cpp
app_driver_handle_t app_driver_light_init()
{
#if CONFIG_BSP_LEDS_NUM > 0
    /* Initialize led */
    led_indicator_handle_t leds[CONFIG_BSP_LEDS_NUM];
    ESP_ERROR_CHECK(bsp_led_indicator_create(leds, NULL, CONFIG_BSP_LEDS_NUM));
    led_indicator_set_hsv(leds[0], SET_HSV(DEFAULT_HUE, DEFAULT_SATURATION, DEFAULT_BRIGHTNESS));
    
    return (app_driver_handle_t)leds[0];
#else
    return NULL;
#endif
}
```

## Matter ノードの作成

Matter デバイス設定のメインラインコードの次のステップは、Matter ノードを作成することです。コードは以下の通りです：

```cpp
node::config_t node_config;

// node handle can be used to add/modify other endpoints.
node_t *node = node::create(&node_config, app_attribute_update_cb, app_identification_cb);
ABORT_APP_ON_FAILURE(node != nullptr, ESP_LOGE(TAG, "Failed to create Matter node"));
```

**Matterデータモデル**は、**Matter**エコシステム内でデータを表現し整理するための標準化された方法です。これは、デバイス、属性、および相互作用のための共通言語と構造を定義し、**Matter**対応デバイス間での相互運用性とシームレスな通信を可能にします。

以下の図は、これが**Matter**のデータモデルでどのように表現できるかの簡略化されたビューを示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/34.png" style={{width:600, height:'auto'}}/></div>

**Matterノード**：
**Matter**ノードは、**Matter**エコシステム内の物理デバイスまたは論理エンティティを表します。これは**Matter**データモデルの最上位コンポーネントです。各**Matter**ノードは一意の識別子を持ち、1つ以上のエンドポイントを含むことができます。

- **Matter**ノードは**Matter**エコシステム内の**物理デバイス**を表します。
- これは複数のエンドポイント（部屋）を含むことができる家のようなものです。
- 各**Matter**ノードは、ネットワーク内での認識とアドレス指定のための独自の一意識別子を持ちます。

## エンドポイントの属性を設定する

**Matter**ノードが作成されたら、エンドポイントのプロパティのデフォルト値を設定する必要があります。

```cpp
extended_color_light::config_t light_config;
light_config.on_off.on_off = DEFAULT_POWER;
light_config.on_off.lighting.start_up_on_off = nullptr;
light_config.level_control.current_level = DEFAULT_BRIGHTNESS;
light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;
light_config.color_control.color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;
light_config.color_control.enhanced_color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;
light_config.color_control.color_temperature.startup_color_temperature_mireds = nullptr;
```

1. `light_config.on_off.on_off = DEFAULT_POWER;`
   - エンドポイントの初期オン/オフ状態を `DEFAULT_POWER` に設定します。
   - `DEFAULT_POWER` は、デフォルトの電源状態を表す事前定義された定数です（例：オンの場合は `true`、オフの場合は `false`）。

2. `light_config.on_off.lighting.start_up_on_off = nullptr;`
   - エンドポイントの起動時オン/オフ状態を `nullptr` に設定します。
   - デバイスが再起動または電源サイクルした際、この値が `nullptr` の場合、最後のオン/オフ状態を使用することを意味します。
   - `nullptr` 以外の値に設定された場合、指定されたオン/オフ状態を使用することを示します。

3. `light_config.level_control.current_level = DEFAULT_BRIGHTNESS;`
   - エンドポイントの初期明度レベルを `DEFAULT_BRIGHTNESS`（64）に設定します。
   - `DEFAULT_BRIGHTNESS` は、デフォルトの明度レベルを表す事前定義された定数です（例：0から254の間の値）。

4. `light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;`
   - エンドポイントの起動時明度レベルを `DEFAULT_BRIGHTNESS`（64）に設定します。
   - デバイスが再起動または電源サイクルした際、この値が `nullptr` 以外の場合、指定された明度レベルを使用することを意味します。
   - `nullptr` に設定された場合、最後の明度レベルを使用することを示します。

5. `light_config.color_control.color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - エンドポイントのカラーモードを `ColorControl::ColorMode::kColorTemperature` に設定します。
   - これは、エンドポイントが色温度モードを使用することを意味し、ライトの色は色温度を調整することで制御されます。
   - `(uint8_t)` は、enum値を符号なし8ビット整数に変換する型キャストです。

6. `light_config.color_control.enhanced_color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - エンドポイントの拡張カラーモードを `ColorControl::ColorMode::kColorTemperature` に設定します。
   - 拡張カラーモードはより多くの色制御オプションを提供しますが、ここでも色温度モードに設定されています。

7. `light_config.color_control.color_temperature.startup_color_temperature_mireds = nullptr;`
   - エンドポイントの起動時色温度を `nullptr` に設定します。
   - デバイスが再起動または電源サイクルした際、この値が `nullptr` の場合、最後の色温度設定を使用することを意味します。
   - `nullptr` 以外の値に設定された場合、指定された色温度値を使用することを示します。

Matter における属性は、デバイスのプロパティや特性のようなものです。これらは、オン/オフ状態、明度レベル、色温度など、デバイスの状態に関する情報を格納します。これらの属性は、デバイスの特定の機能に関連するクラスターと呼ばれるグループに整理されています。

属性により、異なるデバイスやアプリが通信し、シームレスに連携することが容易になります。デバイスのプロパティを表現し、アクセスする標準的な方法を持つことで、Matter はスマートホームシステムの開発を簡素化し、さまざまなブランドのデバイスが効率的に相互作用できることを保証します。

`esp_matter_endpoint.h` は、ESP Matter SDK の重要なヘッダーファイルで、エンドポイントに関連する定数、データ型、関数を定義しています。Matter において、エンドポイントはデバイスの論理インターフェースを表し、各エンドポイントには、デバイスの特定の機能を記述し制御する属性とコマンドのセットが含まれています。

```cpp
namespace extended_color_light {
typedef struct config {
    cluster::descriptor::config_t descriptor;
    cluster::identify::config_t identify;
    cluster::groups::config_t groups;
    cluster::scenes_management::config_t scenes_management;
    cluster::on_off::config_t on_off;
    cluster::level_control::config_t level_control;
    cluster::color_control::config_t color_control;
} config_t;

uint32_t get_device_type_id();
uint8_t get_device_type_version();
endpoint_t *create(node_t *node, config_t *config, uint8_t flags, void *priv_data);
esp_err_t add(endpoint_t *endpoint, config_t *config);
} /* extended_color_light */
```

## エンドポイントの作成と自動クラスターマッチング

上記で、Matterにおいて重要な2つの用語、エンドポイントとクラスターについて最初に言及しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/35.png" style={{width:500, height:'auto'}}/></div>

**エンドポイント [デバイスタイプ]**:
エンドポイントは、Matterノード内の特定の機能やサービスの論理的な表現です。特定のデバイスタイプに関連する一連の機能と動作をカプセル化します。Matterノードは複数のエンドポイントを持つことができ、それぞれが異なるデバイスタイプを表します。デバイスタイプは、エンドポイントの特定の特性と機能を定義します。Matterは、電球、サーモスタット、ドアロックなどの標準デバイスタイプのセットを定義しています。各デバイスタイプには、固有の識別子と、それに関連付けられた事前定義されたクラスター、属性、コマンドのセットがあります。

- エンドポイントはMatterノード内の論理コンポーネントで、デバイスの特定の機能やサービスを表します。
- 家の部屋のように、各エンドポイントには寝室、キッチン、リビングルームなど、それぞれ専用の目的があります。
- 各エンドポイントは、電球、サーモスタット、ドアロックなどの特定のデバイスタイプに関連付けられています。
- Matterノードは複数のエンドポイントを持つことができ、それぞれが異なるデバイスタイプと機能を表します。

**クラスター**:
クラスターは、エンドポイント内の関連する属性とコマンドの論理的なグループ化です。デバイスの特定の機能や特徴を表します。クラスターは、エンドポイントの機能を整理し、分類する方法を提供します。例えば、「オン/オフクラスター」には、デバイスのオン/オフに関連する属性とコマンドが含まれ、「レベル制御クラスター」は、デバイスの明るさやレベルの制御を扱います。

- クラスターは、エンドポイント内の論理的なグループ化で、関連する属性とコマンドを含みます。
- 部屋の中の家具やデバイス、例えば照明、テレビ、エアコンのようなもので、それぞれが独自の属性と操作を持ちます。
- 各クラスターは、デバイスの特定の機能や特徴を表します。
- 例えば、「オン/オフクラスター」には、デバイスのオン/オフ状態に関連する属性とコマンドが含まれ、「レベル制御クラスター」には、デバイスの明るさやレベルを調整するための属性とコマンドが含まれます。
- エンドポイントは複数のクラスターを持つことができ、それぞれが異なる機能を担当します。

要約すると、Matterノードは家のようなもので、複数のエンドポイント（部屋）を含みます。各エンドポイントは部屋のようなもので、デバイスの特定の機能やサービスを表します。クラスターは各部屋の家具やデバイスのようなもので、制御と相互作用のための関連する属性とコマンドを含みます。

この階層的な組織化により、デバイスは自身の機能と特性を明確に記述でき、アプリケーションや他のデバイスがそれらと相互作用し、制御することが容易になります。デバイスタイプ、クラスター、属性、コマンドを標準化することで、Matterは異なるメーカーのデバイス間の相互運用性と互換性を可能にします。

コードでは、属性を設定した後、最終的に以下のスニペットによってエンドポイントが作成されます。そして、設定された属性のクラスターを自動的にマッチングします。

```cpp
endpoint_t *endpoint = extended_color_light::create(node, &light_config, ENDPOINT_FLAG_NONE, light_handle);
ABORT_APP_ON_FAILURE(endpoint != nullptr, ESP_LOGE(TAG, "Failed to create extended color light endpoint"));
```

自動マッチングクラスタリングはどのように実現されるのでしょうか？属性を設定するコードスニペットの例を見てみましょう。

```cpp
light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;
```

`light_config.level_control` は Endpoint (esp_matter_endpoint.h) で定義された Attribute です。そして `light_config.level_control.lighting` は Cluster (esp_matter_cluster) で定義された Attribute です。この設定により、システムは開発者が手動で設定する必要なく、Attribute に対応する Cluster を自動的にマッチングできます。

## デフォルト値で Matter デバイスを初回設定する

上記の Attributes、Clusters、Endpoints が設定されたら、Matter アプライアンスの起動を開始できます。起動の手順と方法は以下の通りです。

```cpp
light_endpoint_id = endpoint::get_id(endpoint);
ESP_LOGI(TAG, "Light created with endpoint_id %d", light_endpoint_id);

/* Matter start */
err = esp_matter::start(app_event_cb);
ABORT_APP_ON_FAILURE(err == ESP_OK, ESP_LOGE(TAG, "Failed to start Matter, err:%d", err));

/* Starting driver with default values 使用默认值启动驱动程序 */
app_driver_light_set_defaults(light_endpoint_id);
```

ご覧のとおり、デフォルトを設定する関数は `app_driver_light_set_defaults()` で、パラメータとしてエンドポイントIDを渡す必要があります。そして、特定のクラスター、特定の属性の値を取得する方法、およびデフォルトのクラスター、属性値を設定する方法について考慮する必要があります。その秘密は `app_driver.cpp` に示されています。

```cpp
esp_err_t err = ESP_OK;
void *priv_data = endpoint::get_priv_data(endpoint_id);
led_indicator_handle_t handle = (led_indicator_handle_t)priv_data;
node_t *node = node::get();
endpoint_t *endpoint = endpoint::get(node, endpoint_id);
cluster_t *cluster = NULL;
attribute_t *attribute = NULL;
esp_matter_attr_val_t val = esp_matter_invalid(NULL);

/* Setting brightness */
cluster = cluster::get(endpoint, LevelControl::Id);
attribute = attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::get_val(attribute, &val);
err |= app_driver_light_set_brightness(handle, &val);
```

1. クラスターの取得：
   - クラスターを取得するには、まず `endpoint::get(node, endpoint_id)` 関数を使用してエンドポイントへのポインターを取得する必要があります。ここで `node` はノードへのポインター、`endpoint_id` はエンドポイントのIDです。
   - エンドポイントポインターを取得したら、`cluster::get(endpoint, LevelControl::Id)` 関数を使用して、エンドポイントとクラスターID（この場合は `LevelControl::Id`）を指定して、目的のクラスターへのポインターを取得できます。

2. 特定の属性の取得：
   - クラスターポインターを取得した後、`attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)` 関数を使用して、そのクラスター内の特定の属性へのポインターを取得できます。
   - この例では、`LevelControl` クラスターから `CurrentLevel` 属性を取得しています。

3. 属性の値の取得：
   - 属性の現在の値を取得するには、属性値を格納するための `esp_matter_attr_val_t` 型の変数を宣言する必要があります。
   - コードスニペットでは、変数 `val` が `esp_matter_invalid(NULL)` で初期化されています。
   - その後、`attribute::get_val(attribute, &val)` 関数を使用して属性の現在の値を取得し、`val` 変数に格納できます。

4. ライトの明度の設定：
   - ライトの明度を設定するには、エンドポイントに関連付けられたLEDインジケーターへのハンドルが必要です。
   - コードスニペットでは、プライベートデータポインター（`priv_data`）を適切な型（`led_indicator_handle_t`）にキャストすることで、LEDインジケーターハンドルを取得しています。
   - 最後に、`app_driver_light_set_brightness(handle, &val)` 関数を呼び出してLEDインジケーターの明度を設定できます。
   - `handle` パラメーターはLEDインジケーターハンドル、`&val` は目的の明度値を含む `esp_matter_attr_val_t` 変数へのポインターです。

手順の要約：

1. `endpoint::get(node, endpoint_id)` を使用してエンドポイントポインターを取得する。
2. `cluster::get(endpoint, LevelControl::Id)` を使用してクラスターポインターを取得する。
3. `attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)` を使用して属性ポインターを取得する。
4. `attribute::get_val(attribute, &val)` を使用して属性の現在の値を取得する。
5. `app_driver_light_set_brightness(handle, &val)` を使用してライトの明度を設定する。ここで `handle` はエンドポイントに関連付けられたLEDインジケーターハンドルです。

これらの手順に従うことで、クラスターと属性への必要なポインターを取得し、属性の現在の値を取得し、それに応じてライトの明度を設定できます。

## データ更新と遅延永続化

`app_driver.cpp` のコードでは、`app_driver_attribute_update()` 関数を使用して属性の値が更新されます。

```cpp
if (endpoint_id == light_endpoint_id) {
   led_indicator_handle_t handle = (led_indicator_handle_t)driver_handle;
   if (cluster_id == OnOff::Id) {
      if (attribute_id == OnOff::Attributes::OnOff::Id) {
            err = app_driver_light_set_power(handle, val);
      }
   } else if (cluster_id == LevelControl::Id) {
      if (attribute_id == LevelControl::Attributes::CurrentLevel::Id) {
            err = app_driver_light_set_brightness(handle, val);
      }
   } else if (cluster_id == ColorControl::Id) {
      if (attribute_id == ColorControl::Attributes::CurrentHue::Id) {
            err = app_driver_light_set_hue(handle, val);
      } else if (attribute_id == ColorControl::Attributes::CurrentSaturation::Id) {
            err = app_driver_light_set_saturation(handle, val);
      } else if (attribute_id == ColorControl::Attributes::ColorTemperatureMireds::Id) {
            err = app_driver_light_set_temperature(handle, val);
      }
   }
}
```

このコードスニペットは、複数のパラメータを受け取る `app_driver_attribute_update` という名前の関数を定義しています。パラメータには、ドライバハンドル（`driver_handle`）、エンドポイントID（`endpoint_id`）、クラスタID（`cluster_id`）、属性ID（`attribute_id`）、および属性値へのポインタ（`val`）が含まれます。

この関数の目的は、受信したデータに基づいてライトエンドポイントの属性値を更新することです。ライトエンドポイントのどの属性を更新する必要があるかを決定するために、特定のロジックに従います。

データ更新ロジックの段階的な詳細は以下の通りです：

1. 関数は最初に `endpoint_id` が `light_endpoint_id` と一致するかどうかをチェックします。これにより、更新がライトエンドポイント向けであることを確認します。

2. `endpoint_id` が一致する場合、関数は `driver_handle` を適切な型（`led_indicator_handle_t`）にキャストして、ライトエンドポイントに関連付けられたLEDインジケータのハンドルを取得します。

3. 次に、関数は `cluster_id` をチェックして、属性がどのクラスタに属するかを決定します。3つのクラスタをサポートしています：`OnOff`、`LevelControl`、および `ColorControl`。

4. `cluster_id` に応じて、関数はさらに `attribute_id` をチェックして、そのクラスタ内の特定の属性を識別します。

5. `cluster_id` と `attribute_id` に基づいて、関数は対応するセッター関数を呼び出して属性値を更新します：
   - `cluster_id` が `OnOff::Id` で `attribute_id` が `OnOff::Attributes::OnOff::Id` の場合、`app_driver_light_set_power(handle, val)` を呼び出してライトの電源状態を設定します。
   - `cluster_id` が `LevelControl::Id` で `attribute_id` が `LevelControl::Attributes::CurrentLevel::Id` の場合、`app_driver_light_set_brightness(handle, val)` を呼び出してライトの明度レベルを設定します。
   - `cluster_id` が `ColorControl::Id` の場合、`attribute_id` をさらにチェックします：
     - `attribute_id` が `ColorControl::Attributes::CurrentHue::Id` の場合、`app_driver_light_set_hue(handle, val)` を呼び出してライトの色相を設定します。
     - `attribute_id` が `ColorControl::Attributes::CurrentSaturation::Id` の場合、`app_driver_light_set_saturation(handle, val)` を呼び出してライトの彩度を設定します。
     - `attribute_id` が `ColorControl::Attributes::ColorTemperatureMireds::Id` の場合、`app_driver_light_set_temperature(handle, val)` を呼び出してライトの色温度を設定します。

全体的に、この関数はライトエンドポイントの属性値を更新するための中心的なポイントとして機能します。必要な情報（エンドポイントID、クラスタID、属性ID、および属性値）を受け取り、クラスタIDと属性IDに基づいて適切なセッター関数に更新を振り分けます。

このようにロジックを整理することで、コードはよりモジュラーになり、保守しやすくなります。単一の関数を通じてライトエンドポイントの異なる属性（電源状態、明度、色相、彩度、色温度）を更新できるようになり、受信したデータに基づいてライトの特性を更新するプロセスが簡素化されます。

ただし、すべての属性がリアルタイムで更新されるわけではありません。頻繁に変更される可能性のある属性を遅延永続化としてマークするコードは、パフォーマンスを向上させ、不揮発性メモリへの書き込み回数を減らし、デバイスの寿命を延ばすことができます。

```cpp
/* Mark deferred persistence for some attributes that might be changed rapidly */
cluster_t *level_control_cluster = cluster::get(endpoint, LevelControl::Id);
attribute_t *current_level_attribute = attribute::get(level_control_cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::set_deferred_persistence(current_level_attribute);

cluster_t *color_control_cluster = cluster::get(endpoint, ColorControl::Id);
attribute_t *current_x_attribute = attribute::get(color_control_cluster, ColorControl::Attributes::CurrentX::Id);
attribute::set_deferred_persistence(current_x_attribute);
```

## 独自のデータモデルの定義

このセクションでは、Matter仕様で定義されている標準的なエンドポイント、クラスター、属性、およびコマンドの作成方法を説明します。

#### エンドポイント

デバイスは、サンプルの*app_main.cpp*でエンドポイント/デバイスタイプの作成を編集することでカスタマイズできます。例：

- on_off_light:

```cpp
   on_off_light::config_t light_config;
   endpoint_t *endpoint = on_off_light::create(node, &light_config, ENDPOINT_FLAG_NONE);
```

- 温度センサー:

```cpp
    esp_matter::endpoint::temperature_sensor::config_t temperature_sensor_config;
    endpoint_t *endpoint = temperature_sensor::create(node, &temperature_sensor_config, ENDPOINT_FLAG_NONE, NULL);
```

- ファン:

```cpp
   fan::config_t fan_config;
   endpoint_t *endpoint = fan::create(node, &fan_config, ENDPOINT_FLAG_NONE);
```

- ドアロック:

```cpp
   door_lock::config_t door_lock_config;
   endpoint_t *endpoint = door_lock::create(node, &door_lock_config, ENDPOINT_FLAG_NONE);
```

- window_covering_device:

```cpp
   window_covering_device::config_t window_covering_device_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   endpoint_t *endpoint = window_covering_device::create(node, &window_covering_config, ENDPOINT_FLAG_NONE);
```

   ``window_covering_device`` ``config_t`` 構造体には、デフォルトの「ローラーシェード」とは異なるエンドプロダクトタイプを指定できるコンストラクタが含まれています。
   ``config_t`` インスタンスがインスタンス化されると、そのエンドプロダクトタイプは変更できません。

- pump

```cpp
   pump::config_t pump_config(1, 10, 20);
   endpoint_t *endpoint = pump::create(node, &pump_config, ENDPOINT_FLAG_NONE);
```

   ``pump`` ``config_t`` 構造体には、最大圧力、最大速度、最大流量の値を指定できるコンストラクタが含まれています。これらが設定されていない場合、デフォルトでnullに設定されます。
   ``config_t`` インスタンスがインスタンス化されると、これら3つの値は変更できません。

### クラスター

エンドポイントには追加のクラスターも追加できます。例：

- on_off:

```cpp
   on_off::config_t on_off_config;
   cluster_t *cluster = on_off::create(endpoint, &on_off_config, CLUSTER_FLAG_SERVER, on_off::feature::lighting::get_id());
```

- temperature_measurement:

```cpp
   temperature_measurement::config_t temperature_measurement_config;
   cluster_t *cluster = temperature_measurement::create(endpoint, &temperature_measurement_config, CLUSTER_FLAG_SERVER);
```

- window_covering:

```cpp
   window_covering::config_t window_covering_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   cluster_t *cluster = window_covering::create(endpoint, &window_covering_config, CLUSTER_FLAG_SERVER);
```

   ``window_covering`` ``config_t`` 構造体には、デフォルトの「ローラーシェード」とは異なるエンドプロダクトタイプを指定できるコンストラクタが含まれています。
   ``config_t`` インスタンスがインスタンス化されると、そのエンドプロダクトタイプは変更できません。

- pump_configuration_and_control:

```cpp
   pump_configuration_and_control::config_t pump_configuration_and_control_config(1, 10, 20);
   cluster_t *cluster = pump_configuration_and_control::create(endpoint, &pump_configuration_and_control_config, CLUSTER_FLAG_SERVER);
```

   ``pump_configuration_and_control`` ``config_t`` 構造体には、最大圧力、最大速度、最大流量の値を指定できるコンストラクタが含まれています。これらが設定されていない場合、デフォルトでnullに設定されます。
   ``config_t`` インスタンスがインスタンス化されると、これら3つの値は変更できません。

### 属性とコマンド

追加の属性とコマンドもクラスターに追加できます。
例：

- attribute: on_off:

```cpp
   bool default_on_off = true;
   attribute_t *attribute = on_off::attribute::create_on_off(cluster, default_on_off);
```

- 属性: cluster_revision:

```cpp
   uint16_t default_cluster_revision = 1;
   attribute_t *attribute = global::attribute::create_cluster_revision(cluster, default_cluster_revision);
```

- コマンド: toggle:

```cpp
   command_t *command = on_off::command::create_toggle(cluster);
```

- command: move_to_level:

```cpp
   command_t *command = level_control::command::create_move_to_level(cluster);
```

### 機能

クラスターに適用可能なオプション機能も追加できます。

- feature: taglist: Descriptor cluster:

```cpp
   cluster_t* cluster = cluster::get(endpoint, Descriptor::Id);
   descriptor::feature::taglist::add(cluster);
```

### カスタムデータモデルフィールドの追加

このセクションでは、Matter仕様で定義されておらず、ベンダー固有のカスタムエンドポイント、クラスター、属性、およびコマンドの作成方法を説明します。

#### エンドポイント

非標準エンドポイントは、クラスターなしで作成できます。

- エンドポイント作成：

```cpp
   endpoint_t *endpoint = endpoint::create(node, ENDPOINT_FLAG_NONE);
```

#### クラスター

非標準/カスタムクラスターも作成できます：

- クラスター作成：

```cpp
   uint32_t custom_cluster_id = 0x131bfc00;
   cluster_t *cluster = cluster::create(endpoint, custom_cluster_id, CLUSTER_FLAG_SERVER);
```

#### 属性とコマンド

非標準/カスタム属性は任意のクラスターに作成することもできます：

- 属性の作成：

```cpp
   uint32_t custom_attribute_id = 0x0;
   uint16_t default_value = 100;
   attribute_t *attribute = attribute::create(cluster, custom_attribute_id, ATTRIBUTE_FLAG_NONE, esp_matter_uint16(default_value);
```

- コマンド作成:

```cpp
   static esp_err_t command_callback(const ConcreteCommandPath &command_path, TLVReader &tlv_data, void
   *opaque_ptr)
   {
      ESP_LOGI(TAG, "Custom command callback");
      return ESP_OK;
   }

   uint32_t custom_command_id = 0x0;
   command_t *command = command::create(cluster, custom_command_id, COMMAND_FLAG_ACCEPTED, command_callback);
```

Matter データモデルは、これらのコンポーネントを階層的に整理します。Matter ノードには1つ以上のエンドポイントが含まれ、それぞれが特定のデバイスタイプを表します。各エンドポイントは複数のクラスターで構成され、関連する属性とコマンドをグループ化します。属性はクラスターの状態と設定を保存し、コマンドはデバイスとの相互作用と制御に使用されます。

このようにデータモデルを構造化することで、Matter は異なるメーカーのデバイス間での相互運用性と標準化を可能にします。開発者は定義されたデバイスタイプ、クラスター、属性、コマンドを使用して、Matter 対応デバイスをシームレスに制御し、通信できるアプリケーションを作成できます。

Matter データモデルは、デバイスがその機能を記述し、相互に相互作用するための共通言語とフレームワークを提供し、より統一された一貫性のあるスマートホーム体験を可能にします。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
