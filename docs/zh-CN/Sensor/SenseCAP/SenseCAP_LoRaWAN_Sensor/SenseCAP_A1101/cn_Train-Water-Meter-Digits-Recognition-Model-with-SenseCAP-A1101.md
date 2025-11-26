---
description: 使用 SenseCAP A1101 训练水表数字识别模型
title: 使用 SenseCAP A1101 训练水表数字识别模型
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101
date: 11/26/2025
author: Twelve
---

# 使用 SenseCAP A1101 训练水表数字识别模型

## 概述

在本教程中，我们将教您如何为特定应用训练自己的仪表模型，然后轻松将其部署到 SenseCAP A1101。让我们开始吧！
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/0.jpg"/></div>

## 硬件准备

- [SenseCAP A1101 - LoRaWAN Vision AI Sensor](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html)
- USB Type-C 数据线
- 可联网的 Windows/ Linux/ Mac 电脑

## 软件准备

在本教程中，我们将使用以下软件技术

- [Roboflow](https://roboflow.com) - 用于标注
- [SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) - 用于训练
- [TensorFlow Lite](https://www.tensorflow.org/lite) - 用于推理

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/11.png"/></div>

现在让我们设置软件。Windows、Linux 和 Intel Mac 的软件设置相同，而 M1/M2 Mac 的设置会有所不同。

:::tip
**什么是 SenseCraft Model Assistant？**Seeed Studio SenseCraft Model Assistant 是一个专注于嵌入式 AI 的开源项目。我们针对实际场景优化了 OpenMMLab 的优秀算法，使实现更加用户友好，在嵌入式设备上实现更快、更准确的推理。
:::

### Windows、Linux、Intel Mac

- **步骤 1.** 确保计算机上已安装 Python。如果没有，请访问[此页面](https://www.python.org/downloads/)下载并安装最新版本的 Python

- **步骤 2.** 安装以下依赖项

```sh
pip3 install libusb1
```

### M1/ M2 Mac

- **步骤 1.** 安装 Homebrew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **步骤 2.** 安装 conda

```sh
brew install conda
```

- **步骤 3.** 下载 libusb

```sh
wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2
```

- **步骤 4.** 安装 libusb

```sh
conda install libusb-1.0.26-h1c322ee_100.tar.bz2
```

:::caution
在执行以下操作更改固件之前，您需要确保 BootLoader 版本大于 2.0.0。如果不确定，请按照[此部分](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101/#check-bootloader-version)中提到的步骤检查 BootLoader 版本，如果版本小于 2.0.0，请按照[此部分](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101/#update-bootloader)中提到的步骤更新 BootLoader
:::

## 1. 收集图像数据

- **步骤 1.** 使用 USB Type-C 数据线将 SenseCAP A1101 连接到 PC

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **步骤 2.** 双击启动按钮进入**启动模式**

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

之后，您将在文件资源管理器中看到一个名为 **SENSECAP** 的新存储驱动器

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **步骤 3.** 将[此 .uf2 文件](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2)拖放到 **SENSECAP** 驱动器

uf2 文件复制到驱动器后，驱动器将立即消失。这意味着 uf2 已成功上传到模块。

- **步骤 4.** 复制并粘贴[此 Python 脚本](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py)到您 PC 上新创建的名为 **capture_images_script.py** 的文件中

- **步骤 5.** 执行 Python 脚本开始捕获图像

```sh
python3 capture_images_script.py
```

默认情况下，它将每 300ms 捕获一张图像。如果您想更改此设置，可以按以下格式运行脚本

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

例如，每秒捕获一张图像

```sh
python3 capture_images_script.py --interval 1000
```

执行上述脚本后，SenseCAP A1101 将开始从内置摄像头连续捕获图像，并将所有图像保存在名为 **save_img** 的文件夹中

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/1.png"/></div>

同时，在录制过程中会打开一个预览窗口。

捕获足够的图像后，点击终端窗口并按以下组合键停止捕获过程

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### 图像收集后更改设备固件

完成数据集图像录制后，您需要确保将 SenseCAP A1101 内的固件更改回原始版本，以便再次加载目标检测模型进行检测。现在让我们来看看步骤。

- **步骤 1.** 如前所述，在 SenseCAP A1101 上进入**启动模式**

- **步骤 2.** 根据您的设备将[此 .uf2 文件](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2)拖放到 **SENSECAP** 驱动器

uf2 文件复制到驱动器后，驱动器将立即消失。这意味着 uf2 已成功上传到模块。

## 2. 使用 RoboFlow 生成数据集

[Roboflow](https://roboflow.com) 是一个基于在线的标注工具。在这里，我们可以直接将录制的视频素材导入 Roboflow，它将导出为一系列图像。这个工具非常方便，因为它可以帮助我们将数据集分配到"训练、验证和测试"中。此外，该工具还允许我们在标记图像后对这些图像进行进一步处理。此外，它可以轻松将标记的数据集导出为 **COCO 格式**，这正是我们所需要的！

- **步骤 1.** 点击[这里](https://app.roboflow.com/login)注册 Roboflow 账户

- **步骤 2.** 点击 **Create New Project** 开始我们的项目

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **步骤 3.** 填写 **Project Name**，保持 **License (CC BY 4.0)** 和 **Project type (Object Detection (Bounding Box))** 为默认设置。在 **What will your model predict?** 列下，填写标注组名称。

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/2.png"/></div>

- **步骤 4.** 拖放您使用 SenseCAP A1101 捕获的图像

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/3.png"/></div>

- **步骤 5.** 图像处理完成后，点击 **Finish Uploading**。耐心等待图像上传完成。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **步骤 6.** 图像上传完成后，点击 **Assign Images**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **步骤 7.** 选择一张图像，在数字周围绘制矩形框，选择标签为 **digits** 并按 **ENTER**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4.png"/></div>

- **步骤 8.** 对其余图像重复相同操作

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/5.png"/></div>

- **步骤 9.** 继续标注数据集中的所有图像

- **步骤 10.** 标记完成后，点击 **Add images to Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **步骤 11.** 接下来我们将在"Train、Valid 和 Test"之间分割图像。如果数据集较多，可以是 80/20。如果数据集较少，可以是 85/15。请注意"Train"不应少于 80。

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/12.png"/></div>

- **步骤 12.** 点击 **Generate New Version**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **步骤 13.** 现在您可以根据需要添加 **Preprocessing** 和 **Augmentation**。在这里我们将**更改** **Resize** 选项为 **192x192**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/6.png"/></div>

在这里我们将图像大小更改为 192x192，因为我们将使用该尺寸进行训练，训练会更快。否则，在训练过程中必须将所有图像转换为 192x192，这会消耗更多 CPU 资源并使训练过程变慢。

- **步骤 14.** 接下来，继续使用其余默认设置并点击 **Generate**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/7.png"/></div>

- **步骤 15.** 点击 **Export**，选择 **Format** 为 **COCO**，选择 **show download code** 并点击 **Continue**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/8.png"/></div>

这将生成一个代码片段，我们稍后将在 Google Colab 训练中使用。所以请保持此窗口在后台打开。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### 在 Google Colab 上使用 SenseCraft Model Assistant 进行训练

选择公共数据集后，我们需要训练数据集。在这里我们使用 Google Colaboratory 环境在云端执行训练。此外，我们在 Colab 中使用 Roboflow API 轻松下载我们的数据集。

点击[这里](https://github.com/Seeed-Studio/yolov5-swift/blob/master/notebooks/Google_Colab_Digital_Meter_Example.ipynb)打开一个已准备好的 Google Colab 工作空间，按照工作空间中提到的步骤逐一运行代码单元。

**注意：** 在 Google Colab 中，在 **Step 4** 下的代码单元中，您可以直接复制上述 Roboflow 中提到的代码片段

它将演示以下内容：

- 设置训练环境
- 下载数据集
- 执行训练
- 下载训练好的模型

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/9.png"/></div>

## 3. 部署训练好的模型并执行推理

现在我们将把在训练结束时获得的 **model-1.uf2** 移动到 SenseCAP A1101 中。

- **步骤 1.** 安装最新版本的 [Google Chrome](https://www.google.com/chrome) 或 [Microsoft Edge browser](https://www.microsoft.com/en-us/edge?r=1) 并打开它

- **步骤 2.** 通过 USB Type-C 线缆将 SenseCAP A1101 连接到您的 PC

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **步骤 3.** 双击 SenseCAP A1101 上的启动按钮以进入大容量存储模式

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

之后，您将在文件资源管理器中看到一个新的存储驱动器显示为 **SENSECAP**  

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **步骤 4.** 将 **model-1.uf2** 文件拖放到 **SENSECAP** 驱动器

一旦 uf2 文件完成复制到驱动器，驱动器将消失。这意味着 uf2 已成功上传到模块。

**注意：** 如果您有 4 个模型文件准备就绪，您可以逐个拖放每个模型。先放第一个模型，等待它完成复制，再次进入启动模式，放第二个模型，以此类推。如果您只将一个模型（索引为 1）加载到 SenseCAP A1101 中，它将加载该模型。

- **步骤 5.** [点击这里](https://vision-ai-demo.seeed.cn/)打开相机流的预览窗口

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **步骤 6.** 点击 **Connect** 按钮。然后您将在浏览器中看到一个弹出窗口。选择 **SenseCAP Vision AI - Paired** 并点击 **Connect**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **步骤 7.** 使用预览窗口查看实时推理结果！

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/10.png"/></div>

如上所示，数字正在被检测到，并且周围有边界框。

## 4. 在 SenseCAP Mate 上使用 SenseCAP A1101 执行推理

除了在浏览器上执行推理外，我们还可以使用 SenseCAP Mate 来实现模型推理，我们将逐步实现它。

- **步骤 1.**  首先，我们需要擦除 A1101 的固件，这可以通过使用 erase_model.uf2 来实现。然后将 A1101 固件升级到最新版本，并将水表数字识别模型放入 A1101

  *固件*: [erase_model.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/erase_model.uf2)、[SenseCAP-A1101_v02-00.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/sensecap_ai_v02-00.uf2)

  *模型*: [water_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_water_pre_6.uf2)、[pfld_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/pfld_meter_pre_5.uf2)、[digital_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_seg7_pre_6.uf2)

  ***注意:*** water_meter 和 digital_meter 在桌面上都识别模型名称为 user-define6，在 APP 端显示 digital_meter。pfld_meter 识别的模型名称为 user-define5，在 APP 端显示 Point_meter。用户在部署过程中需要根据实际使用需求上传模型

- **步骤 2.**  [点击这里](https://vision-ai-demo.seeed.cn/)打开相机流的预览窗口

- **步骤 3.**  点击 **Connect** 按钮。然后您将在浏览器中看到一个弹出窗口。选择 **SenseCAP A1101** - Paired 并点击 Connect

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step3.jpg"/></div>

- **步骤 4（可选）.** 在 Model 中选择 Digital Meter，在 Algorithm 中选择 Digital Meter，点击 Save 然后点击 Invoke。现在我们可以使用预览窗口查看实时推理结果。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step4.jpg"/></div>

- **步骤 5.** 打开 SenseCAP Mate 并与您自己的 A1101 配对，选择与上述相同的 Model 和 Algorithm。然后点击 General 并点击底部的 Detect。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step_all.jpg"/></div>

- **步骤 6.** 如下所示，AI Preview 显示数字表识别结果。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step5.jpg"/></div>

完成上述步骤后，我们将尝试将我们自己的 A1101 添加到设备中。通过以下 4 个步骤，我们可以通过像 SenseCAP Mate 这样的云平台随时随地查看设备识别的结果数据。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4stepfinal.png"/></div>

## 资源

- **[网页]** [SenseCraft Model Assistant 文档](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace)

- **[网页]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[网页]** [Roboflow 文档](https://docs.roboflow.com)

- **[网页]** [TensorFlow Lite 文档](https://www.tensorflow.org/lite/guide)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI 传感器规格书](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI 传感器用户指南](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [SenseCAP S210X LoRaWAN 传感器目录](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI 传感器常见问题](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## 技术支持与产品讨论

 <br />

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
