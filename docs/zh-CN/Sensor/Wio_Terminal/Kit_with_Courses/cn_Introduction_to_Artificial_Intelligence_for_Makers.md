---
description: 面向创客的人工智能入门
title: 面向创客的人工智能入门
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Introduction_to_Artificial_Intelligence_for_Makers
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

**字数：** 2000

**阅读时间：** 30分钟

**目标读者：**

- 面向没有计算机科学背景的创客的人工智能（AI）初学者指南。

**目录**

本文各部分的快速概览。

- 1.什么是"人工智能（AI）"？
- 2.人工智能（AI）的一些有趣应用
- 3.人工智能（AI）产品清单
- 4.推荐的书籍、课程和视频教程

## 摘要

AI是当今的热门话题，相关的AI产品在我们的[在线商店](https://www.seeedstudio.com/)中销售良好。但我们发现一些客户：传统硬件开发者，通常没有扎实的计算机科学背景。本文的目的是为想要开始深度学习之旅的创客建立兴趣并提供一般性理解。我将指出一些常见用例和潜在陷阱。同时在本文末尾，我将推荐一些课程和书籍来深入学习这个主题。

## 1. 什么是"人工智能（AI）"？

AI在今天无处不在。"数据挖掘"、"人工智能"、"人工神经网络"……这变得相当令人困惑，对吧？公司和计算机科学家每年创造数千个新术语，但从不向你解释***它们实际上是什么**。

根据维基百科：
 >人工智能（AI），有时称为机器智能，是机器展示的智能，与人类和动物展示的自然智能形成对比。

 然而，除非作为严格的学术术语使用，我们通常用这个术语来指代人工神经网络。因为这项技术近年来的爆炸性发展导致了太多的计算产品和商业宣传，逐渐取代了"AI"这个术语本身的含义。所以现在当企业说"AI产品"时，他们通常指的是用于加速神经网络运算的产品。

一些广告和"教程"会向你展示如下图片，这让你想起我们大脑中的神经元。但实际上，神经元只是一个优雅的类比。计算机科学中的"神经网络"术语完全是一个数学问题。如果你不理解算法，这张图片**毫无意义**。

![](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1554974523222.png)

所以如果你想进入深度学习领域，你需要做的第一件事就是理解这个术语背后的数学原理。我今天不想详细解释算法，你应该知道的是神经网络模型是你高中代数课上一个简单问题的远亲。在这篇文章的最后部分，我将为初学者推荐一些课程和书籍。
深度学习是一个年轻的实验性学科，每天都有定期更新。如果你想掌握它，最重要的是选择一个主题或一个实际问题，并尽可能多地阅读相关研究论文。

## 2. 人工智能（AI）的一些有趣应用

### 计算机视觉

人类只需凝视几秒钟就能识别任何物体，这对他们来说真的很容易。但对于机器来说，物体识别是一个非常复杂的任务，直到 Hinton 和 Alex Krizhevsky 在 2012 年赢得 ImageNet 竞赛。

然后神经网络主导了视觉领域，特别是分类和分割问题，卷积神经网络是近年来赢得众多竞赛的最突出方法之一。它在图像识别方面有着出色的结果。
Nvidia 为 Jetson Nano 构建了许多[视觉演示](https://github.com/dusty-nv/jetson-inference)，我们测试了其中两个用于分类和人脸检测的演示：
<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/U0rNdI9pl_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 艺术

**[Google Magenta](https://magenta.tensorflow.org/)** 一个开源研究项目，正在探索机器学习作为创作过程中工具的作用。这个项目组因为 AI 驱动的涂鸦[庆祝约翰·塞巴斯蒂安·巴赫](https://www.google.com/doodles/celebrating-johann-sebastian-bach)而为公众所知
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056026898.png)

以下是一些交互演示：

[Magic Sketchpad](https://magic-sketchpad.glitch.me/) 每次你开始画涂鸦时，Sketch RNN 都会尝试完成它并匹配你选择的类别。

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059163496.png)

[Piano Genie](http://piano-genie.glitch.me/) 使用机器学习假装自己是钢琴大师，享受一些乐趣。

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059135929.png)

[Latent Loops](https://goo.gl/magenta/latent-loops) 在调谐到不同音阶的矩阵上绘制旋律，探索生成的旋律循环调色板，并使用它们排列更长的作品。由 Google 的 Pie Shop 构建

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059104497.png)

### 物联网和传感器

**智能停车** 在密集交通环境中停车往往导致寻找空闲空间的驾驶时间过长，从而导致拥堵和环境污染。缺乏空闲停车位的引导信息是停车行为低效的原因之一。智能停车传感器和技术有助于引导驾驶员找到空闲停车位，从而提高停车效率。目前，开放式停车场还没有使用此类传感器或技术。所以仍有工作要做。
[用于分散式停车场占用的深度学习](https://github.com/fabiocarrara/deep-parking)

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555055835602.png)

[**用于人体活动识别的 LSTM**](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition)人体活动识别（HAR）是普适计算和人机交互中的重要研究领域。为了使用移动或可穿戴传感器识别活动，需要使用适当的传感器收集数据，进行分割，提取所需特征，并使用判别模型（SVM、HMM、MLP 等）对活动进行分类。在这个项目中，开发者使用了 LSTM，出色的是，最终准确率达到 91%，峰值达到 93.25%。

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555057001717.png)

### 自然语言处理（NLP）

在知识时代，自然语言处理（NLP）通过广泛的应用表达了其需求。以前 NLP 处理的是静态数据。当代 NLP 在很大程度上处理语料库、词典数据库、模式重组。考虑到深度学习（DL）方法识别人工神经网络（NN）进行非线性处理，NLP 工具变得越来越准确和高效，开始了一场变革。
[NLP-progress](https://github.com/sebastianruder/NLP-progress) 这是一个旨在跟踪自然语言处理（NLP）进展的项目，并概述最常见 NLP 任务及其相应数据集的最新技术（SOTA）。

#### 医学

人工智能正在改变医学世界。AI 可以帮助医生做出更快、更准确的诊断。它可以及时预测疾病风险以预防疾病。它可以帮助研究人员了解基因变异如何导致疾病。它增强了医生分析医学图像的能力。它正在推进个性化医学的未来。
目前，大量努力致力于使用这些算法丰富医学成像应用，以诊断疾病诊断系统中的错误，这些错误可能导致极其模糊的医疗治疗。机器学习和深度学习算法是医学成像中预测早期疾病症状的重要方法。深度学习技术，特别是卷积网络，已经迅速发展出一种专门用于研究医学图像的方法。它引起了对这些算法套件的关注，这些算法可用于疾病研究和自动决策。

[**医学成像深度学习工具包（DLTK）**](https://github.com/DLTK/DLTK)
DLTK 是一个用 Python 编写的神经网络工具包，基于 TensorFlow。它的开发旨在实现低门槛的快速原型设计，并确保图像分析应用的可重现性，特别关注医学成像。其目标是为社区提供最先进的方法和模型，并加速这一令人兴奋领域的研究。
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056241911.png)

#### 其他

[**LotteryPredict**](https://github.com/chengstone/LotteryPredict) 这个演示使用 lstm 和 TensorFlow 来预测彩票。

## 3. 人工智能（AI）产品列表

AI 在今天无处不在，从消费者应用到企业应用。开发者开始尝试将其应用到嵌入式和机器人领域，但传统嵌入式开发板的性能显然不足。英特尔、英伟达、谷歌和华为等跨国公司都推出了他们的深度学习产品，其中 Jetson Nano 最近受到了最多关注，它使得在嵌入式系统中以可承受的价格和超低功耗部署中等规模的神经网络成为可能。Sipeed 和 Firefly 等小公司也针对特定细分领域推出了自己的产品。以下是一些例子。

[**NVIDIA Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-p-2916.html)
>NVIDIA® Jetson Nano™ 开发者套件以前所未有的尺寸、功耗和成本提供运行现代 AI 工作负载的计算性能。开发者、学习者和创客现在可以运行 AI 框架和模型，用于图像分类、目标检测、分割和语音处理等应用。
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050651109.png)

[**Google Coral Dev Board**](https://www.seeedstudio.com/Coral-Dev-Board-p-2900.html)
>Coral Dev Board 是一款单板计算机，带有可拆卸的系统级模块（SOM），包含 eMMC、SOC、无线电和 Google 的 Edge TPU。它非常适合需要快速设备端 ML 推理的 IoT 设备和其他嵌入式系统。
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050567750.png)

[**Sipeed MAix Go Suit for RISC-V AI+IoT**](https://www.seeedstudio.com/Sipeed-MAix-GO-Suit-for-RISC-V-AI-IoT-p-2874.html)
>MAIX 是 Sipeed 专门设计用于在边缘运行 AI 的模块，我们称之为 AIoT。它在小的物理和功耗占用空间内提供高性能，使高精度 AI 能够在边缘部署，而且具有竞争力的价格使其可以嵌入到任何 IoT 设备中。如您所见，Sipeed MAIX 很像 Google edge TPU，但它作为主控制器，而不是像 edge TPU 那样的加速器，因此比 AP+edge TPU 解决方案更低成本和低功耗。
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051060453.png)

[**Intel Movidius MA245X AI Kit Compatible w/ Intel Movidius Stick**](https://www.seeedstudio.com/Intel-Movidius-MA245X-AI-Kit-Compatible-w-Intel-Movidius-Stick-p-3146.html)
>秉承即插即用 AI 的理念，Horned Sungem (HS) 致力于成为最简单、最易用的 AI 设备，让所有开发者、学生、AI 爱好者和发烧友都能轻松创建自己的 AI 应用。无需依赖深度学习框架或复杂库，在您将 Horned Sungem 插入 USB 端口并运行简短的安装脚本后，您的设备就能准备好看见和理解世界。
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050985486.png)

[**HiKey 970 Development Board**](https://www.seeedstudio.com/HiKey-970-Development-Board.html)
>Hikey970 是由 Kirin970 SOC 驱动的超级边缘 AI 计算平台，配备 4 x Cortex A73、4 x Cortex A53。Hikey970 拥有 6GB LPDDR4 RAM、64GB UFS 存储、千兆以太网、GPS、PCIE Gen2 和板载 CAN。作为世界上第一个专用 NPU AI 平台，Hikey970 集成了华为 HiAI 计算架构和流行的神经网络框架，支持 CPU、GPU AI 和专用于 AI 加速的神经处理单元。此外，它还配备华为的 HiAI SDK。Hikey 970 可用于构建深度学习、机器人、汽车和智慧城市的大多数应用。
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051309338.png)

## 4. 推荐书籍、课程和视频教程

### 书籍

1. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/) 这是世界上最友好的神经网络教科书之一，没有任何令人困扰的术语，而且完全免费且在线提供。但是这本书中的代码有点过时，如果你熟悉c++，你可以用它们来理解原理。
2. [Deep Learning with Python](https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438) 这本书是为任何希望从零开始探索深度学习或拓宽对深度学习理解的人而写的。无论你是实践中的机器学习工程师、软件开发人员还是大学生，你都会在这些页面中找到价值。
3. [Python For Data Analysis](https://www.cin.ufpe.br/~embat/Python%20for%20Data%20Analysis.pdf) 数据分析的经典教程，至今仍未过时。

### 课程

1. [Creative Applications of Deep Learning with TensorFlow](https://link.zhihu.com/?target=https://www.class-central.com/mooc/6679/kadenze-creative-applications-of-deep-learning-with-tensorflow) 这门课程向你介绍深度学习：构建人工智能算法的最先进方法。

2. [Stanford CS231n: Convolutional Neural Networks for Visual Recognition](https://link.zhihu.com/?target=http://cs231n.stanford.edu/) 这门课程深入探讨深度学习架构的细节，重点学习这些任务的端到端模型，特别是图像分类。

3. [UC Berkeley AI-Sys Spring 2019](https://ucbrise.github.io/cs294-ai-sys-sp19/) 这门课程描述了从像AlexNet这样的经典结构到系统设计的最新趋势，以更好地支持下一代AI应用，以及AI在优化架构和系统性能方面的应用。对在线学生最有价值的部分是它提供的必读书目列表。

### 视频教程

1. [ScaledML 2019](https://www.youtube.com/playlist?list=PLRM2gQVaW_wWXoUnSfZTxpgDmNaAS1RtG)
2. [计算机架构的新黄金时代：历史、挑战和机遇。](https://www.youtube.com/watch?v=uyc_pDBJotI&t=767s)
3. [SysML 18：前景和挑战。](https://www.youtube.com/watch?v=4inIBmY8dQI&t=26s)
4. [David Silver的RL课程](https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLzuuYNsE1EZAXYR4FJ75jcJseBmo4KQ9-)

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>