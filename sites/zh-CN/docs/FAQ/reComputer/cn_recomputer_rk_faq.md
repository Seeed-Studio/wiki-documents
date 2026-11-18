---
title: reComputer RK 常见问题
description: 关于 reComputer RK 系列在硬件兼容性、系统安装、连接性以及 AI 推理方面的常见问题解答。
slug: /recomputer_rk_faq
last_update:
  date: 11/06/2026
  author: doublelf
keywords:
  - reComputer RK FAQ
  - reComputer RK 故障排查
  - reComputer RK3588
  - reComputer RK3576
  - reComputer RK NPU
  - Rockchip RKNN
---

<div class="recomputer-faq-page">

# reComputer RK 常见问题

本页面包含针对 reComputer RK 的已验证解答。每个解答都会说明适用的产品型号和固件模式，并给出最近一次根据官方最新资料完成验证的日期。

## 在开始之前

- 确认具体的产品型号以及所基于的 SoC（RK3588 或 RK3576）。
- 在执行与版本相关的步骤前，先检查当前固件版本。
- 本页答案最近一次验证时间为 2026-11-01；如果你在更晚时间阅读，请重新核对文中链接的官方资料。

<!-- RECOMPUTER_FAQ_AUTO_START -->
## 文档与使用 {#documentation-and-usage}

### 在哪里可以找到 reComputer RK 的教程？ {#rk-tutorials-and-images}

**适用范围：** 整个 reComputer RK3576 和 RK3588 系列，适用于需要官方教程、镜像和安装流程的用户

**最近验证时间：** 2026-11-01

Wiki 位置：https://sensecraft.seeed.cc/ai-lab/en  
  镜像查找：https://armbian.com/boards

1. reComputer RK 系列的 wiki 已迁移到 reComputer AI Lab 平台，你可以在 Tutorials 下找到产品教程：https://sensecraft.seeed.cc/ai-lab/en； 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_tutorials.jpg' />  
    此外，该平台还提供 Models 和 Projects 等页面，你可以通过一条 Docker 命令运行一个模型或案例，更快速地了解设备性能。 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_model.jpg' />  <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_project.jpg' />  

2. 我们已将相关 RK 产品的镜像上传到 Armbian 官方仓库，你可以自行搜索：https://imager.armbian.com/； 

    我们也提供了如何烧录镜像的 wiki 教程：https://sensecraft.seeed.cc/ai-lab/en/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os

### reComputer RK3576/RK3588 能否从 M.2 NVMe SSD 启动系统？ {#rk3576-nvme-boot}

**适用范围：** reComputer RK3576/RK3588 系列，使用 M.2 NVMe SSD 作为系统盘

**最近验证时间：** 2026-11-01

可以。在系统已经烧录到 SSD 之后，先断电并取出 SD 卡；之后系统会自动从 SSD 启动。你可以参考该页面中的教程了解如何切换启动盘：https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os#dd

**注意：**

- 在烧录系统时，请务必使用我们提供的官方镜像。

**参考资料：**

- [在 reComputer RK3576 上将 Armbian 安装到 NVMe SSD | reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os#dd)

## 操作系统与固件 {#os-and-firmware}

### reComputer RK3588 设备的初始密码是什么？ {#rk3588-default-password}

**适用范围：** reComputer RK3588 板卡

**最近验证时间：** 2026-11-01

如果你直接购买的是标准版 reComputer RK3588，且账号未做过定制，则设备的初始用户名和密码为：root  - 1234

### reComputer RK3588 Dev Kit 会提供官方 Android 镜像吗？ {#rk3588-devkit-android-availability}

**适用范围：** reComputer RK3588 Dev Kit

**最近验证时间：** 2026-11-01

目前 reComputer RK3588 Dev Kit 官方支持的系统是 Armbian。尚未确认会发布官方 Android 镜像，也尚未确认任何发布时间。如果你的项目需要 Android 或其他操作系统，可以通过 ODM 定制合作评估定制支持；该路径与面向所有用户公开提供的官方镜像不同。

## 连接与网络 {#connectivity-and-networking}

### 如何在 reComputer RK3576 上使用 GMSL 摄像头，以及哪种解串器可用？ {#rk3576-gmsl-camera}

**适用范围：** 搭配外置 GMSL 转 MIPI CSI-2 解串器适配板的 reComputer RK3576 板卡

**最近验证时间：** 2026-11-01

可以。RK3576 可以通过外置 GMSL 解串器适配板接入 GMSL 摄像头。解串器会将 GMSL 串行数据转换为 MIPI CSI-2，RK3576 通过其 MIPI CSI 接口接收；MAX96712 是一个合适的解串器选择。同时也支持 H.265 硬件编码和录像：RK3576 内置 VPU，支持 H.264 和 H.265 硬件编码，芯片规格最高可达 4K@60 fps。

**参考资料：**

- [在 reComputer-RK 上使用 YOLOv11 进行目标检测](https://wiki.seeedstudio.com/cn/object_detection_with_yolov11_on_recomputer_rk/)
- [reComputer RK3576-30](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)

### reComputer RK3576-20 是否提供 I2C 引脚？ {#rk3576-20-i2c-pins}

**适用范围：** reComputer RK3576-20，用作 Raspberry Pi 替代

**最近验证时间：** 2026-11-01

reComputer RK3576-20 暴露了一个 40 针 GPIO 排针，其中包含两个 I2C 通道，其原理图可在此处获取：https://files.seeedstudio.com/wiki/reComputer_RK/Documents/recomputer_rk3576/RECOMPUTER%20RK3576_V1.0_SCH_2026.pdf。

**参考资料：**

- [reComputer RK3576 V1.0 原理图](https://files.seeedstudio.com/wiki/reComputer_RK/Documents/recomputer_rk3576/RECOMPUTER%20RK3576_V1.0_SCH_2026.pdf)

### 如何查看 reComputer RK3576 40 针排针的 GPIO 与复用引脚？ {#rk3576-40pin-pinmux}

**适用范围：** reComputer RK3576 系列 40 针 GPIO 排针，用于规划 UART、CAN、SPI 或 I2C 复用的硬件设计

**最近验证时间：** 2026-11-01

40 针排针最多可以复用出 6 路 UART。可以实现 4 路标准 UART（RS232、RS485 或 KNX），但需要复用，总共占用 8 个引脚；也可以实现 1 路带 CTS 和 RTS 的 UART（MG24）；可以实现 1 路 CAN，并且 40 针排针上的 CAN 是芯片原生信号，因此需要外接 CAN 收发器才能工作。由于复用较多，SPI 或 I2C 等功能可能无法同时使用。

1. 你可以在该 wiki 中查看设备的引脚测试和复用状态：https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/interface-usage-guidelines/use-recomputer-rk3576-hardware-interfaces-and-fan-control#gpio 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_rk3576_gpio.jpg' /> 

**参考资料：**

- [reComputer RK3576 硬件接口与风扇控制 | reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/tutorials)

### reComputer RK3588-30 能否接入 IP 摄像头并在其上运行目标检测？ {#rk3588-ip-camera-rtsp}

**适用范围：** reComputer RK3588-30，通过以太网连接 RTSP IP 摄像头进行视频分析

**最近验证时间：** 2026-11-01

可以。从能力上看，该设备完全支持 RTSP 摄像头输入：它具有两个 2.5 千兆以太网接口，其中一个支持 PoE，内置用于视频解码的 VPU 和用于计算的 NPU。

**参考资料：**

- [可打断的边缘端对话式语音 AI：构建、部署与测量结果](https://wiki.seeedstudio.com/cn/solutions/conversational-voice-ai/)
- [边缘安防告警：边界区域、越界和徘徊检测](https://wiki.seeedstudio.com/cn/solutions/edge-security/)

## 硬件与接口 {#hardware-and-interfaces}

### RK182x 加速卡与 reComputer RK3576 安装互相干涉，导致无法安装 {#rk1828-npu-interference}

**适用范围：** 搭配 RK1828 或 RM182X PCIe NPU 卡的 reComputer RK3576 板卡

**最近验证时间：** 2026-11-01

reComputer RK3576 已经针对该安装方式完成测试。在安装 RK182x 加速卡时，需要注意必须拆除加速卡原有的底部外壳：保留裸板加散热风扇，即可正常安装该卡。

### reComputer RK3588 支持哪些 MIPI-CSI 摄像头？ {#rk3588-csi-camera-support}

**适用范围：** 通过 MIPI-CSI 接口连接摄像头的 reComputer RK3588 系列

**最近验证时间：** 2026-11-01

目前确认可用的摄像头是 Raspberry Pi Camera Module 3（IMX708）。

**注意：**

- reComputer RK3588 的 CSI 接口与 Raspberry Pi 的设计不同，因此不能直接沿用 Raspberry Pi 摄像头生态。

**参考资料：**

- [边缘安防告警：边界区域、越界和徘徊检测](https://wiki.seeedstudio.com/cn/solutions/edge-security/)
- [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)

## 产品与服务 {#product-and-service}

### reComputer RK3588-40 能否运行 DeepSeek 或 Ollama 等本地 AI，并且是否支持 Windows 或 Linux？ {#rk3588-local-ai-os}

**适用范围：** 在 reComputer RK3588-40 上运行本地 LLM 或 VLM 模型

**最近验证时间：** 2026-11-01

可以，可用于本地 AI 部署。reComputer RK3588-40 支持广泛的 LLM 和 VLM 模型；你可以在 reComputer AI Lab 平台的 Models 页面查看已适配的模型。关于操作系统，官方支持的是基于 Linux 的 Debian；Windows 和 Debian 以外的其他 Linux 发行版目前尚未明确支持。

**注意：**

- 某个具体工具或模型（例如 DeepSeek 或 Ollama）是否可用，仍需结合模型版本、量化等级、可用内存和算力资源进行确认。

**参考资料：**

- [reComputer AI Lab - Models](https://sensecraft.seeed.cc/ai-lab/models)
- [reComputer RK3588-40](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html)

### reComputer RK3576/RK3588 支持哪些 PoE-PD 和 Hailo-8 M.2 配件，以及如何确认兼容性、SKU 和购买方式？ {#rk3588-40-accessories}

**适用范围：** reComputer RK3588-40（SKU 100086238），用于选择 PoE-PD 和 Hailo-8 M.2 配件

**最后验证时间：** 2026-11-01

适用于 reComputer RK3588 的 PoE-PD 模块尚未发布，因此目前还没有确认的 SKU，也没有关于是否单独销售的说明。其次是 Hailo-8 M.2 加速器：Seeed 表示确实存在一款与 reComputer RK3588-40 兼容的 Hailo-8 M.2 模块，但目前仅作为包含 RK3588-40 主机的定制套装提供，该模块无法单独购买；

**注意：**

- 针对定制批量方案，请索取报价。如果你从其他渠道购买 Hailo-8 模块，在做出决定前，请向卖家索取相关规格，并确认该 Hailo-8 模块与 RK3588-40 具有相同的兼容性

**参考资料：**

- [reComputer RK3588-40](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html)

<!-- RECOMPUTER_FAQ_AUTO_END -->

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
