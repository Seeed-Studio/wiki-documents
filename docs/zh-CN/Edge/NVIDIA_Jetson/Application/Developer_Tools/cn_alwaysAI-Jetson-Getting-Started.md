---
description: 在 NVIDIA Jetson 设备上使用 alwaysAI 进行数据上传和标注
title: alwaysAI 入门指南
tags:
  - Data Label
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/alwaysAI-Jetson-Getting-Started
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# 在 NVIDIA® Jetson 设备上使用 alwaysAI 入门指南

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/thumb-5.gif"/></div>

[alwaysAI](https://alwaysai.co) 是一个重要的计算机视觉开发平台，用于在边缘设备（如 NVIDIA® Jetson 设备）上创建和部署机器学习应用程序。开发和部署这些应用程序过于复杂和耗时，需要对大量计算机视觉技术和技巧有深入的了解，这些技术对专家来说更相关和易于理解，而不是普通开发者。alwaysAI 消除了这些障碍，使创建计算机视觉应用程序变得简单、快速和有效。

## 支持的硬件

alwaysAI 支持以下 Jetson 相关硬件：

- Seeed 套件：

  - 基于 Jetson Nano 构建的 reComputer J1010
  - 基于 Jetson Nano 构建的 reComputer J1020
  - 基于 Jetson Xavier NX 8GB 构建的 reComputer J2011
  - 基于 Jetson Xavier NX 16GB 构建的 reComputer J2012

- Seeed 载板：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 载板
  - A203 (Version 2) 载板
  - A205 载板
  - A206 载板

- NVIDIA 官方开发套件：

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- NVIDIA 官方 SoM：
  
  - NVIDIA® Jetson Nano module
  - NVIDIA® Jetson Xavier NX module
  - NVIDIA® Jetson TX2 NX module
  - NVIDIA® Jetson TX2 module
  - NVIDIA® Jetson AGX Xavier module

## 先决条件

- 运行 JetPack 4.6 并安装了所有 SDK 组件的上述任一 Jetson 设备（安装参考请查看[此 wiki](https://wiki.seeedstudio.com/cn/reComputer_J1020_A206_Flash_JetPack/)）
- 运行 Windows、Linux 或 Mac 的主机 PC
- USB 网络摄像头或您的 Jetson 设备支持的 MIPI CSI 摄像头

## 入门指南

部署您的第一个计算机视觉项目只需几分钟！在本 wiki 结束时，您将能够在连接到 Jetson 设备的摄像头实时视频流上检测物体，也能在预加载的视频文件上进行检测。

1. 为开发计算机设置环境
2. 为 Jetson 设备设置环境
3. 注册 alwaysAI 账户
4. 使用 alwaysAI 仪表板创建项目
5. 使用开发计算机在 Jetson 设备上部署您的项目
6. 在摄像头实时视频流上进行物体检测
7. 在预加载视频文件上进行物体检测

### 为开发计算机设置环境

现在您需要设置开发环境。这里您可以使用 Windows、Linux 或 Mac 计算机。

:::note
在本指南中，我们将使用 Windows 开发计算机。但是，如果您想将 Mac 或 Linux 设置为开发 PC，请[访问此处](https://alwaysai.co/docs/get_started/development_computer_setup.html)了解更多信息。
:::

- **步骤 1.** 点击[此处](https://alwaysai.co/installer/windows)下载并安装 alwaysAI 桌面应用程序和命令行界面

- **步骤 2.** 安装完成后，打开命令行界面并输入以下内容

```sh
aai -v
```

如果您看到打印出的版本号，说明您已成功安装 alwaysAI CLI。撰写本文档时的版本号是 **1.4.3**

- **步骤 3.** 检查您的操作系统中是否已安装 OpenSSH。您需要在开发机器上安装 OpenSSH 以连接到边缘设备并部署机器学习项目。

```sh
ssh -V
```

如果您看到打印的版本号，说明您已经安装了 OpenSSH。例如 **OpenSSH_for_Windows_8.1p1, LibreSSL 3.0.2**。截至 2018 年底，Windows 10 开箱即支持 OpenSSH。查看 Microsoft 文档站点上的[这篇文章](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)，了解更多关于在 Windows 上安装 OpenSSH 的信息

### 为 Jetson 设备设置环境

接下来您需要在边缘设备（本例中为 Jetson 设备）上设置环境。

**步骤 1.** 在 Jetson 设备上运行我们的机器学习项目时，使用 edgeIQ 运行时，它以 [docker 镜像](https://hub.docker.com/r/alwaysai/edgeiq)的形式提供。您不需要安装 Docker，因为它已经随 JetPack 预装。但是您需要将 "docker" 组添加到您的用户中，这样您就不需要 root 权限 (sudo) 来访问 Docker。访问 Jetson 设备并在终端中执行以下命令

```sh
sudo usermod -aG docker $USER
```

**步骤 2.** 要应用新的组成员身份，请登出 Jetson 设备然后重新登录，或输入以下内容

```sh
su - $USER
```
**步骤 3.** 不使用 **sudo** 测试你的 Docker 安装

```sh
docker run hello-world
```

<div align="center"><img width= "{630}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/2.png"/></div>

### 注册 alwaysAI 账户

- **步骤 1.** 访问[此页面](https://console.alwaysai.co/auth?register=true)注册 alwaysAI 账户

- **步骤 2.** 填写表单并点击 **Sign Up for Free** 完成注册过程

### 使用 alwaysAI 仪表板创建项目

完成开发机器和 Jetson 设备的环境设置，注册 alwaysAI 账户后，我们可以开始使用 alwaysAI 仪表板创建新的目标检测项目。

**步骤 1.** 访问 [alwaysAI 仪表板](https://console.alwaysai.co/dashboard)，点击 **New Project** 按钮创建新项目

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/4.png"/></div>

**步骤 2.** 选择 **Object Detection** 作为起始模板，输入项目名称并点击 **Create Project**

<div align="center"><img width="{550}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/5.png"/></div>

**步骤 3.** 点击 **Click Here To View Your Project** 进入新创建的项目

现在您将看到新创建项目的信息，如使用的模型和其他有用的详细信息

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/6.png"/></div>

对于默认的 **Object Detection Project**，使用 **mobilenet_ssd** 作为模型，该模型已使用 **Pascal VOC 数据集**进行训练。这意味着，此应用程序可以识别 **20 个对象类别**，如人、鸟、猫、牛、狗、马、羊、飞机、自行车、船、公交车、汽车、摩托车、火车、瓶子、椅子、餐桌、盆栽植物、沙发、电视/显示器。

但是，此模型未针对 Jetson 硬件进行优化，运行时帧率会很低。因此我们将选择一个针对 **Jetson Xavier NX** 优化并支持 **TensorRT** 的模型。

**步骤 4.** 点击模型旁边的三个点，然后点击 **Delete**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/32.png"/></div>

**步骤 5.** 点击 **Add New Model**，然后点击 **Go to Model Catalog** 进入 alwaysAI 模型目录

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/33.png"/></div>

**步骤 6.** 在搜索框中输入 **ssd_mobilenet_v1_coco_2018_01_28_xavier_nx**，然后点击 **+ Use this Model**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/34.png"/></div>

这个模型已使用 **COCO 数据集**进行训练，可以识别 **80 个对象类别**，如人、自行车、汽车、摩托车、飞机、公交车、火车、卡车、船、交通灯、消防栓、停车标志、停车计时器、长椅、鸟、猫、狗、马、羊、牛、大象、熊、斑马、长颈鹿、背包、雨伞、手提包、领带、手提箱、飞盘、滑雪板、雪板、运动球、风筝、棒球棒、棒球手套、滑板、冲浪板、网球拍、瓶子、酒杯、杯子、叉子、刀、勺子、碗、香蕉、苹果、三明治、橙子、西兰花、胡萝卜、热狗、披萨、甜甜圈、蛋糕、椅子、沙发、盆栽植物、床、餐桌、厕所、电视、笔记本电脑、鼠标、遥控器、键盘、手机、微波炉、烤箱、烤面包机、水槽、冰箱、书、时钟、花瓶、剪刀、泰迪熊、吹风机、牙刷

**步骤 7.** 选择之前创建的项目（在本例中为 My First Project），然后点击 **Add To Project**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/35.png"/></div>

现在我们已经成功将模型添加到项目中！

### 使用开发计算机在 Jetson 设备上部署项目

现在我们将通过 SSH 使用开发计算机将之前创建的项目部署到 Jetson 设备上

**步骤 1.** 在开发机器上，创建一个新文件夹，在新文件夹内打开命令行界面并输入以下内容

```sh
aai app configure
```

:::note
当您第一次运行上述命令时，系统会提示您输入 alwaysAI 账户的用户名和密码
:::

**步骤 2.** 选择您之前在 alwaysAI 仪表板上创建的项目

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/7.png"/></div>

**步骤 3.** 选择**远程设备**作为**目标**

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/8.png"/></div>

**步骤 4.** 按 **Y** 创建私钥文件

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/9.png"/></div>

**步骤 5.** 点击**添加新设备**将您的 Jetson 设备添加为远程设备

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/10.png"/></div>

**步骤 6.** 选择**设备模式**为**开发**

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/11.png"/></div>

**步骤 7.** 输入**设备名称**

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/36.png"/></div>

**步骤 8.** 输入 Jetson 设备的**用户名**以及**主机名/IP 地址**，如下所示

```sh
lakshanthad@192.168.2.156
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/37.png"/></div>

:::note
这里 Jetson 设备的用户名是 **lakshanthad**，IP 地址是 **192.168.2.156**
:::

**步骤 9.** 在提示时输入 Jetson 设备的**密码**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/38.png"/></div>

**步骤 10.** 当询问运行应用程序的**位置**时，保留默认位置并按 **ENTER**。这里默认位置设置为 **alwaysai/test**。这是 Jetson 设备内的项目目录

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/39.png"/></div>

现在我们已经成功通过 SSH 使用开发计算机在 Jetson 设备上初始化了项目

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/17.png"/></div>

在继续在 Jetson 设备上安装应用程序之前，我们需要对主代码进行小的更改，以更改模型名称和推理引擎类型。

**步骤 11.** 在您的 PC 上为 alwaysAI 创建的目录中，打开 **app.py** 并按如下方式更改模型名称和推理引擎类型

```python
def main():
    obj_detect = edgeiq.ObjectDetection("alwaysai/ssd_mobilenet_v1_coco_2018_01_28_xavier_nx")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```
**步骤 12。** 输入以下内容以安装应用程序

```sh
aai app install
```

如果安装成功，您将看到以下输出

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/40.png"/></div>

:::note
如果在此步骤遇到错误，您可以首先尝试使用 `aai app install --clean` 方法重新部署。仔细检查 jetpack 版本是否为**所需的 4.6 版本。可以通过输入命令 `sudo apt-cache show nvidia-jetpack` 来检查。如果版本号正确，请确保您完成了 Jetson 系统安装以及**Jetson SDK 组件**。这将帮助您解决大多数问题。
:::

### 在摄像头实时视频流上进行目标检测

现在我们将在连接到 Jetson 设备的 USB 摄像头的实时视频流上运行目标检测。您也可以使用您正在使用的 Jetson 设备支持的 MIPI CSI 摄像头

**步骤 1.** 将 USB 摄像头/ MIPI CSI 摄像头连接到 Jetson 设备

**步骤 2.** 运行以下命令

```sh
aai app start
```

现在您将在命令行中看到以下输出

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/41.png"/></div>

**步骤 3.** 打开网页浏览器并输入 **http://localhost:5000** 来打开视频流

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/person-small.gif"/></div>

如您所见，人员正在被实时检测，每个标签的置信度百分比都显示在界面上。同时在 **Jetson Xavier** 上的推理时间为 **0.009秒，约为 111 fps**。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/car-small.gif"/></div>

上面是使用相同模型的另一个演示。

### 在预加载视频文件上进行目标检测

这里我们将在预加载的视频文件上运行目标检测。

**步骤 1.** 将视频文件放置在 Jetson 设备的 alwaysAI 项目目录内。根据我们的示例，它是 **/home/`<username>`/alwaysai/test**

**步骤 2.** 在开发计算机上，打开我们之前创建的 **test** 文件夹内的 **app.py** 文件，并替换这部分代码

```sh
with edgeiq.WebcamVideoStream(cam=0) as video_stream, \
                edgeiq.Streamer() as streamer:
```

with this one

```sh
with edgeiq.FileVideoStream(
            'file name goes here', play_realtime=True) as video_stream, \
                edgeiq.Streamer() as streamer:
```

然后将 **file name goes here** 替换为视频文件的名称和文件扩展名。确保文件名应该在单引号内。

**步骤 3.** 重新安装应用程序

```sh
aai app install
```
**步骤 4.** 最后运行应用程序

```sh
aai app start
```

在这里，您将在命令行中看到与之前相同的输出，一旦您使用与之前提到的相同地址打开网页浏览器，您将看到在预加载的视频上执行目标检测，产生与之前类似的输出。

### 过滤要检测的对象

您还可以过滤您希望模型检测的特定对象。例如，我们使用的上述 COCO 数据集能够检测 80 种对象类型。但是，我们可以过滤为仅检测人员。

您只需要在 **app.py** 文件中的 **results** 后面添加 **results.predictions** 行

```python
while True:
    frame = video_stream.read()
    results = obj_detect.detect_objects(framconfidence_level=.5)
    results.predictions = edgefilter_predictions_by_label(resulpredictions, ['person'])
    frame = edgeiq.markup_image(
```

## GitHub 上的 alwaysAI 应用程序

alwaysAI 在 alwaysAI GitHub 仓库中提供了广泛的即用型应用程序。您可以在[这里](https://github.com/alwaysai/Reference-Applications)查看不同的应用程序。

### 车牌检测器

为了演示目的，我们将解释如何将这些应用程序之一——[车牌检测器](https://github.com/alwaysai/license-plate-detector)部署到 Jetson 设备上。因此，您也可以对其他应用程序重复相同的步骤。

**步骤 1.** 在开发计算机上，为我们的项目创建一个新文件夹并进入该文件夹

**步骤 2.** 将[此仓库](https://github.com/alwaysai/license-plate-detector)下载为 **.zip** 文件，或者如果您的 PC 上安装了 **Git**，则克隆它

默认情况下，此示例使用的模型未针对在 Jetson Nano 上运行进行优化。因此，我们将首先加载一个针对 Jetson nano 优化的模型。

**步骤 3.** 进入新下载/克隆的仓库，在其中打开命令行并执行以下命令

```sh
aai app models add alwaysai/vehicle_license_mobilenet_ssd_nano
```

**步骤 4.** 打开 **app.py**，更改模型名称和推理引擎

```python
def main():
    obj_detect = edgeiq.ObjectDetection(
            "alwaysai/vehicle_license_mobilenet_ssd_nano")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**步骤 5.** 执行以下操作

```sh
aai app configure
```

:::note
当您第一次运行上述命令时，系统会提示您输入 alwaysAI 账户的用户名和密码
:::

**步骤 6.** 选择 **Create new project**

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/21.jpg"/></div>

**步骤 7.** 输入 **Project Name**

**步骤 8.** 选择初始化项目 **As an empty app**

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/26.jpg"/></div>

**步骤 9.** 重复与 **使用开发计算机在 Jetson 设备上部署项目** 部分相同的步骤，从 **步骤 3** 开始直到 **步骤 11**

**步骤 10.** 一旦应用程序安装到 Jetson 上，运行以下命令启动应用程序

```sh
aai app start
```

现在您将在命令行中看到以下输出

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/23.jpg"/></div>

如您所见，我们正在使用 **vehicle_license_mobilenet_ssd 模型**，该模型能够识别车辆和车牌。

**步骤 11.** 在您的 PC 上打开网络浏览器，输入以下内容来打开视频流

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/25.gif"/></div>

在这个演示中，推理正在对[这里](https://github.com/alwaysai/license-plate-detector/tree/main/video)的2个视频进行处理，如您所见，视频流中的车辆和车牌正在被检测，每个标签的置信度百分比都显示在界面上。

### 使用网络摄像头推理

如果您想在网络摄像头的实时视频流上执行与上述相同的推理，请按照以下步骤操作

**步骤 1.** 导航到我们之前为项目创建的文件夹并打开 **app.py**

**步骤 2.** 从[这里](https://github.com/lakshanthad/license-plate-detector-webcam/blob/main/app.py)复制并粘贴代码

**步骤 3.** 重新安装应用程序

```sh
aai app install
```
**步骤 4.** 最后运行应用程序

```sh
aai app start
```

在这里，您将在命令行中看到与之前相同的输出，一旦您使用与之前提到的相同地址打开网络浏览器，您将看到在来自网络摄像头的实时视频流上执行目标检测，输出结果与之前类似。

## alwaysAI 企业版

alwaysAI 还有企业版，具有以下功能：

- 访问免费版，包含 1 个生产设备部署，为期一年
- 20 小时的 alwaysAI 云模型训练
- 30 天访问 alwaysAI 云数据集存储

您可以在这里了解更多关于 alwaysAI 企业版的信息。

### 训练您自己的模型并部署

**步骤 1.** 准备您的数据集进行训练。确保您的数据集采用 **PascalVOC 格式**，然后将所有图像和标签整理到 2 个目录中，并按如下方式压缩文件

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/27.jpg"/></div>

**步骤 2.** 前往 [alwaysAI 仪表板](https://console.alwaysai.co/dashboard)，点击左侧导航栏中的 **Datasets**，然后点击 **Upload a Dataset**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/28.jpg"/></div>

**步骤 3.** 数据集上传完成后，点击 **Train**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/29.jpg"/></div>

**步骤 4.** 在这里您可以根据您的偏好更改训练设置，然后点击 **Start training**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/30.jpg"/></div>

训练完成后，您将看到以下输出

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/31.jpg"/></div>

现在训练好的模型在您的账户中可用。您可以在目标检测项目中使用此模型，如下所示

**步骤 5.** 导航到 `Models > My Models` 并点击我们刚刚训练的模型

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/42.png"/></div>

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/43.png"/></div>

**步骤 6.** 如您所见，您可以在目标检测应用程序的根目录中使用以下命令

```sh
aai app models add lakshanthad/roadsign-mobilenet
```

**步骤 7.** 之后在 **app.py** 中更改模型名称并再次运行应用程序

```sh
lakshanthad/roadsign-mobilenet
```

## 资源

- **[网页]** [AlwaysAI 文档](https://alwaysai.co/docs)

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
