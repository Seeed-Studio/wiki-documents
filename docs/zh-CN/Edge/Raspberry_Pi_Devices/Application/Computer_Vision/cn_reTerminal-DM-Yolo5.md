---
description: 使用 Yolov5 训练您自己的数据集并部署到 reTerminal DM
title: 使用 Yolov5 训练您自己的数据集并部署到 reTerminal DM
keywords:
  - 边缘计算
  - reTerminal DM 应用
  - 嵌入式机器学习
  - yolov5
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM-Yolo5
last_update:
  date: 2023/9/7
  author: Kasun Thushara
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/yolov5.gif" /></center>


## 简介

目标检测是计算机视觉的一个基本方面，涉及识别图像中的对象，并在监控、医疗保健和自动驾驶汽车等众多领域中得到了应用。单阶段目标检测器是一类特定的模型，通过直接预测对象类别和边界框坐标，而无需初始区域提议阶段，从而简化了这一任务。这种简化的方法在实时应用中尤为重要。值得注意的是，YOLO（You Only Look Once）模型家族体现了这种效率，提供了快速的目标检测，同时兼顾了准确性。

## 入门
在开始此项目之前，您可能需要按照以下说明提前准备好硬件和软件。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 软件准备

我们建议从官方网站安装最新版本的 Raspberry Pi 64 位操作系统。如果您更喜欢安装新的 Raspbian 操作系统，请按照此[指南](https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/)中的步骤操作。

### Roboflow

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow.png" alt="pir" width="200" height="auto"/></p>

[Roboflow](https://universe.roboflow.com/) 是一个全面的计算机视觉平台，提供了广泛的工具和服务，以简化开发和部署计算机视觉模型的过程。其突出特点之一是对带注释的自定义数据集的强大支持。用户可以轻松上传自己的数据集（包括注释），以训练和微调计算机视觉模型。因此，请创建一个账户以使用该平台。

### Ultralytics
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ultralytic.png" alt="pir" width="200" height="auto"/></p>

[Ultralytics](https://ultralytics.com/) 是一个尖端平台和研究组织，专注于计算机视觉和深度学习。他们因在该领域的贡献而闻名，特别是在开发 YOLO（You Only Look Once）目标检测模型家族（如 YOLOv5）方面。Ultralytics 提供了一系列用于目标检测、图像分类等的先进工具和开源软件，使研究人员和开发人员能够轻松使用先进的计算机视觉技术。他们对创新和性能驱动解决方案的专注在计算机视觉社区中赢得了广泛关注和赞誉，使 Ultralytics 成为那些希望在深度学习和视觉识别领域突破可能性边界的人的首选资源。

## 从 Roboflow 选择一个数据集

- **步骤 1** 请访问提供的网站，并使用搜索功能导航到您选择的数据集。[Roboflow](https://universe.roboflow.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow1.PNG" alt="pir" width="800" height="auto"/></p>

- **步骤 2** 选择一个数据集后，点击 **Download this Dataset**（下载此数据集）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow2.PNG" alt="pir" width="800" height="auto"/></p>

- **步骤 3** 选择 YOLOv5 下载格式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow3.PNG" alt="pir" width="400" height="auto"/></p>

- **步骤 4** 选择 **show download code**（显示下载代码）并点击继续。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow4.PNG" alt="pir" width="400" height="auto"/></p>

- **步骤 5** 在 "Jupyter" 部分，您会看到一段代码片段。请将此代码片段复制到剪贴板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow5.PNG" alt="pir" width="400" height="auto"/></p>

## 训练您的自定义数据集

- **步骤 1** 请访问提供的 GitHub 链接并点击 **Open in Colab** [GitHub 链接](https://github.com/KasunThushara/yoloV5n_RPI/tree/main)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/github.PNG" alt="pir" width="800" height="auto"/></p>

<a target="_blank" href="https://colab.research.google.com/github/KasunThushara/yoloV5n_RPI/blob/main/yolov5_reTerminal.ipynb">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

:::note

在将模型部署到像树莓派这样资源受限的设备之前，通常需要进行模型转换和量化以确保最佳性能。此过程包括将 PyTorch 模型（.pt 格式）转换为 TensorFlow Lite (TFLite) 模型，并进行量化，特别是转换为 uint8 数据类型。您可以使用此 Colab 笔记本训练您的自定义数据集并将其转换为 TFLite 模型。我们在 Colab 环境中为训练过程提供了分步指南。请按照这些说明操作，获取 **data.yaml** 文件和 **best-int8.tflite** 文件，然后返回本 Wiki 以获取进一步指导。

:::

## 准备您的 reTerminal DM

- **步骤 1** 在终端中逐一执行以下命令。

```sh
sudo git clone https://github.com/ultralytics/yolov5
cd yolov5
pip install -r requirements.txt 
sudo apt-get install python3-tflite-runtime
```
- **步骤 2** 将 Data.yaml 文件和 best-int8.tflite 文件粘贴到 yolov5 文件夹中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminal.PNG" alt="pir" width="800" height="auto"/></p>

## 使用 detect.py 进行推理

- **步骤 1** 打开 reTerminal 并导航到 yolov5 文件夹。

```sh
cd yolov5
```
- **步骤 2** 使用 detect.py 进行推理。

```sh
python detect.py --weight best-int8.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```
:::note
您可以访问 Ultralytics 的官方 GitHub 网站 [https://github.com/ultralytics/yolov5](https://github.com/ultralytics/yolov5)，了解如何使用 `detect.py` 脚本，并探索将图像或视频流输入 YOLOv5 模型的各种方法。
:::

## 在 Edge TPU 上运行

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" /></center>

在 Edge TPU 上部署 YOLOv5n 模型代表了最先进的目标检测技术与高性能边缘计算之间的动态协作。这种结合使得边缘 AI 应用成为可能，例如在资源受限环境中的实时目标识别，对于安全监控、零售分析和自主系统等任务具有重要价值。YOLOv5n 的高效设计与 Edge TPU 的硬件加速完美结合，在网络边缘提供快速且准确的目标检测，满足低延迟和实时处理的需求。

- 使用 detect.py 进行推理

```sh
python detect.py --weight best-int8_edgetpu.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

## 资源

- **[网页]** [Yolov5 官方文档](https://github.com/ultralytics/yolov5)

- **[网页]** [Roboflow](https://universe.roboflow.com/)

# 技术支持

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>