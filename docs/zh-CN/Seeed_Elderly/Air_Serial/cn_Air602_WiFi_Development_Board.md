---
description: Air602 WiFi 开发板
title: Air602 WiFi 开发板
keywords:
- Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Air602_WiFi_Development_Board
last_update:
  date: 01/20/2023
  author: Matthew
---

![图片](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/main.jpg)

本 Wiki 适用于 Air602 WiFi 开发板和 Air602 WiFi 模块。

Air602 是一个基于嵌入式 Wi-Fi SoC 芯片（W600）的 2.4G Wi-Fi 模块，配备 12 针邮票孔扩展接口。令人惊讶的是，它甚至比邮票还小，仅为 12mm*10mm。虽然体积小巧，但功能齐全，提供丰富的接口和完整的功能。该模块支持 IEEE802.11b/g/n 和 AT 指令。

Air602 WiFi 开发板基于 Air602 Wi-Fi 模块，集成了 USB 接口和天线。如果将此开发板插入计算机，它将被识别为端口（COM & LPT），因此您可以使用串口工具对其进行编程。该模块支持 IEEE802.11b/g/n 和 AT 指令。

<a href="https://www.seeedstudio.com/Air602-WiFi-Module-p-3139.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

<a href="https://www.seeedstudio.com/Air602-WiFi-Development-Board-p-3140.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

## 特性

**接口**

• USB 接口

• UART/SPI

• 集成 GPIO 设备控制器

**无线**

• 支持 IEEE802.11 b/g/e/i/d/k/r/s/w/n

• 支持 2.4~2.4835 GHz

• 支持 Wi-Fi WMM/WMM-PS/WPA/WPA2/WPS

• 支持 Wi-Fi Direct

• STBC、GreenField、Short-GI

• 支持多种网络协议：TCP/UDP/ICMP/DHCP/DNS/HTTP

**其他**

• 支持基于 ASCII 编码的 AT+ 指令协议（UART 接口）

• 支持用户可编程的 GPIO 控制

## 规格

|类别|项目|参数|
|--|---|---|
|无线|支持 Wi-Fi 模式|IEEE802.11b/g/n|
||RF 系统阻抗|50Ω|
||频率范围|2.4~2.4835 GHz|
||接收灵敏度|20MHz MCS7@‐71dBm;<br />40MHz MCS7@‐68dBm;<br />54Mbps@‐73dBm;<br />11Mbps@‐86dBm;<br />1Mbps@‐95dBm;|
||物理层数据速率|802.11n MCS 0~7   150Mbps|
||调制方式|DSSS、OFDM、DBPSK、DQPSK、CCK、QAM16/64|
||输出功率|IEEE802.11b, DSSS 1Mbps, POUT = +17dBm;<br />IEEE802.11g, OFDM 54Mbps, POUT = +10dBm;<br />IEEE802.11n, OFDM MCS7, POUT = +10dBm|
|硬件|接口类型|UART/SPI/GPIO|
||接口速率|2Mbps@UART (最大) <br />50Mbps@SPI (最大)|
||工作电压|3.3V（模块）/5V（开发板）|
||工作湿度|5%~90%（无凝结）|
||存储温度|‐40~+125 ℃|
||工作温度|‐40~+85℃|
|软件|网络类型|STA/AP/AP+STA/Wi‐Fi Direct|
||验证方式|WEP/WPA‐PSK/WPA2‐PSK|
||加密方式|WEP64/WEP128/TKIP/CCMP(AES)|
||WPS 功能|WPS|
||节能模式|PS‐POLL/待机|
||网络协议|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
||接口协议| AT+ 指令集|

## 典型应用

- 智能家电
- 智能家居
- 无线音频和视频
- 智能玩具
- 医疗监测
- 工业控制
- 其他物联网应用

## 引脚分布

![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_MAP.jpg)
![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_table.jpg)
![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_MAP_B.jpg)

## 入门指南

对于 **Air602 WiFi 开发板**，您只需将其插入电脑，它会被识别为端口（COM & LPT）。  
对于 **Air602 WiFi 模块**，您需要使用 USB-to-Serial 工具将 RX/TX 引脚连接到您的电脑。

:::note
对于 Mac，我们发现某些版本的 Mac 系统无法识别板载 USB-to-Serial 芯片 CH330N，请查看此处的解决方案 [Mac os 驱动问题](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80)
:::

我们使用串口工具 **sscom** 来发送 AT 指令。您可以使用您喜欢的串口工具，如果您想使用 **sscom**，可以在 [这里](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip) 下载。

无论使用什么工具，请确保您已勾选选项 **AddCrLf**，并将波特率设置为 **115200**。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_2.jpg)

输入 **AT+** 然后点击 **SEND** 或按 `Enter` 键检查连接是否成功建立。

```cpp
AT+
```

当返回 **+OK** 时，您可以使用 AT 指令来控制该模块。

### 创建 SoftAP 流程

- 1- **WPRT** 将无线网卡工作模式设置为 SoftAP：

```cpp
AT+WPRT=2
```

- 2- **APSSID** 设置 STA 的 AP SSID，例如 *MyAP*：

```cpp
AT+APSSID=MyAp
```

- 3- **APENCRY** 将无线网卡安全模式设置为 WEP64：

```cpp
AT+APENCRY=1
```

参数：

open：0，WEP64：1，WEP128：2

- 4- **APKEY** 将无线网卡密钥设置为 *12345*

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

### 扫描 AP 流程

无线网卡扫描 AP 的 AT 指令为：

```cpp
AT+WSCAN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_3.jpg)

最后一个参数是信号强度，单位为 db。

### STA 加入 AP 流程

- 1- **WPRT** 将工作模式设置为 STA

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

### 创建 APSTA 流程

- 1- **WPRT** 将工作模式设置为 APSTA

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

## 固件编程

有关固件编程，请查看以下链接：

[Air602 固件编程手册](https://wiki.seeedstudio.com/cn/Air602_Firmware_Programming_Manual)

## 常见问题解答

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

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/AIR602_lbr.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [Air602 AT指令用户手册](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602%20AT%20Command%20User%20Manual.pdf)

- **[PDF]** [Air602硬件设计手册](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602%20Hardware%20Design%20Manual.pdf)

- **[ZIP]** [AIR602_lbr for eagle](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/AIR602_lbr.zip)

- **[ZIP]** [sscom](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip)

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