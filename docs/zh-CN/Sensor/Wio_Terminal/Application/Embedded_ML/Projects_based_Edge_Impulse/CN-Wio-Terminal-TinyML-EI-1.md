---
description:  Wio Terminal Edge Impulse 入门指南
title:  Wio Terminal Edge Impulse 入门指南
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-EI-1
last_update:
  date: 3/05/2024
  author: 金菊
---

# Wio Terminal Edge Impulse 入门指南

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

[**Edge Impulse**](https://www.edgeimpulse.com/) 可以帮助开发人员在嵌入式机器学习领域创建下一代智能设备解决方案。在边缘进行机器学习将能够利用那些由于成本、带宽或功耗限制而被丢弃的传感器数据。

现在, [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 官方支持 Edge Impulse。让我们看看如何在边缘设备上启动 Wio Terminal，并进行机器学习！

## 安装依赖

为了在 Edge Impulse 中设置 Wio Terminal，您需要安装以下软件：

1. [Node.js v12](https://nodejs.org/en/) 或更高版本。
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. Edge Impulse CLI 和串口监视器。打开命令提示符或终端，运行以下命令进行安装：

```sh
npm install -g edge-impulse-cli 
```

:::注
安装 CLI 时遇到问题？请参考[安装和故障排除](https://docs.edgeimpulse.com/docs/cli-installation) 进行更多参考。
:::

## 连接到 Edge Impulse

当所有软件都准备就绪后，就可以将开发板连接到 Edge Impulse。

### 1.  将开发板连接到计算机

将 Wio Terminal 连接到计算机。通过快速滑动电源开关两次进入 bootloader 模式。更多参考信息，请参见 [这里](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

您的电脑上会出现一个名为  `Arduino`  的外部驱动器。将下载的 [**Edge Impulse uf2 固件文件**](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse/releases/tag/1.4.0) 拖放到 Arduino 驱动器中。现在，Edge Impulse 已加载到 Seeeduino Wio Terminal！

**注:**  这里是 [Wio Terminal Edge Impulse 源代码](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse), 您也可以从这里构建固件。

### 2. 设置密钥

打开命令提示符或终端，运行以下命令：

```sh
edge-impulse-daemon
```

**注:**  当连接到新设备时，运行  `edge-impulse-daemon --clean` 清除之前的缓存。

### 3. 验证设备是否已连接

就是这样！您的设备现在已连接到 Edge Impulse。要验证这一点，请 [转到您的 Edge Impulse 项目](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1), 然后点击 Devices。设备将在此处列出。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/device.png" /></div>

对于您的第一个项目，让我们快速训练和部署一个简单的神经网络，用于通过单个光传感器对剪刀石头布手势进行分类。有关更多详细信息和视频教程，请观看相应的视频！

<iframe width="560" height="315" src="https://www.youtube.com/embed/iCmlKyAp8eQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 训练数据采集

转到数据采集选项卡。将样本长度设置为约10000毫秒或10秒，并为每个手势创建10个样本，在Wio终端附近挥动手部。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif1.gif" /></div>

这是一个小数据集，但我们也有一个小型神经网络，因此在这种特殊情况下，欠拟合的可能性比过拟合更大。

**欠拟合**:
        当统计模型或机器学习算法无法捕捉数据的潜在趋势时，即发生欠拟合（在其他情况下也可能发生），这种情况通常发生在模型大小太小，无法为具有大量噪声和多样性的数据制定一般规则时。

**过拟合**:
        当统计模型开始从噪声和不准确的数据条目中学习时，我们称其为过拟合。当您拥有大型模型和相对较小的数据集时，模型可以只是“死记硬背”所有数据点而没有泛化能力。

在收集样本时，为了使模型能够更好地泛化，提供样本的多样性非常重要，例如，样本具有不同的方向、速度和距离传感器的距离。一般来说，网络只能从数据集中学习到的数据中学习 - 因此，如果您的样本只是在传感器上从左向右移动的手势，那么您不应该期望训练后的模型能够识别从右向左或上下移动的手势。

## 构建机器学习模型

在收集样本后，现在是设计一个 "impulse" 的时候了。这里的 "impulse" 是指 Edge Impulse 用来表示数据处理和训练流程的术语。点击创建 Impulse，并将窗口长度设置为1000毫秒，窗口长度增加设置为50毫秒。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/main.png" /></div>

这些设置意味着每次进行推断时，我们将对1000毫秒内的传感器测量值进行采集。您的设备将根据采样频率进行测量。在数据收集过程中，您将采样频率设置为40赫兹，即每秒采样40次。因此，总结一下，您的设备将在1000毫秒的时间窗口内收集40个数据样本，然后对这些值进行预处理并将其输入到神经网络中进行推断。当然，在训练过程中我们使用相同的窗口大小。
对于这个概念验证项目，我们将尝试三个不同的预处理块，使用默认参数（除了添加了缩放） –
**Flatten** 块，它在时间窗口内计算原始数据的平均值、最小值、最大值和其他函数。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_ZEX5ydSwOS.jpeg" /></div>

**Spectral Features** 块, 它提取信号随时间的频率和功率特征
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_7uXlLwjT3E.jpeg" /></div>
和原始数据块，您可能已经猜到，它只是将原始数据馈送给 NN 学习块（可以选择对数据进行归一化）。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image.png" /></div>
我们将从 Flatten 块开始。添加此块，然后将神经网络（Keras）添加为学习块，勾选 Flatten 作为输入特征，然后点击保存 Impulse。转到下一个选项卡，这个选项卡的名称是您选择的处理块的名称 - Flatten。在缩放中输入0.001，其他参数保持不变。按下保存参数，然后生成特征。

在 Edge Impulse 的 Web 接口中，特征可视化是一个非常有用的工具，它允许用户以图形方式了解数据在预处理后的样子。例如，这是经过 Flatten 处理块处理后的数据：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_4tnpR9t34s.jpeg" /></div>

我们可以看到不同类别的数据点大致被分开，但是石头和其他类别之间存在很多重叠，这将导致这两个类别的问题和低准确率。在生成并检查特征后，转到 NN Classifier 选项卡。
使用2个隐藏层的简单全连接网络进行训练，每个隐藏层有20个和10个神经元，训练500个 epochs，学习率为1e-4。训练完成后，您将在混淆矩阵中看到测试结果，类似于以下内容：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/flatten.png" /></div>
返回到创建 Impulse 选项卡，删除 Flatten 块，选择 Spectral Features 块，生成特征（记得将缩放设置为0.001！），并在 Spectral Features 数据上训练神经网络。您应该会看到略微的改进。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/spectral.png" /></div>
实际上，Flatten 和 Spectral Features 块都不是最适合剪刀石头布手势识别任务的处理方法。如果我们仔细思考，对于分类剪刀石头布手势，我们只需要计算光传感器接收到“低于正常”值的次数以及持续时间。如果是一段相对较长的时间，那么就是石头（手在传感器上方划过）。如果是两次，那么就是剪刀。多于两次就是布。听起来很简单，但保留时间序列数据对于神经网络能够学习数据点中的这种关系非常重要。
Flatten 和 Spectral Features 处理块都会消除窗口内的时间关系 - Flatten 块将最初按顺序排列的原始值转换为在时间窗口内计算的平均值、最小值、最大值等值，而不考虑它们的顺序。Spectral Features 块提取频率和功率特征，而为什么它在这个特定任务中效果不好可能是因为每个手势的持续时间太短。
因此，实现最佳性能的方法是使用 Raw data 块，它将保留时间序列数据。请查看我们使用 Raw data 和一维卷积网络（相对于全连接网络而言，这是一种更专门的网络类型）的示例项目。我们在相同的数据上达到了92.4%的准确率！
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/raw.png" /></div>

训练后的最终结果如下

• Flatten FC 精度为 69.9%

• Spectral Features FC 精度为 70.4%

• Raw Data Conv1D 精度为 92.4%

训练完成后，您可以使用 Live classification 选项卡测试模型，该选项卡将从设备中收集数据样本，并使用 Edge Impulse 上托管的模型进行分类。我们测试了三种不同的手势，并且在概念验证方面准确率令人满意。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/live_class.png" /></div>

## 部署到 Wio Terminal

接下来是在设备上进行部署。点击 Deployment 选项卡，在 Arduino 库中选择并下载 Arduino 库。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png" /></div>

解压缩存档文件，并将其放置在 Arduino 库文件夹中。打开 Arduino IDE，选择静态缓冲区示例（(located in File -> Examples -> name of your project -> static_buffer)，其中已经包含了用于分类的模型的所有样板代码。非常棒！

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/example.png" /></div>

我们唯一需要填写的是设备上的数据采集。我们将使用一个简单的 for 循环和延迟来适应频率（如果您还记得，在收集训练数据集时，我们有25毫秒的延迟）。

```cpp
int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
float features[40];
for (byte i = 0; i < 40; i = i + 1) 
    {
    features[i]=analogRead(WIO_LIGHT);
    delay(25);
    }
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}
```

当然，有更好的实现方法，例如传感器数据缓冲区，这将允许我们更频繁地进行推断。但是我们会在本系列的后续文章中介绍这些。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif3.gif" /></div>

尽管这只是一个概念验证演示，但它确实展示了 TinyML 的巨大潜力。您可能知道使用相机传感器可以识别手势，即使图像被大幅缩小。但是只用一个像素来识别手势完全是另一个层次！

## 参考资料

- [Edge Impulse 公共项目](https://studio.edgeimpulse.com/public/15854/latest)

- [Project Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_1_Intro)
