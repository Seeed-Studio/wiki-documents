---
description: W600 模块
title: W600 模块
keywords:
- Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/W600_Module
last_update:
  date: 01/20/2023
  author: Matthew
---

![](https://files.seeedstudio.com/wiki/W600_Module/img/113020031-preview.png)

W600 模块是一款经济高效的 2.4GHz WiFi 模块，支持 802.11b/g/n。Seeed W600 模块基于 W600 芯片，该芯片具有 ARM Cortex-M3 架构，配备 1MB 片上闪存和 freeRTOS 内核。

我们将 W600 芯片的引脚引出并放置在板的背面，包括 I2S/I2C/SPI/GPIO/PWM/UART/SDIO。此外，该模块配备了板载 PCB 天线，无需单独设计天线，因此您可以快速将模块部署到自己的板上。我们还为该模块进行了 CE/FCC 认证，您可以直接将其用于商业项目。

<a href="https://www.seeedstudio.com/W600-Module-p-4020.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

## 特性

• 集成 32 位嵌入式 Cortex-M3 CPU，工作频率 80MHz

• 集成 288KB RAM

• 集成 1MB 闪存

**接口**

• 集成 GPIO 设备控制器

• 集成 2 个 UART 接口，支持 RTS/CTS，波特率：1200bps~2Mbps

• 集成一个高速 SPI 控制器，工作频率：0~50MHz

**无线**

• 支持 IEEE802.11 b/g/e/i/d/k/r/s/w/n

• 支持 2.4~2.4835 GHz

• 支持 Wi-Fi WMM/WMM-PS/WPA/WPA2/WPS

• 支持 Wi-Fi Direct

• STBC、GreenField、Short-GI

• 支持多种网络协议：TCP/UDP/ICMP/DHCP/DNS/HTTP

**其他**

• 支持基于 ASCII 编码的 AT+ 指令协议（UART 接口）

• 支持用户可编程 GPIO 控制

• 板载天线

## 规格

|类别|项目|参数|
|--|---|---|
|无线|支持 Wi‐Fi 模式|IEEE802.11b/g/n|
||RF 系统阻抗|50Ω|
||频率范围|2.4~2.4835 GHz|
||接收灵敏度|20MHz MCS7@‐71dBm;<br />40MHz MCS7@‐68dBm;<br />54Mbps@‐73dBm;<br />11Mbps@‐86dBm;<br />1Mbps@‐95dBm;|
||物理层数据速率|802.11n MCS 0~7   150Mbps|
||调制方式|DSSS、OFDM、DBPSK、DQPSK、CCK、QAM16/64|
||输出功率|IEEE802.11b, DSSS 1Mbps, POUT = +17dBm;<br />IEEE802.11g, OFDM 54Mbps, POUT = +10dBm;<br />IEEE802.11n, OFDM MCS7, POUT = +10dBm|
|硬件|接口类型|UART/SPI/GPIO|
||接口速率|2Mbps@UART (最大) <br />50Mbps@SPI (最大)|
||工作电压|3.3V(模块)/5V(开发板)|
||工作湿度|5%~90% (无凝结)|
||存储温度|‐40~+125 ℃|
||工作温度|‐40~+85℃|
|软件|网络类型|STA/AP/AP+STA/Wi‐Fi Direct|
||验证方式|WEP/WPA‐PSK/WPA2‐PSK|
||加密方式|WEP64/WEP128/TKIP/CCMP(AES)|
||WPS 功能|WPS|
||节能功能|PS‐POLL/待机|
||网络协议|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
||接口协议| AT+ 指令集|

:::note
有关规格的更多详细信息，请查看 W600 [Specification V1.0.0_EN.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Specification%20V1.0.0_EN.pdf) 和 [W600 HardwareDesignGuide_v1.0.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf)
:::

## 典型应用

- 智能家电
- 智能家居
- 无线音频和视频
- 智能玩具
- 医疗监测
- 工业控制
- 其他物联网应用

## 硬件概述

### 模块框图

<div align="center">
  <figure>
    <a href="https://files.seeedstudio.com/wiki/W600_Module/img/block.png" target="_blank">
      <img src="https://files.seeedstudio.com/wiki/W600_Module/img/block.png" alt="W600模块框图" title="W600模块框图"></img>
    </a>
    <figcaption><i>点击查看更清晰的原始文件</i></figcaption>
  </figure>
</div>

### 引脚图

<div align="center">
  <figure>
    <a href="https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg" target="_blank">
      <img src="https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg" alt="W600模块引脚图" title="W600模块引脚图"></img>
    </a>
    <figcaption><i>点击查看更清晰的原始文件</i></figcaption>
  </figure>
</div>

## 入门指南

要使用 **W600模块**，您需要使用 [USB转串口工具](https://www.seeedstudio.com/PL2303-USB-to-Serial-TTL-Module-Adapter-p-2358.html) 将 RX/TX 引脚连接到您的电脑，同时需要通过 **3.3v** 和 **GND** 引脚为模块供电。

:::note
对于 Mac 系统，我们发现某些版本的 Mac 系统无法识别板载 USB 转串口芯片 CH330N，请查看此处的解决方案 [Mac OS 驱动问题](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80)
:::

我们使用串口工具 **sscom** 来发送 AT 指令。您可以使用您喜欢的串口工具，如果您想使用 **sscom**，可以在 [这里](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip) 下载。

无论使用什么工具，请确保选中 **AddCrLf** 选项，并将波特率设置为 **115200**。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_2.jpg)

输入 **AT+** 然后点击 **SEND** 或按下 ++enter++ 键以检查连接是否成功建立。

```cpp
AT+
```

当返回 **+OK** 时，您可以使用 AT 指令来控制该模块。

### 创建 SoftAP 过程

- 1- **WPRT** 设置无线网卡工作模式为 SoftAP：

```cpp
AT+WPRT=2
```

- 2- **APSSID** 设置 STA 的 AP SSID，例如 *MyAP*：

```cpp
AT+APSSID=MyAp
```

- 3- **APENCRY** 设置无线网卡安全模式为 WEP64：

```cpp
AT+APENCRY=1
```

参数：

open：0，WEP64：1，WEP128：2

- 4- **APKEY** 设置无线网卡密钥为 *12345*

```cpp
AT+APKEY=1,1,12345
```

参数 1：密钥格式，0 表示 HEX，1 表示 ASCII  

参数 2：索引：密钥索引号，1 到 4 用于 WEP 加密密钥，其他加密方法固定为 0。  

参数 3：无线密钥，例如：12345  

- 5- **APNIP** 设置 IP 地址和子网掩码

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

参数 1：地址类型：0 表示使用 DHCP 动态分配，1 表示静态地址  
参数 2：IP：192.168.1.1  
参数 3：子网掩码：255.255.255.0  
参数 4：网关：192.168.1.1  
参数 5：DNS：192.168.1.1  

- 6- **PMTF** 将上述参数保存到 SPI Flash，下次启动时直接从第 7 步开始。

```cpp
AT+PMTF
```

- 7- **WJOIN** 创建无线网络 *MyAp*

```cpp
AT+WJOIN
```

- 8- **SLIST** 查询连接到您的 SoftAP 的 STA 信息。

```cpp
AT+SLIST
```

### 扫描 AP 过程

无线网卡扫描 AP 的 AT 指令为：

```cpp
AT+WSCAN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_3.jpg)

最后一个参数是信号强度，单位为 db。

### STA 加入 AP 过程

- 1- **WPRT** 设置工作模式为 STA

```cpp
AT+WPRT=0
```

- 2- **SSID** 设置要加入的 AP 名称，例如 *TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** 设置要加入的 AP 的无线密钥，例如 *12345678*

```cpp
AT+KEY=1,0,12345678
```

参数 1：0 表示 HEX，1 表示 ASCII

参数 2：索引：密钥索引号，1 到 4 用于 WEP 加密密钥，其他加密方法固定为 0。

参数 3：无线密钥，例如：12345678

- 4- **NIP** 启用 DHCP

```cpp
AT+NIP=0
```

- 5- **PMTF** 将上述参数保存到 SPI Flash，下次启动时直接从第 6 步开始。

```cpp
AT+PMTF
```

- 6- **WJOIN** 加入无线网络 TEST_AP

```cpp
AT+WJOIN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_4.jpg)

### 创建 APSTA 过程

- 1- **WPRT** 设置工作模式为 APSTA

```cpp
AT+WPRT=3
```

- 2- **SSID** 设置要加入的 AP 名称，例如 *TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** 设置要加入的 AP 的无线密钥，例如 *12345678*

```cpp
AT+KEY=1,0,12345678
```

参数 1：0 表示 HEX，1 表示 ASCII

参数 2：索引：密钥索引号，1 到 4 用于 WEP 加密密钥，其他加密方法固定为 0。

参数 3：无线密钥，例如：12345678

- 4- **APSSID** 设置创建的 SOFTAP 的网络名称

```cpp
AT+APSSID=”MYSoftAP”
```

- 5- **APENCRY** 设置 SoftAP 的加密类型（例如 WPA2-TKIP）

```cpp
AT+APENCRY=5
```

- 6- **APKEY** 设置 SoftAP 的密码（例如 ASCII 码 87654321）

```cpp
AT+APKEY=1,0,87654321
```

- 7- **APNIP** 设置 IP 地址和子网掩码

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

- 8- **PMTF** 将上述参数保存到 SPI Flash，下次启动时直接从第 9 步开始。

```cpp
AT+PMTF
```

- 9- **WJOIN** 加入无线网络 TEST_AP

```cpp
AT+WJOIN
```

:::note
有关 AT 指令的更多详细信息，请查看 [WM_W60X_SDK_AT Command_V1.0.2.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf)
:::

## 固件编程

有关固件编程，请查看以下链接：

[WM_W60X_SDK_User Manual_V1.0.0.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf) 和 [WM_W60X_Firmware Generation Guide_V1.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf)

## 常见问题

**Q1. STA如何断开与AP的连接**

A: 无线网卡断开AP的AT指令为：

```cpp
AT+WLEAV
```

**Q2. SoftAP断开连接**

A: SoftAP断开网络的AT指令为：

```cpp
AT+WLEAV=2
```

**Q3. STA如何查看当前状态**

A: 无线网卡查看当前网络状态的AT指令为：

```cpp
AT+LKSTT
```

**Q4. 如何查看当前SoftAP状态**

A: 查看当前SoftAP状态的AT指令为：

```cpp
AT+APLKSTT
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [WM_W60X_SDK_AT Command_V1.0.2.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf)

- **[PDF]** [W600 HardwareDesignGuide_v1.0.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf)

- **[PDF]** [W60X_SDK_User Manual_V1.0.0.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf)

- **[PDF]** [WM_W60X_Firmware Generation Guide_V1.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf)

- **[ZIP]** [W600模块原理图文件](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip)

- **[ZIP]** [sscom](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip)

## 技术支持与产品讨论



<br />
感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>