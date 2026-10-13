---
description: 下载、校验并解压完整的 reCamera Pro BSP 源码包。
title: 下载并解压源码包
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_download
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_bsp_download/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 下载并解压源码包

在此下载压缩包：[recamera-pro-sdk-v1.0.10.tar.gz](https://seeedstudio88-my.sharepoint.com/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FreCamera%2Frecamera%2Dpro%2Dsdk%2Dv1%2E0%2E10%2Etar%2Egz&parent=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FreCamera&ga=1)。这是本指南中所述的完整 BSP 源码包。

## 包信息

| 项目 | 数值 |
| --- | --- |
| 文件名 | `recamera-pro-sdk-v1.0.10.tar.gz` |
| 压缩包大小 | 约 3.7 GB（3,928,456,385 字节） |
| 解压后大小 | 约 12 GB |
| 顶层目录 | `recamera-pro-sdk-v1.0.10/` |
| SHA-256 | `0c171f7a65ed87a7112f07eb0408b91b934f456af32d91608f961a4a21bced8a` |

> 上述 SHA-256 值是在撰写本 Wiki 时，从实际发布的压缩包计算得到的。使用 `./build.sh save` 重新打包得到的压缩包或集合，其校验值可能不同；此时请使用发布记录中给出的校验值。

## 主机要求

| 项目 | 要求 |
| --- | --- |
| 操作系统 | 64 位 Ubuntu，推荐 20.04 或更高版本 |
| CPU 架构 | x86_64 或 aarch64 |
| 磁盘空间 | SDK 所在分区至少预留 20 GB 空闲空间；如果保留多个构建输出，推荐 100 GB 或更多 |
| 内存 | 推荐 16 GB 或以上；并行的多媒体和内核构建会占用大量内存 |
| 网络 | 第一次运行 `setup_build_env.sh` 时需要联网以下载工具和依赖 |

参考实测：在一台拥有 937 GB SDK 分区（已用 242 GB）的主机上，使用 24 核并行的 `pigz` 将 3.7 GB 压缩包解压到 12 GB 约耗时 20 秒。系统自带的单线程 `gzip` 可能需要数倍时间。

## 校验压缩包

```bash
sha256sum recamera-pro-sdk-v1.0.10.tar.gz
```

将输出结果与上面的校验值进行比较。如果不匹配，说明下载可能被截断或被重新打包。**请不要继续操作。**

## 解压压缩包

推荐使用 `pigz` 进行并行解压：

```bash
sudo apt install -y pigz
tar -I "pigz -d -p 16" -xf recamera-pro-sdk-v1.0.10.tar.gz
```

或者使用标准命令：

```bash
tar -xzf recamera-pro-sdk-v1.0.10.tar.gz
```

解压完成后，确认主要入口是否存在。它们是指向 `project/` 的符号链接：

```bash
cd recamera-pro-sdk-v1.0.10
ls -l build.sh rkflash.sh readme_cn.txt setup_build_env.sh
```

预期输出包括：

```text
build.sh -> project/build.sh
rkflash.sh -> project/rkflash.sh
readme_cn.txt -> project/readme_cn.txt
```

## 重要注意事项

- **不要在 Windows 上解压或复制此压缩包。** SDK 大量依赖符号链接（`build.sh`、`.BoardConfig.mk` 以及 `docs/` 下的 PDF 快捷方式）和可执行权限（`build.sh`、`rkflash.sh` 以及 `tools/` 下的二进制文件）。Windows 文件系统可能会丢失这些信息，从而导致构建失败或命令缺失。随包提供的 `readme_en.txt` 也特别强调了这一点。
- 如果需要在 Windows 和 Linux 之间传输该压缩包，请保持其为 tar 压缩包形式，并在 Linux 上解压，或者使用 `git` / `repo` 进行检出。
- 避免在安装路径中使用空格和非 ASCII 字符。Buildroot 和部分 Makefile 对包含空格的路径支持不可靠。
- 不要在以 `noexec` 选项挂载的分区上进行构建；诸如 `tools/linux/Linux_Upgrade_Tool/upgrade_tool` 等二进制文件需要执行权限。
- 解压后的 SDK **不**包含 `.repo/`；这是一个源码快照。请忽略 `readme_en.txt` 中的 `repo sync` 说明，因为它们不适用于此压缩包。

## 修复丢失的可执行权限（恢复）

如果压缩包在传输过程中经过了无法保留权限的环境，可以尝试：

```bash
cd recamera-pro-sdk-v1.0.10
chmod +x build.sh rkflash.sh setup_build_env.sh project/build.sh project/rkflash.sh
chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool
find . -name "*.sh" -exec chmod +x {} \;
```

一旦符号链接丢失，`chmod` 无法恢复它们；请重新解压原始 tar 压缩包。

## 解压后的第一步

```bash
./setup_build_env.sh --check     # Check only; report missing tools without changing anything
```

详细信息请参阅[搭建构建环境](/cn/recamera_pro_bsp_build_environment/)。

## 升级或切换到新的 SDK 版本

- 每个 SDK 版本都是一个独立的 tar 压缩包。请将新版本解压到**不同的目录**中，不要混用不同版本。
- `lunch` 菜单中的板级配置编号是通过对 `project/cfg/` 下的文件名排序生成的，在不同版本之间可能会变化。请在文档和脚本中记录完整的配置文件名，不要依赖菜单编号。
- 要迁移你的应用程序，请将整个 `project/app/<your-directory>/` 目录复制到新 SDK 中相同的位置，然后在新的板级配置中启用对应的 `RK_APP_xxx=y` 选项。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>