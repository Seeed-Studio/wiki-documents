---
description: GPS Bee 套件
title: GPS Bee 套件
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/GPS_Bee_kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/Gpsbee_05.jpg)

为了使 GPS 模块能够轻松兼容现有的扩展板，我们采用了与 XBee 无线模块相同的针脚封装。因此，您可以将 GPS 模块插入兼容 XBee 的现有扩展板中。此外，您还可以使用 [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) 将 GPS 模块连接到 USB 端口，运行名为 u-center 的软件来分析 GPS 数据并重置 GPS 模块参数。将 GPS Bee 放置在 [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) 上，并将 [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) 连接到 PC，打开 u-center.exe，选择 UartSB 端口，然后您可以看到 GPS 模块返回的数据，软件会分析这些数据并显示具体信息，例如：时间、速度、纬度和经度、海拔等。

套件配备了用于 GPS 的 Mini Embedded Antenna U.FL，您也可以购买另一种尺寸更大的天线 [Embedded Antenna U.FL for GPS](https://www.seeedstudio.com/depot/embedded-antenna-ufl-for-gps-p-564.html?cPath=84_89)。兼容所有带有 XBee 标准插座的扩展板、开发板和模块。

[4 pin 2.54mm to 2.0mm Female jumper wire](https://www.seeedstudio.com/depot/4-pin-254mm-to-20mm-female-jumper-wire-100mm-p-403.html) 也可用于轻松适配！

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/gps-bee-kit-with-mini-embedded-antenna-p-560.html?cPath=144_145)

##   特性
---
*   50 通道 u-blox 5 引擎，拥有超过 100 万个有效相关器
*   &lt;1 秒热启动和辅助启动的首次定位时间
*   -160dBm SuperSense® 采集和跟踪灵敏度
*   KickStart 功能模块在弱信号下加速启动
*   支持 AssistNow Online 和 AssistNow Offline A-GPS 服务；符合 OMA SUPL 标准
*   高抗干扰能力
*   4 Hz 位置更新速率
*   微型 2.0mm 间距接头，兼容 XBee 插座
*   UART、USB、DDC 和 SPI 接口
*   符合 RoHS 标准

##   应用场景
---
*   任意定位系统

##   规格
---
| 项目 | 符号 | 最小值 | 典型值 | 最大值 | 单位 |
|------|--------|-----|-----|-----|------|
| 电源电压 | Vcc | 2.7 | 3.0 | 3.6 | V |
| 峰值电源电流 (Vcc=3.6V) | | | | 150 | mA |
| 持续电源电流 (Vcc=3.0V) | | | | | |
| 采集电流 | | | 102 | | mA |
| 跟踪电流 | | | 44 | | mA |
| 天线增益 | | | 30 | | dB |
| 工作温度 | | -40 | | 85 | ℃ |

### 引脚定义及额定值

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPS.jpg)

| 引脚 | 名称 | 功能 |
|-----|------|----------|
| 1 | Vcc | 电源供应，2.7-3.6VDC |
| 2 | TX | 串口 1 |
| 3 | RX | 串口 2 |
| 4 | NC | 保留 |
| 5 | EX | 保留 |
| 6 | NC | 保留 |
| 7 | NC | 保留 |
| 8 | NC | 保留 |
| 9 | NC | 保留 |
| 10 | GND | 地线 |
| 11 | NC | 保留 |
| 12 | NC | 保留 |
| 13 | NC | 保留 |
| 14 | NC | 保留 |
| 15 | TP | 可配置脉冲输出（默认 1Hz，最大 4Hz） |
| 16 | NC | 保留 |
| 17 | NC | 保留 |
| 18 | NC | 保留 |
| 19 | SCL | I2C 时钟引脚（仅用于配置） |
| 20 | SDA | I2C 数据引脚（仅用于配置） |

## 使用说明
---
1. 通用 GPS 扩展板  
得益于与 XBee 兼容的针脚和电压，GPS Bee 可以重复使用任何 XBee 插座，从 XBee 扩展板到 XBee 探索板。例如，您可以通过 XBee 扩展板将 XBee 模块安装到 Arduino 项目中。

2.

| | |
|---|---|
| USB | ![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam.jpg) |

| | |
|---|---|
| **蓝牙 GPS 模块**  
与 UartSB 配合使用作为 USB 端口 GPS 模块。您可以使用功能强大的 Ucenter 轻松获取实用的详细信息。或者，添加一个蓝牙模块以获得适用于您的项目的蓝牙 GPS 模块。 | ![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-2.jpg) |

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-3.jpg)

点击 [这里](http://garden.seeedstudio.com/images/2/20/GPSBee-exam-3.jpg) 查看清晰完整的图片。

### SIM28 模块注意事项：

1. GPS Bee 已更换为 SIM28 模块，其封装与原版本相同。

2. 您应该使用 ["SIMCom GPS DEMO"](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip) 工具来接收 SIM28 模块数据。

3. 打开 SIMCom_GPS_DEMO 工具，进入 Module-&gt;properties-&gt;module-&gt;选择 SIM28。

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_select.jpg)

4. 打开 SIMCom_GPS_DEMO 工具，进入 Module-&gt;connect。选择 GPS 模块使用的串口。

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_tools_pannel.jpg)


## 版本追踪

| 修订版 | 描述 | 发布日期 |
|----------|-------------|----------|
| GPS Bee 套件（带迷你嵌入式天线） | - | 2009年11月8日 |
| v0.91 | 补充 | 2011年3月15日 |
| v1.2 | 天线 | 2012年5月18日 |
| v1.2 | 更换 GPS 模块为 SIM28 | 2013年12月5日 |
| v1.3 | 更换 GPS 模块为 SIM28，将 LED 移至底部 | 2014年1月10日 |


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
*   [U-blox NEO-5 数据手册](https://www.seeedstudio.com/depot/datasheet/NEO-5x_Data_Sheet(GPS.G5-MS5-07025).pdf)

*   [U-blox NEO-6 数据手册](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/NEO-6_DataSheet-GPS.G6-HW-09005-.pdf)

*   [LEA-6 NEO-6 硬件集成手册](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/LEA-6_NEO-6_HardwareIntegrationManual.pdf)

*   [U-center](https://www.seeedstudio.com/depot/datasheet/u-center_5.07_Installer.rar)

*   [GPSBee 原理图 v1.2.pdf](http://garden.seeedstudio.com/images/5/58/GPSBee_v1.2.pdf)

*   [GPSBee v1.2 Eagle 文件](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPSBee_v1.2_eagle.zip)

*   [SIM28 数据文件](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIM28_DATA_File.zip)

*   [SIMCom_GPS_DEMO_V1.07](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip)

*   [GPSBee V1.3 Eagle 文件](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>