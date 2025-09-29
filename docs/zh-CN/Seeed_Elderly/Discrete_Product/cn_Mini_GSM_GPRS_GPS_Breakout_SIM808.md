---
description: Mini GSM/GPRS GPS Breakout SIM808
title: Mini GSM/GPRS GPS Breakout SIM808
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Mini_GSM_GPRS_GPS_Breakout_SIM808
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## 概述  

该开发板基于最新的 SIMCOM SIM808 GSM/GPS 模块，提供蜂窝 GSM 和 GPRS 数据连接，同时支持 GPS 技术用于卫星导航。

该开发板在睡眠模式下具有超低功耗，使项目具有极长的待机时间。此外，板载电池充电电路可与 LiPo 电池一起使用。

GPS 接收器具有极高的灵敏度，支持 22 个跟踪通道和 66 个捕获通道，同时支持辅助 GPS (A-GPS) 用于室内定位。开发板通过 UART 使用 AT 指令进行控制，并支持 3.3V 和 5V 逻辑电平。它配备了迷你 GPS 和 GSM 天线，但电池为可选项。

该开发板使用 2G GSM 网络（不支持 3G 或 LTE）。

## 特性

- 四频段 850/900/1800/1900MHz

- GPRS 多时隙 class12 连接：最大 85.6kbps（下载/上传）

- GPRS 移动站 class B

- 通过 AT 指令控制（3GPP TS 27.007、27.005 和 SIMCOM 增强 AT 指令）

- 支持锂离子电池充电控制

- 支持实时时钟

- 电源电压范围 3.4V ~ 4.4V

- 集成 GPS/CNSS 并支持 A-GPS

- 支持 3.0V 至 5.0V 逻辑电平

- 低功耗，睡眠模式下仅 1mA

- 支持 GPS NMEA 协议

- 紧凑尺寸 27mm x 46mm x 10mm

- 标准 SIM 卡

## GPS 规格

- 接收通道：22 个跟踪 / 66 个捕获

- 粗码/捕获码：GPS L1

- 跟踪灵敏度：-165dBm

- 冷启动时间：30 秒（典型值）

- 热启动时间：1 秒（典型值）

- 温启动时间：28 秒（典型值）

- 水平位置精度：&lt; 2.5m CEP

- 功耗 - 捕获：42mA

- 功耗 - 持续跟踪：24mA

- 更新速率：5Hz

## 功能模块  

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Lonet_pcb_top.jpg)

- GPS 天线：这是一个 uFL GPS 天线连接器。您可以连接被动或主动 GPS 天线。主动 GPS 天线运行电压为 2.8V。

- MicroUSB：锂离子电池的充电接口，输入电压范围为 5V 至 7V。

- 电源按钮：这是模块的硬电源开关。当模块通电时，您可以通过按下按钮 2 秒来打开或关闭模块。

- 网络指示灯：红色 LED，指示模块连接网络的状态。可以通过 LEDs_EN 跳线关闭。

- 状态指示灯：绿色 LED，指示模块是否运行，模块运行时亮起。可以通过 LEDs_EN 跳线关闭。

- 锂离子电池：模块的电源供应，输入电压范围为 3.4V 至 4.4V。使用 JST-2.0mm 连接器，方便连接 3.7V Li-Po 电池。

- GSM 天线：这是一个 uFL GSM 天线连接器，只需连接到 GSM 天线以接收 GSM 信号。

- SIM 卡座：标准 SIM 卡的卡座。

### 引脚定义

<table>
<tr>
<th scope="col">名称</th>
<th scope="col">I/O</th>
<th scope="col">描述</th>
<th scope="col">备注</th>
</tr>
<tr>
<td>BAT</td>
<td></td>
<td>电源输入/输出</td>
<td>3.4V - 4.4V DC</td>
</tr>
<tr>
<td>GND</td>
<td></td>
<td>电源地/逻辑地</td>
<td></td>
</tr>
<tr>
<td>VIO</td>
<td>I</td>
<td>逻辑电平参考</td>
<td>3.0V - 5.0V DC</td>
</tr>
<tr>
<td>DTR</td>
<td>I</td>
<td>睡眠模式下唤醒模块的引脚</td>
<td></td>
</tr>
<tr>
<td>PWR</td>
<td>O</td>
<td>电源开关</td>
<td>低电平脉冲</td>
</tr>
<tr>
<td>RI</td>
<td>O</td>
<td>事件/消息引脚</td>
<td></td>
</tr>
<tr>
<td>TXD</td>
<td>O</td>
<td>发送数据</td>
<td>SIM808 的 UART 输出</td>
</tr>
<tr>
<td>RXD</td>
<td>I</td>
<td>接收数据</td>
<td>SIM808 的 UART 输入</td>
</tr>
<tr>
<td>RST</td>
<td>I</td>
<td>模块复位</td>
<td></td>
</tr>
</table>

### 指示灯状态

<table>
<tr>
<th scope="col">指示灯</th>
<th scope="col">状态</th>
<th scope="col">行为</th>
</tr>
<tr>
<td>运行状态（绿色）</td>
<td>关闭</td>
<td>SIM808 未运行</td>
</tr>
<tr>
<td></td>
<td>开启</td>
<td>SIM808 正在运行</td>
</tr>
<tr>
<td>网络状态（红色）</td>
<td>关闭</td>
<td>SIM808 未运行</td>
</tr>
<tr>
<td></td>
<td>64ms 开/800ms 关</td>
<td>SIM808 未注册到网络</td>
</tr>
<tr>
<td></td>
<td>64ms 开/3000ms 关</td>
<td>SIM808 已注册到网络</td>
</tr>
<tr>
<td></td>
<td>64ms 开/300ms 关</td>
<td>PPP GPRS 通信已建立</td>
</tr>
</table>

## 使用方法  

### 相关产品  

该模块配备了一个迷你 GPS 和 GSM 天线，但不包括锂聚合物电池。此外，要使用该模块，您还需要一张支持 GPRS 服务的解锁 SIM 卡。

- 3.7 V 锂离子电池  
- SIM 卡  
- USB 转 UART 工具  

### 参考电路  

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Rerfer_Circuit_SIM808.png)

### 使用 AT 指令入门  

该模块通过串口使用 AT 指令进行控制，这里我们使用 Arduino 作为 USB 转串口工具。将以下代码上传到 Arduino 并打开串口监视器。如果您使用其他 USB 转串口工具，可以使用 [AT Command Tester](https://seeeddoc.github.io/AT_Command_Tester_Application/) 或 [SSCOM32](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/Sscom32E.zip) 测试 AT 指令。

```c
// 此代码用于使用 Arduino 测试 LoNet

// 将 VIO 连接到 +5V
// 将 GND 连接到地
// 将 RX（数据输入 SIM808）连接到数字 11
// 将 TX（数据输出 SIM808）连接到数字 10

#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX

void setup()  
{
  // 打开串口通信并等待端口打开：
  Serial.begin(9600);
  mySerial.begin(9600);

}

void loop() // 循环运行
{
  if (mySerial.available())
    Serial.write(mySerial.read());

  if (Serial.available())
  {
    while(Serial.available())
    {
      mySerial.write(Serial.read());
    }
    mySerial.println();
  }
}
```

#### 设置波特率并启用充电功能  

建议在首次使用模块时执行此过程。在以下表格的串口监视器列中，AT 指令的输入为黑色，模块返回的值为橙色。

<table cellPadding="0">
<tr>
<th scope="col" width="50"> 串口监视器</th>
<th scope="col" width="100"> 描述</th>
</tr>
<tr>
<td> AT <span style={{color: 'rgb(242,133,0)'}}>OK</span> </td>
<td> 发送命令 "AT" 用于同步波特率。模块的串口默认设置为自动波特率模式，在此模式下，模块上电时不会输出任何提示信息。</td>
</tr>
<tr>
<td> AT+IPR=9600 <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td> 将波特率设置为 9600bps，支持从 1200bps 到 115200bps 的波特率。</td>
</tr>
<tr>
<td> AT+ECHARGE=1 <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td> 发送命令 "AT+ECHARGE=1" 以开启电池充电功能。默认情况下充电功能是关闭的。</td>
</tr>
<tr>
<td> AT&amp;W <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td> 保存参数设置。</td>
</tr>
<tr>
<td> AT+CPOWD=1 <span style={{color: 'rgb(242,133,0)'}}>NORMAL POWER DOWN</span></td>
<td>关闭模块电源。</td>
</tr>
<tr>
<td>
<span style={{color: 'rgb(242,133,0)'}}>RDY
+CFUN: 1
GPS Ready
+CPIN: READY
Call Ready
SMS Ready</span>
</td>
<td>通过电源按钮再次打开模块，它将返回关于 GPS 和 GSM 的状态。</td>
</tr>
<tr>
<td> AT+CBC <span style={{color: 'rgb(242,133,0)'}}> +CBC: 1,96,4175 OK</span></td>
<td>查询充电状态和剩余电池容量。</td>
</tr>
<tr>
<td> AT+CSQ <span style={{color: 'rgb(242,133,0)'}}> +CSQ: 14,0 OK</span></td>
<td>查询 GSM 信号质量。</td>
</tr>
</table>

#### 使用 GPS 获取位置  

<table cellPadding="0">
<tr>
<th scope="col" width="11"> 串口监视器</th>
<th scope="col" width="700"> 描述</th>
</tr>
<tr>
<td> AT+CGPSPWR=1 <span style={{color: 'rgb(242,133,0)'}}>OK</span> </td>
<td> 打开 GPS</td>
</tr>
<tr>
<td> AT+CGPSSTATUS? <span style={{color: 'rgb(242,133,0)'}}> +CGPSSTATUS: Location Not FixOK</span></td>
<td> 读取 GPS 定位状态，"Location Not Fix" 表示定位未成功。首次启动至少需要 30 秒。_**GPS 必须在窗边或室外测试。**_</td>
</tr>
<tr>
<td> AT+CGPSSTATUS? <span style={{color: 'rgb(242,133,0)'}}> +CGPSSTATUS: Location 3D Fix OK</span></td>
<td> GPS 已完成 3D 定位。</td>
</tr>
<tr>
<td> AT+CGPSINF=0 <span style={{color: 'rgb(242,133,0)'}}> +CGPSINF: 0,2234.931817,11357.122485,92.461185,20141031041141.000,88,12,0.000000,0.000000 </span></td>
<td> 获取当前 GPS 位置信息。参数格式：&lt;mode&gt;, &lt;altitude&gt;, &lt;longitude&gt;, &lt;UTC time&gt;, &lt;TTFF&gt;, &lt;num&gt;, &lt;speed&gt;, &lt;course&gt;</td>
</tr>
<tr>
<td>
AT+CGPSOUT=32
<span style={{color: 'rgb(242,133,0)'}}>OK
\$GPRMC,043326.000,A,
2234.9414,N,11357.1187,E,
0.000,143.69,311014,,,A*50 </span>
</td>
<td> 读取 NMEA \$GPRMC 数据，其中 "2234.9414 N, 11357.1187 E" 是定位坐标。更多关于 NMEA 语句的详细信息，请[查看此网站](http://www.gpsinformation.org/dale/nmea.htm)。</td>
</tr>
<tr>
<td>
AT+CGPSRST=0
<span style={{color: 'rgb(242,133,0)'}}> OK</span>
</td>
<td>以冷启动模式重置 GPS。</td>
</tr>
<tr>
<td> AT+CGPSRST=1 <span style={{color: 'rgb(242,133,0)'}}> OK</span></td>
<td>以热启动模式重置 GPS。</td>
</tr>
<tr>
<td> AT+CGPSPWR=0 <span style={{color: 'rgb(242,133,0)'}}> OK</span></td>
<td>关闭 GPS。</td>
</tr>
</table>

## 资源  

- **[PDF]** [LoNet_设计原理图](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/LoNet_DesignSchematic.pdf)

- **[PDF]** [SIM800_AT指令手册](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM800_ATCommand_Manual_V1.02.pdf)

- **[PDF]** [SIM808_硬件设计手册](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM808_Hardware_Design_V1.00.pdf)

- **[PDF]** [SIM808_GPS应用说明](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM808_GPS_Application_Note_V1.00.pdf)

- **[库]** [GPRS_Shield库在GitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)

- **[库]** [Adafruit_FONA库](https://github.com/adafruit/Adafruit_FONA_Library/)

## 相关项目  

很遗憾，我们目前在 [Recipe](https://www.seeedstudio.com/recipe/) 中还没有关于 LoNet-GSM/GPRS/GPS Breakout 的演示项目。

发布您的关于 LoNet-GSM/GPRS/GPS Breakout 的精彩项目，<font color="#FF0000">赢取 $100 优惠券！</font> 请随时联系我们：**recipe@seeed.cc**

这里我们介绍一些关于 [GPRS Shield](https://www.seeedstudio.com/depot/GPRS-Shield-V30-p-2333.html) 的项目作为参考。

### 什么是 GPRS Shield  

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/113030009_1.jpg)

特点：

- 兼容标准 Arduino 和 Arduino Mega

- 支持四频段：850/900/1800/1900MHz

- 通过 AT 指令集完全控制：标准 - GSM 07.07 &amp; 07.05 和增强 - SIMCOM AT 指令

- 支持 TCP/UDP 协议

### SMS 远程控制  

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/54c720959dae7.JPG)

该项目描述了如何通过 SMS 开关热水器，并检查其状态。

它可靠、安全、简单且灵活，原因如下：

- 命令总是会收到响应，丢失的消息会被重新请求

- 使用 128 位密码保护

- pfodDesigner 生成所有代码，您可以用它创建自己的自定义菜单

- 所有 pfod 屏幕都可以通过 SMS 访问，例如子菜单、多选和单选列表、文本输入、数据记录和绘图

[**我想制作它。**](https://www.seeedstudio.com/recipe/98-sms-remote-control.html)

### Arduino 手机  

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Recipe-arduinophone.png)

Arduino 手机是通过结合 Arduino 和其他扩展模块制作的手机。

该项目告诉我们，当 Arduino 手机应用无法满足您的需求时，您需要做什么。

这个 Arduino 手机包含以下主要功能：

- 接收和发送消息，文字输入

- 拨打和接听电话

- 实时时钟显示

- 一个方便简洁的用户界面

[**我想制作它。**](https://www.seeedstudio.com/recipe/37-arduinophone.html)

[**更多精彩的 GPRS 项目**](https://www.seeedstudio.com/recipe/index.php?query=GPRS)

### 与我们分享您的精彩项目  

怀着创造和分享的精神，这是我们认为让创客社区充满活力的原因。

正因为如此，开源社区才能如此繁荣。

无论您是谁，无论您制作了什么，无论是黑客、创客、艺术家还是工程师。

只要您开始与他人分享您的作品，您就成为了开源社区的一部分，并为其做出了贡献。

现在在 [Recipe](https://www.seeedstudio.com/recipe/) 上与我们分享您的精彩项目，并赢得成为 Seeed 核心用户的机会。

- 核心用户是那些对 Seeed 产品表现出高度兴趣并在 Recipe 上做出重要贡献的人。
- 我们与核心用户合作开发新产品，换句话说，核心用户将有机会在产品正式发布前体验 Seeed 的任何新产品，并且我们期待他们提供有价值的反馈，以帮助我们改进产品性能和用户体验。在大多数情况下，当我们的核心用户有一些好的创意时，我们会提供硬件组件、PCBA 服务以及技术支持。此外，与核心用户进一步的商业合作也是非常可能的。

<font color="#FF0000">获取更多关于核心用户的信息，请发送邮件至：</font> **recipe@seeed.cc**

## 支持

如需技术支持，请联系 [_support@deegou.com_](http://www.deegou.com)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
