---
description: Crie sua própria UI com base em código LVGL ou com o Squareline Studio
title: Como criar sua própria UI
keywords:
  - Tutorial de Desenvolvimento do Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_How_to_Create_your_own_UI
sidebar_position: 4
last_update:
  date: 5/31/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_How_to_Create_your_own_UI/
---
# **Como criar sua própria UI**

## **LvGL**

[LvGL](https://docs.lvgl.io/master/intro/index.html) é uma biblioteca gráfica de código aberto que fornece tudo o que você precisa para criar uma GUI embarcada com elementos gráficos fáceis de usar, belos efeitos visuais e baixo consumo de memória.

### **Código de Exemplo**

Fornecemos o código de demonstração da interface de UI, e o [arquivo de exemplo lvGL](https://docs.lvgl.io/master/examples.html) contém muitos códigos de exemplo para desenhar UI como referência; você pode modificar o código de exemplo ou personalizar sua própria UI.

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

## **Squareline Studio (Opcional)**

[Squareline Studio](https://docs.squareline.io/docs/squareline/) é uma ferramenta de design multiplataforma que utiliza uma interface visual para ajudar designers e desenvolvedores a trabalharem de forma rápida e eficiente. O SquareLine Studio torna isso possível criando o código perfeito para seus projetos. Quer você use C ou Python, é possível exportar código para ambos.

Se você precisar criar uma interface de UI mais complexa ou avançada, é recomendável usar o Squareline Studio para o desenvolvimento.

[Instalação do Squareline Studio](https://docs.squareline.io/docs/introduction/install)

Fornecemos um projeto de demonstração para a página de UI:

[SenseCAP Indicator/squareline_project](https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip)

### **Substituir pela sua própria UI**

- Etapa 1: Você pode fazer alterações em nosso projeto de demonstração ou criar uma nova página de UI

Abra o projeto de demonstração e faça alterações:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"/></div>

Crie um novo projeto:

**Nota**: A resolução da tela é 480*480.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"/></div>

- Etapa 2: Exporte sua página finalizada como arquivos de UI

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"/></div>

- Etapa 3: Remova todos os arquivos de UI originais e copie seus próprios arquivos de UI para este diretório.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"/></div>

- Etapa 4: Faça o build e faça o flash do projeto

Execute o seguinte comando para compilar, fazer o flash e monitorar o projeto:

`idf.py -p PORT build flash monitor`

# **Suporte Técnico**

**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
