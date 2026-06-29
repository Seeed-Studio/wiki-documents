---
description: 通过 PoE 端口将网络摄像机和工业相机连接到 reServer Industrial
title: reServer Industrial PoE 摄像头使用
keywords:
  - reServer
  - PoE
  - IP camera
  - RTSP
  - industrial camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reserver_industrial_poe_camera_usage
last_update:
  date: 06/18/2026
  author: HaoChen
sku: 114110247
createdAt: '2026-06-15'
updatedAt: '2026-06-18'
url: https://wiki.seeedstudio.com/cn/reserver_industrial_poe_camera_usage/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reServer Industrial 上的 PoE 摄像头使用

reServer Industrial 被设计为一款边缘 AI NVR，配备 **4 个 PoE PSE 以太网端口（LAN1–LAN4）** 和 **1 个上行端口（LAN0）**。你可以通过一根以太网线同时为 **网络 IP 摄像机**（RTSP/ONVIF）和 **工业 PoE 摄像头** 供电并建立连接——无需单独的电源适配器。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

:::info
关于所有以太网端口和 PoE 规格的完整概览，请参阅 [reServer Industrial 硬件接口使用——千兆以太网连接器](https://wiki.seeedstudio.com/cn/reserver_industrial_hardware_interface_usage/#gigabit-ethernet-connectors)。
:::

## 端口概览

| 端口 | 角色 | PoE 输出 | 典型用途 |
| :--- | :--- | :--- | :--- |
| **LAN1 – LAN4** | 摄像头 | 是（802.3af，每个端口最大 15 W） | IP 摄像机、工业 PoE 摄像头 |
| **LAN0** | 上行链路 | 否 | 用于连接路由器/交换机以提供互联网和管理 |

机箱上的 **物理标签**（LAN0–LAN4）是固定的。**Linux 接口名称**（`eth0`、`enP1p1s0` 等）取决于 JetPack 版本和内核——**不要假定存在固定映射关系**。使用步骤 2 将每个物理端口与其接口一一对应。

在连接多个摄像头时，每个 PoE 端口应使用 **独立子网**，以避免出厂默认地址冲突（参见步骤 3 中的表格）。

## 步骤 1：启用 PoE 供电

在连接 PoE 摄像头 **之前**，先在四个 PSE 端口上启用 PoE 输出。该操作流程与 [硬件接口使用——千兆以太网](https://wiki.seeedstudio.com/cn/reserver_industrial_hardware_interface_usage/#gigabit-ethernet-connectors) 中描述的一致。

<Tabs>
<TabItem value="Jetpack 5.1.x" label="Jetpack 5.1.x">

```sh
sudo -i
cd /sys/class/gpio
echo 315 > export
cd gpio315
echo "out" > direction
echo 1 > value
```

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

```sh
sudo apt update
sudo apt install gpiod
gpioset gpiochip2 15=1
```

</TabItem>
</Tabs>

:::info
如果找不到 `gpiochip2`，则 GPIO 芯片名称可能会因镜像或内核不同而变化。运行 `gpioinfo` 并找到用于 PoE 控制的引脚（在许多 reServer Industrial 设备上为 I2C 扩展器 `i2c/1-0021` 上的 gpio-315）。在 `gpioset` 中改用该芯片名称和引脚偏移量。请参阅 [硬件接口使用](https://wiki.seeedstudio.com/cn/reserver_industrial_hardware_interface_usage/#gpio) 中的 GPIO 表。
:::

要禁用 PoE，将 GPIO 值设置为 `0` 而不是 `1`。

:::tip
若要在每次启动时自动启用 PoE，可将上述命令添加到 systemd 服务或 `/etc/rc.local` 中（放在 `exit 0` 之前）。
:::

## 步骤 2：将物理端口映射到 Linux 接口

每个物理 PoE 端口都会映射到一个 Linux 接口（`eth0`、`eth1` 等）。在 reServer Industrial 上，PoE 接口在默认情况下是 **关闭的**，直到 NetworkManager 将其拉起——仅插入摄像头并不会在 `ip -br link` 中显示 `LOWER_UP`，除非接口已被激活。

一次只映射 **一个物理端口**，以便控制变量：

**步骤 1。** 在启用 PoE 的前提下，列出接口并记录候选以太网名称（忽略 `lo`、`docker0`、`l4tbr0`、`rndis0` 和 `usb0`）：

```bash
ip -br link
```

**步骤 2。** 对于每个候选 PoE 接口，创建一个仅链路的 NetworkManager 配置（不需要 IP），并将其拉起。以下是 `eth0` 的示例：

```bash
sudo nmcli connection add type ethernet ifname eth0 con-name POE1 \
  ipv4.method disabled connection.autoconnect yes
sudo nmcli -w 5 connection up POE1
```

`ipv4.method disabled` 使配置保持为仅链路。`-w 5` 将等待时间限制为 5 秒——如果尚未连接摄像头，命令可能会报告超时，但接口仍会被激活。

:::tip 备选方案（快速测试，非持久）
在不使用 NetworkManager 的情况下拉起单个接口：

```bash
sudo ip link set eth0 up
```

这足以完成一次性的端口映射，但在重启后设置会丢失，除非你按上述方式添加持久配置。
:::

**步骤 3。** 仅将摄像头插入 **一个** 物理端口（例如 **LAN1**）。

**步骤 4。** 再次运行 `ip -br link`。显示 `UP` 且带有 `LOWER_UP` 的接口就是该物理端口对应的 Linux 接口。记录该映射关系（例如 **LAN1** → `eth0`）。

**步骤 5。** 拔下摄像头，对 **LAN2**、**LAN3** 和 **LAN4** 重复步骤 3–4。

| 物理端口 | Linux 接口 | 备注 |
| :--- | :--- | :--- |
| LAN1 | _自行填写_ | |
| LAN2 | _自行填写_ | |
| LAN3 | _自行填写_ | |
| LAN4 | _自行填写_ | |
| LAN0 | _自行填写_ | 上行链路——通常连接到路由器 |

当 reServer Industrial 需要访问互联网时，请保持 **LAN0** 与路由器或交换机连接。

## 步骤 3：在 reServer 上配置 IP

reServer 接口和摄像头必须各自拥有位于 **同一子网** 的 IP 地址才能通信。请从摄像头文档或出厂标签上获取摄像头地址（许多摄像头出厂默认地址类似 `192.168.1.64`）。如果地址未知，你可以在电源重启摄像头时，对已映射接口运行 `tcpdump`——某些型号会在启动时广播一次其 IP。

如果你已经在步骤 2 中创建了仅链路配置（例如 `POE1`），则在其中添加静态 IP。否则可以一步创建配置。以下是 **LAN1**（`eth0`）、摄像头 `192.168.1.64`、reServer `192.168.1.10/24` 的示例：

```bash
# Option A — profile already exists from Step 2
sudo nmcli connection modify POE1 ipv4.addresses 192.168.1.10/24
sudo nmcli connection modify POE1 ipv4.method manual
sudo nmcli -w 10 connection up POE1

# Option B — create profile with static IP in one command
sudo nmcli connection add type ethernet ifname eth0 con-name POE1 \
  ipv4.addresses 192.168.1.10/24 ipv4.method manual connection.autoconnect yes
sudo nmcli -w 10 connection up POE1
```

对于多台摄像头，请使用 **每个 PoE 端口连接一台摄像头**，并在每个端口上使用 **不同的子网**：

| PoE 端口 | 连接名称 | 示例 reServer IP | 示例摄像头子网 |
| :--- | :--- | :--- | :--- |
| LAN1 | POE1 | 192.168.1.10/24 | 192.168.1.0/24 |
| LAN2 | POE2 | 192.168.2.10/24 | 192.168.2.0/24 |
| LAN3 | POE3 | 192.168.3.10/24 | 192.168.3.0/24 |
| LAN4 | POE4 | 192.168.4.10/24 | 192.168.4.0/24 |

请根据你的端口映射和摄像头文档替换 `eth0`、连接名称和地址。

## 步骤 4：验证连通性

```bash
ping -c 4 192.168.1.64
```

将地址替换为你的摄像头 IP。`ping` 成功意味着 PoE 物理链路和 reServer Industrial 上的 IP 配置均正确。

在确认连通性后，请参考摄像头厂商文档进行后续操作——例如 RTSP 流 URL、ONVIF 配置、工业 SDK 集成或 NVR 接入。关于在 reServer Industrial 上构建多摄像头 AI 流水线，请参阅 [使用 reServer Jetson 搭建 AI NVR](https://wiki.seeedstudio.com/cn/ai_nvr_with_jetson/)。

## 故障排查

| 问题 | 可能原因 | 解决方案 |
| :--- | :--- | :--- |
| 找不到 `gpiochip2`（JetPack 6） | GPIO 芯片名称因镜像不同而变化 | 运行 `gpioinfo`；使用用于 PoE 的芯片和引脚（gpio-315）。参见 [GPIO 表](https://wiki.seeedstudio.com/cn/reserver_industrial_hardware_interface_usage/#gpio) |
| 摄像头无法上电 | PoE GPIO 未启用 | 重新执行步骤 1；确认 GPIO 值为 `1` |
| 摄像头反复重启 | 功耗超过 15 W | 使用符合 802.3af（≤ 15 W）规格的摄像头，或使用外部电源 |
| 插入摄像头后 `ip -br link` 中仍未显示 `LOWER_UP` | PoE 接口未被激活 | 创建仅链路配置并运行 `nmcli -w 5 connection up`（步骤 2），或执行 `sudo ip link set <if> up` |
| `nmcli connection up` 挂起或超时 | 尚无载波（未连接摄像头） | 在空端口上这是预期行为——使用 `-w 5`；链路仍会被激活。插入摄像头并检查 `ip -br link` |
| 无法识别哪个接口为 UP 状态 | 连接了多根网线 | 断开所有 PoE 端口；一次只映射一个物理端口（步骤 2） |
| 无法 ping 通摄像头 | 子网不匹配或接口错误 | 确认 reServer IP 与摄像头处于同一子网；核对步骤 2 中的端口映射 |
| 摄像头 IP 未知 | 标签上未标注 | 在已映射接口上运行 `sudo tcpdump -i <poe-interface> -n`，然后对摄像头断电重启 |
| 多个摄像头发生冲突 | 使用了相同的默认 IP | 每个摄像头使用一个 PoE 端口并配置隔离子网（参见步骤 3 中的表格） |

## 相关资源

- [reServer Industrial 入门指南](https://wiki.seeedstudio.com/cn/reServer_Industrial_Getting_Started/)
- [reServer Industrial 硬件接口使用](https://wiki.seeedstudio.com/cn/reserver_industrial_hardware_interface_usage/)
- [使用 reServer Jetson 搭建 AI NVR](https://wiki.seeedstudio.com/cn/ai_nvr_with_jetson/)
- [reServer Industrial 数据手册](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
