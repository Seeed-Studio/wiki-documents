---
description: 树莓派作为 NAS
title: 树莓派作为 NAS
keywords:
- Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Raspberry_Pi_as_a_NAS
last_update:
  date: 8/5/2024
  author: Frank
---


# 使用树莓派作为 NAS（网络附加存储）

树莓派是一款功能强大的微型计算机，在技术爱好者中很受欢迎。它可以用于各种 DIY 项目，包括搭建网络附加存储（NAS）。在本教程中，我们将探讨以下几个方面：

- [树莓派适合做 NAS 吗？](#jump1)
- [如何将树莓派 5 转换为 NAS？](#jump2)
- [使用树莓派作为 NAS 时的常见问题和解决方案](#jump3)

## <span id="jump1"> 树莓派适合做 NAS 吗？ </span>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Raspberry Pi.png" alt="pir" width={500} height="auto" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

树莓派具有强大的处理能力和灵活的配置选项，使其成为构建 NAS 的理想选择。以下是它的优势：
- 成本效益：与传统 NAS 设备相比，树莓派相对便宜。
- 低功耗：树莓派功耗很低，适合 24/7 运行。
- 灵活性和可定制性：您可以安装各种操作系统和软件，根据需要配置 NAS。
- 社区支持：树莓派拥有庞大的用户社区，提供丰富的资源和技术支持。

但是，也有一些限制需要考虑：
- 性能限制：与高端 NAS 设备相比，树莓派可能存在性能约束，特别是在处理大量数据时。
- 存储限制：树莓派本身没有内置大容量存储，需要外接硬盘或 SSD。

## <span id="jump2"> 如何将树莓派 5 转换为 NAS？ </span>

将树莓派 5 转换为 NAS 并不复杂。只需按照以下步骤操作：

### 步骤 1：准备硬件
- [一台树莓派 5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)
- 一张 microSD 卡（建议 32GB 或更大）
- 一个稳定的电源适配器
- 外接硬盘或 SSD
- 网络连接（有线或无线）

### 步骤 2：安装操作系统

1. 使用 [Raspberry Pi Imager](https://www.raspberrypi.com/software/) 等工具将操作系统镜像写入 microSD 卡。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/imager.png" alt="pir" width={800} height="auto" /></div>

2. 选择"Raspberry Pi 5" -> "Raspberry Pi OS (32-bit)" -> SD 卡（确保选择正确的设备，如果连接了其他 USB 设备，避免数据丢失），然后点击"Next"。以下是示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/burn1.gif" alt="pir" width={800} height="auto" /></div>

3. 然后，编辑设置。以下是提供的设置示例：
- 输入您选择的主机名 nas（本教程中推荐）。
- 输入用户名和密码，稍后您将需要这些信息进行身份验证。
- 勾选"Configure WiFi"旁边的复选框，这样您的 Pi 就可以自动连接到 Wi-Fi。
- 输入您的网络 SSID（名称）和密码。
- 勾选"Enable SSH"旁边的复选框，这样我们就可以在不使用鼠标和键盘的情况下连接到 Pi。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/burn2.gif" alt="pir" width={800} height="auto" /></div>

4. 点击"Save"后，开始烧录镜像。该过程可能需要一些时间。当出现如下图所示的界面时，表示烧录完成。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Burn completed.png" alt="pir" width={800} height="auto" /></div>

### 步骤 3：远程连接到 Pi

插入 SD 卡后，给树莓派通电（如果可能，通过以太网电缆将其连接到网络，但在本教程中，我们将使用在镜像制作过程中选择的 WiFi）。

在您的计算机上打开终端会话，通过运行以下命令通过 SSH 访问树莓派，将 **username** 和 **hostname** 替换为镜像制作过程中设置的用户名和主机名：

```bash
$ ssh <username>@<hostname>.local
```

例如：

```bash
$ ssh seeed@nas.local
```

您需要输入在镜像制作过程中创建的密码。以下是示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Remote Connection.gif" alt="pir" width={800} height="auto" /></div>

现在我们已经完成了 SSH 连接，是时候将其转换为 NAS 了。

### 步骤 4：安装和配置 NAS

#### 1.定位驱动器

首先，将存储设备连接到树莓派，然后使用以下命令检查连接的存储设备：

```bash
$ lsblk
```

您将看到类似这样的输出：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/locate the drive.gif" alt="pir" width={800} height="auto" /></div>

:::tip
在此输出中，mmcblk0 是您的 microSD 卡，第一个连接的 USB 存储设备显示为 sda（存储设备 A）。其他设备将是 sdb、sdc 等。
:::

#### 2.分区驱动器

接下来，对驱动器进行分区，以便树莓派操作系统可以将其识别为单个存储设备：

```bash
$ sudo fdisk /dev/sda
```

以下是一些相关命令：
- 创建新分区：n
- 列出当前分区：p
- 删除分区：d
- 不保存更改退出：q

在这个项目中，我们将通过输入 '**n**' 然后按 **Enter** 键来创建一个新分区，并通过输入 '**p**' 然后按 **Enter** 将其指定为主分区。对于其余选项，我们将通过简单地按 **Enter** 来选择默认设置。如果存在现有分区，我们将通过输入 '**d**' 来删除它。以下是一个示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/partition the drive1.gif" alt="pir" width={800} height="auto" /></div>

:::tip
如果出现消息"**All space for primary partitions is in use**"，这意味着磁盘上已经有四个主分区或三个主分区和一个扩展分区，您需要删除一个分区（**d**）。
:::

:::note
如果磁盘上有已挂载的分区（如我的 sda1），请按照以下步骤卸载它们：
1. 退出 fdisk：输入 q 并按 Enter 退出 fdisk 以避免意外修改。
2. 卸载文件系统：如果磁盘上有已挂载的分区，请先卸载它们。您可以使用以下命令查看已挂载的分区：

```bash
$ mount | grep /dev/sda
```

3. 然后使用 umount 命令卸载它们，例如：

```bash
$ sudo umount /dev/sda1
```

4. 运行：

```bash
$ sudo fdisk /dev/sda 
```

以下是一个示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/partition the drive2.gif" alt="pir" width={800} height="auto" /></div>

然后，返回到上面的分区步骤。
:::

#### 3.格式化驱动器

现在驱动器已经分区完成，必须对其进行格式化以确保 Raspberry Pi OS 可以访问和操作其上的数据。要使用 ext4 文件系统格式化您的驱动器，请使用以下命令：

```bash
$ sudo mkfs.ext4 /dev/sda1
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/format the drive.gif" alt="pir" width={800} height="auto" /></div>

#### 4.挂载驱动器

接下来，挂载驱动器以使其在 Raspberry Pi 的文件系统中可用：
```bash
$ sudo mount /dev/sda1 /mnt
```

并确保每次系统启动时都挂载驱动器：
```bash
$ sudo nano /etc/fstab
```

在文件末尾添加以下行：
```
/dev/sda1 /mnt/sda1/ ext4 defaults,noatime 0 1
```

按 **Ctrl**+**X**，然后按 **Y**，最后按 **Enter** 在 nano 中保存编辑的文件。以下是一个示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/mount the drive.gif" alt="pir" width={800} height="auto" /></div>

#### 5.创建共享文件夹

运行以下命令在您的驱动器上创建共享文件夹：
```bash
$ sudo mkdir /mnt/sda1/shared
```

使用以下命令为 Raspberry Pi 上的所有用户授予读取、写入和执行权限：
```bash
$ sudo chmod -R 777 /mnt/sda1/shared
```

以下是一个示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/create a shared folder.gif" alt="pir" width={800} height="auto" /></div>


### 步骤 5：通过网络共享驱动器

运行以下命令安装 [Samba](https://www.samba.org/)，这是一个用于通过网络共享目录的工具：
```bash
$ sudo apt install samba samba-common-bin
```

以下是一个示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network1.gif" alt="pir" width={800} height="auto" /></div>


然后，配置 Samba 以通过网络共享目录。我们可以通过 Samba 配置文件来指示 Samba。在编辑器中打开配置文件：smb.conf
```bash
$ sudo nano /etc/samba/smb.conf
```

在文件末尾添加以下行：
```
[shared]
path=/mnt/sda1/shared
writeable=Yes
create mask=0777
directory mask=0777
public=no
```

按 **Ctrl**+**X**，然后按 **Y**，最后按 **Enter** 在 nano 中保存编辑的文件。以下是一个示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network2.gif" alt="pir" width={800} height="auto" /></div>

重启 Samba 以应用配置更改：
```bash
$ sudo systemctl restart smbd
```

以下是一个示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network3.gif" alt="pir" width={800} height="auto" /></div>


### 步骤 6：授予对驱动器的访问权限

最后，您需要授予对 Samba 共享的访问权限，以便只有经过身份验证的用户才能通过网络访问文件。运行以下命令创建一个用户来管理 Samba 共享，在此示例中将用户名命名为 pinas：

```bash
$ sudo adduser <username>
```

以下是一个示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Grant access to the drive1.gif" alt="pir" width={800} height="auto" /></div>


然后，使用以下命令为该用户添加密码：
```bash
$ sudo smbpasswd -a <username>
```

以下是一个示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Grant access to the drive2.gif" alt="pir" width={800} height="auto" /></div>


### 步骤 7：访问和使用 NAS

#### 从 Windows

1. 打开文件资源管理器，从计算机菜单中选择"映射网络驱动器"。
2. 选择一个驱动器号并输入文件夹路径，使用域名格式即使 IP 地址更改也能轻松访问设备（在本教程中，路径是 \\nas\pinas）。
3. 输入登录用户名和密码。以下是一个示例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Access and Use the NAS.gif" alt="pir" width={800} height="auto" /></div>

4. 登录后，您可以访问服务器上的文件。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Access and Use the NAS finished.png" alt="pir" width={800} height="auto" /></div>

### 下一步

如果您想让您的硬盘和树莓派看起来更加整洁美观，您可以使用3D打印机制作支架和外壳来固定树莓派和外置硬盘，然后将它们组装在一起。


## <span id="jump3"> 使用树莓派作为NAS时的常见问题和解决方案 </span>

以下是您在使用树莓派作为NAS时可能遇到的一些常见问题以及解决方法：

### 问题1：如何提高树莓派NAS性能？

- 使用SSD而不是HDD来提高数据读取速度。
- 确保树莓派通过有线网络连接以获得更稳定的性能。
- 通过调整缓存设置和最大连接数来优化Samba配置文件。

### 问题2：如何保护树莓派NAS的安全？
- 定期更新系统和软件以修补安全漏洞。
- 使用强密码并限制SSH访问。
- 配置防火墙并使用VPN进行远程访问。

### 问题3：如何自动备份到树莓派NAS？
- 使用rsync工具设置定期备份任务：
```bash
rsync -av --delete /source_directory /mnt/external_hdd/backup_directory
```
- 配置cron作业进行自动备份。


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