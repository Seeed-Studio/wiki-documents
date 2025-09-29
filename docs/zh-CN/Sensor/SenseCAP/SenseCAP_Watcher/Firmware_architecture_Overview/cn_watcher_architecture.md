---
description: 介绍 SenseCAP Watcher 软件框架。
title: Watcher 软件框架
image: https://files.seeedstudio.com/wiki/watcher_software_framework/architecture_1.webp
slug: /cn/watcher_software_framework
sidebar_position: 2
last_update:
  date: 11/5/2024
  author: Citric
---

# Watcher 软件架构

SenseCAP Watcher 的软件架构如下图所示，主要分为三个部分：APP 应用、UI 和交互、任务流。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/architecture.png" style={{width:800, height:'auto'}}/></div>

- **APP 应用**：主要是一些应用程序，如 WiFi 连接、蓝牙配置、与平台通信、OTA 等，这些也会生成一些数据供 UI 显示。
- **UI 和交互**：主要是 UI 界面的实现和 UI 交互。
- **任务流**：主要是任务流引擎和各种任务流功能模块的实现。

## 1. 任务流框架

### 1.1 概述

为了满足各种场景的需求，设计了一个类似 Node-RED 的任务流框架，可以灵活地组织设备所拥有的技能，让它们协同工作。

我们将设备所拥有的技能抽象为块，这些块可以是数据生产者或消费者，或者两者兼而有之。然后，根据具体任务，提取所需的块并通过生产者-消费者关系连接它们，以实现特定的场景任务。

### 1.2 任务流引擎

任务流引擎的主要功能是使各种功能模块能够根据任务流 JSON 运行；它管理功能模块的注册、实例化和销毁，以及它们之间的连接。

任务流引擎的处理流程如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/taskflow_engine.png" style={{width:300, height:'auto'}}/></div>

1. 初始化任务流引擎。
2. 将每个功能模块注册到任务流引擎，使用链表存储每个模块的管理函数和信息。
3. 任务流引擎等待接收任务流。
4. 收到新任务流后，解析任务流 JSON，提取所需的功能模块，并将它们存储在数组中。
5. 在功能模块数组中，根据模块名称从链表中找到模块的管理函数并对它们进行排序。
6. 实例化功能模块。
7. 配置功能模块。
8. 在功能模块之间建立事件管道以进行消息传输。
9. 按顺序启动每个功能模块。
10. 启动后，任务流开始运行。

### 1.3 任务流 JSON

任务流以 JSON 格式描述，任务流引擎通过解析此 JSON 文件来运行任务流。

以下是任务流 JSON 模板：

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

字段描述：

- **ctd**：任务流的创建时间。
- **tlid**：任务流ID，可以与ctd相同。
- **tn**：任务流的名称。
- **type：** 任务流的类型
  - **0**：本地示例任务流。
  - **1**：通过MQTT下发的任务流。
  - **2**：通过蓝牙下发的任务流。
  - **3**：通过语音下发的任务流。
- **task_flow：** 包含任务流中每个功能模块的详细信息。
  - **id**：模块ID。
  - **type**：模块名称。
  - **index**：模块在任务流中的顺序；在流程中位置越靠前，数值越小，用于模块排序。
  - **version**：模块版本。
  - **params**：模块参数；不同版本可能有不同的参数配置，可根据版本号进行兼容解析。
  - **wires**：模块之间的连接。详情请参见**任务流功能模块的事件管道**。

以下是火灾监控任务流JSON的示例。

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

这个任务流使用四个模块：AI摄像头、图像分析器、本地报警和sensecraft报警。接线拓扑如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

下图显示了任务流引擎的一般流程和功能模块的启动：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

### 1.4 模块的事件管道

功能模块之间的连接代表数据传输，前一个模块生成数据并将其发送到下一个模块。消息传输使用事件机制，前者发布事件，后者订阅事件。事件使用IDF的`esp_event`组件实现，支持队列缓存。

每个模块都有一个唯一的id，它作为模块订阅的事件id。在`sub_set`执行期间，模块订阅具有该id的消息；在停止执行期间，它注销该事件id。一些模块作为激励源，没有上游模块，可以在不订阅该事件ID的情况下运行。

每个模块都有一个wires字段，表示下一个模块的id。在执行`pub_set`时，这些id被缓存，当数据可用时，数据被发布到这些id。一些模块的wires字段为空，表示没有下游模块，消费数据而不产生数据。

每个模块最多可以有一个输入端子但可以有多个输出端子，表示不同的数据输出，每个输出端子可以输出到多个模块。wires字段是一个二维数组，第一层表示输出端子的数量，第二层表示端子输出到的模块的id。

如下面的示例所示，模块1在事件ID 2上发布消息，模块2接收并处理消息；模块2有两个输出端子，第一个输出端子连接到模块3和4，第二个输出端子连接到模块5。当输出端子1有数据时，它向事件ID 3和4发布消息，当输出端子2有数据时，它向事件ID 5发布消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection2.png" style={{width:600, height:'auto'}}/></div>

模块2对应的JSON描述如下：

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

相关的操作函数在 **tf.h** 中定义（主要封装了 idf 的 `esp_event` 相关函数），如下所示：

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

#### 1.4.1 事件管道中传输的消息类型

两个模块可以连接在一起，表明它们的数据类型是一致的；我们在 [tf_module_data_type.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_data_type.h) 文件中定义数据类型和相应的数据结构。通常，数据类型以前缀 **TF_DATA_TYPE_** 定义；数据结构以前缀 **tf_data_** 定义。

例如，我们在类型枚举结构中定义了 **TF_DATA_TYPE_BUFFER** 类型，相应的结构如下。第一个字段 type 表示数据类型，其余字段表示要传输的数据。

```cpp
typedef struct {
    uint8_t  type;
    struct tf_data_buf data;
} tf_data_buffer_t;
```

当模块接收到事件数据时，它首先提取事件数据的第一个字节来获取数据类型，然后判断数据是否是它所需要的。如果是，则进一步处理；否则，丢弃该数据。

当前可用的数据类型描述如下：

<table>
  <thead>
    <tr>
      <th>数据类型</th>
      <th>数据结构</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TF_DATA_TYPE_TIME</td>
      <td>tf_data_time_t</td>
      <td>时间戳</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_BUFFER</td>
      <td>tf_data_buffer_t</td>
      <td>缓冲区</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>tf_data_dualimage_with_inference_t</td>
      <td>包含大图像、小图像和推理信息</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>tf_data_dualimage_with_audio_text_t</td>
      <td>包含大图像、小图像、报警音频和报警文本</td>
    </tr>
  </tbody>
</table>

- 大图像：从 himax 获取的 640 x 480 jpeg 格式图像，使用 base64 编码存储。

- 小图像：从 himax 获取的 416 x 416 jpeg 格式图像，使用 base64 编码存储。

- 推理信息：从 himax 获取的推理结果，包括边界框坐标数组、类别分类信息或点坐标信息，以及类别名称信息。

- 音频：从触发块获取的数据，格式为 .mp3。

#### 1.4.2 事件管道中的高效传输

当使用 idf 的 `esp_event` 组件进行消息传输时，在入队过程中会发生内存拷贝（详情请阅读 `esp_event` 源代码）；这对于传输大数据（如图像和音频）来说非常不友好。

因此，我们采用一种高效的传输方法，只传输指针。例如，在 **TF_DATA_TYPE_BUFFER** 类型中，要传输的数据定义如下。第一个字段 `p_buf` 是数据缓冲区的起始地址，第二个字段 len 是数据的长度。

```cpp
struct tf_data_buf
{
    uint8_t *p_buf;
    uint32_t len;
};
```

对于数据生产者模块，它们负责 `p_buf` 的内存分配；下一级数据消费者模块负责在使用后释放内存。
一些常用的数据复制和释放函数定义在 [tf_module_util.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_util.h) 文件中。例如，如果接收到的事件数据类型不是您想要的，您可以直接调用 **tf_data_free()** 函数来释放内存（此函数实现了所有数据类型的释放），如下所示：

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

### 1.5 模块基类

我们在 [tf_module.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_engine/include/tf_module.h) 中定义了模块的基类。任务流引擎不关心模型的具体实现，它只需要调用模块的相关接口来操作它们。每个具体的模块只需要实现操作函数和管理函数。

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

有关如何编写模块的信息，请参考 [Watcher 功能模块开发指南](https://wiki.seeedstudio.com/cn/watcher_function_module_development_guide)

## 2. 功能模块

### 2.1 列表

目前，常见的内置模块包括 ai camera、alarm trigger、image analyzer、local alarm、sensecraft alarm 和 uart alarm。

<table>
  <thead>
    <tr>
      <th>类别</th>
      <th>功能模块</th>
      <th>输入数据类型</th>
      <th>输出数据类型</th>
      <th>支持多实例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">激励源</td>
      <td>ai camera</td>
      <td>任意数据类型</td>
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
      <td rowspan="2">触发模块</td>
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
      <td rowspan="3">报警模块</td>
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

### 2.2 功能模块介绍

#### 2.2.1 timer

timer 块是一个激励源模块，主要功能是作为周期性定时器。参数定义如下：

```json
{
    "type": "timer",
    "version": "1.0.0",
    "params": {
        "period": 5
    }
}
```

配置参数如下：

- **params**: 包含设备参数的对象。
  - **period**: 启动定时器的周期。

终端连接描述：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>输出当前时间戳</td>
    </tr>
  </tbody>
</table>

#### 2.2.2 ai camera

ai camera 块主要负责与 Himax 的通信、模型 OTA、获取图像和推理结果，并包含一些简单的条件过滤功能。参数定义如下：

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

params 参数中各字段的含义如下：

- **model_type**: 模型类型，0 表示云端模型（将从 model 字段中提取模型 URL 进行下载使用），1、2、3 表示 Himax 内置模型。
- **model**: 模型的具体信息。
  - **model_id**: 模型的唯一标识符。
  - **version**: 模型版本。
  - **arguments**: 模型参数配置。
    - **size**: 模型大小。
    - **url**: 模型下载 URL。
    - **icon**: 模型图标 URL。
    - **task**: 模型任务类型，"detect" 表示检测。
    - **createdAt**: 模型创建时间戳。
    - **updatedAt**: 模型更新时间戳。
    - **iou**: IOU（交并比）阈值。
    - **conf**: 置信度阈值。
  - **model_name**: 模型名称，"General Object Detection"。
  - **model_format**: 模型格式，"TensorRT"。
  - **ai_framework**: 使用的 AI 框架。
  - **author**: 模型作者，"SenseCraft AI"。
  - **algorithm**: 算法描述，"Object Detect(TensorRT, SMALL, COCO)"。
  - **classes**: 模型可检测的类别，包括 "person"。
  - **checksum**: 模型文件的校验和（MD5），当前为空。
- **modes**: 工作模式，0 表示推理模式，1 表示采样模式；当为 1 时，设备不解析 model 字段。
- **conditions**: 检测条件列表。
  - **class**: 要检测的类别，这里是 "person"。
  - **mode**: 检测模式，0 表示存在性检测，1 表示数值比较，2 表示数量变化。
  - **type**: 比较类型，0 表示小于，1 表示等于，2 表示大于，3 表示不等于（仅在 mode=1 时有效）。
  - **num**: 比较值（仅在 mode=1 时有效）。
- **conditions_combo**: 多条件检测的关系，0 表示 AND，1 表示 OR。
- **silent_period**: 静默期设置。
  - **time_period**: 时间段设置。
    - **repeat**: 从周日到周六的重复时间段，1 表示启用。
    - **time_start**: 静默期开始时间。
    - **time_end**: 静默期结束时间。
  - **silence_duration**: 静默持续时间，单位为秒。
- **output_type**: 输出图像类型，0 表示仅小图（412x412），1 表示大图和小图都有（640x480; 412x412）。
- **shutter**: 快门模式，0 表示持续开启，1 表示由 UI 触发，2 表示由输入事件触发，3 表示快门一次。

终端连接说明：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input</td>
      <td>任意数据类型</td>
      <td>输入可以触发快门</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>输出大图、小图和推理信息（此字段仅对推理模型有效）</td>
    </tr>
  </tbody>
</table>

#### 2.2.3 alarm trigger

alarm trigger 块可能是 ai camera 的下一个块，主要添加一些音频和文本提供给下一个 alarm 块。参数定义如下：

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

配置参数如下：

- **params**: 包含设备参数的对象。
  - **text**: 音频文本，用于生成音频内容的信息。
  - **audio**: Base64编码的音频文件，表示MP3格式的音频内容。

终端连接描述：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>来自AI摄像头模块的数据输出</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>输出大图像、小图像、推理信息、报警mp3音频和文本</td>
    </tr>
  </tbody>
</table>

#### 2.2.4 image analyzer

图像分析器模块可能是AI摄像头的下一级模块，主要调用LLM来分析图像。当分析请求返回触发报警的结果时，它将向下一级模块输出数据。参数定义如下：

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

配置参数如下：

- **params**: 包含设备参数的对象。
  - **url**: 请求的URL地址，保留（通常使用设备上配置的URL）。
  - **header**: 请求头，保留。
  - **body**: 包含请求体内容的对象。
    - **prompt**: 请求中包含的提示，为图像分析提供额外信息。
    - **type**: 请求类型，1表示监控。
    - **audio_txt**: 请求中包含的音频文本信息。当监控场景被触发时，接口服务将把此字段转换为TTS并在接口中返回。

终端连接说明：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>AI摄像头块输出的数据</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>输出大图像、小图像、推理信息、报警mp3音频和文本</td>
    </tr>
  </tbody>
</table>

#### 2.2.5 本地报警

本地报警块是一个报警块，主要实现设备报警，例如在触发时控制RGB闪烁、播放报警音频、在LCD上显示报警文本和报警图像。参数定义如下：

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

配置参数如下：

- **params**: 包含设备参数的对象。
  - **sound**: 播放音频的开关，1 表示开启，0 表示关闭。
  - **rgb**: RGB 报警灯的开关，1 表示开启，0 表示关闭。
  - **img**: 显示报警图像的开关，1 表示开启，0 表示关闭。
  - **text**: 显示报警文本的开关，1 表示开启，0 表示关闭。
  - **duration**: 报警持续时间（秒），这里是 10 秒。

终端连接说明：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>来自前一个触发块的数据输出</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.6 sensecraft alarm

sensecraft alarm 块是一个报警块，主要用于向 SenseCraft 平台通知报警信息。参数定义如下：

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

配置参数如下：

- **params**: 包含设备参数的对象。
  - **silence_duration**: 静默持续时间（秒），这里是60秒，表示最小报告间隔为60秒。
  - **text**: 平台报警通知的文本。

终端连接说明：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>来自前一个触发块的数据输出</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.7 uart alarm

uart alarm块是一个报警块，主要实现通过串口输出报警信息。参数定义如下：

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

配置参数如下：

- **params**: 包含设备参数的对象。
  - **output_format**: 输出格式。
    - 0: 二进制格式。
    - 1: JSON 格式。
  - **text**: 报警文本，此文本将填入串口输出数据包的 Prompt 字段。如果未设置此参数，将填入当前任务流的短名称。
  - **include_big_image**: 是否包含大图像。
    - 0: 否。
    - 1: 是。
  - **include_small_image**: 是否包含小图像。
    - 0: 否。
    - 1: 是。

终端连接说明：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>来自前一个触发块的数据输出</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/image-uart.png" style={{width:500, height:'auto'}}/></div>

uart 报警将从 SenseCAP Watcher 背面的串口输出数据包。接线方法如上图所示。串口参数为：

- 波特率：115200
- 8 位数据位，1 位停止位
- 无奇偶校验

> 注意：由于 ESP32S3 引脚 IO_19 和 IO_20 在上电时的默认行为，此串口在 SenseCAP Watcher 初次上电时会输出一些随机字节。请使用有效的数据包检测机制进行过滤。

从串口输出的数据包格式根据 `output_format` 参数分为两种格式：

**A. 二进制格式**

二进制数据包格式如下：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:800, height:'auto'}}/></div>

字段：

- Packet Magic Header - 数据包头，5 字节 "SEEED"
- Prompt Str Len - 提示字符串长度
- Prompt Str - 提示字符串或报警文本。当设置了 `text` 参数时，它是 `text` 参数的副本。如果未设置 `text` 参数，将自动填充描述任务目的的简短文本（由云服务的任务编译接口生成）。
- Big Image Len - 大图像 base64 编码字符串的字节长度，当 `include_big_image=0` 时，值为 0。
- Big Image - 大图像 JPG 的 Base64 编码字符串
- Small Image Len - 小图像 base64 编码字符串的字节长度，当 `include_small_image=0` 时，值为 0。
- Small Image - 小图像 JPG 的 Base64 编码字符串
- Inference type - 推理结果类型；0：表示无推理信息，1：表示输出为框推理，2：表示输出为类推理结果
- Boxes/classes - 推理结果。
- Classes name - 类名。

在上述字段中，`Packet Magic Header`、`Prompt Str Len` 和 `Prompt Str` 字段是必须输出的字段。其他字段由参数启用控制。例如，如果设置参数 `include_big_image: 1`，二进制数据包将附加 `Big Image Len` 和 `Big Image` 字段。

**B. JSON 格式**

JSON 数据包格式如下：

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

同样，"prompt" 字段是一个必需的输出字段。"big_image" 和 "small_image" 字段由参数控制。

#### 2.2.7 http 告警

http 告警块是一个告警块，主要实现将告警信息转发到 HTTP 服务器；参数定义如下：

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

配置参数如下：

- **params**: 包含设备参数的对象。
  - **silence_duration**: 静音时间，以秒为单位。
  - **time_en**: 启用时间戳，1 表示开启，0 表示关闭。
  - **text_en**: 启用报警文本，1 表示开启，0 表示关闭。
  - **image_en**: 启用图像，1 表示开启，0 表示关闭。
  - **sensor_en**: 启用传感器，1 表示开启，0 表示关闭。
  - **text**: 报警文本。
  
终端连接说明：

<table>
  <thead>
    <tr>
      <th>终端</th>
      <th>数据类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>输入</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>来自前一个触发块的数据输出</td>
    </tr>
    <tr>
      <td>输出</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
