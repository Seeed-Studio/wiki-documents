---
description: 蓝牙 Bee v2.0
title: 蓝牙 Bee v2.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Bluetooth_Bee_v2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
sku: 113050013
type: gettingstarted
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/113050014%201_02.jpg)

蓝牙 Bee 是一个易于使用的蓝牙 SPP 模块，兼容现有的 Xbee 插座，设计用于透明的无线串口连接设置。

串口蓝牙模块完全符合蓝牙 V2.0+EDR（增强数据速率）标准，支持 3Mbps 调制，集成完整的 2.4GHz 无线电收发器和基带。

它采用 CSR Bluecore 04-External 单芯片蓝牙系统，使用 CMOS 技术，并具有 AFH（自适应频率跳跃功能）。其尺寸非常小，仅为 12.7mm x 27mm。希望它能简化您的整体设计/开发周期。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)

## 特性

---

### 硬件特性

- 典型 -80dBm 灵敏度。

- 高达 +4dBm 的 RF 发射功率。

- 完全符合蓝牙 V2.0+EDR 3Mbps 调制标准。

- 低功耗 1.8V 操作，支持 1.8 至 3.6V I/O。

- PIO 控制。

- 可编程波特率的 UART 接口。

- 集成 PCB 天线。

- Bee 兼容的插针。

### 软件特性

- 默认波特率：38400，数据位：8，停止位：1，校验位：无校验，数据控制：有。

- 支持的波特率：9600、19200、38400、57600、115200、230400、460800。

- 使用 CTS 和 RTS 控制数据流。

- 当在 PIO0 检测到上升脉冲时，设备将断开连接。

- 状态指示端口 PIO1：低-断开连接，高-已连接。

- PIO10 连接到红色 LED，PIO11 连接到绿色 LED。当主设备和从设备配对时，红色和绿色 LED 每 2 秒闪烁一次；断开连接时，只有绿色 LED 每秒闪烁两次。

- 默认情况下，自动连接上次设备。

- 默认允许匹配设备连接。

- 默认 PINCODE：0000。

- 当因超出连接范围而断开时，30 分钟内自动重新连接。

:::caution
    此模块的供电电压为 3.3V，超过此电压可能会对设备造成永久性损坏。
:::

## 硬件安装

---

### 通过 Uart Bee 将蓝牙连接到 PC

<!-- 蓝牙提供了一个标准的 XBee 插座。在这里我们使用 [UartSBee V5](/cn/UartSBee_v5) 将蓝牙连接到 PC，确保通过滑块选择供电电压为 3.3V。 -->

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPCSet.jpg)
|---|---|

### 将蓝牙连接到 Arduino

<!-- 在这里我们使用 [XBee Shield](/cn/XBee_Shield_V2.0) 作为蓝牙和 [Seeeduino Lotus](/cn/Seeeduino_Lotus) 之间的桥梁。 -->

由于 Seeeduino 的硬件 UART 用于与 PC 的调试，我们选择 D2 和 D3 来模拟软件 UART 与蓝牙通信。请参考下图中的跳线设置。

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduinoSet.jpg)
|---|---|

## 软件说明

---

### 约定

- 出厂默认设置：

  - 名称：HMSoft；

    - 波特率：9600, N, 8, 1；

    - PIN码：1234；

    - 传输版本。

- AT指令格式：
  - 大写AT指令格式，字符串形式，不包含任何其他符号（例如 \r 或 \n）。

    - 任何错误的指令将无响应。

### AT指令（待续...）

**1. 测试指令**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT</td>
<td width="300">OK</td>
<td width="300">无</td>
</tr>
</table>

**2. 查询/设置波特率**

<!-- <table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+BAUD?</td>
<td width="300">OK+Set:[para1]</td>
<td rowspan="2" width="300">Para1: 波特率编号

<dl>1---------1200</dl>
<dl>2---------2400</dl>
<dl>3---------4800</dl>
<dl>4---------9600</dl>
<dl>5---------19200</dl>
<dl>6---------38400</dl>
<dl>7---------57600</dl>
<dl>8---------115200</dl>
<dl>9---------230400</dl>
<dl>A---------460800</dl>
<dl>B---------921600</dl>
<dl>C---------1382400</dl>

默认值：4（9600）
</td>
</tr>
<tr>
<td width="300">AT+BAUD[para1]</td>
<td width="300">OK+Set:[para1]</td>
</tr>
</table> -->

**3. 查询/设置校验位**

<!-- <table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">查询：AT+CHK?</td>
<td width="300">OK+CHK:[para1]</td>
<td rowspan="2" width="300">Para1: 0,1,2

<dl>0:无校验

<dl>1:奇校验

<dl>2:偶校验

<dl>默认值：0（无校验）

</td></tr>
<tr>
<td width="300">设置：AT+CHK[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table> -->

**4. 查询/设置停止位**

<!-- <table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+STOP?</td>
<td width="300">OK+STOP:[para1]</td>
<td rowspan="2" width="300">Para1: 1, 2

<dl>1: 一个停止位

<dl>2: 两个停止位

<dl>默认值：1（一个停止位）

</td></tr>
<tr>
<td width="300">AT+STOP[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table> -->

**5. 查询/设置波特率、校验位、停止位**

<!-- <table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+UART?</td>
<td width="300">OK+UART:[para1],[para2],[para3]</td>
<td rowspan="2" width="300">Para1: 波特率

<dl>值：1~C

<dl>默认值：4（9600）

<dl>Para2: 校验位

<dl>值：0,1,2

<dl>默认值：0（无校验）

<dl>Para3: 停止位

<dl>值：1, 2

<dl>默认值：1（一个停止位）

</td></tr>
<tr>
<td width="300">AT+UART[para1][para2][para3]</td>
<td width="300">OK+Set:[para1] [para2] [para3]</td></tr></table> -->

**6. 模块自检指令**

<!-- <table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+SECH?</td>
<td width="300">OK+SECH:OKAY 或

OK+SECH:FAIL

</td>
<td width="300">无</td></tr></table>

**7. 模块应用区检查指令**

<table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+APCH?</td>
<td width="300">OK+APCH:OKAY 或

OK+APCH:FAIL

</td>
<td width="300">无</td></tr></table> -->

**8. 查询模块温度指令**

<!-- <table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+TEMP?</td>
<td width="300">OK+TEMP:[temp value]</td>
<td width="300">无</td></tr></table>

**9. 查询/设置模块可发现状态**

<table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+DISC?</td>
<td width="300">OK+DISC:[para1]</td>
<td rowspan="2" width="300">Para1: 0,1,2

<dl>0: 可发现且可连接

<dl>1: 仅可发现不可连接

<dl>2: 仅可连接

<dl>默认值：0

</td></tr>
<tr>
<td width="300">AT+DISC [para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table> -->

**10. 查询/设置PIO0功能（系统按键）**

<!-- <table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+KEY?</td>
<td width="300">OK+KEY:[para1]</td>
<td rowspan="2" width="300">Para1: 0, 1

<dl>0: 取消当前状态。

<dl>1: 取消当前状态并恢复出厂设置。

<dl>默认值：0

</td></tr>
<tr>
<td width="300">AT+ KEY[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table>

**11. 查询/设置PIO1输出状态（系统LED）**

<table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+LED?</td>
<td width="300">OK+LED:[para1]</td>
<td rowspan="2" width="300">Para1: 0, 1

<dl>0: 未连接时输出500ms高电平500ms低电平，连接时输出高电平。

<dl>1: 未连接时输出低电平，连接时输出高电平。

<dl>默认值：0

</td></tr>
<tr>
<td width="300">AT+ LED [para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table> -->

**12. 查询/设置模块PIO引脚输出状态**

<!-- <table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+PIO?</td>
<td width="300">OK+PIO:[para1]</td>
<td rowspan="2" width="300">Para1: 长度为10，每位值为1或0。

<dl>0: 输出低电平；1: 输出高电平

<dl>默认值：0000000000

</td></tr>
<tr>
<td width="300">AT+PIO[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table>

**13. 查询/设置PIO引脚输出高电平或低电平**

<table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+PIO[para1]?</td>
<td width="300">OK+PIO:[para1][para2]</td>
<td rowspan="2" width="300">Para1: 2~B Para2: 0, 1

<dl>Para1是您想查询/设置的PIO引脚编号：2,3,4,5,6,7,8,9,A,B。

<dl>Para2是查询或设置值。0为低电平，1为高电平

</td></tr>
<tr>
<td width="300">AT+PIO[para1][para2]</td>
<td width="300">OK+Set:[para1][para2]</td></tr></table>

**14. 查询/设置模块名称**

<table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+NAME?</td>
<td width="300">OK+NAME[para1]</td>
<td rowspan="2" width="300">Para1: 模块名称，最大长度为12。

默认值：HMSoft

</td></tr>
<tr>
<td width="300">AT+NAME[para1]</td>
<td width="300">OK+Set[para1]</td></tr></table>

**15. 恢复所有设置值为出厂设置**

<table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+DEFAULT</td>
<td width="300">OK+DEFAULT</td>
<td rowspan="2" width="300">无</td></tr></table>

**16. 重启模块**

<table >
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th></tr>
<tr>
<td width="300">AT+RESTART</td>
<td width="300">OK+RESTART</td>
<td rowspan="2" width="300">无</td></tr></table>

**17. 查询/设置主从角色**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+ROLE?</td>
<td width="300">OK+ROLE:[para1]</td>
<td rowspan="2" width="300">Para1: M, S

<dl>M: 主机

<dl>S: 从机

<dl>默认: S

</td>
</tr>
<tr>
<td width="300">AT+ROLE[para1]</td>
<td width="300">OK+Set:[para1]</td>
</tr>
</table>

**18. 查询/设置PIN码**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+PIN?</td>
<td width="300">OK+PIN:[para1]</td>
<td rowspan="2" width="300">Para1是PIN码，最大长度为12，允许字符范围为A~Z, a~z, 0~9

默认: 1234

</td>
</tr>
<tr>
<td width="300">AT+PIN[para1]</td>
<td width="300">OK+Set:[para1]</td>
</tr>
</table>

**19. 清除已连接设备地址**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+CLEAR</td>
<td width="300">OK+CLEAR</td>
<td rowspan="2" width="300">无</td>
</tr>
</table>

**20. 扫描从设备**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+SCAN?</td>
<td width="300">OK+SCANS

OK+SCAN[MAC]

……………

OK+SCANE

</td>
<td rowspan="2" width="300">无</td>
</tr>
</table>

**21. 连接到从设备的MAC地址**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+LNK[para1]</td>
<td width="300">OK+CONNS(开始连接)

<dl>OK+CONN(连接成功)

<dl>OK+CONNF(连接失败)

</td>
<td rowspan="2" width="300">Para1是MAC地址字符串。</td>
</tr>
</table>

**22. 查询软件版本**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+VERSION

AT+VERSION?</td>
<td width="300">版本信息</td>
<td rowspan="2" width="300">无</td>
</tr>
</table>

**23. 系统帮助信息**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+HELP?</td>
<td width="300">帮助信息</td>
<td rowspan="2" width="300">无</td>
</tr>
</table>

**24. 查询最后连接的设备地址**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+RADD?</td>
<td width="300">OK+ADDR:MAC地址</td>
<td rowspan="2" width="300">无</td>
</tr>
</table>

**25. 查询模块地址**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+LADD?

<dl>AT+ADDR?</td>
<td width="300">OK+LADD:MAC地址</td>
<td rowspan="2" width="300">无</td>
</tr>
</table>

**26. 查询/设置模块工作类型**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+IMME?</td>
<td width="300">OOK+IMME:[para1]</td>
<td rowspan="2" width="300">Para1: 0, 1

<dl>0: 模块上电后仅响应AT命令，不执行任何操作，直到收到AT+WORK

<dl>1: 上电后立即工作

<dl>默认: 1

</td>
</tr>
<tr>
<td width="300">AT+IMME[para1]</td>
<td width="300">OK+Set:[para1]</td>
</tr>
</table>

**27. 立即工作**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+WORK</td>
<td width="300">OK+WORK</td>
<td rowspan="2" width="300">无</td>
</tr>
</table>

**28. 查询/设置模块连接远程设备超时时间**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+TCON?</td>
<td width="300">OK+TCON:[para1]</td>
<td rowspan="2" width="300">Para1是超时时间。当时间到达时，模块将不再连接此地址，进入搜索模式。

<dl>Para1允许值: 0000~9999 单位为秒。

<dl>默认: 0000 永远连接

</td>
</tr>
<tr>
<td width="300">AT+TCON[para1]</td>
<td width="300">OK+Set:[para1]</td>
</tr>
</table>

**29. 查询/设置模块工作模式**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+TYPE?</td>
<td width="300">OK+TYPE:[para1]</td>
<td rowspan="2" width="300">Para1: 0~2

<dl>0: 传输模式

<dl>1: 遥控模式

<dl>2: PIO采集模式

默认: 0

</td>
</tr>
<tr>
<td width="300">AT+TYPE[para1]</td>
<td width="300">OK+Set:[para1]</td>
</tr>
</table>

**30. 查询/设置报告PIO状态字符串延迟时间（单位：毫秒）**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+TPIO?</td>
<td width="300">OK+TPIO:[para1]</td>
<td rowspan="2" width="300">Para1值范围为0000到9999毫秒。如果值>0，当PIO状态发生变化时，模块将在延迟此值后发送PIO状态字符串到远程设备。

<dl>默认: 0 仅发送一次

</td>
</tr>
<tr>
<td width="300">AT+TPIO[para1]</td>
<td width="300">OK+Set:[para1]</td>
</tr>
</table>

**31. 将遥控模式切换到传输模式（仅此一次）**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+START</td>
<td width="300">OK+START</td>
<td rowspan="2" width="300">无</td>
</tr>
</table>

**32. 查询/设置缓冲区保存参数**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+BUFF?</td>
<td width="300">OK+BUFF:[para1]</td>
<td width="300">无</td>
</tr>
<tr>
<td width="300">AT+BUFF[para1]</td>
<td width="300">OK+Set:[para1]</td>
<td width="300">Para1: 0~1

<dl>0: 不保存

<dl>1: 保存

<dl>默认: 0

</td>
</tr>
</table>

**33. 查询/设置搜索过滤器**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+FILT?</td>
<td width="300">OK+FILT:[para1]</td>
<td rowspan="2" width="300">Para1: 允许类型

<dl>值范围: 0~C

<dl>默认: C (全部)

</td>
</tr>
<tr>
<td width="300">AT+FILT[para1]</td>
<td width="300">OK+Set:[para1]</td>
</tr>
</table>

**34. 查询/设置模块通知**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+NOTI?</td>
<td width="300">OK+NOTI:[para1]</td>
<td width="300">无</td>
</tr>
<tr>
<td width="300">AT+NOTI[para1]</td>
<td width="300">OK+Set:[para1]</td>
<td width="300">Para1值为0或1。

<dl>0: 不通知（默认）

<dl>1: 当连接或断开时通知

</td>
</tr>
</table>

</td></tr></table>

**35.查询/设置模块设备类别**

<table>
<tr>
<th> 发送
</th>
<th> 接收
</th>
<th> 参数
</th></tr>
<tr>
<td width="300"> AT+COD?
</td>
<td width="300"> OK+COD:[para1]
</td>
<td width="300"> 无
</td></tr>
<tr>
<td width="300"> AT+COD[para1]
</td>
<td width="300"> OK+Set:[para1]
</td>
<td width="300"> Para1 是 COD 值。

<dl>值范围：0000~0xFFFF

<dl>默认值：0x1F00（未知设备）

</td></tr></table>  -->

## 编程

### 在 Windows 下通过串口配置蓝牙模块

本节展示如何通过 PC 配置蓝牙模块，可以学习一些基本的设置方法。

按照“硬件安装”部分设置硬件连接。你会发现模块上的蓝色 LED 闪烁，表示尚未建立连接。
