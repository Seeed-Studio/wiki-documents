---
description: Wio-SX1262 和 XIAO ESP32S3 套件的介绍及带有 3D 打印外壳的组装指南
title: XIAO ESP32S3 & Wio-SX1262 套件及 3D 外壳
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/12.jpg
slug: /cn/wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide
sidebar_position: 3
last_update:
  date: 2024/11/21
  author: Evelyn Chen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/7.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

该设备基于 XIAO ESP32S3 和 Wio-SX1262 LoRa 模块。配备精美的 3D 打印外壳，支持 868-915MHz 的宽频率范围，并配有 2dBi 增益的外置天线。它可以支持 2.5 公里的单通道 LoRaWAN 网关和 Meshtastic 通信。通过 GPIO 接口，它可以与 GNSS 模块和其他附加模块配对使用。

## 特性

* **高射频性能**：支持 LoRa（862-930MHz）、2.4GHz Wi-Fi 和 BLE 5.0 双无线通信。连接外置天线时，可实现 2.5 公里（LoRa）和 100 米以上（Wi-Fi / BLE）的远程通信。
* **LoRaWAN 中心**：预装单通道 LoRaWAN 固件，通电即可使用。
* **3D 外壳设计**：尺寸为 22x23x57mm，采用黑色 ABS 材料，具有宽温范围（-40℃ ~ 100℃），非常适合户外和空间受限的项目。
* **强大的 MCU 板**：集成 ESP32S3 32 位双核 Xtensa 处理器，运行频率高达 240MHz，支持多种开发端口，兼容 Arduino / MicroPython。
* **精心设计的电源系统**：包括 Type-C USB 接口、多种 GPIO/I2C/UART 接口以及锂电池充电管理。
* **多功能硬件，适用于多种应用**：可开发为 [Meshtastic](https://meshtastic.org/) 的节点或路由器、[单通道 LoRaWAN 网关](https://github.com/Lora-net/one_channel_hub) 的设备，或 LoRa 和 LoRaWAN 传感器。

## 规格

| 特性 | 详情 |
| ---- | ---- |
| 处理器 | ESP32-S3R8，Xtensa LX7 双核，32 位处理器，运行频率高达 240 MHz |
| 内存 | 片上 8M PSRAM 和 8MB Flash |
| 无线 | 完整的 2.4GHz Wi-Fi 子系统<br/>BLE：蓝牙 5.0，蓝牙 Mesh<br/>LoRa：单通道网关 |
| 接口 | 1x UART，1x IIC，1x IIS，1x SPI，11x GPIO（PWM），9x ADC，1x 用户 LED，1x 充电 LED<br/>1x 重置按钮，1x 启动按钮 |
| 电源 | 输入电压（Type-C）：5V<br/>输入电压（BAT）：4.2V<br/>充电电池电流：100mA |
| 工作温度 | -40 ~ 65°C | 
| **天线** |
| 类型 | SMA 转 I-PEX 外置天线 |
| 最大增益 | 2 dBi |
| 尺寸 | 13.0x195mm |
| 安装 | 安装在外壳外部 |
| 通信距离 | 开阔环境下 2.5 公里 |
| 应用场景 | 适用于大多数场景，设计用于室内和室外 |
| **机械** |
| 尺寸 | 22x23x57mm |
| 材质 | ABS |
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

### 部件清单
| 项目 | 数量 |
| ---- | ---- |
| XIAO ESP32S3 & Wio-SX1262 套件（带 3D 外壳） | x1 |
| 20cm USB Type-C 数据线 | x1 |

### 推荐配件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/10.jpg" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>适用于 XIAO 的 L76K GNSS 模块</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 应用

此套件提供两种应用：

- 配置为 LoRaWAN 网关（预烧录），请参考 [LoRaWAN 网关配置](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/) 和 [LNS 连接说明](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_LNS_TTN/)
- 使用 Meshtastic 进行网络通信，请参考 [Meshtastic 使用说明](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_for_meshtastic/)

## 资源

* [Wio-SX1262 for XIAO 3D 文件](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
* [Wio-SX1262 for XIAO 原理图](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
* [Wio-SX1262 模块数据手册](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
* [Github 单通道 Hub 项目](https://github.com/Lora-net/one_channel_hub)
* [外壳 3D 文件](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/XIAO_ESP32S3_Meshtastic%26LoRa_24.11.20.zip)