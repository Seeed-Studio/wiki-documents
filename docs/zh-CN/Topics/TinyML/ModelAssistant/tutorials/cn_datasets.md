---
description: 模型助手数据集
title: 数据集
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ModelAssistant_Tutorials_Datasets
last_update:
  date: 01/11/2024
  author: LynnL4
---

# 数据集

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 支持多种数据集。您可以在互联网上浏览和下载不同的数据集，或者标注和创建自己的数据集。

## 互联网数据集

### [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 目前提供以下官方数据集，用于相应模型的训练和测试。

在运行命令下载特定数据集之前，请确保您在 **[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 的根目录**中。该命令将自动下载数据集并将其保存在当前目录下名为 `datasets` 的文件夹中，最后解压它们。

- [下载自定义仪表数据集](https://files.seeedstudio.com/sscma/datasets/meter.zip)：

  ```sh
  wget https://files.seeedstudio.com/sscma/datasets/meter.zip -P datasets && unzip datasets/meter.zip -d datasets
  ```

- [下载 COCO_MASK 数据集](https://files.seeedstudio.com/sscma/datasets/coco_mask.zip)：

  ```sh
  wget https://files.seeedstudio.com/sscma/datasets/coco_mask.zip -P datasets && unzip datasets/coco_mask.zip -d datasets
  ```

### Roboflow

[Roboflow](https://public.roboflow.com/) 是一个免费的公共计算机视觉数据集托管平台，支持 CreateML JSON、COCO JSON、Pascal VOC XML、YOLO 和 Tensorflow TFRecords 等格式，以及相应数据集的额外缩减和增强版本。

:::tip

我们强烈推荐在 Roboflow 上寻找数据集，您只需注册一个账户，就可以从 Roboflow 免费下载数百个不同的数据集，以满足您的特定需求。

:::

您可以在 Roboflow 上找到一些适用于 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 的数据集：

| 数据集 | 描述 |
| -- | -- |
| [Digital Meter Water](https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-water/dataset/1) | 数字水表数据集 |
| [Digital Meter Seg7](https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-seg7/dataset/1) | 数字仪表 Seg7 数据集 |
| [Digit Seg7 Classification](https://universe.roboflow.com/seeed-studio-ovcjn/digit-seg7/1) | 数字 Seg7 分类数据集 |

### Kaggle

[Kaggle](https://www.kaggle.com/) 是一个数据建模和数据分析竞赛平台。企业和研究人员可以在上面发布数据，统计学家和数据挖掘专家可以竞争产生最佳模型。Kaggle 还提供数千个数据集，您可以访问 [Kaggle 数据集](https://www.kaggle.com/datasets) 来选择适合您需求的数据集。

## 自定义数据集

创建自定义数据集通常涉及以下步骤。

1. **收集数据：** 收集与问题领域相关的数据。这些数据可以是文本、图像、音频或视频格式。

2. **整理数据：** 对收集的数据进行清理、[标注](#dataset-annotation) 和去重，以确保准确性和一致性。这一步对于确保训练模型的准确性至关重要。

3. **划分数据集：** 将整理好的数据集划分为训练集、验证集和测试集。通常使用 70%、15% 和 15% 的比例来划分数据集。

4. **转换数据格式：** 将整理好的数据集转换为模型可以读取的格式，如文本格式、图像格式等。

5. **加载数据集：** 将转换后的数据集加载到模型中进行训练和测试。加载数据集时，使用适当的数据加载器和批次大小很重要。

6. **数据增强（可选，建议由 [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 完成）：** 对数据集进行数据增强，如旋转、翻转、裁剪等，以增加数据集的多样性和数量。

## 数据集标注

标注数据集是对数据集中的样本进行分类或标记的过程，通常需要人工干预。

标注数据集的过程非常关键，决定了训练模型的质量。以下是一些常见的标注数据集的方式和工具。

- **手动标注：** 手工标注数据集，对每个样本进行标注，能够保证标注的准确性，但速度较慢。

- **半自动标注：** 将手动标注的结果应用到其他数据集上，减少标注时间，但标注的准确性可能会降低。

- **自动标注：** 使用一些算法模型自动标注数据，如关键词提取、文本分类等。虽然能够提高标注效率，但标注的准确性也可能受到影响。

常用的数据标注工具：

- [LabelImg](https://github.com/heartexlabs/labelImg)：用于图像标注的工具，支持多种标注格式，如 PASCAL VOC、YOLO 等。

- [Labelbox](https://labelbox.com/)：在线标注工具，支持图像、文本、视频等格式，具有多种标注模板和自定义标注模板。

- [Doccano](https://github.com/doccano/doccano)：用于文本分类和序列标注的开源标注工具，支持多种标注格式，如 NER、POS 等。

- [Annotator](https://github.com/openannotation/annotator)：轻量级在线标注工具，支持图像、文本、音频等格式。

- [VGG Image Annotator (VIA)](https://gitlab.com/vgg/via)：用于图像标注的开源工具，支持多种标注格式，如 PASCAL VOC、YOLO 等。

- [COCO Annotator](https://github.com/jsbroks/coco-annotator)：基于网页的图像和视频标注工具，用于目标检测、分割、关键点标注等任务。

以上是一些常见的数据标注工具，不同的工具适用于不同的数据集类型和标注需求，可以根据实际需要进行选择。