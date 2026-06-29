---
description: reServer Industrial 入门指南
title: reServer Industrial 入门指南
keywords:
  - reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reServer_Industrial_Getting_Started
sku: 114110247,114110248,114110250,114110249
last_update:
  date: 09/22/2023
  author: Lakshantha
createdAt: '2023-06-08'
updatedAt: '2026-06-29'
url: https://wiki.seeedstudio.com/cn/reServer_Industrial_Getting_Started/
---

# reServer Industrial 入门指南

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reServer-Industrial/1.png"/></div>

reServer Industrial 系列提供无风扇、紧凑型、支持 AI 的 NVR（网络视频录像机）服务器，内置 NVIDIA Jetson™ Orin Nano/Orin NX 模组，AI 性能范围从 20 TOPS 到 100 TOPS。reServer Industrial 预装 Jetpack 5.1.1，简化开发，非常适合构建具备强大 AI 能力的 VMS（视频管理系统），为智慧城市、安全、工业自动化、智能工厂等行业带来数字化转型。

reServer Industrial 配备被动散热片并采用无风扇设计，非常适合在严苛环境中使用。被动散热片可以在无需风扇的情况下实现高效散热，降低因灰尘或其他污染物导致元器件故障的风险。无风扇设计还可降低噪音水平和功耗，适用于对噪音敏感的环境，同时最大限度地减少能源成本。

reServer Industrial 具有 5 个 RJ45 GbE 接口，其中 4 个为 PoE PSE 接口，可为 IP 摄像机等设备提供以太网供电。这消除了单独电源的需求，使在缺乏现成电源插座的区域部署网络设备更加容易。剩余的 GbE 接口用于连接网络交换机或路由器，从而实现与网络中其他设备的通信以及访问互联网。

:::note
可定制选项：Logo 品牌定制、包装和固件烧录。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>立即定制 ➜</font></span></strong></a>
</div>

## 特性

- **无风扇紧凑型边缘 AI 服务器：** 搭载 NVIDIA Jetson™ Orin Nano/Orin NX 模组，AI 性能范围从 20 TOPS 到 100 TOPS，工作温度范围更宽，在 0.7m/s 气流下可达 -20 ~ 60°C
- **多路流处理：** 5× GbE RJ45（其中 4 个为 802.3af PSE），可对多路视频流进行实时处理
- **可扩展存储：** 2 个 2.5" SATA HDD/SSD 硬盘位，外加一个用于 NVMe SSD 的 M.2 2280 插槽
- **工业接口：** 包含 COM 接口、DI/DO 接口、CAN 接口、USB 3.1，以及可选的 TPM2.0 模块
- **混合连接：** 支持 5G/4G/LTE/LoRaWAN®（模块可选），带 Nano SIM 卡槽
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
      <td colSpan={2}>NVIDIA Jetson 模组</td>
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
      <td colSpan={3}>1024 核 NVIDIA Ampere 架构 GPU，带 32 个 Tensor Core</td>
      <td>512 核 NVIDIA Ampere 架构 GPU，带 16 个 Tensor Core</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 核 Arm® Cortex®-A78AE v8.2 64 位 CPU；2MB L2 + 4MB L3</td>
      <td colSpan={3}>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU，1.5MB L2 + 4MB L3</td>
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
      <td colSpan={2}>支持标准：H.265 (HEVC)、H.264、AV1 1×4K60 (H.265) | 3×4K30 (H.265) | 6×1080p60 (H.265) | 12×1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 由 1-2 个 CPU 核心支持</td>
    </tr>
    <tr>
      <td>视频解码</td>
      <td colSpan={2}>支持标准：H.265 (HEVC)、H.264、VP9、AV1 1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>支持标准：H.265 (HEVC)、H.264、VP9、AV1 1×4K60 (H.265) | 2×4K30 (H.265) | 5×1080p60 (H.265) | 11×1080p30 (H.265)</td>
    </tr>
    <tr>
      <td rowSpan={2}>存储</td>
      <td>eMMC</td>
      <td colSpan={4}>-</td>
    </tr>
    <tr>
      <td>扩展</td>
      <td colSpan={4}>M.2 Key M (2280) PCIe Gen4.0 SSD（内含 128G M.2 NVMe SSD）</td>
    </tr>
    <tr>
      <td rowSpan={9}>I/O</td>
      <td>以太网</td>
      <td colSpan={4}>1× LAN0 RJ45 GbE (10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4× LAN RJ45 GbE PoE（PSE 802.3 af 15 W，10/100/1000Mbps）</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4× USB3.1，1× USB2.0 Type C（设备模式），1× USB2.0 Type C 用于 Debug UART 和 RP2040</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={4}>4×DI，4×DO，3×GND_DI，2×GND_DO，1×GND_ISO，1×CAN</td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={4}>1× DB9（RS232/RS422/RS485）</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan={2}>1×HDMI 2.1 Type A 7680x4320@30 Hz</td>
      <td colSpan={2}>1×HDMI 1.4 Type A 3840x2160@30 Hz</td>
    </tr>
    <tr>
      <td>SATA</td>
      <td colSpan={4}>2 个硬盘位，支持 2.5" SATA HDD/SSD（SATA III 6.0Gbps）</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={4}>1× Nano SIM 卡槽</td>
    </tr>
    <tr>
      <td>按键</td>
      <td colSpan={4}>复位按键、恢复按键</td>
    </tr>
    <tr>
      <td rowSpan={5}>扩展</td>
      <td>Mini PCIe</td>
      <td colSpan={4}>Mini PCIe，用于 LoRaWAN®/4G/系列无线（模块可选）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B (3042/3052) 支持 4G/5G（模块可选）</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan={4}>无风扇，被动散热片；1× 风扇连接器（5V PWM）</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={4}>1× TPM 2.0 接口（模块可选）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>1× RTC 插座（内含 CR1220），×RTC 2 针</td>
    </tr>
    <tr>
      <td rowSpan={2}>电源</td>
      <td>电源输入</td>
      <td colSpan={4}>DC 12V-36V 接线端子 2 针</td>
    </tr>
    <tr>
      <td>电源适配器</td>
      <td colSpan={4}>24V /5A 电源适配器（不含电源线）</td>
    </tr>
    <tr>
      <td rowSpan={9}>机械特性</td>
      <td>尺寸（宽 x 深 x 高）</td>
      <td colSpan={4}>194.33mm×187mm×95.5mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={4}>2.8kg</td>
    </tr>
    <tr>
      <td>安装方式</td>
      <td colSpan={4}>桌面、DIN 导轨、VESA</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td colSpan={4}>-20 ~ 60°C，0.7m/s</td>
    </tr>
    <tr>
      <td>工作湿度</td>
      <td colSpan={4}>95% @ 40 °C（无冷凝）</td>
    </tr>
    <tr>
      <td>存储温度</td>
      <td colSpan={4}>-40 ~ 85°C</td>
    </tr>
    <tr>
      <td>存储湿度</td>
      <td colSpan={4}>60°C@ 95% RH（无冷凝）</td>
    </tr>
    <tr>
      <td>振动</td>
      <td colSpan={4}>3 Grms @ 5 ~ 500 Hz，随机，1 小时/轴</td>
    </tr>
    <tr>
      <td>冲击</td>
      <td colSpan={4}>50G 峰值加速度（11 ms 持续时间，eMMC、microSD 或 mSATA）</td>
    </tr>
    <tr>
      <td colSpan={2}>操作系统</td>
      <td colSpan={4}>预装 Jetpack 5.1.1（及以上）（提供带有板级支持包的 Linux 操作系统）</td>
    </tr>
    <tr>
      <td colSpan={2}>认证</td>
      <td colSpan={4}>FCC、CE、RoHS、UKCA、KC</td>
    </tr>
    <tr>
      <td colSpan={2}>质保</td>
      <td colSpan={4}>2 年</td>
    </tr>
  </tbody>
</table>

## 硬件概览

### 整机系统

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

### 载板

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

## 刷写 JetPack

:::danger
设备将预装 JetPack 5.1.1。如果没有特殊需求，则无需重新刷写系统。
:::

reServer Industrial 在 128GB SSD 上预装了 JetPack 5.1.1 以及必要的驱动程序。这包括 CUDA、CUDNN 和 TensorRT 等 SDK 组件。不过，如果你想将 JetPack 重新刷写到随附的 SSD 或新的 SSD 上，可以按照以下步骤进行操作。

:::note
如果你想在 reServer Industrial 上使用 SSD，我们只建议你选择 Seeed 提供的 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 和 [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) 版本。
:::

### 前置准备

在开始使用 reServer Industrial 之前，你需要准备以下硬件

- reServer Industrial
- 随机附带的带电源线电源适配器（[US version](https://www.seeedstudio.com/AC-US-p-5122.html) 或 [EU version](https://www.seeedstudio.com/AC-EU-p-5121.html)）
- Ubuntu 主机电脑（物理机或使用 VMware Workstation Player 的虚拟机）
- USB Type-C 数据传输线
- 外接显示器
- HDMI 线
- 键盘和鼠标

:::info
我们建议你使用物理 Ubuntu 主机设备，而不是虚拟机。
请参考下表来准备主机设备。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack Version </td>
        <td class="dbon" colspan="4"> Ubuntu Version (Host Computer) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 7.2</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> 对于 JetPack 7.2，Ubuntu 24.04 仅支持用于刷机和目标端组件安装。如果你需要主机端开发组件，请使用 Ubuntu 20.04 或 22.04。</p>
:::

### 进入强制恢复模式

现在你需要让 reServer Industrial 板进入恢复模式以便刷写设备。使用 USB Type-C 线连接 **DEVICE** 端口和你的电脑。使用一根针插入 **REC** 孔按下恢复按钮，并在按住该按钮的同时，将随附的 **2-Pin Terminal block power connector** 连接到板上的电源接口（确保使用 2 颗螺丝将端子固定到位），然后连接随附的带电源线电源适配器以开启主板

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
确保在按住 RECOVERY 按钮的同时给设备上电，否则它不会进入恢复模式
:::

在 Ubuntu 主机电脑上，打开一个终端窗口并输入命令 **lsusb**。如果返回的内容中根据你使用的 Jetson SoM 出现以下任一输出，则说明主板已进入强制恢复模式。

- 对于 Orin NX 16GB：**0955:7323 NVidia Corp**
- 对于 Orin NX 8GB：**0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB：**0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB：**0955:7623 NVidia Corp**

### 不同的刷机方法

这里我们提供 2 种不同的刷机方法。

1. 下载我们已经准备好的完整系统镜像（包含 NVIDIA JetPack、硬件外设驱动），并刷写到设备
2. 下载官方 NVIDIA L4T，配合随附的硬件外设驱动刷写到设备

:::note
第一种方法的下载大小约为 14GB，第二种方法的下载大小约为 3GB
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="方法 1">

#### 下载系统镜像

- **步骤 1：** 将与你所使用主板对应的系统镜像下载到 Ubuntu 电脑。

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>Device</th>
        <th>JetPack Version</th>
        <th>L4T Version</th>
        <th>Image Link</th>
        <th>Alternative Image Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan={6}>reServer Industrial J4012</td>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQApYwrXCs7WTqZPvGNHA7YuAdAS_5YcEIXv-gnenja-Szk?e=Ub9Pvc" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDs10njGAUER7nbpqF6dI7ZAceK7lnySeHU9k7KIySj6HA?e=iMWtO8" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>7.2</td>
        <td>39.2.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB2YV-odVTxTZGy3D-1hPMEAXOH0iN6v_IAmHIUVZFymiE?e=cgN4kc" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={6}>reServer Industrial J4011</td>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDP0PJc34WXRLzV7VqXzinRAWDanqL6CzmSPfSILTojKBI?e=XYR9ee" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDoOdZqBdvLQaQ45yKI9a7zAVwIdyxIrU_Sk2xicLYy6QE?e=cepk9Z" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>7.2</td>
        <td>39.2.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDWd-W-rHfES4JiXSPXUWJ4AQbt4APS-jeWDtskFAZb6kw?e=XaI195" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={6}>reServer Industrial J3011</td>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA4HdvfMZwTQY0Aceq3uygRAVlGI13-oGlSRHRxDpxanUU?e=fCJ8ww" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0cen9MPIhJpM2LBfm2edEBZtw53n2C9PwqsY2XaiSH_w?e=LWQren" target="_blank" rel="noopener noreferrer">下载 1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdqRMLVCzHtIkHUShgZ91xoBK367uzXyC_mTGQOzlfJhyQ?e=wgOhwj" target="_blank" rel="noopener noreferrer">下载 2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUnzsQBX-jxJkHZNxkYdoFsBN0coyFSY50_5LspOv8kfew?e=2baOzY" target="_blank" rel="noopener noreferrer">下载 1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBZKkQtQMJiRYcOfA3DzOtEAV7O4ayXgVWrMKAclHYO-HQ?e=LWfgcH" target="_blank" rel="noopener noreferrer">下载 1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>7.2</td>
        <td>39.2.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB5T6WBaPY7Q5vjG9Q_u2uJAW2zWj9vOYU3GGT_R5lqSzE?e=gmOKa7" target="_blank" rel="noopener noreferrer">下载 1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={6}>reServer Industrial J3010</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETo-G6kS2atGpfsWK6uX2HIBcrwsAboHjDBB_rypE4iyTA?e=GZyglq" target="_blank" rel="noopener noreferrer">下载 1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EfzhFgx4V3NGu3q1MBtdqFkBdIxC0emeKmE22AHQL1GxhQ?e=KNHsQm" target="_blank" rel="noopener noreferrer">下载 2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQADLFrAQ2RAQb74nXNq6MlnAeaN-qPzaTk0Sg21ZqawFxA?e=KXkWZZ" target="_blank" rel="noopener noreferrer">下载 1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBUl_MHgm8YSY6OQyCuNEf-AfgUPNTd9-rd2I6pimkcraE?e=KzSPtW" target="_blank" rel="noopener noreferrer">下载 1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>7.2</td>
        <td>39.2.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA_GpwpaczHTbTaXQEsNAreAVBjoiwpi7dtiz4kiOZRlIo?e=ZKa4sL" target="_blank" rel="noopener noreferrer">下载 1</a>
        </td>
        <td>
          -
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>设备</th>
        <th>JetPack 版本</th>
        <th>SHA256</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>reServer Industrial J4012</td>
        <td>7.2</td>
        <td>fcf2eb2d0977856cc8e74aa1483397b61<br />eff588fdae00145c67a9ed7953beba7</td>
      </tr>
      <tr>
        <td>reServer Industrial J4011</td>
        <td>7.2</td>
        <td>b687dc99d86d9e9a9c071b39d3062e68<br />d8e7f542d58fcb7e8117db21b18d9c11</td>
      </tr>
      <tr>
        <td>reServer Industrial J3011</td>
        <td>7.2</td>
        <td>d805862bd75bb8d2f0970fb72c336d30<br />a69c7e3daa84dcecce83806e42b794e1</td>
      </tr>
      <tr>
        <td>reServer Industrial J3010</td>
        <td>7.2</td>
        <td>86ad9eec225bab64adccfb3d9ce5678f<br />85fb7f4881fe589df9e74334fb477acc</td>
      </tr>
    </tbody>
  </table>
</div>

:::info
要验证下载固件的完整性，可以比较 SHA256 哈希值。

在 Ubuntu 主机上运行 `sha256sum <file_name>.tar.gz`，并将输出结果与上表中的 SHA256 值进行比较。
:::

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * Download1 和 Download2 的镜像文件是相同的。你可以选择下载速度更快的链接。
</p>

<!-- The source code for the above images can be found [here](https://github.com/Seeed-Studio/Linux_for_Tegra) -->

- **步骤 2：** 解压生成的文件

```sh
tar -xvf <file_name>.tar.gz
# For JetPack 7.2 example:
# tar -xvf mfi_reserver-industrial-orin-nx-16g-7.2.0-39.2.0-2026-06-24.tar.gz
```

#### 刷写到 Jetson

- **步骤 1：** 进入之前解压的文件目录，并按如下方式执行刷写命令

```sh
cd mfi_xxxx
# For JetPack 7.2 example:
# cd mfi_reserver-industrial-orin-nx-16g-7.2.0-39.2.0
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始把系统镜像刷写到板子上。如果刷写成功，你会看到如下输出

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 2：** 使用板载 HDMI 接口将板子连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，板子会重启并准备就绪，可以开始使用了！

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

#### 下载并准备驱动

- **步骤 1：** 将与你所使用的板卡对应的驱动文件下载到 Ubuntu 电脑

<table>
  <thead>
    <tr>
      <th>Jetson 模组</th>
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

- **步骤 2：** 将下载的外设驱动移动到与 **Linux_For_Tegra** 目录相同的文件夹中

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **步骤 3：** 解压下载的驱动 .zip 文件。这里我们另外安装用于解压 .zip 文件所需的 **unzip** 软件包

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

此时会询问是否替换文件。输入 A 并按 ENTER 键以替换必要的文件

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### 刷写到 Jetson

- **步骤 1：** 进入 **Linux_for_Tegra** 目录，并按如下方式执行刷写命令

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

现在它将开始将系统镜像烧录到板卡上。如果烧录成功，你会看到如下输出

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 2：** 使用板载 HDMI 接口将板卡连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，板卡会重启，你将看到如下界面

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **步骤 3：** 在设备中打开一个终端窗口，执行以下命令，设备将重启并准备就绪！

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

此外，如果你想安装 CUDA、cuDNN、TensorRT 等 SDK 组件，请执行以下命令

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
  要进一步了解如何使用 reServer Industrial 板上的所有硬件和接口，你需要参考这个[**wiki**](/cn/reserver_industrial_hardware_interface_usage)：
:::

## 资源

(更改这些链接)

- [reServer Industrial 数据手册](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial 参考指南](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson 设备和载板对比](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D 文件](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技术支持

如有问题，欢迎在我们的[论坛](https://forum.seeedstudio.com/)中提交。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
