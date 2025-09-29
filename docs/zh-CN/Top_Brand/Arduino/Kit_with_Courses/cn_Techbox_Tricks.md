---
description: Techbox Tricks
title: Techbox Tricks
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Techbox_Tricks
last_update:
  date: 2/17/2023
  author: jianjing Huang
---

<!-- ---
name: Techbox Tricks
category: Discontinued
bzurl:
oldwikiname: Techbox_Tricks
prodimagename:
bzprodimageurl: https://www.research.net/r/Techbox_Tricks
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Techbox_Tricks/img/110020006_p1.jpg)

TechBox 是一系列面向 DIY 爱好者、电子初学者和教育工作者的电子模块化套件。
凭借即插即用的特性，入门级 TechBox Tricks 让您在无需任何编程知识的情况下，就能开启创作之旅。

## 特性

* 小巧、强大、即插即用

* 84 种不同的组合可供玩耍

* 分步教程提供学习和制作体验，充满乐趣

* 来自 Grove 系列的全面支持和资源

## 零件清单

![](https://files.seeedstudio.com/wiki/Techbox_Tricks/img/110020006_p2.jpg)

* Logic DC Jack（主板）*1

* Grove tricks *1

    1.[光控开关](https://seeeddoc.github.io/Grove-Light_Sensor/)

    2.[倾斜开关](https://seeeddoc.github.io/Grove-Tilt_Switch/)

    3.[接近开关](https://seeeddoc.github.io/Grove-Line_Finder/)

    4.[触摸开关](https://seeeddoc.github.io/Grove-Touch_Sensor/)

    5.[彩色 LED](https://seeeddoc.github.io/Grove-LED_Socket_Kit/)

    6.[蜂鸣器](https://seeeddoc.github.io/Grove-Buzzer/)

* 直流电机 *1

* Grove 连接线 *2

* Grove 分支线 *1

* 电池连接线 *1

* 9V 电池 *1

## 使用方法

### 步骤 1：准备工作

从 Grove tricks 中获取 4 个输入模块和 2 个输出模块。

![](https://files.seeedstudio.com/wiki/Techbox_Tricks/img/Grove_tricks_depart.jpg)

### 步骤 2：基本原理

主板（Logic DC Jack）有两个插座。将一个输入模块连接到左侧，一个输出模块连接到右侧。现在只需打开开关就可以开始创作了！

#### 注意事项

* 将 Grove 连接线的凹槽直接对准插座的凹槽插入。

* 左侧插座用于输入，右侧插座用于输出。

* 开关切换到"Off"表示断电。开关切换到"Not"表示主板现在是一个非逻辑门。开关切换到"And"表示通电，同时只有在左侧插座插入 grove 分支线时，主板才会成为与逻辑门。

### 步骤 3：现在试试

#### 项目 1

![](https://files.seeedstudio.com/wiki/Techbox_Tricks/img/Application_1.jpg)

只有当开关处于"AND"位置且触摸开关被按下时，蜂鸣器才会响起。

#### 项目 2

![](https://files.seeedstudio.com/wiki/Techbox_Tricks/img/Application_2.jpg)

只有当开关处于"AND"位置且触摸开关被按下时，蜂鸣器才会响起，LED 才会点亮。

#### 项目 3

![](https://files.seeedstudio.com/wiki/Techbox_Tricks/img/Application_3.jpg)

只有当开关处于"AND"位置且触摸开关被按下，同时光控开关被充分照亮时，蜂鸣器才会响起。

#### 项目 4

![](https://files.seeedstudio.com/wiki/Techbox_Tricks/img/Application_4.jpg)

只有当开关处于"AND"位置且触摸开关被按下，同时光控开关被充分照亮时，输出模块才会启动。

### 其他示例

欢迎将您的项目添加到列表中！

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Techbox_Tricks/res/Grove-Tricks_v1.0_EAGLE.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[PDF]**   [Grove - Tricks v1.0 位号.pdf](https://files.seeedstudio.com/wiki/Techbox_Tricks/res/Grove-Tricks_v1.0_%E4%BD%8D%E5%8F%B7.pdf)

* **[PDF]**  [Grove - Tricks v1.0_sch.pdf](https://files.seeedstudio.com/wiki/Techbox_Tricks/res/Grove-Tricks_v1.0_sch.pdf)

* **[Eagle]**   [File:Grove - Tricks v1.0 EAGLE.zip](https://files.seeedstudio.com/wiki/Techbox_Tricks/res/Grove-Tricks_v1.0_EAGLE.zip)
* **[PDF]**[Grove - Tricks v1.0 sch](https://files.seeedstudio.com/wiki/Techbox_Tricks/res/Grove%20-%20Tricks%20v1.0.pdf)

* **[EAGLE]**[Grove - Tricks v1.0 pdf](https://files.seeedstudio.com/wiki/Techbox_Tricks/res/Grove%20-%20Tricks%20v1.0.sch)

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