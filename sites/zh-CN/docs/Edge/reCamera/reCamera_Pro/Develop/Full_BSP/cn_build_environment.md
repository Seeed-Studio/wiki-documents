---
description: 为构建完整源码包准备并验证主机依赖环境。
title: BSP 构建环境
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_build_environment
sku: 10003420
sidebar_position: 3
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_bsp_build_environment/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# BSP 构建环境

## 一键安装脚本

SDK 根目录包含 `setup_build_env.sh`（实际脚本位于 `project/setup_build_env.sh`，根目录下是一个符号链接）。它是**幂等的**：不会重新安装或升级已经满足版本要求的工具，因此你可以反复运行它。

```bash
cd recamera-pro-sdk-v1.0.10
./setup_build_env.sh             # Install all missing tools
./setup_build_env.sh --check     # Dry run: report missing tools without changing anything
./setup_build_env.sh --help      # Show script help
```

首次运行时，使用 `--check` 查看缺少哪些内容，再决定是否安装软件包或访问网络。

## 为你的构建目标安装工具

工具需求取决于你计划构建的内容。对于第一次完整 SDK 构建，使用脚本安装并检查所有依赖是最简单的方法。如果你只构建一个 C/C++ 应用，先检查它的 Makefile、链接库和 sysroot 需要什么，然后只安装这些工具。Rust、Go、Node.js 和 Docker 被 SDK 中特定的高层应用使用；它们不是构建内核或所有 C 程序的通用前置条件。

脚本会汇总并检查所需工具。其安装阶段如下：

| 阶段 | 内容 | 被用于 |
| --- | --- | --- |
| Step 1 | 硬件检查：64 位 CPU 和 SDK 分区上的可用空间（≥20 GB；推荐 ≥100 GB） | 所有构建 |
| Step 2 | 通过 `apt` 安装基础构建软件包：`repo git make gcc g++ cmake bison flex libssl-dev autoconf pkg-config python3 device-tree-compiler` 等 | U-Boot / 内核 / Buildroot / 通用应用依赖 |
| Step 3 | Rust（`rustup` / `cargo`）、Docker（≥27.0.0，并将用户加入 `docker` 组）、`cross`（Rust 交叉编译辅助工具）、nvm / Node.js（≥18） | `recamera_services`、`recamera_web` |
| Step 4 | CMake ≥3.21、`libblkid-dev`、`libprotobuf-dev`、`protobuf-compiler` | `recamera_ipc`、`common/vigil` |
| Step 5 | Go ≥1.24.0、UPX | `recamera_go2rtc` 及相关应用 |
| Step 6 | 打印所有工具的版本汇总 | 所有构建 |

> 为什么一个“C SDK”要检查 Rust、Go 和 Node.js？这是一个完整的产品源码包，而不仅仅是 C 代码。`recamera_services` 使用 Rust，go2rtc 相关程序使用 Go，Web 前端使用 Node.js 工具链，通知服务使用 Python。这些工具只在构建对应组件时才需要。如果完整构建因为缺少某个工具而失败，先确认是哪个应用失败。应用列表见 [reCamera 上层服务架构](/cn/recamera_pro_bsp_services/)。

## 用户与权限

- 以**具有 sudo 权限的普通用户**或 root 身份运行脚本。
- 当以 `sudo ./setup_build_env.sh` 调用时，rustup、nvm 和 Go 配置等用户级工具会为由 `$SUDO_USER` 标识的真实用户安装，而不是为 root 安装。这是有意为之，可避免后续构建中的权限问题。

## 安装后的必要步骤

1. 如果脚本将当前用户加入了 `docker` 组，**请注销并重新登录**，或临时运行 `newgrp docker`，以使更改生效。
2. 打开一个新的终端，或运行 `source ~/.bashrc`，以使 Go、cargo 和 nvm 的 PATH 变更生效。
3. 确认在 Step 6 的版本汇总中，没有任何必需工具被标记为 `NOT INSTALLED`。

通过以下命令验证环境：

```bash
./setup_build_env.sh --check
```

## 受限网络：镜像与离线包

脚本支持使用环境变量覆盖下载源：

| 环境变量 | 覆盖内容 |
| --- | --- |
| `GO_MIRROR_BASE` | Go 下载基础 URL |
| `DOCKER_REPO_BASE` | Docker apt 仓库基础 URL |
| `CMAKE_BASE_URL` | CMake 下载基础 URL |
| `RUSTUP_DIST_SERVER` | rustup 分发服务器 |

例如：

```bash
export GO_MIRROR_BASE=https://golang.google.cn/dl
export RUSTUP_DIST_SERVER=https://rsproxy.cn
./setup_build_env.sh
```

如果你将离线归档文件 `go1.24.0.linux-*.tar.gz` 放在 **SDK 根目录**，脚本会在尝试联网下载之前使用它来安装 Go。

## 手动安装（不使用脚本）

如果公司策略不允许运行安装脚本，至少需要安装：

```bash
sudo apt install -y build-essential git make cmake bison flex libssl-dev \
    autoconf pkg-config python3 device-tree-compiler libblkid-dev \
    libprotobuf-dev protobuf-compiler
```

最低版本要求：

- CMake ≥ 3.21（`recamera_ipc` 在其 CMakeLists 中要求该版本）
- Docker ≥ 27.0.0（Rust `cross` 交叉编译器所需）
- Node.js ≥ 18（前端构建）
- Go ≥ 1.24.0（go2rtc）

**你不需要手动安装交叉工具链。** SDK 已在 `tools/linux/toolchain/` 下包含它：

- `aarch64-rockchip1240-linux-gnu`（GCC 12.4.0，64 位；被 reCamera Pro 使用）
- `arm-rockchip1240-linux-gnueabihf`（32 位）

`project/app/Makefile.param` 会自动将 `tools/linux/toolchain/<RK_TOOLCHAIN_CROSS>/bin` 添加到 `PATH`，因此你不需要修改系统 PATH。

## 检查构建环境是否就绪

SDK 提供了如下检查命令：

```bash
./build.sh check
```

它会检查组件 SDK 的依赖。在运行 `lunch` 之后，`./build.sh info` 还会打印当前的板卡配置以及所有 `RK_*` 变量，以帮助确认环境是否正确加载。

> 注意：`./build.sh --help` **不是**帮助命令。未被识别的参数会导致 `build.sh` 显示板卡选择菜单。用法信息在 `project/build.sh` 中的 `usage()` 函数里；它也在 [首次完整构建](/cn/recamera_pro_bsp_full_build/) 的命令表中进行了汇总。

## 常见安装问题

| 现象 | 原因 | 解决方案 |
| --- | --- | --- |
| `docker: permission denied` | 组变更尚未生效 | 注销并重新登录，或运行 `newgrp docker` |
| 安装后出现 `go: command not found` | PATH 尚未刷新 | 打开一个新的终端或运行 `source ~/.bashrc` |
| rustup 下载超时 | 网络受限 | 设置 `RUSTUP_DIST_SERVER` 并重新运行安装脚本 |
| 磁盘空间检查失败 | 分区可用空间少于 20 GB | 使用其他分区或释放空间后重试；构建输出可能还需要数十 GB 的额外空间 |
| `cross` 构建失败 | Docker 未运行 | 运行 `sudo systemctl start docker` |

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>