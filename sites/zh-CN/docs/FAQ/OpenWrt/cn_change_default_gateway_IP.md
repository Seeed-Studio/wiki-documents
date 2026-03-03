---
description: OpenWrt-常见问题解答
title: 如何在 OpenWrt 中更改默认网关 IP？
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/change_default_gateway_IP
last_update:
  date: 2023/6/21
  author: Seraphina
---

<!-- 问题1：如果我将 OpenWrt 路由器连接到默认网关 IP 为 192.168.2.1 的现有路由器，该怎么办？ -->

Seeed 的 OpenWrt 镜像已预配置了必要的网络设置。对于涉及将 Raspberry Pi CM4 的双千兆以太网载板连接到现有路由器的场景，您可能只需要更改一个网络设置。如果现有路由器的默认网关 IP 设置为 192.168.2.1，而这与 OpenWrt 的默认网关 IP 相同，则需要按以下步骤更改 OpenWrt 上 LAN 接口的默认 IP：

- **步骤 1.** 打开一个网页浏览器，并通过输入 **192.168.2.1** 登录到 OpenWrt 门户。

- **步骤 2.** 导航到 **System > TTYD Terminal**，并使用 **root** 作为用户名登录。

- **步骤 3.** 打开以下文件：

```sh
vi /etc/config/network
```

- **步骤 4.** 按如下方式更改 LAN 接口的静态 IP 地址：

```sh
config interface 'lan'
        option type 'bridge'
        option ifname 'eth0'
        option proto 'static'
        option ipaddr '192.168.3.1'
        option netmask '255.255.255.0'
        option ip6assign '60'
```

**注意：** 此处将静态 IP 更改为 **192.168.3.1**。不过，您可以输入任何您选择的 IP 地址。

- **步骤 5.** 重启路由器：

```sh
reboot
```