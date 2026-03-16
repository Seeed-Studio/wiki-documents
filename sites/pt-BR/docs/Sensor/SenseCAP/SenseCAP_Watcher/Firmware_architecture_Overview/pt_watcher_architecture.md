---
description: Introduzindo o framework de software SenseCAP Watcher.
title: Framework de Software Watcher
image: https://files.seeedstudio.com/wiki/watcher_software_framework/architecture_1.webp
slug: /watcher_software_framework
sidebar_position: 2
last_update:
  date: 11/5/2024
  author: Citric
createdAt: '2024-11-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_software_framework/
---

# Arquitetura de Software do Watcher

A arquitetura de software do SenseCAP Watcher é mostrada na figura abaixo, sendo principalmente dividida em três partes: aplicações de APP, UI e interação, fluxo de tarefas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/architecture.png" style={{width:800, height:'auto'}}/></div>

- **Aplicações de APP**: Principalmente algumas aplicações, como conexão WiFi, configuração Bluetooth, comunicação com a plataforma, OTA etc., que também geram alguns dados para exibição na UI.
- **UI e interação**: Principalmente a implementação da interface de UI e da interação de UI.
- **Fluxo de tarefas**: Principalmente a implementação do mecanismo de fluxo de tarefas e de vários módulos de função de fluxo de tarefas.

## 1. Framework de Fluxo de Tarefas

### 1.1 Visão geral

Para atender às necessidades de vários cenários, foi projetado um framework de fluxo de tarefas semelhante ao Node-RED, que pode organizar de forma flexível as habilidades que o dispositivo possui e permitir que elas trabalhem em conjunto.

Abstraímos as habilidades que o dispositivo possui em blocos, que podem ser produtores ou consumidores de dados, ou ambos. Em seguida, de acordo com tarefas específicas, os blocos necessários são extraídos e conectados por meio de relações produtor-consumidor para realizar tarefas de cenários específicos.

### 1.2 Mecanismo de Fluxo de Tarefas

A principal função do mecanismo de fluxo de tarefas é permitir que vários módulos funcionais operem de acordo com o JSON do fluxo de tarefas; ele gerencia o registro, a instanciação e a destruição dos módulos funcionais, bem como as conexões entre eles.

O fluxo de processamento do mecanismo de fluxo de tarefas é mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/taskflow_engine.png" style={{width:300, height:'auto'}}/></div>

1. Inicializar o mecanismo de fluxo de tarefas.
2. Registrar cada módulo funcional no mecanismo de fluxo de tarefas, usando uma lista encadeada para armazenar as funções de gerenciamento e informações de cada módulo.
3. O mecanismo de fluxo de tarefas aguarda para receber fluxos de tarefas.
4. Ao receber um novo fluxo de tarefas, analisar o JSON do fluxo de tarefas, extrair os módulos funcionais necessários e armazená-los em um array.
5. No array de módulos funcionais, encontrar a função de gerenciamento do módulo a partir da lista encadeada com base no nome do módulo e ordená-los.
6. Instanciar módulos funcionais.
7. Configurar módulos funcionais.
8. Estabelecer pipelines de eventos entre módulos funcionais para transmissão de mensagens.
9. Iniciar cada módulo funcional sequencialmente.
10. Uma vez iniciado, o fluxo de tarefas é executado.

### 1.3 JSON de Fluxo de Tarefas

O fluxo de tarefas é descrito em formato JSON, e o mecanismo de fluxo de tarefas executa o fluxo de tarefas analisando esse arquivo JSON.

A seguir está um template de JSON de fluxo de tarefas:

```json
{
    "tlid": 123456789,
    "ctd": 123456789,
    "tn": "Task flow template",
    "type": 0,
    "task_flow": [
        {
            "id": 1,
            "type": "module1",
            "index": 0,
            "version": "1.0.0",
            "params": {
            },
            "wires": [
                [
                    2
                ]
            ]
        },
        {
            "id": 2,
            "type": "module2",
            "index": 1,
            "version": "1.0.0",
            "params": {
            },
            "wires": [
                [
                    3,
                    4
                ]
            ]
        },
        {
            "id": 3,
            "type": "module3",
            "index": 2,
            "version": "1.0.0",
            "params": {
            },
            "wires": []
        },
        {
            "id": 4,
            "type": "module4",
            "index": 3,
            "version": "1.0.0",
            "params": {
            },
            "wires": []
        }
    ]
}
```

Descrições dos campos:

- **ctd**: Hora de criação do fluxo de tarefas.
- **tlid**: ID do fluxo de tarefas, que pode ser o mesmo que ctd.
- **tn**: Nome do fluxo de tarefas.
- **type:** Tipo de fluxo de tarefas
  - **0**: Fluxo de tarefas de exemplo local.
  - **1**: Fluxo de tarefas emitido via MQTT.
  - **2**: Fluxo de tarefas emitido via Bluetooth.
  - **3**: Fluxo de tarefas emitido via voz.
- **task_flow：** Contém informações detalhadas sobre cada módulo funcional no fluxo de tarefas.
  - **id**: ID do módulo.
  - **type**: Nome do módulo.
  - **index**: Ordem do módulo no fluxo de tarefas; quanto mais cedo a posição no fluxo, menor o valor, usado para ordenar os módulos.
  - **version**: Versão do módulo.
  - **params**: Parâmetros do módulo; versões diferentes podem ter diferentes configurações de parâmetros, que podem ser analisadas de forma compatível de acordo com o número da versão.
  - **wires**: Conexões entre módulos. Consulte **Pipelines de Eventos dos Módulos de Fluxo de Tarefas** para obter detalhes.

Abaixo está um exemplo de JSON de fluxo de tarefas para monitoramento de incêndio.

```json
{
    "tlid": 1720171506807,
    "ctd": 1720171527631,
    "tn": "App notifies about fire emergency",
    "task_flow": [
        {
            "id": 86464178,
            "type": "ai camera",
            "type_id": 0,
            "index": 0,
            "vision": "0.0.1",
            "params": {
                "model_type": 0,
                "model": {},
                "modes": 1,
                "conditions": [],
                "conditions_combo": 0,
                "silent_period": {
                    "time_period": {
                        "repeat": [
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1
                        ],
                        "time_start": "00:00:00",
                        "time_end": "23:59:59"
                    },
                    "silence_duration": 60
                },
                "output_type": 1,
                "shutter": 0
            },
            "wires": [
                [
                    540820974
                ]
            ]
        },
        {
            "id": 540820974,
            "type": "image analyzer",
            "type_id": 3,
            "index": 1,
            "version": "0.0.1",
            "params": {
                "url": "",
                "header": "",
                "body": {
                    "prompt": "Is there a fire?",
                    "type": 1,
                    "audio_txt": "Fire alert"
                }
            },
            "wires": [
                [
                    1516408094,
                    1981533581
                ]
            ]
        },
        {
            "id": 1981533581,
            "type_id": 99,
            "type": "sensecraft alarm",
            "index": 2,
            "version": "0.0.1",
            "params": {
                "silence_duration": 10,
                "text": "Fire alert"
            },
            "wires": []
        },
        {
            "id": 1516408094,
            "type_id": 5,
            "type": "local alarm",
            "index": 3,
            "version": "0.0.1",
            "params": {
                "sound": 1,
                "rgb": 1,
                "img": 1,
                "text": 1,
                "duration": 10
            },
            "wires": []
        }
    ],
    "type": 0
}
```

Esse fluxo de tarefas utiliza quatro blocos: câmera de IA, analisador de imagens, alarme local e alarme sensecraft. A topologia de conexão é mostrada abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

A figura a seguir mostra o fluxo geral do mecanismo de fluxo de tarefas e a inicialização dos módulos funcionais:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

### 1.4 Pipelines de Eventos dos Módulos

As conexões entre módulos funcionais representam a transmissão de dados, em que o módulo anterior gera dados e os envia para o próximo módulo. A transmissão de mensagens usa um mecanismo de eventos em que o anterior publica eventos e o posterior assina eventos. Os eventos são implementados usando o componente `esp_event` do IDF, que oferece suporte a cache em fila.

Cada módulo tem um id exclusivo, que serve como o id de evento ao qual o módulo assina. Durante a execução de `sub_set`, o módulo assina mensagens com esse id; durante a execução de parada, ele cancela o registro desse id de evento. Alguns módulos, como fontes de excitação, não possuem módulo a montante e podem operar sem assinar esse ID de evento.

Cada módulo tem um campo wires que indica o id do próximo módulo. Ao executar `pub_set`, esses ids são armazenados em cache, e os dados são publicados para esses ids quando disponíveis. Alguns módulos têm um campo wires vazio, indicando que não há módulo a jusante, consumindo dados sem produzi-los.

Cada módulo pode ter no máximo um terminal de entrada, mas vários terminais de saída, indicando diferentes saídas de dados, e cada terminal de saída pode enviar dados para vários blocos. O campo wires é um array bidimensional, com a primeira camada representando o número de terminais de saída, e a segunda camada representando os ids dos módulos para os quais um terminal envia dados.

Conforme mostrado no exemplo abaixo, o Módulo 1 publica uma mensagem no ID de evento 2, o Módulo 2 recebe e processa a mensagem; o Módulo 2 tem dois terminais de saída, o primeiro terminal de saída se conecta aos Módulos 3 e 4, e o segundo terminal de saída se conecta ao Módulo 5. Quando o terminal de saída 1 tiver dados, ele publica mensagens para os IDs de evento 3 e 4, e quando o terminal de saída 2 tiver dados, ele publica mensagens para o ID de evento 5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection2.png" style={{width:600, height:'auto'}}/></div>

A descrição JSON correspondente ao Módulo 2 é a seguinte:

```json
{
    "id": 2,
    "type": "module name",
    "index": 1,
    "version": "1.0.0",
    "params": {
    },
    "wires": [
        [
            3,
            4
        ],
        [
            5
        ]
    ]
}
```

As funções de operação relacionadas são definidas em **tf.h** (principalmente encapsulando as funções relacionadas a `esp_event` do idf) da seguinte forma:

```cpp
esp_err_t tf_event_post(int32_t event_id,
                        const void *event_data,
                        size_t event_data_size,
                        TickType_t ticks_to_wait);

esp_err_t tf_event_handler_register(int32_t event_id,
                                    esp_event_handler_t event_handler,
                                    void *event_handler_arg);

esp_err_t tf_event_handler_unregister(int32_t event_id,
                                      esp_event_handler_t event_handler);
```

#### 1.4.1 Tipos de Mensagens Transmitidas em Pipelines de Evento

Dois módulos podem ser conectados juntos, indicando que seus tipos de dados são consistentes; definimos tipos de dados e estruturas de dados correspondentes no arquivo [tf_module_data_type.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_data_type.h). Geralmente, os tipos de dados são definidos com o prefixo **TF_DATA_TYPE_**; as estruturas de dados são definidas com o prefixo **tf_data_**.

Por exemplo, definimos o tipo **TF_DATA_TYPE_BUFFER** na estrutura de enumeração de tipos, e a estrutura correspondente é a seguinte. O primeiro campo type indica o tipo de dado, e os campos restantes indicam os dados a serem transmitidos.

```cpp
typedef struct {
    uint8_t  type;
    struct tf_data_buf data;
} tf_data_buffer_t;
```

Quando um módulo recebe dados de evento, ele primeiro extrai o primeiro byte dos dados do evento para obter o tipo de dado e, em seguida, determina se os dados são o que ele deseja. Se for, ele os processa mais; caso contrário, descarta-os.

Os tipos de dados atualmente disponíveis são descritos a seguir:

<table>
  <thead>
    <tr>
      <th>Tipo de Dado</th>
      <th>Estrutura de Dado</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TF_DATA_TYPE_TIME</td>
      <td>tf_data_time_t</td>
      <td>Carimbo de tempo</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_BUFFER</td>
      <td>tf_data_buffer_t</td>
      <td>Buffer</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>tf_data_dualimage_with_inference_t</td>
      <td>Contém imagem grande, imagem pequena e informações de inferência</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>tf_data_dualimage_with_audio_text_t</td>
      <td>Contém imagem grande, imagem pequena, áudio de alarme e texto de alarme</td>
    </tr>
  </tbody>
</table>

- Imagem grande: imagem em formato jpeg 640 x 480 obtida do himax, armazenada usando codificação base64.

- Imagem pequena: imagem em formato jpeg 416 x 416 obtida do himax, armazenada usando codificação base64.

- Informações de inferência: resultados de inferência obtidos do himax, incluindo uma matriz de coordenadas de caixas, informações de classificação de classe ou informações de coordenadas de pontos, bem como informações de nome de classe.

- Áudio: dados obtidos do bloco de disparo, em formato .mp3.

#### 1.4.2 Transmissão Eficiente em Pipelines de Evento

Ao usar o componente `esp_event` do idf para transmissão de mensagens, ocorre cópia de memória durante a inserção na fila (por favor, leia o código-fonte de `esp_event` para detalhes); isso é muito desfavorável ao transmitir dados grandes, como imagens e áudio.

Portanto, adotamos um método de transmissão eficiente, transmitindo apenas ponteiros. Por exemplo, no tipo **TF_DATA_TYPE_BUFFER**, os dados a serem transmitidos são definidos da seguinte forma. O primeiro campo `p_buf` é o endereço inicial do buffer de dados, e o segundo campo len é o comprimento dos dados.

```cpp
struct tf_data_buf
{
    uint8_t *p_buf;
    uint32_t len;
};
```

Para módulos produtores de dados, eles são responsáveis pela alocação de memória de `p_buf`; o próximo módulo consumidor de dados é responsável por liberar a memória após o uso.
Algumas funções comuns de cópia e liberação de dados são definidas no arquivo [tf_module_util.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_util.h). Por exemplo, se o tipo de dado recebido do evento não for o que você deseja, você pode chamar diretamente a função **tf_data_free()** para liberar a memória (essa função implementa a liberação de todos os tipos de dados), conforme mostrado abaixo:

```cpp
static void __event_handler(void *handler_args, esp_event_base_t base, int32_t id, void *p_event_data)
{
    uint32_t type = ((uint32_t *)p_event_data)[0];
    if( type !=  TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE ) {
        ESP_LOGW(TAG, "Unsupport type %d", type);
        tf_data_free(p_event_data);
        return;
    }
    //...
}
```

### 1.5 Classe Base dos Módulos

Definimos a classe base dos módulos em [tf_module.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_engine/include/tf_module.h). O mecanismo de fluxo de tarefas não se preocupa com a implementação específica dos modelos, ele só precisa chamar as interfaces relevantes dos módulos para operá-los. Cada módulo específico só precisa implementar as funções de operação e as funções de gerenciamento.

```cpp
struct tf_module_ops
{
    int (*start)(void *p_module);
    int (*stop)(void *p_module);
    int (*cfg)(void *p_module, cJSON *p_json);
    int (*msgs_sub_set)(void *p_module, int evt_id);
    int (*msgs_pub_set)(void *p_module, int output_index, int *p_evt_id, int num);
};

typedef struct tf_module_mgmt {
    tf_module_t *(*tf_module_instance)(void);
    void (*tf_module_destroy)(tf_module_t *p_module);
}tf_module_mgmt_t;
```

Para saber como escrever um módulo, consulte o [Guia de Desenvolvimento de Módulos de Função do Watcher](https://wiki.seeedstudio.com/pt-br/watcher_function_module_development_guide)

## 2. Módulos Funcionais

### 2.1 Lista

Atualmente, os módulos internos comuns incluem ai camera, alarm trigger, image analyzer, local alarm, sensecraft alarm e uart alarm.

<table>
  <thead>
    <tr>
      <th>Categoria</th>
      <th>Módulo Funcional</th>
      <th>Tipo de Dado de Entrada</th>
      <th>Tipo de Dado de Saída</th>
      <th>Suporta Múltiplas Instâncias</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Fonte de Excitação</td>
      <td>ai camera</td>
      <td>Qualquer tipo de dado</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>N</td>
    </tr>
    <tr>
      <td>timer</td>
      <td>-</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>Y</td>
    </tr>
    <tr>
      <td rowspan="2">Módulo de Disparo</td>
      <td>alarm trigger</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>image analyzer</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td rowspan="3">Módulo de Alarme</td>
      <td>local alarm</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>N</td>
    </tr>
    <tr>
      <td>sensecraft alarm</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>uart alarm</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>Y</td>
    </tr>
  </tbody>
</table>

### 2.2 Introdução aos Módulos Funcionais

#### 2.2.1 timer

O bloco timer é um módulo de fonte de excitação, funcionando principalmente como um temporizador periódico. As definições de parâmetros são as seguintes:

```json
{
    "type": "timer",
    "version": "1.0.0",
    "params": {
        "period": 5
    }
}
```

Os parâmetros de configuração são os seguintes:

- **params**: Um objeto que contém parâmetros do dispositivo.
  - **period**: O período para iniciar o temporizador.

Descrição da conexão de terminais:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Dado</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Saída</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>Emite o carimbo de tempo atual</td>
    </tr>
  </tbody>
</table>

#### 2.2.2 ai camera

O bloco ai camera é responsável principalmente pela comunicação com o Himax, OTA de modelo, obtenção de imagens e resultados de inferência, e contém algumas funções simples de filtragem de condições. As definições de parâmetros são as seguintes:

```json
{
    "type": "ai camera",
    "version": "1.0.0",
    "params": {
        "model_type": 0,
        "model": {
            "model_id": "60021",
            "version": "1.0.0",
            "arguments": {
                "size": 8199.37,
                "url": "https://sensecraft-statics.oss-accelerate.xxx",
                "icon": "https://sensecraft-statics.oss-accelerate.xxx.png",
                "task": "detect",
                "createdAt": "1695282154",
                "updatedAt": "17149mode60582",
                "iou": 50,
                "conf": 50
            },
            "model_name": "General Object Detection",
            "model_format": "TensorRT",
            "ai_framework": "2",
            "author": "SenseCraft AI",
            "algorithm": "Object Detect(TensorRT, SMALL, COCO)",
            "classes": [
                "person"
            ],
            "checksum": ""
        },
        "modes": 1,
        "conditions": [{
            "class": "person",
            "mode": 1,
            "type": 1,
            "num": 1
        }],
        "conditions_combo": 0,
        "silent_period": {
            "time_period": {
                "repeat": [1, 1, 1, 1, 1, 1, 1],
                "time_start": "08:59:59",
                "time_end": "00:00:00"
            },
            "silence_duration": 60
        },
        "output_type": 1,
        "shutter": 0
    }
}
```

Os significados de cada campo no parâmetro params são os seguintes:

- **model_type**: Tipo de modelo, 0 indica modelo em nuvem (a URL do modelo será extraída do campo de modelo para download e uso), 1, 2 e 3 indicam modelos integrados da Himax.
- **model**: Informações específicas sobre o modelo.
  - **model_id**: Identificador exclusivo do modelo.
  - **version**: Versão do modelo.
  - **arguments**: Configuração de parâmetros do modelo.
    - **size**: Tamanho do modelo.
    - **url**: URL de download do modelo.
    - **icon**: URL do ícone do modelo.
    - **task**: Tipo de tarefa do modelo, "detect" indica detecção.
    - **createdAt**: Carimbo de data/hora da criação do modelo.
    - **updatedAt**: Carimbo de data/hora da atualização do modelo.
    - **iou**: Limite de IOU (Intersection over Union).
    - **conf**: Limite de confiança.
  - **model_name**: Nome do modelo, "General Object Detection".
  - **model_format**: Formato do modelo, "TensorRT".
  - **ai_framework**: Framework de IA utilizado.
  - **author**: Autor do modelo, "SenseCraft AI".
  - **algorithm**: Descrição do algoritmo, "Object Detect(TensorRT, SMALL, COCO)".
  - **classes**: Categorias que o modelo pode detectar, incluindo "person".
  - **checksum**: Checksum (MD5) do arquivo de modelo, atualmente vazio.
- **modes**: Modos de funcionamento, 0 indica modo de inferência, 1 indica modo de amostragem; quando for 1, o dispositivo não analisa o campo de modelo.
- **conditions**: Lista de condições de detecção.
  - **class**: Categoria a ser detectada, aqui "person".
  - **mode**: Modo de detecção, 0 indica detecção de existência, 1 indica comparação numérica, 2 indica mudança de quantidade.
  - **type**: Tipo de comparação, 0 indica menor que, 1 indica igual a, 2 indica maior que, 3 indica diferente de (válido apenas quando mode=1).
  - **num**: Valor de comparação (válido apenas quando mode=1).
- **conditions_combo**: Relação para detecção com múltiplas condições, 0 indica E (AND), 1 indica OU (OR).
- **silent_period**: Configurações de período silencioso.
  - **time_period**: Configurações de período de tempo.
    - **repeat**: Período de repetição de domingo a sábado, 1 indica habilitado.
    - **time_start**: Hora de início do período silencioso.
    - **time_end**: Hora de término do período silencioso.
  - **silence_duration**: Duração do silêncio, em segundos.
- **output_type**: Tipo de imagem de saída, 0 indica apenas imagens pequenas (412x412), 1 indica imagens grandes e pequenas (640x480; 412x412).
- **shutter**: Modo de obturador, 0 indica continuamente aberto, 1 indica acionado pela UI, 2 indica acionado por evento de entrada, 3 indica obturador único.

Descrição da conexão do terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Dado</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>Qualquer tipo de dado</td>
      <td>A entrada pode acionar um obturador</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Emite imagem grande, imagem pequena e informações de inferência (este campo é válido apenas para modelos de inferência)</td>
    </tr>
  </tbody>
</table>

#### 2.2.3 disparo de alarme

O bloco de disparo de alarme pode ser o próximo bloco da câmera de IA, adicionando principalmente algum áudio e texto para fornecer ao próximo bloco de alarme. As definições de parâmetros são as seguintes:

```json
{
    "type": "alarm trigger",
    "version": "1.0.0",
    "params": {
        "text": "", 
        "audio": ""
    }
}
```

Os parâmetros de configuração são os seguintes:

- **params**: Objeto contendo parâmetros do dispositivo.
  - **text**: Texto de áudio, informação usada para gerar o conteúdo de áudio.
  - **audio**: Arquivo de áudio codificado em Base64 representando o conteúdo de áudio em formato MP3.

Descrição da conexão do terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Dado</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Dados de saída do bloco de câmera de IA</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Emite imagem grande, imagem pequena, informações de inferência, áudio mp3 de alarme e texto</td>
    </tr>
  </tbody>
</table>

#### 2.2.4 analisador de imagem

O bloco analisador de imagem pode ser o bloco de nível seguinte da câmera de IA, chamando principalmente LLM para analisar imagens. Quando a solicitação de análise retorna um resultado que aciona um alarme, ele emitirá dados para o módulo de próximo nível. Os parâmetros são definidos da seguinte forma:

```json
{
    "type": "image analyzer",
    "version": "1.0.0",
    "params": {
        "url": "",
        "header": "",
        "body": {
            "prompt": "",
            "type": 0,
            "audio_txt": ""
        }
    }
}
```

Os parâmetros de configuração são os seguintes:

- **params**: Objeto contendo parâmetros do dispositivo.
  - **url**: Endereço URL para a requisição, reservado (geralmente usa a URL configurada no dispositivo).
  - **header**: Cabeçalhos da requisição, reservado.
  - **body**: Objeto contendo o conteúdo do corpo da requisição.
    - **prompt**: Prompt a ser incluído na requisição, fornecendo informações adicionais para análise de imagem.
    - **type**: Tipo de requisição, 1 indica monitoramento.
    - **audio_txt**: Informação de texto de áudio a ser incluída na requisição. Quando a cena de monitoramento é acionada, o serviço de interface converterá este campo em TTS e o retornará na interface.

Descrição da conexão do terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Dado</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Dados de saída do bloco de câmera de IA</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Emite imagem grande, imagem pequena, informações de inferência, áudio mp3 de alarme e texto</td>
    </tr>
  </tbody>
</table>

#### 2.2.5 alarme local

O bloco de alarme local é um bloco de alarme, implementando principalmente alarmes do dispositivo, como controlar o piscar do RGB, reproduzir áudio de alarme, exibir texto de alarme no LCD e imagens de alarme quando acionado. Os parâmetros são definidos da seguinte forma:

```json
{
    "type": "local alarm",
    "version": "1.0.0",
    "params": {
        "sound": 1,
        "rgb": 1,
        "img": 1,
        "text": 1,
        "duration": 10
    }
}
```

Os parâmetros de configuração são os seguintes:

- **params**: Objeto contendo parâmetros do dispositivo.
  - **sound**: Interruptor para reproduzir áudio, 1 significa ligado, 0 significa desligado.
  - **rgb**: Interruptor para luzes de alarme RGB, 1 significa ligado, 0 significa desligado.
  - **img**: Interruptor para exibir imagens de alarme, 1 significa ligado, 0 significa desligado.
  - **text**: Interruptor para exibir texto de alarme, 1 significa ligado, 0 significa desligado.
  - **duration**: Duração do alarme em segundos, aqui é de 10 segundos.

Descrição da conexão do terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Dado</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Dados de saída do bloco de disparo anterior</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.6 alarme sensecraft

O bloco de alarme sensecraft é um bloco de alarme, notificando principalmente a plataforma SenseCraft sobre as informações de alarme. Os parâmetros são definidos da seguinte forma:

```json
{
    "type": "sensecraft alarm",
    "version": "1.0.0",
    "params": {
        "silence_duration": 60,
        "text": ""
    }
}
```

Os parâmetros de configuração são os seguintes:

- **params**: Objeto contendo parâmetros do dispositivo.
  - **silence_duration**: Duração do silêncio em segundos, aqui é de 60 segundos, indicando que o intervalo mínimo de relatório é de 60s.
  - **text**: Texto para notificação de alarme da plataforma.

Descrição da conexão do terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Dado</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Dados de saída do bloco de disparo anterior</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.7 alarme uart

O bloco de alarme uart é um bloco de alarme, implementando principalmente a saída de informações de alarme por meio da porta serial. Os parâmetros são definidos da seguinte forma:

```json
{
    "id": "<random number>",
    "type": "uart alarm",
    "version": "1.0.0",
    "params": {
        "output_format": 0,
        "text": "a string that you want to pass to the consumer of the uart packet.",
        "include_big_image": 0,
        "include_small_image": 0
    }
}
```

Os parâmetros de configuração são os seguintes:

- **params**: Objeto contendo parâmetros do dispositivo.
  - **output_format**: Formato de saída.
    - 0: Formato binário.
    - 1: Formato JSON.
  - **text**: Texto de alarme, este texto será preenchido no campo Prompt do pacote de saída serial. Se este parâmetro não for definido, o nome curto do fluxo de tarefa atual será preenchido.
  - **include_big_image**: Se deve incluir uma imagem grande.
    - 0: Não.
    - 1: Sim.
  - **include_small_image**: Se deve incluir uma imagem pequena.
    - 0: Não.
    - 1: Sim.

Descrição da conexão do terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Dado</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Dados de saída do bloco de disparo anterior</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/image-uart.png" style={{width:500, height:'auto'}}/></div>

O alarme uart irá emitir pacotes de dados pela porta serial na parte traseira do SenseCAP Watcher. O método de fiação é mostrado na figura acima. Os parâmetros da porta serial são:

- Taxa de baud: 115200
- 8 bits, 1 stop bit
- Sem verificação de paridade

> Nota: Devido ao comportamento padrão dos pinos IO_19 e IO_20 do ESP32S3 na energização, esta porta serial irá produzir alguns bytes aleatórios na energização inicial do SenseCAP Watcher. Utilize um mecanismo de detecção de pacote de dados válido para filtragem.

O formato do pacote de dados de saída da porta serial é dividido em dois formatos de acordo com o parâmetro `output_format`:

**A. Formato binário**

O formato do pacote de dados binário é o seguinte:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:800, height:'auto'}}/></div>

Campos:

- Packet Magic Header - Cabeçalho do pacote, 5 bytes "SEEED"
- Prompt Str Len - Comprimento da string de prompt
- Prompt Str - String de prompt ou texto de alarme. Quando o parâmetro `text` é definido, é uma cópia do parâmetro `text`. Se o parâmetro `text` não for definido, ele será preenchido automaticamente com um texto curto descrevendo o propósito da tarefa (gerado pela interface de compilação de tarefas do serviço em nuvem).
- Big Image Len - Comprimento em bytes da string codificada em base64 da imagem grande, quando `include_big_image=0`, o valor é 0.
- Big Image - String codificada em Base64 da imagem grande em JPG
- Small Image Len - Comprimento em bytes da string codificada em base64 da imagem pequena, quando `include_small_image=0`, o valor é 0.
- Small Image - String codificada em Base64 da imagem pequena em JPG
- Inference type - Tipo de resultado de inferência; 0: indica nenhuma informação de inferência, 1: indica que a saída é inferência de caixas, 2: indica que a saída é resultado de inferência de classes
- Boxes/classes - Resultado de inferência.
- Classes name - Nome da classe.

Entre os campos acima, os campos `Packet Magic Header`, `Prompt Str Len` e `Prompt Str` são campos de saída obrigatórios. Outros campos são controlados pela habilitação de parâmetros. Por exemplo, se o parâmetro `include_big_image: 1` for definido, o pacote de dados binário irá acrescentar os campos `Big Image Len` e `Big Image`.

**B. Formato JSON**

O formato do pacote de dados JSON é o seguinte:

```
#in the stream of uart output
.....{packet object}\r\n{packet object}\r\n...
```

objeto packet:

```json
{
     "prompt": "monitor a cat",
     "big_image": "base64 encoded JPG image, if include_big_image is enabled, otherwise this field is omitted",
     "small_image": "base64 encoded JPG image, if include_small_image is enabled, otherwise this field is omitted",
     "inference":{
        "boxes": [
            [145, 326, 240, 208, 50, 0]
        ],
        "classes": [
            [50, 0]
        ],
        "classes_name": [
          "person"
        ]
  }
} 
```

Da mesma forma, o campo "prompt" é um campo de saída obrigatório. Os campos "big_image" e "small_image" são controlados por parâmetros.

#### 2.2.7 http alarm

O bloco http alarm é um bloco de alarme, que implementa principalmente o encaminhamento de informações de alarme para o servidor HTTP; a definição de parâmetros é a seguinte:

```json
{
    "id":"",
    "type": "http alarm",
    "version": "1.0.0",
    "params": {
        "silence_duration": 5,
        "time_en": 1,
        "text_en": 1,
        "image_en": 1, 
        "sensor_en": 1, 
        "text": ""
    }
}
```

Os parâmetros de configuração são os seguintes:

- **params**: Um objeto que contém parâmetros do dispositivo.
  - **silence_duration**: Tempo de silêncio, em segundos.
  - **time_en**: Habilitar carimbo de data/hora, 1 significa ligado, 0 significa desligado.
  - **text_en**: Habilitar texto de alarme, 1 significa ligado, 0 significa desligado.
  - **image_en**: Habilitar imagem, 1 significa ligado, 0 significa desligado.
  - **sensor_en**: Habilitar sensor, 1 significa ligado, 0 significa desligado.
  - **text**: Texto de alarme.

Descrição da conexão do terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Dados</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Dados de saída do bloco de disparo anterior</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
