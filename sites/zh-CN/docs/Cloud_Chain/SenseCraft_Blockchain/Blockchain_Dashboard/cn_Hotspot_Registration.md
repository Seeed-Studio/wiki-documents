---
sidebar_position: 3
description: 热点注册
title: 热点注册
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-blockchain/blockchain-dashboard/hotspot-registration
aliases:
  - /sensecraft-blockchain/sensecap-mx-dashboard/hotspot-registration
last_update:
  date: 06/06/2025
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/cn/sensecraft-blockchain/blockchain-dashboard/hotspot-registration/
---

# 热点注册

**如何使用 Helium Wallet 注册热点**
===============================================

-  请访问 [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecap_mx_dashboard) 登录 SenseCAP Dashboard
-  确保你的 "Helium APP" 为最新版本，并登录到你的 Helium 钱包。

你可以通过访问 [**Android Store**](https://play.google.com/store/apps/details?id=com.helium.wallet&hl=en_US) 或 [**iOS Store**](https://apps.apple.com/app/id1450463605) 下载最新版本。

- 在 SenseCAP Dashboard 上，点击左侧菜单中的 "Hotspot"，然后点击蓝色按钮 "+ Add New Hotspot"。

随后会弹出一个二维码，用于从 Helium Wallet 导入你的热点，如下所示：

![SeneseCAP Hotspot Registration](https://www.sensecapmx.com/wp-content/uploads/2022/07/dash-qr.png)

使用 "Helium App" 扫描 Dashboard 中显示的二维码。

![SenseCAP Hotspot Registration 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-register.png)

使用你的 Helium Wallet 扫描二维码，并在提示链接钱包时在 "**Helium App**" 中授予权限。

**注意**：这不会让任何人访问你钱包的助记词，它只允许 Dashboard 连接并将你的热点添加到 Dashboard 中。

![SenseCAP Hotspot Registration 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2-register.png)

选择并添加你希望添加到 SenseCAP Dashboard 的热点，然后点击按钮。

![SenseCAP Hotspot Registration 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3-register.png)

如果你的钱包已成功链接，你将看到如下信息。**一切就绪！**

![SenseCAP Hotspot Registration 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4-register.png)

**使用设备信息注册热点**
=============================================

**注意**：你可以通过 Helium Wallet 或设备信息将热点注册到 Dashboard。如果你选择使用设备信息注册热点，你需要登录到热点的本地控制台以获取设备信息。

![SenseCAP Hotspot Registration 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-6-1.png)

- 登录 Dashboard ⇒ [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecap_mx_dashboard)
- 输入你在注册时创建的账号信息并登录
- 在左侧菜单栏中导航到 “Hotspot”
- 点击 "Add new Hotspot"

![SenseCAP Hotspot Registration 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-7-1.png)

- 系统会提示你输入 "**SN", "ETH MAC**" 地址、"**CPU ID**" 和 "**bind key**"，其中 "**SN**" 位于 SenseCAP M1 底部标签上，其他信息在本地控制台页面中。
- 点击 “**Confirm**”，热点就会被添加到你的 Dashboard 中。

**注意**：CPU ID 通常以 1 开头，后面跟着 7 个 0，例如：_**10000000**_

**恭喜你**！你已成功将热点添加到 Dashboard 开始进行监控。你可以重复这些步骤添加更多热点进行监控。
