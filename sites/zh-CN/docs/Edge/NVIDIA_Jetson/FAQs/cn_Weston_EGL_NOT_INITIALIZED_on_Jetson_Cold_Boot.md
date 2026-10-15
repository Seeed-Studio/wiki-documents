---
description: 在 Seeed Jetson 上出现间歇性的 Weston 冷启动 EGL_NOT_INITIALIZED 问题（已在搭载 R36.4.4 的 reComputer Super J401 上确认）。描述了双 DRM 卡顺序症状、一个 GNOME 建议，以及后续跟进链接。
title: Weston 冷启动失败并报 EGL_NOT_INITIALIZED
tags:
  - JetPack
  - 显示
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
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/cn/weston_egl_not_initialized_jetson_cold_boot/
---

# Weston 冷启动失败并报 EGL_NOT_INITIALIZED

## 介绍

如果你用 **Weston** 替换了默认桌面，在**冷启动**后可能会看到**间歇性**的启动失败：

```text
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

**热重启**有时可以成功。

本页记录了一个**已确认案例**和一个可用的诊断结论，方便遇到相同日志的用户对照症状并继续排查。这**并不**意味着所有 Seeed Jetson 镜像或所有 JetPack 6 启动都受影响。

:::info 已确认案例
使用 Seeed **R36.4.4**（JetPack 6.2）刷写的 **reComputer Super J401**（Jetson Orin Nano Super），并使用 Weston 作为合成器。

类似的 `card0` / `card1` 顺序问题在其他 **Jetson Orin + JetPack 6** 方案中也已在 [NVIDIA Developer Forums](https://forums.developer.nvidia.com/) 上讨论过。如果你在其他 Seeed Orin 产品或 L4T R36.x 镜像上看到相同日志，本 FAQ 仍可作为排查起点——请在下方链接的 GitHub issue 中补充细节。
:::

## 推荐桌面环境

如果你**不需要** Weston，请继续使用 Seeed Jetson 镜像自带的 **GNOME** 桌面。

目前的报告都与将 **Weston** 作为合成器有关（通常是在禁用 GDM 或使用 kiosk/服务方式启动之后）。在已确认案例中，默认 GNOME 是实际可行的规避方案。

## 症状

在已确认的日志中：

- 冷上电：Weston 以 `EGL_NOT_INITIALIZED` 失败。
- 软/热重启：Weston 可能可以启动。
- 失败的启动通常显示 Weston 使用绑定到 `nvidia-drm` / `nv_platform` 的 `/dev/dri/card0`，有时伴随 `Cannot find any crtc or sizes`。
- 成功的启动通常显示 Weston 使用 `/dev/dri/card1`，而 `tegra_drm` 持有另一个节点。

失败日志片段示例：

```text
using /dev/dri/card0
Loading module '.../gl-renderer.so'
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

## 日志所暗示的问题

Seeed 对 [Linux_for_Tegra #50](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50) 的 BSP 评审指出，在 Orin 上 `tegra_drm` 与 `nvidia-drm` 之间存在一个**加载顺序交互**（两者都可以注册 DRM 次设备）。目前没有文档保证哪个驱动会获得 **minor 0**（`/dev/dri/card0`）。

| Weston 失败时的观测 | Weston 启动时的观测 |
| --- | --- |
| Weston 打开 `/dev/dri/card0`；该节点通常是 `nvidia-drm` / `nv_platform` | Weston 打开 `/dev/dri/card1`；`tegra_drm` / host1x 通常持有另一个 card |

冷启动与热启动会改变探测时序，这与间歇性行为相吻合。这更属于 NVIDIA 的 **Weston-on-Tegra** 软件栈问题，而不是载板刷机错误。NVIDIA 尚未就该症状发布专门的修复公告。

## 如果你必须使用 Weston

1. 除非产品确实需要 Weston，否则优先选择 **GNOME**。
2. 将剩余的 Weston EGL/DRM 问题视为 **NVIDIA / 上游** 范畴——请在 [NVIDIA Developer Forums](https://forums.developer.nvidia.com/) 上发帖，并附上 Weston 日志和 `dmesg | grep -i drm`。
3. 要对比一次失败启动与一次成功启动：

```bash
# Which driver owns card0?
readlink -f /sys/class/drm/card0/device/driver
sudo udevadm info /dev/dri/card0
ls -l /dev/dri /dev/dri/by-path
sudo dmesg | grep -i drm
```

Seeed 不提供强制 DRM 探测顺序的官方 BSP 补丁。社区层面的变通方案（重命名 `/dev/dri` 节点、自定义 `modprobe` 时序）**不在本 FAQ 的支持范围内**。

如果你在其他 SKU 或 L4T 版本上复现了该问题，请在 [Linux_for_Tegra #50](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50) 下评论，附上硬件信息、L4T/JetPack 版本以及上述命令的输出。

## 参考资源

- [Seeed Linux_for_Tegra #50 — Weston 冷启动显示 / EGL_NOT_INITIALIZED](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50)
- [Can't enable modeset on boot for Wayland (AGX Orin, JP 6.0)](https://forums.developer.nvidia.com/t/cant-enable-modeset-on-boot-for-wayland/303843)
- [Weston kiosk / nvidia_drm 加载顺序（Orin Nano Super）](https://forums.developer.nvidia.com/t/some-issues-i-found-trying-to-start-weston-automatically-in-a-kiosk-mode-using-systemd/348933)
- [NVIDIA Jetson Linux — Weston (Wayland) (R36.4)](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/SD/WindowingSystems/WestonWayland.html)
- [reComputer Super 入门指南](https://wiki.seeedstudio.com/cn/recomputer_jetson_super_getting_started/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，尽可能确保你在使用产品时的体验顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
