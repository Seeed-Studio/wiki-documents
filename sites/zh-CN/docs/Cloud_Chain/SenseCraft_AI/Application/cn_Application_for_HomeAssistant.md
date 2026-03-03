---
description: 介绍如何将 Grove Vision AI V2 接入 HomeAssistant。
title: HomeAssistant 应用
keywords:
- vision AI
- home assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/sensecraft-ai/application/application-for-homeassistant
aliases:
  - /cn/connect_vision_ai_v2_to_ha
sidebar_position: 1
last_update:
  date: 01/10/2024
  author: Citric
---

# 将 Grove Vision AI V2 连接到 Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

将 Grove Vision AI V2 集成到 Home Assistant 中可以通过添加先进的视觉感知功能来提升您的智能家居设置。这种集成允许实时环境分析和自定义自动化，使您的家居环境更加智能和响应迅速。

为了促进这种集成，可通过 HACS 商店访问的 SenseCraft-HomeAssistant 插件，通过 SenseCraft 数据平台将您的 Grove Vision AI V2 连接到 Home Assistant。这个过程简化且用户友好，只需要 SenseCraft 账户登录即可将您的设备和传感器数据引入 Home Assistant 生态系统，准备好供您自定义和控制。

以下是本文的主要内容框架。

1. [安装 HACS 插件](#installing-the-hacs-plugin)：安装 Home Assistant 社区商店（HACS）以在 Home Assistant 中启用 Seeed Studio 的 SenseCraft 插件安装。
2. [安装 SenseCraft 插件](#installing-the-sensecraft-plugin)：安装 Seeed Studio 的 SenseCraft 插件，该插件允许快速将 Seeed Studio 的产品部署到 Home Assistant 中。
3. [为 Grove Vision AI V2 准备模型](#preparing-the-model-for-grove-vision-ai-v2)：选择并部署您希望用于 Grove Vision AI V2 的模型，之后 Home Assistant 将接收来自 Vision AI 的识别场景和结果信息。
4. [在 Home Assistant 中构建 MQTT 服务](#building-mqtt-services-at-home-assistant)：利用本地 MQTT 服务将数据从 Grove Vision AI V2 和 XIAO 传输到 Home Assistant。
5. [将 Grove Vision AI V2 集成到 Home Assistant](#integrate-grove-vision-ai-v2-into-home-assistant)：将 Grove Vision AI V2 集成到 Home Assistant 中并设置可视化仪表板进行配置。

## 入门指南

在本文的教程内容开始之前，您可能需要准备以下硬件。

### 所需材料

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
   <th>XIAO ESP32C3</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Home Assistant Green 是自动化您家庭的最简单且最注重隐私的方式。它提供轻松的设置，让您只需一个系统就能控制所有智能设备，默认情况下所有数据都存储在本地。这块板子受益于蓬勃发展的 Home Assistant 生态系统，并且每月都会通过开源得到改进。

我们建议在本教程中使用 Home Assistant Green 作为 Home Assistant 主机，或者您可以使用任何带有 Supervisor 的 Home Assistant 主机。

然后您需要通过引脚排将 XIAO 和 Grove Vision AI V2 连接起来（或使用扩展板和 Grove 接口）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

## 安装 HACS 插件

### 步骤 1. 在 Home Assistant 中开启高级模式

要释放 Home Assistant 的全部潜力并获得高级功能的访问权限，您可以在用户界面中启用"高级模式"。

导航到您的 [Home Assistant 网页界面](http://homeassistant.local:8123)。点击 Home Assistant 侧边栏左下角的个人资料图标。在您的个人资料页面上，向下滚动找到**高级模式**切换开关。将切换开关切换到开启位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 安装 Terminal & SSH

点击侧边栏中的**设置**以访问设置菜单。点击**插件**以访问插件商店。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

使用搜索栏或浏览可用的插件来找到 **Terminal & SSH**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

找到 **Terminal & SSH** 后，点击它查看详细信息。在插件页面上，您会看到概述、文档和配置选项。要安装插件，请点击**安装**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 安装 HACS

在侧边栏中找到最近下载的 **Terminal & SSH**。在终端中，导航到 config 目录，这是您 Home Assistant 配置的根目录：

```
cd /config
```

执行以下命令来下载并运行 HACS 安装脚本：

```
wget -q -O - https://install.hacs.xyz | bash -
```

安装脚本完成后，您需要重启 Home Assistant 以应用更改。您可以通过 UI 重启 Home Assistant，方法是转到 **设置 > 系统 > 重启**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

重启后，点击侧边栏中的 **设置** 打开设置菜单。在设置菜单中，导航到 **设备和服务**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

点击 **添加集成** 向您的 Home Assistant 设置添加新的集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

在搜索栏中，输入 **HACS** 来查找 Home Assistant 社区商店集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

如果找到了 HACS，它应该会出现在可用集成列表中。点击它开始安装过程。

可能会弹出许可协议或服务条款。仔细阅读协议，如果您同意条款，请勾选所有复选框以表示您的同意。点击 **提交** 继续安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

接下来，系统会提示您使用 GitHub 账户登录。这是必要的，因为 HACS 与 GitHub 集成来管理社区创建的集成和插件的安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

按照说明授权 Home Assistant 访问您的 GitHub 账户。这通常涉及输入 GitHub 提供的验证码来确认您的身份。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

一旦您授权 Home Assistant 使用您的 GitHub 账户，HACS 将完成安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

您可能需要重启 Home Assistant 以便 HACS 完全集成到您的系统中。

## 安装 SenseCraft 插件

### 步骤 4. 通过 HACS 安装 SenseCraft 插件

在侧边栏中查找 HACS 并点击它打开 HACS 界面。在右下角，您会找到一个菜单按钮（三个点或加号，取决于您的 HACS 版本）。点击 **自定义存储库**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

将出现一个对话框，要求您输入存储库 URL。在这里，您将输入 SenseCraft 集成的自定义存储库 URL。输入 URL 后，选择类别（对于 SenseCraft 集成，您应该选择 **集成**）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

点击 **Add**。现在仓库已添加到您的 HACS 中，您应该能够在 **Integrations** 列表中找到 SenseCraft 集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

找到 SenseCraft 集成并点击"DOWNLOAD"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

至此，我们已经成功完成了 SenseCraft 插件的安装。

## 为 Grove Vision AI V2 准备模型

### 步骤 5. 为 XIAO ESP32C3 刷写固件

使用合适的 USB-C 线缆将 XIAO ESP32C3 连接到您的计算机。确保设备驱动程序已正确安装。

在您的网络浏览器中打开 [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool)。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI Tool</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

然后选择 **XIAO ESP32S3** 并点击 **Connect**。

:::caution
请注意，虽然这里选择的是 XIAO ESP32S3，但我们仍然使用的是 XIAO ESP32C3！
:::

点击下面的按钮下载固件文件，并在网页上点击 **Add File** 按钮，为 `0x0` 地址刷写 `SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin` 固件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download the file</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最后，点击 **Flash** 按钮，等待程序成功上传后，将 XIAO ESP32C3 从计算机断开连接。

### 步骤 6. 将 Grove Vision AI V2 连接到 SenseCraft AI Model Assistant

首先，我们需要打开 SenseCraft AI 主页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft AI</font></span></strong></a>
</div>
<br />

在导航菜单中点击 **Vision Workspace -> Grove Vision AI V2**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/52.png" style={{width:1000, height:'auto'}}/></div>

请使用 Type-C 类型的线缆将 **Grove Vision AI V2** 连接到您的计算机。

然后点击左上角的 **Connect** 按钮并选择设备的端口号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/53.png" style={{width:500, height:'auto'}}/></div>

### 步骤 7. 上传合适的模型

然后，请在点击 **Select Model** 后选择您想要使用的合适模型，将其上传到 Grove Vision AI V2。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/54.png" style={{width:1000, height:'auto'}}/></div>

等待 1~2 分钟让模型上传完成。

### 步骤 8. 观察

模型成功上传后，您将能够在右侧的 Preview 中看到来自 Grove Vision AI V2 摄像头的实时画面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/55.png" style={{width:1000, height:'auto'}}/></div>

<br />

我们可以看到在右侧的 Preview Settings 中，有两个设置选项可以更改，以优化模型的识别准确性。

:::tip
如果 Preview 中没有显示画面或模型信息中没有信息，可能是模型有问题，您需要重新选择模型或重新上传。
:::

## 在 Home Assistant 中构建 MQTT 服务

### 步骤 9. 安装 EMQX

点击侧边栏中的 **Settings** 进入设置菜单。点击 **Add-ons** 进入插件商店。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

使用搜索栏或浏览可用的插件来查找 **emqx**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png" style={{width:1000, height:'auto'}}/></div>

找到 **EMQX** 后，点击它查看详细信息。在插件页面上，您将看到概述、文档和配置选项。要安装插件，请点击 **Install** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png" style={{width:1000, height:'auto'}}/></div>

EMQX 插件安装完成后，打开 **Start on boot**、**Watchdog** 和 **Show in sidebar** 开关。点击 **Start** 启动 EMQX。

在 EMQX 仪表板登录页面，输入默认用户名和密码。

- 默认用户名：**admin**
- 默认密码：**public**

点击"Login"按钮进入 EMQX 仪表板。

在 EMQX 仪表板中，从左侧边栏菜单导航到 **Authentication** 部分。点击 **Databases** 选项卡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

点击 **Create** 按钮。在 **Mechanism** 下拉菜单中，选择 **Password-Based**，在 **Backend** 下拉菜单中，选择 **Built-in Database**。点击"Create"按钮创建内置数据库。

创建内置数据库后，点击"Authentication"部分中的 **Users** 选项卡。点击"Add User"按钮。

- 在"Username"字段中，输入"seeed"。
- 在"Password"字段中，输入"seeed"。

返回"Authentication"部分中的"Databases"选项卡。在数据库列表中找到之前创建的数据库。

点击数据库旁边的切换开关来启用它。数据库状态应该变为"Enabled"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

## 将 Grove Vision AI V2 集成到 Home Assistant

### 步骤 10. 为 Grove Vision AI V2 和 XIAO 配置网络

将 Grove Vision AI V2 连接到您的计算机并打开 Grove Vision AI V2 配置页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/56.png" style={{width:1000, height:'auto'}}/></div>

点击左上角连接到 Grove Vision AI V2 后，请打开 MQTT 按钮并输入页面中需要填写的以下信息。

- **SSID & Password**：设备需要与安装 Home Assistant 的主机在同一局域网内。因此请配置同一局域网下的网络。XIAO 仅支持 2.4G WiFi，5G 网络不可用。
- **Encryption**：选择 **AUTO**。
- **Host**：安装 Home Assistant 的主机的 IP 地址。
- **Port**：`1883`。
- **clientId**：设备识别号，请以 `grove_vision_ai_v2_` 为前缀，后跟自定义 ID 号。
- **username**：您刚创建的 EMQX 数据库的名称。
- **password**：您刚创建的 EMQX 数据库的密码。

然后点击下方的 **Apply** 按钮。保存后，**并不意味着 Grove Vision AI 已连接到网络**，请返回左侧菜单栏中的 **Process** 并检查设备的 IP 地址是否已出现以及 MQTT 连接状态是否正确。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/57.png" style={{width:1000, height:'auto'}}/></div>

:::caution
当显示 IP Address 时，表示 WIFI 没有问题，Service status 必须是图中的文本才表示正常，注意如果 WIFI 不正常，MQTT 肯定也不正常；当您刚切换过来时，可能会显示未连接，需要等待约 10 秒左右，您不需要刷新来查看状态，状态改变后会自动显示最新状态。
:::

### 步骤 11. 集成到 Home Assistant

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Scenario 1. If the device has been found" label="情况 1. 如果设备已被发现">

到此时，通常情况下，您已经可以在 Home Assistant 的 **Settings->Devices & services** 中搜索到 Grove Vision AI V2。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png" style={{width:1000, height:'auto'}}/></div>

请点击 **Configure** 按钮设置相关信息，您就完成了设备的添加。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png" style={{width:1000, height:'auto'}}/></div>

在 **Settings->Devices & services** 中，您将能够看到设备的详细信息并显示支持的选项卡，您可以添加任意数量的选项卡在概览中显示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png" style={{width:1000, height:'auto'}}/></div>

:::note

1. 如果您在之前的步骤中配置了用户名和密码，在添加设备时可能会要求您输入它们。
2. 如果您有多个 Vision AI 设备要添加到 Home Assistant，请注意设备的 ID 号，它作为不同 Grove 标志之间的区别标记。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png" style={{width:600, height:'auto'}}/></div>
:::

</TabItem>

<TabItem value="Scenario 2. If the device is not found" label="情况 2. 如果设备未被发现">

如果您家中的设备太多，有时可能无法被 Home Assistant 直接搜索到。这时您可能需要手动添加设备。

在 **Settings** 页面中，选择 **Devices & Services**。

然后点击右下角的 **ADD INTEGRATION** 按钮并搜索 **SenseCraft**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

点击 SenseCraft 并选择 Action 为 **Add device using host/id**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

点击 **SUBMIT**，然后从下拉菜单中选择您的设备类型，例如 `Grove Vision AI V2`，再次点击 **SUBMIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png" style={{width:500, height:'auto'}}/></div>

在以下输入字段中，输入您设备的确切 ID。此 ID 通常可以在设备本身或 SenseCraft AI 网站上找到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/70.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/58.png" style={{width:1000, height:'auto'}}/></div>

下一步是配置 MQTT 服务。输入与您在网站上设置的 MQTT 服务详细信息匹配的信息。如果您之前没有设置用户名和密码，则无需在此处填写。然后点击 **SUBMIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/59.png" style={{width:500, height:'auto'}}/></div>

- **Broker**: Home Assistant 的 IP 地址。
- **Port**: `1883`。
- **clientId**: 对于设备识别号，请以 `grove_vision_ai_v2_` 为前缀，后跟自定义 ID 号。
- **username**: 您刚创建的 EMQX 数据库的名称。
- **password**: 您刚创建的 EMQX 数据库的密码。

</TabItem>

</Tabs>

如果设置成功，系统通常会提示您为设备选择位置。根据您的实际情况选择合适的房间或区域，然后点击 **Finish**。

配置完成后，您可以在 Home Assistant 的"Overview"页面上查看您的设备及其状态。

按照这些步骤，您应该能够成功将"SenseCraft"设备添加到您的 Home Assistant 实例中，并配置它使用 MQTT 服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

## 故障排除

### Q1: 如果 Grove Vision AI V2 掉线后我再也看不到 HA 中的数据消息，我该怎么办？

您可能需要在 SenseCraft 中删除设备并重新添加。删除后可能无法再次自动搜索到，您需要手动添加设备。请参考 **[这里的步骤](#step-11-integration-into-home-assistant)** 重新添加设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png" style={{width:1000, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
