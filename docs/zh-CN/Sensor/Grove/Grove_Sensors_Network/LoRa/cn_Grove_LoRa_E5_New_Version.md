---
title: Grove - Wio-E5
nointro: null
keywords:
  - LoRa
  - E5
  - Grove
description: Grove LoRa-E5，由 Seeed Studio 推出的强大且多功能的 LoRa 模块。探索其功能、数据手册、认证和相关 SDK
image: https://files.seeedstudio.com/wiki/Grove-Wio-E5/1.jpg
slug: /cn/Grove_LoRa_E5_New_Version
last_update:
  date: 07/25/2024
  author: Spencer
---

<div class="table-center">
  <table align="center">
    <tr>
        <th>Grove Wio E5</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/1.jpg" style={{width:'auto', height:320}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

> LoRaWAN® 是在 LoRa Alliance® 许可下使用的标记。
LoRa® 标记是 Semtech Corporation 或其子公司的商标。

在深入了解 Grove Wio-E5 之前，让我们先简要了解一下 Wio-E5。

[Wio-E5](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) 由 STM32WLE5JC 驱动，该芯片将 ARM Cortex M4 超低功耗 MCU 和 LoRa® RF 射频 SX126x 集成到单个芯片中。它是一个支持 EU868 和 US915 频率上的 LoRa® 和 LoRaWAN® 协议的无线射频模块，以及 (G)FSK、BPSK、(G)MSK 和 LoRa® 调制。它已获得 FCC、CE、IC 和 Telec 认证（有关 Wio-E5 的更多信息，请参考 [Wio-E5 wiki](https://wiki.seeedstudio.com/cn/LoRa-E5_STM32WLE5JC_Module/)。）

[Grove Wio-E5](https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html) 嵌入了这个超低功耗的 Wio-E5。通过板载 Grove 连接器实现简单的即插即用集成，为您的开发板提供超长距离传输的强大功能。


作为我们旧版本 - [Grove - Long Range 868MHz](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz.html) - 的升级版，该版本由 [RFM95 超长距离收发器模块](https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module-LoRa-Module-support-868M-frequency-p-2807.html) 驱动，Grove LoRa-E5 嵌入了 [Wio-E5 STM32WLE5JC 模块](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html)，是一个支持 LoRaWAN® 协议的高性能且易于使用的无线射频 LoRa® 模块。

Wio-E5 和 RFM95 芯片的更多比较：
![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png)

通过将 Grove - Wio-E5 连接到您的开发板，您的设备能够通过 UART 连接使用 AT 命令方便地与 Wio-E5 通信和控制。Grove Wio-E5 将是物联网设备开发、测试以及长距离、超低功耗物联网场景（如智慧农业、智慧办公和智慧工业）的优选。它采用工业标准设计，工作温度范围宽（-40℃ ~ 85℃），灵敏度高（-116.5 dBm 至 -136 dBm），功率输出范围为 10 dBm 至 22 dBm。

## 特性

- 内置 Wio-E5 (STM32WLE5JC)
- 支持 EU868/US915 频段的 LoRaWAN® 协议
- 超长传输距离可达 10km（开放空间理想值）
- 通过 UART 连接使用 AT 命令轻松控制
- 即插即用的 Grove 接口快速原型开发
- 超低功耗和高性能

## 硬件概览

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4081615359627_.pic_hd.jpg)

1. Wio-E5 STM32WLE5JC ([数据手册](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf))

2. MHF IPEX 连接器

3. 线缆天线

4. Grove 连接器

5. LED 指示灯

<!-- 不准确，只是一个模组，并不支持编程  -->
<!-- ## Platform Supported
<table>
  <tr>
    <th>Arduino</th>
    <th>Raspberry Pi</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/products/113020091/Raspberry_Pi-Logo.wine.png" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
  </tr>
</table> -->

## 规格参数

<!-- <style type="text/css" xml="space" dangerouslySetInnerHTML={{__html: "<!--\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}\n.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}\n" }} /> -->


<div class="table-center">
<table class="tg" align="center">
<thead>
<tr><th class="tg-f2tp" colspan="2">零件清单：</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Grove - Wio-E5 PCBA *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Grove 通用线缆*1</td>
</tr>
</tbody>
</table>
</div>

<div class="table-center">
<table class="tg" align="center">
<thead>
<tr><th class="tg-f2tp" colspan="2">通用参数</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j">电压<span>供应：</span></td>
<td class="tg-uu1j">3.3V - 5V</td>
</tr>
<tr>
<td class="tg-uu1j">功率<span>输出：</span></td>
<td class="tg-uu1j">在 3.3V 时最高 +20 dBm</td>
</tr>
<tr>
<td class="tg-uu1j">工作频率</td>
<td class="tg-uu1j">868/915MHz</td>
</tr>
<tr>
<td class="tg-uu1j">协议</td>
<td class="tg-uu1j">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-uu1j">灵敏度</td>
<td class="tg-uu1j">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-uu1j">调制方式</td>
<td class="tg-uu1j">LoRa®、(G)FSK、(G)MSK 和 BPSK</td>
</tr>
<tr>
<td class="tg-uu1j">电流</td>
<td class="tg-uu1j">睡眠模式下仅 60uA</td>
</tr>
<tr>
<td class="tg-uu1j">尺寸</td>
<td class="tg-uu1j">20*40mm</td>
</tr>
<tr>
<td class="tg-uu1j">工作温度</td>
<td class="tg-uu1j">-40℃ ~ 85℃</td>
</tr>
</tbody>
</table>
</div>

<!-- <style type="text/css" xml="space" dangerouslySetInnerHTML={{__html: "<!--\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}\n.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}\n" }} /> -->

## 应用

- 适用于 LoRaWAN® 传感器节点和任何无线通信应用
- 物联网设备测试和开发

![](https://files.seeedstudio.com/products/317990687/image/application.png)


## 应用说明

#### 说明 1. 出厂 AT 固件

Wio-E5 系列具有**内置 AT 命令固件**，支持 LoRaWAN® *Class A/B/C* 协议和广泛的频率计划：*EU868/US915/AU915/AS923/KR920/IN865*。使用此 AT 命令固件，开发者可以轻松快速地构建他们的原型或应用。

AT 命令固件包含用于 DFU 的引导加载程序和 AT 应用程序。"PB13/SPI_SCK/BOOT" 引脚用于控制 Wio-E5 停留在引导加载程序中或跳转到 AT 应用程序。当 PB13 为高电平时，模块将在复位后跳转到 AT 应用程序，默认波特率为 9600。当 PB13 为低电平时（按下 Wio-E5 开发板或 Wio-E5 mini 上的"Boot"按钮），模块将停留在引导加载程序中，并以 115200 波特率每秒持续发送"C"字符。

:::caution attention

- 出厂 AT 固件使用 RDP（读保护）级别 1 进行编程，开发者需要首先使用 STM32Cube Programmer 移除 RDP。请注意，将 RDP 回退到级别 0 将导致闪存大容量擦除，出厂 AT 固件无法再次恢复。
- Wio-E5 模块上的"PB13/SPI_SCK/BOOT"引脚只是一个普通的 GPIO，而不是 MCU 的"BOOT0"引脚。这个"PB13/SPI_SCK/BOOT"引脚在出厂 AT 固件的引导加载程序中使用，用于决定跳转到 APP 还是停留在引导加载程序中（用于 DFU）。真正的"BOOT0"引脚没有引出到模块，因此用户在开发低功耗应用时需要小心。
:::

#### 说明 2. 时钟配置

2.1 HSE

- 32MHz TCXO
- TCXO 电源：PB0-VDD_TCXO

2.2 LSE

- 32.768KHz 晶体振荡器

#### 说明 3. RF 开关

**Wio-E5 模块仅通过 RFO_HP 发送：**

- 接收：PA4=1，PA5=0
- 发送（高输出功率，SMPS 模式）：PA4=0，PA5=1

#### 说明 4. 通用工作流程指南 - Grove LoRa E5 配置和使用

Grove LoRa E5 配备内置 LoRaWAN 固件，提供 AT 服务器（查看 [LoRa-E5 AT 命令规范](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)）。

像任何非硬编码设备一样，您可以根据需要定义每个 EUI 和 API 密钥。有关更多详细信息，请参考此工作流程：[SenseCAP Indicator 应用 LoRaWAN](https://wiki.seeedstudio.com/cn/SenseCAP_Indicator_Application_LoRaWAN/#HEAD_register_device)。

您的产品（XIAO [任何微控制器] + Grove E5）的典型工作流程如下：

1. 在 LoRaWAN 网络服务器上注册设备以获取凭据：EUI 和密钥。
2. 配置您的 LoRa E5 设备以设置 EUI 和其他参数。
3. 享受使用：发送和接收消息。注意：您必须在可访问的 LoRaWAN 网关覆盖范围内。

对于您的 Arduino 项目，我们推荐使用此库（存储库）来配置您的设备：[andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5)。

确保您的 LNS（LoRaWAN 网络服务器）设置正确，并验证您的凭据和 LoRa 参数匹配。

## 示例和演示

1. [Grove - Wio-E5 P2P 示例](https://wiki.seeedstudio.com/cn/Grove_Wio_E5_P2P/) 使用纯 UART 功能在两个 wio-e5 设备之间进行通信
2. [Grove - Wio-E5 TTN 演示](https://wiki.seeedstudio.com/cn/Grove_Wio_E5_TTN_Demo/) 通过 Wio-E5 访问 TTN LoRaWAN 网络
3. [Grove - Wio-E5 Helium 演示](https://wiki.seeedstudio.com/cn/Grove_Wio_E5_Helium_Demo/) 使用 Grove - Wio-E5 模块和 Seeeduino XIAO 模块连接到 Helium IoT 网络
4. [Grove - Wio-E5 与 Arduino Uno R4 配合使用演示](https://wiki.seeedstudio.com/cn/Grove_Wio_E5_SenseCAP_Cloud_Demo/)
5. [Grove - Wio-E5 与 XIAO ESP32S3 配合使用演示](https://wiki.seeedstudio.com/cn/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3/)
6. [在 PlatformIO(Arduino) 上使用 Wio-E5 和 XIAO ESP32S3 访问 LoRaWAN 网络](/cn/platformio_wio_e5/) 一个实用指南。它详细介绍了使用 PlatformIO 将 Wio-E5 与 Arduino 兼容板集成，以实现高效的 LoRaWAN 连接。

## 资源

**数据手册：**

- [Grove Wio-E5 v1.0.brd](http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd)
- [Grove Wio-E5 v1.0.pdf](https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf)
- [Grove Wio-E5 v1.0.sch](http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch)
- [Wio-E5 数据手册和规格](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf)
- [Wio-E5 AT 命令规范](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)
- [STM32WLE5JC 数据手册](https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf)

**认证：**

- [Wio-E5-HF 认证 CE-VOC-RED](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf)
- [Wio-E5-HF FCC 认证 -DSS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf)
- [Wio-E5-HF FCC 认证 -DTS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf)
- [Wio-E5-HF TELEC 认证](https://files.seeedstudio.com/products/317990687/res/Telec.zip)
- [Wio-E5-HF IC 认证](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf)

**相关 SDK：**

- [STM32WL 系列 STM32Cube MCU 包](https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview)

## ✨ 贡献者项目

- 感谢 Seeed Studio 的朋友 Andres 构建了 [Grove - Wio-e5 库，提供多个示例](https://github.com/andresoliva/LoRa-E5)，适用于 Arduino Nano 33 BLE Sense 等 Arduino 板，更重要的是[与 XIAO ESP32S3 Sense 兼容](https://github.com/andresoliva/LoRa-E5)。
- 这将为用户提供与 SeedStudio LoRa 模块 Grove - Wio-E5 的简单、清晰和安全的交互，希望既可以作为**初次接触 LoRa 的人**的教育工具，也可以**为那些希望在低功耗项目中使用此模块的人**做好准备。

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