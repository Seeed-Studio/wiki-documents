---
description: 带有AIoTs GPS的LoRa节点
title: 带有AIoTs GPS的LoRa节点
keywords:
- Wio_terminal 
- Embedded_ML 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/AIoTs_GPS_state_tester
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# 基于Wio Terminal的带有AIoTs GPS的LoRa节点

## 介绍

AIoTs GPS和状态测试器基于Wio Terminal底盘-LoRa-E5和GNSS开发。与传统物联网相比，它更加简洁和智能。传统物联网基本上只是接收一些数据，然后执行命令操作，而不管数据是否正确。而AIoTs使用神经网络算法能够过滤无用数据以获得正确的数据。

在这个项目中，将使用内置的3轴加速度计传感器和神经网络算法来构建智能识别系统。基于Wio Terminal的运动，它可以实时显示其状态。通常，这里的示例项目包括三种训练状态：停止（WT空闲状态）、转动（翻转WT设备）和挥动（拿着WT挥手）。建议您访问[Edge Impulse](https://www.edgeimpulse.com/)网站添加更多训练动作。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## 特性

- LoRa设备可以在第一页显示DevEui、APPEui和Appkey。
- 神经网络算法校正数据
- 高精度检测Wio Terminal状态
- 显示经度、纬度和卫星数量。
- 显示设备和TTN连接状态。

## 入门指南

### 硬件

**所需硬件**

在此演示中，您需要以下列出的设备：

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Wio Terminal底盘 - LoRa-E5和GNSS](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html)
- [Wio Terminal底盘 - 电池（可选）](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**硬件连接**

通过Type-C线缆连接到计算机。

![](https://files.seeedstudio.com/wiki/Alots/connectpc.jpg)

### 使用Wio Terminal进行机器学习

这里我们将向您展示如何使用Wio Terminal训练机器学习模型并使用它。该项目基于Arduino平台，这意味着需要Arduino IDE和各种Arduino库。如果这是您第一次使用Wio terminal，我们推荐一个快速[Wio Terminal入门指南](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)。

下载并安装到您的Arduino库中：

- [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)

#### Edge Impulse训练入门

首先，您需要拥有自己的Edge Impulse账户，然后创建一个项目。

- **步骤1**. 打开[Edge Impulse网站](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1)，然后注册一个账户。

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- **步骤2**. 创建一个新项目。

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### 网站与Wio Terminal连接

- **步骤3**. 下载固件[wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2)以准备连接。

如[Wio Terminal入门指南](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)所建议：

双击Wio Terminal（已连接到您的PC）左下角，您将看到一个驱动器（如下面的`Arduino (F:)`）在计算机上弹出。然后您可以将[wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2)固件拖到驱动器中。当您看到驱动器消失时，意味着固件已被编程。现在您可以访问网站连接Wio Terminal。

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- **步骤4**. 固件设置完成后，点击`connect using WebUSB`将Wio Terminal连接到网站。

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

当`Device`、`Label`和`Sensor`如下所示出现时，意味着连接完成，可以激活数据采集。

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### 数据采集

现在您可以在Edge Impulse上收集数据。

- **步骤5**. 输入`Label`、`Sample length (ms.)`并点击`Start sampling`

  - `Label`表示您想要分类的类别。
  - `Sample length`表示采样期间的时间。

您可能还想选择不同的`Sensor`或`Frequency`来看看会发生什么。

![](https://files.seeedstudio.com/wiki/Alots/Alots8.png)

强烈建议采样数据超过10次。

![](https://files.seeedstudio.com/wiki/Alots/Alots9.png)

#### 机器学习模型生成

收集数据后，您可以使用它来训练您的ML模型。

- **步骤6**. 采样数据后，点击`create impulse`来处理数据。

![](https://files.seeedstudio.com/wiki/Alots/Alots10.png)

这里我们选择的处理块和学习块与网站推荐的相同。另一方面，我们强烈建议您选择其他选项来看看会有什么不同。一旦设置了块，点击`Save Impulse`来存储脉冲。

![](https://files.seeedstudio.com/wiki/Alots/Alots11.png)

- **步骤7**. 移动到`Spectral features`页面，然后在底部点击`Save parameters`，它将自动移动到`Generate feature`侧。

![](https://files.seeedstudio.com/wiki/Alots/Alots12.png)

这里是`Generate feature`侧，它可以帮助将您的数据转换为机器学习中需要的特征。

![](https://files.seeedstudio.com/wiki/Alots/Alots13.png)

点击`Generate feature`，结果应该显示在右侧：

![](https://files.seeedstudio.com/wiki/Alots/Alots15.png)

- **步骤 8**. 移动到 `NN Classifier` 页面，使用您的特征训练机器学习模型。在页面底部，点击 `Start training`。

![](https://files.seeedstudio.com/wiki/Alots/Alots16.png)

训练输出在页面右侧，当您看到输出时，意味着模型已经生成。

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

#### 机器学习模型部署

现在您可以将机器学习模型部署到您的 Wio Terminal。

- **步骤 9**. 选择并点击左侧的 `Deployment` 列。

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

然后选择 `Arduino Library`，在底部选择 `build` 来创建您的 Arduino 中需要的库。它将自动下载一个包含第三方库的 zip 文件。

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

所需库的名称与项目名称相关，这意味着您在**步骤 2**中为项目写的任何名称都将在这里显示。这可以帮助您找到所需的正确文件。

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- **步骤 10**. 从 Github 下载[代码](https://github.com/0hotpotman0/AIoTs_GPS_state_tester)文件，并用 Arduino IDE 打开它。像上面一样更改您自己的第三方库，然后运行代码。

![](https://files.seeedstudio.com/wiki/Alots/Alots22.png)

:::note
由于全球区域之间的差异，文件中的代码应该稍作更改：
:::

![](https://files.seeedstudio.com/wiki/Alots/Alots35.png)

如果您连接了'美国服务器'，那么示例代码没有问题，但其他地方应该按如下所示设置（'CN_470_510' 意味着在中国，值应该在 470 到 510 的范围内）：

![](https://files.seeedstudio.com/wiki/Alots/Alots36.png)

最终，结果应该是这样的：

![](https://files.seeedstudio.com/wiki/Alots/connect1.jpg)

:::note
如果您想了解更多关于 Edge Impulse 的信息，或者仍有不清楚的地方，请访问 [Wio Terminal Edge Impulse Getting Started](https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-EI-1/) 获取更多信息。
:::

### 通过 LoRa 在 TheThingsNetwork 上显示数据

在我们训练了机器学习模型并收集了数据之后，如果我们能将数据传输到云端会更有趣。在这个项目中，我们将能够通过 LoRa 在 [TheThingsNetwork](https://www.thethingsnetwork.org/) 平台（云端）上显示数据。

**所需硬件**

- 网关

您需要首先设置一个网关，允许您连接 Wio Terminal 和 TTN(TheThingsNetwork) 云。

#### TheThingsNetwork 显示数据入门

**步骤 1** 登录 [TTN 网站](https://id.thethingsnetwork.org/oidc/interaction/3v59Li6ZEHe8cq1O0Ft1w) 并创建您的账户，然后点击 `go to gateways` 来设置设备。

![](https://files.seeedstudio.com/wiki/Alots/Alots24a.png)

**步骤 2** 在网关页面点击 `Add gateway`。

![](https://files.seeedstudio.com/wiki/Alots/Alots25.png)

添加您自己的网关信息：

- Owner（您的姓名）
- Gateway ID（取决于网关）
- Gateway EUI（取决于网关，有时与网关 ID 相同）
- Gateway name（您的选择）

![](https://files.seeedstudio.com/wiki/Alots/Alots26.png)

LoRaWAN 选项中的 `Frequence plan` 取决于您居住的地方。在 `Add gateway` 之前，您可能会找到一个包含一些集群的页面。`Frequence Plan` 和集群的选择应该相同，这意味着您应该选择离您所在地最近的区域。

![](https://files.seeedstudio.com/wiki/Alots/Alots27.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots27a.png)

**步骤 3** 一旦网关设置完成，您现在可以在应用程序页面添加与其连接的 Wio Terminal 节点。点击 `Add application`：

![](https://files.seeedstudio.com/wiki/Alots/Alots28.png)

根据您的意愿填写这些信息：

- Owner
- Application ID
- Application name

![](https://files.seeedstudio.com/wiki/Alots/Alots29.png)

**步骤 4** 一旦您创建了应用程序，您可以看到在右下角有一个 `Add end device`，可以帮助您添加 Wio Terminal 设备。

![](https://files.seeedstudio.com/wiki/Alots/Alots30.png)

- 选择 **`Brand`** 为 **`Select Sense CAP`**
- 选择 **`Model`** 为 **`LoRa-E5`**
- Hardware Ver 和 Firmware Ver 默认设置
- Profile(Region) 根据您的位置（与 `Frequncy plan` 相同区域）
- Frequency plan 与您在**步骤 2**中的选择相同
- AppEUI、DevEUI 和 AppKey 在不同的 LoRa-E5 设备中是唯一的。您可以通过将固件 [Gateway_Tester.uf2](https://files.seeedstudio.com/wiki/Alots/Gateway_Tester.uf2) 编程到您的设备中轻松找到它们。就像 Edge Impulse 教程中一样，编程固件您只需在拉下 Wio Terminal 左按钮后将 uf2 文件拖到驱动器中。

![](https://files.seeedstudio.com/wiki/Alots/Alots37.png)

- End Device ID 将在您输入 DevEUI 后自动预填。

![](https://files.seeedstudio.com/wiki/Alots/Alots31.png)

**步骤 5** 连接设备后，有 `Payload formatters` 选择，您需要添加一些代码来解码数据（选择格式化程序类型为 'Javascript'）：

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

**步骤 6** 最后，转到网关，然后点击 `Live data`。您可能会看到结果：

![](https://files.seeedstudio.com/wiki/Alots/Alots33a.png)