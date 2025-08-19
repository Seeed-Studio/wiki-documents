---
description: reServer J2032
title: reServer Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reServer_J2032_Getting_Started
last_update:
  date: 05/15/2025
  author: w0x7ce
---

# reServer J2032 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/J2032_product_image.png" alt="pir" width={800} height="auto" /></p>

reServer J2032 是我们自豪地引入到 reThings 家族中的新一代强大的边缘 AI 计算设备，它采用了时尚的 reServer 外壳设计，将强大的单元封装在一个极其紧凑的形状中。这款智能小型服务器不仅能够轻松高效地从边缘到云端工作，还能将 AI 处理能力加入到解决方案中。

reServer J2032 配备了先进的 Nvidia Jetson™ Xavier NX 16GB 模块（可选 Jetson™ Xavier NX 8GB 模块），能够提供高达 21 TOPS 的性能来处理常见的 AI 任务。大量的 GPU 内存允许并行多神经网络处理。它具有双以太网端口，包括一个高速 2.5 千兆以太网端口和一个 1 千兆端口，同时支持包括 5G、LoRa® 和 BLE 在内的混合连接。reServer J2032 还具有双 SATA III 6.0Gbps 数据连接器，能够安装最多两个 3.5"/2.5" SATA 内部硬盘驱动器以获取更多存储空间。

同时，reServer 的紧凑设计使其能够高效地适应几乎任何服务器场景。reServer 的整洁结构还使得硬盘驱动器和扩展通信模块插槽的访问变得简单，从而便于安装、升级和维护。

通过双 SATA III 6.0Gbps 数据连接器，reServer 能够安装最多两个 3.5"/2.5" SATA 内部硬盘驱动器以获取更多存储空间。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Jetson-20-1-H2-p-5337.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 紧凑设计的桌面服务器，整体尺寸为 132mm x 124mm x 233mm
- 由 Nvidia Jetson™ Xavier NX 16GB 模块驱动
- 丰富的外设接口，包括双 LAN 端口（1 个 2.5 千兆端口和 1 个 1 千兆端口）、2 个 USB 3.2 Gen 2 Type-A、HDMI 端口和 DP 端口、1 个 M.2 Key B、1 个 Mini-PCIe 端口
- 支持混合连接，包括 5G、LoRa® 和 BLE（5G 和 LoRa® 需要额外模块）
- 双 SATA III 6.0Gbps 数据连接器，用于 3.5"/2.5" SATA 硬盘驱动器，机箱内部有足够空间容纳两个硬盘
- M.2 B-Key 用于扩展，例如 4G/5G 模块
- Mini-PCIe 端口用于扩展，例如 4G/5G 模块和 LoRaWAN® 模块（**WM1302-USB-XXXX**）
- 配备安静的冷却风扇和大型 VC 散热片，提供出色的散热性能
- 易于安装、升级和维护，打开机箱后可轻松访问内部组件
- 预装 NVIDIA Jetpack 4.6.1（Jetson™ Linux R32.7.1）

> LoRaWAN® 是 LoRa Alliance® 授权使用的标志。  
LoRa® 标志是 Semtech Corporation 或其子公司的商标。

## 规格

<div>
  <div className="document">
    <table><colgroup><col width="115px" /><col width="188px" /><col width="392px" /></colgroup>
      <tbody>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={12} align valign="middle" style={{width: 119}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">处理器</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">模块</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">NVIDIA® Jetson Xavier™ NX 16GB</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">AI 性能</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">21 TOPS</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">GPU</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">NVIDIA Volta 架构，384 NVIDIA CUDA® 核心和 48 Tensor 核心</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">CPU</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">6核 NVIDIA Carmel ARM®v8.2 64位 CPU，6 MB L2 + 4 MB L3</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">深度学习加速器</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x NVDLA 引擎</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">视觉加速器</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">7路 VLIW 视觉处理器</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">内存</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">8 GB 128位 LPDDR4x @ 51.2GB/s</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">存储</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">16 GB eMMC 5.1</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">视频编码器</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x 4K60 | 4x 4K30 | 10x 1080p60 | 22x 1080p30 (H.265)</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x 4K60 | 4x 4K30 | 10x 1080p60 | 20x 1080p30 (H.264)</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">视频解码器</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x 8K30 | 6x 4K60 | 12x 4K30 | 22x 1080p60 | 44x 1080p30 (H.265)</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x 4K60 | 6x 4K30 | 10x 1080p60 | 22x 1080p30 (H.264)</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">存储</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">支持 2 x 2.5''/3.5" SATA (HDD/SSD)，最高支持 SATA3 (已安装 2.5 英寸 256GB SSD x1，支持 SATA3)</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">协处理器</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">Raspberry Pi® RP2040 32位双核 ARM Cortex-M0+ @ 133MHz</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={6} align valign="middle" style={{width: 119}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">外部 I/O</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2.5G 以太网端口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">从 PCIe 转换</p>
            <div>RX:&nbsp;2.35&nbsp;Gbits/sec</div>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">TX: 1.4 ~ 1.6 Gbits/sec</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">1000M 以太网端口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">Jetson Xavier NX 的原生以太网接口</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">HDMI 接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">支持最高 HDMI2.0</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DisplayPort 接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">支持最高 DP1.4</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">USB3.1 GNE2 接口 x2</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">支持最高 10Gbit</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DC 插孔电源接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DC 12V @5A，2.5mm 中心针</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={16} align valign="middle" style={{width: 119}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">内部 I/O</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">M.2 KEY B 接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">带 USB3.2 GEN2，支持 5G/4G 无线模块</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">MiNi-PCIe 接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">支持 LoRa®/系列无线模块</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={2} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">SIM 卡槽</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">MiNi-PCIe 的顶层</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">M.2 的底层</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">SATA 电源接口 x2</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={2} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">支持 2.5 英寸或 3.5 英寸 HDD/SSD，最高支持 SATA3</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">SATA 数据接口 x2</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">主风扇接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">用于机箱风扇，仅支持 12V 风扇，底部风扇已安装</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">Jetson Xavier NX 风扇接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">仅支持 5V 风扇，铝制散热器冷却风扇已安装</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">RTC 电池接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">RTC 电池已安装</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">260Pin SODIMM 接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">用于 Jetson Xavier NX</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">用于 NX 的 USB TYPE-C 接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">用于 NX 编程</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">用于协处理器的 USB TYPE-C 接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">用于协处理器固件升级</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">自动电源开启头</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">短路进入按键模式，悬空进入自动电源开启模式</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x5Pin 调试头</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">调试</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">电源按钮</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">带绿色 LED</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">主动蜂鸣器</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={4} align valign="middle" style={{width: 119}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">网络</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={2} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">千兆以太网</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2.5G 以太网端口</p>
            <ul>
              <li>rx:&nbsp;2.35&nbsp;Gbits/sec</li>
              <li className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">tx:&nbsp;1.4&nbsp;~&nbsp;1.6&nbsp;Gbits/sec</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">1000M 以太网端口</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={2} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">无线连接</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">M.2 KEY B 接口，支持 5G/4G 无线模块</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">MiNi-PCIe 接口，支持 LoRa®/系列无线模块</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={3} align valign="middle" style={{width: 119}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">显示</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">LED1: SATA0 状态 LED</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={2} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">睡眠模式或未插入 SSD/HDD ----- LED 关闭</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">插入 SSD/HDD 且 PHY 准备好 ----- LED 打开</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">数据传输状态 ----- LED 闪烁</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">LED2: SATA1 状态 LED</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">LED3</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">M.2 无线模块状态 LED</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={3} align valign="middle" style={{width: 119}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">电源</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DC 插孔电源接口</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DC 12V @5A，2.5mm 中心针</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">电源按钮</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">电源开启</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">重启按钮</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">重启</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={4} align valign="middle" style={{width: 119}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">预安装</p>
          </td>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2.5 英寸 256GB SSD x1，支持 SATA3</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">铝制散热器冷却风扇</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">RTC 电池</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">底部风扇</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 119}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">尺寸</p>
          </td>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">132mm*124mm*233mm</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware1.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware2.png" alt="pir" width={1000} height="auto" /></p>

## 尺寸

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/reserverpm2.jpg" alt="pir" width={1000} height="auto" /></p>

## 刷写 JetPack

reServer J2032 已经预装了 JetPack，开箱即用。但如果您想重新刷写设备，请参考[此 Wiki](https://wiki.seeedstudio.com/cn/reServer_J2032_Flash_Jetpack)。

## 快速开始：reServer 外设和模块组装

!!! 注意:
    reServer J2032 的 EMMC 上预装了 **Jetpack 4.6.1**，这意味着您可以直接开始开发自己的应用程序。

### 所需硬件

在开始使用 reServer 之前，您需要准备以下硬件：

- reServer
- 电源适配器（已提供）
- 外接显示器
- HDMI/DP 线缆
- 键盘和鼠标

### 外设和模块组装

在本部分中，我们将介绍如何在 reServer 内安装或更换一些支持的硬件/模块。如果以下步骤不适用于您的使用场景，请跳过此部分。在阅读本部分之前，您可以参考页面末尾附带的 **组装指南手册**，以访问 reServer 的主板。

#### LoRaWAN® 模块 Mini-PCIe 插槽安装

!!! 注意:
    以下关于在 Mini-PCIe 插槽中安装 LoRaWAN® 模块的设置指南仅在以下模块上进行了测试：[WM1302-USB-US915](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-US915-p-4891.html?queryID=6e7ba3140d26416085ce7ea85c0be886&objectID=4891&indexName=bazaar_retailer_products) 或 [WM1302-USB-868](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html?queryID=6e7ba3140d26416085ce7ea85c0be886&objectID=4892&indexName=bazaar_retailer_products)。LoRaWAN® 模块不包含在设备中。

- **步骤 1.** 找到载板背面的 Mini-PCIe 插槽并安装 LoRaWAN® 模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032_wm1302_minipcie.png" alt="pir" width={500} height="auto" /></p>

- **步骤 2.** 连接天线线缆，并找到 reServer J2032 机壳背面的天线安装槽，该槽上应有一个橡胶插塞堵住孔。

!!! 注意:
     reServer J2032 不附带天线适配器和天线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/antenna.jpg" alt="pir" width={650} height="auto" /></p>

- **步骤 3.** 通过在 `Terminal` 中输入以下命令，将 reServer J2032 修改为可与 LoRaWAN® 模块一起使用：

```
sudo -i
cd /sys/class/gpio/
echo 268 > export; echo out > gpio268/direction; echo 1 > gpio268/value
echo 495 > export; echo out > gpio495/direction; echo 0 > gpio495/value
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/enable_lorawan.png" alt="pir" width={700} height="auto" /></p>

- **步骤 4.** 检查 LoRaWAN® 模块是否正确连接，打开 `Terminal` 并输入以下命令：

!!! 注意:
    以下启用 LoRaWAN® 模块的步骤仅在出厂默认的 Jetpack 4.6.1 上进行了测试和应用。

```
ls /dev/ttyACM*
```
您应该看到如下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/lsusb_lorawan.png" alt="pir" width={500} height="auto" /></p>

或者

```
lsusb -t
```
您应该看到如下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/lsusb_t_lorawan.png" alt="pir" width={700} height="auto" /></p>

- **步骤 5.** 要使用 LoRaWAN® 模块，请下载源代码：

现在让我们安装 git 并从 GitHub 下载 sx1302_hal（SX1302 LoRa® 网关的库和程序）：
```
sudo apt update
sudo apt install -y git
git clone https://github.com/Lora-net/sx1302_hal
```
进入 sx1302_hal 文件夹并构建程序：

```
cd ~/sx1302_hal
make
```

开始运行 LoRaWAN® 网关应用程序，以下是使用 [WM1302-USB-868](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html?queryID=6e7ba3140d26416085ce7ea85c0be886&objectID=4892&indexName=bazaar_retailer_products) 模块的示例，其中选择了配置文件 `global_conf.json.sx1250.EU868.USB`：
```
cd packet_forwarder/
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```
您应该看到类似如下的输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/lorawan_start.png" alt="pir" width={800} height="auto" /></p>

#### 4G/5G 模块 Mini-PCIe 安装

!!! 注意: 
     以下设置指南使用 **QC25-EUX 4G 模块**，该模块不包含在设备中。

- **步骤 1.** 找到载板背面的 Mini-PCIe 插槽并安装 LoRaWAN® 模块。

!!! 注意:
     您需要将标准 SIM 卡插入 reServer J2032 的 SIM 卡插槽以启用 4G/5G 网络。
     如果仔细观察，**SIM 卡托**有两层，**Mini-PCIe** 端口使用的是标记为 **SIM Slot 2** 的插槽，如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032_sim2_minipcie.png" alt="pir" width={550} height="auto" /></p>

- **步骤 2.** 连接天线线缆，并找到 reServer J2032 机壳背面的天线安装槽，该槽上应有一个橡胶插塞堵住孔。

!!! 注意:
     reServer J2032 不附带天线适配器和天线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/antenna.jpg" alt="pir" width={650} height="auto" /></p>


- **步骤 3.** 将 reServer J2032 修改为可与 **QC25-EUX 4G 模块**一起使用，在 `Terminal` 中输入以下命令：

```
sudo -i
cd /sys/class/gpio/
echo 436 > export; echo in > gpio436/direction;
export; echo in > gpio268/direction;
export; echo out > gpio393/direction; echo 1 > gpio393/value
echo 495 > export; echo out > gpio495/direction;
echo 1 > gpio495/value
echo 0 > gpio495/value
```

- **步骤 4.** 检查 **QC25-EUX 4G 模块**是否正确连接，启动并进入系统后，打开 `Terminal` 并输入以下命令：
  
!!! 注意:
    以下启用 **QC25-EUX 4G 模块**的步骤仅在 **Factory Default Jetpack OS Version 4.6.1** 上测试并适用。

```
lsusb -t
```

您应该看到如下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/4G_lsusb_t.png" alt="pir" width={650} height="auto" /></p>


- **步骤 5.** 启用 **QC25-EUX 4G 模块**连接到 4G 网络，请打开 ```Terminal``` 并输入：

使用插入的 4G 模块打开 minicom 串口监视器：
```
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB2 -b 115200m1
```
当串口连接打开后，输入 AT 并按下 'Enter'，您应该看到 OK。

在同一个 minicom 串口窗口中，请输入：
```
AT+QCFG="usbnet"
```
它会返回类似 +QCFG: "usbnet",0 的内容，但我们需要将其设置为 1（ECM 模式），因此输入以下命令：
```
AT+QCFG="usbnet",1
```
然后输入以下命令强制调制解调器重启：
```
AT+CFUN=1,1
```
然后您可以重启或等待一段时间，让模块从您的 SIM 卡运营商获取网络。

现在，如果您在 `Terminal` 中输入 `ifconfig`，您应该看到如下图所示的输出，表明您已从 SIM 卡移动运营商分配了一个 IP 地址：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/4Gnetwork.png" alt="pir" width={700} height="auto" /></p>


#### 4G/5G 模块 M.2 B-key 接口安装

!!! 注意: 
    reServer J2032 的 M.2 B-Key 支持 3042/3052(USB3.2 GEN2) 格式，支持 4G/5G 无线模块 **(reServer 不包含 4G/5G 模块)**。以下步骤中使用的是 SIM8202G-M2 5G 模块。

- **步骤 1.** 将 SIM8202G-M2 模块安装到 M.2 B-Key。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032_installM2.png" alt="pir" width={500} height="auto" /></p>


- **步骤 2.** 将天线线缆连接到模块。

!!! 注意:
     reServer J2032 不附带天线适配器和天线。要使用 **SIM8202G-M2** 5G 模块连接网络，您需要将天线连接到模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/antenna.jpg" alt="pir" width={650} height="auto" /></p>


- **步骤 3.** 将 reServer J2032 修改为可在 M.2 B-Key 接口上使用 **SIM8202G-M2 5G 模块**，在 `Terminal` 中输入以下命令：

```
sudo -i
cd /sys/class/gpio/
echo 419 > export; echo out > gpio419/direction; echo 0 > gpio419/valueexport; echo in > gpio268/direction;
echo 417 > export; echo out > gpio417/direction; echo 1 > gpio417/value
echo 266 > export; echo out > gpio266/direction; echo 1 > gpio266/value
```

- **步骤 4.** 检查 **SIM8202G-M2 5G 模块**是否正确连接，启动并进入系统后，打开 `Terminal` 并输入以下命令：
  
!!! 注意:
    以下启用 **SIM8202G-M2 5G 模块**的步骤仅在 **Factory Default Jetpack OS Version 4.6.1** 上测试并适用。

```
lsusb -t
```

您应该看到如下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/enable5G.png" alt="pir" width={700} height="auto" /></p>


**步骤 5.** 启用 **SIM8202G-M2** 5G 模块连接到 5G 网络

!!! 注意:
     您需要将标准 SIM 卡插入 reServer J2032 的 SIM 卡槽以启用 4G/5G 网络。
     如果仔细观察，**SIM 卡托**有上下两个插槽，**M.2 B-key** 接口使用的是 **下方插槽**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032_sim1.png" alt="pir" width={500} height="auto" /></p>


使用插入的 SIM8202G-M2 5G 模块打开 minicom 串口监视器：
```
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB2 -b 115200m1
```
当串口连接打开后，输入 `AT` 并按下 'Enter'，您应该在下一行看到 `OK`。
 
现在，为了能够连接到 4G/5G 网络，请按照以下命令安装 SIM8202G-M2 5G 模块所需的驱动程序以启用网络连接：

```
cd ~
wget https://files.seeedstudio.com/wiki/reServerJ2032/SIM8200.tar.gz
tar xvf SIM8200.tar.gz
sudo chmod 777 -R SIM8200/
cd SIM8200/
sudo ./install.sh
cd Goonline
make
sudo ./simcom-cm -i wwan0
```

现在，如果您在 `Terminal` 中输入 `ifconfig`，您应该看到如下图所示的输出，表明您已从 SIM 卡移动运营商分配了一个 IP 地址：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/5Gnetwork.png" alt="pir" width={700} height="auto" /></p>


#### HDD 安装

reServer 支持安装两个 3.5"/2.5" 内部硬盘驱动器以获取更多存储空间。
请按照以下步骤安装 HDD：
- **步骤 1.** 拆下螺丝并拉出支架。

- **步骤 2.** 使用螺丝将 HDD 固定到支架上。

- **步骤 3.** 将 HDD 支架推下以连接 HDD 和 SATA 接口。

- **步骤 4.** 使用螺丝固定 HDD 支架。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/07.png" alt="pir" width height="auto" /></p>


### 硬件接口

在本部分中，我们将介绍 reServer 的接口连接。

#### 电源连接

只需将产品包装盒内的 AC-DC 电源适配器与包装内但不在产品盒中的 AC 电源线连接，然后将其连接到 reServer 的 12V DC 插孔。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/reserver_power.png" alt="pir" width={300} height="auto" /></p>

#### 双 USB 3.1 接口

您可以通过双 USB 3.1 接口连接 USB 设备，例如键盘和鼠标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/reserver_usb.png" alt="pir" width={300} height="auto" /></p>

#### 显示连接

reServer 有两种连接显示器的方法。

**方法 1.** HDMI 接口  
**方法 2.** DP 接口  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/reserver_display.png" alt="pir" width={300} height="auto" /></p>

#### 以太网连接

reServer J2032 配备两个以太网端口，连接速度分别为 1000BASE-T 和 2.5GBASE-T。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/ethernetport.png" alt="pir" width={300} height="auto" /></p>

## 资源

- **[PDF]** [reServer 组装指南](https://files.seeedstudio.com/wiki/reComputer/reServer_Jetson_Assembly_Guide.pdf)
- [Seeed Jetson 系列目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 系列比较](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson 设备一页概览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>