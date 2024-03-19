---
description: Wi-Fi
title: Wi-Fi
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_ESP32_Wi-Fi
last_update:
  date: 3/3/2024
  author: DuKaiyin
---
# **Wi-Fi**






[**示例**](https://github.com/espressif/esp-idf/tree/master/examples/wifi)

这个 [目录](https://github.com/espressif/esp-idf/tree/master/examples/wifi) 包含了一系列演示 Wi-Fi 功能的项目示例，并提供了您可以复制和调整到自己项目中的代码。

**使用实例**

在构建示例之前，请确保按照 ESP-IDF 入门指南确保您拥有所需的开发环境。

构建示例与构建任何其他项目相同：

- Step 1: 切换到您想构建的新示例的目录。
在打开项目配置菜单之前运行以下命令选择要构建的正确芯片目标：

`idf.py set-target esp32s3`

(切换到您想构建的新示例的目录。在打开项目配置菜单之前运行以下命令选择要构建的正确芯片目标：)

- Step 2: 运行以下命令打开项目配置菜单：

`idf.py menuconfig`

这里大多数示例都有一个特定于项目的“示例配置”部分（例如，设置要使用的WiFi SSID和密码）

- Step 3: 构造实例:

`idf.py build`

按照打印的说明进行烧录，或运行
`idf.py -p PORT flash`




# **技术支持**

   别担心，我们为您提供了支持！请访问我们的[Seeed官方Discord频道](https://discord.com/invite/QqMgVwHT3X)提出您的问题！

如果您有大量订单或定制需求，请联系 iot@seeed.cc