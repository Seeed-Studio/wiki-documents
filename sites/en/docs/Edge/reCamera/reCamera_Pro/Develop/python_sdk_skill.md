---
description: Install and use the reCamera Pro Python SDK Skill with AI coding agents to build recamera_ext and Kit apps, convert RKNN models, package, and deploy to the App Center.
title: Use the Skill
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
url: https://wiki.seeedstudio.com/recamera_pro_python_sdk_skill/
createdAt: '2026-11-23'
updatedAt: '2026-11-25'
---

# Use the Skill to Develop reCamera Pro Python Apps

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" alt="reCamera Pro Python SDK Skill" /></div>

## Introduction

The [reCamera Pro Python SDK Skill](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk) packages the Python extension SDK workflow for reCamera Pro (RV1126B) into an Agent Skill. After installation, your coding agent can assess an idea, write `recamera_ext` demos, build Kit apps, convert ONNX models, validate and package the app, and deploy it over SSH.

The skill does not run on the camera. The apps it generates use the device-side `recamera_ext`, `kit`, and App Center manifest v2.

:::note
This skill targets **reCamera Pro with the RV1126B SoC and aarch64 Linux**. It is **not** for the SG2002/RISC-V reCamera 2002. For native C++ development, use the [reCamera Pro Development Skill](/recamera_pro_development_cpp_skill/).
:::

## What the skill can do

- **Assess a request** and choose the direct SDK, Kit, or public HTTP API route
- **Write direct SDK demos** with `FrameSource` and `ResultSink`
- **Build Kit apps** with model loading, preprocessing, detection postprocessing, and the browser overlay
- **Convert models** from ONNX to RKNN, with INT8 calibration and numerical comparison
- **Validate and package** the manifest and source into an App Center v2 `.tar.gz`
- **Deploy and diagnose** over SSH: upload, install, verify, and run read-only diagnosis

## Supported environment

| Item | Supported configuration |
| --- | --- |
| Device | Seeed reCamera Pro |
| SoC | Rockchip RV1126B |
| Target architecture | aarch64 Linux |
| Device Python | 3.11 |
| Runtime SDK | `recamera_ext` 1.5.0 + `kit` |
| NPU runtime | RKNN Runtime 2.3.2 |
| App platform profile | `rv1126b-linux-gnu-cp311-rknn232-v1` |
| Conversion host | Linux x86_64, Python 3.11, RKNN-Toolkit2 2.3.2 |
| Supported agents | Claude Code, Codex, and other Agent Skills-compatible agents |
| Not supported | SG2002 / RISC-V / `.cvimodel` |

## Install the Skill

The skill is a folder inside the SDK repository, with no separate installer. Clone the repository and copy it into your agent's skills directory:

```bash
git clone --depth 1 https://github.com/Seeed-Studio/recamera-pro-ext-api.git
mkdir -p ~/.claude/skills
cp -r recamera-pro-ext-api/skill/recamera-pysdk ~/.claude/skills/recamera-pysdk
```

Codex uses `~/.agents/skills/recamera-pysdk`; for project-scoped development, use `.claude/skills/`. Keep `SKILL.md`, `references/`, and `scripts/`, then restart the agent.

## Use the Skill: From Frames to an App Center App

### 1. Describe the request

```text
Use the recamera-pysdk skill to assess this idea: I want to read the camera
stream, run my own motion analysis, and draw the result on the preview. Tell me
whether it is supported, which layer to use, and what runtime preconditions apply.
```

The agent answers with **Supported / Supported with preconditions / Not supported through this SDK**, plus the API route and boundaries. The SDK does not own the camera media pipeline and has no unified speaker playback API; unsupported behavior should be stated directly.

### 2. Minimal frame capture and result injection

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

- `frame.array` is valid only for the current iteration; call `.copy()` before storing, queueing, or sharing across threads
- `ResultSink` boxes are normalized `[0, 1]`; pixel values collapse into a 1-pixel invisible box
- The extension sockets are root-only in the current platform, so run the process as root

### 3. Build an App Center app

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

`conf` and `iou` are auto-bound from the manifest `config_schema`. `infer()` returns raw RKNN tensors and must go through `postprocess`. Three manifest rules cause most device-side failures:

- **NPU**: declare `npu.rknn: scheduled`, and list every `models[].file` in `artifacts[]` as a bundled `rknn` with its real `sha256` and `size`
- **Entry**: keep `entry` at the package root (for example `app.py`) with models and labels beside it; do not use `Path(__file__).parents[...]`
- **Overlay**: browser boxes need `output.contract_version: 2`, `output.sink: "ws"`, a `box` field from `results[].box`, and `render.boxes`

## Command Reference

Only the common entry points are shown. See the skill's `SKILL.md` and `references/` for all options:

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

## Development Workflow

1. **Assess** whether the request is supported, and choose direct SDK or Kit.
2. **Implement** with the current `kit.app.App` shape or direct `recamera_ext` calls.
3. **Convert** a new ONNX model to RKNN with an explicit preprocessing recipe.
4. **Validate** offline with `validate_app.py`, and fix every error.
5. **Package** the manifest v2 `.tar.gz` and release lock.
6. **Deploy** over SSH when needed, then install and verify.
7. **Accept** by reporting validation, installation, lifecycle, and task results separately; packaging success is not device success.

## Troubleshooting

| Problem | Likely cause | What to do |
| --- | --- | --- |
| The skill is not listed | The agent has not reloaded its skills directory | Confirm the folder contains `SKILL.md`, then restart the agent |
| The agent suggests C++/GStreamer | The task was routed to the native skill | State that the target is the Python SDK / RV1126B |
| `rc_ext_frame_open failed` | Firmware lacks the endpoint, or the process is not root | Check `/run/recamera/` and run as root |
| No boxes in the preview | The output/render contract is missing or inconsistent | Check `brokered`, `contract_version: 2`, `box`, `coord`, and `render.boxes` |
| `inference authorization failed` | A scheduled model has no bundled `rknn` artifact | Add the matching `sha256`, `size`, `file`, and `mount` |
| Packaging fails on Windows | Archive members contain backslashes | Build on a POSIX host, or keep resources at the package root |

## Resources

- [reCamera Pro Python SDK Skill](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk)
- [reCamera Pro Extension API repository](https://github.com/Seeed-Studio/recamera-pro-ext-api)
- [reCamera Pro Development Skill (C++)](/recamera_pro_development_cpp_skill/)
- [reCamera 2002 C/C++ Development](/recamera_develop_with_c_cpp/)
- [reCamera Pro product page](https://www.seeedstudio.com/reCamera-Pro-2GB.html)

## Q&A

**Q: The agent does not list the recamera-pysdk skill after installation. What should I check?**

A: Confirm the copied folder directly contains `SKILL.md`, `references/`, and `scripts/` (not nested one level deeper), and that it sits in the right skills directory: `~/.claude/skills/` for Claude Code, `~/.agents/skills/` for Codex, or `.claude/skills/` for project-scoped use. Then restart the agent so it reloads the skills directory.

**Q: The app runs on the device, but no boxes appear in the browser preview. Why?**

A: The output/render contract is usually missing or inconsistent. Check that the manifest sets `output.contract_version: 2` and `output.sink: "ws"`, that detections carry a `box` field sourced from `results[].box`, and that `render.boxes` is enabled. Boxes must be normalized to `[0, 1]`; pixel values collapse into an invisible 1-pixel box.

**Q: I get `rc_ext_frame_open failed` or `inference authorization failed` on the device. How do I fix it?**

A: For `rc_ext_frame_open failed`, verify the firmware exposes the sockets under `/run/recamera/` and run the process as root. For `inference authorization failed`, a scheduled RKNN model must be listed in `artifacts[]` as a bundled `rknn` with its real `sha256`, `size`, `file`, and `mount`.

### Export logs

If the problem persists, collect logs from your reCamera Pro (RV1126B) and send them to support. Replace `<device-ip>` with your device's IP address:

```bash
# Pack device logs (falls back to /var/log + dmesg if /userdata/log is absent)
ssh root@<device-ip> 'tar czf /tmp/recamera-pro-logs.tar.gz /var/log /userdata/log 2>/dev/null; dmesg > /tmp/recamera-pro-dmesg.log'

# Pull the archives back to your host
scp root@<device-ip>:/tmp/recamera-pro-logs.tar.gz .
scp root@<device-ip>:/tmp/recamera-pro-dmesg.log .
```

Email the log archives, a short problem description (what you did / what happened / what you expected), and your hardware model and firmware version to **techsupport@seeed.io**.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different levels of support to ensure your experience with our products is as smooth as possible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
