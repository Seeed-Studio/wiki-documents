---
description: SquareLine Studio と LVGL を使用して、Watcher 用の独自の UI セットを開発する方法を紹介します。
title: Watcher UI 統合ガイド
image: https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.webp
slug: /ja/watcher_ui_integration_guide
sidebar_position: 4
last_update:
  date: 11/5/2024
  author: Citric
---

# Watcher UI 統合ガイド

## 1. **UI コンポーネント構造**

このチュートリアルでは、独自の UI デザインと関連するロジック機能を `view` ディレクトリに統合する方法を学習します。すべての UI デザインとロジック機能は `view` ディレクトリに配置され、このディレクトリには `ui` と `ui_manager` サブディレクトリが含まれています。さらに、`view` ディレクトリには `view.c`、`view_alarm.c`、`view_image_preview.c`、`view_pages.c` と対応する `.h` ヘッダーファイルが含まれています。具体的なフレームワークは以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.png" style={{width:600, height:'auto'}}/></div>

- `ui` サブディレクトリには、すべてのユーザー定義 UI デザインが含まれています。このプロジェクトでは、`ui` は Squareline ツールによって生成されます。

- `ui_manager` サブディレクトリには、カスタムアニメーション、オブジェクトグループ管理、および各種イベントコールバック定義が含まれています。

- `view` で始まるソースファイルは、グローバルページと関連するイベントコールバック関数を定義します。

- UI は、イベントの送信と監視によって APP レイヤーと相互作用します。

:::tip
以下のモジュール定義を読むことで、UI フレームワーク全体を理解し使用するのに役立ちます。UI 統合を素早く把握したい場合は、第6章のアプリケーション読解にスキップできます。
:::

## 2. **グループ管理**

### 2.1 概要

SenseCAP Watcher はタッチスクリーンとエンコーダー入力デバイスをサポートしています。これらの入力デバイスアクションを同期し、正確性を確保するために、正しいオブジェクトにフォーカスを維持し、イベントの競合を回避するためのグループ管理が必要です。

グループ管理機能は以下のファイルで実装されています：

- **pm.c**: 関数実装が含まれています。
- **pm.h**: 関数プロトタイプと型定義が含まれています。

### 2.2 グループへのオブジェクトの追加

```cpp
static void addObjToGroup(GroupInfo *groupInfo, lv_obj_t *objects[], int count);
```

ここで、`groupInfo` は、オブジェクトが追加される `GroupInfo` 構造体へのポインタ、`objects` は、グループに追加されるオブジェクトの配列、`count` は、配列内のオブジェクトの数です。

**使用方法:**

```cpp
// Define the objects to be added to the page
lv_obj_t *example_objects[] = {example_obj1, example_obj2, ...};
// Add the objects to the group structure variable
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 2.3 ページナビゲーションとオブジェクト管理

```cpp
void lv_pm_open_page(lv_group_t *group, 
                      GroupInfo *groupInfo, 
                      pm_operation_t operation, 
                      lv_obj_t **target, 
                      lv_scr_load_anim_t fademode,
                      int spd, 
                      int delay, 
                      void (*target_init)(void));
```

**パラメータ:**

- `group`: LVGL グループへのポインタ。
- `groupInfo`: ページオブジェクトを含む `GroupInfo` 構造体へのポインタ。
- `operation`: 実行する操作（グループにオブジェクトを追加、操作なし、またはグループをクリア）。
- `target`: 新しいページのターゲットオブジェクト。
- `fademode`: 画面読み込みアニメーションモード。
- `spd`: 画面読み込みアニメーションの速度。
- `delay`: 画面読み込みアニメーションが開始するまでの遅延。
- `target_init`: ターゲット画面の初期化関数。

**使用方法:**

```cpp
// Add the objects from the structure variable to the group and navigate to the corresponding page
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

### 2.4 エンコーダーをグループに関連付ける

グループを作成し、入力デバイスを取得するために反復処理を行い、エンコーダーをグループに関連付けることで、エンコーダーがグループ内のオブジェクトを制御できるようにします。

```cpp
void lv_pm_init(void)
{
  // Create a group
  g_main = lv_group_create();
  cur_drv = NULL;
  // Loop to get input devices
  while ((cur_drv = lv_indev_get_next(cur_drv)))
  {
    // Associate the encoder with the group when the input device is an encoder
    if (cur_drv->driver->type == LV_INDEV_TYPE_ENCODER)
    {
      lv_indev_set_group(cur_drv, g_main);
      break;
    }
  }
  // Define objects in different GroupInfo structure variables
  initGroup();
}
```

**使用方法:**

```cpp
// Call in `view_init` to initialize the group and associate the encoder with the group
int view_init(void)
{
  // Note: Any operations on objects in the lvgl task must be performed within a thread lock!
  lvgl_port_lock(0);
  // Initialize UI
  ui_init();
  // Initialize the group and associate the encoder
  lv_pm_init();
  lvgl_port_unlock();
}
```

### 2.5 GroupInfoオブジェクトの印刷

```cpp
static void printGroup(GroupInfo *groupInfo);
```

ここで、`groupInfo` は、オブジェクトが追加される `GroupInfo` 構造体へのポインタです。印刷前に、`lv_obj_set_user_data(example_obj, "example_obj_print")` を使用してオブジェクトの `user_data` を設定する必要があることに注意してください。

**使用方法:**

```cpp
printGroup(&group_page_example);
```

### 2.6 使用例

1. `GroupInfo` 変数を定義する

```cpp
GroupInfo group_page_example;
```

2. `initGroup()` でオブジェクトを初期化する

```cpp
lv_obj_t * example_objects[] = {example_obj1, example_obj2, ...};
```

3. オブジェクトをグループに追加する

```cpp
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

4. ページを開いてグループを追加する

```cpp
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

これらの手順に従うことで、タッチスクリーンとエンコーダー入力がアプリケーションで同期的かつ正確に動作することを確保できます。

## 3. デバイスアラーム

### 3.1 概要

このセクションでは、WatcherでアラームUIコンポーネントを統合し使用する方法について説明します。以下の機能を理解し使用することで、デバイスのUIアラーム動作を管理できます。

アラームUIは以下のファイルで実装されています：

- **view_alarm.c**: 関数の実装が含まれています。
- **view_alarm.h**: 関数プロトタイプと型定義が含まれています。

### 3.2 アラームUIの初期化

```cpp
int view_alarm_init(lv_obj_t *ui_screen);
```

`ui_screen` はアラーム UI コンポーネントを表示するために使用される画面オブジェクトへのポインタです。

**使用方法:**

```cpp
// Create alarm-related UI on the top layer
view_alarm_init(lv_layer_top());
```

### 3.3 アラームUIをオンにする

```cpp
int view_alarm_on(struct tf_module_local_alarm_info *alarm_st);
```

`alarm_st` は `tf_module_local_alarm_info` 構造体へのポインタで、`アラームの継続時間`、`テキストと画像を表示するかどうか`、`テキストと画像の具体的な内容` などのアラーム関連情報を含んでいます。

**使用方法:**

```cpp
struct tf_module_local_alarm_info info;
view_alarm_on(&info);
```

### 3.4 アラームUIをオフにする

```cpp
void view_alarm_off();
```

**使用方法:**

```cpp
// Hide the alarm-related UI, set corresponding flags, or execute page transition logic
view_alarm_off();
```

## 4. AI推論リアルタイム画像レンダリング

### 4.1 概要

このセクションでは、デバイス上で画像をデコードし、LVGLで表示する方法について説明します。

この機能は以下のファイルで実装されています：

- **view_image_preview.c**: 関数の実装が含まれています。
- **view_image_preview.h**: 関数のプロトタイプと型定義が含まれています。

### 4.2 画像プレビュー機能の初期化

```cpp
int view_image_preview_init(lv_obj_t *ui_screen);
```

`ui_screen` は、リアルタイムプレビューを表示するために使用されるスクリーンオブジェクトへのポインタです。この関数は、JPEGデコーダを初期化し、メモリを割り当て、ターゲット検出ボックスや分類名などのAI推論結果をレンダリングするためのいくつかのUIオブジェクトを作成します。

**使用方法:**

```cpp
// Create image preview UI on the ViewLive page
view_image_preview_init(ui_Page_ViewLive);
```

### 4.3 プレビュー画像の更新

```cpp
int view_image_preview_flush(struct tf_module_ai_camera_preview_info *p_info);
```

`p_info` は `tf_module_ai_camera_preview_info` 構造体へのポインタで、画像とAIモデル推論情報を含んでいます。

**使用方法:**

```cpp
struct tf_module_ai_camera_preview_info info;
view_image_preview_flush(&info);
```

## 5. UI メッセージイベント定義

### 5.1 概要

デバイスのフロントエンド UI は、バックエンド APP タスクと相互作用する必要があります。特定のイベントをリッスンして消費することで、様々な UI 更新とページ遷移ロジックを実現できます。ESP32 イベント処理の詳細情報については、Espressif の公式ドキュメントの `Event Loop Library` セクションを参照してください。

UI メッセージイベント処理は以下のファイルで実装されています：

- **view.c**: 関数実装を含みます。
- **view.h**: 関数プロトタイプと型定義を含みます。
- **data_defs.h**: 様々なイベント ID（フロントエンドとバックエンドの両方）の列挙宣言を含みます。

### 5.2 UI イベント処理関数

```cpp
esp_err_t esp_event_handler_instance_register_with( esp_event_loop_handle_t event_loop, 
                                                    esp_event_base_t event_base, 
                                                    int32_t event_id, 
                                                    esp_event_handler_t event_handler, 
                                                    void * event_handler_arg, 
                                                    esp_event_handler_instance_t * instance ) 
```

**パラメータ:**

- `event_loop`: このハンドラ関数が登録されるイベントループ；NULLにはできません。
- `event_base`: ハンドラを登録するイベントのベースID。
- `event_id`: ハンドラを登録するイベントのID。
- `event_handler`: イベントがディスパッチされたときに呼び出されるハンドラ関数。
- `event_handler_arg`: イベントデータに加えてハンドラ関数に渡される引数。
- `instance`: 登録されたハンドラとデータに関連付けられたイベントハンドラインスタンスオブジェクト；NULLにできます。

### 5.3 使用方法

#### 1. イベントの宣言と定義、および特定のループへのUIイベントハンドラインスタンスの登録

```cpp
// Declaration and definition of VIEW event base
ESP_EVENT_DECLARE_BASE(VIEW_EVENT_BASE);
esp_event_loop_handle_t app_event_loop_handle;
// Declare event IDs as an enumeration; in the SenseCAP-Watcher project, this is placed in data_defs.h
enum {
    VIEW_EVENT_EXAMPLE
}
// Register instance
ESP_ERROR_CHECK(esp_event_handler_instance_register_with(app_event_loop_handle, 
                                                            VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, 
                                                            __view_event_handler, NULL, NULL));
```

#### 2. UIメッセージイベント処理

```cpp
static void __view_event_handler(void* handler_args, esp_event_base_t base, int32_t id, void* event_data)
{
  // Acquire lvgl thread lock
  lvgl_port_lock(0);
  if (base == VIEW_EVENT_BASE) {
    switch (id) {
      // Custom event
      case VIEW_EVENT_EXAMPLE: {
        ESP_LOGI("ui_event", "VIEW_EVENT_EXAMPLE");
        // Execute corresponding logic based on the received event
        break;
      }
    }
  }
  // Release lvgl thread lock
  lvgl_port_unlock();
}
```

#### 3. UIメッセージイベントの送信

```cpp
// Send event to trigger corresponding logic
esp_event_post_to(app_event_loop_handle, VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, NULL, 0, pdMS_TO_TICKS(10000));
```

## 6. アプリケーション

ここでは、上記で紹介した機能を使用して、簡単なUIの例をSenseCAP Watcherデバイスに統合します。これには、UI設計のためのSquarelineの使用、UIコールバックイベントの定義、オブジェクトグループの管理などが含まれます。

### 6.1 SquarelineでのUIオブジェクトとコールバック関数の作成

Squarelineでボタンを作成し、その名前とスタイルを設定し、各ボタンにコールバック関数を割り当てます。`Events`セクションで`ADD EVENT`をクリックし、イベントのトリガータイプを選択し、コールバック関数に名前を付けます。これでUIオブジェクトとその関連コールバック関数の作成が完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img1.png" style={{width:800, height:'auto'}}/></div>

### 6.2 Squarelineからの`ui`プロジェクトのエクスポート

アプリケーションで、ナビゲーションバーの`File` -> `Project Settings`を選択し、`UI Files Export Path`を`project_path/ui`に設定します。ここで`project_path`はSquarelineプロジェクトのパスです。これによりUI設計のエクスポートパスが設定されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img2.png" style={{width:600, height:'auto'}}/></div>

次に、ナビゲーションバーで`Export` -> `Export UI Files`をクリックして、すべてのUI設計を含むディレクトリフォルダをエクスポートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img3.png" style={{width:500, height:'auto'}}/></div>

### 6.3 ヘッダーファイルで宣言されたコールバック関数の実装

`ui`フォルダをSenseCAP Watcherプロジェクトにインポートし、`ui`フォルダの`ui_events.h`で宣言された関数を開いて参照し、`ui_manager`フォルダの`ui_events.c`でこれらの関数を実装して、これらのコールバック関数のロジックを完成させます。

例えば、`ui_events.h`では：

```cpp
void btn1click_cb(lv_event_t * e);
void btn2click_cb(lv_event_t * e);
void btn3click_cb(lv_event_t * e);
```

そして、`ui_events.c` のコードは次のようになります：

```cpp
void btn1click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn1click_cb");
    // Define the logic for this object when the clicked event is triggered
}

void btn2click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn2click_cb");
    // Define the logic for this object when the clicked event is triggered
}

void btn3click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn3click_cb");
    // Define the logic for this object when the clicked event is triggered
}
```

### 6.4 構造体変数へのオブジェクトの追加

このステップでは、エンコーダーと作成されたグループを管理する必要があります。グループへのオブジェクトの追加と削除により、エンコーダーがオブジェクトを制御できるようになります。

```cpp
// Define a GroupInfo variable
GroupInfo group_page_example;
// Initialize objects in initGroup()
lv_obj_t * example_objects[] = {ui_Button1, ui_Button2, ui_Button3};
// Add objects to the structure variable to facilitate adding objects to the group in different pages
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 6.5 UI初期化

`view.c`の`view_init`で`ui_init`を呼び出してUIを初期化します。これにより、lvglタスクスレッドが実行されるときに、設計されたUIをロードできます。デフォルトでロードされるページは、Squarelineで設計された最初のページです。

```cpp
int view_init(void)
{
  // Note: Any operations on objects in the lvgl task must be performed within a thread lock!
  lvgl_port_lock(0);

  ui_init();
  lv_pm_init();
  // There are two ways to add objects to the group
  // First: Clear the objects in the group and add them to the group one by one
  lv_group_remove_all_objs(g_example);
  lv_group_add_obj(ui_Button1);
  lv_group_add_obj(ui_Button2);
  lv_group_add_obj(ui_Button3);

  // Second: Add the corresponding objects to the group through the page transition function:
  lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);

  lvgl_port_unlock();

  // Other initialization code
}
```

### 6.6 実行効果の確認

これで、プロジェクトにUIの統合を簡単に実装できました。次に、コードをコンパイルしてWatcherに書き込み、実行効果を確認してみましょう！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img4.png" style={{width:500, height:'auto'}}/></div>

上図のように、タッチスクリーンやホイールを使用してページ上のボタンをクリックすることで、シリアルデバッグアシスタントで対応するオブジェクトがコールバックイベントをトリガーしているのを確認でき、コールバック関数が正常に動作していることがわかります！

## 7. SquareLineプロジェクト

SenseCAP-Watcherのほとんどのページは、Squarelineを使用して作成されています。Squarelineツールを使用すると、Watcher内のさまざまなページオブジェクトのスタイルを簡単かつ迅速に変更できます。そのため、UI開発と反復にはSquarelineの使用を強く推奨します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img5.png" style={{width:800, height:'auto'}}/></div>

上図のように、ツール内のページはナビゲーションロジックに従って配置されています。隣接するページは、ボタンやその他のトリガー可能なオブジェクトを通じてナビゲートできます。対応するページとオブジェクトをクリックして定義されたイベントを表示でき、異なるページとオブジェクトのスタイルを変更してAIアシスタントをカスタマイズするのが非常に簡単です！ただし、現在のページで定義されているオブジェクトとコールバックイベントは、WatcherのAPP層機能にバインドされていることに注意してください。これらを変更すると、Watcherの正常な動作に影響を与える可能性があります。Watcherの正常な機能を確保するため、色やサイズなどのオブジェクトのスタイルのみを変更することを推奨します。

## 8. ファイル説明

- [`ui_intergration_demo\SenseCAP-Watcher_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/SenseCAP-Watcher_example) フォルダには、SenseCAP-Watcherの完全なSquarelineプロジェクトが含まれており、ほぼすべてのUIリソース設計が含まれています。

- [`ui_intergration_demo\ui_intergration_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/ui_intergration_example) フォルダには、アプリケーション章の例のSquarelineプロジェクトが含まれています。

- [`ui_intergration_demo\view`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/view) フォルダには、アプリケーション章の例の `view` コンポーネントが含まれています。プロジェクト内の元の `view` を直接置き換えることで例を使用できます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
