---
description: Xadow - BLE（双模）v1.0
title: Xadow - BLE（双模）v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_BLE_Dual_Model_V1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_PhotoBottom.jpg" alt="some_text"/>

Xadow - BLE（双模）v1.0 使用 CSR 双模蓝牙芯片，基于支持 AT 指令的 ARM 架构单芯片。用户可以根据串口波特率、设备名称、配对密码灵活开发。

<a href="https://www.seeedstudio.com/Xadow-BLE-(dual-model)-p-2405.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>

## 特性
---
- 蓝牙版本：蓝牙规范 V4.0 & BLE
- UART 发送和接收最大字节数为 512
- 其他设备与模块在 SPP 模式下：每包 90 字节
- 其他设备与模块在 BLE 模式下：每包 20 字节
- 两种数据传输模式：平衡模式和高速模式
- 工作频率：2.4GHz ISM 频段
- 调制方式：GFSK（高斯频移键控）
- 射频功率：-23dbm、-6dbm、0dbm、6dbm
- 速度：异步：3K 字节；同步：3K 字节
- 安全性：认证和加密
- 服务：从属 SPP，外围 BLE，UUID FFE0，FFE1
- 电源：+3.3VDC 50mA
- 长距离：SPP 30 米，BLE 60 米
- 功耗：SPP 13.5mA，BLE 9.5mA
- 工作温度：-5 ~ +65 摄氏度

## 规格
---
<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/600px-Xadow_-_BLE_(dual_model)_v1.0.png" alt="some_text"/>

- **K2**：在连接状态下，按下 K2 超过 100 毫秒会断开连接。在睡眠模式下，按下 K2 可以恢复出厂设置。
- **D1**：LED 显示两种工作模式：睡眠模式下缓慢闪烁；连接状态下持续亮灯。
- **J1&J2**：标准 Xadow 接口。

:::caution
    此模块的供电电压为 2.5V ~ 3.7V，超过此范围可能会对设备造成永久性损坏。BLE 传输速度比 SPP 传输速度慢，因此我们在设计中选择了较低的速度，以符合 BLE 双模产品规划的速度要求。
:::

## 硬件安装
---
**通过 Uart Bee 将蓝牙连接到 PC**

Xadow - BLE 具有标准 Xadow 接口和引脚间距，我们使用 [Xadow - Breakout](https://wiki.seeedstudio.com/cn/Xadow_Breakout) 将其转换为 Grove 插座。

由于 Xadow 接口是轴对称端口，因此需要遵守组装方向，请参考下图。

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToPC.jpg" alt="some_text"/>

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToPCConnect.jpg" alt="some_text"/>

**将蓝牙连接到 Xadow - 主板**

将 Xadow BLE 从模块连接到 [Xadow - 主板](https://wiki.seeedstudio.com/cn/Xadow_Main_Board)，并使用 USB 数据线将主板连接到 PC。

注意：连接 Xadow - BLE 到 Xadow 主板时，需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToArduino.jpg" alt="some_text"/>

## 软件说明
---
**约定**

- 在 EDR 模式下，仅可配置从设备，而在 BLE 模式下主设备或从设备均可配置。
- 出厂默认设置：
  - EDR 名称：HMSoft，角色：从设备，PinCode：1234
  - BLE 名称：HMSoft，角色：从设备，PinCode：000000
  - 波特率：115200，N，8，1；
- AT 命令格式：
  - 使用大写 AT 命令格式，字符串格式，不包含任何其他符号（例如 \r 或 \n）。
  - 任何错误的命令将不会有响应。

**AT 命令**

**1. 测试命令**

|发送|	接收|	参数|
|---|---|---|
|AT	|OK/ER/断开连接	|无|

- 如果模块未连接到远程设备，将接收到：“OK”
- 如果模块出现错误，将接收到：“ER”
- 如果模块已连接，模块将与远程设备断开连接；如果“AT + NOTI”设置为 1，将接收到信息字符串。

**2. 查询模块 EDR 地址**

|发送|	接收|	参数|
|---|---|---|
|AT+ADDE?|	OK+ Get: MAC|	无|

**3. 查询模块 BLE 地址**

|发送|	接收|	参数|
|---|---|---|
|AT+ADDB?|	OK+ Get: MAC	|无|

**4. 查询/设置认证模式**

|发送|	接收|	参数|
|---|---|---|
|Q: AT+AUTH?|	OK+ Get:[P1]	|P1: 0, 1, (默认值: 0) / 0 – 不认证 / 1 – 必须认证|
|S: AT+AUTH[P1]|	OK+ Set:[P1]|P1: 0, 1, (默认值: 0)/ 0 – 不认证 / 1 – 必须认证|

- AT+AUTH0：允许建立不安全连接。
- AT+AUTH1：每次连接必须进行认证。

**5. 查询/设置 A 到 B 模式**

|发送|	接收|	参数|
|---|---|---|
|Q: AT+ATOB?|	OK+ Get:[P1]	|P1: 0, 1, (默认值: 0)/ 0 – 不开启 ATOB / 1 – 开启 ATOB 模式|
|S: AT+ATOB[P1]|	OK+ Set:[P1]|P1: 0, 1, (默认值: 0)/ 0 – 不开启 ATOB / 1 – 开启 ATOB 模式|

此命令必须与 AT+MODE0 命令配合使用。当设备 A（SPP 模式）连接到模块且设备 B（BLE 模式）也连接到模块时，设备 A 发送到模块的数据字符串将发送到设备 B。设备 B 发送到模块的数据字符串也将发送到设备 A。

**6. 查询/设置波特率**

|发送|	接收|	参数|
|---|---|---|
|Q: AT+BAUD?|	OK+ Get:[P1]	|P1: 1~7, (默认值: 6)./  1 - 4800  / 2 – 9600 / 3 – 19200 / 4 – 38400 / 5 – 57600 / 6 – 115200 / 7 - 230400 |
|S: AT+BAUD[P1]|	OK+ Set:[P1]|P1: 1~7, (默认值: 6). / 1 - 4800 / 2 – 9600 / 3 – 19200 / 4 – 38400 / 5 – 57600 / 6 – 115200 / 7 - 230400|

**7. 清除绑定信息**

|发送|	接收|	参数|
|---|---|---|
|AT+BONDE|	OK+BONDE	|清除 EDR 绑定信息|
|AT+BONDB|	OK+BONDB	|清除 BLE 绑定信息|

BLE 模式尚不支持此功能。

**8. 清除最后连接的 EDR 设备地址**

|发送|	接收|	参数|
|---|---|---|
|AT+CLEAE|	OK+CLEAE	|无|

**9. 清除最后连接的 BLE 设备地址**

|发送|	接收|	参数|
|---|---|---|
|AT+CLEAB|	OK+CLEAB|	无|

**10. 查询/设置模块双连接工作模式**

|发送|	接收|	参数|
|---|---|---|
|Q: AT+DUAL?|	OK+ Get:[P1]|	P1: 0, 1, (默认值: 0) / 0 – 允许双连接 / 1 – 仅允许单连接|
|S: AT+DUAL[P1]|	OK+ Set:[P1]|P1: 0, 1, (默认值: 0) / 0 – 允许双连接 / 1 – 仅允许单连接|

- AT+DUAL0：允许同时建立两个连接（SPP 和 BLE）。
- AT+DUAL1：仅允许同时建立一个连接（SPP 或 BLE）。

**11. 查询/设置硬件流控制开关**

|发送|	接收|	参数|
|---|---|---|
|AT+FIOW?|	OK+ Get:[P1]	|P1: 0, 1,(默认值: 0) / 0: 关闭硬件流控制 / 1: 开启硬件流控制|
|AT+FIOW[P1]|	OK+ Set:[P1]|P1: 0, 1,(默认值: 0) / 0: 关闭硬件流控制 / 1: 开启硬件流控制|

**12. 查询/设置模块数据传输速度模式**

|发送|	接收|	参数|
|---|---|---|
|AT+HIGH?|	OK+ Get:[P1]|	P1: 0, 1,(默认值: 0)/ 0: 平衡模式 / 1: 高速模式|
|AT+HIGH[P1]|	OK+ Set:[P1]|P1: 0, 1,(默认值: 0) / 0: 平衡模式 / 1: 高速模式|

- 在平衡模式下，模块以稳定速度平衡 SPP 和 BLE。
- 在高速模式下，不控制速度，因此 SPP 模式将获得高速。
- 在高速模式下，模块失去 RESETB 引脚功能，但仍可使用“AT+RESET”命令重置模块。

**13. 系统帮助信息**

|发送|	接收	|参数|
|---|---|---|
|AT+HELP?|	帮助信息|	无|

**14. 查询/设置模块加载通知**

|发送|	接收	|参数|
|---|---|---|
|AT+INIT?|	OK+ Get:[P1]	|P1: 0, 1,?, (默认值: 0) / 0: 加载通知关闭 / 1: 加载通知开启|
|AT+INIT[P1]|	OK+ Set:[P1]|P1: 0, 1,?, (默认值: 0) / 0: 加载通知关闭 / 1: 加载通知开启|

当“AT+INIT1”设置后，模块加载完成后将通过 UART 输出“OK+INIT”字符串。

**15. 查询/设置模块工作模式**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+MODE?|	OK+ Get:[P1]	|P1: 0, 1, (默认值: 0) / 0 – 数据传输 / 1 – 远程控制|
|S: AT+MODE[P1]|	OK+ Set:[ P1]|P1: 0, 1, (默认值: 0) / 0 – 数据传输 / 1 – 远程控制|

- AT+MODE0：仅在连接建立时传输数据。
- AT+MODE1：传输数据并响应 AT 命令。

**16. 查询/设置通知信息**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+NOTI?|	OK+ Get:[P1]|	P1: 0, 1, (默认值: 0) / 0: 不通知 / 1: 通知|
|S: AT+NOTI[P1]|	OK+ Set:[ P1]|P1: 0, 1, (默认值: 0) / 0: 不通知 / 1: 通知|

- 设置 AT+NOTI1 后，当模块状态发生变化时，模块将通过 UART 发送连接或断开字符串：
  - OK+CONE ======== EDR 连接
  - OK+LSTE ========= EDR 断开连接
  - OK+CONB========= BLE 连接
  - OK+LSTB ========= BLE 断开连接
  - OK+LSTA ========= 除断开连接外，模块将在 500 毫秒后重置。

**17. 查询/设置通知模式**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+NOTP?|	OK+ Get:[P1]	|P1: 0, 1; 默认值: 0 / 0: 不包含地址 / 1: 包含地址|
|Q: AT+NOTP[P1]|	OK+ Set:[ P1]|P1: 0, 1; 默认值: 0 / 0: 不包含地址 / 1: 包含地址|

此命令必须与“AT+NOTI1”配合使用。如果此开关打开，当模块连接或断开时，提示字符串将包含远程地址。

**18. 查询/设置模块 EDR 名称**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+NAME?|	OK+ Get:[P1]	|P1: 模块 EDR 名称，/ 最大长度为 12 / 默认值: HMSoft|
|Q: AT+NAME[P1]|	OK+ Set:[ P1]|P1: 模块 EDR 名称，/ 最大长度为 12 / 默认值: HMSoft|

**19. 查询/设置模块 BLE 名称**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+NAMB?|	OK+ Get:[P1]|	P1: 模块 BLE 名称，最大长度为 12，默认值：HMSoft|
|S: AT+NAMB[P1]|	OK+ Set:[P1]|	P1: 模块 BLE 名称，最大长度为 12，默认值：HMSoft|

**20. 查询/设置 PIO1 输出状态（系统 LED）**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+PIO1?|	OK+ Get:[P1]|	P1: 0, 1 / 0: 未连接时输出 500ms 高电平 500ms 低电平，连接时输出高电平。 / 1: 未连接时输出低电平，连接时输出高电平。 / 默认值：0|
|S: AT+PIO1[P1]|	OK+ Set:[P1]|	P1: 0, 1 / 0: 未连接时输出 500ms 高电平 500ms 低电平，连接时输出高电平。 / 1: 未连接时输出低电平，连接时输出高电平。 / 默认值：0|

**21. 查询/设置 PIO 输出状态**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+PIO[P1]?|	OK+ Get:[P1][P2]|	P1: 2~B (HM-12) / P2: 2~3 (HM-13) / 0: 输出低电平 / 1: 输出高电平 / ?: 查询|
|S: AT+PIO[P1][P2]|	OK+ Set:[P1][P2]|	P1: 2~B (HM-12) / P2: 2~3 (HM-13) / 0: 输出低电平 / 1: 输出高电平 / ?: 查询|

**22. 查询/设置 EDR PIN 码**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+PINE?|	OK+ Get:[P1]|	P1: 模块 EDR PIN 码 / 最大长度：6 / 默认值：1234|
|S: AT+PINE[P1]|	OK+ Set:[P1]|	P1: 模块 EDR PIN 码 / 最大长度：6 / 默认值：1234|

**23. 查询/设置 BLE PIN 码**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+PINB?|	OK+ Get:[P1]|	P1: 模块 BLE PIN 码 / 000000~999999 / 默认值：000000|
|S: AT+PINB[P1]|	OK+ Set:[P1]|	P1: 模块 BLE PIN 码 / 000000~999999 / 默认值：000000|

**24. 查询/设置 UART 校验位**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+PARI?|	OK+ Get:[P1]|	P1: 0, 1, 2, （默认值：0） / 0: 无校验位 / 1: 偶校验 / 2: 奇校验|
|S: AT+PARI[P1]|	OK+ Set:[P1]|	P1: 0, 1, 2, （默认值：0） / 0: 无校验位 / 1: 偶校验 / 2: 奇校验|

**25. 恢复所有设置值为出厂设置**

|发送|	接收	|参数|
|---|---|---|
|AT+RENEW|	OK+RENEW|	无|

**26. 重启模块**

|发送|	接收	|参数|
|---|---|---|
|AT+RESET|	OK+RESET|	无|

**27. 查询 BLE RSSI 值**

|发送|	接收	|参数|
|---|---|---|
|AT+RSSB?|	OK+RSSB:[P1]|	P1: RSSI 值 / 9999: 无连接 / 9998: 稍后重试 / 9997: 读取错误 / Xxxx: RSSI 值|

此命令必须在设置“AT+MODE1”后使用。此命令仅供远程蓝牙设备使用。

**28. 查询 EDR RSSI 值**

|发送|	接收	|参数|
|---|---|---|
|AT+RSSE?|	OK+RSSE:[P1]|	P1: RSSI 值 / 9999: 无连接 / 9998: 稍后重试 / 9997: 读取错误 / Xxxx: RSSI 值|

**29. 查询最后连接的 EDR 设备地址**

|发送|	接收	|参数|
|---|---|---|
|AT+RADE?|	OK+Get:MAC Address|	无|

**30. 查询最后连接的 BLE 设备地址**

|发送|	接收	|参数|
|---|---|---|
|AT+RADB?|	OK+Get:MAC Address|	无|

**31. 查询/设置主从角色**

|发送|	接收	|参数|
|---|---|---|
|AT+ROLB?|	OK+ Get:[P1]|	P1: 0, 1 （默认值：0） / 0: 外围设备 / 1: 中心设备|
|AT+ROLB[P1]|	OK+ Set:[P1]|	P1: 0, 1 （默认值：0） / 0: 外围设备 / 1: 中心设备|

此命令将在模块下次上电或重启后生效。

**32. 查询/设置 EDR 工作模式**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+SCAN?|	OK+ Get:[P1]|	P1: 0, 1 （默认值：0） / 0: 可发现且可连接 / 1: 仅可连接|
|S: AT+SCAN[P1]|	OK+ Set:[P1]|	P1: 0, 1 （默认值：0） / 0: 可发现且可连接 / 1: 仅可连接|

**33. 查询/设置 UART 停止位**

|发送|	接收	|参数|
|---|---|---|
|Q: AT+STOP?|	OK+ Get:[P1]|	P1: 0, 1 （默认值：0） / 0: 1 个停止位 / 1: 2 个停止位|
|S: AT+STOP[P1]|	OK+ Set:[P1]|	P1: 0, 1 （默认值：0） / 0: 1 个停止位 / 1: 2 个停止位|

**34. 查询软件版本**

|发送|	接收	|参数|
|---|---|---|
|AT+VERR?|	版本信息|	无|
|AT+VERS?|	版本信息|	无|

## 编程
---
在 Windows 下通过串口配置蓝牙模块

本节介绍如何通过 PC 配置蓝牙模块，并学习一些基本的设置方法。硬件连接的设置请参考“硬件安装”部分。您会发现模块上的蓝色 LED 闪烁，表示尚未建立连接。

打开一个串口终端，并设置波特率：115200，数据位：8，停止位：1，无流控。通过串口终端发送“AT”到蓝牙模块，如果一切正常，将返回“OK”。蓝牙模块仅在未建立连接时响应 AT 命令，否则所有命令将被视为字符串并发送出去。您可以通过 LED 指示灯区分状态。
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-AT.png)

接下来可以发送一些有用的配置命令。以下是一些命令和响应的示例：

1. 测试串口连接，发送“AT”，将返回“OK”。
2. 恢复出厂设置，发送“AT+RENEW”，返回“OK+RENEW”。
3. 重置串口的波特率，发送“AT+BAUD2”，返回“OK+Set:2”。
4. 启用认证，发送“AT+AUTH1”，返回“OK+Set:1”。
5. 重置蓝牙模块，发送“AT+RESET”，返回“OK+RESET”。
6. 查询固件版本，发送“AT+VERS?”，返回“OK+Get:HMSoftV217”。
7. 查询 EDR 的 MAC 地址，发送“AT+ADDE?”，返回“OK+Get:000E0E002074”。
8. 查询 BLE 的 MAC 地址，发送“AT+ADDB?”，返回“OK+Get:000E0B002074”。
9. 设置 EDR 的名称，发送“AT+NAMEHM-13-EDR”，返回“OK+Set:HM-13-EDR”。
10. 设置 BLE 的名称，发送“AT+NAMEHM-13-BLE”，返回“OK+Set:HM-13-BLE”。
11. 设置 EDR 的密码，发送“AT+PINE123451”，返回“OK+Set:123451”。
12. 设置 BLE 的密码，发送“AT+PINB123451”，返回“OK+Set:123451”。
13. 启用发现和可连接，发送“AT+SCAN0”，返回“OK+Set:0”。
14. 启用连接通知信息，发送“AT+NOTI1”，返回“OK+Set:1”。
15. 通知信息包括地址，发送“AT+NOTP1”，返回“OK+Set:1”。
16. 启用用户按键，发送“AT+PIO01”，返回“OK+Set:1”。
17. 设置为中央模式，发送“AT+ROLB1”，返回“AT+ROLB1”。
或者设置为外围模式，发送“AT+ROLB0”，返回“AT+ROLB0”。

我们使用两个蓝牙模块连接到 PC，一个设置为中央模式，另一个设置为外围模式。几秒钟后，它们互相找到对方，LED 停止闪烁，连接成功！

**与 iPhone 通信**

这种蓝牙模块支持两种协议：蓝牙 EDR（增强数据速率）和蓝牙低功耗（BLE）。它可以与任何支持其中一种协议的设备通信。一些 Android 手机（操作系统高于 4.3）和 iPhone4 或更高版本具有 BLE 功能。我们使用 iPhone 演示如何使用手机与蓝牙交互。

为蓝牙模块供电并将其配置为外围角色。在 Apple Store 中搜索 LightBlue 并安装。启动应用程序，您可能会发现我们刚刚重命名的“HM-13-BLE”。点击它进行连接，然后点击“Properties”进行控制。右上角的“Hex”键用于更改数据格式，字符串可能更容易查看。点击“Listen for notifications”以启用数据接收。然后我们可以通过 BLE 向 PC 发送数据，点击“Write new value”并写入一些文字。同时，PC 也可以通过串口终端向 iPhone 传输数据。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-080911.png)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-14AT.png)

**两个 Arduino 之间的数据传输**

准备好编程了吗？在实践之后，是时候做一些事情了。准备一对蓝牙模块，以及 Arduino 或其他平台来控制它们。这里我们使用两个 Arduino Uno。按照“硬件安装”部分提到的方式设置连接。

中央和外围的程序使用相同的代码，唯一的区别是程序开头的宏定义。要将蓝牙模块分配为中央角色，只需将文本修改为“#define MASTER 1”，或者如果分配为外围角色，则修改为“#define MASTER 0”。

初始化程序流程请参考以下流程图。首先，我们需要区分蓝牙模块的预设波特率。之后，发送命令恢复出厂设置，并将波特率从 115200 更改为 9600，因为软件串口在高波特率下工作不佳。然后通过重置命令将其他参数配置到蓝牙模块中。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Init-flowchat.png)

初始化完成后，中央和外围将执行不同的任务。中央将间隔发送消息到外围，并打印从外围接收到的内容，而外围仅响应中央。

点击[这里](https://github.com/Seeed-Studio/HM-13_SW)下载测试代码，并使用 Arduino IDE 打开 HM-13_SW.ino，编译并下载到 Arduino Uno。记得通过修改开头的宏配置蓝牙模块为不同的角色。如果您对如何启动 Arduino 有任何问题，请点击[这里](https://www.seeedstudio.com/wiki/Getting_Started_with_Seeeduino)获取帮助。

下载程序后，打开两个串口终端窗口，蓝牙模块上的 LED 将闪烁，几秒钟后，它们停止闪烁并保持常亮，这表明它们已成功连接。根据程序的编写，中央会持续向外围发送消息，并每次收到反馈。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Debug_Output_Master.png)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Debug_Output_Slave.png)

## 资源
---
- [HM-13 蓝牙数据手册](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Bluetooth_HM-13_en.pdf)
- [Arduino 代码](https://github.com/Seeed-Studio/HM-13_SW)
- <a href="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Xadow-BLE_(dual_model)_v1.0_sch_pcb.zip">Eagle_Xadow-BLE_(dual_model)_v1.0_sch_pcb]</a>
- <a href="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Xadow-BLE_(dual_model)_v1.0.pdf"> PDF_Xadow-BLE_(dual_model)_v1.0</a>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>