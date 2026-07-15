---
description: 本文档说明如何为运行 JetPack 6.2.1 的 Seeed reComputer Jetson 设备构建并烧录 PREEMPT_RT Linux 实时内核。
title: 在搭载 JetPack 6.2.1 的 Seeed reComputer Jetson 上烧录 PREEMPT_RT Linux 实时内核
keywords:
  - Jetson
  - reComputer
  - JetPack 6.2.1
  - PREEMPT_RT
  - Real-Time Kernel
  - Linux
image: https://files.seeedstudio.com/wiki/RT_for_jetson/5.png
slug: /flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1
sku: E2025032601,100088050,114993489,114993488,100026552,102111001,100020039,100094378
last_update:
  date: 07/02/2026
  author: Dongxu Jin
createdAt: '2026-07-02'
updatedAt: '2026-07-02'
url: https://wiki.seeedstudio.com/cn/flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1/
---

# 在搭载 JetPack 6.2.1 的 Seeed reComputer Jetson 上烧录 PREEMPT_RT Linux 实时内核

实时内核（也称为 PREEMPT_RT 内核）是一种具有增强实时调度能力的 Linux 内核变体。它的主要目的在于降低调度延迟、提高任务执行的确定性，而不是提升原始计算性能。

与标准 Linux 内核相比，实时内核允许高优先级任务更快地抢占 CPU 资源，并减少由中断和线程调度引起的时间抖动，从而帮助控制任务以固定周期稳定运行。在机器人、工业自动化、运动控制、自动驾驶和边缘计算等场景中，实时内核可以显著提升电机控制、传感器数据采集以及包括 CAN 和 EtherCAT 在内的工业总线通信等实时负载的稳定性和可靠性。

本指南基于官方 NVIDIA Jetson Linux R36.4.4 BSP，合并 Seeed R36.4.4 BSP，交叉编译 PREEMPT_RT 内核，并将系统烧录到 Seeed Jetson 设备的 NVMe SSD 上。

## 参考资料

- [NVIDIA Jetson Linux R36.4.4 快速入门](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/IN/QuickStart.html#to-determine-whether-the-developer-kit-is-in-force-recovery-mode)
- [NVIDIA Jetson Linux R36.4.4 内核定制](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/SD/Kernel/KernelCustomization.html)
- [CSDN 参考文章](https://blog.csdn.net/Cruelbuildingdog/article/details/145872768)

## 硬件需求

- 一台 x86 Ubuntu 主机电脑
- 一台待烧录的 Seeed reComputer 或 reServer 设备

## 创建工作空间并下载系统文件

在主机电脑上创建一个工作空间：

```bash
mkdir ~/RT_ws
cd ~/RT_ws
```

前往 [NVIDIA Jetson Linux R36.4.4](https://developer.nvidia.com/embedded/jetson-linux-r3644)，下载下图中高亮的四个文件，并将它们放到 `~/RT_ws` 工作空间中。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/1.png"/></div>

从 [Seeed-Studio/Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) 下载源码 ZIP 包，或克隆该仓库：

```bash
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git
```

由于该目录名可能与 NVIDIA 官方目录名冲突，建议按照本指南的步骤下载 ZIP 包并解压。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/2.png"/></div>

检查 `~/RT_ws` 下是否存在以下文件：

```bash
ls -lh \
  Jetson_Linux_R36.4.4_aarch64.tbz2 \
  Tegra_Linux_Sample-Root-Filesystem_R36.4.4_aarch64.tbz2 \
  public_sources.tbz2 \
  aarch64--glibc--stable-2022.08-1.tar.bz2 \
  Linux_for_Tegra-r36.4.4.zip
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/3.png"/></div>

## 安装主机依赖

```bash
cd ~/RT_ws

sudo apt-get update

sudo apt-get install -y \
  qemu-user-static \
  python3-pip \
  device-tree-compiler \
  flex \
  bison \
  libncurses-dev \
  libssl-dev \
  build-essential \
  sshpass \
  abootimg \
  nfs-kernel-server \
  libxml2-utils
```

## 解压官方 BSP、Rootfs、源码、工具链和 Seeed Overlay

```bash
cd ~/RT_ws

mkdir -p l4t-gcc

tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C l4t-gcc

tar xf Jetson_Linux_R36.4.4_aarch64.tbz2

tar xf public_sources.tbz2 -C .

unzip -q Linux_for_Tegra-r36.4.4.zip -d seeed_overlay

sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.4_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

rootfs 必须使用 `sudo tar xpf` 解压。不要使用普通的 `tar`，否则文件的所有者和权限会不正确。如果你已经解压过，可以继续使用现有目录。只有在希望完全重新开始时才清理旧目录。

## 解压 NVIDIA 源码

```bash
cd ~/RT_ws/Linux_for_Tegra/source

tar xf kernel_src.tbz2

tar xf kernel_oot_modules_src.tbz2

tar xf nvidia_kernel_display_driver_source.tbz2
```

## 合并 Seeed BSP Overlay

```bash
cd ~/RT_ws

cp -a seeed_overlay/Linux_for_Tegra-r36.4.4/. Linux_for_Tegra/
```

此步骤必须在构建前完成。Seeed overlay 会修改内核、OOT 模块、`hardware/nvidia/t23x/nv-public` 中的 DTS 和 Makefile 文件，以及 `bootloader/generic/BCT`。如果跳过此步骤，在烧录时将只能使用 NVIDIA 官方开发套件配置，而不会包含 Seeed 载板信息。

## 将 NVIDIA 二进制文件应用到 Rootfs 并安装烧录前置条件

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo ./apply_binaries.sh

sudo ./tools/l4t_flash_prerequisites.sh
```

## 构建 PREEMPT_RT 内核、OOT 模块和 DTB

```bash
cd ~/RT_ws/Linux_for_Tegra/source

export ARCH=arm64

export CROSS_COMPILE=~/RT_ws/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-

./nvbuild.sh -r
```

`-r` 选项会启用 NVIDIA 官方的 PREEMPT_RT 配置。构建输出目录为 `~/RT_ws/Linux_for_Tegra/source/kernel_out`。构建成功后，内核版本后缀中应包含 `-rt-tegra`。

## 使用 Seeed `do_copy.sh` 部署 Image、DTB 和 DTBO

```bash
cd ~/RT_ws/Linux_for_Tegra/source

./do_copy.sh

# Additional checks:
ls -lh ../kernel/Image

ls ../kernel/dtb/tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb

ls ../kernel/dtb/tegra234-j201-p3768-0000+p3767-0000-recomputer-indu.dtb
```

`do_copy.sh` 是 Seeed BSP 中的部署入口脚本。它会复制已构建的 reComputer 和 reServer DTB、相机和 GMSL DTBO，以及新的 `kernel/Image`。

如果 `do_copy.sh` 报告找不到某个 Seeed DTB，通常意味着 Seeed overlay 没有完全合并，或者构建时没有使用带 Seeed overlay 的 `source/Makefile`。

## 将内核模块安装到 Rootfs

```bash
cd ~/RT_ws/Linux_for_Tegra/source

export ARCH=arm64

export CROSS_COMPILE=~/RT_ws/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-

export INSTALL_MOD_PATH=~/RT_ws/Linux_for_Tegra/rootfs/

sudo -E ./nvbuild.sh -i
```

## 将通用 Seeed DTBO 复制到 `rootfs/boot` 并更新 Initrd

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx477-dual-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-imx477-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx477-imx219-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-seeed-gmsl*.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-seeed-orbbec-335lg-overlay.dtbo rootfs/boot/ 2>/dev/null || true

sudo ./tools/l4t_update_initrd.sh
```

将 DTBO 文件复制到 `rootfs/boot` 可以让系统在启动后继续使用 Seeed 相机和 GMSL overlay。`l4t_update_initrd.sh` 会将新的模块依赖写入 initrd。对于 NVMe 启动，请不要跳过此步骤。

## 检查构建输出

```bash
cd ~/RT_ws/Linux_for_Tegra

ls -lh kernel/Image

ls kernel/dtb/tegra234-j*.dtb

find rootfs/lib/modules -maxdepth 1 -type d -name '*-rt-tegra' -print
```

如果你要为 reComputer J401 烧录，至少应存在以下文件：

```text
kernel/dtb/tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0001-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0003-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0004-recomputer.dtb
```

## 进入强制恢复模式并检查 USB 连接

将设备上的 `REC` 拨码开关拨到 `ON`，并使用 USB 线将 x86 主机电脑连接到旁边的 `Debug/Device` 接口。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/4.jpg"/></div>

在主机电脑上运行：

```bash
cd ~/RT_ws/Linux_for_Tegra

lsusb
```

你应当看到类似如下的输出：

```text
Bus <bbb> Device <ddd>: ID 0955:<nnnn> NVIDIA Corp.
```

如果没有看到 `0955`，请检查 REC/GND 跳线或恢复模式按键流程，确认 Type-C 线缆支持数据传输；如果你使用的是虚拟机，请确保已将 NVIDIA USB 设备透传给 Ubuntu。

## 选择 Seeed 板卡配置名

```bash
cd ~/RT_ws/Linux_for_Tegra

export SEEED_BOARD_CONF=recomputer-orin-j401

test -f "${SEEED_BOARD_CONF}.conf"
```

可用的配置名称：

```text
recomputer-orin-j401
recomputer-industrial-orin-j201
reserver-industrial-orin-j401
recomputer-orin-j40mini
recomputer-orin-super-j401
recomputer-orin-robotics-j401
recomputer-orin-robotics-j401-gmsl
reserver-agx-orin-j501x
reserver-agx-orin-j501x-gmsl
```

下表给出了产品型号与配置名称的对应关系：

| 产品型号 | 配置名称 |
| --- | --- |
| reComputer classic J3010/J3011/J4011/J4012 | `recomputer-orin-j401` |
| reComputer Industrial J3010/J3011/J4011/J4012 | `recomputer-industrial-orin-j201` |
| reServer Industrial J3010/J3011/J4011/J4012 | `reserver-industrial-orin-j401` |
| reComputer Mini J40 系列 | `recomputer-orin-j40mini` |
| reComputer Super J401 系列 | `recomputer-orin-super-j401` |
| reComputer Robotics J401 系列 | `recomputer-orin-robotics-j401` 或 `recomputer-orin-robotics-j401-gmsl` |
| reServer AGX Orin J501x | `reserver-agx-orin-j501x` 或 `reserver-agx-orin-j501x-gmsl` |

## 填写模组 EEPROM 和板卡信息变量

当直接在线烧录且 USB EEPROM 读取正常时，NVIDIA 工具通常可以自动读取这些信息。

如果遇到缺少模组或板卡信息的错误，请在烧录前根据实际模组型号填写下面的变量。

Orin NX / Orin Nano 通用数值：

| 模块 | BOARDID | BOARDSKU | FAB | BOARDREV | CHIP_SKU |
| --- | --- | --- | --- | --- | --- |
| Orin Nano 4GB | 3767 | 0004 | 300 | N.2 | 00:00:00:D6 |
| Orin Nano 8GB | 3767 | 0003 | 300 | N.2 | 00:00:00:D6 |
| Orin NX 16GB | 3767 | 0000 | 300 | G.3 | 00:00:00:D3 |
| Orin NX 8GB | 3767 | 0001 | 300 | M.3 | 00:00:00:D4 |

AGX Orin J501x 通用数值：

| 模块 | BOARDID | BOARDSKU | FAB | BOARDREV | CHIP_SKU |
| --- | --- | --- | --- | --- | --- |
| AGX Orin 32GB | 3701 | 0004 | 500 | J.0 | 00:00:00:D2 |
| AGX Orin 64GB | 3701 | 0005 | 500 | M.0 | 00:00:00:D0 |

`reComputer J4012 / Orin NX 16GB` 示例：

```bash
export BOARDID=3767
export BOARDSKU=0000
export FAB=300
export BOARDREV=G.3
export CHIP_SKU=00:00:00:D3
```

`reComputer J3011 / Orin Nano 8GB` 示例：

```bash
export BOARDID=3767
export BOARDSKU=0003
export FAB=300
export BOARDREV=N.2
export CHIP_SKU=00:00:00:D6
```

检查这些变量：

```bash
echo "CONF=${SEEED_BOARD_CONF} BOARDID=${BOARDID} BOARDSKU=${BOARDSKU} FAB=${FAB} BOARDREV=${BOARDREV} CHIP_SKU=${CHIP_SKU}"
```

Seeed 配置文件会根据映射到 `BOARDSKU` 的 `board_sku` 来选择 `DTB_FILE`。如果 `BOARDSKU` 不正确，烧录可能会成功，但设备可能会使用错误的 DTB 启动。在这种情况下，外设、以太网、M.2、摄像头或 GPIO 可能无法正常工作。

## 烧录到 NVMe

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo -E BOARDID="${BOARDID}" BOARDSKU="${BOARDSKU}" FAB="${FAB}" BOARDREV="${BOARDREV}" CHIP_SKU="${CHIP_SKU}" \
  ./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" \
  --showlogs \
  --network usb0 \
  "${SEEED_BOARD_CONF}" \
  external
```

该命令会为 Orin NX 和 Orin Nano 烧录 NVMe SSD，并处理 QSPI 启动配置。最后的 `external` 参数表示系统 rootfs 将从外部 NVMe 启动。如果设备有两个 NVMe SSD，仍然建议使用 `external`，这样 rootfs 会使用 `PARTUUID`。

## 烧录完成后

烧录成功后，关闭设备电源，移除 REC/GND 跳线或松开恢复模式按钮，然后重新给 Jetson 设备上电。

## 验证实时内核和 DTB

检查内核版本：

```bash
uname -a
```

输出中应包含 `-rt` 后缀。

检查内核配置：

```bash
zcat /proc/config.gz | grep PREEMPT
```

输出中应包含：

```text
CONFIG_PREEMPT_RT=y
```

使用 `cyclictest` 测试调度抖动：

```bash
sudo apt install -y rt-tests
sudo cyclictest -Sp90-i1000-l100000
```

等待一段时间后，检查 `Avg` 值是否低于 20 微秒。示例输出：

```text
T: 0 (  1290) P:99 I:1000 C:100000 Min: 5  Act:10 Avg: 7  Max: 18
T: 1 (  1291) P:99 I:1000 C:100000 Min: 4  Act: 9 Avg: 7  Max: 20
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/5.png"/></div>

如果上述检查均通过，则说明 PREEMPT_RT 实时内核已成功安装。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
