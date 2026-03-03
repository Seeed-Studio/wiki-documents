---
description: SenseCAP Indicator - Matter 应用程序开发
title: Matter - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- Matter
- ESP32S3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_Application_Matter
sidebar_position: 8
last_update:
  date: 8/28/2023
  author: Tim
---

# SenseCAP Indicator - Matter 应用程序开发

<div class="video-container">
<iframe class="youtube-video" src="https://www.youtube.com/embed/LCIWqwmCZ54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## 介绍

这是一个演示，展示如何使用 [Matter SDK](https://project-chip.github.io/connectedhomeip-doc/index.html) 为您的 SenseCAP Indicator 构建丰富的应用程序。

SenseCAP Indicator 具有触摸屏，这使其能够充当强大的家庭自动化界面。Matter 使这个过程比以往任何时候都更容易，因为它消除了配置的许多复杂方面。借助 Matter SDK 的帮助，用户可以快速扫描二维码并将设备配置到家庭网络中。

在本文中，我们将介绍让您的设备运行演示所涉及的步骤。

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br />

Matter SDK 提供了一套标准的设备，并允许访问其数据以及将其状态上传到控制器。ESP-Matter 是由乐鑫开发的官方 Matter 开发框架，适用于 ESP32 系列 SoC。

要让您的 SenseCAP Indicator 与 Matter 配合工作，您需要遵循几个主要步骤：

1. [安装 esp-idf 和 esp-matter](#install_sdks)
2. [配置环境和构建](#configure_and_build)
3. [使用应用程序](#using_application)
4. [进一步配置 Home Assistant UI](#going_beyond)

## 先决条件

在开始之前，请确保您已阅读 SenseCAP Indicator 板的[用户指南](/cn/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)，以熟悉其软件和硬件信息。

## 安装 ESP IDF 和 ESP Matter {#install_sdks}

您需要按照 [ESP-Matter SDK 文档提供的说明](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#getting-the-repositories)，安装 ESP-IDF 版本 5.0.1 和 ESP-Matter 发布版本 1.1。

安装这些版本后，请安装 Seeed Studio 提供的补丁 [应用提供的补丁](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/tools/patch)。

## 配置环境和构建 {#configure_and_build}

### 使用 CLI 配置和构建

```sh
~/esp/esp-idf/install.sh
~/.espressif/esp-matter/install.sh

. ~/esp/esp-idf/export.sh
. ~/.espressif/esp-matter/export.sh

cd examples/indicator_matter
idf.py set-target esp32s3
idf.py fullclean
idf.py erase-flash
idf.py build flash monitor
```

## 使用应用程序 {#using_application}

固件刷写完成后，屏幕开始时只显示二维码。打开您的家庭自动化手机应用程序，进入设备配置流程（根据制造商而有所不同）。

在以下示例中，您可以看到我使用 Home Assistant 移动应用程序连接到运行 Matter Beta 服务的 Home Assistant Yellow。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-1.jpg"/></div>

扫描设备后，我的手机立即开始配置过程。配置过程安全地处理将您的凭据传递给设备，使其能够通过 wifi 连接到家庭自动化控制器设备。这样您永远不需要在任何地方实际写入 wifi 凭据。

配置完成后，设备将开始以 10 秒的间隔向 home assistant 控制器报告其温度和湿度。

### 标准功能

<div class="video-container">
<iframe class="youtube-video" src="https://www.youtube.com/embed/mBhrYeyQQeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Indicator Matter 应用程序允许以类似于标准固件的方式浏览传感器数据。加载设备后显示时钟屏幕，该屏幕根据您的位置配置，为您提供准确的时间。屏幕具有检测向右和向左滑动的事件，以在时间、传感器显示和设置屏幕之间循环切换。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-2.jpg" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-3.jpg" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-4.jpg" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-5.jpg" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

点击传感器可以进一步显示该传感器状态的附加信息，并且可以通过这种方式查看历史记录。

设置屏幕允许配置设备功能的多个元素。可以配置12小时或24小时时钟，时区是可覆盖的，显示亮度是可调节的。

### Matter Home Assistant 仪表板

要访问 Matter Home Assistant 仪表板，请从主时钟屏幕向下滑动。此仪表板具有多个不同的组件，这些组件与 Matter 端的演示设备相关联。在配置过程中，这些设备创建了端点，可用于访问常见功能，如调暗灯光或完全关闭灯光。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-6.jpg"/></div>

在此演示案例中，设置了两个可调光灯和一个门锁。您可以看到，当您点击按钮时，home assistant 端也会更新以反映这些更改。可以移动滑块来设置灯光的亮度。

从 home assistant 端，可以根据需要启用和禁用或修改设备，SenseCAP Indicator 也会更新以反映这些更改。通过这种方式，您可以让其他自动化功能禁用或启用 Indicator 设备上的功能，并让屏幕实时反映其状态。

正在使用的家庭控制器的虚拟仪表板和自动化功能允许各种有趣的组合。使用 SenseCAP Indicator，您可以构建自己想象的仪表板来控制整个家庭环境中的设备。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-7.jpg"/></div>

## 进一步配置 Home Assistant UI {#going_beyond}

UI 本身是使用 [LVGL](https://lvgl.io/) 构建的。有关配置 LVGL 的更详细信息，请参阅[以下文章](https://wiki.seeedstudio.com/cn/using_lvgl_and_tft_on_round_display/)。

仪表板的 UI 由 LGVL 组件组成，设置了回调事件，使其数据既持久化到本地存储，也持久化到 matter 端点。虚拟仪表板控制器（`indicator_virtual_dashboard_controller.c`）处理更新表单并在底层数据更改时为其他消费者发布相关事件。

对于初始示例，已设置了三个设备，matter 模型中的底层逻辑处理响应来自视图的事件，并将数据持久化到 matter 端点或更新 UI 的状态。

通常，在更新 UI 并持久化到 Matter 时必须考虑以下因素：

- 在初始化过程中，`indicator_matter.cpp` 模型的 `indicator_matter_setup()` 方法设置任何相关设备以与 Matter 一起使用。此外，还为视图事件设置了回调，以便在更改时更新 matter 端点。
- `indicator_virtual_dashboard.c` 模型监听与虚拟仪表板相关的视图事件，并将数据持久化到存储中以便在初始化时检索。
- matter 逻辑订阅围绕修改的 matter 数据的事件（无论是远程还是本地）
- 虚拟仪表板控制器处理根据需要更新表单状态，以响应通过 `indicator_matter.cpp` Matter 回调在 Matter 控制器更改时发送的事件。

## 资源

1. **演示 SDK**：SenseCAP Indicator 的演示 SDK 可在 [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) 上获取。
2. **用户指南**：用户指南提供了关于 SenseCAP Indicator 板软件和硬件的详细信息。您可以在[这里](/cn/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)阅读。
3. **ESP-IDF 入门指南**：本指南提供了配置和使用 ESP-IDF 构建项目的完整步骤。您可以在[这里](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)访问。
4. **Matter 安装指南**：如果您是 ESP-Matter 的新手，本指南将帮助您安装和设置。您可以在[这里](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html)找到。

## 技术支持

**需要 SenseCAP Indicator 的帮助？我们随时为您提供协助！**

如果您在学习本教程时遇到任何问题或有任何疑问，请随时联系我们的技术支持。我们随时为您提供帮助！

访问我们的 [Seeed 官方 Discord 频道](https://discord.gg/kpY74apCWj) 提出您的问题，或访问 [GitHub 讨论区](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) 分享您想要的一切！
