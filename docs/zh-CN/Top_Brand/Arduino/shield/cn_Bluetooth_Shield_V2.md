---
description: Bluetooth_Shield_V2
title: Bluetooth Shield V2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Bluetooth_Shield_V2
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shiled_v2.JPG" alt="pir" width={600} height="auto" /></p>

Bluetooth Shield 集成了一个串行蓝牙模块。它可以轻松与 Arduino/Seeedstudio 配合使用，实现透明的无线串行通信。您可以从 Arduino D0 到 D7 中选择两个引脚作为软件串口与 Bluetooth Shield 通信（D0 和 D1 是硬件串口）。该扩展板还有两个 Grove 连接器（一个是数字接口，另一个是模拟接口），供您安装 Grove 模块。

##   特性
---
*   输入电压：3.3V
*   波特率：9600, 19200, 38400, 57600, 115200, 230400, 460800
*   兼容 Seeeduino/Arduino
*   室内无障碍通信距离可达 10m
*   UART 接口（TTL），可编程波特率
*   默认波特率：9600，数据位：8，停止位：1，校验：无校验
*   默认配对码："1234"
*   完整的配置命令集
*   板载 PCB 天线

##   接口功能
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_V2.0_K.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>焊盘类型</h3></td>
    <td><h3>描述</h3></td>
  </tr>
  <tr>
    <td><h4>BT_IO</h4></td>
    <td><h4>蓝牙模块的 IO 端口，可控制：读取、写入。</h4></td>
  </tr>
  <tr>
    <td><h4>BT_RX</h4></td>
    <td><h4>蓝牙模块的 UART 数据输入。</h4></td>
  </tr>  
  <tr>
    <td><h4>BT_TX</h4></td>
    <td><h4>蓝牙模块的 UART 数据输出。</h4></td>
  </tr>
  <tr>
    <td><h4>两个 Grove 连接器</h4></td>
    <td><h4>一个是数字接口（D8 和 D9），另一个是 I2C/模拟接口（A4 和 A5）。</h4></td>
  </tr>
  </tbody></table>


##   演示

### 1：两个 Bluetooth Shield 连接

此演示将向您展示如何连接两个 Bluetooth Shield。

您需要两块 [Seeeduino V3.0](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7)，
一个 Bluetooth Shield 作为主设备，另一个作为从设备。

**硬件安装**

如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image0.png" alt="pir" width={600} height="auto" /></p>


确保跳线的正确连接
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image4.jpg" alt="pir" width={600} height="auto" /></p>


**下载代码并上传**

1.  您可以在 github 上下载代码，点击[这里](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip)，然后将其解压到 Arduino 的 libraries 文件夹中。

2.  打开 Arduino IDE，打开 File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Master_Button，然后您可以打开主设备的代码

3.  打开 Arduino IDE，打开 File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Slave_led，然后您可以打开从设备的代码

4.  点击 Upload 上传代码，如果您在如何开始使用 Arduino 方面有任何问题，请点击[这里](/cn/Getting_Started_with_Seeeduino)获取帮助。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_ide_1.jpg" alt="pir" width={600} height="auto" /></p>

**检查结果**

1.  完成向主设备和从设备上传代码后，同时重置两个设备

2.  您可以看到 LED 闪烁，表示设备正在初始化和连接。

3.  大约几秒钟后，LED 常亮，表示主设备和从设备已连接。

!!!Note
    如果没有观察到上述现象，请尝试拔掉电源并重新插入。


### 2：连接到智能手机

此演示将向您展示如何将 Bluetooth Shield 连接到智能手机。

我们需要一块 Seeeduino V3.0，一部具有蓝牙功能的智能手机。

通过蓝牙 SPP 应用程序

**硬件安装**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image1.png" alt="pir" width={600} height="auto" /></p>


**下载代码并上传**

1.  您可以在 github 上下载代码，点击[这里](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip)，然后将其解压到 Arduino 的 libraries 文件夹中。

2.  打开 Arduino IDE，File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Slave_Temperature，然后您可以打开代码

3.  点击 Upload 上传代码，如果您在如何开始使用 Arduino 方面有任何问题，请点击[这里](//Getting_Started_with_Seeeduino)获取帮助。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Demo2.jpg" alt="pir" width={600} height="auto" /></p>

**下载 SSP 应用程序**

这里我们使用 Android 手机，我的是小米 2A，打开 Google Play，搜索 bluetooth spp，您可以找到许多结果。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Find_spp.png" alt="pir" width={600} height="auto" /></p>

大多数这些应用程序都很有用，只需选择一个并尝试。

**获取温度**

安装 SPP 应用程序后，尝试将其连接到 SeeedBTSlave，配对码是："0000"
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_App_1.png" alt="pir" width={600} height="auto" /></p>


连接成功后，向 SeeedBTSlave 发送 't'，您现在可以获取温度：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_get_temp.png" alt="pir" width={600} height="auto" /></p>

##   资源
*   [Eagle格式的原理图和布局](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Buletooth_Shield_v2.0_sch_pcb.zip)

*   [模块数据手册](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Bluetooth_en.pdf)

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