---
title: Grove 串口蓝牙
nointro:
keywords:
  - docs
  - docusaurus
image:  https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /cn/Grove-Serial_Bluetooth
last_update:
  date: 01/29/2022
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Twigbt00.jpg)

Grove - 串口蓝牙是一个易于使用的模块，兼容现有的 Grove Base Shield，专为透明无线串口连接设置而设计。该串口蓝牙模块是完全合格的蓝牙 V2.0+EDR（增强数据速率）2Mbps 调制，具有完整的 2.4GHz 无线电收发器和基带。它使用 CSR Bluecore 04-External 单芯片蓝牙系统，采用 CMOS 技术并具有 AFH（自适应跳频功能）。它具有最小的占用空间 12.7mm x 27mm。希望它能简化您的整体设计/开发周期。

型号：[WLS31746P](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html?cPath=139_142)

## 规格参数 ##

- 工作电压：5.0VDC

- 数据速率：2Mbps

- RF 发射功率（最大）：+4dBm

- 灵敏度：-80dBm

- 完全合格的蓝牙 V2.0+EDR 3Mbps 调制

- 可选择波特率

- 当因超出连接范围而断开连接时，在 30 分钟内自动重连

## 演示 ##

在这个库中，我们为您的项目打包了两个演示，分别工作在主模式和从模式。
两个蓝牙模块的工作方式如下所示：
![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Bluetooth-1.jpg)

将模块连接到 [Grove - Base Shield](https://seeeddoc.github.io/Grove-Base_Shield/) 的 D6 端口：
![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Grove-Serial-Bluetooth.JPG)

安装"资源"部分中的库。如果您想在主模式下运行项目，请通过路径找到演示：文件 - 示例 - Bluetooth_demo_code - Master。您可以在同一路径中找到从模式的演示。

当 Grove - 串口蓝牙模块处于配对状态时，绿色和红色 LED 交替闪烁。如果连接成功，绿色 LED 将每 2 秒闪烁一次。如果连接失败，红色 LED 将每 0.5 秒闪烁一次。

## 参考 ##

#### 流程图 ####

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Bluetooth-2.jpg)

### 更改默认配置的命令 ###

**1.设置工作模式**

|||
|---|
 |\r\n+STWMOD=0\r\n|将设备工作模式设置为客户端（从设备）。保存并重启。|
 |\r\n+STWMOD=1\r\n|将设备工作模式设置为服务器（主设备）。保存并重启。|

**注意：** **\r\n** 对于操作是必需的，其值在十六进制中为 **0x0D 0x0A**。**\r** 和 **\n** 分别表示 **回车** 和 **换行**（或下一行），

**2.设置波特率**

|||
|---|
 |\r\n+STBD=115200\r\n|设置波特率为 115200。保存并重启。|
 |支持的波特率：9600,19200,38400,57600,115200,230400,460800。|

**3.设置设备名称**

|||
|---|
 |\r\n+STNA=abcdefg\r\n|将设备名称设置为"abcdefg"。保存并重启。|

**4.开机时自动连接最后配对的设备**

|||
|---|
 |\r\n+STAUTO=0\r\n|禁止自动连接。保存并重启。|
 |\r\n+STAUTO=1\r\n|允许自动连接。保存并重启。|

**5.允许已配对设备连接我**

|||
|---|
 |\r\n+STOAUT=0\r\n|禁止。保存并重启。|
 |\r\n+STOAUT=1\r\n|允许。保存并重启。|

**6.设置PIN码**

|||
|---|
 |\r\n+STPIN=2222\r\n|设置PIN码为"2222"，保存并重启。|

**7.删除PIN码（通过MCU输入PIN码）**

|||
|---|
 |\r\n+DLPIN\r\n|删除PIN码。保存并重启。|

**8.读取本地地址码**

|||
|---|
 |\r\n+RTADDR\r\n|返回设备地址。|

**9.当主设备超出有效范围时自动重连（从设备在超出有效范围时将在30分钟内自动重连）**

|||
|---|
 |\r\n+LOSSRECONN=0\r\n|禁止自动重连。|
 |\r\n+LOSSRECONN=1\r\n|允许自动重连。|

###  正常操作命令 ###

#### 1.查询

**a) 主设备**

|||
|---|
 |\r\n+INQ=0\r\n|停止查询|
 |\r\n+INQ=1\r\n|开始/重启查询|

**b) 从设备**

|||
|---|
|\r\n+INQ=0\r\n |禁用被查询|
|\r\n+INQ=1\r\n| 启用被查询|

当 **+INQ=1** 命令成功时，**红色** 和 **绿色** LED 交替闪烁。

**2.蓝牙模块返回查询结果**

|||
|---|
 |\r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n|
 |查询到地址为"aa,bb,cc,dd,ee,ff"、名称为"name"的串口蓝牙设备|

**3.连接设备**

|||
|---|
 |\r\n+CONN=aa,bb,cc,dd,ee,ff\r\n|连接到地址为"aa,bb,cc,dd,ee,ff"的设备|

**4.蓝牙模块请求输入PIN码**

\r\n+INPIN\r\n

**5.输入PIN码**

|||
|---|
 |\r\n+RTPIN=code\r\n||
 |示例：RTPIN=0000| 输入PIN码，为四个零|

**6.断开设备连接** 将 PIO0 拉高将断开当前工作的蓝牙设备。

**7.返回状态** \r\n+BTSTA:**xx**\r\n
**xx** 状态：

- 0 - 初始化中

- 1 - 就绪

- 2 - 查询中

- 3 - 连接中

- 4 - 已连接

（**注意：** 这不是一个命令，而是模块在每个命令后返回的信息）

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="res/Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- [串口蓝牙库](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_demo_code.zip)
- [串口蓝牙Eagle文件](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Grove-Serial_Bluetooth_eagle_file.zip)
- [蓝牙软件说明](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_Software_Instruction.pdf)
- [蓝牙模块数据手册](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_module.pdf)

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