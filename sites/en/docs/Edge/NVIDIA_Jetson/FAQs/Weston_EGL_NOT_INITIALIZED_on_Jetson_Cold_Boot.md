---
description: Intermittent Weston cold-boot EGL_NOT_INITIALIZED on Seeed Jetson (confirmed on reComputer Super J401 with R36.4.4). Describes the dual-DRM card-order symptoms, a GNOME recommendation, and links for follow-up.
title: Weston Cold Boot Fails with EGL_NOT_INITIALIZED
tags:
  - JetPack
  - Display
  - Weston
  - reComputer Super
keywords:
  - jetson
  - weston
  - EGL_NOT_INITIALIZED
  - tegra_drm
  - nvidia-drm
  - GNOME
  - JetPack 6
  - L4T R36
  - reComputer Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png
slug: /weston_egl_not_initialized_jetson_cold_boot
last_update:
  date: 08/17/2026
  author: haochen
createdAt: '2026-08-13'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/weston_egl_not_initialized_jetson_cold_boot/
---

# Weston Cold Boot Fails with EGL_NOT_INITIALIZED

## Introduction

If you replace the default desktop with **Weston**, you may see an **intermittent** failure after a **cold boot**:

```text
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

A **warm reboot** sometimes succeeds.

This page records a **confirmed case** and a working diagnosis so that others who hit the same logs can match symptoms and follow up. It is **not** a claim that every Seeed Jetson image or every JetPack 6 boot is affected.

:::info Confirmed case
**reComputer Super J401** (Jetson Orin Nano Super) flashed with Seeed **R36.4.4** (JetPack 6.2), using Weston as the compositor.

Similar `card0` / `card1` ordering issues with Weston have also been discussed on the [NVIDIA Developer Forums](https://forums.developer.nvidia.com/) for other **Jetson Orin + JetPack 6** setups. If you see the same logs on another Seeed Orin product or L4T R36.x image, this FAQ still applies as a starting point — please add details on the GitHub issue linked below.
:::

## Recommended desktop

If you **do not** need Weston, stay on the **GNOME** desktop that ships with the Seeed Jetson image.

The reports so far are about **Weston** as compositor (often after disabling GDM or using a kiosk/service start). Default GNOME is the practical workaround used in the confirmed case.

## Symptoms

In the confirmed logs:

- Cold power-on: Weston fails with `EGL_NOT_INITIALIZED`.
- Soft/warm reboot: Weston may start.
- Failed boots often show Weston using `/dev/dri/card0` bound to `nvidia-drm` / `nv_platform`, sometimes with `Cannot find any crtc or sizes`.
- Successful boots often show Weston using `/dev/dri/card1`, with `tegra_drm` holding the other node.

Example failure fragment:

```text
using /dev/dri/card0
Loading module '.../gl-renderer.so'
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

## What the logs suggest

Seeed BSP review of [Linux_for_Tegra #50](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50) points to a **load-order interaction** between `tegra_drm` and `nvidia-drm` on Orin (both can register DRM minors). There is no documented guarantee which driver receives **minor 0** (`/dev/dri/card0`).

| Observed when Weston fails | Observed when Weston starts |
| --- | --- |
| Weston opens `/dev/dri/card0`; that node is often `nvidia-drm` / `nv_platform` | Weston opens `/dev/dri/card1`; `tegra_drm` / host1x often holds the other card |

Cold vs warm boot can change probe timing, which matches the intermittent behavior. This belongs to NVIDIA’s **Weston-on-Tegra** stack rather than a carrier-board flash error. NVIDIA has not published a dedicated fix notice for this symptom.

## If you must use Weston

1. Prefer **GNOME** unless the product truly requires Weston.
2. Treat remaining Weston EGL/DRM issues as **NVIDIA / upstream** — post on the [NVIDIA Developer Forums](https://forums.developer.nvidia.com/) with Weston logs and `dmesg | grep -i drm`.
3. To compare a failed boot vs a working boot:

```bash
# Which driver owns card0?
readlink -f /sys/class/drm/card0/device/driver
sudo udevadm info /dev/dri/card0
ls -l /dev/dri /dev/dri/by-path
sudo dmesg | grep -i drm
```

Seeed does not ship a supported BSP patch that forces DRM probe order. Community workarounds (renaming `/dev/dri` nodes, custom `modprobe` timing) are **out of scope** for this FAQ.

If you reproduce this on another SKU or L4T version, comment on [Linux_for_Tegra #50](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50) with hardware, L4T/JetPack version, and the commands above.

## Resources

- [Seeed Linux_for_Tegra #50 — Weston cold boot display / EGL_NOT_INITIALIZED](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50)
- [Can't enable modeset on boot for Wayland (AGX Orin, JP 6.0)](https://forums.developer.nvidia.com/t/cant-enable-modeset-on-boot-for-wayland/303843)
- [Weston kiosk / nvidia_drm load order (Orin Nano Super)](https://forums.developer.nvidia.com/t/some-issues-i-found-trying-to-start-weston-automatically-in-a-kiosk-mode-using-systemd/348933)
- [NVIDIA Jetson Linux — Weston (Wayland) (R36.4)](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/SD/WindowingSystems/WestonWayland.html)
- [reComputer Super Getting Started](https://wiki.seeedstudio.com/recomputer_jetson_super_getting_started/)

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
