---
description: 介绍如何使用 Grove Vision AI V2 构建智能网络摄像头。
title: 具有 AI 功能的智能 IP 摄像头
keywords:
- vision AI
- intelligent web camera
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_vision_ai_v2_webcamera
last_update:
  date: 05/09/2024
  author: Allen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/12.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 可以作为先进的监控设备，集成人工智能以增强安全性和运营效率。这些摄像头能够实时进行视频分析，以检测和警报异常活动、识别面部以及监控人群密度，使其非常适合应用于公共安全、零售管理和智能家居安全等领域。通过自动化监控任务，AI IP 摄像头减少了对持续人工监控的需求，从而能够更快地响应潜在的安全威胁并提高整体安全性。

## 所需材料

在开始本教程内容之前，您可能需要准备以下硬件。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Vision AI V2 套件</th>
			<th>XIAO ESP32S3 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 将 AI 模型上传到 Grove Vision AI V2

现在我们将快速使用 SenseCraft AI 开始模块操作，这只需要模块本身即可。

### 步骤 1. 将 Grove Vision AI V2 连接到 SenseCraft AI 模型助手

首先，我们需要打开 SenseCraft AI 模型助手的主页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>前往 SenseCraft AI</font></span></strong></a>
</div>

请使用 Type-C 类型的电缆将 Grove Vision AI V2 连接到您的电脑。

在 SenseCraft AI 模型助手页面的右上角，您可以选择 **Grove Vision AI (WE2)**。然后点击最右侧的 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

在弹出的新窗口中，选择设备的正确 COM 端口并点击 Connect 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 上传合适的模型

然后，只需选择您想使用的模型并点击下方的 **Send** 按钮。以下是一个面部检测的示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/1.png" style={{width:1000, height:'auto'}}/></div>

请保持在此页面 1-2 分钟，直到模型成功上传。请注意，在此过程中切换到其他页面标签可能会导致上传失败（我们的团队正在积极解决此问题，很快将修复）。

### 步骤 3. 观察结果

模型成功上传后，您将能够在右侧的预览中看到来自 Grove Vision AI V2 摄像头的实时画面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/2.png" style={{width:1000, height:'auto'}}/></div>

## 使用 XIAO ESP32S3 Sense 部署 Http 服务器

### 第 4 步：下载 SSCMA 包并上传到 Arduino IDE

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>下载 SSCMA 压缩包</font></span></strong></a>
</div>

从此处下载压缩包。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/3.png" style={{width:1000, height:'auto'}}/></div>

将此包上传到 Arduino IDE。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/4.png" style={{width:1000, height:'auto'}}/></div>

### 第 5 步：设置 2.4G WiFi 并将程序上传到 ESP32S3 Sense

打开 **camera web server** 示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/13.png" style={{width:1000, height:'auto'}}/></div>

设置您的 2.4G WiFi 的 SSID 和密码。（请注意是 2.4G WiFi，而不是 5G）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/5.png" style={{width:1000, height:'auto'}}/></div>

:::tip
我的 ESP32 板卡包版本是 2.0.14。如果您发现程序出现一些奇怪的错误，可以将版本更改为 2.0.14。这是由于版本兼容性问题导致的。
:::

打开 XIAO ESP32S3 Sense 的 PSRAM 功能并上传。当您使用 S3 的音频或视频功能时，需要开启此功能。其他类型的 XIAO 不需要这样做。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/6.png" style={{width:1000, height:'auto'}}/></div>

当程序成功运行时，您将看到如下结果。如果遇到错误，请查看本文底部的 **FAQ**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/7.png" style={{width:1000, height:'auto'}}/></div>

## 访问智能 IP 摄像头

### 第 6 步：在浏览器中查看结果

首先，确保您的电脑与 Grove Vision AI V2 在同一局域网内。打开浏览器，输入您在上一步中获得的 IP 地址，并点击 **Start Stream** 按钮。您将在浏览器中看到 AI 模型成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/12.png" style={{width:1000, height:'auto'}}/></div>

## 常见问题解答 (FAQ)

### 1. UART 缓冲区长度错误

如果您遇到如下错误：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/8.png" style={{width:1000, height:'auto'}}/></div>

首先，您需要进入 esp32 cores 目录，找到 esp32-hal-uart.c 和 esp32-hal-uart.h 文件并打开它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/9.png" style={{width:1000, height:'auto'}}/></div>

然后，您需要将 uartBegin 函数的缓冲区大小从 uint16_t 更改为 uint32_t。保存文件并重新上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/10.png" style={{width:1000, height:'auto'}}/></div>

### 2. 程序上传失败

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/webcamera/11.png" style={{width:1000, height:'auto'}}/></div>

按住 Boot 按钮，同时按下 Reset 按钮，然后松开。这将重启 XIAO 并解决此问题。

### 3. 一直显示点点点

这是由于网络连接问题。检查您的网络是否可用？是否为 2.4G？尝试更换网络或更换天线。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>