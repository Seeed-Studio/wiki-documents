---
description: Descreve como desenvolver um bloco de função Watcher.
title: Guia de Desenvolvimento do Módulo de Função Watcher
image: https://files.seeedstudio.com/wiki/watcher_software_framework/watcher_function_module.webp
slug: /watcher_function_module_development_guide
sidebar_position: 3
last_update:
  date: 11/5/2024
  author: Citric
createdAt: '2024-11-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/watcher_function_module_development_guide/
---


# Guia de Desenvolvimento do Módulo de Função Watcher

Recomenda-se que você leia primeiro o [Watcher Software Framework](https://wiki.seeedstudio.com/pt-br/watcher_software_framework) para entender como o módulo de função funciona.

Nesta documentação vamos mostrar um guia passo a passo de como desenvolver um novo módulo de função. Vamos usar o módulo `UART Alarm` como exemplo.

## 1. Instalação e primeiro build

Siga as etapas em [Build the Watcher Development Environment](https://wiki.seeedstudio.com/pt-br/build_watcher_development_environment) caso você as tenha pulado.

```shell
# you're in PROJ_ROOT_DIR/examples/factory_firmware/
cd main/task_flow_module
```

## 2. Escolher um template adequado

No [Watcher Software Framework](https://wiki.seeedstudio.com/pt-br/watcher_software_framework) apresentamos o módulo de função existente (abreviado como **FM** no restante desta documentação) e para que eles são usados. Quando estamos desenvolvendo um novo FM, é melhor começar a partir de um FM existente mais próximo como referência. Neste tutorial vamos desenvolver um FM de alarme, então escolhemos um dos FMs de alarme; `local alarmer` é o mais simples, iremos usá-lo.

```shell
cp tf_module_local_alarm.h tf_module_uart_alarm.h
cp tf_module_local_alarm.c tf_module_uart_alarm.c
```

Não importa qual nome os arquivos tenham, qualquer arquivo `.h` e `.c` será escaneado pelo sistema de build e incluído na árvore de código de compilação. Mas ainda é recomendado ter um nome de arquivo significativo.

## 3. Implementar o registro

O **TFE** (task flow engine) fornece uma função de API para registrar um novo FM.

```cpp
esp_err_t tf_module_register(const char *p_name,
                                const char *p_desc,
                                const char *p_version,
                                tf_module_mgmt_t *mgmt_handle);
```

Os três primeiros parâmetros são o nome, a descrição e a versão do seu FM; eles são usados internamente atualmente, por exemplo, para casar o FM a partir da tabela de registro, impressão de logs etc., mas serão usados no futuro quando os FMs estiverem se comunicando com um serviço local.

```cpp
// in tf_module_uart_alarm.h
#define TF_MODULE_UART_ALARM_NAME "uart alarm"
#define TF_MODULE_UART_ALARM_VERSION "1.0.0"
#define TF_MODULE_UART_ALARM_DESC "uart alarm function module"

// in tf_module_uart_alarm.c
esp_err_t tf_module_uart_alarm_register(void)
{
    return tf_module_register(TF_MODULE_UART_ALARM_NAME,
                              TF_MODULE_UART_ALARM_DESC,
                              TF_MODULE_UART_ALARM_VERSION,
                              &__g_module_management);
}
```

O quarto parâmetro é uma struct que contém funções de API necessárias para gerenciar o ciclo de vida deste FM.

```cpp
// in tf_module.h
typedef struct tf_module_mgmt {
    tf_module_t *(*tf_module_instance)(void);
    void (*tf_module_destroy)(tf_module_t *p_module);
}tf_module_mgmt_t;
```

`tf_module_instance` é uma função que será chamada pelo TFE quando o engine estiver inicializando todos os FMs especificados em um task flow; basicamente isso significa que o engine acabou de receber uma requisição de criação de task flow e está iniciando o fluxo. `tf_module_destroy` é uma função que será chamada quando o TFE estiver parando o fluxo.

### 3.1 Instance

```cpp
tf_module_t *tf_module_uart_alarm_instance(void)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *) tf_malloc(sizeof(tf_module_uart_alarm_t));
    if (p_module_ins == NULL)
    {
        return NULL;
    }
    p_module_ins->module_base.p_module = p_module_ins;
    p_module_ins->module_base.ops = &__g_module_ops;

    if (atomic_fetch_add(&g_ins_cnt, 1) == 0) {
        // the 1st time instance, we should init the hardware
        esp_err_t ret;
        uart_config_t uart_config = {
            .baud_rate = 115200,
            .data_bits = UART_DATA_8_BITS,
            .parity = UART_PARITY_DISABLE,
            .stop_bits = UART_STOP_BITS_1,
            .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
        };
        const int buffer_size = 2 * 1024;
        ESP_GOTO_ON_ERROR(uart_param_config(UART_NUM_2, &uart_config), err, TAG, "uart_param_config failed");
        ESP_GOTO_ON_ERROR(uart_set_pin(UART_NUM_2, GPIO_NUM_19, GPIO_NUM_20, -1, -1), err, TAG, "uart_set_pin failed");
        ESP_GOTO_ON_ERROR(uart_driver_install(UART_NUM_2, buffer_size, buffer_size, 0, NULL, ESP_INTR_FLAG_SHARED), err, TAG, "uart_driver_install failed");
    }

    return &p_module_ins->module_base;

err:
    free(p_module_ins);
    return NULL;
}
```

O acima é a nossa implementação das funções `instance`. Ela aloca memória para uma struct `tf_module_uart_alarm_t` que definimos para armazenar os parâmetros deste FM, como os membros de uma classe C++. Na struct `tf_module_uart_alarm_t` o primeiro campo é importante - `tf_module_t module_base`; na perspectiva de programação em C++, `tf_module_t` é a classe pai para todos os FMs. A função `instance` apenas fornece ao TFE um ponteiro para uma struct `tf_module_t`.

```cpp
// in tf_module_uart_alarm.h
typedef struct {
    tf_module_t module_base;
    int input_evt_id;           //this can also be the module instance id
    int output_format;          //default 0, see comment above
    bool include_big_image;     //default: false
    bool include_small_image;   //default: false
    bool include_boxes;         //default: false, coming soon
} tf_module_uart_alarm_t;

// in tf_module_uart_alarm.c
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    return &p_module_ins->module_base;
    ...
}
```

Dois membros de `tf_module_t` devem ser atribuídos.

```cpp
// in tf_module_uart_alarm.c
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    p_module_ins->module_base.p_module = p_module_ins;
    p_module_ins->module_base.ops = &__g_module_ops;
```

`p_module` - um ponteiro que se refere à instância do próprio FM; isso é usado pela função `destroy` para obter um manipulador da instância e liberar sua memória.
`ops` - uma struct que contém funções de API para operação do FM pelo TFE; falaremos sobre isso depois.

O restante da função instance é para inicializar o hardware e as partes relacionadas à lógica do seu FM.

Uma coisa que merece menção é que o FM pode ser instanciado múltiplas vezes. Você precisa lidar com a reentrada da função `instance` e, se o seu FM não suportar múltiplas instâncias, você precisa retornar um ponteiro NULL na segunda chamada da função `instance`.

Neste exemplo de `uart alarmer`, usaremos contador de referência para lidar com a lógica de reentrada.

```cpp
if (atomic_fetch_add(&g_ins_cnt, 1) == 0) {
        // the 1st time instance, we should init the hardware
        esp_err_t ret;
        uart_config_t uart_config = {
            .baud_rate = 115200,
            .data_bits = UART_DATA_8_BITS,
            .parity = UART_PARITY_DISABLE,
            .stop_bits = UART_STOP_BITS_1,
            .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
        };
        const int buffer_size = 2 * 1024;
        ESP_GOTO_ON_ERROR(uart_param_config(UART_NUM_2, &uart_config), err, TAG, "uart_param_config failed");
        ESP_GOTO_ON_ERROR(uart_set_pin(UART_NUM_2, GPIO_NUM_19, GPIO_NUM_20, -1, -1), err, TAG, "uart_set_pin failed");
        ESP_GOTO_ON_ERROR(uart_driver_install(UART_NUM_2, buffer_size, buffer_size, 0, NULL, ESP_INTR_FLAG_SHARED), err, TAG, "uart_driver_install failed");
    }
```

### 3.2 Destroy

```cpp
void tf_module_uart_alarm_destroy(tf_module_t *p_module_base)
{
    if (p_module_base) {
        if (atomic_fetch_sub(&g_ins_cnt, 1) <= 1) {
            // this is the last destroy call, de-init the uart
            uart_driver_delete(UART_NUM_2);
            ESP_LOGI(TAG, "uart driver is deleted.");
        }
        if (p_module_base->p_module) {
            free(p_module_base->p_module);
        }
    }
}
```

`destroy` é sempre simples 😂 Só precisamos liberar a memória e desinicializar o hardware, se necessário.

## 4. Implementar as operações

O membro `ops` da nossa classe pai é definido da seguinte forma,

```c
struct tf_module_ops
{
    int (*start)(void *p_module);
    int (*stop)(void *p_module);
    int (*cfg)(void *p_module, cJSON *p_json);
    int (*msgs_sub_set)(void *p_module, int evt_id);
    int (*msgs_pub_set)(void *p_module, int output_index, int *p_evt_id, int num);
};
```

Quando o TFE inicializa o FM, ele chamará essas funções na seguinte ordem: `cfg` -> `msgs_sub_set` -> `msgs_pub_set` -> `start` -> `stop`.

`cfg` - recebe os parâmetros do json do task flow e usa esses parâmetros para configurar o seu FM

`msgs_sub_set` - cria a conexão com o FM de upstream, registrando um event handler para o event id do FM de upstream. O parâmetro de entrada `evt_id` é preparado pelo TFE ao extrair do json do task flow. O primeiro parâmetro `p_module` é o ponteiro para a própria instância do FM.

`msgs_pub_set` - armazena as conexões com os FMs de downstream; se este FM não tiver saída, podemos deixar essa função vazia. O primeiro parâmetro `p_module` é o ponteiro para a própria instância do FM. O segundo parâmetro `output_index` é o número da porta; por exemplo, se este FM tiver 2 saídas, `msgs_pub_set` será chamado duas vezes, com `output_index` = 0 e 1 sucessivamente. O terceiro parâmetro `p_evt_id` é um ponteiro para um array que contém todos os event ids dos FMs de downstream nesta porta; o tamanho do array é `num`, que é o último parâmetro.

`start` e `stop` - têm apenas seus significados literais. Ambos recebem `p_module` como parâmetro, que é o ponteiro para a própria instância do FM.

### 4.1 cfg

```cpp
static int __cfg(void *p_module, cJSON *p_json)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;

    cJSON *output_format = cJSON_GetObjectItem(p_json, "output_format");
    if (output_format == NULL || !cJSON_IsNumber(output_format))
    {
        ESP_LOGE(TAG, "params output_format missing, default 0 (binary output)");
        p_module_ins->output_format = 0;
    } else {
        ESP_LOGI(TAG, "params output_format=%d", output_format->valueint);
        p_module_ins->output_format = output_format->valueint;
    }

    cJSON *include_big_image = cJSON_GetObjectItem(p_json, "include_big_image");
    if (include_big_image == NULL || !cJSON_IsBool(include_big_image))
    {
        ESP_LOGE(TAG, "params include_big_image missing, default false");
        p_module_ins->include_big_image = false;
    } else {
        ESP_LOGI(TAG, "params include_big_image=%s", cJSON_IsTrue(include_big_image)?"true":"false");
        p_module_ins->include_big_image = cJSON_IsTrue(include_big_image);
    }

    cJSON *include_small_image = cJSON_GetObjectItem(p_json, "include_small_image");
    if (include_small_image == NULL || !cJSON_IsBool(include_small_image))
    {
        ESP_LOGE(TAG, "params include_small_image missing, default false");
        p_module_ins->include_small_image = false;
    } else {
        ESP_LOGI(TAG, "params include_small_image=%s", cJSON_IsTrue(include_small_image)?"true":"false");
        p_module_ins->include_small_image = cJSON_IsTrue(include_small_image);
    }

    cJSON *include_boxes = cJSON_GetObjectItem(p_json, "include_boxes");
    if (include_boxes == NULL || !cJSON_IsBool(include_boxes))
    {
        ESP_LOGE(TAG, "params include_boxes missing, default false");
        p_module_ins->include_boxes = false;
    } else {
        ESP_LOGI(TAG, "params include_boxes=%s", cJSON_IsTrue(include_boxes)?"true":"false");
        p_module_ins->include_boxes = cJSON_IsTrue(include_boxes);
    }
    return 0;
}
```

Como você vê, a função `cfg` apenas extrai valores de campos do objeto cJSON que vem do campo `params` do objeto FM de um fluxo de tarefas. por exemplo, o seguinte é um fluxo de tarefas simples que inclui o FM `uart alarmer`.

```json
{
  "tlid": 3,
  "ctd": 3,
  "tn": "Local Human Detection",
  "type": 0,
  "task_flow": [
    {
      "id": 1,
      "type": "ai camera",
      "index": 0,
      "version": "1.0.0",
      "params": {
        "model_type": 1,
        "modes": 0,
        "model": {
          "arguments": {
            "iou": 45,
            "conf": 50
          }
        },
        "conditions": [
          {
            "class": "person",
            "mode": 1,
            "type": 2,
            "num": 0
          }
        ],
        "conditions_combo": 0,
        "silent_period": {
          "silence_duration": 5
        },
        "output_type": 0,
        "shutter": 0
      },
      "wires": [
        [2]
      ]
    },
    {
      "id": 2,
      "type": "alarm trigger",
      "index": 1,
      "version": "1.0.0",
      "params": {
        "text": "human detected",
        "audio": ""
      },
      "wires": [
        [3]
      ]
    },
    {
      "id": 3,
      "type": "uart alarm",
      "index": 2,
      "version": "1.0.0",
      "params": {
        "output_format": 1,
        "include_big_image": false,
        "include_small_image": false
      },
      "wires": []
    }
  ]
}
```

No fluxo de tarefas acima, o `params` para `uart alarmer` é

```json
{
  "output_format": 1,
  "include_big_image": false,
  "include_small_image": false
}
```

Nós analisamos o cJSON, extraímos os valores de que precisamos e normalmente os armazenamos na instância do módulo.

### 4.2 msgs_sub_set

```cpp
static int __msgs_sub_set(void *p_module, int evt_id)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;
    p_module_ins->input_evt_id = evt_id;
    return tf_event_handler_register(evt_id, __event_handler, p_module_ins);
}
```

Anotar o id de evento do FM a montante para uso futuro e registrar um manipulador de eventos para o evento.

### 4.3 manipulador de eventos

No [Watcher Software Framework](https://wiki.seeedstudio.com/pt-br/watcher_software_framework) aprendemos que o fluxo de dados é conduzido por um loop de eventos. Basicamente um FM receberá dados de seu manipulador de eventos, então ele consome os dados, faz cálculos, obtém algum resultado. Ele precisa postar o resultado no loop de eventos no final - o alvo são os FMs a jusante que estão interessados nos dados deste FM.

Neste exemplo de `uart alarmer`, consumimos dados de um FM de disparo de alarme que tem o tipo de dados de saída `TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT`. Como a preparação dos dados UART é simples, fazemos toda a geração de dados no manipulador do loop de eventos. Porém, isso não é recomendado se o processamento de dados consumir muito tempo ou depender muito de IO. Nesse caso, você precisa criar uma tarefa (thread) trabalhadora para fazer o processamento em segundo plano.

Preparamos um buffer de saída binário ou uma string JSON de acordo com o parâmetro de entrada `output_format`. Finalmente escrevemos esses dados na UART. Nosso FM tem apenas uma saída, que é o hardware, não outro FM; por essa razão nosso `msgs_pub_set` é fictício. No final, precisamos liberar os dados que vêm do loop de eventos, o motivo será explicado na próxima seção.

### 4.4 msgs_pub_set

Neste exemplo o `msgs_pub_set` é fictício porque nosso FM não tem consumidor a jusante. Vamos pegar o FM `ai camera` como exemplo.

```cpp
// in tf_module_ai_camera.c
static int __msgs_pub_set(void *p_module, int output_index, int *p_evt_id, int num)
{
    tf_module_ai_camera_t *p_module_ins = (tf_module_ai_camera_t *)p_module;
    __data_lock(p_module_ins);
    if (output_index == 0 && num > 0)
    {
        p_module_ins->p_output_evt_id = (int *)tf_malloc(sizeof(int) * num);
        if (p_module_ins->p_output_evt_id )
        {
            memcpy(p_module_ins->p_output_evt_id, p_evt_id, sizeof(int) * num);
            p_module_ins->output_evt_num = num;
        } else {
            ESP_LOGE(TAG, "Failed to malloc p_output_evt_id");
            p_module_ins->output_evt_num = 0;
        }
    }
    else
    {
        ESP_LOGW(TAG, "Only support output port 0, ignore %d", output_index);
    }
    __data_unlock(p_module_ins);
    return 0;
}
```

Não é complicado, apenas armazenar os ids de evento na estrutura da instância do FM. É aqui que você precisa adicionar um campo membro na struct do tipo do seu FM, neste caso `tf_module_ai_camera_t`.

Quando vamos usar esses ids de evento? No momento em que os dados são gerados e passam pela limitação de tempo. No exemplo de `ai camera`, os dados se originam da saída SPI do SoC Himax que executa a inferência de IA local, e passam por alguns gates de condição; se todas as condições forem atendidas, os dados então atingem o momento em que precisam ser postados no loop de eventos.

```cpp
// in tf_module_ai_camera.c
...
                    for (int i = 0; i < p_module_ins->output_evt_num; i++)
                    {
                        tf_data_image_copy(&p_module_ins->output_data.img_small, &info.img);
                        tf_data_inference_copy(&p_module_ins->output_data.inference, &info.inference);

                        ret = tf_event_post(p_module_ins->p_output_evt_id[i], &p_module_ins->output_data, sizeof(p_module_ins->output_data), pdMS_TO_TICKS(100));
                        if( ret != ESP_OK) {
                            ESP_LOGE(TAG, "Failed to post event %d", p_module_ins->p_output_evt_id[i]);
                            tf_data_free(&p_module_ins->output_data);
                        } else {
                            ESP_LOGI(TAG, "Output -> %d", p_module_ins->p_output_evt_id[i]);
                        }
                    }
...
```

Precisamos postar para cada assinante da nossa saída. Como você pode ver, fazemos uma cópia dos dados para cada assinante.

**A REGRA DE ALOCAÇÃO E LIBERAÇÃO DE MEMÓRIA**

- O FM gerador de dados faz a alocação de memória para cada assinante
- O FM consumidor de dados faz a liberação de memória depois que os dados são consumidos.

### 4.5 start e stop

Esses são controles de tempo de execução para o FM, para suportar pausa/retomada do fluxo no futuro. Atualmente você pode fazer o FM rodar depois de instanciado, mas ainda assim sugerimos dividir lógicas entre o gerenciamento do ciclo de vida do FM e o controle de tempo de execução do FM.

## 5. Teste

Agora que temos nosso FM `uart alarmer`, antes de abrirmos um pull request, como poderíamos testá-lo localmente.

Implementamos um comando de console para emitir um fluxo de tarefas localmente.

```shell
SenseCAP> help taskflow
taskflow  [-iej] [-f <string>]
  import taskflow by json string or SD file, eg:taskflow -i -f "test.json".

export taskflow to stdout or SD file, eg: taskflow -e -f "test.json"
  -i, --import  import taskflow
  -e, --export  export taskflow
  -f, --file=<string>  File path, import or export taskflow json string by SD, eg: test.json
    -j, --json  import taskflow json string by stdin
```

Consulte [Build the Watcher Development Environment](https://wiki.seeedstudio.com/pt-br/build_watcher_development_environment) - `5. Monitor the log output` para obter o console. Prepare um fluxo de tarefas com espaços e caracteres em branco removidos e emita o fluxo de tarefas com,

```shell
taskflow -i -j<enter>
Please input taskflow json:
#<paste your task flow json here, for an example>
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3]]},{"id":3,"type":"uart alarm","index":2,"version":"1.0.0","params":{"output_format":1},"wires":[]}]}
```

Como compor um fluxo de tarefas? No [Watcher Software Framework](https://wiki.seeedstudio.com/pt-br/watcher_software_framework) apresentamos cada FM e seus parâmetros. Compor um fluxo de tarefas é basicamente desenhar fios entre blocos FM, como no Node-RED.

Antes de termos uma GUI para compor o fluxo de tarefas, podemos usar o comando de exportação para coletar exemplos. Basta usar o App Mobile para emitir um fluxo com uma função de alarme local habilitada (luz RGB); quando o fluxo estiver em execução, exporte o fluxo de tarefas com,

```shell
taskflow -e
```

Este comando irá exportar o fluxo de tarefas em execução para o console. Se o fluxo de tarefas for muito longo, sua saída pode ser interrompida por outros logs; nesse caso precisamos de um cartão TF. Formate o cartão TF no sistema de arquivos FAT/exFAT, conecte-o ao Watcher. Agora podemos exportar o fluxo de tarefas em execução para o cartão TF,

```shell
taskflow -e -f tf1.json
# only support file name in the root dir
# please don't specify leading dir in the path, the command can't create dir
```

Agora você tem exemplos, modifique um dos FM de alarme (geralmente é o último FM), substitua-o pelo seu FM `uart alarmer`, adicione alguns parâmetros ao objeto JSON do seu FM, use um editor JSON para remover os espaços em branco e importe-o com o comando `taskflow -i -j` acima.

É isso, aproveite a exploração.

## Apêndice - Mais exemplos de fluxos de tarefas

Aqui fornecemos mais alguns exemplos de fluxos de tarefas com os quais você pode começar.

```json
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1,"ctd":1,"tn":"Local Gesture Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":3,"modes":0,"model":{"arguments":{"iou":45,"conf":65}},"conditions":[{"class":"paper","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"scissors detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1719396404172,"ctd":1719396419707,"tn":"Man with glasses spotted, notify immediately","task_flow":[{"id":753589649,"type":"ai camera","type_id":0,"index":0,"vision":"0.0.1","params":{"model_type":0,"model":{"model_id":"60086","version":"1.0.0","arguments":{"size":1644.08,"url":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/model/1705306215159_jVQf4u_swift_yolo_nano_person_192_int8_vela(2).tflite","icon":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/pic/1705306138275_iykYXV_detection_person.png","task":"detect","createdAt":1705306231,"updatedAt":null},"model_name":"Person Detection--Swift YOLO","model_format":"tfLite","ai_framework":"6","author":"SenseCraft AI","description":"The model is a Swift-YOLO model trained on the person detection dataset. It can detect human body  existence.","task":1,"algorithm":"Object Dectect(TensorRT,SMALL,COCO)","classes":["person"]},"modes":0,"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"time_period":{"repeat":[1,1,1,1,1,1,1],"time_start":"00:00:00","time_end":"23:59:59"},"silence_duration":60},"output_type":1,"shutter":0},"wires":[[193818631]]},{"id":193818631,"type":"image analyzer","type_id":3,"index":1,"version":"0.0.1","params":{"url":"","header":"","body":{"prompt":"Is there a man with glasses?","type":1,"audio_txt":"Man with glasses"}},"wires":[[420037647,452707375]]},{"id":452707375,"type_id":99,"type":"sensecraft alarm","index":2,"version":"0.0.1","params":{"silence_duration":10,"text":"Man with glasses"},"wires":[]},{"id":420037647,"type_id":5,"type":"local alarm","index":3,"version":"0.0.1","params":{"sound":1,"rgb":1,"img":1,"text":1,"duration":10},"wires":[]}],"type":0}
```

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
