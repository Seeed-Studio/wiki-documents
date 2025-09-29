---
description: 土壤湿度监测报警系统
title: 土壤湿度监测报警系统
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1111-Quick-Start-Guide
last_update:
  date: 2023/1/13
  author: shuxu hu
---
# 土壤湿度监测报警系统

在本篇 Wiki 中，我们将向您展示如何利用 Wio Terminal 将套件中的 Grove - Wio-E5 和 Grove - 土壤湿度传感器连接起来，并通过 Helium 和 Azure IoT Central 平台，构建一个实时的后院盆栽监测和浇水提醒系统，体验物联网的魅力。

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供使用 SenseCAP 系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、兼容全球 LoRaWAN® 网络、内置 19 Ah 电池以及强大的 APP 支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、二氧化碳、EC 和 8 合 1 气象站传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光照强度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; EC</strong></a></td>
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

我们将通过 Arduino 向 Wio Terminal 上传程序。如果这是您第一次使用 Arduino 配合 Wio Terminal，我们强烈建议您参考
  <a href="https://wiki.seeedstudio.com/cn/Preliminary-Preparation/" target="_blank"><span>Wio Terminal 入门指南</span></a>。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

**其他**

- 花盆

在这个快速演示中，我们使用了一个土壤湿度传感器。因此，最好使用一个土壤足够深的花盆。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit32.png" /></div>

### Helium 注册以进行连接

<a href="https://console.helium.com/" target="_blank"><span>Helium</span></a> 是一个全球分布式的热点网络，为支持 LoRaWAN® 的物联网设备创建公共的长距离无线覆盖。

它允许我们通过 LoRa® 免费发送一定量的数据，我们将其连接到 Wio Terminal。所有连接 Wio Terminal 所需的信息都在**注册账户后的第一页**中显示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png" /></div>

:::note
设备通常需要大约 20 分钟才能真正准备好。建议在一开始就添加设备。
:::

### Azure IoT 注册以接收通知

<a href="https://portal.azure.com/" target="_blank"><span>Azure IoT Central</span></a> 是一个托管在云中的服务，作为物联网应用程序与其附加设备之间通信的中央消息中心。

它可以帮助我们管理 LoRa® 数据，并在开始的一周内执行一些操作。我们将其与 Helium 集成，以**监控数据**并设置自动**花盆浇水提醒**。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit30.png" /></div>

## 土壤湿度监测入门

在这个快速演示中，我们只需要一个简单的 LoRa® 连接和 Grove - 土壤湿度传感器，用于实现自动土壤湿度监测和警报。

### 设备初始化

- **步骤 1**. 使用 Grove 电缆将所有设备连接在一起，其中 Grove - 土壤湿度传感器连接到 Wio Terminal 的**右侧**，Grove - Wio-E5 连接到**左侧**。

:::note
Grove - Wio-E5 的位置会影响上传的代码。
:::

- **步骤 2**. 使用 Type-C 电缆将 PC 和 Wio Terminal 连接起来。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" /></div>

### 将 Wio Terminal 连接到 Helium

- **步骤 1**. 在 PC 上打开 <a href="https://console.helium.com/" target="_blank"><span>Helium</span></a> 页面，点击左侧栏的 "Devices"。**添加一个新设备**，然后查看以下信息（示例）：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3a.png" /></div>

- **步骤 2**. 下载以下 Arduino 代码并用 Arduino 打开。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></a></div><p />
</div>

- **步骤 3**. 找到特定的代码行，并将我们在 Helium 上找到的连接信息填入代码行中。注意，我们只需要更改字母和数字。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit4a.png" /></div>

- **步骤 4**. 选择正确的开发板和端口。点击左上角的按钮上传代码。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3.png" /></div>

- **步骤 5**. 打开 Arduino 右上角的 "Serial Monitor"，我们可以看到连接已完成，数据已发送。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit5a.png" /></div>

- **步骤 6**. 返回 Helium 网站，检查 "Devices"。在底部我们可以看到确实接收到了一些数据。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/7.jpg" /></div>

由于 LoRa® 通信的特性，数据的呈现形式是一个数字和字母的数组，这可能会让我们感到困惑。因此，我们需要对其进行解码以获取真实信息。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png" /></div>

### 在 Helium 中解码接收到的数据

- **步骤 1**. 点击页面左侧栏的 "Function"，并添加一个自定义函数。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png" /></div>

- **步骤 2**. 复制以下代码并添加到“自定义脚本”中，然后保存。

```cpp
function Decoder(bytes, port) {
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
  return decoded;
}
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit8.png" /></div>

- **步骤 3**. 点击左侧的“Flows”，将“Devices”和“Functions”模块拖入调色板，并将它们连接如下所示：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit9.png" /></div>

这可以帮助我们将数据转换为可读格式。

- **步骤 4（可选）**. 返回到“Function”页面，我们可以从设备中<a href="https://wiki.seeedstudio.com/cn/Connecting-to-Helium/#upload-code-send-data-to-helium" target="_blank"><span>获取输入的十六进制数据</span></a>。选择端口为“8”，然后点击“RUN”按钮。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png" /></div>

现在我们可以读取数据，但这个过程有点复杂且不易使用。我们如何才能让数据持续呈现呢？

### 集成 Azure IoT 平台

我们可以集成另一个平台 **Azure IoT** 来呈现和管理数据，甚至执行一些操作。

- **步骤 1**. 首先打开 Helium 页面，点击页面左侧的“Integrations”，然后选择“Azure IoT Central”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit15.png" /></div>

- **步骤 2**. 在<a href="https://apps.azureiotcentral.com/" target="_blank"><span>Azure IoT Central</span></a>上创建一个新应用。然后通过填写以下所需信息，将 Azure IoT Central 集成到 Helium 中：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit16.png" /></div>

- **步骤 3**. 点击页面左侧的“Flows”，将 Azure IoT Central 模块拖入并链接到自定义函数之后，顺序如下：

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit17.png" /></div>

- **步骤 4**. 转到“Azure IoT Central”页面并选择左侧的“Devices”。我们可以看到一个以随机数字命名的设备弹出。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit18.png" /></div>

- **步骤 5**. 选择设备并检查“Raw data”信息，如下图所示。信息包含所有来自 Helium 的数据，包括解码后的数据：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit19.png" /></div>

我们已经实现了连续数据的显示，但是否可以将数据以图表形式显示并基于数据执行一些操作呢？

### 在 Azure IoT Central 中的进一步功能

我们可以管理所有来自 Helium 的数据，并选择我们关心的数据来基于它构建自动电子邮件警报。

- **步骤 1**. 点击“Devices”页面上的“Unformated data”，并创建一个自动设备模板。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit20.png" /></div>

- **步骤 2**. 转到“Device template”，我们可以看到模板包含并将同类型数据分别存储在每个模块中：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21.png" /></div>

- **步骤 3**. 选择“Overview”，我们可以看到已经自动创建了一些显示数据值的图表。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21a.png" /></div>

更改我们想要显示的土壤湿度数据并重命名图表。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit22.png" /></div>

记得点击 **“Save”**，然后点击 **“Publish”** 保存模板：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit23.png" /></div>

- **步骤 4**. 转到左侧的“Rules”，并创建一个新规则。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit24.png" /></div>

- **步骤 5**. 填写以下信息以创建自动电子邮件警报：

设备模板（通常为默认值）：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit25.png" /></div>

设置数据类型和我们想要的阈值：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit11.png" /></div>

填写注册在 Azure IoT Central 的电子邮件地址以及我们想发送的备注：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit12.png" /></div>

**结果**

- 返回左侧的“Devices”，选择设备，我们可以看到数据已经以图表形式显示。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit31.png" /></div>

- 同时，如果我们设置的值达到阈值，之前设置的连续电子邮件将发送到指定邮箱。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit26.png" /></div>

电子邮件内容如下：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit27.png" /></div>

记得给盆栽浇水！

谢谢！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供通过 SenseCAP 系列的高性能[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列凭借 IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及强大的 APP 支持，成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、二氧化碳、电导率（EC）传感器以及一体化 8 合 1 气象站。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## 声明

- LoRa® 标志是 Semtech Corporation 或其子公司的商标。
- LoRaWAN® 是根据 LoRa Alliance® 授权使用的标志。