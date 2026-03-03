---
description: A DIY meshtastic kit based on XIAO ESP32S3 & Wio-SX1262 kit, XIAO expansion board, grove sensor and L76K GNSS module with acrylic casing.
title: 4-Layer Sandwich kit for Meshtastic
image: https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg
slug: /4_layer_sandwich_for_meshtastic
sidebar_position: 6
last_update:
  date: 12/13/2024
  author: Evelyn Chen
---

# A DIY 4-layer sandwich Meshtastic kit

A full-featured meshtastic node is developed based on XIAO ESP32S3 & Wio-SX1262 Kit. This 4-layer sandwich structure like meshtastic kit takes the xiao expansion board as its foundation. Through the grove interface and pin to pin interface, it supports a variety of expandable modules that are supported by meshtastic firmware. It also supports the I2C communication protocol, including controllable ambient lighting, telemetry sensors, ambient sensors, and GPS modules. It can be easily set up for modular design and function application via meshtastic communication technology. Moreover, it can be connected to an external 3.7V battery through the JST battery connector to realize a mobile node.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg" alt="pir" width={600} height="auto" /></p>

## Hardware Preparation

| SKU | Product Name |
| ---- | ---- |
| 102010611 | XIAO ESP32S3 & Wio-SX1262 Kit|
| 103030356 | XIAO Expansion Board|
| 110010024 | Acrylic Case for XIAO Expansion board |
| 109100021 | GNSS Module, Powered by Quectel L76K |
| 101020513 | Grove - Temperature, Humidity, Pressure and Gas Sensor (BME680) |
|  | 403040-450mA LiPo battery with JST connector |

:::note

1. The GNSS module needs to have the conflicting pins modified on its predecessor so that it can be connected to the XIAO ESP32S3 module in a pin-to-pin manner. Therefore, please purchase the newly stocked GNSS modules after **December 22th, 2024**.
2. The DXF file of the Acrylic case is provided. You can use 3mm-thick acrylic boards to cut and assemble it by yourself.

:::

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262 Kit</th>
      <th>XIAO Expansion Board</th>
      <th>Acrylic Case for XIAO Expansion board</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110010024_preview-08.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>GNSS Module, Powered by Quectel L76K</th>
      <th>Grove - Temperature, Humidity, Pressure and Gas Sensor (BME680)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-l76k-gnss-module-for-seeed-studio-xiao-feature.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar896611_img_0076a.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

In addition to the above modules, the kit also supports the following grove modules, please purchase them according to your own needs.

Additional supported modules:

| SKU | Product Name | Purchase Link|
| ---- | ---- |---- |
| 101020932 | Grove - Temperature & Humidity Sensor V2.0 (DHT20) / Upgraded DHT11/ I2C Port | [Get One](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) |
| 101020192 | Grove - Barometer Sensor (BMP280) | [Get One](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html) |
| 101020193 | Grove - Temp&Humi&Barometer Sensor (BME280) | [Get One](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) |
| 101020556 | Grove - I2C High Accuracy Temperature Sensor(MCP9808) | [Get One](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) |
| 101020212 | Grove - Temp&Humi Sensor(SHT31) | [Get One](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html) |
| 101020513 | Grove - Temperature, Humidity, Pressure and Gas Sensor (BME680) | [Get One](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) |

## Step 1: Flash Meshtastic Firmware

Make sure pre-flashed meshtastic firmware to XIAO ESP32S3 already. If haven't, please flash following [this instruction](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_meshtastic/#flash-firmware).

## Step 2: Resolder the pin header of the XIAO expansion board

In order to install the GNSS module at the bottom of the XIAO Expansion board through pin to pin connection, it is necessary to resolder the female header of the XIAO Expansion board and replace it with a female header equipped with male pins.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/120.png" alt="pir" width={400} height="auto" /></p>

## Step 3: Laser cut 3mm-acrylic casing

The dxf file provided for laser cutting.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/1.png" alt="pir" width={400} height="auto" /></p>

- [dxf file](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dxf)
- [dwg file](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dwg)

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
