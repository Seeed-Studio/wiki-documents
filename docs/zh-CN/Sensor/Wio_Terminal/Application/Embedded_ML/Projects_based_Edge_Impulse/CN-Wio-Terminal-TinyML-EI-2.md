---
description:  连续运动识别
title:  连续运动识别
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-EI-2
last_update:
  date: 3/05/2024
  author: 金菊
---


# Wio Terminal Edge Impulse 连续运动识别与内置加速度计

在本教程中，您将使用机器学习构建一个在 Wio Terminal 上运行的手势识别系统。使用基于规则的编程来解决这个任务是困难的，因为人们每次执行手势时的方式都不完全相同。但是机器学习可以轻松处理这些变化。您将学习如何从真实传感器中采集高频率数据，使用信号处理来清理数据，构建神经网络分类器，并将模型部署回设备。在本教程结束时，您将对使用 Edge Impulse 在嵌入式设备中应用机器学习有坚实的理解。

这个教程还有一个视频版本：

<iframe width="560" height="315" src="https://www.youtube.com/embed/FseGCn-oBA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 1. 先决条件

在本教程中，您将需要一个支持的设备。在进行以下操作之前，请先完成  [**Wio Terminal Edge Impulse**](http://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse)  教程。

除了 **Wio Terminal**设备之外, 还支持以下设备。

- [ST B-L475E-IOT01A](https://docs.edgeimpulse.com/docs/unboxing-the-st-b-l475e-iot01a)
- [Arduino Nano 33 BLE Sense](https://docs.edgeimpulse.com/docs/arduino-nano-33-ble-sense)
- [Eta Compute ECM3532 AI Sensor](https://docs.edgeimpulse.com/docs/eta-compute-ecm3532-ai-sensor)
- [任何手机](https://docs.edgeimpulse.com/docs/using-your-mobile-phone)

如果您的设备已连接到工作室中的设备部分，您可以继续：
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/device.png"/></div>

:::注
Edge Impulse 可以接收来自任何设备的数据，包括您已经在生产中使用的嵌入式设备。有关详细信息，请参阅 [Ingestion service](https://docs.edgeimpulse.com/reference-link/ingestion-api) 。
:::

## 2. 收集第一个数据

在设备连接好之后，我们可以开始收集一些数据。在工作室中转到  **Data acquisition**  选项卡。这是存储所有原始数据的地方，如果您的设备连接到远程管理 API，您可以在此处开始采样新数据。

在 **Record new data**下, 选择您的设备，将标签设置为 `idle`样本长度设置为  `5000`, 传感器选择**`Built-in accelerometer`**  ，频率设置为  `62.5Hz`，这表示您要记录10秒钟的数据，并将记录的数据标记为  `idle`。如果需要，您稍后可以编辑这些标签。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/record.png"/></div>

点击开始采样后，将您的设备上下连续运动。大约12秒后，设备应完成采样并将文件上传到 Edge Impulse。在工作室的“已收集数据”下，会出现一行新数据。当您点击它时，您会看到数据的原始图表。由于开发板上的加速度计有三个轴，您会注意到三条不同的曲线，每个轴对应一条曲线。

:::注
重要的是要进行连续运动，因为我们稍后会将数据切割成较小的窗口。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/data.png"/></div>

机器学习在大量数据的情况下效果最好，所以单个样本是不够的。现在是开始构建自己的数据集的时候了。例如，使用以下三个类别，并为每个类别记录大约3分钟的数据：
- Idle - 当您工作时，只是放在桌子上。
- Wave -  从左到右挥动设备。
- Circle - 画圆。

:::注
确保对动作进行变化。例如，进行快速和慢速运动，并改变板子的方向。您永远不知道用户将如何使用设备。最好每个样本收集约10秒钟的数据。
:::

## 3. 设计一个冲量

在准备好训练集之后，您可以设计一个冲量。一个冲量会将原始数据切割成较小的窗口，使用信号处理块提取特征，然后使用学习块对新数据进行分类。信号处理块对于相同的输入始终返回相同的值，用于使原始数据更易于处理，而学习块则从过去的经验中学习。

在本教程中，我们将使用“频谱分析”信号处理块。该块对信号应用滤波器，对信号进行频谱分析，并提取频率和频谱功率数据。然后，我们将使用“神经网络”学习块，该学习块使用这些频谱特征并学习区分三个类别（空闲、画圈、挥手）。

在工作室中转到 **Create impulse**, 将窗口大小设置为 `2000` (您可以点击 `2000 ms` 文本输入确切的值），窗口增加设置为 `80`, 然后添加   `Spectral Analysis` 和 `Neural Network (Keras)`  块。然后点击 **Save impulse**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/impulse-motion.png"/></div>

### 配置频谱分析块

要配置您的信号处理块，请点击左侧菜单中的 **Spectral features** 这会在屏幕顶部显示原始数据（您可以通过下拉菜单选择其他文件），并在右侧的图表中显示信号处理的结果。对于频谱特征块，您将看到以下图表：

- 滤波后 - 应用低通滤波器后的信号。这将去除噪声。
-频域 - 信号重复的频率（例如，每秒进行一次波动将在1 Hz处显示峰值）。
- 频谱功率 - 在每个频率上进入信号的功率量。

一个好的信号处理块对于相似的数据应产生相似的结果。如果您在原始数据图表上移动滑动窗口，图表应保持相似。此外，当您切换到具有相同标签的另一个文件时，即使设备的方向不同，您也应看到相似的图表。

一旦您对结果满意，点击 **Save parameters**. 这将带您进入`Feature generation` 屏幕。在这里，您将执行以下操作：

1. 将所有原始数据切分成窗口（基于窗口大小和窗口增加值）。
2. 在所有这些窗口上应用频谱特征块。

点击 **Generate features** 开始该过程。

之后， `Feature explorer`  会加载。这是所有提取特征与所有生成窗口之间的绘图。您可以使用此图表来比较您的完整数据集。例如，通过将第一个峰值的高度作为 X 轴，将在 0.5 Hz 和 1 Hz 之间的频谱功率作为 Y 轴进行绘制。一个经验法则是，如果您可以在多个轴上直观地区分数据，那么机器学习模型也将能够做到。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/features-motion.png"/></div>

### 配置神经网络

在处理所有数据后，现在是时候开始训练神经网络了。神经网络是一组算法，松散地模拟人脑，旨在识别模式。我们在这里训练的网络将以信号处理数据作为输入，并尝试将其映射到三个类别之一。

那么神经网络如何知道要预测什么呢？神经网络由一层层的神经元组成，彼此相互连接，每个连接都有一个权重。输入层中的一个神经元可以是 X 轴上第一个峰值的高度（来自信号处理块）；输出层中的一个神经元可以是“挥手”（其中一个类别）。在定义神经网络时，所有这些连接都是随机初始化的，因此神经网络会进行随机预测。在训练过程中，我们将获取所有原始数据，要求网络进行预测，然后根据结果微调权重（这就是为什么标记原始数据很重要）。

通过这种方式，在很多次迭代之后，神经网络学习到了；并且最终在预测新数据方面会变得更加准确。让我们尝试一下，点击菜单中的 **NN Classifier** 。

将 `Number of training cycles` 设置为  `1`。这将限制训练为单次迭代。然后点击开始训练。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/perf-motion.png"/></div>

现在将  `Number of training cycles` 更改为  `2` ，您将看到性能提高。最后，将  `Number of training cycles` 更改为 `100`  或更多，然后让训练完成。您刚刚训练了您的第一个神经网络！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/perf-2.png"/></div>

:::注
在训练 100 次后，您可能会得到 100% 的准确率。这未必是件好事，因为这可能表明神经网络对特定的测试集进行了过度调优，并且在新数据上的表现可能较差（过拟合）。减少这种情况的最佳方法是添加更多数据或者 [降低学习率](https://docs.edgeimpulse.com/docs/reducing-the-learning-rate)。
:::

## 4.  对新数据进行分类

根据前一步骤中的统计信息，我们知道该模型对我们的训练数据是有效的，但是网络在新数据上的表现如何呢？点击菜单中的 `Classify new data`. 来找出答案。您的设备应该（就像在第二步中一样）在“对新数据进行分类”下显示为在线状态。将`Sample length` 设置为 `5000` (5 seconds), 点击 **Start sampling**  并开始进行动作。之后，您将获得一个完整的报告，了解网络认为您做了什么。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/test.png"/></div>

如果神经网络表现不佳，可能有多种原因，但最常见的原因包括：

1. 数据不足。神经网络需要学习数据集中的模式，数据越多越好。
2. 数据与网络之前见过的其他数据不相似。当某人以您没有添加到测试集中的方式使用设备时，这种情况很常见。您可以通过点击文件，然后选择 **Move to training set**. 将当前文件添加到测试集中。在训练之前确保更新`Data acquisition` 下的标签。
3. 模型的训练不够充分。将迭代次数增加到 `200` ，看看性能是否提高（分类的文件已存储，您可以通过 `Classify existing validation sample`加载它）。
4. 模型过度拟合，因此在新数据上表现不佳。尝试减小学习率或添加更多数据。
5. 神经网络架构不适合您的数据。尝试调整层数和神经元数量，看看性能是否提高。

正如您所见，在构建神经网络时仍然存在很多试错过程，但我们希望可视化能够帮助很多。您还可以通过 `Model validation`运行网络以针对完整的验证集。将模型验证页面视为模型的一组单元测试！

当我们有一个可工作的模型时，我们可以查看当前脉冲在表现不佳的地方......

## 5. 异常检测

神经网络很棒，但它们有一个重大缺陷。它们无法很好地处理它们以前从未见过的数据（如新的手势）。神经网络无法对此进行判断，因为它们只知道训练数据。如果您提供的内容与它以前见过的任何内容都不相似，它仍然会将其分类为三个类别之一。

让我们看看在实践中如何解决这个问题。转到 `Live classification` 并记录一些新数据，但现在强烈晃动设备。看一下网络如何仍然预测某个类别。

那么...我们如何做得更好呢？如果您在 accX RMS、accY RMS 和 accZ RMS 轴上查看特征探索器，您应该能够在视觉上将分类数据与训练数据分开。我们可以利用这一点，训练一个新的（第二个）网络，该网络在我们以前见过的数据周围创建聚类，并将传入的数据与这些聚类进行比较。如果与聚类的距离过大，您可以将样本标记为异常，并不信任神经网络的预测。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/ano.png"/></div>

要添加此块，请转到 **Create impulse**, 点击 **Add learning block**, 然后选择 `K-means Anomaly Detection` 异常检测。然后点击 **Save impulse**。

要配置聚类模型，请点击菜单中的 **Anomaly detection** 在这里，我们需要指定：

- 聚类的数量。这里使用 `32`。
- 进行聚类时要选择的轴。由于我们可以在 accX RMS、accY RMS 和 accZ RMS 轴上视觉上分离数据，所以选择这些轴。

点击 **Start training** 以生成聚类。您可以使用下拉菜单将现有的验证样本加载到异常探测器中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/ano-2.png"/></div>

已知聚类以蓝色显示，晃动数据以橙色显示。它明显不属于任何已知聚类并且因此可以标记为异常。

:::注
异常探测器一次只绘制两个轴。在 `average axis distance` 下，您可以看到验证样本与每个轴的距离有多远。使用下拉菜单更改轴。
:::

## 6. 部署回设备

完成脉冲的设计、训练和验证后，您可以将该模型部署回设备中。这样，模型就可以在没有互联网连接的情况下运行，最小化延迟，并以最低的功耗运行。Edge Impulse可以将完整的脉冲打包 - 包括信号处理代码、神经网络权重和分类代码 - 放在一个单独的C++库中，您可以将其包含在嵌入式软件中。

在点击部署选项卡后，选择Arduino库并下载它。解压缩存档并将其放置在Arduino库文件夹中。打开Arduino IDE并选择Examples->您的项目名称Inferencing Edge Impulse->nano_ble33_sense_accelerometer sketch。我们的板子与Arduino Nano BLE33 Sense类似，但使用了不同的加速度计（LIS3DHTR而不是LSM9DS1），因此我们需要相应地更改数据采集部分。而且，由于Wio Terminal有液晶屏幕，我们将在检测到的类别名称超过阈值时显示该类别的名称。
首先更改头文件

```cpp
#include <Arduino_LSM9DS1.h>
```

为

```cpp
#include"LIS3DHTR.h"
#include"TFT_eSPI.h"
LIS3DHTR<TwoWire> lis;
TFT_eSPI tft;
```

然后更改设置函数中的初始化

```cpp
    if (!IMU.begin()) {
        ei_printf("Failed to initialize IMU!\r\n");
    }
    else {
        ei_printf("IMU initialized\r\n");
    }
```

为

```cpp
    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_WHITE);

 lis.begin(Wire1);
    
    if (!lis.available()) {
    Serial.println("Failed to initialize IMU!");
    while (1);
    }
    else {
        ei_printf("IMU initialized\r\n");
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // Setting scale range to 2g, select from 2,4,8,16g
```

我们在循环函数中进行数据采集和推断，在这里我们需要将数据采集从LSM9DS1更改为LIS3DHTR的数据采集函数

```cpp
IMU.readAcceleration(buffer[ix], buffer[ix + 1], buffer[ix + 2]);
```

为

```cpp
lis.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);
```

然后，在将类名显示在LCD屏幕上之后，添加以下代码块

```cpp
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif
```

我们将检查每个类的置信度值，如果其中一个高于阈值，就会改变屏幕的颜色并显示该类的名称。

```cpp
   if (result.classification[1].value > 0.7) {
    tft.fillScreen(TFT_PURPLE);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Wave", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
   }
   
   if (result.classification[2].value > 0.7) {
    tft.fillScreen(TFT_RED);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Circle", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
   }
```

然后编译和上传 - 打开串行监视器并执行手势！您将能够在串行监视器和LCD屏幕上看到推断结果的显示。

## 7. 结论

机器学习是一个非常有趣的领域：它可以帮助您构建从过去经验中学习、自动在传感器数据中寻找模式、搜索异常而无需显式编程的复杂系统。我们认为在嵌入式系统中进行机器学习有巨大的机会。目前收集了大量的传感器数据，但由于成本、带宽或功耗限制，其中99%的数据目前被丢弃。

Edge Impulse帮助您解锁这些数据。通过直接在设备上处理数据，您不再需要将原始数据发送到云端，而可以直接在关键位置得出结论。我们迫不及待地想看到您将会构建什么！

## 参考资料

- [Edge Impulse Continuous motion recognition](https://docs.edgeimpulse.com/docs/continuous-motion-recognition)

- [Wio Terminal Edge Impulse 入门指南](http://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse)
