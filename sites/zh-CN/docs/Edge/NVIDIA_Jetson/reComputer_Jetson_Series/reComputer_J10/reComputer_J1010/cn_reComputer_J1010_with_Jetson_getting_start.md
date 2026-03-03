---
description: 将 JetPack 刷写到 reComputer J4012（J401 载板）
title: reComputer J1010 入门指南
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_J1010_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# reComputer J1010 入门指南

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061362-recomputer-j1010-first.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 介绍

reComputer J1010 是一款基于 NVIDIA Jetson Nano 4GB 生产模块构建的紧凑型边缘计算机，配备 128 个 NVIDIA CUDA® 核心，提供 0.5 TFLOPs（FP16）算力来运行 AI 框架和应用程序，如图像分类、目标检测和语音处理。生产模块提供 16GB eMMC、更长的保修期，以及在生产环境中 5-10 年的运行寿命（[Jetson FAQ](https://developer.nvidia.com/embedded/faq)）。我们还有基于 Jetson Xavier NX 模块构建的 reComputer [J20 系列](https://www.seeedstudio.com/reComputer-J2021-p-5438.html?queryID=14111cbf2ca4f2951fd8a4c1762eb435&objectID=5438&indexName=bazaar_retailer_products)，为更复杂的 AI 工作负载提供 21 TOPS AI 性能。

除了 Jetson 模块，reComputer J1010 还包括 [J101 载板](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html)，板载 microSD 卡插槽、1×USB 3.0、2×USB2.0、HDMI、M.2 Key E 用于 WiFI、LTE 和蓝牙、RTC、Raspberry Pi GPIO 40 针接口等，以及散热器和铝制外壳。设备已预装 Jetpack 4.6.1，只需插入 USB C 5V/3A 电源、键盘、鼠标和网线，您就可以开始您的嵌入式 AI 之旅！如果您需要更多 USB 3.0 接口和板载 M.2 key M 来连接 SSD，您可以选择 reComputer J1020。

注意：我们收到客户询问，他们需要比 16GB eMMC 更大的存储空间。对于 2022 年 7 月 30 日之后的订单，我们在 reComputer J1010 的[载板](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html)上增加了 microSD 卡插槽。请查看将启动镜像写入 microSD 卡和调整 I/O 速度的[指南](https://wiki.seeedstudio.com/cn/J1010_Boot_From_SD_Card/#flashing-system-from-j101-to-sd-card)。

## 特性

- **手掌大小的边缘 AI 完整系统：** 提供 0.5 TFLOPs（FP16）的现代 AI 算力和丰富的嵌入式开发接口。
- **开发和部署就绪：** 预装 NVIDIA JetPack 支持完整的 [Jetson 软件栈](https://developer.nvidia.com/embedded/develop/software)和业界领先的 [AI 开发者工具](https://wiki.seeedstudio.com/cn/Jetson-AI-developer-tools/)，用于构建强大的 AI 应用程序，如物流、零售、服务、农业、智慧城市、医疗保健和生命科学等
- **节能高效：** 由 Type C 5V/3A 供电，功耗低至 5 瓦。
- **可扩展：** 通过板载接口和 reComputer 外壳，可通过背面的安装孔壁挂安装。

## 规格参数

<table>
  <thead>
    <tr>
      <th>规格参数</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">NVIDIA Jetson Nano Developer Kit-B01</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>模块</td>
      <td colspan='2'>Jetson Nano 4GB（生产版本）</td>
      <td>Nano（非生产版本）</td>
    </tr>
    <tr>
      <td>存储</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD（不含卡）</td>
    </tr>
    <tr>
      <td>SD卡插槽</td>
      <td>包含（在载板上）</td>
      <td>-</td>
      <td>包含（在模块上）</td>
    </tr>
    <tr>
      <td>视频编码器</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td colspan='2' align='center'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)</td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>千兆以太网</td>
      <td colspan='3' align='center'>1×RJ45 千兆以太网连接器 (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 × USB 3.0 Type A; 2 × USB 2.0 Type A; 1 × USB Type C 用于设备模式; 1 × USB Type C 用于5V电源输入</td>
      <td>4 × USB 3.0 Type-A ；1 × Micro-USB 端口用于设备模式;</td>
      <td>4 × USB 3.0 Type-A; 1 × Micro-USB 端口用于5V电源输入或设备模式</td>
    </tr>
    <tr>
      <td>CSI 摄像头连接</td>
      <td colspan='3' align='center'>2×CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1×HDMI Type A</td>
      <td colspan='2' align='center'>1×HDMI Type A; 1×DP</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td>1× 风扇连接器 (5V PWM)</td>
      <td colspan='2' align='center'>1× 风扇 (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1×M.2 Key E</td>
      <td>1×M.2 Key E (已禁用)</td>
      <td>1×M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1×M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colspan='2'>RTC插座（预留）</td>
      <td>-</td>
    </tr>
    <tr>
      <td>多功能端口</td>
      <td colspan='3' align='center'>1× 40针排针</td>
    </tr>
    <tr>
      <td>电源供应</td>
      <td>USB-Type C 5V⎓3A</td>
      <td>DC插座 12V/2A</td>
      <td>DC插座 5V⎓4A；Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>机械尺寸</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm（含外壳）</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## 将 JetPack 刷写到 reComputer J1010

:::info
请参考此 [wiki](/cn/reComputer_J1010_J101_Flash_Jetpack) 页面获取更多信息，因为 J1010 使用 J101 载板。
:::

## 资源

[reComputer J1010 数据手册](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1010-datasheet.pdf)

[reComptuer J101 载板原理图](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J101_V2.0_SCH_240822.pdf)

[reComputer J1010 3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/J1010-Jetson-Nano.stp)

[Seeed Jetson 系列目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson 系列对比](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson 设备单页介绍](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
