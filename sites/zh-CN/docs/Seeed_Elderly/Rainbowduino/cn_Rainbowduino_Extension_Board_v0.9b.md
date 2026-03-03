---
description: Rainbowduino扩展板 v0.9b
title: Rainbowduino扩展板 v0.9b
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Rainbowduino_Extension_Board_v0.9b
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowshield.jpg)

Rainbowduino扩展板是Rainbowduino的192个独立LED驱动通道的分线板。这些通道被分为三个8×8阵列：红色、绿色和蓝色，以便于控制。它旨在简化基于Rainbowduino的定制LED项目。

<font color="red" size="3">注意：要驱动Rainbowduino扩展板，您可能还需要一个 [Rainbowduino](https://www.seeedstudio.com/depot/rainbowduino-led-driver-platform-atmega-328-p-371.html?cPath=132_133)。</font>

**型号: [INT111A4M](https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177)**

## 特性

* 尺寸：60.33mm×180.61mm（Rainbowduino尺寸的3倍）
* 可驱动192个独立LED
* 无需额外连接
* 可直接插入Rainbowduino
* 8×24 LED矩阵
* 驱动外部LED

## 应用创意

* 设计您自己的图案
* 创建滚动消息

## 注意事项

请记住，LED的正极必须连接到八角形焊盘。扩展板的方形针脚应插入第一个针脚槽。否则，LED将不会发光，也不会损坏。

## 使用方法

Rainbowduino扩展板是Rainbowduino的分线板，它可以轻松控制192（8×24）个LED。它还可以焊接板外的LED。LED朝上，其背面是焊接针脚的位置。

### 硬件安装

* 1.正确焊接针脚和LED
* 2.插入Rainbowduino

### 编程

详细的演示代码链接在**这里**，如有需要请查阅。

### 示例

Rainbowduino扩展板用于以不同的模式点亮LED。以下代码示例能够控制G10和R31逐渐发光。您可以通过修改dots_color数组的参数值轻松更改样式。第一个元素可以选择不同颜色的矩阵；最后两个参数用于定义需要发光的行和列值。
```
void _main(void)
{
  _init();
  unsigned char i=0;
  for(;;)
  {
    dots_color[0][0][0]=i<<4;//高4位G8点
    dots_color[1][0][3]=i&0x0f;//低4位R1点
    i++;
    delay(100);
  }
}
```
效果如下：

![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowduino-extension-exam1.jpg)

实际上，一个字节用于控制两个LED，详细原理如下：
```
unsigned char dots_color[3][8][4]=
{
//=====================================================
  {//绿色调试
    {0x00,0x00,0x00,0x00},//G8,G7,G6,G5,G4,G3,G2,G1          每个点有4位颜色
    {0x00,0x00,0x00,0x00},//G16,G15,G14,G13,G12,G11,G10,G9   每个点有4位颜色
    {0x00,0x00,0x00,0x00},//G24,G23,G22,G21,G20,G19,G18,G17  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//G32,G31,G30,G29,G28,G27,G26,G25  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//G40,G39,G38,G37,G36,G35,G34,G33  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//G48,G47,G46,G45,G44,G43,G42,G41  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//G56,G55,G54,G53,G52,G51,G50,G49  每个点有4位颜色
    {0x00,0x00,0x00,0x00} //G64,G63,G62,G61,G60,G59,G58,G57  每个点有4位颜色
},
//=======================================================
  {//红色调试
    {0x00,0x00,0x00,0x00},//R8,R7,R6,R5,R4,R3,R2,R1          每个点有4位颜色
    {0x00,0x00,0x00,0x00},//R16,R15,R14,R13,R12,R11,R10,R9   每个点有4位颜色
    {0x00,0x00,0x00,0x00},//R24,R23,R22,R21,R20,R19,R18,R17  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//R32,R31,R30,R29,R28,R27,R26,R25  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//R40,R39,R38,R37,R36,R35,R34,R33  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//R48,R47,R46,R45,R44,R43,R42,R41  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//R56,R55,R54,R53,R52,R51,R50,R49  每个点有4位颜色
    {0x00,0x00,0x00,0x00} //R64,R63,R62,R61,R60,R59,R58,R57  每个点有4位颜色
  },
//======================================================
  {//蓝色调试
    {0x00,0x00,0x00,0x00},//B8,B7,B6,B5,B4,B3,B2,B1          每个点有4位颜色
    {0x00,0x00,0x00,0x00},//B16,B15,B14,B13,B12,B11,B10,B9   每个点有4位颜色
    {0x00,0x00,0x00,0x00},//B24,B23,B22,B21,B20,B19,B18,B17  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//B32,B31,B30,B29,B28,B27,B26,B25  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//B40,B39,B38,B37,B36,B35,B34,B33  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//B48,B47,B46,B45,B44,B43,B42,B41  每个点有4位颜色
    {0x00,0x00,0x00,0x00},//B56,B55,B54,B53,B52,B51,B50,B49  每个点有4位颜色
    {0x00,0x00,0x00,0x00} //B64,B63,B62,B61,B60,B59,B58,B57  每个点有4位颜色
},
};
```

另一个效果图显示为字符RGB，详细代码链接在产品页面。

![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowduino-extension-exam2.jpg)

## 资源  

- **[数据手册]** [数据手册](https://www.seeedstudio.com/depot/datasheet/Rainbowduino_Extension_Shield_v0.9b.pdf)

## 支持  

如果您有任何问题或更好的设计想法，可以前往我们的 [论坛](https://www.seeedstudio.com/forum) 或 **愿望** 页面进行讨论。

## 版本追踪  

<table>
<tr>
<th> 修订版</th>
<th> 描述</th>
<th> 发布日期</th>
</tr>
<tr>
<td width="300px"> v0.9b</td>
<td width="500px"> 初次公开发布</td>
<td width="200px"> 2010年9月23日</td>
</tr>
</table>

## 额外创意  

额外创意部分是用于记录您关于此产品的项目创意，或您发现的其他用途。您也可以将它们写在项目页面上。

## 如何购买  

点击此处购买：[https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177](https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177)。

## 相关链接  

关于扩展板的LED，请查看此处：**https://www.seeedstudio.com/depot/optoelectronics-discrete-led-c-93_94.html**

## 许可  

本文档采用 Creative Commons [署名-相同方式共享 3.0 许可协议](http://creativecommons.org/licenses/by-sa/3.0/)。源代码和库采用 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 许可协议，详情请参阅源代码文件。

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