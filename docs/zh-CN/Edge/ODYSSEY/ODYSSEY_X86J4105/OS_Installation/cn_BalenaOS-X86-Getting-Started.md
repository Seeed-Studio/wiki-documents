---
description: 开始在 ODYSSEY-X86 上使用 balenaOS
title: BalenaOS 安装
keywords:
- 软件 Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BalenaOS-X86-Getting-Started
last_update:
  date: 2023/1/13
  author: jianjing Huang
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/thumb.png" alt="pir" width="1000" height="auto"/></p>

## 什么是 balenaOS？

[balenaOS](https://www.balena.io/os) 是一个优化用于在嵌入式设备上运行 Docker 容器的操作系统，重点在于长期运行的可靠性，以及从构建 balena 的经验中汲取灵感的高效开发者工作流程。

balenaOS 的核心理念是，Linux 容器首次为在嵌入式设备上使用虚拟化提供了一条可行的路径。虚拟机和虚拟机管理程序为云部署带来了巨大的生产力和自动化提升，但它们对硬件的抽象、资源开销以及缺乏硬件支持，使得它们不适合嵌入式场景。而通过 Linux 容器实现的操作系统级虚拟化，消除了这些对 Linux 设备的限制，而这些设备在物联网中非常常见。

## 什么是 balenaCloud？

[balenaCloud](https://www.balena.io/cloud) 是由 balena 托管的全面的基于云的设备部署和管理基础设施。它允许即使是最初学者的设备管理者也能用任何语言构建应用程序，无缝配置设备，快速测试新功能，并轻松管理其设备群组。Docker 容器技术通过单个命令实现安全、可靠的更新，同时设备保持在线并完全正常运行。用户可以使用 balenaCloud 仪表板查看和管理整个设备群组，也可以选择直接与 API 交互。

## 在 ODYSSEY - X86 上快速开始使用 balenaOS

在 ODYSSEY - X86 上安装 balenaOS 和 balenaCloud 的最简单方法只需几个步骤：

- 在 balenaCloud 上创建一个设备群组
- 将 balenaOS 镜像写入 USB 驱动器
- 将 USB 驱动器连接到 ODYSSEY - X86 并启动实时镜像
- 启动后的 ODYSSEY - X86 会出现在 balenaCloud 仪表板上

现在让我们开始吧！

### 准备工作

在开始之前，请准备以下内容：

- [ODYSSEY - X86 主板](https://www.seeedstudio.com/ODYSSEY-X86J4125864-p-4916.html)
- USB 闪存驱动器
- 以太网线或 WiFi 连接
- [balena 账户](https://dashboard.balena-cloud.com/signup)
- [balenaEtcher](https://www.balena.io/etcher) 或其他镜像写入软件

### 在 balenaCloud 上创建设备群组

- **步骤 1.** [注册](https://dashboard.balena-cloud.com/signup)一个 balena 账户并登录

- **步骤 2.** 登录后，点击 **Create fleet** 创建您的第一个设备群组

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/5.png" alt="pir" width="1000" height="auto"/></p>

**注意：** 群组是共享相同架构并运行相同代码的一组设备。当您配置设备时，它会被添加到特定群组，但可以随时迁移到另一个群组。

- **步骤 3.** 输入群组名称，选择 **Seeed ODYSSEY-X86** 作为默认设备类型，保持 **Starter** 作为群组类型，最后点击 **Create new fleet**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/6.png" alt="pir" width="1000" height="auto"/></p>

**注意：** 如果要创建包含多个容器的群组，您需要使用 Starter 或 Microservices 群组类型。Starter 群组功能齐全且对所有用户免费，但总设备数量限制为 10 台。

- **步骤 4.** 点击 **+ Add device** 将 ODYSSEY - X86 主板添加到此群组并将其连接到 balenaCloud

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/7.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 5.** 此处 **设备类型** 将已自动选择，**版本** 将选择为最新可用版本。选择 **Development** 作为 **版本**，因为推荐首次使用者选择此版本。您还可以选择网络连接方式为 **仅以太网** 或 **WiFi + 以太网**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/8.png" alt="pir" width="650" height="auto"/></p>

**注意：** 在开始时，开发版镜像最为有用，因为它允许许多测试和故障排除功能。用于生产时，请务必切换到生产版镜像。有关开发版和生产版镜像的更多详细信息，请参阅[此处](https://www.balena.io/docs/reference/OS/overview/2.x/#development-vs-production-images)。

- **步骤 6.** 点击 **+ Advanced** 选择设备检查更新的频率

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/9.png" alt="pir" width="350" height="auto"/></p>

### 从 USB 驱动器写入并运行 balenaOS 镜像

- **步骤 1.** 配置镜像完成后，点击 **Flash** 旁边的箭头，选择 **Download balenaOS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/10.jpg" alt="pir" width="300" height="auto"/></p>

下载完成后，您将获得一个压缩的镜像文件，文件名类似于 **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img**，其中 **ODYSSEY-fleet** 是您在仪表板上为群组命名的名称。或者，通过点击下载按钮的切换部分，您还可以选择仅下载配置文件（config.json），而不是整个镜像。

- **步骤 2.** 打开 [balenaEtcher](https://www.balena.io/etcher)，点击 **Flash from file** 并选择我们之前下载的 **zip** 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/etcher.png" alt="pir" width="600" height="auto"/></p>

- **步骤 3.** 将 USB 闪存驱动器连接到电脑，选择已连接的闪存驱动器作为 **目标**，然后点击 **Flash**

接下来，我们将在 ODYSSEY - X86 上运行此镜像。

- **步骤 4.** 将闪存驱动器连接到 ODYSSEY - X86 主板并启动主板

- **步骤 5.** 启动主板时，持续按下 **DELETE 键** 进入 **BIOS 设置**

- **步骤 6.** 进入 **Boot** 部分，将 **Boot Option #1** 设置为 **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 7.** 进入 **Save & Exit**，选择 **Save Changes and Reset**

现在操作系统将成功从 USB 闪存驱动器启动。

### 从 balenaCloud 仪表板管理 ODYSSEY - X86

- **步骤 1.** 再次打开 balenaCloud 仪表板，大约一分钟后，ODYSSEY - X86 主板将出现在列表中！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/11.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 2.** 从列表中点击设备以访问设备仪表板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/12.png" alt="pir" width="1000" height="auto"/></p>

如果无法让设备上线，请访问 [balena 支持频道](https://www.balena.io/docs/learn/welcome/support)

## 常见问题解答

### 问题 1：如何从 HDD/SSD 运行 balenaOS 镜像？

如果您希望从 HDD/SSD 而不是 USB 驱动器运行 balenaOS 镜像，可以按照以下步骤操作：

- **步骤 1.** 按照上述 **从 USB 驱动器烧录并运行 balenaOS 镜像** 部分中的 **步骤 1 - 步骤 7**

- **步骤 2.** 成功启动后，从 balenaCloud 仪表板关闭主板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/13.png" alt="pir" width="700" height="auto"/></p>

**注意：** 我们需要在烧录后启动一次，因为 **resin-data** 分区会扩展以占用闪存驱动器上的剩余空间，我们将使用该空间存储需要烧录到 HDD/SSD 的镜像。

- **步骤 3.** 从 ODYSSEY - X86 上移除闪存驱动器并连接到电脑

- **步骤 4.** 解压之前下载的 **压缩镜像文件**

- **步骤 5.** 打开终端窗口，将解压后的 **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img** 镜像复制到闪存驱动器的 **resin-data** 分区内的 **resin-data** 文件夹中

```sh
sudo cp balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img /media/username/resin-data/resin-data
```

**注意：** 将 **username** 替换为您电脑的用户名

- **步骤 6.** 从电脑移除闪存驱动器并连接到 ODYSSEY - X86 主板。同时将外部 HDD/SSD 连接到 ODYSSEY 主板。

- **步骤 7.** 主板启动后，导航到 balenaCloud 仪表板并访问 **终端**。点击 **Select a target** 下拉菜单，选择 **Host OS** 并点击 **Start terminal session**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/15.jpg" alt="pir" width="10000" height="auto"/></p>

- **步骤 8.** 在终端中输入以下命令

```sh
fdisk -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/fdisk-l.png" alt="pir" width="620" height="auto"/></p>

我们可以看到连接的 HDD 显示为 **/dev/sda**

- **步骤 9.** 使用 **dd** 工具将之前复制的 **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img** 文件烧录到连接的 HDD/SSD

```sh
dd if=/resin-data/balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img of=/dev/sda
```

**注意：** 将 **/dev/sda** 替换为对应连接的 HDD/SSD 的名称

- **步骤 10.** 烧录完成后，关闭 ODYSSEY - X86

- **步骤 11.** 移除 USB 闪存驱动器并启动 ODYSSEY - X86

- **步骤 12.** 启动主板时，持续按下 **DELETE 键** 进入 BIOS 设置

- **步骤 13.** 进入 **BOOT** 部分，将 **Boot Option #1** 设置为 **UEFI OS xxxxx**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/bios.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 14.** 进入 **Save & Exit**，选择 **Save Changes and Reset**

现在操作系统将成功从 HDD/SSD 启动。

### 问题 2：如何通过终端访问 ODYSSEY - X86？

您可以通过终端访问 ODYSSEY - X86，但需要在主机电脑上安装 Balena CLI。Balena CLI 是 balenaCloud 或 openBalena 的命令行界面工具。它是一款适用于 Windows、macOS 和 Linux 的软件工具，可通过命令提示符/终端窗口使用。它可以交互式使用，也可以在脚本中调用。

- **步骤 1.** 按照 [此链接](https://github.com/balena-io/balena-cli/blob/master/INSTALL.md) 根据您的操作系统安装 Balena CLI。

**注意：** 本教程中，我们将在 Ubuntu 上使用 Balena CLI。然而，其他系统的操作步骤类似。

- **步骤 2.** 将以太网线从路由器连接到 ODYSSEY - X86 主板

**注意：** 确保主机电脑和 ODYSSEY - X86 在同一网络中

- **步骤 3.** 打开终端窗口，扫描本地网络中的 BalenaOS 设备

```sh
sudo balena scan
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/scan.png" alt="pir" width="550" height="auto"/></p>

- **步骤 4.** 使用 IP 地址通过 SSH 连接到主板

```sh
balena ssh <ip address>
```

```sh
示例：
balena ssh 192.168.1.78
```

现在我们已经进入运行 BalenaOS 的 ODYSSEY - X86！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/ssh.png" alt="pir" width="650" height="auto"/></p>

在 [此处](https://www.balena.io/docs/reference/balena-cli/) 了解更多关于 Balena CLI 的信息。

### 问题 3：如何从源代码编译 balenaOS？

尽管我们可以按照之前的说明从 balenaCloud 仪表板获取 balenaOS 镜像，但如果你喜欢挑战，也可以从源代码编译 balenaOS 镜像！

#### 在本地机器上手动编译

现在我们将通过命令行使用 Yocto 手动为 ODYSSEY - X86 编译 BalenaOS 系统镜像。

**注意：** 本指南是在安装了 Ubuntu 20.04 的主机 PC 上测试后编写的。然而，它也适用于其他 Linux 系统。

- **步骤 1.** 在主机 PC 上准备开发环境，安装以下软件包：

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**注意：** 如果主机 PC 运行的是其他 Linux 发行版，请参考 [这里](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)

- **步骤 2.** 克隆以下仓库并进入仓库目录：

```sh
git clone https://github.com/balena-os/balena-seeed-x86
cd balena-seeed-x86
```

- **步骤 3.** 下载所有必要的依赖项：

```sh
git submodule update --init --recursive
```

- **步骤 4.** 运行构建脚本：

```sh
./balena-yocto-scripts/build/barys
```

现在编译过程将开始。请耐心等待，直到编译完成。编译时间取决于构建机器的硬件规格。

#### 查找编译后的镜像

编译完成后，运行以下命令检查系统镜像是否成功生成：

```sh
cd build/tmp/deploy/images/odyssey-x86/;ls -lh *balenaos-img
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/image-location.png" alt="pir" width="1000" height="auto"/></p>

- **balena-image-odyssey-x86** 用于直接从连接到 ODYSSEY - X86 的外部存储设备（闪存驱动器、SSD、HDD）启动。
- **balena-image-flasher-odyssey-x86** 用于直接从 ODYSSEY - X86 的内部 eMMC 存储启动。因此，这个 flasher 镜像需要烧录到一个闪存驱动器上，用于初始启动。当启动时，这个 flasher 镜像会自动将 BalenaOS 安装到内部 eMMC 存储中。

#### 使用编译后的镜像

默认情况下，这些镜像的文件扩展名为 **.balenaos-img**。在烧录这些镜像之前，你需要将文件扩展名重命名为 **.img**。

例如：

- 将 **balena-image-odyssey-x86.balenaos-img** 重命名为 **balena-image-odyssey-x86.img**。
- 将 **balena-image-flasher-odyssey-x86.balenaos-img** 重命名为 **balena-image-flasher-odyssey-x86.img**。

## 资源

- **[网页]** [Balena 文档](https://www.balena.io/docs)

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