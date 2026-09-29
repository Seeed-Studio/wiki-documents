---
description: Compare the four development paths for reCamera Pro — Web API, native SDK development, AI coding agents, and the experimental Debian 13 image — and choose the right one for your project.
title: Choose a Development Path
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Web API
  - RKNN
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_dev_path
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_dev_path/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Choose a Development Path

reCamera Pro (Rockchip RV1126B, aarch64 Linux) supports several ways to build your own application, from no-code configuration to full native development. This page helps you pick the right starting point.

## Path Comparison

| Path | Best for | Skill required | Where to start |
| --- | --- | --- | --- |
| WebUI no-code apps | Detection, recording, and alerting workflows configured in the browser | None | [Build Your Own App](/recamera_pro_ai_inference/) |
| Web API | Integrating an existing device into your own backend or script | HTTP/JSON basics | [API Introduction](/recamera_pro_api_introduction/) |
| Native SDK (C/C++ + RKNN) | Custom on-device AI applications with full control | C/C++, cross-compilation | [SDK and Minimal Application](/recamera_pro_sdk_setup/) |
| AI coding agents | Building native applications through natural-language conversations with Codex, Claude Code, Copilot, Cursor, or Gemini CLI | Prompting; agent handles toolchain details | [Develop with AI Coding Agents](/recamera_pro_development_cpp_skill/) |
| Experimental Debian 13 | Users who need `apt`, CMake, or Docker on the device itself | Linux administration | [Experimental Debian 13 Image](/recamera_pro_debian/) |

## WebUI No-Code Apps

The stock Buildroot firmware ships with a web interface for AI inference, event recording, and alert outputs (MQTT, HTTP, serial port). If your project can be expressed as "detect this, then record or notify", configure it in the WebUI first — no code is involved. See the Build Your Own App section of this wiki.

## Web API

The device exposes an HTTP-based Web API for device information, system configuration, network management, audio/video control, AI inference, file management, and firmware updates.

| Item | Description |
| --- | --- |
| Protocol | HTTP or HTTPS |
| Base Path | `/cgi-bin/entry.cgi` (most endpoints); `/api/v1/...` for serial port and file endpoints |
| Content Type | `application/json` |
| Authentication | JWT Token via Cookie |

Choose this path when an external system (backend service, home automation hub, script) needs to control or read from the device. Start with the [API Introduction](/recamera_pro_api_introduction/) and [Quick Start](/recamera_pro_api_quick_start/).

## Native SDK (C/C++ + RKNN)

For custom on-device AI applications, the target contract is:

| Item | Supported configuration |
| --- | --- |
| SoC | Rockchip RV1126B |
| Target architecture | aarch64 Linux |
| Model format | ONNX input, RKNN output |
| RKNN Toolkit | RKNN-Toolkit2 2.3.2 |
| RKNN Runtime | 2.3.2 |
| Camera framework | GStreamer |
| Native application language | C/C++ |

You cross-compile on a Linux (or WSL) host against a reCamera Pro-compatible sysroot and deploy the binary plus RKNN models to the device. See [SDK and Minimal Application](/recamera_pro_sdk_setup/) for environment setup and a worked example, and [Camera, Audio, and Inference Development](/recamera_pro_media_dev/) for media pipeline details.

:::note
This platform is specific to **reCamera Pro with the RV1126B SoC and aarch64 Linux**. It is not compatible with the SG2002/riscv64 reCamera platform.
:::

## AI Coding Agents

The [reCamera Pro Development Skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) packages the same native development knowledge — model conversion, cross-compilation, camera, audio, GStreamer, and RTSP guidance plus a C++ application template — for AI coding agents. If you prefer describing an application in natural language and letting an agent drive the toolchain, start with [Develop with AI Coding Agents](/recamera_pro_development_cpp_skill/).

## Experimental Debian 13 Image

A community-provided Debian 13 image replaces the stock Buildroot system and gives you `apt`, CMake, and Docker directly on the device. The camera, microphone, speaker, and Wi-Fi work with Seeed's factory drivers; Bluetooth is not supported, and the original USB-C virtual network adapter is unavailable.

:::warning
The Debian 13 firmware is experimental. Seeed does not maintain it at this time; it is provided as an additional development option. See [Experimental Debian 13 Image](/recamera_pro_debian/) for flashing and recovery details.
:::

{/* TODO(verify): confirm which stock-firmware features (WebUI, vendor AI services, OTA update) are lost when the Debian 13 image is flashed, and document the official path back to factory firmware */}

## Decision Guide

- **"I want alerts/recordings based on a pretrained or custom model"** → WebUI, plus [Use Your Own Model](/recamera_pro_model_path/) if you need a custom detector.
- **"I want my backend to control the device"** → Web API.
- **"I want a fully custom on-device application"** → Native SDK, optionally driven by an AI coding agent.
- **"I want a general-purpose Linux computer with a camera"** → Experimental Debian 13.

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
