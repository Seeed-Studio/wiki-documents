---
description: ボタン
title: ボタン
keywords:
- SenseCAP Indicator ESP32 開発チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_ESP32_Button
last_update:
  date: 05/15/2025
  author: Thomas
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **ボタン**

このコードはボードを初期化し、2つのボタンイベントコールバックを登録し、処理するボタンイベントを指定します。ユーザーがボタンを押すと、対応するコールバック関数が呼び出されます。  
`ESP_LOGI()` 関数は、どのボタンイベントが発生したかを示すメッセージをコンソールに出力するために使用されます。

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "esp_log.h"
#include "bsp_board.h"
#include "bsp_btn.h"


static void __btn_click_callback(void* arg)
{
    ESP_LOGI("btn", "クリック");
}

static void __btn_double_click_callback(void* arg)
{
    ESP_LOGI("btn", "ダブルクリック");
}

void app_main(void)
{
    ESP_ERROR_CHECK(bsp_board_init());

    /*
     * 使用可能なボタンイベントタイプ:
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

ご安心ください！私たちがサポートします！質問がある場合は、[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)をご利用ください。

大量注文やカスタマイズのご要望がある場合は、iot@seeed.cc にお問い合わせください。