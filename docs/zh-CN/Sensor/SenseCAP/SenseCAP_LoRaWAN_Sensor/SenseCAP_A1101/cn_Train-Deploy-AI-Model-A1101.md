---
description: 训练并部署您自己的AI模型到SenseCAP A1101
title: 训练并部署您自己的AI模型到SenseCAP A1101
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Train-Deploy-AI-Model-A1101
last_update:
  date: 5/10/2023
  author: Yvonne
---

# 训练并部署您自己的AI模型到SenseCAP A1101

## 概述

在本教程中，我们将教您如何为特定应用训练自己的AI模型，然后轻松地将其部署到SenseCAP A1101 - LoRaWAN视觉AI传感器上。让我们开始吧！

:::caution **注意：**
我们当前的设备固件与[EI](https://wiki.seeedstudio.com/cn/One-Stop-Model-Training-with-Edge-Impulse/)兼容。如果您在**2023年3月30日**之后购买了设备，您需要将设备刷回[默认固件](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101/#change-device-firmware-after-image-collection)来遵循本教程。
:::

## 硬件介绍

我们将在本教程中主要使用SenseCAP A1101 - LoRaWAN视觉AI传感器。首先，让我们熟悉一下这个硬件。

[SenseCAP A1101 - LoRaWAN视觉AI传感器](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html)结合了TinyML AI技术和LoRaWAN长距离传输，为户外使用提供了低功耗、高性能的AI设备解决方案。该传感器采用海思的高性能、低功耗AI视觉解决方案，支持Google TensorFlow Lite框架和多个TinyML AI平台。不同的模型可以实现不同的AI功能，例如害虫检测、人员计数、物体识别。用户可以采用Seeed提供的模型，通过AI训练工具生成自己的模型，或从Seeed的合作伙伴模型提供商处获取可部署的商业模型。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/60.jpg"/></div>

## 软件介绍

我们将在本教程中使用以下软件技术

- Roboflow - 用于标注
- YOLOv5 - 用于训练
- TensorFlow Lite - 用于推理

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png"/></div>

### 什么是Roboflow？

[Roboflow](https://roboflow.com)是一个基于在线的标注工具。该工具允许您轻松标注所有图像，对这些图像添加进一步处理，并将标记的数据集导出为不同格式，如YOLOV5 PyTorch、Pascal VOC等！Roboflow还为用户提供了现成的公共数据集。

### 什么是YOLOv5？

YOLO是"You Only Look Once"的缩写。它是一种实时检测和识别图像中各种物体的算法。Ultralytics [YOLOv5](https://ultralytics.com/yolov5)是基于PyTorch框架的YOLO版本。

### 什么是TensorFlow Lite？

[TensorFlow Lite](https://www.tensorflow.org/lite)是一个开源的、产品就绪的、跨平台的深度学习框架，它将TensorFlow中的预训练模型转换为可以针对速度或存储进行优化的特殊格式。这种特殊格式的模型可以部署在边缘设备上，如使用Android或iOS的移动设备，或基于Linux的嵌入式设备如Raspberry Pi或微控制器，以在边缘进行推理。

## Wiki 结构

本 wiki 将分为三个主要部分

1. [使用公共数据集训练您自己的 AI 模型](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101#1-train-your-own-ai-model-with-a-public-dataset)
2. [使用您自己的数据集训练您自己的 AI 模型](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101#2-train-your-own-ai-model-with-your-own-dataset)
3. [将训练好的 AI 模型部署到 SenseCAP A1101](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference)

第一部分将是以最少步骤构建您自己的 AI 模型的最快方法。第二部分需要花费一些时间和精力来构建您自己的 AI 模型，但绝对值得学习。第三部分关于部署 AI 模型可以在第一或第二部分之后进行。

因此有两种方式来遵循本 wiki：

1. 遵循[第一部分](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101#1-train-your-own-ai-model-with-a-public-dataset)然后[第三部分](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference) - 快速遵循

2. 遵循[第二部分](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101#2-train-your-own-ai-model-with-your-own-dataset)然后[第三部分](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101#3-deploy-the-trained-model-and-perform-inference) - 缓慢遵循

但是，我们鼓励首先遵循第一种方式，然后再转向第二种方式。

## 1. 使用公共数据集训练您自己的 AI 模型

目标检测项目的第一步是获取用于训练的数据。您可以下载公开可用的数据集或创建您自己的数据集！

但是开始目标检测的最快最简单的方法是什么呢？嗯...使用公共数据集可以为您节省大量时间，否则您需要自己收集数据并对其进行标注。这些公共数据集已经开箱即用地进行了标注，为您提供更多时间专注于您的 AI 视觉应用。

### 硬件准备

- SenseCAP A1101 - LoRaWAN Vision AI Sensor
- USB Type-C 数据线
- 具有互联网访问的 Windows/ Linux/ Mac

### 软件准备

- 无需准备额外软件

### 使用公开可用的标注数据集

您可以下载许多公开可用的数据集，如 [COCO 数据集](https://cocodataset.org)、[Pascal VOC 数据集](http://host.robots.ox.ac.uk/pascal/VOC)等等。[Roboflow Universe](https://universe.roboflow.com) 是一个推荐的平台，它提供广泛的数据集，拥有[90,000+ 个数据集和 66+ 百万张图像](https://blog.roboflow.com/computer-vision-datasets-and-apis)可用于构建计算机视觉模型。此外，您可以简单地在 Google 上搜索**开源数据集**并从各种可用的数据集中选择。

- **步骤 1.** 访问[此 URL](https://universe.roboflow.com/lakshantha-dissanayake/apple-detection-5z37o/dataset/1) 以访问 Roboflow Universe 上公开可用的苹果检测数据集

- **步骤 2.** 点击**Create Account**创建 Roboflow 账户

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/53.png"/></div>

- **步骤 3.** 点击**Download**，选择**YOLO v5 PyTorch**作为**Format**，点击**show download code**并点击**Continue**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/51.png"/></div>

这将生成一个代码片段，我们稍后将在 Google Colab 训练中使用。所以请保持此窗口在后台打开。

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/52.png"/></div>

### 在 Google Colab 上使用 YOLOv5 进行训练

在我们选择了公共数据集之后，我们需要训练数据集。这里我们使用 Google Colaboratory 环境在云端执行训练。此外，我们在 Colab 中使用 Roboflow api 来轻松下载我们的数据集。

点击[这里](https://colab.research.google.com/github/Seeed-Studio/yolov5-swift/blob/master/tutorial.ipynb)打开一个已经准备好的 Google Colab 工作空间，按照工作空间中提到的步骤进行操作，并逐个运行代码单元。

**注意：** 在 Google Colab 上，在**步骤 4**下的代码单元中，您可以直接复制上面提到的来自 Roboflow 的代码片段

它将演示以下内容：

- 设置训练环境
- 下载数据集
- 执行训练
- 下载训练好的模型

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/18.png"/></div>

对于包含 699 张图像的苹果检测数据集，在运行 NVIDIA Tesla T4 GPU 和 16GB GPU 内存的 Google Colab 上完成训练过程大约需要 7 分钟。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/43.png"/></div>

如果您遵循了上述 Colab 项目，您知道可以一次将 4 个模型加载到设备上。但是，请注意一次只能加载一个模型。这可以由用户指定，稍后将在本 wiki 中解释。

### 部署和推理

如果您想直接跳转到**第三部分**，该部分解释如何将训练好的 AI 模型部署到 SenseCAP A1101 并执行推理，[点击这里](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101/#3-deploy-the-trained-model-and-perform-inference)。

## 2. 使用自己的数据集训练自己的AI模型

如果您想构建特定的目标检测项目，而公共数据集中没有您想要检测的对象，您可能需要构建自己的数据集。当您为自己的数据集记录数据时，您必须确保覆盖对象的所有角度（360度），将对象放置在不同的环境中，不同的光照和不同的天气条件下。记录自己的数据集后，您还必须对数据集中的图像进行标注。本节将涵盖所有这些步骤。

尽管有不同的数据收集方法，如使用手机摄像头，但收集数据的最佳方式是使用SenseCAP A1101上的内置摄像头。这是因为当我们在SenseCAP A1101上执行推理时，颜色、图像质量和其他细节将相似，这使得整体检测更加准确。

### 硬件准备

- SenseCAP A1101 - LoRaWAN视觉AI传感器
- USB Type-C数据线
- 具有互联网访问的Windows/Linux/Mac

### 软件准备

现在让我们设置软件。Windows、Linux和Intel Mac的软件设置将相同，而M1/M2 Mac的设置将有所不同。

#### Windows、Linux、Intel Mac

- **步骤1.** 确保计算机上已安装Python。如果没有，请访问[此页面](https://www.python.org/downloads/)下载并安装最新版本的Python

- **步骤2.** 安装以下依赖项

```sh
pip3 install libusb1
```

#### M1/ M2 Mac

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
在执行以下操作更改固件之前，您需要确保您的 BootLoader 版本大于 2.0.0。如果您不确定，请按照[此部分](#check-bootloader-version)中提到的步骤检查 BootLoader 版本，如果版本小于 2.0.0，请按照[此部分](#update-bootloader)中提到的步骤更新 BootLoader
:::

### 收集数据集

- **步骤 1.** 使用 USB Type-C 线缆将 SenseCAP A1101 连接到 PC

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **步骤 2.** 双击启动按钮进入**启动模式**

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

之后您将在文件资源管理器中看到一个名为 **SENSECAP** 的新存储驱动器

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **步骤 3.** 将[此 .uf2 文件](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2)拖放到 **SENSECAP** 驱动器

一旦 uf2 文件完成复制到驱动器中，驱动器将消失。这意味着 uf2 已成功上传到模块。

- **步骤 4.** 复制并粘贴[此 Python 脚本](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py)到您 PC 上新创建的名为 **capture_images_script.py** 的文件中

- **步骤 5.** 执行 Python 脚本开始捕获图像

```sh
python3 capture_images_script.py
```

默认情况下，它会每 300ms 捕获一张图像。如果你想改变这一点，可以按以下格式运行脚本

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

例如，每秒捕获一张图像

```sh
python3 capture_images_script.py --interval 1000
```

执行上述脚本后，SenseCAP A1101 将开始从内置摄像头连续捕获图像，并将所有图像保存在名为 **save_img** 的文件夹中

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/41.png"/></div>

同时，在录制过程中会打开一个预览窗口

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/40.jpg"/></div>

当您捕获了足够的图像后，点击终端窗口并按下以下组合键来停止捕获过程

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### 图像收集后更改设备固件

完成数据集图像录制后，您需要确保将 SenseCAP A1101 内的固件更改回原始版本，这样您就可以再次加载目标检测模型进行检测。现在让我们来了解具体步骤。

- **步骤 1.** 如前所述，让 SenseCAP A1101 进入 **Boot 模式**

- **步骤 2.** 根据您的设备，将[此 .uf2 文件](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2)拖放到 **SENSECAP** 驱动器中

一旦 uf2 文件完成复制到驱动器中，驱动器就会消失。这意味着 uf2 已成功上传到模块。

### 使用 Roboflow 标注数据集

如果您使用自己的数据集，您需要标注数据集中的所有图像。标注意味着简单地在我们想要检测的每个对象周围绘制矩形框并为它们分配标签。我们将解释如何使用 Roboflow 来完成此操作。

[Roboflow](https://roboflow.com) 是一个基于在线的标注工具。在这里我们可以直接将录制的视频素材导入到 Roboflow 中，它将被导出为一系列图像。这个工具非常方便，因为它可以帮助我们将数据集分配到"训练、验证和测试"中。此外，这个工具还允许我们在标记图像后对这些图像进行进一步处理。而且，它可以轻松地将标记的数据集导出为 **YOLOV5 PyTorch 格式**，这正是我们所需要的！

在本教程中，我们将使用包含苹果图像的数据集，这样我们稍后就可以检测苹果并进行计数。

- **步骤 1.** 点击[这里](https://app.roboflow.com/login)注册 Roboflow 账户

- **步骤 2.** 点击 **Create New Project** 开始我们的项目

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **步骤 3.** 填写 **Project Name**，保持 **License (CC BY 4.0)** 和 **Project type (Object Detection (Bounding Box))** 为默认设置。在 **What will your model predict?** 列下，填写标注组名称。例如，在我们的案例中选择 **apples**。这个名称应该突出显示数据集的所有类别。最后，点击 **Create Public Project**。

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/6.jpg"/></div>

- **步骤 4.** 拖放您使用 SenseCAP A1101 捕获的图像

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/7.png"/></div>

- **步骤 5.** 图像处理完成后，点击 **Finish Uploading**。耐心等待直到图像上传完成。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **步骤 6.** 图像上传完成后，点击 **Assign Images**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **步骤 7.** 选择一张图像，在苹果周围绘制矩形框，选择标签为 **apple** 并按 **ENTER**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/9.png"/></div>

- **步骤 8.** 对其余苹果重复相同操作

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/10.png"/></div>

**注意：** 尽量标记您在图像中看到的所有苹果。如果只有苹果的一部分可见，也要尝试标记它。

- **步骤 9.** 继续标注数据集中的所有图像

Roboflow 有一个名为 **Label Assist** 的功能，它可以预先预测标签，这样您的标记工作会快得多。但是，它不适用于所有对象类型，而是选定类型的对象。要启用此功能，您只需按下 **Label Assist** 按钮，**选择一个模型**，**选择类别**，然后浏览图像以查看带有边界框的预测标签

<div align="center"><img width="{200}" src="https://files.seeedstudio.com/wiki/YOLOV5/41.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/39.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/40.png"/></div>

如上所示，它只能帮助预测上述 80 个类别的标注。如果您的图像不包含上述对象类别，则无法使用标签辅助功能。

- **步骤 10.** 标记完成后，点击 **Add images to Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **步骤 11.** 接下来我们将在"Train, Valid and Test"之间分割图像。保持分布的默认百分比并点击 **Add Images**

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/YOLOV5/26.png"/></div>

- **步骤 12.** 点击 **Generate New Version**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **步骤 13.** 现在您可以根据需要添加 **Preprocessing** 和 **Augmentation**。在这里我们将 **Resize** 选项 **更改** 为 **192x192**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/11.png"/></div>

<div align="center"><img width="{450}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/13.png"/></div>

这里我们将图像尺寸更改为 192x192，因为我们将使用该尺寸进行训练，这样训练会更快。否则，在训练过程中必须将所有图像转换为 192x192，这会消耗更多的 CPU 资源并使训练过程变慢。

- **步骤 14.** 接下来，继续使用其余默认设置并点击 **Generate**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/14.png"/></div>

- **步骤 15.** 点击 **Export**，选择 **Format** 为 **YOLO v5 PyTorch**，选择 **show download code** 并点击 **Continue**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/54.png"/></div>

这将生成一个代码片段，我们稍后将在 Google Colab 训练中使用。所以请保持此窗口在后台打开。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### 在 Google Colab 上使用 YOLOv5 进行训练

完成数据集标注后，我们需要训练数据集。跳转到[这一部分](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-A1101/#train-using-yolov5-on-google-colab)，其中解释了如何使用在 Google Colab 上运行的 YOLOv5 训练 AI 模型。

## 3. 部署训练好的模型并执行推理

现在我们将把在训练结束时获得的 **model-1.uf2** 移动到 SenseCAP A1101 中。

- **步骤 1.** 安装最新版本的 [Google Chrome](https://www.google.com/chrome) 或 [Microsoft Edge 浏览器](https://www.microsoft.com/en-us/edge?r=1) 并打开它

- **步骤 2.** 通过 USB Type-C 线缆将 SenseCAP A1101 连接到您的 PC

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **步骤 3.** 双击 SenseCAP A1101 上的启动按钮以进入大容量存储模式

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

之后，您将在文件资源管理器中看到一个新的存储驱动器显示为 **SENSECAP**

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **步骤 4.** 将 **model-1.uf2** 文件拖放到 **SENSECAP** 驱动器

一旦 uf2 完成复制到驱动器，驱动器将消失。这意味着 uf2 已成功上传到模块。

**注意：** 如果您有 4 个模型文件准备就绪，您可以逐个拖放每个模型。先放第一个模型，等待它完成复制，再次进入启动模式，放第二个模型，依此类推。如果您只将一个模型（索引为 1）加载到 SenseCAP A1101 中，它将加载该模型。

- **步骤 5.** 打开 **SenseCAP Mate App**。如果您没有，请根据您的操作系统在手机上下载并安装

  - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
  - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

- **步骤 6.** 打开应用，在 **Config** 屏幕下，选择 **Vision AI Sensor**

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/21.jpg"/></div>

- **步骤 7.** 按住 SenseCap A1101 上的配置按钮 3 秒钟以进入蓝牙配对模式

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/37.png"/></div>

- **步骤 8.** 点击 **Setup**，它将开始扫描附近的 SenseCAP A1101 设备

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/23.jpg"/></div>

- **步骤 9.** 点击找到的设备

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/24.jpg"/></div>

- **步骤 10.** 转到 **Settings** 并确保选择了 **Object Detection**。如果没有，请选择它并点击 **Send**

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/25.jpg"/></div>

- **步骤 11.** 转到 **General** 并点击 **Detect**

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/26.jpg"/></div>

- **步骤 12.** [点击这里](https://files.seeedstudio.com/grove_ai_vision/index.html) 打开摄像头流的预览窗口

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **步骤 13.** 点击 **Connect** 按钮。然后您将在浏览器上看到一个弹出窗口。选择 **SenseCAP Vision AI - Paired** 并点击 **Connect**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **步骤 14.** 使用预览窗口查看实时推理结果！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.jpg"/></div>

如上所示，苹果正在被检测到，周围有边界框。这里"0"对应于同一类别的每次检测。如果您有多个类别，它们将被命名为 0,1,2,3,4 等等。此外，每个检测到的苹果的置信度分数（上述演示中的 0.8 和 0.84）也在显示！

## 额外内容

如果您感觉更有冒险精神，可以继续遵循 wiki 的其余部分！

### 我可以在我的 PC 上训练 AI 模型吗？

您也可以使用自己的 PC 来训练目标检测模型。但是，训练性能将取决于您拥有的硬件。您还需要有一台运行 Linux 操作系统的 PC 进行训练。我们在此 wiki 中使用了 Ubuntu 20.04 PC。

- **步骤 1.** 克隆 **yolov5-swift 仓库** 并在 **Python>=3.7.0** 环境中安装 **requirements.txt**

```sh
git clone https://github.com/Seeed-Studio/yolov5-swift
cd yolov5-swift
pip install -r requirements.txt
```

- **步骤 2.** 如果您之前按照本 wiki 中的步骤操作过，您可能还记得我们在 Robolflow 中标注后导出了数据集。同样在 Roboflow Universe 中，我们下载了数据集。在这两种方法中，都有一个如下所示的窗口，询问要以什么格式下载数据集。所以现在，请选择 **download zip to computer**，在 **Format** 下选择 **YOLO v5 PyTorch** 并点击 **Continue**

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/16.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/17.png"/></div>

之后，一个 **.zip 文件** 将下载到您的计算机

- **步骤 3.** 将我们下载的 .zip 文件复制并粘贴到 **yolov5-swift** 目录中并解压

```sh
# example
cp ~/Downloads/Apples.v1i.yolov5pytorch.zip ~/yolov5-swift
unzip Apples.v1i.yolov5pytorch.zip
```

- **步骤 4.** 打开 **data.yaml** 文件并按如下方式编辑 **train** 和 **val** 目录

```sh
train: train/images
val: valid/images
```

- **步骤 5.** 下载适合我们训练的预训练模型

```sh
sudo apt install wget
wget https://github.com/Seeed-Studio/yolov5-swift/releases/download/v0.1.0-alpha/yolov5n6-xiao.pt
```

- **步骤 6.** 执行以下命令开始训练

在这里，我们可以传递多个参数：

- **img:** 定义输入图像大小
- **batch:** 确定批次大小
- **epochs:** 定义训练轮数
- **data:** 设置我们的 yaml 文件路径
- **cfg:** 指定我们的模型配置
- **weights:** 指定权重的自定义路径
- **name:** 结果名称
- **nosave:** 仅保存最终检查点
- **cache:** 缓存图像以加快训练速度

```sh
python3 train.py --img 192 --batch 64 --epochs 100 --data data.yaml --cfg yolov5n6-xiao.yaml --weights yolov5n6-xiao.pt --name yolov5n6_results --cache
```

对于一个包含987张图像的苹果检测数据集，在配备NVIDIA GeForce GTX 1660 Super GPU（6GB GPU内存）的本地PC上完成训练过程大约需要30分钟。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/44.png"/></div>

如果您按照上述Colab项目进行操作，您会知道可以一次性将4个模型加载到设备上。但是，请注意一次只能加载一个模型。这可以由用户指定，稍后将在本wiki中进行说明。

- **步骤7.** 如果您导航到`runs/train/exp/weights`，您将看到一个名为**best.pt**的文件。这是训练生成的模型。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg"/></div>

- **步骤8.** 将训练好的模型导出为TensorFlow Lite

```sh
python3 export.py --data {dataset.location}/data.yaml --weights runs/train/yolov5n6_results/weights/best.pt --imgsz 192 --int8 --include tflite
```

- **步骤 9.** 将 TensorFlow Lite 转换为 UF2 文件

UF2 是由微软开发的一种文件格式。Seeed 使用这种格式将 .tflite 转换为 .uf2，允许 tflite 文件存储在 Seeed 推出的 AIoT 设备上。目前 Seeed 的设备最多支持 4 个模型，每个模型（.tflite）小于 1M。

您可以使用 -t 指定要放置在相应索引位置的模型。

例如：

- `-t 1`：索引 1
- `-t 2`：索引 2

```sh
# Place the model to index 1
python3 uf2conv.py -f GROVEAI -t 1 -c runs//train/yolov5n6_results//weights/best-int8.tflite -o model-1.uf2
```

尽管您可以一次将4个模型加载到设备中，但请注意一次只能加载一个模型。这可以由用户指定，稍后将在本wiki中进行说明。

- **步骤 10.** 现在将生成一个名为 **model-1.uf2** 的文件。这就是我们将加载到 SenseCAP A1101 模块中进行推理的文件！

## 检查 BootLoader 版本

- 双击 BOOT 按钮并等待可移动驱动器挂载
- 在可移动驱动器中打开 INFO_UF2.TXT

<div align="center"><img width="{600}" src="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/raw/master/assert/q2.png"/></div>

## 更新 BootLoader

如果您的 SenseCAP A1101 无法被计算机识别并且表现为没有端口号，那么您可能需要更新 BootLoader。

- **步骤 1**. 在 Windows PC 上下载 BootLoader `.bin` 文件。

请通过下面的链接下载最新版本的 BootLoader 文件。BootLoader 的名称通常是 `tinyuf2-sensecap_vision_ai_vx.x.x.bin`。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Firware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

这是控制 BL702 芯片的固件，该芯片在计算机和 Himax 芯片之间建立连接。最新版本的 BootLoader 现在已经修复了 Vision AI 无法被 Mac 和 Linux 识别的问题。

- **步骤 2**. 下载并打开 [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar) 软件，选择 **BL702/704/706**，然后点击 **Finish**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **步骤 3**. 点击 **View**，首先选择 **MCU**。移动到 **Image file**，点击 **Browse** 并选择您刚刚下载的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **步骤 4**. 确保没有其他设备连接到 PC。然后按住模块上的 Boot 按钮，将其连接到 PC。

- **步骤 5**. 回到 PC 上的 BLDevCube 软件，点击 **Refresh** 并选择合适的端口。然后点击 **Open UART** 并将 **Chip Erase** 设置为 **True**，然后点击 **Create&Program**，等待过程完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>

## 资源

- **[网页]** [YOLOv5 文档](https://docs.ultralytics.com)

- **[网页]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[网页]** [Roboflow 文档](https://docs.roboflow.com)

- **[网页]** [TensorFlow Lite 文档](https://www.tensorflow.org/lite/guide)

- **[PDF]** [SenseCAP A1101 LoRaWAN 视觉 AI 传感器规格书](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN 视觉 AI 传感器用户指南](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [SenseCAP S210X LoRaWAN 传感器目录](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN 视觉 AI 传感器常见问题](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

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
