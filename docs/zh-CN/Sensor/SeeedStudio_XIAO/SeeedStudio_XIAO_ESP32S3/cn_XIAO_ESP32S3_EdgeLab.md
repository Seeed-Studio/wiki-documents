---
description: SenseCraft Model Assistant 与 Seeed Studio XIAO ESP32S3 入门指南。
title: SenseCraft Model Assistant 与 XIAO ESP32S3 (Sense)
keywords:
- esp32s3
- xiao
- tinyml
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_edgelab
last_update:
  date: 10/04/2023
  author: LynnL4
---

# SenseCraft Model Assistant 与 Seeed Studio XIAO ESP32S3 入门指南

## 介绍

[SenseCraft Model Assistant](https://edgelab.readthedocs.io/en/latest/) 是一个专注于嵌入式 AI 的开源项目。我们针对实际应用场景优化了 OpenMMLab 的优秀算法，使实现更加用户友好，在嵌入式设备上实现更快、更准确的推理。

## 所需硬件

- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio Round Display for XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- Type-C 数据线

## 所需软件

- ESP-IDF v4.4
- SenseCraft Model Assistant v0.1.0
- 示例代码：[SenseCraft Model Assistant-example-esp32](https://github.com/Seeed-Studio/edgelab-example-esp32)

## 如何安装

### 安装 ESP-IDF

按照 [ESP-IDF 入门指南](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html) 的说明来设置工具链和 ESP-IDF 本身。

接下来的步骤假设此安装成功并且 [IDF 环境变量已设置](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables)。具体来说：

- 已设置 `IDF_PATH` 环境变量
- `idf.py` 和 Xtensa-esp32 工具（例如 `xtensa-esp32-elf-gcc`）在 `$PATH` 中

### 获取子模块

切换到项目的根目录并运行以下命令来获取子模块：

```
git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32
git submodule init
git submodule update
```

## 如何使用

### 构建示例

进入示例目录（`examples/<example_name>`）并构建示例。

设置 IDF_TARGET（对于 ESP32-S3 目标，需要 IDF 版本 `release/v4.4`）

```
idf.py set-target esp32s3
```

配置示例

```
idf.py menuconfig
```

- 在 `Component config` -> `SenseCraft Model Assistant Configuration` -> `Camera Configuration` -> `Select Camera Pinout` 中选择摄像头模块
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-camera.png)
- 在 `Component config` -> `SenseCraft Model Assistant Configuration` -> `LCD Configuration` -> `Select LCD Pinout` 中选择 LCD 模块
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-lcd.png)

要构建此项目，请运行：

```
idf.py build
```

### 加载并运行示例

要烧录（将 `/dev/ttyUSB0` 替换为设备串口）：

```
idf.py --port /dev/ttyUSB0 flash
```

监控串口输出：

```
idf.py --port /dev/ttyUSB0 monitor
```

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
