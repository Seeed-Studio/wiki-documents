---
description: 基于 Edge Impulse 的动作识别
title: 基于 Edge Impulse 的动作识别
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-RP2040-EI
last_update:
  date: 04/17/2023
  author: Citric
---

# SEEED XIAO RP2040 上的 TinyML（动作识别）

在本教程中，我们将向您展示如何利用 Seeed Studio XIAO RP2040 上的加速度计结合 Edge Impulse 来实现动作识别。我们在这里提供的代码由最新版本的 XIAO RP2040 开发板支持。

## 所需材料

### 硬件

在本教程中，我们需要准备以下材料：

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Grove - Seeeduino Xiao的扩展板](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - 三轴数字加速度计(±1.5g)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one.jpg" alt="pir" width={800} height="auto" /></p>

**硬件设置**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one_connect.jpg" alt="pir" width={400} height="auto" /></p>

### 软件

所需的库列在下面。强烈建议使用这里的代码来检查硬件是否正常工作。如果您在安装库时遇到问题，请参考[这里](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)。

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)

## 开始使用

首先，我们将运行一些演示来检查开发板和显示屏是否正常工作。如果您的设备正常，您可以继续下一步说明。

### 检查电路连接和加速度计

打开 Arduino IDE，导航到 Sketch -> Include Library -> Manage Libraries...，在库管理器中搜索并安装 `U8g2 library`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition29.png" alt="pir" width={400} height="auto" /></p>

安装完成后，复制以下代码并运行它。

```cpp
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;
#define CONVERT_G_TO_MS2    9.80665f

void setup() {
    Serial.begin(115200);
    while (!Serial);
    accelemeter.init();
}

 
void loop() {

    float ax, ay, az;
    accelemeter.getAcceleration(&ax, &ay, &az);

    Serial.print(ax * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.print(ay * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.println(az * CONVERT_G_TO_MS2,4);
    
}

```

上传代码并拔掉 Seeed Studio XIAO RP2040 后。
然后，打开串口监视器，你将看到如下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_serial_monitor.jpg" alt="pir" width={400} height="auto" /></p>

如果一切正常，我们可以继续并将 Seeed Studio XIAO RP2040 连接到 Edge Impulse。

## 连接到 Edge Impulse

训练模型的精度对最终结果非常重要。如果你的输出训练结果低至 65% 以下，我们强烈建议你进行更多次训练或添加更多数据。

- **步骤 1.** 在 [Edge Impulse](https://studio.edgeimpulse.com/) 中创建一个新项目

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/01.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 2.** 选择"Accelerometer data"并点击"Let's get started!"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/02.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/03.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 3.** 在你的计算机中安装 [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/cli-installation)。

- **步骤 4.** 在你的 `terminal` 或 `cmd` 或 `powershell` 中运行命令来启动它。

```bash
sudo edge-impulse-data-forwarder
```

- **步骤 5.** 我们需要使用 CLI 将 Seeed Studio XIAO RP2040 连接到 Edge Impulse。首先，登录您的账户并选择您的项目

为加速度计和设备命名。

返回到 Edge Impulse "数据采集" 页面，如果连接成功，结果应该是这样的。您可以在页面右侧找到显示的 "XIAO RP2040" 设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/04.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 6.** 选择传感器为 "3 axes"。将您的标签命名为 `up` 和 `down`，将采样长度（毫秒）修改为 20000，然后点击开始采样。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/05.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 7.** 上下摆动 [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/cn/XIAO-RP2040/)，保持动作 20 秒。您可以看到采集显示如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/06.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 8.** 通过点击原始数据右上角并选择 "Split Sample" 来分割数据。点击 +Add Segment，然后点击图表。重复此操作超过 20 次以添加片段。点击 Split，您将看到每个样本数据为 1 秒。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/07.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 9.** 重复**步骤 7.** 和**步骤 8.**，用不同的名称标记数据以点击不同的动作数据，如 `circle` 和 `line` 等。提供的示例是分类上下、左右和圆圈。您可以根据需要在这里进行更改。

:::note
在步骤 8 中，分割时间是 1 秒，这意味着您在步骤 7 中至少要在一秒内完成一次上下摆动。否则，结果将不准确。同时，您可以根据自己的动作速度调整分割时间。
:::

- **步骤 10.** 创建脉冲

点击 **Create impulse** -> Add a processing block -> 选择 **Spectral Analysis** -> Add a learning block -> 选择 **Classification (Keras)** -> Save Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/08.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 11.** 频谱特征

点击并设置

点击 **Spectral features** -> 下拉页面点击 Save parameters -> 点击 **Generate features**

输出页面应该是这样的：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/09.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/10.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 12.** 训练您的模型

点击 NN Classifier -> 点击 Start training -> 选择 Unoptimized (float32)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/11.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 13.** 模型测试

点击 Model testing -> 点击 Classify all

**如果您的准确率较低，您可以通过增加训练集和延长采样时间来检查您的数据集**

我们在下载模型时也能够获得评估结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/12.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 14.** 构建 Arduino 库

点击 Deployment -> 点击 Arduino Library -> 点击 **Build** -> 下载 .ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/13.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 15.** .ZIP 文件的名称非常重要，默认情况下它设置为您的 Edge Impulse 项目名称。这里项目名称是 "RP2040"。选择文件为 "将 ".ZIP 文件" 添加到您的 Arduino 库中

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/14.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 16.** 打开 Arduino -> 点击 Sketch -> 点击 **Include Library** ->
 **ADD .ZIP Library**

复制下面的代码，如果 edgeimpluse 上的项目名称是自定义的，那么 zip 存档文本将是相同的名称。您可以将 include 的第一行更改为您的头文件。

```c
#include <XIAO_RP2040_inferencing.h> // customed name need change this header file to your own file name
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;

#define CONVERT_G_TO_MS2    9.80665f
#define MAX_ACCEPTED_RANGE  2.0f         

static bool debug_nn = false; 

void setup()
{
    Serial.begin(115200);
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");
    accelemeter.init();
}

float ei_get_sign(float number) {
    return (number >= 0.0) ? 1.0 : -1.0;
}

void loop()
{
    ei_printf("\nStarting inferencing in 2 seconds...\n");

    delay(2000);

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we'll read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);
        accelemeter.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);

        for (int i = 0; i < 3; i++) {
            if (fabs(buffer[ix + i]) > MAX_ACCEPTED_RANGE) {
                buffer[ix + i] = ei_get_sign(buffer[ix + i]) * MAX_ACCEPTED_RANGE;
            }
        }

        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // Turn the raw buffer in a signal which we can the classify
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Failed to create signal from buffer (%d)\n", err);
        return;
    }

    // Run the classifier
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif

}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/15.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 17.** 移动或握住 Seeed Studio XIAO RP2040 并检查结果：

点击 Arduino 右上角的监视器。

当您将 Seeed Studio XIAO RP2040 沿着**圆形和直线**方向移动时：

监视器将输出类似以下内容：

```bash
15:45:45.434 -> 
15:45:45.434 -> Starting inferencing in 2 seconds...
15:45:47.414 -> Sampling...
15:45:48.439 -> Predictions (DSP: 6 ms., Classification: 1 ms., Anomaly: 0 ms.): 
15:45:48.439 ->     Circle: 0.59766
15:45:48.439 ->     line: 0.40234
15:45:48.439 -> 
```

恭喜！您已完成项目的最后阶段。建议您可以尝试更多方向，并检查哪一个能产生最佳输出。

## 资源

- [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/cn/XIAO-RP2040/)
- [Edge Impluse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
