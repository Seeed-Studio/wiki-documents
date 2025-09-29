---
description: ODYSSEY, STM32MP135D
title: ODYSSEY – STM32MP135D 入门指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-STM32MP135D
last_update:
  date: 10/13/2023
  author: Xogium
---

# ODYSSEY – STM32MP135D 入门指南

ODYSSEY STM32MP135D 是一款基于 STM32 MPU 的紧凑型单板计算机，提供强大的硬件性能，采用小巧的外形设计，适用于从智能家居到自动售货机、IP 摄像头等多种用途。它提供了广泛的连接选项，旨在简化原型设计。硬件有两种不同的版本：
* [ODYSSEY STM32MP135D](https://www.seeedstudio.com/Odyssey-MP135D-p-5727.html)，提供所有连接选项，仅支持基本的 micro SD 作为存储选项
* [ODYSSEY STM32MP135D with eMMC](https://www.seeedstudio.com/Odyssey-MP135D-eMMC-p-5728.html)，增加了 4 GB eMMC 存储

目前，仅支持 Buildroot 作为操作系统。

## 硬件 ##
* SoC: STM32MP135D
	* 32 位 Arm® Cortex®-A7
		* L1 32-Kbyte 指令缓存 / 32-Kbyte 数据缓存
		* 128-Kbyte 统一二级缓存
		* Arm® NEON™ 和 Arm® TrustZone®
* 支持 Buildroot 操作系统。
* 连接选项：
	* 2 个 10/100 Mbit/s 以太网端口，
		* eth1 支持 PoE 和 WOL。
	* 1 个 USB-A 端口，
	* 1 个 CSI 30p FPC 接口，
	* 1 个 LCD 40p FPC 接口，
	* 40 个 GPIO 引脚，采用与 Raspberry Pi 兼容的引脚布局。
* 存储 / 内存：
	* 4 Gbits DRAM，
	* 256 Kbits EEPROM，页面大小为 64 字节，
	* Micro SD 卡插槽，支持 SD、SDHC 和 SDXC 卡，
	* 4 GBytes eMMC（仅限带 eMMC 存储的版本）
* 电源选项：
	* 通过 eth1 端口的 PoE，
	* 通过 USB-C 接口的 5V 输入。
* 裸板尺寸：85x56x17mm
* 裸板重量：36g

## 入门指南 ##
### 硬件 ###
要开始使用硬件，您需要以下物品：
* 1 个 ODYSSEY STM32MP135D，
* 1 根 USB-C 到 USB-A 数据线或 USB-C 到 USB-C 数据线，
* 1 根以太网线，
* 1 根 USB 到 UART 数据线，例如 [这个](https://ftdichip.com/products/ttl-232r-rpi/)。

首先，仔细连接 USB 到 UART 数据线，以便访问串行控制台。请参考以下图片以正确连接引脚。
![STM32MP135D ODYSSEY 板的俯视图，调试引脚位于启动跳线旁边并被圈出。引脚按靠近启动跳线的顺序列出：WAKE、GND、TX、RX](https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_558688_ff47Pijnl_CdTY5i_1689582643?w=1201&h=801&type=image/png "突出显示的 uart0 引脚")

在本指南中，我们将使用 USB-C 供电。将 USB-C 数据线的一端连接到开发板，另一端连接到您的计算机。将以太网线插入 ODYSSEY 的 eth1 端口，另一端插入您的路由器或网络交换机。

>### 注意：如果您想使用预编译包，请点击此 [链接](http://files.seeedstudio.com/wiki/102110859_ODYSSEY_MP135D_img.zip)。

### 软件 ###
本指南将使用以下软件组件：
* [Buildroot 版本 2023.02 或更高版本](https://buildroot.org/download.html)。
* 用于与上游 Buildroot 配合使用的 [Buildroot 外部树](https://github.com/xogium/buildroot-stm32mp135d-odyssey)。
* [Snagboot](https://github.com/bootlin/snagboot)，一组用于简化 DFU 和 USB 大容量存储操作的工具。它包括 Snagrecover，用于将 FSBL 和 SSBL 上传到开发板的 DRAM，以及 Snagflash，用于将数据实际写入持久存储。

注意：请按照 Snagboot 仓库中的说明正确设置，这超出了本指南的范围。

#### 功能 ####
外部树提供以下功能：
* 一个单一的 stm32mp135d_odyssey_defconfig，用于构建一个包含 TF-A、OP-TEE、U-Boot 和 Linux 内核的最小通用系统，用于启动链。用户空间是最小的，仅包含一个简单的 BusyBox 初始化系统和 Shell。
	* 此系统可以通过以下方式使用：
		* 从 eMMC 写入并启动（如果您的硬件支持 eMMC）
		* 从 Micro SD 卡写入并启动。
		* 通过 NFS 启动。
* 使用后构建脚本提供一个易于写入的 eMMC 引导加载程序镜像。它将 TF-A 和 FIP 镜像组合成一个单一文件，旨在通过 DFU 写入到 eMMC 的引导区域。
* Genimage 配置生成两个磁盘镜像：
	* emmc.img 包含一个 U-Boot 环境分区，用于轻松存储 U-Boot 环境，以及根文件系统。预计引导加载程序通过 DFU 存储到 eMMC 引导区域。
	* sdcard.img 包括两个 TF-A 副本，分别位于 FSBL1 和 FSBL2 分区，以及一个包含 FIP 镜像的单一 FIP 分区。还有一个与 emmc.img 中相同的 U-Boot 环境分区，以及一个根文件系统。
* 外部树提供一个空的 external.mk、Config.in 和 packages 目录，以供您添加额外选项和内容。请参考 Buildroot 手册中的相应部分以了解更多信息。

#### 获取软件 ####
以下示例演示如何获取 Buildroot 和所需的外部树，然后设置它们以供使用：

首先安装 Buildroot 所需的依赖项。请参阅：
[Buildroot 用户手册，第 2 章：系统要求](https://buildroot.org/downloads/manual/manual.html#requirement)。然后，设置源代码：
```
wget https://buildroot.org/downloads/buildroot-2023.02.5.tar.gz
tar -xf buildroot-2023.02.5.tar.gz
mv buildroot-2023.02.5 buildroot
git clone https://github.com/xogium/buildroot-stm32mp135d-odyssey
```

#### 构建 ####
一旦正确设置了源代码，您可以继续构建：
```
cd buildroot
make BR2_EXTERNAL=/absolute/path/to/buildroot-stm32mp135d-odyssey stm32mp135d_odyssey_defconfig
make
```

如果一切顺利，您现在应该在 Buildroot 树的 output/images 目录中拥有一个成功构建的系统。
```
ls -1 output/images
combined-tf-a-and-fip.img
emmc.img
fip.bin
rootfs.ext2
rootfs.ext4
rootfs.tar
sdcard.img
stm32mp135d-odyssey.dtb
tee.bin
tee-header_v2.bin
tee-pageable_v2.bin
tee-pager_v2.bin
tf-a-stm32mp135d-odyssey.stm32
u-boot.dtb
u-boot-nodtb.bin
zImage
```

#### 如何使用系统 ####
##### eMMC 启动 #####
移除板上的中间启动跳线以确保 DFU 模式处于激活状态。请确保使用 minicom 或其他类似程序打开串口控制台，因为您将需要它。

以下是使用 gnu screen 访问名为 ttyUSB0 的串口控制台的示例。波特率应设置为 115200n8。
```
sudo screen /dev/ttyUSB0 115200n8
```

然后，从 snagboot 包中执行以下命令，并在进入 u-boot 时准备通过在串口控制台窗口中按任意键来中断启动序列：
```
cd output/images
snagrecover -s stm32mp13 -f ../../board/stm32mp135d-odyssey/utilities/stm32mp1-stm32mp135d-odyssey.yaml
```

在 u-boot 提示符下，输入以下命令以启用 eMMC 启动分区：```mmc partconf 1 1 1 1```。这将启用第一个 eMMC 启动分区，并通过修改 ext csd 寄存器 179 确保可以从中启动。然后，输入 ```dfu 0``` 将所有 DFU alt 设置暴露给主机，包括 eMMC 启动区域。可以使用 dfu-util 命令列出它们：
```
dfu-util -l
Found DFU: [0483:df11] ver=0200, devnum=7, cfg=1, intf=0, path="3-3", alt=4, name="mmc1_boot2", serial="0021001A3232510937393835"
Found DFU: [0483:df11] ver=0200, devnum=7, cfg=1, intf=0, path="3-3", alt=3, name="mmc1_boot1", serial="0021001A3232510937393835"
...
```

然后，使用 snagflash 工具将组合的引导加载程序镜像写入两个启动区域：
```
snagflash -P dfu -p 0483:df11 --dfu-keep -D 3:combined-tf-a-and-fip.img
snagflash -P dfu -p 0483:df11 -D 4:combined-tf-a-and-fip.img
```

完成后，重置板子并通过将中间启动跳线重新放回板上确认 eMMC 启动是否正常工作。由于用户区域为空，它将在从 mmc1 分区 0 启动时出错，但这是正常的。

当您再次回到 u-boot 提示符时，输入 ```ums 0 1``` 将 eMMC 的用户区域作为 USB 大容量存储设备暴露给主机。使用 lsblk 确定分配的设备节点，并在以下命令中用适当的设备节点替换 sdX。请仔细检查以确保您将写入正确的设备，因为它将被完全擦除！
```
snagflash -P ums -s emmc.img -b /dev/sdX
```

写入完成后，在 u-boot 提示符下按 ctrl+c 终止 USB 大容量存储模式。然后，再次重置板子，并确认它现在正在启动 Linux，并且您获得了登录提示。使用 root 用户登录，无需密码。

##### Micro SD 卡启动 #####
如果您希望将系统烧录到 Micro SD 卡，请按以下步骤操作，并用适当的设备节点替换 sdX：
```
sudo dd if=output/images/sdcard.img of=/dev/sdX bs=4M conv=fsync
```
其中 sdX 对应于 Micro SD 卡的设备节点。请参考 lsblk 命令的输出以确保您获得正确的设备节点！否则会导致数据丢失，因为这会擦除目标设备的全部内容。

请使用 minicom 或类似程序连接到板子的串口控制台。以下是使用 gnu screen 访问名为 ttyUSB0 的串口控制台的示例。波特率应设置为 115200n8。
```
sudo screen /dev/ttyUSB0 115200n8
```

当 Micro SD 卡成功写入后，将其插入 STM32MP135D ODYSSEY 板的 Micro SD 插槽，并调整启动跳线以从 Micro SD 启动（移除所有跳线）。如果需要，请重置板子。一旦您获得 buildroot 登录提示，请使用 root 用户登录，无需密码。

##### NFS 启动 #####
要通过 NFS 启动系统，请确保按照以下示例设置您的 /etc/exports，必要时替换子网/允许的 IP 地址，并对导出的路径执行相同操作：
```
/srv/nfs 192.168.1.0/24(rw,sync,crossmnt,fsid=0)
/srv/nfs/stm32mp135d 192.168.1.0/24(rw,nohide,insecure,no_subtree_check,async,no_root_squash)
```

还要确保您的 NFS 服务器配置启用了 UDP 模式，如下所示：
```
/etc/nfs.conf
[nfsd]
...
udp=y
```

将生成的 rootfs tarball 解压到适当的目录中，在本例中为 /srv/nfs/stm32mp135d：
```
cd output/images
sudo mkdir srv/nfs/stm32mp135d
sudo bsdtar -xpf rootfs.tar -C /srv/nfs/stm32mp135d
```

移除中间启动跳线以确保 DFU 模式处于激活状态。请确保使用 minicom 或其他类似程序打开串口控制台，因为您将需要它。以下是使用 gnu screen 访问名为 ttyUSB0 的串口控制台的示例。波特率应设置为 115200n8。
```
sudo screen /dev/ttyUSB0 115200n8
```

然后，从 snagboot 包中执行以下命令，并在进入 u-boot 时准备通过在串口控制台窗口中按任意键来中断启动序列：
```
cd output/images
snagrecover -s stm32mp13 -f ../../board/stm32mp135d-odyssey/utilities/stm32mp1-stm32mp135d-odyssey.yaml
```

一旦进入 u-boot 提示符，您可以通过以下操作通过 NFS 启动：
```
setenv eth1addr 2c:f7:f1:30:2b:62
setenv ethaddr 2c:f7:f1:30:2b:62
dhcp
nfs ${kernel_addr_r} 192.168.1.92:/srv/nfs/stm32mp135d/boot/zImage
nfs ${fdt_addr_r} 192.168.1.92:/srv/nfs/stm32mp135d/boot/stm32mp135d-odyssey.dtb
setenv bootargs root=/dev/nfs rootfstype=nfs ip=dhcp nfsroot=192.168.1.92:/srv/nfs/stm32mp135d,tcp,v3 rw quiet console=ttySTM0,115200n8 earlycon
bootz ${kernel_addr_r} - ${fdt_addr_r}
```
其中，192.168.1.92 是托管 NFS 服务器的机器。在此示例中设置的 MAC 地址也是示例，不应在实际环境中使用。由于板子的 OTP 中未定义 MAC 地址，因此需要设置，但可以半永久性地存储在 EEPROM 中（见下文）。使用 root 用户登录，无需密码。

## EEPROM ##
### 布局 ###
当前从 EEPROM 读取 MAC 地址的实现要求第一个地址从偏移量 0 开始，长度为 6 字节。第二个 MAC 地址必须存储在偏移量 0x10 处，长度同样为 6 字节。

* 提示：要生成随机 MAC 地址，可以使用类似 [这个](https://www.hellion.org.uk/cgi-bin/randmac.pl) 的生成器。

如果您希望将 u-boot 环境存储到 EEPROM 中，请确保环境从新的页面边界开始。页面大小为 64 字节。例如，您可以将环境偏移量设置为 0x40，大小保持为 0x2000，冗余偏移量设置为 0x2080。以下是一个 u-boot 配置片段示例：
```
CONFIG_ENV_IS_IN_EEPROM=y
CONFIG_ENV_OFFSET=0x40
CONFIG_ENV_OFFSET_REDUND=0x2080
CONFIG_I2C_EEPROM=y
CONFIG_SYS_I2C_EEPROM_ADDR=0x50
CONFIG_NVMEM=y
```

要应用此配置，请在顶层 buildroot 目录中运行 ```make menuconfig```。进入 bootloaders 菜单，向下滚动到 u-boot 并修改附加配置片段路径，例如输入：
```$(BR2_EXTERNAL_STM32MP135D_ODYSSEY_PATH)/board/stm32mp135d-odyssey/configs/uboot.config```。

然后，请通过运行 ```make clean && make``` 进行重新构建。

最终，布局是自由的，您可以根据需要使用，除了 MAC 地址的位置和长度。

### 如何使用 EEPROM ###
要在您的板子上使用 EEPROM，可以在 u-boot 和 Linux 中将其作为 nvmem 设备访问。例如，写入一个 MAC 地址：
```
printf '\x2c\xf7\xf1\30\x2b\x62'|dd of=/sys/bus/nvmem/devices/0-00501/nvmem bs=1
```

要存储第二个 MAC 地址，可以这样操作：
```
printf '\x2c\xf7\xf1\30\x2b\x63'|dd of=/sys/bus/nvmem/devices/0-00501/nvmem bs=1 seek=16
```

## 如何连接和使用 Grove 传感器 ##
待办

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 感谢 [Casey 的努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=34112514)，您的工作将被 [展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

## 资源 ##
* [外部 buildroot 树中使用的 ARM Trusted Firmware 分支](https://git.xogium.me/xogium/st-arm-trusted-firmware/tree/v2.8-stm32mp-odyssey-r2)
* [OP-TEE 分支](https://git.xogium.me/xogium/st-optee_os/tree/3.19.0-stm32mp-odyssey-r2)
* [U-Boot 分支](https://git.xogium.me/xogium/st-u-boot/tree/v2022.10-stm32mp-odyssey-r2)
* [Linux 内核分支](https://github.com/xogium/st-linux/releases/tag/v6.1-stm32mp-odyssey-r3)