---
title: reBot Arm T701 HT MIT 控制 SDK
sidebar_label: MIT 控制 SDK
description: 使用 T701-HT SDK 运行单电机 MIT 五参数控制，了解 CAN 通道选择、目标轨迹、状态反馈和回零退出流程。
keywords:
  - reBot
  - T701 HT
  - Python SDK
  - MIT 控制
  - 电机控制
slug: /rebot_t701_ht_control_mit
last_update:
  date: 11/19/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm T701 HT MIT 控制 SDK

<div className="rebot-page">

<div align="center">
  <img
    width={800}
    height={586}
    style={{ height: 'auto', aspectRatio: '800 / 586', objectFit: 'contain', backgroundColor: '#000' }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp"
    alt="reBot Arm T701 HT 双臂机器人"
  />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701-SDK"
  fallbackCount={0}
  ariaLabel="在 GitHub 上为 T701-HT SDK 点亮 Star"
/>

T701-HT SDK 的 MIT 接口同时设置目标位置、目标速度、前馈力矩、位置增益 `Kp` 和速度增益 `Kd`。本页从单电机正弦跟踪示例开始，说明参数、反馈和退出流程。整臂重力补偿和笛卡尔控制示例见 [T701 HT 与 Pinocchio](https://wiki.seeedstudio.com/cn/rebot_t701_ht_pinocchio/)。

<section className="section-card">

## 实机准备

按 [T701 HT 快速开始的 SDK 安装步骤](https://wiki.seeedstudio.com/cn/rebot_t701_ht_getting_started/#安装-sdk) 获取 SDK 并安装依赖。继续完成串口映射、关节和夹爪反馈检查，并确认所选电机的零点。

- **接线**。左臂接 CAN1，右臂接 CAN2。`T701-HT_robot_param/serial_binding.yaml` 中的 `board_serial` 应与通信板 USB 序列号一致。
- **电机编号**。每条臂的 ID1–ID7 对应 7 个关节，ID8 对应夹爪。
- **运行目录**。本页所有命令在 SDK 根目录执行。每次打开新终端或连接 SSH 后，先回到该目录并激活环境。

```bash
conda activate t701-ht
```

:::warning[先核对运动范围，再运行]

执行运动命令后，所选电机会立即开始运动，无需再次选臂或确认。固定好设备，取下负载，清空运动范围和回零路径；全程现场看护，避开关节和夹爪夹点。

原示例目标为 **±π rad（±180°）**，运动循环直接调用底层电机接口，不使用高层关节限位，也不叠加重力补偿。该轨迹可能超出装配后关节或夹爪的允许范围。尤其是 ID8 夹爪，高层配置范围为 **−0.2 至 2.2 rad**，不能直接执行原轨迹。运行前必须按所选机构的实际范围修改目标位置和对应速度，确认整段轨迹及回零路径均可执行。

:::

</section>

<section className="section-card">

## 选择单电机并运行

示例入口为 `scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py`。完成上述轨迹检查和调整后，按实际接线选择下列一条命令。

**左臂 CAN1，电机 ID8：**

```bash
python scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py --can-port 1 --motor-id 8 --arm left
```

**右臂 CAN2，电机 ID8：**

```bash
python scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py --can-port 2 --motor-id 8 --arm right
```

| 参数 | 取值 | 作用 |
| --- | --- | --- |
| `--can-port` | 1–7 | 通信板上的逻辑 CAN 通道。按标准接线，左臂为 1，右臂为 2。 |
| `--motor-id` | 1–8 | 只控制该通道上指定 ID 的一个电机。 |
| `--arm` | `left` / `right` | 选择对应侧的电机型号和回零配置。 |

三个参数均必填，没有默认选臂或电机。`--arm` 不自动选择 CAN 通道，也不对右臂目标轨迹取反。示例内部从对应侧 YAML 生成临时单电机配置，不需要改写整臂的电机列表。

</section>

<section className="section-card">

## MIT 五参数与目标轨迹

以下为示例运动循环中的调用片段，`motor` 和 `robot` 由示例创建。先设置所选电机的命令，再统一发送。

```python
motor.pos_vel_tqe_kp_kd(pos, vel, 0.0, 2, 0.5)
robot.motor_send_cmd()
```

| 参数（按调用顺序） | 含义 | 原示例设定 |
| --- | --- | --- |
| `pos` | 目标位置，rad | `π × sin(2π × 0.1 × t)`，幅值 π rad。 |
| `vel` | 目标速度，rad/s | `0.2 × π² × cos(2π × 0.1 × t)`，为目标位置的时间导数。 |
| `tqe` | 前馈力矩，Nm | `0.0`。前馈为零不代表电机输出力矩为零。 |
| `kp` | 位置增益 | `2`。 |
| `kd` | 速度增益 | `0.5`。 |

原轨迹频率为 **0.1 Hz**，周期为 **10 秒**，目标速度峰值约 **1.974 rad/s**。修改轨迹时，如位置写为 `offset + A × sin(2π × f × t)`，对应速度应为 `A × 2π × f × cos(2π × f × t)`，并确认 `offset − A` 至 `offset + A` 均在允许范围内。

`t` 使用 `time.time()`，起始相位随启动时间变化，目标不保证从零开始。源码注释中的“幅值 1.0 rad”与公式不一致，应以公式中的 **π rad** 为准。

每次发送后等待 `0.001` 秒。通信、计算和打印也占用时间，因此这不是固定 1 kHz 的实时控制周期。

</section>

<section className="section-card">

## 查看状态反馈

启动后，终端显示控制电机数量，并每 100 次循环输出一次所选电机的状态。

| 字段 | 含义 |
| --- | --- |
| `position` | 当前电机位置，输出 rad 和换算后的角度。 |
| `velocity` | 当前电机速度，rad/s。 |
| `torque` | 当前反馈力矩，Nm。 |
| `mode` | 底层 SDK 返回的模式值。 |
| `fault` | 底层 SDK 返回的故障码，按十六进制显示。 |

示例通过 `motor.get_current_motor_state()` 读取这些字段。打印间隔取决于实际循环耗时；此示例只显示模式和故障码，不提供故障码释义。

</section>

<section className="section-card">

## 回零与退出

1. 首次按 `Ctrl+C`，退出正弦跟踪循环，所选电机开始平滑回到已保存的零位。
2. 回零使用位置、速度、最大力矩接口 `pos_vel_MAXtqe()`，结合 `--arm` 指定侧的回零配置执行。
3. 回零完成后，收尾逻辑发送阻尼刹车命令。回零期间再次按 `Ctrl+C` 可中断回零并尝试发送刹车；反馈无效或回零失败时也会尝试刹车。

首次 `Ctrl+C` 会触发回零运动。阻尼刹车不等同于保持当前位置；启动和退出时应做好机构支撑。

</section>

<section className="section-card">

## 在整臂控制中使用 MIT 接口

单电机示例使用底层 `motor` 对象。整臂控制使用 `Lib.t701_ht.T701HT`，关节与夹爪分别调用以下接口。

| 接口 | 参数形式与发送行为 |
| --- | --- |
| `motor.pos_vel_tqe_kp_kd(pos, vel, tqe, kp, kd)` | 单电机的 5 个标量参数，设置后调用 `robot.motor_send_cmd()` 发送。 |
| `arm.pos_vel_tqe_kp_kd(pos, vel, tqe, kp, kd)` | 5 个长度为 7 的关节向量，不包含夹爪。检查配置中的关节目标位置范围，通过后发送；越限时返回 `False`。 |
| `arm.gripper_control_MIT(pos, vel, tqe, kp, kd, send=True)` | 夹爪的 5 个标量参数。检查夹爪目标位置范围，通过后默认发送；`send=False` 时只缓存，供同周期关节命令统一发送。越限时返回 `False`。 |

整臂 MIT 接口的目标位置检查不替代轨迹设计和力矩限幅。需要重力前馈或自动收尾时，参考 [Pinocchio 页](https://wiki.seeedstudio.com/cn/rebot_t701_ht_pinocchio/) 对应的完整示例。

</section>

</div>
