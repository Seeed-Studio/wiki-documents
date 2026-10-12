---
description: "Seeed 具身智能入门课程第二阶段：机械臂组装与基础控制第 4 章 — 机械臂与关节执行器的基础：理解上面表格相关参数是安全使用机械臂的基础："
title: 第 4 章 - 机械臂与关节执行器的基础
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_4
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_4/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 2 阶段 · 第 4 章 · 理论</span>
    <h2>4. 机械臂与关节执行器的基础</h2>
    <p>
      理解上面表格相关参数是安全使用机械臂的基础：
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

### 本阶段需要的硬件

本阶段需要准备的硬件如下。全部阶段的完整清单见 [第 3 章](/cn/rebot_physical_ai_course_chapter_3/)。

**主控单元**

| 硬件 | 购买 | 数量 |
| :--- | :---: | :---: |
| [Jetson Orin Nano Super 8G](https://detail.tmall.com/item.htm?abbucket=14&id=712054933688&mi_id=0000b4o7-mmwtJhlvCEhSP4viA7xIJPisw8IuibhHvzfMNs&rn=79312731d60820183c59a45a12571cae&skuId=6114111210073&spm=a1z10.5-b.w4011-22390330418.113.43ae1734XfPvdN) | 🛒 | 1 |
| [reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html) | 🛒 | 1 |
| [NVIDIA Jetson AGX Thor 128G](https://detail.tmall.com/item.htm?abbucket=14&id=957845742837&mi_id=0000pv-h8DvXhmbEW2jrasWWe-BhFP2E5HGxD4KpP2RKKpE&rn=79312731d60820183c59a45a12571cae&skuId=6281653119238&spm=a1z10.5-b.w4011-22390330418.169.43ae1734XfPvdN) | 🛒 | 1 |

另外还需要一台台式机或笔记本:Ubuntu 22.04、GTX 4080 以上(12G 显存以上)、16GB 以上内存。

**本阶段**

| 硬件 | 购买 | 数量 |
| :--- | :---: | :---: |
| [reBot Arm B601 DM/RS](https://detail.tmall.com/item.htm?abbucket=14&id=1042412233386&pisk=hfB-eJgryJp7dpE0kCCZSVvHso4GO9xBAMSEAU9WrvHdSNMoK34UpwLAfQqP-wfvJZ_vPTVy-v3dlMmkO9YhpLJedubwHPmyhH-INJYBNKN2IpvYSR2GDjMMkoI3zPDG0hK6d3TWPIZvjHmWdBTCcoKBx4TBPwsbDH8XVetBREsXqHcSRwO5cntpf3tBOUTXl3-Mde_BdoIXuHpBRw9QDi_myQZrrVRZdRLqSbSWkAIVHCgMWgLjdP622R86OGGp7T_cATXygfN9LifOJ6_UsjJRA_9Wjgy-Hds5iHzFKoGQT151j1D_OTU1eOCdg4MFLWfcFtAZPkXzI61P7swqa_WdAisVljZYIJfhiTdZ3PBfZ_JwUKesDz1vPsAhnW4zLlPW0_z8BPiDyhp2DFqJ2XleOn-vSoExTXRW0nLg2blETBtV.&rn=b08f608734893daceae119d7e15a5f39&skuId=6279331210830&spm=a1z10.5-b.w4011-22390330418.66.1f361734SN96R4) | 🛒 | 1 |


<a id="overview"></a>

## 机械臂与关节执行器的基础

## 机械臂安全范围与工作空间

理解上面表格相关参数是安全使用机械臂的基础：

- **臂展**定义了机械臂的安全疆界，不能越界。臂展范围规定了安全的工作空间，可以防止机械臂在运动中撞击到设备、围栏或人员。
- **额定负载**划定了安全、高效运行的基准线，不能长期超越。忽视额定负载是极其危险的。超过额定负载运行，会直接导致：电机力矩不足、电机过热与寿命缩短和突发机械故障。
- **最大负载**则标明了绝对不能触碰的物理红线，是一次性的强度极限。将最大负载当作日常使用标准是极其危险的。这意味着机械臂的每个部件都工作在结构强度的边缘，任何微小的冲击或姿态变化都可能导致灾难性的结构失效，如关节断裂、机械臂坍塌。

<table><colgroup><col/><col/><col/></colgroup><tbody><tr><td vertical-align="top">名称</td><td vertical-align="top">reBot Arm Dm</td><td vertical-align="top">reBot Arm Rs</td></tr><tr><td vertical-align="top">零位姿态</td><td vertical-align="top"><img name="img_v3_0213t_353ba040-8a7a-4a60-92f1-bfdce988552g.jpg" mime="image/jpeg" scale="1.000000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-14cn.jpg"/></td><td vertical-align="top"><img name="img_v3_0213t_994c7e4e-2f48-45cd-96ab-90f3ae16b13g.jpg" mime="image/jpeg" scale="1.000000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-15cn.jpg"/></td></tr><tr><td vertical-align="top">J1关节运动范围</td><td vertical-align="top">-150°－+150°</td><td vertical-align="top">-150°－+150°</td></tr><tr><td vertical-align="top">J2关节运动范围</td><td vertical-align="top">-220°－0°</td><td vertical-align="top">-220°－0°</td></tr><tr><td vertical-align="top">J3关节运动范围</td><td vertical-align="top">-220°－0°</td><td vertical-align="top">-220°－0°</td></tr><tr><td vertical-align="top">J4关节运动范围</td><td vertical-align="top">-90°－+90°</td><td vertical-align="top">-90°－+90°</td></tr><tr><td vertical-align="top">J5关节运动范围</td><td vertical-align="top">-90°－+90°</td><td vertical-align="top">-90°－+90°</td></tr><tr><td vertical-align="top">J6关节运动范围</td><td vertical-align="top">-180°－+180°</td><td vertical-align="top">-180°－+180°</td></tr><tr><td vertical-align="top">夹爪运动范围</td><td vertical-align="top">-325°－0°</td><td vertical-align="top">-345°－0°</td></tr></tbody></table>

机械臂的零位姿态是所有运动规划和位置计算的绝对基准。机械臂要移动到某个点，本质上就是计算每个关节需要从零位这个起点旋转多少角度。因此每个关节电机设置零点和机械臂初始的时候都应该保持这个姿态。

机械限位是由机械结构本身决定、无法改变的物理硬边界。它像一个物理挡块，从根源上限制了关节的旋转角度范围。防止机械臂因失控而过度旋转，导致自身结构损坏或撞击周边设备。机械臂的关节都是加了机械限位的，但还是需要注意机械臂不同关节的运动范围，防止关节电机因超过运动范围而导致长时间的堵转。

## 机械臂基本结构介绍

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-01cn.jpg" alt="" />
</div>

###### 中文讲解视频链接

<bookmark name="www.bilibili.com" href="https://www.bilibili.com/video/BV1kFMi6tEQR/?share_source=copy_web&amp;vd_source=96b4288dcfb678f16b78a8ec6b3b7297"></bookmark>

| 名称 | 位置 | 运动轴 | 作用 |
|-|-|-|-|
| Base | 1号电机固定的部分 | 绕基座垂直轴（Z轴）旋转 | 使机械臂整体水平旋转运动 |
|  Shoulder | 包含2号电机的突起部分 | 绕肩部水平轴（Y轴）旋转 | 使机械臂大臂相对于肩部的前后俯仰或上下抬升 |
| 大臂（上臂）Upper Arm | 连接肩关节和肘关节的部分 | 绕肘部水平轴（Y轴）旋转 | 使机械臂小臂相对于大臂的弯曲或伸展 |
| Elbow | 包含3号电机的部分，位于大臂与小臂的交界处 | 绕腕部水平轴（Y轴）旋转 | 使机械臂腕部上下摆动，与 Wrist Yaw 配合，共同决定机械臂末端在空间中的指向方向 |
| 小臂（前臂）Forearm | 连接肘关节和腕关节的部分 | 绕腕部垂直轴（Z轴）旋转 | 使机械臂腕部左右侧摆，与 Wrist Flex 配合，共同决定机械臂末端在空间中的指向方向 |
|  Wrist | 包含4号、5号和6号电机的部分，位于末端夹爪和小臂之间 | 绕腕部中心轴（X轴）旋转 | 使机械臂腕部末端绕自身中轴线的自转 |
|  Gripper | 包含7号电机的部分，安装于腕部上 | 平移开合 | 使机械臂可以夹取东西 |

## 关节执行器

关节执行器由 **驱动器 → 电机 → 减速器 → 轴承/输出法兰 → 机器人连杆组成，**同时有 **编码器/力矩传感器 → 控制器 → 驱动器** 构成闭环控制。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-02cn.jpg" alt="" />
</div>

## 减速器

电机输出的原始扭矩通常很小，但通过减速比i的齿轮，输出扭矩会被放大 i 倍。如果不加减速器，为了输出大扭矩，必须增加铁芯和磁钢，这样的话会把电机的体积做得非常大，导致成本、重量急剧飙升。而减速器是用高转速换大扭矩的最优物理杠杆。

电机转子本身很轻，而负载如果很重的情况下，电机加减速时可能会剧烈震荡。而减速器能将负载惯量折算到电机轴上的数值除以减速比的平方，会使电机的电流环更加稳定。这样系统控制更加稳定。

reBot 机械臂目前采用了两种不同的关节驱动技术方案：**达妙 DM 行星减速关节电机**和**灵足时代 RS QDD（准直驱）关节电机**。两者最核心的区别，并不只是电机品牌不同，而是**减速器的减速程度不同**。

简单来说：

> **DM方案：依靠较大的减速比“放大”电机输出扭矩。**  
> **RS方案：尽量降低减速比，让电机本身承担更多的输出扭矩。**

因此，两种方案在**输出扭矩、运动速度、反驱性能、力控制、机械阻抗、抗冲击能力以及结构重量**等方面都会产生明显差异。

## 行星减速器

DM 和 RS 电机用的减速器都是行星减速器。因此这里只介绍行星减速器的原理。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-03cn.jpg" alt="" />
</div>

行星减速器一般是齿圈固定，太阳轮输入，行星架输出。此时电机的传动比最大。假设传动比为 $i $ 。传动比  $i $只跟齿圈的齿数 $Z_r$和太阳轮的齿数 $Z_s$ 有关。传动比的表达式为：

$$i=1+\frac{Z_r}{Z_s}$$

太阳轮一转，会推动行星轮自转。但因为齿圈被固定住了，行星轮不能简单地绕着固定轴转，而是会带动行星架慢慢转。此时电机转子转 $i $ 圈，行星架大约转 1 圈。输出端行星架的速度减少了 $i $倍，但是输出扭矩增大了  $i $倍。因此行星减速器把电机的高速和小扭矩变成关节需要的低速和大扭矩。

## DM方案：行星减速关节电机

reBot DM版本使用达妙科技的行星减速关节电机，例如：

**DM4310：减速比约为 10:1**

**DM4340P：减速比约为 40:1**

**DM4340P 中的 P 版本采用交叉滚子轴承结构**，用于承受关节工作过程中产生的径向和轴向载荷。

其基本结构可以理解为：

**高速电机 → 行星减速器 → 关节输出轴**

电机本身转速较高，但输出扭矩有限。经过行星减速器之后，输出转速降低，而输出扭矩得到放大。

理想情况下，减速比为 (N:1) 时：

$$\omega_{out}=\frac{\omega_{motor}}{N}$$

$$T_{out}\approx T_{motor}\times N\times\eta$$

其中：N：减速比

$\omega_{motor}$：转速

T：扭矩

$\eta$：减速器传动效率

例如，在其他条件相同的情况下，40:1 的减速器相比 10:1 的减速器，可以提供更大的扭矩放大能力，但同时输出转速也会进一步降低。

因此，DM方案的核心思路可以概括为：

> **“电机负责高速旋转，减速器负责放大扭矩。”**

- **DM方案的主要优点**

  - **① 输出扭矩大**

较高的减速比可以显著放大电机输出扭矩，因此使用相对较小的电机也可以获得较大的关节输出扭矩。

这对于机械臂尤其有利，因为机械臂在肩部、肘部等位置需要克服较大的重力矩。

- **② 电机负载相对较低**

由于减速器承担了较大的扭矩放大任务，因此电机不需要直接产生全部关节输出扭矩。

这使得电机可以工作在更适合自身的高速区域。

- **③ 适合需要较大静态负载能力的关节**

对于需要长时间保持姿态、承受较大负载的机械臂关节，高减速比能够提供较大的输出扭矩和一定的机械自锁/保持能力。

因此，这种方案比较适合：

- 大负载机械臂
- 需要较大关节扭矩的场景
- 对关节绝对输出速度要求不是特别高的场景

- DM方案的主要缺点

  - **① 反驱性能较差**

减速器级数和减速比增加以后，齿轮啮合产生的摩擦、间隙以及机械阻尼都会更加明显。

当外力推动机械臂时，外部力需要经过减速器传递到电机，因此：

> **减速比越大，机械臂通常越“不容易被推着走”。**

这会降低关节的力透明度和反驱性能。

- **② 机械阻抗较高**

高减速比意味着电机侧的运动经过较大的传动比之后才传递到关节输出端。

因此，关节表现得更加“硬”。

这对于保持位置是优点，但对于：人机协作，柔顺控制，接触操作，被动示教，精细力控制则可能成为限制。

- **③ 输出速度受到限制**

减速比越大，输出转速越低。

例如，假设电机转速为 4000 rpm：

$$10:1\Rightarrow400\ rpm$$

而：

$$40:1\Rightarrow100\ rpm$$

因此，40:1 的关节虽然具有更强的扭矩放大能力，但关节运动速度会明显下降。

---

## RS方案：QDD准直驱关节电机

reBot RS版本采用灵足时代的 **QDD（Quasi-Direct Drive，准直驱）关节电机**。QDD的核心思想与传统高减速比关节恰好相反：

> **尽量降低减速比，让电机直接承担更多的关节输出任务。**

其基本结构可以理解为：**高转矩密度电机 → 低减速比行星减速器 → 关节输出轴。**因此，QDD并不是完全没有减速器，而是：

> **“减速器只提供少量扭矩放大，主要依靠电机自身的高转矩密度来获得关节输出扭矩。”**

**为什么QDD需要更强的电机？**这是理解两种方案差异的关键。假设两个关节最终都需要输出：

$$T_{out}=40N\cdot m$$

如果使用40:1减速器，那么理论上电机只需要提供：

$$T_{motor}\approx\frac{40}{40}=1N\cdot m$$

如果使用8:1减速器，则需要：

$$T_{motor}\approx\frac{40}{8}=5N\cdot m$$

也就是说：**减速比降低以后，电机必须自己提供更多扭矩。**因此，QDD方案对电机提出了更高要求，需要电机具有：

- 更高的转矩密度
- 更大的有效直径
- 更强的散热能力
- 更高的峰值电流承受能力
- 更好的过载能力

这也是为什么QDD通常会采用高转矩密度的外转子电机等方案。相关综述也指出，QDD通过降低减速比获得更好的反驱和力透明度，但代价是对电机转矩密度提出更高要求。

QDD最大的价值并不是简单的“减速比更小”，而是：**让关节更接近电机本身的动态特性。**由于减速比低，减速器对系统运动的影响相对较小，因此关节具有更好的反驱性能

## 两种方案的核心区别

可以把两种方案理解成两种完全不同的设计哲学。

<sheet sheet-id="p3U167" token="PbFfsou5GhxpKGtKMSico5LYnqg"></sheet>

QDD低减速比带来的高力透明度、强反驱性能和较低机械阻抗，是其相对于高减速比传动方案的核心优势；与此同时，低减速比也意味着电机需要承担更大的扭矩，因此对电机的转矩密度和热管理提出更高要求。

因此，可以用一句话概括两种方案：**DM行星减速方案，是“用机械减速器换取更大的输出扭矩”；QDD准直驱方案，则是“用更高性能的电机换取更好的动态性能和力控制能力”。**两者并不存在绝对意义上的“谁更先进”。对于机械臂而言，真正的选择取决于应用目标：

**如果更看重负载能力、关节刚性和大扭矩输出 → DM方案更有优势。**

**如果更看重运动速度、反驱性能、人机协作和力控 → QDD方案更有优势。**

而对于面向人机交互、模仿学习和强化学习的机器人机械臂，QDD的低机械阻抗和高反驱性能尤其具有吸引力，因为机械臂的动力学特性更加接近“电机直接驱动负载”的状态，有利于进行高动态运动和力交互控制。

## 编码器

编码器（encoder） 用于测量旋转角度，常见类型包括增量编码器、多圈绝对位置编码器、单圈绝对位置编码器。达妙（DM）电机和灵足（RS）电机都包含2个单圈绝对位置磁编码器。编码器分辨率都是14位。

- **绝对位置磁编码器是怎么定位的**

绝对位置磁编码器利用磁钢旋转改变磁场方向，通过磁阻芯片计算角度，上电直接知道当前位置。

**打比方：**

磁编码器想象成一个自带“地图”的智能指南针。

磁钢是一块旋转的小磁铁。磁钢固定在电机转子上。它一旋转，周围的磁场方向就跟着变。就像指南针的指针永远指向南，但这个指针可以转圈。

磁阻芯片：就是那个“地图传感器”。它周围有360°的方向刻度，它能像读指南针一样，实时读出当前磁场指向的是0°、90°还是270°。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-04cn.jpg" alt="" />
</div>

- 关节电机用两个编码器的原因

关节电机包含2个绝对位置磁编码器，一个测高速电机转子，一个测机器人关节输出轴，用来补偿减速器误差、提高精度和安全。

**打比方：**

你坐在车里，手里握着方向盘（电机转子端），但方向盘不是直接连着车轮，而是通过一根很长的、有弹性的弹簧软轴（减速器）连着车轮（电机输出端）。

如果方向盘转了10圈，车轮只转了9.8圈，系统立刻就知道那0.2圈被弹簧软轴吞掉了，马上多补一点——这就补偿了误差，精度极高。

- 断电不丢位置

电机断电不丢位置是靠绝对编码器保存当前位置，重新上电读取电机侧和输出侧角度，再通过减速比校验恢复位置。

## 电机接口和线序

## DM电机接口和线序

<table><colgroup><col/><col/><col/></colgroup><tbody><tr><td vertical-align="top">名称</td><td vertical-align="top">图片</td><td vertical-align="top">作用</td></tr><tr><td vertical-align="top">XT30(2+2)</td><td vertical-align="top"><img name="image.png" mime="image/png" scale="1.000000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-16cn.jpg"/></td><td vertical-align="top">1、通过XT30(2+2)-F 插头的电源连 接线连接电源，额定电压为24V， 为电机供电。  电源接口-2 <br/> 2、通过CAN通信端子连接外部控 制设备，可接收CAN控制命令，反 馈电机状态信息。<br/>  3、电机包含两个电源接口，任一接 （含CAN通信端子）  口可单独连接使用，也可多机串联 使用，方便走线。</td></tr><tr><td vertical-align="top">gh1.25 3pin</td><td vertical-align="top"><img name="image.png" mime="image/png" scale="0.741935" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-17cn.jpg"/></td><td vertical-align="top">通过 GH1.25 连接线-3pin，使用 USB2CAN 调试工具连接到PC， 通过达妙科技调试助手对电机进行参数设置，以及固件升级等</td></tr></tbody></table>

## RS电机接口和线序

<table><colgroup><col/><col/><col/></colgroup><tbody><tr><td vertical-align="top">名称</td><td vertical-align="top">图片</td><td vertical-align="top">作用</td></tr><tr><td vertical-align="top">XT30(2+2)</td><td vertical-align="top"><img name="image.png" mime="image/png" scale="1.000000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-18cn.jpg"/></td><td vertical-align="top">1、通过XT30(2+2)-F 插头的电源连 接线连接电源，额定电压为24V， 为电机供电。  电源接口-2 <br/> 2、通过CAN通信端子连接外部控 制设备，可接收CAN控制命令，反 馈电机状态信息。<br/>  3、电机包含两个电源接口，任一接 （含CAN通信端子）  口可单独连接使用，也可多机串联 使用，方便走线。</td></tr></tbody></table>

## DM电机的运控模式

电调将接收到的CAN数据转化成控制变量进行运算得到扭矩值作为电流环的电流给定，电流环根据其调节规律最终达到给定的扭矩电流。

## MIT协议

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-05cn.jpg" alt="" />
</div>

MIT模式可以通过 **位置、速度和力矩** 三种参数控制电机。

电机最终输出的力矩主要由下面几个参数共同决定：

- **Pdes**：目标位置
- **Vdes**：目标速度
- **Kp**：位置控制强度，Kp越大，电机越倾向于快速回到目标位置
- **Kd**：速度控制强度，可用于抑制电机振动，使运动更加稳定
- **T_ff**：直接给定的力矩

可以简单理解为：

**电机输出 = 位置控制 + 速度控制 + 前馈力矩**

MIT模式可以根据不同参数组合实现不同的控制方式：

**位置控制**

1. 设置 Pdes、Kp、Kd。
2. 电机会运动到指定位置，并通过 Kd 抑制运动过程中的振动。

**速度控制**

1. 设置 Kp = 0，Kd ≠ 0
2. 然后给定 Vdes，即可控制电机按照目标速度转动。

**力矩控制**

1. 设置 Kp = 0，Kd = 0

然后直接设置 T_ff，即可控制电机输出指定力矩。

<callout emoji="🚧">
注意：对位置进行控制时，kd不能赋0，否则会造成电机震荡，甚至失控。
</callout>

## 位置速度模式

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-06cn.jpg" alt="" />
</div>

位置串级模式是采用三环串联控制的模式，位置环作为最外环，其输出作为速度环的给定，而速度环的输出作为内环电流环的给定，用以控制实际的电流输出。

电机最终输出的力矩主要由下面几个参数共同决定：

- **p_des：** 为控制的目标位置。
- **v_des：** 用来限定运动过程中的最大绝对速度值。
- **kp_pos：**决定位置误差对速度指令的放大倍数。
- **ki_pos：**决定静态位置保持力。
- **kp_vel：**直接决定动态加速力矩。
- **ki_vel：**决定匀速段抗负载扰动能力。

位置串级模式如使用调试助手推荐的控制参数控制，可以达到较好的控制精度，控制过程相对柔顺，但响应时间相对较长。可配置的相关参数除 v_des 外，另有加/减速度进行设 定，如控制过程中产生额外的震荡可提高加/减速度。

<callout emoji="🚧">
注意：p_des，v_des 单位分别为rad和rad/s，数据类型为float，阻尼因子必须设置为非 0 的正数，可参考速度模式的注意事项
</callout>

## 速度模式

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-07cn.jpg" alt="" />
</div>

速度模式外环是速度环，速度环的输出作为内环电流环的给定。

电机最终输出的力矩主要由下面几个参数共同决定：

- **v_des：**运动过程中的目标速度。
- **kp_vel：**直接决定动态加速力矩。
- **ki_vel：**决定匀速段抗负载扰动能力。

v_des单位为rad/s，数据类型为float，如需使用调试助手自动计算参数，则需要设置阻尼因子为非0正数，通常情况下取值在2.0\－10.0，过小的阻尼因子会带来速度的震荡以及较大的过冲，过大的阻尼因子则会带来较长的上升时间，推荐的设定值为4.0。

## PVT模式（力位混控）

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-08cn.jpg" alt="" />
</div>

PVT（力位混控）模式为在位置速度模式控制的基础上动态控制输出扭矩的大小。在速度环的输出指令后增加了电流指令饱和环节，使得电流环的给定限定在给定范围内。

电机最终输出的力矩主要由下面几个参数共同决定：

- **p_des：** 为控制的目标位置。
- **v_des：** 用来限定运动过程中的最大绝对速度值。
- **kp_pos：**决定位置误差对速度指令的放大倍数。
- **ki_pos：**决定静态位置保持力。
- **kp_vel：**直接决定动态加速力矩。
- **ki_vel：**决定匀速段抗负载扰动能力。

## RS 电机的不同模式

## 运控模式

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-09cn.jpg" alt="" />
</div>

RS的运控模式跟DM的MIT模式是差不多的。运控模式的控制逻辑如下：

 t_ref=Kd\*(v_des - v_actual)+Kp\*(p_des - p_actual)+t_ff 

最后tref 通过内部的公式折算为期望 iq 电流，通过电流环输出。

电机最终输出的力矩主要由下面几个参数共同决定：

- **Pdes**：目标位置
- **Vdes**：目标速度
- **Kp**：位置控制强度，Kp越大，电机越倾向于快速回到目标位置
- **Kd**：速度控制强度，可用于抑制电机振动，使运动更加稳定
- **T_ff**：直接给定的力矩

可以简单理解为：

**电机输出 = 位置控制 + 速度控制 + 前馈力矩**

MIT模式可以根据不同参数组合实现不同的控制方式：

**位置控制**

1. 设置 Pdes、Kp、Kd。
2. 电机会运动到指定位置，并通过 Kd 抑制运动过程中的振动。

**速度控制**

1. 设置 Kp = 0，Kd ≠ 0
2. 然后给定 Vdes，即可控制电机按照目标速度转动。

**力矩控制**

1. 设置 Kp = 0，Kd = 0

然后直接设置 T_ff，即可控制电机输出指定力矩。

## 电流模式

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-10cn.jpg" alt="" />
</div>

这个是将电机的电流环作为控制接口给到用户，这个模式一般不会用到。这个接口的用法可以参考 FOC 算法。

## 速度模式

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-11cn.jpg" alt="" />
</div>

速度模式是将设定速度和当前速度的差作为pi控制器的输入，pi控制器的输出力矩会被限制到一个区间。力矩通过内部的公式折算为期望 iq 电流，通过电流环输出。

电机最终输出的力矩主要由下面几个参数共同决定：

- **v_des：**运动过程中的目标速度，也就是当前速度。
- **kp_vel：**直接决定动态加速力矩。
- **ki_vel：**决定匀速段抗负载扰动能力。
- **力矩保护**：限制输出力矩。

## **位置速度模式 （CSP）**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-12cn.jpg" alt="" />
</div>

位置模式CSP也可以称为位置速度模式。设定角度和当前角度的差作为位置环的输入，其中位置环是纯比例控制器，位置环输出经过速度限制后作为速度环的输入。速度环是pi控制器，输出的力矩经过力矩保护限幅后折算成期望iq电流，通过电流环输出。

电机最终输出的力矩主要由下面几个参数共同决定：

- **p_des：** 为控制的目标位置。
- **v_des：** 用来限定运动过程中的最大绝对速度值。
- **kp_pos：**决定位置误差对速度指令的放大倍数。
- **ki_pos：**决定静态位置保持力。
- **kp_vel：**直接决定动态加速力矩。
- **ki_vel：**决定匀速段抗负载扰动能力。
- **力矩保护** ：对期望输出力矩进行限幅

## **位置速度模式 （PP)**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-4cn/ch04-13cn.jpg" alt="" />
</div>

该模式也是 motorbridge 给出的位置速度模式接口。

位置模式PP比CSP多了一个梯形速度曲线规划，输入设定速度、设定角度和设定加速度，输出规划角度。t曲线规划输出的规划角度作为位置环的输入，其中位置环是纯比例控制器，位置环输出经过速度限制后作为速度环的输入。速度环是pi控制器，输出的力矩经过力矩保护限幅后折算成期望iq电流，通过电流环输出。

电机最终输出的力矩主要由下面几个参数共同决定：

t曲线规划器参数：

- **p_set：**设定的期望目标位置。
- **v_des：** 设定的期望速度值。
- **Acc_set**：设定的期望加速度

位置环/速度环参数：

- **p_des：** 为控制的目标位置。
- **v_des：** 用来限定运动过程中的最大绝对速度值。
- **kp_pos：**决定位置误差对速度指令的放大倍数。
- **ki_pos：**决定静态位置保持力。
- **kp_vel：**直接决定动态加速力矩。
- **ki_vel：**决定匀速段抗负载扰动能力。
- **力矩保护** ：对期望输出力矩进行限幅

## 急停和异常断电原则

（1）异常抖动必须立即断电。因为高频抖动意味着电机正在输出高频正反力矩，如果不立即切断动力，可能会导致电机的损坏。

（2）撞击限位必须立即断电。因为撞击限位意味着电机可能正在堵转。如果不立即切断动力，可能会导致电机的过热或者损坏。

（3）机械臂突发摔落等异常情况必须立即断电，防止出现别的意外情况。

---

</div>
