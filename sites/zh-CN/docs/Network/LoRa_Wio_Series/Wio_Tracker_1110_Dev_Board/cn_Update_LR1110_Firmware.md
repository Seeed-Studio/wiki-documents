---
description: 使用 Semtech 官方 LR11xx Updater 工具在 Wio Tracker 1110 上更新 LR1110 固件
title: 在 Wio Tracker 1110 上更新 LR1110 固件
keywords:
  - Wio
  - Tracker
  - LR1110
  - 固件更新
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /update_internal_lr1110_firmware
sku: 114993186
sidebar_position: 8
last_update:
  date: 06/17/2026
  author: David Du
createdAt: '2026-06-17'
updatedAt: '2026-06-17'
url: https://wiki.seeedstudio.com/cn/update_internal_lr1110_firmware/
---

## 概述

Wio Tracker 1110 开发板基于 Wio-WM1110 无线模块构建，该模块集成了 Semtech 的 LR1110 LoRa® 收发器以及用于地理定位的多用途射频前端。本指南将说明如何使用 Semtech 官方的 LR11xx Updater 工具，更新嵌入在 Wio Tracker 1110 中的 LR1110 芯片固件。

:::note
LR11xx Updater 工具是由 Semtech 提供的参考实现，用于根据应用笔记 AN1200.57 – “LR1110: Upgrade of the Program Memory” 更新 LR1110 / LR1120 / LR1121 芯片的程序存储器。
:::

:::caution
在更新过程中**不要**手动重启或断电，否则可能会永久损坏芯片。
:::

## 前置条件

### 所需硬件

- Wio Tracker 1110 开发板 × 1
- 电脑（Windows / Linux / macOS）× 1
- USB Type‑C 线缆 × 1
- （可选）J‑Link 调试探针——通过 SWD 接口进行烧录

:::note
请注意，`Wio Tracker 1110 dev board`（SKU:114993186）与 `LPWAN Asset Tracker Dev Kit for Amazon Sidewalk`（SKU:114993187）之间存在差异。如果你计划将开发板用于 Sidewalk 开发，请注意你需要按照本指南升级 LR1110 固件，因为默认版本与 Sidewalk 要求不同。
:::

## 更新 LR1110 固件

1. 获取源代码，并准备 Zephyr 工作区环境：

```bash
# obtain the manifest repository from Seeed Studio's GitHub
git clone https://github.com/Seeed-Studio/SWSD006/tree/Wenzy/dev/samples/SWTL001_wio_tracker

# initialize the zephyr workspace
cd <your_workspace_path>/SWSD006-Wenzy-dev/
west init
west update
```

2. 从[此处](https://github.com/Lora-net/radio_firmware_images)下载所需固件，并将其放入 `include` 子目录中。只有 “transceiver” 固件可以与 Sidewalk 一起使用；不要使用 “modem” 固件。

3. 编辑 `app.c` 以包含该下载的头文件。（这里我们使用默认的 `lr1110_transceiver_0401.h`）

```c
# The target project path is: /samples/SWTL001_nrf52840_wm1110/src/swtl001/app.c
#include <lr1110_transceiver_0401.h>
```

4. 编译目标固件：

```bash
west build -p auto -b nrf52840_wm1110 -- -DRADIO=LR1110
```

你应该可以在以下路径找到编译好的文件：`/SWSD006-Wenzy-dev/samples/SWTL001_nrf52840_wm1110/build/zephyr/`

5. 你有两种方式烧录编译好的固件：

- **Wio Tracker 1110 支持 UF2 引导加载模式（推荐）：**
  1. 使用 USB Type‑C 线缆将开发板连接到电脑。
  2. 双击按下板上的 Reset 按钮。此时会出现一个名为 WM1110_BOOT 的大容量存储盘。
  3. 将编译好的[.uf2 文件](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWTLApp.uf2)拖入该磁盘。
  4. 烧录会自动开始，完成后该磁盘会自动卸载。

- **如果你更倾向于使用 J-Link 通过 SWD 进行烧录：**
  1. 使用 2×3、间距 1.2 mm 的探针连接到开发板背面的 SWD 调试接口。
  2. 烧录编译好的固件：
```bash
west flash
```

<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWD_pinout.png" alt="pir" width={600} height="auto" /></p>

<br />

6. 通过 USB 连接后，会出现一个 COM 端口（或 /dev/ttyACM*）。打开终端仿真器（例如 PuTTY、Screen、Minicom），并设置：

- **波特率**：115200

- 更新过程中的实时日志信息将会显示出来。

## 资源

- **[.uf2]** [预编译固件](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWTLApp.uf2)

- **[链接]** [Updater 工具 GitHub 仓库](https://github.com/Seeed-Studio/SWSD006/tree/Wenzy/dev/samples/SWTL001_wio_tracker)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>