---
description: BLE
title: BLE
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_ESP32_BLE
last_update:
  date: 3/3/2024
  author: DuKaiyin
---
# **BLE**

[**示例**](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth)

这个 [目录](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth) 包含一系列的项目示例，演示了蓝牙功能，并提供了您可以复制并适应到自己项目中的代码

**使用示例**

在构建示例之前，请确保按照 ESP-IDF 入门指南确保您拥有所需的开发环境。

构建示例与构建任何其他项目相同：

- Step 1: 切换到您想要构建的新示例的目录。
在打开项目配置菜单之前，运行以下命令以选择要构建的正确芯片目标：

`idf.py set-target esp32s3`

（默认情况下，目标是esp32。有关所有选项，请参见 idf.py set-target --help）

- Step 2: 运行以下命令以打开项目配置菜单：

`idf.py menuconfig`

运行以下命令以打开项目配置菜单

- Step 3: 构建示例：

`idf.py build`

按照打印的说明进行烧录，或运行
`idf.py -p PORT flash`

# **技术支持**

   别担心，我们为您提供了支持！请访问我们的[Seeed官方Discord频道](https://discord.com/invite/QqMgVwHT3X)提出您的问题！

如果您有大量订单或定制需求，请联系 iot@seeed.cc
