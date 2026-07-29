---
description: Reachy Mini的Home Assistant集成，通过HACS安装官方集成，实现局域网自动发现、传感器监控与自动化蓝图。
title: Home Assistant 集成
slug: /reachymini_development_cases_home_assistant
keywords:
  - reachy mini
  - home assistant
sku: 100090917，100025004
last_update:
  date: 7/29/2026
  author: ZhuYuan
translation:
  skip: [zh-CN]
createdAt: '2026-07-29'
updatedAt: '2026-07-29'
url: https://wiki.seeedstudio.com/cn/reachymini_development_cases_home_assistant/
---
# Home Assistant 集成

你是否想让 Reachy Mini 控制米家、Aqara、美的、海尔等智能家居设备（如冰箱、空调等）？此项目详细说明了如何使用 Reachy Mini 无代码实现控制，你可以直接将此文档交给 AI，让 AI 帮你安装并实现这一功能。

**面向最终用户：** 通过 HACS 安装官方的 Reachy Mini 集成 — [https://github.com/pollen-robotics/reachy_mini_homeassistant](https://github.com/pollen-robotics/reachy_mini_homeassistant)（自定义仓库 → 集成）。只要机器人与 Home Assistant 处于同一局域网，HA 会在约 30 秒内自动发现它，并创建一张真正的设备卡片，卡片下分组展示各类传感器（sensor）和二进制传感器（binary sensor）。同一个仓库还附带六个自动化蓝图（automation blueprint）。**无需编写 YAML，无需手动接线实体。**

本文档记录的是该集成（以及任何其他监控客户端）所消费的 SDK 侧接口：

- **mDNS / zeroconf 发现协议** — HA 如何在局域网中找到守护进程（daemon）。
- 集成轮询的**现有 REST 端点**，用于组装它对机器人状态的视图。

SDK 并未提供专门的"Home Assistant 聚合"端点。HA 消费方与其他客户端一样，分别请求相同的路由（daemon 状态、应用锁状态、音频混音器、DoA）。那些 HA 风格的语义 —— `awake`、`active_app_transport`、`webrtc_active` —— 完全存在于集成仓库中。

## 发现机制

Reachy Mini 守护进程通过 mDNS 在局域网上以 `_reachy-mini._tcp.local.` 广播自身。Home Assistant 的 zeroconf 组件会根据 TXT 记录中的 `model=ReachyMini` 匹配 Reachy Mini 集成，因此正是这个属性过滤让自动发现变得明确无误。


| TXT 键         | 类型              | 含义                                                                                                                |
| -------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| `unit_id`      | 16 位十六进制字符 | 每台机器人稳定的标识符 —— 音频设备序列号的 SHA-256 截断值。集成用它作为 HA 配置条目（config entry）的 unique-id。 |
| `model`        | 字符串            | `"ReachyMini"`。用作 manifest 过滤器。                                                                              |
| `manufacturer` | 字符串            | `"Pollen Robotics"`。                                                                                               |
| `version`      | 字符串            | 守护进程包版本。                                                                                                    |
| `caps`         | 逗号分隔          | 能力标志：`camera,mic,speaker,motion,apps`。                                                                        |
| `api`          | 字符串            | `"rest+ws"`。                                                                                                       |
| `robot_name`   | 字符串            | 用户可配置的显示名称。                                                                                              |
| `ws_path`      | 字符串            | `/ws/sdk` —— SDK 的 WebSocket 路径。                                                                              |
| `address`      | 字符串            | IP 地址（也可通过 A 记录解析获得）。                                                                                |

可在局域网内任意主机上验证：

```bash
avahi-browse -rt _reachy-mini._tcp        # Linux
dns-sd -Z _reachy-mini._tcp local.        # macOS
dns-sd.exe -B _reachy-mini._tcp           # Windows
Resolve-DnsName reachy-mini.local         # PowerShell
```

跨平台的验证方式：在 Home Assistant 中，只要 HACS 集成已安装且机器人在同一局域网，**设置 → 设备与服务** 页面就会显示 "Discovered: Reachy Mini"（已发现：Reachy Mini）卡片。这才是面向最终用户的真正验证手段 —— 上面的命令行仅用于自动发现静默失败时的调试。

实现位置：`src/reachy_mini/utils/discovery.py`。

## 集成所消费的端点

集成的协调器（coordinator）每 30 秒并行轮询这些端点一次（`asyncio.gather`）。每个端点独立失败 —— 局部故障只会让受影响的实体离线，而不是整台设备。


| 端点                                    | 集成使用的字段                                                                                                                                                                |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET /api/daemon/status`                | `version` → 固件版本；`hardware_id` → unit_id（与 mDNS TXT 交叉校验）；`backend_status.motor_control_mode` → awake + 原始 motor_mode；`backend_status.ready` → 可用性门控 |
| `GET /api/daemon/robot-app-lock-status` | `state` + `holder_name` → active_app、active_app_transport、webrtc_active                                                                                                    |
| `GET /api/state/doa`                    | `angle` → DoA 弧度；`speech_detected` → 语音 VAD                                                                                                                            |
| `GET /api/volume/current`               | `volume` → 扬声器音量                                                                                                                                                        |
| `GET /api/volume/microphone/current`    | `volume` → 麦克风音量                                                                                                                                                        |

集成的协调器（`coordinator.py`）在其上完成 HA 语义塑造：`awake = motor_mode in {"enabled", "gravity_compensation"}`、根据锁状态推导 `active_app_transport` 等等。SDK 从不提供 HA 专属字段；由消费方自行组合。

## 目前尚未暴露的内容

以下信息在 HA 中会很有用，但目前没有任何 SDK 路由暴露它们：

- **CPU / 内存 / 运行时长** —— 宿主进程指标。这些在 Lite 和 Wireless 版本上都可用（它们是守护进程的统计信息，而非机器人硬件传感器）。
- **IMU 俯仰 / 横滚 / 温度** —— 仅 Wireless 版可用（BMI088 只装在 CM4 板上）。在 Lite 上这些值会是 null。

两者日后都可以作为小型增量路由加入（例如 `/api/daemon/host`、`/api/state/imu`），不会破坏任何现有功能。集成会把它们作为额外的扇出目标接收，并暴露为新的实体。

## 不使用集成的备选方案

如果你不想安装这个自定义集成，也可以直接用 Home Assistant 内置的 `rest:` 集成访问同样的端点 —— 每个端点一个 `rest:` 块。代价是你需要自己维护 YAML，并内联编写 Jinja 推导逻辑（`awake`、`webrtc_active` 等）。

```yaml
rest:
  - resource: http://reachy-mini.local:8000/api/daemon/status
    scan_interval: 30
    sensor:
      - name: "Reachy Mini Motor Mode"
        unique_id: reachy_mini_motor_mode
        value_template: "{{ value_json.backend_status.motor_control_mode }}"
      - name: "Reachy Mini Firmware"
        unique_id: reachy_mini_firmware
        value_template: "{{ value_json.version }}"
    binary_sensor:
      - name: "Reachy Mini Awake"
        unique_id: reachy_mini_awake
        value_template: >-
          {{ value_json.backend_status.motor_control_mode in
             ['enabled', 'gravity_compensation'] }}
        device_class: power

  - resource: http://reachy-mini.local:8000/api/daemon/robot-app-lock-status
    scan_interval: 30
    sensor:
      - name: "Reachy Mini Active App"
        unique_id: reachy_mini_active_app
        value_template: "{{ value_json.holder_name | default('none') }}"
    binary_sensor:
      - name: "Reachy Mini WebRTC Active"
        unique_id: reachy_mini_webrtc_active
        value_template: "{{ value_json.state == 'remote_session' }}"
        device_class: connectivity
```

如有需要，可以为 `/api/state/doa`、`/api/volume/current` 和 `/api/volume/microphone/current` 添加更多 `rest:` 块 —— 各字段的确切结构请参见运行中的守护进程上 `/docs` 页面的响应模式（response schema）。

然后调用 `rest.reload` 动作（开发者工具 → 动作）或重启 Home Assistant；实体将出现在 **设置 → 设备与服务 → 实体** 页面，可按 `reachy_mini` 过滤。

## 安装完成后的控制步骤

安装完成 Home Assistant 后，可按如下步骤实现控制：

1. 打开 [http://localhost:8123](http://localhost:8123)。
2. 首次打开是初始化向导：创建管理员账号（姓名/用户名/密码），地区选 China，一路下一步。
3. 进入 **设置 → 设备与服务**（Settings → Devices & Services）。
4. 约 30 秒内应该出现 "Discovered: Reachy Mini" 卡片 → 点击 **添加/Add** 确认即可。
   - 第一次添加时 HA 会自动下载摄像头的 aiortc 依赖，需要联网，请稍等片刻。
5. 如果没出现发现卡片：点击右下角 **添加集成** → 搜索 "Reachy Mini" → 手动填写地址（有线版可填写 127.0.0.1）。

成功后你会看到一个 Reachy Mini 设备，下面挂着：摄像头实时画面、唤醒/睡眠按钮、81 种表情 + 34 种舞蹈下拉框、音量滑块、电机模式选择（disabled 可当软急停），以及语音检测等传感器。

<div align="center">
  <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-home.webp"
  />
</div>

## 设计说明

- SDK 只暴露通用端点 —— daemon 状态、机器人状态、音量、应用锁。**守护进程中不存在任何 HA 风格的语义。**
- HA 专属的推导逻辑（`awake`、`active_app_transport`、`webrtc_active`）完全位于集成仓库的协调器中。修改它们的定义不会触及 SDK。
- 集成被有意设计为能容忍端点缺失 —— 如果 `/api/state/doa` 返回 404（音频被禁用），DoA 相关字段只会变为不可用，设备卡片的其余部分照常工作。
- **无鉴权，仅信任局域网。** 与守护进程上其他所有 `/api/*` 路由的安全姿态一致。**请勿将 8000 端口直接暴露到互联网。**

面向用户的安装 / 配置 / 自动化流程，请参见集成仓库：[https://github.com/pollen-robotics/reachy_mini_homeassistant](https://github.com/pollen-robotics/reachy_mini_homeassistant)。
