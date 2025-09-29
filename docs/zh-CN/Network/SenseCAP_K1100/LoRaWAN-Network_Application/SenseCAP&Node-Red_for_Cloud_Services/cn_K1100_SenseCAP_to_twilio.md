---
description: SenseCAP & Node-RED 到 Twilio
title: SenseCAP & Node-RED 到 Twilio
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1100_SenseCAP_to_twilio
last_update:
  date: 1/13/2023
  author: shuxu hu
---

# 通过 Node-RED 将 SenseCAP 连接到 Twilio

**SenseCAP K1100 - 传感器原型套件** 是 Seeed Studio 集中 LoRa® 通信技术和边缘智能产品精华的代表，旨在让 LoRa® 和物联网应用的部署和掌握变得最简单。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强、CO2、电导率以及 8 合 1 气象站的传感器。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}><strong>SenseCAP 工业传感器</strong></font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
          <strong>S2100 <br /> 数据记录仪</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 <br /> 空气温湿度</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
          <strong>S2102 <br /> 光强</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
          <strong>S2103 <br /> 空气温湿度 &amp; CO2</strong>
        </a>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
          <strong>S2104 <br /> 土壤湿度 &amp; 温度</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
          <strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; 电导率</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
          <strong>S2110 <br /> LoRaWAN® 控制器</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
          <strong>S2120 <br /> 8 合 1 气象站</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Twilio

Twilio 是一个客户互动平台，全球有数十万企业和超过一千万开发者使用它来为客户构建独特且个性化的体验。

Twilio 以通过 API 民主化语音、文本、聊天、视频和电子邮件等渠道而闻名，使每个组织都能轻松地在客户偏好的渠道上建立有意义的互动。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/1.jpg" alt="pir" width={700} height="auto" /></p>

本节将使用 SenseCAP K1100 套件以及 SenseCAP 控制台和 Node-RED 来完成在特定条件下触发 Twilio 消息推送的任务。

如果您尚未安装或不了解 Node-RED，请参考 [Node-RED & SenseCAP 教程](https://wiki.seeedstudio.com/cn/K1100_sensecap_node-red/)。

## 创建 MQTT 节点

**步骤 1.** 启动 Node-RED

通过在终端中输入命令 `node-red` 启动 Node-RED，然后打开浏览器并在地址栏中输入 [http://localhost:1880](http://localhost:1880) 来访问 Node-RED 的编辑器。

**步骤 2.** 创建 MQTT 节点

我们使用 **Network -> mqtt in** 节点，并按照 [之前的教程](https://wiki.seeedstudio.com/cn/K1100_sensecap_node-red/#mqtt-node) 中的要求，以 SenseCAP API 的格式配置 mqtt。

- 服务器：openstream.api.sensecap.seeed.cc
- 端口：1883
- 协议：MQTT V3.1.1
- 客户端 ID：格式为 `org-<Organization ID>-<Random ID>`
  - `<Organization ID>` 您的组织 ID。我们已在 [获取 SenseCAP API](/cn/K1100_sensecap_node-red#get-the-sensecap-api) 中获得。
  - `<Random ID>` 使用您自己随机生成的数字或小写字母。

- 主题格式：`/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">您的组织 ID。我们已在获取 SenseCAP API 中获得。</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">传感器设备的唯一标识。此信息可以在 Grove - Wio E5 背面的贴纸上找到，也可以在 SenseCAP 控制台设备中找到。</td>
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
      <td align="center">测量值 ID。此 ID 可以在 <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">SenseCAP 文档</a> 的测量值 ID 部分中找到。</td>
    </tr>
  </tbody></table>

**步骤 3.** 验证 MQTT 节点

配置完成后，请点击右上角的 **Deploy** 按钮以检查配置是否成功。如果填写正确，则会显示 **Connected** 字样。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## 配置 Twilio

**步骤 1.** 注册或登录 Twilio

如果您已经注册了 Twilio，请在 [Twilio 网站](https://www.twilio.com/login) 上登录。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/3.png" /></div>

如果您尚未使用或注册 Twilio，请完成注册并在 [此处](https://www.twilio.com/try-twilio) 登录。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/2.png" /></div>

**步骤 2.** 获取必要信息

我们可以尝试使用一个免费的服务，将短信发送到我们在注册时验证的手机号码。

在主界面上点击 **Get a trial phone number**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/4.png" /></div>

Twilio 将自动为您生成一个 Twilio 电话号码。

在主界面底部的 **Account Info** 下，您将找到我们需要用来建立与 Twilio 连接的信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/5.png" /></div>

请记下 **Account SID**、**Auth Token** 和 **My Twilio phone number**，我们稍后将在 Node-RED 中使用这些信息。

## 配置 Node-RED

**步骤 1.** 下载 Twilio 插件

点击右上角菜单栏并选择设置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

在 **Paletts -> Install** 中搜索并安装 **node-red-node-twilio**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/6.png" /></div>

从左侧的存储栏中添加 **twilio out**，双击它进入配置页面，然后点击编辑按钮以编辑 **twilio out** 节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/7.png" /></div>

**步骤 2.** 编辑 **twilio out** 节点

请在相应字段中填写我们在之前配置 Twilio 时获取的信息。然后点击右上角的添加按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/8.png" /></div>

接着，请填写您在 Twilio 注册时验证的手机号码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/9.png" /></div>

:::note
请注意，您需要在此处填写的手机号码前添加前缀 "**+ 国家代码**"。
:::

**步骤 3.** 配置功能节点

短信的内容可以在功能块中定义，触发条件可以是 PaaS 平台报告的数据触发某些规则，这些都可以在功能构建块中自定义。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

从左侧的功能栏中拖出功能节点，双击它进入编辑页面，然后将代码复制到 On Message 中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

例如，在本节中，当接收到传感器值时，将传感器值发送到手机，代码可以这样编写：

```javascript
var payload = msg.payload;
var topic = msg.topic;
var strs = topic.split("/");
var length = strs.length
if (length >= 2) {
    var measurementId = strs[length - 1]
    var value = payload.value
    if (measurementId == 4100) {
        msg.payload = "CO2:" + value
    } else if (measurementId == 4103) {
        msg.payload = "soilmoisture:" + value
    } else if (measurementId == 4150) {
        msg.payload = "accelX:" + value
    } else if (measurementId == 4151) {
        msg.payload = "accelY:" + value
    } else if (measurementId == 4152) {
        msg.payload = "accelZ:" + value
    } else if (measurementId == 4192) {
        msg.payload = "sound:" + value
    } else if (measurementId == 4193) {
        msg.payload = "light:" + value
    } else if (measurementId == 4195) {
        msg.payload = "tvoc:" + value
    } else if (measurementId == 4097) {
        msg.payload = "temperature:" + value
    } else if (measurementId == 4098) {
        msg.payload = "humidity:" + value
    } else if (measurementId == 4175) {
        msg.payload = "AIdetection_1:" + value
    } else if (measurementId == 4176) {
        msg.payload = "AIdetection_2:" + value
    } else if (measurementId == 4177) {
        msg.payload = "AIdetection_3:" + value
    } else if (measurementId == 4178) {
        msg.payload = "AIdetection_4:" + value
    } else if (measurementId == 4179) {
        msg.payload = "AIdetection_5:" + value
    } else if (measurementId == 4180) {
        msg.payload = "AIdetection_6:" + value
    } else if (measurementId == 4181) {
        msg.payload = "AIdetection_7:" + value
    } else if (measurementId == 4182) {
        msg.payload = "AIdetection_8:" + value
    } else if (measurementId == 4183) {
        msg.payload = "AIdetection_9:" + value
    } else if (measurementId == 4184) {
        msg.payload = "AIdetection_10:" + value
    }
}
return msg;
```

:::note
请注意您的账户余额，上述代码将每五分钟发送一次不同的传感器短信。如果直接使用上述代码，可能会快速耗尽您的余额！我们建议针对特定传感器进行编程，而不是每次发送所有传感器值。
:::

**步骤 4.** 部署

然后我们连接所有节点并点击 **Deploy** 按钮，如果一切设置正确，您将能够看到 mqtt in 节点显示已连接。

如果您想查看数据的日志信息，可以在功能节点后添加一个调试节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/10.png" /></div>

一旦 Wio Terminal 开始启动并正常工作，并开始向 SenseCAP PaaS 服务器发送数据，我们就可以在 Node-RED 的调试日志中查看数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/11.png" /></div>

如果一切正常，您还会收到来自 Twilio 的短信，其中包含传感器的数据值。

## 故障排查

> 问题1：为什么我在 Node-RED 中找不到 Palette（调色板）？

答：如果您在设置中找不到 Palette，请检查启动 Node-RED 时终端是否有错误信息。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

最常见的情况是您的 npm 版本过旧，无法启动 Palette 编辑器。

如果您的情况如上所述，请以**管理员身份运行 Powershell**，并输入以下命令来升级 npm。

```sh
npm install -g npm
```

然后重新启动 Node-RED 即可。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>