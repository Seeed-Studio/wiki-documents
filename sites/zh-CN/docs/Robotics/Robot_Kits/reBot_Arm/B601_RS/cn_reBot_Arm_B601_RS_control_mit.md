---
description: 本教程介绍如何使用 rebot_control 通过 MotorBridge 与 CAN 总线，对 reBot Arm B601-RS 进行 MIT 位置控制，含夹爪、温度保护与安全回零。
title: reBot Arm B601-RS 入门 MIT 位置控制
keywords:
  - reBot
  - B601-RS
  - MIT
  - MotorBridge
  - RobStride
  - CAN
  - 机械臂
  - 夹爪
  - 温度保护
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_mit_control
sku: 100019336
last_update:
  date: 2026-08-10
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-08-04'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_mit_control/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS MIT 位置控制入门指南

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?id=1057521963559" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="https://github.com/LAN-GER/rebot_control/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Mode-MIT%20Position-yellow.svg" alt="MIT Mode" />
</p>

<p align="center">
  <strong>6+1 DOF · RobStride · CAN @ 1 Mbps · MIT 位置控制 · 温度保护 · 安全回零 · 开源 Python 接口</strong>
</p>

[MotorBridge](https://github.com/motorbridge/motorbridge) 是面向 RobStride / Damiao 等电机的 Python CAN 控制 SDK。[rebot_control](https://github.com/LAN-GER/rebot_control) 在此之上封装了面向 **reBot Arm B601-RS** 的 MIT 位置控制接口：YAML 配置、独立关节限速、MOS 温度三级保护，以及 Esc / Ctrl+C / `stop()` 触发的平滑回零。

本教程帮助你完成：环境准备 → CAN 配置 → 运行示例 → 作为库二次开发。

:::caution 重要安全提示
- **本项目仅提供控制接口，不包含软件关节限位或工作空间限位。** 你设置的目标角度会直接下发给电机。
- **请将机械臂限制在约 70% 工作空间内运行。** 超出工作空间长时间停留可能导致二号关节电机进入堵转保护，机械臂可能掉落。
- 首次使用请用**小角度、低速度**测试，并确认周围无遮挡、人员远离工作半径。
:::

---

## 项目特点

1. **MIT 位置控制**  
   默认 200 Hz 持续发送 MIT 位置指令；各关节独立速度限制，控制环内做速度平滑。

2. **6+1 电机支持**  
   J1–J6 为机械臂关节，**J7（CAN ID 7）为末端夹爪**，统一用 `set_joint_angles` / `set_joint_angle` 控制。

3. **三级温度保护**  
   实时监控各电机 MOS 温度：报警继续运行 → 高温缓慢回零后失能 → 紧急失能（不回零）。

4. **安全退出与回零**  
   Esc / Ctrl+C / `arm.stop()` 触发 smoothstep 轨迹缓慢回零；回零中再次 Ctrl+C 可立即中止并失能。

5. **YAML 配置驱动**  
   CAN 通道、温度阈值、回零参数、电机 `kp`/`kd` 均在 `config/rebotarm_rs.yaml` 中配置，改参数无需改代码。

6. **可二次开发**  
   分层清晰（配置层 / 接口层 / 示例层），可直接 `from rebot import ReBotRSMITController` 作为库调用。

---

## 规格参数

本教程硬件由 [矽递科技 Seeed Studio](https://www.seeedstudio.com/) 提供。

| 参数 | 规格 |
|------|------|
| 机械臂型号 | reBot Arm B601-RS Assembled Kit with Gripper |
| 自由度 | 6+1（含夹爪） |
| 活动半径 | 754.7 mm（含夹爪） / 587.5 mm（无夹爪） |
| 负载能力 | 额定负载 2.5 kg / 最大负载 5 kg |
| 关节运动范围 | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / 夹爪: 345° ~ 0° |
| 重复定位精度 | 0.1 mm |
| 自重 | 6.7 kg |
| 伺服电机 | RobStride 06 × 3 / RobStride 00 × 4（含夹爪） |
| 通信方式 | CAN Bus @ 1 Mbps |
| 工作电压 | DC 48V |
| 电源 | DC 48V 15A |
| 工作温度 | -20°C ~ 50°C |
| 控制方式 | PC |

### 本工程中的电机映射

| 关节序号 | CAN ID | 型号 | 说明 |
|---------|--------|------|------|
| J1 | 1 | RS06 | 基座 |
| J2 | 2 | RS06 | |
| J3 | 3 | RS06 | |
| J4 | 4 | RS00 | |
| J5 | 5 | RS00 | |
| J6 | 6 | RS00 | 腕关节 |
| J7 | **7** | RS00 | **末端夹爪** |

### 支持的软件能力（本仓库）

| 能力 | 支持状态 |
|------|---------|
| MIT 位置控制 | ✅ |
| 关节独立限速 | ✅ |
| 夹爪控制（CAN ID 7） | ✅ |
| MOS 温度监控与三级保护 | ✅ |
| 安全回零 / 紧急失能 | ✅ |
| YAML 配置 | ✅ |
| Python 库调用 | ✅ |
| 正/逆运动学（Pinocchio） | ❌（见 [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)） |
| MeshCat 仿真 | ❌（见上方仓库） |

### 关节电机参数

| 参数 | RobStride 00 | RobStride 06 |
|------|-------------|--------------|
| 额定电压 | 48V | 48V |
| 额定电流 | 4.7 Apk ± 10% | 14.3 Apk ± 10% |
| 峰值电流 | 15.5 Apk ± 10% | 57 Apk ± 10% |
| 额定扭矩 | 5 N.m | 11 N.m |
| 峰值扭矩 | 14 N.m | 36 N.m |
| 额定转速 | 100 rpm ± 10% | 100 rpm ± 10% |
| 空载最大转速 | 315 rpm ± 10% | 480 rpm ± 10% |
| 减速比 | 10 : 1 | 9 : 1 |
| 控制接口 | CAN @ 1 Mbps | CAN @ 1 Mbps |
| 控制模式 | MIT / Speed / Position / Torque | MIT / Speed / Position / Torque |

## 材料清单（BOM）

| 部件 | 数量 | 是否包含 |
|--|--|--|
| reBot Arm B601-RS 机械臂 | 1 | ✅ |
| CANABLE / PCAN-USB 等 CAN 适配器 | 1 | ✅ |
| 电源适配器 (DC 48V 15A) | 1 | ✅ |
| USB-C 线缆 | 1 | ✅ |
| 夹爪 | 1 | ✅ |

## 环境要求

| 项目 | 要求 |
|------|------|
| **Python** | 3.10+ |
| **操作系统** | Ubuntu 22.04+（推荐） |
| **通信接口** | CAN 接口（默认 `can0`） |
| **电源要求** | DC 48V 15A |
| **依赖** | `motorbridge`、`pyyaml`；可选 `pynput`（Esc 键） |

---

## 安装步骤

### 步骤 1. 克隆仓库

```bash
git clone https://github.com/LAN-GER/rebot_control.git
cd rebot_control
```

### 步骤 2. 安装依赖

```bash
pip install motorbridge pynput pyyaml
```

:::tip
`pynput` 用于 Esc 键监听。未安装时仅 Esc 功能失效，Ctrl+C 与 `arm.stop()` 仍然有效。
:::

### 步骤 3. 配置 CAN 接口

```bash
# 查看接口（PCAN-USB 等）
sudo modprobe peak_usb   # 若使用 PEAK 适配器
ip -br link

# 设置 can0 波特率为 1 Mbps（RobStride 默认）
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 up type can bitrate 1000000
```

:::caution
USB CAN 适配器重新插拔后，通常需要再次执行上述 `ip link` 配置。
:::

### 步骤 4.（可选）调整配置文件

编辑 `config/rebotarm_rs.yaml`：

| 配置 | 说明 | 默认值 |
|---|---|---|
| `can.channel` | CAN 接口名 | `can0` |
| `can.host_id` | 主机 ID | `0xFD` |
| `control.control_hz` | MIT 指令发送频率（非运动速度） | 200 Hz |
| `control.telemetry_hz` | 温度读取频率 | 2 Hz |
| `temperatures.alarm_c` | 温度报警阈值 | 80°C |
| `temperatures.return_zero_c` | 高温回零阈值 | 125°C |
| `temperatures.disconnect_c` | 紧急失能阈值 | 140°C |
| `return_zero.max_speed_deg_s` | 普通回零峰值速度 | 30°/s |
| `return_zero.thermal_max_speed_deg_s` | 高温触发的回零峰值速度 | 30°/s |
| `return_zero.min_time_s` | 最短回零时间 | 3.0 s |
| `return_zero.settle_time_s` | 回零到位后保持时间 | 0.30 s |
| `motors` | 电机 ID / 型号 / MIT `kp` / `kd` | 见 YAML |

YAML 中未填写的项使用代码默认值；填写不存在的键会直接报错，便于发现笔误。

---

## 代码结构

```
rebot_control/
├── config/
│   └── rebotarm_rs.yaml            # CAN / 电机 / 温度 / 回零
├── rebot/
│   ├── __init__.py                 # 公共 API
│   ├── config.py                   # 配置加载与校验
│   └── controller.py               # ReBotRSMITController
└── examples/
    ├── _bootstrap.py               # 路径引导 + 等待到位辅助
    ├── quick_start.py              # 教程 1：快速开始
    ├── custom_config.py            # 教程 2：指定配置
    ├── monitor_status.py           # 教程 3：状态监控
    ├── single_joint_adjust.py      # 教程 4：单关节 + 夹爪
    ├── read_joint_angles.py        # 教程 5：读实际位置
    ├── stop_options.py             # 教程 6：停止选项
    ├── recommended_structure.py    # 教程 7：推荐结构
    └── mit_position_control.py     # 完整可编辑演示
```

分层说明：

- **配置文件**：可调参数的单一来源。
- **配置层**：`load_config()` → `ControllerConfig`。
- **接口层**：纯控制逻辑，不硬编码演示参数。
- **示例层**：目标角度、速度与运行流程。

---

## 功能说明

### MIT 控制与速度平滑

- `control_hz`（默认 200 Hz）只决定**指令发送频率**。
- 实际运动速度由 `set_max_speeds([...])` 决定（单位：度/秒）。
- `set_joint_angles()` 只更新**目标**；控制环按限速逐步把**发送角度**逼近目标。

:::tip
若设完目标后立刻调用 `stop()`，可能几乎看不到向目标的运动。示例中使用 `wait_for_command_targets()`（见 `examples/_bootstrap.py`）等待发送角度接近目标后再回零。
:::

### 连接与使能顺序

`connect()` 内部顺序为：**注册电机 → 切 MIT 模式 → 使能 → 读取当前机械位置**（作为目标初值，避免使能后突然跳动）。RobStride 的 `mechPos (0x7019)` 需在使能后才可稳定读取。

被动读位置场景（教程 5）在 `connect()` 后调用 `disable_motors()` 失能，即可手动推动机械臂并持续读取角度。

### 三级温度保护

| 阈值（默认） | 行为 |
|-------------|------|
| ≥ 80°C | 温度报警（每个电机每次超温边沿只报一次），继续运行 |
| ≥ 125°C | 停止运动，按高温回零峰值速度缓慢回零后失能 |
| ≥ 140°C | 立即紧急失能，**不回零** |

### 安全回零

回零使用 **smoothstep** 轨迹。总时长为：

```
duration = max(min_time_s, 各关节按峰值速度估算所需时间)
```

其中峰值速度取 `max_speed_deg_s`（普通）或 `thermal_max_speed_deg_s`（高温）。默认二者均为 **30°/s**，`min_time_s` 为 **3.0 s**。

| 退出方式 | 行为 |
|---------|------|
| Esc / 第一次 Ctrl+C / `arm.stop()` | 缓慢回零 → 失能 → 关闭 CAN |
| 回零过程中第二次 Ctrl+C | 立即中止回零并失能 |
| 通信异常 | 紧急失能，不尝试回零 |

### 单位约定

| 场景 | 单位 |
|------|------|
| 外部 API（角度、速度） | 度、度/秒 |
| MotorBridge MIT 内部 | 弧度、弧度/秒 |

---

## 调用教程

以下示例均从**项目根目录**运行。每个脚本顶部有 **Expected motion / 预期动作**，启动时也会打印 `[Expected / 预期]` 一行，便于对照学习。

| 教程 | 文件 | 命令 |
|------|------|------|
| 1. 快速开始 | `examples/quick_start.py` | `python3 examples/quick_start.py` |
| 2. 指定配置 | `examples/custom_config.py` | `python3 examples/custom_config.py` |
| 3. 状态监控 | `examples/monitor_status.py` | `python3 examples/monitor_status.py` |
| 4. 单关节+夹爪 | `examples/single_joint_adjust.py` | `python3 examples/single_joint_adjust.py` |
| 5. 读实际位置 | `examples/read_joint_angles.py` | `python3 examples/read_joint_angles.py` |
| 6. 停止选项 | `examples/stop_options.py` | `python3 examples/stop_options.py default` |
| 7. 推荐结构 | `examples/recommended_structure.py` | `python3 examples/recommended_structure.py` |
| 完整演示 | `examples/mit_position_control.py` | `python3 examples/mit_position_control.py` |

### 1. 快速开始（`quick_start.py`）

**预期动作**：J1 以约 15°/s 转到 +20°，其余关节与夹爪保持 0°；到位后缓慢回零并失能。

```bash
python3 examples/quick_start.py
```

流程：`start()` → `set_max_speeds()` → `set_joint_angles()` → **等待到位** → `stop()`。

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/quick_start/quick_start.mp4" title="视频演示 - 快速开始" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 2. 指定配置文件（`custom_config.py`）

```bash
python3 examples/custom_config.py
python3 examples/custom_config.py config/rebotarm_rs.yaml
```

**预期动作**：J1 → +15°（约 15°/s），其余为 0°，然后回零。

---

### 3. 运行中监控状态（`monitor_status.py`）

```bash
python3 examples/monitor_status.py
```

**预期动作**：J1 → +30°；终端持续打印目标 / 发送 / MOS 温度。按 **Esc** 或 **Ctrl+C** 结束并回零。

说明：

- **目标 vs 发送**：发送角度会滞后于目标（限速平滑）。
- **温度**：读 `arm.last_temperatures` 即可，无需自己轮询 CAN。

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/monitor_status/monitor_status.mp4" title="视频演示 - 运行中监控状态" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 4. 单关节微调与夹爪（`single_joint_adjust.py`）

```bash
python3 examples/single_joint_adjust.py
```

**默认目标**：

| J1 | J2 | J3 | J4 | J5 | J6 | J7 夹爪 |
|----|----|----|----|----|----|---------|
| +25° | +15° | +15° | -15° | 0° | 0° | **180°** |

`joint_id`：1–6 为臂关节，**7 为夹爪（CAN ID 7）**。

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/single_joint_adjust/single_joint_adjust.mp4" title="视频演示 - 单关节微调与夹爪" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 5. 读取实际位置（`read_joint_angles.py`）

```bash
python3 examples/read_joint_angles.py
```

**预期动作**：

1. `connect()`：切 MIT 模式并使能（建立通信），读取当前角度作为目标初值。
2. `disable_motors()`：立即失能，便于手动推动机械臂。
3. 终端以约 **30 Hz** 持续打印各关节实际角度；手动改变姿态时读数应随之变化。
4. 按 **Ctrl+C** 结束；`stop(return_to_zero=False)` 关闭 CAN，**不回零**。

本示例**不调用** `start()`，因此不会启动 MIT 控制线程，也不会下发运动目标。

**代码流程**：

```python
arm.connect()           # MIT → 使能 → 读当前角度
arm.disable_motors()    # 失能，手臂可手动推动

while True:
    actual = arm.read_joint_angles()  # 约 30 Hz
    print(actual)

# Ctrl+C 后
arm.stop(return_to_zero=False, wait=True)
```

:::tip
`read_joint_angles()` 会同步访问 CAN（依次读取 7 个电机的 `mechPos`），实际频率受总线往返时间限制。示例目标为 30 Hz；若单次读取耗时较长，实际频率可能低于 30 Hz。在 MIT 控制运行中监控**下发进度**时，用 `get_command_angles()` 即可，无需高频调用 `read_joint_angles()`。
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/read_joint/read_joint_angles.mp4" title="视频演示 - 读取实际位置" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 6. 安全停止选项（`stop_options.py`）

各模式先让 J1 运动到约 +20°，再按模式停止：

```bash
python3 examples/stop_options.py default      # 缓慢回零后失能（推荐）
python3 examples/stop_options.py no_return    # 不回零，直接失能
python3 examples/stop_options.py async        # stop(wait=False) + wait_until_stopped()
python3 examples/stop_options.py emergency    # 紧急失能，不回零
```

:::danger
`no_return` / `emergency` 会让机械臂停在非零姿态并失能，请确认周围安全、必要时用手扶住。
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/stop_options/stop_options.mp4" title="视频演示 - 安全停止选项" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 7. 推荐程序结构（`recommended_structure.py`）

演示 `try` / `except` / `finally`，确保异常时也能安全 `stop()`。

```bash
python3 examples/recommended_structure.py
```

---

### 完整参数演示（`mit_position_control.py`）

在文件顶部修改 `TARGET_ANGLES`（长度 7）与 `JOINT_SPEEDS_DEG_S`，然后运行：

```bash
python3 examples/mit_position_control.py
```

默认示例：J1 → +50°（20°/s），其余与夹爪为 0°；终端刷新目标 / 发送 / 温度；Esc / Ctrl+C 回零退出。

:::danger
MIT 模式下机械臂仍可能较快运动。请保证人员与设备远离工作半径，并限制在约 70% 工作空间内。
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/mit_position_control/mit_position_control.mp4" title="视频演示 - 完整参数演示" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## 作为库调用

### 最小示例

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()  # 自动加载 config/rebotarm_rs.yaml

arm.start(enable_esc=True)
arm.set_max_speeds([15.0] * 7)
arm.set_joint_angles([20.0, 0, 0, 0, 0, 0, 0])  # J1–J6 + 夹爪 J7

# 需要自行等待运动完成，再 stop；参见 examples/quick_start.py
arm.stop()  # 缓慢回零 → 失能 → 关闭 CAN
```

### 指定配置与夹爪

```python
from rebot import (
    ReBotRSMITController,
    load_config,
    GRIPPER_JOINT_ID,
)

arm = ReBotRSMITController(load_config("config/rebotarm_rs.yaml"))
arm.start()
arm.set_max_speeds([20.0] * 7)
arm.set_joint_angles([25, 15, 15, -15, 0, 0, 0])
arm.set_joint_angle(GRIPPER_JOINT_ID, 180.0)  # 夹爪 = J7
```

### 被动读取实际位置

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()
arm.connect()           # MIT → 使能 → 读当前角度
arm.disable_motors()    # 失能，便于手动推动

actual = arm.read_joint_angles()
print(actual)

arm.stop(return_to_zero=False, wait=True)  # 关闭 CAN，不回零
```

### 控制器生命周期

**MIT 运动控制**：

```
创建 → start() → set_max_speeds() → set_joint_angles() / set_joint_angle() → … → stop()
```

**被动读位置**（不下发运动）：

```
创建 → connect() → disable_motors() → read_joint_angles() → … → stop(return_to_zero=False)
```

### 主要 API

| 方法 / 属性 | 说明 |
|------------|------|
| `connect()` | 连接 CAN、切 MIT、使能后读当前角度；`start()` 内部会自动调用 |
| `disable_motors()` | 失能所有电机，不关闭 CAN（便于手动推动后读位置） |
| `start(enable_esc=True, install_signal_handlers=True)` | 启动控制与温度线程 |
| `set_joint_angles(angles_deg)` | 设置 7 个目标角度（度） |
| `set_joint_angle(joint_id, angle_deg)` | 设置单个关节 / 夹爪（1–7） |
| `set_max_speeds(speeds_deg_s)` | 设置 7 个最大速度（度/秒） |
| `get_target_angles()` / `get_command_angles()` | 目标 / 平滑发送角度 |
| `read_joint_angles()` | 同步读实际机械位置（度）；会占用 CAN |
| `last_temperatures` | 各电机 MOS 温度 |
| `is_stopped` | 安全停止是否完成 |
| `stop(return_to_zero=True, wait=True)` | 停止（默认回零） |
| `request_stop(..., emergency=True)` | 高级停止 / 紧急失能 |

导出常量：`GRIPPER_MOTOR_ID = 7`，`GRIPPER_JOINT_ID = 7`。

---

## FAQ

- **`Permission denied` / 无法打开 can0**  
  确认 CAN 接口已 `up`，且当前用户有权限访问网络设备。必要时使用 `sudo` 配置 `ip link`，或检查 udev 规则。

- **电机无响应 / 使能失败**  
  1. 确认波特率为 1 Mbps；  
  2. 确认 `config/rebotarm_rs.yaml` 中 `channel`、`host_id`、电机 ID 与实机一致；  
  3. USB CAN 重新插拔后需重新执行 `ip link`。

- **设了角度但几乎不动**  
  `set_joint_angles()` 只改目标。请设置合理的 `set_max_speeds()`，并等待发送角度逼近目标后再 `stop()`。参考 `examples/quick_start.py`。

- **夹爪不动作**  
  夹爪为 **J7 / CAN ID 7**。`set_joint_angles` 必须传入 **7 个数**，最后一个为夹爪；或使用 `set_joint_angle(7, angle)`。

- **读实际位置超时 / 读不到角度**  
  `mechPos` 需在 MIT 模式并使能后才可稳定读取。教程 5 使用 `connect()` 完成使能后再 `disable_motors()` 失能，即可手动推动并持续读取。若 `ensure_mode` 或读参数超时，请检查 CAN 接线、终端电阻与电机供电。

- **温度报警刷屏**  
  当前实现为边沿触发 + 滞回去抖：同一超温过程每个电机只报警一次；温度降到 `alarm_c - 2°C` 以下后才会再次报警。

- **二号关节堵转保护 / 机械臂掉落**  
  常见于超出约 70% 臂展工作空间并长时间停留。请将机械臂断电再上电清除保护，并缩小目标角度与停留范围。

- **通信异常后行为**  
  控制环通信失败时程序会**紧急失能且不回零**，避免在错误通信下继续运动。

- **与 Pinocchio / MeshCat / 重力补偿教程的关系**  
  本仓库专注 MIT 位置控制接口。运动学、轨迹仿真与重力补偿请参考：[reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) 及 Seeed Wiki《Pinocchio 与 MeshCat 入门》。

---

## 联系方式

- **项目仓库**: [https://github.com/LAN-GER/rebot_control](https://github.com/LAN-GER/rebot_control)
- **技术支持 / Issue**: [https://github.com/LAN-GER/rebot_control/issues](https://github.com/LAN-GER/rebot_control/issues)
- **论坛**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## 参考文档

- [MotorBridge SDK](https://github.com/motorbridge/motorbridge)
- [reBotArm_control_py（运动学 / 仿真 / 重力补偿）](https://github.com/Seeed-Projects/reBotArm_control_py)
- [RobStride 电机相关文档](https://www.seeedstudio.com/)
- 本仓库中文 README：`README_zh.md`
