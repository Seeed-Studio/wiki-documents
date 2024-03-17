---
description: Introducing how to plug Grove Vision AI V2 into Home Assistant.
title: Connectting to Home Assistant
keywords:
- vision AI
- home assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/connect_vision_ai_v2_to_ha
last_update:
  date: 3/10/2024
  author: guiyingzhao
---

# 将Grove Vision AI V2连接到Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/37.png" style={{width:1000, height:'auto'}}/></div>

将Grove Vision AI V2集成到Home Assistant中可以通过添加先进的视觉感知功能来提升您的智能家居设置。这种集成允许进行实时环境分析和定制自动化，使您的家庭环境更智能。

为了促进这种集成，通过HACS商店可访问的SenseCraft-HomeAssistant插件将您的Grove Vision AI V2连接到Home Assistant，通过SenseCraft数据平台进行连接。这个过程简化并且用户友好，只需要一个SenseCraft账户登录即可将您的设备和传感器数据带入Home Assistant生态系统，为您定制和控制。

以下是本文的主要内容框架。

1. [安装HACS插件](https://chat.openai.com/c/f0432c89-b8c8-47a6-b4fa-a98b12edfcf0#installing-the-hacs-plugin)：安装Home Assistant社区商店（HACS），以便在Home Assistant中安装Seeed Studio的SenseCraft插件。
2. [安装SenseCraft插件](https://chat.openai.com/c/f0432c89-b8c8-47a6-b4fa-a98b12edfcf0#installing-the-sensecraft-plugin)：安装Seeed Studio的SenseCraft插件，使其能够快速部署Seeed Studio的产品到Home Assistant中。
3. [为Grove Vision AI V2准备模型](https://chat.openai.com/c/f0432c89-b8c8-47a6-b4fa-a98b12edfcf0#preparing-the-model-for-grove-vision-ai-v2)：选择并部署您希望在Grove Vision AI V2上使用的模型，之后，Home Assistant将接收来自Vision AI的识别场景和结果信息。
4. [在Home Assistant上构建MQTT服务](https://chat.openai.com/c/f0432c89-b8c8-47a6-b4fa-a98b12edfcf0#building-mqtt-services-at-home-assistant)：利用本地MQTT服务将数据从Grove Vision AI V2和XIAO传输到Home Assistant。
5. [将Grove Vision AI V2集成到Home Assistant](https://chat.openai.com/c/f0432c89-b8c8-47a6-b4fa-a98b12edfcf0#integrate-grove-vision-ai-v2-into-home-assistant)：将Grove Vision AI V2集成到Home Assistant，并设置一个用于配置的可视化仪表板。

## 入门指南

在本文的教程内容开始之前，您可能需要准备以下硬件设备。

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
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Home Assistant Green是自动化您家居的最简单、最注重隐私的方式。它提供了无需费力的设置，允许您通过一个系统控制所有智能设备，所有数据默认存储在本地。该板受益于蓬勃发展的Home Assistant生态系统，并且每个月都会通过开源进行改进。

我们建议在本教程中使用Home Assistant Green作为Home Assistant主机，或者您可以使用任何带有Supervisor的Home Assistant主机。

然后，您需要通过排针将XIAO和Grove Vision AI V2连接起来（或使用扩展板和Grove接口）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

##  安装HACS插件

### 步骤 1. 在Home Assistant中打开高级模式

要解锁Home Assistant的全部潜力并访问高级功能，您可以在用户界面中启用"高级模式"。

导航到您的[Home Assistant Web界面](http://homeassistant.local:8123/)。单击Home Assistant侧边栏左下角的个人资料图标。在您的个人资料页面上，向下滚动以找到**Advanced Mode（高级模式）**切换。将切换开关切换到打开位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 安装终端和SSH

单击侧边栏中的**Settings（设置）**以访问设置菜单。单击**Add-ons（附加组件）**以访问附加组件商店。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

使用搜索栏或浏览可用的附加组件以找到 **Terminal & SSH**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

一旦您定位了**Terminal & SSH**，点击它以查看详细信息。在Add-on（附加组件）页面上，您将看到概述、文档和配置选项。要安装该Add-on，请点击**Install（安装）**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### 第三步：安装 HACS

在侧边栏中找到最近下载的**Terminal & SSH**。在终端中，导航到配置目录，该目录是您的 Home Assistant 配置的根目录：

```
cd /config
```

执行以下命令来下载并运行 HACS 安装脚本：

```
wget -q -O - https://install.hacs.xyz | bash -
```

安装脚本完成后，您需要重新启动 Home Assistant 以应用更改。您可以通过 UI 进行 Home Assistant 的重新启动，方法是转到**Settings > System > Restart**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

点击侧边栏中的**Settings**以打开设置菜单。在设置菜单中，导航到**Devices & Services**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

点击**ADD INTEGRATION**以将新的集成添加到您的 Home Assistant 设置中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

在搜索栏中键入**HACS**以查找 Home Assistant Community Store 集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

如果找到了 HACS，它应该会出现在可用集成的列表中。点击它开始安装过程。

可能会弹出许可协议或服务条款。仔细阅读协议，如果您同意条款，请勾选所有框以表示您的同意。点击**SUBMIT**继续安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

接下来，您将被提示使用您的 GitHub 帐户登录。这是必要的，因为 HACS 与 GitHub 集成以管理社区创建的集成和插件的安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

按照说明授权 Home Assistant 访问您的 GitHub 帐户。这通常涉及输入由 GitHub 提供的验证代码以确认您的身份。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

一旦您授权 Home Assistant 使用您的 GitHub 帐户，HACS 将完成安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

您可能需要重新启动 Home Assistant 才能使 HACS 完全集成到您的系统中。

## 安装 SenseCraft 插件

### 第四步：通过 HACS 安装 SenseCraft 插件

在侧边栏中查找 HACS，并点击它以打开 HACS 界面。在右下角，您会找到一个菜单按钮（取决于您的 HACS 版本，可能是三个点或加号）。点击**Custom repositories**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

将会出现一个对话框，询问您输入存储库 URL。在这里，您将输入 SenseCraft integration 的自定义存储库 URL。输入 URL 后，选择类别（对于 SenseCraft integration ，您将选择**Integration**）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

点击**Add**。存储库现在已添加到您的 HACS 中，您应该能够在**Integrations**列表下找到 SenseCraft integration。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

找到 SenseCraft integration 并点击 "DOWNLOAD"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

到目前为止，我们已成功完成了 SenseCraft 插件的安装。

## 为 Grove Vision AI V2 准备模型

### 第五步：为 XIAO ESP32C3 刷写固件

使用合适的 USB-C 电缆将 XIAO ESP32C3 连接到您的计算机上。确保设备驱动程序已正确安装。

在您的 Web 浏览器中打开[SenseCraft Model Assistant Tool（SenseCraft 模型助手工具）](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool)。这可能是制造商提供的服务，也可能是专为刷写 ESP 设备而设计的第三方工具。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>


然后选择**XIAO ESP32S3**并点击**连接**。

:::警告 请注意，虽然此处选择了 XIAO ESP32S3，但我们仍在使用 XIAO ESP32C3！

:::

点击下方按钮下载固件文件，并在网页上点击**Add File（添加文件）**按钮以为`0x0`地址刷写`XIAO_C3_as_AT_module.bin`固件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/XIAO_C3_as_AT_module.bin">
            <strong><span><font color={'FFFFFF'} size={"4"}>下载文件</font></span></strong>
    </a>
</div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最后，点击**Flash（刷写）**按钮，并在程序成功上传之前等待，然后再将 XIAO ESP32C3 从计算机断开连接。

### 第六步：连接 Grove Vision AI V2 到 SenseCraft AI 模型助手

首先，我们需要打开主 SenseCraft AI 模型助手页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process"><strong><span><font color={'FFFFFF'} size={"4"}>前往 SenseCraft AI 页面</font></span></strong></a>
</div>

<br />

请使用 Type-C 类型的数据线将 **Grove Vision AI V2** 连接到您的计算机。

在 SenseCraft AI 模型助手页面的右上角，您可以选择 **Grove Vision AI (WE2)**。然后点击右侧的 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

在弹出的新窗口中，选择设备的正确 COM 端口，然后点击连接按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

### 第七步：上传适用的模型

然后，只需选择您想要使用的模型，然后点击下方的**Send**按钮。这是一个手势检测的示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/18.png" style={{width:1000, height:'auto'}}/></div>

等待1~2分钟，直到模型上传完成。

### 第八步：观察

一旦模型成功上传，您将能够在右侧的预览中看到来自 Grove Vision AI V2 摄像头的实时视频。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/19.png" style={{width:1000, height:'auto'}}/></div>

<br />

我们可以看到，在右侧的预览设置中，有两个设置选项可以更改，以优化模型的识别准确性。

:::提示 如果在预览中没有显示屏幕或模型信息中没有信息，则可能是模型出了问题，您需要重新选择模型或重新上传。 :::

## 在 Home Assistant 上构建 MQTT 服务

### 第九步：安装 EMQX

点击侧边栏中的**Setting**以访问设置菜单。然后点击**Add-on**以访问附加组件商店。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

使用搜索栏或浏览可用的附加组件，找到**emqx**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png" style={{width:1000, height:'auto'}}/></div>

一旦找到了**EMQX**，点击它以查看详情。在add-on（附加组件）页面上，您将看到概述、文档和配置选项。要安装该附加组件，请点击**Install**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png" style={{width:1000, height:'auto'}}/></div>

安装了 EMQX 附加组件后，打开 **Start on boot（开机启动）**、**Watchdog**和 **Show in sidebar** 开关。点击 **Start** 来启动 EMQX。

:::提示 由于我们正在使用它在我们自己的家庭网络中，目前我们不考虑安全性，并在端口 1883 上进行 MQTT 订阅和发布。请记住，尤其是如果暴露在互联网上，您应该确保您的 EMQX 代理服务器的安全性。您应考虑：

- 设置用户身份验证。
- 为 MQTT 通信启用 SSL/TLS 加密。
- 配置适当的防火墙规则。

通过遵循这些通用步骤，您应该能够在 Home Assistant 中配置 EMQX，从而使您能够以可靠的 MQTT 代理为核心开始构建您的物联网生态系统。请注意，具体步骤可能会根据您的 Home Assistant 和 EMQX 版本以及您的网络配置而有所不同。始终参考[官方文档](https://github.com/hassio-addons/addon-emqx/blob/main/emqx/DOCS.md)获取最准确和最新的信息。 :::









- ## 将 Grove Vision AI V2 集成到 Home Assistant

  ### 第十步：为 Grove Vision AI V2 & XIAO 配置网络

  将 Grove Vision AI V2 连接到您的计算机，并打开[Model Assistant's configuration page（模型助手的配置页面）](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/config)。

  在右上角点击连接到 Grove Vision AI V2 后，请打开 MQTT 按钮，并输入以下信息填写页面。

  - **SSID & Password**：设备需要与安装 Home Assistant 的主机处于同一局域网上。因此，请在同一局域网下配置网络。XIAO 只支持 2.4G WiFi，不支持 5G 网络。
  - **Encryption**：选择 **AUTO**。
  - **Host**：安装了 EMQX 的主机的 IP 地址。
  - **Port**：`1883`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/32.png" style={{width:1000, height:'auto'}}/></div>

然后点击下方的保存按钮。保存后，**并不意味着 Grove Vision AI V2 已经正确写入**，请返回左侧菜单栏中的**Process**，检查设备的 IP 地址是否已出现，并检查 MQTT 连接的状态是否正确。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png" style={{width:1000, height:'auto'}}/></div>

:::警告：当显示 IP 地址时，意味着 WIFI 没有问题，服务状态必须是图中的文字来表示正常，请注意，如果 WIFI 不正常，MQTT 绝对不正常；当您刚切换过去时，可能会显示未连接，并且需要等待约 10 秒左右，您无需刷新即可查看状态，状态更改后它会自动显示最新的状态。
:::

### 第十一步：集成到 Home Assistant

#### 方法 1：如果设备已被发现

到此为止，通常情况下，您可以在 Home Assistant 的 **Settings->Devices & services** 中搜索到 Grove Vision AI V2。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png" style={{width:1000, height:'auto'}}/></div>

请点击**Configure**按钮设置相关信息，然后您就完成了添加设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png" style={{width:1000, height:'auto'}}/></div>

在 **Settings->Devices & services**, 您将能够查看设备的详细信息并显示支持的选项卡，您可以添加任意数量的选项卡以显示在概览中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png" style={{width:1000, height:'auto'}}/></div>

:::注意
1. 如果在前面的步骤中配置了用户名和密码，则在添加设备时可能会要求输入它们。
2. 如果您要将多个Vision AI设备添加到Home Assistant，请注意设备的ID号码，该号码作为区分不同Grove标识之间的标记。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png" style={{width:600, height:'auto'}}/></div>
:::

#### 方法2：如果未找到设备

如果您的家中有太多设备，有时它们可能无法直接被Home Assistant搜索到。这时您可能需要手动添加设备。

在 **Setting** 页面中，选择 **Devices & Services**。

然后点击右下角的 **ADD INTEGRATION** 按钮，搜索 **SenseCraft**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

点击 SenseCraft 并选择 Action 作为 **Add device using host/id (局域网集成)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

点击 **SUBMIT**, 然后从下拉菜单中选择您的设备类型，例如 `grove_vision_ai_we2`，然后再次点击 **SUBMIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png" style={{width:600, height:'auto'}}/></div>

在接下来的输入字段中，输入您设备的确切ID。通常，这个ID可以在设备本身或[SenseCraft AI](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process)网站上找到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/41.png" style={{width:700, height:'auto'}}/></div>

下一步是配置MQTT服务。输入与您在网站上设置的MQTT服务详细信息相匹配的信息。如果您之前没有设置用户名和密码，那么您就不需要在这里填写它们。然后点击 **SUBMIT**。

如果设置成功，系统通常会提示您为设备选择一个位置。根据您的实际情况选择适当的房间或区域，然后点击 **完成**。

配置完成后，您可以在Home Assistant的“概述”页面上查看您的设备及其状态。

按照这些步骤，您应该可以成功将“SenseCraft”设备添加到Home Assistant实例，并配置其使用MQTT服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/37.png" style={{width:1000, height:'auto'}}/></div>

## 故障排除

### Q1：如果在Grove Vision AI V2断开连接后再也看不到数据消息怎么办？

您可能需要在SenseCraft中删除设备并重新添加。删除后，它可能无法再次被自动搜索到，您需要手动添加设备。请参考**这里的步骤**重新添加设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png" style={{width:1000, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们的产品有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>

