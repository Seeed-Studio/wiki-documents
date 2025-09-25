---
description: SenseCAP M1 故障排除
title: 故障排除
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/Troubleshooting
last_update:
  date: 02/14/2023
  author: Matthew
---


SenseCAP M1 故障排除
===========================

硬件相关
================

* * *

**蓝色 LED 不闪烁**
------------------------

![SenseCAP M1 Blue LED](https://www.sensecapmx.com/wp-content/uploads/2022/07/blue-led-1.webp)

![SenseCAP M1 Blue LED Not Good](https://www.sensecapmx.com/wp-content/uploads/2022/08/back-front-led-m1.png)

**故障排除步骤**

1.  检查 ETH LED 是否闪烁。如果 ETH 绿灯和黄灯亮起但蓝色 LED 熄灭，**[请先刷写新的 SD 卡](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)**。如果蓝灯仍然熄灭，那就是硬件缺陷问题。
2.  如果绿灯和黄灯都熄灭，请尝试确保电源适配器正常。您可以通过更换为 5V-3A 手机充电器配 type-C 线缆和新的网线来检查问题是否解决。
3.  如果热点通过 Wi-Fi 连接互联网，请检查前面板的红灯是否亮起，如果没有，那就是硬件缺陷问题。

* * *

网络相关
===============

* * *

**无法连接到互联网？**
--------------------------------------

正确设置网络配置起着重要作用。请确保您阅读以下所有详细信息以确保正确配置。

如果热点位于防火墙后面或使用不兼容的 NAT 类型（如下所述），Helium 热点可能无法工作。在其他情况下，可能是由于路由器配置/网络配置问题或您的连接简单地离线（无互联网）。

**注意**：如果您无法正确设置网络配置或以下步骤对您不起作用，请访问我们的 >> 官方 Discord 频道获取进一步指导。

**故障排除步骤 - 以太网连接**

**如果不使用 Wi-Fi，请检查您的以太网线缆**：确保以太网线缆从您的路由器/调制解调器牢固地插入热点。

*   **热点以太网端口旁边闪烁的琥珀色灯**：建立了稳定连接。
*   如果您在以太网端口中看不到闪烁的琥珀色灯，请尝试不同的线缆，因为线缆随着时间的推移往往会失效。

**检查您的互联网连接**：请确保您能够在同一网络上使用家用计算机/笔记本电脑/手机从您的位置连接到互联网。如果您无法连接到互联网，您需要联系您的互联网服务提供商 (ISP) 以获得有关您连接的额外帮助。

**故障排除步骤 - Wi-Fi 连接**

*   **如果您使用 Wi-Fi**：请确认您能够使用您的 WEP 或 WPA 安全密码（即 Wi-Fi 密码）连接到您的无线网络。如果您不知道如何连接或访问您的无线调制解调器，您需要直接联系设备制造商。
*   如果您无法连接到互联网，请重启您的路由器。从墙壁或电源插座拔掉您的热点和路由器 2 分钟。然后，重新插入以查看您是否能够连接到互联网。

* * *

**如何将热点连接到我手机的 WiFi？**
--------------------------------------------------

**以下示例显示的是 Apple iOS 设备。**

*   在您的手机上找到"**设置**"。
*   点击"**个人热点**"。

![iOS Personal Hotspot](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot.png)

*   启用以允许其他人加入。
*   配对您的热点。
*   将您的热点连接到您的 Apple iOS 手机的个人热点名称。

![iOS Hotspot Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-setup.png)

现在您可以通过 Wi-Fi 将您的 SenseCAP 网关配对到您手机的个人热点，以排除固件更新和网络连接故障。

* * *

SD 卡相关
===============

* * *

**如何替换 'config.json' 文件**
-----------------------------------------

**请谨慎操作**：以下步骤仅应在我们的技术支持团队建议时使用。如果您**未**被建议，则无需复制这些步骤。

**注意：** 请**不要**为其他热点使用相同的 '**config.json**' 文件。每个热点都有一个与其序列号相关联的唯一 '**config.json**' 文件。

* * *

**说明**

以下说明将帮助您替换 Micro SD 卡中的 'config.json' 文件。如果您发现设备卡在固件/旧版本上并认为这可能是导致故障的潜在错误，请按照说明解决问题。

**注意**：在按照以下步骤替换 micro SD 卡之前，请先检查您的互联网连接以确保问题与互联网无关。

* * *

**要求**

1.  您的 SenseCAP M1 热点中的 Micro SD 卡
2.  Micro SD 卡读卡器
3.  螺丝刀
4.  从原始卡复制的 '**config.json**' 文件

**注意**：如果您无法检索原始文件，请要求我们的技术支持代理为您提供一个。

![Swap Config.json File Requirements](https://www.sensecapmx.com/wp-content/uploads/2022/07/requirements-sd-flash.png)

_所需物品_

* * *

**步骤**

*   **步骤 1**：关闭您的热点电源
*   **步骤 2**：拆下天线
*   **步骤 3**：转到面板的正面

![Config.json File Swap 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step1-1.png)

*   **步骤 4**：使用螺丝刀松开面板正面的两个螺丝

![Config.json File Swap 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step2-1.png)

*   **步骤 5**：移动前面板并将其放在一边

![Config.json File Swap 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step3-1.png)

*   **步骤 6**：使用镊子移除 Micro SD 卡顶部的黄色贴纸，然后取出 Micro SD 卡

![Config.json File Swap 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step4-1.png)

![Config.json File Swap 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/step5-1.png)

![Config.json File Swap 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/step6-1.png)

*   **步骤 7**：将 Micro SD 卡插入读卡器并连接到您的计算机

![Config.json File Swap 7](https://www.sensecapmx.com/wp-content/uploads/2022/07/step7-1.png)

![Config.json File Swap 7B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step8-1.png)

**注意**：如果您使用的是 Windows 操作系统并被询问"**您需要先格式化驱动器** "**X**" 中的磁盘才能使用它"，请点击"**取消**"，否则您的 Micro SD 卡数据将被擦除。

![Format SD Card](https://www.sensecapmx.com/wp-content/uploads/2022/07/format-1.png)

_插入 Micro SD 卡时的 Windows 提示_

*   **步骤 8**：您现在会发现在 '**resin-boot**' 文件夹中有一个 '**config.json**' 文件，请使用记事本打开它以确认它是空的。

如果它**不是**空的，则存在由配置文件引起的 OTA（空中更新）问题，这是网络连接问题。请检查您的网络和安全/防火墙设置。

如果它**是**空的，请使用我们提供给您的新 'config.json' 文件来替换它。

![Empty config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/config-1.png)

*   **步骤 9**：如果 '**config.json**' 文件是空的，您需要用我们提供的文件来替换它。将新文件拖到磁盘中并点击 '替换'。

**注意**：请不要删除任何其他文件，否则会导致您的 SenseCAP M1 出现意外问题。

**注意**：每个设备都有一个不同的 'config.json' 文件注册到它，请不要与他人分享您的 'config.json' 文件或使用他人的文件。

**对于 MacOS**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - 复制_ 'config.json' _文件_

![MacOS Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**对于 Windows**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - 复制 "config.json" 文件_

![Windows Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

**注意**：建议在复制后通过在记事本中打开 '**config.json**' 文件来仔细检查其中是否有内容。

*   **步骤 10**：将 Micro SD 卡放回热点设备中

**提示**：在确认您的热点设备正常运行后再组装前面板。

![Put Together SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step10-1.png)

![Put Together SenseCAP M1 - 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step11-1.png)

![Put Together SenseCAP M1 - 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step12-1.png)

![Put Together SenseCAP M1 - 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step13-1.png)

*   **步骤 11**：安装天线并为您的热点设备通电

打开 SenseCAP M1，连接到互联网（最好使用以太网电缆），等待约 20 分钟进行 OTA 更新，并在仪表板（[**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/)）上检查状态或在 Helium 应用程序中运行诊断。

如果您有任何进一步的问题或疑问，请在此处开启工单：[**https://support.sensecapmx.com**](https://support.sensecapmx.com)

* * *

**如何将新镜像刷写到新的 Micro SD 卡**
---------------------------------------------------

**请谨慎操作**：以下步骤仅应在我们的技术支持团队建议下使用。如果您**没有**得到建议，则无需复制这些步骤。

由于用户对热点设备的误用，我们发现频繁的电源循环、插拔 micro SD 卡可能会导致未知的 micro SD 卡错误，例如文件系统对齐问题。

**如果您被建议更换 micro SD 卡来调试问题，请仔细按照以下说明操作。**

* * *

**说明**

下面提供的说明将帮助您将镜像刷写到新的 micro SD 卡并替换 SenseCAP M1 中的原始卡，以修复由潜在 micro SD 卡错误引起的问题。

**注意**：请先检查您的互联网连接，确保问题与互联网无关，然后再按照以下步骤更换 micro SD 卡。

* * *

**要求**

**注意**：我们现在有 SD 卡更换套件可供购买，您可以点击[**这里**](https://www.seeedstudio.com/SenseCAP-M1-SD-Card-Replacement-Kit-p-5279.html)购买。

![SenseCAP M1 Replacement SD Card Kit](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_该套件包含一个螺丝刀、一个 MicroSD 读卡器、一个 64GB MicroSD 卡，以及关于如何更换 MicroSD 的说明。_

1.  新的 Micro SD 卡（SanDisk High Endurance 64GB）
2.  Micro SD 读卡器
3.  螺丝刀
4.  从原始卡复制的 '**config.json**' 文件  
    1.  **注意**：如果您无法检索原始文件，请要求我们的技术支持代理为您提供一个。

* * *

**步骤**

1.  关闭设备电源，打开前面板，移除 micro SD 卡顶部的黄色贴纸（您可以使用镊子），拔出并取出原始 micro SD 卡。
2.  使用 micro SD 读卡器将原始 micro SD 卡连接到您的计算机，从原始 SD 卡的 "resin-boot" 分区复制 'config.json' 文件，将其保存到您的计算机  
    1.  **注意**：如果您无法检索原始文件，请要求我们的技术支持代理为您提供一个。
3.  从这里下载 **SenseCap M1 镜像**：[**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
4.  从这里下载 **Balena Etcher 工具**：[**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)
5.  使用 Balena Etcher 将 **SenseCap M1 镜像**刷写到新的 micro SD 卡。
6.  刷写完成后，将我们提供的 "**config.json**" 文件从您的计算机复制到新 micro SD 卡的 "**resin-boot**" 分区。
7.  从计算机中拔出新的 micro SD 卡，并将其插入 SenseCap M1。
8.  打开 SenseCap M1，连接到互联网（最好使用以太网电缆），等待 20 分钟更新，并在仪表板（[**https://status.sensecapmx.cloud**](https://status.sensecapmx.cloud/)/）上检查状态或在 Helium 应用程序中运行诊断。

**注意**：只有在确认您的热点正常工作后，才应组装热点的前面板。

* * *

**如何打开 SenseCAP M1 并更换 Micro SD 卡**

*   **步骤 1：** 关闭热点电源，然后拆下天线。

![SenseCAP M1 SD Card 步骤 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **步骤 2**：使用螺丝刀松开前面板上的两颗螺丝。

![SenseCAP M1 SD Card 步骤 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **步骤 3**：移开前面板并将其放在一边。

![SenseCAP M1 SD Card 步骤 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **步骤 4**：撕掉 Micro SD 卡顶部的黄色贴纸（您可以使用镊子）。

![SenseCAP M1 SD Card 步骤 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD Card 步骤 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**如何读取 Micro SD 卡并刷写镜像**

*   **步骤 1**：将新的 Micro SD 卡插入 Micro SD 读卡器。

![SenseCAP M1 SD Card Image 步骤 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_将新的 Micro SD 卡插入 Micro SD 读卡器_

![SenseCAP M1 SD Card Image 步骤 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_确保完全插入_

*   **步骤 2**：使用 Balena Etcher 将 SenseCAP M1 镜像刷写到新的 Micro SD 卡。
    *   从这里下载 **SenseCap M1 镜像**：[**sensecap-m1.img.zip**](https://drive.google.com/file/d/1fZf09U2_jQOpsSKPWc8TAZ_Jl82X9tzx/view?usp=sharing)
    *   从这里下载 **Balena Etcher 工具**：[**balenaEtcher - Flash OS images to SD cards & USB drives ​**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_根据您的操作系统选择_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_将 Image.ZIP 文件拖拽到 Balena Etcher_

*   **步骤 3**：成功将镜像刷写到 MicroSD 卡后，将我们提供的或您原本复制的"config.json"文件从您的计算机复制到名为"resin-boot"的分区。

**对于 MacOS**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - 复制 'config.json' 文件_

**对于 Windows**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

*   **步骤 4**：从计算机中拔出新的 Micro SD 卡。
*   **步骤 5**：将新的 Micro SD 卡插入您的 SenseCAP M1。

![SenseCAP M1 SD Card 步骤 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **步骤 6**：开启 SenseCAP M1 电源，并重新连接到互联网（最好使用以太网线）。
*   **步骤 7**：等待大约 20 分钟以应用更新，然后检查仪表板（**[https://status.sensecapmx.cloud/)](https://status.sensecapmx.cloud/)**）或在完成后在 Helium 应用中运行诊断。

![SenseCAP M1 SD Card 步骤 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**注意**：只有在确认您的热点正常工作后，才应组装热点的前面板。

如果您有任何其他问题或疑问，请在此处提交工单：[**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

**如何格式化 Micro SD 卡并刷写镜像**
-------------------------------------------------------

**请谨慎操作**：以下步骤仅在我们的技术支持团队建议时使用。如果您**没有**得到建议，则无需重复这些步骤。

由于用户对热点的误用，我们发现频繁的电源循环、插拔 micro SD 卡可能会导致未知的 micro SD 卡错误，例如文件系统对齐问题。

**如果您被建议更换 micro SD 卡来调试问题，请仔细按照以下说明操作。**

* * *

**说明**

下面提供的说明将帮助您将镜像刷写到新的 micro SD 卡并替换 SenseCAP M1 中的原始卡，以修复由潜在 micro SD 卡错误引起的问题。

**注意**：在按照以下步骤更换 micro SD 卡之前，请先检查您的互联网连接，确保问题与互联网无关。

* * *

**要求**

1.  SenseCAP M1 热点中的 Micro SD 卡
2.  Micro SD 读卡器
3.  螺丝刀
4.  从原始卡复制的 '**config.json**' 文件  
    1.  **注意**：如果您无法检索原始文件，请要求我们的技术支持代理为您提供一个。
5.  SD Card Formatter 5.0.1
6.  对于 **Windows** => [**点击这里**](https://drive.google.com/file/d/15KMqnVpeOMRcFOYIRLbwA4CJooNsdkLM/view?usp=sharing) 下载并安装
7.  对于 **Mac OS** => [**点击这里**](https://drive.google.com/file/d/1FjxMOdGDjW3iKx3COeexY7E2bpF2cqDy/view?usp=sharing) 下载并安装
8.  SenseCAP M1 镜像 => [**点击这里**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0) 下载
9.  Balena Etcher => [**点击这里**](https://www.balena.io/etcher/) 下载

![SenseCAP M1 Replacement SD Card Kit](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_套件包含一个螺丝刀、一个 MicroSD 读卡器、一个 64GB MicroSD 卡，以及关于如何更换 MicroSD 的说明。_

* * *

**步骤**

1.  关闭设备电源，打开前面板，撕掉 Micro SD 卡顶部的黄色贴纸，拔出 Micro SD 卡。
2.  使用 Micro SD 读卡器将 Micro SD 卡连接到您的计算机，从"resin-boot"分区复制 '**config.json**' 文件，将其保存到您的计算机。  
    1.  **注意**：如果您无法检索原始文件，请要求我们的技术支持代理为您提供一个。
3.  使用"**SD Card Formatter 5.0.1**"格式化 MicroSD 卡
4.  使用 **Balena Etcher** 将 **SenseCap M1 镜像** 刷写到 MicroSD 卡。
5.  将 '**config.json**' 文件从您的计算机复制到 Micro SD 卡的"**resin-boot**"分区。
6.  将 Micro SD 卡从您的计算机插回 SenseCap M1 热点。
7.  开启 SenseCap M1 电源，连接到互联网（最好使用以太网线），等待约 20 分钟进行 OTA 更新，并在[**仪表板**](https://docs.sensecapmx.com/home/sensecap-dashboard)上检查状态或在 Helium 应用中运行诊断。

**注意**：只有在确认您的热点正常工作后，才应该组装热点的前面板。

* * *

**如何打开 SenseCAP M1 并更换 Micro SD 卡**

*   **步骤 1：** 关闭热点电源，然后拆下天线。

![SenseCAP M1 SD Card 步骤 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **步骤 2**：使用螺丝刀松开前面板上的两颗螺丝。

![SenseCAP M1 SD Card 步骤 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **步骤 3**：移开前面板并将其放在一边。

![SenseCAP M1 SD Card 步骤 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **步骤 4**：撕掉 Micro SD 卡顶部的黄色贴纸（您可以使用镊子）。

![SenseCAP M1 SD Card 步骤 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD Card 步骤 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**如何格式化 Micro SD 卡（Windows）**

*   **步骤 1****：** 将新的 Micro SD 卡插入 Micro SD 卡读卡器。  
    

![SenseCAP M1 SD Card Image 步骤 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_将新的 Micro SD 卡插入 Micro SD 卡读卡器_

![SenseCAP M1 SD Card Image 步骤 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_确保完全插入_

*   **步骤 2****：** 安装并运行 SD Card Formatter

![SD Card Formatter](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-formatter-1.png)

*   **步骤 3****：** 选择您连接到计算机的 Micro SD 卡，选择"覆盖格式化"，在卷标签中输入"resin-boot"，然后点击"格式化"按钮  
    

![SD Card Formatter Resin-Boot Folder](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-resin-1.png)

*   **步骤 4****：** 在对话窗口中选择"是"  
    

![Format SD Card](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-2.png)

*   **步骤 5**：等待约 30-45 分钟，格式化过程将完成

![SD Card Formatter Screen](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-3-1.png)

* * *

**如何格式化 Micro SD 卡（MacOS）**

步骤类似，请参见下面的图片：

![SD Card Formatter MacOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-1-1.png)

![SD Card Formatter MacOS Complete](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-2-1.png)

* * *

**如何将镜像刷写到 Micro SD 卡**

*   从这里下载 **SenseCap M1 镜像**：[**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
*   从这里下载 **Balena Etcher 工具**：[**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_根据您的操作系统选择_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_将 Image.ZIP 文件拖拽到 Balena Etcher_

* * *

**如何将 'config.json' 文件添加到 Micro SD 卡**
------------------------------------------------------

成功将镜像刷写到 MicroSD 卡后，将我们提供的或您原本复制的"**config.json**"文件从您的计算机复制到名为"resin-boot"的分区。

**注意**：请不要删除任何其他文件，否则会导致您的 SenseCAP M1 出现意外问题。

**注意**：每个设备都有不同的注册到它的'**config.json**'文件，请不要与他人分享您的'**config.json**'文件或使用他人的文件。

**对于 macOS**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - 复制_ 'config.json' _文件_

![MacOS Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**对于 Windows**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - 复制 'config.json' 文件_

![Windows Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

* * *

**格式化 Micro SD 卡并刷写镜像后**
-------------------------------------------------------------

*   **步骤 1**：从计算机中拔出新的 Micro SD 卡。
*   **步骤 2**：将新的 Micro SD 卡插入您的 SenseCAP M1。

![SenseCAP M1 SD Card 步骤 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **步骤 6**：打开 SenseCAP M1 电源，并重新连接到互联网（最好使用以太网电缆）。
*   **步骤 7**：等待大约 20 分钟以应用更新，然后检查仪表板（**[https://status.sensecapmx.cloud/)](https://status.sensecapmx.cloud/)**）或在完成后在 Helium 应用中运行诊断。

![SenseCAP M1 SD Card 步骤 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**注意**：只有在确认您的热点正常工作后，才应该组装热点的前面板。

如果您有任何其他问题或疑问，请在此处开启工单：[**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

Helium 应用错误
================

**未找到入网密钥**
---------------------------

请在此处开启支持工单：[**https://support.sensecapmx.com**](https://support.sensecapmx.com) 并发送您的热点 SN（序列号），以便我们解决您的问题。

![Helium App - No Onboarding Key Found](https://www.sensecapmx.com/wp-content/uploads/2022/07/onboarding.png)

* * *

**未找到热点**
--------------------

Helium 应用中显示"未找到热点"

**故障排除步骤**

1.  首先检查蓝色 LED，它应该处于慢闪模式。
2.  如果不是，这表明您的 SenseCAP M1 尚未启用蓝牙配置模式。检查您的热点和手机，确保蓝牙已打开。
3.  按住 SenseCAP M1 背面的按钮 6-10 秒以启用 SenseCAP M1 的配置模式，您会发现蓝色 LED 转为慢闪模式（每 2 秒闪烁 1 次），然后重新扫描热点。

![Helium 应用错误 - 未找到热点](https://www.sensecapmx.com/wp-content/uploads/2022/07/no-hotspots-found.png)

* * *

**设备已断开连接**
-----------------------

通过蓝牙配对时设备断开连接

**故障排除步骤**

当您使用比 S9 更新的三星手机时会出现兼容性问题。

请[**使用新镜像刷写 SD 卡**](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)。

![Helium 应用错误 - 设备已断开连接](https://www.sensecapmx.com/wp-content/uploads/2022/07/error-device-disconnected.png)

* * *

**特征写入失败**
-------------------------------

无法在 Helium 应用中注册热点

**故障排除步骤**

1.  如果您在通过以太网或 Wi-Fi 连接后立即注册热点，您会看到此错误，因为 OTA（空中更新）正在运行。
2.  请让您的热点通过以太网或 Wi-Fi 连接再保持 10 分钟以上。这将允许 OTA 更新完成。
3.  长按按钮 6-10 秒进入配置模式，然后尝试重新注册。

![Helium 应用错误 - 特征写入失败](https://www.sensecapmx.com/wp-content/uploads/2022/07/unable-to-register.webp)

* * *

**特征读取失败**
------------------------------

通过蓝牙配对或连接到 Wi-Fi 时出现错误

如果您在尝试配对热点以通过蓝牙连接或连接到 Wi-Fi 时收到以下错误消息，这意味着您的 Wi-Fi 网络的 SSID 包含无法识别的无效字符。

请避免使用非字母数字字符（例如 a - z、0 - 9 以外的字符）和符号。

**解决方案**：重命名您的 Wi-Fi 网络，不使用符号和非字母数字字符。

![Helium 应用错误 - 特征读取失败](https://www.sensecapmx.com/wp-content/uploads/2022/07/read-error.png)

* * *

**构建添加热点交易**
----------------------------------------

注册热点时 Helium 应用显示构建添加热点交易错误

**故障排除步骤**

1.  如果您在连接以太网或 Wi-Fi 后立即注册热点，您会看到此错误，因为 OTA（空中更新）正在运行或区块尚未完全同步。
2.  请让您的热点连接到以太网或 Wi-Fi 至少 30 分钟，等待固件 OTA 和区块同步过程完成。之后，请长按按钮 6-10 秒进入配置模式，然后尝试重新注册。
3.  完成后使用诊断或 SenseCAP 仪表板检查固件版本，确保它是最新的。  
    1.  **注意**：如果您的热点固件无法更新到最新版本，建议将设备使用的网络更改为另一个网络，例如您的手机热点，然后按照上述第二步操作。
    2.  **注意**：如果固件 OTA 完成后设备本身无法完全同步区块，建议在本地控制台中重置区块。

![Helium 应用错误 - 构建添加热点交易](https://www.sensecapmx.com/wp-content/uploads/2022/07/transaction-failed-add-hotspot.png)

* * *

**断言位置/天线**
------------------------------

尝试更新天线详细信息或断言位置时，您看到以下错误

**故障排除步骤**

问题与网络连接或应用有关。尝试重启您的应用或稍后再试。

![Helium 应用错误 - 断言位置/天线](https://www.sensecapmx.com/wp-content/uploads/2022/07/assert-location-error.png)