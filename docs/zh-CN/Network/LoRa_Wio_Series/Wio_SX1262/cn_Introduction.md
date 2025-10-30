---
description: Wio-SX1262 介绍
title: Wio-SX1262 介绍
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/34.png
slug: /cn/wio_sx1262
sidebar_position: 1
last_update:
  date: 10/12/2024
  author: Evelyn Chen
---

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" style={{width:900, height:'auto'}}/></div></td>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 介绍

Wio-SX1262 是一款基于高性能 Semtech SX1262 LoRa® 无线通信 IC 的低成本、超低功耗、超紧凑的 LoRa® 纯射频模块，支持 868 到 915 MHz 的 LoRa 和 LoRaWAN 频率，以及高达 +22 dBm 的高效发射功率。配备板载 IPEX 天线连接器和高质量的 TCXO（温度补偿晶体振荡器）振荡器，确保在工业高低温环境下稳定运行。它专为无线传感器网络和其他物联网设备设计，特别适用于需要电池供电、低功耗和长距离连接的应用。非常适合无线抄表、农业传感器、LoRaWAN 单通道网关等应用。

## 特性

- Wio SX1262 基于 Semtech Corporation 设计的 SX1262 子 GHz 射频收发器
- Wio SX1262 可通过高效集成功率放大器发射高达 +22 dBm 的功率
- Wio SX1262 支持用于 LPWAN 用例的 LoRa® 调制和用于传统用例的 (G)FSK 调制
- 频率覆盖范围从 868 MHz 到 960 MHz
- 具有 SPI 接口
- Wio SX1272-N 具有 SMT 封装的射频引脚，便于 PCB 设计，这意味着它不包含 IPEX 连接器

### 与其他模块的比较

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/69.png" style={{width:500, height:'auto'}}/></div></td>

## 硬件概述

Wio-SX1262 模块基于 SX1262，使其非常适合设计各种物联网节点。它支持 (G)FSK 和 LoRa® 调制，在 LoRa® 模式下带宽范围为 7.8 到 500 kHz。该模块提供 SPI 接口用于与外部 MCU 通信。其电源分配方案支持两种硬件选项：DC-DC 或线性稳压器 LDO，Wio-SX1262 模块采用 DC-DC 设计。此外，它采用高精度有源 TCXO 作为内部射频参考频率，DIO3 作为 TCXO 电压电源。

### 原理图

<td>
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/31.png" style={{width:500, height:'auto'}}/>
</div>
</td>

### 引脚图

<td>
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/30.png" style={{width:500, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/68.jpg" style={{width:700, height:'auto'}}/>
</div>
</td>

## 基于 Wio-SX1262 模块的参考设计

以下是使用 Wio-SX1262 模块的典型参考设计，只需根据参考设计将模块连接到主机 MCU。

天线设计注意事项：天线接口设计为 50Ω 阻抗，建议用户为天线预留 π 型匹配网络。

**参考设计：**

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/35.png" style={{width:700, height:'auto'}}/></div></td>

## 资源

- [Wio SX1262 模块数据手册](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262-N_Module_Datasheet.pdf)
- [Wio SX1262 原理图](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio SX1262 符号和封装文件](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_symbol_and_package_file.zip)

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
