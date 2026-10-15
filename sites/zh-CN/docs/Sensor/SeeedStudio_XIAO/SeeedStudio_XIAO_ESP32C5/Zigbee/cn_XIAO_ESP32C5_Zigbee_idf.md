---
title: Seeed Studio XIAO ESP32C5 Zigbee 快速入门指南 (ESP-IDF)
description: ''
keywords:
  - xiao
  - esp32c5
  - zigbee
  - idf
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /xiao_esp32c5_zigbee_idf
sku: 100010048
last_update:
  date: 1/9/2026
  author: Zeller
createdAt: '2024-05-30'
updatedAt: '2026-01-12'
url: https://wiki.seeedstudio.com/cn/xiao_esp32c5_zigbee_idf/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO ESP32-C5 Zigbee 快速入门指南 (ESP-IDF)

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_1_1.png" style={{width:800, height:'auto'}}/></div>

Zigbee 是一种广泛采用的无线通信协议，在家庭自动化、智能能源管理和物联网 (IoT) 应用中得到广泛使用。Zigbee 以其低功耗、可靠的数据传输和网状网络功能而闻名，是构建可扩展且高效的无线网络的绝佳选择。

在本教程中，我们将踏上使用 XIAO ESP32-C5 开发板探索 Zigbee 应用开发的旅程。XIAO ESP32-C5 是一款紧凑而强大的开发板，搭载 ESP32-C5 芯片，提供集成的 Wi-Fi 和蓝牙低功耗 (BLE) 连接功能。通过利用 ESP Zigbee SDK，我们可以充分发挥 XIAO ESP32-C5 的潜力，并扩展其功能以包含 Zigbee 功能。

为了深入了解 Zigbee 开发，我们将重点关注 ESP Zigbee SDK 提供的两个示例程序：HA_on_off_light 和 HA_on_off_switch。这些示例分别展示了 Zigbee 灯设备和 Zigbee 开关设备的实现。通过深入研究这些示例背后的代码结构、数据模型和工作原理，我们将全面了解 Zigbee 设备开发。

在本教程中，我们将涵盖以下关键方面：

1. 为 XIAO ESP32-C5 和 ESP Zigbee SDK 设置开发环境。
2. 分析 HA_on_off_light 和 HA_on_off_switch 示例的代码结构和组织。
3. 了解 Zigbee 设备数据模型以及它们在代码中的定义方式。
4. 探索 Zigbee 设备中的初始化过程和事件处理机制。
5. 检查 Zigbee 设备之间的通信模式和消息交换。

在本教程结束时，您将在使用 XIAO ESP32-C5 和 ESP Zigbee SDK 进行 Zigbee 开发方面打下坚实的基础。凭借这些知识和实用技能，您将为创建自己的基于 Zigbee 的项目做好充分准备，并为不断增长的 Zigbee 设备生态系统做出贡献。

那么，让我们踏上使用 XIAO ESP32-C5 进行 Zigbee 开发的激动人心的旅程，释放这一强大无线通信协议的全部潜力！

## 硬件准备

您需要准备两块 XIAO ESP32-C5 开发板和一些配件。

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

## 环境设置

在本教程中，我们将指导您在 Seeed Studio XIAO ESP32C5 上实现 Zigbee 功能。您需要事先安装 ESP-IDF 框架和 ESP-Zigbee SDK。

:::tip
本示例基于 Ubuntu (Linux) 系统。如果您使用的是不同的系统，请参考官方 Espressif 文档进行调整。[ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/index.html)
:::

### 安装 ESP-IDF SDK

要使用 Zigbee SDK，您首先需要设置 ESP-IDF 开发环境。在 Ubuntu 系统终端中输入以下命令。

```bash
mkdir esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
git checkout v5.5.1
git submodule update --init --recursive
./install.sh
source ./export.sh
cd ..
```

如果您使用的是不同的系统，请点击下面的按钮访问 Espressif 网站获取更多信息。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/index.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 前往页面 🖱️</font></span></strong>
    </a>
</div><br/>

:::tip
我们建议使用 **ESP-IDF v5.3.2 或更高版本进行开发**。本教程使用 **v5.5.1**，已经过测试并确认可以正常工作。
:::

### 安装 Zigbee SDK

克隆 `esp-zigbee-sdk`：

```bash
cd ~/esp
git clone https://github.com/espressif/esp-zigbee-sdk.git
```

## 软件编程

我们将修改并使用 esp-zigbee-sdk 中的两个示例：`HA_on_off_light` 和 `HA_on_off_switch`。两者都位于 `esp-zigbee-sdk/examples/esp_zigbee_HA_sample` 目录中。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_2.png" style={{width:800, height:'auto'}}/></div>

### 修改 HA_on_off_light

**步骤 1.** 打开 `HA_on_off_light` 示例目录中的 `main` 文件夹。

```bash
cd ~/esp/esp-zigbee-sdk/examples/esp_zigbee_HA_sample/HA_on_off_light/main
```

**步骤 2.** 修改 `main` 文件夹下的 `esp_zb_light.c` 内容

在 `HA_on_off_light` 示例中，控制灯的默认 GPIO 引脚是 **GPIO27**，这与 XIAO ESP32-C5 上用于控制 USER LED 的引脚相同。为了获得更直观的显示效果，将其更改为 **GPIO1** 并相应地进行其他简单修改。

<details>

<summary>esp_zb_light.c</summary>

```cpp
#include "esp_zb_light.h"
#include "esp_check.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"

#if !defined ZB_ED_ROLE
#error Define ZB_ED_ROLE in idf.py menuconfig to compile light (End Device) source code.
#endif

static const char *TAG = "ESP_ZB_ON_OFF_LIGHT";
#define MY_LED_GPIO  GPIO_NUM_1

// modify start
#include "driver/gpio.h"  // Include the GPIO driver header file(Modify)

// Define the default state of the light (off)  (Modify)
void light_driver_init(bool power);
void light_driver_set_power(bool power);

void light_driver_init(bool power)
{
    // Configure GPIO as output mode
    gpio_reset_pin(MY_LED_GPIO);
    gpio_set_direction(MY_LED_GPIO, GPIO_MODE_OUTPUT);
    // Initialization state
    light_driver_set_power(power);
}

// Rewrite the switch control function
void light_driver_set_power(bool power)
{
    // If your LED is on when it receives a high voltage, use: gpio_set_level(MY_LED_GPIO, power);
    // If your LED is on when it receives a low voltage 
    //(a common onboard LED), use: gpio_set_level(MY_LED_GPIO, ! power);

    gpio_set_level(MY_LED_GPIO, power); 

    ESP_LOGI("USER_DRIVER", "Light physical state changed to: %d", power);
}
// modify end

/********************* Define functions **************************/
static esp_err_t deferred_driver_init(void)
{
    static bool is_inited = false;
    if (!is_inited) {
        light_driver_init(LIGHT_DEFAULT_OFF);
        is_inited = true;
    }
    return is_inited ? ESP_OK : ESP_FAIL;
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
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
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
                light_driver_set_power(light_state);
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
    zcl_basic_manufacturer_info_t info = {
        .manufacturer_name = ESP_MANUFACTURER_NAME,
        .model_identifier = ESP_MODEL_IDENTIFIER,
    };

    esp_zcl_utility_add_ep_basic_manufacturer_info(esp_zb_on_off_light_ep, HA_ESP_LIGHT_ENDPOINT, &info);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_stack_main_loop();
}

void app_main(void)
{
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };
    ESP_ERROR_CHECK(nvs_flash_init());
    ESP_ERROR_CHECK(esp_zb_platform_config(&config));
    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}
```

</details>

**步骤 3.** 烧录 `HA_on_off_light` 程序

返回到 `HA_on_off_light` 目录并将目标芯片设置为 `esp32c5`：

```bash
cd ../
idf.py set-target esp32c5
```
<br/>

运行以下命令来构建项目：

```bash
idf.py build
```

如果构建成功，应该如下图所示：

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_4.png" style={{width:800, height:'auto'}}/></div>

将其中一块 XIAO ESP32-C5 开发板连接到您的 Ubuntu 主机。默认串口通常是 /`dev/ttyACM0`。

:::tip
您可以使用查询命令来检查在没有连接 XIAO 时默认存在哪些端口。

```bash
ls /dev/tty*
```

:::

在 ESP-IDF 中，烧录命令是：

```bash
idf.py -p PORT flash
```

将 PORT 替换为您的 XIAO ESP32-C5 的 USB 端口名称。如果未定义 PORT，idf.py 将尝试使用可用的 USB 端口自动连接。在本教程中，烧录端口是 `/dev/ttyACM0`：

```bash
idf.py -p /dev/ttyACM0
```

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_5.png" style={{width:800, height:'auto'}}/></div>

如果烧录过程结束时没有问题，XIAO ESP32-C5 将重启并启动 Zigbee Light 应用程序。

### 烧录 HA_on_off_switch

同样地，拿另一块 XIAO ESP32-C5 并烧录开关程序。步骤与烧录 `HA_on_off_light` 类似。
在 `HA_on_off_switch` 示例中，开关引脚是 **GPIO28**，这与 XIAO ESP32-C5 上用于控制 BOOT 按钮的引脚相同。

```bash
cd ../HA_on_off_switch
idf.py set-target esp32c5
idf.py build
idf.py -p PORT flash
```

如果烧录成功，您可以使用 BOOT 按钮控制另一块 XIAO ESP32-C5 上的 LED 开启或关闭。

### 结果

如果程序修改成功并且您已经将 HA_on_off_switch 和 HA_on_off_light 程序烧录到两块 XIAO ESP32-C5 开发板上，您可以打开串口监视器查看关于 Zigbee 设备组网和控制命令的信息。

- 串口打印配置信息。在它们成功组成 Zigbee 网络后，它们将打印配置信息，以及控制命令和接收到的命令。左侧显示 HA_on_off_switch 设备，右侧显示 HA_on_off_light 设备。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_6.png" style={{width:1000, height:'auto'}}/></div>

- 按住 BOOT 按钮可以切换另一块 XIAO ESP32-C5 上的 LED。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_result.gif" style={{width:600, height:'auto'}}/></div>
## HA_on_off_light 和 HA_on_off_switch 的程序结构

该文件夹包含演示 Zigbee HA 标准设备的示例

- `HA_on_off_light` 是一个标准的 HA 开关灯泡示例，演示 Zigbee 终端设备。

- `HA_on_off_switch` 是一个标准的 HA 开关示例，演示 Zigbee 协调器角色。它提供一个开/关切换来控制 Zigbee HA 开关灯。

在本教程中，我们将深入研究 ESP Zigbee SDK 提供的两个示例程序：`HA_on_off_light` 和 `HA_on_off_switch`。通过分析这些示例的代码结构和组织，我们将全面了解如何开发 Zigbee 设备应用程序。

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

1. esp_zigbee_HA_sample/：此目录包含 ESP Zigbee SDK 提供的家庭自动化（HA）示例项目。

2. HA_on_off_light/：此子目录代表"开关灯"示例项目。
   - main/：此目录包含"开关灯"示例的主要源文件。
     - CMakeLists.txt：此文件由 CMake 构建系统使用，用于指定"开关灯"示例的源文件和依赖项。
     - esp_zb_light.c：此文件包含 Zigbee 灯设备的主要实现代码，包括初始化、事件处理和与其他 Zigbee 设备的通信。
     - esp_zb_light.h：此头文件包含 Zigbee 灯设备所需的函数声明、常量和数据结构。
     - idf_component.yml：此文件是 ESP-IDF 组件配置文件，指定"开关灯"示例的组件依赖项和构建设置。
   - CMakeLists.txt：此文件是"开关灯"示例项目的顶级 CMakeLists 文件，包含必要的配置和构建目标。
   - partitions.csv：此文件定义"开关灯"示例的分区表，指定各种分区（如引导加载程序、应用程序和存储）的内存布局和大小。
   - sdkconfig.defaults：此文件包含"开关灯"示例项目的默认配置设置，用户可以覆盖这些设置。

3. HA_on_off_switch/：此子目录代表"开关"示例项目。
   - main/：此目录包含"开关"示例的主要源文件。
     - CMakeLists.txt：与"开关灯"示例类似，此文件由 CMake 构建系统使用，用于指定"开关"示例的源文件和依赖项。
     - esp_zb_switch.c：此文件包含 Zigbee 开关设备的主要实现代码，包括初始化、事件处理和与其他 Zigbee 设备的通信。
     - esp_zb_switch.h：此头文件包含 Zigbee 开关设备所需的函数声明、常量和数据结构。
     - idf_component.yml：此文件是"开关"示例的 ESP-IDF 组件配置文件。
   - CMakeLists.txt：这是"开关"示例项目的顶级 CMakeLists 文件。
   - partitions.csv：此文件定义"开关"示例的分区表。
   - sdkconfig.defaults：此文件包含"开关"示例项目的默认配置设置。

这些文件共同工作，提供使用 ESP Zigbee SDK 的 Zigbee 设备的完整示例实现。.c 和 .h 文件包含实际的代码实现，而 CMakeLists.txt、partitions.csv 和 sdkconfig.defaults 文件用于构建配置和内存分区。

## Zigbee 终端设备和 Zigbee 数据模型

在本教程中，我们将探索 Zigbee HA 开关灯示例代码如何基于 Zigbee 数据模型进行结构化。通过了解代码与数据模型之间的关系，您将深入了解如何根据您的特定需求解释和修改代码。

在深入代码之前，掌握 Zigbee 数据模型的关键概念是必要的：

- **节点**：节点代表基于 ESP32-H2 的单个产品和 Zigbee 网络中的网络节点。一个节点可以有多个端点。

- **端点**：端点由 1 到 240 之间的数字标识，定义在 Zigbee 节点上运行的应用程序。一个节点可以有多个端点，每个端点服务于不同的目的或代表一个单独的设备。

- **簇**：簇由 16 位数字标识，是定义与端点相关的功能和数据的应用程序对象。簇包含属性和命令。

- **属性**：属性由 16 位数字标识，表示簇内的当前状态或物理量。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

现在，让我们检查 HA 开关灯示例代码，看看它如何映射到 Zigbee 数据模型。

1. 创建端点

在示例代码中，`esp_zb_on_off_light_ep_create()` 函数用于创建 HA 开关灯端点。此函数定义端点 ID、设备 ID 和相关的簇。

```cpp
static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    zcl_basic_manufacturer_info_t info = {
        .manufacturer_name = ESP_MANUFACTURER_NAME,
        .model_identifier = ESP_MODEL_IDENTIFIER,
    };

    esp_zcl_utility_add_ep_basic_manufacturer_info(esp_zb_on_off_light_ep, HA_ESP_LIGHT_ENDPOINT, &info);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_stack_main_loop();
}
```

2. 注册设备

创建端点后，调用 `esp_zb_device_register()` 函数将 Zigbee 设备与创建的端点一起注册。

```cpp
esp_zb_device_register(esp_zb_on_off_light_ep);
```

3. 属性回调

示例代码使用 `esp_zb_core_action_handler_register()` 注册属性更改回调。当某些属性被修改时，会调用此回调，允许您根据应用程序逻辑处理属性更改。

```cpp
esp_zb_core_action_handler_register(zb_action_handler);
```

在 `zb_action_handler` 函数中，您可以实现当开/关属性发生变化时的所需行为，例如控制 LED 灯。

4. Zigbee 协议栈配置和启动

示例代码使用 `ESP_ZB_ZED_CONFIG()` 配置 Zigbee 终端设备，并使用 `esp_zb_init()` 初始化 Zigbee 协议栈。然后使用 `esp_zb_start()` 启动协议栈，主循环由 `esp_zb_main_loop_iteration()` 处理。

```cpp
esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
esp_zb_init(&zb_nwk_cfg);
...
ESP_ERROR_CHECK(esp_zb_start(false));
esp_zb_main_loop_iteration();
```

`esp_zb_app_signal_handler` 函数负责处理来自 Zigbee 应用层的各种信号。

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
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
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

1. 首先，函数从传递的 `esp_zb_app_signal_t` 结构中检索信号类型 `sig_type` 和错误状态 `err_status`。

2. 然后，它使用 switch 语句根据信号类型执行不同的操作：

   - `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`：此信号表示跳过 Zigbee 协议栈的启动。在这种情况下，我们初始化 Zigbee 协议栈，然后调用 `esp_zb_bdb_start_top_level_commissioning` 函数以模式设置为 `ESP_ZB_BDB_MODE_INITIALIZATION` 来启动顶级调试过程。

   - `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` 和 `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`：这些信号表示设备的首次启动或重启。如果错误状态为 `ESP_OK`，我们执行一些初始化任务，例如延迟驱动程序初始化。然后，我们检查设备是否处于出厂新状态。如果是，我们启动网络引导过程；否则，我们输出一条消息表示设备已重启。如果错误状态不是 `ESP_OK`，我们输出一条消息表示 Zigbee 协议栈初始化失败。

   - `ESP_ZB_BDB_SIGNAL_STEERING`：此信号表示网络引导过程的结果。如果错误状态为 `ESP_OK`，表示设备成功加入网络。在这种情况下，我们输出一些网络信息，例如 PAN ID、信道号和短地址。如果错误状态不是 `ESP_OK`，表示网络引导失败，我们输出错误消息。然后，我们使用 `esp_zb_scheduler_alarm` 函数设置定时器，在 1 秒延迟后重新启动网络引导过程。

   - 其他信号：我们简单地输出信号名称、类型和错误状态。

此函数的目的是根据不同的 Zigbee 应用层信号执行适当的操作。它是 Zigbee 应用程序的核心部分之一。它处理关键过程，例如设备启动、初始化和网络加入。

## Zigbee 协调器

对于 Zigbee 协调器设备，其初始化和 RTOS 任务与终端设备类似，除了在 RTOS 任务中，少了注册回调函数的步骤。

因此对于 Zigbee 协调器，最关键的部分是搜索和匹配相应的设备，并向设备发出控制命令。

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
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
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

让我们了解不同情况及其功能：

1. `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`：
   - 此信号表示正在处理 Zigbee 协议栈初始化步骤。
   - 它记录一条消息，表示 Zigbee 协议栈的初始化。
   - 它手动启动顶级调试过程，模式设置为 `ESP_ZB_BDB_MODE_INITIALIZATION`。

2. `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` 和 `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`：
   - 这些信号表示设备已完成其 BDB 初始化（首次启动或重启）。
   - 如果错误状态为 `ESP_OK`：
     - 它记录有关延迟驱动程序初始化状态的消息，并检查设备是否处于出厂重置模式。
     - 如果设备是出厂新设备：它记录**启动网络引导**并通过调用 `esp_zb_bdb_start_top_level_commissioning` 并设置 `ESP_ZB_BDB_MODE_NETWORK_STEERING` 开始**网络引导**过程（尝试加入现有网络）。
     - 如果设备不是出厂新设备：它记录设备已重启（暗示它保留了以前的网络凭据）。
   - 如果错误状态不是 `ESP_OK`：
     - 它记录警告消息并安排在 1000 毫秒后重试 BDB 初始化。

3. `ESP_ZB_BDB_SIGNAL_STEERING`：
   - 此信号表示网络引导过程的**结果**。
   - 如果错误状态为 `ESP_OK`：
     - 它表示设备已**成功加入网络**。
     - 它检索扩展 PAN ID 并记录详细的网络信息："成功加入网络"（包括 PAN ID、信道和短地址）。
   - 如果错误状态不是 `ESP_OK`：
     - 它记录网络引导不成功。
     - 它安排在 1000 毫秒后重试引导过程（`ESP_ZB_BDB_MODE_NETWORK_STEERING`）。

4. `默认情况`：
   - 对于上述未明确处理的任何其他信号类型，它会记录一般消息，包含信号名称和错误状态以供调试。

总的来说，此代码处理各种 Zigbee 相关事件并执行诸如初始化 Zigbee 协议栈、组建网络、引导网络、处理设备公告和查找可调色调光设备等操作。

示例的其余部分涉及按键稳定化和按键中断的逻辑。如果您感兴趣，可以自己阅读和理解。

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
