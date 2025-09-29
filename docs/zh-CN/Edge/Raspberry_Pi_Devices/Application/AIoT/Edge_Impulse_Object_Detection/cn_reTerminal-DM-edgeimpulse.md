---
description: 使用 Edge Impulse 和 reTerminal DM 进行物体检测
title: 使用 Edge Impulse 和 reTerminal DM 进行物体检测
keywords:
  - Edge
  - reTerminalDM Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM-edgeimpulse
last_update:
  date: 9/21/2023
  author: Kasun Thushara
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" alt="pir" width="800" height="auto"/></p>

## 介绍

在当今的数字化环境中，边缘 AI 和物联网（IoT）技术的集成为开发者和爱好者开启了令人兴奋的可能性。Edge Impulse 是一个强大的平台，它简化了为边缘设备创建机器学习模型的过程。在这个分步指南中，我们将引导您完成在 reTerminal DM 设备上安装 Edge Impulse 并创建本地物体检测解决方案的过程。

您将学到：

- 为您的 reTerminal DM 安装必要的依赖项。
- 为您的项目设置 Node.js 和 npm。
- 部署 Edge Impulse Linux CLI 工具。
- 在 Edge Impulse 中创建和训练物体检测模型。
- 在 reTerminal DM 设备上本地部署和测试您的模型。

在本指南结束时，您将对如何在 reTerminal DM 等边缘设备上利用 Edge Impulse 的强大功能进行物体检测有一个实际的理解。那么，让我们深入探索本地 AI 驱动物体检测的激动人心的世界吧！

### 硬件准备

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-With-Camera-p-5648.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Edge Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/Edge_Impulse.jpg" alt="pir" width="200" height="auto"/></p>

Edge Impulse 是一个多功能平台，专门致力于简化为边缘设备（如微控制器和嵌入式系统）量身定制的机器学习模型开发。这个综合解决方案简化了整个机器学习工作流程，包括数据收集、预处理、模型训练、部署和监控，所有这些都在一个统一的环境中完成。它的突出特点之一是用户友好的界面，允许用户轻松收集和标记数据，同时提供预构建的信号处理块和机器学习算法库，以实现高效的模型开发。Edge Impulse 专为在资源受限的边缘设备上实现最佳推理性能而设计，确保实时处理而无需依赖持续的互联网连接。它通过与各种流行硬件平台的无缝集成得到进一步增强，使开发人员能够轻松部署模型。

### 软件准备

我们建议从官方网站安装最新版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此[指南](https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os)中概述的步骤进行操作。

:::note

如果您没有使用 reTerminal DM（带摄像头和 PoE）并希望设置 Raspberry Pi 摄像头，您应该按照此[指南](https://wiki.seeedstudio.com/cn/reterminal-dm-hardware-guide/#install-camera)中提供的说明进行操作。

:::

您需要一个 Edge Impulse 账户才能开始，所以请通过访问此[链接](https://edgeimpulse.com/)创建一个账户。默认情况下会创建初始项目。

## 在您的 reTerminal DM 设备上安装依赖项

**要在 Edge Impulse 中设置此设备，请逐一运行以下命令**

```sh
sudo apt update
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps
npm config set user root && sudo npm install edge-impulse-linux -g --unsafe-perm
```

## 连接到 Edge Impulse

完成所有软件设置后，将您的摄像头或麦克风连接到 reTerminal DM。您需要提供与 Edge Impulse 账户关联的电子邮件地址、密码和设备名称。

```sh
edge-impulse-linux
```

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/connectingdevice.PNG" /></center>

## 验证设备连接

就是这样！您的设备现在已连接到 Edge Impulse。要验证这一点，请转到您的 Edge Impulse 项目，然后点击设备。设备将在此处列出。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/connectdevice.PNG" /></center>

## 检测物体

### 构建数据集

您可以选择直接通过 reTerminal DM 从连接的树莓派摄像头收集数据，或者从本地存储上传预先收集的数据。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/datacollection.png" /></center>

通过选择"摄像头"作为传感器并提供标签名称，您可以启动数据采样过程。

### 标记数据

您收集的所有图像都将在"标记队列"中等待注释。标记您的物体就像在物体周围拖拽一个框并输入标签一样简单。然后点击保存标签。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/labeling.PNG" /></center>

### 重新平衡数据集

为了验证模型的有效性，保留一部分数据（通常约20%）作为"测试集"是至关重要的。这些数据不应在模型训练期间使用，而仅用于验证目的。您可以使用位于"数据收集"小部件上方的两个按钮轻松在训练集和测试集之间切换。如果您在开发板上收集了数据，但测试集中目前没有数据，您可以通过导航到**仪表板 > 执行训练/测试分割**来解决这个问题。

<center><img width={800} height="auto" src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/split.PNG" /></center>

### 创建脉冲

在本教程中，我们一直在使用96x96图像，但需要注意的是，只要图像是正方形的，Edge Impulse 可以处理其他分辨率。要配置这一点，请按照以下步骤操作：首先，转到**创建脉冲**，然后将**图像宽度**和**图像高度**设置为您所需的尺寸（例如，96、160或320）。接下来，选择**适应最短轴**作为**调整大小模式**，并添加**图像**和**物体检测（图像）**块。最后，点击**保存脉冲**以应用这些设置。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/impulse.PNG" /></center>

### 特征生成

在此步骤中，您将执行以下任务：

- 调整所有数据的大小。
- 将处理块应用于整个数据集。
- 生成完整数据集的3D可视化。
- 点击"生成特征"以启动该过程。

之后，"特征浏览器"将加载。此特征浏览器表示数据集中所有数据的图表。由于图像具有众多维度，我们在可视化之前对数据集使用了一种称为"降维"的技术。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/generatf.PNG" /></center>

### 训练

在"**物体检测**"选项卡中，您可以选择训练您的数据集。为此，您需要配置特定参数并选择您打算使用的模型。在本教程中，我们选择FOMO模型，根据其网站介绍，该模型引入了在资源受限设备上运行物体检测模型的革命性方法。FOMO是一种创新算法，为微控制器带来了实时物体检测、跟踪和计数功能，标志着一个重要的里程碑。值得注意的是，FOMO拥有显著的速度优势，性能比MobileNet SSD快30倍，并且可以在少于200K RAM的情况下运行。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/training.PNG" /></center>

完成训练过程后，您将收到一个类似以下的混淆矩阵。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/confutionmat.PNG" height="auto"/></center>

### 验证模型

现在模型已经训练完成，让我们使用一些测试数据来测试它。在数据收集期间，我们将数据集分为训练和测试子集。模型仅在训练数据上进行训练。因此，我们可以使用测试数据集来评估模型在现实场景中的表现如何。这个验证步骤对于确保模型没有过拟合训练数据（这是一个常见问题）至关重要。要验证我们的模型，请导航到**模型测试**并选择**分类全部**

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/test.png" height="auto"/></center>

### 在您的 reTerminal DM 设备上运行模型

在新的空白终端中运行以下命令行。

```sh
edge-impulse-linux-runner
```

此操作将触发模型的构建和下载。然后它将在您的 reTerminal DM 上执行。如果您在同一网络中，您可以访问摄像头画面的实时视图，并直接从您的 reTerminal DM 查看分类结果。转到设备建议的 URL。

```sh
Want to see a feed of the camera and live classification in your browser? Go to http://192.168.8.117:4912
```

## 结论

总之，reTerminal DM 与 Edge Impulse 的无缝集成使开发者能够充分发挥边缘 AI 的潜力。reTerminal DM 凭借其强大的硬件和多功能特性，是运行实时目标检测解决方案的绝佳平台。当与 Edge Impulse 结合使用时，后者简化了在资源受限设备上创建和部署机器学习模型的过程，可能性变得无限。无论您是在开发物联网应用、机器人技术，还是任何需要高效设备端 AI 的项目，reTerminal DM 与 Edge Impulse 之间的强大协同作用都为技术边缘的创新开辟了一个全新的世界。

## 技术支持

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
