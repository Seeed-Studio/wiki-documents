---
description: 使用 Power BI 进行数据可视化
title: 使用 Power BI 进行数据可视化
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1100_Azure_to_PowerBI
last_update:
  date: 2023/1/13
  author: shuxu hu
---
# Microsoft Azure IoT 数据可视化与 Power BI

**SenseCAP K1100 - 传感器原型套件**代表了 Seeed Studio 在 LoRa® 通信技术和边缘智能产品上的精华，旨在让用户能够最轻松地部署和掌握 LoRa® 和物联网应用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固耐用的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列拥有 IP66 防护外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池，以及强大的 APP 支持，是工业应用的最佳选择。该系列包括土壤湿度、空气温度和湿度、光照强度、CO2、EC，以及 8 合 1 气象站传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温度 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光照强度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温度 &amp; 湿度 &amp; CO2</strong></a></td>
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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody></table>

## Microsoft Azure IoT

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) 是一组由 Microsoft 管理的云服务，用于连接、监控和控制数十亿个 IoT 设备。它包括设备和设备的安全性和操作系统，以及帮助企业构建、部署和管理 IoT 应用程序的数据和分析功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

## Power BI

通过将 Power BI 与 Azure 分析服务（包括 Azure Synapse Analytics 和 Azure Data Lake Storage）结合使用，可以连接并分析整个数据资产。分析 PB 级数据，使用高级 AI 功能，应用额外的数据保护，并更轻松地在组织内共享洞察。

通过将 Power BI 和 Azure 结合使用，将数据转化为竞争优势，连接、组合并分析整个数据资产。

在本教程中，您将配置 IoT Central 应用程序以导出从设备收集的遥测数据。然后，使用 Power BI 为商店经理创建一个自定义仪表板，以可视化从遥测数据中得出的洞察。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png" /></div>

在本教程中，您将学习如何：

- 配置 IoT Central 应用程序以将遥测数据导出到事件中心。
- 使用 Logic Apps 将数据从事件中心发送到 Power BI 流数据集。
- 创建 Power BI 仪表板以可视化流数据集中的数据。

## 初步准备

完成本教程，您需要：

- 一个 Azure 订阅。如果您没有 Azure 订阅，请在开始之前创建一个[免费账户](https://azure.microsoft.com/free/?WT.mc_id=A261C142F)。
- 一个 Power BI 账户。如果您没有 Power BI 账户，请注册一个[免费 Power BI Pro 试用版](https://app.powerbi.com/signupredirect?pbi_source=web)。
- 在以下任意一个 Wiki 中，您已成功将数据上传到 Azure IoT Central：
  - [通过 Node-RED 将 SenseCAP 连接到 Azure IoT Central](https://wiki.seeedstudio.com/cn/K1100_SenseCAP_to_Azure_IoT_Central/)
  - [通过 WiFi 将 Wio Terminal 连接到 Microsoft Azure IoT Central](https://wiki.seeedstudio.com/cn/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## 创建资源组

在创建事件中心和逻辑应用之前，您需要创建一个**资源组**来管理它们。资源组应与您的 In-store analytics - checkout IoT Central 应用程序位于同一位置。创建资源组的步骤如下：

**步骤 1.** 登录到 [Azure 门户](https://portal.azure.com/)。

**步骤 2.** 在左侧导航栏中，选择 **Resource groups**，然后选择 **Create**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/1.png" /></div>

- 对于 **Subscription**，选择您用于创建 IoT Central 应用程序的 Azure 订阅名称。
- 对于 **Resource group** 名称，输入 **retail-store-analysis**。
- 对于 **Region**，选择与 IoT Central 应用程序相同的区域。

**步骤 3.** 选择 Review + Create。

在 Review + Create 页面上，选择 Create。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/2.png" /></div>

现在，您的订阅中已有一个名为 retail-store-analysis 的资源组。

## 配置事件中心

在将零售监控应用程序配置为导出遥测数据之前，您需要创建一个事件中心来接收导出的数据。以下步骤将指导您如何创建事件中心：

**步骤 4.** 在 [Azure 门户](https://portal.azure.com/) 中，选择屏幕左上角的 **创建资源**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

**步骤 5.** 在 Marketplace 搜索框中输入 Event Hubs，然后按 Enter。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/4.png" /></div>

**步骤 6.** 创建事件中心

在 Event Hubs 页面上，选择 **创建**。在创建命名空间页面上，执行以下步骤：

- 选择与创建 IoT Central 应用程序时相同的 **订阅**。
- 选择 **retail-store-analysis** 资源组。
- 输入一个唯一的命名空间名称，例如 **k1100-retail-store-analysis**。
- 选择与 IoT Central 应用程序相同的位置。
- 选择 Basic 定价层。

选择 **查看 + 创建**。系统可能需要几分钟来配置资源。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/5.png" /></div>

**步骤 7.** 获取事件中心共享密钥。

在 [Azure 门户](https://portal.azure.com/) 中，导航到 **retail-store-analysis** 资源组。

等待部署完成。您可能需要选择刷新以更新部署状态。您还可以在通知中检查事件中心命名空间创建的状态。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/6.png" /></div>

在 **retail-store-analysis** 资源组中，选择 **事件中心命名空间**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/7.png" /></div>

您将在门户中看到事件中心命名空间的主页。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/8.png" /></div>

您需要一个具有发送权限的 **连接字符串** 来从 IoT Central 进行连接。要创建连接字符串：

- 在 Azure 门户的事件中心命名空间中，选择 **共享访问策略**。然后选择 **+ 添加**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/9.png" /></div>

- 输入 **SendPolicy** 作为策略名称，选择 **发送**，然后选择创建。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/10.png" /></div>

- 在策略列表中选择 **SendPolicy**。记录下 **连接字符串-主密钥** 的值。您将在配置 IoT Central 中的导出目标时使用它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/11.png" /></div>

**步骤 8.** 获取事件中心的管理和监听密钥。

您需要一个具有管理和监听权限的连接字符串，以便从逻辑应用程序连接到事件中心。要检索连接字符串：

- 在 Azure 门户的事件中心命名空间中，选择共享访问策略。

- 在策略列表中选择 **RootManageSharedAccessKey**。
记录下 **连接字符串-主密钥** 的值。您将在配置逻辑应用程序以从事件中心获取遥测数据时使用它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/12.png" /></div>

**步骤 9.** 创建一个可用的事件中心。

现在您已经有了一个事件中心命名空间，可以创建一个事件中心以供 IoT Central 应用程序使用：

- 在门户中事件中心命名空间的主页上，选择 **+ 事件中心**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/13.png" /></div>

- 在创建事件中心页面上，输入 **store-telemetry** 作为名称，然后选择 **创建**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/14.png" /></div>

现在，您已经有了一个事件中心，可以在配置 IoT Central 应用程序的数据导出时使用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/15.png" /></div>

## 配置数据导出

现在您已经有了一个事件中心，您可以配置 IoT Central 应用程序以导出来自连接设备的遥测数据。以下步骤将指导您如何配置导出。

**步骤 1.** 登录到您的 [IoT Central 应用程序](https://apps.azureiotcentral.com/home)。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/16.png" /></div>

**步骤 2.** 数据导出

在左侧面板中选择 **Data export**。然后选择 **+ New export**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/18.png" /></div>

- 输入 **Telemetry export** 作为导出名称。
- 选择 **Telemetry** 作为要导出的数据类型。
- 在目标部分，选择 **create a new one**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/19.png" /></div>

- 新建目标
  - 输入 **Store data event hub** 作为 **Destination name**。
  - 选择 **Azure Event Hubs** 作为 **Destination type**。
  - 选择 **Connection string** 作为 **Authorization**。
  - 粘贴您在创建事件中心时保存的 **SendPolicy** 的连接字符串。
  - 输入 **store-telemetry** 作为事件中心名称。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/20.png" /></div>

选择 **Create**，然后选择 **Save**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/21.png" /></div>

在 Telemetry export 页面上，等待导出状态变为 Healthy。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/22.png" /></div>

数据导出可能需要几分钟时间才能开始将遥测数据发送到您的事件中心。您可以在 Data exports 页面上查看导出的状态。

## 创建 Power BI 数据集

您的 Power BI 仪表板将显示来自零售监控应用程序的数据。在此解决方案中，您将使用 Power BI 流式数据集作为 Power BI 仪表板的数据源。在本节中，您将定义流式数据集的架构，以便逻辑应用程序可以将数据从事件中心转发。以下步骤将指导您如何为环境传感器创建两个流式数据集，以及为占用传感器创建一个流式数据集：

**步骤 1.** 登录到您的 [Power BI 账户](https://app.powerbi.com/)。

**步骤 2.** 创建一个工作区。

选择 **Workspaces**，然后选择 **Create a workspace**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/23.png" /></div>

在 Create a workspace 页面上，输入 **In-store analytics - checkout** 作为工作区名称。选择 **Save**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/24.png" /></div>

**步骤 3.** 创建一个流式数据集。

在工作区页面上，选择 **+ New** > **Streaming dataset**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/25.png" /></div>

在 New streaming dataset 页面上，选择 API，然后选择 Next。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/26.png" /></div>

输入 **Sensor** 作为数据集名称。

输入以下表格中的三个流值：

| 值名称                   | 值类型                       |
|---------------------------|------------------------------|
| Timestamp                 | DataTime                     |
| Light                     | Number                       |
| Acceleration X            | Number                       |
| Acceleration Y            | Number                       |
| Acceleration Z            | Number                       |
| Sound                     | Number                       |

现在，您已经有了一个流式数据集。逻辑应用程序将把来自连接到您的 In-store analytics - checkout 应用程序的 Wio Terminal 的遥测数据路由到该数据集。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/27.png" /></div>

## 创建逻辑应用

在此解决方案中，逻辑应用从事件中心读取遥测数据，解析数据，然后将其发送到您创建的 Power BI 流式数据集。

在创建逻辑应用之前，您需要获取已连接到 IoT Central 应用程序的 Wio Terminal 的设备 ID。

**步骤 1.** 记录设备 ID。

- 登录到您的 [IoT Central 应用程序](https://apps.azureiotcentral.com/myapps)。在左侧面板中选择 **Devices**，然后选择 **Seeed Wio Terminal**。

记录下 **Device ID**。在以下截图中，ID 是 **k1100**：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/28.png" /></div>

**步骤 2.** 创建逻辑应用

- 登录到 [Azure 门户](https://portal.azure.com/)，并在屏幕左上角选择 **Create a resource**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

- 在搜索框中输入 **Logic App**，然后按 Enter。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/29.png" /></div>

在 Logic App 创建页面：

- 选择与您创建 IoT Central 应用程序时使用的相同 **Subscription**。
- 选择 **retail-store-analysis** 资源组。
- 输入逻辑应用的唯一名称，例如 **yourname-retail-store-analysis**。
- 选择与您 IoT Central 应用程序相同的位置。
- 将类型选择为 **Consumption**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/30.png" /></div>

选择 Create。系统可能需要几分钟来配置资源。

**步骤 3.** 配置 Logic Apps Designer

在 Azure 门户中，导航到您的新逻辑应用。在 Logic Apps Designer 页面中，向下滚动并选择 **Blank Logic App**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/31.png" /></div>

- 在 **Search connectors and triggers** 中输入 **Event Hubs**。
- 在 **Triggers** 中选择 **When events are available in Event Hub**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/32.png" /></div>

- 输入 **Store telemetry** 作为 **Connection name**。
- 将 **Authentication Type** 选择为 **Access key**。
- 粘贴之前记录的 **RootManageSharedAccessKey** 策略的事件中心连接字符串，然后选择 **Create**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/33.png" /></div>

在 "When events are available in Event Hub" 操作中：

- 在 **Event Hub name** 中选择 **store-telemetry**。
- 在 **Content type** 中选择 **application/json**。
- 将 Interval 设置为 3，将 Frequency 设置为秒。
- 选择 Save 以保存您的逻辑应用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/34.png" /></div>

要向逻辑应用设计中添加逻辑，请选择 **Code view**：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/35.png" /></div>

将 `"actions: {},"` 替换为以下 JSON。然后将占位符 `[YOUR RUUVITAG DEVICE ID]` 替换为您的 Wio Terminal 的设备 ID。

```JSON
"actions": {
            "Initialize_Device_ID_variable": {
                "inputs": {
                    "variables": [
                        {
                            "name": "DeviceID",
                            "type": "String"
                        }
                    ]
                },
                "runAfter": {},
                "type": "InitializeVariable"
            },
            "Parse_Telemetry": {
                "inputs": {
                    "content": "@triggerBody()?['ContentData']",
                    "schema": {
                        "properties": {
                            "deviceId": {
                                "type": "string"
                            },
                            "enqueuedTime": {
                                "type": "string"
                            },
                            "telemetry": {
                                "properties": {
                                    "accelX": {
                                        "type": "number"
                                    },
                                    "accelY": {
                                        "type": "number"
                                    },
                                    "accelZ": {
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "templateId": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    }
                },
                "runAfter": {
                    "Initialize_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "ParseJson"
            },
            "Set_Device_ID_variable": {
                "inputs": {
                    "name": "DeviceID",
                    "value": "@body('Parse_Telemetry')?['deviceId']"
                },
                "runAfter": {
                    "Parse_Telemetry": [
                        "Succeeded"
                    ]
                },
                "type": "SetVariable"
            },
            "Switch_by_DeviceID": {
                "cases": {
                    "Occupancy": {
                        "actions": {},
                        "case": "Occupancy"
                    },
                    "Sensor_environment": {
                        "actions": {},
                        "case": "k1100"
                    }
                },
                "default": {
                    "actions": {}
                },
                "expression": "@variables('DeviceID')",
                "runAfter": {
                    "Set_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "Switch"
            }
        },
```

选择 **保存**，然后选择 **设计器** 以查看您添加的逻辑的可视化版本。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/36.png" /></div>

选择 **Switch by DeviceID** 以展开操作。然后选择 **Sensor environment**，并选择 **添加操作**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/37.png" /></div>

在 **搜索连接器和操作** 中，输入 **Add rows to a dataset**。选择 **Power BI Add rows to a dataset** 操作。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/38.png" /></div>

选择 **登录** 并按照提示登录到您的 Power BI 账户。在登录过程完成后，在 Add rows to a dataset 操作中：

- 选择 **In-store analytics - checkout** 作为 **工作区**。
- 选择 **Sensor** 作为 **数据集**。
- 选择 **RealTimeData** 作为 **表**。
- 选择 **添加新参数**，然后选择 **Timestamp**、**Light**、**Acceleration X**、**Acceleration Y**、**Acceleration Z** 和 **Sound** 字段。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/40.png" /></div>

- 选择 **Timestamp** 字段，然后从动态内容列表中选择 **enqueuedTime**。
- 选择 **Light** 字段，然后在 Parse Telemetry 旁边选择 **查看更多**。然后选择 Light。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/41.png" /></div>

- 选择 **Acceleration X** 字段，然后在 Parse Telemetry 旁边选择 **查看更多**。然后选择 accelX。
- 选择 **Acceleration Y** 字段，然后在 Parse Telemetry 旁边选择 **查看更多**。然后选择 accelY。
- 选择 **Acceleration Z** 字段，然后在 Parse Telemetry 旁边选择 **查看更多**。然后选择 accelZ。
- 选择 **Sound** 字段，然后在 Parse Telemetry 旁边选择 **查看更多**。然后选择 Sound。

选择 **保存** 以保存更改。Sensor environment 操作看起来如下图所示。

选择 Zone 2 environment 操作，并选择添加操作。

在搜索连接器和操作中，输入 Add rows to a dataset。

逻辑应用会自动运行。要查看每次运行的状态，请导航到 Azure 门户中逻辑应用的概览页面，然后选择运行历史记录。选择刷新以更新运行列表。

## 创建 Power BI 仪表板

现在，您的 IoT Central 应用程序的遥测数据已经通过事件中心流动。然后，您的逻辑应用解析事件中心消息并将其添加到 Power BI 流数据集。现在，您可以创建一个 Power BI 仪表板来可视化这些遥测数据：

**步骤 1.** 登录到您的 [Power BI 账户](https://app.powerbi.com/)。

**步骤 2.** 选择 **工作区** > **In-store analytics - checkout**。

**步骤 3.** 选择 **+ 新建** > **仪表板**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/50.png" /></div>

输入 **Store analytics** 作为仪表板名称，然后选择 **创建**。

### 添加折线图

添加折线图卡片以显示来自 Wio Terminal 内置传感器的三轴数据。使用下表中的信息创建卡片。要添加每个卡片，请从选择 **编辑** > **添加卡片** 开始。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/51.png" /></div>

选择 **自定义流数据**，然后选择 **下一步**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_powerbi/52.png" /></div>

配置水平坐标以显示时间戳，垂直坐标以显示 X、Y 和 Z 轴上的数据值。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/53.png" /></div>

当数据流开始传输时，您将能够看到仪表板显示为折线图。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/55.png" /></div>

<!--### 添加卡片以显示环境数据

### 添加卡片以显示结账占用数据-->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>