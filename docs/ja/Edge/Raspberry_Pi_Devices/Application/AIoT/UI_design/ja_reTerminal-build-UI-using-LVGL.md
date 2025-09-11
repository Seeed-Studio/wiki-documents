---
description: reTerminal向けのLVGL
title:  reTerminal向けのLVGL
keywords:
  - Edge
  - reTerminal アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-build-UI-using-LVGL
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_banner.jpg" alt="pir" width="800" height="auto"/></p>

## はじめに

LVGLは、使いやすいグラフィカル要素、美しい視覚効果、そして低メモリ消費で組み込みGUIを作成するために必要なすべてを提供します。LVGLは、リソースが限られたマイクロコントローラーを対象としたグラフィックスライブラリです。しかし、高性能のマイクロプロセッサやLinuxオペレーティングシステムを実行するボードを使用して組み込みGUIを作成することも可能です。現在、これを実現する方法は以下の2つがあります：

- SDL2クロスプラットフォームライブラリを使用したPCシミュレーター
- Linuxのフレームバッファデバイス（通常は/dev/fb0）を単純に使用する

このWiki記事では、SDL2を使用したPCシミュレーターの例を使用し、ウィンドウではなくフルスクリーンでUIを表示するように少し修正します。

#### 特徴

- 強力な[構築ブロック](https://docs.lvgl.io/master/widgets/index.html)：ボタン、チャート、リスト、スライダー、画像など
- 高度なグラフィックスエンジン：アニメーション、アンチエイリアス、透明度、スムーズスクロール、ブレンディングモードなど
- [さまざまな入力デバイス](https://docs.lvgl.io/master/overview/indev.html)をサポート：タッチスクリーン、マウス、キーボード、エンコーダー、ボタンなど
- [複数のディスプレイ](https://docs.lvgl.io/master/overview/display.html)をサポート
- ハードウェアに依存せず、任意のマイクロコントローラーとディスプレイで使用可能
- 少ないメモリで動作可能（64 kB Flash、16 kB RAM）
- UTF-8処理、CJK、双方向およびアラビア文字スクリプトをサポートする多言語対応
- [CSSのようなスタイル](https://docs.lvgl.io/master/overview/style.html)を使用してグラフィカル要素を完全にカスタマイズ可能
- CSSにインスパイアされた強力なレイアウト：[Flexbox](https://docs.lvgl.io/master/layouts/flex.html)と[Grid](https://docs.lvgl.io/master/layouts/grid.html)
- OS、外部メモリ、GPUをサポート（必須ではない）。STM32 DMA2D、NXP PXP、VGLiteの組み込みサポート
- [単一フレームバッファ](https://docs.lvgl.io/master/porting/display.html)でもスムーズなレンダリング
- Cで記述されており、C++と互換性あり
- Micropythonバインディングにより[LVGL APIをMicropythonで利用可能](https://blog.lvgl.io/2019-02-20/micropython-bindings)
- 組み込みハードウェアなしでPC上で開発可能な[シミュレーター](https://docs.lvgl.io/master/get-started/pc-simulator.html)
- 100以上のシンプルな[例](https://github.com/lvgl/lvgl/tree/master/examples)
- [ドキュメント](http://docs.lvgl.io/)とAPIリファレンスがオンラインおよびPDFで利用可能

## 開発環境の準備

### reTerminal上で

Raspberry Pi OSでは、ターミナルを使用してSDL2を簡単にインストールできます：

```bash
sudo apt-get update && sudo apt-get install build-essential libsdl2-dev cmake  -y
```

次に、シミュレータープロジェクトと関連するサブモジュールをクローンします：

```bash
git clone --recursive https://github.com/littlevgl/pc_simulator.git
```

### ホストPC上で

<iframe width="800" height="450" src="https://www.youtube.com/embed/UrSkzbuuGaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

EdgeLineはLVGL向けのWYSIWYGエディターであり、ユーザーがインターフェースを作成し、ターゲットデバイスで使用するためのC/Micropythonコードをエクスポートできます。現在、ベータ段階で機能が限定されており、WindowsとLinuxの両方で利用可能です。

Windows版：[リンク](https://lvgl.io/assets/edgeline/EdgeLine_Setup_v0_3_installer.exe)  
Linux版：[リンク](https://lvgl.io/assets/edgeline/EdgeLine_v0_3_linux.zip)

EdgeLineはベータ段階にあるため、[LVGLフォーラムのEdgeLineサブフォーラム](https://forum.lvgl.io/c/edgeline/15)で新しいバージョンの有無を確認してください。

Linux版では、Edgeline.x86_64とserver/micropythonが実行可能であることを確認してください。（```chmod +x filename```）

その後、EdgeLineは以下のコマンドで実行できます：

```bash
./Edgeline.x86_64
```

エクスポートされたコードはデフォルトでは画面をロードしないため、目的の画面でlv_scr_load(scr_name)を手動で呼び出す必要があります。

## デモの実行

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl.gif" alt="pir" width="800" height="auto"/></p>

以下の手順は、Raspberry Pi OS上でCMakeを使用して実行できます。

CMakeがインストールされていることを確認してください。つまり、ターミナルでcmakeコマンドが動作する必要があります。

```bash
cd pc_simulator/
mkdir build
cd build.
cmake ..
make -j4
```

バイナリはpc_simulator/build/bin/mainに生成され、以下のコマンドで実行できます：

```bash
DISPLAY=:0 ./bin/main
```

これにより、ウィンドウモードでウィジェットデモが表示されます。これをフルスクリーンモードに変更するには、以下のファイルを開きます：
```pc_simulator/lv_drivers/sdl/sdl.c```
そして、#L344を以下のように変更します：

```c
static void window_create(monitor_t * m)
{
    m->window = SDL_CreateWindow("TFT Simulator",
                            SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED,
                            1280 , 720 , SDL_WINDOW_FULLSCREEN);       /*最後のパラメータ。SDL_WINDOW_BORDERLESSで境界を非表示にする*/
}
```

さらに、以下のファイルで画面解像度を変更します：pc_simulator/lv_drv_conf.h #L90

```conf
/*-------------------
 *  PCのモニター
 *-------------------*/
#ifndef USE_MONITOR
#  define USE_MONITOR         1
#endif

#if USE_MONITOR
#  define MONITOR_HOR_RES     1280
#  define MONITOR_VER_RES     720
```

再コンパイルしてバイナリを実行すると、デモアプリケーションがフルスクリーンで表示されます！

```bash
make -j4
DISPLAY=:0 ./bin/main
```

タッチ方向が正しくない場合は、```/boot/config.txt```の89行目を以下のように変更する必要があります：```dtoverlay=reTerminal,tp_rotate=0```

## 独自のGUIアプリケーションを構築する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" alt="pir" width="800" height="auto"/></p>

LVGL 8.0を使用してreTerminal用の独自のUIアプリケーションを構築する方法については、[このGitHubリポジトリ](https://github.com/AIWintermuteAI/Seeed_reTerminal_LVGL_UI_Demo)の例コードを参照してください。

必要なすべてのコンポーネントはmain.cでインポートおよび初期化され、その後メインUI関数が呼び出されます。UIの記述、コールバック、およびヘルパー関数は**lv_demo_reterminal_UI/lv_demo_reterminal_UI.c**内にあります。

```cpp
    tv = lv_tabview_create(lv_scr_act(), LV_DIR_TOP, tab_h);

    lv_obj_set_style_text_font(lv_scr_act(), font_normal, 0);

    lv_obj_t * tab_btns = lv_tabview_get_tab_btns(tv);
    lv_obj_set_style_pad_left(tab_btns, 0, 0);

    lv_obj_t * t1 = lv_tabview_add_tab(tv, "Assistant");
    lv_obj_t * t2 = lv_tabview_add_tab(tv, "Debug");
    lv_obj_t * t3 = lv_tabview_add_tab(tv, "Stats");
```

アクティブな画面上にTabviewウィジェットを作成し、Assistant、Debug、Statsの3つのタブを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-1.png" alt="pir" width="800" height="auto"/></p>

各タブの内容は対応する関数内で個別に初期化されます：

```cpp
    assistant_create(t1);
    debug_create(t2);
    stats_create(t3);

    color_changer_create(tv);

    evdev_lis3dh_init();
```

さらに、Tabviewウィジェット上にカラーチェンジャー要素を作成し、内蔵加速度計を初期化します。その後、ダミー入力データを使用して3つのタイマーコールバックを作成します：

```cpp
    static uint32_t user_data = 10;
    lv_timer_t * time_timer = lv_timer_create(time_timer_cb, 1,  &user_data);
    lv_timer_t * system_timer = lv_timer_create(system_timer_cb, 500,  &user_data);
    lv_timer_t * accelerometer_timer = lv_timer_create(accelerometer_timer_cb, 50,  &user_data);
```

これらはそれぞれ、システム時間、システムステータス（CPU、メモリ、ディスクスペース、イーサネットの現在の速度など）、および加速度計の読み取りを取得する役割を果たします。これら3つのコールバック関数はlv_demo_reterminal_UI.cの最後にあります。

```cpp
void time_timer_cb(lv_timer_t * timer)
{

    time_t t = time(NULL);
    struct tm *local = localtime(&t);

    sprintf(timeString, "%02d:%02d:%02d", local->tm_hour, local->tm_min, local->tm_sec);
    sprintf(dateString, "%s\n%s %02d %04d", DAY[local->tm_wday], MONTH[local->tm_mon], local->tm_mday, local->tm_year + 1900);

    lv_label_set_text(clock_label, timeString);
    lv_label_set_text(date_label, dateString);

}

void system_timer_cb(lv_timer_t * timer)
{

    lv_meter_indicator_t *indic1 = timer->user_data;
    cpu_pct = 100 - lv_timer_get_idle();

    lv_mem_monitor_t mon;
    lv_mem_monitor(&mon);

    uint32_t used_size = mon.total_size - mon.free_size;;
    uint32_t used_kb = used_size / 1024;
    uint32_t used_kb_tenth = (used_size - (used_kb * 1024)) / 102;
    mem_pct = mon.used_pct;

    dsk_pct = get_available_space();
    eth0_num = get_current_network_speed();
    //light_num = get_light_sensor();

}

void accelerometer_timer_cb(lv_timer_t * timer)
{

    evdev_lis3dh_read(&data);

    lv_chart_set_next_value(chart1, x_ser, data.x_val);
    lv_chart_set_next_value(chart1, y_ser, data.y_val);
    lv_chart_set_next_value(chart1, z_ser, data.z_val);

}
```

特定のアプリケーションでは、Tabview以外のウィジェットを使用する方が適している場合があります。使用方法や例については、[LVGL 8.0ウィジェットの完全な説明](https://docs.lvgl.io/master/widgets/index.html)を参照してください。

LVGLを使用してreTerminal用の最初のUIアプリケーションを作成する際にデモアプリケーションを参考にする場合、以下にこれらの関数の1つ（**assistant_create()**）内で何が行われているかについての詳細情報を示します。新しいアプリケーションを作成する際のワークフローは以下のようになります：

1) 画面上のウィジェットを初期化する
2) センサーやシステムからデータを取得するためのタイマーまたはイベントベースのコールバックを作成する
3) データに基づいてウィジェットの内容を変更する - 通常、コードの先頭で宣言されたグローバル変数を使用して行います

**assistant_create**
タブ用のパネルオブジェクトを作成し、その高さを設定します。

```cpp
    lv_obj_t * panel1 = lv_obj_create(parent);
    lv_obj_set_height(panel1, lv_pct(100));
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-2.png" alt="pir" width="800" height="auto"/></p>

次に、[LVGL画像変換ツール](https://lvgl.io/tools/imageconverter)を使用して取得したassetsフォルダ内のC配列から画像ボタンオブジェクトを作成します。また、ボタン押下時のスタイル変換を画像ボタンオブジェクトに初期化して割り当てます（ボタンが押されると緑色になります）。さらに、イベントコールバック**speech_event_cb**がボタン押下に割り当てられます。この例では、ターミナルにテキストを出力するだけですが、実際のアプリケーションではインテリジェントアシスタントを開始するために使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-3.png" alt="pir" height="400" height="auto"/></p>

```cpp
    LV_IMG_DECLARE(speech_btn_img);

    /*幅の変形とリカラーに関するトランジションアニメーションを作成します。*/
    static lv_style_prop_t tr_prop[] = {LV_STYLE_IMG_RECOLOR_OPA, 0};
    static lv_style_transition_dsc_t tr;
    lv_style_transition_dsc_init(&tr, tr_prop, lv_anim_path_linear, 500, 0, NULL);

    static lv_style_t style_def;
    lv_style_init(&style_def);
    lv_style_set_text_color(&style_def, lv_color_white());
    lv_style_set_transition(&style_def, &tr);

    /*ボタンが押されたときに暗くし、幅を広げます*/
    static lv_style_t style_pr;
    lv_style_init(&style_pr);
    lv_style_set_img_recolor_opa(&style_pr, LV_OPA_70);
    lv_style_set_img_recolor(&style_pr, lv_palette_main(LV_PALETTE_GREEN));

    /*画像ボタンを作成します*/
    lv_obj_t * speech_btn = lv_imgbtn_create(panel1);
    lv_imgbtn_set_src(speech_btn, LV_IMGBTN_STATE_RELEASED, NULL, &speech_btn_img, NULL);
    //lv_img_set_zoom(speech_btn, 128);
    lv_obj_set_size(speech_btn, 300, 300);
    lv_obj_add_event_cb(speech_btn, speech_event_cb, LV_EVENT_ALL, NULL);
    lv_obj_add_style(speech_btn, &style_def, 0);
    lv_obj_add_style(speech_btn, &style_pr, LV_STATE_PRESSED);
```

次のコードブロックでは、時間、日付、ユーザー挨拶用のテキストラベルを作成します。これらはデフォルトのテキストで初期化され、`time_timer`コールバックで毎秒変更されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-4.png" alt="pir" width="600" height="auto"/></p>

```cpp
    lv_obj_t * name = lv_label_create(panel1);
    lv_label_set_text(name, "Hi there, Username");
    lv_obj_add_style(name, &style_large, 0);

    clock_label = lv_label_create(panel1);
    lv_obj_add_style(clock_label, &style_clock, 0);
    lv_label_set_text(clock_label, timeString);
    lv_label_set_long_mode(clock_label, LV_LABEL_LONG_WRAP);

    lv_obj_t * time_icn = lv_label_create(panel1);
    lv_obj_add_style(time_icn, &style_large, 0);
    lv_label_set_text(time_icn, LV_SYMBOL_BELL);

    date_label = lv_label_create(panel1);
    lv_label_set_text(date_label, dateString);
    lv_obj_add_style(date_label, &style_large, 0);
```

最後に、このタブに配置したウィジェットをグリッドレイアウトを使用して構造化します。グリッドレイアウトはCSS Flexboxのサブセットです。

グリッドレイアウトは、行または列（トラック）を持つ2Dの「テーブル」にアイテムを配置できます。アイテムは複数の列または行にまたがることができます。トラックのサイズはピクセル、最大アイテムサイズ（```LV_GRID_CONTENT```）、または「フリーユニット」（FR）で設定して空きスペースを比例配分できます。

オブジェクトをグリッドコンテナにするには、```lv_obj_set_layout(obj, LV_LAYOUT_GRID)```を呼び出します。

LVGLのグリッドレイアウト機能を使用するには、```lv_conf.h```で```LV_USE_GRID```をグローバルに有効にする必要があります。

LVGLのレイアウトについての詳細は、[このリンク](https://docs.lvgl.io/master/layouts/grid.html)を参照してください。

```cpp
    static lv_coord_t grid_main_col_dsc[] = {LV_GRID_FR(1), LV_GRID_FR(1), LV_GRID_TEMPLATE_LAST};
    static lv_coord_t grid_main_row_dsc[] = {LV_GRID_CONTENT, LV_GRID_CONTENT, LV_GRID_TEMPLATE_LAST};

    /*トップパネルを作成します*/
    static lv_coord_t grid_1_col_dsc[] = {400, 50, LV_GRID_CONTENT, LV_GRID_FR(2), LV_GRID_FR(1), LV_GRID_FR(1), LV_GRID_TEMPLATE_LAST};
    static lv_coord_t grid_1_row_dsc[] = {200, 100, 100, LV_GRID_CONTENT, 10, LV_GRID_CONTENT, LV_GRID_CONTENT, LV_GRID_TEMPLATE_LAST};

    lv_obj_set_grid_dsc_array(parent, grid_main_col_dsc, grid_main_row_dsc);

    lv_obj_set_grid_cell(panel1, LV_GRID_ALIGN_STRETCH, 0, 2, LV_GRID_ALIGN_CENTER, 0, 1);

    lv_obj_set_grid_dsc_array(panel1, grid_1_col_dsc, grid_1_row_dsc);
    lv_obj_set_grid_cell(speech_btn, LV_GRID_ALIGN_CENTER, 0, 1, LV_GRID_ALIGN_CENTER, 0, 5);
    lv_obj_set_grid_cell(name, LV_GRID_ALIGN_START, 2, 2, LV_GRID_ALIGN_CENTER, 0, 1);
    lv_obj_set_grid_cell(clock_label, LV_GRID_ALIGN_STRETCH, 2, 4, LV_GRID_ALIGN_START, 1, 1);
    lv_obj_set_grid_cell(time_icn, LV_GRID_ALIGN_CENTER, 2, 1, LV_GRID_ALIGN_CENTER, 3, 1);
    lv_obj_set_grid_cell(date_label, LV_GRID_ALIGN_START, 3, 1, LV_GRID_ALIGN_CENTER, 3, 1);
```

他のタブには異なるウィジェットがありますが、全体的なワークフローは同じです。特定のウィジェットのパラメータや使用方法について詳しく知りたい場合は、LVGLのドキュメントを参照してください。

アプリケーションをコンパイルするには、プロジェクトフォルダ（`main.c`ソースファイルを含む）から以下を実行します。

```bash
mkdir build
cd build
cmake ..
make -j4
```

バイナリは`../bin/main`に生成され、以下のコマンドで実行できます。

```bash
DISPLAY=:0 ./../bin/main
```

プロジェクトに他のフォルダを追加する場合は、`CMakeLists.txt`を適切に変更し、ビルドディレクトリから再度`cmake ..`を実行してください。そうしないとリンクエラーが発生する可能性があります。

## リソース

- **[GitHub]** [LVGL](https://lvgl.io/)
- **[Webページ]** [公式LVGLドキュメント](https://docs.lvgl.io/master/index.html)
- **[GitHub]** [PCシミュレータソースコード](https://github.com/lvgl/lv_sim_eclipse_sdl)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
