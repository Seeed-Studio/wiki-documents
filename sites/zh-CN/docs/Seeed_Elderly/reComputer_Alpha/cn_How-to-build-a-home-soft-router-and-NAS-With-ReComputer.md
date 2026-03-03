---
description: 如何使用 ReComputer 构建家庭软路由和 NAS
title: 如何使用 ReComputer 构建家庭软路由和 NAS
keywords:
- ReComputer_Alpha
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How-to-build-a-home-soft-router-and-NAS-With-ReComputer
last_update:
  date: 01/20/2023
  author: jianjing Huang
---

# 如何使用 ReComputer 构建家庭软路由和 NAS  

## 1. 硬件准备  

- **ReComputer 主板：** 本案例中使用 8GB RAM + 64GB eMMC。
- **SSD：** 为了构建 NAS，我们需要除了原有的 64GB eMMC 之外的大容量磁盘驱动器。推荐使用 SSD，因为它的寿命比 HDD 更长，并且无需考虑 RAID。我们可以选择 m.2 SATA SSD、m.2 NVMe SSD、2.5" SATA SSD 等。
- **一个 8cm 4针散热风扇：** 在炎热的夏季，仅使用被动散热片是不够的。我们需要一个更大的风扇，因为它更安静，并且选择 8010 而不是 9015，以便适配更薄的外壳。
- **一个外壳：** 不用担心，设计文档对所有人开放，您可以随意复制一个。
- **Grove - OLED 显示屏 0.96":** ReComputer 主板上有一个用于 Arduino 的微控制器。为什么不利用它做一些有趣的事情呢？
- **一些电缆，** 如 SATA 数据线、SSD 电缆、风扇电缆、Grove 电缆等。有些可能需要重新布线，但这并不困难。  

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/10.jpg)

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/11.jpg)

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/12.jpg)

**外壳**  

建议选择厚度小于 3mm 的亚克力板。更多细节请参考附加文件 `ReComputer_DarkBox.dxf`。  

支撑柱：25mm x 4 和 27mm x 4。  

**电缆**  

制作电缆时请注意 HDD_PWR 引脚的定义，因为散热风扇可以通过 HDD_PWR 引脚的 12V 电源供电。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/13.jpg)

## 2. 组装  

步骤 1：将 Grove - OLED 显示屏 0.96" 安装到外壳上。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/20.jpg)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/21.jpg)

步骤 2：将散热风扇安装到外壳上。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/22.jpg)

步骤 3：将 2.5" SSD 安装到外壳上。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/23.jpg)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/24.jpg)

步骤 4：布线。  

根据 4针散热风扇的引脚图，它有一个测速检测引脚 `TACH` 和一个测速控制引脚 `PWM`，分别连接到 Arduino 微控制器的 12 引脚和 13 引脚（具体取决于程序中的定义）。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25fan_pinout.png)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25.jpg)

将 Grove - OLED 显示屏 0.96" 通过 I2C 连接，同时连接 PWR 和 GND。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/26.jpg)

将 SAMD21 的串口连接到 Intel CPU 的串口。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25uart.jpg)

步骤 5：安装前后盖并拧紧螺丝。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/27.jpg)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/28.jpg)

**散热**  

风扇提供的冷风流经 CPU 散热片和 SSD，从而有效地散热。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/29.jpg)

## 3. 安装和配置 Proxmox VE 虚拟环境  

我们需要一个容量不少于 8GB 的 USB 设备用于安装。以下是最新发布的 [Proxmox VE ISO](https://www.proxmox.com/en/downloads)。  

使用 Etcher 将其写入 USB 设备。  

插入键盘、鼠标、显示器和 USB 设备。启动 ReComputer 并连续按下 `F7` 键进入启动设备选择界面。选择 U 盘启动。  

PVE 的安装非常简单，但请注意：  
**PVE 不能安装到 eMMC 上！**  

这是因为 PVE 团队认为 eMMC 的寿命不如 SSD 长，因此不允许将 PVE 安装到 eMMC 上。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/pve-grub-menu.png)

（图片来自 PVE 官网。我的 PVE 是 6.0 版本。）  

如果遇到问题，请查看 [安装文档](https://pve.proxmox.com/wiki/Installation)。  

ReComputer 有两个网络端口。将其中一个设置为 PVE 的管理网络，另一个设置为软路由系统的 WAN 端口。  

## 4. Arduino 程序  

SAMD21（兼容 Seeeduino Cortex-M0+）位于 ReComputer 板上，用于根据 CPU 温度动态控制风扇转速。同时，部分 PVE 系统信息会显示在 OLED 屏幕上。  

我的设计思路：  

- PVE 是一个 Debian Linux 系统，因此我们可以灵活编程获取 CPU 温度。
- 可以通过 SAMD21 的 USB 端口刷写程序，该端口已连接到 Intel CPU 的 USB 端口。
- SAMD21 的另一个串口 Serial1 已连接到 Intel CPU 的串口，因此可以通过它进行通信。（我认为硬件串口比 USB 端口更可靠。）
- 编写一个简单的 Arduino 程序，通过 Serial1 读取 CPU 温度，控制风扇转速并刷新 OLED 显示屏。  

很简单，对吧？这是 [Arduino 程序](https://github.com/KillingJacky/DarkBox)。  

### 4.1 编译  

首先，我们需要在 Arduino IDE 中打开程序。选择 `Seeeduino Cortex-M0+` 并在编译日志中找到 bin 文件。  

![image-20191112210126228](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/401.png)

![image-20191112210342437](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/402.png)

### 4.2 刷写  

使用命令 `scp` 将 Arduino IDE 生成的 `ReComputer.ino.bin` 文件复制到 PVE。  

```
scp ReComputer.ino.bin root@192.168.1.x:~
```  

运行 SSH。

```
ssh root@192.168.1.x
```  

下载刷写工具 `bosaac`  

```
wget http://downloads.arduino.cc/tools/bossac-1.7.0-x86_64-linux-gnu.tar.gz
tar zxvf bossac-1.7.0-x86_64-linux-gnu.tar.gz
cp bossac-1.7.0/bossac /usr/bin/
chmod a+x /usr/bin/bossac
```  

通过两次短接 Reset 和 Gnd 使 Arduino 进入 bootloader 模式。  

![image-20191113230804316](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/resetArduino.png)

使用刷写工具刷写 Arduino 程序。  

```
bossac -i -d --port=/dev/ttyACM0 -U true -e -w -v ReComputer.ino.bin -R
```  

屏幕上会显示以下内容：  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/oled_gui.jpg)  

CPU 温度和风扇转速会显示在屏幕上。如果温度低于 45℃，风扇将停止工作。  

系统负载历史和当前内存使用情况也会显示出来。  

顺便提一下，不要忘记在 PVE 中安装脚本。有关更多详细信息，请查看 Github 仓库中的 `README` 文件。  

现在我们已经完成了硬件工作，构建了一个带有智能冷却系统和 2TB 磁盘驱动器的小型 PVE 服务器，足以支持多个虚拟机和 NAS 存储。  

## 5. 安装软路由系统

ReComputer 主板配备了两个千兆以太网端口，这使得构建软路由系统变得非常容易。软路由系统比普通路由器功能更强大，为您提供更专业的家庭网络环境。

我选择了社区中常见且易于使用的 `lede(OpenWrt)` 系统。

以下是网络拓扑图：

![image-20191116233322566](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/500networkArch.png)

第一步：下载并安装镜像

从 [这里](https://drive.google.com/file/d/1-R5mJOu43bKWHv8ViK2V1dtE4zBLDYyU/view?usp=sharing) 下载镜像。

此镜像基于 lede 第三方修改的源码。

第二步：将镜像上传到 PVE

```
scp /PATH/TO/openwrt-x86-64-combined-squashfs.qcow2 root@192.168.32.222:~
```

该 `.qcow2` 文件是在我编译镜像时导出的。如果您下载的是 `.img` 文件，可以使用以下命令进行转换：

```
qemu-img convert -f raw -O qcow2 lede-xxxxxxx-combined-ext4.img vm-100-disk-1.qcow2
```

第三步：创建虚拟机并导入镜像

创建一个 WAN 网络端口并重启 PVE 以启用新增的 WAN。

![image-20191117161646454](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/503createWanBridge.png)

![image-20191117164131776](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/503wanActive.png)

创建虚拟机并按以下配置进行设置（完成向导后，手动添加第二张网卡并删除硬盘）。

![image-20191117161819910](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/504ledeSummary.png)

导入 lede 磁盘镜像：

```
root@pve-home:~# qemu-img check openwrt-x86-64-combined-squashfs.qcow2
No errors were found on the image.
685/2824 = 24.26% allocated, 0.00% fragmented, 0.00% compressed clusters
Image end offset: 45219840
root@pve-home:~# qemu-img info openwrt-x86-64-combined-squashfs.qcow2
image: openwrt-x86-64-combined-squashfs.qcow2
file format: qcow2
virtual size: 177M (185073664 bytes)
disk size: 43M
cluster_size: 65536
Format specific information:
    compat: 1.1
    lazy refcounts: false
    refcount bits: 16
    corrupt: false
root@pve-home:~# qm importdisk 100 openwrt-x86-64-combined-squashfs.qcow2 local-lvm
  Rounding up size to full physical extent 180.00 MiB
  Logical volume "vm-100-disk-0" created.
    (100.00/100%)
```

注意，`100` 是创建的虚拟机的 ID，可以根据您的电脑进行修改。

然后我们可以在 `local-lvm` 中看到刚刚导入的磁盘。

![image-20191117163326117](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/505diskImported.png)

同时，该磁盘会显示在虚拟机的硬件列表中。

![image-20191117163523743](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/506diskImported2.png)

双击添加磁盘。

![image-20191117163625885](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/507addDisk.png)

磁盘列表应如下所示：

![image-20191117163718793](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/508finalHardwareSummary.png)

启动虚拟机，打开 Console 并检查内核日志。当打印 `random: crng init done` 时，按 Enter 键。看到 `shell` 表示启动成功。

![image-20191117164609593](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/509ledeBootup.png)

lede 的内网 IP 是 `192.168.1.1`。我们需要将电脑连接到 ReComputer 的 LAN 网络端口，并将 IP 地址设置为静态 IP `192.168.1.x`，以访问该 IP。

![image-20191117165532300](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/510configLaptopNetwork.png)

在浏览器中输入 `192.168.1.1` 以访问 OpenWrt 登录界面。默认用户名为 `root`，密码为 `password`。

![image-20191117165632253](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/20191220134207.png)

如何使用 OpenWrt 超出了本文的范围。请自行学习并享受！

## 6. 安装 NAS 系统  

NAS 已成为家庭网络中越来越重要的服务之一。它可以轻松地安装在 PVE 虚拟环境中。在本例中，选择开源 NAS 系统 `openmediavault`。

步骤 1：从 [这里](https://sourceforge.net/projects/openmediavault/files/5.0.5/openmediavault_5.0.5-amd64.iso/download) 下载并安装镜像。

步骤 2：将镜像上传到 PVE。

![image-20191114152513579](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/602uploadInstaller.png)

步骤 3：创建虚拟机并按以下配置进行设置：

![image-20191117110324189](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/603omvConfig.png)

步骤 4：启动刚刚创建的虚拟机并安装 openmediavault。点击 `Continue` 或 `OK`，直到安装完成。

![image-20191117110717036](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/604installOMV.png)

![image-20191117111323934](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/605installOMVDone.png)

安装完成后，上图所示的窗口将显示在屏幕上。现在需要移除虚拟机中的 ISO 镜像。

![image-20191117111506366](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/606removeCDROM.png)

返回控制台并点击 Enter 键以重启虚拟机。

![image-20191117111854853](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/607omvFirstBoot.png)

复制屏幕上显示的 IP 地址，并在浏览器中输入以访问 OpenWrt 登录界面。默认用户名为 `admin`，密码为 `openmediavault`。

![image-20191117112155601](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/608loginOMV.png)

![image-20191117112400979](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/609omvWebUIFirstView.png)

openmediavault 系统的安装已经完成。接下来需要进行硬盘直通操作，以提高 OMV 系统的读写效率。

步骤 5：硬盘直通。

首先需要根据 PVE 文档启用 IOMMU。在通过 SSH 访问 PVE 后，运行以下命令：

```
root@pve-home:~# vim /etc/default/grub
```

在 `GRUB_CMDLINE_LINUX_DEFAULT` 后添加 `intel_iommu=on`。

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on"
```

运行 `update-grub`。

```
root@pve-home:~# update-grub
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-5.0.15-1-pve
Found initrd image: /boot/initrd.img-5.0.15-1-pve
Found memtest86+ image: /boot/memtest86+.bin
Found memtest86+ multiboot image: /boot/memtest86+_multiboot.bin
Adding boot menu entry for EFI firmware configuration
done
```

确保以下模块已加载。这可以通过将它们添加到 `*/etc/modules*` 来实现：

```
vfio
vfio_iommu_type1
vfio_pci
vfio_virqfd
```

更改任何与模块相关的内容后，需要刷新 `initramfs`。在 Proxmox VE 中，可以通过执行以下命令完成：

```
root@pve-home:~# update-initramfs -u -k all
```

最后，重启以使更改生效，并检查是否已启用。

```
[    1.810500] DMAR: Setting RMRR:
[    1.810644] DMAR: Setting identity map for device 0000:00:02.0 [0x77800000 - 0x7fffffff]
[    1.810794] DMAR: Setting identity map for device 0000:00:15.0 [0x75935000 - 0x75954fff]
[    1.810805] DMAR: Prepare 0-16MiB unity mapping for LPC
[    1.810891] DMAR: Setting identity map for device 0000:00:1f.0 [0x0 - 0xffffff]
[    1.810959] DMAR: Intel(R) Virtualization Technology for Directed I/O
```

如果看到上述输出，则说明 IOMMU 已启用。

检查我们要直通的硬盘所在的 PCI 接口。连接到 SATA3 接口的 SATA 控制器位于 00:12.0 接口。

```
root@pve-home:~# lspci -nn
00:00.0 Host bridge [0600]: Intel Corporation Device [8086:31f0] (rev 03)
00:02.0 VGA compatible controller [0300]: Intel Corporation Device [8086:3185] (rev 03)
00:0c.0 Network controller [0280]: Intel Corporation Device [8086:31dc] (rev 03)
00:0e.0 Audio device [0403]: Intel Corporation Device [8086:3198] (rev 03)
00:0f.0 Communication controller [0780]: Intel Corporation Celeron/Pentium Silver Processor Trusted Execution Engine Interface [8086:319a] (rev 03)
00:12.0 SATA controller [0106]: Intel Corporation Device [8086:31e3] (rev 03)
00:13.0 PCI bridge [0604]: Intel Corporation Device [8086:31d8] (rev f3)
00:14.0 PCI bridge [0604]: Intel Corporation Device [8086:31d6] (rev f3)
00:14.1 PCI bridge [0604]: Intel Corporation Device [8086:31d7] (rev f3)
00:15.0 USB controller [0c03]: Intel Corporation Device [8086:31a8] (rev 03)
00:17.0 Signal processing controller [1180]: Intel Corporation Device [8086:31b4] (rev 03)
00:17.1 Signal processing controller [1180]: Intel Corporation Device [8086:31b6] (rev 03)
00:17.2 Signal processing controller [1180]: Intel Corporation Device [8086:31b8] (rev 03)
00:18.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31bc] (rev 03)
00:18.1 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31be] (rev 03)
00:18.2 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31c0] (rev 03)
00:18.3 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31ee] (rev 03)
00:19.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO SPI Host Controller [8086:31c2] (rev 03)
00:1c.0 SD Host controller [0805]: Intel Corporation Celeron/Pentium Silver Processor SDA Standard Compliant SD Host Controller [8086:31cc] (rev 03)
00:1e.0 SD Host controller [0805]: Intel Corporation Device [8086:31d0] (rev 03)
00:1f.0 ISA bridge [0601]: Intel Corporation Device [8086:31e8] (rev 03)
00:1f.1 SMBus [0c05]: Intel Corporation Celeron/Pentium Silver Processor Gaussian Mixture Model [8086:31d4] (rev 03)
01:00.0 Non-Volatile memory controller [0108]: Samsung Electronics Co Ltd NVMe SSD Controller SM961/PM961 [144d:a804]
02:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)
03:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)
```

回到 PVE 的 Web UI。在 OMV 虚拟机中选择 `Hardware -> Add PCI Device`。

![image-20191117114829217](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/610pciPassthrough.png)

![image-20191117155102090](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/611selectPCI.png)

之后，重启虚拟机，我们会发现硬盘已经在 OMV 中被识别。

![image-20191117155433087](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/612seeTheNewDisk.png)

查看 openmediavault 文档以获取更多详细信息，尽情享受吧！