---
description: Motion Recognition based on Edge Impulse
title: 基于 Edge Impulse 的运动识别
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAOEI
last_update:
  date: 10/30/2023
  author: 吴飞飞
---

# XIAO nRF52840 Sense 基于 Edge Impulse 的运动识别

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/50.jpg" style={{width:1000, height:'auto'}}/></div>

欢迎使用此快速入门 wiki，了解如何将 Edge Impulse 与 Seeed Studio XIAO nRF52840 Sense 配合使用！在本指南中，我们将探讨如何使用板载 IMU 传感器来检测人体运动并对不同的动作进行分类。无论您是经验丰富的开发人员还是新手，本教程都将为您提供在 XIAO nRF52840 Sense 板上开始使用 Edge Impulse 所需的知识和技能。所以，让我们开始吧！

<iframe width={560} height={315} src="https://www.youtube.com/embed/hLKKorpDlYw" title="YouTube 视频播放器" frameBorder={0} allow="加速度计;自动播放;剪贴板写入;加密媒体;陀螺仪;画中画" allowFullScreen />

## 开始

在本 wiki 中，我们将向您展示如何利用 Seeed Studio XIAO nRF52840 Sense 上的加速度计与 Edge Impulse 相结合来实现运动识别。最新版本的 Seeed nRF52 板支持我们在这里提供的代码。

> 对于嵌入式 AI 应用，我们强烈建议使用“支持 Seeed nrf52 mbed 的电路板库”。

### 硬件

在这个wiki中，我们需要准备以下材料：

- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 锂聚合物电池 （702025）
- [Grove - OLED Display 0.66"](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)
- Dupont 电缆或 Grove 电缆
- 3D打印外壳
- 导光塑料纤维

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/BLEmotion.png" alt="pir" width={600} height="auto" /></p>

**Hardware Set up**

- **步骤 1**. 用烙铁取下 Grove - OLED 显示屏 0.66“ 上的 Grove 底座
- **步骤 2**. 使用剪线钳将杜邦电缆加工成约 3 厘米的长度，并在两端露出约 2 毫米的内部电缆
- **步骤 3**. 将光纤穿过前面的小孔，并将末端放在 LED 上
- **步骤 4**. Solder Seeed Studio XIAO nRF52840 Sense 与其他元素如下图所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition2.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition3.png" alt="pir" width={500} height="auto" /></p>

:::注意
    如果使用热熔胶加固焊缝会更好。
:::

- **步骤 5**. 组装所有组件：

  1. 将光纤穿过外壳前部的小孔
  2. 将屏幕安装到固定位置
  3. 将电池夹在 Seeed Studio XIAO nRF52840 和屏幕之间
  4. 小心处理电线
  5. 将导光塑料纤维的一端放在 Seeed Studio XIAO nRF52840 的 RGB 灯下，剪掉多余的
  6. 组装箱子

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition4.png" alt="pir" width={400} height="auto" /></p>

组装一个：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition6.png" alt="pir" width={400} height="auto" /></p>

### 软件

下面列出了所需的库。强烈建议使用此处的代码来检查硬件是否运行良好。如果您在安装库时遇到问题，请参阅 [此处](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)
- [U8g2](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/U8g2.zip)

要在Edge Impulse中设置Seeed Studio XIAO nRF52840 Sense，您需要安装以下软件：

1. [Node.js v12](https://nodejs.org/en/)或更高版本。
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. Edge Impulse CLI 和串行监视器。通过打开命令提示符或终端进行安装，然后运行：

```sh
npm install -g edge-impulse-cli 
```

:::注意
安装 CLI 时有问题？请查看 [安装和故障排除](https://docs.edgeimpulse.com/docs/cli-installation) 以获取更多参考。
:::

## 连接到 Edge Impulse

所有软件都到位后，是时候将开发板连接到 Edge Impulse 了。

- **步骤 1.** 通过 USB Type-C 数据线将 Seeed Studio XIAO nRF52840 Sense 连接到您的计算机。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 在[Edge Impulse](https://studio.edgeimpulse.com/)中创建新项目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition9.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3.** 选择“Accelerometer data”，然后单击“Let's get started！”

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition10.png" alt="pir" width={1000} height="auto" /></p>


## 数据采集与训练

:::注意
在此步骤中，我们将尝试从 Seeed Studio XIAO nRF52840 Sense 板载 IMU 收集“加速度计数据”以构建数据集，然后使用 EdgeImpulse 平台训练模型。
:::

- **步骤 4.** 将 "Accelerometer Raw Data" 草图上传到 Seeed Studio XIAO nRF52840 Sense。

[将 Seeed_Arduino_LSM6DS3 Library下载](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) 为 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


打开 Arduino IDE, 导航到 `Sketch > Include Library > Add .ZIP Library...` 并打开下载的zip文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

上传以下代码并打开 **串行监视器**

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

现在，您将看到加速度计和陀螺仪数据在串行监视器上一个接一个地显示，如下所示！

<p style={{textAlign: 'center'}}><img src="https://workshop.makergram.com/assets/images/raawIMUSerial-095365f65dd0cde808620906ab5a7ab8.png" alt="IMU 原始" width={800} height="auto" /></p>


- **步骤 5.** 在 `terminal` 或者 `cmd` 或者 `powershell` 中运行命令来打开它。

```
edge-impulse-data-forwarder
```

- **步骤 6.** 我们需要使用 CLI 将 Seeed Studio XIAO nRF52840 Sense 与 Edge Impulse 连接。首先，登录您的帐户并选择您的项目

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition11.png" alt="pir" width={800} height="auto" /></p>

为加速度计和设备命名。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition12.png" alt="pir" width={800} height="auto" /></p>

- **步骤 7.** 将 XIAO nRF52840 Sense 连接到 Edge Inpulse

移动到 Edge Impulse 的“数据采集”页面，如果连接成功，结果应该是这样的。您可以在页面右侧找到“Seeed Studio XIAO nRF52840 Sense”的设备。


- **步骤 8.**  选择传感器为"3 axes"。将标注命名为 `up` 和 `down`, 将采样长度（毫秒）修改为 20000，然后单击开始采样。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition13.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 9.** 上下摆动 Seeed Studio XIAO nRF52840 Sense 并保持运动 20 秒。您可以发现收购显示如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition14.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 10.** 通过单击右上角的原始数据来拆分数据，然后选择"Split Sample"，单击“+Add Segment”,然后单击该图表。重复 20 次以上以添加段。 单击"Split" ，您将看到每个示例数据 1 秒钟。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition30.png" alt="pir" width={600} height="auto" /></p>

- **步骤 11.** 重复 **步骤 8.** 和 **步骤 9.** 并用不同的名称标记数据以单击不同的运动数据，例如 `left`和 `right`, `clockwise`, `anticlockwise` 等。 提供的示例是对上下、左和右以及圆圈进行分类。您可以根据需要在此处更改它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition16.png" alt="pir" width={1000} height="auto" /></p>

:::注意
在步骤 9 拆分时间为 1 秒，这意味着您在步骤 8 中至少在一秒钟内进行一次上下摆动。否则，结果将不准确。同时，您可以根据自己的运动速度调整分割时间。
:::

## 构建机器学习模型

- **步骤 12.** 重新平衡数据集，单击**Dashboard** 并下拉页面以找到**Perform train** / **test split**

单击 Perform train / test split 然后选择 Yes 并确认

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition17.png" alt="pir" width={800} height="auto" /></p>

- **步骤 13.** 创建 Impulse

单击 **Create impulse** -> 添加处理块 -> 选择 **Spectral Analysis** -> 添加学习块 -> 选择 **Classification (Keras)** -> 保存 Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew1.png" alt="pir" width={800} height="auto" /></p>

- **步骤 14.** 光谱特征

单击并设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew2.png" alt="pir" width={800} height="auto" /></p>

单击 **Spectral features** -> 下拉页面单击保存参数 -> 单击 **Generate features**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew3.png" alt="pir" width={800} height="auto" /></p>

输出页面应如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew4.png" alt="pir" width={800} height="auto" /></p>

- **步骤 15.** 训练模型

单击 NN Classifier -> 单击 Start training -> 选择 Unoptimized (float32)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew5.png" alt="pir" width={800} height="auto" /></p>

:::注意
训练模型的精度对最终结果非常重要。如果您的输出训练结果低至 65% 以下，我们强烈建议您进行更多次训练。
:::

## 部署到 Seeed Studio XIAO nRF52840 Sense

- **步骤 16.** 模型测试

单击 Model testing -> 单击 Classify all

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition23.png" alt="pir" width={800} height="auto" /></p>

:::注意
注意 如果准确率较低，可以通过增加训练集和延长采样时间来检查数据集
:::

- **步骤 17.** 构建 Arduino 库
单击 Deployment -> 单击 Arduino 库 -> 单击 **Build** -> 下载ZIP文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew7.png" alt="pir" width={400} height="auto" /></p>

- **步骤 18.** .ZIP文件的名称非常重要，默认情况下，它被设置为Edge Impulse项目的名称。就像这里的名字是“XIAO-BLE-gestures_inferencing”。选择文件作为“将”.ZIP 文件“添加到您的 Arduino 库

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition35.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition36.png" alt="pir" width={500} height="auto" /></p>

- **步骤 19.** 在 [此处]下载代码(https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEI.ino)。将头文件的名称更改为您自己的名称并上传。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition33.png" alt="pir" width={800} height="auto" /></p>

- **步骤 20.** 移动或按住 Seeed Studio XIAO nRF52840 Sense 移动或按住：

单击 Arduino右上角的显示器 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew15a.png" alt="pir" width={800} height="auto" /></p>

当您向**向左 和 向右** 移动Seeed Studio XIAO nRF52840 Sensedirection时:

显示器将输出如下内容：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew11a.png" alt="pir" width={500} height="auto" /></p>

输出显示如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" alt="pir" width={300} height="auto" /></p>

当你 **上下**移动Seeed Studio XIAO nRF52840 Sense时:

显示器将输出如下内容：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew9a.png" alt="pir" width={500} height="auto" /></p>

输出显示如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew12a.png" alt="pir" width={300} height="auto" /></p>

当您在空闲状态下 **握住** Seeed Studio XIAO nRF52840 Sense 时:

显示器将输出如下内容：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew10a.png" alt="pir" width={500} height="auto" /></p>

输出显示如下

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew13a.png" alt="pir" width={300} height="auto" /></p>

祝贺！你痛苦地结束了项目。鼓励您可以尝试更多方向并检查哪一个将执行最佳输出。

## 资源

- [Seeed Studio XIAO nRF52840 Case File](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/xiao-case-pink.stl)

## 技术支持和产品讨论
.

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
