---
title: 通过 XIAO ESP32C5 Zigbee 连接到 Home Assistant
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
createdAt: '2026-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/xiao_esp32c5_zigbee_homeassistant/
---

# 通过 XIAO ESP32-C5 Zigbee 连接到 Home Assistant

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_1_1.png" style={{width:800, height:'auto'}}/></div><br/>

由于 Zigbee 的低功耗、可靠性和易用性，将 Zigbee 设备集成到智能家居生态系统中变得越来越受欢迎。在本教程中，我们将指导您通过 Zigbee 功能将 **XIAO ESP32-C5** 连接到 **Home Assistant**。在本指南结束时，您将拥有一个工作演示，其中 XIAO ESP32-C5 充当可直接从 Home Assistant 仪表板控制的 Zigbee 设备。

本教程重点介绍了 Espressif 的 Zigbee SDK（Arduino）的使用，并演示了如何开发和集成您自己的 Zigbee 设备到 Home Assistant 中。

## 硬件准备

要跟随本指南，您需要以下设备：

1. **Home Assistant Green**：用于管理智能家居的专用 Home Assistant 硬件设备。
2. **Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E**：用于创建 Zigbee 网络和通信的 Zigbee 协调器。
3. **XIAO ESP32-C5**：通过 Espressif SDK 启用 Zigbee 功能的开发板。

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip

如果您手头没有 Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E，您也可以选择 [**Home Assistant Connect ZBT-2**](https://www.seeedstudio.com/Home-Assistant-Connect-ZBT-2-p-6573.html)。
:::

## 将 Zigbee 集成到 Home Assistant

我们将向您展示如何使用 XIAO ESP32-C5 作为 Zigbee 设备连接到 Home Assistant。

### 连接 ZBDongle-E

将 **Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E** 插入 USB 延长线。将延长线插入 **Home Assistant Green**。

:::caution
USB 3.0 端口和 USB 3.0 驱动器可能会对 2.4 GHz 协议造成干扰，包括 Home Assistant Connect ZBDongle-E 提供的协议。重要的是使用 USB 延长线，并将 Home Assistant Connect ZBDongle-E 远离可能的干扰源。
:::

**步骤 1.** 发现 Zigbee 设备

- Setting -> Devices & services

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_1.png" style={{width:800, height:'auto'}}/></div><br/>

-在集成下，您将找到 SONOFF Zigbee 3.0 USB Dongle Plus V2 设备，它就是 Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_2.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 2.** 添加 Zigbee 设备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_3.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 3.** 创建 Zigbee 网络

- 点击 Submit 后，系统会提示您选择 Zigbee 设备模式。选择在 Home Assistant 中创建 Zigbee 网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_4.png" style={{width:800, height:'auto'}}/></div><br/>

- 成功后，您将发现 Zigbee 设备已添加到 Configured 下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_5.png" style={{width:800, height:'auto'}}/></div><br/>

- ZBDongle-E 被设置为协调器，可以控制 Zigbee 终端设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_6.png" style={{width:800, height:'auto'}}/></div><br/>

### 烧录 Zigbee 示例

我们将使用 Arduino IDE 中的 `HA_On_Off_Light` Zigbee 示例进行演示。<br/>
如果您之前没有使用过 Arduino IDE，请参考 [Seeed Studio XIAO ESP32-C5 入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32c5_getting_started/#software) 开始使用。

**步骤 1.** 通过路径从 Arduino IDE 中选择示例：**File** -> **Examples** -> **Zigbee** -> **Zigbee_On_Off_Light**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_light.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 2.** 设置终端设备和分区方案

- 点击 **Tools** -> **Zigbee Mode** 并选择模式为 **Zigbee ED (End Device)**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_1.png" style={{width:800, height:'auto'}}/></div>

- 选择分区方案，转到 **Tools** -> **Partition Scheme** -> **Zigbee 8MB with spiffs**

XIAO ESP32-C5 的 FLASH 内存为 8MB。选择分区方案时，建议选择 **Zigbee 8MB with spiffs**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_2.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 3.** 修改 LED 引脚和名称

- 在示例中找到与引脚配置相关的代码。

```cpp
uint8_t led = RGB_BUILTIN;
```

- 在 XIAO ESP32-C5 中，板载用户 LED 对应引脚 GPIO27，需要进行修改。

```cpp
uint8_t led = 27;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_n2.png" style={{width:800, height:'auto'}}/></div><br/>

- 在 XIAO ESP32-C5 中，板载用户 LED 对应引脚 GPIO27，需要进行修改。

```cpp
zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

- 修改后

```cpp
zbLight.setManufacturerAndModel("XIAO-ESP32-C5", "ZBLightBulb");
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_n1.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 4.** 上传

将修改了引脚的示例代码上传到 XIAO ESP32-C5。

### 连接到 Zigbee 网络

将 XIAO ESP32-C5（配置为 Zigbee 终端设备）连接到在 Home Assistant 中创建的 Zigbee 网络。

**步骤 1.** 发现终端设备

- 将示例代码烧录到 XIAO ESP32-C5 后，它将自动加入 Zigbee 网络。打开集成页面，您将看到出现两个 Zigbee 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_7.png" style={{width:800, height:'auto'}}/></div><br/>

- 一个是协调器设备（连接到 Home Assistant Green 的 ZBDongle-E），另一个是终端设备（XIAO-ESP32-C5 ZBLightBulb）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
为了更快更稳定地加入 Zigbee 网络，您可以将包装中的 FPC 柔性天线连接到 XIAO ESP32-C5。
:::

**步骤 2.** 添加到仪表板

- 点击 **XIAO-ESP32-C5 ZBLightBulb** 设备并将其添加到仪表板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_9.png" style={{width:800, height:'auto'}}/></div><br/>

- 您可以在仪表板中找到 **XIAO-ESP32-C5 ZBLightBulb** 设备，在那里您可以向它发送控制命令。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_10.png" style={{width:800, height:'auto'}}/></div><br/>

### 效果展示

- 当 XIAO ESP32-C5 终端设备成功加入 Zigbee 网络时，它将在串口监视器中显示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_11.png" style={{width:800, height:'auto'}}/></div><br/>

- 实际效果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>

## 总结

Espressif 提供了多样化的 Zigbee 设备类型和广泛的 Zigbee SDK，使开发者能够轻松创建自己的 Zigbee 设备。通过遵循本教程，您已经学会了如何使用 Zigbee 将 XIAO ESP32-C5 集成到 Home Assistant 中，为您的智能家居生态系统添加自定义设备。

借助 Espressif Zigbee SDK 的灵活性，您可以开始为各种应用和功能构建自己的 Zigbee 设备，并将它们无缝添加到 Home Assistant 中进行集中控制。祝您构建愉快！

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
