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

reServer Industrial 系列提供无风扇、紧凑型、支持 AI 的 NVR（网络视频记录器）服务器，包括 NVIDIA Jetson™ Orin Nano/Orin NX 模块，AI 性能范围从 20 TOPS 到 100 TOPS。reServer Industrial 预装 Jetpack 5.1.1，简化开发，非常适合构建具有强大 AI 功能的视频管理系统（VMS），为智慧城市、安全、工业自动化、智能工厂等行业带来数字化转型。

reServer Industrial 配备被动散热器和无风扇设计，非常适合在苛刻环境中使用。被动散热器无需风扇即可实现高效散热，降低因灰尘或其他污染物导致组件故障的风险。无风扇设计还降低了噪音水平和功耗，非常适合噪音敏感环境，同时减少能源成本。

reServer Industrial 配备 5 个 RJ45 GbE 端口，其中 4 个为 PoE PSE 端口，可为 IP 摄像头等设备提供以太网供电。这消除了单独电源的需求，使得在没有电源插座的区域更容易部署网络设备。剩余的 GbE 端口用于连接网络交换机或路由器，实现与网络中其他设备的通信以及访问互联网。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 特性

- **无风扇紧凑型边缘 AI 服务器：** 搭载 NVIDIA Jetson™ Orin Nano/Orin NX 模块，AI 性能范围从 20 TOPS 到 100 TOPS，支持 -20 ~ 60°C 的宽温范围，气流为 0.7m/s
- **多流处理：** 5× GbE RJ45（4 个支持 802.3af PSE），实时处理多路流
- **可扩展存储：** 2 个驱动器托架支持 2.5" SATA HDD/SSD，另有 M.2 2280 插槽支持 NVMe SSD
- **工业接口：** 包括 COM 端口、DI/DO 端口、CAN 端口、USB 3.1，以及可选的 TPM2.0 模块
- **混合连接：** 支持 5G/4G/LTE/LoRaWAN®（模块可选），配备 Nano SIM 卡插槽
- **认证：** FCC、CE、UKCA、ROHS、KC

## 规格

<table>
  <thead>
    <tr>
      <th colSpan={2}>产品名称</th>
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
      <td colSpan={3}>1024 核 NVIDIA Ampere 架构 GPU，配备 32 个 Tensor 核心</td>
      <td>512 核 NVIDIA Ampere 架构 GPU，配备 16 个 Tensor 核心</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 核 Arm® Cortex®-A78AE v8.2 64 位 CPU；2MB L2 + 4MB L3</td>
      <td colSpan={3}>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU；1.5MB L2 + 4MB L3</td>
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
      <td colSpan={2}>1080p30 支持 1-2 个 CPU 核心</td>
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
      <td colSpan={4}>M.2 Key M (2280) PCIe Gen4.0 SSD（包含 M.2 NVMe SSD 128G）</td>
    </tr>
    <tr>
      <td rowSpan={9}>I/O</td>
      <td>以太网</td>
      <td colSpan={4}>1× LAN0 RJ45 GbE (10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4× LAN RJ45 GbE PoE(PSE 802.3 af 15 W, 10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4× USB3.1, 1× USB2.0 Type C（设备模式）, 1× USB2.0 Type C 用于调试 UART &amp; RP2040</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={4}>4×DI, 4×DO, 3×GND_DI, 2×GND_DO, 1×GND_ISO, 1×CAN</td>
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
      <td colSpan={4}>重置按钮，恢复按钮</td>
    </tr>
    <tr>
      <td rowSpan={5}>扩展</td>
      <td>Mini PCIe</td>
      <td colSpan={4}>Mini PCIe 用于 LoRaWAN®/4G/系列无线（模块可选）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B (3042/3052) 支持 4G/5G（模块可选）</td>
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
      <td colSpan={4}>1× RTC 插座（包含 CR1220），×RTC 2 针</td>
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
      <td>尺寸（宽 x 深 x 高）</td>
      <td colSpan={4}>194.33mm×187mm×95.5mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={4}>2.8kg</td>
    </tr>
    <tr>
      <td>安装</td>
      <td colSpan={4}>桌面，DIN 导轨，VESA</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td colSpan={4}>-20 ~ 60°C，气流为 0.7m/s</td>
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
      <td colSpan={4}>60°C @ 95% RH（非冷凝）</td>
    </tr>
    <tr>
      <td>振动</td>
      <td colSpan={4}>3 Grms @ 5 ~ 500 Hz，随机，1 小时/轴</td>
    </tr>
    <tr>
      <td>冲击</td>
      <td colSpan={4}>50G 峰值加速度（11 毫秒持续时间，eMMC、microSD 或 mSATA）</td>
    </tr>
    <tr>
      <td colSpan={2}>操作系统</td>
      <td colSpan={4}>预装 Jetpack 5.1.1（及以上）（提供带板支持包的 Linux 操作系统）</td>
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

## 硬件概览

### 完整系统

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

### 载板

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

## 刷写 JetPack

:::danger
设备将预装 JetPack 5.1.1。如果没有特殊需求，您无需重新刷写系统。
:::

reServer Industrial 预装了 JetPack 5.1.1，存储在一个 128GB 的 SSD 上，并附带必要的驱动程序。这包括 SDK 组件如 CUDA、CUDNN 和 TensorRT。然而，如果您想将 JetPack 刷写到预装的 SSD 或新的 SSD 上，可以按照以下步骤操作。目前我们仅提供 JP5.1.1 的指导，未来会持续更新。

:::note
如果您想在 reServer Industrial 上使用 SSD，我们仅推荐选择 Seeed 提供的 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 和 [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) 版本。
:::

### 准备工作

在开始使用 reServer Industrial 之前，您需要准备以下硬件：

- reServer Industrial
- 提供的电源适配器及电源线（[美版](https://www.seeedstudio.com/AC-US-p-5122.html) 或 [欧版](https://www.seeedstudio.com/AC-EU-p-5121.html)）
- Ubuntu 主机 PC（原生或使用 VMware Workstation Player 的虚拟机）
- USB Type-C 数据传输线
- 外接显示器
- HDMI 线
- 键盘和鼠标

### 进入强制恢复模式

现在，您需要让 reServer Industrial 板进入恢复模式以刷写设备。使用 USB Type-C 数据线连接 **DEVICE** 端口和您的 PC。用针插入 **REC** 孔按下恢复按钮，同时连接附带的 **2 针端子块电源连接器**到板上的电源接口（确保使用两颗螺丝固定端子），并连接附带的电源适配器和电源线以启动设备。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
确保在按住恢复按钮的同时启动设备，否则无法进入恢复模式。
:::

在 Ubuntu 主机 PC 上，打开终端窗口并输入命令 **lsusb**。如果返回的内容中包含以下输出之一（根据您使用的 Jetson SoM），则说明板已进入强制恢复模式。

- 对于 Orin NX 16GB: **0955:7323 NVidia Corp**
- 对于 Orin NX 8GB: **0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB: **0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB: **0955:7623 NVidia Corp**

### 不同的刷写方法

我们提供两种不同的刷写方法。

1. 下载我们准备的完整系统镜像，其中包括 NVIDIA JetPack、硬件外设驱动程序，并刷写到设备。
2. 下载官方 NVIDIA L4T，使用附带的硬件外设驱动程序并刷写到设备。

:::note
第一种方法的下载大小约为 14GB，第二种方法的下载大小约为 3GB。
:::

<!-- 代码 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="方法 1">

#### 下载系统镜像

- **步骤 1:** 根据您使用的板卡，下载对应的系统镜像到您的 Ubuntu PC。

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
        <td rowSpan={4}>reServer Industrial J4012</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWoMiCYaghJGsmgX8ki3lrwB67RFYkI9zvBW6t86w_7chg?e=afbbOs" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EWxVw3rZF-JPuKp0ksJZkGABWmsSxVizaJIqQBL5TDL1JA?e=4JJ2XV" target="_blank" rel="noopener noreferrer">下载2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWcp7ma66_9JmfEjnMrxbfEBZk7LxwoJ2YuN-LDWEITE_g?e=NuKvDr" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV0nlnSfW3NEmcDq4l3u1M4BrzThb0-y44qa4hGXk-XfWg?e=G9ub1C" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdCn0yi0ArRKivHb3mKLrwcBmBEKXlGKLCnNkRQNzyylAw?e=QTnhQa" target="_blank" rel="noopener noreferrer">下载2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ES_8t6K7-0tJmkfcrTs0rgoBGvrBiq4Tr6X6ZTU3SjXxjQ?e=vuiqGS" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={4}>reServer Industrial J4011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY9t48fwnJVLraZyoVzYe2gB5RMb9FMXqKxVT9_WBFnnzQ?e=rcBfY5" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EW5Dood6aQ9DpT6ZaXWF50QBmyAyOowCktzqZj48sQeyhw?e=VVP56J" target="_blank" rel="noopener noreferrer">下载2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcbD8zqcSTpAjBmjHZTAvU8BBd80FekQMV9jMD35xU4Arw?e=DNWcyn" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZlrBLKGf5VDiczIJaPNpNoBcby3urzv85oWmS34pKtcGg?e=u7aWDL" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQJBb6D2ISBEnoUnUkqVEgkB9npGJ48jw5p2DXFIWaNJxA?e=lOJiFM" target="_blank" rel="noopener noreferrer">下载2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERd_GV-EQGtIiqm90pnmAisBKIuOgZnCISP783um9r7OJw?e=nYL7oz" target="_blank" rel="noopener noreferrer">下载1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZDbctjmL2tAtpW_gaqhylABEE5UT2chlro5vi20sFKygA?e=yE5NfC" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb6xTuWGRdlDpJfgLSWS7S4BpnKYxkI9RKl6tJbU0xI4FQ?e=m84vbP" target="_blank" rel="noopener noreferrer">下载2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eeg04qGBxQNOjC2Q0hvfvugBx_V05xFkYM5ThVH9ECMZ6A?e=8fDLxZ" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0cen9MPIhJpM2LBfm2edEBZtw53n2C9PwqsY2XaiSH_w?e=LWQren" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdqRMLVCzHtIkHUShgZ91xoBK367uzXyC_mTGQOzlfJhyQ?e=wgOhwj" target="_blank" rel="noopener noreferrer">下载2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXv18M5S-gNGvFVyCgUIfOMBveES_RLF25qpEP1uMLGrBA?e=d7b2j7" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ESNHrERy6DJCotXjFJT_5yYBbRzp7AHYujEsbcT4B4ZNCg?e=d1BePF" target="_blank" rel="noopener noreferrer">下载1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeCYmkCdhqRGrh2idfcueV0B4btw0JAzCt8i7ePWZwSeng?e=XH9HDx" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EfzhFgx4V3NGu3q1MBtdqFkBdIxC0emeKmE22AHQL1GxhQ?e=KNHsQm" target="_blank" rel="noopener noreferrer">下载2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVqo37I8yiNEjpo14kR5kYAB0ZhMNUhIN8X5pZCEjk4f6A?e=0XGC0W" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQgrBDUICyZCnKBI_qVeupoBYqQJ1dP7_lcxUwxUphg6Qw?e=ObUzPI" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EXxmIAk7sGdOnPcaZHvz7ykB36pGkNwZscpdu3ZytrfD0Q?e=ElJ2bb" target="_blank" rel="noopener noreferrer">下载2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYKvmiXvDrZKnyrWpGDKBXMByXVFfgOkbl0NyF3LY8bEWQ?e=ydwLF5" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaZE000_qQJMvjwjHeCNLxsBh7Uip9Gb5taPt5YqH5TMhg?e=Pfup2v" target="_blank" rel="noopener noreferrer">下载1</a>
        </td>
        <td>
          -
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * 来自 Download1 和 Download2 的图像文件是相同的。您可以选择下载速度更快的链接。
</p>

<!-- 上述图像的源代码可以在 [这里](https://github.com/Seeed-Studio/Linux_for_Tegra) 找到 -->

- **步骤 2:** 解压生成的文件

```sh
tar -xvf <file_name>.tar.gz
```

#### 刷写到 Jetson

- **步骤 1:** 进入之前解压的文件目录并执行以下刷写命令

```sh
cd mfi_reserver-orin-industrial
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始将系统镜像刷写到开发板。如果刷写成功，您将看到以下输出：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 2:** 使用开发板上的 HDMI 接口将开发板连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，开发板将重新启动并准备好使用！

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

- **步骤 1:** 将与您使用的开发板对应的驱动文件下载到 Ubuntu PC

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

- **步骤 2:** 将下载的外设驱动程序移动到与 **Linux_For_Tegra** 目录相同的文件夹中

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **步骤 3:** 解压下载的驱动程序 .zip 文件。这里我们额外安装 **unzip** 包以解压 .zip 文件

```sh
sudo apt install unzip
sudo unzip xxxx.zip # 将 xxxx 替换为驱动文件名
```

此时会询问是否替换文件。输入 A 并按 ENTER 键以替换必要的文件

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### 刷写到 Jetson

- **步骤 1:** 进入 **Linux_for_Tegra** 目录并执行以下刷写命令

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

现在将开始将系统镜像刷写到开发板。如果刷写成功，您将看到以下输出：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 2:** 使用开发板上的 HDMI 接口将开发板连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，开发板将重新启动，您将看到以下内容：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **步骤 3:** 在设备内打开终端窗口，执行以下命令，设备将重新启动并准备好使用！

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

此外，如果您想安装 SDK 组件，例如 CUDA、cuDNN、TensorRT，请执行以下命令：

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

---

</TabItem>
</Tabs>

<!-- 代码结束 -->

## 硬件和接口使用

要了解如何使用 reServer Industrial 板上的所有硬件和接口，我们建议您参考以下 wiki 部分：

### 拆解 reServer Industrial

首先，最好拆解外壳以访问所有接口。请参考[此文档](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Assembly-Guide.pdf)了解更多信息。

### 千兆以太网连接器

reServer Industrial 上有 5 个以太网端口，支持 10/100/1000Mbps 规格，其中 4 个端口支持 PSE 802.3 af 15 W，您可以直接将 PoE 摄像头连接到这些端口（LAN1-LAN4）。这些端口通过 PCIe 到以太网模块（LAN7430-I/Y9X）连接。然而，最左侧的以太网端口（LAN0）仅用于连接路由器以访问互联网。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

每个以太网端口上都有两个 LED（绿色和黄色），指示以下状态：

- 绿色 LED：仅在连接到 1000M 网络时亮起
- 黄色 LED：显示网络活动状态

#### 使用方法

- 在连接 PoE 摄像头之前，您需要为 4 个以太网端口启用 PoE 功能。启用方法如下：

  <Tabs>
  <TabItem value="Jetpack 5.1.x" label="Jetpack 5.1.x">

    ```sh
    sudo -i
    cd /sys/class/gpio
    echo 315 > export 
    cd gpio315
    echo "out" > direction
    echo 1 > value
    ```

  </TabItem>
  <TabItem value="Jetpack 6" label="Jetpack 6">

    ```sh
    sudo apt update
    sudo apt install gpiod
    gpioset gpiochip2 15=1
    ```
    
  </TabItem>
  </Tabs>

### 将物理网络 IP 绑定到 eth 编号
  **接口 eth0 到 eth3 被指定用于 PoE，其中 eth3 特别称为 PoE4。**

  如果需要为每个 PoE 接口配置不同的 IP 地址，请按照以下步骤操作：

  **步骤 1**：将 PoE 连接到 reServer Industrial 设备。例如，要配置 eth3，请将 eth3 的名称设置为 POE3。

  ```bash
  sudo nmcli connection add type ethernet ifname eth4 con-name POE3
  ```

  **步骤 2**：将 POE3 的 IP 地址配置为 **192.168.6.6**。IP 地址可以根据实际使用情况进行自定义。
  ```bash
  sudo nmcli connection modify POE3 ipv4.addresses 192.168.6.6/24
  ```

  **步骤 3**：将 POE3 的 IPv4 地址设置为手动配置。

  ```bash
  sudo nmcli connection modify POE3 ipv4.method manual
  ```

  **步骤 4**：启动连接
  ```bash
  sudo nmcli connection up POE3
  ```

### SATA 连接器

reServer Industrial 支持 2 个 SATA 2.5" HDD/SSD，并配备 SATA 数据和电源连接器。您可以按以下方式连接 HDD/SSD：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/23.jpg"/></div>

#### 使用方法

系统启动后，您可以通过以下命令验证连接的 SATA 驱动器：

```sh
lsblk
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/28.png"/></div>

### RTC

reServer Industrial 配备了两种不同方式连接 RTC 电池。

#### 连接概述

- 方法 1：

将 **3V CR1220 纽扣电池**连接到板上的 RTC 插座，如下图所示。确保电池的**正极 (+)**朝上。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/6.jpg"/></div>

- 方法 2：

将带有 JST 接头的 **3V CR2302 纽扣电池**连接到板上的 2 针 1.25mm JST 插座，如下图所示。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/7.jpg"/></div>

#### 使用方法

- **步骤 1：** 按上述方法连接 RTC 电池

- **步骤 2：** 打开 reServer Industrial

- **步骤 3：** 在 Ubuntu 桌面上，点击右上角的下拉菜单，导航到 `Settings > Date & Time`，通过以太网线连接到网络并选择 **Automatic Date & Time** 以自动获取日期/时间。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
如果您未通过以太网连接到互联网，可以在此手动设置日期/时间。
:::

- **步骤 4：** 打开终端窗口，执行以下命令检查硬件时钟时间：

```sh
sudo hwclock
```

您将看到类似以下的输出，但这不是正确的日期/时间：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **步骤 5：** 通过以下命令将硬件时钟时间更改为当前系统时钟时间：

```sh
sudo hwclock --systohc
```

- **步骤 6：** 移除任何连接的以太网线，以确保不会从互联网获取时间，并重新启动设备：

```sh
sudo reboot
```

- **步骤 7：** 检查硬件时钟时间，验证即使设备断电，日期/时间仍保持不变。

现在我们将创建一个脚本，在每次启动时始终从硬件时钟同步系统时钟。

- **步骤 8：** 使用您喜欢的文本编辑器创建一个新的 shell 脚本。这里我们使用 **vi** 文本编辑器：

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **步骤 9：** 按 **i** 进入插入模式，将以下内容复制并粘贴到文件中：

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **步骤 10：** 使脚本可执行：

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **步骤 11：** 创建一个 systemd 文件：

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **步骤 12：** 在文件中添加以下内容：

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **步骤 13：** 重新加载 systemctl 守护进程：

```sh
sudo systemctl daemon-reload 
```

- **步骤 14：** 启用新创建的服务以在启动时运行，并启动服务：

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **步骤 15：** 验证脚本是否作为 systemd 服务正常运行：

```sh
sudo systemctl status hwtosys.service
```

- **步骤 16：** 重启主板，您会发现系统时钟现在与硬件时钟同步。

## M.2 Key M

开箱即用，reServer Industrial 配备了一个连接到 M.2 Key M 插槽的 128GB SSD，并预装了 JetPack 系统。

#### 连接概述

如果您想移除预装的 SSD 并安装新的 SSD，可以按照以下步骤操作。我们仅推荐使用 Seeed 的 SSD，包括 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 和 [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) 存储容量，因为我们仅测试过这些 SSD。此外，该接口支持 PCIe Gen4.0 SSD。

- **步骤 1：** 拆下预装 SSD 的螺丝

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/8.jpg"/></div>

- **步骤 2：** 将 SSD 从 SSD 连接器中滑出以移除

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/9.jpg"/></div>

- **步骤 3：** 插入新的 SSD 并重新拧紧螺丝

#### 使用方法

我们将解释如何对连接的 SSD 进行简单的基准测试。

- **步骤 1：** 执行以下命令检查写入速度

```sh
sudo dd if=/dev/zero of=/home/$USER/test bs=1M count=512 conv=fdatasync
```

- **步骤 2：** 执行以下命令检查读取速度。在执行写入速度测试后再执行此命令。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/$USER/test of=/dev/null bs=1M count=512
```

### mini PCIe

reServer Industrial 配备了一个 mini PCIe 连接器，支持 4G 和 LoRa 模块。然而，您一次只能连接一个 4G 模块或一个 LoRa 模块。一些 4G 模块还嵌入了 GPS 功能，我们也会对此进行讨论。

#### 4G 模块连接概述

目前该主板支持 EC25EUXGA 和 EC20CEHCLG 模块。

- **步骤 1：** 如果主板已通电，请先关闭电源。

- **步骤 2：** 移除预装的支架。该支架仅在使用 M.2 Key B 接口时需要。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/10.jpg"/></div>

- **步骤 3：** 将 4G 模块插入 mini PCIe 插槽，使用预装的螺丝将其固定在两个孔上。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/11.jpg"/></div>

- **步骤 4：** 将天线连接到标记为 **MAIN** 的天线连接器。这里需要使用 IPEX 连接器。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/12.jpg"/></div>

- **步骤 5：** 将支持 4G 的 nano SIM 卡插入主板上的 SIM 卡插槽，确保 SIM 卡的金色表面朝上。将卡完全插入，直到触碰到内部弹簧并锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
如果您想移除 SIM 卡，请按下卡片以触碰内部弹簧，这样 SIM 卡会从插槽弹出。
:::

- **步骤 6：** 在 **J8（控制和 UART）头** 的 **SIM_MUX_SEL** 和 **GND** 引脚之间添加一个跳线。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/14.jpg"/></div>

- **步骤 7：** 打开主板电源。

#### 4G 模块使用 - 测试拨号

使用 EC25 模块时，模块会自动启动并准备使用。然而，使用 EC20 模块时，您需要重置模块才能正常工作。

- **步骤 1：** 如果您使用的是 EC25 模块，可以跳过此步骤。如果您使用的是 EC20 模块，请输入以下命令访问负责重置 4G 模块的 GPIO309 引脚：

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

对于 EC25 模块，当主板启动时，LED2 会亮起绿色。对于 EC20 模块，按照上述步骤重置模块后，LED2 会亮起绿色。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **步骤 2：** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3：** 进入连接的 4G 模块的串行控制台，以便输入 AT 命令并与 4G 模块交互。

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4：** 按 **Ctrl+A**，然后按 **E** 打开本地回显。

- **步骤 5：** 输入命令 **"AT"** 并按回车键。如果您看到响应为 "OK"，则 4G 模块工作正常。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **步骤 6：** 输入命令 **"ATI"** 检查模块信息。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **步骤 7：** 为测试模块，输入以下命令拨打另一个电话号码：

```sh
ATD<phone_number>;
```

您将看到以下输出：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

如果输入的电话号码可以接听电话，则模块工作正常。

#### 4G 模块使用 - 连接到互联网

##### EC25 模块

如果您使用的是 EC25 模块，请按照以下步骤操作：

- **步骤 1：** 按照上述步骤打开 4G 模块的串行控制台（参见 4G 模块使用 - 测试拨号部分），执行以下命令连接到互联网。将 **YOUR_APN** 替换为您的网络提供商的 APN。

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

在成功连接后，它应该输出 **OK**，如上图所示。

- **步骤 2：** 通过执行以下命令重启 4G 模块

```sh
AT+CFUN=1,1
```

现在，您将在串口终端上失去与 4G 模块的连接。

- **步骤 3：** 按下 **CTRL + A** 然后 **Q** 关闭 **minicom**。

- **步骤 4：** 输入 **ifconfig**，您将在 **usb0** 接口上看到一个 IP 地址。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **步骤 5：** 您可以尝试通过以下命令 ping 一个网站，以检查是否有互联网连接：

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

##### EC20 模块

如果您使用的是 EC20 模块，请按照以下步骤操作：

- **步骤 1：** 如果您已经按照前一部分（4G 模块使用 - 测试拨号部分）中所述重置了 EC20 模块，可以跳过此步骤。如果尚未完成，请立即执行。

- **步骤 2：** 进入 4G 模块的串口控制台，并输入以下命令将其设置为 ECM 模式：

```sh
AT+QCFG="usbnet",1
```

- **步骤 3：** 重置 4G 模块。

- **步骤 4：** 在 4G 模块控制台中执行以下命令以连接到互联网。将 **YOUR_APN** 替换为您的网络提供商的 APN。

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **步骤 6：** 输入 **ifconfig**，您将在 **usb1** 接口上看到一个 IP 地址。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **步骤 7：** 您可以尝试通过以下命令 ping 一个 URL，以检查是否有互联网连接：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

#### 4G 模块使用 - 连接到 GPS

某些 4G 模块内嵌了 GPS 模块。EC25EUXGA 和 EC20CEHCLG 模块都包含 4G 模块。

- **步骤 1：** 通过执行以下命令重启 GPS 模块：

```sh
echo -e "AT+QGPS=1\r\n" > /dev/ttyUSB2
echo -e "AT+QGPS=0\r\n" > /dev/ttyUSB2
```

- **步骤 2：** 通过执行以下命令获取 GPS 数据：

```sh
sudo cat /dev/ttyUSB1
```

您将看到如下输出：

```sh
seeed@seeed-x:~$ sudo cat /dev/ttyUSB1
[sudo] password for seeed:
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
```

#### LoRa 模块连接概述

目前该板支持 WM1302 SPI 模块。您可以选择 [美国版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) 或 [欧洲版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)，它们均可在我们的 Bazaar 上购买。

- **步骤 1：** 如果板子已经开启，请关闭电源。

- **步骤 2：** 将 LoRa 模块插入 mini PCIe 插槽，并使用预装的螺丝将其固定在两个孔上。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/16.jpg"/></div>

- **步骤 3：** 将天线连接到天线接口。这里需要使用 IPEX 接口。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/17.jpg"/></div>

:::note
确保 **SIM_MUX_SEL** 和 **GND** 引脚之间的 **J8（控制和 UART）头**上没有跳线。仅在使用 4G 模块时需要此跳线。
:::

- **步骤 4：** 打开板子的电源。

#### LoRa 模块使用 - 测试 LoRa RF

当 LoRa 模块连接后，您将看到模块上的绿色和蓝色 LED 灯亮起。

- **步骤 1：** 输入以下命令以检查系统是否检测到 LoRa 模块：

```sh
i2cdetect -r -y 7
```

如果看到以下输出，则表示系统已检测到模块：

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **步骤 2：** 输入以下命令以编译和构建 LoRa 信号发送工具：

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

如果看到以下结果，并且 LoRa 模块上的 LED 变为红色，则表示模块成功发送 RF 信号：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

要停止发送，您可以按下键盘上的 **CTRL + C**。

#### LoRa 模块使用 - 连接到 TTN

现在我们将连接到 TTN（The Things Network），并将 reServer Industrial 用作 TTN LoRaWAN 网关。

- **步骤 1：** 输入以下命令以准备数据包转发器：

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **步骤 2：** 根据您使用的 LoRa 模块运行以下命令。这里我们测试了 SPI US915 版本：

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

然而，不同模块的命令如下：

```sh
# USB 915
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

运行上述命令后，您将看到以下输出，最后一行显示 **concentrator EUI** 信息。请保存此信息，因为稍后在设置网关与 TTN 时会用到。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **步骤 3：** 访问 [此 URL](https://console.cloud.thethings.network) 进入 TTN 控制台，并选择您喜欢的区域。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **步骤 4：** 如果您已有账户，请登录；如果没有账户，请注册一个新账户。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **步骤 5：** 点击 **Go to gateways**（前往网关）。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **步骤 6：** 点击 **+ Register gateway**（注册网关）。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **步骤 7：** 在 **Gateway EUI**（网关 EUI）部分输入之前获取的 **Concentrator EUI**（集中器 EUI），然后点击 **Confirm**（确认）。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **步骤 8：** 根据您使用的 LoRa 模块输入 **Frequency plan**（频率计划）。这里我们使用的是 US915 版本的模块，因此选择了 **United States 902-928 MHz, FSB 2 (used by TTN)**。然后点击 **Register gateway**（注册网关）。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
**Gateway ID**（网关 ID）已为您自动填写。不过，您可以根据需要更改它。**Gateway name**（网关名称）不是必填项，但您也可以根据需要填写。
:::

- **步骤 9：** 在网关主页上记录 **Gateway Server Address**（网关服务器地址）。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **步骤 9：** 在 reTerminal Industrial 上，编辑我们与 **lora_pkt_fwd** 命令一起使用的 **global_conf_json** 文件。在这里，您需要更改以下选项：

  - gateway_ID: 来自设备的 Concentrator EUI
  - server_address: 来自 TTN 的网关服务器地址
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **步骤 10：** 重新运行数据包转发器。

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

如果您看到以下输出，则表示设备已成功连接到 TTN。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

### M.2 Key B

reServer Industrial 配备了一个支持 4G 和 5G 模块的 M.2 Key B 接口。目前我们已测试 **SIM8202G-M2 5G 模块**。

#### 5G 模块连接概览

- **步骤 1：** 如果设备已开启，请关闭电源。

- **步骤 2：** 确保支架已就位，然后移除支架上的顶部螺丝。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/18.jpg"/></div>

- **步骤 2：** 将 5G 模块插入 M.2 Key B 插槽，并用支架螺丝固定模块（确保支架到位）。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/19.jpg"/></div>

- **步骤 3：** 将 4 根天线连接到模块上的天线接口。这里需要使用 IPEX 4 接头。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/20.jpg"/></div>

- **步骤 4：** 将支持 5G 的 nano SIM 卡插入板上的 SIM 卡槽，确保 SIM 卡的金属面朝下。将卡完全插入，直到弹簧锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
如果您想移除 SIM 卡，请按下卡片以触发内部弹簧，使 SIM 卡弹出。
:::

- **步骤 5：** 打开设备电源。

#### 5G 模块使用 - 测试拨号

使用 SIM8202G-M2 5G 模块时，模块不会自动启动。因此，我们首先需要切换一些 GPIO 以启动模块。

- **步骤 1：** 输入以下命令以启动 5G 模块：

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 0 > value

cd..
echo 341 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 330 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

执行上述命令后，LED2 将亮起为绿色。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **步骤 2：** 安装 minicom。

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3：** 进入连接的 5G 模块的串行控制台，以便输入 AT 命令并与 5G 模块交互。

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4：** 输入命令 **"AT"** 并按回车。如果您看到响应 "OK"，则表示 5G 模块工作正常。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **步骤 6：** 输入命令 **"ATI"** 以检查模块信息。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **步骤 7：** 测试模块时，输入以下命令拨打另一个电话号码：

```sh
ATD<phone_number>;
```

您将看到以下输出：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

#### 5G 模块使用 - 连接到互联网

即将推出。

### DI/ DO

reServer Industrial 支持 4 个数字输入和 4 个数字输出通道，所有通道均为光隔离，以有效保护主板免受电压尖峰或其他电气干扰。此外，同一接口上还提供了一个 CAN 接口，我们将在本 Wiki 的后续部分讨论。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

#### DI/ DO 引脚分配表

<table>
  <thead>
    <tr>
      <th>类型</th>
      <th>标签名称</th>
      <th>原理图信号</th>
      <th>模块引脚编号</th>
      <th>BGA 编号</th>
      <th>GPIO 编号</th>
      <th>电压/电流限制</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>输入</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>453</td>
      <td rowSpan={4}>总电流为 12V/ 20mA</td>
      <td rowSpan={4}>12V 数字输入，地信号需要连接到<br />GND_DI (引脚2/4/6)</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PAC.06</td>
      <td>492</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>454</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PH.00</td>
      <td>391</td>
    </tr>
    <tr>
      <td rowSpan={4}>输出</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PI.00</td>
      <td>399</td>
      <td rowSpan={4}>每个引脚负载为 40V/40mA</td>
      <td rowSpan={4}>数字输出，最大耐压<br />40V，地信号需要连接到<br />GND_DO (引脚8/10)</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PI.01</td>
      <td>400</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PI.02</td>
      <td>401</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PH.07</td>
      <td>398</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>CAN 总线具有标准差分信号，<br />地信号需要连接到 GND_ISO (引脚12)</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>地</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12V 数字输入的参考地信号，<br />也是 DI 的回路</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>数字输出的参考地信号，也是 DO 的回路</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>CAN 的参考地信号</td>
    </tr>
  </tbody>
</table>

#### DI 的连接概述

您可以按照下图进行 DI 的连接。建议在 DI 线上串联一个电阻。我们测试时在 DI1 引脚连接了一个 4.7kΩ 电阻。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

#### DI 的使用方法

您需要在 DI 线上输入 12V 电压才能被检测为输入。

- **步骤 1：** 按照上图连接到 **DI1 引脚**并输入 **12V**

- **步骤 2：** 按如下方式打开 DI1 的 GPIO

```sh
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05
```

:::note
您可以参考 **DI/ DO 引脚分配表** 来找到 GPIO 编号和 BGA 编号。在上述示例中，DI1 引脚的 GPIO 编号为 453，BGA 编号为 PQ.05。
:::

- **步骤 3：** 执行以下命令检查状态

```sh
cat value
```

如果输出为 0，则表示有 12V 输入。如果输出为 1，则表示没有输入电压。

#### DO 的连接概述

您可以按照下图进行 DO 的连接。建议在 DO 线上串联一个电阻。我们测试时使用了一个 4.7kΩ 电阻。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

#### DO 的使用方法

在这里，您需要按照上图连接一个负载。测试最简单的方法是连接一个万用表，如果没有万用表，可以连接一个最大电压小于 40V 的负载。

- **步骤 1：** 按照上图连接到 **DO1 引脚**并输入 **最大 40V**

- **步骤 2：** 按如下方式打开 DO1 的 GPIO

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction
```

:::note
您可以参考 **DI/ DO 引脚分配表** 来找到 GPIO 编号和 BGA 编号。在上述示例中，DO1 引脚的 GPIO 编号为 399，BGA 编号为 PI.00。
:::

- **步骤 3：** 执行以下命令打开引脚

```sh
echo 1 > value
```

如果负载被打开或万用表输出您输入的电压，则测试正常。

### CAN

reServer Industrial 配备了支持 CAN FD（控制器区域网络灵活数据速率）协议的 CAN 接口，速率为 5Mbps。CAN 接口采用电容隔离，提供出色的 EMI 保护，确保在工业和自动化应用中的可靠通信。默认安装了一个 120Ω 的终端电阻，您可以使用 GPIO 开关打开或关闭该电阻。

注意：CAN 接口使用隔离电源，这意味着连接到 CAN 接口的外部设备的地信号应连接到 CG 引脚。

#### 使用 USB 转 CAN 适配器的连接概述

要测试和连接 CAN 总线，请将 USB 转 CAN 适配器连接到板上的 CAN 接头，如下图所示。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

我们使用了 [带 USB 线的 USB 转 CAN 分析仪适配器](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)，可在我们的 Bazaar 上购买。

#### 使用 USB 转 CAN 适配器的方法

- **步骤 1：** 从制造商网站下载您使用的 USB 转 CAN 适配器的驱动程序并安装。在我们的案例中，根据我们使用的适配器，驱动程序可以在 [这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver) 找到。

- **步骤 2：** 一些适配器还附带了必要的软件，用于让 PC 与 CAN 设备通信。在我们的案例中，根据我们使用的适配器，我们已下载并安装了可以在 [这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program) 找到的软件。

- **步骤 3：** 在 reServer Industrial 上打开一个终端窗口，并执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4：** 在终端中输入 **ifconfig**，您将看到 CAN 接口已启用。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 5：** 打开您之前安装的 CAN 软件。在本例中，我们将打开根据我们使用的 CAN 适配器安装的软件。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **步骤 6：** 将 USB 转 CAN 适配器连接到 PC，并通过 Windows 搜索栏搜索 **设备管理器** 打开它。现在，您将在 **端口 (COM & LPT)** 下看到已连接的适配器。记下此处列出的串口号。根据下图，串口号为 **COM9**。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **步骤 7：** 打开 CAN 软件，点击 **COM** 部分旁边的 **刷新**，然后点击下拉菜单并选择与已连接适配器对应的串口号。保持 **COM bps** 为默认值，然后点击 **打开**。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **步骤 8：** 保持 **模式** 和 **CAN bps** 为默认值，将 **类型** 更改为 **标准帧**，然后点击 **设置并启动**。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **步骤 9：** 在 reServer Industrial 上执行以下命令，将 CAN 信号发送到 PC：

```sh
cansend can0 123#abcdabcd
```

现在，您将在软件中看到接收到的信号，如下所示：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **步骤 10：** 在 reServer Industrial 上执行以下命令，等待接收来自 PC 的 CAN 信号：

```sh
candump can0 &
```

- **步骤 11：** 在 CAN 软件中，点击 **发送单帧**。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

现在，您将在 reServer Industrial 上看到接收到的信号，如下所示：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

#### 与 reTerminal DM 的连接概览

如果您可以访问 [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)，您可以直接与其通信，因为 reTerminal DM 也具有 CAN 接口。

请参考下图，通过 CAN 连接 reServer Industrial 和 reTerminal DM：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

#### 使用 reTerminal DM

- **步骤 1：** 在使用 reTerminal DM 之前，请访问 [此 Wiki](https://wiki.seeedstudio.com/cn/reterminal-dm) 以开始使用 reTerminal DM。

- **步骤 2：** 在 reServer Industrial 上打开一个终端窗口，并执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 3：** 在 reTerminal DM 上打开一个终端窗口，并执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4：** 在 reTerminal DM 上打开一个终端窗口，并执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 5：** 在两个设备上输入 **ifconfig**，您将看到 CAN 接口已启用。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 6：** 在 reTerminal DM 上执行以下命令，等待接收来自 reServer Industrial 的 CAN 信号：

```sh
candump can0 &
```

- **步骤 7：** 在 reServer Industrial 上执行以下命令，将 CAN 信号发送到 reTerminal DM：

```sh
cansend can0 123#abcdabcd
```

现在，您将在 reTerminal DM 上看到接收到的信号，如下所示：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **步骤 8：** 重复 **步骤 6 和步骤 7**，但交换设备。使用 reTerminal DM 发送 CAN 信号，并使用 reServer Industrial 接收信号。

### RS232/RS422/RS485 接口

reServer Industrial 配备了一个 DB9 接口，支持 RS232、RS422 和 RS485 通信协议，并且板载有一个 DIP 开关面板，用于在不同接口选项之间切换。

您可以看到如下所示的 DIP 开关面板：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/21.jpg"/></div>

以下表格解释了基于 DIP 开关位置的不同模式：

<table>
  <thead>
    <tr>
      <th />
      <th>MODE_0</th>
      <th>MODE_1</th>
      <th>MODE_2</th>
      <th>模式</th>
      <th>状态</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/52.png" alt="Image" width="200" height="127" /></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 全双工</td>
      <td>1T/1R RS-422</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/53.png" alt="Image" width="200" height="127" /></td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>纯 RS-232</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width="200" height="127" /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 半双工</td>
      <td>1T/1R RS-485，TX ENABLE 低电平有效</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width="200" height="127" /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 半双工</td>
      <td>1T/1R RS-485，TX ENABLE 高电平有效</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width="200" height="127" /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 全双工</td>
      <td>1T/1R RS-422，带终端电阻</td>
    </tr>
    <tr>
      <td rowSpan="3"><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width="200" height="127" /></td>
      <td rowSpan="3">1</td>
      <td rowSpan="3">0</td>
      <td rowSpan="3">1</td>
      <td rowSpan="3">纯 RS-232</td>
      <td>1T/1R RS-232 与 RS485 共存</td>
    </tr>
    <tr>
      <td>无需总线的应用</td>
    </tr>
    <tr>
      <td>切换 IC（特殊用途）</td>
    </tr>
    <tr>
      <td rowSpan="2"><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width="200" height="127" /></td>
      <td rowSpan="2">1</td>
      <td rowSpan="2">1</td>
      <td rowSpan="2">0</td>
      <td rowSpan="2">RS-485 半双工</td>
      <td>1T/1R RS-485，带终端电阻</td>
    </tr>
    <tr>
      <td>TX ENABLE 低电平有效</td>
    </tr>
    <tr>
      <td rowSpan="2"><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width="200" height="127" /></td>
      <td rowSpan="2">1</td>
      <td rowSpan="2">1</td>
      <td rowSpan="2">1</td>
      <td>低功耗</td>
      <td rowSpan="2">所有 I/O 引脚为高阻态</td>
    </tr>
    <tr>
      <td>关机</td>
    </tr>
  </tbody>
</table>

:::note
开箱即用，开关的默认模式将被设置为 RS485，工厂默认值为 010。
:::

上述表格考虑了 DIP 开关面板的前三个开关。然而，第四个开关负责切换斜率速率，这与数据速率直接相关。

<table>
  <thead>
    <tr>
      <th />
      <th>状态</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/62.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>SLEW= Vcc<br />此 RS232/RS422/RS485 多协议收发器限制通信速率如下：<br />RS-232：最大数据速率为 1.5Mbps<br />RS-485/RS-422：最大数据速率为 10Mbps<br />实际最大数据速率取决于使用的 Jetson SOM</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232：最大数据速率为 250Kbps<br />RS-485/RS-422：最大数据速率为 250kbps</td>
    </tr>
  </tbody>
</table>

在这里，我们将使用 USB 转 RS232、RS485 和 RS422 适配器来测试接口。因此，在继续之前，您需要在 PC 上安装一个串行终端应用程序。我们推荐您安装 **Putty**，因为它易于设置和使用。

- **步骤 1：** 访问 [此网站](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) 并根据您的 PC 架构下载 Putty。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

这里我们根据所用的 PC（X86 Windows 64 位机器）选择了 Putty。

- **步骤 2：** 打开下载的安装程序并按照提示安装应用程序。

#### 通用连接概述

您可以参考 DB9 连接器的引脚编号和表格进行连接。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/61.png"/></div>

<table>
  <thead>
    <tr>
      <th>模式</th>
      <th>001/101</th>
      <th>000/100</th>
      <th>010/011/110</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>引脚</td>
      <td>RS232</td>
      <td>RS422</td>
      <td>RS485</td>
    </tr>
    <tr>
      <td>1</td>
      <td />
      <td>TXD-</td>
      <td>Data-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>RXD</td>
      <td>TXD+</td>
      <td>Data+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>TXD</td>
      <td>RXD+</td>
      <td />
    </tr>
    <tr>
      <td>4</td>
      <td />
      <td>RXD-</td>
      <td />
    </tr>
    <tr>
      <td>5</td>
      <td>GND</td>
      <td>GND</td>
      <td>GND</td>
    </tr>
    <tr>
      <td>6</td>
      <td />
      <td />
      <td />
    </tr>
    <tr>
      <td>7</td>
      <td>RTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>8</td>
      <td>CTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>9</td>
      <td />
      <td />
      <td />
    </tr>
  </tbody>
</table>

#### RS232 连接概述

在这里，您可以使用 USB 转 RS232 适配器来测试接口。我们使用了 [UGREEN USB 转 RS232 适配器](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) 进行测试。

- **步骤 1：** 关闭开发板。

- **步骤 2：** 这里有两种设置 DIP 开关的选项：001 模式或 101 模式。每种模式的开关位置如下所示：

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **步骤 3：** 将 USB 转 RS232 适配器连接到 DB9 连接器。

- **步骤 4：** 将另一端连接到 PC 的一个 USB 端口。

- **步骤 5：** 打开开发板。

#### RS232 使用方法

- **步骤 1：** 您可能需要为所使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索中输入 **设备管理器** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **步骤 2：** 如果看不到适配器，您需要根据所使用的适配器安装驱动程序。通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，您可以访问 [此页面](https://www.ugreen.com/pages/download)，搜索 **20201** 作为型号并下载相应的驱动程序。

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容：

  - 本地回显：强制开启
  - 本地行编辑：强制开启

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据您在 **设备管理器** 中看到的内容设置串口号，保持速率为默认值（9600），然后点击 **Open**。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **步骤 5：** 在 reServer Industrial 终端窗口中输入以下内容，从 reServer Industrial 向 PC 发送信号：

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reServer Industrial" > /dev/ttyTHS0
```

现在您将在 Putty 上看到此消息显示。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **步骤 6：** 在 reTerminal Industrial 终端窗口中输入以下内容，等待从 PC 接收信号：

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 7：** 在 Putty 上输入任何内容，按 **ENTER**，它将显示在 reServer Industrial 终端窗口中。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

#### RS422 连接概述 

在这里，您可以使用 USB 转 RS422 适配器来测试接口。我们使用了 [DTech USB 转 RS485 适配器](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 进行测试。

- **步骤 1：** 关闭开发板

- **步骤 2：** 这里有两种方式设置 DIP 开关，可以设置为 000 模式或 100 模式。每种模式的开关位置如下所示：

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **步骤 3：** 使用跳线将 USB 转 RS422 适配器连接到 DB9 接头，如下图所示。这里我们连接了上述提到的适配器。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **步骤 4：** 将另一端连接到 PC 的 USB 端口之一

- **步骤 5：** 打开开发板

#### RS422 使用方法

- **步骤 1：** 您可能需要为所使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索中输入 **设备管理器**，进入设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2：** 如果看不到适配器，您需要根据所使用的适配器安装驱动程序。通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，您可以访问 [此页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)。

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容：

  - 本地回显：强制开启
  - 本地行编辑：强制开启

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据 **设备管理器** 中看到的串口号设置串口号，保持默认速度（9600），然后点击 **Open**。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 4：** 在 reServer Industrial 终端窗口中输入以下命令，将信号从 reServer Industrial 发送到 PC：

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

现在，您将在 Putty 上看到此消息。

- **步骤 5：** 在 reTerminal Industrial 终端窗口中输入以下命令以等待接收来自 PC 的信号：

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 6：** 在 Putty 上输入任何内容，按 **ENTER**，它将显示在 reServer Industrial 终端窗口中。

#### RS485 连接概述

在这里，您可以使用 USB 转 RS422 适配器来测试接口。我们使用了 [DTech USB 转 RS485 适配器](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 进行测试。

- **步骤 1：** 关闭开发板

- **步骤 2：** 这里有三种方式设置 DIP 开关，可以设置为 010 模式、011 模式或 110 模式。每种模式的开关位置如下所示：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **步骤 3：** 使用跳线将 USB 转 RS422 适配器连接到 DB9 接头，如下图所示。这里我们连接了上述提到的适配器。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **步骤 4：** 将另一端连接到 PC 的 USB 端口之一

- **步骤 5：** 打开开发板

#### RS485 使用方法

- **步骤 1：** 您可能需要为所使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索中输入 **设备管理器**，进入设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2：** 如果看不到适配器，您需要根据所使用的适配器安装驱动程序。通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，您可以访问 [此页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)。

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容：

  - 本地回显：强制开启
  - 本地行编辑：强制开启

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据 **设备管理器** 中看到的串口号设置串口号，保持默认速度（9600），然后点击 **Open**。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 4：** 在 reServer Industrial 终端窗口中输入以下命令，将信号从 reServer Industrial 发送到 PC：

```sh
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reServer Industrial" > /dev/ttyTHS0
```

现在，您将在 Putty 上看到此消息。

- **步骤 5：** 在 reTerminal Industrial 终端窗口中输入以下命令以等待接收来自 PC 的信号：

```sh
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **步骤 6：** 在 Putty 上输入任何内容，按 **ENTER**，它将显示在 reServer Industrial 终端窗口中。

### USB

reServer Industrial 配备了 3 个 USB3.2 接口，具有以下功能：
- 在双层 USB 接口上，上下 USB 端口共享一个限流 IC，总供电能力为最大 2.1A 输出电流（单个也可以为 2.1A）。如果超过 2.1A，将进入过流保护状态。
- 在双层 USB 接口旁边的单个 USB 接口上，总供电能力为最大 2.1A 输出电流。如果超过 2.1A，将进入过流保护状态。
- Orin NX 模块配备 3 个 USB3.2，其中只有一个用于 reServer Industrial，并转换为 3 路。（USB3.1 TYPE-A x2 - J4 和 USB3.1 TYPE-A x1 - J3）。
- 仅支持 USB 主机模式，不支持设备模式。
- 提供 5V 2.1A 电源。
- 支持热插拔。

#### 使用方法

我们将解释如何对连接的 USB 闪存驱动器进行简单的基准测试。

- **步骤 1：** 通过执行以下命令检查写入速度

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **步骤 2：** 通过执行以下命令检查读取速度。请确保在执行上述写入速度命令后再执行此操作。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

### 可配置 LED

板上有一个绿色 LED，如下图所示。默认情况下，它用作指示设备正常运行的 LED。然而，您也可以通过系统编程此 LED 以实现开关控制。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/22.jpg"/></div>

#### 使用方法

- **步骤 1：** 在终端窗口中输入以下命令以访问绿色 LED

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

- **步骤 2：** 关闭 LED

```sh
echo 0 > value 
```

- **步骤 3：** 打开 LED

```sh
echo 1 > value 
```

如果您完成了对 LED 的使用，可以执行以下命令：

```sh
cd ..
echo 329 > unexport
```

### 监控系统性能

我们可以使用 **jetson stats** 应用程序来监控系统组件的温度，并检查其他系统详细信息，例如：

- 查看 CPU、GPU、RAM 的使用情况
- 更改电源模式
- 设置为最大时钟频率
- 检查 JetPack 信息

- **步骤 1：** 在 reServer Industrial 的终端窗口中输入以下命令：

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **步骤 2：** 重启设备

```sh
sudo reboot
```

- **步骤 3：** 在终端中输入以下命令：

```sh
jtop
```

现在 **jtop** 应用程序将如下图所示打开：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **步骤 4：** 您可以浏览应用程序的不同页面并探索所有功能！

### TPM

reServer Industrial 配备了一个 TPM 接口，用于连接外部 TPM 模块。我们已使用基于 Infineon SLB9670 的 TPM2.0 模块进行了测试。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/24.jpg"/></div>

#### 连接概览

将 TPM 模块连接到如下图所示的 TPM 接口：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/27.jpg"/></div>

#### 使用方法

通过执行以下命令检查 TPM 模块是否正确加载：

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

您将看到如下输出：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

### reServer Industrial 的最大性能

如果您希望在 reServer Industrial 上启用最大性能，请按照以下说明操作：

- **步骤 1：** 输入以下命令以启用最大功率模式：

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

此时系统会要求您输入 **YES** 以重启设备。

- **步骤 2：** 设备启动后，输入以下命令将 CPU 时钟设置为最大频率：

```sh
sudo jetson_clocks
```

### GPIO 表

您可以访问 reServer Industrial 的 GPIO 表，以熟悉所有引脚映射。

在终端中执行以下命令以访问：

```sh
sudo cat /sys/kernel/debug/gpio
```

您将看到如下输出：

```sh
gpiochip2: GPIOs 300-315, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-300 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-301 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-302 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-303 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-304 (hst_wake_bt         )
 gpio-305 (bt_wake_hst         )
 gpio-306 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-307 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-308 (can_120R_en         )
 gpio-309 (M2B_PCIe_rst        )
 gpio-310 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-311 (PCIe_ETH_rst        )
 gpio-312 (M2B_WOWWAN          )
 gpio-313 (M2B_DPR_3V3         )
 gpio-314 (SIM_MUX_SEL         )
 gpio-315 (gpio_pin15          )

gpiochip1: GPIOs 316-347, parent: platform/c2f0000.gpio, tegra234-gpio-aon:
 gpio-316 (PAA.00              )
 gpio-317 (PAA.01              )
 gpio-318 (PAA.02              )
 gpio-319 (PAA.03              )
 gpio-320 (PAA.04              )
 gpio-321 (PAA.05              |fixed-regulators:reg) out hi
 gpio-322 (PAA.06              )
 gpio-323 (PAA.07              )
 gpio-324 (PBB.00              )
 gpio-325 (PBB.01              )
 gpio-326 (PBB.02              )
 gpio-327 (PBB.03              )
 gpio-328 (PCC.00              )
 gpio-329 (PCC.01              )
 gpio-330 (PCC.02              )
 gpio-331 (PCC.03              |mux                 ) out hi
 gpio-332 (PCC.04              )
 gpio-333 (PCC.05              )
 gpio-334 (PCC.06              )
 gpio-335 (PCC.07              )
 gpio-336 (PDD.00              )
 gpio-337 (PDD.01              )
 gpio-338 (PDD.02              )
 gpio-339 (PEE.00              )
 gpio-340 (PEE.01              )
 gpio-341 (PEE.02              )
 gpio-342 (PEE.03              )
 gpio-343 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-344 (PEE.05              )
 gpio-345 (PEE.06              )
 gpio-346 (PEE.07              )
 gpio-347 (PGG.00              )
gpiochip0: GPIOs 348-511, parent: platform/2200000.gpio, tegra234-gpio:
 gpio-348 (PA.00               |fixed-regulators:reg) out lo
 gpio-349 (PA.01               )
 gpio-350 (PA.02               )
 gpio-351 (PA.03               )
 gpio-352 (PA.04               )
 gpio-353 (PA.05               )
 gpio-354 (PA.06               )
 gpio-355 (PA.07               )
 gpio-356 (PB.00               )
 gpio-357 (PC.00               )
 gpio-358 (PC.01               )
 gpio-359 (PC.02               )
 gpio-360 (PC.03               )
 gpio-361 (PC.04               )
 gpio-362 (PC.05               )
 gpio-363 (PC.06               )
 gpio-364 (PC.07               )
 gpio-365 (PD.00               )
 gpio-366 (PD.01               )
 gpio-367 (PD.02               )
 gpio-368 (PD.03               )
 gpio-369 (PE.00               )
 gpio-370 (PE.01               )
 gpio-371 (PE.02               )
 gpio-372 (PE.03               )
 gpio-373 (PE.04               )
 gpio-374 (PE.05               )
 gpio-375 (PE.06               )
 gpio-376 (PE.07               )
 gpio-377 (PF.00               )
 gpio-378 (PF.01               )
 gpio-379 (PF.02               )
 gpio-380 (PF.03               )
 gpio-381 (PF.04               )
 gpio-382 (PF.05               )
 gpio-383 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-384 (PG.01               )
 gpio-385 (PG.02               )
 gpio-386 (PG.03               )
 gpio-387 (PG.04               )
 gpio-388 (PG.05               )
 gpio-389 (PG.06               )
 gpio-390 (PG.07               |cd                  ) in  lo IRQ
 gpio-391 (PH.00               )
 gpio-392 (PH.01               )
 gpio-393 (PH.02               )
 gpio-394 (PH.03               )
 gpio-395 (PH.04               )
 gpio-396 (PH.05               )
 gpio-397 (PH.06               )
 gpio-398 (PH.07               )
 gpio-399 (PI.00               )
 gpio-400 (PI.01               )
 gpio-401 (PI.02               )
 gpio-402 (PI.03               )
 gpio-403 (PI.04               )
 gpio-404 (PI.05               )
 gpio-405 (PI.06               )
 gpio-406 (PJ.00               )
 gpio-407 (PJ.01               )
 gpio-408 (PJ.02               )
 gpio-409 (PJ.03               )
 gpio-410 (PJ.04               )
 gpio-411 (PJ.05               )
 gpio-412 (PK.00               )
 gpio-413 (PK.01               )
 gpio-414 (PK.02               )
 gpio-415 (PK.03               )
 gpio-416 (PK.04               )
 gpio-417 (PK.05               )
 gpio-418 (PK.06               )
 gpio-419 (PK.07               )
 gpio-420 (PL.00               )
 gpio-421 (PL.01               )
 gpio-422 (PL.02               |nvidia,pex-wake     ) in  hi ACTIVE LOW
 gpio-423 (PL.03               )
 gpio-424 (PM.00               )
 gpio-425 (PM.01               )
 gpio-426 (PM.02               )
 gpio-427 (PM.03               )
 gpio-428 (PM.04               )
 gpio-429 (PM.05               )
 gpio-430 (PM.06               )
 gpio-431 (PM.07               )
 gpio-432 (PN.00               )
 gpio-433 (PN.01               )
 gpio-434 (PN.02               )
 gpio-435 (PN.03               )
 gpio-436 (PN.04               )
 gpio-437 (PN.05               )
 gpio-438 (PN.06               )
 gpio-439 (PN.07               )
 gpio-440 (PP.00               )
 gpio-441 (PP.01               )
 gpio-442 (PP.02               )
 gpio-443 (PP.03               )
 gpio-444 (PP.04               )
 gpio-445 (PP.05               )
 gpio-446 (PP.06               )
 gpio-447 (PP.07               )
 gpio-448 (PQ.00               )
 gpio-449 (PQ.01               )
 gpio-450 (PQ.02               )
 gpio-451 (PQ.03               )
 gpio-452 (PQ.04               )
 gpio-453 (PQ.05               )
 gpio-454 (PQ.06               )
 gpio-455 (PQ.07               )
 gpio-456 (PR.00               )
 gpio-457 (PR.01               )
 gpio-458 (PR.02               )
 gpio-459 (PR.03               )
 gpio-460 (PR.04               )
 gpio-461 (PR.05               )
 gpio-462 (PX.00               )
 gpio-463 (PX.01               )
 gpio-464 (PX.02               )
 gpio-465 (PX.03               )
 gpio-466 (PX.04               )
 gpio-467 (PX.05               )
 gpio-468 (PX.06               )
 gpio-469 (PX.07               )
 gpio-470 (PY.00               )
 gpio-471 (PY.01               )
 gpio-472 (PY.02               )
 gpio-473 (PY.03               )
 gpio-474 (PY.04               )
 gpio-475 (PY.05               )
 gpio-476 (PY.06               )
 gpio-477 (PY.07               )
 gpio-478 (PZ.00               )
 gpio-479 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-480 (PZ.02               )
 gpio-481 (PZ.03               )
 gpio-482 (PZ.04               )
 gpio-483 (PZ.05               )
 gpio-484 (PZ.06               |cs_gpio             ) out lo
 gpio-485 (PZ.07               )
 gpio-486 (PAC.00              )
 gpio-487 (PAC.01              )
 gpio-488 (PAC.02              )
 gpio-489 (PAC.03              )
 gpio-490 (PAC.04              )
 gpio-491 (PAC.05              )
 gpio-492 (PAC.06              )
 gpio-493 (PAC.07              )
 gpio-494 (PAD.00              )
 gpio-495 (PAD.01              )
 gpio-496 (PAD.02              )
 gpio-497 (PAD.03              )
 gpio-498 (PAE.00              )
 gpio-499 (PAE.01              )
 gpio-500 (PAF.00              )
 gpio-501 (PAF.01              )
 gpio-502 (PAF.02              )
 gpio-503 (PAF.03              )
 gpio-504 (PAG.00              )
 gpio-505 (PAG.01              )
 gpio-506 (PAG.02              )
 gpio-507 (PAG.03              )
 gpio-508 (PAG.04              )
 gpio-509 (PAG.05              )
 gpio-510 (PAG.06              )
 gpio-511 (PAG.07              )
```

## 资源

（更改链接）
- [reServer Industrial 数据表](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial 参考指南](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson 设备和载板比较](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D 文件](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技术支持

请随时在我们的 [论坛](https://forum.seeedstudio.com/) 提交问题。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>