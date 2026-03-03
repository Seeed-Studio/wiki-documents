---
description: 继电器扩展板 V1.0
title: 继电器扩展板 V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Relay_Shield_V1
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---

name: 继电器扩展板 V1.0
category: Discontinued
bzurl:
oldwikiname: Relay-Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: <https://www.research.net/r/Relay-Shield_V1-0>
sku: 103030015
tags:
--- -->

继电器扩展板是一个兼容Arduino的智能模块，配备4个机械继电器，提供了控制高电压的简便方法。每个通道的最大开关功率为35VDC 70W。它可以通过外部9V直流电源供电，直接由Arduino/Seeeduino通过数字IO口控制。配备XBee形式插座和315/433MHz射频模块接口，继电器扩展板可以远程控制，使其易于在机器人技术、工业控制、智能家居等领域使用。
**注意：** 注意扩展板上的引脚在与Arduino UNO连接时不应接触到Arduino UNO的USB连接器。
![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg)

## 特性 ##

- 兼容Arduino/Seeeduino、Arduino Mega和Seeeduino Mega

- 4个带光耦电路的机械继电器

- 配备螺丝孔，便于安装

- 重量轻

- 小尺寸

- 原生Arduino/Seeeduino兼容性

- 可扩展

## 规格参数 ##

|  项目|最小值|典型值|最大值|单位   |
|---|---|---|---|---|
|  **电压**|7|9|12|VDC     |
|  **电流**|8|/|250|mA    |
|   **开关电压**|/|/|35|VDC   |
| **开关电流**|/|/|2|A  |  
|   **频率响应**|-1|/|1|dB |  
|  **开关功率**|/|/|70|W |
|  **继电器寿命**|100,000|/|/|次  |
| **ESD接触放电**| ±4|||KV|
|**ESD空气放电**|±8  |  ||/|
|   **尺寸** |   80.0x58.0x21.2 |   |   | mm  |
|   **净重** |  31±2 |   |   |  g |

## 注意事项 ##

**
在[Arduino](/cn/Arduino)的USB连接器顶部贴2层电工胶带。这将防止继电器扩展板接触。
不要操作超过35V直流电压。
**

## 接口功能 ##

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/Relayshield_schematic.jpg)

**4组高电压连接通道**

端子1：

COM1- 公共引脚

NC1- 常闭，在这种情况下，当D0设置为低电平时NC1与COM1连接，当D0为高电平时断开；

NO1- 常开，在这种情况下，当D0设置为低电平时NO1与COM1断开，当D0为高电平时连接。

端子2-4与端子1类似，除了控制端口是D1-D3。

**9V直流电源连接**

端子和插座的功能相同，因为它们内部连接，您可以根据需要选择其中任何一个。

**IO控制4个板载继电器**

D0-D3这4个引脚可以直接与Arduino的引脚7-4连接，这样四个继电器就可以轻松地由Arduino控制。

**315/433MHz射频控制接口**

与GND和5V引脚一起，它们是315/433MHz射频编码器模块的接口（可从Seeed Studio单独购买），用于远程控制4个继电器。

**XBee形式插座，可直接由Seeed RFBee控制**

4个继电器可以通过RFBee的4个DIO端口直接由RFBee控制（可从Seeed Studio单独购买）。

**RFBee级联控制接口**

由于RFBee有12个DIO端口，可以通过一个RFBee控制另外2个继电器扩展板（另外8个继电器）。HUB1和HUB2是RFBee的引出端口（4个为一组），连接到级联继电器扩展板的315/433MHz射频接口。

## 使用方法 ##

### 与 Arduino/Seeeduino 配合使用 ###

继电器扩展板可以直接由 **Arduino** 控制

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithArduino.jpg)

步骤1. 将继电器扩展板插到 **Arduino** Duemilanove（或兼容）开发板上；
步骤2. 为 **Arduino** 提供 9v 直流电源；
步骤3. 下载[示例代码](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip)并在 [Arduino IDE](https://arduino.cc/en/Main/Software) 中运行。

如果通过 USB 连接为 Arduino 供电，您还必须为继电器扩展板提供 9v 直流电源，否则继电器无法切换。

继电器 1-4 可以通过将 Arduino 端口 4-7 设置为输出，并执行 digitalWrite(portNumber,HIGH) 来激活。

使用 COMx 和 NCx（常闭）或 NOx（常开）连接来切换受控设备的电源。

### 与 [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) 配合使用 ###

#### 一个 RFBee 控制一个[继电器扩展板](https://seeeddoc.github.io/Relay_Shield/) ####

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg)

步骤1. 下载从机和主机 RFBee 的 [Arduino 代码](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip)。

步骤2. 将从机 RFBee 插到继电器扩展板上。

步骤3. 为继电器扩展板提供 9VDC 电源。

步骤4. 通过 [UartSBee](https://seeeddoc.github.io/UartSBee/) 或其他适配器为主机 RFBee 提供 3.3V 电源。

#### 一个 RFBee 控制 3 个继电器扩展板 ####

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/MutiRelay.jpg)

步骤1. 下载从机和主机 RFBee 的 [Arduino 代码](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip)。

步骤2. 将从机 RFBee 插到继电器扩展板上。

步骤3. 通过将 315/433MHz RF 引脚连接到 hub1 和 hub2，将第二个和第三个继电器扩展板连接到母板。（注意：5VDC 和 GND 也需要连接）。

步骤4. 为继电器扩展板提供 9VDC 电源。（注意：扩展的继电器扩展板不需要额外的电源供应）。

步骤5. 通过 [UartSBee](https://seeeddoc.github.io/UartSBee/) 或其他适配器为主机 RFBee 提供 3.3V 电源。

### 与 [315/433MHz RF 模块](https://www.seeedstudio.com/depot/315mhz-rf-link-kits-with-encoder-and-decoder-p-151.html?cPath=139_140)配合使用 ###

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithRF.jpg)

步骤1. 将接收器插到继电器扩展板上并焊接。

步骤2：为继电器扩展板提供 9VDC 电源。

步骤3：[控制发射器](https://seeeddoc.github.io/315Mhz_RF_link_kits-with_encoder_and_decoder/#Using_with_Arduino_without_Encoding_and_Decoding)。

## 版本跟踪 ##

<table>
  <thead>
    <tr>
      <th>版本</th>
      <th>描述</th>
      <th>发布日期</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Relay shield V1.0</td>
      <td>初始公开发布</td>
      <td>03/31/2010</td>
    </tr>
    <tr>
      <td>Relay shield V1.1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Relay shield V1.2</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Relay shield V1.3</td>
      <td>
        1. 更改 7805 的封装<br/>
        2. 使端子不接触 Arduino 的 USB 连接器<br/>
        3. 与 Arduino 配合使用时增加多电源供应的保护<br/>
        4. 增加连接到继电器的导线厚度<br/>
        5. 将丝印更改到电路板底面<br/>
        6. 添加开源硬件标志
      </td>
      <td>12/01/2011</td>
    </tr>
  </tbody>
</table>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[EAGLE]**  [继电器扩展板 Eagle 文件](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip)

- **[PDF]**  [继电器扩展板原理图](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay_shield_Schematic.pdf)

- **[PDF]**[继电器扩展板 PCB](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay%20shield.pdf)

- **[CODE]**  [Arduino 继电器扩展板演示代码](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip)

- **[CODE]**  [RFBee 控制继电器扩展板的 Arduino 代码](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip)

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