---
description: 使用 SenseCraft 快速且无代码启动
title: 使用 SenseCraft 快速且无代码启动
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1100-quickstart
last_update:
  date: 2023/1/12
  author: shuxu hu
---

# 使用 SenseCAP K1100 快速入门 - 传感器原型套件

## 简介

**SenseCAP K1100 - 传感器原型套件** 是 Seeed Studio 将 LoRa® 通信技术和边缘智能产品的精华浓缩于一体，为用户提供最简单的 LoRa® 和物联网应用部署和掌握方式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/004(1).jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

我们自豪地向您推出 **SenseCraft**，它让用户能够以最短的时间和最低的动手成本体验将数据发送到云端的更好方式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/step.png" /></div>

这得益于我们完全自主设计的 **SenseCAP** 平台。SenseCAP 提供了一个易于使用的云平台。用户可以通过 **SenseCAP Mate App** 扫描二维码，将设备绑定到相应的账户，以便在 LoRaWAN® 网络覆盖环境中管理设备，并在 SenseCAP Portal 上查看传感器节点数据。SenseCAP Portal 提供 API，用户可以基于 Portal 上的数据进一步开发。

如果您暂时没有 LoRaWAN® 覆盖环境，也不用担心，您可以在 WiFi 和 LoRa® 之间自由切换，还可以通过 WiFi 将数据传输到 **Ubidots**/**Microsoft Azure IoT Central** 进行进一步的数据处理。

我们迫不及待地想与您分享我们当前的项目进展，并欢迎所有用户体验我们的项目！

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供了通过 SenseCAP 系列的坚固 [工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) 扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强、CO2、EC 和 8 合 1 气象站的传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>SenseCAP 工业传感器</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录仪</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光强</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody>
</table>

## 概述

SenseCAP K1100 套件的一个重要功能是物联网（IoT）功能。在开始之前，有必要了解其实现逻辑。

总结来说，我们为用户提供了两种体验物联网的路径，一种是 LoRa®，另一种是 WiFi。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/lora.png" /></div>

如果您想使用 LoRa®，那么您需要提前准备一个合适的 LoRa® 网关，并通过连接到 LoRaWAN® 的 Grove Wio E5 模块，将数据连接到 SenseCAP 平台。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/wifi.png" /></div>

如果您想使用 WiFi，那么您需要确保环境中有稳定的 WiFi 网络覆盖。只需在配置文件中输入您的 WiFi 名称和密码，以及 IoT 平台提供的密钥等信息，即可实现卓越的物联网体验。

## 初步准备

在开始之前，我们强烈建议您升级到最新版本的 SenseCraft，以确保最稳定的体验。

您可以通过点击下方图标，在我们的 **SenseCraft 分发页面** 下载并更新到最新版本。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

当然，您也可以直接点击这里下载最新的 .uf2 文件。

<table align="center">
  <tbody><tr>
      <td align="center">SenseCraft-v0.2-20220907.uf2</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/K1100-quick-start/SenseCraft-v0.2-20220907.uf2" target="_blank">下载</a></td>
    </tr>
  </tbody></table>

将 SenseCraft 下载到本地磁盘后，请按照以下说明将其刷入 Wio Terminal。

将 Wio Terminal 连接到电脑并打开电源，进入 **Bootloader 模式**：将电源开关向远离“ON”位置的方向滑动，然后松开，再次滑动并松开。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

:::note
当 Wio Terminal 进入 Bootloader 模式后，蓝色 LED 会以不同于闪烁的方式开始“呼吸”。
:::

打开电脑上的文件资源管理器，您会看到一个名为 **Arduino** 的新外部驱动器，将之前下载的 **.uf2** 文件拖入该 **Arduino** 驱动器。

SenseCraft 刷写完成后，名为 Arduino 的外部存储器将自动弹出，SenseCraft 程序将开始运行。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/38.png" /></div>

## 使用按钮导航界面

在学习操作界面之前，您需要熟悉我们为 Wio Terminal 设计的按钮逻辑。这样，您可以根据固定的按钮逻辑非常流畅地选择和操作页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/button.png" /></div>

首先是位于 Wio Terminal 顶部的三个按钮。它们分别对应三个主要功能的显示屏，分别是 **Sense**、**Process** 和 **Uplink**。

无论您身处何处，当您按下顶部的三个按钮之一时，您都可以返回到这三个屏幕。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/101.png" /></div>

然后是位于 Wio Terminal 右下方的五向方向按钮，它允许您执行以下操作：

- **左/右：** 左右滚动页面/菜单  
- **中间：** 进行选择  
- **上：** 返回上一页  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/40.png" /></div>

当页面上出现绿色框时，表示内容处于选中状态。

## 页面逻辑

如上所述，我们为 SenseCraft 准备了三个页面，分别代表 SenseCraft 的三个主要功能模块，即 **Sense**、**Process** 和 **Uplink**。

### Sense

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

**Sense** 页面主要功能是传感器数据展示。您可以通过 Sense 页面观察 Wio Terminal 内置传感器的工作状态和传感器值。

当然，如果您尝试将套件中的 Grove 传感器连接到 Wio Terminal **右侧**的 Grove 接口，您会发现 Wio Terminal 会自动检测传感器类型并读取其数值。

### Process

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/41.png" /></div>

**Process** 页面主要功能是展示数据处理过程。目前我们为该页面开发了 Grove Vision AI 模块的识别和模型处理的日志输出功能。

未来，我们将为 Wio Terminal 提供更强大的数据过滤和处理能力，以增强该页面的功能。

### Uplink

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

**Uplink** 页面主要功能是将数据上传到云端。用户可以在此页面配置您想使用的物联网方式，如 LoRa® 或 WiFi。

在这里，您可以自由配置专属的物联网功能，自由切换不同的网络和平台，为这套设备创造更多价值。

## 内置传感器数据展示

当您将 **SenseCraft** 刷入 Wio Terminal 并启动后，等待几秒钟，您就可以在 **Sense** 页面直接看到内置传感器的数值。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

Wio Terminal 内置了三个传感器：光线传感器、声音响度传感器和三轴传感器。

此时您无需进行任何操作，内置传感器的数值会每秒自动刷新一次，您可以非常自然地观察当前环境的光线、响度和三轴数据。

## 通过 LoRa® 将传感器数据发送到 SenseCAP

**步骤 1.** 按下最右侧顶部按钮进入 **Network** 标签页。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

您会注意到 LoRa® 已被高亮显示。

**步骤 2.** **中键按下**选择 **LoRa®**，并将 **Grove-Wio E5** 连接到左侧的 Grove 接口。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/44.png" /></div>

**步骤 3.** 滚动屏幕上显示的 LoRaWAN® 频段，根据您的地区选择频段。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/45.png" /></div>

现在屏幕会提示您将 Wio-E5 与 SenseCAP 平台绑定。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/46.png" /></div>

我们提供了两种方式在 SenseCAP 平台绑定您的设备。

- **选项 1. 在移动 APP 上绑定设备**

如果您希望使用手机扫描并绑定设备，或者远程查看一些传感器数据，请根据以下链接自行下载 SenseCAP Mate APP。

- [SenseCAP Mate APP for iOS](https://apps.apple.com/cn/app/sensecap-mate/id1619944834) 在 App Store 上
- [SenseCAP Mate APP for Android](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public) 在 Google Play Store 上

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/K1100/2.jpg" /></div>

根据您使用的手机系统下载对应版本的 APP 后，打开 SenseCAP Mate APP。如果您是首次使用 SenseCAP 平台，请先注册一个账户。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/7.jpg" /></div>

:::note
    注册时请选择 **Global** 版本。
:::

在注册信息填写页面中，带 * 的字段为必填项，没有 * 的字段可选填。完成后点击注册按钮。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/8.jpg" /></div>

然后请使用刚注册的账户登录 APP。

在主界面底部选择设备目录，您可以看到所有已绑定的 SenseCAP 设备信息。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/9.jpg" /></div>

点击右上角的 **+** 并选择 **添加设备** 来绑定 Grove - Wio-E5。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100-quick-start/10.jpg" /></div>

将摄像头中心的框对准 Grove - Wio-E5 **背面**的二维码进行扫描以绑定设备。**请注意，不要扫描 Wio E5 正面的二维码**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100-quick-start/49.png" /></div>

通过 SenseCAP Mate App 成功绑定后，您将在 APP 上看到传感器数据。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/104.jpg" /></div>

:::tip
 SenseCAP Mate App 不会自动刷新数据，您需要在传感器页面手动下拉刷新数据。
 如果超过 10 分钟未看到新数据，您可以尝试通过拨动侧边按钮一次来重启 Wio Terminal。
:::

- **选项 2. 在 SenseCAP Web 平台上绑定设备**

请使用您的浏览器打开 [SenseCAP 控制台](https://sensecap.seeed.cc/portal/#/login)。如果这是您第一次使用我们的平台，请先注册一个账户。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/3.png" /></div>

然后使用您刚刚注册的账户登录 SenseCAP 控制台。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/4.png" /></div>

选择 **Dashboard（仪表盘）** 页面并点击 **Bind Device（绑定设备）**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/5.png" /></div>

接着在下一页中，您需要填写 **EUI**、**Code/KEY** 和 **Device Name（设备名称）**，您还可以为设备设置位置。（Grove - Wio-E5 不具备位置功能）

部分所需信息可以在 Grove - Wio-E5 背面的贴纸上找到。请根据需要填写设备名称。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/6.png" /></div>

填写完上述内容后，点击下方的 **Confirm（确认）** 按钮以完成设备绑定。

通过网页平台成功绑定后，您将在平台上看到传感器数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/105.png" /></div>

:::tip
 SenseCAP 的网页平台不支持自动数据刷新，您需要手动刷新浏览器以查看最新数据。
:::

选择频段后，您需要稍等片刻，等待 Grove Wio-E5 完成初始化。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/47.png" /></div>

如果成功通过 LoRaWAN® 连接到 SenseCAP 平台，您将看到如下界面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/48.png" /></div>

如果未连接到 Grove Wio-E5 或在过程中 LoRaWAN® 连接中断，将显示传输失败。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/50.png" /></div>

## 通过 WiFi 将传感器数据发送到 Microsoft Azure IoT Central

在这里，设备将使用 WiFi 通信将传感器数据发送到云端。Microsoft Azure IoT Central 将用于可视化通过 WiFi 从 Wio Terminal 连接的传感器传来的数据！

由于篇幅原因，请跳转到以下链接查看本章节的介绍。

- [将 Wio Terminal 连接到 Microsoft Azure IoT Central](https://wiki.seeedstudio.com/cn/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## 通过 WiFi 将传感器数据发送到 Ubidots

在这里，设备将使用 WiFi 通信将传感器数据发送到云端。Ubidots 平台将用于可视化通过 WiFi 从 Wio Terminal 连接的传感器传来的数据！

**步骤 1.** 注册并登录 Ubidots

如果这是您第一次使用 Ubidots，请访问 [Ubidots 官网](https://ubidots.com/) 并注册一个账户。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/3.png" /></div>

注册完成后，请使用您的账户登录 Ubidots。

**步骤 2.** 分配您的唯一 **Ubidots TOKEN**

每次向 Ubidots 发出请求都需要一个 TOKEN。获取 TOKEN 的最简单方法是从用户下拉菜单中点击 **API Credentials（API 凭证）**。

在用户下拉菜单中点击 API 凭证：

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/k1100_ubidots/4.png" /></div>

**Tokens**：临时且可撤销的密钥，用于您的 API 请求。请保存此 TOKEN，我们稍后会用到。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/5.png" /></div>

:::caution
所有 API 调用仅接受您的 **TOKEN**。不要尝试使用您的 API Key，它将无法工作！您还可以在用户下拉菜单的个人资料设置中访问所有 Ubidots API 密钥部分。选择 **My Profile（我的资料）** –> **API Credentials（API 凭证）** 查看与您的 Ubidots 账户相关的 API TOKEN 列表。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/6.png" /></div>

**步骤 3.** 准备必要的信息

为了建立 MQTT 连接，我们需要提前准备以下信息。

- **WiFi 名称**
  - 填写 Wio Terminal 可以连接的 WiFi 名称。Wio Terminal 将搜索其周围的 WiFi 并尝试连接。
- **WiFi 密码**
  - 填写 Wio Terminal 可以连接的 WiFi 的密码。
- **MQTT 客户端名称**
  - 这是一个特殊的名称，因为它是您的设备将被代理识别的 ID，因此它 **必须** 唯一。如果您的设备尝试使用已被其他设备占用的相同 ID 进行连接，连接将被拒绝。请创建一个由 8-12 个以上字母数字字符组成的唯一 MQTT 客户端名称，并相应地将其输入到代码中。
  如果需要帮助创建唯一的 MQTT 客户端名称，请查看此 [随机 ASCII 生成器](https://www.random.org/strings/)，或者简单地使用设备的 MAC 地址，因为每个 MAC 地址都是全球唯一的。

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/7.png" /></div>

- **Ubidots TOKEN**
  - 这是在 **步骤 2** 中生成的 TOKEN。
- **设备标签**
  - 这是设备的名称，用户提供的设备名称将被 Ubidots 用于识别设备。如果在发送第一个数据点之前设备标签不存在，Ubidots 将自动创建它们。

请准备好以上信息，因为我们将在下一步中使用它们。

**步骤 4.** 配置 **config.txt**

当我们使用 SenseCraft 时，Wio Terminal 连接到计算机后会自动显示一个外部驱动器。

:::caution
这意味着当 Wio Terminal 连接到计算机时，USB 驱动器会自动显示，**无需额外两次切换侧边按钮**！
:::
通常外部驱动器上会有一个名为 **config.txt** 的文件，请将其打开。

它包含了有关网络连接的必要信息，我们可以通过修改它来实现上电时的自动配置。**config.txt** 文件的内容格式如下：

```
SSID=WiFi_Name
PASSWORD=WiFi_Password
MQTT_CLIENT_NAME=Topic
TOKEN=Default_Token
DEVICE_LABEL=Device_Name
```

请填写上述字段，填写的信息应与**步骤 3**中获取的信息相对应。完成后，您的 config.txt 文件内容应类似于以下示例：

```
SSID=CHCK
PASSWORD=123456
MQTT_CLIENT_NAME=al49mw880j
TOKEN=BBFF-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
DEVICE_LABEL=Wio-Terminal
```

:::caution
完成更改后，请**保存** config.txt 文件，并通过将侧边按钮向下拨动一次来**重启** Wio Terminal。
:::

**步骤 5.** 进入 **Network** 标签页并选择 **WiFi**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

现在它将等待加载配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

一旦加载的 WiFi 配置被拾取，它将首先连接到 WiFi 网络，然后连接到 Ubidots 平台。如果成功连接到 Ubidots，它将显示以下内容。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**步骤 6.** 在 Ubidots 中查看数据

一旦数据成功发送到 Ubidots，您将能够在 Ubidots 设备中查看数据信息。

Ubidots 的界面非常简单，如果您想查看有关设备的信息，可以在仪表板顶部选择 **Devices**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/16.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/11.png" /></div>

点击您的设备名称，即可查看所有历史记录标签。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/54.png" /></div>

:::note
Ubidots 的免费版本仅支持创建**一个 TOKEN**和**十个标签**。一旦超过十个标签，您上传的标签和数据将被丢弃。
:::
:::note
如果您希望使用 Ubidots 进行进一步的独立开发，请参考我们的 [Ubidots 教程](https://wiki.seeedstudio.com/cn/Getting_started_with_Ubidots/)。
:::

## 连接套件中的其他 Grove 传感器

除了内置传感器，SenseCraft 的可能性是无限的。套件中的 Grove 传感器也可以接入 Wio Terminal，并被自动识别。

### 将 Grove 传感器插入 Wio Terminal

在当前版本的 SenseCraft 中，我们仅支持同时连接一个传感器使用（Grove Wio E5 除外）。

连接时，您可以使用套件中提供的 Grove 电缆，将您想要使用的传感器连接到 Wio Terminal 右下方的 Grove 接口。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

上图以 Grove Vision AI 为例，说明了如何连接套件中的传感器。当然，其他传感器的连接方式相同（Grove Wio E5 除外）。

:::caution
请勿将套件中的 Grove 传感器连接到 Wio Terminal 左侧的 Grove 接口。左侧的 Grove 接口目前设计用于连接 Grove Wio E5。
:::

### 查看 Grove 传感器值

连接 Grove 传感器后，您可以在 Sense 页面中查看 Grove 传感器的值。

您只需在 **Sense** 页面下按**右**箭头按钮，直到出现外部传感器的值。通常，外部传感器的值会显示在 **IMU 传感器**之后。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/56.png" /></div>

### 将 Grove 传感器数据上传到云端

SenseCraft 对传感器的检测是完全自动化的，因此用户无需额外操作。当然，这也包括新插入的 Grove 传感器的数据上传。

- 同样，如果您希望通过 LoRaWAN® 发送 Grove 传感器的数据，只需**同时将 Grove Wio E5 连接到左侧**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/57.png" /></div>

然后，按照 **[通过 LoRa® 将传感器数据发送到 SenseCAP](https://wiki.seeedstudio.com/cn/K1100-quickstart/#send-sensor-data-to-sensecap-via-lora)** 中的步骤操作。

- 如果您希望通过 WiFi 发送数据，则无需连接其他设备，请继续参考 **[通过 WiFi 将传感器数据发送到 Ubidots](https://wiki.seeedstudio.com/cn/K1100-quickstart/#send-sensor-data-to-ubidots-via-wifi)** 的内容进行操作。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/58.png" /></div>

## 高级玩法

我们设计了许多非常有趣且高级的玩法来使用 SenseCraft，您可以通过本节快速了解并使用这些功能。

### Vision AI 实时分析

这是为 Grove Vision AI 设计的功能。用户可以通过此界面观察 Vision AI 的运行日志，方便实时观察 Vision AI 的识别情况、调整摄像头画面等。

**步骤 1.** 连接 Grove Vision AI

请将您的 Grove Vision AI 连接到 Wio Terminal **右侧**的 Grove 接口。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

**步骤 2.** 进入 Vision AI 实时分析界面

请点击 Wio Terminal 上方的第二个按钮，进入 **Process** 界面。

在 Process 界面下默认选择的是 **Vision AI 实时分析**，此时只需 **中间按下** 五向按钮即可进入。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/59.png" /></div>

然后您将在此页面看到 Vision AI 的日志。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/61.png" /></div>

### TinyML 示例

这是为 Wio Terminal 在嵌入式机器学习中设计的功能。在此页面下，用户可以扫描进入我们准备的 TinyML 系列课程，体验 Wio Terminal 和 Vision AI 的强大机器学习能力。

**步骤 1.** 请点击 Wio Terminal 上方的第二个按钮，进入 **Process** 界面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/60.png" /></div>

**步骤 2.** 进入 TinyML 示例界面

按下五向按钮的右箭头，选择 TinyML 示例。只需 **中间按下** 五向按钮即可进入。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/62.png" /></div>

### 图形可视化

我们为 Wio Terminal 提供了折线图显示功能，以便您观察各传感器数值的变化情况。

以下是光照值折线图的示例。

由于光照列已经高亮显示，**中间按下** 五向按钮即可进入光传感器数据的图形可视化模式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/63.png" /></div>

### 保存到 TF 卡

考虑到用户可能需要离线保存到 TF 卡，并仅需后续进行数据筛选或分析，我们还为 Wio Terminal 设计了将数据保存到 TF 卡的功能。

在前述的图形可视化模式下，再次 **中间按下** 即可查看此页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/65.png" /></div>

此时可以将传感器数据保存到 TF 卡中。首先将 TF 卡插入 Wio Terminal。

之后，按下 **中间按钮** 选择 **保存到 TF 卡**，屏幕会显示 **保存已开始** 的消息。当消息消失时，保存完成，数据将以 **.csv 文件** 的形式保存。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/64.png" /></div>

如果 TF 卡存储已满，将会显示如下通知。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/66.png" /></div>

## 我接下来可以做什么？

恭喜你成功完成了本快速入门指南中列出的步骤！我们已经观察到传感器设备的数据在最短时间内传输到了 SenseCAP 控制台 / Ubidots 界面。

接下来，如果你想进一步深入了解传感器编程、LoRaWAN®、云平台等内容，请继续阅读我们的 [SenseCAP - 传感器原型套件概述](https://wiki.seeedstudio.com/cn/K1100-Getting-Started/)。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/41.png" /></div>

## 资源

- **[GitHub]** [Seeed_Arduino_K1100 源代码](https://github.com/Seeed-Studio/Seeed_Arduino_K1100)

## 故障排查

> 问题1：为什么 SenseCAP 平台上的数据内容与 Wio Terminal 上显示的数据不同？

答：因为数据是每五分钟读取一次，并在三分钟内发送出去。因此，传感器值可能是某个五分钟间隔内读取的值，并且存在一定延迟。而 Wio Terminal 上的数据是实时的，这可能导致两者之间的数据不一致。

> 问题2：为什么无法连接到 LoRaWAN®？

答：如果始终无法连接到 LoRaWAN®，请确保周围环境中有足够强的信号和稳定的 Helium 网络覆盖。我们建议你拥有自己的 Helium 网关以体验完整流程。Grove - Wio-E5 仅是一个原型，其天线强度无法与大型 LoRa® 设备相比。
此外，这也可能与 Helium 网络的不稳定性有关，自 2022 年 7 月以来，Helium 网络部分功能未响应，我们只能等待 Helium 官方修复。

> 问题3：为什么有时 SenseCAP 上的一些传感器数据没有显示？

答：这可能是由于 Grove - Wio-E5 出现了数据包丢失。一般来说，数据包丢失是正常现象，无需过度担心。如果数据包丢失非常严重，可以尝试重启 Wio Terminal。
如果你对实时数据和稳定性有很高的要求，可以考虑使用工业级的 SenseCAP 系列设备。

> 问题4：我没有购买 K1101 套件，是否可以使用固件体验此流程？

答：如果你不是购买了此套件的用户，可能无法完全体验 SenseCAP 的功能。套件中的 Grove - Wio-E5 是特别版，单独购买的产品无法访问 SenseCAP。

> 问题5：如果我使用了其他程序，是否可以恢复固件？

答：你可以随时为 Wio Terminal 烧录此固件，理论上只要不破坏 Grove - Wio-E5 的原始固件，就可以一直使用此流程。烧录固件的方法如下：
快速滑动开关两次，如下所示：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

此时，电脑上会出现一个名为 **Arduino** 的磁盘，只需将固件文件（.uf2 文件）复制到该磁盘中。一旦固件安装完成，磁盘会自动弹出，Wio Terminal 将重新启动并进入设置频段界面。

> 问题6：如果我更改了 Grove - Wio-E5 的 Dev EUI、App EUI、App Key，有办法找回吗？

答：我们已向用户开放查询接口，当你根据项目需要更改了这三个代码的信息时，也可以随时通过 Grove - Wio-E5 背面的贴纸信息进行查询。

```
https://sensecap.seeed.cc/makerapi/device/view_device_info?nodeEui=<your_eui>&deviceCode=<your_code>
```

请使用标注在 Grove - Wio-E5 背面的 **EUI** 和 **Code** 信息填写到上述网站的对应位置，在浏览器中打开该网站即可查询设备对应的三个代码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/36.png" /></div>

**请妥善保管这三个代码，因代码丢失造成的任何损失由用户自行承担。**

> 问题7：SenseCAP 的 DevEUI、AppEUI 和 AppKey 是否可以用于其他平台？例如 Helium 或 TTN？

答：答案是否定的。SenseCAP 的三元代码无法用于绑定其他平台，否则可能导致不同平台上的数据异常风险。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® 标志是 Semtech Corporation 或其子公司拥有的商标。
- LoRaWAN® 是根据 LoRa Alliance® 授权使用的标志。