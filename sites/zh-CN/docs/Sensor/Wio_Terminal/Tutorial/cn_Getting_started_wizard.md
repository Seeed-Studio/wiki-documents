---
description: 入门向导
title: 入门向导
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Getting_started_wizard
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# 在5分钟内构建ML模型并部署到由Edge Impulse驱动的Wio Terminal

## **介绍**

Edge Impulse推出了一个新的**入门向导**，对机器学习初学者非常友好。它使用少样本关键词识别模型，让您录制一个短句，自动改进您的数据集，在不到5分钟的时间内为您提供一个开源模型。该模型可以应用在Wio Terminal中。在本wiki中，我们将向您展示如何使用"向导"，然后将向导中的模型部署到Wio Terminal中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"/></div>

## **Edge Impulse入门**

现在我们将向您介绍如何启动入门向导，然后向您展示相关说明。

### **硬件**

**所需硬件**

在此演示中，您需要以下列出的设备：

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- PC
- 连接到PC的麦克风
- Type-C数据线

**硬件连接**

通过Type-C数据线连接到计算机。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.png"/></div>

### **软件**

**所需硬件**

- [Arduino IDE](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)

该项目基于Arduino平台，这意味着需要Arduino IDE和各种Arduino库。如果这是您第一次使用Wio terminal，我们推荐一个快速[Wio Terminal入门](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)指南。

### Edge Impulse训练开始

首先，您需要拥有自己的Edge Impulse账户，然后创建一个项目。

- **步骤1**. 打开[Edge Impulse网站](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1)，然后注册一个账户。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots1.png"/></div>

- **步骤2**. 创建一个新项目。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png"/></div>

- **步骤3**. 点击"Dashboard"页面底部的**"Launch getting started wizard"**按钮并启动向导。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.jpg"/></div>

- **步骤4**. 按照说明点击按钮。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI03.jpg"/></div>

- **步骤5**. 输入一个单词或短句。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI04a.jpg"/></div>

- **步骤6**. 通过计算机麦克风录制自己说单词38秒。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI06.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI07.jpg"/></div>

确保您录制清晰并收集足够的数据，否则您将被要求收集更多数据。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI08.jpg"/></div>

一旦您收集足够，块将会显示出来。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI09.jpg"/></div>

- **步骤7**. 点击"Next"，Edge Impulse将帮助您在数据集中混合其他单词以及背景噪音。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI10.jpg"/></div>

然后模型可以学会区分您的单词和其他声音。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI12.jpg"/></div>

- **步骤8**. 按照说明创建"the impulse"。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI13.jpg"/></div>

它可以提取可用于机器学习的特征。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI14.jpg"/></div>

它会自动运行，完成后点击"Next"

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI15.jpg"/></div>

- **步骤9**. 按照说明为您的模型训练神经网络。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI16.jpg"/></div>

继续进行直到模型训练完成。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI17.jpg"/></div>

您可以再次使用麦克风并检查您的结果。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI18.jpg"/></div>

恭喜您获得了新的单词分类模型！现在我们可以在Wio Terminal上部署该模型。

### 在Wio Terminal中部署机器学习模型

这里我们将在Wio Terminal中部署我们的模型。

- **步骤10**. 选择并点击左侧的"Deployment"栏。然后选择"Arduino Library"，在底部选择"build"来创建Arduino中所需的库。它将自动下载一个包含第三方库的zip文件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Alots/Alots19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI21.jpg"/></div>

所需库的名称与项目名称相关，这意味着您在**步骤2**中为项目编写的任何名称都将在此处显示。它可以帮助您找到所需的正确文件。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI22.jpg"/></div>

- **步骤11**. 在[此处](https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/example.ino)下载音频识别代码，并使用Arduino IDE打开它。同时，需要添加下载的.zip文件，以便您可以应用第三方库。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI23.jpg"/></div>

将第三方库的名称更改为您自己的名称以及您最初说的单词。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI24.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI25.jpg"/></div>

最后，您可以说出单词并观察Wio Terminal是否显示它们。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI26.jpg"/></div>