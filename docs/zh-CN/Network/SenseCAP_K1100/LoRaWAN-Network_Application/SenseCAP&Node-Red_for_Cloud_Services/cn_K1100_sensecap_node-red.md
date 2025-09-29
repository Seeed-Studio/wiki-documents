---
description: SenseCAP 与 Node-RED 的使用
title: SenseCAP 与 Node-RED 的使用
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1100_sensecap_node-red
last_update:
  date: 2023/1/13
  author: shuxu hu
---

# SenseCAP 控制台与 Node-RED 快速入门

**SenseCAP K1100 - 传感器原型开发套件** 是 Seeed Studio 集中 LoRa® 通信技术和边缘智能产品精华的体现，旨在让 LoRa® 和物联网应用的部署和掌握变得更加简单。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型开发，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及强大的 APP 支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、二氧化碳、电导率以及 8 合 1 气象站传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光照强度</strong></a></td>
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

**Node-RED** 是一个编程工具，用于以新颖有趣的方式将硬件设备、API 和在线服务连接在一起。

它提供了一个基于浏览器的编辑器，使用户可以轻松地使用调色板中的各种节点来连接流程，并通过单击即可将其部署到运行时环境中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png" /></div>

为了让用户更方便地将 SenseCAP 平台的数据连接到各种其他 PaaS 平台以进行更深入的数据处理，我们将为 **SenseCAP & Node-RED** 制作一系列教程。

本教程是该系列的第一篇，将引导您安装和使用 Node-RED，并调用 SenseCAP 后端 API 以连接到 Node-RED。

## 安装 Node.js®

要在本地安装 Node-RED，您需要一个 [支持的 Node.js 版本](https://nodered.org/docs/faq/node-versions)。

从官方 [Node.js 首页](https://nodejs.org/en/) 下载最新的 14.x LTS 版本。它将为您的系统提供最佳版本。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
运行下载的 MSI 文件。安装 Node.js 需要本地管理员权限；如果您不是本地管理员，安装时会提示您输入管理员密码。安装时接受默认设置。安装完成后，关闭所有打开的命令提示符并重新打开，以确保新的环境变量被加载。
:::
在安装 Node.js 时，如果您使用的计算机尚未安装任何编程环境，我们建议您在安装 Node.js 时勾选安装必要工具的选项，这将为您节省许多不必要的麻烦。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

安装 Node-RED 最简单的方法是使用 Node 的包管理工具 **npm**。然而，我们不建议使用 npm 1.x 安装 Node-RED，而是将其升级到最新的 **npm 2.x** 版本。

:::note
在 **Windows** 上（需要 Windows 10 及以上版本），使用 **Win+R** 快捷键并在弹出的窗口中输入 `cmd` 打开终端，然后执行以下命令。

如果您使用的是 **MacOS** 或 **Linux**，请在终端中执行以下命令，并为非 root 用户在命令前添加 `sudo`。
:::

```sh
npm install -g npm@2.x
```

安装完成后，打开命令提示符并运行以下命令以确保 Node.js 和 npm 已正确安装。

```sh
node --version && npm --version
```

您应该会收到类似以下的输出：

```sh
> v16.17.0
> 2.15.12
```

## 安装 Node-RED

将 Node-RED 安装为全局模块会将命令 `node-red` 添加到您的系统路径中。在命令提示符中执行以下命令：

```sh
npm install -g --unsafe-perm node-red
```

如果 Node-RED 已作为全局 npm 包安装，则直接执行命令 `node-red`：

```sh
node-red
```

这将在终端中输出 Node-RED 的日志。您必须保持终端打开以保持 Node-RED 运行。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

这将允许您在 http://localhost:1880 上查看 Node-RED 编辑器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## <span id="jump1">获取 SenseCAP API</span>

在进入本节之前，请确保您已在 SenseCAP 控制台中绑定了您的 K1100 设备。

登录 [SenseCAP 控制台](https://sensecap.seeed.cc/portal/#/dashboard)。在仪表板顶部用户名右侧的下拉栏中，可以找到 **组织信息**，请点击选择。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/5.png" /></div>

在组织信息页面，您可以看到 **组织 ID**，请先记录下来，我们将在后续步骤中使用它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/6.png" /></div>

接下来，我们还需要获取 SenseCAP 的 API 密钥。请点击仪表板左侧的 **安全 -> 访问 API 密钥**。然后创建一个访问密钥。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/11.png" /></div>

点击您创建的 **API ID**，您将获得其 **访问 API 密钥**，请将其记录下来，我们将在后续步骤中使用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/7.png" /></div>

## 创建 HTTP 节点

编辑器窗口由四个组件组成：

- 顶部的标题栏，包含部署按钮、主菜单，以及如果启用了用户身份验证，还包含用户菜单。
- 左侧的 [节点面板](https://nodered.org/docs/user-guide/editor/palette)，包含可用的节点。
- 中间的主 [工作区](https://nodered.org/docs/user-guide/editor/workspace)，用于创建流程。
- 右侧的 [侧边栏](https://nodered.org/docs/user-guide/editor/sidebar)。

点击上方链接可以了解每个组件的更多信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/12.png" /></div>

在本示例中，我们将向您展示如何使用 MQTT 节点显示 SenseCAP 接收到的传感器值。在此之前，让我们先了解一下我们将来会使用的节点。

### http 节点

#### http in 节点

**http in** 节点可用于创建 Web 服务。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/13.png" /></div>

将节点拖到工作区并双击节点以访问节点的配置页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/14.png" /></div>

在这里，我们需要为您创建的 Web 服务设置一个 URL，以便您可以通过地址 `http://localhost:1880/<URL>` 访问您创建的网页。

#### http response 节点

**http response** 节点将响应发送回从 HTTP 输入节点接收到的请求。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/15.png" /></div>

通常，我们不需要单独配置它，只需直接将其拖到工作区即可使用。

#### template 节点

template 节点可以根据提供的模板设置属性。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/17.png" /></div>

我们将使用此节点，并使用简单的 HTML 语言完成网页显示内容的配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/18.png" /></div>

例如，我们想显示 "Hello World!"。

<div>
  ```html
  <h1>Hello World!</h1>
  ```
</div>

最后，我们将 **http in** 连接到 **template**，再将 **template** 连接到 **http response**。然后点击右上角的 **部署** 按钮，这样一个简单的网页就创建完成了，这是基本的 Node-RED 操作步骤。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/19.png" /></div>

在本示例中，我们创建了一个传感器数据的 URL，因此部署后，我们可以在浏览器地址栏中输入 `http://localhost:1880/sensor_data` 来访问我们刚刚创建的页面。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100-nodered/20.png" /></div>

## 创建一个 MQTT 节点

在本节中，我们将描述如何通过 MQTT 节点获取 SenseCAP 的数据信息。

### debug 节点

在调试侧边栏选项卡中显示选定的消息属性，并可选择显示运行时日志。默认情况下，它显示 `msg.payload`，但可以配置为显示任何属性、完整消息或 JSONata 表达式的结果。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/23.png" /></div>

### mqtt 节点

连接到一个 MQTT 代理并订阅指定主题的消息。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/26.png" /></div>

**步骤 1.** 添加一个新的 mqtt-broker 节点。

拖出一个 **mqtt in** 节点，双击它进入配置页面，然后点击 **Add new mqtt-broker** 后的编辑按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/27.png" /></div>

mqtt-broker 的配置需要填写如下内容：

- 服务器：openstream.api.sensecap.seeed.cc
- 端口：1883
- 协议：MQTT V3.1.1
- 客户端 ID：格式为 `org-<Organization ID>-<Random ID>`
  - `<Organization ID>`：您的组织 ID。我们已在 [获取 SenseCAP API](#jump1) 中获取。
  - `<Random ID>`：使用您自己随机生成的数字或小写字母。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/28.png" /></div>

然后我们在 **Security** 选项字段中填写用户名和密码。

- 用户名：格式为 `org-<Organization ID>`
  - `<Organization ID>`：您的组织 ID。我们已在 [获取 SenseCAP API](#jump1) 中获取。
- 密码：填写我们在 [获取 SenseCAP API](#jump1) 中获取的 **Access API keys**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/29.png" /></div>

最后，点击右上角的 **Add** 按钮返回到 **mqtt in** 节点的配置页面。

- 主题：配置一个特定格式的主题以确定接收的设备类型和数据类型。

主题格式：`/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">您的组织 ID。我们已在 <a href="#jump1" target="_blank">获取 SenseCAP API</a> 中获取。</td>
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

:::note
本教程内容仅适用于 K1100 套件，因此请参考 **LoraWAN Dev Kit** 中的测量值 ID，不要调用其他 ID。
:::
<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/k1100-nodered/30.png" /></div>

例如，如果我想获取 Wio Terminal 发送的光照值的传感器数据，那么我填写的主题信息应该是：

```
/device_sensor_data/424324324324324/2CF7F1C043200002/1/+/4193
```

:::tip
`<OrgID>` 字段是必需的，"+" 表示此字段没有过滤器，可以匹配所有值。因此，`/ + / + / + / +` 表示监听所有 `<DeviceEUI>`、`<Channel>`、`<Reserved>` 和 `<MeasurementID>`。

如果您想监听所有消息，那么主题应该是：

```
    /device_sensor_data/424324324324324/+/+/+/+
```

:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/31.png" /></div>

**步骤 2.** 添加 debug 节点

然后我们可以添加 debug 节点，以便更容易检查一切是否正常工作。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/34.png" /></div>

**步骤 3.** 启动 Wio Terminal 并开始向 SenseCAP 发送数据。

我们点击 **Deploy** 按钮，如果一切设置正确，您将能够看到 **mqtt in** 节点显示已连接。一旦 Wio Terminal 开始启动并工作并向 SenseCAP 发送数据，您将在调试窗口中看到数据已经显示出来。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/33.png" /></div>

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