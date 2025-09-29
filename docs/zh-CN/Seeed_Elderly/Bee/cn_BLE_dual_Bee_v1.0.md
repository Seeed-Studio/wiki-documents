---
description: BLE（双模）Bee v1.0
title: BLE（双模）Bee v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BLE_dual_Bee_v1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_PhotoBottom.jpg)

BLE（双模）Bee v1.0 使用 CSR 双模蓝牙芯片，基于支持 AT 指令的 ARM 架构单芯片。用户可以根据串口波特率、设备名称、配对密码灵活开发。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE(dual-model)-Bee-p-2406.html)

## 特性

- 蓝牙版本：蓝牙规范 V4.0 & BLE
- UART 发送和接收最大字节数为 512
- 其他设备与模块在 SPP 模式下：每包 90 字节
- 其他设备与模块在 BLE 模式下：每包 20 字节
- 两种数据传输模式：平衡模式和高速模式
- 工作频率：2.4GHz ISM 频段
- 调制方式：GFSK（高斯频移键控）
- 射频功率：-23dbm, -6dbm, 0dbm, 6dbm
- 速度：异步：3K 字节；同步：3K 字节
- 安全性：认证和加密
- 服务：从属 SPP，外围 BLE，UUID FFE0, FFE1
- 电源：+3.3VDC 50mA
- 长距离：SPP 30 米，BLE 60 米
- 功耗：SPP 13.5mA，BLE 9.5mA
- 工作温度：–5 ~ +65 摄氏度

## 规格

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/BLE-dual-Bee_v1.0.png)

- **U1**：U1 是无线模块，包含自动上电复位电路。
- **D3**：LED 显示两种工作模式：睡眠模式时缓慢闪烁；连接状态时持续亮灯。
- **JP1&JP3**：标准 Bee 接口。

## 注意事项

该模块的供电电压为 2.5V ~ 3.7V，超过此范围可能会对设备造成永久性损坏。BLE 传输速度比 SPP 传输速度慢，因此我们在设计中选择了较低的速度，以符合 BLE 双模产品规划的速度要求。

## 硬件安装

### 通过 Uart Bee 将蓝牙连接到 PC

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToPCSet.jpg)|
|---|---|

### 将蓝牙连接到 Arduino

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToArduinoSet.jpg)|
|---|---|

## 软件说明

### 约定

* 在 EDR 模式下，仅从属设备可以配置，而在 BLE 模式下可以是主设备或从属设备。
* 出厂默认设置：
  * EDR 名称：HMSoft，从属角色，PinCode 1234
  * BLE 名称：HMSoft，从属角色，PinCode 000000
  * 波特率：115200，N，8，1；
* AT 指令格式：
  * 大写 AT 指令格式，字符串格式，不带任何其他符号（例如 \r 或 \n）。
  * 任何错误的指令将没有响应。

### AT 指令

**1. 测试指令**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT</td>
<td width="300">OK/ER/Disconnect link</td>
<td width="300">无</td>
</tr>
</table>

如果模块未连接到远程设备，将接收到："OK"

如果模块出现错误，将接收到："ER"

如果模块已连接，模块将断开与远程设备的连接。如果 "AT + NOTI" 设置为 1，将接收到信息字符串。

**2. 查询模块 EDR 地址**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+ADDE?</td>
<td width="300">OK+ Get: MAC</td>
<td width="300">无</td>
</tr>
</table>

**3. 查询模块 BLE 地址**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+ADDB?</td>
<td width="300">OK+ Get: MAC</td>
<td width="300">无</td>
</tr>
</table>

**4. 查询/设置认证模式**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+AUTH?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1,（默认值：0）<br/>0 – 不认证<br/>1 – 必须认证</td>
</tr>
<tr>
<td width="300">S: AT+AUTH[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

AT+AUTH0：允许建立不安全连接。

AT+AUTH1：每次连接必须进行认证。

**5. 查询/设置 A 到 B 模式**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+ATOB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1,（默认值：0）<br/>0 – 不开启 ATOB<br/>1 – 开启 ATOB 模式</td>
</tr>
<tr>
<td width="300">S: AT+ATOB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

此指令必须与 AT+MODE0 指令配合使用。当 A 设备（SPP 模式）连接到模块且 B 设备（BLE 模式）也连接到模块时，A 设备发送到模块的数据字符串将发送到 B 设备。B 设备发送到模块的数据字符串也将发送到 A 设备。

**6. 查询/设置波特率**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+BAUD?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 1~7,（默认值：6）<br/>1 - 4800<br/>2 – 9600<br/>3 – 19200<br/>4 – 38400<br/>5 – 57600<br/>6 – 115200<br/>7 - 230400</td>
</tr>
<tr>
<td width="300">S: AT+BAUD[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**7. 清除绑定信息**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+BONDE</td>
<td width="300">OK+BONDE</td>
<td width="300">清除 EDR 绑定信息</td>
</tr>
<tr>
<td width="300">AT+BONDB</td>
<td width="300">OK+BONDB</td>
<td width="300">清除 BLE 绑定信息</td>
</tr>
</table>

BLE 模式尚不支持此功能。

**8. 清除最后连接的 EDR 设备地址**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+CLEAE</td>
<td width="300">OK+CLEAE</td>
<td width="300">无</td>
</tr>
</table>

**9. 清除最后连接的 BLE 设备地址**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+CLEAB</td>
<td width="300">OK+CLEAB</td>
<td width="300">无</td>
</tr>
</table>

**10. 查询/设置模块双连接工作模式**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+DUAL?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (默认: 0)<br/>0 – 允许双连接。<br/>1 – 仅允许单连接。</td>
</tr>
<tr>
<td width="300">S: AT+DUAL[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

AT+DUAL0: 允许同时进行两个连接（SPP 和 BLE）。

AT+DUAL1: 仅允许同时进行一个连接（SPP 或 BLE）。

**11. 查询/设置硬件流控制开关**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+FIOW?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (默认: 0)<br/>0: 硬件流控制关闭<br/>1: 硬件流控制开启</td>
</tr>
<tr>
<td width="300">AT+FIOW[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**12. 查询/设置模块数据传输速度模式**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+HIGH?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (默认: 0)<br/>0: 平衡模式<br/>1: 高速模式</td>
</tr>
<tr>
<td width="300">AT+HIGH[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

在平衡模式下，我们平衡了 SPP 和 BLE 的稳定速度。

在高速模式下，我们不控制速度，因此 SPP 模式将获得高速。

在高速模式下，模块失去 RESETB 引脚功能，但仍可使用 "AT+RESET" 命令重置模块。

**13. 系统帮助信息**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+HELP?</td>
<td width="300">帮助信息</td>
<td width="300">无</td>
</tr>
</table>

**14. 查询/设置模块加载通知**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+INIT?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, ?, (默认: 0)<br/>0: 加载通知关闭<br/>1: 加载通知开启</td>
</tr>
<tr>
<td width="300">AT+INIT[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

当设置为 "AT+INIT1" 时，模块加载后将通过 UART 输出 "OK+INIT" 字符串。

**15. 查询/设置模块工作模式**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+MODE?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (默认: 0)<br/>0 – 数据传输。<br/>1 – 远程控制。</td>
</tr>
<tr>
<td width="300">S: AT+MODE[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

AT+MODE0: 仅在连接建立时传输数据。

AT+MODE1: 传输数据并响应 AT 命令。

**16. 查询/设置通知信息**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+NOTI?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (默认: 0)<br/>0: 不通知<br/>1: 通知</td>
</tr>
<tr>
<td width="300">S: AT+NOTI[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

设置为 AT+NOTI1 后，当模块状态发生变化时，模块将通过 UART 发送连接或断开字符串：

OK+CONE ======== EDR 连接

OK+LSTE ========= EDR 断开

OK+CONB========= BLE 连接

OK+LSTB ========= BLE 断开

OK+LSTA ========= 除断开外，模块将在 500 毫秒后重置。

**17. 查询/设置通知模式**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+NOTP?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1; 默认: 0<br/>0: 不带地址<br/>1: 带地址</td>
</tr>
<tr>
<td width="300">Q: AT+NOTP[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

此命令必须与 "AT+NOTI1" 配合使用，如果此开关打开，当模块连接或断开时，提示字符串将包含远程地址。

**18. 查询/设置模块 EDR 名称**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+NAME?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 模块 EDR 名称,<br/>最大长度为 12。<br/>默认: HMSoft</td>
</tr>
<tr>
<td width="300">Q: AT+NAME[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**19. 查询/设置模块 BLE 名称**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+NAMB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 模块 BLE 名称,<br/>最大长度为 12。<br/>默认: HMSoft</td>
</tr>
<tr>
<td width="300">S: AT+NAMB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**20. 查询/设置 PIO1 输出状态（系统 LED）**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+PIO1?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1<br/>0: 未连接时输出 500ms 高电平 500ms 低电平，连接时输出高电平。<br/>1: 未连接时输出低电平，连接时输出高电平。<br/>默认: 0</td>
</tr>
<tr>
<td width="300">S: AT+PIO1[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**21. 查询/设置 PIO 输出状态**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+PIO[P1]?</td>
<td width="300">OK+ Get:[P1][P2]</td>
<td rowspan="2" width="300">P1: 2~B (HM-12)<br/>P2: 2~3 (HM-13)<br/>0: 输出低电平<br/>1: 输出高电平<br/>?: 查询</td>
</tr>
<tr>
<td width="300">S: AT+PIO[P1][P2]</td>
<td width="300">OK+ Set:[P1][P2]</td>
</tr>
</table>

**22. 查询/设置 EDR PIN 码**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+PINE?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 模块 EDR PIN 码<br/>最大长度: 6<br/>默认: 1234</td>
</tr>
<tr>
<td width="300">S: AT+PINE[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**23. 查询/设置 BLE PIN 码**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+PINB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 模块 BLE PIN 码<br/>000000~999999<br/>默认: 000000</td>
</tr>
<tr>
<td width="300">S: AT+PINB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**24. 查询/设置 UART 校验位**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+PARI?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, 2, (默认: 0)<br/>0: 无校验<br/>1: 偶校验<br/>2: 奇校验</td>
</tr>
<tr>
<td width="300">S: AT+PARI[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**25. 恢复所有设置值为出厂设置**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+RENEW</td>
<td width="300">OK+RENEW</td>
<td width="300">无</td>
</tr>
</table>

**26. 重启模块**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+RESET</td>
<td width="300">OK+RESET</td>
<td width="300">无</td>
</tr>
</table>

**27. 查询 BLE RSSI 值**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+RSSB?</td>
<td width="300">OK+RSSB: [P1]</td>
<td width="300">P1: RSSI 值<br/>9999: 无连接<br/>9998: 稍后再试<br/>9997: 读取错误<br/>Xxxx: RSSI 值</td>
</tr>
</table>

此命令必须在设置 "AT+MODE1" 后使用。  
此命令仅用于远程蓝牙设备。

**28. 查询 EDR RSSI 值**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+RSSE?</td>
<td width="300">OK+RSSE: [P1]</td>
<td width="300">P1: RSSI 值<br/>9999: 无连接<br/>9998: 稍后再试<br/>9997: 读取错误<br/>Xxxx: RSSI 值</td>
</tr>
</table>

**29. 查询最后连接的 EDR 设备地址**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+RADE?</td>
<td width="300">OK+Get:MAC Address</td>
<td width="300">无</td>
</tr>
</table>

**30. 查询最后连接的 BLE 设备地址**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+RADB?</td>
<td width="300">OK+Get:MAC Address</td>
<td width="300">无</td>
</tr>
</table>

**31. 查询/设置主从角色**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+ROLB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1 (默认: 0)<br/>0: 外围设备<br/>1: 中心设备</td>
</tr>
<tr>
<td width="300">AT+ROLB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

此命令将在模块下次上电或重启后生效。

**32. 查询/设置 EDR 工作模式**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+SCAN?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (默认: 0)<br/>0: 可发现且可连接<br/>1: 仅可连接</td>
</tr>
<tr>
<td width="300">S: AT+SCAN[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**33. 查询/设置 UART 停止位**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">Q: AT+STOP?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (默认: 0)<br/>0: 1 个停止位<br/>1: 2 个停止位</td>
</tr>
<tr>
<td width="300">S: AT+STOP[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**34. 查询软件版本**

<table>
<tr>
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
<tr>
<td width="300">AT+VERR?<br/>AT+VERS?</td>
<td width="300">版本信息</td>
<td width="300">无</td>
</tr>
</table>

## 编程

### 在 Windows 下通过串口配置蓝牙模块

本节介绍如何通过 PC 配置蓝牙模块，并学习一些基本的设置方法。硬件连接的设置请参考“硬件安装”部分。您会发现模块上的蓝色 LED 闪烁，表示尚未建立连接。

打开串口终端并设置波特率：115200，数据位：8，停止位：1，无流控。通过串口终端发送“AT”到蓝牙模块，如果一切正常，将返回“OK”。蓝牙模块仅在未建立连接时响应 AT 命令，否则所有命令将被视为字符串并发送出去。您可以通过 LED 指示灯区分状态。

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-AT.png)

接下来可以发送一些有用的配置命令。以下是一些命令和响应的示例：

1. 测试串口连接，发送“AT”，将返回“OK”。

2. 恢复出厂设置，发送“AT+RENEW”，返回“OK+RENEW”。

3. 重置串口波特率，发送“AT+BAUD2”，返回“OK+Set:2”。

4. 启用认证，发送“AT+AUTH1”，返回“OK+Set:1”。

5. 重置蓝牙模块，发送“AT+RESET”，返回“OK+RESET”。

6. 查询固件版本，发送“AT+VERS?”，返回“OK+Get:HMSoftV217”。

7. 查询 EDR 的 MAC 地址，发送“AT+ADDE?”，返回“OK+Get:000E0E002074”。

8. 查询 BLE 的 MAC 地址，发送“AT+ADDB?”，返回“OK+Get:000E0B002074”。

9. 设置 EDR 的名称，发送“AT+NAMEHM-13-EDR”，返回“OK+Set:HM-13-EDR”。

10. 设置 BLE 的名称，发送“AT+NAMEHM-13-BLE”，返回“OK+Set:HM-13-BLE”。

11. 设置 EDR 的密码，发送“AT+PINE123451”，返回“OK+Set:123451”。

12. 设置 BLE 的密码，发送“AT+PINB123451”，返回“OK+Set:123451”。

13. 启用发现和可连接功能，发送“AT+SCAN0”，返回“OK+Set:0”。

14. 启用连接通知信息，发送“AT+NOTI1”，返回“OK+Set:1”。

15. 通知信息包括地址，发送“AT+NOTP1”，返回“OK+Set:1”。

16. 启用用户按键，发送“AT+PIO01”，返回“OK+Set:1”。

17. 设置为中央模式，发送“AT+ROLB1”，返回“AT+ROLB1”。

或者设置为外围模式，发送“AT+ROLB0”，返回“AT+ROLB0”。

我们使用两个蓝牙模块连接到 PC，一个设置为中央模式，另一个设置为外围模式。几秒钟后，它们互相找到并停止闪烁，连接成功！

### 与 iPhone 通信

这种蓝牙模块支持两种协议：蓝牙 EDR（增强数据速率）和蓝牙低功耗（BLE）。它可以与任何支持其中一种协议的设备通信。一些 Android 手机（操作系统高于 4.3）和 iPhone4 或更高版本具有 BLE 功能。我们使用 iPhone 演示如何使用手机与蓝牙模块交互。

为蓝牙模块供电并将其配置为外围角色。在 Apple Store 中搜索 LightBlue 并安装。启动应用程序，您可能会发现我们刚刚重命名的“HM-13-BLE”。点击它进行连接，然后点击“Properties”进行控制。右上角的“Hex”键用于更改数据格式，字符串可能更容易查看。点击“Listen for notifications”以启用数据接收。然后我们可以通过 BLE 向 PC 发送数据，点击“Write new value”并写入一些文字。同时，PC 也可以通过串口终端向 iPhone 传输数据。

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0108.PNG)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0109.PNG)|
|---|---|
|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0111.PNG)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0114.PNG)|

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-DialogWithIOS.png)

### 两个 Arduino 之间的数据传输

准备好编程了吗？在实践之后，是时候做一些事情了。准备一对蓝牙模块，以及 Arduino 或其他平台来控制它们。这里我们使用两个 Arduino Uno。按照“硬件安装”部分提到的方式设置连接。

中央和外围的程序使用相同的代码，唯一的区别是程序开头的宏定义。要将蓝牙模块分配为中央角色，只需将文本修改为“#define MASTER 1”，或者如果分配为外围角色，则修改为“#define MASTER 0”。

初始化程序流程请参考以下流程图。首先，我们需要区分蓝牙模块的预设波特率。之后，发送命令恢复出厂设置，并将波特率从 115200 更改为 9600，因为软件串口在高波特率下无法正常工作。然后通过重置命令配置蓝牙模块的其他参数。

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Init-flowchat.png)

初始化完成后，中央和外围将执行不同的任务。中央会间隔发送消息给外围，并打印从外围接收到的内容，而外围仅响应中央。

<!-- 点击 [这里](https://github.com/Seeed-Studio/HM-13_SW) 下载测试代码，并使用 Arduino IDE 打开 HM-13_SW.ino，编译并下载到 Arduino Uno。记得通过修改开头的宏配置蓝牙模块为不同的角色。如果您对如何开始使用 Arduino 有任何问题，请点击 [这里](/cn/Getting_Started_with_Seeeduino) 获取帮助。 -->

下载程序后，打开两个串口终端窗口，蓝牙模块上的 LED 将闪烁，几秒钟后，它们停止闪烁并保持常亮，这表明它们已成功连接。根据程序的编写，中央会持续向外围发送消息并每次获得反馈。

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Debug_Output_Master.png)
![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Debug_Output_Slave.png)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-Bee_V1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

*   [HM-13 蓝牙数据手册](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/Bluetooth_HM-13_en.pdf)

*   [Arduino 代码](https://github.com/Seeed-Studio/HM-13_SW)

*   [Eagle_BLE(dual)_Bee_V1.0_sch_pcb](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-Bee_V1.0_sch_pcb.zip)

*   [PDF_BLE(dual)_bee_v1.0](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-bee_v1.0.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>