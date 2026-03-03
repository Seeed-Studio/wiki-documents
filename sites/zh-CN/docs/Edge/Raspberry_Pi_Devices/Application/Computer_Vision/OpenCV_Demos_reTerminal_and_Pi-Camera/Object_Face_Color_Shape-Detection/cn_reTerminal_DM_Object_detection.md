---
description: 使用 reTerminal 和 Pi 摄像头通过 OpenCV 进行物体检测
title: 使用 reTerminal 和 Pi 摄像头进行物体检测
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Object Detection 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_DM_Object_detection
last_update:
  date: 12/7/2023
  author: Kasun Thushara
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" /></center>

## 介绍

边缘计算机上的物体检测已成为计算机视觉领域的关键技术，使设备能够自主感知和响应周围环境。**EfficientDet** 是一个最先进的物体检测模型，在这个领域中占据核心地位。它被设计为**资源高效的模型，在准确性和计算需求之间取得平衡，特别适合部署在处理能力有限的边缘设备上**。以 EfficientDet 为代表的边缘计算机物体检测技术，在智能监控摄像头、自动驾驶汽车到物联网（IoT）设备等场景中都有应用。它能够实时识别和定位多个物体的能力，使其成为增强边缘计算系统自主性和智能性的关键推动因素。

## 开始使用

在开始这个项目之前，您可能需要按照此处描述的内容提前准备硬件和软件。

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

我们强烈建议查看我们之前关于[**OpenCV 入门**](https://wiki.seeedstudio.com/cn/reTerminal_DM_opencv/)的教程，因为本教程是我们系列教程的延续。本指南专门针对 **Bulleseye OS** 和 **Bookworm OS**。请注意安装依赖项，因为这里概述了两种不同的方法。

:::

## TinyML

TinyML 通过使轻量级模型能够在资源最少的边缘设备上运行，彻底改变了机器学习。在目标检测的背景下，TensorFlow Lite 作为 TinyML 中的关键框架，优化模型以提高效率，使其能够部署在微控制器和嵌入式系统等设备上。这种集成促进了实时的设备端处理，用于目标识别等任务，使 TinyML 与 [**TensorFlow Lite**](https://www.tensorflow.org/lite) 非常适合智能传感器、可穿戴设备和物联网设备中的应用，而无需持续的云连接。

### EfficientDet

[**EfficientDet**](https://arxiv.org/abs/1911.09070) 是一个高效且准确的目标检测模型，在边缘设备上的性能表现突出。由 Google 开发的 EfficientDet 优化了模型准确性和计算效率之间的平衡，使其非常适合部署在资源受限的环境中，如边缘设备和移动平台。它利用复合缩放方法来有效地扩展模型参数，在不影响速度的情况下实现更好的准确性。EfficientDet 的架构包括一个用于有效捕获图像特征的特征网络和一个用于平衡模型准确性和计算效率的复合缩放方法。它的成功在于在各种目标检测基准测试中实现令人印象深刻的性能，同时保持轻量级结构，使其成为需要在边缘设备上进行实时目标检测的应用的首选。

## 让我们在 Bullseye OS 中运行代码

确保您在正确的文件夹中。如果不是

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
 ```

确保安装依赖项和 EfficientDet 模型。如果您已经在我们的[**第一个教程**](https://wiki.seeedstudio.com/cn/Getting-start-opencv/)中完成了这一步，就无需担心。

 ```sh
sh setup.sh
 ```

Run the code

 ```sh
python3 detect_mod.py
 ```

## 在 BookWorm OS 中运行代码

- **步骤 1** 为此你需要创建一个虚拟环境。

:::note

在早期的操作系统版本中，Python 库可以使用 pip（Python 包安装器）直接安装到系统范围内。然而，在 Bookworm 及后续版本中，发生了变化。为了减少安装过程中的潜在问题，现在需要使用 venv 将包通过 pip 安装到 Python 虚拟环境中。

:::

逐一执行这些命令，你将得到一个虚拟环境。

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```

- **步骤 2** 接下来,按照以下方式将这个 Git 仓库克隆到你的树莓派虚拟环境中

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **步骤 3** 接下来，使用我们的脚本轻松安装所需的 Python 包并下载 EfficientDet-Lite 模型。导航到此文件夹。

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection_bookworm
```

- **步骤 3** 该脚本安装所需的依赖项并下载本教程系列所需的TFLite模型。

```sh
sh setup.sh
```

Run the code

 ```sh
python3 detect_picam.py
 ```

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
