---
description: Getting started with mmWave Human Detection Sensor Kit
title: mmWave Human Detection Sensor Kit
keywords:
- radar
- mmwave kit
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmwave_human_detection_kit
last_update:
  date: 08/17/2023
  author: MengDu
---

# mmWave Human Detection Sensor Kit

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/1.png" style={{width:550, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html">
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

## Three minutes to get started ESPHome

Out of the factory kit, the XIAO ESP32C3 has been flashed with firmware that is ready to power up, and we were able to get the kit working on Home Assistant in a very short time. The video below will show you the exact steps to get started quickly.

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/mmwave_kit/2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Below are the graphic step-by-step details, please refer to the following to complete the quick start.

### Step 1. Powering the kit

Please supply power to the kit via a USB-C type cable. Be careful that the power input does not exceed 5V/1A, otherwise the product may be damaged.

### Step 2. Connect to the kit's hotspot "mmwave-kit"

After the kit is powered on, a hotspot named **mmwave-kit** will be opened automatically, please search and connect to the hotspot. You can use your cell phone to connect to this network so you don't have to switch networks on your computer as often.

:::note
If you are using an older version of firmware, then this may require you to enter your WiFi password in order to connect to **mmwave-kit**. we recommend **[updating your firmware](#restore-factory-firmware)**. If you want to continue, the network password is `seeedstudio`.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/3.png" style={{width:400, height:'auto'}}/></div>

Then use your browser to go to the backend administration address: `192.168.4.1`. This is where we will configure the network and password that the kit needs to connect to.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/4.png" style={{width:1000, height:'auto'}}/></div>

Then, select the name of the network you want the kit to connect to. Please note that the network you select needs to be on the same LAN as Home Assitant, otherwise your kit will not be recognized by Home Assitant searches.

:::caution
If you can't find the network you want to connect to on the page, it's likely that the XIAO ESP32C3 doesn't support your network. Please adjust your router yourself to enable maximum compatibility and make sure the network is on the 2.4GHz band.XIAO does not support networks on the 5GHz band.
:::

Enter the correct WiFi password and click Save. The device will automatically reboot and try to connect to the network you configured.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/5.png" style={{width:600, height:'auto'}}/></div>

### Step 3. Adding your device to Home Assistant

If the networking goes well, you'll be able to find your device on Home Assistant. Please follow the path below to add your device. 

In the ESPHome options bar, you will directly see the device called **SeeedStudio mmWave Kit** at the beginning. Please click on **ADOPT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/35.png" style={{width:1000, height:'auto'}}/></div>

In the message box that pops up, you can change the name of your device or just click **ADOPT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/36.png" style={{width:1000, height:'auto'}}/></div>

You will then be asked to add an API Key to secure the device. Here, we'll start by clicking the **SKIP** button.

:::tip
Since your ESOHome has not yet imported the header files for Radar, the compilation process of the installation may go wrong, so we recommend you to skip the installation of the API Key first, and we will update the header files into ESPHome later.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/37.png" style={{width:1000, height:'auto'}}/></div>

Select **Settings** in the left-hand toolbar, then select **Devices & Services** in the center.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/6.png" style={{width:1000, height:'auto'}}/></div>

If all goes well, you should see the **mmwave-kit** card directly here, which means you can add it directly. If you don't see it directly here, you may need to look up its IP address and click the Add Integration button in the bottom right corner to add the ESPHome device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/38.png" style={{width:1000, height:'auto'}}/></div>

Click **SUBMIT** in the new pop-up window.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/39.png" style={{width:600, height:'auto'}}/></div>

:::caution
If you find that you need to enter an API Key during the add steps here, then your device may be flashing the wrong firmware version, and we apologize for that. We apologize for this, you just need to **[flash the latest version of our firmware](#restore-factory-firmware)**.
:::

The kit was then successfully added to Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/9.png" style={{width:1000, height:'auto'}}/></div>

### Step 4. Adding components to the dashboard

Then, we click on the added **mmwave-kit** card, **1 device** here.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/10.png" style={{width:1000, height:'auto'}}/></div>

This will show all the component content we have written for the kit. Let's scroll down the display area slightly to add all of these components to the dashboard.

:::caution
If you don't find the components shown under this page, check the kit's power supply and logs. If you are using the computer function, some computers may not have USB ports that provide enough power support. If you make sure there is no problem with the power supply, please open the logs and send the detailed logs back to Seeed Studio's technical support.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/11.png" style={{width:1000, height:'auto'}}/></div>

We can then see all the information and content in **Overview**.

### Step 4. Edit Dashboard

Currently, the display order of the dashboard component is automatic, which may not be conducive to observing and performing setup operations, so next we need to edit the dashboard to make its display more in line with its function.

In Overviw, click on the three dots with the triangles and then click on **Edit Dashboard**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/12.png" style={{width:1000, height:'auto'}}/></div>

On the Edit page, click the three dots in the upper right corner again to select the **Raw Configuration Editor**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/13.png" style={{width:1000, height:'auto'}}/></div>

Then please clear the code in the original editor, copy the code below and save it.

:::tip
The new firmware has been revised according to the documentation provided by ESPHome and each device has a unique MAC name. So the component names will not be the same. The following dashboard program is for reference only and you may not be able to use it directly unless you modify the names of these components to the correct names.
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/MR24HPC1_HomeAssistant/blob/mmwave-kit/dashboard.yaml">
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
      - type: entities
        entities:
          - entity: select.mmwave_kit_scene_settings
            name: Scene Settings
          - entity: number.mmwave_kit_sensitivity_settings
            name: Sensitivity Settings
          - entity: >-
              select.mmwave_kit_time_for_entering_no_person_state_setting_standard_function
            name: Time For Entering No Person State Setting (Standard Function)
          - entity: button.mmwave_kit_module_reset
            name: Module Reset
          - entity: sensor.mmwave_kit_firmware_version
            name: Firmware Version
          - entity: sensor.mmwave_kit_hardware_model
            name: Hardware Model
          - entity: sensor.mmwave_kit_product_id
            name: Product ID
          - entity: sensor.mmwave_kit_product_model
            name: Product Model
          - entity: sensor.mmwave_kit_standard_heartbeat
            name: Standard Heartbeat
          - entity: sensor.mmwave_kit_initialization_status
            name: Initialization Status
          - entity: sensor.mmwave_kit_body_movement_parameter
            name: Body Movement Parameter
          - entity: sensor.mmwave_kit_motion_information
            name: Motion Information
          - entity: sensor.mmwave_kit_presence_information
            name: Presence Information
          - entity: sensor.mmwave_kit_active_reporting_of_proximity
            name: Active Reporting Of Proximity
        title: Unsolicited Information

      - type: entities
        entities:
          - entity: switch.mmwave_kit_underlying_open_function_info_output_switch
            name: Underlying Open Function Info Output Switch
          - entity: sensor.mmwave_kit_existence_energy_value_proactive_reporting
            name: Existence Energy Value (Proactive Reporting)
          - entity: sensor.mmwave_kit_motion_energy_value_proactive_reporting
            name: Motion Energy Value (Proactive Reporting)
          - entity: sensor.mmwave_kit_static_distance_proactive_reporting
            name: Static Distance (Proactive Reporting)
          - entity: sensor.mmwave_kit_motion_distance_proactive_reporting
            name: Motion Distance (Proactive Reporting)
          - entity: sensor.mmwave_kit_motion_speed
            name: Motion Speed
        title: Underlying Open Function

      - type: entities
        entities:
          - entity: button.mmwave_kit_existence_energy_value_inquiry
            name: Existence Energy Value Inquiry
          - entity: sensor.mmwave_kit_existence_energy_value
            name: Existence Energy Value
          - entity: button.mmwave_kit_motion_energy_value_inquiry
            name: Motion Energy Value Inquiry
          - entity: sensor.mmwave_kit_motion_energy_value
            name: Motion Energy Value
          - entity: button.mmwave_kit_static_distance_inquiry
            name: Static Distance Inquiry
          - entity: sensor.mmwave_kit_static_distance
            name: Static Distance
          - entity: button.mmwave_kit_motion_distance_inquiry
            name: Motion Distance Inquiry
          - entity: sensor.mmwave_kit_motion_distance
            name: Motion Distance
          - entity: button.mmwave_kit_existence_judgment_threshold_inquiry
            name: Existence Judgment Threshold Inquiry
          - entity: sensor.mmwave_kit_existence_judgment_threshold
            name: Existence Judgment Threshold
          - entity: button.mmwave_kit_motion_trigger_threshold_inquiry
            name: Motion Trigger Threshold Inquiry
          - entity: sensor.mmwave_kit_motion_trigger_threshold
            name: Motion Trigger Threshold
          - entity: button.mmwave_kit_motion_to_rest_time_setting_query
            name: Motion To Rest Time Setting Query
          - entity: sensor.mmwave_kit_motion_to_rest_time
            name: Motion To Rest Time
          - entity: button.mmwave_kit_time_for_entering_no_person_state_inquiry
            name: Time For Entering No Person State Inquiry
          - entity: sensor.mmwave_kit_time_for_entering_no_person_state
            name: Time For Entering No Person State
          - entity: button.mmwave_kit_custom_mode_query
            name: Custom Mode Query
          - entity: sensor.mmwave_kit_custom_mode
            name: Custom Mode
          - entity: button.mmwave_kit_proximity_inquiry
            name: Proximity Inquiry
          - entity: sensor.mmwave_kit_active_reporting_of_proximity
            name: Active Reporting Of Proximity
        title: Enquiry Function

      - type: entities
        entities:
          - entity: number.mmwave_kit_custom_mode_settings
            name: Custom Mode Settings
          - entity: button.mmwave_kit_end_of_custom_mode_settings
            name: End Of Custom Mode Settings
          - entity: number.mmwave_kit_existence_judgment_threshold_settings
            name: Existence Judgment Threshold Settings
          - entity: select.mmwave_kit_existence_perception_boundary_settings
            name: Existence Perception Boundary Settings
          - entity: number.mmwave_kit_motion_trigger_threshold_settings
            name: Motion Trigger Threshold Settings
          - entity: select.mmwave_kit_motion_trigger_boundary_setting
            name: Motion Trigger Boundary Setting
          - entity: number.mmwave_kit_motion_to_rest_time_setting
            name: Motion To Rest Time Setting
          - entity: number.mmwave_kit_motion_trigger_time_setting
            name: Motion Trigger Time Setting
          - entity: >-
              number.mmwave_kit_time_for_entering_no_person_state_setting_underlying_open_function
            name: >-
              Time For Entering No Person State Setting (Underlying Open
              Function)
        title: Custom Settings
```

</details>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/14.png" style={{width:1000, height:'auto'}}/></div>

Then click **DONE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/15.png" style={{width:1000, height:'auto'}}/></div>

A brand new dashboard interface is configured.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/16.png" style={{width:1000, height:'auto'}}/></div>

Congratulations, by this point you've completed all of the kit's access to Home Assistant!

## Dashboard Operation Details

To help you quickly understand the full capabilities of the suite and the use of these features, you need to read this section carefully. If you want more detailed information, we recommend that you take the time to read the [product's user manual](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf).

In the contents of this chapter, we will follow the dashboard card configured above and go through the functions and contents inside it individually.

### Unsolicited Information

The main information displayed on this card is the messages that are actively reported by the kit. It is also the most commonly used message content, such as whether it is occupied, body movement, product model version, etc. For the average user, you only need to use the top of this card.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/17.png" style={{width:450, height:'auto'}}/></div>

In the first three components of the card, we provide the basic setup. There are scene settings, sensitivity settings, and a waiting time setting for the radar to determine when it enters an unoccupied state. You can adjust these parameters according to the scenario of use and judgment. For detailed adjustment details, please read **8.1~8.3** in the [user manual](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf), and we will not elaborate too much here due to space limitation.

- **Body Movement Parameter**: that are used to assist in determining the movement of the monitored subject. In general, a value of **0** indicates that no one is present, and a value of **1** indicates that someone is stationary. A value greater than 1 indicates that someone is moving, and the greater the value, the greater the movement of the monitored object.

- **Motion Information**: Indicates the motion of the detected object. It is categorized into no motion, and in motion.

- **Presence Information**: Indicates the presence of the detected object. Categorized as occupied and unoccupied.

- **Active Reporting Of Proximity**: Indicates the motion orientation of the detected object, which is categorized as approaching and away.


### Underlying Open Function

The Underlying Open Function is the information display area close to the radar floor. It includes information such as static and dynamic energy values, distance and speed in space. This information mainly assists the user in determining the human presence and movement of the environment.

By default, content reporting is turned off for the Underlying Open parameter. If you want to see the data for this card, you need to click on the black lightning bolt button on the right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/18.png" style={{width:450, height:'auto'}}/></div>

- **Existence energy value**: There are electromagnetic waves in the environment, and the electromagnetic wave frequency changes less when there is no one around. When there is a person in the space, the overall electromagnetic wave reflection will float weakly due to the slight movement caused by breathing (chest breathing).

- **Motion energy value**: The amplitude value of motion causes different electromagnetic wave frequency changes. 

- **Stationary distance**: The module detects the straight-line distance of human breathing, which is usually no more than 3 meters.

- **Motion distance**: Detects the distance of the moving target.

- **Motion speed**: Real-time judgment of the speed of the moving target; the speed is positive when approaching the radar and negative when moving away.

### Custom Settings

This card is a customized functional interface provided to some users who have special scenario needs. You will only need to use the customized function area here if your usage scenario has gone beyond the preset bedroom, bathroom, etc. Otherwise, please do not adjust the settings here.

:::caution
We strongly recommend that you read the [product's user manual](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf) carefully before using the custom ribbon!
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/19.png" style={{width:450, height:'auto'}}/></div>

The logic for using this custom setup card is as follows:

1. The suite supports saving up to 4 different customization modes. Before you start to enter the custom mode settings, you need to adjust the button of **Custom Mode Settings** to one of 1~4.

2. Then adjust the content of the parameter you want to adjust below. Please allow a few seconds between each adjustment button to ensure that the device has received your setting request.

3. After confirming the adjustment is correct, click the button of **End Of Custom Mode Settings**, the parameters you adjusted will be saved under the custom mode 1~4 you set.

4. You can use the **Enquiry Function** card on the right to enquire whether the radar's current customization mode and parameter profile is consistent with what you have set up.

:::caution
We recommend that the three parameters in the figure below be adjusted in value by clicking on the up and down buttons, otherwise settings beyond the precision will not be accepted by the radar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/21.png" style={{width:450, height:'auto'}}/></div>
:::


### Enquiry Function

Enquiry Function is provided for users to enquire some required information by themselves. You can query the information you want to know by clicking the buttons on the right side. They can help you determine your settings, radar status, and monitor object status at a certain moment.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/20.png" style={{width:450, height:'auto'}}/></div>

The display of this card is not updated automatically, only the button is clicked once to get the information. If you need to look up more than one message, then please make sure that the radar can have enough time to send and receive messages before clicking different buttons a few short seconds apart.

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

- ESPHome Development Guide for XIAO ESP32C3 and MR24HPC1: [XIAO ESP32C3 accesses Home Assistant via ESPHome service](https://wiki.seeedstudio.com/xiao-esp32c3-esphome/)

- ESPHome configuration files and libraries for XIAO ESP32C3 and MR24HPC1: [MR24HPC1_HomeAssistant](https://github.com/limengdu/MR24HPC1_HomeAssistant)

- Original programs and libraries for the mmWave Human Detection Sensor Kit: [MR24HPC1_HomeAssistant](https://github.com/limengdu/MR24HPC1_HomeAssistant/tree/mmwave-kit)


## Software Upgrades with ESPHome OTA

When the product was designed, we wanted it to be a continuously powered and fixed in one location monitoring device. At the same time, we will continue to update and maintain its software, and we envisioned a situation where we don't need to change its location, and you can implement OTA updates over the LAN.

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/mmwave_kit/ota.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

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
    <a class="github_item" href="https://github.com/limengdu/MR24HPC1_HomeAssistant/blob/mmwave-kit/example/mr24hpc1_mmwave_kit.yaml">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::caution
The compilation of the program depends on [Radar's library files](https://github.com/limengdu/MR24HPC1_HomeAssistant/tree/mmwave-kit/headers), and you need to download the library to the Home Assistant's directory in advance:

```
config/esphome
```
:::

Finally, just select **Wireless** to upload the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/23.png" style={{width:500, height:'auto'}}/></div>

## Restore Factory Firmware

### Method 1: Quick flash the latest firmware

If you are using the kit and find inconsistencies with the steps and content above, please update the kit's firmware on the following page to restore the factory settings.

**Step 1.** Click the button below to go to the Flash Firmware page. Then connect the kit to your computer via a USB-C type cable.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://limengdu.github.io/MR24HPC1_HomeAssistant/">
    <strong><span><font color={'FFFFFF'} size={"4"}>Flash the Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 2.** Click the Connect button and select the port number device that has a **JTAG** name.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/30.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/31.png" style={{width:550, height:'auto'}}/></div>

**Step 3.** Flash Firmware. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/32.png" style={{width:500, height:'auto'}}/></div>

Simply click on **INSTALL SEEED STUDIO MMWAVE KIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/33.png" style={{width:500, height:'auto'}}/></div>

If you see the display below, then the firmware flash is complete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/34.png" style={{width:500, height:'auto'}}/></div>

### Method 2: Flash firmware with the help of ESPHome Tool

If you're experiencing issues with your device not working properly, try restoring the factory firmware and re-adding the device to Home Assistant.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/MR24HPC1_HomeAssistant/releases">
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

Once the firmware has been uploaded successfully, you will be able to see the network called **mmwave-kit**. Please refer to the [Three minutes to get started ESPHome](#three-minutes-to-get-started-esphome) content to reconfigure the device.


## Resources

- **[GITHUB]** [Project open source](https://github.com/limengdu/MR24HPC1_HomeAssistant/tree/mmwave-kit)
- **[PDF]** [Quick Setup Template](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [User Manual](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)
- **[ZIP]** [PCB&SCH EAGLE files](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

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
















