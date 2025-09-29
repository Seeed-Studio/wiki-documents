---
description: 区分饮料
title: 区分饮料
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-EI-5
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

# Wio Terminal Edge Impulse 使用多通道气体传感器区分饮料

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg"/></div>

在本教程中，我们将介绍如何使用 [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 与 [**Edge Impulse**](http://edgeimpulse.com/) 来简单部署一个机器学习项目。Wio Terminal 配合 [**Grove 系统**](https://www.seeedstudio.com/category/Grove-c-1003.html) 可以非常强大，它可以引入数百种传感器数据进行分析，并可能评估不同的场景！

这是一个受到 [Benjamin Cabé 的人工鼻子项目](https://twitter.com/kartben/status/1258791793073815552) 启发的项目。通过本文，您将了解使用 Wio Terminal 的 Edge Impulse 工作流程。

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Grove - 多通道气体传感器 v2**](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)

- 一些酒精、咖啡、可乐

## 开始使用

让我们带您了解 Edge Impulse 与 Wio Terminal 的工作流程。

### 1. 连接到 Edge Impulse

#### ① 将最新的设备固件加载到 Wio Terminal

将 Wio Terminal 连接到您的计算机。通过快速滑动电源开关两次进入引导加载程序模式。更多参考信息，请参见[这里](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/#faq)。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

您的 PC 中应该出现一个名为 `Arduino` 的外部驱动器。将下载的 [**Edge Impulse uf2 固件文件**](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/edge_impulse_firmware.uf2) 拖到 `Arduino` 驱动器中。现在，Edge Impulse 已加载到 Seeeduino Wio Terminal 上！

**注意：** 这里是 [Wio Terminal Edge Impulse 源代码](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse)，您也可以从这里构建固件。

#### ② 使用 WebUSB 连接

转到您的 Edge Impulse 项目，点击数据采集选项卡，然后您可以在右上角看到选择 `Connect using WebUSB`。点击它。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/webusb.jpg" /></div>
然后，您可以看到一个弹出提示，选择配对的串行端口并"连接"，如下图所示。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/paired.jpg" /></div>
现在，您已成功将 Wio Terminal 与 Edge Impulse 连接。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/connected.jpg" /></div>

### 2. 收集数据

将 **Grove - 多通道气体传感器 v2 连接到 Wio Terminal 的 Grove I2C 端口**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/I2C.jpg" /></div>

将 Grove - 多通道气体传感器 v2 放置在您要测试的饮料上，在我的例子中首先是可乐。这里需要指出的一点是，**Grove - 多通道气体传感器 v2 很容易受到周围环境的影响，您可能需要使用盖子来确保它只感应测试内容**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/test.jpg"/></div>

在 **Edge Impulse 仪表板**上，导航到**数据采集**，选择您的设备，并命名您的**标签**。顾名思义，标签应该根据您的测试内容命名，所以这里也将是 **cola**。

**采样长度（毫秒）**将是您的采样时间长度（以毫秒为单位），**传感器**选择**外部多通道气体**，**频率**选择 **10Hz**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/cola.jpg"/></div>

点击**开始采样**，它将开始收集数据。

在我的测试中，我获得了可乐数据 **10 秒** **9 次**，每次都有相似的结果。您需要拥有彼此相当相似的数据集。

:::note
    如果您的数据波动很大，这可能是由周围环境引起的。
:::

一旦您有足够的一个标签的数据，您可以对其他标签执行完全相同的步骤！在我的测试中，我有另外三个数据集：空气、咖啡和酒精：

- **空气数据集：**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/air.jpg"/></div>

- **咖啡数据集：**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/coffee.jpg"/></div>

- **酒精数据集：**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/alcohol.jpg"/></div>

您应该看到不同的饮料会有不同的气体值，这使其非常适合机器学习！此外，拥有更多数据进行后续训练总是更好的，所以请随时收集更多数据！

:::note
    随时添加更多类别的酒精！
:::

### 3. 设计脉冲

接下来，我们需要通过点击**脉冲设计** -> **创建脉冲**来设计脉冲。脉冲获取原始数据，使用信号处理提取特征，然后使用学习块对新数据进行分类。在这个例子中，我添加了一个**原始数据**的处理块，包含所有输入轴，并添加了一个**神经网络（Keras）**学习块，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/impulse.jpg"/></div>

点击**保存脉冲**，在脉冲设计下点击**原始数据**，您应该看到数据集的原始特征：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/rawdata.jpg"/></div>

点击 **Save parameters**，然后它会导航到另一个页面。点击 **Generate Features**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/feature.jpg"/></div>

这将从之前的数据集生成特征，您将在右侧看到一个图表。如果数据集彼此分离，意味着数据集彼此独特，这使得机器学习差异变得更好。

### 4. 训练数据

在 **Impulse Design** 下，点击 **NN Classifier** 来配置神经网络的设置，以下是我的设置：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/net.jpg" /></div>

您可能需要根据需要调整这些设置并配置您的 **神经网络架构**，然后点击 **Start training**！这将执行训练，可能需要一段时间。

训练完成后，您将看到一个训练性能表。如果您的数据集彼此独特，您应该会得到相当好的结果！这是我的性能：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/performance.jpg"/></div>

从中可以看出，准确性还不错，这是因为只有4个案例。您可能想要为此示例添加更多案例/测试。

### 5. 实时分类

现在我们已经训练了模型，我们可以用新数据测试模型。导航到 **Live classification**，并采样新的数据集进行测试。

- 测试示例 1：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test1.jpg"/></div>

- 测试示例 2：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test2.jpg"/></div>

从结果中我们可以看到，这是相当好的结果，您能够在 Edge Impulse 的帮助下使用 Grove - 多通道气体传感器 v2 来区分酒精！

## 部署到 Wio Terminal

下一步是在设备上部署。点击 Deployment 选项卡后，选择 Arduino library 并下载它。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png" /></div>

解压存档文件并将其放置在您的 Arduino 库文件夹中。打开 Arduino IDE 并选择静态缓冲区草图（位于 File -> Examples -> 您的项目名称 -> static_buffer），它已经包含了使用您的模型进行分类的所有样板代码。很棒！

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/code.jpg" /></div>

用户唯一需要填写的是函数 raw_feature_get_data(size_t offset, size_t length, float *out_ptr)。

```cpp
int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
    float features[4];
    features[0]=gas.getGM102B();
    features[1] = gas.getGM302B();
    features[2]=gas.getGM502B();
    features[3]=gas.getGM702B();
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}
```

## 完整代码

```cpp
#include <coffee_cola_alcohol_big_inferencing.h>
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>
GAS_GMXXX<TwoWire> gas;

int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
    float features[4];

    features[0]=gas.getGM102B();
    features[1] = gas.getGM302B();
    features[2]=gas.getGM502B();
    features[3]=gas.getGM702B();
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}

void setup()
{
    // 在这里放置你的设置代码，只运行一次：
    Serial.begin(115200);
    gas.begin(Wire, 0x08); // 使用硬件 I2C
    Serial.println("Edge Impulse 推理演示");
}

void loop()
{
    ei_printf("Edge Impulse 独立推理 (Arduino)\n");

 
    ei_impulse_result_t result = { 0 };

    // 特征存储在闪存中，我们不想将所有内容加载到 RAM 中
    signal_t features_signal;
    features_signal.total_length = sizeof(features) / sizeof(features[0]);
    features_signal.get_data = &raw_feature_get_data;

    // 调用脉冲
    EI_IMPULSE_ERROR res = run_classifier(&features_signal, &result, false /* debug */);
    ei_printf("run_classifier 返回: %d\n", res);

    if (res != 0) return;

    // 打印预测结果
    ei_printf("预测结果 ");
    ei_printf("(DSP: %d ms., 分类: %d ms., 异常: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    ei_printf("[");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("%.5f", result.classification[ix].value);
#if EI_CLASSIFIER_HAS_ANOMALY == 1
        ei_printf(", ");
#else
        if (ix != EI_CLASSIFIER_LABEL_COUNT - 1) {
            ei_printf(", ");
        }
#endif
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("%.3f", result.anomaly);
#endif
    ei_printf("]\n");

    // 人类可读的预测结果
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    异常分数: %.3f\n", result.anomaly);
#endif

    delay(1);
}

/**
 * @brief      Printf 函数使用 vsnprintf 并通过 Arduino Serial 输出
 *
 * @param[in]  format     可变参数列表
 */
void ei_printf(const char *format, ...) {
    static char print_buf[1024] = { 0 };

    va_list args;
    va_start(args, format);
    int r = vsnprintf(print_buf, sizeof(print_buf), format, args);
    va_end(args);

    if (r > 0) {
        Serial.write(print_buf);
    }
}
```

## 参考资料

- [Benjamin Cabé 的人工鼻子项目](https://twitter.com/kartben/status/1258791793073815552)

- [Edge Impulse 公共项目](https://studio.edgeimpulse.com/public/37392/latest)

- [项目 Github](https://wiki.seeedstudio.com/cn/Wio-Terminal-Edge-Impulse)
