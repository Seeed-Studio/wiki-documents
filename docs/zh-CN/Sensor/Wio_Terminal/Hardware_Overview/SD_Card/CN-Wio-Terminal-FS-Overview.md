---
description: 概述
title: 概述
keywords:
- Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-FS-Overview
last_update:
  date: 3/09/2024
  author: 金菊
---

# 概述

该仓库介绍了如何安装在Wio Terminal上使用的文件系统库。它提供了与SD卡一起进行文件操作的基本功能，使用SPI接口可以读取/写入SD卡。

## 安装文件系统库

1. 访问 [Seeed_Arduino_FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/master) 仓库并将整个仓库下载到本地驱动器。

2. 现在，可以将SFUD库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 选择刚刚下载的 `Seeed_Arduino_FS` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 安装依赖的SFUD库

1. 访问 [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) 仓库并将整个仓库下载到本地驱动器。

2. 现在，可以将SFUD库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 选择刚刚下载的 `Seeed_Arduino_SFUD` 文件。

## MicroSD卡格式

- **最大MicroSD卡容量: `16GB`**

- **支持的MicroSD卡格式:**

  - FAT12

  - FAT16

  - FAT32

  - exFAT
