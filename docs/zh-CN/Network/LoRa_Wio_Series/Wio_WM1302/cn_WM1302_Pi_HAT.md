---
description: 开始使用适用于树莓派的 WM1302 Pi Hat。
title: 适用于树莓派的 WM1302 Pi Hat
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /cn/WM1302_Pi_HAT
last_update:
  date: 01/30/2023
  author: hushuxu
---

<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html)

## 产品介绍

:::note
        我们最近发布了基于 LoRa-E5 模块的 [WM1302 LoRaWAN 网关模块](https://wiki.seeedstudio.com/cn/WM1302_module/) 和 LoRa-E5 系列。点击[这里](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)了解 LoRa-E5 家族的新成员，从 [Grove 模块](https://wiki.seeedstudio.com/cn/Grove_LoRa_E5_New_Version/)、[迷你开发板](https://wiki.seeedstudio.com/cn/LoRa_E5_mini/)到[开发套件](https://wiki.seeedstudio.com/cn/LoRa_E5_Dev_Board/)。要了解更多关于使用 STM32WL 系列的 STM32Cube MCU 包（SDK）创建 LoRaWAN 终端节点、加入并向 LoRaWAN 网络发送数据的信息，请阅读[迷你开发板](https://wiki.seeedstudio.com/cn/LoRa_E5_mini/)和[开发套件](https://wiki.seeedstudio.com/cn/LoRa_E5_Dev_Board/)的 wiki 页面。
:::

WM1302 Pi HAT 是一款专门设计的扩展板，用于将基于 SX1302 的 WM1302 LoRaWAN 网关模块连接到树莓派 4B 及以下版本。它还集成了 LoRaWAN 认证芯片和 GPS 模块。

[WM1302 模块](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)是新一代采用 mini-PCIe 外形规格的 LoRaWAN 网关模块。基于 Semtech® SX1302 基带 LoRaWAN® 芯片，WM1302 为网关产品释放了更大的长距离无线传输潜力。与之前的 SX1301 和 SX1308 LoRa® 芯片相比，它具有更高的灵敏度、更低的功耗和更低的工作温度。

WM1302 Pi HAT 支持 WM1302 模块的 mini-PCIe 外形规格，可以自动将标准 52 针金手指配置为带有 40 针兼容接头的树莓派 GPIO 连接器。这简化了用户与树莓派集成的开发过程。WM1302 Pi HAT 作为扩展板，帮助在树莓派上添加 SX1302 的功能，支持 LoRaWAN 和 LoRa 协议进行长距离无线传输。集成的 GPS 模块还增强了 WM1302 模块的时序和定位精度。

WM1302 Pi HAT 与 WM1302 网关模块和树莓派一起，可以帮助构建完整而紧凑的 LoRaWAN 无线通信网关，支持智慧农业、智慧城市和其他物联网场景。

## 特性

- 标准 Pi Hat 外形规格，带 40 针母针头

- 兼容 Raspberry Pi 3 Model B+/ Raspberry 4

- 内嵌 GPS 模块

- 内嵌 LoRaWAN 认证芯片

## 硬件概述

<!-- ![](https://files.seeedstudio.com/products/113100022/5371617183671_.pic_hd.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/5371617183671_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/pi%20hat.png" alt="pir" width={600} height="auto" /></p>

## 应用

- LoRaWAN 网关设备/热点开发

- 长距离无线通信应用开发

- 任何基于 Raspberry Pi 的学习和实验

- LoRa 和 LoRaWAN 应用学习和研究

## 规格

<table class="tg">
<thead>
  <tr>
    <th >尺寸</th>
    <th >56*65mm</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td >重量</td>
    <td >0.501</td>
  </tr>
  <tr>
    <td>工作电压</td>
    <td >5V</td>
  </tr>
  <tr>
    <td >电源接口</td>
    <td >40 针接头或 USB</td>
  </tr>
  <tr>
    <td >Raspberry Pi 40 针接头</td>
    <td >支持 Raspberry Pi 5 / 支持 Raspberry Pi 4 B / 支持 Raspberry Pi 3 A+/B/B+ / 支持 Raspberry Pi 2 B / 支持 Raspberry Pi A+/B+ /   支持 Raspberry Pi Zero/Zero W</td>
  </tr>
  <tr>
    <td >PCIe 接头</td>
    <td >52 针 Mini-PCIe 接头</td>
  </tr>
  <tr>
    <td >GNSS</td>
    <td >支持 GPS L1、GLONASS L1、北斗 B1</td>
  </tr>
  <tr>
    <td >电池</td>
    <td >不包含</td>
  </tr>
</tbody>
</table>

<table class="tg">
<thead>
  <tr><th class="tg-f2tp" colspan="2">零件清单：</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-uu1j" colspan="2">WM1302 Pi Hat *1</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">APM2.5*6mm 螺丝 *8</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">M2.5*11.0mm 支柱 *4</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">PM2.0*H6.0mm 螺丝 *2</td>
  </tr>
</tbody>
</table>

## 尺寸

<!-- ![](https://files.seeedstudio.com/products/113100022/WM1302%20PiHat_Size-17.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/WM1302%20PiHat_Size-17.png" alt="pir" width={600} height="auto" /></p>
## 技术支持与产品讨论

请将任何技术问题提交到我们的[论坛](http://forum.seeedstudio.com/)。

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
