---
description: Meshtastic based on XIAO ESP32S3 & Wio-SX1262 Kit
title: XIAO ESP32-S3&Wio SX1262 Kit
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
last_update:
  date: 12/11/2025
  author: Michelle Huang
---


[Meshtastic®](https://meshtastic.org/) is an open source, off-grid, decentralized, mesh network built to run on affordable, low-power devices. Seeed Studio provides a comprehensive range of ready-to-go Meshtastic devices for hobbyists and industrial users. XIAO ESP32S3 & Wio-SX1262 Kit is flexible solution for meshtastic developer and maker.
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
    </a>
</div>
## Flash Firmware

:::note
Please flash the firmware onto your device if you purchased the XIAO ESP32S3 & Wio-SX1262 Kit before **October 24, 2024** by following this step-by-step tutorial. Please `don't use NRF-OTA` to update the firmware, it may cause the device to be completely dead.
:::

**Step 1**: Firstly, open a browser and visit https://flasher.meshtastic.org/# requires Chrome or Edge browser.

**Step 2**: Then, use a suitable USB cable to connect the device to the PC. You may need to turn off, then **press and hold the BOOT button** while plugging in the USB cable.

**Step 3**: Follow the following instruction provided to perform the subsequent flashing operations. Select the Device as "**Seeed XIAO S3**", Firmware as **the lastest** one, and then click "**Flash**". Don't forget to tick "**Full Erase and Install**" if you want to cover previous firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## Software Overview

Meshtastic provides multiple platform softwares for users to choose from, including Android app, Apple app, web client. It also provides Python CLI, Linux Native and integration methods for developers to use.

For specific information, please refer to [the official website of Meshtastic](https://meshtastic.org/docs/software/).

- [Android App](https://meshtastic.org/docs/category/android-app/): Android application is available on F-Droid repo and Google Play Store. This allows you to connect to your Meshtastic device from your Android phone via Bluetooth, Wi-Fi (if on the same network) or USB On-The-Go (OTG).
- [Apple App](https://meshtastic.org/docs/category/apple-apps/): It is available on app store. By default, the Meshtastic app for iOS supports the use of native offline Apple Maps.
- [Web Client](https://meshtastic.org/docs/software/web-client/): Meshtastic Web is a Meshtastic client that runs directly in your browser.
- [Python CLI](https://meshtastic.org/docs/software/python/cli/): The python pip package installs a "meshtastic" command line executable, which displays packets sent over the network as JSON and lets you see serial debugging information from the meshtastic devices.
- [Linux Native](https://meshtastic.org/docs/software/linux-native/): The device software can also run on a native Linux machine thanks to the Portduino framework.
- [Meshtastic Integrations](https://meshtastic.org/docs/software/integrations/): The Meshtastic ecosystem is highly extensible and allows easy integration with a number of existing software products and projects.

## Device Connection

Before using Meshtastic, the device needs to be connected first. There are two connection methods. The first one is to use an expansion board, and the corresponding information will be displayed on the display. Then, the configuration can be carried out on the corresponding platform according to the reflected information. The second one is to connect the XIAO and the Wio-SX1262 module, and use a serial port tool to obtain the node ID and password.

### Connected to battery

The XIAO ESP32S3 has a built-in power management chip that allows the XIAO ESP32S3 to be powered independently by using a battery or to charge the battery through the XIAO ESP32S3's USB port.

If you want to connect the battery for XIAO, we recommend you to purchase qualified rechargeable `3.7V lithium` battery with `protection circuit`. When soldering the battery, please be careful to distinguish between the positive and negative terminals. The negative terminal of the power supply should be the side closest to the USB port, and the positive terminal of the power supply is the side away from the USB port.



<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


### Connected to Expansion board

After flashing firmware and downloading Meshtastic app, Expansion board would be a good tool for connection and additional application such as adding grove sensors and modules easily.

**Step 1**: Ensure that the device to be connected (such as "device") is turned on and in a discoverable state. And open the Meshtastic app on your mobile phone.

**Step 2**: In the Meshtastic app, there is an "+" icon on bottom right. Click it to let the app start scanning for nearby connectable devices. Then select the corresponding device ID showing on OLED display.

**Step 3**: Once selected correctly, enter the code showing on OLED display. Press the botton to switch display.

**Button Functions:**

- Press once to switch the screen.
- Press twice to broadcast.
- Press three times to switch the GPS mode.

**Step 4**: Set the Lora region, then the device will reboot.

**Step 5**: Finish reboot, the device status can be checked on Meshtastic app and OLED display.

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Serial port tool

Select a serial port debugging tool you like. I will take Comtool on mac as an example below. Select the **serial** connection, choose **the corresponding port**, configure the baud rate as **115200**, and turn on **RTS and DTR**. Open the connection and you can see the connection data.
Search for "**nodenum**" to find the corresponding node ID. Its default **password is 123456**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
The last four digits of nodenum are the device number ID discovered by the meshtastic app. For example, "nodenum 0x9e20d02c" is "Meshtastic_d02c" in meshtastic.
:::


### Connected to SX-1262

The SX-1262 can be connected to the Xiao ESP32-S3 via the B2B interface. The SX-1262 uses SPI to  communicate with Xiao ESP32-S3.
:::warning
The compatible SX-1262 can only be bought within the kit.
:::
## Communicate with Wio Tracker T1000-E

**Step 1**. Connect Wio Tracker T1000-E following [wiki](https://wiki.seeedstudio.com/sensecap_t1000_e/#get-started-1).

**Step 2**. Make sure the following setting is same as your configuration on XIAO ESP32S3 for Meshatastic.

1. Device activation and setup

- Ensure that both devices are turned on and in normal working condition.
- The wireless communication function of the device (such as Bluetooth, LoRa, etc.) should be enabled. Check the relevant settings to ensure that it is not accidentally turned off or restricted.

2. Distance and signal strength

- The distance between the two devices cannot be too far. After initail testing, the communication distance of XIAO ESP32S3 for Meshtastic with 2 dbm IPEX antenna is over 2.5 km. Generally speaking, in a more open environment, can be over 20 km.

3. Network Settings

- Ensure that the devices are in the same network mode or channel setting. Easily set to same 'lora region' and 'Modem preset' using Meshtastic APP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**Step 3**. Communicate with Wio Tracker T1000-E

Once connected, you can start sending and receiving messages through the Meshtastic network. Messages can be text-based or may support additional features depending on the capabilities of the devices and the app. You can also monitor the network activity and see which devices are currently connected and active.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Sensor Connection

In the meshtastic application, the Wio-SX1262 with XIAO esp32s3 kit is capable of supporting a wide range of sensors. When used in conjunction with the XIAO expansion board, it can support numerous grove sensors, please check [here](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10). Additionally, when combined with the GNSS add on module, it forms the smallest module within meshtastic that has GPS functionality.

### Temperature and Humidity Sensor

<div class="table-center">
  <table align="center">
    <tr>
      <th>DHT20 Temperature & Humidity Sensor</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

**Step 1**: Connect the Grove DHT20 sensor of the XIAO Expansion Board

**Step 2**: Enable `Detection Sensor` in Meshtastic APP

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>

### GNSS Sensor

<div class="table-center">
  <table align="center">
    <tr>
      <th>L76K GNSS Module for XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Initial Configuration

:::note
For more details, please refer to [Meshtastic](https://meshtastic.org/docs).
:::

### Radio Configuration

There are several config sections in the Meshtastic firmware, these are broken out so they can be sent as small admin messages over the mesh.

| Name | Description |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Bluetooth config options are: Enabled, Pairing Mode and Fixed PIN. |
| [Channels](https://meshtastic.org/docs/configuration/radio/channels/) | Channels config options are: Index, Role and Settings. |
| [Device](https://meshtastic.org/docs/configuration/radio/device/) | Device config options are: Device Role, Serial Output, Debug Log and Factory Reset. |
| [Display](https://meshtastic.org/docs/configuration/radio/display/) | Display config options are: Screen On Duration, Auto Carousel Interval, Always Point North, and GPS Format. |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | The LoRa config options are: Region, Modem Preset, Max Hops, Transmit Power, Bandwidth, Spread Factor, Coding Rate, Frequency Offset, Transmit Disabled and Ignore Incoming Array. |
| [Network](https://meshtastic.org/docs/configuration/radio/network/) | Network config options are: WiFi Enabled, WiFi SSID, WiFi PSK, WiFi Mode and NTP Server. |
| [Position](https://meshtastic.org/docs/configuration/radio/position/) | Position config options are: GPS Enabled, GPS Update Interval, GPS Attempt Time, Fixed Position, Smart Broadcast, Broadcast Interval and Position Packet Flags. |
| [Power](https://meshtastic.org/docs/configuration/radio/power/) | Power config options are: Charge Current, Power Saving, Shutdown after losing power, ADC Multiplier Override Wait Bluetooth Interval, Light Sleep Interval and Minimum Wake Interval. |
| [User](https://meshtastic.org/docs/configuration/radio/user/) | User config options are: Long Name, Short Name, and Is Licensed. |

### Module Configuration

Modules are included in the firmware and allow users to extend the functionality of their mesh or device.

| Name | Description |
| ---- | ---- |
| [Ambient Lighting](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | Adjust the brightness of NCP5623 I2C RGB LEDs. |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | Enable Support for Codec2 Voice Comms on certain devices. |
| [Canned Message](https://meshtastic.org/docs/configuration/module/canned-message/) | Set a number of predefined messages to send out directly from the device with the use of an input device like a rotary encoder. |
| [Detection Sensor](https://meshtastic.org/docs/configuration/module/detection-sensor/) | Configure a GPIO pin to be monitored for specified high/low status and send text alerts. |
| [External Notification](https://meshtastic.org/docs/configuration/module/external-notification/) | Incoming messages are able to alert you using circuits you attach to the device (LEDs, Buzzers, etc). |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | Forward packets along to an MQTT server. This allows users on the local mesh to communicate with users on another mesh over the internet. |
| [Neighbor Info](https://meshtastic.org/docs/configuration/module/neighbor-info/)| Send info on 0-hop neighbors to the mesh. |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | Count the number of BLE and Wifi devices passing by a node. |
| [Range Test](https://meshtastic.org/docs/configuration/module/range-test/) | Send messages with GPS location at an interval to test the distance your devices can communicate. Requires (at least) one device set up as a sender and one as a receiver. The receiver(s) will log all incoming messages to a CSV. |
| [Remote Hardware](https://meshtastic.org/docs/configuration/module/remote-hardware/) | Set and read a GPIO status remotely over the mesh. |
| [Serial Module](https://meshtastic.org/docs/configuration/module/serial/) | Send messages across the mesh by sending strings over a serial port. |
| [Store & Forward](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | Stores messages on a device for delivery after disconnected clients rejoin the mesh. |
| [Telemetry](https://meshtastic.org/docs/configuration/module/telemetry/) | Attach sensors to the device and transmit readings on a regular interval to the mesh. |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | Track which nodes are used to hop a message to a certain destination. |
## Resource
- **[PDF]**[The Schematic Diagram of the SX1262 compatible with Xiao ESP32-S3](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Wio-SX1262 Module Datasheet](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Wio-SX1262 for XlAO 3D file](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Seeed Studio XIAO ESP32S3 Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [XIAO ESP32S3 Kit Kicad Library](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Seeed Studio XIAO ESP32S3 3D Model](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Dimension in DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle footprint](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Factory firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [Casing 3D file](https://www.thingiverse.com/thing:6888371)
## Course Resources

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
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
