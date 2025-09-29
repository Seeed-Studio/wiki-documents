---
description: 家庭娱乐的未来，LinkStar-H68K 路由器与 Plex 媒体服务器
title: 家庭娱乐的未来，LinkStar-H68K 路由器与 Plex 媒体服务器
keywords:
  - LinkStar
  - 入门指南
  - plex 媒体服务器
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/plex_media_server
last_update:
  date: 2023/6/14
  author: Kasun Thushara
---
# 家庭娱乐的未来：LinkStar-H68K 路由器与 Plex 媒体服务器

探索将路由器转变为紧凑而强大的娱乐媒体服务器的突破性理念。想象一下，一个设备即可为您提供无限的娱乐选择。这一创新突破了传统网络设备的功能，不仅丰富了您的日常生活，还彻底改变了小型场所（如咖啡馆和餐厅）的客户体验，带来非凡的服务体验。准备好进入一个充满吸引力的可能性世界，提升每一刻的体验，并保证无与伦比的娱乐效果。如果您正在寻找这样一个非凡的路由器转型，这里有一些潜在的应用和需要考虑的因素。

## 什么是 Docker？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) 是一个开源平台，使开发人员能够自动化部署和管理轻量级、隔离的容器中的应用程序。容器是自包含的单元，打包了应用程序及其依赖项、库和配置文件，从而使其能够在不同环境中一致运行。Docker 简化了创建、分发和运行应用程序的过程，使开发和部署软件变得更加一致和可重复。通过 Docker，开发人员可以封装他们的应用程序，确保它们能够在不同的操作系统和基础设施设置中顺利运行。这使其成为构建可移植和可扩展应用程序的重要工具，同时简化开发工作流程，并促进团队成员之间的高效协作。

## 什么是 Plex？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/Plex_logo.png" alt="pir" width="200" height="auto"/></p>

[Plex 媒体服务器](https://www.plex.tv) 是一个强大的媒体管理和流媒体平台，允许用户在各种设备上组织、访问和流式播放他们的个人媒体库。通过 Plex 媒体服务器，用户可以轻松地将电影、电视剧、音乐、照片等集合集中在家庭网络中，创建一个统一的媒体中心。Plex 会自动组织和索引媒体文件，获取描述、封面艺术和字幕等元数据，从而创建一个视觉吸引力强且用户友好的界面。用户可以通过智能手机、平板电脑、智能电视和流媒体设备上的专用 Plex 应用访问服务器，实现家庭和远程的无缝媒体内容流式播放。Plex 媒体服务器还提供强大的功能，例如家长控制、多用户支持和转码功能，确保在不同设备和网络条件下的兼容性和最佳流媒体质量。总体而言，Plex 媒体服务器让用户随时随地享受个人媒体收藏，提供全面且沉浸式的娱乐体验。

## 在 LinkStar OpenWRT 路由器上设置 Docker 环境

- **步骤 01** 安装 OpenWRT 到 LinkStar

要在 LinkStar 设备上安装 OpenWRT，请参考 LinkStar Wiki 中提供的全面安装指南。本教程重点介绍如何使用 OpenWRT 系统，并演示如何安装 Plex 容器，同时确保 LinkStar 作为软路由器正常工作。

根据您的偏好选择以下选项之一，在 LinkStar 上安装 OpenWRT：
1. 将 OpenWRT 刷写到 TF 卡上。[教程链接](https://wiki.seeedstudio.com/cn/linkstar-install-system/#flash-openwrt-to-the-tf-card)
2. 将 OpenWRT 刷写到 eMMC 上。[教程链接](https://wiki.seeedstudio.com/cn/linkstar-install-system/#flash-openwrt-to-emmc)

- **步骤 02** 配置 LinkStar 网络

要开始配置 LinkStar 设备的网络设置，请通过网线将其连接到您的计算机。然后在浏览器中输入 IP 地址 `192.168.100.1` 访问 OpenWRT 的后台管理界面。初始账号和密码为：

```
账号: root
密码: password
```

登录后，下一步是为 LinkStar 设备建立互联网连接。您可以选择通过网线或 WiFi 连接。根据您的设置和偏好选择连接方式。这里我们使用无线连接方法。选择无线网络后，只需输入密码并保存应用即可。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img1.png"/></div>

- **步骤 03** 增加 Docker 存储容量

默认情况下，LinkStar 上的 Docker 安装存储容量约为 250MB，这可能不足以安装镜像。因此，我们需要为 Docker 分配更多空间以满足需求。

首先，进入 OpenWRT 后台管理界面的 **System** 部分。然后点击 **Disk Man** 并找到 **EDIT** 选项。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img2.png"/></div>

在 **"END SECTOR"** 列中，指定要为 Docker 分配的额外存储空间大小。在本示例中，我们将添加 20GB 的存储空间。输入值后，点击 **"NEW"** 按钮创建新的存储分区。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img3.png"/></div>

选择 ext4 格式，然后点击 **FORMAT** 按钮。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img4.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img5.png"/></div>

分配完成后，您会注意到新增了一个 20GB 的空间。然而，这个空间目前尚未挂载，需要将其与 Docker 关联。

接下来，进入 OpenWRT 后台管理界面的 **System** 部分，选择 **Mount Points**。在挂载点部分点击 **"ADD"** 按钮。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img6.png"/></div>

选择您刚刚创建的新空间。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img7.png"/></div>

将挂载点用作 **Docker 数据 (/opt)**。别忘了勾选 **Enable this mount** 复选框，然后点击 **SAVE & APPLY** 按钮。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img8.png"/></div>

完成存储扩展的必要设置后，最后一步是重启 LinkStar 设备以应用更改。

要启动重启过程，请进入 OpenWRT 后台管理界面的 **System** 部分，选择 **Reboot**。点击 **"PERFORM REBOOT"** 按钮开始重启过程。等待 OpenWRT 重启，然后在系统准备就绪后再次登录。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img9.png"/></div>

## 创建 Plex 媒体服务器 Docker 容器

接下来，我们需要获取 Plex 的 Docker 镜像。有关详细信息，请访问此 [链接](https://hub.docker.com/r/linuxserver/plex)。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/pull_img.PNG"/></div>

然后，进入 Containers 标签页并点击添加按钮。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/pull_img2.png"/></div>

之后，您将看到一个需要填写的表单。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/plex3.PNG"/></div>

- **步骤 1**：设置容器名称和网络

        将容器名称设置为 "plex"。
        选择网络模式为 "host"。

- **步骤 2**：配置环境变量

    通过访问提供的 [链接](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 获取时区，并复制 TZ 数据库名称。
    使用以下格式设置时区：
        
        TZ=[输入时区]

    通过访问提供的 [链接](https://www.plex.tv/claim/) 获取 claimToken，并复制/粘贴该令牌。
    使用以下格式设置 claimToken：
    
         PLEX_CLAIM=[输入 claimToken]

- **步骤 3**：配置绑定挂载

 在绑定挂载部分，逐行添加以下内容：

        /plex/database:/config
        /plex/temp:/transcode
        /plex/media:/data

- **步骤 4**：提交配置

    在配置完容器名称、网络、环境变量和绑定挂载后，点击 "Submit" 按钮保存更改。
    
    
    按照这些步骤，您将成功配置具有指定设置的 Plex 容器。

## 运行并设置 Plex 媒体服务器
- **步骤 1**：

    在 Docker 容器中，您可以看到容器信息。点击复选按钮并按下 "Start" 按钮。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker 1.PNG"/></div>

- **步骤 2**：打开 Plex 媒体服务器初始设置

    在您的网页浏览器中，输入地址 192.168.2.1:32400/web。这将打开 Plex 媒体服务器的初始设置页面。请注意，32400 是 Plex Docker 容器运行的端口。

- **步骤 3**：设置服务器名称

    在提供的字段中输入所需的服务器名称，然后点击 "NEXT" 继续。

- **步骤 4**：组织媒体库

    要开始组织您的媒体库，点击 "ADD LIBRARY" 按钮。

- **步骤 5**：选择库类型

     为您的媒体选择适当的库类型，例如电影、电视剧、音乐等，然后点击 "NEXT"。

- **步骤 6**：添加媒体文件夹

     点击 "BROWSE FOR MEDIA FOLDER" 并选择数据文件夹。通过之前配置的 Plex 容器，此数据文件夹已链接到 OpenWrt 上的 /plex/media 文件夹。点击 "ADD LIBRARY" 确认。

- **步骤 7**：完成设置

     点击 "NEXT"，然后点击 "DONE" 完成初始设置过程。

现在，您将看到 Plex 媒体服务器的用户界面，可以无缝访问和管理您的媒体收藏。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/plex interface.PNG"/></div>

## 在电脑上挂载 Plex 目录并传输媒体文件

- **步骤 1.** 在 OpenWrt Luci 界面中，导航到 `NAS > Network Shares > ADD`

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS1.PNG"/></div>

- **步骤 2.** 按照以下内容填写：

        - 名称: Plex 
        - 路径: /plex
        - 可浏览: 勾选
        - 允许访客: 勾选
        - 创建掩码: 0666
        - 目录掩码: 0777
- **步骤 3.** 点击 **保存并应用**：
- **步骤 4.** 打开 Windows 资源管理器，点击 **映射网络驱动器**，然后输入 //192.168.100.1/plex

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS2.PNG"/></div>

- **步骤 5.** 将您喜欢的电影、音乐添加到媒体文件夹中。
- **步骤 6.** 再次进入 Plex 媒体服务器，点击 **更多**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS3.PNG"/></div>

- **步骤 7.** 接下来点击这三个点，然后点击 **扫描库文件**。之后，您可以在库中看到最近添加的电影或歌曲。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS4.PNG"/></div>

通过部署媒体服务器，无论是在家中还是在小型酒店或咖啡馆，用户都可以为自己、家人、客人和客户提供卓越的娱乐体验。这是一种经济高效的解决方案，可以集中存储媒体文件，减少设备杂乱，并提供远程访问和自定义选项。

## 资源

- **[网页]** [Docker 官方文档](https://docs.docker.com)

- **[网页]** [Docker Hub](https://hub.docker.com)

- **[网页]** [Plex 媒体服务器](https://www.plex.tv)

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