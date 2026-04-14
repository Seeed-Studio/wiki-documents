---
description: 本 Wiki 演示如何在 reCamera 上配置静态 IP 地址。
title: 在 reCamera 上配置静态 IP
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
createdAt: "2026-04-13"
updatedAt: "2026-04-13"
url: https://wiki.seeedstudio.com/cn/configure_static_ip_on_recamera/
---

# 在 reCamera 上配置静态 IP

本文档解释了如何在 reCamera（Buildroot 系统）上配置静态 IP 地址。配置包括三个步骤：编辑配置文件、设置静态网络参数，以及重启网络服务进行验证。

## 静态 IP 配置

### 步骤 1：编辑网络配置文件

在 reCamera 终端中运行以下命令：

```bash
sudo vi /etc/network/interfaces
```

### 步骤 2：为 `eth0` 设置静态 IP 参数

将 `eth0` 配置为静态接口。根据您的实际网络更新以下值，并确保 `address` 不与同一局域网中的任何其他 IP 地址重复：

```bash
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
    address 192.168.2.100
    netmask 255.255.255.0
    gateway 192.168.2.1
```

如果您还需要手动设置 DNS：

```bash
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
```

### 步骤 3：重启网络并验证

无需重启，应用新设置：

```bash
sudo /etc/init.d/S40network restart
```

然后验证 `eth0` 地址：

```bash
ip addr show eth0
```

如果输出中包含您配置的 `address`，则静态 IP 配置成功。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/static_ip_output.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供全方位的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
