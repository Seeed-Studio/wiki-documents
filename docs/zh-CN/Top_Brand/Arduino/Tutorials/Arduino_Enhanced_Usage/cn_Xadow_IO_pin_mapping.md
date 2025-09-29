---
description: Xadow IO 引脚映射
title: Xadow IO 引脚映射
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_IO_pin_mapping
last_update:
  date: 1/16/2023
  author: jianjing Huang
---
<!-- ---
name: Xadow IO pin mapping
category: Tutorial
bzurl:
oldwikiname:  Xadow IO pin mapping
prodimagename:
surveyurl: https://www.research.net/r/Xadow_IO_pin_mapping
sku:
--- -->

所有引脚信息的单一参考页面，包括：

* 如何在 Arduino 代码中使用每个引脚

* Xadow FFC 到 Atmega32u4 引脚映射

* 具有中断和定时器的引脚

* 2 个串行端口、IIC 和 ISP
* 可能被破解的额外板载 IO

这些表格提供了数据的不同视图，在您规划使用哪些模块和哪些 IO 引脚进行直接使用时特别有用！

## Xadow FFC IO 总线以及匹配的 Arduino 和 Atmega 信息和示例 Arduino 代码

<table>
<tr>
<td colspan="4"> <strong>Xadow FFC 引脚</strong></td>
<td colspan="2"> <strong>Arduino</strong></td>
<td colspan="2"> <strong>Atmega32u4 引脚</strong></td>
<td></td>
</tr>
<tr>
<td> <strong>名称</strong></td>
<td> <strong>IO 功能</strong></td>
<td> <strong>替代用途</strong></td>
<td> <strong>#</strong></td>
<td> <strong>IO 引脚</strong></td>
<td> <strong>代码示例</strong></td>
<td> <strong>名称（<strong>中断用红色标示</strong>）</strong></td>
<td> <strong>#</strong></td>
<td> <strong>备注</strong></td>
</tr>
<tr>
<td> P1</td>
<td> 数字引脚</td>
<td> ISP SCK</td>
<td> 1</td>
<td> <strong>15</strong></td>
<td> PinMode(15, OUTPUT); digitalWrite(15, HIGH);</td>
<td> PB1<strong>(PCINT1</strong>/SCLK)</td>
<td> 9</td>
<td> ISP SMD 接头焊盘也在 Xadow 主板背面</td>
</tr>
<tr>
<td> P2</td>
<td> 数字引脚</td>
<td> ISP MOSI</td>
<td> 2</td>
<td> <strong>16</strong></td>
<td> PinMode(16, OUTPUT); digitalWrite(16, HIGH);</td>
<td> PB2(PDI/<strong>PCINT2</strong>/MOSI)</td>
<td> 10</td>
</tr>
<tr>
<td> P3</td>
<td> 数字引脚</td>
<td> ISP MISO</td>
<td> 3</td>
<td> <strong>14</strong></td>
<td> PinMode(14, OUTPUT); digitalWrite(14, HIGH);</td>
<td> PB3(PDO/<strong>PCINT3</strong>/MISO)</td>
<td> 11</td>
</tr>
<tr>
<td> P4</td>
<td> 模拟引脚</td>
<td> 数字引脚！</td>
<td> 4</td>
<td> <strong>A5</strong></td>
<td> analogWrite(A5, 128); pinMode(A5, OUTPUT); digitalWrite(A5, HIGH);</td>
<td> PF0(ADC0)</td>
<td> 41</td>
<td> Arduino 模拟引脚也可以用作数字引脚！</td>
</tr>
<tr>
<td> P5</td>
<td> 数字引脚</td>
<td> IIC SCL</td>
<td> 9</td>
<td> <strong>3</strong></td>
<td> PinMode(3, OUTPUT); digitalWrite(3, HIGH);</td>
<td> PD0(OC0B/SCL/<strong>INT0</strong>)</td>
<td> 18</td>
<td></td>
</tr>
<tr>
<td> P6</td>
<td> 数字引脚</td>
<td> IIC SDA</td>
<td> 10</td>
<td> <strong>2</strong></td>
<td> PinMode(2, OUTPUT); digitalWrite(2, HIGH);</td>
<td> PD1 (SDA/<strong>INT1</strong>)</td>
<td> 19</td>
<td></td>
</tr>
<tr>
<td> P7</td>
<td> 数字引脚</td>
<td> Serial Rxd</td>
<td> 11</td>
<td> <strong>0</strong></td>
<td> PinMode(0, OUTPUT); digitalWrite(0, HIGH);</td>
<td> PD2(RXD/<strong>INT2</strong>)</td>
<td> 20</td>
<td>
有关这些串行引脚使用信息，请参阅 Xadow BLE/GPS 示例。

与上传代码的串行端口不同——请参阅下面的红/绿 LED。
</td>
</tr>
<tr>
<td> P8</td>
<td> 数字引脚</td>
<td> Serial Txd</td>
<td> 12</td>
<td> <strong>1</strong></td>
<td> PinMode(1, OUTPUT); digitalWrite(1, HIGH);</td>
<td> PD3(TXD/<strong>INT3</strong>)</td>
<td> 21</td>
</tr>
</table>

## 一些更多的 Xadow IO 引脚 - 仅在主模块上，不在 FFC 总线上

<table>
<tr>
<td colspan="4"> <strong>Xadow 引脚</strong></td>
<td colspan="2"> <strong>Arduino</strong></td>
<td colspan="2"> <strong>Atmega32u4 引脚</strong></td>
<td></td></tr>
<tr>
<td> <strong>名称</strong></td>
<td> <strong>IO 功能</strong></td>
<td> <strong>替代用途</strong></td>
<td> <strong>#</strong></td>
<td> <strong>IO 引脚</strong></td>
<td> <strong>代码示例</strong></td>
<td> <strong>名称（<strong>中断用红色标示</strong>）</strong></td>
<td> <strong>#</strong></td>
<td> <strong>备注</strong></td>
</tr>
<tr>
<td> 红色 LED</td>
<td> Rx</td>
<td></td>
<td> -</td>
<td> <strong>17</strong></td>
<td> PinMode(17, OUTPUT); digitalWrite(17, HIGH);</td>
<td> PB0(SS/<strong>PCINT0</strong>)</td>
<td> 8</td>
<td> 串口上传代码</td>
</tr>
<tr>
<td> 绿色 LED</td>
<td> Tx</td>
<td></td>
<td> -</td>
<td> <strong>11</strong></td>
<td> PinMode(11, OUTPUT); digitalWrite(11, HIGH);</td>
<td> PB7(<strong>PCINT7</strong>/OC0A/OC1C/!RTS)</td>
<td> 12</td>
</tr>
<tr>
<td> 唤醒</td>
<td></td>
<td></td>
<td> -</td>
<td> <strong>10</strong></td>
<td> 尚未连接和验证此功能！</td>
<td> PB^/A10/D10</td>
<td> 30</td>
<td> 板载开关 – 您需要超级焊接技能才能访问此功能！</td>
</tr></table>

注意：复位开关通过二极管连接到 Atmega32u4 复位引脚 13 – 因此无法在复位开关处访问 32u4 IO 引脚！

## Xadow 模块和每个模块的 IO 总线引脚使用的大表

为什么要这样一个复杂的大表？它将所有 IO 信息汇集在一个地方，但更重要的是，它让您可以看到在选择了几个 Xadow 模块后哪些 IO 引脚仍然可用！此外，原理图的 FFC 引脚编号与其他 wiki 文档不同！

注意：-

1. 请记住，IIC 设备是菊花链连接的 – 也就是说它们可以并联连接，因此您可以将多个 IIC 设备连接到相同的引脚！

2. 需要更多 IO 引脚？您可能能够将一个引脚用于几种不同的用途，就像振动马达和蜂鸣器共享一个引脚一样，或者在某些情况下，您可以在不同时间将同一引脚用于不同目的。例如，您可能将引脚设置为输出以触发超声波传感器，然后将引脚更改为输入以检测何时接收到信号！

3. 大多数 IIC 模块 &lbrace;除了主板模块、LED、RTC&rbrace;，也有 IIC 分线引脚。

因此 IIC SCL 和 IIC SDA 列中的紫色项目没有分线引脚！

4. 表格中心用黄色突出显示的其他详细信息记录了每个 Xadow 模块上的**附加**分线引脚！

5. ? = 不知道，或尚未验证！

<table>
<tr>
<td>
</td>
<td>
</td>
<td> <center>SCK</center></td>
<td> <center>MOSI</center></td>
<td> <center>MISO</center></td>
<td> <center>A5</center></td>
<td> <center>3</center></td>
<td> <center>2</center></td>
<td> <center>1</center></td>
<td> <center>0</center></td>
<td> <strong>Arduino 引脚名称</strong></td>
</tr>
<tr>
<td>
</td>
<td> <strong>中断用红色标示--------&gt;</strong></td>
<td> PB1(PCINT1/SCLK)</td>
<td> PB2(PDI/<strong>PCINT2</strong>/MOSI)</td>
<td> PB3(PDO/<strong>PCINT3</strong>/MISO)</td>
<td> PF0(ADC0)</td>
<td> PD0(OC0B/SCL/INT0)</td>
<td> PD1(SDA/<strong>INT1</strong>)</td>
<td> PD2(RXD/<strong>INT2</strong>)</td>
<td> PD3(TXD/<strong>INT3</strong>)</td>
<td> Atmega32u4 引脚名称</td>
</tr>
<tr>
<td> <center><strong>IIC = I2C</strong></center></td>
<td></td>
<td> 9</td>
<td> 10</td>
<td> 11</td>
<td> 41</td>
<td> 18</td>
<td> 19</td>
<td> 20</td>
<td> 21</td>
<td> Atmega32u4 引脚#</td>
</tr>
<tr>
<td></td>
<td></td>
<td> P1, 1</td>
<td> P2, 2</td>
<td> P3, 3</td>
<td> P4, 4</td>
<td> P5, 9</td>
<td> P6, 10</td>
<td> P7, 11</td>
<td> P8,12</td>
<td> FFC 引脚名称, #</td>
</tr>
<tr>
<td> <strong>Xadow 模块 </strong></td>
<td> <strong>模块控制模式和地址</strong></td>
<td> <center>数字引脚 </center></td>
<td> <center>数字引脚 </center></td>
<td> <center>数字引脚 </center></td>
<td> <center><strong>模拟或 </strong>数字引脚 </center></td>
<td> <center><strong>IIC SCL</strong></center></td>
<td> <center><strong>IIC SDA</strong></center></td>
<td> <center><strong>串口 Rxd</strong></center></td>
<td> <center><strong>串口 Txd</strong></center></td>
<td> <strong>Xadow 引脚功能</strong></td>
</tr>
<tr>
<td> <center>3轴加速度计 </center></td>
<td> <center>IIC 0x53</center></td>
<td> SCK</td>
<td> MOSI</td>
<td> MISO</td>
<td> <center>A5</center></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td> Rxd</td>
<td> TxD</td>
<td></td>
</tr>
<tr>
<td> <center>气压计 </center></td>
<td> <center>IIC 0x77</center></td>
<td> SCK</td>
<td> MOSI</td>
<td> MISO</td>
<td> <center>A5</center></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td> Rxd</td>
<td> TxD</td>
<td></td>
</tr>
<tr>
<td> <center>BLE 从设备 </center></td>
<td> <center>串口 </center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td colspan="2"> <center>RX/TX </center></td>
<td> 背面还有 BLE 专用焊盘</td>
</tr>
<tr>
<td> <center>分线板 </center></td>
<td> <center>无！</center></td>
<td> SCK</td>
<td> MOSI</td>
<td> MISO</td>
<td> <center>A5</center></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td> Rxd</td>
<td> TxD</td>
<td> + Grove I2C 和串口插座</td>
</tr>
<tr>
<td> <center>LED 控制器 </center></td>
<td> <center>IIC 0x04</center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> <center>OLED </center></td>
<td> <center>IIC 0x3C</center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> <center>振动马达 </center></td>
<td> <center>数字信号 </center></td>
<td></td>
<td> <center>H </center></td>
<td></td>
<td> <center>H </center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> _<strong>使用 ISP 前断开模块连接</strong>_</td>
</tr>
<tr>
<td> <center>RTC </center></td>
<td> <center>IIC 0x68</center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td> 背面焊盘连接 INTB – Int0???</td>
</tr>
<tr>
<td> <center>蜂鸣器 </center></td>
<td> <center>数字信号 </center></td>
<td> <center>H </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>H </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> _<strong>使用 ISP 前断开模块连接</strong>_</td>
</tr>
<tr>
<td> <center>数字指南针 </center></td>
<td> <center>IIC 0x1E</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td></td>
</tr>
<tr>
<td> <center>马达 </center></td>
<td> <center>待定 </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td></td>
</tr>
<tr>
<td> <center>GPS </center></td>
<td> <center>串口 </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td colspan="2"> <center>RX/TX </center></td>
<td></td>
</tr>
<tr>
<td> <center>存储 </center></td>
<td> <center>IIC 0x50 和 0x51</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td></td>
</tr>
<tr>
<td> <center><strong>主板</strong></center></td>
<td> <center>?IIC 主设备 =0x00?</center></td>
<td> ISP – SCK</td>
<td> ISP MOSI</td>
<td> ISP MISO</td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td> 全部通过背面的 SMD 焊盘。</td>
</tr>
</table>

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