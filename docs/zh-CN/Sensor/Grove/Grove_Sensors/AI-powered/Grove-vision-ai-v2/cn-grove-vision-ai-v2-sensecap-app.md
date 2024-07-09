---
description: Introduces how to connect Grove Vision AI V2 to the SenseCAP Mate APP.
title: 连接 Grove - Vision AI V2模块人工智能到 SenseCAP Mate APP
keywords:
- sensecap mate
- grove vision ai v2
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/connect_vision_ai_v2_to_sensecap_mate
last_update:
  date: 03/13/2024
  author: guiyingzhao
---

# 将Grove Vision AI V2连接到SenseCAP Mate APP

**[SenseCAP Mate APP](https://sensecap-mate-download.seeed.cn/)** 是一个功能强大的数据可视化和远程设备管理应用程序。

- 省时省力：提供扫描即玩的体验，使用户能够在4个步骤内完成整个配置
- 适用于技术背景较少或没有技术背景的人们轻松开始使用传感器数据
- 在清晰的用户界面上获取和查看数据
- 设置时间间隔：提高电池效率
- 设置阈值：关注您需要采取行动的数据
- 如果数据超出安全范围，则发送警报

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/1.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/">
            <strong><span><font color={'FFFFFF'} size={"4"}>了解更多 🖱️</font></span></strong>
    </a>
</div>

这个教程将指导您如何将Grove Vision AI V2和XIAO ESP32C3连接到SenseCAP Mate APP。

## 入门指南

在本文的教程内容开始之前，您可能需要准备以下硬件设备。

### 所需材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32C3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV Camera Module<br />for Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


然后，您需要通过排针将XIAO和Grove Vision AI V2连接起来（或使用扩展板和Grove接口）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

### 软件准备

使用适当的USB-C电缆将XIAO ESP32C3连接到计算机。确保设备驱动程序已正确安装。

在您的网络浏览器中打开[SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool)。这可能是由制造商提供的服务，也可能是专为烧录ESP设备而设计的第三方工具。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

然后选择**XIAO ESP32S3**并单击**Connect（连接）**。

:::note注意 

请注意，虽然此处选择了XIAO ESP32S3，但我们仍然使用的是XIAO ESP32C3！

:::

点击下面的按钮下载固件文件，然后点击网页上的**Add File**按钮，为`0x0`地址烧录`XIAO_C3_as_AT_module.bin`固件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/XIAO_C3_as_AT_module.bin">
            <strong><span><font color={'FFFFFF'} size={"4"}>请点击这里下载文件</font></span></strong>
    </a>
</div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最后，点击**Flash**按钮，并在程序成功上传之前**断开**XIAO ESP32C3与计算机的连接。

## 注册SenseCAP帐户和软件准备

### 步骤 1. 注册SenseCAP帐户

如果您是第一次使用SenseCAP，则可能需要在**[SenseCAP网站](https://sensecap.seeed.cc/)**上注册一个帐户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/2.png" style={{width:1000, height:'auto'}}/></div>


注册后，请登录SenseCAP网站。

### 步骤 2. 在您的手机上下载SenseCAP Mate APP。

如果您希望随时随地查看设备的消息，您可能希望考虑安装SenseCAP Mate APP，这是一个使用SenseCAP的移动设备应用程序。通过点击下面的按钮，您可以选择以适合您的方式安装SenseCAP Mate APP。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/3.png" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecap-mate-download.seeed.cn/">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download APP 🖱️</font></span></strong>
    </a>
</div>

## 在SenseCAP中配置设备

### 步骤 3. 添加设备

让我们回到网页端，首先添加一个Grove Vision AI V2。

在页面左侧的目录栏中，选择**开发套件**，然后点击中间的**创建开发套件**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/5.png" style={{width:1000, height:'auto'}}/></div>

请为您的设备命名，并将设备选择为**Grove - Vision AI V2**，然后点击**Confirm（确认）**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/6.png" style={{width:600, height:'auto'}}/></div>

创建新设备后，请点击设备右侧的**Connect（连接）**按钮，然后会显示一系列弹出窗口，以连接所需的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/7.png" style={{width:1000, height:'auto'}}/></div>

请保存这些凭据信息，我们稍后会在网络配置中使用它们。

## SenseCraft AI模型准备和MQTT配置

### 步骤 4. 将Grove Vision AI V2连接到SenseCraft AI模型助手

继续上面的步骤，点击页面中间的**Deploy（部署）**按钮，这时我们将直接跳转到SenseCraft AI模型部署页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/14.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/15.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 5. 上传合适的模型

首先在页面左侧的目录栏中选择**Grove - Vision AI V2**，然后选择您想要使用的模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/16.png" style={{width:1000, height:'auto'}}/></div>

一旦您进入模型页面，您可以阅读该模型的详细描述或在页面上部署该模型。单击页面右上角的**Deploy Model（部署模型）**按钮，进入模型的部署页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/17.png" style={{width:1000, height:'auto'}}/></div>

将安装了XIAO ESP32C3和摄像头的Grove Vision AI V2通过USB-C电缆连接到计算机。

:::tip提示 

电缆应将Grove Vision AI V2连接到计算机，而不是XIAO。

:::

然后点击下面的**Connect（连接）**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/18.png" style={{width:1000, height:'auto'}}/></div>

在新窗口中，点击**Confirm（确认）**并选择设备所在的端口号。等待1~2分钟，直到模型上传完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/19.png" style={{width:1000, height:'auto'}}/></div>

如果模型烧录成功，您应该能在预览中看到实时画面，并且还应该能够看到有关模型的信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/20.png" style={{width:1000, height:'auto'}}/></div>

:::tip提示

 如果预览中没有显示屏幕或模型信息中没有信息，则可能是模型存在问题，您需要重新选择模型或重新上传。 

:::

### 步骤 6. 配置Grove Vision AI V2和XIAO的网络

打开Model Assistant's configuration page（模型助手的配置页面）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/21.png" style={{width:1000, height:'auto'}}/></div>

请打开MQTT按钮，并根据我们在**[步骤 3](https://chat.openai.com/c/f0432c89-b8c8-47a6-b4fa-a98b12edfcf0#step-3-add-device)**中添加到SenseCAP的Grove Vision AI V2的设备信息，填写以下页面中需要填写的信息。

- **SSID & Password**：您希望XIAO连接到的网络的名称和密码。XIAO仅支持2.4G WiFi，不支持5G网络。

填写网络配置时，请注意将端口号更改为**8883**，并且需要打开**SSL**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/23.png" style={{width:1000, height:'auto'}}/></div>

然后点击下方的保存按钮。保存后，并不意味着Grove Vision AI V2已经正确烧录，请返回到左侧菜单栏中的**Process（进程）**，检查设备的IP地址是否出现，以及MQTT连接状态是否正确。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png" style={{width:1000, height:'auto'}}/></div>

:::warning警告

 当IP地址显示时，表示WIFI没有问题，服务状态必须是图中的文本来表示正常，请注意，如果WIFI不正常，MQTT肯定也不正常；当您刚切换时，它可能会显示未连接，您需要等待大约10秒左右，您不需要刷新来查看状态，状态变化后会自动显示最新状态。

:::

完成后，点击**Stop（停止）**按钮停止推理，并点击**Disconnect（断开）**以断开串行端口连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/9.png" style={{width:1000, height:'auto'}}/></div>

## PaaS端和SenseCAP Mate APP观察

### 步骤 7. 在Mate APP上查看结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/22.png" style={{width:1000, height:'auto'}}/></div>

现在我们可以打开手机，输入我们的帐号和密码登录。手机将同步PaaS设备信息。

:::note注意 

请确保选择您注册时使用的正确网站。

:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/11.png" style={{width:400, height:'auto'}}/></div>

登录后，请选择您新创建的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/12.png" style={{width:400, height:'auto'}}/></div>

进入设备后，您可以观察屏幕和结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/13.png" style={{width:400, height:'auto'}}/></div>

## 故障排除

### 问题1：网络问题

如果您在进程页面上持续观察到IP地址的跳入和跳出，则网络可能不稳定。您可能需要考虑更换网络或使用更强的天线。

### 问题2：为什么我在Mate APP中看不到屏幕？

在SenseCraft AI中，只能同时激活SSCMA中的一个实时预览和SenseCAP PaaS中的预览结果。因此，请记住您需要关闭SenseCraft AI中推理的实时屏幕显示。

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

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

