---
title: reBot Arm T701 HT VR 遥操作
sidebar_label: VR 遥操作
description: 使用 VR 手柄通过 USB 或 WiFi 串流控制 reBot Arm T701 HT 双臂，完成手柄数据检查、末端位姿跟随和夹爪控制。
keywords:
  - reBot
  - T701 HT
  - VR
  - Quest
  - Pico
  - 双臂遥操作
  - WebXR
slug: /rebot_t701_ht_vr
aliases: ["/rebot_t701_ht_quest"]
last_update:
  date: 11/19/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot Arm T701 HT VR 遥操作

<div className="rebot-page">

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT 双臂机器人" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701-SDK"
  fallbackCount={0}
  ariaLabel="在 GitHub 上为 T701-HT SDK 点亮 Star"
/>

使用 VR 左右手柄控制 T701 HT 对应侧的机械臂，支持末端位姿跟随和夹爪控制。头显浏览器通过 WebXR 读取手柄数据，经 WebSocket 发送到电脑，再由串流服务通过 UDP 转发给双臂控制程序。

:::note[设备支持]

本 Demo 已在 Quest 头显上进行测试。Pico 用户可使用支持 WebXR 的头显浏览器，通过相同的 WebXR → WebSocket → UDP 链路接入。下文以 Quest 为例，提供 USB 和 WiFi 两种连接方式。

:::

<section className="section-card">

## 环境与连接

按 [T701 HT 快速开始的 SDK 安装步骤](https://wiki.seeedstudio.com/cn/rebot_t701_ht_getting_started/#安装-sdk) 获取 SDK 并安装依赖，完成机械臂串口映射、关节与夹爪反馈检查和零点设置。左臂接 CAN1，右臂接 CAN2。

准备 VR 头显和左右手柄。USB 模式另需 USB 数据线，WiFi 模式需头显与电脑连接同一局域网。

以下命令从 SDK 根目录执行。每次打开新终端后，先回到该目录并激活 `t701-ht` 环境。

```bash
conda activate t701-ht
```

</section>

<section className="section-card">

## 启动串流

在第一个终端运行串流界面：

```bash
python Quest_controller_stream/quest_stream_tui.py
```

使用方向键上下选择字段、左右调整值，按 `E` 编辑地址或端口，按 `Enter` 执行按钮。首次启动默认为 WiFi / 8080；界面会保存设置，切换方式时先选择 **Stop Server**，再按对应标签设置模式和端口。

<Tabs defaultValue="usb" groupId="t701-vr-connection">
<TabItem value="usb" label="USB 有线">

#### 连接与参数

在头显上开启开发者模式，用 USB 数据线连接运行 SDK 的电脑，并在头显内允许 USB 调试。在另一终端检查：

```bash
adb devices
```

设备状态应为 `device`；如果显示 `unauthorized`，在头显内确认授权。Ubuntu 未安装 `adb` 时，先执行 `sudo apt install adb`。

将串流界面设为：

| 设置 | 值 |
| --- | --- |
| Mode | USB |
| Force HTTPS | False |
| HTTP Host / Port | 0.0.0.0 / 8080 |
| WS Host / Port | 0.0.0.0 / 8765 |
| UDP IP / Port | 127.0.0.1 / 5005 |
| Verify Port | 5005 |

#### 启动与访问

选择 **Start Server**。程序通过 `adb reverse` 将头显的 8080、8765 端口转发到电脑。在头显浏览器打开：

```text
http://localhost:8080/index.html?ws=ws://localhost:8765
```

网页的 WebSocket 输入框设为 `ws://localhost:8765`。USB 模式使用 **HTTP / WS**，无需 HTTPS 证书；这里的 `localhost` 通过 USB 转发到电脑。

#### 命令行启动（可选）

不使用串流界面时，可从 SDK 根目录执行以下命令，不要与界面服务同时运行：

```bash
python Quest_controller_stream/start_stream_server.py --http-host 0.0.0.0 --http-port 8080 --ws-host 0.0.0.0 --ws-port 8765 --udp-ip 127.0.0.1 --udp-port 5005 --adb auto
```

</TabItem>
<TabItem value="wifi" label="WiFi 无线">

#### 连接与参数

头显与运行 SDK 的电脑连接同一局域网。此方式不依赖 USB 数据线、ADB 或 USB 调试授权。

在电脑终端查看局域网 IP 并检查 OpenSSL：

```bash
hostname -I
openssl version
```

使用电脑在该局域网中的实际 IP，不要选择 Docker、VPN 等虚拟网卡地址。Ubuntu 未安装 OpenSSL 时，执行 `sudo apt install openssl`。

将串流界面设为：

| 设置 | 值 |
| --- | --- |
| Mode | WiFi |
| Force HTTPS | True |
| HTTP Host / Port | 0.0.0.0 / 8080 |
| WS Host / Port | 0.0.0.0 / 8765 |
| UDP IP / Port | 127.0.0.1 / 5005 |
| Verify Port | 5005 |
| Cert File | .certs/quest-controller.crt |
| Key File | .certs/quest-controller.key |

#### 启动与访问

选择 **Start Server**。WiFi 模式使用 **HTTPS / WSS**；证书和私钥不存在时，程序通过 OpenSSL 自动生成自签名证书。

在头显浏览器打开界面显示的 WiFi URL，并确认其中的 IP 是电脑的实际局域网 IP。例如电脑 IP 为 `192.168.1.100` 时：

```text
https://192.168.1.100:8080/index.html?ws=wss://192.168.1.100:8765
```

将示例 IP 替换为电脑实际 IP。首次访问时，按浏览器提示处理自签名证书并重新加载页面。网页的 WebSocket 输入框应为 `wss://电脑实际IP:8765`，不要使用 `localhost` 或 `ws://`。

`HTTP Host` 和 `WS Host` 中的 `0.0.0.0` 表示监听地址，不是头显的访问地址。串流和双臂控制在同一台电脑运行时，UDP 目标仍为 `127.0.0.1:5005`。

#### 命令行启动（可选）

不使用串流界面时，可从 SDK 根目录执行以下命令，不要与界面服务同时运行。`--adb never` 关闭 ADB 转发并自动启用 HTTPS / WSS。

```bash
python Quest_controller_stream/start_stream_server.py --http-host 0.0.0.0 --http-port 8080 --ws-host 0.0.0.0 --ws-port 8765 --udp-ip 127.0.0.1 --udp-port 5005 --adb never
```

</TabItem>
</Tabs>

按所选方式连接后，在头显网页点击 **Start XR Stream**。正常连接时：

| 页面状态 | 预期值 |
| --- | --- |
| WebSocket | Connected |
| XR | Running |
| 左右手柄 | Tracking |

网页会恢复已保存的 WebSocket 地址。切换连接方式后，检查输入框的协议、IP 和端口与所选标签一致，再保存设置。

</section>

<section className="section-card">

## 检查手柄数据

在电脑串流界面选择 **Start Verify**，移动左右手柄，确认包数持续增加、位姿和按键数据随操作变化。

确认后选择 **Stop Verify**，保持串流服务、所选的 USB 或 WiFi 连接和头显 XR 串流运行。Verify 与双臂控制程序使用同一个 UDP 5005 端口，不能同时接收。

| 终端按键 | 功能 |
| --- | --- |
| `1` / `2` / `3` / `4` | 打开 Controls、Left Hand、Right Hand、Logs 页面。 |
| `Tab` | 切换页面。 |
| `Q` | 停止串流服务并退出界面。 |

</section>

<section className="section-card">

## 启动双臂控制

:::warning[启动前清空运动范围]

停止 Verify 和 `udp_receiver_test.py` 等 UDP 5005 接收程序。双臂控制程序收到手柄数据后，会先左臂、再右臂移动到 VR 初始姿态。确认机械臂固定牢靠、取下负载，清空活动范围和回零路径，避开关节与夹爪夹点，并全程现场看护。

:::

另开终端，从 SDK 根目录执行：

```bash
conda activate t701-ht
cd scripts
python t701_ht_vr_dual_cartesian_qp_control.py
```

该入口直接控制双臂，不提供选臂菜单。左右臂分别使用 `T701-HT_robot_param/T701-HT_left.yaml` 和 `T701-HT_right.yaml` 配置。

等待机械臂完成初始定位并显示「开始控制」后，使用以下操作：

| 操作 | 机械臂行为 |
| --- | --- |
| 按住左 / 右手柄的 **Squeeze 握持键** | 对应侧机械臂跟随手柄位姿。 |
| 松开 **Squeeze** | 保持当前位置。 |
| 按住 Squeeze 时操作 **Trigger 扳机** | 控制对应侧夹爪开合。 |
| 按手柄主按键（程序提示为 A 键） | 对应侧机械臂平滑复位到本次初始关节角。 |
| 在控制终端按 `Ctrl+C` | 机械臂以 MIT 模式回零并停止，等待退出流程完成。 |

控制程序退出后，在串流界面按 `Q` 停止服务并退出。

</section>

<section className="section-card">

## 常见问题

| 现象 | 检查与处理 |
| --- | --- |
| USB 网页打不开 | 确认 USB 调试已授权、`adb devices` 显示 `device`，串流服务已启动，并使用 `http://localhost:8080`。 |
| WiFi 网页打不开 | 确认头显与电脑处于同一局域网，使用 `https://电脑实际IP:8080`，按提示处理证书，并检查电脑允许 8080、8765 端口的连接。 |
| WebSocket 在 Connecting / Reconnecting 间切换 | USB 使用 `ws://localhost:8765`，Force HTTPS 为 False；WiFi 使用 `wss://电脑实际IP:8765`。检查网页是否恢复了另一种连接方式的旧设置。 |
| 无法监听 UDP 5005 | 停止 Verify、`udp_receiver_test.py` 或其他占用该端口的接收程序。 |
| 启动后 10 秒内未收到手柄数据 | 检查头显已点击 Start XR Stream、WebSocket 已连接，UDP 目标为 `127.0.0.1:5005`。程序会在初始化机械臂前退出。 |
| 重置设置后连接方式变化 | Reset Defaults 或删除保存配置会恢复 WiFi / 8080。按所选标签重新设置模式和端口；切换模式不会自动恢复另一种方式的端口。 |

</section>

<section className="section-card">

## 桌面界面（可选）

桌面界面为 `Quest_controller_stream/quest_stream_ui.py`，需额外安装 `PyQt5`，使用独立的 `.quest_stream_ui.json` 配置。USB 和 WiFi 的协议与地址要求同上，需在桌面界面中单独设置。

</section>

</div>
