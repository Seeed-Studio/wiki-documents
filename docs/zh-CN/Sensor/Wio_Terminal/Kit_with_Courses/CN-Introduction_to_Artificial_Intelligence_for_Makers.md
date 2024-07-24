---
description:  Introduction to Artificial Intelligence for Makers
title:  面向创客的人工智能简介
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Introduction_to_Artificial_Intelligence_for_Makers
last_update:
  date: 3/06/2024
  author: jessie
---

**字数:** 2000

**阅读时间:** 30 minutes

**受众:**

- 给没有计算机科学背景初学者的人工智能（AI）指南。

**目录**

本文的章节快速概述。

- 1.什么是“人工智能（AI）”？
- 2.人工智能（AI）的一些有趣应用
- 3.人工智能（AI）产品列表
- 4.推荐的书籍、课程和视频教程

## 摘要

如今，人工智能（AI）是一个热门话题，在我们的 [在线商店](https://www.seeedstudio.com/)。中与相关的AI产品销售得很好。但我们发现一些客户，即传统的硬件开发者，通常没有扎实的计算机科学背景。本文的目的是激发兴趣，并为那些想开始深度学习之旅的创客提供一般的理解。我将指出一些常见的用例和潜在的陷阱。此外，在本文的最后，我将推荐一些课程和书籍，以便更深入地了解这个主题。

## 1.  什么是“人工智能（AI）”？

如今，人工智能（AI）无处不在。“数据挖掘”、“人工智能”、“人工神经网络”……听起来很混乱，对吧？每年都有公司和计算机科学家创造出成千上万个新术语，但却从未向您解释过 **他们究竟什么是** 。

根据维基百科的定义：
 >Artificial intelligence (AI), 有时也称为机器智能，是机器展示的智能，与人类和动物展示的自然智能相对。

 然而，除非它被用作严谨的学术术语，否则我们通常使用这个术语来指代人工神经网络。因为近年来这项技术的爆炸性发展导致了太多的计算产品和商业宣传，逐渐取代了“AI”这个术语本身的含义。因此，现在当企业说“AI产品”时，通常是指用于加速神经网络操作的产品。

一些广告和“教程”会向您展示下面这样的图片，它让您想起我们大脑中的神经元。但实际上，神经元只是一个优美的类比。在计算机科学中，“神经网络”这个术语是一个完全数学的问题。如果您不理解算法，这张图片 **没什么意义** 。 

![](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1554974523222.png)

因此，如果您想进入深度学习，第一件事就是理解这个术语背后的数学原理。我今天不想详细解释算法，您需要知道的是，神经网络模型与您高中代数课上的一个简单问题有一些联系。在本文的最后一部分，我将为初学者推荐一些课程和书籍。
深度学习是一个年轻的实验性学科，每天都有定期更新。如果您想掌握它，最重要的是选择一个主题或一个真实的问题，并尽可能多地阅读相关的研究论文。

## 2. 人工智能（AI）的一些有趣应用

### 计算机视觉

人类可以在几秒钟内通过凝视识别任何物体，对他们来说这是非常容易的。但对于机器来说，直到Hinton和Alex Krizhevsky在2012年获得ImageNet比赛的胜利，物体的识别一直是一个非常复杂的任务。

然后，神经网络主导了视觉领域，尤其是分类和分割问题，卷积神经网络是最突出的方法之一，在近年来的许多比赛中取得了杰出的成绩。它在图像识别方面有着出色的结果。
NVIDIA为Jetson Nano构建了许多 [视觉演示](https://github.com/dusty-nv/jetson-inference) ，我们已经测试了其中两个用于分类和人脸检测：
<iframe width="800" height="450" src="https://www.youtube.com/embed/U0rNdI9pl_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 艺术

**[Google Magenta](https://magenta.tensorflow.org/)** 这是一个开源的研究项目，探索机器学习在创作过程中的作用。由于AI驱动的涂鸦    [庆祝约翰·塞巴斯蒂安·巴赫](https://www.google.com/doodles/celebrating-johann-sebastian-bach) ，这个项目组为公众所知。 
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056026898.png)

以下是一些交互演示：

[魔法草图板](https://magic-sketchpad.glitch.me/) 每次您开始画一个涂鸦时，Sketch RNN都会尝试完成并与您选择的类别匹配。

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059163496.png)

[钢琴精灵](http://piano-genie.glitch.me/) 使用机器学习，假装自己是一个钢琴大师。

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059135929.png)

[潜在循环](https://goo.gl/magenta/latent-loops) 在调整到不同音阶的矩阵上勾勒旋律，探索一组生成的旋律循环，并使用它们对更长的作品进行编排。由Google的Pie Shop使用。

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059104497.png)

### 物联网和传感器

**智能停车** 在密集交通环境中停车经常导致车辆在寻找免费停车位上浪费过多时间，从而导致拥堵和环境污染。缺乏指导信息指向空闲停车位是低效停车行为的原因之一。智能停车传感器和技术可以指导驾驶员找到空闲停车位，从而提高停车效率。目前，开放式停车场还没有使用此类传感器或技术。因此，还有一些工作要做。
[分散式停车场占用的深度学习](https://github.com/fabiocarrara/deep-parking)

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555055835602.png)

[**LSTMs for Human Activity Recognition**](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition)人类活动识别（HAR）是普适计算和人机交互领域的重要研究领域。为了使用移动或可穿戴传感器识别活动，需要使用适当的传感器收集数据，对数据进行分段，提取所需的特征，并使用判别模型（SVM、HMM、MLP等）对活动类别进行分类。在这个项目中，开发者使用了LSTM，令人惊讶的是，最终的准确率达到了91%，峰值甚至达到了93.25%。

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555057001717.png)

### 自然语言处理（NLP）

在知识时代，自然语言处理（NLP）通过广泛的应用需求表达出其重要性。以前，NLP处理的是静态数据。现在，NLP正在处理语料库、词典数据库和模式识别等方面。考虑到深度学习（DL）方法能够识别人工神经网络（NN）进行非线性处理，NLP工具变得越来越准确和高效，从而引发了一场革命。
[NLP-progress](https://github.com/sebastianruder/NLP-progress) 这个项目旨在跟踪自然语言处理（NLP）的进展，并概述最常见的NLP任务及其相应的数据集的最新技术水平（SOTA）。

#### 医学

人工智能正在改变医学世界。AI可以帮助医生更快、更准确地进行诊断。它可以预测疾病的风险，以便及时预防。它可以帮助研究人员了解基因变异如何导致疾病。它增强了医生分析医学影像的能力。它推动了个性化医学的未来发展。
目前，正在大力开发使用这些算法来丰富医学影像应用，以诊断疾病诊断系统中的错误，从而可能导致极其模糊的医疗治疗。机器学习和深度学习算法是医学影像中预测早期疾病症状的重要方法。具体而言，卷积网络等深度学习技术已经迅速成为研究医学影像的特定方法论。这一套算法可用于疾病研究和自动决策的调查，备受关注。

[**医学影像的深度学习工具包（DLTK）**](https://github.com/DLTK/DLTK)
DLTK 是一个用Python编写的神经网络工具包，基于TensorFlow开发。它旨在实现快速原型设计，降低门槛，并确保在图像分析应用中的可重复性，特别关注医学影像领域。其目标是为社区提供最先进的方法和模型，并加速这一令人兴奋的领域的研究。
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056241911.png)

#### 其他

[**LotteryPredict**](https://github.com/chengstone/LotteryPredict) 这个示例使用了lstm和TensorFlow来预测彩票。

## 3. 人工智能（AI）产品列表

如今，人工智能在消费者和企业应用中无处不在。开发者开始尝试将其应用于嵌入式和机器人领域，但传统的嵌入式开发板的性能明显不足。英特尔、英伟达、谷歌和华为等跨国公司都推出了他们的深度学习产品，其中Jetson Nano最近受到了最多的关注，它使得以实惠的价格和超低功耗在嵌入式系统中部署中型神经网络成为可能。Sipeed和Firefly等小公司也推出了自己针对特定细分领域的产品。以下是一些示例。

[**NVIDIA Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-p-2916.html)
>The NVIDIA® Jetson Nano™ 开发者套件以前所未有的尺寸、功耗和成本提供了运行现代AI工作负载所需的计算性能。开发人员、学习者和创客现在可以运行用于图像分类、目标检测、分割和语音处理等应用的AI框架和模型。
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050651109.png)

[**Google Coral Dev Board**](https://www.seeedstudio.com/Coral-Dev-Board-p-2900.html)
>Coral Dev Board是一款单板计算机，配备可拆卸的系统模块（SOM），包含eMMC、SOC、无线电和Google的Edge TPU。它非常适合需要快速设备端机器学习推理的物联网设备和其他嵌入式系统。
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050567750.png)

[**Sipeed MAix Go Suit for RISC-V AI+IoT**](https://www.seeedstudio.com/Sipeed-MAix-GO-Suit-for-RISC-V-AI-IoT-p-2874.html)
>MAIX是Sipeed专为在边缘运行AI而设计的模块，我们称之为AIoT。它在小尺寸和低功耗的同时提供高性能，能够在边缘部署高精度的AI，并且竞争力的价格使其能够嵌入到任何物联网设备中。正如您所看到的，Sipeed MAIX与Google边缘TPU非常相似，但它是作为主控制器而不是加速器，因此比AP+边缘TPU解决方案更低成本、低功耗！
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051060453.png)

[**Intel Movidius MA245X AI Kit Compatible w/ Intel Movidius Stick**](https://www.seeedstudio.com/Intel-Movidius-MA245X-AI-Kit-Compatible-w-Intel-Movidius-Stick-p-3146.html)
>Horned Sungem（HS）致力于成为最简单、最灵活的AI设备，为所有开发者、学生、AI爱好者和热衷者提供轻松创建自己的AI应用的机会。无需依赖深度学习框架或复杂库，只需将Horned Sungem插入USB端口并运行一个简短的安装脚本，您的设备就可以看到并理解世界。
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050985486.png)

[**HiKey 970 Development Board**](https://www.seeedstudio.com/HiKey-970-Development-Board.html)
>Hikey970是由Kirin970 SOC驱动的超级边缘AI计算平台，具有4个Cortex A73和4个Cortex A53核心。Hikey970配备了6GB LPDDR4 RAM、64GB UFS存储、千兆以太网、GPS、PCIE Gen2和CAN总线。作为全球首款专用NPU AI平台，Hikey970集成了华为HiAI计算架构和流行的神经网络框架，支持CPU、GPU AI和专用于AI加速的神经处理单元。此外，它还配备了华为的HiAI SDK。Hikey 970可用于构建深度学习、机器人、汽车和智能城市等多种应用。
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051309338.png)

## 4. 推荐的书籍、课程和视频教程

### 书籍

1. [《神经网络与深度学习》](http://neuralnetworksanddeeplearning.com/)  这是全球最友好的神经网络教材之一，没有令人讨厌的术语，完全免费在线阅读。但是书中的代码可能有点过时，如果您熟悉C++，可以使用它们来理解原理。
2. [《Python深度学习》](https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438) 本书旨在为希望从零开始探索深度学习或扩展对深度学习理解的人提供帮助。无论您是实践机器学习工程师、软件开发人员还是大学生，您都会在这些页面中找到价值所在。
3. [《Python数据分析》](https://www.cin.ufpe.br/~embat/Python%20for%20Data%20Analysis.pdf)  这是一本经典的数据分析教程，至今仍然非常实用。

### 课程

1. [《TensorFlow创意应用深度学习》](https://link.zhihu.com/?target=https://www.class-central.com/mooc/6679/kadenze-creative-applications-of-deep-learning-with-tensorflow) 该课程介绍了深度学习：构建人工智能算法的最先进方法。

2. [《斯坦福CS231n：用于视觉识别的卷积神经网络》](https://link.zhihu.com/?target=http://cs231n.stanford.edu/) 该课程深入研究了深度学习体系结构的细节，重点学习用于图像分类等任务的端到端模型。

3. [《UC伯克利AI-Sys 2019年春季课程》](https://ucbrise.github.io/cs294-ai-sys-sp19/) 该课程介绍了从经典结构（如AlexNet）到支持下一代AI应用的系统设计的最新趋势，以及应用AI优化架构和系统性能。对在线学生来说，最有价值的部分是提供的必读书目列表。

### 视频教程

1. [ScaledML 2019](https://www.youtube.com/playlist?list=PLRM2gQVaW_wWXoUnSfZTxpgDmNaAS1RtG)
2. [《计算机体系结构的新黄金时代：历史、挑战和机遇》](https://www.youtube.com/watch?v=uyc_pDBJotI&t=767s)
3. [SysML 18: Perspectives and Challenges.](https://www.youtube.com/watch?v=4inIBmY8dQI&t=26s)
4. [《David Silver的强化学习课程》](https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLzuuYNsE1EZAXYR4FJ75jcJseBmo4KQ9-)

感谢您选择我们的产品！我们将为您提供不同的支持，以确保您对我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
