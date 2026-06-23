---
description: Seeed Jetson DevelopTool 常见问题与故障排查技巧——涵盖刷机、SSH、VNC、网络共享等内容。
title: 常见问题
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - FAQ
  - troubleshooting
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_faq
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/cn/jetson_developtool_faq/
---

## 刷机

**问：进入 Recovery 模式后，“Detect Device” 没有显示任何设备。**

- 检查 USB-C 线是否支持数据传输（而不仅仅是充电线）。
- 在 Linux 上，用 `lsusb | grep NVIDIA` 检查。设备应显示为 `NVIDIA Corp. APX`。
- 在 Windows 上，通过 WSL2 进行 USB 透传需要 `usbipd`。先运行 `usbipd list` 检查设备是否出现，然后运行 `usbipd attach --wsl --busid <ID>` 进行透传。
- 尝试更换 USB 接口，优先使用主板上的 USB 3.0 接口（避免使用集线器）。

**问：刷机过程中失败并报错。**

- 确保 PC 与 Jetson 之间的网线已连接（有些 BSP 刷机脚本即使通过 USB 刷机也需要网线）。
- 确认磁盘至少有 20 GB 的可用空间。
- 重新进入 Recovery 模式再试。单次失败不会导致设备变砖。

**问：刷机耗时超过 15 分钟。**

- 这种情况不常见。检查 USB 线是否插在 USB 3.0 接口上。USB 2.0 会明显更慢。

---

## SSH / 连接

**问：无法通过 SSH 连接到 Jetson。**

- 确认 Jetson 与 PC 处于同一网络，或者已启用 [PC Network Sharing](/cn/jetson_developtool_remote_development)。
- 确认 Jetson 上的 SSH 服务正在运行：`sudo systemctl status ssh`
- 检查 IP 地址——可以使用 Jetson Init 串口向导，或在路由器的 DHCP 表中查看。

**问：SSH 能连接但立刻断开。**

- Jetson 可能内存不足。使用 `free -h` 检查，并考虑通过 [Skills](/cn/jetson_developtool_skills) 模块启用交换分区（swap）。

---

## VNC / 远程桌面

**问：通过 VNC 连接后屏幕是黑的。**

- Jetson 的显示服务器可能未运行。尝试：`sudo systemctl restart gdm3`
- 如果没有连接物理显示器，可能需要在 `/etc/X11/xorg.conf` 中配置虚拟显示。

**问：浏览器中的 noVNC 显示 “Disconnected”。**

- 确认 Jetson 上的 VNC 服务正在运行：`ps aux | grep vncserver`
- 检查 5900 端口（或配置的 VNC 端口）是否被防火墙阻止。

---

## 应用市场

**问：安装应用时报错 “Docker not found”。**

- 先使用 [Skills](/cn/jetson_developtool_skills) 模块安装 Docker，或运行：`curl -fsSL https://get.docker.com | sh`

**问：Docker 镜像拉取失败。**

- 这通常是网络问题。确保 Jetson 可以访问互联网——如有需要，可使用 [PC Network Sharing](/cn/jetson_developtool_remote_development)。
- 如果处在代理环境下，请在 PC Network Sharing 选项卡中启用 **Auto Proxy Forward**。

---

## Skills

**问：某个 skill 执行时报权限错误。**

- 大多数 skill 需要 `sudo` 权限。请确保 SSH 用户已配置免密 sudo，或者在 skill 日志提示时输入密码。

**问：我自定义的 OpenClaw skill 没有显示出来。**

- 将 skill 文件放入 `skills/openclaw/` 后，请重启 DevelopTool。该工具会在启动时加载自定义 skill。

---

## 技术支持与产品交流

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
