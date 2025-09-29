---
description: Mbed扩展板
title: Mbed扩展板
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/mbed_Shield
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Shield_01.jpg)

Mbed扩展板是基于Mbed LPC1768原型开发板的Mbed应用板。试想一下，通过传感器的环境数据来控制以太网设备。它集成了一系列外部接口，例如CAN、以太网、USB和4个标准Grove插座，全部集成在一个单板上。Mbed扩展板还兼容其他标准Arduino扩展板，为您的Mbed提供更强大的扩展功能。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/mbed-shield-p-1390.html?cPath=132_134)

##   特性
---
*   标准扩展板形状设计
*   Arduino兼容基础引脚
*   多种板载接口：CAN、以太网、USB、Grove

##   硬件概览
---
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/mBed_Shield_Hardware_Overview.jpg)

##   入门指南
---
以下是如何读取以太网数据和可移动磁盘数据的简要说明。
### 连接

- 将Mbed原型开发板的USB连接器连接到计算机的USB端口。
- 等待新硬件提示。
- 下载[Mbed串口驱动程序](https://files.seeedstudio.com/wiki/mbed_Shield/res/MbedDriver.zip)并安装。
- 将Mbed原型开发板插入Mbed基础扩展板。

### 读取U盘数据

通用串行总线（USB）是当今计算机中最广泛使用的总线。USB特别设计用于标准化计算机与外设之间的连接。例如，键盘、鼠标、USB音频设备、打印机、扫描仪、磁盘驱动器或摄像头可以使用同一总线与计算机交换数据。为了将USB的所有强大功能提供给Mbed，开发了一个USB设备栈。

- 将U盘插入USB接口。
- 下载[MSCUsbHost.bin](https://files.seeedstudio.com/wiki/mbed_Shield/res/MSCUsbHost.zip)并将文件复制到Mbed磁盘。

:::note
    1) MSCUsbHost.bin文件是由Mbed在线编译器生成的。 2) 删除Mbed磁盘中出现的任何无关的bin文件。
:::
- 按下复位按钮。串口应接收到以下信息。

![](https://files.seeedstudio.com/wiki/mbed_Shield/img/MSCUsbHost.jpg)

### 读取以太网数据

此示例演示如何开始使用以太网功能。

- 将可用的以太网线连接到以太网接口。
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Shield1.jpg)
- 下载[TCPSocket_HelloWorld.bin](https://files.seeedstudio.com/wiki/mbed_Shield/res/TCPSocket_HelloWorld.zip)并将文件复制到Mbed磁盘。

:::note
    删除Mbed磁盘中出现的任何无关的bin文件。
:::
- 按下复位按钮。串口应接收到以下信息。
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Ethernet_Connector_Data.jpg)
- 打开网页，您可以查看返回的信息。
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Ethernet.jpg)


## 在线原理图查看器
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/mbed_Shield/res/Mbed_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   资源
---
- **[Eagle]**[Mbed扩展板Eagle文件](https://files.seeedstudio.com/wiki/mbed_Shield/res/Mbed_Shield_Eagle_File.zip)
- **[PDF]**[Mbed扩展板原理图文件](https://files.seeedstudio.com/wiki/mbed_Shield/res/mbed%20shield%20v0.9b%20Sch.pdf)
- **[PDF]**[Mbed扩展板PCB文件](https://files.seeedstudio.com/wiki/mbed_Shield/res/mbed%20shield%20v0.9b%20PCB.pdf)
- **[工具]**[MSCUsbHost](https://files.seeedstudio.com/wiki/mbed_Shield/res/MSCUsbHost.zip)
- **[工具]**[MbedDriver](https://files.seeedstudio.com/wiki/mbed_Shield/res/MbedDriver.zip)
- **[工具]**[TCPSocket_HelloWorld](https://files.seeedstudio.com/wiki/mbed_Shield/res/TCPSocket_HelloWorld.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>