---
description: 通过 USB 以完全无头方式运行 A603 Jetson 载板，共享主机的网络，并在没有键盘的情况下从错误的启动配置中恢复
title: A603 的无头设置、网络共享与启动恢复
keywords:
  - reComputer
  - A603
  - headless
  - USB gadget
  - recovery
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /headless_setup_and_recovery_for_a603
last_update:
  date: 08/07/2026
  author: Jonathan van der Maas
---

A603 可以完全通过其 W6 Micro-USB 接口进行配置和操作：在刷机完成后，全程不需要显示器、键盘、以太网线或 WiFi 模块。本文档记录了在 JetPack 6.2（L4T R36.4.3）上的完整无头工作流：通过 USB gadget 网络进行 SSH 访问，通过主机为开发板提供互联网，以及在启动菜单不接受键盘输入的情况下，从错误的启动配置中恢复。

## 通过 USB gadget 网络进行 SSH

刷机完成后，开发板在每次启动时都会在 W6 Micro-USB 接口上启用一个 USB gadget 网络，无需任何配置：

```
Jetson   l4tbr0   192.168.55.1
Host     (USB)    192.168.55.100
```

将 W6 连接到主机，然后通过 SSH 连接到开发板：

```bash
ssh <username>@192.168.55.1
```

实用说明：

- 线缆必须是数据型 Micro-USB 线。仅供电线缆在电气上与什么都没发生是无法区分的：开发板会上电，但主机上不会出现任何网络接口。如果接口没有出现，请先用其他设备测试线缆，再考虑调试其他问题。
- USB 集线器对 gadget 链路是透明的，可以正常工作。
- 在 macOS 上，该接口显示为一个 “Linux for Tegra” 硬件端口；在 Linux 上，它是地址为 192.168.55.100 的 `usb0`/`enx...` 接口。
- 从主机上消失的 gadget 接口是一个可靠的确认信号，表明开发板确实已经断电，这很有用，因为 A603 在机箱内没有可见的电源指示灯。在断电前，请先正常关机（`sudo poweroff`），等待大约 15 秒，并确认接口已经消失。

## 通过主机为开发板提供互联网

开发板的默认路由已经指向主机（192.168.55.100），因此主机只需要转发数据包并通过自己的上行链路对其进行 NAT。

在 Linux 主机上：

```bash
sudo sysctl -w net.ipv4.ip_forward=1
sudo iptables -t nat -A POSTROUTING -o <uplink, e.g. wlan0> -j MASQUERADE
```

在 macOS 主机上，pf 对两件事比较挑剔：规则顺序（放在 Apple anchors 之后的 `nat` 规则会报错 “Rules must be in order”；它必须位于 translation 部分）以及 Apple 内置的 anchors（它们必须在加载的规则集中重新声明，否则 macOS 自身的防火墙规则会被覆盖）。一个可用的规则集示例：

```bash
sudo sysctl -w net.inet.ip.forwarding=1
cat > /tmp/pf-jetson.conf <<'EOF'
scrub-anchor "com.apple/*"
nat-anchor "com.apple/*"
nat on en0 inet from 192.168.55.0/24 to any -> (en0)
rdr-anchor "com.apple/*"
dummynet-anchor "com.apple/*"
anchor "com.apple/*"
load anchor "com.apple" from "/etc/pf.anchors/com.apple"
EOF
sudo pfctl -f /tmp/pf-jetson.conf
sudo pfctl -E
```

将 `en0` 替换为主机的上行接口。sysctl 设置和 pf 规则集在主机重启后都不会保留，因此每次重启后都需要重新执行。

:::note
如果在 NAT 建立后，开发板上的 `apt` 出现卡住的情况：NAT 仅支持 IPv4，但 DNS 会优先返回 Ubuntu 镜像的 IPv6 地址，而 apt 会先尝试这些地址再回退。将 apt 固定为使用 IPv4：

```bash
echo 'Acquire::ForceIPv4 "true";' | sudo tee /etc/apt/apt.conf.d/99force-ipv4
```
:::

## 无键盘的启动实验

A603 的 UEFI/extlinux 启动菜单在整个超时时间内都不接受任何端口上的键盘输入，无论是有线还是无线。`/boot/extlinux/extlinux.conf` 中 `DEFAULT` 指向的条目是什么，就总是启动什么。

:::caution
切勿让 `DEFAULT` 指向未经测试的启动条目。如果该条目破坏了 USB gadget 网络（自定义内核和设备树可能会这样），开发板将变得不可达，且没有键盘回退，恢复就需要使用下面的 RCM 流程。
:::

一个让启动实验更安全的保护网：一个 systemd 定时器，在每次启动后大约 180 秒将 `DEFAULT` 重置为已知可用的条目，除非存在一个保持标志文件。

```bash
# /usr/local/sbin/a603-boot-revert.sh
#!/bin/sh
[ -e /etc/a603-keep-boot-default ] && exit 0
sed -i 's/^DEFAULT .*/DEFAULT <known-good-label>/' /boot/extlinux/extlinux.conf
```

使用 oneshot 服务和定时器（`OnBootSec=180`）后，任何实验的工作流程变为：

1. `sudo rm /etc/a603-keep-boot-default`（拉起安全网）
2. 将 `DEFAULT` 指向实验性条目，重启
3. 如果实验成功：`sudo touch /etc/a603-keep-boot-default`，再将 `DEFAULT` 设回实验性条目（在你 SSH 登录前，定时器可能已经将其恢复了，所以要检查）
4. 如果开发板变得不可达：断电重启，它会自动从已知可用的条目启动

在进行任何内核或设备树实验之前，先备份原厂内核和 DTB，并记录它们的 md5 校验和，这样你始终可以确认哪些文件是哪一个。

## 在没有 USB 或键盘的情况下进行最后手段恢复

如果开发板启动到一个完全没有可用 USB 的系统，仍然可以通过 RCM（恢复模式）以无头方式进行恢复：

1. A603 没有恢复按键。在上电的同时，将 W7 引脚 3（FORCE_RECOVERY）与 W7 引脚 4（GND）短接，保持约 2 秒后松开。在主机上验证：`lsusb` 显示 `0955:7523`。
2. 在带有匹配 L4T BSP（`Linux_for_Tegra`）的 Linux 主机上，在不刷机的情况下启动刷机用 initrd：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --initrd --showlogs \
     jetson-orin-nano-devkit-super internal
```

3. initrd 会启用自己的 USB 网络。通过 SSH 登录（在链路本地地址上使用 root/root），挂载 NVMe 并修复启动配置：

```bash
mount /dev/nvme0n1p1 /mnt
sed -i 's/^DEFAULT .*/DEFAULT <known-good-label>/' /mnt/boot/extlinux/extlinux.conf
```

:::caution
当你只需要 initrd 时，不要传入 `--flash-only` 或 `--network usb0`。使用 `--network usb0` 时脚本会继续执行实际刷机，而中断的刷机可能会擦除 QSPI，彻底破坏启动链。
:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
