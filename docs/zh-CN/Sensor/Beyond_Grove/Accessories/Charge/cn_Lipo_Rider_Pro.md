---
description: Lipo Rider Pro
title: Lipo Rider Pro
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Lipo_Rider_Pro
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro.jpg)

用绿色能源为您喜爱的电子套件供电！LiPo Rider Pro 是 Lipo Rider 的增强版。它提供比 Lipo Rider 更大的负载输出（峰值 1A）。LiPo Rider Pro 板允许您利用太阳能运行您喜爱的 5V 设备。LiPo Rider Pro 板是您户外传感器设计的理想绿色电源解决方案。将 LiPo Rider Pro 板连接到您的传感器板，它可以永远运行在太阳能上！它也可以用来为手机充电。

LiPo Rider Pro 非常经济实惠且易于使用。无需编程。插上即可使用。内部充电 IC 处理各种组件之间的所有电力流动。

如果太阳能不足，迷你 USB 端口允许您通过 USB 为锂电池充电。它还可以在不拆卸 LiPo Rider Pro 板的情况下为您的套件编程。

LiPo Rider Pro 可以作为单独的板购买，也可以作为套件（LiPo Rider Pro + 锂电池 + 太阳能板）购买。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/LiPo-Rider-Pro-p-992.html)

## 特性

--------

- 最大 1A 负载输出
- 电池和太阳能板连接器为 JST 2.0
- 无论电源来源如何，稳定的 5V USB 电源供应
- 芯片内置充电/再充电算法
- 通过太阳能或 USB 为锂聚合物电池充电
- 通过锂电池或 USB 提供稳定的电压供应
- 2 个 USB 端口可让您在为锂电池充电时为您的套件编程
- LED 指示电池充满或充电状态
- 通过简单的用户修改，可扩展到多个锂电池和大型/多个太阳能板
- 4 个绿色 LED 指示锂电池的电量

## 应用场景

-----------------

- 分布式户外传感器网络的绿色电源和备用电源
- 锂电池充电器
- 手机充电器

:::caution

1. LiPo Rider Pro 的连接器与 LiPo Rider v1.0 不同，前者为 JST 2.0，后者为 JST 2.54。

2. 暴露的电子元件。

3. 当提供大负载时，板可能会变热。

4. 潜在的短路或电击风险，尤其是在设备放置在户外收集太阳能时可能被弄湿。
:::

## 尺寸

----------

LiPo Rider Pro 的尺寸类似于 [6A 锂聚合物电池](https://www.seeedstudio.com/depot/lithium-ion-polymer-battery-pack-6a-p-602.html?cPath=178_183)。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Liporiderprod.jpg)

规格
--------------

<table border="1">
<tr>
<th>
项目
</th>
<th>
最小值
</th>
<th>
标准值
</th>
<th>
最大值
</th>
</tr>
<tr align="center">
<td width="400">
V<sub>in</sub> 太阳能
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.5V(10秒)
</td>
</tr>
<tr align="center">
<td>
I<sub>charge</sub> (R<sub>Iset</sub>=3.9kΩ)
</td>
<td>
400mA
</td>
<td>
500mA
</td>
<td>
600mA
</td>
</tr>
<tr align="center">
<td>
I<sub>load</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
1000mA
</td>
</tr>
<tr align="center">
<td>
V<sub>batt</sub>(R<sub>x</sub>=0Ω)
</td>
<td colspan="3" rowspan="1">
4.2V
</td>
</tr>
<tr align="center">
<td>
V<sub>source USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
<tr align="center">
<td>
V<sub>destination USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
</table>

引脚定义和额定值
-------------------------

**引脚说明和 LED 状态**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>CH 引脚电平（红色 LED 状态）</th>
<th>OK 引脚电平（绿色 LED 状态）</th>
<th>状态</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>低电平（亮）</td>
<td>高电平（灭）</td>
<td>充电中</td>
</tr>
<tr class="even">
<td>高电平（灭）</td>
<td>低电平（最后亮）</td>
<td>充电完成</td>
</tr>
<tr class="odd">
<td>脉冲信号（闪烁）</td>
<td>脉冲信号（亮）</td>
<td>电池不存在</td>
</tr>
<tr class="even">
<td>高电平（灭）</td>
<td>高电平（灭）</td>
<td>两种情况：</td>
<ul>
<li>输入电压低于门限电压</li>
<li>输入电压低于电池电压</li>
</ul>
</tr>
</tbody>
</table>

**LED 电池指示灯**

LiPo Rider Pro 有四个 LED 电池指示灯，类似手机，您可以通过按下按钮 K2 来查看电池电量，如下所示：
![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo3.jpg)

**LED 电池指示灯参数**

| 指示灯亮起数量 | 电量百分比 |
|----------------|------------|
| 4              | 90~100%    |
| 3              | 60~90%     |
| 2              | 30~60%     |
| 1              | 10~30%     |
| 0              | 0~10%      |

使用方法
-----

**示例**

**户外传感器设备电源供应**

LiPo Rider Pro 板的一个重要应用是作为户外传感器的经济电源供应。户外传感器设备将由锂电池供电，并由太阳能板补充。请注意，不建议仅依靠太阳能为户外传感器供电，因为太阳能可能会在一天中变化，可能导致传感器意外重置或断电。在这种情况下，设备运行在“USB 模式”下。

如果需要对户外传感器设备进行固件重新编程，只需将迷你 USB 端口连接到您的 PC，这将使设备进入上述的“编程模式”。

可以使用更大的/多个电池和/或太阳能板，但仅限于用户自行修改。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo-Rider-pro.JPG)

**通过太阳能为锂聚合物电池充电**

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro1.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

- [CN3065 数据手册 PDF](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/DSE-CN3065.pdf)
- [原理图和布局（Eagle 格式）](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar)
- [原理图（PDF 格式）](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/LiPo_Rider_Pro_v0.9b.pdf)
- [使用 Lipo Rider Pro 为 iPod 或 iPhone 充电](https://forum.seeedstudio.com/viewtopic.php?f=4&t=3575)
- [锂离子聚合物电池组 - 6A](https://www.seeedstudio.com/Lithium-Ion-polymer-Battery-pack-6A-p-602.html)

## 项目

**PlantSigfox 监测**  
获取空气/土壤湿度、温度以及亮度（包括 RGB 光线）。它还发送定位信息，从而提供天气预报。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/plantsigfox-ei2i4/plantsigfox-monitoring-3d66be/embed' width='350'></iframe>

**通过 Arduino 实现的步态检测系统**  
该项目旨在检测车辆和人员通过果园入口的情况，并在房屋内发出警报声。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/juan-salvador-aleixandre-talens/step-detection-system-by-a-way-with-arduino-bc6f3a/embed' width='350'></iframe>

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