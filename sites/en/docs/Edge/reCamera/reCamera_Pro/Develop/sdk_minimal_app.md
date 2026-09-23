---
description: Set up the reCamera Pro SDK cross-compilation environment and walk through building and deploying a minimal native application, using the Visual Wake + STT project as a worked example.
title: SDK and Minimal Application
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - cross-compilation
  - RKNN
  - GStreamer
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_setup
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_sdk_setup/
---

# SDK and Minimal Application

This page explains how to prepare a host environment for building native reCamera Pro applications and how a complete build-and-deploy cycle works. The steps are demonstrated with the [Visual Wake and Offline Speech Recognition](/recamera_pro_visual_wake_stt/) project, a real RKNN + GStreamer application that runs entirely on the device.

For the general development contract (toolchain versions, model formats, languages), see [Choose a Development Path](/recamera_pro_dev_path/). If you prefer an AI coding agent to drive this workflow, see [Develop with AI Coding Agents](/recamera_pro_development_cpp_skill/).

## Prerequisites

- A reCamera Pro (RV1126B, aarch64) reachable over USB virtual Ethernet (default `192.168.42.1`) or LAN
- A Linux computer, or a Windows computer with WSL, for model conversion and cross-compilation
- A working reCamera Pro SDK on the host
- RKNN-Toolkit2 2.3.2 and RKNN Runtime 2.3.2 — do not mix arbitrary RKNN Runtime versions

{/* TODO(verify): document where to download the reCamera Pro SDK, its expected directory layout, and how to verify the SDK version; the source project only references a local SDK path */}

## Configure the SDK Path

Build scripts in reCamera Pro projects typically locate the SDK through an environment variable. For the Visual Wake project, `scripts/build_recamera.sh` looks for the SDK at a default local path; point it at your own SDK checkout instead:

```bash
export RECAMERA_PRO_SDK=/absolute/path/to/recamera-pro-sdk
```

The build script also validates `librknnrt.so`. If your SDK or runtime stores it elsewhere, update the `qualified_rknnrt` path in the script to a verified RKNN 2.3.2 runtime while retaining the checksum-validation step.

## Get a Project and Cross-Compile

Clone the project repository and run its cross-build script from the project root:

```bash
git clone https://github.com/yyling0101-a11y/recamera_pro_face_stt.git
cd recamera_pro_face_stt
bash scripts/build_recamera.sh
```

The script validates the SDK, loads its build environment, and produces a deployment bundle:

```text
build-recamera/deploy/
├── visual_wake_app
├── models/
│   ├── scrfd_500m_640_fp16.rknn
│   ├── pfld_98_112_fp16.rknn
│   └── stt/                         # encoder, decoder, joiner, and vocabulary
└── web/dashboard.html
```

A minimal application of your own follows the same shape: an aarch64 executable, its RKNN model files, and any web or config assets, all laid out in one directory.

## Deploy to the Device

Copy the **contents** of the deployment directory into a single directory on the device, then connect over SSH and make the binary executable:

```bash
scp -r build-recamera/deploy/* root@192.168.42.1:/userdata/visual-wake/
ssh root@192.168.42.1
cd /userdata/visual-wake
chmod +x visual_wake_app
```

:::tip
Keep the `models/` and `web/` directories at their relative paths. The application loads its assets using those default relative paths.
:::

## Run and Verify

Run the application from its deployment directory:

```bash
./visual_wake_app
```

During normal operation, actionable events appear in the terminal:

```text
VISUAL_WAKE track=1
STT_RESULT 打开灯
```

Use `--help` to list every runtime option. For example, this command verifies only the visual pipeline and disables network services:

```bash
./visual_wake_app --no-stt --no-rtsp --no-web --debug
```

A successful deployment means: the binary starts on the device, loads its RKNN models, opens the camera, and prints recognizable events or inference output.

## Common Environment Problems

| Problem | Possible cause | Solution |
| --- | --- | --- |
| Build cannot find OpenCV or RKNN | SDK environment is missing or the runtime is incompatible | Verify `RECAMERA_PRO_SDK`, load the SDK `env.sh`, and use RKNN 2.3.2 |
| Model files cannot be found at runtime | Deployment layout was not preserved | Confirm that `models/` and `web/` exist in the execution directory |
| The executable is x86-64 | The host compiler was used instead of the aarch64 cross compiler | Rebuild with a target-compatible compiler and reCamera Pro sysroot |
| The binary cannot load a library | Sysroot, ABI, or runtime search path does not match the board | Inspect the ELF dependencies and compare every target library with the device |

{/* TODO(verify): add expected output of a version check command (SDK version, librknnrt.so version on device) so users can confirm host and device compatibility before deploying */}

## Next Steps

- [Camera, Audio, and Inference Development](/recamera_pro_media_dev/) — GStreamer camera capture, ALSA audio, and RTSP output details
- [Develop with AI Coding Agents](/recamera_pro_development_cpp_skill/) — automate model conversion and native builds with an AI agent
- [Visual Wake and Offline Speech Recognition](/recamera_pro_visual_wake_stt/) — the complete worked example used on this page

## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with various support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to meet different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
