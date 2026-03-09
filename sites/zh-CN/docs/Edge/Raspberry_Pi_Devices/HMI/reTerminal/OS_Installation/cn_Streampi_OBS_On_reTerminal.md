---
description: 用于 reTerminal 的 Stream-pi 和 OBS studio
title: 用于 reTerminal 的 Stream-pi 和 OBS studio
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Streampi_OBS_On_reTerminal
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2025-05-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/Streampi_OBS_On_reTerminal/
---


# Seeed reTerminal 配合 streampi 实现 OBS Studio 控制和便捷控制

## 介绍

### 什么是 reTerminal 🤔

[reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) 是一款树莓派一体化开发板，由树莓派计算模块 4(CM4) 模块驱动，集成了一块 IPS 面板类型的多点触控屏幕，配备双频 2.4GHz/5GHz Wi-Fi 和蓝牙 5.0，预装基于树莓派的 Linux 系统，提供 4 GB RAM 和 32 GB eMMC 存储。通过模块化设计，该开发板配备了多个可访问的组件和高速连接器。它可以整洁地应用于家庭助手和个人 AI 开发应用，同时也能执行适合作为工业设施的工业级功能。

特性

- 树莓派一体化开发板：由 RPi CM4 32GB 驱动，集成 IPS 多点触控屏幕、双频 Wi-Fi 和蓝牙，预装兼容的 Linux 系统

- 模块化设计：具有工业级高速扩展接口和 40 针树莓派兼容接头

- 丰富的接口和组件：配备 USB Type-A 端口、千兆以太网、micro-HDMI、micro-SD 卡槽、MIPI 摄像头接口、光传感器、加速度计、蜂鸣器、RTC 和可编程按钮

- 整洁的个人助手：利用内置传感器和组件，在 Seeed 和社区提供的多个有趣的仪表板或 AI 项目中享受乐趣

- 出色的工业设施：受益于稳定的基于树莓派的操作系统、多个扩展的工业级连接器、加密协处理器和官方 Seeed 扩展板 reTerminal E10-1

### 什么是 streampi 🤔

Stream-Pi 是一款面向艺术家、创作者、游戏玩家和极客的强大宏键盘软件。

Stream-Pi 作为一个合适的开源替代方案存在，它提供了丰富的主题系统，用户可以使用 CSS 个性化 UI 系统的每个角落和细节。

Stream-Pi 还提供了丰富的 API，开发者可以使用它来编写自己的自定义插件——就像目前可用的一些付费和专有选项一样。这里的重大区别是 Stream-Pi 完全免费且开源！

### 什么是 OBS Studio 🤔

OBS Studio 是一款免费开源的屏幕录制和直播应用程序。使用 C/C++ 编写并基于 Qt 构建，OBS Studio 提供实时捕获、场景合成、录制、编码和通过实时消息传输协议 (RTMP) 进行广播。它可以将视频流传输到任何支持 RTMP 的目标，包括 YouTube、Twitch、Instagram 和 Facebook。

### 我们为什么要这样做 🤨

我们发现 reterminal 的内置显示屏、出色的性能以及对树莓派相关生态系统的支持，使其作为生产力工具很容易实现智能和便捷的控制。

所以，跟随我们一起尝试吧！😊

## 安装 🐱‍🚀

- 硬件准备
  - reTerminal
  - PC

为了稳定我们的教程基于 ubuntu 18.04，也适用于其他系统，如 windows mac 和其他 linux 发行版。

### 安装 OBS studio ⌛

有两种方法可以做到这一点，使用预构建的包或自己编译，**推荐的方法是使用预构建的包**，它经过测试并且始终可用。如果您想尝试最新功能，可以按照官方 obs 编译过程进行，但是，由于依赖大量包，可能会出现一些不可预见的问题。

#### 使用预编译包

```bash
sudo apt update 
sudo apt install wget git 
```

```bash
wget https://github.com/obsproject/obs-studio/releases/download/27.2.4/obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install ./obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install -f
```

#### Custom OBS

```bash
sudo apt install build-essential checkinstall cmake git libmbedtls-dev libasound2-dev libavcodec-dev libavdevice-dev libavfilter-dev libavformat-dev libavutil-dev libcurl4-openssl-dev libfontconfig1-dev libfreetype6-dev libgl1-mesa-dev libjack-jackd2-dev libjansson-dev libluajit-5.1-dev libpulse-dev libqt5x11extras5-dev libspeexdsp-dev libswresample-dev libswscale-dev libudev-dev libv4l-dev libvlc-dev libx11-dev libx11-xcb1 libx11-xcb-dev libxcb-xinput0 libxcb-xinput-dev libxcb-randr0 libxcb-randr0-dev libxcb-xfixes0 libxcb-xfixes0-dev libx264-dev libxcb-shm0-dev libxcb-xinerama0-dev libxcomposite-dev libxinerama-dev pkg-config python3-dev qtbase5-dev libqt5svg5-dev swig libwayland-dev qtbase5-private-dev libpci-dev
```

```bash
git clone https://github.com/obsproject/obs-studio.git -b release/27.2 obs_27.2
cd obs-studio
git submodule update --init --recursive
```

```bash
mkdir build
cd build
cmake -DBUILD_BROWSER=OFF ..
```

### 为 OBS studio 安装 websocket 插件

```bash
wget https://github.com/obsproject/obs-websocket/releases/download/4.9.0/obs-websocket_4.9.0-1_amd64.deb
```

```bash
sudo apt update 
sudo apt install ./obs-websocket_4.9.0-1_amd64.deb
sudo apt install -f
```

### 安装 stream pi 服务器（在 PC 上）

[推荐版本](https://github.com/stream-pi/server/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

```bash
sudo apt install ./stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

### 安装 stream pi 客户端（在 reTerminal 上）

[推荐版本](https://github.com/stream-pi/client/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip
```

```bash
mkdir Stream_pi_client 
unzip stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip -d Stream_pi_client
```

## streampi client-server interaction

### Launch services

On our reTerminal

```bash
cd Stream_pi_client
./run_desktop
```

在我们的PC上（Ubuntu）

只需点击图标

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/01.jpg"/></div>

### 定义功能 😏

1. 打开streampi服务器

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/02.jpg"/></div>

2. 点击 文件 -> 设置 -> 常规

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/03.jpg"/></div>

3. 设置streampi服务器地址、框大小并点击保存

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/04.jpg"/></div>

4. 连接到obs服务

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/06.jpg"/></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/05.jpg"/></div>

5. 在reterminal客户端上配置服务器地址为PC的IP地址，然后点击保存并连接。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/09.jpg"/></div>

6. 回到streampi服务器，将相应的选项卡拖拽到相应的框中以实现相应的功能

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/07.jpg"/></div>

7. 我们还可以直接编写命令来实现程序调用、更改显示图标、更改显示名称、框大小并实现更多功能

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/11.jpg"/></div>

8. 在obs studio软件中添加屏幕视图和相应的图像源

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/08.jpg"/></div>

9. 最后我们可以点击reterminal来完成相应的控制 👍👍👍

    - 这是我们在ReTerminal上的界面

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/10.jpg"/></div>

    - 这是我们在PC上的界面

    <div align="center"><video width={500} controls><source src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/demo.mkv"/></video></div>

    - reTerminal的外观

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg"/></div>

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
