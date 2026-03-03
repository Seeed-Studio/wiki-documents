---
description: 本Wiki提供StackForce小轮足的组装和启动教程，以及相应的开发所需的学习文档和链接。
title: StackForce小轮足教程
keywords:
- StackForce
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/mini_wheeled_legged_robot.webp
slug: /cn/stackforce_mini_wheeled_legged_robot
last_update:
  date: 12/2/2025
  author: LiShanghang
---

# 基于 StackForce 开发平台的双轮足机器人入门教程

:::tip
本教程只提供组装和调试教程，让开发者以最快速度搭建好完整的轮足机器人，若开发者需要学习轮足机器人相关原理，可以跳转到 [**b站灯哥开源的教程视频**](https://www.bilibili.com/video/BV1kz421B73V/?share_source=copy_web&vd_source=dd1f489993457f044ad480eab0e73bdc) 学习，若需要二次开发可以在其他网站或论坛查找教程。
:::

## 简介

StackForce双足轮机器人基于StackForce轻量级机器人开发平台开发得到，它的核心硬件驱动由StackForce系列的主控板、电机驱动板和舵机驱动板组成。

机器人程序附带全身运动学模型和状态自适应自稳算法，基于StackForce平台强大的实时运算能力，可以实现多姿态控制，复杂地形自稳定，下楼梯，自稳通过各种复杂坡面地形等。平台支持航模遥控器蓝牙,串口,无线等多种控制方式，用户可以根据需求自行编程调整。该产品配套了完善的安装教程和视频讲解课程，是一款极具性价比的桌面级双足轮机器人。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/mini_wheeled_legged_robot.webp" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/LeKiwi-Full-Kit-12V-Verision.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 相关链接

b站灯哥开源的教程视频：https://www.bilibili.com/video/BV1kz421B73V/?share_source=copy_web&vd_source=dd1f489993457f044ad480eab0e73bdc

轮足机器人课程代码开源地址：https://gitee.com/StackForce/bipedal_wheeled_robot

StackForce轻量级机器人开发平台文档：http://stackforce.cc/#/

StackForce轻量级机器人开发平台配套机器人项目开源：https://gitee.com/StackForce

## 主要特点

1. **开源且低成本**： 遵循开源许可协议；源码和设计文件完全开放，开发者可以自由学习、修改和进行二次开发。
2. **高性能电机控制**：搭载 FOC（磁场定向控制）技术，支持开环/闭环速度、位置和扭矩控制，实现精确的运动控制。
3. **强大的硬件支持**：采用 ESP32 主控，提供 I2C、SPI、PWM 等丰富接口，便于灵活扩展功能。
4. **丰富的功能能力**：支持自平衡、高速运动、姿态稳定以及无线控制，适应多种复杂地形。
5. **易于学习与使用**：配备完整的示例代码和视频教程，大大降低初学者的学习门槛。

## 规格

| 类型    | 规格                                     |
| ----- | -------------------------------------- |
| 主控板   | StackForce 主控板                         |
| 电机驱动板 | 5A 双通道无刷电机驱动器 (低功耗)                    |
| 电机    | 2208 云台无刷电机                            |
| 舵机驱动板 | 集成 IMU 的多通道舵机驱动器                       |
| 电源    | 12.6V 锂聚合物电池                           |
| 编码器   | MT6701 14 位高精度磁编码器                     |
| 无线控制  | WiFi 遥控 + PS4 蓝牙无线手柄                   |
| 总重量   | 540 克                                  |
| 尺寸    | 10.5 × 21.0 厘米 (长 × 宽)，高度 12.0–21.0 厘米 |

## 物料清单 (BOM)

[BOM下载](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/StackForce_wheeled_legged_robot_BOM.xlsx)

| 商品名称 | 数量 | 单位 | 规格 | 型号 |
|----------|------|------|------|-----------|
| | | | | |
| **电子配件** | | | | |
| StackForce主控板 | 1 | 块 | StackForce | |
| StackForce 5A小功率驱动板 | 1 | 块 | StackForce | |
| StackForce 舵机板 | 1 | 块 | StackForce | |
| 磁编码器 | 2 | 块 | StackForce | MT6701 |
| 电机 | 2 | 个 | | 2208 |
| 舵机 | 4 | 个 | | DS041MG |
| 遥控器 | 1 | 个 | | MC6C-MINI |
| 接收器 | 1 | 个 | | MC7RBv2 |
| 电池 | 1 | 个 | 厚19×宽34×长42 | 12V聚合物电池 |
| 端头 | 2 | 个 | | MR30-U型 |
| 编码器线 | 2 | 组 | | SH1.0-5P |
| 杜邦线 | 1 | 组 | | 3P（母对母） |
| | | | | |
| **材料配件** | | | | |
| 防松螺母 | 4 | 颗 | M3 | GB889.1-86 |
| 螺母 | 4 | 颗 | M3 | DIN934 |
| 尼龙柱 | 4 | 根 | 5×3.2×9 | ABS |
| 垫片 | 4 | 片 | M3 | 304国标 |
| 磁铁 | 2 | 颗 | 6×2.5 | 径向磁铁 |
| 圆头螺丝 | 24 | 颗 | M2×4 | GB/T845 |
| 圆头螺丝 | 12 | 颗 | M2×10 | GB/T845 |
| 圆头螺丝 | 4 | 颗 | M3×6 | GB/T845 |
| 圆头螺丝 | 4 | 颗 | M3×8 | GB/T845 |
| 圆头螺丝 | 4 | 颗 | M3×16 | GB/T845 |
| 圆头螺丝 | 2 | 颗 | M4×18 | GB/T845 |
| 自攻螺丝 | 16 | 颗 | M2×6 | GB/T845 |
| 平头螺丝 | 46 | 颗 | M2×6 | 304国标 |
| 平头螺丝 | 16 | 颗 | M3×6 | 304国标 |
| 螺柱 | 4 | 颗 | M3×7+4 | 铜国标/GB |
| 轴承 | 4 | 块 | 外27×内20×厚4 | 6704ZZ |
| 轴承 | 6 | 块 | 外18×内12×厚4 | 6701ZZ |
| | | | | |
| **结构件** | | | | |
| 3D打印件 | 29 | 件 | | |
| 1比10耐磨6030-6085轮胎 | 2 | 个 | | |

## 目录

- [整机款教程](https://wiki.seeedstudio.com/cn/stackforce_mini_wheeled_legged_robot/#整机款教程)
- [散件教程-1 安装](https://wiki.seeedstudio.com/cn/stackforce_mini_wheeled_legged_robot/#散件教程1-安装)
- [散件教程-2 校准](https://wiki.seeedstudio.com/cn/stackforce_mini_wheeled_legged_robot/#散件教程2-校准)

## 整机款教程

[StackForce轮足机器人基本操作说明.pdf](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Wheeled_Legged_Robot_Operation_Manual.pdf)

直接按照pdf文档的顺序启动机器人即可遥控。

## 散件教程1-安装

[双足轮安装教程文档下载](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Installation_document.pdf)

<div class="video-container">
<iframe width="900" height="500" src="//player.bilibili.com/player.html?isOutside=true&aid=1355811020&bvid=BV1kz421B73V&cid=1596569994&p=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::tip
安装步骤较多，请按照文档教程完成每一步安装，该产品有部分孔洞可以用自攻螺丝，若包装自带的螺丝与教程有出入为正常现象，并不会影响产品组装，开发者用替代螺丝装配即可。
:::

:::caution
在组装过程中，请注意螺丝的松紧程度，不要太用力拧螺丝，以防滑牙等情况出现。
:::

## 散件教程2-校准

请先下载[校准所需烧录的代码文件](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Calibration_code.7z)

### 环境配置

第一步：下载 [Visual Studio Code](https://code.visualstudio.com/download)

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/1_1.png" />
</div>

第二步：打开 Visual Studio Code，在其扩展商店中搜索并下载 **PlatformIO IDE**

点击下载后他会下载其他需要使用的拓展，有时会缺少MinGW，无法新建文件夹，我们需要下载一个MinGW-w64。

<details>

<summary> 第三步：下载 MinGW-w64 </summary>

[轮足工具合集下载链接](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Tool_Collection.zip)（内含MinGW-w64）

文件下载后解压，找到轮足工具合集里的mingw64，解压后安装的路径需要全英文，不能有中文，打开解压后的文件→打开 bin 文件→复制 bin 文件的地址（例：D:\ming\mingw64\bin）。

配置环境：电脑搜索打开`查看高级系统设置`→`环境变量`→`系统变量`→`Path`→`新建`→`粘贴上一步的 bin 文件的地址`，点击确定。

- 1：电脑搜索打开`查看高级系统设置`。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_1.png" />
</div>
- 2: 点击`环境变量`。
<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_2.png" />
</div>
- 3：双击打开 `Path`，注意是要选择`系统变量`。
<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_3.png" />
</div>
- 4：`新建`环境变量。
<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_4.png" />
</div>

</details>

第四步：编译及烧录按键说明

(**√**：编译程序 →：烧录程序到硬件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Auto**：选择串口)

:::tip
下面是烧录按键说明，先不烧录程序。开发者先在这里了解烧录流程。
:::

电脑与硬件连接、点击 Auto（可忽略），会自动检测并推荐串口。选择串口后点击编译（可忽略）、烧录，即可将程序烧录至硬件。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/4_1.png" />
</div>

### S1烧录和调试

#### 连接S1芯片

连接USB，USB有缝隙一边朝上，无缝一边朝下,松开白色按键，切换至S1芯片（黄灯亮）。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/烧录1.png" />
</div>

:::tip
**备注：为什么要分上下**

因为板子有两个芯片，S1芯片负责电机程序的运行，S3负责舵机控制程序的运行,typec线有上下个两排排针分别通信，主控板设计两个芯片分别占用typec的一排用来烧录程序，通过白色按键来在硬件上控制电脑要把程序烧录到哪个芯片。
:::

#### 烧录S1程序

方法一：根据提前烧录好的S1电机控制程序，直接跳到下方“Vofa串口助手下载与使用教程”。

<details>
<summary> 方法二：按照下方操作，重新烧录一遍S1电机控制程序（不推荐） </summary>

**在vscode打开工程BLDC_Control**

这样操作可以让platformio自动安装库，所以不能直接将项目文件拖进vscode 打开新的vscode软件，打开文件夹（或者是在文件打开文件夹）。

<div align="center">
    <img width={650}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/1.png" />
</div>

找到S1程序保存的位置，点击选择文件夹（不能有中文路径，且一定要打开到当前位置）。

<div align="center">
    <img width={650}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/2.png" />
</div>

烧录前需要修改注册码与芯片的通讯方式：

修改注册码：

每个板子的注册码都是不一样的，您的注册码我们将他贴在了主控包上的标签纸，将其输入到这个位置。
也可以查看S1的串口信息获取注册码，前面安装文档有说明。

<div align="center">
    <img width={650}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3.png" />
</div>

<div align="center">
    <img width={650}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/4.png" />
</div>

修改通信方式，在图中位置修改为**ONBOARD**（USB为主控板的S1芯片与电脑之间进行串口通信，ONBOARD为S1芯片与S3芯片之间通信）。
<div align="center">
    <img width={650}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/5.png" />
</div>
修改完成后点击左下角向右的箭头即可烧录程序。

:::tip
**烧录过程可能会遇到的问题及解决办法**

1、成功烧录效果
<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_1.png" />
</div>

2、这个主控芯片是S3，与S1程序不匹配
<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_2.png" />
</div>

解决方法：检查USB是否插反，要求无缝朝上；检查主控白色按键是否有松开，松开时按键旁边亮黄灯，主控处于S1芯片烧录状态。

3、串口被占用了
<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_3.png" />
</div>
解决方法：检查有没有其他软件占用了串口，检查vofa的串口监视器是否关闭，检查其他串口助手是否关闭串口。

:::

</details>

**Vofa串口助手下载与使用教程**

接着，打开串口助手，波特率为115200，查看串口信息。Vofa串口助手下载网址：[下载中心| VOFA-Plus上位机](https://www.vofa.plus/)

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/vofa.png" />
</div>

**S1电机控制程序调试，极对数校准**

用手扶着机器人，轮子离开地面，按一下**S1复位键**，此时vofa上显示有极对数信息，等待轮子自检转动完成，如极对数被辨别后是7，则表示校准成功，则如下图所示。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/极对数校准.png" />
</div>

:::tip
若极对数为inf或其它英文字符串，则请检查是否打开了电源，检查线路是否接错，检查磁铁是否安装。如果极对数为6或者8或者是非7数值，可能是车轮安装过紧，（可查看轮足安装文档搜索“电机轴承安装”，重新安装这个位置），或者是轮子与地面有摩擦（每次上电或S1复位都要让机器人离地或者轮子不要碰到其他地方，自检才能正常运行）可重新调试再S1复位直到极对数显示为7为止。
:::

### S3偏置值获取

烧录完S1后，切换至S3芯片，并烧录S3程序（USB无缝隙朝下，按下图所示按钮，灯为绿色则切换至S3）

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/切换.png" />
</div>

:::caution
在烧录程序前一定要将大腿拆下，参考下图。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/拆大腿.png" />
</div>
:::

- 1.在vsoce打开**bipedal_calibrate文件夹（偏置值获取程序）**，直接烧录程序，打开vofa，波特率设置115200，可以看到串口信息为0,0,0,0;分别代表1,2,3,4号舵机的偏置值

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_1.png" />
</div>

- 2.电池上电，等待舵机完成转动后安装腿部尽量垂直于水平面。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_2.png" />
</div>

- 3.在串口输入 `1,2,3,4` 等指令控制舵机转动直到腿部完全垂直水平面。方向解释：腿部面向自己，顺时针为负，逆时针为正。

比如：看上图1号舵机左偏了一点，2号舵机右偏移了一点，输入 `5,-6,0,0` 控制1，2号舵机完全垂直与机身（5表示让1号舵机逆时针转5个单位角度，-6表示让2号舵机顺时针转6个单位角度）。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_3.png" />
</div>

其他两个舵机也是和上方一样的方法调节，`0,0,x,0` 控制3号舵机；`0,0,0,x` 控制4号舵机。调节完偏置值后将舵机盒子里的黑色螺丝拧紧大腿。

:::tip
*记录下当前的偏置值，要写到下面的S3芯片的舵机控制程序。*
:::

### S3校准和调试

[StackForce轮足机器人基本操作说明.pdf](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Wheeled_Legged_Robot_Operation_Manual.pdf)

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/遥控器.png" />
</div>

#### 1. 修改偏置值

在vscode打开`bipedal文件夹（舵机控制程序）`，在bipedal_data.h文件下修改偏置值OFFSET，具体看如下，将上面程序获取到的偏置值输入到下面对应位置。

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/4_01.png" />
</div>

#### 2. 舵机调试

- 烧录完程序后拔开usb，然后长按5打开遥控器遥控器A左上打中，B左下打下，C右上打下。
- 用手扶着机器人，并且让机器人保持水平陀螺仪校准和电机校准，按下按钮机器人上电。
- 等待10秒左右自检完成后A打中舵机使能，等待舵机转回初始位置，C打中取消舵机校准，滑动B控制腿高移动轮子y坐标，滑动D控制轮子前后移动轮子x坐标。
- 轮足移动说明，遥控器D向前拨动，舵机转动使轮子x坐标后移动，轮足前倾并向前移动。

#### 3. 设置SpdDir

设置电机固定转动方向，在main文件下搜索motors.setTargets，设置电机0和电机1的力矩固定为2。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir01.png" />
</div>

看下图使用vofa打印出电机速度，vofa波特率921600，连接S3

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir02.png" />
</div>

烧录程序到S3，然后打开vofa设置波特率为921600，遥控器A打上电机使能，上电并用手扶着让电机自检完成（可以先用vofa与S1通信看看是否自检通过）。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir03.png" />
</div>

观察电机转动方向，左电机向前转则速度为正，如果vofa上打印的第三个数据M1速度为负，则需要将motorStatus.M1SpdDir取反，打印为正则不需要修改。

右电机向后转则速度为负，如果vofa上打印的第二个数据M0速度为负，则不需要修改motorStatus.M0SpdDir，打印为正则需要取反。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir04.png" />
</div>

:::tip
如果上面还是不理解，可以看一下下面这里

假如轮子向前转，vofa打印为负数，那么反馈dir要取反

假如轮子向前转，vofa打印为正数，那么反馈dir不用改

假如轮子向后转，vofa打印正数，，那么反馈dir要取反

假如轮子向后转，vofa打印时负数，那么反馈dir不用取反
:::

#### 4. 设置电机控制dir，搜索motors.setTargets

按照下图取消电机控制的注释，注释下一行，烧录程序。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置电机控制dir01.png" />
</div>

给轮足上电，复位完后手持轮足机器人向前倾斜，观察轮子转动方向如果全部向前转动则可以平衡，如果左边向后则需要将M1Dir取反，右轮同理。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置电机控制dir02.png" />
</div>

完成上述部分后就可以对机器人控制了，按照下述部分是是实现控制，可以查看[StackForce轮足机器人基本操作说明.pdf](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Wheeled_Legged_Robot_Operation_Manual.pdf)。

遥控器正面四个遥杆：

- 第一步，遥控器左上打到中档，右上打到下档，左下打到最下，机器人用手扶着，让腿部自然下垂，轮子离开不与其他接触，并且保持机器人与地面平行。

  开机，保持上述大约10秒后，机器人放到宽广地上，手扶着保持机器人直立。

- 第二步，遥控器右上打到中档，左下稍微上滑，左上打到上档，机器人就开始自平衡运动。

  遥控器右下遥感缓慢前后滑动，控制机器人前后运动，左右滑动控制左右转。

  遥控器左下摇杆上下变腿高。

  遥控器右上打到最上后，左下摇杆左右滑动控制机器人横滚运动，通过断电取消横滚。

## 实际演示

（待添加实际演示视频）

## 参考文档

[English Document](https://wiki.seeedstudio.com/stackforce_mini_wheeled_legged_robot)

[gitee](https://gitee.com/StackForce/bipedal_wheeled_robot)

[StackForce轮足机器人基本操作说明.pdf](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Wheeled_Legged_Robot_Operation_Manual.pdf)

[双足轮安装教程文档下载](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Installation_document.pdf)

[全套控制板原理图](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Schematic_diagram.7z)

[开发套件例程资料](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Sample_Code_Documentation.7z)

[客户获取注册码.7z](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Registration_code.7z)

[urdf和stl](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/SF_bipedalWheel.zip)

[BOM下载](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/StackForce_wheeled_legged_robot_BOM.xlsx)

[轮足工具合集.zip](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Tool_Collection.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供多种支持，以确保您的产品体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
