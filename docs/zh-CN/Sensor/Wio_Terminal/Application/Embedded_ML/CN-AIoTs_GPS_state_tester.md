---
description:  具备AIoTs GPS的LoRa节点
title:  具备AIoTs GPS的LoRa节点
keywords:
- Wio_terminal 
- Embedded_ML 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/AIoTs_GPS_state_tester
last_update:
  date: 3/06/2024
  author: 金菊
---

# 基于Wio Terminal具备AIoTs GPS的LoRa节点

## 简介

AIoTs GPS和状态测试器是基于Wio Terminal Chassis-LoRa-E5和GNSS开发的。与传统的物联网相比，它更简洁、更智能。传统的物联网基本上只是接收一些数据，然后执行一个命令动作，而不管数据是否正确。而AIoTs使用神经网络算法，能够过滤掉无用的数据，获取正确的数据。

在这个项目中，我们将使用内置的三轴加速度传感器和神经网络算法构建一个智能识别系统。根据Wio Terminal的移动，它可以实时显示其状态。一般来说，这个示例项目包括三个训练状态，分别是停止（Wio Terminal空闲状态），转向（翻转Wio Terminal设备）和挥手（拿起Wio Terminal挥手）。鼓励您访问 [Edge Impulse](https://www.edgeimpulse.com/) 网站添加更多的训练动作。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## 特点

- LoRa设备可以在首页上显示DevEui、APPEui和Appkey
- 神经网络算法可以纠正数据
- 高精度检测Wio Terminal的状态
- 显示经度、纬度和卫星数量
- 显示设备和TTN连接状态

## 入门指南

### 硬件

**所需硬件**

在这个演示中，您将需要以下设备：

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Wio Terminal 底座 - LoRa-E5 and GNSS](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html)
- [Wio Terminal 底座 - 电池 (可选)](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**硬件连接**

通过Type-C数据线将其连接到计算机。

![](https://files.seeedstudio.com/wiki/Alots/connectpc.jpg)

### 使用Wio Terminal进行机器学习

这里我们将向您展示如何使用Wio Terminal训练一个机器学习模型并使用它。该项目基于Arduino平台，因此需要Arduino IDE和各种Arduino库。如果这是您第一次使用Wio Terminal，我们建议阅读一个指南，快速 [使用 Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/)。

下载并安装它到您的Arduino库中：

- [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)

#### Edge Impulse 训练开始

首先，您需要拥有自己的Edge Impulse账户，然后创建一个项目。

- **步骤 1**. 打开 [Edge Impulse 网站](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), 然后注册一个账户。

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- **步骤 2**. 创建一个新项目。

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### 网站与 Wio Terminal连接

- **步骤 3**. 下载准备连接所需的固 [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) 。

根据 [Get Started with Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/) 的指南

 双击下拉Wio Terminal（已连接到您的PC），您会看到计算机上弹出一个驱动程序（如下面的 `Arduino (F:)` ）。然后，您可以将 [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) 固件拖到驱动程序上。当您看到驱动程序消失时，这意味着固件已经编程成功。现在您可以转到网站连接Wio Terminal。

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- **步骤 4**. 设置好固件后，点击 `connect using WebUSB` 将Wio Terminal连接到网站。

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

当出现像下面这样的 `Device`, `Label` 和 `Sensor` 表示连接已完成，数据采集可以启动。

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### 数据采集

现在您可以在Edge Impulse上收集数据。

- **步骤 5**. 输入 `Label`, `Sample length (ms.)` 然后点击 `Start sampling`

  - `Label` 表示您要分类的类别。
  - `Sample length` 表示采样的时间长度

您可能还想选择不同的 `Sensor` 或者 `Frequency` 来查看发生的情况

![](https://files.seeedstudio.com/wiki/Alots/Alots8.png)

强烈建议对数据进行多次采样，超过10次。

![](https://files.seeedstudio.com/wiki/Alots/Alots9.png)

#### 机器学习模式生成

一旦收集到数据，您可以使用它来训练机器学习模型。

- **步骤 6**. 在采样数据后，点击 `create impulse` 来处理数据。

![](https://files.seeedstudio.com/wiki/Alots/Alots10.png)

在这里选择的处理块和学习块与网站推荐的相同。但我们建议您选择其他选项，看看会有什么不同。设置好块后，点击 `Save Impulse` 来存储 impulse.

![](https://files.seeedstudio.com/wiki/Alots/Alots11.png)

- **步骤 7**. 切换到 `Spectral features` 页面, 然后在底部点击 `Save parameters` , 它会自动切换到 `Generate feature` 侧边。

![](https://files.seeedstudio.com/wiki/Alots/Alots12.png)

这里是 `Generate feature` 侧面, 它可以帮助将您的数据转换为机器学习所需的特征。

![](https://files.seeedstudio.com/wiki/Alots/Alots13.png)

点击 `Generate feature` 结果将显示在右侧。

![](https://files.seeedstudio.com/wiki/Alots/Alots15.png)

- **步骤 8**. 转到 `NN Classifier` 页面使用您的特征来训练机器学习模型。在页面底部，点击 `Start training` 。

![](https://files.seeedstudio.com/wiki/Alots/Alots16.png)

训练输出将显示在页面右侧。当您看到输出时，表示模型已生成。

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

#### 机器学习模型部署

现在，您可以将机器学习模型部署到Wio Terminal上。

- **步骤 9**. 在左侧选择并点击 `Deployment` 栏。

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

然后选择 `Arduino Library`, 在底部选择 `build` 以创建Arduino所需的库。它将自动下载一个包含第三方库的zip文件。

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

所需库的名称与项目名称相关，这意味着您在 **step 2** 中输入的名称将在此处显示。它可以帮助您找到所需的正确文件。

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- **步骤 10**. 从Github下载 [code](https://github.com/0hotpotman0/AIoTs_GPS_state_tester) 文件，并使用Arduino IDE打开它。将代码中的第三方库更改为您自己的库，如上所述，然后运行代码。

![](https://files.seeedstudio.com/wiki/Alots/Alots22.png)

:::注
由于全球区域的差异，文件中的代码应该稍作修改：
:::

![](https://files.seeedstudio.com/wiki/Alots/Alots35.png)

如果您连接的是 'America server' ，那么您不用担心示例代码，但其他地方需要进行如下设置('CN_470_510' means in China the value should be the range from 470 to 510):

![](https://files.seeedstudio.com/wiki/Alots/Alots36.png)

最终，结果应该是这样的：

![](https://files.seeedstudio.com/wiki/Alots/connect1.jpg)

:::注
如果您想了解有关Edge Impulse的更多信息或有任何不清楚的地方，请参阅 [Wio Terminal Edge Impulse Getting Started](https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-1/) 获取更多信息。
:::

### 通过LoRa在TheThingsNetwork上显示数据

在我们训练了一个机器学习模型并收集了数据之后，如果我们能够将数据传输到云端，将会更有趣。在这个项目中，我们将通过LoRa将数据显示在 [TheThingsNetwork](https://www.thethingsnetwork.org/) 平台（云端）上。

**所需硬件**

- 网关

您首先需要设置一个网关，以便能够连接Wio Terminal和TTN（TheThingsNetwork）云。

#### TheThingsNetwork显示数据的开始

**步骤 1** 登录 [TTN website](https://id.thethingsnetwork.org/oidc/interaction/3v59Li6ZEHe8cq1O0Ft1w) 并创建您的账户，然后点击 `go to gateways` 以设置设备。

![](https://files.seeedstudio.com/wiki/Alots/Alots24a.png)

**步骤 2** 点击网关页面上的 `Add gateway` 。

![](https://files.seeedstudio.com/wiki/Alots/Alots25.png)

添加您自己的网关信息：

- 所有者（您的姓名）
- 网关ID（根据网关而定）
- 网关EUI（根据网关，有时与网关ID相同）
- 网关名称（您的选择）

![](https://files.seeedstudio.com/wiki/Alots/Alots26.png)

LoRaWAN选项中的 `Frequence plan` 取决于您所在的位置 ，在添加 `Add gateway`之前, 您可能会找到一个包含一些集群的页面。在    `Frequence Plan` 中选择的值应与您在步骤2中选择的值相同，也就是选择与您所在地最接近的地区。

![](https://files.seeedstudio.com/wiki/Alots/Alots27.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots27a.png)

**步骤 3** 设置好网关后，您现在可以在应用程序页面上添加连接到它的Wio Terminal节点了。点击 `Add application`:

![](https://files.seeedstudio.com/wiki/Alots/Alots28.png)

按照您的意愿填写以下信息：

- 所有者
- 应用程序ID
- 应用程序ID

![](https://files.seeedstudio.com/wiki/Alots/Alots29.png)

**步骤 4** 创建应用程序后，您可以在右下角看到一个 `Add end device` 的选项，可以帮助您添加连接到Wio Terminal设备。

![](https://files.seeedstudio.com/wiki/Alots/Alots30.png)

- 选择 **`Brand`** 为 **`Select Sense CAP`**
- 选择 **`Model`** 为 **`LoRa-E5`**
- 硬件版本和固件版本默认设置
- 配置文件（区域）根据您的位置设置 (与 `Frequncy plan` 相同)
- 频率计划与您在 **Step 2** 中选择的一样
- AppEUI、DevEUI和AppKey在不同的LoRa-E5设备中是唯一的。您可以通过将一个固件 [Gateway_Tester.uf2](https://files.seeedstudio.com/wiki/Alots/Gateway_Tester.uf2) 编程到设备中来轻松地找到它们。就像在Edge Impulse的教程中一样，只需将uf2文件拖放到Wio Terminal左侧的驱动器中。

![](https://files.seeedstudio.com/wiki/Alots/Alots37.png)

- 在输入DevEUI后，End Device ID将自动填充。

![](https://files.seeedstudio.com/wiki/Alots/Alots31.png)

**步骤 5** 连接设备后，会出现 `Payload formatters` 选择，您需要添加一些代码来解码数据(选择Formatter类型为 'Javascript'):

![](https://files.seeedstudio.com/wiki/Alots/Alots32.png)

``` c++
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port === 8) {
    decoded.Stop   = bytes[1];
    decoded.Turn   = bytes[3];
    decoded.Wave   = bytes[5];
  }
 
  return decoded;
}
```

**步骤 6** 最后, 转到网关，然后点击 `Live data` 。您可能会看到结果：

![](https://files.seeedstudio.com/wiki/Alots/Alots33a.png)
