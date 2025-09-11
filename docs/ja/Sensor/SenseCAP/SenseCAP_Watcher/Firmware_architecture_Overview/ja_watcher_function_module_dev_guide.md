---
description: Watcher機能モジュールの開発方法を説明します。
title: Watcher機能モジュール開発ガイド
image: https://files.seeedstudio.com/wiki/watcher_software_framework/watcher_function_module.webp
slug: /ja/watcher_function_module_development_guide
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher機能モジュール開発ガイド

まずは[Watcherソフトウェアフレームワーク](https://wiki.seeedstudio.com/ja/watcher_software_framework)を読んで、機能モジュールがどのように動作するかを理解することをお勧めします。

このドキュメントでは、新しい機能モジュールを開発するためのステップバイステップガイドを示します。例として`UART Alarm`モジュールを取り上げます。

## 1. インストールと初回ビルド

[Watcher開発環境の構築](https://wiki.seeedstudio.com/ja/build_watcher_development_environment)の手順をスキップした場合は、まずその手順を実行してください。

```shell
# 現在のディレクトリは PROJ_ROOT_DIR/examples/factory_firmware/ です
cd main/task_flow_module
```

## 2. 適切なテンプレートを選択

[Watcherソフトウェアフレームワーク](https://wiki.seeedstudio.com/ja/watcher_software_framework)では、既存の機能モジュール（以下、**FM**と略します）とその用途について紹介しました。新しいFMを開発する際には、既存のFMの中から最も近いものを参考にするのが良いでしょう。このチュートリアルではアラームFMを開発するので、最もシンプルなアラームFMである`local alarmer`を選択します。

```shell
cp tf_module_local_alarm.h tf_module_uart_alarm.h
cp tf_module_local_alarm.c tf_module_uart_alarm.c
```

ファイル名は何でも構いませんが、ビルドシステムによって`.h`および`.c`ファイルがスキャンされ、コンパイルコードツリーに取り込まれます。ただし、意味のあるファイル名を付けることをお勧めします。

## 3. 登録の実装

**TFE**（タスクフローエンジン）は、新しいFMを登録するためのAPI関数を提供します。

```cpp
esp_err_t tf_module_register(const char *p_name,
                                const char *p_desc,
                                const char *p_version,
                                tf_module_mgmt_t *mgmt_handle);
```

最初の3つのパラメータは、FMの名前、説明、バージョンです。これらは現在内部的に使用されており、例えば登録テーブルからFMを一致させたり、ログを出力したりしますが、将来的にはFMがローカルサービスと通信する際に使用される予定です。

```cpp
// tf_module_uart_alarm.h内
#define TF_MODULE_UART_ALARM_NAME "uart alarm"
#define TF_MODULE_UART_ALARM_VERSION "1.0.0"
#define TF_MODULE_UART_ALARM_DESC "uart alarm function module"

// tf_module_uart_alarm.c内
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
// tf_module.h内
typedef struct tf_module_mgmt {
    tf_module_t *(*tf_module_instance)(void);
    void (*tf_module_destroy)(tf_module_t *p_module);
}tf_module_mgmt_t;
```

`tf_module_instance`は、TFEがタスクフロー内で指定されたすべてのFMを初期化する際に呼び出される関数です。基本的には、エンジンがタスクフロー作成リクエストを受信し、フローを開始していることを意味します。`tf_module_destroy`は、TFEがフローを停止する際に呼び出される関数です。

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
        // 初回インスタンス化時にハードウェアを初期化する必要があります
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

上記は`instance`関数の実装例です。この関数では、FMのパラメータを保持するために定義された構造体`tf_module_uart_alarm_t`のメモリを割り当てます。これはC++クラスのメンバーのようなものです。構造体`tf_module_uart_alarm_t`の最初のフィールドは重要で、`tf_module_t module_base`です。C++プログラミングの観点から見ると、`tf_module_t`はすべてのFMの親クラスに相当します。この`instance`関数は、TFEに`tf_module_t`構造体へのポインタを提供します。

```cpp
// tf_module_uart_alarm.h内
typedef struct {
    tf_module_t module_base;
    int input_evt_id;           // これもモジュールインスタンスIDとして使用可能
    int output_format;          // デフォルトは0、上記コメント参照
    bool include_big_image;     // デフォルト: false
    bool include_small_image;   // デフォルト: false
    bool include_boxes;         // デフォルト: false、近日対応予定
} tf_module_uart_alarm_t;

// tf_module_uart_alarm.c内
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    return &p_module_ins->module_base;
    ...
}
```

`tf_module_t`の2つのメンバーを割り当てる必要があります。

```cpp
// tf_module_uart_alarm.c内
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    p_module_ins->module_base.p_module = p_module_ins;
    p_module_ins->module_base.ops = &__g_module_ops;
```

`p_module` - FMインスタンス自体を参照するポインタ。このポインタは、`destroy`関数がインスタンスのハンドラを取得し、そのメモリを解放するために使用されます。  
`ops` - TFEがFMを操作するためのAPI関数を含む構造体。これについては後述します。

インスタンス関数の残りの部分は、ハードウェアの初期化と、FM（機能モジュール）のロジックに関連する処理を行います。

特筆すべき点として、FMは複数回インスタンス化される可能性があります。そのため、`instance`関数の再呼び出しを処理する必要があります。もしFMが複数インスタンスをサポートしていない場合、`instance`関数の2回目以降の呼び出しではNULLポインタを返す必要があります。

この`uart alarmer`の例では、参照カウンタを使用して再呼び出しのロジックを処理します。

```cpp
if (atomic_fetch_add(&g_ins_cnt, 1) == 0) {
        // 初回のインスタンス化時にハードウェアを初期化する必要があります
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

### 3.2 破棄（Destroy）

```cpp
void tf_module_uart_alarm_destroy(tf_module_t *p_module_base)
{
    if (p_module_base) {
        if (atomic_fetch_sub(&g_ins_cnt, 1) <= 1) {
            // 最後の破棄呼び出し時にUARTを非初期化する
            uart_driver_delete(UART_NUM_2);
            ESP_LOGI(TAG, "uart driver is deleted.");
        }
        if (p_module_base->p_module) {
            free(p_module_base->p_module);
        }
    }
}
```

`destroy`関数は常にシンプルです 😂 メモリを解放し、必要に応じてハードウェアを非初期化するだけです。

## 4. 操作の実装

親クラスの`ops`メンバーは以下のように定義されています。

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

- `cfg` - タスクフローJSONからパラメータを取得し、それらを使用してFMを設定します。
- `msgs_sub_set` - 上流FMとの接続を作成します。これは、上流FMのイベントIDにイベントハンドラを登録することで行います。入力パラメータ`evt_id`は、タスクフローJSONから抽出されたものをTFEが準備します。最初のパラメータ`p_module`はFMインスタンス自体へのポインタです。
- `msgs_pub_set` - 下流FMへの接続を保存します。このFMに出力がない場合、この関数は空のままにできます。最初のパラメータ`p_module`はFMインスタンス自体へのポインタです。2番目のパラメータ`output_index`はポート番号を示します。例えば、このFMが2つの出力を持つ場合、`msgs_pub_set`は2回呼び出され、それぞれ`output_index`が0と1になります。3番目のパラメータ`p_evt_id`は、このポート上の下流FMのすべてのイベントIDを保持する配列へのポインタです。この配列のサイズは最後のパラメータ`num`で指定されます。
- `start`と`stop` - 文字通りの意味です。どちらも`p_module`をパラメータとして受け取り、これはFMインスタンス自体へのポインタです。

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

ご覧の通り、`cfg`関数はタスクフローのFMオブジェクトの`params`フィールドから渡されるcJSONオブジェクトからフィールド値を抽出するだけです。例えば、以下は`uart alarmer` FMを含む簡単なタスクフローです。

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

上記のタスクフローにおいて、`uart alarmer` の `params` は以下の通りです：

```json
{
  "output_format": 1,
  "include_big_image": false,
  "include_small_image": false
}
```

cJSON を解析し、必要な値を抽出してモジュールインスタンスに通常保存します。

### 4.2 msgs_sub_set

```cpp
static int __msgs_sub_set(void *p_module, int evt_id)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;
    p_module_ins->input_evt_id = evt_id;
    return tf_event_handler_register(evt_id, __event_handler, p_module_ins);
}
```

上流の FM のイベント ID を記録して将来使用できるようにし、イベントハンドラーをそのイベントに登録します。

### 4.3 イベントハンドラー

[Watcher Software Framework](https://wiki.seeedstudio.com/ja/watcher_software_framework) では、データフローがイベントループによって駆動されることを学びました。基本的に、FM はイベントハンドラーからデータを受け取り、そのデータを消費し、計算を行い、結果を得ます。そして、最終的にその結果をイベントループに投稿する必要があります。ターゲットは、この FM のデータに関心を持つ下流の FM です。

この `uart alarmer` の例では、`TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT` 型の出力データを持つアラームトリガー FM からデータを消費します。UART データ準備が簡単であるため、すべてのデータ生成をイベントループハンドラー内で行います。ただし、これは推奨されません。データ処理が時間を要する場合や IO を多く消費する場合は、バックグラウンド処理を行うワーカータスク（スレッド）を作成する必要があります。

入力パラメータ `output_format` に応じて、バイナリ出力バッファまたは JSON 文字列を準備します。最終的にこれらのデータを UART に書き込みます。この FM の出力はハードウェアのみであり、他の FM ではないため、`msgs_pub_set` はダミーです。最後に、イベントループから来たデータを解放する必要があります。その理由は次のセクションで説明します。

### 4.4 msgs_pub_set

この例では、`msgs_pub_set` はダミーです。なぜなら、この FM には下流の消費者がいないからです。`ai camera` FM を例にとってみましょう。

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

これは複雑ではなく、イベント ID を FM インスタンスの構造に保存するだけです。この場合、`tf_module_ai_camera_t` の型構造にメンバーフィールドを追加する必要があります。

これらのイベント ID をいつ使用するのでしょうか？データが生成され、時間ゲートを通過する瞬間です。`ai camera` の例では、データはローカル AI 推論を実行する Himax SoC の SPI 出力から発生し、いくつかの条件ゲートを通過します。すべての条件が満たされると、データはイベントループに投稿される必要がある時点に到達します。

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

出力のすべてのサブスクライバーに投稿する必要があります。ご覧の通り、各サブスクライバーのデータをコピーしています。

**メモリ割り当てと解放のルール**
- データ生成 FM は各サブスクライバーのためにメモリを割り当てます。
- データ消費 FM はデータを使い終わった後にメモリを解放します。

### 4.5 開始と停止

これらは FM のランタイム制御であり、将来的にフローパウズ/再開をサポートするためのものです。現在のところ、FM をインスタンス化した後に実行することができますが、FM のライフサイクル管理と FM のランタイム制御にロジックを分割することを推奨します。

## 5. テスト

現在、`uart alarmer` FM を作成しました。プルリクエストを送る前に、ローカルでどのようにテストできるでしょうか。

ローカルでタスクフローを実行するためのコンソールコマンドを実装します。

```shell
SenseCAP> help taskflow
taskflow  [-iej] [-f <string>]
  タスクフローを JSON 文字列または SD ファイルからインポートします。例: taskflow -i -f "test.json"

タスクフローを標準出力または SD ファイルにエクスポートします。例: taskflow -e -f "test.json"
  -i, --import  タスクフローをインポート
  -e, --export  タスクフローをエクスポート
  -f, --file=<string>  ファイルパス。SD を使用してタスクフロー JSON 文字列をインポートまたはエクスポートします。例: test.json
    -j, --json  標準入力からタスクフロー JSON 文字列をインポート
```

[ウォッチャー開発環境の構築](https://wiki.seeedstudio.com/ja/build_watcher_development_environment) - `5. ログ出力の監視` を参照してコンソールを取得してください。スペースや空白文字を削除したタスクフローを準備し、以下のようにタスクフローを実行します。

```shell
taskflow -i -j<enter>
Please input taskflow json:
#<ここにタスクフロー JSON を貼り付けます。例として以下を使用>
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3]]},{"id":3,"type":"uart alarm","index":2,"version":"1.0.0","params":{"output_format":1},"wires":[]}]}
```

タスクフローをどのように作成するか？[ウォッチャーソフトウェアフレームワーク](https://wiki.seeedstudio.com/ja/watcher_software_framework) では、各 FM とそのパラメータを紹介しています。タスクフローの作成は、Node-RED のように FM ブロック間にワイヤーを引くようなものです。

タスクフローを作成するための GUI が用意される前に、エクスポートコマンドを使用して例を収集できます。モバイルアプリを使用してローカルアラーム機能（RGB ライト）が有効なフローを実行し、そのフローが実行中に以下のコマンドでタスクフローをエクスポートします。

```shell
taskflow -e
```

このコマンドは、実行中のタスクフローをコンソールにエクスポートします。タスクフローが非常に長い場合、他のログによって出力が中断される可能性があります。この場合、TF カードが必要です。TF カードを FAT/exFAT ファイルシステムにフォーマットし、ウォッチャーに挿入します。次に、実行中のタスクフローを TF カードにエクスポートします。

```shell
taskflow -e -f tf1.json
# ルートディレクトリ内のファイル名のみサポート
# パスに先頭ディレクトリを指定しないでください。このコマンドはディレクトリを作成できません
```

これで例が手に入りました。アラーマー FM の 1 つ（通常は最後の FM）を変更し、それを `uart alarmer` FM に置き換えます。FM の JSON オブジェクトにいくつかのパラメータを追加し、JSON エディタを使用して空白を削除し、上記の `taskflow -i -j` コマンドでインポートします。

これで完了です。探索をお楽しみください。

## 付録 - その他のタスクフロー例

以下に、開始するためのいくつかのタスクフロー例を提供します。

```json
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1,"ctd":1,"tn":"Local Gesture Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":3,"modes":0,"model":{"arguments":{"iou":45,"conf":65}},"conditions":[{"class":"paper","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"scissors detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1719396404172,"ctd":1719396419707,"tn":"Man with glasses spotted, notify immediately","task_flow":[{"id":753589649,"type":"ai camera","type_id":0,"index":0,"vision":"0.0.1","params":{"model_type":0,"model":{"model_id":"60086","version":"1.0.0","arguments":{"size":1644.08,"url":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/model/1705306215159_jVQf4u_swift_yolo_nano_person_192_int8_vela(2).tflite","icon":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/pic/1705306138275_iykYXV_detection_person.png","task":"detect","createdAt":1705306231,"updatedAt":null},"model_name":"Person Detection--Swift YOLO","model_format":"tfLite","ai_framework":"6","author":"SenseCraft AI","description":"The model is a Swift-YOLO model trained on the person detection dataset. It can detect human body  existence.","task":1,"algorithm":"Object Dectect(TensorRT,SMALL,COCO)","classes":["person"]},"modes":0,"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"time_period":{"repeat":[1,1,1,1,1,1,1],"time_start":"00:00:00","time_end":"23:59:59"},"silence_duration":60},"output_type":1,"shutter":0},"wires":[[193818631]]},{"id":193818631,"type":"image analyzer","type_id":3,"index":1,"version":"0.0.1","params":{"url":"","header":"","body":{"prompt":"Is there a man with glasses?","type":1,"audio_txt":"Man with glasses"}},"wires":[[420037647,452707375]]},{"id":452707375,"type_id":99,"type":"sensecraft alarm","index":2,"version":"0.0.1","params":{"silence_duration":10,"text":"Man with glasses"},"wires":[]},{"id":420037647,"type_id":5,"type":"local alarm","index":3,"version":"0.0.1","params":{"sound":1,"rgb":1,"img":1,"text":1,"duration":10},"wires":[]}],"type":0}
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なるご要望やお好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>