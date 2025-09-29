---
description: Shield Bot V1.1
title: Shield Bot V1.1
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Shield_Bot_V1.1
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Shield Bot V1.1
category: Arduino
bzurl: https://www.seeedstudio.com/Shield-Bot-p-1380.html
oldwikiname:  Shield Bot V1.1
prodimagename: 4WD_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG
surveyurl: https://www.research.net/r/Shield_Bot_V1-1
sku:  110060010
--- -->
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/shield%20bot.jpg)

与之前版本相比，Shield Bot V1.1 可以使用 PC 的 USB 端口为电池充电。在我们优化电路后，充电效率大大提高。您还可以使用 Arduino/Seeeduino 的 Vin 引脚进行快速充电。

注意：不包含兼容的 Arduino 开发板，请尝试 [Seeeduino](/cn/Seeeduino "Seeeduino")。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Shield-Bot-p-1380.html)

## 特性

---

* **易于上手** - Shieldbot 即插即用，可在几分钟内开箱即用

* **可扩展的想象力** - 免焊接的 Grove 扩展端口可轻松连接更多传感器和执行器，扩展板接头允许使用额外的 Arduino 扩展板

* **开源** - 它被设计为可被破解、改装和转换成您想要的任何形式！

* **基于 Arduino** - Shieldbot 是一个 Arduino 扩展板，因此可以使用广泛的 Arduino 社区和扩展板生态系统进行无限扩展！

* **充电效率** - 可以快速充满电，并且具有高效率。

:::note
新版本更新输出高电压从约 4.0V 以上更改为约 4.5V 以上。
:::

## 规格

---

<table>
  <tr>
    <th>项目</th>
    <th>参数</th>
  </tr>
  <tr>
    <td width="200">传感器</td>
    <td width="300">5个红外反射传感器，用于循线和边缘跟随</td>
  </tr>
  <tr>
    <td>锂离子充电电池</td>
    <td>900 mAh</td>
  </tr>
  <tr>
    <td>齿轮电机</td>
    <td>两个耐用的 160:1 微型金属齿轮电机</td>
  </tr>
  <tr>
    <td>Grove 端口</td>
    <td>6个 Grove 扩展端口</td>
  </tr>
  <tr>
    <td>扩展板接头</td>
    <td>Arduino 扩展板扩展接头</td>
  </tr>
</table>

## 充电规格

---
<font color="red">充电模式和充电效率如下表所示：</font>

<table>
  <tr>
    <th>模式</th>
    <th>充电电流(A)</th>
    <th>输入功率(W)</th>
    <th>充电功率(W)</th>
    <th>充电效率(%)</th>
    <th>充电时间(h)</th>
  </tr>
  <tr>
    <td width="200">USB 充电</td>
    <td width="200">0.396</td>
    <td width="200">3.94</td>
    <td width="200">3.56</td>
    <td width="200">90.36</td>
    <td width="200">2.50</td>
  </tr>
  <tr>
    <td>Vin 充电</td>
    <td>0.7</td>
    <td>6.78</td>
    <td>6.30</td>
    <td>92.92</td>
    <td>1.41</td>
  </tr>
</table>

## 接口功能

---
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_Bot_V1.2_Foto_1.JPG)

* **电源开关**：当 ShieldBot 关闭时，Shield bot 无法运行。但您可以使用 **USB 充电端口** 为电池充电。

* **USB 充电端口：** USB mini-B，用于为电池充电。

* **Grove 端口：** Grove 端口访问引脚 D0、D1、D2、D3、D4、D5、A4、A5。可以将 Grove 模块连接到这些 Grove 端口。
* **红外循线电位器**：用于调节循线传感器的灵敏度。顺时针调节，灵敏度增加；逆时针调节，灵敏度降低。

* **红外循线传感器：** S1 到 S5。检测到非反射表面时显示蓝色（例如黑色胶带线）
* **使能开关：** 将开关转向"ON"以将循线传感器连接到 Arduino 的 I/O 引脚（占用的引脚为 A0、A1、A2、A3、D4）。库中的 LineFollowingSimple 演示使用循线传感器输出信号来控制 Shield Bot 运行。如果开关转向"OFF"，Seeeduino/Arduino 无法通过循线传感器输出信号控制 Shield Bot。

* **Arduino 扩展板扩展接头**：Shield Bot 可以真正堆叠其他扩展板。

:::note

* 1) 如果启用 S5，您无法使用 Grove 端口 j14 和 j13。
* 2) 您只能使用 Arduino 串行线、uart Grove 端口或 j11 中的一个，因为它们都共享 D1/TX 线。
:::

## 状态指示灯

---
Shield Bot 有很多 LED 来显示运行状态！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_bot_1.2_LEDs.JPG)

<table>
  <tr>
    <th>指示灯编号</th>
    <th>功能</th>
    <th>状态</th>
  </tr>
  <tr>
    <td width="200">D22</td>
    <td>电源</td>
    <td>Shieldbot 开启时为绿色。当 ShieldBot 关闭时，ShieldBot 只能为电池充电。</td>
  </tr>
  <tr>
    <td>D23 和 D24</td>
    <td>充电状态</td>
    <td>红色表示正在充电，绿色表示充电完成。</td>
  </tr>
  <tr>
    <td>D18</td>
    <td>复位</td>
    <td>按下复位按钮时为红色。</td>
  </tr>
  <tr>
    <td>D11 和 D12</td>
    <td>右电机指示器</td>
    <td>绿色表示前进，红色表示后退，两个都亮表示停止。</td>
  </tr>
  <tr>
    <td>D13 和 D15</td>
    <td>左电机指示器</td>
    <td>绿色表示前进，红色表示后退，两个都亮表示停止。</td>
  </tr>
  <tr>
    <td>D5 D10 D14 D17 D19</td>
    <td>光传感器指示器</td>
    <td>检测到非反射表面时为蓝色（例如黑色胶带线）。</td>
  </tr>
</table>

## 结构

---
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Position_for_seeeduino.jpg)

第1部分、第2部分和第3部分由我们的3D打印机制作。两个轮毂是相同的。打印图如下所示。非常神奇！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Print_diagram_1.JPG) ![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/P1018898.JPG)

## 入门指南

---
设置 Shieldbot 既快速又简单！按照以下步骤让您的机器人伙伴启动并运行。

### 准备工作

* 首先您需要将 Arduino 插入 Shield Bot 的底部，并使用 USB 线将其连接到 PC。

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/ShieldBot_Programming2.JPG)

* 在上传代码之前，您最好将使能开关转向 _OFF_。否则，它会在您不注意时运行，可能会吓到您。

我们为 Shield Bot 构建了一个很好的库，其中包含控制 Shield Bot 的有用函数和许多示例，这样您就可以立即启动并运行它！

* 从[这里](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Library.zip)下载库并解压。在使用我们的库之前，请打开 Note.txt 文件。
* 通过路径：..\arduino-1.0.1\libraries 将 ShieldBot 文件放入 Arduino IDE 的 libraries 文件夹中。

### 安装电池

当您想让 Shield Bot 在地面上运行时需要电池。
:::note

* 1) 一旦安装了电池，您可以使用 mini-b USB 线为电池充电。当电池正在充电时，红色 LED 会亮起。充电完成时，绿色 LED 会亮起。
* 2) 上传代码时，您需要将 seeeduino 的 usb 端口连接到您的 PC。shield bot 上的 usb 端口用于为电池充电。
:::

:::note
因为我们更改了 shield bot v1.1 的驱动引脚。所以在使用 Shieldbot 库文件之前，请确保您已修改 .cpp 文件以匹配您的 Shield Bot 版本。修改步骤在 Note.txt 中描述。
:::

### 演示 1：驱动电机运行

* 打开 Arduino 环境，转到 File->Examples->Shieldbot->drive 加载第一个 Shield Bot 示例。确保您选择了正确的 Arduino 板和串口。
* 然后将代码上传到 Arduino。上传完成后，控制台应显示"Done Uploading"。
* 完成上传后，您可以拔掉 usb 线。
* 然后将 Shield Bot 放在宽敞的地方，将电源开关转到'**ON**'。
* 现在 Shield Bot 将以一定速度运行。

### 演示 2：沿黑线行走

Shield Bot 可以基于寻线传感器（s1,s2,s3,s4,s5）检测反射表面。如果检测到非反射表面（例如黑色胶带线），蓝色指示器会亮起。现在让我们用它来让机器人沿着黑线行走。<br />
**<font color="red">注意：确保拨码开关已打开，并且您的扩展板都没有使用引脚 A0,A1,A2,A3 或 D4。</font>**

* 使用 USB 线将 Seeeduino 连接到 PC 后，重新上传新演示：LineFollowingSimple。

* 完成上传后。将 Shield Bot 放在预建的黑色跑道上。然后会出现精美的画面：

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_Bot_Line_Finder.jpg)

* 您可以调节 IR 寻线器电位器来改变寻线器的灵敏度。顺时针调节时，灵敏度增加，逆时针调节时，灵敏度降低。试试看！

### 应用实例

**1. 时钟**

这是一个非常简单的工作时钟。轮子一个向前转，一个向后转，使反射传感器围绕轮子旋转来指示分钟。在整点时，机器人向前行驶并推进线性滑块来指示小时。用激光切割废料和透明胶带制作的免费线性导轨值得额外加分！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team1_2.jpg)

**2. Shot.Bot**

这是一个非常华丽的设备，活动中许多人都说他们想购买。寻线机器人会接受订单，然后沿着轨道行驶到分配器，在那里它会使用舵机来分配3种饮料中任何一种的数量，然后驾驶回到顾客那里

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team7_2.jpg)

**3. Simon**

这里有一个设计精美但尚未完成的2人对战西蒙克隆游戏。机器人用灯光播放曲调，您使用激光切割的圆盘（配有盲文，这样视力受损的人也能玩）在白板上标记音调。然后 Shieldbot 向前行驶并使用传感器查看您是否标记正确。您希望获得比对手更多的正确答案，这样机器人就会朝着他们的目标行驶！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team6_2.jpg)

**4. HackPHX-Plotter**

该设备非常接近于模仿 Der Kritzler 2d 绘图机，这是一个带有 makerslide 的垂直 x,y 工作台，并且有一个巧妙的想法，就是将 Shield bot 的轮胎固定下来，这样当它倒退时，就会将笔从绘图表面上抬起 :) 他们甚至与设计师合作开发了一个 PC 端用户界面！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team8.jpg)

## 参考

---
要使用 Shield Bot 库，只需添加 Shield Bot 库并在 Arduino 代码的顶部，在 void setup() 之前声明一个 Shieldbot 对象

```
#include <Shieldbot.h> //包含 Shield Bot 库
Shieldbot shieldbot = Shieldbot(); //声明一个 Shieldbot 对象
```

**<u>setMaxSpeed(int both)</u>**

*描述*：设置两个电机的最大速度。
*both*：介于 0（基本关闭）和 255（全速）之间

**<u>setMaxSpeed(int left, int right)</u>**

*描述*：向左右电机写入最大速度。
*left,right*：Left 是左电机的速度。right 是右电机的速度。介于 0（基本关闭）和 255（全速）之间

**<u>rightMotor(char mag)</u>**

*描述*：启用右电机，负值表示后退，正值表示前进。如果让一个电机驱动得更慢，它会向那个方向转弯。如果让电机向相反方向转动，它会旋转。
*mag*：右电机的旋转方向；-128：完全后退，0：不移动，127：完全前进

**<u>leftMotor(char mag)</u>**

*描述*：启用左电机，负值表示后退，正值表示前进。
*mag*：左电机的旋转方向；-128：完全后退，0：不移动，127：完全前进

**<u>forward()</u>**

*描述*：启用电机以 setSpeed() 的速度让机器人直线前进。

**<u>backward()</u>**

*描述*：启用电机以 setSpeed() 的速度让机器人直线后退。

**<u>drive(char left, char right)</u>**

*描述*：通用驱动调用。直接调用 leftMotor 和 rightMotor。
*left*：介于 -128（左电机以最大速度的 100% 后退）、0（静止）和 127（左电机以最大速度的 100% 前进）之间
*right*：介于 -128（右电机以最大速度的 100% 后退）、0（静止）和 127（右电机以最大速度的 100% 前进）之间

**<u>stop()</u>**

*描述*：禁用电机。您也可以使用 drive(0,0)。

**<u>stopLeft()</u>**

*描述*：禁用左电机。您也可以使用 drive(0,X)。

**<u>stopRight()</u>**

*描述*：禁用右电机。您也可以使用 drive(X,0)。

**<u>fastStop()</u>**

*描述*：禁用右电机。您也可以使用 drive(X,0)。

**<u>fastStopLeft()</u>**

*描述*：更快地禁用左电机。这被认为可能对电机芯片有害，所以请谨慎使用

**<u>fastStopRight()</u>**

*描述*：更快地禁用右电机。这被认为可能对电机芯片有害，所以请谨慎使用

**<u>readS1(), readS2(), readS3(), readS4(), readS5()</u>**

*描述*：读取板载 5 个光传感器中的任何一个。注意：您需要使用拨码开关块将传感器连接到 arduino 端口（开关朝向数字和 ON 文本方向）。如果您不想使用光传感器，这些开关可以让您将这些引脚用于其他用途
*返回值*：如果表面反射（例如白色）则返回 LOW，如果表面不反射任何东西（例如黑色）则返回 HIGH

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/ShieldBot_driveLibrary.png)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Shield Bot 库文件](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Library.zip)

* [Shield Bot Eagle 文件](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Eagle_Files.zip)

* [ShieldBot 原理图](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/ShieldBotv0.9b_Schematic.pdf)

* [RPR-220 数据手册](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/RPR-220.pdf) 红外反射传感器

* [ISL97516 数据手册](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/ISL97516.pdf) 升压调节器

* [BQ2057 数据手册](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/BQ2057.pdf) 锂离子充电器

* [L298 数据手册](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/L298.pdf) H桥电机驱动器

* [358 数据手册](http://www.ti.com/product/lmv358) 运算放大器作为反射传感器的比较器

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