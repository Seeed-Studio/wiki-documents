---
description: 集成到 Azure IoT Hub
title: 集成到 Azure IoT Hub
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Integrate-into-Azure-IoT-Hub
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# 集成到 Azure IoT Hub

物联网（IoT）是一个由物理设备组成的网络，这些设备通过互联网或其他网络连接并与其他设备和服务交换数据。目前，全球已有超过100亿台连接设备，并且每年还在不断增加。任何可以嵌入必要传感器和软件的设备都可以通过互联网连接。

Azure IoT Hub 是一个托管在云中的服务，它充当 IoT 应用程序与其附加设备之间通信的中央消息中心。您可以可靠且安全地连接数百万台设备及其后端解决方案。几乎任何设备都可以连接到 IoT Hub。

支持多种消息传递模式，包括设备到云的遥测、从设备上传文件以及从云端控制设备的请求-响应方法。IoT Hub 还支持监控功能，帮助您跟踪设备创建、设备连接和设备故障。

- 有关使用 Microsoft Azure IoT Hub 的更多信息，请参考[这里](https://docs.microsoft.com/en-us/azure/iot-hub/iot-concepts-and-iot-hub)。

在本章中，您需要切换到 [Microsoft Azure](https://portal.azure.com/#home)。之后，您可能需要注册一个免费账户。一个新的[账户注册](https://azure.microsoft.com/en-gb/free/?v=exp&adobe_mc_sdid=SDID%3D15AD43418726D152-6CD00D48F523D667%7CMCORGID%3DEA76ADE95776D2EC7F000101%40AdobeOrg%7CTS%3D1646905124&adobe_mc_ref=https%3A%2F%2Fazure.microsoft.com%2Fzh-cn%2Ffree%2F)将为您提供 $200 的免费信用额度，您可以完全用来完成我们的操作流程。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/143.png" /></div>

## 创建资源组

资源组是一个容器，用于存储与 Azure 解决方案相关的资源。资源组可以包含解决方案的所有资源，或者仅包含您希望作为一个组管理的资源。您可以根据最适合您组织的方式决定如何将资源分配到资源组中。通常，将共享相同生命周期的资源添加到同一个资源组中，以便您可以轻松地将它们作为一个组进行部署、更新和删除。

首先，请使用您的注册账户登录 [Azure 门户](https://portal.azure.com/)。

选择 **资源组**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/144.png" /></div>

选择 **创建**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/145.png" /></div>

输入以下值：

- **订阅**：选择您的 Azure 订阅。

- **资源组**：输入一个新的资源组名称。

- **区域**：选择一个 Azure 位置，例如北欧。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/146.png" /></div>

选择 **查看 + 创建**。

选择 **创建**。创建资源组需要几秒钟。

从顶部菜单中选择刷新以刷新资源组列表，然后选择新创建的资源组以打开它。或者从顶部选择通知（铃铛图标），然后选择转到资源组以打开新创建的资源组。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/147.png" /></div>

## 创建 Microsoft Azure IoT Hub

本步骤描述了如何使用 Microsoft Azure 门户创建和管理 Microsoft Azure IoT Hub。从 Microsoft Azure 首页，选择 **创建资源** 按钮，然后在“搜索市场”字段中输入 IoT Hub。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/11.jpg" /></div>

从搜索结果中选择 IoT Hub，然后选择“创建”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/12.jpg" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/13.jpg" /></div>

在“基本信息”选项卡中，按以下要求填写字段：

- **订阅**：选择要用于 IoT Hub 的订阅。

- **资源组**：选择一个资源组或创建一个新的资源组。要创建新的资源组，选择“新建”并填写您想使用的名称。要使用现有的资源组，请选择该资源组。有关更多信息，请参阅 [管理 Azure 资源管理器资源组](https://docs.microsoft.com/zh-cn/azure/azure-resource-manager/management/manage-resource-groups-portal)。

- **区域**：选择您希望 IoT Hub 所在的区域。选择离您最近的位置。一些功能（例如 [IoT Hub 设备流](https://docs.microsoft.com/zh-cn/azure/iot-hub/iot-hub-device-streams-overview)）仅在特定区域可用。对于这些有限的功能，您必须选择支持的区域之一。

- **IoT Hub 名称**：输入 IoT Hub 的名称。此名称必须在全球范围内唯一，长度在 3 到 50 个字母数字字符之间。名称还可以包含连字符 ('-')。

:::note
由于 IoT Hub 将作为 DNS 端点公开可见，请确保在命名时避免输入任何敏感或个人身份信息。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/148.png" /></div>

选择 **下一步: 网络** 以继续创建 IoT Hub。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/149.png" /></div>

选择 **下一步: 管理** 以继续创建 IoT Hub。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/150.png" /></div>

您可以接受默认设置。如果需要，您可以修改以下字段：

选择设备可以用来连接到 IoT Hub 的端点。您可以选择默认设置“公共访问”或选择“私有访问”。在本示例中接受默认设置。

- **定价和规模层**

选择您需要的层。您可以根据所需功能和每天通过解决方案发送的消息数量选择多个层。免费层用于测试和评估。它允许最多 500 个设备连接到 IoT Hub，每天最多发送 8,000 条消息。每个 Azure 订阅可以创建一个免费层的 IoT Hub。

如果您正在完成 IoT Hub 设备流的快速入门，请选择免费层。

- **IoT Hub 单元**

每个单元每天允许的消息数量取决于 IoT Hub 的定价层。例如，如果您希望 IoT Hub 支持 700,000 条消息的入口流量，您需要选择两个 S1 层单元。有关其他层选项的详细信息，请参阅 [选择合适的 IoT Hub 层](https://docs.microsoft.com/zh-cn/azure/iot-hub/iot-hub-scaling)。

- **Microsoft Defender for IoT**

启用此选项以为 IoT 和设备添加额外的威胁保护层。此选项在免费层中不可用。了解有关 IoT Hub 安全建议的更多信息，请参阅 Defender for IoT。

- **基于角色的访问控制**

选择如何管理对 IoT Hub 的访问，是允许共享访问策略还是仅支持基于角色的访问控制。有关更多信息，请参阅 [使用 Azure Active Directory 控制对 IoT Hub 的访问](https://docs.microsoft.com/zh-cn/azure/iot-hub/iot-hub-dev-guide-azure-ad-rbac)。

- **设备到云分区**

此属性将设备到云的消息与消息的同时读取器数量相关联。大多数 IoT Hub 只需要四个分区。

选择 **下一步: 标签** 以继续到下一屏幕。

标签是名称/值对。您可以为多个资源和资源组分配相同的标签，以对资源进行分类并合并计费。在本文档中，您不会添加任何标签。有关更多信息，请参阅 [使用标签组织 Azure 资源](https://docs.microsoft.com/zh-cn/azure/azure-resource-manager/management/tag-resources)。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/151.png" /></div>

选择 **下一步: 查看 + 创建** 以查看您的选择。您将看到类似以下屏幕的内容，但显示的是您在创建 IoT Hub 时选择的值。

我们将其余内容保留为默认值，不进行修改。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/33.jpg" /></div>

选择 **创建** 以开始部署新的 IoT Hub。在 IoT Hub 创建过程中，部署将需要几分钟时间。一旦部署完成，选择 **转到资源** 以打开新的 IoT Hub。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/16.jpg" /></div>

您可以在 IoT Hub 面板中更改已创建的 IoT Hub 的设置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/17.jpg" /></div>

## 创建共享密钥

点击 **Add Shared Access Policy**，并创建一个新的访问策略，赋予以下权限：**Registry Read**、**Registry Write**、**Device Connect**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/35.jpg" /></div>

创建完成后，将自动生成四组密钥，我们需要复制的是 **Primary connection string**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/154.png" /></div>

:::note
不要泄露您的 Primary connection string，否则其他人可以随时访问您的 Azure IoT Hub，并获得您为其设置的所有权限。
:::

## 集成到 Helium

现在我们可以返回 [Helium 控制台](https://console.helium.com/integrations)，创建 Azure 到 Helium 的集成。

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/152.png" /></div>

在新页面中点击 **Add Integration**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/153.png" /></div>

在新页面中填写上面生成的 **Primary connection string**，Helium 将自动生成其余内容。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/155.png" /></div>

最后，为此集成命名即可。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/156.png" /></div>

## 连接集成

现在，在 Helium 控制台中使用点击和拖拽界面，将设备连接到功能（Decoder），再连接到 Azure 集成，如[之前](https://wiki.seeedstudio.com/cn/Helium-Introduction/#helium-console-flows)所示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/21.jpg" /></div>

此时，按照[之前的步骤](https://wiki.seeedstudio.com/cn/Connecting-to-Helium/#upload-code-send-data-to-helium)再次上传代码，Wio Terminal 将重新连接到 Helium 并上传数据。

集成完成后，您的设备加入 LoRaWAN® 并持续向 Helium 发送数据。设备应出现在 Azure IoT Hub 的设备面板中，设备 ID 来自 Helium 网络。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/37.jpg" /></div>

我们还可以通过检查串口监视器返回的数据来确认数据发送是否成功。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg" /></div>

当您点击 IoT Hub 的“Overview”时，您还应该看到消息流经 IoT Hub，并有一个设备显示为“Connected”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/23.jpg" /></div>

- **Number of messages used:** 使用的消息总数（最大值）。

- **Device to cloud messages:** 发送的遥测消息（计数）。

- **Connected Devices:** 已连接的设备（最大值）。

- **Total IoT Devices:** 总设备数（最大值）。

到此为止，您已经完成了本教程中从本地传感器到 Azure 云的整个部署过程。接下来，您可以根据需要自定义数据处理，参考[这里](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-messaging)。

当然，您也可以继续我们的教程内容，学习如何使用微软的 Web APP 集成完成数据的可视化。

<table align="center">
  <tbody><tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/webapp.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>配置 Web APP 可视化</strong><br /><br />本节将介绍如何使用免费的 Web APP 集成来可视化 Microsoft Azure 接收到的数据信息。<br /><br /><a href="https://wiki.seeedstudio.com/cn/Configuring-Web-APP-Visualization">开始学习 &gt;</a></td>
    </tr>
  </tbody></table>

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

## 声明

- LoRa® 标志是 Semtech Corporation 或其子公司的商标。
- LoRaWAN® 是根据 LoRa Alliance® 授权使用的标志。