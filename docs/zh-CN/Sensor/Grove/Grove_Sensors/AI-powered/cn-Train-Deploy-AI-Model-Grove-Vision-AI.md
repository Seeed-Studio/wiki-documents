---
description: Train and Deploy Your Own AI Model with Roboflow, YOLOv5, TensorFlow Lite
title: Train and Deploy Your Own AI Model with Roboflow, YOLOv5, TensorFlow Lite
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Train-Deploy-AI-Model-Grove-Vision-AI
last_update:
  date: 3/16/2023
  author: DuKaiyin
---
# 训练并部署您自己的 AI 模型至 Grove - Vision AI

## 可升级为工业传感器

借助 SenseCAP  [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), 您可以轻松将Grove转换为LoRaWAN®传感器。Seeed不仅帮助您进行原型设计，还提供了通过SenseCAP系列稳健的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine Learning~Voice Recognition&compatibility=SenseCAP)来扩展您的项目的可能性。

IP66外壳、蓝牙配置、全球LoRaWAN®网络兼容性、内置19Ah电池以及强大的APP支持使[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN Device&product_module=Device)成为工业应用的最佳选择。该系列包括用于土壤湿度、空气温度和湿度、光强度、CO2、EC以及8合1气象站的传感器。尝试最新的SenseCAP S210x，为您的下一个成功的工业项目增添动力。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录仪r</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光照</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温湿度和二氧化碳</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度和温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤温湿度和EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 八合一气象站</strong></a></td>
    </tr>
  </tbody></table>

## 概述

在本wiki中，我们将教您如何为特定应用程序训练自己的AI模型，然后轻松将其部署到Grove - Vision AI模块上。让我们开始吧！

## 硬件介绍

在本wiki中，我们主要使用Grove - Vision AI模块。因此，首先让我们熟悉一下硬件。

### Grove - Vision AI模块

[Grove Vision AI模块](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html)是一款拇指大小的AI摄像头，定制传感器，已经安装了用于人员检测和其他定制模型的ML算法。它可以在几分钟内轻松部署和显示，采用超低功耗模式工作，并提供两种信号传输方式和多个板载模块，所有这些都使它非常适合开始使用AI摄像头。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div>

- ## 软件介绍

  在本wiki中，我们将使用以下软件技术：

  - Roboflow - 用于标注
  - YOLOv5 - 用于训练
  - TensorFlow Lite - 用于推理

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png" /></div>

### 什么是 Roboflow？

[Roboflow](https://roboflow.com/) 是一个基于网络的标注工具。该工具允许您轻松地对所有图像进行标注，对这些图像进行进一步的处理，并将标记的数据集导出为不同的格式，如 YOLOV5 PyTorch、Pascal VOC 等！Roboflow 还提供了可供用户使用的公共数据集。

### 什么是 YOLOv5？

YOLO 是 “You Only Look Once” 的缩写。它是一种算法，可以实时检测和识别图像中的各种对象。Ultralytics 的 [YOLOv5](https://ultralytics.com/yolov5) 是基于 PyTorch 框架的 YOLO 版本。

### 什么是 TensorFlow Lite？

[TensorFlow Lite](https://www.tensorflow.org/lite) 是一个开源、可用于产品的、跨平台的深度学习框架，它将 TensorFlow 中的预训练模型转换为可以针对速度或存储进行优化的特殊格式。特殊格式的模型可以部署在移动设备（如 Android 或 iOS）或基于 Linux 的嵌入式设备（如树莓派或微控制器）上，以在边缘进行推理。

## Wiki 结构

本 wiki 将分为三个主要部分：

1. [使用公共数据集训练自己的 AI 模型](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#jump1)
2. [使用自己的数据集训练自己的 AI 模型](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#jump2)
3. [将训练好的 AI 模型部署到 Grove - Vision AI 模块](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#jump3)

第一部分将是构建自己的 AI 模型的最快方式，步骤最少。第二部分需要一些时间和精力来构建自己的 AI 模型，但它绝对值得。关于部署 AI 模型的第三部分可以在第一部分或第二部分之后进行。

因此，有两种方法可以遵循本 wiki：

1. 首先遵循 [第一部分](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#jump1)，然后遵循 [第三部分](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#jump3) - 快速跟进
2. 首先遵循 [第二部分](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#jump2)，然后遵循 [第三部分](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#jump3) - 跟进较慢

但我们建议首先采用第一种方法，然后转到第二种方法。

## <span id="jump1">1. 1. 使用公共数据集训练自己的 AI 模型</span>

对象检测项目的第一步是获取用于训练的数据。您可以下载公开可用的数据集，也可以创建自己的数据集！

但是，什么是开始进行对象检测的最快、最简单的方法呢？嗯...使用公共数据集可以节省您大量的时间，否则您将花费在收集数据和标注数据上。这些公共数据集已经被标注，让您有更多的时间专注于您的 AI 视觉应用。

- ### 硬件准备

  - Grove - Vision AI 模块
  - USB Type-C 数据线
  - 有互联网访问权限的 Windows / Linux / Mac

- ### 软件准备

  - 无需准备额外的软件

- ### 使用公开可用的标注数据集

  您可以下载许多公开可用的数据集，例如 [COCO 数据集](https://cocodataset.org/)、[Pascal VOC 数据集](http://host.robots.ox.ac.uk/pascal/VOC) 等等。[Roboflow Universe](https://universe.roboflow.com/) 是一个推荐的平台，它提供了广泛的数据集，拥有 [90,000+ 数据集，6600 万张图像](https://blog.roboflow.com/computer-vision-datasets-and-apis)，可用于构建计算机视觉模型。此外，您还可以在 Google 上简单搜索 **开源数据集**，从众多可用的数据集中进行选择。

  - **步骤 1.** 访问 [此网址](https://universe.roboflow.com/lakshantha-dissanayake/apple-detection-5z37o/dataset/1) 查看 Roboflow Universe 上公开可用的一个苹果检测数据集
  - **步骤 2.** 单击 **创建账户** 创建 Roboflow 账户

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/53.png" /></div>

- **步骤 3.** 单击 **下载**，选择 **YOLO v5 PyTorch** 作为 **格式**，点击 **显示下载代码**，然后点击 **继续**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/51.png" /></div>

这将生成一个代码片段，我们稍后将在 Google Colab 训练中使用。所以请保持此窗口在后台打开。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/52.png" /></div>

- ### 在 Google Colab 上使用 YOLOv5 进行训练

  在选择了公共数据集之后，我们需要对数据集进行训练。在这里，我们使用 Google Colaboratory 环境在云端进行训练。此外，我们在 Colab 中使用 Roboflow API 来轻松下载我们的数据集。

  点击[此处](https://colab.research.google.com/gist/lakshanthad/b47a1d1a9b4fac43449948524de7d374/yolov5-training-for-sensecap-a1101.ipynb)打开一个已经准备好的 Google Colab 工作区，按照工作区中提到的步骤逐步操作，并逐个运行代码单元。

  **注意：** 在 Google Colab 上，在 **Step 4** 下的代码单元中，您可以直接从 Roboflow 复制上面提到的代码片段。

  它将会执行以下步骤：

  - 设置训练环境
  - 下载数据集
  - 执行训练
  - 下载训练好的模型

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/18.png" /></div>

对于包含 699 张图像的苹果检测数据集，在配备 NVIDIA Tesla T4 GPU 和 16GB GPU 内存的 Google Colab 上完成训练过程大约需要 7 分钟。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/43.png" /></div>

如果您跟随上述的 Colab 项目，您就会知道您可以一次加载 4 个模型到设备上。但是，请注意一次只能加载一个模型。这可以由用户指定，并将在本 Wiki 的后续部分进行解释。

## 部署和推理

如果您直接想跳到**第3节**，其中解释了如何将训练好的 AI 模型部署到 Grove - Vision AI 模块并进行推理，请[点击这里](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#jump3)。

## <span id="jump2">2. 2. 使用您自己的数据集训练自己的 AI 模型</span>

如果您想构建特定的目标检测项目，而公共数据集中没有您想要检测的对象，您可能希望构建自己的数据集。当您记录自己的数据集时，您必须确保覆盖对象的所有角度（360度），将对象放置在不同的环境中，不同的光照条件和不同的天气条件下。在记录自己的数据集后，您还必须对数据集中的图像进行注释。所有这些步骤将在本节中进行介绍。

尽管有不同的收集数据的方法，例如使用手机相机，但收集数据的最佳方法是使用 Grove - Vision AI 模块上的内置摄像头。这是因为当我们对 Grove - Vision AI 模块进行推断时，颜色、图像质量和其他细节都将相似，这使得整体检测更加准确。

- ### 使用 Roboflow 注释数据集

  如果您使用自己的数据集，您将需要对数据集中的所有图像进行注释。注释意味着简单地在我们想要检测的每个对象周围绘制矩形框，并为其分配标签。我们将解释如何使用 Roboflow 进行此操作。

  [Roboflow](https://roboflow.com/) 是一个基于在线的注释工具。在这里，我们可以直接将我们录制的视频片段导入 Roboflow，它将被导出为一系列图像。这个工具非常方便，因为它可以帮助我们将数据集分配到“训练、验证和测试”中。此外，此工具还允许我们在为图像添加标签后对这些图像进行进一步处理。此外，它可以轻松地将标记的数据集导出为我们所需要的 **YOLOV5 PyTorch 格式**！

  对于本 Wiki，我们将使用一个包含苹果图像的数据集，以便我们可以稍后检测苹果并进行计数。

  - **步骤 1.** 单击[此处](https://app.roboflow.com/login)注册 Roboflow 帐户
  - **步骤 2.** 单击 **创建新项目** 开始我们的项目

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg" /></div>

- **步骤 3.** 填写 **项目名称**，保持 **许可证（CC BY 4.0）** 和 **项目类型（目标检测（边界框））** 默认。在 **您的模型将预测什么？** 列下，填写一个注释组名称。例如，在我们的情况下，我们选择 **apples**。这个名称应该突出显示您数据集中的所有类别。最后，点击 **创建公共项目**。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/6.jpg" /></div>

- **步骤 4.** 将使用 Grove - Vision AI 模块拍摄的图片拖放到此处。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/7.png" /></div>

- **步骤 5.** 图片处理完成后，点击 **完成上传**。耐心等待直到图片上传完成。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg" /></div>

- **Step 6.** After the images are uploaded, click **Assign Images**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg" /></div>

- **步骤 7.** 选择一张图片，绘制一个围绕苹果的矩形框，选择标签为 **apple**，然后按下 **回车键**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/9.png" /></div>

- **步骤 8.** 对其余的苹果重复相同的操作。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/10.png" /></div>

**Note:** **尽量标注您在图像中看到的所有苹果。如果只有部分苹果可见，请尝试对其进行标注。**

- **步骤 9.** 继续标注数据集中的所有图像。

Roboflow 有一个称为“标签辅助”的功能，它可以预测标签，从而加快标注速度。但这不适用于所有类型的对象，而是一些特定类型的对象。要启用此功能，只需按下“标签辅助”按钮，选择一个模型，选择类别，然后浏览图像以查看带有边界框的预测标签。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/YOLOV5/41.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/39.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/40.png" /></div>

- 如上所示，它只能帮助预测上述80个类别的注释。如果您的图像不包含上述的对象类别，则无法使用标签辅助功能。
  - **步骤 10：** 标注完成后，单击 **Add images to Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg" /></div>

- **步骤 11：** 接下来，我们将图像分成 "Train, Valid and Test"。保持默认百分比的分布，然后点击 **Add Images**。

<div align="center"><img width={330} src="https://files.seeedstudio.com/wiki/YOLOV5/26.png" /></div>

- **步骤 12：** 点击 **生成新版本**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg" /></div>

- **步骤 13：** 现在您可以添加**预处理**和**增强**，如果您愿意的话。在这里，我们将**调整** **调整大小** 选项为 **192x192**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/11.png" /></div>

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/13.png" /></div>

- 在这里，我们将图像大小更改为192x192，因为我们将使用该大小进行训练，训练速度会更快。否则，在训练过程中，它将不得不将所有图像转换为192x192，这会消耗更多的CPU资源并使训练过程变慢。
  - **步骤 14：** 接下来，继续使用其余的默认设置，并单击 **生成**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/14.png" /></div>

- **Step 15.** Click **Export**, select **Format** as **YOLO v5 PyTorch**, select **show download code** and click **Continue**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/54.png" /></div>

**步骤 15：** 点击 **导出**，选择 **格式** 为 **YOLO v5 PyTorch**，选择 **显示下载代码**，然后点击 **继续**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png" /></div>

### 在 Google Colab 上使用 YOLOv5 进行训练

在完成了数据集的标注之后，我们需要对数据集进行训练。跳转到[此部分](https://wiki.seeedstudio.com/Train-Deploy-AI-Model/#train-using-yolov5-on-google-colab)，该部分将解释如何在 Google Colab 上使用 YOLOv5 训练 AI 模型。

## <span id="jump3">3. Deploy the trained model and perform inference</span>

- ###  部署训练模型并执行推断

  ### Grove - Vision AI Module

  现在我们将把在训练结束时得到的 **model-1.uf2** 移动到 Grove - Vision AI 模块中。在这里，我们将通过将 Grove - Vision AI 模块与 [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 连接，查看推断结果。

  **注意：** 如果这是您第一次使用 Arduino，请强烈建议您参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino)。此外，请按照 [此 Wiki](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#getting-started) 中的说明设置 Wio Terminal 以在 Arduino IDE 中使用。

  - **步骤 1.** 安装最新版本的 [Google Chrome 浏览器](https://www.google.com/chrome) 或 [Microsoft Edge 浏览器](https://www.microsoft.com/en-us/edge?r=1)，然后打开它。
  - **步骤 2.** 通过 USB Type-C 线将 Grove - Vision AI 模块连接到您的计算机。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/47.png" /></div>

- **步骤 3.** 双击 Grove - Vision AI 模块上的引导按钮，进入大容量存储模式

<div align="center"><img width={220} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/48.png" /></div>

在此之后，你将在文件浏览器中看到一个名为 **GROVEAI** 的新存储驱动器。

<div align="center"><img width={280} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" /></div>

- **Step 4.** 将 **model-1.uf2** 文件拖放到 **GROVEAI** 驱动器中。

一旦 uf2 文件完成复制到驱动器中，驱动器将消失。这意味着 uf2 文件已成功上传到模块中。

**注意：** 如果你有 4 个准备好的模型文件，你可以逐个拖放每个模型。拖放第一个模型，等待其完成复制，然后再次进入启动模式，拖放第二个模型，依此类推。

- **Step 5.** 在 Grove - Vision AI 模块仍然通过 USB 连接到电脑的情况下，通过 Grove I2C 端口将其连接到 Wio Terminal，连接方式如下：

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/49.png" /></div>

- **Step 6.** 将 [Seeed_Arduino_GroveAI 库](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI)安装到 Arduino IDE 中，并打开 **object_detection.ino** 示例。

- **Step 7.** 如果你只加载了一个模型（索引为 1）到 Grove - Vision AI 模块中，它将加载该模型。然而，如果你加载了多个模型，你可以通过更改 **MODEL_EXT_INDEX_[value]** 来[指定要使用的模型](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/examples/object_detection/object_detection.ino#L12)，其中 value 可以是数字 1、2、3 或 4。

```cpp
// for example:
if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_2))
```

- 上面的代码将加载索引为 2 的模型。
  - **Step 8.** 由于我们要检测苹果，我们将在[这里](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/examples/object_detection/object_detection.ino#L55)稍作更改：

```cpp
Serial.print("Number of apples: ");
```

- **Step 9.** 将 Wio Terminal 连接到电脑，将此代码上传到 Wio Terminal，并在 Arduino IDE 中以 115200 作为波特率打开串行监视器。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/42.png" /></div>

- 你将能够在上述串行监视器上看到检测信息。
  - **Step 10.** [点击这里](https://files.seeedstudio.com/grove_ai_vision/index.html) 打开一个具有检测功能的摄像头流的预览窗口。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png" /></div>

- **步骤 11.** 点击 **连接** 按钮。然后你会在浏览器上看到一个弹窗。选择 **Grove AI - Paired** 并点击 **连接**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png" /></div>

- **Step 12.** View real-time inference results using the preview window!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.jpg" /></div>

As you can see above, the apples are being detected with bounding boxes around them. Here "0" corresponds to each detection of the same class. If you have multiple classes, they will be named as 0,1,2,3,4 and so on. Also the confidence score for each detected apple (0.8 and 0.84 in above demo) is being displayed!

- ### 附加内容

  如果你感兴趣，你也可以继续阅读本维基的其余部分！

  ### 我可以在我的个人电脑上训练 AI 模型吗？

  你也可以使用自己的个人电脑来训练目标检测模型。但是，训练的性能取决于你的硬件条件。你还需要一台安装了 Linux 操作系统的个人电脑来进行训练。我们在这个维基中使用了一个 Ubuntu 20.04 个人电脑。

  - **步骤 1.** 在一个 **Python>=3.7.0** 环境中克隆 **yolov5-swift 仓库** 并安装 **requirements.txt**

```sh
git clone https://github.com/Seeed-Studio/yolov5-swift 
cd yolov5-swift
pip install -r requirements.txt
```

- **步骤 2.** 如果你之前跟随本维基的步骤，你可能还记得我们在 Robolflow 中完成标注后导出数据集。此外，在 Roboflow Universe 中，我们下载了数据集。在这两种方法中，都会出现如下窗口询问要下载数据集的格式。因此现在，请选择 **download zip to computer**，在 **Format** 下选择 **YOLO v5 PyTorch** 并点击 **Continue**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/16.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/17.png" /></div>

- 
  之后，一个 **.zip 文件** 将会下载到你的电脑上。
  - **步骤 3.** 将我们下载的 .zip 文件复制并粘贴到 **yolov5-swift** 目录中，然后解压缩。

```sh
# example
cp ~/Downloads/Apples.v1i.yolov5pytorch.zip ~/yolov5-swift
unzip Apples.v1i.yolov5pytorch.zip
```

- **步骤 4.** 打开 **data.yaml** 文件，将 **train** 和 **val** 目录编辑如下所示:

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
- **batch:** 确定批处理大小
- **epochs:** 定义训练周期数
- **data:** 设置到我们的 yaml 文件的路径
- **cfg:** 指定我们的模型配置
- **weights:** 指定自定义权重路径
- **name:** 结果名称
- **nosave:** 仅保存最终检查点
- **cache:** 为了更快的训练而缓存图像

```sh
python3 train.py --img 192 --batch 64 --epochs 100 --data data.yaml --cfg yolov5n6-xiao.yaml --weights yolov5n6-xiao.pt --name yolov5n6_results --cache
```

对于包含 987 张图像的苹果检测数据集，在本地 PC 上，使用 NVIDIA GeForce GTX 1660 Super GPU（6GB GPU 内存）完成训练过程大约需要 30 分钟。
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/44.png" /></div>

- 如果您按照上述 Colab 项目进行操作，您会了解到可以一次将 4 个模型加载到设备上。但是，请注意一次只能加载一个模型。用户可以指定加载的模型，这将在本 wiki 中进行解释。
  - **步骤 7.** 如果您导航到 `runs/train/exp/weights`，您将看到一个名为 **best.pt** 的文件。这是训练生成的模型。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg" /></div>

- **步骤 8.** 将训练好的模型导出为 TensorFlow Lite 格式

```sh
python3 export.py --data {dataset.location}/data.yaml --weights runs/train/yolov5n6_results/weights/best.pt --imgsz 192 --int8 --include tflite  
```

- **步骤 9.** 将 TensorFlow Lite 转换为 UF2 文件

UF2 是由 Microsoft 开发的一种文件格式。Seeed 使用这种格式将 .tflite 文件转换为 .uf2 文件，使 tflite 文件可以存储在 Seeed 推出的 AIoT 设备上。目前，Seeed 的设备支持最多 4 个模型，每个模型（.tflite）小于 1M 。

您可以使用 -t 参数指定要放置在相应索引中的模型。

例如:

- `-t 1`：索引 1
- `-t 2`：索引 2

```sh
# Place the model to index 1
python3 uf2conv.py -f GROVEAI -t 1 -c runs//train/yolov5n6_results//weights/best-int8.tflite -o model-1.uf2
```

- 尽管您可以一次加载 4 个模型到设备上，但请注意一次只能加载一个模型。这可以由用户指定，并将在本 wiki 中进行解释。
  - **步骤 10.** 现在将生成一个名为 **model-1.uf2** 的文件。这是我们将加载到 Grove - Vision AI 模块中执行推理的文件！

## 资源

- **[网页]** [YOLOv5 文档](https://docs.ultralytics.com/)
- **[网页]** [Ultralytics HUB](https://ultralytics.com/hub)
- **[网页]** [Roboflow 文档](https://docs.roboflow.com/)
- **[网页]** [TensorFlow Lite 文档](https://www.tensorflow.org/lite/guide)

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们的产品的体验尽可能顺利。我们提供几种不同的沟通渠道，以满足不同的偏好和需求。s

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
