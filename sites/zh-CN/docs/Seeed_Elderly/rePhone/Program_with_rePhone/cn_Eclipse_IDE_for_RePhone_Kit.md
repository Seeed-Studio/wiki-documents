---
description: Eclipse IDE 用于 RePhone Kit
title: Eclipse IDE 用于 RePhone Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Eclipse_IDE_for_RePhone_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone 可以作为一个学习工具，帮助您开始有趣的项目。目前，RePhone 支持多种开发环境和开发语言，您可以基于 Eclipse IDE 或 Arduino IDE 使用 C/C++ 构建应用程序，也可以使用 Lua 和 JavaScript。

本 Wiki 是一个用户指南，旨在帮助您使用 Eclipse IDE 开始您的 RePhone 项目。

| 产品版本 | 购买链接 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RePhone core 2G-Atmel32u4 v1.0](https://wiki.seeedstudio.com/cn/RePhone_core_2G-Atmel32u4/)| [立即购买](https://www.seeedstudio.com/RePhone-core-2G-Atmel32u4-v1-0-p-2779.html)| 
|[RePhone core 2G-AtmelSAMD21](https://wiki.seeedstudio.com/cn/Rephone_core_2G-AtmelSAMD21/)|[立即购买](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)|

## 下载 Eclipse IDE 用于 RePhone
---
在下载用于 RePhone 的 Arduino IDE 之前，请确保您的电脑满足以下要求：

*   操作系统：Microsoft Windows XP、Vista、7 或 8

*   Eclipse IDE：Indigo (3.7) 和 CDT 8.0.2。

现在请点击以下图标，从 Eclipse 官方网站下载并安装 Eclipse IDE for C/C++ Developers。安装 IDE 可能需要在您的电脑上安装适当的 JAVA SE Development Kit 8。

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide-02.png)](http://www.eclipse.org/downloads/packages/eclipse-ide-cc-developers-includes-incubating-components/indigosr2)

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/JSE-03.png)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

## 安装 Eclipse 插件：LinkIt Assist 2502 SDK 2.0.46
---
为了使用 RePhone 和 Eclipse IDE，您需要**将 LinkIt Assist 2502 Eclipse 插件安装到与 Eclipse IDE 相同的文件夹中**，即存放‘_eclipse.exe_’的文件夹。

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Linkit_assist_sdk_2.0.46-04.png)](http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip)

安装 LinkIt Assist 2502 SDK 2.0.46 的步骤如下：

**步骤 1.** 下载 **LinkIt Assist 2502 SDK 2.0.46** 压缩文件。

**步骤 2.** 解压 LinkIt Assist 2502 SDK 2.0.46 压缩文件的内容。SDK 中除了 Eclipse 插件外还包含其他工具，因此建议将内容解压到永久位置。如果您将内容解压到临时位置，安装程序会提供将其移动到永久位置的选项。

**步骤 3.** 确保 Eclipse IDE 未运行。

**步骤 4.** 运行 LinkIt Assist 2502 SDK 2.0.46 安装程序‘**InstallPlugins.exe**’，如下图所示：

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_1.png)

**步骤 5.** 在欢迎页面，点击‘**Next**’

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_2.png)

**步骤 6.** 您将被要求选择 Eclipse IDE 的安装位置。点击‘**Browse**’，找到您安装 Eclipse IDE 的文件夹（即安装‘**Eclipse IDE for C/C++ Developer**’的指定文件夹），点击‘**OK**’和‘**Next**’。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_3.png)

**步骤 7.** 在“移动 SDK 到永久位置”页面，如果您将压缩文件解压到临时位置，请勾选‘**Move LinkIt Assist 2502 2.0 package to new folder**’。点击‘**Browse**’，选择一个永久位置来存储 SDK，然后点击‘**Next**’进入下一步。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_4.png)

**步骤 8.** 在“准备安装 SDK”页面，检查所选位置是否正确，如果正确，点击‘**Install**’。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_5.png)

**步骤 9.** 在安装的最后一步，如果这是您第一次安装 LinkIt SDK，请勾选‘**Install the MediaTek USB Driver**’，然后点击‘**Finish**’完成安装。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_6.png)

**步骤 10.** 插件安装完成后，在您安装 Eclipse IDE 的位置会出现一个名为‘**LINKIT_ASSIST_SDK**’的文件夹。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_77.png)

打开“**eclipse.exe**”后，您还可以在 Eclipse 窗口中找到插件，请参阅以下部分“**创建您的第一个项目：Hello World**”中的**步骤 8**。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Plug-ins.png)

## 更新/刷写固件
---
**注意：请注意，刷写固件会删除存储在 RePhone 中的所有设置和文件（如图片、音乐）。在刷写/更新固件之前，请确保您已经了解这一点。**

我知道您对您的 RePhone 非常期待，迫不及待地想开始编程，但请稍等片刻。在开始之前，确保核心模块 Xadow GSM+BLE 的固件与您刚安装的 LinkIt Assist SDK 相对应是非常重要的。

这里我将介绍两种更新/刷写 RePhone 固件的方法。

#### **LinkIt Assist SDK 内置固件更新工具**

* * *

**步骤 1.** 首先，确保您的 Xadow GSM+BLE 已与电脑断开连接，然后从我们的 Github 下载**最新的 RePhone SDK**并解压。

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Download_RePhone_SDK.png)](https://github.com/WayenWeng/RePhone_SDK_Bin_Update//)

**步骤 2.** 启动您刚安装的 SDK 文件夹中的 **‘FirmwareUpdater.exe’**，路径为 _’eclipse\LINKIT_ASSIST_SDK\tools\FirmwareUpdater\FirmwareUpdater.exe’_

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Linkit_firmwareupdater_000.png)

**步骤 3.** 在 LinkIt 固件更新工具窗口中，从下拉列表中选择 **‘Others’** 作为平台。然后定位到 _**...\SEEED02A_DEMO_PCB01_gprs_MT2502_S00.MAUI_11CW1418SP5_W15_29.bin\SEEED02A_DEMO_BB.cfg**_

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update.png)

**步骤 4.** 点击**绿色更新按钮**，并按照屏幕上的两步指示操作，**确保 Xadow GSM+BLE 已通电（连接到电池）**后再连接到电脑。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_2.png)

**步骤 5.** 等待下载完成。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_3.png)

**步骤 6.** 固件更新完成后，下载完成页面会确认更新成功，点击 **‘OK’** 并退出更新工具。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_4.png)

## 创建您的第一个项目：Hello World
---
**步骤 1.** 快完成了！现在启动 **eclipse.exe**。如果这是您第一次使用 Eclipse IDE，系统会要求您选择一个 **Workspace** 来存储您的 Eclipse 项目。在 Workspace Launcher 中，点击 **Browse** 找到一个合适的位置作为您的 Workspace。我建议您将 Workspace 设置在您安装 Eclipse IDE 的同一位置。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_1.png)

**步骤 2.** 要创建一个新的 RePhone 应用程序，在 Eclipse 的 **File** 菜单中，指向 **new** 并点击 **Other**。或者您可以简单地使用快捷键 **CTRL+N**。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_2.jpg)

**步骤 3.** 在新窗口中，展开 **LinkIt Assist 2502 SDK 2.0** 文件夹并选择 **Application(*.vxp)**

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_3.png)

**步骤 4.** 现在您将进入 **LinkIt Assist 2502 SDK 2.0 向导**

*   输入新项目的名称，在本例中我们命名为 "**hello_world**"

*   在 **Hardware Platform** 的下拉菜单中选择 **LinkIt Assist 2502**

*   勾选 **Empty Application**

*   点击 **Finish** 完成设置

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_4.png)

**步骤 5.** 恭喜！XD 您刚刚创建了您的第一个项目！现在从 C/C++ Projects 面板中打开项目并双击 "**hello_world.c**" 文件，如下图所示

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_5.png)

**步骤 6.** 在上传应用程序之前，您需要：

*   通过将电池插入 Xadow GSM+BLE 的电池插座来**为 RePhone 供电**，按住电源键（PWR）2秒钟以**打开设备**（此时 LED 指示灯显示**绿色**）

*   然后使用 Micro USB 数据线将您的 RePhone 连接到电脑。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

**步骤 7.** 打开 **设备管理器** 检查 COM 端口。会有两个 **COM 端口**（端口号可能因您的电脑而异）：

*   **MTK USB Debug Port(COM4)** 用于日志，例如在串行监视器中打印消息

*   **MTK USB Modem Port(COM5)** 用于上传代码

通过点击 **开始** 按钮，点击 **控制面板**，点击 **系统和安全**，然后在 **系统** 下点击 **设备管理器** 打开设备管理器。如果系统提示输入管理员密码或确认，请输入密码或提供确认。如下图所示：

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Check_ports.png)

**步骤 8.** 快完成了！将以下代码放入 "**hello_world.c**" 文件中：
```
#include "vmsystem.h"
#include "vmtype.h"
#include "vmlog.h"
#include "vmtimer.h"
#include "ResID.h"
#include "hello_world.h"

VM_TIMER_ID_PRECISE sys_timer_id = 0;

void sys_timer_callback(VM_TIMER_ID_PRECISE sys_timer_id, void* user_data)
{
    vm_log_info("Hello World!");
}

void handle_sysevt(VMINT message, VMINT param)
{
    switch (message)
    {
        case VM_EVENT_CREATE:

        sys_timer_id = vm_timer_create_non_precise(1000, sys_timer_callback, NULL);
        break;
        case VM_EVENT_PAINT:
        break;
        case VM_EVENT_QUIT:
        break;
    }
}

void vm_main(void)
{
    vm_pmng_register_system_event_callback(handle_sysevt);
}
```

*   点击 **Build Application** 上传应用程序，如下图所示：

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_6.png)

*   一旦应用程序成功上传，它将在底部的 **Console** 中显示，如果没有显示，请在 _**Window/Show View/Console**_ 中重新打开。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_7.png)

**步骤 9.** 在 _LinkIt Assist Plug-in_ 中打开 **Monitor**。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_8.png)

系统会要求您设置 **数据库路径**，如果没有提示，请进入 **Config** 菜单并点击 **Set Database Path**。

*   点击如下图所示的 "**...**" 图标

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_9.png)

*   定位到 "_**eclipse\LINKIT_ASSIST_SDK\tools\FirmwareUpdater\firmware\LinkIt_Device\LinkIt_Assist_2502\W15.19.p2\database.db**_"，然后点击 **Open**。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_10.png)

*   同时选择 **COM 端口**为 **MTK USB Debug Port(COM4)**，**波特率**默认值为 **115200**。

调试端口的 COM 号可能因您的电脑而异，请确保它是 **Device Manager** 中列出的 **MTK USB Debug Port**。

如果窗口没有显示，请进入 **Config** 菜单并点击 **Configure RS232...**

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_11.png)

**步骤 10.** 您完成得非常棒！现在向世界说声 "Hello" 吧！

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_12.png)

##  恢复默认设置
---
**请注意，恢复 RePhone 的默认设置将删除所有设置和文件（如图片、音乐），在恢复默认设置之前请务必了解这一点。**

要将您的 RePhone 恢复为 **默认设置**：

1. 按照“更新/刷写固件”部分的说明刷写固件。

2. 下载 RePhone_Create_Kit_VXP 文件。

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/RePhone_Kit_Create_VXP.png)](https://github.com/WayenWeng/RePhone_Create_Kit_VXP/)

<!-- 3. 进入 [RePhone Mass Storage Mode](/cn/Xadow_GSMPlusBLE#Operating_Mode) -->

4. 将文件夹 "RePhone Create Kit VXP" 中的所有内容复制到 RePhone 的 5MB 大容量存储中。

5. 重启您的 RePhone，即可完成恢复。由于恢复默认设置会删除所有文件，您需要在大容量存储中放置一个 mp3 文件以用作铃声。

##  RePhone 社区
---
[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享创意/项目，并对模块的未来开发提供反馈。于是，我们创建了 RePhone 社区。

现在加入 [RePhone 社区](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4) 吧！

在这里，我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

## 关于 LinkIt Assist SDK

---

由于 RePhone 主要是使用 LinkIt Assist SDK 开发的，且联发科为开发者提供了非常详细的开发者指南，您可以参考以下链接获取更多信息：

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Developer_guide_en-06.png)](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/res/MediaTek_LinkIt_Assist_2502_Developers_Guide_v1_1.pdf)

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Developer_guide_cn-07_1.png)](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/res/MediaTek_LinkIt_Assist_2502_cn_v1_1.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>