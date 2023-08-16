---
description: SenseCAP Indicator x Home Assistant Application Development
title: Home Assistant X SenseCAP Indicator
keywords:
- SenseCAP Indicator
- Home Assistant
- ESP32S3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_Application_Home_Assistant
last_update:
  date: 7/03/2023
  author: Thomas
---

# SenseCAP Indicator x Home Assistant Application Development
<!-- SenseCAP Indicator x Home Assistant Application Development -->

<iframe class="youtube-video" src="https://www.youtube.com/embed/PKMcutZDjDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />


Welcome to the Seeed SenseCAP Indicator and Home Assistant development tutorial. This guide will walk you through the steps to integrate the SenseCAP Indicator with Home Assistant using the [Home Assistant Yellow](https://www.home-assistant.io/yellow).

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png"/></div>

> **Home Assistant Yellow** comes pre-assembled in a custom enclosure with a Raspberry Pi Compute Module 4 (CM4) and a custom heat sink for fanless, silent operation. The CM4 is a version without wireless and has 2 GB RAM and 16 GB eMMC storage. Pre-installed with Home Assistant.

To get your SenseCAP Indicator working with Home Assistant, you need to follow two main steps:

1. [Install Home Assistant](#install_HA)
2. [Config Home Assistant Projection](#Config_HA)


## Prerequisites

Before we begin, make sure you have read the [User Guide](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) of the SenseCAP Indicator Board to familiarize yourself with its software and hardware information.


## Install Home Assistant {#install_HA}
> Home Assistant is a powerful open-source home automation platform that focuses on privacy and local control. It offers a customizable and flexible framework to manage and automate all your home devices from a single, unified platform.

With **Home Assistant Yellow** You can follow the instructions provided [here](https://www.home-assistant.io/installation/yellow). Also, to run on any type of Raspberry Pi or a local server, you can follow this [instruction](https://www.home-assistant.io/installation/) step by step.

Once you installed, getting into this page means you can go to next step.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

<br />

:::tip Don't know how to onboard Home Assistant?
Once you installed the Home Assistant, check [Onboarding Home Assistant - Home Assistant](https://www.home-assistant.io/getting-started/onboarding/) for details.
:::

### Step 1: Install **Mosquitto Broker** and **File Editor**

The next step is to install the **Mosquitto Broker** and **File Editor**. **Mosquitto** is an open-source message broker that implements the MQTT protocol whereas **File Editor** allows you to modify the `configuration.yaml` file without accessing the terminal .

In Home Assistant Yellow, you can install the Mosquitto Broker and File Editor using the Add-ons feature.

:::caution Add-ons feature required
Home Assistant Yellow comes with **Home Assistant Operating System** can be easily installed Add-ons. However, **Home Assistant Container** does not support Add-ons, which means you need to install a MQTT broker application aside from Home Assistant. For details, check the [installation Methods](https://www.home-assistant.io/installation/#compare-installation-methods).
:::

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Setting.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Add-ons.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Press_Add.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add-on_Store.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

<!--<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Setting.png"/></div> -->

<!--<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Add-ons.png"/></div>-->

<!--<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Press_Add.png"/></div>-->

<!--<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add-on_Store.png"/></div>-->

:::tip
<details>

<summary>For convenience, show the 'File editor' in sidebar:</summary>

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"/></div>

</details>
:::

Now we get two add-ons.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>

### Step 2: Add MQTT Integration and Config

After installing the MQTT Broker, you need to add MQTT integration and configuration to Home Assistant. This will allow Home Assistant to communicate with the SenseCAP Indicator Board.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png"/></div> -->

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png"/></div> -->

:::tip
If not discovered MQTT, restart Home Assistant to see the new one discovered.
:::


### Step 3: Modify "configuration.yaml" to Add Indicator Entity

You can use the **File editor** add-on in Home Assistant Yellow to modify the `configuration.yaml` file.


<details>
<summary>Click to copy Configuration.yaml to configure Integrations</summary>

```yaml
# Example configuration.yaml entry
mqtt:
  sensor:
    - unique_id: indicator_temperature
      name: "Indicator Temperature"
      state_topic: "indicator/sensor"
      suggested_display_precision: 1
      unit_of_measurement: "°C"
      value_template: "{{ value_json.temp }}"
    - unique_id: indicator_humidity
      name: "Indicator Humidity"
      state_topic: "indicator/sensor"
      unit_of_measurement: "%"
      value_template: "{{ value_json.humidity }}"
    - unique_id: indicator_co2
      name: "Indicator CO2"
      state_topic: "indicator/sensor"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.co2 }}"
    - unique_id: indicator_tvoc
      name: "Indicator tVOC"
      state_topic: "indicator/sensor"
      unit_of_measurement: ""
      value_template: "{{ value_json.tvoc }}"
  switch:
    - unique_id: indicator_switch1
      name: "Indicator Switch1"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch1 }}"
      payload_on: '{"switch1":1}'
      payload_off: '{"switch1":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch2
      name: "Indicator Switch2"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch2 }}"
      payload_on: '{"switch2":1}'
      payload_off: '{"switch2":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch3
      name: "Indicator Switch3"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch3 }}"
      payload_on: '{"switch3":1}'
      payload_off: '{"switch3":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch4
      name: "Indicator Switch4"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch4 }}"
      payload_on: '{"switch4":1}'
      payload_off: '{"switch4":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch6
      name: "Indicator Switch6"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch6 }}"
      payload_on: '{"switch6":1}'
      payload_off: '{"switch6":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch7
      name: "Indicator Switch7"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch7 }}"
      payload_on: '{"switch7":1}'
      payload_off: '{"switch7":0}'
      state_on: 1
      state_off: 0
  number:
    - unique_id: indicator_switch5
      name: "Indicator Switch5"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch5": {{ value }} }'
      value_template: "{{ value_json.switch5 }}"
    - unique_id: indicator_switch8
      name: "Indicator Switch8"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch8": {{ value }} }'
      value_template: "{{ value_json.switch8 }}"
```
</details>

:::caution
If your local server doesn't support Add-ons, such as Home Assistant Container, you need to modify the configuration.yaml through terminal.
:::

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png"/></div>

<!--  <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_choose.png"/></div>  Picture not exist! -->

The next step is to modify the `configuration.yaml` file to add the Indicator entity. This file is used by Home Assistant to keep track of the various entities in your setup.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png"/></div>

Add the code into the `configuration.yaml` like this:

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png"/></div>

Save the file, and go to the `Developer Tools` to update YAML configuration.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png"/></div>

### Step 4: Edit Dashboard

The final step is to edit the Home Assistant dashboard. You need to add the following to the raw configuration editor of the dashboard:

<details>

<summary>Click to copy Dashboard YAML to change the UI</summary>

> Note: This is not for `Configuration.YAML`.

```yaml
views:
  - title: Indicator device
    icon: ''
    badges: []
    cards:
      - graph: line
        type: sensor
        detail: 1
        icon: mdi:molecule-co2
        unit: ppm
        entity: sensor.indicator_co2
      - graph: line
        type: sensor
        entity: sensor.indicator_temperature
        detail: 1
        icon: mdi:coolant-temperature
      - graph: line
        type: sensor
        detail: 1
        entity: sensor.indicator_humidity
      - graph: line
        type: sensor
        entity: sensor.indicator_tvoc
        detail: 1
        icon: mdi:air-filter
      - type: entities
        entities:
          - entity: switch.indicator_switch1
          - entity: switch.indicator_switch2
          - entity: switch.indicator_switch3
          - entity: switch.indicator_switch4
          - entity: number.indicator_switch5
          - entity: switch.indicator_switch6
          - entity: switch.indicator_switch7
          - entity: number.indicator_switch8
        title: Indicator control
        show_header_toggle: false
        state_color: true
```

</details>

<details>

<summary>Create a dashboard for SenseCAP Indicator(not necessary, any dashboard is ok)</summary>

switch the sidebar: `Settings->Dashboards`:

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard.png"/></div>

Set a title and Icon you like, then create it.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png"/></div> -->

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png"/></div> -->

</details>


<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png"/></div> -->

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png"/></div> -->

Press the  `TAKE CONTROL` button.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png"/></div> -->

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png"/></div> -->

Replace the YAML contents as above:

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Done.png"/></div>

Now you've already finish the Home Assistant configuration.

### Add Users for MQTT adds-on

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png"/></div> -->

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png"/></div> -->

## Project Configuration {#Config_HA}

The purpose of this section is to establish the default communication between Home Assistant (HA) and the Indicator.

### Step 1: Configure IP Address

Normally, the default Home Assistant server address is `homeassistant.local`, if you have multiple Home Assistant servers, or if there is no default DNS resolution, or if there are multiple IP server addresses, you will need to configure the IP address accordingly.

In `ha_config.h`, changing the `CONFIG_BROKER_URL` value, e.g.:

```c
// #define CONFIG_BROKER_URL    "mqtt://homeassistant.local" // Default
#define CONFIG_BROKER_URL    "mqtt://192.168.1.100" // To yours
```
### Step 2: Configure User Name and Password

If you have a username and password, you will need to configure them. This can be done in the `mqtt_start` function in the `indicator_ha.c` file, specifically in the `mqtt_cfg` configuration. If you do not have a username and password, you can comment them out.

Here is an example of how to configure the username and password:

```c
    esp_mqtt_client_config_t mqtt_cfg = {
        .broker.address.uri = CONFIG_BROKER_URL,
        .credentials.username = "MQTT_Indicator_1", // Your Home Assistant user
        .credentials.authentication.password = "kjdf", // user's password
    };
```

After completing these steps and building it, you should be able to see the Home Assistant and Indicator working together.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## Build and Flash the Native Firmware

Once you have completed the above steps, you are ready to build and flash the project.

<div class="github_container" style={{textAlign: 'center'}}>

<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32">

<strong><span><font color={'FFFFFF'} size={"4"}> Download the Project</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>

</div>
<br />

```bash
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32
```


1. Clone the git repository.
2. Navigate to `examples\indicator_ha` folder.
	- Run `idf.py -p PORT build flash monitor` to build, flash and monitor the project.
	- To exit the serial monitor, type `Ctrl-]`.

```bash
$ git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32
$ cd SenseCAP_Indicator_ESP32/examples/indicator_ha
$ idf.py -p PORT build flash monitor
```

:::caution PSRAM Octal 120M feature required
The project configure PSRAM with Octal 120M by default. Please see [here](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/tools/patch/README.md#idf-patch) to enable `PSRAM Octal 120M`  feature.
:::

For full steps to configure and use ESP-IDF to build projects, you can refer to the [Getting Started Guide](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html).

> As the Home Assistant demo is mainly based on the indicator_basis demo, you could enjoy the Home Assistant functions when sliding to the other panel.

## Additional Information
### Modifying Configuration

In the `ha_config.h` file, there are several tags that are used for MQTT communication. These tags are used to identify different components in the system and can be modified according to your needs.

For instance, for *sensor5*, the tags are defined as follows:

```c
#define CONFIG_SENSOR5_VALUE_KEY     "temp"
#define CONFIG_SENSOR5_UI_UNIT       "°C"
#define CONFIG_SENSOR5_UI_NAME       "Temp"
#define CONFIG_SENSOR5_TOPIC_DATA    CONFIG_TOPIC_SENSOR_DATA
```

The `CONFIG_SENSOR5_VALUE_KEY` tag is used for parsing JSON and structuring JSON data. This tag determines the key that will be used to extract the sensor data from the incoming MQTT messages.

**SenseCAP Indicator UI**

The `CONFIG_SENSOR5_UI_UNIT` and `CONFIG_SENSOR5_UI_NAME` tags are used to set the display on the SenseCAP Indicator. The `CONFIG_SENSOR5_UI_UNIT` tag determines the unit of measurement that will be displayed, while the `CONFIG_SENSOR5_UI_NAME` tag determines the name of the sensor that will be displayed.

If you want to change the title or the unit of measurement displayed on the SenseCAP Indicator, you can simply modify the `CONFIG_SENSOR5_UI_UNIT` and `CONFIG_SENSOR5_UI_NAME` tags. The same principle applies to other sensors and switch as well.

### CONFIG_BROKER_URL

The `CONFIG_BROKER_URL` should be related to the Home Assistant's MQTT broker address. This is crucial for the communication between the SenseCAP Indicator and Home Assistant.

### Relationship between `ha_config.h` and `Configuration.yaml`

The `ha_config.h` file is a header file in the C programming language. It contains definitions to be shared between several source files. In this case, it contains definitions related to the MQTT configuration.

The `configuration.yaml` file, on the other hand, is a file used by Home Assistant to keep track of the various entities in your setup.

When you modify the `configuration.yaml` file to add the Indicator entity, you are essentially adding the definitions from the `ha_config.h` file to the Home Assistant setup.

### `indicator_ha.c` Functions

The `indicator_ha.c` file contains the main functions for the Home Assistant integration. It includes functions for initializing the MQTT client, subscribing to topics, and handling incoming messages.

You can find the `indicator_ha.c` file [here](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c).

This file contains the main functions for the Home Assistant integration. It includes functions for initializing the MQTT client, subscribing to topics, and handling incoming messages. Here's a brief overview of the critical functions and how they work together:

1. `mqtt_event_handler()`: This function is the main event handler for MQTT events. It is called whenever an event occurs in the MQTT client, such as a new message arriving, a connection being established, or a disconnection happening. Depending on the type of event, it performs different actions. For example, if a new message arrives, it calls the `mqtt_message_arrived()` function to handle the message.

2. `mqtt_message_arrived()`: This function is called when a new MQTT message arrives. It parses the message and performs the appropriate action based on the message's content. For example, it might update the state of a sensor or switch based on the received message.

3. `mqtt_subscribe()`: This function is used to subscribe to MQTT topics. When you subscribe to a topic, you tell the MQTT broker that you want to receive messages published to that topic. In the context of the SenseCAP Indicator, this function is used to subscribe to the topics that the Indicator's sensors and switches publish their states to.

4. `mqtt_publish()`: This function is used to publish messages to MQTT topics. When you publish a message to a topic, it is sent to the MQTT broker, which then forwards it to all clients that have subscribed to that topic. In the context of the SenseCAP Indicator, this function is used to publish the states of the Indicator's sensors and switches.

5. `mqtt_app_start()`: This function is used to start the MQTT client. It sets up the MQTT client configuration, creates the MQTT client, sets the MQTT event handler, and finally connects the MQTT client to the MQTT broker.

6. `indicator_ha_init()`: This is the main initialization function for the Home Assistant integration. It initializes the MQTT client by calling `mqtt_app_start()`, and then subscribes to the necessary MQTT topics by calling `mqtt_subscribe()`.

These functions work together to enable the communication between the SenseCAP Indicator and Home Assistant via MQTT. The `indicator_ha_init()` function starts the MQTT client and subscribes to the necessary topics. Then, whenever an MQTT event occurs, the `mqtt_event_handler()` function is called to handle the event. If a new message arrives, it calls `mqtt_message_arrived()` to handle the message. And whenever the state of a sensor or switch changes, `mqtt_publish()` is called to publish the new state to the corresponding MQTT topic.

## Resources

1. **Demo SDK**: The Demo SDK for the SenseCAP Indicator is available on [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32).
2. **`indicator_ha.c` File**: This file contains the main functions for the Home Assistant integration. You can view it [here](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c).
3. **User Guide**: The User Guide provides detailed information about the software and hardware of the SenseCAP Indicator Board. You can read it [here](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator).
4. **Home Assistant Installation Guide**: If you're new to Home Assistant, this guide will help you get it installed and set up. You can find it [here](https://www.home-assistant.io/installation/).
5. **Getting Started Guide for ESP-IDF**: This guide provides full steps to configure and use ESP-IDF to build projects. You can access it [here](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html).
6. [Home Assistant Concepts and terminology](https://www.home-assistant.io/getting-started/concepts-terminology/)


## Tech Support

**Need help with your SenseCAP Indicator? We're here to assist you!**

If you encounter any issues or have any questions while following this tutorial, please feel free to reach out to our tech support. We are always here to help!

Visit our [Seeed Official Discord Channel](https://discord.gg/sensecap) to ask your questions or the [GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) to share all you want!
