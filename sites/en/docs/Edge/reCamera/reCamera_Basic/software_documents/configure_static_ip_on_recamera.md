---
description: This wiki demonstrates how to configure a static IP address on reCamera.
title: Configure Static IP on reCamera
keywords:
  - Edge
  - reCamera
  - Static IP
  - Network
image: https://files.seeedstudio.com/wiki/reCamera/static_ip_banner.png
slug: /configure_static_ip_on_recamera
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899,108990119,108990120,E20245041001,100018917, 100041077, 100029708, 100074316
sidebar_position: 9
last_update:
  date: 04/13/2026
  author: Samuel
createdAt: '2026-04-13'
updatedAt: '2026-04-14'
url: https://wiki.seeedstudio.com/configure_static_ip_on_recamera/
---

# Configure Static IP on reCamera

This document explains how to configure a static IP address on reCamera (Buildroot system). The configuration includes three steps: edit the config file, set static network parameters, and restart the network service for verification.

## Static IP Configuration

### Step 1: Edit the network configuration file

Run the following command in the reCamera terminal:

```bash
sudo vi /etc/network/interfaces
```

### Step 2: Set static IP parameters for `eth0`

Configure `eth0` as a static interface. Update the values based on your actual network, and make sure the `address` does not duplicate any other IP address in the same LAN:

```bash
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
    address 192.168.2.100
    netmask 255.255.255.0
    gateway 192.168.2.1
```

If you also need to set DNS manually:

```bash
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
```

### Step 3: Restart networking and verify

Apply the new settings without rebooting:

```bash
sudo /etc/init.d/S40network restart
```

Then verify the `eth0` address:

```bash
ip addr show eth0
```

If the output includes your configured `address`, the static IP is configured successfully.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/static_ip_output.png" /></div>

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
