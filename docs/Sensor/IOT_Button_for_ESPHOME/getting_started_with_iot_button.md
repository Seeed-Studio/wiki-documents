---
description: Getting Started with Seeed Studio IoT Button
title: Getting Started with Seeed Studio IoT Button
keywords:
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /getting_started_with_seeed_iot_button
last_update:
  date: 04/08/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

The IoT Button is a versatile smart switch offering dual Home Assistant integrations through ESPHome (via Wi-Fi) and Zigbee. Powered by the ESP32-C6, it features customizable RGB LED indicators, programmable event triggers for multiple press patterns, USB-C charging, and flexible mounting options - everything you need for intuitive smart home control.

This guide will walk you through setting up your IoT Button, whether you have the **V1 hardware (which shipped with ESPHome firmware)** or the **V2 hardware (which ships with Zigbee firmware)**.

### Features

- **Home Assistant Ready**: Seamless integration via ESPHome or the Zigbee Home Automation (ZHA) integration.
- **One Switch, Customizable Actions**: Supports single-press, double-press, and long-press actions to trigger different automations.
- **Reliable Power Supply**: Powered by a standard 18650 rechargeable battery with a convenient USB-C charging port.
- **Easy Mounting Solution**: Compact design that can be placed anywhere or mounted for easy access.
- **Open for Customization**: Both hardware versions support flashing either ESPHome or Zigbee firmware, allowing you to choose the best protocol for your needs.

## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of both V1 and V2 of the IoT Button.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Parameter</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td>Espressif ESP32-C6</td>
  </tr>
  <tr>
   <td>Flash</td>
   <td>4MB</td>
  </tr>
        <tr>
   <td>LED</td>
   <td>User RGB LED: WS2812B (GPIO19, requires GPIO18 to be enabled)<br />Charge LED: Green<br />User LED (Blue): GPIO2 (V1) / GPIO3 (V2)<br />Low Battery LED (Red): GPIO14 (<b>V2 only</b>)</td>
  </tr>
        <tr>
   <td>Wireless</td>
   <td>2.4GHz Wi-Fi<br />Zigbee 3.0</td>
  </tr>
        <tr>
   <td>Battery</td>
   <td>3.6V Li-ion 18650 Rechargeable battery</td>
  </tr>
        <tr>
   <td>Battery Monitoring</td>
   <td>ADC for voltage reading (<b>V2 only</b>, GPIO1)</td>
  </tr>
        <tr>
   <td>Charging Interface</td>
   <td>USB Type-C</td>
  </tr>
        <tr>
   <td>Battery Protection</td>
   <td>Reverse polarity protection</td>
  </tr>
        <tr>
   <td>Firmware Update</td>
   <td>Support OTA (Over-the-Air)</td>
  </tr>
        <tr>
   <td>Dimensions</td>
   <td>92x32x25 mm</td>
  </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/4.png" style={{width:800, height:'auto'}}/></div>

## Getting Started

### Step 1: Initial Setup

When you first receive your IoT Button, it's essential to perform an initial activation step before use. This applies to **both V1 and V2** hardware.

1. Use a standard 5V USB Type-C data cable to connect the IoT Button to a power source (like a USB charger or computer).
2. **This initial power connection is crucial as it activates the built-in battery's protection circuit.**
3. **Without this activation step, the device will not function properly on battery power.**

:::note
Make sure to use a compliant 5V USB Type-C cable for the activation process. Using non-standard cables may result in improper activation.
:::

### Step 2: Choose Your Connection Method

The IoT Button offers two primary ways to connect to Home Assistant. Your choice will depend on the hardware version you have or the protocol you prefer.

- **IoT Button V1** comes pre-loaded with **ESPHome** firmware. Please follow **Method 1**.
- **IoT Button V2** comes pre-loaded with **Zigbee** firmware. Please follow **Method 2**.

If you are an advanced user, you can flash either firmware onto either hardware version. See the "Advanced Usage" section for more details.

---

### Method 1: ESPHome (Wi-Fi) Integration

This method is the default for **V1 hardware** and is for users who want to connect their IoT Button to Home Assistant via Wi-Fi.

#### 1. Set Up Home Assistant

For optimal performance, it's recommended to install [Home Assistant OS](https://www.home-assistant.io/installation/) on a device like a Raspberry Pi or Home Assistant Green.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"3"}>Shop Home Assistant Green</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-selectable-CM4-p-5680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"3"}>Shop Home Assistant Yellow</font></span></strong>
    </a>
</div><br />

Once Home Assistant is running, ensure the **ESPHome add-on** is installed and started from the Add-on store.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/5.png" style={{width:1000, height:'auto'}}/></div>

#### 2. Flash/Update ESPHome Firmware (If Necessary)

Your device comes pre-flashed. You only need to perform this step if you want to update to the [latest firmware version](https://github.com/Seeed-Studio/xiao-esphome-projects/releases) or if the existing firmware is corrupted.

<Tabs>
<TabItem value='Web Tool'>

The easiest method is to use our [**XIAO ESPHome Projects Firmware Flasher**](https://gadgets.seeed.cc/).

1. Connect your IoT Button to your computer via a USB cable.
2. On the flasher page, find "Seeed Studio IoT Button" and click **INSTALL**.
3. Select the correct COM port from the popup dialog.
4. The browser will automatically download and flash the latest ESPHome firmware to your device.

</TabItem>
<TabItem value='ESPHome Web'>

Alternatively, you can use the official [ESPHome Web](https://web.esphome.io/) tool.

1. Download the latest `*.factory.bin` firmware file from the [GitHub Releases page](https://github.com/Seeed-Studio/xiao-esphome-projects/releases).
2. Connect the IoT Button to your PC.
3. Visit the [ESPHome Web](https://web.esphome.io/) page, click **CONNECT**, and choose the correct COM port.
4. Click **INSTALL** and select the `.bin` file you downloaded.

</TabItem>
</Tabs>

#### 3. Connect to Wi-Fi and Home Assistant

1. After flashing, the IoT Button will create a Wi-Fi access point named `seeedstudio-iot-button`.
2. Connect to this Wi-Fi network from your phone or computer.
3. A captive portal should open automatically. If not, navigate to `192.168.4.1` in your browser.
4. Select your home Wi-Fi network (SSID) and enter the password. The button will then connect to your network.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

#### 4. Add the Device in Home Assistant

Once the IoT Button is on the same network as your Home Assistant server, it should be automatically discovered.

1. Navigate to **Settings > Devices & Services**.
2. Under the "Discovered" section, you should see `Seeed Studio IoT Button`.
3. Click **CONFIGURE**, then **SUBMIT**, and assign the device to an area (e.g., Living Room).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

#### 5. Create Automations with ESPHome

The ESPHome firmware exposes different press patterns as separate switches.

1. Go to **Settings > Automations & Scenes** and click **CREATE AUTOMATION**.
2. For the **Trigger**, select `Device` and choose your IoT Button.
3. Select a trigger type from the list, such as:
    - `Single-press action`
    - `Double-press action`
    - `Long-press action`
4. For the **Action**, choose the device or service you want to control (e.g., `light.toggle`).
5. Save the automation.

---

### Method 2: Zigbee Integration

This method is the default for **V2 hardware** and is for users who want to connect their IoT Button to a Zigbee mesh network.

#### 1. Set Up Zigbee in Home Assistant

Before pairing, you need a Zigbee coordinator connected to your Home Assistant instance.

1. **Install a Zigbee Coordinator**: Connect a coordinator like the [Home Assistant SkyConnect](https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html) to your server.
2. **Set Up Zigbee Home Automation (ZHA)**:
    - Go to **Settings > Devices & Services**.
    - Click **Add Integration** and search for **Zigbee Home Automation**.
    - Follow the prompts to set up ZHA with your coordinator.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

#### 2. Pair the IoT Button with Home Assistant

1. In Home Assistant, navigate to the **Zigbee Home Automation** integration page.
2. Click **Add Device** to put your coordinator in pairing mode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

3. Press the button on your IoT Button once to wake it and initiate pairing.
    - If it doesn't pair, the device may have gone to sleep. Press it again.
    - To force pairing, press and hold the button for **more than 5 seconds**. This triggers a factory reset and puts the device directly into pairing mode. The RGB LED will flash to confirm.
4. Home Assistant should discover the device as **Seeed Studio IoT_Button**.
5. The device will appear with multiple entities: a binary sensor for real-time state and several switches for different click actions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

#### 3. Create Automations with Zigbee

Once paired, you can create automations based on the button's actions.

1. Go to **Settings > Automations & Scenes** and click **CREATE AUTOMATION**.
2. For the **Trigger**, select `Device` and find your IoT Button.
3. ZHA exposes the clicks as device actions. Select the desired trigger from the list, for example:
    - `"remote_button_short_press"`
    - `"remote_button_double_press"`
    - `"remote_button_long_press"`
4. Configure the **Action** you want to perform.
5. Save the automation.

Example automation in Home Assistant YAML to toggle a light with a **double click**:

```yaml
alias: IoT Button Double Click - Toggle Living Room Light
description: ""
trigger:
  - platform: device
    domain: zha
    device_id: YOUR_DEVICE_ID_HERE # Replace with your button's device ID
    type: "remote_button_double_press" # The exact type may vary, select it from the UI
action:
  - service: light.toggle
    target:
      entity_id: light.living_room
mode: single
```

## Advanced Usage: Switching Firmware

One of the key features of the IoT Button is its flexibility. You can switch between ESPHome and Zigbee firmware on **either V1 or V2 hardware**.

- (Not recommended) **To switch to ESPHome**: If your button is running Zigbee firmware and you want to use Wi-Fi, simply follow the flashing instructions in **Method 1, Step 2** to install the ESPHome firmware.

- **To switch to Zigbee**: If your button is running ESPHome and you want to join a Zigbee network, you will need to compile and flash the [Zigbee firmware using Arduino IDE](https://wiki.seeedstudio.com/seeed_iot_button_with_zigbee/). After flashing, follow the pairing steps in **Method 2**.

## Resources

- **[GITHUB]** [Seeed IoT Button Github Repository](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PDF]** [Seeed IoT Button SCH PDF](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Seeed IoT Button SCH & PCB](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

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
