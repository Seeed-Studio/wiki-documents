---
description: 使用 Edge Impulse 和 reTerminal 进行目标检测
title: 使用 Edge Impulse 和 reTerminal 进行目标检测
keywords:
  - Edge
  - reTerminal 应用
  - 嵌入式机器学习
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_ML_Edgeimpulse
last_update:
  date: 9/12/2023
  author: Kasun Thushara
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/edgeimpulse.gif" alt="pir" width="800" height="auto"/></p>

## 介绍

在当今的数字化环境中，边缘 AI 和物联网 (IoT) 技术的结合为开发者和爱好者带来了令人兴奋的可能性。其中一个强大的平台是 Edge Impulse，它简化了为边缘设备创建机器学习模型的过程。在本逐步指南中，我们将带您完成在 reTerminal 设备上安装 Edge Impulse 并创建本地目标检测解决方案的过程。

您将学习以下内容：

- 为您的 reTerminal 安装必要的依赖项。
- 为项目设置 Node.js 和 npm。
- 部署 Edge Impulse Linux CLI 工具。
- 在 Edge Impulse 中创建和训练目标检测模型。
- 在 reTerminal 设备上本地部署和测试您的模型。

通过本指南，您将深入了解如何利用 Edge Impulse 的强大功能在像 reTerminal 这样的边缘设备上进行目标检测。让我们一起探索本地 AI 驱动的目标检测的精彩世界吧！

### 硬件准备
<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal</th>
        <th>摄像头模块 V1</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/reterminal.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/camera.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Edge Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/Edge_Impulse.jpg" alt="pir" width="200" height="auto"/></p>

Edge Impulse 是一个多功能平台，专注于简化为边缘设备（如微控制器和嵌入式系统）定制机器学习模型的开发。该综合解决方案简化了整个机器学习工作流程，包括数据收集、预处理、模型训练、部署和监控，所有这些都在一个统一的环境中完成。其突出特点之一是用户友好的界面，用户可以轻松收集和标注数据，同时提供预构建的信号处理模块和机器学习算法库，以实现高效的模型开发。Edge Impulse 专为资源受限的边缘设备优化推理性能，确保实时处理而无需依赖持续的互联网连接。此外，它与众多流行硬件平台无缝集成，使开发者能够轻松部署模型。

### 软件准备

我们建议从官方网站安装最新版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此 [指南](https://wiki.seeedstudio.com/cn/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) 中的步骤操作。

之后，我们需要配置 Raspberry Pi 摄像头，请按照此 [指南](https://wiki.seeedstudio.com/cn/reTerminal-piCam/) 中的步骤操作。

您需要一个 Edge Impulse 账户才能开始，请通过此 [链接](https://edgeimpulse.com/) 创建账户。默认情况下，初始项目将被创建。

## 在 reTerminal 设备上安装依赖项

**要在 Edge Impulse 中设置此设备，请依次运行以下命令**

```sh
sudo apt update
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps
npm config set user root && sudo npm install edge-impulse-linux -g --unsafe-perm
```

## 连接到 Edge Impulse

在完成所有软件设置后，将摄像头或麦克风连接到 reTerminal。您需要提供与 Edge Impulse 账户关联的电子邮件地址、密码以及设备名称。

```sh
edge-impulse-linux
```

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/connectingdevice.png" /></center>

## 验证设备是否已连接

完成了！您的设备现在已连接到 Edge Impulse。要验证这一点，请转到您的 Edge Impulse 项目，然后点击“Devices”。设备会显示在这里。

<center><img width={600} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/connectdevice.PNG" /></center>

## 检测对象

### 构建数据集

您可以选择直接通过 reTerminal 从连接的 Raspberry Pi 摄像头收集数据，或者从本地存储上传预先收集的数据。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/datacollection.png" /></center>

通过选择“Camera”作为传感器并提供标签名称，您可以启动数据采样过程。

### 标注数据

所有收集的图像将被放置在“标注队列”中进行注释。标注对象非常简单，只需在对象周围拖动一个框，然后输入标签。接着点击“保存标签”。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/labeling.PNG" /></center>

### 重新平衡数据集

为了验证模型的有效性，通常需要保留大约 20% 的数据作为“测试集”。这些数据不应在模型训练期间使用，而是专门用于验证。您可以通过“Data collected”小部件上方的两个按钮轻松切换训练集和测试集。如果您在开发板上收集了数据，但测试集中当前没有数据，可以通过导航到 **Dashboard > Perform train/test split** 来解决。

<center><img width={800} height="auto" src="https://files.seeedstudio.com/wiki/ReTerminal/ML/split.PNG" /></center>

### 创建 Impulse

在本教程中，我们使用的是 96x96 的图像，但需要注意的是，Edge Impulse 也可以处理其他分辨率的图像，只要图像是正方形的。配置步骤如下：首先，转到 **Create Impulse**，然后将 **image width** 和 **image height** 设置为所需的尺寸（例如 96）。接着，选择 **Fit shortest axis** 作为 **resize mode**，并添加 **Images** 和 **Object Detection (Images)** 模块。最后，点击 **Save Impulse** 以应用这些设置。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/impulse.PNG" /></center>

### 特征生成

在此步骤中，您将执行以下任务：

- 调整所有数据的大小。
- 将处理模块应用于整个数据集。
- 生成完整数据集的 3D 可视化。
- 点击“Generate features”以启动该过程。

随后，“Feature explorer”将加载。此特征浏览器表示数据集中所有数据的图表。由于图像具有多个维度，我们在可视化之前对数据集应用了一种称为“降维”的技术。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/generatf.PNG" /></center>

### 训练

在 **Object Detection** 选项卡中，您可以选择训练数据集。为此，您需要配置特定参数并选择要使用的模型。在本教程中，我们选择了 FOMO 模型。根据其官网介绍，FOMO 引入了一种革命性的方法，可在资源受限的设备上运行目标检测模型。FOMO 是一种创新算法，为微控制器带来了实时目标检测、跟踪和计数功能，标志着一个重要的里程碑。值得注意的是，FOMO 的速度优势显著，比 MobileNet SSD 快 30 倍，并且可以在不到 200K 的 RAM 上运行。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/training.PNG" /></center>

完成训练过程后，您将获得一个类似以下的混淆矩阵。

<center><img width={600} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/confutionmat.PNG" height="auto"/></center>

### 验证模型

现在模型已经训练完成，让我们使用一些测试数据进行测试。在数据收集期间，我们将数据集分为训练集和测试集。模型仅在训练数据上进行了训练。因此，我们可以使用测试数据集来评估模型在实际场景中的表现。这一步验证非常重要，以确保模型没有过拟合训练数据，这是一个常见问题。要验证模型，请导航到 **Model Testing** 并选择 **Classify all**。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/test.png" height="auto"/></center>

### 在 reTerminal 设备上运行模型

在新的空白终端中运行以下命令行。

```sh
edge-impulse-linux-runner
```

此操作将触发模型的构建和下载。然后，它将在您的 reTerminal 上运行。如果您在同一网络中，可以通过浏览器访问摄像头的实时视图，并直接从 reTerminal 查看分类结果。转到设备提示的 URL。

```sh
Want to see a feed of the camera and live classification in your browser? Go to http://192.168.8.117:4912
```

## 结论

总而言之，reTerminal 与 Edge Impulse 的无缝集成使开发者能够充分释放边缘 AI 的潜力。reTerminal 凭借其强大的硬件和多功能能力，成为运行实时目标检测解决方案的绝佳平台。而 Edge Impulse 简化了在资源受限设备上创建和部署机器学习模型的过程，两者结合后，可能性变得无限。无论您从事的是物联网应用、机器人技术，还是任何需要高效设备端 AI 的项目，这种 reTerminal 和 Edge Impulse 之间的强大协同作用都为技术边缘的创新打开了新的世界。

# 技术支持

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>