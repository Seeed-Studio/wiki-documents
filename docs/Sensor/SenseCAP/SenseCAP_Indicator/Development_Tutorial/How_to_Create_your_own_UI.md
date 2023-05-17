---
description: How to Create your own UI
title: How to Create your own UI
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How_to_Create_your_own_UI
last_update:
  date: 5/17/2023
  author: Yvonne
---
# **How to Create your own UI**

## **LvGL**

[LvGL](https://docs.lvgl.io/master/intro/index.html) is an open-source graphics library providing everything you need to create an embedded GUI with easy-to-use graphical elements, beautiful visual effects, and a low memory footprint.

### **Example Code**

We provide the demo code of the UI interface, and [lvGL example file](https://docs.lvgl.io/master/examples.html) are many sample codes for drawing UI for reference, you can modify the sample code or customize your own UI.


```
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



## **Squareline Studio(Optional)**

[Squareline Studio](https://docs.squareline.io/docs/squareline/) is a multi-platform design tool that uses a visual interface to help designers and developers work quickly and efficiently. SquareLine Studio makes it possible by creating the perfect code for your projects. Whether you use C or Python, you can export code for both.

If you need to create a more complex or advanced UI interface, it‘s recommended that you use Squareline Studio for development.


[Squareline Studio Installation](https://docs.squareline.io/docs/introduction/install)



We provide a demo project for the UI page:

[SenseCAP Indicator/squareline_project](https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip)

### **Replace with your own UI**


* Step 1:You can make changes in our demo project, or create a new UI page

Open the demo project and make changes:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"/></div>

Create a new project:

**Note**:The resolution of the screen is 480*480.


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"/></div>



* Step 2:Export your finished page as UI files


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"/></div>



* Step 3:Remove all the original UI files and copy your onw UI files to this direct. 


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"/></div>

* Step 4:Build and Flash the project

Run the following command to build, flash and monitor the project:

`idf.py -p PORT build flash monitor` 



    
# **Tech Support**

Don’t worry, we’ve got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions！
If you have large order or customization requirment, please contact iot@seeed.cc
