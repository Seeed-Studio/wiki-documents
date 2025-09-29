---
title: 125Khz RFID模块 - UART
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/125Khz RFID module - UART/
slug: /cn/125Khz_RFID_module-UART
last_update:
  date: 02/03/2022
  author: gunengyu
---
![https://www.seeedstudio.com/depot/images/product/P1240147.jpg](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/125khz20uart.jpg)

RDM 125KHz卡迷你模块设计用于读取125KHz卡的代码，兼容只读标签和读写卡。它可应用于办公室/家庭安全、个人身份识别、访问控制、防伪、互动玩具和生产控制系统等。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/125Khz-RFID-module-UART-p-171.html)

**注意：** 模块会在125KHz标签靠近时通知，标签的序列号将通过TX引脚发送。这是一个在MCU项目或通过UartSB连接PC的RFID模块的简单方式。

##   特性

*   支持外部天线
*   最大有效距离可达50mm
*   解码时间小于100ms
*   UART TTL接口
*   支持EM4100兼容的只读或读写标签
*   内置外部双色LED和蜂鸣器驱动
*   小型设计

##   规格

可能包括关键规格和其他规格。

###   关键规格

<table>
<tr>
<td width="300px">频率</td>
<td width="500px">125KHz</td>
</tr>
<tr>
<td>波特率</td>
<td>9600 (TTL电平RS232格式)</td>
</tr>
<tr>
<td>接口</td>
<td>Weigang26 或 TTL电平RS232格式</td>
</tr>
<tr>
<td>电源</td>
<td>DC 5V（±5%）</td>
</tr>
<tr>
<td>电流</td>
<td>&lt;50Ma</td>
</tr>
<tr>
<td>工作范围</td>
<td>&gt;50mm(取决于卡/标签形状、制造商)</td>
</tr>
<tr>
<td>扩展I/O端口</td>
<td>N/A</td>
</tr>
<tr>
<td>指示灯</td>
<td>N/A</td>
</tr>
<tr>
<td>工作温度</td>
<td>-10℃~ +70℃</td>
</tr>
<tr>
<td>存储温度</td>
<td>-20℃~ +80℃</td>
</tr>
<tr>
<td>最大湿度</td>
<td>相对湿度 0 ~ 95%</td>
</tr>
<tr>
<td>尺寸</td>
<td>38.5mm ×19mm×9mm</td>
</tr>
</table>

##   引脚定义和额定值

查看下图（机械尺寸），并检查以下引脚定义列表：

<pre>
引脚定义：
P1:
  PIN1    TX
  PIN2    RX
  PIN3
  PIN4    GND
  PIN5    +5V(DC)
P2:
  PIN1    ANT1
  PIN2    ANT2
P3:
  PIN1    LED
  PIN2    +5V(DC)
  PIN3    GND
</pre>

##   机械尺寸

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/RFID-wiegand-dimen.JPG)

##   使用方法

###   TTL接口RS232数据输出格式

1.  9600bps,N,8,1
2.  校验和：卡10字节数据整体进行异或操作
<table>
<tr>
<td width="100px">02</td>
<td width="300px">10ASCII数据字符</td>
<td width="100px">校验和</td>
<td width="100px">03</td>
</tr>
</table>

示例：卡号：62E3086CED

*   输出数据：36H、32H、45H、33H、30H、38H、36H、43H、45H、44H
*   校验和：(62H) XOR (E3H) XOR (08H) XOR (6CH) XOR (EDH)=08H

####   时间序列图

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/RFID-wiegand-time-seq.JPG)

###   示例

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/125k_RFID_uasge.JPG)

输出数据(HEX): 02 | 30 31 30 30 30 37 33 34 45 30 | 44 32 | 03  
-&gt; 转换为十进制  
卡号十进制: 48 49 48 48 48 55 51 52 69 48  
校验和十进制: 68 50  
-&gt; 参考ASCII表，获取ASCII值  
卡号ASCII: 0 1 0 0 0 7 3 4 E 0  
校验和ASCII: D 2  
(01H) xor (00H) xor (07H) xor (34H) xor (E0H) = D2H

###   编程

将RX/TX连接到Arduino UART端口，Uart示例代码：
```
void setup()
{
  Serial.begin(9600);
}
void loop()
{
  if(Serial.available())
  {
    while(Serial.available())
    Serial.write(Serial.read());
  }
}
```

##   资源

*   数据手册: [RDM630-Spec.pdf](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/res/RDM630-Spec.pdf)

*   [如何连接Arduino和RFID](https://www.instructables.com/id/Arduino-and-RFID-from-seeedstudio/)

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>