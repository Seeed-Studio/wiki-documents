---
title: reBot Arm T701 HT 与 Pinocchio
sidebar_label: Pinocchio
description: 在 reBot Arm T701 HT 上验证正逆运动学，并运行重力补偿、笛卡尔轨迹和键盘控制示例。
keywords:
  - reBot
  - T701 HT
  - Pinocchio
  - 运动学
  - 重力补偿
slug: /rebot_t701_ht_pinocchio
---

import '/src/css/rebot-wiki-style.css';

# reBot Arm T701 HT 与 Pinocchio

<div className="rebot-page">

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT 双臂机器人" />
</div>

T701-HT SDK 使用 Pinocchio 加载 URDF 模型，计算机械臂末端位姿和关节重力矩。你可以先用正运动学（FK）和逆运动学（IK）示例检查实机关节反馈，再运行重力补偿、笛卡尔轨迹和键盘控制示例。

<section className="section-card">

## 实机准备

按 [T701 HT 快速开始的 SDK 安装步骤](/cn/rebot_t701_ht_getting_started/#安装-sdk) 获取 SDK 并安装依赖。然后按快速开始的后续步骤检查串口映射、读取关节和夹爪反馈，并确认零点。

:::warning[启动实机示例前]

- 确认机械臂固定牢靠，取下负载。首次运行时选择单臂。
- 选臂后，动作示例可能立即移动。清空整个运动范围，包括头顶和回零路径。全程现场看护，避开关节和夹爪夹点。
- 启动和退出重力补偿示例时，先托住机械臂，避免补偿力矩撤除后下坠。
- 带自动回零的示例在收到 `Ctrl+C` 后会先回零。回零期间再按 `Ctrl+C` 可中断回零并发送停止命令。

:::

每次打开新终端或连接 SSH 后，先回到 SDK 根目录，激活「快速开始」中创建的 `t701-ht` Conda 环境，再进入 `scripts` 目录。

```bash
conda activate t701-ht
cd scripts
```

运行下文任一示例后，按提示输入 `1`、`2` 或 `3` 选择左臂、右臂或双臂。

</section>

<section className="section-card">

## 验证正逆运动学

正运动学根据当前关节角计算末端位姿。逆运动学验证用这个位姿反求关节角，并与当前读数比较。两个示例只读取关节反馈用于计算，按 `Ctrl+C` 退出时发送电机停止命令。

| 示例 | 运行命令 | 预期输出 |
| --- | --- | --- |
| 实时正运动学（FK） | `python t701_ht_forward_kinematics_test.py` | 约每秒输出末端位置（米）和滚转、俯仰、偏航角（RPY，单位为度）。 |
| 当前位姿 FK → IK 验证 | `python t701_ht_inverse_kinematics_test.py` | 输出当前关节角和末端位置。逆解成功时显示最大关节角误差（弧度）。 |

</section>

<section className="section-card">

## 重力补偿与关节阻抗

`G(q)` 表示模型根据关节角 `q` 计算的重力矩。重力补偿便于手动移动机械臂，关节阻抗示例会主动移向并保持预设姿态。

| 示例 | 运行命令 | 预期行为 |
| --- | --- | --- |
| 重力补偿 | `python t701_ht_gravity_compensation.py` | 施加限幅后的 `0.8 × G(q)`，输出补偿力矩。 |
| 重力补偿并输出 FK | `python t701_ht_gravity_compensation_with_fk.py` | 施加限幅后的 `G(q)`，输出关节角、补偿力矩和末端位姿。 |
| 关节阻抗与重力前馈 | `python t701_ht_joint_impedance_with_gravity.py` | 移向预设关节姿态并保持，叠加重力补偿，输出总力矩。 |
| 关节阻抗、重力与摩擦前馈 | `python t701_ht_joint_impedance_with_gravity_friction.py` | 移向预设关节姿态并保持，叠加重力与摩擦补偿，输出总力矩。 |

按 `Ctrl+C` 退出时，两个重力补偿示例直接停止电机，两个关节阻抗示例先回零再停止。

</section>

<section className="section-card">

## 笛卡尔控制

| 示例 | 运行命令 | 运动过程 |
| --- | --- | --- |
| IK 到点 | `python t701_ht_inv_posvel_control.py` | 先回关节零位。目标位姿逆解通过误差检查后，用 `moveJ` 到点。 |
| QP 逆运动学 | `python t701_ht_qp_ik.py` | 先到 VR 初始姿态，再举臂并在头顶画圆。 |
| MoveL 平移 | `python t701_ht_moveL_pos_control.py` | 保持末端目标朝向，连续走直线、对角线和正方形路径。 |
| MoveL 旋转 | `python t701_ht_moveL_rotate_control.py` | 保持末端目标位置，连续绕末端局部轴旋转并做圆锥运动。 |

两个 MoveL 示例先到 VR 初始姿态，轨迹演示各持续 5 秒。初始定位和回零另计。本节的四个示例结束时均会回零并停止。

</section>

<section className="section-card">

## 键盘控制

在本地交互式终端或 SSH 会话中运行。选臂后，机械臂先自动移动到 VR 初始姿态，再接收按键指令。

| 示例 | 运行命令 | 预期行为 |
| --- | --- | --- |
| 末端位姿 | `python t701_ht_keyboard_cartesian_pos_control.py` | 按键逐步改变末端目标位姿。逆解失败时保持上一关节目标。 |
| 末端速度 | `python t701_ht_keyboard_cartesian_vel_control.py` | 按住键时末端持续平移或旋转，松开后速度指令逐步降至零。 |
| 末端速度与碰撞预测 | `python t701_ht_keyboard_cartesian_vel_collision_control.py` | 按键控制末端速度。预测到碰撞或关节越限时下发零速度并提示。 |
| 笛卡尔阻抗 | `python t701_ht_keyboard_cartesian_impedance_control.py` | 按键调整末端目标位姿，通过关节力矩和重力补偿柔顺跟踪。 |
| 零空间姿态锁定 | `python t701_ht_keyboard_cartesian_pd_nullspace_lock_control.py` | 跟踪末端目标位姿，同时尽量保持参考关节姿态。 |

- **平移**。`W` / `S`、`A` / `D`、`Q` / `E` 分别沿 X、Y、Z 轴移动。
- **旋转**。`1` / `2`、`3` / `4`、`5` / `6` 分别绕 X、Y、Z 轴旋转。
- **重新锁定**。在零空间姿态锁定示例中，按 `R` 将当前关节姿态设为参考姿态。
- **退出**。按 `Esc` 或 `Ctrl+C` 回零并停止。

:::warning[碰撞预测的检查范围]

末端速度与碰撞预测示例到达 VR 初始姿态后，使用 `T701-HT_URDF/meshes/` 中的 STL 网格，预测未来 0.20 秒内的模型碰撞和关节越限。双臂模式也检查两臂之间的碰撞。启动和回零时仍需预留空间，并为夹爪和实际制动距离留出余量。

:::

</section>

</div>
