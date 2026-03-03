---
description: SenseCAP M1 本地控制台
title: SenseCAP M1 本地控制台
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console
last_update:
  date: 02/14/2023
  author: Matthew
---


**概述**
============

**2022年1月14日更新的最新功能：** 为了提高 SenseCAP 本地控制台的安全级别，除了 CPUID 之外，还增加了一个额外的密码来登录本地控制台，默认密码是热点的序列号。强烈建议在首次登录后更改密码。

**注意**：您的计算机和热点应连接到同一个路由器/网络，以便使用本地控制台。如果您的热点在远程位置，您目前将无法运行本地控制台中的任何功能。

![Local Console](https://www.sensecapmx.com/wp-content/uploads/2022/07/local-console.png)

**登录**
=========

**1. 获取您热点的 CPU ID 和 S/N**

*   如果您没有 SenseCAP M1 仪表板账户，或者尚未将您的热点添加到仪表板，请找到您的 SenseCAP M1 的设备标签，并获取 S/N 和 CPU ID

![Local Console Login Details](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-16.png)

*   如果您已经注册了 SenseCAP M1 仪表板账户并添加了您的热点，您可以从仪表板复制您热点的 CPU ID 和 S/N。

![Local Console Login Details 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-1-1.png)

**2. 获取您热点的 IP 地址**

*   如果您没有 SenseCAP M1 仪表板账户，或者尚未将您的热点添加到仪表板，请在您的路由器管理页面中找到您热点的 IP 地址，或在您的 Helium APP 上运行诊断以获取 IP 地址。然后在浏览器中输入 IP 地址以进入本地控制台页面。
*   如果您已经注册了 SenseCAP M1 仪表板账户并添加了您的热点，您可以从仪表板找到您热点的 IP 地址：
    *   点击"**Wi-Fi IP 地址**"或"**LAN IP 地址**"链接，该链接会跳转到 Turbo Sync 本地控制台页面。
    *   如果您通过 Wi-Fi 连接，您将看到热点的 Wi-Fi IP 地址可供点击。
    *   如果您通过以太网电缆或本地 LAN 连接，您将看到热点的 LAN 地址可供点击。

![Local Console Login Details 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi-name-ts-1.png)

**3. 使用热点 CPU ID 和默认密码（序列号，即 S/N）登录**

![Local Console Login Details 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/login-1.png)

![Local Console Login Details 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-2-1.png)

**4. 更改默认密码**

![Local Console Change Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password-1.png)

首次登录后，请点击"**更改密码**"按钮来修改您的默认密码。新密码应包含 8~32 位数字，至少包含数字、字母和符号中的两种组合。密码将被加密并仅存储在您的 SenseCAP M1 本地。

出于安全考虑，我们暂时不提供"**忘记密码**"功能，所以请牢记您的密码，如果您忘记了密码，需要重新刷写 MicroSD 卡来恢复默认密码。

对于 CLI 用户，请注意每次更改密码时，本地控制台设备令牌也会自动更新。刷新本地控制台网页，您将看到新的设备令牌。请保管好您的设备令牌，在任何情况下都不要与第三方分享。

**5. 获取绑定密钥并将您的热点添加到 SenseCAP 仪表板**

![Local Console Bind Key](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3-2.png)

在上面的本地控制台页面获取设备 CPU ID、设备 ETH MAC 和设备绑定密钥。

* * *

**重要信息**

**注意**：Turbo Sync 可能导致 micro SD 卡频繁擦除和写入，建议仅在必要时使用。

如果您设备的同步区块高度非常接近区块链（少于 200 个区块），则您的设备不需要 Turbo Sync，您将无法运行它。

![Turbo Sync](https://www.sensecapmx.com/wp-content/uploads/2022/07/TS-console.png)

Turbo Sync 过程可能需要一段时间才能完成，这取决于网络速度。请保持稳定的互联网连接，并耐心等待同步过程。

**重要**：请不要在 Turbo Sync 过程中关闭设备电源，否则您的设备在下次启动时将出现损坏的账本，并将从上次祝福的快照重新开始同步。在这种情况下，您将不得不重复 Turbo Sync 过程。

* * *

**重启**
==========

**注意**：您需要登录到本地控制台。

点击橙色的"重启"按钮开始重启过程。

*   当您看到 \[reboot\] request sent + \[reboot going\] 时，过程已开始。
*   当您看到"----log stream disconnected from the host----"和"----log stream connected to the host----"时，您已完成重启过程。

![Reboot SenseCAP Hotspot](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4-2.png)

**注意**：Helium 区块链账本有时会因 micro SD 卡中的意外错误而损坏，导致区块链同步过程在某个区块上停止并同步失败。

在本地控制台中重启热点可能有助于解决 micro SD 卡中的潜在错误。

**重要**：请不要频繁重启热点，仅在必要时重启。

当区块高度卡住且不增加，高度停留在 -1 或 1 时，请执行区块重置。按照这些步骤后，热点将再次完全同步。

* * *

**关机**
=============

建议在拔掉设备插头之前使用关机功能，以防止突然断电对设备造成损坏。

**如何使用关机功能**

点击"**Shutdown**"按钮并接受提示。

*   关机过程需要几分钟时间。
*   当关机完成时，您会看到蓝色LED灯和以太网端口LED灯熄灭。

![SenseCAP Shutdown Feature](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5-2.png)

**注意**：请确保您在关机时就在SenseCAP M1旁边，因为如果您想重新启动设备，需要重新插拔适配器。

* * *

**重置区块**
===============

**注意**：您需要登录到本地控制台。

点击红色的"**Reset Blocks**"按钮开始重置区块过程。

![Reset Blocks SenseCAP](https://www.sensecapmx.com/wp-content/uploads/2022/07/reset-blocks.png)

**注意**：SenseCAP M1将开始加载最新的blessed快照。仪表板中的状态可能会有延迟，临时看到"**Unknown**"同步状态是正常的。

如果您需要运行Turbo Sync，请等待最新的blessed快照加载完成（大约30分钟）。