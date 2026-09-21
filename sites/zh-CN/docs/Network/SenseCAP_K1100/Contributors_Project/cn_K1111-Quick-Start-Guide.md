---
description: 土壤湿度监测报警系统
title: 土壤湿度监测报警系统
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1111-Quick-Start-Guide
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/cn/K1111-Quick-Start-Guide/
---
# 土壤湿度监测报警系统

在本教程中，我们将向你展示如何使用 Wio Terminal 连接套件中的 Grove - Wio-E5 和 Grove - Soil Moisture Sensor，将它们接入 Azure IoT Central 平台，构建一个实时的后院盆栽监测和浇水提醒系统，初步体验物联网。

## 可升级为工业级传感器

借助 SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，你可以轻松将 Grove 升级为 LoRaWAN® 传感器。Seeed 不仅帮助你完成原型开发，还为你提供使用 SenseCAP 系列高可靠[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、对全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括用于土壤湿度、空气温度和湿度、光照强度、CO2、EC 的传感器，以及一款 8 合 1 气象站。尝试使用最新的 SenseCAP S210x 来完成你下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录仪</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温度和湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光照</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温度、湿度和 CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度和温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度、温度和 EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody></table>

## 前置条件

在开始之前，我们需要满足以下前置条件：

### 所需材料

<table align="center">
  <tbody>
    <tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={310} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove 土壤湿度传感器</td>
    </tr>
  </tbody>
</table>

**软件**

<div>
  - <a href="https://www.arduino.cc/" target="_blank"><span>Arduino</span></a>
</div>

我们将通过 Arduino 向 Wio Terminal 上传程序。如果这是你第一次在 Wio Terminal 上使用 Arduino，我们强烈建议你参考
  <a href="https://wiki.seeedstudio.com/cn/Preliminary-Preparation/" target="_blank"><span>Wio Terminal 入门指南</span></a>。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

**其他**

- 盆栽

在这个快速上手示例中，我们使用的是土壤湿度传感器。因此，最好准备一个土层足够深的盆栽。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit32.png" /></div>



### Azure IoT 注册以接收通知

<a href="https://portal.azure.com/" target="_blank"><span>Azure IoT Central</span> </a>
 是一个托管在云端的托管服务，作为物联网应用与其连接设备之间通信的中央消息枢纽。



<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit30.png" /></div>

## 土壤湿度监测入门

在这个快速演示中，我们只需要通过 Grove - Soil Moisture Sensor 建立一个简单的 LoRa® 连接，用于实现自动土壤湿度监测和告警。

### 设备初始化

- **步骤 1**. 使用 Grove 线缆将所有设备连接在一起，其中 Grove - Soil Moisture Sensor 接在 Wio Terminal 的**右侧**，Grove - Wio-E5 接在**左侧**。

:::note
Grove - Wio-E5 所在的位置会影响上传代码的写法。
:::

- **步骤 2**. 使用 Type-C 线缆将电脑与 Wio Terminal 连接。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" /></div>



### 集成 Azure IoT 平台

我们可以集成另一个平台 **Azure IoT** 来展示和管理我们的数据，甚至执行一些操作。

- **步骤 1**. 先打开平台页面，点击页面左侧栏中的 "Integrations"，然后选择 "Azure IoT Central"。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit15.png" /></div>

- **步骤 2**. 在 <a href="https://apps.azureiotcentral.com/" target="_blank"><span>Azure IoT Central</span></a>
 上创建一个新应用。然后在平台中通过填写以下所需信息来集成 Azure IoT Central：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit16.png" /></div>

- **步骤 3**. 点击页面左侧栏中的 "Flows"，拖动 Azure IoT Central 的模块并将其连接在自定义函数之后，顺序应如下所示：

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit17.png" /></div>

- **步骤 4**. 转到 "Azure IoT Central" 页面，在左侧选择 "Devices"。我们可以看到一个以一些随机数字命名的设备弹出。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit18.png" /></div>

- **步骤 5**. 选择该设备并检查 "Raw data" 信息，如下图所示。该信息包含所有数据，包括解码后的数据：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit19.png" /></div>

我们已经实现了连续数据的显示，但是否可以将它们以图表形式展示，并且基于这些数据执行一些操作呢？

### Azure IoT Central 的进一步功能

我们可以在平台上管理所有数据，并选择我们关心的数据，在此基础上构建自动邮件告警。

- **步骤 1**. 在 "Devices" 页面点击 "Unformated data"，并创建一个自动设备模板。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit20.png" /></div>

- **步骤 2**. 转到 "Device template"，我们可以看到模板包含的内容，并将同类型的数据分别存储在各个模块中：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21.png" /></div>

- **步骤 3**. 选择 "Overview"，我们可以看到已经自动创建了一些图表来显示数据值。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21a.png" /></div>

修改我们想要显示的土壤湿度数据，并重命名该图表。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit22.png" /></div>

记得点击 **"Save"**，然后点击 **"Pubilsh"**，在完成后保存模板：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit23.png" /></div>

- **步骤 4**. 转到左侧的 "Rules" 并创建一个新的规则。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit24.png" /></div>

- **步骤 5**. 填写以下信息以创建自动邮件告警：

设备模板（通常为默认模板）：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit25.png" /></div>

设置数据的类型以及我们想要的阈值：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit11.png" /></div>

填写在 Azure IoT Central 中注册的邮箱地址以及我们想要发送的备注内容：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit12.png" /></div>

**结果**

- 回到左侧的 "Devices" 并选择该设备，我们可以看到数据已经以图表形式显示出来。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit31.png" /></div>

- 同时，如果我们设置的数值达到了阈值，之前设置的连续邮件将会被发送到该邮箱。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit26.png" /></div>

邮件的内容如下：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit27.png" /></div>

记得给盆栽浇水！

谢谢！

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持方式，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业级传感器

借助 SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 升级为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型开发，还为您提供使用 SenseCAP 系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、对全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括用于土壤湿度、空气温度和湿度、光照强度、CO2、EC 的传感器，以及一款 8 合 1 气象站。请在下一个工业项目中尝试最新的 SenseCAP S210x，以获得成功的应用体验。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## 声明

- LoRa® 标识是 Semtech Corporation 或其子公司的商标。
- LoRaWAN® 是在 LoRa Alliance® 授权下使用的标识。
