---
description: 开始使用 Google MediaPipe
title: 开始使用 Google MediaPipe
keywords:
  - Edge
  - reTerminal 应用
  - 嵌入式机器学习
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_ML_MediaPipe
last_update:
  date: 1/10/2024
  author: Kasun Thushara
---


# 在 reTerminal 上开始使用 MediaPipe

MediaPipe 是 Google 提供的一个开源框架，用于构建多模态（例如视频、音频、任何时间序列数据）、跨平台（如 Android、iOS、Web、边缘设备）的应用机器学习管道。它针对端到端的设备内推理进行了性能优化。MediaPipe 目前正在积极开发中，并包含多个演示，可以在 reTerminal 上安装后直接运行。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

我们建议从 Raspberry Pi 官方网站安装 **Bullseye** 或 **Bookworm** 版本的 64 位 Raspberry Pi 操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此 [**指南**](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) 中的步骤操作。

:::note

在早期的操作系统版本中，可以使用 pip（Python 包管理器）直接系统范围安装 Python 库。然而，在 Bookworm 版本中发生了变化。为了避免安装过程中可能出现的问题，现在需要通过 venv 在 Python 虚拟环境中使用 pip 安装包。

:::

逐条执行以下命令，您将创建一个虚拟环境。

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```

## MediaPipe 中的机器学习解决方案

首先，通过以下命令将 GitHub 仓库克隆到您的 reTerminal 设备：

 ```sh
 git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```
导航到包含所需资源的文件夹。在该目录中，您将找到我们将要介绍的四个主题。

### 人脸检测

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-faccedetection.gif" /></center>

- **步骤 1** 对于我们的第一个主题，我们将安装人脸检测的依赖项。使用以下命令移动到人脸检测部分：

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_detector/raspberry_pi
 ```
- **步骤 2** 运行安装脚本以安装必要的依赖项：

 ```sh
sh setup.sh
 ```

- **步骤 3** 安装完成后，您可以执行源文件以启动人脸检测：

 ```sh
python3 detect.py
 ```

### 人脸标记

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-facelandmarks.gif" /></center>

- **步骤 1** 安装依赖项：

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_landmarker/raspberry_pi
 ```
- **步骤 2** 运行安装脚本以安装必要的依赖项：

 ```sh
sh setup.sh
 ```

- **步骤 3** 安装完成后，您可以执行源文件以启动人脸标记：

 ```sh
python3 detect.py
 ```

### 手部标记

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe_handlandmarks.gif" /></center>

 - **步骤 1** 安装依赖项：

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/hand_landmarker/raspberry_pi
 ```
- **步骤 2** 运行安装脚本以安装必要的依赖项：

 ```sh
sh setup.sh
 ```

- **步骤 3** 安装完成后，您可以执行源文件以启动手部标记：

 ```sh
python3 detect.py
 ```

### 姿态标记

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe-pose.gif" /></center>

 - **步骤 1** 安装依赖项：

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/pose_landmarker/raspberry_pi
 ```
- **步骤 2** 运行安装脚本以安装必要的依赖项：

 ```sh
sh setup.sh
 ```

- **步骤 3** 安装完成后，您可以执行源文件以启动姿态标记：

 ```sh
python3 detect.py
 ```

## 资源

- **[网页]** [MediaPipe 官方网页](https://mediapipe.dev/)

- **[网页]** [MediaPipe 官方文档](https://google.github.io/mediapipe/)

## 技术支持

感谢您选择我们的产品！我们将为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>