---
description: Button
title: Button
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_ESP32_Button
last_update:
  date: 5/23/2023
  author: Thomas
---
# **Button**

このコードはボードを初期化し、2つのボタンイベントコールバックを登録し、処理するボタンイベントを指定します。ユーザーがボタンを押すと、対応するコールバック関数が呼び出されます。
ESP_LOGI()関数は、どのボタンイベントが発生したかを示すメッセージをコンソールに出力するために使用されます。


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


# **技術サポート**

ご心配なく、私たちがサポートします！ご質問は[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)にお越しください！

大量注文やカスタマイズ要件がある場合は、iot@seeed.ccまでお問い合わせください