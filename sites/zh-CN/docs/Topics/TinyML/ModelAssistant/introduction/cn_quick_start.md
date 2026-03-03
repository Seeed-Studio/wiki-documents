---
description: Model Assistant 快速入门
title: 快速入门
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Introduce_Quick_Start
last_update:
  date: 01/11/2024
  author: LynnL4
---
# 快速入门

在[概述](/cn/ModelAssistant_Introduce_Overview)中，我们已经介绍了 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 提供的功能和特性。考虑到 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 分为多个不同的模块，每个模块完成其相应的任务，我们建议按照以下步骤快速入门。

:::tip
我们建议所有 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 的初学者从[入门指南](#入门指南)开始学习，如果您熟悉 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 或 [OpenMMLab](https://github.com/open-mmlab)，并且想要尝试在边缘计算设备上部署、修改现有神经网络或在用户定义的数据集上训练，您可以直接参考[进阶](#进阶)。
:::

## 入门指南

### 模型部署

如果您想在设备上部署模型，请参考[部署](/cn/ModelAssistant_Deploy_Overview)部分，了解如何部署模型。

### 模型训练

如果您想训练模型，我们强烈建议您首先尝试在 Colab 平台上训练模型。您可以参考以下教程：

#### 目标检测

| 模型                                                                                           | Colab                                                                                                                                                                                                                     |
|:------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Gender_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gender_Detection_Swift-YOLO_192.md)                   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gender_Detection_Swift-YOLO_192.ipynb)          |
| [Digital_Meter_Water_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Digital_Meter_Water_Swift-YOLO_192.md)             | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Digital_Meter_Water_Swift-YOLO_192.ipynb)       |
| [Apple_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Apple_Detection_Swift-YOLO_192.md)                     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Apple_Detection_Swift-YOLO_192.ipynb)           |
| [person_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/person_Detection_Swift-YOLO_192.md)                   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/person_Detection_Swift-YOLO_192.ipynb)          |
| [Face_Detection_Swift-YOLO_96](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Face_Detection_Swift-YOLO_96.md)                         | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Face_Detection_Swift-YOLO_96.ipynb)             |
| [COCO_Detection_Swift-YOLO_320](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/COCO_Detection_Swift-YOLO_320.md)                       | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/COCO_Detection_Swift-YOLO_320.ipynb)            |
| [Gesture_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gesture_Detection_Swift-YOLO_192.md)                 | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gesture_Detection_Swift-YOLO_192.ipynb)         |
| [Digital_Meter_Electricity_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Digital_Meter_Electricity_Swift-YOLO_192.md) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Digital_Meter_Electricity_Swift-YOLO_192.ipynb) |

#### 图像分类

| 模型                                                                                                         | Colab                                                                                                                                                                                                                            |
|:--------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [MNIST_Classification_MobileNetV2_0.5_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/MNIST_Classification_MobileNetV2_0.5_Rep_32.md)         | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/MNIST_Classification_MobileNetV2_0.5_Rep_32.ipynb)     |
| [Gender_Classification_MobileNetV2_0.35_Rep_64](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gender_Classification_MobileNetV2_0.35_Rep_64.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gender_Classification_MobileNetV2_0.35_Rep_64.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_64](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_64.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_64.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_96](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_96.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_96.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_32.md)     | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_32.ipynb)   |
| [CIFAR-10_Classification_MobileNetV2_0.35_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/CIFAR-10_Classification_MobileNetV2_0.35_Rep_32.md) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/CIFAR-10_Classification_MobileNetV2_0.35_Rep_32.ipynb) |

## 高级

1. 首先，参考[安装指南](/cn/ModelAssistant_Introduce_Installation)来配置[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)的运行环境。

2. 然后，熟悉[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)的基本使用方法：

   - **模型训练**，请参考[模型训练](/cn/ModelAssistant_Tutorials_Training_Overview)来学习如何使用[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)训练模型。我们建议您从示例中选择一个模型进行训练。

   - **模型导出**。完成模型训练后，为了在边缘计算设备上部署，需要首先导出模型。有关模型导出的教程，请参考[模型导出](/cn/ModelAssistant_Tutorials_Export_Overview)。

   - **模型验证**。模型验证可以在训练后或导出后进行。前者验证神经网络和训练结果的正确性，而后者主要验证导出模型的正确性，便于后续在边缘计算设备上的部署和调试。在上述两个步骤的文档中已经提供了一些模型验证的方法。

- **模型部署**。如果您想在边缘计算设备上部署导出的训练模型，请参考[部署](/cn/ModelAssistant_Deploy_Overview)
- **自定义数据集**。如果您想在自定义数据集上进行训练，请参考[数据集](/cn/ModelAssistant_Tutorials_Datasets)。

- **自定义模型**。如果您想修改现有的神经网络或设计自己的神经网络，请参考[模型配置](/cn/ModelAssistant_Tutorials_Config)。

## 必要知识

### 📸 计算机视觉：

计算机视觉的基础建立在数字图像处理之上。因此，您需要首先学习数字图像处理的基础知识。然后您可以继续阅读计算机视觉主题，如模式识别和3D几何。您需要了解线性代数，以便能够完全理解计算机视觉的一些概念，如降维。在理解计算机视觉的基础知识后，您还应该建立深度学习方面的知识，特别是卷积神经网络（CNN）。

### 💻 编程：

Python对于设计和原型制作来说已经足够，但如果您想做一些嵌入式工作，您还应该熟悉C++。

### 🧰 工具：

OpenCV是计算机视觉的主要工具，Numpy是数据处理和分析的重要工具。您必须了解它们。您永远不知道，但您应该知道有哪些工具可用以及如何使用它们。如何使用它们。您需要熟悉的另一个工具是深度学习框架。框架。您可以从最容易学习的Keras开始，然后学习Tensorflow或PyTorch。