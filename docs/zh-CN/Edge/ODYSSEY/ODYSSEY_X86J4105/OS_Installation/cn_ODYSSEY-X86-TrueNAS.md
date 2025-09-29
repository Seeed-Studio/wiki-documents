---
description: ODYSSEY - X86J4105
title: TrueNAS 安装
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86-TrueNAS
last_update:
  date: 01/03/2023
  author: w0x7ce

---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/1.png" alt="pir" width={1000} height="auto" /></p>

本指南将向您解释如何通过安装 TrueNAS 将 ODYSSEY-X86 转变为网络附加存储 (NAS)。让我们开始吧！

## 什么是 TrueNAS？

[TrueNAS](https://www.truenas.com) 是一个由 iXsystems 开发的免费开源网络附加存储 (NAS) 操作系统。它基于 FreeBSD 和 Linux，并使用 OpenZFS 文件系统。它几乎可以运行在所有基于 X86 的硬件上。

TrueNAS 有多个版本，包括 TrueNAS CORE（以前称为 FreeNAS）、TrueNAS Enterprise（商业版）和 TrueNAS SCALE（Linux 版）。您可以访问[此链接](https://www.truenas.com/compare-editions)了解它们之间的区别。

TrueNAS 支持运行多种操作系统的客户端，例如 Windows、macOS 和 Linux。它还提供了多种虚拟化主机，例如 XenServer 和 VMware，支持 SMB、AFP、NFS、iSCSI、SSH、rsync 和 FTP/TFTP 协议。此外，它还包括全盘加密和第三方软件插件架构等高级功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/2.png" alt="pir" width={400} height="auto" /></p>

## 准备工作

- [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- USB 闪存驱动器（>1GB）
- 以太网线和一个有空闲端口的路由器
- 外部存储介质（如果您使用内置 eMMC 的 ODYSSEY-X86，也可以使用它）

  - NVMe SSD 或
  - SATA SSD 或
  - SATA HDD 或
  - Micro-SD 卡 或
  - USB 闪存驱动器（>1GB）

## 开始安装

现在让我们逐步完成在 ODYSSEY-X86 上安装 TrueNAS 的过程。在这里，我们将以 TrueNAS Core 为例，演示安装步骤。

### 将 TrueNAS 镜像写入 USB 闪存驱动器

- **步骤 1.** 访问[此链接](https://www.truenas.com/download-truenas-core)打开 TrueNAS Core 的下载页面

**注意：** 如果您想下载 TrueNAS SCALE，可以访问[此链接](https://www.truenas.com/download-truenas-scale)

- **步骤 2.** 您可以选择订阅 TrueNAS 新闻通讯，也可以跳过此步骤

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/3.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 3.** 下载 **Stable** 版本

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/4.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 4.** 访问[此链接](https://www.balena.io/etcher)根据您的操作系统下载并安装 **BalenaEtcher**，然后打开它

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/3.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 5.** 将 USB 闪存驱动器连接到您的电脑，点击 **Flash from file**，选择之前下载的文件，点击 **Select target**，选择已连接的 USB 闪存驱动器，然后点击 **Flash**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/5.jpg" alt="pir" width={1000} height="auto" /></p>

### 从闪存驱动器启动 TrueNAS 并安装到外部驱动器

- **步骤 1.** 将之前写入 TrueNAS 镜像的 USB 闪存驱动器连接到 ODYSSEY-X86 的一个 USB 端口

- **步骤 2.** 连接一个外部存储驱动器以安装 TrueNAS。ODYSSEY-X86 提供多种存储选项，例如：

  - NVMe SSD
  - SATA SSD
  - SATA HDD
  - Micro-SD 卡
  - USB 闪存驱动器（>1GB）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

**注意：** 我们建议您选择 M.2 SSD 安装 TrueNAS 以提高可靠性，并使用剩余的 M.2 和 SATA 端口连接其他驱动器以存储文件

- **步骤 3.** 将以太网线的一端连接到 ODYSSEY-X86 的一个以太网端口，另一端连接到路由器

- **步骤 4.** 打开 ODYSSEY-X86 并连续按 **DELETE** 键进入 BIOS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/5.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 5.** 进入 **Boot** 选项卡，选择 **Boot Option #1** 并选择 **UEFI: USB, Partition 2**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/6.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 6.** 进入 **Save & Exit** 选项卡，选择 **Save Changes and Reset**，并在弹出窗口中选择 **Yes**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/8.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 7.** 一旦 ODYSSEY-X86 成功启动到 TrueNAS，按 **ENTER** 继续，默认高亮的选项是 **Install/Upgrade**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/7.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 8.** 使用 **箭头键** 导航，按 **SPACE** 选择您希望安装 TrueNAS 的驱动器。按 **ENTER** 进入下一步

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/8.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 9.** 再次按 **ENTER** 继续

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/9.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 10.** 现在系统会要求您更改 **root 密码**。这是**推荐**的操作。输入密码并按 **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/10.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 11.** 选择 **通过 UEFI 启动**，因为 ODYSSEY-X86 支持 UEFI 启动

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/11.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 12.** 选择 **创建交换分区（Create swap）** 以获得更好的性能

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/12.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 13.** TrueNAS 安装完成后，按下 **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/13.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 14.** 选择 **重启系统（Reboot System）** 并再次按下 **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/14.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 15.** 当系统再次启动时，移除 USB 闪存驱动器，进入 BIOS，选择连接的外部驱动器作为启动设备并重新启动

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/15.png" alt="pir" width={1000} height="auto" /></p>

现在 ODYSSEY-X86 将从外部驱动器启动进入 TrueNAS，如果启动成功，你将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/16.png" alt="pir" width={1000} height="auto" /></p>

### 设置 TrueNAS

现在我们将设置 TrueNAS 软件

#### 访问 GUI

- **步骤 1.** 在浏览器中输入显示的 IP 地址  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/17.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 2.** 输入用户名为 **root**，并输入之前设置的密码以 **登录（LOG IN）**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/18.png" alt="pir" width={1000} height="auto" /></p>

最终你将进入 TrueNAS 的仪表盘 GUI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/19.png" alt="pir" width={1000} height="auto" /></p>

在这里你可以配置大量设置并探索许多功能。你可以通过访问 [TrueNAS 官方文档](https://www.truenas.com/docs) 了解更多信息。

#### 设置存储池

在本部分中，我们将向你展示如何使用连接的 HDD 设置存储池

- **步骤 1.** 首先我们需要创建一个存储池。导航到 `Storage > Pools` 并点击 **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/20.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2.** 点击 **CREATE POOL**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/21.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 3.** 为池输入一个 **名称**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/22.png" alt="pir" width={550} height="auto" /></p>

- **步骤 4.** 选择所有可用磁盘并点击 **右箭头** 添加磁盘。这里我们只连接了一个 HDD。然而，你可以连接多个 HDD，所有这些磁盘都会显示在这里。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/23.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/24.png" alt="pir" width={1000} height="auto" /></p>

由于我们只连接了一个 HDD，它只允许 **Stripe** 配置。然而，如果连接了多个磁盘，将会有 **RAID** 的选项，专注于数据冗余。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/25.png" alt="pir" width={500} height="auto" /></p>

- **步骤 5.** 忽略关于 **数据丢失** 的警告（因为只有一个驱动器），勾选 **Force**，然后 **Confirm**，最后点击 **CONTINUE**。如果你连接了多个驱动器，则不会有此警告。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/26.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 点击 **CREATE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/27.png" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 勾选 **Confirm**，然后点击 **CREATE POOL**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/28.jpg" alt="pir" width={350} height="auto" /></p>

存储池创建完成后，你将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/29.png" alt="pir" width={1000} height="auto" /></p>

#### 创建用户账户

现在我们将创建一个新用户账户并将其附加到一个数据集

- **步骤 1.** 导航到 `Accounts > Users` 并点击 **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/30.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2.** 输入 **全名（Full Name）**、**用户名（Username）** 和 **密码（Password）**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/31.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 3.** 勾选 **Microsoft Account** 并点击 **SUBMIT**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/32.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 4.** 再次导航到 **Pools**，点击我们之前创建的池旁边的 **三点菜单**，然后点击 **Add Dataset**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/33.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 5.** 为数据集命名并点击 **SUBMIT**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/34.png" alt="pir" width={450} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/35.png" alt="pir" width={450} height="auto" /></p>

- **步骤 6.** 点击新创建的数据集旁边的 **三点菜单**，选择 **编辑权限**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/36.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 7.** 从下拉菜单中选择之前创建的用户名作为 **用户** 和 **组**，勾选 **应用用户** 和 **应用组**，最后点击 **保存**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/37.png" alt="pir" width={1000} height="auto" /></p>

#### 设置 SMB 共享并从 PC 访问

接下来我们将展示如何使此存储空间可从 PC 访问。

- **步骤 1.** 导航到 `共享 > Windows Shares (SMB)`，然后点击 **添加**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/38.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2.** 选择我们之前创建的数据集，最后点击 **提交**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/39.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 3.** 在弹出窗口中点击 **立即配置**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/40.png" alt="pir" width={350} height="auto" /></p>

- **步骤 4.** 选择 **受限**，然后点击 **继续**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/41.png" alt="pir" width={350} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/42.png" alt="pir" width={350} height="auto" /></p>

- **步骤 5.** 点击 **保存**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/43.png" alt="pir" width={1000} height="auto" /></p>

现在我们已经成功设置了 SMB 共享。

- **步骤 6.** 在 PC 上打开 **文件资源管理器**，从 **三点菜单**中选择 **映射网络驱动器**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/44.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 7.** 在 **文件夹**旁输入以下内容：

```sh
\\<x86的IP地址>\<数据集名称>
```

然后勾选下面的两个选项框，点击 **完成**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/45.png" alt="pir" width={600} height="auto" /></p>

- **步骤 8.** 输入您之前创建新账户时指定的用户名和密码，勾选 **记住我的凭据**，然后点击 **确定**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/46.png" alt="pir" width={450} height="auto" /></p>

现在您可以直接从 PC 访问此共享驱动器。您可以开始将文件从 PC 直接复制到此驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/47.png" alt="pir" width={400} height="auto" /></p>

## 资源

- **[网页]** [TrueNAS 官方文档](https://www.truenas.com/docs)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>