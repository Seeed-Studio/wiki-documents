---
description: 介绍如何在 SquareLine Studio 和 LVGL 的帮助下，为 Watcher 开发自己的 UI 界面。
title: Watcher UI 集成指南
image: https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.webp
slug: /cn/watcher_ui_integration_guide
sidebar_position: 4
last_update:
  date: 11/5/2024
  author: Citric
---

# Watcher UI 集成指南

## 1. **UI 组件结构**

在本教程中，您将学习如何将自己的 UI 设计和相关逻辑功能集成到 `view` 目录中。所有 UI 设计和逻辑功能都将放置在 `view` 目录中，该目录包含 `ui` 和 `ui_manager` 子目录。此外，`view` 目录还包括 `view.c`、`view_alarm.c`、`view_image_preview.c`、`view_pages.c` 以及相应的 `.h` 头文件。具体框架如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.png" style={{width:600, height:'auto'}}/></div>

- `ui` 子目录包含所有用户定义的 UI 设计。在此项目中，`ui` 由 Squareline 工具生成。

- `ui_manager` 子目录包含自定义动画、对象组管理和各种事件回调定义。

- 以 `view` 开头的源文件定义全局页面和相关事件回调函数。

- UI 通过发送和监听事件与 APP 层进行交互。

:::tip
阅读下面的模块定义将帮助您理解和使用整个 UI 框架。如果您想快速掌握 UI 集成，可以跳到第 6 章进行应用阅读。
:::

## 2. **组管理**

### 2.1 概述

SenseCAP Watcher 支持触摸屏和编码器输入设备。为了同步这些输入设备的操作并确保正确性，需要进行组管理以保持对正确对象的焦点并避免事件冲突。

组管理功能在以下文件中实现：

- **pm.c**：包含函数实现。
- **pm.h**：包含函数原型和类型定义。

### 2.2 将对象添加到组

```cpp
static void addObjToGroup(GroupInfo *groupInfo, lv_obj_t *objects[], int count);
```

这里，`groupInfo` 是指向 `GroupInfo` 结构的指针，对象将被添加到该结构中，`objects` 是要添加到组中的对象数组，`count` 是数组中对象的数量。

**用法：**

```cpp
// Define the objects to be added to the page
lv_obj_t *example_objects[] = {example_obj1, example_obj2, ...};
// Add the objects to the group structure variable
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 2.3 页面导航和对象管理

```cpp
void lv_pm_open_page(lv_group_t *group, 
                      GroupInfo *groupInfo, 
                      pm_operation_t operation, 
                      lv_obj_t **target, 
                      lv_scr_load_anim_t fademode,
                      int spd, 
                      int delay, 
                      void (*target_init)(void));
```

**参数：**

- `group`：指向 LVGL 组的指针。
- `groupInfo`：指向包含页面对象的 `GroupInfo` 结构的指针。
- `operation`：要执行的操作（将对象添加到组、无操作或清除组）。
- `target`：新页面的目标对象。
- `fademode`：屏幕加载动画模式。
- `spd`：屏幕加载动画的速度。
- `delay`：屏幕加载动画开始前的延迟。
- `target_init`：目标屏幕的初始化函数。

**用法：**

```cpp
// Add the objects from the structure variable to the group and navigate to the corresponding page
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

### 2.4 将编码器与组关联

创建一个组，迭代获取输入设备，并将编码器与组关联，以便编码器可以控制组中的对象。

```cpp
void lv_pm_init(void)
{
  // Create a group
  g_main = lv_group_create();
  cur_drv = NULL;
  // Loop to get input devices
  while ((cur_drv = lv_indev_get_next(cur_drv)))
  {
    // Associate the encoder with the group when the input device is an encoder
    if (cur_drv->driver->type == LV_INDEV_TYPE_ENCODER)
    {
      lv_indev_set_group(cur_drv, g_main);
      break;
    }
  }
  // Define objects in different GroupInfo structure variables
  initGroup();
}
```

**Usage:**

```cpp
// Call in `view_init` to initialize the group and associate the encoder with the group
int view_init(void)
{
  // Note: Any operations on objects in the lvgl task must be performed within a thread lock!
  lvgl_port_lock(0);
  // Initialize UI
  ui_init();
  // Initialize the group and associate the encoder
  lv_pm_init();
  lvgl_port_unlock();
}
```

### 2.5 Printing GroupInfo Objects

```cpp
static void printGroup(GroupInfo *groupInfo);
```

这里，`groupInfo` 是指向 `GroupInfo` 结构的指针，对象将被添加到该结构中。请注意，在打印之前，您需要通过使用 `lv_obj_set_user_data(example_obj, "example_obj_print")` 为对象设置 `user_data`。

**用法：**

```cpp
printGroup(&group_page_example);
```

### 2.6 使用示例

1. 定义一个 `GroupInfo` 变量

```cpp
GroupInfo group_page_example;
```

2. Initialize objects in `initGroup()`

```cpp
lv_obj_t * example_objects[] = {example_obj1, example_obj2, ...};
```

3. 向组中添加对象

```cpp
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

4. 打开页面并添加群组

```cpp
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

通过遵循这些步骤，您可以确保触摸屏和编码器输入在您的应用程序中同步且正确地运行。

## 3. 设备报警

### 3.1 概述

本节解释如何在您的 Watcher 中集成和使用报警 UI 组件。通过理解和使用以下功能，您可以管理设备的 UI 报警行为。

报警 UI 在以下文件中实现：

- **view_alarm.c**：包含功能实现。
- **view_alarm.h**：包含功能原型和类型定义。

### 3.2 初始化报警 UI

```cpp
int view_alarm_init(lv_obj_t *ui_screen);
```

`ui_screen` 是一个指向用于显示闹钟UI组件的屏幕对象的指针。

**Usage:**

```cpp
// Create alarm-related UI on the top layer
view_alarm_init(lv_layer_top());
```

### 3.3 Turning On Alarm UI

```cpp
int view_alarm_on(struct tf_module_local_alarm_info *alarm_st);
```

`alarm_st` 是指向 `tf_module_local_alarm_info` 结构体的指针，该结构体包含与报警相关的信息，如`报警持续时间`、`是否显示文本和图像`以及`文本和图像的具体内容`。

**用法：**

```cpp
struct tf_module_local_alarm_info info;
view_alarm_on(&info);
```

### 3.4 Turning Off Alarm UI

```cpp
void view_alarm_off();
```

**Usage:**

```cpp
// Hide the alarm-related UI, set corresponding flags, or execute page transition logic
view_alarm_off();
```

## 4. AI 推理实时图像渲染

### 4.1 概述

本节介绍如何在设备上解码图像并在 LVGL 中显示它们。

此功能在以下文件中实现：

- **view_image_preview.c**：包含函数实现。
- **view_image_preview.h**：包含函数原型和类型定义。

### 4.2 初始化图像预览功能

```cpp
int view_image_preview_init(lv_obj_t *ui_screen);
```

`ui_screen` 是一个指向屏幕对象的指针，用于显示实时预览。此函数初始化 JPEG 解码器，分配内存，并创建一些 UI 对象来渲染 AI 推理结果，例如目标检测框和分类名称。

**用法：**

```cpp
// Create image preview UI on the ViewLive page
view_image_preview_init(ui_Page_ViewLive);
```

### 4.3 Refreshing Preview Image

```cpp
int view_image_preview_flush(struct tf_module_ai_camera_preview_info *p_info);
```

`p_info` 是指向 `tf_module_ai_camera_preview_info` 结构体的指针，该结构体包含图像和AI模型推理信息。

**用法：**

```cpp
struct tf_module_ai_camera_preview_info info;
view_image_preview_flush(&info);
```

## 5. UI 消息事件定义

### 5.1 概述

设备的前端 UI 需要与后端 APP 任务进行交互。通过监听和消费特定事件，可以实现各种 UI 更新和页面转换逻辑。有关 ESP32 事件处理的详细信息，请参考乐鑫官方文档中的 `Event Loop Library` 部分。

UI 消息事件处理在以下文件中实现：

- **view.c**：包含函数实现。
- **view.h**：包含函数原型和类型定义。
- **data_defs.h**：包含各种事件 ID（前端和后端）的枚举声明。

### 5.2 UI 事件处理函数

```cpp
esp_err_t esp_event_handler_instance_register_with( esp_event_loop_handle_t event_loop, 
                                                    esp_event_base_t event_base, 
                                                    int32_t event_id, 
                                                    esp_event_handler_t event_handler, 
                                                    void * event_handler_arg, 
                                                    esp_event_handler_instance_t * instance ) 
```

**参数：**

- `event_loop`: 注册此处理函数的事件循环；不能为 NULL。
- `event_base`: 要为其注册处理程序的事件的基础 ID。
- `event_id`: 要为其注册处理程序的事件的 ID。
- `event_handler`: 当事件被分发时调用的处理函数。
- `event_handler_arg`: 除了事件数据之外传递给处理函数的参数。
- `instance`: 与已注册的处理程序和数据关联的事件处理程序实例对象；可以为 NULL。

### 5.3 使用方法

#### 1. 声明和定义事件，并将 UI 事件处理程序实例注册到特定循环

```cpp
// Declaration and definition of VIEW event base
ESP_EVENT_DECLARE_BASE(VIEW_EVENT_BASE);
esp_event_loop_handle_t app_event_loop_handle;
// Declare event IDs as an enumeration; in the SenseCAP-Watcher project, this is placed in data_defs.h
enum {
    VIEW_EVENT_EXAMPLE
}
// Register instance
ESP_ERROR_CHECK(esp_event_handler_instance_register_with(app_event_loop_handle, 
                                                            VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, 
                                                            __view_event_handler, NULL, NULL));
```

#### 2. UI Message Event Handling

```cpp
static void __view_event_handler(void* handler_args, esp_event_base_t base, int32_t id, void* event_data)
{
  // Acquire lvgl thread lock
  lvgl_port_lock(0);
  if (base == VIEW_EVENT_BASE) {
    switch (id) {
      // Custom event
      case VIEW_EVENT_EXAMPLE: {
        ESP_LOGI("ui_event", "VIEW_EVENT_EXAMPLE");
        // Execute corresponding logic based on the received event
        break;
      }
    }
  }
  // Release lvgl thread lock
  lvgl_port_unlock();
}
```

#### 3. Sending UI Message Events

```cpp
// Send event to trigger corresponding logic
esp_event_post_to(app_event_loop_handle, VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, NULL, 0, pdMS_TO_TICKS(10000));
```

## 6. 应用

现在我们将使用上面介绍的功能，将一个简单的UI示例集成到SenseCAP Watcher设备中。这将涉及使用Squareline进行UI设计、定义UI回调事件、管理对象组等。

### 6.1 在Squareline中创建UI对象和回调函数

在Squareline中创建按钮，设置它们的名称和样式，并为每个按钮分配回调函数。在`Events`部分点击`ADD EVENT`，选择事件的触发类型，并命名回调函数。这样就完成了UI对象及其相关回调函数的创建。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img1.png" style={{width:800, height:'auto'}}/></div>

### 6.2 从Squareline导出`ui`项目

在应用程序中，在导航栏中选择`File` -> `Project Settings`，并将`UI Files Export Path`设置为`project_path/ui`，其中`project_path`是Squareline项目的路径。这样设置了UI设计的导出路径。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img2.png" style={{width:600, height:'auto'}}/></div>

接下来，在导航栏中点击`Export` -> `Export UI Files`，导出一个包含所有UI设计的目录文件夹。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img3.png" style={{width:500, height:'auto'}}/></div>

### 6.3 实现头文件中声明的回调函数

将`ui`文件夹导入到SenseCAP Watcher项目中，打开并参考`ui`文件夹中`ui_events.h`中声明的函数，在`ui_manager`文件夹的`ui_events.c`中实现这些函数，以完成这些回调函数的逻辑。

例如，在`ui_events.h`中：

```cpp
void btn1click_cb(lv_event_t * e);
void btn2click_cb(lv_event_t * e);
void btn3click_cb(lv_event_t * e);
```

而代码在 `ui_events.c` 中将会是这样的：

```cpp
void btn1click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn1click_cb");
    // Define the logic for this object when the clicked event is triggered
}

void btn2click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn2click_cb");
    // Define the logic for this object when the clicked event is triggered
}

void btn3click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn3click_cb");
    // Define the logic for this object when the clicked event is triggered
}
```

### 6.4 向结构变量添加对象

在这一步中，我们需要管理编码器和创建的组。向组中添加和移除对象将使编码器能够控制这些对象。

```cpp
// Define a GroupInfo variable
GroupInfo group_page_example;
// Initialize objects in initGroup()
lv_obj_t * example_objects[] = {ui_Button1, ui_Button2, ui_Button3};
// Add objects to the structure variable to facilitate adding objects to the group in different pages
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 6.5 UI 初始化

在 `view.c` 中的 `view_init` 函数中，调用 `ui_init` 来初始化 UI。这样，当 lvgl 任务线程运行时，它可以加载设计的 UI。默认加载的页面是在 Squareline 中设计的第一个页面。

```cpp
int view_init(void)
{
  // Note: Any operations on objects in the lvgl task must be performed within a thread lock!
  lvgl_port_lock(0);

  ui_init();
  lv_pm_init();
  // There are two ways to add objects to the group
  // First: Clear the objects in the group and add them to the group one by one
  lv_group_remove_all_objs(g_example);
  lv_group_add_obj(ui_Button1);
  lv_group_add_obj(ui_Button2);
  lv_group_add_obj(ui_Button3);

  // Second: Add the corresponding objects to the group through the page transition function:
  lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);

  lvgl_port_unlock();

  // Other initialization code
}
```

### 6.6 查看运行效果

现在我们已经简单地将UI集成到项目中。接下来，我们可以编译代码并烧录到Watcher中查看运行效果！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img4.png" style={{width:500, height:'auto'}}/></div>

如上图所示，通过使用触摸屏或滚轮点击页面上的按钮，您可以在串口调试助手中看到相应的对象触发回调事件，表明回调函数正在成功工作！

## 7. SquareLine项目

SenseCAP-Watcher中的大部分页面都是使用Squareline创建的。Squareline工具允许轻松快速地修改Watcher中各种页面对象的样式。因此，强烈推荐使用Squareline进行UI开发和迭代。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img5.png" style={{width:800, height:'auto'}}/></div>

如上图所示，工具中的页面按照导航逻辑排列。相邻页面可以通过按钮或其他可触发对象进行导航。您可以点击相应的页面和对象来查看定义的事件，这使得修改不同页面和对象的样式变得非常简单，可以自定义您的AI助手！但是请注意，当前页面中定义的对象和回调事件与Watcher的APP层功能绑定。修改它们可能会影响Watcher的正常运行。建议只修改对象的样式，如颜色和大小，以确保Watcher的正常功能。

## 8. 文件说明

- [`ui_intergration_demo\SenseCAP-Watcher_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/SenseCAP-Watcher_example) 文件夹包含SenseCAP-Watcher的完整Squareline项目，包括几乎所有的UI资源设计。

- [`ui_intergration_demo\ui_intergration_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/ui_intergration_example) 文件夹包含应用章节中示例的Squareline项目。

- [`ui_intergration_demo\view`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/view) 文件夹包含应用章节中示例的`view`组件。您可以通过直接替换项目中原有的`view`来使用该示例。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
