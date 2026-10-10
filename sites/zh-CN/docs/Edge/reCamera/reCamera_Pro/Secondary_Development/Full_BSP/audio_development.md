---
description: Audio capture and playback APIs, microphone-array routing, and audio algorithms on reCamera Pro.
title: Audio Development
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
url: https://wiki.seeedstudio.com/recamera_pro_audio_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Audio Development

This page describes application audio interfaces and the device configuration in the current product firmware. For ordinary C/C++ application builds, use [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain). You need the full BSP source only to modify ALSA, kernel audio, or product audio routing.

## Hardware and Kernel Support

Audio-related kernel options are in `sysdrv/source/kernel/arch/arm64/configs/rv1126b-recamera2.config`:

| Configuration | Meaning |
| --- | --- |
| `CONFIG_SND_SOC_ES7202=y` | Everest ES7202 multichannel ADC for microphone-array capture |
| `CONFIG_SND_SOC_ROCKCHIP_PDM_V2=y` | PDM digital microphone interface v2 |
| `CONFIG_SND_SOC_RK817=y` | RK817 codec (audio in the PMIC; speaker output path) |
| `CONFIG_SND_SOC_RK_DSM=y` | Rockchip digital speaker processing |
| `CONFIG_SND_SOC_ROCKCHIP_ASRC=y` | Asynchronous sample-rate conversion |
| `CONFIG_SND_SOC_ROCKCHIP_MULTI_DAIS=y` | Multiple DAI links; capture and playback use separate DAIs |
| `CONFIG_SND_SOC_DUMMY_CODEC=y` | Dummy codec |
| `CONFIG_SND_HRTIMER=y`, `CONFIG_SND_PCM_TIMER=y` | Timer drivers |

Audio nodes are defined in `rv1126b-recamera2-v1.dts` and the DTSI files it includes. The userspace library source is `media/alsa-lib/`. It is built by `./build.sh media`; outputs are under `output/out/media_out/lib/`.

## Capture Path: Six Hardware Channels → Four Virtual Channels

This key reCamera Pro audio design is defined in `/etc/asound.conf` in an overlay. Source: `project/cfg/BoardConfig_Recamera2/overlay/overlay-buildroot-asound/etc/asound.conf`.

### Three Layers

**Layer 1 · Shared hardware (`dsnoop`)** — allow multiple processes to read the same hardware device:

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

**Layer 2 · Channel mapping (`route`)** — map six physical channels to four virtual channels `[Mic1, Mic2, Ref, Ref]`:

~~~text
pcm.ai_2mic_2ref
  type          route
  slave.pcm     "mic_hw_shared"
  slave.channels 6
  ttable {
      0.0 1    # Hardware Ch0 → output Ch0 (Mic 1)
      1.2 1    # Hardware Ch2 → output Ch1 (Mic 2)
      2.4 1    # Hardware Ch4 → output Ch2 (Reference)
      3.4 1    # Hardware Ch4 → output Ch3 (Reference copy)
  }
~~~

**Layer 3 · Application virtual devices (`plug`)** — provide named devices with automatic format conversion for different modules:

| PCM device | Purpose |
| --- | --- |
| `ai_main` | Main audio input |
| `ai_kws` | Keyword spotting |
| `ai_asr` | Speech recognition (ASR) |
| `ai_debug` | Debugging / raw recording |

All four use `type plug` with `slave.pcm "ai_2mic_2ref"`. Their control devices are:

~~~text
ctl.ai_main / ctl.ai_kws / ctl.ai_asr / ctl.ai_debug  →  type hw; card 0
~~~

### Why This Design Is Used

- **`dsnoop` avoids exclusive access:** ALSA hardware devices are exclusive by default, but KWS, ASR, video-recording audio, and debug recording may need to capture at the same time. `ipc_key 2026` + `ipc_perm 0666` allows multiple processes to share the capture stream.
- **`route` provides the AEC reference signal:** Acoustic Echo Cancellation (AEC) needs a reference for what is currently playing on the speaker. Hardware channel 4 carries this reference and is copied to output channels 2 and 3.
- **`plug` resolves format mismatches:** Modules can require different rates or formats; `plug` converts automatically.

### How to Use It

~~~bash
# Record four channels (2 microphones + 2 references), 16 kHz S16_LE
# arecord -D ai_debug -c 4 -r 16000 -f S16_LE -d 10 /userdata/test.wav

# Record for ASR
# arecord -D ai_asr -c 4 -r 16000 -f S16_LE -d 5 /userdata/asr.wav
~~~

When using the ALSA API, pass `"ai_main"`, `"ai_kws"`, `"ai_asr"`, or `"ai_debug"` as the device name. Do not use `"hw:0,0"`; it is exclusive and does not apply the channel mapping.

> Opening `hw:0,0` directly gives raw six-channel data. For the two-microphone + two-reference layout, use `ai_2mic_2ref` or one of its `plug` wrappers.

## Playback Path

The speaker uses the RK817 codec / RK_DSM. The default ALSA playback device is `default` (`hw:0,x`; verify the exact device number on hardware with `aplay -l`).

~~~bash
# aplay -l                              # List playback devices
# aplay -D default /oem/usr/share/xxx.wav
~~~

`recamera_ipc` includes a test audio file at `project/app/recamera_ipc/common/speaker_test.wav` for a speaker check.

## Application-Level Audio Code

| Path | Contents |
| --- | --- |
| `project/app/recamera_ipc/common/audio/audio.c` / `audio.h` | Main rkipc audio logic: capture, encoding, and multiplexing with video |
| `project/app/recamera_ipc/common/audio/rkaudio_mp3.c` / `.h` | MP3 decoding and playback (for prompts, etc.) |
| `project/app/ao_record_demo/ao_record_demo.c` | Recording demo; its Makefile is a template for linking rockit |
| `project/app/aov_sample/sample_aov_audio.c` | Audio capture in low-power mode |
| `project/app/component/ao_record_service/` | Recording-service component, explicitly collected by `project/app/Makefile` |
| `media/samples/simple_test/simple_ai_get_frame.c` | Minimal capture example |
| `media/samples/simple_test/simple_ai_bind_aenc.c` | Bind capture to encoding |
| `media/samples/simple_test/simple_ai_bind_aenc_external_encoder.c` | Use an external encoder |
| `media/samples/simple_test/simple_adec_bind_ao.c` | Bind decoding to playback |
| `media/samples/simple_test/simple_adec_bind_ao_external_decoder.c` | Use an external decoder |
| `media/samples/simple_test/simple_ao_send_frame.c` | Send frames directly to playback |
| `media/samples/example/audio/sample_ai.c`, `sample_ai_aenc.c` | Complete examples |
| `media/samples/example/test/sample_ai_aenc_adec_ao_stresstest.c` | Audio stress test |

## rockit Audio Modules

When using MPI, audio uses the same module model as video:

| Module | Header | Purpose |
| --- | --- | --- |
| `AI` | `rk_mpi_ai.h` | Audio capture |
| `AO` | `rk_mpi_ao.h` | Audio playback |
| `AENC` | `rk_mpi_aenc.h` | Audio encoding (G.711/AAC, etc.) |
| `ADEC` | `rk_mpi_adec.h` | Audio decoding |

Typical path: `AI → AENC → (multiplex with VENC into a stream)`; playback uses `ADEC → AO`. Connect modules with `RK_MPI_SYS_Bind()`.

When setting AI channel attributes, match the channel count to `asound.conf` (four channels = two microphones + two references); use a 16,000 Hz sample rate and `S16_LE` format.

## Audio Algorithms (VQE / RockAA)

Rockchip front-end algorithms—AEC, Acoustic Noise Suppression (ANS), and Automatic Gain Control (AGC)—are provided through RockAA / VQE:

- `docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf` (VQE algorithm guide)
- `docs/zh/audio/Rockchip_Developer_Guide_RockAA_Utils_CN.pdf` (RockAA tools)
- `docs/zh/audio/Rockchip_Developer_Guide_Sound_Event_Detection.pdf` (sound event detection)
- `media/common_algorithm/` (common algorithm libraries)

The echo-reference channel in `asound.conf` is reserved for VQE's AEC. To enable VQE, enable the relevant algorithm options in the AI channel attributes and make sure the reference-channel data is routed correctly.

## Microphone Array Testing

`docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf` describes array consistency testing. For production, use scripts under `project/app/recamera_utils/hw_test/`, or record the raw six-channel input through `ai_debug` and inspect each channel.

To diagnose channel-order problems, record a four-channel WAV and inspect its tracks in Audacity. Tap or speak into each microphone and confirm that Mic1, Mic2, Ref, Ref match the `ttable` mapping.

## Common Problems

| Symptom | Cause | Resolution |
| --- | --- | --- |
| `arecord: main:831: audio open error: Device or resource busy` | Opened `hw:0,0` directly, bypassing dsnoop | Use a virtual device such as `ai_debug` |
| Opening `ai_*` reports `Unknown PCM` | `/etc/asound.conf` was not applied | Confirm the overlay was packaged (`RK_POST_OVERLAY` includes `overlay-buildroot-asound`) and inspect `cat /etc/asound.conf` on the device |
| Channel count is wrong (expected 4, got 6) | Used `hw:0,0` instead of `ai_2mic_2ref` | Use the route layer |
| Poor AEC / echo remains | Reference channel is missing or mapped incorrectly | Check `ttable` entries `2.4` / `3.4`; verify hardware Ch4 is the echo reference (hardware verification required) |
| Recording is silent | Selected the wrong channels (for example, Ch1 / Ch3 / Ch5 only) | Record all six raw channels first to identify which channels carry a signal |
| No sound during playback | RK817 / DSM path is disabled, or volume is muted | Check with `amixer -c 0 scontrols`; unmute in `alsamixer` |
| Wrong playback pitch due to sample-rate mismatch | `plug` is inactive or ASRC is disabled | Confirm kernel `CONFIG_SND_SOC_ROCKCHIP_ASRC=y` and explicitly set `-r 16000` |
| Intermittent failures when multiple processes record | `ipc_key` conflict | Keep key 2026 unique across applications, or change `asound.conf` and rebuild |

## Related Documents

| Document | Path |
| --- | --- |
| RV-series ACodec Developer Guide | `docs/zh/audio/Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf` |
| VQE Algorithm Introduction | `docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf` |
| RockAA Tools | `docs/zh/audio/Rockchip_Developer_Guide_RockAA_Utils_CN.pdf` |
| Microphone Array Test | `docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf` |
| Sound Event Detection | `docs/zh/audio/Rockchip_Developer_Guide_Sound_Event_Detection.pdf` |
| Audio Troubleshooting | `docs/zh/audio/Rockchip_Trouble_Shooting_Linux_Audio_CN.pdf` |

English versions are under `docs/en/audio/` with similar names; `Sound_Event_Detection` is available only in Chinese.
