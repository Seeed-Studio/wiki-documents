---
description: Describe cómo desarrollar un bloque de función Watcher.
title: Guía de Desarrollo de Módulo de Función Watcher
image: https://files.seeedstudio.com/wiki/watcher_software_framework/watcher_function_module.webp
slug: /es/watcher_function_module_development_guide
sidebar_position: 3
last_update:
  date: 11/5/2024
  author: Citric
---


# Guía de Desarrollo de Módulo de Función Watcher

Se recomienda que primero leas el [Marco de Software Watcher](https://wiki.seeedstudio.com/es/watcher_software_framework) para tener una comprensión sobre cómo funciona el módulo de función.

En esta documentación vamos a mostrar una guía paso a paso sobre cómo desarrollar un nuevo módulo de función. Vamos a tomar el módulo `UART Alarm` como ejemplo.

## 1. Instalación y primera compilación

Por favor pasa por los pasos en [Construir el Entorno de Desarrollo Watcher](https://wiki.seeedstudio.com/es/build_watcher_development_environment) si lo has omitido.

```shell
# you're in PROJ_ROOT_DIR/examples/factory_firmware/
cd main/task_flow_module
```

## 2. Elegir una plantilla adecuada

En el [Marco de Software Watcher](https://wiki.seeedstudio.com/es/watcher_software_framework) presentamos el módulo de función existente (abreviado como **FM** en el resto de la documentación) y para qué se utilizan. Cuando estamos desarrollando un nuevo FM, es mejor comenzar desde el FM existente más cercano como referencia. En este tutorial vamos a desarrollar un FM de alarma, así que elegimos uno de los FMs de alarma, `local alarmer` es el más simple, lo tomaremos.

```shell
cp tf_module_local_alarm.h tf_module_uart_alarm.h
cp tf_module_local_alarm.c tf_module_uart_alarm.c
```

No importa qué nombre tengan los archivos, cualquier archivo `.h` y `.c` será escaneado por el sistema de compilación e incluido en el árbol de código de compilación. Pero aún se recomienda tener un nombre de archivo significativo.

## 3. Implementar el registro

El **TFE** (motor de flujo de tareas) proporciona una función API para registrar un nuevo FM.

```cpp
esp_err_t tf_module_register(const char *p_name,
                                const char *p_desc,
                                const char *p_version,
                                tf_module_mgmt_t *mgmt_handle);
```

Los primeros tres parámetros son el nombre, la descripción y la versión de tu FM, se usan internamente actualmente, por ejemplo, para hacer coincidir el FM de la tabla de registro, impresión de logs, etc., pero se usarán en el futuro cuando los FMs se comuniquen con un servicio local.

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

El cuarto parámetro es una estructura que contiene las funciones API necesarias para gestionar el ciclo de vida de este FM.

```cpp
// in tf_module.h
typedef struct tf_module_mgmt {
    tf_module_t *(*tf_module_instance)(void);
    void (*tf_module_destroy)(tf_module_t *p_module);
}tf_module_mgmt_t;
```

`tf_module_instance` es una función que será llamada por el TFE cuando el motor esté inicializando todos los FMs especificados en un flujo de tareas, básicamente esto significa que el motor acaba de recibir una solicitud de creación de flujo de tareas y está iniciando el flujo. `tf_module_destroy` es una función que será llamada cuando el TFE esté deteniendo el flujo.

### 3.1 Instancia

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

Lo anterior es nuestra implementación de las funciones `instance`. Asigna memoria para una estructura `tf_module_uart_alarm_t` que definimos para contener los parámetros de este FM, como los miembros de una clase de C++. En la estructura `tf_module_uart_alarm_t` el primer campo es importante - `tf_module_t module_base`, desde la perspectiva de programación de C++, `tf_module_t` es la clase padre para todos los FMs. La función `instance` simplemente le da al TFE un puntero a una estructura `tf_module_t`.

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

Dos miembros de `tf_module_t` deben ser asignados.

```cpp
// in tf_module_uart_alarm.c
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    p_module_ins->module_base.p_module = p_module_ins;
    p_module_ins->module_base.ops = &__g_module_ops;
```

`p_module` - un puntero que se refiere a la instancia del propio FM, esto se usa para que la función `destroy` obtenga un manejador de la instancia y libere su memoria.
`ops` - una estructura que contiene funciones API para operar el FM por el TFE, hablaremos de esto más adelante.

El resto de la función de instancia es inicializar el hardware y las cosas relacionadas con tu lógica de tu FM.

Una cosa que necesita mencionarse es que el FM puede ser instanciado múltiples veces. Necesitas manejar la re-entrada de la función `instance`, y si tu FM no soporta múltiples instancias, necesitas devolver un puntero NULL para la segunda llamada de la función `instance`.

En este ejemplo de `uart alarmer`, usaremos un contador de referencia para manejar la lógica de re-entrada.

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

### 3.2 Destruir

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

`destroy` siempre es simple 😂 Solo necesitamos liberar la memoria, y des-inicializar el hardware si es necesario.

## 4. Implementar las operaciones

El miembro `ops` de nuestra clase padre se define de la siguiente manera,

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

Cuando el TFE inicializa el FM, llamará a estas funciones en el siguiente orden: `cfg` -> `msgs_sub_set` -> `msgs_pub_set` -> `start` -> `stop`.

`cfg` - toma los parámetros del json del flujo de tareas, usa estos parámetros para configurar tu FM

`msgs_sub_set` - crea la conexión al FM ascendente, registrando un manejador de eventos al id de evento del FM ascendente. El parámetro de entrada `evt_id` es preparado por el TFE extrayéndolo del json del flujo de tareas. El primer parámetro `p_module` es el puntero a la instancia del FM mismo.

`msgs_pub_set` - almacena las conexiones a los FMs descendentes, si este FM no tiene salida, podemos dejar esta función vacía. El primer parámetro `p_module` es el puntero a la instancia del FM mismo. El segundo parámetro `output_index` es el número de puerto, por ejemplo, este FM tiene 2 salidas, `msgs_pub_set` será llamado dos veces, con `output_index` = 0 y 1 sucesivamente. El tercer parámetro `p_evt_id` es un puntero a un array que contiene todos los ids de evento de los FMs descendentes en este puerto, el tamaño del array es `num` que es el último parámetro.

`start` y `stop` - son simplemente sus significados literales. Ambos toman `p_module` como parámetro que es el puntero a la instancia del FM mismo.

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

Como puedes ver, la función `cfg` simplemente extrae valores de campo del objeto cJSON que proviene del campo `params` del objeto FM de un flujo de tareas. Por ejemplo, el siguiente es un flujo de tareas simple que incluye el FM `uart alarmer`.

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

En el flujo de tareas anterior, los `params` para `uart alarmer` son

```json
{
  "output_format": 1,
  "include_big_image": false,
  "include_small_image": false
}
```

Analizamos el cJSON, extraemos los valores que necesitamos y los almacenamos en la instancia del módulo típicamente.

### 4.2 msgs_sub_set

```cpp
static int __msgs_sub_set(void *p_module, int evt_id)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;
    p_module_ins->input_evt_id = evt_id;
    return tf_event_handler_register(evt_id, __event_handler, p_module_ins);
}
```

Marca el id del evento del FM ascendente para uso futuro, y registra un manejador de eventos para el evento.

### 4.3 manejador de eventos

En el [Marco de Software Watcher](https://wiki.seeedstudio.com/es/watcher_software_framework) aprendimos que el flujo de datos es impulsado por un bucle de eventos. Básicamente un FM recibirá datos de su manejador de eventos, luego consume los datos, hace cálculos, obtiene algún resultado. Necesita publicar el resultado en el bucle de eventos al final - el objetivo son los FMs descendentes que están interesados en los datos de este FM.

En este ejemplo de `uart alarmer`, consumimos datos de un FM disparador de alarma que tiene el tipo de datos de salida `TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT`. Dado que la preparación de datos uart es simple, hacemos toda la generación de datos en el manejador del bucle de eventos. Sin embargo, esto no es recomendado si tu procesamiento de datos consume mucho tiempo o es intensivo en E/S. En ese caso, necesitas crear una tarea trabajadora (hilo) para hacer el procesamiento en segundo plano.

Preparamos un búfer de salida binario o una cadena JSON según el parámetro de entrada `output_format`. Finalmente escribimos estos datos en el UART. Nuestro FM tiene solo una salida que es el hardware, no otro FM, por esta razón nuestro `msgs_pub_set` es ficticio. Al final, necesitamos liberar los datos que vienen del bucle de eventos, la razón se explicará en la siguiente sección.

### 4.4 msgs_pub_set

En este ejemplo el `msgs_pub_set` es ficticio porque nuestro FM no tiene consumidor descendente. Tomemos el FM `ai camera` como ejemplo.

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

No es complicado, solo almacena los IDs de eventos en la estructura de la instancia FM. Aquí es donde necesitas agregar un campo miembro en la estructura de tipo de tu FM, en este caso `tf_module_ai_camera_t`.

¿Cuándo vamos a usar estos IDs de eventos? En el momento en que se generan los datos y pasan por la compuerta de tiempo. En el ejemplo de `ai camera`, los datos se originan desde la salida SPI del SoC Himax que ejecuta la inferencia de IA local, y pasa por algunas compuertas de condición, si se cumplen todas las condiciones, los datos entonces alcanzan el momento en que necesitan ser publicados en el bucle de eventos.

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

Necesitamos publicar a cada suscriptor de nuestra salida. Como puedes ver, hacemos una copia de los datos para cada suscriptor.

**LA REGLA DE ASIGNACIÓN Y LIBERACIÓN DE MEMORIA**

- El FM creador de datos hace la asignación de memoria para cada suscriptor
- El FM consumidor de datos hace la liberación de memoria después de que los datos se hayan agotado.

### 4.5 iniciar y detener

Estos son controles de tiempo de ejecución para el FM, para soportar pausa/reanudación de flujo en el futuro. Actualmente puedes hacer que el FM se ejecute después de ser instanciado, pero aún sugerimos dividir las lógicas en gestión del ciclo de vida del FM y control de tiempo de ejecución del FM.

## 5. Prueba

Ahora tenemos nuestro FM `uart alarmer`, antes de hacer una solicitud de extracción, ¿cómo podríamos probarlo localmente?

Implementamos un comando de consola para emitir un flujo de tareas localmente.

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

Por favor consulta [Construir el Entorno de Desarrollo del Watcher](https://wiki.seeedstudio.com/es/build_watcher_development_environment) - `5. Monitor the log output` para obtener la consola. Prepara un flujo de tareas con espacios y caracteres en blanco eliminados, y ejecuta el flujo de tareas con,

```shell
taskflow -i -j<enter>
Please input taskflow json:
#<paste your task flow json here, for an example>
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3]]},{"id":3,"type":"uart alarm","index":2,"version":"1.0.0","params":{"output_format":1},"wires":[]}]}
```

¿Cómo componer un flujo de tareas? En el [Marco de Software Watcher](https://wiki.seeedstudio.com/es/watcher_software_framework) presentamos cada FM y sus parámetros. Componer un flujo de tareas es básicamente dibujar cables entre bloques FM, como en Node-RED.

Antes de tener una GUI para componer el flujo de tareas, podemos usar el comando de exportación para recopilar ejemplos. Solo usa la Aplicación Móvil para emitir un flujo con una función de alarma local habilitada (luz RGB), cuando el flujo esté ejecutándose, exporta el flujo de tareas con,

```shell
taskflow -e
```

Este comando exportará el flujo de tareas en ejecución a la consola. Si el flujo de tareas es muy largo, su salida podría ser interrumpida por otros registros, en este caso necesitamos una tarjeta TF. Formatea la tarjeta TF al sistema de archivos FAT/exFAT, conéctala al Watcher. Ahora podemos exportar el flujo de tareas en ejecución a la tarjeta TF,

```shell
taskflow -e -f tf1.json
# only support file name in the root dir
# please don't specify leading dir in the path, the command can't create dir
```

Ahora tienes ejemplos, modifica uno de los FM de alarma (generalmente es el último FM), reemplázalo con tu FM `uart alarmer`, añade algunos parámetros al objeto JSON de tu FM, usa un editor JSON para eliminar los espacios en blanco, e impórtalo con el comando `taskflow -i -j` anterior.

Eso es todo, disfruta la exploración.

## Apéndice - Más ejemplos de flujo de tareas

Aquí proporcionamos algunos ejemplos más de flujo de tareas con los que puedes comenzar.

```json
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1,"ctd":1,"tn":"Local Gesture Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":3,"modes":0,"model":{"arguments":{"iou":45,"conf":65}},"conditions":[{"class":"paper","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"scissors detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1719396404172,"ctd":1719396419707,"tn":"Man with glasses spotted, notify immediately","task_flow":[{"id":753589649,"type":"ai camera","type_id":0,"index":0,"vision":"0.0.1","params":{"model_type":0,"model":{"model_id":"60086","version":"1.0.0","arguments":{"size":1644.08,"url":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/model/1705306215159_jVQf4u_swift_yolo_nano_person_192_int8_vela(2).tflite","icon":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/pic/1705306138275_iykYXV_detection_person.png","task":"detect","createdAt":1705306231,"updatedAt":null},"model_name":"Person Detection--Swift YOLO","model_format":"tfLite","ai_framework":"6","author":"SenseCraft AI","description":"The model is a Swift-YOLO model trained on the person detection dataset. It can detect human body  existence.","task":1,"algorithm":"Object Dectect(TensorRT,SMALL,COCO)","classes":["person"]},"modes":0,"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"time_period":{"repeat":[1,1,1,1,1,1,1],"time_start":"00:00:00","time_end":"23:59:59"},"silence_duration":60},"output_type":1,"shutter":0},"wires":[[193818631]]},{"id":193818631,"type":"image analyzer","type_id":3,"index":1,"version":"0.0.1","params":{"url":"","header":"","body":{"prompt":"Is there a man with glasses?","type":1,"audio_txt":"Man with glasses"}},"wires":[[420037647,452707375]]},{"id":452707375,"type_id":99,"type":"sensecraft alarm","index":2,"version":"0.0.1","params":{"silence_duration":10,"text":"Man with glasses"},"wires":[]},{"id":420037647,"type_id":5,"type":"local alarm","index":3,"version":"0.0.1","params":{"sound":1,"rgb":1,"img":1,"text":1,"duration":10},"wires":[]}],"type":0}
```

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
