---
description: XIAO ESP32S3 Sense 的 MicroPython
title: XIAO ESP32S3 项目 MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/XIAO_ESP32S3_Micropython
last_update:
  date: 08/30/2023
  author: Hendra
---

# XIAO ESP32S3 Sense(摄像头, Wi-Fi) 的 Micropython

MicroPython 是 Python 3 编程语言的精简高效实现，包含 Python 标准库的一个小子集，并针对在微控制器和受限环境中运行进行了优化。

自 2014 年首次推出以来，micropython 已经支持许多微控制器，包括 ESP32S3，它是 Xiao ESP32S3 Sense 开发板的主要大脑。

在本页面中，我将指导如何使用 micropython 简单易用的语法来使用 Xiao ESP32S3 Sense 的功能

## 硬件准备

我在这里使用的是 Seeed Studio XIAO ESPS3 Sense 开发板。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
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
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 非常感谢

<strong><font color={'8DC215'} size={"3"}>本wiki中使用的为XIAO ESP32S3 Sense开发板设计的固件是由我们的朋友shariltumin制作的，我们对此深表感谢。</font></strong>

## 入门指南

该固件专为XIAO ESP32S3 MicroPython编程而设计。我们将首先刷写固件，然后在其上使用示例。

### 步骤1. 刷写固件

通过打开设备管理器找到USB转串口地址

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

解压下载的zip文件并导航到文件夹。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/firmware%20folder.jpg" alt="pir" width={600} height="auto" /></p>

点击路径框，然后输入"CMD"并按回车

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/cmd_on_folder.jpg" alt="pir" width={600} height="auto" /></p>

您将被引导到cmd终端。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/on_cmd.jpg" alt="pir" width={600} height="auto" /></p>

使用pip命令安装esptool（确保已安装python 3）

```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

使用此命令擦除 Xiao ESP32S3 上的闪存

```cpp
esptool.py --port COMXX erase_flash
```

现在使用以下命令安装 micropython 固件

```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32s3  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 firmware.bin 
```

:::tip
将 COMXX 更改为您 PC 上的端口 COM 号码
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

### 步骤 2. 上传示例代码

现在我们将示例代码上传到 Xiao ESP32S3 sense 内部闪存。

在这部分中，我使用 thonny IDE，首先配置端口

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/configure_port_thonny.png" alt="pir" width={600} height="auto" /></p>

然后在视图菜单中勾选文件选项

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/check_the_files.png" alt="pir" width={600} height="auto" /></p>

导航到提取示例代码的文件夹，然后通过右键单击文件并选择如下图所示的选项来上传文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/upload_the_file.png" alt="pir" width={600} height="auto" /></p>

将所有示例代码上传到 xiao esp32s3 开发板后，根据您的本地 wifi 配置更改 streaming_server.py 文件和 Wifi.py 文件中的 wifi 凭据

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/wifi_configuration.png" alt="pir" width={600} height="auto" /></p>

### 步骤 3. 测试流媒体示例

在测试流媒体之前，请确保使用 pip 安装 opencv python 库

```cpp
pip install opencv-python
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/install_opencv.png" alt="pir" width={600} height="auto" /></p>

opencv python库成功安装后，我回到thonny并运行streaming_server.py，然后复制xiao ESP32S3开发板的IP地址

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_script.png" alt="pir" width={600} height="auto" /></p>

然后回到解压的zip文件夹，使用python的IDLE打开streaming_client.py，将IP地址部分更改为与xiao ESP32S3开发板相同的地址

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/change_ip.png" alt="pir" width={600} height="auto" /></p>

然后尝试运行该文件，您应该会看到一个新窗口显示来自Xiao ESP32S3 sense开发板的流媒体图像

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_client.jpeg" alt="pir" width={600} height="auto" /></p>

:::caution
启动流媒体示例时，Xiao ESP32S3 Sense开发板可能会变得相当热。
:::

## 更多内容

通过使用这些示例，您可以制作一个快速简单的CCTV项目，由于Xiao ESP32S3 sense体积小巧，该项目可以做到无缝集成

## 故障排除

如果摄像头初始化不成功（显示一帧后冻结）或无法重新连接到wifi，请尝试拔掉开发板并重新启动Thonny IDE。

## ✨ 贡献者项目

- 该项目由Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 感谢 [Hendra和shariltumin的努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35979545)，您的工作将被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

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
