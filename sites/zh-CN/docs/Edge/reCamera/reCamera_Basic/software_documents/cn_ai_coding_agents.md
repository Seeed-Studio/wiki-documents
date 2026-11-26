---
description: 安装并使用官方 reCamera 2002 C++ 开发 Skill，配合 AI 编码代理搭建脚手架、转换模型、交叉编译、部署和验证 SG200X 应用。
title: 使用 Skill
keywords:
  - reCamera
  - reCamera 2002
  - AI coding agent
  - Agent Skills
  - SG200X
  - RISC-V
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_2002_development_cpp_skill
sidebar_position: 6
last_update:
  date: '2026-11-20'
  author: Go
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/cn/recamera_2002_development_cpp_skill/
---

# 使用 Skill 开发 reCamera 2002 应用

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp" alt="reCamera 2002 AI coding agent skill" /></div>

## 介绍

[reCamera 2002 C++ Dev Toolkit](https://github.com/Seeed-Projects/recamera-2002-cpp-dev) 将适用于 reCamera 2002（SG200X）的可复现 C++ 工作流封装为一个 Agent Skill。安装后，你的编码代理可以生成演示工作区、准备模型、交叉编译 RISC-V 可执行文件、运行主机端冒烟测试、打包制品、通过 SSH 部署并收集证据。

该 Skill 由配置驱动：`demo.json` 描述演示应完成的功能，每个阶段都是一个命令，并且所有离线阶段必须通过后才会涉及设备。

:::note
此 Skill 面向 **搭载 SG200X SoC 的 reCamera 2002**（OS >= 0.2.4）。它**不适用于** reCamera Pro / RV1126B / RKNN。对于 reCamera Pro，请使用 [reCamera Pro skill](/cn/recamera_pro_development_cpp_skill/)。
:::

## Skill 能做什么

- 从 `demo.json` **生成演示工作区**：目录结构、构建脚本和起始代码
- **获取或转换模型**：Seeed 托管模型或 ONNX → 使用 TPU-MLIR 转为 `.cvimodel`
- 使用 Xuantie 工具链和 SG200X SDK **交叉编译** RISC-V C/C++ 演示程序
- 在无设备的情况下 **运行主机端冒烟测试**，让逻辑错误在部署前暴露
- **打包** 带哈希的确定性制品，以实现可复现交付
- **通过 SSH 部署**，探测设备并诊断故障
- **启动实时查看器**，支持 UDP H.264 视频、检测框叠加和参数调节
- **采集证据**，并将输出与基线进行评分对比

## 支持的环境

| 项目 | 支持的配置 |
| --- | --- |
| 设备 | Seeed reCamera 2002 (SG200X)，OS >= 0.2.4 |
| SoC | SG200X |
| 目标架构 | riscv64 Linux |
| 模型格式 | `.cvimodel`（TPU-MLIR / CVI） |
| 主机 | Linux x86_64（macOS 用于主机端验证；Windows 通过 WSL2） |
| 支持的代理 | Claude Code、Codex、Gemini CLI |
| 不支持 | reCamera Pro / RV1126B / RKNN |

## 安装 Skill

克隆工具包仓库，然后将 Skill 目录复制到你的代理的 skills 目录中：

```bash
git clone https://github.com/Seeed-Projects/recamera-2002-cpp-dev.git ~/src/recamera-2002-cpp-dev

# Claude Code
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.claude/skills/

# OpenAI Codex
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.codex/skills/

# Gemini CLI
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.gemini/skills/
```

安装完成后，请保持 Skill 目录名为 `recamera-2002-cpp-dev`。同一个目录可以被多个代理共用。如果 Skill 没有出现在当前会话中，请重启代理。

## 使用 Skill：人数统计实战演练

安装 Skill 后，你无需手动运行每个脚本。向编码代理描述目标，它会遵循 Skill 的工作流。下面是一个真实的人员计数二次开发会话示例。

### 1. 描述任务

在 Claude Code / Codex 中输入：

```text
Use the recamera-2002-cpp-dev skill to implement people counting in the camera view.
```

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera-people-counter-status-en.png" alt="Starting a people counting task with the recamera-2002-cpp-dev skill" />
  <p><em>代理会自动处理验证、交叉编译、打包、部署以及实时查看器</em></p>
</div>

从这里开始，你无需再手动运行任何脚本。代理会从工作区生成一路跟随 Skill，直到设备上的实时画面，然后打印 `LIVE_URL`。

### 2. 部署并打开实时页面

代理会自动执行探测 → 安装 → 启动，打开主机端查看器，并打印 `LIVE_URL`。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/2002_skill_count.png" alt="People counting count" />
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/2002_skill_result.png" alt="People counting result in the reCamera Live page" />
  <p><em>reCamera Live：实时画面、人员框、计数线、参数面板和设备日志</em></p>
</div>

页面会显示实时画面、人员框以及进/出计数；计数线和 ROI 的修改会立即生效。

### 3. 迭代

继续对话：

```text
Move the counting line up and shrink the ROI to the lower half of the frame.
```

```text
Increase the track confirmation frames from 2 to 3 to reduce false counts.
```

```text
Publish the current count and in/out totals to Home Assistant over MQTT.
```

代理会修改项目、重新构建、重新部署，并复用同一套验证流程。

## 命令参考

这里只保留两个最常用的入口点。完整的命令集、参数和注意事项请参阅官方仓库：

- [README.md](https://github.com/Seeed-Projects/recamera-2002-cpp-dev/blob/main/README.md)
- [SKILL.md](https://github.com/Seeed-Projects/recamera-2002-cpp-dev/blob/main/SKILL.md)

```bash
# Create a workspace with the live transport skeleton
python3 scripts/new_demo.py --name my_live --task detection --live udp --out ~/reCamera_demo

# Deploy and open the live page
python3 scripts/launch_demo.py --demo-dir ~/reCamera_demo/my_live --host <device-ip>
```

## 开发工作流

1. 从 `demo.json` **生成** 工作区。
2. **离线验证** 项目配置。
3. **构建** RISC-V 可执行文件并记录工具链锁定信息。
4. 在无设备的情况下 **冒烟测试** 主机端逻辑。
5. **打包** 带制品哈希的确定性归档文件。
6. **通过 SSH 部署** 并探测设备。
7. **采集证据**，并将结果与基线进行评分对比。

默认情况下，Skill 会在本地构建并检查制品。只有在你明确请求并授权时，才会在设备上执行文件传输、服务变更和运行。

## 故障排查

| 问题 | 可能原因 | 解决方案 |
| --- | --- | --- |
| Skill 未出现在列表中 | 代理尚未重新加载其 skills 目录 | 重启代理并核对上文所示的安装路径 |
| 交叉编译失败 | 缺少 Xuantie GCC 10.2.0、SG200X SDK 或 `SG200X_SDK_PATH` | 使用 Linux/WSL2 主机并重新运行环境检查 |
| 模型转换失败 | 缺少 TPU-MLIR 或 `onnx` 包，或模型约定不兼容 | 安装可选依赖并先检查模型输入/输出 |
| SSH 部署失败 | 设备不可达或未设置密码 | 检查 USB/RNDIS 连接并设置 `RECAMERA_PASSWORD` |
| 可执行文件能在主机上运行但不能在设备上运行 | 架构错误或 C 库不兼容 | 确认 ELF 为 riscv64 且与 SG200X sysroot 匹配 |
| 实时画面中没有检测结果 | `live` 部分不完整或未实现检测功能 | 在宣称成功前修复演示；如为 `placeholder` 或 `degraded` 请如实上报 |

## 资源

- [reCamera 2002 C++ Dev Toolkit 仓库](https://github.com/Seeed-Projects/recamera-2002-cpp-dev)
- [使用 C/C++ 在 reCamera 上开发](https://wiki.seeedstudio.com/cn/recamera_develop_with_c_cpp/)
- [reCamera 2002 硬件规格](https://wiki.seeedstudio.com/cn/recamera_2002_series_hardware_and_specs/)
- [reCamera Pro Development Skill](https://wiki.seeedstudio.com/cn/recamera_pro_development_cpp_skill/)

## 问答

### 我可以在 reCamera Pro 上使用这个 Skill 吗？

不可以。此 Skill 仅面向 **reCamera 2002 (SG200X)**。对于 reCamera Pro（RV1126B / RKNN），请使用 [reCamera Pro Development Skill](/cn/recamera_pro_development_cpp_skill/)。

### 如何导出日志以便排查问题？

如果部署或实时画面失败，请将主机端演示日志和设备日志收集到一个归档文件中：

```bash
# On the host: pack the demo workspace logs and evidence
cd ~/reCamera_demo/my_live
tar -czf recamera-2002-host-logs.tar.gz logs/ evidence/ 2>/dev/null || true

# Collect device-side logs over SSH
ssh recamera@<device-ip> "dmesg > /tmp/dmesg.log; tar -czf /tmp/recamera-2002-device-logs.tar.gz -C /var/log . /tmp/dmesg.log 2>/dev/null" || true
scp recamera@<device-ip>:/tmp/recamera-2002-device-logs.tar.gz .
```

请将这些归档文件连同问题描述、硬件型号以及 reCamera OS 版本一起发送至 **techsupport@seeed.io**。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供不同层级的支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
