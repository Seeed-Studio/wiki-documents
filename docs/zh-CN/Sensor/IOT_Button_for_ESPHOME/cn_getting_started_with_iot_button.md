---
description: Seeed Studio IoT 按钮入门指南
title: Seeed Studio IoT 按钮入门指南
keywords:
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /cn/getting_started_with_seeed_iot_button
last_update:
  date: 04/08/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

IoT 按钮是一款多功能智能开关，通过 ESPHome（Wi-Fi）和 Zigbee 提供双重 Home Assistant 集成。由 ESP32-C6 驱动，具有可定制的 RGB LED 指示器、多种按压模式的可编程事件触发器、USB-C 充电和灵活的安装选项 - 为直观的智能家居控制提供所需的一切。

本指南将引导您设置 IoT 按钮，无论您拥有的是 **V1 硬件（出厂预装 ESPHome 固件）** 还是 **V2 硬件（出厂预装 Zigbee 固件）**。

### 特性

-   **Home Assistant 就绪**：通过 ESPHome 或 Zigbee 家庭自动化（ZHA）集成实现无缝集成。
-   **一个开关，可定制操作**：支持单击、双击和长按操作来触发不同的自动化。
-   **可靠的电源供应**：由标准 18650 可充电电池供电，配有便捷的 USB-C 充电端口。
-   **简易安装解决方案**：紧凑设计，可放置在任何地方或安装以便于访问。
-   **开放定制**：两个硬件版本都支持刷写 ESPHome 或 Zigbee 固件，让您选择最适合需求的协议。

## 硬件概述

在开始之前，了解产品的一些基本参数是非常重要的。下表提供了 IoT 按钮 V1 和 V2 版本特性的信息。

<div class="table-center">
	<table align="center">
		<tr>
			<th>参数</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>MCU</td>
			<td>Espressif ESP32-C6</td>
		</tr>
		<tr>
			<td>闪存</td>
			<td>4MB</td>
		</tr>
        <tr>
			<td>LED</td>
			<td>用户 RGB LED：WS2812B（GPIO19，需要启用 GPIO18）<br />充电 LED：绿色<br />用户 LED（蓝色）：GPIO2（V1）/ GPIO3（V2）<br />低电量 LED（红色）：GPIO14（<b>仅 V2</b>）</td>
		</tr>
        <tr>
			<td>无线</td>
			<td>2.4GHz Wi-Fi<br />Zigbee 3.0</td>
		</tr>
        <tr>
			<td>电池</td>
			<td>3.6V 锂离子 18650 可充电电池</td>
		</tr>
        <tr>
			<td>电池监控</td>
			<td>用于电压读取的 ADC（<b>仅 V2</b>，GPIO1）</td>
		</tr>
        <tr>
			<td>充电接口</td>
			<td>USB Type-C</td>
		</tr>
        <tr>
			<td>电池保护</td>
			<td>反极性保护</td>
		</tr>
        <tr>
			<td>固件更新</td>
			<td>支持 OTA（空中升级）</td>
		</tr>
        <tr>
			<td>尺寸</td>
			<td>92x32x25 mm</td>
		</tr>
	</table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/4.png" style={{width:800, height:'auto'}}/></div>

## 开始使用

### 步骤 1：初始设置

当您首次收到 IoT Button 时，在使用前执行初始激活步骤是必要的。这适用于 **V1 和 V2 硬件版本**。

1.  使用标准的 5V USB Type-C 数据线将 IoT Button 连接到电源（如 USB 充电器或计算机）。
2.  **这个初始电源连接至关重要，因为它会激活内置电池的保护电路。**
3.  **如果没有这个激活步骤，设备将无法在电池供电下正常工作。**

:::note
确保使用符合标准的 5V USB Type-C 线缆进行激活过程。使用非标准线缆可能导致激活不当。
:::

### 步骤 2：选择您的连接方式

IoT Button 提供两种主要方式连接到 Home Assistant。您的选择将取决于您拥有的硬件版本或您偏好的协议。

-   **IoT Button V1** 预装了 **ESPHome** 固件。请遵循 **方法 1**。
-   **IoT Button V2** 预装了 **Zigbee** 固件。请遵循 **方法 2**。

如果您是高级用户，可以在任一硬件版本上刷写任一固件。详情请参阅"高级用法"部分。

---

### 方法 1：ESPHome（Wi-Fi）集成

此方法是 **V1 硬件** 的默认方式，适用于希望通过 Wi-Fi 将 IoT Button 连接到 Home Assistant 的用户。

#### 1. 设置 Home Assistant

为了获得最佳性能，建议在 Raspberry Pi 或 Home Assistant Green 等设备上安装 [Home Assistant OS](https://www.home-assistant.io/installation/)。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"3"}>购买 Home Assistant Green</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-selectable-CM4-p-5680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"3"}>购买 Home Assistant Yellow</font></span></strong>
    </a>
</div><br />

Home Assistant 运行后，确保从附加组件商店安装并启动 **ESPHome 附加组件**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/5.png" style={{width:1000, height:'auto'}}/></div>

#### 2. 刷写/更新 ESPHome 固件（如有必要）

您的设备已预装固件。只有在您想要更新到[最新固件版本](https://github.com/Seeed-Studio/xiao-esphome-projects/releases)或现有固件损坏时才需要执行此步骤。

<Tabs>
<TabItem value='Web Tool'>

最简单的方法是使用我们的 [**XIAO ESPHome Projects 固件刷写器**](https://gadgets.seeed.cc/)。

1.  通过 USB 线缆将您的 IoT Button 连接到计算机。
2.  在刷写器页面上，找到"Seeed Studio IoT Button"并点击 **INSTALL**。
3.  从弹出对话框中选择正确的 COM 端口。
4.  浏览器将自动下载最新的 ESPHome 固件并刷写到您的设备。

</TabItem>
<TabItem value='ESPHome Web'>

或者，您可以使用官方的 [ESPHome Web](https://web.esphome.io/) 工具。

1.  从 [GitHub Releases 页面](https://github.com/Seeed-Studio/xiao-esphome-projects/releases)下载最新的 `*.factory.bin` 固件文件。
2.  将 IoT Button 连接到您的 PC。
3.  访问 [ESPHome Web](https://web.esphome.io/) 页面，点击 **CONNECT**，并选择正确的 COM 端口。
4.  点击 **INSTALL** 并选择您下载的 `.bin` 文件。

</TabItem>
</Tabs>

#### 3. 连接到 Wi-Fi 和 Home Assistant

1.  刷写后，IoT Button 将创建一个名为 `seeedstudio-iot-button` 的 Wi-Fi 接入点。
2.  从您的手机或计算机连接到此 Wi-Fi 网络。
3.  应该会自动打开强制门户。如果没有，请在浏览器中导航到 `192.168.4.1`。
4.  选择您的家庭 Wi-Fi 网络（SSID）并输入密码。按钮随后将连接到您的网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

#### 4. 在 Home Assistant 中添加设备

一旦 IoT Button 与您的 Home Assistant 服务器在同一网络上，它应该会被自动发现。

1.  导航到 **设置 > 设备与服务**。
2.  在"已发现"部分下，您应该看到 `Seeed Studio IoT Button`。
3.  点击 **配置**，然后 **提交**，并将设备分配到一个区域（例如，客厅）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

#### 5. 使用 ESPHome 创建自动化

ESPHome 固件将不同的按压模式作为单独的开关公开。

1.  转到 **设置 > 自动化与场景** 并点击 **创建自动化**。
2.  对于 **触发器**，选择 `设备` 并选择您的 IoT Button。
3.  从列表中选择触发器类型，例如：
    *   `单击动作`
    *   `双击动作`
    *   `长按动作`
4.  对于 **动作**，选择您想要控制的设备或服务（例如，`light.toggle`）。
5.  保存自动化。

---

### 方法 2：Zigbee 集成

此方法是 **V2 硬件** 的默认方式，适用于希望将 IoT Button 连接到 Zigbee 网状网络的用户。

#### 1. 在 Home Assistant 中设置 Zigbee

在配对之前，您需要将 Zigbee 协调器连接到您的 Home Assistant 实例。

1.  **安装 Zigbee 协调器**：将协调器（如 [Home Assistant SkyConnect](https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html)）连接到您的服务器。
2.  **设置 Zigbee Home Automation (ZHA)**：
    -   转到 **设置 > 设备与服务**。
    -   点击 **添加集成** 并搜索 **Zigbee Home Automation**。
    -   按照提示使用您的协调器设置 ZHA。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

#### 2. 将 IoT Button 与 Home Assistant 配对

1.  在 Home Assistant 中，导航到 **Zigbee Home Automation** 集成页面。
2.  点击 **Add Device** 将您的协调器置于配对模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

3.  按一次 IoT Button 上的按钮来唤醒它并启动配对。
    -   如果没有配对成功，设备可能已进入睡眠状态。请再次按下按钮。
    -   要强制配对，请按住按钮 **超过 5 秒**。这将触发恢复出厂设置并将设备直接置于配对模式。RGB LED 将闪烁以确认。
4.  Home Assistant 应该会发现设备为 **Seeed Studio IoT_Button**。
5.  设备将显示多个实体：一个用于实时状态的二进制传感器和几个用于不同点击动作的开关。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

#### 3. 使用 Zigbee 创建自动化

配对完成后，您可以基于按钮的动作创建自动化。

1.  转到 **Settings > Automations & Scenes** 并点击 **CREATE AUTOMATION**。
2.  对于 **Trigger**，选择 `Device` 并找到您的 IoT Button。
3.  ZHA 将点击作为设备动作公开。从列表中选择所需的触发器，例如：
    -   `"remote_button_short_press"`
    -   `"remote_button_double_press"`
    -   `"remote_button_long_press"`
4.  配置您想要执行的 **Action**。
5.  保存自动化。

在 Home Assistant YAML 中使用 **双击** 切换灯光的示例自动化：

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

## 高级用法：切换固件

IoT Button 的关键特性之一是其灵活性。您可以在 **V1 或 V2 硬件** 上在 ESPHome 和 Zigbee 固件之间切换。

- （不推荐）**切换到 ESPHome**：如果您的按钮正在运行 Zigbee 固件而您想使用 Wi-Fi，只需按照 **方法 1，步骤 2** 中的刷写说明来安装 ESPHome 固件。

- **切换到 Zigbee**：如果您的按钮正在运行 ESPHome 而您想加入 Zigbee 网络，您需要[使用 Arduino IDE 编译并刷写 Zigbee 固件](https://wiki.seeedstudio.com/cn/seeed_iot_button_with_zigbee/)。刷写后，按照 **方法 2** 中的配对步骤进行操作。


## 资源

- **[GITHUB]** [Seeed IoT Button Github 仓库](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PDF]** [Seeed IoT Button 原理图 PDF](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Seeed IoT Button 原理图和 PCB](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

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