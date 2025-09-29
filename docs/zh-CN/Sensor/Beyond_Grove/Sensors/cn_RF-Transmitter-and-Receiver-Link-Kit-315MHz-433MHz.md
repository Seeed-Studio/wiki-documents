---
title: RF发射器和接收器链接套件 - 315MHz/433MHz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz/
slug: /cn/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz
last_update:
  date: 02/03/2022
  author: gunengyu
---

# RF发射器和接收器链接套件 - 315MHz/433MHz

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Front-05.png" alt="pir" width={600} height="auto" /></p>

这是一个超远距离的315MHz或433MHz射频链接套件，采用VCO和PLL技术，频率稳定且抗干扰能力强。您可以直接将其用于您的项目，例如无线数据传输和远程控制。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz-p-5077.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特点

- 低功耗：5V约6.0mA / 3.3V约5mA
- 高接收灵敏度：-110dBm@10kbps
- 长发射距离：2公里（开放区域无干扰）
- 宽温度范围：-20~75℃
- 灵活应用，适用于面包板和PCB
- 强辐射抑制能力：无互相干扰，不影响接收距离

## 规格

| 参数                 | 值/范围         |
|---------------------|----------------|
| 工作电压            | 发射器(3-9V)，接收器(3-5V) |
| 工作电流            | 50mA(9VDC)     |
| 工作原理            | 超外差（VCO，PLL）|
| 调制方式            | OOK/ASK        |
| 工作频段            | 315MHz；433.92MHz（可定制服务）|
| 工作温度            | -20℃至+75℃    |
| 带宽                | 200KHZ         |
| 灵敏度              | -110dBm (50Ω) |
| 调制速率            | ＜10Kbps       |
| 解码形式            | PT2272         |
| 天线长度            | 18cm(发射器)、24cm(接收器) |
| 发射距离            | 2KM（开放区域无干扰）|
| 工作输出模式        | 非锁定、互锁、自锁 |

## 应用场景

- 汽车遥控门开关
- 遥控门开器
- 无线安全报警
- 遥控窗帘机
- 无线工业控制器
- 无线数据传输
- 无线遥控模型
- 无线玩具控制

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Preview-07.png" alt="pir" width={1000} height="auto" /></p>

1. 发射器-引脚接口：7PIN（间距：2.54mm）  
2. 接收器-引脚接口：7PIN（间距：2.54mm）  
3. 发射天线（使用时需将天线拉直）  
4. 弹簧接收天线  

## 入门指南

在这里，我们将使用一个RF收发器套件、一个LED、一个开关按钮、一个开发板提供电源以及一些导线来实现一个简单的无线控制LED开关的演示。

- **步骤1.** 准备RF收发器套件、导线、面包板或开发板，以及与您想要实现的功能相关的其他组件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Component list diagram.png" alt="pir" width={1000} height="auto" /></p>

以我们的简单无线照明控制演示为例，我们将使用：

| 名称                | 数量 |
|--------------------|------|
| RF收发器套件       | *1   |
| 面包板             | *1   |
| LED                | *1   |
| 按键开关           | *1   |
| Seeeduino XIAO     | *1   |
| 导线               | 若干 |

- **步骤2.** 按照以下说明连接电路系统。

**注意：** 下图中使用了所有信号端口，但我们实际给出的电路连接仅使用了一个端口。

### 连接图

<p style={{textAlign: 'left'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Tx).png" alt="pir" width={390} height="auto" /></p>
<div>
  RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Rx).png" alt="pir" width="360" height="auto"&gt;<p />
</div>

### 实际电路连接图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Actual_circuit_connection_diagram.png" alt="pir" width={1000} height="auto" /></p>

**注意：** 在这个RF无线照明控制演示中，我们使用开发板Seeeduino XIAO（3.3V输出）作为通用电源系统，并在同一块板上构建发射模块和接收模块。在实际应用中，远程收发模块通常由它们自己的电源供电。例如，您可以直接使用电池组供电。

- **步骤3.** 给系统供电，按下按钮开关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Result.png" alt="pir" width={1000} height="auto" /></p>

**注意：** 您可以将RF无线灯光控制演示中的LED灯替换为您想要控制的对象，并使用多个信号端口实现对多种信号系统的无线控制。

您还可以使用演示中的Seeeduino XIAO实现更多功能，例如连接光传感器，使灯光根据光强度无线控制开关和亮度。这一过程可以无需手动操作发送信号。

## 资源

- **[数据手册]** [PT2272 和 PT2262 数据手册](https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/res/Datasheet_for_PT2272_and_PT2262.pdf)

## 技术支持与产品讨论

如果您遇到任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>