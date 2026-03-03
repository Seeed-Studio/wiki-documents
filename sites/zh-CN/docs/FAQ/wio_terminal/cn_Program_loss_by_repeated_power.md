---
description: Wio Terminal - 常见问题解答
title: 如何避免 Wio Terminal 在多次重启后程序丢失
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Program_loss_by_repeated_power
date: 1/31/2024
author: Seraphina
---

如果您遇到 **Wio Terminal 在多次重启后无法正常启动** 的情况，请参考以下 Wiki 提供的解决方案：

在开关机过程中，如果引导程序在芯片尚未稳定时尝试访问闪存，可能会导致意外的数据丢失。这种情况可能会导致应用程序无法启动，因为引导程序无法正确读取存储在闪存中的应用代码或数据。

为了解决此问题，我们建议将引导程序更新到以下版本，以确保它仅在芯片稳定后访问闪存。请按照以下步骤进行操作：

**步骤 1：** 下载最新的引导程序 [这里](https://files.seeedstudio.com/wiki/Wio-Terminal/res/update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2)

**步骤 2：** 通过 USB Type-C 将 Seeeduino Wio Terminal 插入您的电脑。

**步骤 3：** 快速滑动电源开关两次进入引导程序模式。更多参考，请查看 [这里](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/#enter-bootloader)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**步骤 4：** 您的电脑上应该会出现一个名为 `Arduino` 的外部驱动器。将下载的 [`update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2) 文件拖动到 `Arduino` 驱动器中。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/update-bootloader-version.png" /></div>

现在您已经成功更新了引导程序，尽情享受使用 Wio Terminal 的乐趣吧！