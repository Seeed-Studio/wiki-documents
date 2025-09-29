---
description: Plex媒体服务器在Docker上的设置指南
title: Plex媒体服务器
keywords:
- 软件 OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/OpenWrt-Plex-Media-Server-on-Docker
last_update:
  date: 2023/1/13
  author: jianjing Huang
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/thumb-1.png" alt="pir" width="1000" height="auto"/></p>

本指南解释了如何在Seeed OpenWrt固件上将Plex媒体服务器设置为Docker容器。通过使用Plex媒体服务器，您可以从世界任何地方流式传输所有本地媒体文件！这里的OpenWrt可以运行在[ODYSSEY – X86板](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)或[用于树莓派计算模块4的双千兆以太网载板](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html)。

**注意：** 在阅读本指南之前，请确保遵循[OpenWrt入门指南](https://wiki.seeedstudio.com/cn/OpenWrt-Getting-Started)。

## 什么是Docker？

[Docker](https://docs.docker.com/)是一个用于开发、交付和运行应用程序的开放平台。Docker提供了在一个称为容器的松散隔离环境中打包和运行应用程序的能力。隔离和安全性允许您在给定主机上同时运行多个容器。容器是轻量级的，并包含运行应用程序所需的一切，因此您无需依赖主机上当前安装的内容。您可以轻松地在工作时共享容器，并确保与您共享的每个人都获得相同的容器，并以相同的方式工作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png" alt="pir" width="200" height="auto"/></p>

## 什么是Plex媒体服务器？

[Plex媒体服务器](https://www.plex.tv)是一种工具，允许您使用许多其他设备访问存储在一个设备上的音乐、图片和视频。您可以在Windows、Mac或Linux计算机、网络附加存储设备（NAS）甚至路由器上安装Plex媒体服务器软件。您可以通过互联网远程流式传输存储在Plex媒体服务器上的所有媒体文件，并使用Plex应用程序从世界任何地方访问。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Plex_logo.png" alt="pir" width="200" height="auto"/></p>

## 在Docker上运行Plex媒体服务器

现在让我们来了解如何在OpenWrt上将Plex媒体服务器作为Docker容器运行。

### 创建Plex账户

首先，我们需要创建一个Plex账户。

- **步骤1.** 点击[此链接](https://www.plex.tv)访问Plex网站。

- **步骤2.** 点击**注册**并创建一个新的Plex账户。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-sign-up.jpg" alt="pir" width="1000" height="auto"/></p>

### 附加外部存储以存储媒体

现在我们需要附加外部存储驱动器，以扩展X86和CM4板上的存储空间，从而存储所有媒体文件。

ODYSSEY - X86J4125有以下存储选项：

- PCIe SSD
- SATA SSD
- SATA HDD
- Micro-SD卡
- USB闪存驱动器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width="650" height="auto"/></p>

用于树莓派CM4的双千兆以太网载板有以下存储选项：

- USB闪存驱动器
- Micro-SD卡
- 通过9针头扩展USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/cm4-storage-2.jpg" alt="pir" width="1000" height="auto"/></p>

您可以根据上述存储选项选择任何外部存储设备进行连接。

### 在OpenWrt上挂载外部存储

连接外部存储设备后，我们需要挂载它以便使用。

- **步骤1.** 打开一个网页浏览器并登录到OpenWrt设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Luci.png" alt="pir" width="1000" height="auto"/></p>

**注意：** 我们之前已将**192.168.2.1**配置为登录OpenWrt的IP地址，因此您可以在网页浏览器中输入此IP地址。

- **步骤2.** 导航到`系统 > 磁盘管理`，您将看到连接到OpenWrt设备的存储驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Disk-man-1.png" alt="pir" width="1000" height="auto"/></p>

- **步骤3.** 在连接的存储驱动器下，点击**编辑**。

- **步骤4.** 在**分区信息**下，点击**移除**以删除所有分区。

- **步骤5.** 在**设备信息**下，为**分区表**选择**GPT**。

- **步骤6.** 在**分区信息**下，点击**新建**以创建一个分区。

- **步骤7.** 在新创建的分区下，点击**格式化**，选择**ext4**并点击**格式化**以格式化分区。

- **步骤8.** 再次导航到`系统 > 磁盘管理`。

- **步骤9.** 在**挂载点**下，选择我们之前创建的分区。

- **步骤10.** 将**文件系统**保持为**自动**。

- **步骤11.** 在**挂载选项**下输入**rw**以允许对该分区进行读写访问。

- **步骤12.** 在**挂载点**下输入**/plex**并点击**挂载**以挂载分区。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/disk-mount-1.png" alt="pir" width="1000" height="auto"/></p>

### 创建Plex媒体服务器Docker容器

现在让我们创建Plex媒体服务器的Docker容器。

- **步骤1.** 在OpenWrt Luci界面中，导航到`Docker > 镜像`。

- **步骤2.** 在**拉取镜像**下输入**linuxserver/plex**并点击**拉取**以下载Plex媒体服务器Docker镜像。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-image.png" alt="pir" width="1000" height="auto"/></p>

**注意：** 请等待几秒钟，直到图片下载完成。

- **步骤 3.** 导航到 `Docker > Containers` 并点击 **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-add.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 4.** 点击 **COMMAND LINE** 并输入以下内容：

```sh
docker run \
-d \
--name plex \
--network=host \
-e TZ=<输入时区> \
-e PLEX_CLAIM=<输入claimToken> \
-v /plex/database:/config \
-v /plex/temp:/transcode \
-v /plex/media:/data \
linuxserver/plex
```

**注意：** 要获取 **时区**，请访问[此链接](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)并复制 **TZ 数据库名称**。要获取 **claimToken**，请访问[此链接](#www.plex.tv/claim)并复制/粘贴令牌。

- **步骤 5.** 最后点击 **SUBMIT**

### 运行并设置 Plex 媒体服务器

- **步骤 1.** 现在您将看到容器列表。勾选 **复选框** 并点击 **START** 以运行容器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-start.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 2.** 输入 **192.168.2.1:32400/web** 打开 Plex 媒体服务器的初始设置页面。

**注意：** 32400 是 Plex Docker 容器运行的端口。

- **步骤 3.** 输入一个 **服务器名称** 并点击 **NEXT**

- **步骤 4.** 在 **Organize Media** 下，点击 **ADD LIBRARY**

- **步骤 5.** 选择 **库类型** 并点击 **NEXT**

- **步骤 6.** 点击 **BROWSE FOR MEDIA FOLDER**，选择 **data** 文件夹并点击 **ADD LIBRARY**

**注意：** 如前所述，Plex 容器内的 **data** 文件夹已链接到 OpenWrt 上的 **/plex/media** 文件夹。

- **步骤 7.** 点击 **NEXT**，然后点击 **DONE** 完成初始设置。

现在您将看到 Plex 媒体服务器的用户界面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-ui.png" alt="pir" width="1000" height="auto"/></p>

### 在 PC 上挂载 Plex 目录并传输媒体文件

在之前挂载外部存储后，现在我们需要在 PC 上挂载 **/plex** 目录，以便可以轻松访问。

- **步骤 1.** 在 OpenWrt Luci 界面中，导航到 `Services > Network Shares`

- **步骤 2.** 在 **Shared Directories** 下，点击 **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/network-shares.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 按以下内容填写：

        - 名称: Plex 
        - 路径: /plex
        - 可浏览: 勾选
        - 强制 Root: 勾选
        - 允许访客: 勾选
        - 创建掩码: 0666
        - 目录掩码: 0777

**注意：** 这里 **名称** 字段可以是您选择的任何内容。启用 **强制 Root** 以允许对该文件夹的 root 访问。

- **步骤 4.** 点击 **SAVE**，然后点击 **SAVE & APPLY**

- **步骤 5.** 在 PC 上打开 **文件资源管理器** 并点击 **网络**

- **步骤 6.** 导航到 `OpenWrt > plex > media` 并将所有媒体文件复制到此目录中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/PC-shares.png" alt="pir" width="1000" height="auto"/></p>

### 在 Plex 客户端应用程序上播放媒体

现在您可以使用 Plex 客户端应用程序查看 Plex 媒体服务器中的所有媒体文件。Plex 应用程序可以安装在各种设备上，例如手机、PC、智能电视等。

访问[此链接](https://www.plex.tv/media-server-downloads/#plex-app)查看支持的设备，以便您可以在这些设备上安装 Plex 应用程序。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-client.jpg" alt="pir" width="1000" height="auto"/></p>

现在您可以打开 Plex 客户端应用程序，登录并流式播放存储在 Plex 媒体服务器上的所有电影、音乐、图片和其他媒体！

### 将普通电视变成运行 Plex 的智能电视

通过在家中使用智能电视，您可以非常方便地从 Plex 媒体服务器流式播放媒体（如电影）。您需要一台智能电视，因为如果电视有应用商店，您可以安装 Plex 应用程序。然而，如果您有一台普通电视，可以通过使用 Raspberry Pi 将其变成智能电视！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg" alt="pir" width="1000" height="auto"/></p>

您可以按照[此链接](https://pimylifeup.com/raspberry-pi-android-tv-lineageos)了解更多信息！

## 资源

- **[网页]** [Docker 官方文档](https://docs.docker.com)

- **[网页]** [Docker Hub](https://hub.docker.com)

- **[网页]** [Plex 媒体服务器](https://www.plex.tv)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>