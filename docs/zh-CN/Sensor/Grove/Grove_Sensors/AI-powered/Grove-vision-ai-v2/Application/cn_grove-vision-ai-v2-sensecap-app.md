---
description: 介绍如何将 Grove Vision AI V2 连接到 SenseCAP Mate APP。
title: 将 Grove Vision AI V2 连接到 SenseCAP Mate APP
keywords:
- sensecap mate
- grove vision ai v2
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/connect_vision_ai_v2_to_sensecap_mate
last_update:
  date: 01/19/2024
  author: Citric
---

# 将 Grove Vision AI V2 连接到 SenseCAP Mate APP

**[SenseCAP Mate APP](https://sensecap-mate-download.seeed.cn/)** 是一个强大的应用程序，用于数据可视化和远程设备管理。

- 节省时间：提供扫描即用的体验，使用户能够在 4 个步骤内完成整个配置
- 适合技术背景较少或没有技术背景的人轻松开始使用传感器数据
- 在简洁的用户界面上获取和查看数据
- 设置时间间隔：提高电池效率
- 设置阈值：专注于需要采取行动的数据
- 如果数据超出安全范围，发送警报

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/1.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>了解更多 🖱️</font></span></strong>
    </a>
</div>

本教程将指导您如何将 Grove Vision AI V2 和 XIAO ESP32C3 连接到 SenseCAP Mate APP。

## 入门指南

在开始本教程内容之前，您可能需要准备以下硬件。

### 所需材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32C3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV 摄像头模块<br />适用于 Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

然后，您需要通过排针将 XIAO 和 Grove Vision AI V2 连接起来（或者使用扩展板和 Grove 接口）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

### 软件准备

使用合适的 USB-C 数据线将 XIAO ESP32C3 连接到您的电脑。确保设备驱动程序已正确安装。

在您的网页浏览器中打开 [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool)。这可能是由制造商提供的服务或专为 ESP 设备刷写设计的第三方工具。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

然后选择 **XIAO ESP32S3** 并点击 **Connect**。

:::caution
请注意，虽然这里选择的是 XIAO ESP32S3，但我们仍然使用的是 XIAO ESP32C3！
:::

点击下方按钮下载固件文件，并在网页上点击 **Add File** 按钮，将 `XIAO_C3_as_AT_module.bin` 固件刷写到 `0x0` 地址。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/XIAO_C3_as_AT_module.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>下载文件</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最后，点击 **Flash** 按钮，等待程序成功上传后再 **断开** XIAO ESP32C3 与电脑的连接。

## 注册 SenseCAP 账户及软件准备

### 第一步：注册 SenseCAP 账户

如果您是首次使用 SenseCAP，那么您需要在 **[SenseCAP 官网](https://sensecap.seeed.cc)** 注册一个账户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/2.png" style={{width:1000, height:'auto'}}/></div>

注册完成后，请登录 SenseCAP 官网。

### 第二步：下载 SenseCAP Mate APP 到您的手机

如果您希望随时随地查看设备信息，可以考虑安装 SenseCAP Mate APP，这是一款用于 SenseCAP 的移动设备应用。点击下方按钮，您可以选择适合您的方式安装 SenseCAP Mate APP。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/3.png" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecap-mate-download.seeed.cn/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>下载 APP 🖱️</font></span></strong>
    </a>
</div>

## 在 SenseCAP 中配置设备

### 第三步：添加设备

让我们回到网页端，开始添加 Grove Vision AI V2。

在页面左侧的目录栏中选择 **开发套件 (Development Kit)**，然后点击中间的 **创建开发套件 (Create Development Kit)** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/5.png" style={{width:1000, height:'auto'}}/></div>

请为您的设备命名，并选择设备类型为 **Grove - Vision AI V2**，然后点击 **确认 (Confirm)** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/6.png" style={{width:600, height:'auto'}}/></div>

创建新设备后，请点击设备右侧的 **连接 (Connect)** 按钮，会弹出一系列窗口以连接所需设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/7.png" style={{width:1000, height:'auto'}}/></div>

请保存这些凭证信息，我们将在网络配置中使用它们。

## SenseCraft AI 模型准备及 MQTT 配置

### 第四步：将 Grove Vision AI V2 连接到 SenseCraft AI 模型助手

继续上述步骤，点击页面中间的 **部署 (Deploy)** 按钮，此时我们将直接跳转到 SenseCraft AI 模型部署页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/14.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/15.png" style={{width:1000, height:'auto'}}/></div>

### 第五步：上传合适的模型

首先在左侧目录栏中选择 **Grove - Vision AI V2**，然后选择您想使用的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/16.png" style={{width:1000, height:'auto'}}/></div>

进入模型页面后，您可以阅读该模型的详细描述或在页面上部署模型。点击页面右上角的 **部署模型 (Deploy Model)** 按钮进入模型的部署页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/17.png" style={{width:1000, height:'auto'}}/></div>

通过 USB-C 数据线将安装了 XIAO ESP32C3 和摄像头的 Grove Vision AI V2 连接到电脑。

:::tip
数据线应连接 Grove Vision AI V2 到电脑，而不是 XIAO。
:::

然后点击下方的 **连接 (Connect)** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/18.png" style={{width:1000, height:'auto'}}/></div>

在新窗口中点击 **确认 (Confirm)** 并选择设备所在的端口号。等待 1~2 分钟，模型将被上传。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/19.png" style={{width:1000, height:'auto'}}/></div>

如果模型烧录成功，您可以在预览中看到实时画面，同时也能看到模型的相关信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/20.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果预览中没有显示画面或模型信息中没有内容，可能是模型有问题，您需要重新选择模型或再次上传。
:::

### 第六步：为 Grove Vision AI V2 和 XIAO 配置网络

打开模型助手的配置页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/21.png" style={{width:1000, height:'auto'}}/></div>

请开启 MQTT 按钮，并在页面中输入以下信息：

- **SSID 和密码**：您希望 XIAO 连接的网络名称和密码。XIAO 仅支持 2.4G WiFi，不支持 5G 网络。

请根据我们在 **[第三步](#step-3-add-device)** 中通过 SenseCAP 添加的 Grove Vision AI V2 的设备信息填写网络配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/23.png" style={{width:1000, height:'auto'}}/></div>

然后点击下方的保存按钮。保存后，**并不意味着 Grove Vision AI V2 已正确写入**，请返回左侧菜单栏中的 **流程 (Process)**，检查设备的 IP 地址是否出现以及 MQTT 连接状态是否正确。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png" style={{width:1000, height:'auto'}}/></div>

:::caution
当显示 IP 地址时，表示 WIFI 没有问题，服务状态必须是图中显示的文本才能代表正常。请注意，如果 WIFI 不正常，MQTT 肯定也不正常；当你刚切换时，可能会显示未连接，需要等待大约 10 秒左右，无需刷新页面即可查看状态，状态变化后会自动显示最新状态。
:::

完成后，点击 **Stop** 按钮停止推理，并点击 **Disconnect** 断开串口连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/9.png" style={{width:1000, height:'auto'}}/></div>


## PaaS 端和 SenseCAP Mate APP 观察

### 第 7 步：在 Mate APP 上查看结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/22.png" style={{width:1000, height:'auto'}}/></div>

现在我们可以打开手机，输入账号和密码登录。手机会同步 PaaS 设备信息。

:::caution
请确保选择您注册的正确站点。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/11.png" style={{width:400, height:'auto'}}/></div>

登录后，选择您新创建的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/12.png" style={{width:400, height:'auto'}}/></div>

进入设备后，您可以观察屏幕和结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/13.png" style={{width:400, height:'auto'}}/></div>

## 故障排查

### 问题 1：网络问题

如果您在 Process 页面上持续观察到 IP 地址反复显示和消失，则可能是网络不稳定。您可以考虑更换网络或更换更强的天线。

### 问题 2：为什么我在 Mate APP 中看不到屏幕？

在 SSCMA 的实时预览和 SenseCAP PaaS 的预览结果中，只有一个可以同时处于活动状态。因此，请记住，您需要在 SenseCraft AI 的 Process 页面上关闭推理的实时屏幕显示。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>