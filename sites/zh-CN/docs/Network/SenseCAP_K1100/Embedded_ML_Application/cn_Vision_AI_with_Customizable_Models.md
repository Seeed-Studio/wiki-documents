---
description: 可定制模型的视觉AI
title: 可定制模型的视觉AI
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Vision_AI_with_Customizable_Models
last_update:
  date: 2/2/2023
  author: shuxu hu
---

# 将您自己的AI模型训练并部署到 Grove - 视觉AI

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供使用 SenseCAP 系列坚固耐用的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温度和湿度、光照强度、二氧化碳、电导率以及一个 8 合 1 气象站的传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP 工业传感器</strong></font></td>
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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温度 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光照强度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温度 &amp; 湿度 &amp; 二氧化碳</strong></a></td>
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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; 电导率</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody></table>

## 概述

在本教程中，我们将教您如何为您的特定应用训练自己的 AI 模型，并轻松将其部署到 Grove - Vision AI 模块上。让我们开始吧！

## 硬件介绍

在本教程中，我们将主要使用 Grove - Vision AI 模块。因此，首先让我们熟悉一下这款硬件。

### Grove - Vision AI 模块

[Grove Vision AI 模块](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html) 是一款拇指大小的 AI 摄像头，配备了定制传感器，内置了用于人员检测的机器学习算法以及其他定制模型。它可以在几分钟内轻松部署和显示，支持超低功耗模式，提供两种信号传输方式和多种板载模块，使其成为入门 AI 驱动摄像头的理想选择。

<!-- <div align=center><img width=350 src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg"/></div> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" alt="pir" width={600} height="auto" /></p>

## 软件介绍

在本教程中，我们将使用以下软件技术：

- Roboflow - 用于标注
- YOLOv5 - 用于训练
- TensorFlow Lite - 用于推理

<!-- <div align=center><img width=600 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png"/></div> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png" alt="pir" width={600} height="auto" /></p>

### 什么是 Roboflow？

[Roboflow](https://roboflow.com) 是一个基于在线的标注工具。该工具允许您轻松标注所有图像，对这些图像进行进一步处理，并将标注后的数据集导出为不同的格式，例如 YOLOV5 PyTorch、Pascal VOC 等！Roboflow 还为用户提供了现成的公共数据集。

### 什么是 YOLOv5？

YOLO 是 “You Only Look Once”（你只看一次）的缩写。这是一种算法，可以实时检测和识别图像中的各种对象。Ultralytics [YOLOv5](https://ultralytics.com/yolov5) 是基于 PyTorch 框架的 YOLO 版本。

### 什么是 TensorFlow Lite？

[TensorFlow Lite](https://www.tensorflow.org/lite) 是一个开源、产品级、跨平台的深度学习框架，它将 TensorFlow 中的预训练模型转换为一种特殊格式，可以针对速度或存储进行优化。这种特殊格式的模型可以部署在边缘设备上，例如运行 Android 或 iOS 的移动设备，或基于 Linux 的嵌入式设备（如 Raspberry Pi 或微控制器），以便在边缘进行推理。

## 教程结构

本教程将分为三个主要部分：

1. [使用公共数据集训练自己的 AI 模型](#jump1)
2. 使用自己的数据集训练自己的 AI 模型
3. [将训练好的 AI 模型部署到 Grove - Vision AI 模块](#jump3)

第一部分是通过最少的步骤快速构建自己的 AI 模型的最快方法。第二部分需要一些时间和精力来构建自己的 AI 模型，但这将是非常值得的学习经历。第三部分关于部署 AI 模型，可以在完成第一部分或第二部分后进行。

因此，有两种方式来学习本教程：

1. 按照 [第一部分](#jump1) 然后是 [第三部分](#jump3) - 快速学习路径
2. 按照第二部分然后是 [第三部分](#jump3) - 慢速学习路径

然而，我们建议先按照第一种方式学习，然后再转到第二种方式。

## <span id="jump1">1. 使用公共数据集训练您的 AI 模型</span>

对象检测项目的第一步是获取用于训练的数据。您可以下载公开可用的数据集，或者创建自己的数据集！

但是，开始对象检测最快捷、最简单的方法是什么呢？使用公共数据集可以为您节省大量时间，否则您需要自己收集数据并对其进行标注。这些公共数据集已经预先标注好，让您可以将更多时间专注于 AI 视觉应用。

### 硬件准备

- Grove - Vision AI 模块
- USB Type-C 数据线
- 具有互联网连接的 Windows/Linux/Mac 设备

### 软件准备

- 无需额外准备软件

### 使用公开可用的标注数据集

您可以下载许多公开可用的数据集，例如 [COCO 数据集](https://cocodataset.org)、[Pascal VOC 数据集](http://host.robots.ox.ac.uk/pascal/VOC) 等。[Roboflow Universe](https://universe.roboflow.com) 是一个推荐的平台，它提供了广泛的数据集，并且拥有 [90,000+ 数据集和 66+ 百万张图像](https://blog.roboflow.com/computer-vision-datasets-and-apis)，可用于构建计算机视觉模型。此外，您还可以在 Google 上搜索 **开源数据集**，从中选择各种可用的数据集。

- **步骤 1.** 访问 [此链接](https://universe.roboflow.com/lakshantha-dissanayake/apple-detection-5z37o/dataset/1) 获取 Roboflow Universe 上公开的 Apple Detection 数据集

- **步骤 2.** 点击 **Create Account** 创建一个 Roboflow 账户

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/53.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/53.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 点击 **Download**，选择 **YOLO v5 PyTorch** 作为 **Format**，点击 **show download code**，然后点击 **Continue**

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/51.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/51.png" alt="pir" width={600} height="auto" /></p>
这将生成一个代码片段，我们稍后将在 Google Colab 训练中使用它。因此，请将此窗口保持打开状态。

<!-- <div align=center><img width=700 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/52.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/52.png" alt="pir" width={600} height="auto" /></p>

### 在 Google Colab 上使用 YOLOv5 进行训练

在选择了公共数据集后，我们需要对数据集进行训练。这里我们使用 Google Colaboratory 环境在云端进行训练。此外，我们在 Colab 中使用 Roboflow API 来轻松下载数据集。

点击 [此处](https://colab.research.google.com/gist/lakshanthad/b47a1d1a9b4fac43449948524de7d374/yolov5-training-for-sensecap-a1101.ipynb) 打开一个已准备好的 Google Colab 工作区，按照工作区中提到的步骤逐一运行代码单元。

**注意：** 在 Google Colab 中，在 **步骤 4** 的代码单元中，您可以直接复制上述 Roboflow 提供的代码片段。

它将引导完成以下内容：

- 设置训练环境
- 下载数据集
- 执行训练
- 下载训练好的模型

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/18.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/18.png" alt="pir" width={600} height="auto" /></p>
对于一个包含 699 张图像的苹果检测数据集，在运行 NVIDIA Tesla T4 GPU（16GB GPU 内存）的 Google Colab 上，训练过程大约需要 7 分钟。

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/43.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/43.png" alt="pir" width={600} height="auto" /></p>
如果您按照上述 Colab 项目操作，您会发现可以一次性将 4 个模型加载到设备中。然而，请注意一次只能加载一个模型。用户可以指定加载的模型，这将在本 Wiki 的后续部分中进行解释。

### 部署与推理

如果您想直接跳转到 **第 3 节**，了解如何将训练好的 AI 模型部署到 Grove - Vision AI 模块并执行推理，请 [点击此处](#jump3)。

### 使用 Roboflow 标注数据集

如果您使用自己的数据集，则需要对数据集中的所有图像进行标注。标注的意思是简单地在每个要检测的对象周围绘制矩形框并为其分配标签。我们将解释如何使用 Roboflow 执行此操作。

[Roboflow](https://roboflow.com) 是一个基于在线的标注工具。在这里，我们可以直接将录制的视频导入 Roboflow，并将其导出为一系列图像。这个工具非常方便，因为它可以帮助我们将数据集分为“训练、验证和测试”集。此外，该工具还允许我们在标注后对这些图像进行进一步处理。此外，它可以轻松地将标注好的数据集导出为 **YOLOV5 PyTorch 格式**，这正是我们所需要的！

在本 Wiki 中，我们将使用一个包含苹果图像的数据集，以便我们稍后可以检测苹果并进行计数。

- **步骤 1.** 点击 [此处](https://app.roboflow.com/login) 注册一个 Roboflow 账户

- **步骤 2.** 点击 **Create New Project** 开始我们的项目

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 填写 **项目名称**，保持 **许可证 (CC BY 4.0)** 和 **项目类型 (Object Detection (Bounding Box))** 为默认值。在 **您的模型将预测什么？** 列中，填写一个注释组名称。例如，在我们的案例中，我们选择 **apples**。这个名称应突出显示数据集的所有类别。最后，点击 **创建公共项目**。

<!-- <div align=center><img width=350 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/6.jpg"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/6.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 拖放您使用 Grove - Vision AI 模块捕获的图像

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/7.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/7.png" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 图像处理完成后，点击 **完成上传**。耐心等待图像上传完成。

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 图像上传完成后，点击 **分配图像**

<!-- <div align=center><img width=300 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 选择一张图像，在苹果周围画一个矩形框，选择标签为 **apple**，然后按 **ENTER**

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/9.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/9.png" alt="pir" width={600} height="auto" /></p>

- **步骤 8.** 对剩余的苹果重复相同操作

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/10.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/10.png" alt="pir" width={600} height="auto" /></p>

**注意：** 尽量标注图像中看到的所有苹果。如果只有部分苹果可见，也请尝试标注。

- **步骤 9.** 继续为数据集中的所有图像添加注释

Roboflow 提供了一个名为 **Label Assist** 的功能，它可以提前预测标签，从而加快标注速度。然而，它并不适用于所有对象类型，而是针对特定类型的对象。要启用此功能，只需按下 **Label Assist** 按钮，**选择一个模型**，**选择类别**，然后浏览图像以查看带有边界框的预测标签。

<!-- <div align=center><img width=200 src="https://files.seeedstudio.com/wiki/YOLOV5/41.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV5/41.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV5/39.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV5/40.png" alt="pir" width={600} height="auto" /></p>

如上所示，它只能帮助预测上述 80 个类别的注释。如果您的图像中不包含这些类别的对象，则无法使用 Label Assist 功能。

- **步骤 10.** 标注完成后，点击 **将图像添加到数据集**

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 11.** 接下来，我们将图像分为 "训练集 (Train)、验证集 (Valid) 和测试集 (Test)"。保持默认的分配百分比，然后点击 **添加图像**

<!-- <div align=center><img width=330 src="https://files.seeedstudio.com/wiki/YOLOV5/26.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV5/26.png" alt="pir" width={600} height="auto" /></p>

- **步骤 12.** 点击 **生成新版本**

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 13.** 如果需要，现在可以添加 **预处理 (Preprocessing)** 和 **增强 (Augmentation)**。这里我们将 **调整大小 (Resize)** 选项更改为 **192x192**

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/11.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/11.png" alt="pir" width={600} height="auto" /></p>

<!-- <div align=center><img width=450 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/13.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/13.png" alt="pir" width={600} height="auto" /></p>

这里我们将图像大小更改为 192x192，因为我们将在训练中使用该大小，这样训练速度会更快。否则，在训练过程中需要将所有图像转换为 192x192，这会消耗更多的 CPU 资源并使训练过程变慢。

- **步骤 14.** 接下来，保持其余默认设置并点击 **生成**

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/14.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/14.png" alt="pir" width={600} height="auto" /></p>

- **步骤 15.** 点击 **Export**，选择 **Format** 为 **YOLO v5 PyTorch**，选择 **show download code** 并点击 **Continue**

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/54.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/54.png" alt="pir" width={600} height="auto" /></p>
这将生成一个代码片段，我们稍后将在 Google Colab 的训练中使用。因此，请保持此窗口在后台打开。

<!-- <div align=center><img width=600 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png" alt="pir" width={600} height="auto" /></p>

### 在 Google Colab 上使用 YOLOv5 进行训练

完成数据集标注后，我们需要训练数据集。跳转到[此部分](https://wiki.seeedstudio.com/cn/Vision_AI_with_Customizable_Models/#train-using-yolov5-on-google-colab)，了解如何使用 YOLOv5 在 Google Colab 上运行 AI 模型训练。

## <span id="jump3">3. 部署训练好的模型并进行推理</span>

### Grove - Vision AI 模块

现在我们将训练结束时获得的 **model-1.uf2** 移动到 Grove - Vision AI 模块中。在这里，我们将连接 Grove - Vision AI 模块与 [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)，以查看推理结果。

**注意：** 如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino)。此外，请按照[此教程](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/#getting-started)设置 Wio Terminal 以配合 Arduino IDE 使用。

- **步骤 1.** 安装最新版本的 [Google Chrome](https://www.google.com/chrome) 或 [Microsoft Edge 浏览器](https://www.microsoft.com/en-us/edge?r=1) 并打开

- **步骤 2.** 使用 USB Type-C 数据线将 Grove - Vision AI 模块连接到您的电脑

<!-- <div align=center><img width=450 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/47.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/47.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 双击 Grove - Vision AI 模块上的启动按钮以进入大容量存储模式

<!-- <div align=center><img width=220 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/48.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/48.png" alt="pir" width={600} height="auto" /></p>

完成后，您将在文件资源管理器中看到一个新的存储驱动器，名为 **GROVEAI**

<!-- <div align=center><img width=280 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 将 **model-1.uf2** 文件拖放到 **GROVEAI** 驱动器中

当 uf2 文件完成复制到驱动器后，驱动器将消失。这意味着 uf2 文件已成功上传到模块。

**注意：** 如果您有 4 个模型文件准备好，可以逐个拖放每个模型。先拖放第一个模型，等待复制完成，再次进入启动模式，拖放第二个模型，依此类推。

- **步骤 5.** 在 Grove - Vision AI 模块仍通过 USB 连接到电脑时，将其通过 Grove I2C 接口连接到 Wio Terminal，如下所示

<!-- <div align=center><img width=250 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/49.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/49.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 在 Arduino IDE 中安装 [Seeed_Arduino_GroveAI 库](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI)，并打开 **object_detection.ino** 示例

- **步骤 7.** 如果您仅加载了一个模型（索引为 1）到 Grove - Vision AI 模块，它将加载该模型。然而，如果您加载了多个模型，可以通过更改 **MODEL_EXT_INDEX_[value]** 来[指定使用哪个模型](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/examples/object_detection/object_detection.ino#L12)，其中 value 可以是数字 1、2、3 或 4

```cpp
// 例如：
if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_2))
```

上述代码将加载索引为 2 的模型

- **步骤 8.** 由于我们正在检测苹果，我们将在代码中稍作修改 [此处](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/examples/object_detection/object_detection.ino#L55)

```cpp
Serial.print("Number of apples: ");
```

- **步骤 9.** 将 Wio Terminal 连接到电脑，将此代码上传到 Wio Terminal，并在 Arduino IDE 的串口监视器中以 115200 波特率打开

<!-- <div align=center><img width=500 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/42.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/42.png" alt="pir" width={600} height="auto" /></p>
您将在串口监视器中看到检测信息，如上图所示。

- **步骤 10.** [点击这里](https://files.seeedstudio.com/grove_ai_vision/index.html) 打开摄像头流的预览窗口，并显示检测结果

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png" alt="pir" width={600} height="auto" /></p>

- **步骤 11.** 点击 **Connect** 按钮。然后您将在浏览器中看到一个弹窗。选择 **Grove AI - Paired** 并点击 **Connect**

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png" alt="pir" width={600} height="auto" /></p>

- **步骤 12.** 使用预览窗口查看实时推理结果！

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.jpg"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.jpg" alt="pir" width={600} height="auto" /></p>

如上图所示，苹果被检测到，并用边界框标记出来。这里的“0”对应于同一类别的每次检测。如果您有多个类别，它们将被命名为0、1、2、3、4等。此外，每个检测到的苹果的置信度分数（如上图中的0.8和0.84）也会显示出来！

## 额外内容

如果您想尝试更多内容，可以继续按照本Wiki的其余部分操作！

### 我可以在我的电脑上训练AI模型吗？

您也可以使用自己的电脑来训练目标检测模型。然而，训练性能将取决于您的硬件配置。此外，您需要一台运行Linux操作系统的电脑进行训练。本Wiki中使用的是Ubuntu 20.04系统的电脑。

- **步骤 1.** 克隆 **yolov5-swift 仓库** 并在 **Python>=3.7.0** 环境中安装 **requirements.txt**

```sh
git clone https://github.com/Seeed-Studio/yolov5-swift 
cd yolov5-swift
pip install -r requirements.txt
```

- **步骤 2.** 如果您之前按照本Wiki的步骤操作过，您可能还记得我们在Roboflow中标注后导出了数据集。此外，在Roboflow Universe中，我们下载了数据集。在这两种方法中，都有一个如下所示的窗口，提示您选择下载数据集的格式。因此，现在请选择 **download zip to computer**，在 **Format** 下选择 **YOLO v5 PyTorch**，然后点击 **Continue**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/16.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/17.png" alt="pir" width={600} height="auto" /></p>

之后，一个 **.zip 文件** 将会下载到您的电脑。

- **步骤 3.** 将下载的 .zip 文件复制并粘贴到 **yolov5-swift** 目录中并解压

```sh
# 示例
cp ~/Downloads/Apples.v1i.yolov5pytorch.zip ~/yolov5-swift
unzip Apples.v1i.yolov5pytorch.zip
```

- **步骤 4.** 打开 **data.yaml** 文件并编辑 **train** 和 **val** 目录如下

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
- **batch:** 确定批量大小
- **epochs:** 定义训练轮数
- **data:** 设置yaml文件的路径
- **cfg:** 指定模型配置
- **weights:** 指定权重文件的自定义路径
- **name:** 结果名称
- **nosave:** 仅保存最终检查点
- **cache:** 缓存图像以加快训练速度

```sh
python3 train.py --img 192 --batch 64 --epochs 100 --data data.yaml --cfg yolov5n6-xiao.yaml --weights yolov5n6-xiao.pt --name yolov5n6_results --cache
```

对于一个包含987张图像的苹果检测数据集，在一台配备NVIDIA GeForce GTX 1660 Super GPU（6GB显存）的本地PC上，训练过程大约需要30分钟。

<!-- <div align=center><img width=1000 src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/44.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/44.png" alt="pir" width={600} height="auto" /></p>

如果您按照上述Colab项目操作，您会知道设备一次可以加载4个模型。然而，请注意一次只能加载一个模型。这可以由用户指定，稍后将在本Wiki中解释。

- **步骤 7.** 如果您导航到 `runs/train/exp/weights`，您会看到一个名为 **best.pt** 的文件。这是训练生成的模型。

<!-- <div align=center><img width=600 src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 8.** 将训练好的模型导出为 TensorFlow Lite 格式

```sh
python3 export.py --data {dataset.location}/data.yaml --weights runs/train/yolov5n6_results/weights/best.pt --imgsz 192 --int8 --include tflite  
```

- **步骤 9.** 将 TensorFlow Lite 转换为 UF2 文件

UF2 是一种由微软开发的文件格式。Seeed 使用这种格式将 .tflite 转换为 .uf2，从而使 tflite 文件可以存储在 Seeed 推出的AIoT设备上。目前，Seeed的设备最多支持4个模型，每个模型（.tflite）小于1M。

您可以通过 `-t` 指定模型放置在相应的索引位置。

例如：

- `-t 1`: 索引1
- `-t 2`: 索引2

```sh
# 将模型放置在索引1
python3 uf2conv.py -f GROVEAI -t 1 -c runs//train/yolov5n6_results//weights/best-int8.tflite -o model-1.uf2
```

尽管设备一次可以加载4个模型，但请注意一次只能加载一个模型。这可以由用户指定，稍后将在本Wiki中解释。

- **步骤 10.** 现在将生成一个名为 **model-1.uf2** 的文件。这就是我们将加载到 Grove - Vision AI 模块中以执行推理的文件！

## 资源

- **[网页]** [YOLOv5 文档](https://docs.ultralytics.com)

- **[网页]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[网页]** [Roboflow 文档](https://docs.roboflow.com)

- **[网页]** [TensorFlow Lite 文档](https://www.tensorflow.org/lite/guide)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>