---
description: Getting started with mmWave Human Detection Sensor Kit
title: mmWave Human Detection Sensor Kit
keywords:
- radar
- mmwave kit
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmwave_human_detection_kit
sidebar_position: 0
last_update:
  date: 08/17/2023
  author: Citric
---

# MR24HPC1 mmWave Human Detection Sensor Kit

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/1.png" style={{width:550, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

Powered by Seeed Studio's XIAO ESP32C3, it supports WiFi/BLE connectivity and offers precise human detection via mmWave sensors. Seamlessly connect grove modules for added features. Achieve easy setup for Home Assistant within 1-2 minutes, coupled with convenient wireless Over-The-Air (OTA) updates. Enable extensive versatility with replaceable mmWave sensors. Ideal for customize smart home automation, detect intrusions, and monitor the well-being of the elderly.

### Features

- **Precision Human Detection**: The onboard mmWave sensor, based on FMCW principle, offers accurate privacy-focused human detection.
- **Flexible Customization**: Onboard Human Presence sensor is replaceable with other Seeed's mmWave series for heartbeat detection, fall detection, etc; Enable additional functionality with 400+ optional Grove sensors.
- **Easy Setup, Wireless Updates**: No-Code setup for Home Assistant in 1-2 minutes, with wireless Over-The-Air (OTA) updates.
- **Seamless Connectivity**: Powered by XIAO ESP32C3, supporting WiFi/BLE and compatible with smart home systems
- **Scalable Solution**: Tailor to your needs with available OEM/ODM services for scalability.

### Application

- **Smart Home Automation**: Enhance lighting, HVAC, and security systems based on human presence.
- **Building Security**: Detect intrusions and trigger alerts for heightened security.
- **Healthcare Monitoring**: Monitor patient movement and aid in fall detection.
- **Automatic Doors**: Enable doors to open as people approach.
- **Elderly Care**: Monitor the well-being of the elderly and provide timely assistance.

## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of mmWave Human Detection Sensor Kit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/hardware.png" style={{width:1000, height:'auto'}}/></div>

:::tip
There are some things to keep in mind when using this kit.

1. The network function of the XIAO ESP32C3 requires the use of an antenna. If you want to install a Grove module, try not to change the position of the antenna. The antenna is placed on the back of the baseboard by default, which ensures a good signal and does not interfere with the radar work.

2. The holes reserved in the kit shell are ventilation holes, which are reserved in consideration of the fact that users may use the sensor module for some gases, they are not used as a criterion to judge whether there are people or not, so please don't worry about the privacy issue.

:::

The following table shows the hardware connection between the millimeter wave radar and the XIAO ESP32C3. If necessary, you can do your own subsequent development based on the connections in the table below.

<div class="table-center">
  <table align="center">
    <tr>
    <th>XIAO ESP32C3</th>
    <th>MR24HPC1</th>
    </tr>
    <tr>
    <td>5V</td>
    <td>VCC</td>
    </tr>
    <tr>
    <td>GND</td>
    <td>GND</td>
    </tr>
      <tr>
        <td>GPIO4 (D2)</td>
        <td>RX</td>
      </tr>
      <tr>
        <td>GPIO5 (D3)</td>
        <td>TX</td>
      </tr>
  </table>
</div>

## Getting Started

:::tip
All of this tutorial focuses on the quick application of the kit in Home Assistant & ESPHome, if you want to use the kit for secondary development, please refer to the [Customized secondary development](#customized-secondary-development) section of the tutorial.
:::

### Software Preparation

In this routine, we will not expand on how to install the Home Assistant environment, we will assume that you already have a working Home Assistant device.

If you wish to learn how to install Home Assistant, then you can refer to the [official tutorial](https://www.home-assistant.io/installation/). We strongly recommend that you install Home Assistant using an x86 device as this is the most user friendly way for you to install Home Assistant with Supervised.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

According to the table above, it is most appropriate to install **Home Assistant OS** and **Home Assistant Supervised**, which will take a lot of hassle off your hands.

We have also written how to install Home Assistant for some of Seeed Studio products, please refer to them.

- [Getting Started with Home Assistant on ODYSSEY-X86](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant/)
- [Getting Started with Home Assistant on reTerminal](https://wiki.seeedstudio.com/reTerminal_Home_Assistant/)
- [Getting Started with Home Assistant on LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/h68k-ha-esphome/)

In addition to this, the XIAO ESP32C3 relies on the open source project ESPHome to access Home Assistant, so you also need to have the **ESPHome** service installed in the **Add-Ons**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

## Getting Started with ESPHome

Out of the factory kit, the XIAO ESP32C3 has been flashed with firmware that is ready to power up, and we were able to get the kit working on Home Assistant in a very short time. The video below will show you the exact steps to get started quickly.

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/2.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

Below are the graphic step-by-step details, please refer to the following to complete the quick start.

### Step 1. Powering the kit

Please supply power to the kit via a USB-C type cable. Be careful that the power input does not exceed 5V/1A, otherwise the product may be damaged.

### Step 2. Connect to the kit's hotspot "seedstudio-mr24hpc1"

After the kit is powered on, a hotspot named **seedstudio-mr24hpc1** will be opened automatically, please search and connect to the hotspot. You can use your cell phone to connect to this network so you don't have to switch networks on your computer as often.

:::note
If you are using an older version of firmware, then this may require you to enter your WiFi password in order to connect to **mmwave-kit**. we recommend **[updating your firmware](#restore-factory-firmware)**. If you want to continue, the network password is `seeedstudio`.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/40.png" style={{width:400, height:'auto'}}/></div>

Then use your browser to go to the backend administration address: `192.168.4.1`. This is where we will configure the network and password that the kit needs to connect to.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/4.png" style={{width:1000, height:'auto'}}/></div>

Then, select the name of the network you want the kit to connect to. Please note that the network you select needs to be on the same LAN as Home Assitant, otherwise your kit will not be recognized by Home Assitant searches.

:::caution
If you can't find the network you want to connect to on the page, it's likely that the XIAO ESP32C3 doesn't support your network. Please adjust your router yourself to enable maximum compatibility and make sure the network is on the 2.4GHz band.XIAO does not support networks on the 5GHz band.
:::

Enter the correct WiFi password and click Save. The device will automatically reboot and try to connect to the network you configured. You don't need to stay on this page, you can close it now.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/5.png" style={{width:600, height:'auto'}}/></div>

### Step 3. Adding your device to Home Assistant

If the networking goes well, you'll be able to find your device on Home Assistant. Please follow the path below to add your device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/41.png" style={{width:500, height:'auto'}}/></div>

Click **Settings** in the menu bar and select **Devices & services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/42.png" style={{width:1000, height:'auto'}}/></div>

You should see the device appear in the **Discovered** section, click the **CONFIGURE** button. Select **SUBMIT** in the window that pops up afterwards and configure the region to use the device normally.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/43.png" style={{width:1000, height:'auto'}}/></div>

The kit was then successfully added to Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/44.png" style={{width:1000, height:'auto'}}/></div>

:::note
If you have too many devices in your home, there is a certain probability that your device will not be found in Discovered. Then, please get the IP address of the kit from your router's console, click the **Add Integration** button at the bottom right corner, and manually enter the IP address to add the device.
:::

### Step 4. Adding components to the dashboard

Then, we click on the added **ESPHome** card, **1 device** here.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/45.png" style={{width:1000, height:'auto'}}/></div>

This will show all the component content we have written for the kit. Let's scroll down the display area slightly to add all of these components to the dashboard.

:::caution
If you don't find the components shown under this page, check the kit's power supply and logs. If you are using the computer function, some computers may not have USB ports that provide enough power support. If you make sure there is no problem with the power supply, please open the logs and send the detailed logs back to Seeed Studio's technical support.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/46.png" style={{width:1000, height:'auto'}}/></div>

We can then see all the information and content in **Overview**.

### Step 5. Edit Dashboard

Currently, the display order of the dashboard component is automatic, which may not be conducive to observing and performing setup operations, so next we need to edit the dashboard to make its display more in line with its function.

In Overviw, click on the three dots with the triangles and then click on **Edit Dashboard**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/12.png" style={{width:1000, height:'auto'}}/></div>

On the Edit page, click the three dots in the upper right corner again to select the **Raw Configuration Editor**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/13.png" style={{width:1000, height:'auto'}}/></div>

Then please clear the code in the original editor, copy the code below and save it.

:::tip
The new firmware has been revised according to the documentation provided by ESPHome and each device has a unique MAC name. So the component names will not be the same. If you want to use the code below, please replace all the `{$DEVICE}` in the code with the name of your device. Your device name can be seen in the device entity in ESPHome.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/47.png" style={{width:1000, height:'auto'}}/></div>
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1-card.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>Click here to preview the full code</summary>

```css
title: My Home
views:
  - path: default_view
    title: Home
    cards:
      - type: horizontal-stack
        cards:
          - type: entities
            entities:
              - entity: button.{$DEVICE}_module_restart
                name: Module Restart
              - entity: sensor.{$DEVICE}_hardware_model
                name: Hardware Model
              - entity: sensor.{$DEVICE}_hardware_version
                name: Hardware Version
              - entity: sensor.{$DEVICE}_heartbeat
                name: Heartbeat
              - entity: sensor.{$DEVICE}_product_id
                name: Product ID
              - entity: sensor.{$DEVICE}_product_model
                name: Product Model
            title: DEVICE Information
      - type: vertical-stack
        cards:
          - type: entities
            entities:
              - entity: select.{$DEVICE}_scene
                name: Scene
              - entity: number.{$DEVICE}_sensitivity
                name: Sensitivity
              - entity: select.{$DEVICE}_time_for_entering_no_person_state_standard_function
                name: Time For Entering No Person State Setting (Standard Function)
              - entity: binary_sensor.{$DEVICE}_presence_information
                name: Presence Information
              - entity: sensor.{$DEVICE}_motion_information
                name: Motion Information
              - entity: sensor.{$DEVICE}_body_movement_parameter
                name: Body Movement Parameter
              - entity: sensor.{$DEVICE}_active_reporting_of_proximity
                name: Active Reporting Of Proximity
            title: Unsolicited Information
      - type: horizontal-stack
        cards:
          - type: entities
            entities:
              - entity: switch.{$DEVICE}_underlying_open_function_info_output_switch
                name: Underlying Open Function Info Output Switch
              - entity: sensor.{$DEVICE}_existence_energy
                name: Existence Energy
              - entity: sensor.{$DEVICE}_motion_energy
                name: Motion Energy
              - entity: sensor.{$DEVICE}_static_distance
                name: Static Distance
              - entity: sensor.{$DEVICE}_motion_distance
                name: Motion Distance
              - entity: sensor.{$DEVICE}_motion_speed
                name: Motion Speed
            title: Underlying Open Function
      - type: horizontal-stack
        cards:
          - type: entities
            entities: 
              - entity: sensor.{$DEVICE}_custom_mode_status
                name: Custom Mode Status
              - entity: number.{$DEVICE}_custom_mode
                name: Custom Mode
              - entity: sensor.{$DEVICE}_current_custom_mode
                name: Current Custom Mode
              - entity: button.{$DEVICE}_end_of_custom_mode_settings
                name: End Of Custom Mode Settings
              - entity: select.{$DEVICE}_existence_boundary
                name: Existence Boundary
              - entity: select.{$DEVICE}_motion_boundary
                name: Motion Boundary
              - entity: number.{$DEVICE}_existence_energy_threshold
                name: Existence Energy Threshold
              - entity: number.{$DEVICE}_motion_energy_threshold
                name: Motion Energy Threshold
              - entity: number.{$DEVICE}_motion_trigger_time
                name: Motion Trigger Time
              - entity: number.{$DEVICE}_motion_to_rest_time
                name: Motion To Rest Time
              - entity: number.{$DEVICE}_time_for_entering_no_person_state_underlying_open_function
                name: Time For Entering No Person State (Underlying Open Function)
            title: Custom Settings
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/14.png" style={{width:1000, height:'auto'}}/></div>

Then click **DONE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/15.png" style={{width:1000, height:'auto'}}/></div>

A brand new dashboard interface is configured.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/48.png" style={{width:1000, height:'auto'}}/></div>

Congratulations, by this point you've completed all of the kit's access to Home Assistant!

## Dashboard Operation Details

To help you quickly understand the full capabilities of the suite and the use of these features, you need to read this section carefully. If you want more detailed information, we recommend that you take the time to read the [product's user manual](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf).

For details on the configuration and parameters of the dashboard, we've compiled a detailed write-up in the ESPHome Docs, so please move over to read the full write-up and details.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/components/seeed_mr24hpc1.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPHome Docs 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

## Customized secondary development

If you need to replace the radar or install the Grove module, you can refer to the moving pictures below to do so. The four screws for the housing are on the back of the product, remove them and then tap gently to remove the front cover.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/24.gif" style={{width:650, height:'auto'}}/></div>

If you want to install the Grove module, you can refer to the image below to install it. We recommend that the Grove connector faces outward and the Grove cable is hidden underneath the Grove module.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/25.gif" style={{width:650, height:'auto'}}/></div>

:::note
In addition to the installation of modules, the installation of kits requires special attention. The installation position of the kit will directly affect the accuracy of the monitoring, please refer to the relevant instructions in the **[Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)** for installation.
:::

This kit is mainly oriented to the direction of the smart home, the secondary development of the content we will not go into too much detail, but we will provide the secondary development of the information and content you may need, please refer to.

- Wiki about the built-in MR24HPC1 module: [24GHz mmWave Sensor - Human Static Presence Module Lite (MR24HPC1)](https://wiki.seeedstudio.com/Radar_MR24HPC1)

- Built-in XIAO ESP32C3 development materials and hands-on Wiki: [Getting Started with Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/)

### Secondary development for ESPHome

All of the kit's code is currently open source. If you have a need to develop ESPHome, you can use the code of external components.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

For the use of this code framework, you can refer to the [**mr24hpc1.yaml**](https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml) file under the examples folder in the project. This file is an example yaml file for ESPHome.

If you don't have any experience with ESPHome before this, you can read [**this Wiki**](https://wiki.seeedstudio.com/xiao-esp32c3-esphome/) to learn to use it.

## Software Upgrades with ESPHome OTA

When the product was designed, we wanted it to be a continuously powered and fixed in one location monitoring device. At the same time, we will continue to update and maintain its software, and we envisioned a situation where we don't need to change its location, and you can implement OTA updates over the LAN.

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/ota.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

Please click on the main screen of ESPHome.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" style={{width:1000, height:'auto'}}/></div>

Click on the **NEW DEVICE**. Then click on **Continue**.

Under the new pop-up window, please enter the name of the application you wish to set up, as well as the name and password of the WiFi. Make sure that the kit and Home Assistant on the **same LAN**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/22.png" style={{width:450, height:'auto'}}/></div>

Then click **Next**. In the device type, please select **ESP32-C3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" style={{width:450, height:'auto'}}/></div>

Then click **Next**. Then click **SKIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" style={{width:1000, height:'auto'}}/></div>

We will update our program in the Github project, once the program is updated, you can just copy everything inside and overwrite the generated yaml file. Changes can also be made to this.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Finally, just select **Wireless** to upload the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/23.png" style={{width:500, height:'auto'}}/></div>

## Restore Factory Firmware

### Method 1: Quick flash the latest firmware

If you are using the kit and find inconsistencies with the steps and content above, please update the kit's firmware on the following page to restore the factory settings.

**Step 1.** Click the button below to go to the Flash Firmware page. Then connect the kit to your computer via a USB-C type cable.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://limengdu.github.io/MR24HPC1_ESPHome_external_components/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Flash the Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 2.** Click the Connect button and select the port number device that has a **JTAG** name.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/50.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** Flash Firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/32.png" style={{width:500, height:'auto'}}/></div>

Simply click on **INSTALL SEEED STUDIO MMWAVE KIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/33.png" style={{width:500, height:'auto'}}/></div>

If you see the display below, then the firmware flash is complete. At this point you may need to re-power up to get the programme up and running. After completing the firmware burn, you will need to configure the network from scratch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/34.png" style={{width:500, height:'auto'}}/></div>

### Method 2: Flash firmware with the help of ESPHome Tool

If you're experiencing issues with your device not working properly, try restoring the factory firmware and re-adding the device to Home Assistant.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/releases/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

- Option 1: using the [ESPhome Web tool](https://web.esphome.io/?dashboard_install) to upload.

Open the [ESPhome Web tool](https://web.esphome.io/?dashboard_install) with Chrome or Edge web browser.

Click **CONNECT**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

select the XIAO ESP32 serial port in the popup window.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

Click **INSTALL** and then select the `.bin` file downloaded from above steps.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- Option 2: Using the [esphome-flasher tool](https://github.com/esphome/esphome-flasher).

If you are still unable to upload firmware using method one after installing the driver and changing browsers, then you can try using method two. Please refer to the official tutorial for specific installation methods and instructions.

:::tip
If you wish to observe the log messages of the XIAO ESP32C3, you can also view them through the View Logs button of this software.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

Once the firmware has been uploaded successfully, you will be able to see the network called **seeedstudio-mr24hpc1**. Please refer to the [Three minutes to get started ESPHome](#three-minutes-to-get-started-esphome) content to reconfigure the device.

## Resources

- **[GITHUB]** [Project open source](https://github.com/limengdu/mmwave-kit-external-components)
- **[PDF]** [Quick Setup Template](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [User Manual](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

### Version 1

- **[ZIP]** [PCB&SCH EAGLE files](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

### Version 2

- **[ZIP]** [PCB&SCH EAGLE files](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

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
