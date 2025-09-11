---
description: Introducing the SenseCAP Watcher software framework.
title: Watcher Software Framework
image: https://files.seeedstudio.com/wiki/watcher_software_framework/architecture_1.webp
slug: /watcher_software_framework
sidebar_position: 2
last_update:
  date: 11/5/2024
  author: Citric
---

# Watcher Software Architecture

The software architecture of SenseCAP Watcher is shown in the figure below, mainly divided into three parts: APP applications, UI and interaction, task flow.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/architecture.png" style={{width:800, height:'auto'}}/></div>

- **APP applications**: Mainly some applications, such as WiFi connection, Bluetooth configuration, communication with the platform, OTA, etc., which also generate some data for UI display.
- **UI and interaction**: Mainly the implementation of the UI interface and UI interaction.
- **Task flow**: Mainly the implementation of the task flow engine and various task flow function modules.

## 1. Task Flow Framework

### 1.1 Overview

In order to meet the needs of various scenarios, a task flow framework similar to Node-RED was designed, which can flexibly organize the skills possessed by the device and allow them to work together.

We abstract the skills possessed by the device into blocks, which can be data producers or consumers, or both. Then, according to specific tasks, the required blocks are extracted and connected through producer-consumer relationships to achieve specific scenario tasks.

### 1.2 Task Flow Engine

The main function of the task flow engine is to enable various functional modules to operate according to the task flow JSON; it manages the registration, instantiation, and destruction of functional modules, as well as the connections between them.

The processing flow of the task flow engine is shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/taskflow_engine.png" style={{width:300, height:'auto'}}/></div>

1. Initialize the task flow engine.
2. Register each functional module to the task flow engine, using a linked list to store the management functions and information of each module.
3. The task flow engine waits to receive task flows.
4. Upon receiving a new task flow, parse the task flow JSON, extract the required functional modules, and store them in an array.
5. In the functional module array, find the module's management function from the linked list based on the module name and sort them.
6. Instantiate functional modules.
7. Configure functional modules.
8. Establish event pipelines between functional modules for message transmission.
9. Start each functional module sequentially.
10. Once started, the task flow runs.

### 1.3 Task Flow JSON

The task flow is described in JSON format, and the task flow engine runs the task flow by parsing this JSON file.

The following is a task flow JSON template:

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

Field descriptions:

- **ctd**: Creation time of the task flow.
- **tlid**: Task flow ID, which can be the same as ctd.
- **tn**: Name of the task flow.
- **type:** Type of task flow
  - **0**: Local example task flow.
  - **1**: Task flow issued via MQTT.
  - **2**: Task flow issued via Bluetooth.
  - **3**: Task flow issued via voice.
- **task_flow：** Contains detailed information about each functional module in the task flow.
  - **id**: Module ID.
  - **type**: Module name.
  - **index**: Order of the module in the task flow; the earlier the position in the flow, the smaller the value, used for sorting modules.
  - **version**: Module version.
  - **params**: Module parameters; different versions may have different parameter configurations, which can be parsed compatibly according to the version number.
  - **wires**: Connections between modules. See **Event Pipelines of Task Flow Functional Modules** for details.

Below is an example of a task flow JSON for fire monitoring.

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

This task flow uses four blocks: ai camera, image analyzer, local alarm, and sensecraft alarm. The wiring topology is shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

The following figure shows the general flow of the task flow engine and the start-up of functional modules:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

### 1.4 Event Pipelines of Modules

The connections between functional modules represent data transmission, where the previous module generates data and sends it to the next module. Message transmission uses an event mechanism where the former publishes events, and the latter subscribes to events. Events are implemented using the IDF's `esp_event` component, which supports queue caching.

Each module has a unique id, which serves as the event id that the module subscribes to. During `sub_set` execution, the module subscribes to messages with that id; during stop execution, it unregisters that event id. Some modules, as excitation sources, do not have an upstream module and can operate without subscribing to that event ID.

Each module has a wires field that indicates the id of the next module. When executing `pub_set`, these ids are cached, and data is published to these ids when available. Some modules have an empty wires field, indicating no downstream module, consuming data without producing it.

Each module can have at most one input terminal but multiple output terminals, indicating different data outputs, and each output terminal can output to multiple blocks. The wires field is a two-dimensional array, with the first layer representing the number of output terminals, and the second layer representing the ids of the modules to which a terminal outputs.

As shown in the example below, Module 1 publishes a message on event ID 2, Module 2 receives and processes the message; Module 2 has two output terminals, the first output terminal connects to Modules 3 and 4, and the second output terminal connects to Module 5. When output terminal 1 has data, it publishes messages to event IDs 3 and 4, and when output terminal 2 has data, it publishes messages to event ID 5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection2.png" style={{width:600, height:'auto'}}/></div>

The corresponding JSON description for Module 2 is as follows:

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

The related operation functions are defined in **tf.h** (mainly encapsulating the idf's `esp_event` related functions) as follows:

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

#### 1.4.1 Message Types Transmitted in Event Pipelines

Two modules can be connected together, indicating that their data types are consistent; we define data types and corresponding data structures in the [tf_module_data_type.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_data_type.h) file. Generally, data types are defined with the prefix **TF_DATA_TYPE_**; data structures are defined with the prefix **tf_data_**.

For example, we define the **TF_DATA_TYPE_BUFFER** type in the type enumeration structure, and the corresponding structure is as follows. The first field type indicates the data type, and the remaining fields indicate the data to be transmitted.

```cpp
typedef struct {
    uint8_t  type;
    struct tf_data_buf data;
} tf_data_buffer_t;
```

When a module receives event data, it first extracts the first byte of the event data to get the data type, then determines whether the data is what it wants. If it is, it processes it further; otherwise, it discards it.

The currently available data types are described as follows:

<table>
  <thead>
    <tr>
      <th>Data Type</th>
      <th>Data Structure</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TF_DATA_TYPE_TIME</td>
      <td>tf_data_time_t</td>
      <td>Timestamp</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_BUFFER</td>
      <td>tf_data_buffer_t</td>
      <td>Buffer</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>tf_data_dualimage_with_inference_t</td>
      <td>Contains large image, small image, and inference information</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>tf_data_dualimage_with_audio_text_t</td>
      <td>Contains large image, small image, alarm audio, and alarm text</td>
    </tr>
  </tbody>
</table>

- Large image: 640 x 480 jpeg format image obtained from himax, stored using base64 encoding.

- Small image: 416 x 416 jpeg format image obtained from himax, stored using base64 encoding.

- Inference information: Inference results obtained from himax, including an array of box coordinates, class classification information, or point coordinate information, as well as class name information.

- Audio: Data obtained from the trigger block, in .mp3 format.

#### 1.4.2 Efficient Transmission in Event Pipelines

When using the idf's `esp_event` component for message transmission, memory copying occurs during enqueueing (please read the `esp_event` source code for details); this is very unfriendly when transmitting large data, such as images and audio.

Therefore, we adopt an efficient transmission method by transmitting only pointers. For example, in the **TF_DATA_TYPE_BUFFER** type, the data to be transmitted is defined as follows. The first field `p_buf` is the start address of the data buffer, and the second field len is the length of the data.

```cpp
struct tf_data_buf
{
    uint8_t *p_buf;
    uint32_t len;
};
```

For data producer modules, they are responsible for memory allocation of `p_buf`; the next-level data consumer module is responsible for freeing the memory after use.
Some common data copying and freeing functions are defined in the [tf_module_util.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_util.h) file. For example, if the received event data type is not what you want, you can directly call the **tf_data_free()** function to free the memory (this function implements the release of all data types), as shown below:

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

### 1.5 Base Class of Modules

We define the base class of modules in [tf_module.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_engine/include/tf_module.h). The task flow engine does not concern itself with the specific implementation of the models, it only needs to call the relevant interfaces of the modules to operate them. Each specific module only needs to implement the operation functions and management functions.

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

For how to write a module, please refer to [Watcher Function Module Development Guide](https://wiki.seeedstudio.com/watcher_function_module_development_guide)

## 2. Functional Modules

### 2.1 List

Currently, common built-in modules include ai camera, alarm trigger, image analyzer, local alarm, sensecraft alarm, and uart alarm.

<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Functional Module</th>
      <th>Input Data Type</th>
      <th>Output Data Type</th>
      <th>Supports Multiple Instances</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Excitation Source</td>
      <td>ai camera</td>
      <td>Any data type</td>
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
      <td rowspan="2">Trigger Module</td>
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
      <td rowspan="3">Alarm Module</td>
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

### 2.2 Functional Module Introduction

#### 2.2.1 timer

The timer block is an excitation source module, primarily functioning as a periodic timer. The parameter definitions are as follows:

```json
{
    "type": "timer",
    "version": "1.0.0",
    "params": {
        "period": 5
    }
}
```

Configuration parameters are as follows:

- **params**: An object containing device parameters.
  - **period**: The period for starting the timer.

Terminal connection description:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>Outputs the current timestamp</td>
    </tr>
  </tbody>
</table>

#### 2.2.2 ai camera

The ai camera block is mainly responsible for communication with Himax, model OTA, obtaining images and inference results, and contains some simple condition filtering functions. The parameter definitions are as follows:

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

The meanings of each field in the params parameter are as follows:

- **model_type**: Model type, 0 indicates cloud model (the model URL will be extracted from the model field for download and use), 1, 2, and 3 indicate Himax built-in models.
- **model**: Specific information about the model.
  - **model_id**: Unique identifier of the model.
  - **version**: Model version.
  - **arguments**: Model parameter configuration.
    - **size**: Size of the model.
    - **url**: Download URL of the model.
    - **icon**: Icon URL of the model.
    - **task**: Task type of the model, "detect" indicates detection.
    - **createdAt**: Timestamp of model creation.
    - **updatedAt**: Timestamp of model update.
    - **iou**: IOU (Intersection over Union) threshold.
    - **conf**: Confidence threshold.
  - **model_name**: Name of the model, "General Object Detection".
  - **model_format**: Model format, "TensorRT".
  - **ai_framework**: AI framework used.
  - **author**: Author of the model, "SenseCraft AI".
  - **algorithm**: Algorithm description, "Object Detect(TensorRT, SMALL, COCO)".
  - **classes**: Categories the model can detect, including "person".
  - **checksum**: Checksum (MD5) of the model file, currently empty.
- **modes**: Working modes, 0 indicates inference mode, 1 indicates sampling mode; when it is 1, the device does not parse the model field.
- **conditions**: List of detection conditions.
  - **class**: Category to detect, here "person".
  - **mode**: Detection mode, 0 indicates existence detection, 1 indicates numerical comparison, 2 indicates quantity change.
  - **type**: Comparison type, 0 indicates less than, 1 indicates equal to, 2 indicates greater than, 3 indicates not equal to (only valid when mode=1).
  - **num**: Comparison value (only valid when mode=1).
- **conditions_combo**: Relationship for multi-condition detection, 0 indicates AND, 1 indicates OR.
- **silent_period**: Silent period settings.
  - **time_period**: Time period settings.
    - **repeat**: Repeat time period from Sunday to Saturday, 1 indicates enabled.
    - **time_start**: Start time of the silent period.
    - **time_end**: End time of the silent period.
  - **silence_duration**: Duration of silence, in seconds.
- **output_type**: Output image type, 0 indicates only small images (412x412), 1 indicates both large and small images (640x480; 412x412).
- **shutter**: Shutter mode, 0 indicates continuously open, 1 indicates triggered by UI, 2 indicates triggered by input event, 3 indicates shutter once.

Terminal connection description:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>Any data type</td>
      <td>Input can trigger a shutter</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Outputs large image, small image, and inference information (this field is valid only for inference models)</td>
    </tr>
  </tbody>
</table>

#### 2.2.3 alarm trigger

The alarm trigger block may be the next block of the ai camera, mainly adding some audio and text to provide to the next alarm block. The parameter definitions are as follows:

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

Configuration parameters are as follows:

- **params**: Object containing device parameters.
  - **text**: Audio text, information used to generate audio content.
  - **audio**: Base64 encoded audio file representing the audio content in MP3 format.

Terminal connection description:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Data output from the AI camera block</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Output large image, small image, inference information, alarm mp3 audio, and text</td>
    </tr>
  </tbody>
</table>

#### 2.2.4 image analyzer

The image analyzer block may be the next level block of the AI camera, mainly calling LLM to analyze images. When the request for analysis returns a result that triggers an alarm, it will output data to the next level module. The parameters are defined as follows:

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

Configuration parameters are as follows:

- **params**: Object containing device parameters.
  - **url**: URL address for the request, reserved (usually use the URL configured on the device).
  - **header**: Request headers, reserved.
  - **body**: Object containing the request body content.
    - **prompt**: Prompt to include with the request, providing additional information for image analysis.
    - **type**: Type of request, 1 indicates monitoring.
    - **audio_txt**: Audio text information to include with the request. When the monitoring scene is triggered, the interface service will convert this field to TTS and return it in the interface.

Terminal connection description:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Data output from the AI camera block</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Output large image, small image, inference information, alarm mp3 audio, and text</td>
    </tr>
  </tbody>
</table>

#### 2.2.5 local alarm

The local alarm block is an alarm block, mainly implementing device alarms, such as controlling RGB flashing, playing alarm audio, displaying alarm text on the LCD, and alarm images when triggered. The parameters are defined as follows:

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

Configuration parameters are as follows:

- **params**: Object containing device parameters.
  - **sound**: Switch to play audio, 1 means on, 0 means off.
  - **rgb**: Switch for RGB alarm lights, 1 means on, 0 means off.
  - **img**: Switch to display alarm images, 1 means on, 0 means off.
  - **text**: Switch to display alarm text, 1 means on, 0 means off.
  - **duration**: Duration of the alarm in seconds, here it is 10 seconds.

Terminal connection description:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Data output from the previous trigger block</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.6 sensecraft alarm

The sensecraft alarm block is an alarm block, mainly notifying the SenseCraft platform of alarm information. The parameters are defined as follows:

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

Configuration parameters are as follows:

- **params**: Object containing device parameters.
  - **silence_duration**: Silence duration in seconds, here it is 60 seconds, indicating that the minimum reporting interval is 60s.
  - **text**: Text for platform alarm notification.

Terminal connection description:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Data output from the previous trigger block</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.7 uart alarm

The uart alarm block is an alarm block, mainly implementing alarm information output through the serial port. The parameters are defined as follows:

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

Configuration parameters are as follows:

- **params**: Object containing device parameters.
  - **output_format**: Output format.
    - 0: Binary format.
    - 1: JSON format.
  - **text**: Alarm text, this text will be filled into the Prompt field of the serial output packet. If this parameter is not set, the short name of the current task flow will be filled.
  - **include_big_image**: Whether to include a large image.
    - 0: No.
    - 1: Yes.
  - **include_small_image**: Whether to include a small image.
    - 0: No.
    - 1: Yes.

Terminal connection description:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Data output from the previous trigger block</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/image-uart.png" style={{width:500, height:'auto'}}/></div>

The uart alarm will output data packets from the serial port at the back of the SenseCAP Watcher. The wiring method is shown in the figure above. The serial port parameters are:

- Baud rate: 115200
- 8 bits, 1 stop bit
- No parity check

> Note: Due to the default behavior of ESP32S3 pins IO_19 and IO_20 on power-up, this serial port will output a few random bytes at the initial power-up of SenseCAP Watcher. Please use a valid data packet detection mechanism for filtering.

The format of the data packet output from the serial port is divided into two formats according to the `output_format` parameter:

**A. Binary format**

The binary data packet format is as follows:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:800, height:'auto'}}/></div>

Fields:

- Packet Magic Header - Packet header, 5 bytes "SEEED"
- Prompt Str Len - Prompt string length
- Prompt Str - Prompt string or alarm text. When the `text` parameter is set, it is a copy of the `text` parameter. If the `text` parameter is not set, it will be automatically filled with a short text describing the task purpose (generated by the cloud service's task compilation interface).
- Big Image Len - Byte length of the base64 encoded string of the large image,When `include_big_image=0`, the value is 0.
- Big Image - Base64 encoded string of the large image JPG
- Small Image Len - Byte length of the base64 encoded string of the small image, When `include_small_image=0`, the value is 0.
- Small Image - Base64 encoded string of the small image JPG
- Inference type - Inference result type; 0: indicates no inference information, 1: indicates that the output is box inference, 2: indicates that the output is class inference result
- Boxes/classes - Inference result.
- Classes name - Class name.

Among the above fields, `Packet Magic Header`, `Prompt Str Len`, and `Prompt Str` fields are mandatory output fields. Other fields are controlled by parameter enablement. For example, if the parameter `include_big_image: 1` is set, the binary data packet will append `Big Image Len` and `Big Image` fields.

**B. JSON format**

The JSON data packet format is as follows:

```
#in the stream of uart output
.....{packet object}\r\n{packet object}\r\n...
```

packet object:

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

Similarly, the "prompt" field is a mandatory output field. The "big_image" and "small_image" fields are controlled by parameters.

#### 2.2.7 http alarm

The http alarm block is an alarm block, which mainly implements forwarding alarm information to the HTTP server; the parameter definition is as follows:

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

Configuration parameters are as follows:

- **params**: An object containing device parameters.
  - **silence_duration**: Silence time, in seconds.
  - **time_en**: Enable timestamp, 1 means on, 0 means off.
  - **text_en**: Enable alarm text, 1 means on, 0 means off.
  - **image_en**: Enable image, 1 means on, 0 means off.
  - **sensor_en**: Enable sensor, 1 means on, 0 means off.
  - **text**: Alarm text.
  
Terminal connection description:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Data output from the previous trigger block</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
