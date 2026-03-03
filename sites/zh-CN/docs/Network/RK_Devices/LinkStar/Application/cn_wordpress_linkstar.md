---
description: 简化网页开发，完美组合 - Linkstar 和 WordPress
title: 简化网页开发，完美组合 - Linkstar 和 WordPress
keywords:
  - LinkStar
  - 入门指南
  - WordPress
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/wordpress_linkstar
last_update:
  date: 2023/6/8
  author: Kasun Thushara
---
# 简化网页开发，完美组合 - Linkstar 和 WordPress
欢迎阅读本篇信息丰富的 Wiki，它将指导您如何使用 Docker 安装 WordPress，以及如何访问 WordPress 仪表盘。通过 Linkstar 的变革性力量，您可以自定义本地主机网站，吸引客户并推动销售。准备好体验前所未有的增长、效率和技术能力，利用 Linkstar 的尖端功能迈向成功的第一步。

## 什么是 Docker？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) 是一个开源平台，开发者可以利用它自动化部署和管理轻量级、隔离的容器中的应用程序。容器是自包含的单元，打包了应用程序及其依赖项、库和配置文件，使其能够在不同环境中一致运行。Docker 简化了创建、分发和运行应用程序的过程，使软件开发和部署更加一致和可复现。通过 Docker，开发者可以封装应用程序，确保其在不同操作系统和基础设施设置中顺利运行。这使得 Docker 成为构建可移植和可扩展应用程序、简化开发工作流以及促进团队高效协作的宝贵工具。

## 什么是 Portainer？
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/) 是一个功能强大且直观的开源管理界面，专为 Docker 设计。通过其用户友好的基于 Web 的 GUI，Portainer 简化了 Docker 容器、镜像、网络和卷的部署和管理。它提供了容器环境的可视化表示，使用户可以轻松地通过几次点击创建、启动、停止和删除容器。在 Portainer 界面中，监控资源使用情况、查看日志以及访问容器终端变得轻而易举。此外，Portainer 支持基于角色的访问控制，提供了对用户权限的细粒度控制。无论您是初学者还是经验丰富的 Docker 用户，Portainer 都是一个不可或缺的工具，它使容器管理变得简单高效，适合所有人使用。

## 什么是 WordPress？
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/wordpress.png" alt="pir" width="200" height="auto"/></p>

[WordPress](https://wordpress.com/) 是一个流行且广泛使用的开源内容管理系统（CMS），为全球数百万个网站提供支持。它提供了一个用户友好的界面和庞大的主题、插件和扩展生态系统，使用户能够轻松创建和自定义自己的网站。通过 WordPress，您可以轻松发布和管理各种类型的内容，包括博客文章、页面、图片和多媒体。其灵活性和可扩展性使其适用于各种类型的网站，从简单的博客到复杂的电子商务平台。无论您是初学者还是经验丰富的用户，WordPress 都为构建和管理您的在线存在提供了一个强大且多功能的平台。

## 在 LinkStar OpenWRT 路由器上设置 Docker 环境

默认情况下，LinkStar 上的 Docker 安装存储容量约为 250MB，这可能不足以安装镜像。因此，我们需要为 Docker 分配更多空间以满足需求。与 [Plex 媒体服务器 WiKi](https://wiki.seeedstudio.com/cn/plex_media_server/) 的步骤相同。如果您已经完成此步骤，请跳过。

**注意：** 请确保在阅读本指南之前，已完成 [在 LinkStar OpenWRT 路由器上设置 Docker 环境](https://wiki.seeedstudio.com/cn/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router)。

## 安装 Portainer 容器

### 第一步：打开 Putty 并通过 SSH 连接到 OpenWrt 终端

开始安装过程时，打开 Putty 并建立与 OpenWrt 终端的 SSH 连接。输入以下信息：

:::note

用户名：root

密码：password

:::

### 第二步：安装 Portainer

使用以下命令安装 Portainer：

```sh
docker pull portainer/portainer
``` 

然后在终端中输入以下命令：

```sh
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
``` 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer1.PNG" alt="pir" width="600" height="auto"/></p>

您将能够通过 LuCi 界面观察运行中的容器，该界面在 Docker 容器下运行。您可以看到端口号为 9000。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer2.PNG" alt="pir" width="600" height="auto"/></p>

### 第三步：访问 Portainer

打开您的网页浏览器并输入以下地址：**192.168.100.1:9000**。

这将带您进入 Portainer 首页。接下来，输入您希望使用的用户名和密码，然后点击“创建用户”按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer3.PNG" alt="pir" width="600" height="auto"/></p>

## 安装 WordPress

### 第一步：创建 WordPress 镜像的自定义模板

在 Portainer 首页，导航到“App Templates”部分。向下滚动直到找到 WordPress 模板。找到后，点击“Copy as Custom”以创建 WordPress 安装的自定义配置。这将允许您根据具体需求调整设置和选项。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer4.PNG" alt="pir" width="600" height="auto"/></p>

### 第二步：修改模板

点击 WordPress 模板的“Copy as Custom”后，您将看到一个表单，要求您提供自定义配置的标题和描述。在相应字段中填写适合的标题和描述，以准确表示您的 WordPress 安装的目的和性质。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer5.PNG" alt="pir" width="600" height="auto"/></p>

下面是 WordPress 的 docker-compose.yml 脚本。此文件在 Docker 环境中定义和配置 WordPress 应用程序方面起着至关重要的作用。它允许您指定一系列参数，包括容器镜像、环境变量、网络设置、卷映射和服务依赖关系。

通过在 docker-compose.yml 文件中定义应用程序的期望状态，Docker 可以自动创建、启动和管理互联的容器。这确保了在各种环境中的一致性和可重复性部署。docker-compose.yml 脚本充当容器及其配置的蓝图，使您能够轻松高效地管理和扩展复杂应用程序。

**在 Services >>db>>image 下更改为：**

```sh
mysql/mysql-server:8.0
``` 

:::note

您可以更改其他参数，例如 MYSQL_USER、MYSQL_PASSWORD 等。但我保持默认设置。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer8.PNG" alt="pir" width="600" height="auto"/></p>

然后您可以在页面底部找到 **Create custom template** 并点击它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer9.PNG" alt="pir" width="600" height="auto"/></p>

接下来，您将被重定向到一个页面，显示您的自定义模板名称。只需点击它即可。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer10.PNG" alt="pir" width="600" height="auto"/></p>

接下来，您将被重定向到一个页面，点击 **Deploy the Stack**。等待几分钟完成部署。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer11.PNG" alt="pir" width="600" height="auto"/></p>

接下来，您将被重定向到一个页面，您可以看到您的堆栈列表。点击您创建的堆栈。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer12.PNG" alt="pir" width="600" height="auto"/></p>

现在您可以看到两个容器正在运行，WordPress 的端口号为 49153。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer13.PNG" alt="pir" width="600" height="auto"/></p>

## 访问 Wordpress

接下来，打开您的网页浏览器并输入 Linkstar 路由器和端口地址，例如 **192.168.100.1:49153**。  
您将看到起始页面 :)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer15.PNG" alt="pir" width="600" height="auto"/></p>

点击“继续”按钮后，您会看到一个表单需要填写。在填写标题、用户名、密码和电子邮件后，您就可以访问仪表板了。

以下是仪表板界面：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer16.PNG" alt="pir" width="600" height="auto"/></p>

在 Linkstar 上进行本地网站托管为各种企业（包括 **咖啡馆、披萨店、机构**等）提供了诸多好处。通过本地托管网站，这些企业可以减少排队时间并提升整体客户体验。借助本地托管的网站，客户可以**轻松访问菜单、下订单、预订或安排预约，所有操作都可以通过他们自己的设备完成。这种简化的流程为客户和员工节省了时间，从而缩短了等待时间并提高了效率**。此外，本地托管网站还为**有效广告宣传提供了机会，使企业能够直接向目标受众推广最新的优惠、特价或活动**。通过利用 Linkstar 的强大功能，企业可以创建无缝且吸引人的在线形象，有效吸引客户并提升整体满意度。

## 资源

- **[网页]** [Docker 官方文档](https://docs.docker.com)

- **[网页]** [Docker Hub](https://hub.docker.com)

- **[网页]** [Portainer](https://www.portainer.io/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>