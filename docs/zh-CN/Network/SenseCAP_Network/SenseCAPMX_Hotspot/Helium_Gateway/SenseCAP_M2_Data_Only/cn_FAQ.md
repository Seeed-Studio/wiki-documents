---
description: SenseCAP M2 Data Only 常见问题
title: SenseCAP M2 Data Only 常见问题
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/FAQ
last_update:
  date: 02/14/2023
  author: Matthew
---

常见问题
===

**SenseCAP M2 是轻量级网关吗？**
===================================

我们此次发布的 SenseCAP M2 Data Only LoRaWAN 网关是 Helium 网络的纯数据型网关。

* * *

**是否也会有轻量级热点？**
=========================================

轻量级网关尚未被 Helium 官方发布。请关注 Helium 公告以获取轻量级网关开发更新。这在我们的路线图上。请确保您关注我们的社交媒体渠道以接收进一步更新。

* * *

**SenseCAP 何时会发布 Helium 轻量级网关？**
========================================================

我们此次发布的 SenseCAP M2 Data Only LoRaWAN 网关是 Helium 网络的纯数据型网关。轻量级网关尚未被 Helium 官方发布。请关注 Helium 公告以获取轻量级网关开发更新。当有轻量级网关更新时，我们也会在官方渠道发布。敬请关注！

* * *

**SenseCAP M1 和 SenseCAP M2 Data-Only 之间有什么区别？**
=========================================================================

SenseCAP M1 是支持 Helium 网络的 LoRaWAN 网关，可以从 PoC（覆盖证明）和数据传输中获得奖励。SenseCAP M2 Data Only 是支持 Helium LongFi 网络的 LoRaWAN 网关，从数据传输中获得奖励。纯数据版本不支持 PoC 奖励。

* * *

**SenseCAP M2 Data Only 是否支持像 SenseCAP M1 一样从 PoC 获得奖励？**
===========================================================================

不支持。SenseCAP M2 Data Only 是一个可以传输 LoRaWAN 数据并获得奖励的 LoRaWAN 网关。不支持 PoC 奖励。

* * *

**SenseCAP 能够重置我的 Helium 钱包密码吗？**
=============================================================

绝对不能。如果丢失了，这 12 个单词永远无法被任何人恢复。**请**务必记住或写下来。"**丢失 12 个单词，就失去一切**"

* * *

**SenseCAP 能够通过恢复出厂设置解绑我的热点吗？**
=======================================================================

没有恢复出厂设置功能可以在不登录钱包的情况下"解绑"已注册到钱包的热点，这是区块链应用程序最基本的安全保障。

如果您想将热点转移给其他人，您需要登录并在 Helium Hotspot App 和 SenseCAP Hotspot App 中进行操作。

* * *

**我在哪里可以查看我的热点奖励和状态？**
======================================================

请在 SenseCAP Hotspot App 或 Helium Explorer ([**https://explorer.helium.com)**](https://explorer.helium.com)) 中查看您的热点奖励和区块链活动，您可以在 SenseCAP Dashboard (**[https://status.sensecapmx.cloud/#/dashboard](https://status.sensecapmx.cloud/#/dashboard/)**) 中查看您的热点状态。

* * *

**我可以升级天线来改善覆盖范围吗？**
======================================================

使用射频设备时请遵守当地法律法规。在硬件方面，您可以使用相同频率的 LoRa 天线。您应该选择带有 RP-SMA 公头连接器的天线或电缆。更换天线时请在 App 中更新您的天线信息。

* * *

**SenseCAP M2 支持 PoE 吗？**
=================================

SenseCAP M2 支持 PoE（以太网供电）。如果您的调制解调器/路由器不支持 PoE，您将需要额外的 PoE 交换机。PoE 交换机应为 40V-57V 直流电源输入并支持 12-2A 输出。

* * *

**我在哪里可以找到热点的序列号 (S/N)？**
============================================================

您可以从设备底部的标签和包装上的标签找到设备 S/N。建议您在添加新热点时记下 S/N 和相应的 Helium 设备名称以供进一步使用。

* * *

**SenseCAP M2 的天线增益是多少？**
============================================

3dBi。凭借 3dBi 高性能天线，SenseCAP M2 可以提供数英里的 LoRaWAN 覆盖范围和强信号。您始终可以根据不同环境升级天线以适应您的使用场景。

* * *

**SenseCAP M2 有 PoE 功能吗？**
=======================================

是的。SenseCAP M2 具有 PoE 功能。如果您的路由器或调制解调器没有 PoE，您的设置中将需要额外的 PoE 注入器。

* * *

**SenseCAP M2 有多少个版本？**
===================================================

SenseCAP M2 现在提供具有 FCC 和 CE 认证的 US915 和 EU868 版本。它将很快为不同国家和地区提供更多频段版本和相应认证。

* * *

**SenseCAP M2 是室内还是室外网关？**
================================================

我们为 SenseCAP M2 提供室内和室外版本，您可以选择 SenseCAP 室外外壳将您的室内 SenseCAP M1 和 M2 升级为室外版本。

SenseCAP 开发了一个防水室外外壳，适合市场上的通用热点。这将进一步为用户提供将网关放置在室外的可能性，因此更多样化的 LoRaWAN 场景可以成为现实。

* * *

**会有 AS923、AU915、IN865 和其他频率吗？**
=============================================================

是的。SenseCAP M2 具有 US915 和 EU868 版本，并为美国和欧盟市场提供 FCC 和 CE 认证。它将为不同国家和地区提供更多频段版本和相应认证。

* * *

**所有 SenseCAP LoRaWAN 网关都是 Helium 热点吗？**
======================================================

SenseCAP MX 系列中的 SenseCAP M1 和 M2 支持 Helium 网络。当您搜索 SenseCAP 时，您会发现还有其他网关也使用 SenseCAP 名称。请注意，并非所有 SenseCAP 品牌的网关都是 Helium 热点。

* * *

**SenseCAP M2 使用什么类型的 SD 卡？**
==============================================

SenseCAP M2 不需要 SD 卡。