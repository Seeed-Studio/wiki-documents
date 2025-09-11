---
description: SenseCAP M2 Data Only 快速入门
title: SenseCAP M2 Data Only 快速入门
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
---

SenseCAP M2 Data Only 快速入门
=================================

以下是在几分钟内轻松设置您的热点所需的步骤！

**视频说明**
=====================

* * *

**步骤 1：安装 Helium 和 SenseCAP 应用程序并创建账户**
===============================================================

- 安装 Helium Hotspot 和 SenseCAP MX Hotspot 应用程序
- 从 Apple Store 或 Google Play 搜索并下载"Helium Hotspot"和"SenseCAP MX Hotspot"，并在您的手机上安装这两个应用程序。

"**Helium Hotspot**"应用程序是官方 Helium 应用程序，是 Helium 钱包认证所必需的。您可以使用它来注册和管理 Helium 钱包，并进行热点和 HNT 交易。

![Helium Hotspot App](https://www.sensecapmx.com/wp-content/uploads/2022/07/helium-app-logos-1.webp)

"**SenseCAP MX Hotspot**"应用程序是由 SenseCAP MX 团队开发的官方 SenseCAP 热点应用程序。您可以使用它来注册和管理您的 SenseCAP 热点。

![SenseCAP Hotspot App](https://www.sensecapmx.com/wp-content/uploads/2022/07/SenseCAP-Hotspot-App.png)

- 在 Helium 应用程序中创建 Helium 钱包

生成新的 Helium 钱包时，您将看到一个 12 个单词的密码。请按顺序记录或备份这 12 个单词的密码，并将其保存在安全的地方，因为如果丢失，这 12 个单词的密码永远无法恢复。

- 在 SenseCAP MX Hotspot 应用程序中创建账户

将 Helium 钱包链接到您的 SenseCAP 账户，您就可以准备添加新的热点了。

![Deeplink Helium Wallet App](https://www.sensecapmx.com/wp-content/uploads/2022/07/deeplink-1.png)

**如何下载 Helium 应用程序并创建钱包**
==================================================

**如何下载 SenseCAP 并创建账户**
===============================================

* * *

**步骤 2：设置 SenseCAP M2 并连接到互联网**
==========================================================

- 设置 SenseCAP M2

将天线、电源适配器和以太网电缆（非必需）连接到热点并通电。

**电源 LED** 将显示为**红色**，大约 15 秒后（如果您使用 PoE 供电，等待时间会稍长一些），顶部的指示灯将闪烁**绿色**，表示热点正在启动。

启动约 1 分钟后，如果热点已通过以太网电缆连接到互联网，指示灯将显示为稳定的**绿色**；或者在等待进一步的 Wi-Fi 配置时显示为稳定的**蓝色**。

![SenseCAP M2 Quick Start](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png)

**固件更新**
===================

在首次启动期间，建议通过以太网电缆将热点连接到互联网，并等待约 30 分钟完成固件更新，然后再进行下一步操作。（您也可以在热点连接到 Wi-Fi 网络后执行此步骤）。

固件更新是自动的，需要 10-30 分钟。在更新过程中，指示灯将从闪烁的**橙色**变为稳定的**绿色**一到两次。固件更新完成后热点将重启，指示灯将保持稳定的**绿色**。

**注意**：在热点尚未更新到最新固件之前进行进一步步骤将导致意外错误且无法继续，请耐心等待更新过程，不要断电或断开互联网连接。

**PoE 连接**
==================

SenseCAP M2 支持 PoE（以太网供电）并兼容 IEEE 802.3 af 标准。如果您的调制解调器/路由器不支持 PoE，您需要一个额外的 PoE 交换机作为 PSE（供电设备）提供 40V-57V 直流电源。

![SenseCAP M2 POE Connection Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png)

- 在 SenseCAP Hotspot 应用程序中通过蓝牙连接热点

按住按钮 5 秒直到蓝色指示灯缓慢闪烁进入配置模式，然后按照应用程序中的说明连接热点。

![SenseCAP M2 Setup - App](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-setup-app-scaled.jpg)

**注意**：对于 SenseCAP M2 Data Only 热点，请选择"**SenseCAP M2 (Data-Only)**"。如果您周围有多个热点，您可以通过热点名称下方的 6 位 MAC 地址来识别热点。

- 设置 Wi-Fi 连接

点击"扫描网络"，选择 Wi-Fi 并输入密码；或者如果您已经使用以太网电缆，请点击"使用以太网"。

![SenseCAP M2 Wifi Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi.png)

* * *

**步骤 3：Helium 热点入网和断言位置**
=========================================================

- 将热点添加到 Helium 网络

请按照应用程序说明将热点添加到 Helium 网络。

**注意**：请注意，产品中不包含入网费用。用户钱包将扣除 10 美元的入网费和 5 美元的位置断言费来进行入网。在进行入网过程时，请确保您的钱包中有足够的 Helium 数据积分。

- 断言热点位置

请按照应用程序说明，在地图上选择实际放置位置，并断言位置。

* * *

**您的 SenseCAP M2 已准备就绪！欢迎来到人民网络！**
=====================================================================

![Longfi](https://www.sensecapmx.com/wp-content/uploads/2022/06/longfi.webp)
