---
title: DSO Quad：校准
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/DSO_Quad-Calibration/
slug: /cn/DSO_Quad-Calibration
last_update:
  date: 02/03/2022
  author: gunengyu
---

校准包括以下部分：

* 直流校准，包括：

* 零偏移

* 增益

* 交流校准（斜率响应、过冲）

* 对于 1 ... 10V/div

* 对于 50 ... 500mV/div
* 对于 x10 探头

## 零偏移

此校准几乎是自动完成的。DSO 应处于正常工作温度，因此您应该提前至少打开约 10 分钟。在“保存/调用”菜单中选择“Calibr”（“方形”按钮，滚动到最后一项，按 -/+ 按钮）后，系统会要求您将 CH_A 输入短接到 GND。如果您使用探头，应将其设置为“x1”模式，而不是“x10”。通过按“方形”按钮启动。几秒钟后完成，并等待增益校准的第一步。如果您不想在此处进行增益校准，可以通过导航器的“右箭头”浏览所有范围，而无需使用 -/+ 调整任何内容。然后您可以重复（方形按钮）或通过导航器的“右箭头”进入“下一步操作”，并对 CH_B 进行零调整。附加信息：即使输入电压为零，实际放大器的输出也会有一个小的非零值。而且如果更改范围的电阻器，这个值也会发生变化。在此处为每个范围评估零偏移值，并在未来通过数字部分加/减该偏移值进行校正。

## 增益校准

增益校准需要额外的外部硬件！在每个范围内，需要施加一个已知的直流电压，约为满量程范围的 80 ... 100%。例如，“满量程范围” 50mV/div * 6 div = 0.3V 或 10V/div * 6 div = 60V。因此，您需要以下电压：

```
0.25... 0.3 V 对于 50mV/div 范围
0.5 ... 0.6 V 对于 0.1V/div 范围
1.0 ... 1.2 V 对于 0.2V/div 范围
2.5 ... 3.0 V 对于 0.5V/div 范围
5.0 ... 6.0 V 对于   1V/div 范围
10  ... 12  V 对于   2V/div 范围
25  ... 30  V 对于   5V/div 范围
50  ... 60  V 对于  10V/div 范围
```

我建议使用一些电阻器作为分压器，并使用电压万用表测量电压。请注意，非常便宜的万用表通常不准确。但价格在 25 ... 40 欧元（或美元）的万用表应该足够准确。较低的电压可以例如从 USB 充电器获取，或者您可能有例如 12V 电源或 19V 笔记本电源。50 ... 60V 可能是最难获得的。但您可以仅校准较小的范围，并在较高范围内保持较差的精度。对于较高电压的可能解决方案是使用 DC/DC 转换器，例如两个 5V 转 24V 转换器，每个价格约为 5 欧元。输出电流 5mA 即可。一种可以用 5V 供电的完整电路可能如下所示：[[[1]](https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/res/GainCalibrationCircuit.PNG)] 给定的输出值可能会因输入电压和电阻器公差而有所变化。但会在上述所需范围内。**注意：** 54V 是危险电压！

使用此设备，您可以将万用表和 DSO 的通道逐步连接到该电路的输出，并使用 -/+ 调整 DSO 值与万用表值相同。

## 交流校准

虽然直流校准是在 DSO 的数字部分中应用的，但交流校准是通过更改硬件中一些电容器的值来完成的。电容器的分压比需要与电阻器的分压比匹配。

![](https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/img/DSO203_AC-Cal_Circuit_Diagr.PNG)。

Quad DSO 的校准过程已经描述，例如在这里：[[2]](http://neophob.com/2012/03/dso-quad-for-dummies/) 它使用内置的方波输出。对于 Ch_A，首先将探头设置为 x1，并在 1V/div 范围内调整 A1 (=C5A)。然后在 500mV/div 范围内调整 A2 (C3A)。然后再次检查 A1 设置，然后再次检查 A2，因为每个设置都会稍微影响另一个。最后将探头设置为 x10，选择合适的范围并调整 A3。

## 另请参阅

* [DSO Quad](/cn/DSO_Quad "DSO Quad")

* [DSO Quad：升级固件](/cn/DSO_Quad-Building_Firmware "DSO Quad：升级固件")

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>