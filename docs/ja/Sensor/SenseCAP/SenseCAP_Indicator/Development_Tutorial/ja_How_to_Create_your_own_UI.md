---
description: LVGLコーディングまたはSquareline Studioを使用して独自のUIを作成する
title: 独自のUIを作成する方法
keywords:
- インジケータ開発チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_How_to_Create_your_own_UI
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Thomas
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **独自のUIを作成する方法**

## **LvGL**

[LvGL](https://docs.lvgl.io/master/intro/index.html) は、使いやすいグラフィカル要素、美しい視覚効果、低メモリフットプリントを備えた組み込みGUIを作成するために必要なすべてを提供するオープンソースのグラフィックスライブラリです。

### **サンプルコード**

UIインターフェースのデモコードを提供しています。また、[lvGLサンプルファイル](https://docs.lvgl.io/master/examples.html)には、UIを描画するための多くのサンプルコードが含まれており、これを参考にしてサンプルコードを変更したり、独自のUIをカスタマイズすることができます。

```c
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "bsp_board.h"
#include "lv_demos.h"
#include "lv_port.h"
#include "ui_demo1.h"
#include "ui_demo2.h"

#define LOG_MEM_INFO        1

static const char *TAG = "app_main";

void app_main(void)
{
    ESP_LOGI("TAG", "システム開始");

    ESP_ERROR_CHECK(bsp_board_init());
    lv_port_init();

#if CONFIG_LCD_AVOID_TEAR
    ESP_LOGI(TAG, "LCDのティアリング効果を回避");
#if CONFIG_LCD_LVGL_FULL_REFRESH
    ESP_LOGI(TAG, "LVGLフルリフレッシュ");
#elif CONFIG_LCD_LVGL_DIRECT_MODE
    ESP_LOGI(TAG, "LVGLダイレクトモード");
#endif
#endif

    lv_port_sem_take();
    lv_demo_widgets();      /* ウィジェットの例。これがデフォルトで提供されるものです */
    //lv_demo_music();        /* モダンなスマートフォン風の音楽プレイヤーデモ。 */
    //lv_demo_stress();       /* LVGLのストレステスト。 */
    //lv_demo_benchmark();    /* LVGLのパフォーマンスを測定したり、異なる設定を比較するためのデモ。 */
    // ui_demo1_init();         /* 仮想プリンターを表示するデモ（800*480が必要）*/
    //ui_demo2_init();         /* 仮想チューナーを表示するデモ
                                /* （480*800が必要、menuconfigでLCD_EVB_SCREEN_ROTATION_90を設定）*/
    lv_port_sem_give();

#if LOG_MEM_INFO
    static char buffer[128];    /* `sprintf`用にバッファが十分であることを確認してください */
    while (1) {
        sprintf(buffer, "   最大 /     空き /    合計\n"
                "\t  DRAM : [%8d / %8d / %8d]\n"
                "\t PSRAM : [%8d / %8d / %8d]",
                heap_caps_get_largest_free_block(MALLOC_CAP_INTERNAL),
                heap_caps_get_free_size(MALLOC_CAP_INTERNAL),
                heap_caps_get_total_size(MALLOC_CAP_INTERNAL),
                heap_caps_get_largest_free_block(MALLOC_CAP_SPIRAM),
                heap_caps_get_free_size(MALLOC_CAP_SPIRAM),
                heap_caps_get_total_size(MALLOC_CAP_SPIRAM));
        ESP_LOGI("MEM", "%s", buffer);

        vTaskDelay(pdMS_TO_TICKS(10000));
    }
#endif
}
```

## **Squareline Studio（オプション）**

[Squareline Studio](https://docs.squareline.io/docs/squareline/) は、視覚的なインターフェースを使用してデザイナーや開発者が迅速かつ効率的に作業できるようにするマルチプラットフォームのデザインツールです。SquareLine Studioは、プロジェクトに最適なコードを生成することでこれを可能にします。CまたはPythonを使用する場合、どちらのコードもエクスポートできます。

より複雑または高度なUIインターフェースを作成する必要がある場合は、Squareline Studioを使用することをお勧めします。

[Squareline Studioのインストール](https://docs.squareline.io/docs/introduction/install)

UIページのデモプロジェクトを提供しています：

[SenseCAP Indicator/squareline_project](https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip)

### **独自のUIに置き換える**

* ステップ1: デモプロジェクトを変更するか、新しいUIページを作成します

デモプロジェクトを開いて変更します：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"/></div>

新しいプロジェクトを作成します：

**注意**: 画面の解像度は480*480です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"/></div>

* ステップ2: 完成したページをUIファイルとしてエクスポートします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"/></div>

* ステップ3: 元のUIファイルをすべて削除し、独自のUIファイルをこのディレクトリにコピーします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"/></div>

* ステップ4: プロジェクトをビルドしてフラッシュします

以下のコマンドを実行してプロジェクトをビルド、フラッシュ、モニターします：

`idf.py -p PORT build flash monitor`

# **技術サポート**

**SenseCAP Indicatorに関するサポートが必要ですか？お手伝いします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>