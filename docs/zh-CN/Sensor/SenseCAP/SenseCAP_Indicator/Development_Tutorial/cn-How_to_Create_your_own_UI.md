---
description: Make your own UI based on LVGL coding or with Squareline Studio
title: How to Create your own UI
keywords:
- Indicator Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_How_to_Create_your_own_UI
sidebar_position: 4
last_update:
  date: 3/3/2024
  author: DuKaiyin
---
# **如何创建您自己的UI**

## **LvGL**

[LvGL](https://docs.lvgl.io/master/intro/index.html) 是一个开源的图形库，提供了创建嵌入式GUI所需的一切，包括易于使用的图形元素、美观的视觉效果和低内存占用

### **示例代码**

我们提供了UI界面的演示代码，以及[lvGL示例文件](https://docs.lvgl.io/master/examples.html) 中有许多绘制UI的示例代码供参考，您可以修改示例代码或自定义您自己的UI


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

[Squareline Studio](https://docs.squareline.io/docs/squareline/) 是一款多平台设计工具，使用可视化界面帮助设计师和开发人员快速高效地工作。SquareLine Studio通过为您的项目创建完美的代码实现了这一点。无论您使用C还是Python，都可以导出两者的代码

如果您需要创建一个更复杂或高级的UI界面，建议您使用Squareline Studio进行开发。

[Squareline Studio安装](https://docs.squareline.io/docs/introduction/install)



我们为UI页面提供了一个演示项目：

[SenseCAP Indicator/squareline_project](https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip)

### **用您自己的UI替换**


* Step 1:您可以在我们的演示项目中进行更改，或创建一个新的UI页面
打开演示项目并进行更改：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"/></div>

创建一个新项目：

**注意**:屏幕的分辨率是480*480。


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"/></div>



* Step 2:将完成的页面导出为UI文件。


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"/></div>



* Step 3:删除所有原始的UI文件，将您自己的UI文件复制到这个目录。


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"/></div>

* Step 4:构建并烧写项目

运行以下命令以构建、烧写和监视项目：

`idf.py -p PORT build flash monitor`




# **技术支持**

**需要帮助解决SenseCAP Indicator的问题吗？我们在这里提供协助！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
