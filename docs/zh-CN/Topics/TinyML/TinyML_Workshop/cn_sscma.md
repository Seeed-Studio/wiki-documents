---
description: 这是一个专注于嵌入式AI的开源项目/平台。
title: AI "Blink"
keywords:
- tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/sscma
last_update:
  date: 08/26/2024
  author: Matthew
---

## 熟悉我们使用的工具

### SenseCraft AI 平台

Seeed Studio [SenseCraft AI 平台](https://sensecraft.seeed.cc/ai/#/model) 是一个基于浏览器的AI解决方案。

它使用户能够轻松地将大量公开可用的AI模型库部署到他们的边缘设备上，提供无缝且用户友好的体验，让您只需**点击几下**就能直接将公共AI模型部署到您的边缘设备上。

:::info
它的核心是一个开源项目，我们已经在[GitHub](https://github.com/Seeed-Studio/ModelAssistant)上分享了它，并且也提供了[开发方法](/cn/ModelAssistant_Introduce_Overview)。
:::

#### 用户账户

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) 是一个开放平台，允许用户在不登录的情况下浏览所有公共AI模型和主页。只有当您需要部署模型或分享您自己的模型时，才需要注册和登录。

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) 和 [SenseCraft 数据平台](https://sensecap.seeed.cc/portal/#/login)（原SenseCAP云平台）都是seeed studio为用户提供的软件服务，用户只需要在任一平台上注册一个账户，然后就可以使用同一账户在两个平台上登录。

#### 注册

1. 输入您的姓名和有效邮箱，然后点击"获取验证码"<br />


![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png)

2. 从您的邮箱获取验证码并在注册页面输入

:::note
验证码有效期为10分钟，请在10分钟内完成注册
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png)

3. 输入您的密码和其他用户信息以完成注册。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png)

#### 登录

使用您注册的邮箱账户登录

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png)

更多关于SenseCraft AI平台的信息，您可以参考[这里](https://wiki.seeedstudio.com/cn/sensecraft_ai_main/)。

## SenseCraft AI 平台上的AI模型

### 模型列表

公共AI模型显示所有已发布的AI模型；自定义AI模型显示您自己上传的所有AI模型。模型在列表中显示如下

- 模型推理示例图像
- 模型名称
- 模型描述
- 此模型任务类型，如检测、分类、分割、姿态、生成
- 支持的设备：支持部署此模型的设备
- 发布此模型的用户名

**搜索模型**<br/>
基于模型中各种类型的关键信息提供搜索功能，如模型名称、模型任务、支持的设备、模型发布者

**收藏模型**<br/>
用户可以收藏公共模型

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/7.png)

更多关于SenseCraft AI平台中AI模型的信息，您可以参考[这里](https://wiki.seeedstudio.com/cn/sensecraft_ai_overview/#pretrained-models)。

## 设备工作区

SenseCraft AI 平台为用户提供了一个 AI 模型库，用于分享和下载 AI 模型，同时还拥有一个设备工作区，用户可以在其中实时查看设备的推理结果并管理设备，以提高设备管理的便利性和灵活性。

### XIAO ESP32S3 工作区

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

您可以通过 [XIAO ESP32S3 工作区文档](https://wiki.seeedstudio.com/cn/XIAO_ESP32S3_Workspace/) 了解更多信息。

### Grove-Vision AI v2 工作区

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

您可以通过 [Grove-Vision AI v2 工作区文档](https://wiki.seeedstudio.com/cn/Grove_Vision_AI_v2_Workspace/) 了解更多信息。

### Nvidia Jeson 工作区

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

您可以通过 [Nvidia Jeson 工作区文档](https://wiki.seeedstudio.com/cn/Nvidia_Jeson_Workspace/) 了解更多信息。

#### SenseCraft AI-Jetson

SenseCraft AI-Jetson 是专为 NVIDIA Jetson 边缘 AI 设备设计的开发工具包和平台。只需运行"快速启动脚本"，您就会看到一个交互式用户界面，可以查看带有预加载视频和预加载 AI 模型的示例应用程序。如果您想添加自己的 USB 摄像头、IP 摄像头，只需点击几下即可轻松完成！

除了我们提供的各种开箱即用的内置 AI 模型外，您还可以访问 SenseCraft AI 平台上的大量公共模型，并能够下载和部署特定场景的 AI 模型，根据您的需求创建个性化的 AI 解决方案。SenseCraft AI 是您视觉 AI 的智能决策伙伴，为您提供简单、灵活和高效的推理和解决方案构建能力。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)


您可以通过 [SenseCraft AI-Jetson 文档](https://wiki.seeedstudio.com/cn/SenseCraft_AI_Jetson/) 了解更多信息。

## AI "闪现"：快速使用 AI

### 1. 人脸识别入门

我们首先访问 [SenseCraft AI 部署网站](https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974)，然后只需通过数据线将 XIAO ESP32S3 Sense 连接到您的 PC，即可立即显示人脸识别。

#### 步骤 1. 安装 XIAO ESP32S3 Sense 扩展板

首先，我们需要正确地将 XIAO ESP32S3 Sense 扩展板连接到 XIAO。安装扩展板非常简单，您只需将扩展板上的连接器与 XIAO ESP32S3 上的 B2B 连接器对齐，用力按下并听到"咔嗒"声，安装就完成了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>


#### 步骤 2. 将 XIAO 连接到您的 PC

使用具有数据传输功能的数据线将 XIAO 连接到您的 PC。

#### 步骤 3. 访问 SenseCraft AI 平台页面并连接 XIAO

点击下面的按钮访问 SenseCraft AI 平台主页。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"2"}>SenseCraft AI 平台</font></span></strong></a>
</div><br />

一旦我们进入 SenseCraft AI 平台的主页，我们首先需要连接 XIAO ESPS3，为此，点击 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai3.png" style={{width:800, height:'auto'}}/></div>

浏览器随后会弹出一个窗口。我们需要在这里为 XIAO 选择正确的端口。对于 **Windows**，此端口通常以 **COM** 开头，而在 **MacOS** 的情况下，此端口通常以 **/dev/tty** 开头。并且它会有 **USB JTAG** 字样。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai4.png" style={{width:800, height:'auto'}}/></div>

点击 **Connect** 按钮只会导致自动识别板子并正在读取配置信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai5.png" style={{width:800, height:'auto'}}/></div>

然后我们可以转到 **Select Model** 按钮并点击它以找到另一个弹出窗口。这里我选择了人脸识别进行演示。选择后，点击 **Send** 按钮并等待几秒钟。您将直接看到结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai6.gif" style={{width:500, height:'auto'}}/></div>

您成功了！您已经成功部署了您的第一个 ML 模型！

### 2. SenseCraft 触发器 - 执行简单的反馈动作

也就是说，当我们识别到我们的面部时，我们让 XIAO 的 LED 灯亮起。为此，转到 **Output** 部分并选择"Trigger action"来设置触发器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai7.png" style={{width:800, height:'auto'}}/></div>

这里，当人脸检测的置信度超过 50% 时启用触发器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai8.png" style={{width:800, height:'auto'}}/></div>

这里的 **Trigger Action** 是"点亮 LED"。之后，点击"Send"，您可以看到，每当检测到人脸时，您可以看到板载 LED 被点亮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai9.png" style={{width:800, height:'auto'}}/></div>

:::info
**恭喜！** 您已经成功部署了 AI 自动化系统！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai10.png" style={{width:800, height:'auto'}}/></div>
:::

<!-- ### 2. 关键词识别(KWS)控制XIAO板载LED

#### 演示

<iframe width="560" height="315" src="https://www.youtube.com/embed/oa0BGRXnb8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### 工作原理！

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/img/KWS_Diagram.png" style={{width:1000, height:'auto'}}/></div> 


**步骤 2.1. 下载所有必要文件**

下载以下三个二进制文件。

<div class="table-center">
	<table align="center">
		<tr>
			<td>bootloader.bin</td>
			<td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.bootloader.bin" target="_blank"><b>下载</b></a></td>
		</tr>
		<tr>
			<td>partition-table.bin</td>
			<td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.partitions.bin" target="_blank"><b>下载</b></a></td>
		</tr>
    <tr>
      <td>XIAO_ESP32S3_Speech_Recognition.bin</td>
      <td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.bin" target="_blank"><b>下载</b></a></td>
    </tr>
	</table>
</div>

**步骤 2. 将所有文件烧录到XIAO**

请点击下面的按钮进入SenseCraft AI平台烧录工具页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>前往SenseCraft AI平台</font></span></strong></a>
</div><br />

进入网页后，请从**部署**中点击**连接**按钮，然后选择您的XIAO的端口号。同样，它应该清楚地标记为**USB JTAG**。

* **步骤 2.1** 选择部署
* **步骤 2.2** 选择部署
* **步骤 2.3** 点击**连接**

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab01.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

* **步骤 2.4** 选择XIAO - 它应该清楚地标记为**USB JTAG**。
* **步骤 2.5** 最后点击连接。

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab2.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

连接正确后，我们可以选择要上传的文件。然后请按照下面的格式，依次填入烧录地址并选择正确的文件。


<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab3.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

<div class="table-center">
	<table align="center">
		<tr>
			<td>1</td>
			<td>0x0000</td>
			<td>bootloader.bin</td>
		</tr>
		<tr>
			<td>2</td>
			<td>0x8000</td>
			<td>partition-table.bin</td>
		</tr>
    <tr>
	  <td>3</td>
      <td>0x10000</td>
      <td>XIAO_ESP32S3_Speech_Recognition.bin</td>
    </tr>
	</table>
</div>

然后点击**烧录**，观察所有文件的进度条，确保每个文件都成功烧录后再离开。

**步骤 3.** 重启观察效果

所有文件成功上传后，您可以按下复位按钮让程序开始执行。这个示例程序的效果是，当XIAO ESP32S3 Sense的麦克风检测到您说出的Hello命令时，内置LED橙色灯会点亮。当监听到您说的Stop命令时，橙色灯熄灭。

 -->
<!-- 
### 3. 更多自定义预构建模型

:::tip
除了预先准备的人脸模型外，我们还在为XIAO ESP32S3支持更多模型，敬请期待！
:::

SenseCraft带有各种内置模型，您可以尝试其他几个模型并进行实验。

- 人脸检测

  预览：

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.png" style={{width:600, height:'auto'}}/></div>

- 数字水表

  预览：

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/digital_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

- yolov5 水表

  预览：

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/water_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

#### 模型使用

如果您想使用自定义模型，请按照以下说明操作

**步骤 1. 选择"即用型AI模型"中列出的模型**

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Custom_models.png" style={{width:800, height:'auto'}}/></div>

这里我选择了水表读数演示。选择后，点击**发送**按钮并等待几秒钟。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_loading.png
" style={{width:800, height:'auto'}}/></div>

最后，我们来到预览部分，在右上角点击一次**停止**，然后点击**调用**，如果一切运行顺利，您可以看到实时屏幕效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/10.gif" style={{width:800, height:'auto'}}/></div> 

<hr></hr> -->

# 待办事项
- [ ] 使用 SenseCraft AI 平台加载和运行**人脸识别模型**。
- [ ] 使用 SenseCraft AI 平台设置触发器并**控制 LED**。

<!-- :::tip
如果您也想体验这个自动生成读数的水表，您可以点击**[这里](https://files.seeedstudio.com/wiki/tinyml-topic/clock-master.zip)**下载压缩包，解压后双击打开根目录中的 html 文件。
::: -->