---
description: 介绍如何下载 Watcher 的开源仓库并构建 IDF 环境。
title: 构建 Watcher 开发环境
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.webp
slug: /cn/build_watcher_development_environment
sidebar_position: 1
last_update:
  date: 11/5/2024
  author: Citric
---

# 构建 Watcher 开发环境

## ESP-IDF 安装

请参考 espressif 的[官方安装指南](https://docs.espressif.com/projects/esp-idf/en/v5.2.1/esp32s3/get-started/index.html)。

请注意，`factory_fw` 示例基于 IDF 的 v5.2.1 版本。

```
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
```

如果您使用的是 macOS 或 Linux，我们强烈建议您为 IDF 环境初始化创建别名 `get_idf`。

## 首次构建

### 获取 IDF 环境

```
get_idf
idf.py
```

如果您已正确安装 IDF，在执行 `idf.py` 命令后，您将看到 idf.py 工具的帮助信息。

```
$ idf.py
Usage: idf.py [OPTIONS] COMMAND1 [ARGS]... [COMMAND2 [ARGS]...]...

  ESP-IDF CLI build management tool. For commands that are not known to idf.py an attempt to execute it as a build system target will be
  made. Selected target: esp32s3

...

```

将芯片目标设置为 `esp32s3`。

```
idf.py set-target esp32s3
```

### 构建项目

```
idf.py build
```

最新出厂固件的代码位于 `example/factory_firmware`。

```
cd example/factory_firmware
idf.py build
```

### 烧录

使用 **USB 数据线** 将 SenseCAP Watcher 连接到您的 PC 或笔记本电脑。

**请注意！！！**

**只有底部（侧面）的 USB 端口具有数据传输功能**

**背面的 USB 端口仅为设备提供电源。**

当您使用合适的数据线从正确的 USB C 端口连接 Watcher 时，您的 PC 上将出现 1 个 USB 设备条目，以及 2 个 UART 设备。它们分别连接到 ESP32S3 和 Himax SoC 的 UART。没有固定的模式来确定哪个 SoC 使用哪个 UART。因此，请尝试使用每个 UART 设备执行以下命令，直到您看到日志输出。

```
idf.py --port /dev/ttyACM0 monitor
```

请将 `/dev/ttyACM0` 替换为您操作系统上正确的 UART 设备名称。例如，在 MacOS 上看起来像 `/dev/tty.wchusbserial56F3067xxxx`，在 Windows 上看起来像 `COMx`。同样，如果您没有看到日志输出的进度，请尝试下一个 UART。

**请注意！！！**

名为 `nvsfactory` 的分区包含设备正常工作所需的关键出厂数据，请小心不要擦除该分区。因此，强烈建议您在执行任何烧录操作之前备份此分区。

我们将使用 esptool.py 进行备份。此工具是 IDF 安装的一部分，因此如果您已通过 IDF 安装，它应该已经存在。

```
# Linux / MacOS
which esptool.py

# Windows
where esptool.py
```

现在让我们备份 `nvsfactory` 分区。

```
esptool.py --port /dev/tty.wchusbserial56F3067xxxx --baud 2000000 --chip esp32s3 --before default_reset --after hard_reset --no-stub read_flash 0x9000 204800 nvsfactory.bin
```

完成备份后，就可以烧录我们的固件了。

```
idf.py --port /dev/ttyACM0 -b 2000000 app-flash
```

使用子命令 `app-flash` 仅烧录应用程序分区，这将保护您的 `nvsfactory` 分区，最重要的是可以节省您的时间。

### 监控日志输出

```
idf.py monitor
```

使用 `ctrl + ]` 退出监控。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>