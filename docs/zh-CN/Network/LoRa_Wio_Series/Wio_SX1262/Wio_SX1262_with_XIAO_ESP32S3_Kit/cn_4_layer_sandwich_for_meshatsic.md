---
description: 基于 XIAO ESP32S3 & Wio-SX1262 套件、XIAO 扩展板、grove 传感器和 L76K GNSS 模块的 DIY meshtastic 套件，配有亚克力外壳。
title: Meshtastic 4层三明治套件
image: https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg
slug: /cn/4_layer_sandwich_for_meshtastic
sidebar_position: 6
last_update:
  date: 12/13/2024
  author: Evelyn Chen
---

# DIY 4层三明治 Meshtastic 套件

基于 XIAO ESP32S3 & Wio-SX1262 套件开发的全功能 meshtastic 节点。这个类似 meshtastic 套件的4层三明治结构以 xiao 扩展板为基础。通过 grove 接口和引脚对引脚接口，它支持 meshtastic 固件支持的各种可扩展模块。它还支持 I2C 通信协议，包括可控环境照明、遥测传感器、环境传感器和 GPS 模块。通过 meshtastic 通信技术，可以轻松设置模块化设计和功能应用。此外，它可以通过 JST 电池连接器连接外部 3.7V 电池来实现移动节点。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg" alt="pir" width={600} height="auto" /></p>

## 硬件准备

| SKU | 产品名称 |
| ---- | ---- |
| 102010611 | XIAO ESP32S3 & Wio-SX1262 套件|
| 103030356 | XIAO 扩展板|
| 110010024 | XIAO 扩展板亚克力外壳 |
| 109100021 | GNSS 模块，采用 Quectel L76K |
| 101020513 | Grove - 温度、湿度、压力和气体传感器 (BME680) |
|  | 403040-450mA 带 JST 连接器的锂聚合物电池 |

:::note

1. GNSS 模块需要对其前代产品的冲突引脚进行修改，以便能够以引脚对引脚的方式连接到 XIAO ESP32S3 模块。因此，请购买 **2024年12月22日** 之后新进货的 GNSS 模块。
2. 提供了亚克力外壳的 DXF 文件。您可以使用 3mm 厚的亚克力板自行切割和组装。

:::

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262 套件</th>
      <th>XIAO 扩展板</th>
      <th>XIAO 扩展板亚克力外壳</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110010024_preview-08.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>GNSS 模块，基于 Quectel L76K</th>
      <th>Grove - 温度、湿度、压力和气体传感器 (BME680)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-l76k-gnss-module-for-seeed-studio-xiao-feature.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar896611_img_0076a.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

除了上述模块外，该套件还支持以下grove模块，请根据您自己的需求购买。

额外支持的模块：

| SKU | 产品名称 | 购买链接|
| ---- | ---- |---- |
| 101020932 | Grove - 温湿度传感器 V2.0 (DHT20) / 升级版 DHT11/ I2C 接口 | [购买](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) |
| 101020192 | Grove - 气压传感器 (BMP280) | [购买](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html) |
| 101020193 | Grove - 温湿度气压传感器 (BME280) | [购买](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) |
| 101020556 | Grove - I2C 高精度温度传感器(MCP9808) | [购买](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) |
| 101020212 | Grove - 温湿度传感器(SHT31) | [购买](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html) |
| 101020513 | Grove - 温度、湿度、压力和气体传感器 (BME680) | [购买](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) |

## 步骤 1：刷写 Meshtastic 固件

确保已经为 XIAO ESP32S3 预刷写了 meshtastic 固件。如果还没有，请按照[此说明](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_for_meshtastic/#flash-firmware)进行刷写。

## 步骤 2：重新焊接 XIAO 扩展板的排针

为了通过引脚对引脚连接在 XIAO 扩展板底部安装 GNSS 模块，需要重新焊接 XIAO 扩展板的母排针，并将其替换为带有公针的母排针。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/120.png" alt="pir" width={400} height="auto" /></p>

## 步骤 3：激光切割 3mm 亚克力外壳

提供用于激光切割的 dxf 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/1.png" alt="pir" width={400} height="auto" /></p>

- [dxf 文件](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dxf)
- [dwg 文件](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dwg)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
