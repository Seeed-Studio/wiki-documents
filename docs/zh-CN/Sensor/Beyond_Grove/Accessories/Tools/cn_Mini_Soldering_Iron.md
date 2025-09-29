---
title: 迷你电烙铁
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Mini_Soldering_Iron/
slug: /cn/Mini_Soldering_Iron
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_product_view.jpg)

迷你电烙铁是一款纤细、轻便、具有精准温控和快速加热功能（环境温度到300℃仅需10秒）的电烙铁，配备OLED显示屏，是您开发工具包中的必备工具。它还具有睡眠模式和过热通知功能。此外，它易于组装并且通过接地夹实现ESD安全。该电烙铁的温度范围为100 ~ 400 ℃（212 ~ 752 ℉），并包含两种集成（带加热器）且紧凑的烙铁头以适应不同场景。您可以通过USB Micro Type-B接口配置您的设置。<sup>[1]</sup>

<sup>[1]</sup>本页面仅展示快速入门方法和主要信息。详细信息请参阅随附的手册。

|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0Europe-Standard-p-2592.html?ref=newInBazaar)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0US%C2%A0Standard-p-2593.html?ref=newInBazaar)|
|:---:|:---:|
|欧洲版|美国版|

## 特性
---
*   精准（温度稳定性在±2%以内）的温控

*   纤细轻便的烙铁，长时间工作无疲劳

*   快速加热，提高工作效率

*   独立电源适配器，确保个人安全

*   接地夹实现ESD安全

*   USB Micro Type-B接口，用于自定义系统设置和固件更新

*   无需手动校准

*   可切换温度单位（℃或℉）

## 规格
---
<table>
<tr>
<td> 屏幕 </td>
<td> OLED</td>
</tr>
<tr>
<td> USB接口 </td>
<td> USB Micro Type-B</td>
</tr>
<tr>
<td> 重量 </td>
<td> 33g（不包括电源适配器）</td>
</tr>
<tr>
<td> 功率 </td>
<td> 65W</td>
</tr>
<tr>
<td> 输入电压（适配器） </td>
<td> 100 ~ 240 V</td>
</tr>
<tr>
<td> 温度范围 </td>
<td> 100 ~ 400 ℃（212 ~ 752 ℉）</td>
</tr>
<tr>
<td> 烙铁头到地的阻抗 </td>
<td> 2 Ω</td>
</tr>
<tr>
<td> 温度稳定性 </td>
<td> ± 2%</td>
</tr>
<tr>
<td> 睡眠模式温度 </td>
<td> 200℃（392℉），可调</td>
</tr></table>

## 零件清单
---

<table>
<tr>
<th>零件名称</th>
<th>数量</th>
</tr>
<tr>
<td>迷你电烙铁（主体部分）</td>
<td>1个</td>
</tr>
<tr>
<td>PCB焊接套件</td>
<td>1个</td>
</tr>
<tr>
<td>烙铁头类型-BC2</td>
<td>1个</td>
</tr>
<tr>
<td>烙铁头类型-B2</td>
<td>1个</td>
</tr>
<tr>
<td>烙铁支架</td>
<td>1个</td>
</tr>
<tr>
<td>PCB焊接套件</td>
<td>1个</td>
</tr>
<tr>
<td>DC5525电源适配器</td>
<td>1个</td>
</tr>
<tr>
<td>接地夹</td>
<td>1个</td>
</tr>
<tr>
<td>六角扳手（含两个备用螺丝）</td>
<td>1个</td>
</tr>
<tr>
<td>手册</td>
<td>1个</td>
</tr></table>

## 入门指南
---
**注意：** 本文展示的是一个通用的开发环境。  
本节将向您展示如何进行此款电烙铁的基本操作。有关更多详细信息，请参考包装内附带的说明书。

### 爆炸图

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_exploded_view_s.jpg)
<dl>
<dd> ①. 烙铁头固定螺丝</dd>
<dd> ②. 按钮 A</dd>
<dd> ③. 按钮 B</dd>
<dd> ④. 固定螺丝</dd>
<dd> ⑤. 电源接口</dd>
<dd> ⑥. Micro USB</dd>
<dd> ⑦. DC5525 12-24V 接口</dd>
<dd> ⑧. 烙铁头连接端口</dd>
<dd> ⑨. 烙铁连接侧</dd>
<dd> ⑩. 烙铁加热元件</dd>
</dl>

### 组装电烙铁

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_installation_guide.jpg)

1. 拧下烙铁头固定螺丝，将烙铁头插入连接端口，然后拧紧螺丝。

2. 使用接地螺丝连接地线。

3. 将 DC 接头连接到迷你电烙铁，插入电源线并按要求打开设备。

### 基本操作

**调节温度**

按下按钮以调节温度。

按下按钮 A 可增加温度，按下按钮 B 可降低温度。

**校准**

1. 在待机模式（非加热状态）下按下按钮 B 进入温度计模式。

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_1.jpg)

2. 同时按下按钮 B 和按钮 A 进入温度计模式。它将自动执行校准操作，无需手动操作。

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_2.jpg)

3. 大约 30 秒后，按住任意按钮退出校准模式。

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_3.jpg)

4. 左图显示自动校准成功，右图显示自动校准失败。如果自动校准失败，请重复上述步骤。

### 小练习

您可以通过焊接一些 LED 和电阻到包装内附带的叶状 PCB 板上来进行练习。

1. 按照上述步骤组装电烙铁。
2. 将所有四个 LED 和四个电阻焊接到 PCB 板上。

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice_s.JPG)

_**注意**_ 您需要将 LED 按正确方向对齐，因为 LED 是双极性元件：

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice-directions-s.jpg)

_**注意**_ 您需要按照以下基本步骤焊接电子元件：

- 在焊接点涂上一点焊锡，然后在引脚上的某个点涂上一些焊锡。
- 使用电烙铁将两个点连接在一起。

## 资源
---
[用户手册](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/res/Mini_Soldering_Iron_manual.zip)

## 技术支持与产品讨论

如果您遇到任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>