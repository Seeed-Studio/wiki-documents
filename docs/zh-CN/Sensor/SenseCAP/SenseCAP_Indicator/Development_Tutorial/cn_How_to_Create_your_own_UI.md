---
description: 基于 LVGL 编码或使用 Squareline Studio 制作您自己的 UI
title: 如何创建您自己的 UI
keywords:
- Indicator Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_How_to_Create_your_own_UI
sidebar_position: 4
last_update:
  date: 5/31/2023
  author: Thomas
---
# **如何创建您自己的 UI**

## **LvGL**

[LvGL](https://docs.lvgl.io/master/intro/index.html) 是一个开源图形库，提供创建嵌入式 GUI 所需的一切，具有易于使用的图形元素、美观的视觉效果和低内存占用。

### **示例代码**

我们提供了 UI 界面的演示代码，[lvGL 示例文件](https://docs.lvgl.io/master/examples.html) 中有许多绘制 UI 的示例代码供参考，您可以修改示例代码或自定义您自己的 UI。

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

## **Squareline Studio（可选）**

[Squareline Studio](https://docs.squareline.io/docs/squareline/) 是一个多平台设计工具，使用可视化界面帮助设计师和开发人员快速高效地工作。SquareLine Studio 通过为您的项目创建完美的代码使这成为可能。无论您使用 C 还是 Python，您都可以导出两种语言的代码。

如果您需要创建更复杂或高级的 UI 界面，建议您使用 Squareline Studio 进行开发。

[Squareline Studio 安装](https://docs.squareline.io/docs/introduction/install)

我们为 UI 页面提供了一个演示项目：

[SenseCAP Indicator/squareline_project](https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip)

### **替换为您自己的 UI**

- 步骤 1：您可以在我们的演示项目中进行更改，或创建新的 UI 页面

打开演示项目并进行更改：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"/></div>

创建新项目：

**注意**：屏幕分辨率为 480*480。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"/></div>

- 步骤 2：将您完成的页面导出为 UI 文件

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"/></div>

- 步骤 3：删除所有原始 UI 文件，并将您自己的 UI 文件复制到此目录。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"/></div>

- 步骤 4：构建并烧录项目

运行以下命令来构建、烧录和监控项目：

`idf.py -p PORT build flash monitor`

# **技术支持**

**需要 SenseCAP Indicator 的帮助？我们在这里为您提供协助！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
