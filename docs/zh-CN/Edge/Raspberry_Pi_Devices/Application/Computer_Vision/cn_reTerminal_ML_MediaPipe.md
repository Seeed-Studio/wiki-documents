---
description: 开始使用 Google MediaPipe
title: 开始使用 Google MediaPipe
keywords:
  - Edge
  - reTerminal Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_ML_MediaPipe
last_update:
  date: 1/10/2024
  author: Kasun Thushara
---


# 在 reTerminal 上开始使用 MediaPipe

MediaPipe 是 Google 开发的一个开源框架，用于构建多模态（例如视频、音频、任何时间序列数据）、跨平台（即 Android、iOS、web、边缘设备）的应用机器学习管道。它针对性能进行了优化，考虑到端到端的设备端推理。Mediapipe 目前正在积极开发中，包含多个演示，在 reTerminal 上安装 Mediapipe 后可以开箱即用。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>

</div>

### 软件准备

我们建议从官方网站安装 **Bullesye** 或 **Bookworm** 版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此[**指南**](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)中概述的步骤进行操作。

:::note

在早期的操作系统版本中，可以使用 Python 包安装器 pip 直接在系统范围内安装 Python 库。然而，在 Bookworm 版本中，发生了变化。为了减少安装过程中的潜在问题，现在需要使用 venv 将包通过 pip 安装到 Python 虚拟环境中。

:::

逐一执行这些命令，您将得到一个虚拟环境。

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```

## MediaPipe 中的机器学习解决方案

首先使用以下命令将 GitHub 仓库克隆到您的 reTerminal 设备：

 ```sh
 git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

导航到包含所需资源的文件夹。在此目录中，您将找到我们将要涵盖的四个主题。

### 人脸检测

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-faccedetection.gif" /></center>

- **步骤 1** 对于我们的第一个主题，我们将为人脸检测安装依赖项。使用以下命令移动到人脸检测部分

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_detector/raspberry_pi
 ```

- **步骤 2** 运行安装脚本以安装必要的依赖项

 ```sh
sh setup.sh
 ```

- **步骤 3** 设置完成后，您可以执行源文件来启动人脸检测

 ```sh
python3 detect.py
 ```

### 面部关键点检测器

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-facelandmarks.gif" /></center>

- **步骤 1** 安装依赖项

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_landmarker/raspberry_pi
 ```

- **步骤 2** 运行安装脚本以安装必要的依赖项

 ```sh
sh setup.sh
 ```

- **步骤 3** 设置完成后，您可以执行源文件来启动面部特征点标记器。

 ```sh
python3 detect.py
 ```

### 手部关键点检测器

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe_handlandmarks.gif" /></center>

- **步骤 1** 安装依赖项

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/hand_landmarker/raspberry_pi
 ```

- **步骤 2** 运行安装脚本以安装必要的依赖项

 ```sh
sh setup.sh
 ```

- **步骤 3** 设置完成后，您可以执行源文件来启动手部地标检测器。

 ```sh
python3 detect.py
 ```

### 姿态地标检测器

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe-pose.gif" /></center>

- **步骤 1** 安装依赖项

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/pose_landmarker/raspberry_pi
 ```

- **步骤 2** 运行安装脚本以安装必要的依赖项

 ```sh
sh setup.sh
 ```

- **步骤 3** 设置完成后，您可以执行源文件来启动姿势标记器。

 ```sh
python3 detect.py
 ```

## 资源

- **[网页]** [MediaPipe 官方网页](https://mediapipe.dev/)

- **[网页]** [MediaPipe 官方文档](https://google.github.io/mediapipe/)

## 技术支持

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
