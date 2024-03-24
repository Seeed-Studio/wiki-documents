---
title: Grove - I2C Motor Driver (TB6612FNG)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/
slug: /cn/Grove-I2C_Motor_Driver-TB6612FNG
last_update:
  date: 03/20/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

Grove - I2C电机驱动器（TB6612FNG）可以驱动两个直流电机，每个电机的电压最高为12V，电流最高为1.2A，或者驱动一个步进电机，电压最高为12V，电流最高为1.2A。该驱动器板载有微控制器（MCU），可以通过Grove I2C接口与Arduino轻松配合使用。

这款驱动器板基于TB6612FNG，它是一款用于直流电机和步进电机的驱动IC，采用具有低导通电阻的LD MOS结构的输出晶体管。两个输入信号IN1和IN2可以选择四种模式之一，包括顺时针（CW）、逆时针（CCW）、短制动和停止模式。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本 | 变更内容                                                                                           | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C 电机驱动器 (TB6612FNG) | 初始版本                                                                                           | 2018年9月 |

## 特点

- 板载微控制器（MCU）
- 顺时针（CW）/逆时针（CCW）/短制动/停止功能模式
- 内置热关断电路和低电压检测电路
- 待机（节能）系统

## 规格

|项目| 值                                 |
|---|---|
|MCU工作电压|3.3V / 5V|
|电机供电电压|2.5 ~ 13.5 (典型值为5V，最大值15V)|
|输出电流|1.2 A(平均)/3.2 A (峰值)|
|开关频率|100kHz|
|逻辑接口|I2C|
|I2C地址|0x14 (默认)|
|I2C地址范围|0x01 ~ 0x7f (可配置)|
|尺寸|长: 60mm 宽: 40mm 高: 12mm|
|重量|13g|
|包装尺寸|长: 140mm 宽: 90mm 高: 12mm|
|总重|20g|

## 典型应用

- 直流电机控制
- 步进电机控制

## H硬件概述

### 引脚定义

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)

### 硬件细节

___
**I2C接口**

该板使用I2C接口，使板载MCU能够与主机计算机进行通信。
>GND: 将此模块连接到系统GND  
>VCC: 此模块可以使用5V或3.3V的电压  
>SDA: I2C 串行数据  
>SCL: I2C 串行时钟

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**电源输入**

为电机提供直流电源，输入范围2.5V ~ 13.5V。
>GND: 连接到系统GND，插入电源“-”  
>VM: 插入电源“+”，为电机供电

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
>

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**步进电机输出**

您还可以使用此板来控制四线步进电机，它可以输出高达12V/1.2A的电流。
>OUT1: 连接到步进电机线圈1的一个输入端。 
>OUT2: 连接到步进电机线圈1的另一个输入端。 
>OUT3: 连接到步进电机线圈2的一个输入端。  
>OUT4: 连接到步进电机线圈2的另一个输入端。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

:::注意
        实际上，直流电机端口和步进电机端口在物理上是连接在一起的。连接图如下所示：
:::

|直流电机端口|步进电机端口|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
    上面提到的受支持的平台只是表明模块在软件或理论上的兼容性。在大多数情况下，我们只提供适用于Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

## 入门指南

### 玩转 Arduino

#### 硬件

**所需材料**

*直流电机演示*

| Seeeduino V4.2 | 基础扩展板 | Grove - I2C 电机驱动板 (TB6612FNG) |直流电机|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">立即获取</a>|

:::注意
    **1** 请轻轻地插入USB电缆，否则可能会损坏端口。请使用内部有4根线的USB电缆，2根线的电缆无法传输数据。如果您不确定自己手中的电缆是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

    **2** 购买每个Grove模块时，都会随附一条Grove电缆。如果您遗失了Grove电缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
    
    **3** Y您还需要准备至少2根跳线。如果您没有，可以点击 [这里](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) 购买。
:::

- **步骤 1.** 将直流电机插入驱动板的**直流电机输出**端口，将外部直流电源插入**电源输入**端口。
- **步骤 2.** 将Grove - I2C电机驱动板（TB6612FNG）连接到Grove-Base Shield的**I^2^C**端口。
- **步骤 3.** 将Grove-Base Shield插入Seeeduino。
- **步骤 4.** 通过USB电缆将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect1.jpg)

*步进电机演示*

| Seeeduino V4.2 | 基础扩展板 | Grove - I2C 电机驱动板 (TB6612FNG) |步进电机|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/Motor%2024BYJ48_02.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank">立即获取</a>|

- **步骤 1.** 将步进电机连接到驱动板的**步进电机输出**端口，将外部直流电源插入**电源输入**端口。

:::提示
        此驱动板适用于4线步进电机。根据您使用的步进电机不同，接线颜色也不同。我们以电机24BYJ48为例，接线方式如下表所示：
:::

| 引脚名称 | 步进电机接线端 |电机线颜色(24BYJ48)|
|---|---|---|
|OUT1|线圈1的一端 |橙色|
|OUT2|线圈1的另一端|蓝色|
|OUT3|线圈2的一端|粉色|
|OUT4|线圈2的另一端|黄色|

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/p%2Blogo/coil.jpg)

- **步骤 2.** 将Grove - I2C电机驱动板（TB6612FNG）连接到Grove-Base Shield的**I^2^C**端口。

- **步骤 3.** 将Grove-Base Shield插入Seeeduino。

- **步骤 4.** 通过USB电缆将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect2.jpg)

:::注意
        由于直流电机端口和步进电机端口在物理上是连接在一起的，你也可以使用这两个直流电机端口来控制你的步进电机。连接图如下所示：
:::
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect3.jpg)

:::注意
        如果我们没有Grove Base Shield，我们也可以按照以下方式直接将这个模块连接到Seeeduino。
:::

| Seeeduino      |  Grove 电缆     |Grove - I2C 电机驱动板 (TB6612FNG)|
|--------------- |--------------------|-----|
| GND            | 黑色            | GND |
| 5V or 3.3V     | 红色              | VCC |
| SDA            | 白色            | SDA |
| SCL            | 黄色           | SCL |

#### 软件

:::警告
        如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从Github下载[Grove_Motor_Driver_TB6612FNG](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG)库。

- **步骤 2.** 参考[如何安装Arduino库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)来为Arduino安装库。

- **步骤 3.** 重启Arduino IDE。打开默认的示例，我们为您提供了两个示例

>dc_motor: 直流电机演示 
>stepper_motor_2phase: 4线2相步进电机演示。

您可以通过以下两种方式打开它们（以dc_motor为例）：  
    1.  通过路径在Arduino IDE中直接打开：**文件 --> 示例 --> Grove - Motor Driver(TB6612FNG) --> dc_motor**。![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path1.jpg)  
            2. 通过点击**dc_motor.ino**文件，您可以在计算机中打开它。您可以在**XXXX\Arduino\libraries\Grove_Motor_Driver_TB6612FNG-master\examples\dc_motor**, 文件夹中找到它，其中**XXXX**是您安装Arduino IDE的位置。
            ![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path2.jpg)

- **步骤4.** 上传演示程序。如果您不知道如何上传代码，请参考[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

:::提示
        如果一切正常，当您为外部电源端口供电时，电机将会运行。
:::

### 玩转 Raspberry Pi 4 电脑

#### 硬件

**所需材料**

*直流电机演示*

| 树莓派 4 电脑 | 树莓派 Grove Base Hat | Grove - I2C 电机驱动板(TB6612FNG) |直流电机|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/products/102110421/raspberrypi4.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/BaseHat.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">立即获取</a>|

:::注意
    **1** 请轻轻插入USB电缆，否则可能会损坏端口。请使用内部有4根线的USB电缆，2根线的电缆无法传输数据。如果您不确定您手头的电缆是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)进行购买。

    **2** 每个Grove模块在购买时都会附带一根Grove电缆。如果您遗失了Grove电缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 进行购买。
    
    **3**  您还需要准备至少2根跳线，如果您没有，可以点击 [这里](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) 进行购买。
:::

- **步骤 1.** 将直流电机插入驱动板的**DC Motor Output**端口，将外部直流电源插入**Power In**端口。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect1.jpg)

- **步骤 2.** 将Grove - I2C电机驱动板（TB6612FNG）连接到树莓派 Grove Base Hat的**I^2^C**端口。

- **步骤 3.** 将树莓派 Grove Base Hat插入树莓派 4 电脑。

- **步骤 4.**  将树莓派 4 电脑连接到显示器。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect2.jpg)

:::注意
        如果您是第一次使用树莓派，请在开始之前参考[树莓派入门指南](https://wiki.seeedstudio.com/Grove_Base_Kit_for_Raspberry_Pi/#getting-started)。
:::

#### 软件

:::警告
    如果您使用的是**带有Raspberrypi OS >= Bullseye的树莓派**，您必须**仅使用Python3**来执行此命令行。
感谢MarkusBansky为树莓派 4 和 python3 提供了Grove_Motor_Driver_TB6612FNG的软件库和学习资源。
这是[Grove Arduino LIbrary](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG)的移植版本，用于[Grove I2C Motor Driver on TB6612FNG](https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/)。
:::

#### 要求

* 树莓派 Linux 镜像
- Python 3.6+
- smbus 库
- time 库
- math 库

:::注意
    这个库包含6个缓动函数，用于电机的平稳启动。
    目前，缓动函数一次只能用于单个电机。
    包含 IN 和 OUT 函数。
:::

#### 如何使用库

:::警告
     如果您使用的是**带有Raspberrypi OS >= Bullseye的树莓派**，您必须**仅使用Python3**来执行此命令行。
  首先，请确保您正在运行最新版本的**pip**。这个库要求您在**pip.conf**中添加一个额外的`index-url`才能安装。您可以通过使用`sudo nano /etc/pip.conf`编辑配置文件，并在`[global]`部分之后插入以下行来完成此操作：
:::

  ```
  index-url=https://pypi.python.org/
  ```

现在您可以像平常一样安装这个包，对于python3，您可以使用例如：

```
python3 -m pip install raspberry-i2c-tb6612fng
```

成功安装库之后，请进入 raspberry-i2c-tb6612fng 文件夹并使用以下代码。

```
cd raspberry-i2c-tb6612fng
```

最后一步是运行测试代码。

```
python3 test.py
```

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/putty.png)

:::提示
        如果一切顺利，当你输入`python3 test.py`时，电机将会运行。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - I2C 电机驱动器 (TB6612FNG) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip)

- **[Zip]** [Grove_Motor_Driver_TB6612FNG 软件库](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG/archive/master.zip)

- **[PDF]** [TB6612FNG数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/TB6612FNG.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您在使用我们产品的过程中体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
