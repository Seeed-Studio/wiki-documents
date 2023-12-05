---
description: XIAO SAMD21 With Zephyr(RTOS)
title: Zephyr(RTOS) 编程
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cnXIAO-SAMD21-Zephyr-RTOS
last_update:
  date: 10/26/2023
  author: 赵桂莹
---

# Zephyr(RTOS) 编程 XIAO SAMD21

<div align="center"><img width ="{100}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-samd21.png"/></div>

## 什么是RTOS

当今嵌入式系统最重要的组件之一是**RTOS**，也称为**实时操作系统**，它负责从任务调度到执行应用程序的所有事务。

**RTOS** 旨在提供可预测的执行模式。当处理必须满足系统的时间限制时，使用RTOS。因此，与GPOS（通用操作系统）相比，RTOS通常重量轻、体积小，并且一般只提供在特定硬件上运行特定类型应用程序所需的功能。在某些情况下，开发人员可以修改现有的 RTOS，缩小范围以仅提供特定应用程序所需的功能，和/或自定义其功能或性能特征。

## 什么是[Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) 操作系统基于小型内核，设计用于资源受限的嵌入式系统：从简单的嵌入式环境传感器和 LED 可穿戴设备到复杂的嵌入式控制器、智能手表和物联网无线应用。

## 特征
Zephyr 提供了大量且不断增长的功能，包括：

### 广泛的内核服务套件：

Zephyr 提供了许多熟悉的开发服务：

- *多线程服务*，用于协作、基于优先级、非抢占式和抢占式线程，具有可选的循环时间切片。包括 POSIX pthreads 兼容 API 支持。
- *中断服务*用于中断处理程序的编译时注册。
- *内存分配服务*用于动态分配和释放固定大小或可变大小的内存块。
- 用于二进制信号量、计数信号量和互斥信号量的*线程间同步服务*。
- 用于基本消息队列、增强消息队列和字节流的*线程间数据传递服务*。
- *电源管理服务*，例如总体、应用程序或策略定义的系统电源管理和细粒度、驱动程序定义的设备电源管理。

### 多种调度算法

  Zephyr 提供了一套全面的线程调度选择：
  - 协作式和抢占式调度
  - 最早的截止时间优先(EDF算法)
  - 实现“中断下半部分”或“tasklet”行为的元IRQ调度
  - Timeslicing: 在同等优先级的可抢占线程之间启用时间切片
  - 多种排队策略:
    - 简单的链表就绪队列
    - 红/黑树就绪队列
    - 传统的多队列就绪队列

### 低功耗蓝牙5.0支持
兼容蓝牙5.0 (ESR10)，支持蓝牙低功耗控制器(LE链路层)。包括蓝牙网格和蓝牙合格蓝牙控制器。

- 所有可能的LE角色的通用访问配置文件(GAP) 
- 通用属性配置文件(GATT) 
- 配对支持，包括蓝牙4.2的安全连接功能 
- 干净的HCI驱动抽象 
- 原始的HCI接口来运行Zephyr作为控制器，而不是完整的主机堆栈 
- 使用多个流行的控制器进行验证 
- 高度可配置

Mesh组网支持:

- 中继，朋友节点，低功耗节点(LPN)和GATT代理功能 
- 两种供应持有者都支持(PB-ADV和PB-GATT) 
- 
  高度可配置，适合至少16k RAM的设备

*参考 [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 开始

- [XIAO SAMD21 Zephyr(RTOS) 快速上手](https://docs.zephyrproject.org/latest/boards/arm/seeeduino_xiao/doc/index.html)

## 技术支持和产品讨论

感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>