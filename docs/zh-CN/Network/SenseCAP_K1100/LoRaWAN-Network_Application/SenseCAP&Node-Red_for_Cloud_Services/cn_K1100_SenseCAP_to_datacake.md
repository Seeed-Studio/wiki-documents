---
description: SenseCAP & Node-RED 到 Datacake
title: SenseCAP & Node-RED 到 Datacake
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1100_SenseCAP_to_datacake
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# 通过 Node-RED 将 SenseCAP 连接到 Datacake

**SenseCAP K1100 - 传感器原型套件**代表了 Seeed Studio 在 LoRa® 通信技术和边缘智能产品上的精华，旨在让用户能够最轻松地部署和掌握 LoRa® 和物联网应用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固耐用的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括用于土壤湿度、空气温度和湿度、光强度、二氧化碳、电导率以及 8 合 1 气象站的传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温度 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光强度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温度 &amp; 湿度 &amp; 二氧化碳</strong></a></td>
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

## Datacake

Datacake 是一个多用途的低代码 IoT 平台，无需编程技能，只需极少的时间即可创建自定义 IoT 应用程序。

本章内容将继续使用前面介绍的 Node-RED，并通过 Node-RED 实现对 K1100 套件在 Datacake 中的管理。

如果您尚未安装或不了解 Node-RED，请参考 [Node-RED & SenseCAP 教程](https://wiki.seeedstudio.com/cn/K1100_sensecap_node-red/)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/1.png" alt="pir" width={600} height="auto" /></p>

## 创建 MQTT 节点

**步骤 1.** 启动 Node-RED

通过在终端中输入命令 `node-red` 启动 Node-RED，然后打开浏览器，在地址栏中输入 [http://localhost:1880](http://localhost:1880) 访问 Node-RED 编辑器。

**步骤 2.** 创建 MQTT 节点

我们使用 **Network -> mqtt in** 节点，并按照 [前面的教程](https://wiki.seeedstudio.com/cn/K1100_sensecap_node-red/#mqtt-node) 中的要求，以 SenseCAP API 的格式配置 mqtt。

- 服务器：openstream.api.sensecap.seeed.cc
- 端口：1883
- 协议：MQTT V3.1.1
- 客户端 ID：格式为 `org-<Organization ID>-<Random ID>`
  - `<Organization ID>`：您的组织 ID。我们已在 [获取 SenseCAP API](/cn/K1100_sensecap_node-red#get-the-sensecap-api) 中获取。
  - `<Random ID>`：使用您自己随机生成的数字或小写字母。

- 主题格式：`/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">您的组织 ID。我们已在获取 SenseCAP API 中获取。</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">传感器设备的唯一标识。此信息可以在 Grove - Wio E5 背面的标签上找到，也可以在 SenseCAP 控制台设备中找到。</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">设备上连接传感器的物理接口。对于 K1100 套件，此处的默认值为 1。</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">保留字段。</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">测量值 ID。此 ID 可在 <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">SenseCAP 文档</a> 的测量 ID 部分中找到。</td>
    </tr>
  </tbody></table>

**步骤 3.** 验证 MQTT 节点

配置完成后，请点击右上角的 **Deploy** 按钮，检查配置是否成功。如果填写正确，则会显示 **Connected**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## 配置 Datacake

**步骤 1.** 注册或登录 Datacake

如果您已注册 Datacake，请在 [Datacake 网站](https://datacake.co/) 上登录。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/3.png" /></div>

如果您尚未注册 Datacake，请在 [此处](https://app.datacake.de/signup) 完成注册并登录。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/2.png" /></div>

**步骤 2.** 新建工作区

登录 Datacake 后，点击左上角的账户名称并选择 **Add Workspace**，然后为您的工作区命名。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/8.png" /></div>

**步骤 3.** 新建设备

进入新创建的工作区后，创建一个新设备。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/9.png" /></div>

选择 **API**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/4.png" /></div>

选择 **New Product**，并为产品命名。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/5.png" /></div>

在此部分，我们将选择免费选项完成。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/7.png" /></div>

**步骤 4.** 配置设备

点击刚创建的新设备并选择 **Configuration**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/10.png" /></div>

找到 "Fields" 并点击 **Add Field**，然后输入您希望在 Datacake 中管理的数据名称。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/11.png" /></div>

:::note
 注意，IDENTIFIER 字段必须全部为大写，并且在稍后配置的 Node RED 的功能节点中，传入的内容也需要为大写。
:::

**步骤 5.** 获取 API 令牌

点击左上角的账户名称并选择 **Edit Profile**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/12.png" /></div>

然后保存 API 中的 **API token**，我们稍后将在 Node RED 中使用它。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/13.png" /></div>

## 配置 Node-RED

**步骤 1.** 下载 Datacake 插件

点击右上角菜单栏并选择设置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

在 **Paletts -> Install** 中搜索并安装 **node-red-contrib-datacake**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/14.png" /></div>

从左侧的存储栏中添加 **datacake - out**，双击它进入配置页面，然后点击编辑按钮以编辑 **datacake - out** 节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/15.png" /></div>

**步骤 2.** 编辑 **datacake - out** 节点

请在 **API Token** 中填写我们在之前配置 Datacake 时获取的 API 令牌。然后点击右上角的添加按钮。

接着选择我们之前创建的工作区名称。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/16.png" /></div>

设备会自动刷新为刚刚创建的新设备，字段下拉框会显示新创建的字段。如果您不想在这里设置字段，也可以通过修改 payload 的 fieldName 来通过代码配置字段。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/17.png" /></div>

**步骤 3.** 配置函数节点

向 Datacake 报告数据需要遵循特定的数据格式，因此需要添加一个函数节点来处理数据格式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

从左侧的函数栏中拖出函数节点，双击它进入编辑页面，然后将代码复制到 On Message 中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        msg.payload = payload.value
        if (measurementId == 4150) {
            msg.fieldName = "ACCELX"
        } else if (measurementId == 4151) {
            msg.fieldName = "ACCELY"
        } else if (measurementId == 4152) {
            msg.fieldName = "ACCELZ"
        } else if (measurementId == 4192) {
            msg.fieldName = "VOLUME"
        } else if (measurementId == 4193) {
            msg.fieldName = "LIGHTINTENSITY"
        } else if (measurementId == 4103) {
            msg.fieldName = "SOILMOISTURE"
        } else if (measurementId == 4195) {
            msg.fieldName = "TVOC"
        } else if (measurementId == 4100) {
            msg.fieldName = "CO2"
        } else if (measurementId == 4097) {
            msg.fieldName = "AIRTEMPERATURE"
        } else if (measurementId == 4098) {
            msg.fieldName = "AIRHUMIDITY"
        } else if (measurementId == 4175) {
            msg.fieldName = "AIDETECTION1"
        } else if (measurementId == 4176) {
            msg.fieldName = "AIDETECTION2"
        } else if (measurementId == 4177) {
            msg.fieldName = "AIDETECTION3"
        } else if (measurementId == 4178) {
            msg.fieldName = "AIDETECTION4"
        } else if (measurementId == 4179) {
            msg.fieldName = "AIDETECTION5"
        } else if (measurementId == 4180) {
            msg.fieldName = "AIDETECTION6"
        } else if (measurementId == 4181) {
            msg.fieldName = "AIDETECTION7"
        } else if (measurementId == 4182) {
            msg.fieldName = "AIDETECTION8"
        } else if (measurementId == 4183) {
            msg.fieldName = "AIDETECTION9"
        } else if (measurementId == 4184) {
            msg.fieldName = "AIDETECTION10"
        }
    }
    return msg;
}
```

**步骤 4.** 部署

然后我们连接所有节点并点击 **Deploy** 按钮，如果一切设置正确，您将能够看到 mqtt in 节点显示已连接。

如果您想查看数据的日志信息，可以在函数节点后添加一个调试节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/18.png" /></div>

一旦 Wio Terminal 开始启动并工作，并开始向 SenseCAP PaaS 服务器发送数据，我们就可以在 Node-RED 调试日志中查看数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/19.png" /></div>

回到 Datacake 仪表板，您可以在该设备的 **History** 部分看到所有数据信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/20.png" /></div>

## 故障排查

> 问题1：为什么我在 Node-RED 中找不到调色板（Palette）？

答：如果您在设置中找不到调色板，请检查启动 Node-RED 时终端是否有错误信息。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

最常见的情况是您的 npm 版本过旧，无法启动调色板编辑器。

如果您的情况如上所述，请以**管理员身份运行 Powershell**，并输入以下命令来升级 npm。

```sh
npm install -g npm
```

然后重新启动 Node-RED 即可。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>