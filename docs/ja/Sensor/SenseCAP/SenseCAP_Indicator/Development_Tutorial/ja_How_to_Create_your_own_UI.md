---
description: LVGLコーディングまたはSquareline Studioを使用して独自のUIを作成する
title: 独自のUIを作成する方法
keywords:
- Indicator Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_How_to_Create_your_own_UI
sidebar_position: 4
last_update:
  date: 5/31/2023
  author: Thomas
---
# **独自のUIを作成する方法**

## **LvGL**

[LvGL](https://docs.lvgl.io/master/intro/index.html)は、使いやすいグラフィカル要素、美しい視覚効果、低メモリフットプリントで組み込みGUIを作成するために必要なすべてを提供するオープンソースのグラフィックスライブラリです。

### **サンプルコード**

UIインターフェースのデモコードを提供しており、[lvGLサンプルファイル](https://docs.lvgl.io/master/examples.html)には参考用のUI描画サンプルコードが多数あります。サンプルコードを修正したり、独自のUIをカスタマイズしたりできます。

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
    ESP_LOGI("TAG", "system start");

    ESP_ERROR_CHECK(bsp_board_init());
    lv_port_init();

#if CONFIG_LCD_AVOID_TEAR
    ESP_LOGI(TAG, "Avoid lcd tearing effect");
#if CONFIG_LCD_LVGL_FULL_REFRESH
    ESP_LOGI(TAG, "LVGL full-refresh");
#elif CONFIG_LCD_LVGL_DIRECT_MODE
    ESP_LOGI(TAG, "LVGL direct-mode");
#endif
#endif

    lv_port_sem_take();
    lv_demo_widgets();      /* A widgets example. This is what you get out of the box */
    //lv_demo_music();        /* A modern, smartphone-like music player demo. */
    //lv_demo_stress();       /* A stress test for LVGL. */
    //lv_demo_benchmark();    /* A demo to measure the performance of LVGL or to compare different settings. */
    // ui_demo1_init();         /* A demo to show virtual printer (must be 800*480)*/
    //ui_demo2_init();         /* A demo to show virtual tuner
                                /* (must be 480*800, set LCD_EVB_SCREEN_ROTATION_90 in menuconfig)*/
    lv_port_sem_give();

#if LOG_MEM_INFO
    static char buffer[128];    /* Make sure buffer is enough for `sprintf` */
    while (1) {
        sprintf(buffer, "   Biggest /     Free /    Total\n"
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

[Squareline Studio](https://docs.squareline.io/docs/squareline/)は、ビジュアルインターフェースを使用してデザイナーと開発者が迅速かつ効率的に作業できるマルチプラットフォーム設計ツールです。SquareLine Studioは、プロジェクトに最適なコードを作成することでこれを可能にします。CまたはPythonを使用する場合でも、両方のコードをエクスポートできます。

より複雑または高度なUIインターフェースを作成する必要がある場合は、Squareline Studioを使用した開発をお勧めします。

[Squareline Studioインストール](https://docs.squareline.io/docs/introduction/install)

UIページのデモプロジェクトを提供しています：

[SenseCAP Indicator/squareline_project](https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip)

### **独自のUIに置き換える**

- ステップ1：デモプロジェクトで変更を加えるか、新しいUIページを作成できます

デモプロジェクトを開いて変更を加える：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"/></div>

新しいプロジェクトを作成する：

**注意**：画面の解像度は480*480です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"/></div>

- ステップ2：完成したページをUIファイルとしてエクスポートする

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"/></div>

- ステップ3：元のUIファイルをすべて削除し、独自のUIファイルをこのディレクトリにコピーする

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"/></div>

- ステップ4：プロジェクトをビルドしてフラッシュする

以下のコマンドを実行してプロジェクトをビルド、フラッシュ、モニターします：

`idf.py -p PORT build flash monitor`

# **技術サポート**

**SenseCAP Indicatorでお困りですか？サポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>