---
description: 使用 AI 编码代理安装和使用 reCamera Pro Python SDK Skill，以构建 recamera_ext 和 Kit 应用、转换 RKNN 模型、打包并部署到 App Center。
title: 使用 Skill
keywords:
  - reCamera
  - reCamera Pro
  - Python SDK
  - AI coding agent
  - Agent Skills
  - recamera_ext
  - Kit
  - RKNN
  - RV1126B
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_python_sdk_skill
sku: 10003420
sidebar_position: 4.5
last_update:
  date: '2026-11-25'
  author: Go
url: https://wiki.seeedstudio.com/cn/recamera_pro_python_sdk_skill/
createdAt: '2026-11-23'
updatedAt: '2026-11-25'
---

# 使用 Skill 开发 reCamera Pro Python 应用

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" alt="reCamera Pro Python SDK Skill" /></div>

## 介绍

[reCamera Pro Python SDK Skill](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk) 将 reCamera Pro（RV1126B）的 Python 扩展 SDK 工作流封装为一个 Agent Skill。安装后，你的编码代理可以评估一个想法、编写 `recamera_ext` 示例、构建 Kit 应用、转换 ONNX 模型、验证并打包应用，并通过 SSH 部署。

该 skill 不在相机上运行。它生成的应用会在设备端使用 `recamera_ext`、`kit` 和 App Center manifest v2。

:::note
此 skill 面向 **搭载 RV1126B SoC 且运行 aarch64 Linux 的 reCamera Pro**。它**不适用于** SG2002/RISC-V 的 reCamera 2002。若要进行原生 C++ 开发，请使用 [reCamera Pro Development Skill](/cn/recamera_pro_development_cpp_skill/)。
:::

## Skill 能做什么

- **评估请求**，并在直接 SDK、Kit 或公共 HTTP API 路径之间进行选择
- 使用 `FrameSource` 和 `ResultSink` **编写直接 SDK 示例**
- **构建 Kit 应用**，包括模型加载、预处理、检测后处理以及浏览器叠加层
- **转换模型**：从 ONNX 到 RKNN，支持 INT8 校准和数值对比
- **验证并打包** manifest 和源码为 App Center v2 `.tar.gz`
- 通过 SSH **部署和诊断**：上传、安装、验证，并运行只读诊断

## 支持的环境

| 项目 | 支持的配置 |
| --- | --- |
| 设备 | Seeed reCamera Pro |
| SoC | Rockchip RV1126B |
| 目标架构 | aarch64 Linux |
| 设备 Python | 3.11 |
| 运行时 SDK | `recamera_ext` 1.5.0 + `kit` |
| NPU 运行时 | RKNN Runtime 2.3.2 |
| 应用平台 profile | `rv1126b-linux-gnu-cp311-rknn232-v1` |
| 转换主机 | Linux x86_64，Python 3.11，RKNN-Toolkit2 2.3.2 |
| 支持的代理 | Claude Code、Codex 以及其他兼容 Agent Skills 的代理 |
| 不支持 | SG2002 / RISC-V / `.cvimodel` |

## 安装 Skill

该 skill 是 SDK 仓库中的一个文件夹，没有单独的安装程序。克隆仓库并将其复制到你的代理的 skills 目录中：

```bash
git clone --depth 1 https://github.com/Seeed-Studio/recamera-pro-ext-api.git
mkdir -p ~/.claude/skills
cp -r recamera-pro-ext-api/skill/recamera-pysdk ~/.claude/skills/recamera-pysdk
```

Codex 使用 `~/.agents/skills/recamera-pysdk`；对于项目范围的开发，使用 `.claude/skills/`。保留 `SKILL.md`、`references/` 和 `scripts/`，然后重启代理。

## 使用 Skill：从帧到 App Center 应用

### 1. 描述请求

```text
Use the recamera-pysdk skill to assess this idea: I want to read the camera
stream, run my own motion analysis, and draw the result on the preview. Tell me
whether it is supported, which layer to use, and what runtime preconditions apply.
```

代理会回答 **Supported / Supported with preconditions / Not supported through this SDK**，并给出 API 路径和边界。该 SDK 不拥有相机媒体管线，也没有统一的扬声器播放 API；不支持的行为应直接说明。

### 2. 最小帧捕获与结果注入

```python
import numpy as np
from recamera_ext import FrameSource, ResultSink

prev = None
with FrameSource() as src, ResultSink(source_id="motion") as sink:
    for frame in src:
        cur = frame.array                 # zero-copy NV12 Y plane view
        if prev is not None:
            diff = np.abs(cur.astype(np.int16) - prev.astype(np.int16))
            ys, xs = np.nonzero(diff > 25)
            if xs.size >= 800:
                h, w = cur.shape
                box = (xs.min()/w, ys.min()/h,
                       xs.max()/w, ys.max()/h, 0.9, "motion")
                sink.send_detections(pts_us=frame.pts_us, boxes=[box])
        prev = cur.copy()                 # the next frame overwrites this view
```

- `frame.array` 仅在当前迭代中有效；在存储、排队或跨线程共享之前请先调用 `.copy()`
- `ResultSink` 的框是归一化的 `[0, 1]`；像素值会折叠成一个不可见的 1 像素框
- 在当前平台上扩展套接字仅 root 可用，因此以 root 身份运行进程

### 3. 构建 App Center 应用

```python
from kit.app import App, run_app
from kit.runtime.postprocess.detect import postprocess
from kit import events as E

class MyDetector(App):
    owns_loop = True
    model_frame = "hw-direct"
    model_dma_input = True

    def run(self):
        for frame in self.frames():
            x = self.pre(frame)
            outs = self.models.det.infer(x)
            dets = postprocess(outs, x.info,
                               conf_thres=self.conf, iou_thres=self.iou,
                               input_size=self._pre_size,
                               class_names=self.class_names)
            self.emit([E.detection(d) for d in dets],
                      frame.pts, results=dets)

if __name__ == "__main__":
    run_app(MyDetector())
```

`conf` 和 `iou` 会从 manifest 的 `config_schema` 自动绑定。`infer()` 返回原始 RKNN 张量，必须经过 `postprocess`。有三条 manifest 规则导致了大多数设备端失败：

- **NPU**：声明 `npu.rknn: scheduled`，并在 `artifacts[]` 中列出每个 `models[].file`，作为打包的 `rknn`，并填写真实的 `sha256` 和 `size`
- **入口**：将 `entry` 保持在包根目录（例如 `app.py`），模型和标签与其放在一起；不要使用 `Path(__file__).parents[...]`
- **叠加层**：浏览器框需要 `output.contract_version: 2`、`output.sink: "ws"`、来自 `results[].box` 的 `box` 字段，以及 `render.boxes`

## 命令参考

这里只展示常用入口点。所有选项请参阅 skill 的 `SKILL.md` 和 `references/`：

```bash
# Offline validation
python skill/recamera-pysdk/scripts/validate_app.py --app-dir ./my-detector --mode demo

# Package the App Center archive
python skill/recamera-pysdk/scripts/package_app.py --app-dir ./my-detector --out ./dist

# ONNX -> RKNN (INT8)
python skill/recamera-pysdk/scripts/convert_model.py convert \
  --onnx model.onnx --recipe recipe.json --out build/model \
  --quant i8 --dataset calibration/images.txt \
  --model-id my-detector --task detect

# Upload and install
python skill/recamera-pysdk/scripts/deploy_app.py \
  --archive dist/<app>.tar.gz --host <device-ip> --user root \
  --action install --report deploy-report.json
```

- [SKILL.md](https://github.com/Seeed-Studio/recamera-pro-ext-api/blob/main/skill/recamera-pysdk/SKILL.md)
- [API reference](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk/references/api)

## 开发工作流

1. **评估** 请求是否受支持，并在直接 SDK 或 Kit 之间进行选择。
2. 使用当前的 `kit.app.App` 结构或直接的 `recamera_ext` 调用进行**实现**。
3. 使用明确的预处理配方将新的 ONNX 模型**转换**为 RKNN。
4. 使用 `validate_app.py` 进行离线**验证**，并修复所有错误。
5. 将 manifest v2 `.tar.gz` **打包**并释放锁。
6. 在需要时通过 SSH **部署**，然后安装并验证。
7. 通过分别报告验证、安装、生命周期和任务结果来**验收**；打包成功并不代表设备端成功。

## 故障排查

| 问题 | 可能原因 | 处理方法 |
| --- | --- | --- |
| Skill 未出现在列表中 | 代理尚未重新加载其 skills 目录 | 确认文件夹中包含 `SKILL.md`，然后重启代理 |
| 代理建议使用 C++/GStreamer | 任务被路由到了原生 skill | 说明目标是 Python SDK / RV1126B |
| `rc_ext_frame_open failed` | 固件缺少该端点，或进程不是 root | 检查 `/run/recamera/` 并以 root 身份运行 |
| 预览中没有框 | 输出/渲染契约缺失或不一致 | 检查 `brokered`、`contract_version: 2`、`box`、`coord` 和 `render.boxes` |
| `inference authorization failed` | 已调度的模型没有打包的 `rknn` 工件 | 添加匹配的 `sha256`、`size`、`file` 和 `mount` |
| 在 Windows 上打包失败 | 归档成员包含反斜杠 | 在 POSIX 主机上构建，或将资源保持在包根目录 |

## 资源

- [reCamera Pro Python SDK Skill](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk)
- [reCamera Pro Extension API repository](https://github.com/Seeed-Studio/recamera-pro-ext-api)
- [reCamera Pro Development Skill (C++)](/cn/recamera_pro_development_cpp_skill/)
- [reCamera 2002 C/C++ Development](/cn/recamera_develop_with_c_cpp/)
- [reCamera Pro product page](https://www.seeedstudio.com/reCamera-Pro-2GB.html)

## 问答

**问：代理在安装后没有列出 recamera-pysdk skill。我应该检查什么？**

答：确认复制的文件夹中直接包含 `SKILL.md`、`references/` 和 `scripts/`（而不是再嵌套一层），并且位于正确的 skills 目录中：Claude Code 使用 `~/.claude/skills/`，Codex 使用 `~/.agents/skills/`，项目范围使用 `.claude/skills/`。然后重启代理，使其重新加载 skills 目录。

**问：应用在设备上运行，但浏览器预览中没有框。为什么？**

答：通常是输出/渲染契约缺失或不一致。检查 manifest 是否设置了 `output.contract_version: 2` 和 `output.sink: "ws"`，检测结果是否携带来自 `results[].box` 的 `box` 字段，以及是否启用了 `render.boxes`。框必须归一化到 `[0, 1]`；像素值会折叠成一个不可见的 1 像素框。

**问：我在设备上遇到 `rc_ext_frame_open failed` 或 `inference authorization failed`。该如何修复？**

A: 对于 `rc_ext_frame_open failed`，请确认固件在 `/run/recamera/` 下暴露了 sockets，并以 root 身份运行该进程。对于 `inference authorization failed`，计划使用的 RKNN 模型必须在 `artifacts[]` 中列为一个打包的 `rknn`，并填写其真实的 `sha256`、`size`、`file` 和 `mount`。

### 导出日志

如果问题仍然存在，请从你的 reCamera Pro (RV1126B) 收集日志并发送给技术支持。将 `<device-ip>` 替换为你设备的 IP 地址：

```bash
# Pack device logs (falls back to /var/log + dmesg if /userdata/log is absent)
ssh root@<device-ip> 'tar czf /tmp/recamera-pro-logs.tar.gz /var/log /userdata/log 2>/dev/null; dmesg > /tmp/recamera-pro-dmesg.log'

# Pull the archives back to your host
scp root@<device-ip>:/tmp/recamera-pro-logs.tar.gz .
scp root@<device-ip>:/tmp/recamera-pro-dmesg.log .
```

请将日志压缩包、简要问题描述（你做了什么 / 发生了什么 / 你期望的结果）以及你的硬件型号和固件版本发送到 **techsupport@seeed.io**。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供不同层级的支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
