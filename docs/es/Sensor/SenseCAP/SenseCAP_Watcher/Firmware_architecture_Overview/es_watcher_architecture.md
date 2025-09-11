---
description: Introduciendo el marco de software SenseCAP Watcher.
title: Marco de Software Watcher
image: https://files.seeedstudio.com/wiki/watcher_software_framework/architecture_1.webp
slug: /es/watcher_software_framework
sidebar_position: 2
last_update:
  date: 11/5/2024
  author: Citric
---

# Arquitectura de Software Watcher

La arquitectura de software de SenseCAP Watcher se muestra en la figura a continuación, dividida principalmente en tres partes: aplicaciones APP, UI e interacción, flujo de tareas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/architecture.png" style={{width:800, height:'auto'}}/></div>

- **Aplicaciones APP**: Principalmente algunas aplicaciones, como conexión WiFi, configuración Bluetooth, comunicación con la plataforma, OTA, etc., que también generan algunos datos para mostrar en la UI.
- **UI e interacción**: Principalmente la implementación de la interfaz UI y la interacción UI.
- **Flujo de tareas**: Principalmente la implementación del motor de flujo de tareas y varios módulos de función de flujo de tareas.

## 1. Marco de Flujo de Tareas

### 1.1 Descripción General

Para satisfacer las necesidades de varios escenarios, se diseñó un marco de flujo de tareas similar a Node-RED, que puede organizar flexiblemente las habilidades que posee el dispositivo y permitir que trabajen juntas.

Abstraemos las habilidades que posee el dispositivo en bloques, que pueden ser productores o consumidores de datos, o ambos. Luego, según tareas específicas, se extraen los bloques requeridos y se conectan a través de relaciones productor-consumidor para lograr tareas de escenarios específicos.

### 1.2 Motor de Flujo de Tareas

La función principal del motor de flujo de tareas es permitir que varios módulos funcionales operen según el JSON del flujo de tareas; gestiona el registro, instanciación y destrucción de módulos funcionales, así como las conexiones entre ellos.

El flujo de procesamiento del motor de flujo de tareas se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/taskflow_engine.png" style={{width:300, height:'auto'}}/></div>

1. Inicializar el motor de flujo de tareas.
2. Registrar cada módulo funcional al motor de flujo de tareas, usando una lista enlazada para almacenar las funciones de gestión e información de cada módulo.
3. El motor de flujo de tareas espera recibir flujos de tareas.
4. Al recibir un nuevo flujo de tareas, analizar el JSON del flujo de tareas, extraer los módulos funcionales requeridos y almacenarlos en un array.
5. En el array de módulos funcionales, encontrar la función de gestión del módulo de la lista enlazada basándose en el nombre del módulo y ordenarlos.
6. Instanciar módulos funcionales.
7. Configurar módulos funcionales.
8. Establecer tuberías de eventos entre módulos funcionales para transmisión de mensajes.
9. Iniciar cada módulo funcional secuencialmente.
10. Una vez iniciado, el flujo de tareas se ejecuta.

### 1.3 JSON de Flujo de Tareas

El flujo de tareas se describe en formato JSON, y el motor de flujo de tareas ejecuta el flujo de tareas analizando este archivo JSON.

Lo siguiente es una plantilla JSON de flujo de tareas:

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

Descripciones de campos:

- **ctd**: Tiempo de creación del flujo de tareas.
- **tlid**: ID del flujo de tareas, que puede ser el mismo que ctd.
- **tn**: Nombre del flujo de tareas.
- **type:** Tipo de flujo de tareas
  - **0**: Flujo de tareas de ejemplo local.
  - **1**: Flujo de tareas emitido vía MQTT.
  - **2**: Flujo de tareas emitido vía Bluetooth.
  - **3**: Flujo de tareas emitido vía voz.
- **task_flow：** Contiene información detallada sobre cada módulo funcional en el flujo de tareas.
  - **id**: ID del módulo.
  - **type**: Nombre del módulo.
  - **index**: Orden del módulo en el flujo de tareas; cuanto más temprana sea la posición en el flujo, menor será el valor, utilizado para ordenar módulos.
  - **version**: Versión del módulo.
  - **params**: Parámetros del módulo; diferentes versiones pueden tener diferentes configuraciones de parámetros, que pueden ser analizadas de manera compatible según el número de versión.
  - **wires**: Conexiones entre módulos. Ver **Tuberías de Eventos de Módulos Funcionales de Flujo de Tareas** para más detalles.

A continuación se muestra un ejemplo de un JSON de flujo de tareas para monitoreo de incendios.

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

Este flujo de tareas utiliza cuatro bloques: cámara ai, analizador de imágenes, alarma local y alarma sensecraft. La topología de cableado se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

La siguiente figura muestra el flujo general del motor de flujo de tareas y el arranque de los módulos funcionales:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

### 1.4 Tuberías de Eventos de los Módulos

Las conexiones entre módulos funcionales representan transmisión de datos, donde el módulo anterior genera datos y los envía al siguiente módulo. La transmisión de mensajes utiliza un mecanismo de eventos donde el primero publica eventos, y el segundo se suscribe a eventos. Los eventos se implementan usando el componente `esp_event` del IDF, que soporta caché de cola.

Cada módulo tiene un id único, que sirve como el id del evento al que se suscribe el módulo. Durante la ejecución de `sub_set`, el módulo se suscribe a mensajes con ese id; durante la ejecución de stop, desregistra ese id de evento. Algunos módulos, como fuentes de excitación, no tienen un módulo upstream y pueden operar sin suscribirse a ese ID de evento.

Cada módulo tiene un campo wires que indica el id del siguiente módulo. Al ejecutar `pub_set`, estos ids se almacenan en caché, y los datos se publican a estos ids cuando están disponibles. Algunos módulos tienen un campo wires vacío, indicando que no hay módulo downstream, consumiendo datos sin producirlos.

Cada módulo puede tener como máximo un terminal de entrada pero múltiples terminales de salida, indicando diferentes salidas de datos, y cada terminal de salida puede enviar datos a múltiples bloques. El campo wires es un array bidimensional, con la primera capa representando el número de terminales de salida, y la segunda capa representando los ids de los módulos a los que envía datos un terminal.

Como se muestra en el ejemplo a continuación, el Módulo 1 publica un mensaje en el ID de evento 2, el Módulo 2 recibe y procesa el mensaje; el Módulo 2 tiene dos terminales de salida, el primer terminal de salida se conecta a los Módulos 3 y 4, y el segundo terminal de salida se conecta al Módulo 5. Cuando el terminal de salida 1 tiene datos, publica mensajes a los IDs de evento 3 y 4, y cuando el terminal de salida 2 tiene datos, publica mensajes al ID de evento 5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection2.png" style={{width:600, height:'auto'}}/></div>

La descripción JSON correspondiente para el Módulo 2 es la siguiente:

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

Las funciones de operación relacionadas están definidas en **tf.h** (principalmente encapsulando las funciones relacionadas con `esp_event` del idf) de la siguiente manera:

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

#### 1.4.1 Tipos de Mensaje Transmitidos en Pipelines de Eventos

Dos módulos pueden conectarse juntos, indicando que sus tipos de datos son consistentes; definimos tipos de datos y estructuras de datos correspondientes en el archivo [tf_module_data_type.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_data_type.h). Generalmente, los tipos de datos se definen con el prefijo **TF_DATA_TYPE_**; las estructuras de datos se definen con el prefijo **tf_data_**.

Por ejemplo, definimos el tipo **TF_DATA_TYPE_BUFFER** en la estructura de enumeración de tipos, y la estructura correspondiente es la siguiente. El primer campo type indica el tipo de datos, y los campos restantes indican los datos a transmitir.

```cpp
typedef struct {
    uint8_t  type;
    struct tf_data_buf data;
} tf_data_buffer_t;
```

Cuando un módulo recibe datos de evento, primero extrae el primer byte de los datos del evento para obtener el tipo de datos, luego determina si los datos son lo que desea. Si lo son, los procesa más; de lo contrario, los descarta.

Los tipos de datos actualmente disponibles se describen de la siguiente manera:

<table>
  <thead>
    <tr>
      <th>Tipo de Datos</th>
      <th>Estructura de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TF_DATA_TYPE_TIME</td>
      <td>tf_data_time_t</td>
      <td>Marca de tiempo</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_BUFFER</td>
      <td>tf_data_buffer_t</td>
      <td>Buffer</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>tf_data_dualimage_with_inference_t</td>
      <td>Contiene imagen grande, imagen pequeña e información de inferencia</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>tf_data_dualimage_with_audio_text_t</td>
      <td>Contiene imagen grande, imagen pequeña, audio de alarma y texto de alarma</td>
    </tr>
  </tbody>
</table>

- Imagen grande: imagen en formato jpeg de 640 x 480 obtenida de himax, almacenada usando codificación base64.

- Imagen pequeña: imagen en formato jpeg de 416 x 416 obtenida de himax, almacenada usando codificación base64.

- Información de inferencia: Resultados de inferencia obtenidos de himax, incluyendo un array de coordenadas de caja, información de clasificación de clase, o información de coordenadas de punto, así como información de nombre de clase.

- Audio: Datos obtenidos del bloque disparador, en formato .mp3.

#### 1.4.2 Transmisión Eficiente en Pipelines de Eventos

Cuando se usa el componente `esp_event` del idf para transmisión de mensajes, ocurre copia de memoria durante el encolado (por favor lee el código fuente de `esp_event` para más detalles); esto es muy poco amigable cuando se transmiten datos grandes, como imágenes y audio.

Por lo tanto, adoptamos un método de transmisión eficiente transmitiendo solo punteros. Por ejemplo, en el tipo **TF_DATA_TYPE_BUFFER**, los datos a transmitir se definen como sigue. El primer campo `p_buf` es la dirección de inicio del buffer de datos, y el segundo campo len es la longitud de los datos.

```cpp
struct tf_data_buf
{
    uint8_t *p_buf;
    uint32_t len;
};
```

Para los módulos productores de datos, son responsables de la asignación de memoria de `p_buf`; el módulo consumidor de datos del siguiente nivel es responsable de liberar la memoria después del uso.
Algunas funciones comunes de copia y liberación de datos están definidas en el archivo [tf_module_util.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_util.h). Por ejemplo, si el tipo de datos del evento recibido no es el que deseas, puedes llamar directamente a la función **tf_data_free()** para liberar la memoria (esta función implementa la liberación de todos los tipos de datos), como se muestra a continuación:

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

### 1.5 Clase Base de Módulos

Definimos la clase base de módulos en [tf_module.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_engine/include/tf_module.h). El motor de flujo de tareas no se preocupa por la implementación específica de los modelos, solo necesita llamar a las interfaces relevantes de los módulos para operarlos. Cada módulo específico solo necesita implementar las funciones de operación y las funciones de gestión.

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

Para saber cómo escribir un módulo, consulte la [Guía de Desarrollo de Módulos de Función Watcher](https://wiki.seeedstudio.com/es/watcher_function_module_development_guide)

## 2. Módulos Funcionales

### 2.1 Lista

Actualmente, los módulos integrados comunes incluyen ai camera, alarm trigger, image analyzer, local alarm, sensecraft alarm y uart alarm.

<table>
  <thead>
    <tr>
      <th>Categoría</th>
      <th>Módulo Funcional</th>
      <th>Tipo de Datos de Entrada</th>
      <th>Tipo de Datos de Salida</th>
      <th>Soporta Múltiples Instancias</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Fuente de Excitación</td>
      <td>ai camera</td>
      <td>Cualquier tipo de datos</td>
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
      <td rowspan="2">Módulo Disparador</td>
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
      <td rowspan="3">Módulo de Alarma</td>
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

### 2.2 Introducción a los Módulos Funcionales

#### 2.2.1 timer

El bloque timer es un módulo de fuente de excitación, que funciona principalmente como un temporizador periódico. Las definiciones de parámetros son las siguientes:

```json
{
    "type": "timer",
    "version": "1.0.0",
    "params": {
        "period": 5
    }
}
```

Los parámetros de configuración son los siguientes:

- **params**: Un objeto que contiene los parámetros del dispositivo.
  - **period**: El período para iniciar el temporizador.

Descripción de la conexión del terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>Emite la marca de tiempo actual</td>
    </tr>
  </tbody>
</table>

#### 2.2.2 ai camera

El bloque ai camera es principalmente responsable de la comunicación con Himax, OTA del modelo, obtención de imágenes y resultados de inferencia, y contiene algunas funciones simples de filtrado de condiciones. Las definiciones de parámetros son las siguientes:

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

Los significados de cada campo en el parámetro params son los siguientes:

- **model_type**: Tipo de modelo, 0 indica modelo en la nube (la URL del modelo se extraerá del campo model para descarga y uso), 1, 2 y 3 indican modelos integrados de Himax.
- **model**: Información específica sobre el modelo.
  - **model_id**: Identificador único del modelo.
  - **version**: Versión del modelo.
  - **arguments**: Configuración de parámetros del modelo.
    - **size**: Tamaño del modelo.
    - **url**: URL de descarga del modelo.
    - **icon**: URL del icono del modelo.
    - **task**: Tipo de tarea del modelo, "detect" indica detección.
    - **createdAt**: Marca de tiempo de creación del modelo.
    - **updatedAt**: Marca de tiempo de actualización del modelo.
    - **iou**: Umbral IOU (Intersección sobre Unión).
    - **conf**: Umbral de confianza.
  - **model_name**: Nombre del modelo, "General Object Detection".
  - **model_format**: Formato del modelo, "TensorRT".
  - **ai_framework**: Framework de IA utilizado.
  - **author**: Autor del modelo, "SenseCraft AI".
  - **algorithm**: Descripción del algoritmo, "Object Detect(TensorRT, SMALL, COCO)".
  - **classes**: Categorías que el modelo puede detectar, incluyendo "person".
  - **checksum**: Suma de verificación (MD5) del archivo del modelo, actualmente vacío.
- **modes**: Modos de trabajo, 0 indica modo de inferencia, 1 indica modo de muestreo; cuando es 1, el dispositivo no analiza el campo model.
- **conditions**: Lista de condiciones de detección.
  - **class**: Categoría a detectar, aquí "person".
  - **mode**: Modo de detección, 0 indica detección de existencia, 1 indica comparación numérica, 2 indica cambio de cantidad.
  - **type**: Tipo de comparación, 0 indica menor que, 1 indica igual a, 2 indica mayor que, 3 indica no igual a (solo válido cuando mode=1).
  - **num**: Valor de comparación (solo válido cuando mode=1).
- **conditions_combo**: Relación para detección de múltiples condiciones, 0 indica AND, 1 indica OR.
- **silent_period**: Configuraciones del período de silencio.
  - **time_period**: Configuraciones del período de tiempo.
    - **repeat**: Repetir período de tiempo de domingo a sábado, 1 indica habilitado.
    - **time_start**: Hora de inicio del período de silencio.
    - **time_end**: Hora de fin del período de silencio.
  - **silence_duration**: Duración del silencio, en segundos.
- **output_type**: Tipo de imagen de salida, 0 indica solo imágenes pequeñas (412x412), 1 indica tanto imágenes grandes como pequeñas (640x480; 412x412).
- **shutter**: Modo de obturador, 0 indica continuamente abierto, 1 indica activado por UI, 2 indica activado por evento de entrada, 3 indica obturador una vez.

Descripción de conexión de terminales:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>Cualquier tipo de datos</td>
      <td>La entrada puede activar un obturador</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Produce imagen grande, imagen pequeña e información de inferencia (este campo es válido solo para modelos de inferencia)</td>
    </tr>
  </tbody>
</table>

#### 2.2.3 disparador de alarma

El bloque disparador de alarma puede ser el siguiente bloque de la cámara ai, principalmente agregando algo de audio y texto para proporcionar al siguiente bloque de alarma. Las definiciones de parámetros son las siguientes:

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

Los parámetros de configuración son los siguientes:

- **params**: Objeto que contiene los parámetros del dispositivo.
  - **text**: Texto de audio, información utilizada para generar contenido de audio.
  - **audio**: Archivo de audio codificado en Base64 que representa el contenido de audio en formato MP3.

Descripción de la conexión del terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Datos de salida del bloque de cámara AI</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Salida de imagen grande, imagen pequeña, información de inferencia, audio mp3 de alarma y texto</td>
    </tr>
  </tbody>
</table>

#### 2.2.4 analizador de imágenes

El bloque analizador de imágenes puede ser el bloque de siguiente nivel de la cámara AI, principalmente llamando a LLM para analizar imágenes. Cuando la solicitud de análisis devuelve un resultado que activa una alarma, enviará datos al módulo de siguiente nivel. Los parámetros se definen de la siguiente manera:

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

Los parámetros de configuración son los siguientes:

- **params**: Objeto que contiene los parámetros del dispositivo.
  - **url**: Dirección URL para la solicitud, reservada (normalmente usa la URL configurada en el dispositivo).
  - **header**: Encabezados de solicitud, reservados.
  - **body**: Objeto que contiene el contenido del cuerpo de la solicitud.
    - **prompt**: Prompt a incluir con la solicitud, proporcionando información adicional para el análisis de imagen.
    - **type**: Tipo de solicitud, 1 indica monitoreo.
    - **audio_txt**: Información de texto de audio a incluir con la solicitud. Cuando se activa la escena de monitoreo, el servicio de interfaz convertirá este campo a TTS y lo devolverá en la interfaz.

Descripción de conexión de terminales:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Datos de salida del bloque de cámara AI</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Salida de imagen grande, imagen pequeña, información de inferencia, audio mp3 de alarma, y texto</td>
    </tr>
  </tbody>
</table>

#### 2.2.5 alarma local

El bloque de alarma local es un bloque de alarma, implementando principalmente alarmas del dispositivo, como controlar el parpadeo RGB, reproducir audio de alarma, mostrar texto de alarma en el LCD, e imágenes de alarma cuando se activa. Los parámetros se definen como sigue:

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

Los parámetros de configuración son los siguientes:

- **params**: Objeto que contiene los parámetros del dispositivo.
  - **sound**: Interruptor para reproducir audio, 1 significa encendido, 0 significa apagado.
  - **rgb**: Interruptor para las luces de alarma RGB, 1 significa encendido, 0 significa apagado.
  - **img**: Interruptor para mostrar imágenes de alarma, 1 significa encendido, 0 significa apagado.
  - **text**: Interruptor para mostrar texto de alarma, 1 significa encendido, 0 significa apagado.
  - **duration**: Duración de la alarma en segundos, aquí son 10 segundos.

Descripción de la conexión de terminales:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Datos de salida del bloque disparador anterior</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.6 sensecraft alarm

El bloque sensecraft alarm es un bloque de alarma, que principalmente notifica a la plataforma SenseCraft información de alarma. Los parámetros se definen de la siguiente manera:

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

Los parámetros de configuración son los siguientes:

- **params**: Objeto que contiene los parámetros del dispositivo.
  - **silence_duration**: Duración del silencio en segundos, aquí son 60 segundos, indicando que el intervalo mínimo de reporte es 60s.
  - **text**: Texto para la notificación de alarma de la plataforma.

Descripción de la conexión del terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Datos de salida del bloque disparador anterior</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.7 uart alarm

El bloque uart alarm es un bloque de alarma, que implementa principalmente la salida de información de alarma a través del puerto serie. Los parámetros se definen de la siguiente manera:

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

Los parámetros de configuración son los siguientes:

- **params**: Objeto que contiene los parámetros del dispositivo.
  - **output_format**: Formato de salida.
    - 0: Formato binario.
    - 1: Formato JSON.
  - **text**: Texto de alarma, este texto se llenará en el campo Prompt del paquete de salida serial. Si este parámetro no se establece, se llenará el nombre corto del flujo de tareas actual.
  - **include_big_image**: Si incluir una imagen grande.
    - 0: No.
    - 1: Sí.
  - **include_small_image**: Si incluir una imagen pequeña.
    - 0: No.
    - 1: Sí.

Descripción de la conexión del terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Datos de salida del bloque disparador anterior</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/image-uart.png" style={{width:500, height:'auto'}}/></div>

La alarma uart enviará paquetes de datos desde el puerto serie en la parte posterior del SenseCAP Watcher. El método de cableado se muestra en la figura anterior. Los parámetros del puerto serie son:

- Velocidad de baudios: 115200
- 8 bits, 1 bit de parada
- Sin verificación de paridad

> Nota: Debido al comportamiento predeterminado de los pines IO_19 e IO_20 del ESP32S3 al encenderse, este puerto serie enviará algunos bytes aleatorios en el encendido inicial del SenseCAP Watcher. Por favor, use un mecanismo de detección de paquetes de datos válidos para filtrar.

El formato del paquete de datos enviado desde el puerto serie se divide en dos formatos según el parámetro `output_format`:

**A. Formato binario**

El formato del paquete de datos binario es el siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:800, height:'auto'}}/></div>

Campos:

- Packet Magic Header - Encabezado del paquete, 5 bytes "SEEED"
- Prompt Str Len - Longitud de la cadena de prompt
- Prompt Str - Cadena de prompt o texto de alarma. Cuando se establece el parámetro `text`, es una copia del parámetro `text`. Si el parámetro `text` no está establecido, se llenará automáticamente con un texto corto que describe el propósito de la tarea (generado por la interfaz de compilación de tareas del servicio en la nube).
- Big Image Len - Longitud en bytes de la cadena codificada en base64 de la imagen grande. Cuando `include_big_image=0`, el valor es 0.
- Big Image - Cadena codificada en base64 de la imagen grande JPG
- Small Image Len - Longitud en bytes de la cadena codificada en base64 de la imagen pequeña. Cuando `include_small_image=0`, el valor es 0.
- Small Image - Cadena codificada en base64 de la imagen pequeña JPG
- Inference type - Tipo de resultado de inferencia; 0: indica que no hay información de inferencia, 1: indica que la salida es inferencia de caja, 2: indica que la salida es resultado de inferencia de clase
- Boxes/classes - Resultado de inferencia.
- Classes name - Nombre de clase.

Entre los campos anteriores, `Packet Magic Header`, `Prompt Str Len`, y `Prompt Str` son campos de salida obligatorios. Otros campos están controlados por la habilitación de parámetros. Por ejemplo, si se establece el parámetro `include_big_image: 1`, el paquete de datos binario agregará los campos `Big Image Len` y `Big Image`.

**B. Formato JSON**

El formato del paquete de datos JSON es el siguiente:

```
#in the stream of uart output
.....{packet object}\r\n{packet object}\r\n...
```

objeto de paquete:

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

De manera similar, el campo "prompt" es un campo de salida obligatorio. Los campos "big_image" y "small_image" están controlados por parámetros.

#### 2.2.7 alarma http

El bloque de alarma http es un bloque de alarma, que principalmente implementa el reenvío de información de alarma al servidor HTTP; la definición de parámetros es la siguiente:

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

Los parámetros de configuración son los siguientes:

- **params**: Un objeto que contiene los parámetros del dispositivo.
  - **silence_duration**: Tiempo de silencio, en segundos.
  - **time_en**: Habilitar marca de tiempo, 1 significa activado, 0 significa desactivado.
  - **text_en**: Habilitar texto de alarma, 1 significa activado, 0 significa desactivado.
  - **image_en**: Habilitar imagen, 1 significa activado, 0 significa desactivado.
  - **sensor_en**: Habilitar sensor, 1 significa activado, 0 significa desactivado.
  - **text**: Texto de alarma.
  
Descripción de la conexión del terminal:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Datos de salida del bloque disparador anterior</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
