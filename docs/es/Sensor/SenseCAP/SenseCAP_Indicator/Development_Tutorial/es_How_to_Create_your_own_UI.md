---
description: Crea tu propia interfaz de usuario basada en codificación LVGL o con Squareline Studio
title: Cómo Crear tu propia Interfaz de Usuario
keywords:
- Indicator Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_How_to_Create_your_own_UI
sidebar_position: 4
last_update:
  date: 5/31/2023
  author: Thomas
---
# **Cómo Crear tu propia Interfaz de Usuario**

## **LvGL**

[LvGL](https://docs.lvgl.io/master/intro/index.html) es una biblioteca gráfica de código abierto que proporciona todo lo que necesitas para crear una interfaz gráfica embebida con elementos gráficos fáciles de usar, efectos visuales hermosos y una huella de memoria baja.

### **Código de Ejemplo**

Proporcionamos el código demo de la interfaz de usuario, y el [archivo de ejemplo de lvGL](https://docs.lvgl.io/master/examples.html) contiene muchos códigos de muestra para dibujar interfaces de usuario como referencia, puedes modificar el código de muestra o personalizar tu propia interfaz de usuario.


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


## **Squareline Studio(Opcional)**

[Squareline Studio](https://docs.squareline.io/docs/squareline/) es una herramienta de diseño multiplataforma que utiliza una interfaz visual para ayudar a diseñadores y desarrolladores a trabajar de manera rápida y eficiente. SquareLine Studio lo hace posible creando el código perfecto para tus proyectos. Ya sea que uses C o Python, puedes exportar código para ambos.

Si necesitas crear una interfaz de usuario más compleja o avanzada, se recomienda que uses Squareline Studio para el desarrollo.


[Instalación de Squareline Studio](https://docs.squareline.io/docs/introduction/install)


Proporcionamos un proyecto demo para la página de interfaz de usuario:

[SenseCAP Indicator/squareline_project](https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip)

### **Reemplazar con tu propia Interfaz de Usuario**


* Paso 1: Puedes hacer cambios en nuestro proyecto demo, o crear una nueva página de interfaz de usuario

Abre el proyecto demo y haz cambios:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"/></div>

Crear un nuevo proyecto:

**Nota**: La resolución de la pantalla es 480*480.


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"/></div>


* Paso 2: Exporta tu página terminada como archivos de interfaz de usuario


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"/></div>


* Paso 3: Elimina todos los archivos de interfaz de usuario originales y copia tus propios archivos de interfaz de usuario a este directorio.


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"/></div>

* Paso 4: Construye y Flashea el proyecto

Ejecuta el siguiente comando para construir, flashear y monitorear el proyecto:

`idf.py -p PORT build flash monitor`


# **Soporte Técnico**

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para asistirte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>