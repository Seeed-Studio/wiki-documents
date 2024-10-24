---
description: SenseCAP Indicator - Home Assistant Application Development
title: Home Assistant - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- Home Assistant
- ESP32S3
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-ha-thumbnail.jpg
slug: /SenseCAP_Indicator_Application_Home_Assistant
sidebar_position: 1
last_update:
  date: 10/09/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Indicator - Home Assistant Application Development

## Introduction

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/PKMcutZDjDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        Get One Now 🖱️</a>
</div>

Unlock the full potential of your smart home by integrating the SenseCAP Indicator with Home Assistant. This powerful combination allows you to monitor and control your environment with unprecedented ease.

Learn how to seamlessly integrate your SenseCAP Indicator with Home Assistant using MQTT in this comprehensive guide.

Before we begin, let's explore your options for setting up Home Assistant. Home Assistant can be easily installed on two dedicated hardware options:

:::note
For sure, you have various options to install HA by following [Installation - Home Assistant (home-assistant.io)](https://www.home-assistant.io/installation/).
:::

<Tabs>
<TabItem value='Home Assistant Green'>

<div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA/HA_Green.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> The affordable **[Home Assistant Green](https://www.home-assistant.io/green)** is the easiest way you can start using Home Assistant. It's plug-and-play and comes with Home Assistant already installed.

</TabItem>

<TabItem value='Home Assistant Yellow'>

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png"style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> **[Home Assistant Yellow](https://www.home-assistant.io/yellow)** comes pre-assembled in a custom enclosure with a Raspberry Pi Compute Module 4 (CM4) and a custom heat sink for fanless, silent operation. The CM4 is a version without wireless and has 2 GB RAM and 16 GB eMMC storage. Pre-installed with Home Assistant.

</TabItem>
</Tabs>

To maximize the capabilities of Home Assistant, we recommend using either Home Assistant OS or Home Assistant Supervised. Both options offer advanced features and greater customization options, allowing you to tailor your smart home experience to your exact needs.

Now, let's get started with the integration process. Follow these three main steps to get your SenseCAP Indicator working with Home Assistant:

1. [Install Home Assistant OS](#install_HA)
   1. [Install Add-ons](#mqtt-addons)
   2. [Set Up MQTT Integration](#mqtt-integration)
2. [Build And Flash Firmware](#build-flash-firmware)
3. [Add MQTT Devices](#add-mqtt-devices)
4. [Set up A Dashboard](#set-up-dashboard)

## Prerequisites

Before we begin, make sure you have read the [User Guide](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) of the SenseCAP Indicator Board to familiarize yourself with its software and hardware information.

## Install Home Assistant OS {#install_HA}

> Home Assistant is a powerful open-source home automation platform that focuses on privacy and local control. It offers a customizable and flexible framework to manage and automate all your home devices from a single, unified platform.

With **Home Assistant Yellow** You can follow the instructions provided [here](https://www.home-assistant.io/installation/yellow). Also, to run on any type of Raspberry Pi or a local server, you can follow this [instruction](https://www.home-assistant.io/installation/) step by step.

Once you installed, getting into this page means you can go to next step.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

<br />

:::tip Don't know how to onboard Home Assistant?
Once you installed the Home Assistant, check [Onboarding Home Assistant - Home Assistant](https://www.home-assistant.io/getting-started/onboarding/) for details.
:::

### Step 1: Install Add-ons {#mqtt-addons}

:::caution Add-ons feature required
Home Assistant Yellow comes with **Home Assistant Operating System** can be easily installed Add-ons. However, **Home Assistant Container** does not support Add-ons, which means you need to install a MQTT broker application aside from Home Assistant. For details, check the [installation Methods](https://www.home-assistant.io/installation/#compare-installation-methods).
:::

The next step is to install the **Mosquitto Broker** and **File Editor**. **Mosquitto** is an open-source message broker that implements the MQTT protocol whereas **File Editor** allows you to modify the `configuration.yaml` file without accessing the terminal .

In Home Assistant Yellow, you can install the Mosquitto Broker and File Editor using the Add-ons feature.

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

:::tip
For convenience, show the 'File editor' in sidebar:

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"/></div>

:::

Now we get two add-ons.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>

### Step 2: Set Up MQTT Integration {#mqtt-integration}

MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol that's crucial for connecting your SenseCAP Indicator Board to Home Assistant. To enable this functionality, you need to add the [MQTT integration](https://www.home-assistant.io/integrations/mqtt) to your Home Assistant setup.

> Adding the MQTT integration allows Home Assistant to communicate seamlessly with your SenseCAP Indicator Board, enabling real-time data exchange and control. This bi-directional communication is essential for monitoring sensor data and sending commands to your device.

To set up the MQTT integration:

1. Navigate to the Integrations page(`Devices & Services` -> `Integrations`) in your Home Assistant dashboard.
2. Search for "MQTT" and select it from the list. (If not discovered automatically,)
3. Follow the on-screen instructions to complete the setup.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
If you're using a non-official MQTT broker (such as EMQX Broker) instead of the standard Mosquitto broker, automatic discovery may not work. In this case, you'll need to manually enter the broker's IP address to establish the connection. This ensures that Home Assistant can communicate with your custom MQTT setup.
:::

### Add Users for MQTT Add-on

When using the official Mosquitto Broker add-on in Home Assistant, you may need to set up credentials for the MQTT connection. This step ensures secure communication between your devices and Home Assistant. Here's how to add a user:

1. Navigate to the Mosquitto broker add-on in your Home Assistant interface.
2. Look for the "Users" section or tab within the add-on configuration.
3. Click on the "Add User" or "+" button to create a new user.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}} alt="Add User Button"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}} alt="Create User Form"/></div></td>
    </tr>
  </table>
</div>

[^ref]: [MQTT default credential - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/ba2fe1c04d486f802e12b763ffb6efbc71bb5d80/examples/indicator_ha/main/ha_config.h#L10C1-L14C70)


4. In the user creation form:
   - Enter a username of your choice. default is `indicator-usr`[^ref].
   - Create a strong password. default is `indicator-password`.
   - Optionally, you can set specific permissions if needed.
5. Save the new user credentials.

:::tip
Make sure to use these credentials when configuring your SenseCAP Indicator or any other MQTT devices to connect to Home Assistant.
:::

After adding the user, you may need to restart the Mosquitto broker add-on for the changes to take effect. You should now be able to establish a secure MQTT connection using these credentials.

Remember to update your SenseCAP Indicator's MQTT settings with the new username and password to ensure it can communicate with Home Assistant.

## Setting Up the SenseCAP Indicator ESP32 Project {#build-flash-firmware}

Before integrating your SenseCAP Indicator with Home Assistant, you need to set up the device with the appropriate firmware. Follow these steps to download, build, and flash the project to your SenseCAP Indicator.

### Step 1: Download the Project

There are two projects available for integrating SenseCAP Indicator with Home Assistant. Choose the one that best suits your needs:

<Tabs groupId="project-ha">
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha" default>

This project is specifically designed for Home Assistant integration.

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Love4yzp/sensecap-indicator-ha">

<strong><span><font color={'FFFFFF'} size={"4"}>Get The Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>


Or use Git to clone the repository:

```bash
git clone https://github.com/Love4yzp/sensecap-indicator-ha
```

</TabItem> 
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

This project includes more examples and features for the SenseCAP Indicator.

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32">

<strong><span><font color={'FFFFFF'} size={"4"}>Get The Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>

Or use Git to clone the repository:

```bash
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32
```

</TabItem> 
</Tabs>

### Step 2: Navigate to the Project Directory

Once you've downloaded or cloned the project, navigate to the appropriate directory:

<Tabs groupId="project-ha"> 
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha">

```bash
cd sensecap-indicator-ha
```

</TabItem> 
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

```bash
cd SenseCAP_Indicator_ESP32/examples/indicator_ha
```

</TabItem> 
</Tabs>

### Step 3: Build, Flash, and Monitor the Project

Now you're ready to build the firmware, flash it to your SenseCAP Indicator, and monitor the device's output. Use the following command:

```bash
idf.py -p PORT build flash monitor
```

Replace `PORT` with the appropriate port for your device (e.g., `COM3` on Windows or `/dev/ttyUSB0` on Linux).

:::tip 
If you're unsure about your device's port:

- On Windows: Check Device Manager under "Ports (COM & LPT)"
- On Linux/macOS: Run `ls /dev/tty*` in the terminal 
:::

This command will:

1. Build the project
2. Flash the firmware to your SenseCAP Indicator
3. Open a serial monitor to display the device's output

To exit the serial monitor, press `Ctrl-]`.

### Step 4: Verify the Setup

After flashing the firmware, the serial monitor will display output from your SenseCAP Indicator. Look for messages indicating successful connection to your Wi-Fi network and MQTT broker.

:::caution 
Ensure that your SenseCAP Indicator is connected to the same network as your Home Assistant instance, and that your MQTT broker is properly configured and accessible. 
:::

Once you've successfully flashed and verified the firmware on your SenseCAP Indicator, you're ready to proceed with integrating it into Home Assistant using the MQTT integration.

Next, we'll configure Home Assistant to recognize and communicate with your SenseCAP Indicator.

## Add MQTT Devices {#add-mqtt-devices}

After setting up the MQTT integration in Home Assistant, the next step is to add MQTT devices. This process involves configuring Home Assistant to recognize and communicate with your SenseCAP Indicator Board through MQTT.

### Step 1: Add Indicator Entities

To add the SenseCAP Indicator entities to Home Assistant, you need to modify the `configuration.yaml` file. This file is crucial for defining how Home Assistant interacts with your devices.

:::tip
If you're using Home Assistant Yellow or any system with the **File editor** add-on, you can easily modify the `configuration.yaml` file through the web interface. For other setups, such as Home Assistant Container, you may need to modify the file via terminal access.
:::

To modify the `configuration.yaml` file:

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

1. Navigate to the File editor add-on in your Home Assistant dashboard.
2. Select the `configuration.yaml` file from the file list.
3. Add the following MQTT configuration to the file:

<details>
<summary>Click to expand and copy the MQTT configuration for SenseCAP Indicator</summary>


```yaml
# SenseCAP Indicator MQTT Configuration
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
    # ... (similar configurations for switches 2, 3, 4, 6, and 7)
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

1. Save the changes to the `configuration.yaml` file.

:::caution
If your Home Assistant setup doesn't support add-ons (e.g., Home Assistant Container), you'll need to modify the `configuration.yaml` file through a terminal or SSH connection. 
:::

### Step 2: Applying the Configuration Changes

After modifying the `configuration.yaml` file, you need to apply the changes:

1. Navigate to the `Developer Tools` in your Home Assistant dashboard.
2. Find and click on the "YAML" tab.
3. Reload configuration by `ALL YAML CONFIGURATION`.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png" alt="YAML Configuration in Developer Tools"/></div>


:::note
if something went wrong, you could
- Click on the "Check Configuration" button to verify your changes.
- If the configuration check passes, click on the "Restart" button to apply the new configuration.

After restarting, Home Assistant will recognize your SenseCAP Indicator entities, and you should be able to see them in your dashboard. If the entities don't appear immediately, you may need to wait a few minutes for the MQTT discovery process to complete.

Remember to ensure that your SenseCAP Indicator is properly configured to publish its data to the correct MQTT topics as defined in the configuration.
:::

By following these steps, you've successfully added your SenseCAP Indicator devices to Home Assistant via MQTT. You can now use these entities in your automations, scripts, and dashboard for a more integrated smart home experience.

## Set Up Dashboard {#set-up-dashboard}

The final step in integrating your SenseCAP Indicator with Home Assistant is to set up a custom dashboard. This will allow you to visualize and control your device's data and functions easily.

### Creating a New Dashboard (Optional)

If you want to create a dedicated dashboard for your SenseCAP Indicator:

1. Navigate to `Settings -> Dashboards` in the Home Assistant sidebar.
2. Click the "Add Dashboard" button.
3. Set a title (e.g., "SenseCAP Indicator") and choose an icon.
4. Click "Create" to finalize your new dashboard.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}} alt="Create Dashboard"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}} alt="New Dashboard"/></div></td>
    </tr>
  </table>
</div>

### Configuring the Dashboard

To add SenseCAP Indicator entities to your dashboard:

1. Open the dashboard you want to edit.
2. Click the three-dot menu in the top right corner and select "Edit Dashboard".
3. Click the "TAKE CONTROL" button to enable manual configuration.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}} alt="Edit Dashboard"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}} alt="Take Control"/></div></td>
    </tr>
  </table>
</div>

4. In the dashboard editor, click the three-dot menu again and select "Raw configuration editor".
5. Replace the existing YAML content with the following configuration:

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

:::caution
This YAML configuration is specifically for the dashboard and should not be added to your `configuration.yaml` file.
:::

1. Click "SAVE" to apply the changes.

<div class="table-center">
   <table align="center">
      <tr>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png" style={{width:480, height:'auto'}} alt="Raw Configuration Editor"/></div>
         </td>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png" style={{width:480, height:'auto'}} alt="Save Configuration"/></div>
         </td>
      </tr>
   </table>
</div>

Congratulations! You've successfully configured your Home Assistant dashboard to display and control your SenseCAP Indicator. You can now monitor CO2 levels, temperature, humidity, and TVOC, as well as control various switches directly from your Home Assistant interface.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## Resources

1. **Demo SDK**: The Demo SDK for the SenseCAP Indicator is available on [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32).
2. **`indicator_ha.c` File**: This file contains the main functions for the Home Assistant integration. You can view it [here](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c).
3. **User Guide**: The User Guide provides detailed information about the software and hardware of the SenseCAP Indicator Board. You can read it [here](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator).
4. **Home Assistant Installation Guide**: If you're new to Home Assistant, this guide will help you get it installed and set up. You can find it [here](https://www.home-assistant.io/installation/).
5. **Getting Started Guide for ESP-IDF**: This guide provides full steps to configure and use ESP-IDF to build projects. You can access it [here](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html).
6. [Home Assistant Concepts and terminology](https://www.home-assistant.io/getting-started/concepts-terminology/)


## Reference

- 🔗 **[Link]** [Home Assistant and MQTT: 4 Things You Could Build | EMQ (emqx.com)](https://www.emqx.com/en/blog/home-assistant-and-mqtt-4-things-you-could-build#home-assistant-mqtt-with-emqx)

## Tech Support

**Need help with your SenseCAP Indicator? We're here to assist you!**

If you encounter any issues or have any questions while following this tutorial, please feel free to reach out to our tech support. We are always here to help!

Visit our [Seeed Official Discord Channel](https://discord.gg/kpY74apCWj) to ask your questions or the [GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) to share all you want!
