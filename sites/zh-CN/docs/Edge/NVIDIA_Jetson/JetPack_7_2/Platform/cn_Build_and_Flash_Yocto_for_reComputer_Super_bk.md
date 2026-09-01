---
description: 从 Seeed 仓库构建完整的 CUDA 开发 Yocto 镜像，并将其烧录到 reComputer Super 上。
title: 为 reComputer Super 构建并烧录 Yocto 镜像
keywords:
  - Yocto
  - OpenEmbedded
  - reComputer Super
  - Jetson Orin NX
  - CUDA
  - Jetson Linux
image: https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg
slug: /build_and_flash_yocto_for_seeed_jetson_carrier_boards
aliases:
  - /build_and_flash_yocto_for_recomputer_super_bk
last_update:
  date: 2026-07-24
  author: Dayu
createdAt: '2026-07-24'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/build_and_flash_yocto_for_seeed_jetson_carrier_boards/
---

# 为 reComputer Super 构建并烧录 Yocto 镜像

:::note JetPack 7.2 collection copy
包含此副本是因为官方 OpenEmbedded/Yocto 支持是 JetPack 7.2 生产级 Linux 的一项重要能力。在将其作为 JetPack 7.2 镜像使用之前，请确认所选的 Seeed Yocto 分支、NVIDIA BSP 层以及生成的烧录包与目标 Jetson Linux 39.2 相匹配。
:::

本指南为 **搭载 Jetson Orin NX 16GB 模块的 reComputer Super J401** 构建 Seeed Yocto 镜像，并将其烧录到 Jetson 的 NVMe 硬盘上。

示例使用 `seeed-image-jetson-development`。该镜像在目标端提供一个开发环境，包含 CUDA Toolkit 和 `nvcc`、CUDA/cuDNN/TensorRT/VPI/OpenCV 开发文件、构建和调试工具、NVIDIA 示例以及测试包。

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

:::note
这是一个 OpenEmbedded/Yocto 系统，而不是由 NVIDIA SDK Manager 安装的 Ubuntu 根文件系统。软件包管理、文件系统内容以及桌面环境都与 JetPack Ubuntu 不同。
:::

## 前置条件

准备以下内容：

- 一台 x86_64 Linux 主机 PC，最好是物理机上的 Ubuntu 或 Debian
- 至少 16 GB 内存；推荐 32 GB 或更多
- 一块快速的本地 SSD 和稳定的互联网连接
- 一台搭载受支持 Jetson Orin NX 或 Orin Nano 模块的 reComputer Super
- 一根直接连接到主机 PC 的 USB Type-C 数据线
- 拥有用于安装主机软件包和烧录的 `sudo` 权限

:::warning
在主机 PC 上预留**至少 400 GB 的可用磁盘空间**。Yocto 的下载内容、共享状态缓存、临时构建文件、根文件系统以及解压后的烧录包可能会占用数百 GB。强烈建议使用主机本地 SSD。
:::

安装常用的主机软件包：

```bash
sudo apt update
sudo apt install -y \
  gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio \
  python3 python3-pip python3-pexpect python3-git python3-jinja2 \
  xz-utils debianutils iputils-ping libegl1-mesa libsdl1.2-dev \
  pylint xterm zstd liblz4-tool file locales \
  gdisk parted udev udisks2
```

如果 BitBake 报告主机发行版不受支持，请使用 Yocto 支持的 Linux 主机，而不是忽略主机验证警告。

## 本指南使用的模块 SKU

reComputer Super J401 支持以下 P3767 模块 SKU：

| `--module-sku` | 完整模块编号 | Jetson 模块 |
| --- | --- | --- |
| `0000` | `P3767-0000` | Jetson Orin NX 16GB |
| `0001` | `P3767-0001` | Jetson Orin NX 8GB |
| `0003` | `P3767-0003` | Jetson Orin Nano 8GB |
| `0004` | `P3767-0004` | Jetson Orin Nano 4GB |

本指南使用 `0000`。对于每一种载板与模块 SKU 组合，请始终使用单独的构建目录。

## 克隆 Seeed Yocto 仓库

创建一个干净的工作区并克隆 `master` 分支：

```bash
mkdir -p ~/work/jetson-yocto
cd ~/work/jetson-yocto

git clone \
  --branch master \
  --single-branch \
  https://github.com/jjjadand/seeed-tegra-demo-distro.git \
  tegra-demo-distro

cd tegra-demo-distro
```

主仓库包含 Seeed 元数据和辅助脚本。`prepare-workspace.sh` 会将固定版本的 OpenEmbedded 和 OE4T 层初始化为 Git 子模块。

## 使用 `all` 构建完整开发镜像

推荐的首次构建使用 `build.sh all`。它会依次验证元数据、构建设备树、检查启动文件，并构建完整镜像和 tegraflash 压缩包。

### 准备构建目录

```bash
./scripts/seeed/prepare-workspace.sh \
  --machine recomputer-orin-super-j401 \
  --module-sku 0000 \
  --build-dir build-seeed-super-j401-sku0000 \
  --cache-dir "$HOME/.cache/yocto-seeed"
```

共享缓存会将下载内容和 sstate 保存在构建目录之外，以便后续构建复用。

确认当前的构建目录、载板和模块 SKU：

```bash
./scripts/seeed/build.sh current \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401
```

输出必须显示：

```text
Machine:   recomputer-orin-super-j401
Module SKU: 0000
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/current.png" />
</div>

:::warning
如果显示的 `MACHINE` 或模块 SKU 与硬件不匹配，请不要继续。不要将此构建目录复用于其他载板或模块 SKU。
:::

### 运行完整构建

构建目标端开发镜像：

```bash
./scripts/seeed/build.sh all \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

首次构建会下载并编译大量组件，可能需要数小时。如果元数据验证、设备树编译、启动文件检查或镜像构建失败，命令会立即停止。

当四个阶段全部成功完成后，终端输出类似如下：

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/build-full-complete.png" />
</div>

成功构建后，部署目录为：

```text
build-seeed-super-j401-sku0000/tmp/deploy/images/recomputer-orin-super-j401/
```

重要的生成文件包括：

```text
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.ext4
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.manifest
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.spdx.json
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.testdata.json
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.tegraflash-tar.zst
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/filename.png" />
</div>

`.tegraflash-tar.zst` 文件是用于烧录的自包含压缩包。

## 准备烧录目录

解压并验证开发镜像烧录压缩包：

```bash
./scripts/seeed/prepare-flash.sh \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development \
  --output-dir "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
```

辅助脚本会验证模块 SKU，并检查根文件系统镜像、DTB、BPMP DTB、引脚复用、引脚电压配置以及烧录脚本是否存在。然后会打印准备好的目录以及下一步要执行的精确命令。

:::tip
在主机本地 SSD 上使用一个新的或空的输出目录。不要将烧录包解压到 Jetson 目标硬盘上。
:::

## 将 reComputer Super 置于强制恢复模式

1. 关闭 reComputer Super 电源。
2. 将 reComputer Super 的恢复开关拨到 **RESET** 位置。
3. 接通电源适配器。
4. 使用支持数据传输的线缆，将 USB Type-C 设备/调试端口连接到 Linux 主机。
5. 在主机 PC 上验证恢复模式：

```bash
lsusb -d 0955:
```

对于本指南使用的 Orin NX 16GB 模块，输出中应包含类似如下的设备：

```text
0955:7323 NVIDIA Corp. APX
```

其他受支持的 Super 模块使用不同的 USB 产品 ID：

| 模块 | 恢复模式 USB ID |
| --- | --- |
| Orin NX 16GB | `0955:7323` |
| Orin NX 8GB | `0955:7423` |
| Orin Nano 8GB | `0955:7523` |
| Orin Nano 4GB | `0955:7623` |

在看到 NVIDIA APX 设备之前，不要开始烧录。

## 烧录 Yocto 镜像

在准备好的目录中运行生成的烧录脚本：

```bash
cd "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
sudo ./initrd-flash
```

该脚本通过 USB 启动一个临时 initrd 烧录器，将目标 NVMe 硬盘暴露给主机，写入分区，并获取最终设备状态。运行过程中不要断开 USB 或电源。

成功烧录结束时，输出类似如下：

```text
[OK: /dev/sdX]
Final status: SUCCESS
Successfully finished
```

临时主机块设备名称是动态分配的。不要假设它总是 `/dev/sdb` 或 `/dev/sdc`。

## 首次启动

在烧录命令成功完成后：

1. 断开 USB 数据线。
2. 将恢复开关从 **RESET** 拨回正常位置。
3. 将设备断电数秒。
4. 连接 HDMI 显示器并重新开启 reComputer Super 电源。

Yocto 桌面应从已烧录的 NVMe 硬盘启动：

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg" />
</div>

开发镜像允许以 `root` 用户在本地登录，初始密码为空。请立即设置密码：

```bash
passwd
```

验证目标端开发环境：

```bash
nvcc --version
gcc --version
cmake --version

test -f /usr/local/cuda-13.2/include/cuda.h
test -f /usr/include/cudnn.h
test -f /usr/include/NvInfer.h
test -f /opt/nvidia/vpi4/include/vpi/VPI.h
pkg-config --modversion opencv4
```

## 详细的参数化构建命令

前一节使用了 `all`，这是首次构建的推荐路径。若要调试或仅重建某个阶段，请显式运行相同的工作流：

```bash
# 1. Validate metadata and print the selected BSP variables
./scripts/seeed/build.sh metadata \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 2. Build the Seeed DTB and DTBO files
./scripts/seeed/build.sh dtb \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 3. Install and verify the custom BCT, pinmux, and boot files
./scripts/seeed/build.sh bootfiles \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 4. Build the complete root filesystem and tegraflash archive
./scripts/seeed/build.sh image \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

如果根文件系统已经构建完成，只需要重新生成 tegraflash 压缩包，请使用：

```bash
./scripts/seeed/build.sh flash-package \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

## 可选：构建 x86_64 交叉开发 SDK

已刷写的开发镜像已经支持在 Jetson 上直接编译。仅当需要在 x86_64 PC 上为目标设备进行交叉编译应用程序时，才需要构建主机 SDK：

```bash
./scripts/seeed/build.sh sdk \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

生成的 SDK 安装程序会放置在：

```text
build-seeed-super-j401-sku0000/tmp/deploy/sdk/
```

此可选安装程序并不是构建 Jetson 镜像或刷写设备所必需的。

## 故障排除

### 构建目录报告的机器或 SKU 不正确

使用 `prepare-workspace.sh` 创建一个新的构建目录。不要通过编辑现有构建目录来切换载板或模组 SKU。

### 找不到刷写压缩包

确保在构建和刷写准备时传入的是相同的镜像名称：

```text
seeed-image-jetson-development
```

`prepare-flash.sh` 默认使用 `demo-image-full`，因此如果省略 `--image seeed-image-jetson-development`，会导致它搜索错误的压缩包。

### 刷写停在 `Waiting for USB storage device flashpkg`

此时主机正在等待 Jetson 的 initrd 暴露一个临时 USB 大容量存储设备。请检查 USB 线缆，使用主板上的 USB 接口，移除不必要的 USB 存储设备，并确认通过 `lsusb` 仍然可以看到 Jetson。

## 参考资料

- [Seeed tegra-demo-distro 仓库](https://github.com/jjjadand/seeed-tegra-demo-distro)
- [Yocto Project 快速构建](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
- [OE4T meta-tegra 文档](https://oe4t.github.io/)

感谢您选择 Seeed Studio 的产品！如需技术支持和产品讨论，请通过以下渠道联系我们：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
