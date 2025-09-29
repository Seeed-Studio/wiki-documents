---
description: 基于 Edge Impulse 的动作识别
title: 基于 Edge Impulse 的动作识别
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAOEI
last_update:
  date: 04/11/2023
  author: Citric
---

# Seeed Studio XIAO nRF52840 Sense Edge Impulse 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/50.jpg" style={{width:1000, height:'auto'}}/></div>

欢迎来到这个关于在 Seeed Studio XIAO nRF52840 Sense 上使用 Edge Impulse 的快速入门指南！在本指南中，我们将探索如何使用板载 IMU 传感器来检测人体动作并分类不同的行为。无论您是经验丰富的开发者还是刚刚起步，本教程都将为您提供在 XIAO nRF52840 Sense 开发板上开始使用 Edge Impulse 所需的知识和技能。那么，让我们深入了解并开始吧！

<iframe width={560} height={315} src="https://www.youtube.com/embed/hLKKorpDlYw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 入门指南

在本指南中，我们将向您展示如何利用 Seeed Studio XIAO nRF52840 Sense 上的加速度计结合 Edge Impulse 来实现动作识别。我们在这里提供的代码由最新版本的 Seeed nRF52 开发板支持。

> 当涉及到嵌入式 AI 应用时，我们强烈推荐使用"Seeed nrf52 mbed-enabled Boards Library"。

### 硬件

在本指南中，我们需要准备以下材料：

- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 锂聚合物电池 (702025)
- [Grove - OLED Display 0.66"](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)
- 杜邦线或 Grove 线缆
- 3D 打印外壳
- 导光塑料光纤

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/BLEmotion.png" alt="pir" width={600} height="auto" /></p>

**硬件设置**

- **步骤 1**. 使用烙铁移除 Grove - OLED Display 0.66" 上的 Grove 底座
- **步骤 2**. 使用剪线钳将杜邦线处理到约 3 厘米长度，并在两端露出约 2 毫米的内芯线
- **步骤 3**. 将光纤穿过前面的小孔，并将末端放置在 LED 处

- **步骤 4**. 根据下图将 Seeed Studio XIAO nRF52840 Sense 与其他元件焊接：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition2.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition3.png" alt="pir" width={500} height="auto" /></p>

:::note
    如果您使用热熔胶来加固焊点会更好。
:::

- **步骤 5**. 组装所有组件：

  1. 将光纤穿过外壳前面的小孔
  2. 将屏幕安装到固定位置
  3. 将电池夹在 Seeed Studio XIAO nRF52840 和屏幕之间
  4. 小心处理线缆
  5. 将导光塑料光纤的末端放置在 Seeed Studio XIAO nRF52840 的 RGB 灯处，并切掉多余部分
  6. 组装外壳

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition4.png" alt="pir" width={400} height="auto" /></p>

组装完成的样子：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition6.png" alt="pir" width={400} height="auto" /></p>

### 软件

所需的库列在下面。强烈建议使用这里的代码来检查硬件是否正常工作。如果您在安装库时遇到问题，请参考[这里](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)。

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)
- [U8g2](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/U8g2.zip)

要在 Edge Impulse 中设置 Seeed Studio XIAO nRF52840 Sense，您需要安装以下软件：

1. [Node.js v12](https://nodejs.org/en/) 或更高版本。
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. Edge Impulse CLI 和串口监视器。通过打开命令提示符或终端并运行以下命令来安装：

```sh
npm install -g edge-impulse-cli 
```

:::note
CLI 安装有问题？请查看[安装和故障排除](https://docs.edgeimpulse.com/docs/cli-installation)获取更多参考。
:::

## 连接到 Edge Impulse

所有软件就位后，现在是时候将开发板连接到 Edge Impulse 了。

- **步骤 1.** 通过 USB Type-C 线缆将 Seeed Studio XIAO nRF52840 Sense 连接到您的计算机。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 在 [Edge Impulse](https://studio.edgeimpulse.com/) 中创建一个新项目

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition9.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3.** 选择"Accelerometer data"并点击"Let's get started!"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition10.png" alt="pir" width={1000} height="auto" /></p>

## 数据采集与训练

:::note
在这一步中，我们尝试从 Seeed Studio XIAO nRF52840 Sense 板载 IMU 收集"加速度计数据"来构建数据集，然后使用 EdgeImpulse 平台训练模型。
:::

- **步骤 4.** 将"Accelerometer Raw Data"代码上传到 Seeed Studio XIAO nRF52840 Sense。

[下载 Seeed_Arduino_LSM6DS3 库](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)作为 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

打开 Arduino IDE，导航到 `Sketch > Include Library > Add .ZIP Library...` 并打开下载的 zip 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

上传以下代码并打开**串口监视器**

```
// XIAO BLE Sense LSM6DS3 Accelerometer Raw Data 

#include "LSM6DS3.h"
#include "Wire.h"

//Create a instance of class LSM6DS3
LSM6DS3 myIMU(I2C_MODE, 0x6A);  //I2C device address 0x6A

#define CONVERT_G_TO_MS2 9.80665f
#define FREQUENCY_HZ 50
#define INTERVAL_MS (1000 / (FREQUENCY_HZ + 1))

static unsigned long last_interval_ms = 0;


void setup() {
  Serial.begin(115200);
  while (!Serial)
    ;

  if (myIMU.begin() != 0) {
    Serial.println("Device error");
  } else {
    Serial.println("Device OK!");
  }
}


void loop() {
  if (millis() > last_interval_ms + INTERVAL_MS) {
    last_interval_ms = millis();
    Serial.print(myIMU.readFloatAccelX() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.print(myIMU.readFloatAccelY() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.println(myIMU.readFloatAccelZ() * CONVERT_G_TO_MS2, 4);
  }
}


```

现在您将看到加速度计和陀螺仪数据在串口监视器上依次显示，如下所示！

<p style={{textAlign: 'center'}}><img src="https://workshop.makergram.com/assets/images/raawIMUSerial-095365f65dd0cde808620906ab5a7ab8.png" alt="IMU Raw" width={800} height="auto" /></p>

- **步骤 5.** 在您的 `terminal` 或 `cmd` 或 `powershell` 中运行命令来启动它。

```
edge-impulse-data-forwarder
```

- **步骤 6.** 我们需要使用 CLI 将 Seeed Studio XIAO nRF52840 Sense 与 Edge Impulse 连接。首先，登录您的账户并选择您的项目

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition11.png" alt="pir" width={800} height="auto" /></p>

为加速度计和设备命名。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition12.png" alt="pir" width={800} height="auto" /></p>

- **步骤 7.** 将 XIAO nRF52840 Sense 连接到 Edge Impulse

转到 Edge Impulse "数据采集"页面，如果连接成功，结果应该是这样的。您可以在页面右侧找到显示的"Seeed Studio XIAO nRF52840 Sense"设备。

- **步骤 8.** 选择传感器为"3 轴"。将标签命名为 `up` 和 `down`，将采样长度（毫秒）修改为 20000，然后点击开始采样。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition13.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 9.** 上下摆动 Seeed Studio XIAO nRF52840 Sense，保持动作 20 秒。您可以看到采集结果如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition14.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 10.** 通过点击原始数据右上角并选择"分割样本"来分割数据。点击 +添加片段，然后点击图表。重复此操作超过 20 次以添加片段。点击分割，您将看到每个样本数据为 1 秒。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition30.png" alt="pir" width={600} height="auto" /></p>

- **步骤 11.** 重复**步骤 8.** 和**步骤 9.**，用不同的名称标记数据以点击不同的动作数据，如 `left` 和 `right`、`clockwise`、`anticlockwise` 等。提供的示例是分类上下、左右和圆圈动作。您可以根据需要在此处进行更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition16.png" alt="pir" width={1000} height="auto" /></p>

:::note
在步骤 9 中，分割时间为 1 秒，这意味着您在步骤 8 中至少要在一秒内完成一次上下摆动。否则，结果将不准确。同时，您可以根据自己的动作速度调整分割时间。
:::

## 构建机器学习模型

- **步骤 12.** 重新平衡数据集，点击**仪表板**并下拉页面找到**执行训练**/**测试分割**

点击执行训练/测试分割，选择是并确认

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition17.png" alt="pir" width={800} height="auto" /></p>

- **步骤 13.** 创建脉冲

点击**创建脉冲** -> 添加处理块 -> 选择**频谱分析** -> 添加学习块 -> 选择**分类（Keras）** -> 保存脉冲

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew1.png" alt="pir" width={800} height="auto" /></p>

- **步骤 14.** 频谱特征

点击并设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew2.png" alt="pir" width={800} height="auto" /></p>

点击**频谱特征** -> 下拉页面点击保存参数 -> 点击**生成特征**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew3.png" alt="pir" width={800} height="auto" /></p>

输出页面应该是这样的：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew4.png" alt="pir" width={800} height="auto" /></p>

- **步骤 15.** 训练您的模型

点击 NN 分类器 -> 点击开始训练 -> 选择未优化（float32）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew5.png" alt="pir" width={800} height="auto" /></p>

:::note
训练模型的精度对最终结果非常重要。如果您的输出训练结果低至 65% 以下，我们强烈建议您进行更多次训练。
:::

## 部署到 Seeed Studio XIAO nRF52840 Sense

- **步骤 16.** 模型测试

点击 Model testing -> 点击 Classify all

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition23.png" alt="pir" width={800} height="auto" /></p>

:::note
如果您的准确率较低，您可以通过增加训练集和延长采样时间来检查您的数据集
:::

- **步骤 17.** 构建 Arduino 库

点击 Deployment -> 点击 Arduino Library -> 点击 **Build** -> 下载 .ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew7.png" alt="pir" width={400} height="auto" /></p>

- **步骤 18.** .ZIP 文件的名称非常重要，默认情况下它设置为您的 Edge Impulse 项目名称。比如这里项目名称是 "XIAO-BLE-gestures_inferencing"。选择文件为 "将 ".ZIP 文件" 添加到您的 Arduino 库中

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition35.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition36.png" alt="pir" width={500} height="auto" /></p>

- **步骤 19.** 从[这里](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEI.ino)下载代码。将您的头文件名称更改为您自己的名称并上传。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition33.png" alt="pir" width={800} height="auto" /></p>

- **步骤 20.** 移动或握住 Seeed Studio XIAO nRF52840 Sense 并检查结果：

点击 Arduino 右上角的监视器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew15a.png" alt="pir" width={800} height="auto" /></p>

当您将 Seeed Studio XIAO nRF52840 Sense 向**左右**方向移动时：

监视器将输出类似以下内容：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew11a.png" alt="pir" width={500} height="auto" /></p>

输出显示如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" alt="pir" width={300} height="auto" /></p>

当您将 Seeed Studio XIAO nRF52840 Sense 向**上下**方向移动时：

监视器将输出类似以下内容：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew9a.png" alt="pir" width={500} height="auto" /></p>

输出显示如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew12a.png" alt="pir" width={300} height="auto" /></p>

当您**握住** Seeed Studio XIAO nRF52840 Sense 处于空闲状态时：

监视器将输出类似以下内容：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew10a.png" alt="pir" width={500} height="auto" /></p>

输出显示如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew13a.png" alt="pir" width={300} height="auto" /></p>

恭喜！您已经完成了项目的最后部分。建议您可以尝试更多方向并检查哪一个会产生最佳输出效果。

## 资源

- [Seeed Studio XIAO nRF52840 外壳文件](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/xiao-case-pink.stl)

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
