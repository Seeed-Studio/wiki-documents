---
description: Explains intermittent Weston cold-boot EGL_NOT_INITIALIZED on Seeed Jetson (reComputer Super J401 / R36.4.4) caused by tegra_drm vs nvidia-drm DRI card ordering, and recommends GNOME when Weston is not required.
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
  - R36.4.4
  - reComputer Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png
slug: /weston_egl_not_initialized_jetson_cold_boot
last_update:
  date: 08/13/2026
  author: haochen
createdAt: '2026-08-13'
updatedAt: '2026-08-13'
url: https://wiki.seeedstudio.com/weston_egl_not_initialized_jetson_cold_boot/
---

# Weston Cold Boot Fails with EGL_NOT_INITIALIZED

## Introduction

On Seeed Jetson devices flashed with **Seeed R36.4.4** (JetPack 6.2 family), using **Weston** as the compositor/desktop manager may fail **intermittently after a cold boot** with:

```text
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

A **warm reboot** sometimes succeeds. This is **not** a Seeed carrier-board hardware defect. Official analysis attributes it to a **load-order race** between `tegra_drm` and `nvidia-drm` competing for `/dev/dri/card0` in NVIDIA’s Weston-on-Tegra display stack.

:::info Applicable products
Observed on **reComputer Super J401** (Jetson Orin Nano Super) with Seeed R36.4.4. The same DRM race can appear on other Seeed Orin platforms that run the same L4T display stack **when Weston is used**. It does **not** apply to the default **GNOME** desktop shipped with the Seeed image.
:::

## Recommended desktop

If you **do not** have a hard requirement for Weston:

**Use the GNOME desktop that ships with the Seeed Jetson BSP / demo image.**

GNOME uses the same underlying GPU stack but avoids this Weston-specific cold-boot race. For shipping, demos, and most development, keep the default desktop as **GNOME** and keep documentation consistent with that choice.

## Symptoms

- Cold power-on: Weston fails; logs show `EGL_NOT_INITIALIZED`.
- Soft/warm reboot: Weston may start normally.
- Failed boots often show Weston binding to `/dev/dri/card0` owned by `nvidia-drm` / `nv_platform` without usable CRTC/sizes.
- Successful boots often show Weston using `/dev/dri/card1` while `tegra_drm` holds the lower minor that works for Weston’s EGL path.

Example failure fragment:

```text
using /dev/dri/card0
Loading module '.../gl-renderer.so'
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

## Root cause

Both `tegra_drm` and `nvidia-drm` probe the display hardware at boot. There is **no fixed rule** for which driver receives **minor 0** (`/dev/dri/card0`).

| Winner of `card0` | Typical result with Weston |
| --- | --- |
| `nvidia-drm` first | May report “Cannot find any crtc or sizes”; Weston EGL init fails |
| `tegra_drm` first | `nvidia-drm` moves to `card1`; Weston on the tegra path can start |

Cold vs warm boot changes probe timing, so the failure looks **random**. This is a known class of issue on **NVIDIA Weston-on-Tegra**, not a mis-flash of the Seeed mfi package.

## If you must use Weston

1. Prefer switching back to **GNOME** unless Weston is mandatory for your product.
2. Treat Weston display issues as **upstream / NVIDIA** scope — ask on the [NVIDIA Developer Forums](https://forums.developer.nvidia.com/) with full Weston logs and `dmesg | grep -i drm`.
3. For diagnosis only, compare failed vs successful boots:

```bash
# Which driver owns card0?
readlink -f /sys/class/drm/card0/device/driver
sudo udevadm info /dev/dri/card0
sudo dmesg | grep -i drm
```

Seeed does **not** maintain Weston’s Tegra integration inside the BSP. There is no guaranteed Seeed-side fix for the driver probe race; workarounds that force module order are **unsupported** and may break other display paths. Escalate Weston requirements to NVIDIA and track [Linux_for_Tegra #50](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50) for context (issue closed with the GNOME recommendation).

## Shipping and demo images

- Default interactive desktop for Seeed Jetson images: **GNOME**.
- Wiki and out-of-box guidance should recommend **GNOME** unless a project explicitly documents Weston.
- If a custom image enables Weston, document this cold-boot risk and point operators to this FAQ.

## Resources

- [Seeed Linux_for_Tegra #50 — Weston cold boot display / EGL_NOT_INITIALIZED](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50)
- [NVIDIA Jetson Linux — Weston (Wayland)](https://docs.nvidia.com/jetson/archives/r35.6.5/DeveloperGuide/SD/WindowingSystems/WestonWayland.html)
- [NVIDIA Developer Forums](https://forums.developer.nvidia.com/)
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
