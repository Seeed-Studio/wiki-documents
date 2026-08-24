---
description: Get_Started_with_SenseCAP_Combo
title: SenseCAP Combo 入门指南
keywords:
  - SenseCAP Combo
  - 数据记录仪
image: https://files.seeedstudio.com/wiki/SenseCAP/Combo/SenseCAP_Combo_5in1_4G.webp
slug: /get_started_with_sensecap_combo
sku: 100035616
last_update:
  date: 8/23/2026
  author: Janet
createdAt: '2026-08-23'
updatedAt: '2026-08-23'
url: https://wiki.seeedstudio.com/cn/get_started_with_sensecap_combo/
---

# SenseCAP Combo 入门指南

本章节将向你展示如何快速完成 SenseCAP Combo 5 合 1 4G 传感器的安装，并将其连接到 SenseCAP 云平台。

:::tip note
SenseCAP Combo 5 合 1 4G 传感器使用 4G Cat.1 连接和 MQTT 协议，将数据上传到 SenseCAP 云平台或你自己的第三方 MQTT 服务器。请确保你在部署区域内拥有一张有效的 Micro SIM 卡（3FF），并具备蜂窝数据网络覆盖。
:::

### 工作环境

SenseCAP Combo 设计用于在特定温度范围内可靠运行，以确保稳定性能和电池安全。请确保设备在以下温度范围内使用和充电，以避免性能下降或电池问题。

| 参数 | 规格 |
|---------|---------------|
| 工作温度 | 0°C ~ 40°C |
| 充电温度 | 0°C ~ 40°C |
| 工作湿度 | 0 ~ 100% RH（无冷凝） |

:::caution note
设备的工作温度受所配电源适配器限制，该适配器支持的工作温度范围为 0°C 至 40°C。

电源适配器仅适用于室内使用。请勿将电源适配器直接暴露在室外环境中。电源适配器必须安装在防水机箱或电气柜内，以确保得到适当防护。
:::
<br />

## 安装 SIM 卡

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/14.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

1. 打开标有 “SIM” 的橡胶盖，并抬起金属卡托。
2. 将 SIM 卡插入卡槽，用金属卡托固定好，然后将橡胶盖严密盖好。


:::caution note
安装 SIM 卡后，请确保橡胶盖完全密封，否则可能会影响设备的防水性能。
:::

<br />

## 传感器连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/15.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

设备提供一个 RS-485 接口，用于连接外部 Modbus-RTU 传感器。

1. 拧下接口的防护盖，将传感器连接到 RS-485 接口。
2. 连接传感器后，请确保航空插头已完全拧紧。如果接口未使用，也必须拧紧，以防进水和设备损坏。

:::caution note
1. 请在设备上电 **之前** 连接传感器，否则可能导致传感器无法被检测到。如遇此情况，请重启设备。
2. 使用分线器时，请勿将具有相同 Modbus 地址的传感器连接到同一个 RS-485 接口。
3. 如果连接 12V 传感器，设备必须由外部直流电源供电。
:::

<br />

## 配置到 SenseCAP 云平台

在部署前，请确保设备可以正常工作并上传数据。

### 步骤 1. 下载 SenseCraft APP

从 App Store 或 Google Play 下载 SenseCraft APP 来管理你的设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### 步骤 2. 创建新账号

请通过 SenseCraft APP 或在 PC 上访问 SenseCAP 云平台创建账号：[https://sensecap.seeed.cc/portal](https://sensecap.seeed.cc/portal)

1. 点击 "Register"，输入你的邮箱并提交。系统会发送一封验证邮件。
2. 打开来自 "SenseCAP" 的邮件，点击链接并完成注册。
3. 打开应用，选择 "Global Server"，输入你的账号和密码并登录。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/login-page.PNG" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

### 步骤 3. 绑定设备

1. 进入 "Devices" 页面，点击右上角的 "+" 图标。
2. 扫描设备标签上的二维码以绑定设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/add-new.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

<br />

## 设备上电（指示灯状态）

上电前，请确保传感器和 SIM 卡已安装完毕。

:::caution note
安装传感器时，请确保设备处于断电状态，否则可能导致外部传感器无法被检测到。
:::

按下设备底部的金属按键，红色指示灯会亮起。等待约 3 分钟，设备即可上线。（具体时间取决于传感器的数量和类型，传感器越多所需时间越长。）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/1.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

:::note
1. 设备内置太阳能板用于充电。
2. 使用 12V 传感器时，需要外接适配器。使用适配器时请确保做好防水保护。
:::

<br />

## 查看数据和状态

你可以通过 APP 或 PC 查看设备数据和状态。

### 通过 SenseCraft APP

设备绑定并上线后，可直接在 APP 中查看数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/2.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### 通过 SenseCAP Portal

访问 [https://sensecap.seeed.cc](https://sensecap.seeed.cc) 并登录。点击 "Data" 查看数据是否成功上传。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/3.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

<br />

## SenseCAP API

SenseCAP API 供用户管理物联网设备和数据使用。它包含 3 种 API 方式：HTTP 协议、MQTT 协议和 Websocket 协议。

- 使用 HTTP API，用户可以管理 LoRa 设备，获取原始数据或历史数据。
- 使用 MQTT API，用户可以通过 MQTT 协议订阅传感器的实时测量数据。
- 使用 Websocket API，用户可以通过 Websocket 协议获取传感器的实时测量数据。

更多详情请查看 [API User Guide](https://sensecap-docs.seeed.cc/)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/16.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

<br />

## 通用设置

如需配置服务器地址、添加传感器或修改上报间隔，请使用 PC 配置工具：

- 下载工具：[SenseCAP Sensor Hub Configuration Tool NG](https://github.com/Seeed-Solution/SenseCAP-Sensor-Hub-Configuration-Tool-NG/releases)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/4.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

- 驱动（首次使用）：[CH341 USB Driver](https://wch-ic.com/downloads/CH341SER_EXE.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/5.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### MQTT 服务器配置

1. 使用 USB Type-C 线将设备连接到 PC。
2. 打开工具，选择 COM 端口，勾选 "Enter configuration mode automatically on device's booted"，点击 "Connect"，然后按下金属按键。（“General Settings” 和 “Sensor Settings” 按钮会变为深蓝色。）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/6.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

3. 点击 "General Settings"。调试信息会显示在右侧面板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/7.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

4. 点击输入区域并输入：**b**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/8.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

5. 输入命令：**2** 后按回车。这表示你已切换到新的云平台 2。

:::note
- **1** 为 SenseCAP 云平台（默认）
- **2** 为用户的第三方 MQTT 服务器
- **3** 为 SenseCAP 私有化部署
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/9.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

6. 点击 "General Settings"，输入 MQTT 服务器地址、端口、用户名和密码，然后点击 "Write"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/10.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### 数据上报间隔 & CO₂ 上报间隔

- **Reporting interval：** 适用于除 CO₂ 以外的所有传感器
- **CO₂ interval：** 为上报间隔的倍数

设置完成后点击 "Write"。

:::note
上报间隔过短可能导致太阳能充电速率低于放电速率，从而使设备无法完成充电。
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/11.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### APN 配置

如有需要，输入 APN、用户名和密码。默认为自动。

### 导出缓存数据

点击 "Export Cache Data" 导出所有历史数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/12.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### 验证数据是否上传到服务器

配置服务器后：

1. 关闭工具
2. 拔下 USB 线
3. 按下金属按键重启设备

等待几分钟，然后使用 MQTT 订阅工具，按照主题格式订阅消息，查看是否可以接收到设备数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/13.png" alt="开始使用 SenseCAP Combo" width={800} height="auto" /></p>


<br />

## 故障排查

### 云平台上的传感器通道状态异常

- 通常是由于传感器在运行过程中被断开连接导致的。

### [ERROR] No sensor found. Is the sensor connected?

请检查以下内容：

- 确认传感器接线顺序（正/负/RS485 A、B）是否正确；
- 确保传感器 Modbus 地址与“Sensor Settings”中设置的地址一致；
- 确认传感器电源类型配置是否正确；
- 确保预热时间、启动时间和响应超时时间满足传感器要求；
- 检查测量数值的功能码和寄存器配置是否正确；

### [ERROR] RS485 err code: XX

部分传感器需要预热时间。如果在预热时间结束前发起通信，传感器会返回功能码错误。

在测试传感器时，第一步是检查传感器是否存在。此检查只需要等待启动时间，而不需要等待预热时间。例如，如果传感器启动时间为 1 秒，预热时间为 5 分钟，而数据采集单元在给传感器上电后仅等待 1 秒就尝试通信，则会收到功能码错误。窗口会显示“[ERROR] rs485 err code”。在采集数据时，会在通信前等待预热时间，以确保数据采集正常进行。

<br />

## 安装与注意事项

### 在低温环境下使用内置电池

- 放电范围：0°C ~ 50°C
- 充电范围：0°C ~ 40°C

请注意，由于设备内置锂电池，在使用太阳能供电或适配器时：

1. 如果环境温度持续低于 0 °C，电池将保持不充电状态，直到环境温度升高到 0 °C 以上。
2. 在停止充电期间，如果电池被完全耗尽，设备将无法通过太阳能或适配器运行。需要等待环境温度升高到 0 °C 以上，并且锂电池充电至安全电量后，设备才能恢复正常工作。
<br />

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>