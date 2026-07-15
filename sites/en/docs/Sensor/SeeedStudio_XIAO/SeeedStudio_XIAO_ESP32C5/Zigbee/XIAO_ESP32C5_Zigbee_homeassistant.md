---
title: Connect to Home Assistant via the XIAO ESP32C5 Zigbee
keywords:
  - xiao
  - esp32c5
  - zigbee
  - idf
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /xiao_esp32c5_zigbee_homeassistant
sku: 100010048
last_update:
  date: 1/9/2026
  author: Zeller
createdAt: '2026-01-09'
updatedAt: '2026-01-09'
url: https://wiki.seeedstudio.com/xiao_esp32c5_zigbee_homeassistant/
---

# Connect to Home Assistant via the XIAO ESP32-C5 Zigbee

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_1_1.png" style={{width:800, height:'auto'}}/></div><br/>

The integration of Zigbee devices into smart home ecosystems has become increasingly popular due to Zigbee's low power consumption, reliability, and ease of use. In this wiki, we’ll guide you through connecting the **XIAO ESP32-C5** to **Home Assistant** via its Zigbee functionality. By the end of this guide, you’ll have a working demo where the XIAO ESP32-C5 acts as a Zigbee device that can be controlled directly from Home Assistant's dashboard.  

This tutorial highlights the use of Espressif's Zigbee SDK (Arduino) and demonstrates how to develop and integrate your own Zigbee devices into Home Assistant.  

## Hardware Preparation

To follow along with this guide, you’ll need the following:

1. **Home Assistant Green**: A dedicated Home Assistant hardware device for managing your smart home.  
2. **Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E**: A Zigbee coordinator to enable Zigbee network creation and communication.  
3. **XIAO ESP32-C5**: A development board with Zigbee functionality enabled via Espressif’s SDK.  

<div class="table-center">
 <table align="center">
  <tr>
   <th>Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E</th>
   <th>XIAO ESP32-C5</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/6/-/6-113991082-sonoff-zigbee-3.0-usb-dongle-plus-feature.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
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

:::tip

If you don't have a Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E on hand, you can also choose the [**Home Assistant Connect ZBT-2**](https://www.seeedstudio.com/Home-Assistant-Connect-ZBT-2-p-6573.html).
:::

## Integrating Zigbee with Home Assistant

We will show you how to use the XIAO ESP32-C5 as a Zigbee device to connect to Home Assistant.

### Connect ZBDongle-E

Insert the **Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E** into a USB extension cable. Plug the extension cable into **Home Assistant Green**.

:::caution
USB 3.0 ports and USB 3.0 drives can cause interference with 2.4 GHz protocols, including the ones provided by Home Assistant Connect ZBDongle-E. It is important to use the USB extension cable and to position the Home Assistant Connect ZBDongle-E away from possible interference sources.
:::

**Step 1.** Discovering Zigbee Devices

- Setting -> Devices & services

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_1.png" style={{width:800, height:'auto'}}/></div><br/>

-Under Integrations, you will find the SONOFF Zigbee 3.0 USB Dongle Plus V2 device,  it is Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_2.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 2.** Adding Zigbee Devices

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_3.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 3.** Creating a Zigbee Network

- After clicking Submit, you will be prompted to select the Zigbee device mode. Choose to create a Zigbee network in Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_4.png" style={{width:800, height:'auto'}}/></div><br/>

- Once successful, you will find the Zigbee device has been added under Configured.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_5.png" style={{width:800, height:'auto'}}/></div><br/>

- The ZBDongle-E is set as the coordinator, which can control Zigbee end devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_6.png" style={{width:800, height:'auto'}}/></div><br/>

### Flash the Zigbee Example

We will use the `HA_On_Off_Light` Zigbee example from the Arduino IDE for this demonstration.<br/>
If you haven't used the Arduino IDE before, please refer to [Getting Started with Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/xiao_esp32c5_getting_started/#software) to get started.

**Step 1.** select the example from the Arduino IDE via the path: **File** -> **Examples** -> **Zigbee** -> **Zigbee_On_Off_Light**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_light.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 2.** Set the End Device and Partition Scheme

- Click **Tools** -> **Zigbee Mode** and select the mode as **Zigbee ED (End Device)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_1.png" style={{width:800, height:'auto'}}/></div>

- Select Partition Scheme, go to **Tools** -> **Partition Scheme** -> **Zigbee 8MB with spiffs**

The FLASH memory of the XIAO ESP32-C5 is 8MB. When selecting a partition scheme, it is recommended to choose **Zigbee 8MB with spiffs**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_2.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 3.** Modify the LED Pin and Name

- Locate the code related to pin configuration in the example.

```cpp
uint8_t led = RGB_BUILTIN;
```

- In the XIAO ESP32-C5, the onboard USER LED corresponds to pin GPIO27, which needs to be modified.

```cpp
uint8_t led = 27;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_n2.png" style={{width:800, height:'auto'}}/></div><br/>

- In the XIAO ESP32-C5, the onboard USER LED corresponds to pin GPIO27, which needs to be modified.

```cpp
zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

- Modified

```cpp
zbLight.setManufacturerAndModel("XIAO-ESP32-C5", "ZBLightBulb");
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_n1.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 4.** Upload

Upload the example code with modified pins to the XIAO ESP32-C5.

### Connect to the Zigbee Network

onnect the XIAO ESP32-C5 (configured as a Zigbee End Device) to the Zigbee network created in Home Assistant.

**Step 1.** Discover End Devices

- After flashing the example code to the XIAO ESP32-C5, it will automatically join the Zigbee network. Open the Integrations page, and you will see two Zigbee devices appear.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_7.png" style={{width:800, height:'auto'}}/></div><br/>

- One is the Coordinator device (the ZBDongle-E connected to Home Assistant Green), and the other is the End Device (XIAO-ESP32-C5 ZBLightBulb).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
To join the Zigbee network faster and more stably, you can connect the FPC flexible antenna from the package to the XIAO ESP32-C5.
:::

**Step 2.** Add to Dashboard

- Click on the **XIAO-ESP32-C5 ZBLightBulb** device and add it to the dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_9.png" style={{width:800, height:'auto'}}/></div><br/>

- You can find the **XIAO-ESP32-C5 ZBLightBulb** device in the dashboard, where you can send control commands to it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_10.png" style={{width:800, height:'auto'}}/></div><br/>

### Effect Presentation

- When the XIAO ESP32-C5 end device successfully joins the Zigbee network, it will be displayed in the Serial Monitor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_11.png" style={{width:800, height:'auto'}}/></div><br/>

- Actual Effect

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>

## Conclusion

Espressif offers a diverse range of Zigbee device types and an extensive Zigbee SDK, enabling developers to easily create their own Zigbee devices. By following this tutorial, you have learned how to integrate the XIAO ESP32-C5 into Home Assistant using Zigbee, adding custom devices to your smart home ecosystem.

With the flexibility of the Espressif Zigbee SDK, you can start building your own Zigbee devices for various applications and features, and seamlessly add them to Home Assistant for centralized control. Happy building!

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
