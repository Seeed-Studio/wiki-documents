---
description: SenseCAP Watcherソフトウェアフレームワークの紹介。
title: Watcherソフトウェアフレームワーク
image: https://files.seeedstudio.com/wiki/watcher_software_framework/architecture_1.webp
slug: /ja/watcher_software_framework
sidebar_position: 2
last_update:
  date: 11/5/2024
  author: Citric
---

# Watcherソフトウェアアーキテクチャ

SenseCAP Watcherのソフトウェアアーキテクチャは下図に示すように、主に3つの部分に分かれています：APPアプリケーション、UIとインタラクション、タスクフロー。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/architecture.png" style={{width:800, height:'auto'}}/></div>

- **APPアプリケーション**：主にWiFi接続、Bluetooth設定、プラットフォームとの通信、OTAなどのアプリケーションで、UI表示用のデータも生成します。
- **UIとインタラクション**：主にUIインターフェースとUIインタラクションの実装。
- **タスクフロー**：主にタスクフローエンジンと各種タスクフロー機能モジュールの実装。

## 1. タスクフローフレームワーク

### 1.1 概要

様々なシナリオのニーズに対応するため、Node-REDに似たタスクフローフレームワークを設計しました。これにより、デバイスが持つスキルを柔軟に組織化し、連携させることができます。

デバイスが持つスキルをブロックとして抽象化し、これらはデータプロデューサーやコンシューマー、またはその両方になることができます。そして、特定のタスクに応じて、必要なブロックを抽出し、プロデューサー-コンシューマー関係を通じて接続することで、特定のシナリオタスクを実現します。

### 1.2 タスクフローエンジン

タスクフローエンジンの主な機能は、各種機能モジュールがタスクフローJSONに従って動作できるようにすることです。機能モジュールの登録、インスタンス化、破棄、およびそれらの間の接続を管理します。

タスクフローエンジンの処理フローは以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/taskflow_engine.png" style={{width:300, height:'auto'}}/></div>

1. タスクフローエンジンを初期化します。
2. 各機能モジュールをタスクフローエンジンに登録し、連結リストを使用して各モジュールの管理機能と情報を格納します。
3. タスクフローエンジンはタスクフローの受信を待機します。
4. 新しいタスクフローを受信すると、タスクフローJSONを解析し、必要な機能モジュールを抽出して配列に格納します。
5. 機能モジュール配列で、モジュール名に基づいて連結リストからモジュールの管理機能を見つけ、ソートします。
6. 機能モジュールをインスタンス化します。
7. 機能モジュールを設定します。
8. 機能モジュール間でメッセージ伝送用のイベントパイプラインを確立します。
9. 各機能モジュールを順次開始します。
10. 開始されると、タスクフローが実行されます。

### 1.3 タスクフローJSON

タスクフローはJSON形式で記述され、タスクフローエンジンはこのJSONファイルを解析してタスクフローを実行します。

以下はタスクフローJSONテンプレートです：

```json
{
    "tlid": 123456789,
    "ctd": 123456789,
    "tn": "Task flow template",
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
- **tlid**: タスクフローID。ctdと同じにすることができます。
- **tn**: タスクフローの名前。
- **type:** タスクフローのタイプ
  - **0**: ローカルサンプルタスクフロー。
  - **1**: MQTT経由で発行されたタスクフロー。
  - **2**: Bluetooth経由で発行されたタスクフロー。
  - **3**: 音声経由で発行されたタスクフロー。
- **task_flow：** タスクフロー内の各機能モジュールの詳細情報を含みます。
  - **id**: モジュールID。
  - **type**: モジュール名。
  - **index**: タスクフロー内のモジュールの順序。フロー内の位置が早いほど値が小さく、モジュールのソートに使用されます。
  - **version**: モジュールバージョン。
  - **params**: モジュールパラメータ。異なるバージョンでは異なるパラメータ設定を持つ場合があり、バージョン番号に応じて互換性を保って解析できます。
  - **wires**: モジュール間の接続。詳細は**タスクフロー機能モジュールのイベントパイプライン**を参照してください。

以下は火災監視のタスクフローJSONの例です。

```json
{
    "tlid": 1720171506807,
    "ctd": 1720171527631,
    "tn": "App notifies about fire emergency",
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
                    "prompt": "Is there a fire?",
                    "type": 1,
                    "audio_txt": "Fire alert"
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
                "text": "Fire alert"
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

このタスクフローは、AIカメラ、画像アナライザー、ローカルアラーム、SenseCraftアラームの4つのブロックを使用します。配線トポロジーは以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

以下の図は、タスクフローエンジンの一般的なフローと機能モジュールの起動を示しています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

### 1.4 モジュールのイベントパイプライン

機能モジュール間の接続はデータ伝送を表し、前のモジュールがデータを生成して次のモジュールに送信します。メッセージ伝送はイベントメカニズムを使用し、前者がイベントを発行し、後者がイベントを購読します。イベントはIDFの`esp_event`コンポーネントを使用して実装され、キューキャッシュをサポートします。

各モジュールには一意のidがあり、これはモジュールが購読するイベントidとして機能します。`sub_set`実行中、モジュールはそのidを持つメッセージを購読し、停止実行中はそのイベントidの登録を解除します。一部のモジュールは励起源として、上流モジュールを持たず、そのイベントIDを購読せずに動作できます。

各モジュールにはwiresフィールドがあり、次のモジュールのidを示します。`pub_set`実行時、これらのidがキャッシュされ、データが利用可能になったときにこれらのidにデータが発行されます。一部のモジュールはwiresフィールドが空で、下流モジュールがないことを示し、データを生成せずに消費します。

各モジュールは最大1つの入力端子を持てますが、複数の出力端子を持つことができ、異なるデータ出力を示し、各出力端子は複数のブロックに出力できます。wiresフィールドは2次元配列で、第1層は出力端子の数を表し、第2層は端子が出力するモジュールのidを表します。

以下の例に示すように、モジュール1はイベントID 2でメッセージを発行し、モジュール2がメッセージを受信して処理します。モジュール2は2つの出力端子を持ち、第1出力端子はモジュール3と4に接続し、第2出力端子はモジュール5に接続します。出力端子1にデータがある場合、イベントID 3と4にメッセージを発行し、出力端子2にデータがある場合、イベントID 5にメッセージを発行します。

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

関連する操作関数は **tf.h** で定義されており（主にidfの `esp_event` 関連関数をカプセル化）、以下の通りです：

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

#### 1.4.1 イベントパイプラインで送信されるメッセージタイプ

2つのモジュールを接続できることは、それらのデータタイプが一致していることを示します。データタイプと対応するデータ構造を[tf_module_data_type.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_data_type.h)ファイルで定義しています。一般的に、データタイプは**TF_DATA_TYPE_**プレフィックスで定義され、データ構造は**tf_data_**プレフィックスで定義されます。

例えば、タイプ列挙構造で**TF_DATA_TYPE_BUFFER**タイプを定義し、対応する構造は以下の通りです。最初のフィールドtypeはデータタイプを示し、残りのフィールドは送信されるデータを示します。

```cpp
typedef struct {
    uint8_t  type;
    struct tf_data_buf data;
} tf_data_buffer_t;
```

モジュールがイベントデータを受信すると、まずイベントデータの最初のバイトを抽出してデータタイプを取得し、そのデータが必要なものかどうかを判断します。必要な場合はさらに処理を行い、そうでなければ破棄します。

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
      <td>大きな画像、小さな画像、推論情報を含む</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>tf_data_dualimage_with_audio_text_t</td>
      <td>大きな画像、小さな画像、アラーム音声、アラームテキストを含む</td>
    </tr>
  </tbody>
</table>

- 大きな画像：himaxから取得した640 x 480のjpeg形式の画像で、base64エンコーディングを使用して保存されます。

- 小さな画像：himaxから取得した416 x 416のjpeg形式の画像で、base64エンコーディングを使用して保存されます。

- 推論情報：himaxから取得した推論結果で、ボックス座標の配列、クラス分類情報、またはポイント座標情報、およびクラス名情報が含まれます。

- オーディオ：トリガーブロックから取得したデータで、.mp3形式です。

#### 1.4.2 イベントパイプラインでの効率的な伝送

idfの`esp_event`コンポーネントを使用してメッセージ伝送を行う場合、エンキュー時にメモリコピーが発生します（詳細については`esp_event`のソースコードをお読みください）。これは画像やオーディオなどの大きなデータを伝送する際には非常に不適切です。

そのため、ポインタのみを伝送する効率的な伝送方法を採用しています。例えば、**TF_DATA_TYPE_BUFFER**タイプでは、伝送するデータは以下のように定義されます。最初のフィールド`p_buf`はデータバッファの開始アドレスで、2番目のフィールドlenはデータの長さです。

```cpp
struct tf_data_buf
{
    uint8_t *p_buf;
    uint32_t len;
};
```

データプロデューサーモジュールでは、`p_buf`のメモリ割り当てを担当します。次のレベルのデータコンシューマーモジュールは、使用後にメモリを解放する責任があります。
一般的なデータコピーと解放関数は、[tf_module_util.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_util.h)ファイルで定義されています。例えば、受信したイベントデータタイプが望むものでない場合、**tf_data_free()**関数を直接呼び出してメモリを解放できます（この関数はすべてのデータタイプの解放を実装しています）。以下に示します：

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

### 1.5 モジュールのベースクラス

モジュールのベースクラスを [tf_module.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_engine/include/tf_module.h) で定義しています。タスクフローエンジンはモデルの具体的な実装には関与せず、モジュールの関連インターフェースを呼び出してそれらを操作するだけです。各具体的なモジュールは、操作関数と管理関数を実装するだけで済みます。

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

モジュールの書き方については、[Watcher Function Module Development Guide](https://wiki.seeedstudio.com/ja/watcher_function_module_development_guide)を参照してください。

## 2. 機能モジュール

### 2.1 リスト

現在、一般的な組み込みモジュールには、ai camera、alarm trigger、image analyzer、local alarm、sensecraft alarm、uart alarmが含まれています。

<table>
  <thead>
    <tr>
      <th>カテゴリ</th>
      <th>機能モジュール</th>
      <th>入力データタイプ</th>
      <th>出力データタイプ</th>
      <th>複数インスタンス対応</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">励起ソース</td>
      <td>ai camera</td>
      <td>任意のデータタイプ</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>N</td>
    </tr>
    <tr>
      <td>timer</td>
      <td>-</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>Y</td>
    </tr>
    <tr>
      <td rowspan="2">トリガーモジュール</td>
      <td>alarm trigger</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>image analyzer</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td rowspan="3">アラームモジュール</td>
      <td>local alarm</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>N</td>
    </tr>
    <tr>
      <td>sensecraft alarm</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>uart alarm</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>Y</td>
    </tr>
  </tbody>
</table>

### 2.2 機能モジュール紹介

#### 2.2.1 timer

timerブロックは励起ソースモジュールで、主に周期タイマーとして機能します。パラメータ定義は以下の通りです：

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

- **params**: デバイスパラメータを含むオブジェクト。
  - **period**: タイマーを開始するための周期。

ターミナル接続の説明：

<table>
  <thead>
    <tr>
      <th>ターミナル</th>
      <th>データタイプ</th>
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

#### 2.2.2 ai camera

ai cameraブロックは主にHimaxとの通信、モデルOTA、画像と推論結果の取得を担当し、いくつかの簡単な条件フィルタリング機能を含んでいます。パラメータ定義は以下の通りです：

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

paramsパラメータの各フィールドの意味は以下の通りです：

- **model_type**: モデルタイプ、0はクラウドモデル（modelフィールドからモデルURLを抽出してダウンロード・使用）、1、2、3はHimax内蔵モデルを示します。
- **model**: モデルの具体的な情報。
  - **model_id**: モデルの一意識別子。
  - **version**: モデルバージョン。
  - **arguments**: モデルパラメータ設定。
    - **size**: モデルのサイズ。
    - **url**: モデルのダウンロードURL。
    - **icon**: モデルのアイコンURL。
    - **task**: モデルのタスクタイプ、"detect"は検出を示します。
    - **createdAt**: モデル作成のタイムスタンプ。
    - **updatedAt**: モデル更新のタイムスタンプ。
    - **iou**: IOU（Intersection over Union）閾値。
    - **conf**: 信頼度閾値。
  - **model_name**: モデル名、"General Object Detection"。
  - **model_format**: モデル形式、"TensorRT"。
  - **ai_framework**: 使用されるAIフレームワーク。
  - **author**: モデルの作成者、"SenseCraft AI"。
  - **algorithm**: アルゴリズムの説明、"Object Detect(TensorRT, SMALL, COCO)"。
  - **classes**: モデルが検出できるカテゴリ、"person"を含みます。
  - **checksum**: モデルファイルのチェックサム（MD5）、現在は空です。
- **modes**: 動作モード、0は推論モード、1はサンプリングモードを示します；1の場合、デバイスはmodelフィールドを解析しません。
- **conditions**: 検出条件のリスト。
  - **class**: 検出するカテゴリ、ここでは"person"。
  - **mode**: 検出モード、0は存在検出、1は数値比較、2は数量変化を示します。
  - **type**: 比較タイプ、0は未満、1は等しい、2は超過、3は等しくない（mode=1の場合のみ有効）。
  - **num**: 比較値（mode=1の場合のみ有効）。
- **conditions_combo**: 複数条件検出の関係、0はAND、1はORを示します。
- **silent_period**: サイレント期間設定。
  - **time_period**: 時間期間設定。
    - **repeat**: 日曜日から土曜日までの繰り返し時間期間、1は有効を示します。
    - **time_start**: サイレント期間の開始時刻。
    - **time_end**: サイレント期間の終了時刻。
  - **silence_duration**: サイレンス継続時間、秒単位。
- **output_type**: 出力画像タイプ、0は小画像のみ（412x412）、1は大画像と小画像の両方（640x480; 412x412）。
- **shutter**: シャッターモード、0は連続開放、1はUIによるトリガー、2は入力イベントによるトリガー、3は1回シャッター。

端子接続説明：

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
      <td>Input</td>
      <td>任意のデータタイプ</td>
      <td>入力はシャッターをトリガーできます</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>大画像、小画像、推論情報を出力します（このフィールドは推論モデルの場合のみ有効）</td>
    </tr>
  </tbody>
</table>

#### 2.2.3 alarm trigger

alarm triggerブロックはai cameraの次のブロックになる可能性があり、主に次のalarmブロックに提供するためのオーディオとテキストを追加します。パラメータ定義は以下の通りです：

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

- **params**: デバイスパラメータを含むオブジェクト。
  - **text**: オーディオテキスト、オーディオコンテンツの生成に使用される情報。
  - **audio**: MP3形式のオーディオコンテンツを表すBase64エンコードされたオーディオファイル。

ターミナル接続の説明：

<table>
  <thead>
    <tr>
      <th>ターミナル</th>
      <th>データタイプ</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>AIカメラブロックからのデータ出力</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>大画像、小画像、推論情報、アラームmp3オーディオ、およびテキストを出力</td>
    </tr>
  </tbody>
</table>

#### 2.2.4 image analyzer

image analyzerブロックは、AIカメラの次レベルブロックである可能性があり、主にLLMを呼び出して画像を分析します。分析のリクエストがアラームをトリガーする結果を返すと、次レベルモジュールにデータを出力します。パラメータは以下のように定義されます：

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

- **params**: デバイスパラメータを含むオブジェクト。
  - **url**: リクエスト用のURLアドレス、予約済み（通常はデバイスで設定されたURLを使用）。
  - **header**: リクエストヘッダー、予約済み。
  - **body**: リクエストボディの内容を含むオブジェクト。
    - **prompt**: リクエストに含めるプロンプト、画像解析のための追加情報を提供。
    - **type**: リクエストのタイプ、1は監視を示す。
    - **audio_txt**: リクエストに含める音声テキスト情報。監視シーンがトリガーされると、インターフェースサービスはこのフィールドをTTSに変換し、インターフェースで返す。

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
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>AIカメラブロックからのデータ出力</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>大画像、小画像、推論情報、アラームmp3音声、およびテキストを出力</td>
    </tr>
  </tbody>
</table>

#### 2.2.5 local alarm

ローカルアラームブロックはアラームブロックで、主にデバイスアラームを実装し、トリガー時にRGBの点滅制御、アラーム音声の再生、LCDでのアラームテキスト表示、アラーム画像の表示などを行います。パラメータは以下のように定義されます：

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

- **params**: デバイスパラメータを含むオブジェクト。
  - **sound**: オーディオを再生するスイッチ、1はオン、0はオフを意味します。
  - **rgb**: RGBアラームライトのスイッチ、1はオン、0はオフを意味します。
  - **img**: アラーム画像を表示するスイッチ、1はオン、0はオフを意味します。
  - **text**: アラームテキストを表示するスイッチ、1はオン、0はオフを意味します。
  - **duration**: アラームの継続時間（秒）、ここでは10秒です。

ターミナル接続の説明：

<table>
  <thead>
    <tr>
      <th>ターミナル</th>
      <th>データタイプ</th>
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

sensecraft alarmブロックはアラームブロックで、主にSenseCraftプラットフォームにアラーム情報を通知します。パラメータは以下のように定義されています：

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

- **params**: デバイスパラメータを含むオブジェクト。
  - **silence_duration**: 無音継続時間（秒）、ここでは60秒で、最小レポート間隔が60秒であることを示します。
  - **text**: プラットフォームアラーム通知のテキスト。

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
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>前のトリガーブロックからのデータ出力</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.7 uart alarm

uart alarmブロックはアラームブロックで、主にシリアルポートを通じてアラーム情報出力を実装します。パラメータは以下のように定義されます：

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
  - **output_format**: 出力フォーマット。
    - 0: バイナリフォーマット。
    - 1: JSONフォーマット。
  - **text**: アラームテキスト、このテキストはシリアル出力パケットのPromptフィールドに入力されます。このパラメータが設定されていない場合、現在のタスクフローの短縮名が入力されます。
  - **include_big_image**: 大きな画像を含むかどうか。
    - 0: いいえ。
    - 1: はい。
  - **include_small_image**: 小さな画像を含むかどうか。
    - 0: いいえ。
    - 1: はい。

ターミナル接続の説明：

<table>
  <thead>
    <tr>
      <th>ターミナル</th>
      <th>データタイプ</th>
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

uart アラームは、SenseCAP Watcher の背面にあるシリアルポートからデータパケットを出力します。配線方法は上図に示されています。シリアルポートのパラメータは以下の通りです：

- ボーレート：115200
- 8ビット、1ストップビット
- パリティチェックなし

> 注意：ESP32S3 ピン IO_19 と IO_20 の電源投入時のデフォルト動作により、このシリアルポートは SenseCAP Watcher の初回電源投入時にいくつかのランダムバイトを出力します。フィルタリングには有効なデータパケット検出メカニズムを使用してください。

シリアルポートから出力されるデータパケットの形式は、`output_format` パラメータに応じて2つの形式に分かれます：

**A. バイナリ形式**

バイナリデータパケット形式は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:800, height:'auto'}}/></div>

フィールド：

- Packet Magic Header - パケットヘッダー、5バイト "SEEED"
- Prompt Str Len - プロンプト文字列長
- Prompt Str - プロンプト文字列またはアラームテキスト。`text` パラメータが設定されている場合、それは `text` パラメータのコピーです。`text` パラメータが設定されていない場合、タスクの目的を説明する短いテキストが自動的に入力されます（クラウドサービスのタスクコンパイルインターフェースによって生成）。
- Big Image Len - 大きな画像のbase64エンコード文字列のバイト長、`include_big_image=0` の場合、値は0です。
- Big Image - 大きな画像JPGのBase64エンコード文字列
- Small Image Len - 小さな画像のbase64エンコード文字列のバイト長、`include_small_image=0` の場合、値は0です。
- Small Image - 小さな画像JPGのBase64エンコード文字列
- Inference type - 推論結果タイプ；0：推論情報なしを示す、1：出力がボックス推論であることを示す、2：出力がクラス推論結果であることを示す
- Boxes/classes - 推論結果。
- Classes name - クラス名。

上記のフィールドのうち、`Packet Magic Header`、`Prompt Str Len`、`Prompt Str` フィールドは必須出力フィールドです。その他のフィールドはパラメータの有効化によって制御されます。例えば、パラメータ `include_big_image: 1` が設定されている場合、バイナリデータパケットは `Big Image Len` と `Big Image` フィールドを追加します。

**B. JSON形式**

JSONデータパケット形式は以下の通りです：

```
#in the stream of uart output
.....{packet object}\r\n{packet object}\r\n...
```

パケットオブジェクト:

```json
{
     "prompt": "monitor a cat",
     "big_image": "base64 encoded JPG image, if include_big_image is enabled, otherwise this field is omitted",
     "small_image": "base64 encoded JPG image, if include_small_image is enabled, otherwise this field is omitted",
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

#### 2.2.7 http alarm

http alarmブロックはアラームブロックで、主にアラーム情報をHTTPサーバーに転送する機能を実装します。パラメータ定義は以下の通りです：

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

設定パラメータは以下の通りです：

- **params**: デバイスパラメータを含むオブジェクト。
  - **silence_duration**: 無音時間、秒単位。
  - **time_en**: タイムスタンプを有効にする、1はオン、0はオフを意味する。
  - **text_en**: アラームテキストを有効にする、1はオン、0はオフを意味する。
  - **image_en**: 画像を有効にする、1はオン、0はオフを意味する。
  - **sensor_en**: センサーを有効にする、1はオン、0はオフを意味する。
  - **text**: アラームテキスト。
  
ターミナル接続の説明：

<table>
  <thead>
    <tr>
      <th>ターミナル</th>
      <th>データタイプ</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>前のトリガーブロックからのデータ出力</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
