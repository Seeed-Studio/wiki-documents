---
description: 指导如何从自有数据集、标注、训练和部署到 Grove Vision AI V2。
title: 从数据集到 Grove Vision AI V2 的模型部署
keywords:
- SSCMA
- Vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_vision_ai_v2_sscma
last_update:
  date: 03/12/2024
  author: Citric
---

# 从数据集到 Grove Vision AI V2 的模型部署

欢迎来到这篇全面的教程，我们将带您踏上将数据集转化为可部署于 Grove Vision AI V2 的完整模型的旅程。在本指南中，我们将从使用 Roboflow 的直观工具标注数据集开始，逐步进入在 Google Colab 协作环境中进行模型训练。

接下来，我们将通过 SenseCraft Model Assistant 部署训练好的模型，这一过程将弥合训练与实际应用之间的差距。通过本教程的学习，您不仅能够在 Grove Vision AI V2 上运行自定义模型，还能掌握解读和利用模型预测结果的知识。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/0.png" style={{width:1000, height:'auto'}}/></div>

从数据集到模型落地，我们将经历以下主要步骤：

1. [标注数据集](#labelled-datasets) —— 本章重点介绍如何获取可训练成模型的数据集。主要有两种方式：第一种是使用 Roboflow 社区提供的标注数据集；第二种是使用您自己场景特定的图像作为数据集，但需要您手动进行标注。

2. [训练数据集导出模型](#training-dataset-exported-model) —— 本章重点介绍如何基于第一步获得的数据集，通过 Google Colab 平台训练以获得可部署到 Grove Vision AI V2 的模型。

3. [通过 SenseCraft Model Assistant 上传模型](#upload-models-via-sensecraft-model-assistant) —— 本节描述如何使用导出的模型文件，通过 SenseCraft Model Assistant 将模型上传到 Grove Vision AI V2。

4. [模型的常见协议和应用](#common-protocols-and-applications-of-the-model) —— 最后，我们将介绍 SenseCraft AI 的统一数据通信格式，以便您充分利用设备和模型的潜力，制作适合您场景的应用。

让我们开始这段激动人心的旅程，将您的数据赋予生命。

## 所需材料

在开始之前，您可能需要准备以下设备。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV 摄像头模块<br />适用于 Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

这是推荐的设备型号，也是本教程中将使用的所有硬件。当然，如果您手头没有 OV5647 摄像头，也没有 XIAO，您可以使用任何其他 CSI Raspberry Pi 摄像头，以及任何支持 UART 的 Arduino 开发板。

## 标注数据集

在本节内容中，我们允许用户自由选择他们拥有的数据集。这包括社区提供的场景照片或用户自己的照片。本教程将介绍两种主要场景。第一种是使用 [Roboflow](https://roboflow.com/about) 社区提供的现成标注数据集。第二种是使用您拍摄的高分辨率图像并标注数据集。请根据您的需求阅读以下不同的教程。

### 第一步：创建一个免费的 Roboflow 账户

Roboflow 提供了标注、训练和部署计算机视觉解决方案所需的一切。首先，创建一个 [免费的 Roboflow 账户](https://app.roboflow.com/?ref=blog.roboflow.com)。

在查看并接受服务条款后，您将被要求在两个计划之间进行选择：公共计划（Public Plan）和入门计划（Starter Plan）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/1.png" style={{width:800, height:'auto'}}/></div>

接下来，您将被要求邀请协作者加入您的工作空间。这些协作者可以帮助您标注图像或管理工作空间中的视觉项目。一旦您邀请了协作者（如果需要），您就可以创建一个项目。

### 选择如何获取您的数据集

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="通过 Roboflow 下载标注数据集" label="通过 Roboflow 下载标注数据集">

从 Roboflow 中选择一个适合直接使用的数据集需要确定最符合您项目需求的数据集，考虑数据集的大小、质量、相关性和许可等方面。

**第二步：探索 Roboflow Universe**

Roboflow Universe 是一个可以找到各种数据集的平台。访问 Roboflow Universe 网站并探索可用的数据集。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/2.png" style={{width:1000, height:'auto'}}/></div>

Roboflow 提供了筛选器和搜索功能，帮助您找到数据集。您可以根据领域、类别数量、标注类型等筛选数据集。利用这些筛选器缩小符合您标准的数据集范围。

**第三步：评估单个数据集**

一旦您有了一个候选列表，请逐个评估每个数据集。检查以下内容：

**标注质量**：检查标注是否准确且一致。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/3.png" style={{width:1000, height:'auto'}}/></div>

**数据集大小**：确保数据集足够大以便您的模型有效学习，但不要过大以至于难以处理。

**类别平衡**：数据集应尽可能在每个类别的样本数量上保持平衡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/4.png" style={{width:1000, height:'auto'}}/></div>

**许可**：查看数据集的许可，确保您可以按预期使用它。

**文档**：查看数据集附带的任何文档或元数据，以更好地了解其内容以及已应用的任何预处理步骤。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/5.png" style={{width:1000, height:'auto'}}/></div>

:::提示
您可以通过 **[Roboflow 健康检查](https://docs.roboflow.com/datasets/dataset-health-check)** 了解模型的状况。
:::

**第四步：下载样本**

如果您找到了合适的数据集，您可以选择下载并使用它。Roboflow 通常允许您下载数据集的样本。测试样本以查看它是否能很好地集成到您的工作流程中，以及是否适合您的模型。

为了继续后续步骤，我们建议您以以下格式导出数据集。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/6.png" style={{width:1000, height:'auto'}}/></div>

您将获得该模型的 **原始 URL**，请妥善保存，我们将在稍后的模型训练步骤中使用该链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/26.png" style={{width:1000, height:'auto'}}/></div>

:::注意
如果您是第一次使用 Roboflow，并且对数据集的选择完全没有判断力，那么使用数据集训练模型以进行初步测试以查看性能可能是必要的。这可以帮助您评估数据集是否满足您的需求。

如果数据集满足您的需求并在初步测试中表现良好，那么它可能适合您的项目。否则，您可能需要继续搜索或考虑通过添加更多图像来扩展数据集。
:::

</TabItem>

<TabItem value="使用您自己的图像作为数据集" label="使用您自己的图像作为数据集">

在这里，我将使用石头-剪刀-布手势图像作为示例，指导您完成在 Roboflow 上上传图像、标注和导出数据集的任务。

:::注意
我们强烈建议您使用 Grove Vision AI V2 拍摄您的数据集照片，这对于 Grove Vision AI V2 是最佳选择。Grove Vision AI V2 当前正在开发拍摄功能部分，一旦完成，您就可以使用 Grove Vision AI V2 为您的数据集拍摄照片。在此之前，您可以使用其他设备拍摄的照片作为数据集。
:::

**第二步：创建新项目并上传图像**

登录 Roboflow 后，点击 **创建项目（Create Project）**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/7.png" style={{width:1000, height:'auto'}}/></div>

为你的项目命名（例如，“石头-剪刀-布”）。将你的项目定义为**目标检测**。将**输出标签**设置为**分类**（因为石头、剪刀和布是不同的类别）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/8.png" style={{width:1000, height:'auto'}}/></div>

现在是上传手势图片的时候了。

收集石头、剪刀和布手势的图片。确保图片具有多样化的背景和光照条件。在你的项目页面上，点击“添加图片”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/9.png" style={{width:1000, height:'auto'}}/></div>

你可以拖放图片或从电脑中选择它们。每种手势至少上传 100 张图片，以确保数据集的稳健性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/10.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**如何确定数据集大小？**

这通常取决于多种因素：任务模型、任务复杂性、数据纯度等。例如，人体检测模型涉及大量人群、范围广泛，任务更复杂，因此需要收集更多数据。
另一个例子是手势检测模型，它只需要检测“石头”、“剪刀”和“布”三种类型，类别较少，因此收集的数据集约为 500。
:::

**步骤 3：标注图片**

上传图片后，你需要通过标注手势来对图片进行标注。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/11.png" style={{width:1000, height:'auto'}}/></div>

Roboflow 提供三种不同的图片标注方式：自动标注、Roboflow 标注和手动标注。

- [**自动标注**](https://blog.roboflow.com/yolo-world-prompting-tips/): 使用一个通用的大型模型自动标注图片。
- **Roboflow 标注**: 与专业的人工标注团队合作。没有最低数量要求，无需提前承诺。边界框标注起价为 \$0.04，多边形标注起价为 \$0.08。
- **手动标注**: 你和你的团队自己标注图片。

以下是最常用的手动标注方法的说明。

点击“手动标注”按钮。Roboflow 将加载标注界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/12.png" style={{width:1000, height:'auto'}}/></div>

选择“开始标注”按钮。在每张图片中为手势绘制边界框。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/13.gif" style={{width:1000, height:'auto'}}/></div>

将每个边界框标注为“石头”、“剪刀”或“布”。

使用“>”按钮浏览数据集，重复每张图片的标注过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/14.gif" style={{width:1000, height:'auto'}}/></div>

**步骤 4：审查和编辑标注**

确保标注准确非常重要。

审查每张图片，确保边界框绘制正确且标注准确。如果发现任何错误，选择标注以调整边界框或更改标签。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/15.png" style={{width:1000, height:'auto'}}/></div>

:::tip
错误的标注会影响训练的整体性能，如果某些数据集未达到标注要求，可以将其丢弃。以下是一些错误标注的示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/16.png" style={{width:700, height:'auto'}}/></div>
:::

**步骤 5：生成并导出数据集**

所有图片标注完成后。在标注页面点击右上角的**将 x 张图片添加到数据集**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/17.png" style={{width:1000, height:'auto'}}/></div>

然后在新弹出的窗口底部点击**添加图片**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/18.png" style={{width:400, height:'auto'}}/></div>

点击左侧工具栏中的**生成**，并在第三步**预处理**中点击**继续**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/19.png" style={{width:1000, height:'auto'}}/></div>

在第四步**增强**中选择**Mosaic**，以提高模型的泛化能力。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/21.png" style={{width:1000, height:'auto'}}/></div>

在最后一步**创建**中，请根据 Roboflow 的提升合理计算图片数量；通常，图片越多，训练模型所需时间越长。然而，图片越多并不一定会使模型更准确，主要取决于数据集是否足够优质。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/22.png" style={{width:1000, height:'auto'}}/></div>

点击**创建**以创建数据集的一个版本。Roboflow 将处理图片和标注，生成一个版本化的数据集。数据集生成后，点击**导出数据集**。选择与模型训练要求匹配的**COCO**格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/23.png" style={{width:1000, height:'auto'}}/></div>

点击 **Continue**，然后您将获得该模型的原始 URL。请保存此链接，我们将在稍后的模型训练步骤中使用它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/27.png" style={{width:1000, height:'auto'}}/></div>

恭喜您！您已成功使用 Roboflow 上传、标注并导出用于石头剪刀布手势检测模型的数据集。现在，您的数据集已准备就绪，可以使用 Google Colab 等平台训练机器学习模型。

请记住，保持数据集的多样性和良好的标注可以提高未来模型的准确性。祝您模型训练顺利，并享受使用 AI 分类手势的乐趣！
</TabItem>
</Tabs>

## 训练数据集导出的模型

### 第 1 步：访问 Colab Notebook

您可以在 [SenseCraft Model Assistant 的 Wiki](https://wiki.seeedstudio.com/cn/ModelAssistant_Introduce_Quick_Start/#model-training) 上找到不同类型的 Google Colab 模型代码文件。如果您不确定应该选择哪个代码，可以根据您的模型类别（目标检测或图像分类）选择任意一个。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/24.png" style={{width:1000, height:'auto'}}/></div>

如果您尚未登录 Google 账户，请先登录以访问 Google Colab 的全部功能。

点击“Connect”以为您的 Colab 会话分配资源。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/25.png" style={{width:1000, height:'auto'}}/></div>

### 第 2 步：添加您的 Roboflow 数据集

在正式逐步运行代码块之前，我们需要修改代码内容，以便代码可以使用我们准备的数据集。我们需要提供一个 URL，将数据集直接下载到 Colab 文件系统中。

请在代码中找到 **Download the dataset** 部分。您将看到以下示例程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/28.png" style={{width:1000, height:'auto'}}/></div>

```sh
%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset 
!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip 
!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset
```

这段代码用于在 Google Colab 环境中创建目录、从 Roboflow 下载数据集并将其解压到新创建的目录中。以下是每行代码的功能解析：

1. `%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset`：
   - 该行创建一个名为 `Gesture_Detection_Swift-YOLO_192` 的新目录，以及一个名为 `dataset` 的子目录。`-p` 标志确保即使目录已存在也不会返回错误，并创建任何必要的父目录。

2. `!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip`：
   - 该行使用命令行工具 `wget` 从提供的 Roboflow URL 下载数据集。`-c` 标志允许在下载中断时继续下载。`-O` 标志指定下载文件的输出位置和文件名，在此例中为 `Gesture_Detection_Swift-YOLO_192/dataset.zip`。

3. `!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset`：
   - 该行使用 `unzip` 命令将 `dataset.zip` 文件的内容解压到之前创建的 `dataset` 目录中。`-q` 标志以静默模式运行 `unzip` 命令，抑制大部分输出消息。

要将此代码自定义为您自己的 Roboflow 模型链接：

1. 将 `Gesture_Detection_Swift-YOLO_192` 替换为您希望存储数据集的目标目录名称。

2. 将 Roboflow 数据集 URL (`https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t`) 替换为您导出数据集的链接（这是我们在 [标注数据集的最后一步](#choose-how-you-get-your-dataset) 中获得的原始 URL）。如果需要访问密钥，请确保包含 `key` 参数。

3. 如果需要，可以调整 `wget` 命令中的输出文件名（`-O your_directory/your_filename.zip`）。

4. 确保 `unzip` 命令中的输出目录与您创建的目录匹配，并且文件名与您在 `wget` 命令中设置的文件名一致。

:::caution
如果您更改了文件夹目录名称 `Gesture_Detection_Swift-YOLO_192`，请注意需要对代码中之前使用的其他目录名称进行相应更改，否则可能会发生错误！
:::

### 第 3 步：调整模型参数

下一步是调整模型的输入参数。请跳转到“Train a model with SSCMA”部分，您将看到以下代码片段。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/29.png" style={{width:1000, height:'auto'}}/></div>

```sh
!sscma.train configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
--cfg-options  \
    work_dir=Gesture_Detection_Swift-YOLO_192 \
    num_classes=3 \
    epochs=10  \
    height=192 \
    width=192 \
    data_root=Gesture_Detection_Swift-YOLO_192/dataset/ \
    load_from=Gesture_Detection_Swift-YOLO_192/pretrain.pth
```

此命令用于启动机器学习模型的训练过程，特别是使用 SSCMA（Seeed Studio SenseCraft Model Assistant）框架的 YOLO（You Only Look Once）模型。该命令包含多个选项来配置训练过程。以下是每部分的功能解析：

- `!sscma.train` 是在 SSCMA 框架中启动训练的命令。

- `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` 指定了训练的配置文件，其中包括模型架构、训练计划、数据增强策略等设置。

- `--cfg-options` 允许您通过命令行提供的配置覆盖 `.py` 文件中指定的默认配置。

- `work_dir=Gesture_Detection_Swift-YOLO_192` 设置了存储训练输出（如日志和保存的模型检查点）的目录。

- `num_classes=3` 指定了模型需要识别的类别数量。这取决于您的标签数量，例如“石头”、“剪刀”、“布”应该是三个标签。

- `epochs=10` 设置了训练周期（epoch）的数量。推荐值在 50 到 100 之间。

- `height=192` 和 `width=192` 设置了模型期望的输入图像的高度和宽度。

- `data_root=Gesture_Detection_Swift-YOLO_192/dataset/` 定义了训练数据所在目录的路径。

- `load_from=Gesture_Detection_Swift-YOLO_192/pretrain.pth` 提供了预训练模型检查点文件的路径，用于从该文件恢复训练或作为迁移学习的起点。

要自定义此命令以进行自己的训练，您可以：

1. 将 `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` 替换为您自己的配置文件路径（如果您有自定义配置文件）。

2. 更改 `work_dir` 为您希望保存训练输出的目录。

3. 更新 `num_classes` 以匹配您自己的数据集中的类别数量。这取决于您的标签数量，例如“石头”、“剪刀”、“布”应该是三个标签。

4. 根据您的模型需求调整 `epochs` 为所需的训练周期数量。推荐值在 50 到 100 之间。

5. 设置 `height` 和 `width` 以匹配您的模型输入图像的尺寸。

:::caution
我们不建议您在 Colab 代码中更改图像大小，因为此值是我们验证过的更适合数据集的大小，结合了尺寸、准确性和推理速度。如果您使用的不是此大小的数据集，并且可能需要更改图像大小以确保准确性，请不要超过 240x240。
:::

6. 更改 `data_root` 指向您的数据集根目录。

7. 如果您有不同的预训练模型文件，请相应更新 `load_from` 路径。

### 第四步：运行 Google Colab 代码

运行代码块的方法是点击代码块左上角的播放按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/30.png" style={{width:1000, height:'auto'}}/></div>

点击按钮后代码块将被执行，如果一切正常，您会看到代码块执行完成的标志——代码块左侧出现一个勾号。如下图所示是第一个代码块执行完成后的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/31.png" style={{width:1000, height:'auto'}}/></div>

如果您遇到与我在上图中相同的错误信息，请检查您是否使用了 **T4 GPU**，请 **不要使用 CPU** 来运行此项目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/32.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/33.png" style={{width:600, height:'auto'}}/></div>

然后，重新执行代码块。对于第一个代码块，如果一切正常，您会看到如下所示的结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/34.png" style={{width:1000, height:'auto'}}/></div>

接下来，依次执行从 **下载预训练模型权重文件** 到 **导出模型** 的所有代码块。并确保每个代码块都没有错误。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/36.png" style={{width:400, height:'auto'}}/></div>

:::note
代码中出现的警告可以忽略。
:::

### 第五步：评估模型

当您进入 **评估模型** 部分时，您可以选择执行 **评估 TFLite INT8 模型** 的代码块。

:::tip
评估 TFLite INT8 模型包括测试量化模型的预测结果与单独的测试数据集进行比较，以衡量其准确性和性能指标，评估量化对模型精度的影响，并分析其推理速度和资源使用情况，以确保满足边缘设备的部署约束。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/35.png" style={{width:1000, height:'auto'}}/></div>

以下是我执行此代码块后结果的有效部分：

```
 Average Precision  (AP) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.450
 Average Precision  (AP) @[ IoU=0.50      | area=   all | maxDets=100 ] = 0.929
 Average Precision  (AP) @[ IoU=0.75      | area=   all | maxDets=100 ] = 0.361
 Average Precision  (AP) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000
 Average Precision  (AP) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = 0.474
 Average Precision  (AP) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.456
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=  1 ] = 0.515
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets= 10 ] = 0.529
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.529
 Average Recall     (AR) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = 0.536
 Average Recall     (AR) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.537
03/19 01:38:43 - mmengine - INFO - bbox_mAP_copypaste: 0.450 0.929 0.361 -1.000 0.474 0.456
{'coco/bbox_mAP': 0.45, 'coco/bbox_mAP_50': 0.929, 'coco/bbox_mAP_75': 0.361, 'coco/bbox_mAP_s': -1.0, 'coco/bbox_mAP_m': 0.474, 'coco/bbox_mAP_l': 0.456}
FPS: 128.350449 fram/s
```

评估结果包括一系列平均精度（AP）和平均召回率（AR）指标，这些指标是针对不同的交并比（IoU）阈值和对象大小计算的，通常用于评估目标检测模型的性能。

1. **AP@[IoU=0.50:0.95 | area=all | maxDets=100] = 0.450**
   - 该分数表示模型在交并比阈值范围从 0.50 到 0.95（以 0.05 为增量）之间的平均精度。AP 为 0.450 表明模型在此范围内具有中等准确性。这是 COCO 数据集中常用的关键指标。

2. **AP@[IoU=0.50 | area=all | maxDets=100] = 0.929**
   - 在交并比阈值为 0.50 时，模型的平均精度达到 0.929，表明在较宽松的匹配标准下，模型能够非常准确地检测目标。

3. **AP@[IoU=0.75 | area=all | maxDets=100] = 0.361**
   - 在更严格的交并比阈值 0.75 下，模型的平均精度下降到 0.361，表明在更严格的匹配标准下性能有所下降。

4. **AP@[IoU=0.50:0.95 | area=small/medium/large | maxDets=100]**
   - 不同大小对象的 AP 分数有所不同。然而，小对象的 AP 为 -1.000，这可能表明缺乏小对象的评估数据或模型在小对象检测方面表现较差。中型和大型对象的 AP 分数分别为 0.474 和 0.456，表明模型在检测中型和大型对象方面表现相对较好。

5. **AR@[IoU=0.50:0.95 | area=all | maxDets=1/10/100]**
   - 在不同 `maxDets` 值下的平均召回率相当一致，范围从 0.515 到 0.529，表明模型能够可靠地检索大多数真实正例。

6. **FPS: 128.350449 帧/秒**
   - 模型在推理过程中以约 128.35 帧每秒的速度处理图像，表明其具有实时或接近实时应用的潜力。

总体而言，模型在交并比为 0.50 时表现出色，在交并比为 0.75 时表现中等。模型在检测中型和大型对象方面表现较好，但在检测小型对象时可能存在问题。此外，模型推理速度很快，适合需要快速处理的场景。如果应用中对小型对象的检测至关重要，则可能需要进一步优化模型或收集更多小型对象数据以提高性能。

### 第六步：下载导出的模型文件

在 **导出模型** 部分完成后，您将获得各种格式的模型文件，这些文件默认存储在 ModelAssistant 文件夹中。在本教程中，存储目录为 **Gesture_Detection_Swift_YOLO_192**。

:::提示
有时 Google Colab 不会自动刷新文件夹内容。在这种情况下，您可能需要通过点击左上角的刷新图标来刷新文件目录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/39.png" style={{width:500, height:'auto'}}/></div>

:::

在上述目录中，**.tflite** 模型文件可用于 XIAO ESP32S3 和 Grove Vision AI V2。对于 Grove Vision AI V2，请务必选择使用 **xxx_int8_vela.tflite** 格式的模型文件。其他格式无法被 Grove Vision AI V2 使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/38.png" style={{width:400, height:'auto'}}/></div>

找到模型文件后，请尽快将其下载到本地计算机，因为如果您长时间处于空闲状态，Google Colab 可能会清空您的存储目录！

通过这里的步骤，我们已经成功导出了可被 Grove Vision AI V2 支持的模型文件，接下来让我们将模型部署到设备上。

## 通过 SenseCraft Model Assistant 上传模型

### 第 7 步：将自定义模型上传到 Grove Vision AI V2

接下来，我们进入 Model Assistant 页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Model Assistant 🖱️</font></span></strong>
    </a>
</div>
<br></br>

请在选择 Grove Vision AI V2 后连接设备，然后在页面底部选择 **Upload Custom AI Model**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/40.png" style={{width:1000, height:'auto'}}/></div>

接下来，您需要准备模型名称、模型文件和标签。在这里需要特别强调标签 ID 的确定方式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/41.png" style={{width:500, height:'auto'}}/></div>

**如果您直接下载了 Roboflow 的数据集**

如果您直接下载了 Roboflow 的数据集，那么您可以在 Health Check 页面查看不同类别及其顺序。只需按照这里输入的顺序安装即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/42.png" style={{width:1000, height:'auto'}}/></div>

:::tip
您无需在 **ID:Object** 中填写数字，只需直接填写类别名称即可，图片中类别前的数字和冒号会自动添加。
:::

**如果您使用的是自定义数据集**

如果您使用的是自定义数据集，那么您可以在 Health Check 页面查看不同类别及其顺序。只需按照这里输入的顺序安装即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/43.png" style={{width:1000, height:'auto'}}/></div>

:::tip
您无需在 **ID:Object** 中填写数字，只需直接填写类别名称即可，图片中类别前的数字和冒号会自动添加。
:::

然后点击右下角的 Send Model。这可能需要大约 3 到 5 分钟。如果一切顺利，您可以在上方的 Model Name 和 Preview 窗口中看到您的模型结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/44.png" style={{width:1000, height:'auto'}}/></div>

到这里，恭喜您，您已经成功训练并部署了自己的模型。


## 模型的常见协议和应用

在上传自定义模型的过程中，除了我们可以看到的模型文件被上传之外，还需要将设备的固件传输到设备中。在设备的固件中，有一套既定的通信协议，规定了模型结果输出的格式，以及用户可以对模型进行的操作。

由于篇幅限制，我们不会在本 Wiki 中详细展开这些协议的具体内容，我们将在 Github 的文档中详细说明这一部分。如果您对更深入的开发感兴趣，请访问以下链接。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft Protocols</font></span></strong>
    </a>
</div>
<br></br>

如果您希望继续使用 Arduino 设备（例如 XIAO）来实现您的原型，请参考以下 Arduino 示例程序。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_software_support/#demo-1-use-xiao-to-get-recognition-results" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Arduino 示例🖱️</font></span></strong>
    </a>
</div>
<br></br>

## 故障排查

### 1. 如果我按照步骤操作，但模型结果不理想怎么办？

如果您的模型识别准确率不理想，可以通过以下方面进行诊断和改进：

1. **数据质量和数量**
   - **问题**：数据集可能过小或缺乏多样性，或者标注存在错误。
   - **解决方案**：增加训练数据的规模和多样性，并进行数据清理以纠正标注错误。

2. **训练过程**
   - **问题**：训练时间可能不足，或者学习率设置不当，导致模型无法有效学习。
   - **解决方案**：增加训练轮数，调整学习率及其他超参数，并实施早停机制以避免过拟合。

3. **类别不平衡**
   - **问题**：某些类别样本数量显著多于其他类别，导致模型偏向多数类别。
   - **解决方案**：使用类别权重、对少数类别进行过采样或对多数类别进行欠采样以平衡数据。

通过深入分析并实施针对性的改进措施，您可以逐步提升模型的准确性。请记住，在每次修改后使用验证集测试模型性能，以确保改进的有效性。

### 2. 为什么我按照 Wiki 的步骤操作后，在 SenseCraft 部署中看到 **Invoke failed** 消息？

如果您遇到 Invoke failed 错误，说明您训练的模型不符合设备使用要求。请重点关注以下几个方面：

1. 请检查您是否修改了 Colab 的图像尺寸。默认压缩尺寸为 **192x192**，Grove Vision AI V2 要求图像尺寸必须压缩为正方形，请勿使用非正方形尺寸进行压缩。同时请勿使用过大的尺寸 *(建议不超过 240x240)*。

2. Grove Vision AI V2 的模型文件必须以 **int8_vela.tflite** 为后缀。请勿使用其他格式的模型文件，包括 **int8.tflite**，该格式也不可用于 Grove Vision AI V2。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>