---
description: 概述
title: 概述
keywords:
- Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-FS-Overview
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 概述

本仓库介绍如何安装在 Wio Terminal 上使用的文件系统库。它提供了与 SD 卡进行文件操作的基本功能，允许使用 SPI 接口从 SD 卡读取/写入数据。

## 安装文件系统库

1. 访问 [Seeed_Arduino_FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/master) 仓库，并将整个仓库下载到您的本地驱动器。

2. 现在，可以将 FS 库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `Seeed_Arduino_FS` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 安装依赖的 SFUD 库

1. 访问 [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) 仓库，并将整个仓库下载到您的本地驱动器。

2. 现在，可以将 SFUD 库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `Seeed_Arduino_SFUD` 文件。

## MicroSD 卡格式

- **最大 MicroSD 卡容量：`16GB`**

- **支持的 MicroSD 卡格式：**

  - FAT12

  - FAT16

  - FAT32

  - exFAT