---
description: ODYSSEY - X86J41x5
title: Jellyfin 媒体服务器安装
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Jellyfin-on-Docker-Ubuntu-X86
last_update:
  date: 01/03/2023
  author: w0x7ce

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/thumb.png" alt="pir" width={1000} height="auto" /></p>

本指南介绍了如何在运行 [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html) 的 Ubuntu 系统上，将 Jellyfin 媒体服务器设置为一个 Docker 容器。通过使用 Jellyfin，您可以从世界任何地方流式传输所有本地媒体文件！

## 什么是 Docker？

[Docker](https://docs.docker.com/) 是一个用于开发、交付和运行应用程序的开放平台。Docker 提供了在一个称为容器的松散隔离环境中打包和运行应用程序的能力。这种隔离和安全性允许您在给定主机上同时运行多个容器。容器是轻量级的，并包含运行应用程序所需的一切，因此您无需依赖主机上当前安装的内容。您可以轻松地在工作时共享容器，并确保与您共享的人获得相同的容器，并以相同的方式运行。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png" alt="pir" width={200} height="auto" /></p>

## 什么是 Jellyfin 媒体服务器？

[Jellyfin 媒体服务器](https://www.plex.tv) 是一款工具，允许您通过多台设备访问存储在一台设备上的音乐、图片和视频。您可以在 Windows、Mac 或 Linux 计算机、网络附加存储 (NAS) 设备甚至路由器上安装 Jellyfin 软件。您可以通过互联网远程流式传输存储在 Jellyfin 媒体服务器上的所有媒体文件，并通过 Jellyfin 应用从世界任何地方访问它们。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/23.png" alt="pir" width={300} height="auto" /></p>

## 开始

现在让我们逐步完成在 Ubuntu 系统上将 Jellyfin 媒体服务器作为 Docker 容器运行的过程。

### 在 X86 上安装 Ubuntu

按照 [此 Wiki](https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-OS) 在 ODYSSEY-X86 上安装 Ubuntu。您可以从[这里](https://ubuntu.com/download/desktop)下载最新的 Ubuntu 操作系统。

### 在 Ubuntu 上安装 Docker

- **步骤 1.** 更新现有的软件包列表

```sh
sudo apt update
```

- **步骤 2.** 安装所需的前置软件包

```sh
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

- **步骤 3.** 将官方 Docker 仓库的 GPG 密钥添加到您的 Ubuntu 系统

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- **步骤 4.** 将 Docker 仓库添加到 APT 源

```sh
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

- **步骤 5.** 安装 Docker

```sh
sudo apt install docker-ce -y
```

- **步骤 6.** 验证 Docker 是否已安装并正在运行

```sh
sudo systemctl status docker
```

您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/1.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 7.** 默认情况下，docker 命令只能以 root 用户身份或 docker 组中的用户运行。因此，将您的用户名添加到 Docker 组

```sh
sudo usermod -aG docker ${USER}
```

- **步骤 8.** 应用新的组成员身份

```sh
su - ${USER}
```

### 在 Docker 上安装 Jellyfin 媒体服务器

- **步骤 1.** 下载最新的 Jellyfin 容器镜像

```sh
docker pull jellyfin/jellyfin
```

- **步骤 2.** 为配置和缓存数据创建持久存储

```sh
docker volume create jellyfin-config
docker volume create jellyfin-cache
```

- **步骤 3.** 创建一个文件夹以保存媒体文件

```sh
# 例如
mkdir /home/username/movies
```

**注意：** 此处 **username** 应替换为您 Ubuntu 系统上的用户名

- **步骤 4.** 创建并运行一个容器

```sh
docker run -d \
 --name jellyfin \
 --net=host \
 --volume jellyfin-config:/config \
 --volume jellyfin-cache:/cache \
 --mount type=bind,source=/path/to/media,target=/media \
 --restart=unless-stopped \
 jellyfin/jellyfin
```

**注意：** 此处 **/path/to/media** 是我们之前创建的 **/home/username/movies** 目录

### Jellyfin 媒体服务器的初始设置

- **步骤 1.** 在 ODYSSEY-X86 或与 ODYSSEY-X86 位于同一网络的任何其他 PC 上的网页浏览器中输入以下内容

```sh
<IP_address_of_ODYSSEY-X86>:8096
```

```sh
# 例如：
192.168.1.133:8096
```

- **步骤 2.** 在 Jellyfin 设置主页上，选择您的首选语言并点击 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/2.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 3.** 输入管理员账户的 **用户名** 和 **密码**，然后点击 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/3.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 4.** 点击 **Add Media Library**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/4.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 5.** 从下拉菜单中选择 **内容类型** 并填写显示名称。此处显示名称将与内容类型相同

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/5.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 6.** 点击 **Folders** 旁边的 **+** 符号

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/6.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 7.** 点击 Docker 容器内的 **/media** 文件夹并点击 **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/7.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/8.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 8.** 再次点击 **OK**，保持其他设置为默认值。如果需要，也可以更改其他设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/9.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 9.** 点击 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/10.png" alt="pir" width={1000} height="auto" /></p>

**注意：** 在点击 **Next** 之前，您可以继续添加其他媒体库，例如电视节目。只需点击 **Add Media Library** 并重复该过程。

- **步骤 10.** 如果需要，可以更改设置，然后在接下来的屏幕中点击 **Next**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/11.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/12.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 11.** 最后点击 **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/13.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 12.** 登录我们之前创建的管理员账户

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/14.png" alt="pir" width={1000} height="auto" /></p>

然后您将进入 Jellyfin 的主页！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/15.png" alt="pir" width={1000} height="auto" /></p>

### 添加电影/电视节目

现在我们将添加几部电影，以便可以在 Jellyfin 上播放。

- **步骤 1.** 将所有电影文件复制并粘贴到我们之前创建的目录（/home/username/movies）中。

- **步骤 2.** 返回 Jellyfin 主页，点击三个点并选择 **Refresh metadata**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/16.png" alt="pir" width={400} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/17.png" alt="pir" width={400} height="auto" /></p>

- **步骤 3.** 保持默认的 **Refresh mode**，然后点击 **Refresh**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/18.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 4.** 点击 **Movies**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/20.png" alt="pir" width={1000} height="auto" /></p>

最后，您将看到所有加载的电影。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/19.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 5.** 点击一部电影，然后点击 **Play** 按钮开始播放电影。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/21.png" alt="pir" width={1000} height="auto" /></p>

### 在 Jellyfin 客户端应用程序上播放媒体

现在您可以使用 Jellyfin 客户端应用程序查看 Jellyfin 媒体服务器中的所有媒体。Jellyfin 应用程序可以安装在各种设备上，例如手机、PC、智能电视等。

访问 [此链接](https://jellyfin.org/clients) 查看支持的设备，以便您可以在这些设备上安装 Jellyfin 应用程序。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/22.png" alt="pir" width={1000} height="auto" /></p>

现在，您可以导航到 Jellyfin 客户端应用程序，登录并流式播放存储在 Jellyfin 媒体服务器上的所有媒体！

### 附加外部存储以存储媒体

您还可以连接外部存储驱动器以扩展 X86 的存储空间，从而存储所有媒体。

ODYSSEY - X86J4125 提供了多种存储选项，例如：

- PCIe SSD
- SATA SSD
- SATA HDD
- Micro-SD 卡
- USB 闪存驱动器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

您可以参考上述存储选项，选择任何您喜欢的外部存储设备进行连接。

## 将普通电视变成可以运行 Jellyfin 的智能电视

通过家中的智能电视从 Jellyfin 媒体服务器流式播放电影等媒体非常方便。您需要一台智能电视，因为如果电视有应用商店，就可以安装 Jellyfin 应用程序。然而，如果您有一台普通电视，可以通过使用 Raspberry Pi 将其变成智能电视！

您可以点击[此链接](https://pimylifeup.com/raspberry-pi-android-tv-lineageos)了解更多信息！

## 社区

<iframe width={560} height={315} src="https://www.youtube.com/embed/4VkY1vTpCJY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 资源

- **[网页]** [Docker 官方文档](https://docs.docker.com)

- **[网页]** [Docker Hub](https://hub.docker.com)

- **[网页]** [Jellyfin 媒体服务器](https://jellyfin.org)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>