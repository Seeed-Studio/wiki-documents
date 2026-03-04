---
description: Watcher機能ブロックの開発方法について説明します。
title: Watcher機能モジュール開発ガイド
image: https://files.seeedstudio.com/wiki/watcher_software_framework/watcher_function_module.webp
slug: /watcher_function_module_development_guide
sidebar_position: 3
last_update:
  date: 11/5/2024
  author: Citric
---


# Watcher機能モジュール開発ガイド

機能モジュールがどのように動作するかを理解するために、まず[Watcherソフトウェアフレームワーク](https://wiki.seeedstudio.com/ja/watcher_software_framework)を読むことをお勧めします。

このドキュメントでは、新しい機能モジュールを開発する方法について、ステップバイステップのガイドを示します。例として`UART Alarm`モジュールを使用します。

## 1. インストールと初回ビルド

スキップした場合は、[Watcher開発環境の構築](https://wiki.seeedstudio.com/ja/build_watcher_development_environment)の手順を実行してください。

```shell
# you're in PROJ_ROOT_DIR/examples/factory_firmware/
cd main/task_flow_module
```

## 2. 適切なテンプレートを選択する

[Watcher Software Framework](https://wiki.seeedstudio.com/ja/watcher_software_framework)では、既存の機能モジュール（以下のドキュメントでは**FM**と略記）とその用途について紹介しました。新しいFMを開発する際は、参考として最も近い既存のFMから始めるのが良いでしょう。このチュートリアルではアラーマーFMを開発するので、アラーマーFMの中から一つ選択します。`local alarmer`が最もシンプルなので、これを採用します。

```shell
cp tf_module_local_alarm.h tf_module_uart_alarm.h
cp tf_module_local_alarm.c tf_module_uart_alarm.c
```

ファイル名は何でも構いません。`.h` と `.c` ファイルはすべてビルドシステムによってスキャンされ、コンパイルコードツリーに取り込まれます。ただし、意味のあるファイル名を付けることを推奨します。

## 3. 登録の実装

**TFE**（タスクフローエンジン）は、新しいFMを登録するためのAPI関数を提供します。

```cpp
esp_err_t tf_module_register(const char *p_name,
                                const char *p_desc,
                                const char *p_version,
                                tf_module_mgmt_t *mgmt_handle);
```

最初の3つのパラメータは、あなたのFMの名前、説明、バージョンです。これらは現在内部的に使用されています（例：登録テーブルからのFMマッチング、ログ出力など）が、将来的にはFMがローカルサービスと通信する際に使用される予定です。

```cpp
// in tf_module_uart_alarm.h
#define TF_MODULE_UART_ALARM_NAME "uart alarm"
#define TF_MODULE_UART_ALARM_VERSION "1.0.0"
#define TF_MODULE_UART_ALARM_DESC "uart alarm function module"

// in tf_module_uart_alarm.c
esp_err_t tf_module_uart_alarm_register(void)
{
    return tf_module_register(TF_MODULE_UART_ALARM_NAME,
                              TF_MODULE_UART_ALARM_DESC,
                              TF_MODULE_UART_ALARM_VERSION,
                              &__g_module_management);
}
```

4番目のパラメータは、このFMのライフサイクルを管理するために必要なAPI関数を含む構造体です。

```cpp
// in tf_module.h
typedef struct tf_module_mgmt {
    tf_module_t *(*tf_module_instance)(void);
    void (*tf_module_destroy)(tf_module_t *p_module);
}tf_module_mgmt_t;
```

`tf_module_instance` は、エンジンがタスクフローで指定されたすべてのFMを初期化する際にTFEによって呼び出される関数です。基本的に、これはエンジンがタスクフロー作成リクエストを受信し、フローを開始したことを意味します。`tf_module_destroy` は、TFEがフローを停止する際に呼び出される関数です。

### 3.1 インスタンス

```cpp
tf_module_t *tf_module_uart_alarm_instance(void)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *) tf_malloc(sizeof(tf_module_uart_alarm_t));
    if (p_module_ins == NULL)
    {
        return NULL;
    }
    p_module_ins->module_base.p_module = p_module_ins;
    p_module_ins->module_base.ops = &__g_module_ops;

    if (atomic_fetch_add(&g_ins_cnt, 1) == 0) {
        // the 1st time instance, we should init the hardware
        esp_err_t ret;
        uart_config_t uart_config = {
            .baud_rate = 115200,
            .data_bits = UART_DATA_8_BITS,
            .parity = UART_PARITY_DISABLE,
            .stop_bits = UART_STOP_BITS_1,
            .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
        };
        const int buffer_size = 2 * 1024;
        ESP_GOTO_ON_ERROR(uart_param_config(UART_NUM_2, &uart_config), err, TAG, "uart_param_config failed");
        ESP_GOTO_ON_ERROR(uart_set_pin(UART_NUM_2, GPIO_NUM_19, GPIO_NUM_20, -1, -1), err, TAG, "uart_set_pin failed");
        ESP_GOTO_ON_ERROR(uart_driver_install(UART_NUM_2, buffer_size, buffer_size, 0, NULL, ESP_INTR_FLAG_SHARED), err, TAG, "uart_driver_install failed");
    }

    return &p_module_ins->module_base;

err:
    free(p_module_ins);
    return NULL;
}
```

上記は `instance` 関数の実装です。この関数は、このFMのパラメータを保持するための構造体 `tf_module_uart_alarm_t` のメモリを割り当てます。これはC++クラスのメンバーのような役割を果たします。構造体 `tf_module_uart_alarm_t` において、最初のフィールドが重要です - `tf_module_t module_base`。C++プログラミングの観点から見ると、`tf_module_t` はすべてのFMの親クラスです。`instance` 関数は単純にTFEに `tf_module_t` 構造体へのポインタを提供します。

```cpp
// in tf_module_uart_alarm.h
typedef struct {
    tf_module_t module_base;
    int input_evt_id;           //this can also be the module instance id
    int output_format;          //default 0, see comment above
    bool include_big_image;     //default: false
    bool include_small_image;   //default: false
    bool include_boxes;         //default: false, coming soon
} tf_module_uart_alarm_t;

// in tf_module_uart_alarm.c
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    return &p_module_ins->module_base;
    ...
}
```

`tf_module_t` の2つのメンバーを割り当てる必要があります。

```cpp
// in tf_module_uart_alarm.c
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    p_module_ins->module_base.p_module = p_module_ins;
    p_module_ins->module_base.ops = &__g_module_ops;
```

`p_module` - FM自体のインスタンスを参照するポインタで、これは`destroy`関数がインスタンスのハンドラを取得し、そのメモリを解放するために使用されます。
`ops` - TFEがFMを操作するためのAPI関数を含む構造体で、これについては後で説明します。

インスタンス関数の残りの部分は、ハードウェアとFMのロジックに関連する要素を初期化することです。

言及すべき点の一つは、FMは複数回インスタンス化される可能性があることです。`instance`関数の再入を処理する必要があり、FMが複数のインスタンスをサポートしない場合は、`instance`関数の2回目の呼び出しに対してNULLポインタを返す必要があります。

この`uart alarmer`の例では、参照カウンタを使用して再入ロジックを処理します。

```cpp
if (atomic_fetch_add(&g_ins_cnt, 1) == 0) {
        // the 1st time instance, we should init the hardware
        esp_err_t ret;
        uart_config_t uart_config = {
            .baud_rate = 115200,
            .data_bits = UART_DATA_8_BITS,
            .parity = UART_PARITY_DISABLE,
            .stop_bits = UART_STOP_BITS_1,
            .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
        };
        const int buffer_size = 2 * 1024;
        ESP_GOTO_ON_ERROR(uart_param_config(UART_NUM_2, &uart_config), err, TAG, "uart_param_config failed");
        ESP_GOTO_ON_ERROR(uart_set_pin(UART_NUM_2, GPIO_NUM_19, GPIO_NUM_20, -1, -1), err, TAG, "uart_set_pin failed");
        ESP_GOTO_ON_ERROR(uart_driver_install(UART_NUM_2, buffer_size, buffer_size, 0, NULL, ESP_INTR_FLAG_SHARED), err, TAG, "uart_driver_install failed");
    }
```

### 3.2 破棄

```cpp
void tf_module_uart_alarm_destroy(tf_module_t *p_module_base)
{
    if (p_module_base) {
        if (atomic_fetch_sub(&g_ins_cnt, 1) <= 1) {
            // this is the last destroy call, de-init the uart
            uart_driver_delete(UART_NUM_2);
            ESP_LOGI(TAG, "uart driver is deleted.");
        }
        if (p_module_base->p_module) {
            free(p_module_base->p_module);
        }
    }
}
```

`destroy` は常にシンプルです 😂 メモリを解放し、必要に応じてハードウェアを初期化解除するだけです。

## 4. 操作を実装する

親クラスの `ops` メンバーは以下のように定義されています。

```c
struct tf_module_ops
{
    int (*start)(void *p_module);
    int (*stop)(void *p_module);
    int (*cfg)(void *p_module, cJSON *p_json);
    int (*msgs_sub_set)(void *p_module, int evt_id);
    int (*msgs_pub_set)(void *p_module, int output_index, int *p_evt_id, int num);
};
```

TFEがFMを初期化する際、以下の順序でこれらの関数を呼び出します：`cfg` -> `msgs_sub_set` -> `msgs_pub_set` -> `start` -> `stop`。

`cfg` - タスクフローjsonからパラメータを取得し、これらのパラメータを使用してFMを設定します

`msgs_sub_set` - 上流FMのイベントIDにイベントハンドラを登録することで、上流FMへの接続を作成します。入力パラメータ`evt_id`は、タスクフローjsonから抽出してTFEによって準備されます。第1パラメータ`p_module`は、FMインスタンス自体へのポインタです。

`msgs_pub_set` - 下流FMへの接続を保存します。このFMに出力がない場合、この関数を空のままにしておくことができます。第1パラメータ`p_module`は、FMインスタンス自体へのポインタです。第2パラメータ`output_index`はポート番号です。例えば、このFMに2つの出力がある場合、`msgs_pub_set`は2回呼び出され、`output_index`は順次0と1になります。第3パラメータ`p_evt_id`は、このポート上の下流FMのすべてのイベントIDを保持する配列へのポインタで、配列のサイズは最後のパラメータである`num`です。

`start`と`stop` - は文字通りの意味です。どちらも`p_module`をパラメータとして受け取り、これはFMインスタンス自体へのポインタです。

### 4.1 cfg

```cpp
static int __cfg(void *p_module, cJSON *p_json)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;

    cJSON *output_format = cJSON_GetObjectItem(p_json, "output_format");
    if (output_format == NULL || !cJSON_IsNumber(output_format))
    {
        ESP_LOGE(TAG, "params output_format missing, default 0 (binary output)");
        p_module_ins->output_format = 0;
    } else {
        ESP_LOGI(TAG, "params output_format=%d", output_format->valueint);
        p_module_ins->output_format = output_format->valueint;
    }

    cJSON *include_big_image = cJSON_GetObjectItem(p_json, "include_big_image");
    if (include_big_image == NULL || !cJSON_IsBool(include_big_image))
    {
        ESP_LOGE(TAG, "params include_big_image missing, default false");
        p_module_ins->include_big_image = false;
    } else {
        ESP_LOGI(TAG, "params include_big_image=%s", cJSON_IsTrue(include_big_image)?"true":"false");
        p_module_ins->include_big_image = cJSON_IsTrue(include_big_image);
    }

    cJSON *include_small_image = cJSON_GetObjectItem(p_json, "include_small_image");
    if (include_small_image == NULL || !cJSON_IsBool(include_small_image))
    {
        ESP_LOGE(TAG, "params include_small_image missing, default false");
        p_module_ins->include_small_image = false;
    } else {
        ESP_LOGI(TAG, "params include_small_image=%s", cJSON_IsTrue(include_small_image)?"true":"false");
        p_module_ins->include_small_image = cJSON_IsTrue(include_small_image);
    }

    cJSON *include_boxes = cJSON_GetObjectItem(p_json, "include_boxes");
    if (include_boxes == NULL || !cJSON_IsBool(include_boxes))
    {
        ESP_LOGE(TAG, "params include_boxes missing, default false");
        p_module_ins->include_boxes = false;
    } else {
        ESP_LOGI(TAG, "params include_boxes=%s", cJSON_IsTrue(include_boxes)?"true":"false");
        p_module_ins->include_boxes = cJSON_IsTrue(include_boxes);
    }
    return 0;
}
```

ご覧のとおり、`cfg` 関数は、タスクフローの FM オブジェクトの `params` フィールドから来る cJSON オブジェクトからフィールド値を抽出しているだけです。例えば、以下は `uart alarmer` FM を含むシンプルなタスクフローです。

```json
{
  "tlid": 3,
  "ctd": 3,
  "tn": "Local Human Detection",
  "type": 0,
  "task_flow": [
    {
      "id": 1,
      "type": "ai camera",
      "index": 0,
      "version": "1.0.0",
      "params": {
        "model_type": 1,
        "modes": 0,
        "model": {
          "arguments": {
            "iou": 45,
            "conf": 50
          }
        },
        "conditions": [
          {
            "class": "person",
            "mode": 1,
            "type": 2,
            "num": 0
          }
        ],
        "conditions_combo": 0,
        "silent_period": {
          "silence_duration": 5
        },
        "output_type": 0,
        "shutter": 0
      },
      "wires": [
        [2]
      ]
    },
    {
      "id": 2,
      "type": "alarm trigger",
      "index": 1,
      "version": "1.0.0",
      "params": {
        "text": "human detected",
        "audio": ""
      },
      "wires": [
        [3]
      ]
    },
    {
      "id": 3,
      "type": "uart alarm",
      "index": 2,
      "version": "1.0.0",
      "params": {
        "output_format": 1,
        "include_big_image": false,
        "include_small_image": false
      },
      "wires": []
    }
  ]
}
```

上記のタスクフローにおいて、`uart alarmer`の`params`は

```json
{
  "output_format": 1,
  "include_big_image": false,
  "include_small_image": false
}
```

通常、cJSONを解析し、必要な値を抽出してモジュールインスタンスに格納します。

### 4.2 msgs_sub_set

```cpp
static int __msgs_sub_set(void *p_module, int evt_id)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;
    p_module_ins->input_evt_id = evt_id;
    return tf_event_handler_register(evt_id, __event_handler, p_module_ins);
}
```

上流FMのイベントIDを将来の使用のためにマークし、そのイベントのイベントハンドラーを登録します。

### 4.3 イベントハンドラー

[Watcher Software Framework](https://wiki.seeedstudio.com/ja/watcher_software_framework)で学んだように、データフローはイベントループによって駆動されます。基本的に、FMはイベントハンドラーからデータを受信し、そのデータを消費し、計算を行い、結果を得ます。最終的に、結果をイベントループに投稿する必要があります - ターゲットは、このFMのデータに興味を持つ下流のFMです。

この`uart alarmer`の例では、出力データタイプが`TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT`のアラームトリガーFMからデータを消費します。UARTデータの準備は簡単なので、イベントループハンドラー内ですべてのデータ生成を行います。ただし、データ処理が時間を要する場合やIO集約的な場合は、これは推奨されません。その場合は、バックグラウンド処理を行うワーカータスク（スレッド）を作成する必要があります。

入力パラメータ`output_format`に従って、バイナリ出力バッファまたはJSON文字列を準備します。最終的に、これらのデータをUARTに書き込みます。私たちのFMには、別のFMではなくハードウェアという1つの出力しかないため、`msgs_pub_set`はダミーです。最後に、イベントループから来るデータを解放する必要があります。その理由は次のセクションで説明されます。

### 4.4 msgs_pub_set

この例では、FMに下流のコンシューマーがないため、`msgs_pub_set`はダミーです。`ai camera` FMを例に取ってみましょう。

```cpp
// in tf_module_ai_camera.c
static int __msgs_pub_set(void *p_module, int output_index, int *p_evt_id, int num)
{
    tf_module_ai_camera_t *p_module_ins = (tf_module_ai_camera_t *)p_module;
    __data_lock(p_module_ins);
    if (output_index == 0 && num > 0)
    {
        p_module_ins->p_output_evt_id = (int *)tf_malloc(sizeof(int) * num);
        if (p_module_ins->p_output_evt_id )
        {
            memcpy(p_module_ins->p_output_evt_id, p_evt_id, sizeof(int) * num);
            p_module_ins->output_evt_num = num;
        } else {
            ESP_LOGE(TAG, "Failed to malloc p_output_evt_id");
            p_module_ins->output_evt_num = 0;
        }
    }
    else
    {
        ESP_LOGW(TAG, "Only support output port 0, ignore %d", output_index);
    }
    __data_unlock(p_module_ins);
    return 0;
}
```

複雑ではありませんが、イベントIDをFMインスタンスの構造体に格納するだけです。ここで、FMの型構造体にメンバーフィールドを追加する必要があります。この場合は `tf_module_ai_camera_t` です。

これらのイベントIDをいつ使用するのでしょうか？データが生成され、時間ゲーティングを通過する瞬間です。`ai camera`の例では、データはローカルAI推論を実行するHimax SoCのSPI出力から発生し、いくつかの条件ゲートを通過します。すべての条件が満たされると、データはイベントループに投稿される必要がある時点に到達します。

```cpp
// in tf_module_ai_camera.c
...
                    for (int i = 0; i < p_module_ins->output_evt_num; i++)
                    {
                        tf_data_image_copy(&p_module_ins->output_data.img_small, &info.img);
                        tf_data_inference_copy(&p_module_ins->output_data.inference, &info.inference);

                        ret = tf_event_post(p_module_ins->p_output_evt_id[i], &p_module_ins->output_data, sizeof(p_module_ins->output_data), pdMS_TO_TICKS(100));
                        if( ret != ESP_OK) {
                            ESP_LOGE(TAG, "Failed to post event %d", p_module_ins->p_output_evt_id[i]);
                            tf_data_free(&p_module_ins->output_data);
                        } else {
                            ESP_LOGI(TAG, "Output -> %d", p_module_ins->p_output_evt_id[i]);
                        }
                    }
...
```

出力のすべての購読者に投稿する必要があります。ご覧のとおり、すべての購読者に対してデータのコピーを作成します。

**メモリ割り当てと解放のルール**

- データ作成者FMが各購読者に対してメモリ割り当てを行う
- データ消費者FMがデータ使用後にメモリ解放を行う。

### 4.5 開始と停止

これらはFMのランタイム制御で、将来のフロー一時停止/再開をサポートします。現在、FMはインスタンス化後に実行できますが、FMのライフサイクル管理とFMのランタイム制御にロジックを分離することを推奨します。

## 5. Test

これで`uart alarmer` FMができました。プルリクエストを出す前に、ローカルでテストする方法を説明します。

タスクフローをローカルで発行するコンソールコマンドを実装します。

```shell
SenseCAP> help taskflow
taskflow  [-iej] [-f <string>]
  import taskflow by json string or SD file, eg:taskflow -i -f "test.json".

export taskflow to stdout or SD file, eg: taskflow -e -f "test.json"
  -i, --import  import taskflow
  -e, --export  export taskflow
  -f, --file=<string>  File path, import or export taskflow json string by SD, eg: test.json
    -j, --json  import taskflow json string by stdin
```

[Watcher開発環境の構築](https://wiki.seeedstudio.com/ja/build_watcher_development_environment) - `5. ログ出力の監視`を参照してコンソールを取得してください。スペースと空白文字を削除したタスクフローを準備し、以下でタスクフローを発行してください。

```shell
taskflow -i -j<enter>
Please input taskflow json:
#<paste your task flow json here, for an example>
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3]]},{"id":3,"type":"uart alarm","index":2,"version":"1.0.0","params":{"output_format":1},"wires":[]}]}
```

タスクフローの作成方法は？[Watcher Software Framework](https://wiki.seeedstudio.com/ja/watcher_software_framework)では、すべてのFMとそのパラメータを紹介しました。タスクフローの作成は、Node-REDのように、FMブロック間にワイヤーを描くようなものです。

タスクフローを作成するためのGUIを用意する前に、exportコマンドを使用してサンプルを収集できます。モバイルアプリを使用してローカルアラーム機能（RGBライト）を有効にしたフローを発行し、フローが実行されているときに、以下のコマンドでタスクフローをエクスポートします。

```shell
taskflow -e
```

このコマンドは実行中のタスクフローをコンソールにエクスポートします。タスクフローが非常に長い場合、その出力が他のログによって中断される可能性があります。この場合、TFカードが必要です。TFカードをFAT/exFATファイルシステムにフォーマットし、Watcherに挿入します。これで実行中のタスクフローをTFカードにエクスポートできます。

```shell
taskflow -e -f tf1.json
# only support file name in the root dir
# please don't specify leading dir in the path, the command can't create dir
```

今、例を見たので、アラーマーFM（通常は最後のFM）の1つを変更し、それをあなたの`uart alarmer` FMに置き換え、あなたのFMのJSONオブジェクトにいくつかのパラメータを追加し、JSONエディタを使用して空白を削除し、上記の`taskflow -i -j`コマンドでインポートしてください。

以上です。探索をお楽しみください。

## 付録 - その他のタスクフロー例

ここでは、開始できるいくつかの追加のタスクフロー例を提供します。

```json
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1,"ctd":1,"tn":"Local Gesture Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":3,"modes":0,"model":{"arguments":{"iou":45,"conf":65}},"conditions":[{"class":"paper","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"scissors detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1719396404172,"ctd":1719396419707,"tn":"Man with glasses spotted, notify immediately","task_flow":[{"id":753589649,"type":"ai camera","type_id":0,"index":0,"vision":"0.0.1","params":{"model_type":0,"model":{"model_id":"60086","version":"1.0.0","arguments":{"size":1644.08,"url":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/model/1705306215159_jVQf4u_swift_yolo_nano_person_192_int8_vela(2).tflite","icon":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/pic/1705306138275_iykYXV_detection_person.png","task":"detect","createdAt":1705306231,"updatedAt":null},"model_name":"Person Detection--Swift YOLO","model_format":"tfLite","ai_framework":"6","author":"SenseCraft AI","description":"The model is a Swift-YOLO model trained on the person detection dataset. It can detect human body  existence.","task":1,"algorithm":"Object Dectect(TensorRT,SMALL,COCO)","classes":["person"]},"modes":0,"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"time_period":{"repeat":[1,1,1,1,1,1,1],"time_start":"00:00:00","time_end":"23:59:59"},"silence_duration":60},"output_type":1,"shutter":0},"wires":[[193818631]]},{"id":193818631,"type":"image analyzer","type_id":3,"index":1,"version":"0.0.1","params":{"url":"","header":"","body":{"prompt":"Is there a man with glasses?","type":1,"audio_txt":"Man with glasses"}},"wires":[[420037647,452707375]]},{"id":452707375,"type_id":99,"type":"sensecraft alarm","index":2,"version":"0.0.1","params":{"silence_duration":10,"text":"Man with glasses"},"wires":[]},{"id":420037647,"type_id":5,"type":"local alarm","index":3,"version":"0.0.1","params":{"sound":1,"rgb":1,"img":1,"text":1,"duration":10},"wires":[]}],"type":0}
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
