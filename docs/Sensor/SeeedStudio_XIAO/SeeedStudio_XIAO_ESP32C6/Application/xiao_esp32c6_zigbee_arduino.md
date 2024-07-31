---
description: In this tutorial, we will embark on a journey to explore Zigbee application development using the XIAO ESP32C6 development board. The XIAO ESP32C6 is a compact yet powerful board that features the ESP32-C6 chip, which offers integrated Wi-Fi and Bluetooth Low Energy (BLE) connectivity. By leveraging the ESP Zigbee SDK, we can harness the full potential of the XIAO ESP32C6 and extend its capabilities to include Zigbee functionality.
title: Quick start with Zigbee on XIAO ESP32C6 by Arduino
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.jpg
slug: /xiao_esp32c6_zigbee_arduino
last_update:
  date: 07/30/2024
  author: Allen
---

# Quick start with Zigbee on XIAO ESP32C6 by Arduino

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png" style={{width:800, height:'auto'}}/></div>

Zigbee is a widely adopted wireless communication protocol that finds extensive use in home automation, smart energy management, and Internet of Things (IoT) applications. Known for its low power consumption, reliable data transmission, and mesh network capabilities, Zigbee is an excellent choice for building scalable and efficient wireless networks.

Throughout this tutorial, we will cover the following key aspects:

1. **Development Environment**: Setting up the development environment for XIAO ESP32C6 and ESP Zigbee SDK via Arduino.
2. **Code Structure**: Analyzing the code structure and organization of the Zigbee_Light_Buld and Zigbee_Light_Switch examples.
3. **Zigbee Device Data Models**: Understanding the Zigbee device data models and how they are defined within the code.
4. **Zigbee Handling Mechanisms**: Exploring the initialization process and event handling mechanisms in Zigbee devices.
5. **Communication Patterns**: Examining the communication patterns and message exchanges between Zigbee devices.

So, let's embark on this exciting journey of Zigbee development with the XIAO ESP32C6 and unlock the full potential of this powerful wireless communication protocol!

## Part 1.Hardware Preparation

In this tutorial we will use **two** XIAO ESP32C6s as examples to explain Zigbee. you can jump and buy it through the link below. One as a **Zigbee End Device** and one as a **Zigbee Coordinator**.

<div class="table-center">
	<table>
		<tr>
			<th>Seeed Studio XIAO ESP32C6</th>
			<th>Grove Shield For XIAO</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        ">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html
        ">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
		<tr>
			<th>Seeed Studio Grove Red LED</th>
			<th>Seeed Studio Grove Button</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html
        ">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html
        ">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Part 2.Enviroment Prepatation

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).

And the on-board package for XIAO ESP32C6 requires at least version **2.0.8** to be available.

:::

- **Step 1.** Download and Install the stable version of Arduino IDE according to your operating system.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

- **Step 2.** Launch the Arduino application.
- **[Step 3](#add-board).**  Add the XIAO ESP32C6 on-board package to the Arduino IDE and click `OK`.
- **Step 4.** Close the Arduino IDE and reopen it.

### Configure the XIAO-C6 Board {#add-board}

As of July 30, 2024, the most current stable release of Arduino-ESP32 is version `2.0.15`. Unfortunately, [this version does not support](https://docs.espressif.com/projects/arduino-esp32/en/latest/getting_started.html#supported-soc-s) the **ESP32-C6** chipset, which means it also does not support the `XIAO ESP32-C6` board. To work with XIAO-C6, you'll need to utilize the development release of [the board manager URL](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide) provided below:

```
https://espressif.github.io/arduino-esp32/package_esp32_dev_index.json
```


if you've install the ESP32 board package before, you''ll need to remove it first.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/remove_package.png" style={{width: 640, height: 'auto'}}/></div>


To install the XIAO ESP32C6 board, follow these steps:

1. Add the above board manager URL to your Arduino IDE preferences.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. Download the XIAO ESP32C6 board package.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 640, height: 'auto'}}/></div>

Additionally, the latest development release version (`3.0.0-rc1`) was released on April, 2024. And has supported XIAO ESP32C6.

### Run your first Blink program

- **Step 1.** Launch the Arduino application.

- **Step 2.** Navigate to **File > Examples > 01.Basics > Blink**, open the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Step 3.** Select the board model to **XIAO ESP32C6**, and select the correct port number to upload the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

Once the program is successfully uploaded, you will see the following output message and you can observe that the orange LED on the right side of the XIAO ESP32C6 is blinking.

<table>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
	</tr>
</table>

## Part 3.Program Structure

### Zigbee Light Bulb

In this section, we will explore how the Zigbee HA On/Off Light example code is structured based on the Zigbee data model. By understanding the relationship between the code and the data model, you will gain insights into how to interpret and modify the code according to your specific requirements.

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
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);

    //Erase NVRAM before creating connection to new Coordinator
    //esp_zb_nvram_erase_at_start(true); //Comment out this line to erase NVRAM data if you are conneting to new Coordinator

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
    esp_zb_app_signal_type_t sig_type = (esp_zb_app_signal_type_t)*p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        log_i("Zigbee stack initialized");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            log_i("Start network steering");
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
        } else {
            /* commissioning failed */
            log_w("Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            log_i("Joined network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            log_i("Network steering was not successful (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        log_i("ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
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

### Zigbee Light Switch

For the Zigbee Coordinator device(Light Switch), its initialisation and RTOS tasks are similar to the End Device, except that in the RTOS tasks, there is less step of registering the callback function.

So for Zigbee Coordinator, the most critical part is to search and match the corresponding device, and issue control commands to the device.

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = (esp_zb_app_signal_type_t)*p_sg_p;
    esp_zb_zdo_signal_device_annce_params_t *dev_annce_params = NULL;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        log_i("Zigbee stack initialized");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            log_i("Start network formation");
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_FORMATION);
        } else {
            log_e("Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_FORMATION:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            log_i("Formed network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
        } else {
            log_i("Restart network formation (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_FORMATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            log_i("Network steering started");
        }
        break;
    case ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE:
        dev_annce_params = (esp_zb_zdo_signal_device_annce_params_t *)esp_zb_app_signal_get_params(p_sg_p);
        log_i("New device commissioned or rejoined (short: 0x%04hx)", dev_annce_params->device_short_addr);
        esp_zb_zdo_match_desc_req_param_t  cmd_req;
        cmd_req.dst_nwk_addr = dev_annce_params->device_short_addr;
        cmd_req.addr_of_interest = dev_annce_params->device_short_addr;
        esp_zb_zdo_find_on_off_light(&cmd_req, user_find_cb, NULL);
        break;
    default:
        log_i("ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
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


## Part 4.Zigbee Light Effect

This section we will connect the devices and upload the codes to two peices of XIAO ESP32C6 and see the effect.

### Step 1.Hardware Connection

<div class="table-center">
	<table>
		<tr>
			<th>XIAO ESP32C6 connect to bulb via D9</th>
			<th>XIAO ESP32C6 connect to switch via D0</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_zigbee_arduino/light.jpg" style={{width:500, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_zigbee_arduino/switch.jpg" style={{width:500, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

### Step 2.Set Arduino Serial Port to Debug Level

We need to set to debug level to see serial port message from Zigbee light and switch later.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_zigbee_arduino/1.png" style={{width:800, height:'auto'}}/></div>

### Step 3.Upload Light Bulb Codes

```cpp
// Copyright 2023 Espressif Systems (Shanghai) PTE LTD
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @brief This example demonstrates simple Zigbee light bulb.
 * 
 * The example demonstrates how to use ESP Zigbee stack to create a end device light bulb.
 * The light bulb is a Zigbee end device, which is controlled by a Zigbee coordinator.
 * 
 * Proper Zigbee mode must be selected in Tools->Zigbee mode 
 * and also the correct partition scheme must be selected in Tools->Partition Scheme.
 * 
 * Please check the README.md for instructions and more detailed description.
 */

#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "esp_zigbee_core.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"

#define LED_PIN D10

/* Default End Device config */
#define ESP_ZB_ZED_CONFIG()                                     \
    {                                                           \
        .esp_zb_role = ESP_ZB_DEVICE_TYPE_ED,                   \
        .install_code_policy = INSTALLCODE_POLICY_ENABLE,       \
        .nwk_cfg = {                                            \
            .zed_cfg = {                                        \
                .ed_timeout = ED_AGING_TIMEOUT,                 \
                .keep_alive = ED_KEEP_ALIVE,                    \
            },                                                  \
        },                                                      \
    }

#define ESP_ZB_DEFAULT_RADIO_CONFIG()                           \
    {                                                           \
        .radio_mode = ZB_RADIO_MODE_NATIVE,                        \
    }

#define ESP_ZB_DEFAULT_HOST_CONFIG()                            \
    {                                                           \
        .host_connection_mode = ZB_HOST_CONNECTION_MODE_NONE,      \
    }

/* Zigbee configuration */
#define INSTALLCODE_POLICY_ENABLE       false    /* enable the install code policy for security */
#define ED_AGING_TIMEOUT                ESP_ZB_ED_AGING_TIMEOUT_64MIN
#define ED_KEEP_ALIVE                   3000    /* 3000 millisecond */
#define HA_ESP_LIGHT_ENDPOINT           10    /* esp light bulb device endpoint, used to process light controlling commands */
#define ESP_ZB_PRIMARY_CHANNEL_MASK     ESP_ZB_TRANSCEIVER_ALL_CHANNELS_MASK  /* Zigbee primary channel mask use in the example */

/********************* Zigbee functions **************************/
static void bdb_start_top_level_commissioning_cb(uint8_t mode_mask)
{
    ESP_ERROR_CHECK(esp_zb_bdb_start_top_level_commissioning(mode_mask));
}

void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = (esp_zb_app_signal_type_t)*p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        log_i("Zigbee stack initialized");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            log_i("Start network steering");
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
        } else {
            /* commissioning failed */
            log_w("Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            log_i("Joined network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            log_i("Network steering was not successful (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        log_i("ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}

static esp_err_t zb_action_handler(esp_zb_core_action_callback_id_t callback_id, const void *message)
{
    esp_err_t ret = ESP_OK;
    switch (callback_id) {
    case ESP_ZB_CORE_SET_ATTR_VALUE_CB_ID:
        ret = zb_attribute_handler((esp_zb_zcl_set_attr_value_message_t *)message);
        break;
    default:
        log_w("Receive Zigbee action(0x%x) callback", callback_id);
        break;
    }
    return ret;
}

static void esp_zb_task(void *pvParameters)
{
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);

    //Erase NVRAM before creating connection to new Coordinator
    //esp_zb_nvram_erase_at_start(true); //Comment out this line to erase NVRAM data if you are conneting to new Coordinator

    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}

/* Handle the light attribute */

static esp_err_t zb_attribute_handler(const esp_zb_zcl_set_attr_value_message_t *message)
{
    esp_err_t ret = ESP_OK;
    bool light_state = 0;

    if(!message){
      log_e("Empty message");
    }
    if(message->info.status != ESP_ZB_ZCL_STATUS_SUCCESS){
      log_e("Received message: error status(%d)", message->info.status);
    }

    log_i("Received message: endpoint(%d), cluster(0x%x), attribute(0x%x), data size(%d)", message->info.dst_endpoint, message->info.cluster,
             message->attribute.id, message->attribute.data.size);
    if (message->info.dst_endpoint == HA_ESP_LIGHT_ENDPOINT) {
        if (message->info.cluster == ESP_ZB_ZCL_CLUSTER_ID_ON_OFF) {
            if (message->attribute.id == ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID && message->attribute.data.type == ESP_ZB_ZCL_ATTR_TYPE_BOOL) {
                light_state = message->attribute.data.value ? *(bool *)message->attribute.data.value : light_state;
                log_i("Light sets to %s", light_state ? "On" : "Off");
                // Here is the code to turn on/off your LED
                if(light_state == 1){
                  digitalWrite(LED_PIN, HIGH);
                }else{
                  digitalWrite(LED_PIN, LOW);
                }

            }
        }
    }
    return ret;
}

/********************* Arduino functions **************************/
void setup() {
    // Init Zigbee
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };
    ESP_ERROR_CHECK(esp_zb_platform_config(&config));

    // initialize LED pin
    pinMode(LED_PIN, OUTPUT);
    
    // turn off LED
    digitalWrite(LED_PIN, LOW);

    // Start Zigbee task
    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}

void loop() {
    //empty, zigbee running in task
}
```

### Step 4.Upload Light Switch Codes

```cpp
// Copyright 2023 Espressif Systems (Shanghai) PTE LTD
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @brief This example demonstrates simple Zigbee light switch.
 * 
 * The example demonstrates how to use ESP Zigbee stack to control a light bulb.
 * The light bulb is a Zigbee end device, which is controlled by a Zigbee coordinator.
 * Button switch and Zigbee runs in separate tasks.
 * 
 * Proper Zigbee mode must be selected in Tools->Zigbee mode 
 * and also the correct partition scheme must be selected in Tools->Partition Scheme.
 * 
 * Please check the README.md for instructions and more detailed description.
 */

#ifndef ZIGBEE_MODE_ZCZR
#error "Zigbee coordinator mode is not selected in Tools->Zigbee mode"
#endif

#include "esp_zigbee_core.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"

/* Switch configuration */
#define GPIO_INPUT_IO_TOGGLE_SWITCH  GPIO_NUM_9
#define PAIR_SIZE(TYPE_STR_PAIR) (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))

typedef enum {
    SWITCH_ON_CONTROL,
    SWITCH_OFF_CONTROL,
    SWITCH_ONOFF_TOGGLE_CONTROL,
    SWITCH_LEVEL_UP_CONTROL,
    SWITCH_LEVEL_DOWN_CONTROL,
    SWITCH_LEVEL_CYCLE_CONTROL,
    SWITCH_COLOR_CONTROL,
} switch_func_t;

typedef struct {
    uint8_t pin;
    switch_func_t func;
} switch_func_pair_t;

typedef enum {
    SWITCH_IDLE,
    SWITCH_PRESS_ARMED,
    SWITCH_PRESS_DETECTED,
    SWITCH_PRESSED,
    SWITCH_RELEASE_DETECTED,
} switch_state_t;

static switch_func_pair_t button_func_pair[] = {
    {GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}
};

/* Default Coordinator config */
#define ESP_ZB_ZC_CONFIG()                                      \
    {                                                           \
        .esp_zb_role = ESP_ZB_DEVICE_TYPE_COORDINATOR,          \
        .install_code_policy = INSTALLCODE_POLICY_ENABLE,       \
        .nwk_cfg = {                                            \
            .zczr_cfg = {                                       \
                .max_children = MAX_CHILDREN,                   \
            },                                                  \
        }                                                       \
    }

#define ESP_ZB_DEFAULT_RADIO_CONFIG()                           \
    {                                                           \
        .radio_mode = ZB_RADIO_MODE_NATIVE,                        \
    }

#define ESP_ZB_DEFAULT_HOST_CONFIG()                            \
    {                                                           \
        .host_connection_mode = ZB_HOST_CONNECTION_MODE_NONE,      \
    }

typedef struct light_bulb_device_params_s {
    esp_zb_ieee_addr_t ieee_addr;
    uint8_t  endpoint;
    uint16_t short_addr;
} light_bulb_device_params_t;

/* Zigbee configuration */
#define MAX_CHILDREN                    10          /* the max amount of connected devices */
#define INSTALLCODE_POLICY_ENABLE       false    /* enable the install code policy for security */
#define HA_ONOFF_SWITCH_ENDPOINT        1          /* esp light switch device endpoint */
#define ESP_ZB_PRIMARY_CHANNEL_MASK     ESP_ZB_TRANSCEIVER_ALL_CHANNELS_MASK  /* Zigbee primary channel mask use in the example */

/********************* Define functions **************************/
static void esp_zb_buttons_handler(switch_func_pair_t *button_func_pair)
{
    if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
        /* implemented light switch toggle functionality */
        esp_zb_zcl_on_off_cmd_t cmd_req;
        cmd_req.zcl_basic_cmd.src_endpoint = HA_ONOFF_SWITCH_ENDPOINT;
        cmd_req.address_mode = ESP_ZB_APS_ADDR_MODE_DST_ADDR_ENDP_NOT_PRESENT;
        cmd_req.on_off_cmd_id = ESP_ZB_ZCL_CMD_ON_OFF_TOGGLE_ID;
        log_i("Send 'on_off toggle' command");
        esp_zb_zcl_on_off_cmd_req(&cmd_req);
    }
}

static void bdb_start_top_level_commissioning_cb(uint8_t mode_mask)
{
    ESP_ERROR_CHECK(esp_zb_bdb_start_top_level_commissioning(mode_mask));
}

static void bind_cb(esp_zb_zdp_status_t zdo_status, void *user_ctx)
{
    if (zdo_status == ESP_ZB_ZDP_STATUS_SUCCESS) {
        log_i("Bound successfully!");
        if (user_ctx) {
            light_bulb_device_params_t *light = (light_bulb_device_params_t *)user_ctx;
            log_i("The light originating from address(0x%x) on endpoint(%d)", light->short_addr, light->endpoint);
            free(light);
        }
    }
}

static void user_find_cb(esp_zb_zdp_status_t zdo_status, uint16_t addr, uint8_t endpoint, void *user_ctx)
{
    if (zdo_status == ESP_ZB_ZDP_STATUS_SUCCESS) {
        log_i("Found light");
        esp_zb_zdo_bind_req_param_t bind_req;
        light_bulb_device_params_t *light = (light_bulb_device_params_t *)malloc(sizeof(light_bulb_device_params_t));
        light->endpoint = endpoint;
        light->short_addr = addr;
        esp_zb_ieee_address_by_short(light->short_addr, light->ieee_addr);
        esp_zb_get_long_address(bind_req.src_address);
        bind_req.src_endp = HA_ONOFF_SWITCH_ENDPOINT;
        bind_req.cluster_id = ESP_ZB_ZCL_CLUSTER_ID_ON_OFF;
        bind_req.dst_addr_mode = ESP_ZB_ZDO_BIND_DST_ADDR_MODE_64_BIT_EXTENDED;
        memcpy(bind_req.dst_address_u.addr_long, light->ieee_addr, sizeof(esp_zb_ieee_addr_t));
        bind_req.dst_endp = endpoint;
        bind_req.req_dst_addr = esp_zb_get_short_address();
        log_i("Try to bind On/Off");
        esp_zb_zdo_device_bind_req(&bind_req, bind_cb, (void *)light);
    }
}

void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = (esp_zb_app_signal_type_t)*p_sg_p;
    esp_zb_zdo_signal_device_annce_params_t *dev_annce_params = NULL;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        log_i("Zigbee stack initialized");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            log_i("Start network formation");
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_FORMATION);
        } else {
            log_e("Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_FORMATION:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            log_i("Formed network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
        } else {
            log_i("Restart network formation (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_FORMATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            log_i("Network steering started");
        }
        break;
    case ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE:
        dev_annce_params = (esp_zb_zdo_signal_device_annce_params_t *)esp_zb_app_signal_get_params(p_sg_p);
        log_i("New device commissioned or rejoined (short: 0x%04hx)", dev_annce_params->device_short_addr);
        esp_zb_zdo_match_desc_req_param_t  cmd_req;
        cmd_req.dst_nwk_addr = dev_annce_params->device_short_addr;
        cmd_req.addr_of_interest = dev_annce_params->device_short_addr;
        esp_zb_zdo_find_on_off_light(&cmd_req, user_find_cb, NULL);
        break;
    default:
        log_i("ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}

static void esp_zb_task(void *pvParameters)
{
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZC_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_switch_cfg_t switch_cfg = ESP_ZB_DEFAULT_ON_OFF_SWITCH_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_switch_ep = esp_zb_on_off_switch_ep_create(HA_ONOFF_SWITCH_ENDPOINT, &switch_cfg);
    esp_zb_device_register(esp_zb_on_off_switch_ep);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}

/********************* GPIO functions **************************/
static QueueHandle_t gpio_evt_queue = NULL;

static void IRAM_ATTR gpio_isr_handler(void *arg)
{
    xQueueSendFromISR(gpio_evt_queue, (switch_func_pair_t *)arg, NULL);
}

static void switch_gpios_intr_enabled(bool enabled)
{
    for (int i = 0; i < PAIR_SIZE(button_func_pair); ++i) {
        if (enabled) {
            enableInterrupt((button_func_pair[i]).pin);
        } else {
            disableInterrupt((button_func_pair[i]).pin);
        }
    }
}

/********************* Arduino functions **************************/
void setup() {
    // Init Zigbee
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };

    ESP_ERROR_CHECK(esp_zb_platform_config(&config));

    // Init button switch 
    for (int i = 0; i < PAIR_SIZE(button_func_pair); i++) {
        pinMode(button_func_pair[i].pin, INPUT_PULLUP);
        /* create a queue to handle gpio event from isr */
        gpio_evt_queue = xQueueCreate(10, sizeof(switch_func_pair_t));
        if ( gpio_evt_queue == 0) {
            log_e("Queue was not created and must not be used");
            while(1);
        }
        attachInterruptArg(button_func_pair[i].pin, gpio_isr_handler, (void *) (button_func_pair + i), FALLING);
    }

    // Start Zigbee task
    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}

void loop() {
    // Handle button switch in loop()
    uint8_t pin = 0;
    switch_func_pair_t button_func_pair;
    static switch_state_t switch_state = SWITCH_IDLE;
    bool evt_flag = false;

    /* check if there is any queue received, if yes read out the button_func_pair */
    if (xQueueReceive(gpio_evt_queue, &button_func_pair, portMAX_DELAY)) {
        pin =  button_func_pair.pin;
        switch_gpios_intr_enabled(false);
        evt_flag = true;
    }
    while (evt_flag) {
        bool value = digitalRead(pin);
        switch (switch_state) {
        case SWITCH_IDLE:
            switch_state = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE;
            break;
        case SWITCH_PRESS_DETECTED:
            switch_state = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED;
            break;
        case SWITCH_RELEASE_DETECTED:
            switch_state = SWITCH_IDLE;
            /* callback to button_handler */
            (*esp_zb_buttons_handler)(&button_func_pair);
            break;
        default:
            break;
        }
        if (switch_state == SWITCH_IDLE) {
            switch_gpios_intr_enabled(true);
            evt_flag = false;
            break;
        }
        vTaskDelay(10 / portTICK_PERIOD_MS);
    }
}
```

### Step 5.Final Effect

After upload the codes to 2 pieces of XIAO ESP32C6(light bulb and light switch), you can see some message from serial port like below image. When you click the switch, the bulb will turn on or off.

:::tip
If the message from serial port not like below image, you can click the reset button on XIAO ESP32C6 or replug to reboot it.
:::

<div class="table-center">
	<table>
		<tr>
			<th>Zigbee bulb</th>
			<th>Zigbee switch</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_zigbee_arduino/2.png" style={{width:500, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_zigbee_arduino/3.png" style={{width:500, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

Here is the final effect. You can use switch to control the bulb via Zigbee.

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6_zigbee_arduino/video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Congratulations on successfully completing your Zigbee-controlled lighting project! There are many more exciting Zigbee applications waiting for you to explore. Keep up the great work!

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>