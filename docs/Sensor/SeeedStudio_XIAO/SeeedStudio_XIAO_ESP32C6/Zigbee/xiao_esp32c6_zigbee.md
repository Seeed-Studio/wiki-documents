---
description: In this tutorial, we will embark on a journey to explore Zigbee application development using the XIAO ESP32C6 development board. The XIAO ESP32C6 is a compact yet powerful board that features the ESP32-C6 chip, which offers integrated Wi-Fi and Bluetooth Low Energy (BLE) connectivity. By leveraging the ESP Zigbee SDK, we can harness the full potential of the XIAO ESP32C6 and extend its capabilities to include Zigbee functionality.
title: XIAO ESP32C6 Zigbee Quick Start Guide (ESP-IDF)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.jpg
slug: /xiao_esp32c6_zigbee
last_update:
  date: 05/30/2024
  author: Citric
---

Zigbee is a widely adopted wireless communication protocol that finds extensive use in home automation, smart energy management, and Internet of Things (IoT) applications. Known for its low power consumption, reliable data transmission, and mesh network capabilities, Zigbee is an excellent choice for building scalable and efficient wireless networks.

In this tutorial, we will embark on a journey to explore Zigbee application development using the XIAO ESP32C6 development board. The XIAO ESP32C6 is a compact yet powerful board that features the ESP32-C6 chip, which offers integrated Wi-Fi and Bluetooth Low Energy (BLE) connectivity. By leveraging the ESP Zigbee SDK, we can harness the full potential of the XIAO ESP32C6 and extend its capabilities to include Zigbee functionality.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png" style={{width:800, height:'auto'}}/></div>

To dive deep into Zigbee development, we will focus on two example programs provided by the ESP Zigbee SDK: HA_on_off_light and HA_on_off_switch. These examples showcase the implementation of a Zigbee light device and a Zigbee switch device, respectively. By thoroughly examining the code structure, data models, and working principles behind these examples, we will gain a comprehensive understanding of Zigbee device development.

Throughout this tutorial, we will cover the following key aspects:

1. Setting up the development environment for XIAO ESP32C6 and ESP Zigbee SDK.
2. Analyzing the code structure and organization of the HA_on_off_light and HA_on_off_switch examples.
3. Understanding the Zigbee device data models and how they are defined within the code.
4. Exploring the initialization process and event handling mechanisms in Zigbee devices.
5. Examining the communication patterns and message exchanges between Zigbee devices.

By the end of this tutorial, you will have gained a solid foundation in Zigbee development using the XIAO ESP32C6 and ESP Zigbee SDK. Armed with this knowledge and practical skills, you will be well-prepared to create your own Zigbee-based projects and contribute to the ever-growing ecosystem of Zigbee devices.

So, let's embark on this exciting journey of Zigbee development with the XIAO ESP32C6 and unlock the full potential of this powerful wireless communication protocol!

## Hardware Preparations

In this tutorial we will use **two** XIAO ESP32C6s as examples to explain Zigbee. you can jump and buy it through the link below. One as a Zigbee End Device and one as a Zigbee Coordinator.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Environment Preparation and Demonstration

In this section, we will guide you through the configuration of the development environment and upload the two programs in the example.

### Step 1. Prepare the ESP-IDF environment

To use Zigbee SDK, it is recommended to use Espressif's ESP-IDF development framework. ESP-IDF installation and environment configuration in the official website of Espressif provides a detailed installation process for different systems, you can read it through the button below the jump.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.espressif.com/projects/esp-idf/en/v5.1.3/esp32h2/get-started/index.html#installation" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Go to the Page 🖱️</font></span></strong>
    </a>
</div>

If you happen to be using an Ubuntu system, the commands that roughly need to be executed in the terminal are as follows:

```
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
git checkout v5.1.3
git submodule update --init --recursive
./install.sh
source ./export.sh
cd ..
```

:::tip
Espressif recommends using **ESP-IDF v5.1.3** for Zigbee development, which is the verified version for this tutorial.
:::

### Step 2. Download Zigbee SDK

Cloning esp-zigbee-sdk:

```
git clone https://github.com/espressif/esp-zigbee-sdk.git
cd esp-zigbee-sdk/examples/esp_zigbee_HA_sample
```

### Step 3. Write HA_on_off_light Procedure

Let's prepare the first XIAO ESP32C6. we write and flash End Device for it.

```
cd HA_on_off_light/main
```

Since the example program provided uses GPIO8 as the LED, but the LED on the XIAO is GPIO15, we need to make some simple revisions to the example program in order to show the effect.

The program to be modified is in `esp_zb_light.c` in the main file. The complete code after modification is as follows.

```cpp
#include "esp_zb_light.h"
#include "esp_check.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"
#include "driver/gpio.h"

#if !defined ZB_ED_ROLE
#error Define ZB_ED_ROLE in idf.py menuconfig to compile light (End Device) source code.
#endif

static const char *TAG = "ESP_ZB_ON_OFF_LIGHT";
#define BLINK_GPIO 15
/********************* Define functions **************************/
static esp_err_t deferred_driver_init(void)
{
    light_driver_init(LIGHT_DEFAULT_OFF);
    return ESP_OK;
}

static void configure_led(void)
{
    ESP_LOGI(TAG, "Example configured to blink GPIO LED!");
    gpio_reset_pin(BLINK_GPIO);
    /* Set the GPIO as a push/pull output */
    gpio_set_direction(BLINK_GPIO, GPIO_MODE_OUTPUT);
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
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            /* commissioning failed */
            ESP_LOGW(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
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
                gpio_set_level(BLINK_GPIO, light_state);
                // light_driver_set_power(light_state);
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
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}

void app_main(void)
{
    configure_led();
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };
    ESP_ERROR_CHECK(nvs_flash_init());
    ESP_ERROR_CHECK(esp_zb_platform_config(&config));
    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}
```

Please save it.

### Step 4. Flash HA_on_off_light Procedure

Now connect your XIAO ESP32C6 board to the computer and check under which serial port the board is visible.

Serial ports have the following naming patterns: `/dev/tty`. In general, your computer may have many ports that begin with `tty`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

Determining the ports is also easy, you can use the query command to see which ports are present by default when you are not connected to XIAO.

```
ls /dev/tty*
```

Then, after connecting the XIAO to the computer and querying it again, the extra serial port name is the port number of the XIAO.

Set the target device.

```
idf.py set-target esp32c6
```

Build the project by running:

```
idf.py build
```

To flash the binaries that you just built for the ESP32 in the previous step, you need to run the following command:

```
idf.py -p PORT flash
```

Replace `PORT` with your XIAO ESP32C6 USB port name. If the **PORT** is not defined, the `idf.py` will try to connect automatically using the available USB ports. According to the device port number we queried in the first step, for me, I should enter the following command to flash the programme.

```
idf.py -p /dev/ttyACM0 flash
```

If there are no issues by the end of the flash process, the XIAO ESP32C6 will reboot and start up the Zigbee light application.

### Step 5. Flash HA_on_off_switch Procedure

Similarly, we take out another XIAO ESP32C6 and upload the switch programme for it. The steps are similar.

```
cd ../HA_on_off_switch
idf.py set-target esp32c6
idf.py build
idf.py -p PORT flash
```

If all goes well, then next you can use the **BOOT** button on the XIAO of the SWITCH programme to control the LEDs of the XIAO of the LIGHT programme to turn on or off.

<div class="table-center">
<iframe width="800" height="350" src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/2.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Programme Structure of the HA_on_off_light and HA_on_off_switch

The folder contains examples demonstrating Zigbee HA standard device

- `HA_on_off_light` is a standard HA on-off light bulb example demonstrating Zigbee End-device.

- `HA_on_off_switch` is a standard HA on-off switch example demonstrating Zigbee Coordinator role. It provides an on/off toggle to control a Zigbee HA on off light.

In this tutorial, we will dive deep into two example programs provided by the ESP Zigbee SDK: `HA_on_off_light` and `HA_on_off_switch`. By analyzing the code structure and organization of these examples, we will gain a comprehensive understanding of how to develop Zigbee device applications.

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

1. esp_zigbee_HA_sample/: This directory contains the Home Automation (HA) sample projects provided by the ESP Zigbee SDK.

2. HA_on_off_light/: This subdirectory represents the "On/Off Light" example project.
   - main/: This directory contains the main source files for the "On/Off Light" example.
     - CMakeLists.txt: This file is used by the CMake build system to specify the source files and dependencies for the "On/Off Light" example.
     - esp_zb_light.c: This file contains the main implementation code for the Zigbee light device, including initialization, event handling, and communication with other Zigbee devices.
     - esp_zb_light.h: This header file contains the necessary function declarations, constants, and data structures for the Zigbee light device.
     - idf_component.yml: This file is the ESP-IDF component configuration file, which specifies the component dependencies and build settings for the "On/Off Light" example.
   - CMakeLists.txt: This file is the top-level CMakeLists file for the "On/Off Light" example project, which includes the necessary configuration and build targets.
   - partitions.csv: This file defines the partition table for the "On/Off Light" example, specifying the memory layout and sizes of various partitions such as the bootloader, application, and storage.
   - sdkconfig.defaults: This file contains the default configuration settings for the "On/Off Light" example project, which can be overridden by the user.

3. HA_on_off_switch/: This subdirectory represents the "On/Off Switch" example project.
   - main/: This directory contains the main source files for the "On/Off Switch" example.
     - CMakeLists.txt: Similar to the "On/Off Light" example, this file is used by the CMake build system to specify the source files and dependencies for the "On/Off Switch" example.
     - esp_zb_switch.c: This file contains the main implementation code for the Zigbee switch device, including initialization, event handling, and communication with other Zigbee devices.
     - esp_zb_switch.h: This header file contains the necessary function declarations, constants, and data structures for the Zigbee switch device.
     - idf_component.yml: This file is the ESP-IDF component configuration file for the "On/Off Switch" example.
   - CMakeLists.txt: This is the top-level CMakeLists file for the "On/Off Switch" example project.
   - partitions.csv: This file defines the partition table for the "On/Off Switch" example.
   - sdkconfig.defaults: This file contains the default configuration settings for the "On/Off Switch" example project.

These files work together to provide a complete example implementation of Zigbee devices using the ESP Zigbee SDK. The .c and .h files contain the actual code implementation, while the CMakeLists.txt, partitions.csv, and sdkconfig.defaults files are used for build configuration and memory partitioning.

## Zigbee End Device and Zigbee Data Model

In this tutorial, we will explore how the Zigbee HA On/Off Light example code is structured based on the Zigbee data model. By understanding the relationship between the code and the data model, you will gain insights into how to interpret and modify the code according to your specific requirements.

Before diving into the code, it's essential to grasp the key concepts of the Zigbee data model:

- **Node**: A node represents a single ESP32-H2 based product and a network node in the Zigbee network. A node can have multiple endpoints.

- **Endpoint**: An endpoint, identified by a number between 1 and 240, defines an application running on a Zigbee node. A node can have multiple endpoints, each serving a different purpose or representing a separate device.

- **Cluster**: A cluster, identified by a 16-bit number, is an application object that defines the functionality and data associated with an endpoint. Clusters contain attributes and commands.

- **Attribute**: An attribute, identified by a 16-bit number, represents the current state or a physical quantity within a cluster.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

Now, let's examine the HA On/Off Light example code and see how it maps to the Zigbee data model.

1. Creating the Endpoint

In the example code, the `esp_zb_on_off_light_ep_create()` function is used to create a HA on/off light endpoint. This function defines the endpoint ID, device ID, and the associated clusters.

```cpp
static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}
```

2. Registering the Device

After creating the endpoint, the `esp_zb_device_register()` function is called to register the Zigbee device with the created endpoint.

```cpp
esp_zb_device_register(esp_zb_on_off_light_ep);
```

3. Attribute Callback

The example code registers an attribute change callback using `esp_zb_core_action_handler_register()`. This callback is invoked when certain attributes are modified, allowing you to handle attribute changes based on your application logic.

```cpp
esp_zb_core_action_handler_register(zb_action_handler);
```

In the `zb_action_handler` function, you can implement the desired behavior when the on/off attribute changes, such as controlling the LED light.

4. Zigbee Stack Configuration and Starting

The example code configures the Zigbee end-device using `ESP_ZB_ZED_CONFIG()` and initializes the Zigbee stack using `esp_zb_init()`. The stack is then started with `esp_zb_start()`, and the main loop is handled by `esp_zb_main_loop_iteration()`.

```cpp
esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
esp_zb_init(&zb_nwk_cfg);
...
ESP_ERROR_CHECK(esp_zb_start(false));
esp_zb_main_loop_iteration();
```

The `esp_zb_app_signal_handler` function is responsible for handling various signals from the Zigbee application layer.

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
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            /* commissioning failed */
            ESP_LOGW(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
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

1. First, the function retrieves the signal type `sig_type` and error status `err_status` from the passed `esp_zb_app_signal_t` structure.

2. Then, it uses a switch statement to perform different actions based on the signal type:

   - `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`: This signal indicates skipping the startup of the Zigbee stack. In this case, we initialize the Zigbee stack and then call the `esp_zb_bdb_start_top_level_commissioning` function to start the top-level commissioning process with the mode set to `ESP_ZB_BDB_MODE_INITIALIZATION`.

   - `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` and `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`: These signals indicate the first start or reboot of the device. If the error status is `ESP_OK`, we perform some initialization tasks, such as deferred driver initialization. Then, we check if the device is in the factory new state. If it is, we start the network steering process; otherwise, we output a message indicating that the device has rebooted. If the error status is not `ESP_OK`, we output a message indicating that the Zigbee stack initialization failed.

   - `ESP_ZB_BDB_SIGNAL_STEERING`: This signal indicates the result of the network steering process. If the error status is `ESP_OK`, it means the device successfully joined the network. In this case, we output some network information, such as the PAN ID, channel number, and short address. If the error status is not `ESP_OK`, it means the network steering failed, and we output an error message. Then, we use the `esp_zb_scheduler_alarm` function to set a timer to restart the network steering process after a 1-second delay.

   - Other signals: We simply output the signal name, type, and error status.

The purpose of this function is to perform appropriate actions based on different Zigbee application layer signals. It is one of the core parts of a Zigbee application. It handles critical processes such as device startup, initialization, and network joining.

## Zigbee Coordinator

For the Zigbee Coordinator device, its initialisation and RTOS tasks are similar to the End Device, except that in the RTOS tasks, there is less step of registering the callback function.

So for Zigbee Coordinator, the most critical part is to search and match the corresponding device, and issue control commands to the device.

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    esp_zb_zdo_signal_device_annce_params_t *dev_annce_params = NULL;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network formation");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_FORMATION);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGE(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_FORMATION:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Formed network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
        } else {
            ESP_LOGI(TAG, "Restart network formation (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_FORMATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Network steering started");
        }
        break;
    case ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE:
        dev_annce_params = (esp_zb_zdo_signal_device_annce_params_t *)esp_zb_app_signal_get_params(p_sg_p);
        ESP_LOGI(TAG, "New device commissioned or rejoined (short: 0x%04hx)", dev_annce_params->device_short_addr);
        esp_zb_zdo_match_desc_req_param_t  cmd_req;
        cmd_req.dst_nwk_addr = dev_annce_params->device_short_addr;
        cmd_req.addr_of_interest = dev_annce_params->device_short_addr;
        /* find color dimmable light once device joining the network */
        esp_zb_zdo_find_color_dimmable_light(&cmd_req, user_find_cb, NULL);
        break;
    case ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS:
        if (err_status == ESP_OK) {
            if (*(uint8_t *)esp_zb_app_signal_get_params(p_sg_p)) {
                ESP_LOGI(TAG, "Network(0x%04hx) is open for %d seconds", esp_zb_get_pan_id(), *(uint8_t *)esp_zb_app_signal_get_params(p_sg_p));
            } else {
                ESP_LOGW(TAG, "Network(0x%04hx) closed, devices joining not allowed.", esp_zb_get_pan_id());
            }
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}
```

Let's go through the different cases and their functionalities:

1. `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`:
   - This signal indicates that the Zigbee stack initialization should be skipped.
   - It logs a message indicating the initialization of the Zigbee stack.
   - It starts the top-level commissioning process with the mode set to `ESP_ZB_BDB_MODE_INITIALIZATION`.

2. `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` and `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`:
   - These signals indicate that the device has started up for the first time or has rebooted.
   - If the error status is `ESP_OK`, it logs messages about the deferred driver initialization status and whether the device started up in factory-reset mode or not.
   - If the device is in factory-new mode, it starts the network formation process by calling `esp_zb_bdb_start_top_level_commissioning` with the mode set to `ESP_ZB_BDB_MODE_NETWORK_FORMATION`.
   - If the device is not in factory-new mode, it logs a message indicating that the device has rebooted.
   - If the error status is not `ESP_OK`, it logs an error message.

3. `ESP_ZB_BDB_SIGNAL_FORMATION`:
   - This signal indicates the status of the network formation process.
   - If the error status is `ESP_OK`, it retrieves the extended PAN ID, logs information about the formed network (PAN ID, channel, short address), and starts the network steering process by calling `esp_zb_bdb_start_top_level_commissioning` with the mode set to `ESP_ZB_BDB_MODE_NETWORK_STEERING`.
   - If the error status is not `ESP_OK`, it logs a message to restart the network formation and schedules an alarm to call `bdb_start_top_level_commissioning_cb` after a delay of 1000 milliseconds.

4. `ESP_ZB_BDB_SIGNAL_STEERING`:
   - This signal indicates the status of the network steering process.
   - If the error status is `ESP_OK`, it logs a message indicating that network steering has started.

5. `ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE`:
   - This signal is triggered when a new device is commissioned or rejoins the network.
   - It retrieves the device announcement parameters and logs a message with the short address of the new device.
   - It prepares a match descriptor request (`esp_zb_zdo_match_desc_req_param_t`) with the destination and address of interest set to the new device's short address.
   - It calls `esp_zb_zdo_find_color_dimmable_light` to find a color dimmable light device and specifies `user_find_cb` as the callback function.

6. `ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS`:
   - This signal indicates the status of the network's permit join state.
   - If the error status is `ESP_OK`, it logs a message indicating whether the network is open for joining and the duration for which it is open. If the network is closed, it logs a warning message.

7. Default case:
   - For any other signal types, it logs a general message with the signal type and error status.

Overall, this code handles various Zigbee-related events and performs actions such as initializing the Zigbee stack, forming a network, steering the network, handling device announcements, and finding color dimmable light devices.

The rest of the example is addressing the logic for keystroke stabilisation and keystroke interrupts. If you are interested, you can read and understand it by yourself.

## Troubleshooting

### Q1: Continuing to have issues with ESP_ZB_ON_OFF_LIGHT: Network steering was not successful to match another XIAO

First of all, please troubleshoot the version of ESP-IDF you are using, make sure you are using **ESP-IDF v5.1.3** to compile the Zigbee sample application, if not, please change the IDF version.

Next, try re-plugging the device. You can try powering up the device that has the **HA_on_off_switch** program uploaded first, and then powering up the device that has the **HA_on_off_light** program uploaded.

If it still doesn't work, please erase all the flash and upload the programme again.

```
idf.py erase_flash flash monitor
```

If none of the above works, submit an issue to Espressif.

### Q2: What should I do if I want to match a new device after a successful match?

Directly using the flash command uploader will not erase the historical pairing records saved by flash. Please use the following command to re-upload the programme to match the new device.

```
idf.py erase_flash flash monitor
```

## Resources

- **[Espressif Official Documents]** [Developing with ESP Zigbee SDK](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32/developing.html)
- **[GITHUB]** [Zigbee SDK Repository](https://github.com/espressif/esp-zigbee-sdk)

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
