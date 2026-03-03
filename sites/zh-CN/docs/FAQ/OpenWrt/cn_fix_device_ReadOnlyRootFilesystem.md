---
description: OpenWrt-FAQ
title: 如何修复设备出现“只读根文件系统”问题
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/fix_device_ReadOnlyRootFilesystem
last_update:
  date: 2023/6/21
  author: Seraphina
---

 <!-- Q4: 当我遇到“只读根文件系统”时，如何修复我的设备？ -->

对于处于“只读根文件系统”状态的设备，我们可以使用 `e2fsck` 来检查系统并修复它。请打开终端窗口并运行以下命令：

```
e2fsck /dev/mmcblk0p2
```