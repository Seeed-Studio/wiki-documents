---
title: DSO Quad 手册（社区版）
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/DSO_Quad_Manual_by_the_community/
slug: /cn/DSO_Quad_Manual_by_the_community
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/P10308912-1024x684.jpg)

DSO Quad 是一款便携式示波器。它在小巧的外壳中集成了许多出色的功能：

* 2 个模拟输入，采样率为 72 MS/s（使用 [x1 探头](#definitions) 时为 10[Vpp](#definitions)，升级后可达到 80[Vpp](#definitions)）。

* 2 个数字输入（最大 3.3V，设计的二极管允许更高电压，但需要升级）。数字探头未包含。

* 信号发生器输出，10 Hz-20kHz 模拟或 10 Hz-100kHz 数字（升级后可实现 8 MHz 数字输出）。

* 自动、正常、单次、扫描和自由运行触发模式。

如果这是您第一次使用 DSO Quad，请阅读 [入门指南](#getting-started) 部分。

[规格](#specifications) 部分包含有关 DSO Quad 功能的所有详细信息。

<!-- [&gt; 下载此手册的 PDF 版本 &lt;](#PDF) -->

_**注意：DSO Quad 目前是一个 BETA 产品。这意味着产品仍存在显著的硬件和软件问题。本手册已尽力准确描述当前产品。然而，本手册不提供任何形式的保证。**_

## 为什么需要另一本手册？

Seeedstudio 的官方手册可以在 [这里](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929) 下载。我在业余时间开始了这个页面项目，以回答我第一次使用 DSO Quad 时遇到的所有问题。

如果您想知道以下问题，这本手册可能会有所帮助：

1. 如何安装电池？（我担心我的电池可能装反了！如何确认？）

2. 如何打开背盖？

3. 如何打开设备？

4. 充电指示灯的含义是什么？

5. 如何升级固件？

6. 如何测试设备？

7. 按钮的功能是什么？

我觉得这些内容都应该集中在一个地方——一本手册——于是我不断完善，直到形成现在的样子。

### 其他 Seeedstudio 文档

* [DSO Quad 手册（官方 Wiki 页面）](/cn/DSO_Quad "DSO Quad")

* [DSO Quad 固件构建教程](/cn/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")

* [DSO Quad 电池安装教程（含视频）](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2074)

## 入门指南

当您收到 DSO Quad 时，您应该会看到如下物品：

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_plastic_cover.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_usb_cable.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_pouch.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_probes.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_battery.jpg)<br />
（这是锂聚合物电池，仍在静电袋中）

### 安装电池

1. 首先，确保 DSO Quad 的开关处于 **关闭** 状态：
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Turn_off.jpg)

2. 将 DSO Quad 拿在手中，使背面文字正面朝上，如图所示：
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_right_side_up.jpg)

3. 将背盖向左滑动：<br />
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_slide_to_left.jpg)

4. 背盖应轻松脱落，露出空的电池腔：
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_back_removed.jpg)<br />
 **注意：** 有报告称存在反极性电池。_**如果不纠正，这将损坏您的充电电路。**_ 请仔细检查红色和黑色电线的正确排列。

5. 检查红色电线是否靠近 DSO Quad 的外侧。黑色电线应在内侧。
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_observe_polarity.jpg)

6. 如果您的电池连接错误，_**请勿插入！**_ 请访问 [此论坛帖子](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1911) 寻求帮助。

7. 如果您的电池连接正确，请将电线穿过左侧的夹子：

8. 将背盖滑回原位。
紧握左侧，同时将盖子向右滑动。请参阅 [http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/](http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/) 观看演示。

9. <div className="thumb tright"><div className="thumbinner" style={{width: 202}}> <div className="thumbcaption">红色“充电”LED</div></div></div> 将 DSO Quad 竖直放置并连接 USB 电缆。您应该会看到红色“充电”LED。首次使用前，请至少充电 1 小时。

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_red_charging_led.jpg)

10. 请将固件 [更新至最新版本](#firmware-updates)。

### LED 指示灯和电源模式

DSO Quad 通过连接 USB 电缆充电。LTC4054 电池控制器[在电源开关打开时不会充电](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922)。以下表格对此进行了最佳解释：

<table>
<tr>
<th> 电源开关</th>
<th> USB 电缆</th>
<th> 电池</th>
<th> 您看到的内容</th>
<th> DSO Quad 电源模式</th>
</tr>
<tr>
<td> 关闭</td>
<td> 未连接</td>
<td> 空闲</td>
<td> LED 关闭，显示屏关闭</td>
<td> 已关闭电源</td>
</tr>
<tr>
<td> 打开</td>
<td> 未连接</td>
<td> 放电</td>
<td> LED 关闭，显示屏打开</td>
<td> 正常（已开机）</td>
</tr>
<tr>
<td> 打开</td>
<td> 未连接</td>
<td> 放电</td>
<td> 绿色 LED 打开，显示屏关闭</td>
<td> 节能模式：600 秒无按键操作后屏幕熄灭</td>
</tr>
<tr>
<td> 打开</td>
<td> 未连接</td>
<td> 空</td>
<td> LED 关闭，显示屏关闭</td>
<td> 无电池，已关机。请连接 USB 电缆：电池需要充电</td>
</tr>
<tr>
<td> 打开</td>
<td> 连接到 5V/500mA USB</td>
<td> 空闲</td>
<td> 红色 LED 打开，显示屏打开</td>
<td> 已开机，[开机时电池不会充电](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922)</td>
</tr>
<tr>
<td> 关闭</td>
<td> 连接到 5V/500mA USB</td>
<td> 充电中</td>
<td> 红色 LED 打开，显示屏关闭</td>
<td> 已关机，电池充电中</td>
</tr>
<tr>
<td> 关闭</td>
<td> USB 端口未供电*</td>
<td> 空闲</td>
<td> LED 关闭，显示屏关闭</td>
<td> 已关机，无法充电</td>
</tr>
<tr>
<td> 关闭</td>
<td> 连接到 5V/500mA USB</td>
<td> 满电</td>
<td> LED 关闭，显示屏关闭</td>
<td> 已关机，电池已满</td>
</tr>
<tr>
<td> 关闭</td>
<td> 连接到 5V/500mA USB</td>
<td> 未安装电池</td>
<td> 红色 LED 微亮，显示屏关闭</td>
<td> 已关机，未安装电池</td>
</tr>
</table>

*** USB端口未供电：** 如果您的 DSO Quad 无法充电，可能是 USB 端口的问题。以下是一些故障排除提示：

1. 请确保 USB 数据线正确连接。

2. 请尝试使用电脑上的其他端口。有些 USB 集线器可能无法提供足够的电力，尤其是当多个设备同时连接时。

3. 请尝试在另一台电脑上的不同端口。有些笔记本电脑在进入睡眠模式时可能会关闭 USB 端口的电源。

### 固件更新

DSO Quad 有多个版本，每个版本的固件都不同。请仔细确认您的硬件型号。当您首次打开 DSO Quad 时，请查看硬件版本。将您看到的内容与以下表格进行比较：

在此处查看最新固件：[DSO Quad Building Firmware](/cn/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")  
以下是与 [FPGA(DFU，SYS，APP) v2.7.2](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip) 特别合同下的最新固件。

<table>
<tr>
<th>启动屏幕</th>
<th>硬件版本</th>
<th>出厂固件</th>
<th>最新固件更新</th>
<th>备注</th>
</tr>
<tr>
<td></td>
<td>2.7</td>
<td>APP 2.53<br/>SYS 1.52<br/>FPGA 2.</td>
<td>APP P1.00<br/>SYS B1.52<br/>FPGA 2.61</td>
<td>Seeed Studio 发货此版本。<br/>此固件具有更好的 GUI！<br/>(此外，2.7 的出厂固件经常冻结，因此强烈推荐此固件)<br/><img src="https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_26.jpg" /></td>
</tr>
<tr>
<td></td>
<td>2.6</td>
<td>APP 2.33<br/>SYS 1.33<br/>FPGA 2.5</td>
<td>APP 2.53<br/>SYS 1.52<br/>FPGA 2.61<br/>Seeed Studio 发货此版本<br/><img src="https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_22.jpg" /><br/>2.2 APP<br/>SYS 1.02</td>
<td>[APP 2.34?](https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760)<br/>[SYS 1.32?](https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760)</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>版本 2.2 的设备仅提供给 Beta 测试人员，并提供<a href="http://ourdev.cn/bbs/bbs_content_all.jsp?bbs_sn=4138839">免费升级到 2.6</a>。此版本将不再接收任何进一步的软件更新。</td>
</tr>
</table>

您可以在以下链接找到更多信息：[https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929)。

固件源代码可在[此处](http://github.com/Seeed-Studio/DSOQuad_SourceCode)获取。**注意：** Seeed Studio 不建议您自行创建 FPGA 固件，因为可能会损坏硬件。

### 校准

DSO Quad 在首次使用前需要校准，并且在长时间使用后应重新校准。需要校准的两个参数是增益和偏移（直流偏移）。

#### 旧版 GUI（应用版本 2.x）

1. 偏移校准

    1. 按住标有方形的按钮 2 秒，校准“电子表格”将出现。

    2. 将每个框中的值调至 0。通过向左/向右旋转最右侧的“导航”开关上下移动。通过点击最右侧的“导航”开关移动列。

    3. 如果某些条目未更改，则取消校准。或者，在每个级别校准后保存校准。按照顶部的说明操作。

2. 增益校准

    1. （请参阅常规手册）

#### 新版 GUI（硬件 2.7，应用版本 P1.00 及以上）

（我不确定版本编号的情况，可能是测试版或预览版，但我不清楚）

1. 偏移校准

    1. 按一次方形按钮。

    2. 在菜单中选择“Calibrat”。

    3. 按照说明操作。

更多详情请参阅：[DSO Quad:Calibration](/cn/DSO_Quad-Calibration "DSO Quad:Calibration")

注意：我注意到当连接或断开微型 USB 电源时，校准结果会有所不同。因此，请按照您最常使用的方式进行校准。

1. 增益校准

    1. （请参阅常规手册）

## 使用 DSO Quad

最重要的开关是右侧的两个旋转开关。最右侧的开关是“导航”开关，用于更改当前用户界面中正在闪烁的主要部分。另一个开关是“子菜单”开关，用于更改伏特/格（Volts/div）、微秒、触发位置等。

每个开关都可以向左或向右旋转，并可以像按钮一样按下。

主屏幕包含以下模块：

<table>
<tr>
<th> 标题</th>
<th> 模块描述</th>
</tr>
<tr>
<td> RUN/HOLD</td>
<td> 暂停示波器并重新开始运行</td>
</tr>
<tr>
<td> CH(A)</td>
<td> 青色的图形和测量值</td>
</tr>
<tr>
<td> CH(B)</td>
<td> 黄色的图形和测量值</td>
</tr>
<tr>
<td> CH(C)</td>
<td> 紫色的图形和测量值</td>
</tr>
<tr>
<td> CH(D)</td>
<td> 绿色的图形和测量值</td>
</tr>
<tr>
<td> SCAN</td>
<td> 棕色的 SCAN/AUTO/NORM（正常）/SINGL（单次）/NONE 触发模式</td>
</tr>
<tr>
<td> 信号发生器</td>
<td> 蓝色的数字和模拟“波形输出”</td>
</tr>
<tr>
<td> 触发器</td>
<td> 所有触发电平（针对 CH(A) 到 CH(D)）以及触发模式</td>
</tr>
<tr>
<td> YPOS</td>
<td> YPOS</td>
</tr>
<tr>
<td> V1</td>
<td> V1</td>
</tr>
<tr>
<td> V2</td>
<td> V2</td>
</tr>
<tr>
<td> 水平滚动条</td>
<td> 水平滚动条</td>
</tr>
<tr>
<td> T1</td>
<td> T1</td>
</tr>
<tr>
<td> T2</td>
<td> T2</td>
</tr>
<tr>
<td> XPOS</td>
<td> XPOS</td>
</tr>
<tr>
<td> Delta V</td>
<td> V1 和 V2 标记之间的差值</td>
</tr>
<tr>
<td> Delta T</td>
<td> T1 和 T2 标记之间的差值</td>
</tr>
<tr>
<td> 实时测量</td>
<td> 可定制的测量读数。例如，Vbt、FPS、Vdc、RMS、Max、Min、Vpp、FRQ、DUT、CIR、TL、TH</td>
</tr>
</table>

### 测量电压

Vmax、Vmin、Vpp、Vdc（平均电压）、Vrms（sqrt(average(V*V))）

## 规格

采样范围：0.1 微秒 - 1 秒

数字输入带宽：[相关论坛帖子](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1978)

### 定义

<table>
<tr>
<th> Vpp</th>
<td> 峰值到峰值电压</td>
</tr>
<tr>
<th> x1 探头</th>
<td> 测量低电压信号。不要超过 80Vpp，否则可能会损坏您的 DSO Quad。（可用作低阻抗探头。）</td>
</tr>
<tr>
<th> x10 探头</th>
<td> 测量高电压信号。不要超过 400Vpp，否则可能会损坏您的 DSO Quad。（可用作高阻抗探头。）<br/><br/>注意屏幕上的值是输入值的 1/10，因此请在脑海中乘以 10。</td>
</tr>
<tr>
<th> ...</th>
<td> ...</td>
</tr>
</table>

### 要求

DSO Quad 可以通过任何普通 USB 端口充电。请在使用前至少充电 1 小时。

DSO Quad 固件会进行快速的 USB 断开-重新连接以执行“实时”固件更新。这种方法与 Mac OS X 或 Linux 不兼容。有关更多信息，请参阅[相关论坛帖子](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1934)。请参阅 [DSO Quad 构建固件](/cn/DSO_Quad-Building_Firmware "DSO Quad 构建固件") 了解如何从 Linux 升级固件。

## 资源

[FPGA(DFU，SYS，APP) v2.7.2](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>