---
description: Xadow - Edison 套件
title: Xadow - Edison 套件
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Edison_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/110040001%201.jpg)

Xadow - Edison 套件基于 Intel® Edison 设计，旨在降低原型设计和生产物联网及可穿戴计算产品的门槛。它具有高性能和低功耗的特点，使您的项目小巧便携，特别适合可穿戴项目。Xadow - Edison 套件包括一个 Xadow - Edison 主板，该主板包含两个 Xadow 兼容接口、一个 SD 接口、一个编程接口和一个电池接口，以及一个 Xadow - Edison 编程器和 Xadow - Edison SD。通过 Xadow - Edison，您可以通过标准 Xadow 接口使用许多 Xadow 模块。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Edison-Kit-p-2444.html)

## 特点
---
- 专为 Intel® Edison 设计。
- USB 电源供电（4.75~5.25V）。
- Xadow 兼容接口。
- SD 卡连接器。
- 带 USB Micro Type-B 接口的 USB 到设备 UART 桥。
- 带 USB Micro Type-AB 接口的 USB OTG。
- 电池充电器。
- 电源/睡眠/固件恢复按钮输入。

## 规格
---
- USB 电源供电：4.75V ~ 5.25V
- 2 个标准 Xadow 接口
- 1 个 SD 卡连接器
- 1 个 USB Micro Type-B 接口
- 1 个 USB Micro Type-AB 接口
- 1 个电池接口
- 1 个电源/睡眠按钮；1 个固件恢复按钮
- 尺寸：30.0 × 40.0 × 7.0 mm
- 工作温度：32 至 104°F (0 至 40°C)

## 模块连接图
---
使用 FFC 电缆进行以下连接：

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Connection.png)

:::note
    当将其他 Xadow 模块连接到 Xadow - Edison 时，您需要注意连接方向。连接方法是一个 Xadow 模块的未填充角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::

## 安装 Edison Arduino IDE
---

请参考 Intel Edison 官方网站：Edison [入门指南](https://software.intel.com/en-us/get-started-edison-windows)

1. 下载 Edison Arduino IDE。（注意：选择您的操作系统。）

2. 导航到您下载 .zip Edison Arduino IDE 的文件夹。

3. 右键点击 .7z 文件，选择“7-zip”，然后选择“Extract to “arduino-…”

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_Extract_7z.png)

4. 点击进入创建的文件夹，直到看到 IDE 的“arduino.exe”文件。双击该文件，以下窗口将打开。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_ArduinoIDE.png)

## 安装所需驱动程序
---
1. 下载 [FTDI 驱动程序](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/CDM%20v2.10.00%20WHQL%20Certified.exe)。
2. 右键点击您下载的 .exe 文件（文件名应为“CDM…”），选择“以管理员身份运行”。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver.jpg)

3. 点击“Extract”。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install.jpg)

4. 点击“Next”。
5. 当您看到以下屏幕时，点击“Finish”。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install_ok.jpg)

6. 下载 [Intel Edison 驱动程序](https://downloadcenter.intel.com/product/83267) 以安装所需的 RNDIS、CDC 和 DFU 驱动程序。
7. 双击 .exe 文件开始安装。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Intel_Edison_Driver.jpg)

## 示例
---
1. 打开网站：[Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos) 下载整个项目。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Github_Xadow_Edison_Demos.png)

2. 点击工具 > 串口，并选择 Intel Edison 所连接的 Com #。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Import_Indoor_Kit_Demo.png)

3. 点击草图 > 导入库… > 添加库，并导入在步骤 1 中下载的库。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Add_Library.png)

4. 点击文件 > 示例 > Xadow_Edison_Demos > Edison_Pedometer_with_OLED，并选择该示例。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Select_Pedometer_Demo.png)

5. 使用 FFC 电缆进行以下连接：

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Pedometer.jpg)

6. 点击上传图标。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_upload.png)


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
- [Edison 入门指南](https://software.intel.com/en-us/get-started-edison-windows)
- [Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos)
- [Xadow-Edison_sch_v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_sch_v1.0.pdf)
- [Xadow - Edison 设计文件 v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_v1.0_sch%26pcb.zip)
- [Xadow - Edison 程序员原理图 v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_sch_v1.0.pdf)
- [Xadow - Edison 程序员设计文件 v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip)
- [Xadow - Edison_SD 原理图 v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_sch_v1.0.pdf)
- [Xadow - Edison_SD 设计文件 v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_v1.0_sch%26pcb.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>