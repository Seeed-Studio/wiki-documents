---
title: 使用 AI 编码代理开发 reCamera Pro 应用
description: 安装并使用 reCamera Pro Development Skill，通过自然语言对话完成 ONNX 模型转换、原生 RKNN 应用构建，以及相机、音频、GStreamer 和 RTSP 工作流开发。
keywords:
  - reCamera
  - reCamera Pro
  - AI coding agent
  - Agent Skills
  - RKNN
  - RV1126B
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/cpp_skill/recamera_skill.png
slug: /recamera_pro_development_cpp_skill
sidebar_position: 3
last_update:
  date: 2026-08-14
  author: yylin
createdAt: '2026-08-14'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/cn/recamera_pro_development_cpp_skill/
---

# 使用 AI 编码代理开发 reCamera Pro 应用

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/cpp_skill/recamera_skill.png" alt="reCamera Pro Development Skill workflow" /></div>

## 介绍

[reCamera Pro Development Skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) 为 AI 编码代理打包了 reCamera Pro 专用的说明文档、脚本、技术参考以及原生 C++ 应用模板。安装后，你可以用自然语言描述一个应用，让代理为你准备模型转换和原生开发工作流。

例如，你可以让代理执行以下任务：

- 将 ONNX 模型转换为适用于 RV1126B NPU 的 RKNN
- 创建或修改原生 C/C++ RKNN Runtime 应用
- 使用 GStreamer 采集相机帧
- 添加麦克风采集或扬声器播放
- 开发 RTSP 推理流水线
- 检查主机、交叉编译器、sysroot、目标库和生成的 ELF 文件

该仓库为 OpenAI Codex、Claude Code、GitHub Copilot、Cursor 和 Gemini CLI 提供了不同版本。每个版本都使用相同的 reCamera Pro 开发知识，只是在安装和调用方式上针对不同代理进行了适配。

:::note
此 Skill 专为 **搭载 RV1126B SoC 且运行 aarch64 Linux 的 reCamera Pro** 设计，不适用于 SG2002/riscv64 reCamera 平台。
:::

## 硬件准备

- 一台 reCamera Pro
- 一台用于模型转换和交叉编译的 Linux 电脑，或带 WSL 的 Windows 电脑
- 一条网络连接，用于下载仓库和所需的开发依赖

<div align="center">
<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>
</div>

## 支持的开发环境

在开发原生 AI 应用时，该 Skill 使用以下目标约定：

| 项目 | 支持的配置 |
| --- | --- |
| 设备 | Seeed reCamera Pro |
| SoC | Rockchip RV1126B |
| 目标架构 | aarch64 Linux |
| 模型格式 | ONNX 输入，RKNN 输出 |
| RKNN Toolkit | RKNN-Toolkit2 2.3.2 |
| RKNN Runtime | 2.3.2 |
| 相机框架 | GStreamer |
| 原生应用语言 | C/C++ |

## 安装 Skill

### 选择你的 AI 编码代理

克隆与你使用的代理相匹配的分支：

| AI 编码代理 | 分支 | 用户级 Skill 目录 |
| --- | --- | --- |
| OpenAI Codex | `main` | `~/.agents/skills/recamera-rknn-dev` |
| Claude Code | `claude-code` | `~/.claude/skills/recamera-rknn-dev` |
| GitHub Copilot | `github-copilot` | `~/.copilot/skills/recamera-rknn-dev` |
| Cursor | `cursor` | `~/.cursor/skills/recamera-rknn-dev` |
| Gemini CLI | `gemini-cli` | `~/.gemini/skills/recamera-rknn-dev` |

### 方法一：让代理自行安装

如果你的代理支持从 Git 仓库安装 Skill，可以向它发送如下请求：

```text
Install the reCamera Pro development skill from:
https://github.com/Seeed-Projects/recamera-pro-development-skill.git
```

在请求中提及你使用的代理类型，以便它选择对应的分支和安装目录。

### 方法二：手动安装

下面的示例安装的是 OpenAI Codex 版本：

```bash
git clone --branch main --single-branch \
  https://github.com/Seeed-Projects/recamera-pro-development-skill.git
cd recamera-pro-development-skill
./scripts/install_skill.sh
```

如果要使用其他受支持的代理，请将 `main` 替换为上表中对应的分支名。每个分支的安装脚本会将 Skill 复制到该代理的用户级 Skill 目录中。

如果在当前会话中没有看到该 Skill，请在安装后重启代理。

:::tip
请保留已克隆的仓库。若需在之后更新 Skill，只需从同一代理分支拉取最新更改，并按照该分支的 README 和安装说明操作。
:::

## 使用 Skill

你可以在提示词中显式写出 Skill 名称：

```text
Use the reCamera Pro development skill to check whether my computer is ready
to cross-compile native applications for reCamera Pro.
```

安装 Skill 后，你也可以直接用自然语言描述任务。代理会自动加载相关的模型转换、交叉编译、相机、音频或流媒体指导。

### 转换 ONNX 模型

```text
Use the reCamera Pro development skill to inspect model.onnx and convert it
to an RKNN model for RV1126B. Use representative images in calibration/images
for INT8 calibration and compare the RKNN output with the ONNX output.
```

代理会检查模型的输入和输出约定，为 `rv1126b` 配置 RKNN-Toolkit2 2.3.2，并将预处理和转换元数据与生成的模型一同保存。

:::warning
不要凭空猜测模型的预处理方式、颜色顺序、归一化或输出语义。在请求 INT8 量化时，请提供原始模型来源以及具有代表性的校准图像。
:::

### 构建原生相机应用

```text
Use the reCamera Pro development skill to create a C++ application that
captures /dev/video13 with GStreamer and runs my RKNN detection model.
Cross-compile it with my reCamera Pro sysroot and inspect the resulting ELF file.
```

该 Skill 包含一个最小化的 RKNN Runtime 和 GStreamer 应用模板。代理会根据模型调整预处理和后处理，而不是将模板视为一个完整的检测器。

### 添加音频或 RTSP

```text
Add microphone capture and speaker playback to my reCamera Pro application.
Check the device's ALSA configuration before changing the code.
```

```text
Create an RTSP inference application for reCamera Pro and identify the target
GStreamer dependencies required by the cross build.
```

### 诊断现有项目

```text
Diagnose why this binary does not run on reCamera Pro. Check its architecture,
ELF interpreter, shared-library dependencies, runtime search path, and ABI
compatibility with the board sysroot.
```

## 开发工作流

代理遵循如下通用工作流：

1. 检查 Linux 或 WSL 主机、Conda 安装、交叉编译器、sysroot 和本地 RKNN Runtime 文件。
2. 检查 ONNX 模型约定，并记录其来源、许可证、输入布局、归一化方式、颜色顺序和输出语义。
3. 使用 RKNN-Toolkit2 2.3.2 为 `rv1126b` 转换模型；对 INT8 使用具有代表性的校准数据。
4. 在将模型集成到应用之前，将 RKNN 输出与源 ONNX 模型进行对比。
5. 创建或调整原生 C/C++ 应用，并针对与 reCamera Pro 兼容的 sysroot 进行交叉编译。
6. 验证生成的可执行文件为 aarch64，并确保其 RKNN、GStreamer、libc、C++ ABI 和运行时路径与设备兼容。
7. 为部署准备可执行文件、RKNN 模型、运行命令以及预期的输入/输出约定。

默认情况下，Skill 会在本地构建和检查工件。只有在你明确请求并授权时，才会在 reCamera Pro 上执行文件传输和运行。

默认情况下，在 Agent 生成输出后，你需要手动将其推送到设备上运行。代理会提供相应的执行命令，输出通常是一个二进制可执行文件和一个 rknn 模型文件。

## 重要说明

- 对于原生 C/C++ 应用，请使用 RKNN Runtime C API。本工作流不使用 `rknn-toolkit-lite2`。
- 不要将开发电脑上的 x86_64 库链接到 aarch64 目标应用中。
- 不要将 NV12 相机字节直接输入到 RGB 或 BGR 模型中。流水线或应用必须执行模型所需的精确预处理。
- 成功完成模型转换并不保证推理结果正确。请将数值输出和预处理方式与源框架进行对比。
- 应用会链接到与开发板兼容的 RKNN Runtime，并使用设备上已有的运行时；不应替换 reCamera Pro 上已安装的 RKNN Runtime。

## 故障排查

| 问题 | 可能原因 | 解决方案 |
| --- | --- | --- |
| Skill 未出现在列表中 | 代理尚未重新加载其用户级 Skill 目录 | 重启代理，并确认 Skill 已安装到上文所示目录 |
| 选择了错误的平台 | 任务中混入了针对 SG2002/riscv64 reCamera 的说明 | 明确说明目标是 reCamera Pro、RV1126B 和 aarch64 |
| RKNN 转换失败 | Toolkit 版本、ONNX 算子支持或模型输入约定不兼容 | 让代理先检查 ONNX 模型，并使用 RKNN-Toolkit2 2.3.2 |
| INT8 精度较差 | 缺少校准图像或图像不具代表性 | 创建具有代表性的数据集，并在每行列出一张图像路径 |
| 可执行文件为 x86-64 | 使用了主机编译器而非 aarch64 交叉编译器 | 使用与目标兼容的编译器和 reCamera Pro sysroot 重新构建 |
| 二进制文件无法加载某个库 | sysroot、ABI 或运行时搜索路径与开发板不匹配 | 让代理检查 ELF 依赖，并将每个目标库与设备上的库逐一对比 |
| 相机帧颜色或推理结果不正确 | NV12 到 RGB/BGR 的转换或归一化与模型不匹配 | 重新检查模型约定，并将预处理步骤显式化 |

## 资源

- [reCamera Pro Development Skill 仓库](https://github.com/Seeed-Projects/recamera-pro-development-skill)
- [reCamera Pro 产品页面](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [reCamera Pro Wiki](https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供不同层级的支持，以确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
