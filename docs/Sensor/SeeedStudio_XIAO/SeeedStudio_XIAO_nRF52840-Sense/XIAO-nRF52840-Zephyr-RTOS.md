---
description: XIAO nRF52840(sense) With Zephyr(RTOS)
title:  XIAO nRF52840(sense) With Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-nRF52840-Zephyr-RTOS
last_update:
  date: 7/25/2023
  author: yulu Ji
---

# XIAO nRF52840(sense) With Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## What is RTOS

One of the most important components of today's embedded systems is the **RTOS** also known as **Real-Time Operating System**, which is responsible for everything from task scheduling to performing applications.

**RTOS** is designed to provide a predictable execution mode. When the processing must meet the time limit of the system, RTOS is used. Therefore, compared with GPOS (General Purpose Operating System), RTOS is usually light in weight and small in size, and generally only provides functions required to run specific types of applications on specific hardware. In some cases, developers can modify the existing RTOS, narrow it down to only provide the functionality required by a specific application, and/or customize its functionality or performance characteristics.


## What is [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

The [**Zephyr**](https://www.zephyrproject.org/) OS is based on a small-footprint kernel designed for use on resource-constrained and embedded systems: from simple embedded environmental sensors and LED wearables to sophisticated embedded controllers, smart watches, and IoT wireless applications.

## Feature
Zephyr offers a large and ever growing number of features including:

### Extensive suite of Kernel services

Zephyr offers a number of familiar services for development:

- *Multi-threading Services* for cooperative, priority-based, non-preemptive, and preemptive threads with optional round robin time-slicing. Includes POSIX pthreads compatible API support.
- *Interrupt Services* for compile-time registration of interrupt handlers.
- *Memory Allocation Services* for dynamic allocation and freeing of fixed-size or variable-size memory blocks.
- *Inter-thread Synchronization Services* for binary semaphores, counting semaphores, and mutex semaphores.
- *Inter-thread Data Passing Services* for basic message queues, enhanced message queues, and byte streams.
- *Power Management Services* such as overarching, application or policy-defined, System Power Management and fine-grained, driver-defined, Device Power Management.

### Multiple Scheduling Algorithms

  Zephyr provides a comprehensive set of thread scheduling choices: 
  - Cooperative and Preemptive Scheduling
  - Earliest Deadline First (EDF)
  - Meta IRQ scheduling implementing “interrupt bottom half” or “tasklet” behavior
  - Timeslicing: Enables time slicing between preemptible threads of equal priority
  - Multiple queuing strategies:
    - Simple linked-list ready queue
    - Red/black tree ready queue
    - Traditional multi-queue ready queue

### Bluetooth Low Energy 5.0 support
Bluetooth 5.0 compliant (ESR10) and Bluetooth Low Energy Controller support (LE Link Layer). Includes Bluetooth mesh and a Bluetooth qualification-ready Bluetooth controller.

- Generic Access Profile (GAP) with all possible LE roles
- Generic Attribute Profile (GATT)
- Pairing support, including the Secure Connections feature from Bluetooth 4.2
- Clean HCI driver abstraction
- Raw HCI interface to run Zephyr as a Controller instead of a full Host stack
- Verified with multiple popular controllers
- Highly configurable

Mesh Support:

- Relay, Friend Node, Low-Power Node (LPN) and GATT Proxy features
- Both Provisioning bearers supported (PB-ADV & PB-GATT)
- Highly configurable, fitting in devices with at least 16k RAM

*Reference: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Getting Started

- [Official Zephyr for XIAO BLE (Sense) Getting Started](https://docs.zephyrproject.org/latest/boards/seeed/xiao_ble/doc/index.html)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
