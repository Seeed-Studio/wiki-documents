---
description: XIAO ESP32S3(sense) With Zephyr(RTOS)
title: Zephyr(RTOS) 编程
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-ESP32S3-Zephyr-RTOS
last_update:
  date: 11/09/2023
  author: Chen Lei
---

# Zephyr(RTOS) 编程 XIAO ESP32S3

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32s3.png"/></div>

## 什么是RTOS

现如今嵌入式系统最重要的组件之一是**RTOS（Real-Time Operating System）** 也被称作为 **实时操作系统**，它负责从任务调度到执行应用程序的一切。

**RTOS**旨在提供可预测的执行模式。当处理的项目必须满足系统的时间限制时使用RTOS。 因此，与GPOS（通用操作系统）相比，RTOS通常重量轻、体积小，并且通常只提供在特定的硬件上运行特定类型的应用程序时所需的功能。在某些情况下，开发人员可以修改现有的RTOS，将其缩小到只提供特定应用程序所需的功能，和/或自定义其功能或性能特征。


## 什么是[Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/)操作系统是一个基于一个体积小的的内核，专为资源受限和嵌入式系统设计：从简单的嵌入式环境传感器和LED可穿戴设备到复杂的嵌入式控制器、智能手表和物联网无线应用。

## 功能

Zephyr提供了很多可以不断发展的功能，包括：

### 广泛的内核服务套件

Zephyr提供了许多常见的开发服务：

- 用于协作、基于优先级、非抢占式和抢占式线程的***多线程服务***，具有可选的循环时间切片。包括与POSIX pthreads兼容的API支持。
- 用于中断处理程序的编译时注册的***中断服务***。
- ***内存分配服务***是用于动态分配和释放固定大小或可变大小的内存块。
- 用于二进制信号量、计数信号量和互斥信号量的***线程间同步服务***。
- 用于基本消息队列、增强消息队列和字节流的***线程间数据传递服务***。
- ***电源管理服务***，如总体的、应用程序或策略定义的、系统电源管理和细粒度的、驱动程序定义的、设备电源管理。

### 多种调度算法

  Zephyr提供了一套全面的线程调度选择：
  - 合作和先占式的调度
  - 最早截止日期优先（EDF）
  - 实现“中断下半部分”或“tasklet”行为的元IRQ调度
  - 时间切片：在同等优先级的可抢占线程之间启用时间切片
  - 多种排队方式：
    - 简单链表就绪队列
    - 红黑树就绪队列
    - 传统的多队列就绪队列

### 蓝牙低能耗5.0支持

蓝牙5.0兼容（ESR10）和蓝牙低能耗控制器支持（LE链路层）。包括蓝牙网格和蓝牙资格认证蓝牙控制器。

- 具有所有可能的LE角色的通用访问配置文件（GAP）
- 通用属性配置文件（GATT）
- 配对支持，包括蓝牙4.2的安全连接功能
- 干净的HCI驱动程序抽象
- 将Zephyr作为控制器而非完整主机堆栈运行的原始HCI接口
- 使用多个流行控制器进行验证
- 高度可配置性

网状支撑：

- 中继、朋友节点、低功率节点（LPN）和GATT代理功能
- 支持两种配置承载（PB-ADV和PB-GATT）
- 高度可配置，适用于至少16k RAM的设备

*参考: [**Zephyr项目**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入门

- [官方FreeRTOS入门](https://docs.zephyrproject.org/latest/boards/xtensa/xiao_esp32s3/doc/index.html)

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>