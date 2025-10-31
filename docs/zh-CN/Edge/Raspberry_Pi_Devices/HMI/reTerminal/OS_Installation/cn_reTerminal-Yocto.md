---
description: 适用于 reTerminal 的 Yocto
title: 适用于 reTerminal 的 Yocto
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-Yocto
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# 适用于 reTerminal 的 Yocto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" alt="pir" width="500" height="auto"/></p>

## 概述

### 什么是 Yocto Project®？

[Yocto Project](https://www.yoctoproject.org) 是一个开源协作项目，帮助开发者为嵌入式产品创建定制的基于 Linux 的系统，无论硬件架构如何。

该项目提供了一套灵活的工具和一个空间，全球的嵌入式开发者可以在其中分享技术、软件栈、配置和最佳实践，这些可以用于为嵌入式设备创建定制的 Linux 镜像。

该项目提供了一个交付硬件支持和软件栈的标准，允许软件配置和构建的互换。这些工具允许用户以可维护和可扩展的方式构建和支持多个硬件平台和软件栈的定制。

### 为什么使用 Yocto？

Yocto Project 有一个用于嵌入式 Linux 创建的开发模型，这使其区别于其他简单的构建系统。它被称为**层模型**。

层模型旨在同时支持协作和定制。层是包含相关指令集的存储库，这些指令告诉构建系统要做什么。用户可以协作、分享和重用层。层可以随时包含对先前指令或设置的更改。

这种强大的覆盖能力使您能够定制先前的协作或社区提供的层，以满足您的产品需求。

使用不同的层来逻辑分离构建中的信息。例如，您可以有一个 BSP 层、一个 GUI 层、一个发行版配置、中间件或一个应用程序。将整个构建放入一个层中会限制并复杂化未来的定制和重用。另一方面，将信息隔离到层中有助于简化未来的定制和重用。

### Yocto 的特性

Yocto 具有以下特性：

- **CII 最佳实践：** Linux 基金会 (LF) 核心基础设施倡议 (CII) 最佳实践徽章是自由/开源软件 (FLOSS) 项目展示其遵循最佳实践的一种方式。Yocto Project 已注册并具有以下徽章级别。

- **二进制可重现性：** 如果发行版没有明确指定要拉取哪些包来支持依赖关系，或者它们的顺序，构建系统可以根据依赖关系何时被满足任意包含包。Yocto Project 控制依赖关系避免污染，并在"core-image minimal"中实现了 99.8% 的可重现性，在扩展测试中略低一些。

- **跨平台开发框架 (CROPS)：** CROPS 是一个开源的跨平台开发框架，利用 Docker 容器提供一个易于管理的可扩展环境，允许开发者为 Windows、Linux 和 Mac OS X 主机的各种架构构建二进制文件。

- **可扩展 SDK：** Yocto Project 可扩展 SDK (eSDK) 具有允许您轻松向镜像添加新应用程序和库、修改现有组件的源代码并在目标硬件上测试更改的工具。

- **Toaster：** Toaster 是 OpenEmbedded 和 BitBake 的 Web 界面，BitBake 是 Yocto Project 使用的构建系统。Toaster 允许您配置和运行构建，并提供有关构建过程的信息和统计数据。

- **多配置：** 构建系统可以通过一个命令自动高效地构建多个指定的架构。

- **二进制构建：** Yocto Project 允许在构建中包含二进制文件，而无需包含相应的源代码文件。

- **开源许可证清单生成：** Yocto Project 可以跟踪构建中使用的所有开源许可证，并为您提供这些许可证和源引用的清单。

通过遵循下面的指南，您将能够使用 Yocto 构建自己的 [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) 系统镜像。让我们开始吧！

## 编译 Yocto 源代码

### 在本地机器上手动编译 - 使用 Bitbake（命令行）

现在我们将继续通过命令行使用 Yocto 手动编译 reTerminal 的系统镜像。

**注意：** 本指南是在安装了 Ubuntu 20.04 的主机 PC 上测试后编写的。但是，它也适用于其他 Linux 系统。

#### 使用 reTerminal 的默认配置进行编译

按照以下步骤开始使用默认的 reTerminal 配置进行编译

- **步骤 1.** 通过安装以下软件包在主机 PC 上准备开发环境

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**注意：** 如果主机PC运行的是不同的Linux发行版，请查看[这里](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)

- **步骤 2.** 创建一个新的工作目录并进入

```sh
mkdir reterminal-yocto
cd reterminal-yocto
```

- **步骤 3.** 创建一个新目录来添加层并进入该目录

```sh
mkdir layers 
cd layers
```

- **步骤 4.** 克隆以下 GitHub 仓库

```sh
git clone -b dunfell git://git.yoctoproject.org/poky
```

- **步骤 5.** 克隆以下仓库

```sh
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git
git clone -b master git://git.yoctoproject.org/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git
```

- **步骤 6.** 在 meta-raspberrypi 层中将内核版本从 5.4 更改为 5.10

```sh
cd meta-raspberrypi/
cp -r recipes-kernel/linux/ ../
git checkout dunfell
rm -r recipes-kernel/linux/
mv -f ../linux/ recipes-kernel/
cd ../../
```

- **步骤 7.** 初始化构建环境

```sh
source layers/poky/oe-init-build-env
```

- **步骤 8.** 将图层添加到构建环境中

```sh
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
```

- **步骤 9.** 返回到 **build** 目录并执行以下命令开始编译

```sh
MACHINE="seeed-reterminal" bitbake rpi-test-image
```

#### 查找编译后的镜像

编译完成后，进入 **build** 目录并运行以下命令来检查 **系统镜像** 是否成功生成

```sh
cd tmp/deploy/images/seeed-reterminal/;ls -lh rpi-test-image*.wic.bz2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/Yocto-bitbake-image-location.png" alt="pir" width="1000" height="auto"/></p>

如上图所示，**rpi-test-image-seeed-reterminal.rootfs.wic.bz2** 是生成的系统镜像

#### 有用的 Bitbake 命令

参考以下内容来熟悉一些有用的 Bitbake 命令

##### 开始编译镜像

- bitbake `<image>`

此命令将开始编译镜像。您可以添加 -k 来在发现错误时继续编译。虽然失败的目标和依赖于它的任何内容无法构建，但会在停止之前尽可能多地构建。

示例 1：

```sh
bitbake rpi-test-image
```

Example 2:

```sh
bitbake rpi-test-image -k
```

##### 显示镜像中的软件包

- bitbake -g `<image>` && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq

这将把镜像内的软件包保存到名为 **pn-buildlist** 的文件中，然后在控制台上列出它们

示例：

```sh
bitbake -g rpi-test-image && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/image-packages.png" alt="pir" width="800" height="auto"/></p>

##### 显示包依赖关系

- bitbake -g `<package>` && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq

这将把包依赖关系保存到名为 **pn-buildlist** 的文件中，然后在控制台上列出它们

示例：

```sh
bitbake -g i2c-tools && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/package-depends.png" alt="pir" width="800" height="auto"/></p>

##### 任务依赖关系浏览器界面

- bitbake `<image>` -g -u taskexp

这将有助于显示任务依赖关系浏览器界面。它显示任务之间的依赖关系

示例：

```sh
bitbake rpi-test-image -g -u taskexp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/task-explorer-ui.png" alt="pir" width="800" height="auto"/></p>

##### 为包启动开发shell

- bitbake `<package>` -c devshell

这将打开一个新的shell，其中已经为该包定义了必要的系统值

示例：

```sh
bitbake evtest -c devshell
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/devshell.png" alt="pir" width="800" height="auto"/></p>

##### 列出包任务

- bitbake -c listtasks

这将列出一个包的所有任务

示例：

```sh
bitbake evtest -c listtasks
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/tasks.png" alt="pir" width="800" height="auto"/></p>

##### 交互式内核配置

- bitbake virtual/kernel -c menuconfig

这将打开一个交互式内核配置窗口，您可以根据需要更改设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/kernel-config.png" alt="pir" width="800" height="auto"/></p>

##### 显示层

- bitbake-layers show-layers

这将显示当前使用的层列表及其优先级。如果一个包存在于两个或更多层中，它将从优先级更高的层构建

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/layers.png" alt="pir" width="800" height="auto"/></p>

##### 显示配方

- bitbake-layers show-recipes

这将显示所有可用的配方

如果您输入以下命令，可以检查我们之前使用的配方，即 **rpi-test-image**

```sh
bitbake-layers show-recipes | grep rpi
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/rpi-test.png" alt="pir" width="800" height="auto"/></p>

##### 检查包

- bitbake -s | grep

这将检查当前 Yocto 设置中是否存在某个特定的包

```sh
bitbake -s | grep openssl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/check-package.png" alt="pir" width="800" height="auto"/></p>

##### 保存详细构建日志

- bitbake -v `<image>` 2>&1 | tee image_build.log

这将在镜像开始构建时打印（在控制台上）并以详细模式将输出存储在 **image_build.log** 中

示例：

```sh
bitbake -v rpi-test-image 2>&1 | tee image_build.log 
```

##### 清理构建环境

- bitbake -c cleanall [package]

这将删除工作目录、状态缓存以及与该包相关的所有先前下载的源文件中的所有内容。如果您在构建特定包时遇到问题，这将很有帮助

示例：

```
bitbake -c cleanall i2c-tools
```

### 在本地机器上手动编译 - 使用 Toaster（图形界面）

现在我们将继续使用 Toaster 为 reTerminal 手动编译系统镜像。

Toaster 是 OpenEmbedded 和 BitBake 的 Web 界面，BitBake 是 Yocto Project® 使用的构建系统。Toaster 允许您配置和运行构建，并提供有关构建过程的信息和统计数据。

**注意：** 本指南是在安装了 Ubuntu 20.04 的主机 PC 上测试后编写的。

- **步骤 1.** 更新软件包列表

```sh
sudo apt update
```

- **步骤 2.** 在主机 PC 上准备开发环境，安装以下软件包

```sh
sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
     build-essential chrpath socat cpio python3 python3-pip python3-pexpect \
     xz-utils debianutils iputils-ping python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev \
     pylint3 xterm
```

**注意：** 如果您的主机PC运行的是不同版本的Linux，[点击这里](https://www.yoctoproject.org/docs/3.1/ref-manual/ref-manual.html#required-packages-for-the-build-host)查看根据您的操作系统需要安装的软件包

- **步骤 3.** 克隆以下GitHub仓库

```sh
git clone -b master git://git.yoctoproject.org/poky
```

- **步骤 4.** 导航到 **poky** 目录

```sh
cd poky
```

- **步骤 5.** 安装以下烤面包机软件包

```sh
pip3 install --user -r bitbake/toaster-requirements.txt
```

- **步骤 6.** 将 poky 目录恢复到以下提交

```sh
git reset --hard 7ade8346b3a09983257589d22aaada47e0eec010
```

- **步骤 7.** 获取构建环境脚本

```sh
source oe-init-build-env
```

- **步骤 8.** 从 **build** 目录启动 toaster

```sh
source toaster start
```

- **步骤 9.** 要访问 Toaster 网页界面，请打开您喜欢的浏览器并输入以下内容

```sh
http://127.0.0.1:8000
```

**注意：** 默认情况下，Toaster 在端口 8000 上启动。您可以使用 **WEBPORT** 参数设置不同的端口。例如，以下命令将端口设置为 "9000"

```sh
source toaster start webport=9000
```

- **步骤 10.** 进入 Toaster 网页界面后，点击 **New project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-ui.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 11.** 输入 **Project name**，将 **project type** 设置为 **New project**，在 **Release** 下选择 **Local Yocto Project**，最后点击 **Create project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-name.jpg" alt="pir" width="450" height="auto"/></p>

- **步骤 12.** 在 **Configuration** 选项卡中，在 **Machine** 下，将名称更改为 **raspberrypi4-64** 并点击 **Save**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-rpi64.png" alt="pir" width="700" height="auto"/></p>

- **步骤 13.** 点击 **Import layer**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-import-layer.png" alt="pir" width="500" height="auto"/></p>

- **步骤 14.** 按如下方式填写信息

  - Layer name: meta-raspberrypi
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/agherzan/meta-raspberrypi.git](https://github.com/agherzan/meta-raspberrypi.git)
  - Git revision: 8dc3a310883ea87cd9900442f46f20bb08e57583

- **步骤 15.** 点击 **Import and add to project**

- **步骤 16.** 重复上述步骤以导入更多层，如下所示

- **meta-qt5**

  - Layer name: meta-qt5
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/meta-qt5/meta-qt5.git](https://github.com/meta-qt5/meta-qt5.git)
  - Git revision: master

- **meta-seeed-reterminal**

  - Layer name: meta-seeed-reterminal
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/Seeed-Studio/meta-seeed-reterminal.git](https://github.com/Seeed-Studio/meta-seeed-reterminal.git)
  - Git revision: main

- **meta-oe**

  - Layer name: meta-oe
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/openembedded/meta-openembedded.git](https://github.com/openembedded/meta-openembedded.git)
  - Repository subdirectory: meta-oe
  - Git revision: master

- **meta-python**

  - Layer name: meta-python
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/openembedded/meta-openembedded.git](https://github.com/openembedded/meta-openembedded.git)
  - Repository subdirectory: meta-python
  - Git revision: master

- **步骤 17.** 导入所有层后，点击 **Layers** 选项卡检查我们已添加的层

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-layers.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 18.** 导航到 **BitBake variables** 并添加一个新变量，如下所示

```sh
- Variable:RPI_KERNEL_DEVICETREE_OVERLAYS_append
- Value: overlays/reTerminal.dtbo overlays/i2c3.dtbo
```

**注意：** 确保在 **overlays/xxxx** 前添加一个空格

- **步骤 19。** 重复相同步骤以添加以下内容

```sh
- Variable:PACKAGECONFIG_append_pn-qtbase
- Value: eglfs 
```

**注意：** 确保在 **eglfs** 前添加一个空格

```sh
- Variable:DISTRO_FEATURES_remove
- Value: x11 wayland vulkan 
```

**注意：** 确保在 **x11 xxx** 前添加一个空格

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-variables.png" alt="pir" width="500" height="auto"/></p>

- **步骤 20.** 最后输入 **rpi-test-image** 并点击 **Build** 开始构建项目

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build.png" alt="pir" width="500" height="auto"/></p>

现在您将看到如下构建过程

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-process.png" alt="pir" width="1000" height="auto"/></p>

构建完成后，您将看到以下内容

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-finish.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 21.** 点击 **rpi-test-image** 查找有关镜像构建的更多详细信息

- **步骤 22.** 在 **Image files** 下，点击 **tar.bz2** 下载编译好的镜像

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-1.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 23.** 在此页面上继续向下滚动，了解更多关于 **Build Summary** 的信息

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-2.png" alt="pir" width="1000" height="auto"/></p>

### 下载已编译的镜像

如果您想下载一个已经使用 Yocto 编译好的 reTerminal 系统镜像，可以按照以下步骤进行。

- **步骤 1.** 打开[此链接](https://github.com/Seeed-Studio/meta-seeed-reterminal/actions)进入 **meta-seeed-reterminal** GitHub 仓库的 **Actions** 页面

- **步骤 2.** 点击最新的 **Seeed reTerminal Yocto embedded linux** 工作流

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/workflows.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 在 **Artifacts** 下，点击 **yocto deploy** 开始下载镜像

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/deploy.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 4.** 下载镜像后，镜像将命名为 **yocto deploy.zip**。解压此 **.zip** 文件，您将找到一个名为 **yocto-image.tar.xz** 的文件

- **步骤 5.** 解压此 **yocto-image.tar.xz** 文件，您将找到一个名为 **yocto-image.tar** 的文件

- **步骤 5.** 解压此 **yocto-image.tar** 文件并导航到 `deploy > images > raspberrypi4-64`。查找扩展名为 **.rootfs.wic.bz2** 的文件。这就是系统镜像文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/compiled-image-search.png" alt="pir" width="1000" height="auto"/></p>

## 将镜像刷写到 reTerminal

现在我们将继续将镜像刷写到 reTerminal 上 CM4 的 eMMC 中。

按照[此 wiki](https://wiki.seeedstudio.com/cn/reTerminal/#getting-started-with-reterminal-extended) 中的步骤进行，并注意以下步骤：

**注意：** 当您打开 **Raspberry Pi Imager** 时，点击 **CHOOSE OS**，选择 **Use custom** 并选择下载的 **.rootfs.wic.bz2** 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## 在 reTerminal 上首次启动

在我们将系统镜像刷入 reTerminal 后，给 reTerminal 上电。这时你会看到内核日志在 reTerminal LCD 上弹出，最后会打开一个使用 Qt 制作的演示应用程序。

默认系统镜像的启动时间大约为 17 秒

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## 通过串口控制台从 PC 登录到 reTerminal

建议使用串口控制台连接登录到 reTerminal 内部的操作系统。查看[此 wiki](https://wiki.seeedstudio.com/cn/reTerminal-FAQ/#q5-how-can-i-log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-a-usb-to-serial-converter) 来进行硬件连接并以 **root** 身份登录

## 测试 Yocto 镜像

要使用 reTerminal 测试上述 Yocto 镜像，你可以访问 [reTerminal 硬件和接口使用 wiki](https://wiki.seeedstudio.com/cn/reTerminal-hardware-interfaces-usage) 并参考其中提到的步骤。

## Yocto Project Summit 2021 演讲

这个演讲主要专注于解释如何使用 Yocto 项目轻松地为 CM4 载板、X86 和 STM32 开发板创建自定义 Linux 镜像。此外，在演讲的最后，还有两个基于 Qt、LVGL 的 HMI 演示，以及一个展示使用 Mender 对这些 SBC 进行安全可靠的 OTA 更新的演示。

<div class="video-container">
<iframe width="720" height="480" src="https://www.youtube.com/embed/OHT9f_NOEpA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 资源

- **[网页]** [Yocto 文档](https://docs.yoctoproject.org/)
- **[网页]** [Toaster 手册](https://www.yoctoproject.org/docs/current/toaster-manual/toaster-manual.html)
- **[GitHub]** [meta-seeed-reterminal](https://github.com/Seeed-Studio/meta-seeed-reterminal)

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
