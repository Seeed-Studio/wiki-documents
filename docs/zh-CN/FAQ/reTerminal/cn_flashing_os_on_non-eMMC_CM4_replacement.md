---
description: reTerminal-常见问题解答
title: 如果我将CM4替换为非eMMC版本，如何刷写操作系统
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/flashing_os_on_non-eMMC_CM4_replacement
last_update:
  date: 2023/6/21
  author: Seraphina
---


<!-- 问题4：如果我将CM4替换为非eMMC版本，如何刷写操作系统 -->

如果您想在reTerminal上使用没有eMMC的Compute Module 4，那么您需要插入一张micro-SD卡并刷写您选择的操作系统。请根据您的操作系统按照以下步骤操作。

- **步骤 1.** 使用连接到计算机的**micro-SD卡读卡器**，或使用笔记本电脑上的**内置读卡器**，将micro-SD卡插入计算机。

- **步骤 2.** 通过访问[此链接](https://www.raspberrypi.org/software/)下载**Raspberry Pi Imager**软件。

:::note
您可以选择下载适用于**Windows、Mac或Ubuntu**的版本。
:::

- **步骤 3.** 打开Raspberry Pi Imager软件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 按下键盘上的**CTRL + SHIFT + X**，打开**高级选项**窗口。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

在这里，您可以**设置主机名、启用SSH、设置密码、配置WiFi、设置区域设置**等。

- **步骤 5.** 点击**CHOOSE OS**并选择您偏好的操作系统。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

:::note
您可以通过导航到**Other general purpose OS**选择操作系统，例如**64位Ubuntu**。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 6.** 点击**CHOOSE STORAGE**并选择连接的micro-SD卡。

- **步骤 7.** 最后，点击**WRITE**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

请等待几分钟，直到刷写过程完成。

- **步骤 8.** 从计算机中弹出micro-SD卡，并将其插入reTerminal。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**注意：** 您需要打开reTerminal的外壳才能访问micro-SD卡插槽。