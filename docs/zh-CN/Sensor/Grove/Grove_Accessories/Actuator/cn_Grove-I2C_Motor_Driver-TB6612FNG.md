---
title: Grove - I2C 电机驱动器 (TB6612FNG)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-I2C_Motor_Driver-TB6612FNG/
slug: /cn/Grove-I2C_Motor_Driver-TB6612FNG
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

Grove - I2C 电机驱动器 (TB6612FNG) 可驱动两个直流电机，最高支持 12V/1.2A，或驱动一个步进电机，最高支持 12V/1.2A。借助板载 MCU，它可以通过 Grove I2C 接口轻松与 Arduino 配合使用。

该驱动板基于 TB6612FNG，这是一款用于直流电机和步进电机的驱动 IC，采用 LD MOS 结构的输出晶体管，具有低导通电阻。通过两个输入信号 IN1 和 IN2，可以选择四种模式：顺时针 (CW)、逆时针 (CCW)、短刹车和停止模式。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期       |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C 电机驱动器 (TB6612FNG) | 初始版本                                                                                               | 2018年9月      |

## 特性

- 板载 MCU
- 顺时针/逆时针/短刹车/停止功能模式
- 内置热关断电路和低电压检测电路
- 待机（节能）系统

## 规格

|项目|参数|
|---|---|
|MCU 工作电压|3.3V / 5V|
|电机供电电压|2.5 ~ 13.5 (典型值 5V，最大值 15V)|
|输出电流|1.2 A(平均)/3.2 A (峰值)|
|开关频率|100kHz|
|逻辑接口|I2C|
|I2C 地址|0x14 (默认)|
|I2C 地址范围|0x01 ~ 0x7f (可配置)|
|尺寸|长: 60mm 宽: 40mm 高: 12mm|
|重量|13g|
|包装尺寸|长: 140mm 宽: 90mm 高: 12mm|
|毛重|20g|

## 典型应用

- 直流电机控制
- 步进电机控制

## 硬件概览

### 引脚分布

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)

### 硬件详情

___
**I2C 接口**

该板使用 I2C 接口，使板载 MCU 能够与主机通信。
>GND: 将此模块连接到系统 GND  
>VCC: 此模块可以使用 5V 或 3.3V  
>SDA: I2C 串行数据  
>SCL: I2C 串行时钟

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**电源输入**

为电机提供直流电源，输入范围为 2.5V ~ 13.5V。
>GND: 连接到系统 GND，插入电源 "-"  
>VM: 插入电源 "+"，为电机供电。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
**直流电机输出**

该板具有两个直流电机输出通道，每通道可输出 12V/1.2A。您可以使用此驱动板同时控制两个直流电机。
>A1: 通道 A 输出 1  
>A2: 通道 A 输出 2  
>B1: 通道 B 输出 1  
>B2: 通道 B 输出 2

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**步进电机输出**

您也可以使用此板控制 4 线步进电机，最高可输出 12V/1.2A。
>OUT1: 连接到步进电机线圈 1 的一个输入端。  
>OUT2: 连接到步进电机线圈 1 的另一个输入端。  
>OUT3: 连接到步进电机线圈 2 的一个输入端。  
>OUT4: 连接到步进电机线圈 2 的另一个输入端。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

:::note
实际上，直流端口和步进端口在物理上是连接在一起的。连接图如下：
:::

|直流端口|步进端口|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|

## 支持的平台

| Arduino                                                                                             | 树莓派 (Raspberry Pi)                                                                                   |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

*直流电机演示*

| Seeeduino V4.2 | 基础扩展板 (Base Shield) | Grove - I2C 电机驱动 (TB6612FNG) | 直流电机 (DC Motor) |
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 连接线。如果您丢失了连接线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。

    **3** 您还需要准备至少 2 根跳线。如果没有跳线，可以点击 [这里](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) 购买。
:::

- **步骤 1.** 将直流电机插入驱动板的 **DC Motor Output** 接口，将外部直流电源插入 **Power In** 接口。

- **步骤 2.** 将 Grove - I2C 电机驱动 (TB6612FNG) 连接到 Grove 基础扩展板的 **I^2^C** 接口。

- **步骤 3.** 将 Grove 基础扩展板插入 Seeeduino。

- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect1.jpg)

*步进电机演示*

| Seeeduino V4.2 | 基础扩展板 (Base Shield) | Grove - I2C 电机驱动 (TB6612FNG) | 步进电机 (Stepper Motor) |
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/Motor%2024BYJ48_02.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank">立即购买</a>|

- **步骤 1.** 将步进电机连接到驱动板的 **Stepper Motor Output** 接口，将外部直流电源插入 **Power In** 接口。

:::tip
        此驱动板适用于 4 线步进电机。根据您使用的步进电机，接线颜色可能不同。我们使用的是 24BYJ48 电机，接线如下表所示：
:::

|引脚名称| 步进电机的线 | 线颜色 (24BYJ48) |
|---|---|---|
|OUT1|线圈 1 的一端 |橙色|
|OUT2|线圈 1 的另一端|蓝色|
|OUT3|线圈 2 的一端|粉色|
|OUT4|线圈 2 的另一端|黄色|

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/p%2Blogo/coil.jpg)

- **步骤 2.** 将 Grove - I2C 电机驱动 (TB6612FNG) 连接到 Grove 基础扩展板的 **I^2^C** 接口。

- **步骤 3.** 将 Grove 基础扩展板插入 Seeeduino。

- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect2.jpg)

:::note
由于直流端口和步进端口物理上是连接在一起的，您也可以使用两个直流端口来控制步进电机。连接图如下：
:::
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect3.jpg)

:::note
如果我们没有 Grove 基础扩展板，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino      |  Grove 电缆       |Grove - I2C 电机驱动器 (TB6612FNG)|
|--------------- |--------------------|-----|
| GND            | 黑色               | GND |
| 5V 或 3.3V     | 红色               | VCC |
| SDA            | 白色               | SDA |
| SCL            | 黄色               | SCL |

#### 软件

:::caution
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Grove_Motor_Driver_TB6612FNG](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开默认示例，我们为您提供了两个示例：

>dc_motor: 直流电机演示  
>stepper_motor_2phase: 4线2相步进电机演示。

您可以通过以下两种方式打开它们（以 dc_motor 为例）：  
1. 直接在 Arduino IDE 中通过路径打开：**File --> Examples --> Grove - Motor Driver(TB6612FNG) --> dc_motor**。
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path1.jpg)  
2. 在您的电脑中打开，点击 **dc_motor.ino**，您可以在文件夹 **XXXX\Arduino\libraries\Grove_Motor_Driver_TB6612FNG-master\examples\dc_motor** 中找到它，其中 **XXXX** 是您安装 Arduino IDE 的位置。
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path2.jpg)

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::tip
如果一切正常，当您为外部电源端口供电时，电机将运行。
:::

### 使用 Raspberry Pi 4 计算机

#### 硬件

**所需材料**

*直流电机演示*

| Raspberry Pi 4 计算机 | Grove Raspberry Pi 基础扩展板 | Grove - I2C 电机驱动器 (TB6612FNG) |直流电机|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/products/102110421/raspberrypi4.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/BaseHat.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入 USB 电缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 电缆，2 根线的电缆无法传输数据。如果您不确定您拥有的电缆，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 电缆。如果您丢失了 Grove 电缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。

**3** 您还需要准备至少 2 根跳线。如果您没有，可以点击 [这里](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) 购买。
:::

- **步骤 1.** 将直流电机插入驱动板的 **DC Motor Output** 端口，将外部直流电源插入 **Power In** 端口。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect1.jpg)

- **步骤 2.** 将 Grove - I2C 电机驱动器 (TB6612FNG) 连接到 Grove Raspberry Pi 基础扩展板的 **I^2^C** 端口。

- **步骤 3.** 将 Grove Raspberry Pi 基础扩展板插入 Raspberry Pi 4 计算机。

- **步骤 4.** 将 Raspberry Pi 4 计算机连接到显示器。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect2.jpg)

:::note
如果这是您第一次使用 Raspberry Pi，请在开始之前参考 [Raspberry 入门指南](https://wiki.seeedstudio.com/cn/Grove_Base_Kit_for_Raspberry_Pi/#getting-started)。
:::

#### 软件

:::caution
如果您使用的是 **Raspberry Pi，且 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 执行此命令行。
感谢 MarkusBansky 提供 Grove_Motor_Driver_TB6612FNG 的软件库和学习资源，用于 Raspberry Pi 4 和 Python3。
这是 [Grove Arduino 库](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG) 的移植版本，适用于 [Grove I2C 电机驱动器 TB6612FNG](https://wiki.seeedstudio.com/cn/Grove-I2C_Motor_Driver-TB6612FNG/)。
:::

#### 要求

* RaspberryPi Linux 镜像
- Python 3.6+
- smbus 库
- time 库
- math 库

:::note
该库包含 6 个用于电机平滑启动的缓动函数。
缓动函数目前只能同时用于单个电机。
包含 IN 和 OUT 函数。
:::

#### 如何使用库

:::caution
如果您使用的是 **Raspberry Pi，且 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 执行此命令行。
首先，请确保您运行的是最新发布版本的 **pip**。此库要求您向 **pip.conf** 添加额外的 `index-url`，以便安装它。您可以通过使用 `sudo nano /etc/pip.conf` 编辑配置文件，并在 `[global]` 部分之后插入以下行：
:::

```
index-url=https://pypi.python.org/
```

现在，您可以像往常一样安装该软件包，对于 Python3，请使用以下示例代码：

```
python3 -m pip install raspberry-i2c-tb6612fng
```

成功安装库后，请进入 raspberry-i2c-tb6612fng 文件夹，使用以下代码：

```
cd raspberry-i2c-tb6612fng
```

最后一步是运行测试代码。

```
python3 test.py
```

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/putty.png)

:::tip
        如果一切正常，当您输入 `python3 test.py` 时，电机将开始运行。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - I2C Motor Driver (TB6612FNG) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip)

- **[Zip]** [Grove_Motor_Driver_TB6612FNG 软件库](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG/archive/master.zip)

- **[PDF]** [TB6612FNG 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/TB6612FNG.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>