---
description: 适用于 XIAO ESP32C6 的 MicroPython
title: XIAO ESP32C6 与 MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32c6_micropython
last_update:
  date: 08/30/2023
  author: Hendra
---

# 适用于 XIAO ESP32C6 的 Micropython

MicroPython 是 Python 3 编程语言的精简高效实现，包含 Python 标准库的一个小子集，并针对在微控制器和受限环境中运行进行了优化。

自 2014 年首次发布以来，micropython 已经支持许多微控制器，包括 ESP32 系列，但目前尚未正式支持 ESP32C6 芯片。此固件为自编译版本，官方固件正在开发中，请耐心等待。

在本页面中，我们将指导如何使用 micropython 简单易用的语法来使用 XIAO ESP32C6 的功能。

## 硬件准备

我在这里使用的是 Seeed Studio XIAO ESP32C6 开发板。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991254-seeedxiao-esp32c6-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 软件准备

在本指南中，我将使用 **Windows 10** 以及 Thonny IDE 和 esptool。为了使用 esptool，请确保在您的 Windows 操作系统上安装 Python 3 环境。在开始之前，请确保下载固件并安装 Thonny

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>固件和示例代码</th>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/ESP32C6-MicroPy/XIAO_ESP32C6_Micropython.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 非常感谢

<strong><font color={'8DC215'} size={"3"}>本wiki中使用的为XIAO ESP32C6板设计的固件是由我们的朋友宋志硕制作的，我们对此深表感谢。</font></strong>

## 入门指南

该固件专为XIAO ESP32C6 MicroPython编程而设计。我们将首先刷写固件，然后在其上使用示例。

### 步骤1. 刷写固件

通过打开设备管理器找到USB转串口地址

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

解压下载的zip文件并导航到文件夹。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205037972.png" alt="pir" width={600} height="auto" /></p>

点击路径框，然后输入"CMD"并按回车

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205105289.png" alt="pir" width={600} height="auto" /></p>

您将被引导到cmd终端。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022204711119.png" alt="pir" width={600} height="auto" /></p>

使用pip命令安装esptool（确保已安装python 3）

```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

使用此命令擦除 XIAO ESP32C6 上的闪存

```cpp
esptool.py --port COMXX --chip esp32c6 erase_flash
```

现在使用以下命令安装 micropython 固件

```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32c6  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 ESP32C6_MicroPython.bin
```

:::tip
将 COMXX 更改为您 PC 上的端口 COM 号码
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205457866.png" alt="pir" width={600} height="auto" /></p>

### 步骤 2. 上传示例代码

现在我们将示例代码上传到 XIAO ESP32C6 内部闪存。

在这部分中，我使用 thonny IDE，首先配置端口

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205437800.png" alt="pir" width={600} height="auto" /></p>

运行 `blinker.py` 示例程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220104960.png" alt="pir" width={600} height="auto" /></p>

## 通过 wifi 从 NTP 获取当前时间

### 步骤1：在 Thonny 中打开 `wifi_Ntp.py` 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220645986.png" alt="pir" width={600} height="auto" /></p>

### 步骤2：在第8行更改您的 wifi 路由器 ssid 和密码

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220714175.png" alt="pir" width={600} height="auto" /></p>

### 步骤3：运行代码

运行程序时，您可以在 shell 窗口中看到 XIAO 连接到指定的 wifi 并获取 NTP 网络时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220808948.png" alt="pir" width={600} height="auto" /></p>

## 故障排除

如果程序无法烧录，请尝试使用 BOOT 按钮和 RST 按钮将开发板设置为启动下载模式

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 感谢 [Hendra 和 shariltumin 的努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=c6&pane=issue&itemId=59874459&issue=Seeed-Studio%7Cwiki-documents%7C1117)，您的工作将被[展示](https://wiki.seeedstudio.com/contributors/)。

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
