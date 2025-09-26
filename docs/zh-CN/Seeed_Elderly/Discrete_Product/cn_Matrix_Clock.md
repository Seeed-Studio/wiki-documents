---
description: 矩阵时钟
title: 矩阵时钟
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Matrix_Clock
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClock-ProductImagePlain.jpg)

矩阵时钟是一款高度紧凑的单板 Arduino 兼容时钟，通过 LED 矩阵显示屏显示时间。显示屏和丰富的固件库支持分钟之间的动画过渡。

![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClockRear.jpg)![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MC-Buttons.jpg)

基于 Arduino Leonardo，矩阵时钟完全兼容 Arduino IDE，可以通过 USB Micro 数据线轻松更新或定制新的草图。一个纽扣电池供电的实时时钟日历在设备断电时仍能跟踪时间和日期。矩阵时钟还可以播放音乐闹钟，并且可以轻松重新编程为不同的曲调。由于其紧凑的外形尺寸，矩阵时钟可以安装在各种外壳中——甚至是怀表样式的外壳。如果需要便携性，设备可以使用电池供电，并通过将一个扩展引脚接地来启用睡眠功能，从而延长电池寿命。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Matrix-Clock-p-1824.html)

## 特性
---
*   16x8 LED 矩阵显示屏
*   ATMEGA32U4 微控制器
*   纽扣电池供电的实时时钟日历
*   德州仪器 TLC5920 LED 驱动器
*   4 个按钮
*   压电扬声器输出
*   睡眠模式输入
*   2 种电源输入，USB Micro 接口或 6V - 9V DC 输入。（通常通过 Vin 供电，当 USB 电源存在时切换）

## 使用说明
---

![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MC-Mode.jpg)

## 规格

<table>
<tr>
<td>微控制器</td>
<td>Atmel ATmega32u4，TQFP-44 封装</td>
</tr>
<tr>
<td>工作电压</td>
<td>5V USB 供电或 6V 至 9V</td>
</tr>
<tr>
<td>电源和通信</td>
<td>USB Micro B</td>
</tr>
<tr>
<td>电流</td>
<td>正常运行期间平均约 90mA，最大 300mA</td>
</tr>
<tr>
<td>LED 矩阵</td>
<td>2x 8x8 3mm 绿色 LED</td>
</tr>
<tr>
<td>时钟速度</td>
<td>微控制器 16MHz，RTCC 32.7</td>
</tr>
<tr>
<td>SRAM</td>
<td>2.5 KB</td>
</tr>
<tr>
<td>EEPROM</td>
<td>1 KB</td>
</tr>
<tr>
<td>闪存</td>
<td>32 KB</td>
</tr>
<tr>
<td>扩展头</td>
<td>Gnd, Vin, 5V, Sleep, Piezo-, Piezo+</td>
</tr>
</table>

## 原理图
---
- [MatrixClock-Schematic-MC201V1-Rev1.pdf](https://wiki.seeedstudio.com/cn/images/c/c3/MatrixClock-Schematic-MC201V1-Rev1.pdf)

## PCB
---
![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClock-PCB.jpg)

## 授权许可

[http://i.creativecommons.org/l/by-sa/4.0/88x31.png](http://i.creativecommons.org/l/by-sa/4.0/88x31.png)

Matrix Clock V1 由 Dan Hamer 设计，遵循 [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/deed.zh_CN) 授权。

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>