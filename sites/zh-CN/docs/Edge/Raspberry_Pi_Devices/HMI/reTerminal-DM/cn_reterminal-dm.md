---
description: reTerminal DM 入门指南
title: reTerminal DM 入门指南
keywords:
  - Edge
  - reTerminal-DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal-dm
sku: 114070201,114070221,E23010420,114070262
last_update:
  date: 12/15/2025
  author: David Du
createdAt: '2023-04-23'
updatedAt: '2026-01-28'
url: https://wiki.seeedstudio.com/cn/reterminal-dm/
---

# reTerminal DM 入门指南

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM 是一款 10.1 英寸开源坚固型 HMI——一体化设备主控，用于统一数据流并管理现场设备。

基于 Raspberry Pi CM4，作为集 Panel PC、HMI、PLC、IIoT 网关于一体的设备，reTerminal DM 是新一代交互式感知枢纽，配备 IP65 工业级防护的大尺寸屏幕。

它具备丰富的可扩展性和混合连接能力，支持 CAN 总线、RS485、RS232、千兆以太网口等接口，以及 4G、LoRa®、WiFi 和 BLE 等强大的无线通信能力。

> **购买须知：**4G 和 LoRa® 模块默认不随 reTerminal DM 一同提供。请根据需要单独购买相关模块，例如 [4G bundle](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)。
>
:::note
可提供 Logo 品牌定制、包装定制以及固件烧录服务。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>立即定制 ➜</font></span></strong></a>
</div>

## 特性

- 集 HMI、PLC、Panel PC 和网关于一体：非常适合作为分布式枢纽设备
- 面向事件驱动应用的低代码编程：原生集成 Node-RED，用于基于流程的编辑和一键部署，兼容所有运行在 Raspberry Pi 上的软件
- 面向恶劣工作环境的坚固设计：IP65 前面板，-10~50°C 工作温度
- 混合连接：支持 4G LTE、LoRaWAN®、WiFi、BLE、RS485/RS232、CAN 总线、1000M 以太网、USB、HDMI
- 软硬件开源设计：由 Raspberry Pi CM4 驱动，欢迎定制或衍生开发
- [产品保修：两年保修](/cn/reterminal-dm-warranty)

> \*4G 和 LoRa® 模块默认不随 reTerminal DM 一同提供，请根据需要单独购买相关模块。

## 规格参数

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>基础</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>CPU</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>CM4</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>四核 Cortex-A72@1.5GHz</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>内存</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>8GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>存储</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>32GB eMMC</td>
    </tr]
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>M.2 SATA SSD 插槽 2280-B Key（可选）</td>
    </tr>
    <tr data-style="height: 36px;" style={{height: 36}}>
      <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>操作系统支持</td>
      <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>Raspbian<br />SenseCraft Edge OS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>显示</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>尺寸</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10.1''</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>最大分辨率</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1280 x 800</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>最大颜色数</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>16.7M (8-bit)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>亮度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>400 nit</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>可视角度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>170/170 H/V°</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>背光寿命</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>30000 小时</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>触控类型</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10 点电容式</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>铅笔硬度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>7H</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>视频&amp;音频</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>视频</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>音频</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>麦克风 x 2</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>蜂鸣器</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>3.5mm 音频接口</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>摄像头</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>CSI（可选）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>接口</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>以太网</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps（可选）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 x USB 3.0（可选）</td>
    </tr>
    <tr data-style="height: 36px;" style={{height: 36}}>
      <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>1 x RS-485 &gt; 端子排<br />1 x RS-485 &gt; DB9（可选）</td>
    </tr>
    <tr data-style="height: 36px;" style={{height: 36}}>
      <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>RS232</td>
      <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>1 x RS-232 &gt; 端子排<br />1 x RS-232 &gt; DB9（可选）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>CAN</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1 x CAN-BUS &gt; 端子排</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>DI</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>4 x DI &gt; 端子排</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>DO</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>4 x DO &gt; 端子排</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>40pin GPIO</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>内部</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>无线通信</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>WiFi</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>片上 WiFi</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>片上 BLE</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>LoRa®</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>用于 LoRaWAN® 的 Mini-PCIe（可选）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>蜂窝网络</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}><a href="https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html" target="_blank" rel="noopener">用于 4G 的 Mini-PCIe（可选）</a></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>电源</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>输入</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 针端子排</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>PoE</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>12W PoE（可选）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>电源范围</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>12~24 DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>环境</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>防护等级</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>IP65 前面板</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>工作温度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>-10~50 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>存储温度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>-20~70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>湿度（工作）</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10~90% RH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>机械规格 </strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>尺寸</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>259.4 x 191 x 42.2 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>外壳</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>压铸铝合金</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>安装方式</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>面板、VESA、导轨</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>重量（净重）</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1.8Kg</td>
    </tr>
    <tr>
      <td data-style="width: 98.6555%;" colSpan={2} style={{width: '98.6555%'}}><strong>认证 </strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>CE, FCC, RoHS, Telec, REACH</td>
    </tr>
    <tr>
      <td data-style="width: 98.6555%;" colSpan={2} style={{width: '98.6555%'}}><strong>其他</strong> </td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>RTC</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>高精度 RTC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>安全</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>ATECC608A</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>质保</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 年</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>散热</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>无风扇</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概览

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/interface-overview.png" /></div>

## 主板概览

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/Mainboard.png" /></div>

## 电源框图

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/power-diagram.png" /></div>

reTerminal DM 支持两种电源供电方式：DC 端子和 PoE 端口。默认情况下，reTerminal DM 通过 DC 端子供电，而**PoE 供电是可选的**。这为电源选择提供了灵活性，并便于与各种电源轻松集成。

### 电源端子

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/powerplug.png" /></div>

reTerminal DM 的额定供电电压为 12~24 V。电源通过 2 针电源端子排连接器接入。

### POE（可选）

:::note
标准产品默认不包含 PoE 模块，如有需要，Seeed 可以为批量定制订单提供 PoE 焊接和组装服务，请联系 odm@seeed.cc，
:::

如果安装了 PoE 模块，reTerminal DM 的 LAN1 接口可以支持 PoE 供电，从而通过以太网为设备供电，提供一种方便高效的供电方式。此选项简化了安装过程并减少了所需布线数量，非常适合电源受限或电源插座不易获得的应用场景。

- PoE 输入：范围 44~57V；典型值 48V
- PoE 输出：12V，最大 1.1A

### 功耗

请参考下表，了解 Seeed Studio 实验室测试得到的 reTerminal DM 功耗数据。请注意，该数值仅供参考，因为测试方法和环境不同会导致结果存在差异。

| 状态   | 电压 | 电流 | 功耗 | 描述 |
|   ---      |    ---    |   ---      |         ---          |        ---    |
|关机  |         |  0.6mA  |                   | 在关机和断电状态下的静态功耗测试。|
|空闲      |24V      |  0.165A |    3.96W          | 在通过端子插座为 reTerminal DM 设备提供 24V 电源、运行默认 Seeed Studio 系统且不运行任何测试程序的情况下，测试输入电流。|
|满载 |24V      |  0.37A  |    8.88W          | 使用 "stress -c 4" 命令将 CPU 配置为满载运行，同时播放视频并进行 CAN 和 RS485 通信。不连接任何外部设备。 |

### 开机与关机

reTerminal DM 默认不带电源按钮，连接电源后系统会自动启动。关机时，请在操作系统中选择关机选项，并等待系统完全关机后再切断电源。要重启系统，只需重新接通电源即可。

:::note
请注意，关机后请至少等待 10 秒再重启系统，以便内部电容器完全放电。
:::

## 方框图

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/block-diagram.png" /></div>

### I2C 方框

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/i2c-block.png" /></div>

## 接口

### 麦克风

reTerminal DM 配备了两个 MEMS 麦克风，位于屏幕下方的左右两侧。这些麦克风可以配置为双麦克风阵列，提供出色的拾音能力。麦克风通过 I2S 接口与音频编解码芯片通信，而编解码芯片通过 PCM 接口与 CM4 通信。reTerminal DM 选用的音频编解码芯片为 TI TLV320AIC3104 低功耗立体声音频编解码器。

:::warning
需要特别注意的是，为了使前面板达到 IP65 防护等级，麦克风开孔覆盖了防水声学膜。请避免使用尖锐物体接触麦克风开孔。
:::

要与麦克风进行交互：

请在设备上打开 `Terminal` 应用并输入 `arecord -l` 来查找麦克风驱动：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/arecord-device.png" /></div>

要录制音频，你可以使用 `audacity` 应用，请使用 `sudo apt install audacity` 来安装 audacity 应用：

请打开 audacity 启动应用，并点击录制按钮，从内置麦克风录制音频：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/recording.png" /></div>

### LED 指示灯

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/led-indicator.png" /></div>

reTerminal DM 具有三个 LED 指示灯，用于指示设备的运行状态。请参考下表了解每个 LED 的具体功能和状态：

#### LED 引脚分配

| 标签 | 信号   | 信号源 | 颜色  | 描述 |
|  ---  |  ---     |     ---       |  ---   |     ---     |
| PWR   | LED_nPWR | CM4           | 黄色 | 用于指示 CM4 的供电情况。当 CM4 正常上电时，该 LED 会点亮|
|USER   |          |PCA9535 - GPIO | 红色    | 用户自定义功能 |
|ACT    | LED_nACT |CM4            | 绿色  | 用于指示系统的各种状态。见下表。|

#### ACT 状态表

<div class="table-center">

| 长闪 | 短闪 | 状态 |
| --- | --- | --- |
| 0 | 3 | 启动失败（通用）|
| 0 | 4 | 未找到 start*.elf|
| 0 | 7 | 未找到内核镜像|
| 0 | 8 | SDRAM 故障|
| 0 | 9 | SDRAM 不足|
| 0 | 10 | 处于 HALT 状态|
| 2 | 1 | 分区不是 FAT|
| 2 | 2 | 从分区读取失败 |
| 2 | 3 | 扩展分区不是 FAT|
| 2 | 4 | 文件签名/哈希不匹配 - Pi 4|
| 4 | 4 | 不支持的板卡类型|
| 4 | 5 | 严重固件错误|
| 4 | 6 | 电源故障类型 A|
|4 | 7 | 电源故障类型 B |

</div>

:::note
如果 ACT LED 以规则的四次闪烁模式闪烁，则表示找不到引导代码（start.elf）<br/>
如果 ACT LED 以不规则模式闪烁，则表示启动已经开始。<br/>
如果 ACT LED 不闪烁，则 EEPROM 代码可能已损坏，请在不连接任何外设的情况下再试一次以确认。<br/>
更多详情请查看 Raspberry Pi 论坛：<br/>
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums<br/>
更多详情请查看 Raspberry Pi 论坛：https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151<br/>
:::

要点亮 USER LED，请使用以下命令：

```sh
sudo -i

echo 0 > /sys/class/leds/usr-led/brightness
echo 1 > /sys/class/leds/usr-led/brightness
```

你应该会看到 USER LED 亮起红色。

### 光线传感器

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/light-sensor.png" /></div>

光线传感器位于屏幕右下方，能够检测环境光强度，并自动调节屏幕亮度，在节省能耗的同时提供最佳观看体验。光线传感器通过 I2C 协议与 CM4 通信。

I2C 地址为 **0x29**。

要与光线传感器进行交互：

- **步骤 1.** 进入以下目录

```sh
cd /sys/bus/iio/devices/iio:device0
```

- **步骤 2.** 输入以下命令以获取以 **Lux** 为单位的光强值

```sh
cat in_illuminance_input 
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/light-sensor-result.png" /></div>

### 蜂鸣器

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/buzzer.png" /></div>

reTerminal DM 在屏幕右下角配备了一个有源蜂鸣器，可用于报警和事件通知等多种用途。蜂鸣器通过 PCA9535 GPIO 扩展 IC 控制，该芯片为设备提供了额外的数字 I/O 通道。

要测试和控制蜂鸣器，你只需向 `/sys/class/leds/usr-buzzer/brightness` 文件写入 `1` 或 `0`：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/toggle_buzzer.png" /></div>

### 多功能端子

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/multi-functional-terminal.png" /></div>

#### 端子与信号对照表

<div class="table-center">

|CANH | CANL | GND_ISO | RS485A | RS485B | GND_ISO | RS232_TX | RS232_RX| GND | GND |
|:---:| :---: | :---: | :---: | :---:    | :---: | :---: | :---: | :---: | :---:    |
|DI1| DI2 | DI3 | DI4 | GND_DI | DO1 | DO2 | DO3 | DO4 | GND_DO |

</div>

#### 端子引脚分配表

<div class="table-center">

| 引脚 | 丝印 | 信号 | 描述 |
| --- |  ---        |  ---   | ---         |
|1 |CH| CANH     | CAN 差分信号高电平 |
|2 |CL| CANL     | CAN 差分信号低电平 |
|3 |GS| GND_ISO  | 隔离地信号 |
|4 |RA| RS485A   | RS485 差分信号 A |
|5 |RB| RS485B   | RS485 差分信号 B |
|6 |GS| GND_ISO  | 隔离地信号 |
|7 |RT| RS232_TX | RS232 信号发送端 |
|8 |RX| RS232_RX | RS232 信号接收端 |
|9 |GD| GND     | 主板地 |
|10 |GD| GND    | 主板地 |
|11 |I1| DI1    | 数字输入 1 |
|12 |I2| DI2    | 数字输入 2 |
|13 |I3| DI3    | 数字输入 3 |
|14 |I4| DI4    | 数字输入 4 |
|15 |GI| GND_DI | 输入地信号，通过 1MΩ 与 GND 相连 |
|16 |D1| DO1    | 数字输出 1 |
|17 |D2| DO2    | 数字输出 2 |
|18 |D3| DO3    | 数字输出 3 |
|19 |D4| DO4    | 数字输出 4 |
|20 |GO| GND_DO | 输出地信号，通过 0Ω 与 GND 相连 |

</div>

#### DI/DO

reTerminal DM 支持 4 路数字输入和 4 路数字输出通道，全部采用光电隔离设计，可有效保护主板免受电压尖峰或其他电气干扰的影响。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/DI-DO.png" /></div>

##### DI/DO 引脚分配表

<div class="table-center">

| 引脚 | CM4 信号 | 典型电压范围 | 最大电压 |  额定电流容量 |
| --- | ---        | ---                   | ---          | ---                     |
| DI1 | GPIO16     | 5-24V DC              | 30V DC       |                         |
| DI2 | GPIO17     | 5-24V DC              | 30V DC       |                         |
| DI3 | GPIO22     | 5-24V DC              | 30V DC       |                         |
| DI4 | GPIO23     | 5-24V DC              | 30V DC       |                         |
| GND_DI |         |                       |              |                         |
| DO1 | GPIO24     | 5-24V DC              | 30V DC       |  500mA                  |
| DO2 | GPIO25     | 5-24V DC              | 30V DC       |  500mA                  |
| DO3 | GPIO26     | 5-24V DC              | 30V DC       |  500mA                  |
| DO4 | GPIO6      | 5-24V DC              | 30V DC       |  500mA                  |
| GND_DO |         |                       |              |                         |

</div>

:::note
输入信号的地与输出信号的地是不同的。输入信号的地应连接到 GND_DI 引脚，而输出信号的地应连接到 GND_DO 引脚。

reTerminal DM 的数字输入和输出使用负逻辑，Terminal IO 与 CM4 GPIO 之间的逻辑电平关系如下表所示。

|Terminal 数字输入 | CM4 GPIO 检测信号 |
| ---                   | ---                    |
| 低电平                   | 高电平                   |
| 高电平                  | 低电平                    |

| CM4 GPIO 输出       | Terminal 数字输出|
| ---                   | ---                    |
| 高电平                  | 低电平                    |
| 低电平                   | 高电平                   |

:::

在本节中，我们将使用 `raspi-gpio` 工具来测试 GPIO，你可以使用 `raspi-gpio help` 来查看手册：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/raspi-gpio.png" /></div>

要获取所有 GPIO 的当前状态，请在 `Terminal` 中输入以下命令：

```sh
raspi-gpio get
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/raspi-gpio-get.png" /></div>

###### 数字输入

下面是一个关于如何将传感器接线到 DI 的示意图：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/sensor.png" /></div>

要获取特定 GPIO 的状态，请在 `Terminal` 中输入以下命令：

```sh
raspi-gpio get 16
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio16-state.png" /></div>

此时 `GPIO16` 的当前状态被设置为 `INPUT` 且为 `pulling Down`，当前引脚电平为 `1`，这表示 `High`，也就意味着当前 Terminal 数字输入 `DI1` 为 `Low`，如上表所示。

我们通过将 `DI1` 端子连接到 `5V source` 的 `Positive` 引脚，然后将 `5V source` 的 `Ground` 连接到 `GND_DI`，给 `DI1` 施加一个 `High` 信号。

```sh
raspi-gpio get 16
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio16-state-high.png" /></div>

此时 `GPIO16` 的当前引脚电平为 `0`，这表示 `Low`，也就意味着当前 Terminal 数字输入 `DI1` 为 `High`，如上表所示。

###### 数字输出

下面是一个关于如何将负载接线到 DO 的示意图：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/DO.png" /></div>

要控制数字输出的状态值，首先我们需要将引脚状态设置为 `Output` 并 `pulling Down`：

```sh
#set current pin state
raspi-gpio set 24 op pd dh

#get the pin state after set
raspi-gpio get 24

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio24-state-set.png" /></div>

此时与 `DO1` 对应的 `GPIO24` 被设置为 `Output` 和 `pulling down` 状态，并且 `GPIO24` 电平被设置为 `High`。

现在我们将 `GPIO24` 设置为 `Low`，这意味着 `DO1` 输出被驱动为 `High`。

```sh
#set current pin state
raspi-gpio set 24 dh

#get the pin state after set
raspi-gpio get 24

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio24-state-set-low.png" /></div>

#### RS485

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RS485.png" /></div>

reTerminal DM 通过其 20 针连接器配备了 RS485 接口，该接口在信号和电源两方面都进行了隔离，以确保在恶劣环境和自动化应用中安全可靠地运行。`RS485 A` 和 `RS485 B` 信号采用电容隔离方式，实现了出色的 EMI 抗扰度，并满足 RS485 接口的高速通信要求。

:::note
默认已安装一个 120Ω 的终端电阻。
RS485 接口使用隔离电源，这意味着连接到 RS485 接口的外部设备的地信号应连接到 GND_ISO 引脚。
:::

要测试并与 RS485 进行通信，你需要准备一个 USB 转 RS485 适配器，并请确保连接方式与下图相同：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

:::note
请注意，RS485 端口为 `/dev/ttyACM1` 或 `/dev/ttyCH340USB1`，具体取决于你运行的操作系统。
:::
请在主机电脑上使用你喜欢的串口通信工具来执行下面的测试：
在 reTerminal DM 上运行 python 代码来测试 RS485 串口连接，该代码会将 RS485 串口设置为如下参数

波特率 -> 9600
数据位 -> 8 bits
校验位 -> None
停止位 -> 1
硬件流控 -> disabled

```python
import serial, time
import os

ser = serial.Serial()
if os.path.exists('/dev/ttyACM1'):
    ser.port = "/dev/ttyACM1"
elif os.path.exists('/dev/ttyCH340USB1'):
    ser.port = "/dev/ttyCH340USB1"
else:
    print('Neither /dev/ttyACM1 nor /dev/ttyCH340USB1 is present')

#9600,N,8,1
ser.baudrate = 9600
ser.bytesize = serial.EIGHTBITS    #number of bits per bytes
ser.parity = serial.PARITY_NONE    #set parity check
ser.stopbits = serial.STOPBITS_ONE #number of stop bits

ser.timeout = 0.5                  #non-block read 0.5s
ser.writeTimeout = 0.5             #timeout for write 0.5s
ser.xonxoff = False                #disable software flow control
ser.rtscts = False                 #disable hardware (RTS/CTS) flow control
ser.dsrdtr = False                 #disable hardware (DSR/DTR) flow control

try:
    ser.open()
except Exception as ex:
    print ("open serial port error " + str(ex))
    exit()

if ser.isOpen():
    try:
        ser.flushInput() #flush input buffer
        ser.flushOutput() #flush output buffer
        time.sleep(0.1)
        #write data
        ser.write("rs485 communication is on, you can try to send data...\n".encode())
        print("Sent successfully\n")
        time.sleep(5)  #wait 5s
        #read data
        numofline = 0
        print("Reading Data:")
        while True:
            response = ser.readline()
            print(response)
            numofline = numofline +1
            if (numofline >= 1):
                break
            ser.close()
    except Exception as e1:
        print ("communicating error " + str(e1))
else:
    print ("open serial port error")

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/rs485-serial-example.png" /></div>

#### RS232

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/rs232.png" /></div>

reTerminal DM 的 20 针连接器还包括一个 RS232 接口，该接口未做隔离。因为 RS232 通信通常使用 CMOS 电压等级且通信距离较短，因此不太容易受到环境电磁干扰的影响。

:::note
请注意，Ground 引脚需要连接到 `RX` 引脚旁边的 `GD` 引脚，确保不要接到 `GS` 引脚。
:::

下面是在 reTerminal DM 上向主机电脑发送数据的测试 python 脚本：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/rs232-serial-send-example.png" /></div>

```python
import time
import serial
import os

if os.path.exists('/dev/ttyACM0'):
    port = "/dev/ttyACM0"
elif os.path.exists('/dev/ttyCH340USB0'):
    port = "/dev/ttyCH340USB0"
else:
    print('Neither /dev/ttyACM0 nor /dev/ttyCH340USB0 is present')

ser = serial.Serial(
port = port,
baudrate = 9600,
parity = serial.PARITY_NONE,
stopbits = serial.STOPBITS_ONE,
bytesize = serial.EIGHTBITS,
timeout = 1
)
counter=0
try:
        print("rs232 starts now!\n")
        ser.write("rs232 starts now!\n".encode())
        while 1:
                ser.write(("Write counter:{}\n".format(counter)).encode())
                time.sleep(1)
                counter += 1
except KeyboardInterrupt:
    exit()

```

下面是在 reTerminal DM 上接收从主机电脑发送数据的测试 python 脚本，

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/rs232-serial-receive-example.png" /></div>

```python
import time
import serial
import os

if os.path.exists('/dev/ttyACM0'):
    port = "/dev/ttyACM0"
elif os.path.exists('/dev/ttyCH340USB0'):
    port = "/dev/ttyCH340USB0"
else:
    print('Neither /dev/ttyACM0 nor /dev/ttyCH340USB0 is present')

ser = serial.Serial(
        port=port,
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1,
        xonxoff = False,                #disable software flow control
        rtscts = False,                 #disable hardware (RTS/CTS) flow control
        dsrdtr = False
)
try:
    print("Start receiving data now!\n")
    while 1:
            x=ser.readlines()
            if x != b'':
                print(x)
except KeyboardInterrupt:
        exit()
```

#### CAN

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/can.png" /></div>

reTerminal DM 提供了一个支持 CAN FD（控制器局域网灵活数据速率）协议的 CAN 接口。CAN 接口采用电容隔离方式，具有出色的 EMI 防护能力，确保在恶劣环境和自动化应用中实现可靠通信。默认已安装一个 120Ω 的终端电阻。

:::note
CAN 接口使用隔离电源，这意味着连接到 CAN 接口的外部设备的地信号应连接到 GND_ISO 引脚
:::

要测试并与 CAN 总线进行通信：
请按照下图所示连接 USB 转 CAN 适配器：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

- 步骤 1：安装 CAN-utils

```sh
sudo apt install can-utils
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg" /></div>

CAN-utils 是一组使用 CAN 接口的非常有用的调试工具。它包含以下应用程序：

- candump – 转储 CAN 数据包 – 显示、过滤并记录到磁盘。
- canplayer – 回放 CAN 日志文件。
- cansend – 发送单个帧。
- cangen – 生成随机流量。
- canbusload – 显示当前 CAN 总线的**利用率**

CAN-utils 源码可以从 [GitHub 仓库](https://github.com/linux-can/can-utils) 获取。

- 步骤 2：使用以下命令配置 CAN 接口：

```sh
sudo ip link set can0 up type can bitrate 500000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

- 步骤 3：使用 git 将测试代码下载到 reTerminal DM

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple

```

- 步骤 4：编译并运行发送数据的代码：

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit

```

在你的 Linux 主机电脑或另一台 reTerminal DM 上，你可以编译并运行接收数据的代码。

```sh
gcc canreceive.c -o canreceive
```

你可以看到结果，下面的图片是使用两台 reTerminal DM 完成的：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg" /></div>

### USB

#### USB Type-A

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/usb-a.png" /></div>

这里有两个 USB 2.0 Type-A 接口，你可以连接 U 盘、网络摄像头、键盘和鼠标等 USB 设备。

#### USB Type-C

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/usb-c.png" /></div>

USB Type-C 是一个 USB 2.0 接口，用于串口调试或烧录 OS 镜像，具体取决于启动开关的位置。有关烧录 OS，请参考 [Flashing OS Wiki 页面](/cn/reterminal-dm-flash-OS)

### SIM 卡槽

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/sim-slot.png" /></div>

reTerminal DM 使用一种在工业加固应用中常见的标准尺寸 SIM 卡槽，需要尺寸为 25mm x 15mm 的标准 SIM 卡。

:::note
请注意，reTerminal DM 标准版本不带 4G 模块。如果你需要 4G 功能，必须另外单独购买 4G 模块。因此，只有当你在 4G PCIe 插槽中安装了受支持版本的 4G 模块时，此 SIM 卡槽才会工作。
:::

### 重置按钮

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/reset-button.png" /></div>

在 reTerminal DM 的复位孔内有一个微型按键开关。通过使用细小物体按下此按钮，可以重置 CM4。该按钮连接到 CM4 的 RUN_PG 引脚。当该引脚为高电平时，表示 CM4 已启动。将该引脚拉低会复位模块。

### 音频接口

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/audio-jack.png" /></div>

reTerminal DM 具有一个 3.5mm 耳机接口，支持声音输出，可连接外部耳机、音箱等设备。

:::note
耳机接口仅支持声音输出，不支持麦克风录音功能。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/audio-power.png" /></div>

### HDMI

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/hdmi.png" /></div>

reTerminal DM 具有来自 CM4 的原生 HDMI 接口，支持最高 4K @ 60 fps 的视频输出。它非常适合需要多屏显示的应用，允许用户将内容输出到外部大屏幕。

### 以太网 RJ45

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RJ45.png" /></div>

reTerminal DM 配备了来自 CM4 的原生千兆以太网接口，支持 10/100/1000 Mbit/s 三种速率。可以另外购买 PoE 模块，通过该接口实现以太网供电（PoE），为 reTerminal DM 提供电源。

### 内部接口

#### 40-Pin GPIO

reTerminal DM 内部保留了经典的 Raspberry Pi 40 针 GPIO 设计，引脚定义与 Raspberry Pi 4B 保持一致。用户需要打开后盖才能使用这些 GPIO。需要注意的是，由于 CM4 IO 资源有限，40 针 GPIO 与许多外设接口是复用的，因此在使用 GPIO 时需要特别注意冲突。有关详细的引脚分配信息，请参考下表。

<div class="table-center">

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-3z1b{border-color:#000000;text-align:right;vertical-align:top}\n.tg .tg-wp8o{border-color:#000000;text-align:center;vertical-align:top}\n.tg .tg-tynx{background-color:#8fc31f;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n.tg .tg-xwyw{border-color:#000000;text-align:center;vertical-align:middle}\n.tg .tg-73oq{border-color:#000000;text-align:left;vertical-align:top}\n.tg .tg-0a7q{border-color:#000000;text-align:left;vertical-align:middle}\n.tg .tg-8o2n{border-color:#000000;text-align:right;vertical-align:middle}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-tynx">描述</th>
        <th className="tg-tynx">引脚复用</th>
        <th className="tg-tynx" />
        <th className="tg-tynx" />
        <th className="tg-tynx" />
        <th className="tg-tynx">引脚复用</th>
        <th className="tg-tynx">描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-3z1b">Pin 1</td>
        <td className="tg-3z1b" />
        <td className="tg-wp8o">3V3</td>
        <td className="tg-xwyw" rowSpan={20}>40 PIN<br />GPIO</td>
        <td className="tg-wp8o">5V</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b">I2C1_SDA</td>
        <td className="tg-wp8o">GPIO 2</td>
        <td className="tg-wp8o">5V</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b">I2C1_SCL</td>
        <td className="tg-wp8o">GPIO 3</td>
        <td className="tg-wp8o">GND</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b">I2C3_SDA</td>
        <td className="tg-wp8o">GPIO 4</td>
        <td className="tg-wp8o">GPIO 14</td>
        <td className="tg-73oq">UART0_TXD</td>
        <td className="tg-0a7q" rowSpan={2}>USB Type C</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">GND</td>
        <td className="tg-wp8o">GPIO 15</td>
        <td className="tg-73oq">UART0_RXD</td>
      </tr>
      <tr>
        <td className="tg-3z1b">接线端子 DI2</td>
        <td className="tg-3z1b">DI2</td>
        <td className="tg-wp8o">GPIO 17</td>
        <td className="tg-wp8o">GPIO 18</td>
        <td className="tg-73oq">PCM_CLK</td>
        <td className="tg-73oq">3.5mm 音频接口</td>
      </tr>
      <tr>
        <td className="tg-3z1b">屏幕触摸中断引脚</td>
        <td className="tg-3z1b">TP_INT</td>
        <td className="tg-wp8o">GPIO 27</td>
        <td className="tg-wp8o">GND</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b">接线端子 DI3</td>
        <td className="tg-3z1b">DI3</td>
        <td className="tg-wp8o">GPIO 22</td>
        <td className="tg-wp8o">GPIO 23</td>
        <td className="tg-73oq">DI4</td>
        <td className="tg-73oq">接线端子 DI4</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">3V3<br /></td>
        <td className="tg-wp8o">GPIO 24</td>
        <td className="tg-73oq">DO1</td>
        <td className="tg-73oq">接线端子 DO1</td>
      </tr>
      <tr>
        <td className="tg-8o2n" rowSpan={3}>CAN 和 LoRa® 模块</td>
        <td className="tg-3z1b">SPI0_MOSI</td>
        <td className="tg-wp8o">GPIO 10</td>
        <td className="tg-wp8o">GND</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b">SPI0_MISO</td>
        <td className="tg-wp8o">GPIO 9</td>
        <td className="tg-wp8o">GPIO 25</td>
        <td className="tg-73oq">DO2</td>
        <td className="tg-73oq">接线端子 DO2</td>
      </tr>
      <tr>
        <td className="tg-3z1b">SPI0_SCLK</td>
        <td className="tg-wp8o">GPIO 11</td>
        <td className="tg-wp8o">GPIO 8</td>
        <td className="tg-73oq">SPI0_CE0</td>
        <td className="tg-73oq">用于 CAN 的 SPI 使能引脚</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">GND</td>
        <td className="tg-wp8o">GPIO 7</td>
        <td className="tg-73oq">SPI0_CE1</td>
        <td className="tg-73oq">用于 LoRa® 的 SPI 使能引脚</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">ID_SD</td>
        <td className="tg-wp8o">ID_SC</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b">I2C_SCL</td>
        <td className="tg-wp8o">GPIO 5</td>
        <td className="tg-wp8o">GND</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b">接线端子 DO4</td>
        <td className="tg-3z1b">DO4</td>
        <td className="tg-wp8o">GPIO 6</td>
        <td className="tg-wp8o">GPIO 12</td>
        <td className="tg-73oq">CAN_INT</td>
        <td className="tg-73oq">用于 CAN 的中断引脚</td>
      </tr>
      <tr>
        <td className="tg-3z1b">LCD 背光控制引脚</td>
        <td className="tg-3z1b">LCD_PWM</td>
        <td className="tg-wp8o">GPIO 13</td>
        <td className="tg-wp8o">GND</td>
        <td className="tg-73oq" />
        <td className="tg-73oq" />
      </tr>
      <tr>
        <td className="tg-3z1b">3.5mm 音频插孔</td>
        <td className="tg-3z1b">PCM_FS</td>
        <td className="tg-wp8o">GPIO 19</td>
        <td className="tg-wp8o">GPIO 16</td>
        <td className="tg-73oq">DI1</td>
        <td className="tg-73oq">接线端子 DI1</td>
      </tr>
      <tr>
        <td className="tg-3z1b">接线端子 DO3</td>
        <td className="tg-3z1b">DO3</td>
        <td className="tg-wp8o">GPIO 26</td>
        <td className="tg-wp8o">GPIO 20</td>
        <td className="tg-73oq">PCM_DIN</td>
        <td className="tg-73oq">3.5mm 音频插孔</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">GND</td>
        <td className="tg-wp8o">GPIO 21</td>
        <td className="tg-73oq">PCM_DOUT</td>
        <td className="tg-73oq">3.5mm 音频插孔</td>
      </tr>
    </tbody>
  </table>
</div>

</div>

#### RTC

reTerminal DM 配备了一个 RTC 电路，并预装了 CR2032 电池，即使在断电的情况下也能保持计时功能。

使用以下命令将硬件时钟更改为当前系统时钟

```sh
sudo hwclock --systohc

```

使用以下命令将系统时钟更改为当前硬件时钟

```sh
sudo hwclock --hctosys

```

查看当前硬件时钟

```sh
sudo hwclock -r 
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RTC.png" /></div>

#### 看门狗

reTerminal DM 配备了独立的硬件看门狗电路，可在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，并允许灵活设置 1 到 255 秒的喂狗时间。

要在 watchdog.conf 中配置看门狗超时时间，请按照以下步骤操作：

步骤 1：打开 watchdog.conf 文件进行编辑，通常位于 /etc/watchdog.conf。

```sh
sudo nano /etc/watchdog.conf
```

步骤 2：在 `/etc/watchdog.conf` 下找到 "watchdog-device" 和 "watchdog-timeout" 配置选项，请按如下方式设置。

:::note
当 `watchdog-timeout` 选项设置为小于 `60` 时，你可能会遇到立即重启的情况；要使用硬件看门狗，你需要将 `watchdog-device` 配置为 `/dev/watchdog1`，而默认未带 `1` 的配置使用的是 Broadcom 看门狗设备。
:::

```sh

# Uncomment this to use the watchdog device driver access "file".

watchdog-device  = /dev/watchdog1

# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.

watchdog-timeout = 60


```

例如，如果你想将看门狗超时时间设置为 60 秒，可以将 `watchdog-timeout` 的值设置为 `60`，这意味着如果看门狗在 60 秒内没有收到复位信号，并假设系统已经崩溃，它将触发自动重启操作。

:::warning
你可以使用以下命令测试看门狗是否处于激活状态，这些命令会让系统进入挂起状态，在执行以下命令时请务必小心：

```sh
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

现在你的 reTerminal DM 应该会在你为 watchdog-timeout 设置的时间之后重启
:::

#### 背光

你可以将背光亮度设置为 6 个等级，从 0 表示关闭到 5 表示最大亮度。
你可以通过使用以下命令来控制亮度。

```sh
sudo -i

echo 0 > /sys/class/backlight/lcd_backlight/brightness
echo 1 > /sys/class/backlight/lcd_backlight/brightness
echo 5 > /sys/class/backlight/lcd_backlight/brightness
```

## 内部扩展模块

### 摄像头

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/Camera.png" /></div>

reTerminal DM 主板上预留了 CSI 摄像头接口，可定制支持摄像头功能。请注意，由于前面板空间有限，只能使用小尺寸摄像头。目前经过严格测试的方案是使用 Raspberry Pi camera V2.0 驱动板 + Seeed 定制摄像头 IMX219-77。

<div class="table-center">

| 连接器 | 连接器类型 | 引脚间距 | 通道数 | FPC 方向 |
|  ---      |  ---           |   ---     |  --- | --- |
| CSI0      | 15-pin FPC     | 1mm       | 2    | 金手指朝下 |
| CSI1      | 22-pin FPC     | 0.5mm     | 4    | 金手指朝上 |

</div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/camera_version.png" /></div>

:::note
请注意，reTerminal DM 标准版本的前面板没有预留摄像头开孔，因此标准产品不支持摄像头功能。如果你有定制摄像头的需求，请联系 odm@seeed.cc
:::

### 4G 模块

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

**所需材料**

- reTerminal DM x 1
- EC25-EUX 4G 模块 x1
- SIM 卡 x1

**步骤 1.** 请参考 [EC25 4G Module 硬件组装](/cn/reterminal-dm-hardware-guide/#assembly-4g-module-and-antenna) 指南，将 `EC25 4G Module` 安装到 `4G/LTE PCIe slot` 中，你应该能看到 *`4G/LTE`* 丝印；在给系统上电之前，请同时将支持 4G 的 SIM 卡插入 [SIM 卡槽](/cn/reterminal-dm/#sim-卡槽)。

**步骤 2.** 使用 ```lsusb``` 检查 EC25-EUX 是否被检测到

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**步骤 3.** 安装串口通信工具 minicom。

```sh
sudo apt install minicom
```

**步骤 4.** 通过 minicom 连接 EC25-EUX 4G 模块。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

串口连接打开后，输入 AT 并按下回车键，你应该会看到 OK。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**步骤 5.** 使 4G 模块连接到 4G 网络

在同一个 minicom 串口窗口中请输入：

```sh
AT+QCFG="usbnet"
```

它会返回类似 ```+QCFG: "usbnet",0,``` 的内容，但我们需要将其设置为 1（ECM 模式），因此输入以下命令：

```sh
AT+QCFG="usbnet",1
```

然后输入以下命令强制调制解调器重启：

```sh
AT+CFUN=1,1
```

然后你可以重启系统，或者等待一段时间，让模块从你的 SIM 卡运营商那里获取网络。

你也可以使用 `ifconfig` 命令查询 reTerminal DM 的网络状态。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### LoraWAN®  模块

:::note
reTerminal DM 同时支持 USB 和 SPI 版本的 WM1302 LoraWAN®  模块，但是 USB 版本需要使用为 4G 模块设计的 Mini PCIe，这意味着如果你想同时使用 4G 模块和 LoraWAN®  模块，请选择 SPI 版本的 WM1302 LoraWAN®  模块。
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI 模块">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

**步骤 1.** 请参考 [LoraWAN®  模块硬件组装](/cn/reterminal-dm-hardware-guide/#assembly-lora-module-and-antenna) 指南，将 `WM1302 SPI LoraWAN® Module` 安装到 `LoraWAN® Mini PCIe slot` 中，你应该能看到 *`Lora`* 丝印。
通过安装模块来安装必要的软件包 build-essential（build essential 软件包是一个 Debian 软件包，其中包含从源代码创建 DEB 软件包所需的工具）。

```sh
sudo apt update
sudo apt install git
sudo apt-get install build-essential
```

**步骤 2.** 在命令行中输入 `sudo raspi-config` 以打开 Raspberry Pi 软件配置工具：

- 选择 Interface Options
- 选择 SPI，然后选择 **Yes** 以启用它
- 选择 I2C，然后选择 **Yes** 以启用它
- 选择 Serial Port，然后在 "Would you like a login shell..." 中选择 **No**，并在 "Would you like the serial port hardware..." 中选择 **Yes**

完成上述操作后，请重启 Raspberry Pi 以确保这些设置生效。

**步骤 3.** 将 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 下载到 reTerminal 并进行编译。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**步骤 4.** 复制并修改 reset_lgw.sh 脚本

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

```
cd ~/sx1302_hal/packet_forwarder
vim reset_lgw.sh
```

使用文本编辑器按如下方式修改 reset_lgw.sh 脚本：

```sh
#!/bin/bash

# Dependency Check
if ! command -v i2cset &> /dev/null; then
    echo "Error: i2c-tools not found. Please install using: sudo apt-get install i2c-tools"
    exit 1
fi

# Configuration
I2C_BUS=1               # CM4_IIC1
DEVICE_ADDR=0x21        # PCA9535 Address from schematic
REG_OUTPUT_PORT0=0x02   # Register 2: Output Port 0
REG_CONFIG_PORT0=0x06   # Register 6: Configuration Port 0
PIN_MASK=0x20           # Bit 5 (0010 0000) for P05

# Read a register
read_reg() {
    local val=$(i2cget -y $I2C_BUS $DEVICE_ADDR $1)
    echo $val
}

# Write to a register
write_reg() {
    i2cset -y $I2C_BUS $DEVICE_ADDR $1 $2
}

echo "Starting SX1302 Reset Sequence on I2C Bus $I2C_BUS, Address $DEVICE_ADDR..."

# Ensure the Output Register bit for P05 is LOW
CURRENT_OUT=$(read_reg $REG_OUTPUT_PORT0)

NEW_OUT=$(printf "0x%02x" $((CURRENT_OUT & ~PIN_MASK)))

write_reg $REG_OUTPUT_PORT0 $NEW_OUT

echo "Set Output Register P05 to LOW. (Reg $REG_OUTPUT_PORT0: $CURRENT_OUT -> $NEW_OUT)"

# Configure P05 as OUTPUT
# Configuration Register: 1 = Input, 0 = Output
CURRENT_CFG=$(read_reg $REG_CONFIG_PORT0)

NEW_CFG=$(printf "0x%02x" $((CURRENT_CFG & ~PIN_MASK)))

write_reg $REG_CONFIG_PORT0 $NEW_CFG

echo "Configured P05 as OUTPUT. (Reg $REG_CONFIG_PORT0: $CURRENT_CFG -> $NEW_CFG)"

# Assert Reset (Drive P05 HIGH)
CURRENT_OUT=$(read_reg $REG_OUTPUT_PORT0)

RESET_HIGH=$(printf "0x%02x" $((CURRENT_OUT | PIN_MASK)))

write_reg $REG_OUTPUT_PORT0 $RESET_HIGH

echo "Asserting Reset (P05 HIGH)..."

# Hold Reset for 200ms
sleep 0.2

# Release Reset (Drive P05 LOW)
write_reg $REG_OUTPUT_PORT0 $NEW_OUT

echo "Released Reset (P05 LOW)."

echo "SX1302 Reset Complete."

echo "------------------------------------"

```


**步骤 5.** 在 `global_conf.json.sx1250.US915` 配置文件中替换 LoraWAN® Module 的默认 `SPI` 端口：

```sh
sed -i 's/spidev0.0/spidev0.1/g'  global_conf.json.sx1250.US915
```

**步骤 6.** 启动 LoraWAN® Module

在你所使用模块对应的 `global_conf.json.sx1250.xxxxx` 中选择你偏好的 LoRaWAN Network Server `server_address` 和网关 EUI `gateway_ID`，并将 `up/down port` 修改为 `1700`。然后运行以下代码以启动集中器：


```sh
cd ~/sx1302_hal/packet_forwarder
# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>



</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

**步骤 1.** 请参考 [LoraWAN®  Module Hardware assembly](/cn/reterminal-dm-hardware-guide/#assembly-4g-module-and-antenna) 指南，将 `WM1302 USB LoraWAN®  Module` 安装到 `4G Mini PCIe slot` 中，你应该可以看到 *`4G`* 丝印。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/dmlora.png"/></div>

**步骤 2.** 在命令行中输入 `sudo raspi-config` 以打开 Raspberry Pi 软件配置工具：

- 选择 Interface Options
- 选择 I2C，然后选择 **Yes** 以启用它
- 选择 Serial Port，然后在 "Would you like a login shell..." 中选择 **No**，并在 "Would you like the serial port hardware..." 中选择 **Yes**

完成上述操作后，请重启 Raspberry Pi 以确保这些设置生效。

**步骤 3.** 将 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 下载到 reTerminal 并进行编译。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**步骤 4.** 复制 reset_lgw.sh 脚本

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**步骤 5.** 在 `global_conf.json.sx1250.US915.USB` 配置文件中替换 LoraWAN® Module 的 USB 端口：

**步骤 5-1.**
首先要获取具体的 USB 端口，请按照以下步骤操作：

```sh
lsusb
```

在我的例子中，我们的 WM1302 使用的是 `STMicroelectronics Virtual COM Port`，因此我们可以得到产品 ID `5740`

**步骤 5-2.**
然后获取具有产品 ID 编号 `5740` 的 USB 设备，在本例中我们得到 USB 端口号 `1-1.4.1`：

```sh
sudo dmesg | grep 5740
# Load ACM module
sudo modprobe cdc_acm
```

然后我们可以按如下方式获取设备端口：

```sh
sudo dmesg | grep 1-1.4.1
```

所以在我的例子中 USB 设备是 `ttyACM2`

因此让我们使用 sed 命令 `sed -i 's/search_string/replacement_string/g' filename` 来修改 `global_conf.json.sx1250.US915.USB` 配置中的 USB 设备，请按照如下模式：`sed -i 's/ttyACM0/the_result_from_above' global_conf.json.sx1250.frequency_of_your_module.USB`，需要注意的是，请将 `the_result_from_above` 和 `frequency_of_your_module` 替换为你自己应用中的值：

例如在我的例子中：

```sh
sed -i 's/ttyACM0/ttyACM2/g'  global_conf.json.sx1250.US915.USB
```

请参考下图所示的步骤：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/find-lora-usb.png"/></div>

**步骤 6.** 启动 LoraWAN® Module

在你所使用模块对应的 `global_conf.json.sx1250.xxxxx` 中选择你偏好的 LoRaWAN Network Server `server_address` 和网关 EUI `gateway_ID`，并将 `up/down port` 修改为 `1700`。然后运行以下代码以启动集中器：


```sh
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-usb.png"/></div>

</TabItem>
</Tabs>

<!-- Code END -->

### PCIe 扩展卡

reTerminal DM 具有源自 CM4 的 PCIe 接口，支持 PCIe 2.0，理论上可提供最高 5Gbps 的传输速度。这使其能够扩展千兆以太网、NVMe SSD 等多种高速接口。我们基于 PCIe、USB 和 I2C 接口开发了多种扩展卡，以满足不同场景需求，这也方便了定制化需求。

:::note
请注意，标准产品默认不包含 PCIe 扩展卡。Seeed 可以为批量定制订单提供组装服务。
:::

### POE

reTerminal DM 可以通过添加 PoE 供电模块来支持 IEEE 802.3af PD（受电设备）标准。

:::note
reTerminal DM 支持 PoE 供电，但标准产品默认不包含 PoE 模块。Seeed 可以为批量定制订单提供 PoE 焊接和组装服务。然而，如果客户在测试样机，则需要自行焊接和组装 PoE 模块。
:::

### SSD

reTerminal DM 通过使用 PCIe 扩展卡支持 2280 NVMe SSD。需要注意的是，CM4 的 PCIe 为 Gen2.0，理论最高速度为 5Gbps。如果你使用的是 Gen3.0 或更高版本的 SSD，可能无法达到该 SSD 的最高速度。经过测试，安装 SSD 的 reTerminal DM 可实现最高 210MB/s 的写入速度和 360MB/s 的读取速度。如果你不确定哪些 SSD 兼容，可以在 Seeed 官方网站购买 112990247、512GB NVMe M.2 PCle Gen3x4 2280 SSD。

:::note
reTerminal DM 的标准版本不支持 SSD，需要购买 PCIe 扩展卡才能启用此功能。
:::

## 其他资源

- [reTerminal DM 数据手册](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf)
- [reTerminal DM 用户手册](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf)
- [reTerminal DM 原理图设计 & PCB 设计 & Gerber 文件](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal_DM_schematic_design_files.zip)
- [reTerminal DM 结构设计文件.stp](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
