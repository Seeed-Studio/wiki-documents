---
description: Arduino IDE 用于 RePhone Kit
title: Arduino IDE 用于 RePhone Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arduino_IDE_for_RePhone_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone 可以作为一个学习工具，帮助您开始有趣的项目。目前，RePhone 支持多种开发环境和开发语言，您可以基于 Eclipse IDE、Arduino IDE 使用 C/C++，或者使用 Lua 和 JavaScript 构建应用程序。

本 Wiki 是一个用户指南，帮助您使用 Arduino IDE 开始您的 RePhone 项目。

| 产品版本 | 购买链接 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RePhone core 2G-Atmel32u4 v1.0](https://wiki.seeedstudio.com/cn/RePhone_core_2G-Atmel32u4/)| [立即购买](https://www.seeedstudio.com/RePhone-core-2G-Atmel32u4-v1-0-p-2779.html)| 
|[RePhone core 2G-AtmelSAMD21](https://wiki.seeedstudio.com/cn/Rephone_core_2G-AtmelSAMD21/)|[立即购买](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)|

下载 Arduino IDE 用于 RePhone
--------------------------------

在下载用于 RePhone 的 Arduino IDE 之前，请确保您的操作系统符合以下要求：

**Windows XP/Vista/7/8/8.1**

我们已将用于 RePhone 的 Arduino IDE 上传至 GitHub，欢迎您发送“pull request”帮助我们优化和改进。

如果您之前使用过 Arduino IDE，那么这将非常简单。如果您对 Arduino 不熟悉，也没关系，只需按照说明操作，您将能够轻松快速地开始使用 Arduino IDE。

现在点击

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Download_Arduino_IDE_for_RePhone.png)](https://github.com/Seeed-Studio/Arduino_IDE_for_RePhone)

在 GitHub 页面上，点击 **Download ZIP** 下载文件，如下图所示：

![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Click_to_download_Arduino_IDE_for_RePhone.png)

下载完成后，将文件解压到合适的位置。

安装驱动程序
------------------

### 在 Windows 8 / 8.1 下禁用驱动程序签名强制

如果您使用的是 Windows 8/8.1，则需要先禁用 **驱动程序签名强制** 才能安装驱动程序。

**在尝试关闭“驱动程序签名强制”之前，您应该保存正在编辑的文件，因为您的系统将在操作过程中关闭。**

现在按照以下说明禁用“驱动程序签名强制”。

1. 按下“Windows 键” + "R"
2. 输入 shutdown.exe /r /o /f /t 00
3. 点击“确定”按钮。
4. 系统将重新启动到“选择一个选项”屏幕
5. 从“选择一个选项”屏幕中选择“疑难解答”
6. 从“疑难解答”屏幕中选择“高级选项”
7. 从“高级选项”屏幕中选择“Windows 启动设置”
8. 点击“重新启动”按钮
9. 系统将重新启动到“高级启动选项”屏幕
10. 选择“禁用驱动程序签名强制”
11. 系统启动后，您可以像在 Windows 中一样安装 Arduino 驱动程序

### 正常驱动程序安装

1. 首先，通过 **插入电池** 或 **使用外部电源（3.3 ~ 4.2V（无 SIM）/3.5 ~ 4.2V（有 SIM））** 为 Xadow GSM+BLE 的电池插座供电，**按住电源键（PWR）2 秒** **将其打开**（LED 指示灯显示 **绿色**），然后使用 Micro USB 数据线将您的 RePhone 连接到 PC。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

2. 点击 **开始** 按钮，打开 **控制面板**，点击 **系统和安全**，然后在 **系统** 下点击 **设备管理器** 打开 **设备管理器**。如果系统提示输入管理员密码或确认，请输入密码或提供确认。
在 **设备管理器** 中，您将看到未知设备，如下图所示：

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Unknown_Devices.png)

3. 右键点击其中一个未知设备，选择 **更新驱动程序软件**。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Update_Driver_Software.png)

4. 选择 **浏览我的计算机以查找驱动程序软件**。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Browse_my_computer_for_driver_software.png)

5. 点击 **浏览**，定位到您解压的 Arduino IDE for RePhone 文件夹 .. \\Arduino_IDE_for_RePhone\\drivers\\mtk 。点击 **下一步** 开始安装驱动程序。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Locate_Driver.png)

6. 当驱动程序软件成功安装后，您将看到以下 **完成** 页面，点击 **关闭** 并 **从步骤 1 到 6 重新开始，为另一个未知设备安装驱动程序**。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_complete_page.png)

### 手动安装驱动程序

您也可以手动安装驱动程序：

1. 在“**浏览我的计算机以查找驱动程序软件**”窗口中，点击 **“让我从计算机上的设备驱动程序列表中选择”**

2. 然后点击 **“端口(COM&LPT)”** 并点击 **“下一步”**

3. 点击 **“从磁盘安装”**

4. 接下来，

-- 如果您使用的是 **<big>Windows Vista 64位</big>**，定位到 "**Arduino_IDE_for_RePhone-master\\drivers\\mtk\\Vista\\usb2ser_Vista64.inf\\**"

-- 如果您使用的是 **<big>Windows 7 或更高版本的 64位</big>**，定位到 "**Arduino_IDE_for_RePhone-master\\drivers\\mtk\\Win7\\usb2ser_Win764.inf**"

### 使用 LinkIt Assist 2502 SDK 2.0.46 安装驱动程序

LinkIt Assist 2502 SDK 2.0.46 还提供了驱动安装程序。

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Linkit_assist_sdk_2.0.46-04.png)](http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip)

然后在路径 **"MediaTek_LinkIt_Assist_2502_SDK_2_0_46\\LINKIT_ASSIST_SDK\\Driver\\InstallMTKUSBCOMPortDriver.exe"** 中找到驱动安装程序。

更新/刷写固件
-----------------

<div class="admonition note">
<p class="admonition-title">注意</p>
<p>请注意，刷写固件会删除存储在 RePhone 中的所有设置和文件（如图片、音乐）。在刷写/更新固件之前，请备份数据。</p>
</div>

为了在 RePhone 上使用 Arduino IDE，你需要更新/刷写固件。过程非常简单，如下所示：

1. **断开 RePhone 与电脑的连接**，**按住电源键（PWR）2 秒以关闭设备**（LED 指示灯变为 **红色** 然后熄灭）。

2. 打开路径 ***...Arduino_IDE_for_RePhone\\hardware\\tools\\mtk\\FirmwareUpdater.exe*** 下的 **FirmwareUpdater.exe**，确保固件更新器中的平台为 "**RePhone**"，如图所示。如果不是，请点击 "**Others**"，并定位到 ***...Arduino_IDE_for_RePhone\\hardware\\tools\\mtk\\firmware\\LinkIt_Device\\RePhone\\W15.19.p2-uart\\SEEED02A_DEMO_BB.cfg***，然后点击 **Download（绿色按钮）**。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware.png)

3. 现在系统会提示你通过 USB 数据线将 RePhone 连接到电脑，确保你的 RePhone 已关闭，同时始终连接一个功能正常的电池（保持供电）。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_pluginrephone.png)

4. 等待下载完成。这可能需要大约 1 分钟，因此可能会在 50% 停留一段时间，请 **耐心等待**。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_downloading.png)

5. 在 **完成** 页面点击 **OK** 完成固件更新。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_complete.png)

恢复默认设置
-----------------

<div class="admonition note">
<p class="admonition-title">注意</p>
<p>请注意，将 RePhone 恢复为默认设置会删除 RePhone 中的所有设置和文件（如图片、音乐）。在恢复默认设置之前，请备份数据。</p>
</div>

将 RePhone 恢复为 **默认设置**：

1. 按照“更新/刷写固件”部分中的说明刷写固件。

2. 下载 RePhone_Create_Kit_VXP 文件。

    [![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/RePhone_Kit_Create_VXP.png)](https://github.com/WayenWeng/RePhone_Create_Kit_VXP/)

<!-- 3. 进入 [RePhone Mass Storage Mode](/cn/Xadow_GSMPlusBLE#Mass_Storage_Mode) -->

4. 将文件夹 "RePhone Create Kit VXP" 中的所有内容复制到 RePhone 的 5MB 大容量存储中。

5. 重启你的 RePhone 即可完成恢复。由于恢复默认设置会删除所有文件，你需要在大容量存储中放置一个 mp3 文件以用作铃声。

示例：Hello World
-------------------

现在你已经准备好所需的内容，我们可以开始使用 RePhone。

让我们从一个简单的程序 **Hello World** 开始。

1. 按住电源键（PWR）2 秒以打开设备（LED 指示灯显示绿色）。

2. 打开解压后的 Arduino IDE for RePhone 文件夹中的 **Arduino_IDE_for_RePhone.exe**，软件界面如下：

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_interface.png)

3. 打开 **设备管理器** 检查 COM 端口。会有 **两个 COM 端口**：

    -   MTK USB Debug Port 用于上传代码。
    -   MTK USB Modem Port 用于日志，例如通过 **Serial.println()** 在串口监视器中打印消息。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_COM_Ports.png)

4. 在 Arduino IDE 窗口中，点击 **工具 => 端口**，选择 **MTK USB Debug Port**，在此示例中为 **COM20**，COM 端口号可能因你的电脑而异，只需确保它对应 Debug Port。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Debug_Port.png)

5. 在 Arduino IDE 窗口中，点击 **工具 => 板**，选择 **RePhone**。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Board.png)

6. 现在将以下代码复制到你的 Arduino IDE：

```cpp
// hello world for test RePhone
// loovee@10-18-2015

void setup() {
    Serial.begin(115200);
}

void loop() {
    // put your main code here, to run repeatedly:
    Serial.println("Hello World, Hello RePhone!");
    delay(100);
}
```

7. 现在点击 **上传** 按钮将代码上传到你的 RePhone。当代码成功上传时，你会看到 **上传完成**。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_upload.png)

8. 由于 RePhone 使用不同的 COM 端口上传软件和读取日志，为了读取日志，我们需要将选定的 COM 端口切换到 **MTK USB Modem Port**。在 Arduino IDE 窗口中，点击 **工具 => 端口**，选择 **MTK USB Modem Port**，在此示例中为 **COM48**。

    然后打开 **串口监视器**。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Serial_Monitor.png)

9. 现在我们可以看到通过 **Serial.println()** 打印的 **Hello World**。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Helloworld.png)

更多示例代码
-----------------

如果你想进行更有趣的项目，尝试一些示例代码会是一个不错的开始。

1. 在 **偏好设置** 中将您的 **sketchbook 位置** 设置为 ***Arduino_IDE_for_RePhone-master\\hardware\\arduino\\mtk***（即您安装 Arduino IDE for RePhone 的位置）

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_Sketchlocation_1.png)

    然后重新启动 ***Arduino_IDE_for_RePhone.exe***，您就可以看到示例代码。
    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_Sketchlocation_2.png)

2. 您也可以在以下路径手动找到所有 RePhone 模块的 Arduino 示例代码：
***Arduino_IDE_for_RePhone-master\\hardware\\arduino\\mtk\\libraries***

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Example_code_Arduino_IDE.png)

RePhone 社区
-----------------

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享创意/项目，并对模块未来的开发提出反馈。于是，我们创建了 RePhone 社区。

现在加入 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone) 吧！

在这里，我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

更多
----

您已经做得很棒了！RePhone 拥有一个庞大的模块家族，具有不同的功能和特性。请访问模块的 Wiki 页面，了解更多应用！

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>