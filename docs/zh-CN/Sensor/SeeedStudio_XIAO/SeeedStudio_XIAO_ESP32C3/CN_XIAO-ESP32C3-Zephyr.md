---
description: ESP32C3与Zephyr - RTOS
title:  Zephyr(RTOS) 编程
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-ESP32C3-Zephyr
last_update:
  date: 10/31/2023
  author: Xin Ping Li
---

# Zephyr(RTOS) 编程 XIAO ESP32C3

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32c3.png"/></div>

## 什么是实时操作系统

当今嵌入式系统最重要的组成部分之一是**RTOS**，也称为**实时操作系统**，它负责从任务调度到执行应用程序的所有工作。

**实时操作系统** 旨在提供可预测的执行模式。当处理必须满足系统的时间限制时，采用实时操作系统。因此，与通用操作系统(General Purpose Operating System, GPOS)相比，RTOS通常重量轻、体积小，通常只提供在特定硬件上运行特定类型应用程序所需的功能。在某些情况下，开发人员可以修改现有的RTOS，缩小范围，只提供特定应用程序所需的功能，并/或自定义其功能或性能特征。

## 什么是[Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/)操作系统基于小内存内核，专为资源受限和嵌入式系统而设计:从简单的嵌入式环境传感器和LED可穿戴设备到复杂的嵌入式控制器，智能手表和物联网无线应用。

## 功能
Zephyr提供了大量且不断增长的功能，包括:

### 广泛的内核服务套件

Zephyr提供了许多熟悉的开发服务:

- *多线程服务*用于协作，基于优先级，非抢占和抢占线程，可选轮循时间切片。包括POSIX pthreads兼容API支持。
*中断服务*用于编译时注册中断处理程序。
*内存分配服务*用于动态分配和释放固定大小或可变大小的内存块。
- *线程间同步服务*用于二进制信号量，计数信号量和互斥信号量。
- *线程间数据传递服务*用于基本消息队列、增强消息队列和字节流。
- *电源管理服务*，如总体，应用程序或策略定义，系统电源管理和细粒度，驱动程序定义，设备电源管理。

### 多种调度算法

Zephyr提供了一套全面的线程调度选择:
- 协同调度和抢占调度

- 最早截止日期优先(EDF)

- 元IRQ调度实现“中断下半部分”或“微线程”行为

-  时间切片:在具有相同优先级的可抢占线程之间进行时间切片

- 多重排队策略:

- 简单链表就绪队列

- 红/黑树就绪队列

- 传统的多队列就绪队列

### 低功耗蓝牙5.0支持
蓝牙5.0兼容(ESR10)和蓝牙低功耗控制器支持(LE链路层)。包括蓝牙网和蓝牙资格准备蓝牙控制器。

- 通用访问配置文件(GAP)，包含所有可能的LE角色

- 通用属性概要(GATT)

- 配对支持，包括蓝牙4.2的安全连接功能

- 干净的HCI驱动抽象

- 原始HCI接口运行Zephyr作为一个控制器，而不是一个完整的主机堆栈

- 与多个流行的控制器验证

- 高度可配置

Mesh 支持:

- 中继，朋友节点，低功耗节点(LPN)和GATT代理功能

- 支持两种配置承载器(PB-ADV和PB-GATT)

- 高度可配置，适合至少16k RAM的设备

*参考:[**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 开始

- [OXIAO ESP32C3 官方 Zephyr 入门指南](https://docs.zephyrproject.org/latest/boards/riscv/xiao_esp32c3/doc/index.html)

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>