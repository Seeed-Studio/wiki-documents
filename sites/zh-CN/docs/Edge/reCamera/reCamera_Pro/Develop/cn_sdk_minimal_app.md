---
description: 安装 reCamera Pro 交叉编译 SDK，为 RV1126B 构建一个小型 C++ 程序，检查生成的二进制文件，并在设备上运行。
title: 设置 reCamera Pro 交叉编译 SDK
keywords:
  - reCamera Pro
  - RV1126B
  - SDK
  - 交叉编译
  - CMake
  - RKNN
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_setup
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/12/2026
  author: Seeed Studio
url: https://wiki.seeedstudio.com/cn/recamera_pro_sdk_setup/
createdAt: '2026-09-21'
updatedAt: '2026-10-12'
---

# 设置 reCamera Pro 交叉编译 SDK

本指南使用 [reCamera Pro 交叉编译 SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain) 在 Linux PC 或 WSL 上构建一个小型 C++ 程序，然后在 reCamera Pro 上运行。你将安装编译器和目标库，构建示例，检查它是 ARM 64 位程序，并将其复制到相机上。

> 此 SDK 适用于搭载 Rockchip RV1126B 处理器的 reCamera Pro。它不适用于 SG2002/RISC-V reCamera。

## 你需要准备什么

- 运行量产固件的 reCamera Pro
- 一台 Linux PC，或安装了 WSL 2 和 Ubuntu 的 Windows PC
- 主机可以访问 GitHub Releases 的网络，用于下载 SDK 资源（安装后约 2.5 GB）
- CMake、Ninja 和 `pkg-config`
- 用于部署步骤的 reCamera Pro SSH 访问权限

该 SDK 以 64 位 ARM Linux 为目标，提供 Rockchip GCC 12.4.0 编译器、目标 sysroot、GStreamer 1.22 开发文件以及 RKNN API/运行时 2.3.2。模型转换是单独进行的：在 x86_64 主机上使用 RKNN-Toolkit2 2.3.2 并设置 `target_platform='rv1126b'` 来转换 ONNX 模型。

## 1. 安装 SDK

安装主机工具并克隆 SDK 仓库：

```bash
sudo apt update
sudo apt install -y git cmake ninja-build pkg-config
git clone https://github.com/Seeed-Projects/recamera_pro_toolchain.git
cd recamera_pro_toolchain
```

下载并验证带版本号的编译器和 sysroot，然后加载 SDK 环境：

```bash
./scripts/setup.sh
source scripts/env.sh
bash scripts/check-sdk.sh
```

`setup.sh` 会将 SDK 资源安装到仓库的 `toolchain/` 和 `sysroot/` 目录中，并检查它们的 SHA-256 校验和。在网络连接较慢时，下载可能需要一些时间。在配置项目之前，每个新终端中都需要再次运行 `source scripts/env.sh`。

## 2. 构建随 SDK 提供的示例

首先构建随附的冒烟测试示例。它会链接 RKNN Runtime、OpenCV 和 GStreamer，因此可以检查 SDK 是否能找到主要的目标库。

在仓库根目录下执行：

```bash
source scripts/env.sh
cmake -S examples/sdk_smoke -B examples/sdk_smoke/build -G Ninja
cmake --build examples/sdk_smoke/build
```

可执行文件会生成在 `examples/sdk_smoke/build/` 下。如果 CMake 之前已经使用你的主机编译器配置过该构建目录，请删除该构建目录，并在使用 SDK 构建之前重新配置。

## 3. 构建一个小型 C++ 应用

你可以在自己的 CMake 项目中使用该 SDK。创建一个与 `recamera_pro_toolchain` 同级的项目目录：

```bash
mkdir -p ~/my-recamerapro-app
cd ~/my-recamerapro-app
```

创建 `main.cpp`：

```cpp
#include <iostream>

int main() {
    std::cout << "Hello from reCamera Pro" << std::endl;
    return 0;
}
```

创建 `CMakeLists.txt`：

```cmake
cmake_minimum_required(VERSION 3.16)
project(my_recamera_app LANGUAGES CXX)

add_executable(my_recamera_app main.cpp)
```

加载 SDK 环境，然后进行配置和构建。如果你在其他位置克隆了 SDK，请替换下面的路径：

```bash
cd ~/my-recamerapro-app
source ~/recamera_pro_toolchain/scripts/env.sh
cmake -S . -B build -G Ninja
cmake --build build
```

该环境会为 CMake 选择 aarch64 交叉编译器和目标 sysroot。对于使用 RKNN 或 GStreamer 的项目，请参考 SDK 仓库中的 [CMake 集成示例](https://github.com/Seeed-Projects/recamera_pro_toolchain#minimal-cmake-integration) 来查找并链接目标库。

## 4. 检查可执行文件

在将程序复制到相机之前，先确认它是为正确的处理器构建的，并且不包含主机路径：

```bash
file build/my_recamera_app
source ~/recamera_pro_toolchain/scripts/env.sh
"${CROSS_COMPILE}readelf" -l build/my_recamera_app | grep interpreter
"${CROSS_COMPILE}readelf" -d build/my_recamera_app | grep -E 'NEEDED|RPATH|RUNPATH'
```

检查以下结果：

- `file` 报告为 ARM aarch64，而不是 x86-64 或 RISC-V。
- ELF 解释器为 `/lib/ld-linux-aarch64.so.1`。
- 任意运行时搜索路径指向 `/oem/usr/lib`；其中不包含主机或 WSL 路径。

SDK 的工具链文件会将设备运行时路径设置为 `/oem/usr/lib`。不要向可执行文件中添加来自主机、SDK 目录或构建目录的绝对路径。

## 5. 复制到 reCamera Pro 并运行

通过 USB 虚拟以太网或局域网连接到相机。如果你的相机使用不同的 IP 地址，请将下面的 `192.168.42.1` 替换为实际地址。为程序创建一个目录并复制可执行文件：

```bash
ssh root@192.168.42.1 'mkdir -p /userdata/my-recamerapro-app'
scp build/my_recamera_app root@192.168.42.1:/userdata/my-recamerapro-app/
ssh root@192.168.42.1
```

在相机上运行它：

```bash
cd /userdata/my-recamerapro-app
chmod +x my_recamera_app
./my_recamera_app
```

预期输出：

```text
Hello from reCamera Pro
```

只复制你的应用程序及其所需的资源文件。不要覆盖 `/oem/usr/lib/librknnrt.so`；SDK 中的 RKNN Runtime 仅用于链接，并已与量产设备运行时进行过比对。

## 故障排查

| 现象 | 需要检查的内容 |
| --- | --- |
| `setup.sh` 无法下载某个资源 | 检查主机的网络连接并重新运行 `./scripts/setup.sh`。该脚本会验证已下载文件的校验和。 |
| CMake 选择了主机编译器 | 在同一终端中运行 `source scripts/env.sh`，使用一个全新的构建目录，然后重新配置。 |
| `pkg-config` 找到的是主机库 | 在配置之前加载 `scripts/env.sh`；它会将 `pkg-config` 指向 SDK 的 sysroot。 |
| 设备上出现 `Exec format error` | 对可执行文件运行 `file`，确认其报告为 ARM aarch64。 |
| 运行时缺少某个共享库 | 检查可执行文件的 `NEEDED` 条目，并确认所需库存在于设备固件中。不要将主机库复制到设备上。 |

SDK 的 sysroot 使用的 libc 提供了直到 GLIBC 2.38 的符号。在宣称与不同固件版本兼容之前，请检查固件 ABI。成功的交叉构建仅确认编译和链接通过；它并不验证你的应用在相机上的运行情况、模型精度或运行时行为。

## 后续步骤

- [reCamera Pro SDK 仓库](https://github.com/Seeed-Projects/recamera_pro_toolchain) — SDK 安装脚本、CMake 集成以及 `sdk_smoke` 示例
- [相机、音频与推理开发](/cn/recamera_pro_media_dev/) — GStreamer 相机采集、音频和 RTSP
- [选择开发路径](/cn/recamera_pro_dev_path/) — 为你的项目选择合适的开发流程

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中体验顺畅。你可以选择最适合自己的支持渠道。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
