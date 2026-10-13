---
description: reCamera Pro 上的音频采集与回放 API、麦克风阵列路由以及音频算法。
title: 音频开发
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - C/C++
  - RKNN
  - Application Development
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_audio_development
sku: 10003420
sidebar_position: 4
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_audio_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 音频开发

本页介绍当前产品固件中的应用音频接口和设备配置。对于普通的 C/C++ 应用构建，请使用 [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain)。只有在需要修改 ALSA、内核音频或产品音频路由时，才需要完整的 BSP 源码。

## 硬件与内核支持

与音频相关的内核选项位于 `sysdrv/source/kernel/arch/arm64/configs/rv1126b-recamera2.config`：

| 配置项 | 含义 |
| --- | --- |
| `CONFIG_SND_SOC_ES7202=y` | Everest ES7202 多通道 ADC，用于麦克风阵列采集 |
| `CONFIG_SND_SOC_ROCKCHIP_PDM_V2=y` | PDM 数字麦克风接口 v2 |
| `CONFIG_SND_SOC_RK817=y` | RK817 编解码器（集成在 PMIC 中的音频；扬声器输出路径） |
| `CONFIG_SND_SOC_RK_DSM=y` | Rockchip 数字扬声器处理 |
| `CONFIG_SND_SOC_ROCKCHIP_ASRC=y` | 异步采样率转换 |
| `CONFIG_SND_SOC_ROCKCHIP_MULTI_DAIS=y` | 多个 DAI 链路；采集和回放使用独立的 DAI |
| `CONFIG_SND_SOC_DUMMY_CODEC=y` | Dummy 编解码器 |
| `CONFIG_SND_HRTIMER=y`, `CONFIG_SND_PCM_TIMER=y` | 定时器驱动 |

音频节点在 `rv1126b-recamera2-v1.dts` 及其包含的 DTSI 文件中定义。用户态库源码位于 `media/alsa-lib/`。通过 `./build.sh media` 构建；输出位于 `output/out/media_out/lib/`。

## 采集路径：六路硬件通道 → 四路虚拟通道

这一关键的 reCamera Pro 音频设计在覆盖层中的 `/etc/asound.conf` 中定义。源码路径：`project/cfg/BoardConfig_Recamera2/overlay/overlay-buildroot-asound/etc/asound.conf`。

### 三层结构

**第 1 层 · 共享硬件（`dsnoop`）** — 允许多个进程读取同一个硬件设备：

~~~text
pcm.mic_hw_shared
  type       dsnoop
  ipc_key    2026
  ipc_perm   0666
  slave.pcm  "hw:0,0"
  channels   6
  rate       16000
  format     S16_LE
  period_size 1024
  buffer_size 4096
~~~

**第 2 层 · 通道映射（`route`）** — 将六路物理通道映射为四路虚拟通道 `[Mic1, Mic2, Ref, Ref]`：

~~~text
pcm.ai_2mic_2ref
  type          route
  slave.pcm     "mic_hw_shared"
  slave.channels 6
  ttable {
      0.0 1    # 硬件通道 Ch0 → 输出通道 Ch0（Mic 1）
      1.2 1    # 硬件通道 Ch2 → 输出通道 Ch1（Mic 2）
      2.4 1    # 硬件通道 Ch4 → 输出通道 Ch2（参考）
      3.4 1    # 硬件通道 Ch4 → 输出通道 Ch3（参考拷贝）
  }
~~~

**第 3 层 · 应用虚拟设备（`plug`）** — 为不同模块提供具名设备，并自动进行格式转换：

| PCM 设备 | 用途 |
| --- | --- |
| `ai_main` | 主音频输入 |
| `ai_kws` | 关键词唤醒 |
| `ai_asr` | 语音识别（ASR） |
| `ai_debug` | 调试 / 原始录音 |

这四个设备都使用 `type plug`，其 `slave.pcm` 为 `"ai_2mic_2ref"`。它们的控制设备为：

~~~text
ctl.ai_main / ctl.ai_kws / ctl.ai_asr / ctl.ai_debug  →  type hw; card 0
~~~

### 采用该设计的原因

- **`dsnoop` 避免独占访问：** ALSA 硬件设备默认是独占的，但 KWS、ASR、视频录制音频和调试录音可能需要同时采集。通过 `ipc_key 2026` + `ipc_perm 0666` 允许多个进程共享采集流。
- **`route` 提供 AEC 参考信号：** 声学回声消除（AEC）需要当前扬声器播放内容的参考信号。硬件通道 4 承载该参考信号，并被复制到输出通道 2 和 3。
- **`plug` 解决格式不匹配：** 各模块可能需要不同的采样率或格式；`plug` 会自动进行转换。

### 使用方法

~~~bash
# 录制四路通道（2 路麦克风 + 2 路参考），16 kHz S16_LE
# arecord -D ai_debug -c 4 -r 16000 -f S16_LE -d 10 /userdata/test.wav

# 用于 ASR 的录音
# arecord -D ai_asr -c 4 -r 16000 -f S16_LE -d 5 /userdata/asr.wav
~~~

在使用 ALSA API 时，将 `"ai_main"`、`"ai_kws"`、`"ai_asr"` 或 `"ai_debug"` 作为设备名传入。不要使用 `"hw:0,0"`；它是独占的，并且不会应用通道映射。

> 直接打开 `hw:0,0` 会得到原始的六通道数据。若需要两路麦克风 + 两路参考的布局，请使用 `ai_2mic_2ref` 或其任一 `plug` 封装。

## 回放路径

扬声器使用 RK817 编解码器 / RK_DSM。默认 ALSA 回放设备为 `default`（`hw:0,x`；请在硬件上通过 `aplay -l` 确认具体设备号）。

~~~bash
# aplay -l                              # 列出回放设备
# aplay -D default /oem/usr/share/xxx.wav
~~~

`recamera_ipc` 在 `project/app/recamera_ipc/common/speaker_test.wav` 中包含一个测试音频文件，用于扬声器检查。

## 应用层音频代码

| 路径 | 内容 |
| --- | --- |
| `project/app/recamera_ipc/common/audio/audio.c` / `audio.h` | 主要的 rkipc 音频逻辑：采集、编码以及与视频的复用 |
| `project/app/recamera_ipc/common/audio/rkaudio_mp3.c` / `.h` | MP3 解码与回放（用于提示音等） |
| `project/app/ao_record_demo/ao_record_demo.c` | 录音示例；其 Makefile 可作为链接 rockit 的模板 |
| `project/app/aov_sample/sample_aov_audio.c` | 低功耗模式下的音频采集 |
| `project/app/component/ao_record_service/` | 录音服务组件，由 `project/app/Makefile` 显式收集 |
| `media/samples/simple_test/simple_ai_get_frame.c` | 最小采集示例 |
| `media/samples/simple_test/simple_ai_bind_aenc.c` | 将采集绑定到编码 |
| `media/samples/simple_test/simple_ai_bind_aenc_external_encoder.c` | 使用外部编码器 |
| `media/samples/simple_test/simple_adec_bind_ao.c` | 将解码绑定到回放 |
| `media/samples/simple_test/simple_adec_bind_ao_external_decoder.c` | 使用外部解码器 |
| `media/samples/simple_test/simple_ao_send_frame.c` | 直接向回放发送音频帧 |
| `media/samples/example/audio/sample_ai.c`, `sample_ai_aenc.c` | 完整示例 |
| `media/samples/example/test/sample_ai_aenc_adec_ao_stresstest.c` | 音频压力测试 |

## rockit 音频模块

在使用 MPI 时，音频与视频采用相同的模块模型：

| 模块 | 头文件 | 用途 |
| --- | --- | --- |
| `AI` | `rk_mpi_ai.h` | 音频采集 |
| `AO` | `rk_mpi_ao.h` | 音频回放 |
| `AENC` | `rk_mpi_aenc.h` | 音频编码（G.711/AAC 等） |
| `ADEC` | `rk_mpi_adec.h` | 音频解码 |

典型路径为：`AI → AENC →（与 VENC 复用成码流）`；回放则使用 `ADEC → AO`。通过 `RK_MPI_SYS_Bind()` 将模块连接起来。

在设置 AI 通道属性时，请将通道数与 `asound.conf` 保持一致（四通道 = 两路麦克风 + 两路参考）；使用 16,000 Hz 采样率和 `S16_LE` 格式。

## 音频算法（VQE / RockAA）

Rockchip 前端算法——AEC、声学噪声抑制（ANS）和自动增益控制（AGC）——通过 RockAA / VQE 提供：

- `docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf`（VQE 算法指南）
- `docs/zh/audio/Rockchip_Developer_Guide_RockAA_Utils_CN.pdf`（RockAA 工具）
- `docs/zh/audio/Rockchip_Developer_Guide_Sound_Event_Detection.pdf`（声音事件检测）
- `media/common_algorithm/`（通用算法库）

`asound.conf` 中的回声参考通道预留给 VQE 的 AEC 使用。要启用 VQE，请在 AI 通道属性中打开相关算法选项，并确保参考通道数据被正确路由。

## 麦克风阵列测试

`docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf` 介绍了阵列一致性测试。量产时可使用 `project/app/recamera_utils/hw_test/` 下的脚本，或通过 `ai_debug` 录制原始六通道输入并检查每个通道。

要诊断通道顺序问题，可录制一个四通道 WAV 文件，并在 Audacity 中检查其轨道。轻敲或对每个麦克风说话，确认 Mic1、Mic2、Ref、Ref 与 `ttable` 映射一致。

## 常见问题

| 现象 | 原因 | 解决方案 |
| --- | --- | --- |
| `arecord: main:831: audio open error: Device or resource busy` | 直接打开了 `hw:0,0`，绕过了 dsnoop | 使用 `ai_debug` 等虚拟设备 |
| 打开 `ai_*` 时提示 `Unknown PCM` | `/etc/asound.conf` 未生效 | 确认打包了对应 overlay（`RK_POST_OVERLAY` 包含 `overlay-buildroot-asound`），并在设备上检查 `cat /etc/asound.conf` |
| 通道数不正确（期望 4，实际为 6） | 使用了 `hw:0,0` 而不是 `ai_2mic_2ref` | 使用 route 层 |
| AEC 效果差 / 回声残留 | 参考通道缺失或映射错误 | 检查 `ttable` 中的 `2.4` / `3.4`；确认硬件通道 4 是回声参考（需要硬件验证） |
| 录音无声 | 选择了错误的通道（例如只选了 Ch1 / Ch3 / Ch5） | 先录制全部六路原始通道，以识别哪些通道有信号 |
| 回放无声 | RK817 / DSM 路径被关闭，或音量被静音 | 使用 `amixer -c 0 scontrols` 检查；在 `alsamixer` 中取消静音 |
| 采样率不匹配导致回放音调错误 | `plug` 未生效或 ASRC 被关闭 | 确认内核 `CONFIG_SND_SOC_ROCKCHIP_ASRC=y`，并显式设置 `-r 16000` |
| 多进程录音时偶发失败 | `ipc_key` 冲突 | 保证 key 2026 在各应用间唯一，或修改 `asound.conf` 并重新构建 |

## 相关文档

| 文档 | 路径 |
| --- | --- |
| RV 系列 ACodec 开发者指南 | `docs/zh/audio/Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf` |
| VQE 算法介绍 | `docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf` |
| RockAA 工具 | `docs/zh/audio/Rockchip_Developer_Guide_RockAA_Utils_CN.pdf` |
| 麦克风阵列测试 | `docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf` |
| 声音事件检测 | `docs/zh/audio/Rockchip_Developer_Guide_Sound_Event_Detection.pdf` |
| 音频故障排查 | `docs/zh/audio/Rockchip_Trouble_Shooting_Linux_Audio_CN.pdf` |

英文版本位于 `docs/en/audio/` 目录下，文件名类似；`Sound_Event_Detection` 仅提供中文版本。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>