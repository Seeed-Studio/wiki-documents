---
description: OpenWrt-FAQ
title: How to fix device when "Read Only Root filesystem"
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /fix_device_ReadOnlyRootFilesystem
last_update:
  date: 6/21/2023
  author: Seraphina
---

 <!-- Q4: How do I fix my device when I faced the "Read Only Root filesystem"? -->

For devices in the "Read Only Root filesystem", we can use `e2fsck` to check the system and fix it. Please open the terminal window and run the following command:

```
e2fsck /dev/mmcblk0p2
```