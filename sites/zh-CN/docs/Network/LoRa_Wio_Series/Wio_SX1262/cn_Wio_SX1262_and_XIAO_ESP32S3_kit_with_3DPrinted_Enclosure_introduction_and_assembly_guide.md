---
description: Wio-SX1262 和 XIAO ESP32S3 套件的介绍和组装指南，配有 3D 打印外壳
title: XIAO ESP32S3 & Wio-SX1262 套件配 3D 外壳
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/12.jpg
slug: /cn/wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide
sidebar_position: 3
last_update:
  date: 11/21/2024
  author: Evelyn Chen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/7.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

该设备基于 XIAO ESP32S3 和 Wio-SX1262 LoRa 模块。配备精美的 3D 打印外壳，具有 868-915MHz 宽频率范围和 2dBi 增益外置天线。它可以支持 2.5km 单通道 LoRaWAN 网关和 Meshtastic 通信。通过 GPIO 端口，它可以与 GNSS 模块和其他附加模块配对。

## 特性

* **高射频性能**：支持 LoRa（862-930MHz）、2.4GHz Wi-Fi 和 BLE 5.0 双无线通信。连接外置天线时，可实现 2.5km（LoRa）和 100m+（Wi-Fi/BLE）的远程通信。
* **LoRaWAN 集线器**：预刷单通道 LoRaWAN 固件，通电即可工作。
* **3D 外壳设计**：尺寸为 22x23x57mm，采用黑色 ABS 材料，温度范围广（-40℃ ~ 100℃），非常适合户外和空间受限的项目。
* **强大的 MCU 板**：集成 ESP32S3 32 位双核 Xtensa 处理器，运行频率高达 240MHz，配备多个开发端口，支持 Arduino/MicroPython。
* **精心设计的电源**：包括 Type-C USB 接口、多个 GPIO/I2C/UART 接口和锂电池充电管理。
* **多应用的多功能硬件**：可开发为 [Meshtastic](https://meshtastic.org/) 的节点或路由器、[单通道 LoRaWAN 网关](https://github.com/Lora-net/one_channel_hub)设备，或 LoRa & LoRaWAN 传感器。


## 规格

| 特性 | 详情 |
| ---- | ---- |
| 处理器 | ESP32-S3R8，Xtensa LX7 双核，32 位处理器，运行频率高达 240 MHz |
| 内存 | 片上 8M PSRAM & 8MB Flash |
| 无线 | 完整的 2.4GHz Wi-Fi 子系统<br/>BLE：蓝牙 5.0，蓝牙网格，<br/>LoRa：单通道网关 |
| 接口 | 1x UART，1x IIC，1x IIS，1x SPI，11x GPIOs（PWM），9x ADC，1x 用户 LED，1x 充电 LED<br/>1x 复位按钮，1x 启动按钮 |
| 电源 | 输入电压（Type-C）：5V<br/>输入电压（BAT）：4.2V<br/>充电电池电流：100mA |
| 工作温度 | -40 ~ 65°C | 
| **天线** |
| 类型 | SMA 转 I-PEX 外置天线 |
| 最大增益 | 2 dBi |
| 尺寸 | 13.0x195mm |
| 安装 | 安装在外壳外部 |
| 距离 | 开放环境下 2.5km |
| 应用 | 适用于大多数场景，专为室内外设计 |
| **机械** |
| 尺寸 | 22x23x57mm |
| 材料 | ABS |
| 重量 | 37.1g |

## 硬件概述

<table align="center">
  <tr>
	    <th>Wio-SX1262 扩展板示意图</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
	    <th>XIAO ESP32S3 正面指示图</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3 背面指示图</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3 引脚列表</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
</table>

### 零件清单
| 项目 | 数量 |
| ---- | ---- |
| XIAO ESP32S3 & Wio-SX1262 套件（含3D外壳） | x1 |
| 20cm USB type C 数据线 | x1 |

### 推荐配件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/10.jpg" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>适用于XIAO的L76K GNSS模块</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>

</div>

## 应用

本套件提供了2个应用。

- 配置为LoRaWAN网关（预刷固件），请参考[LoRaWAN网关配置](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/)和[LNS连接说明](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_LNS_TTN/)
- 使用Meshtastic进行网络通信，请参考[meshtastic说明](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_for_meshtastic/)


## 资源

* [Wio-SX1262 for XIAO 3D文件](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
* [Wio-SX1262 for XIAO原理图](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
* [Wio-SX1262模块数据手册](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
* [Github单通道集线器项目](https://github.com/Lora-net/one_channel_hub)
* [外壳3D文件](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/XIAO_ESP32S3_Meshtastic%26LoRa_24.11.20.zip)
