---
description: 4WD麦克纳姆轮机器人套件系列
title: 4WD麦克纳姆轮机器人套件系列
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/4WD_Mecanum_Wheel_Robot_Kit_Series
last_update:
  date: 1/13/2023
  author: shuxu hu
---

4WD麦克纳姆轮机器人套件系列产品是基于麦克纳姆轮的四轮驱动移动平台。每个套件包含两个左麦克纳姆轮以及两个右麦克纳姆轮。四个麦克纳姆轮分别连接到独立控制的电机上。根据每个轮子的方向和速度，移动平台可以向前、向后、侧向以及任何其他所需方向移动或旋转。该套件可以添加两个远程控制模块——BLE模块和RF模块，以实现远程控制。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/4WD_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG)

麦克纳姆轮是一种可以使车辆向任意方向移动的轮子设计。它是一种常规轮子，其周边安装了一系列滚轮。这些滚轮的旋转轴与轮子平面呈45°角，并与滚轮中心线平行于轮子旋转轴的方向呈45°角。麦克纳姆轮有两种类型：左手型和右手型麦克纳姆轮；它们的区别在于滚轮的方向。对于左手型麦克纳姆轮，如下图所示，滚轮从右下方向左上方排列。右手型轮子的滚轮安装方式则相反。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/LeftAndRight_Mecanum_Wheel.PNG)

安装4WD麦克纳姆轮套件时需要特别小心。正确的配置要求四个轮子按照如下图所示的方式安装，其中每个轮子的顶部滚轮的旋转轴指向平台中心。请注意，所有的动态分析和预编写代码都是基于这种配置。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Wheel_Installation_02.PNG)

倾斜的周边滚轮将轮子旋转方向的一部分力转化为垂直于轮子方向的力。根据每个轮子的方向和速度，这些力的组合会产生一个总的力向量，可以指向任何所需方向。设轮子的半径为R，四个轮子的角速度分别为ω1、ω2、ω3、ω4，每个轮子滚轮的速度分别为νg1、νg2、νg3和νg4，平台在x方向、y方向的速度以及角速度分别为νx、νy和ω0。全局坐标系的原点为О，位于平台中心，每个轮子的局部坐标系的原点分别为O1、O2、O3和O4。从平台中心到轮子中心的距离为L1，从平台中心到轮子滚动轴的距离为L2。α为滚轮的角度：在本例中为45º。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Coordinate_System.PNG)

在全局坐标系中，轮子1中心O1的速度为：

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Velocity_of_O1.PNG)

而在轮子1的局部坐标系中，O1的速度为：

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Velocity_of_O12.PNG)

结合公式(1)到(4)，我们得到：

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_010.PNG)

解出公式(5)和(6)，轮子1的角速度为：

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_02.PNG)

类似地，其他三个轮子的速度可以计算为：

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_03.PNG)

公式(8)显示了轮子旋转速度与平台运动之间的关系。理论上，通过四个轮子的角速度的适当组合，平台可以向任何方向移动。实际上，对于这个平台，最常用的运动方式是有限的。这里我们给出了平台的简化工作原理。如果您对数字或公式感到厌烦，可以忽略动态分析部分，直接查看下图。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Working_Principle-Simplified-.PNG)

让四个轮子朝同一方向移动会导致平台向前或向后移动，让一侧的轮子与另一侧的轮子反向运行会导致平台旋转，而让对角线上的轮子反向运行会导致平台侧向移动。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/4WD-Mecanum-Wheel-Robot-Kit-p-2276.html)

## 特性

*   内置麦克纳姆轮

*   全向移动能力

*   高负载能力

*   灵活性与可扩展性

*   RF/BLE 控制选项

## 部件清单

1. 左麦克纳姆轮套件

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Left_Mecanum_Wheel_Kit.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">部件名称</th>
<th scope="col">规格</th>
<th scope="col">材质</th>
<th scope="col">数量</th>
</tr>
<tr>
<th scope="row">1</th>
<td>左麦克纳姆轮</td>
<td>Φ60mm H32mm</td>
<td>铝合金&amp;橡胶</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">2</th>
<td>直流电机</td>
<td>25GA 370</td>
<td>金属</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">3</th>
<td>直流电机支架</td>
<td>25 系列</td>
<td>金属</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">4</th>
<td>轴连接器</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>铝合金</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">5</th>
<td>定位螺钉</td>
<td>M3×5</td>
<td>金属</td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">6</th>
<td>螺钉、弹簧锁紧垫圈和平垫圈组件</td>
<td>M4×18</td>
<td>金属</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">7</th>
<td>十字槽圆头螺钉</td>
<td>M3×8</td>
<td>金属</td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">8</th>
<td>带垫圈的十字槽圆头螺钉</td>
<td>M3×8</td>
<td>金属</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">9</th>
<td>六角螺母</td>
<td>M3</td>
<td>金属</td>
<td>4 个</td>
</tr>
</table>

2. 右麦克纳姆轮套件

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Right_Mecanum_Wheel_Kit.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">部件名称</th>
<th scope="col">规格</th>
<th scope="col">材质</th>
<th scope="col">数量</th>
</tr>
<tr>
<th scope="row">1</th>
<td>右麦克纳姆轮</td>
<td>Φ60mm H32mm</td>
<td>铝合金&amp;橡胶</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">2</th>
<td>直流电机</td>
<td>25GA 370</td>
<td>金属</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">3</th>
<td>直流电机支架</td>
<td>25 系列</td>
<td>金属</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">4</th>
<td>轴连接器</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>铝合金</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">5</th>
<td>定位螺钉</td>
<td>M3×5</td>
<td>金属</td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">6</th>
<td>螺钉、弹簧锁紧垫圈和平垫圈组件</td>
<td>M4×18</td>
<td>金属</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">7</th>
<td>十字槽圆头螺钉</td>
<td>M3×8</td>
<td>金属</td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">8</th>
<td>带垫圈的十字槽圆头螺钉</td>
<td>M3×8</td>
<td>金属</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">9</th>
<td>六角螺母</td>
<td>M3</td>
<td>金属</td>
<td>4 个</td>
</tr>
</table>

3. 基础版本

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Part_List_for_Basic_Version.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">部件名称</th>
<th scope="col">规格</th>
<th scope="col">材质</th>
<th scope="col">数量</th>
</tr>
<tr>
<th scope="row">1</th>
<td>底盘</td>
<td>250*145*5mm, 黑色</td>
<td>PMMA</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">2</th>
<td>上层甲板</td>
<td>192*145*5mm, 黑色</td>
<td>PMMA</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">3</th>
<td>电池盖</td>
<td>68*47*2mm, 黑色</td>
<td>PMMA</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">4</th>
<td>左麦克纳姆轮</td>
<td>Φ60mm H32mm</td>
<td>铝合金&amp;橡胶</td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">5</th>
<td>右麦克纳姆轮</td>
<td>Φ60mm H32mm</td>
<td>铝合金&amp;橡胶</td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">6</th>
<td>直流电机</td>
<td>25GA 370</td>
<td>金属</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">7</th>
<td>直流电机支架</td>
<td>25 系列</td>
<td>金属</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">8</th>
<td>轴连接器</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>铝合金</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">9</th>
<td>定位螺钉</td>
<td>M3×5</td>
<td>金属</td>
<td>8 个</td>
</tr>
<tr>
<th scope="row">10</th>
<td>螺钉、弹簧锁紧垫圈和平垫圈组件</td>
<td>M4×18</td>
<td>金属</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">11</th>
<td>螺钉、弹簧锁紧垫圈和平垫圈组件</td>
<td>M2×8</td>
<td>金属</td>
<td>20 个</td>
</tr>
<tr>
<th scope="row">12</th>
<td>十字槽圆头螺钉</td>
<td>M3×8</td>
<td>金属</td>
<td>26 个</td>
</tr>
<tr>
<th scope="row">13</th>
<td>带垫圈的十字槽圆头螺钉</td>
<td>M3×8</td>
<td>金属</td>
<td>16 个</td>
</tr>
<tr>
<th scope="row">14</th>
<td>六角螺母</td>
<td>M3</td>
<td>金属</td>
<td>16 个</td>
</tr>
<tr>
<th scope="row">15</th>
<td>六角距离柱</td>
<td>M3×40</td>
<td>金属</td>
<td>5 个</td>
</tr>
<tr>
<th scope="row">16</th>
<td>六角距离柱</td>
<td>M3×10</td>
<td>金属</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">17</th>
<td>六角距离柱</td>
<td>M2×15</td>
<td>金属</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">18</th>
<td>六角距离柱</td>
<td>M2×10</td>
<td>金属</td>
<td>6 个</td>
</tr>
</table>

4. RF 版本

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Parts_of_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">部件名称</th>
<th scope="col">规格</th>
<th scope="col">材质</th>
<th scope="col">数量</th>
</tr>
<tr>
<th scope="row">1</th>
<td>底盘</td>
<td>250*145*5mm, 黑色</td>
<td>PMMA</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">2</th>
<td>上层甲板</td>
<td>192*145*5mm, 黑色</td>
<td>PMMA</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">3</th>
<td>电池盖</td>
<td>68*47*2mm, 黑色</td>
<td>PMMA</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">4</th>
<td>遥控面板</td>
<td>165*90*4mm, 透明</td>
<td>PMMA</td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">5</th>
<td>左麦克纳姆轮</td>
<td>Φ60mm H32mm</td>
<td>铝合金&amp;橡胶</td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">6</th>
<td>右麦克纳姆轮</td>
<td>Φ60mm H32mm</td>
<td>铝合金&amp;橡胶</td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">7</th>
<td>直流电机</td>
<td>25GA 370</td>
<td>金属</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">8</th>
<td>直流电机支架</td>
<td>25 系列</td>
<td>金属</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">9</th>
<td>轴连接器</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>铝合金</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">10</th>
<td>定位螺钉</td>
<td>M3×5</td>
<td>金属</td>
<td>8 个</td>
</tr>
<tr>
<th scope="row">11</th>
<td>螺钉、弹簧锁紧垫圈和平垫圈组件</td>
<td>M4×18</td>
<td>金属</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">12</th>
<td>螺钉、弹簧锁紧垫圈和平垫圈组件</td>
<td>M2×8</td>
<td>金属</td>
<td>32 个</td>
</tr>
<tr>
<th scope="row">13</th>
<td>十字槽圆头螺钉</td>
<td>M3×8</td>
<td>金属</td>
<td>34 个</td>
</tr>
<tr>
<th scope="row">14</th>
<td>带垫圈的十字槽圆头螺钉</td>
<td>M3×8</td>
<td>金属</td>
<td>16 个</td>
</tr>
<tr>
<th scope="row">15</th>
<td>六角螺母</td>
<td>M3</td>
<td>金属</td>
<td>16 个</td>
</tr>
<tr>
<th scope="row">16</th>
<td>六角距离柱</td>
<td>M3×40</td>
<td>金属</td>
<td>5 个</td>
</tr>
<tr>
<th scope="row">17</th>
<td>六角距离柱</td>
<td>M3×10</td>
<td>金属</td>
<td>8 个</td>
</tr>
<tr>
<th scope="row">18</th>
<td>六角距离柱</td>
<td>M2×15</td>
<td>金属</td>
<td>4 个</td>
</tr>
<tr>
<th scope="row">19</th>
<td>六角距离柱</td>
<td>M2×10</td>
<td>金属</td>
<td>12 个</td>
</tr>
<tr>
<th scope="row">20</th>
<td>[Grove - I2C 电机驱动](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)</td>
<td></td>
<td></td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">21</th>
<td>[RF Bee](https://www.seeedstudio.com/depot/RFbee-V11-Wireless-arduino-compatible-node-p-614.html?cPath=19_22)</td>
<td></td>
<td></td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">22</th>
<td>[Grove - XBee 承载板](https://www.seeedstudio.com/depot/Grove-XBee-Carrier-p-905.html?cPath=98_16)</td>
<td></td>
<td></td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">23</th>
<td>[Grove - 拇指摇杆](https://www.seeedstudio.com/depot/Grove-Thumb-Joystick-p-935.html?cPath=85_51)</td>
<td></td>
<td></td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">24</th>
<td>[Grove - 通用 4 针扣式 20cm 电缆](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)</td>
<td></td>
<td></td>
<td>2 个</td>
</tr>
<tr>
<th scope="row">25</th>
<td>[Grove - 分支电缆](https://www.seeedstudio.com/depot/Grove-Branch-Cable-5PCs-pack-p-847.html)</td>
<td></td>
<td></td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">26</th>
<td>电源线</td>
<td>100mm, 黑色</td>
<td></td>
<td>3 个</td>
</tr>
<tr>
<th scope="row">27</th>
<td>电源线</td>
<td>100mm, 红色</td>
<td></td>
<td>3 个</td>
</tr>
<tr>
<th scope="row">28</th>
<td>摇杆开关</td>
<td></td>
<td></td>
<td>1 个</td>
</tr>
<tr>
<th scope="row">29</th>
<td>T 型插头</td>
<td></td>
<td></td>
<td>1 个</td>
</tr>
</table>

5. BLE版本

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Parts_of_Mecanum_Wheel_Robot_Kit-BLE_Version-.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">部件名称</th>
<th scope="col">规格</th>
<th scope="col">材质</th>
<th scope="col">数量</th>
</tr>
<tr>
<th scope="row">1</th>
<td>底盘</td>
<td>250*145*5mm，黑色</td>
<td>PMMA</td>
<td>1个</td>
</tr>
<tr>
<th scope="row">2</th>
<td>上层甲板</td>
<td>192*145*5mm，黑色</td>
<td>PMMA</td>
<td>1个</td>
</tr>
<tr>
<th scope="row">3</th>
<td>电池盖</td>
<td>68*47*2mm，黑色</td>
<td>PMMA</td>
<td>1个</td>
</tr>
<tr>
<th scope="row">4</th>
<td>左麦克纳姆轮</td>
<td>Φ60mm H32mm</td>
<td>铝合金&橡胶</td>
<td>2个</td>
</tr>
<tr>
<th scope="row">5</th>
<td>右麦克纳姆轮</td>
<td>Φ60mm H32mm</td>
<td>铝合金&橡胶</td>
<td>2个</td>
</tr>
<tr>
<th scope="row">6</th>
<td>直流电机</td>
<td>25GA 370</td>
<td>金属</td>
<td>4个</td>
</tr>
<tr>
<th scope="row">7</th>
<td>直流电机支架</td>
<td>25系列</td>
<td>金属</td>
<td>4个</td>
</tr>
<tr>
<th scope="row">8</th>
<td>轴连接器</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>铝合金</td>
<td>4个</td>
</tr>
<tr>
<th scope="row">9</th>
<td>紧定螺钉</td>
<td>M3×5</td>
<td>金属</td>
<td>8个</td>
</tr>
<tr>
<th scope="row">10</th>
<td>螺钉、弹簧垫圈和平垫圈组件</td>
<td>M4×18</td>
<td>金属</td>
<td>4个</td>
</tr>
<tr>
<th scope="row">11</th>
<td>螺钉、弹簧垫圈和平垫圈组件</td>
<td>M2×8</td>
<td>金属</td>
<td>20个</td>
</tr>
<tr>
<th scope="row">12</th>
<td>十字槽圆头螺钉</td>
<td>M3×8</td>
<td>金属</td>
<td>10个</td>
</tr>
<tr>
<th scope="row">13</th>
<td>带垫圈的十字槽圆头螺钉</td>
<td>M3×8</td>
<td>金属</td>
<td>32个</td>
</tr>
<tr>
<th scope="row">14</th>
<td>六角螺母</td>
<td>M3</td>
<td>金属</td>
<td>16个</td>
</tr>
<tr>
<th scope="row">15</th>
<td>六角距离柱</td>
<td>M3×40</td>
<td>金属</td>
<td>5个</td>
</tr>
<tr>
<th scope="row">16</th>
<td>六角距离柱</td>
<td>M3×10</td>
<td>金属</td>
<td>4个</td>
</tr>
<tr>
<th scope="row">17</th>
<td>六角距离柱</td>
<td>M2×15</td>
<td>金属</td>
<td>4个</td>
</tr>
<tr>
<th scope="row">18</th>
<td>六角距离柱</td>
<td>M2×10</td>
<td>金属</td>
<td>6个</td>
</tr>
<tr>
<th scope="row">19</th>
<td>[Grove - I2C电机驱动](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)</td>
<td></td>
<td></td>
<td>2个</td>
</tr>
<tr>
<th scope="row">20</th>
<td>[Grove - BLE](https://www.seeedstudio.com/depot/Grove-BLE-p-1929.html)</td>
<td></td>
<td></td>
<td>1个</td>
</tr>
<tr>
<th scope="row">21</th>
<td>[Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V30-Atmega-328P-p-669.html)</td>
<td></td>
<td></td>
<td>1个</td>
</tr>
<tr>
<th scope="row">22</th>
<td>[Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html)</td>
<td></td>
<td></td>
<td>1个</td>
</tr>
<tr>
<th scope="row">23</th>
<td>[Grove - 通用4针扣式20cm电缆](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)</td>
<td></td>
<td></td>
<td>1个</td>
</tr>
<tr>
<th scope="row">24</th>
<td>[Grove - 分支电缆](https://www.seeedstudio.com/depot/Grove-Branch-Cable-5PCs-pack-p-847.html)</td>
<td></td>
<td></td>
<td>1个</td>
</tr>
<tr>
<th scope="row">25</th>
<td>电源线</td>
<td>100mm，黑色</td>
<td></td>
<td>3个</td>
</tr>
<tr>
<th scope="row">26</th>
<td>电源线</td>
<td>100mm，红色</td>
<td></td>
<td>3个</td>
</tr>
<tr>
<th scope="row">27</th>
<td>摇杆开关</td>
<td></td>
<td></td>
<td>1个</td>
</tr>
<tr>
<th scope="row">28</th>
<td>T型插头</td>
<td></td>
<td></td>
<td>1个</td>
</tr>
</table>

##  组装说明

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Assembly_Instructions.PNG)

##  附件

[电机规格](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/res/Motor_Specs_for_4WD_Mecanum_Wheel_Robot_Kit_Series_Products.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>