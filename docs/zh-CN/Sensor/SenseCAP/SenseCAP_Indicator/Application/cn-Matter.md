---
description: SenseCAP Indicator - Matter Application Development
title: Matter - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- Matter
- ESP32S3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_Application_Matter
sidebar_position: 8
last_update:
  date: 2/28/2024
  author: guiying zhao
---

# SenseCAP 指示器 - Matter Application 开发

<iframe class="youtube-video" src="https://www.youtube.com/embed/LCIWqwmCZ54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 介绍

这是一个演示如何使用[Matter SDK](https://project-chip.github.io/connectedhomeip-doc/index.html)为您的SenseCAP指示器构建丰富的应用程序。 

SenseCAP指示器有一个触摸屏，这使它能够作为一个强大的家庭自动化界面。物质使这个过程比以往任何时候都容易，因为它去掉了很多复杂的配置方面。在Matter SDK的帮助下，人们可以快速扫描二维码，并将他们的设备配置到家庭网络上。 

在本文中，我们将介绍启动设备并运行演示程序所涉及的步骤。

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>
<br />

Matter SDK提供了一组标准的设备，允许访问它们的数据并将它们的状态上传到控制器。ESP-Matter是由Espressif作为ESP32系列soc的官方Matter开发框架开发的。 

为了让SenseCAP指示器与Matter一起工作，你需要遵循以下几个主要步骤:

1.    [安装esp-idf和esp-matter](#install_sdk) 
1. [配置环境和构建](#configure_and_build) 
1. [使用应用程序](#using_application) 
1. [进一步配置Home Assistant UI](#超越)

## 准备

在开始之前，请务必阅读SenseCAP指示板的[用户指南](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)，了解SenseCAP的软硬件信息。

## 安装 ESP IDF 和 ESP Matter {#install_sdks}

你需要遵循[ESP-Matter SDK文档提供的说明](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#getting-the-repositories)并安装ESP-IDF的5.0.1版本和ESP-Matter的1.1版本。 

安装这些版本后，请安装Seeed Studio提供的patch[应用提供的patch](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/tools/patch)。 

## 配置环境并构建{#configure_and_build} 

### 使用CLI来配置和构建

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

## 使用此应用 {#using_application}

一旦固件启动，屏幕就只显示二维码。打开您的家庭自动化的电话应用程序，并进入设备配置流程(取决于制造商)。 

在下面的示例中，您可以看到我使用Home Assistant移动应用程序连接到运行Matter Beta服务的Home Assistant Yellow。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-1.jpg"/></div>

扫描设备后，我的手机立即开始配置过程。配置过程安全地将您的凭据传递给设备，使其能够通过wifi连接到家庭自动化控制器设备。这样你就不需要在任何地方写wifi凭据了。 

配置完成后，设备将开始以10秒的间隔向家庭助理控制器报告其温度和湿度。

### 标准功能

<iframe class="youtube-video" src="https://www.youtube.com/embed/mBhrYeyQQeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

指示物应用程序允许以类似于标准固件的方式浏览传感器数据。加载后，设备会显示根据你的位置配置的时钟屏幕，给你一个准确的时间。屏幕上有事件来检测是否向右滑动和向左滑动，以循环时间、传感器显示和设置屏幕。


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
点击传感器进一步显示该传感器状态的附加信息，历史记录可以通过这种方式查看。 

设置屏幕允许配置设备的几个功能元素。可配置12小时或24小时时钟，时区可调，显示亮度可调。

### Matter Home Assistant Dashboard

要访问Matter Home Assistant Dashboard，从主时钟屏幕向下滑动。这个仪表板有多个不同的组件，这些组件与演示设备相关联。在配置过程中，这些设备创建了端点，可用于访问常见功能，如调暗灯或完全关闭灯。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-6.jpg"/></div>

在本示例中，两个可调光的灯与门锁一起设置。你可以看到，当你点击按钮时，home assistant也在更新，以反映这些变化。可以移动滑块来设置光线的亮度。 

从Home Assistant方面，设备可以根据需要启用、禁用或修改，SenseCAP指示器也会更新以反映它。通过这种方式，您可以在指示器设备上禁用或启用额外的自动化功能，并使屏幕实时反映它们的状态。 

使用中的家用控制器的虚拟仪表盘和自动化功能允许各种有趣的组合。使用SenseCAP指示器，您可以构建您自己的想象仪表板，以控制您的家庭环境中的设备。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-7.jpg"/></div>

## 进一步配置Home Assistant UI 

UI本身是使用[LVGL](https://lvgl.io/)构建的。有关配置LVGL的更多详细信息，请参阅[下面的文章](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display/)。 

仪表板的UI由带有回调事件设置的LGVL组件组成，以便将其数据持久化到本地存储和matter端点。虚拟仪表板控制器(`indicator_virtual_dashboard_controller.c`)负责在底层数据更改时更新表单并为其他使用者提交相关事件。 

在最初的示例中，已经设置了三个设备，并且matter模型中的底层逻辑处理从视图响应事件，并将数据持久化到matter端点或更新UI状态。 

一般来说，在更新UI和持久化时必须考虑以下因素:

- 在初始化过程中，`indicator_matter.cpp`模型的`indicator_matter_setup()`方法设置任何与Matter相关的设备。此外，还为视图事件设置了一个回调函数，以便事件端点随变化而更新。
- ` indicator_virtual_dashboardc `模型监听与虚拟仪表板关联的视图事件，并将数据持久化到存储中，以便在初始化时检索。
- 物质逻辑订阅关于修改过的物质数据的事件(无论是远程的还是本地的)
- 虚拟仪表板控制器根据需要处理表单状态的更新，以响应通过`indicator_matter.cpp`的Matter回调函数发送的事件。

## 资源

1. **Demo SDK**: SenseCAP指示器的Demo SDK可以在[GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)上找到。 
2. **用户指南**:提供SenseCAP指示板的软硬件详细信息。你可以在[这里](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)阅读它。 
3. **ESP-IDF入门指南**:该指南提供了配置和使用ESP-IDF来构建项目的完整步骤。你可以在[这里](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)访问它。 
4. **Matter安装指南**:如果你不熟悉ESP-Matter，本指南将帮助你安装和设置它。你可以在[这里](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html)找到它。 

## 技术支持 

**需要帮助你的SenseCAP指示器吗?我们是来帮助你的!**。 

如果您在学习本教程过程中遇到任何问题或问题，请随时联系我们的技术支持。我们永远在这里提供帮助! 

访问我们的[查看官方Discord频道](https://discord.com/invite/QqMgVwHT3X)提出您的问题或[GitHub讨论](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions)分享您想要的一切!
