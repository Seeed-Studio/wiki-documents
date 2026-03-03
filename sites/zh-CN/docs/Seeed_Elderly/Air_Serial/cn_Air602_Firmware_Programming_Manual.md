---
description: Air602 固件烧录手册
title: Air602 固件烧录手册
keywords:
- Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Air602_Firmware_Programming_Manual
last_update:
  date: 01/20/2023
  author: Matthew
---


![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/main.jpg)

Air602 模块基于嵌入 ARM-Cortex M3 的 W600，在本教程中我们将向您展示如何烧录固件。

## 固件工具及镜像下载

您可以在这里下载固件烧录工具：

[固件工具](https://v2.fangcloud.com/share/f348cba5a0e3899fd97c57b9f2)

我们为您提供了官方固件：

[官方固件](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602_img.zip)

在这个压缩包中您会找到 4 个版本，我们推荐您使用 **AirM2M_Luat_V0011_W600T_USER**。

### 更新日志

|版本|描述|
|--|--|
|AirM2M_Luat_V0008_W600T_USER|初始版本|
|AirM2M_Luat_V0009_W600T_USER|增加 MQTT 支持|
|AirM2M_Luat_V0010_W600T_USER|修复了模块设置为 AP 模式且禁用 DHCP 功能时，设备（站点）仍然可以使用 DHCP 功能获取 IP 地址的问题。同时还解决了某些手机连接成功后立即断开的问题。|
|AirM2M_Luat_V0011_W600T_USER|优化了芯片的功耗，减少了芯片运行时产生的热量|

如果您不想使用 SDK，可以直接跳转到 [烧录固件](#Burn the firmware)。

## SDK 下载

您也可以下载 SDK 并自行重新编程。

[AirM2M_W600_SDK](https://github.com/openLuat/Luat_WiFi_WM_W600)

我们推荐您使用 **Keil MDK5** 进行构建。请使用 Keil 打开 **WM_W600.uvprojx** 文件，您可以在 **XXXXX\WM_SDK\Tools\Keil\Project** 中找到它，其中 XXXXX 是您解压 SDK 的路径。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/KEIL_path.jpg)

构建完成后，您可以在 **XXXXX\WM_SDK\Bin** 中找到 **.img** 文件，其中 XXXXX 是您解压 SDK 的路径。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/KEIL_path_1.jpg)

现在您可以将自己的固件烧录到 Air602 上，那么问题是如何操作？

## 烧录固件

遗憾的是，固件工具仅支持中文界面，为了解决这个问题，我们将逐步展示截图。

**步骤 1.** 解压固件工具，找到并双击 **LuaTool.exe**，路径为 **XXXX/LuaTools 1.5.7**，其中 XXXX 是您解压固件工具（LuaTools1.5.7）的路径。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Luat_path_1.jpg)

**步骤 2.** 打开工具后，可能会弹出一个窗口提示您升级，您可以直接点击“取消升级”跳过此步骤。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_1.jpg)

**步骤 3.** 切换到 WiFi 模式。默认模式是用于 4G 的 Luat，要烧录 Air602 固件，我们需要点击 **切换模式 -> 切换至WiFi**。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_2.jpg)

然后软件会重新启动，您会看到如下新窗口：

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_3.jpg)

**步骤 4.** 选择您刚刚下载或通过 SDK 构建的固件。点击 **浏览文件**，选择固件（*.img* 和 *.FLS* 文件均可），然后点击 **Open**。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_4.jpg)

**步骤 5.** 选择对应的 COM 端口并开始烧录固件。实际上工具会自动检测 Air602 的 COM 端口，您只需勾选复选框，然后点击 **开始** 开始烧录固件。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_5.jpg)

随后您会看到提示 **开始握手，请重启WiFi模块**，当出现此提示时，请及时按下 Air602 开发板上的复位按钮。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_6.jpg)

按下复位按钮时请小心，以防止 USB 设备意外弹出。几秒钟后，您会在同一区域看到提示 **握手成功，开始下载**，这意味着握手成功并开始烧录。您还可以看到进度条。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_7.jpg)

:::note
如果失败，可能会显示 **握手超时**，这意味着握手超时，请重复步骤 5 几次，问题即可解决。
:::

:::tip
如果一切顺利，您将看到以下图片，这意味着您已成功将固件烧录到 Air602 开发板上。尽情享受吧 :D
:::

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_8.jpg)

## 常见问题解答

### 问题1：烧录固件 AirM2M_Luat_V0011_W600T_USER（由 tarp.andreas 提供）后出现问题

**引用：**
似乎如果按照 Wiki 中的描述烧录 AirM2M_Luat_V0011_W600T_USER.FLS 固件后，就无法再使用 LuaTool 对该模块进行操作。

**"**

**回答1：**  
这是因为版本 11 更改了 SDK 的启动结构。如果需要将固件恢复到版本 08/09/10，则需要先重写闪存。有关详细信息，请查看我们的论坛。

[烧录固件 AirM2M_Luat_V0011_W600T_USER 后出现问题](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8498&p=28790#p28790)

___

### 问题2：如何在 Linux 上进行编程

**引用：**
我发现“固件工具”压缩包中没有任何源代码，只有一些 Windows 的二进制文件。那么如何在我的 Linux 工作站上对这个模块进行编程？

**"**

**回答2：**  
很遗憾，我们没有适用于 Linux 的固件工具。然而，您可以使用带有 xmodem 发送功能的串口工具。

>步骤 1：循环发送 1B（HEX）。  
>步骤 2：由 **tarp.andreas** 提供。“尝试在发送 `\x1b` 的同时按下 RESET 按钮（或将独立模块上的 Res-PIN 拉低），然后您会得到所需的响应。”  
>步骤 3：当模块显示“secboot running”并随后出现“CCCCCC....”时，您可以选择固件文件，并通过 xmodem 协议发送。

有关详细信息，请查看我们的论坛。

[在 Linux 上进行编程](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8393&sid=acb3a9a37671cf031800ea6073adb854)

___

### 问题3：Mac OS 驱动问题

我们发现某些版本的 Mac 系统无法识别该开发板。

**回答3：**  
在这种情况下，您可能需要手动安装 CH340 驱动程序。该开发板使用 CH330N，与 CH340 驱动程序兼容。

有关详细信息，请查看我们的论坛。

[Mac OS 驱动问题](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=acb3a9a37671cf031800ea6073adb854)

___

## 资源

- **[压缩包]** [固件工具](https://v2.fangcloud.com/share/f348cba5a0e3899fd97c57b9f2)

- **[压缩包]** [官方固件](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602_img.zip)

- **[Github 页面]** [AirM2M_W600_SDK](https://github.com/openLuat/Luat_WiFi_WM_W600)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>