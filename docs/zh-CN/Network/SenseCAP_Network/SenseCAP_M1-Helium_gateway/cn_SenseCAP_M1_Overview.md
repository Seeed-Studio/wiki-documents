---
description: SenseCAP M1 概述
title: SenseCAP M1 概述
keywords:
- SenseCAP 网络
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview
last_update:
  date: 02/14/2023
  author: Matthew
---



**SenseCAP M1** 是一款高性能、即插即用的 **LoRaWAN 室内网关**，连接到 **Helium LongFi™ 网络。**  
它基于 Raspberry Pi 4，并嵌入了 WM1302/WM1303 (Semtech SX1302/SX1303) LoRa 集中器。设备内置 BLE，可帮助您通过简单的步骤完成设置，并支持通过 Wi-Fi 或以太网连接到互联网。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp" alt="pir" width={600} height="auto" /></p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-EU868-p-5022.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
    </a>
</div>

**功能特点**
============

![SenseCAP M1 功能特点](https://www.sensecapmx.com/wp-content/uploads/2022/06/features.jpg)

*   **轻松接入 Helium 网络：** 通过简单步骤即可准备就绪。
*   **成熟硬件解决方案支持：** Raspberry Pi 4（2G/4G/8G RAM，64G 存储）和 WM1302/WM1303 (Semtech SX1302/SX1303) 基带 LoRa 芯片。
*   **安全可靠：** 内置 ECC608 加密芯片，高安全性认证和可靠连接。
*   **自动在线升级：** 自动 OTA 升级，无需手动操作。
*   **远程诊断：** 内置远程诊断机制，高效在线支持。
*   **64GB 大存储：** 配备 64GB MicroSD 卡，延长网关使用寿命，满足潜在升级的存储需求。
*   **高效散热解决方案：** 铝制外壳，内置散热片和散热风扇，确保长期稳定运行。
*   **多种配件：** 玻璃纤维天线、滑杆安装滑垫以及即将推出的室外外壳等。
*   **通过 FCC 和 CE 认证：** 可用于个人和商业用途。  
    
    * * *
    

**包装内容**
====================

*   SenseCAP M1 LoRaWAN 室内网关 (EU868/US915) \*1
*   电源适配器 (EU/US)\*1
*   天线 (EU868/US915) \*1
*   64GB MicroSD 卡 \*1
*   快速入门指南 \*1

![SenseCAP M1 包装内容](https://www.sensecapmx.com/wp-content/uploads/2022/06/package-contents.png)

* * *

**总体概述**
====================

![SenseCAP M1 总体概述](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-1.webp)

![SenseCAP M1 分解图](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-2.webp)

![SenseCAP M1 分解图 2](https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-3.webp)

* * *

**接口**
=============

![SenseCAP M1 接口](https://www.sensecapmx.com/wp-content/uploads/2022/06/interface-1.webp)

* * *

**尺寸**
==============

![SenseCAP M1 尺寸](https://www.sensecapmx.com/wp-content/uploads/2022/06/dimensions-1.webp)

*   **设备尺寸 (/pcs):** 154\*100\*44 mm
*   **设备重量 (/pcs):** 370g
*   **包装尺寸 (/pcs):** 274\*175\*60 mm
*   **包装重量 (/pcs):** 675g  
    
    * * *
    

**框图**
=================

![SenseCAP M1 框图](https://www.sensecapmx.com/wp-content/uploads/2022/06/block-diagram.webp)

* * *

**系统结构**
====================

![SenseCAP M1 系统结构](https://www.sensecapmx.com/wp-content/uploads/2022/06/system-structure.webp)

* * *

**LED 状态**
==============

![SenseCAP M1 LED 状态](https://www.sensecapmx.com/wp-content/uploads/2022/06/LED-status.webp)

* * *

**设备信息**
====================

![SenseCAP M1 设备信息](https://www.sensecapmx.com/wp-content/uploads/2022/06/unit-info.webp)

底部的两个标签显示了设备的重要信息，包括：

*   型号
*   S/N
*   WiFi MAC
*   ETH MAC
*   CPU ID

这些信息在注册 **SenseCAP Dashboard** 时需要提供。

* * *

**数据表**
=============

<table style={{width: '45.6785%'}} border={0} cellSpacing={0} cellPadding={0}><tbody><tr><td style={{width: '28.2523%'}} valign="top">处理器</td><td style={{width: '71.4849%'}} valign="top">Raspberry Pi 4 (Broadcom BCM2711, 四核 Cortex-A72 (ARM v8) 64 位 SoC @ 1.5GHz)</td></tr><tr><td style={{width: '28.2523%'}} valign="top">RAM</td><td style={{width: '71.4849%'}} valign="top">2GB / 4GB / 8GB</td></tr><tr><td style={{width: '28.2523%'}} valign="top">存储</td><td style={{width: '71.4849%'}} valign="top">64GB MicroSD 卡</td></tr><tr><td style={{width: '28.2523%'}} valign="top">频率</td><td style={{width: '71.4849%'}} valign="top">EU868 版本: 863MHz ~ 870MHz<br />AS923 版本: 902MHz ~ 928MHz<br />US915 版本: 902MHz ~ 928MHz</td></tr><tr><td style={{width: '28.2523%'}} rowSpan={2} valign="top">灵敏度</td><td style={{width: '71.4849%'}} valign="top">-125dBm @125KHz/SF7</td></tr><tr><td style={{width: '71.4849%'}} valign="top">-139dBm @125KHz/SF12</td></tr><tr><td style={{width: '28.2523%'}} valign="top">发射功率</td><td style={{width: '71.4849%'}} valign="top">最高 26 dBm</td></tr><tr><td style={{width: '28.2523%'}} valign="top">天线增益</td><td style={{width: '71.4849%'}} valign="top"><p>US915: 2.6 dBi</p><p>EU868: 2.8 dBi</p></td></tr><tr><td style={{width: '28.2523%'}} valign="top">天线阻抗</td><td style={{width: '71.4849%'}} valign="top">50 欧姆</td></tr><tr><td style={{width: '28.2523%'}} valign="top">天线辐射模式</td><td style={{width: '71.4849%'}} valign="top">全向</td></tr><tr><td style={{width: '28.2523%'}} valign="top">Wi-Fi</td><td style={{width: '71.4849%'}} valign="top">2.4 GHz 和 5.0 GHz IEEE 802.11ac 无线</td></tr><tr><td style={{width: '28.2523%'}} valign="top">蓝牙</td><td style={{width: '71.4849%'}} valign="top">蓝牙 5.0, BLE</td></tr><tr><td style={{width: '28.2523%'}} valign="top">LoRaWAN</td><td style={{width: '71.4849%'}} valign="top">支持 Class A, C</td></tr><tr><td style={{width: '28.2523%'}} valign="top">输入电压</td><td style={{width: '71.4849%'}} valign="top">DC 5V - 3A</td></tr><tr><td style={{width: '28.2523%'}} valign="top">接口</td><td style={{width: '71.4849%'}} valign="top"><p>USB Type-C (电源接口) * 1</p><p>以太网 RJ45 * 1</p><p>RP-SMA 母头天线接口 * 1</p></td></tr><tr><td style={{width: '28.2523%'}} valign="top">工作温度</td><td style={{width: '71.4849%'}} valign="top">0°C 至 50°C</td></tr><tr><td style={{width: '28.2523%'}} valign="top">相对湿度</td><td style={{width: '71.4849%'}} valign="top">0% - 90% (非冷凝)</td></tr><tr><td style={{width: '28.2523%'}} valign="top">散热</td><td style={{width: '71.4849%'}} valign="top">铝制外壳、散热片和散热风扇</td></tr><tr><td style={{width: '28.2523%'}} valign="top">IP 等级</td><td style={{width: '71.4849%'}} valign="top">IP20</td></tr><tr><td style={{width: '28.2523%'}} valign="top">认证</td><td style={{width: '71.4849%'}} valign="top">FCC / CE / RCM / ROHS / UKCA...</td></tr></tbody></table>