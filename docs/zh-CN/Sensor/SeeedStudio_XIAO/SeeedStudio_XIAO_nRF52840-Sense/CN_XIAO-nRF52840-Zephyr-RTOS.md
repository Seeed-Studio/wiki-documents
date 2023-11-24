---
description: XIAO nRF52840(sense) With Zephyr(RTOS)
title:  Zephyr(RTOS) 编程
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-nRF52840-Zephyr-RTOS
last_update:
  date: 10/30/2023
  author: 吴飞飞
---

# Zephyr(RTOS) 编程 XIAO nRF52840(sense)


<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## 什么是RTOS

**RTOS** 是当今嵌入式系统最重要的组件之一，也称为**实时操作系统**, 它负责从任务调度到执行应用程序的所有工作。

**RTOS** 旨在提供可预测的执行模式。当处理必须满足系统的时间限制时，将使用 RTOS。因此，与GPOS（通用操作系统）相比，RTOS通常重量轻，体积小，并且通常只提供在特定硬件上运行特定类型的应用程序所需的功能。在某些情况下，开发人员可以修改现有的 RTOS，将其缩小到仅提供特定应用程序所需的功能，和/或自定义其功能或性能特征。


## 什么是 [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OS 基于占用空间小的内核，专为资源受限的嵌入式系统而设计：从简单的嵌入式环境传感器和LED可穿戴设备到复杂的嵌入式控制器、智能手表和物联网无线应用。

## 特征
Zephyr 提供了大量且不断增长的功能，包括：

### 广泛的内核服务套件

Zephyr 提供了许多熟悉的开发服务：

- 多线程服务，用于协作线程、基于优先级的线程、非抢占式线程和抢占式线程，具有可选的轮询时间切片。包括 POSIX pthreads 兼容 API 支持。
- 中断服务，用于中断处理程序的编译时注册。
- 内存分配服务，用于动态分配和释放固定大小或可变大小的内存块。
- 用于二进制信号量、计数信号量和互斥信号量的线程间同步服务。
- 线程间数据传递服务，用于基本消息队列、增强型消息队列和字节流。
- 电源管理服务，例如总体、应用程序或策略定义的系统电源管理和细粒度的驱动程序定义的设备电源管理。

### 多种调度算法

  Zephyr提供了一套全面的线程调度选项：
  - 协作式和抢占式调度
  - 最早截止日期优先 （EDF）
  - 实现“中断下半部分”或“任务let”行为的元 IRQ 调度
  - 时间切片：在同等优先级的抢占式线程之间启用时间切片
  - 多种排队策略：
    - 简单的链接列表就绪队列
    - 红/黑树就绪队列
    - 传统的多队列就绪队列

### 低功耗蓝牙 5.0 支持
蓝牙 5.0 兼容 （ESR10） 和低功耗蓝牙控制器支持（LE 链路层）。包括蓝牙网状网络和蓝牙认证就绪的蓝牙控制器。

- 具有所有可能的 LE 角色的通用访问配置文件 （GAP）
- 通用属性配置文件 （GATT）
- 配对支持，包括蓝牙 4.2 的安全连接功能
- 干净的 HCI 驱动程序抽象
- 原始HCI接口，用于将Zephyr作为控制器而不是完整的主机堆栈运行
- 通过多种常用控制器的验证
- 高度可配置

网格支持：

- 中继、友元节点、低功耗节点 （LPN） 和 GATT 代理功能
- 支持两种 Provisioning 承载（PB-ADV 和 PB-GATT）
- 高度可配置，适合至少具有 16k RAM 的设备
  
*参考资料: [**Zephyr项目**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 开始

- [官方 FreeRTOS 入口](https://docs.zephyrproject.org/latest/boards/arm/xiao_ble/doc/index.html)

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>