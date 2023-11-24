---
description: 基于Edge Impulse的动作识别
title: 基于Edge Impulse的动作识别
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-RP2040-EI
last_update:
  date: 11/1/2023
  author: 金 菊
---

# XIAO RP2040 基于 Edge Impulse 的动作识别

在本维基中，我们将向您展示如何利用Seeed Studio XIAO RP2040上的加速度计结合Edge Impulse实现动作识别。我们在这里展示的代码适用于最新版本的XIAO RP2040开发板。

## 所需材料

### 硬件

在本WiKi中，我们需要准备以下材料：

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Shield for Seeeduino Xiao Grove扩展版](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - 3轴数字加速度计（±1.5g）](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one.jpg" alt="pir" width={800} height="auto" /></p>

**硬件设置**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one_connect.jpg" alt="pir" width={400} height="auto" /></p>

### 软件

下面列出了所需的库。强烈建议使用这里的代码来检查硬件是否正常工作。如果您在安装库方面遇到问题，请参考 [这里](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)

## 入门指南

首先，我们将运行一些演示程序，以检查开发板和显示屏是否正常工作。如果您的设备正常，您可以继续进行下一步操作。

### 检查电路连接和加速度计

打开Arduino IDE，导航到Sketch -> Include Library -> Manage Libraries...，在库管理器中搜索并安装  `U8g2 library` 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition29.png" alt="pir" width={400} height="auto" /></p>

安装完成后，复制以下代码并运行它。

```c++
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

在上传代码并拔掉Seeed Studio XIAO RP2040后，然后打开串口监视器，您将看到类似以下的输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_serial_monitor.jpg" alt="pir" width={400} height="auto" /></p>

在上传代码并拔掉Seeed Studio XIAO RP2040后，
然后，打开串口监视器，您将看到如下输出：
如果一切正常，我们可以继续将Seeed Studio XIAO RP2040连接到Edge Impulse。

## 已连接到Edge Impulse

训练模型的准确度对最终结果非常重要。如果您的输出训练结果低于65%，我们强烈建议您多次进行训练或添加更多数据。

- **第一步.** 在 [Edge Impulse](https://studio.edgeimpulse.com/)创建一个新项目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/01.jpg" alt="pir" width={800} height="auto" /></p>

- **第二步.** 选择"加速度计数据"，然后点击"让我们开始吧！"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/02.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/03.jpg" alt="pir" width={800} height="auto" /></p>

- **第三步.** 在电脑上安装 [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/cli-installation) 。

- **第四步.** 在您的终端 `terminal` 或 `cmd` 或 `powershell` 中运行以下命令以启动它。

```bash
sudo edge-impulse-data-forwarder
```

- **第五步.** 我们需要使用命令行界面（CLI）将Seeed Studio XIAO RP2040与Edge Impulse连接起来。首先，登录您的帐户并选择您的项目。

为加速度计和设备命名。

返回到Edge Impulse的"数据采集"页面，如果连接成功，结果应该如下所示。您可以在页面右侧找到"XIAO RP2040"设备的信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/04.jpg" alt="pir" width={800} height="auto" /></p>

- **第六步.**  选择传感器为"3轴"。将标签命名为 `上` 和 `下`, 将样本长度（毫秒）修改为20000，然后点击开始采样。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/05.jpg" alt="pir" width={800} height="auto" /></p>

- **第七步.** 将 [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/XIAO-RP2040/) 上下摆动并保持运动20秒钟。您可以在采集结果中看到如下显示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/06.jpg" alt="pir" width={800} height="auto" /></p>

- **第八步.** 通过点击右上角的原始数据并选择"拆分样本"来拆分数据。点击+添加分段，然后点击图表。重复这个步骤超过20次以添加分段。点击拆分，您将看到每个1秒钟的样本数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/07.jpg" alt="pir" width={800} height="auto" /></p>

- **第九步.** 重复步 **第七步.** 和 **第八步.** ，并使用不同的名称为数据标记，例如 `圆圈` 和 `直线` 等。提供的示例是上下、左右和圆圈的分类。您可以根据需要进行更改。

:::注意
在步骤8中，拆分时间为1秒，这意味着您在步骤7中至少要在1秒内进行一次上下摆动。否则，结果将不准确。同时，您可以根据自己的运动速度调整拆分时间。
:::

- **第十步.** 创建 Impulse

点击 **Create impulse** -> 添加处理块 -> 选择 **Spectral Analysis** -> 添加学习块  -> 选择 **Classification (Keras)** -> 保存 Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/08.jpg" alt="pir" width={800} height="auto" /></p>

- **第十一步.** 频谱特征

点击并设置

点击 **Spectral features** -> 下拉页面点击保存参数 -> 点击 **Generate features**

输出页面应该如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/09.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/10.jpg" alt="pir" width={800} height="auto" /></p>

- **第十二步.** 训练你的模型

点击NN分类器 -> 点击开始训练 -> 选择未优化的(float32)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/11.jpg" alt="pir" width={800} height="auto" /></p>

- **第十三步.** 模型测试

点击模型测试 -> 点击全部分类

**如果准确率低，可以通过增加训练集和延长样本时间来检查数据集**

在下载模型时，我们也可以获得评估结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/12.jpg" alt="pir" width={800} height="auto" /></p>

- **第十四步.** 构建Arduino库

点击部署 -> 点击Arduino库 -> 点击 **构建** -> 下载 .ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/13.jpg" alt="pir" width={800} height="auto" /></p>

- **第十五步.** .ZIP 文件的名称非常重要，默认设置为Edge Impulse项目的名称。就像这里的项目名称是"RP2040"。选择文件并将其添加到Arduino库中

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/14.jpg" alt="pir" width={800} height="auto" /></p>

- **第十六步.** 打开 Arduino -> 点击 Sketch -> 点击 **Include Library** ->
 **添加 .ZIP 库**

复制下面的代码，如果edgeimpluse上的项目名称已自定义，则zip存档文本将与该名称相同。您可以将include的第一行更改为您的头文件。

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

- **第十七步.** 移动或保持Seeed Studio XIAO RP2040并检查结果：

点击Arduino右上角的监视器。

当您将Seeed Studio XIAO RP2040移动到 **circle and line** 方向时：

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

恭喜！您已完成项目的最后一步。鼓励您尝试更多的方向并检查哪个方向会产生最佳输出。

## 资源

- [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/XIAO-RP2040/)
- [Edge Impluse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
