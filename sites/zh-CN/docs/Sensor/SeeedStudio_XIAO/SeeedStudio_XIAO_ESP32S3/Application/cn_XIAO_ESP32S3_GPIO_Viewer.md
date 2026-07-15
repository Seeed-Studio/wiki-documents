---
description: 基于 MicroPython 的 Seeed Studio XIAO ESP32-S3 (Sense) 实时 GPIO 监视器。通过使用 Thonny 的本地 Web 界面显示实时数字引脚状态（HIGH/LOW/TOUCH）。
title: Seeed Studio XIAO ESP32-S3 (Sense) GPIO 查看器
keywords:
  - GPIO Viewer
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_10.webp
slug: /XIAO_ESP32S3_GPIO_Viewer
last_update:
  date: 01/06/2026
  author: Utkarsh Bhor Patil, Garla Guo
createdAt: '2026-01-06'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/XIAO_ESP32S3_GPIO_Viewer/
---

# XIAO ESP32-S3 (Sense) GPIO 查看器

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_1.png" style={{width:1000, height:'auto'}}/></div>


> [XIAO ESP32-S3 (Sense) GPIO 查看器](https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer) 是一个基于 MicroPython 的 Seeed Studio XIAO ESP32-S3 (Sense) 实时 GPIO 监视器。通过使用 Thonny 的本地 Web 界面显示实时数字引脚状态（HIGH/LOW/TOUCH）。

## 网页上显示的信息
- **GPIO 和 I/O 监控**：显示实时数字 GPIO 状态、实时 ADC 读数和清晰的 GPIO 引脚编号映射。
- **运行时信息**：报告当前 CPU 频率和系统运行时间，以反映实时操作状态。
- **内存和存储**：显示堆内存使用情况、文件系统使用百分比、闪存大小以及支持的 PSRAM 可用性。
- **网络信息**：提供网络诊断，包括 IP 地址、连接的 Wi-Fi SSID、信号强度（RSSI）、MAC 地址、网关和 DNS 服务器。
- **固件和系统**：识别芯片型号、CPU 核心数、MicroPython 版本和固件构建信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_8.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_9.png" style={{width:800, height:'auto'}}/></div>

## 功能特性
- 显示实时 GPIO 数字状态和 ADC 读数，在原型设计和开发过程中实现可视化调试
- 作为完全运行在 XIAO ESP32-S3 (Sense) 上的轻量级嵌入式 Web 服务器运行，部署后无需外部软件或云服务
- 提供基于浏览器的界面，可从同一本地网络上的任何设备访问，实现实时监控
- 简化传感器输入、继电器和外围模块的验证，无需额外的调试工具
- 使用 MicroPython 构建，具有可读性和快速迭代能力，同时保持适合受限嵌入式系统的最小资源使用

## 构建过程
这是一个使用 MicroPython 和 Thonny IDE 的初学者友好工作流程，它将从最开始逐步指导您，从下载所需工具开始，到在您的 XIAO ESP32-S3 (Sense) 上运行 GPIOViewer 项目。

### 准备您的计算机
在我们接触 XIAO 开发板之前，让我们下载并安装 Thonny IDE（您的 Python 编辑器）。

1. 打开您的网络浏览器（如 Chrome 或 Safari）。
2. 访问 https://thonny.org – 这是官方网站。
3. 点击适合您计算机的下载链接（Windows、macOS 或 Linux）。
4. 下载完成后，运行安装程序并按照屏幕提示操作（点击 "Next" → "Install" → "Finish"）。

> Thonny 是您将用来编写和上传 Python 代码到开发板的程序。

### 安装所需的 Python 工具（Esptool）

为了为 MicroPython 准备开发板，我们需要一个名为 **esptool** 的小工具。

1. 在您的计算机上，找到并打开终端（Mac/Linux）或命令提示符（Windows）。
2. 输入以下内容并按回车：
```
pip install esptool
```
这将安装允许我们将 MicroPython 固件放到您的 XIAO 开发板上的工具。

### 下载 MicroPython 固件

我们需要一个特殊的二进制文件，让您的 XIAO 开发板运行 MicroPython。

1. 在网络浏览器中打开 https://micropython.org/download/ESP32_GENERIC_S3/
2. 点击下载最新的 .bin 文件（例如：ESP32_GENERIC_S3-xxxxx.bin）。
3. 将其保存到容易找到的地方，比如您的桌面。

### 将您的 XIAO ESP32-S3 (Sense) 连接到计算机

1. 使用 USB-C 线缆将 XIAO 插入您的计算机。

:::tip
如果开发板没有显示，请在插入时按住 BOOT 按钮。
:::

2. 连接后，您的计算机将为开发板分配一个 COM 端口（Windows）或 Mac/Linux 上的 tty 设备。

### 烧录（安装）MicroPython 到开发板

现在我们将 MicroPython 固件放到您的 XIAO 上。

**1. 擦除旧的闪存**

找到您开发板的端口，然后在终端/命令提示符中输入：
```
esptool --chip esp32s3 --port COMX erase-flash
```

:::tip
将 COMX 替换为您系统显示的任何端口，在 Mac 上可能是 /dev/tty.usbmodemXXXX 或 /dev/tty.usbserialXXXX，而在 Linux 上可能是 /dev/ttyUSB0 或 /dev/ttyACM0。
:::

**2. 写入固件**

仍在终端中，首先导航到 bin 文件的存储位置，然后写入闪存。

```
cd Desktop
esptool.py --chip esp32s3 --port COMX write_flash -z 0x0 ESP32_GENERIC_S3-xxxx.bin
```

确保文件名与您下载的 `.bin` 文件匹配。此命令在您的开发板上安装 MicroPython。

### 打开 Thonny 并连接到开发板

关闭终端，拔掉 XIAO 的 USB 线缆，等待 5 秒，然后重新插入 XIAO（只需插入即可，无需按任何按钮）。现在您将看到 MicroPython 正在运行！

1. 在您的计算机上打开 **Thonny**。
2. 转到 **Run → Configure Interpreter**。
3. 将 **Interpreter** 设置为 "MicroPython (ESP32)"。
4. 选择与您的 XIAO 匹配的**端口**。
5. 点击 OK。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_3.png" style={{width:800, height:'auto'}}/></div>

您现在应该在 Thonny 底部看到一个 MicroPython 提示符，您可以在其中输入 Python 命令。
尝试输入：
```
print("Hello from XIAO!")
```
然后按回车。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_4.png" style={{width:600, height:'auto'}}/></div>

### 下载 GPIOViewer 项目文件

现在您的开发板运行 MicroPython：

1. 打开浏览器并访问 GitHub 项目：https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer/tree/main
2. 点击 **Code → Download ZIP** 将项目保存到您的计算机。
3. 将下载的 ZIP 解压到您记得的文件夹中。

### 将项目上传到您的开发板

在 Thonny 中：

1. 打开 **Files** 侧边栏（View → Files）。
2. 导航到您解压的项目文件夹。您应该看到 boot.py 和 main.py。
3. 右键点击 `boot.py` → **Upload to / (root)**。
4. 对 `main.py` 重复此操作。

这将把 GPIOViewer 代码放到您的 XIAO 上，并设置它在开发板启动时运行。

### 配置您的 Wi-Fi（在 boot.py 内）

在启动项目之前：

1. 在 Thonny 中打开您上传的 `boot.py` 文件。
2. 找到您的 Wi-Fi SSID 和密码行。
3. 将 `"Your_WiFi_SSID"` 和 `"Your_WiFi_Password"` 替换为您家庭 Wi-Fi 的名称和密码。
4. 保存文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_5.png" style={{width:600, height:'auto'}}/></div>

### 运行并查看 GPIO 监视器

1. 在您的开发板仍然连接的情况下，在 Thonny 中按 **Run**（绿色按钮）。
2. 几秒钟后，您的开发板将连接到 Wi-Fi。
3. 查看 Thonny 输出 — 它将显示开发板接收到的 **IP 地址**。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_6.png" style={{width:800, height:'auto'}}/></div>

4. 在您的计算机上，打开一个**网络浏览器**并输入该 IP（例如 http://192.168.6.80:8080 ）。
5. 您将看到显示引脚状态的**实时 GPIO 仪表板**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_8.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_9.png" style={{width:800, height:'auto'}}/></div>

:::tip
1. 在 **Run** 之前，请将天线连接到 XIAO ESP32-S3 (Sense)。
2. 如果您无法打开网页，在 Thonny 重新连接到开发板后会出现以下情况：
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_7.png" style={{width:800, height:'auto'}}/></div>
  不用担心，这在 MicroPython + Thonny + Web 服务器设置中是正常行为。只需按一次开发板上的 Reset 按钮，或关闭 Thonny。
:::


## ✨ 贡献者项目

- 此项目由[贡献者项目](https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer)支持。
- 特别感谢 [Utkarsh Bhor Patil](https://github.com/TuzaaBap) 的专注努力。

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>