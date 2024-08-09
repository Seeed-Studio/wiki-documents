---
description: 使用YOLOv5和Roboflow进行少样本目标检测
title: 使用YOLOv5和Roboflow进行少样本目标检测
tags:
  - Data Label
  - AI model train
  - AI model deploy
  - Roboflow
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/YOLOv5-Object-Detection-Jetson
last_update:
  date: 01/04/2023
  author: w0x7ce
---

# 使用YOLOv5和Roboflow进行少样本目标检测

## 介绍

[YOLO](https://docs.ultralytics.com) 是现有最著名的目标检测算法之一。它只需要**少量样本进行训练**，同时提供**更快的训练时间**和**高精度**。我们将逐一演示这些特点，并逐步解释完整的机器学习流程，其中你可以通过在边缘设备（如**NVIDIA Jetson平台**）上运行训练模型来使用训练数据进行目标检测，具体流程其中包括 **收集数据、标记数据、训练数据和检测对象**。同时，我们还将比较使用自定义数据集和公共数据集之间的差异。 

## 什么是 YOLOv5?

YOLO 是 ‘You Only Look Once’的缩写。 它是一种实时检测和识别图像中各种对象的算法。。 Ultralytics的 [YOLOv5](https://ultralytics.com/yolov5) 是YOLO的版本之一，其现在是基于PyTorch框架。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/YOLOv5_banner.jpg" /></div>

## 什么是少样本目标检测？

传统上，如果你想训练机器学习模型，你会使用像Pascal VOC 2012数据集之类的公共数据集，其中大约包含17112张图像。然而，我们将使用迁移学习来实现用YOLOv5进行少样本目标检测，只需要非常少的训练样本。我们将在本Wiki中演示这一点。

## 硬件支持

YOLOv5受以下硬件支持：

- NVIDIA官方的开发套件：

  - NVIDIA® Jetson Nano开发套件
  - NVIDIA® Jetson Xavier NX开发套件
  - NVIDIA® Jetson AGX Xavier开发套件
  - NVIDIA® Jetson TX2开发套件

- NVIDIA官方的SoMs:
  
  - NVIDIA® Jetson Nano模块
  - NVIDIA® Jetson Xavier NX模块
  - NVIDIA® Jetson TX2 NX模块
  - NVIDIA® Jetson TX2模块
  - NVIDIA® Jetson AGX Xavier模块

- Seeed推出的载板产品：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203载板
  - A203 (版本2)载板
  - A205载板
  - A206载板

## 先决条件

- 以上任何一款Jetson设备都可以安装最新的JetPack v4.6.1，包括所有的SDK组件 (点击 [ wiki](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/) 参考进行安装)

- 主机 PC

  - 本地训练需要使用Linux PC（最好是Ubuntu）
  - 云端训练可以在任何操作系统的PC上进行

## 入门

在像Jetson平台这样的边缘设备上运行第一个物体检测项目只需要四个主要步骤！

1. 收集数据集或使用公开可用的数据集

    - 手动收集数据集
    - 使用公开可用的数据集

2. 使用Roboflow进行数据集注释

3. 在本地PC或云端训练

    - 在本地PC（Linux）上训练
    - 在Google Colab上训练

4. 在Jetson设备上进行推理（inference）

## 收集数据集或使用公开可用的数据集

物体检测项目的第一步是获取训练数据。您可以从公开可用的数据集下载数据，或创建自己的数据集！通常公开数据集用于教育和研究目的。然而，如果您想构建特定的物体检测项目，而公开数据集中没有您想要检测的对象，那么您可能需要构建自己的数据集。

### 手动收集数据集

建议首先录制要识别的物体的视频镜头。您必须确保覆盖物体的所有角度（360度），将物体放置在不同的环境中，不同的光照和不同的天气条件下进行拍摄。
我们录制的总视频时长为9分钟，其中4.5分钟用于拍摄花朵，剩余的4.5分钟用于拍摄叶子。录制可以分如下：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/pink-flowers-2.gif" /></div>

1. 早晨晴天
2. 早晨有风天气
3. 早晨雨天
4. 中午晴天
5. 中午有风天气
6. 中午雨天
7. 晚上晴天
8. 晚上有风天气
9. 晚上雨天

**注意:** 后续我们将把这段视频镜头转换为一系列图像，以组成训练数据集。

### 使用公开可用的数据集

您可以下载多个公开可用的数据集，例如  [COCO 数据集](https://cocodataset.org), [Pascal VOC 数据集](http://host.robots.ox.ac.uk/pascal/VOC) 等。建议使用 [Roboflow Universe](https://universe.roboflow.com) 平台该平台提供了广泛的数据集，可用于构建计算机视觉模型，包括 [90,000多个数据集，共计6600多万张图像](https://blog.roboflow.com/computer-vision-datasets-and-apis) 。此外，您可以在Google上简单搜索**开源数据集**，并从可用的各种数据集中进行选择。

## 使用Roboflow对数据集进行注释w

接下来，我们将转到对数据集进行注释。注释就是简单地在我们要检测的每个物体周围画一个矩形框，并为其分配标签。我们将说明如何使用Roboflow实现这一点。

[Roboflow](https://roboflow.com) 是一种基于在线的注释工具。在这里，我们可以直接将之前录制的视频镜头导入到Roboflow中，并将其导出为一系列图像。这个工具非常方便，因为它会让我们帮助将数据集划分为“训练、验证和测试”。此外，在标记图像之后，这个工具还允许我们添加更多的处理。此外，它还可以轻松地将带有标签的数据集导出为**YOLOV5 PyTorch格式**，这正是我们需要的！

- **步骤 1.** 点击 [这里](https://app.roboflow.com/login) 注册一个Roboflow账户

- **步骤 2.** 点击 **创建新项目**开始我们的项目。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg" /></div>

- **步骤 3.** 填写 **Project Name**，保留 **License (CC BY 4.0)** 和**Project Type (Object Detection (Bounding Box))** 作为默认设置。在 **What will your model predict？** 列下，填写一个注释组名称。例如，在我们的情况下，我们选择 **plants**。这个名称应该突出你数据集中的所有类别。最后，点击**Create Public Project**。

<div align="center"><img width={360} src="https://files.seeedstudio.com/wiki/YOLOV5/20.jpg" /></div>

- **步骤 4.** 拖放你之前录制的视频镜头

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/4.jpg" /></div>

- **步骤 5.** 选择一个帧率，使得视频可以分割成一系列图像。在这里，我们将使用默认帧速率 **1 frame/second**，总共会生成542张图像。一旦您通过滑动滑块选择了帧速率，单击**Choose Frame Rate**。这个过程需要几秒钟到几分钟的时间（取决于视频长度）来完成。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/5.png" /></div>

- **步骤 6.** 图像处理完成后，单击**Finish Uploading**。请耐心等待直到图像完成上传。


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/6.jpg" /></div>

- **步骤 7.** 图像上传完成后，单击**Assign Images**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/YOLOV5/7.jpg" /></div>

- **步骤 8.** 选择一张图片，在花朵周围画一个矩形框，选择标签为**pink flower**，然后按下**ENTER**键。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/21.jpg" /></div>

- **步骤 9.** 对于剩下的花朵，重复同样的操作。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/22.jpg" /></div>

- **步骤 10.** 画一个矩形框在叶子周围，选择标签为**leaf**，然后按下**ENTER**键。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/23.jpg" /></div>

- **步骤 11.** 对于剩下的叶子，重复同样的操作。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/24.jpg" /></div>

**注意:** 尝试标记图像中所见到的所有对象。如果只有对象的一部分可见，也请尝试标记它。

- **步骤 12.** 继续注释数据集中的所有图像。

Roboflow有一个名为**Label Assist**的功能，它可以预测标签，使标注速度更快。然而，它不适用于所有类型的物体，而是适用于一种特定类型的物体。要使用此功能，您只需点击**Label Assist**按钮，然后**select a model**、**select the classes**，浏览图像，您将看到带有边界框的预测标签。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/YOLOV5/41.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/39.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/40.png" /></div>

如上所述，它只能帮助预测上面列出的80个类别的标签。如果您的图像不包含上述对象类别，则不能使用标签辅助功能。

- **步骤 13.** 一旦标注完成，单击 **Add images to Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg" /></div>

- **步骤 14.** 接下来我们将根据“训练集、验证集和测试集”划分图像。保留默认比例来进行分配，然后单击 **Add Images**

<div align="center"><img width={330} src="https://files.seeedstudio.com/wiki/YOLOV5/26.png" /></div>

- **步骤 15.** 单击 **Generate New Version**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg" /></div>

- **步骤 16.** 现在，如果你想的画可以添加 **Preprocessing** 和 **Augmentation** 。在这里我们将 **删除**  **Resize** 选项并保留原始图像大小。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/28.jpg" /></div>

- **步骤 17.** 接下来，继续执行其余的默认设置，然后单击 **Generate**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/29.jpg" /></div>

- **步骤 18.** 单击 **Export**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/17.jpg" /></div>

- **步骤 19.** 选择 **download zip to computer**, 在 "Select a Format" 下选择 **YOLO v5 PyTorch** 并且单击 **Continue**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/18.jpg" /></div>

- **步骤 20.** 之后一个 **.zip 文件** 会被下载到您的计算机上，我们稍后需要这个.zip文件进行训练。

## 在本地PC或云端训练

在对数据集进行注释后，我们需要对数据集进行训练。对于训练，我们将介绍两种方法。一种方法基于在线（Google Colab），另一种方法基于本地PC（Linux）。

对于Google Colab训练，我们将使用两种方法。在第一种方法中，我们将使用Ultralytics HUB上传数据集，在Colab上设置训练，监测训练并获取训练好的模型。在第二种方法中，我们将通过Roboflow api从Roboflow获取数据集，在Colab上进行训练并下载训练好的模型。

### 使用Ultralytics HUB和Google Colab

是一个平台，您可以在不需要编写任何代码的情况下训练模型。只需将数据上传到Ultralytics HUB，训练模型并将其部署到现实世界中！这是一个快速、简单和易于使用的平台。任何人都轻松上手！

- **步骤 1.** 访问 [网页链接](https://hub.ultralytics.com) 去注册一个免费的 Ultralytics HUB 账号

- **步骤 2.** 输入您的凭据并**使用电子邮件进行注册**或使用**Google、GitHub或Apple账户**进行注册。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/1.png" /></div>

在你登录Ultralytics HUB之后, 您会看到下面这样的仪表板：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/2.png" /></div>

- **步骤 3.** 解压之前从Roboflow下载并得到的zip文件，并将其中的所有文件放入一个新的文件夹中。

- **步骤 4.** 确保您的**数据集yaml文件**和**根目录文件夹**（之前创建的文件夹）拥有相同的名称。例如，如果您将yaml文件命名为**pinkflowers.yaml**，则根目录应该命名为**pinkflowers**。

- **步骤 5.** 打开 **pinkflowers.yaml** 文件并且编辑 **train** 和 **val** 目录结构，如下所示：

```sh
train: train/images
val: valid/images
```

- **步骤 6.** 将根目录文件夹压缩为 **.zip**文件，并与根目录文件夹名称相同（例如，本例中为**pinkflowers.zip**）。

现在，我们已经准备好将该数据集上传到Ultralytics HUB上进行训练。

- **步骤 7.** 单击**数据集**选项卡，然后单击**上传数据集**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/6.jpg" /></div>

- **步骤 8.** 输入数据集的**名称**。如果需要，输入**描述**。将我们之前创建的.zip文件拖放到**数据集**区域下，然后单击**上传数据集**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOv5-2/24.png" /></div>

- **步骤 9.** 数据集上传后，单击数据集以查看更多详细信息。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/25.png" /></div>

- **步骤 10.** 单击 **Projects** 选项卡 然后单击 **Create Project**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/5.jpg" /></div>

- **步骤 11.** 为项目输入一个**名称**，如果需要，输入一个**描述**，如果需要添加一个**封面图像**，然后单击**创建项目**。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/YOLOv5-2/26.png" /></div>

- **步骤 12.**  进入新创建的项目，点击 **创建模型**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/27.png" /></div>

- **步骤 13.**  输入 **模型名称** ，选择 **YOLOv5n** 作为预训练模型，然后点击 **下一步**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/28.png" /></div>

**注意：**通常情况下，首选的预训练模型是 **YOLOv5n6**，因为它适用于像Jetson平台这样的边缘计算设备。然而，Ultralytics HUB目前还没有支持它。因此，我们使用稍微相似的模型 **YOLOv5n**。

- **步骤 14.** 选择我们之前上传的数据集，单击 **Next**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/29.png" /></div>

- **步骤 15.** 选择 **Google Colab** 作为训练平台然后单击**Advanced Options** 下拉菜单。 在这里，我们可以更改一些训练设置。例如，我们将把训练的epoch次数从300更改为100，并保持其它设置不变。然后点击 **保存**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/30.png" /></div>

**注意：** 如果您计划进行本地培训，还可以选择 **Bring your own agent**

- **步骤 16.** 复制 **API key** 并且点击 **Open Colab**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/31.png" /></div>

- **步骤 17.** 将 **MODEL_KEY** 替换为之前复制的 **API密钥**。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/YOLOv5-2/16.jpg" /></div>

- **步骤 18.** 点击 `Runtime > Rull All` 来运行所有代码单元格，开始训练过程。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/YOLOv5-2/17.jpg" /></div>

- **步骤 19.** 当 Ultralytics HUB 的状态变为蓝色时，返回到 Ultralytics HUB 界面，然后点击 **完成** 。此时，您还会看到 Colab 的状态显示为 **已连接**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/32.png" /></div>

现在你可以在HUB上看到训练过程

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/33.png" /></div>

- **步骤 20.** 训练完成后，点击 PyTorch 按钮以下载以 PyTorch 格式保存的已训练模型。PyTorch 是在 Jetson 设备上进行推断所需的格式。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/37.png" /></div>

**注意：** 您还可以将模型导出成其他在 **格式** 下显示的格式 。

如果您返回到谷歌 Colab，您可以看到更多详细信息，如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/36.png" /></div>

这里的准确率 `mAP@.5` 叶子的大约为90％和花朵的大约为99.4％，而总体准确率的 `mAP@.5` 大约为94.7％。

### 使用 Google Colab 和 Roboflow api

在这里，我们使用谷歌 Colaboratory 环境在云端进行训练。此外，我们在 Colab 中使用 Roboflow api 轻松下载我们的数据集。

- **步骤 1.** 单击 [这](https://colab.research.google.com/gist/lakshanthad/645de50b7cc5870f4070b720be770f8b/yolov5-training-for-jetson.ipynb) 打开已准备好的谷歌 Colab 工作区，并按照工作区中提到的步骤进行操作。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/82.png" /></div>

训练玩之后, 你会看到如下输出:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/37.png" /></div>

这里的准确率 `mAP@.5` 叶子的大约为91.6％和花朵的大约为99.4％，而总体准确率的 `mAP@.5` 大约为95.5％。

- **步骤 2.** 在 **文件** 选项卡下, 如果您导航到 `runs/train/exp/weights` ，您会看到一个名为 **best.pt** 的文件。这是训练生成的模型。下载此文件并将其复制到 Jetson 设备上，因为这是我们稍后要在 Jetson 设备上进行推论所使用的模型。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/52.png" /></div>

### 使用本地PC端

在这里，您可以使用安装了 Linux 操作系统的个人电脑进行训练。我们在此示例中使用了 Ubuntu 20.04 个人电脑。

- **步骤 1.** 克隆 **YOLOv5 repo** 并在**Python>=3.7.0** 的环境下安装 **requirements.txt** 文件。

```sh
git clone https://github.com/ultralytics/yolov5 
cd yolov5
pip install -r requirements.txt
```

- **步骤 2.** 将之前从 Roboflow 下载的 .zip 文件复制并粘贴到 **yolov5** 目录下，然后解压它。

```sh
# example
cp ~/Downloads/pink-flowers.v1i.yolov5pytorch.zip ~/yolov5
unzip pink-flowers.v1i.yolov5pytorch.zip
```

- **步骤 3.** 请打开 **data.yaml** 文件，并将 **train** 和 **val** 目录按如下所示进行编辑：

```sh
train: train/images
val: valid/images
```

- **步骤 4.** 执行以下命令开始训练：

```sh
python3 train.py --data data.yaml --img-size 640 --batch-size -1 --epoch 100 --weights yolov5n6.pt
```

由于我们的数据集相对较小(约500张图像)，因此 **迁移学习** 有望比从头开始训练产生更好的结果。我们使用预训练的 COCO 模型的权重对模型进行了初始化，通过将模型名称（yolov5n6）传递给“权重”参数来实现。在此，我们使用了 **yolov5n6**，因为它非常适合边缘设备。这里将 **image size** 设置为 **640x640**。我们将 **batch-size** 设置为 **-1**，因为这将自动确定最佳的批大小。但是，如果出现“GPU内存不足”的错误，请选择批量大小为 **32**，甚至是 **16**。您也可以根据自己的喜好更改 **迭代轮数**

训练完成之后, 你会看到如下输出:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/65.png" /></div>

这里的准确率 `mAP@.5` 叶子的约为90.6% 而花的约为99.4% ， 并且总体准确率 `mAP@.5` 约为 95%.

- **步骤 5.** 如果您导航到 `runs/train/exp/weights`，您会看到一个名为 **best.pt** 的文件。这是训练生成的模型。将此文件复制粘贴到 Jetson 设备上，因为这是我们稍后要在 Jetson 设备上进行推理所使用的模型。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg" /></div>

## 在Jetson设备上进行推理

### 使用TensorRT

现在，我们将使用Jetson设备，使用之前训练生成的模型来对图像进行推断（识别物体）。 这里将使用 [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt) 来增加 Jetson 平台上的推断性能。

- **步骤 1.** 进入 Jetson 设备的终端，install pip 并update它。

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **步骤 2.** 克隆如下 repo

```sh
git clone https://github.com/ultralytics/yolov5
```

- **步骤 3.** 打开 **requirements.txt**

```sh
cd yolov5
vi requirements.txt
```

- **步骤 4.** 编辑以下行。在这里，您需要先按下 **i** 进入可编辑模式。编辑完成后，按下 **ESC**，然后键入 **:wq** 以保存并退出。

```sh
matplotlib==3.2.2
numpy==1.19.4
# torch>=1.7.0
# torchvision>=0.8.1
```

**注意:** 我们在这里包含了固定版本的 **matplotlib** 和 **numpy**，以确保稍后运行YOLOv5时不会出现错误。此外，因为稍后将安装它们，此时将排除 **torch** 和 **torchvision**。

- **步骤 5.** 安装以下依赖项：

```sh
sudo apt install -y libfreetype6-dev
```

- **步骤 6.** 安装必要的软件包

```sh
pip3 install -r requirements.txt
```

- **步骤 7.** 安装 torch

```sh
cd ~
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/fjtbno0vpo676a25cgvuqc1wty0fkkg6.whl -O torch-1.10.0-cp36-cp36m-linux_aarch64.whl
pip3 install torch-1.10.0-cp36-cp36m-linux_aarch64.whl
```

- **步骤 8.** 安装 torchvision

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.9.0 https://github.com/pytorch/vision torchvision
cd torchvision
sudo python3 setup.py install 
```

- **步骤 9.** 克隆如下 repo

```sh
cd ~
git clone https://github.com/wang-xinyu/tensorrtx
```

- **步骤 10.** 将之前训练生成的 **best.pt** 文件复制到 **yolov5** 目录中。

- **步骤 11.** 将 **tensorrtx/yolov5** 目录下的 **gen_wts.py** 文件复制到 **yolov5** 目录中。

```sh
cp tensorrtx/yolov5/gen_wts.py yolov5
```

- **步骤 12.** 使用 PyTorch **.pt** 文件生成 **.wts** 文件

```sh
cd yolov5
python3 gen_wts.py -w best.pt -o best.wts
```

- **步骤 13.** 导航至 **tensorrtx/yolov5**

```sh
cd ~
cd tensorrtx/yolov5
```

- **步骤 14.** 使用 **vi text editor**打开 **yololayer.h** 

```sh
vi yololayer.h
```

- **步骤 15.** 将 **CLASS_NUM** 更改为您模型所训练的类别数。在我们的示例中，为2。

```sh
CLASS_NUM = 2
```

- **步骤 16.** 创建一个新的 **build** 目录并进入其中：

```sh
mkdir build 
cd build
```

- **步骤 17.** 将之前生成的 **best.wts** 文件复制到这个 **build** 目录中：

```sh
cp ~/yolov5/best.wts .
```

- **步骤 18.** 编译它

```sh
cmake ..
make
```

- **步骤 19.** 序列化模型

```sh
sudo ./yolov5 -s [.wts] [.engine] [n/s/m/l/x/n6/s6/m6/l6/x6 or c/c6 gd gw]
#example
sudo ./yolov5 -s best.wts best.engine n6
```

在这里，我们使用 **n6**，因为它被推荐用于像 NVIDIA Jetson 平台这样的边缘设备。但是，如果您使用 Ultralytics HUB 来设置训练，那么您只能使用 **n**，因为 HUB 目前尚未支持 **n6**。

- **步骤 20.** 将您希望模型检测到的图像复制到新文件夹中，例如 **tensorrtx/yolov5/images**。

- **步骤 21.** 以下是反序列化和对图像运行推理的命令：

```sh
sudo ./yolov5 -d best.engine images
```

以下是在Jetson Nano和Jetson Xavier NX上运行推理的时间对比：

#### Jetson Nano

在这里，量化设置为FP16

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/58.png" /></div>

从上面的结果中，我们可以取平均值约为 **47ms**。将此值转换为每秒帧数：1000/47 = 21.2766 = **21fps**。

#### Jetson Xavier NX

在这里，量化设置为FP16

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/59.jpg" /></div>

从上面的结果中，我们可以取平均值约为 **20ms**。将此值转换为每秒帧数：1000 / 20 = **50fps**。

此外，输出图像将如下所示，显示检测到的对象：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/55.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/56.jpg" /></div>

### 使用 TensorRT 和 DeepStream SDK

在这里，我们将使用  [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt) 和 [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) 来对视频进行推理。

- **步骤 1.** 确保您已正确地在 Jetson 设备上安装了所有 **SDK组件** 和 **DeepStream SDK**。(点击 [此wiki](https://wiki.seeedstudio.com/Tutorial-of-A20X-Carrier-Boards) 参考安装)

**注意:** 建议使用 NVIDIA SDK 管理器安装所有 SDK 组件和 DeepStream SDK。

- **步骤 2.** 进入 Jetson 设备的终端，安装 pip 并升级它

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **步骤 3.** 克隆如下 repo

```sh
git clone https://github.com/ultralytics/yolov5
```

- **步骤 4.** 打开 **requirements.txt**

```sh
cd yolov5
vi requirements.txt
```

- **步骤 5.** 编辑以下行。在这里，您需要先按下 **i** 进入可编辑模式。编辑完成后，按下 **ESC**，然后键入 **:wq** 以保存并退出。

```sh
matplotlib==3.2.2
numpy==1.19.4
# torch>=1.7.0
# torchvision>=0.8.1
```

**注意:** 我们在这里包含了固定版本的 **matplotlib** 和 **numpy**，以确保稍后运行 YOLOv5 时不会出现错误。此外，因为稍后将安装它们，此时将排除 **torch** 和 **torchvision**。

- **步骤 6.** 安装如下依赖：

```sh
sudo apt install -y libfreetype6-dev
```

- **步骤 7.** 安装必要的软件包

```sh
pip3 install -r requirements.txt
```

- **步骤 8.** 安装 torch

```sh
cd ~
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/fjtbno0vpo676a25cgvuqc1wty0fkkg6.whl -O torch-1.10.0-cp36-cp36m-linux_aarch64.whl
pip3 install torch-1.10.0-cp36-cp36m-linux_aarch64.whl
```

- **步骤 9.** 安装 torchvision

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.9.0 https://github.com/pytorch/vision torchvision
cd torchvision
sudo python3 setup.py install 
```

- **步骤 10.** 克隆如下 repo

```sh
cd ~
git clone https://github.com/marcoslucianops/DeepStream-Yolo
```

- **步骤 11.** 将 **DeepStream-Yolo/utils** 目录下的 **gen_wts_yoloV5.py** 文件复制到 **yolov5** 目录中。

```sh
cp DeepStream-Yolo/utils/gen_wts_yoloV5.py yolov5
```

- **步骤 12.** 在 yolov5 仓库中，从 YOLOv5 发布中下载 **pt 文件**（以 YOLOv5s 6.1 为例）：

```sh
cd yolov5
wget https://github.com/ultralytics/yolov5/releases/download/v6.1/yolov5s.pt
```

- **步骤 13.** 生成 **cfg** 和 **wts** 文件

```sh
python3 gen_wts_yoloV5.py -w yolov5s.pt
```

**注意**: 要更改推理尺寸（默认为640）

```sh
-s SIZE
--size SIZE
-s HEIGHT WIDTH
--size HEIGHT WIDTH

Example for 1280:
-s 1280
or
-s 1280 1280
```

- **步骤 14.** 将生成的 **cfg** 和 **wts** 文件复制到 **DeepStream-Yolo** 文件夹中。

```sh
cp yolov5s.cfg ~/DeepStream-Yolo
cp yolov5s.wts ~/DeepStream-Yolo
```

- **步骤 15.** 在打开 **DeepStream-Yolo** 文件夹之后，编译库

```sh
cd ~/DeepStream-Yolo
# For DeepStream 6.1
CUDA_VER=11.4 make -C nvdsinfer_custom_impl_Yolo
# For DeepStream 6.0.1 / 6.0
CUDA_VER=10.2 make -C nvdsinfer_custom_impl_Yolo
```

- **步骤 16.** 根据您的模型编辑 **config_infer_primary_yoloV5.txt** 文件。

```sh
[property]
...
custom-network-config=yolov5s.cfg
model-file=yolov5s.wts
...
```

- **步骤 17.** 编辑 **deepstream_app_config** 文件

```sh
...
[primary-gie]
...
config-file=config_infer_primary_yoloV5.txt
```

- **步骤 18.** 运行推理

```sh
deepstream-app -c deepstream_app_config.txt
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/FP32-yolov5s.gif" /></div>

上面的结果在 **Jetson Xavier NX** 上使用 **FP32** 和 **YOLOv5s 640x640** 进行推理。我们可以看到 **FPS** 约为 **30**。

#### INT8 校准

如果您想在推理过程中使用INT8精度，则需要按照以下步骤操作：

- **步骤 1.** 安装 OpenCV

```sh
sudo apt-get install libopencv-dev
```

- **步骤 2.** 使用 OpenCV 支持编译 / 重新编译的 **nvdsinfer_custom_impl_Yolo** 库

```sh
cd ~/DeepStream-Yolo
# For DeepStream 6.1
CUDA_VER=11.4 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo
# For DeepStream 6.0.1 / 6.0
CUDA_VER=10.2 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo
```

- **步骤 3.** 对于 COCO 数据集，请下载  [val2017](https://drive.google.com/file/d/1gbvfn7mcsGDRZ_luJwtITL-ru2kK99aK/view?usp=sharing), 然后将其解压并移动到 **DeepStream-Yolo** 文件夹中。

- **步骤 4.** 为校准图像创建一个新目录：

```sh
mkdir calibration
```

- **步骤 5.** 运行以下命令，从 COCO 数据集中选择1000张随机图像来运行校准：

```sh
for jpg in $(ls -1 val2017/*.jpg | sort -R | head -1000); do \
    cp ${jpg} calibration/; \
done
```

**注意：** NVIDIA 建议至少使用 500 张图像来获取良好的准确性。在此示例中，选择 1000 张图像以获得更好的准确度（图像越多 = 准确度越高）。更高的 INT8_CALIB_BATCH_SIZE 值将导致更高的准确率和更快的校准速度。请根据您的 GPU 内存设置它。您可以将其设置为 **head -1000**。例如，对于 2000 张图像，使用 **head -2000**。此过程可能需要很长时间。


- **步骤 6.** 创建包含所有选定图像的 **calibration.txt** 文件：

```sh
realpath calibration/*jpg > calibration.txt
```

- **步骤 7.** 设置环境变量：

```sh
export INT8_CALIB_IMG_PATH=calibration.txt
export INT8_CALIB_BATCH_SIZE=1
```

- **步骤 8.** 更新 **config_infer_primary_yoloV5.txt** 文件

从

```sh
...
model-engine-file=model_b1_gpu0_fp32.engine
#int8-calib-file=calib.table
...
network-mode=0
...
```

到

```sh
...
model-engine-file=model_b1_gpu0_int8.engine
int8-calib-file=calib.table
...
network-mode=1
...
```

- **步骤 9.** 运行推理

```sh
deepstream-app -c deepstream_app_config.txt
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/INT8-yolov5s.gif" /></div>

上述结果在 **Jetson Xavier NX** 上使用 **INT8** 和 **YOLOv5s 640x640** 进行推理。我们可以看到 **FPS** 约为 **60**。

#### 基准测试结果：

下表总结了在 **Jetson Xavier NX** 上不同模型的表现。 

<table>
<thead>
  <tr>
    <th>模型名字</th>
    <th>精度</th>
    <th>推理尺寸</th>
    <th>推理时间 (ms)</th>
    <th>FPS</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">YOLOv5s</td>
    <td>FP32</td>
    <td>320x320</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
  <tr>
    <td>FP32</td>
    <td>640x640</td>
    <td>33.33</td>
    <td>30</td>
  </tr>
  <tr>
    <td>INT8</td>
    <td>640x640</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
  <tr>
    <td>YOLOv5n</td>
    <td>FP32</td>
    <td>640x640</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
</tbody>
</table>

## 使用公共数据集与自定义数据集的比较：

现在我们将比较使用公共数据集和自己定制数据集时，训练样本数量和训练时间之间的差异。

### 训练样本数量

#### 自定义数据集

在这篇文章中，我们首先将植物数据集以视频的形式收集起来，然后使用Roboflow将视频转化为一系列图像。这样，我们得到了542张图片，与公共数据集相比，这是一个非常小的数据集。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/62.jpg" /></div>

#### 公共数据集

公共数据集例如**Pascal VOC 2012**和**Microsoft COCO 2017**数据集中分别包含约**17112**张和**121408**张图像。

##### Pascal VOC 2012 数据集

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/63.png" /></div>

##### Microsoft COCO 2017 数据集

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/64.png" /></div>

### 训练时间

#### 本地训练

该训练是在一张搭载有6GB显存的NVIDIA GeForce GTX 1660 Super显卡上完成的。

##### 自定义数据集的本地训练

###### 540 张图片数据集

根据我们之前针对植物数据集进行的本地训练，我们得到了以下结果：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/65.png" /></div>

在这次本地训练中，我们只花费了**2.2小时**训练了100个epochs，相对于使用公共数据集训练而言，训练速度较快。

###### 240 张图片数据集

我们将数据集缩减为240张图片，再次进行了训练，并获得了以下结果：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/83.png" /></div>

在这次训练中，只花费了约**1小时**训练了100个epochs，相对于使用公共数据集训练而言，训练速度较快。

##### 使用Pascal VOC 2012数据集进行本地训练

在这个场景中，我们使用Pascal VOC 2012数据集进行训练，同时保持相同的训练参数。我们发现每个epoch需要大约 **50分钟（0.846小时*60）**，因此我们在训练1个epoch后停止了训练。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/66.png" /></div>

如果我们计算100个epochs的训练时间，大约需要**50 * 100分钟 = 5000分钟= 83小时**，这比训练自定义数据集所需的时间要长得多。

##### 使用Microsoft COCO 2017数据集进行本地训练

在这个场景中，我们使用Microsoft COCO 2017数据集进行训练，并保持相同的训练参数。我们发现每个epoch大约需要**7.5小时**的时间，因此我们在完成一个epoch之前就停止了训练。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/68.png" /></div>

如果我们计算100个epochs的训练时间，大约需要**7.5小时*100 = 750小时**，这比训练自定义数据集所需的时间要长得多。

#### Google Colab 训练

这次训练是在一张拥有12GB显存的NVIDIA Tesla K80显卡上进行的。

##### 自定义数据集

###### 540 张图像数据集

根据我们之前在Google Colab平台上使用540张图像进行的植物训练，我们得到了以下结果：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/37.png" /></div>

在这次使用Google Colab平台进行的540张图像的植物训练中，只花费了约**1.3小时**训练了100个epochs，相对于使用公共数据集训练而言，训练速度较快。

###### 240 张图像数据集

我们将数据集缩减为240张图片，再次进行了训练，并获得了以下结果：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/79.png" /></div>

在这次使用Google Colab平台进行的240张图像的植物训练中，只花费了约**42分钟**训练了100个epochs，相对于使用公共数据集训练而言，训练速度较快。

##### 使用Google Colab平台进行Pascal VOC 2012数据集训练

在这个场景中，我们使用Pascal VOC 2012数据集进行训练，并保持相同的训练参数。我们发现每个epoch大约需要**9 分钟 (0.148 小时 * 60)** 的时间，因此我们在完成1个epoch后停止了训练。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/67.png" /></div>

如果我们计算100个epochs的训练时间，大约需要**9 * 100分钟 = 900分钟 = 15小时**，这比训练自定义数据集所需的时间要长得多。但相比在本地环境或使用GPU较弱的云计算平台上训练，使用Google Colab进行训练可大大缩短训练时间。

##### 使用Google Colab平台进行Microsoft COCO 2017数据集训练

在这个场景中，我们使用Microsoft COCO 2017数据集进行训练，并保持相同的训练参数。我们发现每个epoch预计需要大约**1.25个小时**的时间，因此我们在完成一个epoch之前就停止了训练。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/69.png" /></div>

如果我们计算100个epochs的训练时间，大约需要**1.25小时*100 = 125小时**，这比训练自定义数据集所需的时间要长得多。但相比在本地环境或使用GPU配置较弱的云计算平台上训练，使用Google Colab进行训练可大幅缩短训练时间。

### 训练样本数量和训练时间总结

| 数据集 | 训练样本数量 | 本地PC训练时长 (GTX 1660 Super) | Google Colab的训练时间 (NVIDIA Tesla K80) |
|---|---|---|---|
| Custom | 542 | 2.2 hours | 1.3 hours |
|  | 240 | 1 hour | 42 minutes |
| Pascal VOC 2012 | 17112 | 83 hours | 15 hours |
| Microsoft COCO 2017 | 121408 | 750 hours | 125 hours |

## 预训练模型的比较

可以从以下表格中了解更多关于预训练模型的信息。在我们的场景中，我们在**Google Colab平台**上训练了模型，并在**Jetson Nano**和**Jetson Xavier NX**上进行了推理，并使用**YOLOv5n6**作为预训练模型。

| 模型 | size (pixels) | mAPval 0.5:0.95 | mAPval 0.5 | Speed CPU b1 (ms) | Speed V100 b1 (ms) | Speed V100 b32 (ms) | Speed Jetson  Nano FP16 (ms) | Speed Jetson Xavier NX FP16 (ms) | params (M) | FLOPs @640 (B) |
|---|---|---|---|---|---|---|---|---|---|---|
| YOLOv5n | 640 | 28.0 | 45.7 | 45 | 6.3 | 0.6 |  |  | 1.9 | 4.5 |
| YOLOv5s | 640 | 37.4 | 56.8 | 98 | 6.4 | 0.9 |  |  | 7.2 | 16.5 |
| YOLOv5m | 640 | 45.4 | 64.1 | 224 | 8.2 | 1.7 |  |  | 21.2 | 49.0 |
| YOLOv5l | 640 | 49.0 | 67.3 | 430 | 10.1 | 2.7 |  |  | 46.5 | 109.1 |
| YOLOv5x | 640 | 50.7 | 68.9 | 766 | 12.1 | 4.8 |  |  | 86.7 | 205.7 |
| **YOLOv5n6** | **640** | **71.7** | **95.5** | **153** | **8.1** | **2.1** | **47** | **20** | **3.1** | **4.6** |
| YOLOv5s6 | 1280 | 44.8 | 63.7 | 385 | 8.2 | 3.6 |  |  | 12.6 | 16.8 |
| YOLOv5m6 | 1280 | 51.3 | 69.3 | 887 | 11.1 | 6.8 |  |  | 35.7 | 50.0 |
| YOLOv5l6 | 1280 | 53.7 | 71.3 | 1784 | 15.8 | 10.5 |  |  | 76.8 | 111.4 |
| YOLOv5x6 + [TTA] | 1280 1536 | 55.0 55.8 | 72.7 72.7 | 3136 - | 26.2 - | 19.4 - |  |  | 140.7 - | 209.8 - |

> 参考: [YOLOv5 GitHub](https://github.com/ultralytics/yolov5)

## 额外应用

由于上述所解释的所有步骤对于任何类型的目标检测应用程序都是通用的，因此您只需要针对您自己的目标检测应用程序更改数据集即可！

### 路标识别

这里我们使用了来自Roboflow的[路标数据集](https://universe.roboflow.com/usmanchaudhry622-gmail-com/traffic-and-road-signs/1) 并在NVIDIA Jetson上进行了推断！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/thumb-2.png" /></div>

### 野火烟雾检测

我们在这里使用了来自Roboflow的 [野火烟雾数据集](https://public.roboflow.com/object-detection/wildfire-smoke) ，并在NVIDIA Jetson上进行了推断！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Roboflow/20.jpg" /></div>

## 来源：

- **[网页]** [YOLOv5 Documentation](https://docs.ultralytics.com)

- **[网页]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[网页]** [Roboflow Documentation](https://docs.roboflow.com)

## 技术支持与项目讨论

非常感谢您选择我们的产品！我们提供不同的支持方式，以确保您在使用我们的产品时拥有尽可能流畅的体验。我们提供多种沟通渠道，以适应不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
