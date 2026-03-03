---
description: Shield Bot V1.2
title: Shield Bot V1.2
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Shield_Bot_V1.2
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Shield Bot V1.2
category: Arduino
bzurl: https://www.seeedstudio.com/Shield-Bot-p-1380.html
oldwikiname: Shield_Bot_V1_2
prodimagename: Shield_Bot_Kit_Product_Image.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/shield bot.jpg
surveyurl: https://www.research.net/r/Shield_Bot_V1_2
sku: 110060010
--- -->

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_Kit_Product_Image.jpg)

Shield Bot 是一个易于使用的入门级机器人平台，帮助您跨入机器人技术领域。您可以使用提供的库和示例代码在几分钟内构建一个循线机器人。

与之前版本相比，Shield Bot V1.2 没有太大变化。
:::note
不包含兼容的 Arduino 开发板，请购买 Seeeduino 或 Arduino。
:::

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Shield-Bot-p-1380.html)

特性
--------

- **易于上手** - Shieldbot 即插即用。可在几分钟内开箱即用
- **可扩展的想象力** - 免焊接的 Grove 扩展端口可轻松连接更多传感器和执行器。扩展板接头允许使用任何额外的 Arduino 扩展板
- **开源** - 它被设计为可破解、适配和转换为您想要的任何形式！
- **基于 Arduino** - Shieldbot 是一个 Arduino 扩展板。广泛的 Arduino 社区和扩展板生态系统可用于无限扩展！
- **充电效率** - 可快速充满电。具有高效率。

规格参数
--------------

### 一般规格

| 项目                        | 参数                                             |
|-----------------------------|-------------------------------------------------------|
| 传感器                      | 5个红外反射传感器，用于循线和边缘跟踪 |
| 锂离子充电电池 | 900 mAh                                               |
| 齿轮电机                   | 两个耐用的 160:1 微型金属齿轮电机              |
| Grove 端口                  | 6个 Grove 扩展端口                              |
| 扩展板接头               | Arduino 扩展板扩展接头                      |

### 充电规格

**充电模式和充电效率如下表所示：**

| 模式       | 充电电流(A) | 输入功率(W) | 充电功率(W) | 充电效率(%) | 充电时间(h) |
|------------|-------------------|--------------------|-----------------|----------------------|----------------|
| USB 充电 | 0.396             | 3.94               | 3.56            | 90.36                | 2.50           |
| Vin 充电 | 0.7               | 6.78               | 6.30            | 92.92                | 1.41           |

硬件概述
-----------------

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_V1.2_Foto_1.JPG)

- **电源开关**：当 ShieldBot 关闭时，Shield bot 无法运行。但您可以使用 **USB 充电端口** 为电池充电。
- **USB 充电端口：** USB mini-B，用于为电池充电。
- **Grove 端口：** Grove 端口访问引脚 D0、D1、D2、D3、D4、D5、A4、A5。可以将 Grove 模块连接到这些 Grove 端口。
- **红外循线电位器**：用于调节循线传感器的灵敏度。顺时针调节，灵敏度增加；逆时针调节，灵敏度降低。
- **红外循线传感器：** S1 到 S5。检测到非反射表面时显示蓝色（例如黑色胶带线）
- **循线传感器开关：** 将开关拨向"ON"以将循线传感器连接到 Arduino 的 I/O 引脚（占用的引脚为 A0、A1、A2、A3、D4）。库中的 LineFollowingSimple 演示使用循线传感器输出信号来控制 Shield Bot 运行。如果开关拨向"OFF"，Seeeduino/Arduino 无法通过循线传感器输出信号控制 Shield Bot。
- **Arduino 扩展板扩展接头**：Shield Bot 可以真正堆叠其他扩展板。

:::note
1. 如果启用 S5，您将无法使用 grove 端口 j14 和 j13。
2. 您只能使用 Arduino 的串行线、UART grove 端口或 j11 中的一个，因为它们都共享 D1/TX 线。
:::

状态指示灯
-------------

Shield Bot 有很多 LED 来显示正在发生的情况！
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_bot_1.2_LEDs.JPG)

| 指示灯编号      | 功能                | 状态                                                                                    |
|--------------------|-------------------------|-------------------------------------------------------------------------------------------|
| D22                | 电源                   | Shieldbot 开启时显示绿色。当 ShieldBot 关闭时，ShieldBot 只能为电池充电。 |
| D23 和 D24        | 充电状态         | 红色表示正在充电，绿色表示充电完成。                                            |
| D18                | 复位                   | 按下复位按钮时显示红色。                                                           |
| D11 和 D12        | 右电机指示灯  | 绿色表示前进，红色表示后退，两个都亮表示停止。                            |
| D13 和 D15        | 左电机指示灯   | 绿色表示前进，红色表示后退，两个都亮表示停止。                            |
| D5 D10 D14 D17 D19 | 光传感器指示灯 | 检测到非反射表面时显示蓝色（例如黑色胶带线）。                          |

结构
---------

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Position_for_seeeduino.jpg)
第1部分、第2部分和第3部分由我们的3D打印机制作。您还可以看到 Seeeduino 开发板的安装位置。

入门指南
---------------

设置 Shieldbot 快速简单！按照这些步骤让您的机器人伙伴启动并运行。

### 准备工作

- 首先，您需要将Arduino插入Shield Bot的底部，并使用USB线将其连接到PC。

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/ShieldBot_Programming2.JPG)

- 在上传代码之前，您最好将电源开关转向*OFF*。否则，它会在您不注意的时候运行，可能会吓到您。

我们为Shield Bot构建了一个很好的库，包含有用的函数来控制您的Shield Bot和许多示例，这样您就可以立即启动并运行它！

- 从[这里](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_Library.zip)下载库并解压。
- 将ShieldBot文件放入Arduino IDE的libraries文件夹中，路径为：..\arduino-1.0.1\libraries。

### 安装电池

当您想让Shield Bot在地面上运行时，需要电池。

:::note
1. 一旦安装了电池，您可以使用mini-b USB线为电池充电。当电池正在充电时，红色LED会亮起。充电完成后，绿色LED会亮起。
2. 上传代码时，您需要将Seeeduino的USB端口连接到PC。Shield Bot上的USB端口仅用于为电池充电。
:::

### 演示1：驱动电机运行

- 打开Arduino环境，转到File->Examples->Shieldbot->drive来加载第一个Shield Bot示例。确保您选择了正确的Arduino板和串口。
- 然后将代码上传到Arduino。上传完成后，控制台应显示"Done Uploading"。
- 完成上传后，您可以拔掉USB线。
- 然后将Shield Bot放在宽敞的地方，将电源开关转到'**ON**'。
- 现在Shield Bot将以一定速度运行。

### 演示2：跟随黑线

Shield Bot可以基于寻线传感器（s1,s2,s3,s4,s5）检测反射表面。如果检测到非反射表面（例如黑色胶带线），蓝色指示灯会亮起。现在让我们用它来让机器人跟随黑线运行。

:::caution
确保拨码开关已打开，并且您的任何扩展板都没有使用引脚A0、A1、A2、A3或D4。
:::

- 使用USB线将Seeeduino连接到PC后，重新上传新演示：LineFollowingSimple。
- 完成上传后，将Shield Bot放在预建的黑色跑道上。

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_Line_Finder.jpg)

- 您可以调节IR寻线器电位器来改变寻线器的灵敏度。顺时针调节时，灵敏度增加；逆时针调节时，灵敏度降低。试试看！

### 应用实例

**1. 时钟**

这是一个非常简单但可工作的时钟。轮子一个向前转，一个向后转，使反射传感器围绕轮子旋转来指示分钟。在整点时，机器人向前驱动并推进线性滑块来指示小时。用激光切割废料和透明胶带制作的免费线性导轨值得加分！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team1_2.jpg)

**2. Shot.Bot**

这是一个非常华丽的设备，活动中许多人都说他们想买一个。这个循线机器人会接受订单，然后沿着轨道行驶到分配器，在那里它会使用舵机来分配3种饮料中任意一种的一定量，然后驱动回到顾客那里。

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team7_2.jpg)

**3. Simon**

这是一个设计精美但尚未完全完成的双人对战西蒙克隆游戏。机器人播放带灯光的曲调，您使用激光切割的圆盘（完整配备盲文，这样视力受损的人也能玩）在白板上标记音调。然后Shieldbot向前驱动并使用传感器查看您是否标记正确。您想要比对手答对更多，这样机器人就会向他们的目标驱动！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team6_2.jpg)

**4. HackPHX-Plotter**

该设备非常接近于仿制Der Kritzler 2D绘图机，这是一个带有makerslide的垂直x,y工作台，并有一个巧妙的想法，即将Shield Bot的轮胎固定下来，这样当它倒退时，就会将笔从绘图表面抬起 :) 他们甚至与设计师合作开发了PC端用户界面！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team8.jpg)

参考
---------

要使用Shield Bot库，只需添加Shield Bot库并在Arduino代码的void setup()之前的顶部声明一个Shieldbot对象

```
#include <Shieldbot.h>  //包含Shield Bot库
 
Shieldbot shieldbot = Shieldbot(); //声明一个Shieldbot对象
```

**<u> setMaxSpeed(int both) </u>**

*描述*：设置两个电机的最大速度。

*both*：介于0（基本关闭）和255（全速）之间

**<u> setMaxSpeed(int left, int right)</u>**

*描述*：向左右电机写入最大速度。

*left,right*：Left是左电机的速度。right是右电机的速度。介于0（基本关闭）和255（全速）之间

**<u> rightMotor(char mag)</u>**

*描述*：启用右电机，负值表示向后，正值表示向前。如果您让一个电机驱动得更慢，它会向那个方向转弯。如果您让电机向相反方向转动，它会旋转。

*mag*：右电机旋转的方向；-128：完全向后，0：不移动，127：完全向前

**<u> leftMotor(char mag)</u>**

*描述*：启用左电机，负值表示向后，正值表示向前。

*mag*：左电机旋转的方向；-128：完全向后，0：不移动，127：完全向前

**<u> forward()</u>**

*描述*：启用电机以setSpeed()的速度使机器人直线向前。

**<u> backward()</u>**

*描述*：启用电机以setSpeed()的速度使机器人直线向后。

**<u> drive(char left, char right)</u>**

*描述*：通用驱动调用。直接调用leftMotor和rightMotor。

*left*: 介于 -128（左电机反向 100% 最大速度）、0（静止）和 127（左电机正向 100% 最大速度）之间 :*right*: 介于 -128（右电机反向 100% 最大速度）、0（静止）和 127（右电机正向 100% 最大速度）之间

**<u> stop()</u>**

*描述*: 禁用电机。您也可以使用 drive(0,0)。

**<u> stopLeft()</u>**

*描述*: 禁用左电机。您也可以使用 drive(0,X)。

**<u> stopRight()</u>**

*描述*: 禁用右电机。您也可以使用 drive(X,0)。

**<u> fastStop()</u>**

*描述*: 禁用右电机。您也可以使用 drive(X,0)。

**<u> fastStopLeft()</u>**

*描述*: 更快地禁用左电机。这被认为可能对电机芯片有害，请谨慎使用

**<u> fastStopRight()</u>**

*描述*: 更快地禁用右电机。这被认为可能对电机芯片有害，请谨慎使用

**<u> readS1(), readS2(), readS3(), readS4(), readS5()</u>**

*描述*: 读取板载 5 个光传感器中的任意一个。注意：您需要使用拨码开关块将传感器连接到 arduino 端口（开关朝向数字和 ON 文本方向）。如果您不想使用光传感器，这些开关可以让您将这些引脚用于其他用途

*返回值*: 如果表面反射（例如白色）则返回 LOW，如果表面不反射任何东西（例如黑色）则返回 HIGH

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/ShieldBot_driveLibrary.png)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Shield Bot 1.2 库文件](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_Library.zip)
- [Shield Bot 1.2 Eagle 文件](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_eagle_files.zip)
- [ShieldBot 1.2 原理图](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_v1.2.pdf)
- [红外反射传感器 RPR-220 数据手册](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/RPR-220.pdf)
- [升压稳压器 ISL97516 数据手册](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/ISL97516.pdf)
- [锂离子充电器 BQ2057 数据手册](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/BQ2057.pdf)
- [H桥电机驱动器 L298 数据手册](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/L298.pdf)
- [运算放大器 LMV358 数据手册](http://www.ti.com/product/lmv358)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Shield_Bot_V1.2 -->

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