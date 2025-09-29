---
description: 开始使用 Microsoft Azure IoT Central
title: 开始使用 Microsoft Azure IoT Central
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Connect-Wio-Terminal-to-Azure-IoT-Central
last_update:
  date: 2023/1/12
  author: shuxu hu
---
# 将 Wio Terminal 连接到 Microsoft Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及强大的 APP 支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强度、二氧化碳、电导率以及 8 合 1 气象站传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}>
          <strong>SenseCAP 工业传感器</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录仪</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光强度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; 电导率</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody></table>

## 介绍

在本教程中，我们将引导您完成将 Wio Terminal 连接到 Microsoft Azure IoT Central 的过程，并将 Wio Terminal 上的板载传感器/硬件（如三轴加速度计、光传感器、三个按钮）发送的遥测数据传输到 Microsoft Azure IoT Central。然后，您将能够在交互式仪表板上可视化传感器数据。此外，您还可以使用 Azure IoT Central 控制硬件，例如让 Wio Terminal 上的蜂鸣器发出声音。Microsoft Azure IoT Central 支持 HTTP、MQTT 和 AMQP 协议进行通信，但在本教程中我们将使用 MQTT 协议。

### 什么是 Microsoft Azure？

[Microsoft Azure](https://azure.microsoft.com) 是微软的公共云计算平台。您可以使用 Microsoft Azure 来构建、测试、部署和管理通过微软管理的数据中心运行的应用程序和服务。

此外，它还提供了一系列云服务，包括计算、分析、存储和网络。Microsoft Azure 提供软件即服务 (SaaS)、平台即服务 (PaaS)、基础设施即服务 (IaaS) 和无服务器服务。最后，它支持多种编程语言、工具和框架。

### 什么是 Microsoft Azure IoT？

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) 是一组由微软管理的云服务，用于连接、监控和控制数十亿 IoT 设备。它包括设备和设备操作系统的安全性，以及帮助企业构建、部署和管理 IoT 应用程序的数据和分析功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

### 什么是 Microsoft Azure IoT Central？

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) 是一个完全托管的全球 IoT SaaS（软件即服务）解决方案，使您能够轻松地大规模连接、监控和管理 IoT 设备。它具有高度的安全性，能够随着您的业务增长进行扩展，确保您的投资具有可重复性，并与现有的业务应用程序集成。它还弥合了业务应用程序和 IoT 数据之间的差距。最后，它提供集中管理功能，用于重新配置和更新设备。

### 什么是 IoT Plug and Play？

[IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp) 使解决方案构建者能够将智能设备与其解决方案集成，而无需任何手动配置。IoT Plug and Play 的核心是设备模型，设备使用该模型向支持 IoT Plug and Play 的应用程序宣传其功能。它包含：

- 属性：表示设备或其他实体的只读或可写状态
- 遥测：设备发送的数据
- 命令：描述可以在设备上执行的功能或操作

IoT Plug and Play 认证设备消除了在 Azure IoT Central 中配置设备的麻烦，例如创建模板和添加功能及接口。

### IoT Plug and Play 认证设备

IoT Plug and Play 认证设备是 [Azure 认证设备目录](https://devicecatalog.azure.com) 中带有 IoT Plug and Play 徽章的设备。

[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 是一款 IoT Plug and Play 认证设备。

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>

要获得 IoT Plug and Play 认证，您需要满足一些条件，其中之一是发布一个 DTDL（数字孪生定义语言）模型，该模型定义了设备在 [Azure/iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models) GitHub 仓库中的功能。

这使得使用 IoT Plug and Play 认证设备的云服务能够从该存储库中了解设备功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>

## 将 Wio Terminal 连接到 Microsoft Azure IoT Central（通过 MQTT）

如前所述，我们将使用 MQTT 在 Wio Terminal 和 Microsoft Azure IoT Central 之间进行通信。不过，如果需要，您也可以使用 HTTP 桥接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>

### Microsoft Azure IoT Central 设置

首先，您需要访问 Microsoft Azure IoT Central，登录到您的 Microsoft 账户，并为您的项目创建一个新应用程序。

**步骤 1.** 登录到 Azure IoT Central。

请访问官方 [Azure IoT Central](https://apps.azureiotcentral.com/home) 网站，从左侧导航菜单中点击 **Build**，然后点击 **Custom apps**。

如果您尚未登录到 Azure IoT Central，此时系统会要求您完成注册/登录。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/1.png" /></div>

**步骤 2.** 填写 **Application name** 并在 **Pricing plan** 下选择 **Standard 0**。当您填写应用程序名称时，应用程序 URL 将自动生成。在本示例中，我们将以最低成本完成此任务。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/2.png" /></div>

:::note
如果您是 Azure IoT Central 的新用户，我们建议您选择 **Free**，这样不会产生费用。
:::
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>

**步骤 3.** 创建设备模板

请通过点击左侧菜单栏中的 **Device templates** 创建一个新的设备模板。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png" /></div>

请选择 **Wio Terminal** 作为我们的模板。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png" /></div>

然后点击 **Create**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png" /></div>

接着，一个现成的模板就创建好了。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png" /></div>

**步骤 5.** 创建设备

点击左侧菜单栏中的 **Devices -> Seeed Wio Terminal**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png" /></div>

点击 **New**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png" /></div>

点击 **Create** 按钮完成设备的创建。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png" /></div>

创建设备后，您将在 **Device** 下看到刚刚创建的设备，请点击进入设备并点击左上角的 **Connect** 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png" /></div>

此处我们需要以下信息：

```
ID scope
Device ID
Primary key
```

请记录下这些信息，我们将在接下来的步骤中使用。

### 设置 Wio Terminal

**步骤 1.** 下载固件到您的电脑

我们的第二版固件 SenseCraft 将以最简单的方式支持 Azure IoT Central。

在 **Latest release** 下，点击 **SenseCraft-vx.x.uf2** 下载 .uf2 文件。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**步骤 2.** 将固件上传到 Wio Terminal

将 Wio Terminal 连接到电脑并打开电源，通过将电源开关向远离 "ON" 位置滑动，释放后再次滑动并释放，进入 **Bootloader 模式**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

:::note
一旦 Wio Terminal 进入 Bootloader 模式，蓝色 LED 将以不同于闪烁的方式开始呼吸。
:::
打开电脑上的文件资源管理器，您会看到一个名为 **Arduino** 的新外部驱动器，将之前下载的 **.uf2 文件** 拖入此 **Arduino 驱动器**。

现在我们已成功将固件上传到 Wio Terminal。

**步骤 3.** Wi-Fi 和 Azure IoT 配置

当我们使用 **SenseCraft** 固件时，Wio Terminal 连接到电脑后会出现一个 USB 驱动器。

:::note
这意味着当 Wio Terminal 连接到电脑时，无需额外切换侧边按钮两次，USB 驱动器就会出现！
:::
此时，USB 驱动器中会有一个 **config.txt** 文件。请使用合适的文本编辑器打开它并添加所需的配置。

```
SSID=WiFi_Name                        // 在此处填写您的 WiFi 名称
PASSWORD=WiFi_Password                // 在此处填写您的 WiFi 密码          
ID_SCOPE=Default_ID_Scope             // 在此处填写您的 ID Scope
DEVICE_ID=Device_ID                   // 在此处填写您的设备 ID
PRIMARY_KEY=Primary_Key               // 在此处填写您的设备 Primary key
```

完成上述操作后，请保存文件。重启 Wio Terminal 以使配置生效。

### 在 Microsoft Azure IoT Central 上显示遥测数据

**步骤 1.** Wio Terminal 连接到 WiFi

进入 **Network** 选项卡并选择 **WiFi**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

现在它将等待加载配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

一旦加载的 WiFi 配置被检测到，设备将首先连接到 WiFi 网络，然后连接到 Azure IoT Central。如果成功连接到 Azure IoT Central，将显示以下内容。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**步骤 2.** 解析 Wio Terminal 数据

我们需要更改 **template** 中显示的模板样式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png" /></div>

为了适配 SenseCraft 的数据类型并实现合适的数据展示，这里需要根据下表填写原始数据。

| 显示名称         | 名称        | 能力类型         | 语义类型         |
|-----------------|------------|-------------------|-----------------|
| 加速度 X        | IMU0       | 遥测             | 无              |
| 加速度 Y        | IMU1       | 遥测             | 无              |
| 加速度 Z        | IMU2       | 遥测             | 无              |
| 光线            | Light      | 遥测             | 无              |
| 声音            | Sound      | 遥测             | 无              |
| 温度            | Temp_Humi0 | 遥测             | 无              |
| 湿度            | Temp_Humi1 | 遥测             | 无              |
| 二氧化碳        | CO2_VOC0   | 遥测             | 无              |
| 挥发性有机化合物 | CO2_VOC1   | 遥测             | 无              |
| 土壤湿度        | Soil       | 遥测             | 无              |
| 视觉 AI 1       | Vision0    | 遥测             | 无              |
| 视觉 AI 2       | Vision1    | 遥测             | 无              |
| 视觉 AI 3       | Vision2    | 遥测             | 无              |
| 视觉 AI 4       | Vision3    | 遥测             | 无              |
| 视觉 AI 5       | Vision4    | 遥测             | 无              |
| 视觉 AI 6       | Vision5    | 遥测             | 无              |
| 视觉 AI 7       | Vision6    | 遥测             | 无              |
| 视觉 AI 8       | Vision7    | 遥测             | 无              |
| 视觉 AI 9       | Vision8    | 遥测             | 无              |
| 视觉 AI 10      | Vision9    | 遥测             | 无              |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/68.png" /></div>

完成表单后，请点击 **Save** 按钮。

点击左侧导航菜单中的 **Overview**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/16.png" /></div>

展开 **select a telemetry** 下拉菜单，选择您想要可视化的遥测数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/70.png" /></div>

点击 **Add tile**，您将看到磁贴被添加到 Azure IoT Central 仪表板中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/71.png" /></div>

**注意：** 您可以根据自己的喜好调整磁贴的大小或更改其可视化方式。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_azure_central/19.png" /></div>

点击 **Save** 并点击 **Publish**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/27.png" /></div>

打开您之前访问过的 Azure IoT Central 仪表板。点击左侧导航菜单中的 **Devices**。您将看到 **Seeed Wio Terminal** 出现在设备列表中。点击它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/14.png" /></div>

点击您之前配置的 **设备名称** 条目。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/23.png" /></div>

您还可以点击 **Raw data** 标签以实时查看所有遥测数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/28.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>