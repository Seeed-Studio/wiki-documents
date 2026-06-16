---
description: 介绍
title: Wio-S3 无线模组介绍
keywords:
  - wio
  - module
  - LoRa
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.webp
slug: /wio-s3_wireless_module_introduction
sku: 100020327,100079384
sidebar_position: 1
last_update:
  date: 6/9/2026
  author: Janet Zhang
createdAt: '2026-06-09'
updatedAt: '2026-06-09'
url: https://wiki.seeedstudio.com/cn/wio-s3_wireless_module_introduction/
---

<!-- ![Wio-S3](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wio-S3-Wireless-Module-p-6832.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-S3-Wireless-Module-p-6832.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

---

:::tip SenseCAP Module Comparison
<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Module_comparision_1.jpg" width="800" alt="appearance" />
</div>
<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Module_comparision_2.jpg" width="800" alt="appearance" />
</div>
:::

## 产品介绍

[Wio-S3 wireless module](https://www.seeedstudio.com/Wio-S3-Wireless-Module-p-6832.html) 内置 [ESP32-S3R8](https://www.espressif.com/en/products/socs/esp32-s3/) 双核 Xtensa® LX7 MCU 和远距离 [SX1262 LoRa chip](https://www.semtech.com/products/wireless-rf/lora-connect/sx1262)。它支持 EU868、US915 等 LoRaWAN 频段规划，以及 **2.4GHz Wi-Fi 和 BLE 5.0 连接**。集成 16MB Flash 和 8MB PSRAM，非常适合边缘 AI 处理。 

我们提供两种版本（带或不带板载 IPEX 接头），为开发者提供灵活的天线集成选项。模块配备 TCXO，可确保稳定且精确的射频性能，适用于需要远距离、高性能和可靠无线通信的物联网应用。

:::info
| SKU | 名称 | 规格 |
| :--- | :--- | :--- |
| 100020327 | Wio-S3 Wireless Module | 带 IPEX 接头 |
| 100079384 | Wio-S3-N Wireless Module | 不带 IPEX 接头 |
:::

![Wio-S3](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module.jpg)

:::tip
如果你对 LoRa® 和 LoRaWAN® 还不太熟悉，可以查看这篇文章 [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) 了解详情。
:::

## 特性

- **强大的 MCU**：基于 ESP32-S3R8 双核 Xtensa® LX7 MCU，主频最高可达 240 MHz。
- **大容量存储**：配备 16 MB 外部 Flash 和 8 MB PSRAM，适用于复杂的物联网和边缘 AI 应用。
- **Wi-Fi 与 Bluetooth® 连接**：支持 2.4 GHz Wi-Fi（IEEE 802.11 b/g/n）和 Bluetooth® 5.0 低功耗。
- **先进的 LoRa® 收发器与全球 LoRaWAN® 支持**：基于 Semtech SX1262 芯片，实现远距离、低功耗无线通信。兼容包括 EU868、US915、AU915、AS923、KR920 和 IN865 在内的多种 LoRaWAN® 频段规划，适合全球部署。
- **丰富的外设接口**：支持 UART、I2C、SPI、USB、ADC、PWM、I2S、SD/MMC、CAN（TWAI®）以及 GPIO。
- **高射频性能**：
  - 灵敏度：最高 -137 dBm @ SF12，BW125 kHz
  - 射频输出功率：最高 20.9 dBm @ 868/915 MHz
- **高稳定性**：集成 TCXO，确保稳定的频率基准和可靠的射频通信。
- **超低功耗**：休眠电流低至 9.3 μA。
- **射频屏蔽设计**：集成屏蔽罩，增强信号完整性并提供 EMI 防护。
- **灵活的天线选项**：提供带或不带板载 IPEX 接头的版本，支持多种天线集成方案。
- **紧凑的 SMT 封装形式**：21.6 × 16.5 × 3.3 mm，38 引脚 SMT 封装，便于集成到空间受限的设计中。
- **易于使用**：内置指令固件，并支持使用 SDK 进行自定义产品开发。
- **高性价比方案**：优化的硬件设计，在具备强大性能的同时保持有竞争力的成本。
- **专为物联网应用设计**：非常适合智慧农业、工业物联网、环境监测、资产追踪以及边缘 AI 部署。
- **通过 FCC、CE、Telec 认证**


:::note
如果你有大批量需求，或需要了解更多 Seeed 工业物联网产品与服务信息，请随时通过 order@seeed.cc 与我们直接联系，或点击[这里](https://solution.seeedstudio.com/contact-us/)。我们将很乐意为你提供最优惠的价格折扣。我们也非常期待你能借助我们的产品和服务实现规模化部署并拓展业务。
:::

## 应用场景

非常适合作为 LoRaWAN® 传感节点，以及广泛的无线通信应用，包括环境监测、智慧农业、工业物联网、资产追踪、智慧城市和远程感知系统等。

![applications](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/application.jpg)

- **智慧农业**：实现对环境条件的远程监测，支持精准农业和智能灌溉。
- **工业自动化**：支持工业监测和网状网络，在复杂环境中提升系统效率和可靠性。
- **物联网数据记录与远程监控**：非常适合低功耗数据记录仪和分布式感知应用，确保稳定的远距离通信。
- **医疗与可穿戴设备**：为健康监测和可穿戴设备提供可靠的数据传输和低功耗运行。
- **AIoT 与人机交互**：支持语音与图像识别等边缘 AI 应用，以及触控和交互式控制系统。

## 硬件引脚定义

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/pinout.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/pinout-2.jpg" width="700" alt="appearance" />
</div>

| 引脚号 | 名称 | 类型 | 描述 |
| :--- | :--- | :--- | :--- |
| 1 | ESP_GPIO47 | I/O/T | MCU GPIO |
| 2 | ESP_GPIO38 | I/O/T | MCU GPIO |
| 3 | ESP_GPIO39 | I/O/T | MCU GPIO |
| 4 | ESP_GPIO40 | I/O/T | MCU GPIO |
| 5 | ESP_GPIO41 | I/O/T | MCU GPIO |
| 6 | ESP_GPIO42 | I/O/T | MCU GPIO |
| 7 | ESP_GPIO43 / UART0_TX | I/O/T | MCU GPIO；来自 MCU 的 UART0_TX |
| 8 | ESP_GPIO44 / UART0_RX | I/O/T | MCU GPIO；来自 MCU 的 UART0_RX |
| 9 | ESP_GPIO45 | I/O/T | MCU GPIO |
| 10 | ESP_GPIO46 | I/O/T | MCU GPIO |
| 11 | ESP_GPIO3 | I/O/T | MCU GPIO |
| 12 | ESP_GPIO2 | I/O/T | MCU GPIO |
| 13 | ESP_GPIO1 | I/O/T | MCU GPIO |
| 14 | ESP_BOOT | I/O/T | MCU GPIO0，<br />启动模式：拉低进入下载启动模式。 |
| 15 | ESP_RST | I | CHIP_PU：<br />高电平：芯片使能；<br />低电平：芯片关闭；确保 CHIP_PU 引脚不要悬空。 |
| 16 | GND | - | 地 |
| 17 | GND | - | 地 |
| 18 | WIFI / BT_ANT / NC | I/O | 来自 MCU 的 WiFi 和 BT 射频输入与输出 |
| 19 | GND | - | 地 |
| 20 | GND | - | 地 |
| 21 | VCC 3V3 | - | 模组电源电压 |
| 22 | GND | - | 地 |
| 23 | GND | - | 地 |
| 24 | ESP_GPIO11 | I/O/T | MCU GPIO |
| 25 | ESP_GPIO10 | I/O/T | MCU GPIO |
| 26 | ESP_GPIO12 | I/O/T | MCU GPIO |
| 27 | ESP_GPIO13 | I/O/T | MCU GPIO |
| 28 | ESP_GPIO14 | I/O/T | MCU GPIO |
| 29 | ESP_GPIO15 | I/O/T | MCU GPIO |
| 30 | ESP_GPIO16 | I/O/T | MCU GPIO |
| 31 | ESP_GPIO17 | I/O/T | MCU GPIO |
| 32 | ESP_GPIO18 | I/O/T | MCU GPIO |
| 33 | ESP_GPIO19 / USB_DM | I/O/T | MCU GPIO；来自 MCU 的 USB_D- |
| 34 | ESP_GPIO20 / USB_DP | I/O/T | MCU GPIO；来自 MCU 的 USB_D+ |
| 35 | ESP_GPIO48 | I/O/T | MCU GPIO |
| 36 | GND | - | 地 |
| 37 | LORA_ANT / NC | - | LoRa 射频输入与输出 |
| 38 | GND | - | 地 |
| 39 | GND | - | 地 |

## 规格参数

<table class="tg">
<thead>
  <tr>
    <th>项目</th>
    <th>参数</th>
    <th colspan="4">规格</th>
    <th>单位</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">核心</td>
    <td>MCU</td>
    <td colspan="4">Xtensa® 32-bit LX7（双核，最高 240MHz）</td>
    <td></td>
  </tr>
  <tr>
    <td>存储</td>
    <td colspan="4">16MB Flash，512KB SRAM</td>
    <td></td>
  </tr>

  <tr>
    <td rowspan="2">结构</td>
    <td>尺寸</td>
    <td colspan="4">21.6*(L) * 16.5(W) * 3.3(H)</td>
    <td>mm</td>
  </tr>
  <tr>
    <td>封装</td>
    <td colspan="4">38 引脚，SMT</td>
    <td></td>
  </tr>

  <tr>
    <td rowspan="16">电气特性</td>
    <td>电源电压</td>
    <td colspan="4">3.0 - 3.6V（典型值 3.3V）</td>
    <td>V</td>
  </tr>
  <tr>
    <td>最小休眠电流</td>
    <td colspan="4">9.3uA</td>
    <td>uA</td>
  </tr>
  <tr>
    <td>最小待机电流</td>
    <td colspan="4">1.43 </td>
    <td>mA</td>
  </tr>
  <tr>
    <td rowspan="3">工作电流（发射端+MCU）</td>
    <td colspan="4">113mA @16dBm，868MHz 型号</td>
    <td rowspan="3">mA</td>
  </tr>
  <tr>
    <td colspan="4">125mA @22dBm，868MHz 型号</td>
  </tr>
  <tr>
    <td colspan="4">127mA @22dBm，915MHz 型号</td>
  </tr>
  <tr>
    <td rowspan="2">工作电流（接收端+MCU）</td>
    <td colspan="4">5.5mA @BW125kHz，868MHz 型号</td>
    <td rowspan="2">mA</td>
  </tr>
  <tr>
    <td colspan="4">5.7mA @BW125kHz，915MHz 型号</td>
  </tr>
  <tr>
    <td rowspan="2">输出功率</td>
    <td colspan="4">20.9dBm 最大值 @868MHz LoRa</td>
    <td rowspan="2">dBm</td>
  </tr>
  <tr>
    <td colspan="4">20.74dBm 最大值 @915MHz LoRa</td>
  </tr>
  <tr>
    <td rowspan="4">灵敏度</td>
    <td colspan="4">@SF12，BW125kHz</td>
    <td rowspan="4">dBm</td>
  </tr>
  <tr>
    <td>Fr(MHz)</td>
    <td colspan="2">典型值</td>
    <td colspan="2">最大值</td>
  </tr>
  <tr>
    <td>868</td>
    <td colspan="2">-137</td>
    <td colspan="2">-137</td>
  </tr>
  <tr>
    <td>915</td>
    <td colspan="2">-136.5</td>
    <td colspan="2">-136.9</td>
  </tr>
<tr>
    <td rowspan="2">谐波（LoRa）</td>
    <td colspan="4">&lt; -41dBm（2 次谐波）</td>
    <td rowspan="2">dBm</td>
</tr>
<tr>
    <td colspan="4">&lt; -49dBm（3 次谐波）</td>
</tr>

  <tr>
    <td rowspan="8">接口</td>
    <td>RFIO</td>
    <td colspan="4">2 个射频端口（Wi-Fi/BT 和 LoRa）</td>
    <td></td>
  </tr>
  <tr>
    <td>UART</td>
    <td colspan="4">3 组 UART</td>
    <td></td>
  </tr>
  <tr>
    <td>I2C</td>
    <td colspan="4">2 组 I2C</td>
    <td></td>
  </tr>
  <tr>
    <td>ADC</td>
    <td colspan="4">2 组 ADC，12 位</td>
    <td></td>
  </tr>
  <tr>
    <td>SPI</td>
    <td colspan="4">1 组 SPI</td>
    <td></td>
  </tr>
  <tr>
    <td>USB</td>
    <td colspan="4">1 组 USB</td>
    <td></td>
  </tr>
  <tr>
    <td>NRST</td>
    <td colspan="4">1 个手动复位引脚输入</td>
    <td></td>
  </tr>
  <tr>
    <td>BOOT</td>
    <td colspan="4">1 个手动 Boot 引脚输入</td>
    <td></td>
  </tr>

  <tr>
    <td>温度</td>
    <td>工作温度</td>
    <td colspan="4">-40 ~ 85</td>
    <td>℃</td>
  </tr>
</tbody>
</table>

## 功耗

<table class="tg">
<thead>
  <tr>
    <th colspan="2">模式</th>
    <th>电源类型</th>
    <th>项目</th>
    <th>数据（平均）</th>
    <th>备注</th>
  </tr>
</thead>
<tbody>
<tr>
    <td rowspan="6">WiFi</td>
    <td rowspan="3">WiFi 发射（Tx）</td>
    <td rowspan="6">3.3V</td>
    <td>802.11B</td>
    <td>349mA</td>
    <td rowspan="6">WiFi 天线已连接，LoRa 休眠</td>
</tr>
<tr>
    <td>802.11G</td>
    <td>333mA</td>
</tr>
<tr>
    <td>802.11N</td>
    <td>310mA</td>
</tr>
<tr>
    <td rowspan="3">WiFi 接收（Rx）</td>
    <td>802.11B</td>
    <td>104mA</td>
</tr>
<tr>
    <td>802.11G</td>
    <td>103mA</td>
</tr>
<tr>
    <td>802.11N</td>
    <td>103mA</td>
</tr>

<tr>
    <td rowspan="8">LoRa</td>
    <td rowspan="3">LoRa 发射（Tx）</td>
    <td rowspan="3">3.3V</td>
    <td>868MHz，16dBm</td>
    <td>113mA</td>
    <td rowspan="8">LoRa 天线已连接，WiFi 和 BLE 关闭</td>
</tr>
<tr>
    <td>868MHz，22dBm</td>
    <td>125mA</td>
</tr>
<tr>
    <td>915MHz，22dBm</td>
    <td>127mA</td>
</tr>
<tr>
    <td rowspan="3">LoRa 发射（Tx）</td>
    <td rowspan="3">3.0V</td>
    <td>868MHz，16dBm</td>
    <td>109mA</td>
</tr>
<tr>
    <td>868MHz，22dBm</td>
    <td>124mA</td>
</tr>
<tr>
    <td>915MHz，22dBm</td>
    <td>123mA</td>
</tr>
<tr>
    <td rowspan="2">LoRa 接收（Rx）</td>
    <td rowspan="2">3.3V</td>
    <td>868MHz</td>
    <td>5.5mA</td>
</tr>
<tr>
    <td>915MHz</td>
    <td>5.7mA</td>
</tr>

<tr>
    <td rowspan="2" colspan="2">WiFi + LoRa</td>
    <td rowspan="2">3.3V</td>
    <td>WiFi 11B AP + LoRa 915MHz，22dBm</td>
    <td>201mA</td>
    <td></td>
</tr>
<tr>
    <td>WiFi 11B AP + LoRa 868MHz，16dBm</td>
    <td>189mA</td>
    <td></td>
</tr>

<tr>
    <td rowspan="2" colspan="2">BLE + LoRa</td>
    <td rowspan="2">3.3V</td>
    <td>BLE 广播 + LoRa 915MHz，22dBm</td>
    <td>158mA</td>
    <td></td>
</tr>
<tr>
    <td>BLE 广播 + LoRa 868MHz，16dBm</td>
    <td>146mA</td>
    <td></td>
</tr>

<tr>
    <td colspan="2">深度睡眠</td>
    <td>3.3V</td>
    <td>ESP32-S3 深度睡眠，LoRa 休眠</td>
    <td>9.3uA</td>
    <td>ESP32-S3：所有外设关闭，深度睡眠</td>
</tr>

<tr>
    <td colspan="2">待机 / 轻度睡眠</td>
    <td>3.3V</td>
    <td>ESP32-S3 轻度睡眠，LoRa 待机</td>
    <td>1.43mA</td>
    <td>ESP32-S3：轻度睡眠，RTC/ULP 处于活动状态，任意事件唤醒；LoRa 待机（STDB_RC），内部 RC 唤醒；所有射频关闭</td>
</tr>
</tbody>
</table>

:::note
上述功耗数据是在实验室测试条件下测得，仅供参考。实际功耗可能会因固件、外设、工作模式、环境条件和硬件配置的不同而有所变化。
:::

## 典型射频性能测试

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/RF1.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/RF2.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/RF3.jpg" width="700" alt="appearance" />
</div>

## 包装信息

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/appearance.jpg" width="700" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/layout.jpg" width="500" alt="layout" />
</div>

## 基于 Wio-S3 模组的参考设计

该参考设计有助于快速开发双模 LoRaWAN® 和 Wi-Fi/Bluetooth 节点，用户只需通过专用 UART 接口发送指令即可实现快速配置。系统集成了双 5V USB-C 输入和 1A 保险丝保护、由 PMOS 控制的 3.3V BUCK 稳压器以及专用 U.FL 射频端口，同时引出了关键的 RST、BOOT（GPIO0）和外设 GPIO 引脚，便于编程和传感器扩展。

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/reference-design-of-s3.png" width="1000" alt="layout" />
</div>

## 资源

### 数据手册

- [Wio-S3 数据手册与规格](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3_Module_Datasheet_V1.0.pdf)
- [Espressif ESP32-S3R8 数据手册](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Espressif_ESP32-S3R8_Datasheet.pdf)
- [Semtech SX1262 数据手册](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/SX1261_2%20V2-2.pdf)

### 库

- [Wio-S3 kicad 库](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3_Wireless_Module_Kicad_File.zip)
- [Wio-S3 STEP 3D 文件](https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3%20Wireless%20Module_3D.step)

### 相关 SDK

- [ESP32-S3 的 ESP-IDF 用户指南，SDK](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)
- [ESP32-S3 测试工具和指南](https://docs.espressif.com/projects/esp-test-tools/en/latest/esp32s3/index.html)



## 技术支持与产品讨论

如有任何技术问题，请在我们的[论坛](http://forum.seeedstudio.com/)中提交。

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>