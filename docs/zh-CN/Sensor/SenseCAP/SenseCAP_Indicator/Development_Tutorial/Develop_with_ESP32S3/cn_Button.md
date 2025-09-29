---
description: 按钮
title: 按钮
keywords:
- SenseCAP Indicator ESP32 开发教程
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_ESP32_Button
last_update:
  date: 5/23/2023
  author: Thomas
---
# **按钮**

此代码初始化开发板，注册两个按钮事件回调函数，并指定要处理的按钮事件。当用户按下按钮时，将调用相应的回调函数。
ESP_LOGI() 函数用于向控制台打印消息，指示发生了哪个按钮事件。


```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "esp_log.h"
#include "bsp_board.h"
#include "bsp_btn.h"


static void __btn_click_callback(void* arg)
{
    ESP_LOGI("btn", "Click");

}

static void __btn_double_click_callback(void* arg)
{
    ESP_LOGI("btn", "Double Click");
}

void app_main(void)
{
    ESP_ERROR_CHECK(bsp_board_init());

    /*
     * Button Event types you can use:
     *     BUTTON_PRESS_DOWN
     *     BUTTON_PRESS_UP
     *     BUTTON_PRESS_REPEAT
     *     BUTTON_SINGLE_CLICK
     *     BUTTON_DOUBLE_CLICK
     *     BUTTON_LONG_PRESS_START
     *     BUTTON_LONG_PRESS_HOLD
     */
    bsp_btn_register_callback( BOARD_BTN_ID_USER, BUTTON_SINGLE_CLICK, __btn_click_callback, NULL);
    bsp_btn_register_callback( BOARD_BTN_ID_USER, BUTTON_DOUBLE_CLICK, __btn_double_click_callback, NULL);
}

```


# **技术支持**

别担心，我们为您提供支持！请访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提出您的问题！

如果您有大批量订单或定制需求，请联系 iot@seeed.cc