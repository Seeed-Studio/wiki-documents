---
description: 开始使用 reComputer J20
title: 开始使用 reComputer J20
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/recomputer_j20_with_jetson_getting_start
last_update:
  date: 9/3/2024
  author: Yaohui
---

# 开始使用 reComputer J20
<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110061363_preview-07_1.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 简介
reComputer J20 系列基于 Jetson Xavier NX 构建，是一款强大且紧凑的智能边缘设备，可为边缘提供高达 21TOPS 的现代 AI 性能。它结合了 NVIDIA Ampere™ GPU 架构和 64 位操作能力。

完整系统包括一个 NVIDIA Jetson Xavier NX 生产模块、一个散热器和一个电源适配器。reComputer J20 预装了 Jetpack 4.6，简化了开发过程，非常适合从事目标检测、自然语言处理、医学影像和机器人技术的边缘 AI 解决方案提供商在智慧城市、安全、工业自动化和智能工厂等行业中的部署。

## 特性

- **卓越的生产级 AI 性能：** 设备端处理，提供高达 21 TOPS 的 AI 性能，低功耗和低延迟
- **手掌大小的边缘 AI 设备：** 紧凑尺寸为 130mm x 120mm x 58.5mm，包括 NVIDIA Jetson Xavier NX 生产模块、散热器和电源适配器。支持桌面安装、墙面安装，适合任何场景
- **全面认证：** FCC、CE、RoHS、UKCA

## 规格参数

<table>
  <thead>
    <tr>
      <th>规格参数</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html?queryID=e8d0ae9b2e338e8a860f07dacef58f6e&objectID=5631&indexName=bazaar_retailer_products">reComputer J2022</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">reComputer J2021</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html?queryID=5577f61da645361a7aad9179bc04efc2&objectID=5629&indexName=bazaar_retailer_products">reComputer J2012</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html?queryID=639ef60cde4a38ccc9ff2f82070d4854&objectID=5628&indexName=bazaar_retailer_products">reComputer J2011</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>模块</td>
      <td>Jetson Xavier NX 16GB</td>
      <td>Jetson Xavier NX 8GB</td>
      <td>Jetson Xavier NX 16GB</td>
      <td>Jetson Xavier NX 8G</td>
    </tr>
    <tr>
      <td>AI 性能</td>
      <td colSpan='4' align='center'>21 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colspan='4' align='center'>384 核 NVIDIA Volta™ GPU</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='4'>6 核 NVIDIA Carmel ARM®v8.2 64 位 CPU 6 MB L2 + 4 MB L3</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>16 GB 128 位 LPDDR4x 59.7GB/s</td>
      <td>8 GB 128 位 LPDDR4x @ 59.7GB/s</td>
      <td>16 GB 128 位 LPDDR4x 59.7GB/s</td>
      <td>8 GB 128 位 LPDDR4x @ 59.7GB/s</td>
    </tr>
    <tr>
      <td>存储</td>
      <td colSpan='4' align='center'>16 GB eMMC</td>
    </tr>
    <tr>
      <td>视频编码器</td>
      <td colSpan='4' align='center'>2x 4K60 | 4x 4K30 | 10x 1080p60 | 22x 1080p30 (H.265) <br />
      2x 4K60 | 4x 4K30 | 10x 1080p60 | 20x 108p30 (H.264)</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td colSpan='4' align='center'>2x 8K30 | 6x 4K60 | 12x 4K30 | 22x 1080p60 | 44x 1080p30 (H.265)  <br />
      2x 4K60 | 6x 4K30 | 10x 1080p60 | 22x 1080p30 (H.264)</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan='4' align='center'>1*HDMI Type A; 1*DP</td>
    </tr>
    <tr>
      <td>CSI 摄像头</td>
      <td colSpan='4' align='center'>2*CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>网络</td>
      <td colSpan='4' align='center'>1* 千兆以太网 (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='2' align='center'>4 * USB 3.1 Type A 接口；
1* USB Type-C (设备模式)</td>
      <td colSpan='2' align='center'>4 * USB 3.0 Type A 接口；
1 * Micro-USB 接口用于设备模式</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td colSpan='4' align='center'>1* 风扇 (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='2' align='center'>RTC 2 针 RTC 插座</td>
      <td colSpan='2' align='center'>1*RTC 插座</td>
    </tr>
    <tr>
      <td>电源</td>
      <td colSpan='2' align='center'>12V/5A (圆柱插孔 5.5/2.5mm)</td>
      <td colSpan='2' align='center'>DC 插孔 19V 4.75A (最大 90W)</td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td colSpan='4' align='center'>130mm x 120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## 刷写 JetPack

:::info
reComputer J20 由 J202 承载板驱动。  
有关刷写 JetPack 的更多信息，请参考此 [wiki 页面](/cn/reComputer_J2021_J202_Flash_Jetpack)。
:::

## 接口使用

:::info
reComputer J20 由 J202 承载板驱动。接口设计与 J30/J40 相同。  
有关接口使用的更多信息，请参考此 [wiki 页面](/cn/J401_carrierboard_Hardware_Interfaces_Usage)。
:::


## 资源
[reComputer J202x 数据手册](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202x-datasheet.pdf)

[reComputer J202x 承载板原理图](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J202x 3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson 系列目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson 系列比较](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson 设备一览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>