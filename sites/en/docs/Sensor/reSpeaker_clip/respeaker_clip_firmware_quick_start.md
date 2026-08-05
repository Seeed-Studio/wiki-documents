---
description: "End-to-end path from a clean machine to a reSpeaker Clip that boots, records, and is controllable from the host SDK — the baseline before custom or AI-assisted firmware work, and how to decide whether firmware work is the right path."
title: Getting Started with the reSpeaker Clip Firmware SDK
keywords:
  - reSpeaker clip
  - firmware
  - sdk
  - getting started
  - nRF5340
  - Zephyr
  - NCS
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_firmware_quick_start
sku: 100020126
last_update:
  date: 07/28/2026
  author: Ray
createdAt: '2026-07-28'
updatedAt: '2026-07-28'
url: https://wiki.seeedstudio.com/respeaker_clip_firmware_quick_start/
---

# Getting Started with the reSpeaker Clip Firmware SDK

End-to-end path from a clean machine to a reSpeaker Clip that boots, records, and is controllable from the host SDK — the baseline before any custom or AI-assisted firmware work. It also tells you whether firmware work is even the right path for your task.

> **Enclosed device.** The Clip ships in a sealed housing — the SWD/J-Link pads are not reachable without opening the case. **End users upgrade over USB or BLE**, never with a probe. SWD flashing below is the *development* path (bench units with the case off or a debug break-out).

## Introduction

The **Firmware SDK** is the device-side Zephyr RTOS firmware on the Nordic nRF5340 (dual-core: application core + network core). It is for developers who need to **modify device-side behavior** — the audio pipeline, the AT command surface or BLE GATT service, the button / OLED / haptic interaction model, the power or productization strategy, or custom hardware bring-up.

The checked-out firmware source is authoritative; docs summarize it. When they disagree, the source wins.

## Choose the Right Development Path

Not every task needs firmware work. Pick the path that matches your goal:

| You want to… | Use this | Touches firmware? |
|---|---|---|
| Control recording and download files from a host or phone | **Basic SDK** ([sdk/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/sdk/)) or **mobile SDKs** ([mobile/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/mobile/)) | No |
| Modify the audio pipeline, AT/GATT, button/OLED/haptic, power, or hardware | **Firmware SDK** (this guide + the [Firmware Development Guide](/respeaker_clip_firmware_development_guide)) | Yes |
| Have an AI agent modify the repo within the firmware's real constraints | [`skills/clip-dev/`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) skill | Yes |

The Basic and mobile SDKs talk to the Clip over BLE and the device Wi-Fi AP and require no firmware source. They are the supported path for app integration.

**Out of scope for the device firmware** (do not expect these capabilities):

- **Cloud transcription / AI summary** — the Clip records Opus to the SD card; transcription runs off-device. There is no on-device speech-to-text path.
- **BLE real-time audio streaming** — the BLE link carries AT commands, file transfer frames, and an audio *energy-level* visualization notify only. It does not stream live audio.

## Firmware Capabilities and Customization Boundaries

| Capability | Implemented? | Basic/mobile-SDK controllable? | Firmware-customizable? |
|---|---|---|---|
| Recording start/stop/pause/resume/mark | Yes (`AT+START/STOP/PAUSE/RESUME/MARK`) | Yes | Yes (`clip_event.c`, `button.c`) |
| Normal/Enhanced mode | Yes (`AT+MODE=normal\|enhanced`, persisted) | Yes | Yes (`audio.c` + per-mode Kconfig) |
| Opus bitrate/complexity | Yes (per-mode Kconfig) | No — build-time only | Yes (Kconfig) |
| Noise suppression (SpeexDSP NS) | Partial — Enhanced-only, boot-time default, **no runtime AT** (legacy `AT+NOISE` removed) | No | Yes (Kconfig + `config.c`; add an AT handler to expose at runtime) |
| Dereverberation | Partial — Enhanced-only, boot-time default, **no runtime AT** | No | Yes (Kconfig + `config.c`) |
| AGC | Yes — hand-rolled integer, always-on | No — not configurable | No — edit `audio.c` |
| Haptic motor | Yes (`haptic.c`), disabled by default (`CONFIG_CLIP_HAPTIC_MOTOR_ENABLED=n`, but `prj.conf` sets `=y` for this app) | No | Yes |
| File transfer (BLE + Wi-Fi UDP) | Yes (`AT+DOWNLOAD/CANCEL`) | Yes | Yes (`transport.c`, `transfer.c`) |
| BLE real-time audio stream | No (energy-level notify only) | N/A | Out of scope |

The full registered AT command list, protocol frames, architecture, validation matrix, and production/release details live in the [Firmware Development Guide](/respeaker_clip_firmware_development_guide) — this page only summarizes what you need to get started.

## Recording Mode and Audio Pipeline Facts

> Older docs describe `MODE_NORMAL` as **stereo**. That is wrong. Both modes record **mono**.

- **Both modes** record **mono** via an L+R merge. `clip_event.c` always calls `audio_start_recording(AUDIO_MODE_MERGE)`. `MODE_NORMAL` is **not** stereo — the name is legacy.
- **`MODE_NORMAL`** (default) = merge + a hand-rolled DSP path only (delay-aligned merge, 100 Hz high-pass, integer AGC, soft limiter). **No SpeexDSP.**
- **`MODE_ENHANCED`** = merge + SpeexDSP noise suppression and dereverb, gated on `mode == ENHANCED && noise_suppress > 0` (`audio.c:506`). With `noise == 0`, Enhanced behaves like Normal.
- Opus bitrate and complexity are **per-mode Kconfig constants** (`CLIP_NORMAL_*`/`CLIP_ENHANCED_*`), not runtime-settable.
- Set the mode with `AT+MODE=normal|enhanced` (persisted) or `AT+START mode=enhanced` (session-only, not persisted).

## Prerequisites

| Tool | Why | Install |
|------|-----|---------|
| [NCS **v3.3.0**](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/index.html) source | Zephyr + nRF + nrfxlib + mcuboot source tree. **v3.2.1 is dropped** — `main` needs v3.3.0-only Kconfig and will not build against it. | `west` (see [Set Up NCS](#set-up-ncs-v330)) |
| Zephyr SDK **0.16.4** toolchain | `arm-zephyr-eabi-gcc` compiler/debugger for nRF5340 | separate install (see [Set Up NCS](#set-up-ncs-v330)) |
| `west` | Zephyr's meta-tool (build/flash) | `pip install west` |
| [`nrfutil`](https://www.nordicsemi.com/Products/Development-tools/nrf-util) (≥ 8.x, with `device` + `mcu-manager`) | Reset after flash; USB serial DFU | Nordic site |
| Python **3.10+** | Host test/SDK tools (`clip-cli`, `udp_sync`, `decode_opus`) | python.org |
| J-Link (optional, dev only) | SWD flashing on a bench unit | SEGGER |

Install the Python tool dependencies once:

```sh
pip install -r applications/clip/tests/requirements.txt
```

## Get the Source Code

The repo is a **Zephyr module** (it carries its own board, drivers, and libs via `zephyr/module.yml`). Clone it anywhere, then point the NCS environment at it.

> **Verified baseline.** This guide targets firmware tag **`v0.0.9`**, NCS **v3.3.0**, board **`clip/nrf5340/cpuapp`**, on Ubuntu 24.04. Pin the same tag for a reproducible build, instead of cloning the moving `main` branch:

```sh
git clone --branch v0.0.9 https://github.com/Seeed-Studio/reSpeaker_Clip.git
cd reSpeaker_Clip
git describe --tags    # confirm: v0.0.9
```

**Supported hardware:** reSpeaker Clip (nRF5340 + nRF7002 + NPM1300 PMIC). Other board revisions are not covered by this guide.

## Set Up NCS v3.3.0

NCS v3.3.0 is installed as a **west workspace** — the NCS source tree plus a separate **Zephyr SDK toolchain**. This is how the reference setup installs it.

> **Do not use `nrfutil toolchain-manager`.** The `nrfutil` v6.1.7 binary does not actually have the `toolchain-manager`/`self-upgrade` commands, so the firmware CI's NCS-install step is currently broken (the [`firmware.yml`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/.github/workflows/firmware.yml) runs are failing). Use the west steps below instead. If you already have NCS v3.3.0 (e.g. installed via nRF Connect for Desktop), skip to [Enter the NCS environment](#enter-the-ncs-environment--register-this-repo-as-a-module).

### 1. Install build dependencies + `west`

```sh
sudo apt install -y cmake ninja-build g++ make device-tree-compiler \
    python3 python3-pip git curl ca-certificates
sudo pip3 install --break-system-packages west
west --version          # expect west 1.x
```

### 2. Install the NCS v3.3.0 source (west manifest)

This creates the workspace at `~/ncs/v3.3.0` and fetches the NCS modules (zephyr, nrf, nrfxlib, mcuboot, HALs, crypto, …) — about 2 GB from GitHub.

```sh
west init -m https://github.com/nrfconnect/sdk-nrf --mr v3.3.0 ~/ncs/v3.3.0
cd ~/ncs/v3.3.0
west update
```

### 3. Install the Zephyr SDK toolchain (separate)

The west workspace gives the **source**; the **compiler** comes from the Zephyr SDK. Download version **0.16.4** from the [Zephyr SDK releases](https://github.com/zephyrproject-rtos/sdk/releases) (the `*_linux-x86_64.tar.xz` asset), extract it, and run its setup once:

```sh
cd ~
tar xf zephyr-sdk-0.16.4_linux-x86_64.tar.xz     # you downloaded this
cd zephyr-sdk-0.16.4
./setup.sh                                        # registers toolchains + udev rules
# → compiler at ~/zephyr-sdk-0.16.4/arm-zephyr-eabi/bin/arm-zephyr-eabi-gcc
```

> **Linux device access — `nrf-udev` + J-Link udev rules.** To flash or reset over USB/J-Link without root, install `nrf-udev` (Nordic's `.deb`) and the SEGGER udev rules — otherwise `/dev/ttyACMx` and J-Link probes are root-only. See the [nRF Util prerequisites](https://docs.nordicsemi.com/r/bundle/nrfutil/page/guides/installing.html/prerequisites).

### Enter the NCS environment + register this repo as a module

```sh
source ~/ncs/v3.3.0/zephyr/zephyr-env.sh
export ZEPHYR_EXTRA_MODULES=$PWD     # the reSpeaker_Clip checkout
```

> **Why `ZEPHYR_EXTRA_MODULES` is an env var, not a `-D` CMake var.** Kconfig module discovery runs *before* CMake configures. A `-D` would arrive too late, so Kconfig would never see this repo's board (`clip`), drivers, or libraries. Set it in the same shell you build from — or export it in your shell profile.

**Checkpoint — your environment is ready when these all succeed:**

```sh
west --version                   # west 1.x
arm-zephyr-eabi-gcc --version    # (Zephyr SDK 0.16.4) gcc 12.x
python3 --version                # Python 3.10+
echo $ZEPHYR_BASE                # .../ncs/v3.3.0/zephyr
```

## Build the Stock Firmware

```sh
west build --build-dir build-clip --board clip/nrf5340/cpuapp applications/clip
```

For a fully clean rebuild (required after MCUboot patch changes or a stale build dir), add `--pristine`:

```sh
west build --build-dir build-clip --pristine --board clip/nrf5340/cpuapp applications/clip
```

This is a **sysbuild by default** — one command produces the custom signed MCUboot bootloader + the application core + the network-core BLE controller image. The board supplies all the sysbuild glue; no per-app `sysbuild.conf` is needed.

> **Board identifier**: `clip/nrf5340/cpuapp` — **not** `respeaker/...`.

> **Reproducibility — VM vs. device.** The install path targets Ubuntu 24.04 with real network access (the multi-GB NCS fetch needs reliable GitHub connectivity — a QEMU/VM's user-mode networking struggles with it). A QEMU/VM can exercise the *install and build steps* but is **not** a device substitute — QEMU cannot emulate the nRF5340 dual-core, nRF7002, PDM mic, SD, OLED, PMIC, or real USB/BLE behavior. Flash, transport, audio, and recovery must be verified on a real Clip.

## Build the Production Configuration

The low-power variant: UART console and the FS/UART log backends off, idle ≈170 µA (vs. the debug build, where the console leaks ~570 µA). Use this for battery/production builds where the console current matters.

```sh
west build --build-dir build-clip-prod --board clip/nrf5340/cpuapp applications/clip \
  -- -DSNIPPET_ROOT=$(pwd)/applications/clip -DSNIPPET=production
```

`SNIPPET_ROOT` must be an absolute path. The `production` snippet lives in `applications/clip/snippets/production/`.

## Flash and Reset

```sh
west flash --build-dir build-clip          # flash both cores
nrfutil device reset --serial-number <JLINK-SN>
```

> **`--serial-number` targets a specific J-Link.** Omit it only when a single device is attached — with multiple probes the bare `nrfutil device reset` is ambiguous. Find the SN with `nrfutil device list` or printed on the J-Link case.

Two caveats specific to this board:

- **`west flash --reset` does NOT work** here. Always reset separately with `nrfutil device reset`.
- **`--recover` erases both cores** (it clears the net-core access-port lock). Use it only when the net-core AP is `b0n`-locked (e.g. after a prior secure boot) — not as a routine flag.

End users (case on, no probe) skip this step entirely and use USB serial DFU — see [Recover with USB Serial DFU](#recover-with-usb-serial-dfu) below.

## Open the Debug Console

```sh
minicom -D /dev/ttyACM0 -b 921600
```

When a J-Link probe is also connected, the J-Link grabs `ttyACM0` and the Clip's UART0 bridge moves to `ttyACM1` — use whichever port is the "USB Single Serial" (non-J-Link) one.

## Run the Smoke Test

Success criteria: the device boots, answers AT commands over BLE, records a valid Opus file, and pulls it back over Wi-Fi. All AT responses are JSON — success is `{"ok":true,"data":{...}}`, failure is `{"ok":false,"msg":"..."}`.

### Boot & status

The OLED lights up and the device reaches IDLE. Confirm over any AT channel:

```
AT+GSTAT        →  {"ok":true,"data":{"state":"IDLE","battery":..,"mode":..,...}}
AT+VERSION      →  {"ok":true,"data":{"version":"0.0.6",...}}
```

### Record → list → download (over BLE)

`clip-cli.py` is the unified host CLI (BLE default, also Wi-Fi). With the device advertising:

```sh
# status over BLE
python applications/clip/tests/tools/clip-cli.py status

# record ~5s, stop, list sessions
python applications/clip/tests/tools/clip-cli.py record --duration 5
python applications/clip/tests/tools/clip-cli.py list
```

`AT+LIST` should show the new session (sorted newest-first). Pull the Opus files back over BLE and decode one to WAV to confirm it is valid audio:

```sh
python applications/clip/tests/tools/clip-cli.py sync --session <session_id>
python applications/clip/tests/tools/decode_opus.py recordings/<session_id>/0001.opus out.wav   # plays
```

### Wi-Fi pull (UDP sync, CRC32-verified)

The device exposes a Wi-Fi AP once enabled. Over BLE first:

```
AT+WIFI=on     →  {"ok":true,"data":{"ssid":"ClipAP_XXXX",...}}
```

Then from the host, join the AP and sync the session:

```sh
# SSID ClipAP_XXXX (last 4 hex of chip ID) · password 12345678 (default;
# becomes random after the first BLE pairing) · IP 192.168.4.1 · UDP 8089
python applications/clip/tests/tools/udp_sync.py --session <session_id>
```

If all four pass — status, record, list/download with a decodable Opus file, and the Wi-Fi pull — the stock firmware baseline is good.

## Export Build Artifacts

There is no single-zip export yet — the tag-triggered `scripts/build_release.sh`
+ `.github/workflows/release.yml` are not yet implemented. For now, build both variants and copy the four artifacts each manually:

```sh
VERSION=$(grep APP_VERSION_STRING build-clip/clip/zephyr/include/generated/zephyr/app_version.h | cut -d'"' -f2)
mkdir -p output/$VERSION

# Debug
cp build-clip/merged.hex            output/$VERSION/clip-$VERSION-debug-merged.hex
cp build-clip/merged_CPUNET.hex     output/$VERSION/clip-$VERSION-debug-merged_CPUNET.hex
cp build-clip/dfu_application.zip   output/$VERSION/clip-$VERSION-debug-ota.zip
cp build-clip/clip/zephyr/zephyr.signed.bin output/$VERSION/clip-$VERSION-debug-signed.bin
# Production
cp build-clip-prod/merged.hex            output/$VERSION/clip-$VERSION-production-merged.hex
cp build-clip-prod/merged_CPUNET.hex     output/$VERSION/clip-$VERSION-production-merged_CPUNET.hex
cp build-clip-prod/dfu_application.zip   output/$VERSION/clip-$VERSION-production-ota.zip
cp build-clip-prod/clip/zephyr/zephyr.signed.bin output/$VERSION/clip-$VERSION-production-signed.bin
```

Per release: `*-merged.hex` / `*-merged_CPUNET.hex` (programmer), `*-signed.bin` (USB serial DFU), `*-ota.zip` (BLE/USB mcumgr multi-image package).

## Recover with USB Serial DFU

If a bench build left the device in a bad state, use the **1200-baud USB trigger** — no probe, no opening the case. Every clip app has it built in (board-level, `lib/clip_usb_dfu`).

> **Dev recovery vs. official release.** This recovers to a *self-built* `*-signed.bin` you exported above. A published, downloadable release package (GitHub Releases + `scripts/build_release.sh`) is **not yet available** — "return to the official release" is pending that pipeline. Until then, treat this as the development-recovery path; it does not prove a public release.

1. The clip app keeps USB off by default — send `AT+USB=on` over BLE first (samples and custom apps with the default CDC auto-enable USB, so skip this there). Then trigger recovery by opening the CDC-ACM port at 1200 baud:

   ```sh
   python3 -c "import serial; s=serial.Serial('/dev/ttyACMx',1200); s.close()"
   ```

   (Holding the user button while plugging USB also enters recovery.)

2. A new CDC-ACM port appears — **PID `0x8069`** (the running app is `0x0069`; the `0x8000` bit marks bootloader mode; both Seeed VID `0x2886`). Upload the signed release app and reset:

   ```sh
   nrfutil mcu-manager serial image-upload --firmware clip-<version>-signed.bin --serial-port /dev/ttyACMx
   nrfutil mcu-manager serial reset     --serial-port /dev/ttyACMx
   ```

MCUboot verifies the RSA signature and boots the new app; the bootloader partition is never touched. The full guide (BLE OTA, the button path, `mcumgr`, nRF Connect, troubleshooting) is in [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md).

## Where to Go Next

- **System architecture, protocol, update/recovery, validation, production** → [Firmware Development Guide](/respeaker_clip_firmware_development_guide) (the comprehensive reference).
- **Build / flash / power / pitfalls (full reference)** → [CLAUDE.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/CLAUDE.md).
- **Example apps to copy** → [samples/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/samples/).
- **AI-assisted development** → [`skills/clip-dev/`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) — load this skill in your AI agent. Its `SKILL.md` plus nine references already encode the project's real constraints, including that **runtime commands for bitrate, codec complexity, AGC, noise suppression, and dereverb do not exist** — audio mode is `normal` or `enhanced` only.

A stock build that boots, records, and is controllable from the Basic SDK (`clip-cli` / SenseCraft Voice app) is the prerequisite for any AI-assisted or custom firmware work on this repo.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
