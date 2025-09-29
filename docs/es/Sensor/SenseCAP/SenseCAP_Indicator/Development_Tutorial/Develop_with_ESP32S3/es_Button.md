---
description: Botón
title: Botón
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_ESP32_Button
last_update:
  date: 5/23/2023
  author: Thomas
---
# **Botón**

Este código inicializa la placa, registra dos callbacks de eventos de botón y especifica los eventos de botón que se van a manejar. Cuando el usuario presiona el botón, se llamará a la función callback correspondiente.
La función ESP_LOGI() se utiliza para imprimir un mensaje en la consola indicando qué evento de botón ocurrió.


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


# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas.

Si tienes pedidos grandes o requisitos de personalización, por favor contacta iot@seeed.cc