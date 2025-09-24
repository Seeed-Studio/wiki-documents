---
description: reTerminal 的 Buildroot
title: reTerminal 的 Buildroot
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-Buildroot-SDK
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


# reTerminal 的 Buildroot

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/thumb.jpg" alt="pir" width="500" height="auto"/></p>

## 介绍

[Buildroot](https://buildroot.org) 是一个易于使用的工具，它简化并自动化了为嵌入式系统构建完整 Linux 系统的过程，使用交叉编译。

为了实现这一目标，Buildroot 能够为您的目标生成交叉编译工具链、根文件系统、Linux 内核镜像和引导加载程序。Buildroot 可以独立地用于这些选项的任何组合（例如，您可以使用现有的交叉编译工具链，仅使用 Buildroot 构建您的根文件系统）。

它具有简单的结构，易于理解和扩展。它仅依赖于众所周知的 Makefile 语言。Buildroot 是一个开源项目，许多开发者每天都在为其贡献代码。

通过遵循下面的指南，您将能够使用 Buildroot 构建自己的 [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) 系统镜像。让我们开始吧！

## 编译 Buildroot 源代码

### 在本地机器上手动编译

现在我们将继续使用 Buildroot 手动编译 reTerminal 的系统镜像。

**注意：** 本指南是在安装了 Ubuntu 20.04 的主机 PC 上测试后编写的。但是，它也适用于其他 Linux 系统。

- **步骤 1.** 通过安装以下软件包（git、gcc 和 make）在主机 PC 上准备开发环境

```sh
sudo apt update
sudo apt install git
sudo apt install build-essential
```

**注意：** 如果您已经安装了上述软件包，可以跳过此步骤。

- **步骤 2.** 克隆以下 GitHub 仓库

```sh
git clone --depth=1 https://github.com/Seeed-Studio/seeed-linux-buildroot.git -b master
```

- **步骤 3.** 导航到 **seeed-linux-buildroot** 目录

```sh
cd seeed-linux-buildroot
```

#### 使用 reTerminal 的默认配置进行编译

输入以下命令开始使用默认的 reTerminal 配置进行编译

```sh
make reTerminal_64_defconfig
make
```

#### 使用您自己的配置为 reTerminal 编译

输入以下命令来安装编译所需的软件包，以便使用您自己的配置进行编译

```sh
sudo apt install libncurses-dev
```

- **步骤 5.** 输入以下内容以打开 buildroot 配置窗口

```sh
make menuconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/menuconfig.png" alt="pir" width="1000" height="auto"/></p>

您可以使用此配置窗口并浏览可用选项，**根据您的需求自定义镜像**。另外，如果您在此窗口中点击**保存**和**退出**而不做任何更改，将加载默认的 reTerminal 配置。

#### 查找编译后的镜像

编译成功后，导航到 `seeed-linux-buildroot/output/images`，您将找到编译后的镜像文件 **sdcard.img**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/image-location-1.png" alt="pir" width="1000" height="auto"/></p>

### 下载已编译的镜像

如果您想下载使用 Buildroot 已编译好的 reTerminal 系统镜像，可以按照以下步骤进行。

- **步骤 1.** 打开[此链接](https://github.com/Seeed-Studio/seeed-linux-buildroot/actions)进入 **seeed-linux-buildroot** GitHub 仓库的**Actions**页面

- **步骤 2.** 点击最新的 **Seeed reTerminal buildroot** 工作流

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/workflow.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 在**Artifacts**下，点击 **buildroot deploy** 开始下载镜像

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/download.jpg" alt="pir" width="1000" height="auto"/></p>

**注意：** 下载镜像后，解压镜像以获得 **sdcard.img** 文件

## 将镜像烧录到 reTerminal

现在我们将把镜像烧录到 reTerminal 上 CM4 的 eMMC 中。

按照[此 wiki](https://wiki.seeedstudio.com/cn/reTerminal/#getting-started-with-reterminal-extended) 中的步骤操作，并注意以下步骤：

**注意：** 当您打开 **Raspberry Pi Imager** 时，点击 **CHOOSE OS**，选择 **Use custom** 并选择下载的 **sdcard.img** 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## reTerminal 首次启动

将系统镜像烧录到 reTerminal 后，给 reTerminal 通电。在这里您将看到内核日志在 reTerminal LCD 上弹出，最后将打开一个使用 Qt 制作的演示应用程序。

默认系统镜像的启动时间约为 30 秒

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## 分析 Buildroot 镜像

如前所述，Buildroot 是一个非常强大的工具，它可以依赖第三方库和工具，能够快速构建我们需要的内容。如果您想了解 Buildroot 编译时间、依赖关系、编译消耗的资源大小等，通过代码检查是非常不方便的。但是，Buildroot 提供了可视化分析工具来分析上述内容，我们只需要几个简单的命令就可以使用它们。

首先安装以下软件包

```sh
sudo apt install python3-matplotlib python3-numpy
```

### 生成依赖关系图

Buildroot 的工作之一是理解包之间的依赖关系，并确保它们以正确的顺序构建。这些依赖关系有时可能很复杂，对于给定的系统，通常不容易理解为什么某个包被 Buildroot 引入并成功构建。为了帮助理解依赖关系并更好地理解不同组件在嵌入式 Linux 系统中的作用，Buildroot 能够生成依赖关系图（PDF 格式）

- **步骤 1.** 安装以下包

```sh
sudo apt install graphviz
```

- **步骤 2.** 生成依赖关系图

```sh
make graph-depends
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/depends-command.png" alt="pir" width="1000" height="auto"/></p>

执行上述命令后，依赖关系图将在 `seeed-linux-buildroot > output > graphs` 目录下生成：

- graph-depends.pdf
- graph-depends.dot

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)

**注意：** 点击上图可查看放大版本

### 生成编译资源消耗大小分析

Buildroot 可以生成编译过程中资源消耗大小的分析。

输入以下命令

```sh
make graph-size
```

执行上述命令后，可视化分析文件将在 `seeed-linux-buildroot > output > graphs` 目录下生成：

- graph-size.pdf
- file-size-stats.csv
- package-size-stats.csv

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)

**注意：** 点击上图可查看放大版本

## 测试 Buildroot 镜像

要使用 reTerminal 测试上述 Buildroot 镜像，您可以访问 [reTerminal 硬件和接口使用说明](https://wiki.seeedstudio.com/cn/reTerminal-hardware-interfaces-usage) 并参考其中提到的步骤。

## 资源

- **[网页]** [Buildroot 文档](https://buildroot.org/docs.html)
- **[GitHub]** [seeed-linux-buildroot](https://github.com/Seeed-Studio/seeed-linux-buildroot)

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
