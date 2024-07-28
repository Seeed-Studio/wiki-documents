---
description:  识别饮料
title:  识别饮料
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-TinyML-EI-5
last_update:
  date: 3/06/2024
  author: 金菊
---

# 使用Wio Terminal和Edge Impulse识别多通道气体传感器中的饮料

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg"/></div>

在本文中，我们将介绍如何使用 [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 和 [**Edge Impulse**](http://edgeimpulse.com/)简单部署一个机器学习项目。搭配[**Grove systems**](https://www.seeedstudio.com/category/Grove-c-1003.html)的Wio Terminal非常强大，可以带入数百个传感器数据进行分析，并可能评估不同的场景!

这个项目受到了 [Benjamin Cabé's Artificial nose project](https://twitter.com/kartben/status/1258791793073815552) 项目的启发。通过本文，您将了解使用Wio Terminal的Edge Impulse的工作流程。

## 所需硬件
- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Grove - Multichannel Gas Sensor v2**](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)

- 一些酒精、咖啡、可乐

## 入门指南

让我们来介绍一下使用Wio Terminal和Edge Impulse的工作流程。

### 1. 连接到 Edge Impulse

#### ① 将最新的设备固件加载到 Wio Terminal

将Wio Terminal连接到您的计算机。通过快速滑动电源开关两次，进入引导模式。更多参考，请参阅 [这里](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

您的电脑上应该会出现一个名为 `Arduino` 的外部驱动器。将下载的 [**Edge Impulse uf2 firmware files**](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/edge_impulse_firmware.uf2) 拖放到Arduino驱动器中。现在，Edge Impulse 已加载到 Seeeduino Wio Terminal 上！

**注:** 这是 [Wio Terminal Edge Impulse 源代码](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse) , 您也可以从这里构建固件。

#### ② 使用WebUSB进行连接

 进入您的Edge Impulse项目，点击“数据采集”选项卡，然后您可以在右上角看到 `Connect using WebUSB` 的选项。点击它。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/webusb.jpg" /></div>
然后，您会看到一个弹出提示，选择配对的串行端口，并选择 "Connect" ，如下图所示。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/paired.jpg" /></div>
现在，您已成功将Wio Terminal与Edge Impulse连接。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/connected.jpg" /></div>

### 2. 数据采集

将 **Grove - Multichannel Gas Sensor v2 连接到 Wio Terminal的 Grove I2C 端口**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/I2C.jpg" /></div>

将Grove - Multichannel Gas Sensor v2放置在您要测试的饮料上，以我的情况为例，首先是可乐。这里需要指出的一件事是， **Grove - Multichannel Gas Sensor v2 很容易受到周围环境的影响，您可能需要使用保护罩来确保它只感应到测试内容。**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/test.jpg"/></div>

在 **Edge Impulse dashboard**上, 导航至 **Data acquisition**, 选择您的设备，并为**Label**命名。 正如其含义，标签应根据您的测试内容进行命名，因此这里将是**cola**

**Sample length (ms.)** 将是您采样时间的长度(以毫秒为单位), **Sensor** 选择 **External multichannel gas（外部多通道气体）**，**Frequency** 选择 **10Hz**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/cola.jpg"/></div>

点击 **Start Sampling** 它将开始收集数据。

在我的测试中，我已经为 **10s** 的时间内采集了 **9 times** 的可乐数据，每次结果都相似。您需要拥有相互之间相当相似的数据集。

:::注
    如果您的数据波动很大，可能是由于周围环境的原因。
:::

一旦您对一个标签有足够的数据，您可以对其他标签执行完全相同的步骤！在我的测试中，我还有其他三个数据集：air（空气）、coffee（咖啡）和alcohol（酒精）：

- **air数据集：
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/air.jpg"/></div>

- **coffee数据集:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/coffee.jpg"/></div>

- **alcohol数据集:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/alcohol.jpg"/></div>

您应该注意到不同的饮料将具有不同的气体值，这对于机器学习来说非常理想！另外，为了进行后续训练，拥有更多数据总是更好的，所以请随时收集更多数据！

:::注
    可以尝试添加更多种类的酒精！
:::

### 3. 设计 Impulse

接下来，我们需要通过点击 **Impulse Design** -> **Create Impulse** 来设计Impulse。Impulse接受原始数据，使用信号处理提取特征，然后使用学习模块对新数据进行分类。在本例中，我添加了一个包含所有输入轴的 **raw data** 处理模块，并添加了一个**Neural Network (Keras)** 学习模块，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/impulse.jpg"/></div>

点击 **Save Impulse** 在Impulse设计下点击 **Raw data** ，您应该会看到数据集的原始特征：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/rawdata.jpg"/></div>

点击 **Save parameters** 然后将导航到另一个页面。点击 **Generate Features**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/feature.jpg"/></div>

点击Save parameters，然后将导航到另一个页面。点击Generate Features。

这将从先前的数据集生成特征，并在右侧显示一个图表。如果数据集之间分离，即数据集彼此独特，这对于机器学习来说更好，因为有了差异性。

### 4. 训练数据

在 **Impulse Design** 下, 点击 **NN Classifier** 以配置神经网络的设置，以下是我的设置：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/net.jpg" /></div>

您可能需要根据自己的需要调整这些设置，并配置您的 **Neural network architecture**, 然后点击 **Start training**! 这将进行训练，可能需要一些时间。

训练完成后，您将看到一个训练性能表格。如果您的数据集彼此独特，您应该会得到相当不错的结果！这是我的性能：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/performance.jpg"/></div>

从中可以看出，准确率还不错，这是因为只有4种情况。您可能希望将更多情况/测试添加到这个示例中。

### 5. 实时分类

现在我们已经训练好了模型，我们可以使用新数据来测试模型。导航至 **Live classification**, 并采样新的数据集进行测试。

- 测试示例 1:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test1.jpg"/></div>

- 测试示例 2:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test2.jpg"/></div>

从结果中可以看出，使用Grove - Multichannel Gas Sensor v2和Edge Impulse的帮助，您可以很好地区分酒精！

## 部署到 Wio Terminal

接下来是在设备上部署。在点击部署选项卡后，选择Arduino库并下载它。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png" /></div>

解压缩存档并将其放置在Arduino库文件夹中。打开Arduino IDE并选择静态缓冲区示例（位于文件->示例->您的项目名称->静态缓冲区），其中已经有了用于使用您的模型进行分类的所有样板代码。很棒！

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/code.jpg" /></div>

唯一需要用户填写的是函数raw_feature_get_data(size_t offset, size_t length, float *out_ptr)。

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
    // put your setup code here, to run once:
    Serial.begin(115200);
    gas.begin(Wire, 0x08); // use the hardware I2C
    Serial.println("Edge Impulse Inferencing Demo");
}

void loop()
{
    ei_printf("Edge Impulse standalone inferencing (Arduino)\n");

 
    ei_impulse_result_t result = { 0 };

    // the features are stored into flash, and we don't want to load everything into RAM
    signal_t features_signal;
    features_signal.total_length = sizeof(features) / sizeof(features[0]);
    features_signal.get_data = &raw_feature_get_data;

    // invoke the impulse
    EI_IMPULSE_ERROR res = run_classifier(&features_signal, &result, false /* debug */);
    ei_printf("run_classifier returned: %d\n", res);

    if (res != 0) return;

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
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

    // human-readable predictions
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif

    delay(1);
}

/**
 * @brief      Printf function uses vsnprintf and output using Arduino Serial
 *
 * @param[in]  format     Variable argument list
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

- [Benjamin Cabé's Artificial nose project](https://twitter.com/kartben/status/1258791793073815552)

- [Edge Impulse Public project](https://studio.edgeimpulse.com/public/37392/latest)

- [Project Github](http://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse)
