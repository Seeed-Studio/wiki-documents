---
description:  Getting started wizard
title:  入门向导
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Getting_started_wizard
last_update:
  date: 3/07/2024
  author: jessie
---

# 在Wio Terminal上构建一个机器学习模型并在Edge Impulse中部署

## **介绍**

Edge Impulse推出了一个新的 **入门导向** 非常适合机器学习初学者使用。它使用了一种少样本关键词识别模型，让您录制一个简短的句子，自动改进您的数据集，以在不到5分钟内为您提供一个开源模型。该模型可以应用于Wio Terminal。在本Wiki中，我们将向您展示如何使用这个"向导"，然后将从向导中部署的模型应用到Wio Terminal上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"/></div>

## ** Edge Impulse入门指南**

现在我们将介绍如何启动入门向导，并向您展示具体的指导步骤。

### **硬件**

**所需硬件**

在这个演示中，您将需要以下设备：

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- PC
- 连接电脑的麦克风
- Type-C 数据线

**硬件连接**

用Type-C数据线将其连接到计算机上。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.png"/></div>

### **软件**

**所需软件**

- [Arduino IDE](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)

该项目基于Arduino平台，因此需要Arduino IDE和各种Arduino库。如果您是第一次使用Wio Terminal，我们建议您参考 [快速入门 Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

### Edge Impulse训练开始

首先，您需要拥有自己的Edge Impulse账户并创建一个项目。

- **步骤 1**. 打开 [Edge Impulse 网站](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), 然后注册一个账户。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots1.png"/></div>

- **步骤 2**. 创建一个新项目。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png"/></div>

- **步骤 3**. 在"Dashboard"页面底部点击 **"Launch getting started wizard"** 启动向导。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.jpg"/></div>

- **步骤 4**. 按照指示点击按钮。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI03.jpg"/></div>

- **步骤 5**. 输入一个单词或一个简短的句子。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI04a.jpg"/></div>

- **步骤 6**. 通过计算机麦克风录制自己说话的声音，录制时间为38秒。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI06.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI07.jpg"/></div>

确保录制清晰，并收集足够的数据，否则将被要求继续收集。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI08.jpg"/></div>

收集足够的数据后，将会显示一个块。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI09.jpg"/></div>

- **步骤 7**. 点击 "Next" ，Edge Impulse将帮助您训练和优化模型。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI10.jpg"/></div>

然后该模型可以学习区分您的单词和其他声音。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI12.jpg"/></div>

- **步骤 8**. 按照指示创建 "the impulse"。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI13.jpg"/></div>

它可以提取用于机器学习的特征。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI14.jpg"/></div>

它会自动运行，完成后点击"Next"。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI15.jpg"/></div>

- **步骤 9**. 按照指示为您的模型训练一个神经网络。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI16.jpg"/></div>

继续进行，直到模型被训练完成。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI17.jpg"/></div>

您可以再次使用麦克风来检查结果。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI18.jpg"/></div>

恭喜您拥有了一个新的单词分类模型！现在我们可以将模型部署到Wio Terminal上。

### 在Wio Terminal上部署机器学习模型

下面我们将在Wio Terminal上部署我们的模型。

- **步骤 10**. 选择并点击左侧的"Deployment"栏目。然后选择"Arduino Library"，在底部选择"build"以创建所需的Arduino库。它将自动下载一个包含 third-party 库的ZIP文件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Alots/Alots19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI21.jpg"/></div>

所需库的名称与项目的名称相关，这意味着您在 **步骤 2** 中为项目提供的名称将在此处显示。这可以帮助您找到所需的正确文件。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI22.jpg"/></div>

- **步骤 11**. 在 [此处](https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/example.ino) 下载音频识别代码，并使用Arduino IDE打开它。同时，需要添加下载的ZIP文件，以便应用 third-party 库。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI23.jpg"/></div>

将 third-party 库的名称更改为您自己的名称，以及您首先说的单词。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI24.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI25.jpg"/></div>

最后，您可以说出这些单词，并观察Wio Terminal是否显示它们。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI26.jpg"/></div>
