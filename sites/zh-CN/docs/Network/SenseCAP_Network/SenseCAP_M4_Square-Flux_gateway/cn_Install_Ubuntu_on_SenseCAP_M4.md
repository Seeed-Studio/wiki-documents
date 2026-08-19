---
description: 通过 USB 在 SenseCAP M4 上安装 Ubuntu
title: 通过 USB 在 SenseCAP M4 上安装 Ubuntu
keywords:
  - SenseCAP Network
  - SenseCAP M4
  - Ubuntu
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install_ubuntu_on_sensecap_m4
sku: E23010412, 110991885, 110991865
last_update:
  date: 08/18/2026
  author: Zhai Chenyang
createdAt: '2026-08-18'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/
---

# 通过 USB 在 SenseCAP M4 上安装 Ubuntu

本指南介绍如何使用 USB 驱动器在 SenseCAP M4 上安装 Ubuntu 24.04。

## 安装前准备

1. 一个至少 4 GB 存储空间的 USB 闪存盘
2. 一台运行 Microsoft Windows XP 或更高版本的电脑
3. Rufus，一款免费开源的 USB 制作工具
4. 一个 Ubuntu ISO 镜像文件

## 1. 下载 Ubuntu ISO 镜像

点击[这里](https://releases.ubuntu.com/24.04/)下载。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-01.png" /></div>

## 2. 下载 Rufus

点击[这里](https://rufus.ie/en/#download)下载。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-02.png" /></div>

## 3. 制作可启动 USB 驱动器

请参考此[链接](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview)。

### 3.1 打开 Rufus 并选择 USB 驱动器

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-03.png" /></div>

### 3.2 选择 ISO 镜像

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-04.png" /></div>

### 3.3 开始写入 ISO 镜像

选择好 ISO 镜像后，点击 **START**。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-05.png" /></div>

### 3.4 选择 ISO 镜像写入模式

当出现如下弹窗时，选择 **Write in ISO Image mode (Recommended)**。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-06.png" /></div>

可能会提示 Rufus 需要下载额外文件以完成 ISO 镜像写入。如果出现此对话框，点击 **Yes** 继续。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-07.png" /></div>

当提示需要擦除 USB 驱动器时，点击 **Yes** 继续。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-08.png" /></div>

状态显示为 **READY** 后，即可关闭 Rufus。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-09.png" /></div>

## 4. 安装 Ubuntu

点击[这里](https://ubuntu.com/tutorials/install-ubuntu-server#1-overview)作为参考。

将 USB 驱动器插入 SenseCAP M4，通过 HDMI 接口连接键盘和显示器，然后给设备上电并按下 **Delete** 键。

### 4.1 输入 BIOS 密码

输入密码：`QbCuNBAz`

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-10.png" /></div>

### 4.2 从 USB 驱动器启动

在 **Save & Exit** 界面中，在 **Boot Override** 下选择 USB 驱动器，然后按 **Enter** 从其启动。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-11.png" /></div>

### 4.3 开始 Ubuntu 安装

选择第一个选项开始安装 Ubuntu。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-12.png" /></div>

### 4.4 选择语言

进入安装界面后，选择你偏好的语言。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-13.png" /></div>

### 4.5 选择键盘布局

选择键盘布局。可以使用默认设置。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-14.png" /></div>

### 4.6 选择安装选项

选择安装 Ubuntu 的选项。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-15.png" /></div>

### 4.7 配置网络

你可以暂时跳过网络连接步骤。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-16.png" /></div>

### 4.8 配置代理

你也可以跳过代理配置步骤。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-17.png" /></div>

### 4.9 配置 Ubuntu 镜像源

在 Ubuntu 镜像源配置步骤中，保持默认设置并进入下一步。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-18.png" /></div>

### 4.10 配置存储

配置存储并选择 **Custom storage layout**。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-19.png" /></div>

### 4.11 格式化磁盘

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-20.png" /></div>

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-21.png" /></div>

### 4.12 创建分区

你可以根据需要自定义分区布局。本示例中创建了单独的根分区和数据分区。

将根分区大小设置为 **50 GB**。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-22.png" /></div>

### 4.13 分配剩余空间

将剩余空间分配给数据分区。将此字段留空会把所有剩余空间分配给 `/data`。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-23.png" /></div>

### 4.14 确认分区布局

分区创建完成后，点击 **Next**。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-24.png" /></div>

### 4.15 配置用户账户

输入主机名、用户名和密码。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-25.png" /></div>

### 4.16 跳过 Ubuntu Pro

你可以暂时跳过 Ubuntu Pro 升级。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-26.png" /></div>

### 4.17 安装 OpenSSH

在此安装 OpenSSH 以启用 SSH 连接。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-27.png" /></div>

### 4.18 重启系统

安装完成后，选择 **Reboot Now**。系统重启时可以拔出 USB 驱动器。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-28.png" /></div>

### 4.19 完成安装

安装已成功完成。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-29.png" /></div>

