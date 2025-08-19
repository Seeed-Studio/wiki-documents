---
description: XIAO ESP32S3 & Wio-SX1262 Kit 的介绍
title: XIAO ESP32S3 & Wio-SX1262 Kit 介绍
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /cn/wio_sx1262_with_xiao_esp32s3_kit
sidebar_position: 1
last_update:
  date: 09/30/2024
  author: Evelyn Chen
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:600, height:'auto'}}/></div>

<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <a
    href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
    style={{
      display: 'inline-block',
      margin: '0 12px',
      padding: '12px 24px',
      backgroundColor: '#4ec354',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      textDecoration: 'none',
    }}
  >
    从 Seeed 在线商店购买
  </a>

  <a
    href="https://s.click.aliexpress.com/e/_o2E9vLh"
    style={{
      display: 'inline-block',
      margin: '0 12px',
      padding: '12px 24px',
      backgroundColor: '#4ec354',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      textDecoration: 'none',
    }}
  >
    从 Aliexpress 购买
  </a>
</div>



## 介绍

这款拇指大小的 LoRa 开发套件由 XIAO ESP32S3 和 Wio-SX1262 LoRa 模块组成，是 Meshtastic 和 LoRa/LoRaWAN 项目的理想入门套件。支持 WiFi、BLE 和 LoRa，内置电源管理芯片，可通过 IIC、UART 和其他 GPIO 接口扩展，并兼容 Arduino 开发。
XIAO ESP32S3 & Wio-SX1262 Kit 是一个单通道 LoRaWAN LoRa 模块，具有低价格和高性价比。适用于长距离、低功耗、小数据量的应用场景。支持超过 30 个节点设备（具体取决于上传间隔、数据负载等）。

Seeed 为 XIAO ESP32S3 & Wio-SX1262 Kit 提供了 3 种应用：
- 使用 Meshtastic 进行网络通信
- 配置为 LoRaWAN 节点
- 配置为 LoRaWAN 网关

## 特性

* **Meshtastic 开箱即用**：预装了 Meshtastic 固件，通电即可使用。
* **卓越的射频性能**：支持 LoRa（862-930MHz）、2.4GHz Wi-Fi 和 BLE 5.0 双无线通信，连接 U.FL 天线时支持 2~5km（LoRa）和 100m+（Wi-Fi/BLE）远程通信。
* **拇指大小的紧凑设计**：尺寸为 21 x 18mm，采用经典的 XIAO 外形，适用于空间受限的项目，如可穿戴设备。
* **强大的 MCU 板**：集成 ESP32S3 32 位双核 Xtensa 处理器，运行频率高达 240MHz，支持多种开发端口，兼容 Arduino / MicroPython。
* **精心设计的电源方案**：包括 Type-C USB 接口和锂电池充电管理功能。



## 规格


| 特性 | 详情 |
| ---- | ---- |
| ESP32S3 | ESP32-S3R8，Xtensa LX7 双核，32 位处理器，运行频率高达 240 MHz |
| LoRa | 基于 Semtech SX1262，支持 862-930MHz |
| BLE | 蓝牙 5.0，蓝牙 Mesh |
| Wi-Fi | 完整的 2.4GHz Wi-Fi 子系统 |
| 接口（ESP32S3） | 1x UART，1x IIC，1x IIS，1x SPI（连接到 SX1262），11x GPIO（PWM），9x ADC，1x 用户 LED，1x 充电 LED，1x 重置按钮，1x 启动按钮 |
| 接口（Wio-SX1262） | 1x 用户按钮，1x SPI（连接到 ESP32S3） |
| 电源 | 输入电压（Type-C）：5V <br/> 输入电压（BAT）：4.2V <br/> 充电电池电流：100mA |
| 工作温度 | -40°C ~ 65°C |
| 尺寸 | 21 x 17.8mm |

## 硬件准备

### 部件清单

| 项目 | 数量 |
| ---- | ---- |
| XIAO ESP32S3 | x1 |
| Wio-SX1262 扩展板 | x1 |
| Wi-Fi 天线 | x1 |
| LoRa 天线 | x1 |

### 推荐配件

兼容 XIAO 扩展板，可添加屏幕和传感器，并通过 Grove 扩展板添加 Grove 传感器。

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO 扩展板</th>
      <th>Grove 基座 for XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

我们还为此套件提供了两种天线，以支持多功能应用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/37.png" style={{width:600, height:'auto'}}/></div>

:::note
原装 FPC 天线：仅供**测试**使用。如需可靠性要求，请额外购买天线 2。
:::

## 硬件概览

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

## 视频教程

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/AGPZ9xnX3gs" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 资源

* [Wio-SX1262 模块数据手册](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
* [Wio-SX1262 原理图](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
* [Wio-SX1262 for XIAO 3D 文件](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.step)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>