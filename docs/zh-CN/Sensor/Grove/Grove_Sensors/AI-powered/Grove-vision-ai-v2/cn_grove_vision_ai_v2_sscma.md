---
description: 从拥有的数据集、标注、训练和部署到 Grove Vision AI V2 的指导。
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

欢迎来到这个综合教程，我们将踏上将您的数据集转化为在 Grove Vision AI V2 上部署的完全功能模型的旅程。在本指南中，我们将使用 Roboflow 的直观工具完成数据集标注的初始步骤，然后在 Google Colab 的协作环境中进行模型训练。

然后我们将使用 SenseCraft Model Assistant 部署我们训练好的模型，这个过程连接了训练和实际应用之间的桥梁。在本教程结束时，您不仅将拥有一个在 Grove Vision AI V2 上运行的自定义模型，还将具备解释和利用模型预测结果的知识。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/0.png" style={{width:1000, height:'auto'}}/></div>


从数据集到模型落地，我们将有以下主要步骤。

1. [标注数据集](#标注数据集) —— 本章重点介绍如何获得可以训练成模型的数据集。主要有两种方式。第一种是使用 Roboflow 社区提供的标注数据集，另一种是使用您自己的特定场景图像作为数据集，但您需要手动进行标注。

2. [训练数据集导出模型](#训练数据集导出模型) —— 本章重点介绍如何基于第一步获得的数据集，使用 Google Colab 平台训练得到可以部署到 Grove Vision AI V2 的模型。

3. [通过 SenseCraft Model Assistant 上传模型](#通过-SenseCraft-Model-Assistant-上传模型) —— 本节描述如何使用导出的模型文件，通过 SenseCraft Model Assistant 将模型上传到 Grove Vision AI V2。

4. [模型的通用协议和应用](#模型的通用协议和应用) —— 最后，我们将介绍 SenseCraft AI 的统一数据通信格式，以便您可以利用设备和模型的最大潜力来制作适合您场景的应用程序。

所以让我们深入了解并开始将您的数据变为现实的激动人心的过程。

## 所需材料

在开始之前，您可能需要准备以下设备。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV 相机模块<br />适用于 Raspberry Pi 3B+4B</th>
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

这是推荐的设备型号，也是本教程中将使用的所有硬件。当然，如果您手头没有 OV5647 相机，也没有 XIAO，您可以使用任何其他 CSI Raspberry Pi 相机，任何支持 UART 的 Arduino 兼容开发板都可以。


## 标注数据集

在本节内容中，我们允许用户自由选择他们拥有的数据集。这包括社区的或他们自己的场景照片。本教程将介绍两种主要场景。第一种是使用 [Roboflow](https://roboflow.com/about) 社区提供的现成标注数据集。另一种是使用您拍摄的高分辨率图像并标注数据集。请根据您的需要阅读下面的不同教程。

### 步骤 1：创建免费的 Roboflow 账户

Roboflow 提供您标注、训练和部署计算机视觉解决方案所需的一切。要开始，请创建一个[免费的 Roboflow 账户](https://app.roboflow.com/?ref=blog.roboflow.com)。

在审查并接受服务条款后，您将被要求在两个计划中选择一个：Public Plan 和 Starter Plan。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/1.png" style={{width:800, height:'auto'}}/></div>


然后，您将被要求邀请协作者到您的工作空间。这些协作者可以帮助您标注图像或管理工作空间中的视觉项目。一旦您邀请了人员到您的工作空间（如果您想要的话），您就可以创建一个项目。


### 选择如何获取您的数据集


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Download Labelled datasets using Roboflow" label="使用 Roboflow 下载标注数据集">

从 Roboflow 选择合适的数据集直接使用涉及确定最符合您项目要求的数据集，考虑数据集大小、质量、相关性和许可等方面。

**步骤 2. 探索 Roboflow Universe**

Roboflow Universe 是一个您可以找到各种数据集的平台。访问 Roboflow Universe 网站并探索可用的数据集。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/2.png" style={{width:1000, height:'auto'}}/></div>

Roboflow 提供过滤器和搜索功能来帮助您找到数据集。您可以按领域、类别数量、标注类型等过滤数据集。利用这些过滤器来缩小符合您标准的数据集范围。

**步骤 3. 评估单个数据集**

一旦您有了候选列表，请单独评估每个数据集。查看：

**标注质量**：检查标注是否准确和一致。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/3.png" style={{width:1000, height:'auto'}}/></div>

**数据集大小**：确保数据集足够大以便您的模型有效学习，但不要太大而无法处理。

**类别平衡**：数据集理想情况下应该为每个类别提供平衡数量的示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/4.png" style={{width:1000, height:'auto'}}/></div>

**许可证**：查看数据集的许可证以确保您可以按预期使用它。

**文档**：查看数据集附带的任何文档或元数据，以更好地了解其内容和已应用的任何预处理步骤。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/5.png" style={{width:1000, height:'auto'}}/></div>

:::tip
您可以通过 **[Roboflow Health Check](https://docs.roboflow.com/datasets/dataset-health-check)** 了解模型的状况。
:::

**步骤 4. 下载样本**

如果您找到了您选择的数据集，那么您可以选择下载并使用它。Roboflow 通常允许您下载数据集的样本。测试样本以查看它是否与您的工作流程良好集成，以及是否适合您的模型。

为了继续后续步骤，我们建议您按照下面显示的格式导出数据集。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/6.png" style={{width:1000, height:'auto'}}/></div>

然后您将获得此模型的 **Raw URL**，请妥善保存，我们稍后在模型训练步骤中会使用该链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/26.png" style={{width:1000, height:'auto'}}/></div>


:::caution
如果您是第一次使用 Roboflow 并且对数据集的选择完全没有判断，使用数据集训练模型进行初始测试以查看性能的步骤可能是必不可少的。这可以帮助您评估数据集是否满足您的要求。

如果数据集满足您的要求并在初始测试中表现良好，那么它很可能适合您的项目。否则，您可能需要继续搜索或考虑用更多图像扩展数据集。
:::

</TabItem>

<TabItem value="Use your own images as a dataset" label="使用您自己的图像作为数据集">

在这里，我将使用石头剪刀布手势图像作为演示，指导您完成在 Roboflow 上传图像、标注和导出数据集的任务。

:::note
我们强烈建议您使用 Grove Vision AI V2 拍摄数据集照片，这对 Grove Vision AI V2 来说是最佳选择。Grove Vision AI V2 目前正在开发拍照功能部分，一旦完成，您就可以使用 Grove Vision AI V2 为您的数据集拍摄照片。在此之前，您可以使用其他设备拍摄的照片作为数据集。
:::

**步骤 2. 创建新项目并上传图像**

登录 Roboflow 后，点击 **Create Project**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/7.png" style={{width:1000, height:'auto'}}/></div>

为您的项目命名（例如，"Rock-Paper-Scissors"）。将您的项目定义为 **Object Detection**。将 **Output Labels** 设置为 **Categorical**（因为石头、布、剪刀是不同的类别）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/8.png" style={{width:1000, height:'auto'}}/></div>

现在是时候上传您的手势图像了。

收集石头、布和剪刀手势的图像。确保您有各种背景和光照条件。在您的项目页面上，点击 "Add Images"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/9.png" style={{width:1000, height:'auto'}}/></div>

您可以拖放图像或从计算机中选择它们。为了构建强大的数据集，请为每个手势上传至少 100 张图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/10.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**数据集大小如何确定？**

这通常取决于多种因素：任务模型、任务复杂性、数据纯度等等。例如，人体检测模型涉及大量人员、范围广泛，任务更复杂，因此需要收集更多数据。
另一个例子是手势检测模型，它只需要检测"石头"、"剪刀"和"布"三种类型，所需类别较少，因此收集的数据集大约为 500 张。
:::

**步骤 3：标注图像**

上传后，您需要通过标记手势来标注图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/11.png" style={{width:1000, height:'auto'}}/></div>

Roboflow 提供三种不同的图像标记方式：Auto Label、Roboflow Labeling 和 Manual Labeling。

- [**Auto Label**](https://blog.roboflow.com/yolo-world-prompting-tips/)：使用大型通用模型自动标记图像。
- **Roboflow Labeling**：与专业的人工标记团队合作。无最小数量要求。无预付承诺。边界框标注起价 \$0.04，多边形标注起价 \$0.08。
- **Manual Labeling**：您和您的团队自己标记图像。

以下描述最常用的手动标记方法。

点击 "Manual Labeling" 按钮。Roboflow 将加载标注界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/12.png" style={{width:1000, height:'auto'}}/></div>

选择 "Start Annotating" 按钮。在每张图像中围绕手势绘制边界框。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/13.gif" style={{width:1000, height:'auto'}}/></div>

将每个边界框标记为 "Rock"、"Paper" 或 "Scissors"。

使用 ">" 按钮浏览您的数据集，为每张图像重复标注过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/14.gif" style={{width:1000, height:'auto'}}/></div>


**步骤 4：审查和编辑标注**

确保标注准确性至关重要。

审查每张图像以确保边界框正确绘制和标记。如果发现任何错误，选择标注以调整边界框或更改标签。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/15.png" style={{width:1000, height:'auto'}}/></div>

:::tip
错误的标记会影响训练的整体性能，如果某些数据集不符合标记要求，可以丢弃。以下是一些错误标记的示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/16.png" style={{width:700, height:'auto'}}/></div>
:::

**步骤 5：生成和导出数据集**

所有图像标注完成后。在 Annotate 中点击右上角的 **Add x images to Dataset** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/17.png" style={{width:1000, height:'auto'}}/></div>

然后点击新弹出窗口底部的 **Add Images** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/18.png" style={{width:400, height:'auto'}}/></div>

点击左侧工具栏中的 **Generate**，然后在第三个 **Preprocessing** 步骤中点击 **Continue**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/19.png" style={{width:1000, height:'auto'}}/></div>

在步骤 4 的 **Augmentation** 中，选择 **Mosaic**，这可以增加泛化能力。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/21.png" style={{width:1000, height:'auto'}}/></div>

在最后的 **Create** 步骤中，请根据 Roboflow 的提升合理计算图像数量；一般来说，图像越多，训练模型所需的时间就越长。然而，图像越多并不一定会使模型更准确，这主要取决于数据集是否足够好。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/22.png" style={{width:1000, height:'auto'}}/></div>

点击 **Create** 创建数据集版本。Roboflow 将处理图像和标注，创建版本化数据集。数据集生成后，点击 **Export Dataset**。选择符合您将要训练的模型要求的 **COCO** 格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/23.png" style={{width:1000, height:'auto'}}/></div>

点击 **Continue**，然后您将获得此模型的 Raw URL。保存它，我们稍后在模型训练步骤中会使用这个链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/27.png" style={{width:1000, height:'auto'}}/></div>


恭喜！您已成功使用 Roboflow 上传、标注和导出了石头剪刀布手势检测模型的数据集。数据集准备就绪后，您可以继续使用 Google Colab 等平台训练机器学习模型。

记住保持数据集的多样性和良好标注，以提高未来模型的准确性。祝您模型训练好运，享受用 AI 的力量分类手势的乐趣！
</TabItem>
</Tabs>


## 训练数据集导出模型



### 步骤 1. 访问 Colab Notebook

您可以在 [SenseCraft Model Assistant 的 Wiki](https://wiki.seeedstudio.com/cn/ModelAssistant_Introduce_Quick_Start/#model-training) 上找到不同类型的模型 Google Colab 代码文件。如果您不知道应该选择哪个代码，您可以选择其中任何一个，这取决于您的模型类别（目标检测或图像分类）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/24.png" style={{width:1000, height:'auto'}}/></div>

如果您尚未登录 Google 账户，请登录以访问 Google Colab 的完整功能。

点击 "Connect" 为您的 Colab 会话分配资源。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/25.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 添加您的 Roboflow 数据集

在正式逐步运行代码块之前，我们需要修改代码内容，以便代码可以使用我们准备的数据集。我们必须提供一个 URL 来直接将数据集下载到 Colab 文件系统中。

请在代码中找到 **Download the dataset** 部分。您将看到以下示例程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/28.png" style={{width:1000, height:'auto'}}/></div>

```sh
%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset 
!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip 
!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset
```

这段代码用于创建目录、从 Roboflow 下载数据集，并在 Google Colab 环境中将其解压到新创建的目录中。以下是每行代码的功能分解：

1. `%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset`：
   - 这行代码创建一个名为 `Gesture_Detection_Swift-YOLO_192` 的新目录和一个名为 `dataset` 的子目录。`-p` 标志确保如果目录已存在，命令不会返回错误，并创建任何必要的父目录。

2. `!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip`：
   - 这行使用 `wget`，一个命令行工具，从提供的 Roboflow URL 下载数据集。`-c` 标志允许在下载中断时恢复下载。`-O` 标志指定下载文件的输出位置和文件名，在这种情况下是 `Gesture_Detection_Swift-YOLO_192/dataset.zip`。

3. `!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset`:
   - 这行使用 `unzip` 命令将 `dataset.zip` 文件的内容解压到之前创建的 `dataset` 目录中。`-q` 标志以静默模式运行 `unzip` 命令，抑制大部分输出消息。

要为您自己的 Roboflow 模型链接自定义此代码：

1. 将 `Gesture_Detection_Swift-YOLO_192` 替换为您想要存储数据集的所需目录名称。

2. 将 Roboflow 数据集 URL（`https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t`）替换为您导出数据集的链接（这是我们在[标记数据集的最后一步](#choose-how-you-get-your-dataset)中获得的原始 URL）。如果需要访问权限，请确保包含 key 参数。

3. 如有必要，调整 `wget` 命令中的输出文件名（`-O your_directory/your_filename.zip`）。

4. 确保 `unzip` 命令中的输出目录与您创建的目录匹配，文件名与您在 `wget` 命令中设置的文件名匹配。

:::caution
如果您更改文件夹目录 `Gesture_Detection_Swift-YOLO_192` 的名称，请注意您需要对更改前代码中使用的其他目录名称进行更改，否则可能会出现错误！
:::

### 步骤 3. 调整模型参数

下一步是调整模型的输入参数。请跳转到使用 SSCMA 训练模型部分，您将看到以下代码片段。

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


此命令用于启动机器学习模型的训练过程，特别是使用 SSCMA（Seeed Studio SenseCraft Model Assistant）框架的 YOLO（You Only Look Once）模型。该命令包含各种选项来配置训练过程。以下是每个部分的作用：

- `!sscma.train` 是在 SSCMA 框架内启动训练的命令。

- `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` 指定训练的配置文件，其中包括模型架构、训练计划、数据增强策略等设置。

- `--cfg-options` 允许您用命令行中提供的配置覆盖 `.py` 文件中指定的默认配置。

- `work_dir=Gesture_Detection_Swift-YOLO_192` 设置存储训练输出（如日志和保存的模型检查点）的目录。

- `num_classes=3` 指定模型应训练识别的类别数量。这取决于您拥有的标签数量，例如石头、布、剪刀应该是三个标签。

- `epochs=10` 设置要运行的训练周期（epochs）数量。推荐值在 50 到 100 之间。

- `height=192` 和 `width=192` 设置模型期望的输入图像的高度和宽度。

- `data_root=Gesture_Detection_Swift-YOLO_192/dataset/` 定义训练数据所在目录的路径。

- `load_from=Gesture_Detection_Swift-YOLO_192/pretrain.pth` 提供预训练模型检查点文件的路径，训练应从该文件恢复或将其用作迁移学习的起点。

要为您自己的训练自定义此命令，您需要：

1. 如果您有自定义配置文件，请将 `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` 替换为您自己配置文件的路径。

2. 将 `work_dir` 更改为您希望保存训练输出的目录。

3. 更新 `num_classes` 以匹配您自己数据集中的类别数量。这取决于您拥有的标签数量，例如石头、布、剪刀应该是三个标签。

4. 将 `epochs` 调整为您模型所需的训练周期数。推荐值在 50 到 100 之间。

5. 设置 `height` 和 `width` 以匹配您模型输入图像的尺寸。

:::caution
我们真的不建议您在 Colab 代码中更改图像大小，因为这个值是我们验证过的更合适的数据集大小，它是大小、准确性和推理速度的组合。如果您使用的数据集不是这个大小，并且您可能想要考虑更改图像大小以确保准确性，那么请不要超过 240x240。
:::

6. 将 `data_root` 更改为指向您数据集的根目录。

7. 如果您有不同的预训练模型文件，请相应地更新 `load_from` 路径。

### 步骤 4. 运行 Google Colab 代码

运行代码块的方法是点击代码块左上角的播放按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/30.png" style={{width:1000, height:'auto'}}/></div>

点击按钮后代码块将被执行，如果一切顺利，您将看到代码块执行完成的标志 - 块左侧出现一个勾号符号。如图所示是第一个代码块执行完成后的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/31.png" style={{width:1000, height:'auto'}}/></div>

如果您遇到与我在上图中相同的错误消息，请检查您是否使用的是 **T4 GPU**，请**不要使用 CPU** 进行此项目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/32.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/33.png" style={{width:600, height:'auto'}}/></div>

然后，重新执行代码块。对于第一个代码块，如果一切顺利，您将看到如下所示的结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/34.png" style={{width:1000, height:'auto'}}/></div>

接下来，执行从 **Download the pretrain model weights file** 到 **Export the model** 的所有代码块。请确保每个代码块都没有错误。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/36.png" style={{width:400, height:'auto'}}/></div>


:::note
代码中出现的警告可以忽略。
:::

### 步骤 5. 评估模型

当您到达 **Evaluate the model** 部分时，您可以选择执行 **Evaluate the TFLite INT8 model** 代码块。

:::tip
评估 TFLite INT8 模型涉及针对单独的测试数据集测试量化模型的预测以测量其准确性和性能指标，评估量化对模型精度的影响，并分析其推理速度和资源使用情况以确保其满足边缘设备的部署约束。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/35.png" style={{width:1000, height:'auto'}}/></div>

以下片段是我执行此代码块后结果的有效部分。

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

评估结果包括一系列平均精度（AP）和平均召回率（AR）指标，针对不同的交并比（IoU）阈值和对象大小计算，这些指标通常用于评估目标检测模型的性能。

1. **AP@[IoU=0.50:0.95 | area=all | maxDets=100] = 0.450**
   - 这个分数是模型在 IoU 阈值范围从 0.50 到 0.95（以 0.05 递增）的平均精度。AP 为 0.450 表明您的模型在此范围内具有中等准确性。这是 COCO 数据集常用的关键指标。

2. **AP@[IoU=0.50 | area=all | maxDets=100] = 0.929**
   - 在 IoU 阈值为 0.50 时，模型达到了 0.929 的高平均精度，表明它在更宽松的匹配标准下非常准确地检测对象。

3. **AP@[IoU=0.75 | area=all | maxDets=100] = 0.361**
   - 在更严格的 IoU 阈值 0.75 下，模型的平均精度下降到 0.361，表明在更严格的匹配标准下性能有所下降。

4. **AP@[IoU=0.50:0.95 | area=small/medium/large | maxDets=100]**
   - 不同大小物体的 AP 分数有所不同。然而，小物体的 AP 为 -1.000，这可能表明缺乏小物体的评估数据或模型在小物体检测上表现不佳。中等和大型物体的 AP 分数分别为 0.474 和 0.456，表明模型对中等和大型物体的检测相对较好。

5. **AR@[IoU=0.50:0.95 | area=all | maxDets=1/10/100]**
   - 不同 `maxDets` 值的平均召回率相当一致，范围从 0.515 到 0.529，表明模型能够可靠地检索到大部分真正的正例实例。

6. **FPS: 128.350449 fram/s**
   - 模型在推理过程中以大约每秒 128.35 帧的非常快的速度处理图像，表明具有实时或近实时应用的潜力。

总体而言，模型在 IoU 为 0.50 时表现优异，在 IoU 为 0.75 时表现中等。它在中等和大型物体检测方面表现更好，但在检测小物体方面可能存在问题。此外，模型推理速度很快，适合需要快速处理的场景。如果在应用中检测小物体至关重要，我们可能需要进一步优化模型或收集更多小物体数据来提高性能。

### 步骤 6. 下载导出的模型文件

在 **Export the model** 部分之后，您将获得各种格式的模型文件，这些文件默认存储在 ModelAssistant 文件夹中。在本教程中，存储目录是 **Gesture_Detection_Swift_YOLO_192**。

:::tip
有时 Google Colab 不会自动刷新文件夹的内容。在这种情况下，您可能需要通过点击左上角的刷新图标来刷新文件目录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/39.png" style={{width:500, height:'auto'}}/></div>

:::

在上述目录中，**.tflite** 模型文件可用于 XIAO ESP32S3 和 Grove Vision AI V2。对于 Grove Vision AI V2，请确保选择使用 **xxx_int8_vela.tflite** 格式的模型文件。Grove Vision AI V2 不能使用其他格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/38.png" style={{width:400, height:'auto'}}/></div>

找到模型文件后，请尽快将它们下载到您的计算机本地，如果您长时间空闲，Google Colab 可能会清空您的存储目录！

通过这里执行的步骤，我们已经成功导出了可以被 Grove Vision AI V2 支持的模型文件，接下来让我们将模型部署到设备上。


## 通过 SenseCraft Model Assistant 上传模型

### 步骤 7. 将自定义模型上传到 Grove Vision AI V2

接下来，我们来到 Model Assistant 页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Model Assistant 🖱️</font></span></strong>
    </a>
</div>
<br></br>

请在选择 Grove Vision AI V2 后连接设备，然后在页面底部选择 **Upload Custom AI Model**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/40.png" style={{width:1000, height:'auto'}}/></div>

然后您需要准备模型的名称、模型文件和标签。我想在这里强调标签 ID 这个元素是如何确定的。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/41.png" style={{width:500, height:'auto'}}/></div>

**如果您直接下载 Roboflow 的数据集**

如果您直接下载了 Roboflow 的数据集，那么您可以在 Health Check 页面上查看不同类别及其顺序。只需按照这里输入的顺序安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/42.png" style={{width:1000, height:'auto'}}/></div>


:::tip
您不需要在 **ID:Object** 中填写数字，只需直接填写类别名称，图像上类别前面的数字和冒号是自动添加的。
:::

**如果您使用自定义数据集**

如果您使用自定义数据集，那么您可以在 Health Check 页面上查看不同类别及其顺序。只需按照这里输入的顺序安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/43.png" style={{width:1000, height:'auto'}}/></div>

:::tip
您不需要在 **ID:Object** 中填写数字，只需直接填写类别名称，图像上类别前面的数字和冒号是自动添加的。
:::

然后点击右下角的 Send Model。这可能需要大约 3 到 5 分钟左右。如果一切顺利，那么您可以在上面的 Model Name 和 Preview 窗口中看到您的模型结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/44.png" style={{width:1000, height:'auto'}}/></div>

做到这一步，恭喜您，您已经能够成功训练和部署自己的模型了。


## 模型的常见协议和应用

在上传自定义模型的过程中，除了我们可以可视化上传的模型文件外，还有设备的固件需要传输到设备。在设备的固件中，有一套既定的通信协议，指定模型结果输出的格式，以及用户可以对模型做什么。

由于篇幅问题，我们不会在这个 wiki 中展开这些协议的具体内容，我们将通过 Github 上的文档详细介绍这一部分。如果您对更深入的开发感兴趣，请前往这里。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft 协议</font></span></strong>
    </a>
</div>
<br></br>

如果您想继续使用 XIAO 等 Arduino 设备来实现您的原型到真实产品，请参考这里的 Arduino 示例程序。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_software_support/#demo-1-use-xiao-to-get-recognition-results" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Arduino 示例🖱️</font></span></strong>
    </a>
</div>
<br></br>

如果您是初学者并想快速构建自己的模型，请参考这里的 SenseCraft AI 模型训练示例。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft 训练</font></span></strong>
    </a>
</div>
<br></br>


## 故障排除

### 1. 如果我按照步骤操作但最终得到的模型结果不令人满意怎么办？

如果您的模型识别精度不令人满意，您可以通过考虑以下方面来诊断和改进：

1. **数据质量和数量**
   - **问题**：数据集可能太小或缺乏多样性，或者标注中可能存在不准确性。
   - **解决方案**：增加训练数据的大小和多样性，并进行数据清理以纠正任何标注错误。

2. **训练过程**
   - **问题**：训练时间可能不足，或者学习率可能设置不当，阻止模型有效学习。
   - **解决方案**：增加训练轮数，调整学习率和其他超参数，并实施早停以避免过拟合。

3. **类别不平衡**
   - **问题**：某些类别的样本数量明显多于其他类别，导致模型偏向多数类别。
   - **解决方案**：使用类别权重，对少数类别进行过采样，或对多数类别进行欠采样以平衡数据。

通过彻底分析和实施有针对性的改进，您可以逐步提高模型的准确性。记住在每次修改后使用验证集测试模型的性能，以确保改进的有效性。

### 2. 为什么我按照 Wiki 中的步骤操作后在 SenseCraft 部署中看到 **Invoke failed** 消息？

如果您遇到 Invoke failed，那么您训练的模型不符合与设备一起使用的要求。请关注以下方面。

1. 请检查您是否修改了 Colab 的图像大小。默认压缩大小是 **192x192**，Grove Vision AI V2 要求图像大小压缩为正方形，请不要使用非正方形大小进行压缩。也不要使用太大的尺寸*（建议不超过 240x240）*。

2. Grove Vision AI V2 的模型文件必须以 **int8_vela.tflite** 为后缀。请不要使用其他格式的模型文件。这包括 **int8.tflite，它也不适用于** Grove Vision AI V2。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

