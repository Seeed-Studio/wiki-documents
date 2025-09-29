---
description: reServer Industrial 入门指南
title: reServer Industrial 入门指南
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reServer_Industrial_Getting_Started
last_update:
  date: 09/22/2023
  author: Lakshantha
---

# reServer Industrial 入门指南

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reServer-Industrial/1.png"/></div>

reServer Industrial 系列提供无风扇、紧凑型、支持 AI 的 NVR（网络视频录像机）服务器，包括 NVIDIA Jetson™ Orin Nano/Orin NX 模块，AI 性能范围从 20 TOPS 到 100 TOPS。reServer Industrial 预装了 Jetpack 5.1.1，简化了开发过程，非常适合构建具有强大 AI 功能的 VMS（视频管理系统），为智慧城市、安防、工业自动化、智能工厂等行业带来数字化转型。

reServer Industrial 采用被动散热器和无风扇设计，非常适合在苛刻环境中使用。被动散热器无需风扇即可实现高效散热，降低了因灰尘或其他污染物导致组件故障的风险。无风扇设计还降低了噪音水平和功耗，使其适合在对噪音敏感的环境中使用，并最大限度地降低能源成本。

reServer Industrial 具有 5 个 RJ45 千兆以太网端口，其中 4 个是 PoE PSE 端口，用于通过以太网为 IP 摄像头等设备供电。这消除了对单独电源的需求，使在没有现成电源插座的区域部署网络设备变得更加容易。其余的千兆以太网端口用于连接到网络交换机或路由器，实现与网络上其他设备的通信和互联网访问。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 特性

- **无风扇紧凑型边缘 AI 服务器：** 由 NVIDIA Jetson™ Orin Nano/Orin NX 模块驱动，AI 性能范围从 20 TOPS 到 100 TOPS，在 0.7m/s 气流下工作温度范围更宽，为 -20 ~ 60°C
- **多流处理：** 5× 千兆以太网 RJ45（4 个用于 802.3af PSE），处理多个流并进行实时处理
- **可扩展存储：** 2 个驱动器托架用于 2.5" SATA HDD/SSD，加上一个 M.2 2280 插槽用于 NVMe SSD
- **工业接口：** 包括 COM 端口、DI/DO 端口、CAN 端口、USB 3.1 和可选的 TPM2.0 模块
- **混合连接：** 支持 5G/4G/LTE/LoRaWAN®（模块可选），带有 Nano SIM 卡插槽
- **认证：** FCC、CE、UKCA、ROHS、KC

## 规格参数

<table>
  <thead>
    <tr>
      <th colSpan={2}>产品名称 </th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">J4012</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html">J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J3011-p-5750.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J3011-p-5750.html">J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J3010-p-5749.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J3010-p-5749.html">J3010</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>NVIDIA Jetson 模块</td>
      <td>Orin NX 16GB</td>
      <td>Orin NX 8GB</td>
      <td>Orin Nano 8GB</td>
      <td>Orin Nano 4GB</td>
    </tr>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>114110247</td>
      <td>114110248</td>
      <td>114110249</td>
      <td>114110250</td>
    </tr>
    <tr>
      <td rowSpan={6}>处理器<br />系统</td>
      <td>AI 性能</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>1024 核 NVIDIA Ampere 架构 GPU，配备 32 个 Tensor 核心 </td>
      <td>512 核 NVIDIA Ampere 架构 GPU，配备 16 个 Tensor 核心</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 核 Arm® Cortex®-A78AE v8.2 64 位 CPU；2MB L2 + 4MB L3 </td>
      <td colSpan={3}>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>16GB 128 位 LPDDR5 102.4GB/s</td>
      <td>8GB 128 位 LPDDR5 102.4GB/s</td>
      <td>8GB 128 位 LPDDR5 68 GB/s</td>
      <td>4GB 64 位 LPDDR5 34 GB/s</td>
    </tr>
    <tr>
      <td>视频编码</td>
      <td colSpan={2}>支持的标准：H.265 (HEVC)、H.264、AV1 1×4K60 (H.265) | 3×4K30 (H.265) | 6×1080p60 (H.265) | 12×1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 由 1-2 个 CPU 核心支持 </td>
    </tr>
    <tr>
      <td>视频解码</td>
      <td colSpan={2}>支持的标准：H.265 (HEVC)、H.264、VP9、AV1 1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>支持的标准：H.265 (HEVC)、H.264、VP9、AV1 1×4K60 (H.265) | 2×4K30 (H.265) | 5×1080p60 (H.265) | 11×1080p30 (H.265)</td>
    </tr>
    <tr>
      <td rowSpan={2}>存储</td>
      <td>eMMC</td>
      <td colSpan={4}>-</td>
    </tr>
    <tr>
      <td>扩展</td>
      <td colSpan={4}>M.2 Key M (2280) PCIe Gen4.0 SSD（包含 M.2 NVMe SSD 128G）</td>
    </tr>
    <tr>
      <td rowSpan={9}>I/O</td>
      <td>以太网</td>
      <td colSpan={4}>1× LAN0 RJ45 千兆以太网 (10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4× LAN RJ45 千兆以太网 PoE(PSE 802.3 af 15 W, 10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4× USB3.1，1× USB2.0 Type C（设备模式），1× USB2.0 Type C 用于调试 UART 和 RP2040</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={4}>4×DI，4×DO，3×GND_DI，2×GND_DO，1×GND_ISO，1×CAN</td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={4}>1× DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan={2}>1×HDMI 2.1 Type A 7680x4320 @ 30 Hz</td>
      <td colSpan={2}>1×HDMI 1.4 Type A 3840x2160 @ 30 Hz</td>
    </tr>
    <tr>
      <td>SATA</td>
      <td colSpan={4}>2 个驱动器托架支持 2.5" SATA HDD/SSD（SATA III 6.0Gbps）</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={4}>1× Nano SIM 卡插槽</td>
    </tr>
    <tr>
      <td>按钮</td>
      <td colSpan={4}>复位按钮，恢复按钮</td>
    </tr>
    <tr>
      <td rowSpan={5}>扩展</td>
      <td>Mini PCIe</td>
      <td colSpan={4}>Mini PCIe 用于 LoRaWAN®/4G/系列无线（模块可选）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B (3042/3052) 支持 4G/5G（模块可选） </td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan={4}>无风扇，被动散热器；1×风扇连接器（5V PWM）</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={4}>1× TPM 2.0 连接器（模块可选）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>1× RTC 插槽（包含 CR1220），×RTC 2 针</td>
    </tr>
    <tr>
      <td rowSpan={2}>电源</td>
      <td>电源供应</td>
      <td colSpan={4}>DC 12V-36V 端子块 2 针</td>
    </tr>
    <tr>
      <td>电源适配器</td>
      <td colSpan={4}>24V /5A 电源适配器（不含电源线）</td>
    </tr>
    <tr>
      <td rowSpan={9}>机械</td>
      <td>尺寸 (W x D x H)</td>
      <td colSpan={4}>194.33mm×187mm×95.5mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={4}>2.8kg</td>
    </tr>
    <tr>
      <td>安装</td>
      <td colSpan={4}>桌面、DIN 导轨、VESA</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td colSpan={4}>-20 ~ 60°C，0.7m/s 气流</td>
    </tr>
    <tr>
      <td>工作湿度</td>
      <td colSpan={4}>95% @ 40 °C（非冷凝）</td>
    </tr>
    <tr>
      <td>存储温度</td>
      <td colSpan={4}>-40 ~ 85°C</td>
    </tr>
    <tr>
      <td>存储湿度</td>
      <td colSpan={4}>60°C@ 95% RH（非冷凝）</td>
    </tr>
    <tr>
      <td>振动</td>
      <td colSpan={4}>3 Grms @ 5 ~ 500 Hz，随机，1 小时/轴</td>
    </tr>
    <tr>
      <td>冲击</td>
      <td colSpan={4}>50G 峰值加速度（11 毫秒持续时间，eMMC，microSD 或 mSATA）</td>
    </tr>
    <tr>
      <td colSpan={2}>操作系统</td>
      <td colSpan={4}>预装 Jetpack 5.1.1（及以上）（提供带有板级支持包的 Linux 操作系统） </td>
    </tr>
    <tr>
      <td colSpan={2}>认证</td>
      <td colSpan={4}>FCC、CE、RoHS、UKCA、KC</td>
    </tr>
    <tr>
      <td colSpan={2}>保修</td>
      <td colSpan={4}>2 年</td>
    </tr>
  </tbody>
</table>

## 硬件概述

### 完整系统

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

### 载板

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

## 刷写 JetPack

:::danger
设备将预装 JetPack 5.1.1。如果没有特殊要求，您无需重新刷写系统。
:::

reServer Industrial 预装了 JetPack 5.1.1 在 128GB SSD 上，并包含必要的驱动程序。这包括 SDK 组件，如 CUDA、CUDNN 和 TensorRT。但是，如果您想将 Jetpack 重新刷写到包含的 SSD 或新的 SSD 上，可以按照以下步骤操作。目前我们只提供 JP5.1.1 的指导，我们将在未来持续更新。

:::note
如果您想在 reServer Industrial 上使用 SSD，我们只推荐您选择 Seeed 的 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 和 [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) 版本。
:::

### 前提条件

在开始使用 reServer Industrial 之前，您需要准备以下硬件

- reServer Industrial
- 提供的电源适配器和电源线（[美版](https://www.seeedstudio.com/AC-US-p-5122.html) 或 [欧版](https://www.seeedstudio.com/AC-EU-p-5121.html)）
- Ubuntu 主机 PC（原生或使用 VMware Workstation Player 的虚拟机）
- USB Type-C 数据传输线
- 外接显示器
- HDMI 线
- 键盘和鼠标

### 进入强制恢复模式

现在您需要在 reServer Industrial 板上进入恢复模式以便刷写设备。在 **DEVICE** 端口和您的 PC 之间连接一根 USB Type-C 线。使用针插入 **REC** 孔按下恢复按钮，在按住此按钮的同时，将随附的 **2 针端子块电源连接器** 连接到板上的电源连接器（确保使用 2 颗螺丝将端子固定到位），然后连接随附的电源适配器和电源线以开启板子

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
确保在按住 RECOVERY 按钮的同时给设备上电，否则它不会进入恢复模式
:::

在 Ubuntu 主机 PC 上，打开终端窗口并输入命令 **lsusb**。如果返回的内容根据您使用的 Jetson SoM 有以下输出之一，则板子处于强制恢复模式。

- 对于 Orin NX 16GB：**0955:7323 NVidia Corp**
- 对于 Orin NX 8GB：**0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB：**0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB：**0955:7623 NVidia Corp**

### 不同的刷写方法

这里我们提供 2 种不同的刷写方法。

1. 下载我们准备的完整系统镜像，包括 NVIDIA JetPack、硬件外设驱动程序并刷写到设备
2. 下载官方 NVIDIA L4T，使用随附的硬件外设驱动程序并刷写到设备

:::note
第一种方法的下载大约为 14GB，第二种方法的下载大约为 3GB
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="方法 1">

#### 下载系统镜像

- **步骤 1：** 将对应您使用的板子的系统镜像下载到您的 Ubuntu PC。

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>设备</th>
        <th>JetPack 版本</th>
        <th>L4T 版本</th>
        <th>镜像链接</th>
        <th>备用镜像链接</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan={5}>reServer Industrial J4012</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUVO61wR2NhFqcAQCeWxsBsBWgOf5p_BBTxSgPG4gfAx7g?e=v0Qhhm" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EWxVw3rZF-JPuKp0ksJZkGABWmsSxVizaJIqQBL5TDL1JA?e=4JJ2XV" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWcp7ma66_9JmfEjnMrxbfEBZk7LxwoJ2YuN-LDWEITE_g?e=NuKvDr" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV0nlnSfW3NEmcDq4l3u1M4BrzThb0-y44qa4hGXk-XfWg?e=G9ub1C" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdCn0yi0ArRKivHb3mKLrwcBmBEKXlGKLCnNkRQNzyylAw?e=QTnhQa" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbfqyoEzXBBsDycFgKH0lEB05TQNLcZidMt2Py2ZOtLdw?e=4etAqu" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVOMzCf8ulxAgCOCN9jlsUcBNR29X1dB6ILeYngqVHtwVA?e=UVc1qc" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J4011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYMjh00vng9JhG0d26iS1oIBOhHSs4oa19pPd40qrTkD7Q?e=x6zZTH" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EW5Dood6aQ9DpT6ZaXWF50QBmyAyOowCktzqZj48sQeyhw?e=VVP56J" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcbD8zqcSTpAjBmjHZTAvU8BBd80FekQMV9jMD35xU4Arw?e=DNWcyn" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZlrBLKGf5VDiczIJaPNpNoBcby3urzv85oWmS34pKtcGg?e=u7aWDL" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQJBb6D2ISBEnoUnUkqVEgkB9npGJ48jw5p2DXFIWaNJxA?e=lOJiFM" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EekoAp4j8WJHi9xe-eoJTW4BH-qx2Sttmlh7uljQdNkGXw?e=g7ZNa1" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
            <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeSEdyl9XTNEkea8ntTsqM8B8w_Hs8JV-toT71bgvR3V0A?e=9P4ZAw" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J3011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EelLW5qjyWBEgoJN_SUmKhQBTnkElasNJtxxfSgfVuXXuw?e=c2THTl" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb6xTuWGRdlDpJfgLSWS7S4BpnKYxkI9RKl6tJbU0xI4FQ?e=m84vbP" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eeg04qGBxQNOjC2Q0hvfvugBx_V05xFkYM5ThVH9ECMZ6A?e=8fDLxZ" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0cen9MPIhJpM2LBfm2edEBZtw53n2C9PwqsY2XaiSH_w?e=LWQren" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdqRMLVCzHtIkHUShgZ91xoBK367uzXyC_mTGQOzlfJhyQ?e=wgOhwj" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUnzsQBX-jxJkHZNxkYdoFsBN0coyFSY50_5LspOv8kfew?e=2baOzY" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EahC2mJQOQRBtoqG7fhuIecBSEo7w_Py8nGy_FB51QdtHg?e=W0U23d" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J3010</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETo-G6kS2atGpfsWK6uX2HIBcrwsAboHjDBB_rypE4iyTA?e=GZyglq" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
        <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EfzhFgx4V3NGu3q1MBtdqFkBdIxC0emeKmE22AHQL1GxhQ?e=KNHsQm" target="_blank" rel="noopener noreferrer">下载 2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVqo37I8yiNEjpo14kR5kYAB0ZhMNUhIN8X5pZCEjk4f6A?e=0XGC0W" target="_blank" rel="noopener noreferrer">下载 1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQgrBDUICyZCnKBI_qVeupoBYqQJ1dP7_lcxUwxUphg6Qw?e=ObUzPI" target="_blank" rel="noopener noreferrer">下载 1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EXxmIAk7sGdOnPcaZHvz7ykB36pGkNwZscpdu3ZytrfD0Q?e=ElJ2bb" target="_blank" rel="noopener noreferrer">下载 2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ET-LxPOYaNtIjoJQ4I-gKEcBxU-AmFX9R-mWPH1p-eyBdA?e=EpAopw" target="_blank" rel="noopener noreferrer">下载 1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQd4hYwgVPxEk8CtZgfU2SsBzn18zMuQOHXq45yq6gykYw?e=sAoguo" target="_blank" rel="noopener noreferrer">下载 1</a>
        </td>
        <td>
          -
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * 下载 1 和下载 2 的镜像文件是相同的。您可以选择下载速度更快的链接。
</p>

<!-- The source code for the above images can be found [here](https://github.com/Seeed-Studio/Linux_for_Tegra) -->

- **步骤 2：** 解压生成的文件

```sh
tar -xvf <file_name>.tar.gz
```

#### 刷写到 Jetson

- **步骤 1：** 导航到之前解压的文件并执行以下刷写命令

```sh
cd mfi_reserver-orin-industrial
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始向板子刷写系统镜像。如果刷写成功，您将看到以下输出

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 2：** 使用板子上的 HDMI 连接器将板子连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，板子将重启并准备就绪！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

---

</TabItem>
<TabItem value="method2" label="方法 2">

#### 下载并准备 NVIDIA L4T 和 rootfs

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

#### 下载并准备驱动程序

- **步骤 1：** 根据您使用的板子，将相应的驱动程序文件下载到您的 Ubuntu PC

<table>
  <thead>
    <tr>
      <th>Jetson 模块</th>
      <th>下载链接</th>
      <th>JetPack 版本</th>
      <th>L4T 版本</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nx-8-16-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 8GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-8-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-4-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
  </tbody>
</table>

- **步骤 2：** 将下载的外设驱动程序移动到与 **Linux_For_Tegra** 目录相同的文件夹中

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **步骤 3：** 解压下载的驱动程序 .zip 文件。这里我们额外安装了解压 .zip 文件所需的 **unzip** 包

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

这里会询问是否替换文件。输入 A 并按 ENTER 键来替换必要的文件

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### 刷写到 Jetson

- **步骤 1：** 导航到 **Linux_for_Tegra** 目录并执行以下刷写命令

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

现在将开始向板子刷写系统镜像。如果刷写成功，您将看到以下输出

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 2：** 使用板子上的 HDMI 连接器将板子连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，板子将重启，您将看到以下内容

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **步骤 3：** 在设备内打开终端窗口，执行以下命令，设备将重启并准备就绪！

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

此外，如果您想安装 SDK 组件，如 CUDA、cuDNN、TensorRT，请执行以下命令

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

---

</TabItem>
</Tabs>

<!-- Code END -->

## 硬件和接口使用

:::info
  要了解更多关于如何使用 reServer Industrial 板上所有硬件和接口的信息，您需要参考这个 [**wiki**](/cn/reserver_industrial_hardware_interface_usage)：
:::

## 资源

(change the links)

- [reServer Industrial 数据手册](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial 参考指南](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson 设备和载板比较](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D 文件](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技术支持

请随时向我们的[论坛](https://forum.seeedstudio.com/)提交问题。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
