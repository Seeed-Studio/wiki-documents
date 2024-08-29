---
description:  Edge Impulse Tuner
title:  边缘脉冲调谐器
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edge-Impulse-Tuner
last_update:
  date: 3/08/2024
  author: jessie
---

# EON Tuner - 优化  Edge Impulse 的功能

## **简介**

Edge Impulse引入了一种优化的功能，可以优化嵌入式机器学习模型和设备的内存使用。通过调整参数，它帮助那些对机器学习算法不熟悉的人快速选择适合他们应用的最佳学习模型。同时，它可以帮助设备使用更少的内存和性能，这意味着它可以帮助人们在限制条件下在特定设备上部署TinyML模型。

EON Tuner首先分析您的输入数据、潜在的信号处理块和神经网络架构。然后，它会向您提供符合所选设备延迟和内存要求的可能模型架构的概述。您可以选择其中任何一个。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## **EON Tuner的位置**

![](https://files.seeedstudio.com/wiki/EON-Tuner/weizhituner.png)

正如您所看到的，EON Tuner的位置位于 [Edge Impulse](https://www.edgeimpulse.com/) 项目页面的左侧，就在分类之下。当您完成应用程序后，可以轻松选择Tuner来改进您的项目。

## **EON Tuner的改进**

这是一个示例，展示了使用EON Tuner和不使用EON Tuner之间的差异。

![](https://files.seeedstudio.com/wiki/EON-Tuner/duibi.png)

## **入门指南**

这里我们将提供音频分类项目，并展示如何使用EON Tuner。如果您对  [基于Wio Terminal和Edge Impulse使用LoRa传输数据](https://wiki.seeedstudio.com/AIoTs_GPS_state_tester/)感兴趣，您随时可以点击并查看示例项目。

### **硬件**

**所需硬件**

在此演示中，您将需要以下设备：

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Wio Terminal 底座-电池（可选）](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**硬件连接**

它通过Type-C数据线连接到计算机。

![](https://files.seeedstudio.com/wiki/EON-Tuner/connecttuner.png)

### **软件**

**所需软件**

- [Arduino IDE](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)

### 使用Wio Terminal进行机器学习

这里我们将展示如何使用Wio Terminal训练一个机器学习模型并使用它。该项目基于Arduino平台，因此需要Arduino IDE和各种Arduino库。如果您是第一次使用Wio Terminal，我们建议您查看快速入门指南 [Get Started with Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

#### Edge Impulse训练开始

首先，您需要拥有自己的Edge Impulse账户，然后创建一个项目。

- **步骤 1**. 打开 [Edge Impulse 网站](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), 然后注册一个账户。

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- **步骤 2**. 创建一个新项目。

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### 网站与Wio Terminal的连接

- **步骤 3**. 下载 [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) 固件以准备连接。

按照 [Get Started with Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/) 指南的建议：

将Wio Terminal（已连接到计算机）双击左下角，您会看到计算机上弹出一个驱动程序（如下方的"Arduino (F:)"）。然后将 [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) 固件拖放到驱动程序上。当您看到驱动程序消失时，表示固件已经烧录。现在您可以前往网站连接Wio Terminal。

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- **步骤 4**.  一旦固件设置完成，点击"connect using WebUSB"将Wio Terminal连接到网站。

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

当"Device"、"Label"和"Sensor"如下所示时，表示连接已完成，数据采集可以激活。

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### 数据采集

现在您可以在Edge Impulse上收集数据。

- **步骤 5**. 输入 "Label", "Sample length (ms.)" 然后点击 "Start sampling"

  - "Label" 表示您要进行分类的类别。
  - "Sample length" 表示采样期间的时间。

这个示例项目是音频分类，所以我们将使用内置麦克风。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji.png)

强烈建议对数据进行超过10次的采样。因为录制需要使用SPI Flash进行擦除操作，所需时间通常比我们设置的时间更长。（在这个项目中大约需要7秒，而设置时间为'3秒'）。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji2.png)

#### 机器学习模型生成

一旦数据采集完成，您可以使用它来训练您的机器学习模型。

- **步骤 6**. 完成数据采样后，点击"create impulse"来处理数据。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji3.png)

这里我们选择的处理块和学习块分别是音频（MFE）和神经网络（Keras）。您可以通过添加处理块和学习块找到它们。完成后，点击"Save Impulse"并继续下一步。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji4.png)

- **步骤 7**.  转到"Spectral features"页面，然后在页面底部点击"Save parameters"，它将自动跳转到"Generate feature"页面。数据可能如下所示：

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi.png)

这是 "Generate feature" 页面，它可以帮助将您的数据转化为机器学习所需的特征。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi2.png)

点击"Generate feature"，结果将显示在右侧。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi3.png)

- **步骤 8**. 转到"NN Classifier"页面，使用您的特征训练一个机器学习模型。在页面底部点击"Start training"。

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi4.png)

训练输出将显示在页面的右侧，当您看到输出时，表示模型已生成。

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

正如您所看到的，输出结果并不是我们期望的。

![](https://files.seeedstudio.com/wiki/EON-Tuner/inputfail.png)

我们可以选择重新采集数据，但这里我们可以使用 **"EON Tuner"** 这种方法。

#### 使用EON Tuner优化机器学习模型

现在我们可以使用EON Tuner来优化我们的嵌入式机器学习模型。

- **步骤 9** 在页面右侧选择 "EON Tuner" 然后点击 "Start EON Tuner".

![](https://files.seeedstudio.com/wiki/EON-Tuner/button.png)

这里会输出大量的模型，最开始的模型可能并不适合：

![](https://files.seeedstudio.com/wiki/EON-Tuner/outputfail.png)

请等待几秒钟，模型将逐渐训练得更好，并且它们已经可以部署了：

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi5.png)

点击 "Select" 网站将询问您是否将此模型设置为主要模型，然后点击 "Yes":

![](https://files.seeedstudio.com/wiki/EON-Tuner/dataupdate.png)

#### 机器学习模型部署

现在您可以将新的机器学习模型部署到Wio Terminal上。

- **步骤 10**. 在左侧选择并点击 "Deployment" 栏目。

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

然后选择"Arduino Library"，在底部选择"build"以创建所需的Arduino库。它将自动下载一个包含第三方库的压缩文件。

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

所需库的名称与项目的名称相关，这意味着无论您在 **步骤 2** 中设置的名称是什么，都会显示在这里。它可以帮助您找到所需的正确文件。

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- **步骤 10**. 您可以在 [此处](https://files.seeedstudio.com/wiki/EON-Tuner/EON_tuner_HelloWorld.ino) 下载代码，并在Arduino IDE中打开它。像上面那样更改第三方库，然后运行代码。

![](https://files.seeedstudio.com/wiki/EON-Tuner/librarymingzi.png)

最后，在Arduino IDE中点击"Serial Monitor"，并对Wio Terminal说出在"Data Acquisition"中设置的单词。监视器应该显示结果和Wio Terminal对结果的"信心程度"，即准确度。

![](https://files.seeedstudio.com/wiki/EON-Tuner/jieguo.png)

如果您对调整器产生的差异感兴趣，您可以跳过 **步骤9** ，然后按照相同的步骤检查它。
