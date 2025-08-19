---
description: reComputer Industrial 入门指南
title: reComputer Industrial 入门指南
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Industrial_Getting_Started
last_update:
  date: 2023/05/16
  author: Lakshantha
---

# reComputer Industrial 入门指南

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"/></div>

reComputer Industrial 系列提供完整的系统，包括 NVIDIA Jetson™ Xavier NX/Orin Nano/Orin NX 模块，AI 性能范围从 20 TOPS 到 100 TOPS。预装 Jetpack 5.1.1，reComputer Industrial 简化了开发过程，非常适合构建视频分析、目标检测、自然语言处理、医学影像和机器人等应用，为智慧城市、安全、工业自动化和智能工厂等行业带来数字化转型。

reComputer Industrial 配备被动散热器和无风扇设计，非常适合在苛刻环境中使用。被动散热器无需风扇即可实现高效散热，降低了因灰尘或其他污染物导致组件故障的风险。无风扇设计还降低了噪音水平和功耗，非常适合噪音敏感环境，并能最大限度地降低能源成本。

reComputer Industrial 配备 2 个 RJ45 GbE 接口，其中一个是 PoE PSE 接口，可为 IP 摄像头等设备提供以太网供电。这消除了单独电源的需求，使得在没有电源插座的区域更容易部署网络设备。另一个 GbE 接口用于连接网络交换机或路由器，从而实现与网络上其他设备的通信以及访问互联网。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 特性

- **无风扇紧凑型 PC：** 热设计参考，支持更宽的温度范围 -20 ~ 60°C，气流为 0.7m/s
- **为工业接口设计：** 2x RJ-45 GbE（1 个支持 POE-PSE 802.3 af）；1x RS-232/RS-422/RS-485；4x DI/DO；1x CAN；3x USB3.2；1x TPM2.0（模块可选）
- **混合连接：** 支持 5G/4G/LTE/LoRaWAN®（模块可选），带 1x Nano SIM 卡插槽
- **灵活安装：** 桌面、DIN 导轨、壁挂式、VESA
- **认证：** FCC、CE、RoHS、UKCA

## 规格

<table>
  <thead>
    <tr>
      <th colSpan={2}>产品名称</th>
      <th>reComputer Industrial J4012</th>
      <th>reComputer Industrial J4011</th>
      <th>reComputer Industrial J3011</th>
      <th>reComputer Industrial J3010</th>
      <th>reComputer Industrial J2012</th>
      <th>reComputer Industrial J2011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>NVIDIA Jetson 模块</td>
      <td>Orin NX 16GB</td>
      <td>Orin NX 8GB</td>
      <td>Orin Nano 8GB</td>
      <td>Orin Nano 4GB</td>
      <td>Xavier NX 16GB</td>
      <td>Xavier NX 8GB</td>
    </tr>
    <tr>
      <td colSpan={2}>SKU</td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html">110110191</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html">110110190</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html">110110193</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3010-p-5686.html">110110192</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2012-p-5685.html">110110189</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2011-p-5683.html">110110188</a></td>
    </tr>
    <tr>
      <td rowSpan={6}>处理器系统</td>
      <td>AI 性能</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
      <td colSpan={2}>21 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>1024 核 NVIDIA Ampere 架构 GPU，带 32 个 Tensor 核</td>
      <td>512 核 NVIDIA Ampere 架构 GPU，带 16 个 Tensor 核</td>
      <td colSpan={2}>384 核 NVIDIA Volta™ GPU，带 48 个 Tensor 核</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 核 Arm® Cortex®-A78AE v8.2 64 位 CPU<br />2MB L2 + 4MB L3</td>
      <td colSpan={3}>6 核 Arm® Cortex®-A78AE v8.2 64 位 CPU<br />1.5MB L2 + 4MB L3</td>
      <td colSpan={2}>6 核 NVIDIA Carmel ARM®v8.2 64 位 CPU，6MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>16GB 128 位 LPDDR5<br />102.4GB/s</td>
      <td>8GB 128 位 LPDDR5<br />102.4GB/s</td>
      <td>8GB 128 位 LPDDR5<br />68 GB/s</td>
      <td>4GB 64 位 LPDDR5<br />34 GB/s</td>
      <td>16GB 128 位 LPDDR4x<br />59.7GB/s</td>
      <td>8GB 128 位 LPDDR4x<br />59.7GB/s</td>
    </tr>
    <tr>
      <td>视频编码</td>
      <td colSpan={2}>1*4K60 (H.265) | 3*4K30 (H.265) | 6*1080p60 (H.265) | 12*1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 支持 1-2 个 CPU 核心</td>
      <td colSpan={2}>2*4K60 | 4*4K30 | 10*1080p60 | 22*1080p30 (H.265)<br /> 2*4K60 | 4*4K30 | 10*1080p60 | 20*108p30 (H.264)</td>
    </tr>
    <tr>
      <td>视频解码</td>
      <td colSpan={2}>1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>1*4K60 (H.265) | 2*4K30 (H.265) | 5*1080p60 (H.265) | 11*1080p30 (H.265)</td>
      <td colSpan={2}>2*8K30 | 6*4K60 | 12*4K30 | 22*1080p60 | 44*1080p30 (H.265)<br /> 2*4K60 | 6*4K30 | 10*1080p60 | 22*1080p30 (H.264)</td>
    </tr>
    <tr>
      <td rowSpan={2}>存储</td>
      <td>eMMC<br /></td>
      <td><br />-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td colSpan={2}>16GB eMMC 5.1</td>
    </tr>
    <tr>
      <td>扩展</td>
      <td colSpan={6}>M.2 Key M PCIe Gen4.0 SSD（包含 M.2 NVMe 2280 SSD 128G）</td>
    </tr>
    <tr>
      <td rowSpan={6}>I/O</td>
      <td>网络</td>
      <td colSpan={6}>1* LAN1 RJ45 GbE PoE(PSE 802.3 af 15 W)<br />1* LAN2 RJ45 GbE (10/100/1000Mbps) </td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={6}>3* USB3.2 Gen1, 1* USB2.0 Type C（设备模式），1* USB2.0 Type C 用于调试 UART &amp; RP2040</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={6}>4*DI,4*DO,3*GND_DI,2*GND_DO,1*GND_ISO,1*CAN<br /></td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={6}>1* DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan={6}>1*HDMI 2.0 Type A</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={6}>1* Nano SIM 卡插槽</td>
    </tr>
    <tr>
      <td rowSpan={7}>扩展</td>
      <td>Mini PCIe</td>
      <td colSpan={6}>Mini PCIe 用于 4G/LoRaWAN®（模块可选）<br /></td>
    </tr>
    <tr>
      <td>Wi-Fi</td>
      <td colSpan={6}>支持 SMD Wi-Fi/Bluetooth（模块可选）</td>
    </tr>
    <tr>
      <td>M.2 Key B </td>
      <td colSpan={6}>M.2 Key B 支持 4G/5G（模块可选）</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan={6}>无风扇，被动散热器<br />1*风扇连接器（5V PWM）</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={6}>1* TPM 2.0 连接器（模块可选）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={6}>1* RTC 插槽（包含 CR1220），1* RTC 2 针</td>
    </tr>
    <tr>
      <td>摄像头</td>
      <td colSpan={6}>2* CSI（2 通道 15 针）</td>
    </tr>
    <tr>
      <td rowSpan={2}>电源</td>
      <td>电源供应</td>
      <td colSpan={6}>DC 12V-24V 端子块 2 针</td>
    </tr>
    <tr>
      <td>电源适配器</td>
      <td colSpan={6}>19V 电源适配器（不含电源线）</td>
    </tr>
    <tr>
      <td rowSpan={3}>机械结构<br /></td>
      <td>尺寸（宽 x 深 x 高）</td>
      <td colSpan={6}>159mm×155mm×57mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={6}>1.57kg</td>
    </tr>
    <tr>
      <td>安装方式</td>
      <td colSpan={6}>桌面、DIN 导轨、壁挂式、VESA</td>
    </tr>
    <tr>
      <td rowSpan={4}>环境</td>
      <td>工作温度</td>
      <td colSpan={6}> -20 ~ 60°C，气流为 0.7m/s</td>
    </tr>
    <tr>
      <td>工作湿度</td>
      <td colSpan={6}>95% @ 40 °C（非冷凝）</td>
    </tr>
    <tr>
      <td>振动</td>
      <td colSpan={6}>3 Grms @ 5 ~ 500 Hz，随机，1 小时/轴</td>
    </tr>
    <tr>
      <td>冲击</td>
      <td colSpan={6}>50G 峰值加速度（11 毫秒）</td>
    </tr>
    <tr>
      <td colSpan={2}>操作系统</td>
      <td colSpan={6}>预装 Jetpack 5.1（及以上）（提供带板支持包的 Linux 操作系统）</td>
    </tr>
    <tr>
      <td colSpan={2}>认证</td>
      <td colSpan={6}>FCC、CE、RoHS、UKCA</td>
    </tr>
    <tr>
      <td colSpan={2}>保修</td>
      <td colSpan={6}>2 年</td>
    </tr>
  </tbody>
</table>

## 硬件概览

### 完整系统

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/3.jpg"/></div>

### 承载板

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/4.jpg"/></div>

## 刷写 JetPack

reComputer Industrial 预装了 JetPack 5.1.1，存储在 128GB SSD 上，并包含必要的驱动程序。这些驱动程序包括 SDK 组件，如 CUDA、CUDNN 和 TensorRT。然而，如果您想重新刷写 JetPack 到预装的 SSD 或新的 SSD，可以按照以下步骤操作。

:::note
如果您想在 reComputer Industrial 上使用 SSD，我们仅推荐选择 Seeed 提供的 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) 和 [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 版本。
:::

### 准备工作

在开始使用 reComputer Industrial 之前，您需要准备以下硬件：

- reComputer Industrial
- 提供的电源适配器及电源线（[美版](https://www.seeedstudio.com/AC-US-p-5122.html) 或 [欧版](https://www.seeedstudio.com/AC-EU-p-5121.html)）
- Ubuntu 20.04 主机电脑
- USB Type-C 数据传输线
- 外接显示器
- HDMI 线
- 键盘和鼠标

:::info
我们建议您使用物理 Ubuntu 主机设备，而不是虚拟机。
请参考下表准备主机设备。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="3"> Ubuntu 版本（主机电脑） </td>
    </tr>
    <tr>
        <td> 18.04 </td>
        <td> 20.04 </td>
        <td> 22.04 </td>
    </tr>
    <tr>
        <td> JetPack 5.x </td>
        <td> ✅ </td>
        <td> ✅ </td>
        <td> </td>
    </tr>
    <tr>
        <td> JetPack 6.x </td>
        <td> </td>
        <td> ✅ </td>
        <td> ✅ </td>
    </tr>
  </tbody>
</table>
:::

### 进入强制恢复模式

现在，您需要让 reComputer Industrial 板进入恢复模式，以便刷写设备。

1. 使用 USB Type-C 数据线连接 **USB2.0 DEVICE** 端口和您的电脑。
2. 使用针插入 **RECOVERY** 孔并按下恢复按钮，同时保持按住。
3. 将提供的 **2 针端子块电源连接器**连接到板上的电源接口，并将提供的电源适配器和电源线连接以启动板子。
4. 松开恢复按钮。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/97.png"/></div>

:::note
确保在按住 RECOVERY 按钮的同时启动设备，否则无法进入恢复模式。
:::

在 Ubuntu 主机电脑上，打开终端窗口并输入命令 **lsusb**。如果返回的内容中包含以下输出之一（根据您使用的 Jetson SoM），则说明板子已进入强制恢复模式。

- 对于 Orin NX 16GB: **0955:7323 NVidia Corp**
- 对于 Orin NX 8GB: **0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB: **0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB: **0955:7623 NVidia Corp**

### 刷写到 Jetson

<!-- 代码 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Jetpack 5.1.1" label="Jetpack 5.1.1">

我们提供两种不同的刷写方法。

1. 下载我们准备的完整系统镜像，其中包含 NVIDIA JetPack、硬件外设驱动程序，并刷写到设备。
2. 下载官方 NVIDIA L4T，使用包含的硬件外设驱动程序并刷写到设备。

:::note
第一种方法的下载大小约为 14GB，第二种方法的下载大小约为 3GB。
:::

<Tabs>
<TabItem value="方法 1" label="方法 1">

- **步骤 1:** 根据您使用的板子，将系统镜像下载到您的 Ubuntu 主机电脑。

<div class="table-center">
  <table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>设备</th>
      <th>镜像链接 1</th>
      <th>镜像链接 2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUhr3fzFqx9DmH83QrXmFAwBEpfC-VGsyBnqHSoOPPAzGQ?e=Wv7d8f" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EcXVegQs83tJpv3kmJPMmSEB8M9djK_gWgJapIJnOJQeUw?e=ntbXLi" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>F6623A277E538F309999107297405E1<br />378CF3791EA9FD19F91D263E3B4C88333</td>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbaTHCLEwfNOqAR1DH-IAWYB20HBEPG2G-IkPJ1dJJcWJw?e=2VYQXJ" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EStCSSWeyUtLkJXMj5Y6tXcBru2PIQNHLl6p2BZsRbzxjA?e=Gaaa6m" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>414DFE16703D0A2EE972DF1C77FCE2E<br />8B44BC71726BB6EE4B1439C2D0F19A653</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbQu844dGA5Fjn3n-320hmoBt6wngMrIv6fErKLEZI1GyQ?e=uSU6qb" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERgyc60CqY9Aog6BMW9-yqQBj8pMaakSFTzHHvb4edt_eg?e=9qFHKp" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>347AB7247ED83286BDFAEF84B49B84C<br />5F5B871AEE68192339EDE4773149D8737</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETnL5lrC6IBPqm6Lafx1nCMBJJjml1IrCagrHPGhxFpzxA?e=BBM0kl" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb7J_TSNsDBCrvc1RbSOmnoBqmjR9jYhkvZpdQJOzkH5KA?e=h4r74v" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>860EC8EB3245CB91E7C5C321B26333B<br />59456A3418731FEF73AE0188DF655EE46</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeD01G8dJ8pIm187oS_VX-sBu3SmD4LhaBmwVz7X4-n_Gw?e=x9ULSq" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Ef_fEAq0aA5JksfnEz62JKABfYTUzlTdOxkiKwoThp17xg?e=UlSs7A" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>821CF92AF1FE8A785689FAF4751615A<br />A30E7F0770B4FA23327DFAF2C8B53FDD7</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVYQRYavCVRJrHGz12qUPlIBdmK3hrjEyglRkuLhBSlYuA?e=SBnrTU" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EVVUAexfVKxDnjbUGtYrJhEB1He6ZXIAD4uriNP76fxbMg?e=kGYF6h" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>DAB8FC069E4C62434C77AE3A6BA13EE<br />FB30003C9A14BFE82DE879B88ACDD85FA</td>
    </tr>
  </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * 来自 Download1 和 Download2 的镜像文件是相同的。您可以选择下载速度更快的链接。
</p>

:::info
要验证下载的固件的完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果生成的哈希值与 wiki 中提供的 SHA256 哈希值匹配，则表明您下载的固件是完整且无损的。
:::

上述镜像的源代码可以在 [这里](https://github.com/Seeed-Studio/Linux_for_Tegra) 找到。

- **步骤 2：** 解压生成的文件

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **步骤 3：** 进入之前解压的文件目录并执行以下刷写命令

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始将系统镜像刷写到开发板。如果刷写成功，您将看到以下输出：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 4：** 使用开发板上的 HDMI 接口将其连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，开发板将重新启动并准备好使用！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
  </TabItem>
<TabItem value="Method 2" label="方法 2">

**下载并准备 NVIDIA L4T 和 rootfs**

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**下载并准备驱动程序**

- **步骤 1：** 将对应于您所使用开发板的驱动程序文件下载到您的 Ubuntu 电脑上

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
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB,<br />Orin Nano 8GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nx-8-16-nano-8-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nano-4-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>Jetson Xavier NX 8GB/ 16GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/xavier-nx-8-16-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
  </tbody>
</table>

- **步骤 2：** 将下载的外设驱动程序移动到与 **Linux_For_Tegra** 目录相同的文件夹中

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/125.png"/></div>

- **步骤 3：** 解压下载的驱动程序 .zip 文件。这里我们需要额外安装 **unzip** 软件包来解压 .zip 文件

```sh
sudo apt install unzip
sudo unzip xxxx.zip # 将 xxxx 替换为驱动文件名
```

此时会询问是否替换文件。输入 A 并按 ENTER 键以替换必要的文件。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/126.png"/></div>

- **步骤 4：** 进入 **Linux_for_Tegra** 目录并执行以下刷写命令

```sh
cd Linux_for_Tegra

# 对于 Orin NX 和 Orin Nano
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0 recomputer-orin-industrial external

# 对于 Xavier NX
sudo ADDITIONAL_DTB_OVERLAY_OPT="BootOrderNvme.dtbo" ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_l4t_t194_qspi_p3668.xml --no-systemimg" --network usb0  recomputer-xavier-nx-industrial external
```

现在将开始将系统镜像刷写到开发板。如果刷写成功，您将看到以下输出：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 5：** 使用开发板上的 HDMI 接口将其连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，开发板将重新启动，您将看到以下内容：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **步骤 6：** 在设备内打开终端窗口，执行以下命令，设备将重新启动并准备好使用！

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
  </TabItem>
  </Tabs>

---

</TabItem>

<TabItem value="Jetpack 5.1.3" label="Jetpack5.1.3">

- **步骤 1：** 下载与您使用的开发板对应的系统镜像到您的 Ubuntu 电脑
<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>设备</th>
      <th>链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWzTx7AJjbtFksz5DSwvW1sBjUa1RgnSlk-prR0kK_ymWw?e=dq9zIb" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>436017DA6FBA2EF910F5F6C5D80749FB53029EC5108A461101CA3A69C1F8CEC3</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQwbQHuBbGhDpLP_Prr6NgkBMtu41jENXa_zTRoQ2pYCBQ?e=tNeW4d" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>B8FFB1C7BF5B5436CCA6BA0E32E9A71752B25C1494527EC25129895A2FBC7D93</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdhYh3cLibBPloeruCn9_TwBwyxtn8XycXp0jTqS5UlMaA?e=efwpWa" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>484CB81F399301B8A6FF61429E974AE790365B9498FB8B20DF02C603656CF6D0</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXK1GomjByJKnmt3OdE5Vq8BSqzYZm1MY_yD18YjmRplLw?e=dIWPKA" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>A238C5229219CCF1F6AC2B2E4D93A914E6B2E471F56C975990CC03BEEFC5F9DD</th>
    </tr>
        <tr>
      <td>reComputer Industrial J2012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfB-onLVAIxFreZTCSpejYIBPX42dZoKnKrDm8ZC27DI_w?e=fAOXZr" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>B54CF2545A8ED8BFE115C439B0B427112BD882F03292B9F5C03AB55746C707C1</th>
    </tr>
        <tr>
      <td>reComputer Industrial J2011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXmfIDIx80hCk61-dZogyUwBe6uOlz0U6tZEW3i7WC2JBw?e=BLjUW3" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>11BDB47D06CA8409CFCEA109B8BACD9BB79A54A275D2664D6CF492BFEAD31131</th>
    </tr>
  </tbody>
  </table> 
</div>

:::info
为了验证下载固件的完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 以获取下载文件的 SHA256 哈希值。如果生成的哈希值与 Wiki 中提供的 SHA256 哈希值匹配，则说明您下载的固件是完整且未损坏的。
:::

:::info
上述镜像的源代码可以在 [这里](https://github.com/Seeed-Studio/Linux_for_Tegra) 找到。
:::

- **步骤 2：** 解压生成的文件 

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **步骤 3：** 进入之前解压的文件目录并执行以下命令进行刷写 

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始将系统镜像刷写到开发板。如果刷写成功，您将看到以下输出：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>


- **步骤 4：** 使用开发板上的 HDMI 接口将 J401 连接到显示器，并完成初始配置设置：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据您的需求完成 **系统配置**。
:::


</TabItem>

<TabItem value="Jetpack 6.0" label="Jetpack6.0">

- **步骤 1：** 下载与您使用的开发板对应的系统镜像到您的 Ubuntu 电脑
<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>设备</th>
      <th>链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcQJulAOt3ZJlnG-xr0lzdcB_d-yLXxEpicXuHr8sIca1w?e=dUWeYw" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>77B5967DCDFAAE6725381EAE7BD570A254BD1F9E6E4C28DE8D9D84760C204DF1</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERWRQ6mJe2hIoSwsatwN68IBF0prjvm7XX1aHFmsTd25fQ?e=x06NFw" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>FEB6B83441F4C812921ED4554A3F6E903FCBF48DB1C2CF6C4240E764C3C3A4A3</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcSZGn8G8QRKqJc1yV8wErsBhCgy_E2UmCX5O9utZtj4ug?e=uel2DE" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>0C5D1A7814E50270A78AD3AE3C04E90C4D7803111567A04018B26C43CEA8D564</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eaj1r69kX5hNjzgb0xcOun0BWtd9sjq318O4FFi8bMKHvQ?e=n8wrM1" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>30184A2A2800733118F4CC711010AE523C9A3F0E9565617B1C2E9CF64AE21CF0</th>
    </tr>
  </tbody>
  </table> 
</div>

:::info
为了验证下载固件的完整性，您可以比较 SHA256 哈希值。 

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果生成的哈希值与 Wiki 中提供的 SHA256 哈希值匹配，则确认您下载的固件是完整且未损坏的。
:::

:::info
上述图像的源代码可以在 [这里](https://github.com/Seeed-Studio/Linux_for_Tegra) 找到。
:::

- **步骤 2：** 解压生成的文件

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **步骤 3：** 进入之前解压的文件目录并执行以下刷写命令

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始将系统镜像刷写到板子上。如果刷写成功，您将看到以下输出：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 4：** 使用板上的 HDMI 接口将板子连接到显示器，并完成初始配置设置

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

之后，板子将重新启动并准备好使用！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
</TabItem>

<TabItem value="Jetpack 6.1" label="Jetpack6.1">

- **步骤 1：** 下载与您使用的板子对应的系统镜像到您的 Ubuntu PC
<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>设备</th>
      <th>链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNMocOFBZNPqqC-W9uiIM4BgYUw-ZL0pk6juOVPFd_vqg?e=C8ldYX" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>6A2B3A71EE77E7000034351020FBF9A5260F944FB30B5DE672BF7897DEE87B5A</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfYrDXxD_oRCuk5nv8WmtqIBPY9FjkEHiAmsZDpvDj-sfQ?e=qxV5MG" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>EC94A1F9E10D07CE2C78D8C1B742575A84DA543CCD95564D8E0BEC823C0CA514</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeOq0sfMDhBEqZPX-ti_gJ0BzUdSGeFf5RrSdxFnQ70aNQ?e=GVr10a" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>547E541E40A133A2CDEB3FAC399850ABC108325BBF109771420DDBCAF19E5E29</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXK1GomjByJKnmt3OdE5Vq8BSqzYZm1MY_yD18YjmRplLw?e=dIWPKA" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>B7F400C225423C8BC4C00A5915C3C634D2D7B15145FE0735479E6AD7613D07E5</th>
    </tr>
  </tbody>
  </table> 
</div>

:::info
要验证下载的固件的完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果生成的哈希值与 Wiki 中提供的 SHA256 哈希值匹配，则确认您下载的固件是完整且未损坏的。
:::

:::info
上述图像的源代码可以在 [这里](https://github.com/Seeed-Studio/Linux_for_Tegra) 找到。
:::

- **步骤 2：** 解压生成的文件

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **步骤 3：** 进入之前解压的文件目录并执行以下刷写命令

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始将系统镜像刷写到板子上。如果刷写成功，您将看到以下输出：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>


- **步骤 4：** 使用板上的 HDMI 接口将 J401 连接到显示器，并完成初始配置设置：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据您的需求完成 **系统配置**。
:::

</TabItem>

<TabItem value="Jetpack 6.2" label="Jetpack6.2">

- **步骤 1：** 下载与您使用的板子对应的系统镜像到您的 Ubuntu PC
<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>设备</th>
      <th>链接</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdypjC_kT7RAqqBHytE_KLwBLU6fEpoQ5Rv_MWYk-lMszQ?e=VV0U9A" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>7273143FCC46E2F7441BCF5FE6B4043C<br />A6428E126C50373462EC3091959CE0AA</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXRpfNGzXmdCi36MrQYtzvABYW0gWcLGshzVhBiodVtPWQ?e=pO824v" target="_blank" rel="noopener noreferrer">下载</a></td>
      <th>0C07EC7C852DD72A7E8034965A274193<br />9B2DDA9C88AB9C6E4CB41E6264B95BDC</th>
    </tr>
  </tbody>
  </table> 
</div>

:::info
要验证下载的固件的完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果生成的哈希值与 Wiki 中提供的 SHA256 哈希值匹配，则表明您下载的固件是完整且未损坏的。
:::

:::info
上述图片的源代码可以在 [这里](https://github.com/Seeed-Studio/Linux_for_Tegra) 找到。
:::

:::note
请注意，由于启用 `super mode` 后功耗和热量增加，[reComputer Industrial J4011](https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html) 和 [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html) 无法在最高模式下稳定运行。因此，此更新不包括这两款产品。
我们目前正在设计新版本的 reComputer，敬请期待！
:::

- **步骤 2：** 解压生成的文件

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **步骤 3：** 进入之前解压的文件目录并执行以下刷写命令

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

现在将开始将系统镜像刷写到板子上。如果刷写成功，您将看到以下输出：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **步骤 4：** 使用板上的 HDMI 接口将 J401 连接到显示器，并完成初始配置设置：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
请根据您的需求完成 **系统配置**。
:::

</TabItem>

</Tabs>


<!-- 代码结束 -->


## 硬件和接口使用

要了解如何使用 reComputer Industrial 板上的所有硬件和接口，我们建议您参考我们准备的相关 Wiki 文档。

- [reComputer Industrial J20 硬件和接口使用](https://wiki.seeedstudio.com/cn/reComputer_Industrial_J20_Hardware_Interfaces_Usage)
- [reComputer Industrial J40, J30 硬件和接口使用](https://wiki.seeedstudio.com/cn/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage)

## 资源

- [reComputer Industrial 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-datasheet.pdf)
- [reComputer Industrial 参考指南](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson 设备和载板对比](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reComputer Industrial 3D 文件](https://files.seeedstudio.com/products/NVIDIA/Industrial/reComputer-Industrial.stp)
- [Seeed Jetson 系列产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 系列对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson 设备单页](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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