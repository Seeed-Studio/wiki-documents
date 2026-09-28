---
description: 设置 reCamera Pro SDK 交叉编译环境，并通过 Visual Wake + STT 项目这一完整示例，演示如何构建和部署一个最小原生应用。
title: SDK 与最小应用
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - 交叉编译
  - RKNN
  - GStreamer
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_setup
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_sdk_setup/
---

# SDK 与最小应用

本页说明如何在主机上准备用于构建 reCamera Pro 原生应用的环境，以及完整的构建与部署循环是如何工作的。文中以 [Visual Wake and Offline Speech Recognition](/cn/recamera_pro_visual_wake_stt/) 项目为示例，这是一个完全在设备上运行的真实 RKNN + GStreamer 应用。

有关通用开发约定（工具链版本、模型格式、编程语言），请参阅 [选择开发路径](/cn/recamera_pro_dev_path/)。如果你更希望由 AI 编码代理驱动此工作流，请参阅 [使用 AI 编码代理开发](/cn/recamera_pro_development_cpp_skill/)。

## 前置条件

- 一台可通过 USB 虚拟以太网（默认 `192.168.42.1`）或局域网访问的 reCamera Pro（RV1126B，aarch64）
- 一台 Linux 电脑，或带有 WSL 的 Windows 电脑，用于模型转换和交叉编译
- 主机上已安装可用的 reCamera Pro SDK
- RKNN-Toolkit2 2.3.2 和 RKNN Runtime 2.3.2 —— 不要混用任意 RKNN Runtime 版本

{/* TODO(verify): document where to download the reCamera Pro SDK, its expected directory layout, and how to verify the SDK version; the source project only references a local SDK path */}

## 配置 SDK 路径

reCamera Pro 项目中的构建脚本通常通过环境变量定位 SDK。对于 Visual Wake 项目，`scripts/build_recamera.sh` 会在默认本地路径查找 SDK；请将其指向你自己的 SDK 检出目录：

```bash
export RECAMERA_PRO_SDK=/absolute/path/to/recamera-pro-sdk
```

构建脚本还会验证 `librknnrt.so`。如果你的 SDK 或 runtime 将其存放在其他位置，请在脚本中将 `qualified_rknnrt` 路径更新为已验证的 RKNN 2.3.2 runtime，同时保留校验和验证步骤。

## 获取项目并交叉编译

克隆项目仓库，并在项目根目录运行其交叉构建脚本：

```bash
git clone https://github.com/yyling0101-a11y/recamera_pro_face_stt.git
cd recamera_pro_face_stt
bash scripts/build_recamera.sh
```

脚本会验证 SDK，加载其构建环境，并生成一个部署包：

```text
build-recamera/deploy/
├── visual_wake_app
├── models/
│   ├── scrfd_500m_640_fp16.rknn
│   ├── pfld_98_112_fp16.rknn
│   └── stt/                         # encoder, decoder, joiner, and vocabulary
└── web/dashboard.html
```

你自己编写的最小应用也遵循相同结构：一个 aarch64 可执行文件、其 RKNN 模型文件，以及任意 Web 或配置资源，全部放在同一个目录中。

## 部署到设备

将部署目录中的**内容**复制到设备上的某个单一目录中，然后通过 SSH 连接并将二进制文件设为可执行：

```bash
scp -r build-recamera/deploy/* root@192.168.42.1:/userdata/visual-wake/
ssh root@192.168.42.1
cd /userdata/visual-wake
chmod +x visual_wake_app
```

:::tip
保持 `models/` 和 `web/` 目录的相对路径不变。应用会使用这些默认相对路径加载其资源。
:::

## 运行与验证

从部署目录中运行该应用：

```bash
./visual_wake_app
```

在正常运行期间，可执行的事件会显示在终端中：

```text
VISUAL_WAKE track=1
STT_RESULT 打开灯
```

使用 `--help` 可列出所有运行时选项。例如，下面的命令仅验证视觉处理流水线并禁用网络服务：

```bash
./visual_wake_app --no-stt --no-rtsp --no-web --debug
```

成功部署意味着：二进制文件能在设备上启动，加载其 RKNN 模型，打开摄像头，并打印可识别的事件或推理输出。

## 常见环境问题

| 问题 | 可能原因 | 解决方案 |
| --- | --- | --- |
| 构建时找不到 OpenCV 或 RKNN | SDK 环境缺失或 runtime 不兼容 | 验证 `RECAMERA_PRO_SDK`，加载 SDK 的 `env.sh`，并使用 RKNN 2.3.2 |
| 运行时找不到模型文件 | 部署目录结构未被保留 | 确认执行目录中存在 `models/` 和 `web/` |
| 可执行文件是 x86-64 | 使用了主机编译器而非 aarch64 交叉编译器 | 使用与目标兼容的编译器和 reCamera Pro sysroot 重新构建 |
| 二进制文件无法加载某个库 | Sysroot、ABI 或 runtime 搜索路径与开发板不匹配 | 检查 ELF 依赖，并将每个目标库与设备上的库进行对比 |

{/* TODO(verify): add expected output of a version check command (SDK version, librknnrt.so version on device) so users can confirm host and device compatibility before deploying */}

## 后续步骤

- [摄像头、音频与推理开发](/cn/recamera_pro_media_dev/) —— GStreamer 摄像头采集、ALSA 音频和 RTSP 输出细节
- [使用 AI 编码代理开发](/cn/recamera_pro_development_cpp_skill/) —— 使用 AI 代理自动化模型转换和原生构建
- [Visual Wake and Offline Speech Recognition](/cn/recamera_pro_visual_wake_stt/) —— 本页所用的完整示例

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
