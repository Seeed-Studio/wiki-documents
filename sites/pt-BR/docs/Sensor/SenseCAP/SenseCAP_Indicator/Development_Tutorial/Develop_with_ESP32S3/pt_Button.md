---
description: Botão
title: Botão
keywords:
  - SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_ESP32_Button
last_update:
  date: 5/23/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_ESP32_Button/
---
# **Botão**

Este código inicializa a placa, registra dois callbacks de eventos de botão e especifica os eventos de botão a serem tratados. Quando o usuário pressionar o botão, a função de callback correspondente será chamada.
A função ESP_LOGI() é usada para imprimir uma mensagem no console indicando qual evento de botão ocorreu.


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




# **Suporte Técnico**

Não se preocupe, nós cuidamos disso! Visite nosso [Canal Oficial da Seeed no Discord](https://discord.com/invite/QqMgVwHT3X) para fazer suas perguntas!

Se você tiver um pedido em grande quantidade ou necessidade de customização, entre em contato pelo e-mail iot@seeed.cc
