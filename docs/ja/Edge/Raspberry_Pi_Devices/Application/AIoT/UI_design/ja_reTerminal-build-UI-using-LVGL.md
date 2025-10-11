---
description: reTerminal用LVGL
title: reTerminal用LVGL
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-build-UI-using-LVGL
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_banner.jpg" alt="pir" width="800" height="auto"/></p>

## はじめに

LVGLは、使いやすいグラフィカル要素、美しい視覚効果、低メモリフットプリントで組み込みGUIを作成するために必要なすべてを提供します。LVGLは、限られたリソースを持つマイクロコントローラーを対象としたグラフィックスライブラリです。しかし、Linux オペレーティングシステムを実行する高性能マイクロプロセッサーやボードで組み込みGUIを作成するために使用することも可能です。現在、これを行う方法は2つあります：

- SDL 2 クロスプラットフォームライブラリを使用したPCシミュレーター
- Linuxのフレームバッファデバイス（通常は/dev/fb0）を単純に使用する

このWiki記事では、SDL2を使用したPCシミュレーターの例を使用し、ウィンドウではなくフルスクリーンでUIを表示するように少し変更します。

#### 機能

- 強力な[構成要素](https://docs.lvgl.io/master/widgets/index.html)：ボタン、チャート、リスト、スライダー、画像など

- 高度なグラフィックスエンジン：アニメーション、アンチエイリアシング、不透明度、スムーズスクロール、ブレンドモードなど
- [様々な入力デバイス](https://docs.lvgl.io/master/overview/indev.html)をサポート：タッチスクリーン、マウス、キーボード、エンコーダー、ボタンなど
- [複数ディスプレイ](https://docs.lvgl.io/master/overview/display.html)をサポート
- ハードウェア非依存、任意のマイクロコントローラーとディスプレイで使用可能
- 少ないメモリで動作するようにスケーラブル（64 kB Flash、16 kB RAM）
- UTF-8処理、CJK、双方向およびアラビア文字スクリプトサポートによる多言語サポート
- [CSSライクなスタイル](https://docs.lvgl.io/master/overview/style.html)による完全にカスタマイズ可能なグラフィカル要素
- CSSにインスパイアされた強力なレイアウト：[Flexbox](https://docs.lvgl.io/master/layouts/flex.html)と[Grid](https://docs.lvgl.io/master/layouts/grid.html)
- OS、外部メモリ、GPUはサポートされていますが必須ではありません（STM32 DMA2D、NXP PXPおよびVGLiteの組み込みサポート）
- [単一フレームバッファ](https://docs.lvgl.io/master/porting/display.html)でもスムーズなレンダリング
- Cで記述され、C++と互換性あり
- Micropython BindingがMicropythonで[LVGL API](https://blog.lvgl.io/2019-02-20/micropython-bindings)を公開
- 組み込みハードウェアなしでPC上で開発するための[シミュレーター](https://docs.lvgl.io/master/get-started/pc-simulator.html)
- 100以上のシンプルな[例](https://github.com/lvgl/lvgl/tree/master/examples)
- オンラインおよびPDFでの[ドキュメント](http://docs.lvgl.io/)とAPIリファレンス

## 開発環境の準備

### reTerminal上で

Rasperry Pi OSでは、ターミナルを使用してSDL2を簡単にインストールできます：

```bash
sudo apt-get update && sudo apt-get install build-essential libsdl2-dev cmake  -y
```

次に、シミュレータープロジェクトと関連するサブモジュールをクローンします：

```bash
git clone --recursive https://github.com/littlevgl/pc_simulator.git
```

### ホストPC上で

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/UrSkzbuuGaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

EdgeLineはLVGL用のWYSIWYGエディタで、ユーザーがインターフェースを作成し、ターゲットデバイスで使用するためのC/Micropythonコードをエクスポートできます。現在はベータ段階で機能が限定されており、WindowsとLinuxの両方で利用可能です。

Windows版: [LINK](https://lvgl.io/assets/edgeline/EdgeLine_Setup_v0_3_installer.exe)
Linux版: [LINK](https://lvgl.io/assets/edgeline/EdgeLine_v0_3_linux.zip)

EdgeLineはベータ段階にあるため、[LVGLフォーラムのEdgeLineサブフォーラム](https://forum.lvgl.io/c/edgeline/15)で新しいバージョンの存在を確認してください。

Linux版では、Edgeline.x86_64とserver/micropythonが実行可能であることを確認してください。（```chmod +x filename```）

その後、EdgeLineは以下のコマンドで実行できます

```bash
./Edgeline.x86_64
```

エクスポートされたコードはデフォルトでは画面を読み込まないため、目的の画面で手動で lv_scr_load(scr_name) を呼び出す必要があります。

## デモの実行

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl.gif" alt="pir" width="800" height="auto"/></p>

以下の手順は、Raspberry Pi OS で CMake を使用する場合に使用できます。

CMake がインストールされていることを確認してください。つまり、ターミナルで cmake コマンドが動作することを確認してください。

```bash
cd pc_simulator/
mkdir build
cd build.
cmake ..
make -j4
```

バイナリは pc_simulator/build/bin/main に生成され、以下のコマンドで実行できます：

```bash
DISPLAY=:0 ./bin/main
```

これによりウィジェットデモがウィンドウモードで表示されます - これをフルスクリーンに変更するには、
```pc_simulator/lv_drivers/sdl/sdl.c```
and change #L344 to

```c
static void window_create(monitor_t * m)
{
    m->window = SDL_CreateWindow("TFT Simulator",
                            SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED,
                            1280 , 720 , SDL_WINDOW_FULLSCREEN);       /*last param. SDL_WINDOW_BORDERLESS to hide borders*/

```

Additionally, change screen resolution in pc_simulator/lv_drv_conf.h #L90

```conf
/*-------------------
 *  Monitor of PC
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

タッチ方向が正しくない場合は、```/boot/config.txt``` の89行目を ```dtoverlay=reTerminal,tp_rotate=0``` に変更する必要があります。

## 独自のGUIアプリケーションを構築する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" alt="pir" width="800" height="auto"/></p>

LVGL 8.0を使用してreTerminal用の独自のUIアプリケーションを構築する方法については、[このGitHubリポジトリ](https://github.com/AIWintermuteAI/Seeed_reTerminal_LVGL_UI_Demo)のサンプルコードをご覧ください。

必要なコンポーネントはすべてmain.cでインポートされ初期化され、その後メインのUI関数が呼び出されます。UI記述、コールバック、ヘルパー関数は **lv_demo_reterminal_UI/lv_demo_reterminal_UI.c** 内に配置されています。

```cpp
    tv = lv_tabview_create(lv_scr_act(), LV_DIR_TOP, tab_h);

    lv_obj_set_style_text_font(lv_scr_act(), font_normal, 0);

    lv_obj_t * tab_btns = lv_tabview_get_tab_btns(tv);
    lv_obj_set_style_pad_left(tab_btns, 0, 0);

    lv_obj_t * t1 = lv_tabview_add_tab(tv, "Assistant");
    lv_obj_t * t2 = lv_tabview_add_tab(tv, "Debug");
    lv_obj_t * t3 = lv_tabview_add_tab(tv, "Stats");
```

アクティブな画面に Tabview ウィジェットを作成し、「Assistant」「Debug」「Stats」の3つのタブを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-1.png" alt="pir" width="800" height="auto"/></p>

各タブのコンテンツは、対応する関数内で個別に初期化されます：

```cpp
    assistant_create(t1);
    debug_create(t2);
    stats_create(t3);

    color_changer_create(tv);

    evdev_lis3dh_init();
```

さらに、Tabviewウィジェット上に色変更要素が作成され、内蔵加速度計が初期化されます。その後、ダミー入力データを使用して3つのタイマーコールバックを作成します：

```cpp
    static uint32_t user_data = 10;
    lv_timer_t * time_timer = lv_timer_create(time_timer_cb, 1,  &user_data);
    lv_timer_t * system_timer = lv_timer_create(system_timer_cb, 500,  &user_data);
    lv_timer_t * accelerometer_timer = lv_timer_create(accelerometer_timer_cb, 50,  &user_data);
```

これらはそれぞれシステム時刻、システムステータス（CPU、メモリ、ディスク容量、イーサネット現在速度など）、および加速度センサーの読み取り値を取得する役割を担っています。これら3つのコールバック関数は lv_demo_reterminal_UI.c の最下部で見つけることができます。

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

あなたの特定のアプリケーションでは、Tabviewよりも他のウィジェットを使用する方が適している場合があります。使用方法と例については、[LVGL 8.0ウィジェットの完全な説明](https://docs.lvgl.io/master/widgets/index.html)を参照してください。

reTerminal用のLVGLで最初のUIアプリケーションを作成する際に、私たちのデモアプリケーションに密接に従うことを決めた場合、以下でこれらの関数の1つ（**assistant_create()**）の内部で何が起こるかについて、より詳細な情報を見つけることができます。新しいアプリケーションを作成するためのワークフローは似ています：

1) 画面上でウィジェットを初期化する
2) センサー/システムからデータを取得するためのタイマーベースまたはイベントベースのコールバックを作成する
3) データに基づいてウィジェットの内容を変更する - 通常これはコードの上部で宣言されたグローバル変数を使用して行われます

**assistant_create**
タブ用のパネルオブジェクトを作成し、その高さを設定します。

```cpp
    lv_obj_t * panel1 = lv_obj_create(parent);
    lv_obj_set_height(panel1, lv_pct(100));
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-2.png" alt="pir" width="800" height="auto"/></p>

次に、assetsフォルダにあるC配列から画像ボタンオブジェクトを作成します。これは[LVGL画像変換ツール](https://lvgl.io/tools/imageconverter)で取得したものです。また、画像ボタンオブジェクトにボタン押下時のスタイル変換を初期化して割り当てます（ボタンは押下時に緑色になります）。さらに、ボタン押下時にイベントコールバック**speech_event_cb**が割り当てられます - これは単なるモック例なので、ターミナルにテキストを出力するだけです。しかし、実際のアプリケーションでは、インテリジェントアシスタントを開始するために使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-3.png" alt="pir" height="400" height="auto"/></p>

```cpp
    LV_IMG_DECLARE(speech_btn_img);

    /*Create a transition animation on width transformation and recolor.*/
    static lv_style_prop_t tr_prop[] = {LV_STYLE_IMG_RECOLOR_OPA, 0};
    static lv_style_transition_dsc_t tr;
    lv_style_transition_dsc_init(&tr, tr_prop, lv_anim_path_linear, 500, 0, NULL);

    static lv_style_t style_def;
    lv_style_init(&style_def);
    lv_style_set_text_color(&style_def, lv_color_white());
    lv_style_set_transition(&style_def, &tr);

    /*Darken the button when pressed and make it wider*/
    static lv_style_t style_pr;
    lv_style_init(&style_pr);
    lv_style_set_img_recolor_opa(&style_pr, LV_OPA_70);
    lv_style_set_img_recolor(&style_pr, lv_palette_main(LV_PALETTE_GREEN));

    /*Create an image button*/
    lv_obj_t * speech_btn = lv_imgbtn_create(panel1);
    lv_imgbtn_set_src(speech_btn, LV_IMGBTN_STATE_RELEASED, NULL, &speech_btn_img, NULL);
    //lv_img_set_zoom(speech_btn, 128);
    lv_obj_set_size(speech_btn, 300, 300);
    lv_obj_add_event_cb(speech_btn, speech_event_cb, LV_EVENT_ALL, NULL);
    lv_obj_add_style(speech_btn, &style_def, 0);
    lv_obj_add_style(speech_btn, &style_pr, LV_STATE_PRESSED);
```

次のコードブロックでは、時刻、日付、ユーザー挨拶のテキストラベルを作成します。これらはデフォルトテキストで初期化され、time_timerコールバックで毎秒変更されます。

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

最後に、このタブに配置したウィジェットをGridレイアウトを使用して構造化します。GridレイアウトはCSS Flexboxのサブセットです。

アイテムを行または列（トラック）を持つ2D「テーブル」に配置できます。アイテムは複数の列や行にまたがることができます。トラックのサイズは、ピクセル単位、最大アイテムに合わせて（```LV_GRID_CONTENT```）、または「フリーユニット」（FR）で設定して、空きスペースを比例的に分散できます。

オブジェクトをグリッドコンテナにするには、```lv_obj_set_layout(obj, LV_LAYOUT_GRID)```を呼び出します。

LVGLのグリッドレイアウト機能は、```lv_conf.h```で```LV_USE_GRID```を使用してグローバルに有効にする必要があることに注意してください。

LVGLのレイアウトについて詳しくは、[このリンク](https://docs.lvgl.io/master/layouts/grid.html)をフォローして読むことができます。

```cpp
    static lv_coord_t grid_main_col_dsc[] = {LV_GRID_FR(1), LV_GRID_FR(1), LV_GRID_TEMPLATE_LAST};
    static lv_coord_t grid_main_row_dsc[] = {LV_GRID_CONTENT, LV_GRID_CONTENT, LV_GRID_TEMPLATE_LAST};

    /*Create the top panel*/
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

残りのタブには異なるウィジェットがありますが、全体的なワークフローは同じです。特定のウィジェットのパラメータや使用方法について詳しく知りたい場合は、LVGLドキュメントを参照してください。

アプリケーションをコンパイルするには、プロジェクトフォルダ（main.cソースファイルを含む）から

```bash
mkdir build
cd build.
cmake ..
make -j4
```

バイナリは ../bin/main に生成され、以下のコマンドを入力することで実行できます：

```bash
DISPLAY=:0 ./../bin/main
```

プロジェクトに他のフォルダを追加する場合は、CMakeLists.txtを適切に変更し、buildディレクトリから`cmake ..`を再実行してください。そうしないと、リンクエラーが発生します。

## リソース

- **[GitHub]** [LVGL](https://lvgl.io/)
- **[Webpage]** [公式LVGLドキュメント](https://docs.lvgl.io/master/index.html)
- **[GitHub]** [PCシミュレータソースコード](https://github.com/lvgl/lv_sim_eclipse_sdl)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
