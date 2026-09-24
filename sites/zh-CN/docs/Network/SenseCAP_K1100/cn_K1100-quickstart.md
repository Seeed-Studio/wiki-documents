---
description: 使用 SenseCraft 的快速零代码入门
title: 使用 SenseCraft 的快速零代码入门
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100-quickstart
sku: 110991748
last_update:
  date: 1/12/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/K1100-quickstart/
---

# SenseCAP K1100 传感器原型套件快速上手

## 介绍

**SenseCAP K1100 - The Sensor Prototype Kit** 代表着 Seeed Studio 将 LoRa® 通信技术与边缘智能产品的精华进行凝练，旨在让用户以最简单的方式部署和掌握 LoRa® 与物联网应用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/004(1).jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

我们自豪地向你带来 **SenseCraft**，它可以让用户以最短的时间、几乎无需动手成本，就能体验到一种更好的将数据发送到云端的方式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/step.png" /></div>

这完全得益于我们完全自主设计的 **SenseCAP** 平台。SenseCAP 提供了一个易于使用的云平台。用户可以使用 **SenseCAP Mate App** 扫描二维码，在 LoRaWAN® 网络覆盖环境下，将设备与其对应账号进行绑定以管理设备，并在 SenseCAP Portal 上查看传感器节点数据。SenseCAP Portal 提供 API，方便用户基于 Portal 上的数据进行进一步开发。

如果你目前周围没有 LoRaWAN® 覆盖，也不用担心，你可以在 WiFi 和 LoRa® 之间自由切换，也可以通过 WiFi 将数据传输到 **Ubidots**/**Microsoft Azure IoT Central** 进行进一步的数据处理。

我们迫不及待地想与你分享我们当前的项目进展，并欢迎所有用户来体验我们的项目！

## 可升级为工业级传感器

借助 SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，你可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助你完成原型开发，还为你提供使用 SenseCAP 系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括用于土壤湿度、空气温度和湿度、光照强度、CO2、EC 的传感器，以及一款 8 合 1 气象站。尝试最新的 SenseCAP S210x，为你的下一个工业项目取得成功助力。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温度和湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光照</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温度、湿度和 CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度和温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度、温度和 EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody>
</table>

## 概览

由于物联网功能是 SenseCAP K1100 套件的特性之一，在开始之前有必要先了解一下其实现逻辑。

总的来说，我们为用户提供了两种体验物联网的路径，一种是 LoRa®，另一种是 WiFi。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/lora.png" /></div>

如果你想使用 LoRa®，那么你需要提前准备一个合适的 LoRa® 网关，并通过连接到 LoRaWAN® 的 Grove Wio E5 模块，将数据连接到 SenseCAP 平台。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/wifi.png" /></div>

如果你想使用 WiFi，那么你需要在你的环境中具备稳定的 WiFi 网络覆盖。只需在配置文件中输入你的 WiFi 名称和密码，以及物联网平台提供的密钥等信息，即可获得出色的物联网体验。

## 前期准备

在开始之前，我们强烈建议你升级到最新版本的 SenseCraft，以确保获得最稳定的体验。

你可以通过点击下方图标，在我们的 **SenseCraft distribution** 中下载并更新到最新版本。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

当然，你也可以直接点击此处下载最新的 .uf2 文件。

<table align="center">
  <tbody><tr>
      <td align="center">SenseCraft-v0.2-20220907.uf2</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/K1100-quick-start/SenseCraft-v0.2-20220907.uf2" target="_blank">下载</a></td>
    </tr>
  </tbody></table>

将 SenseCraft 下载到本地磁盘后，请按照以下说明将其烧录到 Wio Terminal 中。

将 Wio Terminal 连接到电脑并打开电源，进入 **Bootloader Mode**：将电源开关从 "ON" 位置再向下拨动一次，松开后再拨动一次并松开。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

:::note
当 Wio Terminal 进入 Bootloader 模式后，蓝色 LED 将以不同于普通闪烁的“呼吸”方式亮起。
:::

在电脑上打开文件资源管理器，你会看到一个名为 **Arduino** 的新外部驱动器，将之前下载的 **.uf2** 文件拖入这个 **Arduino** 驱动器中。

当 SenseCraft 烧录完成后，名为 Arduino 的外部存储器会自动弹出，SenseCraft 程序也会开始运行。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/38.png" /></div>

## 使用按键导航界面

在学习操作界面之前，你需要先熟悉我们为 Wio Terminal 设计的按键逻辑。这样，你就可以根据固定的按键逻辑，非常顺畅地选择和操作各个页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/button.png" /></div>

首先是位于 Wio Terminal 顶部的三个按键。它们分别对应三个主要功能的显示界面，分别是 **Sense**、**Process** 和 **Uplink**。

无论你当前在哪个页面，当你按下顶部的三个按键时，都可以返回到这三个界面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/101.png" /></div>

然后是位于 Wio Terminal 右下方的五向方向键，你可以通过它完成以下操作：

- **左/右：** 左右滚动页面/菜单
- **中间：** 进行选择
- **上：** 返回上一页

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/40.png" /></div>

当页面上出现绿色方框时，表示该内容处于被选中状态。

## 页面逻辑

如上所述，我们为 SenseCraft 准备了三个页面，分别代表 SenseCraft 的三个主要功能模块，即 **Sense**、**Process** 和 **Uplink**。

### Sense

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

**Sense** 页面主要用于传感器数据展示。你可以在 Sense 页面上观察 Wio Terminal 内置传感器的工作状态和传感器数值。

当然，如果你尝试将套件中的 Grove 传感器连接到 Wio Terminal **右侧** 的 Grove 接口，你会发现 Wio Terminal 会自动检测传感器类型并读取其数值。

### Process

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/41.png" /></div>

**Process** 页面主要用于展示数据处理的过程。目前我们已经为该页面开发了 Grove Vision AI 模组的识别和模型处理的日志输出。

未来，我们会为 Wio Terminal 在此页面上提供更强大的数据过滤和处理能力。

### Uplink

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

**Uplink** 页面主要用于将数据上传到云端。用户可以在此页面配置你想要使用的物联网方式，是 LoRa® 还是 WiFi。

在这里，你可以自由配置专属的物联网功能，自由切换不同的网络和平台，为这套设备创造其价值。

## 内置传感器数据展示

当你将 **SenseCraft** 烧录到 Wio Terminal 并上电后，等待几秒钟，你就可以在 **Sense** 页面上直接看到内置传感器的数值。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

Wio Terminal 内置了三个传感器：光线传感器、声音响度传感器和三轴传感器。

此时你无需进行任何操作，内置传感器的数值会每秒自动刷新一次，你可以非常自然地观察当前环境的光照、响度和三轴数据。

## 通过 LoRa® 将传感器数据发送到 SenseCAP

**步骤 1.** 按下最右侧的顶部按键进入 **Network** 选项卡。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

你会注意到 LoRa® 已经被高亮显示。

**步骤 2.** **中键按下** 选择 **LoRa®**，并将 **Grove-Wio E5** 连接到左侧的 Grove 接口。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/44.png" /></div>

**步骤 3.** 滚动浏览屏幕上显示的 LoRaWAN® 频段，并根据你所在的地区选择对应的频段。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/45.png" /></div>

现在它会提示你将 Wio-E5 与 SenseCAP 平台进行绑定。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/46.png" /></div>

我们在 SenseCAP 平台中提供了两种绑定设备的方式。

- **选项 1. 在手机 APP 上绑定设备**

如果你想使用手机扫描并绑定设备，或者远程查看部分传感器数据，请根据以下链接自行下载 SenseCAP Mate APP。

- [适用于 iOS 的 SenseCAP Mate APP](https://apps.apple.com/cn/app/sensecap-mate/id1619944834) on App Store
- [适用于 Android 的 SenseCAP Mate APP](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public) on the Google Play Store

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/K1100/2.jpg" /></div>

根据你所使用的手机系统下载对应版本的 SenseCAP Mate APP 后打开。如果这是你第一次使用 SenseCAP 平台，请先注册一个账号。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/7.jpg" /></div>

:::note
    注册时请选择 **Global** 版本。
:::

在注册信息填写页面，带有 * 的字段为必填项，没有 * 的字段可以选填。全部完成后点击 Register 按钮。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/8.jpg" /></div>

然后请使用你刚刚注册的账号登录 APP。

在主界面底部选择 Device 目录，在这里你可以看到所有已绑定的 SenseCAP 设备信息。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/9.jpg" /></div>

点击右上角的 **+**，选择 **Add device** 来绑定 Grove - Wio-E5。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100-quick-start/10.jpg" /></div>

将相机中央的方框对准 Grove - Wio-E5 **背面** 的二维码进行扫码，以绑定你的套件。**请注意不要扫描 Wio E5 正面的二维码**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100-quick-start/49.png" /></div>

使用 SenseCAP Mate App 绑定成功后，你会在 App 上看到传感器数据的显示。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/104.jpg" /></div>

:::tip
 SenseCAP Mate App 不会自动刷新数据信息，你需要在传感器页面手动下拉以刷新数据。
 如果超过 10 分钟仍未看到新的数据，你可以尝试将侧边按键向下拨动一次来重启 Wio Terminal。
:::

- **选项 2. 在 SenseCAP 网页平台上绑定设备**

请使用浏览器打开 [SenseCAP Console](https://sensecap.seeed.cc/portal/#/login)。如果这是你第一次使用我们的平台，请先注册一个账号。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/3.png" /></div>

然后使用你刚刚注册的账号登录 SenseCAP 控制台。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/4.png" /></div>

选择 **Dashboard** 界面并点击 **Bind Device**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/5.png" /></div>

然后在下一页中，你需要填写 **EUI**、**Code/KEY** 和 **Device Name**，你甚至可以为设备设置位置。（Grove - Wio-E5 不具备定位功能）

部分必填信息可以在 Grove - Wio-E5 背面的标签上找到。请根据需要填写设备名称。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/6.png" /></div>

填写完以上内容后，点击下方的 **Confirm** 按钮完成设备绑定。

通过网页平台绑定成功后，你会在平台上看到传感器数据的显示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/105.png" /></div>

:::tip
 网页端的 SenseCAP 同样不会自动刷新数据，你需要刷新浏览器才能看到最新数据。
:::

当你选择好频段后，需要稍等片刻，让 Grove Wio E5 完成初始化。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/47.png" /></div>

如果 LoRaWAN® 与 SenseCAP 平台连接成功，你会看到如下界面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/48.png" /></div>

如果你没有连接 Grove Wio E5，或者在过程中 LoRaWAN® 连接中断，则会显示传输失败。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/50.png" /></div>

## 通过 WiFi 将传感器数据发送到 Microsoft Azure IoT Central

在这里，设备将使用 WiFi 通信将传感器数据发送到云端。Microsoft Azure IoT Central 将用于可视化通过 WiFi 从连接到 Wio Terminal 的传感器上传的数据！

由于篇幅原因，本章节这一部分的介绍请跳转到此链接查看。

- [将 Wio Terminal 连接到 Microsoft Azure IoT Central](https://wiki.seeedstudio.com/cn/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## 通过 WiFi 将传感器数据发送到 Ubidots

这里设备将使用 WiFi 通信将传感器数据发送到云端。Ubidots 平台将用于可视化通过 WiFi 连接到 Wio Terminal 的传感器所上传的数据！

**步骤 1.** 注册并登录 Ubidots

如果这是你第一次使用 Ubidots，请前往 [Ubidots 官网](https://ubidots.com/) 注册你自己的账号。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/3.png" /></div>

注册完成后，请使用你注册的账号登录 Ubidots。

**步骤 2.** 分配你唯一的 **Ubidots TOKEN**

每个发往 Ubidots 的请求都需要一个 TOKEN。获取它最简单的方式是点击用户下拉菜单中的 **API Credentials**。

进入用户下拉菜单并点击 API credentials：

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/k1100_ubidots/4.png" /></div>

**Tokens**：用于 API 请求的临时且可撤销的密钥。请先保存好这个 TOKEN，我们稍后会用到它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/5.png" /></div>

:::caution
所有 API 调用只接受你的 **TOKEN**。不要尝试使用你的 API Key，它不会生效！你也可以在用户下拉菜单的 My Profile 设置中的 Ubidots API Keys 部分访问你所有的 Ubidots API Key。选择 **My Profile** –> **API Credentials** 来查看与你的 Ubidots 账户对应的 API TOKENS 列表。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/6.png" /></div>

**步骤 3.** 准备必要的信息

为了建立 MQTT 连接，我们需要提前准备好以下信息。

- **WiFi 名称**
  - 填写 Wio Terminal 可以连接的 WiFi 名称。Wio Terminal 会在其周围搜索 WiFi 并尝试连接。
- **WiFi 密码**
  - 填写 Wio Terminal 可以连接的 WiFi 的密码。
- **MQTT 客户端名称**
  - 这一项比较特殊，因为它是你的设备在 broker 端被识别的 ID，所以它 **必须** 唯一。如果你的设备尝试使用一个已经被其他设备占用的 ID 进行连接，连接将被拒绝。请创建你自己的、由 8–12+ 个字母数字字符组成的 MQTT 客户端名称，并相应地填入代码中。
 如果在创建唯一的 MQTT 客户端名称时需要一些帮助，可以查看这个[random ascii builder](https://www.random.org/strings/)，或者直接使用你设备的 MAC 地址，因为每个 MAC 地址在全球范围内都是唯一的。

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/7.png" /></div>

- **Ubidots TOKEN**
  - 这是在 **步骤 2** 中生成的 TOKEN。
- **设备标签（Device label）**
  - 这是设备的名称，用户提供的设备名称将被 Ubidots 用来识别设备。如果在发送第一个点之前设备标签不存在，Ubidots 会自动创建它们。

请准备好以上信息，因为我们将在下一步中使用它们。

**步骤 4.** 配置 **config.txt**。

当我们使用 SenseCraft 时，一旦将 Wio Terminal 连接到电脑，就会出现一个外部驱动器。

:::caution
这意味着当 Wio Terminal 连接到电脑时会出现一个 USB 盘，**而不需要额外再拨动两次侧边按键**！
:::
通常在外部驱动器上会有一个名为 **config.txt** 的文件，打开它。

它保存了有关网络连接的必要信息，我们可以通过修改它来实现上电自动配置。**config.txt** 文件的内容格式如下。

```
SSID=WiFi_Name
PASSWORD=WiFi_Password
MQTT_CLIENT_NAME=Topic
TOKEN=Default_Token
DEVICE_LABEL=Device_Name
```

请在上面的必填字段中填写与我们在 **步骤 3** 中获得的信息相对应的内容。完成后，你的 config.txt 文件内容应类似于下面的示例。

```
SSID=CHCK
PASSWORD=123456
MQTT_CLIENT_NAME=al49mw880j
TOKEN=BBFF-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
DEVICE_LABEL=Wio-Terminal
```

:::caution
完成修改后，请**保存** config.txt 文件，并通过向下拨动一次侧边按键来**重启** Wio Terminal。
:::
**步骤 5.** 进入 **Network** 选项卡并选择 **WiFi**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

现在它会等待加载配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

一旦读取到已加载的 WiFi 配置，它会先连接到 WiFi 网络，然后再连接到 Ubidots 平台。如果与 Ubidots 的连接成功，将会显示如下界面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**步骤 6.** 在 Ubidots 中查看数据

一旦数据成功发送到 Ubidots，你就可以在 Ubidots 设备中查看这些数据信息。

Ubidots 拥有非常简洁的界面，如果你想查看设备的相关信息，可以在仪表盘顶部选择 **Devices**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/16.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/11.png" /></div>

点击这里你的设备名称，即可查看所有的历史标签页。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/54.png" /></div>

:::note
Ubidots 的免费版本只支持创建 **一个 TOKEN** 和 **十个标签**。一旦你拥有超过十个标签，你上传的这些标签以及数据将会被丢弃。
:::
:::note
如果你想使用 Ubidots 进行进一步的自主开发，请参考我们关于 Ubidots 的更多[教程](https://wiki.seeedstudio.com/cn/Getting_started_with_Ubidots/)。
:::

## 连接套件中的其他 Grove 传感器

除了内置传感器外，SenseCraft 的可能性是无限的。套件中的 Grove 传感器也可以接入 Wio Terminal，并会被自动识别。

### 将 Grove 传感器插入 Wio Terminal

在当前版本的 SenseCraft 中，我们只支持同时连接一个传感器使用。（Grove Wio E5 除外）

连接时，你可以使用套件中提供的 Grove 线缆，将你想要使用的其中一个传感器连接到 Wio Terminal 右下方的 Grove 接口。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

上图以 Grove Vision AI 为例，说明了套件中传感器的连接方式。当然，其他传感器也是同样的连接方式。（Grove Wio E5 除外）

:::caution
不要将套件中的 Grove 传感器连接到 Wio Terminal 左侧的 Grove 接口。左侧的 Grove 接口目前是为 Grove Wio E5 的连接而设计的。
:::

### 查看 Grove 传感器数值

一旦你连接好了 Grove 传感器，就可以在 Sense 页面中查看 Grove 传感器的数值。

你只需要在 **Sense** 页面下按 **右** 方向键，直到出现外部传感器的数值。通常，外部传感器的数值会显示在 **IMU 传感器** 之后。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/56.png" /></div>

### 将 Grove 传感器数据上传到云端

SenseCraft 对传感器的检测是完全自动的，因此我们不需要用户做任何额外操作。当然，这也包括新插入的 Grove 传感器在之后的数据上传。

- 同样地，如果你想通过 LoRaWAN® 发送 Grove 传感器的数据，只需要同时**在左侧连接 Grove Wio E5** 即可。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/57.png" /></div>

然后，按照 **[通过 LoRa® 将传感器数据发送到 SenseCAP](https://wiki.seeedstudio.com/cn/K1100-quickstart/#通过-lora-将传感器数据发送到-sensecap)** 中的步骤进行操作。

- 如果你想通过 WiFi 发送数据，那么不需要再连接其他任何东西，请继续参考 **[通过 WiFi 将传感器数据发送到 Ubidots](https://wiki.seeedstudio.com/cn/K1100-quickstart/#通过-wifi-将传感器数据发送到-ubidots)** 中的内容进行操作。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/58.png" /></div>

## 进阶玩法

我们为 SenseCraft 设计了许多非常有趣且进阶的玩法，你可以通过本节快速了解并使用这些功能。

### Vision AI 实时分析

这是为 Grove Vision AI 设计的功能。用户可以在该界面下观察 Vision AI 的运行日志，方便用户实时观察 Vision AI 的识别情况、调整摄像头画面等。

**步骤 1.** 连接 Grove Vision AI

请将 Grove Vision AI 连接到 Wio Terminal **右侧** 的 Grove 接口。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

**步骤 2.** 进入 Vision AI 实时分析界面

请点击 Wio Terminal 上方的第二个按键，进入 **Process** 界面。

在 Process 界面下默认选择的是 **Vision AI real-time analysis**，此时只需在五向按键上**中键按下**即可进入。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/59.png" /></div>

然后你就可以在此页面上看到 Vision AI 日志。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/61.png" /></div>

### TinyML 示例

这是为 Wio Terminal 在嵌入式机器学习中设计的一个功能。在此页面下，用户可以扫码进入我们准备的 TinyML 系列课程，体验 Wio Terminal 与 Vision AI 强大的机器学习能力。

**步骤 1.** 请点击 Wio Terminal 上方的第二个按钮进入 **Process** 界面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/60.png" /></div>

**步骤 2.** 进入 TinyML 示例界面

按下五向按键的右键选择 TinyML Example。只需**中键按下**五向按键即可进入。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/62.png" /></div>

### 图形可视化

我们为 Wio Terminal 提供了折线图显示，这样你就可以观察每个传感器数值的数据变化情况。

以光照数值的折线图为例。

由于 Light 列已经高亮显示，**中键按下**五向按键即可进入光照传感器数据的图形可视化模式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/63.png" /></div>

### 保存到 TF 卡

考虑到用户可能有离线保存到 TF 卡、之后只做数据筛选或分析的需求，我们也为 Wio Terminal 设计了将数据保存到 TF 卡的功能。

在前面所述的图形可视化模式下，再次**中键按下**即可查看此页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/65.png" /></div>

这里可以将传感器的数据保存到 TF 卡。首先将 TF 卡插入 Wio Terminal。

之后，按下**中键按钮**选择 **Save to TF card**，它会显示 **Saving has been started** 的提示信息。当该信息消失时，保存即完成，数据会以 **.csv 文件** 的形式保存。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/64.png" /></div>

如果 TF 卡存储已满，将会出现如下提示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/66.png" /></div>

## 接下来我可以做什么？

恭喜你成功完成本快速入门指南中列出的步骤，我们刚刚在最短时间内观察到了从传感器设备传输到 SenseCAP Console / Ubidots 视图中的数据！

接下来，如果你想进一步深入了解传感器编程，以及 LoRaWAN®、云平台等内容，请继续阅读我们的 [SenseCAP - The Sensor Prototype Kit Overview](https://wiki.seeedstudio.com/cn/K1100-Getting-Started/)。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/41.png" /></div>

## 资源

- **[GitHub]**[Seeed_Arduino_K1100 源码](https://github.com/Seeed-Studio/Seeed_Arduino_K1100)

## 故障排查

> Q1: 为什么 SenseCAP 平台上的数据内容与 Wio Terminal 上显示的数据不同？

A: 因为数据是每五分钟读取一次，并在三分钟内发送出去。所以传感器获得的数值可能是某个五分钟区间内读取到的一次数值，并带有一定延迟。而 Wio Terminal 上的数据是实时的，这可能会导致两者之间存在不一致。

> Q2: 为什么我无法连接到 LoRaWAN®？

A: 如果你始终无法连接到 LoRaWAN®，请确保周围环境中有足够强的信号和稳定的 LoRaWAN 网络覆盖。我们建议你自备一个 LoRaWAN 网关以体验完整流程。套件中的 Grove - Wio-E5 只是一个原型，其天线强度无法与大型 LoRa® 设备相比。

> Q3: 为什么有时一组内容中的某些传感器数据没有出现在 SenseCAP 上？

A: 这可能是 Grove - Wio-E5 出现了丢包。一般来说，丢包是正常情况，无需过度担心。如果出现非常严重的丢包情况，你可以尝试重启 Wio Terminal。
如果你对数据的实时性和稳定性有很高要求，可以了解一下工业级的 SenseCAP 系列设备。

> Q4: 我没有购买 K1101 套件，能否使用该固件体验此示例？

A: 如果你不是购买此套件的用户，可能无法完整体验对 SenseCAP 的访问。套件中的 Grove - Wio-E5 是特别版，单独购买的产品不具备访问 SenseCAP 的权限。

> Q5: 如果我使用了其他程序，能否恢复该固件？

A: 你可以随时为 Wio Terminal 烧录此固件，理论上只要不破坏 Grove - Wio-E5 的原始固件，你就可以一直使用此示例。烧录固件的方法如下。
非常快速地将开关拨动两次，如下所示：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

此时你的电脑上会出现一个名为 **Arduino** 的磁盘，只需将固件（.uf2 文件）复制到该磁盘中。固件安装完成后，磁盘会自动弹出，Wio Terminal 将重启并进入 Setup Band 界面。

> Q6: 如果我更改了 Grove - Wio-E5 的 Dev EUI、App EUI、App Key，是否有办法找回？

A: 我们已经向用户开放了查询接口，因此当你为了项目需要更改这三个码的信息后，也可以随时通过 Grove - Wio-E5 背面的贴纸信息，在浏览器中打开该网站来查询你设备对应的三个码。

```
https://sensecap.seeed.cc/makerapi/device/view_device_info?nodeEui=<your_eui>&deviceCode=<your_code>
```

请使用 Grove - Wio-E5 背面标注的 **EUI** 和 **Code** 信息，在上述网站中填写对应位置，以在浏览器中打开网站后查询你设备对应的三个码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/36.png" /></div>

**请妥善保管这三个码，因码丢失而造成的任何损失将由用户自行承担。**

> Q7: 是否可以在其他平台（例如 TTN）上使用 SenseCAP 的 DevEUI、AppEUI 和 AppKey？

A: 答案是否定的。SenseCAP 的三元码不能用于绑定其他平台，否则在不同平台上存在数据异常的高风险。

## 技术支持与产品讨论


感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® 标志是 Semtech Corporation 或其子公司的商标。
- LoRaWAN® 是在 LoRa Alliance® 授权下使用的标志。
