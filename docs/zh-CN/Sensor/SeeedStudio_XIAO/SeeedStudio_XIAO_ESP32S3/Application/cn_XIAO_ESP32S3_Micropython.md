---
description: MicroPython for XIAO ESP32S3 Sense
title: MicroPython for XIAO ESP32S3 Sense
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/XIAO_ESP32S3_Micropython
last_update:
  date: 11/09/2023
  author: Chen Lei
---

# XIAO ESP32S3 Sense的麦克风（摄像头、Wi-Fi）

MicroPython是Python 3编程语言的精简高效实现，包括Python标准库的一小部分，并经过优化，可在微控制器和受限环境中运行。
自2014年首次启动以来，microython已经支持了许多微控制器，包括作为Xiao ESP32S3 Sense开发板主脑的ESP32S3。
在本页中，我将指导如何使用Xiao ESP32S3 Sense功能，使用microython中简单易用的语法
## 硬件准备

我在这里使用Seeed Studio XIAO ESPS3感应板。

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 软件准备

在本指南中，我将使用**windows10**以及ThonnyIDE和esptool。为了使用esptool，请确保在您的windows操作系统上安装Python 3环境。开始之前，请确保下载固件并安装Thonny
<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>Firmware and Sample Code</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}>  下载 ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

ftp://34.216.148.10:21//wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip

### 👍 非常感谢

<strong><font color={'FFFFFF'} size={"4"}> 为XIAO ESP32S3 Sense板设计的固件由我们的朋友shariltumin制作，我们非常喜欢他 </font></strong>


## 入门

固件仅设计用于XIAO ESP32S3 MicroPython编程。我们将首先闪存固件，然后在上面使用示例。

### 步骤1 flash固件

通过打开设备管理器找到usb到串行端口地址

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

提取下载的zip文件并导航到该文件夹。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/firmware%20folder.jpg" alt="pir" width={600} height="auto" /></p>

单击路径框，然后键入“CMD”并按enter键

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/cmd_on_folder.jpg" alt="pir" width={600} height="auto" /></p>

您将被引导到cmd终端。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/on_cmd.jpg" alt="pir" width={600} height="auto" /></p>

使用pip命令安装esptool（确保已安装python 3）
```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

使用此命令擦除Xiao ESP32S3上的闪存

```cpp
esptool.py --port COMXX erase_flash
```

Use this command to erase the flash memory on Xiao ESP32S3
```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32s3  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 firmware.bin 
```

:::提示
更改电脑上带有端口COM号的COMXX
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>



### 步骤2 上传示例代码

现在我们将示例代码上传到Xiao ESP32S3感应内部闪存。
对于这一部分，我首先使用thonny IDE配置端口

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/configure_port_thonny.png" alt="pir" width={600} height="auto" /></p>

然后在“视图”菜单上选中“文件”选项

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/check_the_files.png" alt="pir" width={600} height="auto" /></p>

导航到提取示例代码的文件夹，然后右键单击文件并选择如下图所示的选项来上传文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/upload_the_file.png" alt="pir" width={600} height="auto" /></p>

在所有示例代码上传到xiao esp32s3板后，根据您的本地wifi配置更改streamin_server.py文件和wifi.py文件上的wifi凭据

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/wifi_configuration.png" alt="pir" width={600} height="auto" /></p>


### 步骤3 测试流式传输示例

在测试流之前，请确保使用pip安装opencv python库

```cpp
pip install opencv-python
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/install_opencv.png" alt="pir" width={600} height="auto" /></p>

成功安装opencv-python库后，我回到thonny，运行streamin_server.py并复制xiao ESP32S3板的IP地址

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_script.png" alt="pir" width={600} height="auto" /></p>

然后返回到提取的zip文件夹，使用python的IDLE打开Stein_client.py，并将IP地址部分更改为与xiao ESP32S3板相同

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/change_ip.png" alt="pir" width={600} height="auto" /></p>

然后尝试运行该文件，您应该会看到一个新窗口显示来自Xiao ESP32S3感应板的流式图像

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_client.jpeg" alt="pir" width={600} height="auto" /></p>

:::警告
当推出流媒体示例时，Xiao ESP32S3感应板可能会变得相当热。
:::

## 更多的

通过使用这些例子，你可以制作一个快速而简单的CCTV项目，由于XIAO ESP32S3的感觉在尺寸上很小，这个项目可以是无缝的

## 故障排除
如果相机未成功初始化（显示一帧，然后冻结）或无法重新连接到wifi，请尝试拔下电路板并重新启动Thonny IDE。

## ✨ 参与者项目

- 此项目由Seeed Studio支持[参与者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- 感谢 [Hendra and shariltumin 努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35979545)并且你的作品将会被 [展览](https://wiki.seeedstudio.com/Honorary-Contributors/).

## 技术支持和产品讨论
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
