---
description: OpenWrt-常见问题
title: 如何在双千兆以太网载板上使用无eMMC的CM4
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/use_a_CM4_witout_eMMC
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q2: 如果我有非CM4版本的双千兆以太网载板，并连接了一个无eMMC的CM4，该怎么办？ -->

如果您想在双千兆以太网载板上使用无eMMC的计算模块4（Compute Module 4），您需要将OpenWrt刷入micro-SD卡并将其插入载板。请根据您的操作系统按照以下步骤操作。

- **步骤1.** 使用连接到计算机的**micro-SD卡读卡器**或笔记本电脑上的**内置读卡器**，将micro-SD卡插入计算机

- **步骤2.** 根据您的操作系统访问[此链接](https://www.balena.io/etcher)下载**balenaEtcher**软件

- **步骤3.** 以**管理员身份**运行**balenaEtcher**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **步骤4.** 点击**Flash from file**并指向您之前下载的OpenWrt镜像文件

- **步骤5.** 点击**Select target**并选择连接的micro-SD卡

- **步骤6.** 最后，点击**Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

- **步骤7.** 从计算机中弹出micro-SD卡，并将其插入双千兆以太网载板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/micro-sd-install.png" alt="pir" width="400" height="auto"/></p>