---
description: Neste tutorial, embarcaremos em uma jornada para explorar o desenvolvimento de aplicações Zigbee utilizando a placa de desenvolvimento XIAO ESP32C6. A XIAO ESP32C6 é uma placa compacta, porém poderosa, que possui o chip ESP32-C6, o qual oferece conectividade integrada Wi‑Fi e Bluetooth Low Energy (BLE). Ao aproveitar o ESP Zigbee SDK, podemos tirar o máximo proveito da XIAO ESP32C6 e estender suas capacidades para incluir funcionalidades Zigbee.
title: Guia Rápido de Início com Zigbee no XIAO ESP32C6 (ESP-IDF)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.jpg
slug: /xiao_esp32c6_zigbee
sku: 113991254, 102010636, 101991470
last_update:
  date: 05/30/2024
  author: Citric
createdAt: '2024-05-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_zigbee/
---

Zigbee é um protocolo de comunicação sem fio amplamente adotado, muito utilizado em automação residencial, gerenciamento inteligente de energia e aplicações de Internet das Coisas (IoT). Conhecido por seu baixo consumo de energia, transmissão de dados confiável e recursos de rede em malha (mesh), Zigbee é uma excelente escolha para construir redes sem fio escaláveis e eficientes.

Neste tutorial, embarcaremos em uma jornada para explorar o desenvolvimento de aplicações Zigbee utilizando a placa de desenvolvimento XIAO ESP32C6. A XIAO ESP32C6 é uma placa compacta, porém poderosa, que possui o chip ESP32-C6, o qual oferece conectividade integrada Wi‑Fi e Bluetooth Low Energy (BLE). Ao aproveitar o ESP Zigbee SDK, podemos tirar o máximo proveito da XIAO ESP32C6 e estender suas capacidades para incluir funcionalidades Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png" style={{width:800, height:'auto'}}/></div>

Para nos aprofundarmos no desenvolvimento com Zigbee, focaremos em dois programas de exemplo fornecidos pelo ESP Zigbee SDK: HA_on_off_light e HA_on_off_switch. Esses exemplos mostram, respectivamente, a implementação de um dispositivo de iluminação Zigbee e de um dispositivo de interruptor Zigbee. Ao examinar detalhadamente a estrutura do código, os modelos de dados e os princípios de funcionamento por trás desses exemplos, obteremos uma compreensão abrangente do desenvolvimento de dispositivos Zigbee.

Ao longo deste tutorial, abordaremos os seguintes aspectos principais:

1. Configuração do ambiente de desenvolvimento para XIAO ESP32C6 e ESP Zigbee SDK.
2. Análise da estrutura e organização do código dos exemplos HA_on_off_light e HA_on_off_switch.
3. Compreensão dos modelos de dados de dispositivos Zigbee e de como eles são definidos no código.
4. Exploração do processo de inicialização e dos mecanismos de tratamento de eventos em dispositivos Zigbee.
5. Exame dos padrões de comunicação e das trocas de mensagens entre dispositivos Zigbee.

Ao final deste tutorial, você terá adquirido uma base sólida em desenvolvimento Zigbee utilizando o XIAO ESP32C6 e o ESP Zigbee SDK. Munido desse conhecimento e de habilidades práticas, você estará bem preparado para criar seus próprios projetos baseados em Zigbee e contribuir para o ecossistema em constante crescimento de dispositivos Zigbee.

Então, vamos embarcar nesta empolgante jornada de desenvolvimento Zigbee com o XIAO ESP32C6 e liberar todo o potencial deste poderoso protocolo de comunicação sem fio!

## Preparação de Hardware

Neste tutorial usaremos **dois** XIAO ESP32C6 como exemplos para explicar Zigbee. Você pode acessar e comprá-los pelo link abaixo. Um será um Dispositivo Final Zigbee (Zigbee End Device) e o outro será um Coordenador Zigbee (Zigbee Coordinator).

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparação do Ambiente e Demonstração

Nesta seção, iremos guiá-lo pela configuração do ambiente de desenvolvimento e pelo upload dos dois programas de exemplo.

### Etapa 1. Preparar o ambiente ESP-IDF

Para usar o Zigbee SDK, é recomendado utilizar o framework de desenvolvimento ESP-IDF da Espressif. A instalação do ESP-IDF e a configuração do ambiente no site oficial da Espressif fornecem um processo de instalação detalhado para diferentes sistemas; você pode consultá-lo clicando no botão abaixo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.espressif.com/projects/esp-idf/en/v5.1.3/esp32h2/get-started/index.html#installation" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ir para a Página 🖱️</font></span></strong>
    </a>
</div>

Se por acaso você estiver usando um sistema Ubuntu, os comandos que precisam ser executados no terminal, em linhas gerais, são os seguintes:

```
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
git checkout v5.1.3
git submodule update --init --recursive
./install.sh
source ./export.sh
cd ..
```

:::tip
A Espressif recomenda usar o **ESP-IDF v5.1.3** para desenvolvimento com Zigbee, que é a versão verificada para este tutorial.
:::

### Etapa 2. Baixar o Zigbee SDK

Clonando o esp-zigbee-sdk:

```
git clone https://github.com/espressif/esp-zigbee-sdk.git
cd esp-zigbee-sdk/examples/esp_zigbee_HA_sample
```

### Etapa 3. Escrever o procedimento HA_on_off_light

Vamos preparar o primeiro XIAO ESP32C6. Vamos escrever e gravar o firmware de Dispositivo Final (End Device) para ele.

```
cd HA_on_off_light/main
```

Como o programa de exemplo fornecido usa o GPIO8 como LED, mas o LED no XIAO é o GPIO15, precisamos fazer algumas revisões simples no programa de exemplo para poder mostrar o efeito.

O programa a ser modificado está em `esp_zb_light.c` no arquivo principal. O código completo após a modificação é o seguinte.

```cpp
#include "esp_zb_light.h"
#include "esp_check.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"
#include "driver/gpio.h"

#if !defined ZB_ED_ROLE
#error Define ZB_ED_ROLE in idf.py menuconfig to compile light (End Device) source code.
#endif

static const char *TAG = "ESP_ZB_ON_OFF_LIGHT";
#define BLINK_GPIO 15
/********************* Define functions **************************/
static esp_err_t deferred_driver_init(void)
{
    light_driver_init(LIGHT_DEFAULT_OFF);
    return ESP_OK;
}

static void configure_led(void)
{
    ESP_LOGI(TAG, "Example configured to blink GPIO LED!");
    gpio_reset_pin(BLINK_GPIO);
    /* Set the GPIO as a push/pull output */
    gpio_set_direction(BLINK_GPIO, GPIO_MODE_OUTPUT);
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
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            /* commissioning failed */
            ESP_LOGW(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
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
                gpio_set_level(BLINK_GPIO, light_state);
                // light_driver_set_power(light_state);
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
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}

void app_main(void)
{
    configure_led();
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };
    ESP_ERROR_CHECK(nvs_flash_init());
    ESP_ERROR_CHECK(esp_zb_platform_config(&config));
    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}
```

Por favor, salve-o.

### Passo 4. Gravar o procedimento HA_on_off_light

Agora conecte sua placa XIAO ESP32C6 ao computador e verifique em qual porta serial a placa está visível.

As portas seriais têm os seguintes padrões de nomenclatura: `/dev/tty`. Em geral, seu computador pode ter muitas portas que começam com `tty`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

Determinar as portas também é fácil, você pode usar o comando de consulta para ver quais portas estão presentes por padrão quando você não está conectado ao XIAO.

```
ls /dev/tty*
```

Em seguida, depois de conectar o XIAO ao computador e consultá-lo novamente, o nome de porta serial extra é o número da porta do XIAO.

Defina o dispositivo de destino.

```
idf.py set-target esp32c6
```

Compile o projeto executando:

```
idf.py build
```

Para gravar os binários que você acabou de compilar para o ESP32 na etapa anterior, você precisa executar o seguinte comando:

```
idf.py -p PORT flash
```

Substitua `PORT` pelo nome da porta USB do seu XIAO ESP32C6. Se a **PORT** não estiver definida, o `idf.py` tentará se conectar automaticamente usando as portas USB disponíveis. De acordo com o número da porta do dispositivo que consultamos na primeira etapa, para mim, devo inserir o seguinte comando para gravar o programa.

```
idf.py -p /dev/ttyACM0 flash
```

Se não houver problemas ao final do processo de gravação, o XIAO ESP32C6 será reiniciado e iniciará o aplicativo de luz Zigbee.

### Passo 5. Gravar o procedimento HA_on_off_switch

Da mesma forma, pegamos outro XIAO ESP32C6 e fazemos o upload do programa do interruptor para ele. As etapas são semelhantes.

```
cd ../HA_on_off_switch
idf.py set-target esp32c6
idf.py build
idf.py -p PORT flash
```

Se tudo correr bem, então em seguida você poderá usar o botão **BOOT** no XIAO do programa SWITCH para controlar os LEDs do XIAO do programa LIGHT para ligar ou desligar.

<div class="table-center">
<iframe width="800" height="350" src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/2.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Estrutura do programa de HA_on_off_light e HA_on_off_switch

A pasta contém exemplos que demonstram o dispositivo padrão Zigbee HA

- `HA_on_off_light` é um exemplo padrão de lâmpada HA liga-desliga demonstrando um dispositivo final Zigbee.

- `HA_on_off_switch` é um exemplo padrão de interruptor HA liga-desliga demonstrando o papel de Coordenador Zigbee. Ele fornece uma chave liga/desliga para controlar uma luz Zigbee HA liga-desliga.

Neste tutorial, vamos nos aprofundar em dois programas de exemplo fornecidos pelo ESP Zigbee SDK: `HA_on_off_light` e `HA_on_off_switch`. Ao analisar a estrutura e a organização de código desses exemplos, obteremos uma compreensão abrangente de como desenvolver aplicações de dispositivos Zigbee.

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

1. esp_zigbee_HA_sample/: Este diretório contém os projetos de amostra de Home Automation (HA) fornecidos pelo ESP Zigbee SDK.

2. HA_on_off_light/: Este subdiretório representa o projeto de exemplo "On/Off Light".
   - main/: Este diretório contém os arquivos-fonte principais para o exemplo "On/Off Light".
     - CMakeLists.txt: Este arquivo é usado pelo sistema de build CMake para especificar os arquivos-fonte e dependências para o exemplo "On/Off Light".
     - esp_zb_light.c: Este arquivo contém o código principal de implementação para o dispositivo de luz Zigbee, incluindo inicialização, tratamento de eventos e comunicação com outros dispositivos Zigbee.
     - esp_zb_light.h: Este arquivo de cabeçalho contém as declarações de funções necessárias, constantes e estruturas de dados para o dispositivo de luz Zigbee.
     - idf_component.yml: Este arquivo é o arquivo de configuração de componente ESP-IDF, que especifica as dependências de componentes e configurações de build para o exemplo "On/Off Light".
   - CMakeLists.txt: Este arquivo é o arquivo CMakeLists de nível superior para o projeto de exemplo "On/Off Light", que inclui a configuração necessária e os alvos de compilação.
   - partitions.csv: Este arquivo define a tabela de partições para o exemplo "On/Off Light", especificando o layout de memória e os tamanhos de várias partições, como o bootloader, aplicação e armazenamento.
   - sdkconfig.defaults: Este arquivo contém as configurações padrão para o projeto de exemplo "On/Off Light", que podem ser substituídas pelo usuário.

3. HA_on_off_switch/: Este subdiretório representa o projeto de exemplo "On/Off Switch".
   - main/: Este diretório contém os arquivos-fonte principais para o exemplo "On/Off Switch".
     - CMakeLists.txt: Semelhante ao exemplo "On/Off Light", este arquivo é usado pelo sistema de build CMake para especificar os arquivos-fonte e dependências para o exemplo "On/Off Switch".
     - esp_zb_switch.c: Este arquivo contém o código principal de implementação para o dispositivo interruptor Zigbee, incluindo inicialização, tratamento de eventos e comunicação com outros dispositivos Zigbee.
     - esp_zb_switch.h: Este arquivo de cabeçalho contém as declarações de funções necessárias, constantes e estruturas de dados para o dispositivo interruptor Zigbee.
     - idf_component.yml: Este arquivo é o arquivo de configuração de componente ESP-IDF para o exemplo "On/Off Switch".
   - CMakeLists.txt: Este é o arquivo CMakeLists de nível superior para o projeto de exemplo "On/Off Switch".
   - partitions.csv: Este arquivo define a tabela de partições para o exemplo "On/Off Switch".
   - sdkconfig.defaults: Este arquivo contém as configurações padrão para o projeto de exemplo "On/Off Switch".

Esses arquivos trabalham em conjunto para fornecer uma implementação de exemplo completa de dispositivos Zigbee usando o ESP Zigbee SDK. Os arquivos .c e .h contêm a implementação real do código, enquanto os arquivos CMakeLists.txt, partitions.csv e sdkconfig.defaults são usados para configuração de compilação e particionamento de memória.

## Dispositivo Final Zigbee e Modelo de Dados Zigbee

Neste tutorial, exploraremos como o código de exemplo Zigbee HA On/Off Light é estruturado com base no modelo de dados Zigbee. Ao entender a relação entre o código e o modelo de dados, você obterá insights sobre como interpretar e modificar o código de acordo com seus requisitos específicos.

Antes de mergulhar no código, é essencial compreender os conceitos-chave do modelo de dados Zigbee:

- **Nó (Node)**: Um nó representa um único produto baseado em ESP32-H2 e um nó de rede na rede Zigbee. Um nó pode ter vários endpoints.

- **Endpoint**: Um endpoint, identificado por um número entre 1 e 240, define uma aplicação em execução em um nó Zigbee. Um nó pode ter vários endpoints, cada um com uma finalidade diferente ou representando um dispositivo separado.

- **Cluster**: Um cluster, identificado por um número de 16 bits, é um objeto de aplicação que define a funcionalidade e os dados associados a um endpoint. Clusters contêm atributos e comandos.

- **Atributo**: Um atributo, identificado por um número de 16 bits, representa o estado atual ou uma quantidade física dentro de um cluster.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

Agora, vamos examinar o código de exemplo HA On/Off Light e ver como ele se mapeia para o modelo de dados Zigbee.

1. Criação do Endpoint

No código de exemplo, a função `esp_zb_on_off_light_ep_create()` é usada para criar um endpoint de lâmpada HA liga-desliga. Esta função define o ID do endpoint, o ID do dispositivo e os clusters associados.

```cpp
static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}
```

2. Registro do Dispositivo

Depois de criar o endpoint, a função `esp_zb_device_register()` é chamada para registrar o dispositivo Zigbee com o endpoint criado.

```cpp
esp_zb_device_register(esp_zb_on_off_light_ep);
```

3. Callback de Atributo

O código de exemplo registra um callback de alteração de atributo usando `esp_zb_core_action_handler_register()`. Este callback é invocado quando certos atributos são modificados, permitindo que você trate mudanças de atributos com base na lógica da sua aplicação.

```cpp
esp_zb_core_action_handler_register(zb_action_handler);
```

Na função `zb_action_handler`, você pode implementar o comportamento desejado quando o atributo liga/desliga mudar, como controlar o LED.

4. Configuração e Inicialização da Pilha Zigbee

O código de exemplo configura o dispositivo final Zigbee usando `ESP_ZB_ZED_CONFIG()` e inicializa a pilha Zigbee usando `esp_zb_init()`. A pilha é então iniciada com `esp_zb_start()`, e o loop principal é tratado por `esp_zb_main_loop_iteration()`.

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
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            /* commissioning failed */
            ESP_LOGW(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
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

1. Primeiro, a função obtém o tipo de sinal `sig_type` e o status de erro `err_status` da estrutura `esp_zb_app_signal_t` passada.

2. Em seguida, ela usa uma instrução switch para executar ações diferentes com base no tipo de sinal:

   - `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`: Este sinal indica que a inicialização da pilha Zigbee será ignorada. Nesse caso, inicializamos a pilha Zigbee e então chamamos a função `esp_zb_bdb_start_top_level_commissioning` para iniciar o processo de comissionamento de alto nível com o modo definido como `ESP_ZB_BDB_MODE_INITIALIZATION`.

   - `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` e `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`: Esses sinais indicam a primeira inicialização ou a reinicialização do dispositivo. Se o status de erro for `ESP_OK`, executamos algumas tarefas de inicialização, como a inicialização adiada do driver. Em seguida, verificamos se o dispositivo está em estado de fábrica novo. Se estiver, iniciamos o processo de direcionamento de rede; caso contrário, exibimos uma mensagem indicando que o dispositivo foi reiniciado. Se o status de erro não for `ESP_OK`, exibimos uma mensagem indicando que a inicialização da pilha Zigbee falhou.

   - `ESP_ZB_BDB_SIGNAL_STEERING`: Este sinal indica o resultado do processo de direcionamento de rede. Se o status de erro for `ESP_OK`, significa que o dispositivo entrou na rede com sucesso. Nesse caso, exibimos algumas informações da rede, como o PAN ID, o número do canal e o endereço curto. Se o status de erro não for `ESP_OK`, significa que o direcionamento de rede falhou e exibimos uma mensagem de erro. Em seguida, usamos a função `esp_zb_scheduler_alarm` para definir um temporizador para reiniciar o processo de direcionamento de rede após um atraso de 1 segundo.

   - Outros sinais: simplesmente exibimos o nome do sinal, o tipo e o status de erro.

O objetivo desta função é executar ações apropriadas com base em diferentes sinais da camada de aplicação Zigbee. Ela é uma das partes centrais de uma aplicação Zigbee. Lida com processos críticos como inicialização do dispositivo, inicialização geral e entrada na rede.

## Coordenador Zigbee

Para o dispositivo Coordenador Zigbee, sua inicialização e tarefas RTOS são semelhantes às do End Device, exceto que nas tarefas RTOS há um passo a menos de registro da função de callback.

Portanto, para o Coordenador Zigbee, a parte mais crítica é pesquisar e corresponder o dispositivo correspondente e emitir comandos de controle para o dispositivo.

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    esp_zb_zdo_signal_device_annce_params_t *dev_annce_params = NULL;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network formation");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_FORMATION);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGE(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_FORMATION:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Formed network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
        } else {
            ESP_LOGI(TAG, "Restart network formation (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_FORMATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Network steering started");
        }
        break;
    case ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE:
        dev_annce_params = (esp_zb_zdo_signal_device_annce_params_t *)esp_zb_app_signal_get_params(p_sg_p);
        ESP_LOGI(TAG, "New device commissioned or rejoined (short: 0x%04hx)", dev_annce_params->device_short_addr);
        esp_zb_zdo_match_desc_req_param_t  cmd_req;
        cmd_req.dst_nwk_addr = dev_annce_params->device_short_addr;
        cmd_req.addr_of_interest = dev_annce_params->device_short_addr;
        /* find color dimmable light once device joining the network */
        esp_zb_zdo_find_color_dimmable_light(&cmd_req, user_find_cb, NULL);
        break;
    case ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS:
        if (err_status == ESP_OK) {
            if (*(uint8_t *)esp_zb_app_signal_get_params(p_sg_p)) {
                ESP_LOGI(TAG, "Network(0x%04hx) is open for %d seconds", esp_zb_get_pan_id(), *(uint8_t *)esp_zb_app_signal_get_params(p_sg_p));
            } else {
                ESP_LOGW(TAG, "Network(0x%04hx) closed, devices joining not allowed.", esp_zb_get_pan_id());
            }
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
   - Este sinal indica que a inicialização da pilha Zigbee deve ser ignorada.
   - Ele registra uma mensagem indicando a inicialização da pilha Zigbee.
   - Ele inicia o processo de comissionamento de alto nível com o modo definido como `ESP_ZB_BDB_MODE_INITIALIZATION`.

2. `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` e `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`:
   - Esses sinais indicam que o dispositivo foi iniciado pela primeira vez ou foi reiniciado.
   - Se o status de erro for `ESP_OK`, ele registra mensagens sobre o status da inicialização adiada do driver e se o dispositivo foi iniciado em modo de fábrica ou não.
   - Se o dispositivo estiver em modo de fábrica novo, ele inicia o processo de formação de rede chamando `esp_zb_bdb_start_top_level_commissioning` com o modo definido como `ESP_ZB_BDB_MODE_NETWORK_FORMATION`.
   - Se o dispositivo não estiver em modo de fábrica novo, ele registra uma mensagem indicando que o dispositivo foi reiniciado.
   - Se o status de erro não for `ESP_OK`, ele registra uma mensagem de erro.

3. `ESP_ZB_BDB_SIGNAL_FORMATION`:
   - Este sinal indica o status do processo de formação de rede.
   - Se o status de erro for `ESP_OK`, ele obtém o PAN ID estendido, registra informações sobre a rede formada (PAN ID, canal, endereço curto) e inicia o processo de direcionamento de rede chamando `esp_zb_bdb_start_top_level_commissioning` com o modo definido como `ESP_ZB_BDB_MODE_NETWORK_STEERING`.
   - Se o status de erro não for `ESP_OK`, ele registra uma mensagem para reiniciar a formação de rede e agenda um alarme para chamar `bdb_start_top_level_commissioning_cb` após um atraso de 1000 milissegundos.

4. `ESP_ZB_BDB_SIGNAL_STEERING`:
   - Este sinal indica o status do processo de direcionamento de rede.
   - Se o status de erro for `ESP_OK`, ele registra uma mensagem indicando que o direcionamento de rede foi iniciado.

5. `ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE`:
   - Este sinal é acionado quando um novo dispositivo é comissionado ou volta a ingressar na rede.
   - Ele obtém os parâmetros de anúncio do dispositivo e registra uma mensagem com o endereço curto do novo dispositivo.
   - Ele prepara uma requisição de descritor de correspondência (`esp_zb_zdo_match_desc_req_param_t`) com o destino e o endereço de interesse definidos como o endereço curto do novo dispositivo.
   - Ele chama `esp_zb_zdo_find_color_dimmable_light` para encontrar um dispositivo de luz dimerizável colorida e especifica `user_find_cb` como a função de callback.

6. `ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS`:
   - Este sinal indica o status do estado de permissão de ingresso na rede.
   - Se o status de erro for `ESP_OK`, ele registra uma mensagem indicando se a rede está aberta para ingresso e a duração pela qual ela permanece aberta. Se a rede estiver fechada, ele registra uma mensagem de aviso.

7. Caso padrão:
   - Para quaisquer outros tipos de sinal, ele registra uma mensagem geral com o tipo de sinal e o status de erro.

De modo geral, este código lida com vários eventos relacionados ao Zigbee e executa ações como inicializar a pilha Zigbee, formar uma rede, direcionar a rede, tratar anúncios de dispositivos e encontrar dispositivos de luz dimerizável colorida.

O restante do exemplo aborda a lógica de estabilização de teclas e interrupções de teclas. Se tiver interesse, você pode ler e entender isso por conta própria.

## Solução de Problemas

### Q1: Continuo tendo problemas com ESP_ZB_ON_OFF_LIGHT: o direcionamento de rede não teve sucesso para corresponder a outro XIAO

Antes de tudo, verifique a versão do ESP-IDF que você está usando, e certifique-se de estar usando **ESP-IDF v5.1.3** para compilar o aplicativo de exemplo Zigbee; caso contrário, altere a versão do IDF.

Em seguida, tente reconectar o dispositivo. Você pode tentar energizar primeiro o dispositivo que tem o programa **HA_on_off_switch** carregado e depois energizar o dispositivo que tem o programa **HA_on_off_light** carregado.

Se ainda assim não funcionar, apague toda a flash e carregue o programa novamente.

```
idf.py erase_flash flash monitor
```

Se nada do que foi mencionado acima funcionar, envie um issue para a Espressif.

### P2: O que devo fazer se eu quiser parear um novo dispositivo após um pareamento bem-sucedido?

Usar diretamente o carregador de comando de gravação (`flash`) não apagará os registros históricos de pareamento salvos na flash. Use o comando a seguir para reenviar o programa e parear o novo dispositivo.

```
idf.py erase_flash flash monitor
```

## Recursos

- **[Documentos Oficiais da Espressif]** [Developing with ESP Zigbee SDK](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32/developing.html)
- **[GITHUB]** [Repositório Zigbee SDK](https://github.com/espressif/esp-zigbee-sdk)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
