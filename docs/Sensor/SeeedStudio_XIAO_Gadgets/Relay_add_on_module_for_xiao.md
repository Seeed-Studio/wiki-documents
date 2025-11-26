---
title: Relay Add On Module For XIAO
description: The Relay Add On Module For XIAO is a smart module from Seeed Studio designed to control AC-powered appliances. 
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.webp
slug: /relay_add_on_module_for_xiao
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 3
last_update:
  author: Allen
  date: 12/02/2024
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.jpg" /></div>

## Overview

The Relay Add On Module For XIAO is a smart module from Seeed Studio designed to control AC-powered appliances. It is characterized by the combination of XIAO, through the ESPHome access Home Assistant to control a variety of appliances, so that your home smarter!

### Key Features and Specifications

| Parameter               | Value           |
|-------------------------|----------------|
| Relay Pin               | D1            |
| Operating Voltage       | 5V             |
| Operating Current       | 1A           |
| Relay Life              | 100,000 Cycle   |
| Max Switching Voltage    | 250VAC       |
| Max Switching Current    | 10A             |
| Electrical endurance    | 1.5x10^4 OPS (10A 250VAC, Resistive load, at 85°C, 1s on 9s off)|

For more information, [click here to download PDF file](https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.pdf).

## Getting Started

If you want to follow this tutorial through everything, you will need to prepare the following. Except for XIAO ESP32 C3, you can also use other ESP32 series products, like XIAO ESP32 C6 and XIAO ESP32 S3. The ultimate goal of this project is to control relay module in the Home Assistant.

<table align="center">
 <tr>
     <th>XIAO ESP32C3</th>
     <th>Relay Module</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
     <td align="center"><div align="center"><img width ="260" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/13.jpg"/></div></td>
 </tr>
 <tr>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Relay-add-on-module-for-XIAO-p-6310.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
 </tr>
</table>

The content of this tutorial will broadly go through the following steps.

1. [Select your Home Assistant environment](#select-your-home-assistant-environment)
2. Install and cofigure ESPHome in Home Assistant
3. [Configure the XIAO ESP32C3 and ESPHome connection](#configure-the-xiao-esp32c3-and-esphome-connection)
4. [Add Relay Module to Home Assistant Dashboard](#add-relay-module-to-home-assistant-dashboard)

### Fast Flash Firmware

We've created a quick flash firmware page for the XIAO, you can use the site below directly to flash Relay's firmware for the XIAO you have without programming. The site will automatically detect the chip of the XIAO you are connecting to, without having to choose, and directly flash the XIAO firmware version that corresponds to the ESP32 chip.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Firmware Flasher 🖱️</font></span></strong>
    </a>
</div>

## Select your Home Assistant environment

In this routine, we will not expand on how to install the Home Assistant environment, we will assume that you already have a working Home Assistant device.

If you wish to learn how to install Home Assistant, then you can refer to the [official tutorial](https://www.home-assistant.io/installation/). We strongly recommend that you install Home Assistant using an x86 device as this is the most user friendly way for you to install Home Assistant with Supervised.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

According to the table above, it is most appropriate to install **Home Assistant OS** and **Home Assistant Supervised**, which will take a lot of hassle off your hands. If you are running Home Assistant on Docker with OpenWRT (e.g. using LinkStar H68K), please don't worry, we will also provide you with a detailed reference on how to do this.

We have also written how to install Home Assistant for some of Seeed Studio products, please refer to them.

- [Getting Started with Home Assistant on ODYSSEY-X86](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant/)
- [Getting Started with Home Assistant on reTerminal](https://wiki.seeedstudio.com/reTerminal_Home_Assistant/)
- [Getting Started with Home Assistant on LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/h68k-ha-esphome/)

## Step 1. Install ESPHome

If you have the Home Assistant OS installed, it has an Add-on Store, which makes it much easier to install ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

In the Add-on Store, you can search for and install ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

## Step 2. Upload firmware to XIAO ESP32C3

We've created a quick flash firmware page for the XIAO, you can use the site below directly to flash Relay's firmware for the XIAO you have without programming. The site will automatically detect the chip of the XIAO you are connecting to, without having to choose, and directly flash the XIAO firmware version that corresponds to the ESP32 chip.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Firmware Flasher 🖱️</font></span></strong>
    </a>
</div>

## Step 3. Add Relay Module to Home Assistant Dashboard

After flashing the firmware, you can see that there is a wireless network named **seedstudio-relay-module**. Please connect to this network and enter `192.168.4.1` in your browser to configure the network for your device. Please use the same network as your Home Assistant.

Go to **setting**, and **Devices & services**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/5.png" /></div>

In the **Discovered** area, you will find XIAO, click **CONGFIUGE**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/2.png" /></div>

Select a area or leave it by default, click **FINISH**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/4.png" /></div>

After that, click **Devices**, find **xiao_esp32c3**(you name it before) and click into it

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/6.png" /></div>

Here is ESPHome device page, you can add some automations and so on. Now we need to add it to dashboard, so click it.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/7.png" /></div>

Click **NEXT** and click **ADD TO DASHBOARD**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/8.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/9.png" /></div>

Now, click **Overview** at left side

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/10.png" /></div>

You will see the Relay Control appear here

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/11.png" /></div>

### Step 7. Use relay module to control a table lamp

We can click the switch to see if the relay work well. If you see the little green light on the board when you click the switch, it means work well!

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<br></br>
I remodeled my little table lamp with this relay module. Cut the positive wire and plug it into each of the two ports of the relay module. You can see the affect in the below video. This relay module can't power XIAO, so please remember to use battery or USB cable to power XIAO.

:::warning
Please pay attention to the safety of electricity and do not touch the relays during power-on.
:::

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/light.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

Congratulations on successfully completing your journey on Relay Module For XIAO! Let's do more interesting remodels!

## Resources

[PDF] **[Relay Add On Module For XIAO Relay_SCH](https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_SCH.pdf)**

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
