---
description: 在您的办公室中集成 LinkStar、Grocy 和 BookStack 的指南
title: 在您的办公室中集成 LinkStar、Grocy 和 BookStack 的指南
keywords:
  - LinkStar
  - 入门指南
  - Bookstack
  - Grocy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/grocy-bookstack-linkstar
last_update:
  date: 2023/6/26
  author: Kasun Thushara
---
# 掌控一切：使用 LinkStar、Grocy 和 BookStack 的自托管办公室管理解决方案
在由 LinkStar 路由器驱动的自托管办公室服务器中集成 Grocy 和 BookStack，提供了一种高效且有条理的运营解决方案。通过 Grocy，企业可以有效管理杂货、购物清单和任务，从而确保流程简化并减少浪费。而 BookStack 则提供了一个集中的文档平台，促进协作、知识共享以及对重要信息的便捷访问。通过在 LinkStar 路由器上托管这两个应用程序，企业可以掌控自己的数据、增强安全性，并消除对外部服务的依赖。这种自托管设置使办公室能够优化工作流程、提高生产力，并创建一个结构良好且高效的工作环境。在这篇博客文章中，我们将深入探讨在 LinkStar 驱动的办公室服务器中集成 Grocy 和 BookStack 的重要性，探索其优势，并展示这种组合如何彻底改变办公室管理。

## 什么是 Docker？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) 是一个开源平台，使开发人员能够自动化部署和管理轻量级、隔离的容器中的应用程序。容器是自包含的单元，打包了应用程序及其依赖项、库和配置文件，从而使其能够在不同环境中一致运行。Docker 简化了创建、分发和运行应用程序的过程，使开发和部署软件变得更加一致和可复现。通过 Docker，开发人员可以封装他们的应用程序，并确保它们能够在不同的操作系统和基础设施设置中顺利运行，这使其成为构建可移植和可扩展应用程序、简化开发工作流程以及促进团队高效协作的宝贵工具。

## 什么是 Portainer？
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/) 是一个功能强大且直观的开源管理界面，专为 Docker 设计。通过其用户友好的基于 Web 的 GUI，Portainer 简化了 Docker 容器、镜像、网络和卷的部署和管理。它提供了容器环境的可视化表示，使用户能够轻松地通过几次点击创建、启动、停止和删除容器。在 Portainer 界面中，监控资源使用情况、查看日志以及访问容器终端变得轻而易举。此外，Portainer 支持基于角色的访问控制，提供对用户权限的细粒度控制。无论您是初学者还是经验丰富的 Docker 用户，Portainer 都是一个不可或缺的工具，它简化了容器管理，使其对所有人都变得可访问且高效。

## 什么是 BookStack？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstackicon.png" alt="pir" width="200" height="auto"/></p>

[BookStack](https://www.bookstackapp.com/) 是一个功能强大且用户友好的开源平台，专为创建和管理文档及知识库而设计。通过其直观的界面，BookStack 使团队和组织能够高效地组织和共享信息。它提供了一个分层结构，内容可以组织为书籍、章节和页面，从而实现信息的轻松导航和检索。BookStack 支持富文本编辑，允许用户有效地格式化和美化内容。它还提供了图像嵌入、版本控制和协作工具等功能，促进了无缝的团队合作和高效的知识管理。无论是用于内部文档、客户支持还是教育目的，BookStack 都是一种多功能且广泛使用的解决方案，可简化创建和维护全面知识库的过程。

## 什么是 Grocy？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy_logo.svg" alt="pir" width="200" height="auto"/></p>

[Grocy](https://grocy.info/) 是一个自托管的开源 Web 应用程序，帮助用户管理他们的杂货、家庭物品和任务。它提供了跟踪食品库存、创建购物清单、管理食谱以及跟踪过期日期的功能。

## 在 LinkStar OpenWRT 路由器上设置 Docker 环境

默认情况下，LinkStar 上的 Docker 安装存储容量约为 250MB，这可能不足以安装镜像。因此，我们需要为 Docker 分配更多空间以满足需求。与 [Plex 媒体服务器 WiKi](https://wiki.seeedstudio.com/cn/plex_media_server/) 的步骤相同。如果您已经完成此步骤，请跳过。

**注意：** 请确保在阅读本指南之前，已按照 [在 LinkStar OpenWRT 路由器上设置 Docker 环境](https://wiki.seeedstudio.com/cn/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router) 的步骤操作。

## 安装 Portainer 容器

此主题已在 WordPress 集成到 LinkStar 的文档中讨论过。因此，如果您是第一次安装 Portainer，请按照这些步骤操作。以下是 [安装 Portainer 容器](https://wiki.seeedstudio.com/cn/wordpress_linkstar/#install-portainer-container) 的链接。

## 安装 BookStack
### 第 01 步：创建一个新 Stack

在应用程序使用的上下文中，Stack 指的是一组相关的服务。因此，我们的第一步是建立一个新的 Stack。为此，请导航到侧边栏并找到 **Stacks** 选项。点击它并选择 **Add Stack** 继续。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack1.PNG" alt="pir" width="600" height="auto"/></p>

### 第 02 步：使用 Web 编辑器安装 BookStack

在此步骤中，您需要提供一个 Stack 名称，并将以下 docker-compose 格式的文本复制到 Web 编辑器中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack2.PNG" alt="pir" width="600" height="auto"/></p>

```sh
---
version: "2"
services:
  bookstack:
    image: lscr.io/linuxserver/bookstack
    container_name: bookstack
    environment:
      - APP_URL=http://192.168.100.1:6875
      - DB_HOST=bookstack_db
      - DB_PORT=3306
      - DB_USER=bookstack
      - DB_PASS=yourdbpass
      - DB_DATABASE=bookstackapp
    volumes:
      - ./bookstack_app_data:/config
    ports:
      - 6875:80
    restart: unless-stopped
    depends_on:
      - bookstack_db
  bookstack_db:
    image: lscr.io/linuxserver/mariadb
    container_name: bookstack_db
    environment:
      - MYSQL_ROOT_PASSWORD=yourdbpass
      - TZ=Asia/Colombo
      - MYSQL_DATABASE=bookstackapp
      - MYSQL_USER=bookstack
      - MYSQL_PASSWORD=yourdbpass
    volumes:
      - ./bookstack_db_data:/config
    restart: unless-stopped

```

提供的 docker-compose 文件包含两个独立的 Docker 容器：一个用于 BookStack 应用程序，另一个用于 SQL 数据库。这是安装 BookStack 的推荐方法。然而，在继续之前需要进行一些重要的更改。

首先，将 "yourappurl" 替换为您希望通过其访问 BookStack 应用程序的 URL。此外，将 "yourdbpass" 修改为您首选的密码。确保两个容器使用相同的密码以保持一致性。

最后，记得调整 "TZ" 变量以匹配您的特定 [时区](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)。

通过进行这些必要的修改，您可以成功配置 docker-compose 文件以安装 BookStack。

在页面底部，您可以找到 **Deploy Stack** 按钮，点击它。

### 第 03 步：访问 BookStack

部署过程完成后，您会看到一个新的 Stack 已创建。在我们的例子中，它是 bookstack，点击它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack3.PNG" alt="pir" width="600" height="auto"/></p>

然后，您可以看到两个容器正在运行，端口号为 6875。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack4.PNG" alt="pir" width="600" height="auto"/></p>

接下来，打开您的 Web 浏览器并输入 192.168.100.1:6875。然后，您将导航到登录页面。

:::note

邮箱：admin@admin.com

密码：password

:::

然后，您可以成功访问 BookStack 的主页。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack5.PNG" alt="pir" width="600" height="auto"/></p>

## 安装 Grocy

### 第一步：创建一个新堆栈

与安装 BookStack 的第一步相同，我们需要创建一个新堆栈。您可以参考上面的指南来了解如何创建一个新堆栈。

### 第二步：使用 Web 编辑器安装 Grocy

与安装 BookStack 的第二步相同，您需要提供一个堆栈名称。然后将以下 docker-compose 文本复制并粘贴到 Web 编辑器中。

```sh
---
version: "2.1"
services:
  grocy:
    image: lscr.io/linuxserver/grocy
    container_name: grocy
    environment:
      - TZ=Asia/Colombo
    volumes:
      - /grocy/config:/config
    ports:
      - 9283:80
    restart: unless-stopped
```

在页面底部，您可以找到 **Deploy Stack** 按钮，点击它。

### 第三步：访问 Grocy

部署过程完成后，您会看到一个新堆栈已创建。在我们的例子中，它是 grocy，点击它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy1.PNG" alt="pir" width="600" height="auto"/></p>

然后您可以看到 grocy 容器正在运行，端口号为 9283。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy2.PNG" alt="pir" width="600" height="auto"/></p>

接下来，打开您的 Web 浏览器并输入 192.168.100.1:9283。然后您将跳转到登录页面。

:::note

用户名: admin

密码: admin

:::

然后您可以成功访问 BookStack 的主页。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy3.PNG" alt="pir" width="600" height="auto"/></p>

## 资源

- **[网页]** [Docker 官方文档](https://docs.docker.com)

- **[网页]** [Docker Hub](https://hub.docker.com)

- **[网页]** [Portainer](https://www.portainer.io/)

- **[网页]** [BookStack](https://www.bookstackapp.com/)

- **[网页]** [Grocy](https://grocy.info/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>