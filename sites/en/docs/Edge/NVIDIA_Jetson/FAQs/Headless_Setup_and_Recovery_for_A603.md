---
description: run the A603 Jetson carrier board fully headless over USB, share the host's internet with it, and recover from bad boot configurations without a keyboard
title: Headless Setup, Internet Sharing and Boot Recovery for the A603
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
createdAt: '2026-08-07'
url: https://wiki.seeedstudio.com/headless_setup_and_recovery_for_a603/
updatedAt: '2026-08-07'
---

The A603 can be provisioned and operated entirely over its W6 Micro-USB port: no monitor, no keyboard, no Ethernet cable and no WiFi module are needed at any point after flashing. This page documents the full headless workflow on JetPack 6.2 (L4T R36.4.3): SSH access over the USB gadget network, giving the board internet through the host computer, and recovering from a bad boot configuration on a board whose boot menu accepts no keyboard input.

## SSH over the USB gadget network

After flashing, the board brings up a USB gadget network on the W6 Micro-USB port at every boot, with no configuration needed:

```
Jetson   l4tbr0   192.168.55.1
Host     (USB)    192.168.55.100
```

Connect W6 to the host and SSH to the board:

```bash
ssh <username>@192.168.55.1
```

Practical notes:

- The cable must be a data Micro-USB cable. Power-only cables are electrically indistinguishable from nothing happening: the board powers on, but no network interface appears on the host. If the interface does not show up, test the cable with another device before debugging anything else.
- USB hubs are transparent to the gadget link and work fine.
- On macOS the interface appears as a "Linux for Tegra" hardware port; on Linux it is a `usb0`/`enx...` interface with address 192.168.55.100.
- The gadget interface vanishing from the host is a reliable confirmation that the board has actually powered off, which is useful because the A603 has no power LED visible in an enclosure. Before pulling power, shut down cleanly (`sudo poweroff`), wait about 15 seconds, and confirm the interface is gone.

## Internet for the board through the host

The board's default route already points at the host (192.168.55.100), so the host only has to forward packets and NAT them out its own uplink.

On a Linux host:

```bash
sudo sysctl -w net.ipv4.ip_forward=1
sudo iptables -t nat -A POSTROUTING -o <uplink, e.g. wlan0> -j MASQUERADE
```

On a macOS host, pf is picky about two things: rule ordering (a `nat` rule placed after Apple's anchors fails with "Rules must be in order"; it must sit in the translation section) and Apple's built-in anchors (they must be re-declared in the loaded ruleset or macOS's own firewall rules are clobbered). A working ruleset:

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

Replace `en0` with the host's uplink interface. Neither the sysctl nor the pf ruleset survives a host reboot, so re-run after every restart.

:::note
If `apt` on the board hangs once the NAT is up: the NAT is IPv4-only, but DNS returns IPv6 addresses first for the Ubuntu mirrors, and apt tries those before falling back. Pin apt to IPv4:

```bash
echo 'Acquire::ForceIPv4 "true";' | sudo tee /etc/apt/apt.conf.d/99force-ipv4
```
:::

## Boot experiments without a keyboard

The A603's UEFI/extlinux boot menu accepts no keyboard input, wired or wireless, on any port, for the entire timeout. Whatever `DEFAULT` points at in `/boot/extlinux/extlinux.conf` is what boots, always.

:::caution
Never leave `DEFAULT` pointing at an untested boot entry. If that entry breaks the USB gadget network (custom kernels and device trees can), the board becomes unreachable with no keyboard fallback, and recovery requires the RCM procedure below.
:::

A safety net that makes boot experiments survivable: a systemd timer that resets `DEFAULT` to a known-good entry about 180 seconds after every boot, unless a keep-flag file exists.

```bash
# /usr/local/sbin/a603-boot-revert.sh
#!/bin/sh
[ -e /etc/a603-keep-boot-default ] && exit 0
sed -i 's/^DEFAULT .*/DEFAULT <known-good-label>/' /boot/extlinux/extlinux.conf
```

With a oneshot service and a timer (`OnBootSec=180`), the workflow for any experiment becomes:

1. `sudo rm /etc/a603-keep-boot-default` (arm the net)
2. Point `DEFAULT` at the experimental entry, reboot
3. If it works: `sudo touch /etc/a603-keep-boot-default`, set `DEFAULT` back to the experimental entry (the timer may already have reverted it before you SSH in, so check)
4. If the board becomes unreachable: power cycle, and it boots the known-good entry on its own

Before any kernel or device-tree experiment, back up the stock kernel and DTB and record their md5 sums, so you can always prove which files are which.

## Last-resort recovery without USB or keyboard

If the board boots something that has no working USB at all, it can still be recovered headlessly through RCM (recovery mode):

1. The A603 has no recovery button. Short W7 pin 3 (FORCE_RECOVERY) to W7 pin 4 (GND) while applying power, hold about 2 seconds, release. Verify from the host: `lsusb` shows `0955:7523`.
2. From a Linux host with the matching L4T BSP (`Linux_for_Tegra`), boot the flashing initrd without flashing:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --initrd --showlogs \
     jetson-orin-nano-devkit-super internal
```

3. The initrd brings up its own USB network. SSH in (root/root over the link-local address), mount the NVMe and fix the boot configuration:

```bash
mount /dev/nvme0n1p1 /mnt
sed -i 's/^DEFAULT .*/DEFAULT <known-good-label>/' /mnt/boot/extlinux/extlinux.conf
```

:::caution
Do not pass `--flash-only` or `--network usb0` when you only want the initrd. With `--network usb0` the script proceeds to actually flash, and an aborted flash can erase QSPI and break the boot chain entirely.
:::

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
