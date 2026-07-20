---
description: Guide to flashing MeshCore repeater firmware on the ESP32S3 via Web USB, along with app configuration for LoRa region and setting path.
title: Get Started with ESP32 MeshCore
keywords:
  - Meshcore
  - ESP32 MeshCore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ESP32S3Series.png
slug: /get_started_with_esp32s3_meshcore
sku: 102010611,113110064
sidebar_position: 3
last_update:
  date: 4/20/2026
  author: Michelle Huang
createdAt: '2026-04-20'
updatedAt: '2026-07-10'
url: https://wiki.seeedstudio.com/get_started_with_esp32s3_meshcore/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ESP32S3Series.png" alt="pir" width={800} height="auto" /></p>

[MeshCore](https://meshcore.io/) is an open sourced system for enabling secure text based communications utilising LoRa Mes hardware. You can use MeshCore repeater and MeshCore companion node to build your MeshCore network. [XIAO ESP32S3 & Wio-SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) is flexible solution to develop a MeshCore node.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## Firmware Flashing

Connect your device with a USB cable to the computer. Please make sure the cable supports data transmission. 

:::warning
Please keep the USB cable connected while the data transmission, or else the device can be damaged.
:::

Go to the [Meshcore Web Flasher](https://meshcore.io/flasher). 

Choose `Seeed Studio Xiao S3 Wio` in the `Community Firmware` group.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ScreenShot_2026-04-20_140721_194.png" alt="pir" width={800} height="auto" /></p>

Choose `Repeater`. If you want to flash other firmware, please [click here](https://docs.meshcore.io/) to see the tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/RepeaterFirmware.png" alt="pir" width={800} height="auto" /></p>


Select the firmware version.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/FirmwareVersion.png" alt="pir" width={600} height="auto" /></p>

While pressing the `Boot(B)` button, press the `Reset(R)` button to enter flashing mode.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/RB.png" alt="pir" width={300} height="auto" /></p>

Choose `Erase device `, then click `Flash` and choose the serial port named `Xiao xxx` or `debug unit xxx`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Flash1.png" alt="pir" width={800} height="auto" /></p>

When the progress bar is completely filled, it indicates that Flash has completed. Then the device will automatically reboot.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/FlashigComplete.png" alt="pir" width={800} height="auto" /></p>

Click the `Reset(R)` button to reboot the device.

## Device Connection

### Connected to SX-1262

The SX-1262 can be connected to the Xiao ESP32-S3 via the B2B interface. The SX-1262 uses SPI to  communicate with Xiao ESP32-S3.

The following diagram shows the B2B pin mapping between XIAO ESP32S3 and Wio-SX1262.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/ESP32-S3B2B%E5%BA%A7%E5%AD%90%E5%BC%95%E8%84%9A%E5%9B%BE.png" style={{width:700, height:'auto'}} alt="B2B pin mapping between XIAO ESP32S3 and Wio-SX1262"/>
</div>
:::warning
The compatible SX-1262 can only be bought within the kit.
:::

### (Optional) Connected to battery

The XIAO ESP32S3 has a built-in power management chip that allows the XIAO ESP32S3 to be powered independently by using a battery or to charge the battery through the XIAO ESP32S3's USB port.

If you want to connect the battery for XIAO, we recommend you to purchase qualified rechargeable `3.7V lithium` battery with `protection circuit`. When soldering the battery, please be careful to distinguish between the positive and negative terminals. The negative terminal of the power supply should be the side closest to the USB port, and the positive terminal of the power supply is the side away from the USB port.

<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### (Optional) Connected to Expansion board

Expansion board would be a good tool for connection and additional application such as adding grove sensors and modules easily.

<table align="center">
  <tbody>
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic</th>
      <th>(Optional) Expansion Board</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg"
            style={{ width: 330, height: 'auto' }}
          />
        </div>
      </td>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Expansion.jpg"
            style={{ width: 330, height: 'auto' }}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Get One Now🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Get One Now🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Configuration

### Initial Configuration

When MeshCore repeater firmware is flashed onto a MeshCore device for the first time, it is necessary to set the device's frequency to make it utilize the frequency that is legal in your country or region.

[Click here](https://config.meshcore.io/) to configure the repeater.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Change the LoRa region and save setting. Then the device will automatically Reboot. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Configure.png" alt="pir" width={800} height="auto" /></p>

**Region List**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** has to adhere to an hourly duty cycle limitation of 10%, calculated every minute on a rolling 1-hour basis. Your device will stop transmitting if you reach it, until it is allowed again.
:::

Then you can start testing your own Mesh network.

### Send Advert

Click "send advert" to enable other Meshcore devices to see this repeater. Then the repeater can be seen in the device list.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/SendAdvert.png" alt="pir" width={800} height="auto" /></p>

### Admin Log in

The default admin password for a repeater is `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Admin.png" alt="pir" width={800} height="auto" /></p>

After logging in, you can see the configuration page. You can now adjust the configuration for the repeater on the hone APP.

### Set Path

Before adding the repeater to your route, you may need to use the repeater to send advert first. Repeater will automatically send advert at regular intervals. This interval can be multiple hours (default 3 hours). So you need to manually send advert or else you need to wait.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/SendAdvert.png" alt="pir" width={800} height="auto" /></p>

You can manually set the message sending path. Connect you Bluetooth companion device to your phone APP. Open a private message window. Then you can choose the discovered repeater to form your path.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

After setting the path, the transmission method will be changed to "n hop". For example, if you add 1 repeater in your route, it will change to 1 hop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

### (Optional) Other Setting

If you want to show the position of the repeater on a MeshCore node map, you need to first install a GPS module for the kit. 

<table align="center">
  <tbody>
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic</th>
      <th>XIAO ESP32S3 & Wio-SX1262 Kit with casing</th>
      <th>(Optional) L76K GNSS Module</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg"
            style={{ width: 300, height: 'auto' }}
          />
        </div>
      </td>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/XiaoESP32S3Casing.jpg"
            style={{ width: 300, height: 'auto' }}
          />
        </div>
      </td>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg"
            style={{ width: 350, height: 'auto' }}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Get One Now🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Get One Now🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Get One Now🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Coonection.png" style={{width:800, height:'auto'}}/></div>

Then log in the admin to enable the GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

Also, you can adjust the advert broadcast interval. The interval range of `auto zero hop advert` is 60-240 mins. The interval range of `auto flood advert` is 3-168 hours. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

## FAQ

### Device loses saved settings after power loss

If the device name, LoRa Region, or other settings appear to be saved successfully in the app but disappear after the device is powered off, check whether the ESP32-S3 flash partition table is abnormal.

You can use [ESPConnect](https://thelastoutpostworkshop.github.io/ESPConnect/) to inspect the ESP32-S3 flash memory partition table. ESPConnect is only applicable to ESP devices and cannot be used with nRF52840 devices.

1. Open ESPConnect and select a baud rate of `115200`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-2.png" alt="ESPConnect baud rate selection" width={800} height="auto" /></p>

2. Click **Connect**, then select **USB JTAG/serial debug unit**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-3.png" alt="Select USB JTAG serial debug unit in ESPConnect" width={600} height="auto" /></p>

3. After the device is connected, open the **Partitions** page.
4. Check whether `spiffs` exists in the partition list.

If the partition table is abnormal, the ESPConnect **Partitions** page may show only:

- `nvs`
- `phy_init`
- `factory`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-4.png" alt="ESPConnect partition table without SPIFFS" width={800} height="auto" /></p>

However, the official MeshCore v1.15 `merged.bin` firmware should include:

- `nvs`
- `otadata`
- `app0`
- `app1`
- `spiffs` 1.5 MB
- `coredump`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-5.png" alt="ESPConnect partition table with SPIFFS" width={800} height="auto" /></p>

MeshCore v1.15 writes the device name and Region settings to `/new_prefs` in SPIFFS. If the `spiffs` partition does not exist, these settings are only kept in RAM. The mobile app may show that the settings were saved successfully, but they will be lost after power is removed.

This usually happens when the normal firmware file is flashed, for example:

```text
Xiao_S3_WIO_companion_radio_ble-v1.15.0-dee3e26.bin
```

Instead, the full merged firmware should be flashed, for example:

```text
Xiao_S3_WIO_companion_radio_ble-v1.15.0-dee3e26-merged.bin
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-1.png" alt="MeshCore flasher download options for normal and merged firmware" width={800} height="auto" /></p>

To fix this issue, erase the device and flash the merged firmware version again.

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
