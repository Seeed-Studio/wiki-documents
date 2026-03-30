---
description: O código da luz é usado como exemplo para apresentar o framework de desenvolvimento Matter.
title: Visão Geral do Framework de Desenvolvimento Matter
keywords:
  - matter
  - XIAO
  - light
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /matter_development_framework
last_update:
  date: 05/15/2024
  author: Citric
createdAt: '2024-05-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/matter_development_framework/
---

# Visão Geral do Framework de Desenvolvimento Matter

:::tip
Este artigo é o quarto tutorial da série de desenvolvimento Matter com Seeed Studio XIAO ESP32. Se você não leu os tutoriais anteriores, recomendamos que os leia primeiro para verificar se o seu dispositivo está e foi configurado conforme necessário.

- **[Desenvolvimento no XIAO usando Espressif ESP-IDF](https://wiki.seeedstudio.com/pt-br/xiao_idf)**
- **[Primeiros Passos com Matter Rapidamente com a Série XIAO ESP32](https://wiki.seeedstudio.com/pt-br/getting_started_with_matter)**
- **[Desenvolvimento Matter com a Série XIAO ESP32](https://wiki.seeedstudio.com/pt-br/xiao_esp32_matter_env/)**

:::

Embarque em uma jornada iluminadora no mundo do desenvolvimento Matter com nosso tutorial abrangente. Por meio do exemplo clássico de luz, vamos lançar luz sobre os conceitos e conhecimentos fundamentais que formam a base do desenvolvimento Matter. De clusters e atributos a comandos e além, este tutorial vai equipar você com as ferramentas para navegar pelo framework Matter com confiança. Prepare-se para acender o interruptor das suas habilidades de desenvolvimento Matter e vamos mergulhar no brilhante mundo dos dispositivos conectados!

## Estrutura do Tutorial

1. **[Entendendo o Exemplo de Luz](#entendendo-o-exemplo-de-luz)**
2. **[Inicialização do Dispositivo](#inicialização-do-dispositivo)**
3. **[Criar Nó Matter](#criar-nó-matter)**
4. **[Define o Atributo do Endpoint](#define-o-atributo-do-endpoint)**
5. **[Criar Endpoint & Casar Cluster Automaticamente](#criar-endpoint--casar-cluster-automaticamente)**
6. **[Configuração inicial do dispositivo Matter com valores padrão](#configuração-inicial-do-dispositivo-matter-com-valores-padrão)**
7. **[Atualizações de dados e persistência adiada](#atualizações-de-dados-e-persistência-adiada)**

Nesta seção, focaremos no exemplo de [light](https://github.com/espressif/esp-matter/tree/main/examples/light) fornecido no ESP-Matter, que descreve em detalhes os conceitos básicos de clusters, atributos e comandos no framework de desenvolvimento Matter. Ao ler este artigo, você poderá obter uma melhor compreensão da estrutura e da lógica do framework de desenvolvimento Matter.

## Entendendo o Exemplo de Luz

Primeiro, vamos observar os diretórios de arquivos no ambiente ESP-Matter e o que eles fazem.

```
- esp-matter/
   - components/
      - esp_matter
      - esp_matter_bridge
      - esp_matter_console
      - esp_matter_controller
      - esp_matter_rainmaker
      - esp_matter_thread_br
   - connectedhomeip/
   - device_hal/
      - button_driver
      - device
      - led_driver
   - docs/
   - examples/
   - tools/
      - mfg_tool
   CMakeLists.txt
   RELEASE_NOTES.md
   export.sh
   install.sh
   requirements.txt
   ...
```

**esp-matter**: Este é o diretório raiz de todo o framework de desenvolvimento Matter.

**components**: Este diretório contém vários componentes e é o núcleo do framework Matter.

- esp_matter: Esta é a implementação da pilha de protocolo Matter no ESP32, incluindo o modelo de dados, lógica da camada de aplicação, etc.
- esp_matter_bridge: Este componente é responsável por fazer a ponte entre dispositivos ESP e outros dispositivos não ESP, alcançando interoperabilidade.
- esp_matter_console: Este é um console interativo baseado em REPL, usado para depurar e controlar dispositivos Matter.
- esp_matter_controller: Este componente implementa a funcionalidade de um controlador Matter, capaz de controlar outros dispositivos Matter.
- esp_matter_rainmaker: Este componente integra-se à plataforma em nuvem RainMaker da Espressif, permitindo controle em nuvem.
- esp_matter_thread_br: Este componente implementa a funcionalidade de Thread Border Router, usada para criar redes Thread.

**connectedhomeip**: Este é o projeto upstream de código aberto da pilha de protocolo Matter, a partir do qual o ESP Matter sincroniza seu código.

**device_hal**: Este diretório contém os drivers da camada de abstração de hardware.

- button_driver: Driver de botão.
- device: Abstração de dispositivo, definindo interfaces de dispositivo genéricas.
- led_driver: Driver de LED.

**docs**: Aqui são armazenados os documentos de desenvolvimento ESP-Matter e manuais de referência da API.

**examples**: Vários códigos de exemplo demonstrando como usar o framework Matter para desenvolvimento.

**tools**: Contém vários scripts de ferramentas de desenvolvimento.

- mfg_tool: Ferramenta para gerar certificados de fabricante.

**CMakeLists.txt**: Script de build CMake, definindo as regras de compilação para o projeto.

**RELEASE_NOTES.md**: Notas de versão, registrando as mudanças em cada versão.

**export.sh**: Script de exportação, usado para exportar variáveis de ambiente relacionadas a Matter.

**install.sh**: Script de instalação, usado para instalar as dependências e toolchains necessários para o desenvolvimento Matter.

**requirements.txt**: Lista de dependências Python, especificando as bibliotecas Python necessárias para executar o framework de desenvolvimento Matter.

Essa estrutura de diretórios reflete a filosofia de design modular do framework de desenvolvimento Matter. A pilha de protocolo central, abstração de hardware, componentes de aplicação, ferramentas auxiliares e outras partes têm cada uma suas próprias responsabilidades, ao mesmo tempo em que são combinadas de forma orgânica, fornecendo aos desenvolvedores um ambiente completo de desenvolvimento Matter.

Tomando **examples/light** como exemplo, a estrutura do exemplo fornecido pelo ESP-Matter é a seguinte:

```
- light/
   - main/
      - CMakeLists.txt
      - app_driver.cpp
      - app_main.cpp
      - app_priv.h
      - idf_components.yml
   CMakeLists.txt
   README.md
   partitions.csv
   sdkconfig.defaults
   ...
```

- **main**: Este subdiretório contém o código principal da aplicação e arquivos de configuração.
  - CMakeLists.txt: O script de build CMake para a aplicação principal.
  - app_driver.cpp: O código de driver para a aplicação de luz.
  - app_main.cpp: O ponto de entrada principal da aplicação de luz.
  - app_priv.h: Um arquivo de cabeçalho contendo declarações privadas para a aplicação de luz.
  - idf_components.yml: Um arquivo de configuração para os componentes ESP-IDF usados na aplicação de luz.

- **CMakeLists.txt**: O script de build CMake de alto nível para o exemplo de luz.

- **README.md**: Um arquivo readme fornecendo informações e instruções para o exemplo de luz.

- **partitions.csv**: Um arquivo que define a tabela de partições para o exemplo de luz.

- **sdkconfig.defaults**: Configurações padrão para o exemplo de luz.

## Inicialização do Dispositivo

Em seguida, entramos no código de light para aprofundar nosso entendimento do processo de desenvolvimento Matter por meio de uma combinação de análise de código e teoria. O código a seguir está em [manin/app_main.cpp](https://github.com/espressif/esp-matter/blob/main/examples/light/main/app_main.cpp).

```cpp
app_driver_handle_t light_handle = app_driver_light_init();
app_driver_handle_t button_handle = app_driver_button_init();
app_reset_button_register(button_handle);
```

`app_driver_handle_t light_handle = app_driver_light_init();`: Esta linha inicializa o driver da luz e retorna um handle para a instância do driver da luz.

`app_driver_handle_t button_handle = app_driver_button_init();`: Semelhante à inicialização da luz, esta linha inicializa o driver do botão.

`app_reset_button_register(button_handle);`: Esta linha registra o botão para uma funcionalidade específica, para lidar com operações de reset.

Tomando a função `app_driver_light_init()` como exemplo, o programa a seguir inicializa todas as lâmpadas, mas usa apenas a primeira (definida com os valores padrão de cor e brilho). Este também é o motivo pelo qual o programa de exemplo só pode usar uma lâmpada.

```cpp
// app_driver.cpp
app_driver_handle_t app_driver_light_init()
{
#if CONFIG_BSP_LEDS_NUM > 0
    /* Initialize led */
    led_indicator_handle_t leds[CONFIG_BSP_LEDS_NUM];
    ESP_ERROR_CHECK(bsp_led_indicator_create(leds, NULL, CONFIG_BSP_LEDS_NUM));
    led_indicator_set_hsv(leds[0], SET_HSV(DEFAULT_HUE, DEFAULT_SATURATION, DEFAULT_BRIGHTNESS));

    return (app_driver_handle_t)leds[0];
#else
    return NULL;
#endif
}
```

## Criar Nó Matter

O próximo passo na linha principal de código para a configuração do dispositivo Matter é criar um Nó Matter. O código é o seguinte:

```cpp
node::config_t node_config;

// node handle can be used to add/modify other endpoints.
node_t *node = node::create(&node_config, app_attribute_update_cb, app_identification_cb);
ABORT_APP_ON_FAILURE(node != nullptr, ESP_LOGE(TAG, "Failed to create Matter node"));
```

O modelo de dados Matter é uma forma padronizada de representar e organizar dados dentro do ecossistema Matter. Ele define uma linguagem e estrutura comuns para dispositivos, atributos e interações, permitindo interoperabilidade e comunicação perfeita entre dispositivos compatíveis com Matter.

O diagrama a seguir mostra uma visão simplificada de como isso pode ser representado no modelo de dados do Matter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/34.png" style={{width:600, height:'auto'}}/></div>

**Nó Matter**:
Um Nó Matter representa um dispositivo físico ou uma entidade lógica dentro do ecossistema Matter. Ele é o componente de nível superior do modelo de dados Matter. Cada Nó Matter tem um identificador exclusivo e pode conter um ou mais Endpoints.

- Um Nó Matter representa **um dispositivo físico** no ecossistema Matter.
- É como uma casa que pode conter múltiplos Endpoints (cômodos).
- Cada Nó Matter tem seu próprio identificador exclusivo para reconhecimento e endereçamento dentro da rede.

## Define o Atributo do Endpoint

Depois que o Nó Matter é criado, é necessário definir valores padrão para as propriedades dos Endpoints.

```cpp
extended_color_light::config_t light_config;
light_config.on_off.on_off = DEFAULT_POWER;
light_config.on_off.lighting.start_up_on_off = nullptr;
light_config.level_control.current_level = DEFAULT_BRIGHTNESS;
light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;
light_config.color_control.color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;
light_config.color_control.enhanced_color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;
light_config.color_control.color_temperature.startup_color_temperature_mireds = nullptr;
```

1. `light_config.on_off.on_off = DEFAULT_POWER;`
   - Define o estado inicial ligado/desligado do endpoint como `DEFAULT_POWER`.
   - `DEFAULT_POWER` é uma constante predefinida que representa o estado de energia padrão (por exemplo, `true` para ligado, `false` para desligado).

2. `light_config.on_off.lighting.start_up_on_off = nullptr;`
   - Define o estado ligado/desligado de inicialização do endpoint como `nullptr`.
   - Quando o dispositivo reinicia ou sofre um ciclo de energia, se esse valor for `nullptr`, significa usar o último estado ligado/desligado.
   - Se definido para um valor diferente de `nullptr`, isso indica que deve ser usado o estado ligado/desligado especificado.

3. `light_config.level_control.current_level = DEFAULT_BRIGHTNESS;`
   - Define o nível de brilho inicial do endpoint como `DEFAULT_BRIGHTNESS` (64).
   - `DEFAULT_BRIGHTNESS` é uma constante predefinida que representa o nível de brilho padrão (por exemplo, um valor entre 0 e 254).

4. `light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;`
   - Define o nível de brilho de inicialização do endpoint como `DEFAULT_BRIGHTNESS` (64).
   - Quando o dispositivo reinicia ou sofre um ciclo de energia, se esse valor for diferente de `nullptr`, significa usar o nível de brilho especificado.
   - Se definido como `nullptr`, isso indica usar o último nível de brilho.

5. `light_config.color_control.color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - Define o modo de cor do endpoint como `ColorControl::ColorMode::kColorTemperature`.
   - Isso significa que o endpoint usa o modo de temperatura de cor, em que a cor da luz é controlada ajustando a temperatura de cor.
   - `(uint8_t)` é um type cast que converte o valor do enum em um inteiro sem sinal de 8 bits.

6. `light_config.color_control.enhanced_color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - Define o modo de cor avançado do endpoint como `ColorControl::ColorMode::kColorTemperature`.
   - O modo de cor avançado fornece mais opções de controle de cor, mas aqui ele também é definido como modo de temperatura de cor.

7. `light_config.color_control.color_temperature.startup_color_temperature_mireds = nullptr;`
   - Define a temperatura de cor de inicialização do endpoint como `nullptr`.
   - Quando o dispositivo reinicia ou sofre um ciclo de energia, se esse valor for `nullptr`, significa usar a última configuração de temperatura de cor.
   - Se definido para um valor diferente de `nullptr`, isso indica usar o valor de temperatura de cor especificado.

Atributos em Matter são como propriedades ou características de um dispositivo. Eles armazenam informações sobre o estado do dispositivo, como se está ligado ou desligado, seu nível de brilho ou sua temperatura de cor. Esses atributos são organizados em grupos chamados Clusters, que estão relacionados a funções específicas do dispositivo.

Os atributos facilitam a comunicação e o funcionamento conjunto perfeito entre diferentes dispositivos e aplicativos. Ao ter uma forma padronizada de representar e acessar as propriedades do dispositivo, o Matter simplifica o desenvolvimento de sistemas de casa inteligente e garante que dispositivos de várias marcas possam interagir entre si com eficiência.

`esp_matter_endpoint.h` é um arquivo de cabeçalho importante no ESP Matter SDK que define constantes, tipos de dados e funções relacionadas a endpoints. No Matter, endpoints representam as interfaces lógicas de um dispositivo, e cada endpoint contém um conjunto de atributos e comandos que descrevem e controlam funcionalidades específicas do dispositivo.

```cpp
namespace extended_color_light {
typedef struct config {
    cluster::descriptor::config_t descriptor;
    cluster::identify::config_t identify;
    cluster::groups::config_t groups;
    cluster::scenes_management::config_t scenes_management;
    cluster::on_off::config_t on_off;
    cluster::level_control::config_t level_control;
    cluster::color_control::config_t color_control;
} config_t;

uint32_t get_device_type_id();
uint8_t get_device_type_version();
endpoint_t *create(node_t *node, config_t *config, uint8_t flags, void *priv_data);
esp_err_t add(endpoint_t *endpoint, config_t *config);
} /* extended_color_light */
```

## Criar Endpoint e Fazer Correspondência Automática de Cluster

Acima, mencionamos primeiro dois termos que são importantes no Matter, Endpoints e Clusters.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/35.png" style={{width:500, height:'auto'}}/></div>

**Endpoint(s) [Device-Type(s)]**:
Um Endpoint é uma representação lógica de uma funcionalidade ou serviço específico dentro de um Node Matter. Ele encapsula um conjunto de capacidades e comportamentos relacionados a um tipo específico de dispositivo. Um Node Matter pode ter vários Endpoints, cada um representando um tipo de dispositivo diferente. Device-Type(s) definem as características e funcionalidades específicas de um Endpoint. O Matter define um conjunto de tipos de dispositivos padrão, como lâmpadas, termostatos, fechaduras de porta e outros. Cada tipo de dispositivo tem um identificador exclusivo e um conjunto predefinido de clusters, atributos e comandos associados a ele.

- Um Endpoint é um componente lógico dentro de um Node Matter, representando uma funcionalidade ou serviço específico do dispositivo.
- Assim como os cômodos de uma casa, cada Endpoint tem sua própria finalidade dedicada, como um quarto, cozinha ou sala de estar.
- Cada Endpoint está associado a um tipo específico de dispositivo, como uma lâmpada, termostato ou fechadura de porta.
- Um Node Matter pode ter vários Endpoints, cada um representando um tipo de dispositivo e funcionalidade diferentes.

**Cluster(s)**:
Clusters são agrupamentos lógicos de atributos e comandos relacionados dentro de um Endpoint. Eles representam uma funcionalidade ou recurso específico de um dispositivo. Clusters fornecem uma forma de organizar e categorizar as capacidades de um Endpoint. Por exemplo, o "On/Off Cluster" contém atributos e comandos relacionados a ligar ou desligar um dispositivo, enquanto o "Level Control Cluster" lida com o controle do brilho ou nível de um dispositivo.

- Um Cluster é um agrupamento lógico dentro de um Endpoint, contendo atributos e comandos relacionados.
- É como os móveis ou dispositivos em um cômodo, como luzes, televisões ou condicionadores de ar, cada um com seus próprios atributos e operações.
- Cada Cluster representa uma funcionalidade ou recurso específico do dispositivo.
- Por exemplo, o "On/Off Cluster" contém atributos e comandos relacionados ao estado ligado/desligado do dispositivo, enquanto o "Level Control Cluster" contém atributos e comandos para ajustar o brilho ou nível do dispositivo.
- Um Endpoint pode ter vários Clusters, cada um responsável por diferentes funcionalidades.

Em resumo, um Node Matter é como uma casa, contendo vários Endpoints (cômodos). Cada Endpoint é como um cômodo, representando uma funcionalidade ou serviço específico do dispositivo. Clusters são como os móveis ou dispositivos em cada cômodo, contendo atributos e comandos relacionados para controle e interação.

Essa organização hierárquica permite que os dispositivos descrevam claramente suas funcionalidades e características, facilitando a interação e o controle por aplicativos e outros dispositivos. Ao padronizar tipos de dispositivos, Clusters, atributos e comandos, o Matter permite interoperabilidade e compatibilidade entre dispositivos de diferentes fabricantes.

No código, após definir os Atributos, um Endpoint é finalmente criado pelo seguinte trecho. E ele automaticamente faz a correspondência do Cluster do atributo definido.

```cpp
endpoint_t *endpoint = extended_color_light::create(node, &light_config, ENDPOINT_FLAG_NONE, light_handle);
ABORT_APP_ON_FAILURE(endpoint != nullptr, ESP_LOGE(TAG, "Failed to create extended color light endpoint"));
```

Como é alcançada a clusterização por correspondência automática? Vamos pegar como exemplo um trecho que define um atributo.

```cpp
light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;
```

`light_config.level_control` é um Atributo definido em Endpoint (esp_matter_endpoint.h). E `light_config.level_control.lighting` é um Atributo definido em Cluster (esp_matter_cluster). Com essa configuração, o sistema pode corresponder automaticamente o Cluster correspondente ao Atributo sem que os desenvolvedores precisem defini-los manualmente.

## Configurando o dispositivo Matter pela primeira vez com valores padrão

Depois que os Atributos, Clusters e Endpoints acima tiverem sido configurados, podemos começar a inicializar o eletrodoméstico Matter. As etapas e a metodologia para a inicialização são as seguintes.

```cpp
light_endpoint_id = endpoint::get_id(endpoint);
ESP_LOGI(TAG, "Light created with endpoint_id %d", light_endpoint_id);

/* Matter start */
err = esp_matter::start(app_event_cb);
ABORT_APP_ON_FAILURE(err == ESP_OK, ESP_LOGE(TAG, "Failed to start Matter, err:%d", err));

/* Starting driver with default values 使用默认值启动驱动程序 */
app_driver_light_set_defaults(light_endpoint_id);
```

Como você pode ver, a função para definir os valores padrão é `app_driver_light_set_defaults()`, e precisamos passar um ID de endpoint como parâmetro. E precisamos nos preocupar com como obter o valor de um determinado cluster, de um determinado atributo, e como definir o valor padrão do cluster e do atributo. Os segredos são mostrados no `app_driver.cpp`.

```cpp
esp_err_t err = ESP_OK;
void *priv_data = endpoint::get_priv_data(endpoint_id);
led_indicator_handle_t handle = (led_indicator_handle_t)priv_data;
node_t *node = node::get();
endpoint_t *endpoint = endpoint::get(node, endpoint_id);
cluster_t *cluster = NULL;
attribute_t *attribute = NULL;
esp_matter_attr_val_t val = esp_matter_invalid(NULL);

/* Setting brightness */
cluster = cluster::get(endpoint, LevelControl::Id);
attribute = attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::get_val(attribute, &val);
err |= app_driver_light_set_brightness(handle, &val);
```

1. Obter um Cluster:
   - Para obter um cluster, você primeiro precisa conseguir um ponteiro para o endpoint usando a função `endpoint::get(node, endpoint_id)`, onde `node` é um ponteiro para o node e `endpoint_id` é o ID do endpoint.
   - Depois de obter o ponteiro do endpoint, você pode obter um ponteiro para o cluster desejado usando a função `cluster::get(endpoint, LevelControl::Id)`, especificando o endpoint e o ID do cluster (`LevelControl::Id` neste caso).

2. Obtendo um atributo específico:
   - Após obter o ponteiro do cluster, você pode obter um ponteiro para um atributo específico dentro desse cluster usando a função `attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)`.
   - Neste exemplo, estamos recuperando o atributo `CurrentLevel` do cluster `LevelControl`.

3. Recuperando o valor do atributo:
   - Para recuperar o valor atual de um atributo, você precisa declarar uma variável do tipo `esp_matter_attr_val_t` para armazenar o valor do atributo.
   - No trecho de código, a variável `val` é inicializada com `esp_matter_invalid(NULL)`.
   - Em seguida, você pode usar a função `attribute::get_val(attribute, &val)` para buscar o valor atual do atributo e armazená-lo na variável `val`.

4. Definindo o brilho de uma luz:
   - Para definir o brilho de uma luz, você precisa ter um handle para o indicador de LED associado ao endpoint.
   - No trecho de código, o handle do indicador de LED é obtido fazendo cast do ponteiro de dados privados (`priv_data`) para o tipo apropriado (`led_indicator_handle_t`).
   - Por fim, você pode chamar a função `app_driver_light_set_brightness(handle, &val)` para definir o brilho do indicador de LED.
   - O parâmetro `handle` é o handle do indicador de LED, e `&val` é um ponteiro para a variável `esp_matter_attr_val_t` que contém o valor de brilho desejado.

Aqui está um resumo das etapas:

1. Obtenha o ponteiro do endpoint usando `endpoint::get(node, endpoint_id)`.
2. Obtenha o ponteiro do cluster usando `cluster::get(endpoint, LevelControl::Id)`.
3. Obtenha o ponteiro do atributo usando `attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)`.
4. Recupere o valor atual do atributo usando `attribute::get_val(attribute, &val)`.
5. Defina o brilho da luz usando `app_driver_light_set_brightness(handle, &val)`, onde `handle` é o handle do indicador de LED associado ao endpoint.

Seguindo essas etapas, você pode obter os ponteiros necessários para o cluster e o atributo, recuperar o valor atual do atributo e definir o brilho da luz de acordo.

## Atualizações de dados e persistência adiada

No código de `app_driver.cpp`, os valores dos atributos são atualizados usando a função `app_driver_attribute_update()`.

```cpp
if (endpoint_id == light_endpoint_id) {
   led_indicator_handle_t handle = (led_indicator_handle_t)driver_handle;
   if (cluster_id == OnOff::Id) {
      if (attribute_id == OnOff::Attributes::OnOff::Id) {
            err = app_driver_light_set_power(handle, val);
      }
   } else if (cluster_id == LevelControl::Id) {
      if (attribute_id == LevelControl::Attributes::CurrentLevel::Id) {
            err = app_driver_light_set_brightness(handle, val);
      }
   } else if (cluster_id == ColorControl::Id) {
      if (attribute_id == ColorControl::Attributes::CurrentHue::Id) {
            err = app_driver_light_set_hue(handle, val);
      } else if (attribute_id == ColorControl::Attributes::CurrentSaturation::Id) {
            err = app_driver_light_set_saturation(handle, val);
      } else if (attribute_id == ColorControl::Attributes::ColorTemperatureMireds::Id) {
            err = app_driver_light_set_temperature(handle, val);
      }
   }
}
```

O trecho de código define uma função chamada `app_driver_attribute_update` que recebe vários parâmetros, incluindo o handle do driver (`driver_handle`), o ID do endpoint (`endpoint_id`), o ID do cluster (`cluster_id`), o ID do atributo (`attribute_id`) e um ponteiro para o valor do atributo (`val`).

O propósito dessa função é atualizar os valores dos atributos de um endpoint de luz com base nos dados recebidos. Ela segue uma lógica específica para determinar qual atributo do endpoint de luz precisa ser atualizado.

Aqui está uma explicação passo a passo da lógica de atualização de dados:

1. A função primeiro verifica se o `endpoint_id` corresponde ao `light_endpoint_id`. Isso garante que a atualização seja destinada ao endpoint de luz.

2. Se o `endpoint_id` corresponder, a função faz o cast de `driver_handle` para o tipo apropriado (`led_indicator_handle_t`) para obter o handle do indicador de LED associado ao endpoint de luz.

3. Em seguida, a função verifica o `cluster_id` para determinar a qual cluster o atributo pertence. Ela oferece suporte a três clusters: `OnOff`, `LevelControl` e `ColorControl`.

4. Dependendo do `cluster_id`, a função verifica ainda o `attribute_id` para identificar o atributo específico dentro desse cluster.

5. Com base no `cluster_id` e no `attribute_id`, a função chama a função setter correspondente para atualizar o valor do atributo:
   - Se o `cluster_id` for `OnOff::Id` e o `attribute_id` for `OnOff::Attributes::OnOff::Id`, ela chama `app_driver_light_set_power(handle, val)` para definir o estado de energia da luz.
   - Se o `cluster_id` for `LevelControl::Id` e o `attribute_id` for `LevelControl::Attributes::CurrentLevel::Id`, ela chama `app_driver_light_set_brightness(handle, val)` para definir o nível de brilho da luz.
   - Se o `cluster_id` for `ColorControl::Id`, ela verifica o `attribute_id` em seguida:
     - Se o `attribute_id` for `ColorControl::Attributes::CurrentHue::Id`, ela chama `app_driver_light_set_hue(handle, val)` para definir o matiz (hue) da luz.
     - Se o `attribute_id` for `ColorControl::Attributes::CurrentSaturation::Id`, ela chama `app_driver_light_set_saturation(handle, val)` para definir a saturação da luz.
     - Se o `attribute_id` for `ColorControl::Attributes::ColorTemperatureMireds::Id`, ela chama `app_driver_light_set_temperature(handle, val)` para definir a temperatura de cor da luz.

De modo geral, essa função atua como um ponto central para atualizar os valores de atributos de um endpoint de luz. Ela recebe as informações necessárias (ID do endpoint, ID do cluster, ID do atributo e valor do atributo) e encaminha a atualização para a função setter apropriada com base nos IDs de cluster e de atributo.

Ao organizar a lógica dessa forma, o código se torna mais modular e mais fácil de manter. Ele permite atualizar diferentes atributos do endpoint de luz (estado de energia, brilho, matiz, saturação, temperatura de cor) por meio de uma única função, simplificando o processo de atualização das características da luz com base nos dados recebidos.

Mas nem todos os atributos são atualizados em tempo real. Um código que marca como persistência adiada aqueles atributos que provavelmente mudarão com frequência pode melhorar o desempenho, bem como reduzir o número de gravações na memória não volátil e estender a vida útil do dispositivo.

```cpp
/* Mark deferred persistence for some attributes that might be changed rapidly */
cluster_t *level_control_cluster = cluster::get(endpoint, LevelControl::Id);
attribute_t *current_level_attribute = attribute::get(level_control_cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::set_deferred_persistence(current_level_attribute);

cluster_t *color_control_cluster = cluster::get(endpoint, ColorControl::Id);
attribute_t *current_x_attribute = attribute::get(color_control_cluster, ColorControl::Attributes::CurrentX::Id);
attribute::set_deferred_persistence(current_x_attribute);
```

## Definindo seu próprio modelo de dados

Esta seção demonstra a criação de endpoints, clusters, atributos e comandos padrão que são definidos na especificação Matter.

#### Endpoints

O dispositivo pode ser personalizado editando o endpoint/device_type criado no *app_main.cpp* do exemplo. Exemplos:

- on_off_light:

```cpp
   on_off_light::config_t light_config;
   endpoint_t *endpoint = on_off_light::create(node, &light_config, ENDPOINT_FLAG_NONE);
```

- temperature_sensor:

```cpp
    esp_matter::endpoint::temperature_sensor::config_t temperature_sensor_config;
    endpoint_t *endpoint = temperature_sensor::create(node, &temperature_sensor_config, ENDPOINT_FLAG_NONE, NULL);
```

- fan:

```cpp
   fan::config_t fan_config;
   endpoint_t *endpoint = fan::create(node, &fan_config, ENDPOINT_FLAG_NONE);
```

- door_lock:

```cpp
   door_lock::config_t door_lock_config;
   endpoint_t *endpoint = door_lock::create(node, &door_lock_config, ENDPOINT_FLAG_NONE);
```

- window_covering_device:

```cpp
   window_covering_device::config_t window_covering_device_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   endpoint_t *endpoint = window_covering_device::create(node, &window_covering_config, ENDPOINT_FLAG_NONE);
```

   A estrutura ``config_t`` de ``window_covering_device`` inclui um construtor que permite especificar um tipo de produto final diferente do padrão, que é "Roller shade".
   Depois que uma instância de ``config_t`` tiver sido instanciada, seu tipo de produto final não poderá ser modificado.

- pump

```cpp
   pump::config_t pump_config(1, 10, 20);
   endpoint_t *endpoint = pump::create(node, &pump_config, ENDPOINT_FLAG_NONE);
```

   A estrutura ``config_t`` de ``pump`` inclui um construtor que permite especificar valores de pressão máxima, velocidade máxima e fluxo máximo. Se eles não forem definidos, serão definidos como nulos por padrão.
   Depois que uma instância de ``config_t`` tiver sido instanciada, esses três valores não poderão ser modificados.

### Clusters

Clusters adicionais também podem ser adicionados a um endpoint. Exemplos:

- on_off:

```cpp
   on_off::config_t on_off_config;
   cluster_t *cluster = on_off::create(endpoint, &on_off_config, CLUSTER_FLAG_SERVER, on_off::feature::lighting::get_id());
```

- temperature_measurement:

```cpp
   temperature_measurement::config_t temperature_measurement_config;
   cluster_t *cluster = temperature_measurement::create(endpoint, &temperature_measurement_config, CLUSTER_FLAG_SERVER);
```

- window_covering:

```cpp
   window_covering::config_t window_covering_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   cluster_t *cluster = window_covering::create(endpoint, &window_covering_config, CLUSTER_FLAG_SERVER);
```

   A estrutura ``config_t`` de ``window_covering`` inclui um construtor que permite especificar um tipo de produto final diferente do padrão, que é "Roller shade".
   Depois que uma instância de ``config_t`` tiver sido instanciada, seu tipo de produto final não poderá ser modificado.

- pump_configuration_and_control:

```cpp
   pump_configuration_and_control::config_t pump_configuration_and_control_config(1, 10, 20);
   cluster_t *cluster = pump_configuration_and_control::create(endpoint, &pump_configuration_and_control_config, CLUSTER_FLAG_SERVER);
```

   A estrutura ``config_t`` de ``pump_configuration_and_control`` inclui um construtor que permite especificar valores de pressão máxima, velocidade máxima e vazão máxima. Se eles não forem definidos, serão definidos como nulos por padrão.
   Depois que uma instância de ``config_t`` tiver sido instanciada, esses três valores não poderão ser modificados.

### Atributos e Comandos

Atributos e comandos adicionais também podem ser adicionados a um cluster.
Exemplos:

- atributo: on_off:

```cpp
   bool default_on_off = true;
   attribute_t *attribute = on_off::attribute::create_on_off(cluster, default_on_off);
```

- atributo: cluster_revision:

```cpp
   uint16_t default_cluster_revision = 1;
   attribute_t *attribute = global::attribute::create_cluster_revision(cluster, default_cluster_revision);
```

- comando: toggle:

```cpp
   command_t *command = on_off::command::create_toggle(cluster);
```

- comando: move_to_level:

```cpp
   command_t *command = level_control::command::create_move_to_level(cluster);
```

### Funcionalidades

Funcionalidades opcionais que são aplicáveis a um cluster também podem ser adicionadas.

- feature: taglist: cluster Descriptor:

```cpp
   cluster_t* cluster = cluster::get(endpoint, Descriptor::Id);
   descriptor::feature::taglist::add(cluster);
```

### Adicionando campos personalizados ao modelo de dados

Esta seção demonstra a criação de endpoints, clusters, atributos e comandos personalizados que não são definidos na especificação Matter e podem ser específicos do fabricante.

#### Endpoints

Um endpoint não padronizado pode ser criado, sem nenhum cluster.

- Criar Endpoint:

```cpp
   endpoint_t *endpoint = endpoint::create(node, ENDPOINT_FLAG_NONE);
```

#### Clusters

Clusters não padronizados/personalizados também podem ser criados:

- Criar Cluster:

```cpp
   uint32_t custom_cluster_id = 0x131bfc00;
   cluster_t *cluster = cluster::create(endpoint, custom_cluster_id, CLUSTER_FLAG_SERVER);
```

#### Atributos e Comandos

Atributos não padronizados/personalizados também podem ser criados em qualquer cluster:

- Criar Atributo:

```cpp
   uint32_t custom_attribute_id = 0x0;
   uint16_t default_value = 100;
   attribute_t *attribute = attribute::create(cluster, custom_attribute_id, ATTRIBUTE_FLAG_NONE, esp_matter_uint16(default_value);
```

- Criar Comando:

```cpp
   static esp_err_t command_callback(const ConcreteCommandPath &command_path, TLVReader &tlv_data, void
   *opaque_ptr)
   {
      ESP_LOGI(TAG, "Custom command callback");
      return ESP_OK;
   }

   uint32_t custom_command_id = 0x0;
   command_t *command = command::create(cluster, custom_command_id, COMMAND_FLAG_ACCEPTED, command_callback);
```

O modelo de dados Matter organiza esses componentes de maneira hierárquica. Um Nó Matter contém um ou mais Endpoints, cada um representando um tipo específico de dispositivo. Cada Endpoint é composto por vários Clusters, que agrupam atributos e comandos relacionados. Os atributos armazenam o estado e a configuração de um cluster, enquanto os comandos são usados para interagir e controlar o dispositivo.

Ao estruturar o modelo de dados dessa forma, o Matter possibilita interoperabilidade e padronização entre dispositivos de diferentes fabricantes. Os desenvolvedores podem usar os tipos de dispositivo, clusters, atributos e comandos definidos para criar aplicações que possam controlar e se comunicar perfeitamente com dispositivos compatíveis com Matter.

O modelo de dados Matter fornece uma linguagem e uma estrutura comuns para que os dispositivos descrevam seus recursos e interajam entre si, permitindo uma experiência de casa inteligente mais unificada e consistente.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
