---
title: Guia de Início Rápido Zigbee Seeed Studio XIAO ESP32C5 (ESP-IDF)
description: ''
keywords:
  - xiao
  - esp32c5
  - zigbee
  - idf
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /xiao_esp32c5_zigbee_idf
sku: 100010048
last_update:
  date: 1/9/2026
  author: Zeller
createdAt: '2024-05-30'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_zigbee_idf/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Guia de Início Rápido Zigbee Seeed Studio XIAO ESP32-C5 (ESP-IDF)

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_1_1.png" style={{width:800, height:'auto'}}/></div>

Zigbee é um protocolo de comunicação sem fio amplamente adotado, muito utilizado em automação residencial, gerenciamento inteligente de energia e aplicações de Internet das Coisas (IoT). Conhecido por seu baixo consumo de energia, transmissão de dados confiável e capacidades de rede mesh, o Zigbee é uma excelente escolha para construir redes sem fio escaláveis e eficientes.

Neste tutorial, vamos embarcar em uma jornada para explorar o desenvolvimento de aplicações Zigbee usando a placa de desenvolvimento XIAO ESP32-C5. O XIAO ESP32-C5 é uma placa compacta, porém poderosa, que apresenta o chip ESP32-C5, o qual oferece conectividade Wi‑Fi e Bluetooth Low Energy (BLE) integrada. Ao aproveitar o ESP Zigbee SDK, podemos explorar todo o potencial do XIAO ESP32-C5 e estender suas capacidades para incluir a funcionalidade Zigbee.

Para nos aprofundarmos no desenvolvimento com Zigbee, vamos focar em dois programas de exemplo fornecidos pelo ESP Zigbee SDK: HA_on_off_light e HA_on_off_switch. Esses exemplos demonstram, respectivamente, a implementação de um dispositivo de iluminação Zigbee e de um dispositivo de interruptor Zigbee. Ao examinar detalhadamente a estrutura do código, os modelos de dados e os princípios de funcionamento por trás desses exemplos, obteremos uma compreensão abrangente do desenvolvimento de dispositivos Zigbee.

Ao longo deste tutorial, abordaremos os seguintes aspectos principais:

1. Configuração do ambiente de desenvolvimento para o XIAO ESP32-C5 e o ESP Zigbee SDK.
2. Análise da estrutura e organização do código dos exemplos HA_on_off_light e HA_on_off_switch.
3. Compreensão dos modelos de dados de dispositivos Zigbee e de como eles são definidos no código.
4. Exploração do processo de inicialização e dos mecanismos de tratamento de eventos em dispositivos Zigbee.
5. Exame dos padrões de comunicação e das trocas de mensagens entre dispositivos Zigbee.

Ao final deste tutorial, você terá adquirido uma base sólida em desenvolvimento Zigbee usando o XIAO ESP3-C5 e o ESP Zigbee SDK. Munido desse conhecimento e de habilidades práticas, você estará bem preparado para criar seus próprios projetos baseados em Zigbee e contribuir para o ecossistema em constante crescimento de dispositivos Zigbee.

Então, vamos embarcar nesta empolgante jornada de desenvolvimento Zigbee com o XIAO ESP32-C5 e liberar todo o potencial deste poderoso protocolo de comunicação sem fio!

## Preparação de Hardware

Você precisa preparar duas placas XIAO ESP32-C5 e alguns acessórios.

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base para XIAO </th>
        <th>Grove - LED de Cor Variável</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

## Configuração do Ambiente

Neste tutorial, vamos guiá-lo na implementação da funcionalidade Zigbee no Seeed Studio XIAO ESP32C5. Você precisará instalar previamente o framework ESP-IDF e o ESP-Zigbee SDK.

:::tip
Este exemplo é baseado no sistema Ubuntu (Linux). Se você estiver usando um sistema diferente, consulte a documentação oficial da Espressif para fazer os ajustes necessários. [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/index.html)
:::

### Instalando o SDK ESP-IDF

Para usar o Zigbee SDK, primeiro você precisa configurar o ambiente de desenvolvimento ESP-IDF. Digite os seguintes comandos no terminal do sistema Ubuntu.

```bash
mkdir esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
git checkout v5.5.1
git submodule update --init --recursive
./install.sh
source ./export.sh
cd ..
```

Se você estiver usando um sistema diferente, clique no botão abaixo para acessar o site da Espressif para mais informações.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/index.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ir para a Página 🖱️</font></span></strong>
    </a>
</div><br/>

:::tip
Recomendamos usar **ESP-IDF v5.3.2 ou posterior para desenvolvimento**. Este tutorial usa a **v5.5.1**, que foi testada e confirmada como funcional.
:::

### Instalando o Zigbee SDK

Clone o `esp-zigbee-sdk` :

```bash
cd ~/esp
git clone https://github.com/espressif/esp-zigbee-sdk.git
```

## Programação de Software

Vamos modificar e usar dois exemplos do esp-zigbee-sdk: `HA_on_off_light` e `HA_on_off_switch`. Ambos estão localizados no diretório `esp-zigbee-sdk/examples/esp_zigbee_HA_sample`.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_2.png" style={{width:800, height:'auto'}}/></div>

### Modificando HA_on_off_light

**Passo 1.** Abra a pasta `main` no diretório do exemplo `HA_on_off_ligh`t.

```bash
cd ~/esp/esp-zigbee-sdk/examples/esp_zigbee_HA_sample/HA_on_off_light/main
```

**Passo 2.** Modifique o conteúdo de `esp_zb_light.c` dentro da pasta `main`

No exemplo `HA_on_off_light`, o pino GPIO padrão para controlar a luz é o **GPIO27**, que é o mesmo pino usado para controlar o LED USER no XIAO ESP32-C5. Para obter um efeito de exibição mais intuitivo, altere-o para **GPIO1** e faça outras modificações simples conforme necessário.

<details>

<summary>esp_zb_light.c</summary>

```cpp
#include "esp_zb_light.h"
#include "esp_check.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"

#if !defined ZB_ED_ROLE
#error Define ZB_ED_ROLE in idf.py menuconfig to compile light (End Device) source code.
#endif

static const char *TAG = "ESP_ZB_ON_OFF_LIGHT";
#define MY_LED_GPIO  GPIO_NUM_1

// modify start
#include "driver/gpio.h"  // Include the GPIO driver header file(Modify)

// Define the default state of the light (off)  (Modify)
void light_driver_init(bool power);
void light_driver_set_power(bool power);

void light_driver_init(bool power)
{
    // Configure GPIO as output mode
    gpio_reset_pin(MY_LED_GPIO);
    gpio_set_direction(MY_LED_GPIO, GPIO_MODE_OUTPUT);
    // Initialization state
    light_driver_set_power(power);
}

// Rewrite the switch control function
void light_driver_set_power(bool power)
{
    // If your LED is on when it receives a high voltage, use: gpio_set_level(MY_LED_GPIO, power);
    // If your LED is on when it receives a low voltage 
    //(a common onboard LED), use: gpio_set_level(MY_LED_GPIO, ! power);

    gpio_set_level(MY_LED_GPIO, power); 

    ESP_LOGI("USER_DRIVER", "Light physical state changed to: %d", power);
}
// modify end

/********************* Define functions **************************/
static esp_err_t deferred_driver_init(void)
{
    static bool is_inited = false;
    if (!is_inited) {
        light_driver_init(LIGHT_DEFAULT_OFF);
        is_inited = true;
    }
    return is_inited ? ESP_OK : ESP_FAIL;
}

static void bdb_start_top_level_commissioning_cb(uint8_t mode_mask)
{
    ESP_RETURN_ON_FALSE(esp_zb_bdb_start_top_level_commissioning(mode_mask) == ESP_OK, , TAG, "Failed to start Zigbee commissioning");
}

void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Joined network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "Network steering was not successful (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}

static esp_err_t zb_attribute_handler(const esp_zb_zcl_set_attr_value_message_t *message)
{
    esp_err_t ret = ESP_OK;
    bool light_state = 0;

    ESP_RETURN_ON_FALSE(message, ESP_FAIL, TAG, "Empty message");
    ESP_RETURN_ON_FALSE(message->info.status == ESP_ZB_ZCL_STATUS_SUCCESS, ESP_ERR_INVALID_ARG, TAG, "Received message: error status(%d)",
                        message->info.status);
    ESP_LOGI(TAG, "Received message: endpoint(%d), cluster(0x%x), attribute(0x%x), data size(%d)", message->info.dst_endpoint, message->info.cluster,
             message->attribute.id, message->attribute.data.size);
    if (message->info.dst_endpoint == HA_ESP_LIGHT_ENDPOINT) {
        if (message->info.cluster == ESP_ZB_ZCL_CLUSTER_ID_ON_OFF) {
            if (message->attribute.id == ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID && message->attribute.data.type == ESP_ZB_ZCL_ATTR_TYPE_BOOL) {
                light_state = message->attribute.data.value ? *(bool *)message->attribute.data.value : light_state;
                ESP_LOGI(TAG, "Light sets to %s", light_state ? "On" : "Off");
                light_driver_set_power(light_state);
            }
        }
    }
    return ret;
}

static esp_err_t zb_action_handler(esp_zb_core_action_callback_id_t callback_id, const void *message)
{
    esp_err_t ret = ESP_OK;
    switch (callback_id) {
    case ESP_ZB_CORE_SET_ATTR_VALUE_CB_ID:
        ret = zb_attribute_handler((esp_zb_zcl_set_attr_value_message_t *)message);
        break;
    default:
        ESP_LOGW(TAG, "Receive Zigbee action(0x%x) callback", callback_id);
        break;
    }
    return ret;
}

static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    zcl_basic_manufacturer_info_t info = {
        .manufacturer_name = ESP_MANUFACTURER_NAME,
        .model_identifier = ESP_MODEL_IDENTIFIER,
    };

    esp_zcl_utility_add_ep_basic_manufacturer_info(esp_zb_on_off_light_ep, HA_ESP_LIGHT_ENDPOINT, &info);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_stack_main_loop();
}

void app_main(void)
{
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };
    ESP_ERROR_CHECK(nvs_flash_init());
    ESP_ERROR_CHECK(esp_zb_platform_config(&config));
    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}
```

</details>

**Passo 3.** Gravando o programa `HA_on_off_light`

Volte para o diretório `HA_on_off_light` e defina o chip de destino como `esp32c5`:

```bash
cd ../
idf.py set-target esp32c5
```
<br/>

Execute o seguinte comando para compilar o projeto:

```bash
idf.py build
```

Se a compilação for bem-sucedida, o resultado deve ser semelhante à figura abaixo:

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_4.png" style={{width:800, height:'auto'}}/></div>

Conecte uma das placas XIAO ESP32-C5 ao seu host Ubuntu. A porta serial padrão geralmente é /`dev/ttyACM0`.

:::tip
Você pode usar o comando de consulta para verificar quais portas existem por padrão quando nenhum XIAO está conectado.

```bash
ls /dev/tty*
```

:::

No ESP-IDF, o comando para gravação é:

```bash
idf.py -p PORT flash
```

Substitua PORT pela porta USB do seu XIAO ESP32-C5. Se PORT não for definido, o idf.py tentará se conectar automaticamente usando uma porta USB disponível. Para este tutorial, a porta de gravação é `/dev/ttyACM0`:

```bash
idf.py -p /dev/ttyACM0
```

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_5.png" style={{width:800, height:'auto'}}/></div>

Se não houver problemas ao final do processo de gravação, o XIAO ESP32-C5 será reiniciado e iniciará o aplicativo Zigbee Light.

### Gravando HA_on_off_switch

Da mesma forma, pegue o outro XIAO ESP32-C5 e grave o programa do switch. As etapas são semelhantes às da gravação de `HA_on_off_light`.
No exemplo `HA_on_off_switch`, o pino do switch é o **GPIO28**, que é o mesmo pino usado para controlar o botão BOOT no XIAO ESP32-C5.

```bash
cd ../HA_on_off_switch
idf.py set-target esp32c5
idf.py build
idf.py -p PORT flash
```

Se a gravação for bem-sucedida, você poderá controlar o LED no outro XIAO ESP32-C5 para ligar ou desligar usando o botão BOOT.

### Resultado

Se as modificações do programa tiverem sido bem-sucedidas e você tiver gravado os programas HA_on_off_switch e HA_on_off_light nas duas placas XIAO ESP32-C5, poderá abrir o monitor serial para visualizar informações sobre a formação da rede Zigbee do dispositivo e comandos de controle.

- A porta serial imprime informações de configuração. Depois que eles formarem uma rede Zigbee com sucesso, irão imprimir informações de configuração, bem como comandos de controle e comandos recebidos. O lado esquerdo mostra o dispositivo HA_on_off_switch, e o lado direito mostra o dispositivo HA_on_off_light.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_6.png" style={{width:1000, height:'auto'}}/></div>

- Pressionar e segurar o botão BOOT pode alternar o LED no outro XIAO ESP32-C5.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_result.gif" style={{width:600, height:'auto'}}/></div>
## Estrutura do Programa de HA_on_off_light e HA_on_off_switch

A pasta contém exemplos que demonstram o dispositivo padrão Zigbee HA

- `HA_on_off_light` é um exemplo padrão de lâmpada HA liga/desliga demonstrando um dispositivo final Zigbee (Zigbee End-device).

- `HA_on_off_switch` é um exemplo padrão de switch HA liga/desliga demonstrando o papel de Coordenador Zigbee. Ele fornece uma chave liga/desliga para controlar uma luz HA Zigbee liga/desliga.

Neste tutorial, vamos nos aprofundar em dois programas de exemplo fornecidos pelo ESP Zigbee SDK: `HA_on_off_light` e `HA_on_off_switch`. Ao analisar a estrutura e a organização do código desses exemplos, obteremos uma compreensão abrangente de como desenvolver aplicações de dispositivos Zigbee.

```
- esp_zigbee_HA_sample/
    - HA_on_off_light/
        - main/
          - CMakeLists.txt
          - esp_zb_light.c
          - esp_zb_light.h
          - idf_component.yml
        - CMakeLists.txt
        - partitions.csv
        - sdkconfig.defaults
        ...
    - HA_on_off_switch/
        - main/
          - CMakeLists.txt
          - esp_zb_switch.c
          - esp_zb_switch.h
          - idf_component.yml
        - CMakeLists.txt
        - partitions.csv
        - sdkconfig.defaults
        ...
```

1. esp_zigbee_HA_sample/: Este diretório contém os projetos de exemplo de Home Automation (HA) fornecidos pelo ESP Zigbee SDK.

2. HA_on_off_light/: Este subdiretório representa o projeto de exemplo "On/Off Light".
   - main/: Este diretório contém os arquivos-fonte principais para o exemplo "On/Off Light".
     - CMakeLists.txt: Este arquivo é usado pelo sistema de build CMake para especificar os arquivos-fonte e dependências para o exemplo "On/Off Light".
     - esp_zb_light.c: Este arquivo contém o código principal de implementação para o dispositivo de luz Zigbee, incluindo inicialização, tratamento de eventos e comunicação com outros dispositivos Zigbee.
     - esp_zb_light.h: Este arquivo de cabeçalho contém as declarações de funções necessárias, constantes e estruturas de dados para o dispositivo de luz Zigbee.
     - idf_component.yml: Este arquivo é o arquivo de configuração de componente do ESP-IDF, que especifica as dependências de componentes e as configurações de build para o exemplo "On/Off Light".
   - CMakeLists.txt: Este arquivo é o arquivo CMakeLists de nível superior para o projeto de exemplo "On/Off Light", que inclui a configuração necessária e os alvos de compilação.
   - partitions.csv: Este arquivo define a tabela de partições para o exemplo "On/Off Light", especificando o layout de memória e os tamanhos de várias partições, como o bootloader, aplicação e armazenamento.
   - sdkconfig.defaults: Este arquivo contém as configurações padrão para o projeto de exemplo "On/Off Light", que podem ser substituídas pelo usuário.

3. HA_on_off_switch/: Este subdiretório representa o projeto de exemplo "On/Off Switch".
   - main/: Este diretório contém os arquivos-fonte principais para o exemplo "On/Off Switch".
     - CMakeLists.txt: Semelhante ao exemplo "On/Off Light", este arquivo é usado pelo sistema de build CMake para especificar os arquivos-fonte e dependências para o exemplo "On/Off Switch".
     - esp_zb_switch.c: Este arquivo contém o código principal de implementação para o dispositivo de switch Zigbee, incluindo inicialização, tratamento de eventos e comunicação com outros dispositivos Zigbee.
     - esp_zb_switch.h: Este arquivo de cabeçalho contém as declarações de funções necessárias, constantes e estruturas de dados para o dispositivo de switch Zigbee.
     - idf_component.yml: Este arquivo é o arquivo de configuração de componente do ESP-IDF para o exemplo "On/Off Switch".
   - CMakeLists.txt: Este é o arquivo CMakeLists de nível superior para o projeto de exemplo "On/Off Switch".
   - partitions.csv: Este arquivo define a tabela de partições para o exemplo "On/Off Switch".
   - sdkconfig.defaults: Este arquivo contém as configurações padrão para o projeto de exemplo "On/Off Switch".

Esses arquivos trabalham em conjunto para fornecer uma implementação completa de exemplo de dispositivos Zigbee usando o ESP Zigbee SDK. Os arquivos .c e .h contêm a implementação real do código, enquanto os arquivos CMakeLists.txt, partitions.csv e sdkconfig.defaults são usados para configuração de compilação e particionamento de memória.

## Dispositivo Final Zigbee e Modelo de Dados Zigbee

Neste tutorial, exploraremos como o código de exemplo Zigbee HA On/Off Light é estruturado com base no modelo de dados Zigbee. Ao entender a relação entre o código e o modelo de dados, você obterá insights sobre como interpretar e modificar o código de acordo com seus requisitos específicos.

Antes de mergulhar no código, é essencial compreender os conceitos-chave do modelo de dados Zigbee:

- **Nó (Node)**: Um nó representa um único produto baseado em ESP32-H2 e um nó de rede na rede Zigbee. Um nó pode ter múltiplos endpoints.

- **Endpoint**: Um endpoint, identificado por um número entre 1 e 240, define uma aplicação em execução em um nó Zigbee. Um nó pode ter múltiplos endpoints, cada um servindo a um propósito diferente ou representando um dispositivo separado.

- **Cluster**: Um cluster, identificado por um número de 16 bits, é um objeto de aplicação que define a funcionalidade e os dados associados a um endpoint. Clusters contêm atributos e comandos.

- **Atributo (Attribute)**: Um atributo, identificado por um número de 16 bits, representa o estado atual ou uma grandeza física dentro de um cluster.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

Agora, vamos examinar o código de exemplo HA On/Off Light e ver como ele é mapeado para o modelo de dados Zigbee.

1. Criando o Endpoint

No código de exemplo, a função `esp_zb_on_off_light_ep_create()` é usada para criar um endpoint HA on/off light. Essa função define o ID do endpoint, o ID do dispositivo e os clusters associados.

```cpp
static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    zcl_basic_manufacturer_info_t info = {
        .manufacturer_name = ESP_MANUFACTURER_NAME,
        .model_identifier = ESP_MODEL_IDENTIFIER,
    };

    esp_zcl_utility_add_ep_basic_manufacturer_info(esp_zb_on_off_light_ep, HA_ESP_LIGHT_ENDPOINT, &info);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_stack_main_loop();
}
```

2. Registrando o Dispositivo

Após criar o endpoint, a função `esp_zb_device_register()` é chamada para registrar o dispositivo Zigbee com o endpoint criado.

```cpp
esp_zb_device_register(esp_zb_on_off_light_ep);
```

3. Callback de Atributo

O código de exemplo registra um callback de alteração de atributo usando `esp_zb_core_action_handler_register()`. Esse callback é invocado quando certos atributos são modificados, permitindo que você trate mudanças de atributos com base na lógica da sua aplicação.

```cpp
esp_zb_core_action_handler_register(zb_action_handler);
```

Na função `zb_action_handler`, você pode implementar o comportamento desejado quando o atributo ligar/desligar é alterado, como controlar a luz de LED.

4. Configuração e Inicialização da Pilha Zigbee

O código de exemplo configura o dispositivo final Zigbee usando `ESP_ZB_ZED_CONFIG()` e inicializa a pilha Zigbee usando `esp_zb_init()`. Em seguida, a pilha é iniciada com `esp_zb_start()`, e o loop principal é tratado por `esp_zb_main_loop_iteration()`.

```cpp
esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
esp_zb_init(&zb_nwk_cfg);
...
ESP_ERROR_CHECK(esp_zb_start(false));
esp_zb_main_loop_iteration();
```

A função `esp_zb_app_signal_handler` é responsável por tratar vários sinais da camada de aplicação Zigbee.

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Joined network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "Network steering was not successful (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}
```

1. Primeiro, a função obtém o tipo de sinal `sig_type` e o status de erro `err_status` a partir da estrutura `esp_zb_app_signal_t` passada.

2. Em seguida, ela usa uma instrução switch para executar ações diferentes com base no tipo de sinal:

   - `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`: Este sinal indica a omissão da inicialização da pilha Zigbee. Nesse caso, inicializamos a pilha Zigbee e então chamamos a função `esp_zb_bdb_start_top_level_commissioning` para iniciar o processo de comissão de alto nível com o modo definido como `ESP_ZB_BDB_MODE_INITIALIZATION`.

   - `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` e `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`: Esses sinais indicam a primeira inicialização ou reinicialização do dispositivo. Se o status de erro for `ESP_OK`, executamos algumas tarefas de inicialização, como inicialização adiada do driver. Em seguida, verificamos se o dispositivo está no estado de fábrica novo. Se estiver, iniciamos o processo de direcionamento de rede; caso contrário, exibimos uma mensagem indicando que o dispositivo foi reinicializado. Se o status de erro não for `ESP_OK`, exibimos uma mensagem indicando que a inicialização da pilha Zigbee falhou.

   - `ESP_ZB_BDB_SIGNAL_STEERING`: Este sinal indica o resultado do processo de direcionamento de rede. Se o status de erro for `ESP_OK`, isso significa que o dispositivo ingressou na rede com sucesso. Nesse caso, exibimos algumas informações da rede, como o PAN ID, o número do canal e o endereço curto. Se o status de erro não for `ESP_OK`, isso significa que o direcionamento de rede falhou, e exibimos uma mensagem de erro. Em seguida, usamos a função `esp_zb_scheduler_alarm` para definir um temporizador para reiniciar o processo de direcionamento de rede após um atraso de 1 segundo.

   - Outros sinais: Simplesmente exibimos o nome do sinal, tipo e status de erro.

O objetivo desta função é executar ações apropriadas com base em diferentes sinais da camada de aplicação Zigbee. Ela é uma das partes centrais de uma aplicação Zigbee. Ela lida com processos críticos, como inicialização do dispositivo, inicialização da pilha e ingresso na rede.

## Coordenador Zigbee

Para o dispositivo Coordenador Zigbee, sua inicialização e tarefas RTOS são semelhantes às do Dispositivo Final, exceto que, nas tarefas RTOS, há um passo a menos de registro da função de callback.

Portanto, para o Coordenador Zigbee, a parte mais crítica é buscar e corresponder o dispositivo correspondente e emitir comandos de controle para o dispositivo.

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Joined network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "Network steering was not successful (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}
```

Vamos analisar os diferentes casos e suas funcionalidades:

1. `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`:
   - Este sinal indica que a etapa de inicialização da pilha Zigbee está sendo tratada.
   - Ele registra uma mensagem indicando a inicialização da pilha Zigbee.
   - Ele inicia manualmente o processo de comissão de alto nível com o modo definido como `ESP_ZB_BDB_MODE_INITIALIZATION`.

2. `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` e `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`:
   - Esses sinais indicam que o dispositivo terminou sua inicialização BDB (iniciado pela primeira vez ou reinicializado).
   - Se o status de erro for `ESP_OK`:
     - Ele registra mensagens sobre o status da inicialização adiada do driver e verifica se o dispositivo está em modo de redefinição de fábrica.
     - Se o dispositivo for novo de fábrica: Ele registra **Start network steering** e inicia o processo de **network steering** (tentando ingressar em uma rede existente) chamando `esp_zb_bdb_start_top_level_commissioning` com `ESP_ZB_BDB_MODE_NETWORK_STEERING`.
     - Se o dispositivo não for novo de fábrica: Ele registra que o dispositivo foi reinicializado (implicando que mantém as credenciais de rede anteriores).
   - Se o status de erro não for `ESP_OK`:
     - Ele registra uma mensagem de aviso e agenda uma nova tentativa de inicialização BDB após 1000 milissegundos.

3. `ESP_ZB_BDB_SIGNAL_STEERING`:
   - Este sinal indica o **resultado** do processo de network steering.
   - Se o status de erro for `ESP_OK`:
     - Indica que o dispositivo **ingressou em uma rede com sucesso**.
     - Ele obtém o PAN ID estendido e registra informações detalhadas da rede: "Joined network successfully" (incluindo PAN ID, Canal e Endereço Curto).
   - Se o status de erro não for `ESP_OK`:
     - Ele registra que o direcionamento de rede não foi bem-sucedido.
     - Ele agenda uma nova tentativa do processo de direcionamento (`ESP_ZB_BDB_MODE_NETWORK_STEERING`) após 1000 milissegundos.

4. `Default case`:
   - Para quaisquer outros tipos de sinal não tratados explicitamente acima, ele registra uma mensagem geral com o nome do sinal e o status de erro para depuração.

De modo geral, este código trata vários eventos relacionados ao Zigbee e executa ações como inicializar a pilha Zigbee, formar uma rede, direcionar a rede, lidar com anúncios de dispositivos e localizar dispositivos de luz dimerizável colorida.

O restante do exemplo aborda a lógica para estabilização de pressionamento de tecla e interrupções de pressionamento de tecla. Se estiver interessado, você pode ler e entendê-lo por conta própria.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
