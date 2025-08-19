---
description: 使用 reTerminal 和 Pi 摄像头结合 OpenCV 进行目标检测
title: 使用 reTerminal 和 Pi 摄像头进行目标检测
keywords:
  - 边缘计算
  - reTerminal 
  - piCamera
  - OpenCV
  - 目标检测
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_DM_Object_detection
last_update:
  date: 2023/12/7
  author: Kasun Thushara
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" /></center>

## 简介

在边缘计算设备上进行目标检测已成为计算机视觉领域的一个关键方向，使设备能够自主感知并响应其周围环境。**EfficientDet** 是一款先进的目标检测模型，在该领域占据重要地位。它被设计为**资源高效型模型，能够在准确性和计算需求之间取得平衡，非常适合部署在处理能力有限的边缘设备上**。以 EfficientDet 为代表的边缘计算目标检测在智能监控摄像头、自动驾驶车辆以及物联网（IoT）设备等场景中得到了广泛应用。其实时识别和定位多个目标的能力，使其成为增强边缘计算系统自主性和智能化的关键推动力。

## 开始之前

在开始这个项目之前，您需要按照以下说明提前准备好硬件和软件。

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

我们推荐从官方网站安装 **Bullseye** 或 **Bookworm** 版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此[**指南**](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)中的步骤操作。

:::note

我们强烈建议您先查看我们之前的教程 [**OpenCV 入门指南**](https://wiki.seeedstudio.com/cn/reTerminal_DM_opencv/)，因为本教程是我们系列教程的延续。本指南专为 **Bullseye OS** 和 **Bookworm OS** 设计。请注意安装依赖项的不同，因为这里提供了两种不同的方法。

:::

## TinyML

TinyML 通过使轻量级模型能够在资源极少的边缘设备上运行，彻底改变了机器学习。在目标检测的背景下，TensorFlow Lite 作为 TinyML 的关键框架，通过优化模型的效率，使其能够部署在微控制器和嵌入式系统等设备上。这种集成为目标识别等任务提供了实时的设备端处理，使得结合 [**TensorFlow Lite**](https://www.tensorflow.org/lite) 的 TinyML 成为智能传感器、可穿戴设备和物联网设备的理想选择，而无需持续的云连接。

### EfficientDet

[**EfficientDet**](https://arxiv.org/abs/1911.09070) 是一种高效且准确的目标检测模型，以其在边缘设备上的性能表现脱颖而出。EfficientDet 由 Google 开发，优化了模型准确性与计算效率之间的平衡，使其非常适合在资源受限的环境（如边缘设备和移动平台）中部署。它采用了一种复合缩放方法，能够高效地扩展模型参数，在不牺牲速度的情况下实现更高的准确性。EfficientDet 的架构包括一个用于有效捕获图像特征的特征网络，以及一个用于平衡模型准确性和计算效率的复合缩放方法。它在各种目标检测基准测试中取得了令人印象深刻的性能，同时保持了轻量级结构，使其成为需要实时目标检测的边缘设备应用的首选。

## 在 Bullseye OS 上运行代码

确保您处于正确的文件夹中。如果不是，请执行以下命令：

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
 ```
确保安装了依赖项和 EfficientDet 模型。如果您已经在我们的 [**第一篇教程**](https://wiki.seeedstudio.com/cn/Getting-start-opencv/) 中完成了此步骤，则无需担心。

 ```sh
sh setup.sh
 ```
运行代码：
 ```sh
python3 detect_mod.py
 ```

## 在 BookWorm OS 上运行代码
- **步骤 1** 首先，您需要创建一个虚拟环境。

:::note

在早期的操作系统版本中，可以使用 pip（Python 包管理器）直接在系统范围内安装 Python 库。然而，在 Bookworm 及后续版本中，发生了变化。为了减少安装过程中可能出现的问题，现在需要通过 venv 在 Python 虚拟环境中使用 pip 安装包。

:::

依次执行以下命令，您将创建一个虚拟环境：

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```
- **步骤 2** 接下来，将此 Git 仓库克隆到您的 Raspberry Pi 虚拟环境中，如下所示：

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **步骤 3** 然后，使用我们的脚本轻松安装所需的 Python 包并下载 EfficientDet-Lite 模型。导航到以下文件夹：

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection_bookworm
```
- **步骤 4** 脚本将安装所需的依赖项并下载 TFLite 模型以用于本教程系列。

```sh
sh setup.sh
```

运行代码：
 ```sh
python3 detect_picam.py
 ```

## 技术支持

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>