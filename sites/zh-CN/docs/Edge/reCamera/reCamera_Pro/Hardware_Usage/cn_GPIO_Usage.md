---
title: reCamera Pro GPIO 引脚使用指南
description: 本文介绍如何通过 sysfs 接口在 reCamera Pro 上导出、配置和使用 GPIO 引脚，并提供引脚编号计算公式和 Python 代码参考。
keywords:
  - reCamera
  - reCamera Pro
  - GPIO
  - sysfs
  - Linux
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_gpio_guide_legacy
draft: true
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-08-25'
updatedAt: '2026-08-26'
url: https://wiki.seeedstudio.com/cn/recamera_pro_gpio_guide_legacy/
---
<!-- 旧版页面（reCamera Pro wiki 重构，第 2 阶段）：此页面已被 Develop/gpio_pins.md（https://wiki.seeedstudio.com/cn/recamera_pro_gpio_guide/）取代，该文件现在使用原始 slug /recamera_pro_gpio_guide。此文件作为草稿（slug /recamera_pro_gpio_guide_legacy）保留以供历史记录，并从正式构建中排除。请不要链接到此处。 -->

# reCamera Pro GPIO 引脚使用指南

## 介绍

本文介绍如何在 reCamera Pro 上使用 GPIO 引脚。你将学习如何使用引脚编号计算公式确定目标 GPIO 引脚，通过 sysfs 接口导出并配置引脚方向和电平，以及使用 Python 脚本控制 GPIO 输出或读取输入电平。

:::note
在 reCamera Pro 上，仅有两个对外暴露的通用 GPIO，它们的输出电压范围为 12V 到 21V（取决于 DC-IN 输入），不适用于大多数设备。不过，你可以将扩展接口上的 UART 或 CAN 引脚重新配置为通用 GPIO，这些引脚输出标准的 3.3V 电平。
:::

## 定位 GPIO 引脚

首先，请参考下图找到你需要的 GPIO 引脚位置：

![扩展接口示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera-PRO_Expansion_CON.jpg)
![CAN 引脚示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/recamera_pro_can_gpio.jpg)

## 引脚编号计算公式

GPIO 引脚编号通过以下公式计算：

```
GPIO bank × 32 + offset within bank
```

在 bank 内的偏移量计算方式为：`组号 × 8 + 组内引脚号`。

例如，对于 **GPIO5_A2**：

- Bank 编号为 5
- 在 bank 内的偏移量为 `0 × 8 + 2 = 2`

因此，引脚编号为：

```
5 × 32 + 2 = 162
```

bank 字母到数字的映射关系如下：

| 字母 | 数字 |
| ------ | ------ |
| A      | 0      |
| B      | 1      |
| C      | 2      |
| D      | 3      |
| ...    | ...    |

## 导出 GPIO 引脚

首先，你需要访问设备的终端。可以通过以下任一方式实现：

1. 通过 SSH 连接到设备
2. 使用 WebUI 中的终端功能

### 进入 GPIO sysfs 接口目录

```bash
cd /sys/class/gpio
```

### 导出 GPIO 引脚

```bash
echo 162 > export
```

### 设置 GPIO 引脚方向

引脚方向支持以下两种模式：

- 输出：`out`
- 输入：`in`（默认模式）

```bash
echo out > direction
```

### 设置 GPIO 引脚电平

电平支持以下两种状态：

- 高电平：`1`
- 低电平：`0`

```bash
echo 1 > value
```

## Python 代码参考

下面的 Python 脚本演示了如何控制 GPIO 引脚输出高低电平：

```python
import os
import time

GPIO = 162  # The GPIO pin number calculated earlier

GPIO_PATH = f"/sys/class/gpio/gpio{GPIO}"

def write_file(path, value):
    with open(path, "w") as f:
        f.write(str(value))

# 1. Export the GPIO
if not os.path.exists(GPIO_PATH):
    write_file("/sys/class/gpio/export", GPIO)
    time.sleep(0.1)  # Wait for export to complete

# 2. Set to output mode (use 'in' for input mode)
write_file(f"{GPIO_PATH}/direction", "out")

# 3. Set high level
write_file(f"{GPIO_PATH}/value", 1)
time.sleep(1)

# 4. Set low level
write_file(f"{GPIO_PATH}/value", 0)
time.sleep(1)

# To read the pin level, you can use the following code:
# with open(f"/sys/class/gpio/gpio{GPIO}/value", "r") as f:
#     value = f.read().strip()
#     print(value)
```

## 资源

- [reCamera Pro 官方文档](https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持选项，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
