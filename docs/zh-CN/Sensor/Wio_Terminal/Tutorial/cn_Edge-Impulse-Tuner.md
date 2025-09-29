---
description: Edge Impulse 调优器
title: Edge Impulse 调优器
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edge-Impulse-Tuner
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# EON 调优器 - Edge Impulse 中的优化功能

## **介绍**

Edge Impulse 推出了一个优化功能，可以优化嵌入式机器学习模型和设备内存使用。通过调整参数，它帮助不熟悉机器学习算法的人也能够快速为他们的应用选择最佳的学习模型。同时，它允许设备使用更少的内存和更低的性能，这意味着它可以帮助人们在约束条件下将 TinyML 模型部署到特定设备上。

EON 调优器首先分析您的输入数据、潜在的信号处理块和神经网络架构。然后它为您提供可能的模型架构概览，这些架构将适合您选择的设备的延迟和内存要求。您可以选择其中任何一个。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## **EON 调优器的位置**

![](https://files.seeedstudio.com/wiki/EON-Tuner/weizhituner.png)

如您所见，EON 调优器的位置在 [Edge Impulse](https://www.edgeimpulse.com/) 项目页面的左侧，就在分类下方。当您完成应用程序后，您可以轻松选择调优器来增强您的项目。

## **EON 调优器的改进**

这是一个示例，向您展示使用 EON 调优器和不使用它之间的区别。

![](https://files.seeedstudio.com/wiki/EON-Tuner/duibi.png)

## **入门指南**

在这里我们将提供音频分类项目并向您展示 EON 调优器的使用方法。如果您对[基于 Wio Terminal 和 Edge Impulse 使用 LoRa 传输数据](https://wiki.seeedstudio.com/cn/AIoTs_GPS_state_tester/)感兴趣，您可以随时点击查看示例项目。

### **硬件**

**所需硬件**

在此演示中，您将需要以下列出的设备：

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Wio Terminal 底盘 - 电池（可选）](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**硬件连接**

通过 Type-C 线缆连接到计算机。

![](https://files.seeedstudio.com/wiki/EON-Tuner/connecttuner.png)

### **软件**

**所需软件**

- [Arduino IDE](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)

### 使用 Wio Terminal 进行机器学习

在这里我们将向您展示如何使用 Wio Terminal 训练机器学习模型并使用它。该项目基于 Arduino 平台，这意味着需要 Arduino IDE 和各种 Arduino 库。如果这是您第一次使用 Wio terminal，我们推荐一个快速[开始使用 Wio Terminal](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/) 的指南。

#### Edge Impulse 训练入门

首先，您需要拥有自己的 Edge Impulse 账户，然后创建一个项目。

- **步骤 1**. 打开 [Edge Impulse 网站](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1)，然后注册一个账户。

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- **步骤 2**. 创建一个新项目。

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### 网站与 Wio Terminal 连接

- **步骤 3**. 下载固件 [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) 为连接做准备。

如[开始使用 Wio Terminal](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/) 指南所建议：

双击 Wio Terminal（已连接到您的 PC）左下角，您将看到一个驱动器（如下面的"Arduino (F:)"）在计算机上弹出。然后您可以将 [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) 固件拖到驱动器中。当您看到驱动器消失时，意味着固件已被编程。现在您可以转到网站连接 Wio Terminal。

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- **步骤 4**. 固件设置完成后，点击"connect using WebUSB"将 Wio Terminal 连接到网站。

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

当"Device"、"Label"和"Sensor"如下所示出现时，意味着连接完成，可以激活数据采集。

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### 数据采集

现在您可以在 Edge Impulse 上收集数据。

- **步骤 5**. 输入"Label"、"Sample length (ms.)"并点击"Start sampling"

  - "Label"表示您想要分类的类别。
  - "Sample length"表示您采样期间的时间。

我们在这里做的示例项目是音频分类，所以我们将使用内置麦克风。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji.png)

强烈建议采样数据超过 10 次。因为录音需要使用 SPI Flash 进行擦除操作，所需时间通常比我们设置的时间长。（在这个项目中大约需要 7 秒，而设置时间是'3 秒'）。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji2.png)

#### 机器学习模型生成

收集数据后，您可以使用它来训练您的 ML 模型。

- **步骤 6**. 采样数据后，点击"create impulse"来处理数据。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji3.png)

我们在这里选择的处理块和学习块是 Audio(MFE) 和 Neural Network (Keras)。您可以通过添加处理块和添加学习块来找到它们。之后，点击"Save Impulse"并继续。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji4.png)

- **步骤 7**. 移动到"Spectral features"页面，然后在底部点击"Save parameters"，它会自动移动到"Generate feature"侧。数据可能看起来像这样：

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi.png)

这里是"Generate feature"侧，它可以帮助将您的数据转换为机器学习所需的特征。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi2.png)

点击"Generate feature"，结果应该显示在右侧：

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi3.png)

- **步骤 8**. 移动到"NN Classifier"页面，使用您的特征训练机器学习模型。在页面底部，点击"Start training"。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi4.png)

训练输出在页面右侧，当您看到输出时，意味着模型已经生成。

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

如您所见，输出不是我们期望的：

![](https://files.seeedstudio.com/wiki/EON-Tuner/inputfail.png)

我们可以选择重新收集数据，但这里我们可以使用另一种方法，即**"EON Tuner"**。

#### 使用 EON Tuner 优化 ML 模型

现在我们可以使用 EON Tuner 来优化我们的嵌入式机器学习模型。

- **步骤 9** 在页面右侧选择"EON Tuner"并点击"Start EON Tuner"。

![](https://files.seeedstudio.com/wiki/EON-Tuner/button.png)

有大量的输出模型，最先出现的模型可能不太合适：

![](https://files.seeedstudio.com/wiki/EON-Tuner/outputfail.png)

但等待几秒钟，模型训练得越来越好，它们真的可以部署了：

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi5.png)

点击"Select"，网站会询问您是否要将此模型设置为主要模型，然后点击"Yes"：

![](https://files.seeedstudio.com/wiki/EON-Tuner/dataupdate.png)

#### 机器学习模型部署

现在您可以将新的机器学习模型部署到您的 Wio Terminal。

- **步骤 10**. 选择并点击左侧的"Deployment"栏。

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

然后选择"Arduino Library"，在底部选择"build"来创建您的 Arduino 所需的库。它会自动下载一个包含第三方库的 zip 文件。

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

所需库的名称与项目名称相关，这意味着您在**步骤 2**中为项目写的任何名称都会显示在这里。它可以帮助您找到所需的正确文件。

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- **步骤 10**. 您可以在[这里](https://files.seeedstudio.com/wiki/EON-Tuner/EON_tuner_HelloWorld.ino)下载代码并用 Arduino IDE 打开它。如上所述更改您自己的第三方库，然后运行代码。

![](https://files.seeedstudio.com/wiki/EON-Tuner/librarymingzi.png)

最后，在 Arduino IDE 上点击"Serial Monitor"，对 Wio Terminal 说出您在"Data Acquisition"中设置的单词。监视器应该显示结果和"Wio Terminal 对结果的置信度"，即准确性。

![](https://files.seeedstudio.com/wiki/EON-Tuner/jieguo.png)

如果您对调谐器产生的差异感兴趣，可以跳过**步骤 9**，然后通过相同的步骤来检查它。