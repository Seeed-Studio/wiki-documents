---
description: Arch GPRS
title: Arch GPRS
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arch_GPRS
last_update:
  date: 2/1/2023
  author: hushuxu
---



[![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_03.jpg) ](https://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73)

Arch GPRS 是一个支持 [mbed](http://mbed.org/handbook/mbed-SDK) 的开发板，集成了蜂窝网络模块和微控制器。它与 [Seeeduino Arch](https://seeeddoc.github.io/Seeeduino_Arch/) 类似，也使用了 LPC11U24 微控制器。通过 Arch GPRS，你可以使用 mbed 的 C/C++ SDK、库以及优化的在线开发工具快速构建原型。
Arch GPRS 上的蜂窝网络模块基于 EG-10 [GPRS](https://en.wikipedia.org/wiki/General_Packet_Radio_Service) 调制解调器。借助该模块，可以轻松通过基于 2G GSM 的蜂窝网络执行数据收集功能。

Arch GPRS 配备了标准的 **Arduino** 接口以及板载的 Grove 连接器。连接现有的 Shields 和 **Grove** 产品到 Arch GPRS 非常方便。你甚至可以直接将太阳能板连接到开发板上，以便电池通过太阳能板充电。低功耗设计保证了在户外使用时的便捷充电和长时间运行。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png) ](https://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73)

## 特性 ##

- 支持 mbed

  - 在线开发工具

  - 易于使用的 C/C++ SDK

  - 丰富的已发布库和项目

- NXP LPC11U24 控制器

  - 低功耗 ARM Cortex-M0 内核

  - 32KB Flash，8KB RAM，4KB EEPROM  

  - USB 设备，2xSPI，UART，I2C

- EG-10 模块  

  - 支持无线升级 EG-10 固件  

  - 支持外部 SIM 卡：1.8V/3.3V

  - 兼容标准 AT 指令

- 配备 RTC 功能

- 自动选择 USB5V 或太阳能板为电池充电

## 规格 ##

 |项目||规格|
 |--|--|--|
| 微控制器||LPC11U24|
| 供电模式||USB 或太阳能板|
 |充电电流 |太阳能板|100 mA|
 ||USB 5V|  400 mA|
 |工作频率||850/900/1800/1900 MHz|
 |接口类型|| USB Micro B|
 |SIM 卡||Class B(3V) 和 Class C(1.8V)|
 |GPRS 特性|GPRS 数据传输|下行 85.6kbps(最大); 上行 42.8kbps(最大)|
||编码格式|CS-1, CS-2, CS-3, CS-4|
|  功能支持||支持数据、语音、短信和传真|
 |EEPROM 容量||256 KB|

## 接口 ##

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Interface_Function.jpg)

黄色区域的设计与 Arduino 板非常相似，实际上它可以与我们的 Shield 板一起使用。其引脚分布与 Seeeduino Arch 几乎相同（D11 和 D13 互换），因此你可以点击 [这里](https://seeeddoc.github.io/Seeeduino_Arch/#Pinout) 查看每个引脚。

上图是 Arch GPRS 的正面视图，背面的微控制器 LPC11U24 未标出。

## 入门指南 ##

将 SIM 卡插入 Arch GPRS 的 SIM 插槽，你可以拨打电话或发送短信。
现在让我们开始吧。

**第一步：** 注册一个 mbed 账户

- 打开 [https://mbed.org](https://mbed.org)，点击登录或注册。如果你已经注册过，请直接点击登录。

**第二步：** 导入程序

- 打开链接：[https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/](https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/)，然后点击右上角的“Import this program”，你会看到如下图所示的页面。现在点击“import”完成 Arch GPRS 程序的导入。

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Test.png)

- 当程序导入到你的账户后，你可以在在线开发工具中看到它。

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Test1.png)

**第三步：** 编辑代码

- 打开并修改 Arch GPRS 程序中的 main.cpp 文件。以拨打电话为例，你需要将 "#define CALL_UP_TEST 0" 修改为 "#define CALL_UP_TEST 1"，并修改函数 "gprsTest.callUp("133xxxx5949");" 的参数。

**第四步：** 添加设备

- 点击右上角的“未选择设备”，然后在左下角点击“添加设备”，如下图所示。

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%87.jpg)

- 弹出如下页面。Arch GPRS 兼容 mbed LPC11U24 和 Seeeduino Arch，因此你可以选择“mbed LPC11U24”或 Seeeduino Arch。这里以选择 Seeeduino Arch 为例。

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%871.jpg)

- 进入 Seeeduino Arch 页面并点击“添加到 mbed 编译器”，现在你成功完成了 Seeeduino Arch 的添加。返回 mbed 编译器并点击“未选择设备”。点击左下角的 Seeeduino Arch 后会出现如下图所示的页面：

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%872.jpg)

- 点击“选择平台”后，你可以在 mbed 在线编译器中看到你选择的开发板。

**第五步：** 编译、下载

- 点击“编译”，当 mbed IDE 生成一个 bin 文件时会出现“成功！”提示。你需要将 bin 文件保存到你的电脑。

**第六步：** 更新固件

- 使用 USB Micro B 数据线将 Arch GPRS 的 USB 端口连接到你的电脑，并长按按钮，Arch GPRS 会作为名为 CRP DISABLD 的 USB 存储设备出现。

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/A_usb_device.jpg)

- 打开 CRP DISABLD。现在你需要将生成的 bin 文件添加到 CRP DISABLD 设备中。如果 USB 设备中已存在 bin 文件，你需要删除它并添加新的 bin 文件。

快速按下 Arch GPRS 的按钮并等待片刻，你会听到 Arch GPRS 给你拨打电话。

## 使用 ARCH GPRS 与 Xively ##

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/ARCH_GPRS_With_Xively.png)

Xively 是一个在线数据库服务，允许开发者将传感器生成的数据（例如来自物体、设备和建筑的能源和环境数据）连接到网络，并基于这些数据构建自己的应用程序。通过使用 ARCH GPRS，我们可以轻松实现这一点。

**第一步：** 注册 Xively 账户

- 打开 [https://xively.com/](https://xively.com/)，点击登录或注册。如果您已经注册，请直接点击登录。

**第二步：** 添加您的设备和通道

- 您可以根据需要创建设备并添加通道。如果您不知道如何操作，可以访问 [https://xively.com/get_started/](https://xively.com/get_started/)。

**第三步：** 导入程序

- 打开链接：[http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/](http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/)，然后点击右上角的“Import this program”，您将看到如下图所示的页面。现在点击“import”完成 Arch GPRS 程序的导入。

**第四步：** 添加您的信息

- 将 FEED_ID、SENSOR_ID 和 XIVELY_KEY 替换为您的信息，并将 ARCH GPRS 与传感器连接，然后编译并更新固件。

**第五步：** 检查您的传感器值

- 如果成功，您将在您的通道图表中看到上传的数据。

**注意：**

如果您在 MAC 或 Linux 上使用 Seeeduino Arch，请阅读应用说明 --- [USB ISP 编程](http://www.lpcware.com/content/nxpfile/an11305-usb-system-programming-lpc11u3xlpc11u2x)。

## 在 Windows、Linux 或 Mac 上编程 Seeeduino Arch ##

Seeeduino Arch 没有 mbed 接口。它使用 USB 系统编程（ISP）来升级固件。

要进入 USB ISP 模式，请将 Arch 连接到您的计算机并长按其按钮，然后会出现一个名为“CRP DISABLD”的磁盘。

- 在 Windows 上

    1. 删除“CRP DISABLD”磁盘中的 firmware.bin 文件。

    2. 将新的固件复制到磁盘中。

- 在 Linux 上

    1. 如果磁盘未挂载，请将磁盘挂载到 /path/to/mount。
    2. 使用以下命令：`dd if=new_firmware.bin of=/path/to/mount/firmware.bin conv=notrunc`。

- 在 Mac 上，您需要使用终端运行以下脚本，将 .bin 文件复制到 Arch：

    1. 使用以下命令：`dd if=new_firmware.bin of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc`。

    如果您愿意，还可以创建一个 **Automator** 应用程序来支持文件拖放到您的板子上。只需创建一个“运行 Shell 脚本”，并使用以下命令：

    `dd if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc`

快速按下按钮以运行新的固件。

## 相关链接 ##

- [Arch GPRS V2](https://seeeddoc.github.io/Arch_GPRS_V2/)

## 注意事项 ##

Arch GPRS 不带有 [mbed 接口](https://mbed.org/handbook/mbed-HDK)。要输出调试信息，请尝试使用 [USBSerial](https://mbed.org/handbook/USBSerial)。

## 在线原理图查看器 ##

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[Eagle]** [Arch GPRS Eagle 文件](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Eagle_File.zip)
- **[PDF]** [Arch GPRS PDF](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch%20GPRS.pdf)
- **[EAGLE]** [Arch GPRS 原理图](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch%20GPRS.sch)
- **[PDF]** [Arch GPRS 原理图 PDF 格式](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Schematic.pdf)
- **[Command]** [AT 指令参考](https://files.seeedstudio.com/wiki/Arch_GPRS/res/AT%E6%8C%87%E4%BB%A4%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf)
- **[Datasheet]** [EG10 数据手册](https://files.seeedstudio.com/wiki/Arch_GPRS/res/EG10%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf)
- **[Demo]** [演示代码](https://mbed.org/users/loovee/code/ARCH_GPRS_Demo/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同用户的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>