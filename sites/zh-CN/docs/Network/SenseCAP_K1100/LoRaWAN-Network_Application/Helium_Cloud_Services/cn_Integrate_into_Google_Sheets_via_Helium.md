---
description: 集成到 Google Sheets
title: 集成到 Google Sheets
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Integrate_into_Google_Sheets_via_Helium
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# 通过 Helium 集成到 Google Sheets

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/83.jpg" /></div>

Google Sheets 是一个基于网络的应用程序，用户可以通过它创建、更新和修改电子表格，并实时在线共享数据。

Google Sheets 在线电子表格应用程序允许用户在线创建、编辑和格式化电子表格，以便组织和分析信息。Google Sheets 通常被拿来与 Microsoft Excel 比较，因为这两个应用程序的用途相似。Google Sheets 本质上是 Google 提供的基于云的 Microsoft Excel 基本功能版本。

得益于 Helium 的集成功能，我们可以轻松地通过 Google Sheets 保存传感器数据，并据此进行一些简单的数据分析。

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松地将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供了通过 SenseCAP 系列的高性能[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及强大的 APP 支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温度和湿度、光强度、二氧化碳、电导率以及 8 合 1 气象站的传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光强度</strong></a></td>
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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; 电导率</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody>
</table>

## 创建 Google 表单

如果您在学习本教程之前尚未注册 Google 账户，请先完成您的 Google 账户注册 [这里](https://accounts.google.com/signup/v2/webcreateaccount?biz=false&flowName=GlifWebSignIn&flowEntry=SignUp&hl=en-GB)。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/67.png" /></div>

完成账户注册后，请登录 [Google 表单页面](https://docs.google.com/forms/u/0/)。然后，简单地创建一个新的 Google 表单。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/68.png" /></div>

我们建议将问题设置为“简答”。

在这里，我将以 Vision AI 模块为例创建一个表格。此表格应包含两组数据，一组是检测到的人数，另一组是其置信度。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/69.png" /></div>

:::note
    每个新创建的传感器标签都需要选择“简答”。
:::
进入“响应”选项卡，并通过点击 Google 表格按钮告诉表单将结果发送到 Google 表格。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/70.png" /></div>

在新弹出的窗口中输入 Google 表单标题，然后点击右下角的 **创建** 按钮。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/71.png" /></div>

确保我们已创建所需的列。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/72.png" /></div>

## 使表单公开

返回表单设置页面，点击右上角的 **发送** 按钮以获取表单的分享链接。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/73.png" /></div>

您将获得一个类似这样的分享链接：

`https://docs.google.com/forms/d/e/1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw/viewform?usp=sf_link`

我们只需要表单的 ID，因此需要移除前缀 `https://docs.google.com/forms/d/e/` 和后缀 `/viewform?usp=sf_link`。剩下的应该是一个不包含斜杠的大字符串。

`1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw`

请记录下此 ID，它将在 Helium 集成中使用。

## 在 Helium 中添加 Google 表格集成

返回 Helium，在控制台中添加 Google 表格集成，进入左侧菜单的“Integrations”。选择要添加的集成——在本例中是 Google 表格集成，如下所示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/74.png" /></div>

在新页面中点击 **Add Integration**。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/75.png" /></div>

在新页面中，将我们之前获取的表单 ID 输入到对应字段中，并点击 **Get Google Form Fields** 检查 ID 是否正确。如果点击后能够获取到表单列中的标签内容，则说明链接正确。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/76.png" /></div>

点击底部的 **Generate Function Body w/ Fields Above**，Helium 将自动为我们生成所需的解码器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/77.png" /></div>

:::tip
此时，您不必急于点击右侧的 Add Integration 按钮，因为集成仍需稍作修改以适应我们传递的传感器值。
:::

## 创建你的解码器

我们已经为您准备好了完整的解码器代码，用于将套件中的所有传感器数据导入到 Google 表单中，请参考下表。

在使用对应传感器的解码器代码之前，请确保您已按照上面的教程创建并共享了 Google 表单。如果您想直接使用我们提供的代码，**表单中传感器的标签也必须与代码匹配**。

<table align="center">
  <tbody><tr>
      <th>传感器类型</th>
      <th>下载地址</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内置光传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/light.js">下载</a></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内置 IMU 传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/IMU.js">下载</a></td>
    </tr>
    <tr>
      <td align="center">土壤湿度传感器</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">下载</a></td>
    </tr>
    <tr>
      <td align="center">VOC 和 eCO2 气体传感器 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sgp30.js">下载</a></td>
    </tr>
    <tr>
      <td align="center">温湿度传感器 (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sht40.js">下载</a></td>
    </tr>
    <tr>
      <td align="center">视觉 AI 模块</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/visionai.js">下载</a></td>
    </tr>
  </tbody></table>

:::note
Google 表单使用的解码器不能与 [连接到 Helium](https://wiki.seeedstudio.com/cn/Connecting-to-Helium/#write-decoders-function-for-different-sensors) 中提供的解码器一起使用。
:::

接着上一步，我们需要将 Helium 的代码区域替换为您正在使用的传感器的解码器代码，然后只需点击右侧的“Add Integration”按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/78.png" /></div>

当然，不要忘记我们需要将解码器和 Google 表单的集成添加到 **Flow** 中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/79.png" /></div>

## 上传代码并发送数据到 Helium

请按照 [连接到 Helium 教程](https://wiki.seeedstudio.com/cn/Connecting-to-Helium/#upload-code-send-data-to-helium) 中的说明上传代码，将传感器的数值发送到 Helium。

一旦数据开始发送，您可以在 Google 表格中实时刷新查看数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/81.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/84.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/85.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/86.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/87.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/88.png" /></div>

您还可以像我上面所做的那样，为 Google 表格添加各种表格样式，使其更加直观，便于查看数据或理解数据趋势。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/80.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>