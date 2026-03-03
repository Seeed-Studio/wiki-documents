---
description: Describes how to develop a Watcher function block.
title: Watcher Function Module Development Guide
image: https://files.seeedstudio.com/wiki/watcher_software_framework/watcher_function_module.webp
slug: /watcher_function_module_development_guide
sidebar_position: 3
last_update:
  date: 11/5/2024
  author: Citric
---


# Watcher Function Module Development Guide

It's recommended that you firstly read the [Watcher Software Framework](https://wiki.seeedstudio.com/watcher_software_framework) to have an understanding about how the function module works.

In this documentation we're gonna show a step-by-step guide on how to develop a new function module. We're gonna take the `UART Alarm` module as an example.

## 1. Installation and first build

Please pass through the steps in [Build the Watcher Development Environment](https://wiki.seeedstudio.com/build_watcher_development_environment) if you've skipped it.

```shell
# you're in PROJ_ROOT_DIR/examples/factory_firmware/
cd main/task_flow_module
```

## 2. Choose a proper template

In the [Watcher Software Framework](https://wiki.seeedstudio.com/watcher_software_framework) we introduced the existing function module (short as **FM** in the following of the documentation) and what they're used for. When we're developing a new FM, we'd better start from a closest FM existing as a reference. In this tutorial we're going to develop an alarmer FM, so we choose one of the alarmer FMs, `local alarmer` is the simplest one, we'll take it.

```shell
cp tf_module_local_alarm.h tf_module_uart_alarm.h
cp tf_module_local_alarm.c tf_module_uart_alarm.c
```

It doesn't matter what name the files have, any `.h` and `.c` file will be scanned by the build system and taken into the compile code tree. But it's still recommended to have a meaningful file name.

## 3. Implement the registration

The **TFE** (task flow engine) provides an API function to register a new FM.

```cpp
esp_err_t tf_module_register(const char *p_name,
                                const char *p_desc,
                                const char *p_version,
                                tf_module_mgmt_t *mgmt_handle);
```

The first three parameters are the name, the description and the version of your FM, they're used internally currently, e.g. matching FM from the registration table, log printing etc., but will be used in the future when the FMs are communicating with a local service.

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

The fourth parameter is a struct that contains necessary API functions to manage the life cycle of this FM.

```cpp
// in tf_module.h
typedef struct tf_module_mgmt {
    tf_module_t *(*tf_module_instance)(void);
    void (*tf_module_destroy)(tf_module_t *p_module);
}tf_module_mgmt_t;
```

`tf_module_instance` is a function that will be called by the TFE when the engine is initializing all the FMs specified in a task flow, basically this means the engine has just received a task flow creation request and is starting the flow. `tf_module_destroy` is a function that will be called when the TFE is stopping the flow.

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

The above is our implementation of the `instance` functions. It allocates memory for a struct `tf_module_uart_alarm_t` which we define for holding the parameters of this FM, like the members of a C++  class. In the struct `tf_module_uart_alarm_t` the 1st field is important - `tf_module_t module_base`, in the perspective of C++ programming, `tf_module_t` is the parent class for all the FMs. The `instance` function just give the TFE a pointer to a `tf_module_t` struct.

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

Two members of `tf_module_t` must be assigned.

```cpp
// in tf_module_uart_alarm.c
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    p_module_ins->module_base.p_module = p_module_ins;
    p_module_ins->module_base.ops = &__g_module_ops;
```

`p_module` - a pointer that refers to the instance of the FM itself, this is used for the `destroy` function to get a handler of the instance and release the memory of it.
`ops` - a struct that contains API functions for operating the FM by the TFE, we will talk this later.

The rest of the instance function is to initialize the hardware and the stuff related to your logic of your FM.

One thing needs a mention is that, the FM may be instanced multiple times. You need to handle the re-enter of the `instance` function, and if your FM doesn't support multiple instances, you need to return a NULL pointer for the 2nd call of the `instance` function.

In this `uart alarmer` example, we will use reference counter to handle the re-enter logic.

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

`destroy` is always simple 😂 We just need to free the memory, and de-init the hardware if necessary.

## 4. Implement the operations

The `ops` member of our parent class is defined as the following,

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

When the TFE initialize the FM, it will call these functions in the following order, `cfg` -> `msgs_sub_set` -> `msgs_pub_set` -> `start` -> `stop`.

`cfg` - take the paramers from the task flow json, use these parameters to configure your FM

`msgs_sub_set` - create the connection to the up-stream FM, by registering an event handler to the event id of the up-stream FM. The input parameter `evt_id` is prepared by the TFE by extracting from the task flow json. The 1st parameter `p_module` is the pointer to the FM instance itself.

`msgs_pub_set` - store the connections to the down-stream FMs, if this FM has no output, we can leave this function empty. The 1st parameter `p_module` is the pointer to the FM instance itself. The 2nd parameter `output_index` is the port number, e.g. this FM has 2 outputs, `msgs_pub_set` will be called twice, with `output_index` = 0 and 1 successively. The 3rd parameter `p_evt_id` is a pointer to an array which holds all the event ids of the down-stream FMs on this port, the size of the array is `num` which is the last parameter.

`start` and `stop` - are just their literal meanings. They all take in the `p_module` as parameter which is the pointer to the FM instance itself.

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

As you see, the `cfg` function is just extracting field values from the cJSON object which comes from the `params` field of the FM object of a task flow. e.g. The following is a simple task flow which includes the `uart alarmer` FM.

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

In the above task flow, the `params` for `uart alarmer` is

```json
{
  "output_format": 1,
  "include_big_image": false,
  "include_small_image": false
}
```

We analyze the cJSON, extract values we need and store them into the module instance typically.

### 4.2 msgs_sub_set

```cpp
static int __msgs_sub_set(void *p_module, int evt_id)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;
    p_module_ins->input_evt_id = evt_id;
    return tf_event_handler_register(evt_id, __event_handler, p_module_ins);
}
```

Mark down the event id of the up-stream FM for future use, and register an event handler for the event.

### 4.3 event handler

In the [Watcher Software Framework](https://wiki.seeedstudio.com/watcher_software_framework) we learned that the data flow is driven by an event loop. Basically a FM will receive data from its event handler, then it consumes the data, does calculations, gets some result. It needs to post the result into the event loop in the end - the target is the down-stream FMs who's interested in the data of this FM.

In this `uart alarmer` example, we consume data from an alarm trigger FM which has the output data type `TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT`.  Since the uart data preparation is simple, we do all the data generation in the event loop handler. This is not recommended though, if your data processing is time consuming or IO eager. In that case, you need to create a worker task (thread) to do the background processing.

We prepare a binary output buffer or a JSON string according to the input parameter `output_format`. Finally we write these data into the UART. Our FM has only one output which is the hardware, not another FM, in this reason our `msgs_pub_set` is dummy one. In the end, we need to release the data coming from the event loop, the reason will be explained in the next section.

### 4.4 msgs_pub_set

In this example the `msgs_pub_set` is dummy because our FM has no down-stream consumer. Let's take the `ai camera` FM as an example.

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

It's not complicated but just store the event ids into the FM instance's structure. This is where you need to add a member field into your FM's type struct, in this case `tf_module_ai_camera_t`.

When we gonna use these event ids? The moment that data is generated, and passes through the time gating. In the example of `ai camera`, the data originated from the SPI output of the Himax SoC which runs the local AI inference, and passes a few condition gate, if all the conditions are met, the data then reaches the time that needs to be posted into the event loop.

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

We need to post to every subscriber of our output. As you can see, we make a copy of the data for every subscriber.

**THE RULE OF MEMORY ALLOCATION AND RELEASE**

- The data maker FM does the memory allocation for each subscriber
- The data consumer FM does the memory release after the data is used up.

### 4.5 start and stop

These are runtime controls for the FM, to support flow pause/resume in the future. Currently you can make the FM run after it's instanced, but we still suggest split logics into FM's life cycle management and FM's runtime control.

## 5. Test

Now we have our `uart alarmer` FM, before we pull a request, how could we test it locally.

We implement a console command to issue a task flow locally.

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

Please refer to [Build the Watcher Development Environment](https://wiki.seeedstudio.com/build_watcher_development_environment) - `5. Monitor the log output` to get the console. Prepare a task flow with space and white characters removed, and issue the task flow with,

```shell
taskflow -i -j<enter>
Please input taskflow json:
#<paste your task flow json here, for an example>
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3]]},{"id":3,"type":"uart alarm","index":2,"version":"1.0.0","params":{"output_format":1},"wires":[]}]}
```

How to compose a task flow? In the [Watcher Software Framework](https://wiki.seeedstudio.com/watcher_software_framework) we introduced every FM and their parameters. Composing a task flow is pretty much drawing wires between FM blocks, like the Node-RED.

Before we have a GUI for composing the task flow, we can use the export command to collect examples. Just use the Mobile App to issue a flow with a local alarm function enabled (RGB light), when the flow is running, export the task flow with,

```shell
taskflow -e
```

This command will export the running task flow to the console. If the task flow is super long its output might be interrupted by other log, in this case we need a TF card. Format the TF card into FAT/exFAT file system, plug it into the Watcher. Now we can export the running task flow into the TF card,

```shell
taskflow -e -f tf1.json
# only support file name in the root dir
# please don't specify leading dir in the path, the command can't create dir
```

Now you have examples, modify one of the alarmer FM (generally it's the last FM), replace it with your `uart alarmer` FM, add a few parameters to the JSON object of your FM, use a JSON editor to remove the white space, and import it with the `taskflow -i -j` command above.

That's it, enjoy the exploration.

## Appendix - More task flow examples

Here we provide a few more task flow examples that you can start with.

```json
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1,"ctd":1,"tn":"Local Gesture Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":3,"modes":0,"model":{"arguments":{"iou":45,"conf":65}},"conditions":[{"class":"paper","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"scissors detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1719396404172,"ctd":1719396419707,"tn":"Man with glasses spotted, notify immediately","task_flow":[{"id":753589649,"type":"ai camera","type_id":0,"index":0,"vision":"0.0.1","params":{"model_type":0,"model":{"model_id":"60086","version":"1.0.0","arguments":{"size":1644.08,"url":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/model/1705306215159_jVQf4u_swift_yolo_nano_person_192_int8_vela(2).tflite","icon":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/pic/1705306138275_iykYXV_detection_person.png","task":"detect","createdAt":1705306231,"updatedAt":null},"model_name":"Person Detection--Swift YOLO","model_format":"tfLite","ai_framework":"6","author":"SenseCraft AI","description":"The model is a Swift-YOLO model trained on the person detection dataset. It can detect human body  existence.","task":1,"algorithm":"Object Dectect(TensorRT,SMALL,COCO)","classes":["person"]},"modes":0,"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"time_period":{"repeat":[1,1,1,1,1,1,1],"time_start":"00:00:00","time_end":"23:59:59"},"silence_duration":60},"output_type":1,"shutter":0},"wires":[[193818631]]},{"id":193818631,"type":"image analyzer","type_id":3,"index":1,"version":"0.0.1","params":{"url":"","header":"","body":{"prompt":"Is there a man with glasses?","type":1,"audio_txt":"Man with glasses"}},"wires":[[420037647,452707375]]},{"id":452707375,"type_id":99,"type":"sensecraft alarm","index":2,"version":"0.0.1","params":{"silence_duration":10,"text":"Man with glasses"},"wires":[]},{"id":420037647,"type_id":5,"type":"local alarm","index":3,"version":"0.0.1","params":{"sound":1,"rgb":1,"img":1,"text":1,"duration":10},"wires":[]}],"type":0}
```

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
