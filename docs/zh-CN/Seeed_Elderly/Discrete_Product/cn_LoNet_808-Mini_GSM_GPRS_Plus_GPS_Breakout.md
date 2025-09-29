---
description: LoNet 808 - Mini GSM/GPRS Plus GPS Breakout
title: LoNet 808 - Mini GSM/GPRS Plus GPS Breakout
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/113990107%200.jpg)

该开发板基于最新的 SIMCOM SIM808 GSM/GPS 模块，提供蜂窝 GSM 和 GPRS 数据连接，同时支持 GPS 技术进行卫星导航。

该开发板在睡眠模式下具有超低功耗，使项目能够实现极长的待机时间。此外，板载电池充电电路可与 LiPo 电池配合使用。

GPS 接收器具有极高的灵敏度，支持 22 个跟踪通道和 66 个捕获通道，同时支持辅助 GPS (A-GPS)，可用于室内定位。开发板通过 UART 使用 AT 指令进行控制，并支持 3.3V 和 5V 逻辑电平。它配备了迷你 GPS 和 GSM 天线，但电池为可选项。

该开发板使用 2G（非 3G 或 LTE）GSM 网络。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoNet-808-Mini-GSM%26GPRS-%2B-GPS-Breakout-p-2493.html)

## 特性

*   四频段 850/900/1800/1900MHz
*   GPRS 多时隙 Class 12 连接：最大 85.6kbps（下载/上传）
*   GPRS 移动站 Class B
*   通过 AT 指令控制（3GPP TS 27.007、27.005 和 SIMCOM 增强 AT 指令）
*   支持锂离子电池充电控制
*   支持实时时钟
*   电源电压范围 3.4V ~ 4.4V
*   集成 GPS/CNSS 并支持 A-GPS
*   支持 3.0V 至 5.0V 逻辑电平
*   低功耗，睡眠模式下仅 1mA
*   支持 GPS NMEA 协议
*   紧凑尺寸 27mm × 46mm × 10mm
*   标准 SIM 卡

## GPS 规格

*   接收通道：22 个跟踪 / 66 个捕获
*   粗码/捕获码：GPS L1
*   跟踪灵敏度：-165dBm
*   冷启动时间：30 秒（典型值）
*   热启动时间：1 秒（典型值）
*   温启动时间：28 秒（典型值）
*   水平定位精度：&lt;2.5m CEP
*   功耗 - 捕获：42mA
*   功耗 - 连续跟踪：24mA
*   更新速率：5Hz

## 接口

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Mappings-01.png)

1. 电源按钮：这是模块的硬电源开关。当模块通电时，可以通过按下按钮 2 秒来打开或关闭模块。
2. 锂离子电池：这是模块的电源，输入电压范围为 3.4V 至 4.4V。使用 JST-2.0mm 接头，方便连接 3.7V Li-Po 电池。
3. MicroUSB：锂离子电池的充电接口，输入电压范围为 5V 至 7V。
4. GSM 天线：这是一个 uFL GSM 天线连接器，只需连接到 GSM 天线即可接收 GSM 信号。
5. GPS 天线：这是一个 uFL GPS 天线连接器。可以连接被动或主动 GPS 天线。主动 GPS 天线运行电压为 2.8V。
6. 网络指示灯：红色 LED，指示模块连接网络的状态。
7. 状态指示灯：绿色 LED，指示模块是否运行，模块运行时亮起。
8. 扩展引脚：详见引脚定义。
9. SIM 卡座：标准 SIM 卡的卡座。
10. 电源引脚：用于电源焊接和测试。

### 引脚定义

| 名称 | I/O | 描述 | 备注 |
|------|-----|------|------|
| BAT | I/O | 电源输入/输出 | 3.4V - 4.4V DC |
| GND | I/O | 电源地/逻辑地 | |
| VIO | I | 逻辑电平参考 | 2.8V - 5.0V DC |
| DTR | I | 睡眠模式控制引脚 | 拉高进入睡眠模式 |
| PWR | O | 电源开关 | 低电平保持 2 秒 |
| RI | O | 事件/消息引脚 | |
| TXD | O | 数据发送 | SIM808 的 UART 输出 |
| RXD | I | 数据接收 | SIM808 的 UART 输入 |
| RST | I | 复位引脚 | 低电平激活 |

### 指示灯状态

| 指示灯 | 状态 | 行为 |
|--------|------|------|
| 运行状态（绿色） | 关闭 | SIM808 未运行 |
| | 打开 | SIM808 正在运行 |
| 网络状态（红色） | 关闭 | SIM808 未运行 |
| | 64ms 开/800ms 关 | SIM808 未注册到网络 |
| | 64ms 开/3000ms 关 | SIM808 已注册到网络 |
| | 64ms 开/300ms 关 | 已建立 PPP GPRS 通信 |

## 配件

除了天线之外，使用 LoNet 808 时可能需要以下配件：

| 配件 | 描述 |
|------|------|
| ![SIM卡](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Simcard.jpg) | **SIM卡**<br/>用于 GSM/GPRS 通信 |
| [![3.7V 锂电池](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Battery_2200ma.jpg)](https://www.seeedstudio.com/depot/Polymer-Lithium-Ion-Battery-2200mAh-37V-p-1709.html?cPath=1_3) | **3.7V 锂电池**<br/>用于供电 |
| [![DC/DC 电压调节器](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Power_Converter.jpg)](https://www.seeedstudio.com/depot/Adjustable-DCDC-Power-Converter-125V-35V3A-p-1534.html?cPath=1_4) | **DC/DC 电压调节器**<br/>用于供电 |
| [![MicroUSB 数据线](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/100cmUSBc.jpg)](https://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html) | **MicroUSB 数据线**<br/>用于电池充电 |
| [![USB 转 UART 工具](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/USB_To_Uart_5V3V3.jpg)](https://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html) | **USB 转 UART 工具**<br/>用于在 PC 上测试 AT 指令 |
| [![太阳能板](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/3wsp.JPG)](https://www.seeedstudio.com/depot/3W-Solar-Panel-138X160-p-954.html?cPath=1_118) | **太阳能板**<br/>用于电池充电 |

## 使用方法

### 参考电路

**连接到 MCU**

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/C1-01.png)

**连接到 PC**

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/C2-01.png)

### 使用 AT 指令入门

该模块通过串口使用 AT 指令进行控制，这里我们使用 Arduino 作为 USB 转串口工具。将以下代码上传到 Arduino 并打开串口监视器。如果您使用其他 USB 转串口工具，可以使用 [AT Command Tester](/cn/AT_Command_Tester_Application) 或 [SSCOM32](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/Sscom32E.zip) 测试 AT 指令。

```arduino
// 此代码用于使用 Arduino 测试 LoNet

// 将 VIO 连接到 +5V
// 将 GND 连接到地
// 将 RX（数据输入 SIM808）连接到数字 11
// 将 TX（数据输出 SIM808）连接到数字 10

#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX

void setup()
{
    // 打开串口通信并等待端口打开：
    Serial.begin(9600);
    mySerial.begin(9600);
}

void loop() // 循环运行
{
    if (mySerial.available())
        Serial.write(mySerial.read());

    if (Serial.available())
    {
        while(Serial.available())
        {
            mySerial.write(Serial.read());
        }
        mySerial.println();
    }
}
```

#### 设置波特率并启用充电功能

建议在首次使用模块时执行此过程。在以下表格的串口监视器列中，AT 指令的输入为黑色，模块返回的值为橙色。

| 串口监视器 | 描述 |
|------------|------|
| AT<br/>OK | 发送指令 "AT" 以同步波特率。模块的串口默认设置为自动波特率模式，在此模式下，模块启动时不会输出任何指示。 |
| AT+IPR=9600<br/>OK | 将波特率设置为 9600bps，支持 1200bps 到 115200bps 的波特率。 |
| AT+ECHARGE=1<br/>OK | 发送指令 "AT+ECHARGE=1" 以启用电池充电功能。默认情况下充电功能是关闭的。 |
| AT&W<br/>OK | 保存参数设置。 |
| AT+CPOWD=1<br/>NORMAL POWER DOWN | 关闭模块电源。 |
| RDY<br/>+CFUN: 1<br/>GPS Ready<br/>+CPIN: READY<br/>Call Ready<br/>SMS Ready | 再次通过电源按钮打开模块，它将响应 GPS 和 GSM 的状态。 |
| AT+CBC<br/>+CBC: 1,96,4175<br/>OK | 查询充电状态和剩余电池容量。 |
| AT+CSQ<br/>+CSQ: 14,0<br/>OK | 查询 GSM 信号质量。 |

#### 使用 GPS 获取位置

| 串口监视器 | 描述 |
|------------|------|
| AT+CGPSPWR=1<br/>OK | 打开 GPS |
| AT+CGPSSTATUS?<br/> +CGPSSTATUS: Location Not Fix<br/>OK | 读取 GPS 定位状态，“Location Not Fix” 表示定位未成功。首次启动时至少需要 30 秒。_**GPS 必须在窗边或室外测试。**_ |
| AT+CGPSSTATUS?<br/> +CGPSSTATUS: Location 3D Fix<br/>OK | GPS 已成功定位并处于 3D 状态。 |
| AT+CGPSINF=0<br/> +CGPSINF:<br/> 0,2234.931817,11357.122485,<br/>92.461185,20141031041141.000,<br/>88,12,0.000000,0.000000 | 获取当前 GPS 位置信息。参数格式：&lt;模式&gt;, &lt;海拔&gt;, &lt;经度&gt;, &lt;UTC 时间&gt;, &lt;TTFF&gt;, &lt;卫星数量&gt;, &lt;速度&gt;, &lt;航向&gt; |
| AT+CGPSOUT=32<br/>OK<br/>$GPRMC,043326.000,A,<br/>2234.9414,N,11357.1187,E,<br/>0.000,143.69,311014,,,A*50 | 读取 NMEA $GPRMC 数据，其中 "2234.9414 N, 11357.1187 E" 是位置信息。有关 NMEA 语句的更多详细信息，请[查看此网站](http://www.gpsinformation.org/dale/nmea.htm)。 |
| AT+CGPSRST=0<br/>OK | 在冷启动模式下重置 GPS。 |
| AT+CGPSRST=1<br/>OK | 在热启动模式下重置 GPS。 |
| AT+CGPSPWR=0<br/>OK | 关闭 GPS。 |

## 下载

*   [LoNet_808_原理图](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/LoNet_808_Schematic.pdf)
*   [SIM800_AT指令手册](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM800_ATCommand_Manual_V1.02.pdf)
*   [SIM808_硬件设计手册](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM808_Hardware_Design_V1.00.pdf)
*   [SIM808_GPS应用说明](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM808_GPS_Application_Note_V1.00.pdf)

## 资源

*   [GitHub上的GPRS_Shield库](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
*   [Adafruit_FONA库](https://github.com/adafruit/Adafruit_FONA_Library/)

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