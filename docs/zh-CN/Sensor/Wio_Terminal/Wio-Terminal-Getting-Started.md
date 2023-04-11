---
description: Wio Terminal Getting Started
title: Wio Terminal Getting Started
keywords:
- Wio Terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Getting-Started
last_update:
  date: 4/6/2023
  author: Matthew
---

# Wio Terminal入门教程

[英文版链接](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started)

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg)

**Wio Terminal** 是基于SAMD51的微控制器，具有 **Realtek RTL8720DN** 支持的无线连接，与Arduino和MicroPython兼容。它的运行速度为 **120MHz** (最高可达200MHz), **4MB** 外部闪存和 **192KB** RAM。它同时支持蓝牙和Wi-Fi，为物联网项目提供了骨架。Wio Terminal自身配有 **a 2.4” LCD屏幕, 板载IMU(LIS3DHTR)，麦克风，蜂鸣器，microSD卡槽，光传感器和红外发射器(IR 940nm)。** 最重要的是它还有两个用于[Grove生态系统](https://www.seeedstudio.com/grove.html) 的多功能Grove端口和40个Raspberry pi兼容的GPIO引脚，用于支持更多附加组件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## 产品特性

- **高度集成的设计**
    - MCU, LCD, WIFI, BT, IMU, 麦克风, 蜂鸣器, microSD Card, 光传感器, 五向开关, 光传感器和红外发射器 (IR 940nm), 加密验证
- 由 **Microchip ATSAMD51P19** 提供支持
    - ARM Cortex-M4F运行速度 **120MHz** (最高可达200MHz)
    - **4 MB** 外置闪存, **192 KB** RAM
- 全面的协议支持
    - SPI, I2C, I2S, ADC, DAC, PWM, UART(Serial)
- 强大的 **无线连接** 
    - 由 **Realtek RTL8720DN** 提供支持
    - 双频 2.4Ghz / 5Ghz Wi-Fi (802.11 a/b/g/n)
    - BLE / BLE 5.0
- **USB OTG支持**
    - USB 主机
    - USB 客户端
- [**Grove生态系统**](https://www.seeedstudio.com/grove.html)
- **软件支持**
    - Arduino
    - MicroPython
    - ArduPy
    - AT Firmware

<!-- ## 规格参数 -->

<!-- <table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={7}>主芯片</th><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>制造商零件编号</th><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ATSAMD51P19</th></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>核心处理器</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M4F</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>CPU速度</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>120MHz(最高可达200MHz)</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>程序存储大小</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>512KB</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>外置闪存</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>4MB</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>RAM大小</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>192KB</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>工作温度</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>-40°C ~ 85°C (TA)</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={3}>LCD屏</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>分辨率</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>320 x 240</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>显示屏尺寸</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>2.4英寸</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>驱动器IC</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ILI9341</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={6}>无线连接</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>制造商零件编号</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>RTL8720DN</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>KM4 CPU</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M4F</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>KM0 CPU</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M0</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Wi-Fi</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>802.11 a/b/g/n 1x1, 2.4GHz &amp; 5GHz</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>蓝牙</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>支持 BLE5.0</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>硬件引擎</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>AES/DES/SHA</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={5}>内置模块</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>加速计</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>LIS3DHTR</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>麦克风</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>1.0V-10V -42dB</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>扬声器</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>≥78dB @10cm 4000Hz</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>光传感器</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>400-1050nm</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>红外发射器</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>940nm</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={5}>接口</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>microSD卡槽</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>最大 16GB</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>GPIO</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>40-PIN (与Raspberry Pi兼容)</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Grove</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>2 (多功能)</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>FPC</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>20-PIN</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>USB Type-C</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>供电 &amp; USB-OTG</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={3}>操作界面</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>5向开关</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>电源/重置开关</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>用户自定义按钮x3</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={2}>外壳</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>尺寸</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>72mm*57mm*12mm</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>材质</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>ABS+PC</td></tr></tbody></table> -->


## 硬件概述

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Hardware-OverviewNew.png)



## 引脚图

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>


## 入门指南

### 硬件

**所需部件**

- Wio Terminal x 1
- 电脑 x 1
- USB Type-C数据线 x 1

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Powerup.png" /></div>


通过USB数据线将Wio终端连接到计算机，这时您应该发现板背面的蓝色LED点亮。

### 软件

- **第一步：安装Arduino IDE**

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**启动Arduino应用程序**

双击您预先下载好的Arduino IDE应用程序。

!!!Note
    如果Arduino软件以其他语言加载，则可以在偏好设置（Peferences）对话框中进行更改。请参阅[Arduino Software (IDE)页面](https://www.arduino.cc/en/Guide/Environment#languages) for details.

- **第二步：打开Blink示例**  

打开LED闪烁示例项目:  **File（文件） > Examples（示例） >01.Basics > Blink**


<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/select_blink.jpg" />
    <figcaption><i>Blink Path</i></figcaption>
  </figure>
</div>


- **第三步： 将Wio Terminal添加到您的Arduino IDE**

1.点击 **File（文件） > Preference（偏好设置）** ，并将以下网址复制到**Additional Boards Manager URLs**中:


```sh
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png)

点击 **Tools（工具） > Board（开发板）> Boards Manager...** ，在搜索栏中搜索关键字**Wio Terminal**后，点击并安装它。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" />
    <figcaption><i>The keyword is Wio Terminal</i></figcaption>
  </figure>
</div>


- **第四步：选择您的板和端口**   
您需要在 **Tools（工具）> Board（开发板）** 菜单中选择与您的Arduino相对应的条目。
选择 **Wio Terminal**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" />
    <figcaption> <i>Choose the right board</i></figcaption>
  </figure>
</div>


从 **Tools（工具） | Serial Port（端口）** 中选择Wio Terminal的串行设备。它应该COM3或数字更大的串口（**COM1** 和 **COM2** 通常为硬件串行端口保留）。如果您不知道是哪个，您可以断开Wio Terminal并重新打开菜单; 消失的条目应该是它的串口。重新连接电路板并选择该串行端口。

!!!note
    对于Mac用户，它应该是`/dev/cu.usbmodem141401`

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/port.png" />
    <figcaption><i>Choose the right port</i></figcaption>
  </figure>
</div>


- **第五步：上传程序**   

现在，只需单击工具栏中的 **上传（Upload）** 按钮，等待几秒程序上传成功之后，状态栏中将显示“完成上传（Done uploading.）”的信息。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/upload.png" />
    <figcaption><i>Upload the code</i></figcaption>
  </figure>
</div>



上传完成几秒钟后，您应该会看到Wio Terminal背面的LED开始闪烁。 如果LED闪烁了的话，恭喜！您已经启动并运行了Wio Terminal。如果遇到问题，请参阅故障排除建议。

请随时阅读Wio Terminal的其他教程，并开始构建属于您自己的IoT项目吧！

## FAQ

**重置Wio Terminal:**
将开关向“ON”的反向滑动，放手

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" /></div>


**进入Bootloader:**
将开关向“ON”的反向滑动，放手并再滑动一次开关

当Wio终端崩溃或因某种原因在Arduino IDE中未显示USB串行时，这非常有用。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>


**使用SWD的方式来调试和编程Wio Terminal：**
 
有两种方式可以使用SWD的方式来调试和编程Wio Terminal。

通过PCB背部的调试接口：

左边的是ATSAMD51的调试接口：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-1.png" /></div>


- SWCLK
- SWDIO
- SWO
- RST
- GND
- 3V3

右边是RTL8720DN的调试接口：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-2.png" /></div>

- CHIP
- RXD
- TXD
- GND
- 3V3

如果有非常频繁的调试需求，可以通过以下方式给其中一个Grove接口增加SWD调试的功能：

画面中的是2个未贴装的电阻位置，你可以通过在这两个焊盘上焊接0欧姆电阻或者短接使其连接，这样就会将ATSMAD51的SWD接口(SWDIO/SWCLK)并联到Grove接口上。

经过我们的测试，通过这种方式并联SWD接口，在上电和复位的时候，需要确保这个Grove接口没有连接任何的Grove模块(模块上可能有上拉/下拉电阻，从而产生影响)，否则会直接进入SWD模式而无法以普通模式运行(即开机或者复位过程中不能将SWDCLK拉低)

在除了上电和复位的时候，在使用SWD，Digital，Analog，Serial，I2C的时候，不会产生干扰，可以随时切换，但是为了避免可能的问题，在完成程序调试后，我们还是建议去掉这两个焊盘的连接。




## 资源

- **[PDF]** [ATSAMD51N19A数据手册](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ATSAMD51.pdf)
- **[PDF]** [Wio Terminal原理图](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Schematics.pdf)


## 用户项目

[初学者入门](https://mp.weixin.qq.com/s?__biz=MjM5MjIzNDAxNA==&mid=2651960639&idx=2&sn=30af694c96afd4f919b3a60baf43788e&chksm=bd4c7a4e8a3bf35800240cedb213a60974d03876fa4cb8f91d1f4f01e7e3f8dbdcad77829e62&mpshare=1&scene=1&srcid=0927nzEAK4e2MNQdFIblpvFL&sharer_sharetime=1632706279530&sharer_shareid=51e6707361af4a6f90f4253ecfc51e8e&version=3.1.12.6005&platform=win#rd)

[智能地下室](https://mp.weixin.qq.com/s?__biz=MjM5MjIzNDAxNA==&mid=2651968998&idx=1&sn=de8eabd9e4ea9d808e3c268f9f153d3d&chksm=bd4c1a978a3b938147ff58afea2146da4b082b746bbb8a9bfe601891bd9e7e87a81bfdc3531e&mpshare=1&scene=1&srcid=09279GWprgtQBe2EY1IoLnDU&sharer_sharetime=1632706300445&sharer_shareid=51e6707361af4a6f90f4253ecfc51e8e&version=3.1.12.6005&platform=win#rd)

[水产养殖系统](https://mp.weixin.qq.com/s?__biz=MjM5MjIzNDAxNA==&mid=2651964491&idx=1&sn=3c7cdec99067a09336781b9434208fa5&chksm=bd4c0b3a8a3b822c96be06a025c3144187ec41940ac3a9437b6ea64a35a747f431cb5a198fbf&mpshare=1&scene=1&srcid=0927kBYOgNnTpZtGOnlI8HG6&sharer_sharetime=1632706309141&sharer_shareid=51e6707361af4a6f90f4253ecfc51e8e&version=3.1.12.6005&platform=win#rd)

[机器学习听诊器](https://mp.weixin.qq.com/s?__biz=MjM5MjIzNDAxNA==&mid=2651968154&idx=1&sn=35941d84f237d793eaceec724a3667d0&chksm=bd4c1deb8a3b94fdb11b529fc84c87831ff1e65d87b2df556fe371180d39b38ed525aabddc5a&mpshare=1&scene=1&srcid=0927Yd3ljg4bWfPTMgRvmeWb&sharer_sharetime=1632706338801&sharer_shareid=51e6707361af4a6f90f4253ecfc51e8e&version=3.1.12.6005&platform=win#rd)

[GPS定位追踪](https://mp.weixin.qq.com/s?__biz=MjM5MjIzNDAxNA==&mid=2651965312&idx=1&sn=92fa8424b68b5489bf8f379e7a13fc5a&chksm=bd4c08f18a3b81e7df1316351773ea5b590b737cc8d5131ea73da3021ed42128ef57b3805d6c&mpshare=1&scene=1&srcid=0927M4JjAPQ6xHITGM3aq8hg&sharer_sharetime=1632706524749&sharer_shareid=51e6707361af4a6f90f4253ecfc51e8e&version=3.1.12.6005&platform=win#rd)

[智能家居中控](https://mp.weixin.qq.com/s?__biz=MjM5MjIzNDAxNA==&mid=2651961288&idx=1&sn=58bf2465f013182a6704d720b48c2fb7&chksm=bd4c78b98a3bf1af778a25d37c262c0394fd0e4d2c32043ca2a4bee28255238e02f992017690&mpshare=1&scene=1&srcid=0927AlBBqnTqcYUWq42izEiB&sharer_sharetime=1632706544092&sharer_shareid=51e6707361af4a6f90f4253ecfc51e8e&version=3.1.12.6005&platform=win#rd)

[电路城测评](https://www.cirmall.com/bbs/thread-207217-1-1.html)

[Wio Terminal 音乐频谱分析仪 -- 潘知非](https://files.seeedstudio.com/wiki/Wio-Terminal/projects/music_spectrum_analyzer.pdf)

## 技术支持

如果您有任何技术问题，请提交到我们的[论坛](https://forum.seeedstudio.com/)。<br />

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>



