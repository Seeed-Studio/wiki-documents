---
description: SquareLine StudioとLVGLを活用して、Watcher用の独自のUIを開発する方法を紹介します。
title: Watcher UI 統合ガイド
image: https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.webp
slug: /ja/watcher_ui_integration_guide
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher UI 統合ガイド

## 1. **UI コンポーネント構造**

このチュートリアルでは、独自のUIデザインと関連するロジック関数を`view`ディレクトリに統合する方法を学びます。すべてのUIデザインとロジック関数は`view`ディレクトリに配置され、このディレクトリには`ui`および`ui_manager`サブディレクトリが含まれます。また、`view`ディレクトリには`view.c`、`view_alarm.c`、`view_image_preview.c`、`view_pages.c`および対応する`.h`ヘッダーファイルが含まれています。具体的なフレームワークは以下の図の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.png" style={{width:600, height:'auto'}}/></div>

- `ui`サブディレクトリには、すべてのユーザー定義のUIデザインが含まれています。このプロジェクトでは、`ui`はSquarelineツールによって生成されます。

- `ui_manager`サブディレクトリには、カスタムアニメーション、オブジェクトグループ管理、およびさまざまなイベントコールバック定義が含まれています。

- `view`で始まるソースファイルは、グローバルページと関連するイベントコールバック関数を定義します。

- UIは、イベントの送信とリスニングを通じてAPP層と連携します。

:::tip
以下のモジュール定義を読むことで、UIフレームワーク全体を理解し使用するのに役立ちます。UI統合をすばやく把握したい場合は、第6章にスキップしてアプリケーションの読み取りを行うことができます。
:::

## 2. **グループ管理**

### 2.1 概要

SenseCAP Watcherは、タッチスクリーンとエンコーダ入力デバイスをサポートしています。これらの入力デバイスの動作を同期させ、正確性を確保するために、グループ管理が必要です。これにより、正しいオブジェクトにフォーカスを維持し、イベントの競合を回避します。

グループ管理機能は以下のファイルで実装されています：

- **pm.c**: 関数の実装を含みます。
- **pm.h**: 関数プロトタイプと型定義を含みます。

### 2.2 オブジェクトをグループに追加する

```cpp
static void addObjToGroup(GroupInfo *groupInfo, lv_obj_t *objects[], int count);
```

ここで、`groupInfo`はオブジェクトを追加する`GroupInfo`構造体へのポインタ、`objects`はグループに追加するオブジェクトの配列、`count`は配列内のオブジェクトの数を表します。

**使用例:**

```cpp
// ページに追加するオブジェクトを定義
lv_obj_t *example_objects[] = {example_obj1, example_obj2, ...};
// オブジェクトをグループ構造体変数に追加
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 2.3 ページ遷移とオブジェクト管理

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
- `group`: LVGLグループへのポインタ。
- `groupInfo`: ページオブジェクトを含む`GroupInfo`構造体へのポインタ。
- `operation`: 実行する操作（グループへのオブジェクト追加、操作なし、またはグループのクリア）。
- `target`: 新しいページのターゲットオブジェクト。
- `fademode`: 画面ロードアニメーションモード。
- `spd`: 画面ロードアニメーションの速度。
- `delay`: 画面ロードアニメーション開始前の遅延。
- `target_init`: ターゲット画面の初期化関数。

**使用例:**

```cpp
// 構造体変数からオブジェクトをグループに追加し、対応するページに遷移
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

### 2.4 エンコーダとグループの関連付け

グループを作成し、入力デバイスを取得して反復処理を行い、エンコーダをグループに関連付けることで、エンコーダがグループ内のオブジェクトを制御できるようにします。

```cpp
void lv_pm_init(void)
{
  // グループを作成
  g_main = lv_group_create();
  cur_drv = NULL;
  // 入力デバイスを取得するためにループ
  while ((cur_drv = lv_indev_get_next(cur_drv)))
  {
    // 入力デバイスがエンコーダの場合、グループに関連付け
    if (cur_drv->driver->type == LV_INDEV_TYPE_ENCODER)
    {
      lv_indev_set_group(cur_drv, g_main);
      break;
    }
  }
  // 異なるGroupInfo構造体変数内のオブジェクトを定義
  initGroup();
}
```

**使用例:**

```cpp
// `view_init`内で呼び出し、グループを初期化しエンコーダを関連付け
int view_init(void)
{
  // 注意: lvglタスク内のオブジェクト操作はスレッドロック内で実行する必要があります！
  lvgl_port_lock(0);
  // UIを初期化
  ui_init();
  // グループを初期化しエンコーダを関連付け
  lv_pm_init();
  lvgl_port_unlock();
}
```

### 2.5 GroupInfoオブジェクトの出力

```cpp
static void printGroup(GroupInfo *groupInfo);
```

ここで、`groupInfo`はオブジェクトを追加する`GroupInfo`構造体へのポインタです。出力前に、`lv_obj_set_user_data(example_obj, "example_obj_print")`を使用してオブジェクトの`user_data`を設定する必要があります。

**使用例:**

```cpp
printGroup(&group_page_example);
```

### 2.6 使用例

1. `GroupInfo`変数を定義

```cpp
GroupInfo group_page_example;
```

2. `initGroup()`内でオブジェクトを初期化

```cpp
lv_obj_t * example_objects[] = {example_obj1, example_obj2, ...};
```

3. オブジェクトをグループに追加

```cpp
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

4. ページを開き、グループを追加

```cpp
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

これらの手順に従うことで、タッチスクリーンとエンコーダ入力がアプリケーション内で同期的かつ正確に動作するようになります。

## 3. デバイスアラーム

### 3.1 概要

このセクションでは、Watcher におけるアラーム UI コンポーネントの統合と使用方法について説明します。以下の関数を理解し使用することで、デバイスの UI アラーム動作を管理できます。

アラーム UI は以下のファイルで実装されています：

- **view_alarm.c**: 関数の実装を含む。
- **view_alarm.h**: 関数プロトタイプと型定義を含む。

### 3.2 アラーム UI の初期化

```cpp
int view_alarm_init(lv_obj_t *ui_screen);
```

`ui_screen` はアラーム UI コンポーネントを表示するために使用されるスクリーンオブジェクトへのポインタです。

**使用例:**

```cpp
// 最上層にアラーム関連の UI を作成
view_alarm_init(lv_layer_top());
```

### 3.3 アラーム UI をオンにする

```cpp
int view_alarm_on(struct tf_module_local_alarm_info *alarm_st);
```

`alarm_st` は `tf_module_local_alarm_info` 構造体へのポインタであり、アラームに関連する情報（アラームの持続時間、テキストや画像を表示するかどうか、テキストや画像の具体的な内容など）を含みます。

**使用例:**

```cpp
struct tf_module_local_alarm_info info;
view_alarm_on(&info);
```

### 3.4 アラーム UI をオフにする

```cpp
void view_alarm_off();
```

**使用例:**

```cpp
// アラーム関連の UI を非表示にし、対応するフラグを設定するか、ページ遷移ロジックを実行
view_alarm_off();
```


## 4. AI 推論リアルタイム画像レンダリング

### 4.1 概要

このセクションでは、デバイス上で画像をデコードし、LVGL に表示する方法について説明します。

この機能は以下のファイルで実装されています：
- **view_image_preview.c**: 関数の実装を含む。
- **view_image_preview.h**: 関数プロトタイプと型定義を含む。

### 4.2 画像プレビュー機能の初期化

```cpp
int view_image_preview_init(lv_obj_t *ui_screen);
```

`ui_screen` はリアルタイムプレビューを表示するために使用されるスクリーンオブジェクトへのポインタです。この関数は JPEG デコーダを初期化し、メモリを割り当て、AI 推論結果（ターゲット検出ボックスや分類名など）をレンダリングするための UI オブジェクトを作成します。

**使用例:**

```cpp
// ViewLive ページに画像プレビュー UI を作成
view_image_preview_init(ui_Page_ViewLive);
```

### 4.3 プレビュー画像の更新

```cpp
int view_image_preview_flush(struct tf_module_ai_camera_preview_info *p_info);
```

`p_info` は `tf_module_ai_camera_preview_info` 構造体へのポインタであり、画像および AI モデル推論情報を含みます。

**使用例:**

```cpp
struct tf_module_ai_camera_preview_info info;
view_image_preview_flush(&info);
```

## 5. UI メッセージイベント定義

### 5.1 概要

デバイスのフロントエンド UI はバックエンドの APP タスクと連携する必要があります。特定のイベントをリッスンし消費することで、さまざまな UI 更新やページ遷移ロジックを実現できます。ESP32 のイベント処理に関する詳細情報は、Espressif の公式ドキュメントの `Event Loop Library` セクションを参照してください。

UI メッセージイベント処理は以下のファイルで実装されています：

- **view.c**: 関数の実装を含む。
- **view.h**: 関数プロトタイプと型定義を含む。
- **data_defs.h**: フロントエンドおよびバックエンドのさまざまなイベント ID の列挙宣言を含む。

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
- `event_loop`: このハンドラ関数が登録されるイベントループ。NULL ではない必要があります。
- `event_base`: ハンドラを登録するイベントのベース ID。
- `event_id`: ハンドラを登録するイベントの ID。
- `event_handler`: イベントがディスパッチされたときに呼び出されるハンドラ関数。
- `event_handler_arg`: イベントデータに加えてハンドラ関数に渡される引数。
- `instance`: 登録されたハンドラおよびデータに関連付けられたイベントハンドラインスタンスオブジェクト。NULL にすることができます。

### 5.3 使用例

#### 1. イベントの宣言と定義、および特定のループへの UI イベントハンドラインスタンスの登録

```cpp
// VIEW イベントベースの宣言と定義
ESP_EVENT_DECLARE_BASE(VIEW_EVENT_BASE);
esp_event_loop_handle_t app_event_loop_handle;
// イベント ID を列挙として宣言; SenseCAP-Watcher プロジェクトでは、これは data_defs.h に配置されています
enum {
    VIEW_EVENT_EXAMPLE
}
// インスタンスを登録
ESP_ERROR_CHECK(esp_event_handler_instance_register_with(app_event_loop_handle, 
                                                            VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, 
                                                            __view_event_handler, NULL, NULL));
```

#### 2. UI メッセージイベント処理

```cpp
static void __view_event_handler(void* handler_args, esp_event_base_t base, int32_t id, void* event_data)
{
  // lvgl スレッドロックを取得
  lvgl_port_lock(0);
  if (base == VIEW_EVENT_BASE) {
    switch (id) {
      // カスタムイベント
      case VIEW_EVENT_EXAMPLE: {
        ESP_LOGI("ui_event", "VIEW_EVENT_EXAMPLE");
        // 受信したイベントに基づいて対応するロジックを実行
        break;
      }
    }
  }
  // lvgl スレッドロックを解除
  lvgl_port_unlock();
}
```

#### 3. UI メッセージイベントの送信

```cpp
// イベントを送信して対応するロジックをトリガー
esp_event_post_to(app_event_loop_handle, VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, NULL, 0, pdMS_TO_TICKS(10000));
```

## 6. アプリケーション

ここでは、上記で紹介した機能を使用して、SenseCAP Watcher デバイスにシンプルな UI の例を統合します。これには、Squareline を使用した UI デザイン、UI コールバックイベントの定義、オブジェクトグループの管理などが含まれます。

### 6.1 Squareline での UI オブジェクトとコールバック関数の作成

Squareline でボタンを作成し、それぞれの名前とスタイルを設定し、各ボタンにコールバック関数を割り当てます。「Events」セクションで `ADD EVENT` をクリックし、イベントのトリガータイプを選択してコールバック関数の名前を指定します。これで、UI オブジェクトとそれに関連するコールバック関数の作成が完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img1.png" style={{width:800, height:'auto'}}/></div>

### 6.2 Squareline から `ui` プロジェクトをエクスポート

アプリケーション内で、ナビゲーションバーから `File` -> `Project Settings` を選択し、`UI Files Export Path` を `project_path/ui` に設定します。ここで、`project_path` は Squareline プロジェクトのパスを指します。これにより、UI デザインのエクスポートパスが設定されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img2.png" style={{width:600, height:'auto'}}/></div>

次に、ナビゲーションバーから `Export` -> `Export UI Files` をクリックして、すべての UI デザインを含むディレクトリフォルダをエクスポートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img3.png" style={{width:500, height:'auto'}}/></div>

### 6.3 ヘッダーファイルで宣言されたコールバック関数の実装

`ui` フォルダを SenseCAP Watcher プロジェクトにインポートし、`ui` フォルダ内の `ui_events.h` に宣言された関数を参照して、`ui_manager` フォルダ内の `ui_events.c` でこれらの関数を実装し、コールバック関数のロジックを完成させます。

例えば、`ui_events.h` では以下のように宣言します：

```cpp
void btn1click_cb(lv_event_t * e);
void btn2click_cb(lv_event_t * e);
void btn3click_cb(lv_event_t * e);
```

そして、`ui_events.c` では以下のように実装します：

```cpp
void btn1click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn1click_cb");
    // クリックイベントがトリガーされたときのこのオブジェクトのロジックを定義
}

void btn2click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn2click_cb");
    // クリックイベントがトリガーされたときのこのオブジェクトのロジックを定義
}

void btn3click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn3click_cb");
    // クリックイベントがトリガーされたときのこのオブジェクトのロジックを定義
}
```

### 6.4 構造体変数へのオブジェクトの追加

このステップでは、エンコーダーと作成したグループを管理します。グループにオブジェクトを追加および削除することで、エンコーダーがオブジェクトを制御できるようになります。

```cpp
// GroupInfo 変数を定義
GroupInfo group_page_example;
// initGroup() 内でオブジェクトを初期化
lv_obj_t * example_objects[] = {ui_Button1, ui_Button2, ui_Button3};
// 構造体変数にオブジェクトを追加して、異なるページでグループにオブジェクトを追加できるようにする
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 6.5 UI 初期化

`view.c` の `view_init` 内で `ui_init` を呼び出して UI を初期化します。これにより、lvgl タスクスレッドが実行されると、設計された UI をロードできます。デフォルトでロードされるページは、Squareline で設計された最初のページです。

```cpp
int view_init(void)
{
  // 注意: lvgl タスク内でオブジェクトに対する操作は、スレッドロック内で実行する必要があります！
  lvgl_port_lock(0);

  ui_init();
  lv_pm_init();
  // オブジェクトをグループに追加する方法は2つあります
  // 方法1: グループ内のオブジェクトをクリアし、1つずつグループに追加
  lv_group_remove_all_objs(g_example);
  lv_group_add_obj(ui_Button1);
  lv_group_add_obj(ui_Button2);
  lv_group_add_obj(ui_Button3);

  // 方法2: ページ遷移関数を通じて対応するオブジェクトをグループに追加
  lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);

  lvgl_port_unlock();

  // その他の初期化コード
}
```

### 6.6 実行効果の確認

これで、プロジェクトに UI 統合を簡単に実装しました。次に、コードをコンパイルして Watcher に書き込み、実行効果を確認します！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img4.png" style={{width:500, height:'auto'}}/></div>

上記のように、タッチスクリーンまたはホイールを使用してページ上のボタンをクリックすると、対応するオブジェクトがコールバックイベントをトリガーし、シリアルデバッグアシスタントでコールバック関数が正常に動作していることを確認できます！

## 7. SquareLine プロジェクト

SenseCAP-Watcher のほとんどのページは Squareline を使用して作成されています。Squareline ツールを使用すると、Watcher 内のさまざまなページオブジェクトのスタイルを簡単かつ迅速に変更できます。そのため、UI 開発や反復作業には Squareline を使用することを強くお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img5.png" style={{width:800, height:'auto'}}/></div>

上の画像に示されているように、ツール内のページはナビゲーションロジックに従って配置されています。隣接するページには、ボタンやその他のトリガー可能なオブジェクトを介して移動できます。対応するページやオブジェクトをクリックすると、定義されたイベントを確認できるため、異なるページやオブジェクトのスタイルを簡単に変更し、AI アシスタントをカスタマイズできます。ただし、現在のページで定義されているオブジェクトやコールバックイベントは Watcher の APP 層の関数にバインドされているため、それらを変更すると Watcher の正常な動作に影響を与える可能性があります。Watcher の正常な機能を確保するために、オブジェクトの色やサイズなどのスタイルのみを変更することをお勧めします。

## 8. ファイル説明

- [`ui_intergration_demo\SenseCAP-Watcher_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/SenseCAP-Watcher_example) フォルダには、SenseCAP-Watcher 用の完全な Squareline プロジェクトが含まれており、ほぼすべての UI リソースデザインが含まれています。

- [`ui_intergration_demo\ui_intergration_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/ui_intergration_example) フォルダには、アプリケーション章の例に対応する Squareline プロジェクトが含まれています。

- [`ui_intergration_demo\view`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/view) フォルダには、アプリケーション章の例に対応する `view` コンポーネントが含まれています。この例を使用するには、プロジェクト内の元の `view` を直接置き換えるだけです。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>