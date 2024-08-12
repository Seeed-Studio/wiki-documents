---
description: Data Upload and Label with alwaysAI on NVIDIA Jetson devices
title: Getting Started with alwaysAI
tags:
  - Data Label
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/alwaysAI-Jetson-Getting-Started
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# 开始在NVIDIA® Jetson设备上使用alwaysAI

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/thumb-5.gif"/></div>

[alwaysAI](https://alwaysai.co) 是一个至关重要的计算机视觉开发平台，用于在边缘设备（如NVIDIA® Jetson设备）上创建和部署机器学习应用程序。开发和部署这些应用程序过于复杂且耗时，需要深入了解大量与专家相比更适合日常开发人员的计算机视觉技术和方法。alwaysAI消除了这些障碍，使创建计算机视觉应用变得简单、快速和高效。

## 支持的硬件

alwaysAI支持以下与Jetson相关的硬件：



- Seeed的工具包：

  - 配备Jetson Nano的reComputer J1010
  - 配备Jetson Nano的reComputer J1020
  - 配备Jetson Xavier NX 8GB的reComputer J2011
  - 配备Jetson Xavier NX 16GB的reComputer J2012

- Seeed的载板：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 套件
  - A203 载板
  - A203 （第二版）载板
  - A205 载板
  - A206 载板

- NVIDIA的官方开发套件：

  - NVIDIA® Jetson Nano 开发者套件
  - NVIDIA® Jetson Xavier NX 开发者套件
  - NVIDIA® Jetson AGX Xavier 开发者套件
  - NVIDIA® Jetson TX2 开发者套件
  - NVIDIA® Jetson AGX Orin 开发者套件

- NVIDIA的官方SoMs：
  
  - NVIDIA® Jetson Nano模块
  - NVIDIA® Jetson Xavier NX 模块
  - NVIDIA® Jetson TX2 NX 模块
  - NVIDIA® Jetson TX2 模块
  - NVIDIA® Jetson AGX Xavier 模块

## 先决条件

- 上述任意一款运行JetPack 4.6并安装了所有SDK组件的Jetson设备（请查看[此维基](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/)以获得安装参考）
- 装有Windows、Linux或Mac的主机PC
- USB网络摄像头或由您的Jetson设备支持的MIPI CSI摄像头

## 开始使用

部署您的第一个计算机视觉项目只需几分钟！在本维基结束时，您将能够在连接到Jetson设备的摄像头的实时视频流上以及预加载的视频文件上检测对象。

1. 为开发计算机设置环境
2. 为Jetson设备设置环境
3. 注册alwaysAI账户
4. 使用alwaysAI仪表板创建一个项目
5. 使用开发计算机在Jetson设备上部署您的项目
6. 在来自摄像头的实时视频流上进行对象检测
7. 在预加载的视频文件上进行对象检测

### 为开发计算机设置环境

现在您需要设置开发环境。在这里，您可以使用Windows、Linux或Mac计算机。

:::注意
在本指南中，我们将使用Windows开发计算机。但是，如果您想将Mac或Linux设置为开发计算机，请[访问这里](https://alwaysai.co/docs/get_started/development_computer_setup.html) 了解更多信息。
:::

- **步骤 1.** 通过点击[这里](https://alwaysai.co/installer/windows)下载并安装alwaysAI桌面应用程序和命令行界面


- **步骤 2.** 安装完成后，打开命令行界面并输入以下内容：

```sh
aai -v
```

如果看到打印出的版本号，说明您已成功安装了alwaysAI CLI。撰写本维基时的版号是**1.4.3**

- **步骤 3.** 检查您的操作系统中是否已经安装了OpenSSH。您需要开发机上的OpenSSH来连接到您的边缘设备并部署机器学习项目。

```sh
ssh -V
```

如果看到打印出的版本号，说明您已经安装了OpenSSH。例如 **OpenSSH_for_Windows_8.1p1, LibreSSL 3.0.2**。截至2018年底，Windows 10默认支持OpenSSH。有关在Windows上安装OpenSSH的更多信息，请查看Microsoft文档网站上的[这篇文章](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)

### 为Jetson设备设置环境

接下来，您需要在边缘设备（本例中为Jetson设备）上设置环境。

**步骤 1.** 当我们在Jetson设备上运行我们的机器学习项目时，会使用edgeIQ运行时环境，该环境可作为[docker 镜像](https://hub.docker.com/r/alwaysai/edgeiq)获得。您不需要安装Docker，因为它已经随JetPack预装。但是，您需要将“docker”组添加到您的用户中，这样您就不需要root权限（sudo）来访问Docker了。访问Jetson设备并在终端执行以下操作：

```sh
sudo usermod -aG docker $USER
```

**步骤 2.** 要应用新的组成员资格，请注销Jetson设备并重新登录，或键入以下内容：

```sh
su - $USER
```

**步骤 3.** 测试您的docker安装，无需  **sudo**

```sh
docker run hello-world
```

<div align="center"><img width= "{630}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/2.png"/></div>

### 注册alwaysAI账户

- **步骤 1.** 访问[此页面](https://console.alwaysai.co/auth?register=true)注册alwaysAI账户

- **步骤 2.** 填写表格并点击**免费注册**以完成注册过程

### 使用alwaysAI仪表板创建项目

在完成开发机和Jetson设备的环境设置、注册alwaysAI账户后，我们可以开始使用alwaysAI仪表板创建一个新的对象检测项目。

**步骤 1.** 访问[alwaysAI dashboard](https://console.alwaysai.co/dashboard)仪表板并通过点击**新建项目**按钮创建一个新项目

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/4.png"/></div>

**步骤 2.** 选择**对象检测**作为起始模板，输入项目名称并点击**创建项目**

<div align="center"><img width="{550}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/5.png"/></div>

**步骤 3.** 点击**点击此处查看您的项目**进入您新建的项目


现在您将看到有关新建项目的信息，如使用的模型和其他有用细节

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/6.png"/></div>

对于默认的**对象检测项目**，使用了经过**Pascal VOC数据集**训练的**mobilenet_ssd**作为模型。这意味着，此应用程序可以识别**20个对象类别**，如人、鸟、猫、牛、狗、马、羊、飞机、自行车、船、公共汽车、汽车、摩托车、火车、瓶子、椅子、餐桌、盆栽植物、沙发、电视/监视器。

然而，这个模型没有针对Jetson硬件进行优化，运行时的fps非常低。因此，我们将选择一个针对**Jetson Xavier NX**优化并支持**TensorRT**的模型。

**步骤 4.** 点击模型旁边的三个点，然后点击**删除**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/32.png"/></div>

**步骤 5.** 点击**添加新模型**并点击**前往模型目录**进入alwaysAI模型目录

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/33.png"/></div>

**步骤 6.** 在搜索框中输入 **ssd_mobilenet_v1_coco_2018_01_28_xavier_nx**，然后点击 **+ Use this ModelType** 

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/34.png"/></div>

这个模型是用**COCO数据集**训练的，可以识别**80个对象类别**，如人、自行车、汽车、摩托车、飞机、公共汽车、火车、卡车、船、交通灯、消防栓、停车标志、长凳、鸟、猫、狗、马、羊、牛、大象、熊、斑马、长颈鹿、背包、雨伞、手提包、领带、行李箱、飞盘、滑雪板、滑雪板、运动球、风筝、棒球棒、棒球手套、滑板车、冲浪板、网球拍、瓶子、酒杯、杯子、叉子、刀、勺子、碗、香蕉、苹果、三明治、橙子、西兰花、胡萝卜、热狗、披萨、甜甜圈、蛋糕、椅子、沙发、盆栽植物、床、餐桌、马桶、电视、笔记本电脑、鼠标、遥控器、键盘、手机、微波炉、烤箱、烤面包机、水槽、冰箱、书、时钟、花瓶、剪刀、泰迪熊、吹风机、牙刷

**步骤 7.** 选择之前创建的项目（本例中的“我的第一个项目”），然后点击 **Add To Project**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/35.png"/></div>

现在我们已经成功地将模型添加到项目中！

### 使用开发计算机在Jetson设备上部署项目

现在我们将使用开发计算机通过SSH将之前创建的项目部署到Jetson设备上

**步骤 1.** 在开发机器上，创建一个新文件夹，在新文件夹中打开命令行界面并输入以下内容：

```sh
aai app configure
```

:::注意
第一次运行上述命令时，系统会提示您输入alwaysAI帐户的用户名和密码
:::

**步骤 2.** 选择在alwaysAI仪表板上之前创建的项目

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/7.png"/></div>

**步骤 3.** 选择 **Remote device** 作为**destination**

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/8.png"/></div>

**步骤 4.** 按**Y** 创建私钥文件

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/9.png"/></div>

**步骤 5.** 点击 **Add a new device** 以添加您的Jetson设备作为远程设备

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/10.png"/></div>

**步骤 6.** 选择 **device mode** 作为 **Development**

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/11.png"/></div>

**步骤 7.** 输入一个 **device name**

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/36.png"/></div>

**步骤 8.** 输入Jetson设备的**username**，以及 **hostname/IP address**，如下所示：

```sh
lakshanthad@192.168.2.156
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/37.png"/></div>

:::注意
这里的Jetson设备用户名是**lakshanthad**，IP地址是**192.168.2.156**
:::

**步骤 9.** 当系统提示输入Jetson设备的**password**时，输入密码。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/38.png"/></div>

**步骤 10.** 当系统询问要在哪个**location**运行应用程序时，保留默认位置并按**ENTER**。默认位置设置为**alwaysai/test**。这是Jetson设备上的项目目录。

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/39.png"/></div>

现在我们已经成功地通过开发计算机的SSH在Jetson设备上初始化了项目。

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/17.png"/></div>

在将应用程序安装到Jetson设备之前，我们需要对主代码进行一些小的更改，以更改模型名称和推理引擎类型。

**步骤 11.** 在您在PC上为alwaysAI创建的目录中，打开  **app.py**，并将模型名称和推理引擎类型更改为以下内容：

```python
def main():
    obj_detect = edgeiq.ObjectDetection("alwaysai/ssd_mobilenet_v1_coco_2018_01_28_xavier_nx")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**步骤 12.** 输入以下内容以安装应用程序：

```sh
aai app install
```

如果成功安装，您将看到以下输出：

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/40.png"/></div>

:::注意
如果在这一步遇到错误，您可以首先尝试使用`aai app install --clean`方法重新部署。**请仔细检查jetpack版本是否为所需的版本4.6。可以通过输入命令`sudo apt-cache show nvidia-jetpack` 来检查版本号。如果版本号正确，请确保您已完成Jetson系统的安装以及Jetson SDK组件**。这将帮助您解决大多数问题。

:::

### 实时视频流中的对象检测

现在，我们将在连接到Jetson设备的USB摄像头上运行对象检测。您还可以使用Jetson设备支持的MIPI CSI摄像头。

**步骤 1.** 将USB摄像头/ MIPI CSI摄像头连接到Jetson设备。

**步骤 2.** 运行以下命令：

```sh
aai app start
```

现在，您将在命令行上看到以下输出：

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/41.png"/></div>

**步骤 3.** 打开Web浏览器并输入 **<http://localhost:5000>** 以打开视频流。 

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/person-small.gif"/></div>

如您所见，人们正在实时检测，每个标签的置信百分比显示在界面上。此外，Jetson Xavier上的推理时间为**0.009s**，**约为111 fps**。

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/car-small.gif"/></div>

上面的演示使用了相同的模型。

### 预加载视频文件中的对象检测

在这里，我们将在预加载的视频文件上运行对象检测。

**步骤 1.** 将视频文件放置在Jetson设备上的alwaysAI项目目录中。根据我们的示例，它位于 **/home/{username}/alwaysai/test**

**步骤 2.** 在开发计算机上，打开之前创建的**app.py** 文件中的**test** 文件夹，并用以下代码替换这部分代码：

```sh
with edgeiq.WebcamVideoStream(cam=0) as video_stream, \
                edgeiq.Streamer() as streamer:
```

    
用这个替换：

```sh
with edgeiq.FileVideoStream(
            'file name goes here', play_realtime=True) as video_stream, \
                edgeiq.Streamer() as streamer:
```

然后替换 **file name goes here** 为视频文件的名称和文件扩展名。确保文件名应该放在单引号内。

**步骤 3.** 重新安装应用程序

```sh
aai app install
```

**步骤 4.** 最后运行应用程序

```sh
aai app start
```

在这里，您将在命令行上看到与之前相同的输出，一旦您使用之前提到的地址打开Web浏览器，您将看到对象检测在预加载的视频上执行，给出与之前类似的输出。

### 过滤要检测的对象

您还可以过滤特定的对象，以便模型只检测这些对象。例如，我们使用的COCO数据集可以检测80种对象类型。然而，我们可以过滤仅检测人。

您只需在**app.py**  文件中,在**results**后添加**results.predictions**即可：

```python
while True:
    frame = video_stream.read()
    results = obj_detect.detect_objects(framconfidence_level=.5)
    results.predictions = edgefilter_predictions_by_label(resulpredictions, ['person'])
    frame = edgeiq.markup_image(
```

## alwaysAI 应用程序在 GitHub 上

alwaysAI 在其 GitHub 仓库中提供了一系列现成的应用程序。您可以在[这里](https://github.com/alwaysai/Reference-Applications)查看不同的应用程序。

### 车牌识别器

作为演示，我们将解释如何将其中一个应用程序部署到 Jetson 设备上，即[车牌识别器](https://github.com/alwaysai/license-plate-detector) 。因此，您也可以为其他应用程序重复相同的步骤。

**步骤 1.** 在开发计算机上，为我们的项目创建一个新的文件夹并进入它

**步骤 2.** 下载[这个仓库](https://github.com/alwaysai/license-plate-detector)作为 **.zip** 文件，或者如果您的电脑上安装了**Git**，则克隆它

默认情况下，此示例使用的模型未针对 Jetson Nano 进行优化。因此，我们首先将加载一个针对 Jetson Nano 优化的模型。

**步骤 3.** 进入新下载/克隆的仓库，打开命令行并执行以下操作：

```sh
aai app models add alwaysai/vehicle_license_mobilenet_ssd_nano
```

**步骤 4.** 打开**app.py**，更改模型名称和推理引擎

```python
def main():
    obj_detect = edgeiq.ObjectDetection(
            "alwaysai/vehicle_license_mobilenet_ssd_nano")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**步骤 5.** 执行以下操作：

```sh
aai app configure
```

:::注意
当您第一次运行上述命令时，系统会提示您输入 alwaysAI 账户的用户名和密码
:::

**步骤 6.** 选择 **Create new project**

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/21.jpg"/></div>

**步骤 7.** 键入  **Project Name**

**步骤 8.** 选择以 **As an empty app**初始化项目

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/26.jpg"/></div>

**步骤 9.** 从 **Deploy your project on the Jetson device using development computer** 部分开始，重复相同的步骤，直到 **步骤 11**

**步骤 10.**一旦应用程序安装在 Jetson 上，运行以下命令来启动应用程序

```sh
aai app start
```

现在您将在命令行看到以下输出：

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/23.jpg"/></div>

如您所见，我们正在使用**vehicle_license_mobilenet_ssd 模型**，该模型能够识别车辆和车牌。

**步骤 11.** 在您的 PC 上打开网络浏览器，输入以下内容以打开视频流：

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/25.gif"/></div>

在本次演示中，对以下两个视频进行了推理：[这里](https://github.com/alwaysai/license-plate-detector/tree/main/video) ，正如您所见，视频流中的车辆和车牌被检测到，每个标签的置信度百分比显示在界面上。

### 使用网络摄像头进行推理

如果您想对来自网络摄像头的实时视频流执行与上述相同的推理，请按照以下步骤操作：

**步骤 1.** 导航到我们之前为项目创建的文件夹并打开 **app.py**

**步骤 2.** 从[这里](https://github.com/lakshanthad/license-plate-detector-webcam/blob/main/app.py)复制并粘贴此处的代码： 

**步骤 3.** 重新安装应用程序

```sh
aai app install
```

**步骤 4.** 最后运行应用程序

```sh
aai app start
```

在这里，您将在命令行看到与之前相同的输出，并且一旦您用前面提到的相同地址打开网络浏览器，您将看到在来自网络摄像头的实时视频流上执行的对象检测，给出与之前类似的输出。

## alwaysAI 企业版

alwaysAI 还有一个企业版，具有以下功能：

- 免费获得1个生产部署设备 - 一年
- 20小时的 alwaysAI 云模型训练时间
- 30天访问 alwaysAI 云数据集存储权限

您可以在此处了解更多关于 alwaysAI 企业版的信息。

### 训练自己的模型并部署

**步骤 1.** 准备您的训练数据集。确保您的数据集是 **PascalVOC format**，然后将所有图像和标签安排在2个目录中，并将文件压缩如下：

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/27.jpg"/></div>

**步骤 2.** 转到 [alwaysAI dashboard](https://console.alwaysai.co/dashboard)，点击左侧导航窗格上的 **Datasets**，然后点击**Upload a Dataset**


<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/28.jpg"/></div>

**步骤 3.** 数据集上传完成后，点击 **Train**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/29.jpg"/></div>

**步骤 4.** 在这里，您可以根据偏好更改训练设置，然后点击**Start training**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/30.jpg"/></div>

训练完成后，您将看到以下输出：

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/31.jpg"/></div>

现在，经过训练的模型已在您的帐户中提供。您可以按照以下方式在对象检测项目中使用此模型：

**步骤 5.** 导航至 `Models > My Models` 并点击我们刚刚训练的模型

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/42.png"/></div>

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/43.png"/></div>

**步骤 6.** 如您所见，您可以在对象检测应用程序的根目录中使用下面的命令

```sh
aai app models add lakshanthad/roadsign-mobilenet
```

**步骤 7.** 之后在**app.py**中更改模型名称并再次运行应用程序

```sh
lakshanthad/roadsign-mobilenet
```

## 资源

- **[网页]** [AlwaysAI 文档](https://alwaysai.co/docs)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您在使用我们的产品时体验尽可能顺畅。我们提供多个沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
