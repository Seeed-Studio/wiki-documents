---
description: 使用两块 XIAO ESP32-C3 Bus Servo Adapter 和基于 Wi-Fi UDP 的 micro-ROS，为 SO-ARM101 主从臂构建有线回退与双无线兼容的低延迟 ROS 2 遥操作链路。
title: 使用 XIAO ESP32-C3 和 micro-ROS 实现 SO-ARM101 有线与无线遥操作
keywords:
  - SO-ARM101
  - XIAO ESP32-C3
  - micro-ROS
  - ROS 2
  - LeRobot
  - Teleoperation
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /soarm101_xiao_microros_wireless_teleoperation
last_update:
  date: 09/20/2026
  author: linao681
createdAt: '2026-07-24'
updatedAt: '2026-09-20'
url: https://wiki.seeedstudio.com/cn/soarm101_xiao_microros_wireless_teleoperation/
---

# 使用 XIAO ESP32-C3 和 micro-ROS 实现 SO-ARM101 有线与无线遥操作

:::note 社区贡献
本教程由社区成员 [@linao681](https://github.com/linao681) 贡献。感谢你与 Seeed Studio 社区分享这个项目！
:::

## 介绍

本教程记录两种控制 SO-ARM101 从臂的方式：

1. **有线主臂 + 无线从臂：** 主臂使用标准 USB 总线舵机驱动板。
2. **无线主臂 + 无线从臂：** 两只机械臂各使用一块 Seeed Studio XIAO ESP32-C3 Bus Servo Adapter。

两种模式下，从臂都通过基于 Wi-Fi UDP 的 micro-ROS 与 ROS 2 通信。无线主臂 XIAO 只读取六个主臂舵机的位置并发布只读状态，不会向主臂写入位置命令。

该实现提供：

- 在 `/joint_states` 上来自从臂全部六个关节的反馈；
- 在 `/joint_command` 上对从臂全部六个关节的控制命令；
- LeRobot 主从关节映射；
- 防止出现意外位置跳变的启动握手；
- 标定、关节限位、命令步长以及总线健康检查；
- 序列号检查、反馈看门狗、停止后保持最后命令以及会话恢复；
- 根据电脑当前 Wi-Fi 地址运行时发现 Agent，热点 IP 变化后通常不需要重新烧录；
- 无线主臂不可用时可回退到有线主臂；
- 自动预飞检查和一条命令完成的遥操作启动。

完整源代码可在 [soarm101-drone-teleop 仓库](https://github.com/linao681/soarm101-drone-teleop)中获取。

:::note

本项目是为未来的机载 SO-ARM101 演示而开发的、在地面测试的原型。本指南仅涵盖机械臂通信和遥操作链路，不提供任何飞行认证的控制或安全系统。

:::

## 系统架构

```text
SO-ARM101 leader
  ├─ 无线：主臂 XIAO ── Wi-Fi / micro-ROS ──┐
  └─ 有线：USB 舵机驱动板 ──────────────────┤
                                          ▼
Ubuntu 22.04 PC
  ├─ LeRobot reads the leader
  ├─ ROS 2 Humble bridge publishes /joint_command
  └─ micro-ROS Agent, UDP port 8888
              │
              │  2.4 GHz Wi-Fi LAN
              ▼
从臂 XIAO ESP32-C3 Bus Servo Adapter
  ├─ micro-ROS publishes /joint_states
  └─ 1 Mbps UART Sync Read/Write
              │
              ▼
SO-ARM101 follower, 6 × STS3215
```

PC 和 XIAO 必须连接到同一个本地网络。演示时可以使用手机热点或专用的 2.4 GHz 接入点。

## 硬件

- 1 × SO-ARM101 主臂
- 1 × SO-ARM101 从臂
- 1 × 用于主臂标定和有线回退的标准 USB 总线舵机驱动板
- 1 × 用于从臂的 XIAO ESP32-C3 Bus Servo Adapter
- 1 × 用于无线主臂模式的额外 XIAO ESP32-C3 Bus Servo Adapter
- 2 × 额定功率正确的机械臂电源
- 1 × Ubuntu 22.04 电脑
- 1 × 2.4 GHz Wi-Fi 网络
- 用于标定和固件烧录的 USB 线缆

该参考固件在标准 5 V SO-ARM101 从臂上测试，通过六个型号为 `777` 的 STS3215 舵机。

:::danger

- 在更换任何舵机线缆前，请先断开舵机电源。
- 使用与你的 SO-ARM101 版本完全匹配的电压。不要将 12 V 电源接到 5 V 机械臂上。
- USB 无法为舵机提供足够的电力。
- 第一次测试请在稳定的工作台上进行，并确保有明显的紧急断电装置。
- 如果在无人机附近测试，请先拆下桨叶。

:::

## 软件要求

已测试的主机配置为：

- Ubuntu 22.04
- ROS 2 Humble
- 支持 Feetech 的 LeRobot
- micro-ROS Agent
- Python 3.10
- PlatformIO

如果尚未安装 micro-ROS Agent 和 PlatformIO，请先安装：

```bash
sudo snap install micro-ros-agent
python3 -m pip install --user platformio
```

在继续之前，请按照 [SO-ARM100/101 LeRobot 指南](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/) 安装 LeRobot 并配置舵机 ID。

## 步骤 1：克隆项目

```bash
git clone https://github.com/linao681/soarm101-drone-teleop.git
cd soarm101-drone-teleop
```

项目中的重要路径为：

```text
firmware/xiao_soarm/          无线从臂 PlatformIO 固件
firmware/xiao_soarm_leader/   无线主臂 PlatformIO 固件
tools/wireless_teleoperate.py ROS 2 与 LeRobot 遥操作桥接
tools/soarm_agent_discovery.py 两块 XIAO 共用的 Agent 发现服务
start_soarm_demo.sh           网络、Agent、机械臂和话题预检
cali/                         主臂和从臂标定文件
```

该仓库分别提供无线从臂和无线主臂的 PlatformIO 固件工程，并包含所需的 ESP32-C3 micro-ROS 库，因此普通用户无需交叉编译 micro-ROS。

## 步骤 2：标定两台机械臂

首先使用标准 USB 总线舵机驱动器标定从臂。将 `/dev/ttyACM0` 替换为正确的端口：

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=follower_recal \
  --robot.calibration_dir="$PWD/cali"
```

然后连接并标定主臂：

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM0 \
  --teleop.id=leader_recal \
  --teleop.calibration_dir="$PWD/cali"
```

这会创建：

```text
cali/follower_recal.json
cali/leader_recal.json
```

:::warning

标定值只适用于一台具体的物理机械臂。不要使用仓库中示例附带的标定值去控制另一台从臂。

:::

### 将从臂标定数据拷入固件

从臂 XIAO 会在使能扭矩前验证舵机 EEPROM。打开：

```text
firmware/xiao_soarm/src/servo_bus.cpp
```

将这三个数组替换为你自己的 `cali/follower_recal.json` 中的数值：

```cpp
constexpr int16_t kHomingOffsets[kJointCount] = {
    /* homing_offset for joints 1 to 6 */
};
constexpr int16_t kRangeMin[kJointCount] = {
    /* range_min for joints 1 to 6 */
};
constexpr int16_t kRangeMax[kJointCount] = {
    /* range_max for joints 1 to 6 */
};
```

期望的顺序为：

```text
shoulder_pan, shoulder_lift, elbow_flex,
wrist_flex, wrist_roll, gripper
```

下面的命令会按正确顺序打印这三个数组：

```bash
python3 - <<'PY'
import json

joints = [
    "shoulder_pan", "shoulder_lift", "elbow_flex",
    "wrist_flex", "wrist_roll", "gripper",
]
with open("cali/follower_recal.json", encoding="utf-8") as calibration_file:
    calibration = json.load(calibration_file)

for key in ("homing_offset", "range_min", "range_max"):
    print(key, [calibration[joint][key] for joint in joints])
PY
```

## 步骤 3：配置 Wi-Fi 和 Agent 发现

将 Ubuntu 电脑和两块 XIAO 连接到同一个 2.4 GHz Wi-Fi 网络。XIAO 固件只保存 Wi-Fi 名称和密码；电脑当前的 Agent 地址由启动器和发现服务在运行时广播。不要把电脑 IP 硬编码到公开固件文件中。

```bash
ip -4 address
```

进入从臂固件目录并创建私有配置文件：

```bash
cd firmware/xiao_soarm
cp src/wifi_config.example.h src/wifi_config.h
```

如果使用无线主臂模式，还要在 `firmware/xiao_soarm_leader` 目录重复这一步。

编辑 `src/wifi_config.h`：

```cpp
#pragma once

const char* WIFI_SSID = "YOUR_2G4_WIFI_SSID";
const char* WIFI_PASS = "YOUR_WIFI_PASSWORD";
```

主臂固件使用 `firmware/xiao_soarm_leader/src/wifi_config.example.h` 中对应的 `#define WIFI_SSID` 和 `#define WIFI_PASS` 占位符。

`wifi_config.h` 已被 Git 忽略，绝不能提交到公共仓库。当前启动器通过 Agent 发现广播电脑当前 Wi-Fi 地址，因此热点 IP 变化后通常不需要重新烧录任一块 XIAO。

:::tip

ESP32-C3 使用 2.4 GHz Wi-Fi。如果手机热点同时支持两个频段，请选择兼容模式或 2.4 GHz 模式。

:::

## 步骤 4：构建并烧录 XIAO 固件

一次只通过 USB 连接一块 XIAO。先运行原生测试和 ESP32-C3 编译，确认通过后再烧录：

```bash
(cd firmware/xiao_soarm && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
(cd firmware/xiao_soarm_leader && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
```

测试和编译通过后，再烧录选定的固件：

```bash
cd firmware/xiao_soarm
pio run -e seeed_xiao_esp32c3 --target upload
pio device monitor -b 115200
```

无线主臂模式下，将烧录和监视命令改为在 `firmware/xiao_soarm_leader` 目录执行。

使用外部电源为从臂供电。成功启动时会包含类似如下的信息：

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` 表示六个舵机 ID 全部有响应。如果标定不匹配，固件仍会上报状态，但会拒绝运动命令。

烧录完成后，USB 线缆只用于串口监视。请保持对应机械臂的外部舵机电源连接。主臂固件只负责关闭扭矩并发布位置/状态；真正执行位置命令的是从臂固件。

## 步骤 5：启动 micro-ROS Agent 并进行预检

在项目根目录运行启动器，它会启动 Agent 和发现服务：

```bash
source /opt/ros/humble/setup.bash
./start_soarm_demo.sh --leader wireless --check
```

启动器会启动 Agent 和发现服务，然后检查所需的 ROS 2 话题。当 XIAO 发现 Agent 后，其串口监视器应显示：

```text
micro-ROS ready
```

ROS 2 接口为：

| 主题 | 消息类型 | 方向 | 标称频率 |
|---|---|---|---|
| `/joint_states` | `sensor_msgs/msg/JointState` | 从臂到 PC | 20 Hz |
| `/joint_command` | `sensor_msgs/msg/JointState` | PC 到从臂 | 最高 30 Hz |

验证反馈：

```bash
source /opt/ros/humble/setup.bash
ros2 topic echo /joint_states --once
ros2 topic hz /joint_states
```

在完成当前姿态启动握手之前，不要发送任意的关节值。

## 步骤 6：运行有线或双无线主从遥操作

选择一种主臂输入方式。有线模式下，通过常规 USB 总线舵机驱动板将主臂连接到电脑；无线模式下，使用外部电源为主臂供电，并让主臂 XIAO 保持连接到配置好的 Wi-Fi。

查找其稳定的串口路径：

```bash
ls -l /dev/serial/by-id/
```

在项目根目录下，导出本地配置：

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_PYTHON="$(command -v python)"
```

首先运行不带运动的预飞检查：

```bash
./start_soarm_demo.sh --leader wireless --check
```

它会检查：

- Wi-Fi SSID 和 Agent IP；
- 所选主臂输入（`wireless` 检查 `/leader/raw_state` 和 `/leader/status`，`wired` 启动时检查 USB 适配器）；
- 主臂和从臂的标定文件；
- micro-ROS Agent；
- `/joint_states` 上来自从臂的实时反馈；
- 是否有其他遥操作进程正在使用同一主臂总线。

如果所有检查都通过，启动遥操作：

```bash
./start_soarm_demo.sh --leader wireless

# 有线主臂回退：
./start_soarm_demo.sh --leader wired
```

桥接程序会读取从臂的初始姿态，并在使能扭矩前反复发布相同的姿态。随后它使用相对映射，因此从臂从当前位置开始，并跟随所选主臂的变化。无线会话恢复后，桥接程序会先平滑追到主臂当前姿态，再恢复正常命令。按下 `Ctrl+C` 停止；从臂会保持最后一次下达的目标位置。

:::warning

停止桥接程序或丢失命令并不会释放力矩。从臂会保持在最后一次下达的目标位置。紧急停止时请断开舵机电源。

:::

## 安全机制

该参考实现包含若干检查机制，旨在让演示更加可预测：

1. **舵机身份检查：** 六个舵机的 ID 和型号必须全部匹配。
2. **EEPROM 标定检查：** 回零偏移和限位必须与编译进固件的从臂标定一致。
3. **当前姿态握手：** 第一条命令必须在测量姿态的 `0.05 rad` 以内。
4. **关节软限位：** 每条命令都必须保持在标定范围内。
5. **单次命令步长限制：** 解锁后，目标在一次命令中变化不得超过 `0.25 rad`。
6. **反馈看门狗：** 如果从臂反馈早于 `0.5 s`，PC 端桥接程序会停止发布。
7. **Wi-Fi 恢复：** 如果 Wi-Fi 在 10 秒内无法恢复，XIAO 会干净地重启。

这些软件检查是对物理急停的补充，但不能替代物理急停。

## 故障排查

### XIAO 一直停留在 `Waiting for micro-ROS Agent`

- 确认电脑和 XIAO 处于同一局域网（LAN）。
- 确认启动器显示了电脑当前 Wi-Fi IPv4 地址，并已启动 Agent 发现服务。
- 确认 Agent 使用的是 UDP 端口 `8888`。
- 检查热点是否启用了客户端隔离。
- 如果防火墙处于启用状态，请允许 UDP 端口 `8888` 通行。

### `servo_mask` 不是 `0x3f`

一个或多个舵机没有响应：

- 断开电源并检查三线总线电缆；
- 确认每个舵机都有从 1 到 6 的唯一 ID；
- 确认电源电压和电流额定值；
- 将舵机总线保持在配置的 1 Mbps 波特率。

### 固件报告 `calib:0`

舵机 EEPROM 与编译进 `servo_bus.cpp` 的数值不匹配。通过 USB 驱动板重新连接从动臂，重新标定，更新三个固件数组，然后再次烧录 XIAO。

### 运动过程中 Wi-Fi 断开

- 将接入点移近一些；
- 将外置天线远离舵机电源线和金属部件；
- 为演示使用专用的 2.4 GHz 网络；
- 在串口诊断输出中观察 RSSI 数值；
- 在舵机断电的情况下对比结果，以识别可能的电源或电磁干扰。

### 无线主臂没有就绪

- 确认主臂 XIAO 发布 `/leader/raw_state` 和 `/leader/status`；
- 确认主臂六个舵机均有响应且扭矩已关闭；
- 确认 `cali/leader_recal.json` 与当前物理主臂匹配；
- 暂时使用 `./start_soarm_demo.sh --leader wired` 回退到有线主臂。

### 关节方向或范围不正确

重新标定两只机械臂，并确认两个 JSON 文件中的关节顺序。同时确认 `servo_bus.cpp` 中的从动臂数组来自当前连接到 XIAO 的同一物理从动臂。

## 验证范围

当前参考配置已进行以下验证：

- 检测到全部六个从动舵机（`servo_mask=0x3f`）；
- `/joint_states` 以大约 20 Hz 的频率发布；
- 主控桥以 30 Hz 的频率发布指令；
- 所有六个关节通过手机热点一起跟随运动；
- 在烧录完成并接入外部机械臂电源后，XIAO 在拔掉 USB 数据线后仍能继续运行。

当前启动器同时支持双无线路径和有线主臂回退。本文不宣称已完成 10 分钟无线耐久测试；如需长时间可靠性结论，请单独执行该测试。

## 参考资料

- [项目源代码](https://github.com/linao681/soarm101-drone-teleop)
- [在 LeRobot 中开始使用 SO-ARM100 和 SO-ARM101](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)
- [XIAO Bus Servo Adapter 入门指南](https://wiki.seeedstudio.com/cn/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

本文档记录的是一个独立开发的集成方案。LeRobot、ROS 2、micro-ROS、PlatformIO 和舵机库仍然受各自许可证约束。
