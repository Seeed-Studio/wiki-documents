---
description: Introduces how to use the Zigbee function of the XIAO ESP32C6 and connect to Home Assistant via Zigbee and zbt-1.
title: Connect to Home Assistant via the XIAO ESP32C6 Zigbee
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/0.webp
slug: /xiaoc6_zigbee_led_ha
last_update:
  date: 01/21/2025
  author: Citric
---

# Connect to Home Assistant via the Zigbee of the XIAO ESP32C6

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/1.png" style={{width:1000, height:'auto'}}/></div>

The integration of Zigbee devices into smart home ecosystems has become increasingly popular due to Zigbee's low power consumption, reliability, and ease of use. In this wiki, we’ll guide you through connecting the **XIAO ESP32C6** to **Home Assistant** via its Zigbee functionality. By the end of this guide, you’ll have a working demo where the XIAO ESP32C6 acts as a Zigbee device that can be controlled directly from Home Assistant's dashboard.  

This tutorial highlights the use of Espressif's Zigbee SDK (Arduino) and demonstrates how to develop and integrate your own Zigbee devices into Home Assistant.  

## Materials Needed

To follow along with this guide, you’ll need the following:

1. **Home Assistant Green**: A dedicated Home Assistant hardware device for managing your smart home.  
2. **Home Assistant Connect ZBT-1**: A Zigbee coordinator to enable Zigbee network creation and communication.  
3. **XIAO ESP32C6**: A development board with Zigbee functionality enabled via Espressif’s SDK.  

<div class="table-center">
 <table align="center">
  <tr>
   <th>Home Assistant Connect ZBT-1</th>
   <th>XIAO ESP32C6</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:240, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:240, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Step-by-Step Guide

:::tip
The first two steps refer to the official tutorial for the Home Assistant Connect ZBT-1, and you can also read its tutorial content via the link here.

[Home Assistant Connect ZBT-1 Tutorial](https://connectzbt1.home-assistant.io/new-zigbee/)
:::

### Step 1. Install the Connect ZBT-1 on Home Assistant Green

Plug the Home Assistant Connect ZBT-1 into the USB extension cable. Plug the extension cable into your Home Assistant Green.

:::caution
USB 3.0 ports and USB 3.0 drives can cause interference with 2.4 GHz protocols, including the ones provided by Home Assistant Connect ZBT-1. It is important to use the USB extension cable and to position the Home Assistant Connect ZBT-1 away from possible interference sources.
:::

1. Navigate to **Settings** in the Home Assistant interface.
2. Go to **Devices & Services** and locate the Zigbee integration.
3. Connect ZBT-1 should now have been discovered.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/2.png" style={{width:1000, height:'auto'}}/></div>

4. Select **ADD**.
5. In the dialog, select **Zigbee**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/3.png" style={{width:600, height:'auto'}}/></div>

6. Select **Submit** to complete the setup of the Connect ZBT-1 integration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/4.png" style={{width:600, height:'auto'}}/></div>

7. Your Connect ZBT-1 is now a Zigbee coordinator.

### Step 2. Create a New Zigbee Network Using Connect ZBT-1

1. Navigate to **Settings** in the Home Assistant interface.  
2. Go to **Devices & Services** and locate the Zigbee integration.  
3. Connect ZBT-1 will be shown in your Zigbee Home Automation integration. Select **ADD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

4. To confirm, select **Submit**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/6.png" style={{width:400, height:'auto'}}/></div>

5. Select **Create network**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/7.png" style={{width:350, height:'auto'}}/></div>

4. Follow the prompts to initialize the Zigbee coordinator and prepare it for pairing with Zigbee devices.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/8.png" style={{width:1000, height:'auto'}}/></div>

### Step 3. Flash the XIAO ESP32C6 with the Zigbee Example Program

1. **Set Up Arduino IDE**:

- Install the latest version of the Arduino IDE and add support for the XIAO ESP32C6 by including the Espressif board package.

:::note
If you are using the XIAO ESP32C6 for the first time, please read the wiki link below to add the development board correctly.

[Getting Started with XIAO ESP32C6](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/)
:::

2. **Load the Zigbee_On_Off_Light Example**:

- Please select the correct development board model: **XIAO_ESP32C6**.
- Open the `Zigbee_On_Off_Light` example from the Arduino IDE.

:::tip
We recommend that you use the latest esp32-arduino on-board package to get the most up-to-date and stable Zigbee example programs.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/9.png" style={{width:800, height:'auto'}}/></div>

- In this example, we will be using the on-board LED monochrome lights on the XIAO ESP32C6, so we need to make changes to the LED pins on the program. Modify the code to replace `RGB_BUILTIN` with `LED_BUILTIN` to utilize the onboard LED indicator.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/10.png" style={{width:800, height:'auto'}}/></div>

3. **Configure Zigbee Settings**:

- Set the Zigbee mode to **ZIGBEE_MODE_ED** (End Device).  
- Adjust the partition scheme for Zigbee:  
    Navigate to `Tools -> Partition Scheme` and select **Zigbee 4MB with spiffs**.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/11.png" style={{width:700, height:'auto'}}/></div>

4. **Upload the Program**:

- Connect the XIAO ESP32C6 to your computer via a USB-C cable.  
- Compile and upload the modified example program to the XIAO ESP32C6.
- If the XIAO is working properly then you should see the serial message shown below. If you see the XIAO rebooting constantly, please check if the Zigbee settings are correct or update the version of the development board on-board package.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/12.png" style={{width:700, height:'auto'}}/></div>

### Step 4. Discover the XIAO ESP32C6 in Home Assistant

1. In the Home Assistant interface, navigate to **Settings -> Devices & Services**.  
2. Select the Zigbee integration (name: ZHA).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/13.png" style={{width:800, height:'auto'}}/></div>

3. Click **Nabu Casa HA Connect ZBT-1**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/14.png" style={{width:1000, height:'auto'}}/></div>

4. Inside the device details page of Connect ZBT-1, you can see **ADD DEVICE VIA THIS DEVICE**, please click on it to go to the device finding and pairing page of Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

5. Wait for a moment, and the XIAO ESP32C6 will appear in the list of discovered Zigbee devices.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/16.png" style={{width:1000, height:'auto'}}/></div>

You can set a name and location for it on this page.

6. You can then find this device on the ZHA's device page and add his entity to the dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/17.png" style={{width:1000, height:'auto'}}/></div>

### Step 5. Add the XIAO ESP32C6 to the Dashboard

1. Once the XIAO ESP32C6 is discovered, add it to your Home Assistant dashboard.  
2. You can now control the XIAO ESP32C6 (e.g., toggle the onboard LED) directly from Home Assistant.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/18.png" style={{width:1000, height:'auto'}}/></div>

## Conclusion

Espressif provides a diverse range of Zigbee device types and an extensive Zigbee SDK, enabling developers to create their own Zigbee devices with ease. By following this tutorial, you’ve learned how to integrate the XIAO ESP32C6 into Home Assistant using Zigbee, adding a custom device to your smart home ecosystem.  

With the flexibility of Espressif’s Zigbee SDK, you can start building your own Zigbee devices for a variety of applications and features, and seamlessly add them to Home Assistant for centralized control. Happy building!

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
