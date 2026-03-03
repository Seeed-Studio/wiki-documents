---
description: 基于 Grove Vision AI V2 和 Home Assistant 构建人群热力图。
title: 基于 Grove Vision AI V2 和 Home Assistant 构建人群密度检测
keywords:
- matter
- XIAO
- light
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/vision_ai_v2_crowd_heat_map
last_update:
  date: 05/22/2024
  author: Citric
---

# 基于 Grove Vision AI V2 和 Home Assistant 构建人群密度检测

在智能家居和物联网的时代，将智能传感器和设备集成到家庭自动化系统中变得越来越流行。[Home Assistant](https://www.home-assistant.io/) 是一个强大的开源家庭自动化平台，提供了广泛的可能性，可以根据个人需求创建定制解决方案。在本教程中，我们将探索如何使用 Grove Vision AI V2 和 XIAO ESP32C3 构建一个高级环境检测系统，并与 Home Assistant 无缝集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/2.png" style={{width:900, height:'auto'}}/></div>

Grove Vision AI V2 是一个先进的视觉传感器，与多功能的 XIAO ESP32C3 微控制器相结合，为创建功能丰富且高度智能的环境检测系统提供了理想的基础。通过利用这些设备的强大功能，我们可以实现多种功能，包括多模型识别、自定义设置、实时帧率、实时视图、目标跟踪、目标热力图和跨区域计数。

在整个教程中，我们将逐步指导您完成硬件设置、软件配置以及与 Home Assistant 的系统集成。无论您是初学者还是经验丰富的用户，本教程旨在为您提供创建复杂环境检测系统所需的知识和工具，从而提升您的智能家居体验。

准备好踏上激动人心的旅程吧！我们将解锁 Grove Vision AI V2 和 XIAO ESP32C3 的潜力，探索它们如何通过 Home Assistant 改变您监控和与家庭环境互动的方式。让我们开始构建您自己的智能环境检测系统吧！


## 硬件准备

在开始本教程内容之前，您需要准备以下硬件。

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

Home Assistant Green 是最简单且最注重隐私的家庭自动化方式。它提供了轻松的设置，并允许您使用一个系统控制所有智能设备，所有数据默认存储在本地。该板受益于蓬勃发展的 Home Assistant 生态系统，并且每月都会通过开源进行改进。

我们建议使用 Home Assistant Green 作为本教程的 Home Assistant 主机，或者您可以使用任何带有 Supervisor 的 Home Assistant 主机。

当您准备好 Grove Vision AI V2 和摄像头后，可以通过 CSI 连接线将它们连接。在连接时，请注意针脚排的方向，避免插反。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:400, height:'auto'}}/></div>

接下来，您需要通过针脚排（或使用扩展板和 Grove 接口）将 XIAO 和 Grove Vision AI V2 连接起来。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:400, height:'auto'}}/></div>

我们假设您已经为设备上传了一个识别模型。

### 为 XIAO ESP32C3 刷写网络透明固件

使用合适的 USB-C 数据线将 XIAO ESP32C3 连接到您的电脑。确保设备驱动程序已正确安装。

在您的浏览器中打开 [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

然后选择 **XIAO ESP32S3** 并点击 **Connect**。

:::caution
请注意，虽然这里选择的是 XIAO ESP32S3，但我们实际使用的是 XIAO ESP32C3！
:::

点击下方按钮下载固件文件，并在网页上点击 **Add File** 按钮，将 `sscma_xiao_c3_network_v1.1.0.bin` 固件刷写到 `0x0` 地址。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/sscma_xiao_c3_network_v1.1.0.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>下载文件</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最后，点击 **Flash** 按钮，等待程序成功上传后再断开 XIAO ESP32C3 与电脑的连接。

## 在 Home Assistant 上安装插件

在开始构建我们的环境检测系统之前，我们需要在 Home Assistant 中安装一些必要的附加组件。这些附加组件将提供必要的功能和工具，以便将 Grove Vision AI V2 和 XIAO ESP32C3 集成到 Home Assistant 中。所需的附加组件包括 **EMQX**、**Advanced SSH & Web Terminal** 和 **Node-RED**。让我们逐步完成每个附加组件的安装过程。

### 步骤 1. 安装 EMQX

打开 Home Assistant 的网页界面，导航到 **Settings** 菜单。点击 **Add-ons** 选项以访问附加组件管理页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/4.png" style={{width:900, height:'auto'}}/></div>

在页面右下角，点击 **ADD-ON STORE** 按钮以打开附加组件商店。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/5.png" style={{width:900, height:'auto'}}/></div>

在附加组件商店的搜索栏中输入 **EMQX** 并按回车键搜索该附加组件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/6.png" style={{width:900, height:'auto'}}/></div>

在搜索结果中找到 **EMQX** 附加组件并点击它以查看详细信息。点击 **INSTALL** 按钮开始安装过程。Home Assistant 将下载并安装 EMQX 附加组件。等待安装完成。

### 步骤 2. 安装 Advanced SSH & Web Terminal

在 Home Assistant 的“附加组件商店”中，搜索 **Advanced SSH & Web Terminal**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/7.png" style={{width:900, height:'auto'}}/></div>

找到 **Advanced SSH & Web Terminal** 附加组件并点击它以查看详细信息。点击 **Install** 按钮开始安装过程。Home Assistant 将下载并安装 Advanced SSH & Web Terminal 附加组件。

### 步骤 3. 安装 Node-RED

同样，在 Home Assistant 的“附加组件商店”中，搜索 **Node-RED**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/8.png" style={{width:900, height:'auto'}}/></div>

找到 **Node-RED** 附加组件并点击它以查看详细信息。点击 **Install** 按钮开始安装过程。允许 Home Assistant 下载并安装 Node-RED 附加组件。

## 使用 Docker 在 Home Assistant 上部署 pysscma

在此步骤中，我们将使用 Home Assistant 中的 Advanced SSH & Web Terminal 插件下载并设置 Python SSCMA（Seeed Studio 跨平台模块化 API）服务器。此服务器将实现 Grove Vision AI V2 与 Home Assistant 之间的通信。请按照以下详细步骤操作：

### 第 4 步：访问 Advanced SSH & Web Terminal

打开您的 Home Assistant 网页界面，导航到 **设置** 菜单。点击 **插件** 选项以访问插件管理页面。找到 **Advanced SSH & Web Terminal** 插件并点击以打开其详细页面。

请在此页面关闭 **保护模式**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/9.png" style={{width:900, height:'auto'}}/></div>

如果插件尚未运行，请点击 **启动** 按钮。插件运行后，点击 **打开 Web UI** 按钮以访问终端界面。

:::note
首次启动此插件时，您可能需要在插件详细页面的配置页面中填写 `username`、`password` 和 `authorized_key`。有关详细的配置信息，请阅读插件附带的文档。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/10.png" style={{width:900, height:'auto'}}/></div>
:::

### 第 5 步：下载 pysscma.tar 包

在 Advanced SSH & Web Terminal 中，通过执行以下命令导航到根目录：

```
cd /
```

运行以下命令下载 **pysscma.tar** 包：

```
wget -O pysscma.tar https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/pysscma.tar
```

等待下载完成。**pysscma.tar** 包将保存在根目录中。

### 第 6 步：加载 Docker 镜像

下载完成后，执行以下命令从 pysscma.tar 包加载 Docker 镜像：

```
docker load -i pysscma.tar
```

Docker 将加载镜像，加载完成后您将看到镜像 ID。

运行以下命令启动 Python SSCMA 服务器：

```
docker run -itd --net host --name pysscma_server --restart on-failure --privileged python-sscma:latest server --host 0.0.0.0
```

此命令将创建并启动一个名为 "pysscma_server" 的 Docker 容器，并进行必要的配置。

要检查 Docker 容器是否正常运行，请执行以下命令：

```
docker ps
```

您应该看到 "pysscma_server" 容器列出，并显示状态为 "Up"。

### 第 7 步：获取 IP 地址

要获取 Docker 容器的 IP 地址，请运行以下命令：

```
ifconfig | grep docker -A 10
```

在输出中查找 "inet" 字段，并记下与其关联的 IP 地址（例如，172.30.232.1）。

此 IP 地址将在后续步骤中用于配置 Grove Vision AI V2 的通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/1.png" style={{width:900, height:'auto'}}/></div>

## 配置 MQTT Broker

在此步骤中，我们将配置 Home Assistant 中的 EMQX 插件，以设置用户认证，从而实现 Grove Vision AI V2 与 Home Assistant 之间的安全通信。

### 第 8 步：创建内置数据库和用户

打开您的 Home Assistant 网页界面并导航到“设置”菜单。点击“插件”选项以访问插件管理页面。找到“EMQX”插件并点击它以打开详细信息页面。如果插件尚未运行，请点击“启动”按钮。插件运行后，点击“打开 Web UI”按钮以访问 EMQX 仪表板。

在 EMQX 仪表板登录页面中，输入默认用户名和密码。

- 默认用户名：**admin**
- 默认密码：**public**

点击“登录”按钮以访问 EMQX 仪表板。

在 EMQX 仪表板中，从左侧边栏菜单导航到 **Authentication** 部分。点击 **Databases** 标签。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

点击 **Create** 按钮。在 **Mechanism** 下拉菜单中选择 **Password-Based**，在 **Backend** 下拉菜单中选择 **Built-in Database**。点击“创建”按钮以创建内置数据库。

创建内置数据库后，点击“Authentication”部分中的 **Users** 标签。点击“添加用户”按钮。

- 在“用户名”字段中输入“seeed”。
- 在“密码”字段中输入“seeed”。

返回到“Authentication”部分中的“Databases”标签。在数据库列表中找到之前创建的数据库。

点击数据库旁边的切换开关以启用它。数据库状态应更改为“已启用”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

### 第 9 步：配置 Grove Vision AI V2 的网络

将 Grove Vision AI V2 连接到您的计算机并打开 [Model Assistant 的配置页面](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/config)。

点击右上角以连接到 Grove Vision AI V2 后，请打开 MQTT 按钮并填写以下信息：

- **SSID 和密码**：设备需要与安装了 Home Assistant 的主机处于同一局域网内。因此，请在同一局域网下配置网络。XIAO 仅支持 2.4G WiFi，不支持 5G 网络。
- **加密**：选择 **AUTO**。
- **主机**：安装 Home Assistant 的主机的 IP 地址。
- **端口**：`1883`。
- **clientId**：设备识别号，请以 `grove_vision_ai_v2_` 为前缀，后跟自定义 ID 号。
- **用户名**：您刚刚创建的 EMQX 数据库的用户名。
- **密码**：您刚刚创建的 EMQX 数据库的密码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/13.png" style={{width:900, height:'auto'}}/></div>

然后点击下方的保存按钮。保存后，**并不意味着 Grove Vision AI V2 已正确写入**，请返回左侧菜单栏中的 **Process**，检查设备的 IP 地址是否已出现以及 MQTT 连接状态是否正常。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png" style={{width:1000, height:'auto'}}/></div>

:::caution
当显示 IP 地址时，表示 WIFI 没有问题，服务状态必须是图中的文字才能表示正常。注意，如果 WIFI 不正常，MQTT 肯定不正常；刚切换时可能会显示未连接，需要等待大约 10 秒左右，无需刷新即可看到状态变化，状态变化后会自动显示最新状态。
:::

如果连接正常，理论上您可以在 EMQX 中看到数据流。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/3.png" style={{width:900, height:'auto'}}/></div>

:::note
由于 Node-RED 连接尚未配置，您应该只能在 EMQX 中看到一个“所有连接”。
:::

## 配置 Node-RED

在此步骤中，我们将配置 Home Assistant 中的 Node-RED 插件，以创建必要的流程来将 Grove Vision AI V2 集成到 Home Assistant 中。

### 第 10 步：配置并运行 Node-RED

打开您的 Home Assistant 网页界面，导航到“设置”菜单。点击“插件”选项以访问插件管理页面。找到“Node-RED”插件并点击它以打开其详细信息页面。点击“配置”选项卡。

在 Node-RED 配置中，找到 **ssl** 选项。禁用 **ssl** 选项。点击 **SAVE** 按钮以应用配置更改。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/14.png" style={{width:900, height:'auto'}}/></div>

点击“START”按钮启动 Node-RED 插件。等待插件成功启动。您可以检查日志以监控进度。一旦 Node-RED 插件运行起来，点击“OPEN WEB UI”按钮访问 Node-RED 编辑器。

### 第 11 步：安装 `msg-speed` 节点

在 Node-RED 编辑器中，点击右上角的汉堡菜单（三条横线）。从菜单中选择 **Manage palette**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/15.png" style={{width:900, height:'auto'}}/></div>

在 **Palette** 侧边栏中，点击 **Install** 选项卡。在搜索框中输入 **msg-speed** 并按回车键。在搜索结果中找到 **msg-speed** 节点，并点击其旁边的 **Install** 按钮。等待安装完成，然后关闭“Palette”侧边栏。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/16.png" style={{width:900, height:'auto'}}/></div>

### 第 12 步：导入 Flow JSON 文件

请下载我们准备好的 Flow JSON 文件 `crowd_density.json`。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/crowd_density.json" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>下载文件</font></span></strong>
    </a>
</div>

在 Node-RED 编辑器中，再次点击汉堡菜单。从菜单中选择“Import”。在“Import nodes”对话框中，点击“选择文件导入”按钮。浏览并选择提供的 JSON 文件，该文件包含预配置的 Node-RED 流程。点击“Import”按钮将流程导入到 Node-RED 中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/17.png" style={{width:900, height:'auto'}}/></div>

然后您可以看到我们准备好的 Node-RED 流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/18.png" style={{width:900, height:'auto'}}/></div>

### 第 13 步：配置 MQTT Broker 节点

在导入的流程中，找到 **mqtt-broker** 节点。双击该节点以打开其配置。

在“Server”字段中，输入 EMQX Broker 的 IP 地址（例如，localhost 或 Home Assistant 实例的 IP 地址）。

在“Username”字段中，输入您在 EMQX 数据库中创建的用户名（例如，“seeed”）。

在“Password”字段中，输入您为该用户设置的密码（例如，“seeed”）。点击“Done”按钮保存 MQTT Broker 配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/19.png" style={{width:900, height:'auto'}}/></div>

### 第 14 步：验证 POST 节点的 URL

在导入的流程中，找到“POST”节点。双击该节点以打开其配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/20.png" style={{width:900, height:'auto'}}/></div>

验证“URL”字段中是否包含您在 **[第 7 步](#step-7-obtaining-the-ip-address)** 中获取的 pysscma Docker 容器的正确 IP 地址。如有必要，请更新 URL 以匹配 pysscma Docker 的 IP 地址。点击“Done”按钮保存 POST 节点配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/21.png" style={{width:900, height:'auto'}}/></div>

### 第 15 步：部署流程

点击 Node-RED 编辑器右上角的 **Deploy** 按钮以部署流程。该流程现在应该已激活，并准备好处理来自 Grove Vision AI V2 的数据。

## 人群密度仪表板设置

在此步骤中，我们将访问 Node-RED 仪表板，以监控和交互来自 Grove Vision AI V2 设备的数据。

在您的计算机或移动设备上打开一个网页浏览器。在地址栏中输入以下格式的 URL：

```
http://homeassistant:1880/endpoint/ui/
```

现在，您可以在 Node-RED 仪表板中监控数据流并与节点交互。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/22.png" style={{width:900, height:'auto'}}/></div>

首先，请在左上角输入您的 clientId，然后点击 **REFRESH** 按钮并开始调用。随后，Grove Vision AI V2 的实时视频流将被推送。您可以根据实际需求启用或禁用以下功能。

- **region**: 启用此功能将启动跨区域计数功能。默认情况下，当此功能开启时，图像将沿中间的橙色线分为两个区域，区域 A 和区域 B。当识别框从区域 A 穿过橙色线到达区域 B 时，中心左侧的 **COUNT (A to B)** 将增加 1。反之，中心右侧的 **COUNT (B to A)** 将增加 1。

  - **pos1**: 用于设置分割区域线段左侧（上方）端点的位置。

  - **pos2**: 用于设置分割区域线段右侧（下方）端点的位置。

  - **vertical**: 默认情况下，分割区域的线段为水平线。当此按钮开启时，线段将变为垂直线。

- **box**: 默认情况下，识别框是关闭的。当按钮开启时，识别框将在中心屏幕实时显示。

- **track**: 默认情况下，目标跟踪功能是关闭的。如果开启此功能，识别对象的移动路径将在中间图像中绘制为一条细绿色线。

- **label**: 默认情况下，识别标签是关闭的。当按钮开启时，识别标签将在中心屏幕实时显示。

- **heatmap**: 默认情况下，目标热图功能是关闭的。当按钮开启时，当前检测区域的人群密度将显示。区域颜色越红，表示在该区域检测到的监控对象历史出现次数越多；颜色越蓝，表示越少。

**Performance** 位于最右侧，显示实时帧率。Image 表示屏幕传输的帧率，Overlay 表示开启各种功能后屏幕的帧率。

中心屏幕显示开启各种功能后的实时预览画面，右侧的小窗口显示原始画面。

## 故障排除

### Q1: 此项目支持哪些模型？

目前该项目仅支持目标识别模型，即带有识别框的模型类别，不支持例如人体姿态检测和手势姿态检测等模型。

### Q2: 为什么在开启某些功能按钮后仪表板没有响应？

由于此页面基于 Node-RED 构建，在某些情况下可能由于浏览器内核优化导致页面无法实时刷新。您可以尝试点击 REFRESH 按钮和调用按钮刷新屏幕，或者刷新当前网页。

## 资源

- **[GITHUB]** [pysscma 源代码](https://github.com/Seeed-Studio/python-sscma/tree/feat/supervision?tab=readme-ov-file#sample)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>