---
description: 为受支持的 Seeed Studio Jetson 载板选择、构建、打包并烧录 JetPack 7.2 Yocto 镜像。
title: 为 Seeed Jetson 载板构建和烧录 Yocto
keywords:
  - Yocto
  - OpenEmbedded
  - Seeed Jetson carrier board
  - Jetson Orin
  - Jetson Thor
  - meta-tegra
  - Jetson Linux 39.2
image: https://files.seeedstudio.com/wiki/jetpack-7.2/jetpack-7-2-yocto-workflow.png
slug: /build_and_flash_yocto_for_seeed_jetson_carrier_boards
aliases:
  - /build_and_flash_yocto_for_recomputer_super_bk
last_update:
  date: 2026-09-01
  author: Dayu
createdAt: '2026-07-24'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/cn/build_and_flash_yocto_for_seeed_jetson_carrier_boards/
---

# 为 Seeed Jetson 载板构建和烧录 Yocto

本指南提供了一个通用工作流，用于在 [`seeed-tegra-demo-distro`](https://github.com/jjjadand/seeed-tegra-demo-distro) 仓库定义的 Seeed Studio Jetson 载板上构建和烧录 OpenEmbedded/Yocto 镜像。

该仓库使用 OE4T 的 `wrynose` 分支和 `meta-tegra` BSP，适用于 **Jetson Linux R39.2.0 / JetPack 7.2**。Yocto 镜像使用 NVIDIA Jetson Linux BSP 组件，但它不是由 NVIDIA SDK Manager 安装的 Ubuntu 根文件系统。包管理、镜像组成、桌面环境和更新行为由 Yocto 元数据控制。

:::warning 仓库适用范围
本文中的命令和参数表基于在 **2026 年 8 月 31 日** 复核时的仓库状态。在构建之前，请再次检查仓库的 README 和支持矩阵，因为可用的机器、模组 SKU、分支以及硬件验证状态可能会发生变化。
:::

下图总结了完整工作流。首先选择载板和 Jetson 模组，然后在构建和烧录过程中保持相同的 machine、SKU、构建目录和镜像配方。

<div align="center">
  <img width={1200} src="https://files.seeedstudio.com/wiki/jetpack-7.2/jetpack-7-2-yocto-workflow.png" alt="JetPack 7.2 Yocto build and flash workflow for Seeed Jetson carrier boards" />
</div>

## 开始之前

请使用一台物理 x86_64 Linux 主机，配备快速本地 SSD、稳定的网络连接以及 `sudo` 权限。准备一根可传输数据的 USB 线缆，用于载板的恢复/设备端口。一次完整的 Yocto 开发构建可能会占用数百 GB 空间，因此在条件允许时预留大约 **400 GB** 的可用存储空间。内存至少 **16 GB**，**推荐 32 GB 或更多**。

在 Ubuntu 主机上安装常用的构建和烧录软件包：

```bash
sudo apt update
sudo apt install -y \
  gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio \
  python3 python3-pip python3-pexpect python3-git python3-jinja2 \
  xz-utils debianutils iputils-ping libegl1-mesa libsdl1.2-dev \
  pylint xterm zstd liblz4-tool file locales \
  gdisk parted udev udisks2
```

不同宿主发行版的软件包名称可能不同。请根据仓库所用分支，遵循 Yocto Project Quick Build 和 OE4T 烧录要求。如果 BitBake 报告宿主发行版不受支持，请改用受支持的宿主，而不是绕过该验证。

辅助脚本在整个工作流中使用以下参数：

| 参数 | 作用 | 重要规则 |
| --- | --- | --- |
| `--machine` | 选择载板的 Yocto `MACHINE` 配置。 | 必须与实际物理载板匹配。 |
| `--module-sku` | 为可配置 Orin 载板选择已安装的 Jetson 模组。它是 NVIDIA 模组编号的最后四位数字。 | 对可配置 Orin 机器必填；对于固定模组的 Thor 机器省略此参数。 |
| `--build-dir` | 存储所选配置、BitBake 工作文件和部署产物。 | 为每个载板与模组 SKU 组合使用单独的目录。 |
| `--cache-dir` | 存储共享下载和 sstate 缓存数据。 | 在构建之间复用同一台主机本地缓存。 |
| `--image` | 选择 BitBake 镜像配方。 | 构建和烧录准备时使用相同的镜像名称。 |
| `--output-dir` | 选择已验证 tegraflash 包的解压位置。 | 使用新的或为空的主机本地目录。 |

`MACHINE` 是 Yocto 的硬件目标名称，而不仅仅是产品标签。它会从 `layers/meta-seeed/conf/machine/` 中选择一个机器配置，该配置决定 SoC 家族、载板 DTB、模组配置、BPMP 数据、引脚复用和焊盘电压文件、叠加层，以及 BitBake 和 tegraflash 使用的烧录变量。

:::tip 为你的硬件选择 machine
本指南中的 `recomputer-orin-super-j401` 命令只是一个具体示例。在准备工作区之前，请从[载板表](https://wiki.seeedstudio.com/cn/build_and_flash_yocto_for_seeed_jetson_carrier_boards/#choose-the-carrier-board-and-jetson-module)中选择与你的载板和 Jetson 模组匹配的 `MACHINE` 和模组 SKU。
:::

根据目标用途选择镜像：

| 镜像配方 | 使用场景 |
| --- | --- |
| `demo-image-full` | 带图形界面、容器、OpenCV 和 NVIDIA 示例的 OE4T 参考/演示镜像。它是辅助脚本的默认值。 |
| `seeed-image-jetson-runtime` | 与 OE4T/NVIDIA 运行时栈对齐的 Seeed 运行时配置。 |
| `seeed-image-jetson-development` | 在运行时镜像基础上增加目标端 CUDA 开发包、头文件、构建/调试工具、示例和测试。 |

下面的示例使用 `seeed-image-jetson-development`。

## 选择载板和 Jetson 模组

为本指南复核的仓库定义了 16 个 Seeed 机器配置。你也可以通过运行 `./scripts/seeed/build.sh machines` 打印当前检出版本的机器列表。

| 产品或载板配置 | `MACHINE` | 支持的模组选择 |
| --- | --- | --- |
| reComputer Industrial J401 | `recomputer-industrial-orin-j401` | P3767 Orin NX/Nano：`0000`、`0001`、`0003`、`0004` |
| reComputer Mini AGX Orin J501X | `recomputer-mini-agx-orin-j501x` | P3701 AGX Orin：`0004`、`0005` |
| reComputer Orin J401 | `recomputer-orin-j401` | P3767 Orin NX/Nano：`0000`、`0001`、`0003`、`0004` |
| reComputer Orin J40mini | `recomputer-orin-j40mini` | P3767 Orin NX/Nano：`0000`、`0001`、`0003`、`0004` |
| reComputer Robotics J401 | `recomputer-orin-robotics-j401` | P3767 Orin NX/Nano：`0000`、`0001`、`0003`、`0004` |
| reComputer Robotics J401 GMSL | `recomputer-orin-robotics-j401-gmsl` | P3767 Orin NX/Nano：`0000`、`0001`、`0003`、`0004` |
| reComputer Super J401 | `recomputer-orin-super-j401` | P3767 Orin NX/Nano：`0000`、`0001`、`0003`、`0004` |
| reComputer Robo AGX Orin J501X | `recomputer-robo-agx-orin-j501x` | P3701 AGX Orin：`0004`、`0005` |
| reComputer Rugged Orin J401 | `recomputer-rugged-orin-j401` | P3767 Orin NX/Nano：`0000`、`0001`、`0003`、`0004` |
| reComputer Thor Carrier J601 | `recomputer-thor-carrier-j601` | 固定 P3834-0008 T5000；省略 `--module-sku` |
| reComputer Thor Carrier J6014 | `recomputer-thor-carrier-j6014` | 固定 P3834-0000 T4000；省略 `--module-sku` |
| reComputer Thor Carrier J6015 | `recomputer-thor-carrier-j6015` | 固定 P3834-0008 T5000；省略 `--module-sku` |
| reServer AGX Orin J501X | `reserver-agx-orin-j501x` | P3701 AGX Orin：`0000`、`0001`、`0002`、`0004`、`0005` |
| reServer AGX Orin J501X GMSL | `reserver-agx-orin-j501x-gmsl` | P3701 AGX Orin：`0000`、`0001`、`0002`、`0004`、`0005` |
| reServer Industrial Orin J401 | `reserver-industrial-orin-j401` | P3767 Orin NX/Nano：`0000`、`0001`、`0003`、`0004` |
| Seeed AGX Orin Kit | `seeed-agx-orin-kit` | P3701 AGX Orin：`0000`、`0001`、`0002`、`0004`、`0005` |

`--module-sku` 是印在 NVIDIA 模组部件号上的最后四位数字。请检查模组标签或 EEPROM，而不是凭记忆选择数值。

| 模组系列 | `--module-sku` | 完整模组编号 | 模组型号或仓库映射 |
| --- | --- | --- | --- |
| P3767 | `0000` | `P3767-0000` | Jetson Orin NX 16GB |
| P3767 | `0001` | `P3767-0001` | Jetson Orin NX 8GB |
| P3767 | `0003` | `P3767-0003` | Jetson Orin Nano 8GB |
| P3767 | `0004` | `P3767-0004` | Jetson Orin Nano 4GB |
| P3701 | `0000` | `P3701-0000` | Jetson AGX Orin 开发套件模组 |
| P3701 | `0001` | `P3701-0001` | 兼容 SKU，使用仓库中的 `0000` DTB/BPMP 映射 |
| P3701 | `0002` | `P3701-0002` | 兼容 SKU，使用仓库中的 `0000` DTB/BPMP 映射 |
| P3701 | `0004` | `P3701-0004` | Jetson AGX Orin 32GB |
| P3701 | `0005` | `P3701-0005` | Jetson AGX Orin 64GB |
| P3834 | not selectable | `P3834-0000` | Jetson T4000，由 Thor `MACHINE` 选择 |
| P3834 | not selectable | `P3834-0008` | Jetson T5000 / AGX Thor 开发套件模组，由 Thor `MACHINE` 选择 |

:::caution 构建支持与硬件验证的区别
该仓库为所有列出的配置提供了机器元数据和构建验证。这并不意味着每个载板、模组 SKU、相机选项和外设都已经完成了物理验证。在已复核的支持矩阵中，`recomputer-orin-super-j401` 已完成烧录、NVMe 启动、HDMI 和基础 USB 验证。SKU 为 `0004` 的 `reserver-agx-orin-j501x-gmsl` 已完成烧录和启动验证，而 GMSL 和更广泛外设的验证仍在等待中。在其硬件状态更新之前，请将其他机器视为仅完成构建验证。
:::

接下来各节中的命令序列以 **搭载 Orin NX 16GB 模组的 reComputer Super J401** 为具体示例。请将其中的 machine、SKU 和目录名称替换为你从上表中选择的数值。相同的参数化工作流同样适用于支持表中的其他机器，例如 reComputer Mini J5011。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>reComputer Super J401</th>
      <th>reComputer Mini J5011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img width={360} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" alt="reComputer Super J401" />
      </td>
      <td>
        <img width={360} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl.jpg" alt="reComputer Mini J5011" />
      </td>
    </tr>
    <tr>
      <td>
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 购买一台 🖱️</font></span></strong></a>
        </div>
      </td>
      <td>
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5011-with-GMSL-Extension-p-6876.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 购买一个 🖱️</font></span></strong></a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
使用错误的 `MACHINE` 或模块 SKU 可能会选择不兼容的 DTB、BPMP、引脚复用、内存或闪存配置文件。更改任一值后，切勿重复使用现有的构建目录。
:::

## 准备并验证工作区

克隆 Seeed 仓库并记录用于构建的提交版本：

```bash
mkdir -p ~/work/jetson-yocto
cd ~/work/jetson-yocto

git clone \
  --branch master \
  --single-branch \
  https://github.com/jjjadand/seeed-tegra-demo-distro.git \
  tegra-demo-distro

cd tegra-demo-distro
git rev-parse HEAD
```

为示例载板和模块准备一个工作区：

```bash
./scripts/seeed/prepare-workspace.sh \
  --machine recomputer-orin-super-j401 \
  --module-sku 0000 \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --cache-dir "$HOME/.cache/yocto-seeed"
```

对于 AGX Orin 载板，请将值替换为其 machine 和支持的 P3701 SKU。对于 Thor 载板，请省略 `--module-sku`，因为模块由所选的 machine 文件固定。该辅助脚本还支持 `--no-activate`、`--no-submodules` 和 `--full-history` 选项，用于高级工作区管理。

在构建前验证所选的构建目录、machine 和模块 SKU：

```bash
./scripts/seeed/build.sh current \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/current.png" alt="Yocto 辅助脚本显示所选构建目录、machine 和模块 SKU" />
</div>

如果显示的值与实际硬件不匹配，请不要继续。

## 构建镜像和烧录包

推荐的首次构建使用 `all` 命令。它会按顺序运行元数据验证、Seeed DTB/DTBO 编译、启动文件安装检查以及完整镜像构建：

```bash
./scripts/seeed/build.sh all \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

首次构建会下载并编译许多组件，可能需要数小时。成功运行会在全部四个阶段完成后结束：

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/build-full-complete.png" alt="已完成的 Yocto 元数据、设备树、启动文件和镜像构建阶段" />
</div>

生成的文件会放在 `<build-dir>/tmp/deploy/images/<machine>/` 下。重要输出遵循以下命名模式：

```text
<image>-<machine>.rootfs.ext4
<image>-<machine>.rootfs.manifest
<image>-<machine>.rootfs.spdx.json
<image>-<machine>.rootfs.testdata.json
<image>-<machine>.rootfs.tegraflash-tar.zst
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/filename.png" alt="Yocto 部署目录中包含生成的根文件系统和 tegraflash 压缩包" />
</div>

`.tegraflash-tar.zst` 压缩包包含供烧录准备辅助脚本使用的文件。

用于调试或部分重建时，可将 `all` 替换为 `metadata`、`dtb`、`bootfiles`、`image` 或 `flash-package`。保持相同的 `--build-dir`、`--machine` 和 `--image` 值。要构建可选的 x86_64 交叉开发 SDK，请运行：

```bash
./scripts/seeed/build.sh sdk \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

SDK 安装程序会写入 `<build-dir>/tmp/deploy/sdk/`。它不是构建或烧录目标镜像所必需的，并且在直接在 Jetson 上编译时也不需要。

## 准备并烧录目标设备

使用与构建时相同的构建目录、machine 和 image 值解压并验证烧录压缩包：

```bash
./scripts/seeed/prepare-flash.sh \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development \
  --output-dir "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
```

该辅助脚本会检查 rootfs、`initrd-flash`、烧录变量、DTB/BPMP DTB、引脚复用、焊盘电压以及其他选定的启动文件。对于可配置载板，它还会验证烧录压缩包中的模块 SKU 是否与已准备的工作区匹配。该辅助脚本本身不会运行 `sudo` 或对目标设备进行烧录。

按照对应 Seeed 载板文档中的恢复按钮或恢复开关操作步骤，将目标设备置于强制恢复模式。使用支持数据传输的线缆，将载板的 USB 设备/调试端口直接连接到 Linux 主机，然后验证是否能看到 NVIDIA APX 设备：

```bash
lsusb -d 0955:
```

USB 产品 ID 会因 Jetson 模块不同而变化。在 NVIDIA 恢复设备出现之前，不要开始烧录。

从已准备好的输出目录中运行生成的烧录脚本：

```bash
cd "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
sudo ./initrd-flash
```

该脚本通过 USB 启动一个临时 initrd，将目标存储设备暴露给主机，写入分区布局和根文件系统，并报告最终状态。烧录过程中不要断开电源或 USB。

:::warning
临时主机块设备名称是动态分配的。切勿假设它始终是 `/dev/sdb` 或 `/dev/sdc`，也不要手动将工作流重定向到主机硬盘。
:::

## 首次启动与验证

烧录成功完成后，断开恢复 USB 线缆，如有需要，将载板的恢复控制恢复到正常状态，重新上电目标设备，并连接其显示器和外设。

Yocto 桌面应从所选目标存储设备启动：

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg" alt="在 Seeed Jetson 设备上运行的 Yocto 桌面" />
</div>

默认的 `tegrademo` 配置启用了空的初始 root 密码和 root 登录，用于开发。请立即设置密码：

```bash
passwd
```

对于开发镜像，请验证所需的目标端工具和库，然后测试你的应用所使用的载板特定接口：

```bash
nvcc --version
gcc --version
cmake --version
pkg-config --modversion opencv4
```

成功构建或启动镜像并不能验证每个摄像头、GMSL 链路、显示模式、USB 端口、网络接口或扩展连接器。请在部署前完成针对产品的外设专项测试。

## 故障排查

**构建目录报告的 machine 或 SKU 错误：** 使用 `prepare-workspace.sh` 创建一个新的构建目录。不要通过编辑或重复使用现有工作区来切换载板或模块 SKU。

**找不到烧录压缩包：** 将相同的 `--image` 值传递给 `build.sh` 和 `prepare-flash.sh`。两个辅助脚本默认使用 `demo-image-full`，因此构建 `seeed-image-jetson-development` 时，必须在烧录准备阶段显式使用该名称。

**元数据解析通过但硬件无法启动：** 检查仓库支持矩阵。元数据和 DTB 构建验证并不能证明对于每一种 machine 和模块组合，物理烧录、存储启动、显示、摄像头、GMSL 或外设都能正常工作。

**烧录停在 `Waiting for USB storage device flashpkg`：** 在此阶段，主机正在等待 Jetson initrd 枚举一个临时 USB 大容量存储设备；rootfs 分区写入尚未开始。请检查数据线、与主机的直接 USB 连接、恢复模式状态以及已编译设备树中的 USB 设备模式路径。不要将不断出现的点号视为正常的慢速存储写入。

## 参考资料

- [Seeed tegra-demo-distro 仓库](https://github.com/jjjadand/seeed-tegra-demo-distro)
- [Seeed 载板支持矩阵](https://github.com/jjjadand/seeed-tegra-demo-distro/blob/master/layers/meta-seeed/docs/board-support-status.md)
- [Yocto Project 快速构建](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
- [OE4T meta-tegra 文档](https://oe4t.github.io/)
- [OE4T 烧录基础](https://oe4t.github.io/wrynose/Flashing.html)

感谢您选择 Seeed Studio 的产品！如需技术支持和产品讨论，请通过以下渠道联系我们：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
