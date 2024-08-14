---
description: 使用 YOLOv8 训练和部署自定义分类模型
title: 使用 YOLOv8 训练和部署自定义分类模型
keywords: 
  - yolov8
  - custom classification model
  - classification model
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/train_and_deploy_a_custom_classification_model_with_yolov8
last_update:
  date: 06/11/2024
  author: Bruno
---


# 使用 YOLOv8 训练和部署自定义分类模型

## 介绍
本指南将解释如何使用 YOLOv8 训练和部署自定义分类模型。

## 概述
我们将创建一个虚拟环境，安装 YOLOv8，在 roboflow 下载一个分类模型，进行训练并部署它。

### 图像分类
图像分类是计算机视觉中最简单的任务之一，它涉及将图像分类为预定义的类别之一。输出是单个类别标签和置信度分数。

图像分类通常在我们不需要知道图像中对象的具体位置，只需要知道图像属于哪个类别时非常有用。例如，图像分类可以用于从图像库中检索图像，将图像根据其内容进行分类，还可以用于自动识别人脸、识别动物等。在这些场景中，我们并不需要知道图像中对象的精确位置，只需要知道它属于哪个类别即可。 

## 材料需求

### 硬件设置

对于本教程，我们需要一台 Nvidia [Jetson Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获得 🖱️</font></span></strong>
    </a>
</div>

### 软件设置

- 在计算机上安装 JetPack 6.0
- 一个 Roboflow 账户用于下载数据集。

## 准备 reComputer
Seeed Studio 的 reComputer J4012 是一台 Jetson Orin NX 16GB 计算机，拥有强大的性能。但 Tegra Linux 系统默认带有许多功能，并在图形模式下启动。让我们更改一下这种情况。

::: 注意
我将使用VScode和启用X forwarding的SSH终端来运行示例和远程编程。
X forwarding是SSH的一个选项，它可以在连接的我方而不是远程计算机上运行一些图形化应用程序。
:::

如果你将用显示器、键盘和鼠标连接到你的 reComputer，请跳过下一步。

### 更改启动模式
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/1_image.png" />
</div>
系统默认启用了图形界面，但我们在这里实际上并不需要它的功能。而且，在空闲模式下，系统会占用大约 1.5GB 的内存资源。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/2_image.png" />
</div>

我们将使它在启动时转到命令行界面。
```bash
sudo systemctl set-default multi-user
```
现在，我们的 reComputer 将在启动时自动启动 CLI 命令行界面。如果您愿意，您可以现在重新启动，或者我们可以使用一个命令进入 CLI 命令行界面。
```bash
sudo systemctl isolate multi-user
```
现在，我们已经将系统从占用 1.5GB 内存的 GUI 模式切换到只占用 700MB 内存的 CLI 模式。在机器学习中，每个内存字节都是重要的资源。

### 更改功率模式
默认情况下，我们的 reComputer 应该运行在 2 级-15W 模式下。当训练或推理 ML 模型时，如果可以使用全功率运行，效果会更好。

让我们学习如何更改功率模式。

在文件 /etc/nvpmodel.conf 中，我们可以找到可用的功率模式。
```bash
< POWER_MODEL ID=0 NAME=MAXN >
< POWER_MODEL ID=1 NAME=10W >
< POWER_MODEL ID=2 NAME=15W >
< POWER_MODEL ID=3 NAME=25W >
```
接下来，我们可以使用 "sudo nvpmodel -m <#power model>" 命令更改的功率模式。同时，根据 [此帖子](https://forums.developer.nvidia.com/t/power-mode-in-terminal/287224)所述, 该设置会保留在重启后的系统中。若要查看当前所在的功率模式，请执行以下操作：

```bash
sudo nvpmodel -q
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/3_image.png" />
</div>

让我们为训练模型选择最大功率模式：
```bash
sudo nvpmodel -m 0
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/4_image.png" />
</div>

重新启动后，我们可以确认我们正在以最大功率运行：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/5_image.png" />
</div>

## 训练模型
为了训练模型，我们将使用 YOLOv8 算法。以下是安装 CUDA 支持的 YOLOv8 的步骤。
我们还需要一个 [roboflow](https://roboflow.com/) 账户。 

### 模型
我将创建一个用于识别鸟类的模型。
这是我计划在花园中放置的一款智能鸟食器项目的一部分，我想知道哪些鸟类正在那里觅食。

因为这是一个分类任务，我们不需要知道照片中鸟的位置。

您可以使用其他您选择的数据集，只要它是分类数据集或模型。

我已经收集了我所在地区常见的12种鸟类，并在 Roboflow 中创建了一个[分类数据集] 
(https://universe.roboflow.com/bruno-santos-omqsq/bird-classification-19z7c/dataset/1) in Roboflow.

我要识别的鸟类包括：

- 燕子 (Barn Swallow)
- 欧亚冕雀 (Common Firecrest)
- 田鸡 (Common Nightingale)
- 苍头燕雀 (Eurasian Chaffinch)
- 欧亚石画嘴 (Eurasian Crag Martin)
- 欧金翅雀 (European Goldfinch)
- 欧绿雀 (European Greenfinch)
- 欧文雀 (European Serin)
- 家麻雀 (House Sparrow)
- 西班牙麻雀 (Spanish Sparrow)
- 公燕 (Western House Martin)
- 白鹡鸰 (white Wagtail)


请选择您的数据集并从 roboflow 下载。选择数据集后，选择“下载数据集”。 - 您需要一个帐户才能执行此操作。


<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/7_image.png" />
</div>

接下来，进入数据集页面，选择 "Format"中的 "Folder Structure"，并选择 "Show Download Code"。

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/8_image.png" />
</div>

接下来，如果您将使用 Jupyter Notebook，则选择 *Jupyter*，如果您计划在终端中执行此操作，则选择 *Terminal*。

我选择使用 Jupyter Notebook，复制代码以在 Jupyter Notebook 中使用。
<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/9_image.png" />
</div>

## 创建环境
我们将创建一个虚拟环境，安装 PyTorch 和 YOLOv8。
根据 [ YOLOv8 documentation ](https://docs.ultralytics.com/quickstart/#install-ultralytics)文档提示, 最好先安装 PyTorch，然后再安装 ultralytics。

此外，我将安装 jupyterlab 包与 VSCode 一起使用。操作笔记附在本教程中。

让我们先安装一些依赖项。

**注意:** 因为我们要使用 YOLOv8，所以需要做一些通常我们不需要做的步骤。

根据[NVIDIA deep learning documentation](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html) 安装 Torch 即可获得支持 CUDA 的 Torch。

如果我们使用 PIP 正常安装 PyTorch，则不会获得 CUDA 支持。
### 依赖项

```bash
sudo apt install libopenblas-dev cuda-toolkit libcudnn8 tensorrt python3-libnvinfer nvidia-l4t-dla-compiler
```
创建 Python 虚拟环境
```bash
python -m venv birdClassificationModel
```
如果出现错误，可能是因为没有安装 python3-venv 包。让我们安装它并重复上面的命令。

```bash
sudo apt install python3-venv
```
激活虚拟环境

```bash
source birdClassificationModel/bin/activate
```

可以通过提示前面出现虚拟环境的名称来确认虚拟环境是否已激活。

### YOLOv8

按照 [follow on the documentation tip](https://docs.ultralytics.com/quickstart/#conda-docker-image)文档提示，让我们先安装 PyTorch。

我使用的是JetPack 6.0版本，其中包含NVIDIA Jetson Linux 36.3和CUDA 12.2。
运行以下命令先升级一下PIP。

```bash
pip install -U pip
```

为了以后能够使用 YOLOv8，我们需要安装 Torch。请您按照[NVIDIA论坛上的步骤]( https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048 )进行操作。

请确保在激活虚拟环境后进行安装，以便将其安装在其中。
从 NVIDIA 下载 Torch 版本2.3 。

```bash
wget https://nvidia.box.com/shared/static/mp164asf3sceb570wvjsrezk1p4ftj8t.whl -O torch-2.3.0-cp310-cp310-linux_aarch64.whl
sudo apt-get install python3-pip libopenblas-base libopenmpi-dev libomp-dev
pip3 install 'Cython<3'
pip install numpy torch-2.3.0-cp310-cp310-linux_aarch64.whl
```

此后，让我们编译 torchvision。如果我们从 wheel 安装它，它将不具备 CUDA 支持。

请注意分支版本是为所安装的 Torch 版本而设计的。您可以在论坛页面上查看更多详细信息。

请记得，您需要激活虚拟环境，以便所有内容都可以在其中安装。

```bash
sudo apt-get install libjpeg-dev zlib1g-dev libpython3-dev libopenblas-dev libavcodec-dev libavformat-dev libswscale-dev
git clone --branch v0.18.0 https://github.com/pytorch/vision torchvision
cd torchvision/
export BUILD_VERSION=0.18.0
python setup.py install
```
编译和安装过程可能需要一段时间。
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/10_image.png" />
</div>
安装完成之后，让我们检查是否可用 CUDA：
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/11_image.png" />
</div>

从命令行进行检查：
```bash
python -c "import torch;print (torch.cuda.is_available())"
```
这条命令应该返回  True。

#### 安装 YOLOv8

现在我们已经安装了支持 CUDA 的 PyTorch，当我们安装 YOLOv8 时，它将使用已安装的版本，而不是尝试安装一个没有 CUDA 支持的新包（尽管版本相同）。

```bash
pip install ultralytics
```

现在安装 roboflow 和 jupyterlab
```bash
pip install roboflow jupyterlab
```

现在，让我们下载数据集
如果您使用的是笔记本，请在其中替换代码。

```python
rf = Roboflow(api_key="<your_api_key>")
project = rf.workspace("bruno-santos-omqsq").project("bird-classification-19z7c")
version = project.version(1)
dataset = version.download("folder")
```

下载完成后，我们现在拥有一个由三个目录（test、train、valid）组成的数据集，每个目录中有一定数量的图像。每个类别的每张图像都在自己的目录中，不需要为这些图像打标签
由于这是用于图像分类的任务，因此我们不需要对图像进行标注。
YOLOv8 将从配置文件中和目录中获取图像的类别。
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/12_image.png" />
</div>

### 训练
通常数据集包含图像和标注，标注中包含对象的坐标和对应的类别。然而对于这个分类任务，我们不需要这些。只需要将每张图像放在以它所属类别命名的子目录中即可。

#### 准备配置文件
我们仍然需要一个配置文件，以使 YOLOv8 能够识别每个类别。此文件应放置在数据集目录中，并使用 .yaml 扩展名。文件名并不重要。

```bash
cd <dataset_directory>
vi birdClassificationModel.yaml
```
请将以下文本插入文件中：

```bash
train: train/
valid: valid/
test: test/

# number of classes
nc: 12

# class names

names: ["Barn Swallow","Common Firecrest","Common Nightingale","Eurasian Chaffinch","Eurasian Crag Martin","European Goldfinch","European Greenfinch","European Serin","House Sparrow","Spanish Sparrow","Western House Martin","white Wagtail"]
```

对于分类，我们将使用Ultralytics中已经可用的一个[预训练模型]。(https://docs.ultralytics.com/tasks/classify/).

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/13_image.png" />
</div>

这些模型已经在ImageNet上进行了训练，并被微调用于分类。
我们将使用它并在我们的数据上进行训练。

这就是所谓的[迁移学习](https://neptune.ai/blog/transfer-learning-guide-examples-for-images-and-text-in-keras).

我将使用 [YOLOv8l-cls]模型(https://github.com/ultralytics/assets/releases/download/v8.2.0/yolov8l-cls.pt)。 可能其他模型也可以良好运行，但因为我们不需要实时性，这是速度和准确性之间的权衡的选择。

那么，让我们使用YOLOv8的CLI界面来训练模型。

```bash
yolo task=classify mode=train model=yolov8l-cls.pt data=Bird-Classification-1 epochs=100
```
- task=classify : We're going to classify images
- mode=train : We're training the model
- model=yolov8l-cls.pt : We're using a pre-trained model on classification
- data=Bird-Classification-1 : the directory where our dataset is located
- epochs=100 : for how long we're training the model. 

现在它正在运行，这里是使用jtop（tegra-stats）的一些统计数据。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/14_image.png" />
</div>
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/15_image.png" />
</div>
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/16_image.png" />
</div>

经过几个小时的训练，训练已经完成了。
<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/17_image.png" />
</div>

现在，让我们看看模型的表现。我们来进行测试吧。

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=Bird-Classification-1/test/**/*.jpg
```
这将使yolo进入测试目录并尝试对每个目标进行预测。
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/18_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/19_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/20_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/21_image.png" />
</div>

结果都是正确的。现在让我们试着用两个它从未见过的图像来测试。

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/22_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/23_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=house_sparrow.jpg
```
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/24_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=white_wagtail.jpg
```
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/25_image.png" />
</div>

预测的结果都非常好

## 导出模型
我们可以直接使用模型进行推理，只需打开并使用它即可。
为了获得更快的推理时间，我们可以将其导出为TensorRT 因为我们使用的是NVIDIA Jetson Orin NX，甚至是ONNX。

虽然这个项目不需要更快的推理时间 – 我不会在实时视频上使用它，但是我们可以利用我们当前的平台的优势。

不幸的是，由于虚拟环境的原因，我无法将其导出到TensorRT。出现了某些问题，我无法在Python中导入tensorrt，但在虚拟环境之外，我使用tensorrt库没有任何问题。

### ONNX
我们可以将模型导出成ONNX格式：
```bash
yolo export model='./runs/classify/train6/weights/best.pt' format=onnx imgsz=640
```
我们得到了一个best.onnx文件，可以用它来运行推理。

要使用ONNX运行推理，我们需要安装onnxruntime_gpu wheel。 

要在JetPack 6.0上安装onnxruntime-gpu，我们需要从[Jetson Zoo](https://elinux.org/Jetson_Zoo#ONNX_Runtime)上下载它。

我们将下载onnxruntime_gpu 1.18.0版本。

可根据我们Python版本（Python-3.10）下载适应的pip wheel文件。

```bash
wget https://nvidia.box.com/shared/static/48dtuob7meiw6ebgfsfqakc9vse62sg4.whl -O onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```
随后进行安装：
```bash
pip install onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```



## 推理
### 图片
我使用了以下代码来使用best.pt模型运行推理，并查看结果：

```python
# running inference
from ultralytics import YOLO
# load the  model
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
#run inference
results = bird_model("house_sparrow.jpg")[0]
# get class names
class_names = results.names
# get top class with more probability
top1 = results.probs.top1
# print the class name with the highest probability
print (f" The detected bird is: {class_names[top1]}")
```

上述代码的功能是加载模型，对图像运行推理，并将结果保存到results变量中。

由于results是类型为列表的[ultralytics.engine.results.Results](http://ultralytics.engine.results.results/)对象，其中有一个成员项为Results对象。通过在results变量中使用[0]，我们可以得到我们所需的结果。

```python
results = bird_model("house_sparrow.jpg")[0]
```

接下来，我们使用结果来获取类别名称。虽然我们已经知道类别名称，但这种方式可以使这段代码在其他模型中也能够工作。

```python
class_names = results.names
```

其中一个结果是top1变量，它保存具有最高概率的TOP 1类别。该TOP 1类别由probs列表给出。

```python
top1 = results.probs.top1
```

接下来，我们打印最高概率类别，应该是这只鸟的物种名称。

```python
print (f" The detected bird is: {class_names[top1]}")
The detected bird is: House Sparrow
```

### 相机
现在，让我们使用相机来运行推理。

Jetson可以使用USB相机或RPI相机。我将连接一个USB相机。

以下代码将检查是否能够显示相机视频。
```python
#Lets test if we can use a USB camera
import cv2
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```
图片是在我的台式计算机上相机画面的我。只需使用*ssh -X username@jetson_ip* 即可将X11窗口转发到您的桌面。相机成功运行，因为我正在使用Linux。所以我认为WSL也可以工作。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/26_image.png" />
</div>

现在，让我们尝试在视频上运行推理，显示概率最高的类别。

这是代码：
```python
# again, save this code in a file a run it from the Jetson

import cv2
from ultralytics import YOLO
import time
#define confidence level
#only equal or above this level we say it's a class of bird
confidence = 0.95
# time when processed last frame
prev_frame = 0
# time processed current frame
cur_time = 0
# load the  model
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
# cv2 font
font = cv2.FONT_HERSHEY_SIMPLEX
# open camera
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    # to display fps
    cur_frame = time.time()
    fps = 1 / (cur_frame - prev_frame)
    prev_frame = cur_frame
    fps = int(fps)
    fps = str(fps)
    cv2.putText (img, fps, (550,50), font, 1, (124,10,120), 2, cv2.LINE_AA)

    # inference current frame
    results = bird_model(img, verbose=False)[0]
    # get class names
    class_names = results.names
    # get top class with more probability
    top1 = results.probs.top1
    top1conf = results.probs.top1conf.tolist()
    # we will only show the class name if the confidence is higher than defined level
    # print the class name with the highest probability
    if (top1conf >= confidence):
        bird_class = class_names[top1]
        print (f" The detected bird is: {class_names[top1]}")
        # color is in BGR
        confid = round(top1conf,2)
        img = cv2.putText(img, bird_class, (50,50), font, 0.9, (0, 0, 255), 2, cv2.LINE_AA)
        img = cv2.putText(img, "Conf: " + str(confid), (50,80), font, 0.6, (255, 0, 255), 1, cv2.LINE_AA)
        cv2.imshow('Camera', img)
    else:
        img = cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```

<!-- this video is also on the files -->
这是一个视频，展示了在视频上进行推理的结果。
<!-- <div class="table-center">
<iframe src="https://youtu.be/ovoSMaoA9As" frameBorder={0} />
</div> -->

<iframe width={560} height={315} src="https://www.youtube.com/embed/ovoSMaoA9As?si=-d2buntx0T5oRtr4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

## ✨ 项目贡献者

- 这个项目得到了Seeed Studio贡献者项目的支持。
- 感谢 **Bruno的努力** ，您的工作将被[展示](https://wiki.seeedstudio.com/Honorary-Contributors/).

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