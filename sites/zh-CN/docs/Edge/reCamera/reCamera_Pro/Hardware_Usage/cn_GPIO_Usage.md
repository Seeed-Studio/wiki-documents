---
title: reCamera Pro GPIO 引脚使用指南
description: 本文介绍如何在 reCamera Pro 上通过 sysfs 接口导出、配置和使用 GPIO 引脚，并提供了引脚编号计算公式与 Python 代码参考。
keywords:
  - reCamera
  - reCamera Pro
  - GPIO
  - sysfs
  - Linux
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_gpio_guide
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: "2026-08-25"
updatedAt: "2026-08-25"
url: https://wiki.seeedstudio.com/cn/recamera_pro_gpio_guide/
---

# reCamera Pro GPIO 引脚使用指南

## 简介

本文介绍如何在 reCamera Pro 上使用 GPIO 引脚。您将学习如何根据引脚编号计算公式确定目标 GPIO，通过 sysfs 接口导出并配置引脚方向与电平，以及使用 Python 脚本控制 GPIO 输出或读取输入电平。

:::note
在reCamera Pro 上，引出的普通GPIO就只有两个，而且输出的电压是12v~21v之间(与DC-IN输入相关)的，并不适用于绝大多数设备，但是我们可以将扩展接口上面的UART或者CAN引脚复用成普通的GPIO，这部分GPIO输出电压是标准的3.3V。
::: 

## 查找 GPIO 引脚

首先，请参考下图找到您需要使用的 GPIO 引脚位置：
![扩展接口图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera-PRO_Expansion_CON.jpg)
![CAN引脚图](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/recamera_pro_can_gpio.jpg)

## 引脚编号计算公式

GPIO 引脚编号的计算公式如下：

```
GPIO bank × 32 + bank内偏移
```

其中，bank 内偏移的计算方式为：`组内序号 × 8 + 引脚序号`。

例如，对于 **GPIO5_A2**：

- bank 编号为 5
- 组内偏移为 `0 × 8 + 2 = 2`

因此，引脚编号为：

```
5 × 32 + 2 = 162
```

bank 字母与数字的对应关系如下：

| 字母 | 数字 |
| --- | --- |
| A | 0 |
| B | 1 |
| C | 2 |
| D | 3 |
| ... | ... |

## 导出 GPIO 引脚

首先，您需要进入设备的终端界面。可以通过以下两种方式：

1. 通过 SSH 连接设备
2. 通过 WebUI 上的终端功能

### 进入 GPIO sysfs 接口

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

以下 Python 脚本演示了如何控制 GPIO 引脚输出高低电平：

```python
import os
import time

GPIO = 162  # 刚才计算的 GPIO 引脚号

GPIO_PATH = f"/sys/class/gpio/gpio{GPIO}"

def write_file(path, value):
    with open(path, "w") as f:
        f.write(str(value))

# 1. 导出 GPIO
if not os.path.exists(GPIO_PATH):
    write_file("/sys/class/gpio/export", GPIO)
    time.sleep(0.1)  # 等待导出完成

# 2. 设置为输出模式（输入模式则为 'in'）
write_file(f"{GPIO_PATH}/direction", "out")

# 3. 拉高电平
write_file(f"{GPIO_PATH}/value", 1)
time.sleep(1)

# 4. 拉低电平
write_file(f"{GPIO_PATH}/value", 0)
time.sleep(1)

# 如果需要读取引脚电平，可以使用以下代码：
# with open(f"/sys/class/gpio/gpio{GPIO}/value", "r") as f:
#     value = f.read().strip()
#     print(value)
```


## 资源

- [reCamera Pro 官方文档](https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>