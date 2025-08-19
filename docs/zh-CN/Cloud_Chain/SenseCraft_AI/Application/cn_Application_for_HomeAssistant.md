---
description: 介绍如何将 Grove Vision AI V2 集成到 HomeAssistant 中。
title: 用于 HomeAssistant 的应用
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

将 Grove Vision AI V2 集成到 Home Assistant 中，可以通过添加先进的视觉感知能力来提升您的智能家居设置。这种集成支持实时环境分析和定制化自动化，使您的家庭环境更加智能和响应迅速。

为了简化这一集成过程，可以通过 HACS 商店获取 SenseCraft-HomeAssistant 插件，将 Grove Vision AI V2 通过 SenseCraft 数据平台连接到 Home Assistant。整个过程简单易用，只需登录 SenseCraft 账户，即可将设备和传感器数据引入 Home Assistant 生态系统，供您定制和控制。

以下是本文的主要内容框架：

1. [安装 HACS 插件](#installing-the-hacs-plugin)：安装 Home Assistant 社区商店 (HACS)，以便在 Home Assistant 中安装 Seeed Studio 的 SenseCraft 插件。
2. [安装 SenseCraft 插件](#installing-the-sensecraft-plugin)：安装 Seeed Studio 的 SenseCraft 插件，快速将 Seeed Studio 的产品部署到 Home Assistant 中。
3. [为 Grove Vision AI V2 准备模型](#preparing-the-model-for-grove-vision-ai-v2)：选择并部署您希望用于 Grove Vision AI V2 的模型，随后 Home Assistant 将接收来自 Vision AI 的识别场景和结果信息。
4. [在 Home Assistant 中构建 MQTT 服务](#building-mqtt-services-at-home-assistant)：利用本地 MQTT 服务，将 Grove Vision AI V2 和 XIAO 的数据传输到 Home Assistant。
5. [将 Grove Vision AI V2 集成到 Home Assistant](#integrate-grove-vision-ai-v2-into-home-assistant)：将 Grove Vision AI V2 集成到 Home Assistant 中，并设置一个可视化仪表板进行配置。

## 入门

在开始本教程内容之前，您可能需要准备以下硬件。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Home Assistant Green 是最简单且最注重隐私的家庭自动化方式。它提供了轻松的设置，并允许您通过一个系统控制所有智能设备，所有数据默认存储在本地。该主板受益于蓬勃发展的 Home Assistant 生态系统，并且每月都会通过开源社区进行改进。

我们建议在本教程中使用 Home Assistant Green 作为 Home Assistant 主机，或者您也可以使用任何带有 Supervisor 的 Home Assistant 主机。

接下来，您需要通过引脚排将 XIAO 和 Grove Vision AI V2 连接起来（或者使用扩展板和 Grove 接口）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

## 安装 HACS 插件

### 第 1 步：在 Home Assistant 中启用高级模式

为了充分利用 Home Assistant 的功能并访问高级特性，您可以在用户界面中启用“高级模式”。

导航到您的 [Home Assistant 网页界面](http://homeassistant.local:8123)。点击 Home Assistant 侧边栏左下角的个人资料图标。在您的个人资料页面，向下滚动找到 **高级模式** 开关。将开关切换到开启状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### 第 2 步：安装 Terminal & SSH

点击侧边栏中的 **设置** 以访问设置菜单。点击 **附加组件** 以进入附加组件商店。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

使用搜索栏或浏览可用的附加组件，找到 **Terminal & SSH**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

找到 **Terminal & SSH** 后，点击它以查看详细信息。在附加组件页面，您将看到概述、文档和配置选项。点击 **安装** 按钮以安装该附加组件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### 第 3 步：安装 HACS

在侧边栏中找到最近下载的 **Terminal & SSH**。在终端中，导航到配置目录，即 Home Assistant 配置的根目录：

```
cd /config
```

执行以下命令以下载并运行 HACS 安装脚本：

```
wget -q -O - https://install.hacs.xyz | bash -
```

安装脚本完成后，您需要重启 Home Assistant 以应用更改。您可以通过 UI 重启 Home Assistant，路径为 **设置 > 系统 > 重启**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

重启后，点击侧边栏中的 **设置** 打开设置菜单。在设置菜单中，导航到 **设备与服务**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

点击 **添加集成** 以向您的 Home Assistant 设置添加新集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

在搜索栏中输入 **HACS**，以查找 Home Assistant 社区商店集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

如果找到 HACS，它应该会出现在可用集成列表中。点击它以开始安装过程。

可能会弹出许可协议或服务条款。仔细阅读协议内容，如果您同意条款，请勾选所有复选框以表示同意。点击 **提交** 继续安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

接下来，系统会提示您使用 GitHub 账户登录。这是必要的，因为 HACS 集成了 GitHub 来管理社区创建的集成和插件的安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

按照说明授权 Home Assistant 访问您的 GitHub 账户。这通常需要输入 GitHub 提供的验证码以确认您的身份。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

一旦您授权 Home Assistant 使用您的 GitHub 账户，HACS 将完成安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

您可能需要重启 Home Assistant 以使 HACS 完全集成到您的系统中。

## 安装 SenseCraft 插件

### 第 4 步：通过 HACS 安装 SenseCraft 插件

在侧边栏中找到 HACS 并点击它以打开 HACS 界面。在右下角，您会看到一个菜单按钮（根据您的 HACS 版本可能是三个点或加号）。点击 **Custom repositories**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

一个对话框会弹出，要求您输入仓库 URL。在这里，您需要输入 SenseCraft 集成的自定义仓库 URL。输入 URL 后，选择类别（对于 SenseCraft 集成，您需要选择 **Integration**）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

点击 **Add**。仓库现在已添加到您的 HACS 中，您应该可以在 **Integrations** 列表中找到 SenseCraft 集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

找到 SenseCraft 集成并点击 "DOWNLOAD"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

至此，我们已经成功完成了 SenseCraft 插件的安装。

## 为 Grove Vision AI V2 准备模型

### 第 5 步：为 XIAO ESP32C3 刷写固件

使用合适的 USB-C 数据线将 XIAO ESP32C3 连接到您的电脑。确保设备驱动程序已正确安装。

在您的浏览器中打开 [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool)。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI 工具</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

然后选择 **XIAO ESP32S3** 并点击 **Connect**。

:::caution
请注意，虽然这里选择的是 XIAO ESP32S3，但我们实际上使用的是 XIAO ESP32C3！
:::

点击下方按钮下载固件文件，并在网页上点击 **Add File** 按钮，将 `SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin` 固件刷写到 `0x0` 地址。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>下载文件</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最后，点击 **Flash** 按钮，等待程序成功上传后再断开 XIAO ESP32C3 与电脑的连接。

### 第 6 步：将 Grove Vision AI V2 连接到 SenseCraft AI 模型助手

首先，我们需要打开 SenseCraft AI 的主页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>前往 SenseCraft AI</font></span></strong></a>
</div>
<br />

点击导航菜单中的 **Vision Workspace -> Grove Vision AI V2**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/52.png" style={{width:1000, height:'auto'}}/></div>

请使用 Type-C 数据线将 **Grove Vision AI V2** 连接到您的电脑。

然后点击左上角的 **Connect** 按钮并选择设备的端口号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/53.png" style={{width:500, height:'auto'}}/></div>

### 第 7 步：上传合适的模型

接下来，请点击 **Select Model** 按钮选择您想使用的模型并将其上传到 Grove Vision AI V2。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/54.png" style={{width:1000, height:'auto'}}/></div>

等待 1~2 分钟，模型上传完成。

### 第 8 步：观察结果

模型成功上传后，您将能够在右侧的预览中看到来自 Grove Vision AI V2 摄像头的实时画面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/55.png" style={{width:1000, height:'auto'}}/></div>

<br />

我们可以看到，在右侧的预览设置中，有两个设置选项可以更改，以优化模型的识别准确性。

:::tip
如果预览中没有显示画面或模型信息中没有内容，可能是模型出现问题，您需要重新选择模型或再次上传。
:::

## 在 Home Assistant 中构建 MQTT 服务

### 第 9 步. 安装 EMQX

点击侧边栏中的 **Settings** 进入设置菜单。点击 **Add-ons** 进入附加组件商店。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

使用搜索栏或浏览可用的附加组件，找到 **emqx**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png" style={{width:1000, height:'auto'}}/></div>

找到 **EMQX** 后，点击它查看详情。在附加组件页面上，您将看到概述、文档和配置选项。点击 **Install** 按钮安装附加组件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png" style={{width:1000, height:'auto'}}/></div>

EMQX 附加组件安装完成后，打开 **Start on boot**、**Watchdog** 和 **Show in sidebar** 开关。点击 **Start** 启动 EMQX。

在 EMQX 仪表板登录页面，输入默认用户名和密码。

- 默认用户名: **admin**
- 默认密码: **public**

点击 "Login" 按钮进入 EMQX 仪表板。

在 EMQX 仪表板中，从左侧菜单导航到 **Authentication** 部分。点击 **Databases** 标签。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

点击 **Create** 按钮。在 **Mechanism** 下拉菜单中选择 **Password-Based**，在 **Backend** 下拉菜单中选择 **Built-in Database**。点击 "Create" 按钮创建内置数据库。

创建内置数据库后，点击 "Authentication" 部分中的 **Users** 标签。点击 "Add User" 按钮。

- 在 "Username" 字段中输入 "seeed"。
- 在 "Password" 字段中输入 "seeed"。

返回 "Authentication" 部分的 "Databases" 标签。在数据库列表中找到之前创建的数据库。

点击数据库旁边的切换开关以启用它。数据库状态应更改为 "Enabled"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

## 将 Grove Vision AI V2 集成到 Home Assistant

### 第 10 步. 配置 Grove Vision AI V2 和 XIAO 的网络

将 Grove Vision AI V2 连接到您的计算机并打开 Grove Vision AI V2 配置页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/56.png" style={{width:1000, height:'auto'}}/></div>

点击左上角连接到 Grove Vision AI V2 后，请打开 MQTT 按钮并输入以下需要填写的信息。

- **SSID 和密码**: 设备需要与安装 Home Assistant 的主机在同一局域网下。因此，请在同一局域网下配置网络。XIAO 仅支持 2.4G WiFi，不支持 5G 网络。
- **加密**: 选择 **AUTO**。
- **主机**: 安装 Home Assistant 的主机 IP 地址。
- **端口**: `1883`。
- **clientId**: 设备标识号，请以 `grove_vision_ai_v2_` 为前缀，后接自定义 ID 号。
- **用户名**: 您刚刚创建的 EMQX 数据库的用户名。
- **密码**: 您刚刚创建的 EMQX 数据库的密码。

然后点击下方的 **Apply** 按钮。保存后，**并不意味着 Grove Vision AI 已连接到网络**，请返回左侧菜单栏中的 **Process**，检查设备的 IP 地址是否出现，以及 MQTT 连接状态是否正确。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/57.png" style={{width:1000, height:'auto'}}/></div>

:::caution
当显示 IP 地址时，表示 WiFi 没有问题，服务状态必须是图中所示的文本才表示正常。请注意，如果 WiFi 不正常，MQTT 肯定也不正常；刚切换时可能会显示未连接，需要等待大约 10 秒左右，无需刷新页面，状态变化后会自动显示最新状态。
:::

### 第 11 步. 集成到 Home Assistant

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Scenario 1. If the device has been found" label="场景 1. 如果设备已被发现">

此时，通常您可以在 Home Assistant 的 **Settings->Devices & services** 中搜索到 Grove Vision AI V2。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png" style={{width:1000, height:'auto'}}/></div>

请点击 **Configure** 按钮设置相关信息，完成设备添加。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png" style={{width:1000, height:'auto'}}/></div>

在 **Settings->Devices & services** 中，您将能够看到设备的详细信息并显示支持的标签，您可以添加任意数量的标签以显示在概览中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png" style={{width:1000, height:'auto'}}/></div>

:::note
1. 如果您在前面的步骤中配置了用户名和密码，添加设备时可能会要求您输入它们。
2. 如果您有多个 Vision AI 设备要添加到 Home Assistant，请留意设备的 ID 号，它是区分不同 Grove 标志的标识。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png" style={{width:600, height:'auto'}}/></div>
:::

</TabItem>

<TabItem value="Scenario 2. If the device is not found" label="场景 2. 如果设备未被发现">


如果您家中的设备过多，有时可能无法通过 Home Assistant 直接搜索到。这时，您可能需要手动添加设备。

在 **设置** 页面中，选择 **设备与服务**。

然后点击右下角的 **添加集成** 按钮，并搜索 **SenseCraft**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

点击 SenseCraft 并选择操作为 **通过主机/ID添加设备**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

点击 **提交**，然后从下拉菜单中选择您的设备类型，例如 `Grove Vision AI V2`，再点击 **提交**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png" style={{width:500, height:'auto'}}/></div>

在接下来的输入字段中，输入设备的准确 ID。此 ID 通常可以在设备本身或 SenseCraft AI 网站上找到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/70.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/58.png" style={{width:1000, height:'auto'}}/></div>

下一步是配置 MQTT 服务。输入与您在网站上设置的 MQTT 服务详细信息相匹配的信息。如果您之前没有设置用户名和密码，则无需在此处填写。然后点击 **提交**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/59.png" style={{width:500, height:'auto'}}/></div>

- **Broker**: Home Assistant 的 IP 地址。
- **Port**: `1883`。
- **clientId**: 对于设备识别号，请以 `grove_vision_ai_v2_` 为前缀，后跟自定义 ID 号。
- **username**: 您刚刚创建的 EMQX 数据库名称。
- **password**: 您刚刚创建的 EMQX 数据库密码。

</TabItem>

</Tabs>

如果设置成功，系统通常会提示您为设备选择一个位置。根据实际情况选择合适的房间或区域，然后点击 **完成**。

配置完成后，您可以在 Home Assistant 的“概览”页面查看您的设备及其状态。

按照这些步骤，您应该能够成功将 "SenseCraft" 设备添加到您的 Home Assistant 实例中，并配置其使用 MQTT 服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

## 故障排除

### Q1: 如果 Grove Vision AI V2 掉线后，我在 HA 中再也看不到数据消息，该怎么办？

您可能需要在 SenseCraft 中删除设备并重新添加。删除后可能无法再次自动搜索到设备，您需要手动添加设备。请参考 **[此处的步骤](#step-11-integration-into-home-assistant)** 重新添加设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png" style={{width:1000, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>