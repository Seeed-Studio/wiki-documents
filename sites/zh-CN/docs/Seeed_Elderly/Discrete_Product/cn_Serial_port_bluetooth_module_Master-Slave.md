---
description: 串口蓝牙模块（主/从）
title: 串口蓝牙模块（主/从）
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Serial_port_bluetooth_module_Master-Slave
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/newblue_LRG.jpg)

该模块是一款易于使用的蓝牙 SPP（串口协议）模块，设计用于透明的无线串口连接。

串口蓝牙模块完全符合蓝牙 V2.0+EDR（增强数据速率）标准，支持 3Mbps 调制，集成了完整的 2.4GHz 无线收发器和基带。它采用 CSR Bluecore 04-External 单芯片蓝牙系统，使用 CMOS 技术并具有 AFH（自适应频率跳跃功能）。其尺寸仅为 12.7mm x 27mm，希望能够简化您的整体设计/开发周期。

**型号: [WLS123A1M](https://www.seeedstudio.com/depot/serial-port-bluetooth-module-masterslave-p-572.html?cPath=139_142)**

## 特性

### 硬件特性

* 典型 -80dBm 灵敏度
* 高达 +4dBm RF 发射功率
* 低功耗 1.8V 操作，1.8 至 3.6V I/O
* PIO 控制
* 可编程波特率的 UART 接口
* 集成天线
* 边缘连接器

### 软件特性

* 默认波特率：38400，数据位：8，停止位：1，校验：无校验，数据控制：是。支持的波特率：

9600, 19200, 38400, 57600, 115200, 230400, 460800。

* 使用 CTS 和 RTS 控制数据流。
* 在 PIO0 上给出一个上升脉冲，设备将断开连接。
* 状态指示端口 PIO1：低-断开连接，高-已连接；
* PIO10 和 PIO11 可分别连接到红色和蓝色 LED。当主从配对时，红色和蓝色 LED 每 2 秒闪烁一次。断开连接时，仅蓝色 LED 每秒闪烁两次。

* 默认情况下，设备上电后自动连接到最后一个设备。
* 默认允许配对设备连接。
* 默认自动配对 PINCODE：“0000”。
* 当因超出连接范围而断开时，30 分钟内自动重新连接。

## 应用场景

* 遥控器
* 无线通信

## 注意事项

* 在与 Seeeduino / Arduino 一起使用时，将工作电压设置为 5V。否则请使用适当的逻辑电平转换器。
* 在与 UartSBee 一起使用时，将工作电压设置为 5V。
* 更改波特率的命令在重置后仍然有效。因此，请记住下次使用的波特率。

## 规格

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-module-pin.JPG)

<table>
<tr>
<th>引脚</th>
<th>#</th>
<th>焊盘类型</th>
<th>描述</th>
</tr>
<tr>
<td width="100px">PIO11</td>
<td width="100px">34</td>
<td width="350px">双向</td>
<td width="450px">可编程输入/输出线</td>
</tr>
<tr>
<td>PIO10</td>
<td>33</td>
<td>双向</td>
<td>可编程输入/输出线</td>
</tr>
<tr>
<td>PIO9</td>
<td>32</td>
<td>双向</td>
<td>可编程输入/输出线</td>
</tr>
<tr>
<td>PIO8</td>
<td>31</td>
<td>双向</td>
<td>可编程输入/输出线</td>
</tr>
<tr>
<td>PIO7</td>
<td>30</td>
<td>双向</td>
<td>可编程输入/输出线</td>
</tr>
<tr>
<td>PIO6</td>
<td>29</td>
<td>双向</td>
<td>可编程输入/输出线</td>
</tr>
<tr>
<td>PIO5</td>
<td>28</td>
<td>双向</td>
<td>可编程输入/输出线</td>
</tr>
<tr>
<td>PIO4</td>
<td>27</td>
<td>双向</td>
<td>可编程输入/输出线</td>
</tr>
<tr>
<td>PIO3</td>
<td>26</td>
<td>双向</td>
<td>可编程输入/输出线</td>
</tr>
<tr>
<td>PIO32</td>
<td>25</td>
<td>双向</td>
<td>可编程输入/输出线</td>
</tr>
<tr>
<td>PIO1</td>
<td>24</td>
<td>双向 TX EN</td>
<td>可编程输入/输出线，用于控制 PA（如果安装）</td>
</tr>
<tr>
<td>PIO0</td>
<td>23</td>
<td>双向 RX EN</td>
<td>可编程输入/输出线，用于控制 LNA（如果安装）</td>
</tr>
<tr>
<td>GND</td>
<td>13,21,22</td>
<td>VSS</td>
<td>接地端</td>
</tr>
<tr>
<td>USB±</td>
<td>15,20</td>
<td>双向</td>
<td></td>
</tr>
<tr>
<td>SPI_CLK</td>
<td>19</td>
<td>CMOS 输入，带弱内部下拉</td>
<td>串行外设接口时钟</td>
</tr>
<tr>
<td>SPI_MISO</td>
<td>18</td>
<td>CMOS 输入，带弱内部下拉</td>
<td>串行外设接口数据输出</td>
</tr>
<tr>
<td>SPI_MOSI</td>
<td>17</td>
<td>CMOS 输入，带弱内部下拉</td>
<td>串行外设接口数据输入</td>
</tr>
<tr>
<td>SPI_CSB</td>
<td>16</td>
<td>CMOS 输入，带弱内部上拉</td>
<td>串行外设接口芯片选择，低电平有效</td>
</tr>
<tr>
<td>NC</td>
<td>14</td>
<td></td>
<td></td>
</tr>
<tr>
<td>3.3VCC</td>
<td>12</td>
<td>3.3V</td>
<td>集成 3.3V（+）电源，带片上线性稳压器输出，范围为 3.15-3.3V</td>
</tr>
<tr>
<td>RESETB</td>
<td>11</td>
<td>CMOS 输入，带弱内部上拉</td>
<td>低电平复位（外部保持）</td>
</tr>
</table>

## 软件说明  

#### 工作示意图  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-1.jpg)

#### 流程图  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-2.jpg)

#### 更改默认配置的命令  

**1. 设置工作模式**

<table>
<tr>
<td width="200px">\r\n+STWMOD=0\r\n</td>
<td width="400px">将设备工作模式设置为客户端（从机）。保存并重启。</td>
</tr>
<tr>
<td>\r\n+STWMOD=1\r\n</td>
<td>将设备工作模式设置为服务器（主机）。保存并重启。</td>
</tr>
</table>

**注意：** **\r\n** 是操作所必需的，其值在十六进制中为 **0x0D 0x0A**。**\r** 和 **\n** 分别表示 **回车** 和 **换行**（或下一行）。

**2. 设置波特率**

<table>
<tr>
<td width="200px">\r\n+STBD=115200\r\n</td>
<td width="400px">设置波特率为 115200。保存并重启。</td>
</tr>
<tr>
<td colspan="2">支持的波特率：9600、19200、38400、57600、115200、230400、460800。</td>
</tr>
</table>

**3. 设置设备名称**

<table>
<tr>
<td width="200px">\r\n+STNA=abcdefg</td>
<td width="400px">将设备名称设置为 "abcdefg"。保存并重启。</td>
</tr>
</table>

**4. 开机自动连接最后配对的设备**

<table>
<tr>
<td width="200px">\r\n+STAUTO=0\r\n</td>
<td width="400px">禁止自动连接。保存并重启。</td>
</tr>
<tr>
<td width="200px">\r\n+STAUTO=1\r\n</td>
<td width="400px">允许自动连接。保存并重启。</td>
</tr>
</table>

**5. 允许配对设备连接我**

<table>
<tr>
<td width="200px">\r\n+STOAUT=0\r\n</td>
<td width="400px">禁止。保存并重启。</td>
</tr>
<tr>
<td width="200px">\r\n+STOAUT=1\r\n</td>
<td width="400px">允许。保存并重启。</td>
</tr>
</table>

**6. 设置 PIN 码**

<table>
<tr>
<td width="200px">\r\n +STPIN=2222\r\n</td>
<td width="400px">设置 PIN 码为 "2222"，保存并重启。</td>
</tr>
</table>

**7. 删除 PIN 码（通过 MCU 输入 PIN 码）**

<table>
<tr>
<td width="200px">\r\n+DLPIN\r\n</td>
<td width="400px">删除 PIN 码。保存并重启。</td>
</tr>
</table>

**8. 读取本地地址码**

<table>
<tr>
<td width="200px">\r\n+RTADDR\r\n</td>
<td width="400px">返回设备地址。</td>
</tr>
</table>

**9. 主设备超出有效范围时自动重新连接（从设备将在超出有效范围后 30 分钟内自动重新连接）**

<table>
<tr>
<td width="200px">\r\n+LOSSRECONN=0\r\n</td>
<td width="400px">禁止自动重新连接。</td>
</tr>
<tr>
<td width="200px">\r\n+LOSSRECONN=1\r\n</td>
<td width="400px">允许自动重新连接。</td>
</tr>
</table>

#### 正常操作的命令：  

**1. 查询**

<table>
<tr>
<td colspan="2" width="600px">**a) 主机**</td>
</tr>
<tr>
<td width="200px">\r\n+INQ=0\r\n</td>
<td width="400px">停止查询</td>
</tr>
<tr>
<td>\r\n+INQ=1\r\n</td>
<td>开始/重新开始查询</td>
</tr>
<tr>
<td colspan="2" width="600px">**b) 从机**</td>
</tr>
<tr>
<td>\r\n+INQ=0\r\n</td>
<td>禁止被查询</td>
</tr>
<tr>
<td>\r\n+INQ=1\r\n</td>
<td>允许被查询</td>
</tr>
</table>

当 **+INQ=1** 命令成功时，红色和绿色 LED 将交替闪烁。

**2. 蓝牙模块返回查询结果**

<table>
<tr>
<td width="250px">\r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n</td>
<td width="500px">查询到地址为 "aa,bb,cc,dd,ee,ff" 且名称为 "name" 的串口蓝牙设备</td>
</tr>
</table>

**3. 连接设备**

<table>
<tr>
<td width="250px">\r\n+CONN=aa,bb,cc,dd,ee,ff\r\n</td>
<td width="500px">连接地址为 "aa,bb,cc,dd,ee,ff" 的设备</td>
</tr>
</table>

**4. 蓝牙模块请求输入 PIN 码**

\r\n+INPIN\r\n

**5. 输入 PIN 码**

<table>
<tr>
<td colspan="2">\r\n+RTPIN=code\r\n</td>
</tr>
<tr>
<td>示例：RTPIN=0000</td>
<td>输入 PIN 码为四个零</td>
</tr>
</table>

**6. 断开设备连接** 将 PIO0 拉高将断开当前工作的蓝牙设备。

**7. 返回状态** \r\n+BTSTA:**xx**\r\n  
 **xx** 状态：

*   0 - 初始化中
*   1 - 准备就绪
*   2 - 查询中
*   3 - 连接中
*   4 - 已连接

(**注意：** 这不是命令，而是模块在每次命令后返回的信息)  

## 额外想法  

*   [如何设置 PC 与串口蓝牙 Grove 连接](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637)

*   [逐步设置两个蓝牙模块之间的连接](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

## 资源  

- **[软件]**   [软件说明](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/res/Bluetooth_Software_Instruction.pdf)

- **[数据手册]**  [蓝牙模块数据手册](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/res/Bluetooth_module.pdf)

## 支持  

如果您有任何问题或更好的设计想法，可以前往我们的 [论坛](https://www.seeedstudio.com/forum) 或 **许愿** 进行讨论。

## 如何购买  

点击这里购买：[串口蓝牙模块（主/从）](https://www.seeedstudio.com/depot/serial-port-bluetooth-module-masterslave-p-572.html?cPath=139_142)

## 相关产品  

*   [Grove - 串口蓝牙](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html?cPath=139_142)

*   [Bluetooth Bee - 独立版](https://www.seeedstudio.com/depot/bluetooth-bee-standalone-p-1157.html?cPath=139_142)

*   [蓝牙扩展板](https://www.seeedstudio.com/depot/bluetooth-shield-p-866.html?cPath=132_134)

*   [Bluetooth Bee](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142)

## 许可  

本文档采用 Creative Commons [署名-相同方式共享 3.0 许可协议](http://creativecommons.org/licenses/by-sa/3.0/)。源代码和库采用 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 许可协议，详情请参阅源代码文件。

## 外部链接  

链接到提供更多应用创意、文档/数据手册或软件库的外部网页。

## 相关项目  

如果您想使用串口蓝牙模块制作一些很棒的项目，这里有一些参考项目。

### 使用安卓应用控制多个舵机电机  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Control_Multiple_servo_Motor_From_android_app.jpg)

这是一个由 Arduino 和 [Grove](https://seeeddoc.github.io/Grove_System/) 制作的有趣演示。  
这是一个完整的教程，讲解如何通过安卓应用控制多个舵机电机。

[**我想制作它。**](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html)

### 与我们分享您的精彩项目  

怀着创造和分享的精神，这是我们认为让创客社区充满活力的原因。

正因为如此，开源社区才能像今天这样繁荣。

无论您是谁，无论您制作了什么，黑客、创客、艺术家或工程师，

只要您开始与他人分享您的作品，

您就是开源社区的一部分，并为其做出了贡献。

现在在 [Recipe](https://www.seeedstudio.com/recipe/) 上与我们分享您的精彩项目，并赢得成为 Seeed 核心用户的机会。

*   核心用户是那些对 Seeed 产品表现出高度兴趣并做出显著贡献的人。
*   我们与核心用户合作开发新产品，换句话说，核心用户将有机会在产品正式发布前体验 Seeed 的任何新产品，并且我们期待他们提供有价值的反馈，以帮助我们改进产品性能和用户体验。在大多数情况下，如果核心用户有任何好的创意，我们将提供硬件组件、PCBA 服务以及技术支持。此外，与核心用户进一步的商业合作也是非常可能的。

<font color="#FF0000">获取更多关于核心用户的信息，请发送邮件至：recipe@seeed.cc</font>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>