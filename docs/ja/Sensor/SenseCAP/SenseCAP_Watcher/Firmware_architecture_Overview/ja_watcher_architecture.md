---
description: SenseCAP Watcher ソフトウェアフレームワークの紹介。
title: Watcher ソフトウェアフレームワーク
image: https://files.seeedstudio.com/wiki/watcher_software_framework/architecture_1.webp
slug: /ja/watcher_software_framework
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher ソフトウェアアーキテクチャ

SenseCAP Watcher のソフトウェアアーキテクチャは以下の図に示されており、主に3つの部分に分かれています：APP アプリケーション、UI とインタラクション、タスクフロー。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/architecture.png" style={{width:800, height:'auto'}}/></div>

- **APP アプリケーション**: 主に WiFi 接続、Bluetooth 設定、プラットフォームとの通信、OTA などのアプリケーションで、UI 表示用のデータも生成します。
- **UI とインタラクション**: 主に UI インターフェースと UI インタラクションの実装。
- **タスクフロー**: 主にタスクフローエンジンと各種タスクフロー機能モジュールの実装。

## 1. タスクフローフレームワーク

### 1.1 概要

さまざまなシナリオのニーズを満たすために、Node-RED に似たタスクフローフレームワークが設計されました。これにより、デバイスが持つスキルを柔軟に組み合わせて連携させることができます。

デバイスが持つスキルをブロックとして抽象化し、それらをデータの生成者または消費者、あるいはその両方として扱います。そして、特定のタスクに応じて必要なブロックを抽出し、生成者-消費者の関係で接続することで、特定のシナリオタスクを実現します。

### 1.2 タスクフローエンジン

タスクフローエンジンの主な機能は、タスクフロー JSON に従って各機能モジュールを動作させることです。これには、機能モジュールの登録、インスタンス化、破棄、およびそれらの接続の管理が含まれます。

タスクフローエンジンの処理フローは以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/taskflow_engine.png" style={{width:300, height:'auto'}}/></div>

1. タスクフローエンジンを初期化します。
2. 各機能モジュールをタスクフローエンジンに登録し、各モジュールの管理機能と情報をリンクリストに格納します。
3. タスクフローエンジンはタスクフローを受信するのを待ちます。
4. 新しいタスクフローを受信すると、タスクフロー JSON を解析し、必要な機能モジュールを抽出して配列に格納します。
5. 機能モジュール配列内で、モジュール名に基づいてリンクリストからモジュールの管理機能を見つけ、ソートします。
6. 機能モジュールをインスタンス化します。
7. 機能モジュールを設定します。
8. メッセージ伝送のために機能モジュール間のイベントパイプラインを確立します。
9. 各機能モジュールを順次起動します。
10. 起動後、タスクフローが実行されます。

### 1.3 タスクフロー JSON

タスクフローは JSON 形式で記述されており、タスクフローエンジンはこの JSON ファイルを解析してタスクフローを実行します。

以下はタスクフロー JSON のテンプレートです：

```json
{
    "tlid": 123456789,
    "ctd": 123456789,
    "tn": "タスクフローテンプレート",
    "type": 0,
    "task_flow": [
        {
            "id": 1,
            "type": "module1",
            "index": 0,
            "version": "1.0.0",
            "params": {
            },
            "wires": [
                [
                    2
                ]
            ]
        },
        {
            "id": 2,
            "type": "module2",
            "index": 1,
            "version": "1.0.0",
            "params": {
            },
            "wires": [
                [
                    3,
                    4
                ]
            ]
        },
        {
            "id": 3,
            "type": "module3",
            "index": 2,
            "version": "1.0.0",
            "params": {
            },
            "wires": []
        },
        {
            "id": 4,
            "type": "module4",
            "index": 3,
            "version": "1.0.0",
            "params": {
            },
            "wires": []
        }
    ]
}
```

フィールドの説明：

- **ctd**: タスクフローの作成時間。
- **tlid**: タスクフロー ID。ctd と同じ値にすることができます。
- **tn**: タスクフローの名前。
- **type:** タスクフローの種類
  - **0**: ローカルのサンプルタスクフロー。
  - **1**: MQTT 経由で発行されたタスクフロー。
  - **2**: Bluetooth 経由で発行されたタスクフロー。
  - **3**: 音声経由で発行されたタスクフロー。
- **task_flow：** タスクフロー内の各機能モジュールの詳細情報を含みます。
  - **id**: モジュール ID。
  - **type**: モジュール名。
  - **index**: タスクフロー内のモジュールの順序。フロー内での位置が早いほど値が小さく、モジュールのソートに使用されます。
  - **version**: モジュールのバージョン。
  - **params**: モジュールのパラメータ。異なるバージョンでは異なるパラメータ構成がある可能性があり、バージョン番号に基づいて互換的に解析できます。
  - **wires**: モジュール間の接続。詳細は **タスクフロー機能モジュールのイベントパイプライン** を参照してください。

以下は火災監視用のタスクフロー JSON の例です。

```json
{
    "tlid": 1720171506807,
    "ctd": 1720171527631,
    "tn": "アプリが火災緊急事態を通知",
    "task_flow": [
        {
            "id": 86464178,
            "type": "ai camera",
            "type_id": 0,
            "index": 0,
            "vision": "0.0.1",
            "params": {
                "model_type": 0,
                "model": {},
                "modes": 1,
                "conditions": [],
                "conditions_combo": 0,
                "silent_period": {
                    "time_period": {
                        "repeat": [
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1
                        ],
                        "time_start": "00:00:00",
                        "time_end": "23:59:59"
                    },
                    "silence_duration": 60
                },
                "output_type": 1,
                "shutter": 0
            },
            "wires": [
                [
                    540820974
                ]
            ]
        },
        {
            "id": 540820974,
            "type": "image analyzer",
            "type_id": 3,
            "index": 1,
            "version": "0.0.1",
            "params": {
                "url": "",
                "header": "",
                "body": {
                    "prompt": "火災が発生していますか？",
                    "type": 1,
                    "audio_txt": "火災警報"
                }
            },
            "wires": [
                [
                    1516408094,
                    1981533581
                ]
            ]
        },
        {
            "id": 1981533581,
            "type_id": 99,
            "type": "sensecraft alarm",
            "index": 2,
            "version": "0.0.1",
            "params": {
                "silence_duration": 10,
                "text": "火災警報"
            },
            "wires": []
        },
        {
            "id": 1516408094,
            "type_id": 5,
            "type": "local alarm",
            "index": 3,
            "version": "0.0.1",
            "params": {
                "sound": 1,
                "rgb": 1,
                "img": 1,
                "text": 1,
                "duration": 10
            },
            "wires": []
        }
    ],
    "type": 0
}
```

このタスクフローでは、4つのブロック（AIカメラ、画像解析器、ローカルアラーム、Sensecraftアラーム）を使用します。配線トポロジーは以下の図に示されています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

以下の図は、タスクフローエンジンの一般的な流れと機能モジュールの起動を示しています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

### 1.4 モジュールのイベントパイプライン

機能モジュール間の接続はデータ伝送を表し、前のモジュールがデータを生成して次のモジュールに送信します。メッセージ伝送はイベントメカニズムを使用し、前者がイベントを公開し、後者がイベントを購読します。イベントはIDFの`esp_event`コンポーネントを使用して実装され、キューキャッシュをサポートします。

各モジュールには一意のIDがあり、モジュールが購読するイベントIDとして機能します。`sub_set`実行中に、そのモジュールはそのIDを持つメッセージを購読し、停止実行中にはそのイベントIDの登録を解除します。一部のモジュールは励起源として機能し、上流モジュールを持たず、そのイベントIDを購読せずに動作することができます。

各モジュールには次のモジュールのIDを示す`wires`フィールドがあります。`pub_set`を実行するとき、これらのIDがキャッシュされ、データが利用可能になるとこれらのIDにデータが公開されます。一部のモジュールには空の`wires`フィールドがあり、下流モジュールがなく、データを消費するだけで生成しません。

各モジュールは最大1つの入力端子を持つことができますが、複数の出力端子を持つことができ、異なるデータ出力を示します。各出力端子は複数のブロックに出力することができます。`wires`フィールドは2次元配列であり、最初の層は出力端子の数を表し、2番目の層は端子が出力するモジュールのIDを表します。

以下の例に示すように、モジュール1はイベントID 2でメッセージを公開し、モジュール2がそのメッセージを受信して処理します。モジュール2には2つの出力端子があり、最初の出力端子はモジュール3と4に接続され、2番目の出力端子はモジュール5に接続されています。出力端子1にデータがある場合、イベントID 3と4にメッセージを公開し、出力端子2にデータがある場合、イベントID 5にメッセージを公開します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection2.png" style={{width:600, height:'auto'}}/></div>

モジュール2に対応するJSON記述は以下の通りです：

```json
{
    "id": 2,
    "type": "module name",
    "index": 1,
    "version": "1.0.0",
    "params": {
    },
    "wires": [
        [
            3,
            4
        ],
        [
            5
        ]
    ]
}
```

関連する操作関数は**tf.h**で定義されており（主にIDFの`esp_event`関連関数をカプセル化）、以下の通りです：

```cpp
esp_err_t tf_event_post(int32_t event_id,
                        const void *event_data,
                        size_t event_data_size,
                        TickType_t ticks_to_wait);

esp_err_t tf_event_handler_register(int32_t event_id,
                                    esp_event_handler_t event_handler,
                                    void *event_handler_arg);

esp_err_t tf_event_handler_unregister(int32_t event_id,
                                      esp_event_handler_t event_handler);
```

#### 1.4.1 イベントパイプラインで伝送されるメッセージタイプ

2つのモジュールが接続される場合、それらのデータタイプが一致していることを示します。データタイプと対応するデータ構造は[tf\_module\_data\_type.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_data_type.h)ファイルで定義されています。一般的に、データタイプは**TF\_DATA\_TYPE\_**のプレフィックスで定義され、データ構造は**tf\_data\_**のプレフィックスで定義されます。

例えば、タイプ列挙構造で**TF\_DATA\_TYPE\_BUFFER**タイプを定義し、対応する構造は以下の通りです。最初のフィールド`type`はデータタイプを示し、残りのフィールドは伝送されるデータを示します。

```cpp
typedef struct {
    uint8_t  type;
    struct tf_data_buf data;
} tf_data_buffer_t;
```

モジュールがイベントデータを受信すると、まずイベントデータの最初のバイトを抽出してデータタイプを取得し、そのデータが必要なものであるかを判断します。必要な場合はさらに処理し、そうでない場合は破棄します。

現在利用可能なデータタイプは以下の通りです：

<table>
  <thead>
    <tr>
      <th>データタイプ</th>
      <th>データ構造</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TF_DATA_TYPE_TIME</td>
      <td>tf_data_time_t</td>
      <td>タイムスタンプ</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_BUFFER</td>
      <td>tf_data_buffer_t</td>
      <td>バッファ</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>tf_data_dualimage_with_inference_t</td>
      <td>大画像、小画像、推論情報を含む</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>tf_data_dualimage_with_audio_text_t</td>
      <td>大画像、小画像、アラーム音声、アラームテキストを含む</td>
    </tr>
  </tbody>
</table>

- 大画像：640 x 480のjpeg形式画像をhimaxから取得し、base64エンコードで保存。

- 小画像：416 x 416のjpeg形式画像をhimaxから取得し、base64エンコードで保存。

- 推論情報：himaxから取得した推論結果で、ボックス座標の配列、クラス分類情報、またはポイント座標情報、さらにクラス名情報を含む。

- 音声：トリガーブロックから取得したデータで、.mp3形式。

#### 1.4.2 イベントパイプラインでの効率的な伝送

`idf` の `esp_event` コンポーネントを使用してメッセージを送信する場合、エンキュー時にメモリコピーが発生します（詳細は `esp_event` のソースコードを参照してください）。これは、画像や音声などの大容量データを送信する際には非常に非効率的です。

そのため、ポインタのみを送信する効率的な送信方法を採用します。例えば、**TF\_DATA\_TYPE\_BUFFER** 型では、送信するデータは以下のように定義されます。最初のフィールド `p_buf` はデータバッファの開始アドレスを示し、2番目のフィールド `len` はデータの長さを示します。

```cpp
struct tf_data_buf
{
    uint8_t *p_buf;
    uint32_t len;
};
```

データ生成モジュールは `p_buf` のメモリ割り当てを担当し、次のレベルのデータ消費モジュールは使用後にメモリを解放する責任を負います。
いくつかの一般的なデータコピーおよび解放関数は、[tf\_module\_util.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_util.h) ファイルに定義されています。例えば、受信したイベントデータ型が必要な型でない場合、**tf\_data\_free()** 関数を直接呼び出してメモリを解放できます（この関数はすべてのデータ型の解放を実装しています）。以下に例を示します：

```cpp
static void __event_handler(void *handler_args, esp_event_base_t base, int32_t id, void *p_event_data)
{
    uint32_t type = ((uint32_t *)p_event_data)[0];
    if( type !=  TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE ) {
        ESP_LOGW(TAG, "Unsupport type %d", type);
        tf_data_free(p_event_data);
        return;
    }
    //...
}
```

### 1.5 モジュールの基底クラス

モジュールの基底クラスは [tf\_module.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_engine/include/tf_module.h) に定義されています。タスクフローエンジンはモデルの具体的な実装には関与せず、モジュールの関連インターフェースを呼び出すだけで操作を行います。各具体的なモジュールは、操作関数と管理関数を実装するだけで済みます。

```cpp
struct tf_module_ops
{
    int (*start)(void *p_module);
    int (*stop)(void *p_module);
    int (*cfg)(void *p_module, cJSON *p_json);
    int (*msgs_sub_set)(void *p_module, int evt_id);
    int (*msgs_pub_set)(void *p_module, int output_index, int *p_evt_id, int num);
};

typedef struct tf_module_mgmt {
    tf_module_t *(*tf_module_instance)(void);
    void (*tf_module_destroy)(tf_module_t *p_module);
}tf_module_mgmt_t;
```

モジュールの書き方については、[Watcher Function Module Development Guide](https://wiki.seeedstudio.com/ja/watcher_function_module_development_guide) を参照してください。

## 2. 機能モジュール

### 2.1 リスト

現在、一般的な組み込みモジュールには、AIカメラ、アラームトリガー、画像解析、ローカルアラーム、SenseCraftアラーム、UARTアラームがあります。

<table>
  <thead>
    <tr>
      <th>カテゴリ</th>
      <th>機能モジュール</th>
      <th>入力データ型</th>
      <th>出力データ型</th>
      <th>複数インスタンス対応</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">励起源</td>
      <td>AIカメラ</td>
      <td>任意のデータ型</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>N</td>
    </tr>
    <tr>
      <td>タイマー</td>
      <td>-</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>Y</td>
    </tr>
    <tr>
      <td rowspan="2">トリガーモジュール</td>
      <td>アラームトリガー</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>画像解析</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td rowspan="3">アラームモジュール</td>
      <td>ローカルアラーム</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>N</td>
    </tr>
    <tr>
      <td>SenseCraftアラーム</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>UARTアラーム</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>Y</td>
    </tr>
  </tbody>
</table>

### 2.2 機能モジュールの紹介

#### 2.2.1 タイマー

タイマーブロックは励起源モジュールであり、主に周期的なタイマーとして機能します。パラメータ定義は以下の通りです：

```json
{
    "type": "timer",
    "version": "1.0.0",
    "params": {
        "period": 5
    }
}
```

設定パラメータは以下の通りです：

* **params**: デバイスパラメータを含むオブジェクト。
  * **period**: タイマーを開始する周期。

端子接続の説明：

<table>
  <thead>
    <tr>
      <th>端子</th>
      <th>データ型</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>入力</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>出力</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>現在のタイムスタンプを出力</td>
    </tr>
  </tbody>
</table>

#### 2.2.2 AIカメラ

AIカメラブロックは主にHimaxとの通信、モデルOTA、画像および推論結果の取得を担当し、簡単な条件フィルタリング機能を含みます。パラメータ定義は以下の通りです：

```json
{
    "type": "ai camera",
    "version": "1.0.0",
    "params": {
        "model_type": 0,
        "model": {
            "model_id": "60021",
            "version": "1.0.0",
            "arguments": {
                "size": 8199.37,
                "url": "https://sensecraft-statics.oss-accelerate.xxx",
                "icon": "https://sensecraft-statics.oss-accelerate.xxx.png",
                "task": "detect",
                "createdAt": "1695282154",
                "updatedAt": "17149mode60582",
                "iou": 50,
                "conf": 50
            },
            "model_name": "General Object Detection",
            "model_format": "TensorRT",
            "ai_framework": "2",
            "author": "SenseCraft AI",
            "algorithm": "Object Detect(TensorRT, SMALL, COCO)",
            "classes": [
                "person"
            ],
            "checksum": ""
        },
        "modes": 1,
        "conditions": [{
            "class": "person",
            "mode": 1,
            "type": 1,
            "num": 1
        }],
        "conditions_combo": 0,
        "silent_period": {
            "time_period": {
                "repeat": [1, 1, 1, 1, 1, 1, 1],
                "time_start": "08:59:59",
                "time_end": "00:00:00"
            },
            "silence_duration": 60
        },
        "output_type": 1,
        "shutter": 0
    }
}
```

各フィールドの `params` パラメータの意味は以下の通りです：

* **model\_type**: モデルタイプ。0はクラウドモデルを示し（モデルURLは `model` フィールドから抽出され、ダウンロードして使用）、1、2、3はHimax内蔵モデルを示します。
* **model**: モデルに関する具体的な情報。
  * **model\_id**: モデルの一意識別子。
  * **version**: モデルのバージョン。
  * **arguments**: モデルのパラメータ設定。
    * **size**: モデルのサイズ。
    * **url**: モデルのダウンロードURL。
    * **icon**: モデルのアイコンURL。
    * **task**: モデルのタスクタイプ。"detect"は検出を示します。
    * **createdAt**: モデル作成のタイムスタンプ。
    * **updatedAt**: モデル更新のタイムスタンプ。
    * **iou**: IOU（Intersection over Union）閾値。
    * **conf**: 信頼度閾値。
  * **model\_name**: モデル名。"General Object Detection"。
  * **model\_format**: モデルフォーマット。"TensorRT"。
  * **ai\_framework**: 使用されるAIフレームワーク。
  * **author**: モデルの作成者。"SenseCraft AI"。
  * **algorithm**: アルゴリズムの説明。"Object Detect(TensorRT, SMALL, COCO)"。
  * **classes**: モデルが検出可能なカテゴリ。"person"を含む。
  * **checksum**: モデルファイルのチェックサム（MD5）。現在は空。
* **modes**: 動作モード。0は推論モード、1はサンプリングモードを示します。1の場合、デバイスは `model` フィールドを解析しません。
* **conditions**: 検出条件のリスト。
  * **class**: 検出するカテゴリ。ここでは "person"。
  * **mode**: 検出モード。0は存在検出、1は数値比較、2は数量変化を示します。
  * **type**: 比較タイプ。0は未満、1は等しい、2は超過、3は不等を示します（mode=1の場合のみ有効）。
  * **num**: 比較値（mode=1の場合のみ有効）。
* **conditions\_combo**: 複数条件検出の関係。0はAND、1はORを示します。
* **silent\_period**: サイレント期間の設定。
  * **time\_period**: 時間帯の設定。
    * **repeat**: 日曜日から土曜日までの繰り返し時間帯。1は有効を示します。
    * **time\_start**: サイレント期間の開始時間。
    * **time\_end**: サイレント期間の終了時間。
  * **silence\_duration**: サイレント期間の長さ（秒単位）。
* **output\_type**: 出力画像タイプ。0は小画像のみ（412x412）、1は大画像と小画像の両方（640x480; 412x412）を示します。
* **shutter**: シャッターモード。0は連続的に開く、1はUIによるトリガー、2は入力イベントによるトリガー、3は一度だけシャッターを開くことを示します。

端子接続の説明：

<table>
  <thead>
    <tr>
      <th>端子</th>
      <th>データタイプ</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>入力</td>
      <td>任意のデータタイプ</td>
      <td>入力はシャッターをトリガーできます</td>
    </tr>
    <tr>
      <td>出力</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>大画像、小画像、推論情報を出力します（このフィールドは推論モデルにのみ有効です）</td>
    </tr>
  </tbody>
</table>

#### 2.2.3 アラームトリガー

アラームトリガーブロックはAIカメラの次のブロックになる可能性があり、主に次のアラームブロックに提供するための音声やテキストを追加します。パラメータ定義は以下の通りです：

```json
{
    "type": "alarm trigger",
    "version": "1.0.0",
    "params": {
        "text": "", 
        "audio": ""
    }
}
```

設定パラメータは以下の通りです：

* **params**: デバイスパラメータを含むオブジェクト。
  * **text**: 音声テキスト。音声コンテンツを生成するために使用される情報。
  * **audio**: 音声コンテンツを表すMP3形式のBase64エンコードされた音声ファイル。

端子接続の説明：

<table>
  <thead>
    <tr>
      <th>端子</th>
      <th>データタイプ</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>入力</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>AIカメラブロックからのデータ出力</td>
    </tr>
    <tr>
      <td>出力</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>大画像、小画像、推論情報、アラームMP3音声、テキストを出力</td>
    </tr>
  </tbody>
</table>

#### 2.2.4 画像解析器

画像解析器ブロックはAIカメラの次のレベルのブロックになる可能性があり、主にLLMを呼び出して画像を解析します。解析リクエストがアラームをトリガーする結果を返すと、次のレベルのモジュールにデータを出力します。パラメータ定義は以下の通りです：

```json
{
    "type": "image analyzer",
    "version": "1.0.0",
    "params": {
        "url": "",
        "header": "",
        "body": {
            "prompt": "",
            "type": 0,
            "audio_txt": ""
        }
    }
}
```

設定パラメータは以下の通りです：

* **params**: デバイスパラメータを含むオブジェクト。
  * **url**: リクエストのURLアドレス（予約済み、通常はデバイスに設定されたURLを使用）。
  * **header**: リクエストヘッダー（予約済み）。
  * **body**: リクエスト本文の内容を含むオブジェクト。
    * **prompt**: リクエストに含めるプロンプト。画像解析のための追加情報を提供。
    * **type**: リクエストタイプ。1はモニタリングを示します。
    * **audio\_txt**: リクエストに含める音声テキスト情報。モニタリングシーンがトリガーされると、このフィールドはTTSに変換され、インターフェースで返されます。

端子接続の説明：

<table>
  <thead>
    <tr>
      <th>端子</th>
      <th>データタイプ</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>入力</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>AIカメラブロックからのデータ出力</td>
    </tr>
    <tr>
      <td>出力</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>大画像、小画像、推論情報、アラームMP3音声、テキストを出力</td>
    </tr>
  </tbody>
</table>

#### 2.2.5 ローカルアラーム

ローカルアラームブロックはアラームブロックであり、主にデバイスアラームを実装します。トリガーされると、RGBの点滅制御、アラーム音声の再生、LCD上のアラームテキストの表示、アラーム画像の表示などを行います。パラメータは以下のように定義されています：

```json
{
    "type": "local alarm",
    "version": "1.0.0",
    "params": {
        "sound": 1,
        "rgb": 1,
        "img": 1,
        "text": 1,
        "duration": 10
    }
}
```

設定パラメータは以下の通りです：

* **params**: デバイスパラメータを含むオブジェクト。
  * **sound**: 音声再生のスイッチ。1はオン、0はオフを意味します。
  * **rgb**: RGBアラームライトのスイッチ。1はオン、0はオフを意味します。
  * **img**: アラーム画像表示のスイッチ。1はオン、0はオフを意味します。
  * **text**: アラームテキスト表示のスイッチ。1はオン、0はオフを意味します。
  * **duration**: アラームの持続時間（秒単位）。ここでは10秒です。

端子接続の説明：

<table>
  <thead>
    <tr>
      <th>端子</th>
      <th>データ型</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>入力</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>前のトリガーブロックからのデータ出力</td>
    </tr>
    <tr>
      <td>出力</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.6 sensecraft alarm

SenseCraftアラームブロックはアラームブロックであり、主にSenseCraftプラットフォームにアラーム情報を通知します。パラメータは以下のように定義されています：

```json
{
    "type": "sensecraft alarm",
    "version": "1.0.0",
    "params": {
        "silence_duration": 60,
        "text": ""
    }
}
```

設定パラメータは以下の通りです：

* **params**: デバイスパラメータを含むオブジェクト。
  * **silence\_duration**: サイレンス期間（秒単位）。ここでは60秒で、最小報告間隔が60秒であることを示します。
  * **text**: プラットフォームアラーム通知用のテキスト。

端子接続の説明：

<table>
  <thead>
    <tr>
      <th>端子</th>
      <th>データ型</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>入力</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>前のトリガーブロックからのデータ出力</td>
    </tr>
    <tr>
      <td>出力</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.7 uart alarm

UARTアラームブロックはアラームブロックであり、主にシリアルポートを介してアラーム情報を出力します。パラメータは以下のように定義されています：

```json
{
    "id": "<random number>",
    "type": "uart alarm",
    "version": "1.0.0",
    "params": {
        "output_format": 0,
        "text": "a string that you want to pass to the consumer of the uart packet.",
        "include_big_image": 0,
        "include_small_image": 0
    }
}
```

設定パラメータは以下の通りです：

- **params**: デバイスパラメータを含むオブジェクト。
  - **output_format**: 出力形式。
    - 0: バイナリ形式。
    - 1: JSON形式。
  - **text**: アラームテキスト。このテキストはシリアル出力パケットのプロンプトフィールドに挿入されます。このパラメータが設定されていない場合、現在のタスクフローの短い名前が挿入されます。
  - **include_big_image**: 大きな画像を含めるかどうか。
    - 0: 含めない。
    - 1: 含める。
  - **include_small_image**: 小さな画像を含めるかどうか。
    - 0: 含めない。
    - 1: 含める。

端子接続の説明：

<table>
  <thead>
    <tr>
      <th>端子</th>
      <th>データ型</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>入力</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>前のトリガーブロックからのデータ出力</td>
    </tr>
    <tr>
      <td>出力</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/image-uart.png" style={{width:500, height:'auto'}}/></div>

UARTアラームはSenseCAP Watcherの背面にあるシリアルポートからデータパケットを出力します。配線方法は上記の図に示されています。シリアルポートのパラメータは以下の通りです：

- ボーレート: 115200
- 8ビット、1ストップビット
- パリティチェックなし

> 注意: ESP32S3のピンIO_19およびIO_20の電源投入時のデフォルト動作により、SenseCAP Watcherの初回電源投入時にこのシリアルポートからいくつかのランダムなバイトが出力されます。有効なデータパケット検出メカニズムを使用してフィルタリングしてください。

シリアルポートから出力されるデータパケットの形式は、`output_format`パラメータに応じて以下の2つの形式に分かれます：

**A. バイナリ形式**

バイナリデータパケット形式は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:800, height:'auto'}}/></div>

フィールド:
- Packet Magic Header - パケットヘッダー、5バイト "SEEED"
- Prompt Str Len - プロンプト文字列の長さ
- Prompt Str - プロンプト文字列またはアラームテキスト。`text`パラメータが設定されている場合はそのコピーです。`text`パラメータが設定されていない場合、タスク目的を説明する短いテキストが自動的に挿入されます（クラウドサービスのタスクコンパイルインターフェースによって生成）。
- Big Image Len - 大きな画像のBase64エンコード文字列のバイト長。`include_big_image=0`の場合、この値は0です。
- Big Image - 大きな画像JPGのBase64エンコード文字列。
- Small Image Len - 小さな画像のBase64エンコード文字列のバイト長。`include_small_image=0`の場合、この値は0です。
- Small Image - 小さな画像JPGのBase64エンコード文字列。
- Inference type - 推論結果タイプ。0: 推論情報なし、1: ボックス推論出力、2: クラス推論結果出力。
- Boxes/classes - 推論結果。
- Classes name - クラス名。

上記のフィールドのうち、`Packet Magic Header`、`Prompt Str Len`、`Prompt Str`フィールドは必須出力フィールドです。他のフィールドはパラメータの有効化によって制御されます。例えば、`include_big_image: 1`パラメータが設定されている場合、バイナリデータパケットには`Big Image Len`および`Big Image`フィールドが追加されます。

**B. JSON形式**

JSONデータパケット形式は以下の通りです：

```
#シリアル出力のストリーム内
.....{packet object}\r\n{packet object}\r\n...
```

パケットオブジェクト:

```json
{
     "prompt": "猫を監視する",
     "big_image": "base64でエンコードされたJPG画像。include_big_imageが有効の場合に含まれます。有効でない場合、このフィールドは省略されます。",
     "small_image": "base64でエンコードされたJPG画像。include_small_imageが有効の場合に含まれます。有効でない場合、このフィールドは省略されます。",
     "inference":{
        "boxes": [
            [145, 326, 240, 208, 50, 0]
        ],
        "classes": [
            [50, 0]
        ],
        "classes_name": [
          "person"
        ]
  }
} 
```

同様に、「prompt」フィールドは必須の出力フィールドです。「big_image」と「small_image」フィールドはパラメータによって制御されます。

#### 2.2.7 HTTPアラーム

HTTPアラームブロックはアラームブロックであり、主にアラーム情報をHTTPサーバーに転送する機能を実装します。パラメータ定義は以下の通りです:

```json
{
    "id":"",
    "type": "http alarm",
    "version": "1.0.0",
    "params": {
        "silence_duration": 5,
        "time_en": 1,
        "text_en": 1,
        "image_en": 1, 
        "sensor_en": 1, 
        "text": ""
    }
}
```

設定パラメータは以下の通りです:

* **params**: デバイスパラメータを含むオブジェクト。
  * **silence_duration**: サイレンス時間（秒単位）。
  * **time_en**: タイムスタンプを有効にする。1はオン、0はオフ。
  * **text_en**: アラームテキストを有効にする。1はオン、0はオフ。
  * **image_en**: 画像を有効にする。1はオン、0はオフ。
  * **sensor_en**: センサーを有効にする。1はオン、0はオフ。
  * **text**: アラームテキスト。

端末接続の説明:

<table>
  <thead>
    <tr>
      <th>端末</th>
      <th>データ型</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>入力</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>前のトリガーブロックからのデータ出力</td>
    </tr>
    <tr>
      <td>出力</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>