---
description: 在 Seeed Studio reTerminal E 系列电子纸设备上使用 Zephyr RTOS，并提供 reTerminal E1001、E1002 和 E1003 的官方 Zephyr 开发板文档链接。
title: 使用 Zephyr 开发
keywords:
  - 电子纸显示屏
  - Zephyr
  - RTOS
  - reTerminal
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png
slug: /epaper_work_with_zephyr
sidebar_position: 11
last_update:
  date: 06/30/2026
  author: Citric
createdAt: '2026-06-30'
url: https://wiki.seeedstudio.com/cn/epaper_work_with_zephyr/
updatedAt: '2026-06-30'
---

# 使用 Zephyr 开发

[Zephyr](https://www.zephyrproject.org/) 是一个面向嵌入式设备的开源实时操作系统。当你需要一个面向量产的固件栈，并包含构建系统、基于 device tree 的硬件描述、内核服务、驱动以及上游开发板定义时，它会非常有用。

Zephyr 已经包含 **reTerminal E1001**、**reTerminal E1002** 和 **reTerminal E1003** 的官方开发板文档。本 Wiki 页面是 Seeed 电子纸的入口：先用它选择正确的开发板目标，然后按照官方 Zephyr 文档完成安装、构建、烧录和调试。

## 何时使用 Zephyr

当你的项目需要以下特性时，请使用 Zephyr：

- 结构化的 RTOS 开发流程；
- 上游开发板支持以及可长期维护的固件；
- 线程、定时器、队列和设备驱动等内核特性；
- 在多块嵌入式开发板之间保持一致的构建和烧录流程；
- 通过 Zephyr API 直接访问 ESP32-S3 外设。

如果你的目标是 Home Assistant 仪表盘、零代码页面设计，或类似 Arduino 的绘图 API，请从 [Seeed 电子纸显示屏总览](/cn/seeed_epaper_displays) 中对应的应用页面开始。Zephyr 最适合希望在 RTOS 层构建自定义固件的开发者。

## 支持的设备

在开始 Zephyr 开发之前，请准备好以下 reTerminal E 系列设备之一。

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:220, height:'auto'}}/></a></div></td>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:220, height:'auto'}}/></a></div></td>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:220, height:'auto'}}/></a></div></td>
    </tr>
    <tr>
      <td align="center">7.5" 黑白电子纸<br/>800 x 480</td>
      <td align="center">7.3" 全彩电子纸<br/>800 x 480</td>
      <td align="center">10.3" 黑白电子纸<br/>1404 x 1872，触控</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
    <tr>
      <td align="center"><code>reterminal_e1001/esp32s3/procpu</code></td>
      <td align="center"><code>reterminal_e1002/esp32s3/procpu</code></td>
      <td align="center"><code>reterminal_e1003/esp32s3/procpu</code></td>
    </tr>
  </table>
</div>

下面的快速入门命令示例使用 `procpu` 目标。关于双核详情、硬件特性表、支持的 runner 和调试选项，请使用你设备对应的官方开发板页面。

## 推荐阅读路径

首次配置 Zephyr 时，请按以下路径进行：

1. 打开 [Zephyr 入门指南](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)，并根据你的操作系统安装 Zephyr 工具链、Python 依赖、west 和 SDK。
2. 从[官方 Zephyr 文档](#官方-Zephyr-文档)章节中打开你设备对应的官方开发板页面。
3. 阅读开发板页面概览，确认 Zephyr 描述的显示尺寸、SoC、板载传感器、按键、LED、RTC 和电池相关硬件。
4. 使用开发板页面的 **Supported Features**（支持的特性）章节，检查哪些外设已经在 Zephyr 中完成描述。
5. 使用开发板页面的 **Programming and Debugging**（编程与调试）章节获取构建、烧录、复位和调试命令。

:::tip
在开发过程中始终保持官方 Zephyr 开发板页面处于打开状态。它是当前开发板目标、支持特性、runner 和构建选项的权威来源。
:::

## 快速命令模式

在 Zephyr 工作区准备就绪后，使用与你设备匹配的开发板目标构建 `hello_world` 示例。

<div class="table-center">
  <table align="center">
    <tr>
      <th>设备</th>
      <th>构建命令</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>west build -b reterminal_e1001/esp32s3/procpu samples/hello_world</code></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>west build -b reterminal_e1002/esp32s3/procpu samples/hello_world</code></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>west build -b reterminal_e1003/esp32s3/procpu samples/hello_world</code></td>
    </tr>
  </table>
</div>

然后烧录已构建的镜像：

```shell
west flash
```

如果开发板在烧录后仍停留在下载模式，请使用 Zephyr 文档中记录的复位选项：

```shell
west flash --reset-type watchdog-reset
```

关于 MCUboot、sysbuild、更快的烧录、OpenOCD 调试以及高级 runner 选项，请参考你设备官方开发板页面中的 **Programming and Debugging**（编程与调试）章节。

## 官方 Zephyr 文档

使用下面的链接作为 Zephyr 相关环境配置和开发板详情的主要参考：

<div class="table-center">
  <table align="center">
    <tr>
      <th>主题</th>
      <th>在你需要以下内容时使用</th>
      <th>链接</th>
    </tr>
    <tr>
      <td>Zephyr 入门</td>
      <td>安装 Zephyr、west、Python 依赖以及 Zephyr SDK。</td>
      <td><a href="https://docs.zephyrproject.org/latest/develop/getting_started/index.html" target="_blank" rel="noopener noreferrer">打开入门指南</a></td>
    </tr>
    <tr>
      <td>Zephyr 开发板</td>
      <td>搜索所有 Zephyr 支持的开发板并确认当前目标名称。</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/index.html" target="_blank" rel="noopener noreferrer">打开开发板索引</a></td>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td>为 reTerminal E1001 构建、烧录和调试 Zephyr 应用。</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1001/doc/index.html" target="_blank" rel="noopener noreferrer">打开 E1001 文档</a></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td>为 reTerminal E1002 构建、烧录和调试 Zephyr 应用。</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1002/doc/index.html" target="_blank" rel="noopener noreferrer">打开 E1002 文档</a></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td>为 reTerminal E1003 构建、烧录和调试 Zephyr 应用。</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1003/doc/index.html" target="_blank" rel="noopener noreferrer">打开 E1003 文档</a></td>
    </tr>
  </table>
</div>

## 相关 Seeed Wiki 页面

- [Seeed 电子纸显示屏总览](/cn/seeed_epaper_displays)
- [reTerminal E1001 入门指南](/cn/getting_started_with_reterminal_e1001)
- [reTerminal E1002 入门指南](/cn/getting_started_with_reterminal_e1002)
- [reTerminal E1003 入门指南](/cn/getting_started_with_reterminal_e1003)

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
