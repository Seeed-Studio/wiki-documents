---
description: SenseCAP Indicator x Home Assistant Application Development
title: Home Assistant X SenseCAP Indicator
keywords:
- SenseCAP Indicator Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_Application_Home_Assistant
last_update:
  date: 5/31/2023
  author: Thomas
---

# SenseCAP Indicator x Home Assistant Application Development
<!-- SenseCAP Indicator x Home Assistant Application Development -->
<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/PKMcutZDjDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

<br />

Welcome to the Seeed SenseCAP Indicator and HomeAssistant development tutorial. This guide will walk you through the steps to integrate the SenseCAP Indicator with HomeAssistant.

## Prerequisites

Before we begin, make sure you have read the [User Guide](https://wiki.seeedstudio.com/SenseCAP_Indicator_Get_Started) of the SenseCAP Indicator Board to familiarize yourself with its software and hardware information.

## Step-by-Step Guide

### Step 1: Install Home Assistant

First, you need to install Home Assistant. You can follow the instructions provided [here](https://www.home-assistant.io/installation/).

### Step 2: Install MQTT Broker

The next step is to install an MQTT Broker. MQTT stands for Message Queuing Telemetry Transport. It is a lightweight messaging protocol for small sensors and mobile devices, optimized for high-latency or unreliable networks.

### Step 3: Add MQTT Integration and Config

After installing the MQTT Broker, you need to add MQTT integration and configuration to Home Assistant. This will allow Home Assistant to communicate with the SenseCAP Indicator Board.

### Step 4: Modify "configuration.yaml" to Add Indicator Entity

The next step is to modify the "configuration.yaml" file to add the Indicator entity. This file is used by Home Assistant to keep track of the various entities in your setup.

You need to add the following to your "configuration.yaml" file:

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
      state_topic: "indicator/

/switch/state"
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

### Step 5: Edit Dashboard

The final step is to edit the Home Assistant dashboard. You need to add the following to the raw configuration editor of the dashboard:

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

[Picture placeholder]

## Build and Flash

Once you have completed the above steps, you are ready to build and flash the project.

1. The project configure PSRAM with Octal 120M by default. Please see [here](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/tools/patch/README.md#idf-patch) to enable `PSRAM Octal 120M` feature.
2. Run `idf.py -p PORT flash monitor` to build, flash and monitor the project.

To exit the serial monitor, type

`Ctrl-]`.

For full steps to configure and use ESP-IDF to build projects, you can refer to the [Getting Started Guide](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html).

## Additional Information

### CONFIG_BROKER_URL

The `CONFIG_BROKER_URL` should be related to the Home Assistant's MQTT broker address. This is crucial for the communication between the SenseCAP Indicator and Home Assistant.

### Relationship between `ha_config.h` and `configuration.yaml`

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

## Tech Support

**Need help with your SenseCAP Indicator? We're here to assist you!**

If you encounter any issues or have any questions while following this tutorial, please feel free to reach out to our tech support. We are always here to help!

Visit our [Seeed Official Discord Channel](https://discord.gg/sensecap) to ask your questions or the [GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) to share all you want!

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
