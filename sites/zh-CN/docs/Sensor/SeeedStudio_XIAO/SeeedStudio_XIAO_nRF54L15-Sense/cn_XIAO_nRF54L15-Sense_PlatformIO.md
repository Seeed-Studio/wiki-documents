---
description: Seeed Studio XIAO nRF54L15 与 PlatformIO
title: XIAO nRF54L15 与 PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /cn/xiao_nrf54l15_with_platform_io
last_update:
  date: 7/4/2025
  author: Jason
  sidebar_position: 5
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformIO_nrf54l15.png" style={{width:600, height:'auto'}}/></div>

## PlatformIO 介绍

PlatformIO 是一个强大且高度可扩展的嵌入式系统开发生态系统。它无缝集成了对大量开发板和微控制器的支持，提供了无与伦比的灵活性。PlatformIO 的突出之处在于其卓越的可扩展性：即使您的特定开发板没有原生支持，其架构也允许直接的自定义开发板定义。

至关重要的是，PlatformIO 为熟悉 Arduino 的开发者架起了桥梁，通过简单地包含相关库，就能编译和部署 Arduino 风格的代码。本指南将引导您完成为 XIAO nRF54L15 设置 PlatformIO 的过程，并演示如何编译、上传和监控示例代码，使复杂的 Zephyr RTOS 开发变得非常容易上手。

## 为 XIAO nRF54L15 设置 PlatformIO

按照这些简化的步骤配置您的开发环境，并在 XIAO nRF54L15 Sense 上部署您的第一个应用程序。


### 为 VS Code 安装 PlatformIO IDE 扩展

如果您还没有安装，请直接在 Visual Studio Code 中安装 PlatformIO IDE 扩展。这个强大的扩展将 VS Code 转换为一个全面的嵌入式开发环境。

- 打开 VS Code。

- 转到扩展视图（Ctrl+Shift+X 或 Cmd+Shift+X）。

- 搜索 ["PlatformIO IDE"](https://platformio.org/platformio-ide) 并点击安装。


### 创建新的 PlatformIO 项目

在这里您可以选择任何一个开发版本来创建项目文件，我以 XIAO ESP32 C3 为例。

<table align="center">
  <tr>
      <th>操作一</th>
        <th>操作二</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>



### 为 XIAO nRF54L15 Zephyr 支持配置 platformio.ini

创建项目后，在项目目录的根目录中找到 platformio.ini 文件（在左侧的 VS Code 资源管理器中可见）。这个文件是您的 PlatformIO 项目配置的核心。

<table align="center">
  <tr>
      <th>操作三</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/platform54.jpg"/></div>
  </tr>
</table>


您需要用以下配置替换 platformio.ini 文件的全部内容：

```
[env:seeed-xiao-nrf54l15]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54l15
```
:::tip
如果您之前下载了其他 XIAO 库，必须在修改 platform.ini 文件之前手动删除它们，然后重新下载所需的库。
:::

Mac 路径：
`/Users/YourName/.platformio/platforms`

Windows 路径：
`C:\Users\000.platformio\platforms\Seeed Studio`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformmodify.jpg" style={{width:600, height:'auto'}}/></div>
<table align="center">
  <tr>
      <th>操作四</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/platformiozephyr.jpg"/></div>
  </tr>
</table>

您需要用以下配置替换 cMakeLists.txt 的内容
```
set(BOARD_ROOT "$ENV{ZEPHYR_BASE}/../../platforms/Seeed Studio/zephyr")
cmake_minimum_required(VERSION 3.13.1)

find_package(Zephyr REQUIRED HINTS $ENV{ZEPHYR_BASE})
project(blinky)

target_sources(app PRIVATE ../src/main.cpp) # If the main source file is.c, please change it to src/main.c
```
然后重新保存 platformio.ini 文件（Ctrl+S 或 Cmd+S）并等待其完全加载。

### 编译并上传您的第一个闪烁示例

现在，让我们用经典的"闪烁"示例来测试您的设置。这段代码将切换 XIAO nRF54L15 上的内置 LED。

用以下兼容 Zephyr 的 C 代码替换您的 src/main.cpp（或 src/main.c）文件的内容：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-blink" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


**接下来我们使用这段代码进行编译和烧录**

```cpp
/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

 #include <zephyr/kernel.h>
 #include <zephyr/device.h>
 #include <zephyr/drivers/gpio.h>
 #include <nrfx_power.h>

 /* 1000 msec = 1 sec */
 #define SLEEP_TIME_MS   1000

 /* The devicetree node identifier for the "led0" alias. */
 #define LED0_NODE DT_ALIAS(led0)

 static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

 int main(void)
 {
	 int ret;
	 bool led_is_on = true;
	nrfx_power_constlat_mode_request();
	 if (!gpio_is_ready_dt(&led)) {
		 return -1;
	 }

	 ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
	 if (ret < 0) {
		 return ret;
	 }

	 while (1) {
		 ret = gpio_pin_set_dt(&led, (int)led_is_on);
		 if (ret < 0) {
			 return ret;
		 }
		 led_is_on = !led_is_on;
		 k_msleep(SLEEP_TIME_MS);
	 }

	 return 0;
 }

```

现在，通过 USB 将您的 XIAO nRF54L15 连接到计算机。在 VS Code 中：

- 构建：点击 VS Code 底部 PlatformIO 工具栏中的"Build"图标（对勾），或使用 PlatformIO 侧边栏：PROJECT TASKS -> your_project_name -> General -> Build。

- 上传：构建成功后，点击 PlatformIO 工具栏中的"Upload"图标（右箭头），或使用 PlatformIO 侧边栏：PROJECT TASKS -> your_project_name -> General -> Upload。


<table align="center">
  <tr>
      <th>操作五</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blink.jpg" /></div>
  </tr>
</table>

终端中的输出应该显示编译和烧录过程成功。


### 观察结果

上传成功后，您的 XIAO nRF54L15 的内置 LED 应该开始以 1 秒间隔闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light.gif" style={{width:400, height:'auto'}}/></div>



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
