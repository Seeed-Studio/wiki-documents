---
description: 介绍如何使用 XIAO ESP32C6 的 Zigbee 功能，并通过 Zigbee 和 zbt-1 连接到 Home Assistant。
title: 通过 XIAO ESP32C6 Zigbee 连接到 Home Assistant
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/0.webp
slug: /cn/xiaoc6_zigbee_led_ha
last_update:
  date: 01/21/2025
  author: Citric
---

# 通过 XIAO ESP32C6 的 Zigbee 连接到 Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/1.png" style={{width:1000, height:'auto'}}/></div>

由于 Zigbee 的低功耗、可靠性和易用性，将 Zigbee 设备集成到智能家居生态系统中变得越来越受欢迎。在本教程中，我们将指导您通过 Zigbee 功能将 **XIAO ESP32C6** 连接到 **Home Assistant**。在本指南结束时，您将拥有一个工作演示，其中 XIAO ESP32C6 充当 Zigbee 设备，可以直接从 Home Assistant 的仪表板进行控制。

本教程重点介绍了 Espressif 的 Zigbee SDK（Arduino）的使用，并演示了如何开发和集成您自己的 Zigbee 设备到 Home Assistant 中。

## 所需材料

要跟随本指南，您需要以下物品：

1. **Home Assistant Green**：用于管理智能家居的专用 Home Assistant 硬件设备。
2. **Home Assistant Connect ZBT-1**：一个 Zigbee 协调器，用于启用 Zigbee 网络创建和通信。
3. **XIAO ESP32C6**：通过 Espressif SDK 启用 Zigbee 功能的开发板。

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 分步指南

:::tip
前两个步骤参考了 Home Assistant Connect ZBT-1 的官方教程，您也可以通过此链接阅读其教程内容。

[Home Assistant Connect ZBT-1 教程](https://connectzbt1.home-assistant.io/new-zigbee/)
:::

### 步骤 1. 在 Home Assistant Green 上安装 Connect ZBT-1

将 Home Assistant Connect ZBT-1 插入 USB 延长线。将延长线插入您的 Home Assistant Green。

:::caution
USB 3.0 端口和 USB 3.0 设备可能会对 2.4 GHz 协议造成干扰，包括 Home Assistant Connect ZBT-1 提供的协议。使用 USB 延长线并将 Home Assistant Connect ZBT-1 远离可能的干扰源非常重要。
:::

1. 在 Home Assistant 界面中导航到 **设置**。
2. 转到 **设备与服务** 并找到 Zigbee 集成。
3. Connect ZBT-1 现在应该已被发现。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/2.png" style={{width:1000, height:'auto'}}/></div>

4. 选择 **添加**。
5. 在对话框中，选择 **Zigbee**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/3.png" style={{width:600, height:'auto'}}/></div>

6. 选择 **提交** 以完成 Connect ZBT-1 集成的设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/4.png" style={{width:600, height:'auto'}}/></div>

7. 您的 Connect ZBT-1 现在是一个 Zigbee 协调器。

### 步骤 2. 使用 Connect ZBT-1 创建新的 Zigbee 网络

1. 在 Home Assistant 界面中导航到 **设置**。  
2. 转到 **设备与服务** 并找到 Zigbee 集成。  
3. Connect ZBT-1 将显示在您的 Zigbee Home Automation 集成中。选择 **添加**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

4. 确认后，选择 **提交**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/6.png" style={{width:400, height:'auto'}}/></div>

5. 选择 **创建网络**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/7.png" style={{width:350, height:'auto'}}/></div>

4. 按照提示初始化 Zigbee 协调器并准备与 Zigbee 设备配对。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/8.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 为 XIAO ESP32C6 刷入 Zigbee 示例程序

1. **设置 Arduino IDE**：

- 安装最新版本的 Arduino IDE，并通过包含 Espressif 开发板包来添加对 XIAO ESP32C6 的支持。

:::note
如果您是第一次使用 XIAO ESP32C6，请阅读下面的 wiki 链接以正确添加开发板。

[XIAO ESP32C6 入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32c6_getting_started/)
:::

2. **加载 Zigbee_On_Off_Light 示例**：

- 请选择正确的开发板型号：**XIAO_ESP32C6**。
- 从 Arduino IDE 打开 `Zigbee_On_Off_Light` 示例。

:::tip
我们建议您使用最新的 esp32-arduino 开发板包以获得最新和最稳定的 Zigbee 示例程序。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/9.png" style={{width:800, height:'auto'}}/></div>

- 在此示例中，我们将使用 XIAO ESP32C6 上的板载 LED 单色灯，因此我们需要对程序中的 LED 引脚进行更改。修改代码，将 `RGB_BUILTIN` 替换为 `LED_BUILTIN` 以使用板载 LED 指示器。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/10.png" style={{width:800, height:'auto'}}/></div>

3. **配置 Zigbee 设置**：

- 将 Zigbee 模式设置为 **ZIGBEE_MODE_ED**（终端设备）。  
- 调整 Zigbee 的分区方案：  
    导航到 `工具 -> 分区方案` 并选择 **Zigbee 4MB with spiffs**。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/11.png" style={{width:700, height:'auto'}}/></div>

4. **上传程序**：

- 通过 USB-C 线缆将 XIAO ESP32C6 连接到您的计算机。  
- 编译并将修改后的示例程序上传到 XIAO ESP32C6。
- 如果 XIAO 工作正常，您应该看到如下所示的串口消息。如果您看到 XIAO 不断重启，请检查 Zigbee 设置是否正确或更新开发板包的版本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/12.png" style={{width:700, height:'auto'}}/></div>

### 步骤 4. 在 Home Assistant 中发现 XIAO ESP32C6

1. 在 Home Assistant 界面中，导航到 **设置 -> 设备与服务**。  
2. 选择 Zigbee 集成（名称：ZHA）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/13.png" style={{width:800, height:'auto'}}/></div>

3. 点击 **Nabu Casa HA Connect ZBT-1**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/14.png" style={{width:1000, height:'auto'}}/></div>

4. 在 Connect ZBT-1 的设备详情页面内，您可以看到 **通过此设备添加设备**，请点击它进入 Zigbee 的设备查找和配对页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

5. 稍等片刻，XIAO ESP32C6 将出现在已发现的 Zigbee 设备列表中。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/16.png" style={{width:1000, height:'auto'}}/></div>

您可以在此页面为其设置名称和位置。

6. 然后您可以在 ZHA 的设备页面上找到此设备，并将其实体添加到仪表板中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/17.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 5. 将 XIAO ESP32C6 添加到仪表板

1. 一旦发现 XIAO ESP32C6，将其添加到您的 Home Assistant 仪表板中。  
2. 现在您可以直接从 Home Assistant 控制 XIAO ESP32C6（例如，切换板载 LED）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/18.png" style={{width:1000, height:'auto'}}/></div>

## 结论

Espressif 提供了多样化的 Zigbee 设备类型和广泛的 Zigbee SDK，使开发者能够轻松创建自己的 Zigbee 设备。通过遵循本教程，您已经学会了如何使用 Zigbee 将 XIAO ESP32C6 集成到 Home Assistant 中，为您的智能家居生态系统添加自定义设备。  

凭借 Espressif Zigbee SDK 的灵活性，您可以开始为各种应用和功能构建自己的 Zigbee 设备，并将它们无缝添加到 Home Assistant 中进行集中控制。祝您构建愉快！

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
