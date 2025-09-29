---
title: Grove - BLE (双模) v1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-BLE-dual_model-v1.0/
slug: /cn/Grove-BLE-dual_model-v1.0
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0.jpg)

Grove - BLE (双模) v1.0 使用 CSR 双模蓝牙芯片。该芯片基于 ARM 架构，支持 AT 指令。用户可以根据串口波特率、设备名称、配对密码灵活开发。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-BLE-dual-model-p-2407.html)

特性
--------

- BT 版本：蓝牙规范 V4.0 & BLE
- UART 发送和接收最大字节数为 512
- 其他设备到模块在 SPP 模式下：每包 90 字节
- 其他设备到模块在 BLE 模式下：每包 20 字节
- 两种数据传输模式，平衡模式和高速模式
- 工作频率：2.4GHz ISM 频段
- 调制方式：GFSK（高斯频移键控）
- RF 功率：-23dbm、-6dbm、0dbm、6dbm
- 速度：异步：3K 字节
- 同步：3K 字节
- 安全性：认证和加密
- 服务：从机 SPP、外围设备 BLE、UUID FFE0、FFE1
- 电源：+3.3/+5.0VDC 50mA
- 长距离：SPP 30 米，BLE 60 米
- 功耗：SPP 13.5mA，BLE 9.5mA
- 工作温度：–5 ~ +65 摄氏度

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

硬件概述
-------------

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0_PhotoTop.jpg)

**K2**：在连接状态下，可以通过按下 K2 按钮超过 100ms 来断开连接。在睡眠模式下，可以通过按下 K2（出厂设置）按钮来恢复。

**U1**：U1 是无线模块，它包含自动上电复位电路。

**D1**：LED 工作在两种模式下：**睡眠**状态通过缓慢闪烁指示，**连接**状态通过持续亮起指示。

**J1**：标准 Grove 连接器。

<div class="admonition warning">
<p class="admonition-title">注意</p>
BLE 传输速度比 SPP 传输慢，所以我们在设计中选择了较低的速度，符合 BLE 双模产品规划的速度。
</div>

硬件安装
---------------------

### 通过 UART Bee 将蓝牙连接到 PC

蓝牙提供了一个带有标准 Grove 插座的串口，大多数 USB-UART 转换器都可以使用。这里我们使用 [UartSBee V5](/cn/UartSBee_v5) 来连接蓝牙和 PC。
![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0_ConnectToPC.jpg)

### 将蓝牙连接到 Arduino

由于 Arduino Uno 没有 Grove 插座，我们使用 <a href="/cn/Seeeduino_Lotus"><span><font color={'8DC215'} size={"3"}> Seeeduino Lotus </font></span></a> 代替。您也可以使用带有 **Grove Base Shield V2** 的 Arduino。
作为示例，D2 和 D3 用作软件 UART。因此，将 Grove 线缆插入"D2"插座

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0_ConnectToArduino.jpg)

软件说明
--------------------

### 约定

- 在 EDR 模式下，只能配置从机，而在 BLE 模式下可以是主机或从机。
- 出厂默认设置：
  - EDR 名称 HMSoft，从机角色，配对码 1234
  - BLE 名称 HMSoft，从机角色，配对码 000000
  - 波特率：115200，N，8，1；
- AT 命令格式：
  - 大写 AT 命令格式。字符串格式，不带任何其他符号。（例如 //r 或 //n）。
  - 任何不正确的命令都不会得到响应。

### AT 命令

**1. 测试命令**

| 发送 | 接收               | 参数 |
|------|-----------------------|-----------|
| AT   | OK/ER/Disconnect link | 无      |

如果模块未连接到远程设备，将接收到："OK"

如果模块有错误，将接收到："ER"

如果模块已连接，模块将从远程设备断开连接，如果"AT + NOTI"设置为 1，将接收到信息字符串

**2. 查询模块 EDR 地址**

| 发送     | 接收      | 参数 |
|----------|--------------|-----------|
| AT+ADDE? | OK+ Get: MAC | 无      |

**3. 查询模块BLE地址**

| 发送     | 接收      | 参数 |
|----------|--------------|-----------|
| AT+ADDB? | OK+ Get: MAC | 无      |

**4. 查询/设置认证模式**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+AUTH?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (默认: 0)
0 – 不认证
1 – 必须认证

</td>
</tr>
<tr>
<td width="300">
S: AT+AUTH[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

AT+AUTH0: 允许建立不安全连接。
AT+AUTH1: 每个连接都必须进行认证。

**5. 查询/设置A到B模式**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+ATOB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (默认: 0)
0 – 不开启ATOB
1 – 开启ATOB模式

</td>
</tr>
<tr>
<td width="300">
S: AT+ATOB[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

此命令必须与AT+MODE0命令配合使用。当A设备（SPP模式）连接到模块且B设备（BLE模式）也连接到模块时，从A设备发送到模块的数据字符串将发送到B设备。从B设备发送到模块的数据字符串也会发送到A设备。

**6. 查询/设置波特率**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+BAUD?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 1~7, (默认: 6).
1 - 4800
2 – 9600
3 – 19200
4 – 38400
5 – 57600
6 – 115200
7 - 230400

</td>
</tr>
<tr>
<td width="300">
S: AT+BAUD[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**7. 清除绑定信息**

| 发送     | 接收  | 参数           |
|----------|----------|---------------------|
| AT+BONDE | OK+BONDE | 清除EDR绑定信息 |
| AT+BONDB | OK+BONDB | 清除BLE绑定信息 |

BLE模式暂不支持此功能。

**8. 清除最后连接的EDR设备地址**

| 发送     | 接收  | 参数 |
|----------|----------|-----------|
| AT+CLEAE | OK+CLEAE | 无      |

**9. 清除最后连接的BLE设备地址**

| 发送     | 接收  | 参数 |
|----------|----------|-----------|
| AT+CLEAB | OK+CLEAB | 无      |

**10. 查询/设置模块双工工作模式**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+DUAL?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (默认: 0)
0 – 允许双连接。
1 – 允许单连接。

</td>
</tr>
<tr>
<td width="300">
S: AT+DUAL[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

AT+DUAL0: 允许同时进行两个连接（SPP和BLE）。
AT+DUAL1: 同时只允许一个连接（SPP或BLE）

**11. 查询/设置硬件流控开关**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
AT+FIOW?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1,(默认: 0)
0: 硬件流控关闭
1: 硬件流控开启

</td>
</tr>
<tr>
<td width="300">
AT+FIOW[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**12. 查询/设置模块数据传输速度模式**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
AT+HIGH?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1,(默认: 0)
0: 平衡模式
1: 高速模式

</td>
</tr>
<tr>
<td width="300">
AT+HIGH[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

在平衡模式下，我们以稳定的速度平衡SPP和BLE。
在高速模式下，我们不控制速度，因此SPP模式将获得高速。
在高速模式下，模块失去RESETB引脚功能，但您仍可以使用
"AT+RESET"命令来重置模块。

**13. 系统帮助信息**

| 发送     | 接收          | 参数 |
|----------|------------------|-----------|
| AT+HELP? | 帮助信息 | 无      |

**14. 查询/设置模块加载通知**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
AT+INIT?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1,?, (默认: 0)
0: 加载通知关闭
1: 加载通知开启

</td>
</tr>
<tr>
<td width="300">
AT+INIT[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

当设置"AT+INIT1"时，模块加载后，模块将通过UART输出"OK+INIT"字符串。

**15. 查询/设置模块工作模式**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+MODE?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (默认: 0)
0 – 数据传输。
1 – 远程控制。

</td>
</tr>
<tr>
<td width="300">
S: AT+MODE[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

AT+MODE0: 仅在连接建立时传输数据。
AT+MODE1: 传输数据并响应AT命令。

**16. 查询/设置通知信息**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+NOTI?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (默认: 0)
0: 不通知
1: 通知

</td>
</tr>
<tr>
<td width="300">
S: AT+NOTI[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

在AT+NOTI1之后，当模块状态改变时，模块将通过
UART发送连接或断开字符串：

OK+CONE ======== EDR连接

OK+LSTE ========= EDR断开

OK+CONB========= BLE连接

OK+LSTB ========= BLE断开

OK+LSTA ========= 异常断开，模块将在500毫秒后重置。

**17. 查询/设置通知模式**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+NOTP?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1; 默认: 0
0: 不包含地址
1: 包含地址

</td>
</tr>
<tr>
<td width="300">
Q: AT+NOTP[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

此命令必须与"AT+NOTI1"配合使用，如果此开关打开，当模块连接或断开时，提示字符串将包含远程地址。

**18. 查询/设置模块EDR名称**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+NAME?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 模块EDR名称，
最大长度为12。
默认: HMSoft

</td>
</tr>
<tr>
<td width="300">
Q: AT+NAME[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

**19. 查询/设置模块BLE名称**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+NAMB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 模块BLE名称，
最大长度为12。
默认值：HMSoft

</td>
</tr>
<tr>
<td width="300">
S: AT+NAMB[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

**20. 查询/设置PIO1输出状态（系统LED）**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+PIO1?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1
0: 未连接时输出500ms高电平500ms低电平，连接时输出高电平。
1: 未连接时输出低电平，连接时输出高电平。
默认值：0

</td>
</tr>
<tr>
<td width="300">
S: AT+ PIO1 [P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

**21. 查询/设置PIO输出状态**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+PIO[P1]?
</td>
<td width="300">
OK+ Get:[P1][P2]
</td>
<td rowspan="2" width="300">
P1: 2~B (HM-12)
P2: 2~3 (HM-13)
0: 输出低电平
1: 输出高电平
?: 查询

</td>
</tr>
<tr>
<td width="300">
S: AT+ PIO[P1][P2]
</td>
<td width="300">
OK+ Set:[P1][P2]
</td>
</tr>
</table>

**22. 查询/设置EDR PIN码**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+PINE?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 模块EDR码
最大长度：6
默认值：1234

</td>
</tr>
<tr>
<td width="300">
S: AT+PINE[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**23. 查询/设置BLE PIN码**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+PINB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 模块BLE码
000000~999999
默认值：000000

</td>
</tr>
<tr>
<td width="300">
S: AT+PINB[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**24. 查询/设置UART奇偶校验位**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+PARI?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, 2, (默认值：0)
0: 无奇偶校验
1: 偶校验
2: 奇校验

</td>
</tr>
<tr>
<td width="300">
S: AT+PARI[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**25. 恢复所有设置值到出厂设置**

| 发送     | 接收     | 参数 |
|----------|----------|------|
| AT+RENEW | OK+RENEW | 无   |

**26. 重启模块**

| 发送     | 接收     | 参数 |
|----------|----------|------|
| AT+RESET | OK+RESET | 无   |

**27. 查询BLE RSSI值**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>AT+RSSB?</td>
<td>OK+RSSB: [P1]</td>
<td>P1: RSSI值<br />
<p>9999: 无连接<br />
9998: 稍后重试<br />
9997: 读取错误<br />
Xxxx: RSSI值</p></td>
</tr>
</tbody>
</table>

此命令必须在设置"AT+MODE1"后使用。此命令仅由远程蓝牙设备使用。

**28. 查询EDR RSSI值**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>AT+RSSE?</td>
<td>OK+RSSE: [P1]</td>
<td>P1: RSSI值<br /><p>9999: 无连接<br />
9998: 稍后重试<br />
9997: 读取错误<br />
Xxxx: RSSI值</p></td>
</tr>
</tbody>
</table>

**29. 查询最后连接的EDR设备地址**

| 发送     | 接收               | 参数 |
|----------|--------------------|------|
| AT+RADE? | OK+Get:MAC Address | 无   |

**30. 查询最后连接的BLE设备地址**

| 发送     | 接收               | 参数 |
|----------|--------------------|------|
| AT+RADB? | OK+Get:MAC Address | 无   |

**31. 查询/设置主从角色**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
AT+ROLB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1 (默认值：0)
0: 从设备
1: 主设备

</td>
</tr>
<tr>
<td width="300">
AT+ROLB[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

此命令将在模块下次上电或复位后生效。

**32. 查询/设置EDR工作模式**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+SCAN?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (默认值：0)
0: 可发现和可连接
1: 仅可连接

</td>
</tr>
<tr>
<td width="300">
S: AT+SCAN[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**33. 查询/设置UART停止位**

<table border="1">
<tr>
<th>
发送
</th>
<th>
接收
</th>
<th>
参数
</th>
</tr>
<tr>
<td width="300">
Q: AT+STOP?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (默认值：0) 0: 1个停止位 1: 2个停止位
</td>
</tr>
<tr>
<td width="300">
S: AT+STOP[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**34. 查询软件版本**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>发送</th>
<th>接收</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>
AT+VERR?<br />
<p>AT+VERS?</p>
</td>
<td>版本信息</td>
<td>无</td>
</tr>
</tbody>
</table>

编程
----

### 在Windows下通过串口配置蓝牙模块

本节展示如何通过PC配置蓝牙，可以学习一些基本的设置方法。硬件连接设置请参考"硬件安装"部分。您会发现模块上的蓝色LED闪烁，表示没有建立连接。

打开串口终端并设置波特率：115200，数据位：8，停止位：1，无流控制。通过串口终端向蓝牙发送"AT"，如果一切正常将返回"OK"。蓝牙仅在没有建立连接时响应AT命令，否则所有命令都被视为字符串并发送出去。您可以通过LED指示来区分状态。

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-AT.png)

然后可以发送一些有用的配置。以下是一些命令和响应的示例。

1. 测试串口连接，发送"AT"，将返回"OK"。

2. 恢复出厂设置，发送"AT+RENEW"，返回"OK+RENEW"。

3. 重置串口波特率，发送"AT+BAUD2"，返回"OK+Set:2"。

4. 启用身份验证，发送"AT+AUTH1"，返回"OK+Set:1"。

5. 重置蓝牙，发送"AT+RESET"，返回"OK+RESET"。

6. 查询固件版本，发送"AT+VERS?"，返回"OK+Get:HMSoftV217"。

7. 查询EDR的MAC地址，发送"AT+ADDE?"，返回"OK+Get:000E0E002074"。

8. 查询BLE的MAC地址，发送"AT+ADDB?"，返回"OK+Get:000E0B002074"。

9. 设置EDR的名称，发送"AT+NAMEHM-13-EDR"，返回"OK+Set:HM-13-EDR"。

10. 设置BLE的名称，发送"AT+NAMEHM-13-BLE"，返回"OK+Set:HM-13-BLE"。

11. 设置EDR的密码，发送"AT+PINE123451"，返回"OK+Set:123451"。

12. 设置BLE的密码，发送"AT+PINB123451"，返回"OK+Set:123451"。

13. 启用发现和可连接，发送"AT+SCAN0"，返回"OK+Set:0"。

14. 启用连接通知信息，发送"AT+NOTI1"，返回"OK+Set:1"。

15. 通知信息包含地址，发送"AT+NOTP1"，返回"OK+Set:1"。

16. 启用用户按键，发送"AT+PIO01"，返回"OK+Set:1"。

17. 设置为中心模式，发送"AT+ROLB1"，返回"AT+ROLB1"。

或设置为外围模式，发送"AT+ROLB0"，返回"AT+ROLB0"。

我们使用两个连接到PC的蓝牙，一个设置为中心模式，另一个设置为外围模式。几秒钟后它们找到彼此，LED停止闪烁，连接成功！

### 与iPhone通信

这种蓝牙模块有两种协议：蓝牙EDR（增强数据速率）和蓝牙低功耗。它可以与任何具有这些协议之一的设备通信。一些OS高于4.3的Android手机和iPhone4或更高版本具有BLE功能。我们使用iPhone来演示如何使用手机与蓝牙交互。

给蓝牙供电并将其配置为外围角色。在Apple Store中搜索LightBlue并安装它。启动应用程序，您可能会找到我们刚刚重命名的"HM-13-BLE"。触摸它进行连接，然后触摸"Properties"来控制它。右上角的"Hex"键用于更改数据格式，也许String更容易查看。点击"Listen for notifications"以启用数据接收。然后我们可以通过BLE向PC发送数据，点击"Write new value"并写入一些文字。PC也可以通过串口终端向iPhone传输数据。

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0108.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0109.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0111.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0114.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-DialogWithIOS.png)

### 两个Arduino之间的数据传输

您准备好编程了吗？经过练习后是时候做些事情了。准备一对蓝牙和Arduino或其他平台来控制它们。这里我们使用两个Arduino Uno。按照"硬件安装"部分中提到的方式建立连接。

中心和外围的程序使用相同的代码，唯一的区别是程序开头的宏定义。要将蓝牙分配为中心角色，只需将文本修改为"/#define MASTER 1"，如果分配外围角色则为"/#define MASTER 1"。

初始化程序流程请参考以下流程图。首先我们需要区分蓝牙的预设波特率。之后，发送命令恢复出厂设置，并将波特率从115200更改为9600，因为软件串口在高波特率下无法正常工作。然后其他参数被配置到蓝牙中，最后使用Reset命令。

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-Init-flowchat.png)

初始化后，中心和外围将做不同的事情，中心将间隔向外围发送消息并打印从外围接收到的内容，而外围只响应中心。

点击[这里](https://github.com/Seeed-Studio/HM-13_SW)下载测试代码并用Arduino IDE打开HM-13/_SW.ino，编译并下载到Arduino Uno。记住通过修改开头的宏来配置蓝牙为不同角色。如果您对如何开始使用Arduino有任何问题，请点击<a href="/cn/Getting_Started_with_Seeeduino"><span><font color={'8DC215'} size={"3"}>这里</font></span></a>获取帮助。

下载程序后，打开两个串口终端窗口，蓝牙上的LED将闪烁，几秒钟后，它们停止闪烁并保持常亮，这表明它们已相互连接。
根据编写的程序，中心持续向外围发送消息并每次获得反馈。

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-Debug_Output_Master.png)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-Debug_Output_Slave.png)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Eagle_Grove-BLE-dual_model-v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [HM-13 蓝牙模块数据手册](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Bluetooth_HM-13_en.pdf)
- [Arduino 代码](https://github.com/Seeed-Studio/HM-13_SW)
- [EAGLE/_Grove-BLE/_(dual/_model)/_v1.0/_sch/_pcb](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Eagle_Grove-BLE-dual_model-v1.0_sch_pcb.zip)
- [PDF/_Grove-BLE/_(dual/_model)/_v1.0/_sch](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Grove-BLE-dual_model-v1.0.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_BLE_(dual_model)_v1.0 -->

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