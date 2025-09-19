---
description: reTerminal DM 入门指南
title: reTerminal DM 入门指南
keywords:
  - Edge
  - reTerminal-DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reterminal-dm
last_update:
  date: 04/23/2023
  author: Peter Pan
---
# reTerminal DM 入门指南

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM 是一款 10.1 英寸开源工业 HMI - 一个集成设备主机，用于统一数据流并管理现场设备。

基于 Raspberry Pi CM4，作为一体化的面板 PC、HMI、PLC、IIoT 网关设备，reTerminal DM 是新一代交互式传感中枢，配备 IP65 工业级大屏幕。

它具有丰富的可扩展性和混合连接能力，支持 CAN 总线、RS485、RS232、千兆以太网端口和其他接口，以及强大的无线通信能力，如 4G、LoRa®、WiFi 和 BLE。

> \*4G 和 LoRa® 模块默认不包含在 reTerminal DM 中，请根据需要购买相关模块，
> [4G 套装](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 四合一的 HMI、PLC、面板 PC 和网关：完美适用于分布式中枢设备
- 事件驱动应用的低代码编程：原生集成 Node-RED 用于基于流的编辑和一键部署，兼容所有在 Raspberry Pi 上运行的软件
- 恶劣工作环境的坚固设计：IP65 前面板，-10~50°C 工作温度
- 混合连接：支持 4G LTE、LoRaWAN®、WiFi、BLE、RS485/RS232、CAN 总线、1000M 以太网、USB、HDMI
- 软硬件开源设计：由 Raspberry Pi CM4 驱动，欢迎定制或衍生产品
- [产品保修：两年保修](Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/reterminal-dm-warranty.md)

> \*4G 和 LoRa® 模块默认不包含在 reTerminal DM 中，请根据需要购买相应模块。

## 规格参数

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>基本配置</strong></td>
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
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>M.2 SATA SSD 插槽 2280-B Key（可选）</td>
    </tr>
    <tr data-style="height: 36px;" style={{height: 36}}>
      <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>操作系统支持</td>
      <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>Raspbian<br />SenseCraft Edge OS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>显示屏</strong></td>
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
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>最大色彩数</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1670万色（8位）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>亮度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>400 尼特</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>可视角度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>170/170 水平/垂直°</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>背光寿命</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>30000 小时</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>触摸类型</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>10点电容式</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>铅笔硬度</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>7H</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>视频和音频</strong></td>
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
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 主机</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}> </td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2 x USB 3.0（可选）</td>
    </tr>
    <tr data-style="height: 36px;" style={{height: 36}}>
      <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>1 x RS-485 > 端子块<br />1 x RS-485 > DB9（可选）</td>
    </tr>
    <tr data-style="height: 36px;" style={{height: 36}}>
      <td data-style="height: 36px; width: 35.4622%;" style={{height: 36, width: '35.4622%'}}>RS232</td>
      <td data-style="height: 36px; width: 63.1933%;" style={{height: 36, width: '63.1933%'}}>1 x RS-232 &gt; 端子块<br />1 x RS-232 &gt; DB9（可选）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>CAN</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>1 x CAN-BUS &gt; 端子块</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>DI</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>4 x DI &gt; 端子块</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>DO</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>4 x DO &gt; 端子块</td>
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
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>片上WiFi</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>片上BLE</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>LoRa®</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>Mini-PCIe用于LoRaWAN®（可选）</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>蜂窝网络</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}><a href="https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html" target="_blank" rel="noopener">Mini-PCIe用于4G（可选）</a></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>电源</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>输入</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2针端子块</td>
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
      <td data-style="height: 18px; width: 98.6555%;" colSpan={2} style={{height: 18, width: '98.6555%'}}><strong>机械 </strong></td>
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
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>安全性</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>ATECC608A</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>保修期</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>2年</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>散热方式</td>
      <td data-style="height: 18px; width: 63.1933%;" style={{height: 18, width: '63.1933%'}}>无风扇</td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概览

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/interface-overview.png" /></div>

## 主板概览

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/Mainboard.png" /></div>

## 电源图

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/power-diagram.png" /></div>

reTerminal DM 支持两种电源供电选项：DC 端子和 PoE 端口。默认情况下，reTerminal DM 通过 DC 端子供电，而 **PoE 电源供电是可选的**。这提供了电源选择的灵活性，并允许轻松集成各种电源。

### 电源端子

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/powerplug.png" /></div>

reTerminal DM 的额定电压为 12~24 V。电源通过 2 针电源端子块连接器连接。

### POE（可选）

:::note
标准产品默认不包含 PoE 模块，Seeed 可根据要求为批量定制订单提供 PoE 焊接和组装服务，请联系 odm@seeed.cc，
:::

如果安装了 PoE 模块，reTerminal DM 的 LAN1 端口可以支持 PoE 电源供电，提供了一种通过以太网为设备供电的便捷高效方式。此选项简化了安装过程并减少了所需的布线量，使其成为电源有限或电源插座不易获得的应用的理想解决方案。

- PoE 输入：范围 44~57V；典型值 48V
- PoE 输出：12V，最大 1.1A

### 功耗

请参考下表了解 Seeed Studio 实验室测试的 reTerminal DM 功耗。请注意，此值仅供参考，因为测试方法和环境可能导致结果出现差异。

| 状态   | 电压 | 电流 | 功耗 | 描述 |
|   ---      |    ---    |   ---      |         ---          |        ---    |
|关机  |         |  0.6mA  |                   | 关机和断电状态下的静态功耗测试。|
|空闲      |24V      |  0.165A |    3.96W          | 通过端子插座向 reTerminal DM 设备提供 24V 电源时的输入电流测试，运行默认的 Seeed Studio 系统，不运行任何测试程序。|
|满载 |24V      |  0.37A  |    8.88W          | 使用"stress -c 4"命令配置 CPU 满载运行，同时播放视频并执行 CAN 和 RS485 通信。未连接外部设备。 |

### 开机和关机

reTerminal DM 默认没有电源按钮，一旦连接电源，系统将自动启动。关机时，请在操作系统中选择关机选项，等待系统完全关机后再切断电源。要重启系统，只需重新连接电源即可。

:::note
请注意，关机后请至少等待10秒钟再重启系统，以便内部电容器完全放电。
:::

## 框图

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/block-diagram.png" /></div>

### I2C 框图

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/i2c-block.png" /></div>

## 接口

### 麦克风

reTerminal DM 配备了两个 MEMS 麦克风，位于屏幕下方的左右两侧。这些麦克风可以配置为双麦克风阵列，提供卓越的声音拾取能力。麦克风通过 I2S 接口与音频编解码器芯片通信，而编解码器芯片通过 PCM 接口与 CM4 通信。reTerminal DM 选用的音频编解码器芯片是 TI TLV320AIC3104 低功耗立体声音频编解码器。

:::warning
需要注意的是，为了实现前面板 IP65 防护等级，麦克风开孔覆盖了防水声学膜。请避免使用尖锐物体触碰麦克风开孔。
:::

要与麦克风接口：

请在设备上打开 `Terminal` 应用程序并输入 `arecord -l` 来查找麦克风驱动程序：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/arecord-device.png" /></div>

要录制音频，您可以使用 `audacity` 应用程序，请使用 `sudo apt install audacity` 来安装 audacity 应用程序：

请打开 audacity 来启动应用程序，然后点击录制按钮从内置麦克风录制音频：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/recording.png" /></div>

### LED 指示灯

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/led-indicator.png" /></div>

reTerminal DM 具有三个 LED 指示灯，用于指示机器的运行状态。请参考下表了解每个 LED 的具体功能和状态：

#### LED 引脚分配

| 标签 | 信号   | 信号源 | 颜色  | 描述 |
|  ---  |  ---     |     ---       |  ---   |     ---     |
| PWR   | LED_nPWR | CM4           | 黄色 | 用于指示 CM4 的电源供应。当 CM4 正常上电时，LED 将点亮|
|USER   |          |PCA9535 - GPIO | 红色    | 用户自定义功能 |
|ACT    | LED_nACT |CM4            | 绿色  | 用于指示系统的各种状态。请参见下表。|

#### ACT 状态表

<div class="table-center">

| 长闪烁 | 短闪烁 | 状态 |
| --- | --- | --- |
| 0 | 3 | 通用启动失败|
| 0 | 4 | 未找到 start*.elf|
| 0 | 7 | 未找到内核镜像|
| 0 | 8 | SDRAM 故障|
| 0 | 9 | SDRAM 不足|
| 0 | 10 | 处于 HALT 状态|
| 2 | 1 | 分区不是 FAT 格式|
| 2 | 2 | 从分区读取失败 |
| 2 | 3 | 扩展分区不是 FAT 格式|
| 2 | 4 | 文件签名/哈希不匹配 - Pi 4|
| 4 | 4 | 不支持的板卡类型|
| 4 | 5 | 致命固件错误|
| 4 | 6 | A 类型电源故障|
|4 | 7 | B 类型电源故障 |

</div>

:::note
如果 ACT LED 以规律的四次闪烁模式闪烁，表示无法找到引导代码 (start.elf)<br/>
如果 ACT LED 以不规律的模式闪烁，表示引导已开始。<br/>
如果 ACT LED 不闪烁，则 EEPROM 代码可能已损坏，请在不连接任何设备的情况下重试以确保正常。<br/>
更多详细信息请查看 Raspberry Pi 论坛：<br/>
置顶：您的 Pi 无法启动？（启动问题置顶帖）- Raspberry Pi 论坛<br/>
更多详细信息请查看 Raspberry Pi 论坛：https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151<br/>
:::

要激活 USER LED，请使用以下命令：

```sh
sudo -i

echo 0 > /sys/class/leds/usr-led/brightness
echo 1 > /sys/class/leds/usr-led/brightness
```

您应该看到用户LED灯亮起红色。

### 光线传感器

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/light-sensor.png" /></div>

光线传感器位于屏幕右下角，能够检测环境光强度并自动调节屏幕亮度，以提供最佳的观看体验同时节约能源。光线传感器通过I2C协议与CM4通信。

I2C地址是**0x29**。

要与光线传感器接口：

- **步骤 1.** 进入以下目录

```sh
cd /sys/bus/iio/devices/iio:device0
```

- **Step 2.** Type the following to obtain the light intensity value in **Lux**

```sh
cat in_illuminance_input 
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/light-sensor-result.png" /></div>

### 蜂鸣器

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/buzzer.png" /></div>

reTerminal DM 配备了一个有源蜂鸣器，位于屏幕右下角，可用于各种用途，如报警和事件通知。蜂鸣器通过 PCA9535 GPIO 扩展 IC 进行控制，该 IC 为设备提供额外的数字 I/O 通道。

要测试和控制蜂鸣器，您只需将 `1` 或 `0` 设置到 `/sys/class/leds/usr-buzzer/brightness` 文件：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/toggle_buzzer.png" /></div>

### 多功能端子

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/multi-functional-terminal.png" /></div>

#### 端子和信号对照表

<div class="table-center">

|CANH | CANL | GND_ISO | RS485A | RS485B | GND_ISO | RS232_TX | RS232_RX| GND | GND |
|:---:| :---: | :---: | :---: | :---:    | :---: | :---: | :---: | :---: | :---:    |
|DI1| DI2 | DI3 | DI4 | GND_DI | DO1 | DO2 | DO3 | DO4 | GND_DO |

</div>

#### 端子引脚分配表

<div class="table-center">

| 引脚 | 丝印 | 信号 | 描述 |
| --- |  ---        |  ---   | ---         |
|1 |CH| CANH     | 差分CAN信号高电平 |
|2 |CL| CANL     | 差分CAN信号低电平 |
|3 |GS| GND_ISO  | 隔离地信号 |
|4 |RA| RS485A   | 差分RS485信号A |
|5 |RB| RS485B   | 差分RS485信号B |
|6 |GS| GND_ISO  | 隔离地信号 |
|7 |RT| RS232_TX | RS232信号发送端 |
|8 |RX| RS232_RX | RS232信号接收端 |
|9 |GD| GND     | 主板地 |
|10 |GD| GND    | 主板地 |
|11 |I1| DI1    | 数字输入1 |
|12 |I2| DI2    | 数字输入2 |
|13 |I3| DI3    | 数字输入3 |
|14 |I4| DI4    | 数字输入4 |
|15 |GI| GND_DI | 输入地信号，通过1MΩ电阻连接到GND |
|16 |D1| DO1    | 数字输出1 |
|17 |D2| DO2    | 数字输出2 |
|18 |D3| DO3    | 数字输出3 |
|19 |D4| DO4    | 数字输出4 |
|20 |GO| GND_DO | 输出地信号，通过0Ω电阻连接到GND |

</div>

#### DI/DO

reTerminal DM 支持 4 个数字输入和 4 个数字输出通道，所有通道都采用光电隔离，有效保护主板免受电压尖峰或其他电气干扰的影响。

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
输入信号的地线与输出信号的地线不同。输入信号的地线应连接到 GND_DI 引脚，而输出信号的地线应连接到 GND_DO 引脚。

reTerminal DM 的数字输入和输出使用负逻辑，终端 IO 与 CM4 GPIO 之间的逻辑电平关系如下表所示。

|终端数字输入 | CM4 GPIO 检测信号 |
| ---                   | ---                    |
| 低                   | 高                   |
| 高                  | 低                    |

| CM4 GPIO 输出       | 终端数字输出|
| ---                   | ---                    |
| 高                  | 低                    |
| 低                   | 高                   |

:::

在本节中，我们将使用 `raspi-gpio` 工具来测试 GPIO，您可以使用 `raspi-gpio help` 来查看手册：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/raspi-gpio.png" /></div>

要获取所有 GPIO 的当前状态，请在 `Terminal` 中输入以下命令：

```sh
raspi-gpio get
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/raspi-gpio-get.png" /></div>

###### 数字输入

以下是传感器连接到 DI 的接线示意图：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/sensor.png" /></div>

要获取特定 GPIO 状态，请在 `终端` 中输入以下命令：

```sh
raspi-gpio get 16
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio16-state.png" /></div>

其中 `GPIO16` 的当前状态设置为 `INPUT` 并且 `下拉`，当前引脚电平为 `1`，表示 `高电平`，根据上表这也意味着当前终端数字输入 `DI1` 为 `低电平`

让我们通过将 `DI1` 终端连接到 `5V 电源` 的 `正极` 引脚来给 `DI1` 施加 `高电平` 信号，然后将 `5V 电源` 的 `地线` 连接到 `GND_DI`

```sh
raspi-gpio get 16
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio16-state-high.png" /></div>

其中 `GPIO16` 的当前引脚电平为 `0`，表示 `Low`，根据上表，这也意味着当前终端数字输入 `DI1` 为 `High`

###### 数字输出

以下是如何将负载连接到 DO 的接线示意图：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/DO.png" /></div>

要控制数字输出状态值，首先我们需要将引脚状态设置为 `Output` 和 `pulling Down`：

```sh
#set current pin state
raspi-gpio set 24 op pd dh

#get the pin state after set
raspi-gpio get 24

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio24-state-set.png" /></div>

其中对应 `DO1` 的 `GPIO24` 被设置为 `输出` 和 `下拉` 状态，并且 `GPIO24` 电平被设置为 `高电平`

现在让我们将 `GPIO24` 设置为 `低电平`，这意味着 `DO1` 输出被驱动为 `高电平`。

```sh
#set current pin state
raspi-gpio set 24 dh

#get the pin state after set
raspi-gpio get 24

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/gpio24-state-set-low.png" /></div>

#### RS485

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RS485.png" /></div>

reTerminal DM 通过其 20 针连接器配备了 RS485 接口，该接口在信号和电源方面都进行了隔离，以确保在工业和自动化应用中的安全可靠运行。`RS485 A` 和 `RS485 B` 信号使用电容隔离，提供出色的 EMI 抗扰性，满足 RS485 接口的高速通信要求。

:::note
默认已安装 120Ω 终端电阻。
RS485 接口使用隔离电源，这意味着连接到 RS485 接口的外部设备的地信号应连接到 GND_ISO 引脚。
:::

要测试和连接 RS485，您应该准备一个 USB 转 RS485 适配器，请确保连接与下图相同：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

:::note
请注意，RS485 端口是 `/dev/ttyACM1` 或 `/dev/ttyCH340USB1`，这取决于您运行的操作系统。
:::
请在您的主机上使用您喜欢的串行通信工具来执行下面的测试：
在 reTerminal DM 上运行 python 代码来测试 RS485 串行连接，此代码将按以下设置配置 RS485 串行端口

波特率 -> 9600
字节大小 -> 8 位
奇偶校验 -> 无
停止位 -> 1
硬件流控制 -> 禁用

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

reTerminal DM 的 20 针连接器还包括一个 RS232 接口，该接口没有隔离。因为 RS232 通信通常使用 CMOS 电压电平，通信距离较短，使其不太容易受到环境电磁干扰的影响。

:::note
请注意，接地引脚需要连接到 `RX` 引脚旁边的 `GD` 引脚，确保不是 `GS` 引脚。
:::

以下是从 reTerminal DM 向主机发送数据的测试 Python 脚本：

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

这是在 reTerminal DM 上接收从主机发送数据的测试 Python 脚本，

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

reTerminal DM 具有支持 CAN FD（控制器局域网灵活数据速率）协议的 CAN 接口。CAN 接口使用电容隔离进行隔离，提供出色的 EMI 保护，确保在工业和自动化应用中的可靠通信。默认已安装 120Ω 的终端电阻。

:::note
CAN 接口使用隔离电源，这意味着连接到 CAN 接口的外部设备的地信号应连接到 GND_ISO 引脚
:::

要测试和连接 CAN 总线：
请按照下图所示连接 USB 转 CAN 适配器：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

- 步骤 1：安装 CAN-utils

```sh
sudo apt install can-utils
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg" /></div>

CAN-utils 是一个使用 CAN 接口的极其有用的调试工具集合。它包括以下应用程序：

- candump – 转储 CAN 数据包 – 显示、过滤并记录到磁盘。
- canplayer – 重放 CAN 日志文件。
- cansend – 发送单个帧。
- cangen – 生成随机流量。
- canbusload – 显示当前 CAN 总线**利用率**

CAN-utils 源代码可以从 [GitHub 仓库](https://github.com/linux-can/can-utils) 获取。

- 步骤 2：使用以下命令设置 CAN 接口：
  
```sh
sudo ip link set can0 up type can bitrate 500000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

- 步骤 3：使用 git 下载测试代码到 reTerminal DM

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple

```

- STEP 4: Compiles and runs the code that sends the data:

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit

```

on you Linux host computer or another reTerminal DM, you can compiles and runs the code that receives the data.

```sh
gcc canreceive.c -o canreceive
```

你可以看到结果，下面的图片是使用两个 reTerminal DM 完成的：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg" /></div>

### USB

#### USB Type-A

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/usb-a.png" /></div>

有两个 USB 2.0 Type-A 端口，您可以连接 USB 设备，如闪存驱动器、网络摄像头、键盘和鼠标等。

#### USB Type-C

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/usb-c.png" /></div>

USB Type-C 是一个 USB 2.0 端口，用于串行调试或刷写操作系统镜像，具体取决于启动开关的位置。有关刷写操作系统的信息，请参考[刷写操作系统 Wiki 页面](/cn/reterminal-dm-flash-OS)

### SIM 卡槽

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/sim-slot.png" /></div>

reTerminal DM 使用工业应用中常见的标准尺寸 SIM 卡槽，需要尺寸为 25mm x 15mm 的标准 SIM 卡。

:::note
请注意，reTerminal DM 的标准版本不包含 4G 模块。如果您需要 4G 功能，必须单独购买额外的 4G 模块，因此此 SIM 卡槽仅在您在 4G PCIe 插槽中放置支持的 4G 模块版本时才能工作。
:::

### 复位按钮

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/reset-button.png" /></div>

在 reTerminal DM 的复位孔中有一个迷你按钮开关。通过用细物体按下此按钮，可以复位 CM4。此按钮连接到 CM4 的 RUN_PG 引脚。此引脚为高电平时表示 CM4 已启动。将此引脚拉低会复位模块。

### 音频插孔

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/audio-jack.png" /></div>

reTerminal DM 有一个 3.5mm 耳机插孔，支持声音输出，可以连接外部耳机、扬声器等。

:::note
耳机插孔仅支持声音输出，不支持麦克风录音功能。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/audio-power.png" /></div>

### HDMI

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/hdmi.png" /></div>

reTerminal DM 具有来自 CM4 的原生 HDMI 接口，支持高达 4K @ 60 fps 的视频输出。它非常适合需要多显示器的应用，允许用户将内容输出到外部大屏幕。

### 以太网 RJ45

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RJ45.png" /></div>

reTerminal DM 配备了 CM4 原生千兆以太网接口，支持三种不同速度：10/100/1000 Mbit/s。可以购买额外的 PoE 模块来通过此接口启用以太网供电 (PoE) 传输，为 reTerminal DM 提供电源。

### 内部接口

#### 40 引脚 GPIO

经典的 Raspberry Pi 40 引脚 GPIO 设计在 reTerminal DM 内部得以保留，引脚定义与 Raspberry Pi 4B 保持相同。用户需要打开后盖才能使用这些 GPIO，需要注意的是，由于 CM4 IO 的资源有限，40 引脚 GPIO 和许多外设接口是复用的，因此在使用 GPIO 时需要特别注意冲突。有关详细的引脚分配信息，请参考下表。

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
        <td className="tg-3z1b">引脚 1</td>
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
        <td className="tg-73oq">3.5mm 音频插孔</td>
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
        <td className="tg-73oq">CAN 的 SPI 使能引脚</td>
      </tr>
      <tr>
        <td className="tg-3z1b" />
        <td className="tg-3z1b" />
        <td className="tg-wp8o">GND</td>
        <td className="tg-wp8o">GPIO 7</td>
        <td className="tg-73oq">SPI0_CE1</td>
        <td className="tg-73oq">LoRa® 的 SPI 使能引脚</td>
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
        <td className="tg-73oq">CAN 中断引脚</td>
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

reTerminal DM 配备了一个 RTC 电路，预装了 CR2032 电池，使其即使在断电情况下也能保持计时功能。

使用以下命令将硬件时钟与当前系统时钟同步

```sh
sudo hwclock --systohc

```

Use the following command to change the system clock with current hardware clock

```sh
sudo hwclock --hctosys

```

To veiw the current hardware clock

```sh
sudo hwclock -r 
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/RTC.png" /></div>

#### 看门狗

reTerminal DM 配备了独立的硬件看门狗电路，确保在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，允许灵活设置 1 到 255 秒的喂狗时间。

要在 watchdog.conf 中配置看门狗超时时间，请按照以下步骤操作：

步骤 1：打开 watchdog.conf 文件进行编辑，通常位于 /etc/watchdog.conf。

```sh
sudo nano /etc/watchdog.conf
```

步骤 2：在 `/etc/watchdog.conf` 下查找 "watchdog-device" 和 "watchdog-timeout" 配置选项，请按如下设置。

:::note
当 `watchdog-timeout` 选项设置为小于 `60` 时，您可能会遇到立即重启的情况。要使用硬件看门狗，您需要将 `watchdog-device` 配置为 `/dev/watchdog1`，其中不带 `1` 的默认配置使用的是 Broadcom 看门狗设备。
:::

```sh

# Uncomment this to use the watchdog device driver access "file".

watchdog-device  = /dev/watchdog1

# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.

watchdog-timeout = 60


```

例如，如果您想将看门狗超时时间设置为60秒，您可以将`watchdog-timeout`的值设置为`60`，这意味着如果看门狗在60秒内没有收到重置信号，它将触发自动重启操作，假设系统已经崩溃。

:::warning
您可以使用以下命令测试看门狗是否处于活动状态，这些命令将使系统停止，请谨慎执行以下命令：

```sh
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

现在您的 reTerminal DM 应该在您设置的看门狗超时时间后重新启动
:::

#### 背光

您可以为背光设置 6 个亮度级别，从 0（关闭）到 5（最大亮度）。
您可以使用以下命令来控制亮度。

```sh
sudo -i

echo 0 > /sys/class/backlight/lcd_backlight/brightness
echo 1 > /sys/class/backlight/lcd_backlight/brightness
echo 5 > /sys/class/backlight/lcd_backlight/brightness
```

## 内部扩展模块

### 摄像头

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/Camera.png" /></div>

reTerminal DM 主板上预留了 CSI 摄像头接口，可以定制支持摄像头功能。请注意，由于前面板空间有限，只能使用小尺寸摄像头。目前经过严格测试的解决方案使用 Raspberry Pi 摄像头 V2.0 驱动板 + Seeed 定制摄像头 IMX219-77。

<div class="table-center">

| 连接器 | 连接器类型 | 引脚间距 | 通道 | FPC 方向 |
|  ---      |  ---           |   ---     |  --- | --- |
| CSI0      | 15针 FPC     | 1mm       | 2    | 金手指朝下 |
| CSI1      | 22针 FPC     | 0.5mm     | 4    | 金手指朝上 |

</div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/camera_version.png" /></div>

:::note
请注意，reTerminal DM 的标准版本在前面板上没有摄像头开口，因此标准产品不支持摄像头功能。如果您有定制摄像头需求，请联系 odm@seeed.cc
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

**步骤 1.** 请参考 [EC25 4G 模块硬件组装](/cn/reterminal-dm-hardware-guide/#assembly-4g-module-and-antenna) 指南，将 `EC25 4G 模块` 安装到 `4G/LTE PCIe 插槽` 中，您应该能看到 *`4G/LTE`* 丝印，并且请在系统上电之前将支持 4G 的 SIM 卡插入 [SIM 卡插槽](/cn/reterminal-dm/#sim-card-slot)。

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

**Step 4.** Connect EC25-EUX 4G module through minicom.

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

一旦串口连接打开，输入 AT 并按下"回车"键，您应该会看到 OK。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**步骤 5.** 启用 4G 模块连接到 4G 网络

在同一个 minicom 串口窗口中，请输入：

```sh
AT+QCFG="usbnet"
```

它将返回类似 ```+QCFG: "usbnet",0,``` 的内容，但我们需要将其设置为 1（ECM 模式），因此输入以下命令：

```sh
AT+QCFG="usbnet",1
```

Then enter the following command to force the modem to reboot:

```sh
AT+CFUN=1,1
```

然后您可以重启或等待一段时间，让模块从您的SIM卡运营商获取互联网连接。

您也可以使用 `ifconfig` 命令来查询 reTerminal DM 的网络状态。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### LoraWAN® 模块

:::note
reTerminal DM 支持 USB 和 SPI 版本的 WM1302 LoraWAN® 模块，但是 USB 版本需要使用为 4G 模块设计的 Mini PCIe 接口，这意味着如果您想同时使用 4G 模块和 LoraWAN® 模块，请选择 SPI 版本的 WM1302 LoraWAN® 模块。
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

**步骤 1.** 请参考 [LoraWAN® 模块硬件组装](/cn/reterminal-dm-hardware-guide/#assembly-lora-module-and-antenna) 指南，将 `WM1302 SPI LoraWAN® 模块` 安装到 `LoraWAN® Mini PCIe 插槽` 中，您应该能看到 *`Lora`* 丝印。
通过安装模块来安装必要的软件包 build-essential（build essential 软件包是一个 Debian 软件包，包含从源代码创建 DEB 软件包所需的工具）。

```sh
sudo apt update
sudo apt install git
sudo apt-get install build-essential
```

**步骤 2.** 在命令行中输入 `sudo raspi-config` 打开树莓派软件配置工具：

- 选择 Interface Options
- 选择 SPI，然后选择 **Yes** 启用它
- 选择 I2C，然后选择 **Yes** 启用它
- 选择 Serial Port，然后对 "Would you like a login shell..." 选择 **No**，对 "Would you like the serial port hardware..." 选择 **Yes**

完成后，请重启树莓派以确保这些设置生效。

**步骤 3.** 下载 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 到 reTerminal 并编译它。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**Step 4.** Copy the reset_lgw.sh script

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Step 5.** replace the default `SPI` port of the LoraWAN®  Module in the `global_conf.json.sx1250.US915` config file:

```sh
sed -i 's/spidev0.0/spidev0.1/g'  global_conf.json.sx1250.US915
```

**第6步。** 启动LoraWAN®模块

然后根据您的WM1302工作频率版本运行以下代码来启动LoraWAN®模块。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>

请选择您偏好的 Lora® 网络服务器，并使用上图所示的 `EUI ID` 来设置连接。

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

**步骤 1.** 请参考 [LoraWAN® 模块硬件组装](/cn/reterminal-dm-hardware-guide/#assembly-4g-module-and-antenna) 指南，将 `WM1302 USB LoraWAN® 模块` 安装到 `4G Mini PCIe 插槽` 中，您应该能看到 *`4G`* 丝印标识。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/dmlora.png"/></div>

**步骤 2.** 在命令行中输入 `sudo raspi-config` 打开树莓派软件配置工具：

- 选择 Interface Options
- 选择 I2C，然后选择 **Yes** 启用它
- 选择 Serial Port，然后对 "Would you like a login shell..." 选择 **No**，对 "Would you like the serial port hardware..." 选择 **Yes**

完成后，请重启树莓派以确保这些设置生效。

**步骤 3.** 下载 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 到 reTerminal 并编译它。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**Step 4.** Copy the reset_lgw.sh script

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**步骤 5.** 在 `global_conf.json.sx1250.US915.USB` 配置文件中替换 LoraWAN® 模块的 USB 端口：

**步骤 5-1.**
首先获取具体的 USB 端口，请按照以下步骤操作：

```sh
lsusb
```

在我的情况下，我们的 WM1302 使用的是 `STMicroelectronics Virtual COM Port`，所以我们可以获得产品 ID `5740`

**步骤 5-2.**
然后使用产品 ID 号 `5740` 获取 USB 设备，在这种情况下我们获得 USB 端口号 `1-1.4.1`：

```sh
sudo dmesg | grep 5740
# Load ACM module
sudo modprobe cdc_acm
```

Then we could get the device port as follow:

```sh
sudo dmesg | grep 1-1.4.1
```

所以在我的情况下，USB 设备是 `ttyACM2`

因此让我们使用 sed 命令 `sed -i 's/search_string/replacement_string/g' filename` 修改 `global_conf.json.sx1250.US915.USB` 配置中的 USB 设备，请按照模式 `sed -i 's/ttyACM0/the_result_from_above' global_conf.json.sx1250.frequency_of_your_module.USB` 操作，请注意将 `the_result_from_above` 和 `frequency_of_your_module` 替换为您自己应用的值：

例如在我的情况下：

```sh
sed -i 's/ttyACM0/ttyACM2/g'  global_conf.json.sx1250.US915.USB
```

请参考下图所示的步骤：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/find-lora-usb.png"/></div>

**步骤 6.** 启动 LoraWAN® 模块

然后根据您的 WM1302 工作频率版本运行以下代码来启动 LoraWAN® 模块。

```sh
USB version
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-usb.png"/></div>

请选择您偏好的 Lora® 网络服务器，并使用上图所示的 `EUI ID` 来设置连接。

</TabItem>
</Tabs>

<!-- Code END -->

### PCIe 扩展卡

reTerminal DM 具有从 CM4 衍生的 PCIe 接口，支持 PCIe 2.0，理论上提供最大 5Gbps 的传输速度。这允许扩展各种高速接口，如千兆以太网和 NVMe SSD。我们基于 PCIe、USB 和 I2C 接口开发了多种扩展卡，以满足不同场景的需求。这也便于定制化需求。

:::note
请注意，标准产品默认不包含 PCIe 扩展卡。Seeed 可以为批量定制订单提供组装服务。
:::

### POE

reTerminal DM 可以通过添加 PoE 电源模块来支持 IEEE 802.3af PD（受电设备）标准。

:::note
reTerminal DM 支持 PoE 供电，但标准产品默认不包含 PoE 模块。Seeed 可以为批量定制订单提供 PoE 焊接和组装服务。但是，如果客户正在测试样品，他们需要自己焊接和组装 PoE 模块。
:::

### SSD

reTerminal DM 通过使用 PCIe 扩展卡支持 2280 NVMe SSD。需要注意的是，CM4 的 PCIe 是 gen2.0，最大理论速度为 5Gbps。如果您使用的是 Gen3.0 或更高版本的 SSD，可能无法达到 SSD 的最大速度。经过测试，安装了 SSD 的 reTerminal DM 可以达到最大写入速度 210MB/s 和最大读取速度 360MB/s。如果您不确定哪些 SSD 兼容，可以从 Seeed 官方网站购买 112990247，512GB NVMe M.2 PCle Gen3x4 2280 SSD。

:::note
reTerminal DM 的标准版本不支持 SSD，需要购买 PCIe 扩展卡才能启用此功能。
:::

## 其他资源

- [reTerminal DM 数据表](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf)
- [reTerminal DM 用户手册](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf)
- [reTerminal DM 原理图设计和 PCB 设计及 Gerber 文件](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal_DM_schematic_design_files.zip)
- [reTerminal DM 结构设计文件.stp](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp)

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
