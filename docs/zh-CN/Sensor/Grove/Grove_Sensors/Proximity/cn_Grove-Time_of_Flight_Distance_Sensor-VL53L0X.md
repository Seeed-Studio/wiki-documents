---
title: Grove - 飞行时间距离传感器 VL53L0X
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Time_of_Flight_Distance_Sensor-VL53L0X/
slug: /cn/Grove-Time_of_Flight_Distance_Sensor-VL53L0X
last_update:
  date: 03/01/2023
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/main.JPG)

Grove - 飞行时间距离传感器-VL53L0X 是一款基于 VL53L0X 的高速、高精度、长距离距离传感器。

VL53L0X 是新一代飞行时间 (ToF) 激光测距模块，采用目前市场上最小的封装，无论目标反射率如何，都能提供精确的距离测量，这与传统技术不同。它可以测量高达 2m 的绝对距离，在测距性能水平上树立了新的基准，为各种新应用打开了大门。

VL53L0X 集成了领先的 SPAD 阵列（单光子雪崩二极管）并嵌入了 ST 的第二代 FlightSense™ 专利技术。

VL53L0X 的 940 nm VCSEL 发射器（垂直腔面发射激光器）对人眼完全不可见，结合内部物理红外滤光片，它能够实现更长的测距距离、对环境光的更高抗扰性，以及对盖板玻璃光学串扰的更好鲁棒性。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- **完全集成的微型模块**
  
  - 940 nm 激光 VCSEL
  - VCSEL 驱动器
  - 带有先进嵌入式微控制器的测距传感器

- **快速、精确的距离测量**
  - 测量高达 2 m 的绝对距离
  - 报告的距离与目标反射率无关
  - 先进的嵌入式光学串扰补偿，简化盖板玻璃选择

- **眼部安全**
  - 符合最新标准 IEC 60825-1:2014 - 第 3 版的 1 类激光设备

- **易于集成**
  - 单个可回流焊元件
  - 无需额外光学器件
  - 单电源供电
  - 用于设备控制和数据传输的 I2C 接口
  - Xshutdown（复位）和中断 GPIO
  - 可编程 I2C 地址

## 规格参数

特性|详细信息
---|---
工作电压|3.3V/5V
工作温度|-20℃ - 70℃
推荐测量距离|30mm-1000mm
分辨率|1mm
红外发射器|940 nm
总线速率|高达 400 kHz（FAST 模式）串行总线
IIC 地址|0x29

## 应用

- 个人电脑/笔记本电脑/平板电脑和物联网的用户检测（节能）
- 机器人技术（障碍物检测）
- 白色家电（自动水龙头、皂液器等中的手部检测）
- 一维手势识别
- 激光辅助自动对焦。增强和加速相机自动对焦系统性能，特别是在困难场景（低光照、低对比度）或快速移动视频模式下。

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

:::note
    如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与Arduino一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove - 飞行时间距离传感器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻柔地插入USB线缆，否则可能会损坏端口。请使用内部有4根线的USB线缆，2根线的线缆无法传输数据。如果您不确定您的线缆规格，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

    **2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买
:::

- **步骤1.** 将Grove - 飞行时间距离传感器连接到Grove-Base Shield的**IIC**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 通过USB线缆将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/connect.jpg)

:::note
 如果我们没有Grove Base Shield，我们也可以直接将Grove - 温湿度传感器Pro连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 飞行时间距离传感器 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| SDA            | 白色                   |
| SCL            | 黄色                  |

#### 软件

- **步骤1.** 从Github下载[VL53L0X库](https://github.com/Seeed-Studio/Grove-Ranging-sensor-VL53L0X)。

- **步骤2.** 将`Grove-Ranging-sensor-VL53L0X-master.zip`文件解压到`Arduino库文件夹`中。

:::note
  例如，我将这个库下载到`D:\Software\WorkWork\arduino-1.8.5\libraries`，所以只需要在这里解压zip文件。总之，请确保`Grove-Ranging-sensor-VL53L0X-master`文件夹在您的Arduino库文件夹中，如下图所示。
:::

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/folder.png)

- **步骤3.** 打开您刚刚解压的`Grove-Ranging-sensor-VL53L0X-master\examples`文件夹，您将看到五个子文件夹：

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/examples.png)

根据您的需要选择不同的示例。然后双击`xxx.ino`文件打开Arduino IDE。

:::note
  在这个演示中我们使用`high_accuracy_ranging.ino`。
:::

- **步骤4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤5.** 通过点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。如果一切正常，您将得到结果。

结果应该如下所示：

```
time of mesurement: 205
Measured distance:115 mm
time of mesurement: 205
Measured distance:117 mm
time of mesurement: 205
Measured distance:120 mm
time of mesurement: 205
Measured distance:125 mm
time of mesurement: 204
Measured distance:130 mm
time of mesurement: 205
Measured distance:138 mm
time of mesurement: 205
Measured distance:143 mm
time of mesurement: 205
Measured distance:144 mm
time of mesurement: 205
Measured distance:152 mm

```

## 原理图在线查看器

<div>
  className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip" style={'{'}{'{'}borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'{'}'}{'}'}&gt;
</div>

## 资源

- **[ZIP]** [Grove-飞行时间距离传感器 VL53L0X Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip)
- **[PDF]** [VL53L0X 用户手册](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/software-flow.pdf)
- **[PDF]** [VL53L0X 数据手册](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/vl53l0x-datasheet.pdf)

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