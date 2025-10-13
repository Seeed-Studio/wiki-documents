---
title: Wio Terminal 入门指南
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/
slug: /cn/Wio-Terminal-Getting-Started
last_update:
  date: 01/11/2022
  author: gunengyu
---

# Wio Terminal 入门指南

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg)

**Wio Terminal** 是一款基于 SAMD51 的微控制器，具有由 **Realtek RTL8720DN** 提供的无线连接功能，兼容 Arduino 和 MicroPython。目前，无线连接功能仅支持 Arduino。它运行在 **120MHz**（可提升至 200MHz），具有 **4MB** 外部闪存和 **192KB** RAM。它支持蓝牙和 Wi-Fi，为物联网项目提供骨干支持。Wio Terminal 本身配备了 **2.4" LCD 屏幕、板载 IMU(LIS3DHTR)、麦克风、蜂鸣器、microSD 卡槽、光传感器和红外发射器(IR 940nm)。** 除此之外，它还有两个多功能 Grove 端口用于 [Grove 生态系统](https://www.seeedstudio.com/grove.html) 和 40 个兼容树莓派的引脚 GPIO 用于更多扩展。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<div>
  <p style={{textAlign: 'center'}}><a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" target="_blank" /></p><div align="center"><a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-classroom.png" /></a></div><p />
</div>

## 特性

- **高度集成设计**
  - MCU、LCD、WIFI、BT、IMU、麦克风、扬声器、microSD 卡、光传感器、5 向开关、红外发射器 (IR 940nm)、加密认证就绪
- 由 **Microchip ATSAMD51P19** 驱动
  - ARM Cortex-M4F 内核运行在 **120MHz**（可提升至 200MHz）
  - **4 MB** 外部闪存，**192 KB** RAM
- 全面的协议支持
  - SPI、I2C、I2S、ADC、DAC、PWM、UART(Serial)
- 强大的**无线连接**（仅支持 Arduino）
  - 由 **Realtek RTL8720DN** 驱动
  - 双频 2.4Ghz / 5Ghz Wi-Fi (802.11 a/b/g/n)
  - BLE / BLE 5.0
- **USB OTG 支持**
  - USB 主机
  - USB 客户端
- [**Grove 生态系统**](https://www.seeedstudio.com/grove.html)
- **软件支持**
  - Arduino
  - MicroPython
  - ArduPy
  - AT 固件

## 规格

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg">
  <tbody>
    <tr>
      <th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={7}>主芯片</th>
      <th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>制造商型号</th>
      <th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ATSAMD51P19</th>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>核心处理器</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M4F</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>CPU速度</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>120MHz（可提升至200MHz）</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>程序存储器大小</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>512KB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>外部闪存</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>4MB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>RAM大小</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>192KB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>工作温度</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>-40°C ~ 85°C (TA)</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={3}>LCD屏幕</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>分辨率</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>320 x 240</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>显示尺寸</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>2.4英寸</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>驱动IC</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ILI9341</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={6}>无线连接</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>制造商型号</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>RTL8720DN</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>KM4 CPU</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M4F</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>KM0 CPU</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M0</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Wi-Fi</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>802.11 a/b/g/n 1x1, 2.4GHz &amp; 5GHz</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>蓝牙</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>支持BLE5.0</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>硬件引擎</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>AES/DES/SHA</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={5}>内置模块</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>加速度计</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>LIS3DHTR</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>麦克风</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>1.0V-10V -42dB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>扬声器</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>≥78dB @10cm 4000Hz</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>光传感器</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>400-1050nm</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>红外发射器</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>940nm</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={5}>接口</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>microSD卡槽</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>最大16GB</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>GPIO</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>40针（兼容树莓派）</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Grove</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>2个（多功能）</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>FPC</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>20针</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>USB Type-C</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>电源 &amp; USB-OTG</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={3}>操作界面</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>5向开关</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>电源/复位开关</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>用户自定义按钮 *3</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={2}>外壳</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>尺寸</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>72mm*57mm*12mm</td>
    </tr>
    <tr>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>材料</td>
      <td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>ABS+PC</td>
    </tr>
  </tbody>
</table>

| 参数 | 描述 |
|---|---|
| **设备EUI** | 设备的唯一标识符，由设备制造商分配。它是一个全球唯一的IEEE EUI64地址，用于标识设备。 |
| **应用EUI** | 应用的唯一标识符，用于标识应用。它是一个全球唯一的IEEE EUI64地址。 |
| **应用密钥** | 用于派生会话密钥的根密钥。它是一个128位的AES密钥，由应用服务器和设备共享。 |
| **网络会话密钥** | 用于加密和验证网络层消息的密钥。它是从应用密钥派生的128位AES密钥。 |
| **应用会话密钥** | 用于加密和验证应用层消息的密钥。它是从应用密钥派生的128位AES密钥。 |
| **设备地址** | 设备的网络地址，由网络服务器分配。它是一个32位的标识符，用于在网络内路由消息。 |
| **网络ID** | 网络的标识符，用于区分不同的LoRaWAN网络。它是一个7位的标识符。 |
| **频率计划** | 定义设备可以使用的频率和数据速率的规范。不同地区有不同的频率计划。 |
| **数据速率** | 定义调制参数（扩频因子和带宽）的参数。较高的数据速率允许更快的传输但范围更短。 |
| **发射功率** | 设备传输的功率级别。较高的功率增加范围但消耗更多能量。 |
| **自适应数据速率(ADR)** | 一种机制，允许网络服务器优化设备的数据速率和发射功率以提高网络性能。 |
| **确认消息** | 需要网络服务器确认的消息类型。确认消息提供可靠性但消耗更多能量。 |
| **未确认消息** | 不需要确认的消息类型。未确认消息更节能但不提供传输保证。 |
| **上行链路** | 从设备到网络服务器的数据传输。 |
| **下行链路** | 从网络服务器到设备的数据传输。 |
| **接收窗口** | 设备在上行传输后监听下行消息的时间段。LoRaWAN定义了两个接收窗口。 |
| **帧计数器** | 用于防止重放攻击的计数器。每条消息都有一个递增的帧计数器。 |
| **端口** | 用于区分不同应用数据类型的字段。端口0保留用于MAC命令。 |
| **有效载荷** | 消息中包含的实际应用数据。 |
| **MAC命令** | 用于网络管理的特殊命令，如链路检查、设备状态请求等。 |
| **网关** | 连接LoRa设备和网络服务器的基础设施设备。网关将LoRa消息转发到网络服务器。 |
| **网络服务器** | 管理网络操作的服务器，包括设备管理、重复数据删除和MAC命令处理。 |
| **应用服务器** | 处理应用特定逻辑和数据的服务器。它接收来自网络服务器的解密应用数据。 |
| **连接服务器** | 管理设备激活和会话密钥派生的服务器组件。 |

## 硬件概览

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Hardware-Overview.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Hardware-OverviewNew.png" /></a></p>
  </figure>
</div>

## 引脚图

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg)

## 入门指南

### 硬件

**所需材料**

- Wio Terminal x 1
- 计算机 x 1
- USB Type-C 数据线 x 1

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Powerup.png" /></div>

通过 USB 数据线将 Wio Terminal 连接到您的计算机。背面的蓝色 LED 应该会亮起。

### 软件

- **步骤 1. 您需要安装 Arduino 软件。**

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**启动 Arduino 应用程序**

双击您之前下载的 Arduino IDE 应用程序。

:::note
    如果 Arduino 软件以不同的语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino 软件 (IDE) 页面](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

- **步骤 2. 打开 Blink 示例**  

打开 LED 闪烁示例程序：**File > Examples >01.Basics > Blink**。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/select_blink.jpg"/>
  <figcaption><i>Blink 路径</i></figcaption>
</figure>
</div>

- **步骤 3. 添加 Wio Terminal 开发板库**

1.打开您的 Arduino IDE，点击 **File** > **Preferences**，并将以下网址复制到 **Additional Boards Manager URLs**：

```sh
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png)

2.点击 **Tools** > **Board** > **Board Manager** 并在开发板管理器中搜索 **Wio Terminal**。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png"/>
  <figcaption><i>关键词是 Wio Terminal</i></figcaption>
</figure>
</div>

- **步骤 4. 选择您的开发板和端口**  
您需要在 **Tools > Board** 菜单中选择与您的 Arduino 对应的条目。
选择 **Wio Terminal**。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png"/>
  <figcaption> <i>选择正确的开发板</i></figcaption>
</figure>
</div>

从 **Tools -> Port** 菜单中选择 Wio Terminal 开发板的串行设备。这很可能是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串行端口）。要找出端口，您可以断开 Wio Terminal 开发板的连接并重新打开菜单；消失的条目应该就是 Arduino 开发板。重新连接开发板并选择该串行端口。

:::note
    对于 Mac 用户，它将类似于 `/dev/cu.usbmodem141401`
:::
<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/port.png"/>
  <figcaption><i>选择正确的端口</i></figcaption>
</figure>
</div>

- **步骤 5. 上传程序**  

现在，只需点击环境中的 **Upload** 按钮。等待几秒钟，如果上传成功，状态栏中将出现"Done uploading."消息。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/upload.png"/>
  <figcaption><i>上传代码</i></figcaption>
</figure>
</div>

上传完成几秒钟后，您应该会看到 Wio Terminal 底部的 LED 开始闪烁。如果是这样，恭喜您！您已经成功启动并运行了 Wio Terminal。如果您遇到问题，请查看 FAQ 建议。

如果您无法上传程序，主要是因为 Arduino IDE 无法将 Wio Terminal 置于 **bootloader 模式**。（因为 MCU 被暂停或您的程序正在处理 USB，）解决方法是手动将您的 Wio Terminal 置于 bootloader 模式，如 FAQ 中所示。

请随时查看 Wio Terminal 的其他教程并开始构建您的物联网项目！

## 常见问题

### **重置 Wio Terminal：**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" /></div>

### **进入引导加载程序：**

当 Wio Terminal 崩溃或 USB 串口在 Arduino IDE 中无法显示时，这非常有用。**快速连续滑动开关两次**，如下所示：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

一旦 Wio Terminal 进入引导加载程序模式，**蓝色 LED 将开始呼吸闪烁**，这与普通闪烁不同。再次检查端口，它应该会出现。

### **使用 SWD 测试**

有两种方式使用 SWD 对 Wio Terminal 进行测试和调试：

从 PCB 背面的测试端口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-1.png" /></div>

左侧是 ATSAMD51 的测试端口：

- SWCLK
- SWDIO
- SWO
- RST
- GND
- 3V3

右侧是 RTL8720DN 的测试端口：

- CHIP
- RXD
- TXD
- GND
- 3V3

如果您有非常频繁的调试需求，可以通过以下方式将 SWD 调试添加到其中一个 Grove 接口：

<div>
  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-2.png" /></div><br />
</div>

图片显示了两个未安装的电阻位置。您可以通过焊接 0 欧姆电阻或短接来连接这两个焊盘。这将把 ATSMAD51 的 SWD 接口（SWDIO / SWCLK）并联连接到 Grove 接口上。

经过我们的测试，SWD 接口以这种方式并联连接。在上电和复位时，您需要确保 Grove 接口没有连接任何 Grove 模块（模块可能有上拉/下拉电阻，会产生影响），否则会直接进入 SWD 模式而无法在正常模式下运行（即在上电或复位期间 SWDCLK 无法被拉低）

除了上电和复位外，在使用 SWD 时，数字、模拟、串口、I2C 都不会产生干扰，您可以随时切换，但为了避免可能的问题，我们仍建议在完成程序调试后移除这两个焊盘的连接。

### 库文件名冲突

安装 seeed-arduinocore-samd 后，内核会同时下载一些库文件来驱动不同的设备，如 **TFT_eSPI.h** 等。当您上传程序时，会发生错误，编译器会提示您找到了多个库文件。例如：

```c
Multiple libraries were found for "TFT_eSPI.h"

Used: C:\Users\Dave\Documents\Arduino\libraries\TFT_eSPI-master

Not used: C:\Users\Dave\AppData\Local\Arduino15\packages\Seeeduino\hardware\samd\1.8.2\libraries\Seeed_Arduino_LCD
```

如果您使用 seeed-SAMD 设备，请选择并使用 seeed 文件夹中的库文件，并将冲突的库文件移出 arduino 库文件夹。

当您使用其他设备时，请移除 seeed 文件夹中的库文件，保持编译器只调用一个库文件。这可以解决同名库文件不同版本造成的不兼容问题。

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/wiolibrary.png)

您可以在此处参考具体的库列表：[https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/libraries](https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/libraries)

## Wio Terminal 课堂

### 第1课 - Hello World

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/af_I0n5iyzk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第2课 - 绘制形状

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/IFRiGpK4HK8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第3课 - 显示字体

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/aZ9LYoS8w24" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第4课 - 显示图像和简单UI

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/P8CQtByWfS4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第5课 - 折线图和直方图

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/OnYLy7k-4T4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第6课 - 使用Grove模块

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NeFotsklchc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第7课 - 通信协议

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kn9WJn2FRkI" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第8课 - 内置硬件/传感器 第1部分 | 3个按钮和5向开关

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tVd4L7Hzj7M" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第9课 - 内置硬件/传感器 第2部分 | 麦克风和蜂鸣器

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/aYEI9UGIBvo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第10课 - 内置硬件/传感器 第3部分 | 加速度计和光传感器

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3dw-Ony6CIE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第11课 - 使用内置红外发射器制作电视遥控器

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/C9AlljLst2o" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第12课 - 使用Wio Terminal的智能花园项目

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NQt-XLcSIwA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第13课 - 将Wio Terminal用作PC鼠标

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QIR_yqQnYPY" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第14课 - 将Wio Terminal用作PC键盘

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/JLrP058LDr8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 由CAVEDU Education支持的Wio Terminal深度学习

**[中文]** [这里](https://www.youtube.com/watch?v=sGpRnlGPapY&list=PLZkpEAYL25ABrMJJ3cod4PfQJ1Hviuk5B)是一系列关于如何在Wio Terminal中应用深度学习的视频。

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/jietu.png)

## 资源

- **[PDF]** [ATSAMD51N19A 数据手册](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ATSAMD51.pdf)
- **[PDF]** [Wio Terminal 原理图](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-SCH-v1.2.pdf)
- **[ZIP]** [Wio Terminal 原理图](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal_SCH&PCB.zip)
- **[PDF]** [Wio Terminal 外壳尺寸 - 正面](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-V3.0-White-72x57x10.4mm.pdf)
- **[PDF]** [Wio Terminal 外壳尺寸 - 背面](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-Back-V3.0-White-72x57x7.1mm.pdf)
- **[AI]** [Wio-Terminal-屏幕贴纸设计文件(Wio-Terminal-ちゃん)](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Screen-Sticker-Design-File(Wio-Terminal-ちゃん).ai)
- **[AI]** [Wio-Terminal-chan-设计文件-蓝白色](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-chan-Desgin-File-blue&white.ai)
- **[DXF]** [Wio Terminal 外壳尺寸 - 正面](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-V3.0-White-72x57x10.4mm.dxf)
- **[DXF]** [Wio Terminal 外壳尺寸 - 背面](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-Back-V3.0-White-72x57x7.1mm.dxf)
- **[DXF]** [Wio Terminal 电池底座尺寸](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Chassis-Battery.dxf)
- **[DXF]** [Wio Terminal PCB 尺寸](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-PCB-V3.0.dxf)


<a href="https://github.com/Seeed-Studio/OSHW-WioTerminal">
  <div className="custom-layout">
    <div className="custom-image">
     <img width="100" src="https://files.seeedstudio.com/wiki/Wio-Terminal/res/oshw-logo.svg" alt="your-image-description" />
    </div>
    <div className="custom-text">
      <h2>开源硬件</h2>
      <p>本产品完全开源。通过此链接访问相关的开源文档。</p>
    </div>
  </div>
</a>


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