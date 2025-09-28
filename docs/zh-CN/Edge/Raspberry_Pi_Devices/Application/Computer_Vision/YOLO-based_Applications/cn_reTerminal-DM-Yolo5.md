---
description: 使用 Yolov5 训练您自己的数据集并部署到 reTerminal DM
title: 使用 Yolov5 训练您自己的数据集并部署到 reTerminal DM
keywords:
  - Edge
  - reTerminal DM Application
  - Embedded_ML
  - yolov5
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM-Yolo5
last_update:
  date: 9/7/2023
  author: Kasun Thushara
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/yolov5.gif" /></center>

## 介绍

目标检测是计算机视觉的一个基本方面，涉及识别图像中的对象，在监控、医疗保健和自动驾驶汽车等众多领域都有应用。单阶段目标检测器是一类特定的模型，通过直接预测对象类别和边界框坐标来简化这项任务，而无需初始区域提议阶段。这种简化的方法在实时应用中特别有价值。值得注意的是，YOLO（You Only Look Once）系列模型体现了这种效率，在不妥协准确性的情况下提供快速的目标检测。

## 入门指南

在开始这个项目之前，您可能需要按照此处描述的方式提前准备硬件和软件。

### 硬件准备

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
        <th>Coral USB 加速器</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminaldm.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-With-Camera-p-5648.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 软件准备

我们建议从官方网站安装最新版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此[指南](https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/)中概述的步骤进行操作。

### Roboflow

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow.png" alt="pir" width="200" height="auto"/></p>

[Roboflow](https://universe.roboflow.com/) 是一个全面的计算机视觉平台，提供广泛的工具和服务来简化开发和部署计算机视觉模型的过程。其突出特点之一是对带有注释的自定义数据集的强大支持。用户可以轻松上传自己的数据集，包括完整的注释，来训练和微调计算机视觉模型。因此请创建一个账户。

### Ultralytics

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ultralytic.png" alt="pir" width="200" height="auto"/></p>

[Ultralytics](https://ultralytics.com/) 是一个专门从事计算机视觉和深度学习的前沿平台和研究组织。他们因在该领域的贡献而闻名，特别是在开发 YOLO（You Only Look Once）系列目标检测模型（如 YOLOv5）方面。Ultralytics 提供一系列最先进的工具和开源软件，用于目标检测、图像分类等，使高级计算机视觉对研究人员和开发者来说更加易于使用。他们对创新和性能驱动解决方案的专注在计算机视觉社区中获得了显著关注和赞誉，使 Ultralytics 成为那些寻求在深度学习和视觉识别领域突破可能性边界的人们的首选资源。

## 从 Roboflow 选择数据集

- **步骤 1** 请访问提供的网站，并使用搜索功能导航到您选择的数据集。[Roboflow](https://universe.roboflow.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow1.PNG" alt="pir" width="800" height="auto"/></p>

- **步骤 2** 选择数据集后，点击 **Download this Dataset**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow2.PNG" alt="pir" width="800" height="auto"/></p>

- **步骤 3** 选择 YOLOv5 下载格式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow3.PNG" alt="pir" width="400" height="auto"/></p>

- **步骤 4** 选择 **show download code** 并按继续。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow4.PNG" alt="pir" width="400" height="auto"/></p>

- **步骤 5** 在"Jupyter"部分，您会找到一个代码片段。请将此片段复制到剪贴板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow5.PNG" alt="pir" width="400" height="auto"/></p>

## 训练您的自定义数据集

- **步骤 1** 请访问提供的 github 链接并点击 **Open in Colab** [Github Link](https://github.com/KasunThushara/yoloV5n_RPI/tree/main)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/github.PNG" alt="pir" width="800" height="auto"/></p>

<a target="_blank" href="https://colab.research.google.com/github/KasunThushara/yoloV5n_RPI/blob/main/yolov5_reTerminal.ipynb">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

:::note

在资源受限的设备（如 Raspberry Pi）上部署模型之前，通常需要进行模型转换和量化以确保最佳性能。此过程涉及几个步骤：将 PyTorch 模型（.pt 格式）转换为带量化的 TensorFlow Lite（TFLite）模型，特别是转换为 uint8 数据类型。您可以使用此 Colab 笔记本训练您的自定义数据集并将其转换为 TFLite 模型。我们已经概述了在 Colab 环境中进行训练的分步过程。请按照这些说明操作，获取 **data.yaml** 文件和 **best-int8.tflite** 文件，然后返回此 wiki 获取进一步指导。

:::

## 准备您的 reTerminal DM

- **步骤 1** 在终端中逐一执行这些命令。

```sh
sudo git clone https://github.com/ultralytics/yolov5
cd yolov5
pip install -r requirements.txt 
sudo apt-get install python3-tflite-runtime
```

- **步骤 2** 将 Data.yaml 文件和 best-int8.tflite 文件粘贴到 yolov5 文件夹内

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminal.PNG" alt="pir" width="800" height="auto"/></p>

## 使用 detect.py 进行推理

- **步骤 1** 打开 reterminal 并导航到 yolov5 文件夹

```sh
cd yolov5
```
- **步骤 2** 使用 detect.py 进行推理

```sh
python detect.py --weight best-int8.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

:::note
您可以在官方 Ultralytics GitHub 网站 [https://github.com/ultralytics/yolov5](https://github.com/ultralytics/yolov5) 上探索，了解如何使用 `detect.py` 脚本，并发现可以用于向 YOLOv5 模型输入图像或视频流的各种源。
:::

## 在 Edge TPU 上运行

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" /></center>

在 Edge TPU 上部署 YOLOv5n 模型代表了最先进的目标检测与高性能边缘计算之间的动态协同。这种结合为边缘 AI 应用提供了强大支持，例如在资源受限环境中的实时目标识别，使其在安全监控、零售分析和自主系统等任务中具有重要价值。YOLOv5n 的高效设计与 Edge TPU 的硬件加速完美融合，在网络边缘提供快速准确的目标检测，在这里低延迟和实时处理至关重要。

- 使用 detect.py 进行推理

```sh
python detect.py --weight best-int8_edgetpu.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

## 资源

- **[网页]** [Yolov5 官方文档](https://github.com/ultralytics/yolov5)

- **[网页]** [Roboflow](https://universe.roboflow.com/)

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
